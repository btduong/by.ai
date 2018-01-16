import { BaseGameEntity } from "./BaseEntity";

export interface State {
    execute(entity: BaseGameEntity): void;
}