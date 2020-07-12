/**
 * 常量配置表 (业务层)
 * @file {const.js}
 * @description 业务层常量配置放这里，方便：经常改动、开发时调整配置 (打包时直接替换文件即可)。
 * @description {G_Const.ts} 框架层常量配置放 G_Const.ts，一般改动不大，只做拓展多。
 */
var gConst;
(function (gConst) {
    /** 调试模式 */
    gConst.debugModel = false;

    /** 打包提测模式，用于提测时需要规避的一些事情 */
    gConst.packModel = true;

    /** 去除特效模式，默认为:false,  true: 去除特效，用于特殊平台需要去掉Ending按钮动画效果之类 */
    gConst.notEffectModel = false;

    /** 游戏结束倒计时 */
    gConst.endTimer = 3000;

})(gConst || (gConst = {}));