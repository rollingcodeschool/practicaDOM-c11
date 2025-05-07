const cambiarTitulo = ()=>{
    console.log('Desde la funcion cambiarTitulo')
    //tomar el titulo de la card 
    const titulo = document.getElementById('titulo')
    console.log(titulo)
    //modificar el texto del titulo
    titulo.textContent = 'Nuevo titulo desde JS'
    titulo.classList.add('text-primary')
}