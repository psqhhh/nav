import fs from 'fs';

const db = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));

console.log('=== 对比分类1和分类2的结构 ===');
console.log('分类1 title:', db[0].title.replace(/[^\u4e00-\u9fa5a-zA-Z0-9 ]/g, ''));
console.log('分类1 有nav?', !!db[0].nav, '数量:', db[0].nav?.length);
console.log('分类1 有id?', !!db[0].id, 'id值:', db[0].id);
console.log('分类1 keys:', Object.keys(db[0]));
console.log('');
console.log('分类2 (我的工作台) title:', db[1].title.replace(/[^\u4e00-\u9fa5a-zA-Z0-9 ]/g, ''));
console.log('分类2 有nav?', !!db[1].nav, '数量:', db[1].nav?.length);
console.log('分类2 有id?', !!db[1].id, 'id值:', db[1].id);
console.log('分类2 keys:', Object.keys(db[1]));
console.log('');
console.log('分类1第一个子分类 keys:', Object.keys(db[0].nav[0]));
console.log('分类2第一个子分类 keys:', Object.keys(db[1].nav[0]));
console.log('');

console.log('=== 检查所有分类的nav结构 ===');
db.forEach((cat, i) => {
  const hasNav = !!cat.nav && cat.nav.length > 0;
  const firstWeb = hasNav && cat.nav[0].nav ? cat.nav[0].nav.find(x => x.url) : null;
  console.log(`分类${i+1}: ${cat.title?.substring(0,25).replace(/[^\u4e00-\u9fa5a-zA-Z0-9 ]/g, '').padEnd(25)} - 子分类: ${String(cat.nav?.length || 0).padStart(2)}个 - 第一个子分类有网址? ${firstWeb ? '是' : '否'}`);
  
  if (i === 0 || i === 1) {
    console.log('  子分类详情:');
    cat.nav?.slice(0, 3).forEach((sub, j) => {
      const webCount = sub.nav?.filter(x => x.url).length || 0;
      console.log(`    ${j+1}. ${sub.title?.replace(/[^\u4e00-\u9fa5a-zA-Z0-9 ]/g, '').padEnd(20)} - 网址数: ${webCount}`);
    });
  }
});
