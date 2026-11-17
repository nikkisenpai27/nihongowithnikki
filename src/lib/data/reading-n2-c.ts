import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N2-level reading passages (r-n2-21 .. r-n2-30) with comprehension questions.

export const readingN2C: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n2-21 — The Japanese legal system
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-21",
    title: "日本[にほん]の法[ほう]体系[たいけい]と現代[げんだい]社会[しゃかい]",
    titleReading: "にほんのほうたいけいとげんだいしゃかい",
    level: "N2",
    summary: "An overview of Japan's legal system: its Meiji-era formation under French and German influence, the postwar constitutional overhaul under Allied occupation, the court hierarchy and three-tier review, the legal profession and law-school reform, the 2009 lay judge system, and the challenges of digitalization and AI in law.",
    estMinutes: 11,
    tags: ["law", "constitution", "judiciary", "policy"],
    body: [
      "日本[にほん]の法[ほう]体系[たいけい]は、明治[めいじ]維新[いしん]以降[いこう]の急[きゅう]速[そく]な近代化[きんだいか]の過程[かてい]で形成[けいせい]されたものである。江戸[えど]時代[じだい]までの法[ほう]は身分[みぶん]社会[しゃかい]を支[ささ]える役割[やくわり]を担[にな]っていたが、明治[めいじ]政府[せいふ]は欧[おう]米[べい]の法[ほう]制度[せいど]を大[おお]幅[はば]に取[と]り入[い]れた。なかでも、民法[みんぽう]は当初[とうしょ]フランス法[ほう]を、刑法[けいほう]はドイツ法[ほう]を範[はん]として策定[さくてい]された。こうして、西洋[せいよう]の法[ほう]思想[しそう]と日本[にほん]の伝統[でんとう]的[てき]な慣習[かんしゅう]とが混在[こんざい]する独自[どくじ]の体系[たいけい]が生[う]まれたのである。この制度[せいど]的[てき]な混血[こんけつ]は、現在[げんざい]に至[いた]るまで日本[にほん]の法[ほう]文化[ぶんか]に深[ふか]い影響[えいきょう]を与[あた]え続[つづ]けている。",
      "第二[だいに]次[じ]世界[せかい]大戦[たいせん]後[ご]、日本[にほん]の法[ほう]体系[たいけい]は根本[こんぽん]的[てき]な再[さい]構築[こうちく]を余儀[よぎ]なくされた。連合[れんごう]国[こく]軍[ぐん]の占領[せんりょう]下[か]で制定[せいてい]された日本[にほん]国[こく]憲法[けんぽう]は、国[くに]の主権[しゅけん]が国民[こくみん]に由来[ゆらい]するという国民主権[こくみんしゅけん]の原則[げんそく]を掲[かか]げた。また、戦争[せんそう]の放棄[ほうき]を宣言[せんげん]した第[だい]九[きゅう]条[じょう]は、世界[せかい]の憲法[けんぽう]のなかでも特[とく]異[い]なものとして注目[ちゅうもく]を集[あつ]めている。基本[きほん]的人権[じんけん]の尊重[そんちょう]を柱[はしら]に据[す]えたこの憲法[けんぽう]は、それまでの明治[めいじ]憲法[けんぽう]とは理念[りねん]の上[うえ]で決定的[けっていてき]に異[こと]なっていた。新[あたら]しい法[ほう]体系[たいけい]は、平和[へいわ]と民主[みんしゅ]主義[しゅぎ]を基調[きちょう]とする社会[しゃかい]を志向[しこう]していたのである。",
      "裁判[さいばん]所[しょ]の構造[こうぞう]も、新[あたら]しい秩序[ちつじょ]を反映[はんえい]している。最高[さいこう]裁判[さいばん]所[しょ]を頂点[ちょうてん]に、下[した]に高等[こうとう]裁判[さいばん]所[しょ]、地方[ちほう]裁判[さいばん]所[しょ]、簡易[かんい]裁判[さいばん]所[しょ]が置[お]かれている。三[さん]審[しん]制[せい]が採用[さいよう]されており、同一[どういつ]の事件[じけん]について三[みっ]度[ど]まで審理[しんり]を求[もと]めることができる。この制度[せいど]は、判決[はんけつ]の誤[あやま]りを補正[ほせい]し、法[ほう]解釈[かいしゃく]の統一[とういつ]を図[はか]ることを目的[もくてき]としている。また、家庭[かてい]裁判[さいばん]所[しょ]は家事[かじ]事件[じけん]や少年[しょうねん]事件[じけん]を専門[せんもん]に扱[あつか]い、裁判[さいばん]の専門[せんもん]化[か]が進[すす]んでいる点[てん]も注目[ちゅうもく]に値[あたい]する。",
      "法[ほう]曹[そう]三者[さんしゃ]——裁判[さいばん]官[かん]、検察[けんさつ]官[かん]、弁護[べんご]士[し]——は、日本[にほん]の司法[しほう]制度[せいど]を支[ささ]える三[みっ]つの柱[はしら]である。かつては、司法[しほう]試験[しけん]の合格[ごうかく]率[りつ]が極[きわ]めて低[ひく]く、少数[しょうすう]の精英[えいせい]が法[ほう]曹[そう]界[かい]を独占[どくせん]する状態[じょうたい]が続[つづ]いていた。しかし、二十一世紀[にじゅういっせいき]に入[はい]ってからは、司法[しほう]制度[せいど]改革[かいかく]が推進[すいしん]され、法科[ほうか]大学院[だいがくいん]が創設[そうせつ]された。これにより、法[ほう]曹[そう]人員[じんいん]の拡大[かくだい]が図[はか]られたものの、一方[いっぽう]で合格[ごうかく]者[しゃ]数[すう]の減少[げんしょう]や就職[しゅうしょく]難[なん]といった新[あたら]しい課題[かだい]も生[しょう]じている。",
      "特[とく]に注目[ちゅうもく]すべき改革[かいかく]は、2009年[ねん]に導入[どうにゅう]された裁判[さいばん]員[いん]制度[せいど]である。一般[いっぱん]市民[しみん]が刑事[けいじ]事件[じけん]の裁判[さいばん]に参加[さんか]するこの仕組[しく]みは、司法[しほう]への市民[しみん]参加[さんか]という理念[りねん]を実現[じつげん]するものであった。裁判[さいばん]員[いん]は裁判[さいばん]官[かん]と共[とも]に事実[じじつ]認定[にんてい]や量刑[りょうけい]を判断[はんだん]し、法[ほう]の運用[うんよう]に多様[たよう]な視点[してん]を取[と]り入[い]れる役割[やくわり]を果[はた]した。導入[どうにゅう]当初[とうしょ]は市民[しみん]の不安[ふあん]も大[おお]きかったが、次第[しだい]に定着[ていちゃく]しつつある。ただし、重[おも]い事件[じけん]の審理[しんり]を担[にな]う負担[ふたん]については、今後[こんご]も配慮[はいりょ]が続[つづ]けられなければならない。",
      "現在[げんざい]、日本[にほん]の法[ほう]制度[せいど]は新[あたら]しい課題[かだい]に直面[ちょくめん]している。デジタル化[か]の波[なみ]は法[ほう]の世界[せかい]にも押[お]し寄[よ]せ、契約[けいやく]や手続[てつづ]きのオンライン化[か]が進[すす]んでいる。しかし、法務[ほうむ]行政[ぎょうせい]のデジタル化[か]は他[た]の先進[せんしん]国[こく]に比[くら]べ依然[いぜん]として遅[おく]れており、紙[かみ]の書類[しょるい]に依存[いぞん]する文化[ぶんか]が根強[ねづよ]く残[のこ]っている。また、人工[じんこう]知能[ちのう]を活用[かつよう]した法[ほう]解釈[かいしゃく]支援[しえん]の試[こころ]みも始[はじ]まっているが、責任[せきにん]の所在[しょざい]や倫理[りんり]的[てき]な問題[もんだい]は未解決[みかいけつ]のままである。法[ほう]と技術[ぎじゅつ]の境界[きょうかい]は、今後[こんご]ますます曖昧[あいまい]になっていくに違[ちが]いない。",
      "日本[にほん]の法[ほう]体系[たいけい]は、歴史[れきし]の転換[てんかん]点[てん]ごとに再[さい]定義[ていぎ]されてきた。明治[めいじ]の近代化[きんだいか]、戦後[せんご]の民主化[みんしゅか]、そして現代[げんだい]のデジタル化[か]——その都度[つど]、法[ほう]は社会[しゃかい]の要請[ようせい]に応[おう]じて姿[すがた]を変[か]えてきた。しかし、何[なに]よりも大切[たいせつ]なのは、法[ほう]が単[たん]なる規則[きそく]の集[あつ]まりではなく、人[ひと]の尊厳[そんげん]を守[まも]るための枠組[わくぐ]みであるという認識[にんしき]である。法[ほう]は社会[しゃかい]を縛[しば]るものではなく、社会[しゃかい]を支[ささ]えるものである。この基本[きほん]的[てき]な理念[りねん]を見失[みうしな]わない限[かぎ]り、日本[にほん]の法[ほう]体系[たいけい]は今後[こんご]の変化[へんか]にも柔軟[じゅうなん]に対応[たいおう]できるはずである。"
    ],
    translation: [
      "Japan's legal system was shaped in the rapid modernization following the Meiji Restoration. The law under the Edo era had supported the status-based society, but the Meiji government took in large parts of Western legal systems. Civil law was initially drafted modeled on French law, and criminal law on German law. Thus was born a distinctive system in which Western legal philosophy and Japanese traditional custom coexisted. This institutional hybrid continues to exert a deep influence on Japan's legal culture to this day.",
      "After World War II, Japan's legal system was forced into fundamental reconstruction. The Constitution of Japan, enacted under the Allied occupation, set forth the principle of popular sovereignty, in which state power derives from the people. Article 9, which declares the renunciation of war, has drawn attention as a singular provision among the world's constitutions. Centered on respect for fundamental human rights, this constitution differed decisively in principle from the preceding Meiji Constitution. The new legal system aspired toward a society grounded in peace and democracy.",
      "The structure of the courts also reflects the new order. The Supreme Court stands at the apex, with high courts, district courts, and summary courts below. A three-tier system is adopted, allowing the same case to be heard up to three times. The system aims to correct erroneous judgments and to unify legal interpretation. In addition, family courts specialize in domestic and juvenile cases, and the specialization of adjudication is also worth noting.",
      "The three legal professions — judges, prosecutors, and lawyers — are the three pillars supporting Japan's judicial system. In the past, the bar exam pass rate was extremely low, and a small elite continued to dominate the legal world. However, since entering the twenty-first century, judicial reform has been promoted and law schools were established. This was meant to expand the legal workforce, but it also gave rise to new challenges such as a declining number of successful candidates and difficulty finding employment.",
      "A reform particularly worth noting is the lay judge system introduced in 2009. Under this system, ordinary citizens participate in criminal trials, realizing the principle of citizen participation in the judiciary. Lay judges, together with judges, make findings of fact and determine sentencing, bringing diverse perspectives into the operation of law. There was considerable citizen anxiety at the time of introduction, but it has gradually taken root. However, the burden of hearing serious cases must continue to be given consideration going forward.",
      "At present, Japan's legal system faces new challenges. The wave of digitalization has also reached the legal world, with contracts and procedures moving online. However, digitalization of legal administration still lags behind other advanced countries, and a paper-dependent culture persists. In addition, attempts to use AI to support legal interpretation have begun, but questions of responsibility and ethics remain unresolved. The boundary between law and technology will surely become ever more ambiguous.",
      "Japan's legal system has been redefined at each turning point in history. Modernization in Meiji, democratization after the war, and digitalization today — each time, the law has changed its form in response to the demands of society. But what is most important is the recognition that law is not merely a collection of rules, but a framework for protecting human dignity. Law is not something that constrains society but something that supports it. As long as this fundamental principle is not lost sight of, Japan's legal system should be able to respond flexibly to future change."
    ],
    questions: [
      {
        q: "According to the passage, which legal systems most influenced the Meiji-era civil and criminal codes?",
        choices: ["Civil law modeled on French law, criminal law on German law", "Civil law modeled on German law, criminal law on French law", "Both modeled on American common law", "Both modeled on Chinese law"],
        answerIndex: 0,
        explanation: "The text states 民法は当初フランス法を、刑法はドイツ法を範として策定された — civil law followed French law, criminal law followed German law."
      },
      {
        q: "What principle does Article 9 of the postwar Constitution declare?",
        choices: ["The principle of popular sovereignty", "The renunciation of war", "The separation of church and state", "The divine right of emperors"],
        answerIndex: 1,
        explanation: "Article 9 declares 戦争の放棄 (the renunciation of war) and is described as a singular provision among the world's constitutions."
      },
      {
        q: "What is the purpose of the three-tier court system in Japan?",
        choices: ["To limit appeals to a single hearing", "To correct erroneous judgments and unify legal interpretation", "To ensure all cases go to the Supreme Court", "To replace jury trials entirely"],
        answerIndex: 1,
        explanation: "The three-tier system (三審制) aims to 補正 and 図る統一 — correct erroneous judgments and unify legal interpretation."
      },
      {
        q: "What new challenge emerged after the introduction of law schools?",
        choices: ["Too many lawyers causing overcrowding in courts", "A decline in successful candidates and difficulty finding employment", "Closure of all district courts", "Elimination of the bar exam"],
        answerIndex: 1,
        explanation: "Although law schools were meant to expand the legal workforce, new challenges arose: 合格者数の減少や就職難 (a decline in successful candidates and difficulty finding employment)."
      },
      {
        q: "Which N2 grammar pattern expresses 'as long as the fundamental principle is not lost sight of, the system should respond flexibly'?",
        choices: ["〜に過ぎない", "〜限り (as long as)", "〜どころか", "〜次第"],
        answerIndex: 1,
        explanation: "理念を見失わない限り uses 〜限り meaning 'as long as'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-22 — A story about a natural disaster recovery
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-22",
    title: "荒[あ]波[なみ]を越[こ]えて: 復興[ふっこう]の記録[きろく]",
    titleReading: "あらなみをこえてふっこうのきろく",
    level: "N2",
    summary: "A first-person story of a fishing town struck by a giant tsunami — the night of loss, the slow clearing of debris by volunteers, the heated split over collective relocation, Mayor Watanabe's patient dialogue, the seawall debate, and ten years on, a town that lives with a 'never forget' monument.",
    estMinutes: 10,
    tags: ["disaster", "recovery", "story", "community"],
    body: [
      "その年[とし]の三月[さんがつ]、小[ちい]さな漁港[ぎょこう]の町[まち]は巨大[きょだい]な津波[つなみ]に襲[おそ]われた。午後[ごご]三時[さんじ]十八[じゅうはち]分[ふん]、地面[じめん]が激[はげ]しく揺[ゆ]れ始[はじ]めたかと思[おも]うと、間[ま]もなく黒[くろ]い壁[かべ]のような波[なみ]が町[まち]を呑[の]み込[こ]んだ。父[ちち]は港[みなと]で船[ふね]を守[まも]ろうとしていた。母[はは]は高台[たかだい]の公民[こうみん]館[かん]へ向[む]かって走[はし]っていた。私[わたし]は学校[がっこう]の屋上[おくじょう]から、何[なに]も出来[でき]ずにただ眺[なが]めていた。あの日[ひ]の光景[こうけい]は、今[いま]でも目[め]を閉[と]じると鮮[あざ]やかに蘇[よみがえ]る。",
      "津波[つなみ]が引[ひ]いた後[ご]、町[まち]は見[み]るも無残[むざん]な姿[すがた]となっていた。家[いえ]は根[ね]こそぎ流[なが]され、港[みなと]の漁船[ぎょせん]は数百[すうひゃく]メートル先[さき]の畑[はたけ]に突[つ]き刺[さ]さっていた。一夜[いちや]明[あ]けた避難[ひなん]所[しょ]は、家族[かぞく]を探[さが]す人[ひと]たちで溢[あふ]れていた。名[な]前[まえ]を呼[よ]ぶ声[こえ]が響[ひび]き、見[み]つからない家族[かぞく]を思[おも]う表情[ひょうじょう]は暗[くら]く沈[しず]んでいた。電[でん]気[き]も水[みず]も通[とお]らない中[なか]、人[ひと]たちはただ肩[かた]を寄[よ]せ合[あ]って寒[さむ]さを凌[しの]いだ。あの数日[すうじつ]のことは、言葉[ことば]にするのも辛[つら]いほどである。",
      "一[ひと]週[しゅう]間[かん]が過[す]ぎると、復興[ふっこう]への第一[だいいち]歩[ぽ]が始[はじ]まった。全国[ぜんこく]から集[あつ]まったボランティアが瓦礫[がれき]の撤去[てっきょ]に取[と]り掛[か]かった。自衛[じえい]隊[たい]の隊員[たいん]たちは、泥[どろ]に埋[う]もった道路[どうろ]を一[ひと]日[にち]中[じゅう]かけて片付[かたづ]けていた。私[わたし]も高校[こうこう]生[せい]ながら、手[て]伝[つだ]いに加[くわ]わった。瓦礫[がれき]の山[やま]の中[なか]から、見知[みし]らぬ人[ひと]の写真[しゃしん]や子[こ]供[ども]のおもちゃが見[み]つかるたびに、胸[むね]が締[し]め付[つ]けられた。しかし、誰[だれ]もが無言[むごん]で作業[さぎょう]を続[つづ]けた。言葉[ことば]よりも、行動[こうどう]が人[ひと]の心[こころ]を支[ささ]えることを、この時[とき]初[はじ]めて実感[じっかん]したのである。",
      "復興[ふっこう]計画[けいかく]の策定[さくてい]は、想像[そうぞう]以上[いじょう]に難航[なんこう]した。行政[ぎょうせい]が提案[ていあん]した「集団[しゅうだん]移転[いてん]」の計画[けいかく]に対[たい]し、古[ふる]い住民[じゅうみん]たちは強[つよ]い反発[はんぱつ]を示[しめ]した。海[うみ]を見[み]ながら生[い]きてきた漁師[りょうし]たちにとって、故郷[こきょう]の土地[とち]を離[はな]れることは死[し]を意味[いみ]するも同然[どうぜん]であった。一方[いっぽう]で、若[わか]い世代[せだい]は安全[あんぜん]を優先[ゆうせん]し、移転[いてん]を支持[しじ]した。町[まち]は意見[いけん]の対立[たいりつ]で二[ふた]つに割[わ]れた。こうした亀裂[きれつ]は、復興[ふっこう]という過程[かてい]が単[たん]なる物理[ぶつり]的[てき]な再建[さいけん]ではないことを物語[ものがた]っていた。",
      "町[まち]の復興[ふっこう]を束[たば]ねたのは、当時[とうじ]の町長[ちょうちょう]、渡辺[わたなべ]であった。彼[かれ]は毎日[まいにち]のように避難[ひなん]所[しょ]を回[まわ]り、住民[じゅうみん]の声[こえ]に耳[みみ]を傾[かたむ]けた。行政[ぎょうせい]の計画[けいかく]を押[お]し付[つ]けるのではなく、対話[たいわ]を通[とお]じて合意[ごうい]を形成[けいせい]しようとする姿勢[しせい]は、次第[しだい]に人[ひと]たちの心[こころ]を動[うご]かした。渡辺[わたなべ]は「復興[ふっこう]とは町[まち]の形[かたち]を作[つく]り直[なお]すことではない。人[ひと]と人[ひと]の繋[つな]がりを再[さい]び結[むす]ぶことだ」と繰[く]り返[かえ]し語[かた]った。その言葉[ことば]は、五年[ごねん]後[ご]に町[まち]が新[あたら]しい高台[たかだい]に移[うつ]り住[す]む決断[けつだん]を下[お]ろす際[さい]、人[ひと]たちの心[こころ]の支[ささ]えとなった。",
      "しかし、復興[ふっこう]の道[みち]は平坦[へいたん]ではなかった。巨大[きょだい]な防潮[ぼうちょう]堤[てい]の建設[けんせつ]を巡[めぐ]っては、全国[ぜんこく]的[てき]な議論[ぎろん]を呼[よ]んだ。「命[いのち]を守[まも]るためには必要[ひつよう]だ」という声[こえ]と、「海[うみ]と共[とも]に生[い]きてきた町[まち]の景観[けいかん]を壊[こわ]す」という声[こえ]がぶつかり合[あ]った。結局[けっきょく]、堤[てい]は建設[けんせつ]されたが、その壁[かべ]の向[む]こうに海[うみ]が見[み]えなくなったと嘆[なげ]く漁師[りょうし]も少[すく]なくない。復興[ふっこう]は、失[うしな]ったものを取[と]り戻[もど]すことではなく、新[あたら]しい形[かたち]で生[い]き直[なお]すことなのだということを、私[わたし]たちは身[み]をもって学[まな]んだ。",
      "今[いま]、あれから十年[じゅうねん]が経[た]った。新[あたら]しい町[まち]には若[わか]い家族[かぞく]が暮[く]らし、小[ちい]さな学校[がっこう]には子[こ]供[ども]たちの声[こえ]が響[ひび]いている。港[みなと]では新[あたら]しい漁船[ぎょせん]が沖[おき]へと出[で]ていく。しかし、町[まち]の一角[いっかく]には、津波[つなみ]の高[たか]さを示[しめ]す碑[いし]が静[しず]かに立[た]っている。「忘[わす]れるな」という短[みじか]い文字[もじ]が刻[きざ]まれたその碑[いし]の前[まえ]を通[とお]るたびに、私[わたし]は足[あし]を止[と]める。復興[ふっこう]は、物理的[ぶつりてき]な再建[さいけん]に留[とど]まらず、記憶[きおく]を継[つ]ぐという責務[せきむ]をも含[ふく]んでいる。荒[あ]波[なみ]を越[こ]えた町[まち]の人[ひと]たちは、未来[みらい]へ向[む]って歩[ある]き続[つづ]けている。"
    ],
    translation: [
      "That year, in March, the small fishing-port town was struck by a giant tsunami. At 3:18 p.m. the ground began to shake violently, and almost immediately a wave like a black wall swallowed the town. My father was at the harbor trying to protect the boat. My mother was running toward the community hall on the hill. From the school rooftop I could only watch, unable to do anything. The scene of that day still vividly comes back to me whenever I close my eyes.",
      "After the tsunami receded, the town lay in a pitiful state. Houses had been swept away by the roots, and fishing boats at the harbor were stuck into fields hundreds of meters away. At dawn the shelter overflowed with people searching for their families. Voices calling names echoed, and the expressions of those whose family could not be found were dark with grief. Without electricity or water, people huddled together to brave the cold. Those few days are still painful even to put into words.",
      "After a week passed, the first step toward recovery began. Volunteers gathered from across the country and started clearing debris. Self-Defense Force members spent entire days clearing roads buried in mud. Although only a high school student, I joined to help. Each time a stranger's photograph or a child's toy was found amid the piles of rubble, my chest tightened. Yet everyone silently continued the work. I first truly realized that action, more than words, supports people's hearts.",
      "Drafting the recovery plan was far more difficult than expected. The administration's proposal for collective relocation met strong resistance from older residents. For fishermen who had lived watching the sea, leaving the land of their hometown was tantamount to death. On the other hand, the younger generation prioritized safety and supported relocation. The town split in two over the disagreement. Such rifts showed that recovery was not merely a physical reconstruction.",
      "The one who bound the town's recovery together was its then-mayor, Watanabe. He visited the shelter almost daily, listening to the voices of the residents. Rather than imposing the administration's plan, his stance of building consensus through dialogue gradually moved people's hearts. Watanabe repeatedly said, Recovery is not about reshaping the form of the town. It is about retying the bonds between people. Those words became a support for people's hearts when, five years later, the town made the decision to relocate to a new hill.",
      "However, the path of recovery was not smooth. The construction of a giant seawall sparked nationwide debate. The voice saying it is necessary to protect lives clashed with the voice saying it destroys the landscape of a town that has lived with the sea. In the end, the seawall was built, but not a few fishermen lament that the sea can no longer be seen beyond the wall. We learned firsthand that recovery is not about recovering what was lost, but about living anew in a new form.",
      "Now, ten years have passed. Young families live in the new town, and small voices of children echo in the school. At the harbor, new fishing boats head out to sea. But in one corner of the town, a monument showing the height of the tsunami stands quietly. Each time I pass the monument, which is inscribed with the short characters Never forget, I stop. Recovery is not limited to physical reconstruction but includes the duty of passing on memory. The people of the town that crossed the wild waves keep walking toward the future."
    ],
    questions: [
      {
        q: "Where was the narrator when the tsunami struck?",
        choices: ["At the harbor with their father", "On the school rooftop watching", "At home with their mother", "At the community hall"],
        answerIndex: 1,
        explanation: "私は学校の屋上から、何も出来ずにただ眺めていた — the narrator watched from the school rooftop, unable to do anything."
      },
      {
        q: "What did the narrator first realize during the debris-clearing work?",
        choices: ["That volunteers were not helpful", "That action, more than words, supports people's hearts", "That recovery was impossible", "That the government would handle everything"],
        answerIndex: 1,
        explanation: "言葉よりも、行動が人の心を支えることを、この時初めて実感した — the narrator realized action supports hearts more than words."
      },
      {
        q: "Why did older residents oppose the collective relocation plan?",
        choices: ["Because they wanted a bigger seawall first", "Because leaving their hometown was tantamount to death for fishermen", "Because they wanted to move to a city instead", "Because they preferred to live alone"],
        answerIndex: 1,
        explanation: "For fishermen who lived watching the sea, leaving the land of their hometown was tantamount to death (故郷の土地を離れることは死を意味するも同然であった)."
      },
      {
        q: "What was Mayor Watanabe's approach to recovery?",
        choices: ["Imposing the administration's plan top-down", "Building consensus through dialogue with residents", "Refusing to listen to residents at all", "Leaving decisions entirely to the central government"],
        answerIndex: 1,
        explanation: "Rather than 押し付ける, Watanabe chose 対話を通じて合意を形成しようとする姿勢 — consensus through dialogue."
      },
      {
        q: "Which N2 grammar pattern is used to convey 'each time I pass the monument, I stop'?",
        choices: ["〜たびに (each time)", "〜限り", "〜に過ぎない", "〜うちに"],
        answerIndex: 0,
        explanation: "碑の前を通るたびに uses 〜たびに meaning 'each time / whenever'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-23 — The psychology of consumerism
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-23",
    title: "消費[しょうひ]の心理[しんり]: 買[か]うということ",
    titleReading: "しょうひのしんりかうということ",
    level: "N2",
    summary: "An analysis of why modern consumers buy more than they need: the dopamine reward loop, social comparison and conspicuous consumption amplified by social media, the marketing tactics that exploit these, the needs-versus-wants distinction, and the case for mindful consumption.",
    estMinutes: 9,
    tags: ["consumerism", "psychology", "marketing", "sustainability"],
    body: [
      "現代[げんだい]社会[しゃかい]において、消費[しょうひ]は単[たん]なる必要[ひつよう]を満[み]たす行為[こうい]以上[いじょう]の意味[いみ]を持[も]つようになった。私[わたし]たちは、買[か]うことによって自分[じぶん]を表現[ひょうげん]し、他者[たしゃ]との関係[かんけい]を構築[こうちく]する。持[も]っている物[もの]が、その人[ひと]の趣味[しゅみ]や価値観[かちかん]、さらには社会的[しゃかいてき]な地位[いち]までも物語[ものがた]る時代[じだい]である。ショッピングはもはや経済[けいざい]活動[かつどう]の枠[わく]を越[こ]え、一[ひと]種[しゅ]の文化[ぶんか]的[てき]な儀式[ぎしき]と化[か]している。なぜ私[わたし]たちは、これほどまでに買[か]うことに執着[しゅうちゃく]するのだろうか。",
      "消費[しょうひ]行動[こうどう]の背後[はいご]には、脳[のう]の報酬[ほうしゅう]系[けい]の働[はたら]きが深[ふか]く関[かか]わっている。新[あたら]しい物[もの]を手[て]に入[い]れた瞬間[しゅんかん]、脳[のう]内[ない]にドーパミンという神経[しんけい]伝達[でんたつ]物質[ぶっしつ]が放出[ほうしゅつ]され、快[かい]感[かん]を感[かん]じる。この快[かい]感[かん]は強[つよ]い反面[はんめん]、極[きわ]めて短[みじか]命[めい]であるため、私[わたし]たちは再[さい]び同[おな]じ快[かい]感[かん]を求[もと]めて次[つぎ]の買[か]い物[もの]へと向[む]かう。こうして形成[けいせい]された循環[じゅんかん]は、気[き]づけば買[か]うこと自体[じたい]が目的[もくてき]と化[か]し、本来[ほんらい]の必要[ひつよう]とは乖離[かいり]していく。消費[しょうひ]が止[や]まらなくなるのは、意志[いし]の弱[よわ]さの問題[もんだい]というより、脳[のう]の仕組[しく]みに根[ね]ざした現象[げんしょう]なのである。",
      "他者[たしゃ]との比較[ひかく]も、消費[しょうひ]を駆[か]り立[た]てる強[つよ]い動因[どういん]である。人間[にんげん]は社会的[しゃかいてき]な動物[どうぶつ]であり、他者[たしゃ]の目[め]を意識[いしき]せずにはいられない。友人[ゆうじん]が新[あたら]しいスマートフォンを買[か]い替[か]えたと知[し]ると、自分[じぶん]も新[あたら]しい機種[きしゅ]が欲[ほ]しくなる。ブランド品[ひん]を身[み]につけることで、他者[たしゃ]に自分[じぶん]の価値[かち]を伝[つた]えようとする心理[しんり]は、いわゆる「見[み]栄[え]消費[しょうひ]」と呼[よ]ばれる。SNSの普及[ふきゅう]は、こうした比較[ひかく]の範囲[はんい]を全世界[ぜんせかい]に拡大[かくだい]し、消費[しょうひ]の速度[そくど]を加速[かそく]させた。他者[たしゃ]の生活[せいかつ]がスクリーン上[じょう]に華[はな]やかに映[うつ]るほど、自分[じぶん]の日常[にちじょう]が貧[まず]しく見[み]えてしまうのである。",
      "企業[きぎょう]はこうした心理[しんり]を巧[たく]みに利用[りよう]する。期間[きかん]限定[げんてい]や数量[すうりょう]限定[げんてい]という表現[ひょうげん]は、消費者[しょうひしゃ]に「今[いま]買[か]わなければ逃[にが]す」という焦[あせ]りを抱[いだ]かせる。これにより、冷静[れいせい]な判断[はんだん]を経[へ]ずに買[か]うという衝動[しょうどう]的[てき]な行動[こうどう]が引[ひ]き起[お]こされる。また、無料[むりょう]の体験[たいけん]や試供品[しきょうひん]は、心理[しんり]学[がく]における「返報[へんぽう]の原理[げんり]」を利用[りよう]し、消費者[しょうひしゃ]に恩[おん]を感[かん]じさせることで購買[こうばい]を促[うなが]す。さらには、ポイントカードや会員[かいいん]制度[せいど]を通[つう]じて顧客[こきゃく]を囲[かこ]い込[こ]み、長期的[ちょうきてき]な消費[しょうひ]を設計[せっけい]する。気[き]づけば、私[わたし]たちは企業[きぎょう]の仕掛[しか]けた巧妙[こうみょう]な罠[わな]の中[なか]で消費[しょうひ]を続[つづ]けているのである。",
      "ここで問[と]われるべきは、「必要[ひつよう]」と「欲求[よっきゅう]」の違[ちが]いである。必要[ひつよう]とは生活[せいかつ]を維持[いじ]するために欠[か]かせないもの、例[たと]えば食[た]べ物[もの]や住[す]まいである。一方[いっぽう]、欲求[よっきゅう]はそれ以上[いじょう]の何[なに]か——心地[ここち]よさ、楽[たの]しさ、満足[まんぞく]感[かん]を求[もと]める心理[しんり]状態[じょうたい]である。現代[げんだい]の消費[しょうひ]社会[しゃかい]は、この二[ふた]つの境界線[きょうかいせん]を曖昧[あいまい]にする。本来[ほんらい]は欲求[よっきゅう]に過[す]ぎないものが、あたかも必要[ひつよう]であるかのように錯覚[さっかく]させられることが多[おお]い。広告[こうこく]の巧[たく]みな言葉[ことば]は、しばしばその錯覚[さっかく]の形成[けいせい]に一役[いちやく]買[か]っている。",
      "過剰[かじょう]な消費[しょうひ]は、個[こ]人[じん]と社会[しゃかい]の双方[そうほう]に重[おも]い代償[だいしょう]を求[もと]める。個[こ]人[じん]レベルでは、クレジットカードの乱[みだ]用[よう]による多重[ちゅうじゅう]債務[さいむ]が深刻[しんこく]な問題[もんだい]となっている。若[わか]い世代[せだい]の借金[しゃっきん]は増加[ぞうか]する一方[いっぽう]で、返済[へんさい]の目途[めど]が立[た]たないケースも珍[めずら]しくない。社会[しゃかい]レベルでは、過剰[かじょう]生産[せいさん]と廃棄[はいき]が環境[かんきょう]破壊[はかい]を加速[かそく]させている。地球[ちきゅう]の資源[しげん]には限[かぎ]りがあるにもかかわらず、私[わたし]たちは限界[げんかい]を超[こ]えて消費[しょうひ]を続[つづ]けている。このままでは、いずれ限界[げんかい]が訪[おとず]れることは避[さ]けられない。",
      "この閉塞[へいそく]状況[じょうきょう]を打[う]ち破[やぶ]る鍵[かぎ]は、「意識[いしき]的[てき]な消費[しょうひ]」の実践[じっせん]にある。買[か]う前[まえ]に、それが本当[ほんとう]に必要[ひつよう]かを問[と]い直[なお]す癖[くせ]をつける。広告[こうこく]の言葉[ことば]に流[なが]されず、自分[じぶん]の価値観[かちかん]に合[あ]った選択[せんたく]を心[こころ]がける。モノを持[も]つことよりも、経験[けいけん]を積[つ]むことに価値[かち]を見出[みいだ]す生[い]き方[かた]も、近年[きんねん]注目[ちゅうもく]を集[あつ]めている。消費[しょうひ]の心理[しんり]を理解[りかい]した上[うえ]で、それに支配[しはい]されない自[みずか]らの選択[せんたく]を築[きず]くこと。それこそが、現代[げんだい]社会[しゃかい]を生[い]き抜[ぬ]くための知恵[ちえ]と言[い]えるだろう。"
    ],
    translation: [
      "In modern society, consumption has come to hold meaning beyond mere satisfaction of needs. We express ourselves through buying and construct relationships with others. In this era, what one owns speaks of their tastes, values, and even social status. Shopping has transcended the framework of economic activity and become a kind of cultural ritual. Why, then, are we so attached to buying?",
      "Behind consumer behavior lies the deep workings of the brain's reward system. The moment we acquire something new, a neurotransmitter called dopamine is released in the brain, producing a sense of pleasure. This pleasure is strong but extremely short-lived, so we seek the same pleasure again and head for the next purchase. The cycle thus formed turns buying itself into the purpose, drifting away from genuine need. The reason consumption cannot be stopped is less a matter of weak will than a phenomenon rooted in the brain's mechanism.",
      "Comparison with others is also a strong drive that spurs consumption. Humans are social animals and cannot help being conscious of others' eyes. Upon learning that a friend has bought a new smartphone, one begins to want a new model too. The psychology of trying to communicate one's value to others by wearing brand-name items is called so-called conspicuous consumption. The spread of social media has expanded the scope of such comparison to the whole world, accelerating the speed of consumption. The more splendidly others' lives appear on the screen, the poorer one's own daily life seems.",
      "Companies skillfully exploit this psychology. Expressions such as limited time and limited quantity make consumers feel the anxiety that if I don't buy now I'll miss out. This triggers impulsive purchases without calm judgment. Free trials and samples also use the psychological principle of reciprocity, making consumers feel obliged and prompting purchase. In addition, point cards and membership programs fence in customers, designing long-term consumption. Before we realize it, we are consuming within clever traps laid by companies.",
      "What should be questioned here is the difference between needs and wants. Needs are things indispensable for maintaining life, such as food and shelter. Wants, on the other hand, are psychological states that seek something more — comfort, pleasure, and satisfaction. Modern consumer society blurs the boundary between these two. What is originally only a want is often made to feel as if it were a need. The clever wording of advertisements often plays a part in forming that illusion.",
      "Excessive consumption extracts a heavy price from both individuals and society. At the individual level, the misuse of credit cards has made multiple debt a serious problem. Debt among the young keeps growing, and cases with no prospect of repayment are not rare. At the societal level, excess production and disposal are accelerating environmental destruction. Although the earth's resources are finite, we continue to consume beyond limits. If this continues, a reckoning is unavoidable sooner or later.",
      "The key to breaking through this sense of stagnation lies in the practice of conscious consumption. Build a habit of asking, before buying, whether it is truly necessary. Do not be swept along by advertising language, but make choices that align with your own values. A lifestyle that finds value in accumulating experiences rather than possessions has also drawn attention in recent years. Understanding the psychology of consumption and then building one's own choices that are not dominated by it — that is the wisdom needed to live through modern society."
    ],
    questions: [
      {
        q: "According to the passage, why is consumption so hard to stop?",
        choices: ["Because shopping is required by law", "Because it is rooted in the brain's reward mechanism, more than weak will", "Because prices keep falling", "Because there are no alternatives to buying"],
        answerIndex: 1,
        explanation: "The text says 消費が止まらなくなるのは、意志の弱さの問題というより、脳の仕組みに根ざした現象 — rooted in the brain's mechanism, not weak will."
      },
      {
        q: "How has social media affected consumption?",
        choices: ["It has reduced consumption globally", "It has expanded comparison worldwide and accelerated consumption", "It has made people stop comparing", "It has no measurable effect"],
        answerIndex: 1,
        explanation: "SNSの普及は、こうした比較の範囲を全世界に拡大し、消費の速度を加速させた — social media expanded comparison worldwide and accelerated consumption."
      },
      {
        q: "Which psychological principle do free samples exploit?",
        choices: ["The principle of scarcity", "The principle of reciprocity", "The principle of consensus", "The principle of authority"],
        answerIndex: 1,
        explanation: "Free trials and samples use 返報の原理 (the principle of reciprocity), making consumers feel obliged and prompting purchase."
      },
      {
        q: "What is the difference between needs and wants as described?",
        choices: ["Needs are about pleasure; wants are about survival", "Needs are indispensable for life; wants seek additional satisfaction", "Needs are always material; wants are always spiritual", "There is no difference"],
        answerIndex: 1,
        explanation: "Needs (必要) are indispensable for maintaining life; wants (欲求) seek additional comfort, pleasure, and satisfaction."
      },
      {
        q: "Which N2 grammar pattern expresses 'it is no more than a want'?",
        choices: ["〜に過ぎない (merely / no more than)", "〜限り", "〜どころか", "〜次第"],
        answerIndex: 0,
        explanation: "本来は欲求に過ぎないもの uses 〜に過ぎない meaning 'merely / no more than'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-24 — Japanese architecture and sustainability
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-24",
    title: "木[き]と紙[かみ]の建築[けんちく]: 持続[じぞく]可能[かのう]な未来[みらい]",
    titleReading: "きとかみのけんちくじぞくかのうなみらい",
    level: "N2",
    summary: "A study of how traditional Japanese wood-and-paper architecture — flexible against earthquakes, harmonized with nature, designed for dismantling and reuse — was displaced by concrete in the growth era and is now being reborn through engineered mass timber and high-rise wood construction as a model for sustainable architecture.",
    estMinutes: 10,
    tags: ["architecture", "sustainability", "tradition", "environment"],
    body: [
      "日本[にほん]の伝統[でんとう]的[てき]な建築[けんちく]は、木[き]と紙[かみ]という自然[しぜん]の素材[そざい]を基調[きちょう]として発達[はったつ]してきた。四方[しほう]を海[うみ]に囲[かこ]まれ、森林[しんりん]資源[しげん]に恵[めぐ]まれたこの島国[しまぐに]では、木材[もくざい]は最[もっと]も身近[みぢか]な建築[けんちく]材[ざい]であった。神社[じんじゃ]や仏閣[ぶつかく]から町屋[まちや]に至[いた]るまで、木材[もくざい]の温[ぬく]もりと紙[かみ]の柔[やわ]らかさが空間[くうかん]を形作[かたちづく]ってきた。襖[ふすま]や障子[しょうじ]という可動[かどう]式[しき]の間仕切[まじきり]は、空間[くうかん]を自由[じゆう]に変[か]化[か]させる仕掛[しか]けであり、日本[にほん]の気候[きこう]と生活[せいかつ]様式[ようしき]に深[ふか]く合致[がっち]していた。素材[そざい]の選択[せんたく]一[ひと]つにも、自然[しぜん]と共存[きょうそん]する知恵[ちえ]が込[こ]められていたのである。",
      "伝統[でんとう]建築[けんちく]の最大[さいだい]の特徴[とくちょう]は、自然[しぜん]と調和[ちょうわ]しようとする姿勢[しせい]である。重[おも]い石[いし]や煉瓦[れんが]で自然[しぜん]に抗[あらが]うのではなく、木[き]の柔[やわ]らかさを活[い]かして風[かぜ]や地震[じしん]を受[う]け流[なが]す。地震[じしん]が多[おお]い日本[にほん]において、柔[やわ]構造[こうぞう]の木造[もくぞう]建築[けんちく]は、むしろ安全[あんぜん]性[せい]を高[たか]める工夫[くふう]であった。また、軒[のき]を深[ふか]く出[だ]すことで、夏[なつ]の日差[ひざ]しを遮[さえぎ]り、雨[あめ]の侵[おか]食[しょく]を防[ふせ]ぐ。庭[にわ]を借景[しゃけい]として取[と]り込[こ]み、内[うち]と外[そと]の境界[きょうかい]を曖昧[あいまい]にする設計[せっけい]は、自然[しぜん]を拒絶[きょぜつ]するのではなく、取[と]り込[こ]もうとする哲学[てつがく]を反映[はんえい]している。",
      "さらに注目[ちゅうもく]すべきは、日本[にほん]の伝統[でんとう]建築[けんちく]が「解体[かいたい]と再[さい]利用[りよう]」を前提[ぜんてい]として設計[せっけい]されてきた点[てん]である。神社[じんじゃ]の式年[しきねん]遷宮[せんぐう]は、定期的[ていきてき]に社殿[しゃでん]を新[あたら]しくする儀式[ぎしき]であり、木材[もくざい]の交換[こうかん]を通[つう]じて技術[ぎじゅつ]と記憶[きおく]を次[つぎ]の世代[せだい]へ継承[けいしょう]する仕組[しく]みであった。町屋[まちや]の梁[はり]や柱[はしら]は、解体[かいたい]後[ご]に別[べつ]の建物[たてもの]に再利用[さいりよう]されることが多[おお]く、現代[げんだい]のサステナビリティの考[かんが]えに通[つう]じる循環[じゅんかん]型[がた]の資源[しげん]利用[りよう]が実践[じっせん]されていた。自然[しぜん]から頂[いただ]いたものを、再[さい]び自然[しぜん]に返[かえ]すという循環[じゅんかん]の思想[しそう]こそが、日本[にほん]建築[けんちく]の核心[かくしん]である。",
      "しかし、近代化[きんだいか]の波[なみ]は日本[にほん]の建築[けんちく]を大[おお]きく変[か]えた。明治[めいじ]以降[いこう]、西洋[せいよう]の建築[けんちく]技術[ぎじゅつ]が導入[どうにゅう]され、鉄[てつ]とコンクリートが主役[しゅやく]の座[ざ]に就[つ]いた。高度[こうど]経済[けいざい]成長[せいちょう]期[き]には、効率[こうりつ]的[てき]な建設[けんせつ]が優先[ゆうせん]され、画一[かいつ]的[てき]なビルが都市[とし]を埋[う]め尽[つ]くした。木造[もくぞう]建築[けんちく]は古[ふる]くて非効率[ひこうりつ]なものと見[み]なされ、職人[しょくにん]の技術[ぎじゅつ]は衰退[すいたい]の一途[いっと]を辿[たど]った。その結果[けっか]、都市[とし]の景観[けいかん]は失[うしな]われ、夏[なつ]には熱[ねつ]を蓄[たくわ]えたコンクリートの壁[かべ]が熱[ねつ]帯[たい]夜[や]を生[う]み出[だ]すという皮肉[ひにく]な結果[けっか]を招[まね]いた。",
      "近年[きんねん]、環境[かんきょう]意識[いしき]の高[たか]まりと共[とも]に、木材[もくざい]の見直[みなお]しが進[すす]んでいる。木[き]は成長[せいちょう]過程[かてい]で二酸化[にさんか]炭素[たんそ]を吸収[きゅうしゅう]するため、コンクリートに比[くら]べ環境[かんきょう]負荷[ふか]が低[ひく]い。さらに、国産[こくさん]材[ざい]の活用[かつよう]は林業[りんぎょう]の振興[しんこう]にも繋[つな]がり、地方[ちほう]経済[けいざい]の活性化[かっせいか]にも寄与[きよ]する。建築[けんちく]家[か]たちは、伝統[でんとう]の美意識[びいしき]と現代[げんだい]の技術[ぎじゅつ]を融合[ゆうごう]させた新[あたら]しい木造[もくぞう]建築[けんちく]の可能性[かのうせい]を追求[ついきゅう]し始[はじ]めた。ただし、防火[ぼうか]基準[きじゅん]や耐震[たいしん]性[せい]の課題[かだい]も依然[いぜん]として残[のこ]されており、解決[かいけつ]すべき問題[もんだい]は少[すく]なくない。",
      "その解決[かいけつ]の鍵[かぎ]を握[にぎ]るのが、集成[しゅうせい]木材[もくざい]や大断面[だいだんめん]木造[もくぞう]といった新[あたら]しい技術[ぎじゅつ]である。これらは木材[もくざい]の強度[きょうど]を飛躍[ひやく]的[てき]に高[たか]め、高層[こうそう]建築[けんちく]への応用[おうよう]を可能[かのう]にした。実際[じっさい]、国内[こくない]では木造[もくぞう]の高層[こうそう]ビルが建設[けんせつ]され始[はじ]めており、その数[かず]は年[ねんねん]々増加[ぞうか]している。また、木[き]の香[かお]りや触感[しょっかん]が人[ひと]の心理[しんり]に与[あた]える好[こう]影響[えいきょう]も研究[けんきゅう]されており、木材[もくざい]を積極[せっきょく]的[てき]に取[と]り入[い]れた空間[くうかん]は健康[けんこう]面[めん]でも優[すぐ]れていることが分[わ]かってきた。技術[ぎじゅつ]と感性[かんせい]の融合[ゆうごう]は、新[あたら]しい建築[けんちく]文化[ぶんか]を生[う]み出[だ]しつつある。",
      "日本[にほん]の建築[けんちく]が未来[みらい]に向[む]けて持続[じぞく]可能[かのう]な道[みち]を歩[ある]むためには、伝統[でんとう]と革新[かくしん]の両輪[りょうりん]をうまく回[まわ]す必要[ひつよう]がある。祖先[そぞ]が培[つちか]った自然[しぜん]との共生[きょうせい]の知恵[ちえ]を見直[みなお]しつつ、最新[さいしん]の技術[ぎじゅつ]でその可能性[かのうせい]を拡張[かくちょう]する。木[き]と紙[かみ]の文化[ぶんか]は、決[けっ]して過去[かこ]の遺物[いぶつ]ではない。それは、現代[げんだい]の環境[かんきょう]問題[もんだい]に応答[おうとう]する一[ひと]つの答[こた]えになり得[え]る。素材[そざい]の本質[ほんしつ]を見極[みきわ]め、長[なが]く使[つか]い続[つづ]けられる建築[けんちく]を目指[めざ]すこと。それこそが、次[つぎ]の世代[せだい]に誇[ほこ]れる日本[にほん]の建築[けんちく]の姿[すがた]であろう。"
    ],
    translation: [
      "Traditional Japanese architecture developed based on natural materials, primarily wood and paper. In this island country surrounded by sea and blessed with forest resources, wood was the most familiar building material. From shrines and temples to townhouses, the warmth of wood and the softness of paper have shaped spaces. Movable partitions such as fusuma and shoji were devices that let spaces change freely, deeply matching Japan's climate and lifestyle. Even in the choice of materials, the wisdom of coexisting with nature was embedded.",
      "The greatest feature of traditional architecture is its attitude of seeking harmony with nature. Rather than resisting nature with heavy stone or brick, it uses the softness of wood to let wind and earthquakes pass. In earthquake-prone Japan, flexible wooden architecture was rather an effort to enhance safety. Deep eaves shade the summer sun and prevent rain erosion. Designs that take gardens in as borrowed scenery and blur the boundary between inside and outside reflect a philosophy that does not reject nature but takes it in.",
      "What is further noteworthy is that traditional Japanese architecture has been designed assuming dismantling and reuse. The periodic rebuilding of shrines, Shikinen Sengu, is a ritual in which the building is regularly renewed, and through the replacement of timbers, technology and memory are passed to the next generation. Beams and pillars of townhouses were often reused in other buildings after dismantling, and the circular use of resources was practiced, which leads to the modern concept of sustainability. The thought of returning to nature what was received from nature is the core of Japanese architecture.",
      "However, the wave of modernization greatly changed Japanese architecture. Since the Meiji era, Western architectural technology was introduced, and iron and concrete took the lead. During the high-growth era, efficient construction was prioritized, and uniform buildings filled cities. Wooden architecture was considered old and inefficient, and craftsmen's skills declined steadily. As a result, the urban landscape was lost, and ironically, concrete walls that store heat in summer produced tropical nights.",
      "In recent years, alongside rising environmental awareness, wood has been reconsidered. Because wood absorbs carbon dioxide during growth, its environmental load is lower than concrete. Moreover, the use of domestic timber leads to the promotion of forestry and contributes to the revitalization of regional economies. Architects have begun to pursue the possibilities of new wooden architecture that fuses traditional aesthetics with modern technology. However, issues of fireproofing standards and seismic resistance remain, and there are no few problems to be solved.",
      "The key to those solutions lies in new technologies such as engineered wood and large-section timber. These dramatically increase the strength of wood and enable its application to high-rise buildings. In fact, wooden high-rises have begun to be built in Japan, and the number is increasing year by year. In addition, the positive effects of the scent and feel of wood on human psychology are being studied, and it has been found that spaces that actively incorporate wood are also superior in health aspects. The fusion of technology and sensibility is producing a new architectural culture.",
      "For Japanese architecture to walk a sustainable path toward the future, it must turn both wheels of tradition and innovation well. Reconsider the wisdom of coexisting with nature nurtured by ancestors while expanding its possibilities with the latest technology. The culture of wood and paper is by no means a relic of the past. It can become one answer to modern environmental problems. To discern the essence of materials and aim for architecture that can be used for a long time — that is the form of Japanese architecture that can be proud to the next generation."
    ],
    questions: [
      {
        q: "Why did traditional Japanese architecture use wood and paper as primary materials?",
        choices: ["Because Japan had no stone or clay", "Because Japan was forested and wood was the most familiar material", "Because foreign materials were banned", "Because wood was the cheapest to import"],
        answerIndex: 1,
        explanation: "The text notes 森林資源に恵まれたこの島国 where 木材は最も身近な建築材 — Japan was forested and wood was the most familiar material."
      },
      {
        q: "What design philosophy does the deep eave reflect?",
        choices: ["One that resists nature with heavy materials", "One that takes in nature rather than rejecting it", "One that maximizes sunlight in winter only", "One that ignores climate entirely"],
        answerIndex: 1,
        explanation: "The deep eave shades the summer sun and prevents rain erosion, reflecting a philosophy of taking in nature rather than rejecting it (自然を取り込もうとする哲学)."
      },
      {
        q: "What does Shikinen Sengu at shrines exemplify?",
        choices: ["The abandonment of old structures", "A circular system of dismantling, reuse, and transmission of technology", "A purely religious ritual with no practical function", "A periodic tax event"],
        answerIndex: 1,
        explanation: "Shikinen Sengu is a ritual of periodic rebuilding through which technology and memory are passed to the next generation via replacement of timbers (技術と記憶を次の世代へ継承する仕組み)."
      },
      {
        q: "What problem arose during high-growth-era concrete-dominated urbanization?",
        choices: ["Cities became too quiet", "Tropical nights occurred as concrete stored heat", "Forests expanded into cities", "Earthquakes stopped"],
        answerIndex: 1,
        explanation: "Ironically, concrete walls storing heat in summer produced tropical nights (熱を蓄えたコンクリートの壁が熱帯夜を生み出す)."
      },
      {
        q: "Which N2 grammar pattern expresses 'it can become one answer'?",
        choices: ["〜に過ぎない", "〜得る (can / is possible)", "〜限り", "〜次第"],
        answerIndex: 1,
        explanation: "一つの答えになり得る uses 〜得る meaning 'can / is possible'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-25 — A story about a teacher's dedication
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-25",
    title: "教壇[きょうだん]の灯[あか]り: 一[ひと]人[り]の教師[きょうし]の物語[ものがたり]",
    titleReading: "きょうだんのあかりひとりのきょうしのものがたり",
    level: "N2",
    summary: "A story about Mori, a veteran teacher transferred to a remote village school threatened with closure. Through lessons tied to local history, a 'walk at the children's pace' philosophy, and decades of patient work, his former students carry his methods into medicine, agriculture, and teaching — and bring their own children to him in turn.",
    estMinutes: 10,
    tags: ["education", "story", "rural", "mentorship"],
    body: [
      "山[やま]深[ふか]い村[むら]に、森[もり]という教師[きょうし]が赴任[ふにん]してきたのは、三十[さんじゅう]年[ねん]前[まえ]の春[はる]のことであった。都会[とかい]の学校[がっこう]で長年[ながねん]教鞭[きょうべん]を執[と]った後[ご]の、異例[れい]の転任[てんにん]であった。村[むら]の小[ちい]さな中学校[ちゅうがっこう]には、生徒[せいと]が二十[にじゅう]人[にん]ほどしかいなかった。過疎[かそ]化[か]と少子[しょうし]化[か]で、生徒[せいと]の数[かず]は年[ねんねん]々減[へ]り続[つづ]けていた。森[もり]が着任[ちゃくにん]した日[ひ]、校長[こうちょう]は彼[かれ]にこう告[つ]げた。「この村[むら]の学校[がっこう]は、あと数年[すうねん]で存続[そんぞく]の危機[きき]を迎[むか]えるかもしれません。しかし、残[のこ]された子[こ]供[ども]たちには、誰[だれ]かが教[おし]え続[つづ]けなければなりません。」森[もり]は静[しず]かに頷[うなず]いた。その言葉[ことば]の重[おも]みを、彼[かれ]は誰[だれ]よりも深[ふか]く理解[りかい]していた。",
      "しかし、現実[げんじつ]は厳[きび]しかった。生徒[せいと]たちは学[まな]ぶ意欲[いよく]を失[うしな]っていた。授業[じゅぎょう]中[ちゅう]に寝[ね]る者[もの]、窓[まど]の外[そと]を眺[なが]める者[もの]、教科書[きょうかしょ]すら開[あ]けない者[もの]が大半[たいはん]であった。森[もり]が熱[ねつ]を込[こ]めて語[かた]っても、その言葉[ことば]は空[そら]に消[き]えるように響[ひび]かなかった。ある日[ひ]、森[もり]は校内[こうない]の階段[かいだん]で、一人[ひとり]の生徒[せいと]が涙[なみだ]を拭[ぬぐ]っているのを見[み]かけた。理由[りゆう]を尋[たず]ねると、その生徒[せいと]は家[いえ]が農業[のうぎょう]を辞[や]めようとしており、将来[しょうらい]への不安[ふあん]で胸[むね]を痛[いた]めていると言[い]った。森[もり]はその時[とき]気[き]づいた。子[こ]供[ども]たちは学[まな]びたくないのではない。学[まな]ぶことに意味[いみ]を見出[みいだ]せないのだと。",
      "森[もり]は授業[じゅぎょう]のやり方[かた]を変[か]える決意[けつい]をした。教科書[きょうかしょ]の内容[ないよう]を、子[こ]供[ども]たちの暮[く]らす村[むら]の歴史[れきし]と結[むす]び付[つ]け始[はじ]めたのである。村[むら]の古[ふる]い神社[じんじゃ]の起源[きげん]、先祖[せんぞ]が開拓[かいたく]した畑[はたけ]の変遷[へんせん]、かつてこの地[ち]で栄[さか]えた炭坑[たんこう]の記憶[きおく]——これらを題材[だいざい]にして、歴史[れきし]や社会[しゃかい]の授業[じゅぎょう]を再構築[さいこうちく]した。最初[さいしょ]は冷[つめ]たい反応[はんのう]だった生徒[せいと]たちも、自分[じぶん]たちの足元[あしもと]の歴史[れきし]に触[ふ]れるうちに、次第[しだい]に目[め]を輝[かがや]かせ始[はじ]めた。村[むら]の古老[ころう]に話[はなし]を聞[き]く課題[かだい]を課[か]したところ、子[こ]供[ども]たちは祖父[そふ]や祖母[そぼ]と初[はじ]めて深[ふか]い対話[たいわ]を交[か]わすようになった。",
      "森[もり]は子[こ]供[ども]たちが自分[じぶん]で考[かんが]える力[ちから]を重[おも]んじた。答[こた]えを教[おし]えるのではなく、問[とい]を立[た]てる方法[ほうほう]を教[おし]えた。ある生徒[せいと]が「なぜこの村[むら]は過疎[かそ]化[か]したのですか」と尋[たず]ねた時[とき]、森[もり]は即座[そくざ]に答[こた]えず、共[とも]に資料[しりょう]を調[しら]べ始[はじ]めた。地[ち]図[ず]と統計[とうけい]を並[なら]べ、考[かんが]え得[え]る原因[げんいん]を挙[あ]げた上[うえ]で、生徒[せいと]自身[じしん]に結論[けつろん]を導[みちび]かせた。このやり方[かた]は時間[じかん]がかかるが、子[こ]供[ども]たちの考[かんが]える力[ちから]を根[ね]底[こてい]から養[やしな]うものだった。森[もり]の授業[じゅぎょう]を受[う]けた生徒[せいと]たちは、進[すす]んで問[とい]を立[た]て、自[みずか]ら調[しら]べるようになっていった。",
      "森[もり]の哲学[てつがく]は、「子[こ]供[ども]の歩[ある]く速[はや]さで歩[ある]く」という一言[ひとこと]に要約[ようやく]される。全員[ぜんいん]を同[おな]じ速度[そくど]で進[すす]める必要[ひつよう]はない。早[はや]く理解[りかい]する子[こ]もいれば、時間[じかん]をかけてようやく腑[ふ]に落[お]ちる子[こ]もいる。どちらの学[まな]びも同[おな]じように尊[とうと]いと森[もり]は考[かんが]えた。彼[かれ]は一人[ひとり]一人[ひとり]の生徒[せいと]に応[おう]じた対応[たいおう]を心[こころ]がけ、成績[せいせき]だけでなく、その子[こ]の努力[どりょく]と成長[せいちょう]の過程[かてい]を評価[ひょうか]した。競争[きょうそう]ではなく協働[きょうどう]を重[おも]んじ、互[たが]いに支[ささ]え合[あ]う学級[がっきゅう]の風土[ふうど]を作[つく]り上[あ]げた。子[こ]供[ども]たちは森[もり]の教室[きょうしつ]で、安心[あんしん]して失敗[しっぱい]できることを学[まな]んだ。",
      "十[じゅう]年[ねん]が経[た]ち、村[むら]の中学校[ちゅうがっこう]は存続[そんぞく]を続[つづ]けていた。かつて森[もり]に教[おし]えられた生徒[せいと]たちは、都会[とかい]で働[はたら]く者[もの]、地元[じもと]で農業[のうぎょう]を継[つ]ぐ者[もの]、教師[きょうし]になった者[もの]など、様[さまざま]々な道[みち]を歩[ある]んでいた。ある卒業生[そつぎょうせい]は医者[いしゃ]になり、遠[とお]い病院[びょういん]から森[もり]に手紙[てがみ]を送[おく]ってきた。「先生[せんせい]の授業[じゅぎょう]で学[まな]んだ『問[とい]を立[た]てる力[ちから]』が、診察[しんさつ]の毎日[まいにち]に生[い]きている」と書[か]かれていた。別[べつ]の卒業生[そつぎょうせい]は地元[じもと]に戻[もど]り、村[むら]の歴史[れきし]を継承[けいしょう]する活動[かつどう]を続[つづ]けている。教[おし]えるという行為[こうい]の影響[えいきょう]は、教室[きょうしつ]の枠[わく]を遥[はる]かに越[こ]えて広[ひろ]がっていくのである。",
      "定年[ていねん]を迎[むか]えた森[もり]は、村[むら]に残[のこ]ることを選[えら]んだ。彼[かれ]は今[いま]、退任[たいにん]後[ご]も地域[ちいき]の子[こ]供[ども]たちに勉強[べんきょう]を教[おし]え、村[むら]の歴史[れきし]を記録[きろく]し続[つづ]けている。教壇[きょうだん]に立[た]たなくなっても、彼[かれ]の役割[やくわり]は終[お]わらない。ある日[ひ]、昔[むかし]の生徒[せいと]が自分[じぶん]の子[こ]供[ども]を連[つ]れて森[もり]を訪[たず]ねてきた。「私[わたし]もこの子[こ]に、先生[せんせい]から教[おし]わったことを伝[つた]えたい」とその生徒[せいと]は言[い]った。森[もり]は静[しず]かに微笑[ほほえ]んだ。教[おし]えるという行為[こうい]の灯火[あか]りは、世代[せだい]を越[こ]えて灯[とも]り続[つづ]ける。一[ひと]人[り]の教師[きょうし]が残[のこ]せるものは、点数[てんすう]ではなく、人[ひと]の心[こころ]に刻[きざ]まれる灯火[あか]りである。その灯火[あか]りは、決[けっ]して消[き]えることはない。"
    ],
    translation: [
      "It was thirty years ago in spring that a teacher named Mori arrived in a mountain-ringed village. It was an unusual transfer after he had long taught at an urban school. The small village middle school had only about twenty students. With depopulation and the declining birthrate, the number of students kept decreasing year by year. On the day Mori arrived, the principal told him, This village school may face a crisis of survival in a few years. But someone must keep teaching the children who remain. Mori nodded quietly. He understood the weight of those words more deeply than anyone.",
      "However, the reality was harsh. The students had lost the will to learn. Most slept during class, gazed out the window, or did not even open the textbook. Even when Mori spoke with passion, his words seemed to vanish into the air without resonating. One day, Mori saw a student wiping tears on the school stairway. When he asked the reason, the student said the family was quitting farming and he was heartsick with anxiety about the future. Mori realized then. The children did not want to avoid learning; they could not find meaning in it.",
      "Mori resolved to change how he taught. He began to connect the contents of the textbook with the history of the village where the children lived. The origin of the old village shrine, the transition of the fields the ancestors had cultivated, the memory of the coal mine that once flourished here — he reconstructed history and social studies lessons using these as material. The students, at first cool, gradually began to brighten as they touched the history beneath their feet. When he assigned them a task of interviewing the village elders, the children came to have deep conversations with their grandparents for the first time.",
      "Mori valued the children's ability to think for themselves. He did not teach answers; he taught how to pose questions. When a student asked, Why did this village depopulate? Mori did not answer immediately but began to look into materials together. By laying out maps and statistics, listing possible causes, and then having the student reach a conclusion. This way of doing things took time, but it cultivated the children's ability to think from the foundation. Students who took Mori's classes came to actively pose questions and investigate on their own.",
      "Mori's philosophy is summed up in a single phrase: Walk at the speed of the children. There is no need to advance everyone at the same pace. Some understand quickly; others only grasp the meaning after taking time. Both kinds of learning are equally precious, Mori believed. He strove to respond to each student and evaluated not only grades but the child's effort and process of growth. He valued cooperation over competition and built a classroom culture of mutual support. In Mori's classroom, the children learned that they could safely make mistakes.",
      "Ten years passed, and the village middle school continued to exist. Students once taught by Mori were walking various paths: working in cities, succeeding agriculture locally, or becoming teachers themselves. One graduate became a doctor and sent a letter to Mori from a distant hospital. It said, The ability to pose questions I learned in your classes lives on in my daily examinations. Another graduate returned to the hometown and continues activities to inherit the village's history. The influence of the act of teaching spreads far beyond the classroom.",
      "Reaching retirement age, Mori chose to remain in the village. Even now, after leaving his post, he teaches local children and continues to record the village's history. Even without standing at the podium, his role does not end. One day, a former student visited Mori with his own child. I want to pass on to this child what I learned from you, the student said. Mori smiled quietly. The light of the act of teaching keeps burning across generations. What one teacher can leave behind is not a score but the light engraved in people's hearts. That light never goes out."
    ],
    questions: [
      {
        q: "Why was Mori's transfer to the village school unusual?",
        choices: ["He was a first-year teacher", "It followed a long teaching career in an urban school", "He was sent as punishment", "He had never taught before"],
        answerIndex: 1,
        explanation: "The text describes Mori as a veteran who had 長年教鞭を執った後 — a long teaching career before the unusual transfer (都会の学校で長年教鞭を執った後)."
      },
      {
        q: "What did Mori realize after seeing the crying student?",
        choices: ["That students didn't care about learning at all", "That students could not find meaning in learning, not that they didn't want to learn", "That the school should close", "That the student should leave the village"],
        answerIndex: 1,
        explanation: "Mori realized 子供たちは学びたくないのではない。学ぶことに意味を見出せない — they could not find meaning, not that they didn't want to learn."
      },
      {
        q: "How did Mori change his teaching?",
        choices: ["By abandoning textbooks entirely", "By connecting lessons to the village's local history", "By focusing only on math", "By introducing standardized tests"],
        answerIndex: 1,
        explanation: "He reconstructed lessons by connecting textbook contents to the village's history (村の歴史と結び付け始めた)."
      },
      {
        q: "What does Mori's philosophy 'walk at the speed of the children' mean?",
        choices: ["All students must move at the same pace", "Each student's pace of learning is equally valued", "Slower students must be left behind", "Fast students should skip grades"],
        answerIndex: 1,
        explanation: "Mori believed both fast and slow learners' learning are equally precious (どちらの学びも同じように尊い). No need to advance everyone at the same pace."
      },
      {
        q: "Which N2 grammar pattern expresses 'even without standing at the podium'?",
        choices: ["〜に過ぎない", "〜ずに (without doing)", "〜限り", "〜次第"],
        answerIndex: 1,
        explanation: "教壇に立たなくなっても conveys 'even without standing at the podium'; a closely related pattern is 〜ずに 'without doing'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-26 — The gig economy in Japan
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-26",
    title: "ギグ経済[けいざい]が変[か]える働[はたら]き方[かた]",
    titleReading: "ぎぐけいざいがかえるはたらきかた",
    level: "N2",
    summary: "An analysis of the gig economy in Japan: app-based short-term labor enabled by smartphones, its appeal as flexible secondary income, the dark side of weak social protection and platform-driven pay cuts, the friction with Japan's traditional employment culture, the legal lag, and the search for a sustainable coexistence model.",
    estMinutes: 9,
    tags: ["gig economy", "labor", "platforms", "policy"],
    body: [
      "「ギグ」とは、音楽[おんがく]用語[ようご]で短[みじか]い契約[けいやく]の仕事[しごと]を指[さ]す言葉[ことば]であるが、近年[きんねん]はこの語[ご]が経済[けいざい]の文脈[ぶんみゃく]で頻繁[ひんぱん]に使[つか]われるようになった。ギグ経済[けいざい]とは、プラットフォームを介[かい]した短[みじか]期的[きてき]な労働[ろうどう]契約[けいやく]が普及[ふきゅう]する経済[けいざい]の形[かたち]を指[さ]す。配達[はいたつ]アプリや車[くるま]の相乗[そうじょう]サービス、クラウドソーシングなどが典型[てんけい]的[てき]な例[れい]である。スマートフォンの普及[ふきゅう]と位置[いち]情報[じょうほう]技術[ぎじゅつ]の進歩[しんぽ]により、誰[だれ]でも簡単[かんたん]に仕事[しごと]を受注[じゅちゅう]できる環境[かんきょう]が整[ととの]った。この変化[へんか]は、労働[ろうどう]の在[あ]り方[かた]そのものを根底[こんてい]から揺[ゆ]さぶりつつある。",
      "日本[にほん]におけるギグ経済[けいざい]も、着実[ちゃくじつ]に拡大[かくだい]している。食[た]べ物[もの]の配達[はいたつ]や家事[かじ]代行[だいこう]、オンラインでのスキル提供[ていきょう]など、様[さまざま]々な分野[ぶんや]でギグワーカーが活躍[かつやく]している。特[とく]に若[わか]い世代[せだい]の間[あいだ]では、固定[こてい]された勤務[きんむ]時間[じかん]に縛[しば]られない働[はたら]き方[かた]への関心[かんしん]が高[たか]まっている。学生[がくせい]が授業[じゅぎょう]の合間[あいま]に配達[はいたつ]で収入[しゅうにゅう]を得[え]たり、主婦[しゅふ]が子[こ]育[そだ]ての合間[あいま]に家事[かじ]代行[だいこう]をしたりする例[れい]も珍[めずら]しくない。働[はたら]き手[て]の側[がわ]から見[み]れば、時間[じかん]を自由[じゆう]に使[つか]えるという魅力[みりょく]は大[おお]きい。",
      "ギグ経済[けいざい]の魅力[みりょく]は、柔軟[じゅうなん]性[せい]と低[てい]い参入[さんにゅう]障壁[しょうへき]にある。誰[だれ]でも、自分[じぶん]の都合[つごう]のいい時間[じかん]に仕事[しごと]を受[う]けることができる。専業[せんぎょう]の仕事[しごと]を持[も]つ人[ひと]が副業[ふくぎょう]としてギグを始[はじ]めることも、専業[せんぎょう]で取[と]り組[く]むことも可能[かのう]である。また、地方[ちほう]に住[す]みながら都会[とかい]の企業[きぎょう]の仕事[しごと]を請[う]け負[お]うこともできるため、地理的[ちりてき]な制約[せいやく]も大幅[おおはば]に緩和[かんわ]された。このような自由[じゆう]度[ど]の高[たか]い働[はたら]き方[かた]は、従来[じゅうらい]の雇用[こよう]モデルにはない大[おお]きな優位性[ゆういせい]である。労働[ろうどう]者[しゃ]が自[みずか]らの生活[せいかつ]設計[せっけい]に合[あ]わせて働[はたら]けるという点[てん]で、ギグは新[あたら]しい選択肢[せんたくし]を提供[ていきょう]している。",
      "しかし、光[ひかり]があれば影[かげ]もある。ギグワーカーの多[おお]くは、雇用[こよう]保険[ほけん]や健康[けんこう]保険[ほけん]などの社会保障[しゃかいほしょう]の枠組[わくぐ]みの外[そと]に位置[いち]している。仕事[しごと]が突然[とつぜん]減[へ]っても所得[しょとく]を補[おぎな]う手立[てだ]てがなく、病気[びょうき]や怪我[けが]で働[はたら]けなくなれば収入[しゅうにゅう]は即座[そくざ]に途絶[とぜつ]する。また、プラットフォーム企業[きぎょう]が一方的[いっぽうてき]に報酬[ほうしゅう]額[がく]を引[ひ]き下[さ]げるケースも報告[ほうこく]されており、労働[ろうどう]者[しゃ]の交渉[こうしょう]力[りょく]は極[きわ]めて弱[よわ]い。表面上[ひょうめんじょう]は「自由[じゆう]な働[はたら]き方[かた]」であっても、その実[じつ]、不安定[ふあんてい]な労働[ろうどう]環境[かんきょう]に晒[さら]されている側面[そくめん]も否定[ひてい]できない。こうした脆弱[ぜいじゃく]性[せい]を放置[ほうち]すれば、社会[しゃかい]全体[ぜんたい]の格差[かくさ]拡大[かくだい]に繋[つな]がりかねない。",
      "日本[にほん]社会[しゃかい]において、ギグ経済[けいざい]の普及[ふきゅう]は特[とく]有[ゆう]の課題[かだい]を抱[かか]えている。長年[ながねん]、終身[しゅうしん]雇用[こよう]と年功[ねんこう]序列[じょれつ]を基盤[きばん]とした社会[しゃかい]で、雇用[こよう]は個人[こじん]の帰属[きぞく]意識[いしき]と社会保障[しゃかいほしょう]の基盤[きばん]であった。それが、短[みじか]期的[きてき]で個人[こじん]化[か]された労働[ろうどう]関係[かんけい]へと移行[いこう]する中[なか]で、従来[じゅうらい]の保護[ほご]の枠組[わくぐ]みは機能[きのう]しなくなりつつある。また、ギグワーカーが労働[ろうどう]組合[くみあい]を通[つう]じて団体[だんたい]交渉[こうしょう]を行[おこな]う道[みち]も限[かぎ]られており、孤立[こりつ]しがちな労働[ろうどう]環境[かんきょう]に置[お]かれている。日本[にほん]の雇用[こよう]文化[ぶんか]とギグ経済[けいざい]の整合[せいごう]性[せい]をいかに図[はか]るかが、今後[こんご]の重要[じゅうよう]な課題[かだい]である。",
      "法[ほう]整備[せいび]の面[めん]でも、遅[おく]れが目立[めだ]つ。労働[ろうどう]基準[きじゅん]法[ほう]は原則[げんそく]として雇用[こよう]関係[かんけい]を前提[ぜんてい]としており、業務[ぎょうむ]委託[いたく]の形[かたち]をとるギグワーカーには適用[てきよう]されないケースが多[おお]い。そのため、最低[さいてい]賃金[ちんぎん]や労働[ろうどう]時間[じかん]の規制[きせい]が及[およ]ばず、過重[かじゅう]労働[ろうどう]に陥[おちい]る者[もの]も出[で]ている。政府[せいふ]は「働[はたら]き方[かた]改革[かいかく]」の中[なか]でこの問題[もんだい]に取[と]り組[く]み始[はじ]めたが、プラットフォーム企業[きぎょう]と労働[ろうどう]者[しゃ]、双方[そうほう]の利益[りえき]を調整[ちょうせい]する制度[せいど]の設計[せっけい]は容易[ようい]ではない。海外[かいがい]の先例[せんれい]を参考[さんこう]にしつつも、日本[にほん]の実情[じつじょう]に合[あ]った独自[どくじ]の仕組[しく]みを構築[こうちく]する必要[ひつよう]がある。",
      "将来[しょうらい]の日本[にほん]において、ギグ経済[けいざい]は既存[きぞん]の雇用[こよう]とどのように共存[きょうそん]していくのだろうか。重要[じゅうよう]なのは、柔軟[じゅうなん]性[せい]という長所[ちょうしょ]を活[い]かしつつ、脆弱[ぜいじゃく]性[せい]を緩和[かんわ]する安全網[あんぜんもう]を整備[せいび]することである。社会的[しゃかいてき]な保障[ほしょう]の適用[てきよう]範囲[はんい]を広[ひろ]げ、ギグワーカーにも安心[あんしん]して働[はたら]ける環境[かんきょう]を作[つく]る必要[ひつよう]がある。同時[どうじ]に、労働[ろうどう]者[しゃ]側[がわ]も自身[じしん]のスキルを高[たか]め、複数[ふくすう]の収入[しゅうにゅう]源[みなもと]を持[も]つことでリスクを分散[ぶんさん]する賢[かしこ]さが求[もと]められる。ギグ経済[けいざい]は万能[ばんのう]の解決策[かいけつさく]ではないが、うまく設計[せっけい]されれば、多様[たよう]な働[はたら]き方[かた]を可能[かのう]にする社会[しゃかい]の実現[じつげん]に資[し]するはずである。"
    ],
    translation: [
      "Gig is a musical term for short-contract work, but in recent years this word has come to be used frequently in economic contexts. The gig economy refers to an economy in which short-term labor contracts mediated by platforms are widespread. Delivery apps, ride-sharing services, and crowdsourcing are typical examples. The spread of smartphones and the progress of location-information technology have created an environment where anyone can easily take on work. This change is shaking the very nature of labor from its foundation.",
      "The gig economy in Japan is also steadily expanding. Food delivery, housework proxy services, online skill provision — gig workers are active in various fields. Especially among the younger generation, interest in ways of working not bound by fixed working hours is growing. Cases of students earning income from delivery between classes, or housewives doing housework proxy between child-rearing, are no longer rare. From the worker's side, the appeal of being able to use time freely is great.",
      "The appeal of the gig economy lies in its flexibility and low entry barriers. Anyone can take work at times convenient for them. Those with full-time jobs can start gig work as a side job, or take it on full-time. Moreover, since one can take on the work of urban companies while living in the regions, geographical constraints have been greatly relaxed. This highly free way of working is a major advantage not found in the conventional employment model. In that workers can work in line with their own life plans, the gig provides a new option.",
      "However, where there is light, there is also shadow. Many gig workers are positioned outside the framework of social protection such as employment insurance and health insurance. If work suddenly decreases, there is no means to supplement income; if one falls ill or is injured and cannot work, income is cut off immediately. In addition, cases are reported in which platform companies unilaterally lower reward amounts, and workers' bargaining power is extremely weak. Superficially a free way of working, in reality they are also exposed to unstable labor environments. If this fragility is left unaddressed, it could lead to widening inequality in society as a whole.",
      "In Japanese society, the spread of the gig economy carries distinctive challenges. For many years, in a society based on lifetime employment and seniority pay, employment was the foundation of individuals' sense of belonging and of social protection. As this shifts to short-term, individualized labor relations, the conventional protection framework is ceasing to function. In addition, the path for gig workers to engage in collective bargaining through labor unions is limited, and they are placed in environments prone to isolation. How to reconcile Japanese employment culture and the gig economy is an important challenge going forward.",
      "In terms of legal development too, the lag is conspicuous. The Labor Standards Act in principle presupposes an employment relationship, and is often not applied to gig workers who take the form of business consignment. As a result, minimum wage and working-hour regulations do not reach them, and some fall into excessive labor. The government has begun to address this problem within work-style reform, but designing a system that adjusts the interests of both platform companies and workers is not easy. While referring to overseas precedents, it is necessary to build a distinctive mechanism suited to Japan's actual conditions.",
      "In the Japan of the future, how will the gig economy coexist with existing employment? What is important is to maintain the advantage of flexibility while building a safety net that mitigates fragility. It is necessary to expand the scope of social protection and create an environment in which gig workers can work with peace of mind. At the same time, workers too need the wisdom to raise their own skills and hold multiple income sources to disperse risk. The gig economy is not a panacea, but if well designed, it should contribute to realizing a society that enables diverse ways of working."
    ],
    questions: [
      {
        q: "What enabled the gig economy to spread according to the passage?",
        choices: ["Strict labor regulations and stable employment", "Smartphone spread and location-information technology progress", "Government bans on full-time work", "Decline of online services"],
        answerIndex: 1,
        explanation: "The text names スマートフォンの普及と位置情報技術の進歩 as creating the environment where anyone can easily take on work."
      },
      {
        q: "Why are gig workers vulnerable despite the freedom they enjoy?",
        choices: ["Because they earn too much", "Because they sit outside social protection frameworks and lack bargaining power", "Because platforms always raise pay", "Because they cannot work at all"],
        answerIndex: 1,
        explanation: "Gig workers sit outside social protection frameworks (社会保障の枠組みの外), and platform companies can unilaterally lower pay while workers' bargaining power is extremely weak."
      },
      {
        q: "Why is the gig economy's spread in Japan especially challenging?",
        choices: ["Because Japan has no smartphones", "Because Japan's employment culture was built on lifetime employment and seniority pay as a basis for social protection", "Because platforms are illegal", "Because workers refuse gig work entirely"],
        answerIndex: 1,
        explanation: "Japan's society was built on 終身雇用と年功序列 as the foundation of belonging and social protection; the conventional protection framework no longer functions for short-term individualized labor."
      },
      {
        q: "Why does labor law often not protect gig workers?",
        choices: ["Because labor law only applies to foreigners", "Because labor law presupposes an employment relationship, not business consignment", "Because gig workers are exempt by law", "Because there is no labor law in Japan"],
        answerIndex: 1,
        explanation: "The Labor Standards Act presupposes an employment relationship (雇用関係を前提), so it often does not apply to gig workers whose contracts take the form of business consignment (業務委託)."
      },
      {
        q: "Which N2 grammar pattern is used to express 'it could lead to widening inequality'?",
        choices: ["〜に過ぎない", "〜限り", "〜かねない (might / risk of)", "〜次第"],
        answerIndex: 2,
        explanation: "格差拡大に繋がりかねない uses 〜かねない meaning 'might / risk of (something undesirable)'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-27 — A story about a cultural ambassador
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-27",
    title: "橋[はし]を架[か]ける人[ひと]: 文化[ぶんか]大使[たいし]の軌跡[きせき]",
    titleReading: "はしをかけるひとぶんかたいしのきせき",
    level: "N2",
    summary: "A story about Yumiko, appointed cultural ambassador to Europe, whose one-sided Noh and tea-ceremony demonstrations fail until a schoolgirl mentions her grandmother's similar tale. Yumiko pivots to joint works with local artists, returns to Japan to preach cross-cultural understanding, and ten years later leaves a cultural center that carries her stance across generations.",
    estMinutes: 10,
    tags: ["cultural diplomacy", "story", "art", "exchange"],
    body: [
      "優美[ゆうび]子[こ]が日本[にほん]政府[せいふ]の親善[しんぜん]大使[たいし]として欧[おう]州[しゅう]に赴任[ふにん]したのは、彼女[かのじょ]が四十[よんじゅう]代[だい]に入[はい]ったばかりの頃[ころ]であった。彼女[かのじょ]は若[わか]い頃[ころ]から能[のう]と茶[ちゃ]の湯[ゆ]を学[まな]び、海外[かいがい]での公演[こうえん]も経験[けいけん]していた。その実績[じっせき]を買[か]われ、文化[ぶんか]外交[がいこう]の最前線[さいぜんせん]に立[た]つことになったのである。しかし、任地[にんち]に着[つ]いた初日[しょにち]の夜[よる]、彼女[かのじょ]はホテルの窓[まど]から見知[みし]らぬ街[まち]を眺[なが]めながら、深[ふか]い孤独[こどく]感[かん]に襲[おそ]われた。言葉[ことば]の壁[かべ]は想像[そうぞう]以上[いじょう]であり、異文化[いぶんか]の深[ふか]さに直面[ちょくめん]して、自[みずか]らの力[ちから]の及[およ]ばなさを痛[いた]感[かん]した。私[わたし]は本当[ほんとう]に、二[ふた]つの文化[ぶんか]の橋渡[はしわた]しになれるのだろうか。",
      "最初[さいしょ]の数[すう]ヶ月[かげつ]は挫折[ざせつ]の連続[れんぞく]であった。彼女[かのじょ]が開催[かいさい]した能[のう]の公演[こうえん]には、観客[かんきゃく]がまばらであった。言葉[ことば]の通[つう]じない観客[かんきゃく]たちは、面白[おもしろ]くなさそうに途中[とちゅう]で席[せき]を立[た]った。茶[ちゃ]の湯[ゆ]の実演[じつえん]では、伝統[でんとう]的[てき]な作法[さほう]の意味[いみ]が伝[つた]わらず、単[たん]なる珍[めずら]しい見[み]世物[せもの]として消費[しょうひ]されるだけの結果[けっか]に終[お]わった。優美[ゆうび]子[こ]は夜[よる]のホテルで、自[みずか]らの無力[むりょく]さを噛[か]み締[し]めた。日本[にほん]の文化[ぶんか]を単[たん]に輸出[ゆしゅつ]するだけでは、異文化[いぶんか]の人[ひと]たちの心[こころ]には届[とど]かない。何[なに]が欠[か]けているのだろうかと、彼女[かのじょ]は幾[いく]夜[や]も考[かんが]え続[つづ]けた。",
      "転機[てんき]が訪[おとず]れたのは、ある小[ちい]さな学校[がっこう]での出会[であ]いであった。優美[ゆうび]子[こ]が地域[ちいき]の小学校[しょうがっこう]で日本[にほん]の昔話[むかしばなし]を話[はな]すことになった時[とき]、一人[ひとり]の少女[しょうじょ]が「私[わたし]のおばあちゃんも、似[に]たような物語[ものがたり]をよく話[はな]してくれた」と笑顔[えがお]で言[い]った。その瞬間[しゅんかん]、優美[ゆうび]子[こ]は気[き]づいた。文化[ぶんか]を伝[つた]えるとは、異[こと]なるものを押[お]し付[つ]けることではない。共通[きょうつう]する人間[にんげん]の経験[けいけん]を見[み]つけ出[だ]し、そこから対話[たいわ]を始[はじ]めることなのだと。それ以来[いらい]、彼女[かのじょ]の活動[かつどう]は変[か]わった。日本[にほん]の文化[ぶんか]を一方[いっぽう]的[てき]に紹介[しょうかい]するのではなく、現地[げんち]の文化[ぶんか]と対話[たいわ]させる形[かたち]で展開[てんかい]するようになった。",
      "優美[ゆうび]子[こ]は、現地[げんち]の芸術[げいじゅつ]家[か]と共同[きょうどう]で作品[さくひん]を作[つく]り始[はじ]めた。現地[げんち]の音楽家[おんがくか]と能[のう]の音楽[おんがく]を融合[ゆうごう]させ、現地[げんち]の舞踊[ぶよう]家[か]と日本[にほん]の舞[まい]を共演[きょうえん]させるなど、文化[ぶんか]と文化[ぶんか]の出会[であ]いを創出[そうしゅつ]した。最初[さいしょ]は互[たが]いの技術[ぎじゅつ]や考[かんが]え方[かた]の違[ちが]いに戸惑[とまど]いもあった。しかし、対話[たいわ]を重[かさ]ねるうちに、両者[りょうしゃ]は共通[きょうつう]の言語[げんご]——芸術[げいじゅつ]という言葉[ことば]を超[こ]えた言語[げんご]——を見[み]つけ出[だ]した。彼女[かのじょ]は常[つね]に「文化[ぶんか]の橋[はし]は、一方[いっぽう]通行[つうこう]であってはならない」と語[かた]った。互[たが]いに歩[ある]み寄[よ]ることこそが、真[しん]の交流[こうりゅう]を生[う]むのである。",
      "五年[ごねん]の任期[にんき]を終[お]えた優美[ゆうび]子[こ]は、日本[にほん]に帰国[きこく]した。しかし、彼女[かのじょ]は帰国[きこく]後[ご]、自[みずか]らの国[くに]の文化[ぶんか]を新[あたら]しい目[め]で見[み]るようになっていた。海外[かいがい]での経験[けいけん]は、日本[にほん]の文化[ぶんか]の普遍[ふへん]性[せい]と特質[とくしつ]を浮[う]き彫[ぼ]りにしたのである。彼女[かのじょ]は日本[にほん]国内[こくない]で、異文化[いぶんか]理解[りかい]の重要性[じゅうようせい]を語[かた]り始[はじ]めた。特[とく]に若[わか]い世代[せだい]に対[たい]しては、海外[かいがい]経験[けいけん]の意義[いぎ]を強調[きょうちょう]し、自[みずか]らもワークショップを開催[かいさい]して国際[こくさい]交流[こうりゅう]の機会[きかい]を提供[ていきょう]し続[つづ]けた。彼女[かのじょ]の言葉[ことば]には、海外[かいがい]で培[つちか]った実感[じっかん]が宿[やど]っており、多[おお]くの若者[わかもの]の心[こころ]を動[うご]かした。",
      "十[じゅう]年[ねん]後[ご]、優美[ゆうび]子[こ]が赴任[ふにん]していた欧[おう]州[しゅう]の街[まち]で、彼女[かのじょ]の名[な]を冠[かん]した小[ちい]さな文化[ぶんか]センターが開設[かいせつ]された。そこでは今[いま]も、日本[にほん]と現地[げんち]の芸術[げいじゅつ]家[か]たちが共[とも]に作品[さくひん]を作[つく]り続[つづ]けている。彼女[かのじょ]が残[のこ]した活動[かつどう]の足跡[あしあと]は、単[たん]なる文化[ぶんか]紹介[しょうかい]の枠[わく]を越[こ]え、二[ふた]つの文化[ぶんか]の恒久[こうきゅう]的[てき]な対話[たいわ]の場[ば]として根[ね]付[つ]いている。かつての教[おし]え子[こ]たちが、今[いま]は自分[じぶん]たちの次[つぎ]の世代[せだい]に、異文化[いぶんか]への好奇心[こうきしん]を伝[つた]え始[はじ]めている。優美[ゆうび]子[こ]の姿勢[しせい]は、世代[せだい]を越[こ]えて連鎖[れんさ]し続[つづ]けているのである。",
      "文化[ぶんか]外交[がいこう]とは、文化[ぶんか]という柔[やわ]らかい力[ちから]を通[つう]じて、国[くに]と国[くに]、人[ひと]と人[ひと]の理解[りかい]を深[ふか]める営[いとな]みである。優美[ゆうび]子[こ]の軌跡[きせき]は、その本質[ほんしつ]を見事[みごと]に体現[たいげん]している。彼女[かのじょ]は、自[みずか]らの文化[ぶんか]を押[お]し付[つ]けるのではなく、相手[あいて]の文化[ぶんか]と出会[であ]うことで新[あたら]しい価値[かち]を生[しょう]み出[だ]した。この姿勢[しせい]は、文化[ぶんか]外交[がいこう]のみならず、多文化[たぶんか]共生[きょうせい]社会[しゃかい]を築[きず]くすべての人[ひと]に共通[きょうつう]する教訓[きょうくん]である。文化[ぶんか]の橋[はし]を架[か]ける人[ひと]が増[ふ]える限[かぎ]り、争[あらそ]いや誤解[ごかい]は必[かなら]ず減[へ]っていく。言葉[ことば]が通[つう]じなくても、心[こころ]は通[つう]じ合[あ]える。その信念[しんねん]を、優美[ゆうび]子[こ]は生涯[しょうがい]を通[つう]じて示[しめ]し続[つづ]けたのである。"
    ],
    translation: [
      "Yumiko was appointed by the Japanese government as a goodwill ambassador to Europe just as she entered her forties. She had studied Noh and the tea ceremony since her youth and had experience performing overseas. Recognizing that track record, she was placed on the front line of cultural diplomacy. However, on the night of her first day at her post, looking out at the unfamiliar city from her hotel window, she was struck by a deep sense of loneliness. The language barrier was greater than expected, and confronted by the depth of another culture, she keenly felt the limits of her own power. Can I really bridge two cultures?",
      "The first few months were a succession of setbacks. The Noh performances she held had sparse audiences. Audiences who did not share the language would leave their seats midway, looking bored. At demonstrations of the tea ceremony, the meaning of traditional etiquette did not come across, and the result was only that it was consumed as a curious spectacle. In her hotel room at night, Yumiko savored her own helplessness. Merely exporting Japanese culture does not reach the hearts of people of another culture. What is missing? She spent many nights thinking.",
      "The turning point came with an encounter at a small school. When Yumiko was to tell Japanese old tales at a local elementary school, a girl smiled and said, My grandmother often tells me a similar story. In that moment, Yumiko realized. To convey culture is not to impose what is different. It is to find common human experience and begin dialogue from there. Since then, her activities changed. Rather than one-sidedly introducing Japanese culture, she came to develop it in a form that dialogued with local culture.",
      "Yumiko began to create works jointly with local artists. She fused Noh music with that of local musicians, and had local dancers perform alongside Japanese dance, creating encounters between cultures. At first, there was confusion over differences in technique and ways of thinking. However, as dialogue piled up, both parties found a common language — the language of art that transcends words. She always said, The bridge of culture must not be one-way. It is mutual approach that gives birth to true exchange.",
      "After completing her five-year term, Yumiko returned to Japan. However, after returning, she came to look at her own country's culture with new eyes. Her overseas experience had brought into relief the universality and the particularities of Japanese culture. She began to speak within Japan about the importance of cross-cultural understanding. Especially for the younger generation, she emphasized the significance of overseas experience and continued to hold workshops to provide opportunities for international exchange. Her words, grounded in the lived experience cultivated overseas, moved the hearts of many young people.",
      "Ten years later, a small cultural center named after Yumiko was opened in the European town where she had served. There, Japanese and local artists continue to create works together. The footprint of her activities has gone beyond mere cultural introduction and has taken root as a place of permanent dialogue between two cultures. Her former students have begun to pass on curiosity about other cultures to their own next generation. Yumiko's stance continues to chain across generations.",
      "Cultural diplomacy is the endeavor to deepen understanding between countries and between people through the soft power of culture. Yumiko's trajectory embodies its essence beautifully. Rather than imposing her own culture, she created new value by encountering the other's culture. This stance is a lesson common not only to cultural diplomacy but to all who build a multicultural coexistence society. As long as the number of people who build bridges of culture increases, conflict and misunderstanding will surely decrease. Even without shared words, hearts can communicate. She continued to demonstrate that belief throughout her life."
    ],
    questions: [
      {
        q: "What was Yumiko's first reaction upon arriving at her post?",
        choices: ["She was excited and confident", "She felt deep loneliness and doubted her ability", "She immediately succeeded", "She wanted to return to Japan"],
        answerIndex: 1,
        explanation: "On the night of her first day, she was 深い孤独感に襲われ and keenly felt the limits of her own power (自らの力の及ばなさを痛感)."
      },
      {
        q: "What made Yumiko's early cultural events fail?",
        choices: ["She did not perform well", "One-sided introduction of culture did not reach audiences who lacked shared context", "The venues were too small", "The audiences were hostile"],
        answerIndex: 1,
        explanation: "Audiences without shared language left midway; tea ceremony meaning did not come across and was consumed as a curious spectacle — merely exporting culture did not reach hearts."
      },
      {
        q: "What was the turning point of Yumiko's approach?",
        choices: ["A conversation with a government official", "A girl at an elementary school mentioned her grandmother's similar tale", "A large donation", "A TV appearance"],
        answerIndex: 1,
        explanation: "At a local elementary school a girl smiled and said my grandmother tells me a similar tale — that moment made Yumiko realize culture is dialogue from common experience, not imposition."
      },
      {
        q: "What is Yumiko's key principle of cultural diplomacy?",
        choices: ["The bridge of culture must be one-way", "The bridge of culture must not be one-way; mutual approach creates true exchange", "Only Japanese art should be shown", "Only modern art matters"],
        answerIndex: 1,
        explanation: "Yumiko always said 文化の橋は、一方通行であってはならない — the bridge must not be one-way; mutual approach creates true exchange."
      },
      {
        q: "Which N2 grammar pattern is used to express 'as long as more people build bridges of culture, conflict will surely decrease'?",
        choices: ["〜限り (as long as)", "〜に過ぎない", "〜どころか", "〜次第"],
        answerIndex: 0,
        explanation: "文化の橋を架ける人が増える限り uses 〜限り meaning 'as long as'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-28 — The Japanese approach to mental health
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-28",
    title: "心[こころ]の健康[けんこう]と日本[にほん]社会[しゃかい]",
    titleReading: "こころのけんこうとにほんしゃかい",
    level: "N2",
    summary: "An analysis of Japan's evolving approach to mental health: the historical taboo, the karoshi era and 1990s suicide surge, the post-2006 legal and corporate shifts, persistent stigma, the institutional gaps in counselor supply and insurance coverage, the youth crisis, and the road to a society where mental health can be spoken of openly.",
    estMinutes: 11,
    tags: ["mental health", "stigma", "policy", "society"],
    body: [
      "日本[にほん]社会[しゃかい]において、心[こころ]の健康[けんこう]は長[なが]く語[かた]られるべきではない主題[しゅだい]とされてきた。精神[せいしん]的[てき]な問題[もんだい]を抱[かか]えることは、個[こ]人[じん]の弱[よわ]さや恥[はじ]と結[むす]び付[つ]けられ、表[おもて]だって語[かた]られることは少[すく]なかった。明治[めいじ]以降[いこう]の近代化[きんだいか]の中[なか]で、精神[せいしん]医学[いがく]は発達[はったつ]したものの、一般[いっぱん]社会[しゃかい]の意識[いしき]はそれに追[お]いつかなかった。精神[せいしん]疾患[しっかん]への偏見[へんけん]は根強[ねづよ]く、患者[かんじゃ]や家族[かぞく]は隠[かく]すように生[い]きることを余儀[よぎ]なくされた。このような歴史[れきし]的[てき]背景[はいけい]が、日本[にほん]の特[とく]異[い]な心[こころ]の健康[けんこう]文化[ぶんか]を形成[けいせい]してきたのである。",
      "戦後[せんご]の高度[こうど]経済[けいざい]成長[せいちょう]期[き]には、過労[かろう]死[し]という言葉[ことば]が生[う]まれた。企業[きぎょう]戦士[せんし]たちは、家族[かぞく]を犠牲[ぎせい]にしてまで会社[かいしゃ]に尽[つく]すことが美徳[びとく]とされた。しかし、その代償[だいしょう]として、うつ病[うつびょう]や自殺[じさつ]が急増[きゅうぞう]した。1990年代[ねんだい]後半[ごはん]には、自殺[じさつ]者[しゃ]数[すう]が年間[ねんかん]三万[さんまん]人[にん]を超[こ]え、深刻[しんこく]な社会[しゃかい]問題[もんだい]となった。働[はたら]き過[す]ぎによる心[こころ]の疲弊[ひへい]は、もはや個人[こじん]の問題[もんだい]ではなく、社会[しゃかい]全体[ぜんたい]の責任[せきにん]として捉[とら]えられなければならない。しかし、その認識[にんしき]が広[ひろ]まるまでには、まだ長[なが]い時間[じかん]を要[よう]したのである。",
      "二十一世紀[にじゅういっせいき]に入[はい]り、状況[じょうきょう]は少[すこ]しずつ変[か]わり始[はじ]めた。2006年[ねん]に成立[せいりつ]した自殺[じさつ]対策[たいさく]基本[きほん]法[ほう]は、自殺[じさつ]を個[こ]人[じん]の問題[もんだい]ではなく社会[しゃかい]全体[ぜんたい]の課題[かだい]として位置[いち]付[つ]けた。これを契機[けいき]に、各[かく]地[ち]で相談[そうだん]窓口[まどぐち]が設[もう]けられ、メンタルヘルス対策[たいさく]が推進[すいしん]され始[はじ]めた。企業[きぎょう]でも、産業[さんぎょう]医[い]やカウンセリング制度[せいど]の導入[どうにゅう]が進[すす]み、社員[しゃいん]の心[こころ]の健康[けんこう]に配慮[はいりょ]する風潮[ふうちょう]が芽生[めば]えた。法律[ほうりつ]と意識[いしき]、両方[りょうほう]の変化[へんか]が連動[れんどう]して、日本[にほん]のメンタルヘルスの在[あ]り方[かた]を少[すこ]しずつ変[か]えつつある。",
      "しかし、依然[いぜん]として偏見[へんけん]は根強[ねづよ]い。「心[こころ]が弱[よわ]いからだ」「もっと気[き]の強[つよ]い人間[にんげん]になれ」といった無理解[むりかい]な言葉[ことば]が、今[いま]も社会[しゃかい]の片隅[かたすみ]で聞[き]かれる。こうした偏見[へんけん]が、苦[くる]しんでいる人[ひと]が助[たす]けを求[もと]めるのを困難[こんなん]にしている。自[みずか]らの心[こころ]の問題[もんだい]を語[かた]ることは、キャリアや人間[にんげん]関係[かんけい]に悪[あく]影響[えいきょう]を及[およ]ぼすと恐[おそ]れられ、結果[けっか]として多[おお]くの人[ひと]が沈黙[ちんもく]を強[し]いられる。偏見[へんけん]を克服[こくふく]することなくして、心[こころ]の健康[けんこう]問題[もんだい]の根本[こんぽん]的[てき]な解決[かいけつ]はない。心[こころ]の病[やまい]は、骨折[こっせつ]や風邪[かぜ]と同様[どうよう]に、誰[だれ]にでも起[お]こり得[え]るものだという認識[にんしき]が、社会[しゃかい]全体[ぜんたい]に広[ひろ]まらなければならない。",
      "支援[しえん]の制度[せいど]的[てき]な整備[せいび]も、依然[いぜん]として不十分[ふじゅうぶん]である。日本[にほん]における心理[しんり]専門[せんもん]職[しょく]の数[かず]は、欧[おう]米[べい]諸国[しょこく]に比[くら]べて圧倒的[あっとうてき]に少[すく]ない。保険[ほけん]適用[てきよう]の範囲[はんい]も限[かぎ]られており、経済的[けいざいてき]な理由[りゆう]で治療[ちりょう]を諦[あきら]める人[ひと]も少[すく]なくない。学校[がっこう]のスクールカウンセラーの配置[はいち]も不十分[ふじゅうぶん]で、一人[ひとり]のカウンセラーが複数[ふくすう]校[こう]を兼務[けんむ]するケースが常態化[じょうたいか]している。制度[せいど]の整備[せいび]は即効[そっこう]性[せい]がないものの、中長期[ちゅうちょうき]的[てき]な視点[してん]で取[と]り組[く]む必要[ひつよう]がある課題[かだい]である。",
      "特[とく]に深刻[しんこく]なのは、若[わか]い世代[せだい]の心[こころ]の健康[けんこう]である。学校[がっこう]でのいじめ、将来[しょうらい]への不安[ふあん]、対人[たいじん]関係[かんけい]の悩[なや]みなど、若[わか]い人[ひと]たちを取[と]り巻[ま]くストレスは多[おお]岐[き]にわたる。子[こ]供[ども]の自殺[じさつ]は、新学期[がっき]の始[はじ]まりの時期[じき]にピークを迎[むか]えるというデータも存在[そんざい]する。これに対[たい]し、政府[せいふ]は学校[がっこう]でのメンタルヘルス教育[きょういく]を強化[きょうか]し始[はじ]めたが、現場[げんば]の対応[たいおう]は依然[いぜん]として手[て]探[さぐ]りの状態[じょうたい]である。親[おや]と子[こ]、学校[がっこう]と地域[ちいき]、行政[ぎょうせい]が連携[れんけい]して、若[わか]い世代[せだい]の心[こころ]を守[まも]る仕組[しく]みを築[きず]くことが急務[きゅうむ]となっている。",
      "日本[にほん]の心[こころ]の健康[けんこう]の未来[みらい]は、決[けっ]して暗[くら]いものではない。意識[いしき]の変化[へんか]は着実[ちゃくじつ]に進[すす]んでおり、若[わか]い世代[せだい]を中心[ちゅうしん]に、自[みずか]ら助[たす]けを求[もと]める人[ひと]が増[ふ]えている。職場[しょくば]でも、心[こころ]の健康[けんこう]への配慮[はいりょ]が当[あ]たり前[まえ]になりつつある。重要[じゅうよう]なのは、個[こ]人[じん]の努力[どりょく]に加[くわ]え、社会[しゃかい]システム全体[ぜんたい]で支[ささ]える仕組[しく]みを構築[こうちく]することである。心[こころ]の健康[けんこう]は、個[こ]人[じん]の責任[せきにん]であると同時[どうじ]に、社会[しゃかい]の責任[せきにん]でもある。この二[ふた]つの責任[せきにん]がうまく連動[れんどう]する社会[しゃかい]を作[つく]ることこそが、日本[にほん]の今後[こんご]の大[おお]きな課題[かだい]であろう。心[こころ]の健康[けんこう]を語[かた]れる社会[しゃかい]、それが成熟[せいじゅく]した社会[しゃかい]の証[あかし]である。"
    ],
    translation: [
      "In Japanese society, mental health has long been considered a subject that should not be spoken of. Suffering from mental problems was linked to personal weakness or shame, and was rarely spoken of openly. Although psychiatry developed in the modernization after the Meiji era, general social awareness did not catch up. Prejudice against mental illness was persistent, and patients and their families were forced to live hiding. This historical background has shaped Japan's unique mental health culture.",
      "During the postwar high economic growth, the word karoshi was born. Corporate warriors were expected to sacrifice even their families to serve the company as a virtue. However, as a price, depression and suicide surged. In the late 1990s, the number of suicides exceeded thirty thousand per year, becoming a serious social problem. Mental exhaustion from overwork was no longer an individual problem but had to be recognized as the responsibility of society as a whole. However, it took a long time for that recognition to spread.",
      "Entering the twenty-first century, the situation began to change little by little. The Basic Act for Suicide Prevention enacted in 2006 positioned suicide not as an individual problem but as a challenge for society as a whole. With this as a trigger, counseling windows were established in various places, and mental health measures began to be promoted. In companies too, the introduction of industrial physicians and counseling systems advanced, and a trend of consideration for employees' mental health began to bud. Changes in both law and awareness have been linked, gradually changing the shape of mental health in Japan.",
      "However, prejudice still persists. Words of misunderstanding such as it is because the heart is weak or be a stronger person are still heard in corners of society. Such prejudice makes it difficult for those who suffer to seek help. Speaking about one's own mental problems is feared to adversely affect career and relationships, and as a result many people are forced into silence. Without overcoming prejudice, there can be no fundamental solution to mental health problems. The recognition that mental illness, like a bone fracture or a cold, can happen to anyone must spread throughout society.",
      "Institutional support is still insufficient. The number of psychology professionals in Japan is overwhelmingly small compared to Western countries. The scope of insurance coverage is also limited, and not a few people give up treatment for economic reasons. The placement of school counselors is also inadequate, with one counselor serving multiple schools becoming the norm. While institutional development lacks immediacy, it is a challenge that must be tackled from a medium- to long-term perspective.",
      "Particularly serious is the mental health of the younger generation. The stress surrounding young people — bullying at school, anxiety about the future, and interpersonal worries — is multifaceted. Data also exists showing that child suicides peak at the start of the new school term. In response, the government has begun to strengthen mental health education in schools, but the response on the ground remains exploratory. It has become an urgent task to build a system in which parents and children, schools and communities, and administration cooperate to protect the hearts of the young generation.",
      "The future of mental health in Japan is by no means dark. Awareness is changing steadily, and especially among the younger generation, more people are seeking help themselves. In workplaces too, consideration for mental health is becoming the norm. What is important is to build a system that supports the whole social system, in addition to individual effort. Mental health is an individual responsibility and at the same time a responsibility of society. Building a society in which these two responsibilities work well together is a major challenge for Japan going forward. A society in which mental health can be spoken of — that is the mark of a mature society."
    ],
    questions: [
      {
        q: "How was mental health historically viewed in Japan?",
        choices: ["As a normal topic of discussion", "As a subject not to be spoken of, linked to shame and weakness", "As solely a government responsibility", "As unrelated to work culture"],
        answerIndex: 1,
        explanation: "Mental health was 長く語られるべきではない主題とされてきた — linked to 弱さや恥, rarely spoken of openly."
      },
      {
        q: "What happened to suicide rates in the late 1990s in Japan?",
        choices: ["They dropped sharply", "They exceeded thirty thousand per year", "They remained stable", "They became unmeasurable"],
        answerIndex: 1,
        explanation: "In the late 1990s, suicide numbers exceeded thirty thousand per year (自殺者数が年間三万人を超え), becoming a serious social problem."
      },
      {
        q: "What did the 2006 Basic Act for Suicide Prevention establish?",
        choices: ["That suicide is solely an individual problem", "That suicide is a challenge for society as a whole", "That suicide prevention is only for the elderly", "That suicide should not be discussed at all"],
        answerIndex: 1,
        explanation: "The Act positioned suicide as 社会全体の課題 — a challenge for society as a whole, not an individual problem."
      },
      {
        q: "What is one institutional weakness noted in the passage?",
        choices: ["Too many psychology professionals", "Too few psychology professionals compared to Western countries", "Insurance covers everything", "One counselor per school is the norm"],
        answerIndex: 1,
        explanation: "The number of psychology professionals in Japan is 圧倒的に少ない — overwhelmingly small compared to Western countries."
      },
      {
        q: "Which N2 grammar pattern expresses 'mental illness, like a fracture or cold, can happen to anyone'?",
        choices: ["〜に過ぎない", "〜得る (can / is possible)", "〜限り", "〜次第"],
        answerIndex: 1,
        explanation: "誰にでも起こり得るもの uses 〜得る meaning 'can / is possible'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-29 — A story about a historical preservation project
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-29",
    title: "古[ふる]き良[よ]きものを継[つ]ぐ: 歴史[れきし]保存[ほぞん]の現場[げんば]から",
    titleReading: "ふるきよきものをつぐれきしほぞんのげんばから",
    level: "N2",
    summary: "A story about Takahashi, a history teacher who halts the demolition of a hundred-year-old townhouse in a northern port town. Through investigation, restoration with traditional craftsmen, discoveries of Meiji-era newspapers in walls, and a cautious stance toward tourism, his project becomes a national model and rebirth for the town.",
    estMinutes: 11,
    tags: ["preservation", "story", "heritage", "community"],
    body: [
      "北[きた]の小[ちい]さな港町[みなとまち]で、町屋[まちや]の保存[ほぞん]運動[うんどう]が始[はじ]まったのは、今[いま]から十五[じゅうご]年[ねん]前[まえ]のことであった。明治[めいじ]時代[じだい]から昭和[しょうわ]初期[しょき]にかけて建[た]てられた古[ふる]い町屋[まちや]が、再開発[さいかいはつ]の波[なみ]に晒[さら]されていた。高橋[たかはし]は地元[じもと]の歴史[れきし]教師[きょうし]で、この街[まち]の古[ふる]い建築[けんちく]に愛着[あいちゃく]を持[も]っていた。ある日[ひ]、彼[かれ]は通[とお]りがかりに、解体[かいたい]工事[こうじ]の準備[じゅんび]が進[すす]む百年[ひゃくねん]の町屋[まちや]を見[み]た。その瞬間[しゅんかん]、彼[かれ]の胸[むね]に「この街[まち]の記憶[きおく]を、失[うしな]ってはならない」という強[つよ]い思[おも]いが湧[わ]き上[あ]がった。彼[かれ]は即座[そくざ]に保存[ほぞん]活動[かつどう]を立[た]ち上[あ]げることを決意[けつい]した。",
      "しかし、運動[うんどう]は当初[とうしょ]、厳[きび]しい状況[じょうきょう]に置[お]かれた。町屋[まちや]の所有者[しょゆうしゃ]たちは、維持[いじ]費[ひ]がかさむ古[ふる]い建物[たてもの]を手放[てばな]したがっていた。再開発[さいかいはつ]を推[お]す業者[ぎょうしゃ]は、保存[ほぞん]運動[うんどう]を「開発[かいはつ]の妨[さまた]げ」と批判[ひはん]した。町[まち]の住民[じゅうみん]たちも、意見[いけん]が割[わ]れていた。古[ふる]い建物[たてもの]に価値[かち]を見出[みいだ]す人[ひと]は少[すく]なく、「新[あたら]しいものが良[よ]い」という考[かんが]えが主流[しゅりゅう]であった。高橋[たかはし]は「古[ふる]いものを残[のこ]すことは、過去[かこ]への郷愁[きょうしゅう]ではない。未来[みらい]への投資[とうし]である」と訴[うった]え続[つづ]けたが、その言葉[ことば]はなかなか人[ひと]たちの心[こころ]に届[とど]かなかった。",
      "高橋[たかはし]は、まず実[み]ある調査[ちょうさ]から始[はじ]めた。彼[かれ]は有志[ゆうし]を集[あつ]め、町[まち]の古[ふる]い建物[たてもの]一[ひと]つ一[ひと]つの歴史[れきし]と建築[けんちく]的[てき]価値[かち]を記録[きろく]した。その資料[しりょう]は、後[のち]に市[し]の文化[ぶんか]財[ざい]に認定[にんてい]される基礎[きそ]となった。また、所有者[しょゆうしゃ]に対[たい]しては、保存[ほぞん]補助金[ほじょきん]の制度[せいど]を紹介[しょうかい]し、経済的[けいざいてき]な負担[ふたん]を減[へ]らす方法[ほうほう]を共[とも]に考[かんが]えた。彼[かれ]の誠実[せいじつ]な姿勢[しせい]に、少[すこ]しずつ所有者[しょゆうしゃ]たちも心[こころ]を開[ひら]き始[はじ]めた。高橋[たかはし]は常[つね]に「保存[ほぞん]とは、過去[かこ]を凍[こお]らせることではなく、過去[かこ]を未来[みらい]に継[つ]ぐことだ」と語[かた]った。",
      "町屋[まちや]の修復[しゅうふく]工事[こうじ]は、伝統[でんとう]技術[ぎじゅつ]の復元[ふくげん]でもあった。高橋[たかはし]は全国[ぜんこく]から職人[しょくにん]を招[まね]き、失[うしな]われつつある技術[ぎじゅつ]を伝承[でんしょう]する場[ば]とした。修復[しゅうふく]の過程[かてい]で、壁[かべ]の中[なか]から明治[めいじ]時代[じだい]の新聞[しんぶん]や、職人[しょくにん]の落書[らくが]きが見[み]つかることもあった。これらの発見[はっけん]は、建物[たてもの]が持[も]つ時間[じかん]の厚[あつ]みを人[ひと]びとに感[かん]じさせ、保存[ほぞん]の意義[いぎ]を再認識[さいにんしき]させる契機[けいき]となった。修復[しゅうふく]された町屋[まちや]は、単[たん]なる古[ふる]い建物[たてもの]ではなく、生[い]きた歴史[れきし]の展示場[てんじじょう]として甦[よみがえ]ったのである。",
      "保存[ほぞん]活動[かつどう]が進[すす]むにつれ、町[まち]全体[ぜんたい]に新[あたら]しい動[うご]きが生[う]まれた。修復[しゅうふく]された町屋[まちや]を活用[かつよう]したカフェや工房[こうぼう]、小[ちい]さな博物館[はくぶつかん]が次[つぎつぎ]々と開[ひら]かれた。地域[ちいき]の住民[じゅうみん]が主体的[しゅたいてき]に参加[さんか]し、町[まち]の文化[ぶんか]を共[とも]に作[つく]り上[あ]げる動[うご]きが広[ひろ]がった。若[わか]い移住者[いじゅうしゃ]も増[ふ]え、過疎[かそ]化[か]に悩[なや]んでいた町[まち]に活気[かっき]が戻[もど]った。歴史[れきし]を保存[ほぞん]することは、過去[かこ]を守[まも]るだけでなく、地域[ちいき]の未来[みらい]を創[そう]造[ぞう]することでもあった。高橋[たかはし]の活動[かつどう]は、町[まち]に思[おも]いがけない形[かたち]の再生[さいせい]をもたらしたのである。",
      "十[じゅう]年[ねん]を経[へ]て、町[まち]は観光[かんこう]地[ち]として注目[ちゅうもく]を集[あつ]めるようになった。保存[ほぞん]された町並[まちな]みは、写真家[しゃしんか]や旅行者[りょこうしゃ]の間[あいだ]で話題[わだい]となり、年間[ねんかん]数十万[すうじゅうまん]人[にん]が訪[おとず]れる場所[ばしょ]へと変[か]わった。しかし、高橋[たかはし]は観光[かんこう]化[か]には慎重[しんちょう]であった。過度[かど]な観光[かんこう]化[か]は、町[まち]の静[しず]けさを奪[うば]い、住民[じゅうみん]の生活[せいかつ]を圧迫[あっぱく]する恐[おそ]れがある。彼[かれ]は「観光[かんこう]は手段[しゅだん]であって、目的[もくてき]ではない」と繰[く]り返[かえ]し語[かた]った。住民[じゅうみん]が幸[しあわ]せであることが、保存[ほぞん]の本来[ほんらい]の目的[もくてき]である。この基本[きほん]を忘[わす]れない限[かぎ]り、町[まち]は持続[じぞく]可能[かのう]な発展[はってん]を続[つづ]けることができると信[しん]じた。",
      "高橋[たかはし]の取[と]り組[く]みは、日本[にほん]各地[かくち]の歴史[れきし]保存[ほぞん]運動[うんどう]に大[おお]きな影響[えいきょう]を与[あた]えた。古[ふる]いものを残[のこ]すことは、決[けっ]して時代遅[じだいおく]れの考[かんが]えではない。それは、地域[ちいき]の記憶[きおく]を継[つ]ぎ、住民[じゅうみん]の誇[ほこ]りを取[と]り戻[もど]し、未来[みらい]を創[そう]造[ぞう]する力[ちから]となる。歴史[れきし]保存[ほぞん]の現場[げんば]で学[まな]んだ最[もっと]も大[おお]きな教訓[きょうくん]は、過去[かこ]と未来[みらい]は対立[たいりつ]するものではなく、連続[れんぞく]するものだということである。古[ふる]き良[よ]きものを継[つ]ぐことは、新[あたら]しいものを生[う]み出[だ]すための基盤[きばん]となる。私[わたし]たちが過去[かこ]を大切[たいせつ]にする限[かぎ]り、未来[みらい]もまた豊[ゆた]かなものになるに違[ちが]いない。"
    ],
    translation: [
      "In a small northern port town, the movement to preserve townhouses began fifteen years ago. Old townhouses built from the Meiji era to early Showa were exposed to the wave of redevelopment. Takahashi was a local history teacher who had affection for the old architecture of the town. One day, passing by, he saw a hundred-year-old townhouse being prepared for demolition. In that instant, the strong feeling that the memory of this town must not be lost welled up in his chest. He immediately decided to launch a preservation movement.",
      "However, the movement was initially placed in a harsh situation. The owners of the townhouses wanted to part with old buildings whose maintenance costs kept mounting. Developers promoting redevelopment criticized the preservation movement as an obstacle to development. Town residents were also divided in opinion. Few found value in the old buildings, and the idea that newer is better was mainstream. Takahashi continued to appeal, Preserving the old is not nostalgia for the past. It is an investment in the future, but his words did not easily reach people's hearts.",
      "Takahashi started first with substantive investigation. He gathered volunteers and recorded the history and architectural value of each old building in the town. That material later became the basis for designation as the city's cultural property. For owners, he introduced the preservation subsidy system and worked together on ways to reduce economic burden. His sincere attitude gradually led owners to open their hearts. Takahashi always said, Preservation is not freezing the past but passing it on to the future.",
      "The restoration work on the townhouses was also a restoration of traditional techniques. Takahashi invited craftsmen from across the country and made it a place to pass on techniques that were being lost. During restoration, Meiji-era newspapers and craftsmen's graffiti were sometimes found inside walls. These discoveries made people feel the depth of time that the buildings carried and became an opportunity to reaffirm the significance of preservation. The restored townhouses were not mere old buildings but revived as exhibition halls of living history.",
      "As preservation activities advanced, new movement was born throughout the town. Cafes, workshops, and small museums using the restored townhouses opened one after another. Local residents participated actively, and a movement to build the town's culture together spread. Young immigrants increased, and vitality returned to the town that had been troubled by depopulation. Preserving history was not only protecting the past but also creating the future of the community. Takahashi's activities brought about an unexpected form of rebirth to the town.",
      "After ten years, the town came to attract attention as a tourist destination. The preserved streetscapes became a topic among photographers and travelers, and it transformed into a place visited by hundreds of thousands a year. However, Takahashi was cautious about tourism. Excessive tourism could deprive the town of its tranquility and pressure residents' lives. He repeatedly said, Tourism is a means, not an end. The happiness of the residents is the original purpose of preservation. As long as this foundation is not forgotten, he believed, the town can continue sustainable development.",
      "Takahashi's efforts had a major influence on historical preservation movements across Japan. Preserving the old is by no means an outdated idea. It becomes a power to inherit community memory, restore residents' pride, and create the future. The greatest lesson learned on the ground of historical preservation is that past and future are not opposed but continuous. Inheriting the good old things becomes the foundation for creating new things. As long as we cherish the past, the future too will surely be rich."
    ],
    questions: [
      {
        q: "What inspired Takahashi to start the preservation movement?",
        choices: ["A government grant", "Seeing a hundred-year-old townhouse being prepared for demolition", "Reading a foreign book", "A tourist's request"],
        answerIndex: 1,
        explanation: "Passing by one day, he saw 解体工事の準備が進む百年の町屋 — a hundred-year-old townhouse being prepared for demolition."
      },
      {
        q: "Why did the preservation movement face initial resistance?",
        choices: ["Because all residents supported it", "Because owners wanted to part with costly old buildings and newer-is-better was mainstream", "Because the town had no history", "Because the government forbade preservation"],
        answerIndex: 1,
        explanation: "Owners wanted to part with old buildings whose maintenance costs kept mounting, and 新しいものが良いという考えが主流 — newer-is-better was mainstream."
      },
      {
        q: "What did Takahashi do first to build credibility?",
        choices: ["He filed a lawsuit", "He gathered volunteers and recorded the history and value of each old building", "He sold the buildings", "He ignored the owners"],
        answerIndex: 1,
        explanation: "He first gathered volunteers and recorded 古い建物一つ一つの歴史と建築的価値 — the history and architectural value of each old building, which later became the basis for cultural-property designation."
      },
      {
        q: "What unexpected discoveries were made during restoration?",
        choices: ["Gold coins", "Meiji-era newspapers and craftsmen's graffiti inside walls", "Ancient weapons", "Nothing at all"],
        answerIndex: 1,
        explanation: "During restoration, 壁の中から明治時代の新聞や、職人の落書きが見つかる — Meiji-era newspapers and craftsmen's graffiti were found inside walls."
      },
      {
        q: "Which N2 grammar pattern expresses 'as long as we cherish the past, the future will surely be rich'?",
        choices: ["〜限り (as long as)", "〜に過ぎない", "〜どころか", "〜次第"],
        answerIndex: 0,
        explanation: "過去を大切にする限り uses 〜限り meaning 'as long as'; combined with 〜に違いない for 'surely'."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-30 — The impact of tourism on local communities
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-30",
    title: "観光[かんこう]がもたらす光[ひかり]と影[かげ]",
    titleReading: "かんこうがもたらすひかりとかげ",
    level: "N2",
    summary: "An analysis of how inbound tourism has reshaped Japan since 2014 — regional economic revitalization versus overtourism in Kyoto and Kamakura, the commodification of traditional culture, environmental strain on Mount Fuji and the Ogasawara Islands, and the shift toward sustainable, quality-over-quantity tourism through caps and education.",
    estMinutes: 11,
    tags: ["tourism", "overtourism", "regional economy", "sustainability"],
    body: [
      "2014年[ねん]以降[いこう]、日本[にほん]を訪[おとず]れる外国人[がいこくじん]観光客[かんこうきゃく]の数[かず]は飛躍[ひやく]的[てき]に増[ふ]えた。政府[せいふ]が推進[すいしん]する「観光[かんこう]立国[りっこく]」政策[せいさく]と、円安[えんやす]の追[お]い風[かぜ]が相[あい]まって、2019年[ねん]には年間[ねんかん]三千[さんぜん]万[まん]人[にん]を超[こ]える観光客[かんこうきゃく]が日本[にほん]を訪[おとず]れた。疫病[えきびょう]の世界的[せかいてき]流行[りゅうこう]で一時[いちじ]落[お]ち込[こ]んだものの、制限[せいげん]が緩和[かんわ]されると数字[すうじ]は再[ふたた]び急上昇[きゅうじょうしょう]した。東京[とうきょう]、京都[きょうと]、大阪[おおさか]といった大[おお]都市[とし]だけでなく、地方[ちほう]の小[ちい]さな町[まち]まで、外国人[がいこくじん]の姿[すがた]が目立[めだ]つようになった。この現象[げんしょう]は、日本[にほん]社会[しゃかい]に大[おお]きな変化[へんか]をもたらしている。",
      "観光[かんこう]の経済[けいざい]的[てき]な恩恵[おんけい]は計[はか]り知[し]れない。特[とく]に地方[ちほう]において、観光[かんこう]は地域[ちいき]経済[けいざい]の起爆[きばく]剤[ざい]として機能[きのう]している。過疎[かそ]化[か]に悩[なや]む地方[ちほう]の町[まち]でも、独自[どくじ]の資源[しげん]を活[い]かした観光[かんこう]事業[じぎょう]に取[と]り組[く]むことで、雇用[こよう]を生[う]み出[だ]し、人口[じんこう]の流出[りゅうしゅつ]に歯止[はどめ]をかける例[れい]が出[で]始[はじ]めた。宿泊[しゅくはく]施設[しせつ]、飲食[いんしょく]業[ぎょう]、交通[こうつう]機関[きかん]など、関連[かんれん]産業[さんぎょう]全体[ぜんたい]が活況[かっきょう]を呈[てい]し、地方[ちほう]創生[そうせい]の強[つよ]い味方[みかた]となっている。まさに、観光[かんこう]は日本[にほん]の経済[けいざい]を支[ささ]える新[あたら]しい柱[はしら]となり得[え]るのである。",
      "しかし、急激[きゅうげき]な観光客[かんこうきゃく]の増[ぞう]加[か]は、深刻[しんこく]な問題[もんだい]も引[ひ]き起[お]こした。いわゆる「オーバーツーリズム」と呼[よ]ばれる現象[げんしょう]である。京都[きょうと]や鎌倉[かまくら]などの人気[にんき]観光地[かんこうち]では、観光客[かんこうきゃく]の殺到[さっとう]により、地元[じもと]住民[じゅうみん]の生活[せいかつ]が圧迫[あっぱく]されている。バスや電車[でんしゃ]は常[つね]に混[こ]み合[あ]い、日常[にちじょう]の買[か]い物[もの]すら困難[こんなん]になる住民[じゅうみん]もいる。住宅[じゅうたく]地[ち]に観光客[かんこうきゃく]が無[む]遠慮[えんりょ]に踏[ふ]み込[こ]むケースも後[た]を絶[た]たない。観光[かんこう]の恩恵[おんけい]を受[う]ける企業[きぎょう]と、その負担[ふたん]を被[こうむ]る住民[じゅうみん]との間[あいだ]に、格差[かくさ]が生[しょう]じている。光[ひかり]と影[かげ]が、鮮明[せんめい]に対比[たいひ]されているのである。",
      "文化[ぶんか]の側面[そくめん]にも懸念[けねん]がある。伝統[でんとう]文化[ぶんか]が、観光客[かんこうきゃく]向[む]けの商品[しょうひん]として消費[しょうひ]される現象[げんしょう]が広[ひろ]がっている。神社[じんじゃ]の祭典[さいてん]や郷土[きょうど]芸能[げいのう]が、本来[ほんらい]の神聖[しんせい]さや地域[ちいき]性[せい]を失[うしな]い、単[たん]なる観光[かんこう]資源[しげん]として扱[あつか]われるケースも少[すく]なくない。また、観光客[かんこうきゃく]の増加[ぞうか]に伴[ともな]い、地元[じもと]の飲食[いんしょく]店[てん]が観光客[かんこうきゃく]向[む]けに変[か]わり、住民[じゅうみん]の日常[にちじょう]の食文化[しょくぶんか]が失[うしな]われるという問題[もんだい]も指摘[してき]されている。文化[ぶんか]が観光[かんこう]化[か]されることで生[しょう]じる歪[ゆが]みは、簡単[かんたん]には修復[しゅうふく]できない。",
      "環境[かんきょう]への負荷[ふか]も無視[むし]できない。富士山[ふじさん]の登山[とざん]者[しゃ]増[ぞう]加[か]は、山[やま]の自然[しぜん]環境[かんきょう]を損[そこ]ね、ゴミ問題[もんだい]を深刻[しんこく]化[か]させた。世界[せかい]遺産[いさん]である小笠原[おがさわら]諸島[しょとう]では、観光客[かんこうきゃく]の増加[ぞうか]が生態[せいたい]系[けい]に悪影響[あくえいきょう]を及[およ]ぼす恐[おそ]れが指摘[してき]されている。自然[しぜん]資源[しげん]は有限[ゆうげん]であり、一度[いちど]破壊[はかい]されれば回復[かいふく]には長[なが]い時間[じかん]を要[よう]する。観光[かんこう]の恩恵[おんけい]を享受[きょうじゅ]する一方[いっぽう]で、その代償[だいしょう]を環境[かんきょう]が背負[せお]うという構造[こうぞう]は、持続[じぞく]可能[かのう]とは言[い]い難[がた]い。",
      "こうした課題[かだい]に応[おう]え、持続[じぞく]可能[かのう]な観光[かんこう]の模索[もさく]が進[すす]んでいる。政府[せいふ]は「持続[じぞく]可能[かのう]な観光[かんこう]国[こく]」を目指[めざ]し、地域[ちいき]の受入[うけいれ]力[りょく]を考慮[こうりょ]した観光客[かんこうきゃく]の分散[ぶんさん]や、高品質[こうひんしつ]な体験[たいけん]型[がた]観光[かんこう]の推進[すいしん]を打[う]ち出[だ]した。地域[ちいき]ごとに「観光[かんこう]上限[じょうげん]」を設[もう]け、環境[かんきょう]と文化[ぶんか]の保全[ほぜん]と観光[かんこう]収入[しゅうにゅう]の両立[りょうりつ]を図[はか]る試[こころ]みも始[はじ]まっている。また、観光客[かんこうきゃく]にマナーを促[うなが]す教育[きょういく]活動[かつどう]や、地元[じもと]経済[けいざい]に利益[りえき]が還元[かんげん]される仕組[しく]みの構築[こうちく]も進[すす]む。観光[かんこう]を、単[たん]なる数[かず]の追[お]求[きゅう]から、質[しつ]の追[お]求[きゅう]へと転換[てんかん]する動[うご]きが始[はじ]まっているのである。",
      "観光[かんこう]が地域[ちいき]社会[しゃかい]と共存[きょうそん]するためには、住民[じゅうみん]、観光客[かんこうきゃく]、行政[ぎょうせい]、事業者[じぎょうしゃ]の四者[よんしゃ]が協働[きょうどう]することが不可欠[ふかつけつ]である。住民[じゅうみん]の生活[せいかつ]を守[まも]りつつ、観光客[かんこうきゃく]に豊[ゆた]かな体験[たいけん]を提供[ていきょう]し、地域[ちいき]経済[けいざい]を持続[じぞく]可能[かのう]に発展[はってん]させる。この三[みっ]つの目標[もくひょう]を同時[どうじ]に達成[たっせい]することは容易[ようい]ではないが、決[けっ]して不可能[ふかのう]ではない。観光[かんこう]がもたらす光[ひかり]を最大限[さいだいげん]に活[い]かし、影[かげ]を最小限[さいしょうげん]に抑[おさ]える知恵[ちえ]こそが、これからの日本[にほん]社会[しゃかい]に求[もと]められている。観光[かんこう]という名[な]の鏡[かがみ]に映[うつ]る日本[にほん]の姿[すがた]を、私[わたし]たちはどう描[えが]きたいのだろうか。その問[とい]いに答[こた]える責任[せきにん]が、今[いま]の世代[せだい]にはある。"
    ],
    translation: [
      "Since 2014, the number of foreign tourists visiting Japan has increased dramatically. With the government's tourism-nation policy and the tailwind of a weak yen, in 2019 more than thirty million tourists a year visited Japan. Although it fell during the global pandemic, once restrictions were eased, the numbers surged again. Not only major cities like Tokyo, Kyoto, and Osaka, but also small regional towns came to show many foreign visitors. This phenomenon is bringing major change to Japanese society.",
      "The economic benefits of tourism are immeasurable. Particularly in the regions, tourism functions as a detonator for regional economies. Even towns troubled by depopulation have begun to generate employment and slow population outflow by engaging in tourism businesses that make use of their unique resources. Lodging facilities, dining, and transportation — the related industries as a whole are lively, becoming a strong ally of regional revitalization. Tourism can indeed become a new pillar supporting the Japanese economy.",
      "However, the rapid increase of tourists also caused serious problems. It is the phenomenon called overtourism. In popular destinations like Kyoto and Kamakura, residents' lives are pressured by the influx of tourists. Buses and trains are always crowded, and some residents find even daily shopping difficult. Cases of tourists entering residential areas without hesitation also continue. A gap arises between companies that benefit from tourism and residents who bear the burden. Light and shadow are sharply contrasted.",
      "There are also concerns on the cultural side. The phenomenon of traditional culture being consumed as products for tourists is spreading. Cases are not few in which shrine festivals and local performing arts lose their original sanctity and regional character and are treated as mere tourism resources. Also, with the increase in tourists, local restaurants change to cater to tourists, and the loss of residents' daily food culture has been pointed out. The distortion arising from the tourism-ization of culture is not easily repaired.",
      "The environmental burden cannot be ignored either. The increase of climbers on Mount Fuji has damaged the mountain's natural environment and worsened the garbage problem. On the Ogasawara Islands, a World Heritage site, the increase of tourists is feared to adversely affect the ecosystem. Natural resources are finite, and once destroyed, recovery takes a long time. The structure in which the environment bears the price while the benefits of tourism are enjoyed is hardly sustainable.",
      "In response to these challenges, the search for sustainable tourism is advancing. The government has set its sights on a sustainable tourism nation, promoting the dispersal of tourists in consideration of regional hosting capacity and high-quality experiential tourism. Trials have also begun to set tourism caps by region and to balance environmental and cultural preservation with tourism income. In addition, educational activities prompting tourist manners and the construction of systems that return profits to the local economy are also proceeding. A movement is beginning to shift tourism from mere pursuit of quantity to pursuit of quality.",
      "For tourism to coexist with local communities, the collaboration of residents, tourists, administration, and businesses is indispensable. Protecting residents' lives, providing tourists with rich experiences, and developing the regional economy sustainably. Achieving these three goals simultaneously is not easy, but it is by no means impossible. The wisdom to maximize the light that tourism brings and minimize the shadow is what is required of Japanese society going forward. What figure of Japan, mirrored in the name of tourism, do we wish to depict? The current generation has the responsibility to answer that question."
    ],
    questions: [
      {
        q: "What contributed to the surge of foreign tourists in Japan after 2014?",
        choices: ["A strong yen and visa restrictions", "The tourism-nation policy and a weak yen", "Reduced flight availability", "Closed borders"],
        answerIndex: 1,
        explanation: "The text names 政府が推進する観光立国政策と円安の追い風 — the tourism-nation policy and the weak yen's tailwind."
      },
      {
        q: "What economic role does tourism play in regional areas?",
        choices: ["It decreases employment", "It functions as a detonator for regional economies, generating jobs and slowing population outflow", "It has no effect", "It harms local agriculture"],
        answerIndex: 1,
        explanation: "Tourism functions as 地域経済の起爆剤, generating employment and slowing population outflow (人口の流出に歯止をかける)."
      },
      {
        q: "What is the core of the overtourism problem described in the passage?",
        choices: ["A gap between companies that benefit and residents who bear the burden", "Too few tourists overall", "Lack of transportation", "Too few hotels"],
        answerIndex: 0,
        explanation: "A gap arises between companies that 恩恵を受ける and residents who 負担を被る — a gap between benefiting companies and burden-bearing residents."
      },
      {
        q: "What cultural concern does the passage raise?",
        choices: ["Traditional culture is being preserved too strictly", "Festivals and performing arts lose sanctity and become mere tourism resources", "Tourists are not interested in culture", "Food culture is unaffected"],
        answerIndex: 1,
        explanation: "The text warns that shrine festivals and local performing arts lose 本来の神聖さや地域性 and are treated as mere tourism resources."
      },
      {
        q: "Which N2 grammar pattern expresses 'tourism can indeed become a new pillar'?",
        choices: ["〜に過ぎない", "〜得る (can / is possible)", "〜限り", "〜次第"],
        answerIndex: 1,
        explanation: "新しい柱となり得る uses 〜得る meaning 'can / is possible'."
      }
    ]
  }
];
