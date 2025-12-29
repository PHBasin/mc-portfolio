const awards = [
    {
        src: "assets/awards/1.webp",
        caption: "Highly Commended - Wildlife Photographer of the Year 2024 (Catégorie Jeune)"
    },
    {
        src: "assets/awards/2.webp",
        caption: "Highly Commended - Nature's Best Photography 2024"
    },
    {
        src: "assets/awards/3.webp",
        caption: "Prix du Public - Festival Photo Nature de Namur 2023"
    },
    {
        src: "assets/awards/4.webp",
        caption: "1er Prix Jeune - Festival de l'Oiseau et de la Nature 2024"
    },
    {
        src: "assets/awards/18.webp",
        caption: "Sélection Officielle - Concours Photos de Montier-en-Der 2025 (Catégorie Adulte)"
    },
    {
        src: "assets/awards/5.webp",
        caption: "Prix Homme et Nature - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "assets/awards/6-1.webp",
        caption: "Prix Séquence Image Fixe - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "assets/awards/6-2.webp",
        caption: "Prix Séquence Image Fixe - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "assets/awards/6-3.webp",
        caption: "Prix Séquence Image Fixe - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "assets/awards/6-4.webp",
        caption: "Prix Séquence Image Fixe - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "assets/awards/6-5.webp",
        caption: "Prix Séquence Image Fixe - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "assets/awards/7.webp",
        caption: "Prix Nature Revisitée - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "assets/awards/8.webp",
        caption: "Sélection Officielle - Concours Photos de Namur 2024"
    },
    {
        src: "assets/awards/9.webp",
        caption: "3ème Prix - Festival Photo de Rambouillet 2023"
    },
    {
        src: "assets/awards/10.webp",
        caption: "Exposée dans le palmarès - Concours Photos de Rambouillet 2023"
    },
    {
        src: "assets/awards/11.webp",
        caption: "Exposée dans le palmarès - Concours Photos de Montier-en-Der 2021, Festival de l'Oiseau 2022 et Concours Photos de Rambouillet 2023"
    },
    {
        src: "assets/awards/12.webp",
        caption: "Exposée dans le palmarès - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "assets/awards/13.webp",
        caption: "Exposée dans le palmarès - Concours Photos Émotion Ailes 2024"
    },
    {
        src: "assets/awards/14.webp",
        caption: "Exposée dans le palmarès - Concours Photos Émotion Ailes 2024"
    },
    {
        src: "assets/awards/15.webp",
        caption: "Exposée dans le palmarès - Festival de l'Oiseau 2022"
    },
    {
        src: "assets/awards/16.webp",
        caption: "Exposée dans le palmarès - Concours Photos de Rambouillet 2021"
    },
    {
        src: "assets/awards/17.webp",
        caption: "Exposée dans le palmarès - Concours Photos de Rambouillet 2023"
    }
];

document.addEventListener('alpine:init', () => {
    Alpine.data('awards', () => ({
        awardsList: awards
    }));
});
