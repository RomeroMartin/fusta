document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todas las tarjetas de producto
    var productos = document.querySelectorAll('.producto');

    // Iterar sobre cada tarjeta de producto
    productos.forEach(function (producto) {
        producto.addEventListener('click', function () {
            // Obtener los datos del producto desde los atributos data-*
            var titulo = this.getAttribute('data-title');
            var descripcion = this.getAttribute('data-description');
            var imagenes = JSON.parse(this.getAttribute('data-images'));

            // Actualizar el título del modal
            document.getElementById('productoModalLabel').textContent = titulo;

            // Actualizar la descripción del modal
            document.getElementById('productoDescripcion').textContent = descripcion;

            // Obtener el contenedor del carrusel
            var carouselInner = document.getElementById('carouselInner');

            // Limpiar el contenido previo del carrusel
            carouselInner.innerHTML = '';

            // Agregar nuevas imágenes al carrusel
            imagenes.forEach(function (imagen, index) {
                var carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
                
                var img = document.createElement('img');
                img.src = imagen;
                img.className = 'd-block w-100';
                img.alt = 'Imagen del ' + titulo;

                carouselItem.appendChild(img);
                carouselInner.appendChild(carouselItem);
            });

            // Mostrar el modal
            $('#productoModal').modal('show');
        });
    });
});
