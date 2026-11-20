import type { VocabData } from "@/lib/types";

// JLPT N3 vocabulary — Shinzaizen Master style, chapter-wise by part of speech.
// Furigana notation: kanji readings inline as 漢字[かんじ] (compound runs).
// Total: 180 words (60 Nouns, 40 Verbs, 25 Adjectives, 15 Adverbs, 5 Particles,
// 10 Conjunctions, 15 Onomatopoeia, 10 Idioms).
// IDs: vn3-721 .. vn3-900.
// Deliberately avoids duplicating any word taught in vocabN3A / vocabN3B / vocabN3C / vocabN3D.

export const vocabN3E: VocabData[] = [
  // ============================================================
  // Nouns — 60 words (vn3-721 .. vn3-780)
  // ============================================================
  {
    id: "vn3-721",
    word: "詩",
    reading: "し",
    romaji: "shi",
    meaning: "poem",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "詩[し]を読[よ]む。",
      en: "Read a poem."
    }
  },
  {
    id: "vn3-722",
    word: "小説",
    reading: "しょうせつ",
    romaji: "shousetsu",
    meaning: "novel",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "小説[しょうせつ]を書[か]く。",
      en: "Write a novel."
    }
  },
  {
    id: "vn3-723",
    word: "雑誌",
    reading: "ざっし",
    romaji: "zasshi",
    meaning: "magazine",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "雑誌[ざっし]を読[よ]む。",
      en: "Read a magazine."
    }
  },
  {
    id: "vn3-724",
    word: "辞典",
    reading: "じてん",
    romaji: "jiten",
    meaning: "dictionary",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "辞典[じてん]を引[ひ]く。",
      en: "Consult a dictionary."
    }
  },
  {
    id: "vn3-725",
    word: "記事",
    reading: "きじ",
    romaji: "kiji",
    meaning: "article",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "新聞[しんぶん]の記事[きじ]を読[よ]む。",
      en: "Read a newspaper article."
    }
  },
  {
    id: "vn3-726",
    word: "風景",
    reading: "ふうけい",
    romaji: "fuukei",
    meaning: "scenery",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "風景[ふうけい]がきれいだ。",
      en: "The scenery is beautiful."
    }
  },
  {
    id: "vn3-727",
    word: "景色",
    reading: "けしき",
    romaji: "keshiki",
    meaning: "landscape",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "景色[けしき]を楽[たの]しむ。",
      en: "Enjoy the view."
    }
  },
  {
    id: "vn3-728",
    word: "栄養",
    reading: "えいよう",
    romaji: "eiyou",
    meaning: "nutrition",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "栄養[えいよう]が足[た]りない。",
      en: "Lack nutrition."
    }
  },
  {
    id: "vn3-729",
    word: "消費",
    reading: "しょうひ",
    romaji: "shouhi",
    meaning: "consumption",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "消費[しょうひ]を抑[おさ]える。",
      en: "Restrain consumption."
    }
  },
  {
    id: "vn3-730",
    word: "政府",
    reading: "せいふ",
    romaji: "seifu",
    meaning: "government",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "政府[せいふ]が政策[せいさく]を決[き]める。",
      en: "The government decides policy."
    }
  },
  {
    id: "vn3-731",
    word: "国民",
    reading: "こくみん",
    romaji: "kokumin",
    meaning: "citizen",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "国民[こくみん]の生活[せいかつ]が良[よ]くなる。",
      en: "Citizens' lives improve."
    }
  },
  {
    id: "vn3-732",
    word: "国境",
    reading: "こっきょう",
    romaji: "kokkyou",
    meaning: "border",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "国境[こっきょう]を越[こ]える。",
      en: "Cross the border."
    }
  },
  {
    id: "vn3-733",
    word: "首相",
    reading: "しゅしょう",
    romaji: "shushou",
    meaning: "prime minister",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "新[あたら]しい首相[しゅしょう]になる。",
      en: "Become the new prime minister."
    }
  },
  {
    id: "vn3-734",
    word: "大臣",
    reading: "だいじん",
    romaji: "daijin",
    meaning: "minister",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "大臣[だいじん]が辞[じ]める。",
      en: "The minister resigns."
    }
  },
  {
    id: "vn3-735",
    word: "条約",
    reading: "じょうやく",
    romaji: "jouyaku",
    meaning: "treaty",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "条約[じょうやく]を結[むす]ぶ。",
      en: "Conclude a treaty."
    }
  },
  {
    id: "vn3-736",
    word: "制度",
    reading: "せいど",
    romaji: "seido",
    meaning: "system",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "制度[せいど]を改[あらた]める。",
      en: "Reform the system."
    }
  },
  {
    id: "vn3-737",
    word: "政策",
    reading: "せいさく",
    romaji: "seisaku",
    meaning: "policy",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "新[あたら]しい政策[せいさく]を立[た]てる。",
      en: "Formulate a new policy."
    }
  },
  {
    id: "vn3-738",
    word: "所得",
    reading: "しょとく",
    romaji: "shotoku",
    meaning: "income",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "所得[しょとく]が増[ふ]える。",
      en: "Income increases."
    }
  },
  {
    id: "vn3-739",
    word: "税金",
    reading: "ぜいきん",
    romaji: "zeikin",
    meaning: "tax",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "税金[ぜいきん]を払[はら]う。",
      en: "Pay taxes."
    }
  },
  {
    id: "vn3-740",
    word: "財産",
    reading: "ざいさん",
    romaji: "zaisan",
    meaning: "property",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "財産[ざいさん]を残[のこ]す。",
      en: "Leave property behind."
    }
  },
  {
    id: "vn3-741",
    word: "資産",
    reading: "しさん",
    romaji: "shisan",
    meaning: "assets",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "資産[しさん]を管理[かんり]する。",
      en: "Manage assets."
    }
  },
  {
    id: "vn3-742",
    word: "現金",
    reading: "げんきん",
    romaji: "genkin",
    meaning: "cash",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "現金[げんきん]で払[はら]う。",
      en: "Pay in cash."
    }
  },
  {
    id: "vn3-743",
    word: "通貨",
    reading: "つうか",
    romaji: "tsuuka",
    meaning: "currency",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "通貨[つうか]の価値[かち]が上[あ]がる。",
      en: "The value of the currency rises."
    }
  },
  {
    id: "vn3-744",
    word: "為替",
    reading: "かわせ",
    romaji: "kawase",
    meaning: "exchange",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "為替[かわせ]で損[そん]をする。",
      en: "Lose money on exchange."
    }
  },
  {
    id: "vn3-745",
    word: "信用",
    reading: "しんよう",
    romaji: "shinyou",
    meaning: "trust, credit",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "信用[しんよう]を失[うしな]う。",
      en: "Lose trust."
    }
  },
  {
    id: "vn3-746",
    word: "反応",
    reading: "はんのう",
    romaji: "hannou",
    meaning: "reaction",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "反応[はんのう]が鈍[にぶ]い。",
      en: "The reaction is slow."
    }
  },
  {
    id: "vn3-747",
    word: "感想",
    reading: "かんそう",
    romaji: "kansou",
    meaning: "impression",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "感想[かんそう]を述[の]べる。",
      en: "State one's impressions."
    }
  },
  {
    id: "vn3-748",
    word: "主張",
    reading: "しゅちょう",
    romaji: "shuchou",
    meaning: "assertion",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "主張[しゅちょう]を曲[ま]げない。",
      en: "Stick to one's assertion."
    }
  },
  {
    id: "vn3-749",
    word: "議論",
    reading: "ぎろん",
    romaji: "giron",
    meaning: "discussion",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "議論[ぎろん]が続[つづ]く。",
      en: "The discussion continues."
    }
  },
  {
    id: "vn3-750",
    word: "論文",
    reading: "ろんぶん",
    romaji: "ronbun",
    meaning: "thesis",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "論文[ろんぶん]を発表[はっぴょう]する。",
      en: "Present a thesis."
    }
  },
  {
    id: "vn3-751",
    word: "学者",
    reading: "がくしゃ",
    romaji: "gakusha",
    meaning: "scholar",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "学者[がくしゃ]が集[あつ]まる。",
      en: "Scholars gather."
    }
  },
  {
    id: "vn3-752",
    word: "教授",
    reading: "きょうじゅ",
    romaji: "kyouju",
    meaning: "professor",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "教授[きょうじゅ]に質問[しつもん]する。",
      en: "Ask the professor a question."
    }
  },
  {
    id: "vn3-753",
    word: "研究員",
    reading: "けんきゅういん",
    romaji: "kenkyuuin",
    meaning: "researcher",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "研究員[けんきゅういん]になる。",
      en: "Become a researcher."
    }
  },
  {
    id: "vn3-754",
    word: "専門",
    reading: "せんもん",
    romaji: "senmon",
    meaning: "specialty",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "専門[せんもん]は歴史[れきし]だ。",
      en: "My specialty is history."
    }
  },
  {
    id: "vn3-755",
    word: "技能",
    reading: "ぎのう",
    romaji: "ginou",
    meaning: "skill",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "技能[ぎのう]を磨[みが]く。",
      en: "Polish one's skills."
    }
  },
  {
    id: "vn3-756",
    word: "能力",
    reading: "のうりょく",
    romaji: "nouryoku",
    meaning: "ability",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "能力[のうりょく]がある人[ひと]を探[さが]す。",
      en: "Look for a capable person."
    }
  },
  {
    id: "vn3-757",
    word: "実力",
    reading: "じつりょく",
    romaji: "jitsuryoku",
    meaning: "real ability",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "実力[じつりょく]を試[ため]す。",
      en: "Test one's ability."
    }
  },
  {
    id: "vn3-758",
    word: "適性",
    reading: "てきせい",
    romaji: "tekisei",
    meaning: "aptitude",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "適性[てきせい]検査[けんさ]を受[う]ける。",
      en: "Take an aptitude test."
    }
  },
  {
    id: "vn3-759",
    word: "経歴",
    reading: "けいれき",
    romaji: "keireki",
    meaning: "career",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "経歴[けいれき]を書[か]く。",
      en: "Write one's career history."
    }
  },
  {
    id: "vn3-760",
    word: "資格",
    reading: "しかく",
    romaji: "shikaku",
    meaning: "qualification",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "資格[しかく]を取[と]る。",
      en: "Obtain a qualification."
    }
  },
  {
    id: "vn3-761",
    word: "免許",
    reading: "めんきょ",
    romaji: "menkyo",
    meaning: "license",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "運転[うんてん]免許[めんきょ]を取[と]る。",
      en: "Get a driver's license."
    }
  },
  {
    id: "vn3-762",
    word: "証明書",
    reading: "しょうめいしょ",
    romaji: "shoumeisho",
    meaning: "certificate",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "証明書[しょうめいしょ]を出[だ]す。",
      en: "Issue a certificate."
    }
  },
  {
    id: "vn3-763",
    word: "印鑑",
    reading: "いんかん",
    romaji: "inkan",
    meaning: "seal",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "印鑑[いんかん]を押[お]す。",
      en: "Press one's seal."
    }
  },
  {
    id: "vn3-764",
    word: "署名",
    reading: "しょめい",
    romaji: "shomei",
    meaning: "signature",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "署名[しょめい]をする。",
      en: "Sign one's name."
    }
  },
  {
    id: "vn3-765",
    word: "推薦状",
    reading: "すいせんじょう",
    romaji: "suisenjou",
    meaning: "letter of recommendation",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "推薦状[すいせんじょう]を書[か]く。",
      en: "Write a recommendation letter."
    }
  },
  {
    id: "vn3-766",
    word: "観客",
    reading: "かんきゃく",
    romaji: "kankyaku",
    meaning: "audience",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "観客[かんきゃく]が沸[わ]く。",
      en: "The audience erupts."
    }
  },
  {
    id: "vn3-767",
    word: "観光",
    reading: "かんこう",
    romaji: "kankou",
    meaning: "sightseeing",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "観光[かんこう]に行[い]く。",
      en: "Go sightseeing."
    }
  },
  {
    id: "vn3-768",
    word: "観光客",
    reading: "かんこうきゃく",
    romaji: "kankoukyaku",
    meaning: "tourist",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "観光客[かんこうきゃく]が多[おお]い。",
      en: "There are many tourists."
    }
  },
  {
    id: "vn3-769",
    word: "旅行者",
    reading: "りょこうしゃ",
    romaji: "ryokousha",
    meaning: "traveler",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "旅行者[りょこうしゃ]が写真[しゃしん]を撮[と]る。",
      en: "A traveler takes photos."
    }
  },
  {
    id: "vn3-770",
    word: "郷里",
    reading: "きょうり",
    romaji: "kyouri",
    meaning: "hometown",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "郷里[きょうり]に帰[かえ]る。",
      en: "Return to one's hometown."
    }
  },
  {
    id: "vn3-771",
    word: "出身地",
    reading: "しゅっしんち",
    romaji: "shusshinchi",
    meaning: "birthplace",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "出身地[しゅっしんち]を聞[き]く。",
      en: "Ask someone's birthplace."
    }
  },
  {
    id: "vn3-772",
    word: "身分",
    reading: "みぶん",
    romaji: "mibun",
    meaning: "social status",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "身分[みぶん]を証明[しょうめい]する。",
      en: "Prove one's identity."
    }
  },
  {
    id: "vn3-773",
    word: "暮らし",
    reading: "くらし",
    romaji: "kurashi",
    meaning: "living, livelihood",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "暮[く]らしが豊[ゆた]かだ。",
      en: "Livelihood is rich."
    }
  },
  {
    id: "vn3-774",
    word: "生活費",
    reading: "せいかつひ",
    romaji: "seikatsuhi",
    meaning: "living expenses",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "生活費[せいかつひ]が足[た]りない。",
      en: "Living expenses are insufficient."
    }
  },
  {
    id: "vn3-775",
    word: "家賃",
    reading: "やちん",
    romaji: "yachin",
    meaning: "rent",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "家賃[やちん]を払[はら]う。",
      en: "Pay the rent."
    }
  },
  {
    id: "vn3-776",
    word: "光熱費",
    reading: "こうねつひ",
    romaji: "kounetsuhi",
    meaning: "utility bills",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "光熱費[こうねつひ]が高[たか]い。",
      en: "Utility bills are high."
    }
  },
  {
    id: "vn3-777",
    word: "雑費",
    reading: "ざっぴ",
    romaji: "zappi",
    meaning: "miscellaneous expenses",
    level: "N3",
    lesson: 57,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "雑費[ざっぴ]がかかる。",
      en: "Miscellaneous expenses accrue."
    }
  },
  {
    id: "vn3-778",
    word: "交通費",
    reading: "こうつうひ",
    romaji: "koutsuuhi",
    meaning: "transportation expenses",
    level: "N3",
    lesson: 58,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "交通費[こうつうひ]を支払[しはら]う。",
      en: "Pay transportation costs."
    }
  },
  {
    id: "vn3-779",
    word: "食費",
    reading: "しょくひ",
    romaji: "shokuhi",
    meaning: "food expenses",
    level: "N3",
    lesson: 58,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "食費[しょくひ]が高[たか]い。",
      en: "Food expenses are high."
    }
  },
  {
    id: "vn3-780",
    word: "雑貨",
    reading: "ざっか",
    romaji: "zakka",
    meaning: "general goods",
    level: "N3",
    lesson: 58,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "雑貨[ざっか]を買[か]う。",
      en: "Buy general goods."
    }
  },

  // ============================================================
  // Verbs — 40 words (vn3-781 .. vn3-820)
  // ============================================================
  {
    id: "vn3-781",
    word: "迷う",
    reading: "まよう",
    romaji: "mayou",
    meaning: "to hesitate, lose one's way",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "道[みち]に迷[まよ]う。",
      en: "Lose one's way."
    }
  },
  {
    id: "vn3-782",
    word: "諦める",
    reading: "あきらめる",
    romaji: "akirameru",
    meaning: "to give up",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "夢[ゆめ]を諦[あきら]める。",
      en: "Give up a dream."
    }
  },
  {
    id: "vn3-783",
    word: "見渡す",
    reading: "みわたす",
    romaji: "miwatasu",
    meaning: "to look out over",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "海[うみ]を見渡[みわた]す。",
      en: "Look out over the sea."
    }
  },
  {
    id: "vn3-784",
    word: "見破る",
    reading: "みやぶる",
    romaji: "miyaburu",
    meaning: "to see through",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "嘘[うそ]を見破[みやぶ]る。",
      en: "See through a lie."
    }
  },
  {
    id: "vn3-785",
    word: "見慣れる",
    reading: "みなれる",
    romaji: "minareru",
    meaning: "to be used to seeing",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "見慣[みな]れた顔[かお]。",
      en: "A familiar face."
    }
  },
  {
    id: "vn3-786",
    word: "見当たる",
    reading: "みあたる",
    romaji: "miataru",
    meaning: "to be found",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "鍵[かぎ]が見当[みあ]たらない。",
      en: "The key cannot be found."
    }
  },
  {
    id: "vn3-787",
    word: "思いやる",
    reading: "おもいやる",
    romaji: "omoiyaru",
    meaning: "to be considerate",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "人[ひと]を思[おも]いやる。",
      en: "Be considerate of others."
    }
  },
  {
    id: "vn3-788",
    word: "思い詰める",
    reading: "おもいつめる",
    romaji: "omoitsumeru",
    meaning: "to brood over",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "悩[なや]みを思[おも]い詰[つ]める。",
      en: "Brood over one's worries."
    }
  },
  {
    id: "vn3-789",
    word: "思い浮かべる",
    reading: "おもいうかべる",
    romaji: "omoiukaberu",
    meaning: "to call to mind",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "昔[むかし]を思[おも]い浮[うか]べる。",
      en: "Call the past to mind."
    }
  },
  {
    id: "vn3-790",
    word: "取り残す",
    reading: "とりのこす",
    romaji: "torinokosu",
    meaning: "to leave behind",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "友[とも]を取[と]り残[のこ]す。",
      en: "Leave a friend behind."
    }
  },
  {
    id: "vn3-791",
    word: "取り掛かる",
    reading: "とりかかる",
    romaji: "torikakaru",
    meaning: "to set about",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "仕事[しごと]に取[と]り掛[か]かる。",
      en: "Set about work."
    }
  },
  {
    id: "vn3-792",
    word: "取り巻く",
    reading: "とりまく",
    romaji: "torimaku",
    meaning: "to surround",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "記者[きしゃ]が取[と]り巻[ま]く。",
      en: "Reporters surround."
    }
  },
  {
    id: "vn3-793",
    word: "飛び出す",
    reading: "とびだす",
    romaji: "tobidasu",
    meaning: "to jump out",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "犬[いぬ]が飛[と]び出[だ]す。",
      en: "A dog jumps out."
    }
  },
  {
    id: "vn3-794",
    word: "飛び込む",
    reading: "とびこむ",
    romaji: "tobikomu",
    meaning: "to jump into",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "プールに飛[と]び込[こ]む。",
      en: "Jump into the pool."
    }
  },
  {
    id: "vn3-795",
    word: "飛び降りる",
    reading: "とびおりる",
    romaji: "tobioriru",
    meaning: "to jump down",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "電車[でんしゃ]から飛[と]び降[お]りる。",
      en: "Jump down from a train."
    }
  },
  {
    id: "vn3-796",
    word: "駆ける",
    reading: "かける",
    romaji: "kakeru",
    meaning: "to run",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "子供[こども]が駆[か]ける。",
      en: "A child runs."
    }
  },
  {
    id: "vn3-797",
    word: "駆け付ける",
    reading: "かけつける",
    romaji: "kaketsukeru",
    meaning: "to rush to",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "現場[げんば]に駆[か]け付[つ]ける。",
      en: "Rush to the scene."
    }
  },
  {
    id: "vn3-798",
    word: "追い越す",
    reading: "おいこす",
    romaji: "oikosu",
    meaning: "to overtake",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "前[まえ]の車[くるま]を追[お]い越[こ]す。",
      en: "Overtake the car ahead."
    }
  },
  {
    id: "vn3-799",
    word: "追い出す",
    reading: "おいだす",
    romaji: "oidasu",
    meaning: "to expel",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "部屋[へや]から追[お]い出[だ]す。",
      en: "Kick out of the room."
    }
  },
  {
    id: "vn3-800",
    word: "追い返す",
    reading: "おいかえす",
    romaji: "oikaesu",
    meaning: "to send back",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "客[きゃく]を追[お]い返[かえ]す。",
      en: "Send a customer back."
    }
  },
  {
    id: "vn3-801",
    word: "追い付く",
    reading: "おいつく",
    romaji: "oitsuku",
    meaning: "to catch up",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "トップに追[お]い付[つ]く。",
      en: "Catch up with the leader."
    }
  },
  {
    id: "vn3-802",
    word: "追い払う",
    reading: "おいはらう",
    romaji: "oiharau",
    meaning: "to drive away",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "虫[むし]を追[お]い払[はら]う。",
      en: "Drive away bugs."
    }
  },
  {
    id: "vn3-803",
    word: "追加する",
    reading: "ついかする",
    romaji: "tsuikasuru",
    meaning: "to add",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "メニューを追加[ついか]する。",
      en: "Add to the menu."
    }
  },
  {
    id: "vn3-804",
    word: "改める",
    reading: "あらためる",
    romaji: "aratameru",
    meaning: "to reform",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "態度[たいど]を改[あらた]める。",
      en: "Change one's attitude."
    }
  },
  {
    id: "vn3-805",
    word: "改善する",
    reading: "かいぜんする",
    romaji: "kaizensuru",
    meaning: "to improve",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "環境[かんきょう]を改善[かいぜん]する。",
      en: "Improve the environment."
    }
  },
  {
    id: "vn3-806",
    word: "訂正する",
    reading: "ていせいする",
    romaji: "teiseisuru",
    meaning: "to correct",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "間違[まちが]いを訂正[ていせい]する。",
      en: "Correct a mistake."
    }
  },
  {
    id: "vn3-807",
    word: "修正する",
    reading: "しゅうせいする",
    romaji: "shuuseisuru",
    meaning: "to amend",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "データを修正[しゅうせい]する。",
      en: "Amend the data."
    }
  },
  {
    id: "vn3-808",
    word: "修理する",
    reading: "しゅうりする",
    romaji: "shuurisuru",
    meaning: "to repair",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "車[くるま]を修理[しゅうり]する。",
      en: "Repair a car."
    }
  },
  {
    id: "vn3-809",
    word: "直す",
    reading: "なおす",
    romaji: "naosu",
    meaning: "to fix",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "壊[こわ]れた時計[とけい]を直[なお]す。",
      en: "Fix a broken clock."
    }
  },
  {
    id: "vn3-810",
    word: "直る",
    reading: "なおる",
    romaji: "naoru",
    meaning: "to be fixed",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "時計[とけい]が直[なお]る。",
      en: "The clock gets fixed."
    }
  },
  {
    id: "vn3-811",
    word: "壊れる",
    reading: "こわれる",
    romaji: "kowareru",
    meaning: "to break",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "窓[まど]が壊[こわ]れる。",
      en: "The window breaks."
    }
  },
  {
    id: "vn3-812",
    word: "壊す",
    reading: "こわす",
    romaji: "kowasu",
    meaning: "to break",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "おもちゃを壊[こわ]す。",
      en: "Break a toy."
    }
  },
  {
    id: "vn3-813",
    word: "破る",
    reading: "やぶる",
    romaji: "yaburu",
    meaning: "to tear",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "紙[かみ]を破[やぶ]る。",
      en: "Tear paper."
    }
  },
  {
    id: "vn3-814",
    word: "破れる",
    reading: "やぶれる",
    romaji: "yabureru",
    meaning: "to be torn",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "服[ふく]が破[やぶ]れる。",
      en: "Clothes get torn."
    }
  },
  {
    id: "vn3-815",
    word: "割れる",
    reading: "われる",
    romaji: "wareru",
    meaning: "to crack",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "卵[たまご]が割[わ]れる。",
      en: "An egg cracks."
    }
  },
  {
    id: "vn3-816",
    word: "割る",
    reading: "わる",
    romaji: "waru",
    meaning: "to crack, divide",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "卵[たまご]を割[わ]る。",
      en: "Crack an egg."
    }
  },
  {
    id: "vn3-817",
    word: "落ちる",
    reading: "おちる",
    romaji: "ochiru",
    meaning: "to fall",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "葉[は]が落[お]ちる。",
      en: "Leaves fall."
    }
  },
  {
    id: "vn3-818",
    word: "落とす",
    reading: "おとす",
    romaji: "otosu",
    meaning: "to drop",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "財布[さいふ]を落[お]とす。",
      en: "Drop a wallet."
    }
  },
  {
    id: "vn3-819",
    word: "拾う",
    reading: "ひろう",
    romaji: "hirou",
    meaning: "to pick up",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "落[お]ちたお金[かね]を拾[ひろ]う。",
      en: "Pick up fallen money."
    }
  },
  {
    id: "vn3-820",
    word: "捨てる",
    reading: "すてる",
    romaji: "suteru",
    meaning: "to discard",
    level: "N3",
    lesson: 58,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "ゴミを捨[す]てる。",
      en: "Throw away trash."
    }
  },

  // ============================================================
  // Adjectives — 25 words (vn3-821 .. vn3-845)
  // ============================================================
  {
    id: "vn3-821",
    word: "素晴らしい",
    reading: "すばらしい",
    romaji: "subarashii",
    meaning: "wonderful",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "素晴[すば]らしい景色[けしき]だ。",
      en: "It's wonderful scenery."
    }
  },
  {
    id: "vn3-822",
    word: "怪しい",
    reading: "あやしい",
    romaji: "ayashii",
    meaning: "suspicious",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "怪[あや]しい人[ひと]がいる。",
      en: "There is a suspicious person."
    }
  },
  {
    id: "vn3-823",
    word: "慌ただしい",
    reading: "あわただしい",
    romaji: "awatadashii",
    meaning: "hurried",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "慌[あわただ]しい一日[いちにち]だ。",
      en: "It's a hectic day."
    }
  },
  {
    id: "vn3-824",
    word: "勇ましい",
    reading: "いさましい",
    romaji: "isamashii",
    meaning: "gallant",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "勇[いさま]しい姿[すがた]を見[み]る。",
      en: "See a brave figure."
    }
  },
  {
    id: "vn3-825",
    word: "凄まじい",
    reading: "すさまじい",
    romaji: "susamajii",
    meaning: "dreadful",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "凄[すさま]じい音[おと]がする。",
      en: "A tremendous sound is heard."
    }
  },
  {
    id: "vn3-826",
    word: "恐ろしい",
    reading: "おそろしい",
    romaji: "osoroshii",
    meaning: "terrifying",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "恐[おそろ]しい話[はなし]を聞[き]く。",
      en: "Listen to a scary story."
    }
  },
  {
    id: "vn3-827",
    word: "物足りない",
    reading: "ものたりない",
    romaji: "monotarinai",
    meaning: "unsatisfying",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "物足[ものた]りない結果[けっか]だ。",
      en: "It's an unsatisfying result."
    }
  },
  {
    id: "vn3-828",
    word: "物凄い",
    reading: "ものすごい",
    romaji: "monosugoi",
    meaning: "tremendous",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "物凄[ものすご]い風[かぜ]が吹[ふ]く。",
      en: "A tremendous wind blows."
    }
  },
  {
    id: "vn3-829",
    word: "寂しい",
    reading: "さびしい",
    romaji: "sabishii",
    meaning: "lonely",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "寂[さび]しい気持[きも]ちになる。",
      en: "Feel lonely."
    }
  },
  {
    id: "vn3-830",
    word: "気高い",
    reading: "けたかい",
    romaji: "ketakai",
    meaning: "noble",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "気高[けたか]い精神[せいしん]を持[も]つ。",
      en: "Have a noble spirit."
    }
  },
  {
    id: "vn3-831",
    word: "見事",
    reading: "みごと",
    romaji: "migoto",
    meaning: "splendid",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "見事[みごと]な成果[せいか]だ。",
      en: "It's a splendid result."
    }
  },
  {
    id: "vn3-832",
    word: "愉快",
    reading: "ゆかい",
    romaji: "yukai",
    meaning: "amusing",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "愉快[ゆかい]な人[ひと]だ。",
      en: "He's an amusing person."
    }
  },
  {
    id: "vn3-833",
    word: "不愉快",
    reading: "ふゆかい",
    romaji: "fuyukai",
    meaning: "unpleasant",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "不愉快[ふゆかい]な出来事[できごと]があった。",
      en: "There was an unpleasant event."
    }
  },
  {
    id: "vn3-834",
    word: "素敵",
    reading: "すてき",
    romaji: "suteki",
    meaning: "lovely",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "素敵[すてき]な服[ふく]を着[き]る。",
      en: "Wear a lovely dress."
    }
  },
  {
    id: "vn3-835",
    word: "穏やか",
    reading: "おだやか",
    romaji: "odayaka",
    meaning: "calm",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "穏[おだ]やかな海[うみ]を見[み]る。",
      en: "Look at a calm sea."
    }
  },
  {
    id: "vn3-836",
    word: "気短",
    reading: "きみじか",
    romaji: "kimijika",
    meaning: "short-tempered",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "気短[きみじか]な性格[せいかく]だ。",
      en: "He has a short-tempered personality."
    }
  },
  {
    id: "vn3-837",
    word: "気長",
    reading: "きなが",
    romaji: "kinaga",
    meaning: "patient",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "気長[きなが]に待[ま]つ。",
      en: "Wait patiently."
    }
  },
  {
    id: "vn3-838",
    word: "下品",
    reading: "げひん",
    romaji: "gehin",
    meaning: "vulgar",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "下品[げひん]な言葉[ことば]を使[つか]う。",
      en: "Use vulgar words."
    }
  },
  {
    id: "vn3-839",
    word: "上品",
    reading: "じょうひん",
    romaji: "jouhin",
    meaning: "elegant",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "上品[じょうひん]に振[ふ]る舞[まい]する。",
      en: "Behave elegantly."
    }
  },
  {
    id: "vn3-840",
    word: "大雑把",
    reading: "おおざっぱ",
    romaji: "oozappa",
    meaning: "rough",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "大雑把[おおざっぱ]な計画[けいかく]を立[た]てる。",
      en: "Make a rough plan."
    }
  },
  {
    id: "vn3-841",
    word: "繊細",
    reading: "せんさい",
    romaji: "sensai",
    meaning: "delicate",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "繊細[せんさい]な模様[もよう]が美[うつく]しい。",
      en: "The delicate pattern is beautiful."
    }
  },
  {
    id: "vn3-842",
    word: "粗末",
    reading: "そまつ",
    romaji: "somatsu",
    meaning: "meager",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "粗末[そまつ]な食事[しょくじ]をとる。",
      en: "Have a meager meal."
    }
  },
  {
    id: "vn3-843",
    word: "丁寧",
    reading: "ていねい",
    romaji: "teinei",
    meaning: "polite",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "丁寧[ていねい]に挨拶[あいさつ]する。",
      en: "Greet politely."
    }
  },
  {
    id: "vn3-844",
    word: "雑",
    reading: "ざつ",
    romaji: "zatsu",
    meaning: "rough, sloppy",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "仕事[しごと]が雑[ざつ]だ。",
      en: "The work is sloppy."
    }
  },
  {
    id: "vn3-845",
    word: "厚かましい",
    reading: "あつかましい",
    romaji: "atsukamashii",
    meaning: "shameless",
    level: "N3",
    lesson: 58,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "厚[あつ]かましい要求[ようきゅう]をする。",
      en: "Make a shameless demand."
    }
  },

  // ============================================================
  // Adverbs — 15 words (vn3-846 .. vn3-860)
  // ============================================================
  {
    id: "vn3-846",
    word: "かえって",
    reading: "かえって",
    romaji: "kaette",
    meaning: "on the contrary",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "かえって疲[つか]れる。",
      en: "Get tired instead."
    }
  },
  {
    id: "vn3-847",
    word: "とりあえず",
    reading: "とりあえず",
    romaji: "toriaezu",
    meaning: "for the time being",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "とりあえずビール。",
      en: "Beer for now."
    }
  },
  {
    id: "vn3-848",
    word: "ともかく",
    reading: "ともかく",
    romaji: "tomokaku",
    meaning: "anyway, setting aside",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ともかく行[い]こう。",
      en: "Anyway, let's go."
    }
  },
  {
    id: "vn3-849",
    word: "なんとか",
    reading: "なんとか",
    romaji: "nantoka",
    meaning: "somehow",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "なんとか間[ま]に合[あ]う。",
      en: "Make it somehow."
    }
  },
  {
    id: "vn3-850",
    word: "なんとなく",
    reading: "なんとなく",
    romaji: "nantonaku",
    meaning: "for some reason",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "なんとなく不安[ふあん]だ。",
      en: "Feel uneasy for some reason."
    }
  },
  {
    id: "vn3-851",
    word: "つい",
    reading: "つい",
    romaji: "tsui",
    meaning: "inadvertently",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "つい笑[わら]う。",
      en: "Laugh involuntarily."
    }
  },
  {
    id: "vn3-852",
    word: "先ほど",
    reading: "さきほど",
    romaji: "sakihodo",
    meaning: "a moment ago",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "先[さき]ほど電話[でんわ]があった。",
      en: "There was a phone call earlier."
    }
  },
  {
    id: "vn3-853",
    word: "ただ",
    reading: "ただ",
    romaji: "tada",
    meaning: "merely",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ただ待[ま]つだけだ。",
      en: "Just wait."
    }
  },
  {
    id: "vn3-854",
    word: "仮に",
    reading: "かりに",
    romaji: "karini",
    meaning: "temporarily",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "仮[かり]に休[やす]む。",
      en: "Take a temporary rest."
    }
  },
  {
    id: "vn3-855",
    word: "頻りに",
    reading: "しきりに",
    romaji: "shikirini",
    meaning: "frequently",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "頻[しきり]に電話[でんわ]が鳴[な]る。",
      en: "The phone rings frequently."
    }
  },
  {
    id: "vn3-856",
    word: "度々",
    reading: "たびたび",
    romaji: "tabitabi",
    meaning: "repeatedly",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "度々[たびたび]迷惑[めいわく]をかける。",
      en: "Cause trouble repeatedly."
    }
  },
  {
    id: "vn3-857",
    word: "ひとまず",
    reading: "ひとまず",
    romaji: "hitomazu",
    meaning: "for the time being",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ひとまず帰[かえ]る。",
      en: "Return for the time being."
    }
  },
  {
    id: "vn3-858",
    word: "まあまあ",
    reading: "まあまあ",
    romaji: "maamaa",
    meaning: "fairly",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "まあまあ上手[じょうず]だ。",
      en: "Fairly good."
    }
  },
  {
    id: "vn3-859",
    word: "ほぼ",
    reading: "ほぼ",
    romaji: "hobo",
    meaning: "almost",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ほぼ終[お]わった。",
      en: "Almost finished."
    }
  },
  {
    id: "vn3-860",
    word: "予め",
    reading: "あらかじめ",
    romaji: "arakajime",
    meaning: "in advance",
    level: "N3",
    lesson: 58,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "予[あらかじ]め連絡[れんらく]する。",
      en: "Contact in advance."
    }
  },

  // ============================================================
  // Particles — 5 words (vn3-861 .. vn3-865)
  // ============================================================
  {
    id: "vn3-861",
    word: "きり",
    reading: "きり",
    romaji: "kiri",
    meaning: "only",
    level: "N3",
    lesson: 58,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "一度[いちど]きりの機会[きかい]だ。",
      en: "It's a once-in-a-lifetime opportunity."
    }
  },
  {
    id: "vn3-862",
    word: "ずつ",
    reading: "ずつ",
    romaji: "zutsu",
    meaning: "apiece",
    level: "N3",
    lesson: 58,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "一人[ひとり]ずつ話[はな]す。",
      en: "Speak one by one."
    }
  },
  {
    id: "vn3-863",
    word: "だの",
    reading: "だの",
    romaji: "dano",
    meaning: "such things as",
    level: "N3",
    lesson: 58,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "親[おや]だの兄弟[きょうだい]だのが来[き]た。",
      en: "Parents, siblings, and such came."
    }
  },
  {
    id: "vn3-864",
    word: "すら",
    reading: "すら",
    romaji: "sura",
    meaning: "even",
    level: "N3",
    lesson: 58,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "子供[こども]すら知[し]っている。",
      en: "Even a child knows."
    }
  },
  {
    id: "vn3-865",
    word: "かしら",
    reading: "かしら",
    romaji: "kashira",
    meaning: "I wonder",
    level: "N3",
    lesson: 58,
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "雨[あめ]が降[ふ]るかしら。",
      en: "I wonder if it will rain."
    }
  },

  // ============================================================
  // Conjunctions — 10 words (vn3-866 .. vn3-875)
  // ============================================================
  {
    id: "vn3-866",
    word: "ところが",
    reading: "ところが",
    romaji: "tokoroga",
    meaning: "however",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "ところが、結果[けっか]は違[ちが]った。",
      en: "However, the result was different."
    }
  },
  {
    id: "vn3-867",
    word: "だが",
    reading: "だが",
    romaji: "daga",
    meaning: "but (formal)",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "だが、諦[あきら]めない。",
      en: "But I won't give up."
    }
  },
  {
    id: "vn3-868",
    word: "けれど",
    reading: "けれど",
    romaji: "keredo",
    meaning: "but",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "けれど、楽[たの]しかった。",
      en: "But it was fun."
    }
  },
  {
    id: "vn3-869",
    word: "しかも",
    reading: "しかも",
    romaji: "shikamo",
    meaning: "moreover",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "しかも、無料[むりょう]だ。",
      en: "Moreover, it's free."
    }
  },
  {
    id: "vn3-870",
    word: "おまけに",
    reading: "おまけに",
    romaji: "omakeni",
    meaning: "besides",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "おまけに、時間[じかん]もかかる。",
      en: "Besides, it takes time."
    }
  },
  {
    id: "vn3-871",
    word: "それに",
    reading: "それに",
    romaji: "soreni",
    meaning: "in addition",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "それに、面倒[めんどう]だ。",
      en: "In addition, it's troublesome."
    }
  },
  {
    id: "vn3-872",
    word: "なお",
    reading: "なお",
    romaji: "nao",
    meaning: "additionally",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "なお、質問[しつもん]はありますか。",
      en: "Additionally, are there any questions?"
    }
  },
  {
    id: "vn3-873",
    word: "結局",
    reading: "けっきょく",
    romaji: "kekkyoku",
    meaning: "after all",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "結局[けっきょく]、負[ま]けた。",
      en: "After all, we lost."
    }
  },
  {
    id: "vn3-874",
    word: "要するに",
    reading: "ようするに",
    romaji: "yousuruni",
    meaning: "in short",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "要[よう]するに、無理[むり]だ。",
      en: "In short, it's impossible."
    }
  },
  {
    id: "vn3-875",
    word: "ところで",
    reading: "ところで",
    romaji: "tokorode",
    meaning: "by the way",
    level: "N3",
    lesson: 58,
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "ところで、元気[げんき]ですか。",
      en: "By the way, how are you?"
    }
  },

  // ============================================================
  // Onomatopoeia — 15 words (vn3-876 .. vn3-890)
  // ============================================================
  {
    id: "vn3-876",
    word: "はらはら",
    reading: "はらはら",
    romaji: "harahara",
    meaning: "in suspense",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "試合[しあい]を見[み]てはらはらする。",
      en: "Watch the game in suspense."
    }
  },
  {
    id: "vn3-877",
    word: "そわそわ",
    reading: "そわそわ",
    romaji: "sowasowa",
    meaning: "fidgety",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "待[ま]ち遠[どお]しくてそわそわする。",
      en: "Fidget with anticipation."
    }
  },
  {
    id: "vn3-878",
    word: "うっとり",
    reading: "うっとり",
    romaji: "uttori",
    meaning: "enchanted",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "音楽[おんがく]にうっとりする。",
      en: "Be entranced by music."
    }
  },
  {
    id: "vn3-879",
    word: "うつらうつら",
    reading: "うつらうつら",
    romaji: "utsurautsura",
    meaning: "dozing",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "電車[でんしゃ]でうつらうつらする。",
      en: "Doze off on the train."
    }
  },
  {
    id: "vn3-880",
    word: "ごろごろ",
    reading: "ごろごろ",
    romaji: "gorogoro",
    meaning: "idling",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "家[いえ]でごろごろする。",
      en: "Idle around at home."
    }
  },
  {
    id: "vn3-881",
    word: "ばらばら",
    reading: "ばらばら",
    romaji: "barabara",
    meaning: "scattered",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "本[ほん]がばらばらに落[お]ちる。",
      en: "Books fall scattered."
    }
  },
  {
    id: "vn3-882",
    word: "かさかさ",
    reading: "かさかさ",
    romaji: "kasakasa",
    meaning: "dry",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "肌[はだ]がかさかさだ。",
      en: "Skin is dry."
    }
  },
  {
    id: "vn3-883",
    word: "しっとり",
    reading: "しっとり",
    romaji: "shittori",
    meaning: "moist",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "ケーキがしっとりしている。",
      en: "The cake is moist."
    }
  },
  {
    id: "vn3-884",
    word: "ぼろぼろ",
    reading: "ぼろぼろ",
    romaji: "boroboro",
    meaning: "tattered",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "服[ふく]がぼろぼろだ。",
      en: "The clothes are tattered."
    }
  },
  {
    id: "vn3-885",
    word: "だらだら",
    reading: "だらだら",
    romaji: "daradara",
    meaning: "lazily",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "だらだら過[す]ごす。",
      en: "Spend time lazily."
    }
  },
  {
    id: "vn3-886",
    word: "きょろきょろ",
    reading: "きょろきょろ",
    romaji: "kyorokyoro",
    meaning: "looking around",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "子供[こども]がきょろきょろする。",
      en: "A child looks around restlessly."
    }
  },
  {
    id: "vn3-887",
    word: "うろうろ",
    reading: "うろうろ",
    romaji: "urouro",
    meaning: "wandering",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "駅[えき]でうろうろする。",
      en: "Wander around the station."
    }
  },
  {
    id: "vn3-888",
    word: "もじもじ",
    reading: "もじもじ",
    romaji: "mojimoji",
    meaning: "hesitating",
    level: "N3",
    lesson: 58,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "もじもじと立[た]つ。",
      en: "Stand hesitantly."
    }
  },
  {
    id: "vn3-889",
    word: "どたばた",
    reading: "どたばた",
    romaji: "dotabata",
    meaning: "noisy commotion",
    level: "N3",
    lesson: 59,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "隣[となり]がどたばたする。",
      en: "The neighbor makes a commotion."
    }
  },
  {
    id: "vn3-890",
    word: "ぺらぺら",
    reading: "ぺらぺら",
    romaji: "perapera",
    meaning: "fluently",
    level: "N3",
    lesson: 59,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "英語[えいご]をぺらぺら話[はな]す。",
      en: "Speak English fluently."
    }
  },

  // ============================================================
  // Idioms — 10 words (vn3-891 .. vn3-900)
  // ============================================================
  {
    id: "vn3-891",
    word: "頭が下がる",
    reading: "あたまがさがる",
    romaji: "atamagasagaru",
    meaning: "to feel deep respect",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "先生[せんせい]に頭[あたま]が下[さが]る。",
      en: "Feel deep respect for the teacher."
    }
  },
  {
    id: "vn3-892",
    word: "頭にくる",
    reading: "あたまにくる",
    romaji: "atamanikuru",
    meaning: "to get angry",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]の態度[たいど]に頭[あたま]にくる。",
      en: "Get mad at his attitude."
    }
  },
  {
    id: "vn3-893",
    word: "頭をひねる",
    reading: "あたまをひねる",
    romaji: "atamawohineru",
    meaning: "to rack one's brain",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "問題[もんだい]に頭[あたま]をひねる。",
      en: "Rack one's brain over a problem."
    }
  },
  {
    id: "vn3-894",
    word: "目をつぶる",
    reading: "めをつぶる",
    romaji: "mewotsuburu",
    meaning: "to turn a blind eye",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "過[あやま]ちに目[め]をつぶる。",
      en: "Turn a blind eye to a mistake."
    }
  },
  {
    id: "vn3-895",
    word: "目を引く",
    reading: "めをひく",
    romaji: "mewohiku",
    meaning: "to catch the eye",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "派手[はで]な色[いろ]が目[め]を引[ひ]く。",
      en: "A flashy color catches the eye."
    }
  },
  {
    id: "vn3-896",
    word: "耳を澄ます",
    reading: "みみをすます",
    romaji: "mimiwosumasu",
    meaning: "to listen carefully",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "音[おと]に耳[みみ]を澄[す]ます。",
      en: "Listen carefully to the sound."
    }
  },
  {
    id: "vn3-897",
    word: "口が滑る",
    reading: "くちがすべる",
    romaji: "kuchigasuberu",
    meaning: "to let slip",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "話[はな]しているうちに口[くち]が滑[すべ]る。",
      en: "While talking, one lets something slip."
    }
  },
  {
    id: "vn3-898",
    word: "手を焼く",
    reading: "てをやく",
    romaji: "tewoyaku",
    meaning: "to have trouble",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "息子[むすこ]に手[て]を焼[や]く。",
      en: "Have trouble with one's son."
    }
  },
  {
    id: "vn3-899",
    word: "手に入れる",
    reading: "てにいれる",
    romaji: "teniireru",
    meaning: "to obtain",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "幸運[こううん]を手[て]に入[い]れる。",
      en: "Obtain good fortune."
    }
  },
  {
    id: "vn3-900",
    word: "腹を割る",
    reading: "はらをわる",
    romaji: "harawowaru",
    meaning: "to speak frankly",
    level: "N3",
    lesson: 59,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "腹[はら]を割[わ]って話[はな]す。",
      en: "Speak frankly."
    }
  }
];
