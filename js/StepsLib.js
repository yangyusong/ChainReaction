/*
 * @author QingTing
 * @date 2011-12-08
 * @email yys159258@126.com
 * 连锁反应
 */

/*
 * 关卡数组初始化
 */
function stepsInit(){
    for(var i = 1; i <= STEPS_NUM; i++)
    {
        j = 0;
        k = 0;
        if(i ===1)
            g_StepsArr[i] = new Steps(i * 5, 2);
        else {
            if(i%3 === 0)
            {
                k = Math.round(i / 2);
            }
            g_StepsArr[i] = new Steps(i * 5, g_StepsArr[i-1].killNum + 2 + k);
        }
    }
//    alert(dumpObj(g_StepsArr, "step", "", 3));
    return g_StepsArr;
}