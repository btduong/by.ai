import { State } from "../State";
import { MinerWife } from "./MinerWife";

export class WifeGlobalState implements State<MinerWife> {

    public static instance(): WifeGlobalState {
        return new WifeGlobalState();
    }
    enter(wife: MinerWife): void {
        if (Math.random() < 0.1) {
            wife.getStateMachine().$currentState = null;
        }
    }
    execute(wife: MinerWife): void {

    }
    exit(wife: MinerWife): void {
    }

}