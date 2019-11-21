cc.Class({
    extends: cc.Component,

    properties: {
        title: cc.Label,
    },

    onLoad: function () {
    },

    init: function () {
        this.title.string = '第二关'
    },

    btnAnswer: function (event) {
        SetLocalStorage('wlsn_current_guan_qia', 3)
        UiMgr.show('MsgBox', {
            title: '系统提示',
            str: '喔！你真是太聪明了～进入下一关?',
            btn1Name: '确定',
            btn1: function () {
                UiMgr.hide(this.node.name)
                UiMgr.show(`MsgBox`, { str: '后续关卡开发中...' })
                // UiMgr.show(`GuanQia3`)
            }.bind(this),
            btn2: function () {
                UiMgr.hide(this.node.name)
                UiMgr.show('Select')
            }.bind(this),
        })
    },

    btnReturn: function () {
        UiMgr.show('MsgBox', {
            title: '系统提示',
            str: '是否回到选择关卡界面?',
            btn1Name: '确定',
            btn1: function () {
                UiMgr.hide(this.node.name)
                UiMgr.show('Select')
            }.bind(this),
            btn2Name: '取消',
        })
    },
});
