import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function diagnoseStructure(categories, level = 0, parent = '') {
  const results = [];
  const indent = '  '.repeat(level);
  
  for (const cat of categories) {
    if (cat.title && cat.nav) {
      let websiteCount = 0;
      let emptySubcats = [];
      
      function countWebsites(items) {
        let count = 0;
        for (const item of items) {
          if (item.url) count++;
          if (item.nav && Array.isArray(item.nav)) {
            const subCount = countWebsites(item.nav);
            if (subCount === 0 && item.title) {
              emptySubcats.push(item.title);
            }
            count += subCount;
          }
        }
        return count;
      }
      
      websiteCount = countWebsites(cat.nav);
      
      results.push({
        level,
        title: cat.title,
        websiteCount,
        emptySubcats,
        parent
      });
      
      if (cat.nav && Array.isArray(cat.nav)) {
        results.push(...diagnoseStructure(cat.nav, level + 1, cat.title));
      }
    }
  }
  return results;
}

const diagnosis = diagnoseStructure(db);

console.log('📊 === 数据库结构诊断报告 ===\n');

console.log('🏠 一级栏目统计：');
diagnosis.filter(d => d.level === 0).forEach(d => {
  console.log(`   ${d.title} - 📍 ${d.websiteCount} 个网站`);
  if (d.emptySubcats.length > 0) {
    console.log(`      ⚠️  空二级分类: ${d.emptySubcats.join(', ')}`);
  }
});

console.log('\n📂 二级栏目空分类明细：');
diagnosis.filter(d => d.level === 1 && d.websiteCount === 0).forEach(d => {
  console.log(`   ❌ ${d.parent} → ${d.title}: 0 个网站`);
});

console.log('\n✅ 诊断完成!');
