/**
 * 游戏配置表
 * @file {config.js}
 * @description 游戏配置放这里，方便：需求调整配置 (打包时直接替换文件即可)。
 */
var gConfig;
(function (gConfig) {
    /** 
     * logo水平对齐方式（区分横、竖屏）
     * @description 1:左 2:中 3:右
     */
    gConfig.logoAlignH = {
        //竖屏
        "1": 2,
        //横屏
        "0": 3,
    };

    /** logo距离上间距 */
    gConfig.logoTop = 60;

    /** logo距离左or右间距 */
    gConfig.logoSpaceH = 20;

    /** 设备类型对应整体缩放倍数 */
    gConfig.mobileByScale = {
        //竖屏
        "1": {
            "1": 1.5, //iPhoneX或以上
            "2": 1.5, //iPhone8或以下
            "3": 1.2, //iPad或其它
        },
        //横屏
        "0": {
            "1": 1, //iPhoneX或以上
            "2": 1, //iPhone8或以下
            "3": 0.8, //iPad或其它
        }
    }

    /** 全局可点模式，用于Ending时全局点击可上报安装 window.install() */
    gConfig.globalClick = true;

    /** 是否显示下载按钮 */
    gConfig.isShowBtn = false;

    /** 下载按钮是否做按钮呼吸动画 */
    gConfig.isYoyoBtn = true;

    /** logo与下载按钮间距 */
    gConfig.logoBtnSpace = 20;

})(gConfig || (gConfig = {}));