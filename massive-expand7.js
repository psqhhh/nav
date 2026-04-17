import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 100000;

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

// ============== 1. 📱 安卓应用资源 ==============
const androidApps = {
  title: '📱 安卓应用资源',
  websites: [
    { name: '应用宝', url: 'https://sj.qq.com', desc: '腾讯应用商店', rate: 5 },
    { name: '华为应用市场', url: 'https://appgallery.huawei.com', desc: '华为应用商店', rate: 5 },
    { name: '小米应用商店', url: 'https://app.mi.com', desc: '小米应用市场', rate: 5 },
    { name: 'OPPO软件商店', url: 'https://store.oppomobile.com', desc: 'OPPO应用', rate: 5 },
    { name: 'vivo应用商店', url: 'https://dev.vivo.com.cn', desc: 'vivo应用', rate: 5 },
    { name: '魅族应用商店', url: 'https://app.flyme.cn', desc: '魅族应用', rate: 5 },
    { name: '应用汇', url: 'https://www.appchina.com', desc: '安卓应用市场', rate: 5 },
    { name: '安智市场', url: 'https://www.anzhi.com', desc: '安卓应用下载', rate: 5 },
    { name: '豌豆荚', url: 'https://www.wandoujia.com', desc: '豌豆荚应用', rate: 5 },
    { name: 'PP助手', url: 'https://www.pp.cn', desc: 'PP助手安卓', rate: 5 },
    { name: '91手机助手', url: 'https://zs.91.com', desc: '91助手', rate: 5 },
    { name: '百度手机助手', url: 'https://mobile.baidu.com', desc: '百度应用', rate: 5 },
    { name: '360手机助手', url: 'https://sj.360.cn', desc: '360应用市场', rate: 5 },
    { name: '三星应用商店', url: 'https://galaxystore.samsung.com', desc: '三星应用', rate: 5 },
    { name: '酷安网', url: 'https://www.coolapk.com', desc: '酷安应用市场', rate: 5 },
    { name: 'APKPure', url: 'https://apkpure.com', desc: 'APK下载', rate: 5 },
    { name: 'APKMirror', url: 'https://www.apkmirror.com', desc: 'APK镜像', rate: 5 },
    { name: 'Aptoide', url: 'https://www.aptoide.com', desc: '开源应用商店', rate: 5 },
    { name: 'F-Droid', url: 'https://f-droid.org', desc: '开源应用', rate: 5 },
    { name: 'ApkHere', url: 'https://apkhere.com', desc: '国外APK', rate: 5 },
    { name: '安卓软件园', url: 'https://www.androidonline.net', desc: '安卓软件', rate: 5 },
    { name: '2265安卓网', url: 'https://www.2265.com', desc: '安卓游戏', rate: 5 },
    { name: '当乐网', url: 'https://www.d.cn', desc: '手机游戏', rate: 5 },
    { name: '九游', url: 'https://www.9game.cn', desc: '手游平台', rate: 5 },
    { name: 'TapTap', url: 'https://www.taptap.com', desc: '发现好游戏', rate: 5 },
    { name: '好游快爆', url: 'https://www.3839.com', desc: '手游平台', rate: 5 },
    { name: '4399手机游戏', url: 'https://m.4399.com', desc: '手机小游戏', rate: 5 },
    { name: '7723游戏盒', url: 'https://www.7723.cn', desc: '游戏资源', rate: 5 },
    { name: '骑士助手', url: 'https://www.vqs.com', desc: '游戏盒子', rate: 5 },
    { name: '八门神器', url: 'https://www.bamenzhushou.com', desc: '游戏修改', rate: 5 },
  ]
};

// ============== 2. 🍎 iOS苹果应用 ==============
const iosApps = {
  title: '🍎 iOS苹果应用',
  websites: [
    { name: 'App Store', url: 'https://www.apple.com/app-store', desc: '苹果应用商店', rate: 5 },
    { name: 'TestFlight', url: 'https://developer.apple.com/testflight', desc: '测试平台', rate: 5 },
    { name: '爱思助手', url: 'https://www.i4.cn', desc: '苹果助手', rate: 5 },
    { name: 'PP助手', url: 'https://pro.25pp.com', desc: 'PP苹果助手', rate: 5 },
    { name: '同步推', url: 'https://www.tongbu.com', desc: '同步助手', rate: 5 },
    { name: '快用苹果助手', url: 'https://www.kuaiyong.com', desc: '快用助手', rate: 5 },
    { name: '海马助手', url: 'https://www.haima.me', desc: '海马玩助手', rate: 5 },
    { name: 'XY苹果助手', url: 'https://www.xyzs.com', desc: 'XY助手', rate: 5 },
    { name: 'itools', url: 'https://www.itools.cn', desc: '兔子助手', rate: 5 },
    { name: '91助手', url: 'https://pro.91.com', desc: '91苹果助手', rate: 5 },
    { name: '太极刷机', url: 'https://www.taig.com', desc: '苹果刷机', rate: 5 },
    { name: '爱思论坛', url: 'https://bbs.i4.cn', desc: '苹果论坛', rate: 5 },
    { name: '威锋网', url: 'https://www.feng.com', desc: '苹果用户社区', rate: 5 },
    { name: 'MacX', url: 'https://www.macx.cn', desc: '苹果资讯', rate: 5 },
    { name: '苹果官网', url: 'https://www.apple.com/cn', desc: 'Apple中国', rate: 5 },
    { name: 'Apple支持', url: 'https://support.apple.com', desc: '苹果技术支持', rate: 5 },
    { name: 'iCloud', url: 'https://www.icloud.com', desc: '苹果云', rate: 5 },
    { name: 'iTunes', url: 'https://www.apple.com/itunes', desc: '苹果媒体', rate: 5 },
    { name: 'Apple Music', url: 'https://music.apple.com', desc: '苹果音乐', rate: 5 },
    { name: 'Apple TV+', url: 'https://tv.apple.com', desc: '苹果视频', rate: 5 },
  ]
};

// ============== 3. 📺 电视盒子应用 ==============
const tvApps = {
  title: '📺 电视盒子应用',
  websites: [
    { name: '当贝市场', url: 'https://www.dangbei.com', desc: '智能电视应用', rate: 5 },
    { name: '沙发管家', url: 'https://www.shafa.com', desc: '电视应用商店', rate: 5 },
    { name: '奇珀市场', url: 'https://www.7po.com', desc: '电视应用', rate: 5 },
    { name: '蜜蜂市场', url: 'https://www.fengmanginfo.com', desc: '蜜蜂应用', rate: 5 },
    { name: '美家市场', url: 'https://www.mjapk.com', desc: '电视应用市场', rate: 5 },
    { name: '蚂蚁市场', url: 'https://www.mayiapk.com', desc: '电视软件', rate: 5 },
    { name: '乐播投屏', url: 'https://www.hpplay.com.cn', desc: '投屏软件', rate: 5 },
    { name: '极光TV', url: 'https://tv.qq.com', desc: '腾讯极光', rate: 5 },
    { name: '酷喵影视', url: 'https://www.youku.com', desc: '优酷TV版', rate: 5 },
    { name: '芒果TV', url: 'https://www.mgtv.com', desc: '芒果TV版', rate: 5 },
    { name: '银河奇异果', url: 'https://www.iqiyi.com', desc: '爱奇艺TV版', rate: 5 },
    { name: '云视听小电视', url: 'https://www.bilibili.com', desc: 'B站TV版', rate: 5 },
    { name: '电视家', url: 'https://www.dianshijia.tv', desc: '电视直播', rate: 5 },
    { name: '火星直播', url: 'https://www.huoxingzhibo.com', desc: '电视直播', rate: 5 },
    { name: '小薇直播', url: 'https://www.xiaoweizhibo.com', desc: '直播软件', rate: 5 },
    { name: 'HDP直播', url: 'https://www.hdplive.net', desc: '高清直播', rate: 5 },
    { name: '亿家直播', url: 'https://www.yijia.tv', desc: '直播应用', rate: 5 },
    { name: '当贝播放器', url: 'https://www.dangbei.com/player', desc: '电视播放器', rate: 5 },
    { name: 'Kodi播放器', url: 'https://kodi.tv', desc: '开源播放器', rate: 5 },
    { name: 'VLC播放器', url: 'https://www.videolan.org', desc: 'VLC媒体播放器', rate: 5 },
  ]
};

// ============== 4. 🖨️ MAC软件 ==============
const macSoftware = {
  title: '🖨️ MAC软件精选',
  websites: [
    { name: 'MacX下载', url: 'https://www.macx.cn', desc: 'Mac软件下载', rate: 5 },
    { name: '马克喵', url: 'https://www.macmao.com', desc: 'Mac资源', rate: 5 },
    { name: 'MacW', url: 'https://www.macw.com', desc: 'Mac软件', rate: 5 },
    { name: 'MacVF', url: 'https://www.macvf.com', desc: 'Mac精品软件', rate: 5 },
    { name: '玩转苹果', url: 'https://www.ifunmac.com', desc: 'Mac资源', rate: 5 },
    { name: '苹果软件园', url: 'https://www.macappstore.net', desc: 'Mac软件', rate: 5 },
    { name: 'SkkMoe', url: 'https://www.skkmoe.com', desc: 'Mac应用', rate: 5 },
    { name: 'MacPeers', url: 'https://www.macpeers.com', desc: 'Mac分享', rate: 5 },
    { name: 'MacSky', url: 'https://www.macsky.net', desc: 'Mac天空', rate: 5 },
    { name: 'AppKed', url: 'https://www.macbed.com', desc: 'Mac下载', rate: 5 },
    { name: 'Hackintool', url: 'https://github.com/headkaze/Hackintool', desc: '黑苹果工具', rate: 5 },
    { name: 'OpenCore', url: 'https://dortania.github.io', desc: '黑苹果引导', rate: 5 },
    { name: 'Clover', url: 'https://github.com/CloverHackyColor', desc: '四叶草引导', rate: 5 },
    { name: '黑果小兵', url: 'https://blog.daliansky.net', desc: '黑苹果镜像', rate: 5 },
    { name: '远景论坛', url: 'https://bbs.pcbeta.com', desc: '黑苹果论坛', rate: 5 },
    { name: 'tonymacx86', url: 'https://www.tonymacx86.com', desc: '国外黑苹果', rate: 5 },
    { name: 'InsanelyMac', url: 'https://www.insanelymac.com', desc: '黑苹果社区', rate: 5 },
    { name: 'Homebrew', url: 'https://brew.sh', desc: 'Mac包管理器', rate: 5 },
    { name: 'MacPorts', url: 'https://www.macports.org', desc: 'Mac包管理', rate: 5 },
    { name: 'Setapp', url: 'https://setapp.com', desc: 'Mac订阅商店', rate: 5 },
  ]
};

// ============== 5. 🛠️ 浏览器扩展 ==============
const browserExtensions = {
  title: '🛠️ 浏览器扩展插件',
  websites: [
    { name: 'Chrome网上应用店', url: 'https://chrome.google.com/webstore', desc: 'Chrome插件', rate: 5 },
    { name: 'Edge加载项', url: 'https://microsoftedge.microsoft.com/addons', desc: 'Edge插件', rate: 5 },
    { name: 'Firefox附加组件', url: 'https://addons.mozilla.org', desc: '火狐插件', rate: 5 },
    { name: '油猴脚本', url: 'https://www.tampermonkey.net', desc: 'Tampermonkey', rate: 5 },
    { name: 'Greasy Fork', url: 'https://greasyfork.org', desc: '用户脚本', rate: 5 },
    { name: 'OpenUserJS', url: 'https://openuserjs.org', desc: '开源脚本', rate: 5 },
    { name: 'UserScript', url: 'https://userscript.zone', desc: '脚本搜索', rate: 5 },
    { name: 'Violentmonkey', url: 'https://violentmonkey.github.io', desc: '暴力猴', rate: 5 },
    { name: '广告终结者', url: 'https://www.chromeadblock.com', desc: '广告拦截', rate: 5 },
    { name: 'AdGuard', url: 'https://adguard.com', desc: '广告拦截', rate: 5 },
    { name: 'uBlock Origin', url: 'https://ublockorigin.com', desc: '广告拦截器', rate: 5 },
    { name: 'ADBlock Plus', url: 'https://adblockplus.org', desc: 'ABP广告拦截', rate: 5 },
    { name: 'LastPass', url: 'https://www.lastpass.com', desc: '密码管理器', rate: 5 },
    { name: '1Password', url: 'https://1password.com', desc: '密码管理', rate: 5 },
    { name: 'Bitwarden', url: 'https://bitwarden.com', desc: '开源密码管理', rate: 5 },
    { name: 'IDM Integration', url: 'https://www.internetdownloadmanager.com', desc: '下载插件', rate: 5 },
    { name: 'The Great Suspender', url: 'https://chrome.google.com', desc: '标签页管理', rate: 5 },
    { name: 'OneTab', url: 'https://www.one-tab.com', desc: '标签页整理', rate: 5 },
    { name: 'Dark Reader', url: 'https://darkreader.org', desc: '深色模式', rate: 5 },
    { name: '翻译插件', url: 'https://translate.google.com', desc: 'Google翻译', rate: 5 },
  ]
};

// ============== 6. 🧠 AI人工智能工具 ==============
const aiTools = {
  title: '🧠 AI人工智能工具',
  websites: [
    { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'OpenAI对话', rate: 5 },
    { name: 'GPT-4', url: 'https://openai.com/gpt-4', desc: 'GPT-4模型', rate: 5 },
    { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic AI', rate: 5 },
    { name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google AI', rate: 5 },
    { name: '文心一言', url: 'https://yiyan.baidu.com', desc: '百度文心', rate: 5 },
    { name: '通义千问', url: 'https://tongyi.aliyun.com', desc: '阿里通义', rate: 5 },
    { name: '讯飞星火', url: 'https://xinghuo.xfyun.cn', desc: '科大讯飞', rate: 5 },
    { name: '豆包', url: 'https://www.doubao.com', desc: '字节AI', rate: 5 },
    { name: '360智脑', url: 'https://ai.360.cn', desc: '360 AI', rate: 5 },
    { name: '紫东太初', url: 'https://taichu.ia.ac.cn', desc: '中科院AI', rate: 5 },
    { name: 'Midjourney', url: 'https://www.midjourney.com', desc: 'AI绘画', rate: 5 },
    { name: 'DALL-E 3', url: 'https://openai.com/dall-e-3', desc: 'OpenAI绘画', rate: 5 },
    { name: 'Stable Diffusion', url: 'https://stablediffusionweb.com', desc: '开源绘画', rate: 5 },
    { name: '文心一格', url: 'https://yige.baidu.com', desc: '百度AI绘画', rate: 5 },
    { name: '通义万相', url: 'https://wanxiang.aliyun.com', desc: '阿里AI绘画', rate: 5 },
    { name: '即梦AI', url: 'https://jimeng.jianying.com', desc: '剪映AI绘画', rate: 5 },
    { name: 'Suno AI', url: 'https://www.suno.ai', desc: 'AI音乐生成', rate: 5 },
    { name: 'Udio', url: 'https://www.udio.com', desc: 'AI音乐创作', rate: 5 },
    { name: 'Runway', url: 'https://runwayml.com', desc: 'AI视频生成', rate: 5 },
    { name: 'Pika Labs', url: 'https://pika.art', desc: 'AI视频', rate: 5 },
    { name: 'Sora', url: 'https://openai.com/sora', desc: 'OpenAI视频', rate: 5 },
    { name: 'Notion AI', url: 'https://www.notion.so', desc: 'AI笔记', rate: 5 },
    { name: 'GitHub Copilot', url: 'https://github.com/copilot', desc: 'AI编程助手', rate: 5 },
    { name: 'Cursor', url: 'https://cursor.sh', desc: 'AI编辑器', rate: 5 },
    { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com', desc: '计算知识引擎', rate: 5 },
    { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI搜索引擎', rate: 5 },
    { name: '秘塔AI搜索', url: 'https://metaso.cn', desc: 'AI搜索引擎', rate: 5 },
    { name: '天工AI搜索', url: 'https://search.tiangong.cn', desc: '昆仑万维搜索', rate: 5 },
    { name: 'Devin', url: 'https://www.cognition-labs.com', desc: 'AI程序员', rate: 5 },
    { name: 'Character.AI', url: 'https://character.ai', desc: '角色AI聊天', rate: 5 },
  ]
};

const category11 = createCategory('📱 移动应用商店', '', [
  androidApps,
  iosApps,
  tvApps,
  macSoftware
]);

const category12 = createCategory('🧩 浏览器与AI工具', '', [
  browserExtensions,
  aiTools
]);

db.push(category11, category12);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`✅ 新增分类: ${category11.title}`);
console.log(`   └─ 包含: ${category11.nav.length} 个子分类, ${countAll(category11.nav)} 个网址`);
console.log(`✅ 新增分类: ${category12.title}`);
console.log(`   └─ 包含: ${category12.nav.length} 个子分类, ${countAll(category12.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(category11.nav) + countAll(category12.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);
console.log(`📊 距离3000目标还差: ${3000 - countAll(db)} 个`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 第七轮扩充完成！冲击2300+！🚀');
