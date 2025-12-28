const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../assets/gallery');
const outputFile = path.join(__dirname, '../src/js/gallery_images.js');

const galleryData = {};

if (fs.existsSync(galleryDir)) {
    const categories = fs.readdirSync(galleryDir);

    categories.forEach(category => {
        const catPath = path.join(galleryDir, category);
        if (fs.statSync(catPath).isDirectory()) {
            const images = fs.readdirSync(catPath)
                .filter(file => file.toLowerCase().endsWith('.webp'));

            if (images.length > 0) {
                galleryData[category] = images;
            }
        }
    });
}

const content = `window.galleryImages = ${JSON.stringify(galleryData, null, 4)};`;

fs.writeFileSync(outputFile, content);
console.log(`Gallery manifest generated at ${outputFile}`);
