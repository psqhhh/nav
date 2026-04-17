import fs from 'fs';

const db = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));

let replacedCount = 0;

function replaceFavicon(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    
    if (item.icon && item.icon.includes('google.com/s2/favicons')) {
      const match = item.icon.match(/domain=([^&]+)/);
      if (match && match[1]) {
        const domain = match[1];
        item.icon = `https://api.faviconkit.com/${domain}/64`;
        replacedCount++;
      }
    }
    
    if (item.nav && Array.isArray(item.nav)) {
      replaceFavicon(item.nav);
    }
  }
}

replaceFavicon(db);

console.log(`✅ 替换了 ${replacedCount} 个 favicon`);
console.log(`   Google CDN → FaviconKit CDN`);

fs.writeFileSync('./data/db.json', JSON.stringify(db, null, 2));
console.log('');
console.log('✅ Favicon CDN 修复完成！');
