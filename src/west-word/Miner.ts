import { State } from "../State";
import { BaseGameEntity } from "../BaseEntity"

export class Miner extends BaseGameEntity implements State {
    private currentState: State;
    private location: string;
    private goldCarried: number;
    private moneyInBank: number;
    private thirst: number;
    private fatigue: number;

    constructor(public id: number) {
        super(id);
        this.location = "at.home";
        
    }

    changeState(state: State) {
        this.currentState = state;
    }

    update() {
        ++this.fatigue;
        if (this.currentState) {
            this.currentState.execute(this);
        }
    }

    execute() {
    }

    public get $location(): string {
        return this.location;
    }

    public set $location(value: string) {
        this.location = value;
    }
}