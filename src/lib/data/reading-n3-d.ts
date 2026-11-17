import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N3-level reading passages with comprehension questions.
// Topics (chunk D): the Japanese work-life balance debate, a story about starting
// a business, traditional vs modern architecture, the Japanese railway system,
// a story about food sustainability, the role of festivals in community,
// a story about elderly care, Japanese animation and its global influence,
// a story about climate change awareness, the art of Japanese gardens.

export const readingN3D: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n3-31 — The Japanese Work-Life Balance Debate
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-31",
    title: "働[はたら]き方[かた]改革[かいかく]とワークライフバランス",
    titleReading: "はたらきかたかいかくとわーくらいふばらんす",
    level: "N3",
    summary: "An overview of Japan's debate over work-life balance: the long-hours culture, its toll on health and family life, government reforms, corporate responses, and the changing mindset of younger generations.",
    estMinutes: 7,
    tags: ["work", "society", "policy", "culture"],
    body: [
      "日本[にほん]では長[なが]い間[あいだ]、長時間[ちょうじかん]労働[ろうどう]が美徳[びとく]とされてきました。会社[かいしゃ]のために夜[よる]遅[おそ]くまで働[はたら]く人[ひと]は「熱心[ねっしん]な社員[しゃいん]」と評価[ひょうか]される傾向[けいこう]がありました。しかし、この働[はたら]き方[かた]は個人[こじん]の健康[けんこう]や家庭[かてい]生活[せいかつ]に大[おお]きな影響[えいきょう]を与[あた]えてきました。「仕事[しごと]と生活[せいかつ]の調和[ちょうわ]」、つまりワークライフバランスという考[かんが]え方[かた]が求[もと]められるようになったのは、このような背景[はいけい]があります。",
      "働[はたら]きすぎが原因[げんいん]で健康[けんこう]を損[そこ]ない、最悪[さいあく]の場合[ばあい]は命[いのち]を落[おと]すことさえあります。「過労死[かろうし]」という言葉[ことば]が世界[せかい]でも知[し]られるようになるほど、日本[にほん]の長時間[ちょうじかん]労働[ろうどう]は深刻[しんこく]な問題[もんだい]です。また、仕事[しごと]に追[お]われる生活[せいかつ]は結婚[けっこん]や出産[しゅっさん]の機会[きかい]を奪[うば]い、少子化[しょうしか]の一因[いちいん]にもなっていると指摘[してき]されています。",
      "政府[せいふ]は2018年[ねん]に「働[はたら]き方[かた]改革[かいかく]」関連[かんれん]法[ほう]を成立[せいりつ]させました。この法[ほう]改正[かいせい]の目的[もくてき]は、長時間[ちょうじかん]労働[ろうどう]の規制[きせい]、同一[どういつ]労働[ろうどう]同一[どういつ]賃金[ちんぎん]の実現[じつげん]、多様[たよう]な働[はたら]き方[かた]の推進[すいしん]です。時間外[じかんがい]労働[ろうどう]の上限[じょうげん]が法律[ほうりつ]で定[さだ]められ、企業[きぎょう]には労働者[ろうどうしゃ]の健康[けんこう]確保[かくほ]が義務付[ぎむづ]けられました。",
      "企業[きぎょう]も変[か]わり始[はじ]めました。多[おお]くの会社[かいしゃ]が「ノー残業[ざんぎょう]デー」を導入[どうにゅう]し、定時[ていじ]以降[いこう]の勤務[きんむ]を制限[せいげん]しています。また、フレックスタイム制[せい]やテレワークを認[みと]める企業[きぎょう]も増[ふ]え、子[こ]育[そだ]てや介護[かいご]と仕事[しごと]を両立[りょうりつ]しやすい環境[かんきょう]が整[ととの]いつつあります。一部[いちぶ]の企業[きぎょう]では、労働時間[ろうどうじかん]を減[へ]らしても成果[せいか]で評価[ひょうか]する制度[せいど]も採用[さいよう]されています。",
      "若[わか]い世代[せだい]の考[かんが]え方[かた]も変[か]わってきました。会社[かいしゃ]のために自分[じぶん]の時間[じかん]を全[すべ]てささげるよりも、趣味[しゅみ]や家族[かぞく]、自己[じこ]研鑽[けんさん]に時間[じかん]を割[さ]くことを重視[じゅうし]する人[ひと]が増[ふ]えています。「仕事[しごと]は生[い]きるための手段[しゅだん]」という考[かんが]え方[かた]が広[ひろ]がり、転職[てんしょく]や副業[ふくぎょう]に積極的[せっきょくてき]な若者[わかもの]も少[すく]なくありません。",
      "しかし、変化[へんか]はまだ途中[とちゅう]です。日本[にほん]の企業[きぎょう]文化[ぶんか]に根付[ねづ]いた「根性論[こんじょうろん]」や、対面[たいめん]重視[じゅうし]の意識[いしき]は簡単[かんたん]には変[か]わりません。これからの社会[しゃかい]では、制度[せいど]の改革[かいかく]だけでなく、人々[ひとびと]の意識[いしき]そのものを変[か]えていくことが求[もと]められています。働[はたら]き方[かた]は人[ひと]それぞれであり、一人[ひとり]一人[ひとり]が自分[じぶん]に合[あ]ったバランスを見[み]つける時代[じだい]が来[き]ています。"
    ],
    translation: [
      "In Japan, for a long time, long working hours have been regarded as a virtue. People who worked late into the night for the company tended to be evaluated as 'eager employees.' However, this way of working has had a major impact on individuals' health and family life. The idea of 'harmony between work and life,' that is, work-life balance, came to be sought because of this background.",
      "Working too much can damage one's health, and in the worst case, even take a person's life. Long working hours in Japan are such a serious problem that the word 'karoshi' (death from overwork) has become known worldwide. In addition, a life chased by work deprives people of opportunities for marriage and childbirth, and it is pointed out that this is one cause of the declining birthrate.",
      "The government enacted the 'Work Style Reform' related laws in 2018. The purpose of this legal revision is the regulation of long working hours, the realization of equal pay for equal work, and the promotion of diverse work styles. The upper limit on overtime work was set by law, and companies were obligated to ensure the health of workers.",
      "Companies have also begun to change. Many companies have introduced 'No Overtime Days' and limit work after regular hours. Also, more companies allow flextime systems and remote work, and an environment where people can balance childcare or nursing care with work is being prepared. In some companies, systems that evaluate employees by results even when working hours are reduced have also been adopted.",
      "The way of thinking of the younger generation has also changed. Rather than dedicating all of one's time for the company, more people emphasize spending time on hobbies, family, and self-improvement. The idea that 'work is a means to live' has spread, and there are not a few young people who are positive about changing jobs and side businesses.",
      "However, the change is still in progress. The 'guts-based mindset' rooted in Japanese corporate culture and the awareness that emphasizes face-to-face interaction do not change easily. In the society to come, not only institutional reform but also changing people's awareness itself will be required. Work style differs for each person, and an era has come in which each individual finds a balance that suits them."
    ],
    questions: [
      {
        q: "ワークライフバランスが求[もと]められるようになった背景[はいけい]は何[なん]ですか。",
        choices: ["外国人[がいこくじん]が増[ふ]えたから", "長時間[ちょうじかん]労働[ろうどう]が健康[けんこう]や家庭[かてい]に悪影響[あくえいきょう]を与[あた]えてきたから", "給料[きゅうりょう]が上[あ]がらなかったから", "技術[ぎじゅつ]が発達[はったつ]しなかったから"],
        answerIndex: 1,
        explanation: "第一段で、長時間労働が個人の健康や家庭生活に大きな影響を与えてきたことが背景だと説明されています。"
      },
      {
        q: "働[はたら]き方[かた]改革[かいかく]関連[かんれん]法[ほう]の目的[もくてき]ではないものはどれですか。",
        choices: ["長時間[ちょうじかん]労働[ろうどう]の規制[きせい]", "同一[どういつ]労働[ろうどう]同一[どういつ]賃金[ちんぎん]の実現[じつげん]", "多様[たよう]な働[はたら]き方[かた]の推進[すいしん]", "全員[ぜんいん]の給料[きゅうりょう]を倍[ばい]にすること"],
        answerIndex: 3,
        explanation: "第三段に挙げられている目的は規制・同一賃金・多様な働き方の推進であり、給料倍増は含まれません。"
      },
      {
        q: "ノー残業[ざんぎょう]デーを導入[どうにゅう]する目的[もくてき]は何[なん]ですか。",
        choices: ["定時[ていじ]以降[いこう]の勤務[きんむ]を制限[せいげん]すること", "残業[ざんぎょう]を増[ふ]やすこと", "給料[きゅうりょう]を減[へ]らすこと", "会社[かいしゃ]を休[やす]むこと"],
        answerIndex: 0,
        explanation: "第四段で、定時以降の勤務を制限するためにノー残業デーを導入すると説明されています。"
      },
      {
        q: "若[わか]い世代[せだい]の変化[へんか]として合[あ]っているものはどれですか。",
        choices: ["会社[かいしゃ]のために全時間[ぜんじかん]をささげる人[ひと]の方[ほう]が多[おお]い", "趣味[しゅみ]や家族[かぞく]に時間[じかん]を割[さ]くことを重視[じゅうし]する人[ひと]が増[ふ]えている", "転職[てんしょく]を絶対[ぜったい]にしない", "副業[ふくぎょう]に消極的[しょうきょくてき]である"],
        answerIndex: 1,
        explanation: "第五段で、若い世代は趣味や家族・自己研鑽に時間を割くことを重視すると述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-32 — A Story About Starting a Business
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-32",
    title: "小[ちい]さなパン屋[や]から始[はじ]まる夢[ゆめ]",
    titleReading: "ちいさなぱんやからはじまるゆめ",
    level: "N3",
    summary: "A narrative about Kenji, who leaves a stable trading-company job at 35 to open a small bakery, overcoming family opposition, early struggles, and finding meaning in customers' smiles.",
    estMinutes: 8,
    tags: ["story", "business", "dreams", "community"],
    body: [
      "健[けん]司[じ]は35歳[さい]の時[とき]、大[おお]きな商社[しょうしゃ]を辞[や]める決心[けっしん]をしました。安定[あんてい]した仕事[しごと]と収入[しゅうにゅう]があり、周[まわ]りからは羨[うらや]ましがられる生活[せいかつ]でしたが、彼[かれ]の心[こころ]は満[み]たされていませんでした。毎日[まいにち]同[おな]じような仕事[しごと]を繰[く]り返[かえ]すうちに、「このままの人生[じんせい]でいいのか」という疑問[ぎもん]が深[ふか]くなっていきました。",
      "彼[かれ]の考[かんが]えを変[か]えたのは、子[こ]どもの頃[ころ]の記憶[きおく]でした。祖母[そぼ]は毎朝[まいあさ]手作[てづく]りのパンを焼[や]いてくれました。その香[かお]りや味[あじ]は、今[いま]でも心[こころ]に残[のこ]る温[あたた]かい思[おも]い出[で]です。「自分[じぶん]も誰[だれ]かの朝[あさ]を温[あたた]かいパンで笑顔[えがお]にしたい」という願[ねが]いが、少[すこ]しずつ大[おお]きくなっていきました。",
      "家族[かぞく]は最初[さいしょ]、反対[はんたい]しました。「安定[あんてい]した仕事[しごと]を捨[す]てて何[なに]をするのか」と父[ちち]は怒[おこ]りました。しかし健[けん]司[じ]は諦[あきら]めず、夜[よる]はパン作[づく]りの専門学校[せんもんがっこう]に通[かよ]い始[はじ]めました。二[ふた]つの年[ねん]をかけて技術[ぎじゅつ]を学[まな]び、少[すこ]しずつ貯金[ちょきん]を作[つく]りました。家族[かぞく]も彼[かれ]の真剣[しんけん]な様子[ようす]を見[み]て、少[すこ]ずつ応援[おうえん]するようになりました。",
      "ついに、住宅[じゅうたく]街[がい]に小[ちい]さなパン屋[や]を開[ひら]きました。しかし、開店[かいてん]当初[とうしょ]は客[きゃく]がほとんど来[こ]ませんでした。毎日[まいにち]売[う]れ残[のこ]ったパンを捨[す]てる夜[よる]は、悔[くや]しくて涙[なみだ]が出[で]ることもありました。「起業[きぎょう]は甘[あま]くない」と実感[じっかん]する日々[ひび]でした。",
      "転機[てんき]は、近[ちか]所[じょ]の老人[ろうじん]ホームの職員[しょくいん]が来[き]た時[とき]でした。「入所[にゅうしょ]者[しゃ]に柔[やわ]らかいパンを食[た]べさせたい」という相談[そうだん]から、専用[せんよう]のパンを開発[かいはつ]しました。そのパンが好評[こうひょう]で、口コミで広[ひろ]がりました。今[いま]では毎朝[まいあさ]、常連[じょうれん]さんたちが並[なら]んでパンを買[か]ってくれます。お客[きゃく]さんの笑顔[えがお]を見[み]るたびに、健[けん]司[じ]は「この仕事[しごと]をしていてよかった」と感[かん]じます。",
      "振[ふ]り返[かえ]れば、起業[きぎょう]は想像[そうぞう]以上[いじょう]に厳[きび]しい道[みち]でした。しかし、自分[じぶん]の夢[ゆめ]に向[む]かって歩[ある]く毎日[まいにち]は、どんな安定[あんてい]した仕事[しごと]よりも価値[かち]があると彼[かれ]は信[しん]じています。「失敗[しっぱい]しても、やってみなければ分[わ]からないことがある」と彼[かれ]はよく言[い]います。健[けん]司[じ]の小[ちい]さなパン屋[や]は、今[いま]も地域[ちいき]の人々[ひとびと]に愛[あい]され続[つづ]けています。"
    ],
    translation: [
      "At the age of 35, Kenji made up his mind to leave a major trading company. He had a stable job and income, a life envied by those around him, but his heart was not satisfied. As he repeated the same kind of work day after day, the question 'Is this kind of life really okay?' grew deeper.",
      "What changed his thinking was a memory from his childhood. His grandmother baked homemade bread every morning. The aroma and taste remain warm memories in his heart even now. The wish 'I want to make someone's morning bright with warm bread too' gradually grew larger.",
      "At first, his family opposed the idea. 'What will you do throwing away a stable job?' his father said in anger. But Kenji did not give up, and began attending a bread-making vocational school at night. He spent two years learning the skills and gradually built up his savings. Watching his serious attitude, his family slowly came to support him.",
      "Finally, he opened a small bakery in a residential neighborhood. However, in the early days after opening, hardly any customers came. The nights when he had to throw away bread left unsold every day were so frustrating that tears came to his eyes. It was a daily life that made him feel keenly that 'starting a business is not easy.'",
      "The turning point came when a staff member from a nearby nursing home visited. From a consultation that they 'wanted to feed the residents soft bread,' he developed a special bread. The bread was well received and spread by word of mouth. Now, every morning, regular customers line up to buy bread. Every time he sees customers' smiles, Kenji feels 'I'm glad I'm doing this work.'",
      "Looking back, starting the business was a path far harder than he had imagined. However, he believes that the everyday life of walking toward his dream is more valuable than any stable job. 'Even if you fail, there are things you won't know unless you try,' he often says. Kenji's small bakery continues to be loved by people in the local community."
    ],
    questions: [
      {
        q: "健[けん]司[じ]が会社[かいしゃ]を辞[や]めた理由[りゆう]は何[なん]ですか。",
        choices: ["給料[きゅうりょう]が低[ひく]かったから", "祖母[そぼ]が死[し]んだから", "安定[あんてい]した生活[せいかつ]だが心[こころ]が満[み]たされなかったから", "上司[じょうし]と喧嘩[けんか]したから"],
        answerIndex: 2,
        explanation: "第一段で、安定した生活ながら心が満たされず、人生への疑問が深くなったと述べられています。"
      },
      {
        q: "きっかけとなった記憶[きおく]は何[なん]ですか。",
        choices: ["父[ちち]の言葉[ことば]", "祖母[そぼ]が毎朝[まいあさ]焼[や]いてくれた手作[てづく]りパン", "商社[しょうしゃ]での成功[せいこう]", "子[こ]どもの頃[ころ]の旅行[りょこう]"],
        answerIndex: 1,
        explanation: "第二段で、祖母が毎朝焼いてくれた手作りパンの記憶が彼の考えを変えたと書かれています。"
      },
      {
        q: "開店[かいてん]当初[とうしょ]の状況[じょうきょう]はどうでしたか。",
        choices: ["客[きゃく]が多[おお]くて忙[いそが]しかった", "客[きゃく]がほとんど来[こ]なかった", "すぐに有名[ゆうめい]になった", "店[みせ]を閉[と]じた"],
        answerIndex: 1,
        explanation: "第四段で、開店当初は客がほとんど来ず、売れ残ったパンを捨てる悔しい日々だったと説明されています。"
      },
      {
        q: "転機[てんき]となった出来事[できごと]は何[なん]ですか。",
        choices: ["テレビで紹介[しょうかい]されたこと", "近[ちか]所[じょ]の老人[ろうじん]ホームの職員[しょくいん]が来[き]たこと", "家族[かぞく]が手伝[てつだ]いに来[き]たこと", "SNSで人気[にんき]が出[で]たこと"],
        answerIndex: 1,
        explanation: "第五段で、近所の老人ホームの職員が来たことが転機となり、専用パンが好評で広がったと述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-33 — Traditional vs Modern Architecture
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-33",
    title: "伝統[でんとう]と現代[げんだい]の建築[けんちく]",
    titleReading: "でんとうとげんだいのけんちく",
    level: "N3",
    summary: "An examination of the tension and fusion between Japan's traditional wooden architecture and modern concrete buildings, with attention to preservation, environmental design, and architects like Kengo Kuma.",
    estMinutes: 8,
    tags: ["architecture", "culture", "history", "environment"],
    body: [
      "日本[にほん]の建築[けんちく]は、古[ふる]くから自然[しぜん]と調和[ちょうわ]する独自[どくじ]の美[び]を育[はぐく]んできました。木[き]と紙[かみ]を活[いか]した神社[じんじゃ]や寺院[じいん]、町屋[まちや]と呼[よ]ばれる町家[まちや]は、日本[にほん]の風土[ふうど]に合[あ]った優[すぐ]れた設計[せっけい]です。特[とく]に、床[ゆか]を高[たか]くして湿気[しっけ]を避[さ]け、屋根[やね]を深[ふか]くして雨[あめ]や雪[ゆき]に対応[たいおう]する工夫[くふう]は、長[なが]い年月[ねんげつ]を経[へ]て洗練[せんれん]されてきました。",
      "しかし、第[だい]二[に]次[じ]世界[せかい]大戦[たいせん]後[ご]、日本[にほん]の建築[けんちく]は大[おお]きく変[か]わりました。急速[きゅうそく]な経済[けいざい]成長[せいちょう]の中[なか]で、コンクリートや鉄[てつ]を使[つか]った近代[きんだい]建築[けんちく]が主流[しゅりゅう]になりました。高[たか]いビルが次[つぎ]々[つぎ]と建[た]てられ、都市[とし]の景観[けいかん]は変[か]わっていきました。機能性[きのうせい]や経済性[けいざいせい]が優先[ゆうせん]され、伝統[でんとう]的[てき]な建築[けんちく]は次第[しだい]に姿[すがた]を消[け]していきました。",
      "このような変化[へんか]に対[たい]して、近年[きんねん]は伝統[でんとう]建築[けんちく]を見直[みなお]す動[うご]きが広[ひろ]がっています。古[ふる]い町屋[まちや]や倉[くら]を改装[かいそう]してカフェや民宿[みんしゅく]に生[い]まれ変[か]わる事例[じれい]が増[ふ]えています。歴史[れきし]ある建物[たてもの]には、その土地[とち]の文化[ぶんか]や人々[ひとびと]の記憶[きおく]が宿[やど]っていると考[かんが]える人[ひと]が多[おお]くなりました。保存[ほぞん]と活用[かつよう]の両立[りょうりつ]が新[あたら]しい課題[かだい]となっています。",
      "建築家[けんちくか]たちも、伝統[でんとう]と現代[げんだい]を融合[ゆうごう]させる試[こころ]みに取[と]り組[く]んでいます。例[たと]えば、現代[げんだい]的[てき]なガラス張[ば]りの建物[たてもの]に木材[もくざい]を取[と]り入[い]れたり、日本[にほん]的[てき]な縁側[えんがわ]を現代[げんだい]住宅[じゅうたく]に再現[さいげん]したりする設計[せっけい]です。隈[くま]研吾[けんご]など世界的[せかいてき]な建築家[けんちくか]は、「芯[しん]から日本[にほん]的[てき]」とは何[なに]かを追求[ついきゅう]し、国際[こくさい]的[てき]に高[たか]く評価[ひょうか]されています。",
      "さらに、伝統[でんとう]建築[けんちく]は環境[かんきょう]問題[もんだい]の面[めん]でも見直[みなお]されています。風[かぜ]の通[とお]りを良[よ]くし、日[ひ]差[ざ]しを巧[たく]みに取[と]り入[い]れる設計[せっけい]は、冷房[れいぼう]に頼[たよ]らない涼[すず]しい住[す]まいを実現[じつげん]します。木材[もくざい]は二酸化[にさんか]炭素[たんそ]を吸収[きゅうしゅう]するため、地球[ちきゅう]環境[かんきょう]に優[やさ]しい建築[けんちく]材料[ざいりょう]として注目[ちゅうもく]されています。昔[むかし]の知恵[ちえ]が現代[げんだい]の課題[かだい]を解決[かいけつ]するヒントになることは少[すく]なくありません。",
      "これからの日本[にほん]の建築[けんちく]には、伝統[でんとう]を守[まも]ることと新[あたら]しい技術[ぎじゅつ]を取[と]り入[い]れることの両方[りょうほう]が求[もと]められます。古[ふる]いものをただ残[のこ]すだけでなく、現代[げんだい]の生活[せいかつ]に合[あ]わせて進化[しんか]させることが大切[たいせつ]です。伝統[でんとう]と現代[げんだい]が共存[きょうぞん]する風景[ふうけい]こそが、日本[にほん]の都市[とし]の魅力[みりょく]を未来[みらい]まで伝[つた]える鍵[かぎ]となるでしょう。"
    ],
    translation: [
      "Japanese architecture has nurtured a unique beauty in harmony with nature since ancient times. Shrines and temples that take advantage of wood and paper, and townhouses called machiya, are excellent designs suited to the Japanese climate. In particular, devices such as raising the floor to avoid humidity and deepening the roof to cope with rain and snow have been refined over many years.",
      "However, after World War II, Japanese architecture changed greatly. Amid rapid economic growth, modern architecture using concrete and iron became mainstream. Tall buildings were built one after another, and the urban landscape changed. Functionality and economy were prioritized, and traditional architecture gradually disappeared.",
      "In response to such changes, in recent years a movement to reconsider traditional architecture has spread. There are more cases where old townhouses and storehouses are renovated and reborn as cafes or guesthouses. More and more people think that historic buildings carry the culture and memories of the people of that land. The compatibility of preservation and utilization has become a new challenge.",
      "Architects are also working on attempts to fuse tradition and modernity. For example, designs that incorporate wood into modern glass-walled buildings, or that reproduce Japanese engawa verandas in modern housing. World-famous architects such as Kengo Kuma pursue what is 'essentially Japanese from the core' and are highly praised internationally.",
      "Furthermore, traditional architecture is being reconsidered in terms of environmental issues. Designs that improve airflow and skillfully take in sunlight realize cool homes that do not rely on air conditioning. Wood absorbs carbon dioxide, so it is attracting attention as an environmentally friendly building material. Cases where old wisdom becomes a hint to solve modern problems are not few.",
      "Japanese architecture of the future requires both preserving tradition and incorporating new technology. Rather than simply preserving old things, it is important to evolve them to suit modern life. A landscape in which tradition and modernity coexist will be the key to conveying the appeal of Japanese cities to the future."
    ],
    questions: [
      {
        q: "日本[にほん]の伝統[でんとう]建築[けんちく]の特徴[とくちょう]として挙[あ]げられているのは何[なん]ですか。",
        choices: ["コンクリートを使[つか]うこと", "木[き]と紙[かみ]を活[いか]すこと", "高[たか]いビルを建[た]てること", "冷房[れいぼう]を重視[じゅうし]すること"],
        answerIndex: 1,
        explanation: "第一段で、木と紙を活かした神社や寺院、町屋が日本の風土に合った設計だと述べられています。"
      },
      {
        q: "戦後[せんご]、日本[にほん]の建築[けんちく]はどう変[か]わりましたか。",
        choices: ["木造[もくぞう]建築[けんちく]だけになった", "コンクリートや鉄[てつ]の近代[きんだい]建築[けんちく]が主流[しゅりゅう]になった", "寺院[じいん]が増[ふ]えた", "外国[がいこく]の建築[けんちく]が一切入[いっさいい]らなくなった"],
        answerIndex: 1,
        explanation: "第二段で、戦後の経済成長の中でコンクリートや鉄を使った近代建築が主流になったと説明されています。"
      },
      {
        q: "近年[きんねん]の動[うご]きとして合[あ]っているものはどれですか。",
        choices: ["伝統[でんとう]建築[けんちく]をすべて壊[こわ]すこと", "古[ふる]い町屋[まちや]や倉[くら]を改装[かいそう]してカフェや民宿[みんしゅく]にすること", "木造[もくぞう]建築[けんちく]を禁止[きんし]すること", "外国[がいこく]風[ふう]建築[けんちく]だけを建[た]てること"],
        answerIndex: 1,
        explanation: "第三段で、古い町屋や倉を改装してカフェや民宿に生まれ変わる事例が増えていると述べられています。"
      },
      {
        q: "伝統[でんとう]建築[けんちく]が環境[かんきょう]面[めん]で見直[みなお]される理由[りゆう]は何[なん]ですか。",
        choices: ["建設費[けんせつひ]が安[やす]いから", "通風[つうふう]や日当[ひあ]たりを取[と]り入[い]れ、木材[もくざい]が二酸化[にさんか]炭素[たんそ]を吸収[きゅうしゅう]するから", "寿命[じゅみょう]が長[なが]いから", "輸入[ゆにゅう]しやすいから"],
        answerIndex: 1,
        explanation: "第五段で、通風や日差しを取り入れる設計と、木材の二酸化炭素吸収が注目される理由だと説明されています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-34 — The Japanese Railway System
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-34",
    title: "日本[にほん]の鉄道[てつどう]の仕組[しくみ]",
    titleReading: "にほんのてつどうのしくみ",
    level: "N3",
    summary: "A look at Japan's railway network: JR, private railways, the Shinkansen, the culture of punctuality, IC-card convenience, and the social problem of declining rural lines.",
    estMinutes: 7,
    tags: ["transport", "society", "infrastructure", "technology"],
    body: [
      "日本[にほん]の鉄道[てつどう]は、世界中[せかいじゅう]から正確[せいかく]さと便利[べんり]さで知[し]られています。JR[ジェーアール]グループを中心[ちゅうしん]に、全国各地[ぜんこくかくち]で私鉄[してつ]や地下鉄[ちかてつ]が網[あみ]の目[め]のように走[はし]っています。一日[いちにち]に数千万[すうせんまん]人[にん]が利用[りよう]し、通勤[つうきん]や通学[つうがく]、旅行[りょこう]など多[おお]くの目的[もくてき]で欠[か]かせない交通[こうつう]手段[しゅだん]となっています。",
      "特[とく]に有名[ゆうめい]なのが新幹線[しんかんせん]です。1964年[ねん]に東京[とうきょう]と大阪[おおさか]を結[むす]ぶ東海道[とうかいどう]新幹線[しんかんせん]が開業[かいぎょう]して以来[いらい]、日本[にほん]の高速[こうそく]鉄道[てつどう]網[もう]は全国的[ぜんこくてき]に広[ひろ]がりました。最速[さいそく]のタイプでは時速[じそく]300キロ以上[いじょう]で走[はし]り、東京[とうきょう]から大阪[おおさか]まで約[やく]2時間半[じかんはん]で結[むす]びます。海外[かいがい]からの観光客[かんこうきゃく]にとっても便利[べんり]な移動[いどう]手段[しゅだん]です。",
      "日本[にほん]の鉄道[てつどう]の最大[さいだい]の特徴[とくちょう]は、その正確[せいかく]さです。電車[でんしゃ]は1分[いっぷん]単位[たんい]で時刻表[じこくひょう]通[どお]りに発着[はっちゃく]します。遅延[ちえん]が発生[はっせい]した場合[ばあい]は、駅[えき]や車内[しゃない]で詳[くわ]しい案内[あんない]が流[なが]れ、乗客[じょうきゃく]に謝罪[しゃざい]するのも普通[ふつう]です。この正確[せいかく]さは、厳[きび]しい訓練[くんれん]を受[う]けた運転士[うんてんし]や、整備[せいび]担当[たんとう]の技術[ぎじゅつ]者[しゃ]たちの努力[どりょく]の賜物[たまもの]です。",
      "また、ICカード[かーど]の普及[ふきゅう]も便利[べんり]さを支[ささ]えています。Suica[スイカ]やPasmo[パスモ]などのICカードを使[つか]えば、切符[きっぷ]を買[か]わずに改札[かいさつ]を通[とお]り抜[ぬ]けられます。さらに、コンビニや自販機[じはんき]での支払[しはら]いにも使[つか]え、一[ひと]つのカードで多[おお]くのサービスを利用[りよう]できます。外国人[がいこくじん]向[む]けの専用[せんよう]カードもあり、観光客[かんこうきゃく]にも親切[しんせつ]な仕組[しくみ]が整[ととの]っています。",
      "しかし、すべての地域[ちいき]が便利[べんり]なわけではありません。地方[ちほう]では、人口[じんこう]減少[げんしょう]により利用[りよう]者[しゃ]が減[へ]り、赤字[あかじ]路線[ろせん]が多[おお]くなっています。そのため、一部[いちぶ]のローカル線[せん]は廃止[はいし]されたり、バスに置[お]き換[か]えられたりしています。高齢[こうれい]者[しゃ]など交通[こうつう]手段[しゅだん]を失[うしな]う人[ひと]も出[で]ており、「交通[こうつう]弱者[じゃくしゃ]」という社会[しゃかい]問題[もんだい]も生[う]まれています。",
      "未来[みらい]に向[む]けては、リニア中央[ちゅうおう]新幹線[しんかんせん]など次世代[じせだい]の高速[こうそく]交通[こうつう]の開発[かいはつ]が進[すす]んでいます。また、環境[かんきょう]負荷[ふか]を減[へ]らすため、電気[でんき]エネルギーの再生[さいせい]可能[かのう]化[か]や省電力[しょうでんりょく]車両[しゃりょう]の導入[どうにゅう]も進[すす]んでいます。日本[にほん]の鉄道[てつどう]は、安全[あんぜん]と便利[べんり]さを保[たも]ちながら、環境[かんきょう]に配慮[はいりょ]した持続[じぞく]可能[かのう]な交通[こうつう]の実現[じつげん]を目指[めざ]しています。"
    ],
    translation: [
      "Japanese railways are known worldwide for their accuracy and convenience. Centered on the JR Group, private railways and subways run like a mesh across the country. Tens of millions of people use them a day, and they have become an indispensable means of transportation for commuting, school, travel and many other purposes.",
      "Particularly famous is the Shinkansen. Since the Tokaido Shinkansen connecting Tokyo and Osaka opened in 1964, Japan's high-speed railway network has spread nationwide. The fastest types run at over 300 km per hour, connecting Tokyo and Osaka in about two and a half hours. It is also a convenient means of travel for tourists from overseas.",
      "The biggest feature of Japanese railways is their accuracy. Trains arrive and depart according to the timetable in units of one minute. If a delay occurs, detailed announcements are made at stations and inside cars, and it is common to apologize to passengers. This accuracy is the fruit of the efforts of drivers who have undergone rigorous training and maintenance engineers.",
      "In addition, the spread of IC cards supports the convenience. With IC cards such as Suica and Pasmo, you can pass through the ticket gate without buying a ticket. Furthermore, they can be used for payment at convenience stores and vending machines, and one card lets you use many services. There are also dedicated cards for foreigners, providing a system that is kind to tourists as well.",
      "However, not all regions are convenient. In regional areas, users have decreased due to population decline, and loss-making lines have increased. For that reason, some local lines have been abolished or replaced by buses. Some people, such as the elderly, lose their means of transportation, giving rise to a social problem of 'transportation vulnerable people.'",
      "Looking to the future, development of next-generation high-speed transportation, such as the Linear Chuo Shinkansen, is progressing. Also, to reduce environmental impact, the shift to renewable electric energy and the introduction of energy-saving vehicles are proceeding. Japanese railways, while maintaining safety and convenience, are aiming to realize sustainable transportation that takes the environment into consideration."
    ],
    questions: [
      {
        q: "新幹線[しんかんせん]について合[あ]っているのはどれですか。",
        choices: ["1964年[ねん]に開業[かいぎょう]した", "1980年[ねん]に開業[かいぎょう]した", "2000年[ねん]に開業[かいぎょう]した", "戦前[せんぜん]から走[はし]っていた"],
        answerIndex: 0,
        explanation: "第二段で、1964年に東京と大阪を結ぶ東海道新幹線が開業したと述べられています。"
      },
      {
        q: "日本[にほん]の鉄道[てつどう]の最大[さいだい]の特徴[とくちょう]は何[なん]ですか。",
        choices: ["安[やす]さ", "正確[せいかく]さ", "速[はや]さだけ", "デザイン"],
        answerIndex: 1,
        explanation: "第三段で、最大の特徴は正確さだと述べられています。"
      },
      {
        q: "ICカードの便利[べんり]さとして挙[あ]げられているのは何[なん]ですか。",
        choices: ["切符[きっぷ]を買[か]わずに改札[かいさつ]を通[とお]れること", "電車[でんしゃ]に無料[むりょう]で乗[の]れること", "どの国[くに]でも使[つか]えること", "いつでも返金[へんきん]されること"],
        answerIndex: 0,
        explanation: "第四段で、切符を買わずに改札を通り抜けられ、コンビニや自販機でも使えると説明されています。"
      },
      {
        q: "地方[ちほう]の鉄道[てつどう]の問題[もんだい]は何[なん]ですか。",
        choices: ["客[きゃく]が増[ふ]えすぎていること", "人口[じんこう]減少[げんしょう]で利用[りよう]者[しゃ]が減[へ]り、赤字[あかじ]路線[ろせん]や廃止[はいし]線[せん]が増[ふ]えていること", "新幹線[しんかんせん]が地方[ちほう]に入[はい]らないこと", "ICカードが使[つか]えないこと"],
        answerIndex: 1,
        explanation: "第五段で、地方では人口減少により利用者が減り、赤字路線が増え、廃止される線も出ていると説明されています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-35 — A Story About Food Sustainability
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-35",
    title: "食[しょく]を未来[みらい]に残[のこ]すために",
    titleReading: "しょくをみらいにのこすために",
    level: "N3",
    summary: "A story about Yuki, who leaves her Tokyo food-manufacturer job to return to her hometown, learn sustainable farming, reduce food loss, and inspire her community to act for the future of food.",
    estMinutes: 9,
    tags: ["story", "food", "agriculture", "environment"],
    body: [
      "由[ゆ]貴[き]は大学[だいがく]を卒業[そつぎょう]後[ご]、東京[とうきょう]の食品[しょくひん]メーカーに就職[しゅうしょく]しました。しかし、毎日[まいにち]多[おお]くの食[しょく]が捨[す]てられていく現場[げんば]を見[み]て、疑問[ぎもん]を感[かん]じるようになりました。「こんなに食[しょく]を無駄[むだ]にしていいのだろうか」という問[とい]が、彼女[かのじょ]の心[こころ]に深[ふか]く残[のこ]りました。彼女[かのじょ]は仕事[しごと]を辞[や]め、故郷[こきょう]の農村[のうそん]に戻[もど]ることを決意[けつい]しました。",
      "故郷[こきょう]では、高齢[こうれい]化[か]が進[すす]み、耕作[こうさく]放棄[ほうき]地[ち]が増[ふ]えていました。由[ゆ]貴[き]は、地元[じもと]の農家[のうか]から農業[のうぎょう]を学[まな]び始[はじ]めました。そこで知[し]ったのは、食[しょく]が作[つく]られるまでに多[おお]くの資源[しげん]が使[つか]われているという事実[じじつ]でした。化学[かがく]肥料[ひりょう]や農薬[のうやく]が土[つち]や水[みず]に与[あた]える影響[えいきょう]も深刻[しんこく]な問題[もんだい]だと知[し]りました。彼女[かのじょ]は、持続[じぞく]可能[かのう]な農業[のうぎょう]の方法[ほうほう]を模索[もさく]し始[はじ]めました。",
      "由[ゆ]貴[き]は有機[ゆうき]栽培[さいばい]に取[と]り組[く]み始[はじ]めました。最初[さいしょ]は害虫[がいちゅう]の被害[ひがい]で失敗[しっぱい]の連続[れんぞく]でしたが、先輩[せんぱい]農家[のうか]の助[たす]けを借[か]りながら、少[すこ]しずつ自分[じぶん]なりの方法[ほうほう]を見[み]つけました。また、地域[ちいき]の人々[ひとびと]と協力[きょうりょく]し、「余[あま]った野菜[やさい]を分[わ]け合[あ]う会[かい]」を月[つき]に一度[いちど]開[ひら]くようになりました。これにより、食[しょく]ロスを減[へ]らしつつ、地域[ちいき]のつながりも深[ふか]まりました。",
      "由[ゆ]貴[き]のもう一[ひと]つの取[と]り組[く]みは、堆肥[たいひ]作[づく]りです。家庭[かてい]から出[で]る生[なま]ゴミを集[あつ]め、農場[のうじょう]で堆肥[たいひ]に変[か]えています。最初[さいしょ]は近所[きんじょ]の人々[ひとびと]も半信半疑[はんしんはんぎ]でしたが、由[ゆ]貴[き]が丁寧[ていねい]に説明[せつめい]するうちに、協力[きょうりょく]する家[いえ]が増[ふ]えました。「ごみが減[へ]って、野菜[やさい]も美味[おい]しくなる」という実感[じっかん]が、人々[ひとびと]の意識[いしき]を変[か]えていきました。",
      "今[いま]では、由[ゆ]貴[き]の活動[かつどう]は町[まち]全体[ぜんたい]に広[ひろ]がっています。学校[がっこう]で食[しょく]育[いく]の授業[じゅぎょう]も担当[たんとう]し、子[こ]どもたちに食[しょく]の大切[たいせつ]さを伝[つた]えています。彼女[かのじょ]の夢[ゆめ]は、この地域[ちいき]を「持続[じぞく]可能[かのう]な食[しょく]のモデル地域[ちいき]」にすることです。少[すこ]しずつでも、他[ほか]の地域[ちいき]にもこの取[と]り組[く]みが広[ひろ]がってほしいと願[ねが]っています。",
      "由[ゆ]貴[き]は言[い]います。「特[とく]別[べつ]なことをする必要[ひつよう]はありません。買[か]いすぎない、使[つか]い切[き]る、地元[じもと]の農産物[のうさんぶつ]を選[えら]ぶ。そんな小[ちい]さな行動[こうどう]の積[つ]み重[かさ]ねが、未来[みらい]の食[しょく]を守[まも]ります」。彼女[かのじょ]の姿[すがた]は、一人[ひとり]の行動[こうどう]が地域[ちいき]を変[か]え、社会[しゃかい]を変[か]える可能性[かのうせい]を示[しめ]しています。食[しょく]の持続[じぞく]可能性[かのうせい]は、遠[とお]い課題[かだい]ではなく、私[わたし]たち一人[ひとり]一人[ひとり]の手[て]の届[とど]くところにあります。"
    ],
    translation: [
      "After graduating from university, Yuki got a job at a food manufacturer in Tokyo. However, watching so much food being thrown away every day at the site, she began to feel a question. The question 'Is it really okay to waste food like this?' remained deeply in her heart. She quit her job and decided to return to her hometown farming village.",
      "In her hometown, aging had progressed and abandoned farmland had increased. Yuki started learning agriculture from local farmers. What she learned there was the fact that many resources are used to produce food. She also learned that the impact of chemical fertilizers and pesticides on soil and water is a serious problem. She began to explore sustainable farming methods.",
      "Yuki started working on organic cultivation. At first, she experienced a series of failures due to pest damage, but with the help of senior farmers, she gradually found her own method. She also cooperated with people in the community and began holding a 'meeting to share surplus vegetables' once a month. This reduced food loss and deepened community ties.",
      "Yuki's other initiative is making compost. She collects raw garbage from households and turns it into compost at the farm. At first, neighbors were half in doubt, but as Yuki explained politely, the number of households cooperating increased. The realization that 'garbage decreases and vegetables also become tastier' changed people's awareness.",
      "Now, Yuki's activities have spread throughout the town. She also teaches food education classes at schools, conveying the importance of food to children. Her dream is to make this region a 'model region for sustainable food.' She hopes that this initiative will gradually spread to other regions as well.",
      "Yuki says: 'There is no need to do anything special. Don't buy too much, use it up, choose local produce. The accumulation of such small actions protects the food of the future.' Her figure shows the possibility that one person's action can change a region and change society. Food sustainability is not a distant challenge; it is within reach of each and every one of us."
    ],
    questions: [
      {
        q: "由[ゆ]貴[き]が食品[しょくひん]メーカーを辞[や]めた理由[りゆう]は何[なん]ですか。",
        choices: ["給料[きゅうりょう]が安[やす]かったから", "多[おお]くの食[しょく]が捨[す]てられる現場[げんば]を見[み]て疑問[ぎもん]を感[かん]じたから", "職場[しょくば]の人間関係[にんげんかんけい]が悪[わる]かったから", "故郷[こきょう]に帰[かえ]りたかったからだけ"],
        answerIndex: 1,
        explanation: "第一段で、毎日多くの食が捨てられていく現場を見て疑問を感じたことが辞める理由だと述べられています。"
      },
      {
        q: "由[ゆ]貴[き]が故郷[こきょう]で学[まな]んだ事実[じじつ]は何[なん]ですか。",
        choices: ["農業[のうぎょう]は簡単[かんたん]だということ", "食[しょく]が作[つく]られるまでに多[おお]くの資源[しげん]が使[つか]われていること", "化学[かがく]肥料[ひりょう]は無害[むがい]だということ", "都市[とし]の方[ほう]が住[す]みやすいということ"],
        answerIndex: 1,
        explanation: "第二段で、食が作られるまでに多くの資源が使われている事実と、化学肥料や農薬の影響が深刻だと知ったと述べられています。"
      },
      {
        q: "「余[あま]った野菜[やさい]を分[わ]け合[あ]う会[かい]」の効果[こうか]は何[なん]ですか。",
        choices: ["食[しょく]ロスを減[へ]らし、地域[ちいき]のつながりも深[ふか]まること", "農業[のうぎょう]の利益[りえき]が倍増[ばいぞう]すること", "学校[がっこう]ができること", "新[あたら]しい農薬[のうやく]ができること"],
        answerIndex: 0,
        explanation: "第三段で、この会が食ロスを減らしつつ地域のつながりも深めると説明されています。"
      },
      {
        q: "堆肥[たいひ]作[づく]りについて合[あ]っているのはどれですか。",
        choices: ["最初[さいしょ]から皆[みな]が協力[きょうりょく]していた", "家庭[かてい]の生[なま]ゴミを集[あつ]めて堆肥[たいひ]に変[か]えている", "化学[かがく]肥料[ひりょう]の代[か]わりに買[か]っている", "学校[がっこう]でしか教[おし]えていない"],
        answerIndex: 1,
        explanation: "第四段で、家庭の生ゴミを集めて堆肥に変えていると説明されています。"
      },
      {
        q: "由[ゆ]貴[き]の伝[つた]えるメッセージは何[なん]ですか。",
        choices: ["特[とく]別[べつ]なことをしなければならない", "大[おお]きな行動[こうどう]だけが社会[しゃかい]を変[か]える", "買[か]いすぎない、使[つか]い切[き]る、地元[じもと]の農産物[のうさんぶつ]を選[えら]ぶなど小[ちい]さな行動[こうどう]の積[つ]み重[かさ]ねが大切[たいせつ]", "食[しょく]の持続[じぞく]可能性[かのうせい]は個人[こじん]の問題[もんだい]ではない"],
        answerIndex: 2,
        explanation: "第六段で、買いすぎない・使い切る・地元の農産物を選ぶなどの小さな行動の積み重ねが未来の食を守ると述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-36 — The Role of Festivals in Community
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-36",
    title: "祭[まつ]りが地域[ちいき]を結[むす]ぶ",
    titleReading: "まつりがちいきをむすぶ",
    level: "N3",
    summary: "An essay on how Japanese matsuri bind communities together: preparation as bonding, transmission of tradition to children, economic and tourism effects, and the modern challenge of aging bearers.",
    estMinutes: 7,
    tags: ["culture", "festival", "community", "tradition"],
    body: [
      "日本[にほん]には数多[かずおお]くの祭[まつ]りがあります。神社[じんじゃ]の祭典[さいてん]として始[はじ]まったもの、豊作[ほうさく]を祈[いの]るもの、季節[きせつ]の変[か]わり目[め]を祝[いわ]うものなど、その由来[ゆらい]は様様[さまざま]です。しかし、どの祭[まつ]りにも共[とも]通[つう]するのは、地域[ちいき]の人々[ひとびと]が集[あつ]まり、協力[きょうりょく]して一[ひと]つの行事[ぎょうじ]を成[な]し遂[と]げるという特徴[とくちょう]です。祭[まつ]りは単[たん]なる娯楽[ごらく]ではなく、社会[しゃかい]を結[むす]ぶ重要[じゅうよう]な役割[やくわり]を果[はた]しています。",
      "祭[まつ]りの準備[じゅんび]は、地域[ちいき]の連帯[れんたい]感[かん]を生[う]み出[だ]します。神輿[みこし]を担[かつ]ぐ人[ひと]、屋台[やたい]を出[だ]す人[ひと]、子供[こども]の行列[ぎょうれつ]をまとめる人[ひと]、役割[やくわり]は多[おお]岐[き]に渡[わた]ります。何[なん]カ月[げつ]も前[まえ]から集会[しゅうかい]を開[ひら]き、練習[れんしゅう]を重[かさ]ねる中[なか]で、普段[ふだん]話[はな]さないような近所[きんじょ]の人々[ひとびと]とも親[した]しくなります。祭[まつ]りを通[つう]じて、地域[ちいき]のつながりが強[つよ]く深[ふか]くなるのです。",
      "祭[まつ]りはまた、伝統[でんとう]文化[ぶんか]を次[つぎ]の世代[せだい]に伝[つた]える場[ば]でもあります。子[こ]どもたちは、踊[おど]りや太鼓[たいこ]、神輿[みこし]の担[かつ]ぎ方[かた]を大人[おとな]から直接[ちょくせつ]教[おし]えてもらいます。地域[ちいき]の歴史[れきし]や習慣[しゅうかん]も、祭[まつ]りへの参加[さんか]を通[つう]じて自然[しぜん]に身[み]についていきます。これらは教科書[きょうかしょ]では学[まな]べない生[せい]の体験[たいけん]です。",
      "祭[まつ]りは経済[けいざい]的[てき]な効果[こうか]も持[も]っています。有名[ゆうめい]な祭[まつ]りには全国[ぜんこく]から多[おお]くの観光客[かんこうきゃく]が訪[おとず]れ、宿泊[しゅくはく]施設[しせつ]や飲食[いんしょく]店[てん]、土産[みやげ]物[もの]店[てん]が潤[うるお]います。地域[ちいき]の活性化[かっせいか]につながるだけでなく、祭[まつ]りをPR[ピーアール]することで町[まち]全体[ぜんたい]の知名度[ちめいど]も上[あ]がります。一[ひと]つの祭[まつ]りが町[まち]を支[ささ]える、という例[れい]も少[すく]なくありません。",
      "しかし、伝統[でんとう]祭[まつ]りは深刻[しんこく]な課題[かだい]を抱[かか]えています。少子[しょうし]高齢[こうれい]化[か]で若[わか]い担[にん]い手[て]が減[へ]り、祭[まつ]りを続[つづ]けるのが難[むずか]しくなっています。また、過疎[かそ]化[か]が進[すす]む地域[ちいき]では祭[まつ]りが消[き]えてしまう危機[きき]にあります。「最後[さいご]の年[ねん]」として中止[ちゅうし]や縮小[しゅくしょう]を余儀[よぎ]なくされる祭[まつ]りも増[ふ]えています。",
      "このような現状[げんじょう]を打開[だかい]するため、新[あたら]しい工夫[くふう]も生[う]まれています。SNSでPRして若[わか]い参加[さんか]者[しゃ]を集[あつ]める祭[まつ]りや、外部[がいぶ]からボランティアを受[う]け入[い]れる地域[ちいき]もあります。伝統[でんとう]を守[まも]りつつ現代[げんだい]の生活[せいかつ]に合[あ]わせた形[かたち]に変[か]えることで、祭[まつ]りは新[あたら]しい命[いのち]を吹[ふ]き込[こ]まれています。祭[まつ]りが地域[ちいき]の絆[きずな]を紡[つむ]ぎ続[つづ]けるためには、私[わたし]たち一人[ひとり]一人[ひとり]の参加[さんか]と関心[かんしん]が欠[か]かせません。"
    ],
    translation: [
      "There are countless festivals in Japan. Some started as shrine festivals, some pray for a good harvest, some celebrate seasonal changes, and their origins vary. However, what is common to all festivals is the characteristic that local people gather and cooperate to accomplish one event. Festivals are not mere entertainment; they play an important role in binding society together.",
      "The preparation for a festival creates a sense of solidarity in the community. The roles are many and varied: those who carry the portable shrine, those who set up stalls, those who organize the children's procession. Opening meetings and practicing for months in advance, people become close to neighbors they would not usually talk to. Through the festival, community ties become stronger and deeper.",
      "Festivals are also a place to pass traditional culture on to the next generation. Children learn dances, taiko drums, and how to carry a portable shrine directly from adults. Regional history and customs also naturally take root through participation in festivals. These are living experiences that cannot be learned from textbooks.",
      "Festivals also have economic effects. Many tourists visit from all over the country for famous festivals, and accommodations, restaurants, and souvenir shops flourish. It leads not only to the revitalization of the community, but by PR-ing the festival, the recognition of the whole town also rises. Examples of a single festival supporting a town are not few.",
      "However, traditional festivals face serious challenges. With the declining birthrate and aging population, young bearers decrease, making it difficult to continue festivals. Also, in areas where depopulation is progressing, festivals are in danger of disappearing. The number of festivals forced to be cancelled or reduced 'for the last year' is also increasing.",
      "To break through this situation, new ideas have also emerged. There are festivals that PR on social media to gather young participants, and regions that accept volunteers from outside. By protecting tradition while changing the form to suit modern life, festivals are infused with new life. For festivals to continue spinning the bonds of the community, the participation and interest of each and every one of us is indispensable."
    ],
    questions: [
      {
        q: "祭[まつ]りに共[とも]通[つう]する特徴[とくちょう]は何[なん]ですか。",
        choices: ["観光客[かんこうきゃく]だけが楽[たの]しむこと", "地域[ちいき]の人々[ひとびと]が集[あつ]まり協力[きょうりょく]して一[ひと]つの行事[ぎょうじ]を成[な]し遂[と]げること", "神社[じんじゃ]が主催[しゅさい]することだけ", "有名[ゆうめい]な芸能人[げいのうじん]が来[き]ること"],
        answerIndex: 1,
        explanation: "第一段で、どの祭りにも地域の人々が集まり協力して行事を成し遂げるという特徴があると述べられています。"
      },
      {
        q: "祭[まつ]りの準備[じゅんび]がもたらす効果[こうか]は何[なん]ですか。",
        choices: ["地域[ちいき]の連帯[れんたい]感[かん]を生[う]み出[だ]すこと", "観光客[かんこうきゃく]が増[ふ]えること", "給料[きゅうりょう]が上[あ]がること", "神社[じんじゃ]が新[あたら]しくなること"],
        answerIndex: 0,
        explanation: "第二段で、準備を通じて地域の連帯感が生まれ、近所の人々とも親しくなると説明されています。"
      },
      {
        q: "祭[まつ]りが子[こ]どもたちにもたらすものは何[なん]ですか。",
        choices: ["教科書[きょうかしょ]で学[まな]べない生[せい]の体験[たいけん]として伝統[でんとう]文化[ぶんか]を学[まな]ぶこと", "お小遣[こづか]いがもらえること", "有名[ゆうめい]になれること", "学校[がっこう]が休[やす]みになること"],
        answerIndex: 0,
        explanation: "第三段で、子どもたちは大人から直接教わり、地域の歴史や習慣を自然に身につけると説明されています。"
      },
      {
        q: "伝統[でんとう]祭[まつ]りが直面[ちょくめん]している課題[かだい]は何[なん]ですか。",
        choices: ["若[わか]い担[にん]い手[て]が増[ふ]えすぎていること", "少子[しょうし]高齢[こうれい]化[か]で若[わか]い担[にん]い手[て]が減[へ]り、祭[まつ]りが消[き]える危機[きき]にあること", "観光客[かんこうきゃく]が多[おお]すぎること", "神社[じんじゃ]が増[ふ]えすぎていること"],
        answerIndex: 1,
        explanation: "第五段で、少子高齢化で若い担い手が減り、過疎化が進む地域では祭りが消える危機にあると述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-37 — A Story About Elderly Care
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-37",
    title: "母[はは]と歩[ある]く介護[かいご]の日々[ひび]",
    titleReading: "ははとあるくかいごのひび",
    level: "N3",
    summary: "A story about Haruko, who cares at home for her mother with dementia; through exhaustion, the pain of being forgotten, and the help of community services, she finds small joys and a deeper sense of her mother's dignity.",
    estMinutes: 8,
    tags: ["story", "elderly", "care", "family"],
    body: [
      "春[はる]子[こ]は65歳[さい]の時[とき]、認知[にんち]症[しょう]の母[はは]を自宅[じたく]で介護[かいご]し始[はじ]めました。父[ちち]は既[すで]に亡[な]くなり、きょうだいは遠[とお]くに住[す]んでいました。母[はは]は昔[むかし]のような活発[かっぱつ]さを失[うしな]い、時々[ときどき]春[はる]子[こ]の名前[なまえ]さえ忘[わす]れるようになりました。春[はる]子[こ]は定年[ていねん]退職[たいしょく]後[ご]、妻[つま]として母[はは]としての役割[やくわり]を果[はた]してきた女性[じょせい]の最後[さいご]の頼[たよ]りとなることを選[えら]びました。",
      "介護[かいご]の毎日[まいにち]は想像[そうぞう]以上[いじょう]に過酷[かこく]でした。朝[あさ]早[はや]く起[お]きて母[はは]の食事[しょくじ]の準備[じゅんび]をし、入浴[にゅうよく]を手伝[てつだ]い、トイレの介助[かいじょ]もします。母[はは]は夜[よる]も度々[たびたび]目[め]を覚[さ]まし、家[いえ]を出[で]ようとするため、春[はる]子[こ]は満足[まんぞく]に眠[ねむ]れませんでした。時[とき]には優[やさ]しい言葉[ことば]がけをしても、母[はは]が怒[おこ]り出[だ]すこともあり、春[はる]子[こ]の心[こころ]は削[けず]られていきました。",
      "特[とく]に辛[つら]かったのは、母[はは]が春[はる]子[こ]を「他人[たにん]」と呼[よ]んだ時[とき]でした。数[すう]十年[ねん]一緒[いっしょ]に暮[く]らした娘[むすめ]を忘[わす]れられたことに、春[はる]子[こ]は涙[なみだ]が止[と]まりませんでした。「こんなに頑張[がんば]っているのに」という無力感[むりょくかん]と、「介護[かいご]が下手[へた]なのだろうか」という自責[じせき]の念[ねん]が、彼女[かのじょ]を深[ふか]い孤独[こどく]へと引[ひ]きずり込[こ]みました。",
      "転機[てんき]は、地域[ちいき]の介護[かいご]支援[しえん]センターに相談[そうだん]した時[とき]でした。デイサービスを週[しゅう]に3回[かい]利用[りよう]することにし、訪問[ほうもん]介護[かいご]員[いん]にも来[き]てもらうようになりました。母[はは]は最初[さいしょ]は行[い]くのを嫌[いや]がりましたが、次第[しだい]に施設[しせつ]で他[ほか]の高齢[こうれい]者[しゃ]と話[はな]すのを楽[たの]しむようになりました。春[はる]子[こ]にも、やっと自分[じぶん]のための時間[じかん]ができました。",
      "今[いま]、春[はる]子[こ]は介護[かいご]の中[なか]に小[ちい]さな喜[よろこ]びを見[み]つけています。母[はは]が孫[まご]の写真[しゃしん]を見[み]て微笑[ほほえ]んだ時[とき]、昔[むかし]の歌[うた]を一緒[いっしょ]に口[くち]ずさんだ時[とき]。そういう瞬間[しゅんかん]が、彼女[かのじょ]に力[ちから]を与[あた]えます。「母[はは]が今[いま]、どう生[い]きたいか」を考[かんが]えるようになり、ただ「世話[せわ]をする」のではなく、母[はは]の尊厳[そんげん]を大切[たいせつ]にする介護[かいご]を心[こころ]がけるようになりました。",
      "春[はる]子[こ]は言[い]います。「介護[かいご]は終[お]わりがない旅[たび]のようです。でも、この旅[たび]の中[なか]で、私[わたし]は母[はは]の本当[ほんとう]の姿[すがた]を新[あたら]しく見[み]つけています」。高齢[こうれい]化[か]社会[しゃかい]の日本[にほん]で、介護[かいご]は誰[だれ]にとっても他人[たにん]事[こと]ではありません。家族[かぞく]だけでなく、地域[ちいき]や社会[しゃかい]全体[ぜんたい]で支[ささ]え合[あ]う仕組[しくみ]が、これからますます必要[ひつよう]になるでしょう。"
    ],
    translation: [
      "At the age of 65, Haruko began caring for her mother with dementia at home. Her father had already passed away, and her siblings lived far away. Her mother had lost the liveliness of the past, and sometimes even forgot Haruko's name. After retiring, Haruko chose to be the last reliance of a woman who had fulfilled her role as a wife and mother.",
      "The everyday life of caregiving was harder than she had imagined. She woke up early in the morning to prepare her mother's meals, helped with bathing, and assisted with toileting. Her mother woke up often at night and tried to leave the house, so Haruko could not sleep satisfactorily. Sometimes, even when she spoke gentle words, her mother would get angry, and Haruko's heart was chipped away.",
      "What was especially painful was when her mother called Haruko 'a stranger.' At the fact that her daughter, with whom she had lived for decades, was forgotten, Haruko's tears would not stop. The sense of powerlessness of 'I'm trying so hard' and the self-reproach of 'Maybe I'm bad at caregiving' dragged her into deep loneliness.",
      "The turning point was when she consulted the community long-term care support center. She decided to use day service three times a week and have a visiting caregiver come. At first her mother disliked going, but gradually she came to enjoy talking with other elderly people at the facility. For Haruko, time for herself was finally available.",
      "Now, Haruko finds small joys in caregiving. When her mother smiled at a photo of her grandchild, when they hummed an old song together. Such moments give her strength. She began to think about 'how her mother wants to live now,' and instead of just 'taking care of her,' she came to be mindful of caregiving that values her mother's dignity.",
      "Haruko says: 'Caregiving is like a journey with no end. But in this journey, I am newly discovering my mother's true self.' In Japan's aging society, caregiving is not someone else's problem for anyone. A system of supporting each other not only within families but also with the community and society as a whole will become increasingly necessary."
    ],
    questions: [
      {
        q: "春[はる]子[こ]が母[はは]を介護[かいご]し始[はじ]めた時[とき]、母[はは]はどのような状態[じょうたい]でしたか。",
        choices: ["元気[げんき]で活発[かっぱつ]だった", "認知[にんち]症[しょう]で春[はる]子[こ]の名前[なまえ]さえ時々[ときどき]忘[わす]れる状態[じょうたい]だった", "旅行[りょこう]好[ず]きだった", "仕事[しごと]をしていた"],
        answerIndex: 1,
        explanation: "第一段で、母は認知症で春子の名前さえ時々忘れる状態だったと述べられています。"
      },
      {
        q: "介護[かいご]の毎日[まいにち]について合[あ]っているのはどれですか。",
        choices: ["春[はる]子[こ]は十分[じゅうぶん]に眠[ねむ]れていた", "朝[あさ]早[はや]く起[お]きて食事[しょくじ]や入浴[にゅうよく]、トイレの介助[かいじょ]をした", "母[はは]は夜[よる]ぐっすり眠[ねむ]った", "介護[かいご]は簡単[かんたん]だった"],
        answerIndex: 1,
        explanation: "第二段で、朝早く起きて食事・入浴・トイレの介助をし、夜も眠れなかったと説明されています。"
      },
      {
        q: "春[はる]子[こ]が最[もっと]も辛[つら]かった出来事[できごと]は何[なん]ですか。",
        choices: ["母[はは]が孫[まご]の写真[しゃしん]を見[み]たこと", "母[はは]が春[はる]子[こ]を「他人[たにん]」と呼[よ]んだこと", "デイサービスに行[い]きたがったこと", "父[ちち]が死[し]んだこと"],
        answerIndex: 1,
        explanation: "第三段で、母が春子を「他人」と呼んだ時が最も辛かったと述べられています。"
      },
      {
        q: "介護[かいご]支援[しえん]センターを利用[りよう]してどう変[か]わりましたか。",
        choices: ["母[はは]を施設[しせつ]に預[あず]けきりにした", "デイサービスと訪問[ほうもん]介護[かいご]を利用[りよう]し、春[はる]子[こ]にも自分[じぶん]のための時間[じかん]ができた", "母[はは]が完全[かんぜん]に治[なお]った", "介護[かいご]を辞[や]めた"],
        answerIndex: 1,
        explanation: "第四段で、デイサービスと訪問介護を利用し、春子にも自分のための時間ができたと説明されています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-38 — Japanese Animation and Its Global Influence
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-38",
    title: "日本[にほん]アニメが世界[せかい]を動[うご]かす",
    titleReading: "にほんあにめがせかいをうごかす",
    level: "N3",
    summary: "An essay on how Japanese anime became a global cultural force: from Tezuka's limited-animation technique to Ghibli's awards, overseas fan communities, soft-power diplomacy, and the industry's labor issues.",
    estMinutes: 8,
    tags: ["anime", "culture", "global", "industry"],
    body: [
      "日本[にほん]のアニメは、今[いま]や世界[せかい]的[てき]な文化[ぶんか]現象[げんしょう]となっています。1960年代[ねんだい]に手塚[てづか]治虫[おさむ]が「鉄腕[てつわん]アトム」を生[う]み出[だ]して以来[いらい]、日本[にほん]のアニメーションは独自[どくじ]の表現[ひょうげん]技術[ぎじゅつ]と深[ふか]い物語[ものがたり]で成長[せいちょう]してきました。限[かぎ]られた枚数[まいすう]の絵[え]で動[うご]きを表現[ひょうげん]する「リミテッド・アニメーション」という手法[しゅほう]は、日本[にほん]アニメを支[ささ]える重要[じゅうよう]な技術[ぎじゅつ]です。",
      "中[なか]でも、宮崎[みやざき]駿[はやお]監督[かんとく]のスタジオジブリ作品[さくひん]は特[とく]別[べつ]な存在[そんざい]です。「千[せん]と千尋[ちひろ]の神隠[かみかく]し」はベルリン国際[こくさい]映画祭[えいがさい]で金熊[きんくま]賞[しょう]を受賞[じゅしょう]し、「もののけ姫[ひめ]」や「となりのトトロ」も世界中[せかいじゅう]で愛[あい]されています。宮崎[みやざき]作品[さくひん]は、環境[かんきょう]問題[もんだい]や平和[へいわ]、人間[にんげん]の成長[せいちょう]という普遍[ふはん]的[てき]なテーマを描[えが]き、国[くに]や文化[ぶんか]を超[こ]えて人々[ひとびと]の心[こころ]を打[う]ちます。",
      "日本[にほん]アニメの影響[えいきょう]は、海外[かいがい]のファンコミュニティにも見[み]られます。世界各地[せかいかくち]でアニメコンベンションが開[ひら]れ、数万[すうまん]人[にん]のファンが集[あつ]まります。コスプレをして好[す]きなキャラクターになりきる人[ひと]、日本[にほん]語[ご]を学[まな]び始[はじ]める人[ひと]、寿司[すし]や和食[わしょく]に興味[きょうみ]を持[も]つ人[ひと]など、アニメをきっかけに日本[にほん]文化[ぶんか]に親[した]しむ若者[わかもの]が後[あと]を絶[た]ちません。",
      "これは「ソフトパワー」と呼[よ]ばれる外交[がいこう]的[てき]な力[ちから]でもあります。日本[にほん]の政府[せいふ]もアニメや漫画[まんが]を文化[ぶんか]外交[がいこう]の重要[じゅうよう]な手段[しゅだん]として活用[かつよう]しています。海外[かいがい]の若[わか]い世代[せだい]が日本[にほん]に対[たい]して親[した]しみを感[かん]じるのは、多[おお]くの場合[ばあい]、アニメを通[つう]じてです。アニメが日本[にほん]のイメージを変[か]え、国際[こくさい]理解[りかい]を促[うなが]す力[ちから]を持[も]つことは疑[うたが]いようがありません。",
      "しかし、業界[ぎょうかい]内部[ないぶ]には深刻[しんこく]な問題[もんだい]もあります。アニメーターたちの労働[ろうどう]環境[かんきょう]は厳[きび]しく、若[わか]いクリエイターの給料[きゅうりょう]は生活[せいかつ]できない水準[すいじゅん]であることも少[すく]なくありません。長時間[ちょうじかん]労働[ろうどう]で健康[けんこう]を崩[くず]す人[ひと]もいます。才能[さいのう]ある若者[わかもの]が業界[ぎょうかい]を離[はな]れてしまうと、日本[にほん]アニメの未来[みらい]は危[あぶ]なくなるという指摘[してき]もあります。",
      "近年[きんねん]は、ストリーミング配信[はいしん]の普及[ふきゅう]で、日本[にほん]アニメは世界中[せかいじゅう]で即[そく]座[ざ]に見[み]られるようになりました。また、3D技術[ぎじゅつ]やAI[エーアイ]を活用[かつよう]した新[あたら]しい表現[ひょうげん]も生[う]まれています。しかし、手描[てが]きの温[あたた]かみや物語[ものがたり]の深[ふか]さこそが日本[にほん]アニメの本質[ほんしつ]です。技術[ぎじゅつ]と伝統[でんとう]の両方[りょうほう]を大切[たいせつ]にしながら、次[つぎ]の世代[せだい]へ日本[にほん]アニメの魅力[みりょく]を伝[つた]えていくことが、これからの課題[かだい]です。"
    ],
    translation: [
      "Japanese anime has now become a global cultural phenomenon. Since Osamu Tezuka produced Astro Boy in the 1960s, Japanese animation has grown with its own expressive techniques and deep stories. The technique of 'limited animation,' which expresses movement with a limited number of pictures, is an important technique that supports Japanese anime.",
      "Among them, the Studio Ghibli works of director Hayao Miyazaki are a special presence. Spirited Away won the Golden Bear at the Berlin International Film Festival, and Princess Mononoke and My Neighbor Totoro are loved all over the world. Miyazaki's works depict universal themes such as environmental issues, peace, and human growth, and move people's hearts beyond countries and cultures.",
      "The influence of Japanese anime is also seen in overseas fan communities. Anime conventions are held in various parts of the world, and tens of thousands of fans gather. There is no end to young people who become familiar with Japanese culture through anime: those who cosplay to become their favorite characters, those who begin learning Japanese, those who become interested in sushi and Japanese food.",
      "This is also a diplomatic power called 'soft power.' The Japanese government also utilizes anime and manga as an important means of cultural diplomacy. It is in many cases through anime that younger generations overseas feel affinity for Japan. There is no doubt that anime has the power to change the image of Japan and promote international understanding.",
      "However, there are also serious problems inside the industry. The working environment of animators is harsh, and the salaries of young creators are often at a level where they cannot make a living. Some people break down their health due to long working hours. It is also pointed out that if talented young people leave the industry, the future of Japanese anime will be in danger.",
      "In recent years, with the spread of streaming distribution, Japanese anime can now be seen immediately all over the world. Also, new expressions utilizing 3D technology and AI are being born. However, the warmth of hand drawing and the depth of the story are the essence of Japanese anime. While valuing both technology and tradition, conveying the appeal of Japanese anime to the next generation is the challenge of the future."
    ],
    questions: [
      {
        q: "日本[にほん]アニメを支[ささ]える重要[じゅうよう]な技術[ぎじゅつ]は何[なん]ですか。",
        choices: ["3D技術[ぎじゅつ]だけ", "リミテッド・アニメーション", "実写[じっしゃ]撮影[さつえい]", "AI[エーアイ]のみ"],
        answerIndex: 1,
        explanation: "第一段で、限られた枚数の絵で動きを表現する「リミテッド・アニメーション」が重要な技術だと述べられています。"
      },
      {
        q: "「千[せん]と千尋[ちひろ]の神隠[かみかく]し」について合[あ]っているのはどれですか。",
        choices: ["ベルリン映画祭[えいがさい]で金熊[きんくま]賞[しょう]を受賞[じゅしょう]した", "アカデミー作品賞[さくひんしょう]にノミネートされなかった", "海外[かいがい]では知[し]られていない", "宮崎[みやざき]駿[はやお]が監督[かんとく]していない"],
        answerIndex: 0,
        explanation: "第二段で、ベルリン国際映画祭で金熊賞を受賞したと述べられています。"
      },
      {
        q: "海外[かいがい]の若者[わかもの]が日本[にほん]文化[ぶんか]に親[した]しむきっかけとして挙[あ]げられているのは何[なん]ですか。",
        choices: ["観光[かんこう]", "ビジネス", "アニメ", "スポーツ"],
        answerIndex: 2,
        explanation: "第三段で、アニメをきっかけに日本文化に親しむ若者が後を絶たないと説明されています。"
      },
      {
        q: "アニメが持[も]つ外交[がいこう]的[てき]な力[ちから]を何[なに]と呼[よ]んでいますか。",
        choices: ["ハードパワー", "ソフトパワー", "カルチャーパワー", "デジタルパワー"],
        answerIndex: 1,
        explanation: "第四段で、アニメの外交的な力を「ソフトパワー」と呼んでいると述べられています。"
      },
      {
        q: "日本[にほん]アニメ業界[ぎょうかい]の問題[もんだい]は何[なん]ですか。",
        choices: ["アニメーターが多[おお]すぎること", "アニメーターの労働[ろうどう]環境[かんきょう]が厳[きび]しく給料[きゅうりょう]が低[ひく]いこと", "海外[かいがい]ファンが少[すく]ないこと", "作品[さくひん]が少[すく]なすぎること"],
        answerIndex: 1,
        explanation: "第五段で、アニメーターの労働環境が厳しく、若いクリエイターの給料が生活できない水準であることが問題だと述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-39 — A Story About Climate Change Awareness
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-39",
    title: "気候[きこう]変動[へんどう]に向[む]き合[あ]う町[まち]",
    titleReading: "きこうへんどうにむきあうまち",
    level: "N3",
    summary: "A story about Sotaro, a high school student in a coastal town, who learns about climate change, investigates local risks with his environment club, and persuades the town council to adopt renewable-energy and coastal-protection measures.",
    estMinutes: 9,
    tags: ["story", "climate", "youth", "community"],
    body: [
      "颯[そう]太[た]郎[ろう]は、太平洋[たいへいよう]に面[めん]した小[ちい]さな町[まち]に住[す]む高校生[こうこうせい]です。昔[むかし]から海[うみ]で遊[あそ]ぶのが好[す]きでしたが、最近[さいきん]は海[うみ]の変[か]わり方[かた]に不安[ふあん]を感[かん]じています。毎年[まいとし]襲[おそ]ってくる台風[たいふう]は以前[いぜん]より強[つよ]くなり、夏[なつ]は異常[いじょう]な暑[あつ]さが続[つづ]くようになりました。地元[じもと]の漁師[りょうし]も「魚[さかな]の種類[しゅるい]が変[か]わってきた」と嘆[なげ]いています。",
      "颯[そう]太[た]郎[ろう]は学校[がっこう]の環境[かんきょう]クラブに入[はい]りました。そこで、気候[きこう]変動[へんどう]の科学的[かがくてき]なメカニズムや、海面[かいめん]上昇[じょうしょう]の影響[えいきょう]について学[まな]びました。彼[かれ]の町[まち]も、このまま海面[かいめん]が上[あ]がれば、数十年[すうじゅうねん]後[ご]には低[ひく]い地域[ちいき]が水[みず]に沈[しず]む可能性[かのうせい]があることを知[し]りました。「これからの世代[せだい]に美[うつく]しい海[うみ]を残[のこ]さなければ」という強[つよ]い思[おも]いが芽[め]生[は]えました。",
      "環境[かんきょう]クラブの仲間[なかま]たちと、町[まち]の課題[かだい]を調[しら]べ始[はじ]めました。海岸[かいがん]の浸水[しんすい]リスク、農作物[のうさくぶつ]への影響[えいきょう]、エネルギー消費[しょうひ]の現状[げんじょう]など、多[おお]くのデータを集[あつ]めました。颯[そう]太[た]郎[ろう]たちは、大人[おとな]に「次[つぎ]の世代[せだい]の声[こえ]」を伝[つた]えるため、町[まち]民[みん]会議[かいぎ]で発言[はつげん]する機会[きかい]をもらうことにしました。",
      "町[まち]民[みん]会議[かいぎ]の日[ひ]、颯[そう]太[た]郎[ろう]は緊張[きんちょう]しながら壇上[だんじょう]に立[た]ちました。「私[わたし]たちは、今[いま]の大人[おとな]が残[のこ]してくれる地球[ちきゅう]で生[い]きていきます。だからこそ、再生[さいせい]可能[かのう]エネルギーの導入[どうにゅう]や、海岸[かいがん]の保護[ほご]をもっと進[すす]めてほしいのです」。彼[かれ]の言葉[ことば]に、会場[かいじょう]の大人[おとな]たちは静[しず]かに耳[みみ]を傾[かたむ]けました。一部[いちぶ]の人[ひと]は涙[なみだ]を浮[う]かべていました。",
      "颯[そう]太[た]郎[ろう]の発言[はつげん]は町[まち]に大[おお]きな影響[えいきょう]を与[あた]えました。町[まち]議会[ぎかい]は若[わか]い世代[せだい]の意見[いけん]を真[ま]剣[けん]に受[う]け止[と]め、太陽光[たいようこう]パネルの設置[せっち]や、海岸[かいがん]防護[ぼうご]林[りん]の再生[さいせい]など、新[あたら]しい気候[きこう]対策[たいさく]を打[う]ち出[だ]しました。地元[じもと]の企業[きぎょう]も協力[きょうりょく]を宣言[せんげん]し、町[まち]全体[ぜんたい]で脱[だつ]炭素[たんそ]に向[む]けた動[うご]きが始[はじ]まりました。",
      "颯[そう]太[た]郎[ろう]は言[い]います。「気候[きこう]変動[へんどう]は、遠[とお]い国[くに]の問題[もんだい]ではなく、私[わたし]たちの町[まち]の問題[もんだい]です。一人[ひとり]の高校生[こうこうせい]の声[こえ]が、町[まち]を変[か]えるきっかけになる。それを証明[しょうめい]できたことが嬉[うれ]しいです」。これからの社会[しゃかい]では、若[わか]い世代[せだい]が自[みずか]ら課題[かだい]に取[と]り組[く]み、未来[みらい]を形[かたち]作[づく]ることが、ますます重要[じゅうよう]になるでしょう。"
    ],
    translation: [
      "Sotaro is a high school student who lives in a small town facing the Pacific Ocean. He used to like playing in the sea, but recently he feels anxious about how the sea is changing. The typhoons that hit every year have become stronger than before, and summers have come to have unusual heat continue. Local fishermen also lament that 'the types of fish have changed.'",
      "Sotaro joined the school's environment club. There he learned the scientific mechanism of climate change and the impact of sea level rise. He learned that in his town too, if the sea level continues to rise like this, there is a possibility that low areas will sink into water in a few decades. A strong thought sprouted: 'We must leave a beautiful sea for the next generation.'",
      "With his friends in the environment club, he began investigating the town's challenges. They collected much data: the flooding risk of the coast, the impact on crops, the current state of energy consumption. Sotaro and his friends decided to get an opportunity to speak at a town meeting to convey 'the voice of the next generation' to adults.",
      "On the day of the town meeting, Sotaro stood on the stage nervously. 'We will live on the earth that the adults of today leave for us. That is why we want you to advance the introduction of renewable energy and the protection of the coast more.' The adults in the venue listened quietly to his words. Some people had tears in their eyes.",
      "Sotaro's speech had a major impact on the town. The town council seriously took in the opinions of the younger generation and put forth new climate measures such as the installation of solar panels and the regeneration of coastal protection forests. Local companies also declared cooperation, and a movement toward decarbonization started in the town as a whole.",
      "Sotaro says: 'Climate change is not a problem of distant countries; it is a problem of our town. The voice of one high school student can be the trigger to change a town. I am glad I could prove that.' In the society of the future, it will become increasingly important for the younger generation to tackle challenges themselves and shape the future."
    ],
    questions: [
      {
        q: "颯[そう]太[た]郎[ろう]が最近[さいきん]感[かん]じている不安[ふあん]は何[なん]ですか。",
        choices: ["勉強[べんきょう]が難[むずか]しいこと", "海[うみ]の変[か]わり方[かた]", "友達[ともだち]が少[すく]ないこと", "引[ひ]っ越[こ]すこと"],
        answerIndex: 1,
        explanation: "第一段で、颯太郎は海の変わり方に不安を感じていると述べられています。"
      },
      {
        q: "環境[かんきょう]クラブで学[まな]んだことの中[なか]で、颯[そう]太[た]郎[ろう]が知[し]った事実[じじつ]は何[なん]ですか。",
        choices: ["海面[かいめん]が上[あ]がると数十年[すうじゅうねん]後[ご]には低[ひく]い地域[ちいき]が沈[しず]む可能性[かのうせい]があること", "海面[かいめん]は下[さ]がっていること", "漁業[ぎょぎょう]は不要[ふよう]になること", "気候[きこう]変動[へんどう]は日本[にほん]に影響[えいきょう]しないこと"],
        answerIndex: 0,
        explanation: "第二段で、海面が上がれば数十年後には低い地域が水に沈む可能性があることを知ったと述べられています。"
      },
      {
        q: "町[まち]民[みん]会議[かいぎ]での颯[そう]太[た]郎[ろう]の主張[しゅちょう]として合[あ]っているのはどれですか。",
        choices: ["工場[こうじょう]を増[ふ]やしてほしい", "再生[さいせい]可能[かのう]エネルギーの導入[どうにゅう]や海岸[かいがん]の保護[ほご]を進[すす]めてほしい", "学校[がっこう]を新[あたら]しくしてほしい", "海[うみ]を埋[う]め立[た]ててほしい"],
        answerIndex: 1,
        explanation: "第四段で、再生可能エネルギーの導入や海岸の保護をもっと進めてほしいと主張したと述べられています。"
      },
      {
        q: "町[まち]議会[ぎかい]はどう対応[たいおう]しましたか。",
        choices: ["若者[わかもの]の意見[いけん]を無視[むし]した", "太陽光[たいようこう]パネルの設置[せっち]や海岸[かいがん]防護[ぼうご]林[りん]の再生[さいせい]など新[あたら]しい気候[きこう]対策[たいさく]を打[う]ち出[だ]した", "引[ひ]っ越しを勧[すす]めた", "何[なに]もしなかった"],
        answerIndex: 1,
        explanation: "第五段で、町議会が太陽光パネルの設置や海岸防護林の再生など新しい気候対策を打ち出したと説明されています。"
      },
      {
        q: "颯[そう]太[た]郎[ろう]が最後[さいご]に伝[つた]えるメッセージは何[なん]ですか。",
        choices: ["気候[きこう]変動[へんどう]は遠[とお]い国[くに]の問題[もんだい]だ", "一人[ひとり]の高校生[こうこうせい]の声[こえ]が町[まち]を変[か]えるきっかけになる", "大人[おとな]だけが解決[かいけつ]できる", "何[なに]もしないのが一番[いちばん]"],
        answerIndex: 1,
        explanation: "第六段で、一人の高校生の声が町を変えるきっかけになることを証明できたと嬉しさを述べています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-40 — The Art of Japanese Gardens
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-40",
    title: "日本[にほん]庭園[ていえん]に宿[やど]る美[び]",
    titleReading: "にほんていえんにやどるび",
    level: "N3",
    summary: "An essay on Japanese gardens as an art form: their main types (tsukiyama, karesansui, roji), the philosophy of harmony with nature and wabi-sabi, Ryoanji's design, the tea garden's role, modern stress-relief research, and preservation.",
    estMinutes: 7,
    tags: ["culture", "garden", "art", "tradition"],
    body: [
      "日本[にほん]庭園[ていえん]は、自然[しぜん]を抽象[ちゅうしょう]化[か]して表現[ひょうげん]する独自[どくじ]の芸術[げいじゅつ]です。大[おお]きく分[わ]けると、池[いけ]や築山[つきやま]を配[はい]した「築山[つきやま]式[しき]庭園[ていえん]」、石[いし]と白砂[しらすな]で水[みず]なしに風景[ふうけい]を表現[ひょうげん]する「枯山水[かれさんすい]」、茶[ちゃ]の湯[ゆ]のために作[つく]られた「露地[ろじ]」などがあります。どれも、自然[しぜん]の風景[ふうけい]を縮小[しゅくしょう]して庭[にわ]の中[なか]に再現[さいげん]するという共通[きょうつう]の考[かんが]え方[かた]を持[も]っています。",
      "日本[にほん]庭園[ていえん]の根底[こんてい]には、「自然[しぜん]と調和[ちょうわ]する」という思想[しそう]があります。西欧[せいおう]の庭園[ていえん]が幾何学[きかがく]的[てき]に対称[たいしょう]性[せい]を重視[じゅうし]するのに対[たい]し、日本[にほん]の庭園[ていえん]はあえて不規則[ふきそく]な形[かたち]を好[この]みます。また、不完全[ふかんぜん]なものや古[ふる]びたものに美[び]を見[み]出[だ]す「わび・さび」の感覚[かんかく]も重要[じゅうよう]です。これらは、日本[にほん]の四季[しき]や宗教[しゅうきょう]観[かん]と深[ふか]く結[むす]びついています。",
      "枯山水[かれさんすい]の庭[にわ]は、特[とく]に禅[ぜん]寺院[じいん]で発達[はったつ]しました。京都[きょうと]の龍安寺[りょうあんじ]の庭[にわ]は有名[ゆうめい]で、15個[こ]の石[いし]と白砂[しらすな]だけで海[うみ]や島[しま]を表現[ひょうげん]しています。興味深[きょうみぶか]いのは、どの角度[かくど]から見[み]ても、全部[ぜんぶ]の石[いし]は同時[どうじ]に見[み]えないという設計[せっけい]です。この「不完全[ふかんぜん]さ」こそが、見[み]る人[ひと]に想像[そうぞう]力[りょく]を促[うなが]し、瞑想[めいそう]の深[ふか]まりを生[う]み出[だ]します。",
      "露地[ろじ]と呼[よ]ばれる茶庭[ちゃにわ]は、茶[ちゃ]の湯[ゆ]の精神[せいしん]を反映[はんえい]しています。客[きゃく]は露地[ろじ]を歩[ある]くことで、日常[にちじょう]の世界[せかい]から茶室[ちゃしつ]という非日常[ひにちじょう]の空間[くうかん]へと心[こころ]を移[うつ]していきます。飛[とび]石[いし]や手水[ちょうず]鉢[ばち]など、簡素[かんそ]な要素[ようそ]が静[しず]かな空間[くうかん]を構成[こうせい]し、「もてなし」の心[こころ]を表現[ひょうげん]しています。庭園[ていえん]そのものが、茶[ちゃ]の湯[ゆ]という儀式[ぎしき]の一部[いちぶ]なのです。",
      "現代[げんだい]では、日本[にほん]庭園[ていえん]は心[こころ]の安[やす]らぎをもたらす場所[ばしょ]としても再認識[さいにんしき]されています。研究[けんきゅう]によると、日本[にほん]庭園[ていえん]を散歩[さんぽ]するだけで、ストレスが軽減[けいげん]し、血圧[けつあつ]が下[さ]がることが分[わ]かっています。病院[びょういん]や施設[しせつ]に日本[にほん]庭園[ていえん]を作[つく]る動[うご]きも広[ひろ]がっています。また、海外[かいがい]の建築家[けんちくか]にも影響[えいきょう]を与[あた]え、現代[げんだい]的[てき]なデザイン[でざいん]に取[と]り入[い]れられることも増[ふ]えています。",
      "日本[にほん]庭園[ていえん]を守[まも]り継[つ]ぐことは、単[たん]なる景観[けいかん]保存[ほぞん]ではありません。そこには、自然[しぜん]と人間[にんげん]の関係[かんけい]に対[たい]する日本[にほん]の考[かんが]え方[かた]が込[こ]められています。庭師[にわし]たちは、木[き]の手入[てい]れや石[いし]の配置[はいち]を通[つう]じて、何[なん]百年[ねん]も前[まえ]から続[つづ]く美[び]を未来[みらい]に伝[つた]えています。私[わたし]たちもまた、日本[にほん]庭園[ていえん]に触[ふ]れることで、自然[しぜん]との向[む]き合[あ]い方[かた]を新[あたら]しく学[まな]び直[なお]すことができるのです。"
    ],
    translation: [
      "Japanese gardens are a unique art that abstracts and expresses nature. Roughly divided, there are 'tsukiyama-style gardens' that place ponds and artificial hills, 'karesansui' that expresses landscapes with stones and white sand without water, and 'roji' created for the tea ceremony. All share the idea of shrinking natural landscapes and reproducing them within a garden.",
      "At the foundation of Japanese gardens is the idea of 'harmony with nature.' While Western gardens emphasize geometric symmetry, Japanese gardens deliberately prefer irregular shapes. Also important is the sense of 'wabi-sabi' that finds beauty in incomplete and weathered things. These are deeply tied to Japan's four seasons and religious views.",
      "Karesansui gardens developed especially in Zen temples. The garden of Ryoanji in Kyoto is famous, expressing the sea and islands with only 15 stones and white sand. What is interesting is a design in which all the stones cannot be seen at the same time from any angle. This 'incompleteness' itself prompts the viewer's imagination and brings about a deepening of meditation.",
      "The tea garden called roji reflects the spirit of the tea ceremony. By walking through the roji, guests move their hearts from the everyday world to the extraordinary space of the tea room. Simple elements such as stepping stones and a water basin make up a quiet space, expressing the spirit of 'hospitality.' The garden itself is part of the ritual of the tea ceremony.",
      "In the modern age, Japanese gardens are also being recognized again as a place that brings peace of mind. According to research, it has been found that just walking in a Japanese garden reduces stress and lowers blood pressure. The movement of creating Japanese gardens in hospitals and facilities is also spreading. Also, it influences overseas architects, and is increasingly incorporated into modern designs.",
      "Preserving and passing on Japanese gardens is not merely landscape preservation. It contains the Japanese way of thinking about the relationship between nature and human beings. Through tree maintenance and stone placement, gardeners convey the beauty that has continued for hundreds of years to the future. By encountering Japanese gardens, we too can newly relearn how to face nature."
    ],
    questions: [
      {
        q: "日本[にほん]庭園[ていえん]の類型[るいけい]として挙[あ]げられていないのはどれですか。",
        choices: ["築山[つきやま]式[しき]庭園[ていえん]", "枯山水[かれさんすい]", "露地[ろじ]", "サッカーコート"],
        answerIndex: 3,
        explanation: "第一段で、築山式庭園、枯山水、露地が挙げられており、サッカーコートは含まれません。"
      },
      {
        q: "日本[にほん]庭園[ていえん]の根底[こんてい]にある思想[しそう]は何[なん]ですか。",
        choices: ["幾何学[きかがく]的[てき]対称[たいしょう]性[せい]", "自然[しぜん]と調和[ちょうわ]すること", "完璧[かんぺき]な形[かたち]", "西欧[せいおう]の模倣[もほう]"],
        answerIndex: 1,
        explanation: "第二段で、自然と調和するという思想が根底にあると述べられています。"
      },
      {
        q: "龍安寺[りょうあんじ]の枯山水[かれさんすい]の特徴[とくちょう]は何[なん]ですか。",
        choices: ["15個[こ]の石[いし]と白砂[しらすな]だけで風景[ふうけい]を表現[ひょうげん]し、どの角度[かくど]から見[み]ても全部[ぜんぶ]の石[いし]は同時[どうじ]に見[み]えないこと", "池[いけ]が中心[ちゅうしん]にあること", "多[おお]くの花[はな]が植[う]えられていること", "噴水[ふんすい]があること"],
        answerIndex: 0,
        explanation: "第三段で、15個の石と白砂で風景を表現し、どの角度から見ても全部の石は同時に見えないと説明されています。"
      },
      {
        q: "現代[げんだい]における日本[にほん]庭園[ていえん]の役割[やくわり]は何[なん]ですか。",
        choices: ["観光[かんこう]資源[しげん]としてだけ", "心[こころ]の安[やす]らぎをもたらす場所[ばしょ]として再認識[さいにんしき]されている", "農業[のうぎょう]生産[せいさん]の場[ば]", "工業[こうぎょう]用地[ようち]"],
        answerIndex: 1,
        explanation: "第五段で、心の安らぎをもたらす場所として再認識され、ストレス軽減や血圧低下の効果が研究で分かったと述べられています。"
      }
    ]
  }
];
