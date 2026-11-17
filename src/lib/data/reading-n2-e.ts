import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N2-level reading passages (r-n2-41 .. r-n2-50) with comprehension questions.

export const readingN2E: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n2-41 — The Japanese housing market
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-41",
    title: "日本[にほん]の住宅[じゅうたく]市場[しじょう]が直面[ちょくめん]する転換[てんかん]期[き]",
    titleReading: "にほんのじゅうたくしじょうがちょくめんするてんかんき",
    level: "N2",
    summary: "An analysis of Japan's housing market: the legacy of postwar mass-built homes, the rise of used-homes and renovation culture, demographic shrinkage pushing reforms, and the unresolved tension between homes as assets versus consumption.",
    estMinutes: 11,
    tags: ["housing", "real estate", "demographics", "policy"],
    body: [
      "日本[にほん]の住宅[じゅうたく]市場[しじょう]は、戦後[せんご]の高度[こうど]成長[せいちょう]期[き]に大量[たいりょう]の住宅[じゅうたく]供給[きょうきゅう]を行[おこな]った歴史[れきし]を持[も]つ。当時[とうじ]は住宅[じゅうたく]不足[ぶそく]が深刻[しんこく]な社会[しゃかい]問題[もんだい]であったため、政府[せいふ]は住宅[じゅうたく]金融[きんゆう]公庫[こうこ]を通[つう]じて低[てい]金利[きんり]の融資[ゆうし]を提供[ていきょう]し、家族[かぞく]単位[たんい]の持[も]ち家[いえ]取得[しゅとく]を推進[すいしん]した。その結果[けっか]、新築[しんちく]の分譲[ぶんじょう]マンション[まんしょん]と戸建[こだて]て住宅[じゅうたく]が郊外[こうがい]に次[つぎ]々[つぎ]と建[た]てられ、いわゆるマイホーム[まいほーむ]志向[しこう]が国民[こくみん]の間[あいだ]に定着[ていちゃく]した。しかし、この供給[きょうきゅう]中心[ちゅうしん]の政策[せいさく]は、同時[どうじ]に資産[しさん]価値[かち]の低下[ていか]という問題[もんだい]を内生[ないせい]していたのである。",
      "日本[にほん]の住宅[じゅうたく]は、新築[しんちく]時[じ]の価値[かち]が数十年[すうじゅうねん]で激減[げきげん]するという特異[とくい]な性質[せいしつ]を持[も]つ。欧米[おうべい]では築[ちく]数十年[すうじゅうねん]の住宅[じゅうたく]も資産[しさん]価値[かち]を保[たも]つのが一般的[いっぱんてき]であるのに対[たい]し、日本[にほん]では新築[しんちく]偏好[へんこう]が強[つよ]く、中古[ちゅうこ]住宅[じゅうたく]の価格[かかく]は直[ただ]ちに下落[げらく]する。その理由[りゆう]として、土地[とち]と建物[たてもの]の評価[ひょうか]が分離[ぶんり]されていないこと、維持[いじ]管理[かんり]文化[ぶんか]が未成熟[みせいじゅく]であること、そして税制[ぜいせい]上[じょう]の新築[しんちく]優遇[ゆうぐう]が挙[あ]げられる。これらの要因[よういん]が複合[ふくごう]した結果[けっか]、住宅[じゅうたく]は資産[しさん]としてよりも消費[しょうひ]として位置[いち]づけられる傾向[けいこう]が強[つよ]まった。",
      "しかし、近年[きんねん]になり状況[じょうきょう]に変化[へんか]が生[しょう]じつつある。人口[じんこう]減少[げんしょう]と少子[しょうし]高齢化[こうれいか]が進行[しんこう]する中[なか]で、新規[しんき]需要[じゅよう]は頭打[あたまう]ちとなり、過剰[かじょう]供給[きょうきゅう]の地域[ちいき]では空[あ]き家[や]問題[もんだい]が深刻[しんこく]化[か]している。総務[そうむ]省[しょう]の調査[ちょうさ]によれば、空[あ]き家[や]率[りつ]は過去[かこ]最高[さいこう]を記録[きろく]し、地方[ちほう]都市[とし]では管理[かんり]されない住宅[じゅうたく]が景観[けいかん]や防犯[ぼうはん]に悪影響[あくえいきょう]を及[およ]ぼしている。このまま新築[しんちく]中心[ちゅうしん]の供給[きょうきゅう]を続[つづ]ければ、将来[しょうらい]の維持[いじ]費用[ひよう]と撤去[てっきょ]費用[ひよう]が次世代[じせだい]に重荷[おもに]としてのしかかることは明白[めいはく]である。",
      "こうした背景[はいけい]から、中古[ちゅうこ]住宅[じゅうたく]の流通[りゅうつう]と改修[かいしゅう]が見直[みなお]され始[はじ]めた。リノベーション[りのべーしょん]という概念[がいねん]が広[ひろ]まり、築[ちく]古[ふる]の物件[ぶっけん]を購入[こうにゅう]して内装[ないそう]を更新[こうしん]する生活[せいかつ]様式[ようしき]が若者[わかもの]の間[あいだ]に受[う]け入[い]れられつつある。既存[きぞん]のストック[すとっく]を活用[かつよう]するという発想[はっそう]は、資源[しげん]の節約[せつやく]のみならず、地域[ちいき]コミュニティ[こみゅにてぃ]の維持[いじ]にも寄与[きよ]する。行政[ぎょうせい]も固定[こてい]資産[さん]税[ぜい]の見直[みなお]しや改修[かいしゅう]助成[じょせい]金[きん]を導入[どうにゅう]し、ストック[すとっく]社会[しゃかい]への移行[いこう]を後[おく]ろから支[ささ]えている。",
      "住宅[じゅうたく]政策[せいさく]の観点[かんてん]からも大[おお]きな転換[てんかん]が図[はか]られている。かつては持[も]ち家[いえ]促進[そくしん]が家族[かぞく]の安定[あんてい]と直結[ちょっけつ]するものと考[かんが]えられていたが、現代[げんだい]では多様[たよう]な居住[きょきゅう]形態[けいたい]が容認[ようにん]されている。賃貸[ちんたい]と分譲[ぶんじょう]の中間[ちゅうかん]的な仕組[しく]みや、シェア[しぇあ]ハウス[はうす]、そして高齢者[こうれいしゃ]向けのサービス[さーびす]付[つき]住宅[じゅうたく]など、ライフ[らいふ]ステージ[すてーじ]に応[おう]じた選択[せんたく]肢[し]が拡充[かくじゅう]された。これは、単一[たんいつ]の家族[かぞく]モデル[もでる]が揺[ゆ]らいでいることの表[おもて]返[がえ]しでもある。",
      "もっとも、住宅[じゅうたく]をめぐる課題[かだい]は一朝一夕[いっちょういっせき]で解決[かいけつ]するものではない。都市[とし]部[ぶ]の地価[ちか]高騰[こうとう]は若[わか]い世代[せだい]の居住[きょきゅう]コスト[こすと]を押[お]し上[あ]げ、地方[ちほう]の空[あ]き家[や]問題[もんだい]は財政[ざいせい]負担[ふたん]を増大[ぞうだい]させるという二極[にきょく]化[か]が進[すす]んでいる。この格差[かくさ]を放置[ほうち]すれば、地域[ちいき]間[かん]の分断[ぶんだん]はさらに深刻[しんこく]化[か]する恐[おそ]れがある。住宅[じゅうたく]を単[たん]なる経済[けいざい]問題[もんだい]としてではなく、社会[しゃかい]基盤[きばん]の問題[もんだい]として捉[とら]え直[なお]す視点[してん]が求[もと]められている。",
      "結論[けつろん]として、日本[にほん]の住宅[じゅうたく]市場[しじょう]はこれまでの新築[しんちく]・消費[しょうひ]型[がた]モデル[もでる]から、既存[きぞん]ストック[すとっく]を活用[かつよう]する持続[じぞく]可能[かのう]なモデル[もでる]へと移行[いこう]する段階[だんかい]にある。これを成[な]し遂[と]げるか否[いな]かは、政策[せいさく]の工夫[くふう]と国民[こくみん]の意識[いしき]転換[てんかん]の双方[そうほう]に委[ゆだ]ねられている。住宅[じゅうたく]は資産[しさん]であると同時[どうじ]に生活[せいかつ]の舞台[ぶたい]であり、その二面[にめん]性[せい]を正[ただ]しく認識[にんしき]することこそが次[つぎ]の時代[じだい]の鍵[かぎ]となるだろう。"
    ],
    translation: [
      "Japan's housing market carries the history of having supplied housing in massive quantities during the postwar high-growth era. At that time, the housing shortage was a serious social problem, so the government provided low-interest loans through the Housing Loan Corporation and promoted home ownership on a household basis. As a result, newly built condominiums and detached houses were constructed one after another in the suburbs, and the so-called my-home orientation took root among the public. However, this supply-centered policy simultaneously bred an intrinsic problem of declining asset value.",
      "Japanese homes have the peculiar property that their value at construction plummets over a few decades. In the West, homes decades old generally retain their asset value, whereas in Japan a strong preference for new construction causes the price of used homes to fall immediately. The reasons cited include the fact that land and building valuations are not separated, that the culture of maintenance and management is immature, and that tax systems favor new construction. With these factors combined, housing came to be positioned more as consumption than as an asset.",
      "In recent years, however, the situation has begun to change. As population decline and the falling birthrate and aging advance, new demand has plateaued, and in oversupplied regions the vacant-house problem has grown serious. According to a Ministry of Internal Affairs survey, the vacancy rate has hit a record high, and in regional cities unmanaged homes are having adverse effects on landscapes and public safety. If new-construction-centered supply continues unchanged, it is obvious that future maintenance and demolition costs will weigh on the next generation as a heavy burden.",
      "Against this background, the circulation and renovation of used homes have begun to be reconsidered. The concept of renovation has spread, and a lifestyle of purchasing older properties and updating their interiors is gaining acceptance among younger people. The idea of utilizing existing stock contributes not only to resource conservation but also to maintaining local communities. Local governments have also introduced revisions to fixed-asset taxes and renovation subsidies, supporting the transition toward a stock-based society from behind.",
      "From the perspective of housing policy, a major shift is also being attempted. Owning a home was once thought to be directly tied to family stability, but in the modern era diverse residential forms are accepted. Intermediate schemes between rental and sale, share houses, and service-equipped housing for the elderly have expanded the options according to life stage. This is also the flip side of the fact that the single family model has been shaken.",
      "Needless to say, the issues surrounding housing will not be resolved overnight. Land price surges in urban areas are pushing up housing costs for younger generations, while the vacant-house problem in rural areas increases fiscal burdens, a dual polarization that is advancing. If this disparity is left unaddressed, regional division may become even more serious. A perspective that reframes housing not merely as an economic issue but as one of social infrastructure is called for.",
      "In conclusion, Japan's housing market is at the stage of transitioning from its previous new-construction, consumption-oriented model to a sustainable one that utilizes existing stock. Whether this is achieved is entrusted to both policy ingenuity and a shift in public awareness. Housing is an asset and at the same time the stage of life, and correctly recognizing that dual nature will be the key to the next era."
    ],
    questions: [
      {
        q: "According to the passage, why do Japanese homes lose asset value rapidly compared with those in the West?",
        choices: ["Because land is scarce and prices fall faster", "Because land and building valuations are not separated, maintenance culture is immature, and tax rules favor new builds", "Because the climate causes buildings to deteriorate rapidly", "Because foreigners are not allowed to buy used homes"],
        answerIndex: 1,
        explanation: "The text cites three reasons: 土地と建物の評価が分離されていない、維持管理文化が未成熟、税制上の新築優遇."
      },
      {
        q: "What shift in housing policy does the passage describe regarding residential forms?",
        choices: ["A return to a single family-home model enforced by law", "Acceptance of diverse forms such as rental-sale hybrids, share houses, and elderly service housing", "Mandatory demolition of all homes over 20 years old", "A ban on condominium construction"],
        answerIndex: 1,
        explanation: "The passage notes 多様な居住形態が容認されている — share houses, service-equipped elderly housing, and rental-sale hybrids have been expanded."
      },
      {
        q: "How does the passage characterize the polarization of the housing problem?",
        choices: ["Both urban and rural areas face identical vacancy problems", "Urban land prices push up youth housing costs while rural vacancy burdens local finances", "Only rural areas experience housing issues", "Only urban areas suffer from vacant houses"],
        answerIndex: 1,
        explanation: "The text describes 都市部の地価高騰 versus 地方の空き家問題, a dual polarization that is deepening."
      },
      {
        q: "What is the author's conclusion about the future of Japan's housing market?",
        choices: ["It must continue the new-construction, consumption-oriented model forever", "It should transition to a sustainable model utilizing existing stock, requiring both policy and awareness shifts", "It should rely entirely on demolishing old housing", "It should be managed entirely by the central government"],
        answerIndex: 1,
        explanation: "The conclusion states the market is transitioning toward a sustainable model using existing stock, entrusted to both policy ingenuity and public awareness."
      },
      {
        q: "Which N2 grammar point appears in '住宅は資産であると同時に生活の舞台であり'?",
        choices: ["〜と同時に (at the same time as)", "〜どころか", "〜に先立って", "〜かねない"],
        answerIndex: 0,
        explanation: "〜と同時に expresses that two states or actions hold simultaneously, used here to say housing is an asset and at the same time a stage of life."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-42 — A chef's Michelin journey
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-42",
    title: "三[みっ]つ星[ぼし]を追[お]い求[もと]めた料理人[りょうりにん]の軌跡[きせき]",
    titleReading: "みつぼしをおいもとめたりょうりにんのきせき",
    level: "N2",
    summary: "The story of chef Tatsuya, who left a stable sushi apprenticeship to open a small kaiseki restaurant in Kyoto, endured years of debt and doubt, and finally earned a Michelin star while questioning what fame means for his craft.",
    estMinutes: 10,
    tags: ["biography", "gastronomy", "Kyoto", "perseverance"],
    body: [
      "京都[きょうと]の奥[おく]深[ふか]い路地[ろじ]に、わずか八席[はちせき]の割烹[かっぽう]店[てん]がひっそりと佇[たたず]んでいる。その店[みせ]の主人[しゅじん]である達也[たつや]は、かつて銀座[ぎんざ]の老舗[しにせ]寿司[すし]店[てん]で十五年[じゅうごねん]ほど修業[しゅぎょう]を積[つ]んだ料理人[りょうりにん]であった。親方[おやかた]の技術[ぎじゅつ]を忠実[ちゅうじつ]に受け継[うけつ]ぐだけであれば、安泰[あんたい]な道[みち]が約束[やくそく]されていたはずであった。しかし彼[かれ]の胸[むね]の奥[おく]には、自[みずか]らの手[て]で一[ひと]つの世界[せかい]を創[つく]り上[あ]げたいという静[しず]かな野心[やしん]が脈打[みゃくう]っていた。ある春[はる]の夜[よる]、彼[かれ]は親方[おやかた]に別[わか]れを告[つ]げ、見知[みし]らぬ土地[とち]へと旅[たび]立[た]った。",
      "京都[きょうと]を選[えら]んだ理由[りゆう]は、季節[きせつ]の移[うつ]ろいを料理[りょうり]に映[うつ]し込[こ]みたいと願[ねが]ったからであった。彼[かれ]は季節[きせつ]ごとに表情[ひょうじょう]を変[か]える食材[しょくざい]に向[む]き合[あ]い、生産[せいさん]者[しゃ]の顔[かお]が見[み]える仕入[しいれ]にこだわった。朝市[あさいち]で野菜[やさい]を選[えら]び、漁港[ぎょこう]で魚[さかな]を見[み]極[きわ]める日々[ひび]は、銀座[ぎんざ]の厨房[ちゅうぼう]では得[え]られなかった経験[けいけん]であった。しかし、開店[かいてん]から一年[いちねん]は客[きゃく]がほとんど来[こ]ず、貯金[ちょきん]を取[と]り崩[くず]す日[ひ]が続[つづ]いた。彼[かれ]は妻[つま]に何度[なんど]も閉店[へいてん]を迷[まよ]ったと打[う]ち明[あ]けている。",
      "転機[てんき]が訪[おとず]れたのは、ある料理[りょうり]雑誌[ざっし]の記者[きしゃ]が店[みせ]を訪[おとず]れた時[とき]であった。彼[かれ]が提供[ていきょう]した春[はる]の菜[な]の花[はな]と白魚[しらうお]を炊[す]き合[あ]わせた一[ひと]皿[さら]に、記者[きしゃ]は舌[した]を巻[ま]いた。記事[きじ]が掲載[けいさい]されると、少[すこ]しずつ客[きゃく]が増[ふ]え始[はじ]め、口コミ[くちこみ]で評判[ひょうばん]が広[ひろ]がった。それでも彼[かれ]は、自分[じぶん]の料理[りょうり]がまだ完成[かんせい]してはいないと感[かん]じていた。星[ほし]を獲得[かくとく]するなどという考[かんが]えは、まだ彼[かれ]の頭[あたま]の片隅[かたすみ]にもなかったのである。",
      "三年[さんねん]目[め]、ついにミシュラン[みしゅらん]の調査員[ちょうさいん]が来店[らいてん]したという噂[うわさ]が流[なが]れた。達也[たつや]は緊張[きんちょう]を覚[おぼ]えつつも、いつも通[とお]りの手順[てじゅん]で料理[りょうり]を提供[ていきょう]した。彼[かれ]の信条[しんじょう]は、誰[だれ]に振[ふ]る舞[ま]うにせよ、素材[そざい]に対[たい]する敬意[けいい]を変[か]えないということであった。その年の秋[あき]、ガイド[がいど]が発行[はっこう]され、店[みせ]は三[みっ]つ星[ぼし]ではなく一[ひと]つ星[ほし]を獲得[かくとく]した。知[し]らせを聞[き]いた瞬間[しゅんかん]、彼[かれ]は静[しず]かに涙[なみだ]を流[なが]したと伝[つた]えられている。",
      "星[ほし]を獲得[かくとく]して以降[いこう]、予約[よやく]は半年[はんとし]待[ま]ちとなり、店[みせ]は経済的[けいざいてき]には安定[あんてい]した。しかし同時[どうじ]に、新[あたら]しい悩[なや]みも生[しょう]じた。予約[よやく]が取[と]れなかった客[きゃく]からの苦情[くじょう]、増[ふ]えた取材[しゅざい]の依頼[いらい]、そして若[わか]い弟子[でし]たちへの指導[しどう]である。彼[かれ]は、星[ほし]という外部[がいぶ]の評価[ひょうか]に縛[しば]られて、自[みずか]らの料理[りょうり]の方向[ほうこう]性[せい]を見失[みうしな]うことへの恐怖[きょうふ]を語[かた]るようになった。名声[めいせい]は諸刃[もろは]の剣[けん]であることを、彼[かれ]は身[み]をもって学[まな]んだのである。",
      "現在[げんざい]、達也[たつや]は月[つき]に一度[いちど]の頻度[ひんど]で休[やす]みを取[と]り、京都[きょうと]の山里[やまざと]を歩[ある]くようになった。自然[しぜん]のなかで五感[ごかん]を研[と]ぎ澄[す]ますことは、彼[かれ]にとっての修行[しゅぎょう]の延長[えんちょう]である。弟子[でし]たちには、技術[ぎじゅつ]よりも先[さき]に、素材[そざい]への畏敬[いけい]の念[ねん]を教[おし]えるという。星[ほし]を維持[いじ]すること自体[じたい]が目的[もくてき]ではなく、毎日[まいにち]の皿[さら]に誠実[せいじつ]に向[む]き合[あ]うことこそが彼[かれ]の目的[もくてき]であると彼[かれ]は繰[く]り返[かえ]す。名声[めいせい]を手[て]にした料理人[りょうりにん]が、自[みずか]らの原点[げんてん]に立[た]ち戻[もど]ろうとする姿[すがた]は、多くの人[ひと]に感銘[かんめい]を与[あた]えている。",
      "達也[たつや]の軌跡[きせき]は、成功[せいこう]とは単[たん]なる到達[とうたつ]点[てん]ではないことを示[しめ]している。彼[かれ]が追[お]い求[もと]めたのは星[ほし]という記号[きごう]ではなく、料理人[りょうりにん]としての自分[じぶん]の限界[げんかい]を押[お]し広[ひろ]げ続[つづ]けるという過程[かてい]であった。その姿勢[しせい]は、何[なに]かを極[きわ]めようとするすべての人[ひと]にとって、一[ひと]つの手本[てほん]となるだろう。彼[かれ]の店[みせ]は今[いま]も路地[ろじ]の奥[おく]に静[しず]かに佇[たたず]み、通[かよ]う客[きゃく]を待[ま]ち続[つづ]けている。"
    ],
    translation: [
      "Deep in a narrow alley of Kyoto, an eight-seat kappo restaurant stands quietly. Its owner, Tatsuya, was once a chef who had trained for about fifteen years at a long-established sushi restaurant in Ginza. If he had only faithfully inherited his master's techniques, a secure path would have been guaranteed for him. But deep in his chest, a quiet ambition pulsed: a desire to build a world of his own with his own hands. One spring night he bid his master farewell and set off for an unfamiliar land.",
      "He chose Kyoto because he wished to reflect the changing of the seasons in his cuisine. He faced ingredients whose expressions changed with each season and insisted on sourcing in which he could see the producers' faces. Days spent choosing vegetables at morning markets and assessing fish at fishing harbors were experiences he could not have had in the Ginza kitchen. However, for the first year after opening, customers rarely came and days of drawing down his savings continued. He confessed to his wife many times that he had wavered about closing.",
      "The turning point came when a reporter from a culinary magazine visited the shop. The reporter was astonished by a single dish — a spring pairing of nanohana and shirauo simmered together. Once the article was published, customers gradually began to increase, and word-of-mouth reputation spread. Even so, he felt his cuisine was not yet complete. The thought of earning a star had not yet entered even the corner of his mind.",
      "In the third year, a rumor circulated that a Michelin inspector had come to the restaurant. Tatsuya felt nervous, but he served his dishes following his usual procedure. His credo was that whoever he served, his reverence for the ingredients would not change. That autumn, when the guide was published, the restaurant earned not three stars but one. It is said that the moment he heard the news, tears quietly flowed.",
      "After earning the star, reservations became a six-month wait, and the restaurant became financially stable. At the same time, however, new worries emerged: complaints from customers who could not get reservations, an increase in interview requests, and the guidance of young apprentices. He began to speak of his fear that being bound by an external evaluation called a star might cause him to lose sight of his own culinary direction. He learned firsthand that fame is a double-edged sword.",
      "Today, Tatsuya takes a day off once a month and walks through the mountain villages of Kyoto. Sharpening his five senses in nature is, for him, an extension of his training. To his apprentices, he teaches reverence for ingredients before technique. He repeats that maintaining the star itself is not his purpose; rather, facing each day's plates sincerely is. The figure of a chef who has gained fame trying to return to his own origin inspires many.",
      "Tatsuya's trajectory shows that success is not merely an arrival point. What he pursued was not the symbol called a star but the process of continually expanding his own limits as a chef. That attitude will serve as a model for anyone striving to master something. His restaurant still stands quietly deep in an alley, continuing to await the customers who visit."
    ],
    questions: [
      {
        q: "Why did Tatsuya leave the long-established sushi restaurant in Ginza?",
        choices: ["Because he was fired by his master", "Because he wanted to build his own world with his own hands", "Because the Ginza restaurant closed down", "Because he could not handle sushi preparation"],
        answerIndex: 1,
        explanation: "The text states 達也 had a 静かな野心 — the desire to 自らの手で一つの世界を創り上げたい — which led him to leave."
      },
      {
        q: "What was the turning point that brought more customers to his shop?",
        choices: ["A television drama featured his restaurant", "A magazine reporter praised his dish of nanohana and shirauo", "A government tourism campaign promoted him", "His former master sent him his customers"],
        answerIndex: 1,
        explanation: "The 転機 came when a 料理雑誌の記者 visited and was impressed by 春の菜の花と白魚を炊き合わせた一皿, after which an article spread his reputation."
      },
      {
        q: "How did Tatsuya feel after earning the Michelin star?",
        choices: ["He immediately aimed for three stars", "He felt only happiness and relief", "He learned fame is a double-edged sword and feared losing his direction", "He sold the restaurant and retired"],
        answerIndex: 2,
        explanation: "The passage states 名声は諸刃の剣である and that he feared losing sight of his culinary direction due to the external evaluation."
      },
      {
        q: "What does Tatsuya teach his apprentices first, before technique?",
        choices: ["How to deal with the media", "Reverence for ingredients", "How to maximize profit per dish", "How to obtain Michelin stars"],
        answerIndex: 1,
        explanation: "The text says he teaches 素材への畏敬の念 first, before technique — he emphasizes reverence for ingredients."
      },
      {
        q: "Which N2 grammar point appears in '星を獲得して以降、予約は半年待ちとなった'?",
        choices: ["〜上で", "〜て以降 (since / after doing)", "〜うちに", "〜つつある"],
        answerIndex: 1,
        explanation: "〜て以降 indicates 'since the time of doing X' — here, since earning the star, reservations became a half-year wait."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-43 — The role of religion in modern Japan
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-43",
    title: "現代[げんだい]日本[にほん]における宗教[しゅうきょう]の役割[やくわり]",
    titleReading: "げんだいにほんにおけるしゅうきょうのやくわり",
    level: "N2",
    summary: "An examination of how religion functions in modern Japan: syncretic Shinto and Buddhist practices, low self-identification as believers, the role of new religions and controversies, and the cultural continuity of ritual life without doctrinal commitment.",
    estMinutes: 12,
    tags: ["religion", "society", "culture", "tradition"],
    body: [
      "現代[げんだい]日本[にほん]の宗教[しゅうきょう]状況[じょうきょう]は、一見[いっけん]すると矛盾[むじゅん]に満[み]ちている。調査[ちょうさ]によれば、自分[じぶん]を宗教[しゅうきょう的[てき]な人[ひと]だとみなす日本人[にほんじん]の割合[わりあい]は先進[せんしん]国[こく]の中[なか]で極[きわ]めて低[ひく]い。しかし、正月[しょうがつ]には神社[じんじゃ]を参拝[さんぱい]し、夏[なつ]にはお盆[ぼん]で先祖[せんぞ]の墓[はか]を訪[たず]ね、秋[あき]には教会[きょうかい]で結婚式[けっこんしき]を挙[あ]げるというように、儀礼[ぎれい]の実践[じっせん]は盛[さか]んに行[おこな]われている。この現象[げんしょう]は外国人[がいこくじん]には理解[りかい]しがたいとされ、しばしば日本[にほん]は無宗教[むしゅうきょう]の国[くに]だと表現[ひょうげん]される。",
      "しかし、無宗教[むしゅうきょう]という言葉[ことば]は誤解[ごかい]を招[まね]くきらいがある。正確[せいかく]には、日本人[にほんじん]は特定[とくてい]の教義[きょうぎ]への帰依[きえ]を強[つよ]く意識[いしき]しないまま、宗教[しゅうきょう]的[てき]な実践[じっせん]を生活[せいかつ]に溶[と]け込[こ]ませていると言[い]える。神[かみ]と仏[ほとけ]という二[ふた]つの異質[いしつ]な体系[たいけい]が、日常[にちじょう]の節目[ふしめ]ごとに使い分[つかいわ]けられるという習慣[しゅうかん]は、他[ほか]の文化[ぶんか]には見[み]られない独特[どくとく]なものである。誕生[たんじょう]は神社[じんじゃ]で祝[いわ]い、死[し]は仏教[ぶっきょう]で弔[とむら]うという住[す]み分[わ]けは、教義[きょうぎ]上[じょう]の矛盾[むじゅん]を気[き]に留[と]めない実践[じっせん]的[てき]な態度[たいど]を示[しめ]している。",
      "歴史[れきし]的[てき]に見[み]れば、この混交[こんこう]は江戸[えど]時代[じだい]の宗教[しゅうきょう]統制[とうせい]に由来[ゆらい]する。幕府[ばくふ]はキリスト[きりすと]教[きょう]を禁圧[きんあつ]するため、すべての民衆[みんしゅう]を寺院[じいん]に属[ぞく]させた。これが寺請[てらう]け制度[せいど]であり、結果[けっか]として仏教[ぶっきょう]が葬儀[そうぎ]や先祖[せんぞ]供養[くよう]を担[にな]うことになった。明治[めいじ]維新[いしん]後[ご]には神[かみ]仏[ほとけ]分離[ぶんり]が断行[だんこう]され、神道[しんとう]が国家[こっか]の祭祀[さいし]として位置[いち]づけられた。しかし、人々[ひとびと]の意識[いしき]の底[そこ]では、神[かみ]と仏[ほとけ]は容易[ようい]には分離[ぶんり]されず、戦後[せんご]に至[いた]るまで二[ふた]つの宗教[しゅうきょう]が並行[へいこう]して実践[じっせん]されてきたのである。",
      "他方[たほう]、新興[しんこう]宗教[しゅうきょう]の台頭[たいとう]も現代[げんだい]日本[にほん]の宗教[しゅうきょう]地図[ちず]を特徴[とくちょう]づける。戦後[せんご]の混乱[こんらん]期[き]に、数多[かずおお]くの新宗教[しんしゅうきょう]が誕生[たんじょう]し、社会[しゃかい]不安[ふあん]に寄[よ]り添[そ]う形[かた]で信者[しんじゃ]を獲得[かくとく]した。一部[いちぶ]は政治[せいじ]的[てき]な影響[えいきょう]力[りょく]を拡大[かくだい]し、論争[ろんそう]を呼[よ]んだ。なかには、教祖[きょうそ]への絶対的[ぜったいてき]な帰依[きえ]を求[もと]め、社会[しゃかい]から孤立[こりつ]した集団[しゅうだん]を形成[けいせい]するものもあった。こうした事例[じれい]は、宗教[しゅうきょう]が社会[しゃかい]に及[およ]ぼし得[う]る負[ふ]の側面[そくめん]を浮[う]き彫[ぼ]りにし、日本人[にほんじん]の宗教[しゅうきょう]に対[たい]する警戒[けいかい]心[しん]を強[つよ]める要因[よういん]となった。",
      "近年[きんねん]、宗教[しゅうきょう]的[てき]な実践[じっせん]の減少[げんしょう]も顕著[けんちょ]である。若[わか]い世代[せだい]の間[あいだ]では、正月[しょうがつ]の初詣[はつもうで]や法事[ほうじ]への参加[さんか]率[りつ]が低下[ていか]していると指摘[してき]される。都市化[としか]と核家族化[かくかぞくか]の進行[しんこう]により、地域[ちいき]の寺社[じしゃ]と結[むす]びついた儀礼[ぎれい]を維持[いじ]することが困難[こんなん]になったからである。しかし、同時[どうじ]に、スピリチュアル[すぴりちゅある]という曖昧[あいまい]な概念[がいねん]が流行[りゅうこう]し、占[うらな]いやパワー[ぱわー]スポット[すぽっと]が若者[わかもの]に受[う]け入[い]れられている。これは、形式的[けいしきてき]な宗教[しゅうきょう]から個人的[こじんてき]な体験[たいけん]重視[じゅうし]へと変化[へんか]している兆候[ちょうこう]と解釈[かいしゃく]できる。",
      "宗教[しゅうきょう]のもう一[ひと]つの役割[やくわり]は、共同体[きょうどうたい]の維持[いじ]機能[きのう]である。地域[ちいき]の祭[まつり]は神社[じんじゃ]を中心[ちゅうしん]に組[く]み立[た]てられ、住民[じゅうみん]の連帯[れんたい]感[かん]を再生[さいせい]産[さん]する場[ば]として機能[きのう]してきた。災害[さいがい]時[じ]には、寺社[じしゃ]が避難[ひなん]所[しょ]や支援[しえん]拠点[きょてん]として活用[かつよう]され、宗教[しゅうきょう]施設[しせつ]の社会[しゃかい]的[てき]価値[かち]が再[さい]認識[にんしき]された。すなわち、宗教[しゅうきょう]は信仰[しんこう]の対象[たいしょう]であると同時[どうじ]に、地域[ちいき]社会[しゃかい]のインフラ[いんふら]としても働[はたら]いているのである。この二[ふた]つの機能[きのう]を切り離[きりはな]して考[かんが]えることは、現実[げんじつ]を捉[とら]え損[そこ]なうことになろう。",
      "結論[けつろん]として、現代[げんだい]日本[にほん]における宗教[しゅうきょう]は、教義[きょうぎ]への熱心[ねっしん]な帰依[きえ]という形[かた]ではなく、儀礼[ぎれい]と共同体[きょうどうたい]の基盤[きばん]という形[かた]で生[い]き続[つづ]けている。したがって、日本人[にほんじん]を無宗教[むしゅうきょう]と断[だん]定するのは表層[ひょうそう]的な見方[みかた]に過[す]ぎない。宗教[しゅうきょう]が果[は]たす社会[しゃかい]的[てき]機能[きのう]を正確[せいかく]に理解[りかい]することは、日本[にほん]社会[しゃかい]の特質[とくしつ]を捉[とら]える上[うえ]で不可欠[ふかつけつ]である。私[わたし]たちは、見[み]えない形[かた]で宗教[しゅうきょう]が私[わたし]たちの生活[せいかつ]を支[ささ]えている事実[じじつ]に、改[あらた]めて目[め]を向[む]ける必要[ひつよう]がある。"
    ],
    translation: [
      "The religious landscape of modern Japan appears, at first glance, full of contradictions. Surveys show that the proportion of Japanese who regard themselves as religious is extremely low among advanced nations. Yet ritual practice is thriving: people visit shrines at New Year, visit ancestors' graves at Obon in summer, and hold wedding ceremonies at churches in autumn. This phenomenon is said to be difficult for foreigners to grasp, and Japan is often described as a non-religious country.",
      "However, the word non-religious is apt to invite misunderstanding. To be precise, the Japanese have woven religious practice into daily life without strongly being conscious of devotion to any specific doctrine. The custom of alternating between two distinct systems — gods and buddhas — at the milestones of everyday life is unique and unseen in other cultures. The division of labor, where births are celebrated at shrines and the dead consoled through Buddhism, demonstrates a pragmatic attitude that pays no mind to doctrinal contradictions.",
      "Historically, this blending derives from the religious controls of the Edo period. In order to suppress Christianity, the shogunate placed all commoners under the jurisdiction of temples. This was the temple-affiliation system, and as a result Buddhism came to assume responsibility for funerals and ancestral rites. After the Meiji Restoration, the separation of gods and buddhas was enforced, and Shinto was positioned as the state's ritual. Yet at the bottom of people's consciousness, gods and buddhas were not easily separated, and the two religions continued to be practiced in parallel into the postwar period.",
      "On the other hand, the rise of new religions also characterizes the religious map of modern Japan. In the chaos of the postwar era, numerous new religions were born, gaining adherents by attending to social anxieties. Some expanded political influence and provoked controversy. Among them were groups that demanded absolute devotion to a founder and formed collectives isolated from society. Such cases highlighted the negative aspects that religion can have on society, becoming a factor that strengthened Japanese wariness toward religion.",
      "In recent years, a decline in religious practice has also been conspicuous. It is pointed out that participation rates in New Year's first shrine visits and Buddhist memorial services have been falling among younger generations. The reason is that, due to ongoing urbanization and the shift to nuclear families, maintaining rituals tied to local temples and shrines has become difficult. At the same time, however, the vague concept of spiritual has gained popularity, and fortune-telling and power spots are accepted by young people. This can be interpreted as a sign of a shift from formal religion to a focus on personal experience.",
      "Another role of religion is its function in maintaining community. Local festivals are organized around shrines and have functioned as venues that regenerate a sense of solidarity among residents. At times of disaster, temples and shrines have been used as evacuation centers and support hubs, and the social value of religious facilities was recognized anew. That is, religion is an object of faith and at the same time works as infrastructure for local communities. Considering the two functions in isolation would fail to capture reality.",
      "In conclusion, religion in modern Japan lives on not in the form of ardent devotion to doctrine but in the form of ritual and community foundation. Therefore, to declare the Japanese non-religious is merely a superficial view. Accurately understanding the social functions religion performs is indispensable for grasping the nature of Japanese society. We need to look anew at the fact that religion, in unseen forms, supports our lives."
    ],
    questions: [
      {
        q: "What does the passage say about the apparent contradiction in Japanese religiosity?",
        choices: ["Japanese people never perform any religious rituals at all", "Few identify as religious yet rituals like New Year shrine visits, Obon, and church weddings are widely practiced", "Most Japanese convert to Christianity in adulthood", "The surveys are unreliable and overstate religiosity"],
        answerIndex: 1,
        explanation: "The passage contrasts low self-identification as religious with thriving ritual practice (正月参拝、お盆、教会結婚式)."
      },
      {
        q: "Historically, what gave rise to the Buddhist role in funerals and ancestral rites?",
        choices: ["The Meiji government's promotion of Buddhism", "Edo-period temple-affiliation system designed to suppress Christianity", "Postwar American occupation policy", "The adoption of Buddhist funerals by the imperial family in the Heian period"],
        answerIndex: 1,
        explanation: "The 寺請制度 of the Edo shogunate placed commoners under temples, resulting in Buddhism assuming funerary and ancestral roles."
      },
      {
        q: "How does the passage interpret the popularity of spiritual concepts and power spots among youth?",
        choices: ["As a return to strict doctrinal religion", "As a shift from formal religion toward personal experience", "As proof that new religions have disappeared", "As a sign of foreign cultural influence only"],
        answerIndex: 1,
        explanation: "The text interprets this as a 兆候 of a shift from 形式的な宗教 to 個人的な体験重視 — a move toward personal experience."
      },
      {
        q: "What social function of religion did disasters highlight, according to the passage?",
        choices: ["Religious facilities served as evacuation centers and support hubs", "Religious leaders took over government functions", "Religion replaced the welfare system entirely", "Temples and shrines were largely useless during disasters"],
        answerIndex: 0,
        explanation: "The passage notes 寺社が避難所や支援拠点として活用され, re-recognizing the social value of religious facilities."
      },
      {
        q: "Which N2 grammar point appears in '宗教が社会に及ぼし得る負の側面を浮き彫りにし'?",
        choices: ["〜得る (can / is possible to)", "〜かねる", "〜ざるを得ない", "〜にすぎない"],
        answerIndex: 0,
        explanation: "〜得る attaches to a verb stem to indicate possibility — here, the negative side that religion can bring about."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-44 — A story about an Olympic athlete
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-44",
    title: "五輪[ごりん]に賭[か]けた一人[ひとり]の水泳選手[すいえいせんしゅ]",
    titleReading: "ごりんにかけたひとりのすいえいせんしゅ",
    level: "N2",
    summary: "The story of swimmer Yui, who overcame a career-threatening shoulder injury, qualified for the Olympics through a final-chance meet, and after the Games chose to mentor younger swimmers rather than chase medals.",
    estMinutes: 10,
    tags: ["biography", "sports", "injury recovery", "Olympics"],
    body: [
      "彼女[かのじょ]の名[な]は結衣[ゆい]。水泳[すいえい]を始[はじ]めたのは五[いつ]歳[さい]のときであったと、彼女[かのじょ]は後[のち]に語[かた]っている。地元[じもと]のプール[ぷーる]で泳[およ]ぐことが何[なに]よりも好[す]きだった少女[しょうじょ]は、中学校[ちゅうがっこう]に入[はい]ると本格的[ほんかくてき]な競技[きょうぎ]に打[う]ち込[こ]むようになった。高校[こうこう]時代[じだい]には全国[ぜんこく]大会[たいかい]で入賞[にゅうしょう]し、大学[だいがく]に進学[しんがく]してからは日本[にほん]代表[だいひょう]候補[こうほ]に選[えら]ばれた。順風満帆[じゅんぷうまんぱん]に見[み]えた彼女[かのじょ]のキャリア[きゃりあ]は、しかし、ある試合[しあい]の着地[ちゃくち]の瞬間[しゅんかん]に暗転[あんてん]する。",
      "大学[だいがく]三年[さんねん]の冬[ふゆ]、合宿[がっしゅく]中[ちゅう]に右肩[みぎかた]に激痛[げきつう]が走[はし]った。診断[しんだん]は肩[かた]の腱板[けんばん]断裂[だんれつ]。手術[しゅじゅつ]を回避[かいひ]すれば競技[きょうぎ]生命[せいめい]が危[あぶ]ないと宣告[せんこく]された。長年[ながねん]積[つ]み上[あ]げてきた記録[きろく]と自信[じしん]が、一瞬[いっしゅん]で崩[くず]れ去[さ]った。彼女[かのじょ]は病院[びょういん]の廊下[ろうか]で声[こえ]を殺[ころ]して泣[な]いた。医師[いし]からは、復帰[ふっき]まで最低[さいてい]十[じゅう]か月[かげつ]を要[よう]すると告[つ]げられた。オリンピック[おりんぴっく]まであと一年半[いちねんはん]、計算[けいさん]上[じょう]は間[ま]に合[あ]うはずであったが、彼女[かのじょ]自身[じしん]の心[こころ]はすでに折[お]れかけていた。",
      "リハビリ[りはびり]の初[はじ]めの三[さん]か月[かげつ]、彼女[かのじょ]はプール[ぷーる]に入[はい]ることすら許[ゆる]されなかった。指[ゆび]先[さき]の感覚[かんかく]を確[たし]かめるための細[こま]かい運動[うんどう]を、毎日[まいにち]幾時間[いくじかん]も続[つづ]けた。支[ささ]えたのは家族[かぞく]と、かつての恩師[おんし]からの手紙[てがみ]であった。恩師[おんし]は手紙[てがみ]の中[なか]で、泳[およ]げない日々[ひび]こそが泳者[およもの]を作[つく]るのだと書[か]き送[おく]った。彼女[かのじょ]はその言葉[ことば]を壁[かべ]に貼[は]り、朝[あさ]目[め]を覚[さ]ますたびに読[よ]み返[かえ]した。どん底[どんぞこ]にいたからこそ、自分[じぶん]が本当[ほんとう]に泳[およ]ぎ続[つづ]けたいのかを問[と]い直[なお]す余裕[よゆう]を持[も]てたのかもしれない。",
      "半年[はんとし]後[ご]、彼女[かのじょ]はようやく水[みず]に戻[もど]った。かつての感覚[かんかく]は戻[もど]らず、五[いつ]百[ひゃく]メートル[めーとる]で息切[いきぎ]れがした。しかし彼女[かのじょ]は焦[あせ]らなかった。一[いち]か月[かげつ]ごとに少[すこ]しずつ距離[きょり]を伸[の]ばし、三[さん]か月[かげつ]後[ご]には公式[こうしき]試合[しあい]に復帰[ふっき]した。結果[けっか]は予選[よせん]敗退[はいたい]。それでも彼女[かのじょ]は、自分[じぶん]がまだ競技[きょうぎ]者[しゃ]でいられるという事実[じじつ]に救[すく]われた。彼女[かのじょ]は記録[きろく]ではなく、泳[およ]ぐこと自体[じたい]を取[と]り戻[もど]したのである。",
      "オリンピック[おりんぴっく]代表[だいひょう]の切符[きっぷ]は、最終[さいしゅう]選考[せんこう]会[かい]まで判定[はんてい]に持ち[もち]込[こ]まれた。最後[さいご]の一枠[いちわく]を争[あらそ]うレース[れーす]で、彼女[かのじょ]は残[のこ]り五[ご]メートル[めーとる]で二[に]位[い]から一[いち]位[い]に浮上[ふじょう]した。ゴール[ごーる]後[ご]、彼女[かのじょ]はプール[ぷーる]サイド[さいど]で天[てん]を仰[あお]いだ。長[なが]い闘[たたか]いが報[むく]われた瞬間[しゅんかん]であった。本番[ほんばん]のオリンピック[おりんぴっく]では準決勝[じゅんけっしょう]止[ど]まりであったが、彼女[かのじょ]にとって成績[せいせき]は二[に]の次[つぎ]であった。彼女[かのじょ]は自分[じぶん]の限界[げんかい]を越[こ]えたという達成感[たっせいかん]を胸[むね]に、競技[きょうぎ]人生[じんせい]を閉[と]じる覚悟[かくご]を決[き]めた。",
      "引退[いんたい]後[ご]、結衣[ゆい]は母校[ぼこう]で後輩[こうはい]たちの指導[しどう]に当[あ]たっている。彼女[かのじょ]が最[もっと]も重[おも]んでいるのは、記録[きろく]を伸[の]ばすことではなく、怪我[けが]をした選手[せんしゅ]の心[こころ]を支[ささ]えることである。彼女[かのじょ]自身[じしん]の経験[けいけん]が、教科書[きょうかしょ]には載[の]らない教訓[きょうくん]となっている。若[わか]い選手[せんしゅ]たちは、彼女[かのじょ]の言葉[ことば]の奥[おく]にある痛み[いたみ]と希望[きぼう]を敏感[びんかん]に感[かん]じ取[と]るという。",
      "結衣[ゆい]はかつて語[かた]った。メダル[めだる]は色[いろ]が褪[あ]せても、闘[たたか]った記憶[きおく]は色褪[いろあ]せない、と。彼女[かのじょ]の言葉[ことば]は、結果[けっか]だけを尊[とうと]ぶ風潮[ふうちょう]に一[ひと]石[せき]を投[な]げる。スポーツ[すぽーつ]の価値[かち]は勝敗[しょうはい]の向[む]こう側[がわ]にあるという彼女[かのじょ]の信念[しんねん]は、これからも多[おお]くの人[ひと]に響[ひび]き続[つづ]けるだろう。彼女[かのじょ]の泳[およ]ぎは、たった一度[いちど]きりの輝[かがや]きを残[のこ]して終[お]わったが、その軌跡[きせき]は次世代[じせだい]へと確[たし]かに手渡[てわた]されている。"
    ],
    translation: [
      "Her name is Yui. She later said she started swimming at the age of five. A girl who loved nothing more than swimming at her local pool, she began to devote herself to competitive swimming upon entering junior high school. In high school she placed in national competitions, and after advancing to university she was selected as a candidate for the Japanese national team. Her career, which seemed to be sailing smoothly, however, suddenly darkened the moment she finished a race.",
      "In the winter of her third year of university, a sharp pain ran through her right shoulder during training camp. The diagnosis was a torn rotator cuff. She was told that avoiding surgery would endanger her competitive career. The records and confidence she had built up over many years collapsed in an instant. She stifled her cries and wept in the hospital corridor. The doctor told her recovery would take at least ten months. A year and a half remained until the Olympics, so on paper she should make it, but her heart was already close to breaking.",
      "During the first three months of rehabilitation, she was not even allowed into the pool. She continued for hours each day the small movements to confirm the sensations in her fingertips. What supported her were her family and a letter from a former mentor. In the letter the mentor wrote that the days she could not swim were what would make her a swimmer. She pasted those words on her wall and read them every morning when she woke. Perhaps because she was at rock bottom, she had the composure to ask herself whether she truly wanted to keep swimming.",
      "Half a year later, she finally returned to the water. Her old sensations did not return; she was out of breath after five hundred meters. But she did not rush. She extended the distance little by little each month, and three months later she returned to an official competition. The result was elimination in the preliminaries. Still, she was saved by the fact that she could still be a competitor. She recovered not records but the act of swimming itself.",
      "The ticket to the Olympics was carried over to the final selection meet. In the race fighting for the last slot, she rose from second to first place with five meters remaining. After the finish she looked up at the sky at poolside. It was the moment her long battle was rewarded. In the Olympics proper she stopped at the semifinals, but for her the result was secondary. With a sense of achievement that she had exceeded her limits, she resolved to close her competitive career.",
      "After retirement, Yui coaches younger swimmers at her alma mater. What she values most is not extending records but supporting the hearts of athletes who have been injured. Her own experience has become a lesson no textbook carries. Young athletes, it is said, sensitively sense the pain and hope behind her words.",
      "Yui once said: even if the color of a medal fades, the memory of having fought does not. Her words cast a stone into a culture that prizes only results. Her belief that the value of sport lies on the other side of victory and defeat will continue to resonate with many. Her swimming ended, leaving behind a once-in-a-lifetime brilliance, but her trajectory is certainly being handed to the next generation."
    ],
    questions: [
      {
        q: "What injury threatened Yui's swimming career in her third year of university?",
        choices: ["A torn ligament in her knee", "A torn rotator cuff in her right shoulder", "A fractured wrist", "A stress fracture in her spine"],
        answerIndex: 1,
        explanation: "The diagnosis was 肩の腱板断裂 — a torn rotator cuff in her right shoulder, suffered during a winter training camp."
      },
      {
        q: "What did Yui's mentor write in the letter that supported her?",
        choices: ["That she should retire immediately and find another career", "That the days she could not swim were what would make her a swimmer", "That she should pursue surgery abroad", "That medals do not matter at all"],
        answerIndex: 1,
        explanation: "The mentor wrote 泳げない日々こそが泳者を作るのだ — the days she could not swim would make her a swimmer."
      },
      {
        q: "How did Yui qualify for the Olympics?",
        choices: ["By winning the national championship outright", "By placing first in the final selection race, moving from second to first in the last five meters", "By a coach's discretionary selection", "By default after another swimmer withdrew"],
        answerIndex: 1,
        explanation: "At the 最終選考会 she 残り五メートルで二位から一位に浮上 to claim the last slot."
      },
      {
        q: "What does Yui now emphasize when coaching her juniors?",
        choices: ["Maximizing medal counts at any cost", "Supporting the hearts of injured athletes", "Pushing swimmers past pain regardless of injury", "Specializing only in young prodigies"],
        answerIndex: 1,
        explanation: "She values 怪我をした選手の心を支えること over extending records, drawing on her own experience."
      },
      {
        q: "Which N2 grammar point appears in '彼女自身の経験が、教科書には載らない教訓となっている'?",
        choices: ["〜とは限らない", "〜にすぎない", "〜とは (definitional: being / is what is called)", "〜どころか"],
        answerIndex: 2,
        explanation: "〜とは here introduces a definitional phrase — 'has become what is called a lesson not found in textbooks.'"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-45 — Japanese corporate governance
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-45",
    title: "日本[にほん]企業[きぎょう]のガバナンス[がばなんす]改革[かいかく]が直面[ちょくめん]する課題[かだい]",
    titleReading: "にほんきぎょうのがばなんすかいかくがちょくめんするかだい",
    level: "N2",
    summary: "An overview of Japanese corporate governance reform: the shift from stakeholder to shareholder orientation, the introduction of outside directors and the corporate governance code, persistent cross-shareholding, and the cultural tensions reform must navigate.",
    estMinutes: 12,
    tags: ["business", "governance", "corporate reform", "policy"],
    body: [
      "日本[にほん]企業[きぎょう]のガバナンス[がばなんす]は、ここ十年[じゅうねん]ほどの間[あいだ]に大[おお]きな変革[へんかく]を遂[と]げつつある。かつては株主[かぶぬし]よりも従業[じゅうぎょう]員[いん]や取引[とりひき]先[さき]といったステークホルダー[すてーくほるだー]を重視[じゅうし]する経営[けいえい]が主流[しゅりゅう]であった。しかし、海外[かいがい]投資[とうし]家[か]の増加[ぞうか]と国際的[こくさいてき]な競争[きょうそう]の激化[げきか]を背景[はいけい]に、株主[かぶぬし]の利益[りえき]を明示的[めいじてき]に反映[はんえい]させる仕組[しく]みが求[もと]められるようになった。この変化[へんか]は単[たん]なる経営[けいえい]手法[しゅほう]の変更[へんこう]にとどまらず、日本[にほん]の企業[きぎょう]文化[ぶんか]そのものの転換[てんかん]を意味[いみ]している。",
      "改革[かいかく]の象徴[しょうちょう]的存在[そんざい]とされるのが、二[に]〇[じゅう]一[いち]五[ご]年[ねん]に導入[どうにゅう]されたコーポレート[こーぽれーと]ガバナンス[がばなんす]コード[こーど]である。この規則[きそく]は、上場[じょうじょう]企業[きぎょう]に対[たい]して取締[とりしまり]役会[やくかい]の独立性[どくりつせい]と透明性[とうめいせい]を確保[かくほ]することを求[もと]めている。とりわけ社外[しゃがい]取締[とりしまり]役[やく]の過半[かはん]数[すう]登用[とうよう]は、経営[けいえい]陣[じん]の監視[かんし]機能[きのう]を強化[きょうか]する重要[じゅうよう]な手段[しゅだん]と位置[いち]づけられた。以前[いぜん]は、社内[しゃない]出身[しゅっしん]の役員[やくいん]が幅[はば]を利[き]かせ、意思決定[いしけってい]が閉鎖[へいさ]的[てき]になりがちであった。社外[しゃがい]の視点[してん]を取[と]り入[い]れることは、長[なが]年の慣行[かんこう]を覆[くつがえ]す試[こころ]みであったと言[い]える。",
      "もう一[ひと]つの柱[はしら]が、持分[もちぶん]基準[きじゅん]会計[かいけい]の見直[みなお]しと持合[もちあい]株式[かぶしき]の解消[かいしょう]である。日本[にほん]企業[きぎょう]は古[ふる]くから、取引[とりひき]先[さき]と互[たが]いに株[かぶ]を持ち合[あ]うことで関係[かんけい]を強固[きょうこ]にしてきた。この慣行[かんこう]は取引[とりひき]関係[かんけい]を安定[あんてい]させる反面[はんめん]、資本[しほん]の効率[こうりつ]を低[ひく]め、外部[がいぶ]からの監視[かんし]を遮断[しゃだん]する弊害[へいがい]が指摘[してき]されていた。東京[とうきょう]証券[しょうけん]取引[とりひき]所[しょ]は持合[もちあい]株式[かぶしき]の解消[かいしょう]を促[うなが]す指針[しひん]を公表[こうひょう]し、企業[きぎょう]側[がわ]も徐[じょじょ]々に対応[たいおう]を進[すす]めている。しかし、取引[とりひき]関係[かんけい]の見直[みなお]しが経営[けいえい]に与[あた]える影響[えいきょう]は大きく、簡[かん]単[たん]に解決[かいけつ]できる問題[もんだい]ではない。",
      "ROEという指標[しひょう]の重視[じゅうし]も、改革[かいかく]の重要[じゅうよう]な要素[ようそ]である。日本[にほん]企業[きぎょう]のROEは長[なが]く先進[せんしん]国[こく]の平均[へいきん]を下回[したまわ]っており、資本[しほん]効率[こうりつ]の低[てい]さが海外[かいがい]投資[とうし]家[か]の批判[ひはん]の的[まと]となっていた。政府[せいふ]が主導[しゅどう]する投資[とうし]家[か]と企業[きぎょう]の対話[たいわ]促進[そくしん]プロジェクト[ぷろじぇくと]は、こうした指摘[してき]に応[おう]じるものである。企業[きぎょう]は配当[はいとう]や自[じ]己[こ]株[かぶ]買[がい]戻[もど]しを通[つう]じて株主[かぶぬし]還元[かんげん]を強化[きょうか]し始[はじ]めた。しかし同時[どうじ]に、短期的[たんきてき]な利益[りえき]の追求[ついきゅう]が長期的[ちょうきてき]な投資[とうし]を犠牲[ぎせい]にする危険[きけん]も指摘[してき]されており、バランス[ばらんす]の取[と]り方[かた]が問[と]われている。",
      "改革[かいかく]が進[すす]む一方[いっぽう]で、日本[にほん]特有[とくゆう]の課題[かだい]も顕在化[けんざいか]している。社外[しゃがい]取締[とりしまり]役[やく]を外部[がいぶ]から採用[さいよう]しても、実際[じっさい]に経営[けいえい]に深[ふか]く関与[かんよ]する人材[じんざい]は少[すく]ない。多[おお]くの企業[きぎょう]で、社外[しゃがい]役員[やくいん]は名目的[めいめてき]な存在[そんざい]に留[とど]まっているとの批判[ひはん]が絶[た]えない。また、取締[とりしまり]役会[やくかい]の多様性[たようせい]も依然[いぜん]として低[ひく]く、女性[じょせい]や外国人[がいこくじん]の比率[ひりつ]は欧米[おうべい]に大[おお]きく後[おく]れを取[と]っている。制度[せいど]的[てき]な枠組[わくぐ]みを整備[せいび]しても、意識[いしき]と実践[じっせん]が伴[ともな]わなければ、改革[かいかく]は形骸化[けいたいか]する恐[おそ]れがある。",
      "ガバナンス[がばなんす]改革[かいかく]は、単[たん]なる制度[せいど]の輸入[ゆにゅう]では成[な]り立[た]たない。日本[にほん]企業[きぎょう]が長年[ながねん]培[つちか]ってきた経営[けいえい]哲学[てつがく]と、新[あたら]しい株主[かぶぬし]資本[しほん]主義[しゅぎ]の要求[ようきゅう]をどう統合[とうごう]するかが鍵[かぎ]となる。終身[しゅうしん]雇用[こよう]を背景[はいけい]に形成[けいせい]された内部[ないぶ]昇進[しょうしん]制度[せいど]は、独特[どくとく]な強[つよ]みを持[も]つ反面[はんめん]、外部[がいぶ]人材[じんざい]の登用[とうよう]を困難[こんなん]にしている。このジレンマ[じれんま]を乗[の]り越[こ]えるためには、日本[にほん]型[がた]経営[けいえい]の核心[かくしん]を保[たも]ちつつ、柔軟[じゅうなん]性[せい]を取[と]り入[い]れるハイブリッド[はいぶりっど]な仕組[しく]みが模索[もさく]されなければならない。",
      "結論[けつろん]として、日本[にほん]企業[きぎょう]のガバナンス[がばなんす]改革[かいかく]は、折[おり]を踏[ふ]まえた前進[ぜんしん]を見[み]せているが、未[いま]だ途上[とじょう]にある。制度[せいど]の整備[せいび]と実践[じっせん]の浸透[しんとう]、そして文化[ぶんか]的[てき]な受容[じゅよう]の三[みっ]つが揃[そろ]って初[はじ]めて、改革[かいかく]は真[しん]の効果[こうか]を発揮[はっき]するだろう。日本[にほん]企業[きぎょう]が国際的[こくさいてき]な信頼[しんらい]を獲得[かくとく]し、持続[じぞく]的[てき]な成長[せいちょう]を果[は]たすためには、この改革[かいかく]を継続[けいぞく]させる意志[いし]が経営[けいえい]陣[じん]の两侧[そうそく]から問[と]われている。変化[へんか]を恐[おそ]れず、しかし伝統[でんとう]を無[む]視[し]しない、そのような姿勢[しせい]が求[もと]められていると言[い]える。"
    ],
    translation: [
      "Corporate governance in Japanese companies has been undergoing major transformation over the past decade or so. Management that emphasized stakeholders such as employees and business partners over shareholders was once mainstream. However, against a backdrop of growing foreign investors and intensifying global competition, mechanisms have come to be demanded that explicitly reflect shareholder interests. This change is not merely a modification of management techniques but signifies a transformation of Japanese corporate culture itself.",
      "The symbolic existence of reform is the corporate governance code introduced in 2015. This regulation requires listed companies to secure the independence and transparency of their boards of directors. In particular, appointing a majority of outside directors was positioned as an important means to strengthen the monitoring function over management. Previously, executives from within the company held sway and decision-making tended to be closed. Incorporating outside perspectives can be said to be an attempt to overturn a long-standing practice.",
      "Another pillar is the review of equity-method accounting and the unwinding of cross-shareholdings. Japanese companies have long strengthened relationships by mutually holding shares with business partners. This practice stabilizes trading relationships, but on the other hand has been pointed out to lower capital efficiency and block external monitoring. The Tokyo Stock Exchange has published guidelines encouraging the unwinding of cross-shareholdings, and companies have been gradually responding. However, the impact of revising trading relationships on management is significant, and it is not an issue that can be resolved easily.",
      "The emphasis on ROE as an indicator is also an important element of reform. Japanese companies' ROE has long been below the advanced-nation average, and the low capital efficiency has been a target of criticism from foreign investors. The investor-company dialogue promotion project led by the government responds to these points. Companies have begun to enhance shareholder returns through dividends and share buybacks. At the same time, however, it has been pointed out that the pursuit of short-term profit risks sacrificing long-term investment, and how to strike the balance is being questioned.",
      "While reform proceeds, issues peculiar to Japan have also become apparent. Even when outside directors are hired from outside, few actually engage deeply in management. In many companies, criticism persists that outside officers remain nominal presences. In addition, board diversity remains low, with ratios of women and foreigners lagging far behind those in the West. Even if institutional frameworks are prepared, without accompanying awareness and practice, reform risks becoming a mere formality.",
      "Governance reform cannot be sustained merely by importing institutions. The key will be how to integrate the management philosophy Japanese companies have cultivated over the years with the demands of new shareholder capitalism. The internal promotion system formed against the backdrop of lifetime employment has, on the one hand, distinctive strengths, but on the other hand makes it difficult to hire outside talent. To overcome this dilemma, a hybrid mechanism must be explored that retains the core of Japanese-style management while incorporating flexibility.",
      "In conclusion, governance reform in Japanese companies shows steady progress but remains in progress. Only when the three elements of institutional preparation, the permeation of practice, and cultural acceptance come together will reform demonstrate true effect. For Japanese companies to earn international trust and achieve sustainable growth, the will to continue this reform is being asked of both sides of management. An attitude can be said to be required that does not fear change but does not ignore tradition."
    ],
    questions: [
      {
        q: "What did the corporate governance code of 2015 require of listed companies?",
        choices: ["Abolition of all boards of directors", "Securing board independence and transparency, including a majority of outside directors", "Mandatory sale of all subsidiaries", "Adoption of lifetime employment for all staff"],
        answerIndex: 1,
        explanation: "The コーポレートガバナンスコード required listed companies to 取締役会の独立性と透明性を確保, especially through 社外取締役の過半数登用."
      },
      {
        q: "Why has cross-shareholding been criticized?",
        choices: ["Because it raises capital efficiency excessively", "Because it lowers capital efficiency and blocks external monitoring", "Because it is illegal under Japanese law", "Because it forces companies to merge"],
        answerIndex: 1,
        explanation: "The passage says 持合株式 lowers 資本の効率 and 遮断 from 外部からの監視 — the key criticisms driving its unwinding."
      },
      {
        q: "What tension does the passage identify in the emphasis on ROE?",
        choices: ["Higher ROE always guarantees long-term growth", "Pursuing short-term profit risks sacrificing long-term investment", "ROE is irrelevant to foreign investors", "ROE measurement is forbidden in Japan"],
        answerIndex: 1,
        explanation: "The text notes 短期的な利益の追求が長期的な投資を犠牲にする危険 and asks how to balance short-term returns with long-term investment."
      },
      {
        q: "What cultural issue does the passage say may render governance reform a mere formality?",
        choices: ["Excessive foreign investment in all firms", "Outside directors remaining nominal and low board diversity", "Too many women on boards", "Excessive transparency at all levels"],
        answerIndex: 1,
        explanation: "The text warns 社外役員は名目的な存在に留まる and 取締役会の多様性も低く — without awareness and practice, reform becomes 形骸化."
      },
      {
        q: "Which N2 grammar point appears in '制度の整備と実践の浸透、そして文化的な受容の三つが揃って初めて'?",
        choices: ["〜末に", "〜て初めて (only after ... does X happen)", "〜次第で", "〜にあたって"],
        answerIndex: 1,
        explanation: "〜て初めて means 'only after doing X does Y become possible' — here, only when the three elements come together will reform show true effect."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-46 — A story about a deaf community's advocacy
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-46",
    title: "手話[しゅわ]を法制化[せいせいか]した聴覚[ちょうかく]障害[しょうがい]者[しゃ]たちの闘い[たたかい]",
    titleReading: "しゅわをせいせいかしたちょうかくしょうがいしゃたちのたたかい",
    level: "N2",
    summary: "The story of a deaf advocacy group led by Aoi, who fought to have Japanese Sign Language legally recognized, navigated resistance from officials and within the deaf community, and saw a municipal ordinance pass that became a model for other regions.",
    estMinutes: 11,
    tags: ["biography", "advocacy", "sign language", "disability rights"],
    body: [
      "葵[あおい]が生[う]まれた時[とき]、両親[りょうしん]は娘[むすめ]が耳[みみ]が聞[き]こえないことを知[し]らなかった。三[さん]歳[さい]の検診[けんしん]で初[はじ]めて聴覚[ちょうかく]障害[しょうがい]が判明[はんめい]した。彼女[かのじょ]の両親[りょうしん]は当初[とうしょ]、口話[こうわ]法[ほう]による教育[きょういく]を選択[せんたく]した。娘[むすめ]が声[こえ]を読[よ]み取[と]る技術[ぎじゅつ]を身[み]につければ、聞[き]こえる人[ひと]たちの社会[しゃかい]に溶[と]け込[こ]めると信[しん]じたからである。しかし葵[あおい]は成長[せいちょう]するにつれ、自分[じぶん]の言葉[ことば]を奪[うば]われているような疎外[そがい]感[かん]を抱[いだ]くようになった。",
      "中学[ちゅうがく]に入[はい]り、ろう学校[がっこう]の夏[なつ]キャンプ[きゃんぷ]に参加[さんか]したことが彼女[かのじょ]の運命[うんめい]を変[か]えた。そこで初[はじ]めて手話[しゅわ]を使[つか]う仲間[なかま]たちと出会[であ]い、自分[じぶん]の思[おも]いを自由[じゆう]に表現[ひょうげん]できる喜[よろこ]びを知[し]った。手話[しゅわ]は単[たん]なる身[み]振[ぶ]りではなく、独立[どくりつ]した言語[げんご]であることを学[まな]んだ。帰宅[きたく]した彼女[かのじょ]は両親[りょうしん]に、自分[じぶん]は手話[しゅわ]で生[い]きていきたいと伝[つた]えた。両親[りょうしん]は戸惑[とまど]いながらも、娘[むすめ]の決意[けつい]を受け入[い]れた。その日[ひ]から、彼女[かのじょ]の言語[げんご]に対[たい]する闘[たたか]いが始[はじ]まったと言[い]える。",
      "大学[だいがく]進学[しんがく]後[ご]、葵[あおい]は聴覚[ちょうかく]障害[しょうがい]者[しゃ]の権利[けんり]向上[こうじょう]を目的[もくてき]とする団体[だんたい]に加[くわ]わった。彼女[かのじょ]が最[もっと]も力[ちから]を入[い]れた課題[かだい]は、手話[しゅわ]の法制化[せいせいか]であった。日本[にほん]では長[なが]く、手話[しゅわ]は言語[げんご]として法的[ほうてき]に認[みと]められてこなかった。そのため、公的[こうてき]な場面[ばめん]で通訳[つうやく]をつける義務[ぎむ]がなく、教育[きょういく]現場[げんば]でも手話[しゅわ]の使用[しよう]は限定的[げんていてき]であった。彼女[かのじょ]は、言語[げんご]としての地位[ちい]が認[みと]められなければ、障害[しょうがい]者[しゃ]の参画[さんかく]は形式的[けいしきてき]なものに終[お]わると主張[しゅちょう]した。",
      "法制化[せいせいか]に向[む]けた運動[うんどう]は平坦[へいたん]な道[みち]ではなかった。行政[ぎょうせい]側[がわ]からは、手話[しゅわ]を言語[げんご]として認定[にんてい]すれば財政[ざいせい]負担[ふたん]が増大[ぞうだい]するという反対[はんたい]が出された。また、ろう者[ろうしゃ]の間[あいだ]でも意見[いけん]が割[わ]れた。口話[こうわ]中心[ちゅうしん]で社会[しゃかい]に適応[てきおう]してきた人[ひと]たちは、法制化[せいせいか]が新[あたら]しい分断[ぶんだん]を生むと懸念[けねん]した。葵[あおい]は、こうした内部[ないぶ]の対立[たいりつ]を仲介[ちゅうかい]する役割[やくわり]を担[にな]うことになった。彼女[かのじょ]は繰[く]り返[かえ]し対話[たいわ]の場[ば]を設[もう]け、互[たが]いの経験[けいけん]と痛[いた]みを分[わ]かち合[あ]うことを促[うなが]した。",
      "転機[てんき]となったのは、ある聴覚[ちょうかく]障害[しょうがい]児[じ]の親[おや]からの訴[うった]えであった。病院[びょういん]での診察[しんさつ]時[じ]、親[おや]が内容[ないよう]を理解[りかい]できず、子供[こども]の容体[ようたい]が悪化[あっか]したという出来事[できごと]であった。この事例[じれい]は地元[じもと]の新聞[しんぶん]に報道[ほうどう]され、公共[こうきょう]の場[ば]で手話[しゅわ]通訳[つうやく]が不可欠[ふかつけつ]であるとの世論[せろん]が形成[けいせい]された。葵[あおい]の団体[だんたい]はこの機会[きかい]を活[いか]し、地方自治体[ちほうじちたい]に対[たい]して手話[しゅわ]言語[げんご]条例[じょうれい]の制定[せいてい]を求[もと]める請願[せいがん]を提出[ていしゅつ]した。議会[ぎかい]での審議[しんぎ]は難航[なんこう]したが、最終的[さいしゅうてき]に条例[じょうれい]は可決[かけつ]された。",
      "条例[じょうれい]の制定[せいてい]は、手話[しゅわ]を言語[げんご]として認定[にんてい]する日本[にほん]で最初[さいしょ]の試[こころ]みとなった。これを契機[けいき]に、他[ほか]の自治体[じちたい]も続[つづ]々[つづ]と類似[るいじ]の条例[じょうれい]を制定[せいてい]し始[はじ]めた。国[くに]レベルでも手話[しゅわ]言語[げんご]法[ほう]の制定[せいてい]に向[む]けた議論[ぎろん]が始[はじ]まった。葵[あおい]は報道[ほうどう]陣[じん]に対[たい]し、条例[じょうれい]は通過点[つうかてん]に過[す]ぎないと語[かた]った。真[しん]の目標[もくひょう]は、障害[しょうがい]の有無[うむ]に関[かん]わらず、すべての人[ひと]が自分[じぶん]の言葉[ことば]で社会[しゃかい]に参画[さんかく]できる環境[かんきょう]を作ることであると。",
      "現在[げんざい]、葵[あおい]は次[つぎ]の世代[せだい]の若[わか]いろう者[ろうしゃ]たちの育成[いくせい]に力[ちから]を入[い]れている。彼女[かのじょ]が強[つよ]調[ちょう]するのは、権利[けんり]は与[あた]えられるものではなく、勝[か]ち取[と]るものだという事実[じじつ]である。同時[どうじ]に、対立[たいりつ]を生[う]まない運動[うんどう]の重要性[じゅうようせい]も説[と]く。声[こえ]の届[とど]かない人[ひと]が、声[こえ]を上[あ]げることで社会[しゃかい]を変[か]えられることを彼女[かのじょ]は自[みずか]ら証明[しょうめい]した。その歩[ある]みは緩[ゆる]やかであるが、確[たし]かな足跡[そくせき]として後[のち]の人々[ひとびと]の道標[みちしるべ]となっている。"
    ],
    translation: [
      "When Aoi was born, her parents did not know their daughter could not hear. Her hearing impairment was first revealed at a checkup at age three. Her parents initially chose an oral education. They believed that if their daughter acquired the skill of reading lips, she could blend into the society of hearing people. But as Aoi grew, she began to harbor a sense of exclusion, as if her own language had been taken from her.",
      "Entering junior high and attending a summer camp at a deaf school changed her fate. There, for the first time, she met peers who used sign language and discovered the joy of freely expressing her thoughts. She learned that sign language is not mere gesture but an independent language. Returning home, she told her parents that she wanted to live using sign language. Her parents were bewildered, but accepted their daughter's resolve. From that day, her battle for language can be said to have begun.",
      "After entering university, Aoi joined an organization aimed at advancing the rights of people with hearing impairments. The issue she devoted herself to most was the legal recognition of sign language. In Japan, sign language had long not been legally recognized as a language. Therefore, there was no obligation to provide interpreters in public settings, and the use of sign language in educational settings was limited. She argued that without recognition of its status as a language, participation by people with disabilities would end up being merely formal.",
      "The movement toward legal recognition was not a smooth road. The administration raised opposition, arguing that recognizing sign language as a language would increase fiscal burdens. Also, opinion split among deaf people themselves. Those who had adapted to society through oral methods worried that legal recognition would create new divisions. Aoi took on the role of mediating these internal conflicts. She repeatedly set up venues for dialogue and encouraged people to share their experiences and pains with one another.",
      "The turning point came when the parent of a child with hearing impairment raised a complaint. During a hospital examination, the parent could not understand the content and the child's condition worsened. This case was reported in the local newspaper, and public opinion formed that sign-language interpretation in public settings is indispensable. Aoi's organization took advantage of this opportunity, submitting a petition to the local government demanding the enactment of a sign-language ordinance. Deliberations in the council were difficult, but in the end the ordinance was passed.",
      "The enactment of the ordinance became the first attempt in Japan to recognize sign language as a language. With this as a trigger, other local governments began to enact similar ordinances one after another. At the national level, discussions began toward enacting a sign-language language act. Aoi told the press that the ordinance was merely a passing point. Her true goal, she said, was to create an environment in which everyone, regardless of disability, could participate in society in their own language.",
      "Today, Aoi focuses on nurturing the next generation of young deaf people. What she stresses is the fact that rights are not given but won. At the same time, she preaches the importance of movements that do not produce conflict. She herself proved that people whose voices do not reach can change society by raising their voices. Her steps are slow, but as certain footprints they have become a guidepost for those who follow."
    ],
    questions: [
      {
        q: "What did Aoi discover at the deaf school summer camp that changed her life?",
        choices: ["That she could learn to speak better with therapy", "That sign language is an independent language and she could freely express herself", "That she should hide her deafness from society", "That oral education was superior to sign language"],
        answerIndex: 1,
        explanation: "At the camp she first met peers using 手話 and learned it is 独立した言語, finding the joy of 自分の思いを自由に表現できる."
      },
      {
        q: "Why did Aoi insist on legal recognition of sign language as a language?",
        choices: ["Because she wanted to ban oral education entirely", "Because without language status, participation of disabled people would remain merely formal", "Because she wanted to make sign language compulsory for all hearing people", "Because international treaties required it immediately"],
        answerIndex: 1,
        explanation: "She argued that without 言語としての地位の認定, participation by people with disabilities would be 形式的なものに終わる."
      },
      {
        q: "What event triggered public opinion to support the sign-language ordinance?",
        choices: ["A famous actor gave a speech in sign language", "A deaf child's condition worsened because the parent could not understand a hospital examination", "A protest march turned violent", "A government minister made an offensive remark"],
        answerIndex: 1,
        explanation: "The case of a parent not understanding a hospital examination, leading to the child's condition worsening, was reported and formed public opinion."
      },
      {
        q: "How does Aoi now view the ordinance that was passed?",
        choices: ["As a final victory that ends her advocacy", "As merely a passing point on the way to true inclusion", "As a failure because it has no real effect", "As something to be repealed soon"],
        answerIndex: 1,
        explanation: "Aoi told the press that the ordinance was 通過点にすぎない, with the true goal being full participation regardless of disability."
      },
      {
        q: "Which N2 grammar point appears in '権利は与えられるものではなく、勝ち取るものだ'?",
        choices: ["〜ものの", "〜ものだ (it is the case that / by nature)", "〜ものなら", "〜ながら"],
        answerIndex: 1,
        explanation: "〜ものだ here expresses an essential truth about something — 'rights are by nature won, not given.'"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-47 — The future of Japanese cinema
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-47",
    title: "日本[にほん]映画[えいが]が直面[ちょくめん]する未来[みらい]への分岐点[ぶんきてん]",
    titleReading: "にほんえいががちょくめんするみらいへのぶんきてん",
    level: "N2",
    summary: "An analysis of the future of Japanese cinema: the legacy of studio-era auteurs, the rise of independent cinema and animation, the streaming-platform disruption, and the cultural challenge of telling globally resonant yet locally rooted stories.",
    estMinutes: 11,
    tags: ["cinema", "culture", "streaming", "animation"],
    body: [
      "日本[にほん]映画[えいが]は、黒沢[くろさわ]明[あきら]や小津[おづ]安二郎[やすじろう]といった巨匠[きょしょう]を輩出[はいしゅつ]した輝[かがや]かしい歴史[れきし]を持[も]つ。彼[かれ]らの作品[さくひん]は国内[こくない]にとどまらず、世界[せかい]の映画[えいが]史[し]に深[ふか]い影響[えいきょう]を与[あた]えた。しかし、その黄金[おうごん]時代[じだい]は永遠[えいえん]には続[つづ]かなかった。テレビ[てれび]の普及[ふきゅう]と娯楽[ごらく]の多様化[たようか]により、映画館[えいがかん]に足[あし]を運[はこ]ぶ観客[かんきゃく]は減少[げんしょう]の一途[いっと]をたどった。かつて日本[にほん]映画[えいが]を支[ささ]えた松竹[しょうちく]や東宝[とうほう]といった大手[おおて]製作[せいさく]会社[がいしゃ]は、構造[こうぞう]改革[かいかく]を余儀[よぎ]なくされた。日本[にほん]映画[えいが]はかつての栄光[えいこう]の呪縛[じゅばく]と新[あたら]しい時代[じだい]の要求[ようきゅう]の間[あいだ]で揺[ゆ]れることになる。",
      "二[に]〇[じゅう]世紀[せいき]末[まつ]から二[に]十一[じゅういっ]世紀[せいき]にかけて、日本[にほん]映画[えいが]に新[あたら]しい風[かぜ]が吹[ふ]き始[はじ]めた。それは、独立[どくりつ]系[けい]の映画[えいが]監督[かんとく]たちの台頭[たいとう]である。制作[せいさく]費[ひ]が限[かぎ]られた中[なか]、彼[かれ]らは既存[きぞん]のスタジオ[すたじお]制度[せいど]に依存[いぞん]せず、自[みずか]らの作家性[さっかせい]を貫[つらぬ]く作品[さくひん]を作[つく]り始[はじ]めた。是枝[これえだ]裕和[ひろかず]や河瀨[かわせ]直美[なおみ]といった監督[かんとく]たちは、国際[こくさい]映画[えいが]祭[さい]で評価[ひょうか]され、日本[にほん]映画[えいが]の新[あたら]な象徴[しょうちょう]となった。彼[かれ]らの作品[さくひん]は、商業[しょうぎょう]的[てき]な成功[せいこう]よりも、人間[にんげん]の内面[ないめん]を掘[ほ]り下[さ]げることを優先[ゆうせん]した点[てん]で、かつての黄金[おうごん]時代[じだい]の系譜[けいふ]を受け継[うけつ]ぐものであった。",
      "もう一[ひと]つ、日本[にほん]映画[えいが]を支[ささ]える大[おお]きな柱[はしら]が、アニメ[あにめ]というジャンル[じゃんる]である。宮崎[みやざき]駿[はやお]のスタジオ[すたじお]ジブリ[じぶり]作品[さくひん]は、国境[こっきょう]を越[こ]えて愛[あい]され、日本[にほん]文化[ぶんか]の強力[きょうりょく]な輸出[ゆしゅつ]品[ひん]となった。新海[しんかい]誠[まこと]監督[かんとく]の作品[さくひん]が国内外[こくないがい]で大[おお]ヒット[ひっと]したことも、日本[にほん]のアニメ[あにめ]の力[ちから]をあらためて証明[しょうめい]した。しかし、アニメ[あにめ]産業[さんぎょう]の現場[げんば]では、労働[ろうどう]環境[かんきょう]の過酷[かこく]さと報酬[ほうしゅう]の低[てい]さが深刻[しんこく]な問題[もんだい]として長年[ながねん]指摘[してき]され続[つづ]けてきた。輝[かがや]く作品[さくひん]の裏側[うらがわ]で、制作者[せいさくしゃ]の疲弊[ひへい]という暗[くら]い現実[げんじつ]が横[よこ]たわっている。",
      "近年[きんねん]、最[もっと]も大[おお]きな変化[へんか]をもたらしているのは、ストリーミング[すとりーみんぐ]配信[はいしん]サービス[さーびす]の台頭[たいとう]である。Netflix[ねっとふりっくす]やAmazon[あまぞん]といった海外[かいがい]系[けい]のプラットフォーム[ぷらっとふぉーむ]が巨額[きょがく]の資金[しきん]を投[な]げ込[こ]み、日本[にほん]の映像[えいぞう]制作[せいさく]現場[げんば]を変革[へんかく]しつつある。これまで映画館[えいがかん]での公開[こうかい]が前提[ぜんてい]であった作品[さくひん]が、配信[はいしん]独占[どくせん]という新[あたら]しい形[かたち]で観客[かんきゃく]に届けられるようになった。この変化[へんか]は、制作[せいさく]側[がわ]に資金[しきん]と制作[せいさく]の自由[じゆう]をもたらす反面[はんめん]、映画館[えいがかん]文化[ぶんか]の衰退[すいたい]という懸念[けねん]も生[しょう]じさせた。映画[えいが]を大[おお]きな画面[がめん]で体験[たいけん]する文化[ぶんか]が失[うしな]われることは、映画[えいが]の本質[ほんしつ]そのものを問[と]い直[なお]す事態[じたい]である。",
      "グローバル[ぐろーばる]市場[しじょう]への志向[しこう]も、日本[にほん]映画[えいが]に新[あたら]しい課題[かだい]を突[つ]きつけている。海外[かいがい]の観客[かんきゃく]に受[う]け入[い]れられる作品[さくひん]を作るためには、文化的[ぶんかてき]な文脈[ぶんみゃく]をどう翻訳[ほんやく]するかが鍵[かぎ]となる。しかし、安易[あんい]にグローバル[ぐろーばる]なテーマに迎合[げいごう]すれば、日本[にほん]映画[えいが]ならではの特質[とくしつ]が失[うしな]われる危険[きけん]がある。逆[ぎゃく]に、国内的[こくないてき]なテーマに閉[と]じこもれば、国際的[こくさいてき]な評価[ひょうか]を得[え]られないというジレンマ[じれんま]に陥[おちい]る。バランス[ばらんす]を取[と]ることは容易[ようい]ではなく、監督[かんとく]たちの手腕[しゅわん]が問[と]われるところである。",
      "技術[ぎじゅつ]の進化[しんか]も映像[えいぞう]表現[ひょうげん]に新[あたら]しい可能性[かのうせい]をもたらしている。CG技術[ぎじゅつ]や仮想[かそう]空間[くうかん]の発達[はったつ]は、実写[じっしゃ]とアニメ[あにめ]の境界[きょうかい]を曖昧[あいまい]にしつつある。若[わか]い世代[せだい]の映像[えいぞう]作家[さっか]たちは、スマート[すまーと]フォン[ふぉん]一[いっ]台[だい]で作品[さくひん]を作り上[あ]げ、インターネット[いんたーねっと]で発信[はっしん]するという新[あたら]しい手法[しゅほう]を日常化[にちじょうか]している。これは、伝統的[でんとうてき]な映画[えいが]製作[せいさく]の金字塔[きんじとう]を脅[おびや]かすものではなく、むしろ表現[ひょうげん]の民主化[みんしゅか]を進[すす]めるものとして評価[ひょうか]できる。多様[たよう]な声[こえ]が映像[えいぞう]を通[つう]じて社会[しゃかい]に届くようになることは、文化[ぶんか]の成熟[せいじゅく]の兆候[ちょうこう]である。",
      "結論[けつろん]として、日本[にほん]映画[えいが]は過去[かこ]の遺産[いさん]と未来[みらい]の革新[かくしん]の狭間[はざま]に立[た]ち、多[おお]くの課題[かだい]に直面[ちょくめん]している。しかし、そのいずれもが危機[きき]であると同時[どうじ]に、新[あたら]しい表現[ひょうげん]への機会[きかい]でもある。重要[じゅうよう]なのは、映画[えいが]館[かん]という場[ば]の価値[かち]を保[たも]ちつつ、デジタル[でじたる]時代[じだい]の観客[かんきゃく]と対話[たいわ]する柔軟[じゅうなん]性[せい]を持[も]つことである。日本[にほん]映画[えいが]が世界[せかい]に誇[ほこ]れる独自[どくじ]の視点[してん]を失[うしな]わない限[かぎ]り、その未来[みらい]は決[き]して暗[くら]くはないと言[い]える。物語[ものがたり]を紡[つむ]ぐ力[ちから]こそが、この国[くに]の確[たし]かな文化[ぶんか]資本[しほん]だからである。"
    ],
    translation: [
      "Japanese cinema has a brilliant history that produced masters such as Akira Kurosawa and Yasujiro Ozu. Their works went beyond the domestic sphere and exerted deep influence on world film history. However, that golden age did not last forever. With the spread of television and the diversification of entertainment, the audience visiting cinemas continued to decline. Major production companies that once supported Japanese cinema, such as Shochiku and Toho, were forced to undergo structural reform. Japanese cinema came to waver between the curse of past glory and the demands of a new era.",
      "From the end of the twentieth century into the twenty-first, a new wind began to blow through Japanese cinema. It was the rise of independent film directors. With limited production budgets, they began making works that did not depend on the existing studio system and pursued their own authorship. Directors such as Hirokazu Kore-eda and Naomi Kawase were evaluated at international film festivals and became new symbols of Japanese cinema. Their works inherited the lineage of the golden age in that they prioritized digging into the human interior over commercial success.",
      "Another major pillar supporting Japanese cinema is the genre of animation. The works of Studio Ghibli, led by Hayao Miyazaki, have been loved across borders and have become powerful exports of Japanese culture. That films by director Makoto Shinkai became major hits both domestically and abroad again proved the strength of Japanese animation. However, on the front lines of the animation industry, the harsh labor conditions and low pay have been pointed out for many years as a serious problem. Behind the shining works lies the dark reality of the exhaustion of their creators.",
      "In recent years, the change that has brought the greatest impact is the rise of streaming distribution services. Foreign-based platforms such as Netflix and Amazon have poured enormous funds and are transforming the Japanese video production scene. Works that had previously been premised on theatrical release have come to be delivered to audiences in a new form of distribution exclusivity. This change brings funding and creative freedom to the production side, but on the other hand, it has also raised concerns about the decline of cinema-house culture. The loss of the culture of experiencing films on a large screen is a situation that calls the very essence of cinema into question.",
      "The orientation toward the global market has also presented Japanese cinema with new challenges. In order to make works accepted by overseas audiences, the key is how to translate cultural context. However, easily pandering to global themes risks losing the qualities distinctive to Japanese cinema. Conversely, closing itself off to domestic themes risks being unable to gain international recognition — a dilemma. Striking the balance is not easy, and it is the directors' skills that are tested.",
      "The evolution of technology has also brought new possibilities to visual expression. The development of CG and virtual space is blurring the boundary between live-action and animation. Young visual artists have normalized a new method of creating works with a single smartphone and disseminating them on the internet. This does not threaten the pyramid of traditional film production; rather, it can be evaluated as advancing the democratization of expression. Diverse voices reaching society through moving images is a sign of cultural maturity.",
      "In conclusion, Japanese cinema stands between the legacy of the past and the innovation of the future, facing many challenges. However, each of these is at once a crisis and an opportunity for new expression. What is important is to maintain the value of the venue called the cinema while possessing the flexibility to dialogue with audiences of the digital age. As long as Japanese cinema does not lose its distinctive perspective that it can proudly present to the world, its future can be said to be by no means dark. The power to spin narratives is this country's certain cultural capital."
    ],
    questions: [
      {
        q: "According to the passage, what legacy do independent directors like Kore-eda and Kawase inherit from the golden age?",
        choices: ["A focus on commercial success above all else", "A commitment to digging into the human interior over commercial success", "A strict studio-system hierarchy", "A rejection of international film festivals"],
        answerIndex: 1,
        explanation: "Their works prioritize 人間の内面を掘り下げること over commercial success — inheriting the golden age's lineage."
      },
      {
        q: "What dark reality does the passage mention behind the success of Japanese animation?",
        choices: ["Lack of international recognition", "Harsh labor conditions and low pay for creators", "A shortage of animation schools", "Government censorship of content"],
        answerIndex: 1,
        explanation: "Behind the works lies 制作者の疲弊 — 労働環境の過酷さと報酬の低さ have long been pointed out as serious problems."
      },
      {
        q: "What dilemma does globalization present to Japanese cinema?",
        choices: ["Pandering to global themes risks losing distinctiveness, while closing off domestically forfeits international recognition", "All Japanese films must be dubbed into English by law", "Foreign audiences refuse all Japanese content", "Animation cannot be exported for legal reasons"],
        answerIndex: 0,
        explanation: "The passage describes the ジレンマ: pandering to global themes risks losing distinctiveness, but closing off to domestic themes forfeits international recognition."
      },
      {
        q: "How does the passage evaluate smartphone-based filmmaking by young creators?",
        choices: ["As a threat to be suppressed", "As advancing the democratization of expression and a sign of cultural maturity", "As illegal under Japanese copyright law", "As a passing fad with no cultural value"],
        answerIndex: 1,
        explanation: "The text evaluates it not as a threat to the pyramid but as 表現の民主化を進めるもの — diverse voices reaching society signal cultural maturity."
      },
      {
        q: "Which N2 grammar point appears in '日本映画が世界に誇れる独自の視点を失わない限り'?",
        choices: ["〜限り (as long as / provided that)", "〜以上", "〜どころか", "〜かねない"],
        answerIndex: 0,
        explanation: "〜限り here means 'as long as' — as long as Japanese cinema does not lose its distinctive perspective, its future is not dark."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-48 — A story about an environmental activist
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-48",
    title: "里山[さとやま]を守[まも]り続[つづ]ける一人[ひとり]の環境[かんきょう]活動家[かつどうか]",
    titleReading: "さとやまをまもりつづけるひとりのかんきょうかつどうか",
    level: "N2",
    summary: "The story of Sora, who abandoned a corporate career to restore his hometown's satoyama forest, faced skepticism from villagers and logistical hardship, and eventually built a multi-generational conservation network that influenced regional policy.",
    estMinutes: 10,
    tags: ["biography", "environment", "satoyama", "activism"],
    body: [
      "颯太[そうた]が東京[とうきょう]のIT[あいてぃー]企業[きぎょう]を辞[や]めたのは、三十[さんじゅう]歳[さい]の秋[あき]であった。理由[りゆう]を聞[き]かれた彼[かれ]は、故郵[こきょう]の山[やま]を枯[か]らしたくないかった、とだけ答[こた]えた。彼[かれ]の故郎[こきょう]は九州[きゅうしゅう]の山間[さんかん]部[ぶ]に位置[いち]する小[ちい]さな集落[しゅうらく]で、かつては里山[さとやま]と呼[よ]ばれる豊[ゆた]かな生態[せいたい]系[けい]が広[ひろ]がっていた。しかし、過疎化[かそか]と高齢化[こうれいか]が進[すす]み、手[て]入[い]れされなくなった山林[さんりん]は荒廃[こうはい]し、生き物[いきもの]の声[こえ]は消[き]えつつあった。彼[かれ]は、このままでは自分[じぶん]の原風景[げんふうけい]が消[き]えると痛感[つうかん]したのである。",
      "帰郷[ききょう]した彼[かれ]を待[ま]っていたのは、温[あたた]かい歓迎[かんげい]ではなく、懐疑[かいぎ]の目線[めせん]であった。村[むら]の老人[ろうじん]たちは、都会[とかい]で中途半端[ちゅうとはんぱ]な生活[せいかつ]を送[おく]ってきた若者[わかもの]が何[なに]をできるのかと怪訝[けげん]な顔[かお]をした。親[おや]でさえ、せっかく育[そだ]てた息子[むすこ]が定職[ていしょく]を捨[す]てて帰[かえ]ってきたことに動揺[どうよう]を隠[かく]せなかった。彼[かれ]はそうした反応[はんのう]に言葉[ことば]で反論[はんろん]するのではなく、毎朝[まいあさ]暗[くら]いうちから山[やま]に入[はい]り、下草[したくさ]刈[か]りと間伐[かんばつ]を続[つづ]けた。三[さん]か月[かげつ]もすると、彼[かれ]の手[て]入[い]れされた区画[くかく]だけ、陽[ひ]当[あ]たりが明[あか]るく変[か]わっていることが目[め]に見[み]えて分[わ]かるようになった。",
      "彼[かれ]が取[と]り組[く]んだのは、単[たん]なる山林[さんりん]の手[て]入[い]れにとどまらなかった。里山[さとやま]は、人間[にんげん]の介入[かいにゅう]と自然[しぜん]の力[ちから]が均衡[きんこう]してこそ成[な]り立[た]つ生態[せいたい]系[けい]である。放置[ほうち]すれば森[もり]は荒[あ]れ、過剰[かじょう]に開発[かいはつ]すれば生態[せいたい]系[けい]が壊[こわ]れる。彼[かれ]は、適度[てきど]な伐採[ばっさい]と植林[しょくりん]、草地[くさち]の維持[いじ]を組[く]み合[あ]わせた管理[かんり]計画[けいかく]を立[た]ち上[あ]げた。専門[せんもん]家[か]の助言[じょげん]を受[う]け入[い]れつつ、地元[じもと]の知恵[ちえ]も活用[かつよう]するというハイブリッド[はいぶりっど]な方法論[ほうほうろん]を取[と]った。次第[しだい]に、彼[かれ]の活動[かつどう]に関心[かんしん]を示[しめ]す村人[むらびと]も現[あらわ]れ始[はじ]めた。",
      "転機[てんき]となったのは、小学校[しょうがっこう]の総合[そうごう]学習[がくしゅう]の授業[じゅぎょう]を頼[たの]まれたことである。彼[かれ]は子[こ]どもたちを山[やま]に連[つ]れ出[だ]し、生き物[いきもの]の観察[かんさつ]と木[き]の伐採[ばっさい]を体験[たいけん]させた。子[こ]どもたちは、薪[まき]を割[わ]る体験[たいけん]に目[め]を輝[かがや]かせ、カブト[かぶと]ムシ[むし]の幼虫[ようちゅう]を発見[はっけん]して歓声[かんせい]を上[あ]げた。その様子[ようす]を見[み]た親[おや]たちが、彼[かれ]の活動[かつどう]に協力[きょうりょく]し始[はじ]めた。彼[かれ]は、変化[へんか]を強制[きょうせい]するのではなく、共感[きょうかん]を通[つう]じて巻[ま]き込[こ]むという手法[しゅほう]を体得[たいとく]した。これが彼[かれ]の活動[かつどう]を支[ささ]える大[おお]きな原則[げんそく]となった。",
      "五年[ごねん]が経[た]つ頃[ころ]には、彼[かれ]の活動[かつどう]はNPO法人[えぬぴーおーほうじん]として組[く]織[しょく]化[か]され、周辺[しゅうへん]の集落[しゅうらく]にもネットワーク[ねっとわーく]が広[ひろ]がった。彼[かれ]が仕掛[しか]けた里山[さとやま]再生[さいせい]の取[と]り組[く]みは、県[けん]の環境[かんきょう]政策[せいさく]にも影響[えいきょう]を与[あた]えるようになった。自治体[じちたい]は彼[かれ]の方法論[ほうほうろん]を参考[さんこう]に、補助金[ほじょきん]制度[せいど]を見直[みなお]し、所有[しょゆう]者[しゃ]不明[ふめい]土地[とち]の管理[かんり]の枠組[わくぐ]みを整備[せいび]し始[はじ]めた。一[ひと]人の若者[わかもの]の行動[こうどう]が、地域[ちいき]の制度[せいど]を動[うご]かすまでに至[いた]ったのである。",
      "もっとも、活動[かつどう]には試練[しれん]も絶[た]えなかった。資金[しきん]不足[ぶそく]は常[つね]に付き[つき]まとい、補助金[ほじょきん]への依存[いぞん]が高[たか]まれば独自[どくじ]性[せい]が揺[ゆ]れる。また、山林[さんりん]の所有[しょゆう]権[けん]の複雑[ふくざつ]さも障壁[しょうへき]であった。所有[しょゆう]者[しゃ]が不明[ふめい]あるいは多数[たすう]にわたる土地[とち]では、意思決定[いしけってい]に時間[じかん]がかかる。颯太[そうた]は、完璧[かんぺき]な解決[かいけつ]を求[もと]めず、可能[かのう]な範囲[はんい]で少[すこ]しずつ前[まえ]に進[すす]むことを選[えら]んだ。急[いそ]がば回[まわ]れという言葉[ことば]を、彼[かれ]は身[み]をもって実践[じっせん]している。",
      "現在[げんざい]、颯太[そうた]は次[つぎ]の世代[せだい]に活動[かつどう]を継承[けいしょう]する仕組[しく]みを作[つく]ることに力[ちから]を入[い]れている。彼[かれ]は、自分[じぶん]一人[ひとり]の力[ちから]には限界[げんかい]があることを痛[いた]いほど知[し]っている。後継者[こうけいしゃ]を育成[いくせい]し、地域[ちいき]の知恵[ちえ]を記録[きろく]し、制度[せいど]を残[のこ]すことこそが、真[しん]の保全[ほぜん]に繋[つな]がると考[かんが]えている。彼[かれ]の里山[さとやま]は、かつての豊[ゆた]かさを取[と]り戻[もど]しつつある。生き物[いきもの]の声[こえ]が、少[すこ]しずつ戻[もど]ってきた。その変化[へんか]を彼[かれ]は、誇[ほこ]りを持[も]って見守[みまも]り続[つづ]けている。"
    ],
    translation: [
      "Sota quit his job at a Tokyo IT company in the autumn when he was thirty. When asked the reason, he only answered that he did not want to let the mountains of his hometown die. His hometown is a small hamlet in the mountains of Kyushu, where a rich ecosystem called satoyama once spread. However, with the progression of depopulation and aging, the forests that were no longer maintained fell into ruin, and the voices of living creatures were fading. He felt keenly that, at this rate, his primal landscape would disappear.",
      "What awaited him upon his return was not a warm welcome but skeptical glances. The village elders made incredulous faces, wondering what a young man who had lived a half-hearted life in the city could possibly do. Even his parents could not hide their agitation that the son they had painstakingly raised had abandoned his regular job and come home. Rather than refute those reactions with words, every morning he entered the mountains before dawn and continued cutting underbrush and thinning trees. After three months, it became visibly clear that only the plot he had maintained had grown brighter with sunlight.",
      "What he tackled went beyond mere forest maintenance. Satoyama is an ecosystem that exists only when human intervention and natural forces are in balance. If left unattended, the forest deteriorates; if excessively developed, the ecosystem breaks. He launched a management plan combining moderate logging and replanting, and maintenance of grasslands. He took a hybrid methodology that incorporated the advice of experts while also utilizing local wisdom. Gradually, villagers began to appear who showed interest in his activities.",
      "The turning point came when he was asked to teach a comprehensive learning class at an elementary school. He took the children into the mountains and had them observe living creatures and experience tree felling. The children's eyes shone at splitting firewood, and they cheered upon discovering rhinoceros beetle larvae. Seeing this, the parents began to cooperate with his activities. He acquired the technique of involving people through empathy rather than forcing change. This became a major principle supporting his activities.",
      "By around five years, his activities had been organized as an NPO corporation, and the network spread to neighboring hamlets. His satoyama restoration initiative came to influence the prefecture's environmental policy. The local government used his methodology as a reference, began revising subsidy systems, and prepared a framework for managing land with unknown owners. The action of a single young man came to move the regional institutions.",
      "Needless to say, trials never ceased for his activities. Funding shortages always followed, and growing dependence on subsidies threatened his uniqueness. In addition, the complexity of forest ownership was a barrier. On land where owners were unknown or numerous, decisions took time. Sota chose not to seek perfect solutions but to advance little by little within the possible range. The phrase 'if in a hurry, go around' he embodies through his own practice.",
      "Today, Sota focuses on creating a framework to pass his activities on to the next generation. He knows painfully well the limits of his own power. He believes that nurturing successors, recording local wisdom, and leaving institutions behind are what truly lead to genuine conservation. His satoyama is regaining its former richness. The voices of living creatures have gradually returned. He continues to watch over that change with pride."
    ],
    questions: [
      {
        q: "Why did Sota quit his Tokyo IT job at age thirty?",
        choices: ["He was fired for poor performance", "He did not want to let the mountains of his hometown die", "His company relocated him against his will", "He wanted a higher-paying job abroad"],
        answerIndex: 1,
        explanation: "He answered that 故郷の山を枯らしたくなかった — he did not want to let the mountains of his hometown die."
      },
      {
        q: "How did Sora respond to the villagers' initial skepticism?",
        choices: ["He organized protest marches against them", "He argued with them in village meetings", "He silently entered the mountains each morning to do underbrush clearing and thinning", "He filed a lawsuit against the village council"],
        answerIndex: 2,
        explanation: "Rather than 言葉で反論, he 毎朝暗いうちから山に入り、下草刈りと間伐を続けた — he acted instead of arguing."
      },
      {
        q: "What did Sora learn from teaching the elementary school class?",
        choices: ["That children cannot be taught outdoors", "That forcing change is more effective than persuading", "That involving people through empathy rather than coercion is the way", "That experts alone can solve the problem"],
        answerIndex: 2,
        explanation: "Through the children's experience and the parents' response, he 体得 the technique of 共感を通じて巻き込む rather than 変化を強制する."
      },
      {
        q: "How did Sora's activities influence the prefecture's policy?",
        choices: ["The prefecture banned all forestry", "The prefecture used his methodology to revise subsidies and manage unknown-owner land", "The prefecture nationalized all satoyama forests", "The prefecture ignored him entirely"],
        answerIndex: 1,
        explanation: "The local government 参考にした his methodology, revising 補助金制度 and preparing a framework for 所有者不明土地の管理."
      },
      {
        q: "Which N2 grammar point appears in '補助金への依存が高まれば独自性が揺れる'?",
        choices: ["〜ば (if / when condition)", "〜以上", "〜ながら", "〜つつも"],
        answerIndex: 0,
        explanation: "〜ば here marks a conditional: 'if dependence on subsidies grows, uniqueness wavers.'"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-49 — The Japanese welfare system
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-49",
    title: "日本[にほん]の福祉[ふくし]制度[せいど]が抱[かか]える構造[こうぞう]的[てき]矛盾[むじゅん]",
    titleReading: "にほんのふくしせいどがかかえるこうぞうてきむじゅん",
    level: "N2",
    summary: "An analysis of Japan's welfare system: the Universal Health Insurance and Pension achievements, the strain of demographic aging on long-term care, the working-poor and child-poverty gaps, and the unresolved tension between universality and selectivity.",
    estMinutes: 12,
    tags: ["welfare", "policy", "aging", "inequality"],
    body: [
      "日本[にほん]の福祉[ふくし]制度[せいど]は、高度[こうど]経済[けいざい]成長[せいちょう]期[き]に構築[こうちく]された全民[ぜんみん]皆[かい]保険[ほけん]と国民[こくみん]年金[ねんきん]を骨格[こっかく]としている。これらは、所得[しょとく]の高低[こうてい]にかかわらず、すべての国民[こくみん]に医療[いりょう]と老後[ろうご]の保障[ほしょう]を提供[ていきょう]する普遍的[ふへんてき]な仕組[しく]みであった。当時[とうじ]は若[わか]い人口[じんこう]が多[おお]く、社会保障[しゃかいほしょう]の給付[きゅうふ]よりも負担[ふたん]が上回[うわまわ]る構造[こうぞう]であったため、制度[せいど]の維持[いじ]は容易[ようい]であった。しかし、少子[しょうし]高齢化[こうれいか]の進行[しんこう]は、この前提[ぜんてい]そのものを覆[くつがえ]すことになる。",
      "二[に]〇[じゅう]〇[ぜろ]〇[ぜろ]年[ねん]に導入[どうにゅう]された介護[かいご]保険[ほけん]制度[せいど]は、高齢者[こうれいしゃ]の介護[かいご]を家族[かぞく]の負担[ふたん]から社会[しゃかい]全体[ぜんたい]で支[ささ]える仕組[しく]みとして画期的[かっきてき]であった。しかし、制度[せいど]の成熟[せいじゅく]とともに、給付[きゅうふ]費[ひ]は想定[そうてい]を遥[はる]かに超[こ]えて増大[ぞうだい]した。要介護[ようかいご]認定[にんてい]者[しゃ]の増加[ぞうか]、介護[かいご]施設[しせつ]の人手[ひとで]不足[ぶそく]、そして介護[かいご]離職[りしょく]という問題[もんだい]が複合[ふくごう]し、現場[げんば]は限界[げんかい]に近[ちか]い状態[じょうたい]にある。介護[かいご]保険[ほけん]料[りょう]の引[ひ]き上[あ]げも度々[たびたび]行[おこな]われているが、それでも財政[ざいせい]の持続性[じぞくせい]は保証[ほしょう]されていない。これでは、未来[みらい]の世代[せだい]に負債[ふさい]を先送[さきおく]りするに過[す]ぎない。",
      "他方[たほう]、現役[げんえき]世代[せだい]の貧困[ひんこん]も深刻[しんこく]化[か]している。非正規[ひせいき]雇用[こよう]の拡大[かくだい]に伴[ともな]い、働[はたら]いても生活[せいかつ]保護[ほご]水準[すいじゅん]に満[み]たないワーキング[わーきんぐ]プア[ぷあ]が増加[ぞうか]した。彼[かれ]らの多くは、社会[しゃかい]保険[ほけん]に加入[かにゅう]しておらず、将来[しょうらい]の年金[ねんきん]受給[じゅきゅう]も見込[みこ]めない。この状況[じょうきょう]を放置[ほうち]すれば、彼[かれ]らが高齢期[こうれいき]に入る数十年[すうじゅうねん]後[ご]、生活[せいかつ]保護[ほご]受給[じゅきゅう]者が爆発的[ばくはつてき]に増大[ぞうだい]する事態[じたい]が予想[よそう]される。つまり、現在[げんざい]の雇用[こよう]問題[もんだい]は、未来[みらい]の福祉[ふくし]財政[ざいせい]の定時[ていじ]爆弾[ばくだん]と化[か]しているのである。",
      "子どもの貧困[ひんこん]も看過[かんか]できない問題[もんだい]である。相対的[そうたいてき]貧困[ひんこん]率[りつ]は先進[せんしん]国[こく]の中[なか]で高[たか]い水準[すいじゅん]にあり、ひとり親[おや]家庭[かてい]の貧困[ひんこん]率[りつ]は特に深刻[しんこく]である。貧困[ひんこん]の連鎖[れんさ]を断[た]ち切[き]るための教育[きょういく]支援[しえん]は、限定的[げんていてき]な予算[よさん]の制約[せいやく]もあり十分[じゅうぶん]とは言[い]えない。子ども食堂[しょくどう]や学習[がくしゅう]支援[しえん]事業[じぎょう]といった民間[みんかん]の活動[かつどう]が補完[ほかん]的[てき]役割[やくわり]を果[は]たしているが、制度[せいど]的[てき]対応[たいおう]に比[くら]べれば焼け石[やけいし]に水[みず]である。次世代[じせだい]の社会[しゃかい]基盤[きばん]を損[そこ]なう行為[こうい]を、放置[ほうち]し続けることはできない。",
      "日本[にほん]の福祉[ふくし]制度[せいど]が抱[かか]える本質的[ほんしつてき]な矛盾[むじゅん]は、普遍的[ふへんてき]給付[きゅうふ]と選択的[せんたくてき]給付[きゅうふ]の対立[たいりつ]にある。普遍主義[ふへんしゅぎ]は手続き[てつづき]が簡素[かんそ]で、受給[じゅきゅう]の恥辱[ちじょく]を回避[かいひ]できる反面[はんめん]、高所得[こうしょとく]者[しゃ]にも給付[きゅうふ]が及[およ]ぶため財政[ざいせい]負担[ふたん]が大[おお]きい。選択主義[せんたくしゅぎ]は財政[ざいせい]効率[こうりつ]に優[すぐ]れるが、審査[しんさ]の厳格[げんかく]化[か]が申請[しんせい]を躊躇[ちゅうちゅ]させ、結果[けっか]として貧困[ひんこん]層[そう]を取り残[のこ]す事態[じたい]を生む。この二[ふた]つの理念[りねん]をどう統合[とうごう]するかが、制度[せいど]改革[かいかく]の中核[ちゅうかく]課題[かだい]である。",
      "もう一[ひと]つの論点[ろんてん]は、社会[しゃかい]保障[ほしょう]費[ひ]の調達[ちょうたつ]方法[ほうほう]である。現[げん]在[ざい]は、保険[ほけん]料[りょう]、税[ぜい]、利用[りよう]料[りょう]の三[みっ]本[ぽん]柱[はしら]で構成[こうせい]されているが、消費[しょうひ]税[ぜい]の社会[しゃかい]保障[ほしょう]目的[もくてき]化[か]をめぐる議論[ぎろん]は収束[しゅうそく]していない。消費[しょうひ]税[ぜい]は逆進性[ぎゃくしんせい]が指摘[してき]されるため、低所得[ていしょとく]者[しゃ]への負担[ふたん]が相対的[そうたいてき]に重[おも]い。これを補填[ほてん]するための給付[きゅうふ]金[きん]制度[せいど]も導入[どうにゅう]されたが、手続き[てつづき]の複雑[ふくざつ]さから受給[じゅきゅう]率[りつ]が低[ひく]いという問題[もんだい]がある。税[ぜい]と保険[ほけん]料[りょう]の最適[さいてき]な組[く]み合[あ]わせを模索[もさく]する必要[ひつよう]がある。",
      "結論[けつろん]として、日本[にほん]の福祉[ふくし]制度[せいど]は、過去[かこ]の成功[せいこう]体験[たいけん]の延長線上[えんちょうせんじょう]に未来[みらい]を見出すことはできない。人口[じんこう]構造[こうぞう]の変化[へんか]という不可逆[ふかぎゃく]な現実[げんじつ]と向[む]き合[あ]い、制度[せいど]そのものの設計[せっけい]を問[と]い直[なお]す時[とき]に来[き]ている。高齢者[こうれいしゃ]のみならず、子どもと現役[げんえき]世代[せだい]にも目[め]を配[くば]る総合[そうごう]的[てき]な再設計[さいせっけい]が求[もと]められる。それは、何[なに]を優先[ゆうせん]し、何[なに]を犠牲[ぎせい]にするかという政治的[せいじてき]選択[せんたく]の問題[もんだい]でもある。私[わたし]たちが望[のぞ]む社会[しゃかい]の姿[すがた]を明確[めいかく]にし、それを支[ささ]える制度[せいど]を合意[ごうい]形成[けいせい]することが、今[いま]の最大[さいだい]の課題[かだい]である。"
    ],
    translation: [
      "Japan's welfare system has as its framework the universal health insurance and national pension constructed during the high-growth era. These are universal mechanisms that provide medical care and old-age security to all citizens regardless of income level. At the time, the young population was large, and benefits were outweighed by contributions, so maintaining the system was easy. However, the progression of the declining birthrate and aging was to overturn that very premise.",
      "The long-term care insurance system introduced in 2000 was epoch-making as a mechanism that supported the care of the elderly by society as a whole rather than as a family burden. However, as the system matured, benefit costs increased far beyond expectations. The increase in certified care needs, the labor shortage in care facilities, and the issue of leaving work to provide care compounded, and the front lines are in a state close to the limit. Long-term care insurance premiums have been raised repeatedly, but even so, fiscal sustainability is not guaranteed. This is no more than postponing debt to future generations.",
      "On the other hand, poverty among the working generation has also become serious. With the expansion of non-regular employment, the number of working poor whose income does not reach the livelihood-protection level even while working has increased. Many of them are not enrolled in social insurance and cannot expect future pension receipt. If this situation is left unaddressed, a situation in which recipients of livelihood protection will increase explosively in several decades when they enter old age is foreseeable. In other words, the current employment problem has become a ticking time bomb for future welfare finances.",
      "Child poverty is also a problem that cannot be overlooked. The relative poverty rate is at a high level among advanced nations, and the poverty rate of single-parent households is particularly serious. Educational support to break the chain of poverty cannot be said to be sufficient, partly due to the constraints of limited budgets. Private activities such as children's cafeterias and study support projects play a complementary role, but compared with institutional response they are a drop in the ocean. Acts that undermine the social foundation of the next generation cannot continue to be left unaddressed.",
      "The essential contradiction in Japan's welfare system lies in the conflict between universal benefits and selective benefits. Universalism has simple procedures and can avoid the shame of receiving benefits, but on the other hand, because benefits reach high-income earners as well, the fiscal burden is large. Selectivism excels in fiscal efficiency, but stricter screening makes application hesitant, and as a result creates situations that leave the poor behind. How to integrate these two principles is the core challenge of institutional reform.",
      "Another point of debate is the method of financing social security expenditures. Currently it is structured on three pillars — insurance premiums, taxes, and usage fees — but debate over designating the consumption tax for social security purposes has not converged. Because the consumption tax is pointed out to be regressive, the burden on low-income earners is relatively heavy. A benefit-grant system was introduced to compensate for this, but there is the problem that the take-up rate is low due to procedural complexity. There is a need to explore the optimal combination of taxes and insurance premiums.",
      "In conclusion, Japan's welfare system cannot find its future on the extension of past success experiences. The time has come to face the irreversible reality of demographic structural change and to question the design of the system itself. A comprehensive redesign that attends not only to the elderly but also to children and the working generation is required. This is also a matter of political choice about what to prioritize and what to sacrifice. Clarifying the shape of the society we desire and forming agreement on a system that supports it is now the greatest challenge."
    ],
    questions: [
      {
        q: "Why was Japan's welfare system easy to maintain during the high-growth era?",
        choices: ["Because the elderly population was much larger than the young", "Because the young population was large and contributions outweighed benefits", "Because there were no social insurance programs at all", "Because the government did not pay any benefits"],
        answerIndex: 1,
        explanation: "The text says 若い人口が多く、社会保障の給付よりも負担が上回る構造であった — contributions outweighed benefits due to the large young population."
      },
      {
        q: "What compounded problems are pushing the long-term care system near its limits?",
        choices: ["Too many young caregivers and low certification rates", "Increasing certified care needs, facility labor shortages, and care-driven job resignation", "Excessive funding surpluses and overstaffing", "Decreasing numbers of elderly people"],
        answerIndex: 1,
        explanation: "The 複合 problems are 要介護認定者の増加, 介護施設の人手不足, and 介護離職 — driving the system near its limit."
      },
      {
        q: "How does the passage characterize the current employment problem for future welfare finances?",
        choices: ["As already solved by recent reforms", "As a ticking time bomb for future welfare finances", "As unrelated to welfare policy", "As beneficial because it reduces pension payouts"],
        answerIndex: 1,
        explanation: "The non-regular-employed working poor will become livelihood-protection recipients in decades — a 定時爆弾 for future welfare finances."
      },
      {
        q: "What core challenge does the passage identify regarding universal versus selective benefits?",
        choices: ["Universal benefits are always superior and selective benefits should be abolished", "Selective benefits are always superior and universal benefits should be abolished", "How to integrate the two principles given each has trade-offs", "Both should be eliminated entirely"],
        answerIndex: 2,
        explanation: "Universal benefits have large fiscal burdens while selective benefits leave the poor behind — どう統合するか is the core 中核課題."
      },
      {
        q: "Which N2 grammar point appears in '未来の世代に負債を先送りするに過ぎない'?",
        choices: ["〜に違いない", "〜に過ぎない (merely / nothing more than)", "〜に先立って", "〜にしても"],
        answerIndex: 1,
        explanation: "〜に過ぎない means 'merely / nothing more than' — here, raising premiums is merely postponing debt to future generations."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-50 — A story about a long-distance relationship
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-50",
    title: "東京[とうきょう]と札幌[さっぽろ]を結[むす]んだ遠距離[えんきょり]恋愛[れんあい]の五年[ごねん]",
    titleReading: "とうきょうとさっぽろをむすんだえんきょりれんあいのごねん",
    level: "N2",
    summary: "The story of Haruto and Mei, whose five-year long-distance relationship between Tokyo and Sapporo survived missed messages and career pressure, evolved through small rituals of contact, and ended in marriage built on mutual patience.",
    estMinutes: 9,
    tags: ["biography", "romance", "long-distance", "communication"],
    body: [
      "遥人[はると]と芽生[めい]は、大学[だいがく]のサークル[さーくるる]で知[し]り合[あ]った。共[とも]に法学[ほうがく]を専攻[せんこう]し、将来[しょうらい]は弁護士[べんごし]になりたいという共通[きょうつう]の夢[ゆめ]を抱[いだ]いていた。卒業[そつぎょう]後[ご]、遥人[はると]は東京[とうきょう]の法律[ほうりつ]事務所[じむしょ]に就職[しゅうしょく]し、芽生[めい]は札幌[さっぽろ]の実家[じっか]を継[つ]ぐことになった。彼女[かのじょ]の父[ちち]が地域[ちいき]密着[みっちゃく]型[がた]の事務所[じむしょ]を営[いとな]んでおり、後継者[こうけいしゃ]として帰郷[ききょう]するよう求[もと]められたのである。二人[ふたり]は別[わか]れたくはなかったが、互[たが]いの夢[ゆめ]を尊重[そんちょう]し合[あ]うことを選[えら]んだ。こうして、一千[せん]二百[にひゃく]キロ[きろ]を隔[へだ]てた遠距離[えんきょり]恋愛[れんあい]が始[はじ]まった。",
      "最初[さいしょ]の一年[いちねん]は、新[あたら]しい環境[かんきょう]への適応[てきおう]に追[お]われた。遥人[はると]は東京[とうきょう]の狭[せま]いアパート[あぱーと]で、朝[あさ]早[はや]くから夜[よる]遅[おそ]くまで仕事[しごと]に明[あ]け暮[く]れた。芽生[めい]は父[ちち]の指導[しどう]の下[もと]で業務[ぎょうむ]を学[まな]びつつ、地域[ちいき]の住民[じゅうみん]との信頼[しんらい]関係[かんけい]を築[きず]いていった。二人[ふたり]は毎夜[まいや]、電話[でんわ]で一日[いちにち]の出来事[できごと]を共有[きょうゆう]し合[あ]った。しかし次第[しだい]に、仕事[しごと]が忙[いそが]しくなるにつれて会話[かいわ]は短[みじか]くなり、週末[しゅうまつ]に会[あ]える予定[よてい]もキャンセル[きゃんせる]されることが増[ふ]えた。不安[ふあん]が、二人[ふたり]の間[あいだ]に静[しず]かに広[ひろ]がり始[はじ]めた。",
      "二[に]年[ねん]目[め]の冬[ふゆ]、芽生[めい]は遥人[はると]のメール[めーる]の返信[へんしん]が遅[おく]いことに苛立[いらだ]ちを覚[おぼ]えた。他[ほか]に好[す]きな人[ひと]ができたのではないかと疑[うたが]い、深夜[しんや]に長[なが]文[ぶん]のメッセージ[めっせーじ]を送[おく]った。遥人[はると]は、ただ仕事[しごと]に追[お]われていただけであると弁解[べんかい]したが、芽生[めい]の不安[ふあん]は消[き]えなかった。二人[ふたり]は電話[でんわ]で激[はげ]しく言[い]い争[あらそ]った。翌日[よくじつ]、遥人[はると]は予定[よてい]を急遽[きゅうきょ]変更[へんこう]し、新幹線[しんかんせん]で札幌[さっぽろ]に向[む]かった。彼[かれ]は、言葉[ことば]よりも行動[こうどう]で誠意[せいい]を示[しめ]す必要[ひつよう]があると考[かんが]えたのである。芽生[めい]は駅[えき]で彼[かれ]を迎[むか]え、その夜[よる]、二人[ふたり]は久[ひさ]しぶりに長[なが]く話[はな]し合[あ]った。",
      "この出来事[できごと]を契機[けいき]に、二人[ふたり]は関係[かんけい]の維持[いじ]方法[ほうほう]を見直[みなお]した。彼[かれ]らが導入[どうにゅう]したのは、決[き]まった時刻[じこく]に短[みじか]いメッセージ[めっせーじ]を送[おく]り合[あ]うという習慣[しゅうかん]であった。朝[あさ]の出社[しゅっしゃ]前[まえ]と夜[よる]の就寝[しゅうしん]前[まえ]、二[ふた]回[かい]の連絡[れんらく]を欠[か]かさないことを誓[ちか]い合[あ]った。内容[ないよう]は取[と]るに足[た]りない日常[にちじょう]の出来事[できごと]であっても、継続[けいぞく]することで安心[あんしん]感[かん]が生[しょう]まれた。また、月[つき]に一度[いちど]は必[かなら]ず会[あ]うことを決[き]め、会[あ]えない月[つき]はビデオ[びでお]通話[つうわ]で一[いち]時間[じかん]以上[いじょう]話[はな]すことを約束[やくそく]した。小[ちい]さな儀式[ぎしき]の積[つ]み重[かさ]ねが、千[せん]キロ[きろ]の距離[きょり]を縮[ちぢ]めたのである。",
      "三年[さんねん]目[め]、芽生[めい]の父[ちち]が急病[きゅうびょう]で倒[たお]れた。事務所[じむしょ]の運営[うんえい]は芽生[めい]の肩[かた]にのしかかり、彼女[かのじょ]は東京[とうきょう]に行[い]く暇[いとま]がなくなった。遥人[はると]は、彼女[かのじょ]を支[ささ]えるために月[つき]に二[に]回[かい]、札幌[さっぽろ]に通[かよ]うようになった。彼[かれ]は仕事[しごと]の合間[あいま]を縫[ぬ]い、飛行機[ひこうき]で片道[かたみち]二[に]時間[じかん]半[はん]の旅[たび]を続[つづ]けた。疲労[ひろう]は蓄[たくわ]まったが、彼[かれ]は芽生[めい]のそばにいることが自分[じぶん]の務[つと]めであると感[かん]じていた。芽生[めい]は、彼[かれ]の献身[けんしん]に深[ふか]く感[かん]じ入[い]り、二人[ふたり]の絆[きずな]はかつてないほど強[つよ]くなった。",
      "五年[ごねん]目[め]、遥人[はると]は事務所[じむしょ]に転居[てんきょ]の相談[そうだん]を持ち[もち]込[こ]んだ。彼[かれ]は札幌[さっぽろ]の法律[ほうりつ]事務所[じむしょ]に転職[てんしょく]し、芽生[めい]と共[とも]に事務所[じむしょ]を継[つ]ぐことを決意[けつい]したのである。東京[とうきょう]でのキャリア[きゃりあ]を捨[す]てる決断[けつだん]は容易[ようい]ではなかったが、芽生[めい]との未来[みらい]を優先[ゆうせん]した。彼[かれ]は同月[どうげつ]に札幌[さっぽろ]で芽生[めい]に求婚[きゅうこん]した。彼[かれ]は、距離[きょり]に負[ま]けずに待[ま]ってくれた彼女[かのじょ]に感謝[かんしゃ]の言葉[ことば]を伝[つた]えた。芽生[めい]は泣[な]きながら頷[うなず]いた。",
      "二人[ふたり]の遠距離[えんきょり]恋愛[れんあい]は、五年[ごねん]の月日[つきひ]を経[へ]て結婚[けっこん]という形[かた]で実[み]を結[むす]んだ。彼[かれ]らの経験[けいけん]は、距離[きょり]が愛[あい]を削[けず]ることも、逆[ぎゃく]に磨[みが]くこともできるということを示[しめ]している。重要[じゅうよう]なのは、互[たが]いを信頼[しんらい]し、小[ちい]さな努力[どりょく]を続[つづ]けることである。二人[ふたり]は今[いま]、札幌[さっぽろ]の小[ちい]さな事務所[じむしょ]で共[とも]に働[はたら]き、新[あたら]しい生活[せいかつ]を始[はじ]めている。過去[かこ]の試練[しれん]は、彼[かれ]らの結[むす]びつきをより強固[きょうこ]なものにした。彼[かれ]らの物語[ものがたり]は、愛[あい]が距離[きょり]に勝[か]ち得[う]ることを証明[しょうめい]している。"
    ],
    translation: [
      "Haruto and Mei met at a university club. Both majored in law and shared the dream of becoming lawyers. After graduation, Haruto took a job at a law firm in Tokyo, while Mei was to succeed her family home in Sapporo. Her father ran a community-rooted firm and asked her to return as his successor. The two did not want to part, but they chose to respect each other's dreams. Thus began their long-distance relationship separated by 1,200 kilometers.",
      "For the first year, they were busy adapting to new environments. Haruto lived in a small apartment in Tokyo and worked from early morning to late at night. Mei learned the work under her father's guidance while building relationships of trust with local residents. Every night the two shared the day's events by phone. Gradually, however, as work grew busier, conversations grew shorter, and weekends when they were supposed to meet came to be canceled more often. Anxiety began quietly to spread between them.",
      "In the winter of the second year, Mei grew irritated at Haruto's slow email replies. Suspecting he might have found someone else, she sent a long message late at night. Haruto explained that he had merely been overwhelmed by work, but Mei's anxiety did not dissipate. The two argued fiercely over the phone. The next day, Haruto abruptly changed his plans and headed to Sapporo by Shinkansen. He felt he had to show sincerity through action rather than words. Mei met him at the station, and that night the two talked at length for the first time in a while.",
      "This event became the catalyst for them to review how they maintained their relationship. What they introduced was a habit of exchanging short messages at fixed times. They pledged never to miss two contacts — before leaving for work in the morning and before going to bed at night. Even if the content was about trivial daily events, continuity generated a sense of security. They also decided to meet at least once a month, and promised that on months they could not meet, they would talk for more than an hour via video call. The accumulation of small rituals shrank the distance of a thousand kilometers.",
      "In the third year, Mei's father collapsed from sudden illness. The management of the firm fell on Mei's shoulders, and she no longer had time to go to Tokyo. To support her, Haruto began traveling to Sapporo twice a month. He squeezed in time between work and continued a one-way trip of two and a half hours by plane. Fatigue accumulated, but he felt that being by Mei's side was his duty. Mei was deeply moved by his devotion, and the bond between them became stronger than ever.",
      "In the fifth year, Haruto brought up the topic of relocation with his firm. He had resolved to change jobs to a Sapporo law firm and to succeed the practice together with Mei. The decision to abandon his career in Tokyo was not easy, but he prioritized a future with Mei. The same month, he proposed to Mei in Sapporo. He conveyed words of gratitude to the woman who had waited without yielding to distance. Mei nodded in tears.",
      "Their long-distance relationship bore fruit in the form of marriage after five years. Their experience shows that distance can erode love, but it can also refine it. What matters is to trust each other and continue small efforts. The two now work together in a small firm in Sapporo and have begun a new life. Past trials have made their bond stronger. Their story proves that love can triumph over distance."
    ],
    questions: [
      {
        q: "Why did Mei return to Sapporo after graduation instead of staying in Tokyo with Haruto?",
        choices: ["Because she could not find a job in Tokyo", "Because her father asked her to succeed his community-rooted law firm", "Because she disliked Haruto's family", "Because Tokyo was too expensive"],
        answerIndex: 1,
        explanation: "Mei's father ran a 地域密着型の事務所 and asked her to 归郷する as his 後継者."
      },
      {
        q: "What event in the second year threatened to break the relationship?",
        choices: ["Haruto forgot Mei's birthday", "Mei suspected Haruto had found someone else due to slow email replies", "Mei's father forbade the relationship", "Haruto was transferred to a foreign country"],
        answerIndex: 1,
        explanation: "Mei grew 茸立 at Haruto's slow replies and suspected 他に好きな人ができた, leading to a fierce argument by phone."
      },
      {
        q: "What habit did they introduce to maintain their relationship after the second-year crisis?",
        choices: ["Meeting every weekend regardless of cost", "Exchanging short messages at fixed times — before leaving for work and before bed", "Stopping all communication to avoid conflict", "Hiring a mediator to manage their conversations"],
        answerIndex: 1,
        explanation: "They introduced 決まった時刻に短いメッセージを送り合う習慣, before 出社前 and 就寝前, plus monthly meetings and video calls."
      },
      {
        q: "How did Haruto respond when Mei's father fell ill in the third year?",
        choices: ["He ended the relationship to focus on his career", "He traveled to Sapporo twice a month to support her", "He asked Mei to move to Tokyo immediately", "He ignored the situation and continued as before"],
        answerIndex: 1,
        explanation: "Haruto began 月に二回、札幌に通う, squeezing work time, to support Mei — he felt being by her side was his 务め."
      },
      {
        q: "Which N2 grammar point appears in '距離が愛を削ることも、逆に磨くこともできるということを示している'?",
        choices: ["〜ことは〜 (doing X is / can be)", "〜どころか", "〜かねる", "〜にすぎない"],
        answerIndex: 0,
        explanation: "〜ことも〜こともできる indicates that two contrasting outcomes are both possible — here, distance can both erode and refine love."
      }
    ]
  }
];
