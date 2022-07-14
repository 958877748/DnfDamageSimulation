// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class 强化攻击提升计算 extends cc.Component {

    @property(cc.EditBox)
    原来强化攻击: cc.EditBox = null;

    @property(cc.EditBox)
    提升强化攻击: cc.EditBox = null;

    @property(cc.Label)
    提升显示: cc.Label = null;

    @property(cc.Integer)
    小数点后多少位 = 3

    开始计算() {
        if (this.原来强化攻击.string == '') {
            cc.log('没有输入原来的强化攻击')
            return
        }
        if (this.提升强化攻击.string == '') {
            cc.log('没有输入提升的强化攻击')
            return
        }
        let 原来强化攻击 = parseInt(this.原来强化攻击.string)
        let 提升强化攻击 = parseInt(this.提升强化攻击.string)
        let 倍率 = 1000;//力智250,攻击强化1000
        let 现在强化攻击 = 原来强化攻击 + 提升强化攻击
        let 提升 = (1 + 现在强化攻击 / 倍率) / (1 + 原来强化攻击 / 倍率)
        this.提升显示.string = '提升:' + 提升.toFixed(this.小数点后多少位)
    }
}
