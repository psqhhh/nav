import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 30000;

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

// ============== 1. 📦 纯净软件下载中心 ==============
const softwareDownloads = {
  title: '📦 纯净软件下载',
  websites: [
    { name: '联想应用商店', url: 'https://lestore.lenovo.com', desc: '人工审核，绝对无捆绑', rate: 5 },
    { name: '腾讯软件中心', url: 'https://pc.qq.com', desc: '大厂官方纯净下载', rate: 5 },
    { name: '微软应用商店', url: 'https://apps.microsoft.com', desc: 'UWP应用绝对纯净', rate: 5 },
    { name: '360软件宝库', url: 'https://baoku.360.cn', desc: '选普通下载即可', rate: 4 },
    { name: 'Ninite', url: 'https://ninite.com', desc: '批量安装纯净软件', rate: 5 },
    { name: '果核剥壳', url: 'https://www.ghxi.com', desc: '绿色去广告修改版', rate: 5 },
    { name: 'PortableApps', url: 'https://portableapps.com', desc: '便携软件集合', rate: 5 },
    { name: 'Softpedia', url: 'https://www.softpedia.com', desc: '国外软件权威下载', rate: 5 },
    { name: '中关村在线下载', url: 'https://xiazai.zol.com.cn', desc: '老牌IT门户下载', rate: 4 },
    { name: '华军软件园', url: 'https://www.onlinedown.net', desc: '历史版本齐全', rate: 4 },
    { name: 'MajorGeeks', url: 'https://www.majorgeeks.com', desc: '国外精品工具', rate: 4 },
    { name: '异次元软件世界', url: 'https://www.iplaysoft.com', desc: '精品软件推荐', rate: 5 },
  ]
};

// ============== 2. 🏗️ 工程软件及替代方案 ==============
const engineeringSoftware = {
  title: '🏗️ 工程软件合集',
  websites: [
    { name: 'FreeCAD', url: 'https://www.freecad.org', desc: '开源3D参数化建模', rate: 5 },
    { name: 'LibreCAD', url: 'https://librecad.org', desc: '开源2D CAD替代AutoCAD', rate: 5 },
    { name: 'QCAD', url: 'https://www.qcad.org', desc: '易用的开源2D CAD', rate: 5 },
    { name: 'Blender BIM', url: 'https://blenderbim.org', desc: '开源BIM替代Revit', rate: 5 },
    { name: 'BRL-CAD', url: 'https://brlcad.org', desc: '军工级开源CAD', rate: 4 },
    { name: 'OpenSCAD', url: 'https://openscad.org', desc: '代码化3D建模', rate: 4 },
    { name: '广联达服务新干线', url: 'https://www.fwxgx.com', desc: '造价软件社区', rate: 5 },
    { name: '品茗软件', url: 'https://www.pinming.cn', desc: 'BIM算量软件', rate: 5 },
    { name: '鲁班软件', url: 'http://lubanshop.com', desc: '成本测算工具', rate: 5 },
    { name: '天正软件', url: 'http://www.tangent.com.cn', desc: '建筑CAD插件', rate: 5 },
    { name: 'AutoCAD官方', url: 'https://www.autodesk.com.cn', desc: 'Autodesk官方', rate: 5 },
    { name: 'Civil 3D', url: 'https://www.autodesk.com.cn/industry/civil-engineering', desc: '市政BIM软件', rate: 5 },
  ]
};

// ============== 3. 💻 电脑常用软件 ==============
const pcSoftware = {
  title: '💻 电脑常用软件',
  websites: [
    { name: 'Everything', url: 'https://www.voidtools.com', desc: '文件秒搜神器', rate: 5 },
    { name: 'Listary', url: 'https://www.listary.com', desc: '快速启动器', rate: 5 },
    { name: 'Snipaste', url: 'https://www.snipaste.com', desc: '截图贴图工具', rate: 5 },
    { name: 'Quicker', url: 'https://getquicker.net', desc: '右键快捷工具箱', rate: 5 },
    { name: 'Ditto', url: 'https://ditto-cp.sourceforge.io', desc: '剪贴板增强', rate: 5 },
    { name: 'uTools', url: 'https://u.tools', desc: '新一代效率启动器', rate: 5 },
    { name: 'PotPlayer', url: 'https://potplayer.daum.net', desc: '全能视频播放器', rate: 5 },
    { name: '7-Zip', url: 'https://www.7-zip.org', desc: '免费高压缩解压', rate: 5 },
    { name: 'Notepad++', url: 'https://notepad-plus-plus.org', desc: '高级文本编辑器', rate: 5 },
    { name: 'ShareX', url: 'https://getsharex.com', desc: '截图录屏分享', rate: 5 },
    { name: 'Bandizip', url: 'https://www.bandisoft.com/bandizip', desc: '免费压缩软件', rate: 5 },
    { name: 'Honeyview', url: 'https://www.bandisoft.com/honeyview', desc: '快速看图软件', rate: 5 },
    { name: 'CCleaner', url: 'https://www.ccleaner.com', desc: '系统清理工具', rate: 5 },
    { name: 'Geek Uninstaller', url: 'https://geekuninstaller.com', desc: '彻底卸载软件', rate: 5 },
    { name: 'Revo Uninstaller', url: 'https://www.revouninstaller.com', desc: '专业卸载工具', rate: 4 },
    { name: 'Speccy', url: 'https://www.ccleaner.com/speccy', desc: '硬件信息查看', rate: 5 },
    { name: 'CrystalDiskInfo', url: 'https://crystalmark.info', desc: '硬盘健康检测', rate: 5 },
  ]
};

// ============== 4. 🤖 Android 安卓软件 ==============
const androidApps = {
  title: '🤖 安卓应用',
  websites: [
    { name: '酷安', url: 'https://www.coolapk.com', desc: '国内精品应用市场', rate: 5 },
    { name: '应用宝', url: 'https://sj.qq.com', desc: '腾讯官方应用市场', rate: 5 },
    { name: '华为应用市场', url: 'https://appgallery.huawei.com', desc: '华为官方商店', rate: 5 },
    { name: '小米应用商店', url: 'https://app.mi.com', desc: '小米官方商店', rate: 5 },
    { name: 'ApkMirror', url: 'https://www.apkmirror.com', desc: '国外纯净APK下载', rate: 5 },
    { name: 'ApkPure', url: 'https://apkpure.com', desc: 'Google Play替代', rate: 5 },
    { name: 'F-Droid', url: 'https://f-droid.org', desc: '开源安卓应用商店', rate: 5 },
    { name: '豌豆荚', url: 'https://www.wandoujia.com', desc: '老牌安卓应用市场', rate: 4 },
    { name: 'PP助手', url: 'https://www.25pp.com', desc: '应用下载平台', rate: 4 },
    { name: '安智市场', url: 'https://www.anzhi.com', desc: '安卓应用社区', rate: 4 },
  ]
};

// ============== 5. 🍎 iOS 苹果软件 ==============
const iosApps = {
  title: '🍎 iOS应用',
  websites: [
    { name: 'App Store', url: 'https://apps.apple.com', desc: '苹果官方应用商店', rate: 5 },
    { name: 'TestFlight', url: 'https://developer.apple.com/testflight', desc: 'Beta测试应用', rate: 5 },
    { name: '爱思助手', url: 'https://www.i4.cn', desc: '苹果设备管理工具', rate: 5 },
    { name: 'PP助手', url: 'https://pro.25pp.com', desc: 'iOS应用下载', rate: 4 },
    { name: '同步推', url: 'https://www.tongbu.com', desc: 'iOS资源平台', rate: 4 },
    { name: 'iMazing', url: 'https://imazing.com', desc: '高级iOS设备管理', rate: 5 },
    { name: 'AltStore', url: 'https://altstore.io', desc: '第三方应用商店', rate: 4 },
    { name: 'TrollStore', url: 'https://trollstore.app', desc: '永久签名工具', rate: 4 },
  ]
};

// ============== 6. 📺 电视盒子APK ==============
const tvApps = {
  title: '📺 电视盒子应用',
  websites: [
    { name: '蚂蚁市场', url: 'https://www.mayiapk.com', desc: '电视应用市场', rate: 5 },
    { name: '当贝市场', url: 'https://www.dangbei.com', desc: '智能电视应用商店', rate: 5 },
    { name: '沙发管家', url: 'https://www.shafa.com', desc: '电视盒子应用市场', rate: 5 },
    { name: '美家市场', url: 'https://www.mjapk.com', desc: '电视应用大全', rate: 5 },
    { name: '乐视应用商店', url: 'http://store.leplay.cn', desc: '乐视电视市场', rate: 4 },
    { name: '奇珀市场', url: 'http://www.7po.com', desc: '智能电视应用', rate: 4 },
  ]
};

// ============== 7. 🌐 浏览器推荐 ==============
const browsers = {
  title: '🌐 浏览器',
  websites: [
    { name: 'Google Chrome', url: 'https://www.google.com/chrome', desc: '最流行浏览器', rate: 5 },
    { name: 'Microsoft Edge', url: 'https://www.microsoft.com/edge', desc: '微软新一代浏览器', rate: 5 },
    { name: 'Firefox', url: 'https://www.mozilla.org/firefox', desc: '火狐开源浏览器', rate: 5 },
    { name: 'Brave', url: 'https://brave.com', desc: '隐私防护浏览器', rate: 5 },
    { name: 'Vivaldi', url: 'https://vivaldi.com', desc: '高度自定义浏览器', rate: 5 },
    { name: 'Opera', url: 'https://www.opera.com', desc: '挪威经典浏览器', rate: 4 },
    { name: 'Thorium', url: 'https://thorium.rocks', desc: '最快Chromium分支', rate: 5 },
    { name: 'CentBrowser', url: 'http://www.centbrowser.com', desc: '百分浏览器', rate: 5 },
  ]
};

// ============== 8. 🎬 视频音乐 ==============
const mediaApps = {
  title: '🎬 视频音乐',
  websites: [
    { name: 'VLC媒体播放器', url: 'https://www.videolan.org', desc: '全能格式播放器', rate: 5 },
    { name: 'MPV', url: 'https://mpv.io', desc: '极简高性能播放器', rate: 5 },
    { name: 'MPC-HC', url: 'https://mpc-hc.org', desc: '轻量经典播放器', rate: 5 },
    { name: 'Foobar2000', url: 'https://www.foobar2000.org', desc: 'HIFI音乐播放器', rate: 5 },
    { name: 'Audacity', url: 'https://www.audacityteam.org', desc: '开源音频编辑', rate: 5 },
    { name: 'HandBrake', url: 'https://handbrake.fr', desc: '视频转码压缩', rate: 5 },
    { name: 'OBS Studio', url: 'https://obsproject.com', desc: '直播录屏神器', rate: 5 },
    { name: '剪映专业版', url: 'https://www.capcut.cn', desc: '免费专业视频剪辑', rate: 5 },
  ]
};

// ============== 9. 🛡️ 安全杀毒 ==============
const securityApps = {
  title: '🛡️ 安全杀毒',
  websites: [
    { name: '火绒安全', url: 'https://www.huorong.cn', desc: '国产轻量杀毒', rate: 5 },
    { name: 'Windows Defender', url: 'https://www.microsoft.com', desc: '系统自带防护', rate: 5 },
    { name: 'Bitdefender', url: 'https://www.bitdefender.com', desc: '国外顶级杀毒', rate: 5 },
    { name: 'Kaspersky', url: 'https://www.kaspersky.com', desc: '卡巴斯基安全', rate: 5 },
    { name: 'Malwarebytes', url: 'https://www.malwarebytes.com', desc: '恶意软件查杀', rate: 5 },
    { name: '360安全卫士', url: 'https://www.360.cn', desc: '国产防护套装', rate: 4 },
  ]
};

// ============== 10. 🏠 日常生活 ==============
const dailyLife = {
  title: '🏠 日常生活',
  websites: [
    { name: '支付宝', url: 'https://www.alipay.com', desc: '移动支付平台', rate: 5 },
    { name: '微信支付', url: 'https://pay.weixin.qq.com', desc: '微信支付平台', rate: 5 },
    { name: '12306', url: 'https://www.12306.cn', desc: '火车票官方购票', rate: 5 },
    { name: '携程旅行', url: 'https://www.ctrip.com', desc: '酒店机票预订', rate: 5 },
    { name: '美团', url: 'https://www.meituan.com', desc: '外卖团购生活', rate: 5 },
    { name: '饿了么', url: 'https://www.ele.me', desc: '外卖送餐平台', rate: 5 },
    { name: '大众点评', url: 'https://www.dianping.com', desc: '美食店铺评价', rate: 5 },
    { name: '高德地图', url: 'https://amap.com', desc: '导航地图服务', rate: 5 },
    { name: '百度地图', url: 'https://map.baidu.com', desc: '百度地图导航', rate: 5 },
    { name: '滴滴出行', url: 'https://www.didiglobal.com', desc: '网约车平台', rate: 5 },
    { name: '菜鸟裹裹', url: 'https://www.cainiao.com', desc: '快递物流查询', rate: 5 },
    { name: '顺丰速运', url: 'https://www.sf-express.com', desc: '顺丰快递官方', rate: 5 },
    { name: '京东物流', url: 'https://www.jdl.com', desc: '京东物流服务', rate: 5 },
    { name: '中国移动', url: 'https://www.10086.cn', desc: '移动营业厅', rate: 5 },
    { name: '中国联通', url: 'https://www.10010.com', desc: '联通营业厅', rate: 5 },
    { name: '中国电信', url: 'https://www.189.cn', desc: '电信营业厅', rate: 5 },
    { name: '国家电网', url: 'https://www.95598.cn', desc: '电费缴纳查询', rate: 5 },
    { name: '网上国网', url: 'https://www.sgcc.com.cn', desc: '国家电网服务', rate: 5 },
  ]
};

// ============== 11. 🏥 医疗健康 ==============
const healthCare = {
  title: '🏥 医疗健康',
  websites: [
    { name: '丁香医生', url: 'https://dxy.com', desc: '专业医疗科普', rate: 5 },
    { name: '春雨医生', url: 'https://www.chunyuyisheng.com', desc: '在线问诊咨询', rate: 5 },
    { name: '好大夫在线', url: 'https://www.haodf.com', desc: '医生预约挂号', rate: 5 },
    { name: '微医', url: 'https://www.guahao.com', desc: '挂号问诊平台', rate: 5 },
    { name: '平安好医生', url: 'https://www.pingan.com', desc: '平安健康平台', rate: 5 },
    { name: '京东健康', url: 'https://health.jd.com', desc: '在线医疗服务', rate: 5 },
    { name: '阿里健康', url: 'https://www.alihealth.cn', desc: '阿里健康平台', rate: 5 },
    { name: '健客网', url: 'https://www.jianke.com', desc: '网上药店平台', rate: 5 },
    { name: '1药网', url: 'https://www.111.com.cn', desc: '网上药品商城', rate: 5 },
    { name: '康爱多', url: 'https://www.360kad.com', desc: '医药电商平台', rate: 4 },
  ]
};

// ============== 12. 🍜 美食菜谱 ==============
const foodRecipes = {
  title: '🍜 美食菜谱',
  websites: [
    { name: '下厨房', url: 'https://www.xiachufang.com', desc: '家常菜谱大全', rate: 5 },
    { name: '豆果美食', url: 'https://www.douguo.com', desc: '美食社区平台', rate: 5 },
    { name: '美食天下', url: 'https://www.meishichina.com', desc: '中华美食大全', rate: 5 },
    { name: '掌厨', url: 'https://www.izhangchu.com', desc: '视频菜谱教学', rate: 5 },
    { name: '味库美食', url: 'https://www.wecook.cn', desc: '食材菜谱推荐', rate: 5 },
    { name: '厨房故事', url: 'https://www.kitchenstories.com', desc: '国际美食菜谱', rate: 5 },
    { name: '懒饭', url: 'https://www.lanfan.com', desc: '懒人快手菜谱', rate: 5 },
    { name: '饮食部落', url: 'https://food.nongli.com', desc: '健康饮食资讯', rate: 4 },
  ]
};

// ============== 13. 🛒 网上购物 ==============
const onlineShopping = {
  title: '🛒 网上购物',
  websites: [
    { name: '淘宝', url: 'https://www.taobao.com', desc: '阿里巴巴购物平台', rate: 5 },
    { name: '天猫', url: 'https://www.tmall.com', desc: '天猫官方商城', rate: 5 },
    { name: '京东', url: 'https://www.jd.com', desc: '京东自营商城', rate: 5 },
    { name: '拼多多', url: 'https://www.pinduoduo.com', desc: '拼团低价购物', rate: 5 },
    { name: '苏宁易购', url: 'https://www.suning.com', desc: '苏宁电器商城', rate: 5 },
    { name: '国美在线', url: 'https://www.gome.com.cn', desc: '国美电器商城', rate: 4 },
    { name: '当当', url: 'https://www.dangdang.com', desc: '图书文具商城', rate: 5 },
    { name: '亚马逊中国', url: 'https://www.amazon.cn', desc: '亚马逊购物', rate: 5 },
    { name: '网易严选', url: 'https://you.163.com', desc: '网易品质生活', rate: 5 },
    { name: '小米商城', url: 'https://www.mi.com', desc: '小米官方商城', rate: 5 },
    { name: '华为商城', url: 'https://www.vmall.com', desc: '华为官方商城', rate: 5 },
    { name: '唯品会', url: 'https://www.vip.com', desc: '品牌折扣特卖', rate: 5 },
    { name: '考拉海购', url: 'https://www.kaola.com', desc: '进口商品直购', rate: 5 },
    { name: '得物', url: 'https://www.dewu.com', desc: '潮流鉴别购物', rate: 5 },
    { name: '闲鱼', url: 'https://2.taobao.com', desc: '二手闲置交易', rate: 5 },
    { name: '转转', url: 'https://www.zhuanzhuan.com', desc: '二手物品交易', rate: 5 },
  ]
};

// ============== 14. 📰 新闻资讯 ==============
const newsMedia = {
  title: '📰 新闻资讯',
  websites: [
    { name: '今日头条', url: 'https://www.toutiao.com', desc: '个性化新闻推荐', rate: 5 },
    { name: '腾讯新闻', url: 'https://news.qq.com', desc: '腾讯新闻平台', rate: 5 },
    { name: '网易新闻', url: 'https://news.163.com', desc: '网易新闻门户', rate: 5 },
    { name: '新浪新闻', url: 'https://news.sina.com.cn', desc: '新浪新闻门户', rate: 5 },
    { name: '搜狐新闻', url: 'https://news.sohu.com', desc: '搜狐新闻门户', rate: 5 },
    { name: '凤凰新闻', url: 'https://www.ifeng.com', desc: '凤凰卫视资讯', rate: 5 },
    { name: '澎湃新闻', url: 'https://www.thepaper.cn', desc: '深度新闻报道', rate: 5 },
    { name: '界面新闻', url: 'https://www.jiemian.com', desc: '商业新闻平台', rate: 5 },
    { name: '36氪', url: 'https://36kr.com', desc: '创业创投资讯', rate: 5 },
    { name: '虎嗅', url: 'https://www.huxiu.com', desc: '科技商业媒体', rate: 5 },
    { name: '钛媒体', url: 'https://www.tmtpost.com', desc: '科技新媒体', rate: 5 },
    { name: '知乎', url: 'https://www.zhihu.com', desc: '中文问答社区', rate: 5 },
    { name: '豆瓣', url: 'https://www.douban.com', desc: '兴趣文化社区', rate: 5 },
    { name: '微博', url: 'https://weibo.com', desc: '社交媒体平台', rate: 5 },
    { name: 'B站', url: 'https://www.bilibili.com', desc: '视频弹幕网站', rate: 5 },
    { name: '小红书', url: 'https://www.xiaohongshu.com', desc: '生活方式平台', rate: 5 },
  ]
};

const softwareCategory = createCategory('🖥️ 软件资源宝库', '', [
  softwareDownloads,
  engineeringSoftware,
  pcSoftware,
  browsers,
  androidApps,
  iosApps,
  tvApps,
  mediaApps,
  securityApps
]);

const lifeCategory = createCategory('🌈 生活服务导航', '', [
  dailyLife,
  healthCare,
  foodRecipes,
  onlineShopping,
  newsMedia
]);

db.push(softwareCategory);
db.push(lifeCategory);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

function countCategories(root, count = 0) {
  for (const item of root) {
    if (item.title && item.nav) {
      count++;
      count = countCategories(item.nav, count);
    }
  }
  return count;
}

console.log(`✅ 新增分类: ${softwareCategory.title}`);
console.log(`   └─ 包含: ${softwareCategory.nav.length} 个子分类, ${countAll(softwareCategory.nav)} 个网址`);
console.log(`✅ 新增分类: ${lifeCategory.title}`);
console.log(`   └─ 包含: ${lifeCategory.nav.length} 个子分类, ${countAll(lifeCategory.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(softwareCategory.nav) + countAll(lifeCategory.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);
console.log(`📊 分类总数: ${countCategories(db)} 个`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 数据库扩充完成！生活工作全场景覆盖！');
