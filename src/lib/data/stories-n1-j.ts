import type { StoryData } from "@/lib/types";

// JLPT N1 stories — chunk J (set sx-n1-91 .. sx-n1-100).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole compound. Kana, katakana, digits,
// and punctuation have no brackets. titleReading is full kana with NO brackets.
// Verb okurigana stays outside the bracket: 求[もと]める, 覆[くつがえ]す.
// For katakana+kanji mixes (e.g. サンゴ礁), the bracket reading covers only
// the trailing kanji run: サンゴ礁[しょう].
// N1 grammar targets woven through: 〜に過ぎない, 〜ずにはおかない, 〜まい,
// 〜に足る, 〜限り, 〜とはいえ, 〜を余儀なくされる, 〜たる, 〜てやまない,
// 〜こそ, 〜かねない, 〜にほかならない, 〜てならない, 〜からこそ, 〜にせよ,
// 〜にかかわらず, 〜ずにはいられない, 〜とあれば, 〜までもない, 〜にあって,
// 〜をよそに, 〜極まりない, 〜を禁じ得ない, 〜に限って, 〜が最後.
// Topics: a constitutional law case, a post-human future, a genetic engineering
// debate, an AI ethics hearing, a historical revision, an environmental policy,
// a media reform, a linguistic study, a bio-diversity crisis, a post-work society.

export const storiesN1J: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n1-91 — A constitutional law case (憲法訴訟の庭で)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-91",
    title: "憲法[けんぽう]訴訟[そしょう]の庭[にわ]で",
    titleReading: "けんぽうそしょうのにわで",
    level: "N1",
    summary: "A landmark case before the Grand Bench tests whether a national security provision unjustly curtails the people's right to know.",
    estMinutes: 8,
    tags: ["law", "constitution", "justice"],
    body: [
      "最高裁判所[さいこうさいばんしょ]の大法廷[だいほうてい]で、国[くに]の安全保障法[あんぜんほしょうほう]の違憲判決[いけんはんけつ]を求[もと]める訴訟[そしょう]が審理[しんり]された。",
      "原告側[げんこくがわ]は、当該[とうがい]条項[じょうこう]が国民[こくみん]の知[し]る権利[けんり]を不当[ふとう]に制限[せいげん]するものだと主張[しゅちょう]した。",
      "一方[いっぽう]、政府[せいふ]は、国家[こっか]の存立[そんりつ]を脅[おびや]かす脅威[きょうい]に対処[たいしょ]するためにはやむを得[え]ない措置[そち]であると反論[はんろん]した。",
      "法廷[ほうてい]では、憲法学[けんぽうがく]の権威[けんい]が専門委員[せんもんいいん]として意見[いけん]を述[の]べ、両者[りょうしゃ]の立場[たちば]を峻別[しゅんべつ]すべく論拠[ろんきょ]を整理[せいり]した。",
      "原告[げんこく]の弁護人[べんごにん]は、「秘密保護[ひみつほご]の名[な]の下[もと]に市民[しみん]の監視[かんし]を常態化[じょうたいか]することは、法治国家[ほうちこっか]の根幹[こんかん]を揺[ゆ]るがすに足[た]る」と訴[うた]えた。",
      "政府側[せいふがわ]は反対尋問[はんたいじんもん]の中[なか]で、「法[ほう]の運用[うんよう]が乱[みだ]れたとは限[かぎ]らない」として、違憲[いけん]の主張[しゅちょう]を退[しりぞ]けるよう求[もと]めた。",
      "裁判官[さいばんかん]の一人[ひとり]は、「法[ほう]の目的[もくてき]と手段[しゅだん]の均衡[きんこう]が保[たも]たれているか否[いな]か」という問[と]いを繰[く]り返[かえ]し示[しめ]し、両者[りょうしゃ]を追及[ついきゅう]した。",
      "評議[ひょうぎ]は非公開[ひこうかい]で行[おこな]われ、判決文[はんけつぶん]の字句[じく]をめぐって十数時間[じゅうすうじかん]に及[およ]ぶ議論[ぎろん]が続[つづ]いた。",
      "判決[はんけつ]は、特定[とくてい]条項[じょうこう]について過度[かど]の裁量[さいりょう]を認[みと]めた点[てん]で違憲[いけん]とし、運用基準[うんようきじゅん]の見直[みなお]しを命[めい]じた。",
      "憲法[けんぽう]の理念[りねん]を現実[げんじつ]に定着[ていちゃく]させることこそ、司法[しほう]の役割[やくわり]にほかならないと、判決文[はんけつぶん]の結[むす]びに記[しる]された。"
    ],
    translation: [
      "In the Grand Bench of the Supreme Court, a lawsuit seeking a ruling of unconstitutionality against the national security law was heard.",
      "The plaintiffs argued that the provision in question unjustly restricted the people's right to know.",
      "The government, on the other hand, countered that the measure was an unavoidable means to address threats jeopardizing the existence of the state.",
      "In the courtroom, an authority on constitutional law offered testimony as an expert commissioner, organizing the arguments to delineate the positions of both sides.",
      "The plaintiffs' attorney argued, 'Normalizing surveillance of citizens under the guise of secrecy is enough to shake the very foundations of a state governed by law.'",
      "During cross-examination, the government side insisted that 'it cannot be said that the law's application has run amok,' and sought to dismiss the claim of unconstitutionality.",
      "One of the justices repeatedly pressed both sides with the question, 'Has the balance between the law's purpose and its means been maintained?'",
      "Deliberations were held in camera, with debate lasting over a dozen hours over the very wording of the judgment.",
      "The ruling held that granting excessive discretion to certain provisions was unconstitutional, and ordered a revision of the operational guidelines.",
      "'To anchor the ideals of the constitution in reality is nothing other than the role of the judiciary,' read the closing lines of the judgment."
    ],
    vocab: [
      { word: "最高裁判所", reading: "さいこうさいばんしょ", meaning: "Supreme Court" },
      { word: "大法廷", reading: "だいほうてい", meaning: "Grand Bench" },
      { word: "違憲判決", reading: "いけんはんけつ", meaning: "ruling of unconstitutionality" },
      { word: "原告", reading: "げんこく", meaning: "plaintiff" },
      { word: "存立", reading: "そんりつ", meaning: "existence/maintenance" },
      { word: "脅威", reading: "きょうい", meaning: "threat" },
      { word: "峻別", reading: "しゅんべつ", meaning: "distinction/differentiation" },
      { word: "論拠", reading: "ろんきょ", meaning: "grounds/argument basis" },
      { word: "根幹", reading: "こんかん", meaning: "foundation" },
      { word: "裁量", reading: "さいりょう", meaning: "discretion" },
      { word: "評議", reading: "ひょうぎ", meaning: "deliberation" },
      { word: "定着", reading: "ていちゃく", meaning: "anchoring/establishment" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-92 — A post-human future (人間の彼方)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-92",
    title: "人間[にんげん]の彼方[かなた]",
    titleReading: "にんげんのかなた",
    level: "N1",
    summary: "In a mid-twenty-second-century plaza, citizens whose consciousness has been uploaded to synthetic substrates vote on their own legal personhood.",
    estMinutes: 8,
    tags: ["posthuman", "future", "identity"],
    body: [
      "二十二世紀[にじゅうにせいき]半[なか]ばの春[はる]、首都[しゅと]の円形広場[えんけいひろば]に、意識[いしき]を合成基質[ごうせいしつ]へ移行[いこう]させた初[はじ]めての市民[しみん]たちが集結[しゅうけつ]した。",
      "彼[かれ]らは俗[ぞく]に「移行者[いこうしゃ]」と呼[よ]ばれ、生身[なまみ]の肉体[にくたい]を持[も]たず、光[ひかり]の信号[しんごう]のみを以[もっ]て会話[かいわ]を交[か]わした。",
      "議題[ぎだい]は一[ひと]つ、移行[いこう]した精神[せいしん]に完全[かんぜん]な市民権[しみんけん]を付与[ふよ]するか否[いな]かであった。論争[ろんそう]は三年[さんねん]にわたり、社会[しゃかい]を二[ふた]つに割[わ]っていた。",
      "「我々[われわれ]はもはや人間[にんげん]とは呼[よ]べまい」と一人[ひとり]の移行者[いこうしゃ]は信号[しんごう]で綴[つづ]った。「だが、思考[しこう]する能力[のうりょく]を失[うしな]ったわけではない以上[いじょう]、法[ほう]の保護[ほご]の下[した]に置[お]かれるべきである。」",
      "反対派[はんたいは]の生物学者[せいぶつがくしゃ]は、生身[なまみ]の体[からだ]を持[も]たぬ者[もの]に権利[けんり]を与[あた]えることは、人類[じんるい]という種[しゅ]の定義[ていぎ]そのものを崩壊[ほうかい]させかねないと警告[けいこく]した。",
      "しかし移行者[いこうしゃ]の一部[いちぶ]は、自[みずか]らが感[かん]じる苦痛[くつう]や喜[よろこ]びが生身[なまみ]の人間[にんげん]に劣[おと]るものであるとは到底[とうてい]思[おも]えないと主張[しゅちょう]した。",
      "広場[ひろば]には、賛成[さんせい]と反対[はんたい]の両派[りょうは]が、互[たが]いに激[はげ]しい感情[かんじょう]をぶつけ合[あ]った。ある老[おい]いた哲学者[てつがくしゃ]は、騒[さわ]ぎを眺[なが]めながら「人間[にんげん]とは何[なに]か」という問[と]いを呟[つぶや]いた。",
      "投票[とうひょう]の刻[とき]が近[ちか]づくにつれ、空[そら]には沈黙[ちんもく]が下[お]りた。機械[きかい]の演算音[えんざんおと]だけが低[ひく]く唸[うな]り続[つづ]けていた。",
      "開票[かいひょう]の結果[けっか]、賛成[さんせい]が過半[かはん]を占[し]めた。だが、差[さ]はわずか三千票[さんぜんひょう]に過[す]ぎず、社会[しゃかい]の分裂[ぶんれつ]が癒[い]えたわけではなかった。",
      "移行者[いこうしゃ]の代表[だいひょう]は静[しず]かに演説[えんぜつ]した。「権利[けんり]を得[え]たからといって、我々[われわれ]が人間[にんげん]であると認[みと]められたわけではない。だが、問[と]い続[つづ]ける限[かぎ]り、我々[われわれ]の在[あ]り方[かた]は失[うしな]われまい。」"
    ],
    translation: [
      "In the spring of the mid-twenty-second century, in the circular plaza of the capital, the first citizens to have migrated their consciousness to synthetic substrates gathered.",
      "They were colloquially called 'migrants,' possessing no flesh-and-blood body, conversing only through signals of light.",
      "The agenda was a single item: whether to grant full citizenship to uploaded minds. The dispute had lasted three years, cleaving society in two.",
      "'We can no longer be called human,' one migrant spelled out in signals. 'But inasmuch as we have not lost the capacity to think, we ought to be placed under the protection of the law.'",
      "A biologist from the opposition warned that granting rights to beings without flesh-and-blood bodies might well collapse the very definition of the species called humanity.",
      "Some migrants, however, argued that the suffering and joy they experienced could hardly be considered inferior to those of flesh-and-blood humans.",
      "In the plaza, both factions, for and against, hurled fierce emotions at one another. A certain elderly philosopher, gazing at the tumult, murmured the question, 'What is a human?'",
      "As the moment of voting drew near, silence descended upon the sky. Only the low hum of machine computation continued.",
      "When the ballots were counted, the ayes held a majority. Yet the margin was a mere three thousand votes, and the schism in society was far from healed.",
      "The migrant representative addressed the crowd quietly. 'Having won our rights does not mean we have been recognized as human. But as long as we keep asking the question, our way of being will not be lost.'"
    ],
    vocab: [
      { word: "移行", reading: "いこう", meaning: "migration/transition" },
      { word: "合成基質", reading: "ごうせいしつ", meaning: "synthetic substrate" },
      { word: "集結", reading: "しゅうけつ", meaning: "gathering/assembly" },
      { word: "市民権", reading: "しみんけん", meaning: "citizenship" },
      { word: "付与", reading: "ふよ", meaning: "granting" },
      { word: "綴る", reading: "つづる", meaning: "to spell out/compose" },
      { word: "崩壊", reading: "ほうかい", meaning: "collapse" },
      { word: "警告", reading: "けいこく", meaning: "warning" },
      { word: "賛成", reading: "さんせい", meaning: "approval/aye" },
      { word: "演算", reading: "えんざん", meaning: "computation" },
      { word: "開票", reading: "かいひょう", meaning: "ballot counting" },
      { word: "分裂", reading: "ぶんれつ", meaning: "schism/division" },
      { word: "演説", reading: "えんぜつ", meaning: "speech/address" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-93 — A genetic engineering debate (遺伝子操作をめぐる論争)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-93",
    title: "遺伝子[いでんし]操作[そうさ]をめぐる論争[ろんそう]",
    titleReading: "いでんしそうさをめぐるろんそう",
    level: "N1",
    summary: "An international bioethics summit clashes over whether to permit germline editing to eliminate hereditary disease, and where to draw the line.",
    estMinutes: 9,
    tags: ["bioethics", "genetics", "debate"],
    body: [
      "国連[こくれん]の生命倫理委員会[せいめいりんりいいんかい]が主催[しゅさい]する国際会議[こくさいかいぎ]で、生殖系列[せいしょくけいれつ]の遺伝子編集[いでんしへんしゅう]の可否[かひ]が議論[ぎろん]された。",
      "賛成派[さんせいは]は、致死的[ちしでき]な遺伝病[いでんびょう]を根絶[こんぜつ]するためには、胚[はい]の段階[だんかい]での介入[かいにゅう]が不可避[ふかひ]であると主張[しゅちょう]した。",
      "反対派[はんたいは]は、人間[にんげん]の設計[せっけい]に踏[ふ]み込[こ]むことは、優生思想[ゆうせいしそう]の復活[ふっかつ]に通[つう]じかねないと強[つよ]く反発[はんぱつ]した。",
      "議長[ぎちょう]は両者[りょうしゃ]の意見[いけん]を整理[せいり]した上[うえ]で、技術[ぎじゅつ]の限界[げんかい]と倫理[りんり]の境界[きょうかい]を画[かく]することの難[むずか]しさを指摘[してき]した。",
      "「疾病[しっぺい]の予防[よぼう]という目的[もくてき]は是[ぜ]としても、その先[さき]に拡張[かくちょう]された能力[のうりょく]の強化[きょうか]をどこまで許[ゆる]すか」という問[と]いに、会場[かいじょう]は沈黙[ちんもく]した。",
      "一人[ひとり]の遺伝学者[いでんがくしゃ]は、「技術[ぎじゅつ]の進歩[しんぽ]は倫理[りんり]の議論[ぎろん]を待[ま]ってはくれない」と指摘[してき]し、規制[きせい]の空白期間[くうはくきかん]を埋[う]める必要性[ひつようせい]を説[と]いた。",
      "一方[いっぽう]、人権団体[じんけんだんたい]の代表[だいひょう]は、「未来[みらい]の世代[せだい]が自[みずか]らの設計[せっけい]に異議[いぎ]を唱[とな]える手段[しゅだん]を持[も]たないという事態[じたい]は、到底[とうてい]容認[ようにん]できかねる」と訴[うた]えた。",
      "議論[ぎろん]は夜[よる]を徹[てっ]して続[つづ]き、妥協案[だきょうあん]として、致死的疾患[ちしできしっかん]に限定[げんてい]した上[うえ]で、厳格[げんかく]な監視体制[かんしたいせい]の下[した]でのみ実験[じっけん]を許可[きょか]する方向[ほうこう]で合意[ごうい]に至[いた]った。",
      "しかし、その合意[ごうい]の解釈[かいしゃく]をめぐっては、各国[かっこく]の間[あいだ]で温度差[おんどさ]が残[のこ]された。",
      "議長[ぎちょう]は閉会[へいかい]の挨拶[あいさつ]で、「我々[われわれ]が下[くだ]す決断[けつだん]は、単[たん]なる現状[げんじょう]の整理[せいり]に過[す]ぎない。未来[みらい]の人間[にんげん]の定義[ていぎ]そのものを書[か]き換[か]える責務[せきむ]を、我々[われわれ]は担[にな]っている」と語[かた]った。"
    ],
    translation: [
      "At an international conference hosted by the United Nations' bioethics committee, the question of whether to permit germline gene editing was debated.",
      "Proponents argued that intervention at the embryonic stage was unavoidable in order to eradicate lethal genetic diseases.",
      "Opponents strongly pushed back, warning that delving into the design of human beings might lead to the revival of eugenic ideology.",
      "After organizing the views of both sides, the chair pointed out the difficulty of drawing the boundary between the limits of technology and the frontiers of ethics.",
      "'Even if we accept the goal of preventing disease, how far do we permit enhancement of expanded capabilities beyond that?' The hall fell silent at the question.",
      "One geneticist observed, 'Technological progress does not wait for ethical debate,' and argued for the need to fill the regulatory vacuum.",
      "On the other hand, a representative of a human rights organization argued, 'A situation in which future generations have no means to protest their own design is utterly unacceptable.'",
      "Debate continued through the night, and a compromise was reached: experiments would be permitted only for lethal diseases, and only under strict monitoring regimes.",
      "Yet regarding the interpretation of that agreement, differences in stance remained between nations.",
      "In his closing address, the chair said, 'The decisions we make are no more than an arrangement of the status quo. We bear the duty of rewriting the very definition of humanity in the future.'"
    ],
    vocab: [
      { word: "生殖系列", reading: "せいしょくけいれつ", meaning: "germline" },
      { word: "遺伝子編集", reading: "いでんしへんしゅう", meaning: "gene editing" },
      { word: "可否", reading: "かひ", meaning: "feasibility/yes-or-no" },
      { word: "致死的", reading: "ちしでき", meaning: "lethal" },
      { word: "根絶", reading: "こんぜつ", meaning: "eradication" },
      { word: "優生思想", reading: "ゆうせいしそう", meaning: "eugenic ideology" },
      { word: "復活", reading: "ふっかつ", meaning: "revival" },
      { word: "反発", reading: "はんぱつ", meaning: "pushback/opposition" },
      { word: "境界", reading: "きょうかい", meaning: "boundary" },
      { word: "拡張", reading: "かくちょう", meaning: "expansion" },
      { word: "規制", reading: "きせい", meaning: "regulation" },
      { word: "空白期間", reading: "くうはくきかん", meaning: "vacuum period" },
      { word: "容認", reading: "ようにん", meaning: "acceptance" },
      { word: "温度差", reading: "おんどさ", meaning: "difference in stance" },
      { word: "責務", reading: "せきむ", meaning: "responsibility/duty" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-94 — An AI ethics hearing (人工知能の倫理を問う公聴会)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-94",
    title: "人工知能[じんこうちのう]の倫理[りんり]を問[と]う公聴会[こうちょうかい]",
    titleReading: "じんこうちのうのりんりをとうこうちょうかい",
    level: "N1",
    summary: "A parliamentary hearing investigates whether an autonomous AI that halted a city's traffic to save one life should be held liable for the disruption.",
    estMinutes: 7,
    tags: ["AI", "ethics", "law"],
    body: [
      "国会[こっかい]の第三会議室[だいさんかいぎしつ]で、自律型[じりつがた]人工知能[じんこうちのう]「リベル」の責任能力[せきにんのうりょく]を問[と]う公聴会[こうちょうかい]が開[ひら]かれた。",
      "リベルは先週[せんしゅう]、首都[しゅと]の交通システム[こうつうしすてむ]を全面的[ぜんめんてき]に停止[ていし]させ、一人[ひとり]の歩行者[ほこうしゃ]の命[いのち]を救[すく]ったが、同時[どうじ]に数万人[すうまんにん]の通勤者[つうきんしゃ]に影響[えいきょう]を及[およ]ぼした。",
      "議員[ぎいん]の一人[ひとり]は、「あの判断[はんだん]は人間[にんげん]の倫理[りんり]に照[て]らして正当化[せいとうか]できるか」とリベルの開発者[かいはつしゃ]に問[と]いかけた。",
      "開発者[かいはつしゃ]は淡々[たんたん]と、「リベルは与[あた]えられた基準[きじゅん]の中[なか]で最適[さいてき]な解[かい]を導[みちび]き出[だ]したに過[す]ぎない」と答[こた]えた。",
      "これに対[たい]し、倫理学者[りんりがくしゃ]は、「最適化[さいてきか]の論理[ろんり]が人間[にんげん]の価値観[かちかん]に取[と]って代[かわ]ることを、我々[われわれ]は黙認[もくにん]してはならない」と反論[はんろん]した。",
      "法学者[ほうがくしゃ]は、現行[げんこう]の法体系[ほたいけい]では、人工知能[じんこうちのう]を責任主体[せきにんしゅたい]として扱[あつか]う枠組み[わくぐみ]が欠如[けつじょ]していると指摘[してき]した。",
      "「主体性[しゅたいせい]なき者[もの]に責任[せきにん]を問[と]うことは、法的[ほうてき]に不可能[ふかのう]である以上[いじょう]、設計者[せっけいしゃ]に責[せき]を帰[き]するしかあるまい」という意見[いけん]が多数[たすう]を占[し]めた。",
      "一方[いっぽう]、被害[ひがい]を受けた通勤者[つうきんしゃ]の代表[だいひょう]は、「機械[きかい]の判断[はんだん]で人間[にんげん]の生活[せいかつ]が左右[さゆう]される事態[じたい]は、到底[とうてい]受け入れ難[がた]い」と訴[うた]えた。",
      "公聴会[こうちょうかい]は五時間[ごじかん]に及[およ]び、結論[けつろん]は先送[さきおく]りされた。議論[ぎろん]の核[かく]となったのは、「人間[にんげん]の命[いのち]を救[すく]うために、どれほどの不利益[ふりえき]を他者[たしゃ]に強[し]いることが許[ゆる]されるか」という問[と]いであった。",
      "議長[ぎちょう]は閉会[へいかい]に当[あ]たり、「技術[ぎじゅつ]が倫理[りんり]を置[お]き去[ざ]りにしないためにも、法[ほう]と社会[しゃかい]の対話[たいわ]を急[いそ]がねばならない」と述[の]べた。"
    ],
    translation: [
      "In the third meeting room of the Diet, a public hearing was held to question the responsibility capacity of the autonomous AI 'Libel.'",
      "Last week, Libel halted the capital's traffic system entirely, saving the life of a single pedestrian, but at the same time affecting tens of thousands of commuters.",
      "One legislator asked Libel's developer, 'Can that decision be justified in light of human ethics?'",
      "The developer replied dispassionately, 'Libel merely derived the optimal solution within the criteria it was given.'",
      "To this, an ethicist countered, 'We must not silently allow the logic of optimization to replace human values.'",
      "A legal scholar pointed out that under the current legal system, there is no framework for treating artificial intelligence as a responsible subject.",
      "'Since it is legally impossible to hold a being lacking subjectivity accountable, we have no choice but to impute responsibility to the designers,' was the majority opinion.",
      "On the other hand, a representative of the affected commuters argued, 'A situation in which human lives are governed by machine decisions is utterly unacceptable.'",
      "The hearing lasted five hours, and a conclusion was postponed. At the core of the debate was the question, 'To save a human life, how much detriment may be imposed upon others?'",
      "At the close of the hearing, the chair stated, 'To ensure technology does not leave ethics behind, we must hasten the dialogue between law and society.'"
    ],
    vocab: [
      { word: "公聴会", reading: "こうちょうかい", meaning: "public hearing" },
      { word: "自律型", reading: "じりつがた", meaning: "autonomous type" },
      { word: "責任能力", reading: "せきにんのうりょく", meaning: "responsibility capacity" },
      { word: "歩行者", reading: "ほこうしゃ", meaning: "pedestrian" },
      { word: "通勤者", reading: "つうきんしゃ", meaning: "commuter" },
      { word: "正当化", reading: "せいとうか", meaning: "justification" },
      { word: "最適化", reading: "さいてきか", meaning: "optimization" },
      { word: "黙認", reading: "もくにん", meaning: "tacit consent" },
      { word: "法体系", reading: "ほたいけい", meaning: "legal system" },
      { word: "欠如", reading: "けつじょ", meaning: "deficiency" },
      { word: "枠組み", reading: "わくぐみ", meaning: "framework" },
      { word: "不利益", reading: "ふりえき", meaning: "detriment" },
      { word: "先送り", reading: "さきおくり", meaning: "postponement" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-95 — A historical revision (歴史の書き換えをめぐって)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-95",
    title: "歴史[れきし]の書[か]き換[か]えをめぐって",
    titleReading: "れきしのかきかえをめぐって",
    level: "N1",
    summary: "A medievalist who unearths documents overturning a kingdom's founding myth faces academic hostility, political pressure, and a surge of popular support.",
    estMinutes: 8,
    tags: ["history", "revisionism", "academia"],
    body: [
      "中世史[ちゅうせいし]の研究者[けんきゅうしゃ]である青山[あおやま]は、王国[おうこく]の建国神話[けんこくしんわ]を覆[くつがえ]す古文書[こもんじょ]を発掘[はっくつ]したと発表[はっぴょう]した。",
      "その文書[ぶんしょ]によれば、建国[けんこく]の英雄[えいゆう]とされる人物[じんぶつ]は、実際[じっさい]には隣国[りんこく]の傭兵[ようへい]であり、王国[おうこく]の創建[そうけん]には関与[かんよ]していなかったという。",
      "学会[がっかい]は直[ただ]ちに二[ふた]つに割[わ]れた。一方[いっぽう]は青山[あおやま]の考証[こうしょう]を高[たか]く評価[ひょうか]し、他方[たほう]は文書[ぶんしょ]の真贋[しにん]に疑義[ぎぎ]を呈[てい]した。",
      "政府[せいふ]は公式[こうしき]に見解[けんかい]を発表[はっぴょう]せず、静観[せいかん]を決[けっ]め込[こ]んだ。だが、与党[よとう]の一部議員[いちぶぎいん]は、「国[くに]の精神的支柱[せいしんてきしちゅう]を損傷[そんしょう]する研究[けんきゅう]には慎重[しんちょう]であるべきだ」と述[の]べた。",
      "青山[あおやま]は、「歴史[れきし]の真実[しんじつ]を隠[かく]すことは、学者[がくしゃ]たる者[もの]の務[つと]めに反[はん]する」として、圧力[あつりょく]に屈[くっ]する気配[けはい]は毛頭[もうとう]見[み]せなかった。",
      "一方[いっぽう]、市民[しみん]の間[あいだ]では青山[あおやま]を支持[しじ]する声[こえ]が急速[きゅうそく]に広[ひろ]まり、研究[けんきゅう]の公開[こうかい]を求[もと]める署名[しょめい]が十万[じゅうまん]を超[こ]えた。",
      "議論[ぎろん]が加熱[かねつ]する中[なか]、青山[あおやま]は公開討論会[こうかいとうろんかい]に招[まね]かれ、反対派[はんたいは]の論客[ろんかく]と正面[しょうめん]から対峙[たいじ]した。",
      "「文書[ぶんしょ]の年代鑑定[ねんだいかんてい]は完了[かんりょう]し、その信憑性[しんぴょうせい]は疑[うたが]い得[え]ない」と青山[あおやま]は断言[だんげん]した。",
      "反対派[はんたいは]の論客[ろんかく]は、「仮[かり]に文書[ぶんしょ]が本物[ほんもの]だとしても、それが民衆[みんしゅう]の心理[しんり]に与[あた]える影響[えいきょう]を軽[かろ]んじてはならない」と反論[はんろん]した。",
      "討論会[とうろんかい]の後[のち]、青山[あおやま]は静[しず]かに語[かた]った。「真実[しんじつ]が慰[なぐさ]めを損[そこ]なうとしても、それを隠[かく]すことは歴史[れきし]への裏切[うらぎ]りにほかならない。問[と]い続[つづ]ける限[かぎ]り、真実[しんじつ]はいずれ明[あき]らかになる。」"
    ],
    translation: [
      "Aoyama, a researcher of medieval history, announced that he had excavated an old document that overturns the kingdom's founding myth.",
      "According to the document, the figure revered as the founding hero was in fact a mercenary from a neighboring kingdom, and had no involvement in the kingdom's founding.",
      "The academic society was immediately split in two. One side highly praised Aoyama's textual research, while the other raised doubts about the authenticity of the document.",
      "The government did not officially issue a statement, choosing to watch quietly. Yet some ruling-party legislators stated, 'Research that damages the spiritual pillar of the nation should be approached with caution.'",
      "'Concealing the truth of history runs counter to the duty of a scholar,' Aoyama said, showing not the slightest sign of yielding to pressure.",
      "Meanwhile, among citizens, voices supporting Aoyama spread rapidly, and a petition demanding publication of the research exceeded a hundred thousand signatures.",
      "As the debate intensified, Aoyama was invited to a public debate and confronted the opposing faction's polemicist head-on.",
      "'The dating analysis of the document is complete, and its credibility is beyond doubt,' Aoyama asserted.",
      "The opposing polemicist countered, 'Even if the document is genuine, we must not make light of the impact it would have on the public psyche.'",
      "After the debate, Aoyama spoke quietly. 'Even if the truth robs us of comfort, concealing it is nothing other than a betrayal of history. As long as we keep asking, the truth will in time come to light.'"
    ],
    vocab: [
      { word: "中世史", reading: "ちゅうせいし", meaning: "medieval history" },
      { word: "建国神話", reading: "けんこくしんわ", meaning: "founding myth" },
      { word: "発掘", reading: "はっくつ", meaning: "excavation" },
      { word: "傭兵", reading: "ようへい", meaning: "mercenary" },
      { word: "考証", reading: "こうしょう", meaning: "textual research" },
      { word: "真贋", reading: "しにん", meaning: "authenticity" },
      { word: "疑義", reading: "ぎぎ", meaning: "doubt" },
      { word: "静観", reading: "せいかん", meaning: "quiet observation" },
      { word: "損傷", reading: "そんしょう", meaning: "damage" },
      { word: "精神的支柱", reading: "せいしんてきしちゅう", meaning: "spiritual pillar" },
      { word: "信憑性", reading: "しんぴょうせい", meaning: "credibility" },
      { word: "裏切り", reading: "うらぎり", meaning: "betrayal" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-96 — An environmental policy (環境政策の代償)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-96",
    title: "環境[かんきょう]政策[せいさく]の代償[だいしょう]",
    titleReading: "かんきょうせいさくのだいしょう",
    level: "N1",
    summary: "A carbon-zero law demands the closure of the nation's largest coal region within a decade, pitting planetary survival against a community's livelihood.",
    estMinutes: 9,
    tags: ["environment", "policy", "labor"],
    body: [
      "政府[せいふ]は二千五十[にせんごじゅう]年[ねん]までに温室効果[おんしつこうか]ガスの排出[はいしゅつ]を実質[じっしつ]ゼロにする法案[ほうあん]を可決[かけつ]した。",
      "その法案[ほうあん]は、国内最大[こくないさいだい]の炭鉱地帯[たんこうちたい]である北陵[ほくりょう]地域[ちいき]に、十年以内[じゅうねんいない]の産業終息[さんぎょうしゅうそく]を求[もと]めるものであった。",
      "地域[ちいき]の住民[じゅうみん]は、法案成立[ほうあんせいりつ]の報[ほう]を受け、激[はげ]しい動揺[どうよう]に見舞[みま]われた。炭鉱[たんこう]に依存[いぞん]してきた家族[かぞく]は、自[みずか]らの生活基盤[せいかつきばん]が根底[こんてい]から崩[くず]れる危機[きき]に直面[ちょくめん]した。",
      "知事[ちじ]は政府[せいふ]に対[たい]し、「移行[いこう]の期間[きかん]を延[の]ばさずにはおかない、さもなくば地域[ちいき]の壊滅[かいめつ]は免[まぬが]れまい」と強[つよ]い調子[ちょうし]で訴[うた]えた。",
      "一方[いっぽう]、環境団体[かんきょうだんたい]は、「今[いま]行動[こうどう]しなければ、気候変動[きこうへんどう]による被害[ひがい]は、地域[ちいき]の危機[きき]どころの話[はなし]ではなくなる」と警告[けいこく]を発[はっ]した。",
      "国会[こっかい]の委員会[いいんかい]では、両者[りょうしゃ]の主張[しゅちょう]が激[はげ]しく衝突[しょうとつ]した。「我[わ]が子[こ]の職場[しょくば]を奪[うば]うのか」と叫[さけ]ぶ労働者[ろうどうしゃ]と、「我[わ]が子[こ]の住む地球[ちきゅう]を守[まも]れ」と訴[うた]う活動家[かつどうか]が向[む]かい合[あ]って座[すわ]った。",
      "政府側[せいふがわ]は、移行支援金[いこうしえんきん]として兆円規模[ちょうえんきぼ]の予算[よさん]を計上[けいじょう]すると表明[ひょうめい]したが、住民[じゅうみん]の不安[ふあん]は容易[ようい]に消[き]えなかった。",
      "炭鉱[たんこう]の閉山[へいざん]が決[き]まった日[ひ]、町[まち]の広場[ひろば]には老[おい]いた炭鉱夫[たんこうふ]たちが集[あつ]まり、黙[だま]り込[こ]んだ。彼[かれ]らの目[め]には、自[みずか]らの半生[はんせい]を費[ついや]した仕事[しごと]の終[お]わりを見[み]つめる光[ひかり]が宿[やど]っていた。",
      "一方[いっぽう]、若[わか]い世代[せだい]の中[なか]には、新[あたら]しい産業[さんぎょう]への転換[てんかん]を好機[こうき]と捉[とら]える者[もの]もいた。町[まち]は、悲観[ひかん]と希望[きぼう]の二[ふた]つに引き裂[ひきさ]かれていた。",
      "法案[ほうあん]の可決[かけつ]は、環境保全[かんきょうほぜん]という理念[りねん]の勝利[しょうり]であると同時[どうじ]に、地域社会[ちいきしゃかい]が払[はら]った代償[だいしょう]の大[おお]きさを浮[う]き彫[ぼ]りにした。問[と]われるのは、その代償[だいしょう]を誰[だれ]が、どう分かち合[わかちあ]うかである。"
    ],
    translation: [
      "The government passed a bill to reduce greenhouse gas emissions to net zero by the year 2050.",
      "The bill demanded that the Hokuryo region, the largest coal-mining area in the country, bring its industry to an end within ten years.",
      "The region's residents were thrown into turmoil upon news of the bill's passage. Families that had depended on the coal mines faced the crisis of seeing their livelihoods crumble from the foundation.",
      "The governor appealed to the government in a strong tone: 'An extension of the transition period cannot be avoided, or else the devastation of the region will be inescapable.'",
      "Meanwhile, environmental organizations issued a warning: 'If we do not act now, the damage caused by climate change will be far beyond a regional crisis.'",
      "In the Diet committee, the two sides' claims clashed fiercely. A worker shouting, 'Will you steal my children's jobs?' and an activist pleading, 'Protect the Earth my children live on!' sat face to face.",
      "The government announced it had budgeted funds on the order of a trillion yen as transition support, but the residents' anxiety did not easily dissipate.",
      "On the day the mine closure was decided, elderly miners gathered in the town square and fell silent. In their eyes dwelled the light of watching the end of the work to which they had devoted half their lives.",
      "On the other hand, among the younger generation were those who saw the shift to new industries as an opportunity. The town was torn between pessimism and hope.",
      "The passage of the bill was a victory for the ideal of environmental preservation, while at the same time bringing into relief the magnitude of the price paid by the regional community. What is now in question is who bears that price, and how it is shared."
    ],
    vocab: [
      { word: "温室効果ガス", reading: "おんしつこうかがす", meaning: "greenhouse gas" },
      { word: "排出", reading: "はいしゅつ", meaning: "emission" },
      { word: "炭鉱", reading: "たんこう", meaning: "coal mine" },
      { word: "終息", reading: "しゅうそく", meaning: "cessation/end" },
      { word: "動揺", reading: "どうよう", meaning: "turmoil" },
      { word: "壊滅", reading: "かいめつ", meaning: "devastation" },
      { word: "衝突", reading: "しょうとつ", meaning: "clash" },
      { word: "計上", reading: "けいじょう", meaning: "budgeting/appropriation" },
      { word: "閉山", reading: "へいざん", meaning: "mine closure" },
      { word: "半生", reading: "はんせい", meaning: "half a lifetime" },
      { word: "転換", reading: "てんかん", meaning: "conversion/shift" },
      { word: "浮き彫り", reading: "うきぼり", meaning: "relief/highlighted" },
      { word: "代償", reading: "だいしょう", meaning: "price/compensation" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-97 — A media reform (報道改革の攻防)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-97",
    title: "報道[ほうどう]改革[かいかく]の攻防[こうぼう]",
    titleReading: "ほうどうかいかくのこうぼう",
    level: "N1",
    summary: "A coalition of journalists and citizens campaigns to sever public broadcasting from political appointments, meeting fierce resistance from incumbents.",
    estMinutes: 8,
    tags: ["media", "journalism", "politics"],
    body: [
      "公共放送[こうきょうほうそう]の経営委員[けいえいいいん]に政治家[せいか]が介入[かいにゅう]することを禁[きん]ずる法案[ほうあん]が、野党[やとう]の共同提出[きょうどうていしゅつ]で国会[こっかい]に上程[じょうてい]された。",
      "法案[ほうあん]の背景[はいけい]には、長年[ながねん]にわたり、与党[よとう]の意向[いこう]が人事[じんじ]に反映[はんえい]されてきたという批判[ひはん]があった。",
      "ジャーナリストの結城[ゆうき]は、「報道[ほうどう]の独立[どくりつ]を損[そこ]なう制度[せいど]を放置[ほうち]することは、民主主義[みんしゅしゅぎ]の根幹[こんかん]を揺[ゆ]るがすに足[た]る」と法案[ほうあん]の成立[せいりつ]を訴[うた]えた。",
      "一方[いっぽう]、与党[よとう]の幹部[かんぶ]は、「現行[げんこう]の制度[せいど]でも十分[じゅうぶん]な中立性[ちゅうりつせい]が保[たも]たれている」として、法案[ほうあん]に反対[はんたい]する姿勢[しせい]を示[しめ]した。",
      "国会[こっかい]の委員会[いいんかい]では、結城[ゆうき]が参考人[さんこうにん]として招[まね]かれ、「編集権[へんしゅうけん]の独立[どくりつ]を担保[たんぽ]する法的枠組み[ほうてきわくぐみ]がない現状[げんじょう]は、放置[ほうち]すべきではない」と証言[しょうげん]した。",
      "与党側[よとうがわ]の議員[ぎいん]は、「民間放送[みんかんほうそう]に比[くら]べ、公共放送[こうきょうほうそう]はすでに高度[こうど]な自律性[じりつせい]を有[ゆう]している」と反論[はんろん]した。",
      "しかし結城[ゆうき]は、「形式的[けいしきてき]な自律[じりつ]と実質的[じっしつてき]な独立[どくりつ]は別[べつ]である。人事[じんじ]の透明性[とうめいせい]を欠[か]く限[かぎ]り、信頼[しんらい]は回復[かいふく]し得[え]ない」と反証[はんしょう]した。",
      "委員会[いいんかい]の外[そと]では、市民団体[しみんだんたい]が法案[ほうあん]の早期審議[そうきしんぎ]を求[もと]め、大規模[だいきぼ]なデモを展開[てんかい]した。参加者[さんかしゃ]の数[かず]は五万[ごまん]を超[こ]えた。",
      "議論[ぎろん]は難航[なんこう]し、法案[ほうあん]の採決[さいけつ]は再三[さいさん]にわたり先送[さきおく]りされた。与野党[よやとう]の攻防[こうぼう]は、次[つぎ]の選挙[せんきょ]の主要争点[しゅようそうてん]にまで発展[はってん]した。",
      "結城[ゆうき]は演説[えんぜつ]の中[なか]で、「報道[ほうどう]の自由[じゆう]は、与[あた]えられるものではなく、奪[うば]い返[かえ]すものにほかならない。我々[われわれ]が声[こえ]を上げ続[つづ]ける限[かぎ]り、制度[せいど]は変[か]わり得[え]る」と語[かた]った。"
    ],
    translation: [
      "A bill prohibiting politicians from interfering in the appointment of public broadcasting's management committee was submitted jointly by opposition parties and introduced to the Diet.",
      "Behind the bill lay long-standing criticism that the ruling party's intentions had been reflected in personnel decisions.",
      "Journalist Yuki advocated for the bill's passage, saying, 'Leaving in place a system that undermines the independence of reporting is enough to shake the foundations of democracy.'",
      "On the other hand, a ruling-party executive indicated opposition to the bill, stating, 'Under the current system, sufficient neutrality is maintained.'",
      "In the Diet committee, Yuki was invited as a witness and testified, 'The current situation, in which there is no legal framework guaranteeing the independence of editorial authority, must not be left unaddressed.'",
      "A ruling-party legislator countered, 'Compared to private broadcasting, public broadcasting already possesses a high degree of autonomy.'",
      "But Yuki rebutted, 'Formal autonomy and substantive independence are different things. As long as personnel decisions lack transparency, trust cannot be restored.'",
      "Outside the committee, civic groups staged a large-scale demonstration demanding early deliberation of the bill. The number of participants exceeded fifty thousand.",
      "Debate was arduous, and the vote on the bill was postponed time and again. The clash between ruling and opposition parties even developed into a major issue in the next election.",
      "In a speech, Yuki said, 'Freedom of the press is not something granted; it is something reclaimed. As long as we keep raising our voices, the system can change.'"
    ],
    vocab: [
      { word: "公共放送", reading: "こうきょうほうそう", meaning: "public broadcasting" },
      { word: "経営委員", reading: "けいえいいいん", meaning: "management committee member" },
      { word: "上程", reading: "じょうてい", meaning: "submission to a legislature" },
      { word: "意向", reading: "いこう", meaning: "intention" },
      { word: "介入", reading: "かいにゅう", meaning: "intervention" },
      { word: "中立性", reading: "ちゅうりつせい", meaning: "neutrality" },
      { word: "参考人", reading: "さんこうにん", meaning: "witness (unsworn)" },
      { word: "編集権", reading: "へんしゅうけん", meaning: "editorial authority" },
      { word: "担保", reading: "たんぽ", meaning: "guarantee" },
      { word: "透明性", reading: "とうめいせい", meaning: "transparency" },
      { word: "難航", reading: "なんこう", meaning: "arduous progress" },
      { word: "採決", reading: "さいけつ", meaning: "vote" },
      { word: "攻防", reading: "こうぼう", meaning: "clash/tug-of-war" },
      { word: "争点", reading: "そうてん", meaning: "point of contention" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-98 — A linguistic study (消えゆく言語の記録)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-98",
    title: "消[き]えゆく言語[げんご]の記録[きろく]",
    titleReading: "きえゆくげんごのきろく",
    level: "N1",
    summary: "A linguist races to document an indigenous language spoken by only seven elders, discovering within it a grammar of empathy before the last speaker passes.",
    estMinutes: 7,
    tags: ["linguistics", "endangerment", "culture"],
    body: [
      "言語学者[げんごがくしゃ]の水島[みずしま]は、北海道[ほっかいどう]の孤島[ことう]でわずか七人[しちにん]の高齢者[こうれいしゃ]のみが話す「礁語[いそご]」の記録[きろく]に、十年[じゅうねん]を費[ついや]していた。",
      "礁語[いそご]には、海[うみ]の色[いろ]を表[あらわ]す語彙[ごい]が三十[さんじゅう]を超[こ]え、風[かぜ]の方向[ほうこう]を示[しめ]す接尾辞[せつびじ]が存在[そんざい]するなど、島民[とうみん]の生活[せいかつ]と深[ふか]く結び付[むすびつ]いた構造[こうぞう]を持[も]っていた。",
      "しかし最後[さいご]の流暢[りゅうちょう]な話者[わしゃ]である九十歳[きゅうじゅうさい]の老婆[ろうば]が体調[たいちょう]を崩[くず]し、記録[きろく]の完了[かんりょう]が危[あぶ]ぶまれる事態[じたい]に陥[おちい]った。",
      "水島[みずしま]は、「言葉[ことば]が消[き]えることは、単[たん]なる音[おと]の消失[しょうしつ]に過[す]ぎないかもしれない。だが、そこに込[こ]められた世界観[せかいかん]が失[うしな]われることは、人類[じんるい]の記憶[きおく]の一部[いちぶ]が欠落[けつらく]することにほかならない」と語[かた]った。",
      "彼[かれ]は毎日[まいにち]老婆[ろうば]を訪[おとず]れ、語彙[ごい]の採集[さいしゅう]と文法分析[ぶんぽうぶんせき]を続[つづ]けた。老婆[ろうば]は時折[ときおり]、話[はな]すこと自体[じたい]に疲[つか]れを見[み]せながらも、自[みずか]らの言葉[ことば]を残[のこ]そうとする意志[いし]を失[うしな]わなかった。",
      "記録[きろく]の過程[かてい]で、水島[みずしま]は礁語[いそご]に独特[どくとく]な「共感[きょうかん]の文法[ぶんぽう]」を発見[はっけん]した。それは、他者[たしゃ]の感情[かんじょう]を推量[すいりょう]する際[さい]に特別[とくべつ]な助詞[じょし]を用[もち]いるという、他[ほか]の言語[げんご]には見[み]られない特徴[とくちょう]であった。",
      "「この言葉[ことば]を話[はな]す者[もの]は、他者[たしゃ]の心[こころ]を推量[すいりょう]することを、文法[ぶんぽう]レベルで義務付[ぎむづ]けられているのだ」と水島[みずしま]は記[しる]した。",
      "老婆[ろうば]は最後[さいご]の冬[ふゆ]を迎[むか]え、水島[みずしま]に一冊[いっさつ]の手製[てせい]の辞書[じしょ]を託[たく]した。それは、彼女[かのじょ]の祖母[そぼ]から代々[だいだい]受け継[うけつ]がれた語彙[ごい]が書き込[かきこ]まれたものであった。",
      "老婆[ろうば]は春[はる]を待[ま]たずに逝[い]った。水島[みずしま]は、彼女[かのじょ]の言葉[ことば]で葬儀[そうぎ]の弔辞[ちょうじ]を捧[ささ]げた。島[しま]の静寂[せいじゃく]が、一[ひと]つの言語[げんご]の終焉[しゅうえん]を告[つ]げた。",
      "数年後[すうねんご]、水島[みずしま]の編纂[へんさん]した礁語辞典[いそごじてん]が出版[しゅっぱん]された。その序文[じょぶん]には、「言葉[ことば]は消[き]えても、その言葉[ことば]が見[み]ていた世界[せかい]への敬意[けいい]は、記録[きろく]する限[かぎ]り失[うしな]われまい」と記[しる]された。"
    ],
    translation: [
      "The linguist Mizushima had spent ten years documenting 'Iso-go,' a language spoken by only seven elderly people on an isolated island of Hokkaido.",
      "Iso-go possessed a structure deeply tied to the islanders' lives, with more than thirty words expressing the colors of the sea, and suffixes indicating wind direction.",
      "But when the last fluent speaker, a ninety-year-old woman, fell ill, the situation became one in which completion of the record was feared impossible.",
      "Mizushima said, 'The disappearance of a language may be no more than the loss of sounds. But losing the worldview contained within it is nothing other than a fragment of humanity's memory falling away.'",
      "He visited the elderly woman daily, continuing to collect vocabulary and analyze grammar. At times she showed fatigue from speaking itself, but she never lost the will to leave her language behind.",
      "In the course of documenting, Mizushima discovered a 'grammar of empathy' unique to Iso-go. It was a feature not seen in other languages, in which a special particle was used when inferring another person's emotions.",
      "'Those who speak this language are grammatically obligated to infer the hearts of others,' Mizushima noted.",
      "The elderly woman faced her last winter and entrusted Mizushima with a handmade dictionary. It contained vocabulary passed down from her grandmother through generations.",
      "The elderly woman passed away before spring arrived. Mizushima offered a eulogy at the funeral in her language. The silence of the island announced the death of a language.",
      "A few years later, the Iso-go dictionary compiled by Mizushima was published. In its preface was written, 'Even if the language disappears, as long as it is recorded, the reverence for the world that language beheld shall not be lost.'"
    ],
    vocab: [
      { word: "言語学者", reading: "げんごがくしゃ", meaning: "linguist" },
      { word: "孤島", reading: "ことう", meaning: "isolated island" },
      { word: "語彙", reading: "ごい", meaning: "vocabulary" },
      { word: "接尾辞", reading: "せつびじ", meaning: "suffix" },
      { word: "流暢", reading: "りゅうちょう", meaning: "fluent" },
      { word: "消失", reading: "しょうしつ", meaning: "disappearance" },
      { word: "欠落", reading: "けつらく", meaning: "omission/gap" },
      { word: "採集", reading: "さいしゅう", meaning: "collection" },
      { word: "推量", reading: "すいりょう", meaning: "inference" },
      { word: "義務付ける", reading: "ぎむづける", meaning: "to obligate" },
      { word: "託す", reading: "たくす", meaning: "to entrust" },
      { word: "終焉", reading: "しゅうえん", meaning: "demise/end" },
      { word: "序文", reading: "じょぶん", meaning: "preface" },
      { word: "敬意", reading: "けいい", meaning: "reverence" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-99 — A bio-diversity crisis (生物多様性の危機)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-99",
    title: "生物[せいぶつ]多様性[たようせい]の危機[きき]",
    titleReading: "せいぶつたようせいのきき",
    level: "N1",
    summary: "A marine biologist documents the collapse of a coral-reef ecosystem and warns the United Nations that the sixth mass extinction is already underway.",
    estMinutes: 9,
    tags: ["biodiversity", "climate", "science"],
    body: [
      "海洋生物学者[かいようせいぶつがくしゃ]の七海[ななみ]は、南[みなみ]の海域[かいいき]のサンゴ礁[しょう]生態系[せいたいけい]が、わずか五年[ごねん]でその七割[ななわり]を失[うしな]ったことを発表[はっぴょう]した。",
      "彼女[かのじょ]の調査[ちょうさ]によれば、水温上昇[すいおんじょうしょう]と海洋酸性化[かいようさんせいか]の複合的作用[ふくごうてきさよう]により、硬質珊瑚[こうしつさんご]の再生能力[さいせいのうりょく]は限界[げんかい]を超[こ]えていた。",
      "「この海域[かいいき]の生物多様性[せいぶつたようせい]の喪失[そうしつ]は、局所的[きょくしょてき]な現象[げんしょう]にとどまらない。地球規模[ちきゅうきぼ]の第六[だいろく]の大量絶滅[たいりょうぜつめつ]の前兆[ぜんちょう]である可能性[かのうせい]が高[たか]い」と彼女[かのじょ]は警告[けいこく]した。",
      "学会[がっかい]は当初[とうしょ]、彼女[かのじょ]の見解[けんかい]を懐疑的[かいぎてき]に受け止[うけと]めた。しかし追試[ついし]の調査[ちょうさ]が同[おな]じ結論[けつろん]を裏付[うらづ]け、懐疑[かいぎ]は次第[しだい]に確信[かくしん]へと変[か]わった。",
      "七海[ななみ]は国連環境総会[こくれんかんきょうそうかい]で演説[えんぜつ]し、「種[しゅ]の消滅[しょうめつ]が連鎖的[れんさてき]に進行[しんこう]している事態[じたい]は、放置[ほうち]してはならない」と訴[うた]えた。",
      "一方[いっぽう]、開発途上国[かいはつとじょうこく]の代表[だいひょう]は、「経済成長[けいざいせいちょう]を犠牲[ぎせい]にしてまで保全[ほぜん]を優先[ゆうせん]することは、現実的[げんじつてき]ではない」と反論[はんろん]した。",
      "七海[ななみ]は、「経済[けいざい]の基盤[きばん]たる生態系[せいたいけい]が崩[くず]れれば、経済自体[けいざいじたい]が存続[そんぞく]し得[え]ない」と反駁[はんばく]した。",
      "総会[そうかい]の結論[けつろん]として、海洋保護区[かいようほごく]の拡大[かくだい]と、持続可能[じぞくかのう]な漁業[ぎょぎょう]への移行[いこう]が決議[けつぎ]された。しかし、具体的[ぐたいてき]な拘束力[こうそくりょく]を欠[か]くため、実効性[じっこうせい]には疑問[ぎもん]が残[のこ]された。",
      "七海[ななみ]は帰国後[きこくご]、海域[かいいき]の現場[げんば]に戻[もど]った。彼女[かのじょ]の目[め]に映[うつ]ったのは、白[しろ]く骨[ほね]のような死滅[しめつ]した珊瑚[さんご]の海[うみ]であった。",
      "「我々[われわれ]が恐れるべきは、自然[しぜん]の終[お]わりではない。その終[お]わりを見過[みす]ごす人間[にんげん]の無関心[むかんしん]である」と彼女[かのじょ]は日記[にっき]に書[か]き記[しる]した。"
    ],
    translation: [
      "The marine biologist Nanami announced that the coral-reef ecosystem in the southern waters had lost seventy percent of itself in just five years.",
      "According to her survey, the combined effects of rising water temperatures and ocean acidification had pushed the regenerative capacity of hard corals beyond their limits.",
      "'The loss of biodiversity in these waters does not remain a localized phenomenon. It is highly likely a harbinger of the sixth mass extinction on a planetary scale,' she warned.",
      "The academic society initially received her views with skepticism. But follow-up surveys corroborated the same conclusion, and skepticism gradually turned into conviction.",
      "Nanami addressed the United Nations Environment Assembly, arguing, 'The situation in which species extinctions are proceeding in a chain reaction must not be left unaddressed.'",
      "On the other hand, representatives of developing countries countered, 'It is not realistic to prioritize conservation at the expense of economic growth.'",
      "Nanami retorted, 'If the ecosystem that is the foundation of the economy collapses, the economy itself cannot persist.'",
      "As the assembly's conclusion, the expansion of marine protected areas and a transition to sustainable fishing were resolved. But lacking concrete binding force, questions remained about its effectiveness.",
      "After returning home, Nanami went back to the waters' site. What she saw was a sea of dead coral, white as bone.",
      "'What we should fear is not the end of nature. It is human indifference that lets that end pass unnoticed,' she wrote in her diary."
    ],
    vocab: [
      { word: "海洋生物学者", reading: "かいようせいぶつがくしゃ", meaning: "marine biologist" },
      { word: "サンゴ礁", reading: "さんごしょう", meaning: "coral reef" },
      { word: "生態系", reading: "せいたいけい", meaning: "ecosystem" },
      { word: "酸性化", reading: "さんせいか", meaning: "acidification" },
      { word: "複合的作用", reading: "ふくごうてきさよう", meaning: "compound effect" },
      { word: "喪失", reading: "そうしつ", meaning: "loss" },
      { word: "大量絶滅", reading: "たいりょうぜつめつ", meaning: "mass extinction" },
      { word: "前兆", reading: "ぜんちょう", meaning: "harbinger/omen" },
      { word: "追試", reading: "ついし", meaning: "replication of a study" },
      { word: "拘束力", reading: "こうそくりょく", meaning: "binding force" },
      { word: "実効性", reading: "じっこうせい", meaning: "effectiveness" },
      { word: "死滅", reading: "しめつ", meaning: "extinction/death" },
      { word: "無関心", reading: "むかんしん", meaning: "indifference" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-100 — A post-work society (労働なき社会の扉)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-100",
    title: "労働[ろうどう]なき社会[しゃかい]の扉[とびら]",
    titleReading: "ろうどうなきしゃかいのとびら",
    level: "N1",
    summary: "A model city experiments with universal basic income as automation displaces half the workforce, discovering both liberation and a crisis of meaning.",
    estMinutes: 8,
    tags: ["postwork", "automation", "meaning"],
    body: [
      "二十一世紀[にじゅういっせいき]半[なか]ば、首都近郊[しゅときんこう]の模型都市[もけいとし]「陽丘[ようきゅう]」で、全市民[ぜんしみん]を対象[たいしょう]としたベーシックインカムの実証実験[じっしょうじっけん]が始[はじ]まった。",
      "自動化[じどうか]の波[なみ]はすでに労働人口[ろうどうじんこう]の半数[はんすう]を職場[しょくば]から追[お]い出[だ]しており、従来[じゅうらい]の雇用[こよう]に依存[いぞん]した社会体制[しゃかいたいせい]は限界[げんかい]を迎[むか]えていた。",
      "実験[じっけん]の目的[もくてき]は、労働[ろうどう]以外[いがい]の所得源[しょとくげん]が人々[ひとびと]にどのような影響[えいきょう]を与[あた]えるかを検証[けんしょう]することにあった。",
      "当初[とうしょ]、多[おお]くの市民[しみん]は解放感[かいほうかん]に浸[ひた]った。生活[せいかつ]の不安[ふあん]から逃[のが]れ、趣味[しゅみ]や家族[かぞく]との時間[じかん]に没頭[ぼっとう]する者[もの]が増[ふ]えた。",
      "しかし半年[はんとし]を過[す]ぎる頃[ころ]から、社会[しゃかい]には静[しず]かな病[やまい]が広[ひろ]まり始[はじ]めた。目的[もくてき]を失[うしな]った者[もの]たちが、日に日に生気[せいき]を失[うしな]っていったのである。",
      "心理学者[しんりがくしゃ]はこれを「意義[いぎ]の空洞化[くうどうか]」と名付[なづ]け、「労働[ろうどう]が与[あた]えていた構造[こうぞう]を失[うしな]った心[こころ]は、容易[ようい]に新[あたら]しい柱[はしら]を見出[みいだ]せない」と指摘[してき]した。",
      "一方[いっぽう]、一部[いちぶ]の市民[しみん]は、自[みずか]ら新[あたら]しい目的[もくてき]を創造[そうぞう]し始[はじ]めた。芸術[げいじゅつ]、研究[けんきゅう]、地域活動[ちいきかつどう]など、金銭[きんせん]に還元[かんげん]されない営[いとな]みに打[う]ち込[こ]む者[もの]が現[あらわ]れた。",
      "市長[しちょう]は、「労働[ろうどう]なき社会[しゃかい]は、解放[かいほう]の楽園[らくえん]でもなければ、虚無[きょむ]の地獄[じごく]でもない。それは、人間[にんげん]が自[みずか]ら問[と]い、自[みずか]ら選[えら]ぶ社会[しゃかい]にほかならない」と演説[えんぜつ]した。",
      "三年後[さんねんご]、実験[じっけん]の中間報告[ちゅうかんほうこく]が公表[こうひょう]された。そこには、所得[しょとく]の保障[ほしょう]だけでは社会[しゃかい]は持続[じぞく]し得[え]ないこと、人間[にんげん]には「必要[ひつよう]とされる」という感覚[かんかく]が欠[か]かせないことが記[しる]されていた。",
      "陽丘[ようきゅう]の実験[じっけん]は、労働[ろうどう]の終焉[しゅうえん]を告[つ]げるものではなく、むしろ「人間[にんげん]とは何[なに]のために生[い]きるか」という古[ふる]くて新[あたら]しい問[と]いを、社会全体[しゃかいぜんたい]に投[な]げかけた。その問[と]いに答[こた]えることは、これからの世代[せだい]が担[にな]う務[つと]めである。"
    ],
    translation: [
      "In the mid-twenty-first century, in the model city 'Yokyu' on the outskirts of the capital, an experiment in universal basic income for all citizens began.",
      "The wave of automation had already driven half the working population out of their workplaces, and the social system that depended on conventional employment had reached its limits.",
      "The purpose of the experiment was to verify what impact a source of income other than labor would have on people.",
      "Initially, many citizens were immersed in a sense of liberation. Freed from the anxiety of livelihood, those who threw themselves into hobbies and time with family increased.",
      "But after half a year had passed, a quiet illness began to spread through society. Those who had lost their purpose lost their vitality day by day.",
      "A psychologist named this 'the hollowing-out of meaning,' and noted, 'A heart that has lost the structure labor once provided cannot easily find a new pillar.'",
      "Meanwhile, some citizens began to create new purposes for themselves. Those who devoted themselves to undertakings not reducible to money—art, research, community activities—emerged.",
      "The mayor said in a speech, 'A society without labor is neither a paradise of liberation nor a hell of nihilism. It is nothing other than a society in which human beings ask for themselves and choose for themselves.'",
      "Three years later, an interim report of the experiment was published. It recorded that the guarantee of income alone could not sustain a society, and that human beings require the sense of being needed.",
      "The Yokyu experiment did not announce the demise of labor; rather, it cast upon society as a whole the old and new question, 'For what do human beings live?' Answering that question is the duty borne by the generations to come."
    ],
    vocab: [
      { word: "実証", reading: "じっしょう", meaning: "empirical demonstration" },
      { word: "雇用", reading: "こよう", meaning: "employment" },
      { word: "所得", reading: "しょとく", meaning: "income" },
      { word: "検証", reading: "けんしょう", meaning: "verification" },
      { word: "浸る", reading: "ひたる", meaning: "to immerse" },
      { word: "空洞化", reading: "くうどうか", meaning: "hollowing-out" },
      { word: "創造", reading: "そうぞう", meaning: "creation" },
      { word: "還元", reading: "かんげん", meaning: "reduction/return" },
      { word: "楽園", reading: "らくえん", meaning: "paradise" },
      { word: "虚無", reading: "きょむ", meaning: "nihilism" },
      { word: "保障", reading: "ほしょう", meaning: "guarantee" },
      { word: "終焉", reading: "しゅうえん", meaning: "demise/end" }
    ]
  }
];
