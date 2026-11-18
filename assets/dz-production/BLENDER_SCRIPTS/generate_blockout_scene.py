# Blender script placeholder for Dernière Zone blockouts.
# Usage: open Blender > Scripting > paste/run, or run:
# blender --background --python generate_blockout_scene.py
import bpy
from mathutils import Vector
from math import radians

bpy.ops.object.delete()

def mat(name, color):
    m = bpy.data.materials.new(name)
    m.diffuse_color = color
    return m

mat_concrete = mat("dirty_concrete", (0.35,0.34,0.31,1))
mat_metal = mat("rusted_metal", (0.25,0.22,0.18,1))
mat_cloth = mat("worn_cloth", (0.25,0.23,0.18,1))
mat_skin = mat("pale_infected_skin", (0.55,0.50,0.46,1))

def cube(name, loc, scale, material):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(material)
    return obj

cube("wall_module_dirty", (0,0,1.5), (4,0.25,3), mat_concrete)
cube("floor_wet_asphalt", (0,0,-0.05), (6,6,0.1), mat_concrete)
cube("door_metal", (0,-1.8,1.2), (1.1,0.12,2.4), mat_metal)
cube("crate", (1.5,1.2,0.35), (0.8,0.8,0.7), mat_metal)

# simple enemy blockout
cube("enemy_torso", (0,2,1.2), (0.65,0.35,1.1), mat_cloth)
cube("enemy_head", (0,2,1.95), (0.38,0.38,0.38), mat_skin)
cube("enemy_arm_L", (-0.5,2,1.25), (0.2,0.2,0.9), mat_skin)
cube("enemy_arm_R", (0.5,2,1.25), (0.2,0.2,0.9), mat_skin)

bpy.ops.wm.save_as_mainfile(filepath="DerniereZone_Blockout.blend")
