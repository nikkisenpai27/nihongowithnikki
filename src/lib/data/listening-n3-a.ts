import type { ListeningData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 20 N3-level listening dialogues with comprehension questions.
// N3 grammar targets: 〜以上, 〜ざるをえない, 〜わけにはいかない, 〜つもり, 〜ばよかった,
// 〜たびに, 〜うちに, 〜次第, 〜に違いない, 〜わりに, 〜一方で, 〜半面, 〜あまり,
// 〜どころか, 〜上で, 〜おかげで, 〜せいで, 〜からこそ, 〜にしたがって, 〜ばかり.

export const listeningN3A: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n3-01 — At the office discussing a project
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-01",
    title: "新[あたら]しいプロジェクトの方針[ほうしん]",
    level: "N3",
    context: "At the office — two colleagues review a project's direction",
    text: "A: 来週[らいしゅう]の会議[かいぎ]で、新[あたら]しいプロジェクトの方針[ほうしん]を発表[はっぴょう]する予定[よてい]です。\nB: そうですね。ただ、予算[よさん]が当初[とうしょ]より減[へ]った以上[いじょう]、計画[けいかく]を変[か]えざるをえません。\nA: なるほど。具体的[ぐたいてき]にどこを見直[みなお]すつもりですか。\nB: まず、デザインの外注[がいちゅう]をやめて、社内[しゃない]で担当[たんとう]しようと思[おも]っています。\nA: それだと時間[じかん]がかかるのではないでしょうか。\nB: ええ。ですから、スケジュールを少[すこ]し延[の]ばすことにしました。\nA: わかりました。では、その内容[ないよう]で資料[しりょう]をまとめておきます。",
    translation: "A: We plan to announce the new project's direction at next week's meeting.\nB: Right. However, since the budget has been reduced from the original, we have no choice but to change the plan.\nA: I see. What specifically do you intend to review?\nB: First, I'm thinking of stopping the outsourced design and having it handled in-house.\nA: Won't that take more time?\nB: Yes. So we've decided to extend the schedule a little.\nA: Understood. Then I'll prepare the materials with that content.",
    questions: [
      {
        q: "What will be announced at next week's meeting?",
        choices: ["The project's direction", "The new budget", "A new product", "A staff reshuffle"],
        answerIndex: 0,
        explanation: "A says 新しいプロジェクトの方針を発表する予定です (plan to announce the project's direction)."
      },
      {
        q: "Why must the plan be changed?",
        choices: ["The deadline moved up", "The budget was reduced", "A key member quit", "The client complained"],
        answerIndex: 1,
        explanation: "B says 予算が当初より減った以上、計画を変えざるをえません (since the budget dropped, we must change the plan), using 〜以上 and 〜ざるをえない."
      },
      {
        q: "How will the design be handled now?",
        choices: ["Outsourced overseas", "In-house", "By volunteers", "Not at all"],
        answerIndex: 1,
        explanation: "B says デザインの外注をやめて、社内で担当しよう (stop outsourcing, handle in-house)."
      },
      {
        q: "What will A do at the end?",
        choices: ["Delay the meeting", "Find a new vendor", "Prepare the materials", "Notify the client"],
        answerIndex: 2,
        explanation: "A says 資料をまとめておきます (I'll prepare the materials)."
      }
    ],
    estMinutes: 4,
    tags: ["work", "planning"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-02 — Making a restaurant reservation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-02",
    title: "レストランの予約[よやく]",
    level: "N3",
    context: "On the phone — booking a table at a restaurant",
    text: "A: はい、レストラン花[はな]でございます。\nB: 今週末[こんしゅうまつ]の土曜日[どようび]の夜[よる]、二人[ふたり]で予約[よやく]したいのですが。\nA: かしこまりました。何時[なんじ]ごろにご来店[らいてん]いただけますか。\nB: 七時[しちじ]ごろにしたいんですが、窓際[まどぎわ]の席[せき]は空[あ]いていますか。\nA: 少[しょう]々お待[ま]ちください。申[もう]し訳[わけ]ありませんが、窓際[まどぎわ]はすでに予約[よやく]で埋[う]まっております。\nB: そうですか。では、店内[てんない]の奥[おく]の席[せき]でもかまいません。\nA: ありがとうございます。では、七時[しちじ]に二名[にめい]様[さま]、奥[おく]の席[せき]で承[うけたまわ]りました。",
    translation: "A: Yes, this is Restaurant Hana.\nB: I'd like to reserve a table for two this Saturday evening.\nA: Certainly. Around what time will you be arriving?\nB: Around seven, but do you have a window seat available?\nA: Please wait a moment. I'm sorry, the window seats are already fully booked.\nB: I see. Then a table in the back of the restaurant is fine.\nA: Thank you. Then, two guests at seven, a back table — confirmed.",
    questions: [
      {
        q: "When does the caller want to visit?",
        choices: ["This Saturday evening", "This Sunday morning", "Next Friday noon", "This Monday night"],
        answerIndex: 0,
        explanation: "B says 今週末の土曜日の夜、二人で予約したい (reserve for two this Saturday evening)."
      },
      {
        q: "What kind of seat did the caller first request?",
        choices: ["A terrace seat", "A corner seat", "A window seat", "A counter seat"],
        answerIndex: 2,
        explanation: "B asks 窓際の席は空いていますか (are window seats available?)."
      },
      {
        q: "Why couldn't the first choice be accommodated?",
        choices: ["The restaurant was closing", "Already fully booked", "Under renovation", "Too noisy"],
        answerIndex: 1,
        explanation: "A says 窓際はすでに予約で埋まっております (window seats are already filled with reservations)."
      },
      {
        q: "What did the caller finally agree to?",
        choices: ["A terrace seat", "A back table", "A window seat", "No reservation"],
        answerIndex: 1,
        explanation: "B says 店内の奥の席でもかまいません (a back table is fine), using 〜でもかまいません."
      }
    ],
    estMinutes: 3,
    tags: ["restaurant", "reservation"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-03 — At the doctor discussing test results
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-03",
    title: "検査[けんさ]結果[けっか]の説明[せつめい]",
    level: "N3",
    context: "At a clinic — a doctor explains test results to a patient",
    text: "A: 先生[せんせい]、先週[せんしゅう]の健康診断[けんこうしんだん]の結果[けっか]はいかがでしたか。\nB: 異常[いじょう]はほとんどありませんが、コレステロールの値[あたい]が少[すこ]し高[たか]めです。\nA: そうですか。食生活[しょくせいかつ]に気[き]をつければ、下[さ]がるものでしょうか。\nB: ええ、毎日[まいにち]の食事[しょくじ]を見直[みなお]すだけでなく、適度[てきど]な運動[うんどう]も必要[ひつよう]ですよ。\nA: わかりました。甘[あま]いものを好[この]んで食[た]べていたせいかもしれません。\nB: その可能性[かのうせい]が高[たか]いですね。三[さん]か月後[げつご]にもう一度[いちど]検査[けんさ]しましょう。\nA: はい、ありがとうございます。気[き]をつけます。",
    translation: "A: Doctor, how were the results of last week's health check?\nB: There are almost no abnormalities, but your cholesterol level is a bit high.\nA: I see. If I'm careful with my diet, will it go down?\nB: Yes. Not only should you review your daily meals, moderate exercise is also necessary.\nA: Understood. It may be because I tended to eat sweet things.\nB: That's quite likely. Let's run the test again in three months.\nA: Yes, thank you. I'll be careful.",
    questions: [
      {
        q: "What was the only concern in the results?",
        choices: ["Blood pressure is low", "Sugar is too low", "Cholesterol is a bit high", "Iron is deficient"],
        answerIndex: 2,
        explanation: "The doctor says コレステロールの値が少し高めです (cholesterol is a bit high)."
      },
      {
        q: "What does the doctor recommend besides diet?",
        choices: ["More sleep", "Moderate exercise", "Medicine only", "Avoiding stress"],
        answerIndex: 1,
        explanation: "B says 適度な運動も必要です (moderate exercise is also necessary), using 〜だけでなく."
      },
      {
        q: "What does the patient think caused the issue?",
        choices: ["Eating sweet things", "Skipping meals", "Lack of sleep", "Too much coffee"],
        answerIndex: 0,
        explanation: "A says 甘いものを好んで食べていたせいかもしれません (may be because I tended to eat sweets), using 〜せい."
      },
      {
        q: "When will the next test be?",
        choices: ["In one month", "In three months", "In six months", "Next week"],
        answerIndex: 1,
        explanation: "B says 三か月後にもう一度検査しましょう (let's test again in three months)."
      }
    ],
    estMinutes: 4,
    tags: ["health", "medical"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-04 — Talking about a career change
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-04",
    title: "転職[てんしょく]について相談[そうだん]",
    level: "N3",
    context: "At a café — two friends discuss one's plan to change jobs",
    text: "A: 来月[らいげつ]から別[べつ]の会社[かいしゃ]に転職[てんしょく]するって、本当[ほんとう]ですか。\nB: ええ、今[いま]の職場[しょくば]では残業[ざんぎょう]が多[おお]すぎて、体[からだ]にこたえるんです。\nA: それは大変[たいへん]ですね。でも、新[あたら]しい仕事[しごと]は前[まえ]と同[おな]じ分野[ぶんや]ですか。\nB: いいえ、少[すこ]し違[ちが]います。IT関連[かんれん]の営業[えいぎょう]から、企画[きかく]の仕事[しごと]に変[か]わります。\nA: やりがいがありそうですね。給料[きゅうりょう]はどうなるんですか。\nB: 最初[さいしょ]は少[すこ]し下[さ]がるものの、長[なが]く働[はたら]けば上[あ]がる見込[みこ]みです。\nA: 応援[おうえん]しています。新[あたら]しい環境[かんきょう]でも頑張[がんば]ってください。",
    translation: "A: Is it true you're changing to another company from next month?\nB: Yes. At my current workplace the overtime is excessive, and it takes a toll on my body.\nA: That's tough. But is the new job in the same field as before?\nB: No, it's a bit different. I'll move from IT-related sales to a planning role.\nA: Sounds rewarding. What about the salary?\nB: It drops a little at first, but if I work long it's expected to rise.\nA: I'm cheering for you. Do your best in the new environment too.",
    questions: [
      {
        q: "Why is B changing jobs?",
        choices: ["Higher salary elsewhere", "Closer to home", "Too much overtime affecting health", "Boredom"],
        answerIndex: 2,
        explanation: "B says 残業が多すぎて、体にこたえる (overtime is excessive and takes a toll on the body)."
      },
      {
        q: "How does the new field differ from the old one?",
        choices: ["From planning to sales", "From sales to planning", "Same field", "From IT to design"],
        answerIndex: 1,
        explanation: "B says IT関連の営業から、企画の仕事に変わります (moving from IT sales to planning)."
      },
      {
        q: "What about the salary at first?",
        choices: ["It drops a little", "It doubles", "It stays the same", "It is performance-based"],
        answerIndex: 0,
        explanation: "B says 最初は少し下がるものの (it drops a little at first), using 〜ものの (although)."
      },
      {
        q: "How does A respond at the end?",
        choices: ["Expresses doubt", "Warns about risks", "Offers a job", "Encourages B"],
        answerIndex: 3,
        explanation: "A says 応援しています and 頑張ってください (I'm cheering for you; do your best)."
      }
    ],
    estMinutes: 4,
    tags: ["career", "work"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-05 — Planning a family trip
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-05",
    title: "家族[かぞく]旅行[りょこう]の計画[けいかく]",
    level: "N3",
    context: "At home — a couple plans a family trip",
    text: "A: 夏休[なつやす]みの家族[かぞく]旅行[りょこう]ですが、今年[ことし]はどこに行[い]きましょうか。\nB: 子供[こども]が海[うみ]で泳[およ]ぎたいと言[い]っていたので、沖縄[おきなわ]はどうでしょうか。\nA: いいですね。ただ、八[はち]月[がつ]は混[こ]む上[うえ]、料金[りょうきん]も高[たか]くなります。\nB: それなら、九[く]月[がつ]の初[はじ]めにずらすわけにはいきませんか。\nA: 学校[がっこう]が始[はじ]まってしまうので、難[むずか]しいんですよ。\nB: そうでしたね。では、予定[よてい]を早[はや]めに立[た]てて、飛行機[ひこうき]を予約[よやく]しておきましょう。\nA: ええ、今週[こんしゅう]中[ちゅう]に決[き]めないと、値段[ねだん]がまた上[あ]がりそうですし。",
    translation: "A: About the summer family trip — where shall we go this year?\nB: The children said they want to swim in the sea, so how about Okinawa?\nA: Sounds good. But August is crowded and the prices go up.\nB: Then couldn't we shift it to early September?\nA: School will have started, so it's difficult.\nB: Right. Then let's make plans early and book the flights.\nA: Yes, if we don't decide within this week the prices may rise again.",
    questions: [
      {
        q: "What do the children want to do?",
        choices: ["Go to the mountains", "Visit a museum", "Swim in the sea", "Stay at home"],
        answerIndex: 2,
        explanation: "B says 子供が海で泳ぎたいと言っていた (the children said they want to swim in the sea)."
      },
      {
        q: "Why is August a problem?",
        choices: ["It's too cold", "It's the rainy season", "Hotels are closed", "Crowded and expensive"],
        answerIndex: 3,
        explanation: "A says 八月は混む上、料金も高くなります (August is crowded and prices rise), using 〜上 (besides)."
      },
      {
        q: "Why can't they go in early September?",
        choices: ["School will have started", "Typhoon season", "Too expensive", "Work schedule"],
        answerIndex: 0,
        explanation: "A says 学校が始まってしまうので、難しい (school will have started, so it's difficult)."
      },
      {
        q: "When do they plan to decide?",
        choices: ["By next month", "Within this week", "Tomorrow", "After school starts"],
        answerIndex: 1,
        explanation: "A says 今週中に決めないと (if we don't decide within this week)."
      }
    ],
    estMinutes: 4,
    tags: ["travel", "family"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-06 — At the bank applying for a card
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-06",
    title: "クレジットカードの申[もう]し込[こ]み",
    level: "N3",
    context: "At a bank — a customer applies for a credit card",
    text: "A: クレジットカードを作[つく]りたいのですが、何[なに]が必要[ひつよう]ですか。\nB: 運転[うんてん]免許証[めんきょしょう]などの身分[みぶん]証明書[しょうめいしょ]と、印鑑[いんかん]をご持参[じさん]ください。\nA: 身分[みぶん]証明書[しょうめいしょ]はありますが、印鑑[いんかん]は持[も]ってきていません。\nB: では、本日[ほんじつ]は申[もう]し込[こ]み用紙[ようし]だけお受[う]け取[と]りください。\nA: わかりました。審査[しんさ]にはどのくらいかかりますか。\nB: 通常[つうじょう]、二[に]週間[しゅうかん]程度[ていど]で結果[けっか]をご通知[つうち]いたします。\nA: では、後[あと]で印鑑[いんかん]を持[も]ってもう一度[いちど]来[き]ます。\nB: ありがとうございます。お待[ま]ちしております。",
    translation: "A: I'd like to get a credit card. What do I need?\nB: Please bring an ID such as a driver's license, and your personal seal.\nA: I have an ID, but I haven't brought my seal.\nB: Then please just take the application form today.\nA: Understood. How long does the screening take?\nB: Normally we notify you of the result in about two weeks.\nA: Then I'll come again later with my seal.\nB: Thank you. We'll be expecting you.",
    questions: [
      {
        q: "What does the customer need besides an ID?",
        choices: ["A passport photo", "A utility bill", "A personal seal", "A guarantor"],
        answerIndex: 2,
        explanation: "B asks the customer to bring 印鑑 (a personal seal) along with an ID."
      },
      {
        q: "What will the customer do today?",
        choices: ["Submit the full application", "Just take the application form", "Open an account", "Wait for screening"],
        answerIndex: 1,
        explanation: "B says 本日は申し込み用紙だけお受け取りください (just take the application form today)."
      },
      {
        q: "How long does the screening take?",
        choices: ["About one week", "About two weeks", "About one month", "Same day"],
        answerIndex: 1,
        explanation: "B says 二週間程度で結果をご通知いたします (notify in about two weeks)."
      },
      {
        q: "What will the customer do later?",
        choices: ["Come again with the seal", "Call back", "Mail the form", "Cancel the application"],
        answerIndex: 0,
        explanation: "A says 後で印鑑を持ってもう一度来ます (I'll come again later with the seal)."
      }
    ],
    estMinutes: 3,
    tags: ["bank", "procedures"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-07 — Discussing a news article
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-07",
    title: "新聞[しんぶん]の記事[きじ]について",
    level: "N3",
    context: "At an office break room — colleagues discuss a news article",
    text: "A: 今朝[けさ]の新聞[しんぶん]で、若者[わかもの]のテレビ離[ばな]れの記事[きじ]を読[よ]みましたか。\nB: ええ、読[よ]みました。スマートフォンの普及[ふきゅう]のせいだと思[おも]います。\nA: 私[わたし]も同感[どうかん]です。ただ、テレビ番組[ばんぐみ]の質[しつ]も問[と]われるべきですね。\nB: 確[たし]かに。最近[さいきん]は面白[おもしろ]い番組[ばんぐみ]が少[すく]なくなった気[き]がします。\nA: 一方[いっぽう]で、ネットの動画[どうが]は手軽[てがる]に見[み]られる分[ぶん]、人気[にんき]が集[あつ]まっているのでしょう。\nB: ええ。これからもメディアのあり方[かた]が変[か]わっていくに違[ちが]いありません。\nA: 本当[ほんとう]にその通[とお]りですね。",
    translation: "A: Did you read this morning's article in the paper about young people moving away from TV?\nB: Yes, I read it. I think it's due to the spread of smartphones.\nA: I agree. However, the quality of TV programs should also be questioned.\nB: Indeed. I feel there have been fewer interesting programs lately.\nA: On the other hand, online videos are easy to watch, which is likely why they've gathered popularity.\nB: Yes. The nature of media will surely keep changing.\nA: That's exactly right.",
    questions: [
      {
        q: "What was the article about?",
        choices: ["Young people moving away from TV", "Smartphone prices", "New TV shows", "Internet speeds"],
        answerIndex: 0,
        explanation: "A mentions 若者のテレビ離れの記事 (article about young people moving away from TV)."
      },
      {
        q: "What does B think is the main cause?",
        choices: ["Boring programs", "High prices", "Spread of smartphones", "Lack of time"],
        answerIndex: 2,
        explanation: "B says スマートフォンの普及のせいだと思います (the spread of smartphones is the cause)."
      },
      {
        q: "According to A, why are online videos popular?",
        choices: ["They are free", "They are easy to watch", "They are shorter", "They are higher quality"],
        answerIndex: 1,
        explanation: "A says ネットの動画は手軽に見られる分、人気が集まっている (online videos are easy to watch, hence popular), using 〜分."
      },
      {
        q: "What does B conclude about media?",
        choices: ["It will disappear", "It will stay the same", "It will only grow online", "It will keep changing"],
        answerIndex: 3,
        explanation: "B says メディアのあり方が変わっていくに違いありません (media will surely keep changing), using 〜に違いない."
      }
    ],
    estMinutes: 4,
    tags: ["news", "media"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-08 — At the electronics store
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-08",
    title: "家電[かでん]量販店[りょうはんてん]で",
    level: "N3",
    context: "At an electronics store — a customer and a clerk discuss a laptop",
    text: "A: すみません、大学[だいがく]のレポート用[よう]にパソコンを買[か]いたいんですが。\nB: それでしたら、この軽量[けいりょう]モデルがお勧[すす]めです。持[も]ち運[はこ]びにも便利[べんり]ですよ。\nA: バッテリーの持[も]ちはどのくらいですか。\nB: 満充電[まんじゅうでん]で約[やく]十[じゅう]時間[じかん]使用[しよう]できます。\nA: 十時間[じかん]も持[も]つなら、外出先[がいしゅつさき]でも安心[あんしん]ですね。\nB: はい。ただ、メモリーを増量[ぞうりょう]する場合[ばあい]は、別途[べっと]費用[ひよう]がかかります。\nA: わかりました。では、このモデルで見積[みつも]りを出[だ]してください。\nB: かしこまりました。少[しょう]々お待[ま]ちください。",
    translation: "A: Excuse me, I'd like to buy a PC for university reports.\nB: In that case, I recommend this lightweight model. It's also convenient to carry around.\nA: How long does the battery last?\nB: On a full charge you can use it for about ten hours.\nA: If it lasts ten hours, I can use it away from home with peace of mind.\nB: Yes. However, if you increase the memory, there is an additional fee.\nA: Understood. Then please prepare an estimate for this model.\nB: Certainly. Please wait a moment.",
    questions: [
      {
        q: "Why does the customer want a laptop?",
        choices: ["For gaming", "For university reports", "For design work", "For a gift"],
        answerIndex: 1,
        explanation: "A says 大学のレポート用にパソコンを買いたい (want to buy a PC for university reports)."
      },
      {
        q: "What does the clerk recommend?",
        choices: ["A lightweight model", "A desktop model", "A gaming model", "A refurbished model"],
        answerIndex: 0,
        explanation: "B says この軽量モデルがお勧めです (this lightweight model is recommended)."
      },
      {
        q: "How long does the battery last?",
        choices: ["About 5 hours", "About 8 hours", "About 10 hours", "About 12 hours"],
        answerIndex: 2,
        explanation: "B says 満充電で約十時間使用できます (usable about ten hours on full charge)."
      },
      {
        q: "What costs extra?",
        choices: ["A carrying case", "Increasing the memory", "Extended warranty", "Software installation"],
        answerIndex: 1,
        explanation: "B says メモリーを増量する場合は、別途費用がかかります (increasing memory costs extra), using 〜場合は."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "electronics"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-09 — Talking about a hobby class
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-09",
    title: "趣味[しゅみ]の教室[きょうしつ]",
    level: "N3",
    context: "At a community center — two people talk about a pottery class",
    text: "A: 最近[さいきん]、陶芸[とうげい]の教室[きょうしつ]に通[かよ]い始[はじ]めたそうですね。\nB: ええ、毎週[まいしゅう]火曜日[かようび]の夜[よる]に通[かよ]っています。思[おも]ったより難[むずか]しいです。\nA: そうですか。でも、作[つく]る過程[かてい]は楽[たの]しいでしょう。\nB: ええ、失敗[しっぱい]するたびに、だんだん上達[じょうたつ]していくのが嬉[うれ]しいんです。\nA: 作品[さくひん]はいつ完成[かんせい]する予定[よてい]ですか。\nB: 来月[らいげつ]の展覧会[てんらんかい]に間[ま]に合[あ]うように仕上[しあ]げたいと思[おも]っています。\nA: 応援[おうえん]しています。完成[かんせい]したら見[み]せてくださいね。\nB: ありがとうございます。きっと見[み]せますよ。",
    translation: "A: I heard you recently started attending a pottery class.\nB: Yes, I go every Tuesday evening. It's harder than I expected.\nA: Is that so. But the process of making things must be enjoyable.\nB: Yes. Every time I fail, I gradually improve, and that makes me happy.\nA: When is your work scheduled to be finished?\nB: I'd like to complete it in time for next month's exhibition.\nA: I'm cheering for you. Show me once it's done.\nB: Thank you. I definitely will.",
    questions: [
      {
        q: "When does B attend the class?",
        choices: ["Monday mornings", "Wednesday afternoons", "Tuesday evenings", "Sunday nights"],
        answerIndex: 2,
        explanation: "B says 毎週火曜日の夜に通っています (goes every Tuesday evening)."
      },
      {
        q: "How does B feel about the difficulty?",
        choices: ["Harder than expected", "Easier than expected", "Just right", "Too easy"],
        answerIndex: 0,
        explanation: "B says 思ったより難しいです (harder than I expected)."
      },
      {
        q: "What makes B happy?",
        choices: ["Finishing quickly", "Gradually improving after failures", "Getting praise", "Saving money"],
        answerIndex: 1,
        explanation: "B says 失敗するたびに、だんだん上達していくのが嬉しい (gradually improving after each failure makes me happy), using 〜たびに."
      },
      {
        q: "What does B want to finish in time for?",
        choices: ["A friend's birthday", "Next month's exhibition", "A school event", "A contest"],
        answerIndex: 1,
        explanation: "B says 来月の展覧会に間に合うように仕上げたい (want to finish in time for next month's exhibition)."
      }
    ],
    estMinutes: 3,
    tags: ["hobby", "pottery"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-10 — A neighborhood meeting
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-10",
    title: "町内会[ちょうないかい]の会議[かいぎ]",
    level: "N3",
    context: "At a community hall — residents discuss a summer festival",
    text: "A: 今月[こんげつ]の町内会[ちょうないかい]の話題[わだい]は、夏祭[なつまつ]りについてです。\nB: 毎年[まいとし]神社[じんじゃ]で開催[かいさい]していますが、今年[ことし]はどうしますか。\nA: 後継者[こうけいしゃ]不足[ぶそく]のため、規模[きぼ]を縮[ちぢ]めるしかないという意見[いけん]が出[で]ています。\nB: それも仕方[しかた]ないかもしれません。ただ、屋台[やたい]だけは残[のこ]したいですね。\nA: 私[わたし]も同[おな]じ意見[いけん]です。子供[こども]たちが楽[たの]しみにしているので。\nB: では、出店[でみせ]を十[じゅう]店舗[てんぽ]程度[ていど]に絞[しぼ]り、運営[うんえい]しましょう。\nA: ええ、ご近所[きんじょ]の協力[きょうりょく]も仰[あお]いで進[すす]めます。",
    translation: "A: This month's neighborhood association topic is about the summer festival.\nB: We hold it at the shrine every year, but what about this year?\nA: There's an opinion that we have no choice but to reduce the scale due to a lack of successors.\nB: That may be unavoidable. However, I'd like to keep the food stalls at least.\nA: I share the same view, because the children look forward to it.\nB: Then let's narrow it down to about ten stalls and run it.\nA: Yes, I'll also seek the neighbors' cooperation to proceed.",
    questions: [
      {
        q: "What is this month's topic?",
        choices: ["Garbage sorting", "Road repairs", "The summer festival", "A new park"],
        answerIndex: 2,
        explanation: "A says 今月の町内会の話題は、夏祭りについてです (this month's topic is the summer festival)."
      },
      {
        q: "Why might the scale be reduced?",
        choices: ["Lack of successors", "Budget surplus", "Bad weather", "Low attendance"],
        answerIndex: 0,
        explanation: "A says 後継者不足のため、規模を縮めるしかない (due to lack of successors, we can only shrink the scale)."
      },
      {
        q: "What does B want to keep?",
        choices: ["The parade", "Food stalls", "Fireworks", "Live music"],
        answerIndex: 1,
        explanation: "B says 屋台だけは残したい (I want to keep the food stalls at least)."
      },
      {
        q: "How many stalls will they have?",
        choices: ["About five", "About eight", "About ten", "About fifteen"],
        answerIndex: 2,
        explanation: "B says 出店を十店舗程度に絞りましょう (narrow down to about ten stalls)."
      }
    ],
    estMinutes: 4,
    tags: ["community", "festival"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-11 — At the hair salon
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-11",
    title: "美容院[びよういん]で",
    level: "N3",
    context: "At a hair salon — a customer talks with a stylist",
    text: "A: 今日[きょう]はどんな風[ふう]にいたしましょうか。\nB: 前[まえ]と同[おな]じくらいの長[なが]さで、少[すこ]し明[あか]るい色[いろ]に変[か]えたいんですが。\nA: かしこまりました。では、茶系[ちゃけい]の明[あか]るめにしましょうか。\nB: ええ、お願[ねが]いします。あと、前髪[まえがみ]は短[みじか]くしないでください。\nA: わかりました。では、先[さき]にシャンプーから始[はじ]めさせていただきます。\nB: ありがとうございます。仕上[しあ]がりも楽[たの]しみにしています。\nA: はい。お任[まか]せください。なるべくご希望[きぼう]に沿[そ]うようにします。",
    translation: "A: How shall we do it today?\nB: About the same length as before, but I'd like to change to a slightly lighter color.\nA: Certainly. Shall we go with a lighter brown tone?\nB: Yes, please. Also, please don't cut the bangs short.\nA: Understood. Then I'll start with the shampoo first.\nB: Thank you. I'm looking forward to the finished result too.\nA: Yes. Please leave it to me. I'll try to match your wishes as closely as possible.",
    questions: [
      {
        q: "What length does the customer want?",
        choices: ["Much shorter", "Same as before", "Much longer", "Layered"],
        answerIndex: 1,
        explanation: "B says 前と同じくらいの長さで (about the same length as before)."
      },
      {
        q: "What color does the customer want?",
        choices: ["Darker black", "Bright red", "A lighter brown tone", "Gray"],
        answerIndex: 2,
        explanation: "A suggests 茶系の明るめ (a lighter brown tone) and B agrees."
      },
      {
        q: "What should NOT be done?",
        choices: ["Cut the bangs short", "Use shampoo", "Blow-dry", "Trim the back"],
        answerIndex: 0,
        explanation: "B says 前髪は短くしないでください (please don't cut the bangs short)."
      },
      {
        q: "What will the stylist do first?",
        choices: ["Cut the back", "Apply color", "Start with the shampoo", "Blow-dry"],
        answerIndex: 2,
        explanation: "A says 先にシャンプーから始めさせていただきます (I'll start with the shampoo first)."
      }
    ],
    estMinutes: 3,
    tags: ["salon", "daily-life"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-12 — Discussing a book recommendation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-12",
    title: "読書[どくしょ]のすすめ",
    level: "N3",
    context: "At a library — two friends discuss a novel",
    text: "A: 先日[せんじつ]、田中[たなか]さんに勧[すす]められた小説[しょうせつ]を読[よ]み終[お]えました。\nB: ああ、あの本[ほん]ですか。どうでしたか。\nA: とても感動[かんどう]しました。主人公[しゅじんこう]の成長[せいちょう]が心[こころ]に響[ひび]きました。\nB: 私[わたし]も読[よ]んだ時[とき]、涙[なみだ]が出[で]そうになりました。\nA: 特[とく]に、最後[さいご]のページの一文[いちぶん]が印象[いんしょう]的[てき]でしたね。\nB: ええ。この作者[さくしゃ]の他[ほか]の作品[さくひん]も読[よ]む価値[かち]がありますよ。\nA: そうですね。図書館[としょかん]で借[か]りて、続[つづ]けて読[よ]んでみます。",
    translation: "A: The other day, I finished the novel Tanaka-san recommended.\nB: Ah, that book. How was it?\nA: I was very moved. The protagonist's growth resonated with me.\nB: When I read it, I almost cried too.\nA: Particularly, one sentence on the final page left a strong impression.\nB: Yes. This author's other works are also worth reading.\nA: Right. I'll borrow them from the library and read them next.",
    questions: [
      {
        q: "Who recommended the novel?",
        choices: ["Tanaka-san", "A librarian", "A teacher", "A family member"],
        answerIndex: 0,
        explanation: "A says 田中さんに勧められた小説 (the novel Tanaka-san recommended)."
      },
      {
        q: "What resonated with A?",
        choices: ["The plot twist", "The setting", "The protagonist's growth", "The humor"],
        answerIndex: 2,
        explanation: "A says 主人公の成長が心に響きました (the protagonist's growth resonated with me)."
      },
      {
        q: "What impressed A most?",
        choices: ["The opening scene", "One sentence on the final page", "The cover art", "The dialogue"],
        answerIndex: 1,
        explanation: "A says 最後のページの一文が印象的でした (one sentence on the final page was striking)."
      },
      {
        q: "What will A do next?",
        choices: ["Buy the book", "Recommend it to others", "Return it", "Borrow more from the library"],
        answerIndex: 3,
        explanation: "A says 図書館で借りて、続けて読んでみます (I'll borrow more from the library and read them)."
      }
    ],
    estMinutes: 3,
    tags: ["books", "library"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-13 — At the travel agency
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-13",
    title: "旅行[りょこう]代理店[だいりてん]で",
    level: "N3",
    context: "At a travel agency — a customer plans an overseas trip",
    text: "A: 初[はじ]めて海外[かいがい]旅行[りょこう]に行[い]くんですが、どこがお勧[すす]めですか。\nB: ご予算[よさん]と期間[きかん]を教[おし]えていただけますか。\nA: 予算[よさん]は二十[にじゅう]万[まん]円[えん]程度[ていど]で、五日間[いつかかん]くらいです。\nB: それでしたら、韓国[かんこく]か台湾[たいわん]あたりが妥当[だとう]でしょう。\nA: 食事[しょくじ]に興味[きょうみ]があるので、料理[りょうり]が美味[おい]しい方[ほう]がいいです。\nB: では、台湾[たいわん]をご提案[ていあん]します。屋台[やたい]の料理[りょうり]も有名[ゆうめい]ですよ。\nA: いいですね。では、台湾[たいわん]で計画[けいかく]を立[た]ててください。\nB: かしこまりました。明後日[あさって]までに見積[みつも]りをご用意[ようい]します。",
    translation: "A: I'm going on an overseas trip for the first time. What do you recommend?\nB: Could you tell me your budget and duration?\nA: My budget is around two hundred thousand yen, for about five days.\nB: In that case, Korea or Taiwan would be reasonable.\nA: I'm interested in food, so I'd prefer somewhere with delicious cuisine.\nB: Then I propose Taiwan. Its street food is also famous.\nA: Sounds good. Then please plan it for Taiwan.\nB: Certainly. I'll have an estimate ready by the day after tomorrow.",
    questions: [
      {
        q: "What is the customer's budget?",
        choices: ["Around 100,000 yen", "Around 150,000 yen", "Around 200,000 yen", "Around 300,000 yen"],
        answerIndex: 2,
        explanation: "A says 予算は二十万円程度です (budget is around 200,000 yen)."
      },
      {
        q: "How long is the trip?",
        choices: ["About 3 days", "About 5 days", "About 7 days", "About 10 days"],
        answerIndex: 1,
        explanation: "A says 五日間くらいです (about five days)."
      },
      {
        q: "Why does the agent propose Taiwan?",
        choices: ["Famous street food", "Cheapest option", "Closest country", "Best weather"],
        answerIndex: 0,
        explanation: "B says 台湾をご提案します。屋台の料理も有名ですよ (Taiwan is proposed; its street food is famous), since A is interested in food."
      },
      {
        q: "When will the estimate be ready?",
        choices: ["Today", "Tomorrow", "By the day after tomorrow", "In a week"],
        answerIndex: 2,
        explanation: "B says 明後日までに見積もりをご用意します (estimate ready by the day after tomorrow)."
      }
    ],
    estMinutes: 4,
    tags: ["travel", "planning"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-14 — Talking about environmental habits
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-14",
    title: "環境[かんきょう]に優[やさ]しい生活[せいかつ]",
    level: "N3",
    context: "At a café — friends talk about eco-friendly habits",
    text: "A: 最近[さいきん]、マイバッグを持[も]ち歩[ある]くようにしているんです。\nB: ええ、私[わたし]もです。プラスチックごみを減[へ]らすのは大切[たいせつ]ですからね。\nA: その上[うえ]、使[つか]い捨[す]て容器[ようき]も避[さ]けるよう心[こころ]がけています。\nB: すばらしいですね。私[わたし]は家[いえ]でゴミを分別[ぶんべつ]している程度[ていど]ですが。\nA: それだけでも十分[じゅうぶん]ですよ。少[すこ]しずつでも続[つづ]けることが大事[だいじ]なんです。\nB: そうですね。これからも無理[むり]のない範囲[はんい]で続[つづ]けます。",
    translation: "A: Lately I've been making a point of carrying an eco-bag.\nB: Yes, me too. Reducing plastic waste is important, after all.\nA: On top of that, I try to avoid single-use containers.\nB: That's wonderful. I only sort garbage at home, though.\nA: That alone is enough. What matters is to keep it up little by little.\nB: Right. I'll continue within a reasonable range from now on too.",
    questions: [
      {
        q: "What habit does A practice?",
        choices: ["Sorting garbage", "Carrying an eco-bag", "Composting", "Riding a bike"],
        answerIndex: 1,
        explanation: "A says マイバッグを持ち歩くようにしている (I make a point of carrying an eco-bag)."
      },
      {
        q: "What else does A try to avoid?",
        choices: ["Plastic bottles", "Single-use containers", "Public transport", "Meat"],
        answerIndex: 1,
        explanation: "A says 使い捨て容器も避けるよう心がけています (try to avoid single-use containers), using 〜ようにする."
      },
      {
        q: "What does B do at home?",
        choices: ["Sorts garbage", "Grows vegetables", "Saves rainwater", "Uses solar power"],
        answerIndex: 0,
        explanation: "B says 家でゴミを分別している程度ですが (I only sort garbage at home)."
      },
      {
        q: "What does A say is important?",
        choices: ["Doing it perfectly", "Spending money", "To continue little by little", "Telling others"],
        answerIndex: 2,
        explanation: "A says 少しずつでも続けることが大事なんです (continuing little by little is what matters)."
      }
    ],
    estMinutes: 3,
    tags: ["environment", "lifestyle"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-15 — A phone call about delivery
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-15",
    title: "配達[はいたつ]の電話[でんわ]",
    level: "N3",
    context: "On the phone — a delivery company calls a customer about a package",
    text: "A: お忙[いそが]しいところ恐[おそ]れ入[い]ります。佐川[さがわ]運輸[うんゆ]です。\nB: はい、何[なに]でしょうか。\nA: 本日[ほんじつ]お届[とど]けする荷物[にもつ]がございますが、ご在宅[ざいたく]でしょうか。\nB: あいにく今[いま]、出張[しゅっちゅう]で留守[るす]にしています。再配達[さいはいたつ]は可能[かのう]ですか。\nA: はい。明後日[あさって]の午前[ごぜん]中[ちゅう]はいかがでしょうか。\nB: すみません、その時間[じかん]は外出[がいしゅつ]予定[よてい]です。夜[よる]は無理[むり]でしょうか。\nA: 夕方[ゆうがた]六[ろく]時[じ]以降[いこう]であればお届[とど]けできます。\nB: では、その時間[じかん]でお願[ねが]いします。",
    translation: "A: Sorry to interrupt while you're busy. This is Sagawa Express.\nB: Yes, what is it?\nA: I have a parcel to deliver today — are you home?\nB: Unfortunately I'm away on a business trip right now. Is redelivery possible?\nA: Yes. How about the morning of the day after tomorrow?\nB: Sorry, I have plans to go out then. Would evening be impossible?\nA: We can deliver after 6 p.m.\nB: Then please schedule it for that time.",
    questions: [
      {
        q: "Why can't B receive the parcel today?",
        choices: ["At work nearby", "Feeling unwell", "Away on a business trip", "Wrong address"],
        answerIndex: 2,
        explanation: "B says 今、出張で留守にしています (away on a business trip right now)."
      },
      {
        q: "What does B request?",
        choices: ["A refund", "Redelivery", "Hold at the depot", "Leave at the door"],
        answerIndex: 1,
        explanation: "B asks 再配達は可能ですか (is redelivery possible?)."
      },
      {
        q: "Why doesn't the morning after tomorrow work?",
        choices: ["Has plans to go out", "Will be sleeping", "Has a visitor", "Will be cooking"],
        answerIndex: 0,
        explanation: "B says その時間は外出予定です (I have plans to go out then)."
      },
      {
        q: "When will the parcel be delivered?",
        choices: ["Tomorrow morning", "Tomorrow evening", "After noon the day after tomorrow", "After 6 p.m."],
        answerIndex: 3,
        explanation: "A says 夕方六時以降であればお届けできます (we can deliver after 6 p.m.)."
      }
    ],
    estMinutes: 3,
    tags: ["delivery", "phone"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-16 — At the pharmacy
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-16",
    title: "薬局[やっきょく]で",
    level: "N3",
    context: "At a pharmacy — a customer picks up prescription medicine",
    text: "A: 先生[せんせい]の処方箋[しょほうせん]を持[も]ってきました。\nB: ありがとうございます。少[しょう]々お待[ま]ちください。\nA: この薬[くすり]は食後[しょくご]に飲[の]めばよろしいですか。\nB: はい。ただ、このカプセルは必[かなら]ず水[みず]で飲[の]んでください。\nA: わかりました。副作用[ふくさよう]などはありますか。\nB: まれに胃[い]が痛[いた]くなる場合[ばあい]がありますが、ひどければ受診[じゅしん]してください。\nA: わかりました。ありがとうございます。",
    translation: "A: I brought the doctor's prescription.\nB: Thank you. Please wait a moment.\nA: Is it fine to take this medicine after meals?\nB: Yes. However, please be sure to take this capsule with water.\nA: Understood. Are there any side effects?\nB: Rarely your stomach may hurt, but if it's severe please see a doctor.\nA: Understood. Thank you.",
    questions: [
      {
        q: "What did the customer bring?",
        choices: ["The doctor's prescription", "An insurance card", "A previous receipt", "A medicine sample"],
        answerIndex: 0,
        explanation: "A says 先生の処方箋を持ってきました (I brought the doctor's prescription)."
      },
      {
        q: "When should the medicine be taken?",
        choices: ["Before meals", "After meals", "On an empty stomach", "Before sleep"],
        answerIndex: 1,
        explanation: "A asks 食後に飲めばよろしいですか (is it fine to take after meals?) and B confirms."
      },
      {
        q: "How should the capsule be taken?",
        choices: ["With tea", "With juice", "With water", "Without liquid"],
        answerIndex: 2,
        explanation: "B says このカプセルは必ず水で飲んでください (be sure to take this capsule with water)."
      },
      {
        q: "What side effect is mentioned?",
        choices: ["Drowsiness", "Headache", "Rash", "Stomach pain (rarely)"],
        answerIndex: 3,
        explanation: "B says まれに胃が痛くなる場合があります (rarely your stomach may hurt)."
      }
    ],
    estMinutes: 3,
    tags: ["pharmacy", "health"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-17 — Discussing a volunteer event
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-17",
    title: "ボランティア活動[かつどう]の打合[うちあ]わせ",
    level: "N3",
    context: "At a community center — volunteers plan a cleanup event",
    text: "A: 来週末[らいしゅうまつ]の清掃[せいそう]ボランティアの打合[うちあ]わせを始[はじ]めます。\nB: 参加者[さんかしゃ]は今[いま]のところ二十[にじゅう]名[めい]です。\nA: 予想[よそう]より多[おお]いですね。作業[さぎょう]の分担[ぶんたん]を見直[みなお]しましょう。\nB: ええ。私[わたし]は公園[こうえん]の草[くさ]むしりを担当[たんとう]します。\nA: では、私[わたし]はゴミの分別[ぶんべつ]と袋[ふくろ]の準備[じゅんび]をします。\nB: ありがとうございます。雨天[うてん]の場合[ばあい]は翌日[よくじつ]に延期[えんき]ですよね。\nA: はい。前日[ぜんじつ]の夕方[ゆうがた]に最終[さいしゅう]判断[はんだん]して連絡[れんらく]します。",
    translation: "A: Let's start the meeting for next weekend's cleanup volunteer event.\nB: We have twenty participants so far.\nA: That's more than expected. Let's review the work assignments.\nB: Yes. I'll be in charge of weeding the park.\nA: Then I'll handle garbage sorting and bag preparation.\nB: Thank you. In case of rain it's postponed to the next day, right?\nA: Yes. I'll make a final decision the evening before and notify everyone.",
    questions: [
      {
        q: "How many participants are there so far?",
        choices: ["Ten", "Fifteen", "Twenty", "Twenty-five"],
        answerIndex: 2,
        explanation: "B says 参加者は今のところ二十名です (twenty participants so far)."
      },
      {
        q: "What will B do?",
        choices: ["Weed the park", "Prepare bags", "Sort garbage", "Direct traffic"],
        answerIndex: 0,
        explanation: "B says 私は公園の草むしりを担当します (I'll handle weeding the park)."
      },
      {
        q: "What will A do?",
        choices: ["Weed the park", "Garbage sorting and bag preparation", "Coordinate lunch", "Lead the briefing"],
        answerIndex: 1,
        explanation: "A says ゴミの分別と袋の準備をします (I'll do garbage sorting and bag preparation)."
      },
      {
        q: "When is the rain decision made?",
        choices: ["The morning of", "The night before", "The evening before", "Two days before"],
        answerIndex: 2,
        explanation: "A says 前日の夕方に最終判断して連絡します (final decision the evening before and notify)."
      }
    ],
    estMinutes: 4,
    tags: ["volunteer", "community"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-18 — At the real estate office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-18",
    title: "不動産[ふどうさん]屋[や]で",
    level: "N3",
    context: "At a real estate agency — a customer looks for an apartment",
    text: "A: 来月[らいげつ]から勤務[きんむ]先[さき]が変[か]わるので、引越[ひっこ]しを考[かんが]えています。\nB: ご希望[きぼう]の条件[じょうけん]を教[おし]えてください。\nA: 家賃[やちん]は八[はち]万[まん]円[えん]以内[いない]で、駅[えき]から徒歩[とほ]十分[じゅっぷん]以内[いない]がいいです。\nB: そうですね。新築[しんちく]となると難[むずか]しいですが、築[ちく]五年[ごねん]以内[いない]ならあります。\nA: それで十分[じゅうぶん]です。できれば日当[ひあ]たりの良[よ]い部屋[へや]がいいです。\nB: かしこまりました。いくつか物件[ぶっけん]をご紹介[しょうかい]します。\nA: ありがとうございます。今週末[こんしゅうまつ]に内見[ないけん]に行[い]きたいです。",
    translation: "A: My workplace changes from next month, so I'm considering moving.\nB: Please tell me your preferred conditions.\nA: Rent under 80,000 yen, within a 10-minute walk from the station.\nB: I see. A brand-new one would be difficult, but we have ones built within five years.\nA: That's fine. If possible, I'd like a sunny room.\nB: Understood. I'll introduce a few properties.\nA: Thank you. I'd like to go view them this weekend.",
    questions: [
      {
        q: "Why is the customer moving?",
        choices: ["Found a cheaper place", "Wants more space", "Workplace changes from next month", "Family grew"],
        answerIndex: 2,
        explanation: "A says 来月から勤務先が変わるので、引越しを考えています (workplace changes from next month, so I'm considering moving)."
      },
      {
        q: "What is the rent limit?",
        choices: ["Under 50,000 yen", "Under 80,000 yen", "Under 100,000 yen", "Under 120,000 yen"],
        answerIndex: 1,
        explanation: "A says 家賃は八万円以内で (rent under 80,000 yen)."
      },
      {
        q: "What kind of building can the agent offer?",
        choices: ["Built within five years", "Brand new", "Over ten years old", "Shared housing"],
        answerIndex: 0,
        explanation: "B says 築五年以内ならあります (we have ones built within five years)."
      },
      {
        q: "What does the customer prefer?",
        choices: ["A ground-floor unit", "A sunny room", "A quiet corner", "A renovated kitchen"],
        answerIndex: 1,
        explanation: "A says できれば日当たりの良い部屋がいいです (if possible, a sunny room)."
      }
    ],
    estMinutes: 4,
    tags: ["housing", "realestate"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-19 — Talking about a cooking recipe
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-19",
    title: "料理[りょうり]の作[つく]り方[かた]",
    level: "N3",
    context: "At home — a friend teaches a curry recipe",
    text: "A: このカレーの作[つく]り方[かた]を教[おし]えていただけませんか。\nB: いいですよ。まず、玉葱[たまねぎ]を薄[うす]く切[き]って、よく炒[いた]めてください。\nA: 焦[こ]げないように気[き]をつければいいですね。\nB: ええ。透[す]き通[とお]るまでじっくり炒[いた]めるのがポイントです。\nA: 次[つぎ]に、肉[にく]と野菜[やさい]を加[くわ]えるんですね。\nB: はい。それから水[みず]を入[い]れ、柔[やわ]らかくなるまで煮[に]てください。\nA: わかりました。最後[さいご]にルーを入[い]れてとろみをつけるんですね。",
    translation: "A: Could you teach me how to make this curry?\nB: Sure. First, slice the onion thinly and fry it well.\nA: I just need to be careful not to burn it, right?\nB: Yes. Frying it slowly until it becomes translucent is the key point.\nA: Next, I add the meat and vegetables, right?\nB: Yes. Then add water and simmer until they become tender.\nA: Understood. Finally I add the roux to thicken it, right?",
    questions: [
      {
        q: "What does A want to learn?",
        choices: ["How to make soup", "How to make curry", "How to make bread", "How to make salad"],
        answerIndex: 1,
        explanation: "A says このカレーの作り方を教えていただけませんか (could you teach me how to make this curry?)."
      },
      {
        q: "What is the key point?",
        choices: ["Burning the onion", "Frying the onion until translucent", "Boiling quickly", "Skipping the onion"],
        answerIndex: 1,
        explanation: "B says 透き通るまでじっくり炒めるのがポイントです (frying slowly until translucent is the key)."
      },
      {
        q: "When is water added?",
        choices: ["After adding meat and vegetables", "Before the onion", "Instead of the roux", "At the very start"],
        answerIndex: 0,
        explanation: "B says それから水を入れ (then add water) after adding the meat and vegetables."
      },
      {
        q: "What is done last?",
        choices: ["Fry the onion", "Add water", "Simmer", "Add the roux to thicken"],
        answerIndex: 3,
        explanation: "A summarizes 最後にルーを入れてとろみをつけるんですね (finally add the roux to thicken)."
      }
    ],
    estMinutes: 3,
    tags: ["cooking", "recipe"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-20 — A conversation about AI
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-20",
    title: "AIについて語[かた]り合[あ]う",
    level: "N3",
    context: "At a university — students discuss AI's impact on society",
    text: "A: 最近[さいきん]、AIが文章[ぶんしょう]を書[か]くニュースを見[み]ましたか。\nB: ええ。便利[べんり]な半面[はんめん]、仕事[しごと]が奪[うば]われる不安[ふあん]もあります。\nA: 確[たし]かに。ただ、人間[にんげん]の創造性[そうぞうせい]までは代替[だいたい]できないと思[おも]います。\nB: 同感[どうかん]です。AIを道具[どうぐ]として使[つか]いこなす力[ちから]が求[もと]められるでしょう。\nA: そうですね。倫理[りんり]の問題[もんだい]も忘[わす]れてはいけませんよ。\nB: ええ、個人情報[こじんじょうほう]の取扱[とりあつか]いには特[とく]に慎重[しんちょう]になるべきです。\nA: テクノロジーと社会[しゃかい]のバランスを考[かんが]え続[つづ]ける必要[ひつよう]がありますね。",
    translation: "A: Did you see the recent news about AI writing text?\nB: Yes. It's convenient, but on the other hand there's anxiety that jobs will be taken away.\nA: Indeed. However, I think it can't replace human creativity.\nB: I agree. The ability to master AI as a tool will likely be required.\nA: Right. We mustn't forget the ethical issues either.\nB: Yes, we should be especially careful with the handling of personal information.\nA: We need to keep considering the balance between technology and society.",
    questions: [
      {
        q: "What news did A see?",
        choices: ["AI replacing doctors", "AI writing text", "AI drawing art", "AI driving cars"],
        answerIndex: 1,
        explanation: "A says AIが文章を書くニュースを見ましたか (did you see news about AI writing text?)."
      },
      {
        q: "What is B's concern?",
        choices: ["Cost of AI tools", "AI becoming too smart", "Jobs being taken away", "AI making mistakes"],
        answerIndex: 2,
        explanation: "B says 仕事が奪われる不安もあります (there's anxiety that jobs will be taken away), using 〜半面."
      },
      {
        q: "What can AI not replace, per A?",
        choices: ["Human creativity", "Data entry", "Translation", "Calculation"],
        answerIndex: 0,
        explanation: "A says 人間の創造性までは代替できないと思います (it can't replace human creativity)."
      },
      {
        q: "What should we be careful with?",
        choices: ["Costs", "Training data", "Handling of personal information", "Hardware specs"],
        answerIndex: 2,
        explanation: "B says 個人情報の取扱いには特に慎重になるべきです (we should be especially careful with personal information handling)."
      }
    ],
    estMinutes: 4,
    tags: ["technology", "ai"]
  }
];
