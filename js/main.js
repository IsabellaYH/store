document.addEventListener('DOMContentLoaded', function() {
  const botones = document.querySelectorAll('[data-filter]');
  const productos = document.querySelectorAll('.product-card');
  const contenedores = document.querySelectorAll('.col-lg-4, .col-md-6');

  console.log('Iniciando sistema de filtrado...');
  console.log('Botones encontrados:', botones.length);
  console.log('Productos encontrados:', productos.length);

  // Función para filtrar productos
  function filtrarProductos(filtro) {
    console.log('Aplicando filtro:', filtro);
    
    let productosVisibles = 0;
    
    contenedores.forEach(contenedor => {
      const producto = contenedor.querySelector('.product-card');
      
      if (filtro === 'all' || producto.classList.contains(filtro)) {
        contenedor.classList.remove('oculto');
        productosVisibles++;
        console.log('✓ Mostrando:', producto.querySelector('.product-name').textContent);
      } else {
        contenedor.classList.add('oculto');
        console.log('✗ Ocultando:', producto.querySelector('.product-name').textContent);
      }
    });
    
    console.log('Productos visibles:', productosVisibles);
    
    // Mostrar mensaje si no hay productos
    const mensajeNoResultados = document.getElementById('no-resultados');
    if (productosVisibles === 0 && !mensajeNoResultados) {
      const mensaje = document.createElement('div');
      mensaje.id = 'no-resultados';
      mensaje.className = 'col-12 text-center py-5';
      mensaje.innerHTML = `
        <div class="alert alert-info">
          <i class="fas fa-info-circle me-2"></i>
          No hay productos en esta categoría.
        </div>
      `;
      document.querySelector('.row').appendChild(mensaje);
    } else if (mensajeNoResultados && productosVisibles > 0) {
      mensajeNoResultados.remove();
    }
  }

  // Event listeners para botones
  botones.forEach(boton => {
    boton.addEventListener('click', function() {
      // Remover active de todos los botones
      botones.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
      });
      
      // Agregar active al botón clickeado
      this.classList.add('active');
      this.classList.remove('btn-outline-primary');
      this.classList.add('btn-primary');
      
      // Aplicar filtro
      const filtro = this.getAttribute('data-filter');
      filtrarProductos(filtro);
    });
  });

  // Activar el filtro "all" por defecto
  const botonAll = document.querySelector('[data-filter="all"]');
  if (botonAll) {
    botonAll.classList.add('active');
    botonAll.classList.remove('btn-outline-primary');
    botonAll.classList.add('btn-primary');
  }
  
  console.log('Sistema de filtrado inicializado correctamente');
});