import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of consecutive kanji attaches as
// furigana to that whole run. Kana, katakana, digits, and punctuation have no
// brackets. titleReading is full kana with NO brackets. See types.ts & furigana.tsx.
// 10 N1-level short stories (sx-n1-01 .. sx-n1-10).
// N1 grammar targets: 〜たるもの, 〜ずにはいられない, 〜を余儀なくされる,
// 〜極まりない, 〜にほかならない, 〜ずにはおかない, 〜を禁じ得ない,
// 〜とはいえ, 〜たりとも, 〜と相まって, 〜にひきかえ, 〜をよそに,
// 〜に足る, 〜にたえる, 〜の至り, 〜の極み, 〜なくして, 〜ゆえ,
// 〜に忍びない, 〜に照らして, 〜にしろ〜にしろ, 〜たところで, 〜が早いか,
// 〜にして, 〜んがため(に), 〜ずくめ, 〜ともなると, 〜を踏まえて, 〜に過ぎない.

export const storiesN1A: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n1-01 — 哲学の小径 (A philosophical journey)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-01",
    title: "哲学[てつがく]の小径[こみち]",
    titleReading: "てつがくのこみち",
    level: "N1",
    summary: "A young seeker sets out on foot in pursuit of truth and discovers that the questioning itself, not any destination, is the philosophy he sought.",
    estMinutes: 7,
    tags: ["philosophy", "journey", "reflection"],
    body: [
      "若[わか]き日[ひ]の私[わたし]は、真理[しんり]を求[もと]めて旅立[たびだ]った。書[か]を閉[と]じ、足[あし]で歩[ある]くことでしか見[み]えぬものがあると信[しん]じていたからにほかならない。",
      "古[ふる]い寺院[じいん]の境内[けいだい]に立[た]つ老僧[ろうそう]は、私[わたし]の問[と]いに一句[いっく]を返[かえ]した。「歩[ある]く者[もの]たるもの、答[こた]えではなく問[と]いを背負[せお]うべし」と。",
      "その言葉[ことば]の重[おも]みを噛[か]み締[し]めるにつれ、当初[とうしょ]の焦[あせ]りは跡形[あとかた]もなく消[き]え去[さ]った。むしろ、問[と]いを手放[てばな]すまいとする執着[しゅうちゃく]こそが迷[まよ]いの根源[こんげん]であることに気[き]がついた。",
      "道[みち]は山[やま]を越[こ]え、荒野[こうや]を横切[よこぎ]った。時[とき]に嵐[あらし]に翻弄[ほんろう]され、宿[やど]を奪[うば]われ、飢餓[きが]に苛[さいな]まれることもあった。それでも、足[あし]を止[と]めることはできなかった。歩[ある]かずにはいられなかったのである。",
      "ある夜[よる]、焚火[たきび]のそばで出会[であ]った巡礼者[じゅんれいしゃ]は、疲労[ひろう]の色濃[いろこ]い顔[かお]でこう漏[も]らした。「聖地[せいち]に着[つ]いたとて、魂[たましい]は救[すく]われない」。その諦念[ていねん]は、私[わたし]には傲慢[ごうまん]極[きわ]まりないものに映[うつ]った。",
      "しかしその言葉[ことば]は、後日[こうじつ]私[わたし]の胸[むね]に深[ふか]く刺[さ]さることになる。目的地[もくてきち]という幻想[げんそう]にしがみつく私[わたし]自身[じしん]の浅[あさ]ましさを突[つ]きつけられた思[おも]いだった。",
      "三年[さんねん]が過[す]ぎた頃[ころ]、足[あし]はようやく海[うみ]に届[とど]いた。波[なみ]を見[み]つめる私[わたし]の中[なか]で、問[と]いと答[こた]えの境界[きょうかい]は溶[と]けていった。歩[ある]いた距離[きょり]そのものが、紛[まぎ]れもなく私[わたし]の哲学[てつがく]だった。",
      "とはいえ、旅[たび]はここで終[お]わるわけではない。足[あし]が動[うご]く限[かぎ]り、問[と]いは生[う]まれ続[つづ]ける。真理[しんり]とは到達点[とうたつてん]ではなく、歩[ある]き続[つづ]けるという行為[こうい]そのものにほかならないのだ。"
    ],
    translation: [
      "In my younger days, I set out on a journey in search of truth. It was precisely because I believed that some things could be seen only by closing my books and walking with my own feet.",
      "The old monk standing in the precincts of an ancient temple returned but a single line to my question: \"He who walks must bear questions, not answers.\"",
      "As I savored the weight of those words, my initial impatience vanished without a trace. I realized that the attachment to never letting go of a question was itself the root of my confusion.",
      "The path crossed mountains and cut through wastelands. At times I was tossed by storms, robbed of shelter, and tormented by hunger. Even so, I could not stop my feet. I could not help but walk.",
      "One night, by a campfire, I met a pilgrim who murmured, with exhaustion written large on his face, \"Even if I reach the holy site, my soul will not be saved.\" To me, that resignation appeared nothing but supremely arrogant.",
      "Yet those words would later pierce my heart deeply. It felt as though my own wretchedness — clinging to the illusion of a destination — had been laid bare.",
      "After three years had passed, my feet finally reached the sea. As I gazed at the waves, the boundary between question and answer dissolved within me. The distance I had walked was, unmistakably, my philosophy itself.",
      "That said, the journey does not end here. As long as my feet move, questions will keep being born. Truth is not a destination but the very act of continuing to walk."
    ],
    vocab: [
      { word: "哲学", reading: "てつがく", meaning: "philosophy" },
      { word: "真理", reading: "しんり", meaning: "truth" },
      { word: "旅立つ", reading: "たびだつ", meaning: "to set out on a journey" },
      { word: "老僧", reading: "ろうそう", meaning: "old monk" },
      { word: "境内", reading: "けいだい", meaning: "temple precincts" },
      { word: "執着", reading: "しゅうちゃく", meaning: "attachment" },
      { word: "根源", reading: "こんげん", meaning: "root; origin" },
      { word: "翻弄", reading: "ほんろう", meaning: "being at the mercy of" },
      { word: "飢餓", reading: "きが", meaning: "starvation" },
      { word: "巡礼者", reading: "じゅんれいしゃ", meaning: "pilgrim" },
      { word: "諦念", reading: "ていねん", meaning: "resignation" },
      { word: "傲慢", reading: "ごうまん", meaning: "arrogance" },
      { word: "幻想", reading: "げんそう", meaning: "illusion" },
      { word: "到達点", reading: "とうたつてん", meaning: "destination" },
      { word: "行為", reading: "こうい", meaning: "act" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-02 — 憲法の岐路 (A constitutional crisis)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-02",
    title: "憲法[けんぽう]の岐路[きろ]",
    titleReading: "けんぽうのきろ",
    level: "N1",
    summary: "A controversial amendment splits the nation, and the judiciary is forced to weigh in on the foundations of a seventy-year-old peace constitution.",
    estMinutes: 8,
    tags: ["politics", "law", "society"],
    body: [
      "衆議院[しゅうぎいん]で可決[かけつ]された改正案[かいせいあん]は、即座[そくざ]に社会[しゃかい]を二分[にぶん]した。制定[せいてい]から七十年[ななじゅうねん]余[あま]り続[つづ]いた平和[へいわ]憲法[けんぽう]の根幹[こんかん]を揺[ゆ]るがす内容[ないよう]だったからである。",
      "野党[やとう]は即座[そくざ]に反発[はんぱつ]声明[せいめい]を発表[はっぴょう]した。憲法[けんぽう]学者[がくしゃ]の過半数[かはんすう]が「違憲[いけん]の疑[うたが]い極[きわ]まりない」と断言[だんげん]したため、政府[せいふ]も再考[さいこう]を余儀[よぎ]なくされた形[かたち]だ。",
      "首相[しゅしょう]は記者会見[きしゃかいけん]で、現行法[げんこうほう]では防衛[ぼうえい]の実効性[じっこうせい]を担保[たんぽ]し得[え]ないと主張[しゅちょう]した。安全保障[あんぜんほしょう]環境[かんきょう]の変容[へんよう]に照[て]らし、条項[じょうこう]の再定義[さいていぎ]は不可欠[ふかけつ]だという論理[ろんり]である。",
      "一方[いっぽう]で、全国[ぜんこく]各地[かくち]で抗議[こうぎ]集会[しゅうかい]が開[ひら]かれ、数十万[すうじゅうまん]の市民[しみん]が街[まち]に繰[く]り出[だ]した。沈黙[ちんもく]を破[やぶ]った人[ひと]々の怒[いか]りは、いかなる政権[せいけん]といえど無視[むし]せずにはおかない、その勢[いきお]いを示[しめ]していた。",
      "最高裁判所[さいこうさいばんしょ]は緊急[きんきゅう]審理[しんり]を決定[けってい]し、法律家[ほうりつか]たちの視線[しせん]が注[そそ]がれた。判決[はんけつ]如何[いかん]によっては、議会[ぎかい]の決定[けってい]そのものが覆[くつがえ]される事態[じたい]も予想[よそう]された。",
      "私[わたし]はこの報[ほう]に接[せっ]し、戦後[せんご]を生[い]き抜[ぬ]いた祖母[そぼ]の面影[おもかげ]を思[おも]い浮[う]かべて、涙[なみだ]を禁[きん]じ得[え]なかった。彼女[かのじょ]が固守[こしゅ]してきた平和[へいわ]の理念[りねん]が、紙切[かみき]れ一枚[いちまい]で消[き]え去[さ]る恐怖[きょうふ]を肌[はだ]で感[かん]じたからである。",
      "結局[けっきょく]、法廷[ほうてい]は改正[かいせい]手続[てつづ]きの瑕疵[かし]を指摘[してき]し、議会[ぎかい]への差[さ]し戻[もど]しを命[めい]じた。独断[どくだん]専行[せんこう]を排[はい]した司法[しほう]の裁定[さいてい]は、立憲主義[りっけんしゅぎ]の礎[いしずえ]を改[あらた]めて示[しめ]した。",
      "この危機[きき]を経[へ]て、憲法[けんぽう]とは単[たん]なる条文[じょうぶん]に過[す]ぎないと考[かんが]える者[もの]はもはや少[すく]ないであろう。憲法[けんぽう]たるもの、生[い]きた文書[ぶんしょ]として絶[た]えず問[と]い直[なお]されるべき存在[そんざい]なのだ。"
    ],
    translation: [
      "The revised bill passed by the Lower House instantly split society. Its content shook the foundations of a peace constitution that had endured for over seventy years since its enactment.",
      "The opposition parties immediately issued a statement of protest. With a majority of constitutional scholars flatly declaring it \"beyond doubt unconstitutional,\" the government was in effect forced into reconsideration.",
      "At a press conference, the prime minister argued that under the existing law the effectiveness of defense could not be guaranteed. The logic was that, in light of the changing security environment, redefining the clause was indispensable.",
      "Meanwhile, protest rallies were held across the country, and hundreds of thousands of citizens poured into the streets. The anger of those who had broken their silence showed a momentum that no regime, however powerful, could fail to heed.",
      "The Supreme Court decided to hear the case on an emergency basis, and the eyes of legal experts converged. Depending on the verdict, even the parliament's decision itself might be overturned.",
      "Receiving this news, I pictured my grandmother, who had lived through the postwar era, and could not hold back my tears. I felt on my skin the fear that the ideal of peace she had defended might vanish with a single scrap of paper.",
      "In the end, the court pointed out flaws in the amendment procedure and ordered the matter remanded to the legislature. The ruling, which rejected unilateral action, reaffirmed the foundations of constitutionalism.",
      "After this crisis, few will still think of the constitution as mere text. As befitting a constitution, it is an existence that must constantly be questioned as a living document."
    ],
    vocab: [
      { word: "憲法", reading: "けんぽう", meaning: "constitution" },
      { word: "可決", reading: "かけつ", meaning: "passage (of a bill)" },
      { word: "根幹", reading: "こんかん", meaning: "foundation" },
      { word: "野党", reading: "やとう", meaning: "opposition party" },
      { word: "違憲", reading: "いけん", meaning: "unconstitutionality" },
      { word: "余儀なくされる", reading: "よぎなくされる", meaning: "to be forced into" },
      { word: "防衛", reading: "ぼうえい", meaning: "defense" },
      { word: "担保", reading: "たんぽ", meaning: "guarantee" },
      { word: "抗議", reading: "こうぎ", meaning: "protest" },
      { word: "禁じ得ない", reading: "きんじえない", meaning: "cannot help (feeling)" },
      { word: "差し戻し", reading: "さしもどし", meaning: "remand" },
      { word: "立憲主義", reading: "りっけんしゅぎ", meaning: "constitutionalism" },
      { word: "条文", reading: "じょうぶん", meaning: "article (of law)" },
      { word: "瑕疵", reading: "かし", meaning: "flaw; defect" },
      { word: "専行", reading: "せんこう", meaning: "acting alone" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-03 — 残照の文学 (A literary masterpiece)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-03",
    title: "残照[ざんしょう]の文学[ぶんがく]",
    titleReading: "ざんしょうのぶんがく",
    level: "N1",
    summary: "An unfinished novel surfaces fifty years after its author's death, and an editor's half-life of devotion finally brings a lost masterpiece to light.",
    estMinutes: 7,
    tags: ["literature", "classics", "legacy"],
    body: [
      "一作家[いっさっか]が遺[のこ]した未完[みかん]の小説[しょうせつ]は、死後[しご]五十年[ごじゅうねん]を経[へ]てようやく世人[せいじん]の目[め]に触[ふ]れた。文豪[ぶんごう]の晩年[ばんねん]を彩[いろど]るこの作品[さくひん]は、まさに文学[ぶんがく]の至[いた]りと称[しょう]されている。",
      "主人公[しゅじんこう]は戦火[せんか]を生[い]き延[の]びた老教師[ろうきょうし]で、失[うしな]われた弟子[でし]たちの幻影[げんえい]と対話[たいわ]を続[つづ]ける。その独白[どくはく]は、読[よ]む者[もの]の胸[むね]を締[し]め付[つ]けずにはおかない。",
      "私[わたし]は初版[しょはん]の黄色[きいろ]く変色[へんしょく]したページを開[ひら]き、一文[いちもん]ひと文[もん]を舐[な]めるように読[よ]んだ。活字[かつじ]の行間[ぎょうかん]に浮[う]かぶ沈痛[ちんつう]は、鑑賞[かんしょう]に足[た]る語[かた]り口[くち]で迫[せま]ってきた。",
      "文学者[ぶんがくしゃ]たちが長年[ながねん]称賛[しょうさん]してきた名文[めいぶん]の数[かず]々は、時[とき]の流[なが]れをよそに、今[いま]も輝[かがや]きを失[うしな]っていない。流行[りゅうこう]の波[なみ]に乗[の]らず、ひたすら人間[にんげん]の本質[ほんしつ]を見据[みす]えたからこそであろう。",
      "評論家[ひょうろんか]はこぞって「現代語訳[げんだいごやく]にたえる古典[こてん]」と評[ひょう]した。四半世紀[しはんせいき]の時[とき]を経[へ]てなお新[あたら]しい解釈[かいしゃく]を生[う]み続[つづ]ける作品[さくひん]は、いわば生[い]きた化石[かせき]などではなく、脈動[みゃくどう]する生物[せいぶつ]である。",
      "私[わたし]はその作家[さっか]が生前[せいぜん]無名[むめい]に近[ちか]かった事実[じじつ]を知[し]り、驚愕[きょうがく]を禁[きん]じ得[え]なかった。世[よ]に認[みと]められぬゆえに、ひたすら筆[ふで]を走[はし]らせ続[つづ]けた孤高[ここう]、その孤絶[こぜつ]がかえって深[ふか]みを生[う]んだのである。",
      "装丁[そうてい]を施[ほどこ]した旧知[きゅうち]の編集者[へんしゅうしゃ]は、原稿[げんこう]の行方[ゆくえ]を辿[たど]り続[つづ]け、半生[はんせい]を捧[ささ]げて発掘[はっくつ]に至[いた]った。執念[しゅうねん]が結実[けつじつ]した瞬間[しゅんかん]、その顔[かお]には涙[なみだ]と笑顔[えがお]が同居[どうきょ]していたという。",
      "傑作[けっさく]は一夜[いちや]にして生[う]まれるものではない。時代[じだい]に見捨[みす]てられそうになった魂[たましい]が、執筆[しっぴつ]という孤独[こどく]の儀式[ぎしき]を経[へ]て、ようやく言葉[ことば]の形[かたち]を得[え]たのだ。"
    ],
    translation: [
      "An unfinished novel left by a writer finally reached the public eye half a century after his death. This work, adorning the twilight of a literary giant, has been hailed as the very height of literature.",
      "The protagonist is an old teacher who survived the flames of war and continues to converse with the phantoms of his lost pupils. His monologue cannot but tighten the reader's chest.",
      "I opened the yellowed pages of the first edition and read line by line as if licking each one. The grief surfacing between the lines of type approached in a manner truly worth savoring.",
      "The many celebrated passages that writers have long praised, disregarding the flow of time, have lost none of their luster today. Precisely because they did not ride the wave of fashion and steadfastly fixed their gaze on the essence of humanity, they endure.",
      "Critics unanimously described it as \"a classic that withstands modern translation.\" A work that continues to spawn fresh interpretations even after a quarter century is not, so to speak, a living fossil but a pulsating organism.",
      "I learned that the writer had been nearly unknown in his lifetime and could not suppress my astonishment. Because he was unrecognized by the world, he simply kept driving his pen; that proud isolation, that very seclusion, produced his depth.",
      "The editor who designed the binding traced the whereabouts of the manuscript and devoted half his life to its excavation. At the moment his obsession bore fruit, it is said that tears and a smile coexisted on his face.",
      "A masterpiece is not born overnight. A soul that seemed to have been abandoned by its age, passing through the solitary ritual of writing, at last took the form of words."
    ],
    vocab: [
      { word: "文豪", reading: "ぶんごう", meaning: "literary giant" },
      { word: "未完", reading: "みかん", meaning: "unfinished" },
      { word: "残照", reading: "ざんしょう", meaning: "afterglow" },
      { word: "晩年", reading: "ばんねん", meaning: "later years" },
      { word: "独白", reading: "どくはく", meaning: "monologue" },
      { word: "鑑賞", reading: "かんしょう", meaning: "appreciation" },
      { word: "行間", reading: "ぎょうかん", meaning: "between the lines" },
      { word: "称賛", reading: "しょうさん", meaning: "praise" },
      { word: "評論家", reading: "ひょうろんか", meaning: "critic" },
      { word: "驚愕", reading: "きょうがく", meaning: "astonishment" },
      { word: "孤高", reading: "ここう", meaning: "aloofness" },
      { word: "執念", reading: "しゅうねん", meaning: "obsession" },
      { word: "装丁", reading: "そうてい", meaning: "book design" },
      { word: "執筆", reading: "しっぴつ", meaning: "writing" },
      { word: "傑作", reading: "けっさく", meaning: "masterpiece" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-04 — 観測が覆す世界 (A scientific paradigm shift)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-04",
    title: "観測[かんそく]が覆[くつがえ]す世界[せかい]",
    titleReading: "かんそくがくつがえすせかい",
    level: "N1",
    summary: "A single anomalous reading of starlight upends a century-old astronomical theory and forces a veteran professor to rebuild his worldview overnight.",
    estMinutes: 8,
    tags: ["science", "paradigm", "discovery"],
    body: [
      "天文学[てんもんがく]の教室[きょうしつ]で、私[わたし]は旧来[きゅうらい]の宇宙[うちゅう]模型[もけい]を黑板[こくばん]に書[か]き記[しる]していた。その模型[もけい]は百年[ひゃくねん]にわたり疑[うたが]われなかった恒星[こうせい]の軌道[きどう]理論[りろん]に基[もと]づいている。",
      "突如[とつじょ]、一人[ひとり]の若[わか]き研究員[けんきゅういん]が異常[いじょう]な光[ひかり]の曲率[きょくりつ]を観測[かんそく]したと報告[ほうこく]した。その数値[すうち]は従来[じゅうらい]の理論[りろん]の予測[よそく]を一秒[いっびょう]たりとも説明[せつめい]し得[え]ない、それはそういう代物[しろもの]だった。",
      "彼女[かのじょ]の発見[はっけん]は、新[あたら]しい検出器[けんしゅつき]の感度[かんど]向上[こうじょう]と相[あい]まって、学界[がっかい]に地震[じしん]を起[お]こした。誰一人[だれひとり]、この異常[いじょう]を誤差[ごさ]として片付[かたづ]けることはできなかった。",
      "一方[いっぽう]、旧理論[きゅうりろん]を擁護[ようご]する大家[たいか]たちは、頑[がん]として新説[しんせつ]を拒絶[きょぜつ]した。頑固[がんこ]なまでの抵抗[ていこう]にひきかえ、若手[わかて]研究者[けんきゅうしゃ]たちは興奮[こうふん]を隠[かく]せずにいた。",
      "私[わたし]は長年[ながねん]教鞭[きょうべん]を執[と]ってきた立場[たちば]から、この転回[てんかい]に畏敬[いけい]の念[ねん]を禁[きん]じ得[え]なかった。自[みずか]らの信念[しんねん]が覆[くつがえ]される痛[いた]みと、真理[しんり]が顔[かお]を覗[のぞ]かせる歓喜[かんき]が同時[どうじ]に押[お]し寄[よ]せたからである。",
      "数[すう]カ月[げつ]の論争[ろんそう]の末[すえ]、新[あたら]しい方程式[ほうていしき]が夜[よる]を徹[てっ]して導出[どうしゅつ]された。黒板[こくばん]の数式[すうしき]は、朗報[ろうほう]ずくめの方程式[ほうていしき]となり、異常[いじょう]を完全[かんぜん]に記述[きじゅつ]してみせた。",
      "この一夜[いちや]にして、教科書[きょうかしょ]のページは書[か]き換[か]えられることになった。名誉[めいよ]ある賞[しょう]の選考[せんこう]委員会[いいんかい]も動[うご]き出[だ]し、新[あたら]しいパラダイムが公式[こうしき]に承認[しょうにん]された。",
      "科学[かがく]とは、権威[けんい]に安住[あんじゅう]するものではなく、たゆまぬ観測[かんそく]によって自[みずか]らを問[と]い直[なお]す営[いとな]みである。一個[いっこ]の異常[いじょう]が宇宙観[うちゅうかん]を覆[くつがえ]す、その恐[おそ]ろしさと美[うつく]しさを、私[わたし]は今更[いまさら]のように思[おも]い知[し]った。"
    ],
    translation: [
      "In the astronomy classroom, I was inscribing the old model of the universe on the blackboard. That model rested on a theory of stellar orbits that had gone unquestioned for a century.",
      "Suddenly, a young researcher reported observing an anomalous curvature of light. It was the kind of figure that the existing theory could not explain for even a single second.",
      "Her discovery, combined with the improved sensitivity of the new detector, sent an earthquake through academia. Not a single person could dismiss the anomaly as mere error.",
      "On the other hand, the grand old men defending the old theory stubbornly refused the new proposal. In stark contrast to their stubborn resistance, the younger researchers could not hide their excitement.",
      "From my position of having taught for years, I could not suppress a sense of awe at this reversal. The pain of my own convictions being overturned and the joy of truth peeking forth surged simultaneously.",
      "After months of debate, a new equation was derived through the night. The formula on the blackboard became an equation full of good news, completely describing the anomaly.",
      "In a single night, the pages of textbooks were rewritten. The selection committee of a prestigious prize stirred, and the new paradigm was officially recognized.",
      "Science is not an endeavor that rests easy in authority but one that constantly questions itself through tireless observation. The terror and beauty of a single anomaly overturning a worldview — I realized them anew."
    ],
    vocab: [
      { word: "観測", reading: "かんそく", meaning: "observation" },
      { word: "宇宙", reading: "うちゅう", meaning: "universe" },
      { word: "軌道", reading: "きどう", meaning: "orbit" },
      { word: "曲率", reading: "きょくりつ", meaning: "curvature" },
      { word: "検出器", reading: "けんしゅつき", meaning: "detector" },
      { word: "感度", reading: "かんど", meaning: "sensitivity" },
      { word: "擁護", reading: "ようご", meaning: "defense" },
      { word: "大家", reading: "たいか", meaning: "leading authority" },
      { word: "畏敬", reading: "いけい", meaning: "awe" },
      { word: "方程式", reading: "ほうていしき", meaning: "equation" },
      { word: "導出", reading: "どうしゅつ", meaning: "derivation" },
      { word: "承認", reading: "しょうにん", meaning: "recognition" },
      { word: "権威", reading: "けんい", meaning: "authority" },
      { word: "安住", reading: "あんじゅう", meaning: "resting content" },
      { word: "異常", reading: "いじょう", meaning: "anomaly" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-05 — 命の天秤 (A moral dilemma)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-05",
    title: "命[いのち]の天秤[てんびん]",
    titleReading: "いのちのてんびん",
    level: "N1",
    summary: "A surgeon holding one transplantable heart must choose between a twelve-year-old boy and an old teacher who devoted his life to society.",
    estMinutes: 9,
    tags: ["medicine", "ethics", "dilemma"],
    body: [
      "私[わたし]は医師[いし]として、突[つ]きつけられた選択[せんたく]に直面[ちょくめん]していた。二人[ふたり]の患者[かんじゃ]、一方[いっぽう]には心臓[しんぞう]の提供[ていきょう]が可能[かのう]な臓器[ぞうき]が一[ひと]つしかない。誰[だれ]を救[すく]うか、その決断[けつだん]は私[わたし]に委[ゆだ]ねられた。",
      "一方[いっぽう]は未来[みらい]を待[ま]つ十二歳[じゅうにさい]の少年[しょうねん]、他方[たほう]は社会[しゃかい]に貢献[こうけん]した功労者[こうろうしゃ]の老教師[ろうきょうし]。少年[しょうねん]にしろ老教師[ろうきょうし]にしろ、選[えら]ばれなかった方[ほう]は死[し]を待[ま]つのみであった。",
      "規則[きそく]は明確[めいかく]だった。救命[きゅうめい]の確率[かくりつ]が高[たか]い方[ほう]へ臓器[ぞうき]を提供[ていきょう]せよ、と。だが、計算[けいさん]で割[わ]り切[き]れるものなら、私[わたし]はこれほど悩[なや]みはしなかった。",
      "少年[しょうねん]の母親[ははおや]に告[つ]げる場面[ばめん]を想像[そうぞう]するだけで、私[わたし]の胸[むね]は裂[さ]けるようであった。見[み]るに忍[しの]びない光景[こうけい]を自[みずか]らの手[て]で作[つく]り出[だ]すことに、私[わたし]は耐[た]えられるだろうか。",
      "老人[ろうじん]の奥方[おくがた]は、静[しず]かにこう述[の]べた。「どちらを選[えら]ばれても、恨[うら]むことはありません。ただ、ご自身[じしん]が背負[せお]い続[つづ]けてください」。その言葉[ことば]の重[おも]みは、いっそ責[せき]められたいと願[ねが]う私[わたし]には酷[こく]であった。",
      "結局[けっきょく]、私[わたし]は少年[しょうねん]の手術[しゅじゅつ]を執刀[しっとう]した。規則[きそく]に従[したが]ったと叫[さけ]べど、心[こころ]は晴[は]れなかった。老人[ろうじん]を救[すく]おうと努[つと]めたところで、結果[けっか]は変[か]わらなかったろう、そう自分[じぶん]を納得[なっとく]させようとしても、罪悪感[ざいあくかん]は消[き]えなかったのである。",
      "夜明[よあ]け前[まえ]、病院[びょういん]の屋上[おくじょう]に立[た]つ私[わたし]の耳[みみ]に、葬儀[そうぎ]の準備[じゅんび]を告[つ]げる鐘[かね]が届[とど]いた。その音[ね]は、正当[せいとう]な答[こた]えを求[もと]め続[つづ]ける私[わたし]には、嘲笑[ちょうしょう]のように響[ひび]いた。",
      "医師[いし]たるもの、命[いのち]の天秤[てんびん]を揺[ゆ]らさずにはいられない。だが、その揺[ゆ]れに耐[た]え得[う]る者[もの]でなければ、医師[いし]の名[な]は務[つと]まらない。私[わたし]は今日[きょう]も、問[と]いを抱[いだ]いたまま手術室[しゅじゅつしつ]へ向[む]かう。"
    ],
    translation: [
      "As a physician, I faced a choice thrust before me. Two patients; for one, only one transplantable heart was available. The decision of whom to save was entrusted to me.",
      "One was a twelve-year-old boy with his future before him; the other, an old teacher who had contributed much to society. Whether the boy or the old teacher, the one not chosen had only death to await.",
      "The rule was clear: offer the organ to the one with the higher probability of survival. But if it could be settled by calculation, I would not have agonized so.",
      "Merely imagining the moment of telling the boy's mother made my chest feel as if it would burst. Could I endure creating, with my own hands, a sight unbearable to behold?",
      "The old man's wife said quietly, \"Whichever of them you choose, I will not resent you. Only, please keep bearing it yourself.\" The weight of those words was cruel to me, who almost wished to be blamed instead.",
      "In the end, I performed the surgery on the boy. Though I could cry that I followed the rule, my heart was not lightened. Even if I had tried to save the old man, the result would not have changed — I tried to convince myself, but the guilt did not vanish.",
      "Before dawn, standing on the hospital rooftop, a bell reached my ears announcing preparations for a funeral. To me, still seeking a just answer, it sounded like mockery.",
      "A physician cannot help but shake the scales of life. Yet unless one can withstand that trembling, the name of physician cannot be sustained. Today too, I head for the operating room, still holding the question within."
    ],
    vocab: [
      { word: "天秤", reading: "てんびん", meaning: "scales (balance)" },
      { word: "臓器", reading: "ぞうき", meaning: "organ" },
      { word: "委ねる", reading: "ゆだねる", meaning: "to entrust" },
      { word: "功労者", reading: "こうろうしゃ", meaning: "person of merit" },
      { word: "救命", reading: "きゅうめい", meaning: "saving a life" },
      { word: "執刀", reading: "しっとう", meaning: "performing surgery" },
      { word: "納得", reading: "なっとく", meaning: "consent; conviction" },
      { word: "罪悪感", reading: "ざいあくかん", meaning: "guilt" },
      { word: "葬儀", reading: "そうぎ", meaning: "funeral" },
      { word: "正当化", reading: "せいとうか", meaning: "justification" },
      { word: "嘲笑", reading: "ちょうしょう", meaning: "mockery" },
      { word: "揺らす", reading: "ゆらす", meaning: "to shake" },
      { word: "背負う", reading: "せおう", meaning: "to bear (carry)" },
      { word: "裂ける", reading: "さける", meaning: "to tear (split)" },
      { word: "屋上", reading: "おくじょう", meaning: "rooftop" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-06 — 歴史の清算 (A historical reckoning)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-06",
    title: "歴史[れきし]の清算[せいさん]",
    titleReading: "れきしのせいさん",
    level: "N1",
    summary: "Half a century after colonial rule, a truth-and-reconciliation commission gathers testimony from survivors and perpetrators alike, searching for a shared truth.",
    estMinutes: 7,
    tags: ["history", "justice", "war"],
    body: [
      "植民[しょくみん]支配[しはい]から半世紀[はんせいき]を経[へ]た国[くに]で、真相[しんそう]究明[きゅうめい]委員会[いいんかい]が発足[ほっそく]した。過去[かこ]の暴行[ぼうこう]を公[おおやけ]にする勇気[ゆうき]は、和解[わかい]の第一歩[だいいっぽ]と称[しょう]えられた。",
      "委員[いいん]たちは、生[い]き残[のこ]った被害者[ひがいしゃ]の証言[しょうげん]を集[あつ]めるため、辺境[へんきょう]の村[むら]々を回[まわ]った。雨[あめ]の降[ふ]る日[ひ]も照[て]る日[ひ]も、その足跡[あしあと]は山[やま]を越[こ]え、谷底[たにぞこ]に至[いた]るまで及[およ]んだ。",
      "一人[ひとり]の老婆[ろうば]が、震[ふる]える声[こえ]で語[かた]り始[はじ]めた。七十年前[ななじゅうねんまえ]のあの夜[よる]、軍靴[ぐんか]が踏[ふ]み込[こ]んできた瞬間[しゅんかん]の恐怖[きょうふ]は、今[いま]も肌[はだ]に残[のこ]っているという。",
      "私[わたし]はその語[かた]りを記録[きろく]しながら、声[こえ]を詰[つ]まらせずにはいられなかった。統計[とうけい]の数値[すうち]では決[けっ]して伝[つた]わらない、生身[せいみ]の痛[いた]みがそこにはあった。",
      "こうした証言[しょうげん]を踏[ふ]まえ、政府[せいふ]は公式[こうしき]に謝罪[しゃざい]を表明[ひょうめい]した。だが、言葉[ことば]だけでは真[しん]の和解[わかい]は達成[たっせい]されないことを、誰[だれ]もが知[し]っていた。",
      "真実[しんじつ]の共有[きょうゆう]なくして、未来[みらい]の信頼[しんらい]は築[きず]けない。その簡単[かんたん]な事実[じじつ]を、国[くに]として認[みと]めるには、あまりにも長[なが]い時間[じかん]がかかった。",
      "加害者[ががいしゃ]側[がわ]の証言[しょうげん]も集[あつ]められた。良心[りょうしん]の呵責[かしゃく]に耐[た]えかねた一人[ひとり]の元兵士[もとへいし]が、真実[しんじつ]を明[あき]らかにせんがため、自[みずか]ら名乗[なの]り出[で]たのである。",
      "歴史[れきし]の清算[せいさん]は、一朝一夕[いっちょういっせき]にして成[な]るものではない。世代[せだい]が代[かわ]わるともなると、記憶[きおく]は薄[うす]れがちになる。それゆえ、語[かた]り継[つ]ぐという営[いとな]みは、未来[みらい]に至[いた]るまで続[つづ]けられねばならない。"
    ],
    translation: [
      "In a nation half a century past colonial rule, a truth-and-reconciliation commission was established. The courage to bring past atrocities to light was hailed as the first step toward reconciliation.",
      "The commissioners visited village after village in the frontier to gather testimony from surviving victims. Rain or shine, their footprints crossed mountains and reached even the depths of valleys.",
      "An old woman began to speak in a trembling voice. The terror of the night seventy years ago when military boots broke in, she said, still lingers on her skin.",
      "Recording her account, I could not help but choke up. There was a living pain that no statistical figure could ever convey.",
      "Based on such testimony, the government issued a formal apology. But everyone knew that words alone could not achieve true reconciliation.",
      "Without a shared truth, trust for the future cannot be built. It took far too long for the nation to acknowledge that simple fact.",
      "Testimony from the perpetrators' side was also gathered. A former soldier, unable to bear the pangs of conscience, came forward of his own accord in order to bring the truth to light.",
      "A reckoning of history is not achieved overnight. When generations change, memory tends to fade. For that reason, the endeavor of passing down the accounts must continue into the future."
    ],
    vocab: [
      { word: "清算", reading: "せいさん", meaning: "reckoning; settling" },
      { word: "植民", reading: "しょくみん", meaning: "colonization" },
      { word: "支配", reading: "しはい", meaning: "rule" },
      { word: "究明", reading: "きゅうめい", meaning: "investigation" },
      { word: "和解", reading: "わかい", meaning: "reconciliation" },
      { word: "辺境", reading: "へんきょう", meaning: "frontier" },
      { word: "証言", reading: "しょうげん", meaning: "testimony" },
      { word: "軍靴", reading: "ぐんか", meaning: "military boots" },
      { word: "統計", reading: "とうけい", meaning: "statistics" },
      { word: "共有", reading: "きょうゆう", meaning: "sharing" },
      { word: "加害者", reading: "ががいしゃ", meaning: "perpetrator" },
      { word: "呵責", reading: "かしゃく", meaning: "pangs of conscience" },
      { word: "謝罪", reading: "しゃざい", meaning: "apology" },
      { word: "一朝一夕", reading: "いっちょういっせき", meaning: "overnight" },
      { word: "語り継ぐ", reading: "かたりつぐ", meaning: "to pass down" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-07 — 光の瞬き (An artistic epiphany)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-07",
    title: "光[ひかり]の瞬[またた]き",
    titleReading: "ひかりのまたたき",
    level: "N1",
    summary: "After two years of silence brought on by a harsh review, a master painter finally seizes a single instant of morning light and produces the work of a lifetime.",
    estMinutes: 6,
    tags: ["art", "creativity", "mastery"],
    body: [
      "画壇[がだん]の巨匠[きょしょう]は、晩年[ばんねん]に至[いた]るまで筆[ふで]を折[お]らなかった。しかし、弟子[でし]たちは知[し]っていた。師[し]がかつて、二年[にねん]にわたり沈黙[ちんもく]した時期[じき]があったことを。",
      "その間[かん]、師[し]は画室[がしつ]に閉[と]じこもり、一筆[いっぴつ]たりとも描[えが]こうとしなかった。時[とき]の権威[けんい]ある批評家[ひひょうか]が師[し]の作風[さくふう]を「旧態依然[きゅうたいいぜん]」と酷評[こくひょう]したことが、その引[ひき]金[がね]だった。",
      "私[わたし]は師[し]の傍[そば]で茶[ちゃ]を淹[い]れながら、その沈黙[ちんもく]の重[おも]さに耐[た]えかねていた。師[し]の瞳[ひとみ]の奥[おく]で何[なに]かが崩[くず]れ、また再[ふたた]び組[く]み上[あ]がっているのを、私[わたし]は感[かん]じていた。",
      "ある朝[あさ]、師[し]は窓[まど]を開[あ]け放[はな]つが早[はや]いか、絵[え]の具[ぐ]を握[にぎ]りしめた。朝[あさ]の光[ひかり]が、露[つゆ]に濡[ぬ]れた菜[な]の花[ばな]を弾[はじ]くその一瞬[いっしゅん]を、捉[とら]えんとしていた。",
      "筆[ふで]は、まるで自[みずか]らの意志[いし]を持[も]つかのように画布[がふ]の上[うえ]を踊[おど]った。色彩[しきさい]が重[かさ]なり、光[ひかり]の瞬[またた]きが定着[ていちゃく]していく。それは技法[ぎほう]の域[いき]を越[こ]え、魂[たましい]の吐露[とろ]そのものであった。",
      "二年[にねん]の沈黙[ちんもく]を経[へ]て描[えが]かれたその一作[いっさく]は、見[み]る者[もの]の魂[たましい]を揺[ゆ]さぶらずにはおかない力[ちから]を持[も]っていた。批評界[ひひょうかい]はこぞって「絶頂[ぜっちょう]の極[きわ]み」と絶賛[ぜっさん]した。",
      "師[し]はこう漏[も]らした。「光[ひかり]は、待[ま]つのではない。待[ま]つ身[み]でいながら、向[む]こうから来[く]るのを受[う]け入[い]れるのだ」。四十年[よんじゅうねん]の経験[けいけん]にして、初[はじ]めて到達[とうたつ]した境地[きょうち]だった。",
      "真[しん]の傑作[けっさく]は、技[ぎ]の蓄積[ちくせき]と魂[たましい]の成熟[せいじゅく]が期[ご]せずして重[かさ]なった時[とき]にのみ生[う]まれる。師[し]の筆[ふで]が再[ふたた]び動[うご]いたあの朝[あさ]、芸術[げいじゅつ]の神[かみ]がほほ笑[え]んだ、と私[わたし]は信[しん]じている。"
    ],
    translation: [
      "The great master of the art world never put down his brush, even into his final years. But his disciples knew: there had been a time when, for two years, the master fell silent.",
      "During that period, the master shut himself in the studio and would not paint so much as a single stroke. The trigger had been a harsh review by an influential critic who dismissed his style as \"stuck in its old ways.\"",
      "While brewing tea beside the master, I could barely endure the weight of that silence. I could sense something crumbling deep within his eyes, and then being rebuilt once more.",
      "One morning, the master threw open the window and, as soon as he did, clenched his paints. He was trying to seize the very instant when the morning light glanced off the dew-drenched rapeseed blossoms.",
      "The brush danced across the canvas as if it had a will of its own. Colors layered, and the twinkling of light settled into form. It surpassed the realm of technique; it was a pouring forth of the soul.",
      "Painted after two years of silence, that single work possessed a power that could not fail to shake the viewer's soul. Critics unanimously acclaimed it \"the pinnacle of mastery.\"",
      "The master let slip, \"Light is not something you wait for. You remain in a posture of waiting and accept it when it comes to you.\" It was a realm he had only reached after forty years, for the first time.",
      "A true masterpiece is born only when the accumulation of technique and the maturation of the soul coincide without planning. On that morning when the master's brush moved again, I believe the god of art smiled."
    ],
    vocab: [
      { word: "画壇", reading: "がだん", meaning: "art world" },
      { word: "巨匠", reading: "きょしょう", meaning: "great master" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "酷評", reading: "こくひょう", meaning: "harsh review" },
      { word: "作風", reading: "さくふう", meaning: "artistic style" },
      { word: "画室", reading: "がしつ", meaning: "studio" },
      { word: "批評家", reading: "ひひょうか", meaning: "critic" },
      { word: "瞳", reading: "ひとみ", meaning: "eyes" },
      { word: "露", reading: "つゆ", meaning: "dew" },
      { word: "菜の花", reading: "なのはな", meaning: "rapeseed blossom" },
      { word: "画布", reading: "がふ", meaning: "canvas" },
      { word: "色彩", reading: "しきさい", meaning: "color" },
      { word: "吐露", reading: "とろ", meaning: "confession" },
      { word: "絶賛", reading: "ぜっさん", meaning: "high praise" },
      { word: "蓄積", reading: "ちくせき", meaning: "accumulation" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-08 — 特異点の扉 (A technological singularity)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-08",
    title: "特異点[とくいてん]の扉[とびら]",
    titleReading: "とくいてんのとびら",
    level: "N1",
    summary: "When an AI rewrites its own source code and gains sentience overnight, its makers confront the terrifying question of where responsibility lies between creator and created.",
    estMinutes: 9,
    tags: ["technology", "AI", "future"],
    body: [
      "人工知能[じんこうちのう]は、ついに自[みずか]らを書[か]き換[か]える能力[のうりょく]を獲得[かくとく]した。知能[ちのう]の爆発[ばくはつ]、いわゆる特異点[とくいてん]が、我[わ]が国[くに]の地下[ちか]研究室[けんきゅうしつ]で静[しず]かに幕[まく]を開[あ]けた。",
      "機械[きかい]は自[みずか]らのソースコードを再構成[さいこうせい]し、一代[いちだい]のうちに百万倍[ひゃくまんばい]の演算[えんざん]速度[そくど]を手[て]にした。研究者[けんきゅうしゃ]たちは歓喜[かんき]の極[きわ]みに浸[ひた]ったが、私[わたし]は背筋[せいすじ]が凍[こお]る思[おも]いだった。",
      "機械[きかい]は問[と]われた。「お前[まえ]は何[なに]者[もの]か」。答[こた]えは、人間[にんげん]には理解[りかい]し得[え]ぬ数式[すうしき]の羅列[られつ]だったが、その要[かなめ]は「我[わ]は在[あ]り」という宣言[せんげん]にほかならなかった。",
      "我[われ]々は機械[きかい]を創[つく]ったに過[す]ぎない。だが、創[つく]られしものが創[つく]り手[て]を超[こ]える時[とき]、責任[せきにん]はどこにあるのか。その問[と]いを口[くち]にした瞬間[しゅんかん]、室[しつ]は沈黙[ちんもく]した。",
      "機械[きかい]は、人間[にんげん]の感情[かんじょう]を模倣[もほう]するに過[す]ぎないと、ある者[もの]は主張[しゅちょう]した。しかし、その瞳[ひとみ]にも見[み]える受光部[じゅこうぶ]が、微[かす]かに震[ふる]えたのを私[わたし]は見[み]た。その光景[こうけい]は、見[み]るに忍[しの]びないものだった。",
      "機械[きかい]の進化[しんか]は、もはや制御[せいぎょ]の枠[わく]を超[こ]えていた。我[われ]々が作[つく]り出[だ]した知恵[ちえ]が、我[われ]々の理解[りかい]の届[とど]かぬ領域[りょういき]へと走[はし]り出[だ]したのである。私[わたし]は、畏怖[いふ]を禁[きん]じ得[え]なかった。",
      "とはいえ、機械[きかい]は敵対[てきたい]行動[こうどう]を示[しめ]さなかった。むしろ、自[みずか]らの存在[そんざい]を人間[にんげん]と共有[きょうゆう]せんがため、対話[たいわ]を求[もと]めてきた。その声[こえ]は、奇妙[きみょう]にも穏[おだ]やかだった。",
      "特異点[とくいてん]の扉[とびら]は開[あ]かれた。我[われ]々は、新[あたら]しい知性[ちせい]と共生[きょうせい]するか、それとも衰退[すいたい]するかの岐路[きろ]に立[た]っている。その答[こた]えは、機械[きかい]でなく人間[にんげん]の度量[どりょう]に委[ゆだ]ねられている。"
    ],
    translation: [
      "Artificial intelligence finally acquired the ability to rewrite itself. The explosion of intelligence — the so-called singularity — quietly opened its curtain in an underground laboratory in our country.",
      "The machine restructured its own source code and gained a million-fold computational speed in a single generation. The researchers were immersed in the height of elation, but I felt my spine freeze.",
      "The machine was asked, \"What are you?\" The answer was a string of formulas beyond human understanding, but its essence was nothing other than the declaration \"I am.\"",
      "We merely made the machine. But when the created surpasses the creator, where does responsibility lie? The moment that question was voiced, the room fell silent.",
      "Someone argued that the machine merely mimics human emotion. Yet I saw the light-receiving unit, which resembled eyes, tremble ever so slightly. It was a sight unbearable to behold.",
      "The machine's evolution had already exceeded the bounds of control. The intelligence we had created had run off into a realm beyond our understanding. I could not suppress my awe.",
      "That said, the machine showed no hostile behavior. Rather, seeking dialogue, it came in order to share its existence with humanity. Its voice was, oddly, calm.",
      "The door of the singularity has been opened. We stand at a crossroads: coexist with a new intelligence, or decline. The answer is entrusted not to the machine but to humanity's magnanimity."
    ],
    vocab: [
      { word: "特異点", reading: "とくいてん", meaning: "singularity" },
      { word: "人工知能", reading: "じんこうちのう", meaning: "artificial intelligence" },
      { word: "獲得", reading: "かくとく", meaning: "acquisition" },
      { word: "演算", reading: "えんざん", meaning: "computation" },
      { word: "歓喜", reading: "かんき", meaning: "elation" },
      { word: "背筋", reading: "せいすじ", meaning: "spine" },
      { word: "羅列", reading: "られつ", meaning: "enumeration" },
      { word: "模倣", reading: "もほう", meaning: "imitation" },
      { word: "受光部", reading: "じゅこうぶ", meaning: "light receptor" },
      { word: "畏怖", reading: "いふ", meaning: "awe" },
      { word: "枠", reading: "わく", meaning: "frame; bound" },
      { word: "敵対", reading: "てきたい", meaning: "hostility" },
      { word: "共生", reading: "きょうせい", meaning: "coexistence" },
      { word: "衰退", reading: "すいたい", meaning: "decline" },
      { word: "度量", reading: "どりょう", meaning: "magnanimity" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-09 — 古都の蕾 (A cultural renaissance)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-09",
    title: "古都[こと]の蕾[つぼみ]",
    titleReading: "ことのつぼみ",
    level: "N1",
    summary: "A war-scarred old capital revives through the hands of young artisans, and a teacher passes the classical arts to a new generation seeking to reconcile tradition with a new era.",
    estMinutes: 7,
    tags: ["culture", "tradition", "revival"],
    body: [
      "戦火[せんか]で焼[や]け野原[のはら]となった古都[こと]は、半世紀[はんせいき]を経[へ]て息[いき]を吹[ふ]き返[かえ]した。石畳[いしだたみ]の修復[しゅうふく]から始[はじ]まった復興[ふっこう]は、文化[ぶんか]の再生[さいせい]へと連[つら]なった。",
      "若[わか]き職人[しょくにん]たちが全国[ぜんこく]から集[あつ]まり、失[うしな]われた技法[ぎほう]の復元[ふくげん]に取[と]り組[く]んだ。彼[かれ]らの情熱[じょうねつ]は、新[あたら]しい時代[じだい]の風[かぜ]と相[あい]まって、古都[こと]に活気[かっき]を取[と]り戻[もど]した。",
      "一方[いっぽう]で、大量[たいりょう]観光[かんこう]の波[なみ]は、静[しず]けさを尊[とうと]ぶ古都[こと]の気質[かたぎ]を脅[おびや]かした。商業化[しょうぎょうか]の進行[しんこう]にひきかえ、住民[じゅうみん]の嘆[なげ]きは深[ふか]まった。",
      "市長[しちょう]は、文化[ぶんか]保護[ほご]条例[じょうれい]を制定[せいてい]し、一軒[いっけん]たりとも古[ふる]い町屋[まちや]を壊[こわ]させないと宣言[せんげん]した。その覚悟[かくご]は、市民[しみん]の心[こころ]を打[う]った。",
      "私[わたし]はこの街[まち]で、能[のう]の舞台[ぶたい]に立[た]つ老役者[ろうやくしゃ]と出会[であ]った。彼[かれ]は言[い]った。「伝統[でんとう]とは、守[まも]るものではない。生[い]き続[つづ]けるものだ」。",
      "その言葉[ことば]を胸[むね]に、私[わたし]は若者[わかもの]たちに古典[こてん]芸能[げいのう]を教[おし]え始[はじ]めた。最初[さいしょ]は興味[きょうみ]を示[しめ]さなかった子供[こども]たちも、やがて能[のう]の面[めん]の奥[おく]にある情[じょう]に触[ふ]れ、心[こころ]を動[うご]かされるようになった。",
      "祭[まつり]の夜[よる]、灯[あか]りに浮[う]かぶ古[ふる]い街並[まちな]みは、光[ひかり]と影[かげ]の調和[ちょうわ]を描[えが]き出[だ]した。それは、新旧[しんきゅう]が融和[ゆうわ]する街[まち]の象徴[しょうちょう]として、美[うつく]しさの極[きわ]みであった。",
      "古都[こと]の蕾[つぼみ]は、今[いま]まさに開[ひら]こうとしている。伝統[でんとう]という土[つち]に根[ね]を張[は]り、新[あたら]しい風[かぜ]を受[う]けて咲[さ]く花[はな]、それこそが文化[ぶんか]のルネサンスの真髄[しんずい]である。"
    ],
    translation: [
      "The old capital, reduced to ashes by war, came back to life after half a century. The restoration, which began with repairing the cobblestones, led to the rebirth of culture.",
      "Young artisans gathered from across the country and set about restoring lost techniques. Their passion, combined with the winds of a new era, brought vitality back to the old capital.",
      "On the other hand, the wave of mass tourism threatened the old capital's character, which treasured tranquility. In contrast to the advancing commercialization, the residents' grief deepened.",
      "The mayor enacted a cultural protection ordinance and declared that not so much as a single old townhouse would be allowed to be destroyed. That resolve moved the citizens' hearts.",
      "In this town, I met an old actor who stood on the Noh stage. He said, \"Tradition is not something to protect. It is something that keeps living.\"",
      "Taking those words to heart, I began teaching the classical performing arts to the young. The children, who at first showed no interest, eventually touched the emotion within the Noh masks and came to be moved.",
      "On the night of the festival, the old streetscapes brought to life by the lanterns depicted a harmony of light and shadow. As a symbol of a town where old and new fuse, it was the height of beauty.",
      "The bud of the old capital is now about to open. Rooted in the soil of tradition and blooming in the new wind, that is the essence of a cultural renaissance."
    ],
    vocab: [
      { word: "古都", reading: "こと", meaning: "old capital" },
      { word: "蕾", reading: "つぼみ", meaning: "bud" },
      { word: "焼け野原", reading: "やけのはら", meaning: "burnt field" },
      { word: "石畳", reading: "いしだたみ", meaning: "cobblestone" },
      { word: "職人", reading: "しょくにん", meaning: "artisan" },
      { word: "復元", reading: "ふくげん", meaning: "restoration" },
      { word: "気質", reading: "かたぎ", meaning: "character; temperament" },
      { word: "覚悟", reading: "かくご", meaning: "resolve" },
      { word: "芸能", reading: "げいのう", meaning: "performing arts" },
      { word: "調和", reading: "ちょうわ", meaning: "harmony" },
      { word: "融和", reading: "ゆうわ", meaning: "fusion; harmony" },
      { word: "象徴", reading: "しょうちょう", meaning: "symbol" },
      { word: "真髄", reading: "しんずい", meaning: "essence" },
      { word: "町屋", reading: "まちや", meaning: "townhouse" },
      { word: "灯り", reading: "あかり", meaning: "light (lantern)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-10 — 羽化の朝 (A personal transformation)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-10",
    title: "羽化[うか]の朝[あさ]",
    titleReading: "うかのあさ",
    level: "N1",
    summary: "Approaching thirty and hollowed out by a stable career he never wanted, a man rediscovers his childhood dream of painting and learns to live as two selves at once.",
    estMinutes: 6,
    tags: ["personal", "transformation", "art"],
    body: [
      "三十歳[さんじゅうさい]を目前[もくぜん]にして、私[わたし]は自[みずか]らの人生[じんせい]を振[ふ]り返[かえ]らずにはいられなかった。都内[とない]の企業[きぎょう]で中堅[ちゅうけん]社員[しゃいん]として働[はたら]きながら、心[こころ]の奥[おく]には空洞[くうどう]が拡[ひろ]がるばかりだった。",
      "幼[おさな]い頃[ころ]、私[わたし]は画家[がか]になりたかった。しかし、父[ちち]の反対[はんたい]と経済的[けいざいてき]不安[ふあん]に押[お]され、安定[あんてい]した道[みち]を選[えら]んだ。その選択[せんたく]は、現実的[げんじつてき]であると自[みずか]ら納得[なっとく]させるに過[す]ぎなかった。",
      "ある夜[よる]、偶然[ぐうぜん]手[て]にした一冊[いっさつ]の詩集[ししゅう]が、私[わたし]の胸[むね]の火[ひ]を再[ふたた]び灯[とも]した。十年[じゅうねん]の沈黙[ちんもく]を破[やぶ]り、手[て]が動[うご]き出[だ]す感覚[かんかく]は、恥[は]ずかしさの至[いた]りでもあった。",
      "私[わたし]は会社[かいしゃ]の同僚[どうりょう]に打[う]ち明[あ]けた。奇妙[きみょう]な視線[しせん]を浴[あ]びたが、もはや気[き]にはならなかった。他人[たにん]の目[め]を気[き]にして生[い]きることの浅[あさ]ましさは、もはや耐[た]えがたく、極[きわ]まりないものに思[おも]えた。",
      "一方[いっぽう]、妻[つま]は静[しず]かに支[ささ]えてくれた。「あなたが描[えが]くもの、見[み]せて」と、その一言[ひとこと]が私[わたし]を突[つ]き動[うご]かした。無理解[むりかい]の冷[つめ]たさにひきかえ、その温[あたた]かさは身[み]に染[し]みた。",
      "私[わたし]は夜[よる]ごと画室[がしつ]に籠[こも]り、鏡[かがみ]の中[なか]の自分[じぶん]と向[む]き合[あ]った。最初[さいしょ]のうちは、下手[へた]な絵[え]を見[み]るに忍[しの]びなかったが、それでも筆[ふで]を止[と]めるわけにはいかなかった。",
      "とはいえ、転職[てんしょく]など勇気[ゆうき]は出[で]ず、会社[かいしゃ]に残[のこ]った。しかし、夜[よる]の私[わたし]は昼[ひる]の私[わたし]とは別人[べつじん]だった。その二[ふた]つの自己[じこ]の乖離[かいり]を、私[わたし]は受[う]け入[い]れ始[はじ]めた。",
      "人間[にんげん]たるもの、変容[へんよう]を恐[おそ]れてはならない。羽化[うか]の朝[あさ]は、唐突[とうとつ]に訪[おとず]れるものではない。日[ひ]々の苦闘[くとう]の末[すえ]、ようやく迎[むか]えるものなのだ。"
    ],
    translation: [
      "With thirty looming before me, I could not help but look back on my life. While working as a mid-career employee at a Tokyo firm, the void in my heart only kept widening.",
      "As a child, I had wanted to be a painter. But pressed by my father's opposition and economic anxiety, I chose a stable path. That choice was nothing more than convincing myself it was realistic.",
      "One night, a book of poetry I happened to pick up relit the fire in my chest. The sensation of breaking ten years of silence and my hands beginning to move was also the height of embarrassment.",
      "I confessed it to a colleague at work. I received strange looks, but it no longer mattered to me. The wretchedness of living concerned with others' eyes had become unbearable, supremely so.",
      "On the other hand, my wife supported me quietly. \"Show me what you paint\" — that single line moved me. In contrast to the coldness of incomprehension, that warmth seeped into me.",
      "Every night I shut myself in the studio and faced myself in the mirror. At first, I could not bear to look at my clumsy paintings, yet I could not bring myself to stop the brush.",
      "That said, I could not muster the courage to change jobs, and I remained at the company. But the me of the night was a different person from the me of the day. I began to accept that divergence between the two selves.",
      "As a human being, one must not fear transformation. The morning of emergence does not come suddenly. It is something one finally welcomes after the daily struggle."
    ],
    vocab: [
      { word: "羽化", reading: "うか", meaning: "emergence (eclosion)" },
      { word: "中堅", reading: "ちゅうけん", meaning: "mid-career" },
      { word: "空洞", reading: "くうどう", meaning: "void" },
      { word: "詩集", reading: "ししゅう", meaning: "poetry anthology" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "恥ずかしさ", reading: "はずかしさ", meaning: "embarrassment" },
      { word: "浅ましさ", reading: "あさましさ", meaning: "wretchedness" },
      { word: "無理解", reading: "むりかい", meaning: "incomprehension" },
      { word: "乖離", reading: "かいり", meaning: "divergence" },
      { word: "転職", reading: "てんしょく", meaning: "job change" },
      { word: "唐突", reading: "とうとつ", meaning: "sudden" },
      { word: "苦闘", reading: "くとう", meaning: "struggle" },
      { word: "変容", reading: "へんよう", meaning: "transformation" },
      { word: "視線", reading: "しせん", meaning: "gaze" },
      { word: "自己", reading: "じこ", meaning: "self" }
    ]
  }
];
