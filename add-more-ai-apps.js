import fs from 'fs';

const dbPath = './data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let idCounter = 160000;

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

// ============== 1. 🤖 AI大模型对话 ==============
const aiChatModels = {
  title: '🤖 AI大模型对话',
  websites: [
    { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'OpenAI官方GPT-4o', rate: 5 },
    { name: 'Claude 3', url: 'https://claude.ai', desc: 'Anthropic Claude 3 Opus', rate: 5 },
    { name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google Gemini', rate: 5 },
    { name: '文心一言', url: 'https://yiyan.baidu.com', desc: '百度文心4.0', rate: 5 },
    { name: '通义千问', url: 'https://tongyi.aliyun.com', desc: '阿里通义千问', rate: 5 },
    { name: '豆包', url: 'https://www.doubao.com', desc: '字节跳动豆包', rate: 5 },
    { name: '讯飞星火', url: 'https://xinghuo.xfyun.cn', desc: '科大讯飞星火', rate: 5 },
    { name: '360智脑', url: 'https://ai.360.cn', desc: '360智脑', rate: 5 },
    { name: '紫东太初', url: 'https://taichu.wuhan.ac.cn', desc: '中科院大模型', rate: 5 },
    { name: '天工AI', url: 'https://www.tiangong.cn', desc: '昆仑万维天工', rate: 5 },
    { name: 'Moonshot Kimi', url: 'https://kimi.moonshot.cn', desc: '月之暗面Kimi', rate: 5 },
    { name: '智谱清言', url: 'https://chatglm.cn', desc: '智谱AI', rate: 5 },
    { name: '百川大模型', url: 'https://www.baichuan-ai.com', desc: '百川智能', rate: 5 },
    { name: '零一万物', url: 'https://www.lingyiwanwu.com', desc: 'Yi大模型', rate: 5 },
    { name: 'DeepSeek', url: 'https://chat.deepseek.com', desc: '深度求索', rate: 5 },
    { name: '阶跃星辰', url: 'https://stepfun.com', desc: '阶跃星辰', rate: 5 },
    { name: 'MiniMax', url: 'https://www.minimaxi.com', desc: 'MiniMax', rate: 5 },
    { name: '商量', url: 'https://chat.xlab.sensetime.com', desc: '商汤科技', rate: 5 },
    { name: '度加创作', url: 'https://ai.baidu.com', desc: '百度AI', rate: 5 },
    { name: '腾讯混元', url: 'https://hunyuan.tencent.com', desc: '腾讯混元大模型', rate: 5 },
    { name: '网易玉言', url: 'https://ai.163.com', desc: '网易玉言', rate: 5 },
    { name: '京东言犀', url: 'https://yanxi.jd.com', desc: '京东言犀', rate: 5 },
    { name: '滴滴DiDi AI', url: 'https://www.didiglobal.com', desc: '滴滴AI', rate: 5 },
    { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI搜索引擎', rate: 5 },
    { name: 'Poe', url: 'https://poe.com', desc: '多模型聚合', rate: 5 },
  ]
};

// ============== 2. 🎨 AI图像生成 ==============
const aiImageGeneration = {
  title: '🎨 AI图像生成',
  websites: [
    { name: 'Midjourney', url: 'https://www.midjourney.com', desc: '最强AI绘画', rate: 5 },
    { name: 'DALL-E 3', url: 'https://openai.com/dall-e-3', desc: 'OpenAI绘图', rate: 5 },
    { name: 'Stable Diffusion', url: 'https://stablediffusionweb.com', desc: '开源绘画', rate: 5 },
    { name: 'Leonardo AI', url: 'https://leonardo.ai', desc: '专业AI绘画', rate: 5 },
    { name: 'Ideogram', url: 'https://ideogram.ai', desc: 'AI文字绘图', rate: 5 },
    { name: 'Playground AI', url: 'https://playgroundai.com', desc: 'AI绘画平台', rate: 5 },
    { name: 'SeaArt AI', url: 'https://www.seaart.ai', desc: 'AI绘画', rate: 5 },
    { name: 'LiblibAI', url: 'https://www.liblib.ai', desc: '哩布哩布AI', rate: 5 },
    { name: 'Tusi', url: 'https://tusi.art', desc: '图师AI', rate: 5 },
    { name: '哩咔', url: 'https://lika.art', desc: 'AI绘画', rate: 5 },
    { name: '6pen Art', url: 'https://6pen.art', desc: 'AI绘画', rate: 5 },
    { name: '文心一格', url: 'https://yige.baidu.com', desc: '百度AI绘画', rate: 5 },
    { name: '通义万相', url: 'https://wanxiang.aliyun.com', desc: '阿里AI绘画', rate: 5 },
    { name: '即梦AI', url: 'https://jimeng.jianying.com', desc: '字节AI绘画', rate: 5 },
    { name: '可画AI', url: 'https://www.canva.cn', desc: 'Canva AI', rate: 5 },
    { name: 'BlueWillow', url: 'https://www.bluewillow.ai', desc: '免费AI绘画', rate: 5 },
    { name: 'Tensor.Art', url: 'https://tensor.art', desc: 'AI绘画社区', rate: 5 },
    { name: 'Civitai', url: 'https://civitai.com', desc: 'SD模型社区', rate: 5 },
    { name: 'Hugging Face', url: 'https://huggingface.co', desc: 'AI模型平台', rate: 5 },
    { name: 'PixAI', url: 'https://pixai.art', desc: '二次元AI绘画', rate: 5 },
    { name: 'Yodayo', url: 'https://yodayo.com', desc: 'AI动漫绘画', rate: 5 },
    { name: 'NovelAI', url: 'https://novelai.net', desc: 'AI小说绘画', rate: 5 },
    { name: 'Krea AI', url: 'https://www.krea.ai', desc: '实时AI绘画', rate: 5 },
    { name: 'Magnific AI', url: 'https://magnific.ai', desc: 'AI图像增强', rate: 5 },
    { name: 'Topaz Labs', url: 'https://www.topazlabs.com', desc: 'AI图片修复', rate: 5 },
  ]
};

// ============== 3. 🎬 AI视频生成 ==============
const aiVideoGeneration = {
  title: '🎬 AI视频生成',
  websites: [
    { name: 'Sora', url: 'https://openai.com/sora', desc: 'OpenAI视频生成', rate: 5 },
    { name: 'Pika Labs', url: 'https://pika.art', desc: 'Pika视频生成', rate: 5 },
    { name: 'Runway ML', url: 'https://runwayml.com', desc: 'Gen-2视频生成', rate: 5 },
    { name: 'HeyGen', url: 'https://www.heygen.com', desc: 'AI数字人', rate: 5 },
    { name: 'D-ID', url: 'https://www.d-id.com', desc: 'AI数字人', rate: 5 },
    { name: 'Morph Studio', url: 'https://www.morphstudio.com', desc: 'AI视频', rate: 5 },
    { name: 'Moonvalley', url: 'https://moonvalley.ai', desc: 'AI视频生成', rate: 5 },
    { name: 'ModelScope', url: 'https://www.modelscope.cn', desc: '达摩院模型', rate: 5 },
    { name: '剪映AI', url: 'https://www.capcut.cn', desc: '剪映AI创作', rate: 5 },
    { name: '即梦AI', url: 'https://jimeng.jianying.com', desc: '即梦AI视频', rate: 5 },
    { name: '可灵AI', url: 'https://klingai.com', desc: '快手可灵', rate: 5 },
    { name: '生数', url: 'https://www.vidu.studio', desc: '生数Vidu', rate: 5 },
    { name: '智谱清影', url: 'https://chatglm.cn/video', desc: '智谱视频', rate: 5 },
    { name: '通义千问视频', url: 'https://tongyi.aliyun.com', desc: '阿里视频生成', rate: 5 },
    { name: 'Dreamina', url: 'https://dreamina.doubao.com', desc: '豆包视频生成', rate: 5 },
    { name: 'AnimateDiff', url: 'https://animatediff.github.io', desc: '开源动图', rate: 5 },
    { name: 'Stable Video', url: 'https://stability.ai', desc: 'Stable Video', rate: 5 },
    { name: 'Kaiber', url: 'https://kaiber.ai', desc: 'AI音乐视频', rate: 5 },
    { name: 'Wav2Lip', url: 'https://wav2lip.github.io', desc: 'AI对口型', rate: 5 },
    { name: 'ElevenLabs', url: 'https://elevenlabs.io', desc: 'AI语音克隆', rate: 5 },
    { name: 'Descript', url: 'https://www.descript.com', desc: 'AI视频编辑', rate: 5 },
    { name: 'Topaz Video AI', url: 'https://www.topazlabs.com', desc: '视频增强', rate: 5 },
    { name: ' Davinci Resolve AI', url: 'https://www.blackmagicdesign.com', desc: '达芬奇AI', rate: 5 },
    { name: ' runway Gen-3', url: 'https://runwayml.com', desc: 'Runway最新', rate: 5 },
    { name: 'Hedra', url: 'https://www.hedra.com', desc: 'Hedra AI视频', rate: 5 },
  ]
};

// ============== 4. 💻 AI编程助手 ==============
const aiCodingTools = {
  title: '💻 AI编程助手',
  websites: [
    { name: 'GitHub Copilot', url: 'https://github.com/copilot', desc: 'GitHub编程助手', rate: 5 },
    { name: 'Cursor', url: 'https://www.cursor.sh', desc: 'AI代码编辑器', rate: 5 },
    { name: 'CodeLlama', url: 'https://ai.meta.com', desc: 'Meta代码模型', rate: 5 },
    { name: 'Codeium', url: 'https://codeium.com', desc: '免费代码补全', rate: 5 },
    { name: 'Tabnine', url: 'https://www.tabnine.com', desc: 'AI代码助手', rate: 5 },
    { name: 'Sourcegraph Cody', url: 'https://sourcegraph.com', desc: 'AI代码阅读', rate: 5 },
    { name: 'Amazon CodeWhisperer', url: 'https://aws.amazon.com', desc: 'AWS编程助手', rate: 5 },
    { name: '通义灵码', url: 'https://tongyi.aliyun.com', desc: '阿里灵码', rate: 5 },
    { name: '豆包编程助手', url: 'https://www.doubao.com', desc: '字节编程助手', rate: 5 },
    { name: '讯飞星火编程', url: 'https://xinghuo.xfyun.cn', desc: '讯飞编程', rate: 5 },
    { name: 'Fitten Code', url: 'https://code.fittentech.com', desc: 'AI编程助手', rate: 5 },
    { name: 'Devin', url: 'https://www.cognition.ai', desc: 'AI程序员', rate: 5 },
    { name: 'SWE-agent', url: 'https://swe-agent.com', desc: '开源Devin', rate: 5 },
    { name: 'OpenDevin', url: 'https://github.com/OpenDevin', desc: '开源Devin', rate: 5 },
    { name: 'Windsurf', url: 'https://codeium.com', desc: 'Codeium编辑器', rate: 5 },
    { name: 'Continue', url: 'https://continue.dev', desc: 'VS Code插件', rate: 5 },
    { name: 'Mutable AI', url: 'https://mutable.ai', desc: 'AI编程', rate: 5 },
    { name: 'CodeGeeX', url: 'https://codegeex.cn', desc: '智谱编程助手', rate: 5 },
    { name: 'DeepSeek Coder', url: 'https://chat.deepseek.com', desc: '深度编程', rate: 5 },
    { name: 'StarCoder', url: 'https://huggingface.co', desc: '开源代码模型', rate: 5 },
    { name: 'Replit AI', url: 'https://replit.com', desc: '在线编程', rate: 5 },
    { name: 'Codestral', url: 'https://mistral.ai', desc: 'Mistral代码模型', rate: 5 },
    { name: 'Phind', url: 'https://www.phind.com', desc: 'AI编程搜索引擎', rate: 5 },
    { name: 'Exo', url: 'https://exo.dev', desc: 'AI编程助手', rate: 5 },
    { name: 'Pieces', url: 'https://pieces.app', desc: '代码片段管理', rate: 5 },
  ]
};

// ============== 5. 📝 AI内容创作 ==============
const aiContentWriting = {
  title: '📝 AI内容创作',
  websites: [
    { name: 'Jasper', url: 'https://www.jasper.ai', desc: 'AI营销文案', rate: 5 },
    { name: 'Copy.ai', url: 'https://www.copy.ai', desc: 'AI文案写作', rate: 5 },
    { name: 'Writesonic', url: 'https://writesonic.com', desc: 'AI写作', rate: 5 },
    { name: 'Rytr', url: 'https://rytr.me', desc: 'AI写作助手', rate: 5 },
    { name: '秘塔写作猫', url: 'https://xiezuocat.com', desc: 'AI写作纠错', rate: 5 },
    { name: '豆包写作', url: 'https://www.doubao.com', desc: 'AI写作', rate: 5 },
    { name: '通义智文', url: 'https://tongyi.aliyun.com', desc: '阿里AI写作', rate: 5 },
    { name: '讯飞智文', url: 'https://zhiwen.xfyun.cn', desc: '讯飞AI写作', rate: 5 },
    { name: '新笔趣阁', url: 'https://www.xbqq.com', desc: 'AI小说', rate: 5 },
    { name: 'NovelAI', url: 'https://novelai.net', desc: 'AI小说写作', rate: 5 },
    { name: 'Claude 写作', url: 'https://claude.ai', desc: '长文写作', rate: 5 },
    { name: 'GPT-4o 写作', url: 'https://chat.openai.com', desc: '全能写作', rate: 5 },
    { name: 'Notion AI', url: 'https://www.notion.so', desc: 'Notion AI', rate: 5 },
    { name: 'Craft AI', url: 'https://www.craft.do', desc: '文档AI', rate: 5 },
    { name: 'Grammarly', url: 'https://www.grammarly.com', desc: '语法检查', rate: 5 },
    { name: 'DeepL Write', url: 'https://www.deepl.com', desc: 'AI润色', rate: 5 },
    { name: 'LanguageTool', url: 'https://languagetool.org', desc: '语法检查', rate: 5 },
    { name: 'ProWritingAid', url: 'https://prowritingaid.com', desc: '写作助手', rate: 5 },
    { name: 'Scrivener AI', url: 'https://www.literatureandlatte.com', desc: '写作软件', rate: 5 },
    { name: 'Sudowrite', url: 'https://www.sudowrite.com', desc: '小说写作', rate: 5 },
    { name: 'InstaText', url: 'https://www.instatext.io', desc: '文本改写', rate: 5 },
    { name: 'Wordtune', url: 'https://www.wordtune.com', desc: '句子改写', rate: 5 },
    { name: 'QuillBot', url: 'https://quillbot.com', desc: 'AI改写', rate: 5 },
    { name: 'ChatDOC', url: 'https://chatdoc.com', desc: '文档问答', rate: 5 },
    { name: 'ChatPDF', url: 'https://www.chatpdf.com', desc: 'PDF问答', rate: 5 },
  ]
};

// ============== 6. 🔊 AI语音合成 ==============
const aiVoiceTools = {
  title: '🔊 AI语音合成',
  websites: [
    { name: 'ElevenLabs', url: 'https://elevenlabs.io', desc: '最强AI语音', rate: 5 },
    { name: 'Play.ht', url: 'https://play.ht', desc: 'AI语音克隆', rate: 5 },
    { name: 'Murf AI', url: 'https://murf.ai', desc: 'AI配音', rate: 5 },
    { name: 'WellSaid Labs', url: 'https://wellsaidlabs.com', desc: 'AI语音', rate: 5 },
    { name: 'Speechify', url: 'https://speechify.com', desc: '文字转语音', rate: 5 },
    { name: '讯飞配音', url: 'https://peiyin.xunfei.cn', desc: '讯飞配音', rate: 5 },
    { name: '标贝悦读', url: 'https://yuedu.data-baker.com', desc: '标贝配音', rate: 5 },
    { name: '百度智能配音', url: 'https://ai.baidu.com', desc: '百度配音', rate: 5 },
    { name: '阿里云语音', url: 'https://ai.aliyun.com', desc: '阿里语音', rate: 5 },
    { name: '腾讯云语音', url: 'https://cloud.tencent.com', desc: '腾讯语音', rate: 5 },
    { name: '豆包AI配音', url: 'https://www.doubao.com', desc: '豆包配音', rate: 5 },
    { name: '剪映智能配音', url: 'https://www.capcut.cn', desc: '剪映配音', rate: 5 },
    { name: 'Resemble AI', url: 'https://www.resemble.ai', desc: '语音克隆', rate: 5 },
    { name: 'Descript Overdub', url: 'https://www.descript.com', desc: '语音克隆', rate: 5 },
    { name: 'Suno AI', url: 'https://suno.com', desc: 'AI音乐生成', rate: 5 },
    { name: 'Udio', url: 'https://www.udio.com', desc: 'AI音乐', rate: 5 },
    { name: 'Soundraw', url: 'https://soundraw.io', desc: 'AI音乐', rate: 5 },
    { name: 'Beatoven AI', url: 'https://www.beatoven.ai', desc: 'AI配乐', rate: 5 },
    { name: 'Epidemic Sound', url: 'https://www.epidemicsound.com', desc: '版权音乐', rate: 5 },
    { name: 'Artlist', url: 'https://artlist.io', desc: '音乐素材', rate: 5 },
    { name: 'AudioJungle', url: 'https://audiojungle.net', desc: '音效素材', rate: 5 },
    { name: 'Freesound', url: 'https://freesound.org', desc: '免费音效', rate: 5 },
    { name: 'YouTube音效库', url: 'https://www.youtube.com', desc: '免费音效', rate: 5 },
    { name: '网易天音', url: 'https://tianyin.163.com', desc: '网易AI音乐', rate: 5 },
    { name: '天工SkyMusic', url: 'https://www.tiangong.cn', desc: '天工AI音乐', rate: 5 },
  ]
};

// ============== 7. 🧠 AI效率工具 ==============
const aiProductivity = {
  title: '🧠 AI效率工具',
  websites: [
    { name: 'Notion AI', url: 'https://www.notion.so', desc: 'AI笔记', rate: 5 },
    { name: 'Obsidian Canvas AI', url: 'https://obsidian.md', desc: '黑曜石AI', rate: 5 },
    { name: 'Mem AI', url: 'https://mem.ai', desc: 'AI记忆', rate: 5 },
    { name: 'Rewind AI', url: 'https://www.rewind.ai', desc: '记忆回溯', rate: 5 },
    { name: 'Tana AI', url: 'https://tana.inc', desc: 'Tana笔记AI', rate: 5 },
    { name: 'Coda AI', url: 'https://coda.io', desc: '文档AI', rate: 5 },
    { name: 'Gamma AI', url: 'https://gamma.app', desc: 'AI演示文稿', rate: 5 },
    { name: 'Tome', url: 'https://tome.app', desc: 'AI做PPT', rate: 5 },
    { name: 'Beautiful AI', url: 'https://www.beautiful.ai', desc: 'AI做PPT', rate: 5 },
    { name: 'SlidesAI', url: 'https://www.slidesai.io', desc: 'PPT插件', rate: 5 },
    { name: 'MindMeister AI', url: 'https://www.mindmeister.com', desc: 'AI思维导图', rate: 5 },
    { name: 'Xmind AI', url: 'https://www.xmind.cn', desc: 'XMind AI', rate: 5 },
    { name: 'Taskade AI', url: 'https://www.taskade.com', desc: 'AI任务管理', rate: 5 },
    { name: 'Monday AI', url: 'https://monday.com', desc: '项目管理AI', rate: 5 },
    { name: 'ClickUp AI', url: 'https://clickup.com', desc: '效率AI', rate: 5 },
    { name: 'Fireflies AI', url: 'https://fireflies.ai', desc: '会议纪要', rate: 5 },
    { name: 'Otter.ai', url: 'https://otter.ai', desc: '实时转录', rate: 5 },
    { name: 'Airgram', url: 'https://www.airgram.io', desc: '会议助理', rate: 5 },
    { name: 'Fathom', url: 'https://fathom.video', desc: '会议记录', rate: 5 },
    { name: 'Calendly AI', url: 'https://calendly.com', desc: '日程AI', rate: 5 },
    { name: 'Trevor AI', url: 'https://www.trevorai.com', desc: '时间规划', rate: 5 },
    { name: 'Motion', url: 'https://www.usemotion.com', desc: 'AI日程', rate: 5 },
    { name: 'Clara Labs', url: 'https://claralabs.com', desc: 'AI邮件助理', rate: 5 },
    { name: 'Superhuman AI', url: 'https://superhuman.com', desc: '邮件AI', rate: 5 },
    { name: 'EmailTriager', url: 'https://emailtriager.com', desc: '邮件整理', rate: 5 },
  ]
};

// ============== 8. 🔬 AI专业工具 ==============
const aiProfessionalTools = {
  title: '🔬 AI专业工具',
  websites: [
    { name: 'ChatPDF', url: 'https://www.chatpdf.com', desc: 'PDF对话', rate: 5 },
    { name: 'ChatDOC', url: 'https://chatdoc.com', desc: '文档分析', rate: 5 },
    { name: 'Humata AI', url: 'https://www.humata.ai', desc: '论文分析', rate: 5 },
    { name: 'Paperpal', url: 'https://paperpal.com', desc: '学术写作', rate: 5 },
    { name: 'Scholarcy', url: 'https://www.scholarcy.com', desc: '论文总结', rate: 5 },
    { name: 'Consensus', url: 'https://consensus.app', desc: '学术搜索', rate: 5 },
    { name: 'Elicit', url: 'https://elicit.com', desc: 'AI文献综述', rate: 5 },
    { name: 'ResearchRabbit', url: 'https://www.researchrabbit.ai', desc: '文献管理', rate: 5 },
    { name: 'Litmaps', url: 'https://www.litmaps.com', desc: '文献图谱', rate: 5 },
    { name: 'Connected Papers', url: 'https://www.connectedpapers.com', desc: '论文关系图', rate: 5 },
    { name: 'Zotero ChatGPT', url: 'https://www.zotero.org', desc: '文献管理AI', rate: 5 },
    { name: 'Mendeley AI', url: 'https://www.mendeley.com', desc: '文献AI', rate: 5 },
    { name: 'MathGPT', url: 'https://mathgpt.com', desc: 'AI数学', rate: 5 },
    { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com', desc: '知识引擎', rate: 5 },
    { name: 'Symbolab', url: 'https://www.symbolab.com', desc: '数学求解', rate: 5 },
    { name: 'Photomath', url: 'https://photomath.com', desc: '拍照解题', rate: 5 },
    { name: 'Chegg', url: 'https://www.chegg.com', desc: '作业辅导', rate: 5 },
    { name: 'Course Hero', url: 'https://www.coursehero.com', desc: '学习资源', rate: 5 },
    { name: 'Quizlet AI', url: 'https://quizlet.com', desc: 'AI闪卡', rate: 5 },
    { name: 'Khanmigo', url: 'https://www.khanacademy.org', desc: 'AI家教', rate: 5 },
    { name: 'Duolingo Max', url: 'https://www.duolingo.com', desc: '语言学AI', rate: 5 },
    { name: 'DeepL翻译', url: 'https://www.deepl.com', desc: 'AI翻译', rate: 5 },
    { name: 'GPT-4o翻译', url: 'https://chat.openai.com', desc: '全能翻译', rate: 5 },
    { name: '有道翻译', url: 'https://fanyi.youdao.com', desc: '网易翻译', rate: 5 },
    { name: 'Google翻译', url: 'https://translate.google.com', desc: '谷歌翻译', rate: 5 },
  ]
};

const aiCategory26 = createCategory('🤖 AI大模型与对话', '', [
  aiChatModels
]);

const aiCategory27 = createCategory('🎨 AI内容创作大全', '', [
  aiImageGeneration,
  aiVideoGeneration,
  aiContentWriting,
  aiVoiceTools
]);

const aiCategory28 = createCategory('💻 AI编程与效率', '', [
  aiCodingTools,
  aiProductivity
]);

const aiCategory29 = createCategory('🔬 AI专业工具', '', [
  aiProfessionalTools
]);

db.push(aiCategory26, aiCategory27, aiCategory28, aiCategory29);

function countAll(root, count = 0) {
  for (const item of root) {
    if (item.nav) count += countAll(item.nav);
    if (item.url) count++;
  }
  return count;
}

const total = countAll(db);
const newTotal = countAll(aiCategory26.nav) + countAll(aiCategory27.nav) + countAll(aiCategory28.nav) + countAll(aiCategory29.nav);

console.log(`✅ 新增分类: ${aiCategory26.title}`);
console.log(`   └─ 包含: ${aiCategory26.nav.length} 个子分类, ${countAll(aiCategory26.nav)} 个网址`);
console.log(`✅ 新增分类: ${aiCategory27.title}`);
console.log(`   └─ 包含: ${aiCategory27.nav.length} 个子分类, ${countAll(aiCategory27.nav)} 个网址`);
console.log(`✅ 新增分类: ${aiCategory28.title}`);
console.log(`   └─ 包含: ${aiCategory28.nav.length} 个子分类, ${countAll(aiCategory28.nav)} 个网址`);
console.log(`✅ 新增分类: ${aiCategory29.title}`);
console.log(`   └─ 包含: ${aiCategory29.nav.length} 个子分类, ${countAll(aiCategory29.nav)} 个网址`);
console.log(`\n📊 本轮新增: ${newTotal} 个AI应用`);
console.log(`\n🎉🎉🎉 数据库总计: ${total} 个优质网址 🎉🎉🎉`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('\n🚀 AI应用全面扩充完成！对话、绘画、视频、编程、创作全覆盖！🚀');
