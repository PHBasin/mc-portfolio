const fs = require('fs');
const path = require('path');

/**
 * Path Configuration
 * Defines where to look for images and where to generate JS files.
 */
const CONFIG = {
    gallery: {
        input: path.join(__dirname, '../assets/gallery'),
        output: path.join(__dirname, '../src/js/gallery_images.js'),
        objectName: 'galleryImages'
    },
    slider: {
        input: path.join(__dirname, '../assets/slider'),
        output: path.join(__dirname, '../src/js/slider_images.js'),
        objectName: 'sliderImages'
    }
};

/**
 * Scan a directory recursively or flat to find WebP images
 * @param {string} dirPath - Path to the directory to scan
 * @param {boolean} isRecursive - If true, scans subdirectories (for gallery)
 * @returns {Array|Object} - List of images or object {category: [images]}
 */
function scanImages(dirPath, isRecursive = false) {
    if (!fs.existsSync(dirPath)) {
        console.warn(`⚠️ Directory not found: ${dirPath}`);
        return isRecursive ? {} : [];
    }

    // Case 1: Gallery Structure (Folders = Categories)
    if (isRecursive) {
        const data = {};
        const categories = fs.readdirSync(dirPath);

        categories.forEach(category => {
            const catPath = path.join(dirPath, category);
            if (fs.statSync(catPath).isDirectory()) {
                const images = fs.readdirSync(catPath)
                    .filter(file => file.toLowerCase().endsWith('.webp'));

                if (images.length > 0) {
                    data[category] = images;
                }
            }
        });
        return data;
    }

    // Case 2: Slider Structure (Just a list of images)
    else {
        return fs.readdirSync(dirPath)
            .filter(file => file.toLowerCase().endsWith('.webp'))
            // Optional: Numeric sort if names are 1.webp, 2.webp...
            .sort((a, b) => {
                const numA = parseInt(a);
                const numB = parseInt(b);
                return (!isNaN(numA) && !isNaN(numB)) ? numA - numB : a.localeCompare(b);
            });
    }
}

/**
 * Generates a JS file containing the data
 * @param {string} outputPath - Path of the JS file to create
 * @param {string} varName - Global variable name (e.g., window.galleryImages)
 * @param {any} data - Data to write
 */
function writeManifest(outputPath, varName, data) {
    const content = `window.${varName} = ${JSON.stringify(data, null, 4)};`;

    try {
        fs.writeFileSync(outputPath, content);
        console.log(`✅ Successfully generated: ${path.basename(outputPath)}`);
        console.log(`   → Variable: window.${varName}`);
    } catch (err) {
        console.error(`❌ Error writing ${outputPath}:`, err);
    }
}

// --- Execution ---

console.log("🔄 Generating image manifests...\n");

// 1. Generate GALLERY manifest
const galleryData = scanImages(CONFIG.gallery.input, true);
writeManifest(CONFIG.gallery.output, CONFIG.gallery.objectName, galleryData);

// 2. Generate SLIDER manifest
const sliderData = scanImages(CONFIG.slider.input, false);
writeManifest(CONFIG.slider.output, CONFIG.slider.objectName, sliderData);

console.log("\n✨ Done!");
