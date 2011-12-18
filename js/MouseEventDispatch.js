/*
 * @author QingTing
 * @date 2011-12-05
 * @email yys159258@126.com
 * @doc 鼠标事件分配
 * 连锁反应
 */
MouseEventDispatch = function(){
    }

MouseEventDispatch.prototype = {
    start: function(){

        _Main.canvas.onmousedown = function(event){
            g_MouseMgr.mouseDown(event);
        };
        _Main.canvas.onmousemove = function(event){
            g_MouseMgr.mouseMove(event);
        };
        var again = document.getElementById("again");
        again.onmousedown = function(event){
            _Main.again()
        };
    },

    end: function(){
        _Main.canvas.onmousedown = function(event){};
        _Main.canvas.onmousemove = function(event){};
    }
}