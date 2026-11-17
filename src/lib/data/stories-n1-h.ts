import type { StoryData } from "@/lib/types";

// JLPT N1 stories — chunk H (set sx-n1-71 .. sx-n1-80).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole compound. Kana, katakana, digits,
// and punctuation have no brackets. titleReading is full kana with NO brackets.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// N1 grammar targets woven through: 〜に過ぎない, 〜ずにはいられない,
// 〜ずにはおかない, 〜まい, 〜に足る, 〜限り, 〜とはいえ, 〜ゆえに,
// 〜を余儀なくされる, 〜たる, 〜てやまない, 〜こそ, 〜かねない,
// 〜にほかならない, 〜ごとき, 〜てならない, 〜からこそ, 〜にせよ,
// 〜きらいがある, 〜までもない, 〜を禁じ得ない, 〜ものを, 〜いかんによらず.
// Topics: a philosophical argument, a scientific discovery, a diplomatic
// negotiation, a literary prize controversy, a technological revolution,
// a cultural identity crisis, a neuroethical case, a climate policy debate,
// a post-truth media analysis, an existential question.

export const storiesN1H: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n1-71 — A philosophical argument (善悪の彼岸にて)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-71",
    title: "善[ぜん]悪[あく]の彼[ひ]岸[がん]にて",
    titleReading: "ぜんあくのひがんにて",
    level: "N1",
    summary: "An ethicist at an ancient-university overturns his own lifelong defense of absolute morality, igniting a schism among his disciples and elders.",
    estMinutes: 8,
    tags: ["philosophy", "ethics", "morality"],
    body: [
      "古都[こと]の大学[だいがく]で倫理学[りんりがく]を講[こう]じる黒崎[くろさき]教授[きょうじゅ]は、長年[ながねん]掲[かか]げてきた道徳[どうとく]の絶対性[ぜったいせい]を覆[くつがえ]す論考[ろんこう]を公[おおやけ]にした。",
      "「善[ぜん]と悪[あく]の境界[きょうかい]は不変[ふへん]ではなく、時代[じだい]と権力[けんりょく]が織[お]りなす暫定的[ざんていてき]な合意[ごうい]に過[す]ぎない」と彼[かれ]は断[だん]じた。",
      "論文[ろんぶん]は学会[がっかい]を二分[にぶん]した。若[わか]き助手[じょしゅ]たちの幾人[いくにん]かは、黒崎[くろさき]の転向[てんこう]に衝撃[しょうげき]を受[う]けつつも同調[どうちょう]せずにはいられなかった。",
      "一方[いっぽう]で、保守派[ほしゅは]の長老[ちょうろう]たちは「道徳[どうとく]の解体[かいたい]につながりかねない戯言[たわごと]」と激[はげ]しく反発[はんぱつ]し、公聴会[こうちょうかい]の開催[かいさい]を求[もと]めた。",
      "黒崎[くろさき]は反論[はんろん]の席[せき]で落[お]ち着[つ]いて応[こた]えた。「真理[しんり]とは、問[と]うことをやめた瞬間[しゅんかん]に死[し]ぬものだ。問[と]い続[つづ]ける限[かぎ]り、思想[しそう]は腐朽[ふきゅう]しない。」",
      "質問[しつもん]が矢継[やつ]ぎ早[ばや]に飛[と]んだ。「ならば、虐殺[ぎゃくさつ]を正当化[せいとうか]する論理[ろんり]をも容認[ようにん]するつもりか」という挑戦的[ちょうせんてき]な問[と]があった。",
      "彼[かれ]は微[かす]かに笑[わら]った。「容認[ようにん]するのではない。その論理[ろんり]が生[しょう]じるとされる構造[こうぞう]を暴[あば]くに過[す]ぎない。否定[ひてい]せずして真[しん]の理解[りかい]には至[いた]り得[え]まい。」",
      "議論[ぎろん]は夜[よる]を徹[てっ]して続[つづ]き、誰一人[だれひとり]として納得[なっとく]の結論[けつろん]に至[いた]らなかった。それこそが哲学[てつがく]たるものの宿命[しゅくめい]であると、彼[かれ]は杯[さかずき]を乾[かん]した。",
      "翌朝[よくあさ]、大学[だいがく]の掲示板[けいじばん]には彼[かれ]の講義[こうぎ]の休講[きゅうこう]を求[もと]める署名[しょめい]が貼[は]られていた。",
      "思想[しそう]の自由[じゆう]と社会的制裁[しゃかいてきせいさい]の狭間[はざま]に立[た]たされた黒崎[くろさき]は、それでも自[みずか]らの問[と]いを撤回[てっかい]するつもりは毛頭[もうとう]なかった。"
    ],
    translation: [
      "At an ancient-university, ethicist Professor Kurosaki published a treatise overturning the absolute morality he himself had long upheld.",
      "'The boundary between good and evil is not immutable; it is no more than a provisional agreement woven from era and power,' he declared.",
      "The paper split the academic society in two. Several young assistants, though shocked by Kurosaki's reversal, could not help but sympathize.",
      "On the other hand, conservative elders furiously pushed back, calling it 'dangerous nonsense that could lead to the dismantling of morality,' and demanded a public hearing.",
      "At the rebuttal session, Kurosaki replied calmly. 'Truth is a thing that dies the instant one stops questioning. As long as we keep asking, thought does not decay.'",
      "Questions flew in rapid succession. One challenger asked, 'Then do you intend to condone even the logic that justifies massacre?'",
      "He smiled faintly. 'I do not condone it. I merely expose the structure that produces such logic. Without negation, true understanding can never be reached.'",
      "The debate continued through the night, and not a single person reached a satisfying conclusion. That, he said as he raised his cup, is the very fate of philosophy.",
      "The next morning, the university bulletin board was plastered with signatures demanding his lectures be suspended.",
      "Caught between freedom of thought and social sanction, Kurosaki nevertheless had not the slightest intention of retracting his question."
    ],
    vocab: [
      { word: "倫理学", reading: "りんりがく", meaning: "ethics" },
      { word: "講じる", reading: "こうじる", meaning: "to lecture / to dispense" },
      { word: "掲げる", reading: "かかげる", meaning: "to raise / to hoist" },
      { word: "道徳", reading: "どうとく", meaning: "morality" },
      { word: "絶対性", reading: "ぜったいせい", meaning: "absoluteness" },
      { word: "覆す", reading: "くつがえす", meaning: "to overturn" },
      { word: "論考", reading: "ろんこう", meaning: "treatise / essay" },
      { word: "暫定", reading: "ざんてい", meaning: "provisional" },
      { word: "合意", reading: "ごうい", meaning: "agreement" },
      { word: "転向", reading: "てんこう", meaning: "conversion / about-face" },
      { word: "同調", reading: "どうちょう", meaning: "to sympathize / align" },
      { word: "戯言", reading: "たわごと", meaning: "nonsense" },
      { word: "腐朽", reading: "ふきゅう", meaning: "decay" },
      { word: "宿命", reading: "しゅくめい", meaning: "fate / destiny" },
      { word: "撤回", reading: "てっかい", meaning: "retraction" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-72 — A scientific discovery (量子の絡み合い)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-72",
    title: "量子[りょうし]の絡[から]み合[あ]い",
    titleReading: "りょうしのからみあい",
    level: "N1",
    summary: "A Tsukuba team proves macroscopic quantum entanglement at room temperature, upending the assumption that thermal noise forbids it.",
    estMinutes: 9,
    tags: ["science", "quantum", "discovery"],
    body: [
      "筑波[つくば]の量子工学研究機関[りょうしこうがくけんきゅうきかん]で、四十代[よんじゅうだい]の物理学者[ぶつりがくしゃ]である椎名[しいな]が率[ひき]いるチームは、室温[しつおん]で動[うご]く量子[りょうし]もつれの生成[せいせい]に成功[せいこう]したと発表[はっぴょう]した。",
      "長年[ながねん]、熱雑音[ねつざつおん]が量子状態[りょうしじょうたい]を瞬時[しゅんじ]に破壊[はかい]すると信[しん]じられてきたため、この成果[せいか]は学会[がっかい]の常識[じょうしき]を覆[くつがえ]すものと言[い]わざるを得[え]なかった。",
      "椎名[しいな]は記者会見[きしゃかいけん]で淡々[たんたん]と語[かた]った。「私[わたし]たちは、もつれが極小世界[きょくしょうせかい]にのみ許[ゆる]される現象[げんしょう]だと前提[ぜんてい]していました。その前提[ぜんてい]こそが誤[あやま]りでした。」",
      "彼[かれ]らが開発[かいはつ]した特殊[とくしゅ]な振動制御装置[しんどうせいぎょそうち]は、光[ひかり]の波長[はちょう]程度[ていど]の物体[ぶったい]において、数百[すうひゃく]マイクロ秒[びょう]の干渉[かんしょう]を維持[いじ]することに成功[せいこう]した。",
      "懐疑的[かいぎてき]な見方[みかた]も少[すく]なくなかった。「観測[かんそく]の解釈[かいしゃく]に都合[つごう]の良[よ]いバイアスが紛[まぎ]れ込[こ]んでいるに過[す]ぎない」と批判[ひはん]する声[こえ]が相次[あいつ]いだ。",
      "しかし、国[くに]を超[こ]えた追試[ついし]チームが三[みっ]つの異[こと]なる装置[そうち]で同[おな]じ結果[けっか]を再現[さいげん]するに及[およ]んで、疑義[ぎぎ]はほぼ晴[は]れた。",
      "この発見[はっけん]は量子計算機[りょうしけいさんき]の実用化[じつようか]を一気[いっき]に加速[かそく]させる可能性[かのうせい]がある。何[なに]より、自然界[しぜんかい]の深[ふか]い階層[かいそう]に潜[ひそ]む秩序[ちつじょ]が人間生活圏[にんげんせいかつけん]にも及[およ]んでいることの証[あかし]でもある。",
      "量子[りょうし]もつれの実用化[じつようか]は、暗号通信[あんごうつうしん]や超高速演算[ちょうこうそくえんざん]のみならず、生体内[せいたいない]の光合成[こうごうせい]の謎[なぞ]を解[と]く鍵[かぎ]にもなると見[み]られている。",
      "一部[いちぶ]の倫理学者[りんりがくしゃ]は、暗号解読[あんごうかいどく]が可能[かのう]になった暁[あかつき]には、既存[きぞん]のプライバシー体制[たいせい]が根底[こんてい]から揺[ゆ]らぐと警告[けいこく]した。",
      "それに対[たい]し椎名[しいな]は「技術[ぎじゅつ]は必然[ひつぜん]として生[しょう]じるが、その使途[しと]は人間[にんげん]が選[えら]ぶにほかならない」と答[こた]え、責任[せきにん]の所在[しょざい]を改[あらた]めて問[と]い直[なお]した。"
    ],
    translation: [
      "At a quantum-engineering research institute in Tsukuba, a team led by Shiina, a physicist in his forties, announced it had succeeded in generating quantum entanglement at room temperature.",
      "Because thermal noise had long been believed to destroy quantum states instantaneously, this result could only be described as overturning the discipline's common sense.",
      "At the press conference, Shiina spoke with composure. 'We had assumed entanglement was a phenomenon permitted only in the microscopic realm. That very assumption was the error.'",
      "The specialized vibration-control device they had developed succeeded in sustaining interference for several hundred microseconds in objects on the order of the wavelength of light.",
      "Skeptical views were not few. Voices of criticism followed one another, claiming 'it is nothing but a convenient bias slipped into the interpretation of observations.'",
      "Yet when replication teams across borders reproduced the same result on three different devices, the doubts all but cleared.",
      "This discovery could at once accelerate the practical deployment of quantum computers. Above all, it is proof that the order latent in the deep strata of nature extends even into the human habitat.",
      "Practical use of quantum entanglement is expected to be the key not only to encrypted communication and ultra-fast computation but also to unlocking the mystery of photosynthesis within living organisms.",
      "Some ethicists warned that once decryption became feasible, existing privacy frameworks would be shaken to their foundations.",
      "To that, Shiina replied, 'Technology arises of necessity, but the choice of its use is none other than humanity's,' and he renewed the question of where responsibility lies."
    ],
    vocab: [
      { word: "量子", reading: "りょうし", meaning: "quantum" },
      { word: "絡み合い", reading: "からみあい", meaning: "entanglement / interlacing" },
      { word: "室温", reading: "しつおん", meaning: "room temperature" },
      { word: "熱雑音", reading: "ねつざつおん", meaning: "thermal noise" },
      { word: "瞬時", reading: "しゅんじ", meaning: "instant" },
      { word: "波長", reading: "はちょう", meaning: "wavelength" },
      { word: "干渉", reading: "かんしょう", meaning: "interference" },
      { word: "懐疑", reading: "かいぎ", meaning: "skepticism" },
      { word: "追試", reading: "ついし", meaning: "replication experiment" },
      { word: "階層", reading: "かいそう", meaning: "stratum / hierarchy" },
      { word: "暗号", reading: "あんごう", meaning: "cipher / code" },
      { word: "暁", reading: "あかつき", meaning: "the moment / dawn" },
      { word: "根底", reading: "こんてい", meaning: "foundation" },
      { word: "使途", reading: "しと", meaning: "use / application" },
      { word: "所在", reading: "しょざい", meaning: "whereabouts / location" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-73 — A diplomatic negotiation (首脳会談の裏側)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-73",
    title: "首脳会談[しゅのうかいだん]の裏側[うらがわ]",
    titleReading: "しゅのうかいだんのうらがわ",
    level: "N1",
    summary: "Behind closed doors at a lakeside villa, two heads of state break a four-year deadlock over a contested maritime border through an unscheduled midnight walk.",
    estMinutes: 8,
    tags: ["diplomacy", "negotiation", "geopolitics"],
    body: [
      "湖畔[こはん]の山荘[さんそう]で開[ひら]かれた首脳会談[しゅのうかいだん]は、初日[しょにち]から硬直[こうちょく]した空気[くうき]に包[つつ]まれていた。",
      "両国[りょうこく]は海洋[かいよう]の排他的経済水域[はいたつてきけいざいすいいき]の境界[きょうかい]を巡[めぐ]り、四年[よねん]にわたり交渉[こうしょう]を停滞[ていたい]させてきた。",
      "公式[こうしき]の議席[ぎせき]では双方[そうほう]の代表[だいひょう]が頑[がん]として譲[ゆず]らず、声明[せいめい]の文案[ぶんあん]一行[いちこう]を巡[めぐ]ってさえ合意[ごうい]に至[いた]らない始末[しまつ]であった。",
      "夜[よる]更[ふ]け、主催国[しゅさいこく]の首相[しゅしょう]藤堂[とうどう]は客人[きゃくじん]を誘[さそ]い、灯[あか]りなき湖畔[こはん]を散歩[さんぽ]した。護衛[ごえい]の者[もの]たちも距離[きょり]を置[お]いた。",
      "藤堂[とうどう]は単刀直入[たんとうちょくにゅう]に言[い]った。「互[たが]いに顔[かお]を潰[つぶ]さずに折[お]れる道[みち]がないのか。四年[よねん]もこのままでは、双方[そうほう]の経済[けいざい]が疲弊[ひへい]するのみだ。」",
      "相手方[あいてがわ]の首脳[しゅのう]は沈黙[ちんもく]の後[のち]、低[ひく]い声[こえ]で答[こた]えた。「私[わたし]も国民[こくみん]への説明[せつめい]を立[た]てる必要[ひつよう]がある。形式上[けいしきじょう]の勝[か]ちを取[と]らねば、政権[せいけん]が崩[くず]れかねない。」",
      "藤堂[とうどう]は頷[うなず]いた。「ならば、共[とも]に漁業権[ぎょぎょうけん]を共同管理[きょうどうかんり]する第三国機関[だいさんこくきかん]を設[もう]けよう。そちらが主導[しゅどう]すれば、顔[かお]は立[た]つ。」",
      "相手方[あいてがわ]の首脳[しゅのう]の目[め]が、湖[みずうみ]の微[かす]かな反射[はんしゃ]の中[なか]で光[ひか]った。「それなら、国民[こくみん]に勝利[しょうり]と共存[きょうぞん]の二[ふた]つを同時[どうじ]に示[しめ]せる。」",
      "翌朝[よくあさ]、共同声明[きょうどうせいめい]は予定[よてい]を前倒[まえだお]しして公表[こうひょう]された。海洋資源[かいようしげん]の共同管理枠組[きょうどうかんりわくぐ]みの設立[せつりつ]で合意[ごうい]したと記[しる]されていた。",
      "外交[がいこう]の真髄[しんずい]は、公式[こうしき]の卓[たく]を離[はな]れた瞬間[しゅんかん]にこそ宿[やど]る、と藤堂[とうどう]は後年[こうねん]に回顧[かいこ]している。言葉[ことば]よりも沈黙[ちんもく]が、時[とき]に和平[わへい]の鍵[かぎ]を握[にぎ]るのである。"
    ],
    translation: [
      "The summit held at a lakeside villa was enveloped, from the very first day, in an atmosphere of rigidity.",
      "For four years the two nations had let negotiations stagnate over the boundary of their exclusive economic zones at sea.",
      "In the formal seats neither side's delegates yielded in the least; even a single line of the joint statement's wording failed to reach agreement.",
      "Late at night, the host nation's Prime Minister Tōdō invited his guest for a walk along the unlit lakeshore. Even the guards kept their distance.",
      "Tōdō spoke bluntly. 'Is there no path by which we can each yield without losing face? Another four years like this will only exhaust both our economies.'",
      "After a silence, the visiting head of state replied in a low voice. 'I too must give an account to my people. If I cannot claim even a formal victory, my administration may collapse.'",
      "Tōdō nodded. 'Then let us establish a third-party body to jointly manage fishing rights. If your side leads it, you save face.'",
      "In the faint reflection of the lake, the visiting leader's eyes gleamed. 'Then we can show our people victory and coexistence at once.'",
      "The next morning, the joint statement was published ahead of schedule. It recorded an agreement to establish a framework for joint management of marine resources.",
      "In later years Tōdō recalled that the essence of diplomacy dwells precisely in the moment one leaves the formal table. Sometimes silence, more than words, holds the key to peace."
    ],
    vocab: [
      { word: "湖畔", reading: "こはん", meaning: "lakeside" },
      { word: "山荘", reading: "さんそう", meaning: "villa / mountain lodge" },
      { word: "硬直", reading: "こうちょく", meaning: "rigidity" },
      { word: "排他的経済水域", reading: "はいたつてきけいざいすいいき", meaning: "exclusive economic zone" },
      { word: "停滞", reading: "ていたい", meaning: "stagnation" },
      { word: "譲る", reading: "ゆずる", meaning: "to yield" },
      { word: "護衛", reading: "ごえい", meaning: "escort / guard" },
      { word: "疲弊", reading: "ひへい", meaning: "exhaustion" },
      { word: "潰す", reading: "つぶす", meaning: "to crush / to lose (face)" },
      { word: "漁業権", reading: "ぎょぎょうけん", meaning: "fishing rights" },
      { word: "主導", reading: "しゅどう", meaning: "leadership" },
      { word: "枠組", reading: "わくぐ", meaning: "framework" },
      { word: "真髄", reading: "しんずい", meaning: "essence" },
      { word: "回顧", reading: "かいこ", meaning: "retrospection" },
      { word: "単刀直入", reading: "たんとうちょくにゅう", meaning: "coming straight to the point" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-74 — A literary prize controversy (文学賞の行方)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-74",
    title: "文学賞[ぶんがくしょう]の行方[ゆくえ]",
    titleReading: "ぶんがくしょうのゆくえ",
    level: "N1",
    summary: "A prestigious novel prize descends into controversy when the winning work is revealed to borrow heavily from an obscure 1960s novella, forcing the jury to deliberate once more.",
    estMinutes: 8,
    tags: ["literature", "prize", "controversy"],
    body: [
      "国内[こくない]で最[もっと]も権威[けんい]ある文学賞[ぶんがくしょう]の受賞者[じゅしょうしゃ]に選[えら]ばれた新進作家[しんしんさっか]の柊[ひいらぎ]は、授賞式[じゅしょうしき]の三日前[みっかまえ]に思[おも]いがけない疑惑[ぎわく]に見舞[みま]われた。",
      "彼女[かのじょ]の受賞作[じゅしょうさく]が、一九六〇年代[せんだいろくじゅうねんだい]に僅[わず]か三百部[さんびゃくぶ]しか刷[す]られなかった無名[むめい]作家[さっか]の中編小説[ちゅうへんしょうせつ]と、章立[しょうだ]てや文体[ぶんたい]において酷似[こくじ]していると指摘[してき]されたのである。",
      "SNS上[じょう]で拡散[かくさん]された比較画像[ひかくがぞう]は、一夜[いちや]にして十万[じゅうまん]共有[きょうゆう]を超[こ]え、世論[よろん]を二分[にぶん]する騒動[そうどう]に発展[はってん]した。",
      "選考委員[せんこういいん]たちは急[きゅう]きょ再審査[さいしんさ]の臨時会議[りんじかいぎ]を開[ひら]き、柊[ひいらぎ]本人[ほんにん]から事情[じじょう]を聴取[ちょうしゅ]した。",
      "柊[ひいらぎ]は淡白[たんぱく]に弁明[べんめい]した。「影響[えいきょう]は否定[ひてい]しない。だが、模倣[もほう]ではない。私[わたし]はその作品[さくひん]から学[まな]んだものを、自[みずか]らの血肉[ちにく]に変[か]えた。」",
      "委員[いいん]の一人[ひとり]は激[はげ]しく反発[はんぱつ]した。「引用[いんよう]も出典[しゅってん]も明示[めいじ]されていない以上[いじょう]、盗作[とうさく]と言[い]われても反論[はんろん]の余地[よち]がない。」",
      "もう一人[ひとり]の長老[ちょうろう]は静[しず]かに言[い]った。「文学[ぶんがく]とは、影響連鎖[えいきょうれんさ]の上[うえ]に成立[せいりつ]するものだ。無[む]から生[しょう]じる物語[ものがたり]などない。」",
      "議論[ぎろん]は六時間[ろくじかん]に及[およ]び、最終的[さいしゅうてき]に「受賞[じゅしょう]は取消[とりけし]さないが、謝辞[しゃじ]において影響元[えいきょうもと]を明記[めいき]する」ことで決着[けっちゃく]を見[み]た。",
      "柊[ひいらぎ]は授賞式[じゅしょうしき]の壇上[だんじょう]で深々[しんしん]と頭[あたま]を下[さ]げ、「先達[せんだつ]の存在[そんざい]なくして、この筆[ふで]は決[けっ]して動[うご]かなかった」と述[の]べ、会場[かいじょう]は割[わ]れるような拍手[はくしゅ]に包[つつ]まれた。",
      "一件落着[いっけんらくちゃく]したように見[み]えたが、創作[そうさく]と盗作[とうさく]の境界[きょうかい]を問[と]う議論[ぎろん]は、業界[ぎょうかい]の中[なか]で今[いま]も燻[くすぶ]り続[つづ]けている。"
    ],
    translation: [
      "Hiiragi, an emerging writer chosen as the winner of the nation's most authoritative literary prize, was struck three days before the ceremony by an unexpected suspicion.",
      "Her winning novel was pointed out to closely resemble an obscure mid-length novel by an unknown writer printed in only three hundred copies in the 1960s, in chapter structure and prose style.",
      "Comparative images spread on social media surpassed one hundred thousand shares overnight, evolving into a furor that split public opinion in two.",
      "The selection committee hastily convened an extraordinary session for re-examination and heard the circumstances from Hiiragi herself.",
      "Hiiragi defended herself plainly. 'I do not deny the influence. But it is not imitation. I transformed what I learned from that work into my own flesh and blood.'",
      "One committee member reacted sharply. 'Since neither quotation nor source is indicated, there is no room to rebut the charge of plagiarism.'",
      "Another elder said quietly. 'Literature is built upon a chain of influence. No story arises from nothing.'",
      "The debate extended over six hours, finally resolving with the decision to 'not revoke the prize, but to state the source of influence clearly in the acceptance speech.'",
      "At the ceremony, on stage, Hiiragi bowed deeply and said, 'Without the predecessors, this brush would never have moved,' and the hall was wrapped in thunderous applause.",
      "It appeared settled, yet the debate over the boundary between creation and plagiarism continues to smolder within the industry today."
    ],
    vocab: [
      { word: "文学賞", reading: "ぶんがくしょう", meaning: "literary prize" },
      { word: "新進", reading: "しんしん", meaning: "emerging" },
      { word: "受賞", reading: "じゅしょう", meaning: "prize-winning" },
      { word: "授賞式", reading: "じゅしょうしき", meaning: "award ceremony" },
      { word: "疑惑", reading: "ぎわく", meaning: "suspicion" },
      { word: "酷似", reading: "こくじ", meaning: "close resemblance" },
      { word: "拡散", reading: "かくさん", meaning: "diffusion" },
      { word: "騒動", reading: "そうどう", meaning: "uproar" },
      { word: "選考", reading: "せんこう", meaning: "selection" },
      { word: "模倣", reading: "もほう", meaning: "imitation" },
      { word: "盗作", reading: "とうさく", meaning: "plagiarism" },
      { word: "連鎖", reading: "れんさ", meaning: "chain" },
      { word: "謝辞", reading: "しゃじ", meaning: "acknowledgment" },
      { word: "先達", reading: "せんだつ", meaning: "predecessor" },
      { word: "燻る", reading: "くすぶる", meaning: "to smolder" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-75 — A technological revolution (知能の覚醒)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-75",
    title: "知能[ちのう]の覚醒[かくせい]",
    titleReading: "ちのうのかくせい",
    level: "N1",
    summary: "A small Tokyo lab releases an open-weight AI model whose emergent reasoning surpasses every closed predecessor, triggering both euphoria and regulatory panic.",
    estMinutes: 9,
    tags: ["technology", "AI", "revolution"],
    body: [
      "東京[とうきょう]の小[ちい]さな研究室[けんきゅうしつ]が、無償[むしょう]で公開[こうかい]した汎用人工知能[はんようじんこうちのう]モデル「凪[なぎ]」は、一夜[いちや]にして世界[せかい]の産業地図[さんぎょうちず]を書[か]き換[か]えた。",
      "既存[きぞん]の巨大[きょだい]IT企業[きぎょう]が何百億円[なんひゃくおくえん]も注[そそ]いで築[きず]いた性能[せいのう]を、わずか二十名[にじゅうめい]のチームが凌駕[りょうが]したのだ。",
      "「凪[なぎ]」は、質問[しつもん]に対[たい]し自[みずか]ら推論過程[すいろんかてい]を記述[きじゅつ]する能力[のうりょく]において、どの商用[しょうよう]モデルをも遥[はる]かに凌駕[りょうが]していた。",
      "中小企業[ちゅうしょうきぎょう]は歓喜[かんき]した。これまで手[て]の届[とど]かなかった高度[こうど]な分析[ぶんせき]や翻訳[ほんやく]が、月[つき]数千円[すうせんえん]で利用[りよう]できるようになったからだ。",
      "他方[たほう]、巨大企業[きょだいきぎょう]の株価[かぶか]は一晩[ひとばん]で暴落[ぼうらく]し、多[おお]くの技術者[ぎじゅつしゃ]が職[しょく]を失[うしな]うこととなった。",
      "各国政府[かっこくせいふ]は規制[きせい]を急[いそ]いだ。「検証不能[けんしょうふのう]な知能[ちのう]を野放[のばな]しにしてはおかない」と、欧州[おうしゅう]の規制当局[きせいとうきょく]は声明[せいめい]を発表[はっぴょう]した。",
      "凪[なぎ]の開発者[かいはつしゃ]である天才[てんさい]プログラマーの倫[りん]は、「知能[ちのう]は特権[とっけん]であってはならない」と繰[く]り返[かえ]し主張[しゅちょう]した。",
      "彼[かれ]は記者団[きしゃだん]に向[む]けて語[かた]った。「私[わたし]たちは機械[きかい]を神[かみ]に祭[まつ]り上[あ]げようとしているのではない。ただ、人間[にんげん]の能力[のうりょく]を誰[だれ]もが等[ひと]しく拡張[かくちょう]できるようにしたいだけだ。」",
      "一[ひと]つの技術[ぎじゅつ]が、社会[しゃかい]の富[とみ]の分配[ぶんぱい]そのものを揺[ゆ]るがすことは稀[まれ]である。凪[なぎ]はまさにその歴史的転換点[れきしてきてんかんてん]に位置[いち]していると言[い]える。",
      "しかし、倫自身[りんじしん]は「我[われ]が子[こ]のような凪[なぎ]が、いつか人間[にんげん]を凌駕[りょうが]する自律性[じりつせい]を獲得[かくとく]する日[ひ]が来[く]るのではないか」と、自[みずか]らもその可能性[かのうせい]を禁[きん]じ得[え]ないと認[みと]めた。"
    ],
    translation: [
      "A small Tokyo laboratory released, free of charge, a general-purpose artificial-intelligence model named 'Nagi,' and in a single night it rewrote the map of global industry.",
      "A team of just twenty surpassed the performance that existing giant IT firms had spent tens of billions of yen to build.",
      "In its capacity to describe its own reasoning process when answering a question, Nagi far outstripped every commercial model.",
      "Small and medium enterprises rejoiced. Advanced analysis and translation that had once been out of reach became available for a few thousand yen per month.",
      "On the other hand, the stock prices of giant firms crashed overnight, and many engineers lost their jobs.",
      "Governments of various nations rushed to regulate. The European regulator issued a statement: 'We will not leave intelligence that cannot be verified unchecked.'",
      "Rin, the genius programmer who developed Nagi, repeatedly asserted, 'Intelligence must not be a privilege.'",
      "To the press corps he said, 'We are not trying to enthrone machines as gods. We only wish to let every human being equally extend their capabilities.'",
      "It is rare for a single technology to shake the very distribution of wealth in society. Nagi can be said to stand precisely at such a historical turning point.",
      "Yet Rin himself acknowledged that he could not forbid the possibility that 'Nagi, like a child of mine, may one day acquire an autonomy that surpasses human beings.'"
    ],
    vocab: [
      { word: "覚醒", reading: "かくせい", meaning: "awakening" },
      { word: "汎用", reading: "はんよう", meaning: "general-purpose" },
      { word: "無償", reading: "むしょう", meaning: "free of charge" },
      { word: "凌駕", reading: "りょうが", meaning: "to surpass" },
      { word: "推論", reading: "すいろん", meaning: "reasoning" },
      { word: "歓喜", reading: "かんき", meaning: "delight" },
      { word: "暴落", reading: "ぼうらく", meaning: "crash (stock)" },
      { word: "野放し", reading: "のばなし", meaning: "leaving unchecked" },
      { word: "特権", reading: "とっけん", meaning: "privilege" },
      { word: "拡張", reading: "かくちょう", meaning: "extension" },
      { word: "分配", reading: "ぶんぱい", meaning: "distribution" },
      { word: "転換点", reading: "てんかんてん", meaning: "turning point" },
      { word: "自律性", reading: "じりつせい", meaning: "autonomy" },
      { word: "獲得", reading: "かくとく", meaning: "acquisition" },
      { word: "禁じ得ない", reading: "きんじえない", meaning: "cannot forbear" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-76 — A cultural identity crisis (帰属を問う旅)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-76",
    title: "帰属[きぞく]を問[と]う旅[たび]",
    titleReading: "きぞくをとうたび",
    level: "N1",
    summary: "A diaspora-born Japanese woman raised in Lisbon returns to her grandparents' village in Tōhoku, only to find she belongs neither here nor there.",
    estMinutes: 7,
    tags: ["identity", "diaspora", "culture"],
    body: [
      "リスボンで生[う]まれ育[そだ]った日系三世[にっけいさんせい]の瑠奈[るな]は、二十八歳[にじゅうはっさい]の春[はる]、初[はじ]めて祖父母[そふぼ]の故郷[こきょう]である東北[とうほく]の寒村[かんそん]を訪[おとず]れた。",
      "彼女[かのじょ]は日本語[にほんご]を流暢[りゅうちょう]に操[あやつ]ったが、村人[むらびと]の方言[ほうげん]は殆[ほと]んど理解[りかい]できず、笑顔[えがお]の裏[うら]で孤独[こどく]を深[ふか]めた。",
      "村[むら]の長老[ちょうろう]は彼女[かのじょ]を見[み]て、「本当[ほんとう]に日本人[にほんじん]かね」と首[くび]を傾[かたむ]けた。その一言[いちげん]が、瑠奈[るな]の胸[むね]に深[ふか]く突[つ]き刺[さ]さった。",
      "彼女[かのじょ]は古[ふる]い蔵[くら]の屋根裏[やねうら]で、祖父母[そふぼ]が葡萄牙[ぽるとがる]に持[も]って行[い]かなかった日記[にっき]と写真[しゃしん]の束[たば]を発見[はっけん]した。",
      "黄[き]ばんだページには、戦前[せんぜん]の村[むら]の祭[まつり]や、祖父[そふ]が船[ふね]でリスボンへ渡[わた]った夜[よる]の決意[けつい]が、拙[つた]ない文字[もじ]で綴[つづ]られていた。",
      "瑠奈[るな]は涙[なみだ]を禁[きん]じ得[え]なかった。彼女[かのじょ]が探[さが]していた「自分[じぶん]」は、ここにも、リスボンにもなく、二[ふた]つの文化[ぶんか]の狭間[はざま]に漂[ただよ]うものだった。",
      "七日目[なのかめ]の夜[よる]、彼女[かのじょ]は村[むら]の寄合[よりあい]に招[まね]かれた。囲炉裏[いろり]を囲[かこ]む老人[ろうじん]たちの話[はな]す言葉[ことば]は、まだ半分[はんぶん]しか分[わ]からなかった。",
      "しかし、ある老婆[ろうば]が彼女[かのじょ]の手[て]を握[にぎ]り、「どこへ行[い]っても、あんたはあんたじゃ」と言[い]った瞬間[しゅんかん]、胸[むね]の何[なに]かが溶[と]けた。",
      "帰属[きぞく]とは血縁[けつえん]でも国籍[こくせき]でもなく、自[みずか]らが選[えら]び、自[みずか]らが受[う]け入[い]れる場所[ばしょ]なのだと、彼女[かのじょ]は初[はじ]めて理解[りかい]した。",
      "瑠奈[るな]はリスボンへ戻[もど]る飛行機[ひこうき]の中[なか]で、祖父母[そふぼ]の日記[にっき]を胸[むね]に抱[いだ]き、自分[じぶん]がこれからどの土地[とち]を足場[あしば]に生[い]きるべきか、静[しず]かに考[かんが]え始[はじ]めた。"
    ],
    translation: [
      "Runa, a third-generation Japanese raised in Lisbon, in the spring of her twenty-eighth year visited for the first time the cold village in Tōhoku that was her grandparents' birthplace.",
      "She wielded Japanese fluently, but she could understand almost none of the villagers' dialect, and behind her smile her loneliness deepened.",
      "The village elder looked at her and tilted his head, 'Are you really Japanese?' That single sentence pierced Runa's chest deeply.",
      "In the attic of an old storehouse she discovered a bundle of diaries and photographs her grandparents had not taken to Portugal.",
      "On yellowed pages, in clumsy characters, were inscribed the village festival before the war, and the resolve of the night her grandfather crossed by ship to Lisbon.",
      "Runa could not hold back tears. The 'self' she had been seeking was neither here nor in Lisbon, but something drifting in the interstices of two cultures.",
      "On the seventh night she was invited to the village gathering. She still understood only half of what the elders, gathered around the sunken hearth, said.",
      "But when an old woman took her hand and said, 'Wherever you go, you are you,' something in her chest melted.",
      "Belonging, she understood for the first time, is not bloodline or nationality, but a place one chooses and accepts for oneself.",
      "Aboard the plane back to Lisbon, Runa held her grandparents' diary to her chest and began quietly to consider on what ground she should henceforth build her life."
    ],
    vocab: [
      { word: "帰属", reading: "きぞく", meaning: "belonging" },
      { word: "故郷", reading: "こきょう", meaning: "birthplace / hometown" },
      { word: "寒村", reading: "かんそん", meaning: "cold, remote village" },
      { word: "方言", reading: "ほうげん", meaning: "dialect" },
      { word: "孤独", reading: "こどく", meaning: "loneliness" },
      { word: "長老", reading: "ちょうろう", meaning: "village elder" },
      { word: "屋根裏", reading: "やねうら", meaning: "attic" },
      { word: "決意", reading: "けつい", meaning: "resolve" },
      { word: "拙い", reading: "つたない", meaning: "clumsy / poor" },
      { word: "綴る", reading: "つづる", meaning: "to inscribe / compose" },
      { word: "寄合", reading: "よりあい", meaning: "village gathering" },
      { word: "囲炉裏", reading: "いろり", meaning: "sunken hearth" },
      { word: "血縁", reading: "けつえん", meaning: "bloodline" },
      { word: "国籍", reading: "こくせき", meaning: "nationality" },
      { word: "足場", reading: "あしば", meaning: "foothold / ground" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-77 — A neuroethical case (記憶を編む医師)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-77",
    title: "記憶[きおく]を編[あ]む医師[いし]",
    titleReading: "きおくをあむいし",
    level: "N1",
    summary: "A neurosurgeon pioneers selective memory erasure for trauma victims, but a patient's request to delete the memory of her deceased child forces him to confront the ethics of his craft.",
    estMinutes: 8,
    tags: ["neuroethics", "medicine", "memory"],
    body: [
      "脳神経外科[のうしんけいげか]の権威[けんい]である白鳥[しらとり]医師[いし]は、記憶[きおく]を選択的[せんたくてき]に消去[しょうきょ]する手術[しゅじゅつ]の開発[かいはつ]に成功[せいこう]した最初[さいしょ]の人物[じんぶつ]となった。",
      "その技術[ぎじゅつ]は、PTSDに苦[く]しむ患者[かんじゃ]の脳内[のうない]から、外傷性[がいしょうせい]の記憶[きおく]のみを精密[せいみつ]に除去[じょきょ]するものであった。",
      "海外[かいがい]の製薬企業[せいやくきぎょう]からは巨額[きょがく]の買収[ばいしゅう]の話[はなし]が寄[よ]せられたが、白鳥[しらとり]は頑[がん]として拒[こば]んだ。「記憶[きおく]は商品[しょうひん]ではない」と言[い]い放[はな]った。",
      "ある日[ひ]、三歳[さんさい]の娘[むすめ]を病[やまい]で亡[な]くした母親[ははおや]が、白鳥[しらとり]の診察室[しんさつしつ]を訪[おとず]れた。「あの子[こ]の記憶[きおく]を消[け]してください。毎日[まいにち]泣[な]いています」と彼女[かのじょ]は懇願[こんがん]した。",
      "白鳥[しらとり]は困惑[こんわく]した。これまで彼[かれ]が消去[しょうきょ]してきたのは、暴力[ぼうりょく]や事故[じこ]の記憶[きおく]ばかりであった。愛[あい]する者[もの]の記憶[きおく]を消[け]すことは、本来[ほんらい]の適応外[てきおうがい]であった。",
      "「消[け]せば、あなたは娘[むすめ]の存在自体[そんざいじたい]を忘[わす]れます。それでもよろしいですか」と彼[かれ]は念[ねん]を押[お]した。",
      "母親[ははおや]は涙[なみだ]ながらに頷[うなず]いた。「この痛[いた]みに耐[た]えられるわけがありません。私[わたし]はもう、あの子[こ]の笑顔[えがお]を思[おも]い出[だ]すたびに壊[こわ]れてしまいそうなのです。」",
      "白鳥[しらとり]は三日間[みっかかん]悩[なや]み抜[ぬ]いた。記憶[きおく]を失[うしな]うことが救済[きゅうさい]となるのか、それとも人間[にんげん]の尊厳[そんげん]を損[そこな]なう行為[こうい]となるのか、一人[ひとり]で判断[はんだん]するには重[おも]すぎる問[と]いであった。",
      "彼[かれ]は最終的[さいしゅうてき]に、「手術[しゅじゅつ]を行[おこな]う代[か]わりに、共[とも]に悲嘆[ひたん]を分[わ]かち合[あ]うカウンセリングを提供[ていきょう]する」という案[あん]を母親[ははおや]に提案[ていあん]し、彼女[かのじょ]は受[う]け入[い]れた。",
      "一年後[いちねんご]、母親[ははおや]は少[すこ]しずつ笑顔[えがお]を取戻[とりもど]し、娘[むすめ]の命[いのち]の記憶[きおく]を抱[いだ]いたまま生[い]きることを選[えら]んだ。白鳥[しらとり]は「記憶[きおく]を消[け]さないことこそが、真[しん]の医療[いりょう]たり得[え]る」と痛感[つうかん]した。"
    ],
    translation: [
      "Shiratori, an authority in cerebrovascular surgery, became the first to succeed in developing a procedure that selectively erases memories.",
      "The technique precisely removed only traumatic memories from the brains of patients suffering from PTSD.",
      "Massive acquisition offers arrived from overseas pharmaceutical firms, but Shiratori refused them all flatly. 'Memory is not a commodity,' he declared.",
      "One day a mother who had lost her three-year-old daughter to illness visited his consulting room. 'Please erase my memory of that child. I cry every day,' she pleaded.",
      "Shiratori was at a loss. What he had erased so far were only memories of violence or accident. To erase the memory of a loved one lay outside the original intended use.",
      "'If I erase it, you will forget the very existence of your daughter. Is that acceptable?' he pressed.",
      "The mother nodded, in tears. 'I cannot bear this pain. Every time I recall that child's smile, I feel as though I am breaking apart.'",
      "Shiratori agonized for three days. Whether the loss of memory would be salvation or an act that violates human dignity was too heavy a question to judge alone.",
      "In the end he proposed to the mother, 'Rather than performing the surgery, I will provide counseling to share your grief together,' and she accepted.",
      "A year later, the mother gradually recovered her smile and chose to live embracing the memory of her daughter's life. Shiratori felt keenly that 'not erasing memory may be what truly constitutes medicine.'"
    ],
    vocab: [
      { word: "脳神経外科", reading: "のうしんけいげか", meaning: "cerebrovascular surgery" },
      { word: "消去", reading: "しょうきょ", meaning: "erasure" },
      { word: "外傷性", reading: "がいしょうせい", meaning: "traumatic" },
      { word: "製薬企業", reading: "せいやくきぎょう", meaning: "pharmaceutical company" },
      { word: "巨額", reading: "きょがく", meaning: "huge sum" },
      { word: "買収", reading: "ばいしゅう", meaning: "acquisition" },
      { word: "懇願", reading: "こんがん", meaning: "plea" },
      { word: "適応外", reading: "てきおうがい", meaning: "off-label / outside indication" },
      { word: "救済", reading: "きゅうさい", meaning: "salvation" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "悩み抜く", reading: "なやみぬく", meaning: "to agonize thoroughly" },
      { word: "悲嘆", reading: "ひたん", meaning: "grief" },
      { word: "痛感", reading: "つうかん", meaning: "to feel keenly" },
      { word: "損なう", reading: "そこなう", meaning: "to impair" },
      { word: "念を押す", reading: "ねんをおす", meaning: "to press / to make sure" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-78 — A climate policy debate (炭素の代償)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-78",
    title: "炭素[たんそ]の代償[だいしょう]",
    titleReading: "たんそのだいしょう",
    level: "N1",
    summary: "At a climate summit, a small island nation's delegate confronts a major emitter over an emergency carbon tax, exposing a fault line between development and survival.",
    estMinutes: 8,
    tags: ["climate", "policy", "summit"],
    body: [
      "太平洋[たいへいよう]の島国[しまぐに]トンガレアの代表[だいひょう]マレアは、気候変動[きこうへんどう]の国際会議[こくさいかいぎ]の演台[えんだい]に立[た]った。",
      "彼女[かのじょ]の国[くに]は、海面上昇[かいめんじょうしょう]により、あと三十年[さんじゅうねん]で国土[こくど]の半分[はんぶん]が水没[すいぼつ]すると予測[よそく]されていた。",
      "「我々[われわれ]の存続[そんぞく]は、先進国[せんしんこく]の経済成長[けいざいせいちょう]のために担保[たんぽ]されているのではありません」とマレアは毅然[きぜん]と訴[うた]えた。",
      "会場[かいじょう]は一瞬[いっしゅん]静[しず]まり返[かえ]った。続[つづ]いて、最[もっと]も排出[はいしゅつ]の多[おお]い国[くに]の代表[だいひょう]が反論[はんろん]に立[た]った。",
      "「急激[きゅうげき]な炭素税[たんそぜい]の引上[ひきあ]げは、我[わ]が国[こく]の産業[さんぎょう]を崩壊[ほうかい]させかねない。漸進的[ぜんしんてき]な移行[いこう]こそが現実的[げんじつてき]だ」と彼[かれ]は主張[しゅちょう]した。",
      "マレアは冷[つめ]たく切[き]り返[かえ]した。「漸進的[ぜんしんてき]とは、我々[われわれ]の島[しま]が沈[しず]むのを悠然[ゆうぜん]と眺[なが]めるという意味[いみ]ですか。」",
      "会場[かいじょう]からは拍手[はくしゅ]が湧[わ]き上[あ]がった。多[おお]くの途上国[とじょうこく]の代表[だいひょう]がマレアに共鳴[きょうめい]した。",
      "しかし、先進国[せんしんこく]陣営[じんえい]の顔[かお]は苦[にが]々[にが]しいものであった。彼等[かれら]は開発途上国[かいはつとじょうこく]の産業[さんぎょう]の競争力[きょうそうりょく]を損[そこ]なう税[ぜい]には、頑[がん]として反対[はんたい]する構[かま]えであった。",
      "議長[ぎちょう]は折衷案[せっちゅうあん]を提示[ていじ]した。富裕国[ふゆうこく]からの基金[ききん]を拡充[かくじゅう]し、島嶼国[とうしょこく]への適応[てきおう]のための資金[しきん]を三倍[さんばい]にする一方[いっぽう]で、段階的[だんかいてき]な炭素価格[たんそかかく]を導入[どうにゅう]するという内容[ないよう]であった。",
      "合意[ごうい]は成立[せいりつ]した。しかしマレアは、「この合意[ごうい]は我々[われわれ]を救[すく]うには不十分[ふじゅうぶん]である。次[つぎ]の十年[じゅうねん]が決[けっ]めてある」と語[かた]り、会場[かいじょう]を去[さ]った。"
    ],
    translation: [
      "Malea, the delegate of Tongarea, a Pacific island nation, stood at the podium of the international conference on climate change.",
      "Her country was projected to lose half its territory to sea-level rise within thirty years.",
      "'Our survival is not collateral for the economic growth of the developed nations,' Malea appealed resolutely.",
      "The hall fell silent for a moment. Then the delegate of the country with the greatest emissions rose to rebut.",
      "'A drastic hike in carbon tax could collapse my country's industry. A gradual transition is the realistic path,' he argued.",
      "Malea shot back coldly. 'By gradual, do you mean serenely watching our islands sink?'",
      "Applause erupted from the hall. Many delegates from developing nations resonated with Malea.",
      "But the faces of the developed-nation bloc were bitter. They were poised to firmly oppose any tax that would undermine the industrial competitiveness of developing nations.",
      "The chair presented a compromise: expand the fund from wealthy nations and triple adaptation funding to island states, while introducing phased carbon pricing.",
      "An agreement was reached. But Malea said, 'This agreement is insufficient to save us. The next ten years will be decisive,' and left the hall."
    ],
    vocab: [
      { word: "炭素", reading: "たんそ", meaning: "carbon" },
      { word: "代償", reading: "だいしょう", meaning: "price / compensation" },
      { word: "海面上昇", reading: "かいめんじょうしょう", meaning: "sea-level rise" },
      { word: "水没", reading: "すいぼつ", meaning: "submergence" },
      { word: "存続", reading: "そんぞく", meaning: "survival / continued existence" },
      { word: "担保", reading: "たんぽ", meaning: "collateral / guarantee" },
      { word: "毅然", reading: "きぜん", meaning: "resolute" },
      { word: "排出", reading: "はいしゅつ", meaning: "emissions" },
      { word: "崩壊", reading: "ほうかい", meaning: "collapse" },
      { word: "漸進", reading: "ぜんしん", meaning: "gradual progress" },
      { word: "悠然", reading: "ゆうぜん", meaning: "serene" },
      { word: "共鳴", reading: "きょうめい", meaning: "resonance" },
      { word: "島嶼国", reading: "とうしょこく", meaning: "island nation" },
      { word: "適応", reading: "てきおう", meaning: "adaptation" },
      { word: "折衷案", reading: "せっちゅうあん", meaning: "compromise proposal" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-79 — A post-truth media analysis (真実の解体)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-79",
    title: "真実[しんじつ]の解体[かいたい]",
    titleReading: "しんじつのかいたい",
    level: "N1",
    summary: "A veteran investigative journalist dissects how recommendation algorithms, deepfakes, and fragmented audiences dissolved the shared notion of fact within a single decade.",
    estMinutes: 9,
    tags: ["media", "post-truth", "disinformation"],
    body: [
      "現役引退[げんえきいんたい]を間近[まぢか]に控[ひか]えたジャーナリストの潮田[うしおだ]は、過去[かこ]十年[じゅうねん]の報道史[ほうどうし]を総括[そうかつ]する著書[ちょしょ]を上梓[じょうし]した。",
      "そのタイトルは『真実[しんじつ]の解体[かいたい]―アルゴリズムが葬[ほうむ]った公共性[こうきょうせい]』であった。",
      "潮田[うしおだ]は指摘[してき]する。二〇一〇年代[にせんじゅうねんだい]半[なか]ばまで、社会[しゃかい]には暗黙[あんもく]の了解[りょうかい]としての「事実[じじつ]」が存在[そんざい]した。",
      "しかし推奨[すいしょう]アルゴリズムが、各個[かっこ]の関心[かんしん]に最適化[さいてきか]された情報[じょうほう]を供給[きょうきょう]し始[はじ]めた途端[とたん]に、共通[きょうつう]の現実[げんじつ]は崩壊[ほうかい]し始[はじ]めた。",
      "ディープフェイクの登場[とうじょう]は、決定的[けっていてき]な打撃[だげき]を与[あた]えた。「映像[えいぞう]は証拠[しょうこ]である」という神話[しんわ]が崩[くず]れ去[さ]ったのである。",
      "「事実[じじつ]」が感情[かんじょう]に屈服[くっぷく]する社会[しゃかい]においては、最[もっと]も扇動的[せんどうてき]な言説[げんせつ]が勝利[しょうり]を収[おさ]める構造[こうぞう]となる。",
      "潮田[うしおだ]は、大手[おおて]プラットフォーム企業[きぎょう]の責任[せきにん]を問[と]うと同時[どうじ]に、読者[どくしゃ]自身[じしん]の情報[じょうほう]リテラシーの欠如[けつじょ]をも糾弾[きゅうだん]した。",
      "彼[かれ]は言[い]う。「真実[しんじつ]を回復[かいふく]するには、アルゴリズムの設計[せっけい]を公開[こうかい]するのみならず、読者[どくしゃ]が自[みずか]ら問[と]う習慣[しゅうかん]を取戻[とりもど]さねばならない。」",
      "著書[ちょしょ]は一部[いちぶ]で絶賛[ぜっさん]されたが、SNS上[じょう]では「古[ふる]いジャーナリズムの怨嗟[えんさ]」と片付[かたづ]けられる始末[しまつ]であった。",
      "潮田[うしおだ]はそれを予期[よき]していたかのように、静[しず]かに笑[わら]った。「私[わたし]が警鐘[けいしょう]を鳴[な]らした事実自体[じじつじたい]が、また一[ひと]つの解釈[かいしゃく]の対象[たいしょう]になる。それこそが、ポスト・真実[しんじつ]の宿命[しゅくめい]だ。」"
    ],
    translation: [
      "Ushioda, a journalist nearing retirement, published a book summing up ten years of press history.",
      "Its title was 'The Dismantling of Truth: How Algorithms Buried the Public Sphere.'",
      "Ushioda points out that until the mid-2010s, society possessed, as tacit understanding, a notion of 'fact.'",
      "But the moment recommendation algorithms began supplying information optimized to each individual's interests, common reality began to collapse.",
      "The emergence of deepfakes delivered the decisive blow. The myth that 'video is evidence' crumbled away.",
      "In a society where 'fact' yields to emotion, the most inflammatory discourse is the structure that prevails.",
      "Ushioda interrogates the responsibility of major platform firms while also indicting readers' own lack of information literacy.",
      "He says, 'To restore truth, we must not only disclose the design of algorithms; readers must recover the habit of questioning for themselves.'",
      "The book was acclaimed by some, but on social media it was summarily dismissed as 'the grievances of old journalism.'",
      "As if he had anticipated this, Ushioda smiled quietly. 'The very fact that I sounded the alarm becomes itself another object of interpretation. That is precisely the fate of the post-truth age.'"
    ],
    vocab: [
      { word: "解体", reading: "かいたい", meaning: "dismantling" },
      { word: "総括", reading: "そうかつ", meaning: "summing up" },
      { word: "上梓", reading: "じょうし", meaning: "to publish" },
      { word: "暗黙", reading: "あんもく", meaning: "tacit" },
      { word: "推奨", reading: "すいしょう", meaning: "recommendation" },
      { word: "最適化", reading: "さいてきか", meaning: "optimization" },
      { word: "途端", reading: "とたん", meaning: "the moment" },
      { word: "屈服", reading: "くっぷく", meaning: "submission" },
      { word: "扇動的", reading: "せんどうてき", meaning: "inflammatory" },
      { word: "言説", reading: "げんせつ", meaning: "discourse" },
      { word: "糾弾", reading: "きゅうだん", meaning: "indictment" },
      { word: "絶賛", reading: "ぜっさん", meaning: "enthusiastic praise" },
      { word: "怨嗟", reading: "えんさ", meaning: "resentment" },
      { word: "警鐘", reading: "けいしょう", meaning: "alarm bell" },
      { word: "宿命", reading: "しゅくめい", meaning: "fate / destiny" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-80 — An existential question (生まれざる者の問い)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-80",
    title: "生[う]まれざる者[もの]の問[と]い",
    titleReading: "うまれざるもののとい",
    level: "N1",
    summary: "A philosopher, dying of an illness, writes a final letter to the child she chose never to conceive, weighing the ethics of bringing life into a suffering world.",
    estMinutes: 9,
    tags: ["existentialism", "ethics", "mortality"],
    body: [
      "余命[よめい]三[みっ]ヶ月[かげつ]を宣告[せんこく]された哲学者[てつがくしゃ]の瑛[えい]は、病室[びょうしつ]の窓[まど]から冬[ふゆ]の空[そら]を眺[なが]めながら、一通[いっつう]の手紙[てがみ]を書[か]き始[はじ]めた。",
      "宛名[あてな]は「私[わたし]が生[う]まなかったあなたへ」。それは、彼女[かのじょ]が生涯[しょうがい]にわたり生[う]まないことを選[えら]んだ、存在[そんざい]せぬ子[こ]への手紙[てがみ]であった。",
      "瑛[えい]は若[わか]き日々[ひび]に、哲学者[てつがくしゃ]ベネディクトの「生[う]まれることの同意[どうい]なき出生[しゅっしょう]」の議論[ぎろん]に触[ふ]れ、深[ふか]く感化[かんか]されていた。",
      "「苦悩[くのう]を知[し]る者[もの]として、新[あら]たな意識[いしき]をこの世界[せかい]に呼[よ]び寄[よ]せる権利[けんり]が私[わたし]にはあるだろうか」という問[と]いが、彼女[かのじょ]の人生[じんせい]を貫[つらぬ]いた。",
      "瑛[えい]は愛[あい]する伴侶[はんりょ]がいた。しかし二人[ふたり]は語[かた]り合[あ]い、子[こ]を持[も]たない生[せい]を選[えら]んだ。自由[じゆう]と責任[せきにん]の、静[しず]かで重[おも]い選択[せんたく]であった。",
      "手紙[てがみ]の中[なか]で彼女[かのじょ]は書[か]いた。「もしあなたが生[う]まれていたなら、私[わたし]はあなたに、桜[さくら]の花[はな]の美[うつく]しさと、別[わか]れの痛[いた]みの、両方[りょうほう]を教[おし]えたであろうに。」",
      "「しかし、あなたが存在[そんざい]しないこと。それ自体[じたい]が、私[わたし]からあなたへの、最大[さいだい]の贈[おく]り物[もの]かもしれない。」",
      "看護師[かんごし]が入室[にゅうしつ]し、薬[くすり]を置[お]いた。瑛[えい]は筆[ふで]を休[やす]め、窓[まど]の外[そと]に舞[ま]う雪[ゆき]を見[み]た。",
      "「私[わたし]は、あなたに生[い]を強[し]いなかった。その事実[じじつ]だけが、私[わたし]の哲学[てつがく]の、唯一[ゆいいつ]誇[ほこ]れる部分[ぶぶん]である。」",
      "手紙[てがみ]は、封筒[ふうとう]に収[おさ]められることなく、彼女[かのじょ]の枕元[まくらもと]に置[お]かれたまま、翌朝[よくあさ]の冷[つめ]たい光[ひかり]の中[なか]で、遺言[ゆいごん]のように静[しず]かに横[よこた]わっていた。"
    ],
    translation: [
      "Ei, a philosopher given three months to live, began writing a letter while gazing at the winter sky from her hospital-room window.",
      "The addressee was 'To you whom I did not bear.' It was a letter to the child she had, throughout her life, chosen never to bring into being.",
      "In her younger days, Ei had encountered the argument of the philosopher Benedict on 'birth without the consent of the one born,' and was deeply influenced.",
      "The question, 'Do I have the right, as one who knows suffering, to summon new consciousness into this world?' had threaded through her entire life.",
      "Ei had a beloved partner. But the two talked and chose a life without children. It was a quiet, heavy choice of freedom and responsibility.",
      "In the letter she wrote, 'Had you been born, I would have taught you both the beauty of cherry blossoms and the pain of parting.'",
      "'But that you do not exist—that itself may be my greatest gift to you.'",
      "A nurse entered and set down medicine. Ei rested her pen and watched the snow fluttering outside the window.",
      "'I did not impose life upon you. That fact alone is the only part of my philosophy I can boast of.'",
      "The letter, never placed in an envelope, lay at her bedside like a last testament, in the cold light of the next morning."
    ],
    vocab: [
      { word: "宣告", reading: "せんこく", meaning: "proclamation / sentence" },
      { word: "宛名", reading: "あてな", meaning: "addressee" },
      { word: "生涯", reading: "しょうがい", meaning: "lifetime" },
      { word: "触れる", reading: "ふれる", meaning: "to encounter / touch" },
      { word: "感化", reading: "かんか", meaning: "influence" },
      { word: "同意", reading: "どうい", meaning: "consent" },
      { word: "出生", reading: "しゅっしょう", meaning: "birth" },
      { word: "貫く", reading: "つらぬく", meaning: "to thread through / pierce" },
      { word: "伴侶", reading: "はんりょ", meaning: "partner / spouse" },
      { word: "贈り物", reading: "おくりもの", meaning: "gift" },
      { word: "看護師", reading: "かんごし", meaning: "nurse" },
      { word: "入室", reading: "にゅうしつ", meaning: "entering a room" },
      { word: "強いる", reading: "しいる", meaning: "to impose" },
      { word: "枕元", reading: "まくらもと", meaning: "bedside" },
      { word: "遺言", reading: "ゆいごん", meaning: "last will / testament" }
    ]
  }
];
