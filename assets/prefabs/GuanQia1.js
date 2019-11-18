cc.Class({
    extends: cc.Component,

    properties: {
        title: cc.Label,
        root: cc.Node,
        val: cc.Node,
    },

    onLoad: function () {
        this.config = [
            { val: 17, pos: cc.v2(150, -400), scale: 3, rotation: -20 },
            { val: 25, pos: cc.v2(250, 120), scale: 4, rotation: 20 },
            { val: 39, pos: cc.v2(-200, -370), scale: 3.4, rotation: -10 },
            { val: 43, pos: cc.v2(100, 300), scale: 2.6, rotation: 13 },
            { val: 62, pos: cc.v2(14, -100), scale: 3.3, rotation: 0 },
            { val: 84, pos: cc.v2(-122, 150), scale: 3.7, rotation: 6 },
        ]
    },

    init: function () {
        this.root.removeAllChildren()
        for (var i = 0; i < this.config.length; i++) {
            let val = cc.instantiate(this.val)
            val.getComponent(cc.Label).string = this.config[i].val
            val.setPosition(this.config[i].pos)
            val.scaleX = this.config[i].scale
            val.scaleY = this.config[i].scale
            val.rotation = this.config[i].rotation
            this.root.addChild(val)
        }

        this.title.string = '第一关'
    },

    btnVal: function (event) {
        let idx = this.root.children.indexOf(event.target)
        UiMgr.show('Tips', {
            pos: this.config[idx].pos,
            r: idx == 1 ? true : false,
            callback: function () {
                if (idx == 1) {
                    SetLocalStorage('wlsn_current_guan_qia', ++CurrIdx)
                    UiMgr.show('MsgBox', {
                        title: '系统提示',
                        str: '对哦，是形状最大的数字呢～进入下一关?',
                        btn1Name: '确定',
                        btn1: function () {
                            UiMgr.hide(this.node.name)
                            UiMgr.show(`GuanQia${CurrIdx}`)
                        }.bind(this),
                        btn2: function () {
                            UiMgr.hide(this.node.name)
                            UiMgr.show('Select')
                        }.bind(this),
                    })
                }
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
