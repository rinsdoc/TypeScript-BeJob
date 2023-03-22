export class Telefono {
    private tipo: Telefono.Tipo;
    private numero: number;

    public constructor(tipo:Telefono.Tipo, numero:number) {
        this.tipo = tipo;
        this.numero = numero;
    }

    public getTipo(): Telefono.Tipo {
        return this.tipo;
    }
    public getNumero(): number {
        return this.numero;
    }
}

export namespace Telefono {
    export enum Tipo {
        "Personal", "Empresa"
    };
}