import type { ListeningData } from "@/lib/types";

export const listeningN4J: ListeningData[] = [
  {
    id: "l-n4-91",
    title: "At the Garden Center",
    level: "N4",
    context: "A customer asks a staff member about potted plants for a balcony",
    text: "A: すみません、花[はな]を買[か]いたいんですが。\nB: いらっしゃいませ。何[なに]の花[はな]をお探[さが]しですか。\nA: ベランダに置[お]く花[はな]が欲[ほ]しいです。\nB: では、この鉢植[はちう]えはいかがですか。日[ひ]に当[あ]てるだけで育[そだ]ちます。\nA: 水[みず]はどのくらいあげますか。\nB: 夏[なつ]は毎日[まいにち]、冬[ふゆ]は二日[ふつか]に一回[いっかい]でいいです。\nA: じゃ、これにします。いくらですか。\nB: 千五百円[せんごひゃくえん]です。",
    translation: "A: Excuse me, I'd like to buy flowers.\nB: Welcome. What kind of flowers are you looking for?\nA: I want flowers to put on the balcony.\nB: Then how about this potted plant? It grows just by being in the sun.\nA: How much water should I give it?\nB: In summer every day, in winter every other day is fine.\nA: Then I'll take this one. How much is it?\nB: It's 1,500 yen.",
    questions: [
      {
        q: "What does the customer want to buy?",
        choices: ["Vegetables", "Flowers", "Fruit", "Trees"],
        answerIndex: 1,
        explanation: "A says they want to buy flowers (花を買いたい)."
      },
      {
        q: "Where will the customer put the plant?",
        choices: ["In the garden", "In the office", "On the balcony", "By the window"],
        answerIndex: 2,
        explanation: "A wants flowers to put on the balcony (ベランダに置く花)."
      },
      {
        q: "How often should the plant be watered in summer?",
        choices: ["Once a week", "Twice a week", "Every day", "Every other day"],
        answerIndex: 2,
        explanation: "B says in summer water it every day (夏は毎日)."
      },
      {
        q: "How much does the plant cost?",
        choices: ["1,000 yen", "1,500 yen", "2,000 yen", "3,000 yen"],
        answerIndex: 1,
        explanation: "B says the price is 1,500 yen (千五百円)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "plants"]
  },
  {
    id: "l-n4-92",
    title: "A Charity Event",
    level: "N4",
    context: "An organizer asks a volunteer to help at a charity event in the park",
    text: "A: 来週[らいしゅう]の土曜日[どようび]、チャリティーのイベントがあります。\nB: どこでやりますか。\nA: 市[し]の公園[こうえん]です。午前[ごぜん]十時[じゅうじ]から始[はじ]まります。\nB: 何[なに]を手伝[てつだ]えばいいですか。\nA: 食[た]べ物[もの]の売[う]り場[ば]で働[はたら]いてほしいです。\nB: 分[わ]かりました。服[ふく]はどうすればいいですか。\nA: 白[しろ]いシャツを着[き]てきてください。\nB: はい、準備[じゅんび]しておきます。",
    translation: "A: There's a charity event next Saturday.\nB: Where will it be held?\nA: At the city park. It starts at 10 in the morning.\nB: What should I help with?\nA: I'd like you to work at the food stall.\nB: Understood. What should I wear?\nA: Please wear a white shirt.\nB: Yes, I'll get ready.",
    questions: [
      {
        q: "When does the charity event start?",
        choices: ["Next Saturday morning", "Next Sunday morning", "This Saturday evening", "Next Saturday evening"],
        answerIndex: 0,
        explanation: "A says the event is next Saturday starting at 10am (来週の土曜日、午前十時から始まります)."
      },
      {
        q: "Where will the event be held?",
        choices: ["At a school", "At a city park", "At a station", "At a shopping mall"],
        answerIndex: 1,
        explanation: "A says the event is at the city park (市の公園です)."
      },
      {
        q: "What does A want B to help with?",
        choices: ["Selling food", "Cleaning up", "Setting up chairs", "Guiding visitors"],
        answerIndex: 0,
        explanation: "A wants B to work at the food stall (食べ物の売り場で働いてほしい)."
      },
      {
        q: "What should B wear?",
        choices: ["A black shirt", "A white shirt", "A blue shirt", "A red shirt"],
        answerIndex: 1,
        explanation: "A asks B to wear a white shirt (白いシャツを着てきてください)."
      }
    ],
    estMinutes: 4,
    tags: ["events", "volunteer"]
  },
  {
    id: "l-n4-93",
    title: "At the Security Company",
    level: "N4",
    context: "A customer consults a security company about a home security system",
    text: "A: すみません、家[いえ]の警備[けいび]システムについて相談[そうだん]したいんですが。\nB: ありがとうございます。最近[さいきん]は防犯[ぼうはん]カメラが人気[にんき]です。\nA: カメラはいくらくらいですか。\nB: 一台[いちだい]五万円[ごまんえん]からあります。\nA: 取付[とりつ]けは無料[むりょう]ですか。\nB: はい、今月[こんげつ]は無料[むりょう]で取付[とりつ]けできます。\nA: じゃ、二台[にだい]お願[ねが]いします。\nB: ありがとうございます。来週[らいしゅう]お伺[うかが]いします。",
    translation: "A: Excuse me, I'd like to consult about a home security system.\nB: Thank you. Recently security cameras have been popular.\nA: About how much is a camera?\nB: They start at 50,000 yen each.\nA: Is installation free?\nB: Yes, this month installation is free.\nA: Then I'd like two cameras please.\nB: Thank you. We'll visit you next week.",
    questions: [
      {
        q: "What does the customer want to discuss?",
        choices: ["A home security system", "A car alarm", "A door lock", "A fire alarm"],
        answerIndex: 0,
        explanation: "A wants to consult about a home security system (家の警備システムについて相談したい)."
      },
      {
        q: "What is popular recently according to B?",
        choices: ["Smart locks", "Security cameras", "Window sensors", "Motion lights"],
        answerIndex: 1,
        explanation: "B says security cameras are popular recently (防犯カメラが人気です)."
      },
      {
        q: "How much does one camera cost at minimum?",
        choices: ["From 30,000 yen", "From 50,000 yen", "From 70,000 yen", "From 100,000 yen"],
        answerIndex: 1,
        explanation: "B says cameras start at 50,000 yen each (一台五万円からあります)."
      },
      {
        q: "How many cameras does the customer order?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "A orders two cameras (二台お願いします)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "security"]
  },
  {
    id: "l-n4-94",
    title: "Comparing Two Job Offers",
    level: "N4",
    context: "Two friends discuss which of two job offers is better",
    text: "A: 就職[しゅうしょく]の内定[ないてい]を二[ふた]つもらいました。\nB: すごいですね。どっちにするか決[き]めましたか。\nA: まだです。一[ひと]つは給料[きゅうりょう]が高[たか]いですが、残業[ざんぎょう]が多[おお]いです。\nB: もう一[ひと]つは?\nA: 給料[きゅうりょう]は低[ひく]いですが、休[やす]みが多[おお]いです。\nB: じゃ、趣味[しゅみ]の時間[じかん]を大切[たいせつ]にするなら、二[ふた]つ目[め]がいいですね。\nA: そうですね。よく考[かんが]えてみます。",
    translation: "A: I received two job offers.\nB: That's great. Have you decided which one?\nA: Not yet. One has a high salary, but there's a lot of overtime.\nB: What about the other one?\nA: The salary is low, but there are many holidays.\nB: Then if you value your hobby time, the second one is good.\nA: Right. I'll think about it carefully.",
    questions: [
      {
        q: "How many job offers did A receive?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "A says they received two offers (内定を二つもらいました)."
      },
      {
        q: "What is the first job like?",
        choices: ["High salary, lots of overtime", "Low salary, few holidays", "High salary, many holidays", "Low salary, lots of overtime"],
        answerIndex: 0,
        explanation: "A says the first one has high salary but lots of overtime (給料が高いですが残業が多い)."
      },
      {
        q: "What is the second job like?",
        choices: ["Low salary, many holidays", "High salary, few holidays", "Low salary, lots of overtime", "High salary, no overtime"],
        answerIndex: 0,
        explanation: "A says the second one has low salary but many holidays (給料は低いですが休みが多い)."
      },
      {
        q: "What does B recommend?",
        choices: ["Choose the first job", "Choose the second job if you value free time", "Wait for another offer", "Refuse both"],
        answerIndex: 1,
        explanation: "B recommends the second one if A values hobby time (趣味の時間を大切にするなら二つ目がいい)."
      }
    ],
    estMinutes: 4,
    tags: ["career", "advice"]
  },
  {
    id: "l-n4-95",
    title: "A Catering Service",
    level: "N4",
    context: "A customer orders catering for a company party",
    text: "A: 来週[らいしゅう]の金曜日[きんようび]、会社[かいしゃ]のパーティーの料理[りょうり]をお願[ねが]いしたいんですが。\nB: ありがとうございます。何人[なんにん]分[ぶん]ですか。\nA: 三十人[さんじゅうにん]分[ぶん]です。\nB: 和食[わしょく]と洋食[ようしょく]がありますが、どちらがいいですか。\nA: 和食[わしょく]でお願[ねが]いします。\nB: 分[わ]かりました。予算[よさん]はおいくらくらいですか。\nA: 五万円[ごまんえん]くらいです。\nB: はい、その予算[よさん]でメニューを作[つく]ります。",
    translation: "A: I'd like to order food for a company party next Friday.\nB: Thank you. For how many people?\nA: For 30 people.\nB: We have Japanese and Western food. Which would you prefer?\nA: Japanese food please.\nB: Understood. What's your budget?\nA: Around 50,000 yen.\nB: Yes, we'll make a menu within that budget.",
    questions: [
      {
        q: "When is the company party?",
        choices: ["Next Friday", "Next Saturday", "This Friday", "Next Sunday"],
        answerIndex: 0,
        explanation: "A says the party is next Friday (来週の金曜日)."
      },
      {
        q: "How many people will the food be for?",
        choices: ["10", "20", "30", "40"],
        answerIndex: 2,
        explanation: "A orders food for 30 people (三十人分です)."
      },
      {
        q: "What kind of food did the customer order?",
        choices: ["Japanese food", "Western food", "Chinese food", "Korean food"],
        answerIndex: 0,
        explanation: "A orders Japanese food (和食でお願いします)."
      },
      {
        q: "What is the customer's budget?",
        choices: ["About 30,000 yen", "About 50,000 yen", "About 70,000 yen", "About 100,000 yen"],
        answerIndex: 1,
        explanation: "A says the budget is around 50,000 yen (五万円くらいです)."
      }
    ],
    estMinutes: 3,
    tags: ["business", "food"]
  },
  {
    id: "l-n4-96",
    title: "A Language Test",
    level: "N4",
    context: "A teacher and student discuss how to prepare for an upcoming Japanese exam",
    text: "A: 来週[らいしゅう]、日本語[にほんご]の試験[しけん]がありますね。\nB: はい。緊張[きんちょう]しています。\nA: 何[なに]を勉強[べんきょう]すればいいですか。\nB: 文法[ぶんぽう]と漢字[かんじ]が難[むずか]しいです。\nA: じゃ、過去[かこ]の問題[もんだい]を三回[さんかい]くらいやりましょう。\nB: はい。聴解[ちょうかい]も練習[れんしゅう]したいです。\nA: いいですね。毎日[まいにち]少[すこ]しずつやりましょう。",
    translation: "A: There's a Japanese exam next week, isn't there?\nB: Yes. I'm nervous.\nA: What should you study?\nB: Grammar and kanji are difficult.\nA: Then let's do past questions about three times.\nB: Yes. I also want to practice listening comprehension.\nA: Sounds good. Let's do a little every day.",
    questions: [
      {
        q: "When is the Japanese exam?",
        choices: ["Next week", "Tomorrow", "In two weeks", "Next month"],
        answerIndex: 0,
        explanation: "A mentions the exam is next week (来週、日本語の試験があります)."
      },
      {
        q: "What does the student find difficult?",
        choices: ["Grammar and kanji", "Listening and speaking", "Reading and writing", "Vocabulary and grammar"],
        answerIndex: 0,
        explanation: "B says grammar and kanji are difficult (文法と漢字が難しい)."
      },
      {
        q: "How many times does the teacher suggest doing past questions?",
        choices: ["Once", "Twice", "Three times", "Five times"],
        answerIndex: 2,
        explanation: "A suggests doing past questions about three times (過去の問題を三回くらいやりましょう)."
      },
      {
        q: "What else does the student want to practice?",
        choices: ["Speaking", "Listening comprehension", "Kanji writing", "Essay writing"],
        answerIndex: 1,
        explanation: "B wants to practice listening comprehension too (聴解も練習したい)."
      }
    ],
    estMinutes: 3,
    tags: ["study", "exam"]
  },
  {
    id: "l-n4-97",
    title: "At the Print Shop",
    level: "N4",
    context: "A customer orders business cards at a print shop",
    text: "A: すみません、名刺[めいし]を印刷[いんさつ]したいんですが。\nB: はい。何[なん]枚[まい]いりますか。\nA: 二百枚[にひゃくまい]お願[ねが]いします。\nB: 色[いろ]は何色[なにいろ]にしますか。\nA: 黒[くろ]と赤[あか]の二色[にしょく]でお願[ねが]いします。\nB: 分[わ]かりました。明日[あした]の午後[ごご]にできあがります。\nA: じゃ、明日[あした]取[と]りに来[き]ます。",
    translation: "A: Excuse me, I'd like to print business cards.\nB: Sure. How many do you need?\nA: 200 please.\nB: What color would you like?\nA: Black and red, two colors please.\nB: Understood. They'll be ready tomorrow afternoon.\nA: Then I'll come pick them up tomorrow.",
    questions: [
      {
        q: "What does the customer want to print?",
        choices: ["Flyers", "Posters", "Business cards", "Brochures"],
        answerIndex: 2,
        explanation: "A wants to print business cards (名刺を印刷したい)."
      },
      {
        q: "How many copies does the customer want?",
        choices: ["100", "150", "200", "300"],
        answerIndex: 2,
        explanation: "A asks for 200 copies (二百枚お願いします)."
      },
      {
        q: "What colors did the customer choose?",
        choices: ["Black and white", "Black and red", "Blue and red", "Black and blue"],
        answerIndex: 1,
        explanation: "A asks for black and red, two colors (黒と赤の二色でお願いします)."
      },
      {
        q: "When will the cards be ready?",
        choices: ["Tomorrow morning", "Tomorrow afternoon", "This evening", "In two days"],
        answerIndex: 1,
        explanation: "B says they'll be ready tomorrow afternoon (明日の午後にできあがります)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "business"]
  },
  {
    id: "l-n4-98",
    title: "A Mentorship Chat",
    level: "N4",
    context: "A mentor advises a university student who wants to become a translator",
    text: "A: 大学生[だいがくせい]ですね。将来[しょうらい]何[なに]になりたいですか。\nB: 私[わたし]は翻訳家[ほんやくか]になりたいです。\nA: そうですか。どんな勉強[べんきょう]をしていますか。\nB: 毎日[まいにち]英語[えいご]と日本語[にほんご]を読[よ]んでいます。\nA: いいですね。でも、実践[じっせん]も大切[たいせつ]ですよ。\nB: どうすればいいですか。\nA: 短[みじか]い文章[ぶんしょう]を翻訳[ほんやく]してみましょう。\nB: はい、早速[さっそく]やってみます。",
    translation: "A: You're a university student, right? What do you want to be in the future?\nB: I want to be a translator.\nA: I see. What kind of studying are you doing?\nB: I read English and Japanese every day.\nA: That's good. But practical experience is also important.\nB: What should I do?\nA: Try translating short passages.\nB: Yes, I'll try it right away.",
    questions: [
      {
        q: "What is the student's future goal?",
        choices: ["To become a teacher", "To become a translator", "To become a writer", "To become an interpreter"],
        answerIndex: 1,
        explanation: "B says they want to become a translator (翻訳家になりたい)."
      },
      {
        q: "What does the student do every day?",
        choices: ["Reads English and Japanese", "Writes essays", "Studies kanji", "Watches Japanese dramas"],
        answerIndex: 0,
        explanation: "B reads English and Japanese every day (毎日英語と日本語を読んでいる)."
      },
      {
        q: "What does the mentor say is important besides studying?",
        choices: ["Networking", "Practical experience", "Travel", "Money"],
        answerIndex: 1,
        explanation: "A says practical experience is also important (実践も大切ですよ)."
      },
      {
        q: "What does the mentor suggest the student do?",
        choices: ["Take a class", "Translate short passages", "Read more books", "Watch videos"],
        answerIndex: 1,
        explanation: "A suggests translating short passages (短い文章を翻訳してみましょう)."
      }
    ],
    estMinutes: 4,
    tags: ["study", "advice"]
  },
  {
    id: "l-n4-99",
    title: "At the Bike Repair Shop",
    level: "N4",
    context: "A customer brings a broken bike to a repair shop",
    text: "A: すみません、自転車[じてんしゃ]のブレーキが壊[こわ]れたんですが。\nB: 見[み]せてください。ああ、ワイヤーが切[き]れていますね。\nA: 直[なお]せますか。\nB: はい、できます。部品[ぶひん]を変[か]える必要[ひつよう]があります。\nA: いくらくらいですか。\nB: 三千円[さんぜんえん]くらいです。\nA: じゃ、お願[ねが]いします。\nB: 三十分[さんじゅっぷん]くらいでできます。",
    translation: "A: Excuse me, my bike's brake is broken.\nB: Let me see. Ah, the wire is cut.\nA: Can you fix it?\nB: Yes, I can. A part needs to be replaced.\nA: About how much will it cost?\nB: Around 3,000 yen.\nA: Then please fix it.\nB: It'll take about 30 minutes.",
    questions: [
      {
        q: "What is wrong with the bike?",
        choices: ["The tire is flat", "The brake is broken", "The chain is loose", "The pedal is broken"],
        answerIndex: 1,
        explanation: "A says the bike's brake is broken (自転車のブレーキが壊れた)."
      },
      {
        q: "What is the cause according to the mechanic?",
        choices: ["The tire is worn", "The wire is cut", "The pedal is bent", "The frame is cracked"],
        answerIndex: 1,
        explanation: "B says the wire is cut (ワイヤーが切れています)."
      },
      {
        q: "What needs to be replaced?",
        choices: ["The brake cable", "A part", "The tire", "The wheel"],
        answerIndex: 1,
        explanation: "B says a part needs to be replaced (部品を変える必要がある)."
      },
      {
        q: "How long will the repair take?",
        choices: ["About 10 minutes", "About 20 minutes", "About 30 minutes", "About an hour"],
        answerIndex: 2,
        explanation: "B says the repair will take about 30 minutes (三十分くらいでできます)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "repair"]
  },
  {
    id: "l-n4-100",
    title: "Launching a Podcast",
    level: "N4",
    context: "Two friends discuss plans to start a podcast about Japanese culture",
    text: "A: 来月[らいげつ]からポッドキャストを始[はじ]めようと思[おも]っています。\nB: どんな内容[ないよう]ですか。\nA: 日本[にほん]の文化[ぶんか]について話[はな]します。\nB: 面白[おもしろ]そうですね。どのくらいの頻度[ひんど]でやりますか。\nA: 週[しゅう]に一回[いっかい]の予定[よてい]です。\nB: 私[わたし]も手伝[てつだ]いましょうか。\nA: ええ、ぜひお願[ねが]いします。\nB: じゃ、次[つぎ]の週末[しゅうまつ]に企画[きかく]を立[た]てましょう。",
    translation: "A: I'm thinking of starting a podcast next month.\nB: What kind of content?\nA: I'll talk about Japanese culture.\nB: Sounds interesting. How often will you do it?\nA: Once a week, planned.\nB: Shall I help too?\nA: Yes, please.\nB: Then let's make a plan next weekend.",
    questions: [
      {
        q: "What does A want to start next month?",
        choices: ["A blog", "A podcast", "A YouTube channel", "A newsletter"],
        answerIndex: 1,
        explanation: "A is thinking of starting a podcast next month (ポッドキャストを始めようと思っている)."
      },
      {
        q: "What will the podcast be about?",
        choices: ["Japanese food", "Japanese culture", "Travel tips", "Japanese grammar"],
        answerIndex: 1,
        explanation: "A will talk about Japanese culture (日本の文化について話します)."
      },
      {
        q: "How often will the podcast be released?",
        choices: ["Once a week", "Twice a week", "Once a month", "Every day"],
        answerIndex: 0,
        explanation: "A plans to do it once a week (週に一回の予定です)."
      },
      {
        q: "What will they do next weekend?",
        choices: ["Record the first episode", "Make a plan", "Set up equipment", "Find guests"],
        answerIndex: 1,
        explanation: "B suggests making a plan next weekend (次の週末に企画を立てましょう)."
      }
    ],
    estMinutes: 4,
    tags: ["media", "planning"]
  }
];
