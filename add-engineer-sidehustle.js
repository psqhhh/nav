import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 170000;

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

// ============== 1. 💰 工程接单平台 ==============
const freelancePlatforms = {
  title: '💰 工程接单平台',
  websites: [
    { name: '猪八戒网', url: 'https://www.zhubajie.com', desc: '工程设计、建模、算量接单', rate: 5 },
    { name: '一品威客', url: 'https://www.epwk.com', desc: 'BIM、CAD、造价接单', rate: 5 },
    { name: '淘宝兼职', url: 'https://www.taobao.com', desc: '开店接建模算量单', rate: 5 },
    { name: '闲鱼接单', url: 'https://2.taobao.com', desc: '二手平台接私活', rate: 5 },
    { name: '拼多多接单', url: 'https://www.pinduoduo.com', desc: '低价引流接单', rate: 5 },
    { name: 'BOSS直聘兼职', url: 'https://www.zhipin.com', desc: '搜工程兼职', rate: 5 },
    { name: '智联兼职', url: 'https://www.zhaopin.com', desc: '兼职招聘', rate: 5 },
    { name: '前程无忧兼职', url: 'https://www.51job.com', desc: '兼职机会', rate: 5 },
    { name: '拉勾兼职', url: 'https://www.lagou.com', desc: '互联网+工程', rate: 5 },
    { name: '斗米兼职', url: 'https://www.doumi.com', desc: '本地兼职', rate: 5 },
    { name: '青团社', url: 'https://www.qtshe.com', desc: '大学生兼职', rate: 5 },
    { name: '兼职猫', url: 'https://www.jianzhimao.com', desc: '兼职平台', rate: 5 },
    { name: 'Freelancer', url: 'https://www.freelancer.com', desc: '国际接单', rate: 5 },
    { name: 'Upwork', url: 'https://www.upwork.com', desc: '海外接单平台', rate: 5 },
    { name: 'Fiverr', url: 'https://www.fiverr.com', desc: '海外微任务', rate: 5 },
    { name: '众人网', url: 'https://www.zhongren.com', desc: '众包平台', rate: 5 },
    { name: '时间财富网', url: 'https://www.680.com', desc: '威客平台', rate: 5 },
    { name: '孙悟空威客', url: 'https://www.swkweike.com', desc: '设计接单', rate: 5 },
    { name: '设计本', url: 'https://www.shejiben.com', desc: '建筑设计', rate: 5 },
    { name: '古德设计', url: 'https://www.gooood.cn', desc: '建筑设计接单', rate: 5 },
  ]
};

// ============== 2. 📋 工程模板与资料 ==============
const templateResources = {
  title: '📋 工程模板与资料',
  websites: [
    { name: '筑龙网', url: 'https://www.zhulong.com', desc: '80万工程资料下载', rate: 5 },
    { name: '土木在线', url: 'https://www.co188.com', desc: '工程资料分享', rate: 5 },
    { name: '天工网', url: 'https://www.tgnet.cn', desc: '工程资料下载', rate: 5 },
    { name: '建标库', url: 'https://www.jianbiaoku.com', desc: '规范图集下载', rate: 5 },
    { name: '标准分享网', url: 'https://www.bzfxw.com', desc: '免费规范', rate: 5 },
    { name: '工标网', url: 'https://www.csres.com', desc: '标准查询', rate: 5 },
    { name: '国标编号查询', url: 'https://www.gb688.cn', desc: '国家标准', rate: 5 },
    { name: '豆丁网', url: 'https://www.docin.com', desc: '工程文档', rate: 5 },
    { name: '百度文库', url: 'https://wenku.baidu.com', desc: '文档资料', rate: 5 },
    { name: '道客巴巴', url: 'https://www.doc88.com', desc: '工程文档', rate: 5 },
    { name: 'MBA智库', url: 'https://wiki.mbalib.com', desc: '管理资料', rate: 5 },
    { name: '爱学术', url: 'https://www.ixueshu.com', desc: '论文资料', rate: 5 },
    { name: '智库文档', url: 'https://doc.mbalib.com', desc: '管理文档', rate: 5 },
    { name: '第一PPT', url: 'https://www.1ppt.com', desc: 'PPT模板', rate: 5 },
    { name: '优品PPT', url: 'https://www.ypppt.com', desc: '免费PPT', rate: 5 },
    { name: 'PPT宝藏', url: 'https://www.pptbz.com', desc: 'PPT模板', rate: 5 },
    { name: '办公资源网', url: 'https://www.bangongziyuan.com', desc: 'Office模板', rate: 5 },
    { name: '熊猫办公', url: 'https://www.tukuppt.com', desc: 'PPT模板', rate: 5 },
    { name: '包图网', url: 'https://ibaotu.com', desc: '设计素材', rate: 5 },
    { name: '千图网', url: 'https://www.58pic.com', desc: '免费素材', rate: 5 },
  ]
};

// ============== 3. 📚 考证与知识付费 ==============
const certificationLearning = {
  title: '📚 考证与知识付费',
  websites: [
    { name: '嗨学网', url: 'https://www.haixue.com', desc: '建造师培训', rate: 5 },
    { name: '环球网校', url: 'https://www.hqwx.com', desc: '职业考证', rate: 5 },
    { name: '建设工程教育网', url: 'https://www.jianshe99.com', desc: '工程考试', rate: 5 },
    { name: '233网校', url: 'https://www.233.com', desc: '考证题库', rate: 5 },
    { name: '中大网校', url: 'https://www.wangxiao.cn', desc: '职业培训', rate: 5 },
    { name: '学天教育', url: 'https://www.xuetian.cn', desc: '建工培训', rate: 5 },
    { name: '优路教育', url: 'https://www.niceloo.com', desc: '建造师培训', rate: 5 },
    { name: '大立教育', url: 'https://www.daliedu.cn', desc: '建工培训', rate: 5 },
    { name: '鲁班培训', url: 'https://www.lubanedu.cn', desc: '建造师培训', rate: 5 },
    { name: '欣师网校', url: 'https://www.xinschool.com', desc: '考试培训', rate: 5 },
    { name: '粉笔公考', url: 'https://www.fenbi.com', desc: '考证题库', rate: 5 },
    { name: '网易云课堂', url: 'https://study.163.com', desc: '在线课程', rate: 5 },
    { name: '腾讯课堂', url: 'https://ke.qq.com', desc: '考证课程', rate: 5 },
    { name: '慕课网', url: 'https://www.imooc.com', desc: '技能学习', rate: 5 },
    { name: '得到', url: 'https://www.dedao.cn', desc: '知识付费', rate: 5 },
    { name: '喜马拉雅', url: 'https://www.ximalaya.com', desc: '音频课程', rate: 5 },
    { name: 'B站学习', url: 'https://www.bilibili.com', desc: '免费课程', rate: 5 },
    { name: '抖音学浪', url: 'https://www.douyin.com', desc: '直播课程', rate: 5 },
    { name: '小红书知识', url: 'https://www.xiaohongshu.com', desc: '干货分享', rate: 5 },
    { name: '知乎付费咨询', url: 'https://www.zhihu.com', desc: '付费问答', rate: 5 },
  ]
};

// ============== 4. 🏛️ 行业协会与专家库 ==============
const industryAssociations = {
  title: '🏛️ 行业协会与专家库',
  websites: [
    { name: '中国建筑业协会', url: 'https://www.zgjzy.org', desc: '行业协会', rate: 5 },
    { name: '中国土木工程学会', url: 'https://www.cces.net.cn', desc: '土木工程学会', rate: 5 },
    { name: '中国建筑学会', url: 'https://www.chinaacsc.org', desc: '建筑学会', rate: 5 },
    { name: '中国建设工程造价管理协会', url: 'https://www.ceca.org.cn', desc: '造价协会', rate: 5 },
    { name: '中国建设监理协会', url: 'https://www.zgjl.org.cn', desc: '监理协会', rate: 5 },
    { name: '中国市政工程协会', url: 'https://www.cmea.org.cn', desc: '市政协会', rate: 5 },
    { name: '中国招标投标协会', url: 'https://www.ctba.org.cn', desc: '招投标协会', rate: 5 },
    { name: '中国工程咨询协会', url: 'https://www.cnaec.org.cn', desc: '咨询协会', rate: 5 },
    { name: '中国勘察设计协会', url: 'https://www.chinaeda.org', desc: '勘察设计', rate: 5 },
    { name: '中国施工企业管理协会', url: 'https://www.cacem.com.cn', desc: '施工企业协会', rate: 5 },
    { name: '住建部', url: 'https://www.mohurd.gov.cn', desc: '住房和城乡建设部', rate: 5 },
    { name: '全国建筑市场监管平台', url: 'https://jzsc.mohurd.gov.cn', desc: '四库一平台', rate: 5 },
    { name: '中国政府采购网', url: 'https://www.ccgp.gov.cn', desc: '政府采购', rate: 5 },
    { name: '全国公共资源交易平台', url: 'https://ggzyjy.gov.cn', desc: '公共资源交易', rate: 5 },
    { name: '中国招标投标公共服务平台', url: 'https://www.cebpubservice.com', desc: '招投标平台', rate: 5 },
    { name: '鲁班奖官网', url: 'https://www.lubanprize.com', desc: '鲁班奖', rate: 5 },
    { name: '詹天佑奖', url: 'https://www.jtzy.org', desc: '詹天佑土木工程奖', rate: 5 },
    { name: '梁思成建筑奖', url: 'https://www.chinaacsc.org', desc: '梁思成奖', rate: 5 },
    { name: '华夏建设科学技术奖', url: 'https://www.cstcmoc.org.cn', desc: '科技奖', rate: 5 },
    { name: '工程建设科学技术奖', url: 'https://www.cacem.com.cn', desc: '工程科技奖', rate: 5 },
  ]
};

// ============== 5. 📱 工程自媒体平台 ==============
const socialMediaPlatforms = {
  title: '📱 工程自媒体平台',
  websites: [
    { name: '微信公众号', url: 'https://mp.weixin.qq.com', desc: '公众号运营', rate: 5 },
    { name: '视频号', url: 'https://channels.weixin.qq.com', desc: '微信视频号', rate: 5 },
    { name: '抖音', url: 'https://www.douyin.com', desc: '短视频', rate: 5 },
    { name: '快手', url: 'https://www.kuaishou.com', desc: '短视频', rate: 5 },
    { name: 'B站', url: 'https://www.bilibili.com', desc: '中长视频', rate: 5 },
    { name: '小红书', url: 'https://www.xiaohongshu.com', desc: '图文种草', rate: 5 },
    { name: '知乎', url: 'https://www.zhihu.com', desc: '知识问答', rate: 5 },
    { name: '今日头条', url: 'https://www.toutiao.com', desc: '图文创作', rate: 5 },
    { name: '百家号', url: 'https://baijiahao.baidu.com', desc: '百度平台', rate: 5 },
    { name: '企鹅号', url: 'https://om.qq.com', desc: '腾讯平台', rate: 5 },
    { name: '搜狐号', url: 'https://mp.sohu.com', desc: '搜狐平台', rate: 5 },
    { name: '网易号', url: 'https://mp.163.com', desc: '网易平台', rate: 5 },
    { name: '新浪看点', url: 'https://k.sina.com.cn', desc: '新浪平台', rate: 5 },
    { name: '大鱼号', url: 'https://mp.dayu.com', desc: '阿里大文娱', rate: 5 },
    { name: '一点号', url: 'https://www.yidianzixun.com', desc: '一点资讯', rate: 5 },
    { name: '知乎专栏', url: 'https://zhuanlan.zhihu.com', desc: '专栏写作', rate: 5 },
    { name: 'CSDN', url: 'https://www.csdn.net', desc: '技术博客', rate: 5 },
    { name: '掘金', url: 'https://juejin.cn', desc: '技术社区', rate: 5 },
    { name: '简书', url: 'https://www.jianshu.com', desc: '创作社区', rate: 5 },
    { name: '豆瓣', url: 'https://www.douban.com', desc: '兴趣社区', rate: 5 },
  ]
};

// ============== 6. 🛠️ 装修监理与验房 ==============
const decorationSupervision = {
  title: '🛠️ 装修监理与验房',
  websites: [
    { name: '土巴兔', url: 'https://www.to8to.com', desc: '装修平台', rate: 5 },
    { name: '齐家网', url: 'https://www.qijia.com', desc: '装修平台', rate: 5 },
    { name: '住范儿', url: 'https://www.zhufaner.com', desc: '装修服务', rate: 5 },
    { name: '酷家乐', url: 'https://www.kujiale.com', desc: '装修设计', rate: 5 },
    { name: '三维家', url: 'https://www.3vjia.com', desc: '家居设计', rate: 5 },
    { name: '一起装修网', url: 'https://www.17house.com', desc: '装修平台', rate: 5 },
    { name: '房天下装修', url: 'https://home.fang.com', desc: '房天下装修', rate: 5 },
    { name: '新浪家居', url: 'https://jiaju.sina.com.cn', desc: '家居频道', rate: 5 },
    { name: '网易家居', url: 'https://home.163.com', desc: '网易家居', rate: 5 },
    { name: '腾讯家居', url: 'https://home.qq.com', desc: '腾讯家居', rate: 5 },
    { name: '监理解说', url: 'https://www.jianlijieshuo.com', desc: '装修监理', rate: 5 },
    { name: '搭窝监理', url: 'https://www.dawojia.com', desc: '第三方监理', rate: 5 },
    { name: '牛角监', url: 'https://www.niujiaojian.com', desc: '装修监理', rate: 5 },
    { name: '甩手装', url: 'https://www.shuaishouzhuang.com', desc: '装修监理', rate: 5 },
    { name: '啄木鸟验房', url: 'https://www.zmn315.com', desc: '专业验房', rate: 5 },
    { name: '房大师验房', url: 'https://www.fangdashi.com', desc: '验房服务', rate: 5 },
    { name: '翘楚验房', url: 'https://www.qcyf.net', desc: '验房监理', rate: 5 },
    { name: '宜居验房', url: 'https://www.yijuyanfang.com', desc: '验房服务', rate: 5 },
    { name: '深度验房', url: 'https://www.shenduyanfang.com', desc: '验房公司', rate: 5 },
    { name: '房加加验房', url: 'https://www.fangjiajia.com', desc: '验房服务', rate: 5 },
  ]
};

const category30 = createCategory('💼 工程人副业专区', '', [
  freelancePlatforms,
  templateResources,
  certificationLearning,
  industryAssociations,
  socialMediaPlatforms,
  decorationSupervision
]);

db.push(category30);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

const total = countAll(db);
const newCount = countAll(category30.nav);

console.log(`✅ 新增分类: ${category30.title}`);
console.log(`   └─ 包含: ${category30.nav.length} 个子分类, ${newCount} 个副业资源`);
console.log(`   ├─ 💰 工程接单平台 (20个)`);
console.log(`   ├─ 📋 工程模板与资料 (20个)`);
console.log(`   ├─ 📚 考证与知识付费 (20个)`);
console.log(`   ├─ 🏛️ 行业协会与专家库 (20个)`);
console.log(`   ├─ 📱 工程自媒体平台 (20个)`);
console.log(`   └─ 🛠️ 装修监理与验房 (20个)`);
console.log(`\n📊 本轮新增: ${newCount} 个副业资源网站`);
console.log(`\n🎉🎉🎉 数据库总计: ${total} 个优质网址 🎉🎉🎉`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🚀 工程人副业专区上线！接单、卖资料、做自媒体、做监理全面覆盖！🚀');
