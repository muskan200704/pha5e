 // Hide loader after animation and show content
 setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.querySelector(".hero").style.opacity = "1"; // Ensuring hero section is visible
}, 2800);

// Mouse movement effect
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".floating-img").forEach((img) => {
        let speed = img.getAttribute("data-speed") || 5;
        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerHeight - e.pageY * speed) / 100;
        img.style.transform = `translate(${x}px, ${y}px)`;
    });
});



const images = document.querySelectorAll(".hero-image");


images.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.classList.add("active");
        images.forEach(otherImage => {
            if (otherImage !== image) {
                otherImage.classList.add("inactive");
            }
        });
    });

    image.addEventListener("mouseout", () => {
        image.classList.remove("active");
        images.forEach(otherImage => {
            otherImage.classList.remove("inactive");
        });
    });
});

document.querySelectorAll(".hero-image").forEach((image) => {
    image.addEventListener("mouseenter", () => {
        document.querySelectorAll(".hero-image").forEach((img) => {
            img.classList.add("inactive"); // Add white border to all images
        });
        image.classList.remove("inactive"); // Remove border from the hovered image
        image.classList.add("active"); // Apply active styles

        // Show text
        let text = image.querySelector(".image-text");
        if (text) {
            text.classList.add("visible");
        }
    });

    image.addEventListener("mouseleave", () => {
        document.querySelectorAll(".hero-image").forEach((img) => {
            img.classList.remove("inactive"); // Remove border effect
        });
        image.classList.remove("active"); // Reset hovered image

        // Hide text
        let text = image.querySelector(".image-text");
        if (text) {
            text.classList.remove("visible");
            text.classList.add(".hero h1");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".hero-image");

    images.forEach((image) => {
        image.addEventListener("mouseenter", () => {
            images.forEach((img) => {
                if (img !== image) {
                    img.style.opacity = "0.1"; /* Other images become faded */
                    img.style.border = "2px solid white";
                }
            });
        });

        image.addEventListener("mouseleave", () => {
            images.forEach((img) => {
                img.style.opacity = "1"; /* Restore everything */
                img.style.border = "none";
            });
        });
    });
});

document.querySelectorAll(".hero-image").forEach((image) => {
    let text = image.querySelector(".image-text");

    image.addEventListener("mouseenter", () => {
        text.style.opacity = "1";
    });

    image.addEventListener("mouseleave", () => {
        text.style.opacity = "0";
    });
});
document.querySelectorAll('.hero-image img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        document.querySelector('.main-heading').classList.add('transparent-text');
    });

    img.addEventListener('mouseleave', () => {
        document.querySelector('.main-heading').classList.remove('transparent-text');
    });
});
