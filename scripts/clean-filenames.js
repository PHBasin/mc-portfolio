const fs = require('fs');
const path = require('path');

const targetArg = process.argv[2];
// Use provided path or default to assets/gallery relative to this script
const directory = targetArg
    ? path.resolve(targetArg)
    : path.join(__dirname, '../assets/awards');

if (!targetArg) {
    console.log("Usage: node scripts/clean-filenames.js <directory_path>");
    console.log("No path provided, defaulting to: " + directory);
}

function cleanFilename(filename) {
    let name = filename;
    const ext = path.extname(filename);
    const base = path.basename(filename, ext);

    // Liste des motifs à supprimer
    const patterns = [
        /_copie/gi,
        /_copy/gi,
        /\s*-\s*copie/gi,
        /\s*-\s*copy/gi,
        /\s*\(\d+\)/g,
        /-crop-final/gi,
        /-final/gi,
        /-Récupéré/gi,
        /-ADOBE-1version2/gi,
        /-version2/gi,
        /-vers2vert/gi,
        /-vers2/gi,
        /_1/g,
        /_DxOfinal/gi,
        /_DxO/gi,
        /traitee/gi
    ];

    let newBase = base;
    patterns.forEach(pattern => {
        newBase = newBase.replace(pattern, '');
    });

    // Nettoyage final : trim et suppression des espaces multiples
    newBase = newBase.trim().replace(/\s+/g, '-');

    return newBase + ext;
}

function processDirectory(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Erreur de lecture du dossier ${dir}:`, err);
            return;
        }

        files.forEach(file => {
            const fullPath = path.join(dir, file.name);

            if (file.isDirectory()) {
                processDirectory(fullPath);
            } else if (file.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file.name)) {
                const newName = cleanFilename(file.name);
                if (newName !== file.name) {
                    const newPath = path.join(dir, newName);

                    // Vérifier si le fichier cible existe déjà pour éviter l'écrasement
                    if (fs.existsSync(newPath)) {
                        console.warn(`⚠️  Le fichier ${newName} existe déjà. Renommage ignoré pour ${file.name}`);
                    } else {
                        fs.rename(fullPath, newPath, (err) => {
                            if (err) console.error(`Erreur renommage ${file.name}:`, err);
                            else console.log(`✅ Renommé : ${file.name} -> ${newName}`);
                        });
                    }
                }
            }
        });
    });
}

console.log(`Nettoyage des fichiers dans : ${directory}`);
processDirectory(directory);
