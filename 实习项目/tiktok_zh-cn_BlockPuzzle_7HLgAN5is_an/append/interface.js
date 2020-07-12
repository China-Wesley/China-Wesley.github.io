/**
 * @file {interface.js}
 * 全局接口函数
 */

/**
 * 涉及相关文档文件路径，可直接跳转
 */
//埋点配置文件
///<reference path="../action.json" />

/**
 * 获取64位资源
 * @param {string} key
 */
function getAssestByKey(key) {
    if (window.assetsPackage) {
        return window.assetsPackage[key];
    }
}

var actionedLog = {}; //已埋点记录
/**
 * 埋点
 * @param {number} id action.json 上配置的 action[id]
 * @param {boolean} dedup = false 埋点是否去重
 * @description 本地调用: SDK内部函数
 * @file {action.json}
 */
function sendAction(id, dedup) {
    if (dedup && actionedLog[id]) {
        return;
    }
    actionedLog[id] = true;
    if (gConst.debugModel) {
        console.log("sendAction id =", id);
    }
    if (window.HttpAPI) {
        window.HttpAPI.sendPoint("action&action=" + id);
    }
}

/**
 * 移除普通loading
 * @description 头条SDK: 需要自行移除普通Loaidng
 */
function removeLoading() {
    var loader = document.getElementById("loader-placeholder");
    if (loader) {
        loader.className = "f-dn";
    }
}

/**
 * 游戏开始
 * @description 本地: 作window.load()回调, SDK: 内部回调
 */
function gameStart() {
    /** 移除普通loading */
    removeLoading();

    if (window.playEnterSound) {
        window.playEnterSound("resource/assets/sound/bm_bgm.mp3", arguments);
    }
    window.app.showGame();
}

/**
 * 获取查询字符串
 * @param {string} name 需要查询的字符串
 * @description SDK: 内部回调
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return window.unescape(r[2]);
    return null;
}

/**
 * 窗口加载完毕回调
 * @description 此处一般用于调用: gameStart()
 */
(function () {
    if (!gConst.packModel) {
        window.onload = function () {
            gameStart();
        }
    }
})();

/**
 * 游戏结束
 * @description SDK: 内部回调
 */
function gameClose() {
    if (gConst.debugModel) {
        console.log("window.destorySound", window.destorySound);
    }
    if (window.destorySound) {
        window.destorySound();
    }
}

/**
 * 游戏资源加载完成，准备启动游戏
 * @description SDK: 上报需要
 */
function ready() {
    if (gConst.debugModel) {
        console.log("window.gameReady", window.gameReady);
    }
    if (window.gameReady) {
        window.gameReady();
    }
}

/**
 * 游戏安装
 * @description SDK: 用户点击下载，调用SDK函数
 */
function gameInstall() {
    if (gConst.debugModel) {
        console.log("window.install", window.install);
    }
    if (window.install) {
        window.install();
    }
}

/**
 * 游戏结束
 * @description SDK: 上报需要
 */
function end() {
    if (window._gameEnded) {
        return;
    }
    window._gameEnded = true;
    if (gConst.debugModel) {
        console.log("window.gameEnd", window.gameEnd);
    }
    if (window.gameEnd) {
        window.gameEnd();
    }
}

/**
 * 游戏播放
 * @description SDK: 上报需要，游戏开始或者重新开始的时候调用
 */
function playing() {
    if (gConst.debugModel) {
        console.log("window.playingGame", window.playingGame);
    }
    window._gameEnded = false;
    if (window.playingGame) {
        window.playingGame();
    }
}