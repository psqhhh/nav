import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

console.log('=== 数据库结构诊断 ===');
console.log('主分类数量:', db.length);
console.log('');

for (let i = 0; i < db.length; i++) {
  const cat = db[i];
  let webCount = 0;
  function count(items) {
    for (const item of items) {
      if (item.nav) count(item.nav);
      if (item.url) webCount++;
    }
  }
  count(cat.nav || []);
  console.log(`分类${i+1}: ${cat.title?.substring(0,40)} - 子分类: ${cat.nav?.length || 0} 个 - 网址数: ${webCount}`);
  
  if (cat.nav && cat.nav.length > 0) {
    for (const sub of cat.nav) {
      let subWebCount = 0;
      for (const w of sub.nav || []) {
        if (w.url) subWebCount++;
      }
      if (subWebCount === 0) {
        console.log(`  ⚠️  空子分类: ${sub.title}`);
      }
    }
  }
}

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count = countAll(item.nav, count);
    if (item.url) count++;
  }
  return count;
}

console.log('');
console.log('🎉 总网址数:', countAll(db));
console.log('');
console.log('✅ 数据库结构检查完成！');
