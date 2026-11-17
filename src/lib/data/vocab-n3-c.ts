import type { VocabData } from "@/lib/types";

// JLPT N3 vocabulary — Shinzaizen Master style, chapter-wise by part of speech.
// Furigana notation: kanji readings inline as 漢字[かんじ] (compound runs).
// Total: 180 words (70 Nouns, 45 Verbs, 25 Adjectives, 15 Adverbs,
//                  5 Particles, 8 Conjunctions, 7 Onomatopoeia, 5 Idioms).
// IDs: vn3-361 .. vn3-540.
// Deliberately avoids duplicating any word taught in vocabN3A or vocabN3B.

export const vocabN3C: VocabData[] = [
  // ============================================================
  // Nouns — 70 words (vn3-361 .. vn3-430)
  // ============================================================
  {
    id: "vn3-361",
    word: "健康",
    reading: "けんこう",
    romaji: "kenkou",
    meaning: "health",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "健康[けんこう]が一番[いちばん]大切[たいせつ]だ。",
      en: "Health is the most important thing."
    }
  },
  {
    id: "vn3-362",
    word: "病気",
    reading: "びょうき",
    romaji: "byouki",
    meaning: "illness; disease",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]は病気[びょうき]で休[やす]んでいる。",
      en: "He is resting due to illness."
    }
  },
  {
    id: "vn3-363",
    word: "治療",
    reading: "ちりょう",
    romaji: "chiryou",
    meaning: "medical treatment",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "歯[は]の治療[ちりょう]を受[う]ける。",
      en: "Receive dental treatment."
    }
  },
  {
    id: "vn3-364",
    word: "薬",
    reading: "くすり",
    romaji: "kusuri",
    meaning: "medicine",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "薬[くすり]を飲[の]んで寝[ね]る。",
      en: "Take medicine and sleep."
    }
  },
  {
    id: "vn3-365",
    word: "怪我",
    reading: "けが",
    romaji: "kega",
    meaning: "injury",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "階段[かいだん]で怪我[けが]をした。",
      en: "Got injured on the stairs."
    }
  },
  {
    id: "vn3-366",
    word: "体温",
    reading: "たいおん",
    romaji: "taion",
    meaning: "body temperature",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "体温[たいおん]を測[はか]る。",
      en: "Measure body temperature."
    }
  },
  {
    id: "vn3-367",
    word: "体重",
    reading: "たいじゅう",
    romaji: "taijuu",
    meaning: "body weight",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "体重[たいじゅう]が増[ふ]えた。",
      en: "Body weight increased."
    }
  },
  {
    id: "vn3-368",
    word: "体力",
    reading: "たいりょく",
    romaji: "tairyoku",
    meaning: "physical strength",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "体力[たいりょく]をつけるために走[はし]る。",
      en: "Run to build stamina."
    }
  },
  {
    id: "vn3-369",
    word: "視力",
    reading: "しりょく",
    romaji: "shiryoku",
    meaning: "eyesight",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "視力[しりょく]が落[お]ちた。",
      en: "Eyesight has weakened."
    }
  },
  {
    id: "vn3-370",
    word: "記憶力",
    reading: "きおくりょく",
    romaji: "kiokuryoku",
    meaning: "memory; ability to remember",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "記憶力[きおくりょく]が良[よ]い。",
      en: "Has a good memory."
    }
  },
  {
    id: "vn3-371",
    word: "注意力",
    reading: "ちゅういりょく",
    romaji: "chuuriryoku",
    meaning: "attention; concentration",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "注意力[ちゅういりょく]が足[た]りない。",
      en: "Lacks concentration."
    }
  },
  {
    id: "vn3-372",
    word: "判断力",
    reading: "はんだんりょく",
    romaji: "handanryoku",
    meaning: "judgment",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "判断力[はんだんりょく]が必要[ひつよう]だ。",
      en: "Judgment is needed."
    }
  },
  {
    id: "vn3-373",
    word: "想像力",
    reading: "そうぞうりょく",
    romaji: "souzouryoku",
    meaning: "imagination",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "想像力[そうぞうりょく]を豊[ゆた]かにする。",
      en: "Enrich imagination."
    }
  },
  {
    id: "vn3-374",
    word: "表現力",
    reading: "ひょうげんりょく",
    romaji: "hyougenryoku",
    meaning: "expressiveness",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "表現力[ひょうげんりょく]を高[たか]める。",
      en: "Improve expressiveness."
    }
  },
  {
    id: "vn3-375",
    word: "責任",
    reading: "せきにん",
    romaji: "sekinin",
    meaning: "responsibility",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "責任[せきにん]を取[と]る。",
      en: "Take responsibility."
    }
  },
  {
    id: "vn3-376",
    word: "義務",
    reading: "ぎむ",
    romaji: "gimu",
    meaning: "obligation; duty",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "納税[のうぜい]は義務[ぎむ]だ。",
      en: "Paying taxes is a duty."
    }
  },
  {
    id: "vn3-377",
    word: "権利",
    reading: "けんり",
    romaji: "kenri",
    meaning: "right",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "権利[けんり]を主張[しゅちょう]する。",
      en: "Assert a right."
    }
  },
  {
    id: "vn3-378",
    word: "義理",
    reading: "ぎり",
    romaji: "giri",
    meaning: "social obligation",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "義理[ぎり]を重[おも]んじる。",
      en: "Value social obligation."
    }
  },
  {
    id: "vn3-379",
    word: "人情",
    reading: "にんじょう",
    romaji: "ninjou",
    meaning: "human kindness",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "人情[にんじょう]に厚[あつ]い人[ひと]。",
      en: "A warm-hearted person."
    }
  },
  {
    id: "vn3-380",
    word: "同情",
    reading: "どうじょう",
    romaji: "doujou",
    meaning: "sympathy",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]に同情[どうじょう]する。",
      en: "Sympathize with him."
    }
  },
  {
    id: "vn3-381",
    word: "表情",
    reading: "ひょうじょう",
    romaji: "hyoujou",
    meaning: "facial expression",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "表情[ひょうじょう]が硬[かた]い。",
      en: "The facial expression is stiff."
    }
  },
  {
    id: "vn3-382",
    word: "感覚",
    reading: "かんかく",
    romaji: "kankaku",
    meaning: "sense; sensation",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "感覚[かんかく]が鋭[するど]い。",
      en: "Has sharp senses."
    }
  },
  {
    id: "vn3-383",
    word: "直感",
    reading: "ちょっかん",
    romaji: "chokkan",
    meaning: "intuition",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "直感[ちょっかん]を信[しん]じる。",
      en: "Trust intuition."
    }
  },
  {
    id: "vn3-384",
    word: "空想",
    reading: "くうそう",
    romaji: "kuusou",
    meaning: "fantasy; daydream",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "空想[くうそう]にふける。",
      en: "Indulge in fantasy."
    }
  },
  {
    id: "vn3-385",
    word: "現実",
    reading: "げんじつ",
    romaji: "genjitsu",
    meaning: "reality",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "現実[げんじつ]を見[み]る。",
      en: "Face reality."
    }
  },
  {
    id: "vn3-386",
    word: "現象",
    reading: "げんしょう",
    romaji: "genshou",
    meaning: "phenomenon",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "自然[しぜん]現象[げんしょう]を観察[かんさつ]する。",
      en: "Observe a natural phenomenon."
    }
  },
  {
    id: "vn3-387",
    word: "規模",
    reading: "きぼ",
    romaji: "kibo",
    meaning: "scale; scope",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "大[おお]きな規模[きぼ]で行[おこな]う。",
      en: "Carry out on a large scale."
    }
  },
  {
    id: "vn3-388",
    word: "範囲",
    reading: "はんい",
    romaji: "han'i",
    meaning: "range; scope",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "範囲[はんい]を広[ひろ]げる。",
      en: "Expand the scope."
    }
  },
  {
    id: "vn3-389",
    word: "限界",
    reading: "げんかい",
    romaji: "genkai",
    meaning: "limit",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "限界[げんかい]を超[こ]える。",
      en: "Exceed the limit."
    }
  },
  {
    id: "vn3-390",
    word: "限度",
    reading: "げんど",
    romaji: "gendo",
    meaning: "bounds; limit",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "限度[げんど]を守[まも]る。",
      en: "Respect the limit."
    }
  },
  {
    id: "vn3-391",
    word: "条件",
    reading: "じょうけん",
    romaji: "jouken",
    meaning: "condition",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "条件[じょうけん]を満[み]たす。",
      en: "Meet the conditions."
    }
  },
  {
    id: "vn3-392",
    word: "基準",
    reading: "きじゅん",
    romaji: "kijun",
    meaning: "criterion; standard",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "基準[きじゅん]を設[もう]ける。",
      en: "Set a standard."
    }
  },
  {
    id: "vn3-393",
    word: "標準",
    reading: "ひょうじゅん",
    romaji: "hyoujun",
    meaning: "standard",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "標準[ひょうじゅん]より高[たか]い。",
      en: "Higher than the standard."
    }
  },
  {
    id: "vn3-394",
    word: "平均",
    reading: "へいきん",
    romaji: "heikin",
    meaning: "average",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "平均[へいきん]点[てん]を計算[けいさん]する。",
      en: "Calculate the average score."
    }
  },
  {
    id: "vn3-395",
    word: "水準",
    reading: "すいじゅん",
    romaji: "suijun",
    meaning: "level; standard",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "生活[せいかつ]水準[すいじゅん]が上[あ]がる。",
      en: "Standard of living rises."
    }
  },
  {
    id: "vn3-396",
    word: "目安",
    reading: "めやす",
    romaji: "meyasu",
    meaning: "rough guide; target",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "目安[めやす]を立[た]てる。",
      en: "Set a rough target."
    }
  },
  {
    id: "vn3-397",
    word: "見当",
    reading: "けんとう",
    romaji: "kentou",
    meaning: "estimate; guess",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "見当[けんとう]がつく。",
      en: "Have a rough idea."
    }
  },
  {
    id: "vn3-398",
    word: "予測",
    reading: "よそく",
    romaji: "yosoku",
    meaning: "forecast; prediction",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "予測[よそく]が外[はず]れる。",
      en: "The forecast was wrong."
    }
  },
  {
    id: "vn3-399",
    word: "予想",
    reading: "よそう",
    romaji: "yosou",
    meaning: "expectation; prediction",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "予想[よそう]通[どお]りの結果[けっか]。",
      en: "The result as expected."
    }
  },
  {
    id: "vn3-400",
    word: "期待",
    reading: "きたい",
    romaji: "kitai",
    meaning: "expectation",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "期待[きたい]に応[こた]える。",
      en: "Live up to expectations."
    }
  },
  {
    id: "vn3-401",
    word: "失望",
    reading: "しつぼう",
    romaji: "shitsubou",
    meaning: "disappointment",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "失望[しつぼう]を味[あじ]わう。",
      en: "Experience disappointment."
    }
  },
  {
    id: "vn3-402",
    word: "絶望",
    reading: "ぜつぼう",
    romaji: "zetsubou",
    meaning: "despair",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "絶望[ぜつぼう]から立[た]ち直[なお]る。",
      en: "Recover from despair."
    }
  },
  {
    id: "vn3-403",
    word: "満足",
    reading: "まんぞく",
    romaji: "manzoku",
    meaning: "satisfaction",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "満足[まんぞく]感[かん]がある。",
      en: "Has a sense of satisfaction."
    }
  },
  {
    id: "vn3-404",
    word: "不満",
    reading: "ふまん",
    romaji: "fuman",
    meaning: "dissatisfaction",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "不満[ふまん]を述[の]べる。",
      en: "Express dissatisfaction."
    }
  },
  {
    id: "vn3-405",
    word: "楽しみ",
    reading: "たのしみ",
    romaji: "tanoshimi",
    meaning: "enjoyment; pleasure",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "週末[しゅうまつ]の楽[たの]しみ。",
      en: "Weekend pleasure."
    }
  },
  {
    id: "vn3-406",
    word: "喜び",
    reading: "よろこび",
    romaji: "yorokobi",
    meaning: "joy; delight",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "喜[よろこ]びを分[わ]かち合[あ]う。",
      en: "Share the joy."
    }
  },
  {
    id: "vn3-407",
    word: "悲しみ",
    reading: "かなしみ",
    romaji: "kanashimi",
    meaning: "sadness",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "悲[かな]しみを乗[の]り越[こ]える。",
      en: "Overcome sadness."
    }
  },
  {
    id: "vn3-408",
    word: "苦しみ",
    reading: "くるしみ",
    romaji: "kurushimi",
    meaning: "suffering",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "苦[くる]しみを話[はな]す。",
      en: "Talk about suffering."
    }
  },
  {
    id: "vn3-409",
    word: "苦労",
    reading: "くろう",
    romaji: "kurou",
    meaning: "hardship",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "多[おお]くの苦労[くろう]を重[かさ]ねる。",
      en: "Endure many hardships."
    }
  },
  {
    id: "vn3-410",
    word: "苦悩",
    reading: "くのう",
    romaji: "kunou",
    meaning: "agony; distress",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "深刻[しんこく]な苦悩[くのう]に陥[おちい]る。",
      en: "Fall into deep distress."
    }
  },
  {
    id: "vn3-411",
    word: "不安",
    reading: "ふあん",
    romaji: "fuan",
    meaning: "anxiety",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "不安[ふあん]を感[かん]じる。",
      en: "Feel anxiety."
    }
  },
  {
    id: "vn3-412",
    word: "安心",
    reading: "あんしん",
    romaji: "anshin",
    meaning: "peace of mind",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "安心[あんしん]して任[まか]せる。",
      en: "Trust with peace of mind."
    }
  },
  {
    id: "vn3-413",
    word: "緊張",
    reading: "きんちょう",
    romaji: "kinchou",
    meaning: "tension",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "緊張[きんちょう]がほぐれる。",
      en: "Tension eases."
    }
  },
  {
    id: "vn3-414",
    word: "驚き",
    reading: "おどろき",
    romaji: "odoroki",
    meaning: "surprise",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "大[おお]きな驚[おどろ]きを隠[かく]す。",
      en: "Hide great surprise."
    }
  },
  {
    id: "vn3-415",
    word: "怒り",
    reading: "いかり",
    romaji: "ikari",
    meaning: "anger",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "怒[いか]りを抑[おさ]える。",
      en: "Suppress anger."
    }
  },
  {
    id: "vn3-416",
    word: "恐れ",
    reading: "おそれ",
    romaji: "osore",
    meaning: "fear",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "恐[おそ]れを抱[いだ]く。",
      en: "Harbor fear."
    }
  },
  {
    id: "vn3-417",
    word: "恥",
    reading: "はじ",
    romaji: "haji",
    meaning: "shame",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "恥[はじ]を知[し]る。",
      en: "Know shame."
    }
  },
  {
    id: "vn3-418",
    word: "誇り",
    reading: "ほこり",
    romaji: "hokori",
    meaning: "pride",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "誇[ほこ]りを持[も]つ。",
      en: "Take pride."
    }
  },
  {
    id: "vn3-419",
    word: "恩",
    reading: "おん",
    romaji: "on",
    meaning: "favor; kindness received",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "恩[おん]に着[き]る。",
      en: "Be grateful for a favor."
    }
  },
  {
    id: "vn3-420",
    word: "恨み",
    reading: "うらみ",
    romaji: "urami",
    meaning: "grudge",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "恨[うら]みを抱[いだ]く。",
      en: "Hold a grudge."
    }
  },
  {
    id: "vn3-421",
    word: "恋",
    reading: "こい",
    romaji: "koi",
    meaning: "romantic love",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "恋[こい]に落[お]ちる。",
      en: "Fall in love."
    }
  },
  {
    id: "vn3-422",
    word: "愛",
    reading: "あい",
    romaji: "ai",
    meaning: "love",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "家族[かぞく]への愛[あい]。",
      en: "Love for family."
    }
  },
  {
    id: "vn3-423",
    word: "友情",
    reading: "ゆうじょう",
    romaji: "yuujou",
    meaning: "friendship",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "友情[ゆうじょう]を深[ふか]める。",
      en: "Deepen friendship."
    }
  },
  {
    id: "vn3-424",
    word: "信頼",
    reading: "しんらい",
    romaji: "shinrai",
    meaning: "trust",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "信頼[しんらい]を得[え]る。",
      en: "Earn trust."
    }
  },
  {
    id: "vn3-425",
    word: "裏切り",
    reading: "うらぎり",
    romaji: "uragiri",
    meaning: "betrayal",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "裏切[うらぎ]りに遭[あ]う。",
      en: "Be betrayed."
    }
  },
  {
    id: "vn3-426",
    word: "誓い",
    reading: "ちかい",
    romaji: "chikai",
    meaning: "vow; oath",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "誓[ちか]いを立[た]てる。",
      en: "Make a vow."
    }
  },
  {
    id: "vn3-427",
    word: "誓約",
    reading: "せいやく",
    romaji: "seiyaku",
    meaning: "pledge",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "誓約[せいやく]を交[こう]わす。",
      en: "Exchange pledges."
    }
  },
  {
    id: "vn3-428",
    word: "教訓",
    reading: "きょうくん",
    romaji: "kyoukun",
    meaning: "lesson learned",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "教訓[きょうくん]を得[え]る。",
      en: "Gain a lesson."
    }
  },
  {
    id: "vn3-429",
    word: "経緯",
    reading: "けいい",
    romaji: "keii",
    meaning: "circumstances; sequence of events",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "事件[じけん]の経緯[けいい]を説明[せつめい]する。",
      en: "Explain the circumstances of the incident."
    }
  },
  {
    id: "vn3-430",
    word: "経過",
    reading: "けいか",
    romaji: "keika",
    meaning: "passage; progress",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "時間[じかん]の経過[けいか]を感[かん]じる。",
      en: "Feel the passage of time."
    }
  },

  // ============================================================
  // Verbs — 45 words (vn3-431 .. vn3-475)
  // ============================================================
  {
    id: "vn3-431",
    word: "受ける",
    reading: "うける",
    romaji: "ukeru",
    meaning: "to receive; to take (an exam)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "試験[しけん]を受[う]ける。",
      en: "Take an exam."
    }
  },
  {
    id: "vn3-432",
    word: "与える",
    reading: "あたえる",
    romaji: "ataeru",
    meaning: "to give; to grant",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "子供[こども]に玩具[がんぐ]を与[あた]える。",
      en: "Give a toy to a child."
    }
  },
  {
    id: "vn3-433",
    word: "求める",
    reading: "もとめる",
    romaji: "motomeru",
    meaning: "to seek; to request",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "平和[へいわ]を求[もと]める。",
      en: "Seek peace."
    }
  },
  {
    id: "vn3-434",
    word: "申す",
    reading: "もうす",
    romaji: "mousu",
    meaning: "to say (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "私[わたし]は田中[たなか]と申[もう]します。",
      en: "I am called Tanaka."
    }
  },
  {
    id: "vn3-435",
    word: "参る",
    reading: "まいる",
    romaji: "mairu",
    meaning: "to go (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "あす参[まい]ります。",
      en: "I will go tomorrow."
    }
  },
  {
    id: "vn3-436",
    word: "伺う",
    reading: "うかがう",
    romaji: "ukagau",
    meaning: "to visit; to ask (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]のお宅[たく]に伺[うかが]う。",
      en: "Visit the teacher's house."
    }
  },
  {
    id: "vn3-437",
    word: "拝見する",
    reading: "はいけんする",
    romaji: "haikensuru",
    meaning: "to look at (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "書類[しょるい]を拝見[はいけん]する。",
      en: "Humbly look at the document."
    }
  },
  {
    id: "vn3-438",
    word: "申し上げる",
    reading: "もうしあげる",
    romaji: "moushiageru",
    meaning: "to say (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "心[こころ]よりお礼[れい]を申[もう]し上[あ]げます。",
      en: "Express thanks from the heart."
    }
  },
  {
    id: "vn3-439",
    word: "致す",
    reading: "いたす",
    romaji: "itasu",
    meaning: "to do (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "何[なに]を致[いた]しましょうか。",
      en: "What shall I do?"
    }
  },
  {
    id: "vn3-440",
    word: "頂く",
    reading: "いただく",
    romaji: "itadaku",
    meaning: "to receive (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "贈[おく]り物[もの]を頂[いただ]く。",
      en: "Humbly receive a gift."
    }
  },
  {
    id: "vn3-441",
    word: "差し上げる",
    reading: "さしあげる",
    romaji: "sashiageru",
    meaning: "to give (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "お花[はな]を差[さ]し上[あ]げる。",
      en: "Humbly give flowers."
    }
  },
  {
    id: "vn3-442",
    word: "存じる",
    reading: "ぞんじる",
    romaji: "zonjiru",
    meaning: "to know (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "よく存[ぞん]じております。",
      en: "I know well."
    }
  },
  {
    id: "vn3-443",
    word: "承る",
    reading: "うけたまわる",
    romaji: "uketamawaru",
    meaning: "to hear; to accept (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "ご意見[いけん]を承[うけたまわ]る。",
      en: "Humbly receive your opinion."
    }
  },
  {
    id: "vn3-444",
    word: "拝借する",
    reading: "はいしゃくする",
    romaji: "haishakusuru",
    meaning: "to borrow (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "お車[くるま]を拝借[はいしゃく]する。",
      en: "Humbly borrow your car."
    }
  },
  {
    id: "vn3-445",
    word: "おる",
    reading: "おる",
    romaji: "oru",
    meaning: "to be (humble)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "私[わたし]は東京[とうきょう]におります。",
      en: "I am in Tokyo."
    }
  },
  {
    id: "vn3-446",
    word: "召し上がる",
    reading: "めしあがる",
    romaji: "meshiagaru",
    meaning: "to eat; to drink (honorific)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "どうぞお召[め]し上[あ]がりください。",
      en: "Please go ahead and eat."
    }
  },
  {
    id: "vn3-447",
    word: "なさる",
    reading: "なさる",
    romaji: "nasaru",
    meaning: "to do (honorific)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "何[なに]をなさいますか。",
      en: "What will you do?"
    }
  },
  {
    id: "vn3-448",
    word: "下さる",
    reading: "くださる",
    romaji: "kudasaru",
    meaning: "to give (honorific)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]が本[ほん]を下[くだ]さった。",
      en: "The teacher gave me a book."
    }
  },
  {
    id: "vn3-449",
    word: "ご覧になる",
    reading: "ごらんになる",
    romaji: "goranninaru",
    meaning: "to look (honorific)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "この絵[え]をご覧[らん]になりましたか。",
      en: "Have you seen this picture?"
    }
  },
  {
    id: "vn3-450",
    word: "おっしゃる",
    reading: "おっしゃる",
    romaji: "ossharu",
    meaning: "to say (honorific)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "何[なに]とおっしゃいましたか。",
      en: "What did you say?"
    }
  },
  {
    id: "vn3-451",
    word: "いらっしゃる",
    reading: "いらっしゃる",
    romaji: "irassharu",
    meaning: "to be; to go; to come (honorific)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]がいらっしゃいました。",
      en: "The teacher has arrived."
    }
  },
  {
    id: "vn3-452",
    word: "謝る",
    reading: "あやまる",
    romaji: "ayamaru",
    meaning: "to apologize",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "深[ふか]く謝[あやま]る。",
      en: "Apologize deeply."
    }
  },
  {
    id: "vn3-453",
    word: "許す",
    reading: "ゆるす",
    romaji: "yurusu",
    meaning: "to forgive; to permit",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "遅[おく]れを許[ゆる]す。",
      en: "Forgive the delay."
    }
  },
  {
    id: "vn3-454",
    word: "確信する",
    reading: "かくしんする",
    romaji: "kakushinsuru",
    meaning: "to be certain of",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "勝利[しょうり]を確信[かくしん]する。",
      en: "Be certain of victory."
    }
  },
  {
    id: "vn3-455",
    word: "断る",
    reading: "ことわる",
    romaji: "kotowaru",
    meaning: "to refuse; to decline",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "申[もう]し込[こ]みを断[ことわ]る。",
      en: "Decline an offer."
    }
  },
  {
    id: "vn3-456",
    word: "承知する",
    reading: "しょうちする",
    romaji: "shouchisuru",
    meaning: "to consent; to agree",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "依頼[いらい]を承知[しょうち]する。",
      en: "Agree to a request."
    }
  },
  {
    id: "vn3-457",
    word: "受け入れる",
    reading: "うけいれる",
    romaji: "ukeireru",
    meaning: "to accept",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "意見[いけん]を受[う]け入[い]れる。",
      en: "Accept an opinion."
    }
  },
  {
    id: "vn3-458",
    word: "受け取る",
    reading: "うけとる",
    romaji: "uketoru",
    meaning: "to receive",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "小包[こづつみ]を受[う]け取[と]る。",
      en: "Receive a parcel."
    }
  },
  {
    id: "vn3-459",
    word: "引き受ける",
    reading: "ひきうける",
    romaji: "hikiukeru",
    meaning: "to undertake",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "仕事[しごと]を引[ひ]き受[う]ける。",
      en: "Undertake a job."
    }
  },
  {
    id: "vn3-460",
    word: "取り組む",
    reading: "とりくむ",
    romaji: "torikumu",
    meaning: "to tackle",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "課題[かだい]に取[と]り組[く]む。",
      en: "Tackle the issue."
    }
  },
  {
    id: "vn3-461",
    word: "取り替える",
    reading: "とりかえる",
    romaji: "torikaeru",
    meaning: "to exchange; to replace",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "部品[ぶひん]を取[と]り替[か]える。",
      en: "Replace a part."
    }
  },
  {
    id: "vn3-462",
    word: "引き出す",
    reading: "ひきだす",
    romaji: "hikidasu",
    meaning: "to draw out",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "才能[さいのう]を引[ひ]き出[だ]す。",
      en: "Draw out talent."
    }
  },
  {
    id: "vn3-463",
    word: "思い込む",
    reading: "おもいこむ",
    romaji: "omoikomu",
    meaning: "to be convinced",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "死[し]んだと思[おも]い込[こ]んでいた。",
      en: "I was convinced he had died."
    }
  },
  {
    id: "vn3-464",
    word: "見直す",
    reading: "みなおす",
    romaji: "minaosu",
    meaning: "to review; to revise",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "計画[けいかく]を見[み]直[なお]す。",
      en: "Review the plan."
    }
  },
  {
    id: "vn3-465",
    word: "見送る",
    reading: "みおくる",
    romaji: "miokuru",
    meaning: "to see off",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "友人[ゆうじん]を駅[えき]で見[み]送[おく]る。",
      en: "See off a friend at the station."
    }
  },
  {
    id: "vn3-466",
    word: "見習う",
    reading: "みならう",
    romaji: "minarau",
    meaning: "to model after",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "先輩[せんぱい]を見[み]習[なら]う。",
      en: "Learn from a senior."
    }
  },
  {
    id: "vn3-467",
    word: "見覚える",
    reading: "みおぼえる",
    romaji: "mioboeru",
    meaning: "to recognize as familiar",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "この顔[かお]に見覚[みおぼ]えがある。",
      en: "I recognize this face."
    }
  },
  {
    id: "vn3-468",
    word: "思い切る",
    reading: "おもいきる",
    romaji: "omoikiru",
    meaning: "to resolve to",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "思[おも]い切[き]って辞[や]める。",
      en: "Resolve to quit."
    }
  },
  {
    id: "vn3-469",
    word: "受け持つ",
    reading: "うけもつ",
    romaji: "ukemotsu",
    meaning: "to take charge of",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "一[いち]年[ねん]生[せい]を受[う]け持[も]つ。",
      en: "Take charge of the first-year class."
    }
  },
  {
    id: "vn3-470",
    word: "取り戻す",
    reading: "とりもどす",
    romaji: "torimodosu",
    meaning: "to recover",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "元気[げんき]を取[と]り戻[もど]す。",
      en: "Recover one's energy."
    }
  },
  {
    id: "vn3-471",
    word: "取り除く",
    reading: "とりのぞく",
    romaji: "torinozoku",
    meaning: "to remove",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "障害[しょうがい]を取[と]り除[のぞ]く。",
      en: "Remove obstacles."
    }
  },
  {
    id: "vn3-472",
    word: "引き返す",
    reading: "ひきかえす",
    romaji: "hikikaesu",
    meaning: "to turn back",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "引[ひ]き返[かえ]して家[いえ]に戻[もど]る。",
      en: "Turn back and go home."
    }
  },
  {
    id: "vn3-473",
    word: "引き止める",
    reading: "ひきとめる",
    romaji: "hikitomeru",
    meaning: "to detain",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "客[きゃく]を引[ひ]き止[と]める。",
      en: "Detain a customer."
    }
  },
  {
    id: "vn3-474",
    word: "取り上げる",
    reading: "とりあげる",
    romaji: "toriageru",
    meaning: "to take up; to confiscate",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "問題[もんだい]を取[と]り上[あ]げる。",
      en: "Take up an issue."
    }
  },
  {
    id: "vn3-475",
    word: "受け継ぐ",
    reading: "うけつぐ",
    romaji: "uketsugu",
    meaning: "to inherit",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "伝統[でんとう]を受[う]け継[つ]ぐ。",
      en: "Inherit a tradition."
    }
  },

  // ============================================================
  // Adjectives — 25 words (vn3-476 .. vn3-500)
  // ============================================================
  {
    id: "vn3-476",
    word: "厳しい",
    reading: "きびしい",
    romaji: "kibishii",
    meaning: "strict; severe",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "先生[せんせい]は厳[きび]しい。",
      en: "The teacher is strict."
    }
  },
  {
    id: "vn3-477",
    word: "珍しい",
    reading: "めずらしい",
    romaji: "mezurashii",
    meaning: "rare; unusual",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "珍[めずら]しい動物[どうぶつ]。",
      en: "A rare animal."
    }
  },
  {
    id: "vn3-478",
    word: "眩しい",
    reading: "まぶしい",
    romaji: "mabushii",
    meaning: "dazzling",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "太陽[たいよう]が眩[まぶ]しい。",
      en: "The sun is dazzling."
    }
  },
  {
    id: "vn3-479",
    word: "頼もしい",
    reading: "たのもしい",
    romaji: "tanomoshii",
    meaning: "reliable; dependable",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "頼[たの]もしい若者[わかもの]。",
      en: "A reliable young person."
    }
  },
  {
    id: "vn3-480",
    word: "めまぐるしい",
    reading: "めまぐるしい",
    romaji: "memagurushii",
    meaning: "dizzying; rapid",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "目[め]まぐるしい変化[へんか]。",
      en: "Dizzying change."
    }
  },
  {
    id: "vn3-481",
    word: "逞しい",
    reading: "たくましい",
    romaji: "takumashii",
    meaning: "sturdy; robust",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "逞[たくま]しい体[からだ]。",
      en: "A sturdy body."
    }
  },
  {
    id: "vn3-482",
    word: "心細い",
    reading: "こころぼそい",
    romaji: "kokorobosoi",
    meaning: "helpless; anxious",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "一人[ひとり]で心細[こころぼそ]い。",
      en: "Feel anxious being alone."
    }
  },
  {
    id: "vn3-483",
    word: "心強い",
    reading: "こころづよい",
    romaji: "kokorozuyoi",
    meaning: "reassuring",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "友[とも]がいて心強[こころづよ]い。",
      en: "Feel reassured with a friend around."
    }
  },
  {
    id: "vn3-484",
    word: "待ち遠しい",
    reading: "まちどおしい",
    romaji: "machidooshii",
    meaning: "looking forward to",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "旅行[りょこう]が待[ま]ち遠[どお]しい。",
      en: "Look forward to the trip."
    }
  },
  {
    id: "vn3-485",
    word: "気まずい",
    reading: "きまずい",
    romaji: "kimazui",
    meaning: "awkward",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "気[き]まずい沈黙[ちんもく]。",
      en: "An awkward silence."
    }
  },
  {
    id: "vn3-486",
    word: "不味い",
    reading: "まずい",
    romaji: "mazui",
    meaning: "unpleasant; bad (in taste)",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "この料理[りょうり]は不味[まず]い。",
      en: "This dish tastes bad."
    }
  },
  {
    id: "vn3-487",
    word: "悔しい",
    reading: "くやしい",
    romaji: "kuyashii",
    meaning: "frustrating",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "負[ま]けて悔[くや]しい。",
      en: "Frustrating to lose."
    }
  },
  {
    id: "vn3-488",
    word: "臭い",
    reading: "くさい",
    romaji: "kusai",
    meaning: "smelly",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "ゴミが臭[くさ]い。",
      en: "The garbage stinks."
    }
  },
  {
    id: "vn3-489",
    word: "乏しい",
    reading: "とぼしい",
    romaji: "toboshii",
    meaning: "scarce; poor",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "資料[しりょう]に乏[とぼ]しい。",
      en: "Scarce in materials."
    }
  },
  {
    id: "vn3-490",
    word: "貧しい",
    reading: "まずしい",
    romaji: "mazushii",
    meaning: "poor",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "貧[まず]しい家庭[かてい]に生[う]まれる。",
      en: "Born in a poor family."
    }
  },
  {
    id: "vn3-491",
    word: "華やか",
    reading: "はなやか",
    romaji: "hanayaka",
    meaning: "gorgeous; flashy",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "華[はな]やかな人生[じんせい]。",
      en: "A gorgeous life."
    }
  },
  {
    id: "vn3-492",
    word: "爽やか",
    reading: "さわやか",
    romaji: "sawayaka",
    meaning: "fresh; refreshing",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "爽[さわ]やかな風[かぜ]。",
      en: "A refreshing breeze."
    }
  },
  {
    id: "vn3-493",
    word: "きらびやか",
    reading: "きらびやか",
    romaji: "kirabiyaka",
    meaning: "dazzling; gorgeous",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "きらびやかな装飾[そうしょく]。",
      en: "Gorgeous decoration."
    }
  },
  {
    id: "vn3-494",
    word: "大胆",
    reading: "だいたん",
    romaji: "daitan",
    meaning: "bold; daring",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "大胆[だいたん]な計画[けいかく]。",
      en: "A bold plan."
    }
  },
  {
    id: "vn3-495",
    word: "強引",
    reading: "ごういん",
    romaji: "gouin",
    meaning: "forceful; pushy",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "強引[ごういん]に押[お]し切[き]る。",
      en: "Force through."
    }
  },
  {
    id: "vn3-496",
    word: "陽気",
    reading: "ようき",
    romaji: "youki",
    meaning: "cheerful",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "陽気[ようき]な人[ひと]。",
      en: "A cheerful person."
    }
  },
  {
    id: "vn3-497",
    word: "陰気",
    reading: "いんき",
    romaji: "inki",
    meaning: "gloomy",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "陰気[いんき]な天気[てんき]。",
      en: "Gloomy weather."
    }
  },
  {
    id: "vn3-498",
    word: "華麗",
    reading: "かれい",
    romaji: "karei",
    meaning: "splendid; magnificent",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "華麗[かれい]な演技[えんぎ]。",
      en: "A splendid performance."
    }
  },
  {
    id: "vn3-499",
    word: "派手",
    reading: "はで",
    romaji: "hade",
    meaning: "showy; flashy",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "派手[はで]な服[ふく]。",
      en: "Showy clothes."
    }
  },
  {
    id: "vn3-500",
    word: "地味",
    reading: "じみ",
    romaji: "jimi",
    meaning: "plain; sober",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "地味[じみ]な色[いろ]。",
      en: "A plain color."
    }
  },

  // ============================================================
  // Adverbs — 15 words (vn3-501 .. vn3-515)
  // ============================================================
  {
    id: "vn3-501",
    word: "早速",
    reading: "さっそく",
    romaji: "sassoku",
    meaning: "immediately; at once",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "早速[さっそく]始[はじ]める。",
      en: "Begin immediately."
    }
  },
  {
    id: "vn3-502",
    word: "万一",
    reading: "まんいち",
    romaji: "man'ichi",
    meaning: "by any chance; just in case",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "万一[まんいち]に備[そな]える。",
      en: "Prepare for any contingency."
    }
  },
  {
    id: "vn3-503",
    word: "以前",
    reading: "いぜん",
    romaji: "izen",
    meaning: "previously; before",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "以前[いぜん]に会[あ]ったことがある。",
      en: "Have met before."
    }
  },
  {
    id: "vn3-504",
    word: "以後",
    reading: "いご",
    romaji: "igo",
    meaning: "hereafter; after",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "それ以後[いご]会[あ]っていない。",
      en: "Haven't met since."
    }
  },
  {
    id: "vn3-505",
    word: "以降",
    reading: "いこう",
    romaji: "ikou",
    meaning: "since",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "三月[さんがつ]以降[いこう]忙[いそが]しい。",
      en: "Busy since March."
    }
  },
  {
    id: "vn3-506",
    word: "今後",
    reading: "こんご",
    romaji: "kongo",
    meaning: "from now on",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "今後[こんご]の計画[けいかく]。",
      en: "Future plans."
    }
  },
  {
    id: "vn3-507",
    word: "当初",
    reading: "とうしょ",
    romaji: "tousho",
    meaning: "originally",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "当初[とうしょ]の予定[よてい]。",
      en: "The original plan."
    }
  },
  {
    id: "vn3-508",
    word: "元来",
    reading: "がんらい",
    romaji: "ganrai",
    meaning: "originally; by nature",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "元来[がんらい]健康[けんこう]だ。",
      en: "Healthy by nature."
    }
  },
  {
    id: "vn3-509",
    word: "本来",
    reading: "ほんらい",
    romaji: "honrai",
    meaning: "inherently; originally",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "本来[ほんらい]の姿[すがた]。",
      en: "The original form."
    }
  },
  {
    id: "vn3-510",
    word: "現に",
    reading: "げんに",
    romaji: "genni",
    meaning: "actually; in fact",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "現[げん]にそうだ。",
      en: "It is actually so."
    }
  },
  {
    id: "vn3-511",
    word: "実のところ",
    reading: "じつのところ",
    romaji: "jitsunotokoro",
    meaning: "as a matter of fact",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "実[じつ]のところ知[し]らなかった。",
      en: "As a matter of fact, I didn't know."
    }
  },
  {
    id: "vn3-512",
    word: "実際に",
    reading: "じっさいに",
    romaji: "jissaini",
    meaning: "actually; really",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "実際[じっさい]に見[み]た。",
      en: "Actually saw it."
    }
  },
  {
    id: "vn3-513",
    word: "大いに",
    reading: "おおいに",
    romaji: "ooini",
    meaning: "greatly; very much",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "大[おお]いに喜[よろこ]ぶ。",
      en: "Rejoice greatly."
    }
  },
  {
    id: "vn3-514",
    word: "少なからず",
    reading: "すくなからず",
    romaji: "sukunakarazu",
    meaning: "not a little; quite",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "少[すく]なからず驚[おどろ]いた。",
      en: "Was quite surprised."
    }
  },
  {
    id: "vn3-515",
    word: "共に",
    reading: "ともに",
    romaji: "tomoni",
    meaning: "together",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "共[とも]に歩[ある]く。",
      en: "Walk together."
    }
  },

  // ============================================================
  // Particles — 5 words (vn3-516 .. vn3-520)
  // ============================================================
  {
    id: "vn3-516",
    word: "なんて",
    reading: "なんて",
    romaji: "nante",
    meaning: "such as; how (surprised)",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "旅行[りょこう]なんて行[い]けない。",
      en: "Can't go on a trip or anything."
    }
  },
  {
    id: "vn3-517",
    word: "なんか",
    reading: "なんか",
    romaji: "nanka",
    meaning: "things like; such as",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "私[わたし]なんか無理[むり]だ。",
      en: "Someone like me can't."
    }
  },
  {
    id: "vn3-518",
    word: "だって",
    reading: "だって",
    romaji: "datte",
    meaning: "even; because",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "子供[こども]だってできる。",
      en: "Even a child can."
    }
  },
  {
    id: "vn3-519",
    word: "なり",
    reading: "なり",
    romaji: "nari",
    meaning: "as soon as; or",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "起[お]きるなり走[はし]り出[だ]した。",
      en: "Started running as soon as he woke."
    }
  },
  {
    id: "vn3-520",
    word: "やら",
    reading: "やら",
    romaji: "yara",
    meaning: "whether...or; wondering",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "どうなるやらわからない。",
      en: "Don't know what will become of it."
    }
  },

  // ============================================================
  // Conjunctions — 8 words (vn3-521 .. vn3-528)
  // ============================================================
  {
    id: "vn3-521",
    word: "けれども",
    reading: "けれども",
    romaji: "keredomo",
    meaning: "however; but",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "行[い]きたい、けれども時間[じかん]がない。",
      en: "I want to go, but there's no time."
    }
  },
  {
    id: "vn3-522",
    word: "それで",
    reading: "それで",
    romaji: "sorede",
    meaning: "and then; so",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "それで、どうなったの。",
      en: "So, what happened?"
    }
  },
  {
    id: "vn3-523",
    word: "それから",
    reading: "それから",
    romaji: "sorekara",
    meaning: "and then",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "それから帰[かえ]った。",
      en: "Then went home."
    }
  },
  {
    id: "vn3-524",
    word: "そして",
    reading: "そして",
    romaji: "soshite",
    meaning: "and; then",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "そして、始[はじ]まった。",
      en: "And then it began."
    }
  },
  {
    id: "vn3-525",
    word: "そこで",
    reading: "そこで",
    romaji: "sokode",
    meaning: "therefore; then",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "そこで決[き]めた。",
      en: "So I decided."
    }
  },
  {
    id: "vn3-526",
    word: "それとも",
    reading: "それとも",
    romaji: "soretomo",
    meaning: "or (alternative)",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "食[た]べる、それとも飲[の]む？",
      en: "Eat, or drink?"
    }
  },
  {
    id: "vn3-527",
    word: "なぜなら",
    reading: "なぜなら",
    romaji: "nazenara",
    meaning: "because",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "なぜなら暇[ひま]だから。",
      en: "Because I have free time."
    }
  },
  {
    id: "vn3-528",
    word: "その結果",
    reading: "そのけっか",
    romaji: "sonokekka",
    meaning: "as a result",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "その結果[けっか]、失敗[しっぱい]した。",
      en: "As a result, I failed."
    }
  },

  // ============================================================
  // Onomatopoeia — 7 words (vn3-529 .. vn3-535)
  // ============================================================
  {
    id: "vn3-529",
    word: "きらきら",
    reading: "きらきら",
    romaji: "kirakira",
    meaning: "glittering; sparkling",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "星[ほし]がきらきら輝[かがや]く。",
      en: "Stars sparkle brightly."
    }
  },
  {
    id: "vn3-530",
    word: "さっぱり",
    reading: "さっぱり",
    romaji: "sappari",
    meaning: "refreshing; completely (not at all)",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "わからないことだらけでさっぱりだ。",
      en: "I don't understand a thing."
    }
  },
  {
    id: "vn3-531",
    word: "すっきり",
    reading: "すっきり",
    romaji: "sukkiri",
    meaning: "clear; refreshing",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "すっきり目[め]が覚[さ]めた。",
      en: "Woke up refreshed."
    }
  },
  {
    id: "vn3-532",
    word: "てきぱき",
    reading: "てきぱき",
    romaji: "tekipaki",
    meaning: "promptly; efficiently",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "てきぱきと仕事[しごと]をこなす。",
      en: "Handle work efficiently."
    }
  },
  {
    id: "vn3-533",
    word: "どんより",
    reading: "どんより",
    romaji: "donyori",
    meaning: "heavily clouded; gloomy",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "どんよりと曇[くも]った空[そら]。",
      en: "A heavily clouded sky."
    }
  },
  {
    id: "vn3-534",
    word: "ぼんやり",
    reading: "ぼんやり",
    romaji: "bonyari",
    meaning: "dimly; vaguely",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "ぼんやりと考[かんが]える。",
      en: "Think vaguely."
    }
  },
  {
    id: "vn3-535",
    word: "めちゃくちゃ",
    reading: "めちゃくちゃ",
    romaji: "mechakucha",
    meaning: "chaotic; in disorder",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "部屋[へや]がめちゃくちゃだ。",
      en: "The room is in chaos."
    }
  },

  // ============================================================
  // Idioms — 5 words (vn3-536 .. vn3-540)
  // ============================================================
  {
    id: "vn3-536",
    word: "気を取り直す",
    reading: "きをとりなおす",
    romaji: "kiwotorinaosu",
    meaning: "to recover one's spirits",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "気[き]を取[と]り直[なお]してもう一度[いちど]挑戦[ちょうせん]した。",
      en: "Pulled myself together and tried again."
    }
  },
  {
    id: "vn3-537",
    word: "気を許す",
    reading: "きをゆるす",
    romaji: "kiwoyurusu",
    meaning: "to let one's guard down",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "気[き]を許[ゆる]すと騙[だま]される。",
      en: "If you let your guard down, you'll be deceived."
    }
  },
  {
    id: "vn3-538",
    word: "目に入る",
    reading: "めにはいる",
    romaji: "menihairu",
    meaning: "to come into view",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "目[め]に入[はい]った景色[けしき]。",
      en: "The scenery that came into view."
    }
  },
  {
    id: "vn3-539",
    word: "耳を傾ける",
    reading: "みみをかたむける",
    romaji: "mimiwokatamukeru",
    meaning: "to listen attentively",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "人[ひと]の話[はなし]に耳[みみ]を傾[かたむ]ける。",
      en: "Listen attentively to others."
    }
  },
  {
    id: "vn3-540",
    word: "手を抜く",
    reading: "てをぬく",
    romaji: "tewonuku",
    meaning: "to cut corners; to do sloppy work",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "仕事[しごと]で手[て]を抜[ぬ]くな。",
      en: "Don't cut corners at work."
    }
  }
];
