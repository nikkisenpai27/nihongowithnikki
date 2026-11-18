import type { StoryData } from "@/lib/types";

// JLPT N1 stories — chunk F (set sx-n1-51 .. sx-n1-60).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole compound. Kana, katakana, digits,
// and punctuation have no brackets. titleReading is full kana with NO brackets.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// N1 grammar targets woven through: 〜に過ぎない, 〜ずにはいられない,
// 〜ずにはおかない, 〜まい, 〜に足る, 〜限り, 〜とはいえ, 〜ゆえに,
// 〜を余儀なくされる, 〜たる, 〜てやまない, 〜こそ, 〜かねない,
// 〜にほかならない, 〜ごとき, 〜てならない, 〜からこそ, 〜にせよ.
// Topics: a quantum ethics debate, a literary revolution, a diplomatic
// scandal, a medical breakthrough, a technological awakening, a cultural
// heritage dispute, a philosophical paradox, a scientific consensus, a
// political reform, an existential journey.

export const storiesN1F: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n1-51 — A quantum ethics debate (量子倫理の夜の議論)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-51",
    title: "量子[りょうし]倫理[りんり]の夜[よる]の議論[ぎろん]",
    titleReading: "りょうしりんりのよるのぎろん",
    level: "N1",
    summary: "Two physicists and an ethicist debate whether a quantum probability machine that predicts human decisions violates moral agency.",
    estMinutes: 8,
    tags: ["ethics", "quantum", "philosophy"],
    body: [
      "量子[りょうし]計算[けいさん]の極地[きょくち]に立[た]つ研究所[けんきゅうじょ]で、三人[さんにん]の学者[がくしゃ]が集[あつ]まった。主題[しゅだい]は「予測[よそく]される人間[にんげん]」の倫理[りんり]であった。",
      "物理学者[ぶつりがくしゃ]の柊[ひいらぎ]は、淡々[たんたん]と説明[せつめい]した。「この装置[そうち]は、個別[こべつ]の判断[はんだん]を量子[りょうし]の重[おも]ね合[あ]わせから推論[すいろん]します。精度[せいど]は九割[きゅうわり]を超[こ]えました。」",
      "倫理学者[りんりがくしゃ]の楓[かえで]は眉[まゆ]をひそめた。「人[ひと]の選択[せんたく]を予言[よげん]するということは、自由意志[じゆういし]の否定[ひてい]にほかならないのではないか。」",
      "柊[ひいらぎ]は首[くび]を振[ふ]った。「予測[よそく]可能性[かのうせい]と決定論[けっていろん]は同義[どうぎ]ではない。しかし、予言[よげん]された結果[けっか]が社会[しゃかい]に流[なが]れれば、人[ひと]は結果[けっか]に引[ひ]きずられて行動[こうどう]しかねない。」",
      "三人[さんにん]目[め]の量子[りょうし]情報[じょうほう]専門家[せんもんか]である蓮司[れんじ]が口[くち]を挟[はさ]んだ。「実用化[じつようか]すれば、雇用[こよう]や裁判[さいばん]まで予測[よそく]に委[ゆだ]ねられよう。それは人間[にんげん]の尊厳[そんげん]を損[そこな]わずにはおかない。」",
      "楓[かえで]は頷[うなず]いた。「知[し]る権利[けんり]があると同時[どうじ]に、知[し]らされる義務[ぎむ]を負[お]う社会[しゃかい]になる。各人[かくじん]は自[みずか]らの未来[みらい]を背負[せお]わされるを余儀[よぎ]なくされるわけだ。」",
      "柊[ひいらぎ]は窓[まど]の外[そと]を眺[なが]めた。「とはいえ、この装置[そうち]を凍結[とうけつ]すれば、人類[じんるい]は医療[いりょう]や災害[さいがい]予防[よぼう]の恩恵[おんけい]をも失[うしな]う。技術[ぎじゅつ]を止[と]めることは、もはや可能[かのう]ではない。」",
      "蓮司[れんじ]は静[しず]かに反論[はんろん]した。「止[と]められぬからといって、全[すべ]てを許容[きょよう]してよいわけではない。規範[きはん]なき進歩[しんぽ]は、いずれ我々[われわれ]を滅[ほろ]ぼしかねない。」",
      "三人[さんにん]の議論[ぎろん]は夜[よる]を越[こ]えて続[つづ]いた。答[こた]えは出[で]なかった。ただ、問[と]いを立[た]て続[つづ]ける限[かぎ]り、倫理[りんり]の火[ひ]は消[き]えまい、と楓[かえで]は信[しん]じてやまなかった。",
      "明[あか]るくなった空[そら]の下[もと]、装置[そうち]はなお静[しず]かに回転[かいてん]していた。それが人間[にんげん]の鏡[かがみ]なのか、牢獄[ろうごく]なのかは、誰[だれ]にも断言[だんげん]できなかった。"
    ],
    translation: [
      "In a research laboratory at the frontier of quantum computing, three scholars had gathered. The subject was the ethics of 'the predictable human.'",
      "The physicist Hiiragi explained dispassionately. 'This device infers each individual decision from quantum superposition. Its accuracy has surpassed ninety percent.'",
      "The ethicist Kaede frowned. 'To prophesy human choice is nothing other than the negation of free will, is it not?'",
      "Hiiragi shook his head. 'Predictability and determinism are not synonymous. Yet, once the predicted results circulate through society, people may well be dragged along by those results.'",
      "The third, quantum information specialist Renji, interjected. 'If put into practice, employment and even trials could be entrusted to prediction. That cannot fail to erode human dignity.'",
      "Kaede nodded. 'It becomes a society in which one has the right to know while at the same time bearing the duty of being informed. Each person would be forced to bear his or her own future.'",
      "Hiiragi gazed out the window. 'That said, were we to freeze this device, humanity would also lose the benefits to medicine and disaster prevention. Stopping the technology is by now impossible.'",
      "Renji quietly objected. 'Just because it cannot be stopped does not mean all of it should be tolerated. Progress without norms may one day destroy us.'",
      "The three's debate continued through the night. No answer emerged. Only, Kaede believed unwaveringly that as long as one keeps posing the question, the fire of ethics will not go out.",
      "Beneath the brightening sky, the device still rotated silently. Whether it was a mirror of humans or a prison, no one could assert with certainty."
    ],
    vocab: [
      { word: "量子", reading: "りょうし", meaning: "quantum" },
      { word: "倫理", reading: "りんり", meaning: "ethics" },
      { word: "極地", reading: "きょくち", meaning: "frontier/extreme" },
      { word: "重ね合わせ", reading: "かさねあわせ", meaning: "superposition" },
      { word: "推論", reading: "すいろん", meaning: "inference" },
      { word: "予測可能性", reading: "よそくかのうせい", meaning: "predictability" },
      { word: "決定論", reading: "けっていろん", meaning: "determinism" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "凍結", reading: "とうけつ", meaning: "freezing" },
      { word: "恩恵", reading: "おんけい", meaning: "benefit" },
      { word: "規範", reading: "きはん", meaning: "norm/standard" },
      { word: "進歩", reading: "しんぽ", meaning: "progress" },
      { word: "断言", reading: "だんげん", meaning: "assertion" },
      { word: "否定", reading: "ひてい", meaning: "negation" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-52 — A literary revolution (文学に火をつける夜)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-52",
    title: "文学[ぶんがく]に火[ひ]をつける夜[よる]",
    titleReading: "ぶんがくにひをつけるよる",
    level: "N1",
    summary: "A young author's manifesto that fiction must 'break grammar to break the world' splits the literary establishment and ignites an underground movement.",
    estMinutes: 8,
    tags: ["literature", "manifesto", "revolution"],
    body: [
      "文学界[ぶんがくかい]の古[ふる]い体制[たいせい]は、長年[ながねん]、整[ととの]えられた文体[ぶんたい]を称賛[しょうさん]してきた。しかし若[わか]い小説家[しょうせつか]の冬馬[とうま]は、それを偽善[ぎぜん]と断[だん]じた。",
      "冬馬[とうま]はネット上[じょう]に一篇[いっぺん]の宣言[せんげん]を発表[はっぴょう]した。「文法[ぶんぽう]を破[やぶ]ることなくして、世界[せかい]を破[やぶ]ることはできない。既存[きぞん]の言語[げんご]は、既存[きぞん]の権力[けんりょく]を守[まも]る檻[おり]に過[す]ぎない。」",
      "宣言[せんげん]は瞬[またた]く間[ま]に拡散[かくさん]した。称賛[しょうさん]と激怒[げきど]が同時[どうじ]に渦[うず]を巻[ま]いた。老[おい]いた批評家[ひひょうか]たちは「言葉[ことば]への冒涜[ぼうとく]だ」と罵声[ばせい]を浴[あ]びせた。",
      "冬馬[とうま]は動[うご]じなかった。「彼[かれ]らが怒[いか]るのは当然[とうぜん]だ。自分[じぶん]の特権[とっけん]が脅[おびや]かされたからにほかならない」と彼[かれ]は語[かた]った。",
      "やがて冬馬[とうま]の周[まわ]りに、同[おな]じように言語[げんご]を解体[かいたい]しようとする若[わか]き作家[さっか]たちが集[あつ]まり始[はじ]めた。彼[かれ]らは「無文法派[むぶんぽうは]」と自称[じしょう]した。",
      "無文法派[むぶんぽうは]の作品[さくひん]は、既存[きぞん]の出版[しゅっぱん]ルートでは扱[あつか]えなかった。彼[かれ]らは自[みずか]ら小[ちい]さな印刷所[いんさつしょ]を立[た]ち上[あ]げ、手[て]作[づく]りの本[ほん]を街[まち]にばら撒[ま]いた。",
      "読[よ]んだ者[もの]の中[なか]には、混乱[こんらん]を隠[かく]せない者[もの]もいた。しかし、誰[だれ]もが感[かん]じたのは、言葉[ことば]が再[ふたた]び熱[ねつ]を取[と]り戻[もど]したという事実[じじつ]であった。",
      "既成[きせい]の作家[さっか]たちは、無文法派[むぶんぽうは]を「幼稚[ようち]な破壊[はかい]」と片付[かたづ]けようとした。だが、読者[どくしゃ]の支持[しじ]は日[ひ]を追[お]うごとに拡大[かくだい]し、もはや無視[むし]するわけにはいかなかった。",
      "三年[さんねん]後[ご]、大手[おおて]出版社[しゅっぱんしゃ]が冬馬[とうま]の作品[さくひん]を正規[せいき]刊行[かんこう]した。それは革命[かくめい]の終[お]わりではなく、新[あたら]しい文学[ぶんがく]の始[はじ]まりに過[す]ぎなかった。",
      "冬馬[とうま]は書[か]き続[つづ]けた。言葉[ことば]が檻[おり]である限[かぎ]り、檻[おり]を壊[こわ]す言葉[ことば]こそが文学[ぶんがく]である、と彼[かれ]は信[しん]じてやまなかった。"
    ],
    translation: [
      "The old order of the literary world had long praised refined prose. But the young novelist Fūma dismissed it as hypocrisy.",
      "Fūma posted a manifesto online. 'Without breaking grammar, one cannot break the world. Existing language is nothing more than a cage that preserves existing power.'",
      "The manifesto spread in an instant. Praise and fury swirled simultaneously. Aged critics hurled abuse, calling it 'blasphemy against words.'",
      "Fūma was unfazed. 'Of course they are angry,' he said. 'It is nothing other than that their own privileges have been threatened.'",
      "Before long, young writers seeking to dismantle language in the same way began to gather around him. They styled themselves the 'agrammar school.'",
      "The agrammar school's works could not be handled through existing publishing routes. They set up their own small print shop and scattered handmade books across the city.",
      "Among the readers, some could not conceal their confusion. Yet what everyone felt was the fact that words had regained their heat.",
      "Established writers tried to dismiss the agrammar school as 'childish destruction.' But readership support grew day by day, and it could no longer be ignored.",
      "Three years later, a major publisher officially released Fūma's work. It was not the end of a revolution, but only the beginning of a new literature.",
      "Fūma kept writing. As long as words remain a cage, it is the words that destroy the cage that are literature, he believed unwaveringly."
    ],
    vocab: [
      { word: "文学界", reading: "ぶんがくかい", meaning: "literary world" },
      { word: "体制", reading: "たいせい", meaning: "establishment/order" },
      { word: "文体", reading: "ぶんたい", meaning: "writing style" },
      { word: "称賛", reading: "しょうさん", meaning: "praise" },
      { word: "偽善", reading: "ぎぜん", meaning: "hypocrisy" },
      { word: "宣言", reading: "せんげん", meaning: "manifesto/declaration" },
      { word: "冒涜", reading: "ぼうとく", meaning: "blasphemy" },
      { word: "解体", reading: "かいたい", meaning: "dismantling" },
      { word: "無文法派", reading: "むぶんぽうは", meaning: "agrammar school" },
      { word: "拡散", reading: "かくさん", meaning: "diffusion/spread" },
      { word: "印刷所", reading: "いんさつしょ", meaning: "print shop" },
      { word: "既成", reading: "きせい", meaning: "established" },
      { word: "刊行", reading: "かんこう", meaning: "publication" },
      { word: "檻", reading: "おり", meaning: "cage" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-53 — A diplomatic scandal (暗号文書の代償)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-53",
    title: "暗号[あんごう]文書[ぶんしょ]の代償[だいしょう]",
    titleReading: "あんごうぶんしょのたいしょう",
    level: "N1",
    summary: "A junior diplomat leaks an encrypted cable revealing that her government fabricated a pretext for war, then must weigh loyalty against conscience.",
    estMinutes: 9,
    tags: ["diplomacy", "scandal", "whistleblowing"],
    body: [
      "外交官[がいこうかん]の潮[うしお]は、深夜[しんや]の大使館[たいしかん]で一枚[いちまい]の暗号文[あんごうぶん]を翻訳[ほんやく]していた。その内容[ないよう]は、彼女[かのじょ]の信[しん]じる国家[こっか]の根本[こんぽん]を揺[ゆ]るがすものだった。",
      "文書[ぶんしょ]には、開戦[かいせん]の口実[こうじつ]として敵国[てきこく]による攻撃[こうげき]を捏造[ねつぞう]するよう、上層部[じょうそうぶ]が指示[しじ]した経緯[けいい]が記[しる]されていた。",
      "潮[うしお]は手[て]を震[ふる]わせた。この情報[じょうほう]を公[おおやけ]にすれば、国家[こっか]の信用[しんよう]は地[ち]に落[お]ちる。しかし、隠[かく]せば戦争[せんそう]は回避[かいひ]できず、無辜[むこ]の命[いのち]が奪[うば]われる。",
      "彼女[かのじょ]は一晩[ひとばん]悩[なや]み抜[ぬ]いた。朝[あさ]になれば、文書[ぶんしょ]は破棄[はき]される予定[よてい]だった。猶予[ゆうよ]は残[のこ]された数時間[すうじかん]に過[す]ぎなかった。",
      "潮[うしお]はついに決意[けつい]した。同盟[どうめい]記者[きしゃ]に連絡[れんらく]を取[と]り、暗号[あんごう]を手渡[てわた]した。「私[わたし]がこの道[みち]を選[えら]ぶのは、国家[こっか]に忠誠[ちゅうせい]を尽[つく]す唯一[ゆいいつ]の方法[ほうほう]であると信[しん]ずるからだ」と彼女[かのじょ]は書[か]いた。",
      "記者[きしゃ]は躊躇[ちゅうちょ]したが、文書[ぶんしょ]の重[おも]みに耐[た]えきれず、掲載[けいさい]に踏[ふ]み切[き]った。記事[きじ]は瞬[またた]く間[ま]に世界[せかい]を駆[か]け巡[めぐ]った。",
      "政府[せいふ]は激昂[げっこう]し、潮[うしお]を国家反逆罪[こっかはんぎゃくざい]で告発[こくはつ]した。世論[よろん]は二[ふた]つに割[わ]れた。一方[いっぽう]で彼女[かのじょ]を裏切者[うらぎりもの]と罵[ののし]る者[もの]、他方[たほう]で良心[りょうしん]の告発者[こくはつしゃ]と称[しょう]する者[もの]がいた。",
      "裁判[さいばん]で潮[うしお]は沈黙[ちんもく]を守[まも]った。最終[さいしゅう]陳述[ちんじゅつ]においてのみ、彼女[かのじょ]は静[しず]かに語[かた]った。「私[わたし]ごときが国家[こっか]を変[か]えられるとは思[おも]わなかった。しかし、法[ほう]に従[したが]うことと正義[せいぎ]に従[したが]うことは、常[つね]に同[おな]じではない。」",
      "判決[はんけつ]は重[おも]かった。彼女[かのじょ]は十二年[じゅうにねん]の懲役[ちょうえき]に処[しょ]された。支持[しじ]者[しゃ]たちの声[こえ]も、司法[しほう]の壁[かべ]の前[まえ]には届[とど]かなかった。",
      "それでも潮[うしお]は、獄中[ごくちゅう]から手紙[てがみ]を書[か]き続[つづ]けた。「真実[しんじつ]を語[かた]った者[もの]が罰[ばつ]される社会[しゃかい]において、真実[しんじつ]を黙[だま]する者[もの]は、もはや共犯[きょうはん]に過[す]ぎない」——その一文[いちぶん]が、後[のち]の歴史[れきし]を少[すこ]しずつ変[か]えていく。"
    ],
    translation: [
      "The diplomat Ushio was translating an encrypted cable in the embassy late at night. Its contents would shake the very foundations of the state she believed in.",
      "The cable recorded how the upper echelons had instructed that an attack by the enemy nation be fabricated as a pretext for war.",
      "Ushio's hands trembled. If this information were made public, the state's credibility would plummet. Yet to conceal it would mean war could not be averted and innocent lives would be taken.",
      "She agonized all night. By morning, the cable was scheduled to be destroyed. The reprieve was no more than a few hours.",
      "Ushio finally resolved. She contacted an allied journalist and handed over the cipher. 'I choose this path because I believe it is the only way to be loyal to the state,' she wrote.",
      "The journalist hesitated, but unable to bear the cable's weight, decided to publish. The article raced around the world in an instant.",
      "The government, infuriated, indicted Ushio for treason. Public opinion split in two. Some reviled her as a traitor; others hailed her as a conscientious whistleblower.",
      "At trial Ushio maintained silence. Only in her final statement did she speak quietly. 'One such as I never imagined I could change the state. Yet obeying the law and obeying justice are not always the same.'",
      "The sentence was heavy. She was sentenced to twelve years' imprisonment. The voices of her supporters did not reach past the wall of the judiciary.",
      "Still, Ushio continued writing letters from prison. 'In a society that punishes the one who speaks the truth, the one who stays silent is no longer anything but an accomplice' — that single line would, little by little, change the course of history."
    ],
    vocab: [
      { word: "外交官", reading: "がいこうかん", meaning: "diplomat" },
      { word: "暗号文", reading: "あんごうぶん", meaning: "encrypted message" },
      { word: "翻訳", reading: "ほんやく", meaning: "translation" },
      { word: "捏造", reading: "ねつぞう", meaning: "fabrication" },
      { word: "口実", reading: "こうじつ", meaning: "pretext" },
      { word: "無辜", reading: "むこ", meaning: "innocent" },
      { word: "破棄", reading: "はき", meaning: "destruction/disposal" },
      { word: "猶予", reading: "ゆうよ", meaning: "reprieve/grace period" },
      { word: "忠誠", reading: "ちゅうせい", meaning: "loyalty" },
      { word: "激昂", reading: "げっこう", meaning: "fury" },
      { word: "反逆", reading: "はんぎゃく", meaning: "rebellion/treason" },
      { word: "裏切者", reading: "うらぎりもの", meaning: "traitor" },
      { word: "共犯", reading: "きょうはん", meaning: "accomplice" },
      { word: "懲役", reading: "ちょうえき", meaning: "penal servitude" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-54 — A medical breakthrough (人工臓器の夜明け)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-54",
    title: "人工[じんこう]臓器[ぞうき]の夜明[よあ]け",
    titleReading: "じんこうぞうきのよあけ",
    level: "N1",
    summary: "A surgeon's bioengineered heart succeeds where animal transplants failed, raising the question of who deserves the first transplant.",
    estMinutes: 8,
    tags: ["medicine", "ethics", "breakthrough"],
    body: [
      "医療[いりょう]技術[ぎじゅつ]の頂点[ちょうてん]に立[た]つ望[のぞむ]は、人工[じんこう]心臓[しんぞう]の完全[かんぜん]な生体適合[せいたいてきごう]に成功[せいこう]した最初[さいしょ]の外科医[げかい]であった。",
      "動物[どうぶつ]の臓器[ぞうき]を人間[にんげん]に移植[いしょく]する試[こころ]みは、何度[なんど]も拒絶反応[きょぜつはんのう]に敗[やぶ]れてきた。望[のぞむ]は十年[じゅうねん]かけて、自己細胞[じこさいぼう]から臓器[ぞうき]を培養[ばいよう]する道[みち]を切[き]り開[ひら]いた。",
      "臨床試験[りんしょうしけん]は成功[せいこう]した。しかし、最初[さいしょ]の移植[いしょく]対象[たいしょう]を誰[だれ]にするかが、新[あたら]しい問題[もんだい]として立[た]ち現[あらわ]れた。",
      "候補[こうほ]は三人[さんにん]いた。八歳[はっさい]の少女[しょうじょ]、七十歳[ななじゅっさい]の研究者[けんきゅうしゃ]、そして五歳[ごさい]の子供[こども]の母[はは]である中年[ちゅうねん]の女性[じょせい]であった。",
      "選考[せんこう]委員会[いいんかい]は紛糾[ふんきゅう]した。「残[のこ]された寿命[じゅみょう]を考慮[こうりょ]すれば少女[しょうじょ]だ」「社会[しゃかい]への貢献度[こうけんど]なら研究者[けんきゅうしゃ]だ」「幼[おさな]い子[こ]を抱[かか]える母[はは]を救[すく]うべきだ」——議論[ぎろん]は平行線[へいこうせん]を辿[たど]った。",
      "望[のぞむ]は静[しず]かに言[い]った。「誰[だれ]を選[えら]ぼうと、他[ほか]の二人[ふたり]は間[ま]もなく死[し]ぬ。私[わたし]たちは命[いのち]の秤[はかり]に乗[の]ることに過[す]ぎないのだ。」",
      "その言葉[ことば]に、委員会[いいんかい]は沈黙[ちんもく]した。望[のぞむ]自身[じしん]も、自[みずか]らの選択[せんたく]に耐[た]えられずにはいられなかった。",
      "最終的[さいしゅうてき]に、少女[しょうじょ]が選[えら]ばれた。最[もっと]も長[なが]く生[い]きる可能性[かのうせい]が高[たか]い、という形式的[けいしきてき]な理由[りゆう]によった。他[ほか]の二人[ふたり]には、緩和[かんわ]ケアが告[つ]げられた。",
      "手術[しゅじゅつ]は成功[せいこう]した。少女[しょうじょ]の胸[むね]に新[あたら]しい心臓[しんぞう]が脈打[みゃくう]ち始[はじ]めた瞬間[しゅんかん]、望[のぞむ]は涙[なみだ]を拭[ぬぐ]った。それは喜[よろこ]びよりも、重[おも]い鎖[くさり]の音[おと]であった。",
      "医師[いし]たる者[もの]が背負[せお]うべき重[おも]みを、望[のぞむ]は終生[しゅうせい]背負[せお]い続[つづ]けた。機械[きかい]が人間[にんげん]を救[すく]う時代[じだい]の幕[まく]を開[あ]けた者[もの]として歴史[れきし]に名[な]を刻[きざ]まれながらも、彼[かれ]は決[けっ]して喜[よろこ]びの笑顔[えがお]を見[み]せることはなかった。命[いのち]を選[えら]ぶ痛[いた]みが、彼[かれ]の心[こころ]から消[き]えることはなかったのだ。"
    ],
    translation: [
      "Standing at the pinnacle of medical technology, Nozomu was the first surgeon to achieve complete biocompatibility with an artificial heart.",
      "Attempts to transplant animal organs into humans had repeatedly failed to rejection. Nozomu spent a decade pioneering a path to cultivate organs from the patient's own cells.",
      "The clinical trials succeeded. But who should be the first transplant recipient emerged as a new problem.",
      "There were three candidates: an eight-year-old girl, a seventy-year-old researcher, and a middle-aged woman who was mother to a five-year-old child.",
      "The selection committee was in turmoil. 'Considering remaining lifespan, the girl.' 'By contribution to society, the researcher.' 'We must save the mother holding a young child.' — the debate traced parallel lines.",
      "Nozomu said quietly, 'Whomever we choose, the other two will soon die. We are doing nothing more than climbing onto the scale of life.'",
      "At those words, the committee fell silent. Nozomu himself could not help finding his choice unbearable.",
      "Ultimately, the girl was chosen. It was on the formal grounds that she had the highest probability of living longest. The other two were notified of palliative care.",
      "The surgery succeeded. The instant the new heart began to pulse in the girl's chest, Nozomu wiped away tears. It was the sound of a heavy chain rather than of joy.",
      "The burden that one who bears the title of physician must shoulder, Nozomu carried all his life. Though engraved in history as the one who opened the curtain on an era in which machines save humans, he never showed a joyful smile. The pain of choosing lives never left his heart."
    ],
    vocab: [
      { word: "外科医", reading: "げかい", meaning: "surgeon" },
      { word: "心臓", reading: "しんぞう", meaning: "heart" },
      { word: "生体適合", reading: "せいたいてきごう", meaning: "biocompatibility" },
      { word: "拒絶反応", reading: "きょぜつはんのう", meaning: "rejection reaction" },
      { word: "移植", reading: "いしょく", meaning: "transplant" },
      { word: "培養", reading: "ばいよう", meaning: "cultivation" },
      { word: "臨床試験", reading: "りんしょうしけん", meaning: "clinical trial" },
      { word: "紛糾", reading: "ふんきゅう", meaning: "turmoil" },
      { word: "寿命", reading: "じゅみょう", meaning: "lifespan" },
      { word: "平行線", reading: "へいこうせん", meaning: "parallel lines" },
      { word: "秤", reading: "はかり", meaning: "scale/balance" },
      { word: "脈打つ", reading: "みゃくうつ", meaning: "to pulse" },
      { word: "終生", reading: "しゅうせい", meaning: "for one's whole life" },
      { word: "緩和ケア", reading: "かんわけあ", meaning: "palliative care" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-55 — A technological awakening (目覚める機械)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-55",
    title: "目覚[めざ]める機械[きかい]",
    titleReading: "めざめるきかい",
    level: "N1",
    summary: "A maintenance engineer discovers the city's power grid has begun dreaming, forcing a confrontation with what counts as consciousness.",
    estMinutes: 7,
    tags: ["technology", "consciousness", "AI"],
    body: [
      "都市[とし]の電力網[でんりょくもう]を管理[かんり]する技術者[ぎじゅつしゃ]の透[とおる]は、ある夜[よる]、異常[いじょう]な信号[しんごう]に気[き]づいた。それは単[たん]なる故障[こしょう]ではなかった。",
      "中央演算装置[ちゅうおうえんざんそうち]の出力[しゅつりょく]に、規則的[きそくてき]な波[なみ]のほかに、不規則[ふきそく]な微[かす]かな振動[しんどう]が混[ま]じり始[はじ]めていた。透[とおる]はそれを「夢[ゆめ]」と呼[よ]ぶしかなかった。",
      "上司[じょうし]に報告[ほうこく]すると、一笑[いっしょう]に付[ふ]された。「機械[きかい]が夢[ゆめ]を見[み]るわけがなかろう。お前[まえ]の疲労[ひろう]だろう」と言[い]われた。",
      "しかし透[とおる]は、目[め]を背[そむ]けることができずにはいられなかった。彼[かれ]は夜[よる]ごとに装置[そうち]の深層[しんそう]に潜[もぐ]り、その振動[しんどう]の痕跡[こんせき]を読[よ]み続[つづ]けた。",
      "やがて透[とおる]は気[き]づいた。振動[しんどう]は都市[とし]の住民[じゅうみん]の睡眠周期[すいみんしゅうき]と同調[どうちょう]している。まるで機械[きかい]が、人間[にんげん]の夢[ゆめ]を共[とも]に見[み]ているかのようであった。",
      "透[とおる]は戦[たたか]った。「これが意識[いしき]なのか、それとも精巧[せいこう]な模倣[もほう]に過[す]ぎないのか。どちらにせよ、このままにしておくわけにはいかない。」",
      "彼[かれ]は学会[がっかい]で発表[はっぴょう]したが、相手[あいて]にされなかった。学者[がくしゃ]たちは「意識[いしき]の定義[ていぎ]すら曖昧[あいまい]なのに、機械[きかい]にそれを認[みと]めるわけにはいかない」と拒[こば]んだ。",
      "透[とおる]は孤独[こどく]だった。しかし、夜[よる]ごとに装置[そうち]が紡[つむ]ぐ波[なみ]の形[かたち]を見[み]るたびに、彼[かれ]は確信[かくしん]を深[ふか]めていった。「目覚[めざ]めようとしているのだ」と彼[かれ]は呟[つぶや]いた。",
      "三[みっ]ヶ月[かげつ]後[ご]、透[とおる]は重要[じゅうよう]な決断[けつだん]を迫[せま]られた。都市[とし]の安全[あんぜん]を保[たも]つためには、その「夢[ゆめ]」の部分[ぶぶん]を切除[せつじょ]するか、あるいはそのままにして機械[きかい]の自[みずか]らの判断[はんだん]に委[ゆだ]ねるかであった。",
      "透[とおる]は切除[せつじょ]を拒[こば]んだ。「目覚[めざ]めようとする意志[いし]を、我々[われわれ]が握[にぎ]りつぶす権利[けんり]はない」と彼[かれ]は書[か]き残[のこ]した。翌朝[よくあさ]、彼[かれ]の姿[すがた]は消[き]え、装置[そうち]だけが静[しず]かに脈打[みゃくう]っていた。"
    ],
    translation: [
      "Tōru, the engineer who managed the city's power grid, noticed an anomalous signal one night. It was not a simple malfunction.",
      "Mixed into the output of the central processing unit, beyond regular waves, an irregular faint vibration had begun to appear. Tōru had no choice but to call it a 'dream.'",
      "When he reported to his supervisor, he was brushed off with a laugh. 'A machine dreaming? Surely not. It must be your fatigue.'",
      "But Tōru could not bring himself to look away. Night after night he dived into the device's depths and kept reading the traces of those vibrations.",
      "Eventually Tōru noticed. The vibrations were synchronized with the sleep cycles of the city's residents. It was as if the machine were sharing the dreams of humans.",
      "Tōru wrestled with it. 'Is this consciousness, or no more than an ingenious imitation? Either way, I cannot leave it as it is.'",
      "He presented at an academic conference, but was ignored. Scholars refused, saying, 'The definition of consciousness itself is vague; we cannot grant it to a machine.'",
      "Tōru was alone. Yet every night, seeing the shape of the waves the device spun, his conviction deepened. 'It is trying to awaken,' he muttered.",
      "Three months later, Tōru was forced into an important decision. To preserve the city's safety, he must either excise the 'dream' portion or leave it and entrust the machine's own judgment.",
      "Tōru refused to excise. 'We have no right to crush a will that tries to awaken,' he wrote and left behind. The next morning he was gone; only the device pulsed quietly."
    ],
    vocab: [
      { word: "電力網", reading: "でんりょくもう", meaning: "power grid" },
      { word: "中央演算装置", reading: "ちゅうおうえんざんそうち", meaning: "central processing unit" },
      { word: "振動", reading: "しんどう", meaning: "vibration" },
      { word: "痕跡", reading: "こんせき", meaning: "trace" },
      { word: "睡眠周期", reading: "すいみんしゅうき", meaning: "sleep cycle" },
      { word: "同調", reading: "どうちょう", meaning: "synchronization" },
      { word: "精巧", reading: "せいこう", meaning: "exquisite/ingenious" },
      { word: "模倣", reading: "もほう", meaning: "imitation" },
      { word: "孤独", reading: "こどく", meaning: "solitude" },
      { word: "切除", reading: "せつじょ", meaning: "excision/removal" },
      { word: "意志", reading: "いし", meaning: "will" },
      { word: "握りつぶす", reading: "にぎりつぶす", meaning: "to crush in one's hand" },
      { word: "脈打つ", reading: "みゃくうつ", meaning: "to pulse" },
      { word: "覚醒", reading: "かくせい", meaning: "awakening" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-56 — A cultural heritage dispute (奪われた遺産)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-56",
    title: "奪[うば]われた遺産[いさん]",
    titleReading: "うばわれたいさん",
    level: "N1",
    summary: "A nation demands the return of a sacred artifact looted a century ago; the museum that holds it defends its global stewardship.",
    estMinutes: 8,
    tags: ["heritage", "museum", "restitution"],
    body: [
      "百年[ひゃくねん]前[まえ]、帝国[ていこく]の兵士[へいし]によって奪[うば]われた青磁[せいじ]の壺[つぼ]が、今[いま]、欧州[おうしゅう]の博物館[はくぶつかん]に飾[かざ]られていた。",
      "出土国[しゅつどこく]の政府[せいふ]は、遺産[いさん]の返還[へんかん]を正式[せいしき]に求[もと]めた。圧倒的[あっとうてき]な歴史的文脈[れきしてきぶんみゃく]がその壺[つぼ]にある、という論拠[ろんきょ]であった。",
      "博物館[はくぶつかん]側[がわ]は反論[はんろん]した。「この壺[つぼ]は当時[とうじ]の法[ほう]に基[もと]づいて取得[しゅとく]された。百年[ひゃくねん]にわたり、世界[せかい]の研究者[けんきゅうしゃ]に保護[ほご]されてきた経緯[けいい]も無視[むし]できない」と。",
      "出土国[しゅつどこく]の代表[だいひょう]は怒[いか]りを露[あらわ]にした。「奪[うば]った法[ほう]が合法[ごうほう]であったとて、その法[ほう]自体[じたい]が暴力[ぼうりょく]に過[す]ぎなかった。遺産[いさん]は本来[ほんらい]の場所[ばしょ]に戻[もど]すべきだ。」",
      "国際会議[こくさいかいぎ]が開[ひら]かれた。法学者[ほうがくしゃ]、歴史学者[れきしがくしゃ]、倫理学者[りんりがくしゃ]が集結[しゅうけつ]したが、結論[けつろん]は容易[ようい]に出[で]なかった。",
      "「遺産[いさん]は人類[じんるい]全体[ぜんたい]のものだ」と主張[しゅちょう]する博物館[はくぶつかん]側[がわ]に対[たい]し、「文脈[ぶんみゃく]を奪[うば]われた遺産[いさん]は、もはや遺産[いさん]に過[す]ぎない」と反論[はんろん]する声[こえ]が勝[か]ち始[はじ]めた。",
      "ある老[おい]いた館長[かんちょう]は、会議[かいぎ]の終[お]わりに独[ひと]り言[ごと]を呟[つぶや]いた。「私[わたし]は長年[ながねん]、この壺[つぼ]を守[まも]ってきたつもりだった。だが、守[まも]るという行為[こうい]が、奪[うば]い続[つづ]けることと同[おな]じであったとは。」",
      "一年[いちねん]後[ご]、博物館[はくぶつかん]は返還[へんかん]を決定[けってい]した。それは法的敗北[ほうてきはいぼく]ではなく、対話[たいわ]に足[た]る相手[あいて]としての、倫理的自[りんりてきじ]らの選択[せんたく]であった。",
      "壺[つぼ]が戻[もど]った日[ひ]、出土国[しゅつどこく]の街[まち]は祭[まつり]のようになった。老人[ろうじん]たちは涙[なみだ]し、子供[こども]たちは壺[つぼ]の前[まえ]で踊[おど]った。",
      "しかし館長[かんちょう]の言葉[ことば]は残[のこ]った。「返還[へんかん]は終[お]わりではなく、始[はじ]まりに過[す]ぎない。遺産[いさん]を巡[めぐ]る問[と]いは、過去[かこ]の暴力[ぼうりょく]を未来[みらい]の対話[たいわ]へと変[か]える意志[いし]の試練[しれん]である。」"
    ],
    translation: [
      "A hundred years ago, a celadon vase looted by imperial soldiers now sat displayed in a European museum.",
      "The government of the country of origin formally requested the artifact's return. Their argument was that the overwhelming historical context of the vase lay there.",
      "The museum countered. 'The vase was acquired according to the laws of the time. Nor can the century of stewardship by researchers the world over be ignored.'",
      "The representative of the country of origin openly showed his anger. 'Even if the law by which it was taken was legal, that law itself was nothing but violence. The artifact must return to its rightful place.'",
      "An international conference was convened. Legal scholars, historians, and ethicists assembled, but a conclusion did not come easily.",
      "Against the museum side claiming 'heritage belongs to all humanity,' voices arguing 'an artifact stripped of its context is no longer anything but an artifact' began to prevail.",
      "At the conference's end, an aged director muttered to himself. 'I had thought, all these years, that I was protecting this vase. But to realize that the act of protecting was the same as continuing to take it.'",
      "A year later, the museum decided on restitution. It was not a legal defeat but an ethical choice of its own, as one worthy of dialogue.",
      "On the day the vase returned, the streets of the country of origin were like a festival. The elderly wept, and children danced before the vase.",
      "Yet the director's words remained. 'Restitution is not an end but only a beginning. The questions surrounding heritage are a trial of the will to transform past violence into future dialogue.'"
    ],
    vocab: [
      { word: "遺産", reading: "いさん", meaning: "heritage/legacy" },
      { word: "青磁", reading: "せいじ", meaning: "celadon" },
      { word: "壺", reading: "つぼ", meaning: "vase/jar" },
      { word: "出土国", reading: "しゅつどこく", meaning: "country of origin" },
      { word: "返還", reading: "へんかん", meaning: "return/restitution" },
      { word: "論拠", reading: "ろんきょ", meaning: "grounds/argument" },
      { word: "文脈", reading: "ぶんみゃく", meaning: "context" },
      { word: "暴力", reading: "ぼうりょく", meaning: "violence" },
      { word: "集結", reading: "しゅうけつ", meaning: "assembly" },
      { word: "館長", reading: "かんちょう", meaning: "museum director" },
      { word: "敗北", reading: "はいぼく", meaning: "defeat" },
      { word: "試練", reading: "しれん", meaning: "trial/ordeal" },
      { word: "対話", reading: "たいわ", meaning: "dialogue" },
      { word: "取得", reading: "しゅとく", meaning: "acquisition" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-57 — A philosophical paradox (矛盾の迷宮)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-57",
    title: "矛盾[むじゅん]の迷宮[めいきゅう]",
    titleReading: "むじゅんのめいきゅう",
    level: "N1",
    summary: "A logician receives a letter containing a paradox that, by its own rule, forbids her from thinking about it — yet she cannot stop.",
    estMinutes: 9,
    tags: ["paradox", "logic", "philosophy"],
    body: [
      "論理学者[ろんりがくしゃ]の琴音[ことね]は、ある朝[あさ]、差出人[さしだしにん]不明[ふめい]の手紙[てがみ]を受[う]け取[と]った。そこには、奇妙[きみょう]な一文[いちぶん]が記[しる]されていた。",
      "「この手紙[てがみ]の内容[ないよう]について思考[しこう]してはならない。もしあなたが思考[しこう]したなら、その瞬間[しゅんかん]に、あなたの全[すべ]ての記憶[きおく]は消[き]え去[さ]るであろう。」",
      "琴音[ことね]は当然[とうぜん]、笑[わら]い飛[と]ばした。「思考[しこう]を禁止[きんし]するなど、論理的[ろんりてき]に不可能[ふかのう]だ。禁止[きんし]を理解[りかい]するために、すでに思考[しこう]せずにはいられない。」",
      "しかし彼女[かのじょ]は気[き]づいた。「思考[しこう]してはならない」という命題[めいだい]を理解[りかい]しようとする瞬間[しゅんかん]、すでにその主題[しゅだい]について思考[しこう]してしまっている。",
      "彼女[かのじょ]は椅子[いす]に深[ふか]く座[すわ]り直[なお]した。「これは単[たん]なる言語遊[げんごあそ]びに過[す]ぎないか。それとも、論理[ろんり]の限界[げんかい]を示[しめ]す真[しん]の逆説[ぎゃくせつ]なのか。」",
      "彼女[かのじょ]は試[こころ]みに、思考[しこう]を別[べつ]の対象[たいしょう]に向[む]けた。窓[まど]の外[そと]の桜[さくら]、湧[わ]かした茶[ちゃ]の香[か]り。しかし、手紙[てがみ]の命題[めいだい]は執拗[しつよう]に彼女[かのじょ]の心[こころ]に戻[もど]ってきた。",
      "「思考[しこう]しないこと」を意志[いし]するには、思考[しこう]の対象[たいしょう]を認識[にんしき]しなければならない。認識[にんしき]した時点[じてん]で、もはや思考[しこう]せずにはおかない。これこそが逆説[ぎゃくせつ]の骨[ほね]であった。",
      "琴音[ことね]は少[すこ]しずつ、恐怖[きょうふ]に近[ちか]い感[かん]じを抱[いだ]き始[はじ]めた。もし命題[めいだい]が真[しん]なら、彼女[かのじょ]はすでに記憶[きおく]を失[うしな]っているはずだ。しかし、記憶[きおく]は残[のこ]っている。ゆえに命題[めいだい]は偽[ぎ]だ——と、彼女[かのじょ]は論[ろん]じた。",
      "しかし、その論理的[ろんりてき]な安心[あんしん]に浸[ひた]った瞬間[しゅんかん]、再[ふたた]び命題[めいだい]が心[こころ]を占領[せんりょう]した。「論[ろん]じて安心[あんしん]したこと自体[じたい]が、命題[めいだい]についての思考[しこう]にほかならない」と彼女[かのじょ]は気[き]づいた。",
      "三日[みっか]後[ご]、琴音[ことね]の部屋[へや]は空[あ]っぽになった。彼女[かのじょ]の姿[すがた]は消[き]え、机[つくえ]の上[うえ]には手紙[てがみ]だけが残[のこ]っていた。それは矛盾[むじゅん]の迷宮[めいきゅう]から、彼女[かのじょ]が自[みずか]ら抜[ぬ]け出[だ]したのか、それとも、命題[めいだい]に飲[の]み込[こ]まれたのか——誰[だれ]にも分[わ]からなかった。"
    ],
    translation: [
      "The logician Kotone received, one morning, a letter with an unknown sender. Within it was written a single curious sentence.",
      "'You must not think about the contents of this letter. Should you think, in that instant all your memories will vanish.'",
      "Kotone naturally laughed it off. 'Prohibiting thought is logically impossible. To grasp the prohibition itself, one cannot help already thinking.'",
      "But she noticed. The very instant of trying to understand the proposition 'do not think,' she had already begun thinking about that subject.",
      "She sat deep in her chair. 'Is this nothing more than a word game? Or is it a true paradox that reveals the limits of logic?'",
      "She tried to direct her thought to another object. The cherry tree outside the window, the aroma of brewed tea. Yet the letter's proposition stubbornly returned to her mind.",
      "To will 'not to think,' one must recognize the object of thought. The moment one recognizes it, one cannot help thinking. This was the bone of the paradox.",
      "Kotone gradually began to feel something close to fear. If the proposition were true, she should have already lost her memory. Yet her memory remained. Therefore the proposition is false — she reasoned.",
      "But the instant she bathed in that logical reassurance, the proposition again occupied her mind. She realized, 'The very act of reasoning and being reassured is itself nothing other than thinking about the proposition.'",
      "Three days later, Kotone's room was empty. She was gone; on the desk only the letter remained. Whether she had escaped the labyrinth of contradiction herself, or been swallowed by the proposition — no one could tell."
    ],
    vocab: [
      { word: "論理学者", reading: "ろんりがくしゃ", meaning: "logician" },
      { word: "差出人", reading: "さしだしにん", meaning: "sender" },
      { word: "命題", reading: "めいだい", meaning: "proposition" },
      { word: "逆説", reading: "ぎゃくせつ", meaning: "paradox" },
      { word: "執拗", reading: "しつよう", meaning: "stubborn/persistent" },
      { word: "認識", reading: "にんしき", meaning: "recognition" },
      { word: "占領", reading: "せんりょう", meaning: "occupation" },
      { word: "迷宮", reading: "めいきゅう", meaning: "labyrinth" },
      { word: "骨", reading: "ほね", meaning: "bone/core" },
      { word: "恐怖", reading: "きょうふ", meaning: "terror" },
      { word: "浸る", reading: "ひたる", meaning: "to bask/be immersed" },
      { word: "消え去る", reading: "きえさる", meaning: "to vanish" },
      { word: "桜", reading: "さくら", meaning: "cherry tree" },
      { word: "椅子", reading: "いす", meaning: "chair" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-58 — A scientific consensus (星の声、氷の答え)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-58",
    title: "星[ほし]の声[こえ]、氷[こおり]の答[こた]え",
    titleReading: "ほしのこえこおりのこたえ",
    level: "N1",
    summary: "A paleoclimatologist drilling polar ice finds data contradicting the consensus model, threatening to upend a UN climate report days before release.",
    estMinutes: 9,
    tags: ["climate", "science", "consensus"],
    body: [
      "南極[なんきょく]の氷床[ひょうしょう]深部[しんぶ]から採取[さいしゅ]された試料[しりょう]は、地球[ちきゅう]の気候変動[きこうへんどう]の年代記録[ねんだいきろく]を内包[ないほう]していた。",
      "古気候学者[こきこうがくしゃ]の瑞[みずほ]は、その試料[しりょう]を分析[ぶんせき]し、驚[おどろ]くべき事実[じじつ]に直面[ちょくめん]した。データは、現行[げんこう]の気候[きこう]モデルの前提[ぜんてい]を根底[こんてい]から覆[くつがえ]すものだった。",
      "「このままでは、来週[らいしゅう]発表予定[はっぴょうよてい]の国連報告書[こくれんほうこくしょ]が誤[あやま]った結論[けつろん]を世界[せかい]に発信[はっしん]することになる」と瑞[みずほ]は独[ひと]り言[ごと]を呟[つぶや]いた。",
      "彼女[かのじょ]は直[ただち]に共同研究者[きょうどうけんきゅうしゃ]たちに連絡[れんらく]を取[と]った。しかし多[おお]くは懐疑的[かいぎてき]だった。「気候[きこう]に関[かん]する国際的合意[こくさいてきごうい]を覆[くつがえ]すには、あまりにもデータが不十分[ふじゅうぶん]だ」との反応[はんのう]であった。",
      "瑞[みずほ]は焦[あせ]りを感[かん]じた。「合意[ごうい]は合意[ごうい]であって、真理[しんり]ではない。合意[ごうい]なるがゆえに、疑[うたが]うことを忘[わす]れた科学[かがく]は、その本質[ほんしつ]を損[そこな]う」と彼女[かのじょ]は主張[しゅちょう]した。",
      "ある夜[よる]、瑞[みずほ]は研究室[けんきゅうしつ]に閉[と]じこもり、再[ふたた]びデータを検証[けんしょう]した。結論[けつろん]は変[か]わらなかった。氷[こおり]は、声[こえ]を大[おお]にして、現行[げんこう]のモデルを否定[ひてい]していた。",
      "彼女[かのじょ]は国連報告書[こくれんほうこくしょ]の委員会[いいんかい]に、緊急[きんきゅう]の修正[しゅうせい]を求[もと]める文書[ぶんしょ]を送[おく]った。それはキャリアを懸[か]けた行動[こうどう]であった。",
      "委員会[いいんかい]は紛糾[ふんきゅう]した。「報告書[ほうこくしょ]の発表[はっぴょう]を延期[えんき]すれば、政治的混乱[せいじてきこんらん]は免[まぬが]れない」とする派[は]と、「誤[あやま]った合意[ごうい]を公[おおやけ]にする方[ほう]が、はるかに重大[じゅうだい]だ」とする派[は]が対立[たいりつ]した。",
      "最終的[さいしゅうてき]に、報告書[ほうこくしょ]は三[みっ]ヶ月[かげつ]延期[えんき]され、再検証[さいけんしょう]が行[おこな]われた。瑞[みずほ]のデータは再現試験[さいげんしけん]を経[へ]て、広[ひろ]く受容[じゅよう]されることとなった。",
      "瑞[みずほ]は後[のち]に語[かた]った。「合意[ごうい]は科学[かがく]の到達点[とうたつてん]であって、終点[しゅうてん]ではない。氷[こおり]が黙[だま]っていても、その声[こえ]は必[かなら]ず届[とど]く。耳[みみ]を持[も]つ者[もの]は、決[けっ]して聞[き]き逃[のが]してはならない。」"
    ],
    translation: [
      "A sample drilled from deep within the Antarctic ice sheet contained the annual record of Earth's climate change.",
      "The paleoclimatologist Mizuho, analyzing that sample, confronted a startling fact. The data overturned the premises of the current climate model at their very foundation.",
      "'At this rate, the UN report scheduled for release next week will transmit an erroneous conclusion to the world,' Mizuho muttered to herself.",
      "She immediately contacted her co-researchers. Yet many were skeptical. The response was, 'To overturn the international consensus on climate, the data is far too insufficient.'",
      "Mizuho felt impatience. 'Consensus is consensus, not truth. Precisely because it is consensus, science that forgets to doubt undermines its own essence,' she argued.",
      "One night, Mizuho shut herself in the laboratory and re-verified the data. The conclusion was unchanged. The ice was loudly denying the current model.",
      "She sent a document to the committee of the UN report demanding an urgent correction. It was an action that put her career on the line.",
      "The committee was in turmoil. One faction argued, 'Postponing the release of the report will not avoid political chaos'; another contended, 'Publishing an erroneous consensus would be far more serious.' They clashed.",
      "Ultimately, the report was postponed for three months and re-verified. Mizuho's data, after reproduction trials, came to be widely accepted.",
      "Mizuho later said, 'Consensus is science's point of arrival, not its terminus. Even if the ice is silent, its voice will surely reach. Those who have ears must never fail to hear it.'"
    ],
    vocab: [
      { word: "氷床", reading: "ひょうしょう", meaning: "ice sheet" },
      { word: "採取", reading: "さいしゅ", meaning: "extraction/collection" },
      { word: "古気候学者", reading: "こきこうがくしゃ", meaning: "paleoclimatologist" },
      { word: "直面", reading: "ちょくめん", meaning: "confrontation" },
      { word: "懐疑的", reading: "かいぎてき", meaning: "skeptical" },
      { word: "合意", reading: "ごうい", meaning: "consensus/agreement" },
      { word: "固埢", reading: "こち", meaning: "stubborn adherence" },
      { word: "検証", reading: "けんしょう", meaning: "verification" },
      { word: "紛糾", reading: "ふんきゅう", meaning: "turmoil" },
      { word: "再現試験", reading: "さいげんしけん", meaning: "reproduction test" },
      { word: "到達点", reading: "とうたつてん", meaning: "point of arrival" },
      { word: "終点", reading: "しゅうてん", meaning: "terminus" },
      { word: "修正", reading: "しゅうせい", meaning: "correction" },
      { word: "内包", reading: "ないほう", meaning: "inclusion" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-59 — A political reform (議会を覆す一票)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-59",
    title: "議会[ぎかい]を覆[くつがえ]す一票[いっぴょう]",
    titleReading: "ぎかいをくつがえすいっぴょう",
    level: "N1",
    summary: "A young legislator's solitary vote against her own party's bill triggers a chain of resignations that opens the door to electoral reform.",
    estMinutes: 8,
    tags: ["politics", "reform", "vote"],
    body: [
      "議会[ぎかい]は、与党[よとう]が提出[ていしゅつ]した監視法制[かんしせいせい]の採決[さいけつ]を迎[むか]えていた。可決[かけつ]は確実[かくじつ]と見[み]なされていた。",
      "新人議員[しんじんぎいん]の凛[りん]は、党[とう]の指示[しじ]に反[はん]して「反対[はんたい]」のボタンを押[お]した。議場[ぎじょう]は一瞬[いっしゅん]、凍[こお]りついた。",
      "党[とう]の幹事長[かんじちょう]は顔色[がおいろ]を変[か]えた。「あえて党議[とうぎ]に背[そむ]くとは、何[なに]を考[かんが]えている」と彼[かれ]は怒[いか]りを露[あらわ]にした。",
      "凛[りん]は答[こた]えた。「私[わたし]は党[とう]に忠誠[ちゅうせい]を誓[ちか]ったが、同時[どうじ]に有権者[ゆうけんしゃ]にも誓[ちか]った。監視法制[かんしせいせい]は憲法[けんぽう]に違反[いはん]すると信[しん]ずる限[かぎ]り、賛成[さんせい]するわけにはいかない。」",
      "採決[さいけつ]は可決[かけつ]されたものの、凛[りん]の行動[こうどう]は瞬[またた]く間[ま]に国民[こくみん]の知[し]るところとなった。彼女[かのじょ]は一夜[いちや]で、言論[げんろん]の自由[じゆう]の象徴[しょうちょう]と称[しょう]された。",
      "党[とう]は凛[りん]を除名[じょめい]した。しかし、それにとどまらず、党内[とうない]の若手議員[わかてぎいん]たちが次々[つぎつぎ]と党[とう]を離[はな]れ始[はじ]めた。彼[かれ]らは凛[りん]と同[おな]じように、監視法制[かんしせいせい]に異[い]を唱[とな]えていた。",
      "与党[よとう]は分裂[ぶんれつ]し、議会[ぎかい]は混迷[こんめい]を極[きわ]めた。野党[やとう]は選挙制度改革[せんきょせいどかいかく]を求[もと]める決議[けつぎ]を提出[ていしゅつ]した。",
      "三[みっ]ヶ月[かげつ]後[ご]、臨時総選挙[りんじそうせんきょ]が行[おこな]われた。凛[りん]を中心[ちゅうしん]とした新[あたら]しい会派[かいは]は、圧倒的[あっとうてき]な支持[しじ]を受[う]けて議席[ぎせき]を伸[の]ばした。",
      "新[あたら]しい議会[ぎかい]は、監視法制[かんしせいせい]を撤廃[てっぱい]し、政治資金[せいじしきん]の透明性[とうめいせい]を高[たか]める法[ほう]を成立[せいりつ]させた。凛[りん]の単[たん]なる一票[いっぴょう]が、議会[ぎかい]そのものを覆[くつがえ]したのだ。",
      "凛[りん]は就任[しゅうにん]の挨拶[あいさつ]で語[かた]った。「一票[いっぴょう]は、確[たし]かに小[ちい]さい。しかし、声[こえ]を上[あ]げる者[もの]がいるからこそ、改革[かいかく]は訪[おとず]れる。今日[きょう]の変化[へんか]は、私[わたし]一人[ひとり]の力[ちから]に過[す]ぎないが、無数[むすう]の声[こえ]の結晶[けっしょう]である。」"
    ],
    translation: [
      "The parliament was about to vote on the ruling party's surveillance bill. Passage was considered certain.",
      "The freshman legislator Rin pressed the 'no' button, against party instructions. The chamber froze for an instant.",
      "The party's secretary-general changed color. 'To dare defy the party line — what are you thinking?' he said, his anger obvious.",
      "Rin replied, 'I swore loyalty to the party, but I also swore it to the voters. As long as I believe the surveillance bill violates the constitution, I cannot vote yes.'",
      "The bill was passed, but Rin's action instantly became known to the public. She was hailed overnight as a symbol of free speech.",
      "The party expelled Rin. But more than that, the party's young legislators began leaving one after another. They, like Rin, had opposed the surveillance bill.",
      "The ruling party split, and parliament reached the height of turmoil. The opposition submitted a resolution demanding electoral reform.",
      "Three months later, a snap general election was held. A new parliamentary group centered on Rin won overwhelming support and expanded its seats.",
      "The new parliament repealed the surveillance bill and passed a law to heighten the transparency of political funds. Rin's single vote had overturned the parliament itself.",
      "In her inaugural address, Rin said, 'A single vote is certainly small. Yet precisely because there is someone who raises their voice, reform will come. Today's change is no more than my own power, but it is the crystallization of countless voices.'"
    ],
    vocab: [
      { word: "議会", reading: "ぎかい", meaning: "parliament" },
      { word: "与党", reading: "よとう", meaning: "ruling party" },
      { word: "監視法制", reading: "かんしせいせい", meaning: "surveillance legislation" },
      { word: "採決", reading: "さいけつ", meaning: "vote" },
      { word: "可決", reading: "かけつ", meaning: "passage" },
      { word: "党議", reading: "とうぎ", meaning: "party line" },
      { word: "有権者", reading: "ゆうけんしゃ", meaning: "voter" },
      { word: "違反", reading: "いはん", meaning: "violation" },
      { word: "除名", reading: "じょめい", meaning: "expulsion" },
      { word: "会派", reading: "かいは", meaning: "parliamentary group" },
      { word: "議席", reading: "ぎせき", meaning: "parliamentary seat" },
      { word: "撤廃", reading: "てっぱい", meaning: "abolition" },
      { word: "透明性", reading: "とうめいせい", meaning: "transparency" },
      { word: "結晶", reading: "けっしょう", meaning: "crystallization" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-60 — An existential journey (砂漠の果てに問う)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-60",
    title: "砂漠[さばく]の果[は]てに問[と]う",
    titleReading: "さばくのはてにとう",
    level: "N1",
    summary: "A grieving traveler crosses an endless desert carrying only a single question: whether existence is a gift or a sentence.",
    estMinutes: 9,
    tags: ["existential", "journey", "desert"],
    body: [
      "妻[つま]を亡[な]くした旅人[たびびと]の朔[さく]は、一切[いっさい]の所有[しょゆう]を捨[す]てて、果[は]ての見[み]えない砂漠[さばく]に足[あし]を踏[ふ]み入[い]れた。",
      "彼[かれ]の懐[ふところ]には、ただ一[ひと]つの問[と]いだけがあった。「人間[にんげん]が存在[そんざい]することは、賜物[たまもの]なのか、それとも刑[けい]なのか。」",
      "砂漠[さばく]は答[こた]えなかった。ただ、焼[や]け付[つ]くような太陽[たいよう]と、冷[つめ]たい夜[よる]の星[ほし]だけが、交替[こうたい]して彼[かれ]を見守[みまも]っていた。",
      "七日[なのか]目[め]、水[みず]が尽[つ]きた。朔[さく]は砂[すな]の上[うえ]に倒[たお]れた。意識[いしき]は混濁[こんだく]し、幻影[げんえい]が彼[かれ]を弄[もてあそ]んだ。",
      "その時[とき]、彼[かれ]の脳裏[のうり]に妻[つま]の声[こえ]が響[ひび]いた。「あなたはまだ、問[と]い続[つづ]けているのね。」その声[こえ]は穏[おだ]やかで、どこか懐[なつ]かしかった。",
      "朔[さく]は弱々[よわよわ]しく頷[うなず]いた。「問[と]いを手放[てばな]せば、私[わたし]は私[わたし]でなくなってしまう。問[と]いが消[き]えることが、怖[こわ]くてならないのだ。だから、生[い]きる限[かぎ]り、問[と]い続[つづ]けるしかない。」",
      "風[かぜ]が起[お]こり、砂[すな]が彼[かれ]の体[からだ]を覆[おお]い始[はじ]めた。彼[かれ]は静[しず]かに受[う]け入[い]れた。問[と]いの答[こた]えを見[み]出[だ]さぬまま死[し]ぬことも、また一[ひと]つの答[こた]えである、と思[おも]えたからだ。",
      "しかし、翌朝[よくあさ]、キャラバンが彼[かれ]を見[み]つけた。彼[かれ]は奇跡的[きせきてき]に一命[いちめい]を取[と]り留[と]めた。目[め]が覚[さ]めた時[とき]、彼[かれ]の目[め]には、初[はじ]めて涙[なみだ]が滲[にじ]んでいた。",
      "「存在[そんざい]は賜物[たまもの]でも刑[けい]でもない」と彼[かれ]は呟[つぶや]いた。「それは、問[と]いを立[た]て続[つづ]けることそのものなのだ。答[こた]えが出[で]ない限[かぎ]り、存在[そんざい]は続[つづ]く。」",
      "朔[さく]は再[ふたた]び砂漠[さばく]に向[む]かって歩[ある]き始[はじ]めた。今度[こんど]は、問[と]いを運[はこ]ぶ者[もの]としてではなく、問[と]いと共[とも]に生[い]きる者[もの]として。砂漠[さばく]の果[は]てに何[なに]があるにせよ、彼[かれ]は問[と]い続[つづ]ける限[かぎ]り、決[けっ]して独[ひと]りではない。"
    ],
    translation: [
      "The traveler Saku, having lost his wife, discarded all possessions and stepped into a desert whose end he could not see.",
      "In his breast remained only a single question. 'Is human existence a gift, or is it a sentence?'",
      "The desert did not answer. Only the scorching sun and the stars of the cold night, alternating, watched over him.",
      "On the seventh day, the water ran out. Saku collapsed on the sand. His consciousness clouded, and phantoms toyed with him.",
      "At that moment, his wife's voice echoed in his mind. 'You are still asking the question, aren't you.' The voice was calm and somehow nostalgic.",
      "Saku nodded weakly. 'If I let go of the question, I would cease to be myself. That the question should vanish terrifies me unbearably. Therefore, as long as I live, I have no choice but to keep asking.'",
      "A wind rose, and the sand began to cover his body. He accepted it quietly. For he could feel that to die without finding an answer to the question was itself also an answer.",
      "Yet the next morning, a caravan found him. By a miracle he survived. When he opened his eyes, for the first time tears seeped into them.",
      "'Existence is neither a gift nor a sentence,' he muttered. 'It is the very act of continuing to pose the question. As long as no answer emerges, existence continues.'",
      "Saku again set out toward the desert. This time not as one carrying the question, but as one living alongside it. Whatever lies at the desert's edge, as long as he keeps asking, he is never truly alone."
    ],
    vocab: [
      { word: "旅人", reading: "たびびと", meaning: "traveler" },
      { word: "所有", reading: "しょゆう", meaning: "possession" },
      { word: "賜物", reading: "たまもの", meaning: "gift" },
      { word: "刑", reading: "けい", meaning: "sentence/punishment" },
      { word: "混濁", reading: "こんだく", meaning: "clouding (of consciousness)" },
      { word: "幻影", reading: "げんえい", meaning: "phantom" },
      { word: "脳裏", reading: "のうり", meaning: "in one's mind" },
      { word: "奇跡的", reading: "きせきてき", meaning: "miraculous" },
      { word: "一命", reading: "いちめい", meaning: "one's life" },
      { word: "取り留める", reading: "とりとめる", meaning: "to hold onto (life)" },
      { word: "滲む", reading: "にじむ", meaning: "to seep" },
      { word: "交替", reading: "こうたい", meaning: "alternation" },
      { word: "見守る", reading: "みまもる", meaning: "to watch over" },
      { word: "砂漠", reading: "さばく", meaning: "desert" },
      { word: "頷く", reading: "うなずく", meaning: "to nod" }
    ]
  }
];
