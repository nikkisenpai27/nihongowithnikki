import type { ListeningData } from "@/lib/types";

export const listeningN4D: ListeningData[] = [
  {
    id: "l-n4-31",
    title: "Renting a Car",
    level: "N4",
    context: "At a car rental counter",
    text: "A: すみません、車[くるま]を借[か]りたいんですが。\nB: いらっしゃいませ。何日[なんにち]くらい借[か]りたいですか。\nA: 三日間[みっかかん]お願[ねが]いします。\nB: 分[わ]かりました。運転[うんてん]免許証[めんきょしょう]を見[み]せていただけますか。\nA: はい、これです。保険[ほけん]に入[はい]った方[ほう]がいいですか。\nB: はい、万[まん]が一[いち]のことを考[かんが]えて、入[はい]ることをお勧[すす]めします。\nA: じゃ、お願[ねが]いします。いくらになりますか。\nB: 三日間[みっかかん]で一万[いちまん]八千[はっせん]円[えん]になります。",
    translation: "A: Excuse me, I'd like to rent a car.\nB: Welcome. How many days would you like to rent it for?\nA: Three days, please.\nB: Understood. Could you show me your driver's license?\nA: Yes, here it is. Should I get insurance?\nB: Yes, considering worst-case scenarios, I recommend getting it.\nA: Then please. How much will it be?\nB: Three days comes to 18,000 yen.",
    questions: [
      {
        q: "How many days does the customer want to rent the car?",
        choices: ["One day", "Two days", "Three days", "Five days"],
        answerIndex: 2,
        explanation: "A asks to rent the car for three days (三日間)."
      },
      {
        q: "What does the clerk recommend?",
        choices: ["A GPS device", "Insurance", "A child seat", "An ETC card"],
        answerIndex: 1,
        explanation: "B recommends getting insurance in case of emergencies."
      },
      {
        q: "How much does it cost for three days?",
        choices: ["8,000 yen", "12,000 yen", "18,000 yen", "28,000 yen"],
        answerIndex: 2,
        explanation: "B says three days comes to 18,000 yen (一万八千円)."
      }
    ],
    estMinutes: 4,
    tags: ["rental", "shopping"]
  },
  {
    id: "l-n4-32",
    title: "Joining a Cooking Class",
    level: "N4",
    context: "Two friends talking about a weekend cooking class",
    text: "A: 今度[こんど]の週末[しゅうまつ]、料理[りょうり]教室[きょうしつ]に参加[さんか]しようと思[おも]っています。\nB: いいですね。どこで習[なら]うんですか。\nA: 駅[えき]の近[ちか]くの教室[きょうしつ]です。日本料理[にほんりょうり]を教[おし]えてくれます。\nB: 誰[だれ]と行[い]くんですか。\nA: 一人[ひとり]で行[い]く予定[よてい]ですが、気[き]になりますか。\nB: いいえ。私[わたし]も本当[ほんとう]に行[い]きたいです。\nA: じゃ、一緒[いっしょ]に参加[さんか]しませんか。\nB: ぜひお願[ねが]いします。何[なに]を作[つく]るか楽[たの]しみですね。",
    translation: "A: I'm thinking of joining a cooking class this weekend.\nB: That sounds nice. Where will you learn?\nA: At a class near the station. They teach Japanese cooking.\nB: Who are you going with?\nA: I plan to go alone. Is that a problem?\nB: No. I actually want to go too.\nA: Then why don't we join together?\nB: Please, I'd love to. I'm looking forward to what we'll make.",
    questions: [
      {
        q: "Where is the cooking class located?",
        choices: ["Near the school", "Near the station", "Near the park", "Near home"],
        answerIndex: 1,
        explanation: "A says the class is near the station (駅の近く)."
      },
      {
        q: "Who was A originally planning to go with?",
        choices: ["Alone", "With B", "With family", "With a teacher"],
        answerIndex: 0,
        explanation: "A says he planned to go alone (一人で行く予定)."
      },
      {
        q: "What kind of cooking does the class teach?",
        choices: ["Italian", "Chinese", "Japanese", "French"],
        answerIndex: 2,
        explanation: "A says the class teaches Japanese cooking (日本料理)."
      }
    ],
    estMinutes: 4,
    tags: ["hobby", "plans"]
  },
  {
    id: "l-n4-33",
    title: "Language Exchange Partner",
    level: "N4",
    context: "A student talks about finding a language exchange partner",
    text: "A: 最近[さいきん]、語学[ごがく]交換[こうかん]パートナーを見[み]つけました。\nB: すごいですね。どこで見[み]つけたんですか。\nA: 大学[だいがく]の掲示板[けいじばん]でした。彼[かれ]は日本語[にほんご]を、私[わたし]は英語[えいご]を勉強[べんきょう]しています。\nB: どのくらい会[あ]うんですか。\nA: 週[しゅう]に一回[いっかい]、カフェで会[あ]って、お互[たが]いに教[おし]え合[あ]います。\nB: いいですね。私[わたし]もパートナーが欲[ほ]しいです。\nA: じゃ、今度[こんど]一緒[いっしょ]に紹介[しょうかい]しましょうか。\nB: ありがとう。お願[ねが]いできると嬉[うれ]しいです。",
    translation: "A: I recently found a language exchange partner.\nB: That's great. Where did you find him?\nA: On the university bulletin board. He studies Japanese, and I study English.\nB: How often do you meet?\nA: Once a week at a cafe, and we teach each other.\nB: Nice. I want a partner too.\nA: Then shall I introduce you next time?\nB: Thanks. I'd be happy if you could.",
    questions: [
      {
        q: "Where did A find the language partner?",
        choices: ["Online", "At a cafe", "On the university bulletin board", "Through a friend"],
        answerIndex: 2,
        explanation: "A says he found the partner on the university bulletin board (大学の掲示板)."
      },
      {
        q: "How often do A and the partner meet?",
        choices: ["Every day", "Twice a week", "Once a week", "Once a month"],
        answerIndex: 2,
        explanation: "A says they meet once a week (週に一回)."
      },
      {
        q: "What is A studying?",
        choices: ["Japanese", "English", "Chinese", "Korean"],
        answerIndex: 1,
        explanation: "A says he studies English, while the partner studies Japanese."
      }
    ],
    estMinutes: 3,
    tags: ["study", "friends"]
  },
  {
    id: "l-n4-34",
    title: "Gym Membership",
    level: "N4",
    context: "At the gym signing up for a membership",
    text: "A: ジムに入[はい]りたいんですが、料金[りょうきん]はいくらですか。\nB: 月[つき]に五千[ごせん]円[えん]です。入会金[にゅうかいきん]は一万[いちまん]円[えん]です。\nA: 一年[いちねん]の契約[けいやく]ですか。\nB: いいえ、半年[はんとし]の契約[けいやく]になります。\nA: トレーナーをつけてもらうことはできますか。\nB: はい、可能[かのう]です。ただし別[べつ]に費用[ひよう]が必要[ひつよう]です。\nA: 分[わ]かりました。まず見学[けんがく]してもいいですか。\nB: もちろんです。今[いま]から案内[あんない]しましょう。",
    translation: "A: I'd like to join the gym. How much is the fee?\nB: It's 5,000 yen per month. The joining fee is 10,000 yen.\nA: Is it a one-year contract?\nB: No, it's a six-month contract.\nA: Can I have a personal trainer?\nB: Yes, that's possible. However, a separate fee is required.\nA: I see. Can I look around first?\nB: Of course. I'll show you around now.",
    questions: [
      {
        q: "How much is the monthly membership fee?",
        choices: ["3,000 yen", "5,000 yen", "8,000 yen", "10,000 yen"],
        answerIndex: 1,
        explanation: "B says the monthly fee is 5,000 yen (五千円)."
      },
      {
        q: "How long is the contract?",
        choices: ["Three months", "Six months", "One year", "Two years"],
        answerIndex: 1,
        explanation: "B says the contract is for half a year (半年), meaning six months."
      },
      {
        q: "What requires an additional fee?",
        choices: ["Towel rental", "A personal trainer", "Locker use", "Shower use"],
        answerIndex: 1,
        explanation: "B says a trainer is possible but requires a separate fee (別に費用が必要)."
      }
    ],
    estMinutes: 4,
    tags: ["fitness", "shopping"]
  },
  {
    id: "l-n4-35",
    title: "Going to a Concert",
    level: "N4",
    context: "Two friends discussing attending a concert",
    text: "A: 来週[らいしゅう]、コンサートに行[い]きませんか。\nB: いいですね。誰[だれ]のコンサートですか。\nA: 山田[やまだ]太郎[たろう]のです。前[まえ]から楽[たの]しみにしていました。\nB: チケットはもう買[か]いましたか。\nA: はい、二枚[にまい]買[か]いました。一緒[いっしょ]に行[い]けますよ。\nB: ありがとう。いくらでしたか。\nA: 一枚[いちまい]六千[ろくせん]円[えん]です。後[あと]で払[はら]ってくれればいいですよ。\nB: 分[わ]かりました。当日[とうじつ]は何時[なんじ]に会[あ]いましょうか。",
    translation: "A: Would you like to go to a concert next week?\nB: Sounds nice. Whose concert is it?\nA: Taro Yamada's. I've been looking forward to it for a while.\nB: Have you bought the tickets yet?\nA: Yes, I bought two. We can go together.\nB: Thanks. How much were they?\nA: 6,000 yen each. You can just pay me back later.\nB: Got it. What time shall we meet on the day?",
    questions: [
      {
        q: "Whose concert is it?",
        choices: ["A band's", "Taro Yamada's", "An orchestra's", "A friend's"],
        answerIndex: 1,
        explanation: "A says it is Taro Yamada's concert (山田太郎)."
      },
      {
        q: "How many tickets did A buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "A says he bought two tickets (二枚)."
      },
      {
        q: "How much is one ticket?",
        choices: ["4,000 yen", "5,000 yen", "6,000 yen", "8,000 yen"],
        answerIndex: 2,
        explanation: "A says each ticket costs 6,000 yen (六千円)."
      }
    ],
    estMinutes: 3,
    tags: ["music", "plans"]
  },
  {
    id: "l-n4-36",
    title: "Buying Glasses",
    level: "N4",
    context: "At the optician buying new glasses",
    text: "A: めがねを作[つく]りたいんですが。\nB: いらっしゃいませ。度[ど]はお持[も]ちですか。\nA: はい、これが前[まえ]の処方箋[しょほうせん]です。\nB: 分[わ]かりました。どのようなフレームがいいですか。\nA: 軽[かる]いものがいいです。\nB: こちらはプラスチックで軽[かる]いですよ。色[いろ]は何色[なにいろ]がいいですか。\nA: 黒[くろ]がいいです。どのくらい日[ひ]がかかりますか。\nB: 五日[いつか]ほどで出来[でき]上[あ]がります。",
    translation: "A: I'd like to have a pair of glasses made.\nB: Welcome. Do you have your prescription?\nA: Yes, this is my previous prescription.\nB: Understood. What kind of frame would you like?\nA: A light one, please.\nB: This one is plastic and light. What color would you like?\nA: Black, please. About how many days will it take?\nB: It will be ready in about five days.",
    questions: [
      {
        q: "What does the customer want to do?",
        choices: ["Buy contact lenses", "Repair a frame", "Have glasses made", "Get an eye exam"],
        answerIndex: 2,
        explanation: "A says he wants to have glasses made (めがねを作りたい)."
      },
      {
        q: "What kind of frame does the customer want?",
        choices: ["A heavy one", "A metal one", "A colorful one", "A light one"],
        answerIndex: 3,
        explanation: "A says he wants a light frame (軽いものがいい)."
      },
      {
        q: "How long will it take for the glasses to be ready?",
        choices: ["About three days", "About five days", "About a week", "About ten days"],
        answerIndex: 1,
        explanation: "B says the glasses will be ready in about five days (五日ほど)."
      }
    ],
    estMinutes: 4,
    tags: ["shopping", "health"]
  },
  {
    id: "l-n4-37",
    title: "Neighborhood Association Meeting",
    level: "N4",
    context: "Two neighbors discussing a town association meeting",
    text: "A: 今度[こんど]の町内会[ちょうないかい]の会議[かいぎ]に出[で]ますか。\nB: ええ、出[で]るつもりです。何[なに]の議題[ぎだい]ですか。\nA: ゴミの分別[ぶんべつ]ルールについてです。\nB: ああ、最近[さいきん]変[か]わりましたよね。\nA: はい。新[あたら]しいルールが分[わ]かりにくいそうです。\nB: 私[わたし]も賛成[さんせい]です。何時[なんじ]からですか。\nA: 七時[しちじ]からです。会議[かいぎ]の後[あと]、お茶[ちゃ]会[かい]もありますよ。\nB: じゃ、一緒[いっしょ]に行[い]きましょう。",
    translation: "A: Will you attend the next neighborhood association meeting?\nB: Yes, I plan to. What's on the agenda?\nA: It's about the garbage sorting rules.\nB: Ah, they changed recently, didn't they?\nA: Yes. I heard the new rules are hard to understand.\nB: I agree. What time does it start?\nA: From seven o'clock. After the meeting, there's a tea gathering too.\nB: Then let's go together.",
    questions: [
      {
        q: "What is the meeting's agenda?",
        choices: ["Festival planning", "Road repair", "Garbage sorting rules", "Parking rules"],
        answerIndex: 2,
        explanation: "A says the agenda is about garbage sorting rules (ゴミの分別ルール)."
      },
      {
        q: "What time does the meeting start?",
        choices: ["Six o'clock", "Seven o'clock", "Eight o'clock", "Nine o'clock"],
        answerIndex: 1,
        explanation: "A says the meeting starts at seven o'clock (七時から)."
      },
      {
        q: "What happens after the meeting?",
        choices: ["A dinner", "A party", "Nothing special", "A tea gathering"],
        answerIndex: 3,
        explanation: "A says there is a tea gathering after the meeting (お茶会)."
      }
    ],
    estMinutes: 4,
    tags: ["community", "meeting"]
  },
  {
    id: "l-n4-38",
    title: "At the Dry Cleaner",
    level: "N4",
    context: "Dropping off clothes at the dry cleaner",
    text: "A: すみません、このコートをクリーニングに出[だ]したいんですが。\nB: はい。シミがついていますね。いつまでに仕上[しあ]がりますか。\nA: 来週[らいしゅう]の金曜日[きんようび]までにお願[ねが]いします。\nB: 分[わ]かりました。このシミは特別[とくべつ]な処理[しょり]が必要[ひつよう]です。\nA: いくらかかりますか。\nB: 二千[にせん]五百[ごひゃく]円[えん]になります。\nA: じゃ、お願[ねが]いします。領収証[りょうしゅうしょう]をくれますか。\nB: はい、こちらです。お名前[なまえ]を書[か]いてください。",
    translation: "A: Excuse me, I'd like to drop off this coat for dry cleaning.\nB: Sure. There's a stain on it. When do you need it by?\nA: By next Friday, please.\nB: Understood. This stain requires special treatment.\nA: How much will it cost?\nB: It will be 2,500 yen.\nA: Then please. Can you give me a receipt?\nB: Yes, here you go. Please write your name.",
    questions: [
      {
        q: "What does the customer want cleaned?",
        choices: ["A shirt", "A suit", "A coat", "A dress"],
        answerIndex: 2,
        explanation: "A wants to dry clean a coat (コート)."
      },
      {
        q: "When does the customer need it back?",
        choices: ["By this Friday", "By next Friday", "By next month", "By tomorrow"],
        answerIndex: 1,
        explanation: "A asks to have it ready by next Friday (来週の金曜日まで)."
      },
      {
        q: "How much will the cleaning cost?",
        choices: ["2,000 yen", "2,500 yen", "3,000 yen", "3,500 yen"],
        answerIndex: 1,
        explanation: "B says the cost will be 2,500 yen (二千五百円)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "clothing"]
  },
  {
    id: "l-n4-39",
    title: "Applying for a Scholarship",
    level: "N4",
    context: "A student discusses applying for a scholarship",
    text: "A: 奨学金[しょうがくきん]に申[もう]し込[こ]もうと思[おも]っています。\nB: いいですね。どこの奨学金[しょうがくきん]ですか。\nA: 大学[だいがく]が提供[ていきょう]しているものです。\nB: 締[し]め切[き]りはいつですか。\nA: 来月[らいげつ]の十五日[じゅうごにち]です。まだ間[ま]に合[あ]います。\nB: 必要[ひつよう]な書類[しょるい]は何[なん]ですか。\nA: 成績[せいせき]証明書[しょうめいしょ]と推薦状[すいせんじょう]です。\nB: じゃ、早[はや]く準備[じゅんび]した方[ほう]がいいですよ。\nA: そうですね。今度[こんど]の週末[しゅうまつ]に取[と]りかかります。",
    translation: "A: I'm thinking of applying for a scholarship.\nB: That's nice. Which scholarship is it?\nA: One offered by the university.\nB: When is the deadline?\nA: The 15th of next month. There's still time.\nB: What documents are required?\nA: A transcript and a recommendation letter.\nB: Then you'd better prepare early.\nA: Right. I'll start working on it this weekend.",
    questions: [
      {
        q: "Which scholarship is A applying for?",
        choices: ["A government scholarship", "A private company scholarship", "A university scholarship", "A foreign scholarship"],
        answerIndex: 2,
        explanation: "A says it is a scholarship offered by the university (大学が提供している)."
      },
      {
        q: "When is the deadline?",
        choices: ["The 15th of next month", "The 5th of next month", "The end of next month", "The 15th of this month"],
        answerIndex: 0,
        explanation: "A says the deadline is the 15th of next month (来月の十五日)."
      },
      {
        q: "What documents are needed?",
        choices: ["ID and a photo", "Only a transcript", "Only a recommendation letter", "A transcript and a recommendation letter"],
        answerIndex: 3,
        explanation: "A says a transcript and a recommendation letter are required (成績証明書と推薦状)."
      }
    ],
    estMinutes: 4,
    tags: ["study", "money"]
  },
  {
    id: "l-n4-40",
    title: "A Podcast Recommendation",
    level: "N4",
    context: "A friend recommends a podcast about Japanese culture",
    text: "A: 最近[さいきん]、面白[おもしろ]いポッドキャストを見[み]つけました。\nB: どんなテーマですか。\nA: 日本[にほん]の文化[ぶんか]について話[はな]す番組[ばんぐみ]です。\nB: どこで聴[き]けますか。\nA: スマホのアプリで無料[むりょう]で聴[き]けますよ。\nB: どのくらい長[なが]さですか。\nA: 一回[いっかい]三十分[さんじゅっぷん]くらいです。毎週[まいしゅう]新[あたら]しい話[はなし]が出[で]ます。\nB: いいですね。私[わたし]も聴[き]いてみます。\nA: きっと好[す]きになると思[おも]いますよ。",
    translation: "A: I recently found an interesting podcast.\nB: What's the theme?\nA: It's a show that talks about Japanese culture.\nB: Where can I listen to it?\nA: You can listen for free on a smartphone app.\nB: About how long is it?\nA: About 30 minutes per episode. A new one comes out every week.\nB: Nice. I'll try listening to it too.\nA: I'm sure you'll like it.",
    questions: [
      {
        q: "What is the podcast about?",
        choices: ["Travel", "Cooking", "Sports", "Japanese culture"],
        answerIndex: 3,
        explanation: "A says the podcast talks about Japanese culture (日本の文化)."
      },
      {
        q: "Where can you listen to the podcast?",
        choices: ["On a paid website", "On the radio only", "On a free smartphone app", "On CD only"],
        answerIndex: 2,
        explanation: "A says you can listen for free on a smartphone app (スマホのアプリで無料で聴けます)."
      },
      {
        q: "How long is each episode?",
        choices: ["About 30 minutes", "About 10 minutes", "About 20 minutes", "About 60 minutes"],
        answerIndex: 0,
        explanation: "A says each episode is about 30 minutes (三十分くらい)."
      }
    ],
    estMinutes: 3,
    tags: ["media", "culture"]
  }
];
