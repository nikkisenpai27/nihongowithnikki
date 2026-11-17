import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N4-level reading passages with comprehension questions.

export const readingN4E: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n4-41 — 日本の仕事の文化 (The Japanese work culture)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-41",
    title: "日本[にほん]の仕事[しごと]の文化[ぶんか]",
    titleReading: "にほんのしごとのぶんか",
    level: "N4",
    summary: "A foreign employee reflects on overtime, teamwork, and after-work drinking culture at a Japanese company.",
    estMinutes: 7,
    tags: ["work", "culture", "business"],
    body: [
      "私[わたし]は去年[きょねん]から日本[にほん]の会社[かいしゃ]で働[はたら]いています。最初[さいしょ]は外国[がいこく]の習慣[しゅうかん]と違[ちが]って、驚[おどろ]くことばかりでした。朝[あさ]の挨拶[あいさつ]から始[はじ]まって、会議[かいぎ]の進[すす]め方[かた]まで、色[いろ]いろなルールがあります。毎日[まいにち]新[あたら]しいことを学[まな]びながら、働[はたら]いています。",
      "日本[にほん]の会社[かいしゃ]では、残業[ざんぎょう]が普通[ふつう]です。定時[ていじ]に帰[かえ]る人[ひと]はあまり多[おお]くありません。最初[さいしょ]は驚[おどろ]きましたが、仕事[しごと]の責任[せきにん]を感[かん]じて、私[わたし]も残業[ざんぎょう]するようになりました。しかし、最近[さいきん]は働[はたら]き方[かた]改革[かいかく]で、少[すこ]しずつ変[か]わりつつあります。若[わか]い人[ひと]は定時[ていじ]に帰[かえ]る人[ひと]が増[ふ]えてきました。",
      "チームワークも大切[たいせつ]です。一人[ひとり]の仕事[しごと]より、みんなで協力[きょうりょく]して進[すす]めることが好[この]まれます。報連相[ほうれんそう]という言葉[ことば]もあり、報告[ほうこく]、連絡[れんらく]、相談[そうだん]をしっかりします。分[わ]からないことがあったら、早[はや]く聞[き]くのがマナーです。勝手[かって]に判断[はんだん]しないことが大切[たいせつ]です。",
      "仕事[しごと]の後[あと]、同僚[どうりょう]と飲[の]みに行[い]くこともあります。お酒[さけ]を飲[の]みながら、本音[ほんね]を話[はな]せます。同僚[どうりょう]と仲良[なかよ]くなるいい機会[きかい]です。最近[さいきん]は若[わか]い人[ひと]が減[へ]っていますが、まだ文化[ぶんか]として残[のこ]っています。私[わたし]も、たまには参加[さんか]するようにしています。",
      "日本[にほん]の仕事[しごと]の文化[ぶんか]には、良[よ]い点[てん]と大変[たいへん]な点[てん]があります。けれども、相手[あいて]を気遣[づか]う気持[きも]ちや、責任[せきにん]感[かん]は素晴[すば]らしいと思[おも]います。自分[じぶん]らしく働[はたら]けるように、工夫[くふう]しながら続[つづ]けていきたいです。"
    ],
    translation: [
      "I have been working at a Japanese company since last year. At first everything was different from foreign customs and I was constantly surprised. From morning greetings to how meetings are run, there are various rules. Every day I learn new things while working.",
      "At Japanese companies, overtime is normal. Not many people go home exactly on time. At first I was surprised, but feeling the responsibility of the work, I started doing overtime too. But recently, with work-style reform, things are gradually changing. More young people are going home on time.",
      "Teamwork is also important. Working together in cooperation is preferred over working alone. There is the word hou-ren-sou, and people do reporting, contacting, and consulting properly. If you don't understand something, asking early is good manners. Not making judgments on your own is important.",
      "After work, I sometimes go out drinking with colleagues. Over drinks, you can share your honest feelings. It's a good chance to get close to coworkers. Recently fewer young people join, but it still remains as a culture. I also try to participate from time to time.",
      "The Japanese work culture has good points and hard points. However, the consideration for others and the sense of responsibility are wonderful, I think. I want to keep working while figuring out how to work in my own way."
    ],
    questions: [
      {
        q: "How long has the writer been working at the Japanese company?",
        choices: ["One month", "Since last year", "Five years", "Just started"],
        answerIndex: 1,
        explanation: "The writer has been working there since last year (去年から働いています)."
      },
      {
        q: "What does the writer say about overtime?",
        choices: ["It is forbidden", "Only managers do it", "It is normal in Japan", "It is unpaid"],
        answerIndex: 2,
        explanation: "Overtime is normal at Japanese companies (残業が普通です)."
      },
      {
        q: "What does hou-ren-sou refer to?",
        choices: ["A type of food", "Reporting, contacting, and consulting", "A holiday greeting", "A meeting style"],
        answerIndex: 1,
        explanation: "Hou-ren-sou stands for 報告 (report), 連絡 (contact), 相談 (consult)."
      },
      {
        q: "What is changing recently regarding young workers?",
        choices: ["They work longer hours", "They quit more often", "More go home on time", "They refuse overtime pay"],
        answerIndex: 2,
        explanation: "Recently more young people go home on time (定時に帰る人が増えてきました)."
      },
      {
        q: "What does the writer want to do going forward?",
        choices: ["Quit the company soon", "Move back home", "Work in their own way while adapting", "Stop learning new things"],
        answerIndex: 2,
        explanation: "The writer wants to keep working while figuring out how to work in their own way (自分らしく働けるように工夫しながら続けていきたい)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-42 — 突然の病気 (A health scare)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-42",
    title: "突然[とつぜん]の病気[びょうき]",
    titleReading: "とつぜんのびょうき",
    level: "N4",
    summary: "A sudden abdominal pain turns out to be appendicitis, leading to surgery and a new appreciation for health.",
    estMinutes: 6,
    tags: ["health", "hospital", "experience"],
    body: [
      "先週[せんしゅう]の夜[よる]、突然[とつぜん]お腹[なか]が痛[いた]くなりました。最初[さいしょ]はただの痛[いた]みだと思[おも]っていましたが、だんだん強[つよ]くなりました。立[た]つこともできなくなって、家族[かぞく]に助[たす]けを求[もと]めました。痛[いた]くて、一晩[ひとばん]中[じゅう]眠[ねむ]れませんでした。",
      "夜[よる]が明[あ]けても痛[いた]みが続[つづ]いたので、家族[かぞく]が救急[きゅうきゅう]車[しゃ]を呼[よ]んでくれました。病院[びょういん]に着[つ]いた時[とき]、医者[いしゃ]が色[いろ]いろな検査[けんさ]をしてくれました。レントゲンを撮[と]ったり、血[ち]を取[と]ったりしました。結果[けっか]、虫垂[ちゅうすい]炎[えん]だと分[わ]かりました。すぐに手術[しゅじゅつ]する必要[ひつよう]があると言[い]われました。",
      "初[はじ]めての手術[しゅじゅつ]だったので、とても緊張[きんちょう]しました。でも、看護師[かんごし]さんが優[やさ]しく説明[せつめい]してくれたので、安心[あんしん]できました。麻酔[ますい]をかけてもらって、気[き]がついた時[とき]には、もう病室[びょうしつ]にいました。手術[しゅじゅつ]は無事[ぶじ]に終[お]わったと聞[き]いて、ほっとしました。",
      "手術[しゅじゅつ]の後[あと]、三[みっ]日間[かかん]入院[にゅういん]しました。ベッドで動[うご]けなかったので、退屈[たいくつ]でした。でも、家族[かぞく]が毎日[まいにち]見舞[みま]いに来[き]てくれました。看護師[かんごし]さんも、優[やさ]しく声[こえ]をかけてくれました。少[すこ]しずつ食事[しょくじ]ができるようになって、回復[かいふく]していくのを感[かん]じました。",
      "退院[たいいん]してから、健康[けんこう]の大切[たいせつ]さを改[あらた]めて感[かん]じました。体[からだ]のサインを見逃[みのが]さないことが大切[たいせつ]です。これからは、定期[ていき]検診[けんしん]も受[う]けるようにします。突然[とつぜん]の病気[びょうき]は誰[だれ]にでも起[お]こるので、日々[ひび]の健康[けんこう]に気[き]をつけたいです。"
    ],
    translation: [
      "Last week at night, my stomach suddenly started hurting. At first I thought it was just a normal pain, but it gradually got stronger. I could not even stand up, so I asked my family for help. The pain was so bad I could not sleep all night.",
      "Even after dawn the pain continued, so my family called an ambulance. When I arrived at the hospital, the doctor did various tests. They took X-rays and drew blood. The result was appendicitis. They said surgery was needed right away.",
      "It was my first surgery, so I was very nervous. But the nurse explained things kindly, so I felt relieved. They gave me anesthesia, and when I woke up I was already in the hospital room. Hearing the surgery had finished safely, I felt relieved.",
      "After the surgery I was hospitalized for three days. I could not move from the bed, so I was bored. But my family came to visit every day. The nurses also spoke to me kindly. Little by little I could eat again, and I felt myself recovering.",
      "After leaving the hospital, I felt the importance of health anew. It is important not to miss the body's signals. From now on I will also get regular check-ups. Sudden illness can happen to anyone, so I want to be careful about daily health."
    ],
    questions: [
      {
        q: "When did the pain start?",
        choices: ["In the morning", "At night", "At work", "After lunch"],
        answerIndex: 1,
        explanation: "The pain started at night (先週の夜)."
      },
      {
        q: "What was the diagnosis?",
        choices: ["A cold", "A broken leg", "Appendicitis", "Food poisoning"],
        answerIndex: 2,
        explanation: "The doctor diagnosed appendicitis (虫垂炎)."
      },
      {
        q: "How did the writer feel before the surgery?",
        choices: ["Calm", "Angry", "Very nervous", "Excited"],
        answerIndex: 2,
        explanation: "It was the writer's first surgery so they were very nervous (とても緊張しました)."
      },
      {
        q: "How many days was the writer hospitalized?",
        choices: ["One day", "Three days", "One week", "Two weeks"],
        answerIndex: 1,
        explanation: "The writer was hospitalized for three days (三日間入院しました)."
      },
      {
        q: "What does the writer plan to do going forward?",
        choices: ["Skip check-ups", "Get regular check-ups", "Quit their job", "Take medicine daily"],
        answerIndex: 1,
        explanation: "The writer will get regular check-ups from now on (定期検診も受けるようにします)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-43 — ネットショッピングの経験 (An online shopping experience)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-43",
    title: "ネットショッピングの経験[けいけん]",
    titleReading: "ねっとしょっぴんぐのけいけん",
    level: "N4",
    summary: "A first-time online shopper orders a jacket, enjoys fast delivery, but learns about shipping fees and return rules.",
    estMinutes: 5,
    tags: ["shopping", "internet", "daily-life"],
    body: [
      "私[わたし]は今[いま]までネットショッピングを使[つか]ったことがありませんでした。店[みせ]で服[ふく]を選[えら]ぶのが好[す]きだったからです。しかし、最近[さいきん]仕事[しごと]が忙[いそが]しくて、店[みせ]に行[い]けなくなりました。そこで、初[はじ]めてネットで服[ふく]を買[か]うことにしました。友達[ともだち]にも勧[すす]められたからです。",
      "スマホで色[いろ]いろなサイトを見[み]ました。色[いろ]やサイズ、値段[ねだん]を比[くら]べて、一[ひと]つ上着[うわぎ]を選[えら]びました。他[ほか]の人[ひと]のレビューも読[よ]んで、決[き]めました。クレジットカードで支払[しはら]いをして、注文[ちゅうもん]ボタンを押[お]しました。とても簡単[かんたん]で、びっくりしました。",
      "三日後[みっかご]、荷物[にもつ]が届[とど]きました。早[はや]くてびっくりしました。箱[はこ]を開[あ]けると、きれいに包[つつ]まれていました。服[ふく]を着[き]てみると、サイズもぴったりでした。写真[しゃしん]と同[おな]じ色[いろ]で、とても満足[まんぞく]しました。店[みせ]に行[い]かなくても、こんなに便利[べんり]だとは思[おも]いませんでした。",
      "でも、少[すこ]し問題[もんだい]もありました。送料[そうりょう]が思[おも]ったより高[たか]かったです。それに、返品[へんぴん]する時[とき]の手続[てつづ]きが複雑[ふくざつ]そうです。サイズが合[あ]わなかった場合[ばあい]、自分[じぶん]で送料[そうりょう]を払[はら]って送[おく]らなければなりません。便利[べんり]な反面[はんめん]、注意[ちゅうい]が必要[ひつよう]だと分[わ]かりました。",
      "今[いま]では、ネットショッピングが欠[か]かせなくなりました。本[ほん]や食[た]べ物[もの]も買[か]います。雨[あめ]の日[ひ]でも、家[いえ]から出[で]ずに買[か]えるのは便利[べんり]です。でも、時々[ときどき]店[みせ]で買[か]う楽[たの]しさも忘[わす]れないようにしたいです。人[ひと]と話[はな]すのも、買[か]い物[もの]の良[よ]いところだと思[おも]います。"
    ],
    translation: [
      "I had never used online shopping before. I liked choosing clothes in stores. But recently work got busy and I could not go to stores. So I decided to buy clothes online for the first time. A friend also recommended it.",
      "I looked at various sites on my phone. I compared colors, sizes, and prices, and chose one jacket. I read other people's reviews and decided. I paid by credit card and pressed the order button. It was so easy, I was surprised.",
      "Three days later, the package arrived. It was so fast I was surprised. When I opened the box, it was wrapped nicely. When I tried the clothes on, the size was perfect. The color was the same as the photo and I was very satisfied. I did not think it would be this convenient without going to a store.",
      "But there were some problems too. The shipping fee was higher than I expected. Also, the return procedure seemed complicated. If the size did not fit, I would have to pay the shipping myself to send it back. I understood that while convenient, attention is needed.",
      "Now online shopping has become indispensable. I buy books and food too. It is convenient to be able to buy things without leaving home, even on rainy days. But I want to remember the fun of shopping in stores from time to time. Talking with people is also a good thing about shopping, I think."
    ],
    questions: [
      {
        q: "Why did the writer start online shopping?",
        choices: ["Stores were closed", "Work got busy", "A friend forced them", "It was cheaper"],
        answerIndex: 1,
        explanation: "Work got busy and the writer could not go to stores (仕事が忙しくて店に行けなくなりました)."
      },
      {
        q: "What did the writer buy?",
        choices: ["A book", "Food", "A jacket", "Shoes"],
        answerIndex: 2,
        explanation: "The writer chose a jacket (上着を選びました)."
      },
      {
        q: "How long did delivery take?",
        choices: ["One day", "Three days", "One week", "Two weeks"],
        answerIndex: 1,
        explanation: "The package arrived three days later (三日後、荷物が届きました)."
      },
      {
        q: "What problem did the writer mention?",
        choices: ["Wrong color was delivered", "Package was damaged", "Shipping fee was high and returns complicated", "Site crashed"],
        answerIndex: 2,
        explanation: "The shipping fee was high and the return procedure seemed complicated (送料が高かった、返品の手続きが複雑)."
      },
      {
        q: "What does the writer want to remember?",
        choices: ["To always use a credit card", "The fun of shopping in stores", "To never buy clothes online", "To avoid rainy-day shopping"],
        answerIndex: 1,
        explanation: "The writer wants to remember the fun of shopping in stores (店で買う楽しさも忘れないようにしたい)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-44 — 桜の季節 (The cherry blossom season)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-44",
    title: "桜[さくら]の季節[きせつ]",
    titleReading: "さくらのきせつ",
    level: "N4",
    summary: "Friends gather under cherry blossoms for hanami, sharing food, conversation, and an evening of light-up beauty.",
    estMinutes: 6,
    tags: ["spring", "nature", "seasons"],
    body: [
      "日本[にほん]に来[き]て、桜[さくら]の季節[きせつ]が一番[いちばん]好[す]きになりました。毎年[まいとし]春[はる]になると、天気[てんき]予報[よほう]で開花[かいか]の日[ひ]が知[し]らされます。今年[ことし]は四月[しがつ]の初[はじ]めに満開[まんかい]になりました。私[わたし]の町[まち]の公園[こうえん]にも、たくさんの桜[さくら]の木[き]があります。",
      "友達[ともだち]と一緒[いっしょ]に花見[はなみ]に行[い]きました。前[まえ]の日[ひ]に、公園[こうえん]の場所[ばしょ]を取[と]りに行[い]きました。朝[あさ]早[はや]く行[い]って、シートを敷[し]きました。桜[さくら]の木[き]の下[もと]は、もうたくさんの人[ひと]で賑[にぎ]やかでした。色[いろ]いろな家族[かぞく]や会社[かいしゃ]のグループが集[あつ]まっていました。",
      "お弁当[べんとう]やお酒[さけ]を持[も]って行[い]きました。桜[さくら]を見上[みあ]げながら食[た]べるご飯[はん]は、格別[かくべつ]でした。ピンク色[いろ]の花[はな]が風[かぜ]に揺[ゆ]れて、とてもきれいでした。時々[ときどき]花[はな]びらが舞[ま]い、夢[ゆめ]のようでした。友達[ともだち]と一緒[いっしょ]に、写真[しゃしん]をたくさん撮[と]りました。",
      "隣[となり]の人[ひと]とも話[はな]しました。初[はじ]めて会[あ]った人[ひと]と、桜[さくら]の話[はなし]で盛[も]り上[あ]がりました。花見[はなみ]は、人[ひと]と人[ひと]を結[むす]ぶ不思議[ふしぎ]な力[ちから]があると思[おも]いました。夜[よる]にはライトアップされた桜[さくら]も楽[たの]しみました。夜[よる]の桜[さくら]は、昼[ひる]とは違[ちが]う美[うつく]しさがありました。",
      "桜[さくら]は一週間[いっしゅうかん]くらいで散[ち]ってしまいます。短[みじか]い期間[きかん]だからこそ、特別[とくべつ]に感[かん]じます。人生[じんせい]も桜[さくら]のように、今[いま]を大切[たいせつ]に生[い]きるべきだと感[かん]じました。来年[らいねん]も、きっと友達[ともだち]と花見[はなみ]に行[い]くつもりです。桜[さくら]の季節[きせつ]が、私[わたし]の一番[いちばん]好[す]きな季節[きせつ]です。"
    ],
    translation: [
      "Since coming to Japan, the cherry blossom season has become my favorite. Every year when spring comes, the dates of flowering are announced on weather forecasts. This year the blossoms were in full bloom at the start of April. There are many cherry trees in the park in my town too.",
      "I went to see the blossoms with friends. The day before, we went to reserve a spot in the park. We went early in the morning and laid down a sheet. Under the cherry trees it was already lively with many people. Various families and company groups had gathered.",
      "We brought bentos and sake. Eating while looking up at the cherry blossoms was exceptional. The pink flowers swaying in the wind were very beautiful. From time to time petals danced down, like a dream. With my friends, I took many photos.",
      "I also talked with the people next to us. Even with people I met for the first time, we got excited talking about the cherry blossoms. I felt that hanami has a mysterious power to connect people. At night we also enjoyed the lit-up cherry blossoms. The cherry blossoms at night had a beauty different from the daytime.",
      "The cherry blossoms fall within about a week. Because the period is short, it feels special. I felt that life, like cherry blossoms, should be lived treasuring the present. Next year too I plan to go to hanami with friends. The cherry blossom season is my favorite season."
    ],
    questions: [
      {
        q: "When did the cherry blossoms reach full bloom this year?",
        choices: ["March", "Early April", "May", "Late February"],
        answerIndex: 1,
        explanation: "Full bloom was at the start of April (四月の初めに満開になりました)."
      },
      {
        q: "What did the friends do the day before hanami?",
        choices: ["Bought sake", "Reserved a spot in the park", "Made bento", "Checked the weather"],
        answerIndex: 1,
        explanation: "The day before they went to reserve a spot in the park (公園の場所を取りに行きました)."
      },
      {
        q: "What did the writer feel hanami has?",
        choices: ["A high cost", "A mysterious power to connect people", "A long season", "A religious meaning"],
        answerIndex: 1,
        explanation: "The writer felt hanami has a mysterious power to connect people (人と人を結ぶ不思議な力)."
      },
      {
        q: "What is said about the cherry blossoms?",
        choices: ["They last all spring", "They bloom at night only", "They fall within about a week", "They bloom twice"],
        answerIndex: 2,
        explanation: "Cherry blossoms fall within about a week (一週間くらいで散ってしまいます)."
      },
      {
        q: "What does the writer plan to do next year?",
        choices: ["Skip hanami", "Go abroad", "Go to hanami with friends again", "Move to a new town"],
        answerIndex: 2,
        explanation: "The writer plans to go to hanami with friends next year too (来年も友達と花見に行くつもり)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-45 — 語学交換のパートナー (A language exchange partnership)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-45",
    title: "語学[ごがく]交換[こうかん]のパートナー",
    titleReading: "ごがくこうかんのぱーとなー",
    level: "N4",
    summary: "A language learner meets Yamada-san through an app, and their weekly exchanges grow into a real friendship.",
    estMinutes: 6,
    tags: ["language", "friendship", "study"],
    body: [
      "私[わたし]は日本[にほん]語[ご]を勉強[べんきょう]していますが、話[はな]す機会[きかい]がありませんでした。教室[きょうしつ]で文法[ぶんぽう]を学[まな]んでも、使[つか]う場所[ばしょ]がないと忘[わす]れてしまいます。そこで、アプリで語学[ごがく]交換[こうかん]のパートナーを探[さが]しました。何人[なんにん]かとメッセージをして、山田[やまだ]さんと会[あ]うことになりました。",
      "私[わたし]は英語[えいご]を教[おし]えて、山田[やまだ]さんは日本[にほん]語[ご]を教[おし]えてくれることになりました。最初[さいしょ]は緊張[きんちょう]しましたが、山田[やまだ]さんは親切[しんせつ]な人[ひと]でした。カフェで一[いっ]時間[じかん]ずつ、お互[たが]いの言語[げんご]で話[はな]しました。最初[さいしょ]は下手[へた]でしたが、だんだん話[はな]せるようになりました。",
      "山田[やまだ]さんは、私[わたし]の間違[まちが]いを優[やさ]しく直[なお]してくれました。発音[はつおん]や文法[ぶんぽう]の指導[しどう]もしてくれました。私[わたし]は、山田[やまだ]さんの英会話[えいかいわ]の練習[れんしゅう]相手[あいて]になりました。難[むずか]しい言葉[ことば]も、一緒[いっしょ]に考[かんが]えました。お互[たが]いに、相手[あいて]のレベルに合[あ]わせて話[はな]しました。",
      "言葉[ことば]だけではなく、文化[ぶんか]の話[はなし]もしました。山田[やまだ]さんは、私[わたし]に日本[にほん]の習慣[しゅうかん]を教[おし]えてくれました。私[わたし]は、自分[じぶん]の国[くに]の文化[ぶんか]を伝[つた]えました。お互[たが]いの国[くに]のアニメや食[た]べ物[もの]についても話[はな]しました。新[あたら]しい視点[してん]を得[え]て、視野[しや]が広[ひろ]がりました。",
      "今[いま]では、ただの語学[ごがく]パートナーではなく、本当[ほんとう]の友達[ともだち]になりました。週[しゅう]に一回[いっかい]、必[かなら]ず会[あ]っています。山田[やまだ]さんのおかげで、日本[にほん]語[ご]が上達[じょうたつ]しました。言葉[ことば]を通[つう]じて、友情[ゆうじょう]が育[そだ]ちました。これからも、長[なが]く続[つづ]けていきたいです。"
    ],
    translation: [
      "I am studying Japanese but I had no chance to speak. Even if I learn grammar in a classroom, without a place to use it I forget. So I looked for a language exchange partner on an app. I messaged several people and ended up meeting Yamada-san.",
      "I would teach English and Yamada-san would teach me Japanese. At first I was nervous, but Yamada-san was a kind person. At a cafe we spoke for one hour each in our languages. At first I was bad, but gradually I became able to speak.",
      "Yamada-san gently corrected my mistakes. He also gave me guidance on pronunciation and grammar. I became Yamada-san's English conversation practice partner. We thought about difficult words together. We both spoke adjusted to the other's level.",
      "We talked not only about language but also about culture. Yamada-san taught me Japanese customs. I conveyed my own country's culture. We also talked about anime and food in each other's countries. I gained new perspectives and my horizons broadened.",
      "Now we are no longer just language partners but real friends. We meet once a week, without fail. Thanks to Yamada-san, my Japanese has improved. Through words, friendship grew. I want to keep this going for a long time."
    ],
    questions: [
      {
        q: "Why did the writer look for a language partner?",
        choices: ["For a class assignment", "They had no chance to speak Japanese", "To make money", "Yamada-san asked them"],
        answerIndex: 1,
        explanation: "The writer had no chance to speak Japanese (話す機会がなかった)."
      },
      {
        q: "How did they meet Yamada-san?",
        choices: ["At school", "Through a friend", "Through an app", "At work"],
        answerIndex: 2,
        explanation: "They found Yamada-san through an app (アプリで探しました)."
      },
      {
        q: "How did they split their time at the cafe?",
        choices: ["All in Japanese", "All in English", "One hour each in each language", "Thirty minutes total"],
        answerIndex: 2,
        explanation: "They spoke for one hour each in each other's language (一時間ずつ、お互いの言語で話しました)."
      },
      {
        q: "What did they discuss besides language?",
        choices: ["Only grammar rules", "Culture, anime, and food", "Sports news", "Work problems"],
        answerIndex: 1,
        explanation: "They also talked about culture, anime, and food (文化の話、アニメや食べ物についても話しました)."
      },
      {
        q: "What has become of their relationship now?",
        choices: ["They stopped meeting", "They are real friends", "They only message online", "They became business partners"],
        answerIndex: 1,
        explanation: "They are now real friends who meet once a week (本当の友達になりました、週に一回会っています)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-46 — 新しい街への引っ越し (Moving to a new city)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-46",
    title: "新[あたら]しい街[まち]への引[ひ]っ越[こ]し",
    titleReading: "あたらしいまちへのひっこし",
    level: "N4",
    summary: "A transfer to Kyoto brings a warm neighborhood, traditional streetscapes, and the slow joy of settling in.",
    estMinutes: 7,
    tags: ["moving", "city-life", "kyoto"],
    body: [
      "私[わたし]は先月[せんげつ]、大阪[おおさか]から京都[きょうと]に引[ひ]っ越[こ]しました。仕事[しごと]の転勤[てんきん]でした。初[はじ]めての京都[きょうと]生活[せいかつ]に、ドキドキしていました。でも、古[ふる]い街[まち]に住[す]めることを楽[たの]しみにしていました。荷物[にもつ]を整理[せいり]して、新[あたら]しい生活[せいかつ]の準備[じゅんび]をしました。",
      "引[ひ]っ越[こ]しの当日[とうじつ]、荷物[にもつ]を片付[かたづ]けた後[あと]、近[ちか]くを散歩[さんぽ]しました。近所[きんじょ]の人[ひと]が「ようこそ」と挨拶[あいさつ]してくれました。小[ちい]さい商店街[しょうてんがい]があり、八百屋[やおや]や魚屋[さかなや]がありました。人[ひと]の温[あたた]かさを感[かん]じました。大阪[おおさか]とは違[ちが]う、ゆっくりした空気[くうき]がありました。",
      "週末[しゅうまつ]、有名[ゆうめい]なお寺[てら]や神社[じんじゃ]に行[い]きました。京都[きょうと]の街[まち]は、新[あたら]しいビルと古[ふる]い町屋[まちや]が混[ま]じっていました。観光客[かんこうきゃく]がたくさんいましたが、地元[じもと]の人[ひと]たちも日常[にちじょう]を楽[たの]んでいました。狭[せま]い路地[ろじ]を歩[ある]くと、時間[じかん]が止[と]まったような気持[きも]ちになりました。",
      "生活[せいかつ]にも慣[な]れてきました。通勤[つうきん]の電車[でんしゃ]は、大阪[おおさか]より少[すこ]し空[す]いています。でも、京都[きょうと]のバスは混[こ]むことが多[おお]いです。食[た]べ物[もの]も美味[おい]しくて、特[とく]にお豆腐[とうふ]が有名[ゆうめい]です。湯豆腐[ゆどうふ]やおばんざいを食[た]べるのが好[す]きになりました。町[まち]の人[ひと]も、親切[しんせつ]な人[ひと]が多[おお]いです。",
      "今[いま]では、京都[きょうと]の生活[せいかつ]がとても好[す]きです。新[あたら]しい友達[ともだち]もできました。引[ひ]っ越[こ]しは大変[たいへん]ですが、新[あたら]しい街[まち]で新[あたら]しい自分[じぶん]を見[み]つける楽[たの]しさもあります。これからも、この街[まち]を大切[たいせつ]にしたいです。もっと京都[きょうと]の良[よ]いところを見[み]つけていきたいです。"
    ],
    translation: [
      "Last month I moved from Osaka to Kyoto. It was a job transfer. I was nervous about living in Kyoto for the first time. But I was looking forward to living in an old city. I sorted my belongings and prepared for my new life.",
      "On the day of the move, after putting things away, I took a walk nearby. Neighbors greeted me with \"welcome.\" There was a small shopping street with a greengrocer and a fish shop. I felt the warmth of the people. There was a relaxed air different from Osaka.",
      "On weekends I went to famous temples and shrines. The city of Kyoto was a mix of new buildings and old townhouses. There were many tourists, but locals were also enjoying daily life. Walking through narrow alleys, it felt as if time had stopped.",
      "I have gotten used to life here. The commuter trains are a bit less crowded than Osaka. But Kyoto buses are often crowded. The food is delicious, especially tofu which is famous. I came to like yudofu and obanzai. The people in town are mostly kind.",
      "Now I really love living in Kyoto. I have made new friends. Moving is hard, but there is a joy in finding a new self in a new city. I want to treasure this city from now on. I want to find more good things about Kyoto."
    ],
    questions: [
      {
        q: "Where did the writer move from and to?",
        choices: ["Tokyo to Osaka", "Osaka to Kyoto", "Kyoto to Tokyo", "Osaka to Tokyo"],
        answerIndex: 1,
        explanation: "The writer moved from Osaka to Kyoto (大阪から京都に引っ越しました)."
      },
      {
        q: "Why did the writer move?",
        choices: ["For school", "A job transfer", "To marry", "For cheaper rent"],
        answerIndex: 1,
        explanation: "The move was due to a job transfer (仕事の転勤でした)."
      },
      {
        q: "What did neighbors do on the day of the move?",
        choices: ["Ignored the writer", "Greeted the writer warmly", "Complained about noise", "Brought gifts of tofu"],
        answerIndex: 1,
        explanation: "Neighbors greeted the writer warmly with \"welcome\" (ようことと挨拶してくれました)."
      },
      {
        q: "How does Kyoto transportation compare to Osaka?",
        choices: ["Trains are more crowded", "Buses are always empty", "Trains are less crowded but buses often crowded", "Trains run less often"],
        answerIndex: 2,
        explanation: "Trains are less crowded than Osaka but buses are often crowded (電車は空いている、バスは混むことが多い)."
      },
      {
        q: "What local food did the writer come to like?",
        choices: ["Ramen and gyoza", "Yudofu and obanzai", "Sushi and tempura", "Curry and tonkatsu"],
        answerIndex: 1,
        explanation: "The writer came to like yudofu and obanzai (湯豆腐やおばんざいを食べるのが好きになりました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-47 — 趣味の大切さ (The importance of hobbies)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-47",
    title: "趣味[しゅみ]の大切[たいせつ]さ",
    titleReading: "しゅみのたいせつさ",
    level: "N4",
    summary: "Burned out by work, the writer tries several hobbies, falls in love with photography, and rediscovers daily beauty.",
    estMinutes: 6,
    tags: ["hobbies", "lifestyle", "wellbeing"],
    body: [
      "私[わたし]は最近[さいきん]、趣味[しゅみ]の大切[たいせつ]さに気[き]づきました。仕事[しごと]ばかりの生活[せいかつ]に疲[つか]れて、何[なに]も楽[たの]しくありませんでした。毎日[まいにち]同[おな]じことの繰[く]り返[かえ]しで、心[こころ]が乾[かわ]いていくようでした。ある日[ひ]、友達[ともだち]に「趣味[しゅみ]はある？」と聞[き]かれました。",
      "私[わたし]は特[とく]に趣味[しゅみ]がありませんでした。友達[ともだち]に勧[すす]められて、色[いろ]いろなことを試[ため]しました。料理[りょうり]や写真[しゃしん]、陶芸[とうげい]、園芸[えんげい]です。最初[さいしょ]は上手[じょうず]にできませんでしたが、少[すこ]しずつ楽[たの]しくなりました。続[つづ]けるうちに、新[あたら]しい自分[じぶん]を見[み]つけたような気持[きも]ちがしました。",
      "中[なか]でも写真[しゃしん]が一番[いちばん]好[す]きになりました。休[やす]みの日[ひ]は、カメラを持[も]って色[いろ]いろな場所[ばしょ]に出[で]かけます。公園[こうえん]の花[はな]や、町[まち]の猫[ねこ]を撮[と]ります。一枚[いちまい]の写真[しゃしん]に、その時[とき]の空気[くうき]が残[のこ]ります。後[あと]で見[み]返[かえ]すと、その瞬間[しゅんかん]がよみがえります。",
      "趣味[しゅみ]を通[つう]じて、生活[せいかつ]が豊[ゆた]かになりました。写真[しゃしん]を撮[と]る時[とき]、日常[にちじょう]の小[ちい]さな美[うつく]しさに気[き]づくようになりました。仕事[しごと]のストレスも、趣味[しゅみ]の時間[じかん]でリセットできます。心[こころ]に余裕[よゆう]ができました。新[あたら]しい友達[ともだち]も、写真[しゃしん]を通[つう]じてできました。",
      "趣味[しゅみ]は、人生[じんせい]を楽[たの]しむための大切[たいせつ]な要素[ようそ]です。お金[かね]にならなくても、心[こころ]を満[み]たしてくれます。趣味[しゅみ]がない人[ひと]は、小[ちい]さなことから始[はじ]めてみてください。必[かなら]ず、楽[たの]しい世界[せかい]が見[み]つかります。私[わたし]も、これからも写真[しゃしん]を続[つづ]けていきたいです。"
    ],
    translation: [
      "Recently I realized the importance of hobbies. I was tired from a work-only life and nothing was fun. Every day was a repetition of the same things, and it felt like my heart was drying up. One day a friend asked me, \"Do you have a hobby?\"",
      "I did not have any particular hobby. A friend recommended I try various things: cooking, photography, pottery, gardening. At first I was not good, but gradually it became fun. As I continued, I felt I had found a new self.",
      "Among them, photography became my favorite. On days off I take my camera and go to various places. I photograph flowers in parks and cats in town. In one photo, the air of that moment remains. When I look back at it later, that instant comes back to life.",
      "Through hobbies, my life became richer. When taking photos, I came to notice small beauties of daily life. Work stress can also be reset by hobby time. I gained some breathing room in my heart. I even made new friends through photography.",
      "Hobbies are an important element for enjoying life. Even if they don't make money, they fill the heart. People without hobbies should try starting with something small. You will surely find a fun world. I too want to keep doing photography from now on."
    ],
    questions: [
      {
        q: "What made the writer realize they lacked a hobby?",
        choices: ["A doctor's advice", "A friend's question", "A TV show", "A book"],
        answerIndex: 1,
        explanation: "A friend asked \"Do you have a hobby?\" (友達に「趣味はある？」と聞かれました)."
      },
      {
        q: "Which hobby became the writer's favorite?",
        choices: ["Cooking", "Pottery", "Gardening", "Photography"],
        answerIndex: 3,
        explanation: "Photography became the writer's favorite (写真が一番好きになりました)."
      },
      {
        q: "What does one photo do, according to the writer?",
        choices: ["Costs a lot of money", "Brings stress", "Preserves the air of that moment", "Requires special training"],
        answerIndex: 2,
        explanation: "In one photo, the air of that moment remains (一枚の写真に、その時の空気が残ります)."
      },
      {
        q: "What changed in the writer through hobbies?",
        choices: ["Life got busier", "Heart gained breathing room and small beauties were noticed", "Work got worse", "They quit their job"],
        answerIndex: 1,
        explanation: "Through hobbies the writer noticed small beauties and gained breathing room in the heart (心に余裕ができた、小さな美しさに気づくようになった)."
      },
      {
        q: "What advice does the writer give to people without hobbies?",
        choices: ["Take up cooking only", "Start with something small", "Buy an expensive camera", "Wait for inspiration"],
        answerIndex: 1,
        explanation: "People without hobbies should start with something small (小さなことから始めてみてください)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-48 — 子供の頃の思い出 (A childhood memory)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-48",
    title: "子供[こども]の頃[ころ]の思[おも]い出[で]",
    titleReading: "こどものころのおもいで",
    level: "N4",
    summary: "A city dweller recalls a countryside childhood of seasons, friends, a beloved grandfather, and a summer festival.",
    estMinutes: 7,
    tags: ["childhood", "memory", "family"],
    body: [
      "私[わたし]は田舎[いなか]で育[そだ]ちました。家[いえ]の裏[うら]には、大[おお]きな山[やま]がありました。春[はる]には桜[さくら]、夏[なつ]にはセミの声[こえ]、秋[あき]には紅葉[もみじ]、冬[ふゆ]には雪[ゆき]。四季[しき]がはっきりしている場所[ばしょ]でした。子供[こども]の頃[ころ]は、毎日[まいにち]が冒険[ぼうけん]でした。",
      "毎日[まいにち]、近所[きんじょ]の子供[こども]たちと外[そと]で遊[あそ]びました。かくれんぼや、缶[かん]蹴[け]りをしました。泥[どろ]で服[ふく]を汚[よご]しても、母[はは]は怒[おこ]りませんでした。あの時[とき]の笑顔[えがお]は、今[いま]でも覚[おぼ]えています。夕方[ゆうがた]になると、どこかの家[いえ]からカレーの匂[にお]いがしてきました。",
      "特[とく]に忘[わす]れられないのは、祖父[そふ]と過[す]ごした時間[じかん]です。祖父[そふ]は、私[わたし]に色[いろ]いろなことを教[おし]えてくれました。庭[にわ]の野菜[やさい]の育[そだ]て方[かた]、星空[ほしぞら]の名前[なまえ]、過去[かこ]の話[はなし]です。祖父[そふ]の膝[ひざ]の上[うえ]で、昔話[むかしばなし]を聞[き]くのが好[す]きでした。",
      "ある夏[なつ]の夜[よる]、近[ちか]くの神社[じんじゃ]でお祭[まつ]りがありました。私[わたし]は浴衣[ゆかた]を着[き]て、祖父[そふ]と出[で]かけました。焼[や]きそばを食[た]べ、金魚[きんぎょ]すくいをしました。花火[はなび]が夜空[よぞら]に響[ひび]き、最高[さいこう]の夜[よる]でした。祖父[そふ]の手[て]を握[にぎ]りながら歩[ある]いた道[みち]を、今[いま]でも覚[おぼ]えています。",
      "今[いま]、私[わたし]は都会[とかい]に住[す]んでいます。でも、あの田舎[いなか]の思[おも]い出[で]は、心[こころ]の宝物[たからもの]です。祖父[そふ]はもういませんが、私[わたし]の心[こころ]の中[なか]で生[い]きています。いつか自分[じぶん]の子供[こども]にも、同[おな]じような思[おも]い出[で]を作[つく]ってあげたいです。大切[たいせつ]にしたい、宝物[たからもの]のような思[おも]い出[で]です。"
    ],
    translation: [
      "I grew up in the countryside. Behind our house there was a big mountain. In spring cherry blossoms, in summer the sound of cicadas, in autumn red leaves, in winter snow. It was a place with distinct seasons. In childhood, every day was an adventure.",
      "Every day I played outside with neighborhood kids. We played hide-and-seek and kick-the-can. Even if I got my clothes dirty with mud, my mother did not get angry. I still remember the smiles of that time. In the evening, the smell of curry drifted from someone's house.",
      "What I cannot forget especially is the time I spent with my grandfather. My grandfather taught me various things: how to grow vegetables in the garden, the names of the starry sky, stories of the past. I loved hearing old tales on my grandfather's lap.",
      "One summer night, there was a festival at a nearby shrine. I wore a yukata and went out with my grandfather. I ate yakisoba and did goldfish scooping. Fireworks echoed in the night sky; it was the best night. I still remember the path I walked holding my grandfather's hand.",
      "Now I live in a city. But those countryside memories are treasures of my heart. My grandfather is no longer here, but he lives inside me. Someday I want to give my own children the same kind of memories. Memories like treasures that I want to cherish."
    ],
    questions: [
      {
        q: "Where did the writer grow up?",
        choices: ["In a city", "In the countryside", "Near the sea", "Abroad"],
        answerIndex: 1,
        explanation: "The writer grew up in the countryside (田舎で育ちました)."
      },
      {
        q: "What did the writer's mother do when clothes got dirty?",
        choices: ["Got angry", "Did not get angry", "Made the writer wash them", "Stopped the play"],
        answerIndex: 1,
        explanation: "Even when clothes got dirty with mud, the mother did not get angry (母は怒りませんでした)."
      },
      {
        q: "What did the grandfather teach the writer?",
        choices: ["Math", "Video games", "How to grow vegetables and the names of stars", "How to cook curry"],
        answerIndex: 2,
        explanation: "The grandfather taught how to grow vegetables, names of stars, and past stories (野菜の育て方、星空の名前、過去の話)."
      },
      {
        q: "What did the writer do at the summer festival?",
        choices: ["Watched a movie", "Ate yakisoba and scooped goldfish", "Sold vegetables", "Played soccer"],
        answerIndex: 1,
        explanation: "At the festival the writer ate yakisoba and did goldfish scooping (焼きそばを食べ、金魚すくいをしました)."
      },
      {
        q: "What does the writer want to do someday?",
        choices: ["Move back to the countryside", "Give their own children similar memories", "Forget the grandfather", "Become a farmer"],
        answerIndex: 1,
        explanation: "The writer wants to give their own children the same kind of memories someday (いつか自分の子供にも同じような思い出を作ってあげたい)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-49 — 日常生活の環境保護 (Environmental awareness in daily life)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-49",
    title: "日常[にちじょう]生活[せいかつ]の環境[かんきょう]保護[ほご]",
    titleReading: "にちじょうせいかつのかんきょうほご",
    level: "N4",
    summary: "Concerned about global warming, the writer adopts eco-bags, electricity saving, and waste reduction in daily life.",
    estMinutes: 6,
    tags: ["environment", "lifestyle", "sustainability"],
    body: [
      "最近[さいきん]、地球[ちきゅう]温暖化[おんだんか]が深刻[しんこく]になっています。私[わたし]も、日々[ひび]の生活[せいかつ]の中[なか]で環境[かんきょう]のことを考[かんが]えるようになりました。小[ちい]さなことから始[はじ]めることが大切[たいせつ]です。ニュースで見[み]た氷[こおり]が溶[と]ける映像[えいぞう]が、心[こころ]に残[のこ]りました。",
      "まず、マイバッグを持[も]つようにしました。前[まえ]は、お店[みせ]のレジ袋[ぶくろ]をもらっていました。でも、プラスチックは海[うみ]を汚[よご]す原因[げんいん]になります。今[いま]は、バッグを常[つね]に持[も]ち歩[ある]いています。買[か]い物[もの]の時[とき]だけではなく、何[なに]かを入[い]れる時[とき]にも便利[べんり]です。",
      "次[つぎ]に、電気[でんき]と水[みず]を節約[せつやく]するようにしました。使[つか]わない部屋[へや]の電気[でんき]を消[け]します。歯[は]を磨[みが]く時[とき]、水[みず]を止[と]めます。小[ちい]さな工夫[くふう]ですが、毎日[まいにち]続[つづ]けると大[おお]きな差[さ]になります。電化製品[でんかせいひん]を使[つか]わない時[とき]は、電源[でんげん]を抜[ぬ]くようにしています。",
      "ごみも減[へ]らすようにしています。買[か]い物[もの]の時[とき]、必要[ひつよう]な分[ぶん]だけ買[か]います。食[た]べ残[のこ]しをしないように気[き]をつけます。古[ふる]くなった服[ふく]は、捨[す]てるのではなく、寄付[きふ]したり、雑巾[ぞうきん]にしたりします。資源[しげん]を再利用[さいりよう]するために、ごみの分別[ぶんべつ]もしっかりしています。",
      "環境[かんきょう]保護[ほご]は、一人[ひとり]一人[ひとり]の行動[こうどう]から始[はじ]まります。完璧[かんぺき]でなくても、できることから始[はじ]めることが大切[たいせつ]です。私[わたし]たちの小[ちい]さな努力[どりょく]が、未来[みらい]の地球[ちきゅう]を守[まも]ります。これからも続[つづ]けていきたいです。次[つぎ]の世代[せだい]に、きれいな地球[ちきゅう]を残[のこ]したいです。"
    ],
    translation: [
      "Recently, global warming has become serious. I too have started thinking about the environment in my daily life. It is important to start from small things. Images of melting ice I saw on the news stayed in my heart.",
      "First, I started carrying a my-bag. Before, I used to take plastic bags at stores. But plastic is a cause of polluting the sea. Now I always carry a bag with me. It is convenient not only for shopping but for putting things in.",
      "Next, I started saving electricity and water. I turn off the lights in rooms I am not using. When brushing my teeth, I stop the water. It is a small effort, but continuing every day makes a big difference. When not using appliances, I unplug them.",
      "I also try to reduce waste. When shopping, I buy only what I need. I try not to leave food uneaten. Old clothes, instead of throwing them away, I donate or turn them into rags. To reuse resources, I sort the trash properly too.",
      "Environmental protection starts with each person's actions. Even if not perfect, starting with what you can do is important. Our small efforts protect the future Earth. I want to keep this up. I want to leave a clean Earth to the next generation."
    ],
    questions: [
      {
        q: "What news image stayed in the writer's heart?",
        choices: ["A forest fire", "Melting ice", "A flood", "A typhoon"],
        answerIndex: 1,
        explanation: "Images of melting ice stayed in the writer's heart (氷が溶ける映像が心に残りました)."
      },
      {
        q: "What did the writer start carrying?",
        choices: ["A water bottle", "A reusable bag", "Plastic bags", "A wallet only"],
        answerIndex: 1,
        explanation: "The writer started carrying a my-bag (マイバッグを持つようにしました)."
      },
      {
        q: "What does the writer do while brushing teeth?",
        choices: ["Leaves the water running", "Stops the water", "Uses a lot of toothpaste", "Sings"],
        answerIndex: 1,
        explanation: "When brushing teeth the writer stops the water (歯を磨く時、水を止めます)."
      },
      {
        q: "What does the writer do with old clothes?",
        choices: ["Throws them away", "Burns them", "Donates or turns them into rags", "Sells them online"],
        answerIndex: 2,
        explanation: "Old clothes are donated or turned into rags (寄付したり、雑巾にしたりします)."
      },
      {
        q: "What does the writer want to leave for the next generation?",
        choices: ["A clean Earth", "A lot of money", "Old clothes", "Plastic bags"],
        answerIndex: 0,
        explanation: "The writer wants to leave a clean Earth to the next generation (次の世代に、きれいな地球を残したい)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-50 — 思いがけない再会 (A surprise reunion)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-50",
    title: "思[おも]いがけない再会[さいかい]",
    titleReading: "おもいがけないさいかい",
    level: "N4",
    summary: "A chance encounter at the station with a school friend of ten years past sparks an afternoon of memories and a new friendship.",
    estMinutes: 6,
    tags: ["friendship", "reunion", "memory"],
    body: [
      "先週[せんしゅう]、駅[えき]の改札[かいさつ]口[ぐち]で、懐[なつ]かしい人[ひと]に会[あ]いました。学生時代[がくせいじだい]の友達[ともだち]、田中[たなか]さんでした。十年[じゅうねん]以上[いじょう]会[あ]っていませんでした。突然[とつぜん]の再会[さいかい]に、驚[おどろ]きました。お互[たが]いに、少[すこ]し変[か]わっていました。",
      "田中[たなか]さんは、私[わたし]の名前[なまえ]を呼[よ]んでくれました。「まさか！」と思[おも]いました。十年[じゅうねん]ぶりなのに、すぐに分[わ]かりました。私[わたし]たちは、お互[たが]いの変[か]わらない笑顔[えがお]に気[き]づきました。声[こえ]も、当時[とうじ]のままでした。本当[ほんとう]に嬉[うれ]しかったです。",
      "私[わたし]たちは、近[ちか]くのカフェに行[い]きました。コーヒーを飲[の]みながら、色[いろ]いろな話[はなし]をしました。田中[たなか]さんは、三年[さんねん]前[まえ]に東京[とうきょう]に戻[もど]ってきたそうです。結婚[けっこん]して、子供[こども]が二人[ふたり]いるそうです。仕事[しごと]は、ITの会社[かいしゃ]で働[はたら]いているそうです。",
      "学生時代[がくせいじだい]の思[おも]い出[で]も話[はな]しました。一緒[いっしょ]に勉強[べんきょう]したこと、旅行[りょこう]に行[い]ったこと、喧嘩[けんか]したことです。当時[とうじ]の写真[しゃしん]をスマホで見[み]せ合[あ]いました。懐[なつ]かしくて、涙[なみだ]が出[で]そうになりました。あの時[とき]の感情[かんじょう]が、一[ひと]つずつよみがえりました。",
      "私[わたし]たちは、また会[あ]う約束[やくそく]をしました。来月[らいげつ]、田中[たなか]さんの家[いえ]に遊[あそ]びに行[い]くことになりました。思[おも]いがけない再会[さいかい]が、新[あたら]しい友情[ゆうじょう]を生[う]みました。縁[えん]は、どこで繋[つな]がるか分[わ]かりません。これからも、大切[たいせつ]な人[ひと]を大切[たいせつ]にしたいです。"
    ],
    translation: [
      "Last week, at the station ticket gate, I met someone I missed. It was my friend from school days, Tanaka-san. We had not seen each other in over ten years. I was surprised by the sudden reunion. We had both changed a little.",
      "Tanaka-san called my name. I thought, \"No way!\" Even though it had been ten years, I recognized him right away. We noticed each other's unchanged smiles. His voice was the same as back then too. I was truly happy.",
      "We went to a nearby cafe. Over coffee we talked about many things. Tanaka-san had returned to Tokyo three years ago, he said. He was married and had two children. He worked at an IT company.",
      "We also talked about memories from school days. Studying together, traveling together, even fighting. We showed each other photos from back then on our phones. It was so nostalgic I almost cried. The feelings from that time came back one by one.",
      "We promised to meet again. Next month I will go visit Tanaka-san's house. An unexpected reunion gave birth to a new friendship. You never know where fate will reconnect people. From now on I want to treasure the people who matter."
    ],
    questions: [
      {
        q: "Where did the writer meet Tanaka-san?",
        choices: ["At a cafe", "At the station ticket gate", "At a school", "At work"],
        answerIndex: 1,
        explanation: "They met at the station ticket gate (駅の改札口で会いました)."
      },
      {
        q: "How long had it been since they last met?",
        choices: ["One year", "Three years", "Over ten years", "Since last month"],
        answerIndex: 2,
        explanation: "It had been over ten years since they last met (十年以上会っていませんでした)."
      },
      {
        q: "What did Tanaka-san share about his life?",
        choices: ["He moved abroad", "He returned to Tokyo 3 years ago, married, with two kids", "He started a new business", "He is still single"],
        answerIndex: 1,
        explanation: "Tanaka-san returned to Tokyo three years ago, is married, and has two children (三年前に東京に戻ってきた、結婚して子供が二人)."
      },
      {
        q: "What did they do at the cafe besides talking?",
        choices: ["Ate a big meal", "Showed each other old photos on phones", "Wrote letters", "Watched a movie"],
        answerIndex: 1,
        explanation: "They showed each other photos from back then on their phones (当時の写真をスマホで見せ合いました)."
      },
      {
        q: "What did they promise to do?",
        choices: ["Forget the past", "Meet again next month at Tanaka-san's house", "Go abroad together", "Stop contacting each other"],
        answerIndex: 1,
        explanation: "They promised to meet again, with the writer visiting Tanaka-san's house next month (来月、田中さんの家に遊びに行くことになりました)."
      }
    ]
  }
];
