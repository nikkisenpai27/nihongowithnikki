import type { ListeningData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 20 N3-level listening dialogues (l-n3-81 .. l-n3-100).
// N3 grammar targets: 〜ことになる, 〜ことにする, 〜ようになる, 〜みたい, 〜らしい,
// formal humble/honorific forms (ご〜になる, お〜する), conditionals, 〜てしまう,
// 〜た方がいい, 〜に違いない, 〜上に, 〜うちに, 〜得る, 〜がち, passive/causative.

export const listeningN3E: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n3-81 — At the furniture store
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-81",
    title: "家具屋[かぐや]で",
    level: "N3",
    context: "At a furniture store — a customer and a clerk discuss a sofa and dining set",
    text: "A: 来週[らいしゅう]引[ひ]っ越[こ]しするので、ソファとテーブルを探[さが]しているんですが。\nB: いらっしゃいませ。予算[よさん]はどのくらいですか。\nA: 五万[ごまん]円[えん]ぐらいまでで、置[お]く場所[ばしょ]が狭[せま]いんです。\nB: それなら、こちらのコンパクトなソファはテーブルとセットで四万八千[よんまんはっせん]円[えん]です。\nA: 色[いろ]は選[えら]べますか。部屋[へや]の壁[かべ]が白[しろ]いので暗[くら]めがいいんですが。\nB: はい、ダークグレーとネイビーの二色[にしょく]ございます。\nA: じゃあ、ダークグレーにして、来週[らいしゅう]の土曜日[どようび]に配達[はいたつ]してください。",
    translation: "A: I'm moving next week, so I'm looking for a sofa and a table.\nB: Welcome. About how much is your budget?\nA: Up to about 50,000 yen, and the place to put them is small.\nB: In that case, this compact sofa with the table as a set is 48,000 yen.\nA: Can I choose the color? The room walls are white, so I'd prefer a darker color.\nB: Yes, we have it in dark grey and navy.\nA: Then I'll go with dark grey and have it delivered next Saturday.",
    questions: [
      {
        q: "What is the customer's maximum budget?",
        choices: ["40,000 yen", "48,000 yen", "50,000 yen", "55,000 yen"],
        answerIndex: 2,
        explanation: "A says 五万円ぐらいまでで (up to about 50,000 yen)."
      },
      {
        q: "Why does the customer want a darker color?",
        choices: ["The room is small", "The walls are white", "The room is dark", "A dark color is cheaper"],
        answerIndex: 1,
        explanation: "A says 部屋の壁が白いので暗めがいい (the walls are white, so a darker color is better)."
      },
      {
        q: "How much is the sofa-and-table set?",
        choices: ["40,000 yen", "45,000 yen", "48,000 yen", "50,000 yen"],
        answerIndex: 2,
        explanation: "B says テーブルとセットで四万八千円です (the set with the table is 48,000 yen)."
      },
      {
        q: "When does the customer want the delivery?",
        choices: ["This Saturday", "Next Saturday", "Next Sunday", "Any weekday"],
        answerIndex: 1,
        explanation: "A says 来週の土曜日に配達してください (please deliver next Saturday)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "furniture"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-82 — Discussing a freelance contract
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-82",
    title: "フリーランスの契約[けいやく]",
    level: "N3",
    context: "Two friends discuss a freelance contract that one of them just received",
    text: "A: 今月[こんげつ]からフリーランスとして働[はたら]くことになりました。\nB: おめでとうございます。報酬[ほうしゅう]は案件[あんけん]ごとですか。\nA: はい。ただ、三[さん]ヶ月[げつ]以上[いじょう]続[つづ]くなら月額[げつがく]にしてもいいと言[い]われました。\nB: 良[よ]かったですね。契約[けいやく]書[しょ]はもう確認[かくにん]しましたか。\nA: はい。でも、途中[とちゅう]でキャンセルした場合[ばあい]のルールが曖昧[あいまい]なんです。\nB: それなら、結[むす]ぶ前[まえ]に相手[あいて]に確認[かくにん]した方[ほう]がいいですよ。\nA: 今夜[こんや]、メールで質問[しつもん]してみます。",
    translation: "A: From this month, I'll be working as a freelancer.\nB: Congratulations. Is the payment per project?\nA: Yes. But they said if the work continues for three months or more, it can become monthly.\nB: That's good. Have you already checked the contract?\nA: Yes. But the rules for canceling midway are vague.\nB: In that case, it's better to confirm with the other party before signing.\nA: I'll ask them by email tonight.",
    questions: [
      {
        q: "How is the freelancer's payment currently structured?",
        choices: ["Monthly salary", "Per project", "Hourly wage", "Annual salary"],
        answerIndex: 1,
        explanation: "B asks 報酬は案件ごとですか (is the payment per project) and A says はい (yes)."
      },
      {
        q: "Under what condition can the payment become monthly?",
        choices: ["If work continues three months or more", "If the client is satisfied", "If the fee exceeds 100,000 yen", "If a new contract is signed"],
        answerIndex: 0,
        explanation: "A says 三ヶ月以上続くなら月額にしてもいいと言われました (they said it can be monthly if work continues for three months or more)."
      },
      {
        q: "What is the freelancer worried about?",
        choices: ["The fee is too low", "The cancellation rules are vague", "The deadline is too tight", "There is no contract"],
        answerIndex: 1,
        explanation: "A says 途中でキャンセルした場合のルールが曖昧なんです (the rules for canceling midway are vague)."
      },
      {
        q: "What does B advise?",
        choices: ["Sign the contract immediately", "Confirm clearly with the other party before signing", "Quit the project", "Ask a lawyer to write a new contract"],
        answerIndex: 1,
        explanation: "B says 結ぶ前に相手に確認した方がいいですよ (it's better to confirm with the other party before signing)."
      }
    ],
    estMinutes: 4,
    tags: ["work", "contracts"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-83 — At the recycling center
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-83",
    title: "リサイクルセンターで",
    level: "N3",
    context: "At a recycling center — a resident wants to dispose of old appliances",
    text: "A: 古[ふる]いテレビと洗濯機[せんたくき]を捨[す]てたいんですが。\nB: リサイクル家電[かでん]ですね。テレビが二百円[にひゃくえん]、洗濯機[せんたくき]が五百円[ごひゃくえん]の処分[しょぶん]料[りょう]がかかります。\nA: えっ、お金[かね]がかかるんですか。\nB: はい、家電[かでん]リサイクル法[ほう]で決[き]まっています。\nA: わかりました。どこに置[お]けばいいですか。\nB: あちらの青[あお]い看板[かんばん]の所[ところ]です。",
    translation: "A: I'd like to throw away an old TV and washing machine.\nB: They're recyclable home appliances. There's a 200-yen disposal fee for the TV and 500 yen for the washing machine.\nA: Oh, it costs money?\nB: Yes, it's required by the Home Appliance Recycling Law.\nA: I see. Where should I put them?\nB: At the place with the blue sign over there.",
    questions: [
      {
        q: "What does the resident want to throw away?",
        choices: ["An old TV and a fridge", "An old TV and a washing machine", "An old radio and a washing machine", "A sofa and a TV"],
        answerIndex: 1,
        explanation: "A says 古いテレビと洗濯機を捨てたいんですが (wants to throw away an old TV and washing machine)."
      },
      {
        q: "How much is the disposal fee for the washing machine?",
        choices: ["200 yen", "300 yen", "500 yen", "700 yen"],
        answerIndex: 2,
        explanation: "B says 洗濯機が五百円の処分料がかかります (the washing machine has a 500-yen disposal fee)."
      },
      {
        q: "Why is there a fee for these items?",
        choices: ["They are very heavy", "They are foreign-made", "It is required by the Home Appliance Recycling Law", "The center is short of staff"],
        answerIndex: 2,
        explanation: "B says 家電リサイクル法で決まっています (it is decided by the Home Appliance Recycling Law)."
      },
      {
        q: "Where should the resident place the items?",
        choices: ["At the entrance", "Beside the blue sign", "Behind the building", "By the parking lot"],
        answerIndex: 1,
        explanation: "B says あちらの青い看板の所です (it's the place with the blue sign over there)."
      }
    ],
    estMinutes: 3,
    tags: ["recycling", "appliances"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-84 — Talking about a charity event
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-84",
    title: "チャリティイベントの話[はなし]",
    level: "N3",
    context: "Two friends talk about an upcoming charity event in town",
    text: "A: 来月[らいげつ]、町[まち]でチャリティイベントを開[ひら]くことになりました。\nB: 素晴[すば]らしいですね。何[なに]をするんですか。\nA: 古[ふる]い服[ふく]や本[ほん]を集[あつ]めて安[やす]く売[う]り、お金[かね]を子供[こども]たちの支援[しえん]に使[つか]います。\nB: 私[わたし]も手伝[てつだ]いたいです。土曜日[どようび]なら時間[じかん]があります。\nA: 助[たす]かります。当日[とうじつ]は搬入[はんにゅう]と販売[はんばい]をお願[ねが]いしたいです。\nB: 服[ふく]も何[なん]着[ちゃく]か持[も]っていってもいいですか。\nA: もちろんです。事前[じぜん]に洗[あら]っておいてくださいね。",
    translation: "A: Next month we've decided to hold a charity event in town.\nB: That's wonderful. What will you do?\nA: We'll collect old clothes and books, sell them cheaply, and use the money to support children.\nB: I'd like to help too. I'm free on Saturdays.\nA: That helps a lot. On the day, I'd like to ask you to handle bringing items in and selling them.\nB: Can I also bring a few items of clothing?\nA: Of course. Please wash them beforehand.",
    questions: [
      {
        q: "What will the charity event sell?",
        choices: ["Food and drinks", "Old clothes and books", "Handmade crafts", "Used electronics"],
        answerIndex: 1,
        explanation: "A says 古い服や本を集めて安く売り (we'll collect old clothes and books and sell them cheaply)."
      },
      {
        q: "How will the proceeds be used?",
        choices: ["For a new park", "To support children", "To repair the town hall", "To buy new books"],
        answerIndex: 1,
        explanation: "A says お金を子供たちの支援に使います (the money will be used to support children)."
      },
      {
        q: "When is B available to help?",
        choices: ["On Sundays", "On Saturdays", "On weekdays only", "In the evening only"],
        answerIndex: 1,
        explanation: "B says 土曜日なら時間があります (I have time on Saturdays)."
      },
      {
        q: "What should B do before bringing clothes?",
        choices: ["Fold them neatly", "Wash them in advance", "Sort by color", "Take photos of them"],
        answerIndex: 1,
        explanation: "A says 事前に洗っておいてくださいね (please wash them in advance)."
      }
    ],
    estMinutes: 3,
    tags: ["charity", "community"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-85 — At the passport office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-85",
    title: "パスポートの更新[こうしん]",
    level: "N3",
    context: "At the passport office — a customer applies to renew a passport",
    text: "A: パスポートの更新[こうしん]をお願[ねが]いしたいんですが。\nB: 申込[もうしこみ]書[しょ]はご用意[ようい]されましたか。\nA: まだです。こちらで記入[きにゅう]してもいいですか。\nB: はい。こちらの用紙[ようし]に氏名[しめい]と現住所[げんじゅうしょ]をご記入[きにゅう]ください。\nA: 写真[しゃしん]は自分[じぶん]で用意[ようい]したものを使[つか]えますか。\nB: はい。ただし、六[ろっ]ヶ月[げつ]以内[いない]に撮影[さつえい]したもので、背景[はいけい]が白[しろ]いものに限[かぎ]られます。\nA: わかりました。今日[きょう]は申込[もうしこみ]だけにします。",
    translation: "A: I'd like to renew my passport.\nB: Have you prepared the application form?\nA: Not yet. Can I fill it in here?\nB: Yes. Please fill in your name and current address on this form.\nA: Can I use a photo I prepared myself?\nB: Yes. However, it must be one taken within the last six months, with a white background.\nA: I see. I'll just submit the application today.",
    questions: [
      {
        q: "Why is the customer visiting?",
        choices: ["To apply for a new passport", "To renew a passport", "To report a lost passport", "To change the name on a passport"],
        answerIndex: 1,
        explanation: "A says パスポートの更新をお願いしたいんですが (I'd like to renew my passport)."
      },
      {
        q: "What must the customer fill in on the form?",
        choices: ["Phone number and email", "Name and current address", "Birthplace and job", "Travel plans"],
        answerIndex: 1,
        explanation: "B says 氏名と現住所をご記入ください (please fill in your name and current address)."
      },
      {
        q: "What kind of photo is acceptable?",
        choices: ["Any recent photo", "Taken within six months with a white background", "Taken within one year, any background", "A photo taken by the office"],
        answerIndex: 1,
        explanation: "B says 六ヶ月以内に撮影したもので、背景が白いものに限られます (limited to those taken within six months with a white background)."
      },
      {
        q: "What will the customer do today?",
        choices: ["Submit everything including the photo", "Only submit the application", "Just ask questions", "Pick up the new passport"],
        answerIndex: 1,
        explanation: "A says 今日は申込だけにします (today I'll just submit the application)."
      }
    ],
    estMinutes: 3,
    tags: ["passport", "official business"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-86 — Discussing a mentorship
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-86",
    title: "メンターシップの話[はなし]",
    level: "N3",
    context: "A junior employee and a colleague discuss a new mentorship arrangement",
    text: "A: 来月[らいげつ]から、先輩[せんぱい]の田中[たなか]さんに仕事[しごと]を教[おし]えてもらうことになりました。\nB: 良[よ]かったですね。田中[たなか]さんは経験[けいけん]が豊富[ほうふ]ですから。\nA: でも、毎週[まいしゅう]水曜日[すいようび]の夜[よる]なので、少[すこ]し大変[たいへん]かもしれません。\nB: 話[はなし]を聞[き]くだけでも勉強[べんきょう]になりますよ。出来[でき]るだけメモを取[と]った方[ほう]がいいです。\nA: そうですね。習[なら]ったことを実践[じっせん]するようにします。\nB: きっと半年[はんとし]後[ご]にはずっと成長[せいちょう]しているはずですよ。",
    translation: "A: From next month, my senior Tanaka-san will be teaching me work.\nB: That's great. Tanaka-san has rich experience, after all.\nA: But it's every Wednesday night, so it might be a bit tough.\nB: Even just listening is instructive. You should take notes as much as possible.\nA: You're right. I'll put what I learn into practice.\nB: In half a year, I'm sure you'll have grown a lot.",
    questions: [
      {
        q: "Who will teach A from next month?",
        choices: ["A new colleague", "Senior Tanaka-san", "A manager from another team", "An outside instructor"],
        answerIndex: 1,
        explanation: "A says 先輩の田中さんに仕事を教えてもらうことになりました (senior Tanaka-san will teach me work)."
      },
      {
        q: "When do the mentorship sessions take place?",
        choices: ["Every Monday night", "Every Wednesday night", "Every Friday morning", "Every Sunday afternoon"],
        answerIndex: 1,
        explanation: "A says 毎週水曜日の夜なので (since it's every Wednesday night)."
      },
      {
        q: "What does B recommend A do?",
        choices: ["Skip sessions when busy", "Take as many notes as possible", "Only listen, don't write", "Ask for a different mentor"],
        answerIndex: 1,
        explanation: "B says 出来るだけメモを取った方がいいです (it's better to take notes as much as possible)."
      },
      {
        q: "What does A plan to do with what they learn?",
        choices: ["Save it for later", "Put it directly into practice", "Share it with another colleague", "Write a report on it"],
        answerIndex: 1,
        explanation: "A says 習ったことを実践するようにします (I'll put what I learn into practice)."
      }
    ],
    estMinutes: 3,
    tags: ["work", "mentorship"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-87 — At the print shop
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-87",
    title: "印刷屋[いんさつや]で",
    level: "N3",
    context: "At a print shop — a customer places a rush order for flyers",
    text: "A: このチラシを三百枚[さんびゃくまい]、カラーで印刷[いんさつ]したいんですが。\nB: いつまでに間[ま]に合[あ]いますか。\nA: 明日[あした]の昼[ひる]までにお願[ねが]いします。\nB: それだと特急[とっきゅう]仕上[しあ]げになります。五千円[ごせんえん]です。\nA: 通常[つうじょう]はいくらですか。\nB: 四千円[よんせんえん]です。\nA: じゃあ、特急[とっきゅう]でお願[ねが]いします。",
    translation: "A: I'd like to print 300 of these flyers in color.\nB: When do you need them by?\nA: By noon tomorrow, please.\nB: That would be an express finish. It's 5,000 yen.\nA: How much is the regular price?\nB: 4,000 yen.\nA: Then please do it as express.",
    questions: [
      {
        q: "How many flyers does the customer want?",
        choices: ["200", "300", "500", "1,000"],
        answerIndex: 1,
        explanation: "A says 三百枚、カラーで印刷したいんですが (I'd like to print 300 copies in color)."
      },
      {
        q: "What kind of printing does the customer want?",
        choices: ["Black and white", "Color", "Single-sided only", "Double-sided only"],
        answerIndex: 1,
        explanation: "A says カラーで印刷したいんですが (I'd like to print in color)."
      },
      {
        q: "When does the customer need the flyers?",
        choices: ["By this evening", "By noon tomorrow", "By tomorrow evening", "Within three days"],
        answerIndex: 1,
        explanation: "A says 明日の昼までにお願いします (by noon tomorrow, please)."
      },
      {
        q: "How much is the express service for 300 copies?",
        choices: ["3,000 yen", "4,000 yen", "5,000 yen", "6,000 yen"],
        answerIndex: 2,
        explanation: "B says 特急仕上げになります。五千円です (it'll be an express finish. It's 5,000 yen)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "printing"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-88 — Talking about a bike repair
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-88",
    title: "自転車[じてんしゃ]の修理[しゅうり]",
    level: "N3",
    context: "Two friends discuss a bike with broken brakes",
    text: "A: 自転車[じてんしゃ]のブレーキが効[き]かなくなってしまって。\nB: それは危[あぶ]ないですよ。早[はや]く直[なお]さないと。\nA: 近[ちか]くの自転車屋[じてんしゃや]に持[も]っていこうと思[おも]って。\nB: 私[わたし]の知[し]っている店[みせ]は親切[しんせつ]で安[やす]いですよ。\nA: 場所[ばしょ]を教[おし]えてもらえますか。\nB: 駅[えき]の北口[きたぐち]を出[で]て、右[みぎ]に五分[ごふん]の所[ところ]です。\nA: 今日[きょう]の午後[ごご]に行[い]ってみます。",
    translation: "A: My bike's brakes have stopped working.\nB: That's dangerous. You need to fix it soon.\nA: I'm thinking of taking it to a nearby bike shop.\nB: The shop I know is kind and cheap.\nA: Could you tell me where it is?\nB: It's five minutes to the right after exiting the station's north gate.\nA: I'll go this afternoon.",
    questions: [
      {
        q: "What is wrong with A's bike?",
        choices: ["The tires are flat", "The brakes don't work", "The chain is broken", "The bell is missing"],
        answerIndex: 1,
        explanation: "A says ブレーキが効かなくなってしまって (the brakes have stopped working)."
      },
      {
        q: "How does B react?",
        choices: ["Says it's fine", "Says it's dangerous", "Offers to fix it", "Suggests buying a new one"],
        answerIndex: 1,
        explanation: "B says それは危ないですよ (that's dangerous)."
      },
      {
        q: "What kind of shop does B recommend?",
        choices: ["Cheap but far away", "Kind and cheap", "Expensive but fast", "A shop near the station"],
        answerIndex: 1,
        explanation: "B says 私の知っている店は親切で安いですよ (the shop I know is kind and cheap)."
      },
      {
        q: "Where is the bike shop located?",
        choices: ["Left of the south gate", "Right of the north gate, 5 minutes away", "Inside the station", "Next to the post office"],
        answerIndex: 1,
        explanation: "B says 駅の北口を出て、右に五分の所です (five minutes to the right after the station's north gate)."
      }
    ],
    estMinutes: 3,
    tags: ["transport", "repair"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-89 — At the garden center
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-89",
    title: "園芸店[えんげいてん]で",
    level: "N3",
    context: "At a garden center — a customer looks for a low-care potted plant",
    text: "A: ベランダに置[お]く鉢植[はちう]えを探[さが]しているんですが。\nB: いらっしゃいませ。日当[ひあ]たりはいかがですか。\nA: 午後[ごご]だけ日[ひ]が当[あ]たります。\nB: それなら、サボテンやハーブが強[つよ]いですよ。水[みず]は少[すこ]なめで大丈夫[だいじょうぶ]です。\nA: 世話[せわ]が楽[らく]なものがいいんです。\nB: こちらのローズマリーは育[そだ]てやすい上[うえ]に、香[かお]りも良[よ]いですよ。\nA: じゃあ、それと小[ちい]さい鉢[はち]を一[ひと]つお願[ねが]いします。",
    translation: "A: I'm looking for a potted plant to put on my balcony.\nB: Welcome. How's the sunlight?\nA: It gets sun only in the afternoon.\nB: In that case, cacti or herbs are hardy. A little water is enough.\nA: I'd like something easy to care for.\nB: This rosemary is easy to grow, and on top of that, it smells good.\nA: Then I'll take that and a small pot.",
    questions: [
      {
        q: "Where will the plant be placed?",
        choices: ["In the entrance", "On the balcony", "By the window", "In the kitchen"],
        answerIndex: 1,
        explanation: "A says ベランダに置く鉢植えを探している (looking for a potted plant to put on the balcony)."
      },
      {
        q: "When does the customer's balcony get sunlight?",
        choices: ["Only in the morning", "Only in the afternoon", "All day", "Only in the evening"],
        answerIndex: 1,
        explanation: "A says 午後だけ日が当たります (it gets sun only in the afternoon)."
      },
      {
        q: "Why does B recommend cacti or herbs?",
        choices: ["They are cheap", "They are hardy and need little water", "They grow quickly", "They bloom all year"],
        answerIndex: 1,
        explanation: "B says サボテンやハーブが強いですよ。水は少なめで大丈夫です (cacti or herbs are hardy; a little water is fine)."
      },
      {
        q: "What does the customer buy?",
        choices: ["A cactus and a pot", "Rosemary and a small pot", "Two small pots", "Herbs and a balcony table"],
        answerIndex: 1,
        explanation: "A says それと小さい鉢を一つお願いします (I'll take that [rosemary] and a small pot)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "gardening"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-90 — Discussing a retirement hobby
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-90",
    title: "定年[ていねん]後[ご]の趣味[しゅみ]",
    level: "N3",
    context: "A soon-to-retire worker and a friend discuss possible hobbies",
    text: "A: 来月[らいげつ]、定年[ていねん]退職[たいしょく]するので、趣味[しゅみ]を始[はじ]めようと思[おも]っています。\nB: 結構[けっこう]ですね。何[なに]か決[き]めましたか。\nA: 写真[しゃしん]か陶芸[とうげい]をやろうか迷[まよ]っているんです。\nB: 写真[しゃしん]なら、出[で]かけるきっかけにもなりますよ。\nA: じゃあ、まずデジカメで散歩[さんぽ]してみます。\nB: 公園[こうえん]や川沿[かわぞい]が撮影[さつえい]に向[む]いていますよ。\nA: 週末[しゅうまつ]にでも行[い]ってみます。",
    translation: "A: I'm retiring next month, so I'm thinking of starting a hobby.\nB: That's nice. Have you decided on anything?\nA: I'm torn between photography and pottery.\nB: Photography would give you a reason to go out.\nA: Then I'll try a walk with a digital camera first.\nB: Parks and riversides are great for photography.\nA: I'll go this weekend.",
    questions: [
      {
        q: "Why is A starting a hobby?",
        choices: ["Has a new job", "Is retiring next month", "Has more free time at home", "Wants to meet people"],
        answerIndex: 1,
        explanation: "A says 来月、定年退職するので、趣味を始めようと思っています (I'm retiring next month, so I'm thinking of starting a hobby)."
      },
      {
        q: "What two hobbies is A considering?",
        choices: ["Painting and calligraphy", "Photography and pottery", "Gardening and cooking", "Hiking and fishing"],
        answerIndex: 1,
        explanation: "A says 写真か陶芸をやろうか迷っている (torn between photography and pottery)."
      },
      {
        q: "Why does B recommend photography?",
        choices: ["It is cheaper", "It gives a reason to go out", "It is easier to learn", "It needs no equipment"],
        answerIndex: 1,
        explanation: "B says 写真なら、出かけるきっかけにもなりますよ (with photography, you also have a reason to go out)."
      },
      {
        q: "What will A start with?",
        choices: ["A pottery class", "A walk with a digital camera", "An online photography course", "A trip abroad"],
        answerIndex: 1,
        explanation: "A says まずデジカメで散歩してみます (first I'll try a walk with a digital camera)."
      }
    ],
    estMinutes: 3,
    tags: ["retirement", "hobbies"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-91 — At the telecom shop
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-91",
    title: "携帯[けいたい]電話[でんわ]ショップで",
    level: "N3",
    context: "At a mobile carrier shop — a customer wants to switch phone plans",
    text: "A: 携帯[けいたい]のプランを変[か]えたいんですが。\nB: 今[いま]のプランは何[なに]ですか。\nA: 毎月[まいつき]五[ご]ギガ使[つか]って、七千円[ななせんえん]払[はら]っています。\nB: 新[あたら]しいプランなら、三[さん]ギガで月額[げつがく]二千円[にせんえん]になります。\nA: 三[さん]ギガで足[た]りるかしら。仕事[しごと]でメールをよく使[つか]うんです。\nB: メールだけならあまり使[つか]いません。足[た]りなくなったら五百円[ごひゃくえん]で一[いっ]ギガ買[か]えますよ。\nA: じゃあ、その新[あたら]しいプランに変[か]えてください。",
    translation: "A: I'd like to change my phone plan.\nB: What's your current plan?\nA: I use 5 GB of data a month and pay 7,000 yen.\nB: With the new plan, 3 GB of data is a monthly fee of 2,000 yen.\nA: I wonder if 3 GB is enough. I use email a lot for work.\nB: Just email doesn't use much. If you run short, you can buy 1 GB for 500 yen.\nA: Then please switch me to that new plan.",
    questions: [
      {
        q: "How much data does the customer currently use?",
        choices: ["3 GB", "5 GB", "7 GB", "10 GB"],
        answerIndex: 1,
        explanation: "A says 毎月五ギガ使って (I use 5 GB of data a month)."
      },
      {
        q: "How much does the customer currently pay per month?",
        choices: ["2,000 yen", "5,000 yen", "7,000 yen", "10,000 yen"],
        answerIndex: 2,
        explanation: "A says 七千円払っています (I pay 7,000 yen)."
      },
      {
        q: "How much is the new plan with 3 GB of data?",
        choices: ["1,500 yen", "2,000 yen", "3,000 yen", "5,000 yen"],
        answerIndex: 1,
        explanation: "B says 三ギガで月額二千円になります (the new plan is 3 GB for a monthly fee of 2,000 yen)."
      },
      {
        q: "What can the customer do if data runs short?",
        choices: ["Switch back to the old plan", "Buy 1 GB for 500 yen", "Get 1 GB free", "Pay 1,000 yen for 2 GB"],
        answerIndex: 1,
        explanation: "B says 足りなくなったら五百円で一ギガ買えますよ (if you run short, you can buy 1 GB for 500 yen)."
      }
    ],
    estMinutes: 4,
    tags: ["telecom", "phone plans"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-92 — Talking about a home garden
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-92",
    title: "家庭[かてい]菜園[さいえん]の話[はなし]",
    level: "N3",
    context: "Two friends talk about growing vegetables at home",
    text: "A: 最近[さいきん]、家庭[かてい]菜園[さいえん]を始[はじ]めたんです。\nB: 何[なに]を育[そだ]てていますか。\nA: トマトとキュウリです。毎朝[まいあさ]、水[みず]をやるのが楽[たの]しいんですよ。\nB: 私[わたし]もやってみたいですが、虫[むし]が苦手[にがて]で。\nA: 大丈夫[だいじょうぶ]ですよ。網[あみ]を張[は]れば入[はい]ってきません。\nB: それなら、来年[らいねん]は挑戦[ちょうせん]してみようかな。\nA: はい、一緒[いっしょ]に苗[なえ]を選[えら]びに行[い]きましょう。",
    translation: "A: I recently started a home vegetable garden.\nB: What are you growing?\nA: Tomatoes and cucumbers. Watering them every morning is fun.\nB: I'd like to try it too, but I'm not good with bugs.\nA: It's fine. If you put up netting, they won't get in.\nB: Then maybe I'll give it a try next year.\nA: Yes, let's go pick seedlings together.",
    questions: [
      {
        q: "What hobby did A start recently?",
        choices: ["Flower arranging", "A home vegetable garden", "Bonsai", "Indoor succulents"],
        answerIndex: 1,
        explanation: "A says 家庭菜園を始めたんです (I started a home vegetable garden)."
      },
      {
        q: "What is A growing?",
        choices: ["Tomatoes and peppers", "Tomatoes and cucumbers", "Cucumbers and eggplants", "Strawberries and basil"],
        answerIndex: 1,
        explanation: "A says トマトとキュウリです (tomatoes and cucumbers)."
      },
      {
        q: "Why has B been hesitant to try gardening?",
        choices: ["No space at home", "Dislikes bugs", "Has no time", "Already has too many hobbies"],
        answerIndex: 1,
        explanation: "B says 虫が苦手で (I'm not good with bugs)."
      },
      {
        q: "What does B decide to do?",
        choices: ["Try gardening next year", "Visit A's garden only", "Buy vegetables instead", "Give up on the idea"],
        answerIndex: 0,
        explanation: "B says 来年は挑戦してみようかな (maybe I'll give it a try next year)."
      }
    ],
    estMinutes: 3,
    tags: ["gardening", "hobbies"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-93 — At the barbershop
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-93",
    title: "散髪[さんぱつ]に来[き]た",
    level: "N3",
    context: "At a barbershop — a customer asks for a short summer haircut",
    text: "A: いらっしゃいませ。今日[きょう]はいかがなさいますか。\nB: 全部[ぜんぶ]短[みじか]く切[き]ってください。夏[なつ]なので涼[すず]しくしたいんです。\nA: サイドを刈[か]り上[あ]げて、上[うえ]は少[すこ]し残[のこ]しましょうか。\nB: そうですね。前髪[まえがみ]も短[みじか]くしてください。\nA: わかりました。カラーはかけますか。\nB: いえ、今回[こんかい]は切[き]るだけで結構[けっこう]です。\nA: では始[はじ]めます。少[すこ]し冷[つめ]たいかもしれませんが、我慢[がまん]してくださいね。",
    translation: "A: Welcome. How would you like it today?\nB: Please cut it all short. It's summer, so I want to be cool.\nA: Shall I shave up the sides and leave a little on top?\nB: That sounds good. Please make the bangs short too.\nA: Understood. Would you like color?\nB: No, just a cut this time, thanks.\nA: I'll start then. It may be a bit cold, but please bear with it.",
    questions: [
      {
        q: "Why does B want short hair?",
        choices: ["It's summer and he wants to be cool", "He has a new job", "He's going on a trip", "His hair is damaged"],
        answerIndex: 0,
        explanation: "B says 夏なので涼しくしたいんです (it's summer, so I want to be cool)."
      },
      {
        q: "What does the barber suggest for the top?",
        choices: ["Cut it very short", "Leave a little", "Shave it all off", "Add some color"],
        answerIndex: 1,
        explanation: "A says 上は少し残しましょうか (shall I leave a little on top)."
      },
      {
        q: "Does B want color this time?",
        choices: ["Yes, a light color", "Yes, a dark color", "No, just a cut", "Only if it's free"],
        answerIndex: 2,
        explanation: "B says 今回は切るだけで結構です (just a cut this time is fine)."
      },
      {
        q: "What does the barber ask B to do?",
        choices: ["Bear with the cold water", "Wait for ten minutes", "Pay in advance", "Choose a shampoo"],
        answerIndex: 0,
        explanation: "A says 少し冷たいかもしれませんが、我慢してくださいね (it may be a bit cold, but please bear with it)."
      }
    ],
    estMinutes: 3,
    tags: ["barbershop", "summer"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-94 — Discussing a community event
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-94",
    title: "町内[ちょうない]会[かい]のお祭[まつ]り",
    level: "N3",
    context: "A neighborhood association member asks a neighbor to help with a festival",
    text: "A: 来月[らいげつ]、町内[ちょうない]会[かい]のお祭[まつ]りがあるんですが、手伝[てつだ]ってくれませんか。\nB: もちろんです。何[なに]をすればいいですか。\nA: 屋台[やたい]の準備[じゅんび]と当日[とうじつ]の案内[あんない]をお願[ねが]いしたいんです。\nB: 屋台[やたい]は何時[なんじ]からですか。\nA: 当日[とうじつ]の朝[あさ]八時[はちじ]からです。来週[らいしゅう]の火曜日[かようび]の夜[よる]に打[う]ち合[あ]わせをしましょう。\nB: わかりました。",
    translation: "A: Next month there's a neighborhood association festival. Could you help out?\nB: Of course. What should I do?\nA: I'd like to ask you to prepare the stalls and guide people on the day.\nB: From what time for the stalls?\nA: From 8 AM on the day. Let's have a briefing next Tuesday night.\nB: Understood.",
    questions: [
      {
        q: "What event is happening next month?",
        choices: ["A town meeting", "A neighborhood association festival", "A charity concert", "A sports day"],
        answerIndex: 1,
        explanation: "A says 町内会のお祭りがあるんですが (there's a neighborhood association festival)."
      },
      {
        q: "What does A ask B to do?",
        choices: ["Cook food for visitors", "Prepare stalls and guide people on the day", "Sell tickets in advance", "Clean up after the event"],
        answerIndex: 1,
        explanation: "A says 屋台の準備と当日の案内をお願いしたいんです (I'd like to ask you to prepare the stalls and guide people on the day)."
      },
      {
        q: "When should stall preparation start?",
        choices: ["The night before", "8 AM on the day", "10 AM on the day", "At noon"],
        answerIndex: 1,
        explanation: "A says 当日の朝八時からです (from 8 AM on the day)."
      },
      {
        q: "When will the briefing take place?",
        choices: ["This Sunday", "Next Tuesday night", "Next Saturday morning", "The day before the festival"],
        answerIndex: 1,
        explanation: "A says 来週の火曜日の夜に打ち合わせをしましょう (let's have a briefing next Tuesday night)."
      }
    ],
    estMinutes: 3,
    tags: ["community", "festival"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-95 — At the insurance office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-95",
    title: "保険[ほけん]の見直[みなお]し",
    level: "N3",
    context: "At an insurance office — an expectant parent reviews insurance coverage",
    text: "A: 来月[らいげつ]、子供[こども]が生[う]まれるので、保険[ほけん]の見直[みなお]しをしたいんですが。\nB: おめでとうございます。今[いま]は医療[いりょう]保険[ほけん]に入[はい]っていらっしゃいますよね。\nA: ええ。でも、家族[かぞく]が増[ふ]えるので保障[ほしょう]を増[ふ]やしたいんです。\nB: それなら、学資[がくし]保険[ほけん]と収入[しゅうにゅう]保障[ほしょう]はいかがでしょう。\nA: 毎月[まいつき]の保険料[ほけんりょう]はどのくらいになりますか。\nB: 三千円[さんぜんえん]から五千円[ごせんえん]ぐらいで無理[むり]なく続[つづ]けられますよ。\nA: じゃあ、まず資料[しりょう]をもらって妻[つま]と相談[そうだん]してみます。",
    translation: "A: A child will be born next month, so I'd like to review my insurance.\nB: Congratulations. You're currently enrolled in medical insurance, right?\nA: Yes. But since our family will grow, I'd like to increase our coverage.\nB: In that case, how about an educational insurance and income protection?\nA: About how much would the monthly premium be?\nB: Between 3,000 and 5,000 yen — easy to keep up without strain.\nA: Then I'll take the materials first and discuss it with my wife.",
    questions: [
      {
        q: "Why does A want to review insurance?",
        choices: ["A child will be born next month", "A changed jobs", "A bought a new house", "A turned 40"],
        answerIndex: 0,
        explanation: "A says 来月、子供が生まれるので、保険の見直しをしたいんですが (a child will be born next month, so I'd like to review my insurance)."
      },
      {
        q: "What does B recommend A consider?",
        choices: ["Travel insurance and pet insurance", "Educational insurance and income protection", "Car insurance and fire insurance", "Life insurance only"],
        answerIndex: 1,
        explanation: "B says 学資保険と収入保障はいかがでしょう (how about educational insurance and income protection)."
      },
      {
        q: "What is the estimated monthly premium range?",
        choices: ["1,000 to 2,000 yen", "3,000 to 5,000 yen", "5,000 to 7,000 yen", "Over 10,000 yen"],
        answerIndex: 1,
        explanation: "B says 三千円から五千円ぐらいで (between 3,000 and 5,000 yen)."
      },
      {
        q: "What will A do first?",
        choices: ["Sign up immediately", "Take the materials and consult with his wife", "Compare prices online", "Cancel his current insurance"],
        answerIndex: 1,
        explanation: "A says まず資料をもらって妻と相談してみます (I'll take the materials first and discuss it with my wife)."
      }
    ],
    estMinutes: 4,
    tags: ["insurance", "family"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-96 — Talking about a product warranty
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-96",
    title: "製品[せいひん]保証[ほしょう]",
    level: "N3",
    context: "At an electronics shop support desk — a customer brings a broken computer",
    text: "A: このパソコン、動[うご]かなくなってしまったんです。\nB: いつご購入[こうにゅう]されましたか。\nA: 去年[きょねん]の三月[さんがつ]です。保証書[ほしょうしょ]もあります。\nB: では、一年[いちねん]の無料[むりょう]保証[ほしょう]期間[きかん]内[ない]ですね。\nA: 修理[しゅうり]にはどのくらいかかりますか。\nB: 一週間[いっしゅうかん]から十日[とおか]ほどいただきます。修理[しゅうり]でデータが消[き]える場合[ばあい]もありますので、事前[じぜん]にバックアップをお勧[すす]めします。",
    translation: "A: This computer has stopped working.\nB: When did you purchase it?\nA: March last year. I also have the warranty certificate.\nB: Then it's within the one-year free warranty period.\nA: How long will the repair take?\nB: Usually about a week to ten days. Data may be lost during repair, so we recommend backing up in advance.",
    questions: [
      {
        q: "What happened to the customer's computer?",
        choices: ["The screen cracked", "It stopped working", "It was stolen", "It got a virus"],
        answerIndex: 1,
        explanation: "A says 動かなくなってしまったんです (it has stopped working)."
      },
      {
        q: "When did the customer purchase the computer?",
        choices: ["January this year", "March last year", "March this year", "August last year"],
        answerIndex: 1,
        explanation: "A says 去年の三月です (March last year)."
      },
      {
        q: "How long is the warranty period?",
        choices: ["Six months", "One year", "Two years", "Three years"],
        answerIndex: 1,
        explanation: "B says 一年の無料保証期間内ですね (within the one-year free warranty period)."
      },
      {
        q: "What does B recommend before repair?",
        choices: ["Bringing the receipt", "Backing up the data", "Calling the manufacturer", "Resetting the computer"],
        answerIndex: 1,
        explanation: "B says 修理でデータが消える場合もありますので、事前にバックアップをお勧めします (data may be lost, so we recommend backing up in advance)."
      }
    ],
    estMinutes: 3,
    tags: ["warranty", "electronics"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-97 — At the moving company
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-97",
    title: "引[ひ]っ越[こ]しの見積[みつも]り",
    level: "N3",
    context: "At a moving company — a customer asks for a moving estimate",
    text: "A: 来月[らいげつ]の十五日[じゅうごにち]に引[ひ]っ越[こ]ししたいんですが、見積[みつも]りをお願[ねが]いできますか。\nB: 引[ひ]っ越[こ]し先[さき]はどちらでしょうか。\nA: 東京[とうきょう]から大阪[おおさか]で、段[だん]ボールが二十個[にじゅうこ]、家具[かぐ]が三[みっ]つあります。\nB: 階層[かいそう]はどうなりますか。\nA: 今[いま]は三階[さんかい]、新[あたら]しい方[ほう]は一階[いっかい]です。\nB: わかりました。三日後[みっかご]に正確[せいかく]な見積[みつも]りをご連絡[れんらく]します。\nA: 夜[よる]に連絡[れんらく]してもらえると助[たす]かります。",
    translation: "A: I'd like to move on the 15th of next month. Could I get an estimate?\nB: Where are you moving to?\nA: From Tokyo to Osaka. I have 20 cardboard boxes and three pieces of furniture.\nB: What floors are involved?\nA: My current place is on the third floor, and the new one is on the first floor.\nB: Understood. I'll send you the precise estimate in three days.\nA: It'd help if you contact me in the evening.",
    questions: [
      {
        q: "Where is the customer moving?",
        choices: ["Osaka to Tokyo", "Tokyo to Osaka", "Tokyo to Kyoto", "Osaka to Nagoya"],
        answerIndex: 1,
        explanation: "A says 東京から大阪で (from Tokyo to Osaka)."
      },
      {
        q: "How many cardboard boxes does the customer have?",
        choices: ["10", "15", "20", "30"],
        answerIndex: 2,
        explanation: "A says 段ボールが二十個 (20 cardboard boxes)."
      },
      {
        q: "What floor is the new place on?",
        choices: ["1st floor", "2nd floor", "3rd floor", "5th floor"],
        answerIndex: 0,
        explanation: "A says 新しい方は一階です (the new one is on the first floor)."
      },
      {
        q: "When will the precise estimate arrive?",
        choices: ["The next day", "In three days", "In one week", "On the 15th"],
        answerIndex: 1,
        explanation: "B says 三日後に正確な見積もりをご連絡します (I'll send the precise estimate in three days)."
      }
    ],
    estMinutes: 4,
    tags: ["moving", "estimates"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-98 — Discussing a study group
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-98",
    title: "勉強[べんきょう]会[かい]の話[はなし]",
    level: "N3",
    context: "Two learners plan a Japanese study group",
    text: "A: 日本語[にほんご]の勉強[べんきょう]のために、勉強[べんきょう]会[かい]を作[つく]ろうと思[おも]っているんです。\nB: それはいいですね。私[わたし]も参加[さんか]したいです。\nA: ありがとうございます。毎週[まいしゅう]金曜日[きんようび]の夜[よる]はどうですか。\nB: 金曜日[きんようび]なら大丈夫[だいじょうぶ]です。場所[ばしょ]はどこですか。\nA: 図書館[としょかん]の会議室[かいぎしつ]を予約[よやく]しました。\nB: 何[なに]から始[はじ]めますか。\nA: まず、N3の文法[ぶんぽう]を一緒[いっしょ]に練習[れんしゅう]しましょう。",
    translation: "A: I'm thinking of starting a study group for studying Japanese.\nB: That's a great idea. I'd like to join too.\nA: Thank you. How about every Friday night?\nB: Friday works for me. Where will it be?\nA: I've reserved the library conference room.\nB: What will we start with?\nA: First, let's practice N3 grammar together.",
    questions: [
      {
        q: "What is A planning to start?",
        choices: ["A Japanese class online", "A Japanese study group", "A language exchange app", "A reading club"],
        answerIndex: 1,
        explanation: "A says 勉強会を作ろうと思っているんです (I'm thinking of starting a study group)."
      },
      {
        q: "When will the study group meet?",
        choices: ["Every Monday night", "Every Wednesday night", "Every Friday night", "Every Saturday morning"],
        answerIndex: 2,
        explanation: "A says 毎週金曜日の夜はどうですか (how about every Friday night)."
      },
      {
        q: "Where will the study group meet?",
        choices: ["At a cafe", "At B's house", "In the library conference room", "In a community center"],
        answerIndex: 2,
        explanation: "A says 図書館の会議室を予約しました (I've reserved the library conference room)."
      },
      {
        q: "What will they start with?",
        choices: ["N3 vocabulary", "N3 grammar", "N3 kanji", "N3 reading"],
        answerIndex: 1,
        explanation: "A says まず、N3の文法を一緒に練習しましょう (first, let's practice N3 grammar together)."
      }
    ],
    estMinutes: 3,
    tags: ["study", "japanese"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-99 — At the bakery
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-99",
    title: "パン屋[や]で",
    level: "N3",
    context: "At a bakery — a customer orders bread for breakfast",
    text: "A: いらっしゃいませ。何[なに]になさいますか。\nB: 食[しょく]パンを二[ふた]つとクロワッサンを三[みっ]つお願[ねが]いします。\nA: かしこまりました。今朝[けさ]焼[や]きたてのメロンパンもございますが。\nB: あ、それも二[ふた]つください。全部[ぜんぶ]でいくらですか。\nA: 食[しょく]パンが三百円[さんびゃくえん]、クロワッサンが二百円[にひゃくえん]、メロンパンが二百五十円[にひゃくごじゅうえん]ずつで、合計[ごうけい]二千百円[にせんひゃくえん]です。\nB: クレジットカードは使[つか]えますか。\nA: はい、使[つか]えます。",
    translation: "A: Welcome. What would you like?\nB: Two loaves of sliced bread and three croissants, please.\nA: Certainly. We also have freshly baked melon bread this morning.\nB: Oh, I'll take two of those as well. How much is it altogether?\nA: The sliced bread is 300 yen, croissants 200 yen, melon bread 250 yen each; the total is 2,100 yen.\nB: Can I use a credit card?\nA: Yes, you can.",
    questions: [
      {
        q: "What does B order first?",
        choices: ["Two croissants and three loaves", "Two loaves and three croissants", "Three melon breads", "Two loaves only"],
        answerIndex: 1,
        explanation: "B says 食パンを二つとクロワッサンを三つお願いします (two loaves of sliced bread and three croissants)."
      },
      {
        q: "What does the bakery clerk recommend?",
        choices: ["Croissants", "Freshly baked melon bread", "Sandwich bread", "A baguette"],
        answerIndex: 1,
        explanation: "A says 今朝焼きたてのメロンパンもございますが (we also have freshly baked melon bread this morning)."
      },
      {
        q: "How many melon breads does B buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "B says それも二つください (I'll take two of those as well)."
      },
      {
        q: "What is the total price?",
        choices: ["1,800 yen", "2,000 yen", "2,100 yen", "2,500 yen"],
        answerIndex: 2,
        explanation: "A says 合計二千百円です (the total is 2,100 yen)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "bakery"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-100 — Talking about a weekend market
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-100",
    title: "週末[しゅうまつ]マーケット",
    level: "N3",
    context: "Two friends plan to join a weekend flea market at a nearby park",
    text: "A: 今週[こんしゅう]の土曜日[どようび]、近[ちか]くの公園[こうえん]でフリーマーケットがあるんですよ。\nB: 何時[なんじ]からですか。\nA: 午前[ごぜん]九時[くじ]から午後[ごご]三時[さんじ]までです。\nB: 良[よ]さそうですね。何[なに]を売[う]りますか。\nA: 洋服[ようふく]と本[ほん]、あと手作[てづく]りのアクセサリーを少[すこ]し。\nB: じゃあ、私[わたし]もお菓子[かし]を焼[や]いて持[も]っていきます。\nA: ありがとうございます。一緒[いっしょ]に盛[も]り上[あ]がりましょう。",
    translation: "A: This Saturday there's a flea market at the nearby park.\nB: From what time?\nA: From 9 AM to 3 PM.\nB: That sounds nice. What will you sell?\nA: Clothes and books, plus some handmade accessories.\nB: Then I'll bake some sweets and bring them too.\nA: Thank you. Let's make it a great event together.",
    questions: [
      {
        q: "When does the flea market start?",
        choices: ["8 AM Saturday", "9 AM Saturday", "10 AM Sunday", "9 AM Sunday"],
        answerIndex: 1,
        explanation: "A says 午前九時から午後三時までです (from 9 AM to 3 PM), and it's this Saturday."
      },
      {
        q: "How long does the flea market last?",
        choices: ["Until noon", "Until 3 PM", "Until 5 PM", "Until sunset"],
        answerIndex: 1,
        explanation: "A says 午前九時から午後三時までです (from 9 AM to 3 PM), so it lasts until 3 PM."
      },
      {
        q: "What does A plan to sell?",
        choices: ["Toys and books", "Clothes, books and handmade accessories", "Food and drinks", "Plants and flowers"],
        answerIndex: 1,
        explanation: "A says 洋服と本、あと手作りのアクセサリーを少し (clothes and books, plus some handmade accessories)."
      },
      {
        q: "What will B bring?",
        choices: ["Old clothes", "Homemade sweets", "Books", "Handmade accessories"],
        answerIndex: 1,
        explanation: "B says 私もお菓子を焼いて持っていきます (I'll bake some sweets and bring them too)."
      }
    ],
    estMinutes: 3,
    tags: ["market", "weekend"]
  }
];
