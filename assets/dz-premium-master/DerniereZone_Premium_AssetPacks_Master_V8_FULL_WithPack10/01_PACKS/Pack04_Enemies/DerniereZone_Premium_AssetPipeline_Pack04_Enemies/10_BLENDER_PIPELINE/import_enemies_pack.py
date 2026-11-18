import bpy, math
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
dirs=[ROOT/'03_MODELS_OBJ'/'enemy_normal',ROOT/'03_MODELS_OBJ'/'enemy_fast',ROOT/'03_MODELS_OBJ'/'enemy_blind',ROOT/'03_MODELS_OBJ'/'enemy_heavy',ROOT/'03_MODELS_OBJ'/'enemy_lab_subject']
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete()
x=0
for folder in dirs:
    for obj in sorted(folder.glob('*.obj')):
        try: bpy.ops.wm.obj_import(filepath=str(obj))
        except Exception: bpy.ops.import_scene.obj(filepath=str(obj))
        for ob in bpy.context.selected_objects: ob.location.x += x
        x += 2.5
bpy.ops.object.light_add(type='AREA', location=(4,-6,6)); bpy.context.object.data.energy=700; bpy.context.object.data.size=5
bpy.ops.object.camera_add(location=(5,-8,4), rotation=(math.radians(62),0,math.radians(32))); bpy.context.scene.camera=bpy.context.object
