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

const aiResources = [
  { name: 'OpenAI GPT-4o', url: 'https://chat.openai.com', desc: 'OpenAI旗舰模型，实时多模态理解', rate: 5, icon: '' },
  { name: 'Anthropic Claude 4', url: 'https://claude.ai', desc: '深度推理型智能体，长文档处理专家', rate: 5, icon: '' },
  { name: 'Gemini 2.0', url: 'https://gemini.google.com', desc: '谷歌多模态大模型，视频解析领先', rate: 5, icon: '' },
  { name: 'DeepSeek', url: 'https://chat.deepseek.com', desc: '国产开源模型，代码推理超强', rate: 5, icon: '' },
  { name: 'Kimi 长文本', url: 'https://kimi.moonshot.cn', desc: '200万字超长上下文，读论文神器', rate: 5, icon: '' },
  { name: '字节豆包', url: 'https://www.doubao.com', desc: '字节跳动大模型，即梦AI作图', rate: 5, icon: '' },
  { name: '通义千问', url: 'https://qianwen.aliyun.com', desc: '阿里大模型，擅长代码数学', rate: 5, icon: '' },
  { name: '文心一言', url: 'https://yiyan.baidu.com', desc: '百度大模型，中文生态完善', rate: 5, icon: '' },
  { name: 'Cursor IDE', url: 'https://cursor.sh', desc: 'AI编程编辑器，项目级理解', rate: 5, icon: '' },
  { name: 'GitHub Copilot', url: 'https://github.com/copilot', desc: '实时代码补全助手', rate: 5, icon: '' },
  { name: '扣子 Coze', url: 'https://www.coze.cn', desc: '字节智能体平台，一键发布多平台', rate: 5, icon: '' },
  { name: 'Dify', url: 'https://dify.ai', desc: '全流程AI应用开发平台', rate: 5, icon: '' },
  { name: 'GPTBots', url: 'https://gptbots.ai', desc: '企业级AI智能体平台', rate: 5, icon: '' },
  { name: 'FastGPT', url: 'https://fastgpt.in', desc: '开源RAG知识库系统', rate: 5, icon: '' },
  { name: 'v0.dev', url: 'https://v0.dev', desc: 'Vercel UI生成工具', rate: 5, icon: '' },
  { name: 'Midjourney', url: 'https://www.midjourney.com', desc: 'AI画图天花板', rate: 5, icon: '' },
];

const soloResources = [
  { name: 'Next.js', url: 'https://nextjs.org', desc: '全栈开发框架首选', rate: 5, icon: '' },
  { name: 'Supabase', url: 'https://supabase.com', desc: '开源Firebase替代，后端即服务', rate: 5, icon: '' },
  { name: 'Vercel', url: 'https://vercel.com', desc: '一键部署前端', rate: 5, icon: '' },
  { name: 'Trae IDE', url: 'https://trae.ai', desc: '中文友好AI编程助手', rate: 5, icon: '' },
  { name: 'Upwork', url: 'https://www.upwork.com', desc: '全球远程接单平台', rate: 5, icon: '' },
  { name: 'Fiverr', url: 'https://www.fiverr.com', desc: '数字服务集市', rate: 5, icon: '' },
  { name: 'Stripe', url: 'https://stripe.com', desc: '全球支付接口', rate: 5, icon: '' },
  { name: 'Lemon Squeezy', url: 'https://lemonsqueezy.com', desc: 'SaaS支付订阅', rate: 5, icon: '' },
  { name: 'Sentry', url: 'https://sentry.io', desc: '错误监控平台', rate: 5, icon: '' },
  { name: 'Figma', url: 'https://figma.com', desc: 'UI设计协作工具', rate: 5, icon: '' },
  { name: 'Framer', url: 'https://framer.com', desc: '无代码建站工具', rate: 5, icon: '' },
  { name: 'Webflow', url: 'https://webflow.com', desc: '专业无代码网站', rate: 5, icon: '' },
];

const investResources = [
  { name: '东方财富研报中心', url: 'https://data.eastmoney.com/report', desc: '国内最大免费研报平台', rate: 5, icon: '' },
  { name: '慧博投研', url: 'https://www.hibor.com.cn', desc: '专业机构研报平台', rate: 5, icon: '' },
  { name: '发现报告', url: 'https://www.fxbaogao.com', desc: '一站式研报整合平台', rate: 5, icon: '' },
  { name: '理杏仁', url: 'https://www.lixinger.com', desc: 'A股财报数据分析', rate: 5, icon: '' },
  { name: '雪球', url: 'https://xueqiu.com', desc: '投资者社区', rate: 5, icon: '' },
  { name: '集思录', url: 'https://www.jisilu.cn', desc: '低风险投资社区', rate: 5, icon: '' },
  { name: '巨潮资讯', url: 'http://www.cninfo.com.cn', desc: '证监会指定披露平台', rate: 5, icon: '' },
  { name: 'TradingView', url: 'https://www.tradingview.com', desc: '全球行情图表', rate: 5, icon: '' },
];

const eduResources = [
  { name: '国家中小学智慧教育平台', url: 'https://basic.smartedu.cn', desc: '教育部官方免费课程平台', rate: 5, icon: '' },
  { name: '学习强国-教育板块', url: 'https://www.xuexi.cn', desc: '隐藏学习神器，全学段覆盖', rate: 5, icon: '' },
  { name: '中国儿童中心', url: 'https://www.ccc.org.cn', desc: '官方育儿知识+早教方案', rate: 5, icon: '' },
  { name: '国家数字图书馆', url: 'https://www.nlc.cn', desc: '海量电子书免费读', rate: 5, icon: '' },
  { name: '学堂在线', url: 'https://www.xuetangx.com', desc: '清华慕课平台', rate: 5, icon: '' },
  { name: '中国大学MOOC', url: 'https://www.icourse163.org', desc: '名校公开课', rate: 5, icon: '' },
  { name: '可汗学院', url: 'https://www.khanacademy.org', desc: '全球免费教育', rate: 5, icon: '' },
];

function insertResources(categoryKeyword, resources) {
  const category = findCategoryByTitle(db, categoryKeyword);
  if (category && category.nav) {
    const existingUrls = new Set();
    function collectUrls(arr) {
      for (const w of arr) {
        if (w.url) existingUrls.add(w.url);
        if (w.nav) collectUrls(w.nav);
      }
    }
    collectUrls(category.nav);
    const newResources = resources.filter(r => !existingUrls.has(r.url));
    category.nav.unshift(...newResources.map(r => ({ ...r, createdAt: new Date().toISOString() })));
    console.log(`✅ ${category.title}: 新增 ${newResources.length} 个优质资源`);
  } else {
    console.log(`❌ 找不到分类: ${categoryKeyword}`);
  }
}

console.log('📦 开始导入优质资源...\n');

insertResources('ChatGPT', aiResources);
insertResources('远程工作', soloResources);
insertResources('财经资讯', investResources);
insertResources('学习资源', eduResources);

function countTotal(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countTotal(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`\n📊 数据库总计: ${countTotal(db)} 个网址`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n✅ 资源导入完成!');
