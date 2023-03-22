export class Dirección {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigoPostal: number;
    private poblacion: string;
    private provincia: string;

    public constructor(calle:string, numero:number, piso:number, letra:string, codigoPostal:number,
        poblacion:string, provincia:string) {
            this.calle = calle;
            this.numero = numero;
            this.piso = piso;
            this.letra = letra;
            this.codigoPostal = codigoPostal;
            this.poblacion = poblacion;
            this.provincia = provincia;
        }
    
    public getCalle(): string {
        return this.calle;
    }
    public getNumero(): number {
        return this.numero;
    }
    public getPiso(): number {
        return this.piso;
    }
    public getLetra(): string {
        return this.letra;
    }
    public getCodigoPostal(): number {
        return this.codigoPostal;
    }
    public getPoblacion(): string {
        return this.poblacion;
    }
    public getProvincia(): string {
        return this.provincia;
    }
}