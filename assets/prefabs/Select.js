cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        item: cc.Node,
        currentGuanQia: cc.Node,
    },

    onLoad: function () {
        // 每列显示数量
        this.clumnCount = 5
        // 获取屏幕宽度
        this.viewWidth = parseInt(cc.winSize.width) - 20
    },

    init: function () {
        // 选择关卡
        this.currentGuanQia.getComponent(cc.Label).string = '请选择关卡'
        // 显示有效关卡
        this.showContent()
    },

    showContent: function () {
        this.content.removeAllChildren()
        for (var i = 0; i < 50; i++) {
            let item = cc.instantiate(this.item)
            item.PathChild('val', cc.Label).string = `第${i + 1}关`
            item.width = parseInt((this.viewWidth - (this.clumnCount - 1) * 10) / this.clumnCount)
            item.color = i < CurrIdx ? cc.Color.WHITE : cc.Color.GRAY
            this.content.addChild(item)
        }
    },

    btnItem: function (event) {
        let idx = this.content.children.indexOf(event.target)
        // 非法关卡
        if (idx >= CurrIdx) {
            return
        }
        // 打开关卡
        UiMgr.show(`GuanQia${idx + 1}`)
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
