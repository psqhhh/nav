import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 80000;

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

// ============== 1. 🍜 美食菜谱大全 ==============
const foodRecipes = {
  title: '🍜 美食菜谱大全',
  websites: [
    { name: '下厨房', url: 'https://www.xiachufang.com', desc: '家常菜菜谱大全', rate: 5 },
    { name: '豆果美食', url: 'https://www.douguo.com', desc: '美食菜谱社区', rate: 5 },
    { name: '美食天下', url: 'https://www.meishichina.com', desc: '中华美食网', rate: 5 },
    { name: '香哈网', url: 'https://www.xiangha.com', desc: '菜谱大全', rate: 5 },
    { name: '做饭网', url: 'https://www.zuofan.cn', desc: '家常菜谱大全', rate: 5 },
    { name: '美食杰', url: 'https://www.meishij.net', desc: '家常菜谱做法', rate: 5 },
    { name: '心食神', url: 'https://www.xinshishen.com', desc: '美食食谱社区', rate: 5 },
    { name: '菜菜美食日记', url: 'https://www.caicai.me', desc: '食谱记录', rate: 5 },
    { name: 'OpenRice', url: 'https://www.openrice.com', desc: '开饭喇美食', rate: 5 },
    { name: 'Allrecipes', url: 'https://www.allrecipes.com', desc: '全球菜谱', rate: 5 },
    { name: 'Food Network', url: 'https://www.foodnetwork.com', desc: '美食频道', rate: 5 },
    { name: 'Epicurious', url: 'https://www.epicurious.com', desc: '美食菜谱', rate: 5 },
    { name: 'Bon Appétit', url: 'https://www.bonappetit.com', desc: '美食杂志', rate: 5 },
    { name: 'Serious Eats', url: 'https://www.seriouseats.com', desc: '美食博客', rate: 5 },
    { name: 'Simply Recipes', url: 'https://www.simplyrecipes.com', desc: '简单食谱', rate: 5 },
    { name: '大众点评', url: 'https://www.dianping.com', desc: '美食点评', rate: 5 },
    { name: '美团', url: 'https://www.meituan.com', desc: '外卖团购', rate: 5 },
    { name: '饿了么', url: 'https://www.ele.me', desc: '外卖平台', rate: 5 },
    { name: '口碑', url: 'https://koubei.com', desc: '本地生活', rate: 5 },
    { name: '小红书美食', url: 'https://www.xiaohongshu.com', desc: '美食分享', rate: 5 },
  ]
};

// ============== 2. ✈️ 旅游出行攻略 ==============
const travelSites = {
  title: '✈️ 旅游出行攻略',
  websites: [
    { name: '携程', url: 'https://www.ctrip.com', desc: '在线旅游平台', rate: 5 },
    { name: '去哪儿', url: 'https://www.qunar.com', desc: '机票酒店预订', rate: 5 },
    { name: '飞猪', url: 'https://www.fliggy.com', desc: '阿里旅行平台', rate: 5 },
    { name: '同程旅行', url: 'https://www.ly.com', desc: '同程旅游', rate: 5 },
    { name: '艺龙', url: 'https://www.elong.com', desc: '酒店预订', rate: 5 },
    { name: '马蜂窝', url: 'https://www.mafengwo.cn', desc: '旅游攻略社区', rate: 5 },
    { name: '穷游网', url: 'https://www.qyer.com', desc: '出境游攻略', rate: 5 },
    { name: '驴妈妈', url: 'https://www.lvmama.com', desc: '景点门票', rate: 5 },
    { name: '途牛', url: 'https://www.tuniu.com', desc: '跟团旅游', rate: 5 },
    { name: 'TripAdvisor', url: 'https://www.tripadvisor.com', desc: '猫途鹰点评', rate: 5 },
    { name: 'Booking.com', url: 'https://www.booking.com', desc: '全球酒店预订', rate: 5 },
    { name: 'Agoda', url: 'https://www.agoda.com', desc: '亚洲酒店预订', rate: 5 },
    { name: 'Airbnb', url: 'https://www.airbnb.com', desc: '民宿短租平台', rate: 5 },
    { name: 'Skyscanner', url: 'https://www.skyscanner.com', desc: '机票比价', rate: 5 },
    { name: '天巡网', url: 'https://www.tianxun.com', desc: '航班搜索', rate: 5 },
    { name: '飞常准', url: 'https://www.veryzhun.com', desc: '航班动态', rate: 5 },
    { name: '航旅纵横', url: 'https://www.umetrip.com', desc: '航班管理', rate: 5 },
    { name: '12306', url: 'https://www.12306.cn', desc: '火车票预订', rate: 5 },
    { name: '高铁管家', url: 'https://www.gaotieguan.com', desc: '高铁出行', rate: 5 },
    { name: '墨迹天气', url: 'https://www.moji.com', desc: '天气预报', rate: 5 },
  ]
};

// ============== 3. 🚗 汽车之家 ==============
const autoMobile = {
  title: '🚗 汽车之家',
  websites: [
    { name: '汽车之家', url: 'https://www.autohome.com.cn', desc: '汽车资讯平台', rate: 5 },
    { name: '易车网', url: 'https://www.yiche.com', desc: '汽车报价', rate: 5 },
    { name: '懂车帝', url: 'https://www.dongchedi.com', desc: '汽车内容社区', rate: 5 },
    { name: '太平洋汽车网', url: 'https://www.pcauto.com.cn', desc: '汽车行情', rate: 5 },
    { name: '爱卡汽车', url: 'https://www.xcar.com.cn', desc: '汽车社区', rate: 5 },
    { name: '瓜子二手车', url: 'https://www.guazi.com', desc: '二手车直卖', rate: 5 },
    { name: '人人车', url: 'https://www.renrenche.com', desc: '二手车平台', rate: 5 },
    { name: '优信二手车', url: 'https://www.uxin.com', desc: '二手车电商', rate: 5 },
    { name: '汽车点评', url: 'https://xgo.com.cn', desc: '汽车点评网', rate: 5 },
    { name: '第一电动网', url: 'https://www.d1ev.com', desc: '新能源汽车', rate: 5 },
    { name: '新出行', url: 'https://www.xchuxing.com', desc: '新能源社区', rate: 5 },
    { name: '蔚来', url: 'https://www.nio.com', desc: '蔚来汽车', rate: 5 },
    { name: '小鹏汽车', url: 'https://www.xiaopeng.com', desc: '小鹏汽车', rate: 5 },
    { name: '理想汽车', url: 'https://www.lixiang.com', desc: '理想汽车', rate: 5 },
    { name: '比亚迪', url: 'https://www.byd.com', desc: '比亚迪汽车', rate: 5 },
    { name: '特斯拉中国', url: 'https://www.tesla.cn', desc: '特斯拉中国', rate: 5 },
    { name: '汽车之家油耗', url: 'https://www.autohome.com.cn/use', desc: '油耗查询', rate: 5 },
    { name: '交管12123', url: 'https://gab.122.gov.cn', desc: '交通安全平台', rate: 5 },
    { name: '途虎养车', url: 'https://www.tuhu.cn', desc: '汽车养护', rate: 5 },
    { name: '汽车超人', url: 'https://www.qccr.com', desc: '汽车后市场', rate: 5 },
  ]
};

// ============== 4. 🏠 房产家居装修 ==============
const realEstate = {
  title: '🏠 房产家居装修',
  websites: [
    { name: '链家', url: 'https://www.lianjia.com', desc: '房产中介平台', rate: 5 },
    { name: '贝壳找房', url: 'https://www.ke.com', desc: '房产交易平台', rate: 5 },
    { name: '安居客', url: 'https://www.anjuke.com', desc: '租房买房', rate: 5 },
    { name: '房天下', url: 'https://www1.fang.com', desc: '房地产门户', rate: 5 },
    { name: '58同城房产', url: 'https://58.com', desc: '房产信息', rate: 5 },
    { name: '赶集网', url: 'https://www.ganji.com', desc: '生活信息', rate: 5 },
    { name: '我爱我家', url: 'https://www.5i5j.com', desc: '房产中介', rate: 5 },
    { name: '中原地产', url: 'https://www.centaline.com.cn', desc: '房产代理', rate: 5 },
    { name: '乐居', url: 'https://leju.com', desc: '新浪房产', rate: 5 },
    { name: '吉屋网', url: 'https://www.jiwu.com', desc: '新房导购', rate: 5 },
    { name: '土巴兔', url: 'https://www.to8to.com', desc: '装修平台', rate: 5 },
    { name: '齐家网', url: 'https://www.qijia.com', desc: '装修建材', rate: 5 },
    { name: '住范儿', url: 'https://www.zhufaner.com', desc: '年轻人装修', rate: 5 },
    { name: '一兜糖', url: 'https://www.yidoutang.com', desc: '家居软装', rate: 5 },
    { name: '好好住', url: 'https://www.haohaozhu.cn', desc: '家居分享', rate: 5 },
    { name: '酷家乐', url: 'https://www.kujiale.com', desc: '3D云设计', rate: 5 },
    { name: '居然之家', url: 'https://www.juran.com.cn', desc: '家居卖场', rate: 5 },
    { name: '红星美凯龙', url: 'https://www.macalline.com', desc: '家具建材', rate: 5 },
    { name: '宜家家居', url: 'https://www.ikea.cn', desc: '宜家中国', rate: 5 },
    { name: '无印良品', url: 'https://www.muji.com.cn', desc: 'MUJI中国', rate: 5 },
  ]
};

// ============== 5. 💄 时尚美妆穿搭 ==============
const fashionBeauty = {
  title: '💄 时尚美妆穿搭',
  websites: [
    { name: '小红书', url: 'https://www.xiaohongshu.com', desc: '种草分享', rate: 5 },
    { name: '什么值得买', url: 'https://www.smzdm.com', desc: '优惠推荐', rate: 5 },
    { name: '蘑菇街', url: 'https://www.mogujie.com', desc: '女装时尚', rate: 5 },
    { name: '美丽说', url: 'https://www.meilishuo.com', desc: '时尚穿搭', rate: 5 },
    { name: 'OnlyLady女人志', url: 'https://www.onlylady.com', desc: '女性时尚', rate: 5 },
    { name: '瑞丽网', url: 'https://www.rayli.com.cn', desc: '时尚杂志', rate: 5 },
    { name: 'ELLE中国', url: 'https://www.ellechina.com', desc: '时尚ELLE', rate: 5 },
    { name: 'VOGUE时尚网', url: 'https://www.vogue.com.cn', desc: '高端时尚', rate: 5 },
    { name: '时尚芭莎', url: 'https://www.bazaar.com.cn', desc: 'BAZAAR', rate: 5 },
    { name: 'Cosmo', url: 'https://www.cosmo.com.cn', desc: '时尚COSMO', rate: 5 },
    { name: '太平洋时尚网', url: 'https://www.pclady.com.cn', desc: '女性时尚', rate: 5 },
    { name: '闺蜜网', url: 'https://www.kimiss.com', desc: '美妆点评', rate: 5 },
    { name: '美柚', url: 'https://www.meiyou.com', desc: '女性健康', rate: 5 },
    { name: '美妆心得', url: 'https://www.cosme-de.com', desc: '化妆品点评', rate: 5 },
    { name: '丝芙兰', url: 'https://www.sephora.cn', desc: '化妆品零售', rate: 5 },
    { name: '屈臣氏', url: 'https://www.watsons.com.cn', desc: '个人护理', rate: 5 },
    { name: '识货', url: 'https://www.shihuo.cn', desc: '运动潮品', rate: 5 },
    { name: '得物', url: 'https://www.dewu.com', desc: '潮流网购', rate: 5 },
    { name: 'Nice', url: 'https://www.oneniceapp.com', desc: '球鞋社区', rate: 5 },
    { name: '虎扑', url: 'https://www.hupu.com', desc: '体育社区', rate: 5 },
  ]
};

// ============== 6. 👶 母婴育儿亲子 ==============
const maternityParenting = {
  title: '👶 母婴育儿亲子',
  websites: [
    { name: '宝宝树', url: 'https://www.babytree.com', desc: '育儿社区', rate: 5 },
    { name: '妈妈网', url: 'https://www.mama.cn', desc: '妈妈社区', rate: 5 },
    { name: '育儿网', url: 'https://www.yuer.com', desc: '育儿知识', rate: 5 },
    { name: '太平洋亲子网', url: 'https://www.pcbaby.com.cn', desc: '亲子门户', rate: 5 },
    { name: '摇篮网', url: 'https://www.yaolan.com', desc: '母婴育儿', rate: 5 },
    { name: '亲宝宝', url: 'https://www.qinbaobao.com', desc: '成长记录', rate: 5 },
    { name: '育儿问答', url: 'https://ask.babytree.com', desc: '育儿问答', rate: 5 },
    { name: '贝贝网', url: 'https://www.beibei.com', desc: '母婴电商', rate: 5 },
    { name: '蜜芽', url: 'https://www.miya.com', desc: '母婴跨境', rate: 5 },
    { name: '孩子王', url: 'https://www.haiziwang.com', desc: '母婴零售', rate: 5 },
    { name: '飞鹤奶粉', url: 'https://www.feihe.com', desc: '飞鹤乳业', rate: 5 },
    { name: '美赞臣', url: 'https://www.meadjohnson.com.cn', desc: '美赞臣奶粉', rate: 5 },
    { name: '惠氏', url: 'https://www.wyeth.com.cn', desc: '惠氏奶粉', rate: 5 },
    { name: '美素佳儿', url: 'https://www.friso.com.cn', desc: '美素奶粉', rate: 5 },
    { name: '爱他美', url: 'https://www.aptamil.com.cn', desc: '爱他美奶粉', rate: 5 },
    { name: '帮宝适', url: 'https://www.pampers.com.cn', desc: '纸尿裤', rate: 5 },
    { name: '花王', url: 'https://www.kao.com/cn', desc: '花王纸尿裤', rate: 5 },
    { name: '好奇', url: 'https://www.huggies.com.cn', desc: '好奇纸尿裤', rate: 5 },
    { name: '巧虎', url: 'https://www.qiaohu.com', desc: '早教产品', rate: 5 },
    { name: '金宝贝', url: 'https://www.gymboree.com.cn', desc: '早教中心', rate: 5 },
  ]
};

// ============== 7. ⚽ 运动健身户外 ==============
const sportsFitness = {
  title: '⚽ 运动健身户外',
  websites: [
    { name: 'Keep', url: 'https://www.keep.com', desc: '移动健身', rate: 5 },
    { name: 'FitTime', url: 'https://www.fittime.com', desc: '健身社区', rate: 5 },
    { name: '薄荷健康', url: 'https://www.boohee.com', desc: '健康减肥', rate: 5 },
    { name: '硬派健身', url: 'https://www.hardexercise.com', desc: '健身知识', rate: 5 },
    { name: '健身吧', url: 'https://www.jianshen8.com', desc: '健身网站', rate: 5 },
    { name: '39健康网', url: 'https://www.39.net', desc: '健康资讯', rate: 5 },
    { name: '丁香医生', url: 'https://dxy.com', desc: '医疗科普', rate: 5 },
    { name: '春雨医生', url: 'https://www.chunyuyisheng.com', desc: '在线问诊', rate: 5 },
    { name: '好大夫在线', url: 'https://www.haodf.com', desc: '医疗服务', rate: 5 },
    { name: '微医', url: 'https://www.guahao.com', desc: '挂号问诊', rate: 5 },
    { name: '平安好医生', url: 'https://www.pingan.com', desc: '互联网医疗', rate: 5 },
    { name: '悦跑圈', url: 'https://www.thejoyrun.com', desc: '跑步社区', rate: 5 },
    { name: '咕咚', url: 'https://www.codoon.com', desc: '运动APP', rate: 5 },
    { name: '行者', url: 'https://www.imxingzhe.com', desc: '骑行社区', rate: 5 },
    { name: '黑鸟单车', url: 'https://www.blackbirdsport.com', desc: '骑行记录', rate: 5 },
    { name: '两步路', url: 'https://www.2bulu.com', desc: '户外助手', rate: 5 },
    { name: '六只脚', url: 'https://www.foooooot.com', desc: '户外轨迹', rate: 5 },
    { name: '8264户外', url: 'https://www.8264.com', desc: '户外论坛', rate: 5 },
    { name: '磨房', url: 'https://www.doyouhike.net', desc: '户外旅行', rate: 5 },
    { name: '绿野户外', url: 'https://www.lvye.cn', desc: '户外社区', rate: 5 },
  ]
};

const category5 = createCategory('🍱 美食与旅游出行', '', [
  foodRecipes,
  travelSites
]);

const category6 = createCategory('🚗 汽车房产与时尚生活', '', [
  autoMobile,
  realEstate,
  fashionBeauty
]);

const category7 = createCategory('👨‍👩‍👧 亲子健康与运动', '', [
  maternityParenting,
  sportsFitness
]);

db.push(category5, category6, category7);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

console.log(`✅ 新增分类: ${category5.title}`);
console.log(`   └─ 包含: ${category5.nav.length} 个子分类, ${countAll(category5.nav)} 个网址`);
console.log(`✅ 新增分类: ${category6.title}`);
console.log(`   └─ 包含: ${category6.nav.length} 个子分类, ${countAll(category6.nav)} 个网址`);
console.log(`✅ 新增分类: ${category7.title}`);
console.log(`   └─ 包含: ${category7.nav.length} 个子分类, ${countAll(category7.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${countAll(category5.nav) + countAll(category6.nav) + countAll(category7.nav)} 个优质网址`);
console.log(`📊 数据库总计: ${countAll(db)} 个网址`);
console.log(`📊 距离3000目标还差: ${3000 - countAll(db)} 个`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🎉 第五轮扩充完成！冲击2000+！💪');
