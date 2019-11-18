cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
    },

    btnStart: function () {
        cc.director.loadScene('Game')
    },
});
