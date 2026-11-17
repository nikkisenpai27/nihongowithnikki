import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N2-level reading passages with comprehension questions.

export const readingN2A: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n2-01 — The Japanese economic model
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-01",
    title: "日本[にほん]経済[けいざい]モデルの光[ひかり]と影[かげ]",
    titleReading: "にほんけいざいもでるのひかりとかげ",
    level: "N2",
    summary: "An analysis of Japan's postwar economic model — lifetime employment, seniority pay, keiretsu networks — its role in the miracle growth, the structural burdens revealed after the bubble collapse, the mixed legacy of Abenomics, and the search for a new model.",
    estMinutes: 11,
    tags: ["economy", "postwar model", "lifetime employment", "policy"],
    body: [
      "戦後[せんご]の焦土[しょうど]から立[た]ち上[あ]がった日本[にほん]は、わずか数十年[すうじゅうねん]のうちに世界[せかい]第二[だいに]の経済[けいざい]大国[たいこく]へと躍進[やくしん]した。この奇跡[きせき]の背景[はいけい]には、終身[しゅうしん]雇用[こよう]、年功[ねんこう]序列[じょれつ]、企業[きぎょう]内[ない]労働[ろうどう]組合[くみあい]という三種[さんしゅ]の神器[じんき]と呼[よ]ばれる仕組[しく]みがあった。終身[しゅうしん]雇用[こよう]は従業[じゅうぎょう]員[いん]に安心[あんしん]を与[あた]え、長[なが]期的[きてき]な視点[してん]で技能[ぎのう]を磨[みが]くことを可能[かのう]にした。年功[ねんこう]序列[じょれつ]は年齢[ねんれい]と共[とも]に給与[きゅうよ]が上[あ]がる仕組[しく]みで、組織[そしき]の安定[あんてい]を支[ささ]えた。さらに、企業[きぎょう]内[ない]労働[ろうどう]組合[くみあい]が経営[けいえい]陣[じん]と従業[じゅうぎょう]員[いん]の対立[たいりつ]を緩和[かんわ]し、協調[きょうちょう]路線[ろせん]を敷[し]いた。これらが複合[ふくごう]的[てき]に作用[さよう]し、日本[にほん]型[がた]経営[けいえい]と称[しょう]される独特[どくとく]の経済[けいざい]モデル[もでる]が形成[けいせい]されたのである。",
      "高度[こうど]経済[けいざい]成長[せいちょう]を支[ささ]えたもう一[ひと]つの柱[はしら]が、系列[けいれつ]取引[とりひき]という企業[きぎょう]間[かん]の結合[けつごう]であった。メーカーは下請[したう]け企業[きぎょう]と長期[ちょうき]契約[けいやく]を結[むす]び、互[たが]いに株[かぶ]を持[も]ち合[あ]うことで運命[うんめい]共同体[きょうたい]を形成[けいせい]した。この仕組[しく]みは外部[がいぶ]の不景気[ふけいき]に対[たい]する緩衝[かんしょう]材[ざい]として機能[きのう]し、急[きゅう]な人員[じんいん]削減[さくげん]を回避[かいひ]する余地[よち]を生[う]んだ。また、メイン[めいん]バンク[ばんく]制度[せいど]により、銀行[ぎんこう]が企業[きぎょう]の経営[けいえい]に深[ふか]く関与[かんよ]し、安定[あんてい]した資金[しきん]供給[きょうきゅう]を続[つづ]けた。一[ひと]見[けん]、完璧[かんぺき]な仕組[しく]みに見[み]えたこの経済[けいざい]モデル[もでる]は、しかし、成長[せいちょう]が続[つづ]く限[かぎ]り有効[ゆうこう]であったに過[す]ぎない。いったん成長[せいちょう]が鈍化[どんか]すると、これらの仕組[しく]みは逆[ぎゃく]に重荷[おもに]と化[か]す運命[うんめい]にあったのである。",
      "バブル[ばぶる]崩壊[ほうかい]後[ご]、日本[にほん]経済[けいざい]は長期[ちょうき]低迷[ていめい]に陥[おちい]った。企業[きぎょう]は過剰[かじょう]債務[さいむ]と過剰[かじょう]雇用[こよう]という二重[にじゅう]の重荷[おもに]を背負[せお]い込[こ]んだ。終身[しゅうしん]雇用[こよう]の維持[いじ]はもはや現実[げんじつ]的[てき]ではなくなり、リストラや派遣[はけん]労働[ろうどう]の導入[どうにゅう]が急[きゅう]速[そく]に進[すす]んだ。かつては美徳[びとく]とされた年功[ねんこう]序列[じょれつ]も、若[わか]い人材[じんざい]の流出[りゅうしゅつ]を招[まね]く要因[よういん]と化[か]した。系列[けいれつ]取引[とりひき]は効率[こうりつ]を損[そこ]なう閉鎖[へいさ]的[てき]な慣行[かんこう]と見[み]なされ、徐[じょじょ]々に解体[かいたい]されていった。こうして、かつて日本[にほん]経済[けいざい]を支[ささ]えた制度[せいど]は、皮肉[ひにく]にも日本[にほん]の足枷[あしかせ]となっていったのである。",
      "2000年代[ねんだい]後半[ごはん]には、失[うしな]われた十年[じゅうねん]と呼[よ]ばれる停滞[ていたい]が続[つづ]いた。政府[せいふ]は幾度[いくど]も経済[けいざい]刺激[しげき]策[さく]を打[う]ち出[だ]したものの、効果[こうか]は限[かぎ]られた。地方[ちほう]経済[けいざい]は疲弊[ひへい]し、格差[かくさ]が拡大[かくだい]する一方[いっぽう]であった。デフレ[でふれ]という現象[げんしょう]が定着[ていちゃく]し、消費者[しょうひしゃ]は買[か]い控[ひか]えを続[つづ]けた。企業[きぎょう]は投資[とうし]を控[ひか]え、賃金[ちんぎん]を引[ひ]き上[あ]げられない悪循環[あくじゅんかん]に陥[おちい]った。この閉塞[へいそく]感[かん]を打[う]ち破[やぶ]るためには、抜本的[ばっぽんてき]な構造[こうぞう]改革[かいかく]が避[さ]けられないと認識[にんしき]されるようになった。",
      "2012年[ねん]、第二[だいに]次[じ]安倍[あべ]政権[せいけん]はアベノミクスという経済[けいざい]政策[せいさく]を打[う]ち出[だ]した。三本[さんぽん]の矢[や]と称[しょう]される政策[せいさく]は、大規模[だいきぼ]な金融[きんゆう]緩和[かんわ]、機動的[きどうてき]な財政[ざいせい]出動[しゅつどう]、そして成長[せいちょう]戦略[せんりゃく]から成[な]る。日銀[にちぎん]は大規模[だいきぼ]な資金[しきん]供給[きょうきゅう]を実施[じっし]し、円安[えんやす]と株価[かぶか]の上昇[じょうしょう]を実現[じつげん]した。輸出[ゆしゅつ]企業[きぎょう]は業績[ぎょうせき]を回復[かいふく]させ、過去[かこ]最高[さいこう]の利益[りえき]を計上[けいじょう]した。しかし、実質[じっしつ]賃金[ちんぎん]の上昇[じょうしょう]は思[おも]うように進[すす]まず、恩恵[おんけい]の波及[はきゅう]は限定的[げんていてき]であった。アベノミクスの成否[せいひ]については、現在[げんざい]も激[はげ]しい議論[ぎろん]が続[つづ]いている。",
      "現在[げんざい]に至[いた]るまで、日本[にほん]経済[けいざい]は構造[こうぞう]的[てき]な転換[てんかん]期[き]にある。少子[しょうし]高齢化[こうれいか]による労働[ろうどう]力[りょく]不足[ぶそく]は生産[せいさん]性[せい]向上[こうじょう]を余儀[よぎ]なくしている。デジタル[でじたる]技術[ぎじゅつ]の導入[どうにゅう]は遅[おく]れていたものの、近年[きんねん]急[きゅう]速[そく]に進[すす]みつつある。女性[じょせい]や高齢者[こうれいしゃ]の労働[ろうどう]市場[しじょう]参入[さんにゅう]が進[すす]み、働[はたら]き手[て]の構成[こうせい]も変[か]化[か]した。一方[いっぽう]で、非正規[ひせいき]雇用[こよう]の増加[ぞうか]は格差[かくさ]の固定[こてい]化[か]を招[まね]いている。日本[にほん]型[がた]経営[けいえい]の核心[かくしん]は変[か]わりつつあるが、新[あたら]しいモデル[もでる]はまだ確立[かくりつ]されていない。",
      "かつての成功[せいこう]体験[たいけん]が今[いま]の足枷[あしかせ]になるというのは、歴史[れきし]の皮肉[ひにく]である。日本[にほん]は過去[かこ]の制度[せいど]をただ維持[いじ]するだけでは、未来[みらい]は開[ひら]けない。一方[いっぽう]で、変化[へんか]を急[いそ]ぐあまり社会[しゃかい]の結束[けっしゅく]を損[そこ]なうことも避[さ]けなければならない。日本[にほん]経済[けいざい]が次[つぎ]の成長[せいちょう]段階[だんかい]に進[すす]むためには、過去[かこ]の遺産[いさん]と未来[みらい]の革新[かくしん]をどう統合[とうごう]するかが鍵[かぎ]となる。答[こた]えは簡単[かんたん]ではないが、この問[と]いに正面[しょうめん]から向[む]き合[あ]うことこそが不可欠[ふかつけつ]である。日本[にほん]経済[けいざい]モデル[もでる]の光[ひかり]と影[かげ]を冷静[れいせい]に見[み]つめ直[なお]す時[とき]に来[き]ている。"
    ],
    translation: [
      "Rising from the ashes of the postwar ruins, Japan in just a few decades leapt to become the world's second-largest economy. Behind this miracle lay a set of arrangements called the three sacred treasures: lifetime employment, seniority-based pay, and enterprise unions. Lifetime employment gave workers peace of mind and made it possible to hone skills from a long-term perspective. Seniority-based pay, under which salaries rose with age, supported the stability of the organization. Moreover, enterprise unions eased the antagonism between management and employees, laying down a path of cooperation. These factors combined to form the distinctive economic model known as Japanese-style management.",
      "Another pillar supporting the high-growth era was keiretsu trading, an inter-firm linkage. Manufacturers signed long-term contracts with subcontractors and held one another's shares, forming a community of shared fate. This system functioned as a buffer against external recessions, creating room to avoid sudden personnel cuts. The main bank system, too, let banks engage deeply in corporate management and continue stable funding. The economic model that looked perfect at first glance was, however, effective only as long as growth continued. Once growth slowed, these arrangements were destined to turn into a burden.",
      "After the bubble burst, the Japanese economy fell into prolonged stagnation. Companies took on the twin burdens of excess debt and excess employment. Maintaining lifetime employment was no longer realistic, and restructuring and the introduction of dispatched labor advanced rapidly. Seniority pay, once considered a virtue, became a cause of young talent leaving. Keiretsu trading came to be seen as an inefficient, closed practice and was gradually dismantled. Thus the very institutions that had supported the Japanese economy ironically became its shackles.",
      "In the latter half of the 2000s, stagnation referred to as the lost decade continued. The government rolled out economic stimulus measures time and again, but the effects were limited. Regional economies withered, and inequality kept widening. Deflation took hold as a persistent phenomenon, and consumers continued to hold off on purchases. Companies held back investment and fell into a vicious cycle in which they could not raise wages. To break through this sense of stagnation, it came to be recognized that fundamental structural reform was unavoidable.",
      "In 2012, the second Abe administration launched an economic policy called Abenomics. The policy, described as three arrows, consisted of massive monetary easing, agile fiscal mobilization, and a growth strategy. The Bank of Japan implemented massive money supply, achieving a weaker yen and rising stock prices. Exporters recovered their performance and posted record profits. However, real wages did not rise as hoped, and the spread of benefits was limited. Fierce debate over the success or failure of Abenomics continues to this day.",
      "Up to the present, the Japanese economy remains in a period of structural transition. The labor shortage caused by the declining birthrate and aging population is forcing productivity improvement. Adoption of digital technology, though delayed, has recently been advancing rapidly. Women and the elderly have entered the labor market, changing the makeup of the workforce. On the other hand, the rise of non-regular employment is entrenching inequality. The core of Japanese-style management is shifting, but a new model has not yet been established.",
      "It is an irony of history that the successes of the past become the shackles of today. Japan cannot open up its future simply by preserving past institutions. At the same time, however, it must avoid rushing change in a way that damages social cohesion. For the Japanese economy to advance to its next growth stage, the key will be how to integrate the legacy of the past with the innovation of the future. The answer is not simple, but facing this question head-on is indispensable. The time has come to calmly reassess the light and shadow of the Japanese economic model."
    ],
    questions: [
      {
        q: "According to the passage, what were the three sacred treasures of Japanese-style management?",
        choices: ["Lifetime employment, seniority pay, enterprise unions", "Keiretsu trading, main banks, subcontractors", "Abenomics, fiscal stimulus, monetary easing", "Digital technology, women workers, elderly workers"],
        answerIndex: 0,
        explanation: "The passage explicitly names 終身雇用、年功序列、企業内労働組合 as the three sacred treasures (三種の神器)."
      },
      {
        q: "What does the passage say about the keiretsu and main bank system after growth slowed?",
        choices: ["They became even more effective than before", "They turned into a burden rather than a support", "They were exported to other countries", "They were replaced by Abenomics immediately"],
        answerIndex: 1,
        explanation: "The text states these systems were effective only as long as growth continued (成長が続く限り有効であったに過ぎない), and turned into a burden once growth slowed."
      },
      {
        q: "How does the passage evaluate the results of Abenomics?",
        choices: ["It completely solved the deflation problem", "Exporters recovered but real wage gains were limited", "It had no effect on stock prices at all", "It was abandoned within one year"],
        answerIndex: 1,
        explanation: "Abenomics produced record profits for exporters and rising stock prices, but real wage growth was limited and benefits were not widely spread (恩恵の波及は限定的)."
      },
      {
        q: "What point does the author make in the final paragraph about future reform?",
        choices: ["Japan should preserve all past institutions unchanged", "Japan must rush change regardless of social cohesion", "Japan should balance the legacy of the past with future innovation", "Japan should copy the American economic model entirely"],
        answerIndex: 2,
        explanation: "The author argues that preserving the past alone won't open the future, but rushing change damages cohesion, so integrating past legacy and future innovation is key."
      },
      {
        q: "Which N2 grammar point is used to convey 'it was only effective as long as growth continued'?",
        choices: ["〜に違いない", "〜限り (as long as)", "〜次第", "〜どころか"],
        answerIndex: 1,
        explanation: "The phrase 成長が続く限り有効であったに過ぎない uses 〜限り (as long as) together with 〜に過ぎない (merely)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-02 — AI and the future of work
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-02",
    title: "人工[じんこう]知能[ちのう]と雇用[こよう]の未来[みらい]",
    titleReading: "じんこうちのうとこようのみらい",
    level: "N2",
    summary: "An exploration of how AI is reshaping the labor market: which jobs are at risk, which human abilities remain hard to replace, the urgency of lifelong learning, and the ethical and inequality challenges that accompany widespread automation.",
    estMinutes: 12,
    tags: ["AI", "labor", "technology", "ethics"],
    body: [
      "近年[きんねん]、人工[じんこう]知能[ちのう]の急[きゅう]激[げき]な進歩[しんぽ]は社会[しゃかい]全体[ぜんたい]に衝撃[しょうげき]を与[あた]えている。ディープ[でぃーぷ]ラーニング[らーにんぐ]という技術[ぎじゅつ]の突破[とっぱ]により、機械[きかい]は画像[がぞう]認識[にんしき]や自然[しぜん]言語[げんご]処理[しょり]で人間[にんげん]に匹敵[ひってき]する能力[のうりょく]を示[しめ]すようになった。かつては人間[にんげん]にしか不可能[ふかのう]と考[かんが]えられていた翻訳[ほんやく]や診断[しんだん]の仕事[しごと]が、次[つぎ]々[つぎ]と機械[きかい]に取[と]って代[か]わられつつある。この変化[へんか]の速度[そくど]は、産業[さんぎょう]革命[かくめい]にも匹敵[ひってき]すると言[い]われるほどである。技術[ぎじゅつ]が進化[しんか]するにつれて、働[はたら]き方[かた]そのものが根本[こんぽん]から問[と]い直[なお]される時代[じだい]に突入[とつにゅう]したと言[い]えるだろう。",
      "人工[じんこう]知能[ちのう]の普及[ふきゅう]は雇用[こよう]市場[しじょう]に大[おお]きな影響[えいきょう]を及[およ]ぼしている。定型的[ていけいてき]な事務[じむ]作業[さぎょう]や単純[たんじゅん]な肉体[にくたい]労働[ろうどう]は、既[すで]に機械[きかい]へ移行[いこう]しつつある。銀行[ぎんこう]の窓口[まどぐち]業務[ぎょうむ]、工場[こうじょう]の組立[くみた]て工程[こうてい]、コール[こーる]センター[せんたー]の対応[たいおう]などが典型[てんけい]的[てき]な例[れい]である。これらの職業[しょくぎょう]に就[つ]いていた人[ひと]たちは、スキル[すきる]の転換[てんかん]を余儀[よぎ]なくされている。かつては安定[あんてい]と見[み]なされた事務[じむ]職[しょく]が、今[いま]では最[もっと]も自動化[じどうか]の脅威[いきょう]に晒[さら]される立場[たちば]にある。この傾向[けいこう]は今後[こんご]さらに加速[かそく]するに違[ちが]いない。",
      "しかし、機械[きかい]には取[と]って代[か]われない能力[のうりょく]も確[たし]かに存在[そんざい]する。創造[そうぞう]的[てき]な思考[しこう]、複雑[ふくざつ]な人間[にんげん]関係[かんけい]の調整[ちょうせい]、倫理[りんり]的[てき]な判断[はんだん]などは、人間[にんげん]ならではの領域[りょういき]である。小説[しょうせつ]を書[か]くこと、患者[かんじゃ]の心[こころ]に寄[よ]り添[そ]う医療[いりょう]、交渉[こうしょう]の現場[げんば]での機微[きび]な読[よ]み取[と]りなど、感情[かんじょう]と文脈[ぶんみゃく]が絡[から]む仕事[しごと]はAIには困難[こんなん]である。つまり、技術[ぎじゅつ]の進歩[しんぽ]が進[すす]むほど、人間[にんげん]らしさの価値[かち]が再[さい]認識[にんしき]されるという逆説[ぎゃくせつ]が生[しょう]じている。機械[きかい]に任[まか]せるべき仕事[しごと]を委[ゆだ]ね、人間[にんげん]が注[そそ]ぐべき仕事[しごと]に集中[しゅうちゅう]する仕分[しわ]けが不可欠[ふかつけつ]である。",
      "このような状況[じょうきょう]の中[なか]、生涯[しょうがい]学習[がくしゅう]の重要性[じゅうようせい]がかつてなく強調[きょうちょう]されている。一度[いちど]学校[がっこう]を卒業[そつぎょう]すれば終[お]わりという考[かんが]え方[かた]は、もはや通用[つうよう]しない。技術[ぎじゅつ]が進化[しんか]するたびに新[あたら]しいスキル[すきる]を習得[しゅうとく]し直[なお]さなければ、労働[ろうどう]市場[しじょう]から淘汰[とうた]される恐[おそ]れがある。政府[せいふ]や企業[きぎょう]は再[さい]教育[きょういく]の機会[きかい]を拡充[かくじゅう]し始[はじ]めたものの、依然[いぜん]として不十分[ふじゅうぶん]である。個[こ]人[じん]が自[みずか]ら学[まな]ぶ意思[いし]を持[も]たない限[かぎ]り、格差[かくさ]はさらに拡大[かくだい]する運命[うんめい]にある。学[まな]び続[つづ]ける姿勢[しせい]を持[も]つことこそ、この時代[じだい]の生存[せいぞん]戦略[せんりゃく]と言[い]える。",
      "人工[じんこう]知能[ちのう]の普及[ふきゅう]がもたらす格差[かくさ]問題[もんだい]も見過[みす]ごせない。新[あたら]しい技術[ぎじゅつ]を使[つか]いこなせる人[ひと]とそうでない人[ひと]の間[あいだ]に、決定的[けっていてき]な格差[かくさ]が生[しょう]じつつある。高度[こうど]な知識[ちしき]労働[ろうどう]者[しゃ]は生産[せいさん]性[せい]を飛躍[ひやく]的[てき]に高[たか]めることができるが、低[てい]スキル[すきる]労働[ろうどう]者[しゃ]は仕事[しごと]自体[じたい]を失[うしな]う危険[きけん]に直面[ちょくめん]している。この二極[にきょく]化[か]は、所得[しょとく]格差[かくさ]のみならず、機会[きかい]の不平等[ふびょうどう]にも直結[ちょっけつ]する。格差[かくさ]の固定[こてい]化[か]を防[ふせ]ぐためには、教育[きょういく]の機会[きかい]を平等[びょうどう]にする制度[せいど]的[てき]な工夫[くふう]が急務[きゅうむ]である。",
      "人工[じんこう]知能[ちのう]の倫理[りんり]的[てき]な問題[もんだい]も深刻[しんこく]である。アルゴリズム[あるごりずむ]に潜[ひそ]む偏見[へんけん]が差別[さべつ]を再生[さいせい]産[さん]する事例[じれい]が、既[すで]に報告[ほうこく]されている。採用[さいよう]判定[はんてい]や融資[ゆうし]審査[しんさ]にAIを導入[どうにゅう]した結果[けっか]、特定[とくてい]の属性[ぞくせい]が不利[ふり]になるケースが生[しょう]じたのだ。また、技術[ぎじゅつ]が発展[はってん]するうちに、プライバシー[ぷらいばしー]の侵害[しんがい]も深刻[しんこく]化[か]している。個人[こじん]のデータ[でーた]が収集[しゅうしゅう]され、予測[よそく]に利用[りよう]される仕組[しく]みは、便利[べんり]さと引[ひ]き換[か]えに自由[じゆう]を削[けず]り取[と]る恐[おそ]れがある。技術[ぎじゅつ]の進歩[しんぽ]をただ讃[さん]えるどころか、その暗[くら]い側面[そくめん]にも目[め]を向[む]ける姿勢[しせい]が求[もと]められている。",
      "私[わたし]たちは今[いま]、技術[ぎじゅつ]と人間[にんげん]の新[あたら]しい関係[かんけい]を設計[せっけい]する岐路[きろ]に立[た]っている。人工[じんこう]知能[ちのう]を敵[てき]視[し]するのではなく、協調[きょうちょう]する相手[あいて]として捉[とら]え直[なお]す必要[ひつよう]がある。同時[どうじ]に、技術[ぎじゅつ]が人間[にんげん]の尊厳[そんげん]を損[そこ]なわないよう、ルール[るーる]を整備[せいび]しなければならない。政府[せいふ]の規制[きせい]、企業[きぎょう]の倫理[りんり]、個[こ]人[じん]の意識[いしき]の三[みっ]つが揃[そろ]って初[はじ]めて、健全[けんぜん]な社会[しゃかい]が維持[いじ]できる。私[わたし]たちが人工[じんこう]知能[ちのう]を使[つか]いこなすのか、それとも使[つか]いこなされるのかは、今[いま]の選択[せんたく]次第[しだい]で決[き]まると言[い]って過言[かごん]ではない。未来[みらい]は決[き]まっていない。私[わたし]たちがどう向[む]き合[あ]うかによって、望[のぞ]ましい方向[ほうこう]へ導[みちび]くことができるはずである。"
    ],
    translation: [
      "In recent years, the rapid progress of artificial intelligence has sent shockwaves through society as a whole. Thanks to breakthroughs in deep learning, machines have come to show abilities comparable to humans in image recognition and natural language processing. Jobs once thought possible only for humans, such as translation and diagnosis, are being taken over one after another by machines. The speed of this change is said to rival that of the Industrial Revolution. As technology evolves, we can say we have entered an era in which the very way we work is being called into question from the ground up.",
      "The spread of AI is having a major impact on the labor market. Routine clerical tasks and simple physical labor are already shifting to machines. Bank counter operations, factory assembly lines, and call-center responses are typical examples. People who held these jobs are being forced to retrain. Clerical work once seen as stable is now the position most exposed to the threat of automation. This trend is certain to accelerate further in the future.",
      "However, abilities that machines cannot replace certainly do exist. Creative thinking, the coordination of complex human relationships, and ethical judgment are domains that belong to humans alone. Writing novels, providing medical care that stays close to a patient's heart, and reading subtle cues at a negotiation site are jobs that are difficult for AI because emotion and context are entangled. In other words, a paradox has emerged: the more technology advances, the more the value of being human is recognized anew. It is essential to sort out which jobs should be entrusted to machines and which humans should focus on themselves.",
      "In this situation, the importance of lifelong learning is being emphasized as never before. The idea that graduating from school is the end no longer holds. Each time technology evolves, one must re-acquire new skills, or risk being eliminated from the labor market. The government and companies have begun to expand re-education opportunities, but it is still insufficient. Unless individuals themselves have the will to learn, inequality is destined to widen further. Maintaining an attitude of continual learning can be called the survival strategy of this era.",
      "The inequality brought about by the spread of AI cannot be overlooked either. A decisive gap is opening between those who can master the new technology and those who cannot. Highly skilled knowledge workers can boost productivity dramatically, while low-skilled workers face the danger of losing their jobs themselves. This polarization leads not only to income inequality but also directly to inequality of opportunity. In order to prevent inequality from becoming entrenched, institutional efforts to equalize educational opportunities are an urgent task.",
      "The ethical issues of AI are also serious. Cases where bias hidden in algorithms reproduces discrimination have already been reported. After AI was introduced for hiring decisions and loan screening, situations arose in which certain attributes were disadvantaged. In addition, as technology develops, privacy infringement is becoming more serious. The system in which personal data is collected and used for prediction, in exchange for convenience, threatens to erode freedom. Rather than merely praising the advance of technology, an attitude that turns to its dark side as well is required.",
      "We now stand at a crossroads, designing a new relationship between technology and humans. Rather than treating AI as an enemy, we need to reframe it as a partner to cooperate with. At the same time, we must establish rules so that technology does not undermine human dignity. Only when government regulation, corporate ethics, and individual awareness come together can a healthy society be maintained. Whether we master AI or are mastered by it can be said to depend on the choices we make now. The future is not fixed. Depending on how we engage with it, we should be able to steer it in a desirable direction."
    ],
    questions: [
      {
        q: "According to the passage, which kinds of jobs are most at risk of being automated?",
        choices: ["Creative writing and novel composition", "Routine clerical tasks and simple physical labor", "Emotional caregiving and counseling", "Complex human-relations coordination"],
        answerIndex: 1,
        explanation: "The text names 定型的な事務作業や単純な肉体労働 as already shifting to machines, with bank counters, factory assembly, and call centers as examples."
      },
      {
        q: "What paradox does the author note about the advance of technology?",
        choices: ["Technology advances less as it spreads", "As technology advances, the value of being human is re-recognized", "Machines replace only highly skilled workers", "Lifelong learning becomes unnecessary"],
        answerIndex: 1,
        explanation: "The passage states the more technology advances, the more human-like qualities are re-evaluated (人間らしさの価値が再認識されるという逆説)."
      },
      {
        q: "Why does the author argue lifelong learning is essential?",
        choices: ["Because schools no longer teach anything", "Because without re-skilling, workers risk being eliminated from the labor market", "Because companies forbid promotion without it", "Because AI cannot learn anything new"],
        answerIndex: 1,
        explanation: "Each time technology evolves, new skills must be re-acquired or one risks being culled from the labor market (労働市場から淘汰される恐れがある)."
      },
      {
        q: "What ethical concern does the passage raise about algorithm-based AI systems?",
        choices: ["They use too much electricity", "They are too slow to be useful", "Hidden bias can reproduce discrimination in hiring and lending", "They cannot store any personal data"],
        answerIndex: 2,
        explanation: "Bias hidden in algorithms reproduces discrimination; AI in hiring and loan screening disadvantaged certain attributes (アルゴリズムに潜む偏見が差別を再生産する)."
      },
      {
        q: "The phrase 'whether we master AI or are mastered by it depends on our choices now' uses which N2 pattern?",
        choices: ["〜限り", "〜次第 (depending on)", "〜うちに", "〜に過ぎない"],
        answerIndex: 1,
        explanation: "今の選択次第で決まると言って過言ではない uses 〜次第 meaning 'depending on'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-03 — A story about corporate culture change
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-03",
    title: "変[か]わる会社[かいしゃ]の体温[たいおん]",
    titleReading: "かわるかいしゃのたいおん",
    level: "N2",
    summary: "A narrative about a young manager, Sato, leading reform at a long-established manufacturer — overcoming seniority resistance, introducing flexible work, transparent evaluation, and the gradual transformation of a rigid corporate culture.",
    estMinutes: 10,
    tags: ["corporate culture", "reform", "story", "management"],
    body: [
      "山田[やまだ]製作[せいさく]所[しょ]は創業[そうぎょう]五十年[ごじゅうねん]を誇[ほこ]る中[ちゅう]堅[けん]メーカーであった。かつては業界[ぎょうかい]でも一目[ひとめ]置[お]かれる存在[そんざい]だったが、ここ数年[すうねん]は業績[ぎょうせき]が伸[の]び悩[なや]んでいた。佐藤[さとう]は三年[さんねん]前[まえ]、外部[がいぶ]から中途[ちゅうと]採用[さいよう]で入[はい]った若[わか]い管理[かんり]職[しょく]である。彼[かれ]は入社[にゅうしゃ]直後[ちょくご]から、社内[しゃない]の古[ふる]い体質[たいしつ]に違和[いわ]感[かん]を抱[いだ]いていた。会議[かいぎ]は形式[けいしき]ばかりで、意思[いし]決定[けってい]は上層[じょうそう]部[ぶ]の鶴[つる]の一声[ひとこえ]に委[ゆだ]ねられていた。若手[わかて]社員[しゃいん]の意見[いけん]が汲[く]み取[と]られる機会[きかい]はほとんどなかった。",
      "佐藤[さとう]が最初[さいしょ]に取[と]り組[く]んだのは、会議[かいぎ]の改革[かいかく]であった。従来[じゅうらい]の会議[かいぎ]は報告[ほうこく]の読上[よみあ]げに終始[しゅうし]し、活発[かっぱつ]な議論[ぎろん]が行[おこな]われることは稀[まれ]だった。彼[かれ]は資料[しりょう]を事前[じぜん]共有[きょうゆう]し、会議[かいぎ]の時間[じかん]は議論[ぎろん]に充[あ]てるという原則[げんそく]を導入[どうにゅう]した。最初[さいしょ]は反発[はんぱつ]が予想[よそう]以上[いじょう]に強[つよ]かった。古参[こさん]の部長[ぶちょう]たちは、口[くち]を挟[はさ]む若造[わかぞう]に嫌悪[けんお]感[かん]を隠[かく]さなかった。しかし佐藤[さとう]は諦[あきら]めず、粘[ねば]り強[づよ]く対話[たいわ]を続[つづ]けた。彼[かれ]の根気[こんき]ある説明[せつめい]に、少[すこ]しずつ耳[みみ]を傾[かたむ]ける人[ひと]も出[で]始[はじ]めた。",
      "次[つぎ]に佐藤[さとう]は働[はたら]き方[かた]の柔軟[じゅうなん]化[か]に取[と]り掛[か]かった。長時間[ちょうじかん]労働[ろうどう]が美徳[びとく]とされる風土[ふうど]を変[か]えるのは容易[ようい]ではなかった。彼[かれ]はまず自分[じぶん]の課[か]でテレワークを試行[しこう]し、残業[ざんぎょう]時間[じかん]の削減[さくげん]を目標[もくひょう]に掲[かか]げた。三[みっ]ヶ月[かげつ]が経[た]つうちに、課[か]の残業[ざんぎょう]時間[じかん]は平均[へいきん]で三割[さんわり]も減少[げんしょう]した。驚[おどろ]いたことに、業務[ぎょうむ]の生産[せいさん]性[せい]も低下[ていか]するどころか、逆[ぎゃく]に向上[こうじょう]したのである。この結果[けっか]を見[み]て、他[ほか]の部署[ぶしょ]からも問[と]い合[あ]わせが寄[よ]せられるようになった。",
      "評価[ひょうか]制度[せいど]の透明性[とうめいせい]も佐藤[さとう]が強調[きょうちょう]した点[てん]であった。年功[ねんこう]序列[じょれつ]の給与[きゅうよ]体系[たいけい]では、若[わか]い社員[しゃいん]のモチベーション[もちべーしょん]は下[さ]がる一方[いっぽう]であった。彼[かれ]は成果[せいか]と貢献[こうけん]度[ど]を明確[めいかく]に評価[ひょうか]する指標[しひょう]を策定[さくてい]し、社長[しゃちょう]に直訴[ちょくそ]した。最初[さいしょ]は一笑[いっしょう]に付[つ]けられそうになったが、粘[ねば]り強[づよ]くデータ[でーた]を提示[ていじ]した結果[けっか]、試験[しけん]的[てき]な導入[どうにゅう]が認[みと]められた。半年[はんとし]後[ご]、若手[わかて]社員[しゃいん]の離職[りしょく]率[りつ]は明[あき]らかに改善[かいぜん]された。変化[へんか]は起[お]こるものだと、佐藤[さとう]は確信[かくしん]を深[ふか]めた。",
      "しかし、改革[かいかく]の道[みち]は平坦[へいたん]ではなかった。一部[いちぶ]の中[ちゅう]間[かん]管理[かんり]職[しょく]からは強[つよ]い抵抗[ていこう]に遭[あ]った。彼[かれ]らは変化[へんか]を自分[じぶん]の地位[いち]への脅威[いきょう]と感[かん]じ、陰[かげ]で佐藤[さとう]を批判[ひはん]した。ある時[とき]は、佐藤[さとう]の提案[ていあん]が秘密[ひみつ]裏[り]に握[にぎ]りつぶされたことすらあった。そうした壁[かべ]に直面[ちょくめん]するたびに、佐藤[さとう]は自分[じぶん]の信条[しんじょう]を再[さい]確認[かくにん]した。改革[かいかく]は、人[ひと]の心[こころ]を変[か]えること抜[ぬ]きには進[すす]まない。技術[ぎじゅつ]や制度[せいど]だけでは、本当[ほんとう]の変化[へんか]は起[お]こり得[え]ないのだ。",
      "変化[へんか]が可視[かし]化[か]し始[はじ]めたのは、一年[いちねん]ほど経[た]ってからであった。若手[わかて]社員[しゃいん]が自発[じはつ]的[てき]に新[あたら]しい企画[きかく]を提案[ていあん]するようになり、会議[かいぎ]でも活発[かっぱつ]な意見[いけん]交換[こうかん]が見[み]られるようになった。顧客[こきゃく]からの評価[ひょうか]も向上[こうじょう]し、受注[じゅちゅう]量[りょう]は徐[じょじょ]々に回復[かいふく]した。最[もっと]も象徴[しょうちょう]的[てき]だったのは、かつて佐藤[さとう]に最[もっと]も反発[はんぱつ]していた鈴木[すずき]部長[ぶちょう]が、ある朝[あさ]佐藤[さとう]に声[こえ]をかけたことである。お前[まえ]の言[い]う通[とお]りだったと、照[て]れ臭[くさ]そうに認[みと]めたのだ。その瞬間[しゅんかん]、佐藤[さとう]は改革[かいかく]が本当[ほんとう]に根[ね]を下[お]ろしたことを実感[じっかん]した。",
      "山田[やまだ]製作[せいさく]所[しょ]の物語[ものがたり]は、日本[にほん]の会社[かいしゃ]が直面[ちょくめん]する変革[へんかく]の縮図[しゅくず]である。制度[せいど]を変[か]えることは比較的[ひかくてき]容易[ようい]でも、人[ひと]の心[こころ]を変[か]えることは至難[しなん]の業[わざ]である。しかし、諦[あきら]めずに対話[たいわ]を続[つづ]け、成果[せいか]で示[しめ]すことで、変化[へんか]は確[たし]かに起[お]こる。佐藤[さとう]は今[いま]、次[つぎ]の世代[せだい]へと改革[かいかく]の火[ひ]を渡[わた]す役割[やくわり]を果[はた]そうとしている。会社[かいしゃ]の体温[たいおん]は、人[ひと]と人[ひと]の信頼[しんらい]関係[かんけい]によって作[つく]られる。その温度[おんど]が少[すこ]しずつ上[あ]がり続[つづ]ける限[かぎ]り、組織[そしき]は生[い]き続[つづ]けることができるだろう。"
    ],
    translation: [
      "Yamada Seisakusho was a mid-tier manufacturer proud of its fifty-year history. It was once a presence respected within the industry, but in recent years its performance had been sluggish. Sato was a young manager hired mid-career from outside three years ago. From immediately after joining, he had felt something off about the company's old-fashioned culture. Meetings were all formality, and decisions were left to the voice from the top. There were almost no opportunities for younger employees' opinions to be taken up.",
      "The first thing Sato tackled was reforming meetings. Conventional meetings consisted entirely of reading out reports, and vigorous discussion rarely took place. He introduced a principle of sharing materials in advance and devoting meeting time to discussion. At first, the pushback was stronger than expected. Veteran department heads made no effort to hide their disgust at a young upstart interrupting. But Sato did not give up and patiently continued dialogue. Through his patient explanations, people began to listen little by little.",
      "Next, Sato set about making work styles more flexible. Changing the culture in which long working hours were a virtue was not easy. He first trialed telework in his own section and set a goal of cutting overtime hours. Within three months, average overtime in the section dropped by as much as thirty percent. Surprisingly, productivity did not decline; rather, it improved. Seeing this result, inquiries began to come in from other departments.",
      "Transparency of the evaluation system was another point Sato emphasized. Under a seniority-based pay structure, the motivation of young employees only kept dropping. He drafted indicators that would clearly evaluate results and contribution, and appealed directly to the president. At first he was about to be laughed off, but by tenaciously presenting data, a trial introduction was approved. Six months later, the turnover rate of young employees visibly improved. Change does happen, Sato grew more certain.",
      "However, the path of reform was not smooth. He met strong resistance from some middle managers. They felt change as a threat to their own positions and criticized Sato behind his back. At one point, his proposals were even secretly killed. Each time he faced such walls, Sato reaffirmed his credo. Reform does not advance without changing people's hearts. Technology and systems alone cannot bring about true change.",
      "It was after about a year that change began to become visible. Young employees started proposing new projects on their own, and lively exchange of opinions came to be seen in meetings. Customer evaluations also improved, and order volume gradually recovered. The most symbolic moment came one morning when Department Head Suzuki, who had resisted Sato the most, called out to him. Embarrassed, he admitted that Sato had been right. In that instant, Sato felt that reform had truly taken root.",
      "The story of Yamada Seisakusho is a miniature of the transformation that Japanese companies face. Changing systems is comparatively easy, but changing people's hearts is an extremely difficult task. However, by not giving up, continuing dialogue, and demonstrating results, change surely occurs. Sato is now trying to play the role of passing the fire of reform on to the next generation. A company's warmth is built through trust between people. As long as that temperature keeps rising little by little, the organization can go on living."
    ],
    questions: [
      {
        q: "What was Sato's first impression of Yamada Seisakusho when he joined?",
        choices: ["A modern and flexible workplace", "A company with an old-fashioned, top-down culture", "A firm with strong financial performance", "A startup with no rules"],
        answerIndex: 1,
        explanation: "From immediately after joining, Sato felt something off about the old-fashioned culture where meetings were formality and decisions came from the top (古い体質に違和感を抱いていた)."
      },
      {
        q: "What was the result of Sato's telework and overtime reduction trial in his section?",
        choices: ["Overtime dropped but productivity fell sharply", "Both overtime dropped and productivity rose", "Nothing changed at all", "Only senior employees were affected"],
        answerIndex: 1,
        explanation: "Within three months, overtime fell by thirty percent, and productivity did not decline but rather improved (生産性も低下するどころか、逆に向上した)."
      },
      {
        q: "How did Sato win approval for the new evaluation system from the president?",
        choices: ["By staging a public protest", "By tenaciously presenting data", "By threatening to resign immediately", "By appealing to a labor union"],
        answerIndex: 1,
        explanation: "Although he was nearly laughed off at first, by tenaciously presenting data, a trial introduction was approved (粘り強くデータを提示した結果、試験的な導入が認められた)."
      },
      {
        q: "What moment made Sato feel that reform had truly taken root?",
        choices: ["When the company posted record profits", "When Department Head Suzuki, who had resisted him most, admitted Sato was right", "When Sato was promoted to president", "When all the veteran managers resigned"],
        answerIndex: 1,
        explanation: "The most symbolic moment was when Department Head Suzuki, who had resisted Sato the most, called out to him one morning and admitted Sato had been right."
      },
      {
        q: "Which N2 grammar pattern expresses 'as long as the temperature keeps rising, the organization can live on'?",
        choices: ["〜に過ぎない", "〜どころか", "〜限り (as long as)", "〜次第"],
        answerIndex: 2,
        explanation: "温度が少しずつ上がり続ける限り uses 〜限り meaning 'as long as'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-04 — The aging population crisis
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-04",
    title: "少子[しょうし]高齢化[こうれいか]という国難[こくなん]",
    titleReading: "しょうしこうれいかというこくなん",
    level: "N2",
    summary: "An examination of Japan's declining birthrate and aging population — its economic and social consequences, the limits of immigration as a remedy, regional collapse, the strain on social security, and the inadequacy of current policy responses.",
    estMinutes: 11,
    tags: ["demographics", "aging society", "labor", "policy"],
    body: [
      "近年[きんねん]、日本[にほん]における少子[しょうし]高齢化[こうれいか]は国難[こくなん]と称[しょう]されるほど深刻[しんこく]な状況[じょうきょう]に直面[ちょくめん]している。総務省[そうむしょう]の統計[とうけい]によれば、総人口[そうじんこう]は既[すで]に減少[げんしょう]局面[きょくめん]に入[はい]っており、このままの推移[すいい]が続[つづ]けば、五十年[ごじゅうねん]後[ご]には一億[いちおく]人[にん]を割[わ]り込[こ]むと予測[よそく]されている。出生[しゅっしょう]率[りつ]は長期[ちょうき]にわたり低[てい]水準[すいじゅん]が続[つづ]き、回復[かいふく]の兆[きざ]しは見[み]られない。他方[たほう]、六十五[ろくじゅうご]歳[さい]以上[いじょう]の高齢者[こうれいしゃ]の割合[わりあい]は三割[さんわり]を超[こ]え、世界[せかい]で最[もっと]も高齢化[こうれいか]が進[すす]んだ国[くに]となった。この人口[じんこう]構造[こうぞう]の逆転[ぎゃくてん]は、社会[しゃかい]の根幹[こんかん]を揺[ゆる]がす問題[もんだい]である。",
      "かつて高度[こうど]経済[けいざい]成長[せいちょう]期[き]を支[ささ]えた人口[じんこう]構造[こうぞう]は、現在[げんざい]逆[ぎゃく]の作用[さよう]を及[およ]ぼしつつある。生産[せいさん]年齢[ねんれい]人口[じんこう]の減少[げんしょう]は労働[ろうどう]力[りょく]不足[ぶそく]のみならず、社会[しゃかい]保障[ほしょう]制度[せいど]の維持[いじ]をも脅[おびや]かしている。このまま放置[ほうち]すれば、現行[げんこう]の年金[ねんきん]や医療[いりょう]制度[せいど]は行[ゆき]詰[づ]まりを迎[むか]えるに違[ちが]いない。現役[げんえき]世代[せだい]一人[ひとり]が複数[ふくすう]の高齢者[こうれいしゃ]を支[ささ]えるという逆[ぎゃく]ピラミッド[ぴらみっと]構造[こうぞう]は、もはや持続[じぞく]可能[かのう]ではない。社会保障[しゃかいほしょう]費[ひ]は年[ねんねん]々増大[ぞうだい]し、国庫[こっこ]の負担[ふたん]は限界[げんかい]に達[たっ]しつつある。",
      "労働[ろうどう]力[りょく]不足[ぶそく]に対[たい]する対応[たいおう]として、政府[せいふ]は外国人[がいこくじん]労働[ろうどう]者[しゃ]の受[う]け入[い]れを段階[だんかい]的[てき]に拡大[かくだい]した。しかし、これは根本[こんぽん]的[てき]な解決[かいけつ]にはならないという指摘[してき]が多[おお]い。移民[いみん]政策[せいさく]は文化[ぶんか]的[てき]な摩擦[まさつ]や社会[しゃかい]統合[とうごう]の難[むずか]しさを伴[ともな]う。単[たん]に労働[ろうどう]力[りょく]として利用[りよう]するだけでなく、共[とも]に社会[しゃかい]を構築[こうちく]する者[もの]として受[う]け入[い]れる姿勢[しせい]が欠[か]かせない。他[ほか]の先進[せんしん]国[こく]の事例[じれい]を見[み]ても、移民[いみん]の統合[とうごう]には長期[ちょうき]的[てき]な工夫[くふう]が必要[ひつよう]である。移民[いみん]に頼[たよ]ること自体[じたい]が、日本[にほん]社会[しゃかい]の変容[へんよう]を不可避[ふかひ]にする覚悟[かくご]を求[もと]める。",
      "少子[しょうし]化[か]の背景[はいけい]には、経済[けいざい]的[てき]な要因[よういん]が深[ふか]く関[かか]わっている。非正規[ひせいき]雇用[こよう]の増加[ぞうか]、賃金[ちんぎん]の停滞[ていたい]、住宅[じゅうたく]や教育[きょういく]の高[たか]騰[とう]が、若[わか]い世代[せだい]の結婚[けっこん]や出産[しゅっさん]を阻[はば]んでいる。待機[たいき]児童[じどう]問題[もんだい]に代表[だいひょう]される保育[ほいく]環境[かんきょう]の不足[ぶそく]も、働[はたら]く女性[じょせい]にとって重荷[おもに]となっている。政府[せいふ]は子育[こそだ]て支援[しえん]策[さく]を拡充[かくじゅう]してきたものの、効果[こうか]は限[かぎ]定的[てき]である。若[わか]い人[ひと]が将来[しょうらい]に希望[きぼう]を持[も]てる社会[しゃかい]を実現[じつげん]しない限[かぎ]り、出生[しゅっしょう]率[りつ]の回復[かいふく]は望[のぞ]めない。",
      "地域[ちいき]社会[しゃかい]の崩壊[ほうかい]も深刻[しんこく]な問題[もんだい]である。過疎[かそ]化[か]が進[すす]む地方[ちほう]では、商店[しょうてん]の閉店[へいてん]、学校[がっこう]の統廃[とうはい]合[ごう]、公共交通[こうきょうこうつう]の縮小[しゅくしょう]が連鎖[れんさ]的[てき]に起[お]きている。高齢者[こうれいしゃ]だけが取[と]り残[のこ]された集落[しゅうらく]では、日常[にちじょう]の買[か]い物[もの]すら困難[こんなん]になる限界[げんかい]集落[しゅうらく]が増加[ぞうか]している。地域[ちいき]の祭典[さいてん]や共同[きょうどう]作業[さぎょう]を支[ささ]える人[ひと]がいなくなり、伝統[でんとう]文化[ぶんか]の継承[けいしょう]も危[あぶ]機的[てき]な状況[じょうきょう]にある。地域[ちいき]社会[しゃかい]の崩壊[ほうかい]は、単[たん]なる経済[けいざい]問題[もんだい]どころか、文化[ぶんか]的[てき]な喪失[そうしつ]にも直結[ちょっけつ]する。",
      "社会保障[しゃかいほしょう]制度[せいど]の改革[かいかく]も避[さ]けられない課題[かだい]である。年金[ねんきん]の受給[じゅきゅう]年齢[ねんれい]の引上[ひきあ]げ、医療[いりょう]費[ひ]の自己[じこ]負担[ふたん]の見直[みなお]し、介護[かいご]保険[ほけん]制度[せいど]の持続[じぞく]性[せい]の確保[かくほ]など、議論[ぎろん]されるべき課題[かだい]は山積[やんせき]している。しかし、高齢者[こうれいしゃ]の投票[とうひょう]率[りつ]が高[たか]い政治[せいじ]的[てき]事情[じじょう]もあり、決断[けつだん]は先[さき]送[おく]りされ続[つづ]けてきた。現役[げんえき]世代[せだい]への負担[ふたん]が限界[げんかい]に達[たっ]する前[まえ]に、抜本[ばっぽん]的[てき]な改革[かいかく]に踏[ふ]み出[だ]さなければならない。制度[せいど]の維持[いじ]と負担[ふたん]の公平[こうへい]性[せい]の両立[りょうりつ]は、政治[せいじ]の試練[しれん]である。",
      "この国難[こくなん]を乗[の]り越[こ]えるためには、短期的[たんきてき]な対策[たいさく]にとどまらない長期[ちょうき]的[てき]な視野[しや]が必要[ひつよう]である。人口[じんこう]減少[げんしょう]を前提[ぜんてい]とした社会[しゃかい]の再設計[さいせっけい]、技術[ぎじゅつ]を活用[かつよう]した生産[せいさん]性[せい]の向上[こうじょう]、多様[たよう]な働[はたら]き方[かた]の受容[じゅよう]など、多角的[たかくてき]な取[と]り組[く]みが求[もと]められる。政府[せいふ]の政策[せいさく]はもちろん、企業[きぎょう]や地域[ちいき]、個[こ]人[じん]の意識[いしき]改革[かいかく]も不可欠[ふかつけつ]である。何[なに]より重要[じゅうよう]なのは、未来[みらい]の世代[せだい]への責任[せきにん]を自覚[じかく]することである。私[わたし]たちが今[いま]の怠惰[たいだ]を許[ゆる]す限[かぎ]り、問題[もんだい]は次[つぎ]の世代[せだい]に深刻[しんこく]な形[かたち]で先送[さきおく]りされる。これは単[たん]なる政策[せいさく]課題[かだい]ではなく、世代[せだい]を超[こ]えた約束[やくそく]の問[と]いである。"
    ],
    translation: [
      "In recent years, the declining birthrate and aging population in Japan has come to face a situation so serious it is called a national crisis. According to Ministry of Internal Affairs statistics, the total population has already entered a phase of decline, and if the current trend continues, it is projected to fall below one hundred million in fifty years. The birthrate has remained at a low level for a long time, with no signs of recovery. Meanwhile, the proportion of those aged sixty-five and over has exceeded thirty percent, making Japan the most aged society in the world. This reversal of population structure is a problem that shakes the very foundation of society.",
      "The population structure that once supported the high-growth era is now having the opposite effect. The decline of the working-age population threatens not only labor shortages but also the maintenance of the social security system. If left as is, the current pension and medical systems will surely reach an impasse. An inverted pyramid structure in which one working-age person supports multiple elderly is no longer sustainable. Social security spending grows year by year, and the burden on the national treasury is nearing its limit.",
      "As a response to labor shortages, the government has gradually expanded the acceptance of foreign workers. However, many point out that this is not a fundamental solution. Immigration policy entails cultural friction and the difficulty of social integration. It is essential to accept them not merely as a labor force but as partners in building society together. Looking at examples from other advanced nations, integrating immigrants requires long-term effort. Relying on immigration itself demands the resolve to accept the inevitable transformation of Japanese society.",
      "Economic factors are deeply involved in the background of the declining birthrate. The increase of non-regular employment, stagnant wages, and soaring housing and education costs are hindering marriage and childbirth among younger generations. The lack of childcare environments, exemplified by the waiting-children problem, has also become a heavy burden for working women. The government has expanded childcare support measures, but the effects are limited. Unless a society is realized in which young people can hold hope for the future, recovery of the birthrate cannot be expected.",
      "The collapse of local communities is also a serious problem. In rural areas where depopulation is progressing, store closures, school consolidations, and the shrinking of public transport are occurring in chain reaction. In settlements where only the elderly are left behind, so-called marginal settlements where even daily shopping becomes difficult are increasing. With no one to support local festivals and communal work, the transmission of traditional culture is also in a critical state. The collapse of local communities is not merely an economic problem but directly tied to cultural loss.",
      "Reform of the social security system is also an unavoidable task. Issues to be discussed have piled up, such as raising the pension eligibility age, reviewing co-payments for medical expenses, and ensuring the sustainability of the long-term care insurance system. However, partly due to political circumstances in which elderly voter turnout is high, decisions have continued to be postponed. Before the burden on the working generation reaches its limit, fundamental reform must be embarked upon. Balancing the maintenance of the system with the fairness of burdens is a trial for politics.",
      "To overcome this national crisis, a long-term perspective that goes beyond short-term countermeasures is necessary. A redesign of society premised on population decline, productivity improvement through technology, and acceptance of diverse work styles — multi-faceted efforts are required. Government policy goes without saying, but reform of awareness in companies, communities, and individuals is also indispensable. Above all, what is most important is to recognize responsibility toward future generations. As long as we tolerate present complacency, the problems will be passed on to the next generation in a more serious form. This is not merely a policy challenge but a question of a promise across generations."
    ],
    questions: [
      {
        q: "According to the passage, what is projected to happen to Japan's population in fifty years if the current trend continues?",
        choices: ["It will exceed 200 million", "It will fall below 100 million", "It will stabilize at 130 million", "It will become the youngest in Asia"],
        answerIndex: 1,
        explanation: "The text states that if the trend continues, the population will fall below one hundred million in fifty years (一億人を割り込むと予測されている)."
      },
      {
        q: "What concern does the passage raise about relying on immigration as a solution?",
        choices: ["It would immediately solve all labor issues", "It requires accepting the inevitable transformation of Japanese society", "It would reduce the elderly population", "It would lower voter turnout"],
        answerIndex: 1,
        explanation: "Relying on immigration demands the resolve to accept the inevitable transformation of Japanese society; integration requires long-term effort (移民に頼ること自体が、日本社会の変容を不可避にする覚悟を求める)."
      },
      {
        q: "What does the author identify as the key economic causes behind the declining birthrate?",
        choices: ["Lower taxes and stable wages", "Rising non-regular employment, stagnant wages, and soaring housing and education costs", "Excessive government childcare benefits", "Falling prices of all goods"],
        answerIndex: 1,
        explanation: "The text lists non-regular employment increase, wage stagnation, and housing/education cost inflation as hindering marriage and childbirth (経済的な要因が深く関わっている)."
      },
      {
        q: "Why have fundamental social security reforms been repeatedly postponed, according to the passage?",
        choices: ["Because there are no problems to fix", "Because elderly voter turnout is high, creating political reluctance", "Because the working generation refuses to pay anything", "Because the systems are already fully sustainable"],
        answerIndex: 1,
        explanation: "Partly due to the political situation where elderly voter turnout is high, decisions have been postponed (高齢者の投票率が高い政治的事情もあり、決断は先送りされ続けてきた)."
      },
      {
        q: "The phrase 'if we tolerate present complacency, problems will be passed to the next generation' uses which N2 pattern?",
        choices: ["〜次第", "〜限り (as long as)", "〜に過ぎない", "〜どころか"],
        answerIndex: 1,
        explanation: "私たちが今の怠惰を許す限り uses 〜限り meaning 'as long as'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-05 — Japanese cinema and society
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-05",
    title: "映画[えいが]が映[うつ]す社会[しゃかい]の変容[へんよう]",
    titleReading: "えいががうつすしゃかいのへんよう",
    level: "N2",
    summary: "An exploration of how Japanese cinema — from golden-age masters to contemporary directors — has mirrored the transformation of society: postwar anxieties, the bubble era's dislocation, the lost decades, and the quiet struggles of modern life.",
    estMinutes: 10,
    tags: ["cinema", "culture", "society", "history"],
    body: [
      "映画[えいが]は単[たん]なる娯楽[ごらく]にとどまらず、社会[しゃかい]の鏡[かがみ]として機能[きのう]してきた。日本[にほん]の映画[えいが]史[し]を振[ふ]り返[かえ]れば、各時代[かくじだい]の空気[くうき]や人[ひとびと]々の関心[かんしん]が、スクリーン[すくりーん]の上[うえ]に刻[きざ]まれているのが分[わ]かる。黒澤[くろさわ]明[あきら]や小津[おづ]安二郎[やじろう]が活躍[かつやく]した黄金[おうごん]時代[じだい]の作品[さくひん]には、戦後[せんご]の混乱[こんらん]と復興[ふっこう]のエネルギー[えねるぎー]が宿[やど]っていた。彼[かれ]らの映画[えいが]は、単[たん]に物語[ものがたり]を語[かた]るだけでなく、日本人[にほんじん]の精神性[せいしんせい]を世界[せかい]に発信[はっしん]した。その芸術[げいじゅつ]的[てき]価値[かち]は、今[いま]なお色褪[いろあ]せることがない。",
      "小津[おづ]安二郎[やじろう]の作品[さくひん]は、日本[にほん]の家族[かぞく]の変容[へんよう]を静[しず]かに描[えが]いたことで知[し]られている。『東京[とうきょう]物語[ものがたり]』に代表[だいひょう]される彼[かれ]の映画[えいが]は、近代化[きんだいか]が進[すす]む中[なか]で家族[かぞく]の絆[きずな]が薄[うす]れていく過程[かてい]を描[えが]いた。親[おや]と子[こ]の世代間[せだいかん]の距離[きょり]、地方[ちほう]から都市[とし]への人口[じんこう]移動[いどう]、核家族[かくかぞく]化[か]の進行[しんこう]など、社会[しゃかい]の変化[へんか]が家族[かぞく]の形[かたち]を変[か]えていく様子[ようす]が映[うつ]し出[だ]されている。小津[おづ]は劇的[げきてき]な展開[てんかい]を避[さ]け、日常[にちじょう]の一[ひと]こま一[ひと]こまを積[つ]み重[かさ]ねることで、深[ふか]い感動[かんどう]を引[ひ]き出[だ]した。その手法[しゅほう]は、当時[とうじ]の社会[しゃかい]の体温[たいおん]をそのまま映[うつ]す鏡[かがみ]であった。",
      "1980年代[ねんだい]に入[はい]ると、映画[えいが]はバブル[ばぶる]期[き]の浮[う]かれた空気[くうき]を反映[はんえい]するようになった。都市[とし]の夜景[やけい]、華[はな]やかな消費[しょうひ]文化[ぶんか]、若者[わかもの]の孤独[こどく]といった主題[しゅだい]が、当時[とうじ]の作品[さくひん]に頻繁[ひんぱん]に登場[とうじょう]した。一方[いっぽう]で、森田[もりた]芳光[よしみつ]や相米[そうまい]慎二[しんじ]といった監督[かんとく]たちは、物質[ぶっしつ]的[てき]な豊[ゆた]かさの裏[うら]に潜[ひそ]む虚無[きょむ]感[かん]を鋭[するど]く描[えが]いた。経済[けいざい]的[てき]な成功[せいこう]が必[かなら]ずしも精神[せいしん]的[てき]な充足[じゅそく]をもたらすわけではないという矛盾[むじゅん]が、スクリーン[すくりーん]の上[うえ]で浮[う]き彫[ぼ]りになった。この時代[じだい]の映画[えいが]は、豊[ゆた]かさの中[なか]での不安[ふあん]を予言[よげん]するかのようであった。",
      "バブル[ばぶる]崩壊[ほうかい]後[ご]の失[うしな]われた十年[じゅうねん]に、映画[えいが]は再[さい]び社会[しゃかい]の閉塞[へいそく]感[かん]を映[うつ]し出[だ]した。北野[きたの]武[たけし]や是枝[これえだ]裕和[ひろかず]の作品[さくひん]には、社会[しゃかい]の縁[えん]に生[い]きる人[ひとびと]々の静[しず]かな闘[たたか]いが描[えが]かれた。家族[かぞく]の崩壊[ほうかい]、不登校[ふとうこう]、少年[しょうねん]犯罪[はんざい]といった社会[しゃかい]問題[もんだい]が、映画[えいが]の主題[しゅだい]として頻繁[ひんぱん]に取[と]り上[あ]げられた。是枝[これえだ]監督[かんとく]の『誰[だれ]も知[し]らない』は、孤立[こりつ]した子[こ]供[ども]たちの姿[すがた]を通[とお]して、現代[げんだい]社会[しゃかい]の冷[つめ]たさを告発[こくはつ]した。この時代[じだい]の映画[えいが]は、社会[しゃかい]の暗[くら]い側面[そくめん]に目[め]を向[む]けることで、観客[かんきゃく]に考[かんが]えを促[うなが]す役割[やくわり]を果[はた]した。",
      "近年[きんねん]の日本[にほん]映画[えいが]は、新[あたら]しい課題[かだい]に取[と]り組[く]み始[はじ]めている。少子[しょうし]高齢化[こうれいか]、格差[かくさ]社会[しゃかい]、デジタル[でじたる]化[か]による人間[にんげん]関係[かんけい]の変化[へんか]など、現代[げんだい]の問題[もんだい]が映画[えいが]の主題[しゅだい]となっている。例[たと]えば、老人[ろうじん]の孤[こ]独[どく]死[し]や若者[わかもの]の貧困[ひんこん]を描[えが]いた作品[さくひん]は、社会[しゃかい]の見[み]えない部分[ぶぶん]に光[ひかり]を当[あ]てた。また、アニメーション[あにめーしょん]という形式[けいしき]を通[とお]して、社会[しゃかい]問題[もんだい]を広[ひろ]い視点[してん]から描[えが]く作品[さくひん]も登場[とうじょう]した。映画[えいが]は、娯楽[ごらく]という衣[ころも]をまとった社会[しゃかい]評論[ひょうろん]としての役割[やくわり]を果[はた]し続[つづ]けている。",
      "日本[にほん]映画[えいが]の特徴[とくちょう]は、劇的[げきてき]な展開[てんかい]よりも、人[ひと]の微[かす]かな感情[かんじょう]の揺[ゆ]れ動[うご]きを描[えが]く点[てん]にある。ハリウッド[はりうっど]映画[えいが]のような派手[はで]なアクション[あくしょん]は少[すく]なく、日常[にちじょう]の中[なか]に潜[ひそ]むドラマ[どらま]を浮[う]き彫[ぼ]りにする。この静[しず]かな物語[ものがたり]の積[つ]み重[かさ]ねは、観客[かんきゃく]に深[ふか]い余韻[よいん]を残[のこ]す。しかし、近年[きんねん]はこの伝統[でんとう]的[てき]な手法[しゅほう]が変化[へんか]しつつある。国際[こくさい]市場[しじょう]を意識[いしき]した作品[さくひん]が増[ふ]え、より分[わ]かりやすい表現[ひょうげん]も取[と]り入[い]れられるようになった。これは日本[にほん]映画[えいが]が新[あたら]しい段階[だんかい]に進[すす]もうとしている兆[きざ]しに過[す]ぎない。",
      "映画[えいが]が社会[しゃかい]の鏡[かがみ]である限[かぎ]り、社会[しゃかい]が変[か]われば映画[えいが]も変[か]わる。現代[げんだい]の映画[えいが]監督[かんとく]たちは、新[あたら]しい時代[じだい]の物語[ものがたり]を模索[もさく]している。その過程[かてい]で生[しょう]まれる作品[さくひん]は、これからの社会[しゃかい]を形作[かたちづく]る一助[いちじょ]となる。観客[かんきゃく]は映画[えいが]を通[とお]して、自分[じぶん]の生[い]きる時代[じだい]を客観的[きゃっかんてき]に見[み]つめ直[なお]す機会[きかい]を得[え]る。この対話[たいわ]が続[つづ]く限[かぎ]り、映画[えいが]は社会[しゃかい]と共[とも]に生[い]き続[つづ]ける芸術[げいじゅつ]であり続[つづ]けるだろう。映画[えいが]が映[うつ]す社会[しゃかい]の変容[へんよう]を辿[たど]ることは、私[わたし]たち自身[じしん]の変容[へんよう]を理解[りかい]することに他[ほか]ならない。"
    ],
    translation: [
      "Cinema, far from being mere entertainment, has functioned as a mirror of society. Looking back on the history of Japanese film, one can see that the atmosphere and concerns of each era are inscribed on the screen. The works of the golden age, when Akira Kurosawa and Yasujiro Ozu were active, harbored the energy of postwar chaos and reconstruction. Their films did not merely tell stories; they transmitted Japanese spirituality to the world. Their artistic value has not faded even now.",
      "Yasujiro Ozu's works are known for quietly depicting the transformation of the Japanese family. His films, represented by Tokyo Story, portrayed the process by which family bonds thinned amid advancing modernization. The distance between parent and child generations, the population movement from rural areas to cities, and the progress of nuclear-familyization — the way social change reshapes the family is reflected. Ozu avoided dramatic developments and instead piled up fragments of daily life to draw deep emotion. His method was a mirror that reflected the warmth of the society of that time as it was.",
      "Entering the 1980s, films came to reflect the buoyant atmosphere of the bubble era. Themes such as city nightscapes, glamorous consumer culture, and youth loneliness frequently appeared in works of the period. On the other hand, directors such as Yoshimitsu Morita and Shinji Somai sharply depicted the sense of emptiness lurking behind material affluence. The contradiction — that economic success does not necessarily bring spiritual fulfillment — was highlighted on the screen. Films of this era seemed to prophesy the anxiety amid plenty.",
      "In the lost decade after the bubble burst, films again reflected the sense of social stagnation. The works of Takeshi Kitano and Hirokazu Kore-eda portrayed the quiet struggles of people living on the margins of society. Social issues such as family collapse, school refusal, and juvenile crime were frequently taken up as film subjects. Kore-eda's Nobody Knows, through the figure of isolated children, denounced the coldness of contemporary society. Films of this era played a role in turning the audience's eyes to the dark side of society and prompting reflection.",
      "Recent Japanese films have begun to tackle new issues. The declining birthrate and aging population, the gap society, and changes in human relationships caused by digitalization have become film subjects. For example, works depicting the solitary death of the elderly or the poverty of the young shed light on the invisible parts of society. Works that portray social issues from a broader perspective through the form of animation have also appeared. Cinema continues to play the role of social commentary dressed in the clothes of entertainment.",
      "A characteristic of Japanese cinema is that it portrays subtle emotional fluctuations rather than dramatic developments. There is little of the flashy action seen in Hollywood films; instead, the drama lurking within the everyday is brought into relief. This accumulation of quiet storytelling leaves deep reverberations in the audience. However, in recent years this traditional approach has been changing. Works that are conscious of international markets have increased, and more accessible expression has come to be adopted. This is merely a sign that Japanese cinema is about to enter a new stage.",
      "As long as cinema is a mirror of society, when society changes, cinema changes too. Contemporary film directors are searching for the stories of a new era. The works produced in this process will help shape the society to come. Through film, the audience gains the opportunity to objectively re-examine the era in which they live. As long as this dialogue continues, cinema will remain an art form that lives together with society. Tracing the transformation of society reflected in cinema is nothing other than understanding our own transformation."
    ],
    questions: [
      {
        q: "What does the passage say about the works of the golden age of Japanese cinema (Kurosawa, Ozu)?",
        choices: ["They were purely commercial entertainment", "They embodied postwar chaos and reconstruction and transmitted Japanese spirituality", "They avoided any postwar themes", "They were unknown outside Japan"],
        answerIndex: 1,
        explanation: "The golden-age works harbored the energy of postwar chaos and reconstruction and transmitted Japanese spirituality to the world (戦後の混乱と復興のエネルギーが宿っていた)."
      },
      {
        q: "How did 1980s films portray the bubble era?",
        choices: ["They ignored material wealth entirely", "They reflected the buoyant atmosphere while depicting an underlying sense of emptiness", "They focused only on rural farming life", "They predicted a return to feudal values"],
        answerIndex: 1,
        explanation: "Bubble-era films reflected the buoyant air, but directors like Morita and Somai sharply depicted the emptiness lurking behind material affluence (物質的な豊かさの裏に潜む虚無感)."
      },
      {
        q: "What role did post-bubble films like Kore-eda's Nobody Knows play, according to the passage?",
        choices: ["They offered pure escapism", "They denounced society's coldness by turning eyes to its dark side", "They promoted rapid economic recovery", "They avoided social issues completely"],
        answerIndex: 1,
        explanation: "Nobody Knows, through isolated children, denounced the coldness of contemporary society; films of this era prompted reflection on the dark side of society (現代社会の冷たさを告発した)."
      },
      {
        q: "What recent change in Japanese cinema's traditional method does the passage note?",
        choices: ["It has stopped using any storytelling at all", "More accessible expression has been adopted with international markets in mind", "It has returned exclusively to silent film", "It now only produces historical samurai films"],
        answerIndex: 1,
        explanation: "Recently, works conscious of international markets have increased, and more accessible expression has come to be adopted (国際市場を意識した作品が増え、より分かりやすい表現も取り入れられた)."
      },
      {
        q: "Which N2 pattern is used to mean 'this is merely a sign that Japanese cinema is entering a new stage'?",
        choices: ["〜に違いない", "〜限り", "〜に過ぎない (merely)", "〜うちに"],
        answerIndex: 2,
        explanation: "兆しに過ぎない uses 〜に過ぎない meaning 'merely'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-06 — A story about cross-cultural marriage
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-06",
    title: "文化[ぶんか]の境界[きょうかい]を越[こ]えて",
    titleReading: "ぶんかのきょうかいをこえて",
    level: "N2",
    summary: "A story about Kenji and Maria, a Japanese-Brazilian couple navigating language, family expectations, childrearing dilemmas, and prejudice — and how they build a new kind of family identity across cultural boundaries.",
    estMinutes: 11,
    tags: ["marriage", "cross-cultural", "story", "identity"],
    body: [
      "健司[けんじ]とマリア[まりあ]が出会[であ]ったのは、東京[とうきょう]の語学[ごがく]学校[がっこう]でのことであった。健司[けんじ]は日本[にほん]の商社[しょうしゃ]に勤[つと]める真面目[まじめ]な青年[せいねん]で、休日[きゅうじつ]にはスペイン[すぺいん]語[ご]を学[まな]んでいた。マリア[まりあ]はブラジル[ぶらじる]から日本[にほん]に留学[りゅうがく]に来[き]た明[あか]るい性格[せいかく]の女性[じょせい]である。二人[ふたり]は最初[さいしょ]言語[げんご]の壁[かべ]に戸惑[とまど]いながらも、次第[しだい]に心[こころ]を通[つう]わせるようになった。健司[けんじ]はマリア[まりあ]の率直[そっちょく]さに惹[ひ]かれ、マリア[まりあ]は健司[けんじ]の誠実[せいじつ]さに安心[あんしん]を覚[おぼ]えた。一年[いちねん]の交際[こうさい]を経[へ]て、二人[ふたり]は結婚[けっこん]を決意[けつい]した。",
      "しかし、二人[ふたり]の結婚[けっこん]は簡単[かんたん]な道[みち]のりではなかった。健司[けんじ]の両親[りょうしん]は最初[さいしょ]、外国人[がいこくじん]との結婚[けっこん]に難色[なんしょく]を示[しめ]した。母[はは]は、言葉[ことば]の違[ちが]う相手[あいて]と本当[ほんとう]にうまくやっていけるのかと心配[しんぱい]した。父[ちち]は、親戚[しんせき]や近所[きんじょ]の目[め]が気[き]になった。マリア[まりあ]の家族[かぞく]もまた、娘[むすめ]が遠[とお]い異国[いこく]で苦労[くろう]するのではないかと案[あん]じた。二人[ふたり]は、双方[そうほう]の家族[かぞく]の懸念[けねん]に真摯[しんし]に向[む]き合[あ]うことを選[えら]んだ。時間[じかん]をかけて対話[たいわ]を重[かさ]ねるうちに、少[すこ]しずつ理解[りかい]が深[ふか]まっていった。",
      "結婚[けっこん]後[ご]、最大[さいだい]の課題[かだい]は言語[げんご]と文化[ぶんか]の違[ちが]いであった。健司[けんじ]は日本[にほん]語[ご]で、マリア[まりあ]はポルトガル[ぽるとがる]語[ご]で思考[しこう]するため、些細[ささい]な誤解[ごかい]が頻繁[ひんぱん]に起[お]きた。例[たと]えば、マリア[まりあ]が率直[そっちょく]に意見[いけん]を述[の]べるのを、健司[けんじ]は批判[ひはん]と受[う]け取[と]ることがあった。逆[ぎゃく]に、健司[けんじ]の曖昧[あいまい]な返事[へんじ]を、マリア[まりあ]は無関心[むかんしん]と感[かん]じた。こうしたズレ[ずれ]を解消[かいしょう]するため、二人[ふたり]は週末[しゅうまつ]に互[たが]いの言語[げんご]を学[まな]び合[あ]う時間[じかん]を作[つく]った。言語[げんご]の学習[がくしゅう]は、単[たん]に手段[しゅだん]の習得[しゅうとく]ではなく、相手[あいて]の世界[せかい]を理解[りかい]する窓口[まどぐち]となった。",
      "子[こ]供[ども]が生[う]まれると、新[あたら]しい課題[かだい]が現[あらわ]れた。二人[ふたり]は子[こ]供[ども]にどちらの言語[げんご]を母語[ぼご]として教[おし]えるかで迷[まよ]った。健司[けんじ]は日本[にほん]で暮[く]らす以上[いじょう]、日本[にほん]語[ご]が中心[ちゅうしん]だと主張[しゅちょう]した。マリア[まりあ]は、自分[じぶん]の母語[ぼご]と文化[ぶんか]も継承[けいしょう]させたいと願[ねが]った。話[はな]し合[あ]いの末[すえ]、二人[ふたり]は家庭[かてい]内[ない]で二[ふた]つの言語[げんご]を使[つか]い分[わ]ける方法[ほうほう]を選[えら]んだ。母[はは]とはポルトガル[ぽるとがる]語[ご]、父[ちち]とは日本[にほん]語[ご]で話[はな]す、という生活[せいかつ]が始[はじ]まった。子[こ]供[ども]は二[ふた]つの言語[げんご]を自然[しぜん]に吸収[きゅうしゅう]し、二[ふた]つの文化[ぶんか]の橋渡[はしわた]しとなる存在[そんざい]に育[そだ]っていった。",
      "外[そと]の世界[せかい]からの偏見[へんけん]も、二人[ふたり]を試[ため]す試練[しれん]であった。近所[きんじょ]の人[ひと]がマリア[まりあ]を外国人[がいこくじん]という理由[りゆう]で冷遇[れいぐう]することもあった。子[こ]供[ども]が学校[がっこう]で混血[こんけつ]であることをからかわれたこともあった。そうした時[とき]、健司[けんじ]は家族[かぞく]を守[まも]るために立[た]ち上[あ]がった。彼[かれ]は会社[かいしゃ]の同僚[どうりょう]にも、地域[ちいき]の集会[しゅうかい]にも、自[みずか]ら進[すす]んで出席[しゅっせき]し、国際[こくさい]結婚[けっこん]に対[たい]する理解[りかい]を求[もと]めた。マリア[まりあ]も地域[ちいき]の国際[こくさい]交流[こうりゅう]協会[きょうかい]に参加[さんか]し、日本[にほん]社会[しゃかい]に溶[と]け込[こ]む努力[どりょく]を続[つづ]けた。二人[ふたり]の粘[ねば]り強[づよ]い姿勢[しせい]が、周囲[しゅうい]の意識[いしき]を少[すこ]しずつ変[か]えていった。",
      "結婚[けっこんに十年[じゅうねん]が経[た]った頃[ころ]、二人[ふたり]の家[いえ]には二[ふた]つの文化[ぶんか]が自然[しぜん]に調和[ちょうわ]していた。食卓[しょくたく]には日本[にほん]料理[りょうり]とブラジル[ぶらじる]料理[りょうり]が並[なら]び、家庭[かてい]内[ない]には二[ふた]つの言語[げんご]が響[ひび]き渡[わた]った。子[こ]供[ども]たちは二[ふた]つの文化[ぶんか]の良[よ]さを吸収[きゅうしゅう]し、自[みずか]らも新[あたら]しい文化[ぶんか]の担[にん]い手[て]となっていた。健司[けんじ]の両親[りょうしん]もマリア[まりあ]を家族[かぞく]の一員[いちいん]として受[う]け入[い]れ、マリア[まりあ]の母[はは]も定期的[ていきてき]に日本[にほん]を訪[おとず]れるようになった。二人[ふたり]が築[きず]き上[あ]げた家庭[かてい]は、文化[ぶんか]の融合[ゆうごう]というより、文化[ぶんか]の共生[きょうせい]の場[ば]と呼[よ]ぶべきものであった。",
      "健司[けんじ]とマリア[まりあ]の物語[ものがたり]は、国際[こくさい]結婚[けっこん]という一個[いっこ]の事例[じれい]に過[す]ぎない。しかし、そこに見[み]られるのは、文化[ぶんか]の違[ちが]いを超[こ]えて人間[にんげん]と人間[にんげん]が向[む]き合[あ]う普遍[ふへん]的[てき]な営[いとな]みである。言葉[ことば]の壁[かべ]、家族[かぞく]の反対[はんたい]、社会[しゃかい]の偏見[へんけん]といった障壁[しょうへき]は、決[けっ]して小[ちい]さなものではなかった。それでも二人[ふたり]は、諦[あきら]めずに歩[ある]み寄[よ]り続[つづ]けた。文化[ぶんか]の境界[きょうかい]を越[こ]えることの困難[こんなん]と豊[ゆた]かさを、二人[ふたり]は身[み]をもって示[しめ]した。違[ちが]いを認[みと]め合[あ]い、共[とも]に新[あたら]しい価値[かち]を創造[そうぞう]することこそが、これからの社会[しゃかい]に不可欠[ふかつけつ]な姿勢[しせい]に違[ちが]いない。"
    ],
    translation: [
      "Kenji and Maria first met at a language school in Tokyo. Kenji was a serious young man working at a Japanese trading company, studying Spanish on weekends. Maria was a bright woman who had come from Brazil to study in Japan. At first the two were bewildered by the language barrier, but gradually they came to share their hearts. Kenji was drawn to Maria's directness, and Maria felt reassured by Kenji's sincerity. After a year of dating, the two decided to marry.",
      "However, their marriage was not an easy path. At first, Kenji's parents showed reluctance about marriage to a foreigner. His mother worried whether he could truly get along with a partner who spoke a different language. His father was concerned about the eyes of relatives and neighbors. Maria's family, too, worried that their daughter might struggle in a distant foreign country. The two chose to earnestly face the concerns of both families. As they spent time and repeatedly talked, understanding deepened little by little.",
      "After marriage, the biggest challenge was the difference of language and culture. Because Kenji thought in Japanese and Maria in Portuguese, minor misunderstandings occurred frequently. For instance, when Maria stated her opinion directly, Kenji sometimes took it as criticism. Conversely, Maria felt that Kenji's ambiguous replies were indifference. To resolve such gaps, the two set aside time on weekends to learn each other's language. Learning the language became not merely the acquisition of a tool but a window through which to understand the partner's world.",
      "When a child was born, a new issue appeared. The two hesitated over which language to teach the child as a mother tongue. Kenji argued that as long as they lived in Japan, Japanese should be central. Maria wished to pass on her mother tongue and culture as well. After discussion, the two chose a method of using two languages within the home. A life began in which the child spoke Portuguese with the mother and Japanese with the father. The child naturally absorbed the two languages and grew into a being that would bridge the two cultures.",
      "Prejudice from the outside world was also a trial that tested the two. There were times when neighbors treated Maria coldly for being a foreigner. There was also a time when the child was teased at school for being of mixed blood. At such times, Kenji stood up to protect his family. He actively attended company colleagues' gatherings and community meetings, seeking understanding of international marriage. Maria also joined the local international exchange association, continuing her effort to blend into Japanese society. The two's tenacious attitude gradually changed the awareness of those around them.",
      "Around ten years after marriage, two cultures harmonized naturally in their home. Japanese and Brazilian dishes lined the dining table, and two languages echoed through the house. The children absorbed the best of both cultures and became themselves bearers of a new culture. Kenji's parents too accepted Maria as a family member, and Maria's mother came to visit Japan regularly. The household the two had built should be called not so much a fusion of cultures as a place of cultural coexistence.",
      "The story of Kenji and Maria is no more than a single case of international marriage. However, what is seen there is a universal endeavor of human beings facing one another beyond cultural difference. The barriers — the wall of language, family opposition, social prejudice — were by no means small. Even so, the two kept compromising without giving up. They demonstrated, with their own lives, both the difficulty and the richness of crossing cultural boundaries. Recognizing differences and creating new values together is surely the attitude indispensable for the society to come."
    ],
    questions: [
      {
        q: "How did Kenji and Maria first meet?",
        choices: ["At a Brazilian festival in Tokyo", "At a language school in Tokyo", "Through an arranged marriage meeting", "At Kenji's trading company"],
        answerIndex: 1,
        explanation: "The two met at a language school in Tokyo, where Kenji was studying Spanish and Maria had come from Brazil to study (東京の語学学校でのことであった)."
      },
      {
        q: "What was the main reason Kenji's parents initially opposed the marriage?",
        choices: ["They disliked Brazil", "They worried he couldn't get along with someone of a different language and were concerned about others' opinions", "They wanted him to marry a coworker", "They wanted him to remain single"],
        answerIndex: 1,
        explanation: "His mother worried whether he could truly get along with a partner speaking a different language; his father was concerned about the eyes of relatives and neighbors."
      },
      {
        q: "How did the couple resolve the conflict over which language to teach their child?",
        choices: ["They taught only Japanese", "They taught only Portuguese", "They used two languages at home — Portuguese with the mother, Japanese with the father", "They sent the child to Brazil immediately"],
        answerIndex: 2,
        explanation: "After discussion, they chose to use two languages in the home: Portuguese with the mother, Japanese with the father (二つの言語を使い分ける方法を選んだ)."
      },
      {
        q: "What did Kenji and Maria do to address prejudice from the outside world?",
        choices: ["They moved to Brazil permanently", "They hid their marriage from neighbors", "Kenji sought understanding at work and community meetings; Maria joined the international exchange association", "They stopped speaking Portuguese in public"],
        answerIndex: 2,
        explanation: "Kenji actively attended company and community gatherings seeking understanding; Maria joined the local international exchange association to integrate into Japanese society."
      },
      {
        q: "Which N2 pattern is used to convey 'surely the attitude indispensable for the society to come'?",
        choices: ["〜に違いない (surely)", "〜限り", "〜次第", "〜どころか"],
        answerIndex: 0,
        explanation: "不可欠な姿勢に違いない uses 〜に違いない meaning 'surely / without a doubt'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-07 — Environmental policy in Japan
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-07",
    title: "環境[かんきょう]政策[せいさく]の岐路[きろ]",
    titleReading: "かんきょうせいさくのきろ",
    level: "N2",
    summary: "An overview of Japan's environmental policy debates — the 2050 carbon-neutrality pledge, the growth-versus-environment tension, nuclear energy after Fukushima, carbon pricing, and the intergenerational justice at stake.",
    estMinutes: 12,
    tags: ["environment", "climate", "policy", "energy"],
    body: [
      "日本[にほん]は2050年[ねん]までに温室[おんしつ]効果[こうか]ガス[がす]の排出[はいしゅつ]を実質[じっしつ]ゼロ[ぜろ]にするという目標[もくひょう]を掲[かか]げた。これは気候[きこう]変動[へんどう]という地球[ちきゅう]規模[きぼ]の危機[きき]に対[たい]する、日本[にほん]としての覚悟[かくご]を示[しめ]す宣言[せんげん]であった。しかし、この目標[もくひょう]を達成[たっせい]するための道筋[みちすじ]は、決[けっ]して平坦[へいたん]なものではない。産業[さんぎょう]界[かい]の反発[はんぱつ]、技術[ぎじゅつ]的[てき]な壁[かべ]、財政[ざいせい]的[てき]な制約[せいやく]など、障害[しょうがい]は山積[やんせき]している。環境[かんきょう]政策[せいさく]は今[いま]、重大[じゅうだい]な岐路[きろ]に立[た]っていると言[い]ってよい。",
      "経済[けいざい]成長[せいちょう]と環境[かんきょう]保護[ほご]の二[ふた]律[りつ]背反[はいたん]は、古[ふる]くからの難題[なんだい]である。日本[にほん]の産業[さんぎょう]界[かい]は、厳[きび]しい排出[はいしゅつ]規制[きせい]が国際[こくさい]競争[きょうそう]力[りょく]を削[けず]ることを懸念[けねん]している。特[とく]に鉄鋼[てっこう]や化学[かがく]など、エネルギー[えねるぎー]多消[たしょう]型[がた]産業[さんぎょう]では、脱[だつ]炭素[たんそ]化[か]への転換[てんかん]は巨大[きょだい]な投資[とうし]を必要[ひつよう]とする。一方[いっぽう]で、環境[かんきょう]保護[ほご]を後回[あとまわ]しにすれば、将来[しょうらい]の世代[せだい]に多大[ただい]な負担[ふたん]を押[お]し付[つ]けることになる。このジレンマ[じれんま]をどう解[と]くかが、政策[せいさく]立案[りあん]の核心[かくしん]である。",
      "原発[げんぱつ]問題[もんだい]も環境[かんきょう]政策[せいさく]に大[おお]きな影響[えいきょう]を与[あた]えている。2011年[ねん]の福島[ふくしま]原発[げんぱつ]事故[じこ]以降[いこう]、日本[にほん]は原発[げんぱつ]の稼働[かどう]を大幅[おおはば]に縮小[しゅくしょう]した。その結果[けっか]、火力[かりょく]発電[はつでん]への依存[いぞん]が高[たか]まり、二酸化[にさんか]炭素[たんそ]の排出[はいしゅつ]量[りょう]は容易[ようい]には減[へ]らなかった。原発[げんぱつ]を再[さい]稼働[かどう]させる声[こえ]もある一方[いっぽう]で、安全性[あんぜんせい]への懸念[けねん]は依然[いぜん]として強[つよ]い。原発[げんぱつ]に頼[たよ]らない脱[だつ]炭素[たんそ]化[か]の道[みち]を模索[もさく]することが、日本[にほん]に課[か]された難問[なんもん]となっている。",
      "再生[さいせい]可能[かのう]エネルギー[えねるぎー]の導入[どうにゅう]は、解決[かいけつ]策[さく]の一[ひと]つと位置[いち]づけられている。太陽[たいよう]光[こう]発電[はつでん]や風力[ふうりょく]発電[はつでん]の導入[どうにゅう]量[りょう]は、この十年[じゅうねん]で飛躍[ひやく]的[てき]に伸[の]びた。しかし、日本[にほん]の地形[ちけい]は山[やま]が多[おお]く、大[おお]規模[きぼ]な発電[はつでん]所[しょ]を設[もう]ける適地[てきち]は限[かぎ]られている。また、電力[でんりょく]網[もう]の整備[せいび]が追[お]いつかず、地域[ちいき]ごとの電力[でんりょく]需給[じゅきゅう]のバランス[ばらんす]を取[と]ることも難[むずか]しい。再生[さいせい]可能[かのう]エネルギー[えねるぎー]への移行[いこう]は、技術[ぎじゅつ]的[てき]な課題[かだい]と並行[へいこう]して、社会[しゃかい]的[てき]な受容[じゅよう]の課題[かだい]でもある。",
      "二酸化[にさんか]炭素[たんそ]の排出[はいしゅつ]に価格[かかく]を付[つ]ける炭素[たんそ]税[ぜい]や排出[はいしゅつ]権[けん]取引[とりひき]の制度[せいど]も議論[ぎろん]されている。しかし、日本[にほん]の炭素[たんそ]税[ぜい]は欧州[おうしゅう]に比[くら]べて低[ひく]く、十分[じゅうぶん]な抑制[よくせい]効果[こうか]を生[しょう]じていないとの指摘[してき]が多[おお]い。税[ぜい]の引上[ひきあ]げは消費者[しょうひしゃ]の負担[ふたん]増[ぞう]につながるため、政治[せいじ]的[てき]な抵抗[ていこう]も強[つよ]い。環境[かんきょう]政策[せいさく]の有効[ゆうこう]性[せい]と経済[けいざい]的[てき]な負担[ふたん]の公平[こうへい]性[せい]をどう両立[りょうりつ]させるかが、政策[せいさく]の鍵[かぎ]を握[にぎ]っている。この問題[もんだい]を先[さき]送[おく]りする限[かぎ]り、気候[きこう]目標[もくひょう]の達成[たっせい]は遠[とお]のくばかりである。",
      "気候[きこう]変動[へんどう]対策[たいさく]は、世代[せだい]間[かん]の正義[せいぎ]の問題[もんだい]でもある。現[げん]世代[せだい]が便利[べんり]な生活[せいかつ]を維持[いじ]するために環境[かんきょう]を犠牲[ぎせい]にすれば、その代償[だいしょう]は未来[みらい]の世代[せだい]が背負[せお]うことになる。若[わか]い世代[せだい]からは、気候[きこう]変動[へんどう]対策[たいさく]の不十分[ふじゅうぶん]さに対[たい]する強[つよ]い不満[ふまん]が表明[ひょうめい]されている。彼[かれ]らは、自分[じぶん]たちの未来[みらい]が現在[げんざい]の政策[せいさく]決定[けってい]によって左右[さゆう]されることに危機[きき]感[かん]を抱[いだ]いている。環境[かんきょう]政策[せいさく]は、単[たん]なる経済[けいざい]政策[せいさく]ではなく、未来[みらい]への責任[せきにん]を問[と]う倫理[りんり]的[てき]な選択[せんたく]でもある。この認識[にんしき]が共有[きょうゆう]されるかどうかに、政策[せいさく]の成否[せいひ]がかかっている。",
      "日本[にほん]の環境[かんきょう]政策[せいさく]は、技術[ぎじゅつ]、経済[けいざい]、政治[せいじ]、倫理[りんり]という多[おお]くの次元[じげん]を同時[どうじ]に考慮[こうりょ]しなければならない。2050年[ねん]の目標[もくひょう]を単[たん]なスローガン[すろーがん]に終[お]わらせないためには、具体[ぐたい]的[てき]な改革[かいかく]が不可欠[ふかつけつ]である。産業[さんぎょう]構造[こうぞう]の転換[てんかん]、エネルギー[えねるぎー]政策[せいさく]の見直[みなお]し、税[ぜい]制[せい]の改革[かいかく]、そして市民[しみん]の意識[いしき]変革[へんかく]が連動[れんどう]して進[すす]む必要[ひつよう]がある。政策[せいさく]の方向[ほうこう]が決[き]まる次第[しだい]で、日本[にほん]社会[しゃかい]の未来[みらい]の姿[すがた]は大[おお]きく変[か]わる。岐路[きろ]に立[た]つ日本[にほん]がどの道[みち]を選[えら]ぶのか、その選択[せんたく]の責任[せきにん]は私[わたし]たち全員[ぜんいん]にある。気候[きこう]危機[きき]は他人[たにん]事[ごと]ではなく、紛[まぎ]れもなく自分[じぶん]たちの問題[もんだい]である。"
    ],
    translation: [
      "Japan has set the goal of reducing greenhouse gas emissions to net zero by 2050. This was a declaration showing Japan's resolve toward the global-scale crisis of climate change. However, the path to achieving this goal is by no means smooth. Obstacles are piled high: industry pushback, technological barriers, and fiscal constraints. It is fair to say that environmental policy now stands at a major crossroads.",
      "The dilemma between economic growth and environmental protection is an old, persistent problem. Japanese industry worries that strict emission regulations will erode international competitiveness. Particularly in energy-intensive industries such as steel and chemicals, the shift to decarbonization requires enormous investment. On the other hand, postponing environmental protection imposes a huge burden on future generations. How to resolve this dilemma is the core of policy making.",
      "The nuclear issue is also having a major impact on environmental policy. Since the Fukushima nuclear accident in 2011, Japan has drastically curtailed nuclear operation. As a result, dependence on thermal power generation increased, and carbon dioxide emissions did not fall readily. While there are calls to restart nuclear plants, concern about safety remains strong. Searching for a path to decarbonization that does not rely on nuclear power has become a difficult task imposed on Japan.",
      "The introduction of renewable energy is positioned as one solution. The volume of solar and wind power introduced has grown dramatically in the last decade. However, Japan's terrain is mountainous, and suitable sites for large-scale power plants are limited. In addition, the power grid has not been developed fast enough, and it is difficult to balance regional power supply and demand. The transition to renewable energy is a social acceptance challenge alongside the technological one.",
      "Carbon pricing systems — carbon taxes and emissions trading — are also being discussed. However, many point out that Japan's carbon tax is low compared with Europe and has not produced sufficient curbing effects. Raising the tax leads to increased consumer burden, so political resistance is also strong. How to balance the effectiveness of environmental policy with the fairness of the economic burden holds the key to policy. As long as this issue is postponed, achievement of the climate goals only recedes.",
      "Climate change countermeasures are also a matter of intergenerational justice. If the current generation sacrifices the environment to maintain a convenient lifestyle, future generations will bear the cost. Strong dissatisfaction with inadequate climate measures is being expressed by the younger generation. They feel a sense of crisis that their future is shaped by present policy decisions. Environmental policy is not merely economic policy but an ethical choice that asks about responsibility to the future. Whether this recognition is shared determines the success or failure of policy.",
      "Japan's environmental policy must simultaneously consider many dimensions: technology, economy, politics, and ethics. In order not to let the 2050 goal end as a mere slogan, concrete reform is indispensable. Industrial restructuring, review of energy policy, tax reform, and transformation of citizens' awareness must proceed in coordination. The future shape of Japanese society will greatly change depending on the direction policy takes. The responsibility for which path Japan chooses at this crossroads lies with all of us. The climate crisis is not someone else's problem but unmistakably our own."
    ],
    questions: [
      {
        q: "What goal has Japan set for 2050 according to the passage?",
        choices: ["To double GDP", "To reduce greenhouse gas emissions to net zero", "To restart all nuclear plants", "To eliminate all renewable energy"],
        answerIndex: 1,
        explanation: "Japan has set the goal of reducing greenhouse gas emissions to net zero by 2050 (温室効果ガスの排出を実質ゼロにするという目標)."
      },
      {
        q: "Why does industry resist strict emission regulations?",
        choices: ["They want to increase emissions voluntarily", "They worry that strict regulations will erode international competitiveness and require huge investment", "They prefer foreign regulations over Japanese ones", "They have already achieved zero emissions"],
        answerIndex: 1,
        explanation: "Industry worries strict regulations erode international competitiveness; energy-intensive industries like steel and chemicals need enormous investment for decarbonization."
      },
      {
        q: "What happened to Japan's CO2 emissions after the Fukushima accident?",
        choices: ["They fell sharply", "They did not fall readily due to increased dependence on thermal power", "They became negative", "They were not affected at all"],
        answerIndex: 1,
        explanation: "After curtailing nuclear operation, dependence on thermal power increased, and CO2 emissions did not fall readily (火力発電への依存が高まり、二酸化炭素の排出量は容易には減らなかった)."
      },
      {
        q: "What does the passage say about Japan's carbon tax compared to Europe?",
        choices: ["It is much higher", "It is lower and has not produced sufficient curbing effects", "It is identical", "It has been abolished"],
        answerIndex: 1,
        explanation: "Japan's carbon tax is low compared with Europe and has not produced sufficient curbing effects; raising it faces political resistance (欧州に比べて低く、十分な抑制効果を生じていない)."
      },
      {
        q: "The phrase 'the future shape of Japanese society will greatly change depending on the direction policy takes' uses which N2 pattern?",
        choices: ["〜限り", "〜に過ぎない", "〜次第 (depending on)", "〜どころか"],
        answerIndex: 2,
        explanation: "政策の方向が決まる次第で uses 〜次第 meaning 'depending on'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-08 — The decline of rural communities
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-08",
    title: "地方[ちほう]消滅[しょうめつ]という危機[きき]",
    titleReading: "ちほうしょうめつというきき",
    level: "N2",
    summary: "An exploration of Japan's rural decline — the collapse of local industries and infrastructure, agricultural succession crises, the limits of revitalization policy, the hollowing-out of town centers, and the cultural loss that accompanies regional extinction.",
    estMinutes: 11,
    tags: ["rural", "regional collapse", "agriculture", "policy"],
    body: [
      "近年[きんねん]、日本[にほん]の地方[ちほう]では過疎[かそ]化[か]が深刻[しんこく]な問題[もんだい]となっている。総務省[そうむしょう]の調査[ちょうさ]によれば、2040年[ねん]には現在[げんざい]の市[し]区[く]町[ちょう]村[そん]の約[やく]半分[はんぶん]が消滅[しょうめつ]の可能性[かのうせい]があるという。人口[じんこう]の減少[げんしょう]は都市[とし]部[ぶ]でも進[すす]むが、地方[ちほう]ではその影響[えいきょう]が致命傷[ちめいしょう]となる。若[わか]い世代[せだい]が都市[とし]へ流出[りゅうしゅつ]し、残[のこ]されたのは高齢者[こうれいしゃ]ばかりという集落[しゅうらく]が増[ふ]えている。このままでは、日本[にほん]の地方[ちほう]は文字通[もじどお]り消滅[しょうめつ]する危機[きき]に直面[ちょくめん]している。",
      "地方[ちほう]の産業[さんぎょう]衰退[すいたい]は、過疎[かそ]化[か]の最大[さいだい]の原因[げんいん]である。かつて地方[ちほう]を支[ささ]えた製造業[せいぞうぎょう]は、海外[かいがい]への生産[せいさん]移転[いてん]や合理化[ごうりか]で次[つぎ]々[つぎ]と姿[すがた]を消[け]した。地元[じもと]の商店[しょうてん]街[がい]も、大型[おおがた]ショッピング[しょっぴんぐ]センター[せんたー]やネット[ねっと]通販[つうはん]に押[お]され、空[あ]き店舗[てんぽ]が目立[めだ]つようになった。仕事[しごと]がないために若[わか]い人[ひと]が都市[とし]へ出[で]ざるを得[え]ないという悪循環[あくじゅんかん]が起[お]きている。雇用[こよう]の創出[そうしゅつ]が進[すす]まない限[かぎ]り、過疎[かそ]化[か]に歯止[はどめ]をかけることは不可能[ふかのう]である。",
      "農業[のうぎょう]の後継[こうけい]者[しゃ]不足[ぶそく]も深刻[しんこく]な問題[もんだい]である。日本[にほん]の農業[のうぎょう]従事[じゅうじ]者[しゃ]の平均[へいきん]年齢[ねんれい]は六十八[ろくじゅうはち]歳[さい]を超[こ]え、高齢化[こうれいか]が進[すす]んでいる。子[こ]供[ども]が農業[のうぎょう]を継[つ]がない場合[ばあい]、耕作[こうさく]放棄[ほうき]地[ち]が増[ふ]える一方[いっぽう]となる。耕作[こうさく]放棄[ほうき]地[ち]は、野生[やせい]動物[どうぶつ]の被害[ひがい]を招[まね]き、周辺[しゅうへん]の農地[のうち]にも悪影響[あくえいきょう]を及[およ]ぼす。また、食料[しょくりょう]自給[じきゅう]率[りつ]の低下[ていか]は、国家[こっか]の安全保障[あんぜんほしょう]にも関[かか]わる問題[もんだい]である。農業[のうぎょう]の近代化[きんだいか]と魅力[みりょく]向上[こうじょう]が急務[きゅうむ]である。",
      "公共交通[こうきょうこうつう]の縮小[しゅくしょう]も地方[ちほう]の生活[せいかつ]を圧迫[あっぱく]している。人口[じんこう]が減[へ]る中[なか]で、バス[ばす]路線[ろせん]や鉄道[てつどう]の維持[いじ]は困難[こんなん]となっている。車[くるま]を持[も]たない高齢者[こうれいしゃ]は、通院[つういん]や買[か]い物[もの]すらできなくなる事態[じたい]に陥[おちい]っている。いわゆる買[か]い物[もの]難民[なんみん]と呼[よ]ばれる人[ひと]々[ひとびと]が、全国[ぜんこく]で数百万人[すうひゃくまんにん]に上[のぼ]ると推計[すいけい]されている。インフラ[いんふら]の維持[いじ]コスト[こすと]は人口[じんこう]あたりの負担[ふたん]を増[ふや]し、財政[ざいせい]を更[さら]に圧迫[あっぱく]する。この悪循環[あくじゅんかん]を断[た]ち切[き]る方策[ほうさく]が急[きゅう]務[む]である。",
      "政府[せいふ]は地方[ちほう]創生[そうせい]を推進[すいしん]し、各種[かくしゅ]の支援[しえん]策[さく]を打[う]ち出[だ]してきた。しかし、その効果[こうか]は限[かぎ]定的[てき]であるとの指摘[してき]が多[おお]い。一部[いちぶ]の成功[せいこう]事例[じれい]は報[ほう]告[こく]されるものの、全体[ぜんたい]としては地方[ちほう]の衰退[すいたい]に歯止[はどめ]がかかっていない。また、巨額[きょがく]の公共[こうきょう]事業[じぎょう]が一部[いちぶ]の地域[ちいき]に集中[しゅうちゅう]し、格差[かくさ]を却[かえ]って拡大[かくだい]させているとの批判[ひはん]もある。地域[ちいき]の実情[じつじょう]に合[あ]った、きめ細[こま]かな支援[しえん]が求[もと]められている。画一的[かくいつてき]な政策[せいさく]では、本当[ほんとう]の意味[いみ]での地方[ちほう]再生[さいせい]は望[のぞ]めない。",
      "地方[ちほう]の衰退[すいたい]は、単[たん]なる経済[けいざい]問題[もんだい]どころか、文化的[ぶんかてき]な喪失[そうしつ]でもある。地域[ちいき]の祭典[さいてん]、伝統[でんとう]工芸[こうげい]、方言[ほうげん]など、その土地[とち]に根[ね]ざした文化[ぶんか]が消[き]えつつある。お年寄[としよ]りから若[わか]い世代[せだい]へ伝[つた]えられるべき知恵[ちえ]や技能[ぎのう]が、後継[こうけい]者[しゃ]不在[ふざい]で失[うしな]われている。祭典[さいてん]を支[ささ]える人[ひと]がいなくなり、伝統[でんとう]行事[ぎょうじ]が中止[ちゅうし]される例[れい]も増[ふ]えた。文化[ぶんか]の継承[けいしょう]を支[ささ]える仕組[しく]みを作[つく]らない限[かぎ]り、地域[ちいき]の魅力[みりょく]は失[うしな]われる。これらはお金[かね]では代[か]え難[がた]い、かけがえのない財産[ざいさん]である。",
      "地方[ちほう]消滅[しょうめつ]の危機[きき]を回避[かいひ]するためには、発想[はっそう]の転換[てんかん]が必要[ひつよう]である。人口[じんこう]減少[げんしょう]を前提[ぜんてい]としたコンパクト[こんぱくと]な都市[とし]づくり、遠隔[えんかく]医療[いりょう]や遠隔[えんかく]教育[きょういく]の充実[じゅうじつ]、移住[いじゅう]支援[しえん]の強化[きょうか]などが考[かんが]えられる。また、都市[とし]と地方[ちほう]の分断[ぶんだん]を埋[う]めるため、双方向[そうほうこう]の人[ひと]の流[なが]れを作[つく]ることも重要[じゅうよう]である。地域[ちいき]の課題[かだい]は地域[ちいき]の住民[じゅうみん]が主体[しゅたい]となって解決[かいけつ]する、という原則[げんそく]も大切[たいせつ]である。答[こた]えは簡単[かんたん]ではないが、この問[と]いに向[む]き合[あ]わない限[かぎ]り、未来[みらい]はない。地方[ちほう]が滅[ほろ]びることは、日本[にほん]全体[ぜんたい]が貧[まず]しくなることを意味[いみ]する。この事実[じじつ]を、私[わたし]たちは真[ま]剣[けん]に受[う]け止[と]めなければならない。"
    ],
    translation: [
      "In recent years, depopulation has become a serious problem in rural Japan. According to a Ministry of Internal Affairs survey, about half of the current cities, wards, towns, and villages are at risk of disappearing by 2040. Population decline advances in urban areas too, but in rural areas its impact is fatal. The younger generation flows out to cities, and settlements left with only elderly are increasing. As it stands, rural Japan faces a crisis of literally disappearing.",
      "The decline of rural industry is the biggest cause of depopulation. Manufacturing that once supported rural areas disappeared one after another through overseas relocation of production and rationalization. Local shopping streets too were pushed out by large shopping centers and online shopping, and vacant stores became conspicuous. A vicious cycle occurs in which, because there are no jobs, young people have no choice but to leave for cities. As long as job creation does not advance, it is impossible to halt depopulation.",
      "The shortage of agricultural successors is also a serious problem. The average age of Japanese agricultural workers exceeds sixty-eight, and aging is progressing. When children do not take over farming, fallow fields increase. Fallow fields invite damage from wild animals and adversely affect surrounding farmland. In addition, the decline in food self-sufficiency is a problem that concerns national security. Modernization and improvement of agriculture's appeal are urgent tasks.",
      "The shrinking of public transport also oppresses rural life. As population declines, maintaining bus routes and railways becomes difficult. Elderly without cars fall into situations where they cannot even go to hospital or shop. The people called shopping refugees are estimated to number several million nationwide. Infrastructure maintenance costs increase the per-capita burden and further squeeze finances. A measure to break this vicious cycle is urgent.",
      "The government has promoted regional revitalization and rolled out various support measures. However, many point out that the effects are limited. Some success cases are reported, but overall, the decline of rural areas has not been halted. There is also criticism that massive public works concentrate in some regions and actually widen disparities. Detailed support suited to local realities is required. Uniform policy cannot bring true regional revitalization.",
      "The decline of rural areas is not merely an economic problem but a cultural loss. Cultures rooted in the land — local festivals, traditional crafts, dialects — are disappearing. Wisdom and skills that should be passed from the elderly to the younger generation are being lost for lack of successors. Cases where there is no one to support festivals and traditional events are canceled have also increased. As long as no framework to support cultural transmission is created, regional appeal is lost. These are irreplaceable assets that money can hardly replace.",
      "To avert the crisis of regional extinction, a change of thinking is necessary. Compact city-building premised on population decline, enrichment of remote medicine and remote education, and strengthening of relocation support can be considered. Also, to bridge the divide between city and country, it is important to create a bidirectional flow of people. The principle that local issues be solved by local residents themselves as the main actors is also important. The answer is not simple, but unless we face this question, there is no future. The death of rural areas means the impoverishment of Japan as a whole. We must seriously take in this fact."
    ],
    questions: [
      {
        q: "What projection does the passage cite about Japanese municipalities by 2040?",
        choices: ["All will grow rapidly", "About half are at risk of disappearing", "The number will triple", "All will merge into one city"],
        answerIndex: 1,
        explanation: "A Ministry of Internal Affairs survey states that about half of current cities, wards, towns, and villages may disappear by 2040 (約半分が消滅の可能性がある)."
      },
      {
        q: "What does the passage identify as the biggest cause of rural depopulation?",
        choices: ["Strict environmental regulations", "Decline of rural industry and lack of jobs", "Too many tourists", "Excessive government subsidies"],
        answerIndex: 1,
        explanation: "The decline of rural industry is the biggest cause; young people have no choice but to leave for cities because there are no jobs (雇用の創出が進まない限り)."
      },
      {
        q: "What problem does the passage associate with fallow farmland?",
        choices: ["It improves food self-sufficiency", "It invites wild animal damage and affects surrounding farmland, lowering food self-sufficiency", "It has no effect on anything", "It automatically reforests into profitable timber"],
        answerIndex: 1,
        explanation: "Fallow fields invite wild-animal damage and adversely affect surrounding farmland; the decline in food self-sufficiency concerns national security (耕作放棄地は、野生動物の被害を招き)."
      },
      {
        q: "What criticism does the passage raise about the government's regional revitalization policy?",
        choices: ["It has completely solved all rural problems", "It is too detailed and fine-grained", "Effects are limited overall, and massive public works concentrate in some regions, widening disparities", "It focuses too much on agriculture"],
        answerIndex: 2,
        explanation: "Effects are limited overall; massive public works concentrate in some regions and actually widen disparities, drawing criticism (巨額の公共事業が一部の地域に集中し、格差を却って拡大させている)."
      },
      {
        q: "Which N2 pattern is used to mean 'the decline of rural areas is not merely an economic problem but a cultural loss'?",
        choices: ["〜どころか (far from / not merely)", "〜次第", "〜限り", "〜に過ぎない"],
        answerIndex: 0,
        explanation: "単なる経済問題どころか文化的な喪失でもある uses 〜どころか meaning 'far from / not merely'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-09 — Japanese philosophy in modern life
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-09",
    title: "現代[げんだい]に生[い]きる哲学[てつがく]",
    titleReading: "げんだいにいきるてつがく",
    level: "N2",
    summary: "A reflection on how Japanese philosophical traditions — wabi-sabi, mono no aware, mottainai, mujo — remain relevant amid modern consumerism, digital overload, and ecological crisis, offering a lens for a more sustainable way of life.",
    estMinutes: 10,
    tags: ["philosophy", "culture", "wabi-sabi", "modern life"],
    body: [
      "日本[にほん]には古[ふる]くから伝[つた]わる独自[どくじ]の哲学[てつがく]がある。それらは、欧米[おうべい]の哲学[てつがく]が重視[じゅうし]する論理[ろんり]や概念[がいねん]の探求[たんきゅう]とは異[こと]なる方向[ほうこう]性[せい]を持[も]っている。日本[にほん]の哲学[てつがく]は、むしろ日常[にちじょう]の営[いとな]みの中[なか]に込[こ]められた世界[せかい]観[かん]や美[び]意識[しき]として受[う]け継[つ]がれてきた。わび[わび]さび[さび]、もののあわれ、もったいない、無常[むじょう]といった考[かんが]えは、その典型[てんけい]的[てき]な例[れい]である。これらは、現代[げんだい]社会[しゃかい]においても意外[いがい]なほど新[あたら]しい意義[いぎ]を持[も]っている。",
      "わび[わび]さび[さび]は、簡素[かんそ]の中[なか]に深[ふか]い美[び]を見出[みいだ]す考[かんが]え方[かた]である。豪華[ごうか]さや派手[はで]さではなく、飾[かざ]り気[ぎ]のないものに宿[やど]る静[しず]かな魅力[みりょく]を尊[とうと]ぶ。茶[ちゃ]の湯[ゆ]や枯山水[かれさんすい]に代表[だいひょう]される美[び]意識[しき]は、この哲学[てつがく]を体現[たいげん]している。現代[げんだい]の消費[しょうひ]社会[しゃかい]では、新[あたら]しさや多[おお]くを持[も]つことが価値[かち]とされがちである。しかし、わび[わび]さび[さび]の視点[してん]から見[み]れば、足[た]るを知[し]ることの豊[ゆた]かさに気[き]づくことができる。簡素[かんそ]な生活[せいかつ]は、物質[ぶっしつ]的[てき]な豊[ゆた]かさとは違[ちが]う満足[まんぞく]をもたらす。",
      "もののあわれは、事物[じぶつ]の移[うつ]り変[が]わりに対[たい]する深[ふか]い感[かん]傷[しょう]を意味[いみ]する。桜[さくら]の花[はな]が散[ち]るのを見[み]て美[うつく]しさと哀[かな]しさを同時[どうじ]に感[かん]じる、その心[こころ]がもののあわれである。この感[かん]性[せい]は、すべてのものが変化[へんか]し、やがて消[き]えるという無常[むじょう]観[かん]に基[もと]づいている。現代[げんだい]人[じん]は、変化[へんか]を嫌[きら]い、永遠[えいえん]に若[わか]く、永遠[えいえん]に所有[しょゆう]し続[つづ]けようとしがちである。しかし、もののあわれの感[かん]性[せい]は、儚[はかな]さこそが美[うつく]しさの源泉[げんせん]であることを教[おし]える。変化[へんか]を受[う]け入[い]れる心[こころ]は、現代[げんだい]の不安[ふあん]を和[やわ]らげる力[ちから]を持[も]っている。",
      "もったいないは、物[もの]や資源[しげん]への感謝[かんしゃ]と惜[お]しみの心[こころ]を表[あらわ]す言葉[ことば]である。日本[にほん]では古[ふる]くから、無駄[むだ]を避[さ]け、物[もの]を大切[たいせつ]に使[つか]うことが美徳[びとく]とされてきた。この考[かんが]えは、現代[げんだい]の環境[かんきょう]問題[もんだい]に直結[ちょっけつ]する意義[いぎ]を持[も]っている。大量[たいりょう]生産[せいさん]と大量[たいりょう]消費[しょうひ]の時代[じだい]に、もったいないの精神[せいしん]は持続[じぞく]可能[かのう]な社会[しゃかい]への道[みち]を示[しめ]す。世界[せかい]的[てき]にもMOTTAINAI[もったいない]運動[うんどう]として広[ひろ]がり、国際[こくさい]的[てき]な環境[かんきょう]運動[うんどう]の象徴[しょうちょう]となった。古[ふる]い智慧[ちえ]が、新[あたら]しい地球[ちきゅう]的[てき]課題[かだい]に応[おう]じる力[ちから]を持[も]っているのである。",
      "無常[むじょう]観[かん]は、すべてのものが変化[へんか]し続[つづ]けるという真理[しんり]を認識[にんしき]する考[かんが]え方[かた]である。仏教[ぶっきょう]に由来[ゆらい]するこの考[かんが]えは、日本[にほん]人[じん]の精神性[せいしんせい]に深[ふか]く根[ね]を下[お]ろしている。永遠[えいえん]に続[つづ]くものはないという認識[にんしき]は、かえって現在[げんざい]を大切[たいせつ]にする心[こころ]を育[はぐ]く。現代[げんだい]人[じん]は、変化[へんか]に不安[ふあん]を感[かん]じ、不変[ふへん]を求[もと]めがちである。しかし、無常[むじょう]を受[う]け入[い]れる心[こころ]は、変化[へんか]に対[たい]する恐怖[きょうふ]を和[やわ]らげる。失[うしな]うことを知[し]っているからこそ、今[いま]あるものの価値[かち]が分[わ]かるという逆説[ぎゃくせつ]がある。この哲学[てつがく]は、不安[ふあん]な時代[じだい]に心[こころ]の支[ささ]えとなる。",
      "デジタル[でじたる]化[か]が進[すす]む現代[げんだい]において、日本[にほん]の哲学[てつがく]は新[あたら]しい役割[やくわり]を求[もと]められている。情報[じょうほう]の洪水[こうずい]の中[なか]で、人[ひとびと]々は心[こころ]の安[やす]らぎを失[うしな]いつつある。常[つね]に何[なに]かを消費[しょうひ]し、反応[はんのう]を求[もと]められる状態[じょうたい]は、精神[せいしん]を疲弊[ひへい]させる。こうした中[なか]で、わび[わび]さび[さび]やもののあわれの感[かん]性[せい]は、静寂[せいじゃく]と余白[よはく]の価値[かち]を取[と]り戻[もど]す手[て]がかりとなる。情報[じょうほう]を断[た]ち切[き]り、目[め]の前[まえ]の瞬間[しゅんかん]に意識[いしき]を向[む]ける実践[じっせん]は、現代[げんだい]に生[い]きる禅[ぜん]の智慧[ちえ]と言[い]える。古[ふる]い哲学[てつがく]は、新[あたら]しい技術[ぎじゅつ]と対立[たいりつ]するものではなく、補完[ほかん]し合[あ]う関係[かんけい]にある。",
      "日本[にほん]の哲学[てつがく]を現代[げんだい]に生[い]かすには、単[たん]な懐古[かいこ]に陥[おちい]らないことが大切[たいせつ]である。過去[かこ]の智慧[ちえ]を表面的[ひょうめんてき]に消費[しょうひ]するだけでは、その本質[ほんしつ]は失[うしな]われる。哲学[てつがく]の核心[かくしん]を理解[りかい]し、現代[げんだい]の文脈[ぶんみゃく]で再[さい]解釈[かいしゃく]することが求[もと]められる。わび[わび]さび[さび]の精神[せいしん]を暮[く]らしに取[と]り入[い]れるのもったいないの心[こころ]で資源[しげん]を使[つか]う、無常[むじょう]を受[う]け入[い]れて現在[げんざい]を慈[いつく]しむ、これらは現代[げんだい]にこそ必要[ひつよう]な営[いとな]みである。日本[にほん]の哲学[てつがく]が生[い]き続[つづ]けるかどうかは、私[わたし]たち一人[ひとり]一人[ひとり]の実践[じっせん]に委[ゆだ]ねられている。古[ふる]い智慧[ちえ]が私[わたし]たちの暮[く]らしを豊[ゆた]かにするうちに、新[あたら]しい時代[じだい]の文化[ぶんか]も形作[かたちづく]られていくに違[ちが]いない。"
    ],
    translation: [
      "Japan has its own philosophy handed down from ancient times. It has a different orientation from the pursuit of logic and concepts that Western philosophy emphasizes. Japanese philosophy has rather been inherited as a worldview and aesthetic embedded in the activities of daily life. Ideas such as wabi-sabi, mono no aware, mottainai, and mujo are typical examples. These hold surprisingly fresh significance even in modern society.",
      "Wabi-sabi is a way of thinking that finds deep beauty in simplicity. It esteems not luxury or flashiness but the quiet charm dwelling in unadorned things. The aesthetic represented by the tea ceremony and dry-landscape gardens embodies this philosophy. In modern consumer society, newness and possession of much tend to be valued. However, from the perspective of wabi-sabi, one can discover the richness of knowing enough. A simple life brings satisfaction different from material abundance.",
      "Mono no aware means a deep pathos toward the changing of things. Feeling both beauty and sadness at the sight of cherry blossoms scattering — that heart is mono no aware. This sensibility is based on the view of impermanence, that all things change and eventually vanish. Modern people tend to dislike change and try to stay young forever and to own things forever. However, the sensibility of mono no aware teaches that transience is the very source of beauty. A heart that accepts change has the power to ease modern anxiety.",
      "Mottainai is a word that expresses gratitude and reluctance to waste things and resources. In Japan, avoiding waste and using things carefully has long been a virtue. This idea has significance directly tied to modern environmental problems. In an era of mass production and mass consumption, the spirit of mottainai points the way toward a sustainable society. It has spread worldwide as the MOTTAINAI movement and become a symbol of international environmental action. Old wisdom has the power to respond to new global challenges.",
      "The view of impermanence is a way of thinking that recognizes the truth that all things keep changing. This idea, derived from Buddhism, has taken deep root in Japanese spirituality. The recognition that nothing lasts forever cultivates a heart that values the present. Modern people tend to feel anxiety about change and seek the unchanging. However, a heart that accepts impermanence eases the fear of change. There is a paradox: because one knows loss, one understands the value of what is here now. This philosophy becomes a mental support in an anxious age.",
      "As digitalization advances in modern times, Japanese philosophy is being asked to play a new role. Amid a flood of information, people are losing peace of mind. The state of constantly consuming something and being demanded to react exhausts the spirit. In such a situation, the sensibility of wabi-sabi and mono no aware becomes a clue to recovering the value of silence and blank space. The practice of cutting off information and turning awareness to the moment before one's eyes can be called the wisdom of Zen living in modern times. Old philosophy is not opposed to new technology but exists in a complementary relationship.",
      "To bring Japanese philosophy to life in the present, it is important not to fall into mere nostalgia. If one only superficially consumes the wisdom of the past, its essence is lost. What is required is to understand the core of the philosophy and reinterpret it in a modern context. Taking the spirit of wabi-sabi into daily life, using resources with a mottainai heart, accepting impermanence and cherishing the present — these are practices needed all the more today. Whether Japanese philosophy lives on is entrusted to the practice of each of us. As old wisdom enriches our lives, the culture of a new age will surely be shaped."
    ],
    questions: [
      {
        q: "What does the passage say distinguishes Japanese philosophy from Western philosophy?",
        choices: ["It focuses purely on logic and concepts", "It is embedded in daily life as a worldview and aesthetic", "It rejects any form of beauty", "It only discusses modern technology"],
        answerIndex: 1,
        explanation: "Japanese philosophy has been inherited as a worldview and aesthetic embedded in daily activities, unlike Western emphasis on logic and concepts (日常の営みの中に込められた世界観や美意識)."
      },
      {
        q: "How does the passage describe the relevance of wabi-sabi to modern consumer society?",
        choices: ["It encourages buying ever more goods", "It reveals the richness of knowing enough, in contrast to valuing newness and abundance", "It rejects all forms of art", "It promotes luxury consumption"],
        answerIndex: 1,
        explanation: "Modern society tends to value newness and abundance, but wabi-sabi lets one discover the richness of knowing enough (足るを知ることの豊かさに気づく)."
      },
      {
        q: "What is the paradox the passage identifies in the view of impermanence?",
        choices: ["Knowing loss helps one understand the value of what is here now", "Impermanence eliminates all emotion", "Change always brings happiness", "Nothing can ever change at all"],
        answerIndex: 0,
        explanation: "There is a paradox: because one knows loss, one understands the value of what is here now (失うことを知っているからこそ、今あるものの価値が分かる)."
      },
      {
        q: "How has the concept of mottainai gained international significance, according to the passage?",
        choices: ["It has become irrelevant", "It spread as the MOTTAINAI movement and became a symbol of international environmental action", "It was replaced by Western philosophy", "It only applies to tea ceremonies"],
        answerIndex: 1,
        explanation: "Mottainai spread worldwide as the MOTTAINAI movement and became a symbol of international environmental action (世界的にもMOTTAINAI運動として広がり、国際的な環境運動の象徴となった)."
      },
      {
        q: "Which N2 pattern is used to convey 'as old wisdom enriches our lives, the culture of a new age will surely be shaped'?",
        choices: ["〜限り", "〜に違いない (surely)", "〜次第", "〜どころか"],
        answerIndex: 1,
        explanation: "新しい時代の文化も形作られていくに違いない uses 〜に違いない meaning 'surely / without a doubt'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-10 — A story about a social entrepreneur
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-10",
    title: "社会[しゃかい]を変[か]える起業家[きぎょうか]",
    titleReading: "しゃかいをかえるきぎょうか",
    level: "N2",
    summary: "A story about Yui, a social entrepreneur who launches an agricultural-share platform to revitalize a depopulated town — overcoming funding hurdles, farmer distrust, bureaucratic friction, and proving that business can be a force for public good.",
    estMinutes: 11,
    tags: ["social entrepreneurship", "story", "agriculture", "regional revitalization"],
    body: [
      "結衣[ゆい]が初[はじ]めてその村[むら]を訪[おとず]れたのは、大学[だいがく]時代[じだい]のフィールド[ふぃーるど]ワーク[わーく]だった。山間[さんかん]部[ぶ]にあるその村[むら]は、過疎[かそ]化[か]が進[すす]み、高齢化[こうれいか]が深刻[しんこく]な状況[じょうきょう]にあった。耕作[こうさく]放棄[ほうき]地[ち]が目立[めだ]ち、かつての水田[すいでん]風景[ふうけい]は寂[さび]れた色[いろ]に変[か]わっていた。結衣[ゆい]は、この風景[ふうけい]に心[こころ]を痛[いた]めながらも、同時[どうじ]にある可能性[かのうせい]を感[かん]じていた。誰[だれ]もが見[み]捨[す]てたこの土地[とち]に、新[あたら]しい価値[かち]を生[しょう]み出[だ]せないか。この問[と]いが、彼女[かのじょ]のその後[ご]の人生[じんせい]を大[おお]きく変[か]えることになる。",
      "大学[だいがく]を卒業[そつぎょう]した結衣[ゆい]は、一旦[いったん]は東京[とうきょう]の企業[きぎょう]に就職[しゅうしょく]した。しかし、村[むら]の風景[ふうけい]が頭[あたま]から離[はな]れなかった。三年[さんねん]後[ご]、彼女[かのじょ]は会社[かいしゃ]を辞[や]め、社会[しゃかい]起業[きぎょう]の道[みち]に進[すす]むことを決意[けつい]した。彼女[かのじょ]の考[かんが]えは、都市[とし]の消費者[しょうひしゃ]と地方[ちほう]の農家[のうか]を直接[ちょくせつ]結[むす]ぶ仕組[しく]みを作[つく]るというものだった。農家[のうか]が生産[せいさん]した野菜[やさい]を、消費者[しょうひしゃ]が事前[じぜん]に購入[こうにゅう]し、収穫[しゅうかく]物[もの]を共有[きょうゆう]する、いわば農業[のうぎょう]版[ばん]シェア[しぇあ]リング[りんぐ]・エコノミー[えこのみー]である。この考[かんが]えを、彼女[かのじょ]は作付[さくづ]け共有[きょうゆう]プロジェクト[ぷろじぇくと]と名付[なづ]けた。",
      "しかし、夢[ゆめ]を実現[じつげん]する道[みち]は平坦[へいたん]ではなかった。最初[さいしょ]の壁[かべ]は資金[しきん]であった。結衣[ゆい]の考[かんが]えに共感[きょうかん]する投資家[とうしか]は少[すく]なかった。農業[のうぎょう]の収益[しゅうえき]性[せい]に疑問[ぎもん]を持[も]つ者[もの]が多[おお]く、地方[ちほう]の事例[じれい]を危険[きけん]視[し]する者[もの]もいた。彼女[かのじょ]は幾度[いくど]も融資[ゆうし]を断[ことわ]られ、資金[しきん]繰[ぐ]りに奔走[ほんそう]した。クラウド[くらうど]ファンディング[ふぁんでぃんぐ]で少額[しょうがく]の資金[しきん]を集[あつ]め、人[ひと]の好意[こうい]に頼[たよ]る日[ひび]々が続[つづ]いた。しかし、彼女[かのじょ]は諦[あきら]めず、困難[こんなん]に直面[ちょくめん]するたびに初衷[しょそう]を思[おも]い出[だ]しては再[さい]び前[まえ]を向[む]いた。",
      "次[つぎ]の壁[かべ]は、農家[のうか]の不信[ふしん]感[かん]であった。長年[ながねん]、都市[とし]の人[ひと]たちに搾取[さくしゅ]されてきた農家[のうか]たちは、結衣[ゆい]の考[かんが]えにも疑[うたが]いの目[め]を向[む]けた。若[わか]い女性[じょせい]が突然[とつぜん]現[あらわ]れ、新[あたら]しい仕組[しく]みを提案[ていあん]しても、簡単[かんたん]に信用[しんよう]されるわけがない。結衣[ゆい]は、言葉[ことば]よりも行動[こうどう]で信頼[しんらい]を築[きず]くことを選[えら]んだ。彼女[かのじょ]は村[むら]に移住[いじゅう]し、農作業[のうさぎょう]を手伝[てつだ]いながら、農家[のうか]たちと交流[こうりゅう]を深[ふか]めた。彼女[かのじょ]の誠実[せいじつ]な姿勢[しせい]に、少[すこ]しずつ心[こころ]を開[ひら]く農家[のうか]が現[あらわ]れた。信頼[しんらい]は、一朝一夕[いっちょういっせき]では築[きず]けないものである。",
      "行政[ぎょうせい]の壁[かべ]もあった。農業[のうぎょう]委員[いいん]会[かい]や市[し]役所[やくしょ]は、新[あたら]しい仕組[しく]みに慎重[しんちょう]な態度[たいど]を取[と]った。既存[きぞん]の制度[せいど]に当[あ]てはまらない事業[じぎょう]は、許認可[きょにんか]の面[めん]で複雑[ふくざつ]な手続[てつづ]きを要[よう]した。結衣[ゆい]は、役所[やくしょ]の人[ひと]と何度[なんど]も話[はな]し合[あ]い、制度[せいど]の枠[わく]の中[なか]でどう実現[じつげん]するかを模索[もさく]した。彼女[かのじょ]の熱意[ねつい]と実行力[じっこうりょく]に、一部[いちぶ]の職員[しょくいん]が共感[きょうかん]し、協力[きょうりょく]を提供[ていきょう]し始[はじ]めた。変化[へんか]は、制度[せいど]の側[がわ]からも起[お]こる。結衣[ゆい]の取[と]り組[く]みは、行政[ぎょうせい]の意識[いしき]をも少[すこ]しずつ変[か]えていった。",
      "三年[さんねん]が経[た]った頃[ころ]、プロジェクト[ぷろじぇくと]は少[すこ]しずつ実[みの]り始[はじ]めた。参加[さんか]する農家[のうか]の数[かず]は増[ふ]え、耕作[こうさく]放棄[ほうき]地[ち]も減[へ]り始[はじ]めた。都市[とし]の消費者[しょうひしゃ]からは、新鮮[しんせん]な野菜[やさい]が届[とど]く喜[よろこ]びの声[こえ]が寄[よ]せられた。結衣[ゆい]の仕組[しく]みを通[とお]して、都市[とし]と地方[ちほう]の新[あたら]しい関係[かんけい]が生[しょう]まれつつあった。最[もっと]も嬉[うれ]しかったのは、村[むら]のお年寄[としよ]りたちが再[さい]び活気[かっき]を取[と]り戻[もど]したことである。自分[じぶん]たちの農産物[のうさんぶつ]が誰[だれ]かの食卓[しょくたく]に並[なら]ぶ、その喜[よろこ]びが彼[かれ]らに生[い]きる力[ちから]を与[あた]えたのだ。結衣[ゆい]の挑戦[ちょうせん]は、確[たし]かに社会[しゃかい]を変[か]え始[はじ]めていた。",
      "結衣[ゆい]の物語[ものがたり]は、社会[しゃかい]起業[きぎょう]という一[ひと]つの形式[けいしき]に過[す]ぎない。しかし、そこに見[み]られるのは、利益[りえき]だけを追[お]う企業[きぎょう]とは違[ちが]う、新[あたら]しい価値[かち]観[かん]である。社会[しゃかい]の課題[かだい]を解決[かいけつ]しながら、持続[じぞく]可能[かのう]な事業[じぎょう]を築[きず]く、その姿勢[しせい]はこれからのビジネス[びじねす]に欠[か]かせない。結衣[ゆい]は、社会[しゃかい]を変[か]えるのは決[けっ]して大[おお]きな組織[そしき]や政府[せいふ]だけではないと言[い]う。一人[ひとり]の人[ひと]の小[ちい]さな行動[こうどう]が、波[なみ]となって広[ひろ]がる、その可能性[かのうせい]を信[しん]じたい。私[わたし]たちが社会[しゃかい]を良[よ]くしようという意志[いし]を持[も]つ限[かぎ]り、未来[みらい]は必[かなら]ず変[か]えられる。社会[しゃかい]起業家[きぎょうか]の挑戦[ちょうせん]は、これからの時代[じだい]の新[あたら]しい希望[きぼう]となるに違[ちが]いない。"
    ],
    translation: [
      "It was during a university fieldwork trip that Yui first visited that village. Located in a mountainous area, the village was suffering from advancing depopulation and serious aging. Fallow fields were conspicuous, and the once-familiar scenery of rice paddies had taken on a desolate hue. Yui's heart ached at the sight, but at the same time she felt a possibility. Could new value be generated on this land that everyone had abandoned? This question would greatly change the rest of her life.",
      "After graduating from university, Yui took a job at a Tokyo company for the time being. However, the scenery of the village would not leave her mind. Three years later, she resigned and decided to pursue the path of social entrepreneurship. Her idea was to create a system directly linking urban consumers with rural farmers. Consumers would purchase in advance the vegetables farmers produced and share the harvest — an agriculture version of the sharing economy. She named the idea the Crop-Sharing Project.",
      "However, the path to realizing the dream was not smooth. The first wall was funding. Few investors sympathized with Yui's idea. Many questioned the profitability of agriculture, and some saw rural cases as risky. She was repeatedly denied loans and ran around securing funds. Days continued in which she gathered small funds through crowdfunding and relied on people's goodwill. But she did not give up; each time she faced difficulty, she recalled her original intention and faced forward again.",
      "The next wall was the farmers' distrust. Farmers who had long been exploited by urban people looked at Yui's idea with suspicion. A young woman appearing suddenly and proposing a new system could not be trusted easily. Yui chose to build trust through action rather than words. She relocated to the village, helped with farm work, and deepened exchanges with the farmers. Her sincere attitude led some farmers to open their hearts little by little. Trust is not something built overnight.",
      "There was also the wall of administration. Agricultural committees and city halls took a cautious attitude toward the new system. Businesses that did not fit existing frameworks required complicated approval procedures. Yui talked with government officials many times and explored how to realize the project within the institutional framework. Some staff sympathized with her enthusiasm and execution ability and began to offer cooperation. Change also occurs from the side of institutions. Yui's effort gradually shifted the awareness of the administration as well.",
      "Around three years later, the project began to bear fruit little by little. The number of participating farmers increased, and fallow fields began to decrease. Voices of joy at receiving fresh vegetables came from urban consumers. Through Yui's system, a new relationship between city and country was being born. The happiest thing was that the elderly in the village regained vitality. The joy of their produce appearing on someone's dining table gave them the strength to live. Yui's challenge had certainly begun to change society.",
      "Yui's story is no more than one form of social entrepreneurship. However, what is seen there is a new value system, different from companies that pursue only profit. The attitude of solving social issues while building a sustainable business is indispensable for business to come. Yui says that changing society is by no means the work of large organizations and government alone. She wants to believe in the possibility that the small action of one person can spread like a wave. As long as we hold the will to make society better, the future can certainly be changed. The challenge of social entrepreneurs will surely become a new hope for the age to come."
    ],
    questions: [
      {
        q: "What first inspired Yui's idea for the Crop-Sharing Project?",
        choices: ["A marketing class in Tokyo", "Her university fieldwork visit to a depopulated mountain village", "Reading a book about American agriculture", "A job offer from a major company"],
        answerIndex: 1,
        explanation: "Yui first visited the village during a university fieldwork trip, and the question of whether new value could be created on the abandoned land shaped her path (大学時代のフィールドワークだった)."
      },
      {
        q: "What were the main obstacles Yui faced when starting her venture?",
        choices: ["Lack of customers interested in vegetables", "Funding shortages, farmer distrust, and administrative/bureaucratic hurdles", "Too many willing investors and excess cash", "A rival social entrepreneur"],
        answerIndex: 1,
        explanation: "The first wall was funding (investors questioned profitability); the second was farmers' distrust; the third was the administration's cautious attitude and complicated approval procedures."
      },
      {
        q: "How did Yui win the farmers' trust?",
        choices: ["By writing them letters from Tokyo", "By relocating to the village, helping with farm work, and showing a sincere attitude", "By paying them large upfront sums", "By suing the skeptical farmers"],
        answerIndex: 1,
        explanation: "Yui relocated to the village, helped with farm work, and deepened exchanges with farmers; her sincere attitude led some farmers to open their hearts (村に移住し、農作業を手伝いながら)."
      },
      {
        q: "What outcomes did the project show after about three years?",
        choices: ["More fallow fields and fewer farmers", "More participating farmers, fewer fallow fields, and the village elderly regained vitality", "The project was shut down by the city hall", "No urban consumers signed up"],
        answerIndex: 1,
        explanation: "Participating farmers increased, fallow fields decreased, urban consumers voiced joy at fresh vegetables, and the village elderly regained vitality (参加する農家の数は増え、耕作放棄地も減り始めた)."
      },
      {
        q: "Which N2 pattern is used to mean 'the challenge of social entrepreneurs will surely become a new hope for the age to come'?",
        choices: ["〜に過ぎない", "〜限り", "〜に違いない (surely)", "〜うちに"],
        answerIndex: 2,
        explanation: "新時代の新しい希望となるに違いない uses 〜に違いない meaning 'surely / without a doubt'."
      }
    ]
  }
];
