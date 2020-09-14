export class ViajeDestino{
    private Selected: boolean;
    public servicios: string[];
    constructor(public nombre: string, public u: string){
        this.servicios = ['Pileta','Desayuno','Tenis','Football','Natacion','Cine','Videojuegos'];
    }
        isSelected(): boolean{
            return this.Selected;
        }
        setSelected(s: boolean){
            this.Selected = true;
        }
    }

