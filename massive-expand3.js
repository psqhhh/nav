import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 60000;

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

// ============== 1. 🔧 在线工具合集 ==============
const onlineTools = {
  title: '🔧 在线工具合集',
  websites: [
    { name: 'PDF24 Tools', url: 'https://tools.pdf24.org', desc: '免费PDF工具大全', rate: 5 },
    { name: 'SmallPDF', url: 'https://smallpdf.com', desc: 'PDF转换压缩', rate: 5 },
    { name: 'iLovePDF', url: 'https://www.ilovepdf.com', desc: 'PDF处理工具', rate: 5 },
    { name: 'TinyPNG', url: 'https://tinypng.com', desc: '图片智能压缩', rate: 5 },
    { name: 'Squoosh', url: 'https://squoosh.app', desc: 'Google图片压缩', rate: 5 },
    { name: 'Canva可画', url: 'https://www.canva.cn', desc: '在线设计工具', rate: 5 },
    { name: '图怪兽', url: 'https://www.818ps.com', desc: '图片设计模板', rate: 5 },
    { name: '创客贴', url: 'https://www.chuangkit.com', desc: '平面设计平台', rate: 5 },
    { name: 'ProcessOn', url: 'https://www.processon.com', desc: '在线思维导图', rate: 5 },
    { name: 'XMind', url: 'https://www.xmind.cn', desc: '思维导图工具', rate: 5 },
    { name: '百度脑图', url: 'https://naotu.baidu.com', desc: '免费思维导图', rate: 5 },
    { name: '石墨文档', url: 'https://shimo.im', desc: '在线协作文档', rate: 5 },
    { name: '腾讯文档', url: 'https://docs.qq.com', desc: '多人协作编辑', rate: 5 },
    { name: '飞书文档', url: 'https://www.feishu.cn', desc: '字节协作平台', rate: 5 },
    { name: 'Notion', url: 'https://www.notion.so', desc: 'All-in-One笔记', rate: 5 },
    { name: '语雀', url: 'https://www.yuque.com', desc: '阿里知识平台', rate: 5 },
    { name: '印象笔记', url: 'https://www.yinxiang.com', desc: '云笔记服务', rate: 5 },
    { name: '有道云笔记', url: 'https://note.youdao.com', desc: '网易云笔记', rate: 5 },
    { name: '二维码生成', url: 'https://cli.im', desc: '草料二维码', rate: 5 },
    { name: 'JSON格式化', url: 'https://www.json.cn', desc: 'JSON在线解析', rate: 5 },
    { name: '站长工具', url: 'https://tool.chinaz.com', desc: 'SEO查询工具', rate: 5 },
    { name: '爱站网', url: 'https://www.aizhan.com', desc: '站长SEO工具', rate: 5 },
    { name: 'Miku工具', url: 'https://tools.miku.ac', desc: '在线工具合集', rate: 5 },
    { name: '爱资料工具', url: 'https://www.toolnb.com', desc: '海量在线工具', rate: 5 },
  ]
};

// ============== 2. 👨‍💻 开发者资源 ==============
const developerResources = {
  title: '👨‍💻 开发者资源',
  websites: [
    { name: 'GitHub', url: 'https://github.com', desc: '全球最大开源社区', rate: 5 },
    { name: 'Gitee', url: 'https://gitee.com', desc: '国内开源平台', rate: 5 },
    { name: 'GitLab', url: 'https://gitlab.com', desc: '开源代码托管', rate: 5 },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', desc: '编程问答社区', rate: 5 },
    { name: '掘金', url: 'https://juejin.cn', desc: '国内开发者社区', rate: 5 },
    { name: 'CSDN', url: 'https://www.csdn.net', desc: '程序员技术社区', rate: 5 },
    { name: '博客园', url: 'https://www.cnblogs.com', desc: '开发者博客平台', rate: 5 },
    { name: '思否', url: 'https://segmentfault.com', desc: '技术问答社区', rate: 5 },
    { name: '开源中国', url: 'https://www.oschina.net', desc: '开源软件社区', rate: 5 },
    { name: 'V2EX', url: 'https://www.v2ex.com', desc: '创意工作者社区', rate: 5 },
    { name: '知乎技术', url: 'https://www.zhihu.com/tech', desc: '技术话题讨论', rate: 5 },
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Web开发文档', rate: 5 },
    { name: '菜鸟教程', url: 'https://www.runoob.com', desc: '编程入门教程', rate: 5 },
    { name: 'W3Schools', url: 'https://www.w3schools.com', desc: 'Web开发教程', rate: 5 },
    { name: 'LeetCode', url: 'https://leetcode.cn', desc: '算法刷题平台', rate: 5 },
    { name: '牛客网', url: 'https://www.nowcoder.com', desc: '求职刷题平台', rate: 5 },
    { name: 'Docker Hub', url: 'https://hub.docker.com', desc: '容器镜像仓库', rate: 5 },
    { name: 'NPM', url: 'https://www.npmjs.com', desc: 'Node.js包管理', rate: 5 },
    { name: 'PyPI', url: 'https://pypi.org', desc: 'Python包索引', rate: 5 },
    { name: 'Maven', url: 'https://mvnrepository.com', desc: 'Java仓库', rate: 5 },
    { name: 'DevDocs', url: 'https://devdocs.io', desc: 'API文档合集', rate: 5 },
    { name: 'Regex101', url: 'https://regex101.com', desc: '正则表达式测试', rate: 5 },
    { name: 'Codepen', url: 'https://codepen.io', desc: '前端代码演示', rate: 5 },
    { name: 'JSFiddle', url: 'https://jsfiddle.net', desc: '在线代码调试', rate: 5 },
  ]
};

// ============== 3. 🔍 网盘资源搜索 ==============
const cloudSearch = {
  title: '🔍 网盘资源搜索',
  websites: [
    { name: '阿里网盘', url: 'https://www.aliyundrive.com', desc: '阿里云网盘', rate: 5 },
    { name: '百度网盘', url: 'https://pan.baidu.com', desc: '百度云存储', rate: 5 },
    { name: '腾讯微云', url: 'https://www.weiyun.com', desc: '腾讯云存储', rate: 5 },
    { name: '115网盘', url: 'https://www.115.com', desc: '115云存储', rate: 5 },
    { name: '蓝奏云', url: 'https://www.lanzou.com', desc: '蓝奏云盘', rate: 5 },
    { name: '天翼云盘', url: 'https://cloud.189.cn', desc: '电信云盘', rate: 5 },
    { name: '和彩云', url: 'https://www.caiyun.com', desc: '移动云盘', rate: 5 },
    { name: '磁力猫', url: 'https://www.cilimao.me', desc: '磁力链接搜索', rate: 5 },
    { name: 'BTDigg', url: 'https://btdig.com', desc: 'BT种子搜索', rate: 5 },
    { name: '搜盘君', url: 'https://www.soupanjun.com', desc: '网盘资源搜索', rate: 5 },
    { name: '盘搜搜', url: 'https://www.pansoso.com', desc: '网盘搜索引擎', rate: 5 },
    { name: '云盘精灵', url: 'https://www.yunpanjingling.com', desc: '网盘资源搜索', rate: 5 },
    { name: '史莱姆搜索', url: 'https://www.slimego.cn', desc: '网盘资源导航', rate: 5 },
    { name: '大圣盘', url: 'https://www.dashengpan.com', desc: '网盘搜索引擎', rate: 5 },
  ]
};

// ============== 4. 📚 电子书资源 ==============
const eBooks = {
  title: '📚 电子书资源',
  websites: [
    { name: 'Z-Library', url: 'https://singlelogin.re', desc: '全球最大电子书', rate: 5 },
    { name: 'Library Genesis', url: 'https://libgen.is', desc: '创世纪图书馆', rate: 5 },
    { name: '安娜的档案', url: 'https://annas-archive.org', desc: '电子书搜索引擎', rate: 5 },
    { name: '掌上书苑', url: 'https://www.soepdf.com', desc: 'EPUB电子书', rate: 5 },
    { name: '图书检索', url: 'https://www.book118.com', desc: '原创力文档', rate: 5 },
    { name: '鸠摩搜书', url: 'https://www.jiumodiary.com', desc: '电子书搜索引擎', rate: 5 },
    { name: '周读', url: 'https://www.ireadweek.com', desc: '电子书下载', rate: 5 },
    { name: '我的小书屋', url: 'https://www.mebook.cc', desc: '精校电子书', rate: 5 },
    { name: '书格', url: 'https://www.shuge.org', desc: '古籍数字化', rate: 5 },
    { name: '世界数字图书馆', url: 'https://www.wdl.org', desc: '全球古籍图书', rate: 5 },
    { name: '国家数字图书馆', url: 'https://www.nlc.cn', desc: '国图官方资源', rate: 5 },
    { name: '全国图书馆参考联盟', url: 'https://www.ucdrs.superlib.net', desc: '文献传递服务', rate: 5 },
    { name: '读写人', url: 'https://www.duxieren.com', desc: '书评与电子书', rate: 5 },
    { name: '知轩藏书', url: 'https://www.zxcs.me', desc: '精校小说下载', rate: 5 },
  ]
};

// ============== 5. 🎓 学习教育平台 ==============
const educationPlatforms = {
  title: '🎓 在线教育平台',
  websites: [
    { name: '中国大学MOOC', url: 'https://www.icourse163.org', desc: '慕课平台', rate: 5 },
    { name: 'Coursera', url: 'https://www.coursera.org', desc: '全球名校课程', rate: 5 },
    { name: 'edX', url: 'https://www.edx.org', desc: '哈佛MIT课程', rate: 5 },
    { name: '学堂在线', url: 'https://www.xuetangx.com', desc: '清华慕课平台', rate: 5 },
    { name: '网易云课堂', url: 'https://study.163.com', desc: '网易在线课程', rate: 5 },
    { name: '腾讯课堂', url: 'https://ke.qq.com', desc: '腾讯在线教育', rate: 5 },
    { name: '极客时间', url: 'https://time.geekbang.org', desc: '技术付费专栏', rate: 5 },
    { name: '拉勾教育', url: 'https://edu.lagou.com', desc: 'IT职业教育', rate: 5 },
    { name: '慕课网', url: 'https://www.imooc.com', desc: '程序员梦工厂', rate: 5 },
    { name: 'B站学习', url: 'https://www.bilibili.com', desc: '免费学习资源', rate: 5 },
    { name: '知乎大学', url: 'https://www.zhihu.com/courses', desc: '知乎付费课程', rate: 5 },
    { name: '得到', url: 'https://www.dedao.cn', desc: '知识服务平台', rate: 5 },
    { name: '喜马拉雅', url: 'https://www.ximalaya.com', desc: '音频学习平台', rate: 5 },
    { name: '混沌学园', url: 'https://www.hundun.cn', desc: '创新商业课程', rate: 5 },
  ]
};

// ============== 6. 📄 文档论文资料 ==============
const documentPapers = {
  title: '📄 文档论文资料',
  websites: [
    { name: '中国知网', url: 'https://www.cnki.net', desc: 'CNKI学术数据库', rate: 5 },
    { name: '万方数据', url: 'https://www.wanfangdata.com.cn', desc: '万方数据库', rate: 5 },
    { name: '维普网', url: 'https://www.cqvip.com', desc: '维普期刊数据库', rate: 5 },
    { name: 'SCI-Hub', url: 'https://sci-hub.se', desc: '免费下载论文', rate: 5 },
    { name: 'Google Scholar', url: 'https://scholar.google.com', desc: '学术搜索引擎', rate: 5 },
    { name: '百度学术', url: 'https://xueshu.baidu.com', desc: '学术搜索平台', rate: 5 },
    { name: '豆丁网', url: 'https://www.docin.com', desc: '文档分享平台', rate: 5 },
    { name: '道客巴巴', url: 'https://www.doc88.com', desc: '文档下载平台', rate: 5 },
    { name: '爱学术', url: 'https://www.ixueshu.com', desc: '论文下载平台', rate: 5 },
    { name: 'ResearchGate', url: 'https://www.researchgate.net', desc: '学术社交平台', rate: 5 },
    { name: 'arXiv', url: 'https://arxiv.org', desc: '论文预印本', rate: 5 },
    { name: '知网研学', url: 'https://x.cnki.net', desc: '文献管理工具', rate: 5 },
  ]
};

const toolsCategory = createCategory('🛠️ 在线工具与资源', '', [
  onlineTools,
  developerResources,
  cloudSearch,
  eBooks,
  educationPlatforms,
  documentPapers
]);

db.push(toolsCategory);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`✅ 新增分类: ${toolsCategory.title}`);
console.log(`   └─ 包含: ${toolsCategory.nav.length} 个子分类, ${countAll(toolsCategory.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(toolsCategory.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 第三轮扩充完成！工具资源全覆盖！');
