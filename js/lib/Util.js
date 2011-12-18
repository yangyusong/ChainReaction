/*
 * @author QingTing
 * @date 2011-12-04
 * @email yys159258@126.com
 * @doc 工具类
 * 连锁反应
 */

var _Util = {
    random: function(x){
        return Math.round(Math.random()*x);
    },
    random_range: function(x, y){
        var rd = Math.round(Math.random()*y);
        while(rd < x){
            rd = Math.round(Math.random()*y);
        }
        return rd;
    },
    dump_obj: function (myObject) {
        var s = "";
        for (var property in myObject) {
            s = s + "\n "+property +": " + myObject[property] ;
        }
        alert(s);
    }
}


