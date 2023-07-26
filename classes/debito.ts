export class Debito {
    private _valor: number;
    private _data: Date;

    constructor(valor: number, data: Date) {
        this._valor = valor;
        this._data = data;
    }

    //#region [GET]
    public get valor(): number {
        return this._valor;
    }

    public get data(): Date {
        return this._data;
    }
    //#endregion
}