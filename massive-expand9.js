import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 120000;

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

// ============== 1. 📐 工程建筑资源 ==============
const engineeringResources = {
  title: '📐 工程建筑资源',
  websites: [
    { name: '筑龙网', url: 'https://www.zhulong.com', desc: '建筑工程论坛', rate: 5 },
    { name: '土木在线', url: 'https://www.co188.com', desc: '土木工程网', rate: 5 },
    { name: '土木工程网', url: 'https://www.tmgc.net', desc: '土木资料', rate: 5 },
    { name: '建工之家', url: 'https://www.jgzj.net', desc: '建筑人论坛', rate: 5 },
    { name: '天工网', url: 'https://www.tgnet.cn', desc: '工程资料', rate: 5 },
    { name: '天工问答', url: 'https://wenda.tgnet.cn', desc: '工程问答', rate: 5 },
    { name: '中国建筑资讯网', url: 'https://www.chinabuilding.com.cn', desc: '建筑资讯', rate: 5 },
    { name: '建筑英才网', url: 'https://www.buildhr.com', desc: '建筑招聘', rate: 5 },
    { name: '中国招投标网', url: 'https://www.infobidding.com', desc: '招投标信息', rate: 5 },
    { name: '中国政府采购网', url: 'http://www.ccgp.gov.cn', desc: '政府采购', rate: 5 },
    { name: '广联达服务新干线', url: 'https://www.fwxgx.com', desc: '广联达服务', rate: 5 },
    { name: '广联达造价圈', url: 'https://zqj.glodon.com', desc: '造价社区', rate: 5 },
    { name: '品茗软件', url: 'https://www.pinming.cn', desc: '品茗施工', rate: 5 },
    { name: '斯维尔', url: 'https://www.thsware.com', desc: '造价软件', rate: 5 },
    { name: '鲁班软件', url: 'https://www.lubansoft.com', desc: 'BIM软件', rate: 5 },
    { name: '鸿业科技', url: 'https://www.hongye.com.cn', desc: '市政软件', rate: 5 },
    { name: '天正软件', url: 'https://www.tangent.com.cn', desc: '天正建筑', rate: 5 },
    { name: 'PKPM', url: 'https://www.pkpm.cn', desc: '结构设计', rate: 5 },
    { name: '盈建科', url: 'https://www.yjk.cn', desc: '结构软件', rate: 5 },
    { name: 'MIDAS', url: 'https://www.midasit.cn', desc: '桥梁分析', rate: 5 },
    { name: ' Bentley', url: 'https://www.bentley.com', desc: '奔特力软件', rate: 5 },
    { name: 'AutoDesk', url: 'https://www.autodesk.com.cn', desc: '欧特克', rate: 5 },
    { name: 'Rhino3D', url: 'https://www.rhino3d.com', desc: '犀牛建模', rate: 5 },
    { name: 'SketchUp', url: 'https://www.sketchup.com', desc: '草图大师', rate: 5 },
    { name: 'Revit', url: 'https://www.autodesk.com.cn', desc: 'BIM建模', rate: 5 },
    { name: 'Navisworks', url: 'https://www.autodesk.com.cn', desc: 'BIM协调', rate: 5 },
    { name: 'Lumion', url: 'https://lumion.com', desc: '渲染软件', rate: 5 },
    { name: 'Enscape', url: 'https://enscape3d.com', desc: '实时渲染', rate: 5 },
    { name: 'V-Ray', url: 'https://www.chaos.com', desc: '渲染器', rate: 5 },
    { name: '3D Max', url: 'https://www.autodesk.com.cn', desc: '3D建模', rate: 5 },
  ]
};

// ============== 2. 📊 规范标准图集 ==============
const standardAtlases = {
  title: '📊 规范标准图集',
  websites: [
    { name: '国家规范标准查询', url: 'https://www.spc.org.cn', desc: '国家标准', rate: 5 },
    { name: '工标网', url: 'http://www.csres.com', desc: '行业标准', rate: 5 },
    { name: '建标库', url: 'https://www.jianbiaoku.com', desc: '规范图集', rate: 5 },
    { name: '标准分享网', url: 'https://www.bzfxw.com', desc: '标准下载', rate: 5 },
    { name: '国标图集网', url: 'https://www.tuji8.com', desc: '图集下载', rate: 5 },
    { name: '16G101图集', url: 'https://www.16g101.com', desc: '平法图集', rate: 5 },
    { name: '知网空间', url: 'http://kns.cnki.net', desc: '论文标准', rate: 5 },
    { name: '万方数据', url: 'https://www.wanfangdata.com.cn', desc: '科技标准', rate: 5 },
    { name: '住房和城乡建设部', url: 'https://www.mohurd.gov.cn', desc: '住建部', rate: 5 },
    { name: '国家工程建设标准信息网', url: 'https://www.ccsn.gov.cn', desc: '工程标准', rate: 5 },
    { name: '中国建筑标准设计研究院', url: 'https://www.chinabuilding.com.cn', desc: '标准院', rate: 5 },
    { name: 'ISO标准', url: 'https://www.iso.org', desc: '国际标准', rate: 5 },
    { name: 'ASTM标准', url: 'https://www.astm.org', desc: '美国材料标准', rate: 5 },
    { name: 'DIN标准', url: 'https://www.din.de', desc: '德国标准', rate: 5 },
    { name: 'BS标准', url: 'https://www.bsigroup.com', desc: '英国标准', rate: 5 },
    { name: 'JIS标准', url: 'https://www.jisc.go.jp', desc: '日本标准', rate: 5 },
    { name: 'GB标准', url: 'https://openstd.samr.gov.cn', desc: '国家标准平台', rate: 5 },
    { name: '行业标准查询', url: 'https://hbba.sacinfo.org.cn', desc: '行业标准', rate: 5 },
    { name: '地方标准查询', url: 'https://dbba.sacinfo.org.cn', desc: '地方标准', rate: 5 },
    { name: '企业标准查询', url: 'https://www.qybz.org.cn', desc: '企业标准', rate: 5 },
  ]
};

// ============== 3. 🔧 常用软件下载 ==============
const softwareDownloads = {
  title: '🔧 常用软件下载',
  websites: [
    { name: '微软官网', url: 'https://www.microsoft.com', desc: 'Microsoft', rate: 5 },
    { name: 'Adobe官网', url: 'https://www.adobe.com', desc: 'Adobe全家桶', rate: 5 },
    { name: 'AutoCAD', url: 'https://www.autodesk.com.cn', desc: 'AutoCAD下载', rate: 5 },
    { name: 'Office', url: 'https://www.office.com', desc: '微软Office', rate: 5 },
    { name: 'WPS', url: 'https://www.wps.cn', desc: '金山办公', rate: 5 },
    { name: '腾讯软件中心', url: 'https://pc.qq.com', desc: '腾讯软件', rate: 5 },
    { name: '360软件管家', url: 'https://soft.360.cn', desc: '360软件', rate: 5 },
    { name: '百度软件中心', url: 'https://rj.baidu.com', desc: '百度软件', rate: 5 },
    { name: '搜狗软件', url: 'https://soft.sogou.com', desc: '搜狗软件', rate: 5 },
    { name: '驱动精灵', url: 'https://www.drivergenius.com', desc: '驱动安装', rate: 5 },
    { name: '驱动人生', url: 'https://www.160.com', desc: '驱动管理', rate: 5 },
    { name: '鲁大师', url: 'https://www.ludashi.com', desc: '硬件检测', rate: 5 },
    { name: 'CPU-Z', url: 'https://www.cpuid.com', desc: 'CPU检测', rate: 5 },
    { name: 'GPU-Z', url: 'https://www.techpowerup.com', desc: '显卡检测', rate: 5 },
    { name: 'AIDA64', url: 'https://www.aida64.com', desc: '硬件检测', rate: 5 },
    { name: 'WinRAR', url: 'https://www.win-rar.com', desc: '压缩软件', rate: 5 },
    { name: '7-Zip', url: 'https://www.7-zip.org', desc: '免费压缩', rate: 5 },
    { name: 'Bandizip', url: 'https://www.bandisoft.com', desc: '压缩软件', rate: 5 },
    { name: 'TeamViewer', url: 'https://www.teamviewer.com', desc: '远程控制', rate: 5 },
    { name: '向日葵远程', url: 'https://sunlogin.oray.com', desc: '远程控制', rate: 5 },
    { name: 'ToDesk', url: 'https://www.todesk.com', desc: '远程控制', rate: 5 },
    { name: 'AnyDesk', url: 'https://anydesk.com', desc: '远程软件', rate: 5 },
    { name: 'Everything', url: 'https://www.voidtools.com', desc: '文件搜索', rate: 5 },
    { name: 'Listary', url: 'https://www.listary.com', desc: '文件搜索', rate: 5 },
    { name: 'Wox', url: 'https://wox.one', desc: '启动工具', rate: 5 },
    { name: 'PowerToys', url: 'https://github.com/microsoft/PowerToys', desc: '微软工具集', rate: 5 },
    { name: 'Snipaste', url: 'https://zh.snipaste.com', desc: '截图工具', rate: 5 },
    { name: 'ShareX', url: 'https://getsharex.com', desc: '截图工具', rate: 5 },
    { name: 'FastStone Capture', url: 'https://www.faststone.org', desc: '截图录屏', rate: 5 },
    { name: 'OBS Studio', url: 'https://obsproject.com', desc: '录屏直播', rate: 5 },
  ]
};

// ============== 4. 🔒 安全杀毒软件 ==============
const securitySoftware = {
  title: '🔒 安全杀毒软件',
  websites: [
    { name: '360安全卫士', url: 'https://www.360.cn', desc: '360安全', rate: 5 },
    { name: '腾讯电脑管家', url: 'https://guanjia.qq.com', desc: '电脑管家', rate: 5 },
    { name: '火绒安全', url: 'https://www.huorong.cn', desc: '火绒杀毒', rate: 5 },
    { name: '金山毒霸', url: 'https://www.duba.net', desc: '金山杀毒', rate: 5 },
    { name: '瑞星杀毒', url: 'https://www.rising.com.cn', desc: '瑞星安全', rate: 5 },
    { name: '卡巴斯基', url: 'https://www.kaspersky.com.cn', desc: '卡巴斯基', rate: 5 },
    { name: '诺顿杀毒', url: 'https://www.norton.com', desc: '诺顿安全', rate: 5 },
    { name: 'McAfee', url: 'https://www.mcafee.com', desc: '迈克菲', rate: 5 },
    { name: 'ESET NOD32', url: 'https://www.eset.com', desc: 'ESET杀毒', rate: 5 },
    { name: 'Bitdefender', url: 'https://www.bitdefender.com', desc: '比特梵德', rate: 5 },
    { name: 'Malwarebytes', url: 'https://www.malwarebytes.com', desc: '反恶意软件', rate: 5 },
    { name: 'Windows Defender', url: 'https://www.microsoft.com', desc: '微软杀毒', rate: 5 },
    { name: '影子系统', url: 'https://www.yingzixitong.com', desc: '系统还原', rate: 5 },
    { name: '冰点还原', url: 'https://www.faronics.com', desc: '系统还原', rate: 5 },
    { name: 'VMware', url: 'https://www.vmware.com', desc: '虚拟机', rate: 5 },
    { name: 'VirtualBox', url: 'https://www.virtualbox.org', desc: '免费虚拟机', rate: 5 },
    { name: 'Hyper-V', url: 'https://docs.microsoft.com', desc: '微软虚拟化', rate: 5 },
    { name: 'Parallels', url: 'https://www.parallels.com', desc: 'Mac虚拟机', rate: 5 },
    { name: 'CCleaner', url: 'https://www.ccleaner.com', desc: '系统清理', rate: 5 },
    { name: 'Advanced SystemCare', url: 'https://www.iobit.com', desc: '系统优化', rate: 5 },
    { name: 'Wise Care 365', url: 'https://www.wisecleaner.com', desc: '系统优化', rate: 5 },
    { name: 'DiskGenius', url: 'https://www.diskgenius.cn', desc: '分区工具', rate: 5 },
    { name: 'Partition Wizard', url: 'https://www.partitionwizard.com', desc: '分区管理', rate: 5 },
    { name: '傲梅分区助手', url: 'https://www.disktool.cn', desc: '分区工具', rate: 5 },
    { name: 'PE系统', url: 'https://www.wepe.com.cn', desc: '微PE工具箱', rate: 5 },
    { name: '老毛桃PE', url: 'https://www.laomaotao.net', desc: 'PE启动盘', rate: 5 },
    { name: '大白菜PE', url: 'https://www.dabaicai.com', desc: '大白菜PE', rate: 5 },
    { name: 'U深度PE', url: 'https://www.ushendu.com', desc: 'U盘装机', rate: 5 },
    { name: 'rufus', url: 'https://rufus.ie', desc: '启动盘制作', rate: 5 },
    { name: 'UltraISO', url: 'https://cn.ezbsystems.com', desc: '软碟通', rate: 5 },
  ]
};

// ============== 5. 🎨 设计创意资源 ==============
const designCreative = {
  title: '🎨 设计创意资源',
  websites: [
    { name: '站酷', url: 'https://www.zcool.com.cn', desc: '设计师社区', rate: 5 },
    { name: 'Behance', url: 'https://www.behance.net', desc: '全球设计', rate: 5 },
    { name: 'Dribbble', url: 'https://dribbble.com', desc: '设计师社区', rate: 5 },
    { name: 'Pinterest', url: 'https://www.pinterest.com', desc: '灵感图库', rate: 5 },
    { name: '花瓣网', url: 'https://huaban.com', desc: '灵感采集', rate: 5 },
    { name: '涂鸦王国', url: 'https://www.poocg.com', desc: '插画平台', rate: 5 },
    { name: '轻之文库', url: 'https://www.linovel.net', desc: '插画素材', rate: 5 },
    { name: 'ArtStation', url: 'https://www.artstation.com', desc: 'CG艺术家', rate: 5 },
    { name: 'DeviantArt', url: 'https://www.deviantart.com', desc: '艺术社区', rate: 5 },
    { name: 'Awwwards', url: 'https://www.awwwards.com', desc: '网页设计奖', rate: 5 },
    { name: 'UI中国', url: 'https://www.ui.cn', desc: 'UI设计社区', rate: 5 },
    { name: 'Iconfinder', url: 'https://www.iconfinder.com', desc: '图标搜索', rate: 5 },
    { name: 'Flaticon', url: 'https://www.flaticon.com', desc: '免费图标', rate: 5 },
    { name: 'Iconfont', url: 'https://www.iconfont.cn', desc: '阿里图标库', rate: 5 },
    { name: 'Font Awesome', url: 'https://fontawesome.com', desc: '字体图标', rate: 5 },
    { name: 'Google Fonts', url: 'https://fonts.google.com', desc: '字体库', rate: 5 },
    { name: '字由', url: 'https://www.hellofont.cn', desc: '字体管理', rate: 5 },
    { name: '方正字库', url: 'https://www.foundertype.com', desc: '中文字体', rate: 5 },
    { name: '汉仪字库', url: 'https://www.hanyi.com.cn', desc: '中文字体', rate: 5 },
    { name: '造字工房', url: 'https://www.makefont.com', desc: '创意字体', rate: 5 },
  ]
};

// ============== 6. 🌱 自媒体与营销 ==============
const selfMedia = {
  title: '🌱 自媒体与营销',
  websites: [
    { name: '微信公众平台', url: 'https://mp.weixin.qq.com', desc: '公众号', rate: 5 },
    { name: '抖音创作者平台', url: 'https://creator.douyin.com', desc: '抖音创作', rate: 5 },
    { name: '快手创作者平台', url: 'https://cp.kuaishou.com', desc: '快手创作', rate: 5 },
    { name: 'B站创作中心', url: 'https://member.bilibili.com', desc: 'B站创作', rate: 5 },
    { name: '小红书创作平台', url: 'https://www.xiaohongshu.com', desc: '小红书', rate: 5 },
    { name: '百家号', url: 'https://baijiahao.baidu.com', desc: '百家号', rate: 5 },
    { name: '今日头条号', url: 'https://mp.toutiao.com', desc: '头条号', rate: 5 },
    { name: '搜狐号', url: 'https://mp.sohu.com', desc: '搜狐号', rate: 5 },
    { name: '网易号', url: 'https://mp.163.com', desc: '网易号', rate: 5 },
    { name: '企鹅号', url: 'https://om.qq.com', desc: '企鹅号', rate: 5 },
    { name: '大鱼号', url: 'https://mp.dayu.com', desc: '阿里大鱼号', rate: 5 },
    { name: '知乎机构号', url: 'https://www.zhihu.com/org', desc: '知乎号', rate: 5 },
    { name: '微博自媒体', url: 'https://weibo.com', desc: '微博', rate: 5 },
    { name: '135编辑器', url: 'https://www.135editor.com', desc: '公众号排版', rate: 5 },
    { name: '秀米', url: 'https://xiumi.us', desc: '图文排版', rate: 5 },
    { name: 'i排版', url: 'https://www.ipaiban.com', desc: '排版工具', rate: 5 },
    { name: '96编辑器', url: 'https://bj.96weixin.com', desc: '微信编辑器', rate: 5 },
    { name: '新榜', url: 'https://www.newrank.cn', desc: '新媒体数据', rate: 5 },
    { name: '清博大数据', url: 'https://www.gsdata.cn', desc: '新媒体数据', rate: 5 },
    { name: '微小宝', url: 'https://www.wxb.com', desc: '公众号助手', rate: 5 },
  ]
};

const category15 = createCategory('🏗️ 工程建筑软件专区', '', [
  engineeringResources,
  standardAtlases
]);

const category16 = createCategory('🖥️ 电脑软件与安全', '', [
  softwareDownloads,
  securitySoftware
]);

const category17 = createCategory('🎨 设计与自媒体', '', [
  designCreative,
  selfMedia
]);

db.push(category15, category16, category17);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`✅ 新增分类: ${category15.title}`);
console.log(`   └─ 包含: ${category15.nav.length} 个子分类, ${countAll(category15.nav)} 个网址`);
console.log(`✅ 新增分类: ${category16.title}`);
console.log(`   └─ 包含: ${category16.nav.length} 个子分类, ${countAll(category16.nav)} 个网址`);
console.log(`✅ 新增分类: ${category17.title}`);
console.log(`   └─ 包含: ${category17.nav.length} 个子分类, ${countAll(category17.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(category15.nav) + countAll(category16.nav) + countAll(category17.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);
console.log(`📊 距离3000目标还差: ${3000 - countAll(db)} 个`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 第九轮扩充完成！还差最后300+！💪');
