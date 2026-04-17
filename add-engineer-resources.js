import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 20000;

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

const engineerCategory = {
  id: idCounter++,
  title: '🏗️ 工程人充电站',
  icon: '',
  createdAt: new Date().toISOString(),
  nav: [
    {
      id: idCounter++,
      title: '建造师考试',
      icon: '',
      createdAt: new Date().toISOString(),
      nav: [
        { name: '中国人事考试网', url: 'http://www.cpta.com.cn', desc: '官方报名、成绩查询入口', rate: 5, createdAt: new Date().toISOString() },
        { name: '住房和城乡建设部', url: 'http://www.mohurd.gov.cn', desc: '建造师注册、政策发布', rate: 5, createdAt: new Date().toISOString() },
        { name: '233网校一建频道', url: 'https://www.233.com/jzs1', desc: '一建历年真题、视频课程', rate: 5, createdAt: new Date().toISOString() },
        { name: '建设工程教育网', url: 'https://www.jianshe99.com', desc: '建筑行业权威培训平台', rate: 5, createdAt: new Date().toISOString() },
        { name: '环球网校建造师', url: 'https://www.hqwx.com/web_news/jzs1', desc: '一建二建备考资料大全', rate: 4, createdAt: new Date().toISOString() },
        { name: '中国建设教育协会', url: 'http://www.ccen.com.cn', desc: '行业培训、继续教育', rate: 4, createdAt: new Date().toISOString() },
      ]
    },
    {
      id: idCounter++,
      title: '规范标准',
      icon: '',
      createdAt: new Date().toISOString(),
      nav: [
        { name: '国家工程建设标准化信息网', url: 'http://www.ccsn.gov.cn', desc: '国标行标权威发布平台', rate: 5, createdAt: new Date().toISOString() },
        { name: '中国建筑标准设计网', url: 'https://www.chinabuilding.com.cn', desc: '国标图集查询购买', rate: 5, createdAt: new Date().toISOString() },
        { name: '国家标准全文公开系统', url: 'http://www.gb688.cn', desc: '免费查阅国家标准PDF', rate: 5, createdAt: new Date().toISOString() },
        { name: '工标网', url: 'http://www.csres.com', desc: '工程标准搜索引擎', rate: 5, createdAt: new Date().toISOString() },
        { name: '住建部标准定额司', url: 'http://www.mohurd.gov.cn/bzde', desc: '标准发布公告、征求意见', rate: 4, createdAt: new Date().toISOString() },
        { name: '建标库', url: 'https://www.jianbiaoku.com', desc: '7000+法规标准数字化', rate: 4, createdAt: new Date().toISOString() },
      ]
    },
    {
      id: idCounter++,
      title: '项目管理',
      icon: '',
      createdAt: new Date().toISOString(),
      nav: [
        { name: 'PMI中国', url: 'https://www.pmichina.org', desc: 'PMP认证、项目管理权威', rate: 5, createdAt: new Date().toISOString() },
        { name: 'PMBOK资源中心', url: 'https://www.pmi.org', desc: '项目管理圣经官方网站', rate: 5, createdAt: new Date().toISOString() },
        { name: '项目管理联盟', url: 'http://www.21cpm.com', desc: '国内PM社区、案例分享', rate: 4, createdAt: new Date().toISOString() },
        { name: 'Coursera项目管理课', url: 'https://www.coursera.org', desc: '斯坦福大学专项课程', rate: 4, createdAt: new Date().toISOString() },
        { name: 'ONES项目管理', url: 'https://ones.com.cn/knowledge', desc: '项目管理知识库', rate: 4, createdAt: new Date().toISOString() },
        { name: '项目管理评论', url: 'http://www.pmreview.com.cn', desc: '行业期刊、实战案例', rate: 4, createdAt: new Date().toISOString() },
      ]
    },
    {
      id: idCounter++,
      title: '沟通与职场',
      icon: '',
      createdAt: new Date().toISOString(),
      nav: [
        { name: '得到APP', url: 'https://www.dedao.cn', desc: '沟通、管理精品课程', rate: 5, createdAt: new Date().toISOString() },
        { name: '樊登读书', url: 'https://www.dushu365.com', desc: '管理、沟通书籍解读', rate: 5, createdAt: new Date().toISOString() },
        { name: '刘润公众号', url: 'https://runliubusiness.com', desc: '商业思维、管理洞察', rate: 5, createdAt: new Date().toISOString() },
        { name: '非暴力沟通', url: 'https://book.douban.com/subject/3533221', desc: '人际关系经典著作', rate: 5, createdAt: new Date().toISOString() },
        { name: '关键对话', url: 'https://book.douban.com/subject/10535487', desc: '高风险沟通技巧', rate: 5, createdAt: new Date().toISOString() },
        { name: '影响力', url: 'https://book.douban.com/subject/17061', desc: '说服心理学经典', rate: 4, createdAt: new Date().toISOString() },
      ]
    },
    {
      id: idCounter++,
      title: '市政工具',
      icon: '',
      createdAt: new Date().toISOString(),
      nav: [
        { name: '广联达服务新干线', url: 'https://www.fwxgx.com', desc: '造价软件、答疑社区', rate: 5, createdAt: new Date().toISOString() },
        { name: 'Autodesk Civil 3D', url: 'https://www.autodesk.com.cn/industry/civil-engineering', desc: '市政BIM设计软件', rate: 5, createdAt: new Date().toISOString() },
        { name: '品茗BIM市政算量', url: 'https://www.pinming.cn', desc: '市政工程量计算软件', rate: 5, createdAt: new Date().toISOString() },
        { name: '鲁班软件', url: 'http://lubanshop.com', desc: '成本测算、造价工具', rate: 4, createdAt: new Date().toISOString() },
        { name: '天正建筑', url: 'http://www.tangent.com.cn', desc: '建筑CAD插件标杆', rate: 4, createdAt: new Date().toISOString() },
        { name: '测量空间', url: 'http://www.cehui8.com', desc: '全站仪、GPS测量教程', rate: 4, createdAt: new Date().toISOString() },
      ]
    },
    {
      id: idCounter++,
      title: '行业资讯',
      icon: '',
      createdAt: new Date().toISOString(),
      nav: [
        { name: '中国建筑新闻网', url: 'http://www.archdaily.cn', desc: '全球建筑行业资讯', rate: 5, createdAt: new Date().toISOString() },
        { name: '筑龙网', url: 'https://www.zhulong.com', desc: '工程人交流社区', rate: 5, createdAt: new Date().toISOString() },
        { name: '土木在线', url: 'https://www.co188.com', desc: '土木工程专业论坛', rate: 5, createdAt: new Date().toISOString() },
        { name: '天工网', url: 'https://www.tgnet.cn', desc: '工程资料、人脉资源', rate: 4, createdAt: new Date().toISOString() },
        { name: '建筑时报', url: 'http://www.jzsbs.com', desc: '建筑行业权威媒体', rate: 4, createdAt: new Date().toISOString() },
        { name: '中国市政工程协会', url: 'http://www.cmea.org.cn', desc: '市政行业官方协会', rate: 4, createdAt: new Date().toISOString() },
      ]
    }
  ]
};

function insertIntoDb(db, category) {
  const existingIndex = db.findIndex(item => item.title && item.title.includes('工程人'));
  if (existingIndex >= 0) {
    db.splice(existingIndex, 1);
    console.log('🔄 已移除旧分类');
  }
  db.unshift(category);
  console.log('✅ 【工程人充电站】分类创建成功');
}

insertIntoDb(db, engineerCategory);

function countWebsites(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countWebsites(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`📊 新增专业网站: ${countWebsites(engineerCategory.nav)} 个`);
console.log(`📊 数据库总计: ${countWebsites(db)} 个网址`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n✅ 市政项目经理专属资源库导入完成!');
