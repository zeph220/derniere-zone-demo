import bpy, math
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete()
x=y=0
for folder in [ROOT/'07_MODELES_3D/modular_environment', ROOT/'07_MODELES_3D/props_gameplay', ROOT/'07_MODELES_3D/enemies', ROOT/'07_MODELES_3D/vehicles_barricades']:
    for obj in folder.glob('*.obj'):
        bpy.ops.wm.obj_import(filepath=str(obj))
        for ob in bpy.context.selected_objects:
            ob.location.x += x; ob.location.y += y
        x += 3
        if x > 18: x = 0; y += 4
bpy.ops.object.light_add(type='AREA', location=(6,-8,8)); bpy.context.object.data.energy=600; bpy.context.object.data.size=6
bpy.ops.object.camera_add(location=(8,-12,7), rotation=(math.radians(60),0,math.radians(35))); bpy.context.scene.camera=bpy.context.object
print('Import terminé')
