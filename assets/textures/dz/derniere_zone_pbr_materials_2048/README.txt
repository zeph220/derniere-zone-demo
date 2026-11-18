Dernière Zone — Pack matériaux PBR procéduraux 2048x2048

Contenu :
- 7 matériaux : asphalte_mouille, beton_fissure, mur_sale, metal_rouille, bois_use, tissu_use, verre_sale
- Chaque dossier contient :
  *_albedo.png / *_basecolor.png : couleur de base
  *_normal.png : normal map tangent space
  *_roughness.png : rugosité en niveaux de gris
  *_ao.png : ambient occlusion en niveaux de gris
  *_height.png : height/displacement optionnel

Notes :
- Textures procédurales originales, utiles comme base de direction artistique ou placeholders propres.
- Ce ne sont pas des scans PBR professionnels.
- Unity : importer *_normal.png en Texture Type = Normal Map.
- Godot : utiliser StandardMaterial3D et brancher Albedo/BaseColor, Normal, Roughness et AO.
- Format : PNG carré 2048x2048.
