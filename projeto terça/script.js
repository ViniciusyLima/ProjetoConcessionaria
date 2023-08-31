function comprarCarro(modelo, preco) {
    alert(`Você comprou um ${modelo} por $${preco}`);
}

var carCards = document.querySelectorAll(".car-card");

    carCards.forEach(function(carCard) {
        var slideIndex = 0;
        var carImages = carCard.querySelectorAll(".car-image");
        var prevButton = carCard.querySelector(".prev-button");
        var nextButton = carCard.querySelector(".next-button");

        showSlides(slideIndex);

        prevButton.addEventListener("click", function() {
            showSlides(slideIndex -= 1);
        });

        nextButton.addEventListener("click", function() {
            showSlides(slideIndex += 1);
        });

        function showSlides(n) {
            if (n < 0) {
                slideIndex = carImages.length - 1;
            } else if (n >= carImages.length) {
                slideIndex = 0;
            }

            carImages.forEach(function(image) {
                image.style.display = "none";
            });

            carImages[slideIndex].style.display = "block";
        }
    }
)