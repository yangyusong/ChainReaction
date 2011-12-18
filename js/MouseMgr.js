/*
 * @author QingTing
 * @date 2011-12-05
 * @email yys159258@126.com
 * 连锁反应
 * 这个类适合提出一个接口
 */

MouseMgr = function (mouseCircle){
    this.mouseCircle = mouseCircle;
};

MouseMgr.prototype = {
    mouseDown: function (event){
        this.mouseCircle.state = EXPEND;
        _ExpendStart =true;
        g_counter = 10;
        g_MouseEventDispatch.end();
    },
    mouseMove: function(event){
        this.mouseCircle.x = event.clientX-8;
        this.mouseCircle.y = event.clientY-8;
    },
    mouseUp: function(event){}
    };
