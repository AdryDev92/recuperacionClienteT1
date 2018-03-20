class Herramienta{
    constructor(nombre, descripcion, reparaciones, anios_garantia){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.reparaciones = reparaciones;
        this.anios_garantia = anios_garantia;
    }

    isGood(){
        if(this.reparaciones === 0 && this.anios_garantia >= 5){
            return `${this.nombre}: La herramienta es buena`;
        } else {
            return `${this.nombre}: La herramienta está en malas condiciones`;
        }
    }


}

function tool() {
    let hammer = new Herramienta('martillo','GOLPEAR MATERIALES',0,5);
    let saw = new Herramienta('Serrucho','CORTAR MATERIALES',3,2);
    let wrench = new Herramienta('Llave inglesa', 'APRETAR TUERCAS',2,1);
    let welder = new Herramienta('Soldador', 'UNIR MATERIALES POR CALOR', 0,6);
    let screwdriver = new Herramienta('Destornillador','APRETAR TORNILLOS',7,1);

    console.log(hammer,saw,wrench,welder,screwdriver);
    console.log(hammer.isGood(),"\n"+saw.isGood(),"\n"+wrench.isGood());

    let tools = [
        hammer,
        saw,
        wrench,
        welder,
        screwdriver
    ];

    tools
        .filter(x => x.anios_garantia < 3)
        .sort(function(x,y) {return y-x})
        .filter(x => x.reparaciones % 2 === 0)
        .find(x => x.reparaciones === 0)
        .map(x => x.nombre.toUpperCase()+"-"+x.descripcion.toUpperCase())
        .forEach(x => console.log(x));


}
