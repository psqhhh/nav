import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function fixIcons(root) {
  let fixedCount = 0;
  
  for (const item of root) {
    if (item.nav) {
      fixIcons(item.nav);
    }
    
    if (item.url) {
      try {
        const url = new URL(item.url);
        item.icon = `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
        fixedCount++;
      } catch (e) {
        item.icon = '';
      }
    }
  }
  
  return fixedCount;
}

const fixedCount = fixIcons(db);
console.log(`✅ 已为 ${fixedCount} 个网站添加了图标！`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🚀 图标修复完成！使用Google图标服务，控制台不再报错！');

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

const total = countAll(db);
console.log(`\n📊 数据库总计: ${total} 个优质网址`);
