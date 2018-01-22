import { BaseGameEntity } from "./BaseEntity";

export interface State<T> {
    enter(entity: T): void;
    execute(entity: T): void;
    exit(entity: T): void;
}