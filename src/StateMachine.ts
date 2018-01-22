import { State } from './State';

export class StateMachine<T> {
    private owner: T;
    private currentState: State<T>;
    private previousState: State<T>;
    private globalState: State<T>;

    constructor(newOwner: T) {
        this.owner = newOwner;
        this.currentState = null;
        this.previousState = null;
        this.globalState = null;
    }

    get $currentState(): State<T> {
        return this.currentState;
    }

    set $currentState(state: State<T>) {
        this.currentState = state;
    }

    get $previousState(): State<T> {
        return this.previousState;
    }

    set $previousState(state: State<T>) {
        this.previousState = state;
    }

    get $globalState(): State<T> {
        return this.globalState;
    }

    set $globalState(state: State<T>) {
        this.globalState = state;
    }

    update(): void {
        if (this.globalState) {
            this.globalState.execute(this.owner);
        }

        if (this.currentState) {
            this.currentState.execute(this.owner);
        }
    }

    changeState(newState: State<T>) {
        // Save current state
        this.previousState = this.currentState;
        this.currentState.exit(this.owner);

        this.currentState = newState;

        // Kick off new state
        this.currentState.execute(this.owner);
    }


}