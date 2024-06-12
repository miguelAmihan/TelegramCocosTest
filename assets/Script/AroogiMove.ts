// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';


    @property({
        type : cc.Animation
    })
    animation:cc.Animation;
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.animation.play("player_moving_amination", 0);

    }

    // update (dt) {}
}
