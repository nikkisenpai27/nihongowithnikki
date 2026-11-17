import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N1-level reading passages with comprehension questions (ids r-n1-21..r-n1-30).

export const readingN1C: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n1-21 — The philosophy of wabi-sabi
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-21",
    title: "わびさびの哲学[てつがく]",
    titleReading: "わびさびのてつがく",
    level: "N1",
    summary: "An essay tracing wabi-sabi from its roots in impermanence and the tea ceremony of Sen no Rikyu, through its contrast with Western ideals of proportion, to its modern relevance as a critique of consumerism — while warning against romanticizing poverty or turning aesthetics into a tool of political pacification.",
    estMinutes: 12,
    tags: ["aesthetics", "philosophy", "wabi-sabi", "tea ceremony", "impermanence"],
    body: [
      "わびさびという言葉[ことば]は、日本[にほん]の美[び]意識[いしき]を代表[だいひょう]する概念[がいねん]として、しばしば海外[かいがい]にも紹介[しょうかい]される。しかしながら、その内包[ないほう]は極[きわ]めて多層的[たそうてき]であり、一言[ひとこと]で定義[ていぎ]するのは困難[こんなん]を極[きわ]める。もとよりわびとは、不足[ふそく]の中[なか]に静[しず]かな喜[よろこ]びを見出[みいだ]す態度[たいど]を、さびとは、枯淡[こたん]の境地[きょうち]に漂[ただよ]う風情[ふぜい]を指[さ]す言葉[ことば]であった。これら二[ふた]つの概念[がいねん]が鎌倉時代[かまくらじだい]以降[いこう]、茶[ちゃ]の湯[ゆ]や連歌[れんが]、能楽[のうがく]などの芸道[げいどう]を通[つう]じて融合[ゆうごう]し、独自[どくじ]の美[び]の哲学[てつがく]として結晶化[けっしょうか]したのである。",
      "千利休[せんのりきゅう]は、華美[かび]を排[はい]した草庵[そうあん]の茶室[ちゃしつ]において、まさにわびさびの極致[きょくち]を体現[たいげん]した。彼[かれ]が好[この]んだ釜[かま]や茶碗[ちゃわん]には、不均衡[ふきんこう]さと簡素[かんそ]さが同居[どうきょ]しており、完成[かんせい]された美[うつく]しさよりもむしろ未完成[みかんせい]なるものへの愛着[あいちゃく]が伺[うかが]える。利休[りきゅう]の「わび」とは、単[たん]なる貧[まず]しさの讃美[さんび]ではなく、それを超越[ちょうえつ]した精神[せいしん]の自由[じゆう]にほかならない。そこには、物質的[ぶっしつてき]な欠如[けつじょう]を精神的[せいしんてき]な充足[じゅうそく]へと転換[てんかん]する弁証法[べんしょうほう]が潜[ひそ]んでいると言[い]えよう。",
      "わびさびの根底[こんてい]にあるのは、無常観[むじょうかん]である。すべては移[うつろ]い、やがては消[き]えゆくという仏教的[ぶっきょうてき]な世界観[せかいかん]が、もののあわれと呼[よ]ばれる情感[じょうかん]を育[はぐく]んだ。桜[さくら]の散[ち]り急[いそ]ぐ様[さま]にこそ美[び]を見[み]る感性[かんせい]は、まさにこの無常観[むじょうかん]と相[あい]まって成立[せいりつ]する。完成[かんせい]された瞬間[しゅんかん]にはすでに崩壊[ほうかい]の種[たね]が宿[やど]されているという認識[にんしき]が、日本人[にほんじん]に不完全[ふかんぜん]なるものへの共感[きょうかん]を促[うなが]したのである。さればこそ、欠[か]けたる器[うつわ]に金[きん]を継[つ]ぐ金継[きんつ]ぎの技法[ぎほう]が、傷跡[きずあと]そのものを美[び]として顕揚[けんよう]することとなる。",
      "わびさびの美学[びがく]は、几帳面[きちょうめん]な対称性[たいしょうせい]を避[さ]け、むしろ非対称[ひたいしょう]と余白[よはく]を重[おも]んじる。そこには、見[み]えるものよりも見[み]えないものを感得[かんとく]する感性[かんせい]が働[はたら]いている。例[たと]えば、日本[にほん]の庭園[ていえん]は石[いし]の配置[はいち]一[ひと]つとっても、意図的[いとてき]に不均衡[ふきんこう]を演出[えんしゅつ]し、観者[かんしゃ]の想像力[そうぞうりょく]を喚起[かんき]する仕掛[しか]けとなっている。余白[よはく]こそが意味[いみ]を生[しょう]み、沈黙[ちんもく]こそが言葉[ことば]以上[いじょう]の雄弁[ゆうべん]さを持[も]ち得[う]るという逆説[ぎゃくせつ]が、わびさびの核心[かくしん]をなす。これを西洋[せいよう]の美学[びがく]と対比[たいひ]すれば、その特異性[とくいせい]は一層[いっそう]鮮明[せんめい]となるだろう。",
      "西洋[せいよう]の美術史[びじゅつし]が、古代[こだい]ギリシャ以降[いこう]、完成[かんせい]された比例[ひれい]と均衡[きんこう]を理想[りそう]としてきたのに対[たい]し、日本[にほん]の美[び]はむしろ不完全[ふかんぜん]と移[うつろ]いを肯定[こうてい]する方向[ほうこう]に展開[てんかい]した。ルネサンスの画家[がか]たちが永遠[えいえん]に変[か]わらぬ理想美[りそうび]を追求[ついきゅう]したのとは対照的[たいしょうてき]に、絵巻物[えまきもの]の絵師[えし]たちは四季[しき]の移[うつろ]いや人[ひと]の心[こころ]の揺[ゆ]れ動[うご]きを、むしろ一瞬[いっしゅん]の表情[ひょうじょう]に定着[ていちゃく]しようとした。この差異[さい]は単[たん]なる好[この]みの問題[もんだい]にとどまらず、世界観[せかいかん]そのものの相違[そうい]に根[ね]ざしていると言[い]わなければならない。",
      "現代社会[げんだいしゃかい]において、わびさびの哲学[てつがく]は逆[ぎゃく]に新[あたら]たなる意義[いぎ]を帯[お]びつつある。消費社会[しょうひしゃかい]が飽和[ほうわ]する中[なか]で、物質的[ぶっしつてき]な豊[ゆた]かさだけでは充足[じゅうそく]し得[え]ない精神的[せいしんてき]な渇[かつ]きが広[ひろ]がっている。そうした時代[じだい]にこそ、足[た]るを知[し]るというわびの知恵[ちえ]は、ひときわ光彩[こうさい]を放[はな]つ。加[くわ]えて、環境問題[かんきょうもんだい]が深刻化[しんこくか]するにつれ、簡素[かんそ]な生活様式[せいかつようしき]そのものがエコの哲学[てつがく]として再解釈[さいかいしゃく]されつつある。もとよりわびさびは、自然[しぜん]との調和[ちょうわ]を基調[きちょう]とするからである。",
      "もっとも、わびさびをロマンチックに過剰[かじょう]評価[ひょうか]することには慎重[しんちょう]でなければならない。貧困[ひんこん]や困窮[こんきゅう]を美徳[びとく]として正当化[せいとうか]する論理[ろんり]に転[てん]じれば、それは社会的不正義[しゃかいてきふせいぎ]の隠蔽[いんぺい]に加担[かたん]することにもなりかねない。江戸時代[えどじだい]の支配層[しはいそう]が、民衆[みんしゅう]の不満[ふまん]を鎮撫[ちんぶ]するためにわびさび的[てき]な忍耐[にんたい]を説[と]いた側面[そくめん]も否定[ひてい]はできない。美学[びがく]を政治[せいじ]から切[き]り離[はな]して純化[じゅんか]することは不可能[ふかのう]に近[ちか]いが、かといって美学[びがく]そのものの価値[かち]を否定[ひてい]するのも短絡[たんらく]に過[す]ぎよう。",
      "結局[けっきょく]のところ、わびさびとは日本人[にほんじん]が世界[せかい]との向[む]き合[あ]い方[かた]から編[あ]み出[だ]した生存[せいぞん]の戦略[せんりゃく]であったとも言[い]える。有限[ゆうげん]の命[いのち]を、無常[むじょう]の世界[せかい]でいかに生[い]きるか。その問[と]いに対[たい]する一[ひと]つの解答[かいとう]が、不完全[ふかんぜん]なるものを愛[あい]し、移[うつろ]いに美[び]を見出[みいだ]すという態度[たいど]であった。科学技術[かがくぎじゅつ]が万物[ばんぶつ]を支配[しはい]しようとする現代[げんだい]にあって、この哲学[てつがく]は、私[わたし]たちが制御[せいぎょ]不可能[ふかのう]なものの前[まえ]で謙虚[けんきょ]さを保[たも]つことを教[おし]えている。わびさびの精神[せいしん]を現代的文脈[げんだいてきぶんみゃく]に継承[けいしょう]することは、単[たん]なる懐古趣味[かいこしゅみ]ではなく、未来[みらい]に向[む]けた実存的[じつぞんてき]な営[いとな]みと言[い]うべきであろう。"
    ],
    translation: [
      "The term wabi-sabi is often introduced abroad as a concept representative of the Japanese aesthetic consciousness. Its content is, however, profoundly multi-layered, and defining it in a single phrase proves exceedingly difficult. Originally, wabi referred to the attitude of finding quiet joy amid insufficiency, while sabi denoted the flavor hovering over a realm of austere refinement. From the Kamakura period onward these two concepts fused through such artistic disciplines as the tea ceremony, renga linked verse, and noh drama, eventually crystallizing into a distinctive philosophy of beauty.",
      "Sen no Rikyu, in the rustic teahouse that eschewed opulence, embodied the very pinnacle of wabi-sabi. The kettles and bowls he favored harbored both asymmetry and simplicity, revealing a predilection less for completed beauty than for the unfinished. Rikyu's \"wabi\" was no mere glorification of poverty; it was nothing other than the freedom of spirit that transcends it. There lies, one might say, a dialectic that transposes material lack into spiritual sufficiency.",
      "Underlying wabi-sabi is a sense of impermanence. The Buddhist worldview that all things shift and eventually vanish nurtured the sentiment called mono no aware. The sensibility that finds beauty precisely in the cherry blossoms scattering in haste takes shape in concert with this view of impermanence. The recognition that the seed of collapse already dwells within the moment of completion moved the Japanese to empathize with the incomplete. It is for this very reason that the technique of kintsugi, mending a cracked vessel with gold, ends up exalting the scar itself as beauty.",
      "The aesthetics of wabi-sabi eschews meticulous symmetry and prizes rather asymmetry and empty space. A sensibility that grasps the unseen rather than the seen is at work there. The Japanese garden, for instance, even in the placement of a single stone, deliberately stages imbalance, becoming a device that awakens the viewer's imagination. The paradox that empty space generates meaning, that silence can possess an eloquence beyond words, constitutes the core of wabi-sabi. Contrasted with Western aesthetics, its singularity becomes all the more vivid.",
      "Whereas the history of Western art, since ancient Greece, has held completed proportion and equilibrium as its ideal, Japanese beauty unfolded instead in a direction affirming the incomplete and the transient. In contrast to the Renaissance painters pursuing an ideal beauty eternally unchanged, the artists of picture scrolls sought to fix, in the expression of a fleeting instant, the shifting of the four seasons and the wavering of the human heart. This difference is not merely a matter of taste; one must say it is rooted in a divergence of worldviews themselves.",
      "In modern society, the philosophy of wabi-sabi is taking on new significance. As consumer society saturates, a spiritual thirst that material abundance alone cannot satisfy is spreading. In such an age, the wisdom of wabi — knowing when one has enough — shines with particular brilliance. Moreover, as environmental problems deepen, the simple lifestyle itself is being reinterpreted as a philosophy of ecology. For wabi-sabi is, after all, predicated on harmony with nature.",
      "One must, however, be cautious about romanticizing wabi-sabi to excess. If it were to shift into a logic that legitimates poverty and destitution as virtues, it could end up complicit in concealing social injustice. The aspect whereby the ruling class of the Edo period preached wabi-sabi-style forbearance to pacify popular discontent cannot be denied either. While it is nearly impossible to purify aesthetics by severing it from politics, neither is it anything but simplistic to deny the value of aesthetics itself.",
      "In the end, wabi-sabi can be called a strategy for survival that the Japanese wove from their way of facing the world. How to live a finite life in an impermanent world — one answer to that question was the attitude of loving the incomplete and finding beauty in the transient. In an age when science and technology seek to master all things, this philosophy teaches us to retain humility before what we cannot control. Inheriting the spirit of wabi-sabi in a modern context is not mere nostalgia; it should be called an existential endeavor toward the future."
    ],
    questions: [
      {
        q: "According to the passage, what paradox constitutes the core of wabi-sabi aesthetics?",
        choices: ["Symmetry produces the greatest beauty", "Empty space generates meaning and silence speaks louder than words", "Material abundance is required for spiritual satisfaction", "Imperfection should be eliminated wherever found"],
        answerIndex: 1,
        explanation: "The text states 余白こそが意味を生み、沈黙こそが言葉以上の雄弁さを持ち得るという逆説が、わびさびの核心をなす — empty space generating meaning and silence possessing eloquence beyond words is the core paradox."
      },
      {
        q: "What does the author identify as Sen no Rikyu's 'wabi' ultimately amounting to?",
        choices: ["A straightforward glorification of poverty", "The freedom of spirit that transcends material lack", "A pursuit of luxurious teaware", "A rejection of Buddhist doctrine"],
        answerIndex: 1,
        explanation: "利休の「わび」とは、単なる貧しさの讃美ではなく、それを超越した精神の自由にほかならない — Rikyu's wabi was nothing other than spiritual freedom transcending poverty."
      },
      {
        q: "Which philosophical view does the passage identify as underlying wabi-sabi?",
        choices: ["The Cartesian mind-body dualism", "The Greek ideal of proportion", "The Buddhist sense of impermanence (無常観)", "The Confucian doctrine of filial piety"],
        answerIndex: 2,
        explanation: "わびさびの根底にあるのは、無常観である — the Buddhist sense of impermanence underlies wabi-sabi."
      },
      {
        q: "What caution does the author raise about over-romanticizing wabi-sabi?",
        choices: ["It would obscure the origins of Japanese art history", "It could legitimize poverty and conceal social injustice", "It might discourage tourism to Kyoto", "It would render modern design impossible"],
        answerIndex: 1,
        explanation: "貧困や困窮を美徳として正当化する論理に転じれば、それは社会的不正義の隠蔽に加担することにもなりかねない — romanticizing wabi-sabi could justify poverty and conceal social injustice."
      },
      {
        q: "Which N1 grammar point is used to express 'it is nothing other than spiritual freedom'?",
        choices: ["〜に違いない", "〜にほかならない (nothing other than)", "〜ずにはおかない", "〜ことなしに"],
        answerIndex: 1,
        explanation: "The phrase 精神の自由にほかならない uses 〜にほかならない to mean 'nothing other than'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-22 — Privacy in the digital age
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-22",
    title: "デジタル時代[じだい]のプライバシー",
    titleReading: "でじたるじだいのぷらいばしー",
    level: "N1",
    summary: "A discourse on how digital technology has rendered the classical notion of privacy obsolete: surveillance capitalism monetizes behavior data, state surveillance expands under the banner of counter-terrorism, consent has become ritualized, the right to be forgotten protects the possibility of personal renewal, and privacy must be defended as a collective public good tied to democratic self-rule.",
    estMinutes: 13,
    tags: ["privacy", "surveillance capitalism", "digital ethics", "democracy", "data protection"],
    body: [
      "プライバシーという概念[がいねん]は、かつては私的[してき]な空間[くうかん]に他者[たしゃ]を侵入[しんにゅう]させない権利[けんり]として理解[りかい]されていた。しかし、デジタル技術[ぎじゅつ]が生活[せいかつ]の隅[すみ]々にまで浸透[しんとう]した今日[こんにち]において、その古典的[こてんてき]な定義[ていぎ]はもはや有効性[ゆうこうせい]を失[うしな]いつつある。スマートフォン一[ひと]つが、位置[いち]情報[じょうほう]から閲覧[えつらん]履歴[りれき]、心拍数[しんぱくすう]に至[いた]るまで、絶[た]え間[ま]なく個人[こじん]のデータを収集[しゅうしゅう]し続[つづ]ける。私[わたし]たちは便利[べんり]さを享受[きょうじゅ]する傍[かたわ]ら、自[みずか]らの手[て]で私的[してき]な情報[じょうほう]を企業[きぎょう]や国家[こっか]の手[て]に委[ゆだ]ねているのである。この現実[げんじつ]を直視[ちょくし]することなしに、プライバシーの未来[みらい]を語[かた]ることはできまい。",
      "ショシャナ・ズボフが名付[なづ]けた「監視資本主義[かんししほんしゅぎ]」という概念[がいねん]は、この状況[じょうきょう]を鋭[するど]く描写[びょうしゃ]する。巨大[きょだい]IT企業[きぎょう]は、ユーザーの行動[こうどう]データを予測[よそく]し、それを商品[しょうひん]として販売[はんばい]することで利益[りえき]を上[あ]げる。もはやデータは副産物[ふくさんぶつ]ではなく、資本主義[しほんしゅぎ]の主[しゅ]たる燃料[ねんりょう]と化[か]した。消費者[しょうひしゃ]は自[みずか]らが商品[しょうひん]となっていることにすら気[き]づかぬまま、無償[むしょう]のサービスと引[ひ]き換[か]えに自[みずか]らの尊厳[そんげん]を切[き]り売[う]りしている。この構造[こうぞう]は、従来[じゅうらい]の搾取[さくしゅ]の形態[けいたい]とは異質[いしつ]であり、より狡猾[こうかつ]で深刻[しんこく]なものと言[い]わなければならない。",
      "国家[こっか]による監視[かんし]もまた、テロ対策[たいさく]という大義名分[たいぎめいぶん]の下[もと]に拡大[かくだい]の一途[いっと]をたどっている。市民[しみん]の通信[つうしん]記録[きろく]や位置[いち]情報[じょうほう]が、法[ほう]の正当[せいとう]な手続[てつづ]きを経[へ]ることなく蓄積[ちくせき]され、分析[ぶんせき]される事例[じれい]は珍[めずら]しくない。もとより公共[こうきょう]の安全[あんぜん]と個人[こじん]の自由[じゆう]はトレードオフの関係[かんけい]にあり、その均衡[きんこう]点[てん]を見出[みいだ]すことは容易[ようい]でない。しかし、監視[かんし]が常態化[じょうたいか]すれば、市民[しみん]は自[みずか]らの行動[こうどう]を自己[じこ]規制[きせい]し始[はじ]める。監視社会[かんししゃかい]がもたらす心理的[しんりてき]萎縮[いしゅく]は、自由[じゆう]民主[みんしゅ]主義[しゅぎ]の根幹[こんかん]を揺[ゆる]がす恐[おそ]れがある。",
      "注目[ちゅうもく]すべきは、プライバシーが単[たん]なる「秘密[ひみつ]」の保持[ほじ]にとどまらないという点[てん]である。近年[きんねん]の議論[ぎろん]は、プライバシーを自己[じこ]決定権[けっていけん]や情報[じょうほう]の文脈的[ぶんみゃくてき]完全性[かんぜんせい]として再定義[さいていぎ]する方向[ほうこう]に向[む]かっている。つまり、ある情報[じょうほう]がどのような文脈[ぶんみゃく]で誰[だれ]に開示[かいじ]されるかを、本人[ほんにん]が自[みずか]ら制御[せいぎょ]する権利[けんり]として捉[とら]え直[なお]すのである。この見地[けんち]からすれば、同意[どうい]を得[え]て収集[しゅうしゅう]されたデータであろうと、当初[とうしょ]の目的[もくてき]以外[いがい]に転用[てんよう]されるならば、それはプライバシーの侵害[しんがい]にほかならない。",
      "実際[じっさい]、同意[どうい]という概念[がいねん]自体[じたい]が形骸化[けいがいか]している。長大[ちょうだい]な利用規約[りようきやく]を誰[だれ]が熟読[じゅくどく]し得[え]ようか。「同意[どうい]する」ボタンを押[お]す行為[こうい]は、もはや真[しん]の合意[ごうい]ではなく、儀礼的[ぎれいてき]な通過点[つうかてん]に過[す]ぎない。このような状況下[じょうきょうか]では、事実上[じつじょう]の強制的[きょうせいてき]同意[どうい]が横行[おうこう]し、個人[こじん]の自由[じゆう]意思[いし]は剥落[はくらく]していく。法制度[ほうせいど]がこの現実[げんじつ]に即[そく]して設計[せっけい]されていなければ、データ保護[ほご]の理念[りねん]は絵[え]に描[えが]いた餅[もち]に終[お]わる。規制[きせい]のあり方[かた]そのものを根本[こんぽん]から問[と]い直[なお]す必要[ひつよう]がある。",
      "忘[わす]れられる権利[けんり]という概念[がいねん]も、この文脈[ぶんみゃく]で重要性[じゅうようせい]を増[ま]している。かつて人間[にんげん]の記憶[きおく]は忘却[ぼうやく]とともに薄[うす]れ、過去[かこ]の過[あやま]ちも時間[じかん]と共[とも]に風化[ふうか]した。しかしインターネットは、一[ひと]つの記録[きろく]を永遠[えいえん]に保持[ほじ]し続[つづ]ける。十年[じゅうねん]前[まえ]の些細[ささい]な失言[しつげん]が、今日[こんにち]に至[いた]るまで検索[けんさく]され続[つづ]ける社会[しゃかい]において、人間[にんげん]の再生[さいせい]と成長[せいちょう]の可能性[かのうせい]は著[いちじる]しく損[そこな]われる。忘[わす]れられる権利[けんり]とは、単[たん]なる記憶[きおく]の消去[しょうきょ]ではなく、人間[にんげん]らしく生[う]まれ変[か]わる権利[けんり]として理解[りかい]されなければならない。",
      "さらにプライバシーは、個人[こじん]の権利[けんり]であると同時[どうじ]に集団的[しゅうだんてき]な公共財[こうきょうざい]でもある。一人[ひとり]のデータが漏洩[ろうえい]すれば、類似[るいじ]の属性[ぞくせい]を持[も]つ他者[たしゃ]についても推論[すいろん]が可能[かのう]となる。DNAデータベースの構築[こうちく]は、本人[ほんにん]の同意[どうい]を得[え]ていても、血縁者[けつえんしゃ]にまで影響[えいきょう]を及[およ]ぼし得[う]る。この意味[いみ]で、プライバシーの保護[ほご]は個人[こじん]の裁量[さいりょう]だけに委[ゆだ]ねるわけにはいかない。集団的[しゅうだんてき]かつ構造的[こうぞうてき]なアプローチなしには、真[しん]の解決[かいけつ]は望[のぞ]めないのである。",
      "結論[けつろん]として、デジタル時代[じだい]におけるプライバシーは、単[たん]なる消費者[しょうひしゃ]の利益[りえき]の問題[もんだい]にとどまらない。それは人間[にんげん]の尊厳[そんげん]、自律[じりつ]、そして民主[みんしゅ]主義[しゅぎ]の存立[そんりつ]に関[かん]わる根本的[こんぽんてき]な営[いとな]みである。技術[ぎじゅつ]の進歩[しんぽ]をただ礼賛[らいさん]するのみでは、私[わたし]たちは気[き]づかぬうちに自由[じゆう]を失[うしな]う。逆[ぎゃく]に、技術[ぎじゅつ]を全否定[ぜんひてい]すれば、社会[しゃかい]の恩恵[おんけい]をも捨[す]てることになろう。求[もと]められるのは、技術[ぎじゅつ]と人間[にんげん]の尊厳[そんげん]が両立[りょうりつ]するような新[あたら]たな制度的[せいどてき]工夫[くふう]である。この問[と]いに対[たい]する答[こた]えこそが、今後[こんご]の社会[しゃかい]の性格[せいかく]を決定[けってい]づけるに違[ちが]いない。"
    ],
    translation: [
      "The concept of privacy was once understood as the right to keep others from intruding into private space. Today, however, as digital technology permeates every corner of life, that classical definition is losing its validity. A single smartphone continuously collects personal data — from location information to browsing history and even heart rate. While enjoying convenience, we are, with our own hands, entrusting private information to corporations and the state. Without confronting this reality, we cannot speak of the future of privacy.",
      "The concept that Shoshana Zuboff named \"surveillance capitalism\" sharply depicts this situation. Giant IT corporations predict user behavior data and sell it as a commodity to generate profit. Data is no longer a by-product but has become the principal fuel of capitalism. Consumers, without even realizing that they themselves have become the commodity, are selling off their own dignity in exchange for free services. This structure differs from traditional forms of exploitation and must be called a more cunning and serious one.",
      "State surveillance, too, has continued to expand under the high-sounding pretext of counter-terrorism. Cases in which citizens' communication records and location data are accumulated and analyzed without due legal process are not rare. Public safety and individual freedom are, of course, in a trade-off relationship, and finding the point of equilibrium is no easy task. Yet once surveillance becomes normalized, citizens begin to self-regulate their own behavior. The psychological withering brought about by a surveillance society threatens to shake the very foundations of liberal democracy.",
      "What deserves attention is that privacy is not confined to the preservation of \"secrets.\" Recent debates have been moving toward redefining privacy as self-determination or the contextual integrity of information. In other words, it is being re-conceived as the right of the individual to control in what context and to whom a given piece of information is disclosed. From this standpoint, even data collected with consent, if repurposed beyond its original aim, constitutes nothing other than an invasion of privacy.",
      "In fact, the concept of consent itself has become formalized. Who can possibly read through lengthy terms of use? The act of pressing the \"agree\" button is no longer genuine agreement but a ritualistic passage point. Under such circumstances, de facto coerced consent runs rampant, and individual free will erodes. Unless the legal system is designed to address this reality, the ideal of data protection will end up as a pie in the sky. The very form of regulation must be fundamentally reconsidered.",
      "The concept of the right to be forgotten has also gained importance in this context. Once, human memory faded with forgetting, and past mistakes weathered over time. The Internet, however, retains a single record eternally. In a society where a trivial slip of the tongue from ten years ago continues to be searched to this day, the possibility of human renewal and growth is markedly damaged. The right to be forgotten must be understood not merely as the erasure of memory but as the right to be reborn in a human way.",
      "Moreover, privacy is at once an individual right and a collective public good. If one person's data leaks, inferences become possible about others with similar attributes. The construction of a DNA database, even with the individual's consent, can affect relatives as well. In this sense, the protection of privacy cannot be left to individual discretion alone. Without a collective and structural approach, no genuine solution can be hoped for.",
      "In conclusion, privacy in the digital age is not merely a matter of consumer interests. It is a fundamental endeavor concerning human dignity, autonomy, and the very survival of democracy. If we merely sing the praises of technological progress, we shall lose our freedom without noticing. Conversely, if we reject technology wholesale, we shall also discard the benefits of society. What is needed is new institutional ingenuity that allows technology and human dignity to coexist. The answer to this question will surely determine the character of future society."
    ],
    questions: [
      {
        q: "How does the passage characterize the act of pressing the 'agree' button on lengthy terms of service?",
        choices: ["A genuine expression of informed consent", "A ritualistic passage point devoid of true agreement", "A legally binding contract in every sense", "An optional step that has no real consequence"],
        answerIndex: 1,
        explanation: "「同意する」ボタンを押す行為は、もはや真の合意ではなく、儀礼的な通過点に過ぎない — pressing the agree button is no longer genuine agreement but a ritualistic passage point."
      },
      {
        q: "According to the passage, why does the right to be forgotten matter beyond mere erasure of records?",
        choices: ["It increases advertising revenue for search engines", "It protects the possibility of human renewal and personal growth", "It strengthens the state's control over historical archives", "It eliminates the need for any data protection law"],
        answerIndex: 1,
        explanation: "忘れられる権利とは...人間らしく生まれ変わる権利として理解されなければならない — the right to be forgotten is the right to be reborn in a human way."
      },
      {
        q: "What does the passage say about privacy as a collective concern?",
        choices: ["It is solely a matter of individual discretion", "Leaking one person's data can enable inferences about others with similar attributes", "DNA databases have no impact on relatives", "Collective approaches are unnecessary in modern law"],
        answerIndex: 1,
        explanation: "一人のデータが漏洩すれば、類似の属性を持つ他者についても推論が可能となる — one person's leaked data enables inferences about others with similar attributes."
      },
      {
        q: "How does the passage frame the relationship between privacy and democracy?",
        choices: ["Privacy has no bearing on democratic governance", "Privacy concerns the survival of democracy itself, along with dignity and autonomy", "Democracy requires the abolition of all privacy protections", "Privacy is purely an economic matter for consumers"],
        answerIndex: 1,
        explanation: "それは人間の尊厳、自律、そして民主主義の存立に関わる根本的な営みである — privacy concerns human dignity, autonomy, and the survival of democracy."
      },
      {
        q: "Which N1 grammar point is used to convey 'even data collected with consent, if repurposed, is nothing other than a privacy invasion'?",
        choices: ["〜どころか", "〜にほかならない (nothing other than)", "〜ものを", "〜ずにはすまない"],
        answerIndex: 1,
        explanation: "The phrase プライバシーの侵害にほかならない uses 〜にほかならない ('nothing other than') to mark the strong identification."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-23 — The economics of Japan's defense policy
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-23",
    title: "日本[にほん]の防衛[ぼうえい]政策[せいさく]の経済学[けいざいがく]",
    titleReading: "にほんのぼうえいせいさくのけいざいがく",
    level: "N1",
    summary: "An economic analysis of Japan's shifting defense policy: the historic 1% GNP ceiling as a tool for postwar reconstruction, fiscal pressure from aging demographics, the contested spillover benefits of a domestic defense industry, opportunity costs against education and infrastructure, the burden of the US alliance, and the intertwining of security and economic strategy in areas like semiconductors.",
    estMinutes: 12,
    tags: ["defense", "economics", "fiscal policy", "US-Japan alliance", "industrial policy"],
    body: [
      "戦後[せんご]長[なが]きにわたり、日本[にほん]は平和憲法[へいわけんぽう]の下[もと]で専守防衛[せんしゅぼうえい]を基本方針[きほんほうしん]とし、防衛費[ぼうえいひ]を国内[こくない]総生産[そうせいさん]の百分[ひゃくぶん]の一[いち]に抑[おさ]えるという自[みずか]らの鎖[くさり]を戴[いただ]いてきた。この「百分[ひゃくぶん]の一[いち]方針[ほうしん]」は、経済[けいざい]復興[ふっこう]に資源[しげん]を集中[しゅうちゅう]させる戦略[せんりゃく]として機能[きのう]した。しかし冷戦[れいせん]構造[こうぞう]の終焉[しゅうえん]と中国[ちゅうごく]の台頭[たいとう]、北朝鮮[きたちょうせん]の核[かく]・ミサイル[みさいる]開発[かいはつ]を前[まえ]にして、この方針[ほうしん]は見直[みなお]しを余儀[よぎ]なくされている。安全保障[あんぜんほしょう]環境[かんきょう]の変化[へんか]は、単[たん]なる軍事[ぐんじ]上[じょう]の問題[もんだい]にとどまらず、日本[にほん]経済[けいざい]の構造[こうぞう]そのものに深[ふか]い影響[えいきょう]を及[およ]ぼしつつある。",
      "防衛費[ぼうえいひ]の増額[ぞうがく]は、政府[せいふ]財政[ざいせい]に新[あたら]たな重圧[じゅうあつ]を加[くわ]える。少子[しょうし]高齢化[こうれいか]に伴[ともな]う社会保障[しゃかいほしょう]費[ひ]の増大[ぞうだい]が既[すで]に国庫[こっこ]を圧迫[あっぱく]する中[なか]で、追加[ついか]の防衛[ぼうえい]予算[よさん]をいかに賄[まかな]うかは容易[ようい]ならぬ問題[もんだい]である。政府[せいふ]は増税[ぞうぜい]か国債[こくさい]発行[はっこう]か、あるいは他[た]の予算[よさん]の削減[さくげん]か、いずれかの選択[せんたく]を迫[せま]られている。いずれの道[みち]を選[えら]ぼうとも、痛[いた]みを伴[ともな]わない選択肢[せんたくし]は存在[そんざい]しない。この点[てん]で、防衛[ぼうえい]政策[せいさく]は紛[まぎ]れもなく経済[けいざい]政策[せいさく]でもある。",
      "一方[いっぽう]で、防衛[ぼうえい]産業[さんぎょう]そのものが経済[けいざい]活性化[かっせいか]の手段[しゅだん]として語[かた]られることもある。防衛[ぼうえい]装備[そうび]の国産[こくさん]化[か]は、技術革新[ぎじゅつかくしん]を促[うなが]し、関連[かんれん]産業[さんぎょう]に雇用[こよう]を生[しょう]み出[だ]すと主張[しゅちょう]される。実際[じっさい]、航空[こうくう]宇宙[うちゅう]やサイバーセキュリティの分野[ぶんや]では、軍事[ぐんじ]技術[ぎじゅつ]が民間[みんかん]に転用[てんよう]可能[かのう]なケースも少[すく]なくない。しかし、この議論[ぎろん]には慎重[しんちょう]な検討[けんとう]が必要[ひつよう]である。防衛[ぼうえい]産業[さんぎょう]への過度[かど]な依存[いぞん]は、経済[けいざい]の非効率[ひこうりつ]を招[まね]き、平和[へいわ]産業[さんぎょう]としての日本[にほん]の独自性[どくじせい]を揺[ゆる]がしかねない。",
      "防衛費[ぼうえいひ]の経済的[けいざいてき]効果[こうか]を評価[ひょうか]するには、機会費用[きかいひよう]の概念[がいねん]が不可欠[ふかけつ]である。限[かぎ]られた財政[ざいせい]資源[しげん]を防衛[ぼうえい]に振[ふ]り向[む]けた分[ぶん]だけ、教育[きょういく]や研究[けんきゅう]開発[かいはつ]、社会[しゃかい]インフラへの投資[とうし]が削[けず]られる。このトレードオフを直視[ちょくし]することなしに、防衛[ぼうえい]政策[せいさく]の経済的[けいざいてき]意義[いぎ]を論[ろん]じることはできない。とりわけ少子化[しょうしか]が進[すす]む日本[にほん]において、人[ひと]への投資[とうし]こそが長期的[ちょうきてき]な国力[こくりょく]の源泉[げんせん]であることを忘[わす]れてはなるまい。",
      "日米[にちべい]同盟[どうめい]の経済的[けいざいてき]側面[そくめん]も看過[かんか]できない。在日米軍[ざいにちべいぐん]の駐留[ちゅうりゅう]経費[けいひ]の日本[にほん]側[がわ]負担[ふたん]、いわゆる「思[おも]いやり予算[よさん]」は、毎年[まいとし]数千億円[すうせんおくえん]に上[のぼ]る。同盟[どうめい]の維持[いじ]それ自体[じたい]に経費[けいひ]がかさむのである。さらに、米国[べいこく]産防衛[さんぼうえい]装備[そうび]の購入[こうにゅう]は、貿易[ぼうえき]不均衡[ふきんこう]の一因[いちいん]ともなっている。安全保障[あんぜんほしょう]を米国[べいこく]に依存[いぞん]する構造[こうぞう]は、経済面[けいざいめん]でも自立性[じりつせい]を損[そこな]う側面[そくめん]を孓[ふし]んでいる。",
      "防衛[ぼうえい]政策[せいさく]と経済[けいざい]政策[せいさく]の関係[かんけい]は、単[たん]なる予算[よさん]配分[はいぶん]の問題[もんだい]にとどまらない。国家[こっか]の安全保障[あんぜんほしょう]戦略[せんりゃく]は、貿易[ぼうえき]政策[せいさく]、エネルギー政策[せいさく]、技術[ぎじゅつ]戦略[せんりゃく]と密接[みっせつ]に絡[から]み合[あ]う。例[たと]えば、半導体[はんどうたい]の安定[あんてい]供給[きょうきゅう]を確保[かくほ]することは、経済[けいざい]上[じょう]の課題[かだい]であると同時[どうじ]に安全保障[あんぜんほしょう]上[じょう]の要請[ようせい]でもある。このように、経済[けいざい]と安全保障[あんぜんほしょう]の境界[きょうかい]はますます曖昧[あいまい]になり、両者[りょうしゃ]を切[き]り離[はな]して論[ろん]じることは現実[げんじつ]に即[そく]さない。",
      "加[くわ]えて、防衛[ぼうえい]政策[せいさく]の転換[てんかん]は国際社会[こくさいしゃかい]における日本[にほん]の信用[しんよう]にも影響[えいきょう]を及[およ]ぼす。平和国家[へいわこっか]としての日本[にほん]のイメージは、軍事力[ぐんじりょく]の行使[こうし]に対[たい]する自[みずか]らの鎖[くさり]から生[う]まれたものである。このイメージを捨[す]ててまで防衛力[ぼうえいりょく]を拡大[かくだい]することが、長期的[ちょうきてき]に日本[にほん]の国益[こくえき]に資[し]するかは、慎重[しんちょう]な吟味[ぎんみ]を要[よう]する。経済的[けいざいてき]恩恵[おんけい]と外交的[がいこうてき]費用[ひよう]を天秤[てんびん]にかけ、総合的[そうごうてき]に判断[はんだん]することが求[もと]められる。",
      "結論[けつろん]として、日本[にほん]の防衛[ぼうえい]政策[せいさく]は純粋[じゅんすい]な軍事[ぐんじ]問題[もんだい]ではなく、財政[ざいせい]、産業[さんぎょう]、貿易[ぼうえき]、外交[がいこう]が絡[から]み合[あ]う複合的[ふくごうてき]な政策[せいさく]領域[りょういき]である。防衛費[ぼうえいひ]の増額[ぞうがく]それ自体[じたい]を善悪[ぜんあく]で断[だん]ずるのは拙速[せっそく]に過[す]ぎよう。重要[じゅうよう]なのは、限[かぎ]られた資源[しげん]をいかに配分[はいぶん]し、長期的[ちょうきてき]な国益[こくえき]との整合[せいごう]を図[はか]るかである。この問[と]いに向[む]き合[あ]うことなしに、日本[にほん]の未来[みらい]は語[かた]れまい。"
    ],
    translation: [
      "For a long stretch after the war, Japan, under its pacifist constitution, adhered to a basic policy of exclusive defense and imposed on itself the restraint of keeping defense spending within one percent of gross domestic product. This \"one-percent guideline\" functioned as a strategy to concentrate resources on economic reconstruction. But with the end of the Cold War structure, the rise of China, and North Korea's nuclear and missile development, this policy is being forced into review. The changing security environment is no longer a purely military matter; it is having a profound impact on the structure of the Japanese economy itself.",
      "Increases in defense spending add new pressure to government finances. With the growth of social security costs accompanying the declining birthrate and aging population already pressuring the national treasury, the question of how to finance additional defense budgets is no easy matter. The government is being forced into one of three choices: tax hikes, bond issuance, or cuts elsewhere. Whichever path it chooses, no painless option exists. In this respect, defense policy is unmistakably also economic policy.",
      "On the other hand, the defense industry itself is sometimes spoken of as a means of economic revitalization. Domestic production of defense equipment is claimed to spur technological innovation and create employment in related industries. Indeed, in fields such as aerospace and cybersecurity, there are not a few cases where military technology can be diverted to civilian use. Yet this argument requires careful examination. Excessive dependence on the defense industry may invite economic inefficiency and shake Japan's distinctive identity as a peace-oriented industrial nation.",
      "Evaluating the economic effects of defense spending requires the concept of opportunity cost. Every fiscal resource directed to defense is taken from investment in education, research and development, and social infrastructure. Without confronting this trade-off, one cannot discuss the economic significance of defense policy. Especially in Japan, where the declining birthrate is progressing, one must not forget that investment in people is the very source of long-term national strength.",
      "The economic dimension of the US-Japan alliance cannot be overlooked either. Japan's share of the stationing costs of US forces in Japan, the so-called \"sympathy budget,\" runs to several hundred billion yen each year. Maintaining the alliance itself incurs heavy expenses. Furthermore, the purchase of US-made defense equipment has become one cause of trade imbalance. The structure of relying on the United States for security harbors a side that undermines economic autonomy as well.",
      "The relationship between defense policy and economic policy is not confined to a matter of budget allocation. A nation's security strategy is intricately entangled with trade policy, energy policy, and technology strategy. For example, securing a stable supply of semiconductors is at once an economic challenge and a security imperative. In this way, the boundary between economy and security grows ever more blurred, and discussing the two separately fails to correspond to reality.",
      "Moreover, a shift in defense policy also affects Japan's credibility in the international community. Japan's image as a peace-loving nation was born of its own restraint regarding the exercise of military force. Whether expanding defense capability even at the cost of discarding this image serves Japan's long-term national interest requires careful scrutiny. Economic benefits and diplomatic costs must be weighed and judged comprehensively.",
      "In conclusion, Japan's defense policy is not a purely military matter but a complex policy domain in which fiscal, industrial, trade, and diplomatic concerns are entangled. To pronounce judgment on the increase of defense spending itself as good or evil would be overly hasty. What matters is how limited resources are allocated and brought into alignment with long-term national interest. Without facing this question, the future of Japan cannot be discussed."
    ],
    questions: [
      {
        q: "According to the passage, what was the strategic function of the 'one-percent guideline' for defense spending?",
        choices: ["To build the world's largest military", "To concentrate resources on economic reconstruction after the war", "To provoke neighboring countries militarily", "To replace the US-Japan alliance entirely"],
        answerIndex: 1,
        explanation: "この「百分の一の方針」は、経済復興に資源を集中させる戦略として機能した — the one-percent guideline functioned as a strategy to concentrate resources on economic reconstruction."
      },
      {
        q: "What does the author argue is necessary to evaluate the economic effects of defense spending?",
        choices: ["The concept of opportunity cost", "The theory of comparative advantage", "The Phillips curve", "The quantity theory of money"],
        answerIndex: 0,
        explanation: "防衛費の経済的効果を評価するには、機会費用の概念が不可欠である — the concept of opportunity cost is indispensable for evaluating defense spending's economic effects."
      },
      {
        q: "What dual nature does the passage identify in securing stable semiconductor supply?",
        choices: ["Purely civilian and unrelated to security", "Purely military with no economic dimension", "At once an economic challenge and a security imperative", "An environmental matter unrelated to either"],
        answerIndex: 2,
        explanation: "半導体の安定供給を確保することは、経済上の課題であると同時に安全保障上の要請でもある — securing semiconductor supply is both an economic task and a security imperative."
      },
      {
        q: "What caution does the passage raise about Japan's image as a peace-loving nation?",
        choices: ["The image should be discarded immediately", "Discarding it for defense expansion requires careful scrutiny of long-term national interest", "The image is purely military and unrelated to economics", "The image has no diplomatic cost whatsoever"],
        answerIndex: 1,
        explanation: "このイメージを捨ててまで防衛力を拡大することが、長期的に日本の国益に資するかは、慎重な吟味を要する — expanding defense at the cost of this image requires careful scrutiny of whether it serves long-term national interest."
      },
      {
        q: "Which N1 grammar point is used to convey 'no matter which path is chosen, no painless option exists'?",
        choices: ["〜いかんによらず", "〜いずれにせよ / 〜であろうと (whichever)", "〜ことなしに", "〜たるもの"],
        answerIndex: 1,
        explanation: "いずれの道を選ぼうとも uses 〜であろうと/〜うと ('no matter which'), an N1 pattern indicating that the outcome holds regardless of the chosen path."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-24 — A literary critique of contemporary Japanese fiction
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-24",
    title: "現代[げんだい]日本[にほん]文学[ぶんがく]への批評[ひひょう]",
    titleReading: "げんだいにほんぶんがくへのひひょう",
    level: "N1",
    summary: "A literary critique of contemporary Japanese fiction: the post-Murakami globalization of the Japanese novel, the rise of 'light novel' sensibilities in serious literature, the eclipse of political consciousness, the persistence of atomic-bomb literature as ethical horizon, the question of who the contemporary Japanese reader is, and the demand for a renewed commitment to language that resists market-driven flattening.",
    estMinutes: 13,
    tags: ["literature", "literary criticism", "contemporary fiction", "Murakami", "language"],
    body: [
      "現代[げんだい]日本[にほん]文学[ぶんがく]を概観[がいかん]するとき、否[いな]応[よう]なく直面[ちょくめん]するのは、村上春樹[むらかみはるき]という巨大[きょだい]な現象[げんしょう]である。彼[かれ]の作品[さくひん]は世界中[せかいじゅう]で翻訳[ほんやく]され、日本[にほん]文学[ぶんがく]の代名詞[だいめいし]とさえ化[か]した。しかしこの成功[せいこう]は、往[おう]々にして逆説[ぎゃくせつ]的[てき]な影響[えいきょう]を及[およ]ぼしている。村上[むらかみ]的[てき]な文体[ぶんたい]、すなわち翻訳[ほんやく]調[ちょう]の平明[へいめい]な文章[ぶんしょう]が、若[わか]い世代[せだい]の規範[きはん]となり、日本語[にほんご]本来[ほんらい]の多様性[たようせい]を萎縮[いしゅく]させていると指摘[してき]する批評家[ひひょうか]も少[すく]なくない。",
      "さらに深刻[しんこく]なのは、ライトノベル的[てき]な感性[かんせい]が純文学[じゅんぶんがく]の領域[りょういき]にまで浸透[しんとう]しているという事態[じたい]である。キャラクターの類型化[るいけいか]、プロットの様式化[ようしきか]、読者[どくしゃ]の願望[がんぼう]に迎合[げいごう]する物語[ものがたり]構造[こうぞう]。これらは大衆文学[たいしゅうぶんがく]の魅力[みりょく]でもあるが、純文学[じゅんぶんがく]がこれに同化[どうか]すれば、文学[ぶんがく]が社会[しゃかい]に提示[ていじ]すべき異議[いぎ]唱導[しょうどう]の機能[きのう]は著[いちじる]しく損[そこな]われる。文学[ぶんがく]とは、読者[どくしゃ]の快適[かいてき]さを裏切[うらぎ]ることにこそ本来的[ほんらいてき]な意義[いぎ]があるのではなかろうか。",
      "もっとも、かつての純文学[じゅんぶんがく]が政治的[せいじてき]な意識[いしき]を色濃[いろこ]く帯[お]びていたことを懐古[かいこ]するのも、一[ひと]つの解答[かいとう]に過[す]ぎない。戦後派[せんごは]の作家[さっか]たちは、戦争[せんそう]と敗北[はいぼく]の経験[けいけん]から、国家[こっか]や歴史[れきし]に対[たい]する峻厳[しゅんげん]な視線[しせん]を鍛[きた]え上[あ]げた。しかし現代[げんだい]の作家[さっか]の多[おお]くは、政治[せいじ]という宏大[こうだい]な物語[ものがたり]への不信[ふしん]から、もっぱら微視的[びしてき]な日常[にちじょう]の描写[びょうしゃ]に安住[あんじゅう]している。この傾向[けいこう]を単[たん]なる退潮[たいちょう]と断[だん]ずるのは粗雑[そざつ]であろうが、文学[ぶんがく]が社会[しゃかい]全体[ぜんたい]の構造的[こうぞうてき]問題[もんだい]へ向[む]かう視線[しせん]を失[うしな]いつつあるのは事実[じじつ]である。",
      "原爆文学[げんばくぶんがく]の伝統[でんとう]も、現代[げんだい]において複雑[ふくざつ]な位置[いち]を占[し]めている。大江健三郎[おおえけんざぶろう]や林京子[はやしきょうこ]らが切[き]り開[ひら]いたこの主題[しゅだい]は、人類[じんるい]の生存[せいぞん]そのものを問[と]う倫理的[りんりてき]な地平[ちへい]を提示[ていじ]した。しかし後[ご]の世代[せだい]の作家[さっか]たちは、しばしばこの重圧[じゅうあつ]から逃[に]げ出[だ]そうとする。被爆[ひばく]体験[たいけん]の直接[ちょくせつ]性[せい]が薄[うす]れるにつれ、文学[ぶんがく]は核[かく]という問題[もんだい]を風化[ふうか]させかねない。もとより全[すべ]ての作家[さっか]が原爆[げんばく]を扱[あつか]う義務[ぎむ]はないが、この主題[しゅだい]が日本[にほん]文学[ぶんがく]の倫理的[りんりてき]な原点[げんてん]であることを忘却[ぼうやく]してはなるまい。",
      "これらの問題[もんだい]の背景[はいけい]にあるのは、文学[ぶんがく]を取[と]り巻[ま]く市場[しじょう]の変容[へんよう]である。出版[しゅっぱん]不況[ふきょう]が長期化[ちょうきか]する中[なか]で、編集者[へんしゅうしゃ]は売[う]れる作品[さくひん]を切望[せつぼう]する。その結果[けっか]、文学的[ぶんがくてき]な冒険[ぼうけん]よりも、既存[きぞん]のフォーマットに収[おさ]まる安全[あんぜん]な作品[さくひん]が優先[ゆうせん]される。文芸[ぶんげい]誌[し]の休刊[きゅうかん]が相次[あいつ]ぎ、新[あたら]しい才能[さいのう]が芽吹[めぶ]く土壌[どじょう]そのものが失[うしな]われつつある。市場[しじょう]の論理[ろんり]が文学[ぶんがく]の論理[ろんり]を凌駕[りょうが]する時[とき]、文化[ぶんか]全体[ぜんたい]の貧困化[ひんこんか]は避[さ]けられまい。",
      "一方[いっぽう]で、若[わか]い世代[せだい]の作家[さっか]たちが新[あたら]しい言語[げんご]感覚[かんかく]を模索[もさく]している側面[そくめん]も見逃[みのが]せない。インターネット[いんたーねっと]上[じょう]の表象[ひょうしょう]、移民[いみん]やマイノリティの経験[けいけん]、ジェンダーの多様性[たようせい]。これらを主題化[しゅだいか]する試[こころ]みは、日本[にほん]文学[ぶんがく]の主題[しゅだい]を拡張[かくちょう]する可能性[かのうせい]を秘[ひぞ]めている。例[たと]えば、在日[ざいにち]韓国[かんこく]・朝鮮人[ちょうせんじん]の作家[さっか]たちの登場[とうじょう]は、日本語[にほんご]という言語[げんご]の境界[きょうかい]を揺[ゆ]さぶる。文学[ぶんがく]が再[ふたた]び境界[きょうかい]を問[と]い直[なお]す営[いとな]みに立[た]ち戻[もど]るなら、そこに新[あたら]たな可能性[かのうせい]が開[ひら]けるかもしれない。",
      "読者[どくしゃ]の側[がわ]にも変化[へんか]が生[しょう]じている。かつての文学[ぶんがく]読者[どくしゃ]は、難解[なんかい]なテクストに挑[いど]むことを厭[いと]わなかった。しかし現代[げんだい]の読者[どくしゃ]は、SNSの短[みじか]い投稿[とうこう]に慣[な]れ、長文[ちょうぶん]を読[よ]む忍耐[にんたい]力[りょく]を失[うしな]いつつある。この読者[どくしゃ]の変容[へんよう]は、作家[さっか]の文体[ぶんたい]にも影響[えいきょう]を及[およ]ぼす。結果[けっか]として、文学[ぶんがく]全体[ぜんたい]が消費[しょうひ]しやすい短[みじか]い文章[ぶんしょう]へと平均化[へいきんか]されていく。読者[どくしゃ]と作家[さっか]の間[あいだ]の相互作用[そうごさよう]が、日本[にほん]文学[ぶんがく]の水準[すいじゅん]そのものを下[さ]げていると言[い]えなくもない。",
      "結論[けつろん]として、現代[げんだい]日本[にほん]文学[ぶんがく]が直面[ちょくめん]する課題[かだい]は、単[たん]なる才能[さいのう]の枯渇[こかつ]ではなく、構造的[こうぞうてき]な変容[へんよう]の中[なか]に置[お]かれた文学[ぶんがく]という営[いとな]み自体[じたい]の危機[きき]である。市場[しじょう]、読者[どくしゃ]、言語[げんご]、主題[しゅだい]。これらすべてが同時[どうじ]に変質[へんしつ]する中[なか]で、文学[ぶんがく]が固有[こゆう]の意義[いぎ]を保[たも]つには、言語[げんご]に対[たい]する倫理的[りんりてき]な覚悟[かくご]が求[もと]められる。快適[かいてき]さを裏切[うらぎ]り、読者[どくしゃ]を不快[ふかい]にさせうる文学[ぶんがく]こそ、未来[みらい]への言葉[ことば]を担[にな]い得[う]るのである。"
    ],
    translation: [
      "When surveying contemporary Japanese literature, one inevitably confronts the enormous phenomenon that is Haruki Murakami. His works have been translated across the world and have even become a synonym for Japanese literature. Yet this success, more often than not, has produced a paradoxical effect. Quite a few critics point out that the Murakami-esque style — namely the plain, translation-like prose — has become a norm for the younger generation, withering the inherent diversity of the Japanese language.",
      "More serious is the fact that a light-novel sensibility has permeated even the domain of serious literature. Typified characters, stylized plots, narrative structures that pander to readers' wishes. These are also the charm of popular literature, but if serious literature assimilates to them, the function of dissent that literature ought to present to society is markedly damaged. Does not literature, after all, find its proper significance precisely in betraying the reader's comfort?",
      "To be sure, to merely reminisce about the once strongly political consciousness of serious literature is but one answer. The postwar-school writers forged, from the experience of war and defeat, a severe gaze toward state and history. But many contemporary writers, out of distrust for the grand narrative of politics, dwell contentedly in microscopic description of the everyday. To dismiss this tendency as mere ebb would be crude, but it is a fact that literature is losing the gaze toward the structural problems of society as a whole.",
      "The tradition of atomic-bomb literature also occupies a complicated position in the present. The theme opened up by writers such as Kenzaburo Oe and Kyoko Hayashi presented an ethical horizon that questioned the very survival of humanity. But writers of later generations often try to flee from this pressure. As the immediacy of the experience of the bombing fades, literature may let the nuclear question weather away. To be sure, not every writer is obliged to treat the atomic bomb, but to forget that this theme is the ethical origin of Japanese literature would be ill-advised.",
      "Behind these problems lies the transformation of the market that surrounds literature. As the publishing slump prolongs, editors desperately want works that sell. As a result, safe works that fit into existing formats are prioritized over literary adventure. Literary magazines cease publication one after another, and the very soil from which new talent can bud is being lost. When the logic of the market overrides the logic of literature, the impoverishment of culture as a whole cannot be avoided.",
      "On the other hand, the aspect in which younger writers grope for a new sense of language cannot be overlooked. Online representations, the experiences of immigrants and minorities, gender diversity. Attempts to thematize these hold the potential to expand the themes of Japanese literature. For instance, the emergence of writers who are resident Koreans in Japan shakes the boundary of the Japanese language itself. If literature returns to the endeavor of questioning boundaries anew, new possibilities may open there.",
      "Change has also arisen on the reader's side. Readers of literature past did not shrink from challenging obscure texts. But contemporary readers, accustomed to short posts on social media, are losing the patience to read long texts. This transformation of the reader also affects the writers' style. As a result, literature as a whole becomes averaged out into short, easily consumable prose. It cannot be denied that the interaction between reader and writer is lowering the very standard of Japanese literature.",
      "In conclusion, the challenge confronting contemporary Japanese literature is not a mere exhaustion of talent but a crisis of literature itself, placed amid structural transformation. Market, reader, language, theme. With all of these changing at once, what is required to retain literature's distinctive significance is an ethical resolve toward language. It is literature that can betray comfort and make readers uncomfortable that can carry words for the future."
    ],
    questions: [
      {
        q: "What paradoxical effect does the passage attribute to Murakami's global success?",
        choices: ["It expanded the diversity of the Japanese language", "It made the translation-like plain style a norm, withering the inherent diversity of Japanese", "It had no influence on younger writers", "It removed the need for any literary translation"],
        answerIndex: 1,
        explanation: "村上的な文体、すなわち翻訳調の平明な文章が、若い世代の規範となり、日本語本来の多様性を萎縮させている — Murakami's translation-like plain prose became a norm, withering the inherent diversity of Japanese."
      },
      {
        q: "According to the passage, where does literature's proper significance lie?",
        choices: ["In pandering to readers' wishes", "In betraying the reader's comfort", "In reproducing existing formats safely", "In imitating light-novel conventions"],
        answerIndex: 1,
        explanation: "文学とは、読者の快適さを裏切ることにこそ本来的な意義がある — literature's proper significance lies precisely in betraying the reader's comfort."
      },
      {
        q: "What does the passage say about atomic-bomb literature and contemporary writers?",
        choices: ["Contemporary writers all enthusiastically take up the theme", "Later-generation writers often try to flee from the pressure of this theme", "Atomic-bomb literature has no ethical significance", "The theme has been fully exhausted and closed"],
        answerIndex: 1,
        explanation: "後の世代の作家たちは、しばしばこの重圧から逃げ出そうとする — later-generation writers often try to flee from the pressure of this theme."
      },
      {
        q: "What is the passage's diagnosis of the contemporary reader's transformation?",
        choices: ["Readers are more patient than ever with long texts", "Readers, accustomed to short social-media posts, are losing the patience to read long texts", "Readers refuse all forms of short text", "Readers have stopped reading Japanese literature entirely"],
        answerIndex: 1,
        explanation: "現代の読者は、SNSの短い投稿に慣れ、長文を読む忍耐力を失いつつある — contemporary readers, accustomed to short SNS posts, are losing patience for long texts."
      },
      {
        q: "Which N1 grammar point is used to convey 'literature that can betray comfort and make readers uncomfortable can carry words for the future'?",
        choices: ["〜どころか", "〜こそ (it is precisely ... that)", "〜かねない", "〜ことなしに"],
        answerIndex: 1,
        explanation: "快適さを裏切り、読者を不快にさせうる文学こそ、未来への言葉を担い得る uses 〜こそ ('precisely/emphatically') to single out the literature that can carry future words."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-25 — The sociology of Japan's declining birth rate
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-25",
    title: "少子化[しょうしか]の社会学[しゃかいがく]",
    titleReading: "しょうしかのしゃかいがく",
    level: "N1",
    summary: "A sociological study of Japan's declining birth rate: the limits of economic explanations, the gendered burden of child-rearing in the ie family system, the erosion of community ties that once supported parenting, youth precarity and the deferred life course, the failure of policy that targets women rather than men, and the need to reconfigure the social contract itself.",
    estMinutes: 12,
    tags: ["sociology", "demography", "gender", "family", "policy"],
    body: [
      "日本[にほん]の少子化[しょうしか]は、もはや単[たん]なる人口[じんこう]統計[とうけい]上[じょう]の問題[もんだい]にとどまらず、社会[しゃかい]の存立[そんりつ]そのものに関[かん]わる構造的[こうぞうてき]な危機[きき]として認識[にんしき]されるべきである。合計[ごうけい]特殊[とくしゅ]出生[しゅっしょう]率[りつ]は長期[ちょうき]にわたり低[てい]水準[すいじゅん]が続[つづ]き、人口[じんこう]減少[げんしょう]時代[じだい]に突入[とつにゅう]した。この事態[じたい]を単[たん]なる経済的[けいざいてき]な負担[ふたん]の問題[もんだい]と解釈[かいしゃく]する見解[けんかい]は広[ひろ]く行[おこな]き渡[わた]っているが、それは事態[じたい]の本質[ほんしつ]を捉[とら]え損[そこ]なっていると言[い]わなければならない。少子化[しょうしか]の根底[こんてい]には、性[せい]と家族[かぞく]と労働[ろうどう]の変容[へんよう]という、社会[しゃかい]学的[がくてき]な重層的[じゅうそうてき]な構造[こうぞう]が横[よこ]たわっているのである。",
      "第一[だいいち]に指摘[してき]すべきは、育児[いくじ]という営[いとな]みが女性[じょせい]に不当[ふとう]に偏[かたよ]って負担[ふたん]されているという事実[じじつ]である。日本[にほん]の家族[かぞく]制度[せいど]は、明治[めいじ]期[き]に形塑[けいそ]された家[いえ]制度[せいど]の遺産[いさん]を色濃[いろこ]く残[のこ]している。近代[きだい]化[か]が進[すす]んだとはいえ、妻[つま]が家庭[かてい]を守[まも]るという性別[せいべつ]役割[やくわり]分業[ぶんぎょう]は依然[いぜん]として根強[ねづよ]い。この構造[こうぞう]の下[もと]では、女性[じょせい]が就労[しゅうろう]を続[つづ]けつつ子[こ]を育[そだ]てることは、二重[にじゅう]の負担[ふたん]を強[し]いるに等[ひと]しい。少子化[しょうしか]の直接的[ちょくせつてき]な要因[よういん]は、女性[じょせい]がこの負担[ふたん]を拒否[きょひ]していることに他[ほか]ならない。",
      "第二[だいに]に、地域[ちいき]共同体[きょうどうたい]の崩壊[ほうかい]が育児[いくじ]の困難[こんなん]を増幅[ぞうふく]している。かつては三[さん]世代[せだい]同居[どうきょ]や近所[きんじょ]の助[たす]け合[あ]いが、子育[こそだ]ての負担[ふたん]を分散[ぶんさん]させた。しかし都市化[としか]と核家族[かくかぞく]化[か]が進[すす]む中[なか]で、育児[いくじ]は夫婦[ふうふ]、とりわけ母親[ぼぼ]の孤立[こりつ]した営[いとな]みと化[か]した。この孤立[こりつ]は、心理的[しんりてき]な圧迫[あっぱく]のみならず、知恵[ちえ]の伝承[でんしょう]の断絶[だんぜつ]を意味[いみ]する。子育[こそだ]てを社会[しゃかい]全体[ぜんたい]で支[ささ]えるという観点[かんてん]から、地域[ちいき]の再生[さいせい]を図[はか]る必要[ひつよう]がある。",
      "第三[だいさん]に、若者[わかもの]の経済的[けいざいてき]な不安定[ふあんてい]さが、結婚[けっこん]と出産[しゅっさん]を先送[さきおく]りする主要[しゅよう]な原因[げんいん]となっている。非正規[ひせいき]雇用[こよう]の拡大[かくだい]は、若[わか]い男性[だんせい]の経済[けいざい]的[てき]基盤[きばん]を脆弱[ぜいじゃく]にし、結婚[けっこん]への道[みち]を閉[と]ざす。一方[いっぽう]、女性[じょせい]の高学歴化[こうがくれきか]が進[すす]んでも、出産[しゅっさん]を機[き]にキャリアを断[た]ち切[き]られるリスクは相変[あいか]わらず残[のこ]る。この二[ふた]つの要因[よういん]が絡[から]み合[あ]い、若者[わかもの]は人生[じんせい]の岐路[きろ]で先送[さきおく]りを選[えら]ばざるを得[え]ない状況[じょうきょう]に追[お]い込[こ]まれている。",
      "第四[だいよん]に、政策[せいさく]の方向性[ほうこうせい]そのものに問[と]いがある。これまで政府[せいふ]は、子育[こそだ]て支援[しえん]策[さく]として保育所[ほいくしょ]の拡充[かくじゅう]や児童[じどう]手当[てあて]の支給[しきゅう]を中心[ちゅうしん]に講[こう]じてきた。しかしこれらの施策[しさく]は、子[こ]を持[も]つ女性[じょせい]を支援[しえん]するという枠組[わくぐ]みの中[なか]に留[とど]まり、男性[だんせい]の役割[やくわり]を問[と]い直[なお]す視点[してん]を欠[か]いていた。男性[だんせい]の育児[いくじ]参加[さんか]を促[うなが]す制度[せいど]的[てき]な工夫[くふう]が不十分[ふじゅうぶん]であったため、性別[せいべつ]役割[やくわり]分業[ぶんぎょう]の再構築[さいこうちく]は進[すす]まなかった。政策[せいさく]が女性[じょせい]を対象[たいしょう]とする限[かぎ]り、根本的[こんぽんてき]な解決[かいけつ]は望[のぞ]めまい。",
      "さらに、少子化[しょうしか]を自然[しぜん]の変化[へんか]と見[み]なす言説[げんせつ]には警戒[けいかい]が必要[ひつよう]である。これを人口[じんこう]の生物学的[せいぶつがくてき]な運命[うんめい]と語[かた]ることで、社会[しゃかい]の構造[こうぞう]的[てき]な問題[もんだい]が隠蔽[いんぺい]される恐[おそ]れがある。実際[じっさい]には、少子化[しょうしか]は個[こ]人[じん]の選択[せんたく]の集積[しゅうせき]であると同時[どうじ]に、社会[しゃかい]がその選択[せんたく]を強要[きょうよう]した結果[けっか]でもある。構造[こうぞう]を個人[こじん]の責任[せきにん]に転嫁[てんか]する論理[ろんり]には、慎重[しんちょう]な検討[けんとう]が要[よう]される。",
      "これらの分析[ぶんせき]を統合[とうごう]すれば、少子化[しょうしか]の処方箋[しょほうせん]は単[たん]なる経済的[けいざいてき]な給付[きゅうふ]の拡大[かくだい]ではあり得[え]ないことが分[わ]かる。求[もと]められるのは、性別[せいべつ]役割[やくわり]の再定義[さいていぎ]、労働[ろうどう]と家庭[かてい]の調和[ちょうわ]、地域[ちいき]共同体[きょうどうたい]の再構築[さいこうちく]、そして若者[わかもの]の経済的[けいざいてき]な安定[あんてい]という、複数[ふくすう]の次元[じげん]にまたがる包括的[ほうかつてき]な変革[へんかく]である。この変革[へんかく]は、社会[しゃかい]契約[けいやく]そのものの書[か]き換[か]えを意味[いみ]する。少子化[しょうにか]への対処[たいしょ]は、社会[しゃかい]の未来[みらい]を問[と]う営[いとな]みなのである。",
      "結論[けつろん]として、少子化[しょうしか]は個[こ]人[じん]の選択[せんたく]の問題[もんだい]ではなく、社会[しゃかい]が自[みずか]らの構造[こうぞう]を問[と]い直[なお]す契機[けいき]である。我[わ]われは、子[こ]を持[も]つことの負担[ふたん]を個[こ]人[じん]に押[お]し付[つ]ける社会[しゃかい]から、共[とも]に支[ささ]え合[あ]う社会[しゃかい]への転換[てんかん]を迫[せま]られている。この転換[てんかん]を成[な]し遂[と]げ得[う]るか否[いな]かが、日本[にほん]社会[しゃかい]の未来[みらい]を決定[けってい]づけるであろう。"
    ],
    translation: [
      "Japan's declining birth rate is no longer a mere matter of demographic statistics; it must be recognized as a structural crisis bearing on the very survival of society. The total fertility rate has remained at a low level over the long term, and the country has entered an era of population decline. The interpretation that this situation is simply a matter of economic burden is widespread, but one must say it fails to grasp the essence of the matter. At the base of the declining birth rate lies a sociologically multi-layered structure: the transformation of gender, family, and labor.",
      "The first point to be made is the fact that the endeavor of child-rearing falls disproportionately on women. The Japanese family system retains a strong legacy of the ie household system shaped in the Meiji period. Even as modernization has progressed, the gendered division of labor — with the wife guarding the home — remains deeply rooted. Under this structure, for a woman to continue working while raising children is tantamount to imposing a double burden. The direct cause of the declining birth rate is nothing other than women's refusal of this burden.",
      "Second, the collapse of community amplifies the difficulty of child-rearing. Once, three-generation co-residence and mutual neighborhood aid distributed the burden of raising children. But amid advancing urbanization and the shift to nuclear families, child-rearing has become an isolated endeavor of couples, especially mothers. This isolation means not only psychological pressure but a rupture in the transmission of wisdom. From the perspective of supporting child-rearing as a whole society, the regeneration of community must be pursued.",
      "Third, the economic precarity of youth is a major cause of deferring marriage and childbirth. The expansion of non-regular employment has weakened the economic foundations of young men, closing the path to marriage. On the other hand, even as women become more highly educated, the risk of having one's career severed at childbirth remains. These two factors intertwine, driving the young into a situation where they have no choice but to defer at life's crossroads.",
      "Fourth, the very direction of policy is open to question. To date the government has chiefly undertaken measures such as the expansion of daycare centers and the payment of child allowances as child-rearing support. But these measures have remained within the framework of supporting women who have children, lacking the perspective of rethinking men's roles. Because institutional ingenuity to promote men's participation in child-rearing has been insufficient, the reconstruction of the gendered division of labor has not advanced. As long as policy targets women alone, no fundamental solution can be hoped for.",
      "Furthermore, caution is needed toward discourses that treat the declining birth rate as a natural change. By framing it as the biological destiny of population, there is a risk of concealing the structural problems of society. In fact, the declining birth rate is at once an accumulation of individual choices and a result that society has coerced those choices into. The logic of transferring structural responsibility onto the individual requires careful examination.",
      "Integrating these analyses, one can see that the prescription for the declining birth rate cannot be merely an expansion of economic benefits. What is required is a comprehensive transformation spanning multiple dimensions: the redefinition of gender roles, the harmony of labor and home, the reconstruction of community, and the economic stability of youth. This transformation entails rewriting the social contract itself. Responding to the declining birth rate is an endeavor that questions the future of society.",
      "In conclusion, the declining birth rate is not a matter of individual choice but an occasion for society to rethink its own structure. We are pressed to transform from a society that pushes the burden of having children onto individuals to one that supports one another. Whether this transformation can be accomplished will determine the future of Japanese society."
    ],
    questions: [
      {
        q: "What does the passage identify as the direct cause of Japan's declining birth rate?",
        choices: ["Women's refusal of the disproportionate child-rearing burden imposed on them", "A sudden biological infertility in the population", "A cultural rejection of all marriage customs", "A lack of consumer interest in children's goods"],
        answerIndex: 0,
        explanation: "少子化の直接的な要因は、女性がこの負担を拒否していることに他ならない — the direct cause is women refusing the burden disproportionately placed on them."
      },
      {
        q: "What gap does the passage identify in past Japanese child-rearing policy?",
        choices: ["It focused too much on men's roles and neglected women", "It lacked the perspective of rethinking men's roles and remained within a women-targeted framework", "It abolished all economic support entirely", "It was identical to Nordic family policy"],
        answerIndex: 1,
        explanation: "これらの施策は、子を持つ女性を支援するという枠組みの中に留まり、男性の役割を問い直す視点を欠いていた — past measures stayed within a women-supporting framework and lacked the perspective of rethinking men's roles."
      },
      {
        q: "Why does the author warn against framing the declining birth rate as a 'natural change'?",
        choices: ["Because such framing would encourage more births", "Because it conceals the structural problems of society by treating them as biological destiny", "Because natural changes cannot be measured statistically", "Because natural changes have no policy implications"],
        answerIndex: 1,
        explanation: "これを人口の生物学的な運命と語ることで、社会の構造的な問題が隠蔽される恐れがある — framing it as biological destiny risks concealing structural problems."
      },
      {
        q: "According to the passage, what kind of transformation does responding to the declining birth rate require?",
        choices: ["A simple increase in child allowances", "A comprehensive transformation entailing a rewriting of the social contract itself", "A return to the Meiji-era ie household system", "The abolition of women's higher education"],
        answerIndex: 1,
        explanation: "この変革は、社会契約そのものの書き換えを意味する — the transformation entails rewriting the social contract itself."
      },
      {
        q: "Which N1 grammar point is used in 'the direct cause of the declining birth rate is nothing other than women's refusal of this burden'?",
        choices: ["〜に違いない", "〜に他ならない (nothing other than)", "〜ずにはおかない", "〜たるもの"],
        answerIndex: 1,
        explanation: "少子化の直接的な要因は...ことに他ならない uses 〜に他ならない ('nothing other than'), the N1 pattern of strong identification."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-26 — An essay on the ethics of euthanasia
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-26",
    title: "安楽死[あんらくし]の倫理学[りんりがく]",
    titleReading: "あんらくしのりんりがく",
    level: "N1",
    summary: "An ethical inquiry into euthanasia: the distinction between active and passive euthanasia, the principle of autonomy and its limits under coercion, the sanctity-of-life tradition versus utilitarian reasoning, the risks of a slippery slope toward social pressure on the vulnerable, the indispensability of palliative care, and the demand for a deliberative public reasoning that resists both dogma and market logic.",
    estMinutes: 14,
    tags: ["ethics", "euthanasia", "bioethics", "autonomy", "palliative care"],
    body: [
      "安楽死[あんらくし]という問題[もんだい]は、現代[げんだい]倫理学[りんりがく]が直面[ちょくめん]する最[もっと]も困難[こんなん]な問[と]いの一[ひと]つである。医学[いがく]の進歩[しんぽ]は寿命[じゅみょう]を延[の]ばしたが、同時[どうじ]に、延命[えんめい]という目的[もくてき]自体[じたい]が人間[にんげん]の尊厳[そんげん]と衝突[しょうとつ]する事態[じたい]を生[しょう]じた。末期[まっき]患者[かんじゃ]が耐[た]え難[がた]い苦痛[くつう]に苛[さいな]まれながら、自[みずか]らの意思[いし]に反[はん]して生[い]かされ続[つづ]けることは、果[はた]して人間[にんげん]らしいと言[い]えるだろうか。この問[と]いに正面[しょうめん]から向[む]き合[あ]わずに、生命[せいめい]倫理[りんり]の未来[みらい]を語[かた]ることはできまい。",
      "第一[だいいち]に整理[せいり]すべきは、安楽死[あんらくし]の分類[ぶんるい]である。積極的[せっきょくてき]安楽死[あんらくし]は、患者[かんじゃ]の生命[せいめい]を意図的[いとてき]に終結[しゅうけつ]させる行為[こうい]を指[さ]し、消極的[しょうきょくてき]安楽死[あんらくし]は延命[えんめい]治療[ちりょう]を差[さ]し控[ひか]えることによる死[し]の受容[じゅよう]を指[さ]す。この両者[りょうしゃ]の間[あいだ]には、道徳的[どうとくてき]な重量[じゅうりょう]の差[さ]があると古[ふる]くから主張[しゅちょう]されてきた。しかしこの区分[くぶん]は、行為[こうい]と結果[けっか]の因果[いんが]関係[かんけい]をどのように解釈[かいしゃく]するかに依存[いぞん]しており、決定[けってい]的[てき]な境界線[きょうかいせん]とはなり得[え]ない。倫理的[りんりてき]な判断[はんだん]は、形式的[けいしきてき]な区分[くぶん]よりも深[ふか]い次元[じげん]で行[おこな]われなければならない。",
      "第二[だいに]に、自律[じりつ]という原理[げんり]の限界[げんかい]を直視[ちょくし]する必要[ひつよう]がある。安楽死[あんらくし]を支持[しじ]する論拠[ろんきょ]の多[おお]くは、個人[こじん]の自己決定権[じこけっていけん]に立脚[りっきゃく]する。しかしこの原理[げんり]は、患者[かんじゃ]が真[しん]に自由[じゆう]な意思[いし]のもとで選択[せんたく]を行[おこな]っているという前提[ぜんてい]に立[た]つ。末期[まっき]の苦痛[くつう]、家族[かぞく]への気[き]兼[か]ね、医療[いりょう]費[ひ]への懸念[けねん]。これらが患者[かんじゃ]の判断[はんだん]に圧力[あつりょく]として働[はたら]くなら、そこにあるのは自律[じりつ]というより、むしろ構造的[こうぞうてき]な強要[きょうよう]である。自律[じりつ]を形式的[けいしきてき]に承認[しょうにん]するだけでは、倫理的[りんりてき]な正当性[せいとうせい]は確保[かくほ]されない。",
      "第三[だいさん]に、生命[せいめい]の神聖[しんせい]性[せい]と功利[こうり]的[てき]な推論[すいろん]の対立[たいりつ]がある。ある伝統[でんとう]は、生命[せいめい]それ自体[じたい]を神[かみ]から授[さず]かったものとして絶対的[ぜったいてき]な価値[かち]を認[みと]め、人間[にんげん]が終結[しゅうけつ]を決定[けってい]することを拒絶[きょぜつ]する。一方[いっぽう]、功利主義[こうりしゅぎ]は、苦痛[くつう]の軽減[けいげん]と幸福[こうふく]の最大化[さいだいか]を基準[きじゅん]に置[お]き、一定[いってい]の条件下[じょうけんか]で安楽死[あんらくし]を容認[ようにん]する。この二[ふた]つの立場[たちば]は、単[たん]なる理論[りろん]上[じょう]の対立[たいりつ]にとどまらず、社会[しゃかい]の制度的[せいどてき]選択[せんたく]を左右[さゆう]する重[おも]みを持[も]つ。両者[りょうしゃ]の対話[たいわ]を欠[か]いた制度[せいど]設計[せっけい]は、強[つよ]い者[もの]の論理[ろんり]に傾斜[けいしゃ]する恐[おそ]れがある。",
      "第四[だいよん]に、滑[すべ]り台[だい]論[ろん]という批判[ひはん]を真[ま]摯[し]に受[う]け止[と]める必要[ひつよう]がある。安楽死[あんらくし]を一度[いちど]認[みと]めれば、次第[しだい]に適用[てきよう]範囲[はんい]が拡大[かくだい]し、結果[けっか]として弱者[じゃくしゃ]に死[し]を迫[せま]る社会[しゃかい]に繋[つな]がり得[う]るという懸念[けねん]である。オランダ[おらんだ]やベルギー[べるぎー]での実例[じつれい]は、この懸念[けねん]を全[まった]くの憶測[おくそく]と断[だん]ずることを許[ゆる]さない。制度的[せいどてき]な安全装置[あんぜんそうち]を慎重[しんちょう]に設計[せっけい]したとしても、制度[せいど]を運用[うんよう]する人間[にんげん]の判断[はんだん]そのものが、時代[じだい]の風潮[ふうちょう]に染[そ]まる可能性[かのうせい]を排除[はいじょ]できない。安楽死[あんらくし]の法制化[ほうせいか]には、このリスクを直視[ちょくし]した慎重[しんちょう]な議論[ぎろん]が不可欠[ふかけつ]である。",
      "第五[だいご]に、緩和[かんわ]医療[いりょう]の充実[じゅうじつ]という代替[だいたい]的[てき]な道[みち]が論[ろん]じられなければならない。仮[かり]に疼痛[とうつう]のコントロールが完璧[かんぺき]であれば、安楽死[あんらくし]を望[のぞ]む患者[かんじゃ]は大幅[おおはば]に減少[げんしょう]するだろう。実際[じっさい]、疼痛[とうつう]管理[かんり]が不十分[ふじゅうぶん]なことが、安楽死[あんらくし]への要請[ようせい]の主[おも]な動機[どうき]となっている事例[じれい]は少[すく]なくない。この事実[じじつ]は、安楽死[あんらくし]の議論[ぎろん]が緩和[かんわ]医療[いりょう]への投資[とうし]と並行[へいこう]して進[すす]められなければならないことを示[しめ]している。社会[しゃかい]が緩和[かんわ]医療[いりょう]を軽視[けいし]したまま安楽死[あんらくし]を法制化[ほうせいか]するなら、それは倫理的[りんりてき]な放棄[ほうき]に近[ちか]い。",
      "第六[だいろく]に、医療者[いりょうしゃ]の役割[やくわり]と良心[りょうしん]の自由[じゆう]の問題[もんだい]がある。医師[いし]は患者[かんじゃ]の命[いのち]を守[まも]るという職業的[しょくぎょうてき]な使命[しめい]を帯[お]びている。その使命[しめい]と安楽死[あんらくし]の行為[こうい]が矛盾[むじゅん]するとき、医療者[いりょうしゃ]は深刻[しんこく]な倫理的[りんりてき]な葛藤[かっとう]に直面[ちょくめん]する。法制化[ほうせいか]に際[さい]しては、安楽死[あんらくし]への参加[さんか]を拒否[きょひ]する権利[けんり]、いわゆる良心[りょうしん]的[てき]拒否[きょひ]権[けん]を保障[ほしょう]する制度[せいど]的[てき]な配慮[はいりょ]が求[もと]められる。同時[どうじ]に、患者[かんじゃ]の権利[けんり]と医療者[いりょうしゃ]の良心[りょうしん]が衝突[しょうとつ]する場合[ばあい]、その調停[ちょうてい]機関[きかん]の設置[せっち]も不可欠[ふかけつ]である。",
      "結論[けつろん]として、安楽死[あんらくし]の倫理学[りんりがく]は、個[こ]人[じん]の選好[せんこう]を集計[しゅうけい]するだけでは到達[とうたつ]し得[え]ない領域[りょういき]にある。それは、人間[にんげん]の尊厳[そんげん]、社会[しゃかい]の責任[せきにん]、そして弱者[じゃくしゃ]を保護[ほご]する制度[せいど]の設計[せっけい]という、多層的[たそうてき]な問[と]いから成[な]る。安易[あんい]な法制化[ほうせいか]は社会[しゃかい]を功利[こうり]的[てき]な計算[けいさん]へと滑[すべ]り込[こ]ませ、逆[ぎゃく]に全面的[ぜんめんてき]な禁止[きんし]は個[こ]人[じん]の苦痛[くつう]を黙殺[もくさつ]する。求[もと]められるのは、この二[ふた]つの極端[きょくたん]を回避[かいひ]しつつ、慎重[しんちょう]かつ粘強[ねんじょう]な公共[こうきょう]的[てき]な熟議[じゅくぎ]を重[かさ]ねることであろう。"
    ],
    translation: [
      "The problem of euthanasia is one of the most difficult questions that contemporary ethics confronts. The progress of medicine has extended life span, but at the same time it has produced situations in which the aim of life-extension itself conflicts with human dignity. Can it truly be called human to be kept alive against one's will while being tormented by unbearable pain as a terminal patient? Without facing this question head-on, the future of bioethics cannot be discussed.",
      "The first thing to organize is the classification of euthanasia. Active euthanasia refers to the act of intentionally terminating a patient's life, while passive euthanasia refers to the acceptance of death through the withholding of life-extending treatment. From old it has been argued that there is a difference in moral weight between the two. But this distinction depends on how one interprets the causal relation between act and result, and it cannot become a definitive boundary. Ethical judgment must be made at a deeper level than a formal distinction.",
      "Second, it is necessary to confront the limits of the principle of autonomy. Many arguments supporting euthanasia stand on the individual's right to self-determination. But this principle rests on the premise that the patient is making the choice under genuinely free will. Terminal pain, consideration for family, concern about medical costs. If these work as pressures on the patient's judgment, what is there is not autonomy but rather structural coercion. Merely formally acknowledging autonomy does not secure ethical legitimacy.",
      "Third, there is the clash between the sanctity of life and utilitarian reasoning. A certain tradition recognizes life itself as something given by God, attributing absolute value to it and rejecting human determination of its termination. On the other hand, utilitarianism places the reduction of pain and the maximization of happiness as criteria and accepts euthanasia under certain conditions. These two positions are not merely a theoretical opposition but carry a weight that sways the institutional choices of society. Institutional design lacking dialogue between the two risks tilting toward the logic of the strong.",
      "Fourth, the critique known as the slippery slope argument must be taken seriously. It is the concern that once euthanasia is recognized, the scope of application gradually expands, ultimately leading to a society that presses death upon the vulnerable. Actual cases in the Netherlands and Belgium do not allow one to dismiss this concern as mere speculation. Even if institutional safeguards are carefully designed, the human judgments that operate the institution cannot be rid of the possibility of being colored by the spirit of the age. Euthanasia legislation requires careful debate that confronts this risk.",
      "Fifth, the alternative path of enriching palliative care must be discussed. If pain control were perfect, the number of patients wishing for euthanasia would greatly decrease. In fact, cases in which insufficient pain management is the main motive for the request for euthanasia are not few. This fact shows that the debate on euthanasia must proceed in parallel with investment in palliative care. If society legalizes euthanasia while neglecting palliative care, it comes close to ethical abandonment.",
      "Sixth, there is the question of the role of medical practitioners and freedom of conscience. Physicians bear the professional mission of protecting patients' lives. When that mission contradicts the act of euthanasia, medical workers face a serious ethical conflict. In legislating, institutional consideration to guarantee the right to refuse participation in euthanasia — the so-called conscientious objection right — is required. At the same time, when patients' rights and the conscience of medical workers collide, the establishment of an arbitration body is also indispensable.",
      "In conclusion, the ethics of euthanasia lies in a domain that cannot be reached merely by aggregating individual preferences. It consists of multi-layered questions: human dignity, the responsibility of society, and the design of institutions that protect the vulnerable. Hasty legislation would slide society into utilitarian calculation, while a total ban would silence individual suffering. What is required is, while avoiding these two extremes, to engage in careful and tenacious public deliberation."
    ],
    questions: [
      {
        q: "What does the passage say about the distinction between active and passive euthanasia?",
        choices: ["It is a definitive moral boundary that settles all questions", "It depends on how one interprets the causal relation between act and result, and cannot be a definitive boundary", "It is irrelevant to ethical judgment in any way", "It was rejected by every major ethical tradition"],
        answerIndex: 1,
        explanation: "この区分は、行為と結果の因果関係をどのように解釈するかに依存しており、決定的な境界線とはなり得ない — the distinction depends on causal interpretation and cannot be a definitive boundary."
      },
      {
        q: "How does the passage characterize patient 'choices' made under terminal pain, family worry, and medical-cost concern?",
        choices: ["As paradigmatic cases of free autonomy", "As structural coercion rather than genuine autonomy", "As legally binding advance directives", "As choices that should never be questioned"],
        answerIndex: 1,
        explanation: "そこにあるのは自律というより、むしろ構造的な強要である — what is present is structural coercion rather than autonomy."
      },
      {
        q: "What does the passage argue must proceed in parallel with euthanasia debate?",
        choices: ["The deregulation of all medical professions", "Investment in palliative care", "The abolition of pain-management drugs", "The privatization of terminal hospitals"],
        answerIndex: 1,
        explanation: "安楽死の議論が緩和医療への投資と並行して進められなければならない — the debate on euthanasia must proceed in parallel with investment in palliative care."
      },
      {
        q: "What does the slippery slope argument warn against, according to the passage?",
        choices: ["That legalizing euthanasia would expand its scope and ultimately press death upon the vulnerable", "That banning euthanasia would increase terminal pain", "That palliative care would replace all other medicine", "That physicians would lose all legal rights"],
        answerIndex: 0,
        explanation: "安楽死を一度認めれば、次第に適用範囲が拡大し...弱者に死を迫る社会に繋がり得る — recognizing euthanasia could expand scope and pressure the vulnerable toward death."
      },
      {
        q: "Which N1 grammar pattern best matches the author's conclusion that careful deliberation 'is required / must be done'?",
        choices: ["〜どころか", "〜ことなしに", "〜ずにはおかない / 〜ねばならぬ (must)", "〜にきまっている"],
        answerIndex: 2,
        explanation: "求められるのは...慎重かつ粘強な公共的な熟議を重ねることであろう uses the N1 register of strong necessity ('is required / must'), echoing 〜ずにはおかない / 〜ねばならぬ."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-27 — The history of Japanese imperialism
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-27",
    title: "日本[にほん]帝国主義[ていこくしゅぎ]の歴史[れきし]",
    titleReading: "にほんていこくしゅぎのれきし",
    level: "N1",
    summary: "A historical analysis of Japanese imperialism from the Meiji incorporation of Hokkaido and Okinawa, through the colonization of Korea and Manchuria, the ideological apparatus of the 'Greater East Asia Co-Prosperity Sphere,' the catastrophic Pacific War, and postwar memory politics — arguing that Japan's modernity cannot be understood apart from its imperial trajectory and the ongoing disputes over historical responsibility.",
    estMinutes: 13,
    tags: ["history", "imperialism", "colonialism", "memory", "Pacific War"],
    body: [
      "日本[にほん]帝国主義[ていこくしゅぎ]の歴史[れきし]は、明治[めいじ]維新[いしん]という近代[きだい]化[か]の革新[かくしん]と表裏[ひょうり]一体[いったい]であった。新[あたら]しい政府[せいふ]は、欧米[おうべい]列強[れっきょう]に追[お]いつくことを国是[こくぜ]とし、その過程[かてい]で周縁[しゅうえん]の領土[りょうど]を編入[へんにゅう]していった。北海道[ほっかいどう]の開拓[かいたく]、沖縄[おきなわ]の廃藩[はいはん]置県[ちけん]、そして条約[じょうやく]改正[かいせい]をめぐる外交[がいこう]的[てき]な攻防[こうぼう]。これら一連[いちれん]の動[うご]きは、単[たん]なる内政[ないせい]上[じょう]の整理[せいり]ではなく、帝国[ていこく]としての領土[りょうど]形成[けいせい]の出発点[しゅっぱつてん]であった。近代[きだい]国民[こくみん]国家[こっか]と帝国[ていこく]とは、日本[にほん]において同時[どうじ]に誕生[たんじょう]したのである。",
      "日清[にっしん]戦争[せんそう]と日露[にちろ]戦争[せんそう]の勝利[しょうり]は、日本[にほん]をアジア[あじあ]唯一[ゆいいつ]の帝国主義[ていこくしゅぎ]列強[れっきょう]として位置[いち]づけた。台湾[たいわん]の割譲[かつじょう]、関東州[かんとうしゅう]の租借[そしゃく]、南満州[みなみまんしゅう]鉄道[てつどう]の経営[けいえい]。これらは領土[りょうど]的[てき]な野心[やしん]であると同時[どうじ]に、資本主義[しほんしゅぎ]の市場[しじょう]拡大[かくだい]という経済的[けいざいてき]な動機[どうき]に駆[か]動[どう]されていた。日本[にほん]の帝国主義[ていこくしゅぎ]は、欧米[おうべい]のそれと同質[どうしつ]の搾取[さくしゅ]構造[こうぞう]を内包[ないほう]していた。これをアジア[あじあ]解放[かいほう]の理念[りねん]と見[み]なす言説[げんせつ]は、当時[とうじ]のアジア[あじあ]主義[しゅぎ]者[しゃ]の願望[がんぼう]を代弁[だいべん]するに過[す]ぎない。",
      "韓国[かんこく]併合[へいごう]は、日本[にほん]帝国主義[ていこくしゅぎ]の決定的[けっていてき]な段階[だんかい]であった。1910年[ねん]、日本[にほん]は条約[じょうやく]という形式[けいしき]を経[へ]て朝鮮[ちょうせん]を植民地[しょくみんち]とした。総督府[そうとくふ]による強権的[きょうけんてき]な統治[とうち]、土地[とち]調査[ちょうさ]事業[じぎょう]を通[つう]じた収奪[しゅうだつ]、創氏[そうし]改名[かいめい]による文化[ぶんか]的[てき]抑圧[よくあつ]。これらは朝鮮[ちょうせん]民衆[みんしゅう]の生活[せいかつ]と誇[ほこ]りを根底[こんてい]から損[そこな]うものだった。日本[にほん]は近代化[きだいか]の成果[せいか]を朝鮮[ちょうせん]にもたらしたと主張[しゅちょう]するが、その裏[うら]で搾取[さくしゅ]と差別[さべつ]が進行[しんこう]していた事実[じじつ]は否定[ひてい]し得[え]ない。",
      "満州[まんしゅう]事変[じへん]以降[いこう]、日本[にほん]の帝国主義[ていこくしゅぎ]は軍事的[ぐんじてき]な拡張[かくちょう]の段階[だんかい]に入[はい]る。関東軍[かんとうぐん]の策動[さくどう]により満州国[まんしゅうこく]が建国[けんこく]され、五族[ごぞく]協和[きょうわ]というスローガン[すろーがん]が掲[かか]げられた。しかし実態[じったい]は、関東軍[かんとうぐん]の支配[しはい]の下[もと]に置[お]かれた傀儡[かいらい]国家[こっか]であった。この時期[じき]、日本[にほん]は国際連盟[こくさいれんめい]を脱退[だったい]し、国際社会[こくさいしゃかい]からの孤立[こりつ]を深[ふか]めていく。帝国[ていこく]の論理[ろんり]が国際[こくさい]協調[きょうちょう]の論理[ろんり]に優先[ゆうせん]された結果[けっか]である。",
      "日中[にっちゅう]戦争[せんそう]の長期化[ちょうきか]は、日本[にほん]を破滅[はめつ]的[てき]な戦線[せんせん]拡大[かくだい]へと追[お]い込[こ]んだ。軍部[ぐんぶ]は東京[とうきょう]の政治[せいじ]統帥[とうすい]を凌駕[りょうが]し、現場[げんば]の独走[どくそう]が国策[こくさく]を形成[けいせい]するという異常[いじょう]な事態[じたい]が生[しょう]じた。この統帥[とうすい]権[けん]の独立[どくりつ]問題[もんだい]は、日本[にほん]の帝国主義[ていこくしゅぎ]が制度的[せいどてき]な抑制[よくせい]を欠[か]いていたことを示[しめ]している。戦争[せんそう]が泥沼化[どろぬまか]する中[なか]で、資源[しげん]獲得[かくとく]を目的[もくてき]とした南方[なんぽう]進出[しんしゅつ]が決定[けってい]され、日本[にほん]は米国[べいこく]・英国[えいこく]との全面[ぜんめん]衝突[しょうとつ]へと向[む]かっていく。",
      "大東亜[だいとうあ]共栄圏[きょうえいけん]という理念[りねん]は、帝国主義[ていこくしゅぎ]の侵略[しんりゃく]を正当化[せいとうか]するイデオロギーとして機能[きのう]した。欧米[おうべい]の植民地[しょくみんち]支配[しはい]からアジア[あじあ]を解放[かいほう]するという大義[たいぎ]は、一部[いちぶ]の知識人[ちしきじん]には真[しん]摯[し]に受[う]け取[と]られたが、実態[じったい]は日本[にほん]による資源[しげん]収奪[しゅうだつ]と文化的[ぶんかてき]な同化[どうか]政策[せいさく]であった。アジア[あじあ]の諸民族[しょみんぞく]に共[とも]する繁栄[はんえい]を掲[かか]げながら、実[じつ]際[さい]には日本[にほん]の国益[こくえき]を優先[ゆうせん]する構造[こうぞう]は、理念[りねん]と現実[げんじつ]の乖離[かいり]を生[しょう]じさせた。この乖離[かいり]こそが、戦後[せんご]の記憶[きおく]政治[せいじ]に至[いた]るまで尾[お]を引[ひ]く問題[もんだい]の根源[こんげん]である。",
      "太平洋[たいへいよう]戦争[せんそう]の敗北[はいぼく]は、日本[にほん]帝国主義[ていこくしゅぎ]の終焉[しゅうえん]を意味[いみ]した。東京[とうきょう]裁判[さいばん]は戦争[せんそう]指導者[しどうしゃ]を裁[さば]いたが、その法[ほう]的[てき]正当性[せいとうせい]は今[いま]も論争[ろんそう]の的[まと]である。また、アジア[あじあ]各地[かくち]で起[お]こされた戦争[せんそう]犯罪[はんざい]、とりわけ従軍[じゅうぐん]慰安婦[いあんふ]問題[もんだい]や南京[なんきん]事件[じけん]の記憶[きおく]は、日[にっ]韓[かん]、日[にっ]中[ちゅう]関係[かんけい]に深[ふか]い傷[きず]を残[のこ]した。日本[にほん]の戦後[せんご]外交[がいこう]は、この歴史[れきし]的[てき]な負債[ふさい]と向[む]き合[あ]うことなくしては成立[せいりつ]し得[え]ない。",
      "結論[けつろん]として、日本[にほん]帝国主義[ていこくしゅぎ]の歴史[れきし]は、過去[かこ]の遺物[いぶつ]ではなく、現在[げんざい]の社会[しゃかい]に刻[きざ]まれた傷跡[きずあと]である。領土[りょうど]問題[もんだい]、歴史[れきし]認識[にんしき]、在日[ざいにち]外国人[がいこくじん]の地位[ちい]。これらは全[すべ]て、帝国[ていこく]の記憶[きおく]に由来[ゆらい]する現在進行形[げんざいしんこうけい]の問題[もんだい]である。歴史[れきし]を直視[ちょくし]し、責任[せきにん]の所在[しょざい]を明[あき]らかにすることは、過去[かこ]への贖罪[しょくざい]であると同時[どうじ]に、未来[みらい]のアジア[あじあ]共同体[きょうどうたい]を構築[こうちく]するための不可欠[ふかけつ]な前提[ぜんてい]である。"
    ],
    translation: [
      "The history of Japanese imperialism was inseparable from the modernizing innovation of the Meiji Restoration. The new government made catching up with the Western powers a state policy, and in that process incorporated peripheral territories. The development of Hokkaido, the abolition of domains and establishment of prefectures in Okinawa, and the diplomatic maneuvering around treaty revision. This series of moves was not mere internal administrative arrangement but the starting point of territorial formation as an empire. The modern nation-state and the empire were born simultaneously in Japan.",
      "Victories in the Sino-Japanese and Russo-Japanese wars positioned Japan as Asia's sole imperialist great power. The cession of Taiwan, the lease of Kwantung Leased Territory, and the management of the South Manchuria Railway. These were territorial ambitions and at the same time were driven by the economic motive of capitalist market expansion. Japanese imperialism contained an exploitative structure of the same kind as that of the West. Discourse that sees this as a project of Asian liberation merely articulates the wishes of Asianists of the time.",
      "The annexation of Korea was a decisive stage of Japanese imperialism. In 1910, Japan colonized Korea through the form of a treaty. Authoritarian rule by the Government-General, expropriation through the land survey project, and cultural suppression through the creation of Japanese-style family names and the renaming policy. These damaged the lives and pride of the Korean populace at their foundation. Japan claims to have brought the fruits of modernization to Korea, but the fact that exploitation and discrimination proceeded behind that cannot be denied.",
      "From the Manchurian Incident onward, Japanese imperialism entered a stage of military expansion. Through the machinations of the Kwantung Army, Manchukuo was founded and the slogan of harmony among the five races was raised. But in reality it was a puppet state placed under the rule of the Kwantung Army. In this period Japan withdrew from the League of Nations and deepened its isolation from the international community. It was the result of the logic of empire taking precedence over the logic of international cooperation.",
      "The prolongation of the Sino-Japanese War drove Japan into a catastrophic expansion of the front. The military bypassed political command in Tokyo, and an abnormal situation arose in which the field's unilateral action formed national policy. This problem of the independence of the command authority shows that Japanese imperialism lacked institutional restraint. As the war became a quagmire, the decision was made to advance southward in order to acquire resources, and Japan moved toward a full-scale clash with the United States and Britain.",
      "The concept of the Greater East Asia Co-Prosperity Sphere functioned as an ideology justifying imperialist aggression. The noble cause of liberating Asia from Western colonial rule was received sincerely by some intellectuals, but the reality was resource expropriation and a policy of cultural assimilation by Japan. While raising the banner of shared prosperity among the peoples of Asia, in fact a structure prioritizing Japan's national interest gave rise to a gap between ideal and reality. This very gap is the root of the problem that drags on into postwar memory politics.",
      "Defeat in the Pacific War meant the end of Japanese imperialism. The Tokyo Tribunal tried the war leaders, but its legal legitimacy remains a subject of dispute even today. Moreover, the memory of war crimes committed across Asia — in particular the comfort women issue and the Nanjing Incident — left deep wounds in Japan-Korea and Japan-China relations. Japan's postwar diplomacy cannot be established without facing this historical debt.",
      "In conclusion, the history of Japanese imperialism is not a relic of the past but a scar inscribed on present society. Territorial disputes, historical memory, and the status of resident foreigners in Japan. These are all present-progressive problems derived from the memory of empire. Confronting history and clarifying where responsibility lies is at once atonement for the past and an indispensable premise for building a future Asian community."
    ],
    questions: [
      {
        q: "What does the passage argue about the relationship between the modern Japanese nation-state and the empire?",
        choices: ["They were sequential, with the nation-state preceding the empire by a century", "They were born simultaneously during the Meiji Restoration", "The empire existed long before the modern nation-state", "They had no relationship whatsoever"],
        answerIndex: 1,
        explanation: "近代国民国家と帝国とは、日本において同時に誕生した — the modern nation-state and the empire were born simultaneously in Japan."
      },
      {
        q: "According to the passage, what was the actual reality behind the 'Greater East Asia Co-Prosperity Sphere' slogan?",
        choices: ["Genuine liberation of Asian colonies from Western rule", "Resource expropriation and cultural assimilation prioritizing Japan's national interest", "An equal federation of independent Asian nations", "A purely economic free-trade zone"],
        answerIndex: 1,
        explanation: "実態は日本による資源収奪と文化的な同化政策 — the reality was Japanese resource expropriation and cultural assimilation policy."
      },
      {
        q: "What institutional problem does the passage identify as underlying Japan's military expansion in the Sino-Japanese War?",
        choices: ["Civilian control was too strong", "The independence of the command authority meant the field's unilateral action formed national policy without institutional restraint", "The military was fully subordinate to parliament", "The emperor personally directed every battle"],
        answerIndex: 1,
        explanation: "この統帥権の独立問題は...日本の帝国主義が制度的な抑制を欠いていたことを示している — the independence of command authority shows Japanese imperialism lacked institutional restraint."
      },
      {
        q: "How does the passage frame the legacy of Japanese imperialism in the present?",
        choices: ["As a relic of the past with no contemporary relevance", "As a present-progressive scar inscribed on present society, seen in territorial disputes, historical memory, and the status of resident foreigners", "As something that has been fully resolved by postwar diplomacy", "As a problem only between Japan and the United States"],
        answerIndex: 1,
        explanation: "これらはすべて、帝国の記憶に由来する現在進行形の問題である — these are all present-progressive problems derived from the memory of empire."
      },
      {
        q: "Which N1 grammar pattern is used to express 'cannot be established without facing this historical debt'?",
        choices: ["〜ことなしに (without doing ...) / 〜ずには...ない", "〜に違いない", "〜どころか", "〜たるもの"],
        answerIndex: 0,
        explanation: "向き合うことなししては成立し得ない uses the N1 〜ずには...ない / 〜ことなしに pattern meaning 'cannot ... without ...'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-28 — A philosophical analysis of consciousness and free will
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-28",
    title: "意識[いしき]と自由意志[じゆういし]の哲学[てつがく]",
    titleReading: "いしきとじゆういしのてつがく",
    level: "N1",
    summary: "A philosophical analysis of consciousness and free will: the 'hard problem' of phenomenal experience, the challenge that neuroscience poses to libertarian free will, compatibilist rescue strategies, the ethical indispensability of regarding oneself as free, and the demand for a naturalism that does not collapse into reductionism — a path between scientific humility and ethical seriousness.",
    estMinutes: 14,
    tags: ["philosophy", "consciousness", "free will", "neuroscience", "ethics"],
    body: [
      "意識[いしき]と自由意志[じゆういし]は、哲学[てつがく]の古[ふる]くして新[あたら]しい問[と]いである。デカルト[でかると]が「我[われ]思[おも]う、ゆえに我[われ]あり」と宣言[せんげん]して以来[いらい]、意識[いしき]は哲学[てつがく]的[てき]な探求[たんきゅう]の中心[ちゅうしん]に置[お]かれてきた。しかし二十世紀[にじゅっせいき]後半[こうはん]に入[はい]り、認知[にんち]科学[かがく]と脳神経[のうしんけい]科学[かがく]が急[きゅう]速[そく]に発展[はってん]するにつれ、意識[いしき]の謎[なぞ]は逆[ぎゃく]に深[ふか]まったと言[い]わざるを得[え]ない。主観的[しゅかんてき]な体験[たいけん]がなぜ物理的[ぶつりてき]な脳[のう]の活動[かつどう]から生[しょう]じるのか。この問[と]いは、哲学[てつがく]者[しゃ]チャルマーズが名付[なづ]けた「困難[こんなん]な問題[もんだい]」として、今日[こんにち]も解答[かいとう]を拒[こば]んでいる。",
      "第一[だいいち]に、クオリアという概念[がいねん]が意識[いしき]の哲学[てつがく]に不可欠[ふかけつ]である。赤[あか]を見[み]るということ、痛[いた]みを感[かん]じるということ。これらの主観的[しゅかんてき]な体験[たいけん]の質[しつ]は、客観的[きゃっかんてき]な物理[ぶつり]記述[きじゅつ]と還元[かんげん]不可能[ふかのう]な次元[じげん]を構成[こうせい]する。ある脳[のう]状態[じょうたい]を完全[かんぜん]に記述[きじゅつ]し得[え]たとしても、それがどのように「感[かん]じられる」かは記述[きじゅつ]の対象[たいしょう]にならない。これが現代[げんだい]の唯物論[ゆいぶつろん]が直面[ちょくめん]する最大[さいだい]の難問[なんもん]である。物理的[ぶつりてき]な世界[せかい]が全[すべ]てであるとする立場[たちば]は、意識[いしき]の主観性[しゅかんせい]をどう説明[せつめい]し得[え]るかを問[と]われている。",
      "第二[だいに]に、自由意志[じゆういし]の問題[もんだい]は、決定論[けっていろん]と責任[せきにん]の概念[がいねん]との衝突[しょうとつ]として現[あらわ]れる。脳[のう]の神経[しんけい]活動[かつどう]が物理[ぶつり]法則[ほうそく]に従[したが]うとすれば、人間[にんげん]の選択[せんたく]もまた予測[よそく]可能[かのう]な因果[いんが]連鎖[れんさ]の一部[いちぶ]となる。リベット[りべっと]の実験[じっけん]は、意識的[いしきてき]な決断[けつだん]に先立[さきだ]って脳[のう]活動[かつどう]が準備[じゅんび]されることを示[しめ]したとしばしば解釈[かいしゃく]される。もし人間[にんげん]の意志[いし]が因果[いんが]連鎖[れんさ]の結果[けっか]に過[す]ぎないとすれば、道徳的[どうとくてき]な責任[せきにん]という概念[がいねん]は根底[こんてい]から揺[ゆる]ぐことになる。",
      "第三[だいさん]に、両立論[りょうりつろん]はこの困難[こんなん]を回避[かいひ]する一[ひと]つの戦略[せんりゃく]である。因果[いんが]的[てき]な決定[けってい]と自由[じゆう]な選択[せんたく]は矛盾[むじゅん]しない、と主張[しゅちょう]する立場[たちば]である。人間[にんげん]が自[みずか]らの動機[どうき]に従[したが]って行動[こうどう]する限[かぎ]り、その選択[せんたく]は自由[じゆう]であると見[み]なす。しかし批判[ひはん]者[しゃ]は、動機[どうき]自体[じたい]が因果[いんが]連鎖[れんさ]の所産[しょさん]であれば、その自由[じゆう]は循環[じゅんかん]的[てき]な定義[ていぎ]に過[す]ぎないと反論[はんろん]する。両立論[りょうりつろん]が真[しん]に満足[まんぞく]のいく解答[かいとう]であるためには、自[みずか]らが何者[なにもの]であるかという同一性[どういつせい]の問題[もんだい]を解明[かいめい]しなければならない。",
      "第四[だいよん]に、自由意志[じゆういし]の否定[ひてい]は深刻[しんこく]な倫理的[りんりてき]な帰結[きけつ]を伴[ともな]う。我[われ]われが他者[たしゃ]を責任[せきにん]ある主体[しゅたい]として扱[あつか]うことは、社会[しゃかい]の制度[せいど]的[てき]な基盤[きばん]である。法律[ほうりつ]、道徳[どうとく]、教育[きょういく]。これらは全[すべ]て、人間[にんげん]が自[みずか]ら選択[せんたく]し得[う]るという前提[ぜんてい]の上[うえ]に構築[こうちく]されている。もし自由意志[じゆういし]が幻想[げんそう]であれば、刑罰[けいばつ]の正当性[せいとうせい]さえ問[と]い直[なお]されなければならない。哲学[てつがく]の抽象的[ちゅうしょうてき]な議論[ぎろん]が、社会[しゃかい]の制度[せいど]設計[せっけい]に直結[ちょっけつ]する重[おも]みを持[も]つ所以[ゆえん]である。",
      "第五[だいご]に、現象学[げんしょうがく]的[てき]な立場[たちば]は、第三[だいさん]者[しゃ]の客観的[きゃっかんてき]な記述[きじゅつ]だけでは意識[いしき]を捉[とら]えられないと主張[しゅちょう]する。フッサール[ふっさーる]が志向[しこう]性[せい]という概念[がいねん]で示[しめ]したように、意識[いしき]は常[つね]に何[なに]かについて[ついて]の意識[いしき]であり、世界[せかい]との関係性[かんけいせい]の中[なか]で初[はじ]めて成立[せいりつ]する。第一[だいいち]人称[にんしょう]の視点[してん]を方法論[ほうほうろん]的[てき]に基礎[きそ]に置[お]く現象学[げんしょうがく]は、還元主義的[かんげんしゅぎてき]な自然科学[しぜんかがく]に対[たい]する批判[ひはん]的[てき]な対抗[たいこう]軸[じく]として機能[きのう]する。",
      "第六[だいろく]に、応用[おうよう]倫理[りんり]の領域[りょういき]では、自由意志[じゆういし]の問題[もんだい]は具体[ぐたい]的[てき]な判断[はんだん]に直結[ちょっけつ]する。例[たと]えば、神経[しんけい]科学的[かがくてき]な証拠[しょうこ]を用[もち]いて犯罪[はんざい]者[しゃ]の責任[せきにん]能力[のうりょく]を問[と]う裁判[さいばん]において、決定論[けっていろん]的[てき]な世界観[せかいかん]が暗黙[あんもく]の前提[ぜんてい]とされることがある。これは法律[ほうりつ]と哲学[てつがく]の境界[きょうかい]領域[りょういき]であり、慎重[しんちょう]な議論[ぎろん]が求[もと]められる。科学[かがく]の知見[ちけん]を安易[あんい]に法廷[ほうてい]へ輸入[ゆにゅう]すれば、正義[せいぎ]の理念[りねん]自体[じたい]が損[そこな]われかねない。",
      "結論[けつろん]として、意識[いしき]と自由意志[じゆういし]の謎[なぞ]は、科学[かがく]的[てき]な解明[かいめい]の進展[しんてん]と共[とも]にむしろ深[ふか]まる一方[いっぽう]である。我[われ]われは、物理的[ぶつりてき]な記述[きじゅつ]と主観的[しゅかんてき]な体験[たいけん]、決定論[けっていろん]と責任[せきにん]、という二[ふた]つの極[きょく]の間[はざま]で、哲学[てつがく]的[てき]な熟考[じゅっこう]を続[つづ]けなければならない。科学[かがく]の成果[せいか]を謙虚[けんきょ]に受[う]け入[い]れつつも、人間[にんげん]の尊厳[そんげん]を損[そこな]わない思想[しそう]を鍛[きた]え上[あ]げること。それこそが、現代[げんだい]哲学[てつがく]に課[か]された最大[さいだい]の課題[かだい]であろう。"
    ],
    translation: [
      "Consciousness and free will are an old and new question of philosophy. Since Descartes declared \"I think, therefore I am,\" consciousness has been placed at the center of philosophical inquiry. But entering the latter half of the twentieth century, as cognitive science and neuroscience advanced rapidly, one must say the mystery of consciousness has, on the contrary, deepened. Why does subjective experience arise from the activity of the physical brain? This question, named \"the hard problem\" by the philosopher Chalmers, refuses an answer to this day.",
      "First, the concept of qualia is indispensable to the philosophy of consciousness. Seeing red, feeling pain. The quality of these subjective experiences constitutes a dimension irreducible to objective physical description. Even if one could completely describe a brain state, how it is \"felt\" does not become the object of description. This is the greatest difficulty that contemporary materialism confronts. The position that the physical world is all there is is being asked how it can explain the subjectivity of consciousness.",
      "Second, the problem of free will appears as a clash between determinism and the concept of responsibility. If the brain's neural activity follows physical laws, then human choices also become part of a predictable causal chain. Libet's experiment is often interpreted as showing that brain activity is prepared prior to a conscious decision. If human will is merely a result of causal chains, the concept of moral responsibility would be shaken at its foundation.",
      "Third, compatibilism is one strategy for avoiding this difficulty. It is the position arguing that causal determination and free choice do not contradict. As long as a person acts according to their own motives, the choice is considered free. But critics counter that if the motives themselves are products of causal chains, that freedom is merely a circular definition. For compatibilism to be a genuinely satisfactory answer, it must clarify the problem of identity — what kind of being one is.",
      "Fourth, the denial of free will entails serious ethical consequences. Treating others as responsible subjects is the institutional foundation of society. Law, morality, education. All of these are constructed on the premise that human beings can choose for themselves. If free will were an illusion, even the legitimacy of punishment would have to be reconsidered. This is the reason that abstract philosophical argument carries a weight directly tied to institutional design.",
      "Fifth, the phenomenological position argues that consciousness cannot be grasped by third-person objective description alone. As Husserl showed with the concept of intentionality, consciousness is always consciousness of something, and only within its relation to the world does it first come into being. Phenomenology, which methodically places the first-person perspective as its foundation, functions as a critical counter-axis to reductionist natural science.",
      "Sixth, in the domain of applied ethics, the problem of free will connects directly to concrete judgments. For example, in trials that question a criminal's capacity for responsibility using neuroscientific evidence, a deterministic worldview is sometimes taken as an implicit premise. This is a border region between law and philosophy, requiring careful debate. If scientific findings are imported into the courtroom too easily, the very ideal of justice may be damaged.",
      "In conclusion, the mystery of consciousness and free will deepens all the more with the progress of scientific elucidation. We must continue philosophical reflection in the space between two poles: physical description and subjective experience, determinism and responsibility. To accept the results of science humbly while forging thought that does not undermine human dignity — that, surely, is the greatest task imposed on contemporary philosophy."
    ],
    questions: [
      {
        q: "What does the passage call the 'hard problem' of consciousness?",
        choices: ["The question of why subjective experience arises from the physical brain's activity", "The question of how to build faster computers", "The question of which brain region controls language", "The question of how to measure IQ accurately"],
        answerIndex: 0,
        explanation: "主観的な体験がなぜ物理的な脳の活動から生じるのか — the hard problem is why subjective experience arises from the brain's physical activity."
      },
      {
        q: "What ethical consequence does the passage say follows if free will is an illusion?",
        choices: ["Punishment becomes more legitimate than ever", "Even the legitimacy of punishment would have to be reconsidered", "Education becomes unnecessary", "Law would be simplified to a single statute"],
        answerIndex: 1,
        explanation: "もし自由意志が幻想であれば、刑罰の正当性さえ問い直されなければならない — if free will is illusion, even the legitimacy of punishment must be reconsidered."
      },
      {
        q: "How does the phenomenological position, as described in the passage, function?",
        choices: ["As a reinforcement of reductionist natural science", "As a critical counter-axis to reductionist natural science that grounds first-person perspective", "As a rejection of all philosophical method", "As a pure branch of mathematics"],
        answerIndex: 1,
        explanation: "現象学は、還元主義的な自然科学に対する批判的な対抗軸として機能する — phenomenology functions as a critical counter-axis to reductionist natural science."
      },
      {
        q: "What caution does the passage raise about importing neuroscientific evidence into the courtroom?",
        choices: ["That such evidence is always irrelevant to criminal responsibility", "That importing scientific findings too easily may damage the very ideal of justice", "That neuroscience has nothing to contribute to legal reasoning", "That all criminals should be acquitted on neurological grounds"],
        answerIndex: 1,
        explanation: "科学の知見を安易に法廷へ輸入すれば、正義の理念自体が損なわれかねない — importing scientific findings into the courtroom too easily may damage the very ideal of justice."
      },
      {
        q: "Which N1 grammar pattern expresses the conclusion 'one must say the mystery of consciousness has, on the contrary, deepened'?",
        choices: ["〜どころか", "〜と言わざるを得ない (one cannot but say)", "〜に違いない", "〜まい"],
        answerIndex: 1,
        explanation: "謎は逆に深まったと言わざるを得ない uses 〜と言わざるを得ない ('one cannot but say'), an N1 pattern of unavoidable assertion."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-29 — The environmental politics of nuclear energy
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-29",
    title: "原子力[げんしりょく]の環境政治[かんきょうせいじ]",
    titleReading: "げんしりょくのかんきょうせいじ",
    level: "N1",
    summary: "An analysis of the environmental politics of nuclear energy: the postwar promise of cheap power and its Faustian bargain, the Fukushima disaster as a rupture in Japan's energy consensus, the climate-driven case for nuclear as low-carbon baseload, the unresolved waste and decommissioning burden, the democratic deficit in siting decisions, and the demand for an energy policy that integrates justice with decarbonization.",
    estMinutes: 12,
    tags: ["nuclear energy", "environment", "politics", "Fukushima", "climate"],
    body: [
      "原子力[げんしりょく]発電[はつでん]は、二[ふた]つの矛盾[むじゅん]する課題[かだい]の狭間[はざま]に置[お]かれた技術[ぎじゅつ]である。一方[いっぽう]で、気候[きこう]変動[へんどう]への対応[たいおう]という地球[ちきゅう]的[てき]な要請[ようせい]が、脱炭素[だつたんそ]電源[でんげん]としての原子力[げんしりょく]を見直[みなお]させている。他方[たほう]で、福島[ふくしま]第一[だいいち]原発[げんぱつ]事故[じこ]は、原子力[げんしりょく]が内包[ないほう]する破滅的[はめつてき]なリスクを世界[せかい]に突[つ]きつけた。この二[ふた]つの要請[ようせい]を同時[どうじ]に満[み]たす政策[せいさく]を見出[みいだ]すことは、現代[げんだい]環境政治[かんきょうせいじ]の最大[さいだい]の難題[なんだい]である。",
      "歴史[れきし]的[てき]に見[み]れば、日本[にほん]の原子力[げんしりょく]開発[かいはつ]は戦後[せんご]復興[ふっこう]と経済[けいざい]成長[せいちょう]の象徴[しょうちょう]として始[はじ]まった。1950年代[ねんだい]に導入[どうにゅう]された原子力[げんしりょく]は、技術[ぎじゅつ]的[てき]な近代[きだい]化[か]と国家[こっか]の威信[いしん]を象徴[しょうちょう]するものとして受[う]け容[い]れられた。安価[あんか]で豊富[ほうふ]な電力[でんりょく]が日本[にほん]経済[けいざい]を支[ささ]えるという約束[やくそく]は、高度[こうど]経済[けいざい]成長[せいちょう]期[き]に当然[とうぜん]のこととして信[しん]じ込[こ]まれた。しかしこの「原子力[げんしりょく]の約束[やくそく]」は、同時[どうじ]に廃棄物[はいきぶつ]処理[しょり]や事故[じこ]リスクという将来[しょうらい]世代[せだい]への負債[ふさい]を先送[さきおく]りする構造[こうぞう]を孑[ふし]んでいた。便利[べんり]さと引[ひ]き換[か]えに、未来[みらい]を担保[たんぽ]に入[い]れたのである。",
      "福島[ふくしま]の事故[じこ]は、この構造[こうぞう]の脆弱[ぜいじゃく]性[せい]を一[いっ]瞬[しゅん]にして露呈[ろてい]した。メルトダウン、避難[ひなん]、汚染[おせん]。これらは技術[ぎじゅつ]的[てき]な失敗[しっぱい]であると同時[どうじ]に、制度的[せいどてき]な失敗[しっぱい]でもあった。安全[あんぜん]神話[しんわ]の構築[こうちく]、規制[きせい]当局[とうきょく]の形骸化[けいがいか]、電力[でんりょく]会社[がいしゃ]と政治[せいじ]の癒着[ゆちゃく]。事故[じこ]の根源[こんげん]には、原子力[げんしりょく]という巨大[きょだい]な技術[ぎじゅつ]システムを民主的[みんしゅてき]な統治[とうち]に服[ふく]させられなかったという、政治[せいじ]的[てき]な責任[せきにん]がある。技術[ぎじゅつ]の問題[もんだい]と政治[せいじ]の問題[もんだい]は、ここでは切[き]り離[はな]せない。",
      "事故[じこ]後[ご]、日本[にほん]は原発[げんぱつ]の停止[ていし]と再稼働[さいかどう]の間[あいだ]で揺[ゆ]れ続[つづ]けた。零[ぜろ]原発[げんぱつ]の時代[じだい]は、火力[かりょく]発電[はつでん]への依存[いぞん]を急増[きゅうぞう]させ、二酸化[にさんか]炭素[たんそ]排出[はいしゅつ]量[りょう]の増加[ぞうか]を招[まね]いた。化石[かせき]燃料[ねんりょう]の輸入[ゆにゅう]費[ひ]の増大[ぞうだい]は経済[けいざい]的[てき]な負担[ふたん]でもあった。この経験[けいけん]は、電力[でんりょく]供給[きょうきゅう]と脱炭素[だつたんそ]化[か]を同時[どうじ]に達成[たっせい]することの困難[こんなん]を浮[う]き彫[ぼ]りにした。原子力[げんしりょく]を完全[かんぜん]に放棄[ほうき]することは、気候[きこう]変動[へんどう]への対応[たいおう]という別[べつ]の倫理的[りんりてき]な要請[ようせい]と衝突[しょうとつ]するのである。",
      "一方[いっぽう]で、再生[さいせい]可能[かのう]エネルギー[えねるぎー]の導入[どうにゅう]は順調[じゅんちょう]とは言[い]い難[がた]い。太陽光[たいようこう]や風力[ふうりょく]は出力[しゅつりょく]の変動[へんどう]が大[おお]きく、ベースロード[べーすろーど]電源[でんげん]としての役割[やくわり]を担[にな]い得[え]ない。蓄電[ちくでん]技術[ぎじゅつ]の発展[はってん]は待[ま]たれるものの、現時点[げんじてん]では原子力[げんしりょく]に取[と]って代[か]わるには至[いた]っていない。この技術的[ぎじゅつてき]な制約[せいやく]が、原発[げんぱつ]再稼働[さいかどう]を支持[しじ]する論拠[ろんきょ]の一[ひと]つとなっている。もっとも、技術[ぎじゅつ]的[てき]な制約[せいやく]を理由[りゆう]に、民主的[みんしゅてき]な合意[ごうい]を欠[か]いたまま再稼働[さいかどう]を進[すす]めることは、再[ふたた]び事故[じこ]後[ご]の信頼[しんらい]崩壊[ほうかい]を招[まね]き兼[か]ねない。",
      "放射性[ほうしゃせい]廃棄物[はいきぶつ]の処理[しょり]問題[もんだい]も、未解決[みかいけつ]のまま放置[ほうち]されている。高[こう]レベル[れべる]放射性[ほうしゃせい]廃棄物[はいきぶつ]の最終[さいしゅう]処分[しょぶん]地[ち]は、日本[にほん]国内[こくない]に一[ひと]つも決定[けってい]されていない。これは技術[ぎじゅつ]的[てき]な問題[もんだい]というより、政治的[せいじてき]な問題[もんだい]である。処分[しょぶん]地[ち]の立地[りっち]をめぐっては、周辺[しゅうへん]住民[じゅうみん]の同意[どうい]と利益[りえき]相反[そうはん]の調整[ちょうせい]という、民主主義[みんしゅしゅぎ]の根本的[こんぽんてき]な難問[なんもん]が立[た]ち現[あらわ]れる。リスクと利益[りえき]が非対称[ひたいしょう]に分配[ぶんぱい]される構造[こうぞう]を正義[せいぎ]の観点[かんてん]から問[と]い直[なお]さなければ、制度[せいど]の正当性[せいとうせい]は保[たも]てない。",
      "さらに、原発[げんぱつ]の立地[りっち]は地域[ちいき]格差[かくさ]と結[むす]びついている。電力[でんりょく]を消費[しょうひ]する都市[とし]と、電力[でんりょく]を生産[せいさん]する地方[ちほう]。この構造[こうぞう]の非対称[ひたいしょう]性[せい]は、環境[かんきょう]正義[せいぎ]の問題[もんだい]として深刻[しんこく]に論[ろん]じられなければならない。立地[りっち]地域[ちいき]には巨額[きょがく]の補助金[ほじょきん]が流[なが]れる反面[はんめん]、事故[じこ]のリスクは地域[ちいき]住民[じゅうみん]に集中[しゅうちゅう]する。この不均衡[ふきんこう]を正当化[せいとうか]する論理[ろんり]が問[と]い直[なお]されない限[かぎ]り、原発[げんぱつ]政策[せいさく]は民主的[みんしゅてき]な正統性[せいとうせい]を獲得[かくとく]し得[え]ない。",
      "結論[けつろん]として、原子力[げんしりょく]政策[せいさく]は技術[ぎじゅつ]的[てき]な費用[ひよう]便益[べんえき]計算[けいさん]だけでは決[き]められない。気候[きこう]変動[へんどう]、廃棄物[はいきぶつ]処理[しょり]、地域[ちいき]格差[かくさ]、民主的[みんしゅてき]統治[とうち]。これら多[おお]くの次元[じげん]を統合[とうごう]した判断[はんだん]が求[もと]められる。脱炭素[だつたんそ]化[か]を急[いそ]ぐあまり民主主義[みんしゅしゅぎ]を犠牲[ぎせい]にすることは本末転倒[ほんまつてんとう]である。環境[かんきょう]正義[せいぎ]と脱炭素[だつたんそ]化[か]を同時[どうじ]に達成[たっせい]する制度[せいど]設計[せっけい]こそが、現代[げんだい]環境政治[かんきょうせいじ]の核心的[かくしんてき]な課題[かだい]である。"
    ],
    translation: [
      "Nuclear power generation is a technology placed between two contradictory challenges. On one hand, the global imperative to address climate change has led to a reconsideration of nuclear power as a decarbonized energy source. On the other, the Fukushima Daiichi accident exposed to the world the catastrophic risk that nuclear power harbors. Finding a policy that simultaneously satisfies these two imperatives is the greatest difficulty of contemporary environmental politics.",
      "Historically, Japan's nuclear development began as a symbol of postwar reconstruction and economic growth. Nuclear power, introduced in the 1950s, was accepted as something symbolizing technological modernization and national prestige. The promise that cheap and abundant electricity would support the Japanese economy was taken for granted during the high-growth era. But this \"nuclear promise\" harbored a structure that deferred the debt to future generations — waste disposal and accident risk. Convenience was purchased by putting the future up as collateral.",
      "The Fukushima accident instantly exposed the fragility of this structure. Meltdown, evacuation, contamination. These were at once a technological failure and an institutional failure. The construction of a safety myth, the formalization of regulatory authorities, and the complicity between power companies and politics. At the root of the accident lay political responsibility: the failure to subject the enormous technological system of nuclear power to democratic governance. The problem of technology and the problem of politics cannot be separated here.",
      "After the accident, Japan continued to waver between halting and restarting nuclear plants. The zero-nuclear era caused a surge in dependence on thermal power generation, leading to increased carbon dioxide emissions. The rise in fossil fuel import costs was also an economic burden. This experience highlighted the difficulty of simultaneously achieving power supply and decarbonization. Completely abandoning nuclear power clashes with another ethical imperative — addressing climate change.",
      "On the other hand, the introduction of renewable energy cannot be called smooth. Solar and wind power have large output fluctuations and cannot bear the role of baseload power source. Although the development of storage technology is awaited, at present it has not reached the point of replacing nuclear power. This technical constraint has become one of the grounds supporting the restart of nuclear plants. However, to proceed with restarts without democratic agreement, citing technical constraints, could once again invite the collapse of trust that followed the accident.",
      "The problem of radioactive waste disposal has also been left unresolved. Not a single final disposal site for high-level radioactive waste has been decided within Japan. This is less a technological problem than a political one. Around the location of disposal sites, the fundamental difficulty of democracy arises — adjusting the consent and conflict of interest of surrounding residents. Unless the structure in which risk and benefit are distributed asymmetrically is reconsidered from the standpoint of justice, the legitimacy of the system cannot be maintained.",
      "Moreover, the location of nuclear plants is tied to regional disparity. Cities that consume electricity, and rural areas that produce it. The asymmetry of this structure must be seriously discussed as a problem of environmental justice. While enormous subsidies flow into the siting regions, the risk of accidents is concentrated on local residents. As long as the logic that legitimates this imbalance is not questioned, nuclear policy cannot acquire democratic legitimacy.",
      "In conclusion, nuclear policy cannot be decided solely by technological cost-benefit calculation. Climate change, waste disposal, regional disparity, democratic governance. A judgment integrating these many dimensions is required. To sacrifice democracy in the rush to decarbonize is to mistake the means for the end. The institutional design that simultaneously achieves environmental justice and decarbonization is the core challenge of contemporary environmental politics."
    ],
    questions: [
      {
        q: "What does the passage identify as the political root of the Fukushima accident?",
        choices: ["Purely an engineering miscalculation with no political dimension", "The failure to subject the enormous technological system of nuclear power to democratic governance", "An act of nature with no human responsibility", "Excessive democratic oversight that paralyzed operators"],
        answerIndex: 1,
        explanation: "原子力という巨大な技術システムを民主的な統治に服させられなかったという、政治的な責任がある — the political responsibility was the failure to subject nuclear technology to democratic governance."
      },
      {
        q: "According to the passage, what difficulty did the 'zero-nuclear' era expose?",
        choices: ["That nuclear power was unnecessary all along", "That simultaneously achieving power supply and decarbonization is difficult without nuclear", "That fossil fuels are entirely carbon-free", " That renewable energy alone could replace nuclear immediately"],
        answerIndex: 1,
        explanation: "この経験は、電力供給と脱炭素化を同時に達成することの困難を浮き彫りにした — the zero-nuclear experience highlighted the difficulty of simultaneously achieving power supply and decarbonization."
      },
      {
        q: "Why does the passage characterize the unresolved high-level radioactive waste disposal issue as primarily political rather than technological?",
        choices: ["Because the technology is already fully developed", "Because it raises the fundamental democratic difficulty of adjusting consent and conflict of interest of surrounding residents", "Because no technology will ever exist for it", "Because Japan has no nuclear waste whatsoever"],
        answerIndex: 1,
        explanation: "処分地の立地をめぐっては、周辺住民の同意と利益相反の調整という、民主主義の根本的な難問が立ち現れる — disposal siting raises the fundamental democratic difficulty of adjusting consent and conflict of interest."
      },
      {
        q: "What environmental-justice problem does the passage identify in the urban-rural structure of nuclear siting?",
        choices: ["Cities bear all the risk while rural areas reap all the benefit", "Risk is concentrated on local residents while cities consume the electricity", "Rural areas pay no cost at all", "The system is fully symmetric and just"],
        answerIndex: 1,
        explanation: "電力を消費する都市と、電力を生産する地方...事故のリスクは地域住民に集中する — cities consume the electricity while accident risk is concentrated on local residents."
      },
      {
        q: "Which N1 grammar pattern expresses 'as long as the logic legitimating this imbalance is not questioned, nuclear policy cannot acquire democratic legitimacy'?",
        choices: ["〜限り (as long as) combined with 〜得ない (cannot)", "〜に違いない", "〜どころか", "〜まい"],
        answerIndex: 0,
        explanation: "この不均衡を正当化する論理が問い直されない限り、原発政策は民主的な正統性を獲得し得ない uses 〜限り ('as long as') with 〜得ない ('cannot'), an N1 combination."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-30 — A sociological study of Japan's prison system
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-30",
    title: "日本[にほん]の刑務所[けいむしょ]の社会学[しゃかいがく]",
    titleReading: "にほんのけいむしょのしゃかいがく",
    level: "N1",
    summary: "A sociological study of Japan's prison system: the persistent recidivism among elderly and economically marginal inmates, prisons functioning as de facto welfare institutions, the cultural emphasis on confession and remorse over rights, the isolation that prevents reintegration, and the need for a penal philosophy that treats punishment and welfare as inseparable partners rather than alternatives.",
    estMinutes: 12,
    tags: ["sociology", "criminology", "prison", "recidivism", "welfare"],
    body: [
      "日本[にほん]の刑務所[けいむしょ]は、犯罪[はんざい]者[しゃ]を収容[しゅうよう]する施設[しせつ]であると同時[どうじ]に、社会[しゃかい]の最底辺[さいていへん]を生[い]きる人[ひと]々の終[おわり]の棲家[すみか]として機能[きのう]している側面[そくめん]を持[も]つ。高齢[こうれい]受刑者[じゅけいしゃ]の増加[ぞうか]、生活[せいかつ]困窮者[こんきゅうしゃ]の反復[はんぷく]入所[にゅうしょ]。これらの事実[じじつ]は、刑務所[けいむしょ]が刑罰[けいばつ]の執行[しっこう]機関[きかん]である以上[いじょう]に、社会的[しゃかいてき]な安全網[あんぜんもう]の最終[さいしゅう]段階[だんかい]として機能[きのう]していることを示[しめ]している。この現実[げんじつ]を直視[ちょくし]することなしに、日本[にほん]の司法[しほう]と福祉[ふくし]のあり方[かた]を論[ろん]じることはできまい。",
      "高齢[こうれい]受刑者[じゅけいしゃ]の増加[ぞうか]は、とりわけ深刻[しんこく]な問題[もんだい]である。犯罪[はんざい]を犯[おか]す高齢者[こうれいしゃ]の多[おお]くは、生活[せいかつ]保護[ほご]を受[う]けられず、孤独[こどく]な生活[せいかつ]の中[なか]で万引[まんび]きなどの軽[けい]犯罪[はんざい]を反復[はんぷ]する。彼[かれ]らにとって刑務所[けいむしょ]は、食事[しょくじ]と住居[じゅうきょ]、医療[いりょう]を保証[ほしょう]する場所[ばしょ]として受[う]け取[と]られている側面[そくめん]がある。この事態[じたい]を単[たん]なる犯罪者[はんざいしゃ]の増加[ぞうか]と解釈[かいしゃく]するのは、社会[しゃかい]が福祉[ふくし]制度[せいど]を欠如[けつじょう]させているという事実[じじつ]から目[め]を背[そむ]けることに他[ほか]ならない。",
      "また、麻薬[まやく]や覚醒剤[かくせいざい]の依存[いぞん]症[しょう]者[しゃ]の反復[はんぷ]入所[にゅうしょ]も目立[めだ]つ。依存[いぞん]という病[やまい]は、刑罰[けいばつ]では治療[ちりょう]し得[え]ない。しかし日本[にほん]の刑務所[けいむしょ]は、依然[いぜん]として懲罰[ちょうばつ]的[てき]な矯正[きょうせい]を中心[ちゅうしん]としており、医療[いりょう]的[てき]な対応[たいおう]は不十分[ふじゅうぶん]である。受刑者[じゅけいしゃ]が出所[しゅっしょ]しても社会[しゃかい]に受容[じゅよう]されず、再[さい]び依存[いぞん]に陥[おちい]るという悪循環[あくじゅんかん]が続[つづ]いている。この構造[こうぞう]は、司法[しほう]と医療[いりょう]の境界[きょうかい]を問[と]い直[なお]すことを我[われ]われに迫[せま]っている。",
      "日本[にほん]の刑事[けいじ]司法[しほう]における「自白[じはく]」の重視[じゅうし]も、社会学[しゃかいがく]的[てき]な検討[けんとう]を要[よう]する。被疑者[ひぎしゃ]が自白[じはく]することが、捜査[そうさ]当局[とうきょく]にとって事件[じけん]解決[かいけつ]の効率[こうりつ]的[てき]な手段[しゅだん]として機能[きのう]してきた側面[そくめん]がある。また、自白[じはく]が「反省[はんせい]」の証[あかし]として評価[ひょうか]されることで、実質的[じっしつてき]な量刑[りょうけい]にも影響[えいきょう]を及[およ]ぼす。しかし心理学的[しんりがくてき]な研究[けんきゅう]は、自白[じはく]が真実[しんじつ]を反映[はんえい]しない場合[ばあい]があることを示[しめ]している。真実[しんじつ]の発見[はっけん]よりも自白[じはく]の取得[しゅとく]が優先[ゆうせん]される構造[こうぞう]は、冤罪[えんざい]の温床[おんしょう]となり兼[か]ねない。",
      "さらに、刑務所[けいむしょ]内[ない]の労働[ろうどう]のあり方[かた]にも問[と]いがある。受刑者[じゅけいしゃ]は刑務作業[けいむさぎょう]に従事[じゅうじ]するが、その賃金[ちんぎん]は極[きわ]めて低額[ていがく]であり、被害[ひがい]者[しゃ]への賠償[ばいしょう]に充[あ]てるにも不十分[ふじゅうぶん]なことが多[おお]い。また、作業[さぎょう]の内容[ないよう]が現代[げんだい]の労働[ろうどう]市場[しじょう]の実態[じったい]とかけ離[はな]れているため、出所[しゅっしょ]後[ご]の就労[しゅうろう]に直結[ちょっけつ]しない。この構造[こうぞう]の下[もと]では、矯正[きょうせい]という名[めい]の再[さい]社会化[しゃかいか]が形骸化[けいがいか]していると言[い]わざるを得[え]ない。",
      "出所[しゅっしょ]後[ご]の社会[しゃかい]復帰[ふっき]の困難[こんなん]も看過[かんか]できない。受刑者[じゅけいしゃ]は前科[ぜんか]という烙印[らくいん]を押[お]され、就労[しゅうろう]市場[しじょう]から疎外[そがい]される。住居[じゅうきょ]を確保[かくほ]することさえ容易[ようい]でない。この孤立[こりつ]が、再[さい]び犯罪[はんざい]に走[はし]る動機[どうき]となる。社会的[しゃかいてき]な受容[じゅよう]の欠如[けつぼう]が再犯[さいはん]を促[うなが]すという悪循環[あくじゅんかん]を断[た]ち切[き]るには、刑務所[けいむしょ]から地域[ちいき]への移行[いこう]を支[ささ]える制度[せいど]的[てき]な工夫[くふう]が不可欠[ふかけつ]である。",
      "刑罰[けいばつ]哲学[てつがく]の面[めん]からも、日本[にほん]の刑務所[けいむしょ]制度[せいど]は検討[けんとう]の対象[たいしょう]となる。応報[おうほう]的[てき]な正義[せいぎ]と、更生[こうせい]を目的[もくてき]とする復帰[ふっき]的[てき]正義[せいぎ]。この二[ふた]つの理念[りねん]の均衡[きんこう]は、現代[げんだい]社会[しゃかい]における刑罰[けいばつ]のあり方[かた]を決定[けってい]づける。日本[にほん]の刑事[けいじ]司法[しほう]が伝統的[でんとうてき]に応報[おうほう]的[てき]な要素[ようそ]を強[つよ]く帯[お]びてきたことは否定[ひてい]し難[がた]い。しかし応報[おうほう]だけでは再犯[さいはん]の防止[ぼうし]に資[し]しないという現実[げんじつ]を直視[ちょくし]するなら、復帰[ふっき]的[てき]な理念[りねん]をより一層[いっそう]取[と]り入[い]れる必要[ひつよう]がある。",
      "結論[けつろん]として、日本[にほん]の刑務所[けいむしょ]は犯罪[はんざい]者[しゃ]の隔離[かくり]の場[ば]という古[ふる]い範型[はんけい]から脱却[だっきゃく]しなければならない。刑罰[けいばつ]と福祉[ふくし]、司法[しほう]と医療[いりょう]、隔離[かくり]と復帰[ふっき]。これらの二[ふた]項対立[こうついたいりつ]を乗[の]り越[こ]え、総合的[そうごうてき]な社会[しゃかい]復帰[ふっき]システムを構築[こうちく]することが求[もと]められる。刑務所[けいむしょ]の壁[かべ]の外側[そとがわ]にまで支援[しえん]の網[あみ]を拡張[かくちょう]することなしには、真[しん]の矯正[きょうせい]は達成[たっせい]されまい。"
    ],
    translation: [
      "Japan's prisons are at once facilities that confine criminals and, in part, function as the final dwelling of people living at the very bottom of society. The increase in elderly inmates, the repeated incarceration of people in poverty. These facts show that, beyond being organs executing punishment, prisons function as the final stage of the social safety net. Without confronting this reality, one cannot discuss the state of Japan's justice and welfare.",
      "The increase in elderly inmates is a particularly serious problem. Many elderly who commit crimes are unable to receive public assistance and, in isolated living, repeat petty crimes such as shoplifting. For them, prison has an aspect of being received as a place that guarantees meals, housing, and medical care. To interpret this situation as a mere increase in criminals is nothing other than to turn one's eyes from the fact that society has failed its welfare system.",
      "In addition, the repeated incarceration of those dependent on narcotics and stimulants is conspicuous. Addiction is a disease that punishment cannot cure. Yet Japan's prisons still center on punitive correction, and medical response is insufficient. A vicious cycle continues in which, after release, inmates are not accepted by society and fall back into addiction. This structure presses us to reconsider the boundary between justice and medicine.",
      "The emphasis on \"confession\" in Japanese criminal justice also requires sociological examination. There is an aspect in which a suspect's confession has functioned as an efficient means for investigation authorities to resolve cases. Moreover, because confession is evaluated as evidence of \"remorse,\" it also affects substantive sentencing. But psychological research shows that confessions do not always reflect the truth. A structure in which obtaining confessions is prioritized over discovering the truth can become a hotbed of false accusation.",
      "Moreover, the state of labor within prisons is also open to question. Inmates engage in prison labor, but their wages are extremely low and often insufficient even to compensate victims. In addition, because the content of the work is divorced from the reality of the modern labor market, it does not connect directly to post-release employment. Under this structure, one cannot but say that re-socialization under the name of correction has been formalized.",
      "The difficulty of social reintegration after release cannot be overlooked either. Inmates are branded with the stigma of a criminal record and are excluded from the labor market. Even securing housing is no easy task. This isolation becomes the motive for returning to crime. To sever the vicious cycle in which the absence of social acceptance promotes reoffending, institutional ingenuity supporting the transition from prison to community is indispensable.",
      "From the standpoint of the philosophy of punishment, too, Japan's prison system becomes an object of examination. Retributive justice and restorative justice aimed at rehabilitation. The equilibrium of these two ideals determines the form of punishment in contemporary society. It is hard to deny that Japanese criminal justice has traditionally borne a strongly retributive element. But if we confront the reality that retribution alone does not serve to prevent reoffending, it is necessary to incorporate the restorative ideal all the more.",
      "In conclusion, Japan's prisons must break free of the old paradigm of isolating criminals. Punishment and welfare, justice and medicine, isolation and reintegration. What is required is to overcome these dichotomies and construct a comprehensive social reintegration system. Without extending the support network beyond the prison walls, true correction will not be achieved."
    ],
    questions: [
      {
        q: "What dual function does the passage say Japan's prisons now serve?",
        choices: ["Only as crime-prevention education centers", "Beyond executing punishment, they function as the final stage of the social safety net", "Solely as recreation facilities", "As military training installations"],
        answerIndex: 1,
        explanation: "刑務所が刑罰の執行機関である以上に、社会的な安全網の最終段階として機能している — beyond being an organ of punishment, prisons function as the final stage of the social safety net."
      },
      {
        q: "What does the passage say is the underlying reality behind the rise in elderly inmates?",
        choices: ["A sudden rise in elderly violent crime", "Society has failed its welfare system and elderly people repeat petty crimes in isolation", "An epidemic of elderly white-collar fraud", "The total elimination of public assistance"],
        answerIndex: 1,
        explanation: "社会が福祉制度を欠如させているという事実から目を背けることに他ならない — interpreting the rise as mere criminal increase is to avert one's eyes from society's failure of its welfare system."
      },
      {
        q: "What risk does the passage identify in the Japanese emphasis on confession in criminal justice?",
        choices: ["It always produces true accounts of the crime", "Prioritizing obtaining confessions over discovering truth can become a hotbed of false accusation", "It has no effect on sentencing", "It eliminates the need for trials entirely"],
        answerIndex: 1,
        explanation: "真実の発見よりも自白の取得が優先される構造は、冤罪の温床となり兼ねない — prioritizing confession over truth can become a hotbed of false accusation."
      },
      {
        q: "What does the passage argue about prison labor and post-release employment?",
        choices: ["Prison work content matches the modern labor market perfectly", "Prison work is divorced from the modern labor market and does not connect to post-release employment", "Prison labor pays wages equal to ordinary work", "Prison labor is illegal in Japan"],
        answerIndex: 1,
        explanation: "作業の内容が現代の労働市場の実態とかけ離れているため、出所後の就労に直結しない — prison work is divorced from the modern labor market and does not connect to post-release employment."
      },
      {
        q: "Which N1 grammar pattern expresses 'one cannot but say that re-socialization under the name of correction has been formalized'?",
        choices: ["〜と言わざるを得ない (cannot but say)", "〜に違いない", "〜どころか", "〜まい"],
        answerIndex: 0,
        explanation: "再社会化という名の矯正が形骸化していると言わざるを得ない uses 〜と言わざるを得ない ('cannot but say'), an N1 pattern of unavoidable assertion."
      }
    ]
  }
];
