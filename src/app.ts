import { Miner } from "./west-word/Miner";
import { EnterMineAndDigForNugget } from "./west-word/EnterMineAndDigForNugget";

let bob = new Miner(1);
for (let i = 0; i < 20; i++) {
    bob.update();
}