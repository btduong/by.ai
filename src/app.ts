import { Miner } from "./west-word/Miner";
import { EnterMineAndDigForNugget } from "./west-word/EnterMineAndDigForNugget";
import { MinerWife } from "./west-word/MinerWife";

let bob = new Miner(1);
let elsa = new MinerWife(2);
for (let i = 0; i < 20; i++) {
    bob.update();
    elsa.update();
}