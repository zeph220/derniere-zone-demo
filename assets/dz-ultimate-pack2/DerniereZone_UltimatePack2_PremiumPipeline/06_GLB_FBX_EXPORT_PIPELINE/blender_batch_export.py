import bpy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'exports_final'
OUT.mkdir(exist_ok=True)

# Usage:
# 1. Open Blender.
# 2. Import OBJ/GLB proxies.
# 3. Replace/upgrade mesh.
# 4. Run this script.
# 5. It exports FBX and GLB per selected object.

for obj in bpy.context.selected_objects:
    bpy.ops.object.select_all(action='DESELECT')
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj

    name = obj.name.replace(' ', '_')
    bpy.ops.export_scene.gltf(filepath=str(OUT / f'{name}.glb'), use_selection=True)
    bpy.ops.export_scene.fbx(filepath=str(OUT / f'{name}.fbx'), use_selection=True, add_leaf_bones=False)
