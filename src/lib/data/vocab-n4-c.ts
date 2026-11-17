import type { VocabData } from "@/lib/types";

// JLPT N4 vocabulary — Minna no Nihongo Shokyuu 2, Lessons 43-50
// 272 words total (34 per lesson × 8 lessons)
// Furigana notation: 漢字[かんじ] — every kanji carries its reading inline.

export const vocabN4C: VocabData[] = [
  // =========================================================
  // Lesson 43 — Unexpected / Concession (のに, はず, わけ, etc.)
  // =========================================================
  {
    id: "vmn4-L43-01",
    word: "のに",
    reading: "のに",
    romaji: "noni",
    meaning: "even though, despite",
    level: "N4",
    theme: "concession",
    lesson: 43,
    partOfSpeech: "conjunction",
    example: {
      jp: "雨[あめ]が降[ふ]っているのに、出[で]かけました。",
      en: "He went out even though it was raining."
    }
  },
  {
    id: "vmn4-L43-02",
    word: "はず",
    reading: "はず",
    romaji: "hazu",
    meaning: "should be (expectation)",
    level: "N4",
    theme: "expectation",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]はもう着[つ]いているはずです。",
      en: "He should already have arrived."
    }
  },
  {
    id: "vmn4-L43-03",
    word: "わけ",
    reading: "わけ",
    romaji: "wake",
    meaning: "reason, meaning",
    level: "N4",
    theme: "reason",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "遅[おく]れたわけを話[はな]してください。",
      en: "Please explain the reason for being late."
    }
  },
  {
    id: "vmn4-L43-04",
    word: "はずがない",
    reading: "はずがない",
    romaji: "hazu ga nai",
    meaning: "cannot be, no way",
    level: "N4",
    theme: "expectation",
    lesson: 43,
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]がそんなことをするはずがありません。",
      en: "There is no way he would do such a thing."
    }
  },
  {
    id: "vmn4-L43-05",
    word: "わけがない",
    reading: "わけがない",
    romaji: "wake ga nai",
    meaning: "no way, impossible",
    level: "N4",
    theme: "reason",
    lesson: 43,
    partOfSpeech: "expression",
    example: {
      jp: "一[いち]日[にち]でできるわけがありません。",
      en: "There is no way it can be done in one day."
    }
  },
  {
    id: "vmn4-L43-06",
    word: "わけではない",
    reading: "わけではない",
    romaji: "wake dewa nai",
    meaning: "it is not that",
    level: "N4",
    theme: "reason",
    lesson: 43,
    partOfSpeech: "expression",
    example: {
      jp: "好[す]きではないわけではありません。",
      en: "It is not that I do not like it."
    }
  },
  {
    id: "vmn4-L43-07",
    word: "予定",
    reading: "よてい",
    romaji: "yotei",
    meaning: "schedule, plan",
    level: "N4",
    theme: "plan",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "今[こん]週[しゅう]の予[よ]定[てい]を教[おし]えてください。",
      en: "Please tell me this week's schedule."
    }
  },
  {
    id: "vmn4-L43-08",
    word: "確か",
    reading: "たしか",
    romaji: "tashika",
    meaning: "certain; if I remember correctly",
    level: "N4",
    theme: "certainty",
    lesson: 43,
    partOfSpeech: "na-adjective",
    example: {
      jp: "確[たし]か、彼[かれ]は来[こ]ないと言[い]っていました。",
      en: "If I remember correctly, he said he would not come."
    }
  },
  {
    id: "vmn4-L43-09",
    word: "まさか",
    reading: "まさか",
    romaji: "masaka",
    meaning: "surely not, no way",
    level: "N4",
    theme: "surprise",
    lesson: 43,
    partOfSpeech: "adverb",
    example: {
      jp: "まさか本[ほん]当[とう]に来[こ]ないとは。",
      en: "I can hardly believe he really did not come."
    }
  },
  {
    id: "vmn4-L43-10",
    word: "結局",
    reading: "けっきょく",
    romaji: "kekkyoku",
    meaning: "in the end, after all",
    level: "N4",
    theme: "conclusion",
    lesson: 43,
    partOfSpeech: "adverb",
    example: {
      jp: "結[けっ]局[きょく]行[い]きませんでした。",
      en: "In the end, I did not go."
    }
  },
  {
    id: "vmn4-L43-11",
    word: "残念",
    reading: "ざんねん",
    romaji: "zannen",
    meaning: "disappointing, too bad",
    level: "N4",
    theme: "feeling",
    lesson: 43,
    partOfSpeech: "na-adjective",
    example: {
      jp: "試[しあい]合[い]に負[ま]けて残[ざん]念[ねん]です。",
      en: "It is disappointing to lose the match."
    }
  },
  {
    id: "vmn4-L43-12",
    word: "反対",
    reading: "はんたい",
    romaji: "hantai",
    meaning: "opposition",
    level: "N4",
    theme: "opinion",
    lesson: 43,
    partOfSpeech: "na-adjective",
    example: {
      jp: "私[わたし]はその案[あん]に反[はん]対[たい]です。",
      en: "I am opposed to that idea."
    }
  },
  {
    id: "vmn4-L43-13",
    word: "賛成",
    reading: "さんせい",
    romaji: "sansei",
    meaning: "agreement",
    level: "N4",
    theme: "opinion",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "あなたの意[い]見[けん]に賛[さん]成[せい]します。",
      en: "I agree with your opinion."
    }
  },
  {
    id: "vmn4-L43-14",
    word: "失敗",
    reading: "しっぱい",
    romaji: "shippai",
    meaning: "failure, mistake",
    level: "N4",
    theme: "result",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "試[けん]に失[しっ]敗[ぱい]してしまいました。",
      en: "I ended up failing the exam."
    }
  },
  {
    id: "vmn4-L43-15",
    word: "成功",
    reading: "せいこう",
    romaji: "seikou",
    meaning: "success",
    level: "N4",
    theme: "result",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "実[じっ]験[けん]は成[せい]功[こう]しました。",
      en: "The experiment was a success."
    }
  },
  {
    id: "vmn4-L43-16",
    word: "当然",
    reading: "とうぜん",
    romaji: "touzen",
    meaning: "naturally, as a matter of course",
    level: "N4",
    theme: "expectation",
    lesson: 43,
    partOfSpeech: "adverb",
    example: {
      jp: "当[とう]然[ぜん]の結[けっ]果[か]です。",
      en: "It is a natural result."
    }
  },
  {
    id: "vmn4-L43-17",
    word: "どうせ",
    reading: "どうせ",
    romaji: "douse",
    meaning: "anyway, in any case",
    level: "N4",
    theme: "resignation",
    lesson: 43,
    partOfSpeech: "adverb",
    example: {
      jp: "どうせ無[む]理[り]だからやめましょう。",
      en: "Let us stop since it is impossible anyway."
    }
  },
  {
    id: "vmn4-L43-18",
    word: "案の定",
    reading: "あんのじょう",
    romaji: "anno jou",
    meaning: "as expected, sure enough",
    level: "N4",
    theme: "expectation",
    lesson: 43,
    partOfSpeech: "adverb",
    example: {
      jp: "案[あん]の定[じょう]、雨[あめ]が降[ふ]り出[だ]しました。",
      en: "As expected, it started raining."
    }
  },
  {
    id: "vmn4-L43-19",
    word: "期待",
    reading: "きたい",
    romaji: "kitai",
    meaning: "expectation, hope",
    level: "N4",
    theme: "expectation",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "結[けっ]果[か]に期[き]待[たい]しています。",
      en: "I am expecting good results."
    }
  },
  {
    id: "vmn4-L43-20",
    word: "心配",
    reading: "しんぱい",
    romaji: "shinpai",
    meaning: "worry, anxiety",
    level: "N4",
    theme: "feeling",
    lesson: 43,
    partOfSpeech: "na-adjective",
    example: {
      jp: "母[はは]の病[びょう]気[き]が心[しん]配[ぱい]です。",
      en: "I am worried about my mother's illness."
    }
  },
  {
    id: "vmn4-L43-21",
    word: "間違い",
    reading: "まちがい",
    romaji: "machigai",
    meaning: "mistake, error",
    level: "N4",
    theme: "error",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "この答[こた]えは間[まち]違[が]いです。",
      en: "This answer is wrong."
    }
  },
  {
    id: "vmn4-L43-22",
    word: "限る",
    reading: "かぎる",
    romaji: "kagiru",
    meaning: "to be limited to",
    level: "N4",
    theme: "limit",
    lesson: 43,
    partOfSpeech: "verb",
    example: {
      jp: "このメニューは会[かい]員[いん]に限[かぎ]ります。",
      en: "This menu is limited to members."
    }
  },
  {
    id: "vmn4-L43-23",
    word: "限り",
    reading: "かぎり",
    romaji: "kagiri",
    meaning: "as long as",
    level: "N4",
    theme: "limit",
    lesson: 43,
    partOfSpeech: "particle",
    example: {
      jp: "生[い]きている限[かぎ]り、希[き]望[ぼう]があります。",
      en: "As long as you live, there is hope."
    }
  },
  {
    id: "vmn4-L43-24",
    word: "違う",
    reading: "ちがう",
    romaji: "chigau",
    meaning: "to differ, to be wrong",
    level: "N4",
    theme: "difference",
    lesson: 43,
    partOfSpeech: "verb",
    example: {
      jp: "私[わたし]の意[い]見[けん]は違[ちが]います。",
      en: "My opinion is different."
    }
  },
  {
    id: "vmn4-L43-25",
    word: "直す",
    reading: "なおす",
    romaji: "naosu",
    meaning: "to fix, to correct",
    level: "N4",
    theme: "action",
    lesson: 43,
    partOfSpeech: "verb",
    example: {
      jp: "壊[こわ]れた時[とけい]計[けい]を直[なお]しました。",
      en: "I fixed the broken clock."
    }
  },
  {
    id: "vmn4-L43-26",
    word: "壊れる",
    reading: "こわれる",
    romaji: "kowaeru",
    meaning: "to break, to be broken",
    level: "N4",
    theme: "state",
    lesson: 43,
    partOfSpeech: "verb",
    example: {
      jp: "携[けい]帯[たい]が壊[こわ]れてしまいました。",
      en: "My phone ended up breaking."
    }
  },
  {
    id: "vmn4-L43-27",
    word: "値段",
    reading: "ねだん",
    romaji: "nedan",
    meaning: "price",
    level: "N4",
    theme: "money",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "この値[ね]段[だん]は高[たか]すぎます。",
      en: "This price is too high."
    }
  },
  {
    id: "vmn4-L43-28",
    word: "予想",
    reading: "よそう",
    romaji: "yosou",
    meaning: "expectation, prediction",
    level: "N4",
    theme: "expectation",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "予[よ]想[そう]通[どお]りの結[けっ]果[か]でした。",
      en: "It was the result as predicted."
    }
  },
  {
    id: "vmn4-L43-29",
    word: "約束",
    reading: "やくそく",
    romaji: "yakusoku",
    meaning: "promise",
    level: "N4",
    theme: "promise",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "約[やく]束[そく]を守[まも]らなければなりません。",
      en: "You must keep your promise."
    }
  },
  {
    id: "vmn4-L43-30",
    word: "迷う",
    reading: "まよう",
    romaji: "mayou",
    meaning: "to hesitate, to lose one's way",
    level: "N4",
    theme: "feeling",
    lesson: 43,
    partOfSpeech: "verb",
    example: {
      jp: "進[しん]路[ろ]に迷[まよ]っています。",
      en: "I am hesitating about my future path."
    }
  },
  {
    id: "vmn4-L43-31",
    word: "生まれつき",
    reading: "うまれつき",
    romaji: "umaretsuki",
    meaning: "by nature, innate",
    level: "N4",
    theme: "nature",
    lesson: 43,
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]は生[う]まれつき目[め]が悪[わる]いです。",
      en: "He was born with poor eyesight."
    }
  },
  {
    id: "vmn4-L43-32",
    word: "案外",
    reading: "あんがい",
    romaji: "angai",
    meaning: "unexpectedly",
    level: "N4",
    theme: "surprise",
    lesson: 43,
    partOfSpeech: "adverb",
    example: {
      jp: "案[あん]外[がい]簡[かん]単[たん]でした。",
      en: "It was unexpectedly easy."
    }
  },
  {
    id: "vmn4-L43-33",
    word: "実は",
    reading: "じつは",
    romaji: "jitsu wa",
    meaning: "actually, to tell the truth",
    level: "N4",
    theme: "disclosure",
    lesson: 43,
    partOfSpeech: "expression",
    example: {
      jp: "実[じつ]は私[わたし]も行[い]きたいです。",
      en: "Actually, I also want to go."
    }
  },
  {
    id: "vmn4-L43-34",
    word: "予定通り",
    reading: "よていどおり",
    romaji: "yoteidoori",
    meaning: "as planned, on schedule",
    level: "N4",
    theme: "plan",
    lesson: 43,
    partOfSpeech: "expression",
    example: {
      jp: "予[よ]定[てい]通[どお]りに終[お]わりました。",
      en: "It finished as planned."
    }
  },

  // =========================================================
  // Lesson 44 — Conversation fillers & flow (それで, それなら, たとえば, etc.)
  // =========================================================
  {
    id: "vmn4-L44-01",
    word: "それで",
    reading: "それで",
    romaji: "sorede",
    meaning: "and then, so",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "風[かぜ]邪[ぜ]をひきました。それで休[やす]みました。",
      en: "I caught a cold. So I took a day off."
    }
  },
  {
    id: "vmn4-L44-02",
    word: "それなら",
    reading: "それなら",
    romaji: "sorenara",
    meaning: "if so, in that case",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "それなら、私[わたし]も行[い]きます。",
      en: "If so, I will go too."
    }
  },
  {
    id: "vmn4-L44-03",
    word: "たとえば",
    reading: "たとえば",
    romaji: "tatoeba",
    meaning: "for example",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "たとえば、これを見[み]てください。",
      en: "For example, please look at this."
    }
  },
  {
    id: "vmn4-L44-04",
    word: "つまり",
    reading: "つまり",
    romaji: "tsumari",
    meaning: "in other words, that is to say",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "つまり、反[はん]対[たい]ということです。",
      en: "In other words, you are opposed."
    }
  },
  {
    id: "vmn4-L44-05",
    word: "しかし",
    reading: "しかし",
    romaji: "shikashi",
    meaning: "however",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "しかし、結[けっ]果[か]は違[ちが]いました。",
      en: "However, the result was different."
    }
  },
  {
    id: "vmn4-L44-06",
    word: "けれども",
    reading: "けれども",
    romaji: "keredomo",
    meaning: "but, however",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "けれども、彼[かれ]は来[き]ませんでした。",
      en: "But he did not come."
    }
  },
  {
    id: "vmn4-L44-07",
    word: "ところで",
    reading: "ところで",
    romaji: "tokorode",
    meaning: "by the way",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "ところで、明[あした]日[あした]は暇[ひま]ですか。",
      en: "By the way, are you free tomorrow?"
    }
  },
  {
    id: "vmn4-L44-08",
    word: "だから",
    reading: "だから",
    romaji: "dakara",
    meaning: "therefore, so",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "だから、早[はや]く来[き]てください。",
      en: "Therefore, please come early."
    }
  },
  {
    id: "vmn4-L44-09",
    word: "それに",
    reading: "それに",
    romaji: "soreni",
    meaning: "besides, moreover",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "それに、時[じ]間[かん]もありません。",
      en: "Besides, there is no time."
    }
  },
  {
    id: "vmn4-L44-10",
    word: "それとも",
    reading: "それとも",
    romaji: "soretomo",
    meaning: "or (between alternatives)",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "コーヒー、それともお茶[ちゃ]にしますか。",
      en: "Coffee, or will you have tea?"
    }
  },
  {
    id: "vmn4-L44-11",
    word: "また",
    reading: "また",
    romaji: "mata",
    meaning: "also, again",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "また会[あ]いましょう。",
      en: "Let us meet again."
    }
  },
  {
    id: "vmn4-L44-12",
    word: "なお",
    reading: "なお",
    romaji: "nao",
    meaning: "additionally, moreover",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "なお、質[しつ]問[もん]はこちらへ。",
      en: "Additionally, direct questions here."
    }
  },
  {
    id: "vmn4-L44-13",
    word: "むしろ",
    reading: "むしろ",
    romaji: "mushiro",
    meaning: "rather, instead",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "行[い]くよりむしろ残[のこ]りたいです。",
      en: "Rather than going, I would rather stay."
    }
  },
  {
    id: "vmn4-L44-14",
    word: "とにかく",
    reading: "ともかく",
    romaji: "tonikaku",
    meaning: "anyway, in any case",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "とにかくやってみましょう。",
      en: "Anyway, let us try."
    }
  },
  {
    id: "vmn4-L44-15",
    word: "ともかく",
    reading: "ともかく",
    romaji: "tomokaku",
    meaning: "anyway, setting aside",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "金[きん]額[がく]はともかく、まず相[そう]談[だん]しましょう。",
      en: "Setting aside the amount, let us consult first."
    }
  },
  {
    id: "vmn4-L44-16",
    word: "いわば",
    reading: "いわば",
    romaji: "iwaba",
    meaning: "so to speak",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "ここはいわば第[だい]二[に]の家[いえ]です。",
      en: "This is, so to speak, my second home."
    }
  },
  {
    id: "vmn4-L44-17",
    word: "ようするに",
    reading: "ようするに",
    romaji: "yousuruni",
    meaning: "in short, to sum up",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "ようするに、無[む]理[り]だということです。",
      en: "In short, it is impossible."
    }
  },
  {
    id: "vmn4-L44-18",
    word: "そういえば",
    reading: "そういえば",
    romaji: "souieba",
    meaning: "come to think of it",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "expression",
    example: {
      jp: "そういえば、彼[かれ]の話[はな]しを聞[き]きました。",
      en: "Come to think of it, I heard about him."
    }
  },
  {
    id: "vmn4-L44-19",
    word: "というか",
    reading: "というか",
    romaji: "toiu ka",
    meaning: "or rather",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "expression",
    example: {
      jp: "難[むずか]しいというか、面[めん]倒[どう]です。",
      en: "Rather than difficult, it is troublesome."
    }
  },
  {
    id: "vmn4-L44-20",
    word: "まあ",
    reading: "まあ",
    romaji: "maa",
    meaning: "well, anyway",
    level: "N4",
    theme: "filler",
    lesson: 44,
    partOfSpeech: "interjection",
    example: {
      jp: "まあ、座[すわ]ってください。",
      en: "Well, please sit down."
    }
  },
  {
    id: "vmn4-L44-21",
    word: "さて",
    reading: "さて",
    romaji: "sate",
    meaning: "well then, now",
    level: "N4",
    theme: "filler",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "さて、始[はじ]めましょう。",
      en: "Well then, let us begin."
    }
  },
  {
    id: "vmn4-L44-22",
    word: "ところが",
    reading: "ところが",
    romaji: "tokoroga",
    meaning: "however, yet",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "ところが、彼[かれ]は来[き]ませんでした。",
      en: "However, he did not come."
    }
  },
  {
    id: "vmn4-L44-23",
    word: "そのうえ",
    reading: "そのうえ",
    romaji: "sonoue",
    meaning: "besides, moreover",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "その上[うえ]、値[ね]段[だん]も高[たか]いです。",
      en: "Besides, the price is high."
    }
  },
  {
    id: "vmn4-L44-24",
    word: "もっとも",
    reading: "もっとも",
    romaji: "mottomo",
    meaning: "however, though",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "もっとも、例[れい]外[がい]もあります。",
      en: "However, there are exceptions."
    }
  },
  {
    id: "vmn4-L44-25",
    word: "ひとまず",
    reading: "ひとまず",
    romaji: "hitomazu",
    meaning: "for the time being",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "ひとまず終[お]わりにしましょう。",
      en: "Let us finish for the time being."
    }
  },
  {
    id: "vmn4-L44-26",
    word: "とりあえず",
    reading: "とりあえず",
    romaji: "toriaezu",
    meaning: "for now, first of all",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "とりあえずビールをください。",
      en: "A beer for now, please."
    }
  },
  {
    id: "vmn4-L44-27",
    word: "さっそく",
    reading: "さっそく",
    romaji: "sassoku",
    meaning: "immediately, at once",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "さっそく始[はじ]めましょう。",
      en: "Let us start immediately."
    }
  },
  {
    id: "vmn4-L44-28",
    word: "すなわち",
    reading: "すなわち",
    romaji: "sunawachi",
    meaning: "that is, namely",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "conjunction",
    example: {
      jp: "AすなわちBということです。",
      en: "A, that is, B."
    }
  },
  {
    id: "vmn4-L44-29",
    word: "つまるところ",
    reading: "つまるところ",
    romaji: "tsumaru tokoro",
    meaning: "in conclusion, after all",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "expression",
    example: {
      jp: "つまるところ、彼[かれ]が正[ただ]しかったのです。",
      en: "In conclusion, he was right."
    }
  },
  {
    id: "vmn4-L44-30",
    word: "結局のところ",
    reading: "けっきょくのところ",
    romaji: "kekkyoku no tokoro",
    meaning: "in the end, ultimately",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "expression",
    example: {
      jp: "結[けっ]局[きょく]のところ、誰[だれ]も責[せき]任[にん]を取[と]りませんでした。",
      en: "In the end, no one took responsibility."
    }
  },
  {
    id: "vmn4-L44-31",
    word: "だからといって",
    reading: "だからといって",
    romaji: "dakara to itte",
    meaning: "even so, just because",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "expression",
    example: {
      jp: "だからといって、諦[あきら]める必[ひつ]要[よう]はありません。",
      en: "Even so, there is no need to give up."
    }
  },
  {
    id: "vmn4-L44-32",
    word: "要するに",
    reading: "ようするに",
    romaji: "yousuruni",
    meaning: "in short, to sum up",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "要[よう]するに、時[じ]間[かん]が足[た]りないのです。",
      en: "In short, there is not enough time."
    }
  },
  {
    id: "vmn4-L44-33",
    word: "例えば",
    reading: "たとえば",
    romaji: "tatoeba",
    meaning: "for example",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "例[たと]えば、日[に]本[ほん]の文[ぶん]化[か]を考[かんが]えてみましょう。",
      en: "For example, let us consider Japanese culture."
    }
  },
  {
    id: "vmn4-L44-34",
    word: "一応",
    reading: "いちおう",
    romaji: "ichio",
    meaning: "for the time being, more or less",
    level: "N4",
    theme: "conjunction",
    lesson: 44,
    partOfSpeech: "adverb",
    example: {
      jp: "一[いち]応[おう]準[じゅん]備[び]はできました。",
      en: "Preparations are done for the time being."
    }
  },

  // =========================================================
  // Lesson 45 — Feelings / Certainty (かもしれない, にちがいない, かしら, かな, etc.)
  // =========================================================
  {
    id: "vmn4-L45-01",
    word: "かもしれない",
    reading: "かもしれない",
    romaji: "kamoshirenai",
    meaning: "might, may be",
    level: "N4",
    theme: "uncertainty",
    lesson: 45,
    partOfSpeech: "expression",
    example: {
      jp: "明[あした]日[あした]は雨[あめ]かもしれません。",
      en: "It might rain tomorrow."
    }
  },
  {
    id: "vmn4-L45-02",
    word: "にちがいない",
    reading: "にちがいない",
    romaji: "ni chigainai",
    meaning: "certainly, no doubt",
    level: "N4",
    theme: "certainty",
    lesson: 45,
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]は犯[はん]人[にん]に違[ちが]いありません。",
      en: "He must be the culprit."
    }
  },
  {
    id: "vmn4-L45-03",
    word: "かしら",
    reading: "かしら",
    romaji: "kashira",
    meaning: "I wonder (feminine)",
    level: "N4",
    theme: "wonder",
    lesson: 45,
    partOfSpeech: "particle",
    example: {
      jp: "どうしたのかしら。",
      en: "I wonder what happened."
    }
  },
  {
    id: "vmn4-L45-04",
    word: "かな",
    reading: "かな",
    romaji: "kana",
    meaning: "I wonder (colloquial)",
    level: "N4",
    theme: "wonder",
    lesson: 45,
    partOfSpeech: "particle",
    example: {
      jp: "明[あした]日[あした]は晴[は]れるかな。",
      en: "I wonder if it will be sunny tomorrow."
    }
  },
  {
    id: "vmn4-L45-05",
    word: "ぜひ",
    reading: "ぜひ",
    romaji: "zehi",
    meaning: "by all means, definitely",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "ぜひ行[い]きたいです。",
      en: "I would like to go by all means."
    }
  },
  {
    id: "vmn4-L45-06",
    word: "おそらく",
    reading: "おそらく",
    romaji: "osoraku",
    meaning: "perhaps, probably",
    level: "N4",
    theme: "certainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "おそらく彼[かれ]は来[こ]ないでしょう。",
      en: "Perhaps he will not come."
    }
  },
  {
    id: "vmn4-L45-07",
    word: "たしか",
    reading: "たしか",
    romaji: "tashika",
    meaning: "I think, if I remember correctly",
    level: "N4",
    theme: "uncertainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "たしか、三[さん]時[じ]に会[あ]いました。",
      en: "If I remember correctly, we met at three o'clock."
    }
  },
  {
    id: "vmn4-L45-08",
    word: "きっと",
    reading: "きっと",
    romaji: "kitto",
    meaning: "surely, certainly",
    level: "N4",
    theme: "certainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "きっと成[せい]功[こう]します。",
      en: "It will surely succeed."
    }
  },
  {
    id: "vmn4-L45-09",
    word: "ほんとうに",
    reading: "ほんとうに",
    romaji: "hontou ni",
    meaning: "really, truly",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "本[ほん]当[とう]にありがとうごさいます。",
      en: "Thank you very much."
    }
  },
  {
    id: "vmn4-L45-10",
    word: "たぶん",
    reading: "たぶん",
    romaji: "tabun",
    meaning: "maybe, perhaps",
    level: "N4",
    theme: "uncertainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "たぶん明[あした]日[あした]は暇[ひま]です。",
      en: "Maybe I will be free tomorrow."
    }
  },
  {
    id: "vmn4-L45-11",
    word: "もしかしたら",
    reading: "もしかしたら",
    romaji: "moshikashitara",
    meaning: "perhaps, by any chance",
    level: "N4",
    theme: "uncertainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "もしかしたら、彼[かれ]が来[く]るかもしれません。",
      en: "Perhaps he might come."
    }
  },
  {
    id: "vmn4-L45-12",
    word: "もしかすると",
    reading: "もしかすると",
    romaji: "moshikasuruto",
    meaning: "perhaps, possibly",
    level: "N4",
    theme: "uncertainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "もしかすると、間[まち]違[が]いかもしれません。",
      en: "Possibly it might be a mistake."
    }
  },
  {
    id: "vmn4-L45-13",
    word: "おまけに",
    reading: "おまけに",
    romaji: "omakeni",
    meaning: "besides, to make matters worse",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "conjunction",
    example: {
      jp: "雨[あめ]が降[ふ]った。おまけに寒[さむ]かった。",
      en: "It rained. Besides, it was cold."
    }
  },
  {
    id: "vmn4-L45-14",
    word: "だいぶ",
    reading: "だいぶ",
    romaji: "daibu",
    meaning: "considerably, quite",
    level: "N4",
    theme: "degree",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "だいぶ良[よ]くなりました。",
      en: "It has gotten considerably better."
    }
  },
  {
    id: "vmn4-L45-15",
    word: "かなり",
    reading: "かなり",
    romaji: "kanari",
    meaning: "fairly, considerably",
    level: "N4",
    theme: "degree",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "かなり難[むずか]しいです。",
      en: "It is fairly difficult."
    }
  },
  {
    id: "vmn4-L45-16",
    word: "よほど",
    reading: "よほど",
    romaji: "yohodo",
    meaning: "by far, very much",
    level: "N4",
    theme: "degree",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "よほど疲[つか]れていたのでしょう。",
      en: "He must have been very tired."
    }
  },
  {
    id: "vmn4-L45-17",
    word: "さぞ",
    reading: "さぞ",
    romaji: "sazo",
    meaning: "surely (with emotion)",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "さぞお疲[つか]れでしょう。",
      en: "You must be tired."
    }
  },
  {
    id: "vmn4-L45-18",
    word: "さぞかし",
    reading: "さぞかし",
    romaji: "sazokashi",
    meaning: "surely, no doubt",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "さぞかし嬉[うれ]しかったでしょう。",
      en: "You must have been happy."
    }
  },
  {
    id: "vmn4-L45-19",
    word: "いかにも",
    reading: "いかにも",
    romaji: "ikanimo",
    meaning: "truly, indeed",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "いかにも彼[かれ]らしい言[い]い方[かた]です。",
      en: "It is truly his way of speaking."
    }
  },
  {
    id: "vmn4-L45-20",
    word: "まるで",
    reading: "まるで",
    romaji: "marude",
    meaning: "as if, completely",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "まるで夢[ゆめ]のようです。",
      en: "It is like a dream."
    }
  },
  {
    id: "vmn4-L45-21",
    word: "なんと",
    reading: "なんと",
    romaji: "nanto",
    meaning: "what (exclamation)",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "なんと美[うつく]しい花[はな]でしょう。",
      en: "What a beautiful flower."
    }
  },
  {
    id: "vmn4-L45-22",
    word: "まったく",
    reading: "まったく",
    romaji: "mattaku",
    meaning: "completely, entirely",
    level: "N4",
    theme: "degree",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "まったく同[どう]感[かん]です。",
      en: "I completely agree."
    }
  },
  {
    id: "vmn4-L45-23",
    word: "全然",
    reading: "ぜんぜん",
    romaji: "zenzen",
    meaning: "completely, not at all",
    level: "N4",
    theme: "degree",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "全[ぜん]然[ぜん]分[わ]かりません。",
      en: "I do not understand at all."
    }
  },
  {
    id: "vmn4-L45-24",
    word: "必ず",
    reading: "かならず",
    romaji: "kanarazu",
    meaning: "without fail, always",
    level: "N4",
    theme: "certainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "必[かなら]ず時[じ]間[かん]通[どお]りに来[き]てください。",
      en: "Please come on time without fail."
    }
  },
  {
    id: "vmn4-L45-25",
    word: "絶対",
    reading: "ぜったい",
    romaji: "zettai",
    meaning: "absolute, absolutely",
    level: "N4",
    theme: "certainty",
    lesson: 45,
    partOfSpeech: "na-adjective",
    example: {
      jp: "絶[ぜっ]対[たい]に諦[あきら]めないでください。",
      en: "Please never give up."
    }
  },
  {
    id: "vmn4-L45-26",
    word: "たとえ",
    reading: "たとえ",
    romaji: "tatoe",
    meaning: "even if",
    level: "N4",
    theme: "concession",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "たとえ雨[あめ]が降[ふ]っても行[い]きます。",
      en: "Even if it rains, I will go."
    }
  },
  {
    id: "vmn4-L45-27",
    word: "いくら",
    reading: "いくら",
    romaji: "ikura",
    meaning: "how much; no matter how",
    level: "N4",
    theme: "concession",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "いくら待[ま]っても来[き]ません。",
      en: "No matter how long I wait, he does not come."
    }
  },
  {
    id: "vmn4-L45-28",
    word: "どうしても",
    reading: "どうしても",
    romaji: "doushitemo",
    meaning: "no matter what, at any cost",
    level: "N4",
    theme: "emphasis",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "どうしても欲[ほ]しいです。",
      en: "I want it no matter what."
    }
  },
  {
    id: "vmn4-L45-29",
    word: "どうやら",
    reading: "どうやら",
    romaji: "douyara",
    meaning: "apparently, it seems",
    level: "N4",
    theme: "uncertainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "どうやら本[ほん]当[とう]のようです。",
      en: "It seems to be true."
    }
  },
  {
    id: "vmn4-L45-30",
    word: "なんとなく",
    reading: "なんとなく",
    romaji: "nantonaku",
    meaning: "somehow, for some reason",
    level: "N4",
    theme: "uncertainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "なんとなく不[ふ]安[あん]です。",
      en: "I feel uneasy for some reason."
    }
  },
  {
    id: "vmn4-L45-31",
    word: "もちろん",
    reading: "もちろん",
    romaji: "mochiron",
    meaning: "of course, naturally",
    level: "N4",
    theme: "certainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "もちろん賛[さん]成[せい]します。",
      en: "Of course I agree."
    }
  },
  {
    id: "vmn4-L45-32",
    word: "当然",
    reading: "とうぜん",
    romaji: "touzen",
    meaning: "naturally, as a matter of course",
    level: "N4",
    theme: "certainty",
    lesson: 45,
    partOfSpeech: "adverb",
    example: {
      jp: "当[とう]然[ぜん]のことです。",
      en: "It is a natural thing."
    }
  },
  {
    id: "vmn4-L45-33",
    word: "確信",
    reading: "かくしん",
    romaji: "kakushin",
    meaning: "conviction, belief",
    level: "N4",
    theme: "certainty",
    lesson: 45,
    partOfSpeech: "noun",
    example: {
      jp: "成[せい]功[こう]を確[かく]信[しん]しています。",
      en: "I am convinced of success."
    }
  },
  {
    id: "vmn4-L45-34",
    word: "予感",
    reading: "よかん",
    romaji: "yokan",
    meaning: "premonition, presentiment",
    level: "N4",
    theme: "feeling",
    lesson: 45,
    partOfSpeech: "noun",
    example: {
      jp: "何[なに]か起[お]こる予[よ]感[かん]がします。",
      en: "I have a premonition something will happen."
    }
  },

  // =========================================================
  // Lesson 46 — Completion (ておく, てしまう, とく, etc.)
  // =========================================================
  {
    id: "vmn4-L46-01",
    word: "ておく",
    reading: "ておく",
    romaji: "te oku",
    meaning: "to do in advance",
    level: "N4",
    theme: "completion",
    lesson: 46,
    partOfSpeech: "auxiliary verb",
    example: {
      jp: "買[か]い物[もの]をして置[お]きます。",
      en: "I will do the shopping in advance."
    }
  },
  {
    id: "vmn4-L46-02",
    word: "てしまう",
    reading: "てしまう",
    romaji: "te shimau",
    meaning: "to finish; regretfully do",
    level: "N4",
    theme: "completion",
    lesson: 46,
    partOfSpeech: "auxiliary verb",
    example: {
      jp: "全部[ぜんぶ]食[た]べてしまいました。",
      en: "I ate it all."
    }
  },
  {
    id: "vmn4-L46-03",
    word: "とく",
    reading: "とく",
    romaji: "toku",
    meaning: "contraction of ておく",
    level: "N4",
    theme: "completion",
    lesson: 46,
    partOfSpeech: "auxiliary verb",
    example: {
      jp: "これ、読[よ]んどいて。",
      en: "Read this in advance."
    }
  },
  {
    id: "vmn4-L46-04",
    word: "ちゃう",
    reading: "ちゃう",
    romaji: "chau",
    meaning: "contraction of てしまう",
    level: "N4",
    theme: "completion",
    lesson: 46,
    partOfSpeech: "auxiliary verb",
    example: {
      jp: "忘[わす]れちゃった。",
      en: "I forgot it."
    }
  },
  {
    id: "vmn4-L46-05",
    word: "準備",
    reading: "じゅんび",
    romaji: "junbi",
    meaning: "preparation",
    level: "N4",
    theme: "preparation",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "試[けん]の準[じゅん]備[び]をしています。",
      en: "I am preparing for the exam."
    }
  },
  {
    id: "vmn4-L46-06",
    word: "用意",
    reading: "ようい",
    romaji: "youi",
    meaning: "preparation, ready",
    level: "N4",
    theme: "preparation",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "食[しょく]事[じ]の用[よう]意[い]ができました。",
      en: "The meal preparation is done."
    }
  },
  {
    id: "vmn4-L46-07",
    word: "片付ける",
    reading: "かたづける",
    romaji: "katazukeru",
    meaning: "to tidy up, to put in order",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "部[へ]屋[や]を片[かた]付[づ]けました。",
      en: "I tidied up the room."
    }
  },
  {
    id: "vmn4-L46-08",
    word: "整理",
    reading: "せいり",
    romaji: "seiri",
    meaning: "organization, arrangement",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "机[つくえ]の上[うえ]を整[せい]理[り]しました。",
      en: "I organized the desk."
    }
  },
  {
    id: "vmn4-L46-09",
    word: "捨てる",
    reading: "すてる",
    romaji: "suteru",
    meaning: "to throw away",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "ゴミを捨[す]ててください。",
      en: "Please throw away the trash."
    }
  },
  {
    id: "vmn4-L46-10",
    word: "下着",
    reading: "したぎ",
    romaji: "shitagi",
    meaning: "underwear",
    level: "N4",
    theme: "clothing",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "新[あたら]しい下[した]着[ぎ]を買[か]いました。",
      en: "I bought new underwear."
    }
  },
  {
    id: "vmn4-L46-11",
    word: "靴下",
    reading: "くつした",
    romaji: "kutsushita",
    meaning: "socks",
    level: "N4",
    theme: "clothing",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "白[しろ]い靴[くつ]下[した]を履[は]いています。",
      en: "I am wearing white socks."
    }
  },
  {
    id: "vmn4-L46-12",
    word: "服",
    reading: "ふく",
    romaji: "fuku",
    meaning: "clothes",
    level: "N4",
    theme: "clothing",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "この服[ふく]は高[たか]すぎます。",
      en: "These clothes are too expensive."
    }
  },
  {
    id: "vmn4-L46-13",
    word: "洗濯",
    reading: "せんたく",
    romaji: "sentaku",
    meaning: "laundry, washing",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "洗[せん]濯[たく]をしてください。",
      en: "Please do the laundry."
    }
  },
  {
    id: "vmn4-L46-14",
    word: "干す",
    reading: "ほす",
    romaji: "hosu",
    meaning: "to hang (laundry) to dry",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "洗[せん]濯[たく]物[もの]を干[ほ]しました。",
      en: "I hung the laundry."
    }
  },
  {
    id: "vmn4-L46-15",
    word: "乾く",
    reading: "かわく",
    romaji: "kawaku",
    meaning: "to dry",
    level: "N4",
    theme: "state",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "服[ふく]が乾[かわ]きました。",
      en: "The clothes have dried."
    }
  },
  {
    id: "vmn4-L46-16",
    word: "畳む",
    reading: "たたむ",
    romaji: "tatamu",
    meaning: "to fold",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "シーツを畳[たた]みました。",
      en: "I folded the sheets."
    }
  },
  {
    id: "vmn4-L46-17",
    word: "買い物",
    reading: "かいもの",
    romaji: "kaimono",
    meaning: "shopping",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "買[か]い物[もの]に行[い]きます。",
      en: "I am going shopping."
    }
  },
  {
    id: "vmn4-L46-18",
    word: "予約",
    reading: "よやく",
    romaji: "yoyaku",
    meaning: "reservation",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "ホテルを予[よ]約[やく]しました。",
      en: "I reserved a hotel."
    }
  },
  {
    id: "vmn4-L46-19",
    word: "確認",
    reading: "かくにん",
    romaji: "kakunin",
    meaning: "confirmation, check",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "日[ひづ]付[け]を確[かく]認[にん]してください。",
      en: "Please confirm the date."
    }
  },
  {
    id: "vmn4-L46-20",
    word: "調べる",
    reading: "しらべる",
    romaji: "shiraberu",
    meaning: "to check, to investigate",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "辞[じ]書[しょ]で調[しら]べました。",
      en: "I checked in the dictionary."
    }
  },
  {
    id: "vmn4-L46-21",
    word: "集める",
    reading: "あつめる",
    romaji: "atsumeru",
    meaning: "to collect, to gather",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "切[きっ]手[て]を集[あつ]めています。",
      en: "I collect stamps."
    }
  },
  {
    id: "vmn4-L46-22",
    word: "貯める",
    reading: "ためる",
    romaji: "tameru",
    meaning: "to save (money)",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "お[かね]金[かね]を貯[た]めています。",
      en: "I am saving money."
    }
  },
  {
    id: "vmn4-L46-23",
    word: "払う",
    reading: "はらう",
    romaji: "harau",
    meaning: "to pay",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "家[や]賃[ちん]を払[はら]いました。",
      en: "I paid the rent."
    }
  },
  {
    id: "vmn4-L46-24",
    word: "返す",
    reading: "かえす",
    romaji: "kaesu",
    meaning: "to return (something)",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "借[か]りた本[ほん]を返[かえ]しました。",
      en: "I returned the borrowed book."
    }
  },
  {
    id: "vmn4-L46-25",
    word: "忘れる",
    reading: "わすれる",
    romaji: "wasureru",
    meaning: "to forget",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "傘[かさ]を忘[わす]れました。",
      en: "I forgot my umbrella."
    }
  },
  {
    id: "vmn4-L46-26",
    word: "落とす",
    reading: "おとす",
    romaji: "otosu",
    meaning: "to drop, to lose",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "財[さい]布[ふ]を落[お]としました。",
      en: "I dropped my wallet."
    }
  },
  {
    id: "vmn4-L46-27",
    word: "なくす",
    reading: "なくす",
    romaji: "nakusu",
    meaning: "to lose",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "鍵[かぎ]をなくしました。",
      en: "I lost my key."
    }
  },
  {
    id: "vmn4-L46-28",
    word: "壊す",
    reading: "こわす",
    romaji: "kowasu",
    meaning: "to break",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "茶[ちゃ]わんを壊[こわ]してしまいました。",
      en: "I ended up breaking the teacup."
    }
  },
  {
    id: "vmn4-L46-29",
    word: "修理",
    reading: "しゅうり",
    romaji: "shuuri",
    meaning: "repair",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "車[くるま]の修[しゅう]理[り]に出[だ]しました。",
      en: "I sent the car for repair."
    }
  },
  {
    id: "vmn4-L46-30",
    word: "掃除",
    reading: "そうじ",
    romaji: "souji",
    meaning: "cleaning",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "noun",
    example: {
      jp: "部[へ]屋[や]の掃[そう]除[じ]をしました。",
      en: "I cleaned the room."
    }
  },
  {
    id: "vmn4-L46-31",
    word: "片付く",
    reading: "かたづく",
    romaji: "katazuku",
    meaning: "to be tidied, to be put in order",
    level: "N4",
    theme: "state",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "部[へ]屋[や]が片[かた]付[づ]きました。",
      en: "The room has been tidied."
    }
  },
  {
    id: "vmn4-L46-32",
    word: "汚れる",
    reading: "よごれる",
    romaji: "yogoreru",
    meaning: "to get dirty",
    level: "N4",
    theme: "state",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "服[ふく]が汚[よご]れました。",
      en: "The clothes got dirty."
    }
  },
  {
    id: "vmn4-L46-33",
    word: "洗う",
    reading: "あらう",
    romaji: "arau",
    meaning: "to wash",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "野[や]菜[さい]を洗[あら]いました。",
      en: "I washed the vegetables."
    }
  },
  {
    id: "vmn4-L46-34",
    word: "しまう",
    reading: "しまう",
    romaji: "shimau",
    meaning: "to put away",
    level: "N4",
    theme: "action",
    lesson: 46,
    partOfSpeech: "verb",
    example: {
      jp: "おもちゃを箱[はこ]にしまいました。",
      en: "I put the toys in the box."
    }
  },

  // =========================================================
  // Lesson 47 — Should have / Regret (べきだった, ばよかった, つもりだった, etc.)
  // =========================================================
  {
    id: "vmn4-L47-01",
    word: "べきだった",
    reading: "べきだった",
    romaji: "beki datta",
    meaning: "should have done",
    level: "N4",
    theme: "regret",
    lesson: 47,
    partOfSpeech: "expression",
    example: {
      jp: "もっと勉[べん]強[きょう]するべきでした。",
      en: "I should have studied more."
    }
  },
  {
    id: "vmn4-L47-02",
    word: "べき",
    reading: "べき",
    romaji: "beki",
    meaning: "should (ought to)",
    level: "N4",
    theme: "obligation",
    lesson: 47,
    partOfSpeech: "auxiliary verb",
    example: {
      jp: "早[はや]く起[お]きるべきです。",
      en: "You should wake up early."
    }
  },
  {
    id: "vmn4-L47-03",
    word: "ばよかった",
    reading: "ばよかった",
    romaji: "ba yokatta",
    meaning: "should have done (regret)",
    level: "N4",
    theme: "regret",
    lesson: 47,
    partOfSpeech: "expression",
    example: {
      jp: "傘[かさ]を持[も]っていればよかったです。",
      en: "I should have brought an umbrella."
    }
  },
  {
    id: "vmn4-L47-04",
    word: "つもりだった",
    reading: "つもりだった",
    romaji: "tsumori datta",
    meaning: "had intended to",
    level: "N4",
    theme: "regret",
    lesson: 47,
    partOfSpeech: "expression",
    example: {
      jp: "行[い]くつもりでしたが、行[い]けませんでした。",
      en: "I had intended to go, but could not."
    }
  },
  {
    id: "vmn4-L47-05",
    word: "後悔",
    reading: "こうかい",
    romaji: "koukai",
    meaning: "regret, remorse",
    level: "N4",
    theme: "regret",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "昔[むかし]のことを後[こう]悔[かい]しています。",
      en: "I regret the past."
    }
  },
  {
    id: "vmn4-L47-06",
    word: "反省",
    reading: "はんせい",
    romaji: "hansei",
    meaning: "reflection, self-examination",
    level: "N4",
    theme: "reflection",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "自[じ]分[ぶん]の行[こう]動[どう]を反[はん]省[せい]しました。",
      en: "I reflected on my actions."
    }
  },
  {
    id: "vmn4-L47-07",
    word: "失敗",
    reading: "しっぱい",
    romaji: "shippai",
    meaning: "failure, mistake",
    level: "N4",
    theme: "result",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "失[しっ]敗[ぱい]から学[まな]びます。",
      en: "I learn from failure."
    }
  },
  {
    id: "vmn4-L47-08",
    word: "怠ける",
    reading: "なまける",
    romaji: "namakeru",
    meaning: "to be lazy, to slack",
    level: "N4",
    theme: "behavior",
    lesson: 47,
    partOfSpeech: "verb",
    example: {
      jp: "怠[なま]けずに働[はたら]きなさい。",
      en: "Do not be lazy; work hard."
    }
  },
  {
    id: "vmn4-L47-09",
    word: "怠け者",
    reading: "なまけもの",
    romaji: "namakemono",
    meaning: "lazy person",
    level: "N4",
    theme: "behavior",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "弟[おとうと]は怠[なま]け者[もの]です。",
      en: "My younger brother is a lazy person."
    }
  },
  {
    id: "vmn4-L47-10",
    word: "遅刻",
    reading: "ちこく",
    romaji: "chikoku",
    meaning: "lateness, being late",
    level: "N4",
    theme: "result",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "学[がっ]校[こう]に遅[ち]刻[こく]しました。",
      en: "I was late for school."
    }
  },
  {
    id: "vmn4-L47-11",
    word: "欠席",
    reading: "けっせき",
    romaji: "kesseki",
    meaning: "absence",
    level: "N4",
    theme: "result",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "今[きょう]日[きょう]は授[じゅ]業[ぎょう]を欠[けっ]席[せき]します。",
      en: "I will be absent from class today."
    }
  },
  {
    id: "vmn4-L47-12",
    word: "留年",
    reading: "りゅうねん",
    romaji: "ryuunen",
    meaning: "repeating a year",
    level: "N4",
    theme: "result",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "留[りゅう]年[ねん]してしまいました。",
      en: "I ended up repeating the year."
    }
  },
  {
    id: "vmn4-L47-13",
    word: "落第",
    reading: "らくだい",
    romaji: "rakudai",
    meaning: "failing (a grade)",
    level: "N4",
    theme: "result",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "試[けん]に落[らく]第[だい]しました。",
      en: "I failed the exam."
    }
  },
  {
    id: "vmn4-L47-14",
    word: "合格",
    reading: "ごうかく",
    romaji: "goukaku",
    meaning: "passing (an exam)",
    level: "N4",
    theme: "result",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "試[けん]に合[ごう]格[かく]しました。",
      en: "I passed the exam."
    }
  },
  {
    id: "vmn4-L47-15",
    word: "不合格",
    reading: "ふごうかく",
    romaji: "fugoukaku",
    meaning: "failing (an exam)",
    level: "N4",
    theme: "result",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "不[ふ]合[ごう]格[かく]になりました。",
      en: "I failed."
    }
  },
  {
    id: "vmn4-L47-16",
    word: "受験",
    reading: "じゅけん",
    romaji: "juken",
    meaning: "taking an examination",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "大[だい]学[がく]を受[じゅ]験[けん]します。",
      en: "I will take the university exam."
    }
  },
  {
    id: "vmn4-L47-17",
    word: "勉強",
    reading: "べんきょう",
    romaji: "benkyou",
    meaning: "study",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "日[に]本[ほん]語[ご]を勉[べん]強[きょう]しています。",
      en: "I am studying Japanese."
    }
  },
  {
    id: "vmn4-L47-18",
    word: "練習",
    reading: "れんしゅう",
    romaji: "renshuu",
    meaning: "practice",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "ピアノを練[れん]習[しゅう]しています。",
      en: "I am practicing the piano."
    }
  },
  {
    id: "vmn4-L47-19",
    word: "復習",
    reading: "ふくしゅう",
    romaji: "fukushuu",
    meaning: "review",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "昨[きのう]日[きのう]の授[じゅ]業[ぎょう]を復[ふく]習[しゅう]しました。",
      en: "I reviewed yesterday's lesson."
    }
  },
  {
    id: "vmn4-L47-20",
    word: "予習",
    reading: "よしゅう",
    romaji: "yoshuu",
    meaning: "preparation (study in advance)",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "明[あした]日[あした]の授[じゅ]業[ぎょう]を予[よ]習[しゅう]します。",
      en: "I will prepare for tomorrow's lesson."
    }
  },
  {
    id: "vmn4-L47-21",
    word: "提出",
    reading: "ていしゅつ",
    romaji: "teishutsu",
    meaning: "submission",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "レポートの提[てい]出[しゅつ]は明[あした]日[あした]です。",
      en: "The report submission is tomorrow."
    }
  },
  {
    id: "vmn4-L47-22",
    word: "忘れる",
    reading: "わすれる",
    romaji: "wasureru",
    meaning: "to forget",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "verb",
    example: {
      jp: "宿[しゅく]業[だい]を忘[わす]れました。",
      en: "I forgot my homework."
    }
  },
  {
    id: "vmn4-L47-23",
    word: "思い出す",
    reading: "おもいだす",
    romaji: "omoidasu",
    meaning: "to remember, to recall",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "verb",
    example: {
      jp: "昔[むかし]を思[おも]い出[だ]しました。",
      en: "I remembered the old days."
    }
  },
  {
    id: "vmn4-L47-24",
    word: "記憶",
    reading: "きおく",
    romaji: "kioku",
    meaning: "memory",
    level: "N4",
    theme: "memory",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "子[こ]供[ども]の時[とき]の記[き]憶[おく]があります。",
      en: "I have memories from childhood."
    }
  },
  {
    id: "vmn4-L47-25",
    word: "思い出",
    reading: "おもいで",
    romaji: "omoide",
    meaning: "memory, recollection",
    level: "N4",
    theme: "memory",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "美[うつく]しい思[おも]い出[で]です。",
      en: "It is a beautiful memory."
    }
  },
  {
    id: "vmn4-L47-26",
    word: "残念",
    reading: "ざんねん",
    romaji: "zannen",
    meaning: "regrettable, too bad",
    level: "N4",
    theme: "feeling",
    lesson: 47,
    partOfSpeech: "na-adjective",
    example: {
      jp: "残[ざん]念[ねん]ながら、参[さん]加[か]できません。",
      en: "Unfortunately, I cannot participate."
    }
  },
  {
    id: "vmn4-L47-27",
    word: "申し訳ない",
    reading: "もうしわけない",
    romaji: "moushiwake nai",
    meaning: "apologetic, very sorry",
    level: "N4",
    theme: "feeling",
    lesson: 47,
    partOfSpeech: "i-adjective",
    example: {
      jp: "本[ほん]当[とう]に申[もう]し訳[わけ]ありません。",
      en: "I am truly sorry."
    }
  },
  {
    id: "vmn4-L47-28",
    word: "謝る",
    reading: "あやまる",
    romaji: "ayamaru",
    meaning: "to apologize",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "verb",
    example: {
      jp: "彼[かれ]に謝[あやま]りました。",
      en: "I apologized to him."
    }
  },
  {
    id: "vmn4-L47-29",
    word: "許す",
    reading: "ゆるす",
    romaji: "yurusu",
    meaning: "to forgive",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "verb",
    example: {
      jp: "私[わたし]を許[ゆる]してください。",
      en: "Please forgive me."
    }
  },
  {
    id: "vmn4-L47-30",
    word: "責任",
    reading: "せきにん",
    romaji: "sekinin",
    meaning: "responsibility",
    level: "N4",
    theme: "obligation",
    lesson: 47,
    partOfSpeech: "noun",
    example: {
      jp: "責[せき]任[にん]を取[と]ります。",
      en: "I will take responsibility."
    }
  },
  {
    id: "vmn4-L47-31",
    word: "反省する",
    reading: "はんせいする",
    romaji: "hansei suru",
    meaning: "to reflect on oneself",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "verb",
    example: {
      jp: "自[じ]分[ぶん]を反[はん]省[せい]します。",
      en: "I reflect on myself."
    }
  },
  {
    id: "vmn4-L47-32",
    word: "改める",
    reading: "あらためる",
    romaji: "aratameru",
    meaning: "to correct, to reform",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "verb",
    example: {
      jp: "悪[わる]い習[しゅう]慣[かん]を改[あらた]めました。",
      en: "I corrected my bad habits."
    }
  },
  {
    id: "vmn4-L47-33",
    word: "直す",
    reading: "なおす",
    romaji: "naosu",
    meaning: "to fix, to correct",
    level: "N4",
    theme: "action",
    lesson: 47,
    partOfSpeech: "verb",
    example: {
      jp: "間[まち]違[が]いを直[なお]しました。",
      en: "I fixed the mistakes."
    }
  },
  {
    id: "vmn4-L47-34",
    word: "もっと",
    reading: "もっと",
    romaji: "motto",
    meaning: "more",
    level: "N4",
    theme: "degree",
    lesson: 47,
    partOfSpeech: "adverb",
    example: {
      jp: "もっと勉[べん]強[きょう]すべきでした。",
      en: "I should have studied more."
    }
  },

  // =========================================================
  // Lesson 48 — Only / Just (だけ, のみ, ばかり, しか, etc.)
  // =========================================================
  {
    id: "vmn4-L48-01",
    word: "だけ",
    reading: "だけ",
    romaji: "dake",
    meaning: "only, just",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "これだけあれば十[じゅう]分[ぶん]です。",
      en: "This much is enough."
    }
  },
  {
    id: "vmn4-L48-02",
    word: "のみ",
    reading: "のみ",
    romaji: "nomi",
    meaning: "only (formal)",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "会[かい]員[いん]のみ利[り]用[よう]できます。",
      en: "Only members can use it."
    }
  },
  {
    id: "vmn4-L48-03",
    word: "ばかり",
    reading: "ばかり",
    romaji: "bakari",
    meaning: "only, just; about to",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "甘[あま]いものばかり食[た]べています。",
      en: "He eats only sweet things."
    }
  },
  {
    id: "vmn4-L48-04",
    word: "しか",
    reading: "しか",
    romaji: "shika",
    meaning: "only (with negative verb)",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "一[ひと]つしかありません。",
      en: "There is only one."
    }
  },
  {
    id: "vmn4-L48-05",
    word: "だけではない",
    reading: "だけではない",
    romaji: "dake dewa nai",
    meaning: "not only",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]は頭[あたま]がいいだけでなく、親[しん]切[せつ]です。",
      en: "He is not only smart but also kind."
    }
  },
  {
    id: "vmn4-L48-06",
    word: "に限る",
    reading: "にかぎる",
    romaji: "ni kagiru",
    meaning: "to be limited to; is best",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "expression",
    example: {
      jp: "この店[みせ]は会[かい]員[いん]に限[かぎ]ります。",
      en: "This shop is limited to members."
    }
  },
  {
    id: "vmn4-L48-07",
    word: "きり",
    reading: "きり",
    romaji: "kiri",
    meaning: "only, just (since then)",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "一[いち]度[ど]きり会[あ]いませんでした。",
      en: "We met only once."
    }
  },
  {
    id: "vmn4-L48-08",
    word: "さえ",
    reading: "さえ",
    romaji: "sae",
    meaning: "even",
    level: "N4",
    theme: "emphasis",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "水[みず]さえありません。",
      en: "There is not even water."
    }
  },
  {
    id: "vmn4-L48-09",
    word: "すら",
    reading: "すら",
    romaji: "sura",
    meaning: "even (formal)",
    level: "N4",
    theme: "emphasis",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "名[なまえ]前[まえ]すら書[か]けません。",
      en: "He cannot even write his name."
    }
  },
  {
    id: "vmn4-L48-10",
    word: "だって",
    reading: "だって",
    romaji: "datte",
    meaning: "even (colloquial)",
    level: "N4",
    theme: "emphasis",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "子[こ]供[ども]だってできる。",
      en: "Even a child can do it."
    }
  },
  {
    id: "vmn4-L48-11",
    word: "まで",
    reading: "まで",
    romaji: "made",
    meaning: "even; until",
    level: "N4",
    theme: "emphasis",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "君[きみ]まで反[はん]対[たい]するのか。",
      en: "Even you are opposed?"
    }
  },
  {
    id: "vmn4-L48-12",
    word: "ほど",
    reading: "ほど",
    romaji: "hodo",
    meaning: "to the extent of, about",
    level: "N4",
    theme: "degree",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "これほど難[むずか]しいとは。",
      en: "I did not think it would be this difficult."
    }
  },
  {
    id: "vmn4-L48-13",
    word: "くらい",
    reading: "くらい",
    romaji: "kurai",
    meaning: "about, to the extent of",
    level: "N4",
    theme: "degree",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "これくらいでいいです。",
      en: "This much is fine."
    }
  },
  {
    id: "vmn4-L48-14",
    word: "ばかりか",
    reading: "ばかりか",
    romaji: "bakarika",
    meaning: "not only ... but also",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "失[しっ]敗[ぱい]したばかりか、怪[け]我[が]もしました。",
      en: "Not only did I fail, but I also got injured."
    }
  },
  {
    id: "vmn4-L48-15",
    word: "どころか",
    reading: "どころか",
    romaji: "dokoroka",
    meaning: "far from, let alone",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "簡[かん]単[たん]どころか、とても難[むずか]しいです。",
      en: "Far from easy, it is very difficult."
    }
  },
  {
    id: "vmn4-L48-16",
    word: "にすぎない",
    reading: "にすぎない",
    romaji: "ni suginai",
    meaning: "merely, nothing more than",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "expression",
    example: {
      jp: "それは言[い]い訳[わけ]に過[す]ぎません。",
      en: "That is merely an excuse."
    }
  },
  {
    id: "vmn4-L48-17",
    word: "だけあって",
    reading: "だけあって",
    romaji: "dake atte",
    meaning: "as expected of",
    level: "N4",
    theme: "reason",
    lesson: 48,
    partOfSpeech: "expression",
    example: {
      jp: "す[す]さるプロだけあって、うまいです。",
      en: "As expected of a pro, he is good."
    }
  },
  {
    id: "vmn4-L48-18",
    word: "だけに",
    reading: "だけに",
    romaji: "dake ni",
    meaning: "because of that, all the more",
    level: "N4",
    theme: "reason",
    lesson: 48,
    partOfSpeech: "expression",
    example: {
      jp: "努[ど]力[りょく]家[か]なだけに、結[けっ]果[か]もいいです。",
      en: "Because he is hardworking, the result is good."
    }
  },
  {
    id: "vmn4-L48-19",
    word: "それだけ",
    reading: "それだけ",
    romaji: "soredake",
    meaning: "only that, just that",
    level: "N4",
    theme: "degree",
    lesson: 48,
    partOfSpeech: "adverb",
    example: {
      jp: "それだけの理[り]由[ゆう]です。",
      en: "That is the only reason."
    }
  },
  {
    id: "vmn4-L48-20",
    word: "これだけ",
    reading: "これだけ",
    romaji: "koredake",
    meaning: "this much",
    level: "N4",
    theme: "degree",
    lesson: 48,
    partOfSpeech: "adverb",
    example: {
      jp: "これだけの量[りょう]は多[おお]すぎます。",
      en: "This amount is too much."
    }
  },
  {
    id: "vmn4-L48-21",
    word: "あれだけ",
    reading: "あれだけ",
    romaji: "aredake",
    meaning: "that much",
    level: "N4",
    theme: "degree",
    lesson: 48,
    partOfSpeech: "adverb",
    example: {
      jp: "あれだけ練[れん]習[しゅう]したのに。",
      en: "Despite that much practice."
    }
  },
  {
    id: "vmn4-L48-22",
    word: "なんて",
    reading: "なんて",
    romaji: "nante",
    meaning: "such as, things like",
    level: "N4",
    theme: "example",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "彼[かれ]なんて信[しん]じられません。",
      en: "I cannot believe someone like him."
    }
  },
  {
    id: "vmn4-L48-23",
    word: "なんか",
    reading: "なんか",
    romaji: "nanka",
    meaning: "such as, things like",
    level: "N4",
    theme: "example",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "私[わたし]なんかできません。",
      en: "Someone like me cannot do it."
    }
  },
  {
    id: "vmn4-L48-24",
    word: "など",
    reading: "など",
    romaji: "nado",
    meaning: "and so on, etc.",
    level: "N4",
    theme: "example",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "リンゴなどが好[す]きです。",
      en: "I like things like apples."
    }
  },
  {
    id: "vmn4-L48-25",
    word: "やら",
    reading: "やら",
    romaji: "yara",
    meaning: "and so on; I wonder",
    level: "N4",
    theme: "example",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "何[なに]やら原[げん]因[いん]があるようです。",
      en: "There seems to be some reason."
    }
  },
  {
    id: "vmn4-L48-26",
    word: "だの",
    reading: "だの",
    romaji: "dano",
    meaning: "and so on (listing)",
    level: "N4",
    theme: "example",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "好[す]きだの嫌[きら]いだの言[い]わないで。",
      en: "Do not say you like or dislike it."
    }
  },
  {
    id: "vmn4-L48-27",
    word: "とか",
    reading: "とか",
    romaji: "toka",
    meaning: "or, such as",
    level: "N4",
    theme: "example",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "赤[あか]とか青[あお]とかがいいです。",
      en: "Red or blue would be good."
    }
  },
  {
    id: "vmn4-L48-28",
    word: "なり",
    reading: "なり",
    romaji: "nari",
    meaning: "or, for example",
    level: "N4",
    theme: "example",
    lesson: 48,
    partOfSpeech: "particle",
    example: {
      jp: "飲[の]むなり食[た]べるなり自[じ]由[ゆう]にしてください。",
      en: "Drink or eat, do as you like."
    }
  },
  {
    id: "vmn4-L48-29",
    word: "しかない",
    reading: "しかない",
    romaji: "shika nai",
    meaning: "have no choice but to",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "expression",
    example: {
      jp: "やるしかありません。",
      en: "I have no choice but to do it."
    }
  },
  {
    id: "vmn4-L48-30",
    word: "ばかりいる",
    reading: "ばかりいる",
    romaji: "bakari iru",
    meaning: "to be always doing",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]は寝[ね]てばかりいます。",
      en: "He is always sleeping."
    }
  },
  {
    id: "vmn4-L48-31",
    word: "だけで",
    reading: "だけで",
    romaji: "dake de",
    meaning: "just by",
    level: "N4",
    theme: "degree",
    lesson: 48,
    partOfSpeech: "expression",
    example: {
      jp: "見[み]ただけで分[わ]かります。",
      en: "I can tell just by looking."
    }
  },
  {
    id: "vmn4-L48-32",
    word: "限られる",
    reading: "かぎられる",
    romaji: "kagirareru",
    meaning: "to be limited, restricted",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "verb",
    example: {
      jp: "選[せん]択[たく]は限[かぎ]られています。",
      en: "Choices are limited."
    }
  },
  {
    id: "vmn4-L48-33",
    word: "専用",
    reading: "せんよう",
    romaji: "sen'you",
    meaning: "exclusive use",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "noun",
    example: {
      jp: "女[じょ]性[せい]専[せん]用[よう]の車[しゃ]両[りょう]です。",
      en: "It is a women-only car."
    }
  },
  {
    id: "vmn4-L48-34",
    word: "専門",
    reading: "せんもん",
    romaji: "senmon",
    meaning: "specialty, speciality",
    level: "N4",
    theme: "limitation",
    lesson: 48,
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]は法[ほう]律[りつ]が専[せん]門[もん]です。",
      en: "His specialty is law."
    }
  },

  // =========================================================
  // Lesson 49 — Change / Completion (ようになる, てある, という, etc.)
  // =========================================================
  {
    id: "vmn4-L49-01",
    word: "ようになる",
    reading: "ようになる",
    romaji: "you ni naru",
    meaning: "to come to be, to become able to",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "expression",
    example: {
      jp: "日[に]本[ほん]語[ご]が話[はな]せるようになりました。",
      en: "I have come to be able to speak Japanese."
    }
  },
  {
    id: "vmn4-L49-02",
    word: "てある",
    reading: "てある",
    romaji: "te aru",
    meaning: "has been done (resultant state)",
    level: "N4",
    theme: "state",
    lesson: 49,
    partOfSpeech: "auxiliary verb",
    example: {
      jp: "窓[まど]が開[あ]けてあります。",
      en: "The window has been opened."
    }
  },
  {
    id: "vmn4-L49-03",
    word: "という",
    reading: "という",
    romaji: "to iu",
    meaning: "called, named",
    level: "N4",
    theme: "naming",
    lesson: 49,
    partOfSpeech: "expression",
    example: {
      jp: "山[やま]田[だ]という人[ひと]が来[き]ました。",
      en: "A person called Yamada came."
    }
  },
  {
    id: "vmn4-L49-04",
    word: "ということ",
    reading: "ということ",
    romaji: "to iu koto",
    meaning: "the fact that, that means",
    level: "N4",
    theme: "naming",
    lesson: 49,
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]が来[く]るということです。",
      en: "It means that he is coming."
    }
  },
  {
    id: "vmn4-L49-05",
    word: "というもの",
    reading: "というもの",
    romaji: "to iu mono",
    meaning: "the thing called",
    level: "N4",
    theme: "naming",
    lesson: 49,
    partOfSpeech: "expression",
    example: {
      jp: "信[しん]頼[らい]というものは大[たい]切[せつ]です。",
      en: "The thing called trust is important."
    }
  },
  {
    id: "vmn4-L49-06",
    word: "変化",
    reading: "へんか",
    romaji: "henka",
    meaning: "change, variation",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "天[てん]気[き]の変[へん]化[か]が激[はげ]しいです。",
      en: "The weather changes are intense."
    }
  },
  {
    id: "vmn4-L49-07",
    word: "変わる",
    reading: "かわる",
    romaji: "kawaru",
    meaning: "to change",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "verb",
    example: {
      jp: "時[じ]代[だい]が変[か]わりました。",
      en: "The times have changed."
    }
  },
  {
    id: "vmn4-L49-08",
    word: "なる",
    reading: "なる",
    romaji: "naru",
    meaning: "to become",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "verb",
    example: {
      jp: "大[おとな]人[おとな]になりました。",
      en: "I have become an adult."
    }
  },
  {
    id: "vmn4-L49-09",
    word: "増える",
    reading: "ふえる",
    romaji: "fueru",
    meaning: "to increase",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "verb",
    example: {
      jp: "人[じん]口[こう]が増[ふ]えました。",
      en: "The population increased."
    }
  },
  {
    id: "vmn4-L49-10",
    word: "減る",
    reading: "へる",
    romaji: "heru",
    meaning: "to decrease",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "verb",
    example: {
      jp: "お[かね]金[かね]が減[へ]りました。",
      en: "My money decreased."
    }
  },
  {
    id: "vmn4-L49-11",
    word: "上がる",
    reading: "あがる",
    romaji: "agaru",
    meaning: "to rise, to go up",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "verb",
    example: {
      jp: "物[ぶっ]価[か]が上[あ]がりました。",
      en: "Prices rose."
    }
  },
  {
    id: "vmn4-L49-12",
    word: "下がる",
    reading: "さがる",
    romaji: "sagaru",
    meaning: "to fall, to go down",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "verb",
    example: {
      jp: "温[おん]度[ど]が下[さ]がりました。",
      en: "The temperature fell."
    }
  },
  {
    id: "vmn4-L49-13",
    word: "改まる",
    reading: "あらたまる",
    romaji: "aratamaru",
    meaning: "to be revised, to be corrected",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "verb",
    example: {
      jp: "法[ほう]律[りつ]が改[あらた]まりました。",
      en: "The law was revised."
    }
  },
  {
    id: "vmn4-L49-14",
    word: "改善",
    reading: "かいぜん",
    romaji: "kaizen",
    meaning: "improvement",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "生[せい]活[かつ]を改[かい]善[ぜん]しました。",
      en: "I improved my lifestyle."
    }
  },
  {
    id: "vmn4-L49-15",
    word: "進歩",
    reading: "しんぽ",
    romaji: "shinpo",
    meaning: "progress, advance",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "技[ぎ]術[じゅつ]が進[しん]歩[ぽ]しました。",
      en: "Technology has progressed."
    }
  },
  {
    id: "vmn4-L49-16",
    word: "発展",
    reading: "はってん",
    romaji: "hatten",
    meaning: "development, growth",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "都[と]市[し]が発[はっ]展[てん]しました。",
      en: "The city developed."
    }
  },
  {
    id: "vmn4-L49-17",
    word: "発明",
    reading: "はつめい",
    romaji: "hatsumei",
    meaning: "invention",
    level: "N4",
    theme: "creation",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "新[あたら]しい機[き]械[かい]を発[はつ]明[めい]しました。",
      en: "I invented a new machine."
    }
  },
  {
    id: "vmn4-L49-18",
    word: "発見",
    reading: "はっけん",
    romaji: "hakken",
    meaning: "discovery",
    level: "N4",
    theme: "creation",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "新[あたら]しい星[ほし]を発[はっ]見[けん]しました。",
      en: "I discovered a new star."
    }
  },
  {
    id: "vmn4-L49-19",
    word: "研究",
    reading: "けんきゅう",
    romaji: "kenkyuu",
    meaning: "research, study",
    level: "N4",
    theme: "creation",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "歴[れき]史[し]を研[けん]究[きゅう]しています。",
      en: "I am researching history."
    }
  },
  {
    id: "vmn4-L49-20",
    word: "実験",
    reading: "じっけん",
    romaji: "jikken",
    meaning: "experiment",
    level: "N4",
    theme: "creation",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "化[か]学[がく]実[じっ]験[けん]をしました。",
      en: "I did a chemistry experiment."
    }
  },
  {
    id: "vmn4-L49-21",
    word: "発表",
    reading: "はっぴょう",
    romaji: "happyou",
    meaning: "presentation, announcement",
    level: "N4",
    theme: "creation",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "研[けん]究[きゅう]結[けっ]果[か]を発[はっ]表[ぴょう]します。",
      en: "I will present the research results."
    }
  },
  {
    id: "vmn4-L49-22",
    word: "説明",
    reading: "せつめい",
    romaji: "setsumei",
    meaning: "explanation",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "理[り]由[ゆう]を説[せつ]明[めい]してください。",
      en: "Please explain the reason."
    }
  },
  {
    id: "vmn4-L49-23",
    word: "理解",
    reading: "りかい",
    romaji: "rikai",
    meaning: "understanding",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "私[わたし]の気[き]持[も]ちを理[り]解[かい]してください。",
      en: "Please understand my feelings."
    }
  },
  {
    id: "vmn4-L49-24",
    word: "納得",
    reading: "なっとく",
    romaji: "nattoku",
    meaning: "understanding, consent",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "説[せつ]明[めい]を聞[き]いて納[なっ]得[とく]しました。",
      en: "I understood after hearing the explanation."
    }
  },
  {
    id: "vmn4-L49-25",
    word: "同意",
    reading: "どうい",
    romaji: "doui",
    meaning: "agreement, consent",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "あなたの意[い]見[けん]に同[どう]意[い]します。",
      en: "I agree with your opinion."
    }
  },
  {
    id: "vmn4-L49-26",
    word: "賛成",
    reading: "さんせい",
    romaji: "sansei",
    meaning: "agreement, approval",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "その案[あん]に賛[さん]成[せい]です。",
      en: "I agree with that idea."
    }
  },
  {
    id: "vmn4-L49-27",
    word: "承認",
    reading: "しょうにん",
    romaji: "shounin",
    meaning: "approval, recognition",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "企[き]画[かく]が承[しょう]認[にん]されました。",
      en: "The plan was approved."
    }
  },
  {
    id: "vmn4-L49-28",
    word: "支援",
    reading: "しえん",
    romaji: "shien",
    meaning: "support, assistance",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "被[ひ]災[さい]地[ち]を支[し]援[えん]しています。",
      en: "I am supporting the disaster area."
    }
  },
  {
    id: "vmn4-L49-29",
    word: "応援",
    reading: "おうえん",
    romaji: "ouen",
    meaning: "cheering, support",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "チームを応[おう]援[えん]しています。",
      en: "I am cheering for the team."
    }
  },
  {
    id: "vmn4-L49-30",
    word: "協力",
    reading: "きょうりょく",
    romaji: "kyouryoku",
    meaning: "cooperation",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "noun",
    example: {
      jp: "皆[みな]さんの協[きょう]力[りょく]が必[ひつ]要[よう]です。",
      en: "Everyone's cooperation is needed."
    }
  },
  {
    id: "vmn4-L49-31",
    word: "協力する",
    reading: "きょうりょくする",
    romaji: "kyouryoku suru",
    meaning: "to cooperate",
    level: "N4",
    theme: "communication",
    lesson: 49,
    partOfSpeech: "verb",
    example: {
      jp: "互[たが]いに協[きょう]力[りょく]して進[すす]めます。",
      en: "We will cooperate with each other to proceed."
    }
  },
  {
    id: "vmn4-L49-32",
    word: "できるようになる",
    reading: "できるようになる",
    romaji: "dekiru you ni naru",
    meaning: "to come to be able to do",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "expression",
    example: {
      jp: "自[じ]転[てん]車[しゃ]に乗[の]れるようになりました。",
      en: "I have come to be able to ride a bicycle."
    }
  },
  {
    id: "vmn4-L49-33",
    word: "見えるようになる",
    reading: "みえるようになる",
    romaji: "mieru you ni naru",
    meaning: "to come to be visible",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "expression",
    example: {
      jp: "星[ほし]が見[み]えるようになりました。",
      en: "The stars have become visible."
    }
  },
  {
    id: "vmn4-L49-34",
    word: "わかるようになる",
    reading: "わかるようになる",
    romaji: "wakaru you ni naru",
    meaning: "to come to understand",
    level: "N4",
    theme: "change",
    lesson: 49,
    partOfSpeech: "expression",
    example: {
      jp: "少[すこ]しずつ分[わ]かるようになりました。",
      en: "I have come to understand little by little."
    }
  },

  // =========================================================
  // Lesson 50 — Review mixed (comprehensive N4 vocabulary review)
  // =========================================================
  {
    id: "vmn4-L50-01",
    word: "漢字",
    reading: "かんじ",
    romaji: "kanji",
    meaning: "kanji, Chinese characters",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "漢[かん]字[じ]を覚[おぼ]えるのが難[むずか]しいです。",
      en: "Memorizing kanji is difficult."
    }
  },
  {
    id: "vmn4-L50-02",
    word: "単語",
    reading: "たんご",
    romaji: "tango",
    meaning: "vocabulary, word",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "新[あたら]しい単[たん]語[ご]を学[まな]びました。",
      en: "I learned new vocabulary."
    }
  },
  {
    id: "vmn4-L50-03",
    word: "文法",
    reading: "ぶんぽう",
    romaji: "bunpou",
    meaning: "grammar",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "文[ぶん]法[ぽう]の規[き]則[そく]を勉[べん]強[きょう]します。",
      en: "I study grammar rules."
    }
  },
  {
    id: "vmn4-L50-04",
    word: "文型",
    reading: "ぶんけい",
    romaji: "bunkei",
    meaning: "sentence pattern",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "この文[ぶん]型[けい]を練[れん]習[しゅう]してください。",
      en: "Please practice this sentence pattern."
    }
  },
  {
    id: "vmn4-L50-05",
    word: "会話",
    reading: "かいわ",
    romaji: "kaiwa",
    meaning: "conversation",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "会[かい]話[わ]の練[れん]習[しゅう]をしました。",
      en: "I practiced conversation."
    }
  },
  {
    id: "vmn4-L50-06",
    word: "読解",
    reading: "どっかい",
    romaji: "dokkai",
    meaning: "reading comprehension",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "読[どっ]解[かい]のテストがあります。",
      en: "There is a reading test."
    }
  },
  {
    id: "vmn4-L50-07",
    word: "聴解",
    reading: "ちょうかい",
    romaji: "choukai",
    meaning: "listening comprehension",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "聴[ちょう]解[かい]の授[じゅ]業[ぎょう]は難[むずか]しいです。",
      en: "The listening class is difficult."
    }
  },
  {
    id: "vmn4-L50-08",
    word: "作文",
    reading: "さくぶん",
    romaji: "sakubun",
    meaning: "composition, essay",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "作[さく]文[ぶん]を書[か]きました。",
      en: "I wrote a composition."
    }
  },
  {
    id: "vmn4-L50-09",
    word: "練習",
    reading: "れんしゅう",
    romaji: "renshuu",
    meaning: "practice",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "毎[まい]日[にち]練[れん]習[しゅう]しています。",
      en: "I practice every day."
    }
  },
  {
    id: "vmn4-L50-10",
    word: "復習",
    reading: "ふくしゅう",
    romaji: "fukushuu",
    meaning: "review",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "復[ふく]習[しゅう]を忘[わす]れないでください。",
      en: "Do not forget to review."
    }
  },
  {
    id: "vmn4-L50-11",
    word: "予習",
    reading: "よしゅう",
    romaji: "yoshuu",
    meaning: "preparation, study in advance",
    level: "N4",
    theme: "study",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "授[じゅ]業[ぎょう]の予[よ]習[しゅう]をしました。",
      en: "I prepared for the class."
    }
  },
  {
    id: "vmn4-L50-12",
    word: "試験",
    reading: "しけん",
    romaji: "shiken",
    meaning: "examination",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "試[けん]の結[けっ]果[か]が出[で]ました。",
      en: "The exam results came out."
    }
  },
  {
    id: "vmn4-L50-13",
    word: "テスト",
    reading: "テスト",
    romaji: "tesuto",
    meaning: "test",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "テストの勉[べん]強[きょう]をしています。",
      en: "I am studying for the test."
    }
  },
  {
    id: "vmn4-L50-14",
    word: "合格",
    reading: "ごうかく",
    romaji: "goukaku",
    meaning: "passing (an exam)",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "合[ごう]格[かく]おめでとう。",
      en: "Congratulations on passing."
    }
  },
  {
    id: "vmn4-L50-15",
    word: "不合格",
    reading: "ふごうかく",
    romaji: "fugoukaku",
    meaning: "failing (an exam)",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "不[ふ]合[ごう]格[かく]になりました。",
      en: "I failed."
    }
  },
  {
    id: "vmn4-L50-16",
    word: "成績",
    reading: "せいせき",
    romaji: "seiseki",
    meaning: "grade, academic record",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "成[せい]績[せき]が良[よ]かったです。",
      en: "My grades were good."
    }
  },
  {
    id: "vmn4-L50-17",
    word: "成績表",
    reading: "せいせきひょう",
    romaji: "seisekihyou",
    meaning: "report card",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "成[せい]績[せき]表[ひょう]をもらいました。",
      en: "I received my report card."
    }
  },
  {
    id: "vmn4-L50-18",
    word: "評価",
    reading: "ひょうか",
    romaji: "hyouka",
    meaning: "evaluation, assessment",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "先[せん]生[せい]の評[ひょう]価[か]が高[たか]いです。",
      en: "The teacher's evaluation is high."
    }
  },
  {
    id: "vmn4-L50-19",
    word: "点数",
    reading: "てんすう",
    romaji: "tensuu",
    meaning: "score, points",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "満[まん]点[てん]に近[ちか]い点[てん]数[すう]でした。",
      en: "The score was close to full marks."
    }
  },
  {
    id: "vmn4-L50-20",
    word: "満点",
    reading: "まんてん",
    romaji: "manten",
    meaning: "full marks, perfect score",
    level: "N4",
    theme: "exam",
    lesson: 50,
    partOfSpeech: "noun",
    example: {
      jp: "数[すう]学[がく]で満[まん]点[てん]を取[と]りました。",
      en: "I got full marks in math."
    }
  },
  {
    id: "vmn4-L50-21",
    word: "難しい",
    reading: "むずかしい",
    romaji: "muzukashii",
    meaning: "difficult",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "i-adjective",
    example: {
      jp: "この問[もん]題[だい]は難[むずか]しいです。",
      en: "This problem is difficult."
    }
  },
  {
    id: "vmn4-L50-22",
    word: "易しい",
    reading: "やさしい",
    romaji: "yasashii",
    meaning: "easy, simple",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "i-adjective",
    example: {
      jp: "易[やさ]しい問[もん]題[だい]から始[はじ]めましょう。",
      en: "Let us start with easy problems."
    }
  },
  {
    id: "vmn4-L50-23",
    word: "簡単",
    reading: "かんたん",
    romaji: "kantan",
    meaning: "simple, easy",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "na-adjective",
    example: {
      jp: "簡[かん]単[たん]な料[りょう]理[り]を作[つく]りました。",
      en: "I made a simple dish."
    }
  },
  {
    id: "vmn4-L50-24",
    word: "複雑",
    reading: "ふくざつ",
    romaji: "fukuzatsu",
    meaning: "complex, complicated",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "na-adjective",
    example: {
      jp: "複[ふく]雑[ざつ]な事[じ]情[じょう]があります。",
      en: "There are complex circumstances."
    }
  },
  {
    id: "vmn4-L50-25",
    word: "重要",
    reading: "じゅうよう",
    romaji: "juuyou",
    meaning: "important",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "na-adjective",
    example: {
      jp: "重[じゅう]要[よう]な書[しょ]類[るい]です。",
      en: "It is an important document."
    }
  },
  {
    id: "vmn4-L50-26",
    word: "必要",
    reading: "ひつよう",
    romaji: "hitsuyou",
    meaning: "necessary",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "na-adjective",
    example: {
      jp: "必[ひつ]要[よう]な物[もの]を買[か]います。",
      en: "I will buy necessary things."
    }
  },
  {
    id: "vmn4-L50-27",
    word: "不必要",
    reading: "ふひつよう",
    romaji: "fuhitsuyou",
    meaning: "unnecessary",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "na-adjective",
    example: {
      jp: "不[ふ]必[ひつ]要[よう]な物[もの]は捨[す]ててください。",
      en: "Please throw away unnecessary things."
    }
  },
  {
    id: "vmn4-L50-28",
    word: "大切",
    reading: "たいせつ",
    romaji: "taisetsu",
    meaning: "important, precious",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "na-adjective",
    example: {
      jp: "時[じ]間[かん]は大[たい]切[せつ]です。",
      en: "Time is important."
    }
  },
  {
    id: "vmn4-L50-29",
    word: "大事",
    reading: "だいじ",
    romaji: "daiji",
    meaning: "important, valuable",
    level: "N4",
    theme: "description",
    lesson: 50,
    partOfSpeech: "na-adjective",
    example: {
      jp: "健[けん]康[こう]は大[だい]事[じ]です。",
      en: "Health is important."
    }
  },
  {
    id: "vmn4-L50-30",
    word: "確かめる",
    reading: "たしかめる",
    romaji: "tashikameru",
    meaning: "to confirm, to make sure",
    level: "N4",
    theme: "action",
    lesson: 50,
    partOfSpeech: "verb",
    example: {
      jp: "予[よ]定[てい]を確[たし]かめました。",
      en: "I confirmed the schedule."
    }
  },
  {
    id: "vmn4-L50-31",
    word: "確認する",
    reading: "かくにんする",
    romaji: "kakunin suru",
    meaning: "to confirm, to check",
    level: "N4",
    theme: "action",
    lesson: 50,
    partOfSpeech: "verb",
    example: {
      jp: "事[じ]実[じつ]を確[かく]認[にん]しました。",
      en: "I confirmed the facts."
    }
  },
  {
    id: "vmn4-L50-32",
    word: "復習する",
    reading: "ふくしゅうする",
    romaji: "fukushuu suru",
    meaning: "to review",
    level: "N4",
    theme: "action",
    lesson: 50,
    partOfSpeech: "verb",
    example: {
      jp: "昨[きのう]日[きのう]の内[ない]容[よう]を復[ふく]習[しゅう]しました。",
      en: "I reviewed yesterday's content."
    }
  },
  {
    id: "vmn4-L50-33",
    word: "練習する",
    reading: "れんしゅうする",
    romaji: "renshuu suru",
    meaning: "to practice",
    level: "N4",
    theme: "action",
    lesson: 50,
    partOfSpeech: "verb",
    example: {
      jp: "発[はつ]音[おん]を練[れん]習[しゅう]しました。",
      en: "I practiced pronunciation."
    }
  },
  {
    id: "vmn4-L50-34",
    word: "勉強する",
    reading: "べんきょうする",
    romaji: "benkyou suru",
    meaning: "to study",
    level: "N4",
    theme: "action",
    lesson: 50,
    partOfSpeech: "verb",
    example: {
      jp: "毎[まい]晩[ばん]勉[べん]強[きょう]しています。",
      en: "I study every night."
    }
  }
];
