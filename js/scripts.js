$(document).ready(function () {
    $('#productoModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var description = button.data('description');
        var images = button.data('images');

        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#productoDescripcion').text(description);

        var carouselInner = modal.find('.carousel-inner');
        carouselInner.empty();

        images.forEach(function (image, index) {
            var itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
            var imgElement = '<div class="' + itemClass + '"><img class="d-block w-100" src="' + image + '" alt="Imagen ' + (index + 1) + '"></div>';
            carouselInner.append(imgElement);
        });
    });
});
