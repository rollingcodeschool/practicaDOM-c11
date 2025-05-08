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

// const btnCambiarTitulo = document.getElementsByClassName('btn-outline-warning')
const btnCambiarTitulo = document.querySelector('.btn-outline-warning')
console.log(btnCambiarTitulo)

//agregar un manejador de eventos
btnCambiarTitulo.addEventListener('click', cambiarTituloInnerHTML)