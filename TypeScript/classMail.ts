export class Mail {
    private tipo: Mail.Tipo;
    private direccion: string;

    public constructor(tipo:Mail.Tipo, direccion:string) {
        this.tipo = tipo;
        this.direccion = direccion;
    }

    public getTipo(): Mail.Tipo {
        return this.tipo;
    }
    public getDireccion(): string {
        return this.direccion;
    }
}

export namespace Mail {
    export enum Tipo {
        "Personal", "Empresa"
    };
}