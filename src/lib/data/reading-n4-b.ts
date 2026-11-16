import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.

export const readingN4B: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // N4 — 在宅勤務の生活 (Working from home)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-11",
    title: "在宅[ざいたく]勤務[きんむ]の生活[せいかつ]",
    titleReading: "ざいたくきんむのせいかつ",
    level: "N4",
    summary: "A worker shares how remote life changed their daily rhythm, work, and health.",
    estMinutes: 6,
    tags: ["work", "lifestyle", "remote work"],
    body: [
      "去年[きょねん]から、私[わたし]は在宅[ざいたく]勤務[きんむ]を始[はじ]めました。毎朝[まいあさ]電車[でんしゃ]に乗[の]らなくなりました。家[いえ]で仕事[しごと]をすると、自由[じゆう]な時間[じかん]がたくさんできます。朝[あさ]はコーヒーを飲[の]みながら、パソコンを開[あ]けます。静[しず]かな部屋[へや]で集中[しゅうちゅう]できるので、仕事[しごと]が早[はや]く終[お]わります。",
      "しかし、在宅[ざいたく]勤務[きんむ]には問題[もんだい]もあります。一日中[いちにちじゅう]家[いえ]にいると、運動[うんどう]が足[た]りなくなります。また、同僚[どうりょう]と話[はな]す機会[きかい]が減[へ]りました。時々[ときどき]、寂[さび]しくなることがあります。だから、週[しゅう]に二回[ふたかい]は会社[かいしゃ]へ行[い]くことにしました。",
      "仕事[しごと]の後[あと]、近[ちか]くの公園[こうえん]を散歩[さんぽ]します。これで、運動[うんどう]が足[た]りない部分[ぶぶん]を補[おぎな]っています。散歩[さんぽ]しながら、明日[あした]の計画[けいかく]を考[かんが]えます。天気[てんき]が良[よ]ければ、木[き]の下[した]で本[ほん]を読[よ]むこともあります。この時間[じかん]が私[わたし]にはとても大切[たいせつ]です。",
      "在宅[ざいたく]勤務[きんむ]は楽[らく]ではありませんが、良[よ]いところもたくさんあります。自分[じぶん]のペースで仕事[しごと]ができるのが一番[いちばん]の魅力[みりょく]です。これからも、会社[かいしゃ]と家[いえ]のいい所[ところ]をバランスよく使[つか]いたいです。みんなが自分[じぶん]に合[あ]う働[はたら]き方[かた]を見[み]つければいいと思[おも]います。"
    ],
    translation: [
      "Since last year, I started working from home. Every morning I no longer ride the train. When I work at home, I have a lot of free time. In the morning, while drinking coffee, I open my laptop. Because I can concentrate in a quiet room, my work finishes early.",
      "However, working from home also has problems. If I stay home all day, I don't get enough exercise. Also, opportunities to talk with colleagues decreased. Sometimes I feel lonely. So, I decided to go to the office twice a week.",
      "After work, I walk in a nearby park. With this, I make up for the parts where I lack exercise. While walking, I think about tomorrow's plan. If the weather is good, I sometimes read a book under a tree. This time is very important to me.",
      "Working from home is not easy, but there are also many good points. The biggest attraction is being able to work at my own pace. From now on, I want to use the good points of both the office and home in a balanced way. I think it would be good if everyone finds a way of working that suits them."
    ],
    questions: [
      {
        q: "What did the writer start doing last year?",
        choices: ["Working from home", "Going to a new office", "Drinking coffee every morning", "Riding the train every day"],
        answerIndex: 0,
        explanation: "The writer says that since last year they started working from home (在宅勤務)."
      },
      {
        q: "What is mentioned as a problem of working from home?",
        choices: ["The laptop is too heavy", "Not enough exercise and fewer chances to talk with colleagues", "The office is too far from home", "Coffee is too expensive"],
        answerIndex: 1,
        explanation: "The passage lists not getting enough exercise and fewer chances to talk with coworkers as problems."
      },
      {
        q: "How does the writer make up for the lack of exercise?",
        choices: ["By running to the station", "By going to a gym", "By walking in a nearby park", "By working standing up"],
        answerIndex: 2,
        explanation: "After work the writer walks in a nearby park to make up for insufficient exercise."
      },
      {
        q: "How often does the writer go to the office now?",
        choices: ["Every day", "Once a month", "Never", "Twice a week"],
        answerIndex: 3,
        explanation: "The writer decided to go to the office twice a week."
      },
      {
        q: "What does the writer think is the biggest appeal of working from home?",
        choices: ["Being able to work at one's own pace", "Sleeping late", "Not having a boss", "Free coffee at home"],
        answerIndex: 0,
        explanation: "The writer says working at their own pace is the biggest charm of remote work."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 町内会の活動 (A neighborhood association)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-12",
    title: "町内会[ちょうないかい]の活動[かつどう]",
    titleReading: "ちょうないかいのかつどう",
    level: "N4",
    summary: "A resident describes the neighborhood association's meetings, festival, and care for elderly neighbors.",
    estMinutes: 7,
    tags: ["community", "festival", "neighborhood"],
    body: [
      "私[わたし]が住[す]む町[まち]には、町内会[ちょうないかい]という組織[そしき]があります。月[つき]に一回[いっかい]、近所[ちかじょ]の人[ひと]が集[あつ]まって、会議[かいぎ]をします。ゴミの日[ひ]や防災[ぼうさい]のことについて話[はな]し合[あ]います。最初[さいしょ]は緊張[きんちょう]しましたが、今[いま]では楽[たの]しいです。地域[ちいき]の安全[あんぜん]を守[まも]るため、みんなが協力[きょうりょく]しています。",
      "先月[せんげつ]、町内会[ちょうないかい]は祭[まつ]りを開催[かいさい]しました。私[わたし]は焼[や]きそばの屋台[やたい]を手伝[てつだ]いました。子供[こども]たちが元気[げんき]に走[はし]り回[まわ]っていました。知[し]らない人[ひと]とも、自然[しぜん]に挨拶[あいさつ]ができるようになりました。終[お]わった後[あと]、みんなで片付[かたづ]けをしました。",
      "町内会[ちょうないかい]のもう一[ひと]つの役割[やくわり]は、高齢者[こうれいしゃ]の支援[しえん]です。毎週[まいしゅう]、お年寄[としよ]りの家[いえ]を訪[たず]ねます。元気[げんき]かどうか確認[かくにん]して、買[か]い物[もの]を手伝[てつだ]います。独[ひと]りで住[す]む人[ひと]にとって、この交流[こうりゅう]は大切[たいせつ]です。私[わたし]もおばあちゃんから昔話[むかしばなし]を聞[き]くのが好[す]きです。",
      "引[ひ]っ越[こ]してきたばかりの人[ひと]にも、町内会[ちょうないかい]は役[やく]に立[た]ちます。新[あたら]しい生活[せいかつ]に慣[な]れるまで、近所[ちかじょ]が助[たす]けてくれます。困[こま]ったことがあれば、相談[そうだん]できる場所[ばしょ]があると安心[あんしん]です。私[わたし]も引[ひ]っ越[こ]してきた時[とき]、隣[となり]の人[ひと]が親切[しんせつ]でした。この温[あたた]かい関係[かんけい]をこれからも続[つづ]けたいです。"
    ],
    translation: [
      "In the town where I live, there is an organization called the neighborhood association. Once a month, neighbors gather and hold a meeting. We discuss garbage days and disaster prevention. At first I was nervous, but now it's fun. Everyone cooperates to protect the safety of the community.",
      "Last month, the neighborhood association held a festival. I helped at a yakisoba stall. Children were running around energetically. I came to be able to greet strangers naturally too. After it ended, everyone cleaned up together.",
      "Another role of the neighborhood association is supporting elderly people. Every week, I visit the homes of elderly people. I check whether they are well and help with shopping. For people living alone, this interaction is important. I also like hearing old stories from an elderly woman.",
      "The neighborhood association is also useful for people who have just moved in. Until they get used to their new life, neighbors help them. If there's a place to consult when in trouble, it's reassuring. When I moved in, the person next door was kind. I want to continue this warm relationship from now on."
    ],
    questions: [
      {
        q: "How often does the neighborhood association hold meetings?",
        choices: ["Once a week", "Once a month", "Twice a year", "Every day"],
        answerIndex: 1,
        explanation: "The passage states the association meets once a month."
      },
      {
        q: "What did the writer do at the festival last month?",
        choices: ["Helped at a yakisoba stall", "Sold drinks", "Performed on stage", "Took photos"],
        answerIndex: 0,
        explanation: "The writer helped at a yakisoba (焼きそば) stall."
      },
      {
        q: "What is another role of the neighborhood association mentioned in paragraph 3?",
        choices: ["Cleaning the park", "Teaching Japanese to foreigners", "Supporting elderly people", "Organizing sports events"],
        answerIndex: 2,
        explanation: "The third paragraph explains supporting elderly residents."
      },
      {
        q: "How does the writer feel about the neighborhood association now?",
        choices: ["It is fun and reassuring", "It is a waste of time", "It is too strict", "It is too expensive"],
        answerIndex: 0,
        explanation: "The writer now finds it fun and feels reassured by the warm relationships."
      },
      {
        q: "What did the neighbor do when the writer moved in?",
        choices: ["Said nothing", "Brought gifts", "Held a party", "Was kind"],
        answerIndex: 3,
        explanation: "The writer notes the next-door neighbor was kind when they moved in."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 健康の大切さ (The importance of health)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-13",
    title: "健康[けんこう]の大切[たいせつ]さ",
    titleReading: "けんこうのたいせつさ",
    level: "N4",
    summary: "After a health scare, the writer rebuilds daily habits and learns why health matters.",
    estMinutes: 6,
    tags: ["health", "lifestyle", "habit"],
    body: [
      "若[わか]い時[とき]、私[わたし]は健康[けんこう]についてあまり考[かんが]えませんでした。毎日[まいにち]遅[おそ]くまで仕事[しごと]をして、週末[しゅうまつ]も遊[あそ]んでいました。睡眠[すいみん]時間[じかん]が短[みじか]くても、平気[へいき]だと思[おも]っていました。しかし、三十歳[さんじゅうさい]を過[す]ぎてから、体[からだ]に変化[へんか]が出[で]始[はじ]めました。朝[あさ]起[お]きるのが辛[つら]くなりました。",
      "ある日[ひ]、私[わたし]は倒[たお]れて病院[びょういん]に運[はこ]ばれました。医者[いしゃ]は「生活[せいかつ]習慣[しゅうかん]を見直[みなお]さなければならない」と言[い]いました。それから、私[わたし]は毎日[まいにち]三十分[さんじゅっぷん]歩[ある]くことにしました。食事[しょくじ]も野菜[やさい]を多[おお]く取[と]るようにしました。お酒[さけ]も週末[しゅうまつ]だけに減[へ]らしました。",
      "三[みっ]か月[げつ]続[つづ]けた結果[けっか]、体[からだ]が軽[かる]くなりました。朝[あさ]も元気[げんき]に起[お]きられるようになりました。体重[たいじゅう]も三[さん]キロ減[へ]りました。一番[いちばん]良[よ]かったのは、気持[きも]ちが前向[まえむ]きになったことです。健康[けんこう]の大切[たいせつ]さが、ようやく分[わ]かりました。",
      "今[いま]では、健康[けんこう]は「当[あ]たり前[まえ]」ではなく、努力[どりょく]して保[たも]つものだと分[わ]かりました。忙[いそが]しいときほど、体[からだ]を休[やす]める時間[じかん]が必要[ひつよう]です。私[わたし]はこれからも、毎日[まいにち]の習慣[しゅうかん]を大切[たいせつ]にします。みんなも自分[じぶん]の体[からだ]を大切[たいせつ]にしてほしいです。"
    ],
    translation: [
      "When I was young, I didn't think much about health. I worked late every day and played on weekends too. I thought I'd be fine even with short sleep. However, after I turned thirty, changes began to appear in my body. It became hard to wake up in the morning.",
      "One day, I collapsed and was taken to the hospital. The doctor said, \"You must review your lifestyle habits.\" After that, I decided to walk for thirty minutes every day. I also made sure to eat more vegetables. I also reduced alcohol to weekends only.",
      "As a result of continuing for three months, my body became lighter. I also came to wake up energetically in the morning. My weight also dropped by three kilograms. The best thing was that my mindset became more positive. I finally understood the importance of health.",
      "Now I understand that health is not \"something to take for granted\" but something to maintain through effort. The busier you are, the more you need time to rest your body. I will continue to value my daily habits. I want everyone to take good care of their bodies too."
    ],
    questions: [
      {
        q: "How did the writer feel about health when young?",
        choices: ["Didn't think much about it", "Worried about it constantly", "Studied it seriously", "Talked about it often"],
        answerIndex: 0,
        explanation: "When young, the writer did not think much about health."
      },
      {
        q: "What did the doctor say?",
        choices: ["Take more medicine", "Stop working completely", "Review your lifestyle habits", "Exercise two hours a day"],
        answerIndex: 2,
        explanation: "The doctor told the writer to review their lifestyle habits."
      },
      {
        q: "What change did the writer make to meals?",
        choices: ["Eat more vegetables", "Eat more meat", "Skip breakfast", "Eat only rice"],
        answerIndex: 0,
        explanation: "The writer started eating more vegetables."
      },
      {
        q: "What was the best result after three months?",
        choices: ["Made new friends", "Got a promotion", "Mindset became more positive", "Became richer"],
        answerIndex: 2,
        explanation: "The best result was that the writer's mindset became more positive."
      },
      {
        q: "What does the writer want everyone to do?",
        choices: ["Take care of their bodies", "Work harder", "Sleep less", "Eat expensive food"],
        answerIndex: 0,
        explanation: "The writer hopes everyone will take good care of their bodies."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 私の読書の習慣 (Reading habits)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-14",
    title: "私[わたし]の読書[どくしょ]の習慣[しゅうかん]",
    titleReading: "わたしのどくしょのしゅうかん",
    level: "N4",
    summary: "A lifelong reader explains how the nightly reading habit shapes the heart and mind.",
    estMinutes: 5,
    tags: ["books", "hobby", "habit"],
    body: [
      "私[わたし]は小[ちい]さい時[とき]から本[ほん]を読[よ]むのが好[す]きでした。毎晩[まいばん]、母[はは]が絵本[えほん]を読[よ]んでくれました。その時[とき]の温[あたた]かい気持[きも]ちを今[いま]も覚[おぼ]えています。学生[がくせい]になってからは、図書館[としょかん]に通[かよ]うようになりました。一週間[いっしゅうかん]に三冊[さんさつ]くらい本[ほん]を借[か]ります。",
      "最近[さいきん]は電子書籍[でんししょせき]も使[つか]いますが、紙[かみ]の本[ほん]がやはり一番[いちばん]好[す]きです。ページをめくる感覚[かんかく]がたまりません。カフェで本[ほん]を読[よ]む時間[じかん]は、私[わたし]にとって特別[とくべつ]な時間[じかん]です。コーヒーの香[かお]りと本[ほん]の世界[せかい]に浸[ひた]ります。忙[いそが]しい日々[ひび]を忘[わす]れることができます。",
      "読書[どくしょ]の良[よ]さは、いろいろな人[ひと]の人生[じんせい]を体験[たいけん]できることです。自分[じぶん]と違[ちが]う考[かんが]え方[かた]に出会[であ]えます。本[ほん]を読[よ]むと、言葉[ことば]の力[ちから]も自然[しぜん]に身[み]につきます。視野[しや]が広[ひろ]がるのも嬉[うれ]しいです。特[とく]に小説[しょうせつ]は、人[ひと]の心[こころ]を豊[ゆた]かにしてくれると思[おも]います。",
      "今[いま]は毎晩[まいばん]、寝[ね]る前[まえ]に三十分[さんじゅっぷん]本[ほん]を読[よ]みます。これを習慣[しゅうかん]にしてから、睡眠[すいみん]の質[しつ]も良[よ]くなりました。本[ほん]を読[よ]むことは、心[こころ]の栄養[えいよう]だと私[わたし]は思[おも]います。みんなにも、自分[じぶん]に合[あ]う本[ほん]を見[み]つけてほしいです。"
    ],
    translation: [
      "I have liked reading books since I was small. Every night, my mother read picture books to me. I still remember the warm feeling from that time. After becoming a student, I started going to the library. I borrow about three books a week.",
      "Recently I use e-books too, but paper books are still my favorite. The sensation of turning pages is irresistible. Time reading a book at a cafe is special to me. I immerse myself in the scent of coffee and the world of the book. I can forget my busy days.",
      "The goodness of reading is that you can experience many people's lives. You can encounter ways of thinking different from your own. When you read books, the power of words naturally sticks to you. It's also nice that your perspective widens. I especially think novels enrich people's hearts.",
      "Now every night, I read a book for thirty minutes before sleeping. Since making this a habit, the quality of my sleep has also improved. I think reading books is nourishment for the heart. I want everyone to find a book that suits them too."
    ],
    questions: [
      {
        q: "Who read picture books to the writer at night?",
        choices: ["Mother", "Father", "Older sister", "Teacher"],
        answerIndex: 0,
        explanation: "The writer's mother read picture books every night."
      },
      {
        q: "What does the writer like best?",
        choices: ["E-books", "Magazines", "Paper books", "Newspapers"],
        answerIndex: 2,
        explanation: "Although the writer uses e-books, paper books are still the favorite."
      },
      {
        q: "According to paragraph 3, what is a benefit of reading?",
        choices: ["Encountering different ways of thinking", "Making money", "Becoming famous", "Saving time"],
        answerIndex: 0,
        explanation: "Reading lets you encounter ways of thinking different from your own."
      },
      {
        q: "What has improved since making reading a nightly habit?",
        choices: ["Salary", "Sleep quality", "Eyesight", "Memory"],
        answerIndex: 1,
        explanation: "Since the nightly reading habit, the writer's sleep quality has improved."
      },
      {
        q: "What does the writer compare reading to?",
        choices: ["Nourishment for the heart", "A tool for work", "A way to pass time", "A kind of sport"],
        answerIndex: 0,
        explanation: "The writer calls reading nourishment for the heart."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 語学交換の経験 (A language exchange)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-15",
    title: "語学[ごがく]交換[こうかん]の経験[けいけん]",
    titleReading: "ごがくこうかんのけいけん",
    level: "N4",
    summary: "Through a weekly language exchange, two students grow in language, culture, and friendship.",
    estMinutes: 6,
    tags: ["language", "friendship", "culture"],
    body: [
      "私[わたし]は日本語[にほんご]を勉強[べんきょう]している外国人[がいこくじん]と、言葉[ことば]を交換[こうかん]しています。相手[あいて]はアメリカから来[き]た大学生[だいがくせい]のマイクです。週[しゅう]に一回[いっかい]、カフェで二時間[にじかん]一緒[いっしょ]に勉強[べんきょう]します。前半[ぜんはん]は日本語[にほんご]、後半[こうはん]は英語[えいご]で話[はな]します。お互[たが]いに教[おし]え合[あ]うので、勉強[べんきょう]が楽[たの]しいです。",
      "最初[さいしょ]は緊張[きんちょう]しました。私[わたし]の日本語[にほんご]が間違[まちが]っていたらどうしようと思[おも]いました。でも、マイクは「間違[まちが]えても大丈夫[だいじょうぶ]だよ」と言[い]ってくれました。それから、失敗[しっぱい]を恐[おそ]れずに話[はな]せるようになりました。間違[まちが]いを直[なお]してもらうと、よく覚[おぼ]えます。",
      "マイクは漢字[かんじ]が難[むずか]しいと言[い]います。私[わたし]は漢字[かんじ]の書[か]き順[じゅん]を教[おし]えたり、例文[れいぶん]を作[つく]ったりします。マイクは発音[はつおん]がとても上手[じょうず]です。私[わたし]は英語[えいご]の発音[はつおん]に悩[なや]んでいます。マイクが根気[こんき]よく直[なお]してくれるので、助[たす]かっています。",
      "語学[ごがく]交換[こうかん]を始[はじ]めてから、言葉[ことば]だけではなく文化[ぶんか]も学[まな]べました。マイクからアメリカの習慣[しゅうかん]を聞[き]きます。私[わたし]も日本[にほん]の文化[ぶんか]を説明[せつめい]することが増[ふ]えました。言葉[ことば]の勉強[べんきょう]を通[とお]じて、友達[ともだち]ができたのは最高[さいこう]です。これからも続[つづ]けたいです。"
    ],
    translation: [
      "I do a language exchange with a foreigner studying Japanese. My partner is Mike, a university student from America. Once a week, we study together at a cafe for two hours. The first half is in Japanese, and the second half is in English. Since we teach each other, studying is fun.",
      "At first I was nervous. I worried about what would happen if my Japanese was wrong. But Mike told me, \"It's okay to make mistakes.\" After that, I came to be able to speak without fear of failure. When I have my mistakes corrected, I remember them well.",
      "Mike says kanji is difficult. I teach kanji stroke order and make example sentences. Mike's pronunciation is very good. I struggle with English pronunciation. Mike patiently corrects me, which helps a lot.",
      "Since starting the language exchange, I learned not only language but also culture. I hear about American customs from Mike. I also came to explain Japanese culture more. Making friends through language study is the best. I want to continue from now on."
    ],
    questions: [
      {
        q: "Where is Mike from?",
        choices: ["America", "England", "Canada", "Australia"],
        answerIndex: 0,
        explanation: "Mike is a university student from America."
      },
      {
        q: "How often do they study together?",
        choices: ["Twice a week", "Every day", "Once a week", "Once a month"],
        answerIndex: 2,
        explanation: "They study together once a week at a cafe."
      },
      {
        q: "What did Mike tell the writer?",
        choices: ["It's okay to make mistakes", "Speak more slowly", "Use easier words", "Study kanji more"],
        answerIndex: 0,
        explanation: "Mike said it is fine to make mistakes."
      },
      {
        q: "What does the writer help Mike with?",
        choices: ["English grammar", "Kanji stroke order and example sentences", "American history", "Pronunciation practice"],
        answerIndex: 1,
        explanation: "The writer teaches kanji stroke order and makes example sentences."
      },
      {
        q: "What is the best thing the writer gained?",
        choices: ["Making friends through language study", "Getting good test scores", "Becoming fluent quickly", "Finding a job"],
        answerIndex: 0,
        explanation: "The writer says making friends through language study was the best."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 日本料理と文化 (Japanese cuisine and culture)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-16",
    title: "日本料理[にほんりょうり]と文化[ぶんか]",
    titleReading: "にほんりょうりとぶんか",
    level: "N4",
    summary: "A home cook explores how Japanese food carries seasons, beauty, and culture to others.",
    estMinutes: 7,
    tags: ["food", "culture", "cooking"],
    body: [
      "日本料理[にほんりょうり]は世界中[せかいじゅう]で人気[にんき]があります。寿司[すし]や天[てん]ぷらは有名[ゆうめい]ですが、毎日[まいにち]の食[た]べ物[もの]はもっと簡単[かんたん]です。朝[あさ]ご飯[はん]は、ご飯[はん]と味噌汁[みそしる]と焼[や]き魚[ざかな]がよく出[で]ます。これらは栄養[えいよう]のバランスが良[よ]いと言[い]われています。私[わたし]は家[いえ]で母[はは]の料理[りょうり]を食[た]べて育[そだ]ちました。",
      "日本[にほん]の食文化[しょくぶんか]には「季節[きせつ]を感[かん]じる」という要素[ようそ]があります。春[はる]には桜餅[さくらもち]、夏[なつ]にはそうめん、秋[あき]には栗[くり]ご飯[はん]、冬[ふゆ]には鍋料理[なべりょうり]を食[た]べます。見[み]た目[め]も大切[たいせつ]で、器[うつわ]に合[あ]わせて盛[も]り付[つ]けます。目[め]でも味[あじ]わえるのが、日本料理[にほんりょうり]の特長[とくちょう]です。季節[きせつ]の食材[しょくざい]を使[つか]うと、体[からだ]にも良[よ]いそうです。",
      "私[わたし]は週末[しゅうまつ]に料理[りょうり]を作[つく]ります。最初[さいしょ]は難[むずか]しかったですが、次第[しだい]に上達[じょうたつ]しました。母[はは]に教[おし]わりながら、煮物[にもの]や揚[あ]げ物[もの]を練習[れんしゅう]しています。失敗[しっぱい]しても、自分[じぶん]で作[つく]ると美味[おい]しいです。料理[りょうり]を通[とお]じて、文化[ぶんか]が見[み]えてきます。",
      "外国[がいこく]から来[き]た友達[ともだち]に手巻[てまき]寿司[すし]を振[ふ]る舞[ま]ったことがあります。みんなで自分[じぶん]の好[す]きな具[ぐ]を巻[ま]いて食[た]べるのは楽[たの]しいです。料理[りょうり]を通[とお]じて、文化[ぶんか]の違[ちが]いを話[はな]せました。食[た]べ物[もの]には人[ひと]を繋[つな]ぐ力[ちから]があると思[おも]います。これからも、日本料理[にほんりょうり]を大切[たいせつ]にしたいです。"
    ],
    translation: [
      "Japanese cuisine is popular all over the world. Sushi and tempura are famous, but everyday food is simpler. Breakfast often includes rice, miso soup, and grilled fish. These are said to have good nutritional balance. I grew up eating my mother's cooking at home.",
      "Japanese food culture has an element of \"feeling the seasons.\" In spring, sakura mochi; in summer, somen; in autumn, chestnut rice; in winter, hot pot dishes. Appearance is also important, and we plate dishes to match the vessels. Being able to savor with the eyes too is a feature of Japanese cuisine. Using seasonal ingredients is said to be good for the body.",
      "I cook on weekends. At first it was difficult, but I gradually improved. While learning from my mother, I practice simmered dishes and fried dishes. Even if I fail, food I make myself is delicious. Through cooking, culture becomes visible.",
      "I once served hand-rolled sushi to a friend from abroad. It's fun for everyone to roll their favorite ingredients and eat. Through cooking, we could talk about cultural differences. I think food has the power to connect people. I want to cherish Japanese cuisine from now on."
    ],
    questions: [
      {
        q: "What is a typical Japanese breakfast mentioned?",
        choices: ["Rice, miso soup, and grilled fish", "Bread and eggs", "Cereal and milk", "Noodles and tempura"],
        answerIndex: 0,
        explanation: "Breakfast often includes rice, miso soup, and grilled fish."
      },
      {
        q: "What is an important element of Japanese food culture?",
        choices: ["Eating quickly", "Using expensive ingredients", "Feeling the seasons", "Eating only raw food"],
        answerIndex: 2,
        explanation: "Feeling the seasons (季節を感じる) is an important element."
      },
      {
        q: "What does the writer practice making?",
        choices: ["Simmered dishes and fried dishes", "Sushi and tempura", "Cakes and bread", "Curry and ramen"],
        answerIndex: 0,
        explanation: "The writer practices simmered dishes (煮物) and fried dishes (揚げ物)."
      },
      {
        q: "What did the writer serve to a foreign friend?",
        choices: ["Tempura", "Curry rice", "Hand-rolled sushi", "Soba noodles"],
        answerIndex: 2,
        explanation: "The writer served hand-rolled sushi (手巻寿司)."
      },
      {
        q: "What does the writer think food has?",
        choices: ["The power to connect people", "The power to make money", "The power to save time", "The power to cure illness"],
        answerIndex: 0,
        explanation: "The writer believes food has the power to connect people."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — ボランティアの経験 (A volunteer experience)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-17",
    title: "ボランティアの経験[けいけん]",
    titleReading: "ぼらんてぃあのけいけん",
    level: "N4",
    summary: "A weekend park volunteer discovers how small actions build community and pride.",
    estMinutes: 6,
    tags: ["volunteer", "community", "experience"],
    body: [
      "先月[せんげつ]、私[わたし]は地元[じもと]の公園[こうえん]でボランティアをしました。週末[しゅうまつ]に集[あつ]まった二十人[にじゅうにん]ぐらいで、ゴミを拾[ひろ]ったり、草[くさ]を抜[ぬ]いたりしました。朝[あさ]八時[はちじ]に集合[しゅうごう]して、三時間[さんじかん]ほど働[はたら]きました。初[はじ]めて会[あ]う人[ひと]と一緒[いっしょ]に作業[さぎょう]するので、少[すこ]し緊張[きんちょう]しました。でも、みんな優[やさ]しくて、すぐに打[う]ち解[と]けました。",
      "途中[とちゅう]で、お弁当[べんとう]とお茶[ちゃ]が配[くば]られました。休憩[きゅうけい]しながら、いろいろな人[ひと]と話[はな]せました。大学生[だいがくせい]や会社員[かいしゃいん]、お年寄[としよ]りまで、様々[さまざま]な人[ひと]がいました。みんなが地域[ちいき]のことを本気[ほんき]で考[かんが]えていると感[かん]じました。私[わたし]も自分[じぶん]の町[まち]をもっと好[す]きになりました。",
      "仕事[しごと]が終[お]わった後[あと]、公園[こうえん]がとてもきれいになりました。花[はな]も植[う]えられて、季節[きせつ]ごとに違[ちが]う景色[けしき]が見[み]えるそうです。私[わたし]たちの汗[あせ]の結果[けっか]、町[まち]の人[ひと]が喜[よろこ]んでくれると嬉[うれ]しいです。ボランティアは無料[むりょう]ですが、得[え]るものは大[おお]きいです。地域[ちいき]への愛[あい]が深[ふか]まりました。",
      "この経験[けいけん]を通[とお]じて、一[ひと]つのことに気[き]がつきました。小[ちい]さな行動[こうどう]が集[あつ]まると、大[おお]きな力[ちから]になるということです。私[わたし]はこれからも、時間[じかん]を見[み]つけて参加[さんか]したいです。みんなが少[すこ]しずつ協力[きょうりょく]すれば、町[まち]はもっと良[よ]くなると信[しん]じています。"
    ],
    translation: [
      "Last month, I volunteered at a park in my hometown. About twenty people gathered on the weekend and picked up trash and pulled weeds. We met at eight in the morning and worked for about three hours. I was a little nervous working with people I met for the first time. But everyone was kind, and we quickly got along.",
      "In the middle, bento boxes and tea were distributed. While resting, I could talk with various people. There were university students, company employees, and even elderly people. I felt that everyone was seriously thinking about the community. I also came to like my town more.",
      "After the work finished, the park became very clean. Flowers were also planted, and apparently you can see different scenery each season. I'm happy if the townspeople are pleased as a result of our sweat. Volunteering is free, but what you gain is big. My love for the community deepened.",
      "Through this experience, I realized one thing. Small actions gather and become a big power. I want to find time and participate from now on too. I believe that if everyone cooperates little by little, the town will get better."
    ],
    questions: [
      {
        q: "Where did the writer volunteer?",
        choices: ["A park in the hometown", "A school", "A hospital", "A library"],
        answerIndex: 0,
        explanation: "The writer volunteered at a park in their hometown."
      },
      {
        q: "How many people gathered for the volunteer work?",
        choices: ["About five", "About fifty", "About twenty", "About a hundred"],
        answerIndex: 2,
        explanation: "About twenty people gathered on the weekend."
      },
      {
        q: "What did the volunteers do?",
        choices: ["Picked up trash and pulled weeds", "Taught children", "Cooked meals", "Sold goods"],
        answerIndex: 0,
        explanation: "They picked up trash and pulled weeds."
      },
      {
        q: "What was distributed during the break?",
        choices: ["Only water", "Candy", "Bento boxes and tea", "Nothing"],
        answerIndex: 2,
        explanation: "Bento boxes and tea were distributed during the break."
      },
      {
        q: "What did the writer realize through the experience?",
        choices: ["Small actions gather and become a big power", "Volunteering is a waste of time", "Parks are not important", "People don't care about the community"],
        answerIndex: 0,
        explanation: "The writer realized that small actions together become a big power."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 仕事と生活のバランス (Balancing work and life)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-18",
    title: "仕事[しごと]と生活[せいかつ]のバランス",
    titleReading: "しごととせいかつのばらんす",
    level: "N4",
    summary: "After burning out, the writer learns to plan, set limits, and protect life outside work.",
    estMinutes: 7,
    tags: ["work", "balance", "lifestyle"],
    body: [
      "最近[さいきん]、「ワークライフバランス」という言葉[ことば]をよく聞[き]きます。仕事[しごと]と生活[せいかつ]のバランスを取[と]ることは大切[たいせつ]だそうです。私[わたし]も前[まえ]は仕事[しごと]ばかりしていました。毎晩[まいばん]遅[おそ]くまで会社[かいしゃ]にいて、休[やす]みの日[ひ]も出勤[しゅっきん]していました。その時[とき]は充実[じゅうじつ]していると思[おも]っていましたが、実[じつ]は無理[むり]をしていました。",
      "ある日[ひ]、体[からだ]が動[うご]かなくなり、会社[かいしゃ]を休[やす]みました。その時[とき]、家族[かぞく]が心配[しんぱい]してくれたのが嬉[うれ]しかったです。同[おな]じように、私[わたし]も家族[かぞく]との時間[じかん]を大切[たいせつ]にしなければと気[き]がつきました。それから、仕事[しごと]の後[あと]は早[はや]く帰[かえ]るようにしました。休[やす]みの日[ひ]は家族[かぞく]と過[す]ごすようにしています。",
      "バランスを取[と]るためには、計画[けいかく]が必要[ひつよう]です。私[わたし]は週末[しゅうまつ]に、来週[らいしゅう]の計画[けいかく]を立[た]てます。仕事[しごと]の優先順位[ゆうせんじゅんい]をつけて、効率[こうりつ]よく進[すす]めます。そうすると、残業[ざんぎょう]が減[へ]りました。定時[ていじ]に帰[かえ]れる日[ひ]が増[ふ]えて、生活[せいかつ]に余裕[よゆう]ができました。",
      "今[いま]では、趣味[しゅみ]の時間[じかん]も持[も]てるようになりました。毎週[まいしゅう]水曜日[すいようび]にヨガに行[い]っています。仕事[しごと]のストレスも減[へ]りました。生[い]きることは、ただ働[はたら]くことではないと分[わ]かりました。これからも、バランスの取[と]れた生活[せいかつ]を続[つづ]けたいです。"
    ],
    translation: [
      "Recently, I often hear the word \"work-life balance.\" It seems that balancing work and life is important. I also used to only work before. I stayed at the company until late every night and even worked on holidays. At that time I thought I was fulfilled, but actually I was pushing myself too hard.",
      "One day, my body stopped moving and I took a day off from the company. At that time, I was happy that my family worried about me. Likewise, I realized that I should cherish time with my family too. After that, I started going home early after work. On holidays, I try to spend time with my family.",
      "To keep balance, planning is necessary. On weekends, I make a plan for next week. I prioritize work tasks and proceed efficiently. Then, overtime decreased. Days when I can go home on time increased, and I gained room in my life.",
      "Now I can also have time for hobbies. I go to yoga every Wednesday. Work stress also decreased. I learned that living is not just about working. I want to continue a balanced life from now on."
    ],
    questions: [
      {
        q: "What word does the writer often hear recently?",
        choices: ["Work-life balance", "Overtime work", "Health check", "Career up"],
        answerIndex: 0,
        explanation: "The writer often hears 'work-life balance' recently."
      },
      {
        q: "What happened one day?",
        choices: ["The writer got a promotion", "The writer changed jobs", "The body stopped moving and the writer took a day off", "The writer won an award"],
        answerIndex: 2,
        explanation: "One day the writer's body stopped moving and they took a day off."
      },
      {
        q: "What does the writer do on weekends now?",
        choices: ["Makes a plan for next week", "Works overtime", "Goes drinking", "Sleeps all day"],
        answerIndex: 0,
        explanation: "On weekends the writer makes a plan for the next week."
      },
      {
        q: "What increased after balancing work and life?",
        choices: ["Overtime hours", "Work stress", "Salary", "Days to go home on time"],
        answerIndex: 3,
        explanation: "Days when the writer can go home on time increased."
      },
      {
        q: "What hobby does the writer do every Wednesday?",
        choices: ["Yoga", "Running", "Swimming", "Cooking"],
        answerIndex: 0,
        explanation: "The writer goes to yoga every Wednesday."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 思い出の故郷 (A nostalgic hometown)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-19",
    title: "思[おも]い出[で]の故郷[ふるさと]",
    titleReading: "おもいでのふるさと",
    level: "N4",
    summary: "Visiting the country hometown each summer, the writer finds an unchanging place to belong.",
    estMinutes: 7,
    tags: ["hometown", "family", "nostalgia"],
    body: [
      "私[わたし]は十八歳[じゅうはちさい]まで、田舎[いなか]の町[まち]で暮[く]らしていました。周[まわ]りには山[やま]と畑[はたけ]がたくさんあります。空[そら]が広[ひろ]くて、夜[よる]は星[ほし]がきれいに見[み]えました。近所[ちかじょ]の人[ひと]が互[たが]いに助[たす]け合[あ]う温[あたた]かい町[まち]でした。都会[とかい]に出[で]てからも、あの時[とき]の景色[けしき]を忘[わす]れられません。",
      "毎年[まいとし]お盆[ぼん]には、私[わたし]は実家[じつか]に帰[かえ]ります。両親[りょうしん]や祖母[そぼ]に会[あ]うのが楽[たの]しみです。家[いえ]のご飯[はん]は、どんな高[たか]いレストランよりも美味[おい]しいです。近所[ちかじょ]の人[ひと]が野菜[やさい]を持[も]ってきてくれることもあります。久[ひさ]しぶりに会[あ]う友達[ともだち]と、昔[むかし]の話[はなし]で盛[も]り上[あ]がります。",
      "故郷[ふるさと]は少[すこ]しずつ変[か]わっています。古[ふる]い家[いえ]が減[へ]って、新[あたら]しい店[みせ]が増[ふ]えました。でも、大切[たいせつ]なものは変[か]わりません。神社[じんじゃ]のお祭[まつ]りは今[いま]も続[つづ]いています。私[わたし]にとって、この町[まち]はいつも心[こころ]の帰[かえ]る場所[ばしょ]です。",
      "将来[しょうらい]、私[わたし]はこの町[まち]に戻[もど]りたいと考[かんが]えています。都会[とかい]の便利[べんり]さも好[す]きですが、故郷[ふるさと]の静[しず]けさが恋[こい]しいです。地元[じもと]で何[なに]か役[やく]に立[た]つことをしたいです。若[わか]い人[ひと]が戻[もど]りたくなる町[まち]にしていきたいです。これが私[わたし]の小[ちい]さな夢[ゆめ]です。"
    ],
    translation: [
      "I lived in a country town until I was eighteen. There are many mountains and fields around. The sky was wide, and at night the stars looked beautiful. It was a warm town where neighbors helped each other. Even after coming to the city, I cannot forget the scenery of that time.",
      "Every year during the Bon festival, I return to my family home. I look forward to seeing my parents and grandmother. Home-cooked rice is more delicious than any expensive restaurant. Sometimes neighbors bring vegetables. With friends I see after a long time, we get excited talking about the past.",
      "My hometown is changing little by little. Old houses decreased, and new shops increased. But important things do not change. The shrine festival continues even now. To me, this town is always the place my heart returns to.",
      "In the future, I am thinking of returning to this town. I also like the convenience of the city, but I miss the quietness of my hometown. I want to do something useful for the local community. I want to make it a town that young people want to return to. This is my small dream."
    ],
    questions: [
      {
        q: "Until what age did the writer live in the country town?",
        choices: ["Eighteen", "Twelve", "Twenty", "Twenty-five"],
        answerIndex: 0,
        explanation: "The writer lived there until age eighteen."
      },
      {
        q: "When does the writer return to the family home every year?",
        choices: ["During New Year", "During summer vacation", "During the Bon festival", "During Christmas"],
        answerIndex: 2,
        explanation: "Every year during the Bon festival the writer returns home."
      },
      {
        q: "What does the writer find more delicious than expensive restaurants?",
        choices: ["Home-cooked rice", "Convenience store food", "Street food", "Fast food"],
        answerIndex: 0,
        explanation: "Home-cooked rice is more delicious than any expensive restaurant."
      },
      {
        q: "What has changed in the hometown?",
        choices: ["The festival stopped", "Old houses decreased and new shops increased", "Everyone moved away", "The mountains disappeared"],
        answerIndex: 1,
        explanation: "Old houses decreased and new shops increased, though important things remain."
      },
      {
        q: "What is the writer's small dream?",
        choices: ["To make the town a place young people want to return to", "To become rich in the city", "To build a big house", "To travel the world"],
        answerIndex: 0,
        explanation: "The writer wants to make the town one young people want to return to."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 未来と私の夢 (The future and dreams)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-20",
    title: "未来[みらい]と私[わたし]の夢[ゆめ]",
    titleReading: "みらいとわたしのゆめ",
    level: "N4",
    summary: "From astronaut dreams to translation work, the writer reflects on dreams, time, and people.",
    estMinutes: 8,
    tags: ["future", "dream", "reflection"],
    body: [
      "子供[こども]の頃[ころ]、私[わたし]は宇宙飛行士[うちゅうひこうし]になりたかったです。夜[よる]の空[そら]を見上[みあ]げて、星[ほし]の世界[せかい]に憧[あこが]れていました。本[ほん]を読[よ]んで、宇宙[うちゅう]について学[まな]びました。しかし、大[おお]きくなるにつれて、夢[ゆめ]は変[か]わっていきました。今[いま]では、別[べつ]の夢[ゆめ]を持[も]っています。",
      "今[いま]の私[わたし]の夢[ゆめ]は、翻訳[ほんやく]の仕事[しごと]をすることです。違[ちが]う言葉[ことば]の間[あいだ]に立[た]って、人[ひと]と人[ひと]を繋[つな]げたいです。これには、語学[ごがく]の力[ちから]だけではなく、文化[ぶんか]への理解[りかい]も必要[ひつよう]です。だから、毎日[まいにち]勉強[べんきょう]を続[つづ]けています。大変[たいへん]なこともありますが、諦[あきら]めません。",
      "夢[ゆめ]を実現[じつげん]するためには、時間[じかん]がかかります。すぐに結果[けっか]が出[で]なくても、続[つづ]けることが大切[たいせつ]だと信[しん]じています。小[ちい]さな目標[もくひょう]を一[ひと]つずつクリアしていくつもりです。失敗[しっぱい]した時[とき]は、次[つぎ]に生[い]かすようにします。夢[ゆめ]に向[む]かって歩[ある]く過程[かてい]自体[じたい]が価値[かち]があると思[おも]います。",
      "将来[しょうらい]、技術[ぎじゅつ]がもっと発達[はったつ]するでしょう。AIが人[ひと]の仕事[しごと]を手伝[てつだ]うようになります。でも、人[ひと]の心[こころ]を汲[く]み取[と]るのは、人[ひと]にしかできないと考[かんが]えています。だからこそ、私[わたし]は人[ひと]と人[ひと]の間[あいだ]に立[た]つ仕事[しごと]を選[えら]びました。機械[きかい]にはない温[あたた]かさを大切[たいせつ]にしたいです。",
      "夢[ゆめ]は大[おお]きくても小[ちい]さくても、持[も]っているだけで生[い]きる力[ちから]になります。私[わたし]はこれからも、自分[じぶん]の夢[ゆめ]を信[しん]じて進[すす]んでいきます。みんなにも、自分[じぶん]の夢[ゆめ]を大切[たいせつ]にしてほしいです。諦[あきら]めずに歩[ある]き続[つづ]ければ、必[かなら]ず道[みち]は開[ひら]けると信[しん]じています。"
    ],
    translation: [
      "When I was a child, I wanted to be an astronaut. Looking up at the night sky, I yearned for the world of stars. I read books and learned about space. However, as I grew up, my dream changed. Now I have a different dream.",
      "My current dream is to do translation work. I want to stand between different languages and connect people. This requires not only language ability but also cultural understanding. So I continue studying every day. There are hard times, but I won't give up.",
      "Realizing a dream takes time. Even if results don't come immediately, I believe continuing is important. I intend to clear small goals one by one. When I fail, I will use it for next time. I think the process of walking toward a dream itself has value.",
      "In the future, technology will develop more. AI will come to help people's work. But I think understanding people's hearts can only be done by humans. That is exactly why I chose a job standing between people. I want to cherish a warmth that machines don't have.",
      "Whether dreams are big or small, just having them becomes the power to live. I will continue to believe in my dream and move forward. I want everyone to cherish their own dream too. I believe that if you keep walking without giving up, a path will surely open."
    ],
    questions: [
      {
        q: "What did the writer want to be as a child?",
        choices: ["An astronaut", "A teacher", "A doctor", "A cook"],
        answerIndex: 0,
        explanation: "As a child the writer wanted to be an astronaut."
      },
      {
        q: "What is the writer's current dream?",
        choices: ["To become an astronaut", "To open a restaurant", "To do translation work", "To be a programmer"],
        answerIndex: 2,
        explanation: "The writer's current dream is to do translation work."
      },
      {
        q: "What does the writer believe is important even if results don't come?",
        choices: ["Continuing", "Giving up", "Changing dreams", "Asking others"],
        answerIndex: 0,
        explanation: "The writer believes that continuing is important even without immediate results."
      },
      {
        q: "Why did the writer choose a job standing between people?",
        choices: ["Because it pays well", "Because it is easy", "Because understanding hearts can only be done by humans", "Because AI cannot translate"],
        answerIndex: 2,
        explanation: "The writer believes understanding people's hearts can only be done by humans."
      },
      {
        q: "What does the writer want everyone to do?",
        choices: ["Cherish their own dream", "Work harder", "Study technology", "Travel abroad"],
        answerIndex: 0,
        explanation: "The writer wants everyone to cherish their own dream."
      }
    ]
  }
];
