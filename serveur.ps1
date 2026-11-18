param([int]$Port = 5174)
# Serveur local minimal pour Derniere Zone DEMO (Windows PowerShell 5.1+)
$root = [System.IO.Path]::GetFullPath($PSScriptRoot).TrimEnd('\') + '\'
$types = @{
  '.html'='text/html; charset=utf-8'; '.htm'='text/html; charset=utf-8'
  '.js'='text/javascript; charset=utf-8'; '.mjs'='text/javascript; charset=utf-8'
  '.css'='text/css; charset=utf-8'; '.json'='application/json'; '.txt'='text/plain; charset=utf-8'
  '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.webp'='image/webp'; '.gif'='image/gif'
  '.svg'='image/svg+xml'; '.ico'='image/x-icon'
  '.glb'='model/gltf-binary'; '.gltf'='model/gltf+json'; '.bin'='application/octet-stream'
  '.mp3'='audio/mpeg'; '.wav'='audio/wav'; '.ogg'='audio/ogg'; '.m4a'='audio/mp4'
  '.mp4'='video/mp4'; '.webm'='video/webm'; '.wasm'='application/wasm'
  '.woff'='font/woff'; '.woff2'='font/woff2'; '.ttf'='font/ttf'
}

# Trouve un port libre (5174, 5175, ...)
$listener = $null
for ($p = $Port; $p -lt $Port + 20; $p++) {
  try {
    $l = New-Object System.Net.HttpListener
    $l.Prefixes.Add("http://127.0.0.1:$p/")
    $l.Start()
    $listener = $l; $Port = $p; break
  } catch { }
}
if (-not $listener) {
  Write-Host "ERREUR : impossible de demarrer le serveur local (ports $Port a $($Port+19) occupes ?)." -ForegroundColor Red
  exit 1
}

$url = "http://127.0.0.1:$Port/"
Write-Host "Derniere Zone DEMO lance sur $url"
Write-Host "Garde cette fenetre ouverte pendant que tu joues. Ferme-la pour arreter."
Start-Process $url

while ($listener.IsListening) {
  try { $ctx = $listener.GetContext() } catch { break }
  $res = $ctx.Response
  try {
    $rel = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($rel)) { $rel = 'index.html' }
    $full = [System.IO.Path]::GetFullPath((Join-Path $root $rel))
    if (Test-Path -LiteralPath $full -PathType Container) { $full = Join-Path $full 'index.html' }
    if (-not $full.StartsWith($root, [StringComparison]::OrdinalIgnoreCase)) {
      $res.StatusCode = 403
    } elseif (-not (Test-Path -LiteralPath $full -PathType Leaf)) {
      $res.StatusCode = 404
      $buf = [Text.Encoding]::UTF8.GetBytes('Fichier introuvable')
      $res.OutputStream.Write($buf, 0, $buf.Length)
    } else {
      $ext = [IO.Path]::GetExtension($full).ToLowerInvariant()
      $type = $types[$ext]; if (-not $type) { $type = 'application/octet-stream' }
      $res.ContentType = $type
      $res.Headers.Add('Cache-Control', 'no-cache')
      $fs = [IO.File]::OpenRead($full)
      try {
        $res.ContentLength64 = $fs.Length
        if ($ctx.Request.HttpMethod -ne 'HEAD') { $fs.CopyTo($res.OutputStream) }
      } finally { $fs.Dispose() }
    }
  } catch {
    # Requete annulee par le navigateur, etc. : on ignore et on continue.
  } finally {
    try { $res.Close() } catch { }
  }
}
