/*
 * @author QingTing
 * @date 2011-12-04
 * @email yys159258@126.com
 * 连锁反应
 */

function Circle(x, y, xSpeed, ySpeed, radius, color, liveTime, state){
    //圆心坐标
    this.x = x;
    this.y = y;
    //运动速度
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    //半径
    this.radius = radius;
    //颜色
    this.color = color;
    //生存计数器
    this.liveTime = liveTime;
    //状态：
    this.state = state;
}//8

Circle.prototype = {
    //生存期检测，依据状态来修改计数和状态，普通状态不受影响
    liveTimeCheck: function(){
        if(this.state != END){
            if(this.liveTime == 0)
            {
                this.state = END;
            }
            if(this.liveTime != 0 && this.state == EXPEND)
            {
                this.liveTime = this.liveTime-1;
            }
        }
    },
    toSting: function(){
        return this.x + "y:" + this.y + "radius" + this.radius;
    },
    copy: function(){
        return new Circle(this.x, this.y, this.xSpeed, this.ySpeed, this.radius, this.color, this.liveTime, this.state);
    }
}
