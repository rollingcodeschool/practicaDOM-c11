const cambiarTitulo = () => {
  console.log("Desde la funcion cambiarTitulo");
  //tomar el titulo de la card
  const titulo = document.getElementById("titulo");
  console.log(titulo);
  //modificar el texto del titulo
  titulo.textContent = "Nuevo titulo desde JS";
  titulo.classList.add("text-primary");
};

const cambiarTituloInnerHTML = () => {
  console.log("desde la fucnion cambiar titulo con innerHTML");
  //buscar el titulo h5
  const titulo = document.getElementById("titulo");
  //modificarlo
  titulo.innerHTML = "Soy un nuevo titulo realizado con <b>InnerHTML</b> 😎";
};

const ocultarParrafo = () => {
  //buscar el parrafo
  const parrafos = document.getElementsByTagName("p");
  const btnOcultar = document.querySelector(".btn-danger");
  if (btnOcultar.textContent === "Ocultar párrafo") {
    //cambiar la clase d-none
    parrafos[2].classList.add("d-none");
    btnOcultar.textContent = "Mostrar párrafo";
  } else {
    parrafos[2].classList.remove("d-none");
    btnOcultar.textContent = "Ocultar párrafo";
  }
};

const eliminarParrafo = () => {
  console.log(" aqui deberia eliminar el parrafo");
  if (borrarParrafo) {
    //buscar el parrafo
    const parrafos = document.getElementsByTagName("p");
    console.log(parrafos[3]);
    //luego indicar que se borre
    parrafos[3].remove();
    borrarParrafo = false;
    btnEliminarParrafo.classList.add("disabled");
  }
};

const mostrarNombre = (e) => {
  e.preventDefault();
  //buscar el input
  const nombre = document.querySelector("#nombreInput");
  console.log(nombre);
  //extraer el texto
  //buscar el span del parrafo
  const spanNombre = document.querySelector("#nombreResultado");
  //agregar el texto del input en el span del parrafo
  spanNombre.textContent = nombre.value;
};

const cambiarTema = () => {
  console.log("aqui voy a cambiar el theme 🎨");
  //traer la etiqueta html
  const html = document.documentElement;
  console.log(html.getAttribute("data-bs-theme"));
  //  if(html.getAttribute('data-bs-theme')==='dark'){
  //     html.setAttribute('data-bs-theme','light')
  //  }else{
  //   html.setAttribute('data-bs-theme','dark')
  //  }
  //operador ternario
  //(condicion)? que hago si es true: que hago si es false
  const theme = (html.getAttribute("data-bs-theme") === "dark") ? "light" : "dark"
  html.setAttribute("data-bs-theme",  theme );

  // (html.getAttribute("data-bs-theme")=== 'dark')? html.setAttribute("data-bs-theme","light"):html.setAttribute("data-bs-theme","dark")
};

const agregarTarea = (e)=>{
  e.preventDefault();
  // console.log(formularioTarea.children[0].children[0])
  //necesito tomar el texto del input
  const inputTarea = document.getElementById('tareaInput').value
  //necesito el ul padre para agregar un nuevo item hijo que es un li
  const lista = document.querySelector('.list-group')
  //necesito agregar un li con el texto del input
  lista.innerHTML += `<li class="list-group-item">${inputTarea}</li>`
  // lista.innerHTML =  lista.innerHTML + `<li class="list-group-item">${inputTarea}</li>`
  //limpiar el formulario
  formularioTarea.reset();
}

// const btnCambiarTitulo = document.getElementsByClassName('btn-outline-warning')
const btnCambiarTitulo = document.querySelector(".btn-outline-warning");
const btnEliminarParrafo = document.getElementById("btnEliminarParrafo");
const formulario = document.getElementById("miFormulario");
const btnCambiarTema = document.getElementById("toggleThemeBtn");
const formularioTarea = document.getElementById('tareaForm');
let borrarParrafo = true;

//agregar un manejador de eventos
btnCambiarTitulo.addEventListener("click", cambiarTituloInnerHTML);
btnEliminarParrafo.addEventListener("click", eliminarParrafo);
formulario.addEventListener("submit", mostrarNombre);
btnCambiarTema.addEventListener("click", cambiarTema);
formularioTarea.addEventListener('submit', agregarTarea)