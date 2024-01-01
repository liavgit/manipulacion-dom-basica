console.log("hello!")

const h1 = document.querySelector('h1')
const parrafo = document.querySelector('p')
const parrafo2 = document.querySelector('.p2')
const parrafoId = document.getElementById('pid')
const input = document.querySelector('input')

console.log({
    h1,
    parrafo,
    parrafo2,
    parrafoId,
    input
})


//Object { h1: h1, parrafo: p, parrafo2: p.p2, parrafoId: p#pid, input: input }
//en la consola cada elemento despliega una lista de propiedades que son las que podemos usar para interactuar con ese elemento 

/*por ej:
h1: <h1>
​​    accessKey: ""
    accessKeyLabel: ""
    align: ""
    ariaAtomic: null
    ariaAutoCom 
    value:""
    ... etc
*/ 

console.log(input.value) //empty

//Escribiendo HTML desde JavaScript 

//innerhtml permite modificar el texto del elemento q estemos utilizando
h1.innerHTML = 'hoolla <br> lindo';
h1.innerText = 'patito <br> lindo';

//acceder un atributo 
h1.getAttribute('atributo')
console.log(h1.getAttribute('atributo'))

//modificar un atributo 
h1.setAttribute('atributo', 'rojo')

//agregar  una clase
h1.classList.add('rojo')
h1.classList.add('blue')

//elimina clase
h1.classList.remove('rojo')

//cambia el valor del input
input.value = "567"

//creando un nuevo elemento, en este caso una imagen 
console.log(document.createElement('img')) //imprime el tag de img en la consola
const imagen = document.createElement('img')
imagen.setAttribute('src','https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
console.log(imagen);//imprime el tag de img con la url en la consola

//insertar la imagen dentro de un tag de html que ya exisita
//dentro del parrafo 
pid.append(imagen)


//borrar el contenido de  un parrafo
pid.innerHTML = ""
pid.append(imagen)