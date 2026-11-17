import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Single kanji with okurigana use per-kanji brackets (e.g. 働[はたら]く).
// 10 original N3-level reading passages with comprehension questions.
// Topics: omotenashi, remote work culture, future of public transportation,
// Japanese literature and its themes, cultural identity, Japanese approach to recycling,
// a historical figure (Fukuzawa Yukichi), influence of sports in Japanese society,
// a community garden, the philosophy of kaizen.

export const readingN3E: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n3-41 — Omotenashi (おもてなし)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-41",
    title: "日本[にほん]の「おもてなし」の精神[せいしん]",
    titleReading: "にほんのおもてなしのせいしん",
    level: "N3",
    summary: "An exploration of omotenashi, the Japanese spirit of hospitality that anticipates a guest's needs without expecting reward, its everyday forms, and the challenge of preserving its heart amid mass tourism.",
    estMinutes: 7,
    tags: ["omotenashi", "hospitality", "culture", "service"],
    body: [
      "近年[きんねん]、「おもてなし」という日本[にほん]の言葉[ことば]が世界[せかい]で知[し]られるようになりました。単[たん]なるサービスではなく、相手[あいて]の気持[きも]ちを先回[さきまわ]りして考[かんが]える心[こころ]だと言[い]われています。",
      "おもてなしの特徴[とくちょう]は、見返[みかえ]りを期待[きたい]しないところにあります。お客様[きゃくさま]が何[なに]を求[もと]めているかを察[さっ]し、言葉[ことば]にされる前[まえ]に手[て]を差[さ]し伸[の]べるのが理想[りそう]とされています。",
      "旅館[りょかん]では、客[きゃく]の好[この]みに合[あ]わせて部屋[へや]の温度[おんど]や食事[しょくじ]の時間[じかん]を調整[ちょうせい]してくれます。茶[ちゃ]の湯[ゆ]でも、客[きゃく]の立場[たちば]に立[た]って季節[きせつ]の道具[どうぐ]を選[えら]ぶのが大切[たいせつ]です。",
      "一方[いっぽう]で、おもてなしは必[かなら]ずしも特別[とくべつ]な場所[ばしょ]で行[おこな]われるとは限[かぎ]りません。日常[にちじょう]の店[みせ]での挨拶[あいさつ]や、道[みち]を教[おし]えるときの態度[たいど]にも表[あらわ]れます。",
      "しかし、観光客[かんこうきゃく]が急増[きゅうぞう]する中[なか]で、表面的[ひょうめんてき]な接客[せっきゃく]になりやすくなるという指摘[してき]もあります。形式[けいしき]だけを真似[まね]するのではなく、心[こころ]を伝[つた]えることが難[むずか]しくなっています。",
      "おもてなしの精神[せいしん]は、相手[あいて]を思[おも]いやる日本[にほん]の文化[ぶんか]の深[ふか]さを示[しめ]しています。これからも大切[たいせつ]にしていきたい価値[かち]の一[ひと]つでしょう。"
    ],
    translation: [
      "In recent years, the Japanese word \"omotenashi\" has come to be known around the world. It is said to be not mere service, but a spirit of anticipating the other person's feelings.",
      "A characteristic of omotenashi is that it does not expect anything in return. The ideal is to sense what the guest wants and offer help before they put it into words.",
      "At a ryokan, the room temperature and meal times are adjusted to match the guest's preferences. In the tea ceremony too, choosing seasonal utensils with the guest in mind is important.",
      "On the other hand, omotenashi is not necessarily limited to special places. It also appears in everyday greetings at shops and in the attitude when giving directions.",
      "However, as tourists surge, some point out that service tends to become superficial. It has grown harder not merely to imitate the form, but to convey the heart.",
      "The spirit of omotenashi reflects the depth of Japan's culture of caring for others. It is one of the values we should continue to treasure."
    ],
    questions: [
      {
        q: "おもてなしの特徴は何ですか。",
        choices: ["見返りを期待しないこと", "高い料金を取ること", "派手な演出をすること", "客に何もしないこと"],
        answerIndex: 0,
        explanation: "「見返りを期待しないところにある」と書かれています。"
      },
      {
        q: "おもてなしの「理想」は何ですか。",
        choices: ["客が言葉にしてから対応すること", "客が求めることを察して先に手を差し伸べること", "高価な贈り物を渡すこと", "マニュアル通りに動くこと"],
        answerIndex: 1,
        explanation: "「言葉にされる前に手を差し伸べるのが理想とされている」とあります。"
      },
      {
        q: "旅館での例として挙げられているのは何ですか。",
        choices: ["客の好みに合わせて温度や食事時間を調整すること", "観光客に無料で部屋を提供すること", "客に料理を作らせること", "毎日違う部屋に移動させること"],
        answerIndex: 0,
        explanation: "「客の好みに合わせて部屋の温度や食事の時間を調整してくれる」とあります。"
      },
      {
        q: "本文によると、おもてなしはどこで行われますか。",
        choices: ["特別な場所だけでしか行われない", "高級な旅館だけで行われる", "日常の場面にも表れる", "外国人にだけ向けられる"],
        answerIndex: 2,
        explanation: "「日常の店での挨拶や、道を教えるときの態度にも表れる」と書かれています。"
      },
      {
        q: "観光客急増で生じた問題は何ですか。",
        choices: ["接客が形式的になりやすいこと", "旅館が減りすぎたこと", "料金が下がりすぎたこと", "スタッフが多すぎること"],
        answerIndex: 0,
        explanation: "「表面的な接客になりやすくなるという指摘もある」と述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-42 — Remote work culture (リモートワーク)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-42",
    title: "リモートワークが変[か]える働[はたら]き方[かた]",
    titleReading: "リモートワークがかえるはたらきかた",
    level: "N3",
    summary: "How remote work is reshaping Japanese work life: saving commute time, enabling rural relocation, but also blurring work-life boundaries and demanding new self-discipline.",
    estMinutes: 7,
    tags: ["remote work", "work culture", "technology", "lifestyle"],
    body: [
      "最近[さいきん]、リモートワークを導入[どうにゅう]する会社[かいしゃ]が急速[きゅうそく]に増[ふ]えました。通勤[つうきん]せずに家[いえ]やカフェで仕事[しごと]をすることで、時間[じかん]の使[つか]い方[かた]が大[おお]きく変[か]わりました。",
      "最大[さいだい]の利点[りてん]は、通勤時間[つうきんじかん]が不要[ふよう]なことです。その分[ぶん]を家族[かぞく]との時間[じかん]や自己投資[じことうし]に使[つか]えるようになり、生活[せいかつ]の質[しつ]が上[あ]がったという声[こえ]が多[おお]いです。",
      "また、住[す]む場所[ばしょ]を選[えら]ばなくなるため、地方[ちほう]へ移住[いじゅう]する人[ひと]も増[ふ]えています。都会[とかい]の高[たか]い家賃[やちん]から解放[かいほう]され、自然[しぜん]の豊[ゆた]かな環境[かんきょう]で暮[く]らすことが可能[かのう]になりました。",
      "その反面[はんめん]、新[あたら]しい課題[かだい]も生[しょう]じています。同僚[どうりょう]と直接[ちょくせつ]会[あ]えないため、意思疎通[いしそつう]に時間[じかん]がかかったり、孤独感[こどくかん]を感[かん]じたりする人[ひと]がいます。",
      "さらに、仕事[しごと]と私[わたくし]生活[せいかつ]の境界[きょうかい]が曖昧[あいまい]になり、休[やす]む時間[じかん]までパソコンを開[あ]けてしまう人[ひと]も少[すく]なくありません。オンとオフを切[き]り替[か]える工夫[くふう]が必要[ひつよう]です。",
      "リモートワークは自由[じゆう]をもたらした半面[はんめん]、新[あたら]しい自律[じりつ]を求[もと]めています。技術[ぎじゅつ]だけではなく、働[はたら]き方[かた]のルールと習慣[しゅうかん]を見直[みなお]すことがこれからの鍵[かぎ]となるでしょう。"
    ],
    translation: [
      "Recently, companies introducing remote work have increased rapidly. By working from home or a cafe without commuting, the way time is used has changed greatly.",
      "The greatest advantage is that commuting time becomes unnecessary. Many say the quality of life has improved because they can spend that time with family or on self-investment.",
      "In addition, because where to live is no longer constrained, more people are relocating to rural areas. Freed from high urban rents, it has become possible to live in nature-rich environments.",
      "On the other hand, new challenges have emerged. Because colleagues cannot meet directly, communication takes more time, and some people feel isolated.",
      "Furthermore, the boundary between work and private life becomes blurry, and not a few people end up opening their laptops even during rest time. We need ways to switch between on and off.",
      "Remote work has brought freedom, but on the other hand it demands a new kind of self-discipline. Reviewing not only technology but also the rules and habits of how we work will be the key going forward."
    ],
    questions: [
      {
        q: "リモートワークの最大の利点は何ですか。",
        choices: ["通勤時間が不要なこと", "給料が必ず上がること", "残業がなくなること", "仕事の量が減ること"],
        answerIndex: 0,
        explanation: "「最大の利点は、通勤時間が不要なこと」と書かれています。"
      },
      {
        q: "リモートワークで増えた行動として挙げられているのは何ですか。",
        choices: ["地方への移住", "毎日の通勤", "夜の残業", "海外転勤"],
        answerIndex: 0,
        explanation: "「地方へ移住する人も増えている」とあります。"
      },
      {
        q: "リモートワークの課題として挙げられていないのは何ですか。",
        choices: ["意思疎通に時間がかかる", "孤独感を感じる", "通勤が疲れる", "仕事と生活の境界が曖昧になる"],
        answerIndex: 2,
        explanation: "通勤の疲れはリモートワークの課題としては挙げられていません。"
      },
      {
        q: "休む時間までパソコンを開いてしまう原因は何ですか。",
        choices: ["仕事と私生活の境界が曖昧になること", "パソコンが軽くなったこと", "上司に監視されること", "家賃が高いこと"],
        answerIndex: 0,
        explanation: "「仕事と私生活の境界が曖昧になり」と述べられています。"
      },
      {
        q: "本文がこれからの鍵として挙げているのは何ですか。",
        choices: ["新しい技術を導入することだけ", "働き方のルールと習慣を見直すこと", "通勤を復活させること", "残業を増やすこと"],
        answerIndex: 1,
        explanation: "「働き方のルールと習慣を見直すことがこれからの鍵となるでしょう」とあります。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-43 — Future of public transportation
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-43",
    title: "公共[こうきょう]交通[こうつう]の未来[みらい]と課題[かだい]",
    titleReading: "こうきょうこうつうのみらいとかだい",
    level: "N3",
    summary: "Japan's public transportation faces rural route cuts and an aging population, while cities adopt electric buses, data analysis, and autonomous driving; the article stresses shared efforts to keep mobility for all.",
    estMinutes: 8,
    tags: ["transportation", "environment", "technology", "society"],
    body: [
      "日本[にほん]の公共[こうきょう]交通[こうつう]は、電車[でんしゃ]やバスが時間[じかん]に正確[せいかく]に運行[うんこう]することで世界[せかい]から高[たか]く評価[ひょうか]されてきました。しかし、人口[じんこう]の減少[げんしょう]や高齢化[こうれいか]の中[なか]で、その維持[いじ]が難[むずか]しくなっています。",
      "地方[ちほう]では、利用者[りようしゃ]が減[へ]り、赤字[あかじ]の路線[ろせん]が続々[ぞくぞく]と廃止[はいし]されています。車[くるま]のない高齢者[こうれいしゃ]が移動[いどう]できなくなり、「交通難民[こうつうなんみん]」という社会問題[しゃかいもんだい]も起[お]きています。",
      "一方[いっぽう]で、都会[とかい]では混雑緩和[こんざつかんわ]と環境保護[かんきょうほご]のため、新[あたら]しい取[と]り組[く]みが進[すす]んでいます。電気[でんき]バスの導入[どうにゅう]や、ICカードを活用[かつよう]した混雑[こんざつ]データの分析[ぶんせき]がその例[れい]です。",
      "自動運転技術[じどううんてんぎじゅつ]にも注目[ちゅうもく]が集[あつ]まっています。一定[いってい]の区間[くかん]を自動[じどう]で走[はし]るバスの実証実験[じっしょうじっけん]が各地[かくち]で行[おこな]われ、運転手[うんてんしゅ]不足[ぶそく]の解決[かいけつ]が期待[きたい]されています。",
      "ただ、技術[ぎじゅつ]だけではすべての問題[もんだい]が解決[かいけつ]するわけではありません。赤字路線[あかじろせん]をどう支[ささ]えるか、地域住民[ちいきじゅうみん]と行政[ぎょうせい]が共[とも]に考[かんが]える仕組[しく]みが求[もと]められます。",
      "公共交通[こうきょうこうつう]は、単[たん]なる移動手段[いどうしゅだん]ではなく、地域[ちいき]のつながりを支[ささ]える役割[やくわり]も持[も]っています。未来[みらい]にわたって誰[だれ]もが移動[いどう]できる社会[しゃかい]を維持[いじ]することが重要[じゅうよう]です。"
    ],
    translation: [
      "Japan's public transportation has been highly evaluated worldwide for trains and buses running accurately on time. However, amid population decline and aging, maintaining it has become difficult.",
      "In rural areas, as users decrease, deficit routes are being abolished one after another. Elderly people without cars can no longer get around, causing a social problem called \"transportation refugees.\"",
      "On the other hand, in cities, new initiatives are advancing to ease congestion and protect the environment. Introducing electric buses and analyzing congestion data using IC cards are examples.",
      "Attention is also focusing on autonomous driving technology. Demonstration experiments of buses that drive automatically on certain sections are being conducted in various places, and they are expected to solve the shortage of drivers.",
      "However, technology alone will not solve every problem. A framework in which local residents and government think together about how to support deficit routes is needed.",
      "Public transportation is not merely a means of movement, but also plays a role in supporting community ties. Maintaining a society in which anyone can move around into the future is important."
    ],
    questions: [
      {
        q: "日本の公共交通が世界から評価されてきた理由は何ですか。",
        choices: ["運賃が安いこと", "時間に正確に運行すること", "路線の数が多いこと", "車両が新しいこと"],
        answerIndex: 1,
        explanation: "「時間に正確に運行することで世界から高く評価されてきた」とあります。"
      },
      {
        q: "「交通難民」とはどういう人々を指しますか。",
        choices: ["車を持たない高齢者", "運転免許を持たない若者", "外国から来た観光客", "都心に住む会社員"],
        answerIndex: 0,
        explanation: "「車のない高齢者が移動できなくなり、交通難民という社会問題も起きている」と書かれています。"
      },
      {
        q: "都会での新しい取り組みとして挙げられているのは何ですか。",
        choices: ["電気バスの導入とデータ分析", "新しい地下鉄の建設", "タクシーの値下げ", "自転車の無料貸し出し"],
        answerIndex: 0,
        explanation: "「電気バスの導入や、ICカードを活用した混雑データの分析」とあります。"
      },
      {
        q: "自動運転技術に期待されている効果は何ですか。",
        choices: ["運賃の大幅値下げ", "運転手不足の解決", "観光客の増加", "道路の拡張"],
        answerIndex: 1,
        explanation: "「運転手不足の解決が期待されている」と述べられています。"
      },
      {
        q: "本文の主張として最も近いのはどれですか。",
        choices: ["技術だけですべて解決できる", "赤字路線はすぐに廃止すべきだ", "地域と行政が一緒に考える仕組みが必要だ", "公共交通はもう時代遅れだ"],
        answerIndex: 2,
        explanation: "「地域住民と行政が共に考える仕組みが求められる」とあります。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-44 — Japanese literature and its themes
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-44",
    title: "日本[にほん]文学[ぶんがく]が描[えが]く人間[にんげん]の姿[すがた]",
    titleReading: "にほんぶんがくがえがくにんげんのすがた",
    level: "N3",
    summary: "An overview of Japanese literature from classical tales to modern novels, highlighting themes of impermanence, the I-novel tradition, and literature as a mirror of both its era and universal human nature.",
    estMinutes: 8,
    tags: ["literature", "culture", "history", "arts"],
    body: [
      "日本[にほん]の文学[ぶんがく]は、古[ふる]い時代[じだい]から現代[げんだい]まで多様[たよう]な作品[さくひん]を生[う]み出[だ]してきました。物語[ものがたり]や和歌[わか]の中[なか]には、自然[しぜん]や季節[きせつ]への深[ふか]い感情[かんじょう]が込[こ]められています。",
      "古典文学[こてんぶんがく]の代表[だいひょう]である「源氏物語[げんじものがたり]」は、千年[せんねん]以上[いじょう]前[まえ]に書[か]かれたにもかかわらず、人間[にんげん]の複雑[ふくざつ]な感情[かんじょう]を鮮[あざ]やかに描[えが]いており、今[いま]でも読[よ]み継[つ]がれています。",
      "近代[きんだい]に入[はい]ると、夏目漱石[なつめそうせき]や太宰治[だざいおさむ]などの作家[さっか]が、現代社会[げんだいしゃかい]の中[なか]で悩[なや]む人間[にんげん]の孤独[こどく]や矛盾[むじゅん]を描[えが]きました。彼[かれ]らの作品[さくひん]は、時代[じだい]を超[こ]えて共感[きょうかん]を呼[よ]んでいます。",
      "日本[にほん]文学[ぶんがく]によく見[み]られる主題[しゅだい]に「無常[むじょう]」があります。美[うつく]しいものはやがて変[か]わってしまうという感覚[かんかく]が、桜[さくら]や秋[あき]の風景[ふうけい]を通[とお]して表現[ひょうげん]されることが多[おお]いです。",
      "また、「私小説[わたくしょうせつ]」と呼[よ]ばれる、作者[さくしゃ]自身[じしん]の経験[けいけん]を元[もと]に書[か]かれる作品[さくひん]も特徴的[とくちょうてき]です。日常[にちじょう]の小[ちい]さな出来事[できごと]の中[なか]に、深[ふか]い人間性[にんげんせい]を見[み]出[だ]す試[こころ]みが続[つづ]けられています。",
      "文学[ぶんがく]は、時代[じだい]を映[うつ]す鏡[かがみ]であると同時[どうじ]に、普遍的[ふへんてき]な人間[にんげん]の姿[すがた]を伝[つた]えるものです。日本[にほん]の作品[さくひん]を読[よ]むことで、言葉[ことば]の向[む]こう側[がわ]にある文化[ぶんか]に触[ふ]れることができるでしょう。"
    ],
    translation: [
      "Japanese literature has produced diverse works from ancient times to the present. Tales and waka poetry contain deep feelings toward nature and the seasons.",
      "\"The Tale of Genji,\" a representative of classical literature, vividly depicts complex human emotions despite being written more than a thousand years ago, and continues to be read today.",
      "In the modern era, writers such as Natsume Soseki and Dazai Osamu portrayed the loneliness and contradictions of humans struggling in modern society. Their works resonate across eras.",
      "A theme often seen in Japanese literature is \"impermanence.\" The sense that beautiful things eventually change is frequently expressed through cherry blossoms and autumn scenery.",
      "In addition, \"I-novels\" — works written based on the author's own experiences — are also distinctive. The attempt to find deep humanity in small everyday events continues.",
      "Literature is a mirror that reflects the times, while also conveying universal human nature. By reading Japanese works, one can encounter the culture beyond the words."
    ],
    questions: [
      {
        q: "古典文学の代表として挙げられているのは何ですか。",
        choices: ["「源氏物語」", "「平家物語」", "「竹取物語」", "「今昔物語」"],
        answerIndex: 0,
        explanation: "「古典文学の代表である『源氏物語』」と書かれています。"
      },
      {
        q: "近代の作家として本文で挙げられているのは誰ですか。",
        choices: ["夏目漱石と太宰治", "宮沢賢治と芥川龍之介", "三島由紀夫と川端康成", "村上春樹と宮部みゆき"],
        answerIndex: 0,
        explanation: "「夏目漱石や太宰治などの作家」とあります。"
      },
      {
        q: "日本文学によく見られる主題は何ですか。",
        choices: ["革命", "無常", "征服", "富の蓄積"],
        answerIndex: 1,
        explanation: "「無常」がよく見られる主題として挙げられています。"
      },
      {
        q: "私小説の特徴は何ですか。",
        choices: ["作者自身の経験を元に書かれること", "未来を予測する話であること", "外国を舞台にすること", "動物を主人公にすること"],
        answerIndex: 0,
        explanation: "「作者自身の経験を元に書かれる作品」と述べられています。"
      },
      {
        q: "本文は文学をどのように捉えていますか。",
        choices: ["単なる娯楽", "時代を映す鏡であり普遍的な人間性を伝えるもの", "歴史の記録でしかない", "外国語学習の道具"],
        answerIndex: 1,
        explanation: "「時代を映す鏡であると同時に、普遍的な人間の姿を伝えるもの」とあります。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-45 — Cultural identity
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-45",
    title: "二[ふた]つの文化[ぶんか]の間[あいだ]で生[い]きる",
    titleReading: "ふたつのぶんかのあいだでいきる",
    level: "N3",
    summary: "A reflection on people growing up between multiple cultures: their bilingual strengths, struggles with belonging, the idea of the third-culture child, and their role as bridges in a diverse society.",
    estMinutes: 7,
    tags: ["identity", "culture", "bilingual", "society"],
    body: [
      "世界[せかい]のグローバル化[か]が進[すす]む中[なか]、複数[ふくすう]の文化[ぶんか]の間[あいだ]で育[そだ]つ人[ひと]が増[ふ]えています。親[おや]の国籍[こくせき]が違[ちが]う家庭[かてい]や、海外[かいがい]で育[そだ]った日本人[にほんじん]など、その背景[はいけい]は様々[さまざま]です。",
      "こうした人[ひと]たちは、家[いえ]では親[おや]の文化[ぶんか]を、学校[がっこう]では周[まわ]りの文化[ぶんか]を吸収[きゅうしゅう]しながら成長[せいちょう]します。二[ふた]つの言葉[ことば]や価値観[かちかん]を自然[しぜん]に持[も]てるのは大[おお]きな強[つよ]みです。",
      "しかし、自分[じぶん]がどちらの文化[ぶんか]に属[ぞく]するのか迷[まよ]う時[とき]もあります。「本当[ほんとう]の自分[じぶん]はどちらなのか」と問[と]いかける若者[わかもの]は少[すく]なくありません。",
      "一[ひと]つの国[くに]に完全[かんぜん]に当[あ]てはまらないことを、弱[よわ]さだと感[かん]じる人[ひと]もいれば、逆[ぎゃく]に両方[りょうほう]の良[よ]さを併[あわ]せ持[も]つ強[つよ]みだと捉[とら]える人[ひと]もいます。",
      "最近[さいきん]では、「第三[だいさん]の文化[ぶんか]の子[こ]」という言葉[ことば]も知[し]られるようになりました。どちらにも完全[かんぜん]には属[ぞく]さないがゆえに、新[あたら]しい視点[してん]を生[う]み出[だ]せる存在[そんざい]として再評価[さいひょうか]されています。",
      "文化[ぶんか]の境界[きょうかい]を行[い]き来[き]する人[ひと]たちは、これからの社会[しゃかい]に欠[か]かせない橋渡[はしわた]しになるでしょう。自分[じぶん]らしさを認[みと]め合[あ]う社会[しゃかい]が、多様[たよう]な人[ひと]を支[ささ]えています。"
    ],
    translation: [
      "As globalization advances, more people are growing up between multiple cultures. Their backgrounds vary, from families where parents have different nationalities to Japanese people raised abroad.",
      "Such people grow up absorbing their parents' culture at home and the surrounding culture at school. Being able to naturally hold two languages and value systems is a great strength.",
      "However, there are also times when they wonder which culture they belong to. Not a few young people ask themselves, \"Which one is the real me?\"",
      "Some feel that not fitting perfectly into one country is a weakness, while others see it as a strength of holding the best of both.",
      "Recently, the term \"third-culture child\" has also come to be known. Because they do not fully belong to either, they are reevaluated as beings who can produce new perspectives.",
      "People who cross cultural boundaries will become indispensable bridges in the society to come. A society that accepts one another's individuality supports diverse people."
    ],
    questions: [
      {
        q: "本文で挙げられている「複数の文化の間で育つ人」の例は何ですか。",
        choices: ["親の国籍が違う家庭や海外で育った日本人", "都会から地方に引っ越した人", "外国語学校に通う子供", "旅行が好きな人"],
        answerIndex: 0,
        explanation: "「親の国籍が違う家庭や、海外で育った日本人など」とあります。"
      },
      {
        q: "二つの文化の間で育つ人の強みとして挙げられているのは何ですか。",
        choices: ["二つの言葉や価値観を自然に持てること", "常に一番目立つこと", "どちらの国でも有名人になれること", "両親からお金をもらえること"],
        answerIndex: 0,
        explanation: "「二つの言葉や価値観を自然に持てるのは大きな強み」と書かれています。"
      },
      {
        q: "こうした人々が感じる悩みは何ですか。",
        choices: ["自分がどちらの文化に属するか迷うこと", "言葉が全く話せないこと", "学校に行けないこと", "親と仲が悪いこと"],
        answerIndex: 0,
        explanation: "「自分がどちらの文化に属するのか迷う時もある」と述べられています。"
      },
      {
        q: "「第三の文化の子」が再評価されている理由は何ですか。",
        choices: ["両親が金持ちだから", "新しい視点を生み出せるから", "どちらの国でも働けるから", "有名な学校を出ているから"],
        answerIndex: 1,
        explanation: "「新しい視点を生み出せる存在として再評価されている」とあります。"
      },
      {
        q: "本文の結論として最も近いのはどれですか。",
        choices: ["こうした人々は社会に不要だ", "文化の境界を行き来する人々は社会の橋渡しになる", "一つの文化に完全に属すべきだ", "グローバル化は悪いことだ"],
        answerIndex: 1,
        explanation: "「文化の境界を行き来する人たちは、これからの社会に欠かせない橋渡しになるでしょう」とあります。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-46 — Japanese approach to recycling
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-46",
    title: "日本[にほん]のリサイクルの仕組[しく]みと課題[かだい]",
    titleReading: "にほんのりさいくるのしくみとかだい",
    level: "N3",
    summary: "How Japan recycles: meticulous household sorting, PET bottle processing, plastic and paper reborn as new goods, alongside problems of waste exports and the need to rethink the disposable culture itself.",
    estMinutes: 8,
    tags: ["recycling", "environment", "waste", "society"],
    body: [
      "日本[にほん]は、資源[しげん]を再生利用[さいせいりよう]するリサイクルの制度[せいど]が比較的[ひかくてき]整備[せいび]された国[くに]です。燃[も]えるごみ、燃[も]えないごみ、資源[しげん]ごみなど、細[こま]かく分別[ぶんべつ]することが家庭[かてい]の習慣[しゅうかん]になっています。",
      "特[とく]にペットボトルは、キャップとラベルを別[べつ]にし、本体[ほんたい]を洗[あら]って潰[つぶ]すことが求[もと]められます。面倒[めんどう]な作業[さぎょう]に見[み]えますが、資源[しげん]を有効[ゆうこう]に使[つか]うための大切[たいせつ]な手順[てじゅん]です。",
      "回収[かいしゅう]されたプラスチックは、新[あたら]しい製品[せいひん]や衣料[いりょう]に生[う]まれ変[か]わります。古[ふる]い紙[かみ]や金属[きんぞく]も再加工[さいかこう]され、資源循環型社会[しげんじゅんかんがたしゃかい]の実現[じつげん]に貢献[こうけん]しています。",
      "しかし、すべてが順調[じゅんちょう]なわけではありません。国内[こくない]で処理[しょり]しきれないごみは一部[いちぶ]輸出[ゆしゅつ]されており、相手国[あいてこく]の環境[かんきょう]に負担[ふたん]をかける問題[もんだい]も指摘[してき]されています。",
      "また、プラスチックの過剰使用[かじょうしよう]そのものを見直[みなお]す動[うご]きも始[はじ]まっています。マイバッグやマイボトルの持[も]ち歩[ある]きが広[ひろ]まり、リユースの意識[いしき]が少[すこ]しずつ根付[ねづ]いています。",
      "リサイクルは、技術[ぎじゅつ]や制度[せいど]だけでなく、一人一人[ひとりひとり]の毎日[まいにち]の選択[せんたく]で支[ささ]えられています。ごみを出[だ]さない社会[しゃかい]をめざすには、使[つか]い捨[す]て文化[ぶんか]そのものを見直[みなお]す必要[ひつよう]があるでしょう。"
    ],
    translation: [
      "Japan is a country with a relatively well-developed recycling system that reuses resources. Sorting waste finely — burnable, non-burnable, recyclable — has become a household habit.",
      "PET bottles in particular require separating the cap and label and washing and crushing the body. It looks like a tedious task, but it is an important step to use resources effectively.",
      "Recovered plastic is reborn into new products and clothing. Old paper and metal are also reprocessed, contributing to realizing a recycling-based society.",
      "However, not everything goes smoothly. Waste that cannot be fully processed domestically is partly exported, and problems are pointed out regarding the burden placed on the environment of receiving countries.",
      "In addition, a movement has begun to review excessive plastic use itself. Bringing one's own bag and bottle is spreading, and awareness of reuse is gradually taking root.",
      "Recycling is supported not only by technology and systems but also by the daily choices of each individual. To aim for a zero-waste society, we need to review the disposable culture itself."
    ],
    questions: [
      {
        q: "日本の家庭で習慣になっていることは何ですか。",
        choices: ["ごみを細かく分別すること", "ごみを全部一緒に出すこと", "ごみを燃やすことだけ", "ごみを埋めること"],
        answerIndex: 0,
        explanation: "「細かく分別することが家庭の習慣になっている」と書かれています。"
      },
      {
        q: "ペットボトルのリサイクルで求められる手順は何ですか。",
        choices: ["そのまま捨てること", "キャップとラベルを別にし、本体を洗って潰すこと", "燃えるごみとして出すこと", "海外に送ること"],
        answerIndex: 1,
        explanation: "「キャップとラベルを別にし、本体を洗って潰すことが求められる」とあります。"
      },
      {
        q: "回収されたプラスチックはどうなりますか。",
        choices: ["全て埋められる", "新しい製品や衣料に生まれ変わる", "そのまま捨てられる", "燃料として燃やされるだけ"],
        answerIndex: 1,
        explanation: "「新しい製品や衣料に生まれ変わる」と述べられています。"
      },
      {
        q: "リサイクルの課題として挙げられているのは何ですか。",
        choices: ["処理しきれないごみが輸出され相手国に負担をかけること", "回収率が低すぎること", "分別する人が多すぎること", "プラスチックが足りないこと"],
        answerIndex: 0,
        explanation: "「国内で処理しきれないごみは一部輸出され、相手国の環境に負担をかける問題」とあります。"
      },
      {
        q: "ゼロごみ社会のために必要とされているのは何ですか。",
        choices: ["リサイクル技術だけ", "使い捨て文化を見直すこと", "ごみを増やすこと", "輸出を増やすこと"],
        answerIndex: 1,
        explanation: "「使い捨て文化そのものを見直す必要がある」と結論づけられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-47 — A historical figure (Fukuzawa Yukichi)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-47",
    title: "福澤[ふくざわ]諭吉[ゆきち]が残[のこ]した教育[きょういく]の理想[りそう]",
    titleReading: "ふくざわゆきちがのこしたきょういくのりそう",
    level: "N3",
    summary: "The life and ideas of Fukuzawa Yukichi: founder of Keio, advocate of independence through learning, author of Gakumon no Susume, and a pioneer of women's education whose ideals still shape modern Japan.",
    estMinutes: 7,
    tags: ["history", "education", "edo period", "biography"],
    body: [
      "福澤[ふくざわ]諭吉[ゆきち]は、江戸[えど]時代[じだい]末[まつ]から明治[めいじ]時代[じだい]にかけて活躍[かつやく]した思想家[しそうか]であり、教育者[きょういくしゃ]です。慶應義塾[けいおうぎじゅく]を創設[そうせつ]し、近代[きんだい]日本[にほん]の教育[きょういく]の基礎[きそ]を築[きず]きました。",
      "彼[かれ]は、西洋[せいよう]の学問[がくもん]を積極的[せっきょくてき]に紹介[しょうかい]し、人[ひと]が独立[どくりつ]して生[い]きる力[ちから]を身[み]につけることの大切[たいせつ]さを説[と]きました。「天[てん]は人[ひと]の上[うえ]に人[ひと]を造[つく]らず」という有名[ゆうめい]な言葉[ことば]がその象徴[しょうちょう]です。",
      "当時[とうじ]の日本[にほん]では、身分[みぶん]によって人[ひと]の将来[しょうらい]が決[き]まるのが普通[ふつう]でした。しかし福澤[ふくざわ]は、学[まな]びによって誰[だれ]でも自分[じぶん]の道[みち]を開[ひら]けると主張[しゅちょう]しました。",
      "彼[かれ]が書[か]いた「学問[がくもん]のすすめ」は、大[おお]きなベストセラーとなり、多[おお]くの人[ひと]に学[まな]ぶ意欲[いよく]を与[あた]えました。難[むずか]しい言葉[ことば]を使[つか]わず、日常[にちじょう]の例[れい]で道理[どうり]を説明[せつめい]したのが特徴[とくちょう]です。",
      "また、女性[じょせい]の教育[きょういく]にも力[ちから]を入[い]れました。女性[じょせい]が知識[ちしき]を身[み]につければ、家庭[かてい]全体[ぜんたい]が豊[ゆた]かになると考[かんが]え、当時[とうじ]としては進[すす]んだ思想[しそう]を示[しめ]しました。",
      "福澤[ふくざわ]諭吉[ゆきち]の考[かんが]えは、現代[げんだい]の教育[きょういく]にも影響[えいきょう]を残[のこ]しています。学[まな]ぶことが人[ひと]を自由[じゆう]にするという信念[しんねん]は、今[いま]でも多[おお]くの人[ひと]に支[ささ]えられています。"
    ],
    translation: [
      "Fukuzawa Yukichi was a thinker and educator active from the end of the Edo period into the Meiji era. He founded Keio Gijuku and laid the foundation of modern Japanese education.",
      "He actively introduced Western learning and taught the importance of acquiring the power to live independently. The famous phrase \"Heaven does not create one person above another\" symbolizes this.",
      "In Japan at the time, it was common for a person's future to be decided by social status. However, Fukuzawa argued that through learning, anyone could open their own path.",
      "\"Gakumon no Susume,\" which he wrote, became a major bestseller and gave many people the motivation to learn. A characteristic was explaining principles with everyday examples without using difficult words.",
      "He also devoted effort to women's education. Believing that if women acquired knowledge, the whole family would become richer, he showed ideas advanced for the time.",
      "Fukuzawa Yukichi's ideas still leave their influence on modern education. The belief that learning frees people is still supported by many today."
    ],
    questions: [
      {
        q: "福澤諭吉は何を創設しましたか。",
        choices: ["慶應義塾", "東京大学", "早稲田大学", "京都大学"],
        answerIndex: 0,
        explanation: "「慶應義塾を創設し」と書かれています。"
      },
      {
        q: "福澤が説いた大切なことは何ですか。",
        choices: ["身分を守ること", "独立して生きる力を身につけること", "西洋の真似をすること", "伝統を捨てること"],
        answerIndex: 1,
        explanation: "「人が独立して生きる力を身につけることの大切さを説いた」とあります。"
      },
      {
        q: "「天は人の上に人を造らず」は何の象徴ですか。",
        choices: ["福澤の思想の象徴", "江戸時代の身分制度の象徴", "戦争の象徴", "経済成長の象徴"],
        answerIndex: 0,
        explanation: "「その象徴」と述べられており、独立の思想を表しています。"
      },
      {
        q: "「学問のすすめ」の特徴として挙げられているのは何ですか。",
        choices: ["難しい言葉を使ったこと", "日常の例で道理を説明したこと", "外国語で書かれたこと", "非常に短かったこと"],
        answerIndex: 1,
        explanation: "「日常の例で道理を説明したのが特徴」と書かれています。"
      },
      {
        q: "福澤の女性教育に対する考えはどうでしたか。",
        choices: ["女性は学ぶべきでないとした", "女性の知識が家庭を豊かにすると考えた", "女性は家事だけすればよいとした", "外国の女性を見習うべきだとした"],
        answerIndex: 1,
        explanation: "「女性が知識を身につければ、家庭全体が豊かになると考えた」とあります。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-48 — Influence of sports in Japanese society
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-48",
    title: "スポーツが結[むす]ぶ日本[にほん]の社会[しゃかい]",
    titleReading: "すぽーつがむすぶにほんのしゃかい",
    level: "N3",
    summary: "Sports in Japan as more than health: school clubs teaching courtesy and cooperation, international success uniting the nation, criticism of harsh training, and the rise of lifelong sports connecting communities.",
    estMinutes: 7,
    tags: ["sports", "society", "culture", "community"],
    body: [
      "日本[にほん]では、野球[やきゅう]やサッカーをはじめ多[おお]くのスポーツが人々[ひとびと]の生活[せいかつ]に根付[ねづ]いています。学校[がっこう]の部活動[ぶかつどう]や地域[ちいき]のクラブを通[とお]じて、子供[こども]の頃[ころ]から親[おや]しむ文化[ぶんか]があります。",
      "スポーツは、単[たん]なる健康維持[けんこういじ]の手段[しゅだん]にとどまらず、礼儀[れいぎ]や協調性[きょうちょうせい]を教[おし]える場[ば]でもあります。試合[しあい]の前[まえ]の挨拶[あいさつ]や、対戦相手[たいせんあいて]への感謝[かんしゃ]は、日本[にほん]のスポーツ文化[ぶんか]の特徴[とくちょう]です。",
      "国際大会[こくさいたいかい]での活躍[かつやく]は、国[くに]全体[ぜんたい]を一[ひと]つにすることがあります。選手[せんしゅ]の頑張[がんば]りが人々[ひとびと]に勇気[ゆうき]を与[あた]え、日常[にちじょう]の話題[わだい]にもなります。",
      "一方[いっぽう]で、過酷[かこく]な練習[れんしゅう]や勝利至上主義[しょうりしじょうしゅぎ]に対[たい]する批判[ひはん]もあります。子供[こども]のスポーツ環境[かんきょう]を守[まも]るため、指導方法[しどうほうほう]を見直[みなお]す動[うご]きが進[すす]んでいます。",
      "また、近年[きんねん]は生涯[しょうがい]スポーツも注目[ちゅうもく]されています。中高年[ちゅうこうねん]がマラソンやテニスを楽[たの]しむことで、健康[けんこう]だけでなく新[あたら]しい人間関係[にんげんかんけい]も築[きず]かれています。",
      "スポーツは、競[きそ]うこと以上[いじょう]に、人[ひと]と人[ひと]を結[むす]び、地域[ちいき]を活気[かっき]づける力[ちから]を持[も]っています。これからも社会[しゃかい]の中[なか]で大切[たいせつ]な役割[やくわり]を果[は]たし続[つづ]けるでしょう。"
    ],
    translation: [
      "In Japan, many sports including baseball and soccer are rooted in people's lives. There is a culture of enjoying them from childhood through school clubs and community clubs.",
      "Sports are not merely a means of maintaining health, but also a place that teaches courtesy and cooperation. Greetings before matches and gratitude to opponents are characteristics of Japan's sports culture.",
      "Success in international competitions can sometimes unite the whole country. Athletes' efforts give people courage and become everyday topics of conversation.",
      "On the other hand, there is also criticism of harsh training and the victory-first mindset. To protect children's sports environments, movements to review coaching methods are advancing.",
      "In addition, lifelong sports have been gaining attention in recent years. As middle-aged and older people enjoy marathon and tennis, not only health but also new human relationships are built.",
      "Sports, more than competition, have the power to connect people and energize communities. They will continue to play an important role in society."
    ],
    questions: [
      {
        q: "日本でスポーツに親しむ文化はどこから始まりますか。",
        choices: ["学校の部活動や地域のクラブ", "プロの試合だけ", "テレビの観戦のみ", "海外留学"],
        answerIndex: 0,
        explanation: "「学校の部活動や地域のクラブを通じて、子供の頃から親しむ文化」とあります。"
      },
      {
        q: "日本のスポーツ文化の特徴として挙げられているのは何ですか。",
        choices: ["試合前の挨拶と対戦相手への感謝", "勝利のみを重視すること", "挨拶をしないこと", "海外選手を無視すること"],
        answerIndex: 0,
        explanation: "「試合の前の挨拶や、対戦相手への感謝は、日本のスポーツ文化の特徴」と書かれています。"
      },
      {
        q: "国際大会での活躍がもたらす影響は何ですか。",
        choices: ["国全体を一つにすること", "選手が引退すること", "観客が減ること", "経済が悪化すること"],
        answerIndex: 0,
        explanation: "「国全体を一つにすることがある」と述べられています。"
      },
      {
        q: "子供のスポーツについて批判されているのは何ですか。",
        choices: ["過酷な練習と勝利至上主義", "練習が少なすぎること", "挨拶が多すぎること", "試合が少なすぎること"],
        answerIndex: 0,
        explanation: "「過酷な練習や勝利至上主義に対する批判もある」とあります。"
      },
      {
        q: "生涯スポーツの利点として挙げられているのは何ですか。",
        choices: ["健康と新しい人間関係が築かれること", "必ず大会で優勝できること", "プロになれること", "給料が上がること"],
        answerIndex: 0,
        explanation: "「健康だけでなく新しい人間関係も築かれている」と書かれています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-49 — A community garden
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-49",
    title: "町[まち]の畑[はたけ]が育[はぐく]む人[ひと]のつながり",
    titleReading: "まちのはたけがはぐくむひとのつながり",
    level: "N3",
    summary: "Urban community gardens bring together people of different ages and jobs to grow vegetables, easing daily stress, teaching children where food comes from, and deepening neighborhood ties through shared harvests.",
    estMinutes: 6,
    tags: ["community", "garden", "urban", "lifestyle"],
    body: [
      "都会[とかい]の空[あ]き地[ち]を利用[りよう]した「市民農園[しみんのうえん]」が、最近[さいきん]人気[にんき]を集[あつ]めています。屋上[おくじょう]や公園[こうえん]の一角[いっかく]に野菜[やさい]を育[そだ]てるスペースが作[つく]られ、多[おお]くの人[ひと]が集[あつ]まります。",
      "ここでは、会社員[かいしゃいん]や学生[がくせい]、主婦[しゅふ]など、年齢[ねんれい]も職業[しょくぎょう]も違[ちが]う人々[ひとびと]が一緒[いっしょ]に土[つち]を触[さわ]ります。普段[ふだん]接点[せってん]のない人[ひと]同士[どうし]が、野菜[やさい]をきっかけに話[はな]すようになります。",
      "種[たね]を蒔[ま]き、水[みず]をやり、雑草[ざっそう]を抜[ぬ]く作業[さぎょう]は、毎日[まいにち]の忙[いそが]しさを忘[わす]れさせる効果[こうか]があります。自然[しぜん]のリズムに合[あ]わせて体[からだ]を動[うご]かすことで、心[こころ]の健康[けんこう]も保[たも]たれると言[い]われています。",
      "子供[こども]たちは、野菜[やさい]がどうやって育[そだ]つのかを実際[じっさい]に経験[けいけん]できます。スーパーの棚[たな]に並[なら]ぶ前[まえ]の姿[すがた]を知[し]ることで、食[た]べ物[もの]への感謝[かんしゃ]の気持[きも]ちも芽生[めば]えると言[い]われています。",
      "収穫[しゅうかく]した野菜[やさい]を分[わ]け合[あ]う場面[ばめん]も大切[たいせつ]です。「これは何[なに]に使[つか]おうか」とレシピを交換[こうかん]し合[あ]うことで、地域[ちいき]のつながりが深[ふか]まっていきます。",
      "小[ちい]さな畑[はたけ]は、単[たん]なる野菜[やさい]の産地[さんち]ではなく、人[ひと]と人[ひと]、人[ひと]と自然[しぜん]をつなぐ場所[ばしょ]です。都会生活[とかいせいかつ]の中[なか]で、こうした緑[みどり]の空間[くうかん]はますます大切[たいせつ]になるでしょう。"
    ],
    translation: [
      "\"Community gardens\" using vacant urban land have recently gained popularity. Spaces for growing vegetables are created in a corner of rooftops or parks, and many people gather.",
      "Here, office workers, students, housewives and others of different ages and occupations touch the soil together. People who usually have no contact come to talk, with vegetables as the trigger.",
      "Sowing seeds, watering, and weeding have the effect of making one forget daily busyness. By moving the body in tune with the rhythm of nature, mental health is also said to be maintained.",
      "Children can experience how vegetables actually grow. By knowing how they look before appearing on supermarket shelves, gratitude toward food is said to sprout.",
      "The scene of sharing harvested vegetables is also important. By exchanging recipes asking \"What should I use this for?\", community ties deepen.",
      "A small field is not merely a source of vegetables, but a place connecting person to person, and people to nature. In urban life, such green spaces will become increasingly important."
    ],
    questions: [
      {
        q: "市民農園はどこに作られていますか。",
        choices: ["屋上や公園の一角", "大型ショッピングモールの中", "学校の教室", "地下の駐車場"],
        answerIndex: 0,
        explanation: "「屋上や公園の一角に野菜を育てるスペースが作られる」とあります。"
      },
      {
        q: "農園に集まる人々はどのような特徴がありますか。",
        choices: ["年齢も職業も違う", "全員が農家出身", "全員が女性", "全員が高齢者"],
        answerIndex: 0,
        explanation: "「年齢も職業も違う人々が一緒に土を触る」と書かれています。"
      },
      {
        q: "畑作業がもたらす効果は何ですか。",
        choices: ["毎日の忙しさを忘れさせる", "給料を増やす", "通勤時間を減らす", "試験に合格させる"],
        answerIndex: 0,
        explanation: "「毎日の忙しさを忘れさせる効果がある」と述べられています。"
      },
      {
        q: "子供にとって市民農園の利点は何ですか。",
        choices: ["野菜がどう育つか経験できること", "お金を稼げること", "免許を取れること", "外国語を学べること"],
        answerIndex: 0,
        explanation: "「野菜がどうやって育つのかを実際に経験できる」とあります。"
      },
      {
        q: "本文によると、小さな畑は何をつなぐ場所ですか。",
        choices: ["人と人、人と自然", "都会と外国", "店と工場", "過去と未来"],
        answerIndex: 0,
        explanation: "「人と人、人と自然をつなぐ場所」と結論づけられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-50 — The philosophy of kaizen
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-50",
    title: "改善[かいぜん]の思想[しそう]と日本[にほん]のものづくり",
    titleReading: "かいぜんのしそうとにほんのものづくり",
    level: "N3",
    summary: "The philosophy of kaizen born in Japanese manufacturing: small daily improvements accumulated by frontline workers, applicable to everyday work, but dangerous if practiced only in form.",
    estMinutes: 8,
    tags: ["kaizen", "philosophy", "manufacturing", "business"],
    body: [
      "「改善[かいぜん]」という言葉[ことば]は、日本[にほん]の製造業[せいぞうぎょう]から世界[せかい]に広[ひろ]まった考[かんが]え方[かた]です。大[おお]きな変化[へんか]を一度[いちど]に起[お]こすのではなく、毎日[まいにち]の小[ちい]さな改善[かいぜん]を積[つ]み重[かさ]ねることが本質[ほんしつ]です。",
      "トヨタなどの工場[こうじょう]では、現場[げんば]の働[はたら]く人[ひと]が自[みずか]ら改善案[かいぜんあん]を出[だ]す仕組[しく]みが長年[ながねん]続[つづ]けられてきました。問題[もんだい]に気付[きづ]いたら、誰[だれ]でも手[て]を上[あ]げて提案[ていあん]できる風土[ふうど]が大切[たいせつ]にされています。",
      "改善[かいぜん]の対象[たいしょう]は、特[とく]に立派[りっぱ]なものとは限[かぎ]りません。工具[こうぐ]の置[お]き場[ば]を変[か]える、動[うご]きを二度[にど]省[はぶ]く、といった小[ちい]さな工夫[くふう]の集積[しゅうせき]が大[おお]きな成果[せいか]を生[う]みます。",
      "この思想[しそう]は、工場[こうじょう]だけでなく日常[にちじょう]の仕事[しごと]にも応用[おうよう]できます。毎日[まいにち]の作業[さぎょう]を見直[みなお]し、「もっと良[よ]くできないか」と問[と]い続[つづ]ける姿勢[しせい]が、個人[こじん]の成長[せいちょう]にもつながります。",
      "一方[いっぽう]で、改善[かいぜん]を形[かたち]だけ行[おこな]うと、現場[げんば]に負担[ふたん]がかかるだけになりかねません。本来[ほんらい]の目的[もくてき]である「人[ひと]を楽[らく]にし、品質[ひんしつ]を上[あ]げる」ことを忘[わす]れてはいけません。",
      "改善[かいぜん]は、特別[とくべつ]な技術[ぎじゅつ]よりも、続[つづ]ける意志[いし]と現場[げんば]の声[こえ]を尊重[そんちょう]する心[こころ]を必要[ひつよう]とします。小[ちい]さな一歩[いっぽ]を大切[たいせつ]にする思想[しそう]は、これからも多[おお]くの場面[ばめん]で役立[やくだ]つでしょう。"
    ],
    translation: [
      "The word \"kaizen\" is an approach that spread from Japan's manufacturing industry to the world. Its essence is not to bring about large change all at once, but to accumulate small daily improvements.",
      "At factories such as Toyota, a system in which frontline workers themselves propose improvement ideas has continued for many years. A culture in which anyone who notices a problem can raise their hand and make a proposal is valued.",
      "The object of kaizen is not necessarily something grand. The accumulation of small ideas — changing where tools are placed, eliminating a redundant motion — produces major results.",
      "This philosophy can be applied not only in factories but also in everyday work. Reviewing daily tasks and continually asking \"Can we do this better?\" also leads to individual growth.",
      "On the other hand, if kaizen is practiced only in form, it can end up merely burdening the field. We must not forget the original purpose of \"making work easier and raising quality.\"",
      "Kaizen requires not special techniques but the will to continue and a spirit that respects the voices of the field. The philosophy of valuing small steps will be useful in many situations to come."
    ],
    questions: [
      {
        q: "改善の本質は何ですか。",
        choices: ["毎日の小さな改善を積み重ねること", "一度に大きな変化を起こすこと", "新しい機械を買うこと", "外部の専門家を頼ること"],
        answerIndex: 0,
        explanation: "「毎日の小さな改善を積み重ねることが本質」と書かれています。"
      },
      {
        q: "トヨタの工場で大切にされている風土は何ですか。",
        choices: ["誰でも改善案を提案できること", "上司の指示だけに従うこと", "改善を一切行わないこと", "外部の意見だけを採用すること"],
        answerIndex: 0,
        explanation: "「誰でも手を上げて提案できる風土が大切にされている」とあります。"
      },
      {
        q: "改善の対象はどのようなものですか。",
        choices: ["特に立派なものとは限らない", "必ず大規模なもの", "高価な機械だけ", "外国の技術だけ"],
        answerIndex: 0,
        explanation: "「改善の対象は、特に立派なものとは限らない」と述べられています。"
      },
      {
        q: "日常の仕事に改善を応用する姿勢は何ですか。",
        choices: ["もっと良くできないかと問い続けること", "一切変えないこと", "他人に任せること", "過去の方法を守るだけ"],
        answerIndex: 0,
        explanation: "「もっと良くできないかと問い続ける姿勢」と書かれています。"
      },
      {
        q: "改善を形だけ行うとどうなりますか。",
        choices: ["現場に負担がかかるだけになりかねない", "必ず成功する", "品質が自動的に上がる", "売上がすぐ増える"],
        answerIndex: 0,
        explanation: "「現場に負担がかかるだけになりかねない」とあります。"
      }
    ]
  }
];
