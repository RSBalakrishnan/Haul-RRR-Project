const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname, 'src/pages/areas/Velachery.tsx'), 'utf8');

const areas = [
  'Guindy', 'Pallikaranai', 'Navalur', 'Siruseri', 
  'Kelambakkam', 'ECR', 'Taramani', 'Chromepet', 
  'Pallavaram', 'Madipakkam', 'Saidapet', 'TNagar'
];

areas.forEach(area => {
  let content = template.replace(/Velachery/g, area);
  content = content.replace(/velachery/g, area.toLowerCase());
  content = content.replace(/className="bg-card text-foreground/g, 'className="liquid-glass nm-flat text-foreground');
  fs.writeFileSync(path.join(__dirname, `src/pages/areas/${area}.tsx`), content);
});
console.log('Successfully created ' + areas.length + ' files');
