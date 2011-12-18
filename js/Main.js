/*
 * @author QingTing
 * @date 2011-12-04
 * @email yys159258@126.com
 * @doc 主类，包括初始化和渲染。可以看做所有类的服务中心
 * 连锁反应
 */
var g_ObjectMgr = null;
var g_MouseEventDispatch = new MouseEventDispatch();
var g_MouseMgr = null;//g_MouseMgr在g_ObjectMgr初始化后才初始化
//当前关
var g_Steps = 1;//todo 显示出来
//关卡数组
var g_StepsArr = [];
g_StepsArr = stepsInit();
//爆炸开始标识
var _ExpendStart = false;

if(DEBUG){
    _CircleLib.test();
}
var _Main = {
    canvas:document.getElementById("canvas"),

    /*
     * 初始化，并调用step循环
     */
    init: function(){
        clearTimeout(this._st);
        if(this.canvas.getContext)
        {
            g_ObjectMgr = new ObjectMgr(this.canvas.width, this.canvas.height);
            g_MouseEventDispatch.start();
            this.ctx = this.canvas.getContext("2d");
            this.initObjects();
            this.step();
        }
    },

    /*
     * 再玩一次（本级）
     */
    again: function(){
        this.nextStep()
    },

    /*
     * 下一关
     */
    nextStep: function(){
        clearTimeout(this._st);
        if(this.canvas.getContext)
        {
            g_MouseEventDispatch.start();
            this.initObjects();
            this.step();
        }
    },

    /*
     * 循环绘图
     * 1.清空画面
     * 2.游戏对象关系处理
     * 3.渲染出来
     * 4.循环调用
     */
    step: function(){
        this.clear();
        g_ObjectMgr.step();
        this.render();
        _this = this;
        this._st = setTimeout(function(){
            _this.step();
        }, 50);
    },

    /*
     * 渲染图形
     */
    render: function(){
        var ballsNum = g_ObjectMgr.circles.length;
        //渲染
        for(var i = 0; i < ballsNum; i++){
            g_ObjectMgr.circles[i].liveTimeCheck();
            g_ObjectMgr.circles[i] = this.setColorDrow(g_ObjectMgr.circles[i]);
            this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        }
        //MouseMgr，单独的对象
        if(g_MouseMgr.mouseCircle.state !== DIS_VISIBLE){
            g_MouseMgr.mouseCircle.liveTimeCheck();
            g_MouseMgr.mouseCircle = this.setColorDrow(g_MouseMgr.mouseCircle);
        }
        
    },

    /*
     * 画圆功能，不包含颜色
     */
    drowCircle: function(circle){
        this.ctx.beginPath();
        this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2, true);
        this.ctx.closePath();
        this.ctx.fill();
    },

    /*
     * 更新状态选取颜色
     */
    setColorDrow: function(circle){
        if(circle.state == END){
            this.ctx.fillStyle = "rgba(255,255,255,0)";
            this.drowCircle(circle);
            circle.state = DIS_VISIBLE;
        }
        else if(circle.state != DIS_VISIBLE){
            this.ctx.fillStyle = circle.color.toString();
            this.drowCircle(circle);
        }
        return circle;
    },

    /*
     * 清空画面
     */
    clear: function(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    /*
     * 初始化游戏对象
     */
    initObjects: function(){
        g_ObjectMgr.init();
    }
}

