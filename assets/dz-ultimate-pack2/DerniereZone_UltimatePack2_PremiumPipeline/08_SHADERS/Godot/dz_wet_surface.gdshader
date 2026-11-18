shader_type spatial;

uniform sampler2D base_map;
uniform float wetness : hint_range(0.0, 1.0) = 0.5;
uniform float roughness_value : hint_range(0.0, 1.0) = 0.35;

void fragment() {
    vec4 col = texture(base_map, UV);
    ALBEDO = mix(col.rgb, col.rgb * 0.55, wetness);
    ROUGHNESS = roughness_value;
}
