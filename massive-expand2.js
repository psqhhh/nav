import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 40000;

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

// ============== 1. 🎬 影视娱乐 ==============
const videoEntertainment = {
  title: '🎬 影视追剧',
  websites: [
    { name: '腾讯视频', url: 'https://v.qq.com', desc: '腾讯正版视频平台', rate: 5 },
    { name: '爱奇艺', url: 'https://www.iqiyi.com', desc: '爱奇艺视频平台', rate: 5 },
    { name: '优酷', url: 'https://youku.com', desc: '阿里优酷视频', rate: 5 },
    { name: '芒果TV', url: 'https://www.mgtv.com', desc: '湖南卫视官方', rate: 5 },
    { name: '哔哩哔哩', url: 'https://www.bilibili.com', desc: 'B站弹幕视频', rate: 5 },
    { name: '西瓜视频', url: 'https://www.ixigua.com', desc: '字节中视频平台', rate: 5 },
    { name: '抖音', url: 'https://www.douyin.com', desc: '短视频平台', rate: 5 },
    { name: '快手', url: 'https://www.kuaishou.com', desc: '快手短视频', rate: 5 },
    { name: 'YouTube', url: 'https://www.youtube.com', desc: '全球最大视频', rate: 5 },
    { name: 'Netflix', url: 'https://www.netflix.com', desc: '网飞流媒体', rate: 5 },
    { name: 'Disney+', url: 'https://www.disneyplus.com', desc: '迪士尼流媒体', rate: 5 },
    { name: 'HBO Max', url: 'https://www.hbomax.com', desc: 'HBO流媒体', rate: 5 },
  ]
};

// ============== 2. 🎵 音乐电台 ==============
const musicRadio = {
  title: '🎵 音乐电台',
  websites: [
    { name: '网易云音乐', url: 'https://music.163.com', desc: '网易云音乐社区', rate: 5 },
    { name: 'QQ音乐', url: 'https://y.qq.com', desc: '腾讯QQ音乐', rate: 5 },
    { name: '酷狗音乐', url: 'https://www.kugou.com', desc: '酷狗音乐平台', rate: 5 },
    { name: '酷我音乐', url: 'https://www.kuwo.cn', desc: '酷我音乐平台', rate: 5 },
    { name: '虾米音乐', url: 'https://www.xiami.com', desc: '阿里虾米音乐', rate: 4 },
    { name: '咪咕音乐', url: 'https://music.migu.cn', desc: '移动咪咕音乐', rate: 5 },
    { name: 'Spotify', url: 'https://open.spotify.com', desc: '全球流媒体音乐', rate: 5 },
    { name: 'Apple Music', url: 'https://music.apple.com', desc: '苹果音乐服务', rate: 5 },
    { name: 'SoundCloud', url: 'https://soundcloud.com', desc: '独立音乐人平台', rate: 5 },
    { name: '豆瓣FM', url: 'https://douban.fm', desc: '豆瓣电台', rate: 4 },
  ]
};

// ============== 3. 📚 文学阅读 ==============
const bookReading = {
  title: '📚 文学阅读',
  websites: [
    { name: '微信读书', url: 'https://weread.qq.com', desc: '腾讯电子书平台', rate: 5 },
    { name: '掌阅', url: 'https://www.ireader.com', desc: '掌阅电子书城', rate: 5 },
    { name: '起点中文网', url: 'https://www.qidian.com', desc: '起点小说平台', rate: 5 },
    { name: '晋江文学城', url: 'https://www.jjwxc.net', desc: '晋江原创小说', rate: 5 },
    { name: '纵横中文网', url: 'https://www.zongheng.com', desc: '纵横小说平台', rate: 5 },
    { name: '番茄小说', url: 'https://fanqienovel.com', desc: '字节免费小说', rate: 5 },
    { name: '七猫小说', url: 'https://www.qimao.com', desc: '七猫免费小说', rate: 5 },
    { name: '知乎盐选', url: 'https://www.zhihu.com/market', desc: '知乎付费专栏', rate: 5 },
    { name: '得到', url: 'https://www.dedao.cn', desc: '得到电子书', rate: 5 },
    { name: '喜马拉雅', url: 'https://www.ximalaya.com', desc: '有声书平台', rate: 5 },
    { name: '蜻蜓FM', url: 'https://www.qingting.fm', desc: '音频电台平台', rate: 5 },
    { name: 'Kindle商店', url: 'https://www.amazon.cn/kindle', desc: '亚马逊电子书', rate: 5 },
  ]
};

// ============== 4. 🖼️ 图片壁纸 ==============
const imageWallpaper = {
  title: '🖼️ 图片壁纸',
  websites: [
    { name: 'Unsplash', url: 'https://unsplash.com', desc: '免费高清摄影图', rate: 5 },
    { name: 'Pexels', url: 'https://www.pexels.com', desc: '免费高质量图片', rate: 5 },
    { name: 'Pixabay', url: 'https://pixabay.com', desc: '免费图片矢量图', rate: 5 },
    { name: 'Wallhaven', url: 'https://wallhaven.cc', desc: '高清壁纸社区', rate: 5 },
    { name: 'Wallpaper Abyss', url: 'https://wall.alphacoders.com', desc: '海量壁纸库', rate: 5 },
    { name: '必应壁纸', url: 'https://bing.gifposter.com', desc: '必应每日壁纸', rate: 5 },
    { name: '极简壁纸', url: 'https://bz.zzzmh.cn', desc: '国内高清壁纸', rate: 5 },
    { name: '彼岸图网', url: 'https://pic.netbian.com', desc: '4K壁纸下载', rate: 5 },
    { name: '千图网', url: 'https://www.58pic.com', desc: '设计素材图库', rate: 5 },
    { name: '包图网', url: 'https://ibaotu.com', desc: '设计素材平台', rate: 5 },
    { name: '摄图网', url: 'https://699pic.com', desc: '正版摄影图库', rate: 5 },
    { name: '图虫创意', url: 'https://tuchong.com', desc: '摄影社区图库', rate: 5 },
  ]
};

// ============== 5. 🎨 设计素材 ==============
const designResources = {
  title: '🎨 设计素材',
  websites: [
    { name: 'Figma', url: 'https://www.figma.com', desc: '在线UI设计工具', rate: 5 },
    { name: 'Sketch', url: 'https://www.sketch.com', desc: 'Mac设计工具', rate: 5 },
    { name: '站酷', url: 'https://www.zcool.com.cn', desc: '设计师社区', rate: 5 },
    { name: '花瓣网', url: 'https://huaban.com', desc: '设计灵感采集', rate: 5 },
    { name: 'Behance', url: 'https://www.behance.net', desc: '全球设计作品', rate: 5 },
    { name: 'Dribbble', url: 'https://dribbble.com', desc: '设计师展示平台', rate: 5 },
    { name: 'Pinterest', url: 'https://www.pinterest.com', desc: '灵感发现平台', rate: 5 },
    { name: '千库网', url: 'https://www.588ku.com', desc: 'PNG免抠素材', rate: 5 },
    { name: '阿里巴巴矢量库', url: 'https://www.iconfont.cn', desc: '图标字体库', rate: 5 },
    { name: 'IconPark', url: 'https://iconpark.oceanengine.com', desc: '字节图标库', rate: 5 },
    { name: 'Flaticon', url: 'https://www.flaticon.com', desc: '国外图标库', rate: 5 },
    { name: 'Freepik', url: 'https://www.freepik.com', desc: '矢量素材平台', rate: 5 },
  ]
};

// ============== 6. 🎮 游戏娱乐 ==============
const gameEntertainment = {
  title: '🎮 游戏娱乐',
  websites: [
    { name: 'Steam', url: 'https://store.steampowered.com', desc: 'PC游戏平台', rate: 5 },
    { name: 'Epic Games', url: 'https://www.epicgames.com', desc: 'Epic游戏商店', rate: 5 },
    { name: '腾讯WeGame', url: 'https://www.wegame.com.cn', desc: '腾讯游戏平台', rate: 5 },
    { name: '暴雪战网', url: 'https://www.blizzard.com', desc: '暴雪游戏平台', rate: 5 },
    { name: 'Origin', url: 'https://www.origin.com', desc: 'EA游戏平台', rate: 5 },
    { name: 'Uplay', url: 'https://ubisoftconnect.com', desc: '育碧游戏平台', rate: 5 },
    { name: 'TapTap', url: 'https://www.taptap.com', desc: '手游发现平台', rate: 5 },
    { name: '好游快爆', url: 'https://www.3839.com', desc: '手游资讯平台', rate: 5 },
    { name: '游民星空', url: 'https://www.gamersky.com', desc: '游戏资讯门户', rate: 5 },
    { name: '3DM游戏网', url: 'https://www.3dmgame.com', desc: '单机游戏门户', rate: 5 },
    { name: '游侠网', url: 'https://www.ali213.net', desc: '单机游戏资讯', rate: 5 },
    { name: 'NGA玩家社区', url: 'https://bbs.nga.cn', desc: '魔兽世界社区', rate: 5 },
  ]
};

// ============== 7. ✈️ 旅游出行 ==============
const travelSites = {
  title: '✈️ 旅游出行',
  websites: [
    { name: '携程旅行', url: 'https://www.ctrip.com', desc: '机票酒店预订', rate: 5 },
    { name: '去哪儿', url: 'https://www.qunar.com', desc: '低价机票搜索', rate: 5 },
    { name: '飞猪', url: 'https://www.fliggy.com', desc: '阿里旅行平台', rate: 5 },
    { name: '同程旅行', url: 'https://www.ly.com', desc: '同程旅游平台', rate: 5 },
    { name: '艺龙旅行', url: 'https://www.elong.com', desc: '酒店预订平台', rate: 5 },
    { name: '马蜂窝', url: 'https://www.mafengwo.cn', desc: '旅游攻略社区', rate: 5 },
    { name: '穷游网', url: 'https://www.qyer.com', desc: '出境游攻略', rate: 5 },
    { name: '途牛', url: 'https://www.tuniu.com', desc: '跟团游平台', rate: 5 },
    { name: 'Booking', url: 'https://www.booking.com', desc: '全球酒店预订', rate: 5 },
    { name: 'Agoda', url: 'https://www.agoda.com', desc: '亚洲酒店预订', rate: 5 },
    { name: 'Airbnb', url: 'https://www.airbnb.com', desc: '民宿短租平台', rate: 5 },
    { name: '飞常准', url: 'https://www.variflight.com', desc: '航班动态查询', rate: 5 },
  ]
};

// ============== 8. 🚗 汽车交通 ==============
const autoMobile = {
  title: '🚗 汽车交通',
  websites: [
    { name: '汽车之家', url: 'https://www.autohome.com.cn', desc: '汽车资讯门户', rate: 5 },
    { name: '易车网', url: 'https://www.yiche.com', desc: '汽车报价平台', rate: 5 },
    { name: '懂车帝', url: 'https://www.dongchedi.com', desc: '字节汽车平台', rate: 5 },
    { name: '太平洋汽车', url: 'https://www.pcauto.com.cn', desc: '汽车资讯评测', rate: 5 },
    { name: '爱卡汽车', url: 'https://www.xcar.com.cn', desc: '汽车社区论坛', rate: 5 },
    { name: '瓜子二手车', url: 'https://www.guazi.com', desc: '二手车直卖平台', rate: 5 },
    { name: '人人车', url: 'https://www.renrenche.com', desc: '二手车交易平台', rate: 5 },
    { name: '优信二手车', url: 'https://www.uxin.com', desc: '二手车电商平台', rate: 4 },
    { name: '高德地图', url: 'https://amap.com', desc: '导航地图服务', rate: 5 },
    { name: '百度地图', url: 'https://map.baidu.com', desc: '百度地图导航', rate: 5 },
    { name: '腾讯地图', url: 'https://map.qq.com', desc: '腾讯地图服务', rate: 5 },
    { name: '滴滴出行', url: 'https://www.didiglobal.com', desc: '网约车平台', rate: 5 },
  ]
};

// ============== 9. 🏠 房产家居 ==============
const realEstate = {
  title: '🏠 房产家居',
  websites: [
    { name: '链家', url: 'https://www.lianjia.com', desc: '房产中介平台', rate: 5 },
    { name: '贝壳找房', url: 'https://ke.com', desc: '房产交易平台', rate: 5 },
    { name: '安居客', url: 'https://www.anjuke.com', desc: '房产信息平台', rate: 5 },
    { name: '房天下', url: 'https://www1.fang.com', desc: '房产门户平台', rate: 5 },
    { name: '58同城', url: 'https://www.58.com', desc: '分类信息平台', rate: 5 },
    { name: '赶集网', url: 'https://www.ganji.com', desc: '生活分类信息', rate: 5 },
    { name: '自如', url: 'https://www.ziroom.com', desc: '长租公寓平台', rate: 5 },
    { name: '蛋壳公寓', url: 'https://www.dankegongyu.com', desc: '品牌公寓平台', rate: 4 },
    { name: '居然之家', url: 'https://www.juran.com.cn', desc: '家居建材平台', rate: 5 },
    { name: '红星美凯龙', url: 'https://www.chinaredstar.com', desc: '家居卖场平台', rate: 5 },
    { name: '宜家家居', url: 'https://www.ikea.com', desc: '宜家家具商城', rate: 5 },
    { name: '无印良品', url: 'https://www.muji.com.cn', desc: 'MUJI家居', rate: 5 },
  ]
};

// ============== 10. 💄 时尚美容 ==============
const fashionBeauty = {
  title: '💄 时尚美容',
  websites: [
    { name: '小红书', url: 'https://www.xiaohongshu.com', desc: '种草分享平台', rate: 5 },
    { name: '什么值得买', url: 'https://www.smzdm.com', desc: '优惠购物推荐', rate: 5 },
    { name: '慢慢买', url: 'https://www.manmanbuy.com', desc: '比价购物平台', rate: 5 },
    { name: '喵喵折', url: 'https://www.miaomiaozhe.com', desc: '历史价格查询', rate: 5 },
    { name: '慢慢买比价', url: 'https://www.manmanbuy.com', desc: '商品历史价格', rate: 5 },
    { name: '什么值得买', url: 'https://www.smzdm.com', desc: '网购推荐平台', rate: 5 },
    { name: '蘑菇街', url: 'https://www.mogujie.com', desc: '女性时尚购物', rate: 5 },
    { name: '美丽说', url: 'https://www.meilishuo.com', desc: '时尚穿搭平台', rate: 4 },
    { name: '太平洋时尚网', url: 'https://www.pclady.com.cn', desc: '时尚美容资讯', rate: 5 },
    { name: 'OnlyLady女人志', url: 'https://www.onlylady.com', desc: '女性时尚媒体', rate: 5 },
    { name: '瑞丽网', url: 'https://www.rayli.com.cn', desc: '时尚杂志平台', rate: 5 },
    { name: 'ELLE中国', url: 'https://www.ellechina.com', desc: '高端时尚媒体', rate: 5 },
  ]
};

// ============== 11. 👶 母婴育儿 ==============
const maternityParenting = {
  title: '👶 母婴育儿',
  websites: [
    { name: '宝宝树', url: 'https://www.babytree.com', desc: '母婴育儿社区', rate: 5 },
    { name: '妈妈网', url: 'https://www.mama.cn', desc: '妈妈交流社区', rate: 5 },
    { name: '育儿网', url: 'https://www.yuer.com', desc: '育儿知识平台', rate: 5 },
    { name: '太平洋亲子网', url: 'https://www.pcbaby.com.cn', desc: '亲子育儿资讯', rate: 5 },
    { name: '摇篮网', url: 'https://www.yaolan.com', desc: '专业育儿平台', rate: 5 },
    { name: '亲子王国', url: 'https://www.baby-kingdom.com', desc: '香港育儿论坛', rate: 4 },
    { name: '小红书母婴', url: 'https://www.xiaohongshu.com', desc: '母婴好物分享', rate: 5 },
    { name: '丁香妈妈', url: 'https://dxy.com', desc: '专业母婴知识', rate: 5 },
    { name: '年糕妈妈', url: 'https://www.niangao-mama.com', desc: '育儿科普平台', rate: 5 },
    { name: '崔玉涛育学园', url: 'https://www.dr-cui.com', desc: '儿科医生平台', rate: 5 },
  ]
};

// ============== 12. 💪 运动健身 ==============
const sportsFitness = {
  title: '💪 运动健身',
  websites: [
    { name: 'Keep', url: 'https://www.keep.com', desc: '移动健身教练', rate: 5 },
    { name: 'FitTime', url: 'https://www.fittime.com', desc: '健身视频平台', rate: 5 },
    { name: '薄荷健康', url: 'https://www.boohee.com', desc: '健康饮食管理', rate: 5 },
    { name: 'MyFitnessPal', url: 'https://www.myfitnesspal.com', desc: '卡路里计算', rate: 5 },
    { name: 'Nike Training', url: 'https://www.nike.com/ntc-app', desc: '耐克训练应用', rate: 5 },
    { name: '咕咚', url: 'https://www.codoon.com', desc: '跑步运动记录', rate: 5 },
    { name: '悦跑圈', url: 'https://www.thejoyrun.com', desc: '跑步社交平台', rate: 5 },
    { name: '虎扑', url: 'https://www.hupu.com', desc: '体育社区论坛', rate: 5 },
    { name: '懂球帝', url: 'https://www.dongqiudi.com', desc: '足球资讯平台', rate: 5 },
    { name: '直播吧', url: 'https://www.zhibo8.cc', desc: '体育赛事直播', rate: 5 },
  ]
};

const entertainmentCategory = createCategory('🎮 娱乐休闲中心', '', [
  videoEntertainment,
  musicRadio,
  bookReading,
  imageWallpaper,
  designResources,
  gameEntertainment
]);

const lifeCategory2 = createCategory('🌍 生活品质提升', '', [
  travelSites,
  autoMobile,
  realEstate,
  fashionBeauty,
  maternityParenting,
  sportsFitness
]);

db.push(entertainmentCategory);
db.push(lifeCategory2);

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

console.log(`✅ 新增分类: ${entertainmentCategory.title}`);
console.log(`   └─ 包含: ${entertainmentCategory.nav.length} 个子分类, ${countAll(entertainmentCategory.nav)} 个网址`);
console.log(`✅ 新增分类: ${lifeCategory2.title}`);
console.log(`   └─ 包含: ${lifeCategory2.nav.length} 个子分类, ${countAll(lifeCategory2.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(entertainmentCategory.nav) + countAll(lifeCategory2.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 第二轮扩充完成！娱乐生活全覆盖！');
