// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class 属强提升计算 extends cc.Component {

    @property(cc.EditBox)
    原来属强: cc.EditBox = null;

    @property(cc.EditBox)
    提升属强: cc.EditBox = null;

    @property(cc.Label)
    提升显示: cc.Label = null;

    @property(cc.Integer)
    小数点后多少位 = 3

    开始计算() {
        if (this.原来属强.string == '') {
            cc.log('没有输入原来的属强')
            return
        }
        if (this.提升属强.string == '') {
            cc.log('没有输入提升的属强')
            return
        }
        let 原属强 = parseInt(this.原来属强.string)
        let 提升属强 = parseInt(this.提升属强.string)
        let 现属强 = 原属强 + 提升属强
        let 原伤害 = 1.05 + 0.0045 * 原属强
        let 现伤害 = 1.05 + 0.0045 * 现属强
        let 提升 = 现伤害 / 原伤害
        this.提升显示.string = '提升:' + 提升.toFixed(this.小数点后多少位)
    }
}
