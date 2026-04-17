import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 50000;

function createCategory(title, icon, subcategories) {
  return {
    id: idCounter++,
    title: title,
    icon: icon || '',
    createdAt: new Date().toISOString(),
    nav: subcategories.map(sub => ({
      id: idCounter++,
      title: sub.title,
      icon: '',
      createdAt: new Date().toISOString(),
      nav: sub.websites.map(w => ({
        ...w,
        createdAt: new Date().toISOString()
      }))
    }))
  };
}

// ============== 1. 📅 黄历择日 ==============
const calendarAlmanac = {
  title: '📅 黄历择日',
  websites: [
    { name: '老黄历', url: 'https://laohuangli.net', desc: '传统黄历查询', rate: 5 },
    { name: '黄道吉日', url: 'https://www.hdjr.org', desc: '择吉看日子', rate: 5 },
    { name: '万年历', url: 'https://wannianli.tianqi.com', desc: '万年历查询', rate: 5 },
    { name: '汉典万年历', url: 'https://www.zdic.net/calendar', desc: '权威黄历工具', rate: 5 },
    { name: '农历网', url: 'https://www.nongli.com', desc: '农历节气查询', rate: 5 },
    { name: '神婆网', url: 'https://www.shenpo.com', desc: '黄历吉日查询', rate: 5 },
    { name: '卜易居', url: 'https://www.buyiju.com/huangli', desc: '择吉老黄历', rate: 5 },
    { name: '非常运势', url: 'https://www.99166.com/huangli', desc: '每日运势黄历', rate: 5 },
    { name: '第一星座', url: 'https://www.d1xz.net/huangli', desc: '黄道吉日查询', rate: 5 },
    { name: '水墨先生', url: 'https://www.shuimotang.com', desc: '择日择吉工具', rate: 5 },
  ]
};

// ============== 2. ☯️ 易经八卦 ==============
const yiJing = {
  title: '☯️ 易经八卦',
  websites: [
    { name: '易经网', url: 'https://www.yijing.com', desc: '周易易经门户', rate: 5 },
    { name: '中华周易网', url: 'https://www.zhouyi.cc', desc: '周易研究平台', rate: 5 },
    { name: '易经六十四卦', url: 'https://www.64gua.com', desc: '六十四卦详解', rate: 5 },
    { name: '周易天地', url: 'https://www.zhouyiworld.com', desc: '易学交流论坛', rate: 5 },
    { name: '元亨利贞', url: 'https://www.china95.net', desc: '老牌周易论坛', rate: 5 },
    { name: '龙隐网', url: 'https://www.longyin.net', desc: '周易预测社区', rate: 5 },
    { name: '东方易学网', url: 'https://www.dfyxw.com', desc: '易学资料大全', rate: 5 },
    { name: '周易文化网', url: 'https://www.zhouyiwenhua.com', desc: '周易文化研究', rate: 5 },
    { name: '易经智慧', url: 'https://www.yijingzhihui.com', desc: '易经管理智慧', rate: 5 },
    { name: '傅佩荣易经', url: 'https://www.ipexpert.com.tw', desc: '傅佩荣详解易经', rate: 5 },
  ]
};

// ============== 3. 🏠 风水堪舆 ==============
const fengShui = {
  title: '🏠 风水堪舆',
  websites: [
    { name: '中国风水网', url: 'https://www.fengshui.com.cn', desc: '风水专业门户', rate: 5 },
    { name: '风水大师', url: 'https://www.fengshuidashi.com', desc: '风水知识大全', rate: 5 },
    { name: '风水堂', url: 'https://www.fengshuitang.com', desc: '阳宅风水入门', rate: 5 },
    { name: '香港风水网', url: 'https://www.hkfengshui.com', desc: '港式风水文化', rate: 5 },
    { name: '住宅风水', url: 'https://www.zhuzhaifengshui.com', desc: '家居风水指南', rate: 5 },
    { name: '办公室风水', url: 'https://www.bgsfs.com', desc: '职场风水布局', rate: 5 },
    { name: '墓地风水', url: 'https://www.mudifengshui.com', desc: '阴宅风水详解', rate: 5 },
    { name: '装修风水', url: 'https://www.zxfs.com', desc: '装修风水禁忌', rate: 5 },
    { name: '商业风水', url: 'https://www.syfs.com', desc: '店铺办公风水', rate: 5 },
    { name: '风水罗盘', url: 'https://www.fengshuiluopan.com', desc: '罗盘使用教程', rate: 5 },
  ]
};

// ============== 4. 🎴 奇门遁甲 ==============
const qiMen = {
  title: '🎴 奇门遁甲',
  websites: [
    { name: '奇门遁甲网', url: 'https://www.qimendunjia.com', desc: '奇门专业门户', rate: 5 },
    { name: '奇门在线排盘', url: 'https://www.qm123.com', desc: '奇门遁甲排盘', rate: 5 },
    { name: '元亨利贞奇门', url: 'https://www.china95.net/qimen', desc: '奇门排盘系统', rate: 5 },
    { name: '奇门遁甲论坛', url: 'https://www.qimenbbs.com', desc: '奇门学习交流', rate: 5 },
    { name: '神奇之门', url: 'https://www.shenqizhimen.com', desc: '张志春奇门', rate: 5 },
    { name: '阴盘奇门', url: 'https://www.yinpanqimen.com', desc: '王凤麟阴盘', rate: 5 },
    { name: '时家奇门', url: 'https://www.shijiaqimen.com', desc: '时家奇门遁甲', rate: 5 },
    { name: '奇门预测', url: 'https://www.qimenyuce.com', desc: '奇门案例解析', rate: 5 },
  ]
};

// ============== 5. 🌟 八字命理 ==============
const baZi = {
  title: '🌟 八字命理',
  websites: [
    { name: '八字排盘', url: 'https://www.bazipai.com', desc: '四柱八字排盘', rate: 5 },
    { name: '元亨利贞八字', url: 'https://www.china95.net/bazi', desc: '八字排盘系统', rate: 5 },
    { name: '八字算命', url: 'https://www.bazisuanming.com', desc: '生辰八字分析', rate: 5 },
    { name: '盲派八字', url: 'https://www.mangpai.com', desc: '盲派命理传承', rate: 5 },
    { name: '滴天髓', url: 'https://www.ditiansui.com', desc: '命理经典研读', rate: 5 },
    { name: '穷通宝鉴', url: 'https://www.qtongbaojian.com', desc: '调候用神指南', rate: 5 },
    { name: '三命通会', url: 'https://www.sanmingtonghui.com', desc: '命理百科全书', rate: 5 },
    { name: '渊海子平', url: 'https://www.yuanhaiziping.com', desc: '子平八字源头', rate: 5 },
  ]
};

// ============== 6. 🙏 佛道修行 ==============
const buddhismTaoism = {
  title: '🙏 佛道修行',
  websites: [
    { name: '佛学在线', url: 'https://www.foxue.org', desc: '佛教学习平台', rate: 5 },
    { name: '佛教网', url: 'https://www.fojiao.com', desc: '佛教资讯门户', rate: 5 },
    { name: '大藏经', url: 'https://www.dazangjing.com', desc: '大藏经在线', rate: 5 },
    { name: '中华佛典宝库', url: 'https://www.fodian.net', desc: '佛经电子库', rate: 5 },
    { name: '道教之音', url: 'https://www.daoisms.org', desc: '道教文化门户', rate: 5 },
    { name: '中国道教协会', url: 'https://www.taoist.org.cn', desc: '官方道教协会', rate: 5 },
    { name: '道门网', url: 'https://www.daomen.com', desc: '道教修行交流', rate: 5 },
    { name: '玄学问答', url: 'https://www.xuanxue.com', desc: '玄学知识问答', rate: 5 },
  ]
};

const metaphysicsCategory = createCategory('🔮 玄学传统文化', '', [
  calendarAlmanac,
  yiJing,
  fengShui,
  qiMen,
  baZi,
  buddhismTaoism
]);

db.push(metaphysicsCategory);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`✅ 新增分类: ${metaphysicsCategory.title}`);
console.log(`   └─ 包含: ${metaphysicsCategory.nav.length} 个子分类, ${countAll(metaphysicsCategory.nav)} 个网址`);
console.log(`   └─ 📅 黄历择日、☯️ 易经八卦、🏠 风水堪舆、🎴 奇门遁甲、🌟 八字命理、🙏 佛道修行`);
console.log(`\n📊 本轮新增: ${countAll(metaphysicsCategory.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 玄学分类添加完成！开工动土前先拜拜，工程顺利！🏗️');
