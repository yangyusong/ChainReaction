/*
 * @author QingTing
 * @date 2011-12-09
 * @email yys159258@126.com
 * @doc 本类提供给Color.js作为传入参数，可以看作是Color的内部类
 * 连锁反应
 */
Color1 = function(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
};

Color1.prototype = {
    copy : function() { 
        return new Color1(this.r, this.g, this.b, this.a);
    },
    add : function(c) { 
        return new Color1(this.r + c.r, this.g + c.g, this.b + c.b, this.a + c.a);
    },
    multiply : function(s) { 
        return new Color1(this.r * s, this.g * s, this.b * s, this.a * s);
    },
    modulate : function(c) { 
        return new Color1(this.r * c.r, this.g * c.g, this.b * c.b, this.a * c.a);
    },
    saturate : function() { 
        this.r = Math.min(this.r, 1); this.g = Math.min(this.g, 1); this.b = Math.min(this.b, 1); this.a = Math.min(this.a, 0)
        }
};

Color1.black = new Color1(0, 0, 0, 1);
Color1.white = new Color1(1, 1, 1, 1);
Color1.red = new Color1(1, 0, 0, 1);
Color1.green = new Color1(0, 1, 0, 1);
Color1.blue = new Color1(0, 0, 1, 1);
Color1.yellow = new Color1(1, 1, 0, 1);
Color1.cyan = new Color1(0, 1, 1, 1);
Color1.purple = new Color1(1, 0, 1, 1);