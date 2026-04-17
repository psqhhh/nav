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
    console.log(`✅ ${category.title}: 填充 ${resources.length} 个优质资源`);
  } else {
    console.log(`❌ 找不到分类: ${categoryKeyword}`);
  }
}

// ============== 1. 【我的工作台】→ 🔧 精选工具 ==============
const toolsResources = [
  { name: 'Everything 搜索', url: 'https://www.voidtools.com', desc: 'Windows本地文件秒搜神器', rate: 5 },
  { name: 'Listary 启动器', url: 'https://www.listary.com', desc: '快速启动、文件搜索', rate: 5 },
  { name: 'Snipaste 截图', url: 'https://www.snipaste.com', desc: '最好用的截图贴图工具', rate: 5 },
  { name: 'Quicker 自动化', url: 'https://getquicker.net', desc: '鼠标右键快捷工具箱', rate: 5 },
  { name: 'Ditto 剪贴板', url: 'https://ditto-cp.sourceforge.io', desc: '增强型剪贴板历史', rate: 5 },
  { name: 'uTools 工具箱', url: 'https://u.tools', desc: '新一代效率启动器', rate: 5 },
  { name: 'PotPlayer 播放器', url: 'https://potplayer.daum.net', desc: '全能视频播放器', rate: 5 },
  { name: '7-Zip 解压', url: 'https://www.7-zip.org', desc: '免费高压缩比工具', rate: 5 },
];

// ============== 2. 【AI 实践船】→ 🏗️ 垂直领域 ==============
const aiVerticalResources = [
  { name: '法律 AI - 幂律', url: 'https://www.lawyee.ai', desc: '法律文书智能生成', rate: 5 },
  { name: '医学 AI - 春雨医生', url: 'https://ai.chunyuyisheng.com', desc: 'AI 辅助问诊咨询', rate: 5 },
  { name: '教育 AI - 可汗学院', url: 'https://www.khanacademy.org/koans', desc: 'AI 个性化辅导', rate: 5 },
  { name: '设计 AI - 即时设计', url: 'https://js.design/ai', desc: 'AI 驱动 UI 设计', rate: 5 },
  { name: '视频 AI - Runway', url: 'https://runwayml.com', desc: 'AI 视频生成剪辑', rate: 5 },
  { name: '音频 AI - ElevenLabs', url: 'https://elevenlabs.io', desc: 'AI 语音克隆合成', rate: 5 },
  { name: '代码 AI - CodeLlama', url: 'https://ai.meta.com', desc: 'Meta 开源代码模型', rate: 5 },
  { name: '写作 AI - 秘塔写作猫', url: 'https://xiezuocat.com', desc: 'AI 校对改写润色', rate: 5 },
];

// ============== 3. 【一人公司】→ 💡 商业思维 ==============
const businessThinkingResources = [
  { name: '李永乐老师', url: 'https://www.youtube.com/@李永乐老师', desc: '科普经济学思维', rate: 5 },
  { name: '薛兆丰经济学', url: 'https://book.douban.com/subject/30171333', desc: '经济学讲义经典', rate: 5 },
  { name: '穷查理宝典', url: 'https://book.douban.com/subject/5346111', desc: '查理芒格智慧', rate: 5 },
  { name: '富爸爸穷爸爸', url: 'https://book.douban.com/subject/1033778', desc: '财商启蒙必读', rate: 5 },
  { name: '纳瓦尔宝典', url: 'https://book.douban.com/subject/35876115', desc: '财富与幸福指南', rate: 5 },
  { name: '香帅的金融江湖', url: 'https://space.bilibili.com/599152803', desc: '北大金融学教授', rate: 5 },
  { name: '刘润商学院', url: 'https://runliubusiness.com', desc: '商业思维日日更', rate: 5 },
  { name: '得到-商学院', url: 'https://www.dedao.cn', desc: '系统商业课程', rate: 5 },
];

// ============== 4. 【投资研究室】→ 🧠 投资思维 ==============
const investThinkingResources = [
  { name: '但斌博客', url: 'https://weibo.com/danbin', desc: '东方港湾价值投资', rate: 5 },
  { name: '李录演讲', url: 'https://book.douban.com/subject/35048422', desc: '文明现代化价值投资', rate: 5 },
  { name: '唐朝书房', url: 'https://github.com/ly5822716/TangStudyNotes', desc: '唐书房读书笔记', rate: 5 },
  { name: '段永平投资问答', url: 'https://github.com/taoboyong/DuanTalks', desc: '大道投资哲学', rate: 5 },
  { name: '聪明的投资者', url: 'https://book.douban.com/subject/5243775', desc: '格雷厄姆经典', rate: 5 },
  { name: '证券分析', url: 'https://book.douban.com/subject/24286066', desc: '投资者圣经', rate: 5 },
  { name: '漫步华尔街', url: 'https://book.douban.com/subject/3012153', desc: '指数投资理论', rate: 5 },
  { name: '黑天鹅', url: 'https://book.douban.com/subject/33414480', desc: '塔勒布不确定性', rate: 5 },
];

// ============== 5. 【家庭教育】→ 💡 学习方法 ==============
const learningMethods = [
  { name: '费曼学习法', url: 'https://book.douban.com/subject/35127068', desc: '世界顶级学习法', rate: 5 },
  { name: '刻意练习', url: 'https://book.douban.com/subject/26895993', desc: '如何成为天才', rate: 5 },
  { name: '学习之道', url: 'https://book.douban.com/subject/26948865', desc: '芭芭拉学习科学', rate: 5 },
  { name: '认知天性', url: 'https://book.douban.com/subject/30370272', desc: '让学习轻而易举', rate: 5 },
  { name: '番茄工作法', url: 'https://book.douban.com/subject/33428856', desc: '时间管理入门', rate: 5 },
  { name: '搞定GTD', url: 'https://book.douban.com/subject/4849382', desc: '无压工作艺术', rate: 5 },
  { name: '思维导图', url: 'https://book.douban.com/subject/35330062', desc: '东尼博赞经典', rate: 5 },
  { name: '卡片笔记写作法', url: 'https://book.douban.com/subject/35503571', desc: '卢曼智慧结晶', rate: 5 },
];

// ============== 6. 【家庭教育】→ 👨‍🏫 教育理念 ==============
const eduPhilosophy = [
  { name: '正面管教', url: 'https://book.douban.com/subject/6875539', desc: '不惩罚不骄纵', rate: 5 },
  { name: 'PET父母效能训练', url: 'https://book.douban.com/subject/6027916', desc: '亲子沟通圣经', rate: 5 },
  { name: '如何说孩子才会听', url: 'https://book.douban.com/subject/6950595', desc: '沟通技巧大全', rate: 5 },
  { name: '蒙台梭利教育', url: 'https://book.douban.com/subject/1278789', desc: '蒙氏教育经典', rate: 5 },
  { name: '卢梭爱弥儿', url: 'https://book.douban.com/subject/1008217', desc: '教育哲学经典', rate: 5 },
  { name: '洛克菲勒家书', url: 'https://book.douban.com/subject/24848058', desc: '留给儿子的信', rate: 5 },
  { name: '傅雷家书', url: 'https://book.douban.com/subject/1021332', desc: '中国式父爱', rate: 5 },
  { name: '好妈妈胜过好老师', url: 'https://book.douban.com/subject/3395133', desc: '尹建莉老师', rate: 5 },
];

console.log('📦 开始填充空分类...\n');

insertResources('精选工具', toolsResources);
insertResources('垂直领域', aiVerticalResources);
insertResources('商业思维', businessThinkingResources);
insertResources('投资思维', investThinkingResources);
insertResources('学习方法', learningMethods);
insertResources('教育理念', eduPhilosophy);

function countWebsites(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countWebsites(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`\n📊 数据库总计: ${countWebsites(db)} 个网址`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n✅ 所有空分类填充完成! 6个分类 × 8个资源 = 48个优质网站已添加');
