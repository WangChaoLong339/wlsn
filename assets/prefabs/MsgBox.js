cc.Class({
    extends: cc.Component,

    properties: {
        title: cc.Label,
        str: cc.Label,
        btnRoot: cc.Node,
    },

    onLoad: function () {
    },

    init: function (info) {
        this.title.string = `${info.title || '系统提示'}`
        this.str.string = `${info.str}`
        this.btnRoot.PathChild('btn1/val', cc.Label).string = `${info.btn1Name || '确认'}`
        this.btnRoot.PathChild('btn2/val', cc.Label).string = `${info.btn2Name || '取消'}`
        this.btn1 = info.btn1
        this.btn2 = info.btn2
    },

    btnBtn1: function () {
        this.btn1()
        UiMgr.hide(this.node.name)
    },

    btnBtn2: function () {
        if (this.btn2) {
            this.btn2()
        }
        UiMgr.hide(this.node.name)
    },
});