import { State } from "../State";
import { Miner } from "./Miner";
import { Location } from "./Location";
import { EnterMineAndDigForNugget } from "./EnterMineAndDigForNugget";

export class QuenchThirst implements State {

    public static instance(): QuenchThirst {
        return new QuenchThirst();
    }

    enter(miner: Miner): void {
        if (miner.location != Location.SALOON) {
            miner.location = Location.SALOON;

            console.log('Walking to saloon');
        }
    }
    execute(miner: Miner): void {
        if (miner.isThirsty()) {
            miner.buyAndDrinkWhiskey();

            console.log('A mighty fine sipping liquer');
            miner.changeState(EnterMineAndDigForNugget.instance());
        }
        else {
            console.log('ERROR! Something wrong with thirst');
        }
    }
    exit(miner: Miner): void {
        console.log('Laving the saloon. Feeling maach better');
    }
}