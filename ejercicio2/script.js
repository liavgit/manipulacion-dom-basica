const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const buttonCalcular = document.getElementById('btnCalcular')
const pResult = document.querySelector('#result')

//escuchar  los eventos del boton 
function buttonOnClick() {

    //console.log(input1.value + input2.value);
    const sumaInputs =input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
