import type { VocabData } from "@/lib/types";

// JLPT N3 vocabulary — Shinzaizen Master style, chapter-wise by part of speech.
// Furigana notation: kanji readings inline as 漢字[かんじ] (compound runs).
// Total: 180 words (60 Nouns, 40 Verbs, 25 Adjectives, 15 Adverbs, 5 Particles,
// 10 Conjunctions, 15 Onomatopoeia, 10 Idioms).
// IDs: vn3-541 .. vn3-720.
// Deliberately avoids duplicating any word taught in vocabN3A / vocabN3B.

export const vocabN3D: VocabData[] = [
  // ============================================================
  // Nouns — 60 words (vn3-541 .. vn3-600)
  // ============================================================
  {
    id: "vn3-541",
    word: "見積もり",
    reading: "みつもり",
    romaji: "mitsumori",
    meaning: "estimate",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "見積[みつも]りを出[だ]す。",
      en: "Submit an estimate."
    }
  },
  {
    id: "vn3-542",
    word: "工場",
    reading: "こうじょう",
    romaji: "koujou",
    meaning: "factory",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "工場[こうじょう]で働[はたら]く。",
      en: "Work in a factory."
    }
  },
  {
    id: "vn3-543",
    word: "研修",
    reading: "けんしゅう",
    romaji: "kenshuu",
    meaning: "training",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "新入社員[しんにゅうしゃいん]の研修[けんしゅう]を受[う]ける。",
      en: "Take new-employee training."
    }
  },
  {
    id: "vn3-544",
    word: "応募",
    reading: "おうぼ",
    romaji: "oubo",
    meaning: "application",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "応募[おうぼ]用紙[ようし]を出[だ]す。",
      en: "Submit an application form."
    }
  },
  {
    id: "vn3-545",
    word: "採用",
    reading: "さいよう",
    romaji: "saiyou",
    meaning: "employment, hiring",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "新[あたら]しい人[ひと]を採用[さいよう]する。",
      en: "Hire a new person."
    }
  },
  {
    id: "vn3-546",
    word: "求人",
    reading: "きゅうじん",
    romaji: "kyuujin",
    meaning: "job offer",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "求人[きゅうじん]広告[こうこく]を見[み]る。",
      en: "Look at job advertisements."
    }
  },
  {
    id: "vn3-547",
    word: "履歴書",
    reading: "りれきしょ",
    romaji: "rirekisho",
    meaning: "resume",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "履歴書[りれきしょ]を書[か]く。",
      en: "Write a resume."
    }
  },
  {
    id: "vn3-548",
    word: "職務",
    reading: "しょくむ",
    romaji: "shokumu",
    meaning: "duty",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "職務[しょくむ]に忠実[ちゅうじつ]だ。",
      en: "Loyal to one's duties."
    }
  },
  {
    id: "vn3-549",
    word: "職場",
    reading: "しょくば",
    romaji: "shokuba",
    meaning: "workplace",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "職場[しょくば]の仲間[なかま]と話[はな]す。",
      en: "Talk with workplace colleagues."
    }
  },
  {
    id: "vn3-550",
    word: "残業",
    reading: "ざんぎょう",
    romaji: "zangyou",
    meaning: "overtime work",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "夜[よる]遅[おそ]くまで残業[ざんぎょう]する。",
      en: "Work overtime until late at night."
    }
  },
  {
    id: "vn3-551",
    word: "勤務",
    reading: "きんむ",
    romaji: "kinmu",
    meaning: "service, duty",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "勤務[きんむ]時間[じかん]を守[まも]る。",
      en: "Observe working hours."
    }
  },
  {
    id: "vn3-552",
    word: "賃金",
    reading: "ちんぎん",
    romaji: "chingin",
    meaning: "wages",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "賃金[ちんぎん]を上[あ]げる。",
      en: "Raise wages."
    }
  },
  {
    id: "vn3-553",
    word: "賞与",
    reading: "しょうよ",
    romaji: "shouyo",
    meaning: "bonus",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "夏[なつ]に賞与[しょうよ]が出[で]る。",
      en: "A bonus is given in summer."
    }
  },
  {
    id: "vn3-554",
    word: "昇進",
    reading: "しょうしん",
    romaji: "shoushin",
    meaning: "promotion",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "昇進[しょうしん]の試験[しけん]を受[う]ける。",
      en: "Take a promotion exam."
    }
  },
  {
    id: "vn3-555",
    word: "配属",
    reading: "はいぞく",
    romaji: "haizoku",
    meaning: "assignment",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "営業[えいぎょう]部[ぶ]に配属[はいぞく]される。",
      en: "Be assigned to the sales department."
    }
  },
  {
    id: "vn3-556",
    word: "部署",
    reading: "ぶしょ",
    romaji: "busho",
    meaning: "department",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "部署[ぶしょ]を変[か]える。",
      en: "Change departments."
    }
  },
  {
    id: "vn3-557",
    word: "課長",
    reading: "かちょう",
    romaji: "kachou",
    meaning: "section chief",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "課長[かちょう]に報告[ほうこく]する。",
      en: "Report to the section chief."
    }
  },
  {
    id: "vn3-558",
    word: "社長",
    reading: "しゃちょう",
    romaji: "shachou",
    meaning: "company president",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "社長[しゃちょう]に直[じか]に話[はな]す。",
      en: "Talk directly with the president."
    }
  },
  {
    id: "vn3-559",
    word: "取引先",
    reading: "とりひきさき",
    romaji: "torihikisaki",
    meaning: "client",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "取引先[とりひきさき]を訪問[ほうもん]する。",
      en: "Visit a client."
    }
  },
  {
    id: "vn3-560",
    word: "顧客",
    reading: "こきゃく",
    romaji: "kokyaku",
    meaning: "customer",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "顧客[こきゃく]の声[こえ]を聞[き]く。",
      en: "Listen to the customer's voice."
    }
  },
  {
    id: "vn3-561",
    word: "納品",
    reading: "のうひん",
    romaji: "nouhin",
    meaning: "delivery",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "商品[しょうひん]を納品[のうひん]する。",
      en: "Deliver products."
    }
  },
  {
    id: "vn3-562",
    word: "納期",
    reading: "のうき",
    romaji: "nouki",
    meaning: "delivery date",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "納期[のうき]を守[まも]る。",
      en: "Meet the delivery date."
    }
  },
  {
    id: "vn3-563",
    word: "見積書",
    reading: "みつもりしょ",
    romaji: "mitsumorisho",
    meaning: "quotation",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "見積書[みつもりしょ]を作成[さくせい]する。",
      en: "Create a quotation."
    }
  },
  {
    id: "vn3-564",
    word: "請求書",
    reading: "せいきゅうしょ",
    romaji: "seikyuusho",
    meaning: "invoice",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "請求書[せいきゅうしょ]を送[おく]る。",
      en: "Send an invoice."
    }
  },
  {
    id: "vn3-565",
    word: "領収書",
    reading: "りょうしゅうしょ",
    romaji: "ryoushuusho",
    meaning: "receipt",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "領収書[りょうしゅうしょ]をもらう。",
      en: "Receive a receipt."
    }
  },
  {
    id: "vn3-566",
    word: "契約",
    reading: "けいやく",
    romaji: "keiyaku",
    meaning: "contract",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "契約[けいやく]を結[むす]ぶ。",
      en: "Conclude a contract."
    }
  },
  {
    id: "vn3-567",
    word: "契約違反",
    reading: "けいやくいはん",
    romaji: "keiyakuihan",
    meaning: "breach of contract",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "契約違反[けいやくいはん]で訴[うった]える。",
      en: "Sue for breach of contract."
    }
  },
  {
    id: "vn3-568",
    word: "取引",
    reading: "とりひき",
    romaji: "torihiki",
    meaning: "transaction",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "海外[かいがい]と取引[とりひき]する。",
      en: "Trade with overseas."
    }
  },
  {
    id: "vn3-569",
    word: "会議",
    reading: "かいぎ",
    romaji: "kaigi",
    meaning: "meeting",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "会議[かいぎ]が長引[ながび]く。",
      en: "The meeting drags on."
    }
  },
  {
    id: "vn3-570",
    word: "打ち合わせ",
    reading: "うちあわせ",
    romaji: "uchiawase",
    meaning: "meeting, briefing",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "明日[あした]打[う]ち合[あ]わせがある。",
      en: "There is a meeting tomorrow."
    }
  },
  {
    id: "vn3-571",
    word: "予定表",
    reading: "よていひょう",
    romaji: "yoteihyou",
    meaning: "schedule table",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "予定表[よていひょう]を見[み]る。",
      en: "Look at the schedule table."
    }
  },
  {
    id: "vn3-572",
    word: "規定",
    reading: "きてい",
    romaji: "kitei",
    meaning: "regulation",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "規定[きてい]に従[したが]う。",
      en: "Follow the regulations."
    }
  },
  {
    id: "vn3-573",
    word: "条件",
    reading: "じょうけん",
    romaji: "jouken",
    meaning: "condition",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "条件[じょうけん]を提示[ていじ]する。",
      en: "Present conditions."
    }
  },
  {
    id: "vn3-574",
    word: "基準",
    reading: "きじゅん",
    romaji: "kijun",
    meaning: "standard",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "高[たか]い基準[きじゅん]を設[もう]ける。",
      en: "Set a high standard."
    }
  },
  {
    id: "vn3-575",
    word: "限度",
    reading: "げんど",
    romaji: "gendo",
    meaning: "limit",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "限度[げんど]を超[こ]える。",
      en: "Exceed the limit."
    }
  },
  {
    id: "vn3-576",
    word: "限界",
    reading: "げんかい",
    romaji: "genkai",
    meaning: "limit, boundary",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "限界[げんかい]に達[たっ]する。",
      en: "Reach the limit."
    }
  },
  {
    id: "vn3-577",
    word: "対象",
    reading: "たいしょう",
    romaji: "taishou",
    meaning: "target, subject",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "対象[たいしょう]を絞[しぼ]る。",
      en: "Narrow down the target."
    }
  },
  {
    id: "vn3-578",
    word: "形式",
    reading: "けいしき",
    romaji: "keishiki",
    meaning: "form, format",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "形式[けいしき]に合[あ]わせる。",
      en: "Match the format."
    }
  },
  {
    id: "vn3-579",
    word: "性質",
    reading: "せいしつ",
    romaji: "seishitsu",
    meaning: "nature, quality",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "性質[せいしつ]が違[ちが]う。",
      en: "The nature differs."
    }
  },
  {
    id: "vn3-580",
    word: "特徴",
    reading: "とくちょう",
    romaji: "tokuchou",
    meaning: "feature",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "特徴[とくちょう]を説明[せつめい]する。",
      en: "Explain the features."
    }
  },
  {
    id: "vn3-581",
    word: "長所",
    reading: "ちょうしょ",
    romaji: "chousho",
    meaning: "strong point",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "長所[ちょうしょ]を見[み]つける。",
      en: "Find strengths."
    }
  },
  {
    id: "vn3-582",
    word: "短所",
    reading: "たんしょ",
    romaji: "tansho",
    meaning: "shortcoming",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "短所[たんしょ]を直[なお]す。",
      en: "Fix shortcomings."
    }
  },
  {
    id: "vn3-583",
    word: "利点",
    reading: "りてん",
    romaji: "riten",
    meaning: "merit, advantage",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "利点[りてん]が多[おお]い。",
      en: "There are many merits."
    }
  },
  {
    id: "vn3-584",
    word: "欠点",
    reading: "けってん",
    romaji: "ketten",
    meaning: "weak point",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "欠点[けってん]を指摘[してき]する。",
      en: "Point out flaws."
    }
  },
  {
    id: "vn3-585",
    word: "成績",
    reading: "せいせき",
    romaji: "seiseki",
    meaning: "grade, performance",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "成績[せいせき]が上[あ]がる。",
      en: "Grades go up."
    }
  },
  {
    id: "vn3-586",
    word: "評価",
    reading: "ひょうか",
    romaji: "hyouka",
    meaning: "evaluation",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "公正[こうせい]に評価[ひょうか]する。",
      en: "Evaluate fairly."
    }
  },
  {
    id: "vn3-587",
    word: "判断",
    reading: "はんだん",
    romaji: "handan",
    meaning: "judgment",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "自分[じぶん]で判断[はんだん]する。",
      en: "Judge for oneself."
    }
  },
  {
    id: "vn3-588",
    word: "責任",
    reading: "せきにん",
    romaji: "sekinin",
    meaning: "responsibility",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "責任[せきにん]を取[と]る。",
      en: "Take responsibility."
    }
  },
  {
    id: "vn3-589",
    word: "義務",
    reading: "ぎむ",
    romaji: "gimu",
    meaning: "obligation",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "義務[ぎむ]を果[はた]す。",
      en: "Fulfill obligations."
    }
  },
  {
    id: "vn3-590",
    word: "権利",
    reading: "けんり",
    romaji: "kenri",
    meaning: "right",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "権利[けんり]を主張[しゅちょう]する。",
      en: "Assert rights."
    }
  },
  {
    id: "vn3-591",
    word: "利益",
    reading: "りえき",
    romaji: "rieki",
    meaning: "profit",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "利益[りえき]を追求[ついきゅう]する。",
      en: "Pursue profit."
    }
  },
  {
    id: "vn3-592",
    word: "損失",
    reading: "そんしつ",
    romaji: "sonshitsu",
    meaning: "loss",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "多大[ただい]な損失[そんしつ]を出[だ]す。",
      en: "Incur heavy losses."
    }
  },
  {
    id: "vn3-593",
    word: "収益",
    reading: "しゅうえき",
    romaji: "shuueki",
    meaning: "earnings",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "収益[しゅうえき]が伸[の]びる。",
      en: "Earnings grow."
    }
  },
  {
    id: "vn3-594",
    word: "経費",
    reading: "けいひ",
    romaji: "keihi",
    meaning: "expenses",
    level: "N3",
    lesson: 11,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "経費[けいひ]を削減[さくげん]する。",
      en: "Cut expenses."
    }
  },
  {
    id: "vn3-595",
    word: "予算",
    reading: "よさん",
    romaji: "yosan",
    meaning: "budget",
    level: "N3",
    lesson: 12,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "予算[よさん]を組[く]む。",
      en: "Compile a budget."
    }
  },
  {
    id: "vn3-596",
    word: "売上",
    reading: "うりあげ",
    romaji: "uriage",
    meaning: "sales",
    level: "N3",
    lesson: 12,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "売上[うりあげ]が増[ふ]える。",
      en: "Sales increase."
    }
  },
  {
    id: "vn3-597",
    word: "利子",
    reading: "りし",
    romaji: "rishi",
    meaning: "interest",
    level: "N3",
    lesson: 12,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "利子[りし]が付[つ]く。",
      en: "Interest accrues."
    }
  },
  {
    id: "vn3-598",
    word: "株",
    reading: "かぶ",
    romaji: "kabu",
    meaning: "stock",
    level: "N3",
    lesson: 12,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "株[かぶ]を買[か]う。",
      en: "Buy stock."
    }
  },
  {
    id: "vn3-599",
    word: "株価",
    reading: "かぶか",
    romaji: "kabuka",
    meaning: "stock price",
    level: "N3",
    lesson: 12,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "株価[かぶか]が上[あ]がる。",
      en: "Stock prices rise."
    }
  },
  {
    id: "vn3-600",
    word: "市場",
    reading: "しじょう",
    romaji: "shijou",
    meaning: "market",
    level: "N3",
    lesson: 12,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "海外[かいがい]市場[しじょう]に進出[しんしゅつ]する。",
      en: "Expand into overseas markets."
    }
  },
  // ============================================================
  // Verbs — 40 words (vn3-601 .. vn3-640)
  // ============================================================
  {
    id: "vn3-601",
    word: "雇う",
    reading: "やとう",
    romaji: "yatou",
    meaning: "to employ",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "新[あたら]しい人[ひと]を雇[やと]う。",
      en: "Hire a new person."
    }
  },
  {
    id: "vn3-602",
    word: "申し込む",
    reading: "もうしこむ",
    romaji: "moushikomu",
    meaning: "to apply, to offer",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "講座[こうざ]に申[もう]し込[こ]む。",
      en: "Apply for a course."
    }
  },
  {
    id: "vn3-603",
    word: "辞める",
    reading: "やめる",
    romaji: "yameru",
    meaning: "to quit",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "会社[かいしゃ]を辞[や]める。",
      en: "Quit the company."
    }
  },
  {
    id: "vn3-604",
    word: "辞職する",
    reading: "じしょくする",
    romaji: "jishokusuru",
    meaning: "to resign",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "責任[せきにん]を取[と]って辞職[じしょく]する。",
      en: "Resign, taking responsibility."
    }
  },
  {
    id: "vn3-605",
    word: "昇進する",
    reading: "しょうしんする",
    romaji: "shoushinsuru",
    meaning: "to be promoted",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "課長[かちょう]に昇進[しょうしん]する。",
      en: "Be promoted to section chief."
    }
  },
  {
    id: "vn3-606",
    word: "配属される",
    reading: "はいぞくされる",
    romaji: "haizokusareru",
    meaning: "to be assigned",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "東京[とうきょう]支社[ししゃ]に配属[はいぞく]される。",
      en: "Be assigned to the Tokyo branch."
    }
  },
  {
    id: "vn3-607",
    word: "残業する",
    reading: "ざんぎょうする",
    romaji: "zangyousuru",
    meaning: "to work overtime",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "夜遅[よるおそ]くまで残業[ざんぎょう]する。",
      en: "Work overtime until late at night."
    }
  },
  {
    id: "vn3-608",
    word: "勤務する",
    reading: "きんむする",
    romaji: "kinmusuru",
    meaning: "to serve, to work",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "銀行[ぎんこう]に勤務[きんむ]する。",
      en: "Work at a bank."
    }
  },
  {
    id: "vn3-609",
    word: "転勤する",
    reading: "てんきんする",
    romaji: "tenkinsuru",
    meaning: "to be transferred",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "別[べつ]の支店[してん]へ転勤[てんきん]する。",
      en: "Transfer to another branch."
    }
  },
  {
    id: "vn3-610",
    word: "応募する",
    reading: "おうぼする",
    romaji: "oubosuru",
    meaning: "to apply for",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "コンテストに応募[おうぼ]する。",
      en: "Apply for a contest."
    }
  },
  {
    id: "vn3-611",
    word: "解雇する",
    reading: "かいこする",
    romaji: "kaikosuru",
    meaning: "to dismiss",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "不況[ふきょう]で社員[しゃいん]を解雇[かいこ]する。",
      en: "Dismiss employees due to a recession."
    }
  },
  {
    id: "vn3-612",
    word: "指導する",
    reading: "しどうする",
    romaji: "shidousuru",
    meaning: "to instruct",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "後輩[こうはい]を指導[しどう]する。",
      en: "Instruct juniors."
    }
  },
  {
    id: "vn3-613",
    word: "支援する",
    reading: "しえんする",
    romaji: "shiensuru",
    meaning: "to support",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "被災地[ひさいち]を支援[しえん]する。",
      en: "Support disaster-stricken areas."
    }
  },
  {
    id: "vn3-614",
    word: "協力する",
    reading: "きょうりょくする",
    romaji: "kyouryokusuru",
    meaning: "to cooperate",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "皆[みな]で協力[きょうりょく]する。",
      en: "Cooperate together."
    }
  },
  {
    id: "vn3-615",
    word: "提案する",
    reading: "ていあんする",
    romaji: "teiansuru",
    meaning: "to propose",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "新[あたら]しい計画[けいかく]を提案[ていあん]する。",
      en: "Propose a new plan."
    }
  },
  {
    id: "vn3-616",
    word: "報告する",
    reading: "ほうこくする",
    romaji: "houkokusuru",
    meaning: "to report",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "上司[じょうし]に報告[ほうこく]する。",
      en: "Report to the boss."
    }
  },
  {
    id: "vn3-617",
    word: "依頼する",
    reading: "いらいする",
    romaji: "iraisuru",
    meaning: "to request",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "弁護士[べんごし]に依頼[いらい]する。",
      en: "Request a lawyer."
    }
  },
  {
    id: "vn3-618",
    word: "要求する",
    reading: "ようきゅうする",
    romaji: "youkyuusuru",
    meaning: "to demand",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "条件[じょうけん]を要求[ようきゅう]する。",
      en: "Demand conditions."
    }
  },
  {
    id: "vn3-619",
    word: "受け付ける",
    reading: "うけつける",
    romaji: "uketsukeru",
    meaning: "to accept",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "申[もう]し込[こ]みを受[う]け付[つ]ける。",
      en: "Accept applications."
    }
  },
  {
    id: "vn3-620",
    word: "受け取る",
    reading: "うけとる",
    romaji: "uketoru",
    meaning: "to receive",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "荷物[にもつ]を受[う]け取[と]る。",
      en: "Receive a package."
    }
  },
  {
    id: "vn3-621",
    word: "取り扱う",
    reading: "とりあつかう",
    romaji: "toriatsukau",
    meaning: "to handle",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "この店[みせ]は雑貨[ざっか]を取[と]り扱[あつか]う。",
      en: "This shop handles sundries."
    }
  },
  {
    id: "vn3-622",
    word: "取り組む",
    reading: "とりくむ",
    romaji: "torikumu",
    meaning: "to tackle",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "環境問題[かんきょうもんだい]に取[と]り組[く]む。",
      en: "Tackle environmental problems."
    }
  },
  {
    id: "vn3-623",
    word: "取り消す",
    reading: "とりけす",
    romaji: "torikesu",
    meaning: "to cancel",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "注文[ちゅうもん]を取[と]り消[け]す。",
      en: "Cancel an order."
    }
  },
  {
    id: "vn3-624",
    word: "引き受ける",
    reading: "ひきうける",
    romaji: "hikiukeru",
    meaning: "to undertake",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "仕事[しごと]を引[ひ]き受[う]ける。",
      en: "Undertake a job."
    }
  },
  {
    id: "vn3-625",
    word: "引き出す",
    reading: "ひきだす",
    romaji: "hikidasu",
    meaning: "to draw out",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "才能[さいのう]を引[ひ]き出[だ]す。",
      en: "Draw out talent."
    }
  },
  {
    id: "vn3-626",
    word: "引き止める",
    reading: "ひきとめる",
    romaji: "hikitomeru",
    meaning: "to detain",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "客[きゃく]を引[ひ]き止[と]める。",
      en: "Detain a customer."
    }
  },
  {
    id: "vn3-627",
    word: "立ち上がる",
    reading: "たちあがる",
    romaji: "tachiagaru",
    meaning: "to stand up",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "椅子[いす]から立[た]ち上[あ]がる。",
      en: "Stand up from the chair."
    }
  },
  {
    id: "vn3-628",
    word: "立ち止まる",
    reading: "たちどまる",
    romaji: "tachidomaru",
    meaning: "to stop walking",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "店[みせ]の前[まえ]で立[た]ち止[と]まる。",
      en: "Stop in front of a shop."
    }
  },
  {
    id: "vn3-629",
    word: "立ち寄る",
    reading: "たちよる",
    romaji: "tachiyoru",
    meaning: "to drop by",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "帰[かえ]りに店[みせ]に立[た]ち寄[よ]る。",
      en: "Drop by a shop on the way home."
    }
  },
  {
    id: "vn3-630",
    word: "思い込む",
    reading: "おもいこむ",
    romaji: "omoikomu",
    meaning: "to be convinced",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "自分[じぶん]が正[ただ]しいと思[おも]い込[こ]む。",
      en: "Convince oneself one is right."
    }
  },
  {
    id: "vn3-631",
    word: "思い切る",
    reading: "おもいきる",
    romaji: "omoikiru",
    meaning: "to resolve",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "思[おも]い切[き]って転職[てんしょく]する。",
      en: "Resolve to change jobs."
    }
  },
  {
    id: "vn3-632",
    word: "見つめる",
    reading: "みつめる",
    romaji: "mitsumeru",
    meaning: "to gaze at",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "空[そら]を見[み]つめる。",
      en: "Gaze at the sky."
    }
  },
  {
    id: "vn3-633",
    word: "見合わせる",
    reading: "みあわせる",
    romaji: "miawaseru",
    meaning: "to postpone",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "計画[けいかく]を見[み]合[あ]わせる。",
      en: "Postpone the plan."
    }
  },
  {
    id: "vn3-634",
    word: "見習う",
    reading: "みならう",
    romaji: "minarau",
    meaning: "to model after",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "先輩[せんぱい]を見[み]習[なら]う。",
      en: "Model after a senior."
    }
  },
  {
    id: "vn3-635",
    word: "見抜く",
    reading: "みぬく",
    romaji: "minuku",
    meaning: "to see through",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "本心[ほんしん]を見[み]抜[ぬ]く。",
      en: "See through one's true feelings."
    }
  },
  {
    id: "vn3-636",
    word: "見返す",
    reading: "みかえす",
    romaji: "mikaesu",
    meaning: "to look back",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "過去[かこ]の自分[じぶん]を見[み]返[かえ]す。",
      en: "Look back at one's past self."
    }
  },
  {
    id: "vn3-637",
    word: "考え直す",
    reading: "かんがえなおす",
    romaji: "kangaenaosu",
    meaning: "to reconsider",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "計画[けいかく]を考[かんが]え直[なお]す。",
      en: "Reconsider the plan."
    }
  },
  {
    id: "vn3-638",
    word: "取り換える",
    reading: "とりかえる",
    romaji: "torikaeru",
    meaning: "to replace",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "古[ふる]い機械[きかい]を取[と]り換[か]える。",
      en: "Replace old machinery."
    }
  },
  {
    id: "vn3-639",
    word: "取り戻す",
    reading: "とりもどす",
    romaji: "torimodosu",
    meaning: "to recover",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "元気[げんき]を取[と]り戻[もど]す。",
      en: "Recover one's energy."
    }
  },
  {
    id: "vn3-640",
    word: "引き返す",
    reading: "ひきかえす",
    romaji: "hikikaesu",
    meaning: "to turn back",
    level: "N3",
    lesson: 12,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "雨[あめ]のため引[ひ]き返[かえ]す。",
      en: "Turn back due to rain."
    }
  },
  // ============================================================
  // Adjectives — 25 words (vn3-641 .. vn3-665)
  // ============================================================
  {
    id: "vn3-641",
    word: "厳しい",
    reading: "きびしい",
    romaji: "kibishii",
    meaning: "strict",
    level: "N3",
    lesson: 12,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "規則[きそく]が厳[きび]しい。",
      en: "The rules are strict."
    }
  },
  {
    id: "vn3-642",
    word: "著しい",
    reading: "いちじるしい",
    romaji: "ichijirushii",
    meaning: "remarkable",
    level: "N3",
    lesson: 12,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "著[いちじる]しい進歩[しんぽ]がある。",
      en: "There is remarkable progress."
    }
  },
  {
    id: "vn3-643",
    word: "まぶしい",
    reading: "まぶしい",
    romaji: "mabushii",
    meaning: "dazzling",
    level: "N3",
    lesson: 12,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "朝日[あさひ]がまぶしい。",
      en: "The morning sun is dazzling."
    }
  },
  {
    id: "vn3-644",
    word: "もったいない",
    reading: "もったいない",
    romaji: "mottainai",
    meaning: "wasteful, too good",
    level: "N3",
    lesson: 12,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "捨[す]てるのはもったいない。",
      en: "It's wasteful to throw it away."
    }
  },
  {
    id: "vn3-645",
    word: "みっともない",
    reading: "みっともない",
    romaji: "mittomonai",
    meaning: "unseemly",
    level: "N3",
    lesson: 12,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "みっともない姿[すがた]を見[み]せる。",
      en: "Show an unseemly appearance."
    }
  },
  {
    id: "vn3-646",
    word: "すっぱい",
    reading: "すっぱい",
    romaji: "suppai",
    meaning: "sour",
    level: "N3",
    lesson: 12,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "この梅干[うめぼし]はすっぱい。",
      en: "This pickled plum is sour."
    }
  },
  {
    id: "vn3-647",
    word: "くどい",
    reading: "くどい",
    romaji: "kudoi",
    meaning: "persistent, long-winded",
    level: "N3",
    lesson: 12,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "説明[せつめい]がくどい。",
      en: "The explanation is too long-winded."
    }
  },
  {
    id: "vn3-648",
    word: "だるい",
    reading: "だるい",
    romaji: "darui",
    meaning: "sluggish",
    level: "N3",
    lesson: 12,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "熱[ねつ]で体[からだ]がだるい。",
      en: "My body feels sluggish from the fever."
    }
  },
  {
    id: "vn3-649",
    word: "うっとうしい",
    reading: "うっとうしい",
    romaji: "uttoushii",
    meaning: "gloomy",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "雨[あめ]ばかりでうっとうしい。",
      en: "Gloomy with all this rain."
    }
  },
  {
    id: "vn3-650",
    word: "気まずい",
    reading: "きまずい",
    romaji: "kimazui",
    meaning: "awkward",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "気[き]まずい沈黙[ちんもく]。",
      en: "Awkward silence."
    }
  },
  {
    id: "vn3-651",
    word: "だらしない",
    reading: "だらしない",
    romaji: "darashinai",
    meaning: "sloppy",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "部屋[へや]がだらしない。",
      en: "The room is sloppy."
    }
  },
  {
    id: "vn3-652",
    word: "ずるい",
    reading: "ずるい",
    romaji: "zurui",
    meaning: "sly",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "ずるい手口[てぐち]を使[つか]う。",
      en: "Use a sly trick."
    }
  },
  {
    id: "vn3-653",
    word: "ほしい",
    reading: "ほしい",
    romaji: "hoshii",
    meaning: "wanted, desired",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "新[あたら]しい車[くるま]がほしい。",
      en: "I want a new car."
    }
  },
  {
    id: "vn3-654",
    word: "悲しい",
    reading: "かなしい",
    romaji: "kanashii",
    meaning: "sad",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "悲[かな]しい映画[えいが]を見[み]る。",
      en: "Watch a sad movie."
    }
  },
  {
    id: "vn3-655",
    word: "うれしい",
    reading: "うれしい",
    romaji: "ureshii",
    meaning: "glad",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "プレゼントがもらえてうれしい。",
      en: "Glad to receive a present."
    }
  },
  {
    id: "vn3-656",
    word: "立派",
    reading: "りっぱ",
    romaji: "rippa",
    meaning: "splendid",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "立派[りっぱ]な建物[たてもの]。",
      en: "A splendid building."
    }
  },
  {
    id: "vn3-657",
    word: "派手",
    reading: "はで",
    romaji: "hade",
    meaning: "flashy",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "派手[はで]な服[ふく]を着[き]る。",
      en: "Wear flashy clothes."
    }
  },
  {
    id: "vn3-658",
    word: "地味",
    reading: "じみ",
    romaji: "jimi",
    meaning: "plain",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "地味[じみ]な色[いろ]が好[す]きだ。",
      en: "I like plain colors."
    }
  },
  {
    id: "vn3-659",
    word: "単純",
    reading: "たんじゅん",
    romaji: "tanjun",
    meaning: "simple",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "単純[たんじゅん]な仕組[しく]み。",
      en: "A simple mechanism."
    }
  },
  {
    id: "vn3-660",
    word: "確実",
    reading: "かくじつ",
    romaji: "kakujitsu",
    meaning: "certain",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "確実[かくじつ]な情報[じょうほう]。",
      en: "Certain information."
    }
  },
  {
    id: "vn3-661",
    word: "強烈",
    reading: "きょうれつ",
    romaji: "kyouretsu",
    meaning: "intense",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "強烈[きょうれつ]な印象[いんしょう]。",
      en: "An intense impression."
    }
  },
  {
    id: "vn3-662",
    word: "微妙",
    reading: "びみょう",
    romaji: "bimyou",
    meaning: "subtle",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "微妙[びみょう]な違[ちが]いがある。",
      en: "There's a subtle difference."
    }
  },
  {
    id: "vn3-663",
    word: "器用",
    reading: "きよう",
    romaji: "kiyou",
    meaning: "dexterous",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "器用[きよう]に仕事[しごと]をする。",
      en: "Work dexterously."
    }
  },
  {
    id: "vn3-664",
    word: "不器用",
    reading: "ぶきよう",
    romaji: "bukiyou",
    meaning: "clumsy",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "不器用[ぶきよう]な人[ひと]だ。",
      en: "A clumsy person."
    }
  },
  {
    id: "vn3-665",
    word: "重大",
    reading: "じゅうだい",
    romaji: "juudai",
    meaning: "serious",
    level: "N3",
    lesson: 13,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "重大[じゅうだい]な問題[もんだい]。",
      en: "A serious problem."
    }
  },
  // ============================================================
  // Adverbs — 15 words (vn3-666 .. vn3-680)
  // ============================================================
  {
    id: "vn3-666",
    word: "特に",
    reading: "とくに",
    romaji: "tokuni",
    meaning: "especially",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "特[とく]に問題[もんだい]はない。",
      en: "There is no particular problem."
    }
  },
  {
    id: "vn3-667",
    word: "取り分け",
    reading: "とりわけ",
    romaji: "toriwake",
    meaning: "particularly",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "取[と]り分[わ]け今日[きょう]は寒[さむ]い。",
      en: "Today is especially cold."
    }
  },
  {
    id: "vn3-668",
    word: "初めて",
    reading: "はじめて",
    romaji: "hajimete",
    meaning: "for the first time",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "海[うみ]を初[はじ]めて見[み]た。",
      en: "Saw the sea for the first time."
    }
  },
  {
    id: "vn3-669",
    word: "常に",
    reading: "つねに",
    romaji: "tsuneni",
    meaning: "always",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "常[つね]に準備[じゅんび]する。",
      en: "Always be prepared."
    }
  },
  {
    id: "vn3-670",
    word: "ぐっと",
    reading: "ぐっと",
    romaji: "gutto",
    meaning: "strongly",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "紐[ひも]をぐっと引[ひ]っ張[ぱ]る。",
      en: "Pull the string hard."
    }
  },
  {
    id: "vn3-671",
    word: "次第に",
    reading: "しだいに",
    romaji: "shidaini",
    meaning: "gradually",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "天気[てんき]が次第[しだい]に悪[わる]くなる。",
      en: "The weather gradually worsens."
    }
  },
  {
    id: "vn3-672",
    word: "どうしても",
    reading: "どうしても",
    romaji: "doushitemo",
    meaning: "no matter what",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "どうしても行[い]きたい。",
      en: "I want to go no matter what."
    }
  },
  {
    id: "vn3-673",
    word: "むしろ",
    reading: "むしろ",
    romaji: "mushiro",
    meaning: "rather",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "山[やま]より海[うみ]がむしろ好[す]きだ。",
      en: "I rather prefer the sea to the mountains."
    }
  },
  {
    id: "vn3-674",
    word: "先に",
    reading: "さきに",
    romaji: "sakini",
    meaning: "beforehand",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "先[さき]に食事[しょくじ]をする。",
      en: "Eat beforehand."
    }
  },
  {
    id: "vn3-675",
    word: "後で",
    reading: "あとで",
    romaji: "atode",
    meaning: "later",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "後[あと]で考[かんが]える。",
      en: "Think about it later."
    }
  },
  {
    id: "vn3-676",
    word: "時々",
    reading: "ときどき",
    romaji: "tokidoki",
    meaning: "sometimes",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "時々[ときどき]映画[えいが]を見[み]る。",
      en: "Sometimes I watch movies."
    }
  },
  {
    id: "vn3-677",
    word: "絶えず",
    reading: "たえず",
    romaji: "taezu",
    meaning: "constantly",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "絶[た]えず努力[どりょく]する。",
      en: "Constantly make efforts."
    }
  },
  {
    id: "vn3-678",
    word: "しょっちゅう",
    reading: "しょっちゅう",
    romaji: "shocchuu",
    meaning: "frequently",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "しょっちゅう忘[わす]れ物[もの]をする。",
      en: "Frequently forget things."
    }
  },
  {
    id: "vn3-679",
    word: "正に",
    reading: "まさに",
    romaji: "masani",
    meaning: "truly, exactly",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "正[まさ]にその通[とお]りだ。",
      en: "That's exactly right."
    }
  },
  {
    id: "vn3-680",
    word: "主に",
    reading: "しゅに",
    romaji: "shuni",
    meaning: "mainly",
    level: "N3",
    lesson: 13,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "主[しゅ]に夜[よる]働[はたら]く。",
      en: "Work mainly at night."
    }
  },
  // ============================================================
  // Particles — 5 words (vn3-681 .. vn3-685)
  // ============================================================
  {
    id: "vn3-681",
    word: "でも",
    reading: "でも",
    romaji: "demo",
    meaning: "even",
    level: "N3",
    lesson: 13,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "子供[こども]でもわかる。",
      en: "Even a child can understand."
    }
  },
  {
    id: "vn3-682",
    word: "だけ",
    reading: "だけ",
    romaji: "dake",
    meaning: "only",
    level: "N3",
    lesson: 13,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "これだけ買[か]う。",
      en: "Buy only this."
    }
  },
  {
    id: "vn3-683",
    word: "まで",
    reading: "まで",
    romaji: "made",
    meaning: "until",
    level: "N3",
    lesson: 13,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "夜[よる]まで勉強[べんきょう]する。",
      en: "Study until night."
    }
  },
  {
    id: "vn3-684",
    word: "など",
    reading: "など",
    romaji: "nado",
    meaning: "for example",
    level: "N3",
    lesson: 13,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "寿司[すし]などが好[す]きだ。",
      en: "I like things like sushi."
    }
  },
  {
    id: "vn3-685",
    word: "のみ",
    reading: "のみ",
    romaji: "nomi",
    meaning: "only",
    level: "N3",
    lesson: 13,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "会員[かいいん]のみ入場[にゅうじょう]できる。",
      en: "Only members can enter."
    }
  },
  // ============================================================
  // Conjunctions — 10 words (vn3-686 .. vn3-695)
  // ============================================================
  {
    id: "vn3-686",
    word: "そして",
    reading: "そして",
    romaji: "soshite",
    meaning: "and then",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "朝[あさ]起[お]きて、そして走[はし]った。",
      en: "I woke up in the morning, and then ran."
    }
  },
  {
    id: "vn3-687",
    word: "それから",
    reading: "それから",
    romaji: "sorekara",
    meaning: "then, after that",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "それから帰[かえ]った。",
      en: "After that, I went home."
    }
  },
  {
    id: "vn3-688",
    word: "けれども",
    reading: "けれども",
    romaji: "keredomo",
    meaning: "but",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "行[い]きたかった、けれども忙[いそが]しかった。",
      en: "I wanted to go, but I was busy."
    }
  },
  {
    id: "vn3-689",
    word: "だから",
    reading: "だから",
    romaji: "dakara",
    meaning: "therefore",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "だから行[い]かなかった。",
      en: "That's why I didn't go."
    }
  },
  {
    id: "vn3-690",
    word: "それで",
    reading: "それで",
    romaji: "sorede",
    meaning: "so, then",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "それでどうなった?",
      en: "So, what happened?"
    }
  },
  {
    id: "vn3-691",
    word: "その上",
    reading: "そのうえ",
    romaji: "sonoue",
    meaning: "besides",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "その上[うえ]、値段[ねだん]も安[やす]い。",
      en: "Besides, the price is low."
    }
  },
  {
    id: "vn3-692",
    word: "なぜなら",
    reading: "なぜなら",
    romaji: "nazenara",
    meaning: "because",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "なぜなら時間[じかん]がないからだ。",
      en: "Because there is no time."
    }
  },
  {
    id: "vn3-693",
    word: "それとも",
    reading: "それとも",
    romaji: "soretomo",
    meaning: "or",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "コーヒー、それとも紅茶[こうちゃ]?",
      en: "Coffee, or tea?"
    }
  },
  {
    id: "vn3-694",
    word: "または",
    reading: "または",
    romaji: "matawa",
    meaning: "or",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "電話[でんわ]、または手紙[てがみ]で連絡[れんらく]する。",
      en: "Contact by phone or letter."
    }
  },
  {
    id: "vn3-695",
    word: "すなわち",
    reading: "すなわち",
    romaji: "sunawachi",
    meaning: "that is to say",
    level: "N3",
    lesson: 13,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "すなわち不可能[ふかのう]だ。",
      en: "In other words, it's impossible."
    }
  },
  // ============================================================
  // Onomatopoeia — 15 words (vn3-696 .. vn3-710)
  // ============================================================
  {
    id: "vn3-696",
    word: "ざあざあ",
    reading: "ざあざあ",
    romaji: "zaazaa",
    meaning: "sound of pouring rain",
    level: "N3",
    lesson: 13,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "雨[あめ]がざあざあ降[ふ]る。",
      en: "Rain pours down."
    }
  },
  {
    id: "vn3-697",
    word: "しんしん",
    reading: "しんしん",
    romaji: "shinshin",
    meaning: "sound of snow falling silently",
    level: "N3",
    lesson: 13,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "雪[ゆき]がしんしんと降[ふ]る。",
      en: "Snow falls silently."
    }
  },
  {
    id: "vn3-698",
    word: "からから",
    reading: "からから",
    romaji: "karakara",
    meaning: "bone dry",
    level: "N3",
    lesson: 13,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "喉[のど]がからからだ。",
      en: "The throat is bone dry."
    }
  },
  {
    id: "vn3-699",
    word: "じめじめ",
    reading: "じめじめ",
    romaji: "jimejime",
    meaning: "damp",
    level: "N3",
    lesson: 13,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "部屋[へや]がじめじめする。",
      en: "The room is damp."
    }
  },
  {
    id: "vn3-700",
    word: "ぎらぎら",
    reading: "ぎらぎら",
    romaji: "giragira",
    meaning: "glaring",
    level: "N3",
    lesson: 13,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "太陽[たいよう]がぎらぎら照[て]る。",
      en: "The sun glares."
    }
  },
  {
    id: "vn3-701",
    word: "すやすや",
    reading: "すやすや",
    romaji: "suyasuya",
    meaning: "sleeping peacefully",
    level: "N3",
    lesson: 13,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "子供[こども]がすやすや眠[ねむ]る。",
      en: "The child sleeps peacefully."
    }
  },
  {
    id: "vn3-702",
    word: "くーくー",
    reading: "くーくー",
    romaji: "kuukuu",
    meaning: "sound of snoring",
    level: "N3",
    lesson: 13,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "父[ちち]がくーくーいびきをかく。",
      en: "Father snores soundly."
    }
  },
  {
    id: "vn3-703",
    word: "ぐずぐず",
    reading: "ぐずぐず",
    romaji: "guzuguzu",
    meaning: "dawdling",
    level: "N3",
    lesson: 14,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "ぐずぐずしないで出[で]かけよう。",
      en: "Let's go out without dawdling."
    }
  },
  {
    id: "vn3-704",
    word: "さっさと",
    reading: "さっさと",
    romaji: "sassato",
    meaning: "promptly",
    level: "N3",
    lesson: 14,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "さっさと片付[かたづ]ける。",
      en: "Tidy up promptly."
    }
  },
  {
    id: "vn3-705",
    word: "てきぱき",
    reading: "てきぱき",
    romaji: "tekipaki",
    meaning: "efficiently",
    level: "N3",
    lesson: 14,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "彼女[かのじょ]はてきぱき仕事[しごと]をする。",
      en: "She works efficiently."
    }
  },
  {
    id: "vn3-706",
    word: "こつこつ",
    reading: "こつこつ",
    romaji: "kotsukotsu",
    meaning: "steadily, diligently",
    level: "N3",
    lesson: 14,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "毎日[まいにち]こつこつ勉強[べんきょう]する。",
      en: "Study diligently every day."
    }
  },
  {
    id: "vn3-707",
    word: "せかせか",
    reading: "せかせか",
    romaji: "sekaseka",
    meaning: "hastily",
    level: "N3",
    lesson: 14,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "せかせか歩[ある]く人[ひと]。",
      en: "A person walking hurriedly."
    }
  },
  {
    id: "vn3-708",
    word: "そっくり",
    reading: "そっくり",
    romaji: "sokkuri",
    meaning: "exactly alike",
    level: "N3",
    lesson: 14,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "母[はは]にそっくりだ。",
      en: "Looks exactly like Mother."
    }
  },
  {
    id: "vn3-709",
    word: "たっぷり",
    reading: "たっぷり",
    romaji: "tappuri",
    meaning: "plenty",
    level: "N3",
    lesson: 14,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "野菜[やさい]をたっぷり食[た]べる。",
      en: "Eat plenty of vegetables."
    }
  },
  {
    id: "vn3-710",
    word: "さらさら",
    reading: "さらさら",
    romaji: "sarasara",
    meaning: "smooth, silky",
    level: "N3",
    lesson: 14,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "髪[かみ]がさらさらだ。",
      en: "The hair is smooth and silky."
    }
  },
  // ============================================================
  // Idioms — 10 words (vn3-711 .. vn3-720)
  // ============================================================
  {
    id: "vn3-711",
    word: "話に乗る",
    reading: "はなしにのる",
    romaji: "hanashininoru",
    meaning: "to join a plan",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "新[あたら]しい計画[けいかく]の話[はなし]に乗[の]る。",
      en: "Get on board with the new plan."
    }
  },
  {
    id: "vn3-712",
    word: "息をのむ",
    reading: "いきをのむ",
    romaji: "ikionomu",
    meaning: "to gasp",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "美[うつく]しい景色[けしき]に息[いき]をのむ。",
      en: "Gasp at the beautiful scenery."
    }
  },
  {
    id: "vn3-713",
    word: "息が合う",
    reading: "いきがあう",
    romaji: "ikigaau",
    meaning: "to be in sync",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "二人[ふたり]は息[いき]が合[あ]う。",
      en: "The two are in sync."
    }
  },
  {
    id: "vn3-714",
    word: "顔が広い",
    reading: "かおがひろい",
    romaji: "kaogahiroi",
    meaning: "to know many people",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]は顔[かお]が広[ひろ]い。",
      en: "He knows many people."
    }
  },
  {
    id: "vn3-715",
    word: "鼻が高い",
    reading: "はながたかい",
    romaji: "hanagatakai",
    meaning: "to be proud",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "息子[むすこ]の勝[か]ちに鼻[はな]が高[たか]い。",
      en: "Proud of son's victory."
    }
  },
  {
    id: "vn3-716",
    word: "目が高い",
    reading: "めがたかい",
    romaji: "megatakai",
    meaning: "to have a discerning eye",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]は目[め]が高[たか]い。",
      en: "He has a discerning eye."
    }
  },
  {
    id: "vn3-717",
    word: "耳がいい",
    reading: "みみがいい",
    romaji: "mimigaii",
    meaning: "to have good ears",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]は耳[みみ]がいい。",
      en: "He has good ears."
    }
  },
  {
    id: "vn3-718",
    word: "口が重い",
    reading: "くちがおもい",
    romaji: "kuchigaomoi",
    meaning: "to be tight-lipped",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "父[ちち]は口[くち]が重[おも]い。",
      en: "Father is tight-lipped."
    }
  },
  {
    id: "vn3-719",
    word: "胸が痛む",
    reading: "むねがいたむ",
    romaji: "munegaitamu",
    meaning: "to feel heartache",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "友[とも]の失敗[しっぱい]に胸[むね]が痛[いた]む。",
      en: "Feel heartache at a friend's failure."
    }
  },
  {
    id: "vn3-720",
    word: "肩を並べる",
    reading: "かたをならべる",
    romaji: "kataonaraberu",
    meaning: "to rival, to be on par",
    level: "N3",
    lesson: 14,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "両者[りょうしゃ]が肩[かた]を並[なら]べる。",
      en: "The two rival each other."
    }
  }
];
