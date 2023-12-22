//variables//
const carrito = document.getElementById("carrito"),
      listaCursos = document.getElementById("lista-cursos"),
      contenedorCarrito = document.querySelector('.buy-card .lista_de_cursos'),
      vaciarCarritoBtn= document.querySelector('#vaciar_carrito');

registrarEventsListeners()

function registrarEventsListeners() {
    //cuando yo le de click  a "agregar al carrito de compras"
    listaCursos.addEventListener('click', agregraCurso);
}

function agregraCurso(e) {
   if (e.target.classList.contains("agregar-carrito")) {
      
   }
}
