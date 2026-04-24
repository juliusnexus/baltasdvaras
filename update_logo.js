const fs = require('fs');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx')) {
      files.push(name);
    }
  }
  return files;
}

const allTsxFiles = getFiles('app');

const searchRegex = /<div className="text-lg lg:text-xl font-bold tracking-tighter flex items-center gap-2 lg:gap-3 text-gray-500">([\s\S]*?)Baltas Dvaras\s*<\/div>/g;

let updatedCount = 0;

for (const file of allTsxFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.match(searchRegex)) {
    const newContent = content.replace(searchRegex, '<Link href="/" className="text-lg lg:text-xl font-bold tracking-tighter flex items-center gap-2 lg:gap-3 text-gray-500 hover:opacity-80 transition-opacity">$1Baltas Dvaras\n        </Link>');
    
    if (!newContent.includes('import Link from')) {
        const lastImportIndex = newContent.lastIndexOf('import ');
        const endOfLastImport = newContent.indexOf('\n', lastImportIndex);
        const modifiedWithImport = newContent.slice(0, endOfLastImport + 1) + "import Link from 'next/link';\n" + newContent.slice(endOfLastImport + 1);
        fs.writeFileSync(file, modifiedWithImport, 'utf8');
    } else {
        fs.writeFileSync(file, newContent, 'utf8');
    }
    console.log('Updated: ' + file);
    updatedCount++;
  }
}

console.log('Total files updated: ' + updatedCount);
