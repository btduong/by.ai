import { State } from "../State";
import { MinerWife } from "./MinerWife";

export class WifeDoHouseWork implements State<MinerWife> {
    public static instance() : WifeDoHouseWork {
        return new WifeDoHouseWork();
    }

    enter(entity: MinerWife): void {
    }
    execute(entity: MinerWife): void {
        let n = Math.floor(Math.random() * 3);

        switch (n) {
            case 0: {
                console.log("Mooping the floor");
                break;
            }
            case 1: {
                console.log("Washing the dishes");
                break;
            }
            case 2: {
                console.log("Makin' the bed");
                break;
            }
            default: {
                throw new Error("Should never get here!" + n);
            }
        }
    }
    exit(entity: MinerWife): void {
    }
    
}