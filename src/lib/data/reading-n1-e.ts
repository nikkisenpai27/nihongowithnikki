import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N1-level reading passages (r-n1-41 .. r-n1-50) with comprehension questions.

export const readingN1E: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n1-41 — The philosophy of Japanese tea
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-41",
    title: "茶[ちゃ]の湯[ゆ]に潜[ひそ]む哲学[てつがく]：侘[わ]び寂[さ]びと無[む]の地平[ちへい]",
    titleReading: "ちゃのゆにひそむてつがく：わびさびとむのちへい",
    level: "N1",
    summary: "A philosophical examination of the Japanese tea ceremony as a discipline in which aesthetics, ethics, and metaphysics converge — exploring wabi-sabi, ichigo-ichie, mushin, and the relational ethic between host and guest that together constitute a distinctive Japanese philosophy of being.",
    estMinutes: 12,
    tags: ["tea ceremony", "philosophy", "aesthetics", "Zen", "wabi-sabi", "Rikyu"],
    body: [
      "茶[ちゃ]の湯[ゆ]というと、世間[せけん]の目[め]には単[たん]なる伝統[でんとう]的[てき]な儀礼[ぎれい]として映[うつ]るきらいがある。しかし、その挙[あ]げて一[ひと]杯[ぱい]の抹茶[まっちゃ]を点[た]てる行為[こうい]の背後[はいご]には、日本[にほん]思想[しそう]が到達[とうたつ]した哲学[てつがく]の最深部[さいしんぶ]が横[よこた]わっているとは言[い]えまい。千[せん]利休[りきゅう]が茶[ちゃ]の湯[ゆ]を大成[たいせい]して以来[いらい]、この実践[じっせん]は審美[しんび]の領域[りょういき]にとどまらず、倫理[りんり]と形而上[けいじじょう]学[がく]の交点[こうてん]として機能[きのう]してきたのである。一杯[いっぱい]の茶[ちゃ]に宇宙[うちゅう]を観[かん]ずるというのは、決[けっ]して詩[し]的[てき]な誇張[こちょう]ではない。",
      "茶[ちゃ]の湯[ゆ]を哲学[てつがく]の言語[げんご]に翻訳[ほんやく]し直[なお]すならば、まず侘[わ]び寂[さ]びという概念[がいねん]から始[はじ]めねばなるまい。侘[わ]びとは、不足[ふそく]の中[なか]に豊[ゆた]かさを見[み]出[だ]す感性[かんせい]であり、寂[さ]びとは、時[じ]の流[なが]れが刻[きざ]む劣化[れっか]の中[なか]に深[ふか]みを聴[き]き取[と]る審美[しんび]である。華[はな]やかなるものへの反逆[はんぎゃく]として成立[せいりつ]したこの美学[びがく]は、完成[かんせい]を欠[か]いた状態[じょうたい]にこそ人間[にんげん]の真実[しんじつ]が宿[やど]ると見[み]なす。完成[かんせい]されたものは既[すで]に変化[へんか]の余地[よち]を喪失[そうしつ]しており、事物[じぶつ]の死[し]に他[ほか]ならないという認識[にんしき]が、その根底[こんてい]にある。",
      "もっとも、侘[わ]び寂[さ]びを単[たん]なる貧[まず]しさの賛美[さんび]と解[かい]するのは致命[ちめい]的[てき]な誤読[ごどく]である。千[せん]利休[りきゅう]が好[この]んだと伝[つた]えられる狭[せま]い二[に]畳[じょう]の茶室[ちゃしつ]は、貧困[ひんこん]の顕現[けんげん]ではなく、余地[よち]の精髄[せいずい]であった。何[なに]かを削[けず]り取[と]ることで逆[ぎゃく]に何[なに]かを呼[よ]び起[お]こす、否定的[ひていてき]な肯定[こうてい]の論理[ろんり]こそが、ここには貫[つらぬ]かれている。余白[よはく]が意味[いみ]を生[う]み、沈黙[ちんもく]が言語[げんご]に優[まさ]るという構造[こうぞう]は、西欧[せいおう]の哲学[てつがく]が看過[かんか]しがちであった領域[りょういき]を照[て]らし出[だ]すのである。",
      "一期[いちご]一会[いちえ]という理念[りねん]もまた、茶[ちゃ]の湯[ゆ]が提示[ていじ]する哲学[てつがく]の核[かく]を成[な]す。この語[ご]は、一度[いちど]きりの出会[であ]いを一生[いっしょう]の重[おも]みをもって迎[むか]えよという倫理[りんり]的[てき]命法[めいほう]であるが、その背後[はいご]には無常[むじょう]という徹底[てってい]した形而上[けいじじょう]学[がく]的[てき]直観[ちょっかん]が控[ひか]えている。現在[げんざい]という瞬間[しゅんかん]が二度[にど]と帰[かえ]らぬものであるとの認識[にんしき]なくしては、いかなる敬意[けいい]も形[かたち]作[つく]れないというのが、その要旨[ようし]である。他者[たしゃ]の存在[そんざい]を不可逆[ふかぎゃく]なものとして受[う]け止[と]める視点[してん]は、現代[げんだい]の効率[こうりつ]至上[しじょう主義[しゅぎ]に対[たい]する最[もっと]も鋭[するど]い批判[ひはん]ともなり得[え]る。",
      "ここで無[む]の思想[しそう]に言及[げんきゅう]せずにはすまない。禅[ぜん]宗[しゅう]の影響[えいきょう]を色濃[いろこく]く受[う]けた茶[ちゃ]の湯[ゆ]は、主体[しゅたい]の執着[しゅうちゃく]を削[けず]ぎ落[おと]すことをその目的[もくてき]の一[ひと]つに掲[かか]げる。点[た]てる者[もの]が自[みずか]らを顧[かえり]みず、純粋[じゅんすい]に客[きゃく]と茶[ちゃ]と道具[どうぐ]の間[あいだ]に生[しょう]じる関係[かんけい]に没入[ぼつにゅう]するとき、行為[こうい]は行為[こうい]する者[もの]を超越[ちょうえつ]する。無心[むしん]とは、意識[いしき]の消失[しょうしつ]ではなく、意識[いしき]の最適化[さいてきか]とも言[い]い換[か]えうる状態[じょうたい]であり、それはまさに西洋[せいよう]哲学[てつがく]が現象[げんしょう]学[がく]によってようやく到達[とうたつ]しえた領域[りょういき]に他[ほか]ならない。",
      "亭主[ていしゅ]と客[きゃく]の関係[かんけい]にも、独自[どくじ]の倫理[りんり]が張[は]り巡[めぐ]らされている。亭主[ていしゅ]は客[きゃく]に最善[さいぜん]をもって応[おう]えようと身[み]を削[けず]り、客[きゃく]は亭主[ていしゅ]の労[ろう]に感謝[かんしゃ]をもって応[おう]える。この相互[そうご]に譲[ゆず]り合[あ]う構造[こうぞう]は、権力[けんりょく]の非対称[ひたいしょう]性[せい]を逆[ぎゃく]に利用[りよう]して対称[たいしょう]的[てき]な敬意[けいい]を生成[せいせい]する、稀[まれ]な社会的[しゃかいてき]発明[はつめい]である。階層[かいそう]を肯定[こうてい]しつつ階層[かいそう]を無効[むこう]化[か]するという逆説[ぎゃくせつ]こそ、茶[ちゃ]の湯[ゆ]が提示[ていじ]する政治[せいじ]哲学[てつがく]の核[かく]とも言[い]える。",
      "もっとも、現代[げんだい]における茶[ちゃ]の湯[ゆ]の位置[いち]づけは、必[かなら]ずしもその哲学[てつがく]的[てき]核[かく]を保[たも]っているとは限[かぎ]らない。観光[かんこう]化[か]と商品[しょうひん]化[か]の波[なみ]は、儀礼[ぎれい]の外形[がいけい]だけを抽出[ちゅうしゅつ]し、その思想[しそう]的[てき]内容[ないよう]を空洞化[くうどうか]する傾向[けいこう]を強[つよ]めてきた。技法[ぎほう]の伝承[でんしょう]のみに熱心[ねっしん]で、背後[はいご]の哲学[てつがく]を顧[かえり]みない流派[りゅうは]も少[すく]なくない。とはいえ、流派[りゅうは]の存続[そんぞく]自体[じたい]が直[ただ]ちに哲学[てつがく]の存続[そんぞく]を意味[いみ]するわけではないということを、看過[かんか]してはなるまい。",
      "結論[けつろん]として、茶[ちゃ]の湯[ゆ]を哲学[てつがく]として再[さい]解釈[かいしゃく]する試[こころ]みは、日本[にほん]思想[しそう]の独自性[どくじせい]を国際[こくさい]的[てき]な文脈[ぶんみゃく]に位置[いち]づけるための有効[ゆうこう]な手段[しゅだん]である。言葉[ことば]によらずに世界[せかい]を説明[せつめい]する伝統[でんとう]が、概念[がいねん]中心[ちゅうしん]の西欧[せいおう]哲学[てつがく]に対[たい]して提示[ていじ]しうる異議[いぎ]は、計[はか]り知[し]れない。一杯[いっぱい]の茶[ちゃ]に集約[しゅうやく]された思考[しこう]の厚[あつ]みを、改[あらた]めて見直[みなお]す必要[ひつよう]が今[いま]こそあるのではないか。"
    ],
    translation: [
      "When people think of the tea ceremony, the public tends to see it merely as a traditional ritual. Yet it can hardly be said that behind the act of whisking a single cup of matcha there does not lie the deepest stratum of philosophy that Japanese thought has reached. Since Sen no Rikyu established the tea ceremony, this practice has functioned as the intersection of ethics and metaphysics, not confined to the realm of aesthetics. To perceive the cosmos in a single cup of tea is by no means a poetic exaggeration.",
      "If we were to retranslate the tea ceremony into the language of philosophy, we would have to begin with the concept of wabi-sabi. Wabi is the sensibility that discovers richness within insufficiency, and sabi is the aesthetic that hears depth in the deterioration engraved by the flow of time. Established as a revolt against the gorgeous, this aesthetics holds that human truth dwells precisely in states lacking completion. The recognition underlying it is that what is completed has already lost room for change and is nothing but the death of the thing.",
      "It should be said, however, that to interpret wabi-sabi as a mere praise of poverty is a fatal misreading. The narrow two-tatami tea room that Sen no Rikyu is said to have favored was not a manifestation of poverty but the very essence of margin. What is woven through here is the logic of negative affirmation — removing something in order to evoke something else. The structure in which blank space generates meaning and silence surpasses language illuminates a domain that Western philosophy has tended to overlook.",
      "The ideal of ichigo-ichie also constitutes the core of the philosophy that the tea ceremony presents. This phrase is an ethical injunction to greet a once-in-a-lifetime encounter with the weight of a whole life, and behind it lies the thoroughgoing metaphysical intuition of impermanence. Its gist is that without recognizing that the present moment will never return, no reverence can be formed. The perspective that takes the existence of the other as irreversible can also become the sharpest critique of modern efficiency-first-ism.",
      "Here we cannot pass over the thought of nothingness without mention. Strongly influenced by Zen Buddhism, the tea ceremony lists the stripping away of the subject's attachments among its purposes. When the one who prepares the tea ceases to dwell on the self and immerses in the relation that emerges among guest, tea, and utensils, the act transcends the one who acts. The state of mushin — mindlessness — can be redescribed as the optimization of consciousness rather than its disappearance, and it is precisely the domain that Western philosophy only finally reached through phenomenology.",
      "A distinctive ethics is also woven into the relation between host and guest. The host wears themselves down to offer their best to the guest, and the guest responds with gratitude for the host's labor. This structure of mutual concession is a rare social invention that uses asymmetry of power inversely to generate symmetrical reverence. The paradox of affirming hierarchy while nullifying it can be said to be the core of the political philosophy that the tea ceremony presents.",
      "Needless to say, the position of the tea ceremony in the modern era does not necessarily preserve its philosophical core. The waves of tourism-ization and commodification have strengthened the tendency to extract only the external form of the ritual and hollow out its intellectual content. There are no few schools devoted only to the transmission of technique without regard for the underlying philosophy. Yet we should not overlook the fact that the survival of a school does not in itself mean the survival of its philosophy.",
      "In conclusion, the attempt to reinterpret the tea ceremony as philosophy is an effective means of situating the distinctiveness of Japanese thought within an international context. The objection that a tradition which explains the world without words can raise against concept-centered Western philosophy is immeasurable. There is perhaps no time more fitting than now to freshly reconsider the depth of thought condensed in a single cup of tea."
    ],
    questions: [
      {
        q: "According to the passage, what is the relationship between wabi-sabi and the concept of completion?",
        choices: ["Wabi-sabi celebrates completion as the highest aesthetic state", "Wabi-sabi holds that states lacking completion are where human truth resides, since completed things have lost room for change", "Wabi-sabi considers completion irrelevant to aesthetics", "Wabi-sabi equates completion with eternal beauty"],
        answerIndex: 1,
        explanation: "The passage states 完成を欠いた状態にこそ人間の真実が宿ると見なす and 完成されたものは既に変化の余地を喪失しており、事物の死に他ならないという認識 — so incompleteness is where truth dwells."
      },
      {
        q: "How does the passage describe the structure of host-guest relationship in the tea ceremony?",
        choices: ["A hierarchical imposition of the host's authority", "A structure that uses power asymmetry to generate symmetrical reverence through mutual concession", "A purely commercial exchange of services", "A competition for social status"],
        answerIndex: 1,
        explanation: "The text describes 相互に譲り合う構造 and 権力の非対称性を逆に利用して対称的な敬意を生成する — using asymmetry inversely to generate symmetrical reverence."
      },
      {
        q: "What concern does the author raise about the modern tea ceremony?",
        choices: ["That foreign practitioners outnumber Japanese ones", "That tourism and commodification extract only the external form and hollow out the philosophical content", "That the number of tea schools has decreased drastically", "That the price of tea utensils has collapsed"],
        answerIndex: 1,
        explanation: "The passage warns that 観光化と商品化の波は、儀礼の外形だけを抽出し、その思想的内容を空洞化する傾向を強めてきた — extracting only the form and hollowing the philosophical content."
      },
      {
        q: "What does the passage say about the concept of mushin (mindlessness)?",
        choices: ["It is the disappearance of consciousness and should be avoided", "It is the optimization of consciousness, the same domain Western philosophy reached through phenomenology", "It is an exclusively religious state unrelated to philosophy", "It is a state of confusion caused by tea"],
        answerIndex: 1,
        explanation: "The text states 無心とは、意識の消失ではなく、意識の最適化とも言い換えうる状態 — and identifies it with the domain Western phenomenology reached."
      },
      {
        q: "Which N1 grammar point appears in '世間の目には単なる伝統的な儀礼として映るきらいがある'?",
        choices: ["〜きらいがある (have a tendency to, typically negative)", "〜にたえない", "〜までもない", "〜ずにはすまない"],
        answerIndex: 0,
        explanation: "〜きらいがある indicates a (usually undesirable) tendency — here the tendency for the public to view the tea ceremony as mere ritual."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-42 — A discourse on the ethics of war
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-42",
    title: "戦争[せんそう]の倫理[りんり]をめぐる哲学[てつがく]的[てき]考察[こうさつ]：正戦[せいせん]・平和[へいわ]・責任[せきにん]",
    titleReading: "せんそうのりんりをめぐるてつがくてきこうさつ：せいせん・へいわ・せきにん",
    level: "N1",
    summary: "A philosophical discourse on the ethics of war that interrogates just war theory, pacifism, realism, and the problem of moral responsibility in modern asymmetric and technological warfare, asking whether traditional frameworks still suffice.",
    estMinutes: 14,
    tags: ["ethics", "war", "philosophy", "just war", "pacifism", "responsibility"],
    body: [
      "戦争[せんそう]の倫理[りんり]を論[ろん]ずるという行為[こうい]自体[じたい]、一[ひと]つの逆説[ぎゃくせつ]を孕[はら]んでいる。倫理[りんり]とは他者[たしゃ]の尊厳[そんげん]を擁護[ようご]する営[つとめ]であるのに対[たい]し、戦争[せんそう]とは他者[たしゃ]の生命[せいめい]を破壊[はかい]する営[つとめ]である。この二[ふた]つの営[つとめ]の交差[こうさ]点[てん]に立つ思考[しこう]は、必然[ひつぜん]的[てき]に自[みずか]らの正当[せいとう]性[せい]を問[と]い直[なお]さずにはいられない。それでもなお、戦争[せんそう]を倫理[りんり]の言葉[ことば]で語[かた]り得[え]るか否[いな]かは、人間[にんげん]の成熟[せいじゅく]度[ど]を測[はか]る一[ひと]つの指標[しひょう]たり得[え]るのである。",
      "歴史[れきし]的[てき]に最[もっと]も影響[えいきょう]力[りょく]を持[も]った枠組[わくぐ]みは、正戦[せいせん]論[ろん]であろう。アウグスティヌスに端[はし]を発[はっ]し、アクィナスを経[へ]て現代[げんだい]のウォルザーに至[いた]るこの伝統[でんとう]は、戦争[せんそう]を正当[せいとう]化[か]しうる条件[じょうけん]として、正[ただ]しい原因[げんいん]、正当[せいとう]な権威[けんい]、最終[さいしゅう]手段[しゅだん]、比例[ひれい]性[せい]、そして区別[くべつ]原則[げんそく]を掲[かか]げる。これらの基準[きじゅん]は一[ひと]見[けん]厳密[げんみつ]に見[み]えるが、現実[げんじつ]の戦争[せんそう]においてはその適用[てきよう]が恣意[しい]的[てき]にならざるを得[え]ないという批判[ひはん]を免[まぬが]れない。",
      "正戦[せいせん]論[ろん]の最[もっと]も脆[もろ]い部分[ぶぶん]は、開戦[かいせん]の正[ただ]しさと交戦[こうせん]の正[ただ]しさの分離[ぶんり]にある。たとえ開戦[かいせん]に正当[せいとう]な理由[りゆう]があったとしても、交戦[こうせん]の段階[だんかい]で民間[みんかん]人[じん]への無差別[むさべつ]攻撃[こうげき]を行[おこな]えば、その戦争[せんそう]全体[ぜんたい]の倫理[りんり]的[てき]地位[ちい]は崩壊[ほうかい]する。この分離[ぶんり]は理論[りろん]的[てき]には明晰[めいせき]であっても、実践[じっせん]的[てき]には兵士[へいし]と市民[しみん]の境界[きょうかい]が曖昧[あいまい]化[か]する現代[げんだい]の非対称[ひたいしょう]戦争[せんそう]においては、ほとんど機能[きのう]しない。テロリズムと国家[こっか]の暴力[ぼうりょく]の境界[きょうかい]が溶[と]け込[こ]む地平[ちへい]では、正戦[せいせん]論[ろん]そのものが再構築[さいこうちく]を迫[せま]られているのである。",
      "これに対[たい]し、絶対[ぜったい]平和[へいわ]主義[しゅぎ]は戦争[せんそう]を一切[いっさい]の例外[れいがい]なく否定[ひてい]する立場[たちば]をとる。この立場[たちば]は道徳[どうとく]的[てき]に潔[いさぎよ]いが、現実[げんじつ]政治[せいじ]の領域[りょういき]ではしばしば無力[むりょく]を露呈[ろてい]する。自衛[じえい]を放棄[ほうき]すること自体[じたい]が他者[たしゃ]への暴力[ぼうりょく]を許容[きょよう]する結果[けっか]をもたらすという批判[ひはん]は、容易[ようい]に退[しりぞ]けられない。平和[へいわ]を理想[りそう]として掲[かか]げることと、暴力[ぼうりょく]を現実[げんじつ]として処理[しょり]することは、別[べつ]の次元[じげん]の課題[かだい]であるにもかかわらず、混同[こんどう]されがちである。",
      "もう一[ひと]つの立場[たちば]は現実[げんじつ]主義[しゅぎ]である。国家[こっか]間[かん]の紛争[ふんそう]は道徳[どうとく]の言語[げんご]で語[かた]るべきではなく、勢力[せいりょく]均衡[きんこう]と国家[こっか]利益[りえき]の言語[げんご]で語[かた]るべきだとするこの考[かんが]えは、倫理[りんり]の領域[りょういき]から退却[たいきゃく]することによって逆[ぎゃく]に一[ひと]つの倫理[りんり]的[てき]立場[たちば]を成立[せいりつ]させているという逆説[ぎゃくせつ]を孛[ほ]む。しかし現実[けんじつ]主義[しゅぎ]が、その徹底[てってい]した冷徹[れいてき]さゆえに人道[じんどう]的[てき]危機[きき]を見過[みす]ごすことへの免責[めんせき]を暗黙[あんもく]のうちに要求[ようきゅう]するきらいがあることを見落[みおと]してはならない。",
      "現代[げんだい]における最大[さいだい]の倫理[りんり]的[てき]困難[こんなん]は、技術[ぎじゅつ]的[てき]距離[きょり]が拡大[かくだい]したことに起因[きいん]する責任[せきにん]の希薄[きはく]化[か]であろう。ドローン攻撃[こうげき]やサイバー戦争[せんそう]に象徴[しょうちょう]される遠隔[えんかく]暴力[ぼうりょく]は、加害[かがい]の身体性[しんたいせい]を消去[しょうきょ]することで、操作[そうさ]する者[もの]の道徳[どうとく]的[てき]負荷[ふか]を軽減[けいげん]してしまった。画面[がめん]の向[む]こうで人[ひと]が死[し]ぬという事実[じじつ]は、ゲーム[げーむ]的[てき]な操作[そうさ]感[かん]の中[なか]に埋没[まいぼつ]し、責任[せきにん]の帰属[きぞく]先[さき]を不明[ふめい]にする。ハンナ・アーレントが指摘[してき]した悪[あく]の凡庸[ぼんよう]性[せい]は、技術[ぎじゅつ]的[てき]に洗練[せんれん]されることでさらに凡庸[ぼんよう]化[か]したのである。",
      "また、戦争[せんそう]をめぐる責任[せきにん]の問題[もんだい]は、国家[こっか]の枠[わく]を越[こ]えて個人[こじん]に問[と]われるという現代[げんだい]特有[とくゆう]の展開[てんかい]を遂[と]げている。国際[こくさい]刑事[けいじ]裁判[さいばん]所[しょ]の設立[せつりつ]は、国家[こっか]の名[な]において行[おこな]われた行為[こうい]の責任[せきにん]を個[こ]の指揮[しき]命令[めいれい]系統[けいとう]にまで遡[さかのぼ]らせる試[こころ]みである。しかしこの試[こころ]みは、国家[こっか]主権[しゅけん]という西欧[せいおう]近代[きんだい]の根幹[こんかん]概念[がいねん]と真[ま]っ向[こう]から衝突[しょうとつ]せざるを得[え]ず、その正当[せいとう]性[せい]は国際[こくさい]社会[しゃかい]の内部[ないぶ]でさえ依然[いぜん]として争[あらそ]われている。勝[か]者[しゃ]の正義[せいぎ]という非難[ひなん]を免[まぬが]れるための制度的[せいじてき]工夫[くふう]が、まだ完成[かんせい]の域[いき]に達[たっ]していないことは明白[めいはく]である。",
      "平和[へいわ]を構築[こうちく]するという戦後[せんご]の課題[かだい]も、単[たん]なる戦争[せんそう]の不在[ふざい]とは異[こと]なる。構造[こうぞう]的[てき]暴力[ぼうりょく]が存在[そんざい]する社会[しゃかい]は、たとえ直接的[ちょくせつてき]な軍事[ぐんじ]衝突[しょうとつ]がなくとも、本質[ほんしつ]的[てき]に平和[へいわ]とは言[い]い難[がた]い。ヨハン・ガルトングが提唱[ていしょう]した構造[こうぞう]的[てき]平和[へいわ]の概念[がいねん]は、平和[へいわ]を否定的[ひていてき]定義[ていぎ]から解放[かいほう]し、積極[せっきょく]的[てき]な正義[せいぎ]の実現[じつげん]として再定義[さいていぎ]する試[こころ]みであった。この視点[してん]を採用[さいよう]するならば、戦争[せんそう]の倫理[りんり]とは戦争[せんそう]中[ちゅう]の倫理[りんり]にとどまらず、戦争[せんそう]を生[しょう]み出[だ]す構造[こうぞう]への倫理[りんり]的[てき]問[とい]いへと拡張[かくちょう]されねばならない。",
      "結論[けつろん]として、戦争[せんそう]の倫理[りんり]を現代[げんだい]ににおいて再[さい]構築[こうちく]するためには、正戦[せいせん]論[ろん]、平和[へいわ]主義[しゅぎ]、現実[げんじつ]主義[しゅぎ]の三[みっ]つの伝統[でんとう]を統合[とうごう]し、それに技術[ぎじゅつ]的[てき]変容[へんよう]と構造[こうぞう]的[てき]視点[してん]を付加[ふか]した新[あたら]しい枠組[わくぐ]みが必要[ひつよう]である。個[こ]の責任[せきにん]と国家[こっか]の責任[せきにん]を同時[どうじ]に問[と]い得[え]る制度[せいど]、暴力[ぼうりょく]の技術[ぎじゅつ]化に抗[こう]しうる倫理[りんり]的[てき]感性[かんせい]、そして平和[へいわ]を単[たん]なる休戦[きゅうせん]ではなく正義[せいぎ]の状態[じょうたい]として捉[とら]える政治[せいじ]的[てき]想像力[そうぞうりょく]。これら三[みっ]つの要素[ようそ]の成熟[せいじゅく]なくしては、次[つぎ]の世紀[せいき]における人類[じんるい]の存続[そんぞく]そのものが危[あやう]ぶまれるであろう。"
    ],
    translation: [
      "The very act of discussing the ethics of war carries within itself a paradox. Ethics is the endeavor of defending the dignity of the other, whereas war is the endeavor of destroying the life of the other. Thinking that stands at the intersection of these two endeavors inevitably must re-examine its own legitimacy. Even so, whether war can be spoken of in the language of ethics can serve as one indicator that measures the degree of human maturity.",
      "Historically, the framework that has held the most influence is probably just war theory. Originating with Augustine, passing through Aquinas, and reaching the modern Michael Walzer, this tradition cites as conditions that can justify war: just cause, legitimate authority, last resort, proportionality, and the principle of distinction. These criteria appear rigorous at first glance, but it cannot escape the criticism that in actual war their application is inevitably arbitrary.",
      "The most fragile part of just war theory lies in the separation of jus ad bellum (justice in going to war) and jus in bello (justice in conduct). Even if there is a legitimate reason for going to war, conducting indiscriminate attacks on civilians at the engagement stage collapses the ethical standing of the entire war. Although this separation is clear in theory, in modern asymmetric warfare where the boundary between soldiers and civilians is blurred, it hardly functions. On a horizon where the boundary between terrorism and state violence dissolves, just war theory itself is being pressed to reconstruct.",
      "Against this, absolute pacifism takes the position of denying war without any exception. This position is morally clean but frequently exposes its powerlessness in the realm of realpolitik. The criticism that abandoning self-defense itself results in permitting violence against others cannot be easily dismissed. Holding peace as an ideal and handling violence as a reality are tasks of different dimensions, yet they tend to be conflated.",
      "Another position is realism. This view, which holds that conflict between nations should be spoken of not in the language of morality but in the language of balance of power and national interest, harbors the paradox that by retreating from the ethical realm it actually establishes an ethical stance. Yet it must not be overlooked that realism, owing to its thorough coldness, has a tendency to tacitly demand exemption from overlooking humanitarian crises.",
      "The greatest ethical difficulty of the modern era is probably the dilution of responsibility caused by the expansion of technological distance. Remote violence, symbolized by drone strikes and cyber warfare, has eliminated the corporeality of harm and reduced the moral burden on the operator. The fact that a person dies on the other side of a screen is buried within a game-like sense of operation, rendering the locus of responsibility unclear. The banality of evil that Hannah Arendt pointed out has become even more banal through technological refinement.",
      "Moreover, the question of responsibility regarding war has unfolded in a peculiarly modern way, extending beyond the framework of the state to individuals. The establishment of the International Criminal Court is an attempt to trace back the responsibility for acts conducted in the name of the state to individual chains of command. However, this attempt inevitably collides head-on with the concept of state sovereignty, a foundational concept of modern Western thought, and its legitimacy is still contested even within the international community. It is obvious that institutional devices to escape the accusation of victor's justice have not yet reached the realm of completion.",
      "The post-war task of constructing peace is also different from mere absence of war. A society in which structural violence exists cannot truly be called peaceful even if there is no direct military conflict. The concept of structural peace advocated by Johan Galtung was an attempt to liberate peace from a negative definition and redefine it as the realization of positive justice. If this perspective is adopted, the ethics of war must be expanded from ethics during war into an ethical inquiry into the structures that produce war.",
      "In conclusion, to reconstruct the ethics of war in the modern era, a new framework is required that integrates the three traditions of just war theory, pacifism, and realism, and adds technological transformation and a structural perspective. Institutions that can simultaneously interrogate individual and state responsibility; an ethical sensibility that can resist the technologization of violence; and a political imagination that grasps peace not as mere truce but as a state of justice. Without the maturation of these three elements, the very survival of humanity in the coming century will be imperiled."
    ],
    questions: [
      {
        q: "What paradox does the author identify at the start of the discourse?",
        choices: ["That ethics cannot be discussed without war", "That ethics defends the dignity of the other while war destroys the life of the other, so discussing the ethics of war is itself paradoxical", "That just war theory is both right and wrong", "That pacifism requires violence to succeed"],
        answerIndex: 1,
        explanation: "The text states 倫理とは他者の尊厳を擁護する営であるのに対し、戦争とは他者の生命を破壊する営である — ethics defends dignity, war destroys life, so discussing their intersection is paradoxical."
      },
      {
        q: "Why does the passage say just war theory's separation of jus ad bellum and jus in bello fails in modern warfare?",
        choices: ["Because modern wars are too short to need such distinctions", "Because the boundary between soldiers and civilians is blurred in asymmetric warfare", "Because international law has abolished the distinction", "Because modern armies are entirely composed of civilians"],
        answerIndex: 1,
        explanation: "The text states 兵士と市民の境界が曖昧化する現代の非対称戦争においては、ほとんど機能しない — the boundary between soldier and civilian blurs in asymmetric warfare."
      },
      {
        q: "What does the passage say about the relationship between realism and ethics?",
        choices: ["Realism has no relationship with ethics whatsoever", "Realism paradoxically establishes an ethical stance by retreating from the ethical realm, but tends to tacitly demand exemption from overlooking humanitarian crises", "Realism is identical to pacifism", "Realism is identical to just war theory"],
        answerIndex: 1,
        explanation: "The passage notes the paradox that 倫理の領域から退却することによって逆に一つの倫理的立場を成立させている and that realism tends to tacitly demand exemption from overlooking humanitarian crises."
      },
      {
        q: "How does the passage characterize the problem of remote technological violence (drones, cyber warfare)?",
        choices: ["It increases the moral burden on operators", "It eliminates the corporeality of harm, reduces moral burden, and obscures the locus of responsibility — making evil more banal", "It has no effect on moral responsibility", "It makes war more humane and ethical"],
        answerIndex: 1,
        explanation: "The text describes 加害の身体性を消去することで、操作する者の道徳的負荷を軽減 and 責任の帰属先を不明にする — eliminating the body of harm and obscuring responsibility."
      },
      {
        q: "Which N1 grammar point appears in '倫理の領域から退却することによって逆に一つの倫理的立場を成立させているという逆説を孛む'?",
        choices: ["〜という (called / that is to say)", "〜かねない", "〜にすぎない", "〜までもない"],
        answerIndex: 0,
        explanation: "〜という here introduces and names the paradox — that realism, by retreating from ethics, ironically establishes an ethical stance."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-43 — The sociology of Japan's aging workforce
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-43",
    title: "日本[にほん]の高齢[こうれい]化[か]する労働[ろうどう]市場[しじょう]の社会学[しゃかいがく]",
    titleReading: "にほんのこうれいかするろうどうしじょうのしゃかいがく",
    level: "N1",
    summary: "A sociological analysis of Japan's aging labor market, examining how demographic decline intersects with corporate structures, age discrimination, productivity myths, and intergenerational tensions, with attention to gendered and class-based disparities.",
    estMinutes: 13,
    tags: ["sociology", "aging", "labor market", "demographics", "Japan", "work"],
    body: [
      "日本[にほん]の労働[ろうどう]市場[しじょう]が直面[ちょくめん]している高齢[こうれい]化[か]という事態[じたい]は、単[たん]なる人口[じんこう]統計[とうけい]学[がく]的[てき]変動[へんどう]にとどまらない。それは企業[きぎょう]の雇用[こよう]慣行[かんこう]、年金[ねんきん]制度[せいど]、家族[かぞく]構造[こうぞう]、そして世代[せだい]間[かん]の連帯[れんたい]感[かん]を同時[どうじ]に解体[かいたい]し再構築[さいこうちく]する、複合[ふくごう]的[てき]な社会的[しゃかいてき]転換[てんかん]である。六十五[ろくじゅうご]歳[さい]以上[いじょう]の人口[じんこう]が総[そう]人口[じんこう]の四[よん]割[わり]に達[たっ]すると予測[よそく]される将来[しょうらい]において、労働[ろうどう]そのものの意味[いみ]を問[と]い直[なお]さずにはすまないのである。",
      "高齢[こうれい]者[しゃ]の労働[ろうどう]参加[さんか]率[りつ]は、過去[かこ]二[に]十[じゅう]年[ねん]間[かん]で着実[ちゃくじつ]に上昇[じょうしょう]してきた。これは健康[けんこう]寿命[じゅみょう]の延伸[えんしん]という喜[よろこ]ばしい側面[そくめん]と、年金[ねんきん]不足[ぶそく]という憂[うれ]うべき側面[そくめん]の双方[そうほう]を内包[ないほう]している。働[はたら]ける高齢[こうれい]者[しゃ]が働[はたら]くことは個[こ]の尊厳[そんげん]を支[ささ]えるが、働[はたら]かざるを得[え]ない高齢[こうれい]者[しゃ]が働[はたら]くことは社会[しゃかい]の失敗[しっぱい]を暴露[ばくろ]する。この二[ふた]つの状態[じょうたい]を一[ひと]つの統計[とうけい]が同時[どうじ]に表示[ひょうじ]してしまうという方法[ほうほう]論[ろん]的[てき]限界[げんかい]は、政策[せいさく]議論[ぎろん]を著[いちじるし]く歪[ゆが]めているきらいがある。",
      "日本[にほん]の企業[きぎょう]文化[ぶんか]は、長[なが]年[ねん]にわたり年功[ねんこう]序列[じょれつ]と終身[しゅうしん]雇用[こよう]を基軸[きじく]としてきた。この制度[せいど]は、若[わか]い時[じ]期[き]に低[てい]賃金[ちんぎん]で我慢[がまん]すれば年[とし]をとってから報[むく]われるという暗黙[あんもく]の契約[けいやく]に支[ささ]えられていた。しかし高齢[こうれい]化[か]が進行[しんこう]する中[なか]で、企業[きぎょう]側[がわ]は過剰[かじょう]な高齢[こうれい]人[じん]口[こう]を維持[いじ]できず、若[わか]い世代[せだい]に十分[じゅうぶん]な賃金[ちんぎん]を回[まわ]す余裕[よゆう]も失[うしな]った。結果[けっか]として、かつての暗黙[あんもく]契約[けいやく]は一[ひと]方[ぽう]的[てき]に破棊[はき]され、中高年[ちゅうこうねん]の労働[ろうどう]者[しゃ]は賃金[ちんぎん]逓減[ていげん]制度[せいど]の下[もと]で働[はたら]き続[つづ]けることを余儀[よぎ]なくされている。",
      "ここで年齢[ねんれい]差別[さべつ]の問題[もんだい]にも触[ふ]れねばなるまい。表向[おもてむ]きには年齢[ねんれい]を理由[りゆう]とする採用[さいよう]拒否[きょひ]は禁[きん]じられているが、実際[じっさい]の採用[さいよう]市場[しじょう]では年齢[ねんれい]が選考[せんこう]の重要[じゅうよう]な基準[きじゅん]として暗黙[あんもく]に機能[きのう]し続[つづ]けている。中高年[ちゅうこうねん]の再雇用[さいこよう]は、原則[げんそく]として元[もと]の企業[きぎょう]内[ない]の低[てい]地位[ちい]ポスト[ぽすと]に限定[げんてい]されることが多[おお]く、技能[ぎのう]と経験[けいけん]が正当[せいとう]に評価[ひょうか]されない構造[こうぞう]的[てき]閉塞[へいそく]感[かん]を生[しょう]じさせている。これは単[たん]なる個人[こじん]の不満[ふまん]にとどまらず、社会[しゃかい]全体[ぜんたい]の人材[じんざい]資本[しほん]の浪費[ろうひ]という巨額[きょがく]の損失[そんしつ]を意味[いみ]する。",
      "性別[せいべつ]による差異[さい]も看過[かんか]できない。高齢[こうれい]女性[じょせい]の貧困[ひんこん]率[りつ]は男性[だんせい]を顕著[けんちょ]に上回[うわまわ]っており、これは女性[じょせい]の非正規[ひせいき]雇用[こよう]率[りつ]の高[たか]さ、賃金[ちんぎん]格差[かくさ]、そして寡婦[かふ]化[か]による年金[ねんきん]受給[じゅきゅう]額[がく]の減少[げんしょう]に起因[きいん]する。高齢[こうれい]化[か]の社会学[しゃかいがく]を語[かた]る際[さい]に女性[じょせい]の経験[けいけん]を周縁[しゅうえん]化[か]することは、問題[もんだい]の核心[かくしん]を見失[みうしな]うに等[ひと]しい。労働[ろうどう]市場[しじょう]の柔軟[じゅうなん]化[か]が女性[じょせい]を低[てい]賃金[ちんぎん]・低[てい]保障[ほしょう]のセクタ[せくた]ーに集中[しゅうちゅう]させたという歴史[れきし]的[てき]経緯[けいい]を、政策[せいさく]は正面[しょうめん]から向[む]き合[あ]わねばならない。",
      "生産性[せいさんせい]神話[しんわ]の問題[もんだい]も指摘[してき]されねばならない。高齢[こうれい]者[しゃ]の労働[ろうどう]参加[さんか]が生産性[せいさんせい]を低下[ていか]させるという主張[しゅちょう]は、しばしば偏見[へんけん]に基[もと]づくものである。知識[ちしき]集約[しゅうやく]型[がた]の業務[ぎょうむ]においては、高齢[こうれい]者[しゃ]の暗黙[あんもく]知[ち]と経験[けいけん]的[てき]判断[はんだん]力[りょく]は若[わか]年[ねん]層[そう]を凌駕[りょうが]することが少[すく]なくない。問題[もんだい]は高齢[こうれい]者[しゃ]の能力[のうりょく]ではなく、能力[のうりょく]を活[い]かす職場[しょくば]設計[せっけい]が欠如[けつじょ]していることにある。年齢[ねんれい]に応[おう]じたタスク再配分[さいぶん]とテクノロジー[てくのろじー]による補完[ほかん]を設計[せっけい]し得[え]ない組織[そしき]が、生産性[せいさんせい]低下[ていか]の責任[せきにん]を高齢[こうれい]者[しゃ]に転嫁[てんか]しているとの指摘[してき]は免[まぬが]れまい。",
      "世代[せだい]間[かん]の緊張[きんちょう]も深刻[しんこく]化[か]しつつある。年金[ねんきん]と医療[いりょう]の財源[ざいげん]を現役[げんえき]世代[せだい]の社会[しゃかい]保障[ほしょう]負担[ふたん]に依存[いぞん]する現行[げんこう]制度[せいど]の下[もと]では、人口[じんこう]構造[こうぞう]の逆[ぎゃく]ピラミッド[ぴらみっど]化[か]が若[わか]い世代[せだい]の負担[ふたん]を限界[げんかい]にまで押[お]し上[あ]げる。若[わか]者[もの]が高齢[こうれい]者[しゃ]を憎[にく]み、高齢[こうれい]者[しゃ]が若[わか]者[もの]を責[せ]めるという螺旋[らせん]は、社会[しゃかい]の連帯[れんたい]感[かん]そのものを内側[うちがわ]から蝕[むしば]む。これを防[ふせ]ぐには、負担[ふたん]と受益[じゅえき]の連結[れんけつ]を見直[みなお]すと同時[どうじ]に、世代[せだい]を超[こ]えた共通[きょうつう]の利益[りえき]を可視化[かしか]する新[あたら]しい公共[こうきょう]空間[くうかん]の設計[せっけい]が求[もと]められる。",
      "地方[ちほう]と都市[とし]の格差[かくさ]もまた、高齢[こうれい]化[か]の社会学[しゃかいがく]を複雑[ふくざつ]化[か]する。地方[ちほう]では高齢[こうれい]者[しゃ]の割合[わりあい]が高[たか]い反面[はんめん]、労働[ろうどう]力[りょく]需要[じゅよう]は低[ひく]く、交通[こうつう]とサービス[さーびす]の基盤[きばん]も脆弱[ぜいじゃく]である。高齢[こうれい]者[しゃ]が働[はたら]きたくても働[はたら]けないという状況[じょうきょう]は地方[ちほう]において特に顕著[けんちょ]であり、これは都市[とし]への若者[わかもの]流出[りゅうしゅつ]と相[あい]まって地方[ちほう]社会[しゃかい]の存立[そんりつ]自体[じたい]を脅[おびや]かしている。地域[ちいき]ごとに異[こと]なる高齢[こうれい]化[か]の段階[だんかい]に応[おう]じた政策[せいさく]の細分化[さいぶんか]なくしては、全国[ぜんこく]一律[いちりつ]の枠組[わくぐ]みは逆[ぎゃく]に被害[ひがい]を拡大[かくだい]する恐[おそ]れがある。",
      "結論[けつろん]として、日本[にほん]の高齢[こうれい]化[か]する労働[ろうどう]市場[しじょう]を社会学[しゃかいがく]の対象[たいしょう]として捉[とら]えるとき、それは個[こ]の選択[せんたく]の問題[もんだい]ではなく構造[こうぞう]的[てき]制約[せいやく]の問題[もんだい]として浮[う]かび上[あ]がる。企業[きぎょう]の制度[せいど]設計[せっけい]、性別[せいべつ]と地域[ちいき]による格差[かくさ]の補正[ほせい]、世代[せだい]間[かん]の連帯[れんたい]の再構築[さいこうちく]、そして何[なに]より労働[ろうどう]の意味[いみ]そのものの再定義[さいていぎ]。これらが同時[どうじ]に進行[しんこう]しなければ、日本[にほん]の労働[ろうどう]市場[しじょう]は高齢[こうれい]化[か]という波[なみ]に飲[の]み込[こ]まれることになろう。高齢[こうれい]化[か]を負債[ふさい]ではなく資産[しさん]として組[く]み直[なお]す知恵[ちえ]こそが、いま問[と]われているのである。"
    ],
    translation: [
      "The aging of Japan's labor market is not merely a demographic fluctuation. It is a complex social transformation that simultaneously dismantles and reconstructs corporate employment practices, pension systems, family structures, and intergenerational solidarity. In a future where the population aged 65 and over is projected to reach forty percent of the total population, we cannot avoid re-examining the very meaning of labor.",
      "The labor force participation rate of the elderly has steadily risen over the past twenty years. This contains both the welcome aspect of extended healthy life expectancy and the lamentable aspect of pension insufficiency. Elderly who can work and do work sustains individual dignity, but elderly who have no choice but to work exposes a societal failure. The methodological limitation that a single statistic simultaneously represents these two states has a tendency to markedly distort policy debate.",
      "Japanese corporate culture has long placed seniority-based wage systems and lifetime employment at its core. This system was supported by an implicit contract: endure low wages in youth, and be rewarded in old age. However, as aging has progressed, companies can no longer sustain an excess elderly population, nor do they have the leeway to allocate sufficient wages to younger generations. As a result, the former implicit contract has been unilaterally abrogated, and middle-aged and elderly workers are forced to continue working under wage-decrement systems.",
      "Here we must also touch on the issue of age discrimination. On the surface, refusal to hire on the basis of age is prohibited, but in the actual hiring market age continues to function tacitly as an important selection criterion. Re-employment of middle-aged and elderly persons is often restricted to low-status posts within the original company, generating a structural sense of closure in which skills and experience are not properly evaluated. This is not merely individual dissatisfaction but means the colossal loss of wasteful human capital for society as a whole.",
      "Differences by gender cannot be overlooked either. The poverty rate among elderly women markedly exceeds that of men, due to the high rate of non-regular employment among women, the wage gap, and the reduction of pension benefits through widowhood. To marginalize women's experience when discussing the sociology of aging is tantamount to losing sight of the core of the problem. The historical circumstance whereby the flexibilization of the labor market concentrated women in low-wage, low-protection sectors must be confronted head-on by policy.",
      "The myth of productivity must also be pointed out. The claim that the labor participation of the elderly lowers productivity is often based on prejudice. In knowledge-intensive work, the tacit knowledge and experiential judgment of the elderly not infrequently surpass those of younger cohorts. The problem lies not in the ability of the elderly but in the lack of workplace design that brings out their ability. The criticism cannot be escaped that organizations incapable of designing age-appropriate task reallocation and technological compensation shift the responsibility for productivity decline onto the elderly.",
      "Intergenerational tension is also deepening. Under the current system that depends on the social-security burden of the working generation for the funding of pensions and medical care, the inverse-pyramid-ization of population structure pushes the burden on younger generations to the limit. The spiral in which the young resent the elderly and the elderly blame the young corrodes the very sense of social solidarity from within. To prevent this, redesigning the linkage between burden and benefit as well as designing new public spaces that visualize shared interests beyond generations is required.",
      "The disparity between rural and urban areas also complicates the sociology of aging. In rural areas the proportion of the elderly is high, but on the other hand labor demand is low and the infrastructure of transportation and services is fragile. The situation in which the elderly want to work but cannot is particularly pronounced in rural areas, and together with the outflow of young people to cities it threatens the very existence of rural society. Without subdividing policies according to the different stages of aging in each region, a uniform nationwide framework may conversely expand the damage.",
      "In conclusion, when grasping Japan's aging labor market as a subject of sociology, it surfaces as a problem not of individual choice but of structural constraints. Corporate system design, correction of disparities by gender and region, reconstruction of intergenerational solidarity, and above all the redefinition of the very meaning of labor. Unless these proceed simultaneously, Japan's labor market will be engulfed by the wave of aging. The wisdom to redesign aging as an asset rather than a liability is precisely what is now being demanded."
    ],
    questions: [
      {
        q: "What methodological limitation does the author identify in the statistics on elderly labor participation?",
        choices: ["The statistics only count male workers", "A single statistic simultaneously shows both welcome and lamentable aspects, distorting policy debate", "The statistics are too old to be useful", "The statistics exclude rural workers"],
        answerIndex: 1,
        explanation: "The text states この二つの状態を一つの統計が同時に表示してしまうという方法論的限界 — a single statistic conflates 'can work' with 'must work' situations."
      },
      {
        q: "How does the passage describe the breakdown of the implicit contract in Japanese corporate culture?",
        choices: ["Companies have increased wages for older workers beyond the contract", "Companies can no longer sustain an excess elderly population nor allocate sufficient wages to the young, so the contract is unilaterally abrogated", "Workers have voluntarily abandoned the contract", "The government has nationalized all employment contracts"],
        answerIndex: 1,
        explanation: "The text states 企業側は過剰な高齢人口を維持できず、若い世代に十分な賃金を回す余裕も失った — the implicit contract is unilaterally abrogated, with middle-aged workers forced to continue under wage-decrement systems."
      },
      {
        q: "Why does the author emphasize elderly women's experience in the sociology of aging?",
        choices: ["Because elderly women outnumber men in the workforce", "Because marginalizing women's experience means losing sight of the core problem — their poverty rates exceed men's due to non-regular employment, wage gaps, and widowhood", "Because women live longer and nothing else", "Because elderly women refuse to work"],
        answerIndex: 1,
        explanation: "The passage warns 高齢化の社会学を語る際に女性の経験を周縁化することは、問題の核心を見失うに等しい, noting their high poverty rates driven by non-regular employment and widowhood."
      },
      {
        q: "How does the passage counter the claim that elderly labor lowers productivity?",
        choices: ["It agrees that the elderly are uniformly less productive", "It argues the problem is not elderly ability but the lack of workplace design that brings out their ability, and that organizations shift responsibility onto the elderly", "It argues productivity is irrelevant to aging", "It claims the elderly are always more productive than the young"],
        answerIndex: 1,
        explanation: "The passage states 問題は高齢者の能力ではなく、能力を活かす職場設計が欠如していることにある, and that organizations incapable of design shift responsibility for productivity decline to the elderly."
      },
      {
        q: "Which N1 grammar point appears in '労働そのものの意味を問い直さずにはすまないのである'?",
        choices: ["〜ずにはすまない (cannot get away with not doing X)", "〜にたえない", "〜までもない", "〜きらいがある"],
        answerIndex: 0,
        explanation: "〜ずにはすまない expresses that one cannot settle matters without doing X — here, society cannot get by without re-examining the meaning of labor itself."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-44 — An essay on the nature of consciousness
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-44",
    title: "意識[いしき]という謎[なぞ]の哲学[てつがく]的[てき]探究[たんきゅう]：クオリア[くおりあ]と難問[なんもん]",
    titleReading: "いしきというなぞのてつがくてきたんきゅう：くおりあとなんもん",
    level: "N1",
    summary: "An essay on the hard problem of consciousness, examining the mind-body relation, qualia, phenomenological and neuroscientific approaches, the limits of functionalist explanation, and what consciousness reveals about the limits of scientific reductionism.",
    estMinutes: 12,
    tags: ["philosophy of mind", "consciousness", "qualia", "phenomenology", "neuroscience"],
    body: [
      "意識[いしき]という現象[げんしょう]は、哲学[てつがく]および科学[かがく]が直面[ちょくめん]する最[もっと]も頑固[がんこ]な謎[なぞ]として立[た]ち続[つづ]けている。脳[のう]という物理[ぶつり]的[てき]対象[たいしょう]からいかにして主観[しゅかん]的[てき]な体験[たいけん]が生[しょう]じるのか。この問[とい]いに満足[まんぞく]のゆく回答[かいとう]を与[あた]えることなくしては、心[こころ]についてのいかなる科学[かがく]も基礎[きそ]を欠[か]くと言[い]わざるを得[え]ない。デカルトが「我[われ]思[おも]う、故[ゆえ]に我[われ]在[あ]り」と宣言[せんげん]して以来、意識[いしき]は哲学[てつがく]の中心[ちゅうしん]舞台[ぶたい]であり続[つづ]けたが、二十[にじゅう]世紀[せいき]の後半[こうはん]に至[いた]るまでその謎[なぞ]は解[と]かれなかったのである。",
      "意識[いしき]の哲学[てつがく]における現代[げんだい]的[てき]転換[てんかん]は、デイヴィッド・チャルマーズが提起[ていきょう]した「意識[いしき]の難問[なんもん]」という概念[がいねん]によってもたらされた。易[やさ]しい問題[もんだい]とは、脳[のう]が情報[じょうほう]を処理[しょり]する機構[きこう]、注意[ちゅうい]の統合[とうごう]、行動[こうどう]の制御[せいぎょ]といった機能[きのう]的[てき]な説明[せつめい]が可能[かのう]な問題[もんだい]である。これに対[たい]し難問[なんもん]とは、なぜこれらの情報[じょうほう]処理[しょり]に主観[しゅかん]的[てき]体験[たいけん]が伴[ともな]うのか、赤[あか]を赤[あか]として感[かん]じるという体験[たいけん]は物理[ぶつり]的[てき]には存在[そんざい]しないはずの何[なに]かであるのになぜ存在[そんざい]するのか、という問[とい]いである。",
      "この難問[なんもん]の深刻[しんこく]さは、還元[かんげん]主義[しゅぎ]的[てき]な説明[せつめい]が機能[きのう]と相関[そうかん]を記述[きじゅつ]し得[え]ても、体験[たいけん]そのものを生成[せいせい]し得[え]ないという点[てん]にある。神経[しんけい]科学[かがく]者[しゃ]がある脳[のう]活動[かつどう]パターン[ぱたーん]とある意識[いしき]体験[たいけん]の相関[そうかん]を発見[はっけん]したとしよう。その発見[はっけん]は、なぜそのパターン[ぱたーん]がその体験[たいけん]を生[しょう]み出[だ]すのかを説明[せつめい]しない。相関[そうかん]と因果[いんが]の区別[くべつ]は科学[かがく]哲学[てつがく]の古[ふる]い教訓[きょうくん]であるが、意識[いしき]の文脈[ぶんみゃく]ではこの区別[くべつ]が致命的[ちめいてき]な重要性[じゅうようせい]を帯[お]びるのである。",
      "クオリアという概念[がいねん]もまた、難問[なんもん]と表裏[ひょうり]一体[いったい]である。クオリアとは、主観[しゅかん]的[てき]体験[たいけん]の「それのような感じ[かんじ]」を指[さ]す。赤[あか]りんごを見[み]るときの赤[あか]の感じ[かんじ]、コーヒー[こーひー]の味[あじ]わい、痛[いた]みの鋭[するど]さ、これらはすべて物理[ぶつり]的[てき]記述[きじゅつ]からは独立[どくりつ]に存在[そんざい]する主観[しゅかん]的事実[じじつ]である。トマス[とます]・ネーゲル[ねーげる]がコウモリ[こうもり]であることはどのような感じ[かんじ]かという問[とい]いを提示[ていじ]したとき、彼[かれ]が指摘[してき]したのは、物理[ぶつり]的[てき]情報[じょうほう]をすべて集[あつ]めてもコウモリ[こうもり]の主観[しゅかん]的[てき]視点[してん]に到達[とうたつ]することは不可能[ふかのう]だという事実[じじつ]であった。",
      "機能[きのう]主義[しゅぎ]という立場[たちば]は、この謎[なぞ]を解消[かいしょう]しようとする一[ひと]つの試[こころ]みである。心[こころ]の状態[じょうたい]をその因果[いんが]役割[やくわり]によって定義[ていぎ]し、その役割[やくわり]を果[は]たす物理[ぶつり]的[てき]基盤[きばん]が何[なに]であれ構[かま]わないとするこの考[かんが]えは、人工[じんこう]知能[ちのう]に意識[いしき]を認[みと]める可能性[かのうせい]を理論[りろん]的[てき]に開[ひら]いた。しかし機能[きのう]主義[しゅぎ]は、中国[ちゅうごく]語[ご]の部屋[へや]という思考[しこう]実験[じっけん]を通[つう]じてジョン・サール[さーる]が示[しめ]したように、構文[こうぶん]的[てき]処理[しょり]と意味[いみ]的理解[りかい]の溝[みぞ]を埋[う]められないという深刻[しんこく]な困難[こんなん]に直面[ちょくめん]している。",
      "現象[げんしょう]学[がく]の伝統[でんとう]は、意識[いしき]の謎[なぞ]に別[べつ]の角度[かくど]から接近[せっきん]する。フッサールが提唱[ていしょう]した志向[しこう]性[せい]の概念[がいねん]は、意識[いしき]は常に何[なに]かについての意識[いしき]であるという構造[こうぞう]的[てき]特質[とくしつ]を指[さ]す。意識[いしき]は対象[たいしょう]なき純粋[じゅんすい]状態[じょうたい]ではなく、世界[せかい]との関係性[かんけいせい]そのものとして成立[せいりつ]する。この視点[してん]は、意識[いしき]を脳[のう]内[ないい]の孤立[こりつ]した現象[げんしょう]としてではなく、身体[しんたい]と環境[かんきょう]と他者[たしゃ]を包括[ほうかつ]する関係[かんけい]的[てき]現象[げんしょう]として捉[とら]え直[なお]す道[みち]を開[ひら]いた。",
      "もっとも、現象[げんしょう]学[がく]的[てき]接近[せっきん]にも限界[げんかい]がある。主観[しゅかん]的[てき]記述[きじゅつ]を方法[ほうほう]とするこの伝統[でんとう]は、第三[だいさん]者[しゃ]的[てき]な検証[けんしょう]可能性[かのうせい]を欠[か]くという科学[かがく]的[てき]批判[ひはん]を免[まぬが]れない。他者[たしゃ]の意識[いしき]に直接[ちょくせつ]アクセスすることは原理[げんり]的[てき]に不可能[ふかのう]であり、私[わたし]が他者[たしゃ]の痛[いた]みを知[し]ることは結局[けっきょく]推論[すいろん]に過[す]ぎないという困難[こんなん]は、他者[たしゃ]心[こころ]問題[もんだい]として知[し]られる永遠[えいえん]の課題[かだい]を残[のこ]し続[つづ]ける。この点[てん]において、意識[いしき]の哲学[てつがく]は認識[にんしき]論[ろん]の古[ふる]い問題[もんだい]を色濃[いろこく]く引[ひ]き継[つ]いでいる。",
      "最近[さいきん]の展開[てんかい]として、統合[とうごう]情報[じょうほう]理論[りろん]や予測[よそく]符号[ふごう]化[か]アプローチ[あぷろーち]が注目[ちゅうもく]を集[あつ]めている。前者[ぜんしゃ]は意識[いしき]を情報[じょうほう]統合[とうごう]の度合[どあい]として定量化[ていりょうか]しようとし、後者[こうしゃ]は脳[のう]が外界[がいかい]を予測[よそく]し続[つづ]ける機構[きこう]の中[なか]に意識[いしき]の起源[きげん]を探[さが]す。これらは科学的[かがくてき]な厳密[げんみつ]さを備[そな]えるものの、依然[いぜん]として難問[なんもん]そのものを解決[かいけつ]したわけではない。物理[ぶつり]的[てき]プロセスから主観[しゅかん]的[てき]体験[たいけん]への飛躍[ひやく]を説明[せつめい]する理論[りろん]的[てき]架[か]橋[きょう]は、いまだに構築[こうちく]されていないのである。",
      "結論[けつろん]として、意識[いしき]の哲学[てつがく]は人間[にんげん]の知[ち]の最[もっと]も前線[ぜんせん]に位置[いち]する探究[たんきゅう]である。それは科学[かがく]と哲学[てつがく]の境界[きょうかい]を問[と]い直[なお]し、還元[かんげん]主義[しゅぎ]の限界[げんかい]を露呈[ろてい]し、主観[しゅかん]性[せい]という科学[かがく]が扱[あつか]いにく[にく]い領域[りょういき]の重要性[じゅうようせい]を浮[う]き彫[ぼ]りにする。意識[いしき]を理解[りかい]することは、人間[にんげん]が人間[にんげん]であることの条件[じょうけん]を理解[りかい]することに他[ほか]ならない。この謎[なぞ]に謙虚[けんきょ]に向[む]き合[あ]い続[つづ]けることこそが、成熟[せいじゅく]した知性[ちせい]の徴[ちしるし]と言[い]えるであろう。"
    ],
    translation: [
      "The phenomenon of consciousness has persisted as the most obstinate mystery that philosophy and science confront. How does subjective experience arise from the physical object that is the brain? Without providing a satisfactory answer to this question, any science of mind must be said to lack a foundation. Since Descartes declared 'I think, therefore I am,' consciousness has continued to be the central stage of philosophy, yet up to the latter half of the twentieth century its mystery remained unsolved.",
      "The modern turn in the philosophy of consciousness was brought about by the concept of 'the hard problem of consciousness' proposed by David Chalmers. The easy problems are those amenable to functional explanation, such as the mechanisms by which the brain processes information, integrates attention, and controls behavior. The hard problem, by contrast, is the question of why these information processes are accompanied by subjective experience — why the experience of red as red is something that should not exist physically and yet does exist.",
      "The gravity of this hard problem lies in the fact that reductionist explanations can describe function and correlation but cannot generate the experience itself. Suppose a neuroscientist discovers a correlation between a certain brain-activity pattern and a certain conscious experience. That discovery does not explain why that pattern produces that experience. The distinction between correlation and causation is an old lesson of philosophy of science, but in the context of consciousness this distinction assumes fatal importance.",
      "The concept of qualia is also inseparable from the hard problem. Qualia refers to the 'what-it-is-like' of subjective experience. The feeling of red when seeing a red apple, the taste of coffee, the sharpness of pain — these are all subjective facts that exist independently of physical description. When Thomas Nagel posed the question of what it is like to be a bat, what he pointed out was the fact that even if all physical information were gathered it would be impossible to reach the bat's subjective perspective.",
      "Functionalism is one attempt to resolve this mystery. This view, which defines mental states by their causal roles and holds that any physical substrate fulfilling that role will do, theoretically opened the possibility of attributing consciousness to artificial intelligence. However, functionalism confronts a serious difficulty that John Searle exposed through the thought experiment of the Chinese Room — the inability to bridge the gulf between syntactic processing and semantic understanding.",
      "The phenomenological tradition approaches the mystery of consciousness from a different angle. The concept of intentionality advocated by Husserl refers to the structural property that consciousness is always consciousness of something. Consciousness is not a pure state without an object, but establishes itself as a relation with the world. This perspective opened a path to reframe consciousness not as an isolated phenomenon within the brain but as a relational phenomenon encompassing body, environment, and the other.",
      "Needless to say, the phenomenological approach also has its limits. This tradition, whose method is subjective description, cannot escape the scientific critique that it lacks third-person verifiability. The principled impossibility of direct access to the consciousness of the other, and the difficulty that knowing the other's pain is ultimately nothing but inference, continues to leave behind an eternal task known as the problem of other minds. In this respect, the philosophy of consciousness strongly inherits an old problem of epistemology.",
      "As a recent development, Integrated Information Theory and the Predictive Coding approach have drawn attention. The former seeks to quantify consciousness as the degree of information integration, and the latter searches for the origin of consciousness within the mechanism by which the brain continuously predicts the external world. Although these possess scientific rigor, they still have not solved the hard problem itself. The theoretical bridge that explains the leap from physical process to subjective experience has yet to be constructed.",
      "In conclusion, the philosophy of consciousness is an inquiry positioned at the foremost front of human knowledge. It re-examines the boundary between science and philosophy, exposes the limits of reductionism, and brings into relief the importance of subjectivity — a domain difficult for science to handle. Understanding consciousness is nothing other than understanding the condition of being human. To continue to humbly confront this mystery can be said to be the mark of a mature intellect."
    ],
    questions: [
      {
        q: "What is the 'hard problem of consciousness' as defined in the passage?",
        choices: ["The problem of measuring brain activity", "The question of why information processing is accompanied by subjective experience — why red is felt as red though it should not exist physically", "The problem of building faster computers", "The problem of translating languages"],
        answerIndex: 1,
        explanation: "The text defines 難問 as: なぜこれらの情報処理に主観的体験が伴うのか — why subjective experience accompanies information processing, even though red-as-experienced should not exist physically."
      },
      {
        q: "Why does the author emphasize the distinction between correlation and causation in consciousness studies?",
        choices: ["Because it is irrelevant to the problem", "Because discovering a brain-activity/experience correlation does not explain why that pattern produces that experience", "Because correlation is more important than causation", "Because causation can be ignored in science"],
        answerIndex: 1,
        explanation: "The text states その発見は、なぜそのパターンがその体験を生み出すのかを説明しない — correlation findings do not explain why a pattern produces the corresponding experience."
      },
      {
        q: "What was Thomas Nagel's point in asking what it is like to be a bat?",
        choices: ["That bats are easier to study than humans", "That gathering all physical information cannot reach the bat's subjective perspective", "That bats lack consciousness", "That subjective experience is unimportant"],
        answerIndex: 1,
        explanation: "The text states 物理的情報をすべて集めてもコウモリの主観的視点に到達することは不可能だという事実 — even complete physical information cannot reach the bat's subjective perspective."
      },
      {
        q: "How does the passage characterize the limits of phenomenology?",
        choices: ["It cannot describe any experiences", "Its subjective description lacks third-person verifiability, and direct access to others' consciousness is impossible — leaving the problem of other minds", "It is too scientific", "It only works for artificial intelligence"],
        answerIndex: 1,
        explanation: "The passage notes that phenomenology 第三者的な検証可能性を欠くという科学的批判を免れない and that direct access to other minds is impossible."
      },
      {
        q: "Which N1 grammar point appears in '満足のゆく回答を与えることなくしては、心についてのいかなる科学も基礎を欠くと言わざるを得ない'?",
        choices: ["〜なくしては (without doing X, some undesirable result follows)", "〜にたえない", "〜と思いきや", "〜が最後"],
        answerIndex: 0,
        explanation: "〜なくしては expresses that without the precondition, an undesirable result follows — without satisfactory answers, any science of mind must be said to lack a foundation."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-45 — Japan's cultural diplomacy
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-45",
    title: "日本[にほん]の文化[ぶんか]外交[がいこう]という戦略[せんりゃく]：ソフト[そふと]パワー[ぱわー]の光[ひかり]と影[かげ]",
    titleReading: "にほんのぶんかがいこうというせんりゃく：そふとぱわーのひかりとかげ",
    level: "N1",
    summary: "An analysis of Japan's cultural diplomacy, examining its historical roots in the postwar era, the rise of 'Cool Japan' soft power, tensions between state-led promotion and organic pop culture, and the strategic limits of exporting culture without confronting historical memory.",
    estMinutes: 11,
    tags: ["cultural diplomacy", "soft power", "Cool Japan", "anime", "policy"],
    body: [
      "文化[ぶんか]外交[がいこう]という言葉[ことば]が日本[にほん]の政策[せいさく]言説[げんせつ]に頻出[ひんしゅつ]するようになって久[ひさ]しい。しかしこの概念[がいねん]が示す実態[じったい]は、一[ひと]見[けん]すると単[たん]なる魅力[みりょく]ある文化[ぶんか]の輸出[ゆしゅつ]に見[み]えながら、その内実[ないじつ]ははるかに複雑[ふくざつ]な戦略[せんりゃく]的[てき]意図[いと]を孛[ほ]んでいる。ソフト[そふと]パワー[ぱわー]という概念[がいねん]をジョゼフ・ナイが提唱[ていしょう]して以来、文化[ぶんか]は軍事[ぐんじ]力[りょく]や経済[けいざい]力[りょく]に代[か]わる影響[えいきょう]力[りょく]の源泉[げんせん]として位置[いち]づけられ、日本[にほん]もその波[なみ]に乗[の]って文化[ぶんか]国家[こっか]としての自己[じこ]定義[ていぎ]を強[つよ]めてきたのである。",
      "日本[にほん]の文化[ぶんか]外交[がいこう]の歴史[れきし]的[てき]起点[きてん]は、敗戦[はいせん]後[ご]の占領[せんりょう]期[き]に求[もと]められる。戦前[せんぜん]の帝国[ていこく]日本[にほん]が武力[ぶりょく]による地域[ちいき]支配[しはい]を図[はか]ったのに対[たい]し、戦後[せんご]の日本[にほん]は文化[ぶんか]と経済[けいざい]による国際[こくさい]貢献[こうけん]を新[あたら]しい国家[こっか]の正統[せいとう]性[せい]の根拠[こんきょ]に据[す]えた。この転換[てんかん]は単[たん]なる戦略[せんりゃく]の変更[へんこう]にとどまらず、日本[にほん]の自己[じこ]理解[りかい]そのものの深[ふか]い変容[へんよう]を意味[いみ]していた。武力[ぶりょく]によらない国家[こっか]という理念[りねん]は、憲法[けんぽう]九条[きゅうじょう]と表裏[ひょうり]をなす文化[ぶんか]外交[がいこう]の根底[こんてい]に横[よこた]わる哲学[てつがく]であった。",
      "二十[にじゅう]一世紀[いっせいき]に入[はい]り、日本[にほん]のポップ[ぽっぷ]文化[ぶんか]が世界[せかい]的[てき]な広[ひろ]がりを見[み]せるると、文化[ぶんか]外交[がいこう]は新[あたら]しい段階[だんかい]に入[はい]った。アニメ[あにめ]、マンガ[まんが]、ゲーム[げーむ]、そして料理[りょうり]やファッション[ふぁっしょん]は、国[くに]を冠[かん]したブランド[ぶらんど]戦略[せんりゃく]の対象[たいしょう]として再[さい]発見[はっけん]された。「クール[くーる]ジャパン[じゃぱん]」という標語[ひょうご]はその象徴[しょうちょう]である。しかし、国家[こっか]が意図[いと]的[てき]に推進[すいしん]しようとする文化[ぶんか]と、草[くさ]の根[ね]で広[ひろ]まった文化[ぶんか]の間[あいだ]には、質[しつ]的[てき]な落差[らくさ]があることを看過[かんか]してはならない。",
      "実[じつ]のところ、日本[にほん]のポップ[ぽっぷ]文化[ぶんか]の海外[かいがい]浸透[しんとう]は、政府[せいふ]の戦略[せんりゃく]的[てき]意図[いと]の成果[せいか]というよりも、無数[むすう]の消費者[しょうひしゃ]と創作者[そうさくしゃ]の偶然[ぐうぜん]の交錯[こうさく]が生[しょう]み出[だ]した有機[ゆうき]的[てき]現象[げんしょう]であった。政府[せいふ]が後追[あとお]いでこの現象[げんしょう]をブランド[ぶらんど]化[か]し、予算[よさん]を付[つ]け、組織[そしき]を立[た]てたとしても、文化[ぶんか]そのものの魅力[みりょく]は国家[こっか]の枠組[わくぐ]みの外部[がいぶ]で生成[せいせい]されたものである。この非対称[ひたいしょう]性[せい]を直視[ちょくし]せず、あたかも政府[せいふ]が文化[ぶんか]を生[しょう]み出[だ]したかのような言説[げんせつ]を繰[く]り返[かえ]すことは、文化[ぶんか]外交[がいこう]の信頼[しんらい]性[せい]を逆[ぎゃく]に損[そこ]なうおそれがある。",
      "もっとも、文化[ぶんか]外交[がいこう]の効果[こうか]を完全[かんぜん]に否定的[ひていてき]に評価[ひょうか]するのも公正[こうせい]を欠[か]く。日本[にほん]のポップ[ぽっぷ]文化[ぶんか]を通[つう]じて日本[にほん]への関心[かんしん]を抱[いだ]いた海外[かいがい]の若者[わかもの]が、日本[にほん]語[ご]を学[まな]び、日本[にほん]に留学[りゅうがく]し、結果[けっか]として日本[にほん]と自[みずか]らの国[くに]の架[か]橋[きょう]的人物[じんぶつ]となるケースは数[かず]少[すく]なくない。長期[ちょうき]的[てき]視野[しや]に立[た]てば、この人的[じんてき]ネットワーク[ねっとわーく]の形成[けいせい]こそが文化[ぶんか]外交[がいこう]の最大[さいだい]の資産[しさん]であると言[い]える。文化[ぶんか]は即効[そっこう]性[せい]のない、しかし確実[かくじつ]に実[み]を結[むす]ぶ戦略[せんりゃく]資産[しさん]なのである。",
      "しかしこの資産[しさん]の運用[うんよう]には、微妙[びみょう]な注意[ちゅうい]が求[もと]められる。文化[ぶんか]を戦略[せんりゃく]道具[どうぐ]としてのみ扱[あつか]うならば、受容[じゅよう]側[がわ]はその意図[いと]を感[かん]づき、文化[ぶんか]の純粋[じゅんすい]性[せい]を疑[うたが]って距離[きょり]を置[お]くであろう。文化[ぶんか]の力[ちから]は、それが純粋[じゅんすい]な文化[ぶんか]として受[う]け入れられるときに最[もっと]も大[おお]きくなる。これを利用[りよう]しようとするあまりにその力[ちから]を殺[ころ]してしまうという逆説[ぎゃくせつ]に、文化[ぶんか]外交[がいこう]の実践者[じっせんしゃ]は絶えず直面[ちょくめん]している。これは一[ひと]種[しゅ]の操作[そうさ]のパラドックス[ぱらどっくす]と言[い]える。",
      "歴史[れきし]認識[にんしき]の問題[もんだい]も、文化[ぶんか]外交[がいこう]をめぐる深刻[しんこく]な障壁[しょうへき]である。文化[ぶんか]の魅力[みりょく]を前面[ぜんめん]に出[だ]すことで過去[かこ]の軍事[ぐんじ]侵略[しんりゃく]の記憶[きおく]を薄[うす]めようとする戦略[せんりゃく]は、近隣[きんりん]諸国[しょこく]の警戒[けいかい]を呼[よ]び起[お]こす。文化[ぶんか]は過去[かこ]を償[つぐな]うものではなく、過去[かこ]から逃[に]げるための隠[かく]れ蓑[みの]でもない。真[まこと]の文化[ぶんか]外交[がいこう]は、歴史[れきし]と向[む]き合[あ]う誠実[せいじつ]さと文化[ぶんか]の魅力[みりょく]を同時[どうじ]に示[しめ]すことによってのみ成立[せいりつ]する。この二[ふた]つの要素[ようそ]の片方[かたほう]を欠[か]いた文化[ぶんか]外交[がいこう]は、長[なが]期的[てき]にはかえって反発[はんぱつ]を生[しょう]むだろう。",
      "数[すう]字的[てき]な指標[しひょう]に依存[いぞん]する文化[ぶんか]外交[がいこう]の評価[ひょうか]にも問題[もんだい]がある。視聴[しちょう]者[しゃ]数[すう]、輸出[ゆしゅつ]額[がく]、イベント[いべんと]参加[さんか]者[しゃ]数[すう]といった量的[りょうてき]指標[しひょう]は把握[はあく]しやすいが、文化[ぶんか]が他者[たしゃ]の心[こころ]に与[あた]えた質的[しつてき]な影響[えいきょう]を測[はか]ることはほぼ不可能[ふかのう]である。参議院[さんぎいん]的な評価[ひょうか]の圧力[あつりょく]の下[もと]で、見[み]えにくい成果[せいか]が軽視[けいし]され、見[み]えやすい成果[せいか]だけが追及[ついきゅう]されるという制度的[せいじてき]偏向[へんこう]が生[しょう]じてきた。文化[ぶんか]外交[がいこう]の本質[ほんしつ]は数字[すうじ]で測[はか]れるものではないという認識[にんしき]を、政策[せいさく]当局[とうきょく]は改[あらた]めて持[も]つべきであろう。",
      "結論[けつろん]として、日本[にほん]の文化[ぶんか]外交[がいこう]はソフト[そふと]パワー[ぱわー]という魅力的[みりょくてき]な標語[ひょうご]の裏側[うらがわ]に、構造[こうぞう]的[てき]な困難[こんなん]を抱[いだ]えている。文化[ぶんか]は国家[こっか]の道具[どうぐ]であり得[え]るか、歴史[れきし]の記憶[きおく]と文化[ぶんか]の魅力[みりょく]をいかに両立[りょうりつ]させるか、量的[りょうてき]指標[しひょう]の支配[しはい]からいかに脱[だっ]却[きゃく]するか。これらの問[とい]いに真[まこと]摯[し]に向[む]き合[あ]うことなしに、文化[ぶんか]外交[がいこう]は単[たん]なる自己[じこ]満足[まんぞく]の儀礼[ぎれい]に終[お]わるであろう。文化[ぶんか]を文化[ぶんか]として、過度[かど]な戦略[せんりゃく]化[か]から解放[かいほう]する勇気[ゆうき]こそが、次[つぎ]の段階[だんかい]の文化[ぶんか]外交[がいこう]に必要[ひつよう]なものである。"
    ],
    translation: [
      "It has been a long time since the phrase cultural diplomacy began to appear frequently in Japanese policy discourse. Yet although the reality denoted by this concept appears at first glance to be a mere export of attractive culture, its inner substance harbors a far more complex strategic intent. Since Joseph Nye proposed the concept of soft power, culture has been positioned as a source of influence replacing military and economic power, and Japan, riding that wave, has strengthened its self-definition as a cultural nation.",
      "The historical starting point of Japan's cultural diplomacy can be sought in the post-defeat occupation period. Whereas prewar imperial Japan attempted regional domination through military force, postwar Japan positioned cultural and economic international contribution as the basis of the new state's legitimacy. This transformation was not merely a change of strategy but meant a deep transformation of Japan's self-understanding itself. The ideal of a state without military force was the philosophy underlying cultural diplomacy, in tandem with Article 9 of the Constitution.",
      "Entering the twenty-first century, as Japanese pop culture spread worldwide, cultural diplomacy entered a new stage. Anime, manga, games, and cuisine and fashion were rediscovered as objects of brand strategy crowned with the country's name. The slogan 'Cool Japan' symbolizes this. However, it must not be overlooked that there is a qualitative gap between the culture the state intends to promote and the culture that has spread at the grassroots.",
      "In fact, the overseas penetration of Japanese pop culture was an organic phenomenon produced by the accidental interplay of countless consumers and creators, rather than the fruit of the government's strategic intent. Even if the government belatedly brands this phenomenon, allocates a budget, and establishes organizations, the charm of the culture itself was generated outside the framework of the state. To fail to face this asymmetry and to repeat discourse as if the government had produced the culture may conversely undermine the credibility of cultural diplomacy.",
      "Needless to say, evaluating the effects of cultural diplomacy entirely negatively also lacks fairness. There are no few cases in which young people abroad who developed an interest in Japan through its pop culture studied Japanese, studied abroad in Japan, and as a result became bridge figures between Japan and their own countries. From a long-term perspective, the formation of this human network can be said to be the greatest asset of cultural diplomacy. Culture is a strategic asset without immediate effect but that bears fruit reliably.",
      "However, the use of this asset requires delicate attention. If culture is treated solely as a strategic tool, the receiving side will perceive that intent, doubt the purity of the culture, and distance themselves. The power of culture becomes greatest when it is accepted as pure culture. Practitioners of cultural diplomacy constantly confront the paradox that, in trying to utilize culture, they may kill its power. This can be called a kind of paradox of manipulation.",
      "The problem of historical memory is also a serious barrier surrounding cultural diplomacy. A strategy that puts cultural charm to the fore to dilute the memory of past military aggression provokes vigilance in neighboring countries. Culture neither compensates for the past nor is a cover for fleeing from it. True cultural diplomacy is established only by simultaneously demonstrating the sincerity that faces history and the charm of culture. Cultural diplomacy lacking either of these two elements will, in the long term, generate backlash.",
      "The evaluation of cultural diplomacy that relies on numerical indicators is also problematic. Quantitative indicators such as viewer counts, export values, and event participant counts are easy to grasp, but measuring the qualitative impact that culture has had on the hearts of others is nearly impossible. Under the pressure of parliament-style evaluation, an institutional bias has emerged whereby invisible outcomes are neglected and only visible outcomes are pursued. Policy authorities should freshly recognize that the essence of cultural diplomacy is not something measurable in numbers.",
      "In conclusion, behind the attractive slogan of soft power, Japan's cultural diplomacy harbors structural difficulties. Can culture be a tool of the state? How to reconcile historical memory and cultural charm? How to escape the dominance of quantitative indicators? Without sincerely confronting these questions, cultural diplomacy will end as mere ritual of self-satisfaction. The courage to free culture as culture from excessive strategization is what the next stage of cultural diplomacy requires."
    ],
    questions: [
      {
        q: "What historical shift does the passage identify as the starting point of Japan's cultural diplomacy?",
        choices: ["The Meiji Restoration", "The post-defeat occupation period, when Japan shifted from military domination to cultural and economic contribution as the basis of state legitimacy", "The Edo period isolation policy", "The 1964 Tokyo Olympics alone"],
        answerIndex: 1,
        explanation: "The text identifies 敗戦後の占領期 as the starting point, where Japan replaced military regional domination with cultural and economic international contribution as its new legitimacy basis."
      },
      {
        q: "What asymmetry does the author emphasize regarding government-led vs organic pop culture?",
        choices: ["Government culture is always superior", "Pop culture's overseas penetration was an organic phenomenon generated outside the state framework, and treating it as government-produced undermines credibility", "Government and grassroots culture are identical", "Organic culture is irrelevant"],
        answerIndex: 1,
        explanation: "The passage states the charm of pop culture was generated outside the state framework, and that あたかも政府が文化を生み出したかのような言説 undermines the credibility of cultural diplomacy."
      },
      {
        q: "What paradox does the author identify in the use of culture as a strategic tool?",
        choices: ["That using culture strategically always increases its power", "That trying to utilize culture can kill its power, since culture is most powerful when accepted as pure culture", "That culture has no power at all", "That strategy and culture are unrelated"],
        answerIndex: 1,
        explanation: "The passage states 文化の力は、それが純粋な文化として受け入れられるときに最も大きくなる, and that 利用しようとするあまりにその力を殺してしまうという逆説 — a paradox of manipulation."
      },
      {
        q: "How does the passage characterize the relationship between cultural charm and historical memory in cultural diplomacy?",
        choices: ["Cultural charm can fully compensate for past aggression", "True cultural diplomacy must simultaneously demonstrate sincerity toward history and cultural charm — neither alone suffices", "Historical memory is irrelevant to cultural diplomacy", "Culture should be used to hide past aggression"],
        answerIndex: 1,
        explanation: "The text states 真の文化外交は、歴史と向き合う誠実さと文化の魅力を同時に示すことによってのみ成立する — both sincerity toward history and cultural charm must be shown together."
      },
      {
        q: "Which N1 grammar point appears in 'あたかも政府が文化を生み出したかのような言説を繰り返すことは'?",
        choices: ["〜かのような (as if)", "〜にたえない", "〜までもない", "〜ずにはすまない"],
        answerIndex: 0,
        explanation: "〜かのような means 'as if' — here criticizing the discourse that repeats as if the government had produced the culture."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-46 — A philosophical analysis of beauty and truth
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-46",
    title: "美[び]と真理[しんり]の哲学[てつがく]的[てき]交差[こうさ]：美[び]は真[しん]なるものか",
    titleReading: "びとしんりのてつがくてきこうさ：びはしんなるものか",
    level: "N1",
    summary: "A philosophical analysis of the relationship between beauty and truth, examining Platonic aesthetics, Kantian disinterestedness, the Romantic identification of beauty and truth, modernist rupture, and contemporary debates on whether aesthetic value tracks epistemic or moral value.",
    estMinutes: 13,
    tags: ["aesthetics", "philosophy", "beauty", "truth", "Plato", "Kant"],
    body: [
      "美[び]と真理[しんり]の関係[かんけい]は、哲学[てつがく]がその誕生[たんじょう]の瞬間[しゅんかん]から問[と]い続[つづ]けてきた主題[しゅだい]である。プラトン[ぷらとん]は「美[び]なるものは真理[しんり]の輝[かがや]きである」と述[の]べたと伝[つた]えられるが、その同時代[どうじだい]の対話[たいわ]篇[へん]においては、美[び]は感覚[かんかく]世界[せかい]の迷[まよ]いとして真実[しんじつ]のイデア[いであ]から遠[とお]ざかるものとして批判[ひはん]される面[めん]と、他方[たほう]で美[び]はイデア[いであ]へ向[む]かう魂[たましい]の梯子[はしご]として肯定[こうてい]される面[めん]とが、緊張[きんちょう]関係[かんけい]を保[たも]ち続[つづ]けている。この両義[りょうぎ]性[せい]は西洋[せいよう]美学[びがく]の宿命[しゅくめい]とも言[い]える。",
      "カント[かんと]の美学[びがく]は、美[び]を真理[しんり]から断[た]ち切[き]ることでその独自性[どくじせい]を確立[かくりつ]した。彼[かれ]によれば、美[び]の判断[はんだん]は認識[にんしき]的[てき]判断[はんだん]でも道徳[どうとく]的[てき]判断[はんだん]でもなく、利害[りがい]に無関心[むかんしん]な主観[しゅかん]的[てき]合意[がごう]性[せい]を求[もと]める第三[だいさん]の判断[はんだん]である。この定義[ていぎ]は美[び]を真理[しんり]の領域[りょういき]から解放[かいほう]する一方[いっぽう]で、美[び]の経験[けいけん]が人間[にんげん]の他[た]の営[つとめ]みとどのように関[かか]わるかという問[とい]いを新[あたら]たに生[しょう]じさせた。道徳[どうとく]から独立[どくりつ]した美[び]は、その独立[どくりつ]性[せい]ゆえに逆[ぎゃく]に道徳[どうとく]との関係[かんけい]を問[と]われずにはいられないのである。",
      "これに対[たい]し、ロマン[ろまん]主義[しゅぎ]は美[び]と真理[しんり]の再[さい]統合[とうごう]を試[こころ]みた。キーツ[きーつ]が「美[び]は真理[しんり]なり、真理[しんり]は美[び]なり」と謳[うた]ったように、この伝統[でんとう]は美[び]の直観[ちょっかん]に真理[しんり]への最短[さいたん]の道[みち]を見[み]出[だ]そうとした。理性[りせい]の分析[ぶんせき]が到達[とうたつ]できなかった真理[しんり]を、芸術[げいじゅつ]の直観[ちょっかん]が捉[とら]え得[え]るという信念[しんねん]は、ヘーゲル[へーげる]の精神[せいしん]哲学[てつがく]にも影響[えいきょう]を与[あた]えた。しかしこの統合[とうごう]の試[こころ]みは、美[び]の主観[しゅかん]性[せい]を過小[かしょう]評価[ひょうか]するという代償[だいしょう]を支払[しはら]わざるを得[え]なかったきらいがある。",
      "近代[きんだい]の科学[かがく]的世界観[せかい]が確立[かくりつ]するに及[およ]び、美[び]と真理[しんり]の結合[けつごう]は再[ふたた]び緊張[きんちょう]を深[ふか]めた。科学[かがく]が真理[しんり]の専有的[せんゆうてき]領域[りょういき]として立[た]ち上[あ]がる一方[いっぽう]で、芸術[げいじゅつ]は真理[しんり]から離[はな]れ、自律[じりつ]的[てき]な価値[かち]領域[りょういき]として再[さい]定義[ていぎ]された。しかしまさにこの自律[じりつ]性[せい]の極[きわみ]において、芸術[げいじゅつ]は真理[しんり]を提示[ていじ]する独自[どくじ]の様式[ようしき]を持[も]ち得[え]るのではないかという逆説[ぎゃくせつ]的[てき]な洞察[どうさつ]が生[しょう]じてくる。ハイデガー[はいでがー]が「芸術[げいじゅつ]作品[さくひん]は真理[しんり]を開[ひら]く」と論[ろん]じたのは、この逆説[ぎゃくせつ]の哲学[てつがく]的[てき]継承[けいしょう]であった。",
      "ここで注意[ちゅうい]すべきは、美[び]が真理[しんり]と同[おな]じであると主張[しゅちょう]することの危険[きけん]性[せい]である。ファシズム[ふぁしずむ]の美学[びがく]が示[しめ]したように、美[び]を真理[しんり]の代理[だいり]と見[み]なす体制[たいせい]は、美[び]の強[つよ]い力[ちから]を政治[せいじ]的[てき]服従[ふくじゅう]の道具[どうぐ]に転化[てんか]しがちである。美[び]の誠実[せいじつ]さを真[まこと]の真理[しんり]の誠実[せいじつ]さと区別[くべつ]する哲学[てつがく]的[てき]慎重[しんちょう]さを欠[か]いたとき、美[び]は真理[しんり]を装[よそお]う嘘[うそ]の最強[さいきょう]の形態[けいたい]と化す。この危惧[きぐ]を念頭[ねんとう]に置[お]かない美学[びがく]は、倫理[りんり]的[てき]に無邪気[むじゃき]であるがゆえに危[あやう]いと言[い]わざるを得[え]ない。",
      "他方[たほう]、美[び]を単[たん]なる主観[しゅかん]的[てき]趣味[しゅみ]に還元[かんげん]するのも、真理[しんり]との関係[かんけい]を過剰[かじょう]に断[た]ち切[き]るという逆[ぎゃく]の危険[きけん]を孛[ほ]む。美[び]の経験[けいけん]が持[も]つ認識[にんしき]的[てき]深度[しんど]を軽視[けいし]するならば、なぜ特定[とくてい]の作品[さくひん]が時代[じだい]を超[こ]えて人[ひと]を動[うご]かし続[つづ]けるのかを説明[せつめい]できなくなる。偉大[いだい]な芸術[げいじゅつ]が持[も]つ普遍[ふへん]性[せい]は、単[たん]なる好悪[こうお]の集約[しゅうやく]ではなく、人間[にんげん]の条件[じょうけん]に関する真理[しんり]を敏感[びんかん]に触[ふ]れる能力[のうりょく]の証拠[しょうこ]であるかもしれない。",
      "現代[げんだい]美学[びがく]における論争[ろんそう]は、この二[ふた]つの極端[きょくたん]の間[あいだ]で揺[ゆ]れ動[うご]いている。一方[いっぽう]で認知[にんち]科学[かがく]の美学[びがく]は、美[び]の経験[けいけん]を進化[しんか]的[てき]適応[てきおう]や神経[しんけい]メカニズムに還元[かんげん]しようとする。この還元[かんげん]的[てき]アプローチ[あぷろーち]は美[び]の客観[きゃっかん]的[てき]基盤[きばん]を明[あき]らかにするものの、その主観[しゅかん]的[てき]・文化的[ぶんかてき]次元[じげん]を貧困化[ひんこんか]させるおそれがある。他方[たほう]で現象[げんしょう]学[がく]的[てき]美学[びがく]は、美[び]の経験[けいけん]の質的[しつてき]特徴[とくちょう]を精緻[せいち]に記述[きじゅつ]するものの、客観[きゃっかん]的[てき]検証[けんしょう]の枠組[わくぐ]みと緊張[きんちょう]関係[かんけい]に立[た]たざるを得[え]ない。",
      "もっとも、美[び]と真理[しんり]の関係[かんけい]を一[ひと]つのパターン[ぱたーん]に固定[こてい]化[か]しようとする試[こころ]み自体[じたい]が、哲学[てつがく]の限界[げんかい]を示[しめ]しているのかもしれない。美[び]の経験[けいけん]が歴史[れきし]と文化[ぶんか]によって多様[たよう]に変容[へんよう]する以上[いじょう]、真理[しんり]との関係[かんけい]もまた複数[ふくすう]の様式[ようしき]を取り得[え]る。ギリシャ[ぎりしゃ]の彫刻[ちょうこく]と能[のう]の演劇[えんげき]と現代[げんだい]の抽象[ちゅうしょう]画[が]がそれぞれ提示[ていじ]する真理[しんり]は、同一[どういつ]の論理[ろんり]では把捉[はそく]し得[え]ない。美[び]の多様性[たようせい]は、真理[しんり]そのものの多様性[たようせい]を示[しめ]唆[さ]しているのではないか。",
      "結論[けつろん]として、美[び]と真理[しんり]の交差[こうさ]は解決[かいけつ]されるべき問題[もんだい]というよりも、深[ふか]められるべき問[とい]いである。プラトン[ぷらとん]から現代[げんだい]に至[いた]る哲学[てつがく]の歴史[れきし]は、この問[とい]いに決定的[けっていてき]な回答[かいとう]を与[あた]えられなかったが、それゆえにこそ美[び]と真理[しんり]の張力[ちょうりょく]は思想[しそう]を触発[しょくはつ]し続[つづ]けてきた。美[び]が真理[しんり]であると断言[だんげん]する独断[どくだん]と、美[び]は趣味[しゅみ]に過[す]ぎないとする還元[かんげん]、双方[そうほう]の浅薄[せんぱく]さを避[さ]けつつ、この二[ふた]つの概念[がいねん]の緊張[きんちょう]関係[かんけい]を生[い]きる思考[しこう]こそが、美学[びがく]の成熟[せいじゅく]した姿と言[い]えるであろう。"
    ],
    translation: [
      "The relation between beauty and truth is a subject that philosophy has continued to question from the very moment of its birth. Plato is reported to have said that 'the beautiful is the radiance of truth,' but in his contemporary dialogues beauty is at once criticized, as a wandering of the sensory world that distances one from the true Ideas, and affirmed, as a ladder of the soul toward the Ideas — preserving a tense relationship. This ambiguity can be called the destiny of Western aesthetics.",
      "Kant's aesthetics established the distinctiveness of beauty by severing it from truth. According to him, the judgment of beauty is neither a cognitive nor a moral judgment, but a third judgment that seeks subjective agreement devoid of interestedness. This definition liberated beauty from the realm of truth while on the other hand newly generating the question of how the experience of beauty relates to other human endeavors. Beauty, independent of morality, is precisely because of its independence inevitably forced to be questioned about its relation to morality.",
      "In contrast, Romanticism attempted to re-integrate beauty and truth. As Keats sang, 'Beauty is truth, truth beauty,' this tradition sought in the intuition of beauty the shortest path to truth. The belief that the intuition of art could grasp truths that rational analysis could not reach also influenced Hegel's philosophy of spirit. However, this attempt at integration could not avoid paying the price of underestimating the subjectivity of beauty.",
      "As the modern scientific worldview established itself, the union of beauty and truth deepened in tension again. While science rose as the proprietary domain of truth, art departed from truth and was redefined as an autonomous domain of value. Yet precisely at the extreme of this autonomy, the paradoxical insight emerged that art might possess a unique mode of presenting truth. Heidegger's claim that 'the artwork opens truth' was a philosophical inheritance of this paradox.",
      "What must be noted here is the danger of claiming that beauty is identical to truth. As fascist aesthetics demonstrated, regimes that take beauty as a proxy for truth tend to transform the powerful force of beauty into an instrument of political subjugation. When philosophical caution that distinguishes the sincerity of beauty from the sincerity of true truth is lacking, beauty becomes the strongest form of lie masquerading as truth. Aesthetics without this concern in mind must be said to be ethically dangerous precisely because of its innocence.",
      "On the other hand, reducing beauty to mere subjective taste harbors the reverse danger of excessively severing its relation to truth. If the cognitive depth of the experience of beauty is neglected, one becomes unable to explain why certain works continue to move people across ages. The universality that great art possesses may be evidence not of a mere aggregation of likes and dislikes but of a capacity to sensitively touch truths about the human condition.",
      "The controversy in contemporary aesthetics oscillates between these two extremes. On one hand, the aesthetics of cognitive science seeks to reduce the experience of beauty to evolutionary adaptation and neural mechanisms. This reductive approach illuminates the objective basis of beauty but risks impoverishing its subjective and cultural dimension. On the other hand, phenomenological aesthetics finely describes the qualitative features of the experience of beauty but inevitably stands in a tense relation with the framework of objective verification.",
      "Needless to say, the very attempt to fix the relation between beauty and truth into a single pattern may itself indicate the limits of philosophy. To the extent that the experience of beauty transforms diversely through history and culture, its relation to truth can also take multiple forms. The truths presented by Greek sculpture, Noh theater, and modern abstract painting cannot be grasped by a single logic. The diversity of beauty suggests the very diversity of truth.",
      "In conclusion, the intersection of beauty and truth is less a problem to be solved than a question to be deepened. The history of philosophy from Plato to the modern era has not been able to give a decisive answer to this question, but precisely for that reason the tension between beauty and truth has continued to inspire thought. Avoiding both the dogmatism of declaring beauty to be truth and the reductionism of treating beauty as mere taste, a thinking that lives the tense relation between these two concepts can be called the mature form of aesthetics."
    ],
    questions: [
      {
        q: "How does the passage characterize the ambiguity in Plato's treatment of beauty?",
        choices: ["Plato consistently celebrated beauty as identical to truth", "Plato at once criticized beauty as a wandering of the sensory world away from true Ideas, and affirmed it as a ladder of the soul toward the Ideas", "Plato never discussed beauty at all", "Plato rejected both beauty and truth"],
        answerIndex: 1,
        explanation: "The text describes 感覚世界の迷いとして批判される面と、他方でイデアへ向かう魂の梯子として肯定される面と — both criticism and affirmation preserved in tension."
      },
      {
        q: "What does the passage say about Kant's contribution to the beauty-truth relationship?",
        choices: ["Kant unified beauty with truth completely", "Kant severed beauty from truth to establish its distinctiveness, defining it as a third judgment seeking disinterested subjective agreement", "Kant reduced beauty to morality", "Kant reduced beauty to cognitive judgment"],
        answerIndex: 1,
        explanation: "The text states カントの美学は、美を真理から断ち切ることでその独自性を確立した — Kant severed beauty from truth, defining it as disinterested subjective agreement distinct from cognitive and moral judgment."
      },
      {
        q: "What danger does the author warn against in treating beauty as truth?",
        choices: ["That beauty loses its aesthetic value", "That fascist aesthetics shows beauty taken as truth's proxy becomes a tool of political subjugation, and beauty can become the strongest form of lie masquerading as truth", "That truth becomes subjective", "That beauty becomes irrelevant"],
        answerIndex: 1,
        explanation: "The passage warns that ファシズムの美学 shows beauty as truth's proxy becomes political subjugation, and that without philosophical caution 美は真理を装う嘘の最強の形態と化す."
      },
      {
        q: "What paradox about autonomous art does the passage identify?",
        choices: ["That autonomous art loses all relation to truth", "That precisely at the extreme of art's autonomy, art may possess a unique mode of presenting truth — Heidegger's insight", "That autonomous art is identical to science", "That autonomy has no relation to modernity"],
        answerIndex: 1,
        explanation: "The text states まさにこの自律性の極みにおいて、芸術は真理を提示する独自の様式を持ち得るのではないかという逆説的な洞察, citing Heidegger's 芸術作品は真理を開く."
      },
      {
        q: "Which N1 grammar point appears in '道徳から独立した美は、その独立性ゆえに逆に道徳との関係を問われずにはいられないのである'?",
        choices: ["〜ずにはいられない (cannot help but)", "〜にたえない", "〜までもない", "〜と思いきや"],
        answerIndex: 0,
        explanation: "〜ずにはいられない expresses inability to refrain from — here, beauty independent of morality cannot help being questioned about its relation to morality precisely because of that independence."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-47 — The economics of Japan's healthcare reform
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-47",
    title: "日本[にほん]の医療[いりょう]制度[せいど]改革[かいかく]の経済[けいざい]学[がく]：持続[じぞく]可能性[かのうせい]と連帯[れんたい]の境界[きょうかい]",
    titleReading: "にほんのいりょうせいどかいかくのけいざいがく：じぞくかのうせいとれんたいのきょうかい",
    level: "N1",
    summary: "An economic analysis of Japan's healthcare reform, examining universal coverage, fiscal sustainability under aging demographics, generational equity, the structural flaws of fee-for-service, and the policy trade-offs between cost containment and innovation.",
    estMinutes: 14,
    tags: ["healthcare", "economics", "policy", "reform", "Japan", "fiscal"],
    body: [
      "日本[にほん]の医療[いりょう]制度[せいど]は、国民[こくみん]皆保険[かいけん]という理念[りねん]を中核[ちゅうかく]に据[す]え、世界[せかい]に類[るい]を見[み]ない寿命[じゅみょう]の延伸[えんしん]を実現[じつげん]してきた。しかし、この制度[せいど]の持続[じぞく]可能[かのう]性[せい]は、高齢[こうれい]化[か]という人口[じんこう]統計[とうけい]的[てき]圧力[あつりょく]の下[もと]で深刻[しんこく]な挑戦[ちょうせん]を受[う]けている。医療[いりょう]費[ひ]の対[たい]GDP比[ひ]は国際[こくさい]的[てき]には低[ひく]い水準[すいじゅん]にとどまっているものの、その内訳[うちわけ]における公費[こうひ]負担[ふたん]の増大[ぞうだい]は財政[ざいせい]を圧迫[あっぱく]し続[つづ]けており、制度改革[せいどかいかく]の先送[さきおく]りはもはや許[ゆる]されない段階[だんかい]に達[たっ]している。",
      "医療[いりょう]経済[けいざい]学[がく]の基本[きほん]的[てき]な課題[かだい]は、資源[しげん]の稀少[きしょう]性[せい]と需要[じゅよう]の無限[むげん]性[せい]の調和[ちょうわ]にある。医療[いりょう]需要[じゅよう]は技術[ぎじゅつ]進歩[しんぽ]と共[とも]に拡大[かくだい]し、人口[じんこう]の高齢[こうれい]化[か]はその傾向[けいこう]を加速[かそく]する。この需要[じゅよう]拡大[かくだい]に有限[ゆうげん]な資源[しげん]で対応[たいおう]するためには、優先[ゆうせん]順位[じゅんい]の設定[せってい]と効率[こうりつ]的[てき]な資源[しげん]配分[はいぶん]が不可欠[ふかけつ]である。しかし、優先[ゆうせい]順位[じゅんい]の設定[せってい]は単[たん]なる技術[ぎじゅつ]的[てき]判断[はんだん]ではなく、政治[せいじ]的[てき]・倫理[りんり]的[てき]判断[はんだん]を含[ふく]む複雑[ふくざつ]な過程[かてい]である。",
      "現行[げんこう]の診療[しんりょう]報酬[ほうしゅう]制度[せいど]は、出来高[できだか]払[ばら]いを基調[きちょう]としている。この方式[ほうしき]は医療[いりょう]サービス[さーびす]の量[りょう]に比例[ひれい]して報酬[ほうしゅう]を支払[しはら]うもので、一[ひと]見[けん]公正[こうせい]に見[み]えるが、過剰[かじょう]診療[しんりょう]を誘発[ゆうはつ]する構造[こうぞう]的[てき]欠陥[けっかん]を孛[ほ]んでいる。医師[いし]が提供[ていきょう]するサービス[さーびす]の量[りょう]と収入[しゅうにゅう]が直結[ちょっけつ]するため、必要[ひつよう]のない検査[けんさ]や処置[しょち]が行[おこな]われるインセンティブ[いんせんてぃぶ]が内蔵[ないぞう]されているのである。この制度[せいど]の下[もと]では、医療[いりょう]費[ひ]の自然[しぜん]増加[ぞうか]を止[と]めることは構造[こうぞう]的[てき]に困難[こんなん]である。",
      "これに対[たい]する改革[かいかく]案[あん]として、包括[ほうかつ]払[ばら]いや出来高[できだか]払[ばら]いの混合[こんごう]方式[ほうしき]が議論[ぎろん]されてきた。包括[ほうかつ]払[ばら]いは疾患[しっかん]群[ぐん]別[べつ]に一律[いちりつ]の報酬[ほうしゅう]を設定[せってい]するもので、医療[いりょう]機関[きかん]側[がわ]に効率[こうりつ]化[か]のインセンティブ[いんせんてぃぶ]を働[はたら]かせる反面[はんめん]、重症[じゅうしょう]患者[かんじゃ]の受[う]け入[い]れ拒否[きょひ]や不適切[ふてきせつ]な早[はや]すぎる退院[たいいん]を誘発[ゆうはつ]するリスク[りすく]を伴[ともな]う。この両者[りょうしゃ]のトレード[とれーど]オフ[おふ]を最適[さいてき]化[か]する混合[こんごう]方式[ほうしき]の設計[せっけい]は、単[たん]なる経済[けいざい]学[がく]的[てき]計算[けいさん]を超[こ]えて、医療[いりょう]の質[しつ]をどう測[はか]るかという根本[こんぽん]的[てき]問[とい]いに依存[いぞん]する。",
      "世代[せだい]間[かん]の公平[こうへい]性[せい]も看過[かんか]できない。現役[げんえき]世代[せだい]が負担[ふたん]する社会[しゃかい]保険[ほけん]料[りょう]は、高齢[こうれい]者[しゃ]の医療[いりょう]費[ひ]を支[ささ]える主要[しゅよう]な財源[ざいげん]であるが、人口[じんこう]構造[こうぞう]の逆[ぎゃく]ピラミッド[ぴらみっど]化[か]の進行[しんこう]はこの負担[ふたん]を限界[げんかい]にまで押[お]し上[あ]げている。若[わか]い世代[せだい]が将来[しょうらい]の自分[じぶん]の受[う]け取[と]る医療[いりょう]サービス[さーびす]に対[たい]する期待[きたい]を持[も]てない状況[じょうきょう]は、制度[せいど]に対[たい]する信頼[しんらい]の根幹[こんかん]を揺[ゆ]るがす。後期[こうき]高齢[こうれい]者[しゃ]医療[いりょう]制度[せいど]の導入[どうにゅう]はこの問題[もんだい]への対応[たいおう]であったが、年齢[ねんれい]による区分[くぶん]自体[じたい]が新[あたら]たな不公平[ふこうへい]感[かん]を生[しょう]じさせたという指摘[してき]を免[まぬが]れない。",
      "予防[よぼう]医学[いがく]への投資[とうし]もまた、医療[いりょう]経済[けいざい]学[がく]の重要[じゅうよう]な論点[ろんてん]である。疾病[しっぺい]の発生[はっせい]を未然[みぜん]に防[ふせ]ぐことは、個[こ]の健康[けんこう]を守[まも]るのみならず、社会[しゃかい]全体[ぜんたい]の医療[いりょう]費[ひ]を抑制[よくせい]する有効[ゆうこう]な手段[しゅだん]である。しかし予防[よぼう]への投資[とうし]は短[たん]期的[てき]には費用[ひよう]を要し、効果[こうか]が現[あらわ]れるまでに長期[ちょうき]を要するという時間[じかん]的[てき]ズレ[ずれ]がある。政治[せいじ]の時間[じかん]枠[わく]が短[みじか]い選挙[せんきょ]周期[しゅうき]に縛[しば]られる中[なか]では、予防[よぼう]投資[とうし]が過小[かしょう]評価[ひょうか]される制度[せいど]的[てき]偏向[へんこう]を免[まぬが]れ得[え]ない。",
      "医療[いりょう]技術[ぎじゅつ]の革新[かくしん]と費用[ひよう]の関係[かんけい]も、複雑[ふくざつ]な問題[もんだい]を孛[ほ]む。新[あたら]しい薬[くすり]や機器[きき]は寿命[じゅみょう]を延伸[えんしん]し生活[せいかつ]の質[しつ]を向上[こうじょう]させるが、その開発[かいはつ]コスト[こすと]は巨額[きょがく]であり、特許[とっきょ]制度[せいど]を通[つう]じて価格[かかく]に転嫁[てんか]される。革新[かくしん]のインセンティブ[いんせんてぃぶ]を維持[いじ]しつつ、価格[かかく]の壁[かべ]によるアクセス[あくせす]不平等[ふびょうどう]を防ぐという両立[りょうりつ]は、医薬[いやく]品[ひん]政策[せいさく]の難問[なんもん]である。後発[こうはつ]医薬品[いやくひん]の普及[ふきゅう]は一部[いちぶ]を解決[かいけつ]するが、最先端[さいせんたん]治療[ちりょう]へのアクセス[あくせす]格差[かくさ]は構造[こうぞう]的[てき]に残[のこ]り続[つづ]ける。",
      "医療[いりょう]提供[ていきょう]体制[たいせい]の地域[ちいき]格差[かくさ]も、経済[けいざい]学[がく]的[てき]分析[ぶんせき]を欠[か]かせない主題[しゅだい]である。都市[とし]部[ぶ]に病院[びょういん]と専門[せんもん]医[い]が集中[しゅうちゅう]する一方[いっぽう]で、地方[ちほう]では医師[いし]不足[ぶそく]が深刻[しんこく]化[か]している。この地域[ちいき]間[かん]不均衡[ふきんこう]は、単[たん]なる資源[しげん]配分[はいぶん]の失敗[しっぱい]というよりも、医療[いりょう]従事者[じゅうじしゃ]の職業[しょくぎょう]生活[せいかつ]と地方[ちほう]の生活[せいかつ]条件[じょうけん]の全体[ぜんたい]的[てき]設計[せっけい]の問題[もんだい]である。経済[けいざい]的[てき]な誘因[ゆういん]だけでは解決[かいけつ]せず、教育[きょういく]・住宅[じゅうたく]・家族[かぞく]支援[しえん]を含[ふく]む総合[そうごう]的[てき]な地域[ちいき]医療[いりょう]政策[せいさく]が必要[ひつよう]である。",
      "結論[けつろん]として、日本[にほん]の医療[いりょう]制度[せいど]改革[かいかく]は、持続[じぞく]可能[かのう]性[せい]と連帯[れんたい]の二[ふた]つの理念[りねん]を両立[りょうりつ]させる必要[ひつよう]がある。持続[じぞく]可能[かのう]性[せい]の名目[めいもく]の下[もと]で連帯[れんたい]を削[けず]り、連帯[れんたい]の名目[めいもく]の下[もと]で持続[じぞく]可能性[かのうせい]を損[そこ]なう改革[かいかく]は、いずれも短[たん]絡的[らくてき]である。診療[しんりょう]報酬[ほうしゅう]制度[せいど]の根本[こんぽん]的[てき]見直[みなお]し、世代[せだい]間[かん]公平[こうへい]性[せい]の制度的[せいじてき]保障[ほしょう]、予防[よぼう]投資[とうし]の長期[ちょうき]的[てき]優先[ゆうせん]、地域[ちいき]格差[かくさ]の総合[そうごう]的[てき]解消[かいしょう]。これらが相互[そうご]に連関[れんかん]しつつ進行[しんこう]するとき、医療[いりょう]制度[せいど]は単[たん]なる費用[ひよう]負担[ふたん]の仕組[しく]みではなく、社会[しゃかい]の連帯[れんたい]を体現[たいげん]する制度[せいど]として再[さい]定義[ていぎ]されるであろう。"
    ],
    translation: [
      "Japan's healthcare system, with the principle of universal health insurance at its core, has achieved an extension of life expectancy that is unparalleled in the world. However, the sustainability of this system is receiving serious challenge under the demographic pressure of aging. Although the ratio of medical expenditure to GDP remains at a low level internationally, the increase in public-fund burden within its breakdown continues to press on finances, and postponement of systemic reform has reached a stage that can no longer be tolerated.",
      "The fundamental task of healthcare economics lies in reconciling the scarcity of resources with the infinity of demand. Medical demand expands with technological progress, and the aging of the population accelerates that tendency. To meet this expanding demand with finite resources, setting priorities and efficient resource allocation are indispensable. However, the setting of priorities is not a mere technical judgment but a complex process that involves political and ethical judgments.",
      "The current fee-schedule system is based on fee-for-service. This method pays remuneration in proportion to the volume of medical services provided, and appears fair at first glance, but it harbors a structural defect that induces excessive treatment. Because the volume of services a physician provides is directly tied to income, there is an inherent incentive for unnecessary examinations and procedures to be performed. Under this system, it is structurally difficult to halt the natural increase in medical expenditure.",
      "As a reform plan against this, bundled payment and a hybrid method of fee-for-service have been debated. Bundled payment sets a uniform remuneration by disease group, working an efficiency incentive on the medical institution side, but on the other hand it carries the risk of inducing refusal of severe patients and inappropriate premature discharge. The design of a hybrid method that optimizes the trade-off between the two depends not on mere economic calculation but on the fundamental question of how to measure the quality of care.",
      "Intergenerational equity also cannot be overlooked. The social insurance premiums borne by the working generation are the major source of funding for the medical expenses of the elderly, but the progress of the inverse-pyramid-ization of population structure has pushed this burden to the limit. The situation in which younger generations cannot hold expectations for the medical services they themselves will receive in the future shakes the very foundation of trust in the system. The introduction of the late-stage elderly healthcare system was a response to this problem, but the criticism cannot be escaped that division by age itself generated a new sense of unfairness.",
      "Investment in preventive medicine is also an important point of contention in healthcare economics. Preventing the onset of disease in advance not only protects individual health but also is an effective means of suppressing medical expenditure for society as a whole. However, investment in prevention requires costs in the short term and takes a long time to show effects, a temporal lag. In a context in which the time frame of politics is bound to short electoral cycles, it cannot escape the institutional bias in which preventive investment is undervalued.",
      "The relation between innovation in medical technology and cost also harbors a complex problem. New drugs and devices extend life expectancy and improve quality of life, but their development costs are enormous and are transferred to prices through the patent system. Maintaining innovation incentives while preventing access inequality due to price barriers is a difficult problem of pharmaceutical policy. The spread of generic drugs solves part of it, but the disparity in access to the most cutting-edge treatment continues structurally.",
      "Regional disparities in the healthcare provision system are also a subject that cannot lack economic analysis. While hospitals and specialists are concentrated in urban areas, the shortage of physicians is becoming serious in rural areas. This interregional imbalance is not so much a failure of resource allocation as a problem of the overall design of the professional lives of healthcare workers and the living conditions of rural areas. It cannot be solved by economic incentives alone and requires a comprehensive regional medical policy that includes education, housing, and family support.",
      "In conclusion, Japan's healthcare system reform needs to reconcile the two principles of sustainability and solidarity. Reforms that cut solidarity under the name of sustainability and undermine sustainability under the name of solidarity are both short-sighted. Fundamental review of the fee-schedule system, institutional guarantee of intergenerational equity, long-term prioritization of preventive investment, and comprehensive resolution of regional disparities. When these proceed in mutual connection, the healthcare system will be redefined not as a mere cost-sharing mechanism but as a system that embodies social solidarity."
    ],
    questions: [
      {
        q: "What structural defect does the passage identify in the fee-for-service system?",
        choices: ["It pays too little to physicians", "Because service volume is directly tied to income, it induces unnecessary examinations and procedures — making natural cost growth structurally hard to halt", "It lacks any incentive mechanism", "It only works in rural areas"],
        answerIndex: 1,
        explanation: "The text states 医師が提供するサービスの量と収入が直結するため、必要のない検査や処置が行われるインセンティブが内蔵 — fee-for-service inherently incentivizes excessive treatment."
      },
      {
        q: "What trade-off does the bundled payment approach present?",
        choices: ["It eliminates all costs but reduces quality", "It creates efficiency incentives on the provider side but risks refusal of severe patients and premature discharge", "It has no trade-offs", "It only works for wealthy patients"],
        answerIndex: 1,
        explanation: "The passage states 包括払いは効率化のインセンティブを働かせる反面、重症患者の受け入れ拒否や不適切な早すぎる退院を誘発するリスクを伴う."
      },
      {
        q: "What does the passage say about preventive medicine investment?",
        choices: ["It produces immediate visible results", "Although effective for long-term cost suppression, the temporal lag before effects show means it is undervalued under short electoral cycles", "It is irrelevant to healthcare economics", "It only benefits the elderly"],
        answerIndex: 1,
        explanation: "The text notes that prevention requires short-term costs and takes long to show effects, and that 政治の時間枠が短い選挙周期に縛られる中では、予防投資が過小評価される制度的偏向を免れ得ない."
      },
      {
        q: "How does the passage characterize the regional disparity in healthcare provision?",
        choices: ["A pure market outcome that needs no intervention", "Not just a resource allocation failure but a problem of overall design of healthcare workers' professional lives and rural living conditions, requiring comprehensive policy", "A temporary issue that resolves itself", "A problem only of physician salaries"],
        answerIndex: 1,
        explanation: "The passage states this is 単なる資源配分の失敗というよりも、医療従事者の職業生活と地方の生活条件の全体設計の問題, requiring comprehensive regional medical policy including education, housing, and family support."
      },
      {
        q: "Which N1 grammar point appears in '後期高齢者医療制度の導入はこの問題への対応であったが、年齢による区分自体が新たな不公平感を生じさせたという指摘を免れない'?",
        choices: ["〜を免れない (cannot escape / is inevitably subject to)", "〜にたえない", "〜までもない", "〜ずくめ"],
        answerIndex: 0,
        explanation: "〜を免れない expresses inevitability — here, the introduction of age-based distinction itself inevitably attracted the criticism that it generated a new sense of unfairness."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-48 — A sociological study of Japan's overtime culture
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-48",
    title: "日本[にほん]の長時間[ちょうじかん]労働[ろうどう]文化[ぶんか]の社会学[しゃかいがく]：過労死[かろうし]とプレゼンティズム[ぷれんてぃずむ]",
    titleReading: "にほんのちょうじかんろうどうぶんかのしゃかいがく：かろうしとぷれんてぃずむ",
    level: "N1",
    summary: "A sociological study of Japan's overtime work culture, examining the structural roots of long hours in postwar corporate organization, the cultural meanings of presenteeism, the karoshi phenomenon, gendered dimensions, and the limits of recent work-style reform legislation.",
    estMinutes: 12,
    tags: ["sociology", "labor", "overtime", "karoshi", "Japan", "work reform"],
    body: [
      "日本[にほん]の労働[ろうどう]文化[ぶんか]を特徴[とくちょう]づける長時間[ちょうじかん]労働[ろうどう]の慣行[かんこう]は、単[たん]なる経済[けいざい]的[てき]合理性[ごうりせい]の産物[さんぶつ]としては理解[りかい]し難[がた]い。その根[ね]には、戦後[せんご]の高度[こうど]成長[せいちょう]期[き]に形成[けいせい]された企業[きぎょう]中心[ちゅうしん]の社会[しゃかい]構造[こうぞう]と、そこに胚胎[はいたい]する独特[どくとく]の帰属[きぞく]意識[いしき]が横[よこた]わっている。サラリーマン[さらりーまん]という存在[そんざい]が家族[かぞく]よりも会社[かいしゃ]に忠誠[ちゅうせい]を誓[ちか]うことを当然[とうぜん]とする文化[ぶんか]は、他[ほか]の先進[せんしん]国[こく]には類[るい]を見[み]ない特異[とくい]性[せい]を呈[てい]してきた。この特異[とくい]性[せい]を社会学[しゃかいがく]の対象[たいしょう]として捉[とら]え直[なお]すことなしに、労働[ろうどう]改革[かいかく]の有効[ゆうこう]性[せい]は論[ろん]じ得[え]ない。",
      "長時間[ちょうじかん]労働[ろうどう]を支[ささ]える第一[だいいち]の支柱[しちゅう]は、年功[ねんこう]序列[じょれつ]と終身[しゅうしん]雇用[こよう]という制度[せいど]的[てき]枠組[わくぐ]みである。この枠組[わくぐ]みの下[もと]では、社員[しゃいん]は企業[きぎょう]に長期[ちょうき]にわたって忠誠[ちゅうせい]を示[しめす]すことで昇進[しょうしん]と賃金[ちんぎん]上昇[じょうしょう]を報[むく]いられる。その忠誠[ちゅうせい]を可視化[かしか]する手段[しゅだん]が、他[ほか]でもなく長時間[ちょうじかん]の職場[しょくば]滞在[たいざい]であった。定時[ていじ]に退社[たいしゃ]する社員[しゃいん]は企業[きぎょう]への帰属[きぞく]意識[いしき]が薄[うす]いと見[み]なされ、評価[ひょうか]の面[めん]で不利[ふり]な取[と]り扱[あつか]いを受[う]ける構造[こうぞう]が、暗黙[あんもく]のうちに定着[ていちゃく]してきたのである。",
      "プレゼンティズムという概念[がいねん]は、この文化[ぶんか]を分析[ぶんせき]する上[うえ]で有効[ゆうこう]である。プレゼンティズムとは、業務[ぎょうむ]の成果[せいか]よりも職場[しょくば]にいること自体[じたい]を価値[かち]とする考[かんが]え方[かた]であり、日本[にほん]の職場[しょくば]においては極[きわめ]て強[つよ]い規範[きはん]力[りょく]を持[も]つ。この規範[きはん]の下[もと]では、風邪[かぜ]を引[ひ]いても出社[しゅっしゃ]し、残業[ざんぎょう]がなくても定時[ていじ]後[ご]に席[せき]に残[のこ]ることが美徳[びとく]とされる。成果[せいか]主義[しゅぎ]への移行[いこう]が喧[けん]伝[でん]されて久[ひさ]しいにもかかわらず、この規範[きはん]は根強[ねづよ]く残[のこ]り続[つづ]けている。",
      "過労死[かろうし]という概念[がいねん]は、まさにこの文化[ぶんか]の極限[きょくげん]的[てき]帰結[きけつ]として日本[にほん]社会[しゃかい]が生[しょう]み出[だ]した言葉[ことば]である。長時間[ちょうじかん]労働[ろうどう]が心[しん]血管[けっかん]系[けい]疾患[しっかん]や精神[せいしん]障害[しょうがい]を誘発[ゆうはつ]し、死[し]に至[いた]らしめるという事態[じたい]は、他[ほか]の社会[しゃかい]においては制度[せいど]的[てき]にほぼ知[し]られていない。この言葉[ことば]の存在[そんざい]自体[じたい]が、日本[にほん]の労働[ろうどう]文化[ぶんか]が到達[とうたつ]した異常[いじょう]性[せい]を国際[こくさい]的[てき]に証明[しょうめい]していると言[い]っても過言[かげん]ではない。過労死[かろうし]を個[こ]の健康[けんこう]管理[かんり]の失敗[しっぱい]ではなく、組織[そしき]的[てき]な労働[ろうどう]環境[かんきょう]の帰結[きけつ]と見[み]なす視点[してん]の転換[てんかん]が、社会学[しゃかいがく]の貢献[こうけん]である。",
      "もっとも、長時間[ちょうじかん]労働[ろうどう]を支[ささ]えるのは企業[きぎょう]文化[ぶんか]だけではない。日本[にほん]の社会[しゃかい]構造[こうぞう]における家族[かぞく]の性別[せいべつ]分業[ぶんぎょう]も、男性[だんせい]が長時間[ちょうじかん]労働[ろうどう]に没入[ぼつにゅう]することを可能[かのう]にしてきた背景[はいけい]である。妻[つま]が家庭[かてい]を担[にな]うことで夫[おっと]は労働[ろうどう]に集中[しゅうちゅう]でき、その結果[けっか]として長時間[ちょうじかん]労働[ろうどう]が可能[かのう]になるという循環[じゅんかん]構造[こうぞう]が、戦後[せんご]日本[にほん]の標準[ひょうじゅん]的[てき]ライフ[らいふ]コース[こーす]を形成[けいせい]してきた。女性[じょせい]の社会[しゃかい]進出[しんしゅつ]が進行[しんこう]する現代[げんだい]において、この構造[こうぞう]の変容[へんよう]なしに長時間[ちょうじかん]労働[ろうどう]の根絶[こんぜつ]は不可能[ふかのう]である。",
      "近年[きんねん]の働[はたら]き方[かた]改革[かいかく]は、この問題[もんだい]への政治[せいじ]的[てき]対応[たいおう]として位置[いち]づけられる。時間外[じかんがい]労働[ろうどう]の上限[じょうげん]規制[きせい]など一定[いってい]の成果[せいか]を上[あ]げたものの、その実効[じっこう]性[せい]には疑問[ぎもん]が残[のこ]る。とりわけ、裁量[さいりょう]労働[ろうどう]制[せい]や高度[こうど]プロフェッショナル[ぷろふぇっしょなる]制度[せいど]という例外[れいがい]措置[そち]は、長時間[ちょうじかん]労働[ろうどう]を合法的[ごうほうてき]に温存[おんぞん]する抜[ぬ]け穴[あな]として機能[きのう]しかねない。制度[せいど]設計[せっけい]の表面[ひょうめん]的[てき]な厳格[げんかく]化[か]が、実質[じっしつ]的[てき]な労働[ろうどう]時間[じかん]の削減[さくげん]に直結[ちょっけつ]しないという逆説[ぎゃくせつ]に注意[ちゅうい]が必要[ひつよう]である。",
      "さらに、テレワーク[てれわーく]の普及[ふきゅう]が長時間[ちょうじかん]労働[ろうどう]を解消[かいしょう]するかという問[とい]いも複雑[ふくざつ]である。一[ひと]見[けん]すると職場[しょくば]を離[はな]れることで労働[ろうどう]時間[じかん]が減[へ]ると思[おも]われるが、実際[じっさい]には仕事[しごと]と私[わたくし]生活[せいかつ]の境界[きょうかい]が曖昧[あいまい]化[か]し、結果[けっか]として労働[ろうどう]時間[じかん]が増[ふ]えるケースも報告[ほうこく]されている。物理[ぶつり]的[てき]に職場[しょくば]から離[はな]れても、心理[しんり]的[てき]に仕事[しごと]から離[はな]れられない状態[じょうたい]は、新型[しんがた]の過労[かろう]を生[しょう]み出[だ]す危惧[きぐ]がある。技術[ぎじゅつ]の変化[へんか]が必[かなら]ずしも文化[ぶんか]の変容[へんよう]を伴[ともな]わないことを、テレワーク[てれわーく]の経験[けいけん]は浮[う]き彫[ぼ]りにした。",
      "心理[しんり]的[てき]要因[よういん]にも触[ふ]れねばならない。日本[にほん]の労働[ろうどう]者[しゃ]は、しばしば仕事[しごと]を通[つう]じて自[みずか]らのアイデンティティ[あいでんてぃてぃ]を確立[かくりつ]する傾向[けいこう]が強[つよ]い。会社[かいしゃ]での役割[やくわり]を失[うしな]うことは自己[じこ]の存在[そんざい]意義[いぎ]を失[うしな]うことを意味[いみ]し、定年[ていねん]後の喪失[そうしつ]感[かん]が深刻[しんこく]になるのもこのためである。仕事[しごと]を生[い]きがいとする文化[ぶんか]は労働[ろうどう]への没入[ぼつにゅう]を促[うなが]す一方[いっぽう]で、労働[ろうどう]以外[いがい]の自己[じこ]実現[じつげん]の可能性[かのうせい]を狭[せば]める副作用[ふくさよう]を持[も]つ。長時間[ちょうじかん]労働[ろうどう]の根絶[こんぜつ]は、単[たん]なる時間[じかん]管理[かんり]の問題[もんだい]ではなく、自己[じこ]理解[りかい]の多様化[たようか]という文化的[ぶんかてき]課題[かだい]と結[むす]びついている。",
      "結論[けつろん]として、日本[にほん]の長時間[ちょうじかん]労働[ろうどう]文化[ぶんか]の根絶[こんぜつ]には、制度[せいど]改革[かいかく]と文化[ぶんか]変容[へんよう]の双方[そうほう]が必要[ひつよう]である。制度[せいど]的[てき]規制[きせい]だけでは抜[ぬ]け穴[あな]を生[しょう]じ、文化[ぶんか]的[てき]変容[へんよう]だけでは構造[こうぞう]的[てき]圧力[あつりょく]に抗[こう]し得[え]ない。企業[きぎょう]の評価[ひょうか]制度[せいど]の再設計[さいせっけい]、性別[せいべつ]役割[やくわり]分担[ぶんたん]の解体[かいたい]、労働[ろうどう]と私[わたくし]生活[せいかつ]の境界[きょうかい]の再定義[さいていぎ]、そして何[なに]より労働[ろうどう]以外[いがい]の自己[じこ]実現[じつげん]を可能[かのう]にする社会[しゃかい]空間[くうかん]の拡大[かくだい]。これらが統合[とうごう]的[てき]に進行[しんこう]するとき、日本[にほん]社会[しゃかい]は過労死[かろうし]という言葉[ことば]を歴史[れきし]の彼方[かなた]に葬[ほうむ]ることができるであろう。"
    ],
    translation: [
      "The practice of long working hours that characterizes Japan's work culture is difficult to understand as a product of mere economic rationality. At its roots lie the corporate-centered social structure formed during the postwar high-growth period and the distinctive sense of belonging embedded within it. The culture in which a salaryman pledges loyalty to his company rather than to his family as a matter of course has presented a distinctiveness unparalleled in other advanced nations. Without reframing this distinctiveness as a subject of sociology, the effectiveness of labor reform cannot be argued.",
      "The first pillar supporting long working hours is the institutional framework of seniority-based wages and lifetime employment. Under this framework, employees are rewarded with promotion and wage increases by demonstrating long-term loyalty to the company. The means of visualizing that loyalty is none other than prolonged presence at the workplace. The structure in which employees who leave at the regular time are deemed to have weak belonging to the company and are treated disadvantageously in evaluations has taken root tacitly.",
      "The concept of presenteeism is effective in analyzing this culture. Presenteeism is the mindset that values being at the workplace itself more than the outcomes of work, and in Japanese workplaces it holds extremely strong normative force. Under this norm, coming to work even with a cold and remaining at one's desk after regular hours even without overtime are considered virtues. Although the shift to performance-based systems has been proclaimed for a long time, this norm continues to persist tenaciously.",
      "The concept of karoshi (death from overwork) is a word that Japanese society produced precisely as the extreme consequence of this culture. The situation in which long working hours induce cardiovascular disease and mental disorders, leading to death, is institutionally almost unknown in other societies. It is no exaggeration to say that the very existence of this word internationally proves the abnormality that Japan's work culture has reached. The shift of perspective that treats karoshi not as a failure of individual health management but as the consequence of an organizational work environment is the contribution of sociology.",
      "Needless to say, it is not only corporate culture that supports long working hours. The gendered division of labor in Japan's family structure is also the background that has enabled men to immerse themselves in long working hours. The cyclic structure in which the wife takes on the household, allowing the husband to concentrate on labor, which in turn makes long working hours possible, has formed the standard life course of postwar Japan. In the modern era where women's social advancement is progressing, without transformation of this structure the eradication of long working hours is impossible.",
      "The recent work-style reform is positioned as a political response to this problem. Although it has produced certain results such as the upper-limit regulation on overtime work, doubts remain about its effectiveness. In particular, exceptional measures such as the discretionary labor system and the high-level professional system may function as loopholes that legally preserve long working hours. Attention is needed to the paradox that superficial tightening of system design does not directly link to substantive reduction of working hours.",
      "Furthermore, the question of whether the spread of telework dissolves long working hours is also complex. At first glance it would seem that leaving the workplace reduces working hours, but in fact cases are reported in which the boundary between work and private life becomes blurred and as a result working hours increase. The state of being physically away from the workplace but psychologically unable to detach from work harbors the fear of generating a new type of overwork. The experience of telework has brought into relief that technological change does not necessarily accompany cultural transformation.",
      "Psychological factors must also be touched on. Japanese workers tend strongly to establish their own identity through work. Losing one's role at the company means losing the meaning of one's existence, which is why the sense of loss after retirement becomes severe. The culture that finds life's purpose in work promotes immersion in labor, while on the other hand it has the side effect of narrowing the possibilities of self-realization outside labor. The eradication of long working hours is not a mere problem of time management but is tied to the cultural task of diversifying self-understanding.",
      "In conclusion, the eradication of Japan's long working-hour culture requires both institutional reform and cultural transformation. Institutional regulation alone produces loopholes, and cultural transformation alone cannot resist structural pressure. Redesign of corporate evaluation systems, dismantling of gendered role division, redefinition of the boundary between work and private life, and above all the expansion of social spaces that enable self-realization outside labor. When these proceed integratively, Japanese society will be able to consign the word karoshi to the far side of history."
    ],
    questions: [
      {
        q: "What does the passage identify as the first institutional pillar supporting long working hours?",
        choices: ["Performance-based pay alone", "The framework of seniority-based wages and lifetime employment, where prolonged workplace presence visualizes loyalty", "Foreign investment pressure", "Government overtime mandates"],
        answerIndex: 1,
        explanation: "The text identifies 年功序列と終身雇用という制度的枠組み as the first pillar, where loyalty is visualized through prolonged workplace presence."
      },
      {
        q: "How does the passage define presenteeism in Japanese workplaces?",
        choices: ["A focus on measurable output over hours", "A mindset that values being at the workplace itself more than work outcomes, with strong normative force", "A type of remote work", "A foreign import never adopted in Japan"],
        answerIndex: 1,
        explanation: "The passage defines プレゼンティズム as 業務の成果よりも職場にいること自体を価値とする考え方 — valuing presence over outcomes, with strong normative force in Japanese workplaces."
      },
      {
        q: "What is the sociological contribution regarding karoshi that the passage highlights?",
        choices: ["Treating karoshi as a failure of individual health management", "Reframing karoshi not as individual health-management failure but as the consequence of an organizational work environment", "Denying that karoshi exists", "Attributing karoshi to foreign work cultures"],
        answerIndex: 1,
        explanation: "The passage states that sociology's contribution is the shift of perspective: 過労死を個の健康管理の失敗ではなく、組織的な労働環境の帰結と見なす視点の転換."
      },
      {
        q: "What paradox about work-style reform does the author identify?",
        choices: ["Tighter regulations always reduce working hours", "Superficial tightening of system design does not directly link to substantive reduction of working hours — discretionary and high-pro systems may preserve long hours as loopholes", "Regulation has no effect whatsoever", "Work-style reform only affects women"],
        answerIndex: 1,
        explanation: "The text warns that 制度設計の表面的な厳格化が、実質的な労働時間の削減に直結しないという逆説 — and that exception measures like the discretionary and high-pro systems may function as loopholes."
      },
      {
        q: "Which N1 grammar point appears in 'テレワークの普及が長時間労働を解消するかという問いいも複雑である' contextually, given the author's framing around expected outcomes?",
        choices: ["〜と思いきや (contrary to expectation)", "〜にたえない", "〜までもない", "〜ずくめ"],
        answerIndex: 0,
        explanation: "The passage's framing of telework — that it would seem to reduce hours 一見すると but in fact may increase them — embodies 〜と思いきや (contrary to what one might expect)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-49 — An essay on the future of human identity
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-49",
    title: "人間[にんげん]のアイデンティティ[あいでんてぃてぃ]の未来[みらい]形[けい]：技術[ぎじゅつ]・身体[しんたい]・自己[じこ]",
    titleReading: "にんげんのあいでんてぃてぃのみらいけい：ぎじゅつ・しんたい・じこ",
    level: "N1",
    summary: "An essay on the future of human identity in the era of AI, biotechnology, and digital extension, examining posthumanist philosophy, the destabilization of body-based selfhood, the question of narrative identity, and the ethical stakes of becoming more-than-human.",
    estMinutes: 13,
    tags: ["philosophy", "identity", "posthumanism", "AI", "biotechnology", "future"],
    body: [
      "人間[にんげん]という存在[そんざい]が自[みずか]らを定義[ていぎ]してきた方法[ほうほう]は、歴史[れきし]の節目[ふしめ]ごとに大[おお]きく揺[ゆ]らいできた。神[かみ]の似姿[ににすぎ]としての人間[にんげん]、理性[りせい]的[てき]動物[どうぶつ]としての人間[にんげん]、労働[ろうどう]する主体[しゅたい]としての人間[にんげん]。これらの定義[ていぎ]はいずれも、その時代[じだい]の支配[しはい]的[てき]な世界観[せかいかん]に照応[しょうおう]して形成[けいせい]された。しかしいま、人工[じんこう]知能[ちのう]とバイオ[ばいお]技術[ぎじゅつ]とデジタル[でじたる]拡張[かくちょう]が同時[どうじ]に進行[しんこう]する時代[じだい]において、人間[にんげん]のアイデンティティ[あいでんてぃてぃ]はかつてない規模[きぼ]の再定義[さいていぎ]を迫[せま]られている。この問[とい]いに応[こた]えることなくして、未来[みらい]社会[しゃかい]の倫理[りんり]的[てき]基盤[きばん]は築[きず]けない。",
      "自己[じこ]という概念[がいねん]の安定[あんてい]性[せい]は、長[なが]く身体[しんたい]の統一性[とういつせい]に依拠[いきょ]してきた。私[わたし]はこの身体[しんたい]を持[も]つ者[もの]であり、この身体[しんたい]が経験[けいけん]する事象[じしょう]が私[わたし]の記憶[きおく]を形成[けいせい]し、その記憶[きおく]の連続性[れんぞくせい]が私[わたし]という存在[そんざい]を支[ささ]える。この素朴[そぼく]な自己[じこ]理解[りかい]は、デカルトの「我[われ]思[おも]う、故[ゆえ]に我[われ]在[あ]り」に哲学[てつがく]的[てき]表現[ひょうげん]を見[み]出[だ]して以来[いらい]、西洋[せいよう]近代[きんだい]の根幹[こんかん]を成[な]してきた。しかしまさにこの身体[しんたい]中心[ちゅうしん]の自己[じこ]理解[りかい]が、いま技術[ぎじゅつ]的[てき]圧力[あつりょく]の下[もと]で根本[こんぽん]的[てき]に問[と]い直[なお]されている。",
      "バイオ[ばいお]技術[ぎじゅつ]の発達[はったつ]は、身体[しんたい]を与件[よけん]から選択[せんたく]へと転[てん]化[か]させた。遺伝子[いでんし]操作[そうさ]、臓器[ぞうき]置換[ちかん]、ホルモン[ほるもん]調整[ちょうせい]、そして将来的[しょうらいてき]な寿命[じゅみょう]の大幅[おおはば]な延伸[えんしん]。これらは身体[しんたい]を運命[うんめい]として受[う]け入[い]れる従来[じゅうらい]の態度[たいど]を解体[かいたい]し、身体[しんたい]を設計[せっけい]可能[かのう]な対象[たいしょう]として取[と]り扱[あつか]う新[あたら]しい人間[にんげん]観[かん]を生[しょう]み出[だ]した。もっとも、この選択[せんたく]の自由[じゆう]は同時[どうじ]に、何[なに]が自然[しぜん]かという問[とい]いを不可能[ふかのう]にし、人間[にんげん]の本質[ほんしつ]を再[ふたた]び流動[りゅうどう]化[か]させるという深刻[しんこく]な哲学[てつがく]的[てき]帰結[きけつ]を孛[ほ]む。",
      "人工[じんこう]知能[ちのう]の台頭[たいとう]は、別[べつ]の次元[じげん]から人間[にんげん]のアイデンティティ[あいでんてぃてぃ]を問[と]い直[なお]す。かつては人間[にんげん]に固有[こゆう]と見[み]なされていた創造[そうぞう]的[てき]活動[かつどう]、言語[げんご]使用[しよう]、そして倫理[りんり]的[てき]判断[はんだん]が、次々[つぎつぎ]と機械[きかい]によって模倣[もほう]され、一部[いちぶ]の領域[りょういき]では超越[ちょうえつ]されつつある。これにより、人間[にんげん]を人間[にんげん]たらしめていた特質[とくしつ]の輪郭[りんかく]が曖昧[あいまい]化[か]し、人間[にんげん]は再[ふたた]び自[みずか]らを定義[ていぎ]し直[なお]すことを余儀[よぎ]なくされている。理性[りせい]的[てき]動物[どうぶつ]という古[ふる]い定義[ていぎ]が機械[きかい]に overtaken されるなら、人間[にんげん]は何[なに]によって自[みずか]らを人間[にんげん]と呼[よ]び得[え]るのか。",
      "デジタル[でじたる]拡張[かくちょう]による自己[じこ]の多面化[ためんか]も見逃[みのが]せない。一[ひと]人[にん]の人間[にんげん]が複数[ふくすう]のオンライン[おんらいん]・ペルソナ[ぺるそな]を持ち、それぞれ異[こと]なる文脈[ぶんみゃく]で異[こと]なる自己[じこ]を提示[ていじ]する現状[げんじょう]は、単一[たんいつ]の自己[じこ]という観念[かんねん]を構造[こうぞう]的[てき]に解体[かいたい]している。ソーシャル[そーしゃる]メディア[めでぃあ]上[じょう]の自己[じこ]、職場[しょくば]の自己[じこ]、家族[かぞく]内[ない]の自己[じこ]。これらが同一[どういつ]の統合[とうごう]的[てき]人格[じんかく]に統[す]べられるという前提[ぜんてい]自体[じたい]が、もはや自明[じめい]ではない。アイデンティティ[あいでんてぃてぃ]の分裂[ぶんれつ]を病理[びょうり]とする従来[じゅうらい]の精神[せいしん]医学[いがく]的[てき]枠組[わくぐ]みも、この現状[げんじょう]の前[まえ]には再検討[さいけんとう]を迫[せま]られずにはいられない。",
      "ポストヒューマン主義[しゅぎ]という哲学[てつがく]的[てき]立場[たちば]は、これらの変容[へんよう]を积極[せっきょく]的[てき]に受[う]け入[い]れ、人間[にんげん]という範疇[はんちゅう]自体[じたい]の解体[かいたい]を主張[しゅちょう]する。人間[にんげん]を特権[とっけん]化する人間中心[にんげんちゅうしん]主義[しゅぎ]を批判[ひはん]し、人間[にんげん]と機械[きかい]、有機[ゆうき]と無機[むき]、主体[しゅたい]と客体[きゃくたい]の境界[きょうかい]を流動化[りゅうどうか]するこの立場[たちば]は、新[あたら]しい自由[じゆう]の可能性[かのうせい]を提示[ていじ]する。しかし他方[たほう]で、人間[にんげん]の特権[とっけん]性[せい]を完全[かんぜん]に放棄[ほうき]することが、人間[にんげん]の尊厳[そんげん]という概念[がいねん]の保[たも]ち得[え]る基盤[きばん]を喪失[そうしつ]することにならないかという危惧[きぐ]も根強[ねづよ]い。人間[にんげん]の尊厳[そんげん]は、他[ほか]の存在[そんざい]と区別[くべつ]される特質[とくしつ]に立脚[りっきゃく]するものではないとすれば、何[なに]に立脚[りっきゃく]し得[え]るのか。",
      "物語[ものがたり]的[てき]アイデンティティ[あいでんてぃてぃ]という概念[がいねん]も、この議論[ぎろん]に重要[じゅうよう]な視座[しざ]を提供[ていきょう]する。ポール・リクール[りくーる]が提唱[ていしょう]したこの考[かんが]えは、自己[じこ]を静的[せいてき]な実体[じったい]ではなく、自[みずか]らの生[せい]を物語[ものがたり]ることで構築[こうちく]される動的[どうてき]な過程[かてい]として捉[とら]える。この視点[してん]を採[さい]用[よう]するならば、技術[ぎじゅつ]的[てき]変容[へんよう]は自己[じこ]の物語[ものがたり]の再構築[さいこうちく]を要請[ようせい]するものとして理解[りかい]できる。新[あたら]しい技術[ぎじゅつ]的[てき]環境[かんきょう]の中[なか]で自[みずか]らの物語[ものがたり]を語[かた]り直[なお]す能力[のうりょく]こそが、未来[みらい]の人間[にんげん]が維持[いじ]すべき核心[かくしん]的[てき]能力[のうりょく]であろう。",
      "もっとも、自己[じこ]の物語[ものがたり]を語[かた]る能力[のうりょく]自体[じたい]が、技術[ぎじゅつ]によって脅[おびや]かされている側面[そくめん]もある。アルゴリズム[あるごりずむ]が推薦[すいせん]する情報[じょうほう]環境[かんきょう]、AI[えーあい]によって生成[せいせい]されるテキスト[てきすと]、仮想[かそう]現実[げんじつ]の没入[ぼつにゅう]的[てき]経験[けいけん]。これらは自己[じこ]が自[みずか]らの物語[ものがたり]の主体[しゅたい]であり続[つづ]けることを困難[こんなん]にし、物語[ものがたり]の外部[がいぶ]の力[ちから]に自己[じこ]を委[ゆだ]ねる誘惑[ゆうわく]を強[つよ]める。自[みずか]らの物語[ものがたり]を他者[たしゃ]に書[か]かせることは、自己[じこ]決定[けってい]の放棄[ほうき]に他[ほか]ならず、その意味[いみ]で技術[ぎじゅつ]への没入[ぼつにゅう]は自己[じこ]の喪失[そうしつ]への道[みち]ともなり得[え]る。",
      "倫理[りんり]的[てき]に最[もっと]も重要[じゅうよう]なのは、変容[へんよう]の中[なか]で何[なに]を人間[にんげん]の尊厳[そんげん]の核心[かくしん]として護[まも]るべきかという問[とい]いであろう。それは特定[とくてい]の能力[のうりょく]ではなく、苦痛[くつう]を感[かん]じる能力[のうりょく]、他者[たしゃ]に配慮[はいりょ]する能力[のうりょく]、自[みずか]らの限界[げんかい]を受[う]け入[い]れる能力[のうりょく]かもしれない。完全[かんぜん]な自己[じこ]設計[せっけい]、完全[かんぜん]な効率[こうりつ]、完全[かんぜん]な拡張[かくちょう]。これらを追[お]い求[もと]めるあまり、不完全[ふかんぜん]さに根[ね]ざす人間[にんげん]の固有[こゆう]性[せい]を見失[みうしな]うことが、真[しん]の危機[きき]である。結論[けつろん]として、未来[みらい]のアイデンティティ[あいでんてぃてぃ]は、完全[かんぜん]化される自己[じこ]ではなく、自[みずか]らの不完全[ふかんぜん]さを誠実[せいじつ]に引[ひ]き受[う]け続[つづ]ける自己[じこ]として再定義[さいていぎ]されねばならないのではないか。"
    ],
    translation: [
      "The ways in which the human being has defined itself have greatly shaken at each turning point of history. The human as the image of God, the human as a rational animal, the human as a laboring subject. Each of these definitions was formed in correspondence with the dominant worldview of its time. But now, in an era when artificial intelligence, biotechnology, and digital extension are progressing simultaneously, human identity is being forced to redefine itself on an unprecedented scale. Without answering this question, the ethical foundation of future society cannot be built.",
      "The stability of the concept of self has long relied on the unity of the body. I am the one who possesses this body, the events this body experiences form my memories, and the continuity of those memories supports my existence. This naive self-understanding has formed the foundation of Western modernity since it found philosophical expression in Descartes' 'I think, therefore I am.' But it is precisely this body-centered self-understanding that is now being fundamentally re-questioned under technological pressure.",
      "The development of biotechnology has transformed the body from a given to a choice. Gene editing, organ replacement, hormone adjustment, and the prospective large-scale extension of lifespan. These have dismantled the traditional attitude of accepting the body as fate, producing a new view of humanity that treats the body as a designable object. However, this freedom of choice simultaneously renders the question of what is natural impossible, harboring the serious philosophical consequence of re-fluidizing the essence of the human.",
      "The rise of artificial intelligence re-questions human identity from another dimension. Activities once considered unique to humans — creative activity, language use, and ethical judgment — are being imitated by machines one after another, and in some domains are being surpassed. Thereby the contours of the qualities that made humans human are blurring, and humans are once again forced to redefine themselves. If the old definition of rational animal is overtaken by machines, by what can humans call themselves human?",
      "The multiplication of the self through digital extension also cannot be overlooked. The current situation in which one person holds multiple online personas, presenting different selves in different contexts, is structurally dismantling the idea of a single self. The self on social media, the self at the workplace, the self within the family. The premise itself that these are subsumed under a single integrated personality is no longer self-evident. The conventional psychiatric framework that treats the splitting of identity as pathology is also forced to be reconsidered before this state of affairs.",
      "Posthumanism as a philosophical stance actively accepts these transformations and advocates the dismantling of the very category of the human. Critiquing anthropocentrism that privileges the human, this stance fluidizes the boundaries between human and machine, organic and inorganic, subject and object, presenting the possibility of new freedom. But on the other hand, the fear is also tenacious that completely abandoning the privileged status of the human may result in losing the ground on which the concept of human dignity can be maintained. If human dignity is not grounded in qualities that distinguish it from other beings, on what can it be grounded?",
      "The concept of narrative identity also offers an important perspective to this debate. Proposed by Paul Ricoeur, this idea grasps the self not as a static entity but as a dynamic process constructed by narrating one's own life. If this perspective is adopted, technological transformation can be understood as demanding the reconstruction of the narrative of the self. The capacity to retell one's own narrative within a new technological environment is probably the core capacity that future humans should maintain.",
      "Needless to say, the very capacity to narrate one's own self is also threatened by technology. The information environment recommended by algorithms, the texts generated by AI, the immersive experience of virtual reality. These make it difficult for the self to remain the subject of its own narrative, strengthening the temptation to entrust the self to forces external to the narrative. Allowing others to write one's own narrative is nothing but the abandonment of self-determination, and in that sense immersion in technology can also become a path to the loss of the self.",
      "What is ethically most important is probably the question of what to protect as the core of human dignity amid transformation. It may not be a specific capacity but the capacity to feel pain, the capacity to consider others, and the capacity to accept one's own limitations. Perfect self-design, perfect efficiency, perfect extension. Pursuing these to the point of losing sight of the distinctiveness of the human rooted in imperfection is the true crisis. In conclusion, future identity must be redefined not as a perfected self but as a self that continues to sincerely accept its own imperfection."
    ],
    questions: [
      {
        q: "What has traditionally grounded the stability of the concept of self, according to the passage?",
        choices: ["Divine revelation alone", "The unity of the body — I am the one who possesses this body, whose experiences form my memories, whose continuity supports my existence", "The state's certification of identity", "Algorithms and digital records"],
        answerIndex: 1,
        explanation: "The text states 自己という概念の安定性は、長く身体の統一性に依拠してきた, with body-based continuity of memory grounding the self."
      },
      {
        q: "What serious philosophical consequence does biotechnology bring about, according to the passage?",
        choices: ["It reaffirms the body as fate", "It transforms the body from given to choice, but renders the question of what is natural impossible and fluidizes the essence of the human", "It has no philosophical consequences", "It only affects athletic performance"],
        answerIndex: 1,
        explanation: "The text states this selection freedom は同時に、何が自然かという問いを不可能にし、人間の本質を再び流動化させるという深刻な哲学的帰結を孛む."
      },
      {
        q: "How does posthumanism both promise and threaten, in the passage's analysis?",
        choices: ["It guarantees human dignity automatically", "It offers new freedom by fluidizing boundaries, but abandoning human privilege may lose the ground of human dignity", "It is purely destructive with no benefits", "It is identical to traditional humanism"],
        answerIndex: 1,
        explanation: "The passage states posthumanism presents 新しい自由の可能性, but the fear is that 完全に放棄することが、人間の尊厳という概念の保ち得る基盤を喪失することにならないか."
      },
      {
        q: "What does the passage identify as the most ethically important question amid these transformations?",
        choices: ["Whether we can build faster machines", "What to protect as the core of human dignity — perhaps the capacities to feel pain, consider others, and accept one's own limitations", "Whether AI can replace all labor", "Whether digital identities can be unified"],
        answerIndex: 1,
        explanation: "The passage asks 変容の中で何を人間の尊厳の核心として護るべきか, suggesting it may be the capacities to feel pain, consider others, and accept one's limitations."
      },
      {
        q: "Which N1 grammar point appears implicitly in the passage's framing that, even if rational-animal definition is overtaken, the question of human dignity is not thereby settled — captured in '人間を人間たらしめていた特質の輪郭が曖昧化し' contextually?",
        choices: ["〜ないまでも (even if not X)", "〜にたえない", "〜までもない", "〜ずくめ"],
        answerIndex: 0,
        explanation: "〜ないまでも expresses 'even if not X, still Y' — even if the rational-animal definition is not completely refuted, the blurring of human distinctiveness forces a redefinition. The passage's framing throughout embodies this nuance."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-50 — A discourse on the meaning of home
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-50",
    title: "家[いえ]という概念[がいねん]の哲学[てつがく]：住居[じゅうきょ]・帰属[きぞく]・記憶[きおく]",
    titleReading: "いえというがいねんのてつがく：じゅうきょ・きぞく・きおく",
    level: "N1",
    summary: "A philosophical discourse on the meaning of home, drawing on phenomenology, Heidegger's notion of dwelling, the distinction between house and home, the role of memory and ritual, the destabilization of home in an age of mobility, and what it means to be at home in the world.",
    estMinutes: 11,
    tags: ["philosophy", "home", "phenomenology", "Heidegger", "dwelling"],
    body: [
      "家[いえ]という概念[がいねん]は、その日常性[にちじょうせい]のゆえに哲学[てつがく]的[てき]考察[こうさつ]を免[まぬが]れてきたきらいがある。あまりに身[み]近[ぢか]な存在[そんざい]であるがゆえに、その意味[いみ]は自明[じめい]なものと受[う]け取[と]られ、問[と]い直[なお]されることが少[すく]なかった。しかしいま、全球化[せんきゅうか]と人口[じんこう]移動[いどう]とデジタル[でじたる]化[か]が居住[きょきゅう]の基本[きほん]的[てき]条件[じょうけん]を揺[ゆ]るがす中[なか]で、家[いえ]とは何[なに]かという問[とい]いは、かつてない切実[せつじつ]さをもって再浮上[さいふじょう]している。この問[とい]いに哲学[てつがく]の言葉[ことば]で向[む]き合[あ]うことは、現代[げんだい]における人間[にんげん]の条件[じょうけん]を理解[りかい]する一[ひと]つの要[かなめ]である。",
      "ハイデガー[はいでがー]が「住[す]むこと[こと]という形[かたち]で人間[にんげん]は存在[そんざい]する」と述[の]べたとき、彼[かれ]は家[いえ]を単[たん]なる物理的[ぶつりてき]な住居[じゅうきょ]から解放[かいほう]し、存在[そんざい]論[ろん]的[てき]範疇[はんちゅう]に引き上[あ]げた。住[す]むこととは、屋根[やね]の下[もと]に身体[しんたい]を置[お]くことにとどまらず、世界[せかい]との関係[かんけい]を築[きず]き、自[みずか]らの存在[そんざい]を根付[ねづ]かせる営[つとめ]みである。この視点[してん]に立[た]てば、家[いえ]を持[も]たない者[もの]は単[たん]に住居[じゅうきょ]を欠[か]くのみならず、存在[そんざい]の根拠[こんきょ]を欠[か]くという深刻[しんこく]な事態[じたい]に直面[ちょくめん]していると言[い]える。住居[じゅうきょ]問題[もんだい]は経済[けいざい]問題[もんだい]であると同時[どうじ]に、存在[そんざい]論[ろん]的[てき]問題[もんだい]でもある。",
      "家[いえ]と住居[じゅうきょ]の区別[くべつ]は、この哲学[てつがく]的[てき]考察[こうさつ]の出発点[しゅっぱつてん]である。住居[じゅうきょ]は物理[ぶつり]的[てき]構造[こうぞう]であり、建築[けんちく]学[がく]的[てき]対象[たいしょう]として把捉[はそく]できる。しかし家[いえ]は、その物理[ぶつり]的[てき]構造[こうぞう]に意味[いみ]が付与[ふよ]されることで生成[せいせい]する関係[かんけい]的[てき]現象[げんしょう]である。同一[どういつ]の建物[たてもの]が一人[ひとり]には家[いえ]であり、他方[たほう]には単[たん]なる住居[じゅうきょ]に過[す]ぎないという事態[じたい]は、家[いえ]が物理[ぶつり]的[てき]属性[ぞくせい]の総計[そうけい]では把捉[はそく]し得[え]ないことを示[しめ]している。意味[いみ]の付与[ふよ]なくして家[いえ]は成立[せいりつ]しない。",
      "記憶[きおく]の蓄積[ちくせき]も家[いえ]の成立[せいりつ]に不可欠[ふかけつ]である。家[いえ]とは、自[みずか]らの過去[かこ]が層[そう]を成[な]して堆積[たいせき]する場[ば]であり、その堆積[たいせき]の厚[あつ]みが帰属[きぞく]感[かん]を生[しょう]み出[だ]す。引[ひ]っ越[こ]しをして新[あたら]しい住居[じゅうきょ]に入[はい]った直後[ちょくご]に感[かん]じる違和感[いわかん]は、記憶[きおく]の堆積[たいせき]の不在[ふざい]に起因[きいん]する。時間[じかん]をかけて新[あたら]しい場[ば]に記憶[きおく]が堆積[たいせき]するにつれ、住居[じゅうきょ]は徐々[じょじょ]に家[いえ]へと変容[へんよう]していく。この過程[かてい]を加速[かそく]することはできず、経験[けいけん]の時間[じかん]的[てき]堆積[たいせき]に委[ゆだ]ねるほかないという点[てん]で、家[いえ]の生成[せいせい]は人間[にんげん]の有限[ゆうげん]性[せい]と深[ふか]く結[むす]びついている。",
      "儀礼[ぎれい]と反復[はんぷく]も家[いえ]を形成[けいせい]する重要[じゅうよう]な要素[ようそ]である。毎朝[まいあさ]同[おな]じ位置[いち]でコーヒー[こーひー]を飲[の]み、同[おな]じ時間[じかん]に照明[しょうめい]を落[お]とし、同[おな]じ季節[きせつ]に同[おな]じ飾[かざ]りを並[なら]べる。これらの反復[はんぷく]的[てき]行為[こうい]は、単[たん]なる習慣[しゅうかん]以上[いじょう]の意味[いみ]を持[も]ち、場[ば]に秩序[ちつじょ]と意味[いみ]を刻印[こくいん]する儀礼[ぎれい]的[てき]機能[きのう]を果[は]たす。反復[はんぷく]の積[つ]み重[かさ]ねが場[ば]を神聖[しんせい]化[か]し、日常[にちじょう]的[てき]な空間[くうかん]を帰属[きぞく]の対象[たいしょう]へと変成[へんせい]させる。儀礼[ぎれい]の喪失[そうしつ]は、家[いえ]の喪失[そうしつ]の第一[だいいち]歩[ほ]である。",
      "もっとも、現代[げんだい]における家[いえ]の危機は、移動[いどう]の常態化[じょうたいか]に起因[きいん]する。転勤[てんきん]、留学[りゅうがく]、移民[いみん]、そしてデジタル[でじたる]・ノマド[のまど]。これらの生活[せいかつ]様式[ようしき]は、一[ひと]つの場[ば]に根付[ねづ]くことを困難[こんなん]にし、記憶[きおく]の堆積[たいせき]を断絶[だんぜつ]させる。しかし他方[たほう]で、移動[いどう]する人間[にんげん]は家[いえ]を持[も]てないのかと言[い]えば、そうとは限[かぎ]らない。モバイル[もばいる]な家[いえ]、儀礼[ぎれい]としての家[いえ]、身体的[しんたいてき]に運搬[うんぱん]される家[いえ]。これらの新[あたら]しい形[かたち]は、家[いえ]を固定[こてい]した場[ば]ではなく、移動[いどう]する関係性[かんけいせい]として再定義[さいていぎ]する可能性[かのうせい]を示[しめ]唆[さ]する。",
      "デジタル[でじたる]化[か]が家[いえ]の意味[いみ]に与[あた]える影響[えいきょう]も看過[かんか]できない。オンライン[おんらいん]上[じょう]のコミュニティ[こみゅにてぃ]が帰属[きぞく]の対象[たいしょう]として機能[きのう]し始め、物理[ぶつり]的[てき]空間[くうかん]と並んで精神的[せいしんてき]な家[いえ]として受[う]け入[い]れられる現状[げんじょう]は、家[いえ]の概念[がいねん]を再[さい]構築[こうちく]することを迫[せま]る。もっとも、デジタル[でじたる]空間[くうかん]は身体[しんたい]の経験[けいけん]を欠[か]くため、ハイデガー[はいでがー]の言[い]う意味[いみ]での住まい[すまい]を完全[かんぜん]に実現[じつげん]し得[え]るかは疑問[ぎもん]である。身体[しんたい]を欠[か]いた帰属[きぞく]が真[まこと]の帰属[きぞく]であり得[え]るかという問[とい]いは、今後[こんご]の哲学[てつがく]的[てき]課題[かだい]として残[のこ]り続[つづ]けよう。",
      "他者[たしゃ]との関係[かんけい]も家[いえ]を成立[せいりつ]させる核心[かくしん]的[てき]要素[ようそ]である。完全[かんぜん]に孤立[こりつ]した一人[ひとり]の人間[にんげん]に家[いえ]は成立[せいりつ]し得[え]ないというのが、現象[げんしょう]学[がく]的[てき]直観[ちょっかん]の示[しめ]すところである。家[いえ]とは自[みずか]らだけのものではなく、共[とも]に住[す]む者[もの]、訪[おとず]れる者[もの]、思い出[おもいで]を共有[きょうゆう]する者[もの]との関係[かんけい]の網[あ]の目[め]の中[なか]で成立[せいりつ]する。家族[かぞく]という古[ふる]い形[かたち]が変容[へんよう]する中[なか]で、他者[たしゃ]との関係[かんけい]の新[あたら]しい様式[ようしき]がいかに家[いえ]を生成[せいせい]し得[え]るかが問[と]われている。",
      "結論[けつろん]として、家[いえ]とは物理[ぶつり]的[てき]構造[こうぞう]ではなく、人間[にんげん]と世界[せかい]の関係[かんけい]を意味[いみ]づける実践[じっせん]の複合体[ふくごうたい]である。記憶[きおく]の堆積[たいせき]、儀礼[ぎれい]の反復[はんぷく]、他者[たしゃ]との関係[かんけい]、そして身体[しんたい]を通じた経験[けいけん]の刻印[こくいん]。これらが統合[とうごう]された場[ば]において、人間[にんげん]は自[みずか]らの存在[そんざい]を根付[ねづ]かせることができる。変容[へんよう]の時代[じだい]にあっても、家[いえ]を生成[せいせい]するこれらの実践[じっせん]の核心[かくしん]は不変[ふへん]であり、その核心[かくしん]を護[まも]り続[つづ]けることこそが、人間[にんげん]が世界[せかい]に家[いえ]するということの真意[しんい]である。"
    ],
    translation: [
      "The concept of home has, owing to its everydayness, tended to escape philosophical examination. Because it is too familiar a presence, its meaning has been taken as self-evident and rarely re-questioned. But now, as globalization, population movement, and digitalization shake the basic conditions of dwelling, the question of what home is resurfaces with unprecedented urgency. Facing this question in the language of philosophy is one key to understanding the human condition in the modern era.",
      "When Heidegger said 'humans exist in the form of dwelling,' he liberated home from a mere physical dwelling and raised it to an ontological category. Dwelling does not stop at placing the body under a roof; it is the endeavor of building a relation with the world and rooting one's own existence. From this perspective, one without a home faces not merely a lack of dwelling but the serious situation of lacking the ground of existence. The dwelling problem is an economic problem and at the same time an ontological problem.",
      "The distinction between home and dwelling is the starting point of this philosophical examination. Dwelling is a physical structure, graspable as an object of architecture. But home is a relational phenomenon generated by the attribution of meaning to that physical structure. The situation in which the same building is home to one person but merely a dwelling to another shows that home cannot be grasped as the sum of physical attributes. Without the attribution of meaning, home is not established.",
      "The accumulation of memory is also indispensable to the establishment of home. Home is the place where one's past piles up in layers, and the thickness of that accumulation generates a sense of belonging. The sense of incongruity felt immediately upon moving into a new dwelling is due to the absence of accumulated memory. As memory accumulates in the new place over time, the dwelling gradually transforms into a home. This process cannot be accelerated, and in being entrusted to the temporal accumulation of experience, the generation of home is deeply tied to human finitude.",
      "Ritual and repetition are also important elements that form home. Drinking coffee in the same place every morning, turning off the lights at the same time, displaying the same decorations in the same season. These repetitive acts bear more than mere habit, fulfilling a ritual function that imprints order and meaning on a place. The accumulation of repetition sacralizes the place and transfigures everyday space into an object of belonging. The loss of ritual is the first step toward the loss of home.",
      "Needless to say, the crisis of home in the modern era is due to the normalization of movement. Transfers, study abroad, migration, and digital nomadism. These lifestyles make it difficult to put down roots in one place and disrupt the accumulation of memory. Yet on the other hand, does a moving person lack a home? Not necessarily. Mobile homes, homes as ritual, physically transported homes. These new forms suggest the possibility of redefining home not as a fixed place but as a moving relationality.",
      "The influence that digitalization exerts on the meaning of home also cannot be overlooked. The current situation in which online communities begin to function as objects of belonging and are accepted as spiritual homes alongside physical space compels a reconstruction of the concept of home. However, because digital space lacks bodily experience, whether it can fully realize dwelling in Heidegger's sense is questionable. Whether belonging without body can be true belonging is a question that will continue to remain as a future philosophical task.",
      "The relation with others is also a core element that establishes home. That a fully isolated single person cannot establish a home is what phenomenological intuition shows. Home is not one's own alone; it is established within a mesh of relations with those who dwell together, those who visit, and those who share memories. As the old form of family transforms, the question is how new modes of relation with others can generate home.",
      "In conclusion, home is not a physical structure but a complex of practices that give meaning to the relation between the human and the world. The accumulation of memory, the repetition of ritual, the relation with others, and the inscription of experience through the body. In the place where these are integrated, humans can root their own existence. Even in an era of transformation, the core of these practices that generate home remains unchanged, and to continue protecting that core is the true meaning of humans making a home in the world."
    ],
    questions: [
      {
        q: "What does Heidegger's claim that 'humans exist in the form of dwelling' accomplish, according to the passage?",
        choices: ["It reduces home to a physical structure", "It liberates home from being a mere physical dwelling and raises it to an ontological category — dwelling as rooting one's existence", "It denies the importance of architecture", "It equates home with the workplace"],
        answerIndex: 1,
        explanation: "The text states ハイデガーが「住むことという形で人間は存在する」と述べたとき、彼は家を単なる物理的な住居から解放し、存在論的範疇に引き上げた."
      },
      {
        q: "How does the passage distinguish home from dwelling?",
        choices: ["They are identical", "Dwelling is a physical structure graspable by architecture, while home is a relational phenomenon generated by attributing meaning to that structure", "Home is purely physical, dwelling is relational", "Dwelling is older than home"],
        answerIndex: 1,
        explanation: "The text states 住居は物理的構造であり...しかし家は、その物理的構造に意味が付与されることで生成する関係的現象である."
      },
      {
        q: "What role does memory accumulation play in the formation of home?",
        choices: ["It is irrelevant to home", "Home is a place where one's past accumulates in layers, and the thickness of that accumulation generates a sense of belonging — explaining the incongruity felt in a new dwelling", "Memory only causes suffering", "Memory destroys home"],
        answerIndex: 1,
        explanation: "The passage states 家とは、自らの過去が層を成して堆積する場であり、その堆積の厚みが帰属感を生み出す, and that the incongruity in new dwellings is due to 記憶の堆積の不在."
      },
      {
        q: "How does the passage treat the question of whether a moving person can have a home?",
        choices: ["Moving people definitively cannot have a home", "Not necessarily — mobile homes, homes as ritual, and physically transported homes suggest redefining home as moving relationality", "Only digital nomads have true homes", "Home requires permanent residence in one place"],
        answerIndex: 1,
        explanation: "The text states 移動する人間は家を持てないのかと言えば、そうとは限らない, suggesting forms like モバイルな家、儀礼としての家、身体的に運搬される家."
      },
      {
        q: "Which N1 grammar point appears in 'あまりに身近な存在であるがゆえに、その意味は自明なものと受け取られ、問い直されることが少なかった'?",
        choices: ["〜がゆえに (because of / for the reason that)", "〜にたえない", "〜までもない", "〜ずくめ"],
        answerIndex: 0,
        explanation: "〜がゆえに expresses 'because of' — here, home is rarely re-questioned precisely because of being too familiar a presence."
      }
    ]
  }
];
