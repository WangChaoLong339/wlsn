cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        // 管理
        window.UiMgr = this.node.PathChild("showRoot", "UiMgr")
        // 获取当前关卡
        window.CurrIdx = GetLocalStorage('wlsn_current_guan_qia') || 1
    },

    onEnable: function () {
        // 打开选择界面
        UiMgr.show('Select')
    },

    btnReturn: function () {
        UiMgr.show('MsgBox', {
            title: '系统提示',
            str: '是否回到主界面?',
            btn1Name: '确定',
            btn1: function () {
                cc.director.loadScene('Home')
            }.bind(this),
            btn2Name: '取消',
        })
    },
});
