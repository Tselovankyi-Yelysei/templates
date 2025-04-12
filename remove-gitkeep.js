const fs = require('fs');
const path = require('path');

function removeGitkeep(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            removeGitkeep(fullPath); // Рекурсивно проверяем вложенные папки
        } else if (entry.name === '.gitkeep') {
            fs.unlinkSync(fullPath); // Удаляем .gitkeep
            console.log(`Удалён: ${fullPath}`);
        }
    });
}

removeGitkeep(process.cwd());