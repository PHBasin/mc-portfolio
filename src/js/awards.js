const awards = [
    {
        src: "https://picsum.photos/seed/award1/1200/800",
        caption: "Highly Commended - Wildlife Photographer of the Year 2024 (Catégorie Jeune)"
    },
    {
        src: "https://picsum.photos/seed/award2/800/1200",
        caption: "Highly Commended - Nature's Best Photography 2024"
    },
    {
        src: "https://picsum.photos/seed/award3/1200/800",
        caption: "Prix du Public - Festival Photo Nature de Namur 2023"
    },
    {
        src: "https://picsum.photos/seed/award4/1200/800",
        caption: "1er Prix Jeune - Festival de l'Oiseau et de la Nature 2024"
    },
    {
        src: "https://picsum.photos/seed/award5/1200/800",
        caption: "Prix Homme et Nature - Festival Photo Montier-en-Der 2021"
    },
    {
        src: "https://picsum.photos/seed/award6/1200/800",
        caption: "Prix Séquence Image Fixe - Festival Photo Montier-en-Der 2021"
    },
    {
        src: "https://picsum.photos/seed/award7/800/1200",
        caption: "Prix Nature Revisitée - Festival Photo Montier-en-Der 2021"
    },
    {
        src: "https://picsum.photos/seed/award8/1200/800",
        caption: "Sélection Officielle - Concours Photos de Namur 2024"
    },
    {
        src: "https://picsum.photos/seed/award9/1200/800",
        caption: "3ème Prix - Festival Photo de Rambouillet 2023"
    },
    {
        src: "https://picsum.photos/seed/award10/1200/800",
        caption: "Finaliste - Concours Photos de Rambouillet 2023"
    },
    {
        src: "https://picsum.photos/seed/award11/800/1200",
        caption: "Finaliste - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "https://picsum.photos/seed/award12/1200/800",
        caption: "Finaliste - Festival de l'Oiseau et de la Nature 2022"
    },
    {
        src: "https://picsum.photos/seed/award13/1200/800",
        caption: "Finaliste - Concours Photos de Rambouillet 2023"
    },
    {
        src: "https://picsum.photos/seed/award14/1200/800",
        caption: "Finaliste - Concours Photos de Montier-en-Der 2021"
    },
    {
        src: "https://picsum.photos/seed/award15/1200/800",
        caption: "Finaliste - Concours Photos Émotion Ailes 2024"
    },
    {
        src: "https://picsum.photos/seed/award16/800/1200",
        caption: "Finaliste - Concours Photos Émotion Ailes 2024"
    },
    {
        src: "https://picsum.photos/seed/award17/1200/800",
        caption: "Finaliste - Festival de l'Oiseau et de la Nature 2022"
    },
    {
        src: "https://picsum.photos/seed/award18/1200/800",
        caption: "Finaliste - Concours Photos de Rambouillet 2021"
    },
    {
        src: "https://picsum.photos/seed/award19/1200/800",
        caption: "Finaliste - Concours Photos de Rambouillet 2023"
    },
    {
        src: "https://picsum.photos/seed/award20/1200/800",
        caption: "Sélection Officielle - Concours de Montier-en-Der 2025 (Catégorie Adulte)"
    }
];

document.addEventListener('alpine:init', () => {
    Alpine.data('awards', () => ({
        awardsList: awards
    }));
});
