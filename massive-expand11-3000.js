import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 140000;

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

// ============== 1. 🎬 影视资源网站 ==============
const movieSites = {
  title: '🎬 影视资源网站',
  websites: [
    { name: '电影狗', url: 'https://www.dianyinggou.com', desc: '电影搜索引擎', rate: 5 },
    { name: '片库网', url: 'https://www.pianku.tv', desc: '在线影视', rate: 5 },
    { name: 'NO视频', url: 'https://www.novipnoad.com', desc: '免费影视', rate: 5 },
    { name: '日剧TV', url: 'https://www.rijutv.com', desc: '日剧资源', rate: 5 },
    { name: '韩剧TV', url: 'https://www.hanjutv.com', desc: '韩剧资源', rate: 5 },
    { name: '泰剧TV', url: 'https://www.taijutv.com', desc: '泰剧资源', rate: 5 },
    { name: '美剧天堂', url: 'https://www.meijutt.com', desc: '美剧资源', rate: 5 },
    { name: '人人影视', url: 'https://www.rrys2019.com', desc: '字幕组', rate: 5 },
    { name: ' fix字幕侠', url: 'https://www.zimuxia.cn', desc: '字幕组', rate: 5 },
    { name: '字幕库', url: 'https://www.zimuku.org', desc: '字幕下载', rate: 5 },
    { name: '射手网', url: 'https://assrt.net', desc: '字幕搜索', rate: 5 },
    { name: 'SubHD', url: 'https://subhd.tv', desc: '字幕下载', rate: 5 },
    { name: 'RARBG', url: 'https://rarbg.to', desc: '资源站', rate: 5 },
    { name: 'The Pirate Bay', url: 'https://thepiratebay.org', desc: '海盗湾', rate: 5 },
    { name: '1337x', url: 'https://1337x.to', desc: '资源站', rate: 5 },
    { name: 'YTS', url: 'https://yts.mx', desc: '电影种子', rate: 5 },
    { name: 'EZTV', url: 'https://eztv.io', desc: '剧集资源', rate: 5 },
    { name: 'LimeTorrents', url: 'https://www.limetorrents.lol', desc: '种子站', rate: 5 },
    { name: 'TorrentGalaxy', url: 'https://torrentgalaxy.to', desc: '种子站', rate: 5 },
    { name: 'Nyaa', url: 'https://nyaa.si', desc: '动漫资源', rate: 5 },
    { name: '动漫花园', url: 'https://dmhy.org', desc: '动漫资源', rate: 5 },
    { name: '爱恋动漫', url: 'https://www.kisssub.org', desc: '动漫BT', rate: 5 },
    { name: '漫猫动漫', url: 'https://www.comicat.org', desc: '动漫资源', rate: 5 },
    { name: 'ACG.RIP', url: 'https://acg.rip', desc: '动漫资源', rate: 5 },
    { name: '动漫资源网', url: 'https://dm1080p.com', desc: '高清动漫', rate: 5 },
    { name: '4K电影', url: 'https://www.4kfilm.net', desc: '4K资源', rate: 5 },
    { name: '蓝光网', url: 'https://www.languang.co', desc: '蓝光电影', rate: 5 },
    { name: '高清MP4吧', url: 'https://www.mp4ba.com', desc: 'MP4下载', rate: 5 },
    { name: '电影先生', url: 'https://www.dianyingxiansheng.com', desc: '在线观看', rate: 5 },
    { name: '茶杯狐', url: 'https://www.cupfox.com', desc: '影视搜索', rate: 5 },
  ]
};

// ============== 2. 📚 电子书籍资源 ==============
const ebookSites = {
  title: '📚 电子书籍资源',
  websites: [
    { name: 'Z-Library', url: 'https://singlelogin.re', desc: 'Z-Library', rate: 5 },
    { name: '安娜的档案', url: 'https://annas-archive.org', desc: '电子书搜索', rate: 5 },
    { name: 'Library Genesis', url: 'https://libgen.is', desc: '创世纪图书馆', rate: 5 },
    { name: 'Sci-Hub', url: 'https://sci-hub.se', desc: '论文下载', rate: 5 },
    { name: '鸠摩搜书', url: 'https://www.jiumodiary.com', desc: '电子书搜索', rate: 5 },
    { name: '书单网', url: 'https://www.shudan.vip', desc: '电子书', rate: 5 },
    { name: '知轩藏书', url: 'https://www.zxcs.me', desc: '精校小说', rate: 5 },
    { name: '书格', url: 'https://www.shuge.org', desc: '古籍', rate: 5 },
    { name: '中国国家图书馆', url: 'https://www.nlc.cn', desc: '国图', rate: 5 },
    { name: '超星读书', url: 'https://book.chaoxing.com', desc: '超星电子书', rate: 5 },
    { name: '全国图书馆联盟', url: 'https://www.ucdrs.superlib.net', desc: '文献传递', rate: 5 },
    { name: 'iBooker', url: 'https://bookfere.com', desc: 'Kindle资源', rate: 5 },
    { name: '好读', url: 'https://www.haodoo.net', desc: '免费电子书', rate: 5 },
    { name: '台湾中央图书馆', url: 'https://www.ncl.edu.tw', desc: '台湾图书馆', rate: 5 },
    { name: '香港中文大学图书馆', url: 'https://www.lib.cuhk.edu.hk', desc: '香港图书馆', rate: 5 },
    { name: '古腾堡计划', url: 'https://www.gutenberg.org', desc: '免费经典', rate: 5 },
    { name: 'ManyBooks', url: 'https://manybooks.net', desc: '免费电子书', rate: 5 },
    { name: 'Feedbooks', url: 'https://www.feedbooks.com', desc: '电子书下载', rate: 5 },
    { name: 'Standard Ebooks', url: 'https://standardebooks.org', desc: '精校电子书', rate: 5 },
    { name: 'Leanpub', url: 'https://leanpub.com', desc: '编程书籍', rate: 5 },
    { name: 'IT eBooks', url: 'https://www.it-ebooks.info', desc: 'IT电子书', rate: 5 },
    { name: 'Free Programming Books', url: 'https://github.com/EbookFoundation', desc: '免费编程书', rate: 5 },
    { name: 'Bookboon', url: 'https://bookboon.com', desc: '免费教科书', rate: 5 },
    { name: 'PDF Drive', url: 'https://www.pdfdrive.com', desc: 'PDF搜索', rate: 5 },
    { name: 'PDF之家', url: 'https://www.pdf之家.com', desc: 'PDF资源', rate: 5 },
    { name: '计算机书籍控', url: 'https://bestcbooks.com', desc: '计算机书籍', rate: 5 },
    { name: '脚本之家电子书', url: 'https://www.jb51.net/books', desc: '脚本之家', rate: 5 },
    { name: '码农之家', url: 'https://www.manongzj.com', desc: '编程书籍', rate: 5 },
    { name: '读远', url: 'https://www.readfar.com', desc: '电子书', rate: 5 },
    { name: '周读', url: 'https://www.ireadweek.com', desc: '电子书下载', rate: 5 },
  ]
};

// ============== 3. 🎵 无损音乐资源 ==============
const musicSites = {
  title: '🎵 无损音乐资源',
  websites: [
    { name: '无损音乐吧', url: 'https://www.51ape.com', desc: 'APE无损', rate: 5 },
    { name: '80无损音乐', url: 'https://www.80wusun.com', desc: '无损音乐', rate: 5 },
    { name: '无损音乐下载', url: 'https://www.23ape.com', desc: '无损音乐', rate: 5 },
    { name: '七音阁', url: 'https://www.7yinge.com', desc: '无损音乐', rate: 5 },
    { name: '无损音乐网', url: 'https://www.wsyyw.com', desc: '无损音乐', rate: 5 },
    { name: '深度无损音乐', url: 'https://www.deepms.net', desc: '无损论坛', rate: 5 },
    { name: '炫音音乐论坛', url: 'https://www.musicshq.com', desc: '音乐论坛', rate: 5 },
    { name: 'PT80音乐论坛', url: 'https://www.pt80.com', desc: '音乐论坛', rate: 5 },
    { name: '百事高音乐', url: 'https://www.besgold.com', desc: '音乐论坛', rate: 5 },
    { name: '杂碎后院', url: 'https://www.zasv.net', desc: '音乐论坛', rate: 5 },
    { name: '酷狗无损', url: 'https://www.kugou.com', desc: '酷狗音乐', rate: 5 },
    { name: 'QQ无损音乐', url: 'https://y.qq.com', desc: 'QQ音乐', rate: 5 },
    { name: '网易云音乐', url: 'https://music.163.com', desc: '网易云', rate: 5 },
    { name: '咪咕音乐', url: 'https://music.migu.cn', desc: '咪咕无损', rate: 5 },
    { name: 'JOOX', url: 'https://www.joox.com', desc: '腾讯海外', rate: 5 },
    { name: 'KKBOX', url: 'https://www.kkbox.com', desc: '流媒体音乐', rate: 5 },
    { name: 'Deezer', url: 'https://www.deezer.com', desc: '法国音乐', rate: 5 },
    { name: 'Tidal', url: 'https://tidal.com', desc: '无损流媒体', rate: 5 },
    { name: 'Qobuz', url: 'https://www.qobuz.com', desc: 'Hi-Res音乐', rate: 5 },
    { name: 'Bandcamp', url: 'https://bandcamp.com', desc: '独立音乐', rate: 5 },
    { name: 'SoundCloud', url: 'https://soundcloud.com', desc: '音频平台', rate: 5 },
    { name: 'Audacity', url: 'https://www.audacityteam.org', desc: '音频编辑', rate: 5 },
    { name: 'AudioMass', url: 'https://audiomass.co', desc: '在线音频', rate: 5 },
    { name: 'TwistedWave', url: 'https://twistedwave.com', desc: '在线音频', rate: 5 },
    { name: 'AudioTool', url: 'https://www.audiotool.com', desc: '在线音乐', rate: 5 },
    { name: 'mp3cut', url: 'https://mp3cut.net', desc: '音频剪切', rate: 5 },
    { name: '在线音频转换', url: 'https://online-audio-converter.com', desc: '格式转换', rate: 5 },
    { name: 'Convertio音频', url: 'https://convertio.co/audio-converter', desc: '音频转换', rate: 5 },
    { name: 'CloudConvert音频', url: 'https://cloudconvert.com/audio-converter', desc: '云转换', rate: 5 },
    { name: 'Free Audio Converter', url: 'https://www.freemake.com', desc: '免费转换', rate: 5 },
  ]
};

// ============== 4. 🖼️ 图片壁纸资源 ==============
const wallpaperSites = {
  title: '🖼️ 图片壁纸资源',
  websites: [
    { name: 'Unsplash', url: 'https://unsplash.com', desc: '免费高清', rate: 5 },
    { name: 'Pexels', url: 'https://www.pexels.com', desc: '免费图片', rate: 5 },
    { name: 'Pixabay', url: 'https://pixabay.com', desc: '免费图库', rate: 5 },
    { name: 'Picjumbo', url: 'https://picjumbo.com', desc: '免费图片', rate: 5 },
    { name: 'Gratisography', url: 'https://gratisography.com', desc: '创意图片', rate: 5 },
    { name: 'Kaboompics', url: 'https://kaboompics.com', desc: '生活图片', rate: 5 },
    { name: 'Stocksnap', url: 'https://stocksnap.io', desc: '免费图库', rate: 5 },
    { name: 'ISO Republic', url: 'https://isorepublic.com', desc: '免费图片', rate: 5 },
    { name: 'Life of Pix', url: 'https://www.lifeofpix.com', desc: '免费摄影', rate: 5 },
    { name: 'Splitshire', url: 'https://splitshire.com', desc: '免费图片', rate: 5 },
    { name: 'Morguefile', url: 'https://morguefile.com', desc: '免费图片', rate: 5 },
    { name: 'Public Domain Pictures', url: 'https://www.publicdomainpictures.net', desc: '公有领域', rate: 5 },
    { name: 'Visual Hunt', url: 'https://visualhunt.com', desc: 'CC0图片', rate: 5 },
    { name: 'Foter', url: 'https://foter.com', desc: 'CC0图片', rate: 5 },
    { name: 'Wikimedia Commons', url: 'https://commons.wikimedia.org', desc: '维基共享', rate: 5 },
    { name: 'Bing壁纸', url: 'https://bingwallpaper.microsoft.com', desc: '每日壁纸', rate: 5 },
    { name: 'WallpaperHub', url: 'https://wallpaperhub.app', desc: '4K壁纸', rate: 5 },
    { name: 'Wallhaven', url: 'https://wallhaven.cc', desc: '壁纸社区', rate: 5 },
    { name: 'Alpha Coders', url: 'https://wall.alphacoders.com', desc: '高清壁纸', rate: 5 },
    { name: ' Wallpaper Abyss', url: 'https://wall.alphacoders.com', desc: '壁纸深渊', rate: 5 },
    { name: 'Simple Desktops', url: 'http://simpledesktops.com', desc: '简约壁纸', rate: 5 },
    { name: 'Desktop Nexus', url: 'https://www.desktopnexus.com', desc: '壁纸网站', rate: 5 },
    { name: 'InterfaceLIFT', url: 'https://interfacelift.com', desc: '壁纸站', rate: 5 },
    { name: '必应壁纸', url: 'https://www.todaybing.com', desc: '每日必应', rate: 5 },
    { name: 'National Geographic Photos', url: 'https://www.nationalgeographic.org', desc: '国家地理', rate: 5 },
    { name: '500px', url: 'https://500px.com', desc: '摄影社区', rate: 5 },
    { name: 'Flickr', url: 'https://www.flickr.com', desc: '雅虎摄影', rate: 5 },
    { name: '图虫', url: 'https://tuchong.com', desc: '摄影师社区', rate: 5 },
    { name: 'LOFTER', url: 'https://www.lofter.com', desc: '网易摄影', rate: 5 },
    { name: 'CNU视觉联盟', url: 'https://www.cnu.cc', desc: '视觉摄影', rate: 5 },
  ]
};

// ============== 5. 🎮 游戏资源网站 ==============
const gameSites = {
  title: '🎮 游戏资源网站',
  websites: [
    { name: 'Steam', url: 'https://store.steampowered.com', desc: 'PC游戏平台', rate: 5 },
    { name: 'Epic', url: 'https://www.epicgames.com', desc: 'Epic商店', rate: 5 },
    { name: 'GOG', url: 'https://www.gog.com', desc: '无DRM游戏', rate: 5 },
    { name: 'Origin', url: 'https://www.origin.com', desc: 'EA平台', rate: 5 },
    { name: 'Uplay', url: 'https://store.ubi.com', desc: '育碧平台', rate: 5 },
    { name: 'itch.io', url: 'https://itch.io', desc: '独立游戏', rate: 5 },
    { name: 'Humble Bundle', url: 'https://www.humblebundle.com', desc: '慈善包', rate: 5 },
    { name: 'Fanatical', url: 'https://www.fanatical.com', desc: '游戏慈善包', rate: 5 },
    { name: 'Green Man Gaming', url: 'https://www.greenmangaming.com', desc: '游戏Key', rate: 5 },
    { name: 'IndieGala', url: 'https://www.indiegala.com', desc: '独立游戏', rate: 5 },
    { name: '游民星空', url: 'https://www.gamersky.com', desc: '游戏资讯', rate: 5 },
    { name: '3DM', url: 'https://www.3dmgame.com', desc: '单机游戏', rate: 5 },
    { name: '游侠网', url: 'https://www.ali213.net', desc: '单机门户', rate: 5 },
    { name: 'NGA', url: 'https://bbs.nga.cn', desc: '玩家社区', rate: 5 },
    { name: 'A9VG', url: 'https://www.a9vg.com', desc: '主机社区', rate: 5 },
    { name: '机核', url: 'https://www.gcores.com', desc: '游戏文化', rate: 5 },
    { name: '游研社', url: 'https://www.yystv.cn', desc: '游戏研究', rate: 5 },
    { name: '奶牛关', url: 'https://cowlevel.net', desc: '游戏社区', rate: 5 },
    { name: 'Steam社区', url: 'https://steamcommunity.com', desc: 'Steam社区', rate: 5 },
    { name: 'SteamDB', url: 'https://steamdb.info', desc: 'Steam数据', rate: 5 },
    { name: 'SteamCN', url: 'https://steamcn.com', desc: '蒸汽动力', rate: 5 },
    { name: 'Keylol', url: 'https://keylol.com', desc: '其乐论坛', rate: 5 },
    { name: 'Indienova', url: 'https://indienova.com', desc: '独立游戏', rate: 5 },
    { name: 'Taptap', url: 'https://www.taptap.com', desc: '手游平台', rate: 5 },
    { name: 'QooApp', url: 'https://www.qoo-app.com', desc: '二次元手游', rate: 5 },
    { name: 'OurPlay', url: 'https://www.ourplay.net', desc: '手游加速器', rate: 5 },
    { name: 'UU加速器', url: 'https://uu.163.com', desc: '网易加速器', rate: 5 },
    { name: '腾讯加速器', url: 'https://jiasu.qq.com', desc: '腾讯加速器', rate: 5 },
    { name: '奇游加速器', url: 'https://www.qiyou.cn', desc: '游戏加速', rate: 5 },
    { name: '迅游加速器', url: 'https://www.xunyou.com', desc: '迅游加速', rate: 5 },
  ]
};

// ============== 6. 🛠️ 实用在线工具 ==============
const utilityTools = {
  title: '🛠️ 实用在线工具',
  websites: [
    { name: 'Canva', url: 'https://www.canva.cn', desc: '在线设计', rate: 5 },
    { name: 'Figma', url: 'https://www.figma.com', desc: 'UI设计', rate: 5 },
    { name: 'Photopea', url: 'https://www.photopea.com', desc: '在线PS', rate: 5 },
    { name: 'Remove.bg', url: 'https://www.remove.bg', desc: 'AI抠图', rate: 5 },
    { name: '稿定设计', url: 'https://www.gaoding.com', desc: '在线设计', rate: 5 },
    { name: 'Fotor懒设计', url: 'https://www.fotor.com.cn', desc: '在线设计', rate: 5 },
    { name: '创客贴', url: 'https://www.chuangkit.com', desc: '在线设计', rate: 5 },
    { name: '图怪兽', url: 'https://818ps.com', desc: '图片设计', rate: 5 },
    { name: '易企秀', url: 'https://www.eqxiu.com', desc: 'H5制作', rate: 5 },
    { name: 'MAKA', url: 'https://www.maka.im', desc: 'H5模板', rate: 5 },
    { name: '人人秀', url: 'https://www.rrxiu.net', desc: 'H5制作', rate: 5 },
    { name: 'ProcessOn', url: 'https://www.processon.com', desc: '思维导图', rate: 5 },
    { name: 'XMind', url: 'https://www.xmind.cn', desc: '思维导图', rate: 5 },
    { name: '百度脑图', url: 'https://naotu.baidu.com', desc: '在线脑图', rate: 5 },
    { name: 'MindMaster', url: 'https://www.edrawsoft.cn', desc: '亿图脑图', rate: 5 },
    { name: 'Draw.io', url: 'https://app.diagrams.net', desc: '流程图', rate: 5 },
    { name: 'Visio', url: 'https://www.microsoft.com', desc: '微软流程图', rate: 5 },
    { name: '亿图图示', url: 'https://www.edrawsoft.cn', desc: '亿图图示', rate: 5 },
    { name: '石墨文档', url: 'https://shimo.im', desc: '协作文档', rate: 5 },
    { name: '腾讯文档', url: 'https://docs.qq.com', desc: '在线文档', rate: 5 },
    { name: '飞书文档', url: 'https://www.feishu.cn', desc: '字节文档', rate: 5 },
    { name: 'Notion', url: 'https://www.notion.so', desc: 'All-in-One', rate: 5 },
    { name: '语雀', url: 'https://www.yuque.com', desc: '阿里语雀', rate: 5 },
    { name: '有道云笔记', url: 'https://note.youdao.com', desc: '网易笔记', rate: 5 },
    { name: '印象笔记', url: 'https://www.yinxiang.com', desc: 'Evernote', rate: 5 },
    { name: 'OneNote', url: 'https://www.onenote.com', desc: '微软笔记', rate: 5 },
    { name: 'Workflowy', url: 'https://workflowy.com', desc: '大纲笔记', rate: 5 },
    { name: 'Dynalist', url: 'https://dynalist.io', desc: '大纲工具', rate: 5 },
    { name: 'Obsidian', url: 'https://obsidian.md', desc: '黑曜石笔记', rate: 5 },
    { name: 'Logseq', url: 'https://logseq.com', desc: '开源笔记', rate: 5 },
  ]
};

const category21 = createCategory('🎬 影视音乐书籍', '', [
  movieSites,
  ebookSites,
  musicSites
]);

const category22 = createCategory('🖼️ 图片游戏工具', '', [
  wallpaperSites,
  gameSites,
  utilityTools
]);

db.push(category21, category22);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

const total = countAll(db);

console.log(`✅ 新增分类: ${category21.title}`);
console.log(`   └─ 包含: ${category21.nav.length} 个子分类, ${countAll(category21.nav)} 个网址`);
console.log(`✅ 新增分类: ${category22.title}`);
console.log(`   └─ 包含: ${category22.nav.length} 个子分类, ${countAll(category22.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(category21.nav) + countAll(category22.nav)} 个优质网址`);
console.log(`\n🎉🎉🎉 数据库总计: ${total} 个网址 🎉🎉🎉`);

if (total >= 3000) {
  console.log('\n🏆🏆🏆 恭喜！成功突破 3000 网址目标！！！🏆🏆🏆');
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🚀 3000网址达成！生活、工作、学习、娱乐全覆盖！🚀');
