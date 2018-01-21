import { State } from "../State";
import { Location } from "./Location";
import { BaseGameEntity } from "../BaseEntity";
import { GoHomeAndSLeepTilRested } from "./GoHomeAndSleepTilRested";


export class Miner extends BaseGameEntity {
    private static MAX_COMFORT_LEVEL = 5;
    private static MAX_NUGGETS = 3;
    private static MAX_THIRST_LEVEL = 5;
    private static MAX_TIREDNESS_THRESHOLD = 5;

    private currentState: State;
    private currentLocation: Location;
    private goldCarried: number;
    private moneyInBank: number;
    private thirstLevel: number;
    private fatigue: number;

    constructor(public id: number) {
        super(id);
        this.moneyInBank = 0;
        this.goldCarried = 0;
        this.thirst = 0;
        this.fatigue = 0;
        this.currentLocation = Location.SHACK;
        this.currentState = GoHomeAndSLeepTilRested.instance();

    }

    changeState(newState: State) {
        if (this.currentState !== null && newState !== null) {
            this.currentState.exit(this);
            this.currentState = newState;
            this.currentState.enter(this);
        }
    }

    update() {
        ++this.fatigue;
        if (this.currentState) {
            this.currentState.execute(this);
        }
    }

    public get location(): Location {
        return this.currentLocation;
    }

    public set location(location: Location) {
        this.currentLocation = location;
    }

    public get thirst() {
        return this.thirstLevel;
    }

    public set thirst(value: number) {
        this.thirstLevel = value;
    }

    public increaseFatigue(): void {
        ++this.fatigue;
    }

    public decreaseFatigue(): void {
        --this.fatigue;
    }

    public addToGoldCarried(n: number): void {
        this.goldCarried += n;
    }

    public isPocketFull(): boolean {
        if (this.goldCarried == Miner.MAX_NUGGETS) {
            return true;
        }
        return false;
    }

    public pocketFull(): boolean {
        if (this.goldCarried === 5) {
            return true;
        }
        return false;
    }

    public get getGoldCarried() {
        return this.goldCarried;
    }

    public set setGoldCarried(gold: number) {
        this.goldCarried = gold;
    }

    public addToWealth(gold: number): void {
        this.moneyInBank += gold;

        if (this.moneyInBank < 0) {
            this.moneyInBank = 0;
        }
    }

    public wealth(): number {
        return this.moneyInBank;
    }

    public get comfortLevel() {
        return Miner.MAX_COMFORT_LEVEL;
    }

    public isThirsty(): boolean {
        if (this.thirst >= Miner.MAX_THIRST_LEVEL) {
            return true;
        }
        return false;
    }

    public buyAndDrinkWhiskey(): void {
        this.thirst = 0;
        this.moneyInBank -= 2;
    }

    public isFatigued(): boolean {
        if (this.fatigue > Miner.MAX_TIREDNESS_THRESHOLD) {
            return true;
        }
        return false;
    }

}