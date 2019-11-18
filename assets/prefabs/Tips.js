cc.Class({
    extends: cc.Component,

    properties: {
        gou: cc.Node,
        cha: cc.Node,
    },

    onLoad: function () {
    },

    init: function (info) {
        this.node.stopAllActions()
        this.node.setPosition(info.pos)
        this.node.PathChild('gou').active = info.r
        this.node.PathChild('cha').active = !info.r
        if (info.r) {
            this.node.opacity = 0
            this.node.runAction(cc.sequence(
                cc.fadeIn(0.2),
                cc.delayTime(0.5),
                cc.fadeOut(0.5),
                cc.callFunc(() => {
                    if (info.callback) {
                        info.callback()
                    }
                    UiMgr.hide(this.node.name)
                }),
            ))
        } else {
            this.node.opacity = 255
            this.node.runAction(cc.sequence(
                cc.moveBy(0.05, -5, 0),
                cc.moveBy(0.05, 10, 0),
                cc.moveBy(0.05, -5, 0),
                cc.moveBy(0.05, 10, 0),
                cc.moveBy(0.05, -5, 0),
                cc.moveBy(0.05, 10, 0),
                cc.delayTime(0.5),
                cc.callFunc(() => {
                    if (info.callback) {
                        info.callback()
                    }
                    UiMgr.hide(this.node.name)
                }),
            ))
        }
    },
});