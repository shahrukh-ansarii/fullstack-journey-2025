const fs = require('fs');
const path = require('path');

// Root directory
const rootDir = __dirname;

// Protected files that should NEVER be moved
const protectedFiles = [
    'organizer.js',
    'index.js',
    'server.js',
    'app.js',
    'package.json',
    'package-lock.json',
    '.gitignore',
    'README.md',
    '.env',
    'node_modules'
];

// File categories
const categories = {
    'DOCUMENTS': ['.pdf', '.doc', '.docx', '.txt', '.xlsx', '.pptx', '.csv'],
    'IMAGES': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'],
    'VIDEOS': ['.mp4', '.avi', '.mkv', '.mov', '.wmv', '.flv'],
    'AUDIO': ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma'],
    'ARCHIVES': ['.zip', '.rar', '.7z', '.tar', '.gz'],
    'OTHERS': []
};

// Check if file should be protected
function isProtectedFile(fileName) {
    // Check exact match
    if (protectedFiles.includes(fileName)) {
        return true;
    }
    
    // Protect all .js and .json files in root directory
    const ext = path.extname(fileName).toLowerCase();
    if (ext === '.js' || ext === '.json') {
        return true;
    }
    
    return false;
}

function organizeFilesByCategory() {
    console.log(' Starting advanced file organization...\n');

    try {
        const files = fs.readdirSync(rootDir);
        let stats = {
            organized: 0,
            protected: 0,
            skipped: 0,
            byCategory: {}
        };

        // Initialize category counters
        Object.keys(categories).forEach(cat => {
            stats.byCategory[cat] = 0;
        });

        files.forEach(file => {
            const filePath = path.join(rootDir, file);
            const fileStats = fs.statSync(filePath);

            // Skip directories
            if (fileStats.isDirectory()) {
                return;
            }

            // Check if file is protected
            if (isProtectedFile(file)) {
                console.log(`Protected: ${file} (not moved)`);
                stats.protected++;
                return;
            }

            const ext = path.extname(file).toLowerCase();

            if (!ext) {
                console.log(`Skipped: ${file} (no extension)`);
                stats.skipped++;
                return;
            }

            // Find category
            let categoryName = 'OTHERS';
            for (const [category, extensions] of Object.entries(categories)) {
                if (extensions.includes(ext)) {
                    categoryName = category;
                    break;
                }
            }

            // Create folder if not exists
            const folderPath = path.join(rootDir, categoryName);
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
                console.log(` Created folder: ${categoryName}`);
            }

            // Move file
            const newFilePath = path.join(folderPath, file);

            // Handle duplicates
            if (fs.existsSync(newFilePath)) {
                const timestamp = Date.now();
                const newFileName = `${path.basename(file, ext)}_${timestamp}${ext}`;
                const finalPath = path.join(folderPath, newFileName);
                fs.renameSync(filePath, finalPath);
                console.log(`${file} → ${categoryName}/${newFileName}`);
            } else {
                fs.renameSync(filePath, newFilePath);
                console.log(`${file} → ${categoryName}/${file}`);
            }

            stats.organized++;
            stats.byCategory[categoryName]++;
        });

        // Display summary
        console.log('\n' + '='.repeat(60));
        console.log('ORGANIZATION COMPLETE!');
        console.log('='.repeat(60));
        console.log(`Files organized: ${stats.organized}`);
        console.log(`Protected files: ${stats.protected}`);
        console.log(`Files skipped: ${stats.skipped}`);
        console.log('\n By Category:');
        Object.entries(stats.byCategory).forEach(([cat, count]) => {
            if (count > 0) {
                console.log(`   ${cat}: ${count} file(s)`);
            }
        });
        console.log('='.repeat(60));

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Run the advanced organizer
organizeFilesByCategory();