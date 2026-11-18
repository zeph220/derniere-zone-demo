import bpy, math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
dirs = [ROOT/'03_MODELS_OBJ'/'fps_hands', ROOT/'03_MODELS_OBJ'/'interaction_props']

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
        x += 2
        if x > 8:
            x = 0
            y += 2

bpy.ops.object.light_add(type='AREA', location=(3,-5,5))
bpy.context.object.data.energy = 600
bpy.context.object.data.size = 5
bpy.ops.object.camera_add(location=(3,-6,3), rotation=(math.radians(62),0,math.radians(28)))
bpy.context.scene.camera = bpy.context.object
