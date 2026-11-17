import type { ListeningData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N4-level listening dialogues (slightly more complex than N5).
// N4 grammar targets: 〜ながら, 〜かもしれません, conditionals (〜たら/〜ば),
// polite/humble forms, 〜ておく, 〜てしまう, 〜方[ほう]がいい, 〜そうだ (hearsay).

export const listeningN4A: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n4-01 — Discussing a project deadline at work
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-01",
    title: "プロジェクトの期限[きげん]",
    level: "N4",
    context: "At the office — a manager and a staff member discuss a deadline",
    text: "A: 田中[たなか]さん、来週[らいしゅう]の金曜日[きんようび]までにこのプロジェクトを終[お]わらせてください。\nB: はい。でも、今週[こんしゅう]は忙[いそが]しいので、少[すこ]し時間[じかん]が足[た]りないかもしれません。\nA: そうですか。もし終[お]わらなかったら、山田[やまだ]さんに手伝[てつだ]ってもらってください。\nB: わかりました。他[ほか]の仕事[しごと]をしながら、進[すす]めます。\nA: ありがとうございます。できたら、私[わたし]に見[み]せてください。",
    translation: "A: Tanaka-san, please finish this project by next Friday.\nB: Yes. But this week is busy, so I might not have enough time.\nA: I see. If you can't finish it, please have Yamada-san help you.\nB: Understood. I'll proceed while doing my other work.\nA: Thank you. When it's done, please show it to me.",
    questions: [
      {
        q: "When is the project deadline?",
        choices: ["Next Friday", "This Friday", "Next Monday", "Today"],
        answerIndex: 0,
        explanation: "A says 来週の金曜日までに (by next Friday)."
      },
      {
        q: "What does Tanaka say about this week?",
        choices: ["It is relaxed", "It is busy and time may be short", "It is a holiday", "It is too quiet"],
        answerIndex: 1,
        explanation: "Tanaka says 今週は忙しいので、少し時間が足りないかもしれません (busy, might not have enough time)."
      },
      {
        q: "What should Tanaka do if he cannot finish?",
        choices: ["Work overtime alone", "Ask Yamada-san to help", "Quit the project", "Email the client"],
        answerIndex: 1,
        explanation: "A says もし終わらなかったら、山田さんに手伝ってもらってください (have Yamada-san help)."
      },
      {
        q: "How will Tanaka proceed with the work?",
        choices: ["After finishing everything else", "While doing other work", "Only on weekends", "With the client"],
        answerIndex: 1,
        explanation: "He says 他の仕事をしながら、進めます (proceed while doing other work), using 〜ながら."
      }
    ],
    estMinutes: 3,
    tags: ["work", "deadlines"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-02 — Making a hotel reservation by phone
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-02",
    title: "ホテルの予約[よやく]",
    level: "N4",
    context: "On the phone — booking a hotel room",
    text: "A: はい、ホテル桜[さくら]でございます。\nB: 来月[らいげつ]の十五日[じゅうごにち]から二日間[ふつかかん]、部屋[へや]を予約[よやく]したいのですが。\nA: はい、お一人[ひとり]様[さま]ですか。\nB: いいえ、二人[ふたり]です。シングルルームを二[ふた]つお願[ねが]いします。\nA: 少[しょう]々お待[ま]ください。はい、空[あ]いています。一泊[いっぱく]一万[いちまん]円[えん]になります。\nB: じゃ、お願[ねが]いします。",
    translation: "A: Yes, this is Hotel Sakura.\nB: I'd like to reserve a room for two nights starting the 15th of next month.\nA: Yes, will it be for one guest?\nB: No, two people. Two single rooms, please.\nA: Please wait a moment. Yes, we have availability. It's 10,000 yen per night.\nB: Then please go ahead.",
    questions: [
      {
        q: "How many nights does the caller want to stay?",
        choices: ["One night", "Two nights", "Three nights", "Fifteen nights"],
        answerIndex: 1,
        explanation: "B says 二日間 (two nights)."
      },
      {
        q: "How many rooms does the caller request?",
        choices: ["One single room", "Two single rooms", "One double room", "Two double rooms"],
        answerIndex: 1,
        explanation: "B asks for シングルルームを二つ (two single rooms)."
      },
      {
        q: "What is the price per night?",
        choices: ["5,000 yen", "8,000 yen", "10,000 yen", "15,000 yen"],
        answerIndex: 2,
        explanation: "A says 一泊一万円になります (10,000 yen per night)."
      }
    ],
    estMinutes: 4,
    tags: ["travel", "phone"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-03 — Talking about a movie recommendation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-03",
    title: "映画[えいが]の薦[すす]め",
    level: "N4",
    context: "Between coworkers — recommending a movie",
    text: "A: 山田[やまだ]さん、週末[しゅうまつ]に何[なに]をしましたか。\nB: 友達[ともだち]と映画[えいが]を見[み]に行[い]きました。「星[ほし]の旅[たび]」という映画[えいが]でした。\nA: あ、それ、面白[おもしろ]かったですか。\nB: はい、とても面白[おもしろ]かったです。でも、少[すこ]し長[なが]かったかもしれません。\nA: じゃ、私[わたし]も見[み]に行[い]こうと思[おも]います。予約[よやく]した方[ほう]がいいですか。\nB: ええ。人気[にんき]があるので、前[まえ]に買[か]っておいた方[ほう]がいいですよ。",
    translation: "A: Yamada-san, what did you do over the weekend?\nB: I went to see a movie with a friend. It was called \"Star Journey.\"\nA: Oh, was it interesting?\nB: Yes, it was very interesting. But it might have been a bit long.\nA: Then I think I'll go see it too. Should I make a reservation?\nB: Yes. It's popular, so it's better to buy tickets in advance.",
    questions: [
      {
        q: "What movie did Yamada see?",
        choices: ["Star Journey", "Night Train", "Spring Path", "Sea Wind"],
        answerIndex: 0,
        explanation: "B says 「星の旅」という映画でした (a movie called Star Journey)."
      },
      {
        q: "What did Yamada think of the movie?",
        choices: ["Boring and short", "Interesting but a bit long", "Too short", "Scary"],
        answerIndex: 1,
        explanation: "Yamada says とても面白かったですが、少し長かったかもしれません (interesting, but might be a bit long)."
      },
      {
        q: "What advice does Yamada give?",
        choices: ["Go on a weekday", "Buy tickets in advance", "Bring a friend", "Avoid weekends"],
        answerIndex: 1,
        explanation: "Yamada says 前に買っておいた方がいい (it's better to buy in advance), using 〜ておく and 〜方がいい."
      }
    ],
    estMinutes: 3,
    tags: ["movies", "recommendations"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-04 — Planning a company trip
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-04",
    title: "社員旅行[しゃいんりょこう]の計画[けいかく]",
    level: "N4",
    context: "In a meeting — planning a company trip",
    text: "A: 皆[みな]さん、来月[らいげつ]の社員旅行[しゃいんりょこう]について話[はな]しましょう。\nB: どこへ行[い]きますか。\nA: 温泉[おんせん]はどうですか。箱根[はこね]か熱海[あたみ]へ行[い]こうと思[おも]っています。\nB: 箱根[はこね]がいいです。以前[いぜん]、一度[いちど]行[い]ったことがあります。\nA: じゃ、二泊[にはく]三日[みっか]にしましょう。泊[と]まるホテルは私[わたし]が予約[よやく]します。\nB: 楽[たの]しみにしています。",
    translation: "A: Everyone, let's talk about next month's company trip.\nB: Where are we going?\nA: How about a hot spring? I'm thinking of going to Hakone or Atami.\nB: Hakone sounds good. I've been there once before.\nA: Then let's make it two nights and three days. I'll book the hotel we stay at.\nB: I'm looking forward to it.",
    questions: [
      {
        q: "Where will the company trip go?",
        choices: ["Atami", "Hakone", "Tokyo", "Kyoto"],
        answerIndex: 1,
        explanation: "B says 箱根がいいです (Hakone is good), and A accepts."
      },
      {
        q: "How long will the trip be?",
        choices: ["One night, two days", "Two nights, three days", "Three nights, four days", "Day trip"],
        answerIndex: 1,
        explanation: "A says 二泊三日にしましょう (two nights, three days)."
      },
      {
        q: "What has B experienced before?",
        choices: ["Visited Hakone once", "Stayed in Atami twice", "Worked at a hotel", "Lived in Hakone"],
        answerIndex: 0,
        explanation: "B says 以前、一度行ったことがあります (I've been there once before), using 〜たことがある."
      }
    ],
    estMinutes: 4,
    tags: ["travel", "work"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-05 — A doctor giving health advice
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-05",
    title: "医者[いしゃ]のアドバイス",
    level: "N4",
    context: "At a clinic — a patient describes symptoms and gets advice",
    text: "A: 先生[せんせい]、最近[さいきん]よく頭[あたま]が痛[いた]いんです。\nB: 毎日[まいにち]どのくらい寝[ね]ていますか。\nA: 五時間[ごじかん]ぐらいです。仕事[しごと]が忙[いそが]しくて、夜[よる]遅[おそ]くまで起[お]きています。\nB: それが原因[げんいん]かもしれません。もっと寝[ね]て、野菜[やさい]も多[おお]く食[た]べてください。\nA: 運動[うんどう]もした方[ほう]がいいですか。\nB: ええ、軽[かる]い運動[うんどう]をしながら、ストレスを減[へ]らしてください。",
    translation: "A: Doctor, I've been having a lot of headaches lately.\nB: How much do you sleep each day?\nA: About five hours. Work is busy, so I stay up late.\nB: That might be the cause. Please sleep more and eat more vegetables.\nA: Should I also exercise?\nB: Yes, please reduce stress while doing light exercise.",
    questions: [
      {
        q: "What is the patient's symptom?",
        choices: ["Stomachache", "Headache", "Sore throat", "Back pain"],
        answerIndex: 1,
        explanation: "The patient says よく頭が痛いんです (I often have headaches)."
      },
      {
        q: "How much does the patient sleep each day?",
        choices: ["About three hours", "About five hours", "About eight hours", "About ten hours"],
        answerIndex: 1,
        explanation: "The patient says 五時間ぐらいです (about five hours)."
      },
      {
        q: "What does the doctor say might be the cause?",
        choices: ["Lack of sleep", "Too much exercise", "Bad eyesight", "Cold weather"],
        answerIndex: 0,
        explanation: "The doctor says それが原因かもしれません (that might be the cause), referring to the short sleep."
      },
      {
        q: "How does the doctor recommend reducing stress?",
        choices: ["By sleeping less", "By working more", "By doing light exercise", "By taking medicine"],
        answerIndex: 2,
        explanation: "The doctor says 軽い運動をしながら、ストレスを減らしてください (reduce stress while doing light exercise), using 〜ながら."
      }
    ],
    estMinutes: 4,
    tags: ["health", "advice"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-06 — At the bank opening an account
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-06",
    title: "銀行[ぎんこう]で口座[こうざ]を開[ひら]く",
    level: "N4",
    context: "At a bank — opening a new account",
    text: "A: いらっしゃいませ。何[なに]をお手伝[てつだ]いしましょうか。\nB: 新[あたら]しい口座[こうざ]を開[ひら]きたいです。\nA: こちらにお名前[なまえ]とご住所[じゅうしょ]を書[か]いてください。\nB: 通帳[つうちょう]はもらえますか。\nA: はい。カードは一週間[いっしゅうかん]ぐらいで郵送[ゆうそう]します。身分[みぶん]証明[しょうめい]書[しょ]はお持[も]ちですか。\nB: はい、私[わたし]の運転[うんてん]免許[めんきょ]証[しょう]です。",
    translation: "A: Welcome. How can I help you?\nB: I'd like to open a new account.\nA: Please write your name and address here.\nB: Can I get a bankbook?\nA: Yes. We'll mail the card in about a week. Do you have identification?\nB: Yes, here is my driver's license.",
    questions: [
      {
        q: "What does the customer want to do?",
        choices: ["Withdraw money", "Open a new account", "Change an address", "Apply for a loan"],
        answerIndex: 1,
        explanation: "The customer says 新しい口座を開きたいです (I want to open a new account)."
      },
      {
        q: "When will the cash card arrive?",
        choices: ["In a few days", "In about a week", "In two weeks", "In one month"],
        answerIndex: 1,
        explanation: "The teller says カードは一週間ぐらいで郵送します (we'll mail the card in about a week)."
      },
      {
        q: "What identification does the customer show?",
        choices: ["Passport", "Health insurance card", "Driver's license", "Student ID"],
        answerIndex: 2,
        explanation: "The customer says 私の運転免許証です (my driver's license)."
      }
    ],
    estMinutes: 4,
    tags: ["banking", "formal"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-07 — Discussing a part-time job
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-07",
    title: "アルバイトについて",
    level: "N4",
    context: "Two students — talking about a part-time job",
    text: "A: リーさん、アルバイトはどうですか。\nB: とてもいいです。コンビニで働[はたら]いています。\nA: 週[しゅう]に何回[なんかい]働[はたら]きますか。\nB: 三回[さんかい]です。夜[よる]が多[おお]いです。\nA: 大変[たいへん]じゃないですか。\nB: 少[すこ]し疲[つか]れますが、時給[じきゅう]がいいので頑張[がんば]っています。来月[らいげつ]からもっと働[はたら]くかもしれません。",
    translation: "A: Lee-san, how is your part-time job?\nB: It's very good. I work at a convenience store.\nA: How many times a week do you work?\nB: Three times. Mostly at night.\nA: Isn't it tough?\nB: I get a little tired, but the hourly wage is good so I keep at it. I might work more from next month.",
    questions: [
      {
        q: "Where does Lee work part-time?",
        choices: ["A restaurant", "A convenience store", "A bookstore", "A café"],
        answerIndex: 1,
        explanation: "Lee says コンビニで働いています (I work at a convenience store)."
      },
      {
        q: "How often does Lee work each week?",
        choices: ["Once", "Twice", "Three times", "Five times"],
        answerIndex: 2,
        explanation: "Lee says 週に三回働きます (three times a week)."
      },
      {
        q: "Why does Lee keep working despite being tired?",
        choices: ["The coworkers are kind", "The hourly wage is good", "It is close to school", "The work is easy"],
        answerIndex: 1,
        explanation: "Lee says 時給がいいので頑張っています (the hourly wage is good, so I keep at it)."
      },
      {
        q: "What might Lee do next month?",
        choices: ["Quit the job", "Work more shifts", "Change stores", "Take a break"],
        answerIndex: 1,
        explanation: "Lee says 来月からもっと働くかもしれません (I might work more from next month), using 〜かもしれません."
      }
    ],
    estMinutes: 3,
    tags: ["work", "students"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-08 — Asking about a train delay
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-08",
    title: "電車[でんしゃ]が遅[おく]れた",
    level: "N4",
    context: "At a train station — asking about a delay",
    text: "A: すみません、電車[でんしゃ]が遅[おく]れていますね。何[なに]があったんですか。\nB: 事故[じこ]があったそうです。十分[じゅっぷん]ぐらい遅[おく]れるそうです。\nA: 仕事[しごと]に遅[おく]れちゃいます。連絡[れんらく]した方[ほう]がいいですね。\nB: 会社[かいしゃ]に電話[でんわ]しておいた方[ほう]がいいですよ。\nA: もう少[すこ]し待[ま]ちましょう。\nB: 次[つぎ]の電車[でんしゃ]は五分[ごふん]後[ご]に来[き]ますよ。",
    translation: "A: Excuse me, the train is delayed, isn't it? What happened?\nB: I heard there was an accident. It'll be delayed about ten minutes.\nA: I'll end up late for work. I'd better let them know.\nB: You'd better call your company in advance.\nA: Let's wait a little longer.\nB: The next train comes in five minutes.",
    questions: [
      {
        q: "Why is the train delayed?",
        choices: ["Bad weather", "An accident", "Equipment trouble", "A holiday"],
        answerIndex: 1,
        explanation: "B says 事故があったそうです (I heard there was an accident), using 〜そうだ (hearsay)."
      },
      {
        q: "About how long is the delay?",
        choices: ["About five minutes", "About ten minutes", "About twenty minutes", "About an hour"],
        answerIndex: 1,
        explanation: "B says 十分ぐらい遅れるそうです (about ten minutes' delay)."
      },
      {
        q: "What does B advise A to do?",
        choices: ["Take a taxi", "Call the company in advance", "Go home", "Wait at the platform"],
        answerIndex: 1,
        explanation: "B says 会社に電話しておいた方がいいですよ (you'd better call the company in advance), using 〜ておく and 〜方がいい."
      }
    ],
    estMinutes: 3,
    tags: ["transit", "daily life"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-09 — Negotiating a meeting time
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-09",
    title: "会議[かいぎ]の時間[じかん]を決[き]める",
    level: "N4",
    context: "Between coworkers — negotiating a meeting time",
    text: "A: 田中[たなか]さん、明日[あした]の会議[かいぎ]の時間[じかん]ですが、三時[さんじ]はどうですか。\nB: すみません、三時[さんじ]はちょっと都合[つごう]が悪[わる]いです。別[べつ]の時間[じかん]にしてもいいですか。\nA: じゃ、四時半[よじはん]はどうですか。\nB: 四時半[よじはん]なら大丈夫[だいじょうぶ]です。会議室[かいぎしつ]はどこですか。\nA: 二階[にかい]の会議室[かいぎしつ]三[さん]を使[つか]います。資料[しりょう]は私[わたし]が準備[じゅんび]しておきます。\nB: じゃ、明日[あした]お願[ねが]いします。",
    translation: "A: Tanaka-san, about tomorrow's meeting time, how about three o'clock?\nB: Sorry, three o'clock is a bit inconvenient. Could we use a different time?\nA: Then how about four thirty?\nB: Four thirty is fine. Where is the meeting room?\nA: We'll use meeting room 3 on the second floor. I'll prepare the materials.\nB: Then see you tomorrow.",
    questions: [
      {
        q: "What time did A first propose?",
        choices: ["Two o'clock", "Three o'clock", "Four o'clock", "Four thirty"],
        answerIndex: 1,
        explanation: "A first asks 三時はどうですか (how about three o'clock?)."
      },
      {
        q: "Why does B decline three o'clock?",
        choices: ["It's too early", "It's inconvenient for him", "The room is taken", "He has another meeting"],
        answerIndex: 1,
        explanation: "B says 三時はちょっと都合が悪いです (three o'clock is a bit inconvenient)."
      },
      {
        q: "Where will the meeting be held?",
        choices: ["Meeting room 1 on the first floor", "Meeting room 3 on the second floor", "Meeting room 2 on the third floor", "Meeting room 5 on the ground floor"],
        answerIndex: 1,
        explanation: "A says 二階の会議室三を使います (we'll use meeting room 3 on the second floor)."
      },
      {
        q: "Who will prepare the materials?",
        choices: ["Tanaka", "A", "Yamada", "The receptionist"],
        answerIndex: 1,
        explanation: "A says 資料は私が準備しておきます (I'll prepare the materials), using 〜ておく."
      }
    ],
    estMinutes: 4,
    tags: ["work", "scheduling"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n4-10 — Talking about a new apartment
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n4-10",
    title: "新[あたら]しいアパート",
    level: "N4",
    context: "Between friends — talking about a new apartment",
    text: "A: 山田[やまだ]さん、引[ひ]っ越[こ]したそうですね。新[あたら]しいアパートはどうですか。\nB: とてもいいです。駅[えき]から近[ちか]くて、便利[べんり]です。\nA: 家賃[やちん]は高[たか]いですか。\nB: 少[すこ]し高[たか]いですが、広[ひろ]くて日当[ひあ]たりがいいので気[き]に入[い]っています。\nA: 私[わたし]も来年[らいねん]引[ひ]っ越[こ]そうと思[おも]っています。\nB: もし引[ひ]っ越[こ]すなら、早[はや]く探[さが]した方[ほう]がいいですよ。",
    translation: "A: Yamada-san, I heard you moved. How is your new apartment?\nB: It's very nice. It's close to the station and convenient.\nA: Is the rent expensive?\nB: It's a bit expensive, but it's spacious and gets good sunlight, so I like it.\nA: I'm thinking of moving next year too.\nB: If you're going to move, you'd better search early.",
    questions: [
      {
        q: "Why is the new apartment convenient?",
        choices: ["It is large", "It is close to the station", "The rent is low", "It is new"],
        answerIndex: 1,
        explanation: "B says 駅から近くて、便利です (close to the station, convenient)."
      },
      {
        q: "Why does Yamada like the apartment despite the rent?",
        choices: ["It has a garden", "It is spacious and gets good sunlight", "It is near a park", "It has free Wi-Fi"],
        answerIndex: 1,
        explanation: "B says 広くて日当たりがいいので気に入っています (it's spacious and sunny, so I like it)."
      },
      {
        q: "What is A planning to do next year?",
        choices: ["Buy a house", "Move to a new apartment", "Travel abroad", "Change jobs"],
        answerIndex: 1,
        explanation: "A says 私も来年引っ越そうと思っています (I'm thinking of moving next year too), using 〜ようと思っています."
      },
      {
        q: "What advice does Yamada give A?",
        choices: ["Move in spring", "Search early", "Choose a cheaper place", "Live near family"],
        answerIndex: 1,
        explanation: "Yamada says もし引っ越すなら、早く探した方がいい (if you move, you'd better search early), using a conditional and 〜方がいい."
      }
    ],
    estMinutes: 4,
    tags: ["housing", "daily life"]
  }
];
