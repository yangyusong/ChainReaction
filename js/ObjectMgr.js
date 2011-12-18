/*
 * @author QingTing
 * @date 2011-12-05
 * @email yys159258@126.com
 * @doc 对象管理器（管理小球，鼠标小球等）
 * 连锁反应
 */
ObjectMgr = function(width, height){
    this.canvasWidth = width;
    this.canvasHeight = height;
        
};

ObjectMgr.prototype = {
    /*
     * 初始化对象
     */
    init: function(){
        //爆炸数
        this.expendNum = 0;
        //小球
        this.circles = [];
        //鼠标小球
        g_MouseMgr = new MouseMgr(
        new Circle(
            this.canvasWidth/2,
            this.canvasHeight/2,
            SPEED_STOP,
            SPEED_STOP,
            BIG_RADIUS,
            "rgba(200,200,100, 0.5)",
            MID_LIVE_TIME,
            BIG)
        );
        
        for(i = 0; i < g_StepsArr[g_Steps].ballsNum; i++){
            //_Util.dump_obj(_Color.color_str(new Color(Math.random(), Math.random(), Math.random())));
            var raduis = _Util.random_range(SMALL_RADIUS1, SMALL_RADIUS2);
            this.circles.push(new Circle(
                _Util.random_range(raduis*2, this.canvasWidth-2*raduis),
                _Util.random_range(raduis*2, this.canvasHeight-2*raduis),
                _Util.random(SPEED_MIN, SPEED_MAX),
                _Util.random(SPEED_MIN, SPEED_MAX),
                raduis,
                _Color.color_rgba_str(new Color1(Math.random(), Math.random(), Math.random(), 0.8)),
                MID_LIVE_TIME,
                SMALL
                ));
        }
//        this.circles.push(g_MouseMgr.mouseCircle);
    },
    /*
     *每次渲染之前都会有这个游戏对象的处理
     */
    step: function(){
        //        _Util.dump_obj(_Steps);
        this.ballsRange();
        this.expendCheck();
    },
    /*
     * 爆炸检查
     */
    expendCheck: function(){
        if(_ExpendStart){
            this.expendNum = _CircleLib.intersect(this.circles, g_MouseMgr.mouseCircle);
//            _Util.dump_obj(g_StepsArr[g_Steps])
            if(this.expendNum >= g_StepsArr[g_Steps].killNum){
                var next = g_Steps + 1;
                alert("成功爆破超过"+this.expendNum+"个小球，恭喜进入第"+ next + "关，\n\
下一关需要爆破" +g_StepsArr[g_Steps + 1].killNum + "个小球");
                g_Steps++;
                _Main.init();
            }
        }
    },
    /*
     * 球的运动范围约束,还包含了小球爆炸过程
     */
    ballsRange: function(){
        for(var i = 0; i < g_StepsArr[g_Steps].ballsNum; i++){
            if(this.circles[i].state == EXPEND){
                if(this.circles[i].radius < BIG_RADIUS)
                    this.circles[i].radius++;
                continue;
            }
            if(this.circles[i].x > this.canvasWidth - this.circles[i].radius || this.circles[i].x < this.circles[i].radius)
            {
                this.circles[i].xSpeed = (-1) * this.circles[i].xSpeed;
            //alert(this.circles[i].xSpeed);
            }
            if(this.circles[i].y > this.canvasHeight - this.circles[i].radius || this.circles[i].y < this.circles[i].radius)
            {
                this.circles[i].ySpeed = -1 * this.circles[i].ySpeed;
            }
            this.circles[i].x = this.circles[i].x + this.circles[i].xSpeed;
            this.circles[i].y = this.circles[i].y + this.circles[i].ySpeed;
        }
    }
}