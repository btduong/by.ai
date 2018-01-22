import { State } from "../State";
import { Miner } from "./Miner";
import { Location } from "./Location";
import { VisitBankAndDepositGold } from "./VisitBankAndDepositGold";
import { QuenchThirst } from "./QuenchThirst";

export class EnterMineAndDigForNugget implements State<Miner> {
    public static instance(): EnterMineAndDigForNugget {
        return new EnterMineAndDigForNugget();
    };

    enter(miner: Miner) {
        if (miner.location !== Location.MINE) {
            console.log("Walking to the gold mine from", miner.location);
            miner.location = Location.MINE;
        }
    }

    execute(miner: Miner) {
        miner.addToGoldCarried(1);
        miner.increaseFatigue();
        console.log('Picking up a nugget');

        if (miner.isPocketFull()) {
            miner.changeState(VisitBankAndDepositGold.instance());
        }

        if (miner.isThirsty()) {
            miner.changeState(QuenchThirst.instance());
        }
    }

    exit(miner: Miner) {
        console.log("Leaving the mine");
    }
}