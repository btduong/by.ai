import { BaseGameEntity } from "../BaseEntity";
import { StateMachine } from "../StateMachine";
import { Location } from "./Location";
import { WifeGlobalState } from "./WifeGlobalState";
import { WifeDoHouseWork } from "./WifeDoHouseWork";

export class MinerWife extends BaseGameEntity {

    private stateMachine : StateMachine<this>;
    private location : Location;
    constructor(id: number) {
        super(id);
        this.location = Location.SHACK;
        this.stateMachine = new StateMachine(this);
        this.stateMachine.$currentState = WifeDoHouseWork.instance();
        this.stateMachine.$globalState = WifeGlobalState.instance();
    }

    update(): void {
        this.stateMachine.update();
    }

    getStateMachine() : StateMachine<this> {
        return this.stateMachine;
    }

}