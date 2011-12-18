/*
 * @author QingTing
 * @date 2011-12-04
 * @email yys159258@126.com
 * @doc 小球的处理函数库
 * 连锁反应
 */

var MOUSE_BALL_NUM = 1;
_CircleLib ={
    /*
     * 交集检测，circles：普通小球，circle：鼠标小球
     */
    intersect:function (circles, circle){
        //爆破过程中的
        expendVisible = [];
        //不可见
        disVisible = [];
        //未爆破的
        move = [];
        //分组
        if(DEBUG){
            dumpObj(circles, "circle", "", 3);
        }
        
        for(var i = 1, len = circles.length; i < len; i++){
            if(circles[i].state === EXPEND)
            {
                expendVisible.push(circles[i]);
            }
            else if(circles[i].state === DIS_VISIBLE)
            {
                disVisible.push(circles[i]);
            }
            else {
                move.push(circles[i]);
            }
        }
    
        if(circle.state == EXPEND)
        {
            expendVisible.push(circle);
        }
        else if(circle.state === DIS_VISIBLE)
        {
            disVisible.push(circle);
        }
        else {
            move.push(circle);
        }

        //特殊状况
        if(move.length === 0)
            return expendVisible.length;
        if(expendVisible.length === 0)
            return 0;
        //查出新的爆炸数量
        newExpendsNum = 0;
        for(var k = 0, lenk = expendVisible.length; k < lenk; k++ ){
            for(var j = 0, len1 = move.length; j < len1; j++){
                //爆炸小球
                if(distence(expendVisible[k].x, expendVisible[k].y, move[j].x, move[j].y)
                    <= expendVisible[k].radius + move[j].radius)
                    {
                    move[j].state = EXPEND;
                    newExpendsNum++;
                }
            }
        }
        var expendNum = expendVisible.length + disVisible.length - MOUSE_BALL_NUM; 
        //        return expendVisible.concat(disVisible).concat(move);
        return expendNum < 0? 0 : expendNum;
    },
    test: function () {
        var circle = new Circle(20, 20, 1, 1, 10, new Color(1, 1, 0), 60, EXPEND);
        var circles = [];
        circles.push(new Circle(20, 20, 0, 0, 10, new Color(1, 1, 0), 60, EXPEND));
        circles.push(new Circle(20, 20, 0, 0, 10, new Color(1, 1, 0), 60, EXPEND));
        circles.push(new Circle(20, 20, 0, 0, 10, new Color(1, 1, 0), 60, EXPEND));
        alert(_CircleLib.intersect(circles, circle));
    }
}



