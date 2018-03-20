function ejecutarMedia(){

    const media = 3.5;


    /**
     *Usamos parseFloat, ya que al usar parseInt,
     * si pones numeros con decimales, estos no
     * los detecta.
     */
    let personas = [
        parseFloat(document.getElementById("persona1").value),
        parseFloat(document.getElementById("persona2").value),
        parseFloat(document.getElementById("persona3").value),
        parseFloat(document.getElementById("persona4").value),
    ];


    /**
     * Comprobamos que las cuatro personas
     * sean mayores, iguales o inferiores
     * a la media de la constante
     */

    for(let i = 0; i < personas.length; i++) {
        if (personas[i] > media) {
            alert(` ${personas[i]} -> es superior a la media`);
        } else if (personas[i] < media) {
            alert(`${personas[i]} -> es inferior a la media`);
        } else {
            alert(`${personas[i]} -> es igual a la media`);
        }

    }

    let numeroMayor = parseInt(personas[0]);


    /**
     * Comprueba el numero mayor, y en caso de existir
     * otra mas grande, se lo asigna y se convierte en
     * el numero mayor.
     */
    for (let x=0; x <= personas.length; x++) {
        if (personas[x] > numeroMayor){

            numeroMayor = personas[x];
        }
    }
        alert('El mayor peso es: ' + numeroMayor);


}