abstract class BaseGameEntity {
    private _id: number;

    constructor(public id: number) {
        this._id = id;
    }

    setId(id: number) {
        this._id = id;
    }

    /**
     * All entities must have update();
     */
    abstract update();

    getId() {
        return this._id;
    }
}