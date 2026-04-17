import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 90000;

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

// ============== 1. 🛒 电商购物平台 ==============
const onlineShopping = {
  title: '🛒 电商购物平台',
  websites: [
    { name: '淘宝', url: 'https://www.taobao.com', desc: '阿里巴巴购物平台', rate: 5 },
    { name: '天猫', url: 'https://www.tmall.com', desc: 'B2C购物平台', rate: 5 },
    { name: '京东', url: 'https://www.jd.com', desc: '京东购物平台', rate: 5 },
    { name: '拼多多', url: 'https://www.pinduoduo.com', desc: '社交电商平台', rate: 5 },
    { name: '苏宁易购', url: 'https://www.suning.com', desc: '苏宁购物', rate: 5 },
    { name: '国美', url: 'https://www.gome.com.cn', desc: '国美电器', rate: 5 },
    { name: '唯品会', url: 'https://www.vip.com', desc: '品牌特卖', rate: 5 },
    { name: '当当', url: 'https://www.dangdang.com', desc: '图书购物', rate: 5 },
    { name: '亚马逊中国', url: 'https://www.amazon.cn', desc: '亚马逊购物', rate: 5 },
    { name: '考拉海购', url: 'https://www.kaola.com', desc: '网易考拉', rate: 5 },
    { name: '小米商城', url: 'https://www.mi.com', desc: '小米产品', rate: 5 },
    { name: '华为商城', url: 'https://www.vmall.com', desc: '华为产品', rate: 5 },
    { name: '网易严选', url: 'https://you.163.com', desc: '网易品质电商', rate: 5 },
    { name: '小米有品', url: 'https://www.xiaomiyoupin.com', desc: '小米精品', rate: 5 },
    { name: '京东京造', url: 'https://z.jd.com', desc: '京东自有品牌', rate: 5 },
    { name: '淘宝心选', url: 'https://tmall.com', desc: '淘宝自有品牌', rate: 5 },
    { name: '云集', url: 'https://www.yunji.com', desc: '会员电商', rate: 5 },
    { name: '微店', url: 'https://www.weidian.com', desc: '微商平台', rate: 5 },
    { name: '闲鱼', url: 'https://2.taobao.com', desc: '二手交易', rate: 5 },
    { name: '转转', url: 'https://www.zhuanzhuan.com', desc: '二手平台', rate: 5 },
    { name: '什么值得买', url: 'https://www.smzdm.com', desc: '优惠推荐', rate: 5 },
    { name: '慢慢买', url: 'https://www.manmanbuy.com', desc: '比价网', rate: 5 },
    { name: '惠惠网', url: 'https://www.huihui.cn', desc: '网易惠惠', rate: 5 },
    { name: '折800', url: 'https://www.zhe800.com', desc: '折扣网站', rate: 5 },
    { name: '卷皮网', url: 'https://www.juanpi.com', desc: '特价商品', rate: 5 },
  ]
};

// ============== 2. 📰 新闻资讯媒体 ==============
const newsMedia = {
  title: '📰 新闻资讯媒体',
  websites: [
    { name: '新浪新闻', url: 'https://news.sina.com.cn', desc: '新浪门户', rate: 5 },
    { name: '腾讯新闻', url: 'https://news.qq.com', desc: '腾讯门户', rate: 5 },
    { name: '网易新闻', url: 'https://news.163.com', desc: '网易门户', rate: 5 },
    { name: '搜狐新闻', url: 'https://news.sohu.com', desc: '搜狐门户', rate: 5 },
    { name: '凤凰网', url: 'https://www.ifeng.com', desc: '凤凰资讯', rate: 5 },
    { name: '今日头条', url: 'https://www.toutiao.com', desc: '字节跳动', rate: 5 },
    { name: '百度新闻', url: 'https://news.baidu.com', desc: '百度新闻', rate: 5 },
    { name: '新华网', url: 'http://www.xinhuanet.com', desc: '国家通讯社', rate: 5 },
    { name: '人民网', url: 'http://www.people.com.cn', desc: '人民日报', rate: 5 },
    { name: '央视网', url: 'https://www.cctv.com', desc: '中央电视台', rate: 5 },
    { name: '澎湃新闻', url: 'https://www.thepaper.cn', desc: '澎湃新闻', rate: 5 },
    { name: '界面新闻', url: 'https://www.jiemian.com', desc: '界面新闻', rate: 5 },
    { name: '财新网', url: 'https://www.caixin.com', desc: '财经新闻', rate: 5 },
    { name: '第一财经', url: 'https://www.yicai.com', desc: '财经媒体', rate: 5 },
    { name: '21世纪经济报道', url: 'https://www.21jingji.com', desc: '财经日报', rate: 5 },
    { name: '华尔街见闻', url: 'https://wallstreetcn.com', desc: '金融资讯', rate: 5 },
    { name: '虎嗅网', url: 'https://www.huxiu.com', desc: '商业科技', rate: 5 },
    { name: '36氪', url: 'https://36kr.com', desc: '创业科技', rate: 5 },
    { name: '钛媒体', url: 'https://www.tmtpost.com', desc: '科技媒体', rate: 5 },
    { name: '亿欧', url: 'https://www.iyiou.com', desc: '产业创新', rate: 5 },
    { name: '雷锋网', url: 'https://www.leiphone.com', desc: '科技媒体', rate: 5 },
    { name: '爱范儿', url: 'https://www.ifanr.com', desc: '科技媒体', rate: 5 },
    { name: '好奇心日报', url: 'https://www.qdaily.com', desc: '生活方式', rate: 5 },
    { name: '果壳网', url: 'https://www.guokr.com', desc: '科学科普', rate: 5 },
    { name: '知乎日报', url: 'https://daily.zhihu.com', desc: '知乎精选', rate: 5 },
  ]
};

// ============== 3. 📧 邮箱与通讯 ==============
const emailComm = {
  title: '📧 邮箱与通讯',
  websites: [
    { name: 'QQ邮箱', url: 'https://mail.qq.com', desc: '腾讯邮箱', rate: 5 },
    { name: '网易邮箱', url: 'https://mail.163.com', desc: '网易163邮箱', rate: 5 },
    { name: '126邮箱', url: 'https://mail.126.com', desc: '网易126邮箱', rate: 5 },
    { name: '139邮箱', url: 'https://mail.139.com', desc: '移动邮箱', rate: 5 },
    { name: '搜狐邮箱', url: 'https://mail.sohu.com', desc: '搜狐邮箱', rate: 5 },
    { name: '新浪邮箱', url: 'https://mail.sina.com.cn', desc: '新浪邮箱', rate: 5 },
    { name: '阿里云邮箱', url: 'https://mail.aliyun.com', desc: '阿里邮箱', rate: 5 },
    { name: 'Hotmail', url: 'https://outlook.live.com', desc: '微软邮箱', rate: 5 },
    { name: 'Gmail', url: 'https://mail.google.com', desc: '谷歌邮箱', rate: 5 },
    { name: 'ProtonMail', url: 'https://protonmail.com', desc: '加密邮箱', rate: 5 },
    { name: 'Foxmail', url: 'https://www.foxmail.com', desc: 'Foxmail邮箱', rate: 5 },
    { name: '微信网页版', url: 'https://wx.qq.com', desc: '微信网页版', rate: 5 },
    { name: 'QQ网页版', url: 'https://web.qq.com', desc: 'QQ网页版', rate: 5 },
    { name: '钉钉', url: 'https://www.dingtalk.com', desc: '阿里钉钉', rate: 5 },
    { name: '企业微信', url: 'https://work.weixin.qq.com', desc: '企业微信', rate: 5 },
    { name: '飞书', url: 'https://www.feishu.cn', desc: '字节飞书', rate: 5 },
    { name: 'Slack', url: 'https://slack.com', desc: '团队协作', rate: 5 },
    { name: 'Zoom', url: 'https://zoom.us', desc: '视频会议', rate: 5 },
    { name: '腾讯会议', url: 'https://meeting.tencent.com', desc: '腾讯会议', rate: 5 },
    { name: '小鱼易连', url: 'https://www.xylink.com', desc: '云视频会议', rate: 5 },
    { name: '网易邮箱大师', url: 'https://mail.163.com', desc: '邮箱大师', rate: 5 },
    { name: '迅雷', url: 'https://www.xunlei.com', desc: '下载工具', rate: 5 },
    { name: 'IDM', url: 'https://www.internetdownloadmanager.com', desc: '下载神器', rate: 5 },
    { name: 'Motrix', url: 'https://motrix.app', desc: '开源下载器', rate: 5 },
    { name: 'Free Download Manager', url: 'https://www.freedownloadmanager.org', desc: '免费下载', rate: 5 },
  ]
};

// ============== 4. 🎮 游戏娱乐平台 ==============
const gamePlatforms = {
  title: '🎮 游戏娱乐平台',
  websites: [
    { name: 'Steam', url: 'https://store.steampowered.com', desc: 'PC游戏平台', rate: 5 },
    { name: 'Epic Games', url: 'https://www.epicgames.com', desc: 'Epic商店', rate: 5 },
    { name: '育碧商城', url: 'https://store.ubi.com', desc: 'Ubisoft商店', rate: 5 },
    { name: 'Origin', url: 'https://www.origin.com', desc: 'EA平台', rate: 5 },
    { name: 'Battle.net', url: 'https://www.blizzard.com', desc: '暴雪战网', rate: 5 },
    { name: 'GOG', url: 'https://www.gog.com', desc: 'CDPR平台', rate: 5 },
    { name: 'WeGame', url: 'https://www.wegame.com.cn', desc: '腾讯游戏平台', rate: 5 },
    { name: '腾讯游戏', url: 'https://game.qq.com', desc: '腾讯游戏', rate: 5 },
    { name: '网易游戏', url: 'https://game.163.com', desc: '网易游戏', rate: 5 },
    { name: '完美世界', url: 'https://www.wanmei.com', desc: '完美世界游戏', rate: 5 },
    { name: '米哈游', url: 'https://www.mihoyo.com', desc: '米哈游', rate: 5 },
    { name: 'TapTap', url: 'https://www.taptap.com', desc: '手游平台', rate: 5 },
    { name: '游民星空', url: 'https://www.gamersky.com', desc: '游戏资讯', rate: 5 },
    { name: '3DM', url: 'https://www.3dmgame.com', desc: '单机游戏', rate: 5 },
    { name: '游侠网', url: 'https://www.ali213.net', desc: '游侠资讯', rate: 5 },
    { name: 'NGA', url: 'https://bbs.nga.cn', desc: '玩家社区', rate: 5 },
    { name: 'A9VG', url: 'https://www.a9vg.com', desc: '电玩社区', rate: 5 },
    { name: '机核网', url: 'https://www.gcores.com', desc: '游戏文化', rate: 5 },
    { name: 'Indienova', url: 'https://indienova.com', desc: '独立游戏', rate: 5 },
    { name: '二柄', url: 'https://www.dianbing.tv', desc: '主机游戏', rate: 5 },
    { name: '小鸡模拟器', url: 'https://www.xiaoji001.com', desc: '模拟器平台', rate: 5 },
    { name: '悟饭游戏厅', url: 'https://www.9game.cn', desc: '游戏平台', rate: 5 },
    { name: '4399小游戏', url: 'https://www.4399.com', desc: '小游戏平台', rate: 5 },
    { name: '7K7K', url: 'https://www.7k7k.com', desc: '小游戏', rate: 5 },
    { name: '斗鱼', url: 'https://www.douyu.com', desc: '游戏直播', rate: 5 },
    { name: '虎牙直播', url: 'https://www.huya.com', desc: '游戏直播', rate: 5 },
    { name: 'B站直播', url: 'https://live.bilibili.com', desc: 'B站直播', rate: 5 },
    { name: '企鹅电竞', url: 'https://egame.qq.com', desc: '企鹅直播', rate: 5 },
  ]
};

// ============== 5. 🎵 音乐广播电台 ==============
const musicRadio = {
  title: '🎵 音乐广播电台',
  websites: [
    { name: '网易云音乐', url: 'https://music.163.com', desc: '网易云音乐', rate: 5 },
    { name: 'QQ音乐', url: 'https://y.qq.com', desc: '腾讯QQ音乐', rate: 5 },
    { name: '酷狗音乐', url: 'https://www.kugou.com', desc: '酷狗音乐', rate: 5 },
    { name: '酷我音乐', url: 'https://www.kuwo.cn', desc: '酷我音乐', rate: 5 },
    { name: '虾米音乐', url: 'https://www.xiami.com', desc: '虾米音乐', rate: 5 },
    { name: '咪咕音乐', url: 'https://music.migu.cn', desc: '移动咪咕', rate: 5 },
    { name: '千千音乐', url: 'https://music.taihe.com', desc: '千千静听', rate: 5 },
    { name: 'Spotify', url: 'https://open.spotify.com', desc: '全球音乐', rate: 5 },
    { name: 'Apple Music', url: 'https://music.apple.com', desc: '苹果音乐', rate: 5 },
    { name: 'SoundCloud', url: 'https://soundcloud.com', desc: '音频平台', rate: 5 },
    { name: 'Last.fm', url: 'https://www.last.fm', desc: '音乐社交', rate: 5 },
    { name: '豆瓣音乐', url: 'https://music.douban.com', desc: '豆瓣音乐', rate: 5 },
    { name: '喜马拉雅', url: 'https://www.ximalaya.com', desc: '音频平台', rate: 5 },
    { name: '荔枝FM', url: 'https://www.lizhi.fm', desc: '播客平台', rate: 5 },
    { name: '蜻蜓FM', url: 'https://www.qingting.fm', desc: '广播电台', rate: 5 },
    { name: '企鹅FM', url: 'https://fm.qq.com', desc: '企鹅电台', rate: 5 },
    { name: '考拉FM', url: 'https://www.kaolafm.com', desc: '音频平台', rate: 5 },
    { name: '懒人听书', url: 'https://www.lrts.me', desc: '有声小说', rate: 5 },
    { name: '得到', url: 'https://www.dedao.cn', desc: '知识付费', rate: 5 },
    { name: '樊登读书', url: 'https://www.dushu365.com', desc: '读书平台', rate: 5 },
  ]
};

// ============== 6. 📖 小说文学阅读 ==============
const bookReading = {
  title: '📖 小说文学阅读',
  websites: [
    { name: '起点中文网', url: 'https://www.qidian.com', desc: '起点读书', rate: 5 },
    { name: '创世中文网', url: 'https://chuangshi.qq.com', desc: '腾讯文学', rate: 5 },
    { name: '纵横中文网', url: 'https://www.zongheng.com', desc: '纵横文学', rate: 5 },
    { name: '17K小说网', url: 'https://www.17k.com', desc: '中文在线', rate: 5 },
    { name: '晋江文学城', url: 'https://www.jjwxc.net', desc: '女生文学', rate: 5 },
    { name: '红袖添香', url: 'https://www.hongxiu.com', desc: '言情小说', rate: 5 },
    { name: '潇湘书院', url: 'https://www.xxsy.net', desc: '女生小说', rate: 5 },
    { name: '小说阅读网', url: 'https://www.readnovel.com', desc: '小说平台', rate: 5 },
    { name: '掌阅', url: 'https://www.ireader.com', desc: '掌阅小说', rate: 5 },
    { name: '微信读书', url: 'https://weread.qq.com', desc: '微信读书', rate: 5 },
    { name: '书旗小说', url: 'https://www.shuqi.com', desc: '阿里文学', rate: 5 },
    { name: '咪咕阅读', url: 'https://www.cmread.com', desc: '移动阅读', rate: 5 },
    { name: '网易云阅读', url: 'https://yuedu.163.com', desc: '网易阅读', rate: 5 },
    { name: '番茄小说', url: 'https://fanqienovel.com', desc: '字节小说', rate: 5 },
    { name: '七猫免费小说', url: 'https://www.qimao.com', desc: '七猫小说', rate: 5 },
    { name: '连尚读书', url: 'https://www.lianshang.com', desc: '连尚阅读', rate: 5 },
    { name: '豆瓣阅读', url: 'https://read.douban.com', desc: '豆瓣读书', rate: 5 },
    { name: '知乎书店', url: 'https://www.zhihu.com/publications', desc: '知乎出版', rate: 5 },
    { name: 'Kindle', url: 'https://www.amazon.cn/kindle', desc: '亚马逊阅读', rate: 5 },
    { name: '多看阅读', url: 'https://www.duokan.com', desc: '多看平台', rate: 5 },
  ]
};

const category8 = createCategory('🛒 电商购物与新闻', '', [
  onlineShopping,
  newsMedia
]);

const category9 = createCategory('📧 邮箱通讯与游戏', '', [
  emailComm,
  gamePlatforms
]);

const category10 = createCategory('🎵 音乐阅读与广播', '', [
  musicRadio,
  bookReading
]);

db.push(category8, category9, category10);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`✅ 新增分类: ${category8.title}`);
console.log(`   └─ 包含: ${category8.nav.length} 个子分类, ${countAll(category8.nav)} 个网址`);
console.log(`✅ 新增分类: ${category9.title}`);
console.log(`   └─ 包含: ${category9.nav.length} 个子分类, ${countAll(category9.nav)} 个网址`);
console.log(`✅ 新增分类: ${category10.title}`);
console.log(`   └─ 包含: ${category10.nav.length} 个子分类, ${countAll(category10.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(category8.nav) + countAll(category9.nav) + countAll(category10.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);
console.log(`📊 距离3000目标还差: ${3000 - countAll(db)} 个`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 第六轮扩充完成！突破2000+！🚀');
