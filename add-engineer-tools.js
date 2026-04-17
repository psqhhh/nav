import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function findCategoryByTitle(root, titleKeyword) {
  for (const item of root) {
    if (item.title && item.title.includes(titleKeyword)) {
      return item;
    }
    if (item.nav && Array.isArray(item.nav)) {
      const found = findCategoryByTitle(item.nav, titleKeyword);
      if (found) return found;
    }
  }
  return null;
}

function insertResources(categoryKeyword, resources) {
  const category = findCategoryByTitle(db, categoryKeyword);
  if (category && category.nav) {
    category.nav.push(...resources.map(r => ({ ...r, createdAt: new Date().toISOString() })));
    console.log(`✅ ${category.title}: 新增 ${resources.length} 个工程工具`);
  } else {
    console.log(`❌ 找不到分类: ${categoryKeyword}`);
  }
}

const engineerTools = [
  { name: '钢筋翻样计算器', url: 'https://www.gangjinjisuanqi.com', desc: '钢筋下料长度计算', rate: 5 },
  { name: '混凝土配合比计算', url: 'https://www.hunningtupeibi.com', desc: '砼配合比在线计算', rate: 5 },
  { name: '工程计算器', url: 'https://www.gongchengjisuanqi.com', desc: '市政建筑专业计算', rate: 5 },
  { name: '水准仪计算工具', url: 'https://www.shuizhunyi.com', desc: '水准测量自动计算', rate: 5 },
  { name: '全站仪坐标计算', url: 'https://www.quanzhanyi.com', desc: '坐标正反算工具', rate: 5 },
  { name: 'CAD快速看图', url: 'https://cad.glodon.com', desc: '广联达CAD看图', rate: 5 },
  { name: '迅捷CAD转换器', url: 'https://www.xunjiecad.com', desc: 'CAD版本转换', rate: 5 },
  { name: 'AutoCAD Web', url: 'https://web.autocad.com', desc: '在线CAD编辑', rate: 5 },
  { name: '工程量清单计算', url: 'https://www.gclqd.com', desc: '清单计价助手', rate: 5 },
  { name: '造价指标网', url: 'https://www.zaojiazhibiao.com', desc: '工程指标查询', rate: 5 },
  { name: '建材价格行情', url: 'https://www.zaojia.com', desc: '建材价格查询', rate: 5 },
  { name: '我的钢铁网', url: 'https://www.mysteel.com', desc: '钢材每日报价', rate: 5 },
  { name: '水泥网行情', url: 'https://www.ccement.com', desc: '水泥价格指数', rate: 5 },
  { name: '砂石骨料网', url: 'https://www.chinaggxl.com', desc: '砂石价格行情', rate: 5 },
  { name: '工程造价信息网', url: 'https://www.zaojia.net.cn', desc: '定额信息查询', rate: 5 },
  { name: '标准图集网', url: 'https://www.tuji8.com', desc: '国标图集下载', rate: 5 },
  { name: '建标库', url: 'https://www.jianbiaoku.com', desc: '规范标准查询', rate: 5 },
  { name: '工标网', url: 'http://www.csres.com', desc: '工程标准查询', rate: 5 },
  { name: '测量坐标计算', url: 'https://www.cehui8.com', desc: '测量计算工具', rate: 5 },
  { name: '坡度计算器', url: 'https://www.podujisuanqi.com', desc: '道路坡度计算', rate: 5 },
  { name: '土方量计算器', url: 'https://www.tufangliang.com', desc: '方格网土方计算', rate: 5 },
  { name: '市政管道计算', url: 'https://www.guandaojisuan.com', desc: '管径坡度计算', rate: 5 },
  { name: '脚手架计算', url: 'https://www.shoujiaojia.com', desc: '脚手架安全计算', rate: 5 },
  { name: '模板支架计算', url: 'https://www.mobanzhijia.com', desc: '高支模计算工具', rate: 5 },
];

console.log('📦 开始添加工程人专属在线工具...\n');

insertResources('市政工具', engineerTools);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`\n📊 数据库总计: ${countAll(db)} 个网址`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n✅ 工程工具添加完成！施工算量再也不用愁了！');
