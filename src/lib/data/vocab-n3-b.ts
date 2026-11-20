import type { VocabData } from "@/lib/types";

// JLPT N3 vocabulary — Shinzaizen Master style, chapter-wise by part of speech.
// Furigana notation: kanji readings inline as 漢字[かんじ] (compound runs).
// Total: 180 words (60 Nouns, 50 Verbs, 25 Adjectives, 20 Adverbs, 10 Onomatopoeia, 15 Idioms).
// IDs: vn3-181 .. vn3-360.
// Deliberately avoids duplicating any word taught in vocabN3A.

export const vocabN3B: VocabData[] = [
  // ============================================================
  // Nouns — 60 words (vn3-181 .. vn3-240)
  // ============================================================
  {
    id: "vn3-181",
    word: "心",
    reading: "こころ",
    romaji: "kokoro",
    meaning: "heart; mind",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "心[こころ]を落[お]ち着[つ]けなさい。",
      en: "Calm your mind."
    }
  },
  {
    id: "vn3-182",
    word: "気持ち",
    reading: "きもち",
    romaji: "kimochi",
    meaning: "feeling; sensation",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "彼女[かのじょ]の気持[きも]ちがわかる。",
      en: "I understand her feelings."
    }
  },
  {
    id: "vn3-183",
    word: "関連",
    reading: "かんれん",
    romaji: "kanren",
    meaning: "relation; connection",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "この二[ふた]つの事件[じけん]は関連[かんれん]がある。",
      en: "These two incidents are related."
    }
  },
  {
    id: "vn3-184",
    word: "伝統",
    reading: "でんとう",
    romaji: "dentou",
    meaning: "tradition",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "日本[にほん]の伝統[でんとう]を守[まも]る。",
      en: "Preserve Japanese traditions."
    }
  },
  {
    id: "vn3-185",
    word: "世の中",
    reading: "よのなか",
    romaji: "yononaka",
    meaning: "society; the world",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "世[よ]の中[なか]の仕組[しくみ]を知[し]る。",
      en: "Understand how the world works."
    }
  },
  {
    id: "vn3-186",
    word: "選挙",
    reading: "せんきょ",
    romaji: "senkyo",
    meaning: "election",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "選挙[せんきょ]に行[い]く。",
      en: "Go to vote in an election."
    }
  },
  {
    id: "vn3-187",
    word: "給料",
    reading: "きゅうりょう",
    romaji: "kyuuryou",
    meaning: "salary; wages",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "給料[きゅうりょう]が上[あ]がった。",
      en: "The salary went up."
    }
  },
  {
    id: "vn3-188",
    word: "環境",
    reading: "かんきょう",
    romaji: "kankyou",
    meaning: "environment",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "環境[かんきょう]を守[まも]る。",
      en: "Protect the environment."
    }
  },
  {
    id: "vn3-189",
    word: "自然",
    reading: "しぜん",
    romaji: "shizen",
    meaning: "nature",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "自然[しぜん]が大好[だいす]きだ。",
      en: "I love nature."
    }
  },
  {
    id: "vn3-190",
    word: "科学",
    reading: "かがく",
    romaji: "kagaku",
    meaning: "science",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "科学[かがく]の研究[けんきゅう]をする。",
      en: "Do scientific research."
    }
  },
  {
    id: "vn3-191",
    word: "技術",
    reading: "ぎじゅつ",
    romaji: "gijutsu",
    meaning: "technology; skill",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "技術[ぎじゅつ]が発達[はったつ]した。",
      en: "Technology has developed."
    }
  },
  {
    id: "vn3-192",
    word: "情報",
    reading: "じょうほう",
    romaji: "jouhou",
    meaning: "information",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "情報[じょうほう]を集[あつ]める。",
      en: "Gather information."
    }
  },
  {
    id: "vn3-193",
    word: "記録",
    reading: "きろく",
    romaji: "kiroku",
    meaning: "record",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "記録[きろく]を破[やぶ]る。",
      en: "Break a record."
    }
  },
  {
    id: "vn3-194",
    word: "中身",
    reading: "なかみ",
    romaji: "nakami",
    meaning: "contents",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "箱[はこ]の中身[なかみ]を見[み]る。",
      en: "Look at the contents of the box."
    }
  },
  {
    id: "vn3-195",
    word: "意図",
    reading: "いと",
    romaji: "ito",
    meaning: "intent; purpose",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]の意図[いと]がわからない。",
      en: "I don't understand his intent."
    }
  },
  {
    id: "vn3-196",
    word: "願望",
    reading: "がんぼう",
    romaji: "ganbou",
    meaning: "desire; wish",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]の願望[がんぼう]を叶[かな]える。",
      en: "Grant his wish."
    }
  },
  {
    id: "vn3-197",
    word: "計画",
    reading: "けいかく",
    romaji: "keikaku",
    meaning: "plan",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "計画[けいかく]を立[た]てる。",
      en: "Make a plan."
    }
  },
  {
    id: "vn3-198",
    word: "日程",
    reading: "にってい",
    romaji: "nittei",
    meaning: "schedule; itinerary",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "旅行[りょこう]の日程[にってい]を決[き]める。",
      en: "Decide the travel itinerary."
    }
  },
  {
    id: "vn3-199",
    word: "将来",
    reading: "しょうらい",
    romaji: "shourai",
    meaning: "future",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "将来[しょうらい]の夢[ゆめ]を話[はな]す。",
      en: "Talk about future dreams."
    }
  },
  {
    id: "vn3-200",
    word: "過去",
    reading: "かこ",
    romaji: "kako",
    meaning: "past",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "過去[かこ]を振[ふ]り返[かえ]る。",
      en: "Look back at the past."
    }
  },
  {
    id: "vn3-201",
    word: "現在",
    reading: "げんざい",
    romaji: "genzai",
    meaning: "present",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "現在[げんざい]の様子[ようす]は安定[あんてい]している。",
      en: "The present situation is stable."
    }
  },
  {
    id: "vn3-202",
    word: "心配",
    reading: "しんぱい",
    romaji: "shinpai",
    meaning: "worry; anxiety",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "心配[しんぱい]する必要[ひつよう]はない。",
      en: "There is no need to worry."
    }
  },
  {
    id: "vn3-203",
    word: "娯楽",
    reading: "ごらく",
    romaji: "goraku",
    meaning: "amusement; entertainment",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "娯楽[ごらく]を求[もと]める。",
      en: "Seek entertainment."
    }
  },
  {
    id: "vn3-204",
    word: "関心",
    reading: "かんしん",
    romaji: "kanshin",
    meaning: "interest; concern",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "音楽[おんがく]に関心[かんしん]がある。",
      en: "I have an interest in music."
    }
  },
  {
    id: "vn3-205",
    word: "理想",
    reading: "りそう",
    romaji: "risou",
    meaning: "ideal",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "大[おお]きな理想[りそう]を持[も]つ。",
      en: "Hold a big ideal."
    }
  },
  {
    id: "vn3-206",
    word: "望み",
    reading: "のぞみ",
    romaji: "nozomi",
    meaning: "hope; wish",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "望[のぞ]みが叶[かな]う。",
      en: "One's wish comes true."
    }
  },
  {
    id: "vn3-207",
    word: "見解",
    reading: "けんかい",
    romaji: "kenkai",
    meaning: "view; opinion",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "私[わたし]の見解[けんかい]を述[の]べる。",
      en: "State my view."
    }
  },
  {
    id: "vn3-208",
    word: "記号",
    reading: "きごう",
    romaji: "kigou",
    meaning: "symbol; sign",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "数学[すうがく]の記号[きごう]を学[まな]ぶ。",
      en: "Learn mathematical symbols."
    }
  },
  {
    id: "vn3-209",
    word: "理屈",
    reading: "りくつ",
    romaji: "rikutsu",
    meaning: "logic; argument",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]の理屈[りくつ]は変[へん]だ。",
      en: "His argument is strange."
    }
  },
  {
    id: "vn3-210",
    word: "要因",
    reading: "よういん",
    romaji: "youin",
    meaning: "factor; cause",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "事故[じこ]の要因[よういん]を調[しら]べる。",
      en: "Investigate the cause of the accident."
    }
  },
  {
    id: "vn3-211",
    word: "成果",
    reading: "せいか",
    romaji: "seika",
    meaning: "result; achievement",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "研究[けんきゅう]の成果[せいか]が出[で]た。",
      en: "The research results came out."
    }
  },
  {
    id: "vn3-212",
    word: "作用",
    reading: "さよう",
    romaji: "sayou",
    meaning: "action; effect",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "薬[くすり]の作用[さよう]が出[で]る。",
      en: "The medicine's effect appears."
    }
  },
  {
    id: "vn3-213",
    word: "効果",
    reading: "こうか",
    romaji: "kouka",
    meaning: "effect",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "効果[こうか]があった。",
      en: "There was an effect."
    }
  },
  {
    id: "vn3-214",
    word: "価値",
    reading: "かち",
    romaji: "kachi",
    meaning: "value; worth",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "価値[かち]を見[み]出[だ]す。",
      en: "Find value in something."
    }
  },
  {
    id: "vn3-215",
    word: "価格",
    reading: "かかく",
    romaji: "kakaku",
    meaning: "price",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "価格[かかく]が高[たか]い。",
      en: "The price is high."
    }
  },
  {
    id: "vn3-216",
    word: "費用",
    reading: "ひよう",
    romaji: "hiyou",
    meaning: "cost; expense",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "費用[ひよう]がかさむ。",
      en: "Costs pile up."
    }
  },
  {
    id: "vn3-217",
    word: "収入",
    reading: "しゅうにゅう",
    romaji: "shuunyuu",
    meaning: "income",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "収入[しゅうにゅう]が増[ふ]えた。",
      en: "Income increased."
    }
  },
  {
    id: "vn3-218",
    word: "財布",
    reading: "さいふ",
    romaji: "saifu",
    meaning: "wallet",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "財布[さいふ]を落[お]とした。",
      en: "I dropped my wallet."
    }
  },
  {
    id: "vn3-219",
    word: "銀行",
    reading: "ぎんこう",
    romaji: "ginkou",
    meaning: "bank",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "銀行[ぎんこう]で働[はたら]く。",
      en: "Work at a bank."
    }
  },
  {
    id: "vn3-220",
    word: "貯金",
    reading: "ちょきん",
    romaji: "chokin",
    meaning: "savings; deposit",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "貯金[ちょきん]をする。",
      en: "Save money."
    }
  },
  {
    id: "vn3-221",
    word: "地図",
    reading: "ちず",
    romaji: "chizu",
    meaning: "map",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "地図[ちず]を見[み]る。",
      en: "Look at a map."
    }
  },
  {
    id: "vn3-222",
    word: "地域",
    reading: "ちいき",
    romaji: "chiiki",
    meaning: "region; area",
    level: "N3",
    lesson: 2,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "地域[ちいき]の人々[ひとびと]が集[あつ]まる。",
      en: "People of the region gather."
    }
  },
  {
    id: "vn3-223",
    word: "地方",
    reading: "ちほう",
    romaji: "chihou",
    meaning: "province; district",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "地方[ちほう]に住[す]む。",
      en: "Live in a province."
    }
  },
  {
    id: "vn3-224",
    word: "立地",
    reading: "りっち",
    romaji: "ricchi",
    meaning: "location",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "店[みせ]の立地[りっち]がいい。",
      en: "The store has a good location."
    }
  },
  {
    id: "vn3-225",
    word: "故郷",
    reading: "こきょう",
    romaji: "kokyou",
    meaning: "hometown",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "故郷[こきょう]を離[はな]れる。",
      en: "Leave one's hometown."
    }
  },
  {
    id: "vn3-226",
    word: "首都",
    reading: "しゅと",
    romaji: "shuto",
    meaning: "capital city",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "首都[しゅと]は東京[とうきょう]だ。",
      en: "The capital is Tokyo."
    }
  },
  {
    id: "vn3-227",
    word: "田舎",
    reading: "いなか",
    romaji: "inaka",
    meaning: "countryside",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "田舎[いなか]で育[そだ]つ。",
      en: "Grow up in the countryside."
    }
  },
  {
    id: "vn3-228",
    word: "都会",
    reading: "とかい",
    romaji: "tokai",
    meaning: "city",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "都会[とかい]で生活[せいかつ]する。",
      en: "Live in the city."
    }
  },
  {
    id: "vn3-229",
    word: "建物",
    reading: "たてもの",
    romaji: "tatemono",
    meaning: "building",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "高[たか]い建物[たてもの]が並[なら]ぶ。",
      en: "Tall buildings line up."
    }
  },
  {
    id: "vn3-230",
    word: "部屋",
    reading: "へや",
    romaji: "heya",
    meaning: "room",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "部屋[へや]がきれいだ。",
      en: "The room is clean."
    }
  },
  {
    id: "vn3-231",
    word: "庭",
    reading: "にわ",
    romaji: "niwa",
    meaning: "garden",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "庭[にわ]に花[はな]を植[う]える。",
      en: "Plant flowers in the garden."
    }
  },
  {
    id: "vn3-232",
    word: "屋根",
    reading: "やね",
    romaji: "yane",
    meaning: "roof",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "屋根[やね]が赤[あか]い。",
      en: "The roof is red."
    }
  },
  {
    id: "vn3-233",
    word: "壁",
    reading: "かべ",
    romaji: "kabe",
    meaning: "wall",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "壁[かべ]に絵[え]を飾[かざ]る。",
      en: "Decorate the wall with a picture."
    }
  },
  {
    id: "vn3-234",
    word: "心情",
    reading: "しんじょう",
    romaji: "shinjou",
    meaning: "state of mind; feeling",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "複雑[ふくざつ]な心情[しんじょう]を抱[いだ]く。",
      en: "Harbor complex feelings."
    }
  },
  {
    id: "vn3-235",
    word: "思考",
    reading: "しこう",
    romaji: "shikou",
    meaning: "thinking; thought",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "思考[しこう]力[りょく]を高[たか]める。",
      en: "Improve thinking ability."
    }
  },
  {
    id: "vn3-236",
    word: "知識",
    reading: "ちしき",
    romaji: "chishiki",
    meaning: "knowledge",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "知識[ちしき]が豊[ゆた]かだ。",
      en: "Rich in knowledge."
    }
  },
  {
    id: "vn3-237",
    word: "体験",
    reading: "たいけん",
    romaji: "taiken",
    meaning: "personal experience",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "貴重[きちょう]な体験[たいけん]をした。",
      en: "Had a precious experience."
    }
  },
  {
    id: "vn3-238",
    word: "記憶",
    reading: "きおく",
    romaji: "kioku",
    meaning: "memory",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "記憶[きおく]が薄[うす]れる。",
      en: "Memory fades."
    }
  },
  {
    id: "vn3-239",
    word: "天才",
    reading: "てんさい",
    romaji: "tensai",
    meaning: "genius",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]は天才[てんさい]だ。",
      en: "He is a genius."
    }
  },
  {
    id: "vn3-240",
    word: "知恵",
    reading: "ちえ",
    romaji: "chie",
    meaning: "wisdom",
    level: "N3",
    lesson: 3,
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "知恵[ちえ]を絞[しぼ]る。",
      en: "Rack one's brains."
    }
  },
  // ============================================================
  // Verbs — 50 words (vn3-241 .. vn3-290)
  // ============================================================
  {
    id: "vn3-241",
    word: "推測する",
    reading: "すいそくする",
    romaji: "suisokusuru",
    meaning: "to guess; to infer",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "犯人[はんにん]を推測[すいそく]する。",
      en: "Guess the culprit."
    }
  },
  {
    id: "vn3-242",
    word: "想像する",
    reading: "そうぞうする",
    romaji: "souzousuru",
    meaning: "to imagine",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "未来[みらい]を想像[そうぞう]する。",
      en: "Imagine the future."
    }
  },
  {
    id: "vn3-243",
    word: "振り返る",
    reading: "ふりかえる",
    romaji: "furikaeru",
    meaning: "to look back",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "過去[かこ]を振[ふ]り返[かえ]る。",
      en: "Look back at the past."
    }
  },
  {
    id: "vn3-244",
    word: "決断する",
    reading: "けつだんする",
    romaji: "ketsudansuru",
    meaning: "to decide; to make a decision",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "大[おお]きな決断[けつだん]をする。",
      en: "Make a big decision."
    }
  },
  {
    id: "vn3-245",
    word: "定まる",
    reading: "さだまる",
    romaji: "sadamaru",
    meaning: "to be decided; to be fixed",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "規則[きそく]が定[さだ]まる。",
      en: "Rules are set."
    }
  },
  {
    id: "vn3-246",
    word: "選択する",
    reading: "せんたくする",
    romaji: "sentakusuru",
    meaning: "to choose; to select",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "道[みち]を選択[せんたく]する。",
      en: "Choose a path."
    }
  },
  {
    id: "vn3-247",
    word: "見比べる",
    reading: "みくらべる",
    romaji: "mikuraberu",
    meaning: "to compare",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "二[ふた]つを見比[みくら]べる。",
      en: "Compare two things."
    }
  },
  {
    id: "vn3-248",
    word: "調査する",
    reading: "ちょうさする",
    romaji: "chousasuru",
    meaning: "to investigate; to survey",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "事実[じじつ]を調査[ちょうさ]する。",
      en: "Investigate the facts."
    }
  },
  {
    id: "vn3-249",
    word: "集中する",
    reading: "しゅうちゅうする",
    romaji: "shuuchuusuru",
    meaning: "to concentrate",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "仕事[しごと]に集中[しゅうちゅう]する。",
      en: "Concentrate on work."
    }
  },
  {
    id: "vn3-250",
    word: "集合する",
    reading: "しゅうごうする",
    romaji: "shuugousuru",
    meaning: "to assemble; to gather",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "ホールに集合[しゅうごう]する。",
      en: "Assemble in the hall."
    }
  },
  {
    id: "vn3-251",
    word: "確かめる",
    reading: "たしかめる",
    romaji: "tashikameru",
    meaning: "to confirm; to verify",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "日付[ひづけ]を確[たし]かめる。",
      en: "Confirm the date."
    }
  },
  {
    id: "vn3-252",
    word: "片付ける",
    reading: "かたづける",
    romaji: "katadzukeru",
    meaning: "to tidy up; to put away",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "部屋[へや]を片付[かたづ]ける。",
      en: "Tidy up the room."
    }
  },
  {
    id: "vn3-253",
    word: "話し合う",
    reading: "はなしあう",
    romaji: "hanashiau",
    meaning: "to discuss",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "問題[もんだい]を話[はな]し合[あ]う。",
      en: "Discuss the problem."
    }
  },
  {
    id: "vn3-254",
    word: "整頓する",
    reading: "せいとんする",
    romaji: "seitonsuru",
    meaning: "to put in order; to tidy",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "部屋[へや]を整頓[せいとん]する。",
      en: "Put the room in order."
    }
  },
  {
    id: "vn3-255",
    word: "果たす",
    reading: "はたす",
    romaji: "hatasu",
    meaning: "to accomplish; to fulfill",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "任務[にんむ]を果[はた]す。",
      en: "Accomplish the mission."
    }
  },
  {
    id: "vn3-256",
    word: "実行する",
    reading: "じっこうする",
    romaji: "jikkousuru",
    meaning: "to execute; to carry out",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "計画[けいかく]を実行[じっこう]する。",
      en: "Execute the plan."
    }
  },
  {
    id: "vn3-257",
    word: "挑戦する",
    reading: "ちょうせんする",
    romaji: "chousensuru",
    meaning: "to challenge",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "困難[こんなん]に挑戦[ちょうせん]する。",
      en: "Challenge difficulties."
    }
  },
  {
    id: "vn3-258",
    word: "訓練する",
    reading: "くんれんする",
    romaji: "kunrensuru",
    meaning: "to train",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "選手[せんしゅ]を訓練[くんれん]する。",
      en: "Train athletes."
    }
  },
  {
    id: "vn3-259",
    word: "反省する",
    reading: "はんせいする",
    romaji: "hanseisuru",
    meaning: "to reflect on oneself",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "自分[じぶん]を反省[はんせい]する。",
      en: "Reflect on oneself."
    }
  },
  {
    id: "vn3-260",
    word: "感動する",
    reading: "かんどうする",
    romaji: "kandousuru",
    meaning: "to be moved",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "映画[えいが]に感動[かんどう]する。",
      en: "Be moved by a movie."
    }
  },
  {
    id: "vn3-261",
    word: "感謝する",
    reading: "かんしゃする",
    romaji: "kanshasuru",
    meaning: "to be grateful; to thank",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]に感謝[かんしゃ]する。",
      en: "Be grateful to a teacher."
    }
  },
  {
    id: "vn3-262",
    word: "推薦する",
    reading: "すいせんする",
    romaji: "suisensuru",
    meaning: "to recommend",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "良[よ]い本[ほん]を推薦[すいせん]する。",
      en: "Recommend a good book."
    }
  },
  {
    id: "vn3-263",
    word: "迎える",
    reading: "むかえる",
    romaji: "mukaeru",
    meaning: "to welcome; to meet",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "客[きゃく]を迎[むか]える。",
      en: "Welcome a guest."
    }
  },
  {
    id: "vn3-264",
    word: "応援する",
    reading: "おうえんする",
    romaji: "ouensuru",
    meaning: "to support; to cheer on",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "チームを応援[おうえん]する。",
      en: "Support a team."
    }
  },
  {
    id: "vn3-265",
    word: "許可する",
    reading: "きょかする",
    romaji: "kyokasuru",
    meaning: "to permit",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "使用[しよう]を許可[きょか]する。",
      en: "Permit usage."
    }
  },
  {
    id: "vn3-266",
    word: "禁止する",
    reading: "きんしする",
    romaji: "kinshisuru",
    meaning: "to forbid; to prohibit",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "駐車[ちゅうしゃ]を禁止[きんし]する。",
      en: "Forbid parking."
    }
  },
  {
    id: "vn3-267",
    word: "期待する",
    reading: "きたいする",
    romaji: "kitaisuru",
    meaning: "to expect; to look forward to",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "成功[せいこう]を期待[きたい]する。",
      en: "Expect success."
    }
  },
  {
    id: "vn3-268",
    word: "忘れる",
    reading: "わすれる",
    romaji: "wasureru",
    meaning: "to forget",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "約束[やくそく]を忘[わす]れる。",
      en: "Forget a promise."
    }
  },
  {
    id: "vn3-269",
    word: "残す",
    reading: "のこす",
    romaji: "nokosu",
    meaning: "to leave behind",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "子供[こども]に財産[ざいさん]を残[のこ]す。",
      en: "Leave property to one's children."
    }
  },
  {
    id: "vn3-270",
    word: "残る",
    reading: "のこる",
    romaji: "nokoru",
    meaning: "to remain; to be left",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "記憶[きおく]が残[のこ]る。",
      en: "A memory remains."
    }
  },
  {
    id: "vn3-271",
    word: "届ける",
    reading: "とどける",
    romaji: "todokeru",
    meaning: "to deliver",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "荷物[にもつ]を届[とど]ける。",
      en: "Deliver a package."
    }
  },
  {
    id: "vn3-272",
    word: "届く",
    reading: "とどく",
    romaji: "todoku",
    meaning: "to arrive; to reach",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "手紙[てがみ]が届[とど]いた。",
      en: "A letter arrived."
    }
  },
  {
    id: "vn3-273",
    word: "頼む",
    reading: "たのむ",
    romaji: "tanomu",
    meaning: "to request; to ask",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]に頼[たの]む。",
      en: "Ask the teacher."
    }
  },
  {
    id: "vn3-274",
    word: "頼る",
    reading: "たよる",
    romaji: "tayoru",
    meaning: "to rely on",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "家族[かぞく]に頼[たよ]る。",
      en: "Rely on family."
    }
  },
  {
    id: "vn3-275",
    word: "助ける",
    reading: "たすける",
    romaji: "tasukeru",
    meaning: "to help; to save",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "友達[ともだち]を助[たす]ける。",
      en: "Help a friend."
    }
  },
  {
    id: "vn3-276",
    word: "助かる",
    reading: "たすかる",
    romaji: "tasukaru",
    meaning: "to be saved; to be helped",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "助[たす]かってよかった。",
      en: "I am glad to have been saved."
    }
  },
  {
    id: "vn3-277",
    word: "守る",
    reading: "まもる",
    romaji: "mamoru",
    meaning: "to protect; to keep",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "約束[やくそく]を守[まも]る。",
      en: "Keep a promise."
    }
  },
  {
    id: "vn3-278",
    word: "支える",
    reading: "ささえる",
    romaji: "sasaeru",
    meaning: "to support",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "家族[かぞく]を支[ささ]える。",
      en: "Support a family."
    }
  },
  {
    id: "vn3-279",
    word: "防ぐ",
    reading: "ふせぐ",
    romaji: "fusegu",
    meaning: "to prevent",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "事故[じこ]を防[ふせ]ぐ。",
      en: "Prevent accidents."
    }
  },
  {
    id: "vn3-280",
    word: "逃げる",
    reading: "にげる",
    romaji: "nigeru",
    meaning: "to escape; to flee",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "危[あぶ]ないから逃[に]げる。",
      en: "Escape because it is dangerous."
    }
  },
  {
    id: "vn3-281",
    word: "追いかける",
    reading: "おいかける",
    romaji: "oikakeru",
    meaning: "to chase; to pursue",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "犬[いぬ]を追[お]い掛[か]ける。",
      en: "Chase a dog."
    }
  },
  {
    id: "vn3-282",
    word: "出会う",
    reading: "であう",
    romaji: "deau",
    meaning: "to encounter; to meet",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "友達[ともだち]と出[で]会[あ]う。",
      en: "Meet a friend."
    }
  },
  {
    id: "vn3-283",
    word: "別れる",
    reading: "わかれる",
    romaji: "wakareru",
    meaning: "to part; to separate",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "彼[かれ]と別[わか]れる。",
      en: "Part with him."
    }
  },
  {
    id: "vn3-284",
    word: "結ぶ",
    reading: "むすぶ",
    romaji: "musubu",
    meaning: "to tie; to bind",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "靴[くつ]の紐[ひも]を結[むす]ぶ。",
      en: "Tie shoelaces."
    }
  },
  {
    id: "vn3-285",
    word: "続く",
    reading: "つづく",
    romaji: "tsuzuku",
    meaning: "to continue; to last",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "雨[あめ]が続[つづ]く。",
      en: "Rain continues."
    }
  },
  {
    id: "vn3-286",
    word: "続ける",
    reading: "つづける",
    romaji: "tsuzukeru",
    meaning: "to keep doing; to continue",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "勉強[べんきょう]を続[つづ]ける。",
      en: "Keep studying."
    }
  },
  {
    id: "vn3-287",
    word: "解説する",
    reading: "かいせつする",
    romaji: "kaisetsuru",
    meaning: "to explain; to commentate",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "詳[くわ]しく解説[かいせつ]する。",
      en: "Explain in detail."
    }
  },
  {
    id: "vn3-288",
    word: "公表する",
    reading: "こうひょうする",
    romaji: "kouhyousuru",
    meaning: "to publish; to make public",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "結果[けっか]を公表[こうひょう]する。",
      en: "Publish the results."
    }
  },
  {
    id: "vn3-289",
    word: "整備する",
    reading: "せいびする",
    romaji: "seibisuru",
    meaning: "to maintain; to equip",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "道路[どうろ]を整備[せいび]する。",
      en: "Maintain the road."
    }
  },
  {
    id: "vn3-290",
    word: "調整する",
    reading: "ちょうせいする",
    romaji: "chouseisuru",
    meaning: "to adjust; to coordinate",
    level: "N3",
    lesson: 3,
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "時間[じかん]を調整[ちょうせい]する。",
      en: "Adjust the time."
    }
  },
  // ============================================================
  // Adjectives — 25 words (vn3-291 .. vn3-315)
  // ============================================================
  {
    id: "vn3-291",
    word: "美しい",
    reading: "うつくしい",
    romaji: "utsukushii",
    meaning: "beautiful",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "美[うつく]しい景色[けいしき]を見[み]る。",
      en: "See beautiful scenery."
    }
  },
  {
    id: "vn3-292",
    word: "汚い",
    reading: "きたない",
    romaji: "kitanai",
    meaning: "dirty",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "部屋[へや]が汚[きたな]い。",
      en: "The room is dirty."
    }
  },
  {
    id: "vn3-293",
    word: "険しい",
    reading: "けわしい",
    romaji: "kewashii",
    meaning: "steep; rugged",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "険[けわ]しい山[やま]に登[のぼ]る。",
      en: "Climb a steep mountain."
    }
  },
  {
    id: "vn3-294",
    word: "鋭い",
    reading: "するどい",
    romaji: "surudoi",
    meaning: "sharp; keen",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "鋭[するど]いナイフを使[つか]う。",
      en: "Use a sharp knife."
    }
  },
  {
    id: "vn3-295",
    word: "鈍い",
    reading: "のろい",
    romaji: "noroi",
    meaning: "dull; slow",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "彼[かれ]の動[うご]きが鈍[のろ]い。",
      en: "His movement is slow."
    }
  },
  {
    id: "vn3-296",
    word: "荒い",
    reading: "あらい",
    romaji: "arai",
    meaning: "rough; wild",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "海[うみ]の波[なみ]が荒[あら]い。",
      en: "The sea waves are rough."
    }
  },
  {
    id: "vn3-297",
    word: "細い",
    reading: "ほそい",
    romaji: "hosoi",
    meaning: "thin; slender",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "細[ほそ]い糸[いと]を結[むす]ぶ。",
      en: "Tie a thin thread."
    }
  },
  {
    id: "vn3-298",
    word: "太い",
    reading: "ふとい",
    romaji: "futoi",
    meaning: "thick; fat",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "公園[こうえん]に太[ふと]い木[き]がある。",
      en: "There is a thick tree in the park."
    }
  },
  {
    id: "vn3-299",
    word: "浅い",
    reading: "あさい",
    romaji: "asai",
    meaning: "shallow",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "浅[あさ]い川[かわ]を渡[わた]る。",
      en: "Cross a shallow river."
    }
  },
  {
    id: "vn3-300",
    word: "深い",
    reading: "ふかい",
    romaji: "fukai",
    meaning: "deep",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "深[ふか]い意味[いみ]がある。",
      en: "There is a deep meaning."
    }
  },
  {
    id: "vn3-301",
    word: "重い",
    reading: "おもい",
    romaji: "omoi",
    meaning: "heavy",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "重[おも]い荷物[にもつ]を持[も]つ。",
      en: "Carry a heavy package."
    }
  },
  {
    id: "vn3-302",
    word: "軽い",
    reading: "かるい",
    romaji: "karui",
    meaning: "light",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "軽[かる]い荷物[にもつ]です。",
      en: "It is a light package."
    }
  },
  {
    id: "vn3-303",
    word: "堅い",
    reading: "かたい",
    romaji: "katai",
    meaning: "hard; solid",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "堅[かた]いパンを食[た]べる。",
      en: "Eat hard bread."
    }
  },
  {
    id: "vn3-304",
    word: "柔らかい",
    reading: "やわらかい",
    romaji: "yawarakai",
    meaning: "soft; tender",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "布[ぬの]の手触[てざわ]りが柔[やわら]かい。",
      en: "The feel of the cloth is soft."
    }
  },
  {
    id: "vn3-305",
    word: "暖かい",
    reading: "あたたかい",
    romaji: "atatakai",
    meaning: "warm",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "今日[きょう]は暖[あたた]かい春[はる]の日[ひ]だ。",
      en: "Today is a warm spring day."
    }
  },
  {
    id: "vn3-306",
    word: "涼しい",
    reading: "すずしい",
    romaji: "suzushii",
    meaning: "cool; refreshing",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "涼[すず]しい風[かぜ]が吹[ふ]く。",
      en: "A cool breeze blows."
    }
  },
  {
    id: "vn3-307",
    word: "恥ずかしい",
    reading: "はずかしい",
    romaji: "hazukashii",
    meaning: "shy; embarrassed",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "失敗[しっぱい]して恥[は]ずかしい。",
      en: "I am embarrassed by the failure."
    }
  },
  {
    id: "vn3-308",
    word: "懐かしい",
    reading: "なつかしい",
    romaji: "natsukashii",
    meaning: "nostalgic",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "子供[こども]の時[とき]が懐[なつ]かしい。",
      en: "Childhood is nostalgic."
    }
  },
  {
    id: "vn3-309",
    word: "優しい",
    reading: "やさしい",
    romaji: "yasashii",
    meaning: "gentle; kind",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "優[やさ]しい先生[せんせい]に習[なら]う。",
      en: "Learn from a kind teacher."
    }
  },
  {
    id: "vn3-310",
    word: "賢い",
    reading: "かしこい",
    romaji: "kashikoi",
    meaning: "smart; clever",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "賢[かしこ]い犬[いぬ]だ。",
      en: "It is a smart dog."
    }
  },
  {
    id: "vn3-311",
    word: "面倒",
    reading: "めんどう",
    romaji: "mendou",
    meaning: "troublesome; bothersome",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "面倒[めんどう]な仕事[しごと]をする。",
      en: "Do troublesome work."
    }
  },
  {
    id: "vn3-312",
    word: "豊か",
    reading: "ゆたか",
    romaji: "yutaka",
    meaning: "rich; abundant",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "豊[ゆた]かな自然[しぜん]に恵[めぐ]まれる。",
      en: "Be blessed with rich nature."
    }
  },
  {
    id: "vn3-313",
    word: "貧乏",
    reading: "びんぼう",
    romaji: "binbou",
    meaning: "poor",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "貧乏[びんぼう]な生活[せいかつ]をする。",
      en: "Live a poor life."
    }
  },
  {
    id: "vn3-314",
    word: "真面目",
    reading: "まじめ",
    romaji: "majime",
    meaning: "serious; earnest",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "彼[かれ]は真面目[まじめ]な学生[がくせい]だ。",
      en: "He is a serious student."
    }
  },
  {
    id: "vn3-315",
    word: "平気",
    reading: "へいき",
    romaji: "heiki",
    meaning: "unconcerned; calm",
    level: "N3",
    lesson: 3,
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "平気[へいき]な顔[かお]をしている。",
      en: "He has an unconcerned face."
    }
  },
  // ============================================================
  // Adverbs — 20 words (vn3-316 .. vn3-335)
  // ============================================================
  {
    id: "vn3-316",
    word: "必ず",
    reading: "かならず",
    romaji: "kanarazu",
    meaning: "certainly; always",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "明日[あした]必[かなら]ず来[き]る。",
      en: "I will certainly come tomorrow."
    }
  },
  {
    id: "vn3-317",
    word: "おそらく",
    reading: "おそらく",
    romaji: "osoraku",
    meaning: "probably; perhaps",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "おそらく雨[あめ]が降[ふ]るだろう。",
      en: "It will probably rain."
    }
  },
  {
    id: "vn3-318",
    word: "もちろん",
    reading: "もちろん",
    romaji: "mochiron",
    meaning: "of course",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "もちろん行[い]きます。",
      en: "Of course I will go."
    }
  },
  {
    id: "vn3-319",
    word: "きっちり",
    reading: "きっちり",
    romaji: "kicchiri",
    meaning: "exactly; promptly",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "時間[じかん]をきっちり守[まも]る。",
      en: "Keep time exactly."
    }
  },
  {
    id: "vn3-320",
    word: "すでに",
    reading: "すでに",
    romaji: "sudeni",
    meaning: "already",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "すでに終[お]わった。",
      en: "It is already finished."
    }
  },
  {
    id: "vn3-321",
    word: "じっくり",
    reading: "じっくり",
    romaji: "jikkuri",
    meaning: "carefully; deliberately",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "じっくり考[かんが]える。",
      en: "Think carefully."
    }
  },
  {
    id: "vn3-322",
    word: "うっかり",
    reading: "うっかり",
    romaji: "ukkari",
    meaning: "carelessly; inadvertently",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "うっかり落[お]とした。",
      en: "I dropped it carelessly."
    }
  },
  {
    id: "vn3-323",
    word: "ほっと",
    reading: "ほっと",
    romaji: "hotto",
    meaning: "relieved",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ほっとした。",
      en: "I felt relieved."
    }
  },
  {
    id: "vn3-324",
    word: "どんどん",
    reading: "どんどん",
    romaji: "dondon",
    meaning: "rapidly; steadily",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "どんどん進[すす]む。",
      en: "Proceed rapidly."
    }
  },
  {
    id: "vn3-325",
    word: "とにかく",
    reading: "とにかく",
    romaji: "tonikaku",
    meaning: "anyway; at any rate",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "とにかく行[い]こう。",
      en: "Let's go anyway."
    }
  },
  {
    id: "vn3-326",
    word: "まもなく",
    reading: "まもなく",
    romaji: "mamonaku",
    meaning: "soon; before long",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "まもなく発車[はっしゃ]する。",
      en: "The train will depart soon."
    }
  },
  {
    id: "vn3-327",
    word: "ついに",
    reading: "ついに",
    romaji: "tsuini",
    meaning: "finally; at last",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ついに到着[とうちゃく]した。",
      en: "Finally arrived."
    }
  },
  {
    id: "vn3-328",
    word: "ようやく",
    reading: "ようやく",
    romaji: "youyaku",
    meaning: "finally; at last",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ようやく完成[かんせい]した。",
      en: "Finally completed."
    }
  },
  {
    id: "vn3-329",
    word: "ゆっくり",
    reading: "ゆっくり",
    romaji: "yukkuri",
    meaning: "slowly; leisurely",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ゆっくり歩[ある]く。",
      en: "Walk slowly."
    }
  },
  {
    id: "vn3-330",
    word: "しばらく",
    reading: "しばらく",
    romaji: "shibaraku",
    meaning: "for a while",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "しばらく会[あ]っていない。",
      en: "Haven't seen each other for a while."
    }
  },
  {
    id: "vn3-331",
    word: "さらに",
    reading: "さらに",
    romaji: "sari",
    meaning: "furthermore; moreover",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "さらに説明[せつめい]する。",
      en: "Explain furthermore."
    }
  },
  {
    id: "vn3-332",
    word: "また",
    reading: "また",
    romaji: "mata",
    meaning: "again",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "また会[あ]いましょう。",
      en: "Let's meet again."
    }
  },
  {
    id: "vn3-333",
    word: "すぐに",
    reading: "すぐに",
    romaji: "sugu ni",
    meaning: "immediately; right away",
    level: "N3",
    lesson: 3,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "すぐに来[き]て。",
      en: "Come immediately."
    }
  },
  {
    id: "vn3-334",
    word: "そっと",
    reading: "そっと",
    romaji: "sotto",
    meaning: "quietly; gently",
    level: "N3",
    lesson: 4,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "そっと扉[とびら]を開[あ]ける。",
      en: "Quietly open the door."
    }
  },
  {
    id: "vn3-335",
    word: "ずっと",
    reading: "ずっと",
    romaji: "zutto",
    meaning: "all along; by far",
    level: "N3",
    lesson: 4,
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "ずっと待[ま]っていた。",
      en: "I was waiting all along."
    }
  },
  // ============================================================
  // Onomatopoeia — 10 words (vn3-336 .. vn3-345)
  // ============================================================
  {
    id: "vn3-336",
    word: "うきうき",
    reading: "うきうき",
    romaji: "ukiuki",
    meaning: "cheerful; excited",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "子供[こども]がうきうきしている。",
      en: "The child is cheerful."
    }
  },
  {
    id: "vn3-337",
    word: "ざわざわ",
    reading: "ざわざわ",
    romaji: "zawazawa",
    meaning: "buzzing; murmuring",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "教室[きょうしつ]がざわざわしている。",
      en: "The classroom is buzzing."
    }
  },
  {
    id: "vn3-338",
    word: "わいわい",
    reading: "わいわい",
    romaji: "waiwai",
    meaning: "noisily; merrily",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "みんなでわいわい騒[さわ]ぐ。",
      en: "Make noise together merrily."
    }
  },
  {
    id: "vn3-339",
    word: "ぎりぎり",
    reading: "ぎりぎり",
    romaji: "girigiri",
    meaning: "just barely",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "電車[でんしゃ]にぎりぎり間[ま]に合[あ]う。",
      en: "Barely catch the train."
    }
  },
  {
    id: "vn3-340",
    word: "いそいそ",
    reading: "いそいそ",
    romaji: "isoiso",
    meaning: "briskly; cheerfully",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "彼[かれ]はいそいそと出[で]かける。",
      en: "He goes out briskly."
    }
  },
  {
    id: "vn3-341",
    word: "にこにこ",
    reading: "にこにこ",
    romaji: "nikoniko",
    meaning: "smiling",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "子供[こども]がにこにこ笑[わら]う。",
      en: "Children smile."
    }
  },
  {
    id: "vn3-342",
    word: "しくしく",
    reading: "しくしく",
    romaji: "shikushiku",
    meaning: "weeping softly",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "夜[よる]にしくしく泣[な]く。",
      en: "Weep softly at night."
    }
  },
  {
    id: "vn3-343",
    word: "がやがや",
    reading: "がやがや",
    romaji: "gayagaya",
    meaning: "clamorous; noisy",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "町[まち]ががやがやうるさい。",
      en: "The town is clamorous and noisy."
    }
  },
  {
    id: "vn3-344",
    word: "かんかん",
    reading: "かんかん",
    romaji: "kankan",
    meaning: "clanging; boiling hot",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "日[ひ]がかんかん照[て]りつける。",
      en: "The sun beats down strongly."
    }
  },
  {
    id: "vn3-345",
    word: "すらすら",
    reading: "すらすら",
    romaji: "surasura",
    meaning: "fluently; smoothly",
    level: "N3",
    lesson: 4,
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "日本語[にほんご]がすらすら話[はな]せる。",
      en: "Speak Japanese fluently."
    }
  },
  // ============================================================
  // Idioms — 15 words (vn3-346 .. vn3-360)
  // ============================================================
  {
    id: "vn3-346",
    word: "一生懸命",
    reading: "いっしょうけんめい",
    romaji: "isshoukenmei",
    meaning: "with all one's effort",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "一生懸命[いっしょうけんめい]勉強[べんきょう]する。",
      en: "Study with all one's effort."
    }
  },
  {
    id: "vn3-347",
    word: "気を配る",
    reading: "きをくばる",
    romaji: "kiokubaru",
    meaning: "to be attentive to",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "周[まわ]りに気[き]を配[くば]る。",
      en: "Be attentive to one's surroundings."
    }
  },
  {
    id: "vn3-348",
    word: "気が重い",
    reading: "きがおもい",
    romaji: "kigaomoi",
    meaning: "to feel depressed; heavy-hearted",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "明日[あした]の試験[しけん]に気[き]が重[おも]い。",
      en: "I feel heavy about tomorrow's exam."
    }
  },
  {
    id: "vn3-349",
    word: "気が利く",
    reading: "きがきく",
    romaji: "kigakiku",
    meaning: "to be thoughtful; tactful",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]は気[き]が利[き]く。",
      en: "He is thoughtful."
    }
  },
  {
    id: "vn3-350",
    word: "目が合う",
    reading: "めがあう",
    romaji: "megaau",
    meaning: "eyes to meet",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "彼女[かのじょ]と目[め]が合[あ]った。",
      en: "My eyes met hers."
    }
  },
  {
    id: "vn3-351",
    word: "話が合う",
    reading: "はなしがあう",
    romaji: "hanashigaau",
    meaning: "to get along; to be on the same wavelength",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "友達[ともだち]と話[はなし]が合[あ]う。",
      en: "Get along with a friend."
    }
  },
  {
    id: "vn3-352",
    word: "頭が痛い",
    reading: "あたまがいたい",
    romaji: "atamagaitai",
    meaning: "to have a headache",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "頭[あたま]が痛[いた]いので休[やす]む。",
      en: "I will rest because I have a headache."
    }
  },
  {
    id: "vn3-353",
    word: "腹が立つ",
    reading: "はらがたつ",
    romaji: "haragatatsu",
    meaning: "to get angry",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "待[ま]たされて腹[はら]が立[た]つ。",
      en: "Get angry at being kept waiting."
    }
  },
  {
    id: "vn3-354",
    word: "心を打つ",
    reading: "こころをうつ",
    romaji: "kokorooutsu",
    meaning: "to move someone's heart",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "話[はなし]が心[こころ]を打[う]つ。",
      en: "A story moves the heart."
    }
  },
  {
    id: "vn3-355",
    word: "雲をつかむ",
    reading: "くもをつかむ",
    romaji: "kumootsukamu",
    meaning: "vague; abstract",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "雲[くも]を掴[つか]むような話[はなし]。",
      en: "A vague, abstract story."
    }
  },
  {
    id: "vn3-356",
    word: "耳が痛い",
    reading: "みみがいたい",
    romaji: "mimigaitai",
    meaning: "harsh to hear",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "忠告[ちゅうこく]が耳[みみ]に痛[いた]い。",
      en: "The advice is harsh to hear."
    }
  },
  {
    id: "vn3-357",
    word: "口を出す",
    reading: "くちをだす",
    romaji: "kuchiodasu",
    meaning: "to interrupt; to meddle",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "他人[たにん]の話[はなし]に口[くち]を出[だ]す。",
      en: "Interrupt another's talk."
    }
  },
  {
    id: "vn3-358",
    word: "顔を出す",
    reading: "かおをだす",
    romaji: "kaoodasu",
    meaning: "to show up; to make an appearance",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "パーティーに顔[かお]を出[だ]す。",
      en: "Show up at a party."
    }
  },
  {
    id: "vn3-359",
    word: "手を貸す",
    reading: "てをかす",
    romaji: "teokasu",
    meaning: "to lend a hand; to help",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "友達[ともだち]に手[て]を貸[か]す。",
      en: "Lend a hand to a friend."
    }
  },
  {
    id: "vn3-360",
    word: "足を引っ張る",
    reading: "あしをひっぱる",
    romaji: "ashiohipparu",
    meaning: "to drag someone down; to hold back",
    level: "N3",
    lesson: 4,
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "チームの足[あし]を引[ひ]っ張[ぱ]る。",
      en: "Drag the team down."
    }
  }
];
