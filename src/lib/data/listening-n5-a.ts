import type { ListeningData } from "@/lib/types";

// N5 listening exercises set A.
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana and punctuation have no brackets.
// Every kanji has inline furigana. text is read aloud by TTS AND shown
// as the transcript.

export const listeningN5A: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n5-01 — Greeting a neighbor (morning)
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-01",
    title: "Greeting a Neighbor",
    level: "N5",
    context: "A resident and a neighbor in the morning",
    text: "A: おはようございます。\nB: おはようございます。お出[で]かけですか。\nA: はい、会社[かいしゃ]へ行[い]きます。\nB: いってらっしゃい。気[き]をつけて。\nA: ありがとう。いってきます。",
    translation: "A: Good morning. B: Good morning. Are you going out? A: Yes, I am going to the office. B: Take care. Be careful. A: Thanks. I am off.",
    questions: [
      {
        q: "Where is A going?",
        choices: ["To a park", "To the office", "To a school", "To a restaurant"],
        answerIndex: 1,
        explanation: "A says 会社[かいしゃ]へ行[い]きます — A is going to the office/company.",
      },
      {
        q: "What time of day is this conversation?",
        choices: ["Morning", "Afternoon", "Evening", "Night"],
        answerIndex: 0,
        explanation: "Both speakers say おはようございます, the morning greeting.",
      },
      {
        q: "What does B say at the end?",
        choices: ["Welcome back", "Be careful", "See you tomorrow", "Please wait"],
        answerIndex: 1,
        explanation: "B says 気[き]をつけて — be careful / take care.",
      },
    ],
    estMinutes: 2,
    tags: ["greeting", "neighborhood"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-02 — Ordering ramen
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-02",
    title: "Ordering Ramen",
    level: "N5",
    context: "A customer and a waiter at a ramen restaurant",
    text: "A: いらっしゃいませ。\nB: ラーメンを一[いっ]つください。\nA: かしこまりました。飲[の]み物[もの]はいかがですか。\nB: お水[みず]でいいです。\nA: はい。少々[しょうしょう]お待[ま]ちください。",
    translation: "A: Welcome. B: One ramen, please. A: Certainly. Would you like a drink? B: Water is fine. A: Yes. Please wait a moment.",
    questions: [
      {
        q: "What did B order to eat?",
        choices: ["Sushi", "Ramen", "Curry", "Bread"],
        answerIndex: 1,
        explanation: "B says ラーメンを一[いっ]つください — one ramen, please.",
      },
      {
        q: "What drink did B want?",
        choices: ["Tea", "Coffee", "Water", "Juice"],
        answerIndex: 2,
        explanation: "B says お水[みず]でいいです — water is fine.",
      },
      {
        q: "What does the waiter say at the end?",
        choices: ["Please pay now", "Please wait a moment", "It is closed", "It is sold out"],
        answerIndex: 1,
        explanation: "The waiter says 少々[しょうしょう]お待[ま]ちください — please wait a moment.",
      },
    ],
    estMinutes: 2,
    tags: ["restaurant", "ordering"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-03 — Train directions at the station
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-03",
    title: "Train Directions at the Station",
    level: "N5",
    context: "A traveler and a station staff member",
    text: "A: すみません。東京[とうきょう]駅[えき]へ行[い]きたいです。\nB: この電車[でんしゃ]で行[い]けます。\nA: どのくらいかかりますか。\nB: 三十分[さんじゅっぷん]ぐらいです。\nA: ありがとうございます。",
    translation: "A: Excuse me. I want to go to Tokyo Station. B: You can go on this train. A: About how long does it take? B: About thirty minutes. A: Thank you.",
    questions: [
      {
        q: "Where does A want to go?",
        choices: ["Osaka Station", "Tokyo Station", "Kyoto Station", "The airport"],
        answerIndex: 1,
        explanation: "A says 東京[とうきょう]駅[えき]へ行[い]きたいです — A wants to go to Tokyo Station.",
      },
      {
        q: "How will A get there?",
        choices: ["By bus", "By taxi", "By this train", "On foot"],
        answerIndex: 2,
        explanation: "B says この電車[でんしゃ]で行[い]けます — you can go on this train.",
      },
      {
        q: "About how long does the trip take?",
        choices: ["About 10 minutes", "About 30 minutes", "About 1 hour", "About 2 hours"],
        answerIndex: 1,
        explanation: "B says 三十分[さんじゅっぷん]ぐらいです — about thirty minutes.",
      },
    ],
    estMinutes: 2,
    tags: ["directions", "station"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-04 — Buying a bento at the convenience store
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-04",
    title: "Buying a Bento",
    level: "N5",
    context: "A customer and a clerk at a convenience store",
    text: "A: いらっしゃいませ。\nB: この弁当[べんとう]をください。\nA: 二百[にひゃく]五十[ごじゅう]円[えん]です。温[あたた]ためますか。\nB: はい、お願[ねが]いします。\nA: レジ袋[ぶくろ]はいりますか。\nB: はい、一[いっ]つください。",
    translation: "A: Welcome. B: This bento, please. A: It is 250 yen. Shall I warm it up? B: Yes, please. A: Do you need a bag? B: Yes, one please.",
    questions: [
      {
        q: "What did B buy?",
        choices: ["A sandwich", "A bento", "Onigiri", "Bread"],
        answerIndex: 1,
        explanation: "B says この弁当[べんとう]をください — this bento, please.",
      },
      {
        q: "How much was the bento?",
        choices: ["150 yen", "250 yen", "500 yen", "1000 yen"],
        answerIndex: 1,
        explanation: "The clerk says 二百[にひゃく]五十[ごじゅう]円[えん]です — 250 yen.",
      },
      {
        q: "Did B want the bento warmed?",
        choices: ["Yes", "No", "Not asked", "Already warm"],
        answerIndex: 0,
        explanation: "B answers はい、お願[ねが]いします — yes, please.",
      },
      {
        q: "How many bags did B want?",
        choices: ["Zero", "One", "Two", "Three"],
        answerIndex: 1,
        explanation: "B says 一[いっ]つください — one please.",
      },
    ],
    estMinutes: 3,
    tags: ["shopping", "convenience store"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-05 — Asking the time
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-05",
    title: "Asking the Time",
    level: "N5",
    context: "Two strangers at the station",
    text: "A: すみません。今[いま]何時[なんじ]ですか。\nB: 三時[さんじ]十[じゅう]分[ぷん]です。\nA: ありがとうございます。電車[でんしゃ]に間[ま]に合[あ]いますか。\nB: ちょっと急[いそ]いだ方[ほう]がいいですよ。\nA: はい、急[いそ]ぎます。",
    translation: "A: Excuse me. What time is it now? B: It is 3:10. A: Thank you. Will I make it in time for the train? B: You had better hurry a little. A: Yes, I will hurry.",
    questions: [
      {
        q: "What time is it now?",
        choices: ["2:10", "3:10", "3:50", "4:10"],
        answerIndex: 1,
        explanation: "B says 三時[さんじ]十[じゅう]分[ぷん]です — 3:10.",
      },
      {
        q: "What does A want to catch?",
        choices: ["A bus", "A train", "A taxi", "A flight"],
        answerIndex: 1,
        explanation: "A asks about the 電車[でんしゃ]に間[ま]に合[あ]いますか — making the train.",
      },
      {
        q: "What advice does B give?",
        choices: ["Wait here", "Hurry up", "Take a taxi", "Buy a ticket"],
        answerIndex: 1,
        explanation: "B says 急[いそ]いだ方[ほう]がいい — you had better hurry.",
      },
    ],
    estMinutes: 2,
    tags: ["time", "station"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-06 — Making weekend plans
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-06",
    title: "Weekend Plans",
    level: "N5",
    context: "Two friends talking at school",
    text: "A: 土曜日[どようび]に何[なに]をしますか。\nB: 友達[ともだち]と映画[えいが]を見[み]に行[い]きます。\nA: いいですね。私[わたし]も行[い]きたいです。\nB: じゃあ、一緒[いっしょ]に行[い]きましょう。\nA: はい、楽[たの]しみですね。",
    translation: "A: What will you do on Saturday? B: I will go see a movie with a friend. A: That is nice. I want to go too. B: Then let us go together. A: Yes, I am looking forward to it.",
    questions: [
      {
        q: "Which day are they talking about?",
        choices: ["Sunday", "Saturday", "Friday", "Monday"],
        answerIndex: 1,
        explanation: "A asks about 土曜日[どようび] — Saturday.",
      },
      {
        q: "What will B do?",
        choices: ["Study at home", "See a movie", "Play sports", "Go shopping"],
        answerIndex: 1,
        explanation: "B says 映画[えいが]を見[み]に行[い]きます — go see a movie.",
      },
      {
        q: "What do they decide at the end?",
        choices: ["To go separately", "To cancel", "To go together", "To go next week"],
        answerIndex: 2,
        explanation: "B says 一緒[いっしょ]に行[い]きましょう — let us go together.",
      },
    ],
    estMinutes: 2,
    tags: ["plans", "friends"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-07 — Borrowing a pen in class
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-07",
    title: "Borrowing a Pen",
    level: "N5",
    context: "Two students in a classroom",
    text: "A: すみません。ペンを忘[わす]れました。\nB: あ、大丈夫[だいじょうぶ]ですよ。これを使[つか]ってください。\nA: ありがとうございます。授業[じゅぎょう]の後[あと]に返[かえ]します。\nB: はい、どうぞ。\nA: すみません。助[たす]かりました。",
    translation: "A: Excuse me. I forgot my pen. B: Oh, no problem. Please use this. A: Thank you. I will return it after class. B: Yes, here you go. A: Sorry. You saved me.",
    questions: [
      {
        q: "What did A forget?",
        choices: ["A notebook", "A pen", "A textbook", "A bag"],
        answerIndex: 1,
        explanation: "A says ペンを忘[わす]れました — I forgot my pen.",
      },
      {
        q: "When will A return the pen?",
        choices: ["Before class", "During class", "After class", "Tomorrow"],
        answerIndex: 2,
        explanation: "A says 授業[じゅぎょう]の後[あと]に返[かえ]します — return it after class.",
      },
      {
        q: "How does A feel at the end?",
        choices: ["Angry", "Worried", "Saved / helped", "Bored"],
        answerIndex: 2,
        explanation: "A says 助[たす]かりました — you saved me / that helped.",
      },
    ],
    estMinutes: 2,
    tags: ["school", "borrowing"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-08 — At the supermarket checkout
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-08",
    title: "At the Supermarket Checkout",
    level: "N5",
    context: "A customer and a cashier at a supermarket",
    text: "A: いらっしゃいませ。カードですか。現金[げんきん]ですか。\nB: 現金[げんきん]で払[はら]います。\nA: 千[せん]円[えん]いただきます。\nB: はい。\nA: 二百[にひゃく]円[えん]のお釣[つり]です。ありがとうございました。",
    translation: "A: Welcome. Will you pay by card or by cash? B: I will pay by cash. A: I receive 1000 yen. B: Here you are. A: 200 yen is your change. Thank you very much.",
    questions: [
      {
        q: "How will B pay?",
        choices: ["By card", "By cash", "By phone", "By coupon"],
        answerIndex: 1,
        explanation: "B says 現金[げんきん]で払[はら]います — pay by cash.",
      },
      {
        q: "How much did B hand to the cashier?",
        choices: ["500 yen", "800 yen", "1000 yen", "1200 yen"],
        answerIndex: 2,
        explanation: "The cashier says 千[せん]円[えん]いただきます — receiving 1000 yen.",
      },
      {
        q: "How much change does B receive?",
        choices: ["100 yen", "200 yen", "300 yen", "500 yen"],
        answerIndex: 1,
        explanation: "The cashier says 二百[にひゃく]円[えん]のお釣[つり]です — 200 yen change.",
      },
      {
        q: "Roughly how much did the purchase cost?",
        choices: ["600 yen", "800 yen", "1000 yen", "1200 yen"],
        answerIndex: 1,
        explanation: "1000 yen paid minus 200 yen change means the purchase was about 800 yen.",
      },
    ],
    estMinutes: 3,
    tags: ["shopping", "checkout"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-09 — Introducing a new friend
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-09",
    title: "Introducing a New Friend",
    level: "N5",
    context: "Three people meeting for the first time",
    text: "A: こちらは山田[やまだ]さんです。\nB: 初[はじ]めまして。山田[やまだ]です。\nC: 初[はじ]めまして。田中[たなか]です。よろしくお願[ねが]いします。\nB: こちらこそ。おいくつですか。\nC: 二十歳[はたち]です。趣味[しゅみ]は音楽[おんがく]です。",
    translation: "A: This is Mr./Ms. Yamada. B: Nice to meet you. I am Yamada. C: Nice to meet you. I am Tanaka. Please be kind. B: Likewise. How old are you? C: I am twenty. My hobby is music.",
    questions: [
      {
        q: "Who is being introduced?",
        choices: ["Tanaka", "Yamada", "A", "Suzuki"],
        answerIndex: 1,
        explanation: "A says こちらは山田[やまだ]さんです — this is Yamada.",
      },
      {
        q: "How old is Tanaka?",
        choices: ["18", "19", "20", "21"],
        answerIndex: 2,
        explanation: "Tanaka says 二十歳[はたち]です — twenty years old.",
      },
      {
        q: "What is Tanaka's hobby?",
        choices: ["Sports", "Reading", "Music", "Cooking"],
        answerIndex: 2,
        explanation: "Tanaka says 趣味[しゅみ]は音楽[おんがく]です — hobby is music.",
      },
    ],
    estMinutes: 2,
    tags: ["introduction", "meeting"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n5-10 — Asking about today's weather
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n5-10",
    title: "Today's Weather",
    level: "N5",
    context: "Two people at home in the morning",
    text: "A: 今日[きょう]の天気[てんき]はどうですか。\nB: 朝[あさ]は雨[あめ]ですが、午後[ごご]は晴[は]れます。\nA: じゃあ、午後[ごご]に洗濯[せんたく]をします。\nB: いいですね。夕方[ゆうがた]はまた曇[くも]りますよ。\nA: そうですか。気[き]をつけます。",
    translation: "A: How is the weather today? B: It is raining in the morning, but it will be sunny in the afternoon. A: Then I will do the laundry in the afternoon. B: Good idea. It will get cloudy again in the evening. A: I see. I will be careful.",
    questions: [
      {
        q: "What is the weather like in the morning?",
        choices: ["Sunny", "Cloudy", "Raining", "Snowing"],
        answerIndex: 2,
        explanation: "B says 朝[あさ]は雨[あめ] — rain in the morning.",
      },
      {
        q: "When will it be sunny?",
        choices: ["Morning", "Afternoon", "Evening", "Night"],
        answerIndex: 1,
        explanation: "B says 午後[ごご]は晴[は]れます — sunny in the afternoon.",
      },
      {
        q: "What will A do in the afternoon?",
        choices: ["Go out", "Do the laundry", "Cook", "Sleep"],
        answerIndex: 1,
        explanation: "A says 午後[ごご]に洗濯[せんたく]をします — do laundry in the afternoon.",
      },
      {
        q: "What will the weather be in the evening?",
        choices: ["Sunny", "Raining", "Cloudy", "Snowing"],
        answerIndex: 2,
        explanation: "B says 夕方[ゆうがた]はまた曇[くも]ります — cloudy again in the evening.",
      },
    ],
    estMinutes: 3,
    tags: ["weather", "daily life"],
  },
];
