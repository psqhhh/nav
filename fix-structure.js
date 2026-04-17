import fs from 'fs';

const db = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));

// 移除之前的特殊标记
if (db[0].title && db[0].title.includes('✅')) {
  db[0].title = db[0].title.replace(/✅✅✅/g, '');
}

let fixedCount = 0;
let idCounter = 500000;

function fixStructure(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    
    if (!item.nav) continue;
    
    for (let j = 0; j < item.nav.length; j++) {
      const sub = item.nav[j];
      
      if (!sub.nav || sub.nav.length === 0) continue;
      
      // 检查二级分类下是不是直接放了网址
      const firstItem = sub.nav[0];
      if (firstItem.url) {
        fixedCount++;
        console.log(`修复: ${sub.title} (原来${sub.nav.length}个网址直接在二级分类下)`);
        
        // 把网址用三级分类包起来
        sub.nav = [{
          id: idCounter++,
          title: sub.title || '常用网站',
          icon: '',
          nav: sub.nav
        }];
      }
      
      // 递归
      if (sub.nav) {
        fixStructure(sub.nav);
      }
    }
  }
}

fixStructure(db);

console.log('');
console.log(`✅ 共修复 ${fixedCount} 个二级分类的结构`);

// 验证
console.log('');
console.log('=== 验证修复结果 ===');
for (let i = 0; i < 5; i++) {
  const cat = db[i];
  console.log(`分类${i+1}: ${cat.title?.substring(0,30)}`);
  if (cat.nav) {
    cat.nav.slice(0, 2).forEach(sub => {
      if (sub.nav && sub.nav[0]) {
        console.log(`  - ${sub.title?.substring(0,20).padEnd(20)} -> 下一层有nav? ${!!sub.nav[0].nav}   有url? ${!!sub.nav[0].url}`);
      }
    });
  }
}

fs.writeFileSync('./data/db.json', JSON.stringify(db, null, 2));
console.log('');
console.log('✅ 数据结构修复完成！');
