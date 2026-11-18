import bpy, math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
dirs = [ROOT/'03_MODELS_OBJ'/'shelter_core', ROOT/'03_MODELS_OBJ'/'props_detail']

bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

x = 0
y = 0
for folder in dirs:
    for obj in sorted(folder.glob('*.obj')):
        try:
            bpy.ops.wm.obj_import(filepath=str(obj))
        except Exception:
            bpy.ops.import_scene.obj(filepath=str(obj))
        for ob in bpy.context.selected_objects:
            ob.location.x += x
            ob.location.y += y
        x += 2.8
        if x > 10:
            x = 0
            y += 3

bpy.ops.object.light_add(type='AREA', location=(4,-6,6))
bpy.context.object.data.energy = 700
bpy.context.object.data.size = 5
bpy.ops.object.camera_add(location=(5,-8,5), rotation=(math.radians(60),0,math.radians(35)))
bpy.context.scene.camera = bpy.context.object
