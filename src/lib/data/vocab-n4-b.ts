import type { VocabData } from "@/lib/types";

// JLPT N4 vocabulary — Minna no Nihongo Shokyuu 2, Lessons 35-42
// 270 words total (33 + 33 + 34 + 34 + 34 + 34 + 34 + 34)
// Furigana notation: 漢字[かんじ] — every kanji carries its reading inline.

export const vocabN4B: VocabData[] = [
  // =========================================================
  // Lesson 35 — Respectful speech (sonkeigo verbs & honorific nouns)
  // =========================================================
  {
    id: "vmn4-L35-01",
    word: "いらっしゃる",
    reading: "いらっしゃる",
    romaji: "irassharu",
    meaning: "to go / come / be (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]は明日[あした]学校[がっこう]にいらっしゃいます。",
      en: "The teacher will come to school tomorrow."
    }
  },
  {
    id: "vmn4-L35-02",
    word: "おっしゃる",
    reading: "おっしゃる",
    romaji: "ossharu",
    meaning: "to say (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]は何[なに]をおっしゃいましたか。",
      en: "What did the teacher say?"
    }
  },
  {
    id: "vmn4-L35-03",
    word: "ごらんになる",
    reading: "ごらんになる",
    romaji: "goran ni naru",
    meaning: "to look / see (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "この写[しゃ]真[しん]をごらんになりますか。",
      en: "Will you look at this photo?"
    }
  },
  {
    id: "vmn4-L35-04",
    word: "召し上がる",
    reading: "めしあがる",
    romaji: "meshiagaru",
    meaning: "to eat / drink (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "お客[きゃく]様[さま]、何[なに]を召[め]し上がりますか。",
      en: "What would you like to eat, dear guest?"
    }
  },
  {
    id: "vmn4-L35-05",
    word: "ご存知",
    reading: "ごぞんじ",
    romaji: "gozonji",
    meaning: "to know (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "このニュースをご存知[ぞんじ]ですか。",
      en: "Do you know this news?"
    }
  },
  {
    id: "vmn4-L35-06",
    word: "お帰りになる",
    reading: "おかえりになる",
    romaji: "okaeri ni naru",
    meaning: "to return home (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "部[ぶ]長[ちょう]はもうお帰[かえ]りになりました。",
      en: "The department head has already gone home."
    }
  },
  {
    id: "vmn4-L35-07",
    word: "お休みになる",
    reading: "おやすみになる",
    romaji: "oyasumi ni naru",
    meaning: "to rest / sleep (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]はもうお休[やす]みになりましたか。",
      en: "Has the teacher already retired for the night?"
    }
  },
  {
    id: "vmn4-L35-08",
    word: "お待ちになる",
    reading: "おまちになる",
    romaji: "omachi ni naru",
    meaning: "to wait (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "お客[きゃく]様[さま]を長[なが]くお待[ま]ちになるそうです。",
      en: "I hear the customer will be waiting a long time."
    }
  },
  {
    id: "vmn4-L35-09",
    word: "お使いになる",
    reading: "おつかいになる",
    romaji: "otsukai ni naru",
    meaning: "to use (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "社[しゃ]長[ちょう]はこの車[くるま]をお使[つか]いになります。",
      en: "The president uses this car."
    }
  },
  {
    id: "vmn4-L35-10",
    word: "お買いになる",
    reading: "おかいになる",
    romaji: "okai ni naru",
    meaning: "to buy (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "何[なに]をお買[か]いになりますか。",
      en: "What will you buy?"
    }
  },
  {
    id: "vmn4-L35-11",
    word: "お考えになる",
    reading: "おかんがえになる",
    romaji: "okangae ni naru",
    meaning: "to think (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "verb",
    example: {
      jp: "先生[せんせい]はどうお考[かんが]えになりますか。",
      en: "What do you think, sensei?"
    }
  },
  {
    id: "vmn4-L35-12",
    word: "お客様",
    reading: "おきゃくさま",
    romaji: "okyakusama",
    meaning: "guest, customer (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お客[きゃく]様[さま]がもうお着[つ]きになりました。",
      en: "The guest has already arrived."
    }
  },
  {
    id: "vmn4-L35-13",
    word: "皆様",
    reading: "みなさま",
    romaji: "minnasama",
    meaning: "everyone (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "皆[みな]様[さま]、お待[ま]たせしました。",
      en: "Everyone, sorry to keep you waiting."
    }
  },
  {
    id: "vmn4-L35-14",
    word: "様",
    reading: "さま",
    romaji: "sama",
    meaning: "honorific title suffix",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "suffix",
    example: {
      jp: "田[た]中[なか]様[さま]がお待[ま]ちです。",
      en: "Mr. Tanaka is waiting."
    }
  },
  {
    id: "vmn4-L35-15",
    word: "ご主人",
    reading: "ごしゅじん",
    romaji: "goshujin",
    meaning: "husband (someone else's, honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "ご主[しゅ]人[じん]はお帰[かえ]りになりましたか。",
      en: "Has your husband returned home?"
    }
  },
  {
    id: "vmn4-L35-16",
    word: "奥様",
    reading: "おくさま",
    romaji: "okusama",
    meaning: "wife (someone else's, honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "奥[おく]様[さま]もいらっしゃいますか。",
      en: "Will your wife also come?"
    }
  },
  {
    id: "vmn4-L35-17",
    word: "お父様",
    reading: "おとうさま",
    romaji: "otousama",
    meaning: "father (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お父[とう]様[さま]はお元[げん]気[き]ですか。",
      en: "Is your father well?"
    }
  },
  {
    id: "vmn4-L35-18",
    word: "お母様",
    reading: "おかあさま",
    romaji: "okaasama",
    meaning: "mother (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お母[かあ]様[さま]からお電[でん]話[わ]がありました。",
      en: "There was a phone call from your mother."
    }
  },
  {
    id: "vmn4-L35-19",
    word: "お兄様",
    reading: "おにいさま",
    romaji: "oniisama",
    meaning: "older brother (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お兄[にい]様[さま]もご一[いっ]緒[しょ]ですか。",
      en: "Is your older brother also with you?"
    }
  },
  {
    id: "vmn4-L35-20",
    word: "お姉様",
    reading: "おねえさま",
    romaji: "oneesama",
    meaning: "older sister (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お姉[ねえ]様[さま]はもうご卒[そつ]業[ぎょう]しましたか。",
      en: "Has your older sister already graduated?"
    }
  },
  {
    id: "vmn4-L35-21",
    word: "ご家族",
    reading: "ごかぞく",
    romaji: "gokazoku",
    meaning: "family (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "ご家[か]族[ぞく]の皆[みな]様[さま]はお元[げん]気[き]ですか。",
      en: "Is your family well?"
    }
  },
  {
    id: "vmn4-L35-22",
    word: "お子様",
    reading: "おこさま",
    romaji: "okosama",
    meaning: "child (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お子[こ]様[さま]は何[なん]人[にん]いらっしゃいますか。",
      en: "How many children do you have?"
    }
  },
  {
    id: "vmn4-L35-23",
    word: "お仕事",
    reading: "おしごと",
    romaji: "oshigoto",
    meaning: "work, job (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お仕[し]事[ごと]は忙[いそが]しいですか。",
      en: "Is your work busy?"
    }
  },
  {
    id: "vmn4-L35-24",
    word: "お名前",
    reading: "おなまえ",
    romaji: "onamae",
    meaning: "name (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お名[な]前[まえ]を伺[うかが]ってもよろしいですか。",
      en: "May I ask your name?"
    }
  },
  {
    id: "vmn4-L35-25",
    word: "ご連絡",
    reading: "ごれんらく",
    romaji: "gorenraku",
    meaning: "contact (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "ご連[れん]絡[らく]をお待[ま]ちしております。",
      en: "I am waiting for your contact."
    }
  },
  {
    id: "vmn4-L35-26",
    word: "お電話",
    reading: "おでんわ",
    romaji: "odenwa",
    meaning: "phone call (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お電[でん]話[わ]を差[さ]し上[あ]げました。",
      en: "I gave you a phone call."
    }
  },
  {
    id: "vmn4-L35-27",
    word: "お手紙",
    reading: "おてがみ",
    romaji: "otegami",
    meaning: "letter (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お手[て]紙[がみ]を拝[はい]見[けん]しました。",
      en: "I have read your letter."
    }
  },
  {
    id: "vmn4-L35-28",
    word: "お時間",
    reading: "おじかん",
    romaji: "ojikan",
    meaning: "time (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お時[じ]間[かん]をいただきありがとうございます。",
      en: "Thank you for giving me your time."
    }
  },
  {
    id: "vmn4-L35-29",
    word: "ご説明",
    reading: "ごせつめい",
    romaji: "gosetsumei",
    meaning: "explanation (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "ご説[せつ]明[めい]をしていただけますか。",
      en: "Could you give an explanation?"
    }
  },
  {
    id: "vmn4-L35-30",
    word: "お忙しい",
    reading: "おいそがしい",
    romaji: "oisogashii",
    meaning: "busy (honorific adjective)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "i-adjective",
    example: {
      jp: "お忙[いそが]しいところすみません。",
      en: "Sorry to interrupt when you are busy."
    }
  },
  {
    id: "vmn4-L35-31",
    word: "ご健康",
    reading: "ごけんこう",
    romaji: "gokenkou",
    meaning: "health (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "ご健[けん]康[こう]を心[こころ]からお祈[いの]りします。",
      en: "I sincerely pray for your health."
    }
  },
  {
    id: "vmn4-L35-32",
    word: "お嬢様",
    reading: "おじょうさま",
    romaji: "ojousama",
    meaning: "daughter (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お嬢[じょう]様[さま]はおいくつですか。",
      en: "How old is your daughter?"
    }
  },
  {
    id: "vmn4-L35-33",
    word: "お力",
    reading: "おちから",
    romaji: "ochikara",
    meaning: "support, assistance (honorific)",
    level: "N4",
    theme: "sonkeigo",
    lesson: 35,
    partOfSpeech: "noun",
    example: {
      jp: "お力[ちから]をいただきありがとうございます。",
      en: "Thank you for your assistance."
    }
  },

  // =========================================================
  // Lesson 36 — Humble speech (kenjougo verbs & humble nouns)
  // =========================================================
  {
    id: "vmn4-L36-01",
    word: "まいる",
    reading: "まいる",
    romaji: "mairu",
    meaning: "to go / come (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "私[わたし]はすぐに参[まい]ります。",
      en: "I will come immediately."
    }
  },
  {
    id: "vmn4-L36-02",
    word: "申す",
    reading: "もうす",
    romaji: "mousu",
    meaning: "to say (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "私[わたし]は田[た]中[なか]と申[もう]します。",
      en: "I am called Tanaka."
    }
  },
  {
    id: "vmn4-L36-03",
    word: "拝見する",
    reading: "はいけんする",
    romaji: "haikensuru",
    meaning: "to look / see (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お手[て]紙[がみ]を拝[はい]見[けん]しました。",
      en: "I have looked at your letter."
    }
  },
  {
    id: "vmn4-L36-04",
    word: "いただく",
    reading: "いただく",
    romaji: "itadaku",
    meaning: "to receive / eat / drink (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お茶[ちゃ]をいただきます。",
      en: "I will have the tea."
    }
  },
  {
    id: "vmn4-L36-05",
    word: "伺う",
    reading: "うかがう",
    romaji: "ukagau",
    meaning: "to visit / ask (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "明日[あした]お伺[うかが]いしてもよろしいですか。",
      en: "May I visit you tomorrow?"
    }
  },
  {
    id: "vmn4-L36-06",
    word: "申し上げる",
    reading: "もうしあげる",
    romaji: "moushiageru",
    meaning: "to say (humble, very polite)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お礼[れい]を申[もう]し上[あ]げます。",
      en: "I express my gratitude."
    }
  },
  {
    id: "vmn4-L36-07",
    word: "お目にかかる",
    reading: "おめにかかる",
    romaji: "ome ni kakaru",
    meaning: "to meet (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "来[らい]週[しゅう]お目[め]にかかりたいです。",
      en: "I would like to meet you next week."
    }
  },
  {
    id: "vmn4-L36-08",
    word: "承る",
    reading: "うけたまわる",
    romaji: "uketamawaru",
    meaning: "to receive / hear (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "ご注[ちゅう]文[もん]を承[うけたまわ]ります。",
      en: "I will take your order."
    }
  },
  {
    id: "vmn4-L36-09",
    word: "拝借する",
    reading: "はいしゃくする",
    romaji: "haishakusuru",
    meaning: "to borrow (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お車[くるま]を拝[はい]借[しゃく]してもよろしいですか。",
      en: "May I borrow your car?"
    }
  },
  {
    id: "vmn4-L36-10",
    word: "ご案内する",
    reading: "ごあんないする",
    romaji: "goannaisuru",
    meaning: "to guide (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "駅[えき]までご案[あん]内[ない]します。",
      en: "I will guide you to the station."
    }
  },
  {
    id: "vmn4-L36-11",
    word: "お手伝いする",
    reading: "おてつだいする",
    romaji: "otetsudaisuru",
    meaning: "to help (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お手[て]伝[つだ]いしましょうか。",
      en: "Shall I help you?"
    }
  },
  {
    id: "vmn4-L36-12",
    word: "お送りする",
    reading: "おおくりする",
    romaji: "ookurisuru",
    meaning: "to send (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "荷[に]物[もつ]をお送[おく]りします。",
      en: "I will send the luggage."
    }
  },
  {
    id: "vmn4-L36-13",
    word: "お持ちする",
    reading: "おもちする",
    romaji: "omochisuru",
    meaning: "to bring / carry (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お荷[に]物[もつ]をお持[も]ちします。",
      en: "I will carry your luggage."
    }
  },
  {
    id: "vmn4-L36-14",
    word: "ご連絡する",
    reading: "ごれんらくする",
    romaji: "gorenrakusuru",
    meaning: "to contact (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "後[あと]でご連[れん]絡[らく]します。",
      en: "I will contact you later."
    }
  },
  {
    id: "vmn4-L36-15",
    word: "ご報告する",
    reading: "ごほうこくする",
    romaji: "gohoukokusuru",
    meaning: "to report (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "結[けっ]果[か]をご報[ほう]告[こく]します。",
      en: "I will report the results."
    }
  },
  {
    id: "vmn4-L36-16",
    word: "お知らせする",
    reading: "おしらせする",
    romaji: "oshirasesuru",
    meaning: "to inform (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "詳[しょう]細[さい]をお知[し]らせします。",
      en: "I will inform you of the details."
    }
  },
  {
    id: "vmn4-L36-17",
    word: "ご紹介する",
    reading: "ごしょうかいする",
    romaji: "goshoukaisuru",
    meaning: "to introduce (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "兄[あに]をご紹[しょう]介[かい]します。",
      en: "I will introduce my older brother."
    }
  },
  {
    id: "vmn4-L36-18",
    word: "お願いする",
    reading: "おねがいする",
    romaji: "onegaisuru",
    meaning: "to request (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お願[ねが]いしたいことがあります。",
      en: "I have something to ask of you."
    }
  },
  {
    id: "vmn4-L36-19",
    word: "お待ちする",
    reading: "おまちする",
    romaji: "omachisuru",
    meaning: "to wait (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お待[ま]ちしております。",
      en: "I am waiting for you."
    }
  },
  {
    id: "vmn4-L36-20",
    word: "お借りする",
    reading: "おかりする",
    romaji: "okarisuru",
    meaning: "to borrow (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "本[ほん]をお借[か]りします。",
      en: "I will borrow the book."
    }
  },
  {
    id: "vmn4-L36-21",
    word: "お返しする",
    reading: "おかえしする",
    romaji: "okaeshisuru",
    meaning: "to return (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "明日[あした]お返[かえ]しします。",
      en: "I will return it tomorrow."
    }
  },
  {
    id: "vmn4-L36-22",
    word: "ご相談する",
    reading: "ごそうだんする",
    romaji: "gosoudansuru",
    meaning: "to consult (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "ご相[そう]談[だん]したいことがあります。",
      en: "I have something to consult you about."
    }
  },
  {
    id: "vmn4-L36-23",
    word: "お教えする",
    reading: "おおしえする",
    romaji: "ooshiesuru",
    meaning: "to teach / tell (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "道[みち]をお教[おし]えしましょう。",
      en: "I will tell you the way."
    }
  },
  {
    id: "vmn4-L36-24",
    word: "拝聴する",
    reading: "はいちょうする",
    romaji: "haichousuru",
    meaning: "to listen (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "ご意[い]見[けん]を拝[はい]聴[ちょう]します。",
      en: "I will humbly listen to your opinion."
    }
  },
  {
    id: "vmn4-L36-25",
    word: "存じる",
    reading: "ぞんじる",
    romaji: "zonjiru",
    meaning: "to know (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "よく存[ぞん]じております。",
      en: "I know well."
    }
  },
  {
    id: "vmn4-L36-26",
    word: "存じ上げる",
    reading: "ぞんじあげる",
    romaji: "zonjiageru",
    meaning: "to know (humble, very polite)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お名[な]前[まえ]は存[ぞん]じ上[あ]げております。",
      en: "I know your name."
    }
  },
  {
    id: "vmn4-L36-27",
    word: "弊社",
    reading: "へいしゃ",
    romaji: "heisha",
    meaning: "our company (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "noun",
    example: {
      jp: "弊[へい]社[しゃ]の製[せい]品[ひん]をご紹[しょう]介[かい]します。",
      en: "I will introduce our company's products."
    }
  },
  {
    id: "vmn4-L36-28",
    word: "小社",
    reading: "しょうしゃ",
    romaji: "shousha",
    meaning: "our company (very humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "noun",
    example: {
      jp: "小[しょう]社[しゃ]は東[とう]京[きょう]にあります。",
      en: "Our company is in Tokyo."
    }
  },
  {
    id: "vmn4-L36-29",
    word: "わたくし",
    reading: "わたくし",
    romaji: "watakushi",
    meaning: "I (humble first-person)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "pronoun",
    example: {
      jp: "わたくしが担[たん]当[とう]いたします。",
      en: "I will be in charge."
    }
  },
  {
    id: "vmn4-L36-30",
    word: "拝受する",
    reading: "はいじゅする",
    romaji: "haijusuru",
    meaning: "to receive (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "お手[て]紙[がみ]を拝[はい]受[じゅ]いたしました。",
      en: "I have received your letter."
    }
  },
  {
    id: "vmn4-L36-31",
    word: "お世話になる",
    reading: "おせわになる",
    romaji: "osewa ni naru",
    meaning: "to be looked after (humble gratitude)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "いつもお世[せ]話[わ]になっております。",
      en: "Thank you always for your support."
    }
  },
  {
    id: "vmn4-L36-32",
    word: "おじゃまする",
    reading: "おじゃまする",
    romaji: "ojamasuru",
    meaning: "to visit / disturb (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "verb",
    example: {
      jp: "明日[あした]おじゃまします。",
      en: "I will visit (disturb) you tomorrow."
    }
  },
  {
    id: "vmn4-L36-33",
    word: "失礼いたします",
    reading: "しつれいいたします",
    romaji: "shitsurei itashimasu",
    meaning: "excuse me / I will leave (humble)",
    level: "N4",
    theme: "kenjougo",
    lesson: 36,
    partOfSpeech: "phrase",
    example: {
      jp: "では、失[しつ]礼[れい]いたします。",
      en: "Then, excuse me (I am leaving)."
    }
  },

  // =========================================================
  // Lesson 37 — Special polite expressions (request, permission, gratitude)
  // =========================================================
  {
    id: "vmn4-L37-01",
    word: "〜ていただけませんか",
    reading: "ていただけませんか",
    romaji: "te itadakemasen ka",
    meaning: "could you please (do) for me",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "教[おし]えていただけませんか。",
      en: "Could you please teach me?"
    }
  },
  {
    id: "vmn4-L37-02",
    word: "〜させていただく",
    reading: "させていただく",
    romaji: "sasete itadaku",
    meaning: "let me do / I humbly do",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "休[やす]ませていただきます。",
      en: "Let me take the day off."
    }
  },
  {
    id: "vmn4-L37-03",
    word: "〜させていただけますか",
    reading: "させていただけますか",
    romaji: "sasete itadakemasu ka",
    meaning: "may I do (humble request)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "入[はい]らせていただけますか。",
      en: "May I come in?"
    }
  },
  {
    id: "vmn4-L37-04",
    word: "お〜ください",
    reading: "お〜ください",
    romaji: "o kudasai",
    meaning: "please do (respectful request)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "こちらでお待[ま]ちください。",
      en: "Please wait here."
    }
  },
  {
    id: "vmn4-L37-05",
    word: "ご〜ください",
    reading: "ご〜ください",
    romaji: "go kudasai",
    meaning: "please do (respectful request, on-reading)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "ご利[り]用[よう]ください。",
      en: "Please use this."
    }
  },
  {
    id: "vmn4-L37-06",
    word: "〜ていただけますか",
    reading: "ていただけますか",
    romaji: "te itadakemasu ka",
    meaning: "can you (do) for me",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "手[て]伝[つだ]っていただけますか。",
      en: "Can you help me?"
    }
  },
  {
    id: "vmn4-L37-07",
    word: "〜てもよろしいですか",
    reading: "てもよろしいですか",
    romaji: "te mo yoroshii desu ka",
    meaning: "may I (do)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "帰[かえ]ってもよろしいですか。",
      en: "May I go home?"
    }
  },
  {
    id: "vmn4-L37-08",
    word: "よろしい",
    reading: "よろしい",
    romaji: "yoroshii",
    meaning: "good, fine (polite)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "i-adjective",
    example: {
      jp: "これでよろしいですか。",
      en: "Is this fine?"
    }
  },
  {
    id: "vmn4-L37-09",
    word: "お願い申し上げる",
    reading: "おねがいもうしあげる",
    romaji: "onegai moushiageru",
    meaning: "to request humbly",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "verb",
    example: {
      jp: "ご協[きょう]力[りょく]をお願[ねが]い申[もう]し上[あ]げます。",
      en: "I humbly request your cooperation."
    }
  },
  {
    id: "vmn4-L37-10",
    word: "申し訳ありません",
    reading: "もうしわけありません",
    romaji: "moushiwake arimasen",
    meaning: "I am very sorry",
    level: "N4",
    theme: "polite-apology",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "申[もう]し訳[わけ]ありません、遅[おく]れました。",
      en: "I am very sorry, I am late."
    }
  },
  {
    id: "vmn4-L37-11",
    word: "お世話になります",
    reading: "おせわになります",
    romaji: "osewa ni narimasu",
    meaning: "thank you for your help",
    level: "N4",
    theme: "polite-gratitude",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "いつもお世[せ]話[わ]になっております。",
      en: "Thank you always for your support."
    }
  },
  {
    id: "vmn4-L37-12",
    word: "おかげさまで",
    reading: "おかげさまで",
    romaji: "okagesama de",
    meaning: "thanks to you",
    level: "N4",
    theme: "polite-gratitude",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "おかげさまで元[げん]気[き]です。",
      en: "Thanks to you, I am well."
    }
  },
  {
    id: "vmn4-L37-13",
    word: "お疲れ様です",
    reading: "おつかれさまです",
    romaji: "otsukaresama desu",
    meaning: "good work (greeting)",
    level: "N4",
    theme: "polite-gratitude",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "お疲[つか]れ様[さま]です、お先[さき]に。",
      en: "Good work, I am leaving first."
    }
  },
  {
    id: "vmn4-L37-14",
    word: "お先に失礼します",
    reading: "おさきにしつれいします",
    romaji: "osaki ni shitsurei shimasu",
    meaning: "excuse me for leaving first",
    level: "N4",
    theme: "polite-departure",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "お先[さき]に失[しつ]礼[れい]します。",
      en: "Excuse me for leaving first."
    }
  },
  {
    id: "vmn4-L37-15",
    word: "ご苦労様でした",
    reading: "ごくろうさまでした",
    romaji: "gokurousama deshita",
    meaning: "thank you for your hard work",
    level: "N4",
    theme: "polite-gratitude",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "ご苦[く]労[ろう]様[さま]でした。",
      en: "Thank you for your hard work."
    }
  },
  {
    id: "vmn4-L37-16",
    word: "いただきます",
    reading: "いただきます",
    romaji: "itadakimasu",
    meaning: "thank you for the meal (before eating)",
    level: "N4",
    theme: "polite-gratitude",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "いただきます。",
      en: "Thank you for the meal (before eating)."
    }
  },
  {
    id: "vmn4-L37-17",
    word: "ごちそうさまでした",
    reading: "ごちそうさまでした",
    romaji: "gochisousama deshita",
    meaning: "thank you for the meal (after eating)",
    level: "N4",
    theme: "polite-gratitude",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "ごちそうさまでした。",
      en: "Thank you for the meal (after eating)."
    }
  },
  {
    id: "vmn4-L37-18",
    word: "お待たせしました",
    reading: "おまたせしました",
    romaji: "omatase shimashita",
    meaning: "sorry to keep you waiting",
    level: "N4",
    theme: "polite-apology",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "お待[ま]たせしました。",
      en: "Sorry to keep you waiting."
    }
  },
  {
    id: "vmn4-L37-19",
    word: "お手数をおかけします",
    reading: "おてすうをおかけします",
    romaji: "otesuu o okake shimasu",
    meaning: "sorry to trouble you",
    level: "N4",
    theme: "polite-apology",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "お手[て]数[すう]をおかけします。",
      en: "Sorry to trouble you."
    }
  },
  {
    id: "vmn4-L37-20",
    word: "恐れ入ります",
    reading: "おそれいります",
    romaji: "osore irimasu",
    meaning: "excuse me / thank you (very polite)",
    level: "N4",
    theme: "polite-apology",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "恐[おそ]れ入[い]りますが、お願[ねが]いできますか。",
      en: "Excuse me, but may I ask you?"
    }
  },
  {
    id: "vmn4-L37-21",
    word: "〜てくださる",
    reading: "てくださる",
    romaji: "te kudasaru",
    meaning: "to do for me (respectful)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "先生[せんせい]が教[おし]えてくださいました。",
      en: "The teacher kindly taught me."
    }
  },
  {
    id: "vmn4-L37-22",
    word: "〜ていただく",
    reading: "ていただく",
    romaji: "te itadaku",
    meaning: "to receive (the favor of doing, humble)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "先生[せんせい]に教[おし]えていただきます。",
      en: "I have the teacher teach me."
    }
  },
  {
    id: "vmn4-L37-23",
    word: "いただける",
    reading: "いただける",
    romaji: "itadakeru",
    meaning: "can receive (potential humble)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "verb",
    example: {
      jp: "教[おし]えていただけますか。",
      en: "Can you teach me?"
    }
  },
  {
    id: "vmn4-L37-24",
    word: "失礼しました",
    reading: "しつれいしました",
    romaji: "shitsurei shimashita",
    meaning: "excuse me / I am sorry",
    level: "N4",
    theme: "polite-apology",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "失[しつ]礼[れい]しました。",
      en: "Excuse me."
    }
  },
  {
    id: "vmn4-L37-25",
    word: "どうも",
    reading: "どうも",
    romaji: "doumo",
    meaning: "thank you / very (casual thanks)",
    level: "N4",
    theme: "polite-gratitude",
    lesson: 37,
    partOfSpeech: "adverb",
    example: {
      jp: "どうもありがとうございます。",
      en: "Thank you very much."
    }
  },
  {
    id: "vmn4-L37-26",
    word: "すみません",
    reading: "すみません",
    romaji: "sumimasen",
    meaning: "excuse me / I am sorry",
    level: "N4",
    theme: "polite-apology",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "すみません、お手[て]伝[つだ]いしましょうか。",
      en: "Excuse me, shall I help?"
    }
  },
  {
    id: "vmn4-L37-27",
    word: "ごめんなさい",
    reading: "ごめんなさい",
    romaji: "gomennasai",
    meaning: "I am sorry (casual apology)",
    level: "N4",
    theme: "polite-apology",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "ごめんなさい、間違[まちが]えました。",
      en: "Sorry, I made a mistake."
    }
  },
  {
    id: "vmn4-L37-28",
    word: "〜てよろしいでしょうか",
    reading: "てよろしいでしょうか",
    romaji: "te yoroshii deshou ka",
    meaning: "is it alright if I (do)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "入[はい]ってもよろしいでしょうか。",
      en: "May I come in?"
    }
  },
  {
    id: "vmn4-L37-29",
    word: "お〜できる",
    reading: "お〜できる",
    romaji: "o dekiru",
    meaning: "can I do (humble potential)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "pattern",
    example: {
      jp: "お手[て]伝[つだ]いできることがありますか。",
      en: "Is there anything I can help with?"
    }
  },
  {
    id: "vmn4-L37-30",
    word: "お待ちしております",
    reading: "おまちしております",
    romaji: "omachi shite orimasu",
    meaning: "I am waiting for you (humble)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "お越[こ]しをお待[ま]ちしております。",
      en: "I am waiting for your visit."
    }
  },
  {
    id: "vmn4-L37-31",
    word: "申します",
    reading: "もうします",
    romaji: "moushimasu",
    meaning: "I say / I am called (humble)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "verb",
    example: {
      jp: "田[た]中[なか]と申[もう]します。",
      en: "I am called Tanaka."
    }
  },
  {
    id: "vmn4-L37-32",
    word: "申し上げます",
    reading: "もうしあげます",
    romaji: "moushiagemasu",
    meaning: "I say (very humble)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "verb",
    example: {
      jp: "お礼[れい]を申[もう]し上[あ]げます。",
      en: "I express my gratitude."
    }
  },
  {
    id: "vmn4-L37-33",
    word: "お電話いたします",
    reading: "おでんわいたします",
    romaji: "odenwa itashimasu",
    meaning: "I will call you (humble)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "後[のち]ほどお電[でん]話[わ]いたします。",
      en: "I will call you later."
    }
  },
  {
    id: "vmn4-L37-34",
    word: "お越しください",
    reading: "おこしください",
    romaji: "okoshi kudasai",
    meaning: "please come (polite request)",
    level: "N4",
    theme: "polite-request",
    lesson: 37,
    partOfSpeech: "phrase",
    example: {
      jp: "いつでもお越[こ]しください。",
      en: "Please come anytime."
    }
  },

  // =========================================================
  // Lesson 38 — Nominalization (の, こと, ことになる, ことにする, etc.)
  // =========================================================
  {
    id: "vmn4-L38-01",
    word: "の",
    reading: "の",
    romaji: "no",
    meaning: "nominalizer (action / state)",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "particle",
    example: {
      jp: "私[わたし]が料[りょう]理[り]するのを手[て]伝[つだ]ってください。",
      en: "Please help me cook."
    }
  },
  {
    id: "vmn4-L38-02",
    word: "こと",
    reading: "こと",
    romaji: "koto",
    meaning: "nominalizer (abstract fact)",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "particle",
    example: {
      jp: "日[に]本[ほん]語[ご]を勉[べん]強[きょう]することは楽[たの]しいです。",
      en: "Studying Japanese is fun."
    }
  },
  {
    id: "vmn4-L38-03",
    word: "ことになる",
    reading: "ことになる",
    romaji: "koto ni naru",
    meaning: "it has been decided that",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "pattern",
    example: {
      jp: "来[らい]月[げつ]転[てん]勤[きん]することになりました。",
      en: "It has been decided that I will be transferred next month."
    }
  },
  {
    id: "vmn4-L38-04",
    word: "ことにする",
    reading: "ことにする",
    romaji: "koto ni suru",
    meaning: "I decide to",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "pattern",
    example: {
      jp: "来[ら]年[ねん]日[に]本[ほん]へ行[い]くことにします。",
      en: "I will decide to go to Japan next year."
    }
  },
  {
    id: "vmn4-L38-05",
    word: "ことができる",
    reading: "ことができる",
    romaji: "koto ga dekiru",
    meaning: "can do",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "pattern",
    example: {
      jp: "日[に]本[ほん]語[ご]を話[はな]すことができます。",
      en: "I can speak Japanese."
    }
  },
  {
    id: "vmn4-L38-06",
    word: "ことがある",
    reading: "ことがある",
    romaji: "koto ga aru",
    meaning: "sometimes do",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "pattern",
    example: {
      jp: "朝[あさ]ごはんを食[た]べないことがあります。",
      en: "Sometimes I do not eat breakfast."
    }
  },
  {
    id: "vmn4-L38-07",
    word: "〜という",
    reading: "という",
    romaji: "to iu",
    meaning: "called / named (modifying)",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "pattern",
    example: {
      jp: "田[た]中[なか]という人[ひと]に会[あ]いました。",
      en: "I met a person called Tanaka."
    }
  },
  {
    id: "vmn4-L38-08",
    word: "〜ということ",
    reading: "ということ",
    romaji: "to iu koto",
    meaning: "the fact that / it means that",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "pattern",
    example: {
      jp: "彼[かれ]が来[こ]ないということです。",
      en: "It means that he will not come."
    }
  },
  {
    id: "vmn4-L38-09",
    word: "ところ",
    reading: "ところ",
    romaji: "tokoro",
    meaning: "place / moment",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "今[いま]食[た]べたところです。",
      en: "I just ate."
    }
  },
  {
    id: "vmn4-L38-10",
    word: "ているところだ",
    reading: "ているところだ",
    romaji: "te iru tokoro da",
    meaning: "in the middle of doing",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "pattern",
    example: {
      jp: "今[いま]食[た]べているところです。",
      en: "I am in the middle of eating now."
    }
  },
  {
    id: "vmn4-L38-11",
    word: "よう",
    reading: "よう",
    romaji: "you",
    meaning: "way / manner (nominalizer)",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "日[に]本[ほん]語[ご]を話[はな]すようになります。",
      en: "I have come to be able to speak Japanese."
    }
  },
  {
    id: "vmn4-L38-12",
    word: "わけ",
    reading: "わけ",
    romaji: "wake",
    meaning: "reason, meaning",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "遅[おく]れたわけを話[はな]してください。",
      en: "Please tell me the reason you were late."
    }
  },
  {
    id: "vmn4-L38-13",
    word: "はず",
    reading: "はず",
    romaji: "hazu",
    meaning: "should be (expectation)",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "彼[かれ]はもう着[つ]いたはずです。",
      en: "He should have already arrived."
    }
  },
  {
    id: "vmn4-L38-14",
    word: "つもり",
    reading: "つもり",
    romaji: "tsumori",
    meaning: "intention",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "来[ら]年[ねん]日[に]本[ほん]へ行[い]くつもりです。",
      en: "I intend to go to Japan next year."
    }
  },
  {
    id: "vmn4-L38-15",
    word: "まま",
    reading: "まま",
    romaji: "mama",
    meaning: "as it is",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "テレビをつけたまま寝[ね]ました。",
      en: "I slept with the TV left on."
    }
  },
  {
    id: "vmn4-L38-16",
    word: "とおり",
    reading: "とおり",
    romaji: "toori",
    meaning: "as (it is)",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "先生[せんせい]が言[い]ったとおりにします。",
      en: "I will do as the teacher said."
    }
  },
  {
    id: "vmn4-L38-17",
    word: "予定",
    reading: "よてい",
    romaji: "yotei",
    meaning: "plan, schedule",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "明日[あした]の予[よ]定[てい]を教[おし]えてください。",
      en: "Please tell me tomorrow's plan."
    }
  },
  {
    id: "vmn4-L38-18",
    word: "計画",
    reading: "けいかく",
    romaji: "keikaku",
    meaning: "plan",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "旅[りょ]行[こう]の計[けい]画[かく]を立[た]てます。",
      en: "I will make travel plans."
    }
  },
  {
    id: "vmn4-L38-19",
    word: "目的",
    reading: "もくてき",
    romaji: "mokuteki",
    meaning: "purpose",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "目[もく]的[てき]は何[なん]ですか。",
      en: "What is the purpose?"
    }
  },
  {
    id: "vmn4-L38-20",
    word: "理由",
    reading: "りゆう",
    romaji: "riyuu",
    meaning: "reason",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "遅[おく]れた理[り]由[ゆう]を教[おし]えてください。",
      en: "Please tell me the reason you were late."
    }
  },
  {
    id: "vmn4-L38-21",
    word: "原因",
    reading: "げんいん",
    romaji: "genin",
    meaning: "cause",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "事[じ]故[こ]の原[げん]因[いん]を調[しら]べています。",
      en: "We are investigating the cause of the accident."
    }
  },
  {
    id: "vmn4-L38-22",
    word: "内容",
    reading: "ないよう",
    romaji: "naiyou",
    meaning: "content",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "詳[くわ]しい内[ない]容[よう]を教[おし]えてください。",
      en: "Please tell me the detailed content."
    }
  },
  {
    id: "vmn4-L38-23",
    word: "意味",
    reading: "いみ",
    romaji: "imi",
    meaning: "meaning",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "この言[こと]葉[ば]の意[い]味[み]は何[なん]ですか。",
      en: "What is the meaning of this word?"
    }
  },
  {
    id: "vmn4-L38-24",
    word: "目標",
    reading: "もくひょう",
    romaji: "mokuhyou",
    meaning: "goal, target",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "今年[ことし]の目[もく]標[ひょう]を決[き]めました。",
      en: "I have set this year's goal."
    }
  },
  {
    id: "vmn4-L38-25",
    word: "結果",
    reading: "けっか",
    romaji: "kekka",
    meaning: "result",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "試[し]験[けん]の結[けっ]果[か]が出[で]ました。",
      en: "The exam results came out."
    }
  },
  {
    id: "vmn4-L38-26",
    word: "経験",
    reading: "けいけん",
    romaji: "keiken",
    meaning: "experience",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "海[かい]外[がい]の経[けい]験[けん]がありますか。",
      en: "Do you have overseas experience?"
    }
  },
  {
    id: "vmn4-L38-27",
    word: "問題",
    reading: "もんだい",
    romaji: "mondai",
    meaning: "problem, question",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "問[もん]題[だい]は何[なん]ですか。",
      en: "What is the problem?"
    }
  },
  {
    id: "vmn4-L38-28",
    word: "関係",
    reading: "かんけい",
    romaji: "kankei",
    meaning: "relation",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "二[ふた]人[り]の関[かん]係[けい]は何[なん]ですか。",
      en: "What is the relationship between the two?"
    }
  },
  {
    id: "vmn4-L38-29",
    word: "趣味",
    reading: "しゅみ",
    romaji: "shumi",
    meaning: "hobby",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "趣[しゅ]味[み]は何[なん]ですか。",
      en: "What is your hobby?"
    }
  },
  {
    id: "vmn4-L38-30",
    word: "夢",
    reading: "ゆめ",
    romaji: "yume",
    meaning: "dream",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "noun",
    example: {
      jp: "私[わたし]の夢[ゆめ]は医[い]者[しゃ]になることです。",
      en: "My dream is to become a doctor."
    }
  },
  {
    id: "vmn4-L38-31",
    word: "計画する",
    reading: "けいかくする",
    romaji: "keikakusuru",
    meaning: "to plan",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "verb",
    example: {
      jp: "旅[りょ]行[こう]を計[けい]画[かく]しています。",
      en: "I am planning a trip."
    }
  },
  {
    id: "vmn4-L38-32",
    word: "予定を立てる",
    reading: "よていをたてる",
    romaji: "yotei o tateru",
    meaning: "to make plans",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "phrase",
    example: {
      jp: "週[しゅう]末[まつ]の予[よ]定[てい]を立[た]てました。",
      en: "I made plans for the weekend."
    }
  },
  {
    id: "vmn4-L38-33",
    word: "達成する",
    reading: "たっせいする",
    romaji: "tasseisuru",
    meaning: "to achieve",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "verb",
    example: {
      jp: "目[もく]標[ひょう]を達[たっ]成[せい]したいです。",
      en: "I want to achieve my goal."
    }
  },
  {
    id: "vmn4-L38-34",
    word: "目的がある",
    reading: "もくてきがある",
    romaji: "mokuteki ga aru",
    meaning: "to have a purpose",
    level: "N4",
    theme: "nominalization",
    lesson: 38,
    partOfSpeech: "phrase",
    example: {
      jp: "目[もく]的[てき]があって日[に]本[ほん]へ来[き]ました。",
      en: "I came to Japan with a purpose."
    }
  },

  // =========================================================
  // Lesson 39 — Appearance (そう, よう, らしい, みたい)
  // =========================================================
  {
    id: "vmn4-L39-01",
    word: "そう",
    reading: "そう",
    romaji: "sou",
    meaning: "looks like (verb / adj stem)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "雨[あめ]が降[ふ]りそうです。",
      en: "It looks like it will rain."
    }
  },
  {
    id: "vmn4-L39-02",
    word: "そうだ",
    reading: "そうだ",
    romaji: "sou da",
    meaning: "looks like it (sentence end)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "美味[おい]しそうなケーキですね。",
      en: "It looks like a delicious cake, does it not."
    }
  },
  {
    id: "vmn4-L39-03",
    word: "そうに",
    reading: "そうに",
    romaji: "sou ni",
    meaning: "looking like (adverbial)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "悲[かな]しそうに話[はな]しました。",
      en: "He spoke sadly."
    }
  },
  {
    id: "vmn4-L39-04",
    word: "そうな",
    reading: "そうな",
    romaji: "sou na",
    meaning: "looking like (adnominal)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "難[むずか]しそうな問[もん]題[だい]ですね。",
      en: "It looks like a difficult problem."
    }
  },
  {
    id: "vmn4-L39-05",
    word: "ようだ",
    reading: "ようだ",
    romaji: "you da",
    meaning: "seems, appears",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "雨[あめ]のようです。",
      en: "It seems to be rain."
    }
  },
  {
    id: "vmn4-L39-06",
    word: "ような",
    reading: "ような",
    romaji: "you na",
    meaning: "like (adnominal)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "夢[ゆめ]のような出[で]来[き]事[ごと]でした。",
      en: "It was a dream-like event."
    }
  },
  {
    id: "vmn4-L39-07",
    word: "ように",
    reading: "ように",
    romaji: "you ni",
    meaning: "like (adverbial)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "雪[ゆき]のように降[ふ]っています。",
      en: "It is falling like snow."
    }
  },
  {
    id: "vmn4-L39-08",
    word: "らしい",
    reading: "らしい",
    romaji: "rashii",
    meaning: "seems to be / typical of",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "彼[かれ]は学[がく]生[せい]らしいです。",
      en: "He seems to be a student."
    }
  },
  {
    id: "vmn4-L39-09",
    word: "みたい",
    reading: "みたい",
    romaji: "mitai",
    meaning: "like, seems",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "夢[ゆめ]みたいですね。",
      en: "It is like a dream, is it not."
    }
  },
  {
    id: "vmn4-L39-10",
    word: "みたいに",
    reading: "みたいに",
    romaji: "mitai ni",
    meaning: "like (adverbial)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "auxiliary",
    example: {
      jp: "子[こ]供[ども]みたいに喜[よろこ]んでいます。",
      en: "He is delighted like a child."
    }
  },
  {
    id: "vmn4-L39-11",
    word: "まるで",
    reading: "まるで",
    romaji: "marude",
    meaning: "completely, just like (with よう)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "adverb",
    example: {
      jp: "まるで夢[ゆめ]のようです。",
      en: "It is just like a dream."
    }
  },
  {
    id: "vmn4-L39-12",
    word: "どうやら",
    reading: "どうやら",
    romaji: "douyara",
    meaning: "it seems, apparently",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "adverb",
    example: {
      jp: "どうやら雨[あめ]が降[ふ]りそうです。",
      en: "It seems that it will rain."
    }
  },
  {
    id: "vmn4-L39-13",
    word: "いかにも",
    reading: "いかにも",
    romaji: "ikanimo",
    meaning: "truly, seemingly",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "adverb",
    example: {
      jp: "いかにも彼[かれ]らしい答[こた]えです。",
      en: "It is truly an answer typical of him."
    }
  },
  {
    id: "vmn4-L39-14",
    word: "様子",
    reading: "ようす",
    romaji: "yousu",
    meaning: "state, condition",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "noun",
    example: {
      jp: "様[よう]子[す]が変[へん]ですね。",
      en: "The state is strange, is it not."
    }
  },
  {
    id: "vmn4-L39-15",
    word: "見た目",
    reading: "みため",
    romaji: "mitame",
    meaning: "appearance, looks",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "noun",
    example: {
      jp: "見[み]た目[め]は美味[おい]しそうです。",
      en: "It looks delicious."
    }
  },
  {
    id: "vmn4-L39-16",
    word: "感じ",
    reading: "かんじ",
    romaji: "kanji",
    meaning: "feeling, impression",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "noun",
    example: {
      jp: "落[お]ち着[つ]いた感じですね。",
      en: "It has a calm feeling."
    }
  },
  {
    id: "vmn4-L39-17",
    word: "元気",
    reading: "げんき",
    romaji: "genki",
    meaning: "healthy, energetic",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "na-adjective",
    example: {
      jp: "元[げん]気[き]そうですね。",
      en: "You look well."
    }
  },
  {
    id: "vmn4-L39-18",
    word: "暑い",
    reading: "あつい",
    romaji: "atsui",
    meaning: "hot (weather)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "i-adjective",
    example: {
      jp: "今日[きょう]は暑[あつ]そうです。",
      en: "It looks hot today."
    }
  },
  {
    id: "vmn4-L39-19",
    word: "寒い",
    reading: "さむい",
    romaji: "samui",
    meaning: "cold (weather)",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "i-adjective",
    example: {
      jp: "寒[さむ]そうな夜[よる]ですね。",
      en: "It looks like a cold night."
    }
  },
  {
    id: "vmn4-L39-20",
    word: "美味しい",
    reading: "おいしい",
    romaji: "oishii",
    meaning: "delicious",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "i-adjective",
    example: {
      jp: "美味[おい]しそうですね。",
      en: "It looks delicious."
    }
  },
  {
    id: "vmn4-L39-21",
    word: "難しい",
    reading: "むずかしい",
    romaji: "muzukashii",
    meaning: "difficult",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "i-adjective",
    example: {
      jp: "難[むずか]しそうな試[し]験[けん]ですね。",
      en: "It looks like a difficult exam."
    }
  },
  {
    id: "vmn4-L39-22",
    word: "簡単",
    reading: "かんたん",
    romaji: "kantan",
    meaning: "easy, simple",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "na-adjective",
    example: {
      jp: "簡[かん]単[たん]そうです。",
      en: "It looks easy."
    }
  },
  {
    id: "vmn4-L39-23",
    word: "楽しい",
    reading: "たのしい",
    romaji: "tanoshii",
    meaning: "fun, enjoyable",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "i-adjective",
    example: {
      jp: "楽[たの]しそうな旅[りょ]行[こう]ですね。",
      en: "It looks like a fun trip."
    }
  },
  {
    id: "vmn4-L39-24",
    word: "悲しい",
    reading: "かなしい",
    romaji: "kanashii",
    meaning: "sad",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "i-adjective",
    example: {
      jp: "悲[かな]しそうな顔[かお]をしています。",
      en: "He has a sad-looking face."
    }
  },
  {
    id: "vmn4-L39-25",
    word: "嬉しい",
    reading: "うれしい",
    romaji: "ureshii",
    meaning: "glad, happy",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "i-adjective",
    example: {
      jp: "嬉[うれ]しそうですね。",
      en: "You look happy."
    }
  },
  {
    id: "vmn4-L39-26",
    word: "怒る",
    reading: "おこる",
    romaji: "okoru",
    meaning: "to get angry",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "verb",
    example: {
      jp: "怒[おこ]りそうです。",
      en: "He looks like he will get angry."
    }
  },
  {
    id: "vmn4-L39-27",
    word: "泣く",
    reading: "なく",
    romaji: "naku",
    meaning: "to cry",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "verb",
    example: {
      jp: "泣[な]きそうです。",
      en: "She looks like she will cry."
    }
  },
  {
    id: "vmn4-L39-28",
    word: "笑う",
    reading: "わらう",
    romaji: "warau",
    meaning: "to laugh",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "verb",
    example: {
      jp: "笑[わら]いそうです。",
      en: "He looks like he will laugh."
    }
  },
  {
    id: "vmn4-L39-29",
    word: "倒れる",
    reading: "たおれる",
    romaji: "taoreru",
    meaning: "to collapse, fall over",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "verb",
    example: {
      jp: "倒[たお]れそうです。",
      en: "It looks like it will collapse."
    }
  },
  {
    id: "vmn4-L39-30",
    word: "落ちる",
    reading: "おちる",
    romaji: "ochiru",
    meaning: "to fall, drop",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "verb",
    example: {
      jp: "落[お]ちそうです。",
      en: "It looks like it will fall."
    }
  },
  {
    id: "vmn4-L39-31",
    word: "壊れる",
    reading: "こわれる",
    romaji: "kowareru",
    meaning: "to break",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "verb",
    example: {
      jp: "壊[こわ]れそうです。",
      en: "It looks like it will break."
    }
  },
  {
    id: "vmn4-L39-32",
    word: "濡れる",
    reading: "ぬれる",
    romaji: "nureru",
    meaning: "to get wet",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "verb",
    example: {
      jp: "濡[ぬ]れそうです。",
      en: "It looks like it will get wet."
    }
  },
  {
    id: "vmn4-L39-33",
    word: "見える",
    reading: "みえる",
    romaji: "mieru",
    meaning: "to be visible / to look like",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "verb",
    example: {
      jp: "遠[とお]くに山[やま]が見[み]えます。",
      en: "I can see mountains in the distance."
    }
  },
  {
    id: "vmn4-L39-34",
    word: "心配",
    reading: "しんぱい",
    romaji: "shinpai",
    meaning: "worry",
    level: "N4",
    theme: "appearance",
    lesson: 39,
    partOfSpeech: "na-adjective",
    example: {
      jp: "心[しん]配[ぱい]そうです。",
      en: "You look worried."
    }
  },

  // =========================================================
  // Lesson 40 — Conditions (ば, なら, と, ても review)
  // =========================================================
  {
    id: "vmn4-L40-01",
    word: "ば",
    reading: "ば",
    romaji: "ba",
    meaning: "if (conditional)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "particle",
    example: {
      jp: "天[てん]気[き]がよければ出[で]かけます。",
      en: "If the weather is good, I will go out."
    }
  },
  {
    id: "vmn4-L40-02",
    word: "なら",
    reading: "なら",
    romaji: "nara",
    meaning: "if (topic-based conditional)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "particle",
    example: {
      jp: "雨[あめ]なら中[ちゅう]止[し]します。",
      en: "If it rains, we will cancel."
    }
  },
  {
    id: "vmn4-L40-03",
    word: "と",
    reading: "と",
    romaji: "to",
    meaning: "when / if (natural result)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "particle",
    example: {
      jp: "春[はる]になると花[はな]が咲[さ]きます。",
      en: "When spring comes, flowers bloom."
    }
  },
  {
    id: "vmn4-L40-04",
    word: "ても",
    reading: "ても",
    romaji: "te mo",
    meaning: "even if",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "particle",
    example: {
      jp: "雨[あめ]でも行[い]きます。",
      en: "Even if it rains, I will go."
    }
  },
  {
    id: "vmn4-L40-05",
    word: "てもいい",
    reading: "てもいい",
    romaji: "te mo ii",
    meaning: "may (permission)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "帰[かえ]ってもいいですか。",
      en: "May I go home?"
    }
  },
  {
    id: "vmn4-L40-06",
    word: "てはいけない",
    reading: "てはいけない",
    romaji: "te wa ikenai",
    meaning: "must not (prohibition)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "ここで写[しゃ]真[しん]を撮[と]ってはいけません。",
      en: "You must not take photos here."
    }
  },
  {
    id: "vmn4-L40-07",
    word: "なければならない",
    reading: "なければならない",
    romaji: "nakereba naranai",
    meaning: "must (obligation)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "早[はや]く起[お]きなければなりません。",
      en: "I must get up early."
    }
  },
  {
    id: "vmn4-L40-08",
    word: "なくてもいい",
    reading: "なくてもいい",
    romaji: "nakutemo ii",
    meaning: "do not have to",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "行[い]かなくてもいいです。",
      en: "You do not have to go."
    }
  },
  {
    id: "vmn4-L40-09",
    word: "ばいい",
    reading: "ばいい",
    romaji: "ba ii",
    meaning: "should, would be good to",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "休[やす]めばいいです。",
      en: "You should rest."
    }
  },
  {
    id: "vmn4-L40-10",
    word: "たら",
    reading: "たら",
    romaji: "tara",
    meaning: "if / when (colloquial conditional)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "particle",
    example: {
      jp: "雨[あめ]が降[ふ]ったら中[ちゅう]止[し]します。",
      en: "If it rains, we will cancel."
    }
  },
  {
    id: "vmn4-L40-11",
    word: "場合",
    reading: "ばあい",
    romaji: "baai",
    meaning: "case, situation",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "雨[あめ]の場[ば]合[あい]は中[ちゅう]止[し]します。",
      en: "In case of rain, we will cancel."
    }
  },
  {
    id: "vmn4-L40-12",
    word: "際",
    reading: "さい",
    romaji: "sai",
    meaning: "occasion, when (formal)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "非[ひ]常[じょう]の際[さい]は階[かい]段[だん]を使[つか]ってください。",
      en: "In case of emergency, please use the stairs."
    }
  },
  {
    id: "vmn4-L40-13",
    word: "時",
    reading: "とき",
    romaji: "toki",
    meaning: "when (time)",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "子[こ]供[ども]の時[とき]、よく遊[あそ]びました。",
      en: "When I was a child, I played a lot."
    }
  },
  {
    id: "vmn4-L40-14",
    word: "前",
    reading: "まえ",
    romaji: "mae",
    meaning: "before",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "食[しょく]事[じ]の前[まえ]に手[て]を洗[あら]います。",
      en: "I wash my hands before meals."
    }
  },
  {
    id: "vmn4-L40-15",
    word: "後",
    reading: "あと",
    romaji: "ato",
    meaning: "after",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "食[しょく]事[じ]の後[あと]に歯[は]を磨[みが]きます。",
      en: "I brush my teeth after meals."
    }
  },
  {
    id: "vmn4-L40-16",
    word: "うちに",
    reading: "うちに",
    romaji: "uchi ni",
    meaning: "while",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "元[げん]気[き]なうちに旅[りょ]行[こう]したいです。",
      en: "I want to travel while I am healthy."
    }
  },
  {
    id: "vmn4-L40-17",
    word: "たびに",
    reading: "たびに",
    romaji: "tabi ni",
    meaning: "every time",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "会[あ]うたびに元[げん]気[き]になります。",
      en: "Every time I meet him, I feel better."
    }
  },
  {
    id: "vmn4-L40-18",
    word: "おきに",
    reading: "おきに",
    romaji: "oki ni",
    meaning: "at intervals of",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "particle",
    example: {
      jp: "一[いっ]時[じ]間[かん]おきに薬[くすり]を飲[の]みます。",
      en: "I take medicine every other hour."
    }
  },
  {
    id: "vmn4-L40-19",
    word: "ごとに",
    reading: "ごとに",
    romaji: "goto ni",
    meaning: "each, every",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "particle",
    example: {
      jp: "一[いっ]週[しゅう]間[かん]ごとに会[かい]議[ぎ]があります。",
      en: "There is a meeting every week."
    }
  },
  {
    id: "vmn4-L40-20",
    word: "とすると",
    reading: "とすると",
    romaji: "to suru to",
    meaning: "if we suppose",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "雨[あめ]だとすると中[ちゅう]止[し]ですね。",
      en: "If it is rain, we will cancel."
    }
  },
  {
    id: "vmn4-L40-21",
    word: "としたら",
    reading: "としたら",
    romaji: "to shitara",
    meaning: "if we assume",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "彼[かれ]が来[こ]ないとしたらどうしますか。",
      en: "If he does not come, what will you do?"
    }
  },
  {
    id: "vmn4-L40-22",
    word: "とすれば",
    reading: "とすれば",
    romaji: "to sureba",
    meaning: "if assuming",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "pattern",
    example: {
      jp: "失[しっ]敗[ぱい]だとすれば大[たい]変[へん]です。",
      en: "If it is a failure, it is serious."
    }
  },
  {
    id: "vmn4-L40-23",
    word: "天気",
    reading: "てんき",
    romaji: "tenki",
    meaning: "weather",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "明日[あした]の天[てん]気[き]はどうですか。",
      en: "How is tomorrow's weather?"
    }
  },
  {
    id: "vmn4-L40-24",
    word: "雨",
    reading: "あめ",
    romaji: "ame",
    meaning: "rain",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "雨[あめ]が降[ふ]りそうです。",
      en: "It looks like it will rain."
    }
  },
  {
    id: "vmn4-L40-25",
    word: "雪",
    reading: "ゆき",
    romaji: "yuki",
    meaning: "snow",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "雪[ゆき]が降[ふ]っています。",
      en: "It is snowing."
    }
  },
  {
    id: "vmn4-L40-26",
    word: "風",
    reading: "かぜ",
    romaji: "kaze",
    meaning: "wind",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "風[かぜ]が強[つよ]いです。",
      en: "The wind is strong."
    }
  },
  {
    id: "vmn4-L40-27",
    word: "曇り",
    reading: "くもり",
    romaji: "kumori",
    meaning: "cloudy weather",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "今日[きょう]は曇[くも]りです。",
      en: "It is cloudy today."
    }
  },
  {
    id: "vmn4-L40-28",
    word: "晴れ",
    reading: "はれ",
    romaji: "hare",
    meaning: "clear weather",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "noun",
    example: {
      jp: "明日[あした]は晴[は]れでしょう。",
      en: "Tomorrow will be sunny."
    }
  },
  {
    id: "vmn4-L40-29",
    word: "暑い",
    reading: "あつい",
    romaji: "atsui",
    meaning: "hot",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "i-adjective",
    example: {
      jp: "夏[なつ]は暑[あつ]いです。",
      en: "Summer is hot."
    }
  },
  {
    id: "vmn4-L40-30",
    word: "寒い",
    reading: "さむい",
    romaji: "samui",
    meaning: "cold",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "i-adjective",
    example: {
      jp: "冬[ふゆ]は寒[さむ]いです。",
      en: "Winter is cold."
    }
  },
  {
    id: "vmn4-L40-31",
    word: "涼しい",
    reading: "すずしい",
    romaji: "suzushii",
    meaning: "cool",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "i-adjective",
    example: {
      jp: "秋[あき]は涼[すず]しいです。",
      en: "Autumn is cool."
    }
  },
  {
    id: "vmn4-L40-32",
    word: "暖かい",
    reading: "あたたかい",
    romaji: "atatakai",
    meaning: "warm",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "i-adjective",
    example: {
      jp: "春[はる]は暖[あたた]かいです。",
      en: "Spring is warm."
    }
  },
  {
    id: "vmn4-L40-33",
    word: "雨が降る",
    reading: "あめがふる",
    romaji: "ame ga furu",
    meaning: "to rain",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "phrase",
    example: {
      jp: "明日[あした]は雨[あめ]が降[ふ]るでしょう。",
      en: "It will rain tomorrow."
    }
  },
  {
    id: "vmn4-L40-34",
    word: "天気がいい",
    reading: "てんきがいい",
    romaji: "tenki ga ii",
    meaning: "good weather",
    level: "N4",
    theme: "condition",
    lesson: 40,
    partOfSpeech: "phrase",
    example: {
      jp: "今日[きょう]は天[てん]気[き]がいいので散[さん]歩[ぽ]します。",
      en: "The weather is good today, so I will take a walk."
    }
  },

  // =========================================================
  // Lesson 41 — Hearsay (そうだ, ということ, らしい, とのこと)
  // =========================================================
  {
    id: "vmn4-L41-01",
    word: "そうだ",
    reading: "そうだ",
    romaji: "sou da",
    meaning: "I heard that (hearsay)",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "auxiliary",
    example: {
      jp: "明日[あした]は雨[あめ]が降[ふ]るそうです。",
      en: "I heard it will rain tomorrow."
    }
  },
  {
    id: "vmn4-L41-02",
    word: "ということだ",
    reading: "ということだ",
    romaji: "to iu koto da",
    meaning: "it is said that",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "pattern",
    example: {
      jp: "会[かい]議[ぎ]は中[ちゅう]止[し]だということです。",
      en: "It is said that the meeting is cancelled."
    }
  },
  {
    id: "vmn4-L41-03",
    word: "らしい",
    reading: "らしい",
    romaji: "rashii",
    meaning: "it seems (hearsay inference)",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "auxiliary",
    example: {
      jp: "彼[かれ]は来[こ]ないらしいです。",
      en: "It seems he will not come."
    }
  },
  {
    id: "vmn4-L41-04",
    word: "とのこと",
    reading: "とのこと",
    romaji: "to no koto",
    meaning: "I heard that (formal)",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "pattern",
    example: {
      jp: "田[た]中[なか]さんによると、来[らい]週[しゅう]来[く]るとのことです。",
      en: "According to Tanaka, he will come next week."
    }
  },
  {
    id: "vmn4-L41-05",
    word: "〜って",
    reading: "って",
    romaji: "tte",
    meaning: "I heard that (casual)",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "particle",
    example: {
      jp: "彼[かれ]、来[こ]ないって。",
      en: "I heard he is not coming."
    }
  },
  {
    id: "vmn4-L41-06",
    word: "〜とか",
    reading: "とか",
    romaji: "toka",
    meaning: "I heard that... or something",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "particle",
    example: {
      jp: "明日[あした]は雪[ゆき]だとか。",
      en: "I heard it will snow tomorrow or something."
    }
  },
  {
    id: "vmn4-L41-07",
    word: "〜によると",
    reading: "によると",
    romaji: "ni yoru to",
    meaning: "according to",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "pattern",
    example: {
      jp: "天[てん]気[き]予[よ]報[ほう]によると、明日[あした]は晴[は]れです。",
      en: "According to the forecast, tomorrow is sunny."
    }
  },
  {
    id: "vmn4-L41-08",
    word: "〜によれば",
    reading: "によれば",
    romaji: "ni yoreba",
    meaning: "according to",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "pattern",
    example: {
      jp: "ニュースによれば、事[じ]故[こ]がありました。",
      en: "According to the news, there was an accident."
    }
  },
  {
    id: "vmn4-L41-09",
    word: "聞く",
    reading: "きく",
    romaji: "kiku",
    meaning: "to hear, to ask",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "彼[かれ]から聞[き]きました。",
      en: "I heard from him."
    }
  },
  {
    id: "vmn4-L41-10",
    word: "聞こえる",
    reading: "きこえる",
    romaji: "kikoeru",
    meaning: "to be audible",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "隣[となり]の声[こえ]が聞[き]こえます。",
      en: "I can hear the neighbor's voice."
    }
  },
  {
    id: "vmn4-L41-11",
    word: "話す",
    reading: "はなす",
    romaji: "hanasu",
    meaning: "to talk, to speak",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "彼[かれ]と話[はな]しました。",
      en: "I talked with him."
    }
  },
  {
    id: "vmn4-L41-12",
    word: "話",
    reading: "はなし",
    romaji: "hanashi",
    meaning: "talk, story",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "面[おも]白[しろ]い話[はなし]を聞[き]きました。",
      en: "I heard an interesting story."
    }
  },
  {
    id: "vmn4-L41-13",
    word: "言う",
    reading: "いう",
    romaji: "iu",
    meaning: "to say",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "彼[かれ]がそう言[い]いました。",
      en: "He said so."
    }
  },
  {
    id: "vmn4-L41-14",
    word: "話題",
    reading: "わだい",
    romaji: "wadai",
    meaning: "topic",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "話[わ]題[だい]は何[なん]ですか。",
      en: "What is the topic?"
    }
  },
  {
    id: "vmn4-L41-15",
    word: "知らせる",
    reading: "しらせる",
    romaji: "shiraseru",
    meaning: "to notify",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "彼[かれ]に知[し]らせました。",
      en: "I notified him."
    }
  },
  {
    id: "vmn4-L41-16",
    word: "知らせ",
    reading: "しらせ",
    romaji: "shirase",
    meaning: "notice, news",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "知[し]らせを受[う]け取[と]りました。",
      en: "I received a notice."
    }
  },
  {
    id: "vmn4-L41-17",
    word: "連絡",
    reading: "れんらく",
    romaji: "renraku",
    meaning: "contact, communication",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "連[れん]絡[らく]を待[ま]っています。",
      en: "I am waiting for contact."
    }
  },
  {
    id: "vmn4-L41-18",
    word: "連絡する",
    reading: "れんらくする",
    romaji: "renrakusuru",
    meaning: "to contact",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "後[あと]で連[れん]絡[らく]します。",
      en: "I will contact you later."
    }
  },
  {
    id: "vmn4-L41-19",
    word: "伝える",
    reading: "つたえる",
    romaji: "tsutaeru",
    meaning: "to convey, to tell",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "彼[かれ]に伝[つた]えました。",
      en: "I conveyed it to him."
    }
  },
  {
    id: "vmn4-L41-20",
    word: "伝わる",
    reading: "つたわる",
    romaji: "tsutawaru",
    meaning: "to be conveyed",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "気[き]持[も]ちが伝[つた]わりました。",
      en: "My feelings were conveyed."
    }
  },
  {
    id: "vmn4-L41-21",
    word: "報じる",
    reading: "ほうじる",
    romaji: "houjiru",
    meaning: "to report (news)",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "新[しん]聞[ぶん]が報[ほう]じています。",
      en: "The newspaper is reporting."
    }
  },
  {
    id: "vmn4-L41-22",
    word: "報道",
    reading: "ほうどう",
    romaji: "houdou",
    meaning: "news coverage, reporting",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "報[ほう]道[どう]によりますと...",
      en: "According to news coverage..."
    }
  },
  {
    id: "vmn4-L41-23",
    word: "ニュース",
    reading: "ニュース",
    romaji: "nyuusu",
    meaning: "news",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "ニュースを見[み]ました。",
      en: "I watched the news."
    }
  },
  {
    id: "vmn4-L41-24",
    word: "新聞",
    reading: "しんぶん",
    romaji: "shinbun",
    meaning: "newspaper",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "朝[あさ]の新[しん]聞[ぶん]を読[よ]みます。",
      en: "I read the morning newspaper."
    }
  },
  {
    id: "vmn4-L41-25",
    word: "放送",
    reading: "ほうそう",
    romaji: "housou",
    meaning: "broadcast",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "ラジオの放[ほう]送[そう]を聞[き]きます。",
      en: "I listen to radio broadcasts."
    }
  },
  {
    id: "vmn4-L41-26",
    word: "発表",
    reading: "はっぴょう",
    romaji: "happyou",
    meaning: "announcement",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "発[はっ]表[ぴょう]がありました。",
      en: "There was an announcement."
    }
  },
  {
    id: "vmn4-L41-27",
    word: "発表する",
    reading: "はっぴょうする",
    romaji: "happyousuru",
    meaning: "to announce",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "結[けっ]果[か]を発[はっ]表[ぴょう]します。",
      en: "I will announce the results."
    }
  },
  {
    id: "vmn4-L41-28",
    word: "記事",
    reading: "きじ",
    romaji: "kiji",
    meaning: "article",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "新[しん]聞[ぶん]の記[き]事[じ]を読[よ]みました。",
      en: "I read the newspaper article."
    }
  },
  {
    id: "vmn4-L41-29",
    word: "記者",
    reading: "きしゃ",
    romaji: "kisha",
    meaning: "reporter",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "記[き]者[しゃ]会[かい]見[けん]がありました。",
      en: "There was a press conference."
    }
  },
  {
    id: "vmn4-L41-30",
    word: "記者会見",
    reading: "きしゃかいけん",
    romaji: "kisha kaiken",
    meaning: "press conference",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "記[き]者[しゃ]会[かい]見[けん]を開[ひら]きます。",
      en: "A press conference will be held."
    }
  },
  {
    id: "vmn4-L41-31",
    word: "言われる",
    reading: "いわれる",
    romaji: "iwareru",
    meaning: "to be said (passive)",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "verb",
    example: {
      jp: "彼[かれ]は天[てん]才[さい]だと言[い]われています。",
      en: "He is said to be a genius."
    }
  },
  {
    id: "vmn4-L41-32",
    word: "うわさ",
    reading: "うわさ",
    romaji: "uwasa",
    meaning: "rumor",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "うわさによると、彼[かれ]は転[てん]勤[きん]するそうです。",
      en: "According to rumor, he will be transferred."
    }
  },
  {
    id: "vmn4-L41-33",
    word: "名前",
    reading: "なまえ",
    romaji: "namae",
    meaning: "name",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "名[な]前[まえ]を聞[き]きました。",
      en: "I heard the name."
    }
  },
  {
    id: "vmn4-L41-34",
    word: "天気予報",
    reading: "てんきよほう",
    romaji: "tenki yohou",
    meaning: "weather forecast",
    level: "N4",
    theme: "hearsay",
    lesson: 41,
    partOfSpeech: "noun",
    example: {
      jp: "天[てん]気[き]予[よ]報[ほう]によると明日[あした]は雨[あめ]です。",
      en: "According to the forecast, it will rain tomorrow."
    }
  },

  // =========================================================
  // Lesson 42 — Regret / should (べき, べきだった, ばよかった)
  // =========================================================
  {
    id: "vmn4-L42-01",
    word: "べき",
    reading: "べき",
    romaji: "beki",
    meaning: "should (ought to)",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "auxiliary",
    example: {
      jp: "早[はや]く起[お]きるべきです。",
      en: "You should get up early."
    }
  },
  {
    id: "vmn4-L42-02",
    word: "べきだ",
    reading: "べきだ",
    romaji: "beki da",
    meaning: "should (sentence end)",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "もっと勉[べん]強[きょう]するべきだ。",
      en: "You should study more."
    }
  },
  {
    id: "vmn4-L42-03",
    word: "べきだった",
    reading: "べきだった",
    romaji: "beki datta",
    meaning: "should have (past regret)",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "早[はや]く来[く]るべきでした。",
      en: "I should have come earlier."
    }
  },
  {
    id: "vmn4-L42-04",
    word: "べきではなかった",
    reading: "べきではなかった",
    romaji: "beki dewa nakatta",
    meaning: "should not have",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "そんなことを言[い]うべきではなかった。",
      en: "I should not have said such a thing."
    }
  },
  {
    id: "vmn4-L42-05",
    word: "ばよかった",
    reading: "ばよかった",
    romaji: "ba yokatta",
    meaning: "should have / wish I had",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "早[はや]く起[お]きればよかった。",
      en: "I should have woken up earlier."
    }
  },
  {
    id: "vmn4-L42-06",
    word: "たらよかった",
    reading: "たらよかった",
    romaji: "tara yokatta",
    meaning: "should have (colloquial regret)",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "持[も]ってくればよかった。",
      en: "I should have brought it."
    }
  },
  {
    id: "vmn4-L42-07",
    word: "〜といい",
    reading: "といい",
    romaji: "to ii",
    meaning: "I hope / it would be good if",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "明日[あした]天[てん]気[き]になるといいですね。",
      en: "I hope the weather will be good tomorrow."
    }
  },
  {
    id: "vmn4-L42-08",
    word: "〜ばいいのに",
    reading: "ばいいのに",
    romaji: "ba ii noni",
    meaning: "it would be good if only",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "休[やす]めばいいのに。",
      en: "It would be nice if you could rest."
    }
  },
  {
    id: "vmn4-L42-09",
    word: "〜たらよかったのに",
    reading: "たらよかったのに",
    romaji: "tara yokatta noni",
    meaning: "wish I had",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "もっと勉[べん]強[きょう]すればよかったのに。",
      en: "I wish I had studied more."
    }
  },
  {
    id: "vmn4-L42-10",
    word: "〜はずだった",
    reading: "はずだった",
    romaji: "hazu datta",
    meaning: "was supposed to (but did not)",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "彼[かれ]が来[く]るはずでした。",
      en: "He was supposed to come."
    }
  },
  {
    id: "vmn4-L42-11",
    word: "〜つもりだった",
    reading: "つもりだった",
    romaji: "tsumori datta",
    meaning: "I had intended to",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "行[い]くつもりでした。",
      en: "I had intended to go."
    }
  },
  {
    id: "vmn4-L42-12",
    word: "〜たつもり",
    reading: "たつもり",
    romaji: "ta tsumori",
    meaning: "as if I had done",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "やったつもりになります。",
      en: "I pretend as if I had done it."
    }
  },
  {
    id: "vmn4-L42-13",
    word: "残念",
    reading: "ざんねん",
    romaji: "zannen",
    meaning: "regrettable, pity",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "na-adjective",
    example: {
      jp: "残[ざん]念[ねん]ですね。",
      en: "That is too bad."
    }
  },
  {
    id: "vmn4-L42-14",
    word: "残念ながら",
    reading: "ざんねんながら",
    romaji: "zannen nagara",
    meaning: "unfortunately",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "phrase",
    example: {
      jp: "残[ざん]念[ねん]ながら中[ちゅう]止[し]です。",
      en: "Unfortunately, it is cancelled."
    }
  },
  {
    id: "vmn4-L42-15",
    word: "残念に思う",
    reading: "ざんねんにおもう",
    romaji: "zannen ni omou",
    meaning: "to feel regret",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "phrase",
    example: {
      jp: "残[ざん]念[ねん]に思[おも]います。",
      en: "I feel regret."
    }
  },
  {
    id: "vmn4-L42-16",
    word: "惜しむ",
    reading: "おしむ",
    romaji: "oshimu",
    meaning: "to regret, to be loath to",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "verb",
    example: {
      jp: "別[わか]れを惜[おし]しみました。",
      en: "I regretted the parting."
    }
  },
  {
    id: "vmn4-L42-17",
    word: "悔しい",
    reading: "くやしい",
    romaji: "kuyashii",
    meaning: "vexing, frustrating",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "i-adjective",
    example: {
      jp: "負[ま]けて悔[くや]しいです。",
      en: "It is vexing to lose."
    }
  },
  {
    id: "vmn4-L42-18",
    word: "後悔する",
    reading: "こうかいする",
    romaji: "koukaisuru",
    meaning: "to regret",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "verb",
    example: {
      jp: "あの時[とき]のことを後[こう]悔[かい]しています。",
      en: "I regret what happened then."
    }
  },
  {
    id: "vmn4-L42-19",
    word: "後悔",
    reading: "こうかい",
    romaji: "koukai",
    meaning: "regret, remorse",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "noun",
    example: {
      jp: "後[こう]悔[かい]はありません。",
      en: "I have no regrets."
    }
  },
  {
    id: "vmn4-L42-20",
    word: "反省する",
    reading: "はんせいする",
    romaji: "hanseisuru",
    meaning: "to reflect on oneself",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "verb",
    example: {
      jp: "自[じ]分[ぶん]の行[こう]動[どう]を反[はん]省[せい]します。",
      en: "I will reflect on my actions."
    }
  },
  {
    id: "vmn4-L42-21",
    word: "反省",
    reading: "はんせい",
    romaji: "hansei",
    meaning: "reflection, self-examination",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "noun",
    example: {
      jp: "反[はん]省[せい]の色[いろ]が見[み]えます。",
      en: "I can see signs of reflection."
    }
  },
  {
    id: "vmn4-L42-22",
    word: "失敗",
    reading: "しっぱい",
    romaji: "shippai",
    meaning: "failure, mistake",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "noun",
    example: {
      jp: "失[しっ]敗[ぱい]から学[まな]びます。",
      en: "I learn from failure."
    }
  },
  {
    id: "vmn4-L42-23",
    word: "失敗する",
    reading: "しっぱいする",
    romaji: "shippaisuru",
    meaning: "to fail",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "verb",
    example: {
      jp: "試[し]験[けん]に失[しっ]敗[ぱい]しました。",
      en: "I failed the exam."
    }
  },
  {
    id: "vmn4-L42-24",
    word: "間違い",
    reading: "まちがい",
    romaji: "machigai",
    meaning: "mistake, error",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "noun",
    example: {
      jp: "間違[まちが]いを直[なお]します。",
      en: "I will correct the mistake."
    }
  },
  {
    id: "vmn4-L42-25",
    word: "教訓",
    reading: "きょうくん",
    romaji: "kyoukun",
    meaning: "lesson learned, moral",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "noun",
    example: {
      jp: "教[きょう]訓[くん]を得[え]ました。",
      en: "I learned a lesson."
    }
  },
  {
    id: "vmn4-L42-26",
    word: "無駄",
    reading: "むだ",
    romaji: "muda",
    meaning: "waste, useless",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "na-adjective",
    example: {
      jp: "時[じ]間[かん]を無[む]駄[だ]にしました。",
      en: "I wasted time."
    }
  },
  {
    id: "vmn4-L42-27",
    word: "無駄にする",
    reading: "むだにする",
    romaji: "muda ni suru",
    meaning: "to waste",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "phrase",
    example: {
      jp: "お金[かね]を無[む]駄[だ]にしないで。",
      en: "Do not waste money."
    }
  },
  {
    id: "vmn4-L42-28",
    word: "やり直す",
    reading: "やりなおす",
    romaji: "yarinaosu",
    meaning: "to redo",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "verb",
    example: {
      jp: "もう一[いっ]度[ど]やり直[なお]します。",
      en: "I will redo it once more."
    }
  },
  {
    id: "vmn4-L42-29",
    word: "やり直し",
    reading: "やりなおし",
    romaji: "yarinaoshi",
    meaning: "redoing",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "noun",
    example: {
      jp: "やり直[なお]しが必[ひつ]要[よう]です。",
      en: "A redo is necessary."
    }
  },
  {
    id: "vmn4-L42-30",
    word: "〜ばいい",
    reading: "ばいい",
    romaji: "ba ii",
    meaning: "should / what should I do",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "どうすればいいですか。",
      en: "What should I do?"
    }
  },
  {
    id: "vmn4-L42-31",
    word: "〜といいのに",
    reading: "といいのに",
    romaji: "to ii noni",
    meaning: "I hope it would (wishful)",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "早[はや]く着[つ]くといいのに。",
      en: "I hope you arrive early."
    }
  },
  {
    id: "vmn4-L42-32",
    word: "〜てもよかった",
    reading: "てもよかった",
    romaji: "te mo yokatta",
    meaning: "could have (should have in hindsight)",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "もっと休[やす]んでもよかった。",
      en: "I could have rested more."
    }
  },
  {
    id: "vmn4-L42-33",
    word: "〜ておけばよかった",
    reading: "ておけばよかった",
    romaji: "te okeba yokatta",
    meaning: "should have done in advance",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "pattern",
    example: {
      jp: "早[はや]く準[じゅん]備[び]しておけばよかった。",
      en: "I should have prepared in advance."
    }
  },
  {
    id: "vmn4-L42-34",
    word: "無念",
    reading: "むねん",
    romaji: "munen",
    meaning: "chagrin, deep regret",
    level: "N4",
    theme: "regret-should",
    lesson: 42,
    partOfSpeech: "na-adjective",
    example: {
      jp: "無[む]念[ねん]の思[おも]いです。",
      en: "I feel deep regret."
    }
  }
];
