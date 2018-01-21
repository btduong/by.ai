import { BaseGameEntity } from "./BaseEntity";

export interface State {
    enter(entity: BaseGameEntity): void;
    execute(entity: BaseGameEntity): void;
    exit(entity: BaseGameEntity): void;
}