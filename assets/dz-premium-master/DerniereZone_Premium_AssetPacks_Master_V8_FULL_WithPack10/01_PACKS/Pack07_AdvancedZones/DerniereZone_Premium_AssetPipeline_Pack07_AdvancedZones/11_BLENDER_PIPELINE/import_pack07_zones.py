import bpy, math
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
dirs=[ROOT/'04_MODELS_OBJ'/'Hospital_Modular',ROOT/'04_MODELS_OBJ'/'Metro_Modular',ROOT/'04_MODELS_OBJ'/'Laboratory_Modular',ROOT/'04_MODELS_OBJ'/'MilitaryZone_Modular',ROOT/'04_MODELS_OBJ'/'Zone_Props']
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete()
x=0; y=0
for folder in dirs:
    for obj in sorted(folder.glob('*.obj')):
        try: bpy.ops.wm.obj_import(filepath=str(obj))
        except Exception: bpy.ops.import_scene.obj(filepath=str(obj))
        for ob in bpy.context.selected_objects:
            ob.location.x += x; ob.location.y += y
        x += 5
        if x > 20: x=0; y+=5
bpy.ops.object.light_add(type='AREA', location=(8,-10,8)); bpy.context.object.data.energy=800; bpy.context.object.data.size=7
bpy.ops.object.camera_add(location=(10,-15,8), rotation=(math.radians(60),0,math.radians(35))); bpy.context.scene.camera=bpy.context.object
