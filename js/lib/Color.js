/*
 * @author QingTing
 * @date 2011-12-04
 * @email yys159258@126.com
 * 连锁反应
 */
var _Color = {
    color_rgba_str: function(color){
        return "rgba("
        + Math.floor(color.r * 255) + ","
        + Math.floor(color.g * 255) + ","
        + Math.floor(color.b * 255) + ","
        + color.a + ")";
    },
    color_str: function(color){
        return "rgb("
        + Math.floor(color.r * 255) + ","
        + Math.floor(color.g * 255) + ","
        + Math.floor(color.b * 255) + ")";
    }
}

