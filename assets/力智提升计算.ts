// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class 力智提升计算 extends cc.Component {

    @property(cc.EditBox)
    原来力智: cc.EditBox = null;

    @property(cc.EditBox)
    提升力智: cc.EditBox = null;

    @property(cc.Label)
    提升显示: cc.Label = null;

    @property(cc.Integer)
    小数点后多少位 = 3

    开始计算() {
        if (this.原来力智.string == '') {
            cc.log('没有输入原来的力智')
            return
        }
        if (this.提升力智.string == '') {
            cc.log('没有输入提升的力智')
            return
        }
        let 原来力智 = parseInt(this.原来力智.string)
        let 提升力智 = parseInt(this.提升力智.string)
        let 倍率 = 250;//力智250,攻击强化1000
        let 现在力智 = 原来力智 + 提升力智
        let 提升 = (1 + 现在力智 / 倍率) / (1 + 原来力智 / 倍率)
        this.提升显示.string = '提升:' + 提升.toFixed(this.小数点后多少位)
    }
}
