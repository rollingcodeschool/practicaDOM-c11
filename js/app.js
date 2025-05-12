const cambiarTitulo = ()=>{
    console.log('Desde la funcion cambiarTitulo')
    //tomar el titulo de la card 
    const titulo = document.getElementById('titulo')
    console.log(titulo)
    //modificar el texto del titulo
    titulo.textContent = 'Nuevo titulo desde JS'
    titulo.classList.add('text-primary')
}

const cambiarTituloInnerHTML = ()=>{
    console.log('desde la fucnion cambiar titulo con innerHTML')
    //buscar el titulo h5
    const titulo = document.getElementById('titulo')
    //modificarlo
    titulo.innerHTML = 'Soy un nuevo titulo realizado con <b>InnerHTML</b> 😎'
}

const ocultarParrafo = ()=>{
    //buscar el parrafo
    const parrafos = document.getElementsByTagName('p')
    const btnOcultar = document.querySelector('.btn-danger')
    if(btnOcultar.textContent === 'Ocultar párrafo'){
        //cambiar la clase d-none
        parrafos[2].classList.add('d-none')
        btnOcultar.textContent = 'Mostrar párrafo'
    }else{
        parrafos[2].classList.remove('d-none')
        btnOcultar.textContent = 'Ocultar párrafo'
    }
}

const eliminarParrafo = ()=>{
    console.log(' aqui deberia eliminar el parrafo')
    if(borrarParrafo){
        //buscar el parrafo
        const parrafos = document.getElementsByTagName('p')
        console.log(parrafos[3])
        //luego indicar que se borre
        parrafos[3].remove();
        borrarParrafo=false
        btnEliminarParrafo.classList.add('disabled')
    }
}


// const btnCambiarTitulo = document.getElementsByClassName('btn-outline-warning')
const btnCambiarTitulo = document.querySelector('.btn-outline-warning')
const btnEliminarParrafo = document.getElementById('btnEliminarParrafo')
let borrarParrafo = true;

//agregar un manejador de eventos
btnCambiarTitulo.addEventListener('click', cambiarTituloInnerHTML)
btnEliminarParrafo.addEventListener('click',eliminarParrafo)
