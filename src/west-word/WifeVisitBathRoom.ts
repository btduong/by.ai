import { State } from "../State";
import { MinerWife } from "./MinerWife";

export class WifeVisitBathroom implements State<MinerWife> {
    public static instance(): WifeVisitBathroom {
        return new WifeVisitBathroom();
    }
    enter(wife: MinerWife): void {
        console.log("Walking to the can. Need to pwnda mat pretty little nose");
    }
    execute(wife: MinerWife): void {
        console.log("Ahhhhhhh! Sweet relief!");
        wife.getStateMachine().revertToPreviousState();
    }
    exit(wife: MinerWife): void {
        console.log("Leaving the jon");
    }
    
}