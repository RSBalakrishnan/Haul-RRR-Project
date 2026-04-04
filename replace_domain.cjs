const fs = require('fs');
const glob = require('glob');
const path = require('path');

const filesToUpdate = [
  ...glob.sync('src/**/*.tsx'),
  'public/sitemap.xml',
  'public/robots.txt',
  'index.html'
];

let count = 0;
filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('rrrtransport.in')) {
      content = content.replace(/rrrtransport\.in/g, 'rajamanitransport.in');
      fs.writeFileSync(filePath, content);
      count++;
    }
  }
});

console.log(`Updated ${count} files with new domain rajamanitransport.in`);
