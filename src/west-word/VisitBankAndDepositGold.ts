import { State } from '../State';
import { Miner } from "./Miner";
import { Location } from "./Location";
import { GoHomeAndSLeepTilRested } from './GoHomeAndSleepTilRested';
import { EnterMineAndDigForNugget } from './EnterMineAndDigForNugget';


export class VisitBankAndDepositGold implements State<Miner> {
    public static instance(): VisitBankAndDepositGold {
        return new VisitBankAndDepositGold();
    }

    enter(miner: Miner): void {
        if (miner.location !== Location.BANK) {
            console.log('Going to the bank');
            miner.location = Location.BANK;
        }
    }

    execute(miner: Miner): void {
        miner.addToWealth(miner.getGoldCarried);
        miner.setGoldCarried = 0;

        console.log('Depositing gold. Total saving = ', miner.wealth());

        if (miner.wealth() > miner.comfortLevel) {
            console.log("Whoa! Rich enough for now. Back to home with ma li'lle lady");
            miner.changeState(GoHomeAndSLeepTilRested.instance());
        }
        else {
            miner.changeState(EnterMineAndDigForNugget.instance());
        }
    }

    exit(miner: Miner): void {
        console.log('Leaving the bank');
    }
}