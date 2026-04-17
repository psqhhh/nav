import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 70000;

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

// ============== 1. 📊 财经金融投资 ==============
const financeInvestment = {
  title: '📊 财经金融投资',
  websites: [
    { name: '东方财富网', url: 'https://www.eastmoney.com', desc: '财经资讯平台', rate: 5 },
    { name: '同花顺财经', url: 'https://www.10jqka.com.cn', desc: '股票行情分析', rate: 5 },
    { name: '雪球', url: 'https://xueqiu.com', desc: '投资者社交平台', rate: 5 },
    { name: '集思录', url: 'https://www.jisilu.cn', desc: '低风险投资社区', rate: 5 },
    { name: '理杏仁', url: 'https://www.lixinger.com', desc: '财报数据分析', rate: 5 },
    { name: '乌龟量化', url: 'https://androidinvest.com', desc: '量化投资工具', rate: 5 },
    { name: '果仁网', url: 'https://guorn.com', desc: '量化策略平台', rate: 5 },
    { name: '乐咕乐股', url: 'https://www.legulegu.com', desc: 'A股数据工具', rate: 5 },
    { name: '同花顺i问财', url: 'https://www.iwencai.com', desc: '智能选股问答', rate: 5 },
    { name: '巨潮资讯网', url: 'http://www.cninfo.com.cn', desc: '上市公司公告', rate: 5 },
    { name: '上交所', url: 'http://www.sse.com.cn', desc: '上海证券交易所', rate: 5 },
    { name: '深交所', url: 'http://www.szse.cn', desc: '深圳证券交易所', rate: 5 },
    { name: '北交所', url: 'https://www.bse.cn', desc: '北京证券交易所', rate: 5 },
    { name: '中证指数', url: 'https://www.csindex.com.cn', desc: '指数编制公司', rate: 5 },
    { name: '国证指数', url: 'https://www.cnindex.com.cn', desc: '深证指数公司', rate: 5 },
    { name: '天天基金网', url: 'https://fund.eastmoney.com', desc: '基金数据平台', rate: 5 },
    { name: '晨星网', url: 'https://www.morningstar.cn', desc: '基金评级机构', rate: 5 },
    { name: '且慢', url: 'https://qieman.com', desc: '基金组合投资', rate: 5 },
    { name: '支付宝理财', url: 'https://www.alipay.com', desc: '蚂蚁财富平台', rate: 5 },
    { name: '微信理财通', url: 'https://www.tenpay.com', desc: '腾讯理财平台', rate: 5 },
  ]
};

// ============== 2. 📑 办公模板资源 ==============
const officeTemplates = {
  title: '📑 办公模板资源',
  websites: [
    { name: '我图网', url: 'https://www.ooopic.com', desc: 'PPT设计模板', rate: 5 },
    { name: '包图网', url: 'https://ibaotu.com', desc: '设计素材模板', rate: 5 },
    { name: '千库网', url: 'https://www.58pic.com', desc: 'PNG免抠素材', rate: 5 },
    { name: '觅元素', url: 'https://www.51yuansu.com', desc: '免费设计元素', rate: 5 },
    { name: '千图网', url: 'https://www.58pic.com', desc: '平面设计素材', rate: 5 },
    { name: '摄图网', url: 'https://699pic.com', desc: '正版图片素材', rate: 5 },
    { name: '图虫创意', url: 'https://tuchong.com', desc: '摄影图片素材', rate: 5 },
    { name: 'Pixabay', url: 'https://pixabay.com', desc: '免费图片视频', rate: 5 },
    { name: 'Pexels', url: 'https://www.pexels.com', desc: '免费高清图库', rate: 5 },
    { name: 'Unsplash', url: 'https://unsplash.com', desc: '高质量摄影图', rate: 5 },
    { name: 'PPT超级市场', url: 'https://www.pptsupermarket.com', desc: '免费PPT模板', rate: 5 },
    { name: 'PPT宝藏', url: 'https://www.pptbz.com', desc: 'PPT模板下载', rate: 5 },
    { name: '优品PPT', url: 'https://www.ypppt.com', desc: '优质PPT模板', rate: 5 },
    { name: '51PPT', url: 'https://www.51pptmoban.com', desc: 'PPT模板大全', rate: 5 },
    { name: '第一PPT', url: 'https://www.1ppt.com', desc: 'PPT模板资源', rate: 5 },
    { name: 'Word模板网', url: 'https://www.wordmoban.com', desc: 'Word文档模板', rate: 5 },
    { name: 'Excel模板', url: 'https://www.exceljia.com', desc: 'Excel表格模板', rate: 5 },
    { name: '爱给网', url: 'https://www.aigei.com', desc: '音效配乐素材', rate: 5 },
    { name: '耳聆网', url: 'https://www.ear0.com', desc: '免费声音素材', rate: 5 },
    { name: 'Freesound', url: 'https://freesound.org', desc: '全球音效库', rate: 5 },
  ]
};

// ============== 3. 🎬 影视资源动漫 ==============
const movieResources = {
  title: '🎬 影视资源动漫',
  websites: [
    { name: '豆瓣电影', url: 'https://movie.douban.com', desc: '电影评分影评', rate: 5 },
    { name: 'IMDb', url: 'https://www.imdb.com', desc: '全球电影数据库', rate: 5 },
    { name: '烂番茄', url: 'https://www.rottentomatoes.com', desc: '电影评分网站', rate: 5 },
    { name: '猫眼电影', url: 'https://maoyan.com', desc: '电影票购票', rate: 5 },
    { name: '淘票票', url: 'https://www.taopiaopiao.com', desc: '阿里电影票务', rate: 5 },
    { name: 'B站', url: 'https://www.bilibili.com', desc: '弹幕视频网站', rate: 5 },
    { name: 'AcFun', url: 'https://www.acfun.cn', desc: 'A站弹幕视频', rate: 5 },
    { name: '腾讯视频', url: 'https://v.qq.com', desc: '腾讯视频平台', rate: 5 },
    { name: '爱奇艺', url: 'https://www.iqiyi.com', desc: '爱奇艺视频', rate: 5 },
    { name: '优酷', url: 'https://www.youku.com', desc: '优酷视频平台', rate: 5 },
    { name: '芒果TV', url: 'https://www.mgtv.com', desc: '芒果卫视视频', rate: 5 },
    { name: '搜狐视频', url: 'https://tv.sohu.com', desc: '搜狐视频平台', rate: 5 },
    { name: 'PP视频', url: 'https://www.pptv.com', desc: 'PPTV聚力视频', rate: 5 },
    { name: '西瓜视频', url: 'https://www.ixigua.com', desc: '字节西瓜视频', rate: 5 },
    { name: '抖音', url: 'https://www.douyin.com', desc: '短视频平台', rate: 5 },
    { name: '快手', url: 'https://www.kuaishou.com', desc: '快手短视频', rate: 5 },
    { name: '动漫之家', url: 'https://www.dmzj.com', desc: '漫画阅读平台', rate: 5 },
    { name: '哔哩哔哩漫画', url: 'https://manga.bilibili.com', desc: 'B站漫画平台', rate: 5 },
    { name: '腾讯动漫', url: 'https://ac.qq.com', desc: '腾讯漫画平台', rate: 5 },
    { name: '快看漫画', url: 'https://www.kuaikanmanhua.com', desc: '条漫阅读平台', rate: 5 },
  ]
};

// ============== 4. 🔬 学术科研工具 ==============
const academicTools = {
  title: '🔬 学术科研工具',
  websites: [
    { name: 'Web of Science', url: 'https://webofscience.com', desc: 'SCI论文检索', rate: 5 },
    { name: 'ScienceDirect', url: 'https://www.sciencedirect.com', desc: 'Elsevier数据库', rate: 5 },
    { name: 'SpringerLink', url: 'https://link.springer.com', desc: 'Springer数据库', rate: 5 },
    { name: 'Wiley', url: 'https://onlinelibrary.wiley.com', desc: 'Wiley期刊库', rate: 5 },
    { name: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org', desc: 'IEEE论文库', rate: 5 },
    { name: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov', desc: '生物医学文献', rate: 5 },
    { name: 'Nature', url: 'https://www.nature.com', desc: '自然杂志官网', rate: 5 },
    { name: 'Science', url: 'https://www.science.org', desc: '科学杂志官网', rate: 5 },
    { name: 'Cell', url: 'https://www.cell.com', desc: '细胞期刊官网', rate: 5 },
    { name: 'EndNote', url: 'https://endnote.com', desc: '文献管理软件', rate: 5 },
    { name: 'Zotero', url: 'https://www.zotero.org', desc: '免费文献管理', rate: 5 },
    { name: 'Mendeley', url: 'https://www.mendeley.com', desc: 'Elsevier文献工具', rate: 5 },
    { name: 'Grammarly', url: 'https://www.grammarly.com', desc: '英文语法检查', rate: 5 },
    { name: 'DeepL翻译', url: 'https://www.deepl.com', desc: 'AI智能翻译', rate: 5 },
    { name: '谷歌翻译', url: 'https://translate.google.com', desc: 'Google翻译', rate: 5 },
    { name: '百度翻译', url: 'https://fanyi.baidu.com', desc: '百度翻译平台', rate: 5 },
    { name: '有道翻译', url: 'https://fanyi.youdao.com', desc: '网易有道翻译', rate: 5 },
    { name: 'Linguee', url: 'https://www.linguee.com', desc: '多语种词典', rate: 5 },
    { name: 'CNKI翻译助手', url: 'https://dict.cnki.net', desc: '学术术语翻译', rate: 5 },
    { name: 'MathType', url: 'https://www.wiris.com', desc: '数学公式编辑器', rate: 5 },
  ]
};

// ============== 5. 🌐 软件资源补充 ==============
const softwareMore = {
  title: '🌐 软件资源补充',
  websites: [
    { name: '吾爱破解', url: 'https://www.52pojie.cn', desc: '破解资源论坛', rate: 5 },
    { name: '绿盟', url: 'https://www.xdowns.com', desc: '绿色软件下载', rate: 5 },
    { name: 'PortableApps', url: 'https://portableapps.com', desc: '便携软件集合', rate: 5 },
    { name: 'Ninite', url: 'https://ninite.com', desc: '软件批量安装', rate: 5 },
    { name: 'Softpedia', url: 'https://www.softpedia.com', desc: '国外软件下载', rate: 5 },
    { name: 'FileHippo', url: 'https://filehippo.com', desc: '软件历史版本', rate: 5 },
    { name: 'AlternativeTo', url: 'https://alternativeto.net', desc: '软件替代品搜索', rate: 5 },
    { name: 'Product Hunt', url: 'https://www.producthunt.com', desc: '新产品发现平台', rate: 5 },
    { name: 'V2EX分享', url: 'https://www.v2ex.com', desc: '创意工作者社区', rate: 5 },
    { name: '反斗软件', url: 'https://www.apprcn.com', desc: 'Mac软件分享', rate: 5 },
    { name: '马可菠萝', url: 'https://www.macbl.com', desc: 'Mac软件下载', rate: 5 },
    { name: '麦克坞', url: 'https://www.macw.com', desc: 'Mac软件资源站', rate: 5 },
    { name: '精品MAC应用', url: 'https://xclient.info', desc: 'Mac精品软件', rate: 5 },
    { name: '脚本之家', url: 'https://www.jb51.net', desc: '脚本代码资源', rate: 5 },
    { name: 'PC6下载站', url: 'https://www.pc6.com', desc: '软件下载平台', rate: 5 },
    { name: '太平洋下载', url: 'https://dl.pconline.com.cn', desc: '太平洋电脑网', rate: 5 },
    { name: '中关村下载', url: 'https://xiazai.zol.com.cn', desc: 'ZOL软件下载', rate: 5 },
    { name: '非凡软件站', url: 'https://www.crsky.com', desc: '霏凡软件下载', rate: 5 },
    { name: '天极下载', url: 'https://mydown.yesky.com', desc: '天极软件下载', rate: 5 },
    { name: '多特软件站', url: 'https://www.duote.com', desc: '多特软件下载', rate: 5 },
  ]
};

// ============== 6. 🧰 更多在线工具 ==============
const onlineToolsMore = {
  title: '🧰 更多在线工具',
  websites: [
    { name: 'Remove.bg', url: 'https://www.remove.bg', desc: 'AI自动抠图', rate: 5 },
    { name: '稿定设计', url: 'https://www.gaoding.com', desc: '在线设计平台', rate: 5 },
    { name: 'Fotor懒设计', url: 'https://www.fotor.com.cn', desc: '在线图片编辑', rate: 5 },
    { name: 'Photopea', url: 'https://www.photopea.com', desc: '在线Photoshop', rate: 5 },
    { name: 'Figma', url: 'https://www.figma.com', desc: 'UI设计协作', rate: 5 },
    { name: 'Mastergo', url: 'https://mastergo.com', desc: '国产设计工具', rate: 5 },
    { name: '蓝湖', url: 'https://lanhuapp.com', desc: '设计协作平台', rate: 5 },
    { name: '摹客', url: 'https://www.mockplus.cn', desc: '原型设计工具', rate: 5 },
    { name: 'Axure', url: 'https://www.axure.com', desc: '产品原型工具', rate: 5 },
    { name: '墨刀', url: 'https://modao.cc', desc: '在线原型设计', rate: 5 },
    { name: '草料二维码', url: 'https://cli.im', desc: '二维码生成器', rate: 5 },
    { name: '在线PS', url: 'https://ps.gaoding.com', desc: '在线PhotoShop', rate: 5 },
    { name: 'UZER.ME', url: 'https://uzer.me', desc: '在线大型软件', rate: 5 },
    { name: '文叔叔', url: 'https://www.wenshushu.cn', desc: '大文件传输', rate: 5 },
    { name: '奶牛快传', url: 'https://cowtransfer.com', desc: '文件临时分享', rate: 5 },
    { name: 'Firefox Send', url: 'https://send.vis.ee', desc: '加密文件分享', rate: 5 },
    { name: 'Snapdrop', url: 'https://snapdrop.net', desc: '跨设备传文件', rate: 5 },
    { name: 'CopyTranslator', url: 'https://copytranslator.github.io', desc: '复制即翻译', rate: 5 },
    { name: 'TiddlyWiki', url: 'https://tiddlywiki.com', desc: '非线性笔记', rate: 5 },
    { name: 'Ditto', url: 'https://ditto-cp.sourceforge.io', desc: '剪贴板增强', rate: 5 },
  ]
};

const financeCategory = createCategory('💰 财经金融与办公', '', [
  financeInvestment,
  officeTemplates
]);

const resourcesCategory = createCategory('🎬 影视与学术科研', '', [
  movieResources,
  academicTools,
  softwareMore,
  onlineToolsMore
]);

db.push(financeCategory, resourcesCategory);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

function countCategories(root, count = 0) {
  for (const item of root) {
    if (item.nav) {
      count++;
      count = countCategories(item.nav, count);
    }
  }
  return count;
}

console.log(`✅ 新增分类: ${financeCategory.title}`);
console.log(`   └─ 包含: ${financeCategory.nav.length} 个子分类, ${countAll(financeCategory.nav)} 个网址`);
console.log(`✅ 新增分类: ${resourcesCategory.title}`);
console.log(`   └─ 包含: ${resourcesCategory.nav.length} 个子分类, ${countAll(resourcesCategory.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(financeCategory.nav) + countAll(resourcesCategory.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);
console.log(`📊 距离3000目标还差: ${3000 - countAll(db)} 个`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 第四轮扩充完成！距离目标又近一大步！💪');
