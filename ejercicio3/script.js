const h1 = document.querySelector('h1')
const formulario = document.querySelector('#formID')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const buttonCalcular = document.getElementById('btnCalcular')
const pResult = document.querySelector('#result')

/*
//escucha eventos... nombre del evento en este caso click  + funcion js SIN PARENTESIS
buttonCalcular.addEventListener('click', buttonOnClick);

//escuchar  los eventos del boton 
function buttonOnClick() {

    //console.log(input1.value + input2.value);
    const sumaInputs =input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
*/

formulario.addEventListener('submit', sumarInputValues);

//escuchar  los eventos del boton 
function sumarInputValues(event) {

    //console.log({event});
    event.preventDefault();
    //console.log(input1.value + input2.value);
    const sumaInputs =input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}