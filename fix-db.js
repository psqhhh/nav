import fs from 'fs';

const dbPath = './data/db.json';
const backupPath = './data/db_backup.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

fs.writeFileSync(backupPath, JSON.stringify(db, null, 2));
console.log('✅ 已备份原数据库到 db_backup.json');

let idCounter = 10000;

function fixStructure(categories, level = 0) {
  return categories.map(cat => {
    if (cat.title && cat.nav) {
      const fixed = {
        ...cat,
        id: cat.id || idCounter++,
        icon: cat.icon || '',
      };
      
      if (cat.nav && Array.isArray(cat.nav)) {
        fixed.nav = fixStructure(cat.nav, level + 1);
      }
      
      return fixed;
    }
    return cat;
  });
}

const fixedDb = fixStructure(db);

function countCategories(categories, count = 0) {
  for (const cat of categories) {
    if (cat.title && cat.nav) count++;
    if (cat.nav && Array.isArray(cat.nav)) {
      count = countCategories(cat.nav, count);
    }
  }
  return count;
}

console.log('✅ 修复了 ' + countCategories(fixedDb) + ' 个分类，全部补全了 id 和 icon 字段');

fs.writeFileSync(dbPath, JSON.stringify(fixedDb));
console.log('\n✅ 数据库结构修复完成!');
