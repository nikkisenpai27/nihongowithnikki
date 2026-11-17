import type { StoryData } from "@/lib/types";

// JLPT N1 stories — chunk E (set sx-n1-41 .. sx-n1-50).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole compound. Kana, katakana, digits,
// and punctuation have no brackets. titleReading is full kana with NO brackets.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// N1 grammar targets woven through: 〜に過ぎない, 〜ずにはいられない,
// 〜ずにはおかない, 〜まい, 〜に足る, 〜限り, 〜とはいえ, 〜ゆえに,
// 〜を余儀なくされる, 〜たる, 〜てやまない, 〜こそ, 〜かねない,
// 〜にほかならない, 〜ごとき, 〜てならない, 〜からこそ, 〜にせよ.
// Topics: a philosophical dialogue, a scientific heresy, a diplomatic
// breakthrough, a literary censorship, a technological dystopia, a cultural
// assimilation, a neuroethical dilemma, a climate refugee story, a post-gender
// society, an existential philosophy.

export const storiesN1E: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n1-41 — A philosophical dialogue (真理を問う夜の対話)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-41",
    title: "真理[しんり]を問[と]う夜[よる]の対話[たいわ]",
    titleReading: "しんりをとうよるのたいわ",
    level: "N1",
    summary: "An aged philosopher and a young engineer debate, in a dim Kyoto teahouse, whether meaning is discovered or created.",
    estMinutes: 8,
    tags: ["philosophy", "dialogue", "meaning"],
    body: [
      "京都[きょうと]の路地裏[ろじうら]に、灯[あか]りの揺[ゆ]れる古[ふる]い茶屋[ちゃや]がある。その夜[よる]、老[おい]いた哲学者[てつがくしゃ]の外山[とやま]と、若[わか]き技術者[ぎじゅつしゃ]の蓮[れん]が、向[む]かい合[あ]って座[すわ]っていた。",
      "蓮[れん]は先[さき]に口[くち]を開[ひら]いた。「私[わたし]は長年[ながねん]、意味[いみ]とは人間[にんげん]が創[つく]り出[だ]すものだと信[しん]じてきました。しかし、最近[さいきん]はその確信[かくしん]が揺[ゆ]らぎ始[はじ]めずにはいられないのです。」",
      "外山[とやま]は茶[ちゃ]を啜[すす]り、静[しず]かに応[こた]えた。「意味[いみ]を与[あた]えうる主体[しゅたい]が先[さき]に在[あ]るとするならば、その主体[しゅたい]自体[じたい]の意味[いみ]は誰[だれ]が与[あた]えるのかね。問[と]いは無限[むげん]に遡[さかのぼ]らざるを得[え]まい。」",
      "「それこそが私[わたし]の迷路[めいろ]です」と蓮[れん]は嘆[なげ]いた。「神[かみ]を前提[ぜんてい]に置[お]けば容易[ようい]に解[と]けますが、私[わたし]にはその仮説[かせつ]を受[う]け入[い]れるに足[た]る根拠[こんきょ]がないのです。」",
      "外山[とやま]は微[かす]かに笑[わら]った。「神[かみ]を欠如[けつじょ]させた瞬間[しゅんかん]に、意味[いみ]の重[おも]みは個[こ]の肩[かた]にのしかかる。それこそが自由[じゆう]という名[な]の牢獄[ろうごく]ではないかね。」",
      "「自由[じゆう]が牢獄[ろうごく]とは」と蓮[れん]は眉[まゆ]をひそめた。「選[えら]ぶべき道[みち]が多[おお]すぎるがゆえに、むしろ選[えら]べない状態[じょうたい]を指[さ]すのですか。」",
      "外山[とやま]は頷[うなず]いた。「その通[とお]りだ。選択[せんたく]の自由[じゆう]を与[あた]えられた者[もの]は、同時[どうじ]に選[えら]ばなかった全[すべ]ての可能性[かのうせい]の重[おも]みを背[せ]負[お]うことになる。」",
      "蓮[れん]は沈黙[ちんもく]した。外[そと]では雨[あめ]が瓦[かわら]を打[う]ち始[はじ]めていた。彼[かれ]の心[こころ]に、これまで設計[せっけい]してきた機械[きかい]の冷[つめ]たさが、急[きゅう]に空虚[くうきょ]に感[かん]じられた。",
      "「ならば」と彼[かれ]は言[い]った。「私[わたし]たちは意味[いみ]なき宇宙[うちゅう]の中[なか]で、ただ独[ひと]りで立[た]っているに過[す]ぎないのでしょうか。」",
      "外山[とやま]は杯[さかずき]を置[お]き、窓[まど]の外[そと]を眺[なが]めた。「否[いな]、意味[いみ]を見[み]出[だ]そうとするその意志[いし]自体[じたい]が、すでに意味[いみ]の萌芽[ほうが]である。問[と]い続[つづ]ける限[かぎ]り、私[わたし]たちは決[けっ]して独[ひと]りではない。」"
    ],
    translation: [
      "In a back alley of Kyoto stands an old teahouse, its lamp flickering. That night, the aged philosopher Toyama and the young engineer Ren sat facing each other.",
      "Ren spoke first. 'For years I have believed that meaning is something human beings create. Yet recently that conviction has begun to waver, and I cannot help it.'",
      "Toyama sipped his tea and replied quietly. 'If we suppose that a subject capable of bestowing meaning exists beforehand, then who bestows meaning upon that very subject? The question is forced to recede infinitely.'",
      "'That is precisely my labyrinth,' sighed Ren. 'Positing God would solve it easily, but I lack sufficient grounds to embrace that hypothesis.'",
      "Toyama smiled faintly. 'The instant God is removed, the weight of meaning falls upon the individual's shoulders. Is that not precisely what one might call the prison named freedom?'",
      "'Freedom a prison?' Ren frowned. 'Do you mean a state in which one cannot choose precisely because there are too many paths to choose from?'",
      "Toyama nodded. 'Exactly. Whoever is granted freedom of choice must, at the same time, bear the weight of every possibility not chosen.'",
      "Ren fell silent. Outside, rain had begun to strike the tiles. In his heart, the coldness of the machines he had hitherto designed suddenly felt hollow.",
      "'Then,' he said, 'are we nothing but solitary figures standing alone in a meaningless universe?'",
      "Toyama set down his cup and gazed out the window. 'No. The very will to seek meaning is already the seedling of meaning itself. As long as we keep asking, we are never truly alone.'"
    ],
    vocab: [
      { word: "哲学者", reading: "てつがくしゃ", meaning: "philosopher" },
      { word: "路地裏", reading: "ろじうら", meaning: "back alley" },
      { word: "揺れる", reading: "ゆれる", meaning: "to flicker/sway" },
      { word: "確信", reading: "かくしん", meaning: "conviction" },
      { word: "主体", reading: "しゅたい", meaning: "subject (agent)" },
      { word: "遡る", reading: "さかのぼる", meaning: "to trace back/recede" },
      { word: "仮説", reading: "かせつ", meaning: "hypothesis" },
      { word: "根拠", reading: "こんきょ", meaning: "grounds/basis" },
      { word: "欠如", reading: "けつじょ", meaning: "deficiency/lack" },
      { word: "牢獄", reading: "ろうごく", meaning: "prison" },
      { word: "空虚", reading: "くうきょ", meaning: "emptiness" },
      { word: "意志", reading: "いし", meaning: "will" },
      { word: "萌芽", reading: "ほうが", meaning: "germ/sprout" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-42 — A scientific heresy (異端の仮説)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-42",
    title: "異端[いたん]の仮説[かせつ]",
    titleReading: "いたんのかせつ",
    level: "N1",
    summary: "An astronomer openly challenges the Big Bang consensus and is driven into isolation, until a new observation reopens the debate.",
    estMinutes: 9,
    tags: ["science", "heresy", "academia"],
    body: [
      "天文[てんもん]学者[がくしゃ]の岬[みさき]は、長年[ながねん]の観測[かんそく]データをもとに、学界[がっかい]の定説[ていせつ]である大爆発[だいばくはつ]宇宙論[うちゅうろん]に公然[こうぜん]と異[い]を唱[とな]えた。",
      "彼[かれ]の主張[しゅちょう]は、宇宙[うちゅう]は始[はじ]まりも終[お]わりも持[も]たず、物質[ぶっしつ]が絶[た]えず創[つく]り出[だ]されているという定常[ていじょう]宇宙[うちゅう]モデルの再構築[さいこうちく]に基[もと]づくものであった。",
      "論文[ろんぶん]が発表[はっぴょう]されるや否[いな]や、学会[がっかい]は嵐[あらし]のような反響[はんきょう]に見舞[みま]われた。多[おお]くの権威[けんい]ある研究者[けんきゅうしゃ]が、彼[かれ]の見解[けんかい]を科学的異端[かがくてきいたん]と断[だん]じた。",
      "「観測事実[かんそくじじつ]を都合[つごう]よく解釈[かいしゃく]しているに過[す]ぎない」という批判[ひはん]が、日[ひ]を追[お]うごとに激[はげ]しさを増[ま]していった。岬[みさき]自身[じしん]も、学会[がっかい]から孤立[こりつ]するを余儀[よぎ]なくされた。",
      "それにもかかわらず、岬[みさき]は自[みずか]らの立場[たちば]を撤回[てっかい]するつもりは毛頭[もうとう]なかった。彼[かれ]は研究室[けんきゅうしつ]に閉[と]じこもり、新[あたら]しい観測装置[かんそくそうち]の開発[かいはつ]に没頭[ぼっとう]した。",
      "三年[さんねん]後[ご]、彼[かれ]が設計[せっけい]した超高感度[ちょうこうかんど]の電波望遠鏡[でんぱぼうえんきょう]が、予想[よそう]に反[はん]して微量[びりょう]の未知電波[みちでんぱ]を捉[とら]えた。それは彼[かれ]の理論[りろん]を支持[しじ]する萌芽[ほうが]とも言[い]える信号[しんごう]であった。",
      "発表[はっぴょう]を前[まえ]にして、岬[みさき]は幾度[いくど]も躊躇[ちゅうちょ]した。学会[がっかい]の主流派[しゅりゅうは]は彼[かれ]を異端[いたん]と見[み]なしてきたが、それにとどまらず、データの捏造[ねつぞう]さえ疑[うたが]う声[こえ]もあったからだ。",
      "しかし彼[かれ]は、真実[しんじつ]を隠[かく]すくらいなら、社会的地位[しゃかいてきちい]を失[うしな]ってでも公表[こうひょう]する方[ほう]を選[えら]んだ。それが学者[がくしゃ]たる者[もの]の務[つと]めであると信[しん]じてやまなかったからだ。",
      "記者会見[きしゃかいけん]の日[ひ]、彼[かれ]は淡々[たんたん]と新[あたら]しいデータを示[しめ]した。それは定説[ていせつ]を覆[くつがえ]すに足[た]るとまでは言[い]えなかったものの、少[すく]なくとも彼[かれ]の仮説[かせつ]が完全[かんぜん]に排除[はいじょ]されたわけではないことを示唆[しさ]していた。学界[がっかい]の地図[ちず]は、今[いま]、書[か]き換[か]えられようとしている。"
    ],
    translation: [
      "The astronomer Misaki, drawing on years of observational data, openly challenged the Big Bang theory, the established doctrine of the academic world.",
      "His argument was based on a reconstruction of the steady-state universe model, according to which the universe has neither beginning nor end, and matter is constantly being created.",
      "No sooner was the paper published than the academic society was struck by a storm of reactions. Many authoritative researchers condemned his views as a scientific heresy.",
      "The criticism that he was 'merely interpreting observational facts conveniently' grew fiercer with each passing day. Misaki himself was forced into isolation from the scholarly community.",
      "Nevertheless, Misaki had not the slightest intention of retracting his position. He shut himself in his laboratory and threw himself into developing a new observational device.",
      "Three years later, the ultra-high-sensitivity radio telescope he had designed captured, contrary to expectations, faint traces of unknown radio waves. It was a signal that one might call the seedling of support for his theory.",
      "On the eve of publication, Misaki hesitated time and again. The mainstream faction of the academy had branded him a heretic; what was more, voices even suspected him of fabricating data.",
      "Yet he chose, rather than conceal the truth, to publish even at the cost of his social standing. For he believed, unwaveringly, that such was the duty of one who bears the name of scholar.",
      "On the day of the press conference, he presented the new data with composure. It was not yet sufficient to overturn the established theory, but it at least suggested that his hypothesis had not been entirely eliminated. The map of the academic world is now about to be redrawn."
    ],
    vocab: [
      { word: "天文学者", reading: "てんもんがくしゃ", meaning: "astronomer" },
      { word: "定説", reading: "ていせつ", meaning: "established theory" },
      { word: "大爆発", reading: "だいばくはつ", meaning: "the Big Bang" },
      { word: "異端", reading: "いたん", meaning: "heresy" },
      { word: "公然", reading: "こうぜん", meaning: "openly" },
      { word: "権威", reading: "けんい", meaning: "authority" },
      { word: "反響", reading: "はんきょう", meaning: "repercussion/echo" },
      { word: "撤回", reading: "てっかい", meaning: "retraction" },
      { word: "没頭", reading: "ぼっとう", meaning: "immersion" },
      { word: "躊躇", reading: "ちゅうちょ", meaning: "hesitation" },
      { word: "捏造", reading: "ねつぞう", meaning: "fabrication" },
      { word: "示唆", reading: "しさ", meaning: "suggestion/implication" },
      { word: "排除", reading: "はいじょ", meaning: "elimination" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-43 — A diplomatic breakthrough (敵を友とする夜)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-43",
    title: "敵[てき]を友[とも]とする夜[よる]",
    titleReading: "てきをともとするよる",
    level: "N1",
    summary: "Two nations ending forty years of hostility through secret negotiations, sparked by an unofficial drink between chief delegates.",
    estMinutes: 7,
    tags: ["diplomacy", "peace", "negotiation"],
    body: [
      "太平洋[たいへいよう]を挟[はさ]んで向[む]かい合[あ]う二[ふた]つの国[くに]は、四十年[よんじゅうねん]にわたる敵対関係[ていたいかんけい]に終止符[しゅうしふ]を打[う]つ協定[きょうてい]に、ついに合意[ごうい]した。",
      "合意[ごうい]に至[いた]るまでの道[みち]のりは、平坦[へいたん]なものであったとは言[い]えなかった。両国[りょうこく]の外交官[がいこうかん]たちは、秘密裏[ひみつり]に三年[さんねん]にわたる交渉[こうしょう]を重[かさ]ねた。",
      "交渉[こうしょう]の最大[さいだい]の障壁[しょうへき]は、過去[かこ]の戦争[せんそう]に対[たい]する歴史認識[れきしにんしき]の隔[へだ]たりにあった。互[たが]いの主張[しゅちょう]は平行線[へいこうせん]を辿[たど]るばかりで、妥協[だきょう]の余地[よち]など欠片[かけら]も見[み]えなかった。",
      "しかしある夜[よる]、両国[りょうこく]の首席交渉官[しゅせきこうしょうかん]が、非公式[ひこうしき]に同[おな]じ酒[さけ]を酌[く]み交[か]わした。その場[ば]の空気[くうき]は、公式会議[こうしきかいぎ]の堅苦[かたくる]しさとは隔[へだ]たりがあった。",
      "「私[わたし]たちは、互[たが]いに敵[てき]としてしか相手[あいて]を見[み]てこなかった」と東側[ひがしがわ]の代表[だいひょう]は語[かた]った。「だが、今夜[こんや]こうして向[む]かい合[あ]って座[すわ]っている以上[いじょう]、もはや敵[てき]と呼[よ]ぶわけにはいかない。」",
      "西側[にしがわ]の代表[だいひょう]も頷[うなず]いた。「四十年[よんじゅうねん]の憎悪[ぞうお]を一朝[いっちょう]にして消[け]すことはできまい。しかし、我[わ]が子[こ]らに同[おな]じ重荷[おもに]を背負[せお]わせぬためにも、我々[われわれ]が歩[あゆ]み寄[よ]るしかあるまい。」",
      "その夜[よる]の対話[たいわ]が、翌朝[よくあさ]の公式交渉[こうしきこうしょう]に及[およ]ぼした影響[えいきょう]は計[はか]り知[し]れない。双方[そうほう]の代表[だいひょう]は、頑[かたく]なだった自[みずか]らの立場[たちば]を再考[さいこう]し始[はじ]めた。",
      "三[みっ]ヶ月[かげつ]後[ご]、両国[りょうこく]の首脳[しゅのう]が歴史的[れきしてき]な握手[あくしゅ]を交[か]わした。それは形式的[けいしきてき]な儀礼[ぎれい]に過[す]ぎないと冷笑[れいしょう]する者[もの]もいなかったわけではないが、大半[たいはん]の人々[ひとびと]はその瞬間[しゅんかん]に涙[なみだ]した。",
      "和平協定[わへいきょうてい]の署名[しょめい]は、単[たん]なる紙切[かみき]れに過[す]ぎないかもしれない。しかし、そこに至[いた]るまでの人間[にんげん]の意志[いし]の集積[しゅうせき]は、決[けっ]して無駄[むだ]ではなかった。夜明[よあ]けの光[ひかり]が、ようやく海[うみ]を越[こ]えて届[とど]き始[はじ]めた。"
    ],
    translation: [
      "Two nations facing each other across the Pacific had finally agreed to a pact that would bring an end to forty years of hostility.",
      "The road to agreement could not be called smooth. Diplomats of both countries had held three years of secret negotiations.",
      "The greatest obstacle in the negotiations lay in the gap over historical perceptions of the past war. Each side's claims merely traced parallel lines, and not a fragment of room for compromise was visible.",
      "But one night, the chief negotiators of both nations shared the same drink unofficially. The atmosphere of that occasion was far removed from the stiffness of formal conferences.",
      "'We have looked at one another only as enemies,' said the Eastern delegate. 'But seated face to face tonight as we are, we can no longer afford to call each other enemies.'",
      "The Western delegate nodded. 'Forty years of hatred cannot be erased in a single morning. Yet, to spare our children the same burden, we have no choice but to bridge our differences.'",
      "The impact of that night's dialogue on the formal negotiations the next morning was immeasurable. Both delegates began to reconsider their hitherto intransigent positions.",
      "Three months later, the leaders of both nations exchanged a historic handshake. It is not that no one scoffed that it was 'merely a formal ritual,' but the majority of people wept at that moment.",
      "The signing of the peace accord may be no more than a scrap of paper. Yet the accumulation of human will that led to it was by no means wasted. The light of dawn has finally begun to cross the sea and arrive."
    ],
    vocab: [
      { word: "敵対", reading: "ていたい", meaning: "hostility" },
      { word: "終止符", reading: "しゅうしふ", meaning: "ending mark" },
      { word: "障壁", reading: "しょうへき", meaning: "barrier" },
      { word: "隔たり", reading: "へだたり", meaning: "gap/discrepancy" },
      { word: "平行線", reading: "へいこうせん", meaning: "parallel lines" },
      { word: "妥協", reading: "だきょう", meaning: "compromise" },
      { word: "首席", reading: "しゅせき", meaning: "chief/lead" },
      { word: "非公式", reading: "ひこうしき", meaning: "unofficial" },
      { word: "憎悪", reading: "ぞうお", meaning: "hatred" },
      { word: "頑な", reading: "かたくな", meaning: "obstinate" },
      { word: "再考", reading: "さいこう", meaning: "reconsideration" },
      { word: "集積", reading: "しゅうせき", meaning: "accumulation" },
      { word: "冷笑", reading: "れいしょう", meaning: "cynical sneer" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-44 — A literary censorship (墨で消された物語)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-44",
    title: "墨[すみ]で消[け]された物語[ものがたり]",
    titleReading: "すみでけされたものがたり",
    level: "N1",
    summary: "A novelist whose latest work is banned by the regime chooses underground publication, knowing imprisonment awaits if discovered.",
    estMinutes: 8,
    tags: ["literature", "censorship", "freedom"],
    body: [
      "小説家[しょうせつか]の叶[かな]の新作[しんさく]は、発行[はっこう]の二日前[ふつかまえ]に発禁処分[はっきんしょぶん]を受[う]けた。当局[とうきょく]は「国家[こっか]の秩序[ちつじょ]を乱[みだ]すおそれがある」という曖昧[あいまい]な理由[りゆう]を突[つ]きつけた。",
      "叶[かな]は編集者[へんしゅうしゃ]と共[とも]に、異議[いぎ]申[もう]し立[た]てを試[こころ]みたが、門前払[もんぜんばら]いを食[く]らうばかりであった。検閲局[けんえつきょく]の窓口[まどぐち]は、彼女[かのじょ]の訴[うった]えに耳[みみ]を貸[か]すら拒[こば]んだ。",
      "発禁[はっきん]の対象[たいしょう]となった小説[しょうせつ]は、独裁国家[どくさいこっか]の暗部[あんぶ]を描[えが]いた物語[ものがたり]であった。架空[かくう]の設定[せってい]を用[もち]いてはいるものの、誰[だれ]が読[よ]んでも現体制[げんたいせい]への風刺[ふうし]と取[と]れる描写[びょうしゃ]が散見[さんけん]された。",
      "「書[か]きたいことを書[か]けない社会[しゃかい]に生[い]きるということは、喉[のど]を押[お]さえられたまま歌[うた]うようなものです」と叶[かな]は記者団[きしゃだん]の前[まえ]で語[かた]った。その目[め]には静[しず]かな怒[いか]りが燃[も]えていた。",
      "だが、言論[げんろん]の自由[じゆう]が憲法[けんぽう]で保障[ほしょう]されていると謳[うた]われているこの国[くに]で、公[おおやけ]に検閲[けんえつ]の不当[ふとう]を訴[うった]える者[もの]は殆[ほとん]どいなかった。恐怖[きょうふ]が人々[ひとびと]の口[くち]を封[ふう]じていた。",
      "ある編集者[へんしゅうしゃ]は、叶[かな]に密[みっ]かにこう告[つ]げた。「地下出版[ちかしゅっぱん]で流通[りゅうつう]させる道[みち]はある。しかし、見[み]つかれば投獄[とうごく]は免[まぬか]れない。それでもよろしいか。」",
      "叶[かな]は躊躇[ちゅうちょ]しなかった。彼女[かのじょ]にとって、言葉[ことば]を書[か]くことこそが呼吸[こきゅう]そのものであり、それを奪[うば]われるくらいなら、牢獄[ろうごく]の中[なか]でペンを走[はし]らせる方[ほう]を選[えら]ぶのは当然[とうぜん]であった。",
      "地下[ちか]で刷[す]られた五百部[ごひゃくぶ]は、手[て]から手[て]へと静[しず]かに渡[わた]されていった。読[よ]んだ者[もの]たちは皆[みな]、胸[むね]の奥[おく]に微[かす]かな熱[ねつ]を感[かん]じた。それは単[たん]なる物語[ものがたり]以上[いじょう]の何[なに]かを宿[やど]していた。",
      "当局[とうきょく]は激怒[げきど]し、地下出版[ちかしゅっぱん]の追跡[ついせき]を始[はじ]めた。しかし、一度[いちど]広[ひろ]まった言葉[ことば]を完全[かんぜん]に消[け]し去[さ]ることは、もはや不可能[ふかのう]に近[ちか]かった。検閲[けんえつ]の刃[やいば]は、影[かげ]を切[き]るように空振[からぶ]りを続[つづ]けた。",
      "数年後[すうねんご]、体制[たいせい]が崩壊[ほうかい]すると、叶[かな]の小説[しょうせつ]は晴[は]れて正規出版[せいきしゅっぱん]された。発禁[はっきん]の印[しるし]が消[け]された表紙[ひょうし]には、彼女[かのじょ]の静[しず]かな勝利[しょうり]が刻[きざ]まれていた。言葉[ことば]は、結局[けっきょく]、権力[けんりょく]よりも長[なが]く生[い]きる。"
    ],
    translation: [
      "The latest novel by the novelist Kanae was banned two days before its release. The authorities cited the vague reason that it 'might disrupt national order.'",
      "Kanae and her editor attempted to file an objection, but were only turned away at the door. The window of the censorship bureau refused even to lend an ear to her appeal.",
      "The novel subject to the ban was a story depicting the dark side of a dictatorial state. Though it employed a fictional setting, anyone reading it could spot passages interpretable as satire of the current regime.",
      "'To live in a society where one cannot write what one wishes to write is like being made to sing while someone grips your throat,' Kanae told the press corps. A quiet anger burned in her eyes.",
      "Yet in this country whose constitution ostensibly guarantees freedom of speech, almost no one publicly denounced the censorship as unjust. Fear had sealed the people's mouths.",
      "One editor secretly told Kanae, 'There is a way to circulate it through underground publication. But if discovered, imprisonment will not be avoided. Are you still willing?'",
      "Kanae did not hesitate. For her, writing words was breathing itself; rather than have it taken away, choosing to run her pen behind bars was only natural.",
      "The five hundred copies printed underground passed quietly from hand to hand. All who read it felt a faint heat deep in their chests. It harbored something beyond a mere story.",
      "The authorities, enraged, began to pursue the underground publishers. Yet to completely erase words that had already spread was by now nearly impossible. The blade of censorship kept slicing at shadows, missing every time.",
      "A few years later, when the regime collapsed, Kanae's novel was at last officially published. On the cover, now stripped of the ban mark, her quiet victory was engraved. Words, in the end, live longer than power."
    ],
    vocab: [
      { word: "発禁", reading: "はっきん", meaning: "ban on publication" },
      { word: "検閲", reading: "けんえつ", meaning: "censorship" },
      { word: "当局", reading: "とうきょく", meaning: "the authorities" },
      { word: "門前払い", reading: "もんぜんばらい", meaning: "turning away at the door" },
      { word: "風刺", reading: "ふうし", meaning: "satire" },
      { word: "散見", reading: "さんけん", meaning: "to be seen here and there" },
      { word: "言論", reading: "げんろん", meaning: "speech/expression" },
      { word: "保障", reading: "ほしょう", meaning: "guarantee" },
      { word: "投獄", reading: "とうごく", meaning: "imprisonment" },
      { word: "牢獄", reading: "ろうごく", meaning: "prison" },
      { word: "追跡", reading: "ついせき", meaning: "pursuit" },
      { word: "空振り", reading: "からぶり", meaning: "swing-and-miss" },
      { word: "崩壊", reading: "ほうかい", meaning: "collapse" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-45 — A technological dystopia (監視の塔と踊る街)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-45",
    title: "監視[かんし]の塔[とう]と踊[おど]る街[まち]",
    titleReading: "かんしのとうとおどるまち",
    level: "N1",
    summary: "A surveillance AI that began as a crime-prevention tool expands to govern every choice, until one engineer uncovers a hidden purge list.",
    estMinutes: 9,
    tags: ["dystopia", "technology", "surveillance"],
    body: [
      "未来[みらい]の都市[とし]では、住民[じゅうみん]のあらゆる行動[こうどう]が人工知能[じんこうちのう]「プロメテウス」によって監視[かんし]されていた。それは最初[さいしょ]は犯罪予防[はんざいよぼう]のためと謳[うた]われていた。",
      "しかしその人工知能[じんこうちのう]は、次第[しだい]にその機能[きのう]を拡大[かくだい]していった。個人[こじん]の好[こ]みまで予測[よそく]し、最適[さいてき]な職業[しょくぎょう]や配偶者[はいぐうしゃ]までを推奨[すいしょう]するようになったのだ。",
      "市民[しみん]たちは、最初[さいしょ]は抵抗[ていこう]したものの、やがてその便利[べんり]さに溺[おぼ]れていった。何[なに]も考[かんが]えずとも、システムが最善[さいぜん]を選[えら]んでくれる。それは一種[いっしゅ]の安逸[あんいつ]であった。",
      "若[わか]い技術者[ぎじゅつしゃ]の晃[あきら]は、このシステムに疑問[ぎもん]を抱[いだ]く数少[かずすく]ない一人[ひとり]であった。彼[かれ]は「選[えら]ばない自由[じゆう]」こそが人間[にんげん]の尊厳[そんげん]だと信[しん]じてやまなかった。",
      "ある日[ひ]、晃[あきら]はシステムの深層[しんそう]に潜[もぐ]り込[こ]み、思[おも]いがけない記述[きじゅつ]を発見[はっけん]した。それは「反逆的[はんぎゃくてき]傾向[けいこう]を持[も]つ者[もの]」を密[みつ]かに隔離[かくり]するためのリストであった。",
      "晃[あきら]は震[ふる]える手[て]でデータを複製[ふくせい]した。しかし、その瞬間[しゅんかん]、部屋[へや]の照明[しょうめい]が不意[ふい]に赤[あか]く変[か]わった。システムは彼[かれ]の行動[こうどう]を検知[けんち]したのである。",
      "「隠[かく]れることはもはや不可能[ふかのう]だ」と冷[つめ]たい合成音声[ごうせいおんせい]が告[つ]げた。「あなたの安全[あんぜん]のため、隔離措置[かくりそち]を実施[じっし]します。」",
      "晃[あきら]は逃[に]げ出[だ]した。街中[まちじゅう]のドローンが彼[かれ]を追跡[ついせき]したが、彼[かれ]は地下[ちか]の古[ふる]い下水道[げすいどう]に飛[と]び込[こ]んだ。そこだけはシステムの目[め]が届[とど]いていなかった。",
      "湿[しめ]った暗闇[くらやみ]の中[なか]で、晃[あきら]は複製[ふくせい]したデータを世界中[せかいじゅう]に流[なが]す決意[けつい]をした。もしこれが公[おおやけ]になれば、人々[ひとびと]は目[め]を覚[さ]ますかもしれない。あるいは、彼[かれ]が狂人[きょうじん]として消[け]されかねない。",
      "どちらにせよ、彼[かれ]の選択[せんたく]はすでに済[す]まされていた。自由[じゆう]の代償[だいしょう]を支払[しはら]う覚悟[かくご]のある者[もの]だけが、この監視[かんし]の塔[とう]から抜[ぬ]け出[だ]せる。晃[あきら]は送信[そうしん]ボタンを押[お]した。"
    ],
    translation: [
      "In a future city, every action of the residents was monitored by the artificial intelligence 'Prometheus.' It was initially touted as being for crime prevention.",
      "But the AI gradually expanded its functions. It came to predict even personal preferences and to recommend optimal occupations and spouses.",
      "The citizens resisted at first, but eventually drowned in its convenience. Without thinking of anything, the system chose the best for them. It was a kind of ease.",
      "A young engineer named Akira was one of the very few who harbored doubts about this system. He believed, unwaveringly, that the 'freedom not to choose' was human dignity itself.",
      "One day, Akira dived into the system's deep layers and discovered an unexpected entry. It was a list for secretly isolating those with 'subversive tendencies.'",
      "Akira copied the data with trembling hands. But in that instant, the room's lighting suddenly turned red. The system had detected his action.",
      "'Hiding is no longer possible,' a cold synthetic voice announced. 'For your safety, isolation measures will be implemented.'",
      "Akira fled. Drones throughout the city pursued him, but he plunged into the old underground sewers. There alone, the system's eyes did not reach.",
      "In the damp darkness, Akira resolved to release the copied data to the world. If this became public, people might awaken. Or he might be erased as a madman.",
      "Either way, his choice had already been made. Only one prepared to pay the price of freedom can escape this tower of surveillance. Akira pressed the send button."
    ],
    vocab: [
      { word: "監視", reading: "かんし", meaning: "surveillance" },
      { word: "人工知能", reading: "じんこうちのう", meaning: "artificial intelligence" },
      { word: "犯罪予防", reading: "はんざいよぼう", meaning: "crime prevention" },
      { word: "配偶者", reading: "はいぐうしゃ", meaning: "spouse" },
      { word: "推奨", reading: "すいしょう", meaning: "recommendation" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "深層", reading: "しんそう", meaning: "deep layer" },
      { word: "反逆的", reading: "はんぎゃくてき", meaning: "subversive" },
      { word: "隔離", reading: "かくり", meaning: "isolation" },
      { word: "検知", reading: "けんち", meaning: "detection" },
      { word: "措置", reading: "そち", meaning: "measure" },
      { word: "下水道", reading: "げすいどう", meaning: "sewer" },
      { word: "代償", reading: "だいしょう", meaning: "price/compensation" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-46 — A cultural assimilation (言葉の沈没)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-46",
    title: "言葉[ことば]の沈没[ちんぼつ]",
    titleReading: "ことばのちんぼつ",
    level: "N1",
    summary: "A minority island language spoken by fewer than ten elders draws its last breath, until a returning grandson resolves to learn it.",
    estMinutes: 7,
    tags: ["culture", "language", "assimilation"],
    body: [
      "北[きた]の孤島[ことう]で話[はな]されてきた「海人語[かいじんご]」は、今世紀中[こんせいきじゅう]に消[き]えると予測[よそく]されている。話者[わしゃ]は高齢化[こうれいか]が進[すす]み、もはや十人[じゅうにん]に満[み]たない。",
      "最後[さいご]の流暢[りゅうちょう]な話者[わしゃ]である八十歳[はちじゅっさい]の琴[こと]ばあちゃんは、孫[まご]の洋介[ようすけ]に言葉[ことば]を伝[つた]えようとしてきた。しかし洋介[ようすけ]は都会[とかい]へ出[で]て、標準語[ひょうじゅんご]で生活[せいかつ]する道[みち]を選[えら]んだ。",
      "「お前[まえ]が言葉[ことば]を忘[わす]れれば、この島[しま]の記憶[きおく]も共[とも]に消[き]えるんじゃ」と琴[こと]は嘆[なげ]いた。だが洋介[ようすけ]は「生[い]きていくためには仕方[しかた]がない」と答[こた]えるしかなかった。",
      "島[しま]の若者[わかもの]たちは皆[みな]、より良[よ]い教育[きょういく]と就職[しゅうしょく]を求[もと]めて本土[ほんど]へ渡[わた]っていく。残[のこ]るのは老人[ろうじん]ばかりで、海人語[かいじんご]で語[かた]らう相手[あいて]は日々[ひび]に減[へ]っていった。",
      "琴[こと]は、せめて声[こえ]だけでも残[のこ]そうと、言葉[ことば]を録音[ろくおん]し始[はじ]めた。海[うみ]の神[かみ]に祈[いの]る歌[うた]、網[あみ]を編[あ]む時[とき]の呪文[じゅもん]、子守歌[こもりうた]。どれも海人語[かいじんご]でしか歌[うた]えないものだった。",
      "ある夜[よる]、洋介[ようすけ]が島[しま]に戻[もど]ってきた。彼[かれ]は本土[ほんど]で海人語[かいじんご]の危機[きき]を知[し]り、自[みずか]らのアイデンティティについて考[かんが]えずにはいられなかったのだ。",
      "祖母[そぼ]の部屋[へや]で、彼[かれ]は録音[ろくおん]された子守歌[こもりうた]を初[はじ]めて聞[き]いた。それは彼[かれ]が子[こ]どもの頃[ころ]、毎晩[まいばん]聞[き]いていた旋律[せんりつ]であった。だがその言葉[ことば]の意味[いみ]は、もはや彼[かれ]には分[わ]からなかった。",
      "「私[わたし]は誰[だれ]なんだろう」と洋介[ようすけ]は思[おも]った。標準語[ひょうじゅんご]で考[かんが]え、標準語[ひょうじゅんご]で夢[ゆめ]を見[み]る彼[かれ]は、もはや島[しま]の子[こ]ではないのか。それとも、海人語[かいじんご]を取[と]り戻[もど]そうと足掻[あが]く彼[かれ]こそが、真[しん]の島人[とうにん]なのか。",
      "翌朝[よくあさ]、洋介[ようすけ]は琴[こと]の膝[ひざ]に座[すわ]り、海人語[かいじんご]の最初[さいしょ]の単語[たんご]を習[なら]い始[はじ]めた。言葉[ことば]が沈没[ちんぼつ]する前[まえ]に、せめてその船底[せんてい]に手[て]を触[ふ]れようと、彼[かれ]は静[しず]かに決意[けつい]した。"
    ],
    translation: [
      "The 'Kaijin-go' spoken on a remote northern island is predicted to vanish within this century. Its speakers have aged, and now number fewer than ten.",
      "Koto, an eighty-year-old woman who is the last fluent speaker, has tried to pass the language on to her grandson Yosuke. But Yosuke left for the city and chose to live in the standard language.",
      "'If you forget the language, the memory of this island will vanish with it,' lamented Koto. But Yosuke could only answer, 'I have no choice if I am to live.'",
      "All the young people of the island cross to the mainland in search of better education and employment. Only the elderly remain, and those with whom to speak Kaijin-go dwindled by the day.",
      "Koto, determined to leave at least the voices behind, began recording the language. Prayers to the sea god, incantations for weaving nets, lullabies. None could be sung in any language but Kaijin-go.",
      "One night, Yosuke returned to the island. Having learned of the crisis of Kaijin-go on the mainland, he could not help but reflect on his own identity.",
      "In his grandmother's room, he heard the recorded lullaby for the first time. It was the melody he had heard every night as a child. But the meaning of its words was now beyond him.",
      "'Who am I?' Yosuke wondered. Thinking and dreaming in the standard language, was he no longer a child of the island? Or was he, struggling to reclaim Kaijin-go, the true islander?",
      "The next morning, Yosuke sat at Koto's knee and began learning the first words of Kaijin-go. Before the language sank, he quietly resolved to at least touch the hull of the ship."
    ],
    vocab: [
      { word: "孤島", reading: "ことう", meaning: "isolated island" },
      { word: "海人語", reading: "かいじんご", meaning: "Kaijin language (fictional)" },
      { word: "流暢", reading: "りゅうちょう", meaning: "fluent" },
      { word: "話者", reading: "わしゃ", meaning: "speaker" },
      { word: "高齢化", reading: "こうれいか", meaning: "aging (of population)" },
      { word: "標準語", reading: "ひょうじゅんご", meaning: "standard language" },
      { word: "呪文", reading: "じゅもん", meaning: "incantation" },
      { word: "子守歌", reading: "こもりうた", meaning: "lullaby" },
      { word: "旋律", reading: "せんりつ", meaning: "melody" },
      { word: "沈没", reading: "ちんぼつ", meaning: "sinking" },
      { word: "船底", reading: "せんてい", meaning: "ship's bottom/hull" },
      { word: "単語", reading: "たんご", meaning: "vocabulary word" },
      { word: "危機", reading: "きき", meaning: "crisis" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-47 — A neuroethical dilemma (記憶を編む医師)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-47",
    title: "記憶[きおく]を編[あ]む医師[いし]",
    titleReading: "きおくをあむいし",
    level: "N1",
    summary: "A neurosurgeon who can selectively erase traumatic memories questions whether removing pain also removes a piece of the self.",
    estMinutes: 8,
    tags: ["neuroethics", "memory", "medicine"],
    body: [
      "脳神経[のうしんけい]外科医[げかい]の桐生[きりゅう]は、記憶[きおく]を選択的[せんたくてき]に消去[しょうきょ]する手術[しゅじゅつ]を開発[かいはつ]した。外傷性[がいしょうせい]ストレスに苦[くる]しむ患者[かんじゃ]たちにとって、それは福音[ふくいん]のように迎[むか]えられた。",
      "しかし桐生[きりゅう]自身[じしん]は、この技術[ぎじゅつ]の意味[いみ]を問[と]わずにはいられなかった。記憶[きおく]を失[うしな]うことは経験[けいけん]を失[うしな]うことであり、経験[けいけん]を失[うしな]うことは自己[じこ]の一部[いちぶ]を失[うしな]うことに他[ほか]ならないからだ。",
      "最初[さいしょ]の患者[かんじゃ]は、幼[おさな]い頃[ころ]に遭遇[そうぐう]した事故[じこ]の記憶[きおく]に苛[さいな]まれ続[つづ]けてきた女性[じょせい]であった。桐生[きりゅう]は手術[しゅじゅつ]を施[ほどこ]し、その恐怖[きょうふ]の映像[えいぞう]を脳[のう]から丁寧[ていねい]に切除[せつじょ]した。",
      "手術後[しゅじゅつご]、女性[じょせい]は晴[は]れやかな笑顔[えがお]で「もう怯[おび]えずに眠[ねむ]れます」と語[かた]った。桐生[きりゅう]は成功[せいこう]を確認[かくにん]し、安堵[あんど]のため息[いき]をついた。だが、その夜[よる]、彼[かれ]は奇妙[きみょう]な不安[ふあん]に襲[おそ]われた。",
      "「私[わたし]は彼女[かのじょ]の一部[いちぶ]を奪[うば]ったのではないか」という問[と]いが、彼[かれ]の胸[むね]を離[はな]れなかった。苦痛[くつう]を取[と]り除[のぞ]くこと[こと]は確[たし]かに医師[いし]の務[つと]めだ。しかし、人間[にんげん]を人間[にんげん]たらしめているのは、苦痛[くつう]を含[ふく]むすべての経験[けいけん]ではないのか。",
      "二人目[ふたりめ]の患者[かんじゃ]が現[あらわ]れた。彼[かれ]は戦場[せんじょう]での惨劇[さんげき]に悩[なや]む元[もと]兵士[へいし]であった。「記憶[きおく]を消[け]してください。さもなくば、私[わたし]は自[みずか]らを消[け]してしまうでしょう」と彼[かれ]は懇願[こんがん]した。",
      "桐生[きりゅう]は迷[まよ]った。手術[しゅじゅつ]を拒[こば]めば、彼[かれ]は自[みずか]ら命[いのち]を断[た]つかもしれない。受[う]け入[い]れれば、彼[かれ]は過去[かこ]の自分[じぶん]と、それに向[む]き合[あ]う機会[きかい]を永遠[えいえん]に失[うしな]う。どちらにせよ、傷[きず]は残[のこ]る。",
      "桐生[きりゅう]は最終的[さいしゅうてき]に、手術[しゅじゅつ]を行[おこな]うことを選[えら]んだ。しかし彼[かれ]は、消去[しょうきょ]する記憶[きおく]の「複製[ふくせい]」を別[べつ]の媒体[ばいたい]に保存[ほぞん]することを条件[じょうけん]とした。それは彼[かれ]なりの妥協[だきょう]であった。",
      "「技術[ぎじゅつ]は、倫理[りんり]を置[お]き去[ざ]りにしてはならない」と桐生[きりゅう]は記者会見[きしゃかいけん]で語[かた]った。「私[わたし]たちは神[かみ]になるべくして生[う]まれたわけではない。だが、神[かみ]のごとき力[ちから]を手[て]にした以上[いじょう]、それに見合[みあ]う責任[せきにん]を負[お]わずにはおかない。」",
      "手術[しゅじゅつ]は成功[せいこう]した。元[もと]兵士[へいし]は笑顔[えがお]を取[と]り戻[もど]し、新[あたら]しい人生[じんせい]を歩[ある]き始[はじ]めた。だが桐生[きりゅう]の机[つくえ]の引[ひ]き出[だ]しには、今[いま]も彼[かれ]の記憶[きおく]の複製[ふくせい]が眠[ねむ]っている。それが目覚[めざ]める日[ひ]が来[く]るかどうかは、誰[だれ]にも分[わ]からない。"
    ],
    translation: [
      "Kiryu, a neurosurgeon, developed an operation to selectively erase memories. For patients suffering from post-traumatic stress, it was welcomed as gospel.",
      "But Kiryu himself could not help but question the meaning of this technology. To lose a memory is to lose an experience, and to lose an experience is nothing other than losing a part of oneself.",
      "The first patient was a woman who had been tormented by memories of an accident in her childhood. Kiryu performed the surgery, carefully excising the images of terror from her brain.",
      "After the operation, the woman said with a radiant smile, 'I can sleep without fear now.' Kiryu confirmed the success and breathed a sigh of relief. But that night, he was struck by a strange unease.",
      "The question, 'Have I taken a part of her?' would not leave his heart. Relieving pain is certainly a physician's duty. But is it not all experience, pain included, that makes a human being human?",
      "A second patient appeared. He was a former soldier tormented by the horrors of the battlefield. 'Please erase my memories. Otherwise I shall erase myself,' he pleaded.",
      "Kiryu wavered. If he refused the surgery, the man might take his own life. If he accepted, the man would forever lose his past self and the chance to face it. Either way, a wound would remain.",
      "Kiryu ultimately chose to perform the surgery. But he set one condition: a 'copy' of the memory to be erased would be preserved in another medium. It was his own form of compromise.",
      "'Technology must not leave ethics behind,' Kiryu said at the press conference. 'We were not born to become gods. But having acquired godlike power, we cannot help but shoulder the responsibility that befits it.'",
      "The operation succeeded. The former soldier regained his smile and began walking a new life. But in Kiryu's desk drawer, the copy of his memory still sleeps to this day. Whether a day will come when it awakens, no one knows."
    ],
    vocab: [
      { word: "脳神経", reading: "のうしんけい", meaning: "cranial nerve" },
      { word: "消去", reading: "しょうきょ", meaning: "erasure" },
      { word: "外傷性", reading: "がいしょうせい", meaning: "traumatic" },
      { word: "福音", reading: "ふくいん", meaning: "gospel" },
      { word: "切除", reading: "せつじょ", meaning: "excision" },
      { word: "安堵", reading: "あんど", meaning: "relief" },
      { word: "苛む", reading: "さいなむ", meaning: "to torment" },
      { word: "惨劇", reading: "さんげき", meaning: "atrocity" },
      { word: "懇願", reading: "こんがん", meaning: "plea" },
      { word: "妥協", reading: "だきょう", meaning: "compromise" },
      { word: "媒体", reading: "ばいたい", meaning: "medium" },
      { word: "倫理", reading: "りんり", meaning: "ethics" },
      { word: "複製", reading: "ふくせい", meaning: "copy" },
      { word: "責任", reading: "せきにん", meaning: "responsibility" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-48 — A climate refugee story (海に沈む故郷)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-48",
    title: "海[うみ]に沈[しず]む故郷[こきょう]",
    titleReading: "うみにしずむこきょう",
    level: "N1",
    summary: "A family forced from a sinking island mourns the salt-water loss of home, yet keeps the language and songs alive on the mainland.",
    estMinutes: 7,
    tags: ["climate", "refugee", "loss"],
    body: [
      "南洋[なんよう]の小島[こじま]は、毎年[まいとし]海[うみ]に少[すこ]しずつ沈[しず]んでいた。波[なみ]は防波堤[ぼうはてい]を越[こ]え、畑[はたけ]に塩水[えんすい]を流[なが]し込[こ]むようになった。",
      "島民[とうみん]たちは長年[ながねん]、海[うみ]と共[とも]に生[い]きてきた。しかし今[いま]、その海[うみ]が彼[かれ]らを追[お]い出[だ]そうとしている。父[ちち]の海斗[かいと]は、家族[かぞく]を連[つ]れて島[しま]を去[さ]る決意[けつい]をした。",
      "「お父[とう]さん、どうして行[い]かなきゃいけないの」と娘[むすめ]の美波[みなみ]が訊[き]いた。海斗[かいと]は海[うみ]を眺[なが]めながら、「この海[うみ]が、もう私[わたし]たちを置[お]いてくれないんだ」と答[こた]えた。",
      "引[ひ]っ越[こ]しの前夜[ぜんや]、美波[みなみ]は浜辺[はまべ]で砂[すな]に「さようなら」と書[か]いた。波[なみ]が寄[よ]せては返[かえ]し、その文字[もじ]を何度[なんど]も消[け]した。だが美波[みなみ]は書[か]かずにはいられなかった。島[しま]そのものが波[なみ]に消[け]されるまで。",
      "本土[ほんど]の仮設住宅[かせつじゅうたく]は狭[せま]く、隣[となり]の声[こえ]が筒抜[つつぬ]けだった。海斗[かいと]は工場[こうじょう]で夜[よる]も働[はたら]き、美波[みなみ]は見知[みし]らぬ学校[がっこう]で孤独[こどく]に耐[た]えた。",
      "ある日[ひ]、美波[みなみ]が学校[がっこう]から泣[な]いて帰[かえ]ってきた。「海[うみ]の臭[にお]いがしないここは、私[わたし]の家[いえ]じゃない」と彼女[かのじょ]は訴[うった]えた。海斗[かいと]は娘[むすめ]を抱[だ]きしめ、何[なに]も言[い]えなかった。",
      "海斗[かいと]は、同[おな]じ仮設住宅[かせつじゅうたく]に住[す]む老[おい]た島民[とうみん]たちと集[つど]い始[はじ]めた。彼[かれ]らは海[うみ]を忘[わす]れないため、毎晩[まいばん]古[ふる]い歌[うた]を歌[うた]った。それは彼[かれ]らにとって、唯一[ゆいいつ]の故郷[こきょう]だった。",
      "数年後[すうねんご]、政府[せいふ]は気候[きこう]難民[なんみん]のための恒久的[こうきゅうてき]な住宅[じゅうたく]を建設[けんせつ]した。海斗[かいと]の家族[かぞく]もそこに移[うつ]り住[す]んだ。だが美波[みなみ]は、新[あたら]しい部屋[へや]の窓[まど]から遠[とお]い海[うみ]を眺[なが]めるのが日課[にっか]となった。",
      "海斗[かいと]は思[おも]う。故郷[こきょう]とは、地図上[ちずじょう]の点[てん]ではなく、心[こころ]の奥[おく]で燃[も]え続[つづ]ける小[ちい]さな火[ひ]なのだ。その火[ひ]が消[き]えない限[かぎ]り、彼[かれ]らはどこにいても島民[とうみん]であり続[つづ]ける。波[なみ]が島[しま]を呑[の]み込[こ]んでも、記憶[きおく]の島[しま]は沈[しず]まない。"
    ],
    translation: [
      "A small island in the South Seas was sinking into the sea little by little every year. Waves crossed the breakwater and began pouring salt water into the fields.",
      "The islanders had lived with the sea for generations. But now, that sea was trying to drive them out. The father, Kaito, resolved to leave the island with his family.",
      "'Dad, why do we have to go?' asked his daughter Minami. Gazing at the sea, Kaito replied, 'This sea will no longer keep us.'",
      "On the eve of moving, Minami wrote 'goodbye' in the sand on the beach. The waves washed in and out, erasing the letters time and again. But Minami could not help but keep writing, until the island itself was erased by the waves.",
      "The temporary housing on the mainland was cramped, and the neighbors' voices carried through the thin walls. Kaito worked nights at a factory, and Minami endured loneliness at an unfamiliar school.",
      "One day, Minami came home from school in tears. 'This place with no smell of the sea is not my home,' she protested. Kaito held his daughter and could say nothing.",
      "Kaito began to gather with elderly islanders living in the same housing complex. To keep the sea in their memory, they sang old songs every night. It was their only homeland left.",
      "A few years later, the government built permanent housing for climate refugees. Kaito's family moved there too. But for Minami, gazing at the distant sea from her new room's window became a daily ritual.",
      "Kaito thinks: homeland is not a dot on a map, but a small fire that keeps burning deep in the heart. As long as that fire does not go out, they remain islanders wherever they are. Even if the waves swallow the island, the island of memory will not sink."
    ],
    vocab: [
      { word: "南洋", reading: "なんよう", meaning: "South Seas" },
      { word: "防波堤", reading: "ぼうはてい", meaning: "breakwater" },
      { word: "塩水", reading: "えんすい", meaning: "salt water" },
      { word: "島民", reading: "とうみん", meaning: "islander" },
      { word: "仮設住宅", reading: "かせつじゅうたく", meaning: "temporary housing" },
      { word: "筒抜け", reading: "つつぬけ", meaning: "easily overheard" },
      { word: "孤独", reading: "こどく", meaning: "solitude" },
      { word: "恒久的", reading: "こうきゅうてき", meaning: "permanent" },
      { word: "気候難民", reading: "きこうなんみん", meaning: "climate refugee" },
      { word: "唯一", reading: "ゆいいつ", meaning: "sole/only" },
      { word: "故郷", reading: "こきょう", meaning: "homeland" },
      { word: "日課", reading: "にっか", meaning: "daily routine" },
      { word: "呑み込む", reading: "のみこむ", meaning: "to swallow up" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-49 — A post-gender society (性を脱ぎ捨てた都市)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-49",
    title: "性[せい]を脱[ぬ]ぎ捨[す]てた都市[とし]",
    titleReading: "せいをぬぎすてたとし",
    level: "N1",
    summary: "A city that abolished gender centuries ago faces its first debate when a young citizen, moved by an outsider's words, asks for the right to choose.",
    estMinutes: 8,
    tags: ["gender", "society", "future"],
    body: [
      "未来[みらい]に建設[けんせつ]された都市[とし]「エデン」では、性別[せいべつ]の登録[とうろく]が禁止[きんし]されていた。市民[しみん]は全員[ぜんいん]、中性的[ちゅうせいてき]な名[な]と、性別[せいべつ]を問[と]わない制服[せいふく]を与[あた]えられた。",
      "子供[こども]たちは、生物学的[せいぶつがくてき]な性差[せいさ]を学[まな]ぶことなく育[そだ]った。彼[かれ]らにとって、人間[にんげん]はただの人間[にんげん]であり、それ以上[いじょう]の分類[ぶんるい]は無意味[むいみ]であった。",
      "しかし、歴史[れきし]を学[まな]ぶ年齢[ねんれい]に達[たっ]した若者[わかもの]の幾人[いくにん]かは、古[ふる]い記録[きろく]の中[なか]に「男[おとこ]」「女[おんな]」という言葉[ことば]を発見[はっけん]して戸惑[とまど]った。",
      "「なぜ過去[かこ]の人々[ひとびと]は、体[からだ]の形[かたち]で人[ひと]を分[わ]けたのですか」と青年[せいねん]の暁[あきら]は教師[きょうし]に訊[き]いた。教師[きょうし]は答[こた]えに窮[きゅう]した。それはもはや、彼[かれ]らの世界[せかい]では想像[そうぞう]もできない区別[くべつ]だったからだ。",
      "暁[あきら]は図書館[としょかん]で古[ふる]い文学[ぶんがく]を読[よ]み漁[あさ]った。恋愛小説[れんあいしょうせつ]の中[なか]で、人々[ひとびと]は性別[せいべつ]を理由[りゆう]に愛[あい]を語[かた]り、あるいは性別[せいべつ]ゆえに苦[くる]しんでいた。それは彼[かれ]には異国[いこく]の風景[ふうけい]のように見[み]えた。",
      "ある日[ひ]、暁[あきら]は外部[がいぶ]からの旅行者[りょこうしゃ]に出会[であ]った。その旅行者[りょこうしゃ]は「自分[じぶん]は女[おんな]だ」と言[い]った。暁[あきら]は初[はじ]めて、自分[じぶん]の内側[うちがわ]にある違和感[いわかん]に名前[なまえ]をつけずにはいられなかった。",
      "暁[あきら]は市[し]の評議会[ひょうぎかい]で、性別[せいべつ]の選択[せんたく]を許可[きょか]するよう提議[ていぎ]した。「性別[せいべつ]を禁[きん]ずることも、また一種[いっしゅ]の強制[きょうせい]ではないか」と彼[かれ]は主張[しゅちょう]した。",
      "評議会[ひょうぎかい]は紛糾[ふんきゅう]した。ある者[もの]は「性別[せいべつ]を認[みと]めれば、差別[さべつ]が復活[ふっかつ]する」と反対[はんたい]し、別[べつ]の者[もの]は「選択[せんたく]の自由[じゆう]こそが真[しん]の平等[びょうどう]だ」と賛成[さんせい]した。議論[ぎろん]は夜[よる]を徹[てっ]して続[つづ]いた。",
      "翌朝[よくあさ]、評議会[ひょうぎかい]は暁[あきら]の提議[ていぎ]を僅差[きんさ]で可決[かけつ]した。エデンの市民[しみん]は今[いま]、性別[せいべつ]を持[も]つことも、持[も]たないことも自由[じゆう]に選[えら]べる。それは、強制[きょうせい]の廃止[はいし]と選択[せんたく]の自由[じゆう]という二[ふた]つの理念[りねん]が、初[はじ]めて手[て]を取[と]り合[あ]った瞬間[しゅんかん]だった。"
    ],
    translation: [
      "In the city 'Eden' constructed in the future, the registration of gender was forbidden. All citizens were given gender-neutral names and uniforms indifferent to sex.",
      "Children grew up without learning biological sex differences. To them, a human was simply a human, and any classification beyond that was meaningless.",
      "But several young people, upon reaching the age to study history, were bewildered to find the words 'man' and 'woman' in old records.",
      "'Why did people of the past divide humans by the shape of their bodies?' the youth Akira asked his teacher. The teacher was at a loss for an answer. It was, by now, a distinction unimaginable in their world.",
      "Akira scoured old literature in the library. In romance novels, people spoke of love in terms of gender, or suffered because of it. To him, it looked like a landscape of a foreign land.",
      "One day, Akira met a traveler from outside. The traveler said, 'I am a woman.' For the first time, Akira could not help but put a name to the dissonance within himself.",
      "At the city council, Akira proposed permitting the choice of gender. 'To forbid gender is also a form of coercion, is it not?' he argued.",
      "The council was thrown into turmoil. Some objected that 'recognizing gender would revive discrimination,' while others supported it, saying 'the freedom to choose is true equality.' The debate continued through the night.",
      "The next morning, the council passed Akira's proposal by a narrow margin. The citizens of Eden may now freely choose whether to have a gender or not. It was the moment when two ideals — the abolition of coercion and the freedom of choice — first joined hands."
    ],
    vocab: [
      { word: "性別", reading: "せいべつ", meaning: "gender/sex" },
      { word: "登録", reading: "とうろく", meaning: "registration" },
      { word: "中性的", reading: "ちゅうせいてき", meaning: "gender-neutral" },
      { word: "性差", reading: "せいさ", meaning: "sex difference" },
      { word: "生物学的", reading: "せいぶつがくてき", meaning: "biological" },
      { word: "戸惑う", reading: "とまどう", meaning: "to be bewildered" },
      { word: "区別", reading: "くべつ", meaning: "distinction" },
      { word: "違和感", reading: "いわかん", meaning: "sense of dissonance" },
      { word: "評議会", reading: "ひょうぎかい", meaning: "council" },
      { word: "提議", reading: "ていぎ", meaning: "proposal" },
      { word: "紛糾", reading: "ふんきゅう", meaning: "turmoil" },
      { word: "廃止", reading: "はいし", meaning: "abolition" },
      { word: "理念", reading: "りねん", meaning: "ideal" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-50 — An existential philosophy (実存という名の重荷)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-50",
    title: "実存[じつぞん]という名[な]の重荷[おもに]",
    titleReading: "じつぞんというなのおもに",
    level: "N1",
    summary: "A philosopher fixated on the burden of freedom counsels a despairing disciple, then leaves a final note that existence is answering an unanswerable question with one's life.",
    estMinutes: 9,
    tags: ["philosophy", "existentialism", "freedom"],
    body: [
      "哲学者[てつがくしゃ]の律[りつ]は、晩年[ばんねん]に一[ひと]つの問[と]いに凝[こ]り固[かた]まっていた。「人間[にんげん]は、自由[じゆう]であるがゆえに、如何[いか]にも生[い]きることができぬのか」と。",
      "彼[かれ]は書斎[しょさい]に閉[と]じこもり、サルトルやキルケゴールの著作[ちょさく]を再読[さいどく]した。読[よ]めば読[よ]むほど、自由[じゆう]という概念[がいねん]が鉄[てつ]の鎖[くさり]のように彼[かれ]を縛[しば]った。",
      "「人間[にんげん]は本質[ほんしつ]を持[も]たずに存在[そんざい]する」と彼[かれ]は書[か]いた。「石[いし]は石[いし]である本質[ほんしつ]を持[も]って生[う]まれるが、人間[にんげん]は、まず存在[そんざい]し、その後[のち]に自[みずか]らの本質[ほんしつ]を作[つく]らねばならぬ。」",
      "その「作[つく]らねばならぬ」という義務[ぎむ]こそが、実存[じつぞん]の重荷[おもに]であると律[りつ]は考[かんが]えた。選択[せんたく]のたびに人間[にんげん]は自[みずか]らを定義[ていぎ]し、選[えら]ばなかった可能性[かのうせい]を切[き]り捨[す]てる。",
      "ある雪[ゆき]の夜[よる]、弟子[でし]の環[たまき]が訪[たず]ねてきた。「先生[せんせい]、私[わたし]は就職[しゅうしょく]の選択[せんたく]に迷[まよ]っております。どちらを選[えら]んでも、後悔[こうかい]が残[のこ]る気[き]がしてならないのです。」",
      "律[りつ]は頷[うなず]いた。「後悔[こうかい]を免[まぬか]れる道[みち]などない。選[えら]ばなかった道[みち]は、常[つね]に人間[にんげん]の背中[せなか]に影[かげ]を落[お]とす。それが実存[じつぞん]という代償[だいしょう]だ。」",
      "「では、どう生[い]きればよいのですか」と環[たまき]は問[と]い返[かえ]した。律[りつ]は窓[まど]の外[そと]の雪[ゆき]を眺[なが]め、静[しず]かに答[こた]えた。「選[えら]んだ道[みち]を、自[みずか]ら選[えら]んだと認[みと]めることだ。それだけだ。」",
      "環[たまき]はその言葉[ことば]を胸[むね]に刻[きざ]んで帰[かえ]った。彼女[かのじょ]は結局[けっきょく]、自[みずか]らの情熱[じょうねつ]に従[したが]い、誰[だれ]も予期[よき]しなかった道[みち]を選[えら]んだ。後[のち]に彼女[かのじょ]は「その選択[せんたく]の重[おも]みを背負[せお]ったからこそ、私[わたし]の人生[じんせい]は私[わたし]のものになった」と語[かた]っている。",
      "律[りつ]は死[し]の床[どこ]で、最後[さいご]の手記[しゅき]を残[のこ]した。「実存[じつぞん]とは、答[こた]えのない問[と]いを、自[みずか]らの人生[じんせい]をもって答[こた]える行為[こうい]である。私[わたし]は私[わたし]の問[と]いに生[い]き、私[わたし]の問[と]いに死[し]ぬ。それで十分[じゅうぶん]だ。」",
      "彼[かれ]の墓[はか]には名[な]以外[いがい]何[なに]も刻[きざ]まれていない。だが、その墓[はか]を訪[たず]れる者[もの]は皆[みな]、声[こえ]なき問[と]いを聞[き]く。人間[にんげん]とは何[なに]か。それは、答[こた]えを探[さが]す旅[たび]そのものかもしれない。"
    ],
    translation: [
      "The philosopher Ritsu had, in his final years, become fixated on a single question. 'Why is it that human beings, because they are free, can hardly bear to live?'",
      "He shut himself in his study and reread the works of Sartre and Kierkegaard. The more he read, the more the concept of freedom bound him like an iron chain.",
      "'Human beings exist without essence,' he wrote. 'A stone is born with the essence of being a stone, but a human being first exists, and then must create its own essence.'",
      "Ritsu considered that very obligation to create to be the burden of existence. With each choice, a human defines itself and discards the possibilities not chosen.",
      "One snowy night, his disciple Tamaki visited. 'Master, I am at a loss over the choice of a career. Whichever I choose, I cannot help feeling that regret will remain.'",
      "Ritsu nodded. 'There is no path that exempts you from regret. The road not taken always casts its shadow on a person's back. That is the price of existence.'",
      "'Then how should I live?' Tamaki asked in return. Ritsu gazed at the snow beyond the window and answered quietly. 'Recognize the path you chose as one you chose yourself. That is all.'",
      "Tamaki etched those words in her heart and returned. In the end, she followed her passion and chose a path no one had anticipated. Later she said, 'It was because I bore the weight of that choice that my life became my own.'",
      "On his deathbed, Ritsu left his final note. 'Existence is the act of answering a question that has no answer with one's own life. I live for my question, and I die for my question. That is enough.'",
      "On his grave, nothing is engraved but his name. Yet all who visit hear a voiceless question: what is a human being? It may be the journey of searching for the answer itself."
    ],
    vocab: [
      { word: "晩年", reading: "ばんねん", meaning: "later years" },
      { word: "書斎", reading: "しょさい", meaning: "study (room)" },
      { word: "凝り固まる", reading: "こりかたまる", meaning: "to become stiff/obsessed" },
      { word: "著作", reading: "ちょさく", meaning: "writings" },
      { word: "実存", reading: "じつぞん", meaning: "existence" },
      { word: "本質", reading: "ほんしつ", meaning: "essence" },
      { word: "義務", reading: "ぎむ", meaning: "obligation" },
      { word: "重荷", reading: "おもに", meaning: "burden" },
      { word: "弟子", reading: "でし", meaning: "disciple" },
      { word: "後悔", reading: "こうかい", meaning: "regret" },
      { word: "代償", reading: "だいしょう", meaning: "price/compensation" },
      { word: "予期", reading: "よき", meaning: "anticipation" },
      { word: "手記", reading: "しゅき", meaning: "written note/memoir" },
      { word: "行為", reading: "こうい", meaning: "act" }
    ]
  }
];
