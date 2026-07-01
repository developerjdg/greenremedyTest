function initSlider(){

    const grxWrapper = document.querySelector(".grx-slider-wrapper");
    const grxTrack = document.getElementById("grxSliderTrack");
    const grxDotsContainer = document.querySelector(".grx-dots");
    const grxPrev = document.querySelector(".grx-arrow-left");
    const grxNext = document.querySelector(".grx-arrow-right");
    // Stop if slider doesn't exist
    if (
        !grxWrapper ||
        !grxTrack ||
        !grxDotsContainer ||
        !grxPrev ||
        !grxNext
    ) {
        return;
    }
    const grxSlides = Array.from(grxTrack.children);

    const grxGap = 20;
    let grxIndex = 0;
    let grxInterval;


    function getSlideWidth() {
        return grxTrack.children[0].getBoundingClientRect().width + grxGap;
    }

    function getSlidesPerView() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        if (window.innerWidth <= 1024) return 3;
        return 4;
    }

    const grxOriginalLength = grxSlides.length;

    // Clone slides for infinite loop
    grxSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        grxTrack.appendChild(clone);
    });

    function updateDots() {
        const realIndex = grxIndex % grxOriginalLength;

        document.querySelectorAll(".grx-dot").forEach((dot) => {
            dot.classList.remove("grx-active");
        });

        const activeDot = document.querySelectorAll(".grx-dot")[realIndex];

        if (activeDot) {
            activeDot.classList.add("grx-active");
        }
    }

    function slideTo(index) {
        const slideWidth = getSlideWidth();

        grxTrack.style.transform = `translateX(-${index * slideWidth}px)`;

        if (index >= grxOriginalLength) {
            setTimeout(() => {
                grxTrack.style.transition = "none";
                grxTrack.style.transform = "translateX(0)";
                grxIndex = 0;

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        grxTrack.style.transition = "transform 0.6s ease-in-out";
                    });
                });
            }, 600);
        }

        updateDots();
    }

    function moveSlider() {
        grxIndex++;
        slideTo(grxIndex);
    }

    // Create navigation dots
    for (let i = 0; i < grxOriginalLength; i++) {
        const dot = document.createElement("span");
        dot.className = "grx-dot";

        if (i === 0) {
            dot.classList.add("grx-active");
        }

        dot.addEventListener("click", () => {
            grxIndex = i;
            slideTo(grxIndex);
            resetAuto();
        });

        grxDotsContainer.appendChild(dot);
    }

    // Next button
    grxNext.addEventListener("click", () => {
        grxIndex++;
        slideTo(grxIndex);
        resetAuto();
    });

    // Previous button
    grxPrev.addEventListener("click", () => {
        grxIndex = grxIndex <= 0 ? grxOriginalLength - 1 : grxIndex - 1;
        slideTo(grxIndex);
        resetAuto();
    });

    function startAuto() {
        clearInterval(grxInterval);
        grxInterval = setInterval(moveSlider, 4000);
    }

    function resetAuto() {
        startAuto();
    }

    // Pause autoplay on hover
    grxWrapper.addEventListener("mouseenter", () => {
        clearInterval(grxInterval);
    });

    grxWrapper.addEventListener("mouseleave", () => {
        startAuto();
    });

    // Keep position correct on resize
    window.addEventListener("resize", () => {
        slideTo(grxIndex);
    });

    startAuto();
}
