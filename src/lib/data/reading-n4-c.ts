import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N4-level reading passages with comprehension questions.

export const readingN4C: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n4-21 — カフェでの仕事 (Working at a café)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-21",
    title: "カフェでの仕事[しごと]",
    titleReading: "かふぇでのしごと",
    level: "N4",
    summary: "A university student describes the joys and challenges of working part-time at a small café near campus.",
    estMinutes: 6,
    tags: ["part-time job", "café", "customer service"],
    body: [
      "私[わたし]は毎週[まいしゅう]カフェで働[はたら]いています。大学[だいがく]の近[ちか]くにある小[ちい]さい店[みせ]です。コーヒーと軽[かる]い食事[しょくじ]を出[だ]しています。お客[きゃく]さんは学生[がくせい]や会社員[かいしゃいん]が多[おお]いです。朝[あさ]は特[とく]に忙[いそが]しいです。",
      "仕事[しごと]は注文[ちゅうもん]を聞[き]いて、ドリンクを作[つく]って、テーブルを片付[かたづ]けることです。最初[さいしょ]はオーダーを覚[おぼ]えるのが大変[たいへん]でした。でも、先輩[せんぱい]が丁寧[ていねい]に教[おし]えてくれました。今[いま]は笑顔[えがお]で対応[たいおう]できるようになりました。",
      "一番[いちばん]嬉[うれ]しい時[とき]は、お客[きゃく]さんに「美味[おい]しかった」と言[い]われる時[とき]です。忙[いそが]しくて疲[つか]れても、その一言[ひとこと]で元気[げんき]が出[で]ます。また、同[おな]じお客[きゃく]さんが何度[なんど]も来[き]てくれると、名前[なまえ]を覚[おぼ]えて親[した]しくなれます。",
      "大変[たいへん]なこともあります。時[とき]々、クレームを受[う]けることがあります。例[たと]えば、注文[ちゅうもん]と違[ちが]うドリンクを出[だ]してしまった時[とき]です。そんな時[とき]は、すぐに謝[あや]ってもう一度[いちど]作[つく]り直[なお]します。失敗[しっぱい]から学[まな]ぶことが多[おお]いです。",
      "カフェの仕事[しごと]を通[とお]して、接客[せっきゃく]の楽[たの]しさが分[わ]かりました。人[ひと]と話[はな]すのが好[す]きになりました。将来[しょうらい]は自分[じぶん]の店[みせ]を持[も]ちたいという夢[ゆめ]もあります。今[いま]は、もっと上手[じょうず]にできるように毎日[まいにち]頑張[がんば]っています。"
    ],
    translation: [
      "I work at a café every week. It is a small shop near my university. We serve coffee and light meals. Most customers are students and office workers. The mornings are especially busy.",
      "My job is to take orders, make drinks, and clear the tables. At first, remembering the orders was hard. But a senior colleague taught me carefully. Now I can serve customers with a smile.",
      "The happiest moment is when a customer tells me the drink was delicious. Even when I am busy and tired, those words give me energy. Also, when the same customers come back many times, I remember their names and become friendly with them.",
      "There are difficult things too. Sometimes I receive complaints. For example, when I serve a drink that is different from the order. At such times, I apologize right away and remake it. I learn a lot from my failures.",
      "Through my café work, I learned the joy of customer service. I came to like talking with people. I also have a dream of opening my own shop someday. Now I work hard every day to do better."
    ],
    questions: [
      {
        q: "Where does the writer work part-time?",
        choices: ["A university library", "A small café near the university", "A big restaurant in Tokyo", "A convenience store"],
        answerIndex: 1,
        explanation: "The writer works at a small café near the university (大学の近くにある小さい店)."
      },
      {
        q: "What was difficult for the writer at first?",
        choices: ["Making coffee", "Clearing tables", "Remembering orders", "Smiling at customers"],
        answerIndex: 2,
        explanation: "Remembering the orders was hard at first (オーダーを覚えるのが大変でした)."
      },
      {
        q: "When is the writer happiest?",
        choices: ["When work ends early", "When receiving a tip", "When a customer says the drink was delicious", "When the shop is empty"],
        answerIndex: 2,
        explanation: "The happiest moment is when a customer says it was delicious (美味しかったと言われる時)."
      },
      {
        q: "What does the writer do when serving the wrong drink?",
        choices: ["Ignore the complaint", "Quit the job", "Apologize and remake it", "Ask the manager"],
        answerIndex: 2,
        explanation: "The writer apologizes and remakes the drink (すぐに謝ってもう一度作り直します)."
      },
      {
        q: "What is the writer's dream?",
        choices: ["To become a teacher", "To open their own shop", "To travel abroad", "To study abroad"],
        answerIndex: 1,
        explanation: "The writer dreams of opening their own shop (自分の店を持ちたいという夢)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-22 — 睡眠の大切さ (The importance of sleep)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-22",
    title: "睡眠[すいみん]の大切[たいせつ]さ",
    titleReading: "すいみんのたいせつさ",
    level: "N4",
    summary: "After struggling with sleep deprivation, the writer learns from a doctor friend why sleep matters and changes their habits.",
    estMinutes: 5,
    tags: ["health", "sleep", "lifestyle"],
    body: [
      "最近[さいきん]、私[わたし]はよく夜更[よふ]かしをしていました。スマートフォンを見[み]るのが楽[たの]しくて、つい遅[おそ]くまで起[お]きてしまいます。そのため、朝[あさ]起[お]きるのがとても辛[つら]かったです。授業[じゅぎょう]中[ちゅう]も眠[ねむ]くて集中[しゅうちゅう]できませんでした。",
      "先週[せんしゅう]、医者[いしゃ]の友達[ともだち]に睡眠[すいみん]の大切[たいせつ]さを教[おし]わりました。人間[にんげん]は毎日[まいにち]七時間[しちじかん]から八時間[はちじかん]寝[ね]る必要[ひつよう]があるそうです。十分[じゅうぶん]に寝[ね]ないと、体[からだ]も頭[あたま]も元気[げんき]になりません。",
      "寝[ね]不足[ぶそく]は色[いろ]いろな問題[もんだい]を起[お]こします。記憶力[きおくりょく]が下[さ]がったり、病気[びょうき]になりやすくなったりします。また、感情[かんじょう]のコントロールも難[むずか]しくなります。小[ちい]さいことで怒[おこ]りやすくなる人[ひと]もいます。",
      "それから、私[わたし]は生活[せいかつ]を変[か]えました。夜[よる]十時[じゅうじ]になったらスマートフォンを片付[かたづ]けるようにしました。寝[ね]る前[まえ]に本[ほん]を読[よ]むか、軽[かる]いストレッチをします。部屋[へや]を暗[くら]くして、リラックスしてから寝[ね]ます。",
      "変[か]えてから、朝[あさ]がとても楽[らく]になりました。日中[にっちゅう]も元気[げんき]で、勉強[べんきょう]の効率[こうりつ]も上[あ]がりました。睡眠[すいみん]は時間[じかん]の無駄[むだ]ではなく、自分[じぶん]への投資[とうし]だと分[わ]かりました。皆[みな]さんも、もっと寝[ね]てくださいね。"
    ],
    translation: [
      "Lately, I have been staying up late often. Looking at my smartphone is fun, so I end up staying awake until late. Because of that, waking up in the morning was very hard. I was sleepy during class and could not concentrate.",
      "Last week, a friend who is a doctor taught me the importance of sleep. People need to sleep seven to eight hours every day. Without enough sleep, neither the body nor the mind can become energetic.",
      "Lack of sleep causes various problems. Memory can decrease, and people become more prone to illness. Also, controlling emotions becomes harder. Some people get angry easily over small things.",
      "Since then, I changed my lifestyle. When it is 10 p.m., I put my smartphone away. Before sleeping, I read a book or do light stretching. I darken the room and relax before sleeping.",
      "After changing, mornings became much easier. I am energetic during the day, and my study efficiency improved. I realized that sleep is not a waste of time but an investment in myself. Please sleep more too, everyone."
    ],
    questions: [
      {
        q: "Why did the writer stay up late?",
        choices: ["To study for exams", "To look at a smartphone", "To work part-time", "To read books"],
        answerIndex: 1,
        explanation: "The writer stayed up late because looking at the smartphone was fun (スマートフォンを見るのが楽しくて)."
      },
      {
        q: "How many hours of sleep do people need, according to the doctor friend?",
        choices: ["Four to five hours", "Six to seven hours", "Seven to eight hours", "Nine to ten hours"],
        answerIndex: 2,
        explanation: "The doctor friend said people need seven to eight hours of sleep (七時間から八時間寝る必要がある)."
      },
      {
        q: "Which of the following is NOT a problem caused by lack of sleep?",
        choices: ["Lower memory", "Getting sick easily", "Difficulty controlling emotions", "Becoming taller"],
        answerIndex: 3,
        explanation: "Lower memory, illness, and emotional difficulty are mentioned; growing taller is not (記憶力、病気、感情のコントロール)."
      },
      {
        q: "What does the writer do before sleeping now?",
        choices: ["Use the smartphone", "Read a book or stretch", "Drink coffee", "Watch TV"],
        answerIndex: 1,
        explanation: "Before sleeping, the writer reads a book or stretches (本を読むか、軽いストレッチをします)."
      },
      {
        q: "What did the writer learn about sleep?",
        choices: ["It is a waste of time", "It is an investment in oneself", "It is unnecessary for adults", "It is only for lazy people"],
        answerIndex: 1,
        explanation: "The writer realized sleep is an investment in oneself (自分への投資だと分かりました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-23 — 文化交流イベント (A cultural exchange event)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-23",
    title: "文化交流[ぶんかこうりゅう]イベント",
    titleReading: "ぶんかこうりゅういべんと",
    level: "N4",
    summary: "International students gather at a university cultural exchange event to share food, crafts, and traditions from their home countries.",
    estMinutes: 6,
    tags: ["culture", "exchange", "university"],
    body: [
      "先週[せんしゅう]の週末[しゅうまつ]、私[わたし]の大学[だいがく]で文化交流[ぶんかこうりゅう]イベントがありました。色[いろ]いろな国[くに]の留学生[りゅうがくせい]が集[あつ]まって、自分[じぶん]の文化[ぶんか]を紹介[しょうかい]し合[あ]いました。会場[かいじょう]は人[ひと]でいっぱいでした。音楽[おんがく]や笑[わら]い声[ごえ]が響[ひび]いていました。",
      "私[わたし]は日本[にほん]の文化[ぶんか]を紹介[しょうかい]する班[はん]でした。折[お]り紙[がみ]と書道[しょどう]を教[おし]えました。外国[がいこく]の学生[がくせい]たちは初[はじ]めて折[お]り紙[がみ]をしました。鶴[つる]を作[つく]るのが難[むずか]しいそうでしたが、みんな楽[たの]しそうでした。",
      "他[ほか]の国[くに]のブースも面白[おもしろ]かったです。韓国[かんこく]のブースではキムチを作[つく]っていました。タイのブースでは踊[おど]りを教[おし]えていました。私[わたし]はベトナムの服[ふく]を試着[しちゃく]させてもらいました。色[いろ]が鮮[あざ]やかでとてもきれいでした。",
      "昼[ひる]にはみんなで一[いっ]緒[しょ]に食事[しょくじ]をしました。色[いろ]いろな国[くに]の料理[りょうり]を少[すこ]しずつ味[あじ]わうことができました。どれも美味[おい]しかったです。特[とく]にインドのカレーが私[わたし]のお気[き]に入[い]りになりました。食[た]べながら、新[あたら]しい友達[ともだち]もできました。",
      "このイベントを通[とお]して、違[ちが]う文化[ぶんか]を理解[りかい]することの大[おお]きさを感[かん]じました。言葉[ことば]が通[つう]じなくても、笑顔[えがお]と食事[しょくじ]で仲良[なかよ]くなれます。来年[らいねん]も参加[さんか]したいです。また、私[わたし]はもっと外国語[がいこくご]を勉強[べんきょう]しようと思[おも]いました。"
    ],
    translation: [
      "Last weekend, my university held a cultural exchange event. International students from various countries gathered and introduced their own cultures. The venue was full of people. Music and laughter echoed around.",
      "I was in the group introducing Japanese culture. We taught origami and calligraphy. The foreign students did origami for the first time. Making a paper crane seemed difficult for them, but everyone looked happy.",
      "The booths of other countries were also interesting. At the Korean booth, they were making kimchi. At the Thai booth, they were teaching dance. I was allowed to try on Vietnamese clothes. The colors were vivid and very beautiful.",
      "At noon, everyone ate together. We could taste various countries' dishes little by little. Everything was delicious. Especially, Indian curry became my favorite. While eating, I made new friends too.",
      "Through this event, I felt the importance of understanding different cultures. Even if words do not communicate, smiles and food can bring people closer. I want to participate again next year. Also, I decided to study foreign languages more."
    ],
    questions: [
      {
        q: "Where was the cultural exchange event held?",
        choices: ["At a public park", "At the narrator's university", "At a hotel", "At a train station"],
        answerIndex: 1,
        explanation: "The event was held at the narrator's university (私の大学で文化交流イベントがありました)."
      },
      {
        q: "What did the narrator's group introduce?",
        choices: ["Korean dance", "Thai food", "Japanese origami and calligraphy", "Indian curry"],
        answerIndex: 2,
        explanation: "The narrator's group taught origami and calligraphy (折り紙と書道を教えました)."
      },
      {
        q: "What did the narrator try on at the Vietnamese booth?",
        choices: ["Korean clothes", "Thai clothes", "Vietnamese clothes", "Indian clothes"],
        answerIndex: 2,
        explanation: "The narrator tried on Vietnamese clothes (ベトナムの服を試着させてもらいました)."
      },
      {
        q: "What became the narrator's favorite food?",
        choices: ["Korean kimchi", "Thai curry", "Indian curry", "Vietnamese food"],
        answerIndex: 2,
        explanation: "Indian curry became the favorite (インドのカレーが私のお気に入りになりました)."
      },
      {
        q: "What did the narrator decide to do after the event?",
        choices: ["Quit studying Japanese", "Study foreign languages more", "Travel abroad immediately", "Stop making friends"],
        answerIndex: 1,
        explanation: "The narrator decided to study foreign languages more (もっと外国語を勉強しようと思いました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-24 — 私の大学生活 (My university life)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-24",
    title: "私[わたし]の大学[だいがく]生活[せいかつ]",
    titleReading: "わたしのだいがくせいかつ",
    level: "N4",
    summary: "An economics major shares a typical week of classes, cafeteria lunches, photography club outings, and library study sessions.",
    estMinutes: 6,
    tags: ["university", "student life", "photography"],
    body: [
      "私[わたし]は去年[きょねん]大学[だいがく]に入学[にゅうがく]しました。専攻[せんこう]は経済学[けいざいがく]です。キャンパスは広[ひろ]くて、緑[みどり]が多[おお]いです。図書館[としょかん]が大[おお]きくて、いつも静[しず]かです。私[わたし]はそこでよく勉強[べんきょう]しています。",
      "授業[じゅぎょう]は火曜[かよう]と木曜[もくよう]が一番[いちばん]忙[いそが]しいです。朝[あさ]から夕方[ゆうがた]まで続[つづ]きます。お昼[ひる]は友達[ともだち]と学食[がくしょく]で食事[しょくじ]をします。学食[がくしょく]は安[やす]くて量[りょう]が多[おお]いので、学生[がくせい]に人気[にんき]です。私[わたし]はカレーが好[す]きです。",
      "大学[だいがく]では勉強[べんきょう]だけではなく、サークル活動[かつどう]もしています。写真[しゃしん]サークルに入[はい]っています。月[つき]に二回[にかい]、週末[しゅうまつ]に色[いろ]いろな場所[ばしょ]へ行[い]って写真[しゃしん]を撮[と]ります。先月[せんげつ]は海辺[うみべ]に行[い]きました。夕日[ゆうひ]がとてもきれいでした。",
      "授業[じゅぎょう]の後[あと]、図書館[としょかん]で予習[よしゅう]と復習[ふくしゅう]をします。分[わ]からないことがあったら、友達[ともだち]に聞[き]きます。時[とき]々、教授[きょうじゅ]の研究室[けんきゅうしつ]に行[い]って質問[しつもん]することもあります。教授[きょうじゅ]は丁寧[ていねい]に答[こた]えてくれます。",
      "大学生活[だいがくせいかつ]は忙[いそが]しいですが、毎日[まいにち]が充実[じゅうじつ]しています。新[あたら]しい知識[ちしき]を得[え]る喜[よろこ]びがあります。また、多[おお]くの友達[ともだち]ができたことは大[おお]きな財産[ざいさん]です。卒業[そつぎょう]するまで、この時間[じかん]を大切[たいせつ]にしたいです。"
    ],
    translation: [
      "I entered university last year. My major is economics. The campus is large and has lots of greenery. The library is big and always quiet. I often study there.",
      "Classes on Tuesday and Thursday are the busiest. They continue from morning until evening. At noon, I have lunch with friends at the school cafeteria. The cafeteria is cheap and portions are large, so it is popular with students. I like curry.",
      "At university, I do not only study but also take part in club activities. I am in the photography club. Twice a month on weekends, we go to various places to take photos. Last month we went to the seaside. The sunset was very beautiful.",
      "After classes, I do preparation and review at the library. If there is something I do not understand, I ask my friends. Sometimes I go to the professor's office to ask questions. The professor answers carefully.",
      "University life is busy but every day is fulfilling. There is the joy of gaining new knowledge. Also, making many friends is a great treasure. Until I graduate, I want to cherish this time."
    ],
    questions: [
      {
        q: "What is the narrator's major?",
        choices: ["Literature", "Economics", "History", "Engineering"],
        answerIndex: 1,
        explanation: "The narrator's major is economics (専攻は経済学です)."
      },
      {
        q: "Which days are the busiest for the narrator?",
        choices: ["Monday and Wednesday", "Tuesday and Thursday", "Friday and Saturday", "Sunday only"],
        answerIndex: 1,
        explanation: "Tuesday and Thursday are the busiest (火曜と木曜が一番忙しい)."
      },
      {
        q: "What club is the narrator in?",
        choices: ["Music club", "Photography club", "Soccer club", "Cooking club"],
        answerIndex: 1,
        explanation: "The narrator is in the photography club (写真サークルに入っています)."
      },
      {
        q: "Where did the photography club go last month?",
        choices: ["To the mountains", "To a museum", "To the seaside", "To a temple"],
        answerIndex: 2,
        explanation: "Last month the club went to the seaside (先月は海辺に行きました)."
      },
      {
        q: "What does the narrator think is a great treasure?",
        choices: ["Money", "Good grades", "Many friends", "Free time"],
        answerIndex: 2,
        explanation: "Making many friends is a great treasure (多くの友達ができたことは大きな財産です)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-25 — テクノロジーについての議論 (A debate about technology)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-25",
    title: "テクノロジーについての議論[ぎろん]",
    titleReading: "てくのろじーについてのぎろん",
    level: "N4",
    summary: "A class debates whether smartphones are good for children, weighing learning benefits against concerns about concentration and sleep.",
    estMinutes: 7,
    tags: ["technology", "debate", "smartphones"],
    body: [
      "先週[せんしゅう]、授業[じゅぎょう]でテクノロジーについての議論[ぎろん]がありました。テーマは「スマートフォンは子供[こども]に良[よ]い影響[えいきょう]を与[あた]えるか」でした。クラスは二[に]つの班[はん]に分[わ]かれました。私[わたし]は反対[はんたい]する班[はん]でした。",
      "賛成[さんせい]する班[はん]は、スマートフォンが学習[がくしゅう]に役立[やくだ]つと言[い]いました。辞書[じしょ]や動画[どうが]で色[いろ]いろなことを学[まな]べるそうです。また、遠[とお]くに住[す]む友達[ともだち]と連絡[れんらく]できるのも良[よ]い点[てん]だと言[い]っていました。",
      "私[わたし]たちの班[はん]は、集中力[しゅうちゅうりょく]が下[さ]がることを心配[しんぱい]しました。スマートフォンばかり見[み]て、外[そと]で遊[あそ]ばなくなる子供[こども]もいます。また、夜[よる]遅[おそ]くまで使[つか]うと、睡眠[すいみん]不足[ぶそく]になります。目[め]にも悪[わる]いです。",
      "議論[ぎろん]はとても激[はげ]しくなりました。お互[たが]いの意見[いけん]を尊重[そんちょう]しながら、証拠[しょうこ]を出[だ]し合[あ]いました。最後[さいご]に、使[つか]い方[かた]が大切[たいせつ]だという結論[けつろん]になりました。テクノロジー自体[じたい]は悪[わる]くありません。",
      "この議論[ぎろん]を通[とお]して、物事[ものごと]には両面[りょうめん]があることを学[まな]びました。自分[じぶん]の意見[いけん]だけではなく、他[ほか]の人[ひと]の意見[いけん]も聞[き]く大切[たいせつ]さが分[わ]かりました。今後[こんご]も、色[いろ]いろな視点[してん]から考[かんが]えるようにしたいです。"
    ],
    translation: [
      "Last week, we had a debate about technology in class. The theme was whether smartphones have a good influence on children. The class was divided into two groups. I was in the opposing group.",
      "The supporting group said that smartphones are useful for learning. With dictionaries and videos, you can learn various things. They also said that being able to contact friends who live far away is a good point.",
      "Our group was worried that concentration would decrease. Some children only look at smartphones and stop playing outside. Also, using them late at night causes lack of sleep. It is also bad for the eyes.",
      "The debate became very intense. We presented evidence to each other while respecting each other's opinions. In the end, we concluded that how you use it is what matters. Technology itself is not bad.",
      "Through this debate, I learned that things have two sides. I understood the importance of listening to other people's opinions, not only my own. From now on, I want to think from various perspectives."
    ],
    questions: [
      {
        q: "What was the debate theme?",
        choices: ["Whether computers should be in schools", "Whether smartphones have a good influence on children", "Whether students should use tablets", "Whether technology is too expensive"],
        answerIndex: 1,
        explanation: "The theme was whether smartphones have a good influence on children (スマートフォンは子供に良い影響を与えるか)."
      },
      {
        q: "Which side was the narrator on?",
        choices: ["Supporting", "Opposing", "Neutral", "Both"],
        answerIndex: 1,
        explanation: "The narrator was in the opposing group (私は反対する班でした)."
      },
      {
        q: "What did the supporting group say is a good point about smartphones?",
        choices: ["They are cheap", "They are useful for learning", "They are fun to play with", "They make children play outside"],
        answerIndex: 1,
        explanation: "The supporting group said smartphones are useful for learning (学習に役立つと言いました)."
      },
      {
        q: "What was the final conclusion of the debate?",
        choices: ["Smartphones are completely bad", "Smartphones are completely good", "How you use them matters", "Children should never use smartphones"],
        answerIndex: 2,
        explanation: "The conclusion was that how you use it is what matters (使い方が大切だという結論になりました)."
      },
      {
        q: "What did the narrator learn from the debate?",
        choices: ["Things have only one side", "Their own opinion is most important", "Things have two sides", "Debates are useless"],
        answerIndex: 2,
        explanation: "The narrator learned that things have two sides (物事には両面があることを学びました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-26 — 思い出の先生 (A memorable teacher)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-26",
    title: "思[おも]い出[で]の先生[せんせい]",
    titleReading: "おもいでのせんせい",
    level: "N4",
    summary: "The narrator recalls a high school Japanese teacher whose story-based grammar lessons and warm encouragement left a lasting impact.",
    estMinutes: 6,
    tags: ["teacher", "school memories", "encouragement"],
    body: [
      "私[わたし]には忘[わす]れられない先生[せんせい]がいます。高校[こうこう]の時[とき]の日本語[にほんご]の先生[せんせい]です。名前[なまえ]は田中[たなか]先生[せんせい]と言[い]います。少[すこ]し厳[きび]しいですが、とても面白[おもしろ]い人[ひと]でした。授業[じゅぎょう]はいつも楽[たの]しかったです。",
      "田中[たなか]先生[せんせい]は、文法[ぶんぽう]を教[おし]える時[とき]によく物語[ものがたり]を作[つく]ってくれました。難[むずか]しい文法[ぶんぽう]も、物語[ものがたり]の中[なか]だと分[わ]かりやすかったです。私[わたし]たちはよく笑[わら]いながら勉強[べんきょう]していました。授業[じゅぎょう]の時間[じかん]がすぐに過[す]ぎるのを感[かん]じました。",
      "先生[せんせい]は、生徒[せいと]一人一人[ひとりひとり]を大切[たいせつ]にしてくれました。私[わたし]が試験[しけん]に失敗[しっぱい]して泣[な]いていた時[とき]、先生[せんせい]は優[やさ]しく話[はな]を聞[き]いてくれました。「失敗[しっぱい]は人[ひと]を強[つよ]くする」と言[い]ってくれました。その言葉[ことば]は今[いま]も私[わたし]の支[ささ]えです。",
      "また、先生[せんせい]は放課後[ほうかご]も私[わたし]たちのために時間[じかん]を使[つか]ってくれました。進路[しんろ]の相談[そうだん]に乗[の]ってくれたり、分[わ]からない問題[もんだい]を教[おし]えてくれたりしました。先生[せんせい]の部屋[へや]にはいつもお菓子[かし]があって、私[わたし]たちはよくそこでお茶[ちゃ]を飲[の]みました。",
      "今[いま]、私[わたし]は大学[だいがく]で勉強[べんきょう]していますが、田中[たなか]先生[せんせい]の教[おし]えは役[やく]に立[た]っています。先生[せんせい]のおかげで、私[わたし]は日本語[にほんご]が好[す]きになりました。将来[しょうらい]は、私[わたし]も先生[せんせい]のような人[ひと]になりたいです。"
    ],
    translation: [
      "I have a teacher I cannot forget. It was my Japanese teacher in high school. His name is Tanaka-sensei. He was a bit strict but a very interesting person. His classes were always fun.",
      "When teaching grammar, Tanaka-sensei often made up stories. Even difficult grammar was easy to understand inside a story. We often studied while laughing. I felt that class time passed quickly.",
      "The teacher cherished each student. When I failed an exam and was crying, the teacher listened to me gently. He told me that failure makes a person strong. Those words still support me now.",
      "Also, the teacher spent time for us after school. He listened to our career consultations and taught us problems we did not understand. There were always snacks in the teacher's room, and we often drank tea there.",
      "Now, I am studying at university, and Tanaka-sensei's teachings are useful. Thanks to him, I came to like Japanese. In the future, I want to be a person like him."
    ],
    questions: [
      {
        q: "Who is the memorable teacher?",
        choices: ["An English teacher in university", "A Japanese teacher in high school", "A math teacher in middle school", "A music teacher in elementary school"],
        answerIndex: 1,
        explanation: "The memorable teacher was a Japanese teacher in high school (高校の時の日本語の先生)."
      },
      {
        q: "How did Tanaka-sensei teach grammar?",
        choices: ["By giving long lectures", "By making up stories", "By giving lots of homework", "By showing videos"],
        answerIndex: 1,
        explanation: "He taught grammar by making up stories (物語を作ってくれました)."
      },
      {
        q: "What did the teacher say to the crying narrator?",
        choices: ["You are a failure", "Failure makes a person strong", "Study harder next time", "Do not cry here"],
        answerIndex: 1,
        explanation: "He said failure makes a person strong (失敗は人を強くすると言ってくれました)."
      },
      {
        q: "What did the students do in the teacher's room?",
        choices: ["Played games", "Slept", "Drank tea and ate snacks", "Watched TV"],
        answerIndex: 2,
        explanation: "They drank tea in the teacher's room, which always had snacks (お菓子があって、お茶を飲みました)."
      },
      {
        q: "What does the narrator want to be in the future?",
        choices: ["A doctor", "A person like Tanaka-sensei", "A pilot", "A musician"],
        answerIndex: 1,
        explanation: "The narrator wants to be a person like Tanaka-sensei (私も先生のような人になりたいです)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-27 — 京都の四季 (The changing seasons in Kyoto)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-27",
    title: "京都[きょうと]の四季[しき]",
    titleReading: "きょうとのしき",
    level: "N4",
    summary: "A Kyoto resident describes the distinct beauty of each season, from spring cherry blossoms to winter snow scenes at Kinkaku-ji.",
    estMinutes: 5,
    tags: ["Kyoto", "seasons", "festivals"],
    body: [
      "私[わたし]は京都[きょうと]に住[す]んでいます。京都[きょうと]には四[よ]つの季節[きせつ]がはっきりとあります。それぞれの季節[きせつ]に違[ちが]う美[うつく]しさがあります。私[わたし]はこの街[まち]の四季[しき]が大好[だいす]きです。",
      "春[はる]には、色[いろ]いろな場所[ばしょ]でお花見[はなみ]ができます。哲学[てつがく]の道[みち]は桜[さくら]が特[とく]にきれいです。淡[あわ]いピンクの花[はな]びらが風[かぜ]に舞[ま]います。夜[よる]には、提灯[ちょうちん]に照[て]らされた桜[さくら]を見[み]に行[い]く人[ひと]も多[おお]いです。",
      "夏[なつ]は暑[あつ]くて蒸[む]し暑[あつ]いですが、祇園祭[ぎおんまつり]があります。大[おお]きな山鉾[やまほこ]が街[まち]を進[すす]んでいきます。浴衣[ゆかた]を着[き]た人[ひと]たちが大勢[おおぜい]集[あつ]まります。私[わたし]も毎年[まいとし]友達[ともだち]と浴衣[ゆかた]を見[み]に行[い]きます。",
      "秋[あき]は、紅葉[もみじ]が美[うつく]しい季節[きせつ]です。嵐山[あらしやま]や東福寺[とうふくじ]が有名[ゆうめい]です。赤[あか]や黄色[きいろ]に染[そ]まった山[やま]は息[いき]を呑[の]むほどきれいです。涼[すず]しい風[かぜ]を感[かん]じながら、お茶[ちゃ]を飲[の]むのが好[す]きです。",
      "冬[ふゆ]は寒[さむ]いですが、静[しず]かで美[うつく]しいです。雪[ゆき]が積[つ]もると、町[まち]全体[ぜんたい]が絵画[かいが]のようになります。特[とく]に金閣寺[きんかくじ]の雪景[せっけい]は有名[ゆうめい]です。白[しろ]い雪[ゆき]と金[きん]の建物[たてもの]のコントラストが素晴[すば]らしいです。"
    ],
    translation: [
      "I live in Kyoto. Kyoto has four distinct seasons. Each season has a different beauty. I love the four seasons of this town.",
      "In spring, you can enjoy cherry blossom viewing at various places. The Path of Philosophy is especially beautiful with cherry blossoms. Light pink petals flutter in the wind. At night, many people go to see cherry blossoms lit by lanterns.",
      "Summer is hot and humid, but there is the Gion Festival. Large floats advance through the town. Many people in yukata gather. Every year, I go to see the yukata with my friends.",
      "Autumn is the season of beautiful autumn leaves. Arashiyama and Tofuku-ji are famous. Mountains dyed red and yellow are breathtakingly beautiful. I like drinking tea while feeling the cool wind.",
      "Winter is cold but quiet and beautiful. When snow piles up, the whole town looks like a painting. Especially, the snow scene at Kinkaku-ji is famous. The contrast of white snow and the golden building is wonderful."
    ],
    questions: [
      {
        q: "Where does the narrator live?",
        choices: ["Tokyo", "Osaka", "Kyoto", "Sapporo"],
        answerIndex: 2,
        explanation: "The narrator lives in Kyoto (私は京都に住んでいます)."
      },
      {
        q: "What is famous in spring in Kyoto?",
        choices: ["Snow scenes", "Cherry blossoms", "Autumn leaves", "Summer festivals"],
        answerIndex: 1,
        explanation: "Cherry blossom viewing is famous in spring (春には色いろな場所でお花見ができます)."
      },
      {
        q: "What festival happens in summer?",
        choices: ["A snow festival", "The Gion Festival", "A cherry blossom festival", "An autumn leaves festival"],
        answerIndex: 1,
        explanation: "The Gion Festival happens in summer (祇園祭があります)."
      },
      {
        q: "Which places are famous for autumn leaves?",
        choices: ["Kinkaku-ji and Gion", "Arashiyama and Tofuku-ji", "Tokyo Tower", "Mount Fuji"],
        answerIndex: 1,
        explanation: "Arashiyama and Tofuku-ji are famous for autumn leaves (嵐山や東福寺が有名です)."
      },
      {
        q: "What contrast is mentioned in winter?",
        choices: ["White snow and a golden building", "Red leaves and a blue sky", "Pink flowers and green trees", "Black night and white lanterns"],
        answerIndex: 0,
        explanation: "The contrast of white snow and the golden building is mentioned (白い雪と金の建物のコントラスト)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-28 — アルバイトの経験 (A part-time job experience)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-28",
    title: "アルバイトの経験[けいけん]",
    titleReading: "あるばいとのけいけん",
    level: "N4",
    summary: "Reflecting on a high school bookstore job, the writer recalls the fun of seeing new books first and the lessons learned about money and time.",
    estMinutes: 6,
    tags: ["part-time job", "bookstore", "high school"],
    body: [
      "高校[こうこう]の時[とき]、私[わたし]は本屋[ほんや]でアルバイトをしていました。家[いえ]から自転車[じてんしゃ]で十分[じゅうふん]の場所[ばしょ]にありました。週[しゅう]に三回[さんかい]、夕方[ゆうがた]から夜[よる]まで働[はたら]いていました。本[ほん]が好[す]きなので、この仕事[しごと]を選[えら]びました。",
      "仕事[しごと]の内容[ないよう]は、本[ほん]を棚[たな]に並[なら]べること、レジで対応[たいおう]すること、新[あたら]しい本[ほん]の注文[ちゅうもん]をすることでした。最初[さいしょ]は、本[ほん]の位置[いち]が分[わ]からなくて、お客[きゃく]さんに聞[き]かれても困[こま]りました。でも、少[すこ]しずつ覚[おぼ]えました。",
      "楽[たの]しかったことは、新[あたら]しい本[ほん]が入荷[にゅうか]する時[とき]です。誰[だれ]より先[さき]に新[あたら]しい小説[しょうせつ]を見[み]ることができました。また、お客[きゃく]さんと話[はな]すのも楽[たの]しかったです。「どの本[ほん]が面白[おもしろ]い？」と聞[き]かれると、私[わたし]のおすすめを紹介[しょうかい]しました。",
      "大変[たいへん]だったのは、立[た]ちっ放[ぱな]しだったことです。足[あし]が痛[いた]くなることがよくありました。また、試験[しけん]期間[きかん]は勉強[べんきょう]と両立[りょうりつ]するのが難[むずか]しかったです。でも、時間[じかん]を上手[じょうず]に使[つか]うことを学[まな]びました。",
      "このアルバイトで、お金[かね]を稼[かせ]ぐ大変[たいへん]さが分[わ]かりました。また、お客[きゃく]さんに挨拶[あいさつ]する、時間[じかん]を守[まも]るなどの社会[しゃかい]のルールも学[まな]びました。今[いま]の大学生活[だいがくせいかつ]でも、この経験[けいけん]は役[やく]に立[た]っています。"
    ],
    translation: [
      "In high school, I worked part-time at a bookstore. It was a ten-minute bicycle ride from my home. I worked three times a week, from evening until night. I like books, so I chose this job.",
      "My tasks were to arrange books on shelves, work at the register, and order new books. At first, I did not know where books were, so I had trouble when customers asked. But little by little, I memorized it.",
      "What was fun was when new books arrived. I could see new novels before anyone else. Also, talking with customers was fun. When asked which book was interesting, I introduced my recommendations.",
      "What was hard was standing all the time. My feet often hurt. Also, during exam periods, balancing study and work was difficult. But I learned to use my time well.",
      "Through this part-time job, I understood the difficulty of earning money. Also, I learned social rules such as greeting customers and being on time. This experience is useful in my current university life too."
    ],
    questions: [
      {
        q: "Where did the narrator work part-time?",
        choices: ["At a convenience store", "At a bookstore", "At a restaurant", "At a library"],
        answerIndex: 1,
        explanation: "The narrator worked part-time at a bookstore (本屋でアルバイトをしていました)."
      },
      {
        q: "How often did the narrator work?",
        choices: ["Once a week", "Twice a week", "Three times a week", "Four times a week"],
        answerIndex: 2,
        explanation: "The narrator worked three times a week (週に三回働いていました)."
      },
      {
        q: "What was fun about the job?",
        choices: ["Sitting all day", "Seeing new books before anyone else", "Meeting famous authors", "Getting free books"],
        answerIndex: 1,
        explanation: "It was fun to see new novels before anyone else (誰より先に新しい小説を見ることができました)."
      },
      {
        q: "What was difficult during exam periods?",
        choices: ["Balancing study and work", "Standing too long", "Talking to customers", "Ordering books"],
        answerIndex: 0,
        explanation: "Balancing study and work was difficult during exam periods (試験期間は勉強と両立するのが難しかった)."
      },
      {
        q: "What did the narrator learn from the job?",
        choices: ["How to read faster", "How to write books", "The difficulty of earning money and social rules", "How to manage a store"],
        answerIndex: 2,
        explanation: "The narrator learned the difficulty of earning money and social rules (お金を稼ぐ大変さ、社会のルールも学びました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-29 — 失敗から学ぶ (Learning from failure)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-29",
    title: "失敗[しっぱい]から学[まな]ぶ",
    titleReading: "しっぱいからまなぶ",
    level: "N4",
    summary: "After forgetting their lines on stage, a middle school drama club student turns an embarrassing failure into a lesson about growth.",
    estMinutes: 7,
    tags: ["failure", "drama club", "growth"],
    body: [
      "私[わたし]は中学生[ちゅうがくせい]の時[とき]、演劇部[えんげきぶ]にいたことがあります。文化祭[ぶんかさい]で劇[げき]を発表[はっぴょう]することになりました。私[わたし]は主役[しゅやく]に選[えら]ばれました。とても嬉[うれ]しかったです。",
      "しかし、本番[ほんばん]の日[ひ]、私[わたし]は大[おお]きな失敗[しっぱい]をしました。自分[じぶん]のせりふを忘[わす]れてしまったのです。舞台上[ぶたいじょう]で、言葉[ことば]が出[で]ませんでした。観客[かんきゃく]は静[しず]かになりました。私[わたし]は恥[は]ずかしくて泣[な]きたくなりました。",
      "劇[げき]の後[あと]、私[わたし]は部室[ぶしつ]で一人[ひとり]で泣[な]いていました。先輩[せんぱい]たちが来[き]て、「失敗[しっぱい]は誰[だれ]にでもある」と励[はげ]ましてくれました。監督[かんとく]の先生[せんせい]も、「失敗[しっぱい]を忘[わす]れず、次[つぎ]に生[い]かせ」と言[い]いました。",
      "その後[あと]、私[わたし]はもっと真面目[まじめ]に練習[れんしゅう]するようになりました。せりふを紙[かみ]に書[か]いて、毎日[まいにち]鏡[かがみ]の前[まえ]で練習[れんしゅう]しました。次[つぎ]の年[とし]、私[わたし]は再[ふたた]び主役[しゅやく]を演[えん]じました。今度[こんど]は上手[じょうず]にできました。",
      "この経験[けいけん]から、失敗[しっぱい]は終[お]わりではなく、成長[せいちょう]の機会[きかい]だと分[わ]かりました。失敗[しっぱい]を隠[かく]さず、認[みと]めて、次[つぎ]に生[い]かすことが大切[たいせつ]です。今[いま]でも、失敗[しっぱい]するたびにこの時[とき]のことを思[おも]い出[だ]します。"
    ],
    translation: [
      "When I was in middle school, I was in the drama club. We were going to perform a play at the school festival. I was chosen for the lead role. I was very happy.",
      "However, on the day of the performance, I made a big mistake. I forgot my lines. On stage, no words came out. The audience became quiet. I felt so embarrassed I wanted to cry.",
      "After the play, I cried alone in the club room. My seniors came and encouraged me, saying that failure happens to everyone. The director teacher also told me not to forget the failure and to use it next time.",
      "After that, I started practicing more seriously. I wrote my lines on paper and practiced in front of the mirror every day. The next year, I played the lead role again. This time I did it well.",
      "From this experience, I learned that failure is not the end but an opportunity to grow. It is important not to hide failures, but to acknowledge them and use them for the next time. Even now, every time I fail, I remember this moment."
    ],
    questions: [
      {
        q: "What club was the narrator in during middle school?",
        choices: ["Soccer club", "Drama club", "Music club", "Art club"],
        answerIndex: 1,
        explanation: "The narrator was in the drama club (演劇部にいたことがあります)."
      },
      {
        q: "What role did the narrator get for the play?",
        choices: ["A small role", "The lead role", "Just narration", "No role at all"],
        answerIndex: 1,
        explanation: "The narrator was chosen for the lead role (主役に選ばれました)."
      },
      {
        q: "What was the big mistake during the performance?",
        choices: ["Forgetting the lines", "Falling on stage", "Breaking a prop", "Arriving late"],
        answerIndex: 0,
        explanation: "The narrator forgot their lines on stage (自分のせりふを忘れてしまった)."
      },
      {
        q: "What did the director teacher tell the narrator?",
        choices: ["Quit the club", "Failure happens to everyone", "Forget the failure and use it next time", "You are not talented"],
        answerIndex: 2,
        explanation: "The teacher said to not forget the failure and use it next time (失敗を忘れず、次に生かせと言いました)."
      },
      {
        q: "What did the narrator learn from this experience?",
        choices: ["Failure is the end", "Failure is an opportunity to grow", "Failure should be hidden", "Failure is shameful forever"],
        answerIndex: 1,
        explanation: "The narrator learned that failure is an opportunity to grow (失敗は成長の機会だと分かりました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-30 — 地域のコミュニティ (A neighborhood community)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-30",
    title: "地域[ちいき]のコミュニティ",
    titleReading: "ちいきのこみゅにてぃ",
    level: "N4",
    summary: "A lively town shows how monthly meetings, cherry blossom parties, summer Bon Odori, and autumn sports days bring neighbors together.",
    estMinutes: 6,
    tags: ["community", "festivals", "neighborhood"],
    body: [
      "私[わたし]が住[す]んでいる町[まち]は、とても活気[かっき]があります。近所[きんじょ]の人[ひと]たちがよく集[あつ]まって、色[いろ]いろな活動[かつどう]をしています。毎月[まいつき]、町内会[ちょうないかい]の集会[しゅうかい]があります。そこで、次[つぎ]の月[つき]の予定[よてい]を決[き]めます。",
      "春[はる]には、町[まち]の公園[こうえん]で花見会[はなみかい]があります。みんなで料理[りょうり]を持[も]って集[あつ]まります。子供[こども]たちは広[ひろ]い場所[ばしょ]で走[はし]り回[まわ]って遊[あそ]びます。大人[おとな]はお酒[さけ]を飲[の]みながら、楽[たの]しく話[はな]します。",
      "夏[なつ]には、盆踊[ぼんおど]り大会[たいかい]があります。夜[よる]、神社[じんじゃ]の前[まえ]にやぐらが建[た]ちます。色[いろ]いろな人[ひと]が浴衣[ゆかた]を着[き]て踊[おど]ります。屋台[やたい]もたくさん出[で]て、子供[こども]たちは金魚[きんぎょ]すくいをします。",
      "秋[あき]には、町内会[ちょうないかい]主催[しゅさい]の運動会[うんどうかい]があります。年齢別[ねんれいべつ]に色[いろ]いろな競技[きょうぎ]があります。私[わたし]は毎年[まいとし]リレーに参加[さんか]しています。去年[きょねん]は、私[わたし]たちのチームが優勝[ゆうしょう]しました。とても嬉[うれ]しかったです。",
      "このような活動[かつどう]のおかげで、近所[きんじょ]の人[ひと]たちと親[した]しくなれます。困[こま]った時[とき]も助[たす]け合[あ]えます。私[わたし]はこの町[まち]がとても好[す]きです。将来[しょうらい]も、ずっとここに住[す]みたいと思[おも]っています。"
    ],
    translation: [
      "The town I live in is very lively. Neighbors often gather and do various activities. Every month, there is a neighborhood association meeting. There, we decide the schedule for the next month.",
      "In spring, there is a cherry blossom viewing party at the town park. Everyone brings food and gathers. Children run around and play in the open space. Adults drink alcohol and chat happily.",
      "In summer, there is a Bon Odori festival. At night, a yagura stage is built in front of the shrine. Various people wear yukata and dance. Many stalls are set up, and children do goldfish scooping.",
      "In autumn, there is a sports day hosted by the neighborhood association. There are various competitions by age group. I participate in the relay every year. Last year, our team won. I was very happy.",
      "Thanks to these activities, we can become close with our neighbors. When in trouble, we can help each other. I really like this town. In the future, I want to keep living here."
    ],
    questions: [
      {
        q: "How often does the neighborhood association meet?",
        choices: ["Every week", "Every month", "Every year", "Never"],
        answerIndex: 1,
        explanation: "The neighborhood association meets every month (毎月、町内会の集会があります)."
      },
      {
        q: "What event happens in spring?",
        choices: ["A Bon Odori festival", "A sports day", "A cherry blossom viewing party", "A New Year event"],
        answerIndex: 2,
        explanation: "A cherry blossom viewing party happens in spring (春には花見会があります)."
      },
      {
        q: "What do children do at the summer Bon Odori festival?",
        choices: ["Run relay races", "Goldfish scooping", "Watch cherry blossoms", "Cook food"],
        answerIndex: 1,
        explanation: "Children do goldfish scooping at the Bon Odori festival (子供たちは金魚すくいをします)."
      },
      {
        q: "What happened to the narrator's team last autumn?",
        choices: ["Lost the relay", "Won the relay", "Did not participate", "Quit the team"],
        answerIndex: 1,
        explanation: "The narrator's team won the relay last year (私たちのチームが優勝しました)."
      },
      {
        q: "What does the narrator want to do in the future?",
        choices: ["Move to a big city", "Travel abroad soon", "Keep living in this town", "Quit the neighborhood activities"],
        answerIndex: 2,
        explanation: "The narrator wants to keep living in this town (将来も、ずっとここに住みたいと思っています)."
      }
    ]
  }
];
