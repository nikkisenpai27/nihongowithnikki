import type { StoryData } from "@/lib/types";

// N2 short stories set F (new batch).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole run. Kana, katakana, digits, and
// punctuation have no brackets. titleReading is full kana with NO brackets.
// N2 grammar targets: 〜どころか, 〜に違いない, 〜限り, 〜次第, 〜に過ぎない,
// 〜かねない, 〜つつある, 〜上で, 〜際, 〜にかけては, 〜わけにはいかない,
// 〜おそれがある, 〜にもかかわらず, 〜に比べ, 〜においては, 〜にとって, etc.
// Topics: philosophical debate, historical documentary, social entrepreneur,
// archaeological dig, bioethics committee, climate summit, media empire,
// prison reform, linguistic study, humanitarian mission.

export const storiesN2NewF: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n2n-51 — A philosophical debate (哲学的論争)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-51",
    title: "普遍[ふへん]か相対[そうたい]か",
    titleReading: "ふへんかそうたいか",
    level: "N2",
    summary: "A graduate student attends a public ethics debate between a universalist professor and a relativist scholar on the nature of morality.",
    estMinutes: 7,
    tags: ["philosophy", "ethics", "debate"],
    body: [
      "先週[せんしゅう]、大学[だいがく]の講堂[こうどう]で倫理学[りんりがく]の公開[こうかい]討論会[とうろんかい]が開[ひら]かれた。テーマは「道徳[どうとく]は普遍的[ふへんてき]か、それとも文化的[ぶんかてき]に相対的[そうたいてき]か」という古典的[こてんてき]な問[と]いであった。",
      "司会[しかい]はまず、両者[りょうしゃ]の立場[たちば]を明示[めいじ]した上[うえ]で、発言[はつげん]の順[じゅん]を決[き]めた。冒頭[ぼうとう]、普遍主義[ふへんしゅぎ]を主張[しゅちょう]する笠原[かさはら]教授[きょうじゅ]が壇上[だんじょう]に立[た]った。",
      "笠原[かさはら]は、虐殺[ぎゃくさつ]や拷問[ごうもん]を非難[ひなん]できるのは、基本的人権[きほんてきじんけん]という普遍的[ふへんてき]な基準[きじゅん]が存在[そんざい]するからに過[す]ぎないと説[と]いた。どの文化[ぶんか]においても、人[ひと]の尊厳[そんげん]を損[そこ]なう行為[こうい]は許[ゆる]されない、という主張[しゅちょう]であった。",
      "対[たい]する相対主義[そうたいしゅぎ]の推[お]し、欧米[おうべい]留学[りゅうがく]の経験[けいけん]を持[も]つ陳[ちん]准教授[じゅんきょうじゅ]は、穏[おだ]やかに反論[はんろん]を始[はじ]めた。彼[かれ]によれば、私[わたし]たちが「普遍的[ふへんてき]」と信[しん]じている道徳[どうとく]の大半[たいはん]は、歴史的[れきしてき]に形成[けいせい]された偏見[へんけん]にすぎない。",
      "笠原[かさはら]は即座[そくざ]に、では奴隷制度[どれいせいど]を正当化[せいとうか]する文化[ぶんか]も認[みと]めるのか、と切[き]り返[かえ]した。討論会[とうろんかい]の空気[くうき]が一瞬[いっしゅん]、張[は]り詰[つ]めた。陳[ちん]はわずかに沈黙[ちんもく]した後[のち]、それを回避[かいひ]する論理[ろんり]を展開[てんかい]した。",
      "私[わたし]は客席[きゃくせき]で、両者[りょうしゃ]の主張[しゅちょう]を必死[ひっし]にメモしていた。どちらかと言[い]えば普遍主義[ふへんしゅぎ]に共感[きょうかん]するものの、陳[ちん]の指摘[してき]にも一理[いちり]あると認[みと]めざるを得[え]なかった。",
      "議論[ぎろん]が白熱[はくねつ]するにつれて、会場[かいじょう]からも鋭[するど]い質問[しつもん]が飛[と]び交[か]った。ある学生[がくせい]は「普遍的[ふへんてき]な道徳[どうとく]を定義[ていぎ]できるのは誰[だれ]か」と問[と]い、別[べつ]の参加者[さんかしゃ]は「多数決[たすうけつ]で決[き]まる真理[しんり]など存在[そんざい]するのか」と続[つづ]いた。",
      "討論会[とうろんかい]の終[お]わりに、司会[しかい]は「結論[けつろん]を出[だ]すこと自体[じたい]が問[と]いの一部[いちぶ]である」と締[し]めくくった。私[わたし]は帰[かえ]り道[みち]、自分[じぶん]の道徳[どうとく]観[かん]を見直[みなお]さずにはいられなかった。"
    ],
    translation: [
      "Last week, a public debate on ethics was held in the university auditorium. The theme was the classic question of whether morality is universal or culturally relative.",
      "The moderator first made both sides' positions explicit and then fixed the speaking order. To begin, Professor Kasahara, who argues for universalism, took the podium.",
      "Kasahara argued that we can denounce massacres and torture only because a universal standard of fundamental human rights exists. In any culture, acts that compromise human dignity must not be permitted, he claimed.",
      "In response, Associate Professor Chin, who had studied abroad in the West, began his rebuttal calmly. According to him, the majority of what we believe to be 'universal' morality is nothing but prejudice formed historically.",
      "Kasahara immediately shot back: would you then accept a culture that justifies slavery? The atmosphere of the debate tightened for an instant. After a brief silence, Chin unfolded a logic to deflect the question.",
      "From the audience, I frantically took notes on both sides' arguments. If anything I leaned toward universalism, yet I had to admit that Chin's points contained some truth.",
      "As the debate heated up, sharp questions flew back and forth from the floor. One student asked who can define universal morality, and another continued, does truth decided by majority vote even exist?",
      "At the end of the debate, the moderator closed by saying that reaching a conclusion is itself part of the question. On my way home, I could not help but reconsider my own moral compass."
    ],
    vocab: [
      { word: "普遍", reading: "ふへん", meaning: "universality" },
      { word: "相対", reading: "そうたい", meaning: "relativity" },
      { word: "倫理学", reading: "りんりがく", meaning: "ethics" },
      { word: "討論会", reading: "とうろんかい", meaning: "debate" },
      { word: "道徳", reading: "どうとく", meaning: "morality" },
      { word: "基準", reading: "きじゅん", meaning: "standard" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "偏見", reading: "へんけん", meaning: "prejudice" },
      { word: "奴隷制度", reading: "どれいせいど", meaning: "slavery system" },
      { word: "正当化", reading: "せいとうか", meaning: "justification" },
      { word: "白熱", reading: "はくねつ", meaning: "white heat; heated" },
      { word: "多数決", reading: "たすうけつ", meaning: "majority vote" },
      { word: "真理", reading: "しんり", meaning: "truth" },
      { word: "共感", reading: "きょうかん", meaning: "sympathy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-52 — A historical documentary (歴史ドキュメンタリー)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-52",
    title: "封[ほう]じられた反乱[はんらん]",
    titleReading: "ほうじられたはんらん",
    level: "N2",
    summary: "A documentary broadcast revives a suppressed nineteenth-century peasant uprising in a northern village, restoring the voices erased by official history.",
    estMinutes: 7,
    tags: ["history", "documentary", "rebellion"],
    body: [
      "先月[せんげつ]、テレビ局[きょく]で十九世紀[じゅうきゅうせいき]末[まつ]の農民一揆[のうみんいっき]を描[えが]いたドキュメンタリーが放送[ほうそう]された。制作者[せいさくしゃ]は五年[ごねん]の歳月[さいげつ]をかけて、埋[うず]もれた史実[しじつ]を掘[ほ]り起[お]こしたという。",
      "舞台[ぶたい]は、北国[きたぐに]の寒村[かんそん]であった。明治[めいじ]政府[せいふ]の地租[ちそ]改正[かいせい]により、農民[のうみん]は収穫[しゅうかく]の三割[さんわり]を税金[ぜいきん]として納[おさ]めることを義務[ぎむ]づけられた。",
      "凶作[きょうさく]が続[つづ]いた年[とし]、村[むら]の長老[ちょうろう]たちは役所[やくしょ]に減税[げんぜい]を嘆願[たんがん]したが、門前[もんぜん]で追[お]い返[かえ]された。飢[う]えた子[こ]どもを見[み]かねた若[わか]い農夫[のうふ]の一人[ひとり]が、ついに蜂起[ほうき]を呼[よ]びかけた。",
      "放送[ほうそう]では、当時[とうじ]の農民[のうみん]の日記[にっき]が朗読[ろうどく]された。「米[こめ]はなくとも、誇[ほこ]りは失[うしな]うな」という一節[いちせつ]に、私[わたし]は胸[むね]を打[う]たれた。",
      "政府軍[せいふぐん]の鎮圧[ちんあつ]は残酷[ざんこく]を極[きわ]めた。首謀者[しゅもんしゃ]は全員[ぜんいん]処刑[しょけい]され、残[のこ]った村人[むらびと]にも重税[じゅうぜい]が課[か]された。しかし、この反乱[はんらん]が全国[ぜんこく]の農民運動[のうみんうんどう]に与[あた]えた影響[えいきょう]は計[はか]り知[し]れない。",
      "制作者[せいさくしゃ]は、公式記録[こうしききろく]に残[のこ]された軍[ぐん]側[がわ]の視点[してん]だけでは、真実[しんじつ]の半分[はんぶん]しか見[み]えないと強調[きょうちょう]した。だからこそ、現地[げんち]の口伝[くでん]や古[ふる]い書簡[しょかん]を頼[たよ]りに、民衆[みんしゅう]の声[こえ]を復元[ふくげん]しようとしたのだ。",
      "番組[ばんぐみ]の終[お]わりに、ナレーターは「歴史[れきし]は勝者[しょうしゃ]が書[か]くと言[い]われるが、負[ま]けた者[もの]の記憶[きおく]こそが未来[みらい]を支[ささ]える」と語[かた]った。その言葉[ことば]が、画面[がめん]の向[む]こうから深[ふか]く響[ひび]いた。",
      "私[わたし]はこの番組[ばんぐみ]を見[み]て、歴史[れきし]を学[まな]ぶことの意義[いぎ]を再認識[さいにんしき]した。過去[かこ]の痛[いた]みに目[め]を背[そむ]けるわけにはいかない。それが私[わたし]たちの足元[あしもと]を照[て]らす灯[あか]りになるからだ。"
    ],
    translation: [
      "Last month, a documentary depicting a peasants' uprising at the end of the nineteenth century was broadcast on television. The producer reportedly spent five years unearthing buried historical facts.",
      "The setting was a poor village in the northern provinces. Under the Meiji government's land tax revision, farmers were obliged to pay thirty percent of their harvest as tax.",
      "In a year of consecutive crop failures, the village elders pleaded with the magistrate's office for tax relief but were turned away at the gate. Unable to bear the sight of starving children, one young farmer finally called for an uprising.",
      "The broadcast included a reading from a diary kept by a farmer at the time. The line 'Even if there is no rice, do not lose your pride' struck me to the heart.",
      "The government's suppression was brutally cruel. The ringleaders were all executed, and the remaining villagers were slapped with heavy taxes. Yet the impact of this revolt on peasant movements across the country was immeasurable.",
      "The producer stressed that the official record, which preserves only the military's perspective, reveals no more than half the truth. That is why he relied on local oral traditions and old letters to reconstruct the voices of the common people.",
      "At the end of the program, the narrator said that history is said to be written by the victors, but it is the memory of the defeated that supports the future. Those words resonated deeply from beyond the screen.",
      "Watching this program, I reaffirmed the significance of learning history. We cannot turn away from the pain of the past, for it becomes the light that illuminates the ground beneath our feet."
    ],
    vocab: [
      { word: "反乱", reading: "はんらん", meaning: "rebellion" },
      { word: "農民一揆", reading: "のうみんいっき", meaning: "peasant uprising" },
      { word: "地租改正", reading: "ちそかいせい", meaning: "land tax revision" },
      { word: "凶作", reading: "きょうさく", meaning: "crop failure" },
      { word: "嘆願", reading: "たんがん", meaning: "petition" },
      { word: "蜂起", reading: "ほうき", meaning: "uprising" },
      { word: "鎮圧", reading: "ちんあつ", meaning: "suppression" },
      { word: "首謀者", reading: "しゅもんしゃ", meaning: "ringleader" },
      { word: "処刑", reading: "しょけい", meaning: "execution" },
      { word: "史実", reading: "しじつ", meaning: "historical fact" },
      { word: "口伝", reading: "くでん", meaning: "oral tradition" },
      { word: "書簡", reading: "しょかん", meaning: "letter" },
      { word: "勝者", reading: "しょうしゃ", meaning: "victor" },
      { word: "再認識", reading: "さいにんしき", meaning: "reappraisal" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-53 — A social entrepreneur (社会起業家)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-53",
    title: "文字[もじ]を灯[とも]す起業家[きぎょうか]",
    titleReading: "もじをともすきぎょうか",
    level: "N2",
    summary: "A former classmate builds an NPO that teaches literacy to young dropouts, eventually expanding nationwide through a self-sustaining social business model.",
    estMinutes: 6,
    tags: ["entrepreneurship", "education", "social-impact"],
    body: [
      "三年前[さんねんまえ]、高校時代[こうこうじだい]の同級生[どうきゅうせい]だった真理[まり]が、NPO法人[ほうじん]を立[た]ち上[あ]げた。彼女[かのじょ]の目的[もくてき]は、経済的[けいざいてき]な理由[りゆう]で教育[きょういく]を断念[だんねん]した若者[わかもの]に、無料[むりょう]で読[よ]み書[か]きを教[おし]えることであった。",
      "最初[さいしょ]は資金[しきん]も人手[ひとで]も足[た]りず、活動[かつどう]は困難[こんなん]を極[きわ]めた。彼女[かのじょ]は夜[よる]は飲食店[いんしょくてん]で働[はたら]き、昼[ひる]は公民館[こうみんかん]で教室[きょうしつ]を開[ひら]く日々[ひび]を送[おく]った。",
      "転機[てんき]が訪[おとず]れたのは、地域[ちいき]の新聞[しんぶん]に彼女[かのじょ]の活動[かつどう]が紹介[しょうかい]されてからであった。記事[きじ]を読[よ]んだ大手[おおて]企業[きぎょう]から、寄付[きふ]の申[もう]し出[で]が相次[あいつ]いだ。",
      "真理[まり]は資金[しきん]を得[え]た途端[とたん]に、教室[きょうしつ]の規模[きぼ]を拡大[かくだい]した。しかし、彼女[かのじょ]は単[たん]に寄付[きふ]に頼[たよ]るだけでは、組織[そしき]は長[なが]く続[つづ]かないと考[かんが]えていた。そこで、卒業生[そつぎょうせい]を講師[こうし]として雇[やと]えるソーシャルビジネスの仕組[しく]みを考案[こうあん]した。",
      "卒業生[そつぎょうせい]たちは、自分[じぶん]が教[おし]えられるようになったことで、自信[じしん]を取[と]り戻[もど]したばかりか、次[つぎ]の世代[せだい]にも知識[ちしき]を伝[つた]える役割[やくわり]を担[にな]うようになった。この好循環[こうじゅんかん]こそが、真理[まり]の目指[めざ]す真[しん]の教育[きょういく]の連鎖[れんさ]であった。",
      "しかし、順風満帆[じゅんぷうまんぱん]なわけではなかった。一部[いちぶ]の批判者[ひはんしゃ]からは「無料[むりょう]の教育[きょういく]は市場[しじょう]を歪[ゆが]める」と指摘[してき]された。真理[まり]は議論[ぎろん]を避[さ]けるどころか、むしろ公[おおやけ]の場[ば]で自[みずか]らの理念[りねん]を説[と]いた。",
      "彼女[かのじょ]の言葉[ことば]を聞[き]いた私[わたし]は、利益[りえき]だけを追[お]う社会[しゃかい]に対[たい]する静[しず]かな抵抗[ていこう]を感[かん]じた。真理[まり]にとって、教育[きょういく]は慈善[じぜん]ではなく、権利[けんり]を回復[かいふく]する行為[こうい]なのだ。",
      "今[いま]、彼女[かのじょ]の教室[きょうしつ]は全国[ぜんこく]十[じゅう]都市[とし]に広[ひろ]がり、千人[せんにん]以上[いじょう]の若者[わかもの]が学[まな]んでいる。彼女[かのじょ]は言[い]う。「文字[もじ]を読[よ]めるようになった瞬間[しゅんかん]、世界[せかい]はそれまでの何倍[なんばい]も広[ひろ]がるのです」と。"
    ],
    translation: [
      "Three years ago, Mari, a high school classmate, launched an NPO. Her purpose was to teach reading and writing, free of charge, to young people who had abandoned their education for economic reasons.",
      "At first, neither funds nor staff were sufficient, and the work was extremely difficult. She worked nights at a restaurant and by day ran classes at a community center.",
      "The turning point came after a local newspaper introduced her activities. Major companies that read the article made offers of donation one after another.",
      "As soon as Mari obtained funds, she expanded the scale of the classes. However, she believed that an organization reliant solely on donations would not last long. So she designed a social business scheme that could employ graduates as instructors.",
      "The graduates, by becoming able to teach, not only regained self-confidence but also took on the role of passing knowledge to the next generation. This virtuous cycle was the true chain of education that Mari aimed for.",
      "It was not all smooth sailing, of course. Some critics pointed out that 'free education distorts the market.' Rather than avoiding debate, Mari took the public stage to explain her principles.",
      "Hearing her words, I sensed a quiet resistance to a society that pursues profit alone. For Mari, education was not charity but an act of restoring rights.",
      "Today, her classrooms have spread to ten cities nationwide, and more than a thousand young people are studying. She says, 'The moment you become able to read letters, the world expands many times over.'"
    ],
    vocab: [
      { word: "起業家", reading: "きぎょうか", meaning: "entrepreneur" },
      { word: "法人", reading: "ほうじん", meaning: "corporation" },
      { word: "断念", reading: "だんねん", meaning: "abandonment" },
      { word: "資金", reading: "しきん", meaning: "funds" },
      { word: "寄付", reading: "きふ", meaning: "donation" },
      { word: "規模", reading: "きぼ", meaning: "scale" },
      { word: "卒業生", reading: "そつぎょうせい", meaning: "graduate" },
      { word: "講師", reading: "こうし", meaning: "instructor" },
      { word: "好循環", reading: "こうじゅんかん", meaning: "virtuous cycle" },
      { word: "連鎖", reading: "れんさ", meaning: "chain" },
      { word: "批判者", reading: "ひはんしゃ", meaning: "critic" },
      { word: "慈善", reading: "じぜん", meaning: "charity" },
      { word: "権利", reading: "けんり", meaning: "rights" },
      { word: "回復", reading: "かいふく", meaning: "restoration" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-54 — An archaeological dig (考古学の発掘)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-54",
    title: "土[つち]が語[かた]る千年[せんねん]",
    titleReading: "つちがかたるせんねん",
    level: "N2",
    summary: "A graduate student joins an excavation in a northern basin and uncovers artifacts that speak for a clan left unrecorded in written history.",
    estMinutes: 7,
    tags: ["archaeology", "history", "fieldwork"],
    body: [
      "北[きた]の盆地[ぼんち]で行[おこな]われている発掘[はっくつ]調査[ちょうさ]に、昨夏[さくか]参加[さんか]した。私[わたし]たちの目標[もくひょう]は、千年前[せんねんまえ]にこの地[ち]を治[おさ]めた豪族[ごうぞく]の居館[きょかん]跡[あと]を特定[とくてい]することであった。",
      "朝[あさ]五時[ごじ]に起[お]き、テントの下[もと]で朝食[ちょうしょく]を済[す]ませる。スコップを持[も]った学生[がくせい]たちが、直射日光[ちょくしゃこうじつ]を避[さ]けるため早[はや]めに作業[さぎょう]を始[はじ]める。地層[ちそう]を傷[きず]つけないよう、慎重[しんちょう]に土[つち]を削[けず]っていく。",
      "発掘[はっくつ]は「破壊[はかい]を伴[ともな]う調査[ちょうさ]」である以上[いじょう]、一度[いちど]掘[ほ]り返[かえ]した土層[どそう]は二度[にど]と復元[ふくげん]できない。だからこそ、写真[しゃしん]と図面[ずめん]にすべてを記録[きろく]し、後[のち]の世代[せだい]の研究者[けんきゅうしゃ]が解釈[かいしゃく]できるよう残[のこ]す義務[ぎむ]がある。",
      "三週間[さんしゅうかん]目[め]、作業員[さぎょういん]の一人[ひとり]が、黒[くろ]い土[つち]の中[なか]に埋[うず]もれた土器[どき]の破片[はへん]を見[み]つけた。私[わたし]たちは息[いき]を呑[の]んだ。慎重[しんちょう]に周辺[しゅうへん]をさらうと、勾玉[まがたま]まで姿[すがた]を現[あらわ]した。",
      "出土品[しゅつどひん]は研究室[けんきゅうしつ]に運[はこ]ばれ、年代[ねんだい]測定[そくてい]に回[まわ]された。結果[けっか]、予想[よそう]通[どお]り十世紀[じゅっせいき]後半[こうはん]のものと判明[はんめい]した。この地域[ちいき]が、史書[ししょ]に記[しる]された豪族[ごうぞく]の本拠地[ほんきょち]である可能性[かのうせい]が高[たか]まった。",
      "しかし、発掘[はっくつ]の意義[いぎ]は単[たん]に歴史[れきし]の空白[くうはく]を埋[う]めることにとどまらない。土器[どき]の文様[もんよう]や工具[こうぐ]の形状[けいじょう]から、当時[とうじ]の人々[ひとびと]の生活[せいかつ]や信仰[しんこう]が浮[う]かび上[あ]がってくる。文字[もじ]を持[も]たなかった彼[かれ]らの声[こえ]を、土[つち]が代[か]わりに語[かた]ってくれるのだ。",
      "発掘[はっくつ]現場[げんば]の責任者[せきにんしゃ]は、毎晩[まいばん]テントで学生[がくせい]たちに「遺物[いぶつ]は物[もの]であると同時[どうじ]に、誰[だれ]かの人生[じんせい]である」と説[と]いた。その言葉[ことば]が、作業[さぎょう]に疲[つか]れた体[からだ]に染[し]み込[こ]んだ。",
      "発掘[はっくつ]は秋[あき]に終[お]わり、現場[げんば]は埋[う]め戻[もど]された。しかし、私[わたし]の胸[むね]には千年前[せんねんまえ]の人々[ひとびと]との静[しず]かな繋[つな]がりが残[のこ]った。土[つち]は沈黙[ちんもく]しているように見[み]えて、実[じつ]は雄弁[ゆうべん]な語[かた]り手[て]なのである。"
    ],
    translation: [
      "Last summer I joined an excavation survey underway in a northern basin. Our goal was to identify the site of a powerful clan's residence that had ruled this land a thousand years ago.",
      "We rose at five in the morning and ate breakfast under the tent. Students with shovels started work early to avoid direct sunlight, carefully scraping away the earth so as not to damage the strata.",
      "Excavation is a 'survey that involves destruction'; once a layer is dug up it can never be restored. That is why we are obligated to record everything in photos and drawings so that researchers of later generations can interpret them.",
      "In the third week, one of the workers found fragments of pottery buried in black soil. We held our breath. As we carefully cleared the surroundings, a curved bead even emerged.",
      "The unearthed objects were taken to the laboratory and sent for dating. The result, as expected, dated them to the second half of the tenth century. The likelihood grew that this region was the stronghold of the clan mentioned in historical records.",
      "Yet the significance of excavation does not lie merely in filling a blank in history. The patterns on the pottery and the shape of the tools reveal the lives and faith of the people of that time. Earth speaks on behalf of those who left no writing.",
      "Every evening in the tent, the field director told the students, 'An artifact is a thing, and at the same time, it is someone's life.' Those words sank into our tired bodies.",
      "Excavation ended in autumn, and the site was filled back in. Yet within my chest remained a quiet connection to the people of a thousand years ago. The earth, though it appears silent, is in fact an eloquent storyteller."
    ],
    vocab: [
      { word: "発掘", reading: "はっくつ", meaning: "excavation" },
      { word: "盆地", reading: "ぼんち", meaning: "basin" },
      { word: "豪族", reading: "ごうぞく", meaning: "powerful clan" },
      { word: "居館", reading: "きょかん", meaning: "residence" },
      { word: "破壊", reading: "はかい", meaning: "destruction" },
      { word: "復元", reading: "ふくげん", meaning: "restoration" },
      { word: "出土品", reading: "しゅつどひん", meaning: "excavated item" },
      { word: "土器", reading: "どき", meaning: "earthenware" },
      { word: "勾玉", reading: "まがたま", meaning: "curved bead" },
      { word: "史書", reading: "ししょ", meaning: "historical document" },
      { word: "本拠地", reading: "ほんきょち", meaning: "stronghold" },
      { word: "遺物", reading: "いぶつ", meaning: "artifact" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "雄弁", reading: "ゆうべん", meaning: "eloquent" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-55 — A bioethics committee (生命倫理委員会)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-55",
    title: "命[いのち]の境界[きょうかい]を問[と]う",
    titleReading: "いのちのきょうかいをとう",
    level: "N2",
    summary: "An observer sits in on a university bioethics committee debating embryo editing, where a mother's plea tilts the room toward a cautious compromise.",
    estMinutes: 7,
    tags: ["bioethics", "medicine", "committee"],
    body: [
      "先週[せんしゅう]、大学[だいがく]の生命倫理[せいめいりんり]委員会[いいんかい]に傍聴者[ぼうちょうしゃ]として参加[さんか]した。議題[ぎだい]は、遺伝子[いでんし]治療[ちりょう]における胚[はい]編集[へんしゅう]の可否[かひ]であった。",
      "会議室[かいぎしつ]には、医学者[いがくしゃ]、法律家[ほうりつか]、宗教家[しゅうきょうか]、そして患者[かんじゃ]代表[だいひょう]が同席[どうせき]していた。立場[たちば]の異[こと]なる者[もの]同士[どうし]が、一[ひと]つのテーブルを囲[かこ]むこと自体[じたい]が、この議論[ぎろん]の難[むずか]しさを物語[ものがた]っていた。",
      "委員長[いいんちょう]は冒頭[ぼうとう]、討論[とうろん]の前提[ぜんてい]として「科学的[かがくてき]に可能[かのう]であることと、倫理的[りんりてき]に許容[きょよう]されることは別[べつ]である」と強調[きょうちょう]した。この一言[ひとこと]が、空気[くうき]を引[ひ]き締[し]めた。",
      "遺伝子[いでんし]研究[けんきゅう]の第一人者[だいいちにんしゃ]である佐藤[さとう]教授[きょうじゅ]は、技術[ぎじゅつ]の可能性[かのうせい]を説[と]いた。特定[とくてい]の遺伝疾患[いでんしっかん]を根絶[こんぜつ]できれば、未来[みらい]の患者[かんじゃ]の苦[くる]しみを未然[みぜん]に防[ふせ]げるという主張[しゅちょう]であった。",
      "対[たい]して、宗教[しゅうきょう]を代表[だいひょう]する田村[たむら]牧師[ぼくし]は「人[ひと]の命[いのち]を人[ひと]の手[て]で設計[せっけい]することは、自然[しぜん]の摂理[せつり]への冒涜[ぼうとく]ではないか」と問[と]いかけた。その言葉[ことば]に、患者[かんじゃ]代表[だいひょう]の一人[ひとり]が静[しず]かに顔[かお]を上[あ]げた。",
      "彼女[かのじょ]は、難病[なんびょう]を持[も]つわが子[こ]の治療[ちりょう]を待[ま]つ母親[はおや]であった。「摂理[せつり]という言葉[ことば]で、私[わたし]の子[こ]の命[いのち]が奪[うば]われてよいのか」という訴[うった]えに、委員[いいん]たちは言葉[ことば]を失[うしな]った。",
      "議論[ぎろん]は平行線[へいこうせん]を辿[たど]ったが、最終的[さいしゅうてき]に一[ひと]つの結論[けつろん]に達[たっ]した。それは、臨床応用[りんしょうおうよう]は凍結[とうけつ]するものの、基礎研究[きそけんきゅう]は継続[けいぞく]するという妥協[だきょう]案[あん]であった。誰[だれ]も完全[かんぜん]に満足[まんぞく]はしなかったが、各自[かくじ]が信[しん]じる道[みち]を譲[ゆず]り合[あ]った結果[けっか]であった。",
      "私[わたし]は会議[かいぎ]を終[お]えて、空[そら]を見上[みあ]げた。命[いのち]の境界[きょうかい]を決[き]めるのは、技術[ぎじゅつ]ではなく、私[わたし]たち自身[じしん]の判断[はんだん]である。その責任[せきにん]の重[おも]さに、改[あらた]めて気[き]が引[ひ]けた。"
    ],
    translation: [
      "Last week, I attended a bioethics committee at the university as an observer. The agenda was whether embryo editing in genetic therapy should be permitted.",
      "In the conference room sat medical scientists, legal experts, religious figures, and patient representatives. That people of different stances shared one table itself testified to the difficulty of this discussion.",
      "At the outset, the chair stressed as a premise for the debate that 'what is scientifically possible and what is ethically permissible are distinct.' That single remark tightened the air.",
      "Sato, the leading authority on genetic research, expounded on the technology's potential. If specific hereditary diseases could be eradicated, the suffering of future patients could be prevented, he argued.",
      "In response, Pastor Tamura, representing religion, asked whether designing human life with human hands might not be a blasphemy against the providence of nature. At those words, one of the patient representatives quietly lifted her face.",
      "She was a mother awaiting treatment for her child afflicted with an intractable disease. 'Does the word providence mean my child's life may be taken?' she pleaded, and the committee members lost their words.",
      "The discussion traced parallel lines but eventually reached one conclusion. It was a compromise: clinical application would be frozen, while basic research would continue. No one was fully satisfied, but it was the result of each yielding to the path they believed in.",
      "After the meeting, I looked up at the sky. It is not technology but our own judgment that sets the boundaries of life. I felt daunted anew by the weight of that responsibility."
    ],
    vocab: [
      { word: "生命倫理", reading: "せいめいりんり", meaning: "bioethics" },
      { word: "委員会", reading: "いいんかい", meaning: "committee" },
      { word: "遺伝子", reading: "いでんし", meaning: "gene" },
      { word: "胚", reading: "はい", meaning: "embryo" },
      { word: "編集", reading: "へんしゅう", meaning: "editing" },
      { word: "許容", reading: "きょよう", meaning: "permission; acceptance" },
      { word: "根絶", reading: "こんぜつ", meaning: "eradication" },
      { word: "摂理", reading: "せつり", meaning: "providence" },
      { word: "冒涜", reading: "ぼうとく", meaning: "blasphemy" },
      { word: "平行線", reading: "へいこうせん", meaning: "parallel lines" },
      { word: "妥協案", reading: "だきょうあん", meaning: "compromise proposal" },
      { word: "継続", reading: "けいぞく", meaning: "continuation" },
      { word: "境界", reading: "きょうかい", meaning: "boundary" },
      { word: "判断", reading: "はんだん", meaning: "judgment" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-56 — A climate summit (気候サミット)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-56",
    title: "合意[ごうい]の隙間[すきま]",
    titleReading: "ごういのすきま",
    level: "N2",
    summary: "A reporter covers tense final-hour negotiations at a UN climate summit where island and resource nations clash over phasing out coal power.",
    estMinutes: 6,
    tags: ["climate", "politics", "negotiation"],
    body: [
      "国連[こくれん]気候変動[きこうへんどう]枠組[わくぐみ]条約[じょうやく]の締約国会議[ていやくこくかいぎ]が、北欧[ほくおう]の首都[しゅと]で開[ひら]かれた。百九十[ひゃくきゅうじゅう]以上[いじょう]の国[くに]の代表[だいひょう]が集結[しゅうけつ]し、二時間[にじかん]の閉幕[へいまく]前[まえ]まで交渉[こうしょう]は続[つづ]いた。",
      "議長[ぎちょう]を務[つと]める国[くに]の外相[がいしょう]は、三日[みっか]にわたる協議[きょうぎ]の中[なか]で、各国[かっこく]の主張[しゅちょう]の溝[みぞ]を埋[う]めることに奔走[ほんそう]した。しかし、先進国[せんしんこく]と新興国[しんこうこく]の立場[たちば]の違[ちが]いは、容易[ようい]に埋[う]まるものではなかった。",
      "最大[さいだい]の争点[そうてん]は、石炭[せきたん]火力[かりょく]発電所[はつでんしょ]の段階[だんかい]的[てき]廃止[はいし]の時期[じき]であった。島国[しまぐに]の代表[だいひょう]は「十年以内[じゅうねんいない]に全廃[ぜんぱい]せねば、わが国[くに]は海[うみ]に沈[しず]む」と訴[うった]えた。",
      "一方[いっぽう]、資源国[しげんこく]の代表[だいひょう]は「経済[けいざい]成長[せいちょう]なしに貧困[ひんこん]を脱[だつ]することはできない」と反論[はんろん]した。彼[かれ]らにとって、化石燃料[かせきねんりょう]は、発展[はってん]の足場[あしば]そのものであった。",
      "私[わたし]は取材[しゅざい]席[せき]から、両者[りょうしゃ]の表情[ひょうじょう]を見守[みまも]っていた。議論[ぎろん]が行[ゆ]き詰[づ]まりを見[み]せるたび、議長[ぎちょう]は小[ちい]さな休憩[きゅうけい]を挟[はさ]み、個別[こべつ]に代表[だいひょう]を説得[せっとく]した。その手腕[しゅわん]には、感心[かんしん]するばかりであった。",
      "最終日[さいしゅうび]の深夜[しんや]、妥協[だきょう]案[あん]が提示[ていじ]された。「十年以内[じゅうねんいない]」という明確[めいかく]な数値[すうち]は削除[さくじょ]され、「可能[かのう]な限[かぎ]り早期[そうき]に」という曖昧[あいまい]な表現[ひょうげん]に置[お]き換[か]えられた。",
      "島国[しまぐに]の代表[だいひょう]は、会議場[かいぎじょう]を出[で]る際[さい]、記者団[きしゃだん]に向[む]かって「この合意[ごうい]では、わが国[くに]の子[こ]どもを守[まも]れない」と語[かた]り、目[め]に涙[なみだ]を浮[う]かべた。その姿[すがた]に、私[わたし]は言葉[ことば]を失[うしな]った。",
      "合意[ごうい]は形[かたち]だけのものになったとも言[い]えるが、それでも対話[たいわ]が途絶[とぜつ]しなかったこと自体[じたい]に意義[いぎ]はある。しかし、隙間[すきま]だらけの合意[ごうい]が次[つぎ]の世代[せだい]に託[たく]される責任[せきにん]の重[おも]さを思[おも]うと、胸[むね]が締[し]め付[つ]けられた。"
    ],
    translation: [
      "The Conference of the Parties to the UN Framework Convention on Climate Change was held in a Northern European capital. Representatives of more than 190 countries gathered, and negotiations continued until two hours before the closing.",
      "The foreign minister of the chair country, over three days of consultations, scrambled to bridge the gaps between nations' positions. Yet the divide between developed and emerging nations was not easily closed.",
      "The largest point of contention was the timing for the phased abolition of coal-fired power plants. The representative of an island nation pleaded, 'If we do not abolish them entirely within ten years, our country will sink into the sea.'",
      "Meanwhile, the representative of a resource-rich nation countered, 'Without economic growth, we cannot escape poverty.' For them, fossil fuels were the very foothold of development.",
      "From the press seats, I watched the expressions of both sides. Each time the discussion seemed to reach an impasse, the chair inserted brief breaks and persuaded representatives one on one. I could only admire his skill.",
      "Late on the final day, a compromise was presented. The clear numerical target of 'within ten years' was deleted and replaced with the vague phrase 'as early as possible.'",
      "As the island nation's representative left the hall, he told the press corps, 'With this agreement, we cannot protect our country's children,' and tears welled in his eyes. At that sight, I lost my words.",
      "The agreement could be called a mere formality, yet the fact that dialogue did not break off has its own significance. Still, when I think of the weight of responsibility entrusting a gap-filled agreement to the next generation, my chest tightened."
    ],
    vocab: [
      { word: "気候変動", reading: "きこうへんどう", meaning: "climate change" },
      { word: "枠組", reading: "わくぐみ", meaning: "framework" },
      { word: "条約", reading: "じょうやく", meaning: "treaty" },
      { word: "締約国会議", reading: "ていやくこくかいぎ", meaning: "conference of parties" },
      { word: "集結", reading: "しゅうけつ", meaning: "assembly" },
      { word: "交渉", reading: "こうしょう", meaning: "negotiation" },
      { word: "争点", reading: "そうてん", meaning: "point of contention" },
      { word: "廃止", reading: "はいし", meaning: "abolition" },
      { word: "化石燃料", reading: "かせきねんりょう", meaning: "fossil fuels" },
      { word: "妥協案", reading: "だきょうあん", meaning: "compromise proposal" },
      { word: "削除", reading: "さくじょ", meaning: "deletion" },
      { word: "曖昧", reading: "あいまい", meaning: "ambiguous" },
      { word: "隙間", reading: "すきま", meaning: "gap" },
      { word: "途絶", reading: "とぜつ", meaning: "interruption" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-57 — A media empire (メディア帝国)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-57",
    title: "看板[かんばん]を受[う]け継[つ]ぐ者[もの]",
    titleReading: "かんばんをうけつぐもの",
    level: "N2",
    summary: "The third-generation president of an eighty-year-old newspaper fights internal resistance to merge print and digital operations and restore reader trust.",
    estMinutes: 6,
    tags: ["business", "media", "succession"],
    body: [
      "創業[そうぎょう]八十年[はちじゅうねん]を誇[ほこ]る新聞社[しんぶんしゃ]で、三代目[さんだいめ]社長[しゃちょう]に就任[しゅうにん]した加藤[かとう]は、就任[しゅうにん]挨拶[あいさつ]の舞台[ぶたい]に立[た]っていた。父[ちち]の代[だい]までの時代[じだい]とは違[ちが]う、厳[きび]しい環境[かんきょう]が待[ま]ち受[う]けていた。",
      "デジタル化[か]の波[なみ]に押[お]され、紙[かみ]の新聞[しんぶん]の発行部数[はっこうぶすう]は年々[ねんねん]減少[げんしょう]していた。広告[こうこく]収入[しゅうにゅう]も半減[はんげん]し、経営[けいえい]陣[じん]の間[あいだ]には不安[ふあん]が広[ひろ]がっていた。",
      "加藤[かとう]は改革[かいかく]の第一歩[だいいっぽ]として、編集局[へんしゅうきょく]とデジタル部門[ぶもん]の統合[とうごう]を断行[だんこう]した。長年[ながねん]の慣習[かんしゅう]を変[か]えることに、現場[げんば]から強[つよ]い反発[はんぱつ]が出[で]た。",
      "特[とく]に、部数[ぶすう]を誇[ほこ]りとしてきた古参[こさん]の記者[きしゃ]たちは、記事[きじ]を無料[むりょう]で公開[こうかい]することに強[つよ]く反対[はんたい]した。「新聞[しんぶん]の価値[かち]を下[さ]げる」という彼[かれ]らの主張[しゅちょう]にも、一理[いちり]あった。",
      "加藤[かとう]はそれを否定[ひてい]するどころか、むしろ敬意[けいい]を払[はら]った上[うえ]で、新[あたら]しい方向[ほうこう]を説[と]いた。「紙[かみ]という器[うつわ]が変[か]わっても、真実[しんじつ]を伝[つた]える使命[しめい]は変[か]わらない。私[わたし]たちが守[まも]るべきは、看板[かんばん]ではなく、読者[どくしゃ]の信頼[しんらい]だ」。",
      "説得[せっとく]の末[すえ]、少[すく]なくとも若手[わかて]記者[きしゃ]たちは新[あたら]しい試[こころ]みに賛同[さんどう]した。数[すう]カ月[かげつ]後[ご]、クラウド上[じょう]のデータを活用[かつよう]した調査[ちょうさ]報道[ほうどう]が、大[おお]きな反響[はんきょう]を呼[よ]んだ。",
      "しかし、順風満帆[じゅんぷうまんぱん]な道[みち]ではなかった。一部[いちぶ]のベテラン記者[きしゃ]が退職[たいしょく]し、看板[かんばん]コラムは廃止[はいし]された。それでも加藤[かとう]は、信念[しんねん]を曲[ま]げるわけにはいかなかった。",
      "二年後[にねんご]、新聞社[しんぶんしゃ]は黒字[くろじ]に転換[てんかん]した。読者[どくしゃ]からの評価[ひょうか]も上向[うわむ]いている。加藤[かとう]は今[いま]、次[つぎ]の世代[せだい]に「真実[しんじつ]の重[おも]さ」を伝[つた]える使命[しめい]を果[は]たそうとしている。"
    ],
    translation: [
      "Kato, who took office as the third-generation president of a newspaper company proud of eighty years of founding, stood on the stage for his inaugural address. A harsher environment than the era of his father awaited him.",
      "Swept by the wave of digitalization, the print circulation of the newspaper was declining year by year. Advertising revenue had halved, and unease spread among the management team.",
      "As a first step in reform, Kato forcefully integrated the editorial bureau and the digital division. Strong pushback emerged from the front line at changing long-held customs.",
      "In particular, veteran reporters who had taken pride in circulation figures strongly opposed making articles public for free. Their argument that 'it would lower the value of the newspaper' had some reason to it.",
      "Rather than denying it, Kato paid respect to it and then laid out a new direction. 'Even if the vessel called paper changes, the mission of conveying truth does not. What we must protect is not the brand but the readers' trust.'",
      "After much persuasion, at least the younger reporters endorsed the new initiative. A few months later, an investigative report leveraging data on the cloud stirred a large response.",
      "The path, however, was not smooth sailing. Some veteran reporters retired, and a flagship column was abolished. Still, Kato could not bend his convictions.",
      "Two years later, the newspaper returned to profitability. Reader evaluations are also trending upward. Kato now seeks to fulfill the mission of conveying 'the weight of truth' to the next generation."
    ],
    vocab: [
      { word: "創業", reading: "そうぎょう", meaning: "founding" },
      { word: "就任", reading: "しゅうにん", meaning: "assuming office" },
      { word: "発行部数", reading: "はっこうぶすう", meaning: "circulation" },
      { word: "広告", reading: "こうこく", meaning: "advertising" },
      { word: "経営陣", reading: "けいえいじん", meaning: "management team" },
      { word: "編集局", reading: "へんしゅうきょく", meaning: "editorial bureau" },
      { word: "統合", reading: "とうごう", meaning: "integration" },
      { word: "断行", reading: "だんこう", meaning: "firm execution" },
      { word: "反発", reading: "はんぱつ", meaning: "pushback" },
      { word: "古参", reading: "こさん", meaning: "veteran" },
      { word: "退職", reading: "たいしょく", meaning: "retirement" },
      { word: "廃止", reading: "はいし", meaning: "abolition" },
      { word: "信念", reading: "しんねん", meaning: "conviction" },
      { word: "黒字", reading: "くろじ", meaning: "profit" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-58 — A prison reform (刑務所の改革)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-58",
    title: "鍵[かぎ]を開[あ]ける刑務所[けいむしょ]",
    titleReading: "かぎをあけるけいむしょ",
    level: "N2",
    summary: "A new prison warden replaces a punishment-first doctrine with vocational training, drawing criticism from victims' advocates yet reshaping inmates' futures.",
    estMinutes: 7,
    tags: ["criminal-justice", "reform", "rehabilitation"],
    body: [
      "山間部[さんかんぶ]にある刑務所[けいむしょ]で、新[あたら]しい所長[しょちょう]が赴任[ふにん]した。彼[かれ]の名[な]は黒田[くろだ]。三十年[さんじゅうねん]の刑事[けいじ]経験[けいけん]を持[も]つ彼[かれ]は、前任者[ぜんにんしゃ]の厳罰[げんばつ]主義[しゅぎ]とは異[こと]なる方針[ほうしん]を掲[かか]げた。",
      "黒田[くろだ]が着任[ちゃくにん]してまず驚[おどろ]いたのは、受刑者[じゅけいしゃ]たちの目[め]の光[ひかり]が失[うしな]われていたことである。彼[かれ]らは規則[きそく]に従[したが]ってはいたが、希望[きぼう]という言葉[ことば]は、ここには似合[にあ]わないと思[おも]われた。",
      "黒田[くろだ]は第一歩[だいいっぽ]として、職業訓練[しょくぎょうくんれん]のプログラムを大幅[おおはば]に拡充[かくじゅう]した。木工[もっこう]、農業[のうぎょう]、IT、調理[ちょうり]など、社会[しゃかい]に出[で]てから役立[やくだ]つ技術[ぎじゅつ]を、受刑者[じゅけいしゃ]自[みずか]らが選[えら]べるようにした。",
      "最初[さいしょ]は抵抗[ていこう]する受刑者[じゅけいしゃ]も多[おお]かった。「更生[こうせい]なんて言葉[ことば]は、私[わたし]には無縁[むえん]だ」と吐[は]き捨[す]てる者[もの]もいた。しかし、黒田[くろだ]は決[けっ]して彼[かれ]らを否定[ひてい]しなかった。",
      "二年[にねん]が経[た]ち、少[すく]しずつ変化[へんか]が現[あらわ]れた。ある受刑者[じゅけいしゃ]は、木工[もっこう]の技術[ぎじゅつ]に目覚[めざ]め、釈放[しゃくほう]後[ご]に家具[かぐ]職人[しょくにん]として独立[どくりつ]した。彼[かれ]の手[て]がけた椅子[いす]は、今[いま]も地元[じもと]で評判[ひょうばん]だ。",
      "黒田[くろだ]は、刑務所[けいむしょ]は人[ひと]を閉[と]じ込[こ]める場所[ばしょ]ではなく、社会[しゃかい]に戻[もど]すための準備[じゅんび]の場[ば]であると言[い]い続[つづ]けた。その理念[りねん]は、職員[しょくいん]の間[あいだ]にも浸透[しんとう]していった。",
      "もちろん、批判[ひはん]もあった。「被害者[ひがいしゃ]の気持[きも]ちを考[かんが]えれば、甘[あま]すぎる」という声[こえ]である。黒田[くろだ]はそれを否定[ひてい]するわけにはいかず、被害者[ひがいしゃ]支援[しえん]プログラムも同時[どうじ]に強化[きょうか]した。",
      "黒田[くろだ]は定年[ていねん]退官[たいかん]の際[さい]、次[つぎ]の世代[せだい]にこう言葉[ことば]を残[のこ]した。「鍵[かぎ]をかけるのは容易[ようい]だ。しかし、鍵[かぎ]を開[あ]け、人[ひと]を外[そと]へ導[みちび]くことこそが、真[しん]の刑務官[けいむかん]の仕事[しごと]である」。"
    ],
    translation: [
      "A new warden took office at a prison in a mountainous region. His name was Kuroda. With thirty years of experience in criminal justice, he set forth a policy different from his predecessor's heavy-punishment approach.",
      "The first thing that struck Kuroda upon assuming his post was that the light had gone from the inmates' eyes. They followed the rules, but the word hope seemed out of place here.",
      "As a first step, Kuroda substantially expanded vocational training programs. Carpentry, agriculture, IT, and cooking — inmates could now choose for themselves skills that would serve them in society.",
      "At first, many inmates resisted. Some spat, 'Rehabilitation is a word that has nothing to do with me.' Yet Kuroda never denied them.",
      "Two years passed, and small changes appeared. One inmate awakened to carpentry skills and, after release, became independent as a furniture craftsman. The chairs he made are still renowned locally.",
      "Kuroda kept saying that a prison is not a place to confine people but a place to prepare them to return to society. That philosophy gradually permeated the staff as well.",
      "Of course, there was criticism. The voice that said, 'If you consider the victims' feelings, it's too lenient.' Kuroda could not deny that, and he simultaneously strengthened victim support programs.",
      "Upon retirement, Kuroda left these words for the next generation. 'Locking a door is easy. But opening the door and guiding people outward is the true work of a prison officer.'"
    ],
    vocab: [
      { word: "刑務所", reading: "けいむしょ", meaning: "prison" },
      { word: "所長", reading: "しょちょう", meaning: "director; warden" },
      { word: "赴任", reading: "ふにん", meaning: "assuming post" },
      { word: "厳罰", reading: "げんばつ", meaning: "severe punishment" },
      { word: "受刑者", reading: "じゅけいしゃ", meaning: "inmate" },
      { word: "職業訓練", reading: "しょくぎょうくんれん", meaning: "vocational training" },
      { word: "拡充", reading: "かくじゅう", meaning: "expansion" },
      { word: "更生", reading: "こうせい", meaning: "rehabilitation" },
      { word: "釈放", reading: "しゃくほう", meaning: "release" },
      { word: "職人", reading: "しょくにん", meaning: "craftsman" },
      { word: "浸透", reading: "しんとう", meaning: "permeation" },
      { word: "被害者", reading: "ひがいしゃ", meaning: "victim" },
      { word: "刑務官", reading: "けいむかん", meaning: "prison officer" },
      { word: "容易", reading: "ようい", meaning: "easy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-59 — A linguistic study (言語学の調査)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-59",
    title: "消[き]えゆく方言[ほうげん]の記録[きろく]",
    titleReading: "きえゆくほうげんのきろく",
    level: "N2",
    summary: "A linguistics graduate student spends two years on an isolated island recording a vanishing dialect and the fading world it carries with it.",
    estMinutes: 6,
    tags: ["linguistics", "fieldwork", "culture"],
    body: [
      "言語学[げんごがく]の大学院生[だいがくいんせい]である私[わたし]は、過去[かこ]二年間[にねんかん]、南[みなみ]の孤島[ことう]で独自[どくじ]の方言[ほうげん]を記録[きろく]するため、フィールドワークを続[つづ]けている。",
      "島[しま]には、高齢[こうれい]の住民[じゅうみん]わずか二百人[にひゃくにん]ほどが暮[く]らしている。日常会話[にちじょうかいわ]で方言[ほうげん]を話[はな]せるのは、七十代[ななじゅうだい]以上[いじょう]に限[かぎ]られていた。",
      "当初[とうしょ]、私[わたし]は録音[ろくおん]機材[きざい]を背負[せお]って集落[しゅうらく]を回[まわ]ったが、お年寄[としよ]りたちは「なぜ、わしらの言葉[ことば]なんかを聞[き]きに来[く]るんじゃ」と、不審[ふしん]そうに尋[たず]ねた。",
      "私[わたし]は「言葉[ことば]が消[き]えれば、その土地[とち]の記憶[きおく]も消[き]える。残[のこ]したいのです」と説明[せつめい]した。その説明[せつめい]に、少[すく]しずつ心[こころ]を開[ひら]いてくれる人[ひと]が増[ふ]えた。",
      "ある老婆[ろうば]は、方言[ほうげん]で童謡[どうよう]を歌[うた]ってくれた。その旋律[せんりつ]と発音[はつおん]は、本土[ほんど]では決[けっ]して耳[みみ]にすることのできないものであった。私[わたし]は涙[なみだ]をこらえながら、必死[ひっし]に筆[ふで]を走[はし]らせた。",
      "二年間[にねんかん]の記録[きろく]をまとめた辞典[じてん]は、来春[らいしゅん]に出版[しゅっぱん]される予定[よてい]だ。しかし、私[わたし]にとってこの仕事[しごと]は、単[たん]なる学術[がくじゅつ]成果[せいか]にとどまるものではない。",
      "島[しま]を離[はな]れる日[ひ]、老婆[ろうば]は私[わたし]の手[て]を握[にぎ]り、「あんたが来[き]てくれて、わしらの言葉[ことば]は、もう死[し]なんでよかった」と言[い]った。その言葉[ことば]の重[おも]みに、私[わたし]は声[こえ]をつまらせた。",
      "言葉[ことば]は単[たん]なる道具[どうぐ]ではなく、世界[せかい]を見[み]る窓[まど]である。方言[ほうげん]が消[き]えるということは、一[ひと]つの世界[せかい]が静[しず]かに閉[と]じることを意味[いみ]する。私[わたし]は、その窓[まど]を少[すく]しでも長[なが]く開[あ]けておきたい。"
    ],
    translation: [
      "As a graduate student in linguistics, I have spent the past two years conducting fieldwork on a southern isolated island to record its unique dialect.",
      "About two hundred elderly residents live on the island. Those who can speak the dialect in daily conversation were limited to people in their seventies and older.",
      "At first, I went around the hamlets with recording equipment on my back, but the old people looked suspicious and asked, 'Why come all the way to hear our words?'",
      "I explained, 'If the language dies, the memory of this land dies too. I want to preserve it.' At that explanation, a few people gradually opened their hearts.",
      "An old woman sang a nursery rhyme in the dialect. Its melody and pronunciation were something one could never hear on the mainland. I held back tears and frantically moved my pen.",
      "The dictionary compiled from two years of records is scheduled to be published next spring. But to me, this work is not merely an academic achievement.",
      "On the day I left the island, the old woman gripped my hand and said, 'Because you came, our words did not die.' At the weight of those words, my voice caught.",
      "Language is not a mere tool but a window through which to see the world. The disappearance of a dialect means a world quietly closing. I wish to keep that window open as long as possible."
    ],
    vocab: [
      { word: "言語学", reading: "げんごがく", meaning: "linguistics" },
      { word: "大学院生", reading: "だいがくいんせい", meaning: "graduate student" },
      { word: "孤島", reading: "ことう", meaning: "isolated island" },
      { word: "方言", reading: "ほうげん", meaning: "dialect" },
      { word: "高齢", reading: "こうれい", meaning: "elderly" },
      { word: "住民", reading: "じゅうみん", meaning: "resident" },
      { word: "集落", reading: "しゅうらく", meaning: "hamlet" },
      { word: "不審", reading: "ふしん", meaning: "suspicion" },
      { word: "童謡", reading: "どうよう", meaning: "nursery rhyme" },
      { word: "旋律", reading: "せんりつ", meaning: "melody" },
      { word: "辞典", reading: "じてん", meaning: "dictionary" },
      { word: "学術", reading: "がくじゅつ", meaning: "academic" },
      { word: "老婆", reading: "ろうば", meaning: "old woman" },
      { word: "本土", reading: "ほんど", meaning: "mainland" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-60 — A humanitarian mission (人道支援ミッション)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-60",
    title: "戦火[せんか]の中[なか]の診療所[しんりょうじょ]",
    titleReading: "せんかのなかのしんりょうじょ",
    level: "N2",
    summary: "A journalist accompanies an NGO medical team into a conflict zone, where a wounded girl's loss and the resilience of local nurses leave a lasting mark.",
    estMinutes: 7,
    tags: ["humanitarian", "medicine", "conflict"],
    body: [
      "国境[こっきょう]を越[こ]えた瞬間[しゅんかん]、空[そら]の色[いろ]が変[か]わったように見[み]えた。私[わたし]は、紛争[ふんそう]地帯[ちたい]に医療[いりょう]支援[しえん]を届[とど]けるNGOのチームに同行[どうこう]するため、この地[ち]にやって来[き]た。",
      "現地[げんち]の診療所[しんりょうじょ]は、半壊[はんかい]した校舎[こうしゃ]を転用[てんよう]したものだった。壁[かべ]には弾痕[だんこん]が残[のこ]り、停電[ていでん]が日常[にちじょう]茶飯事[さはんじ]であった。",
      "初日[しょにち]、私[わたし]は大量[たいりょう]の負傷者[ふしょうしゃ]に圧倒[あっとう]された。なかには、歩[ある]くことさえできない子[こ]どももいた。現地[げんち]の看護師[かんごし]たちは、休[やす]む間[ま]もなく働[はたら]き続[つづ]けていた。",
      "チームの医師[いし]は、限[かぎ]られた薬[くすり]と器材[きざい]で工夫[くふう]を重[かさ]ねた。日本[にほん]の病院[びょういん]なら当[あ]たり前[まえ]の処置[しょち]が、ここでは贅沢[ぜいたく]にすぎなかった。",
      "ある夜[よる]、十[じゅう]歳[さい]の少女[しょうじょ]が運[はこ]び込[こ]まれた。彼女[かのじょ]の脚[あし]には、砲弾[ほうだん]の破片[はへん]が埋[うず]まっていた。手術[しゅじゅつ]は明[あ]かりを頼[たよ]りに、四時間[よじかん]かけて行[おこな]われた。",
      "手術[しゅじゅつ]は成功[せいこう]したが、少女[しょうじょ]は目[め]を覚[さ]ますと、母親[はおや]を求[もと]めて泣[な]き始[はじ]めた。母親[はおや]は、数日前[すうじつまえ]の空爆[くうばく]で亡[な]くなっていた。私[わたし]は何[なに]も言[い]えず、ただ彼女[かのじょ]の手[て]を握[にぎ]っていた。",
      "二週間[にしゅうかん]後[ご]、私[わたし]たちは次[つぎ]の任務[にんむ]の地[ち]へ移動[いどう]した。しかし、少女[しょうじょ]の笑顔[えがお]と、現地[げんち]の人々[ひとびと]の逞[たくま]しさは、私[わたし]の胸[むね]に焼[や]き付[つ]いた。",
      "帰国[きこく]した今[いま]、私[わたし]は問[と]い続[つづ]けている。「私[わたし]たちに、何[なに]ができるのか」と。答[こた]えは簡単[かんたん]ではないが、少[すく]なくとも、現場[げんば]に立[た]ち、向[む]き合[あ]うことだけは忘[わす]れたくない。"
    ],
    translation: [
      "The instant we crossed the border, it looked as if the color of the sky had changed. I had come to this place to accompany an NGO team that delivers medical support to a conflict zone.",
      "The local clinic was a half-destroyed schoolhouse repurposed. Bullet holes remained in the walls, and power outages were an everyday affair.",
      "On the first day, I was overwhelmed by the sheer number of wounded. Among them were children who could not even walk. Local nurses worked without a moment's rest.",
      "The team's doctors devised countless workarounds with limited medicine and equipment. Treatments taken for granted in a Japanese hospital were nothing but luxury here.",
      "One night, a ten-year-old girl was brought in. A shell fragment was embedded in her leg. The surgery, lit only by lantern light, took four hours.",
      "The surgery succeeded, but when the girl awoke, she began to cry, calling for her mother. Her mother had died in an airstrike a few days earlier. I could say nothing; I only held her hand.",
      "Two weeks later, we moved to the site of our next mission. Yet the girl's smile and the toughness of the local people were seared into my chest.",
      "Now back in Japan, I keep asking: 'What can we do?' The answer is not simple, but at the very least, I do not want to forget to stand in the field and face the reality."
    ],
    vocab: [
      { word: "国境", reading: "こっきょう", meaning: "border" },
      { word: "紛争", reading: "ふんそう", meaning: "conflict" },
      { word: "地帯", reading: "ちたい", meaning: "zone" },
      { word: "医療", reading: "いりょう", meaning: "medical care" },
      { word: "支援", reading: "しえん", meaning: "support" },
      { word: "同行", reading: "どうこう", meaning: "accompaniment" },
      { word: "診療所", reading: "しんりょうじょ", meaning: "clinic" },
      { word: "半壊", reading: "はんかい", meaning: "half-destroyed" },
      { word: "弾痕", reading: "だんこん", meaning: "bullet hole" },
      { word: "負傷者", reading: "ふしょうしゃ", meaning: "wounded person" },
      { word: "処置", reading: "しょち", meaning: "treatment" },
      { word: "手術", reading: "しゅじゅつ", meaning: "surgery" },
      { word: "砲弾", reading: "ほうだん", meaning: "shell" },
      { word: "任務", reading: "にんむ", meaning: "mission" },
      { word: "帰国", reading: "きこく", meaning: "returning home" }
    ]
  }
];
