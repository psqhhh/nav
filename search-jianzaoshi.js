import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

console.log('=== 搜索建造师相关网站 ===');
console.log('');

let found = [];
function search(items, path = []) {
  for (const item of items) {
    const currentPath = [...path, item.title || item.name || ''].filter(x => x).join(' > ');
    
    if (item.url) {
      const name = (item.name || '').toLowerCase();
      const desc = (item.desc || '').toLowerCase();
      if (name.includes('建造师') || desc.includes('建造师') || 
          name.includes('jianzaoshi') || desc.includes('jianzaoshi')) {
        found.push({
          path: currentPath,
          name: item.name,
          url: item.url,
          desc: item.desc
        });
      }
    }
    
    if (item.nav) {
      search(item.nav, [...path, item.title]);
    }
  }
}

search(db);
console.log('找到', found.length, '个建造师相关网站:');
console.log('');
found.forEach((w, i) => {
  console.log(`${i+1}. ${w.name}`);
  console.log('   分类路径:', w.path);
  console.log('   网址:', w.url);
  console.log('   描述:', w.desc || '无');
  console.log('');
});

if (found.length === 0) {
  console.log('❌ 没有找到建造师相关网站！');
  console.log('');
  console.log('=== 搜索"考证"相关: ===');
  let examFound = [];
  function searchExam(items, path = []) {
    for (const item of items) {
      if (item.url) {
        const name = (item.name || '').toLowerCase();
        const desc = (item.desc || '').toLowerCase();
        if (name.includes('考证') || desc.includes('考证') || 
            name.includes('考试') || desc.includes('考试') ||
            name.includes('培训') || desc.includes('培训')) {
          examFound.push({
            path: [...path, item.title || ''].filter(x => x).join(' > '),
            name: item.name,
            url: item.url
          });
        }
      }
      if (item.nav) searchExam(item.nav, [...path, item.title]);
    }
  }
  searchExam(db);
  console.log('找到考证/培训相关:', examFound.length, '个');
  examFound.slice(0, 20).forEach(w => {
    console.log('  -', w.name, ':', w.path);
  });
}
