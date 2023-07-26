export class Endereco {
    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _cidade: string;
    private _uf: string;
    private _complemento: string;

    constructor(cep: string, logradouro:string, numero: string, cidade: string, uf: string, complemento: string = '') {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._cidade = cidade;
        this._uf = uf;
        this._complemento = complemento;
    }

    //#region [GET]
    public get cep(): string {
        return this._cep;
    }

    public get logradouro(): string {
        return this._logradouro;
    }

    public get numero(): string {
        return this._numero;
    }

    public get complemento(): string {
        return this._complemento;
    }

    public get cidade(): string {
        return this._cidade;
    }

    public get uf(): string {
        return this._uf;
    }
    //#endregion
}