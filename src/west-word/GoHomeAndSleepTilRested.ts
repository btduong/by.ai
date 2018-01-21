import { State } from "../State";
import { Miner } from "./Miner";
import { Location } from "./Location";
import { EnterMineAndDigForNugget } from "./EnterMineAndDigForNugget";

export class GoHomeAndSLeepTilRested implements State {
    static instance(): GoHomeAndSLeepTilRested {
        return new GoHomeAndSLeepTilRested();
    }

    enter(miner: Miner): void {
        if (miner.location != Location.SHACK) {
            console.log("Walking home");

            miner.location = Location.SHACK;
        }
    }
    execute(miner: Miner): void {
        if (!miner.isFatigued()) {
            console.log("Had a almighty nap! Time to find more gold");

            miner.changeState(EnterMineAndDigForNugget.instance());
        }
        else {
            miner.decreaseFatigue();
            console.log("..Zzzz..");
        }
    }
    exit(miner: Miner): void {
        console.log("Leaving the house");
    }

}