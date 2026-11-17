import type { StoryData } from "@/lib/types";

// N2 short stories set H (new batch).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole run. Kana, katakana, digits, and
// punctuation have no brackets. titleReading is full kana with NO brackets.
// N2 grammar targets: 〜に過ぎない, 〜どころか, 〜つつある, 〜おそれがある,
// 〜かねない, 〜わけにはいかない, 〜ずにはいられない, 〜に他ならない,
// 〜次第, 〜際, 〜上で, 〜においては, 〜にとって, 〜とはいえ, 〜からといって,
// 〜か否か, 〜を機に, 〜こそ, 〜ざるを得ない, 〜たびに, 〜に比べ, etc.
// Topics: virtual reality world, gene therapy ethics, post-apocalyptic survival,
// historical archive discovery, biohazard outbreak, philosophical retreat,
// diplomatic immunity, digital currency revolution, memory erasure clinic,
// intergenerational conflict.

export const storiesN2NewH: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n2n-71 — A virtual reality world (仮想現実世界)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-71",
    title: "架空[かくう]の楽園[らくえん]に囚[とら]われて",
    titleReading: "かくうのらくえんにとらわれて",
    level: "N2",
    summary: "A man who spends most of his waking hours in a virtual city must weigh its perfect comfort against the slow decay of his real body.",
    estMinutes: 6,
    tags: ["virtual-reality", "dystopia", "technology"],
    body: [
      "二千五十年代[にせんごじゅうねんだい]、私[わたし]は一日[いちにち]の大半[たいはん]を仮想現実[かそうげんじつ]の街[まち]で過[す]ごしている。ネオ・エデンと名付[なづ]けられたこの都市[とし]には、現実[げんじつ]には存在[そんざい]しない商店街[しょうてんがい]や広場[ひろば]が広[ひろ]がっている。",
      "街[まち]の住人[じゅうにん]は総[そう]じて親切[しんせつ]で、天気[てんき]も毎日[まいにち]晴[は]れだ。ログアウトするたびに、現実[げんじつ]の部屋[へや]の狭[せま]さと匂[にお]いが、まるで他人[たにん]のもののように感[かん]じられる。",
      "運営[うんえい]会社[がいしゃ]は先週[せんしゅう]、新[あたら]しい規約[きやく]を発表[はっぴょう]した。連続[れんぞく]利用[りよう]時間[じかん]が十二時間[じゅうにじかん]を超[こ]えた利用者[りようしゃ]には、強制的[きょうせいてき]にログアウトが行[おこな]われるという。",
      "私[わたし]はこの知[し]らせを聞[き]いて、むしろ安堵[あんど]した。というのも、最近[さいきん]は現実[げんじつ]の肉体[にくたい]が衰[おとろ]えつつあるのを感[かん]じていたからに過[す]ぎない。",
      "私[わたし]の隣人[りんじん]であった健太[けんた]は、とうとう現実[げんじつ]に戻[もど]らず、意識[いしき]だけが街[まち]に残[のこ]る状態[じょうたい]に陥[おちい]った。医者[いしゃ]は過[す]ぎた没入[ぼつにゅう]による脳[のう]の萎縮[いしゅく]だと診断[しんだん]した。",
      "この事件[じけん]が公[おおやけ]になるや否[いな]や、社会[しゃかい]全体[ぜんたい]に仮想世界[かそうせかい]への警戒[けいかい]感[かん]が広[ひろ]まった。とは言[い]え、利用者[りようしゃ]数[すう]が減[へ]るどころか、むしろ増[ふ]え続[つづ]けている。",
      "私[わたし]も例外[れいがい]ではない。規約[きやく]が変[か]わった今[いま]でも、毎晩[まいばん]決[き]まった時間[じかん]に街[まち]へ向[む]かう。そこには現実[げんじつ]にはない友人[ゆうじん]の笑顔[えがお]があるからだ。",
      "ただ、今[いま]の私[わたし]には、少[すく]なくとも現実[げんじつ]の空気[くうき]を吸[す]う時間[じかん]を大切[たいせつ]にせずにはいられない。完全[かんぜん]な楽園[らくえん]は、人間[にんげん]にとって必要[ひつよう]なのか、私[わたし]にはもう分[わ]からない。"
    ],
    translation: [
      "In the 2050s, I spend most of each day in a virtual city. Neo Eden, as the city is called, is filled with shopping streets and plazas that do not exist in reality.",
      "The residents of the city are by and large kind, and the weather is sunny every day. Each time I log out, the cramped room and stale smells of reality feel as if they belong to a stranger.",
      "Last week the operating company announced a new regulation. Users whose continuous usage time exceeds twelve hours will be forcibly logged out.",
      "Hearing this news, I felt rather relieved. That is simply because lately I had begun to feel my physical body weakening.",
      "My neighbor, Kenta, ultimately never returned to reality and fell into a state in which only his consciousness remained in the city. A doctor diagnosed it as brain atrophy caused by excessive immersion.",
      "The moment this incident became public, a sense of caution about the virtual world spread through society as a whole. Even so, rather than decreasing, the number of users continues to grow.",
      "I am no exception. Even now that the rules have changed, I head for the city at the same time every evening, because the smiles of friends I cannot find in reality are there.",
      "Yet for the present me, I cannot help but cherish at least the time I spend breathing the air of reality. Whether a perfect paradise is even necessary for human beings, I can no longer say."
    ],
    vocab: [
      { word: "仮想現実", reading: "かそうげんじつ", meaning: "virtual reality" },
      { word: "架空", reading: "かくう", meaning: "fictitious" },
      { word: "楽園", reading: "らくえん", meaning: "paradise" },
      { word: "囚われる", reading: "とらわれる", meaning: "to be trapped" },
      { word: "住人", reading: "じゅうにん", meaning: "resident" },
      { word: "規約", reading: "きやく", meaning: "regulation" },
      { word: "強制的", reading: "きょうせいてき", meaning: "compulsory" },
      { word: "安堵", reading: "あんど", meaning: "relief" },
      { word: "肉体", reading: "にくたい", meaning: "physical body" },
      { word: "衰える", reading: "おとろえる", meaning: "to decline" },
      { word: "没入", reading: "ぼつにゅう", meaning: "immersion" },
      { word: "萎縮", reading: "いしゅく", meaning: "atrophy" },
      { word: "診断", reading: "しんだん", meaning: "diagnosis" },
      { word: "警戒", reading: "けいかい", meaning: "vigilance" },
      { word: "例外", reading: "れいがい", meaning: "exception" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-72 — A gene therapy ethics case (遺伝子治療の倫理)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-72",
    title: "遺伝子[いでんし]の書[か]き換[かえ]えを巡[めぐ]って",
    titleReading: "いでんしのかきかえをめぐって",
    level: "N2",
    summary: "A hospital ethics committee reviews a controversial request from parents who want gene therapy to correct their son's disease and to enhance his cognition.",
    estMinutes: 7,
    tags: ["bioethics", "medicine", "committee"],
    body: [
      "先週[せんしゅう]、市立[しりつ]病院[びょういん]の倫理委員会[りんりいいんかい]に召集[しょうしゅう]がかかった。議題[ぎだい]は、ある夫婦[ふうふ]が申[もう]し出[で]た遺伝子治療[いでんじちりょう]の是非[ぜひ]であった。",
      "夫婦[ふうふ]の息子[むすこ]は、重[おも]い遺伝性[いでんせい]の筋疾患[きんしっかん]を抱[かか]えている。提案[ていあん]は、原因[げんいん]遺伝子[いでんし]を修正[しゅうせい]するのみならず、ついでに認知[にんち]能力[のうりょく]の強化[きょうか]も行[おこな]うというものであった。",
      "委員会[いいんかい]の委員長[いいんちょう]を務[つと]める藤本[ふじもと]教授[きょうじゅ]は、治療[ちりょう]自体[じたい]には賛成[さんせい]だが、強化[きょうか]の部分[ぶぶん]には否定的[ひていてき]であった。「病気[びょうき]を治[なお]すのと、人間[にんげん]を改良[かいりょう]するのは別[べつ]次元[じげん]の問題[もんだい]だ」と彼[かれ]は言[い]った。",
      "若手[わかて]の分子生物学者[ぶんしせいぶつがくしゃ]である陳[ちん]は反論[はんろん]した。「技術[ぎじゅつ]があっても使[つか]わないなら、それに過[す]ぎない倫理的[りんりてき]な怠慢[たいまん]に陥[おちい]るおそれがある」と彼[かれ]は主張[しゅちょう]した。",
      "私[わたし]は委員[いいん]の一人[ひとり]として、両者[りょうしゃ]の意見[いけん]を聞[き]き入[い]れつつ、自[みずか]らの判断[はんだん]を熟考[じゅっこう]していた。強化[きょうか]を認[みと]めれば、富裕[ふゆう]層[そう]のみが有利[ゆうり]になる社会[しゃかい]を招[まね]きかねない。",
      "他方[たほう]、治療[ちりょう]を拒否[きょひ]して子[こ]に苦痛[くつう]を強[し]いるのも、親[おや]として許[ゆる]されるものではない。二者[にしゃ]択一[たくいつ]の選択[せんたく]に、私[わたし]は追[お]い詰[つ]められた気持[きも]ちであった。",
      "結局[けっきょく]、委員会[いいんかい]は治療[ちりょう]目的[もくてき]の遺伝子[いでんし]修正[しゅうせい]のみを条件[じょうけん]付[づ]きで承認[しょうにん]した。強化[きょうか]については、国[くに]レベルの指針[しせん]が示[しめ]されるまで凍結[とうけつ]する、という妥協[だきょう]に落[お]ち着[つ]いた。",
      "会議[かいぎ]の後[のち]、藤本[ふじもと]教授[きょうじゅ]は「技術[ぎじゅつ]が可能[かのう]にするものと、人間[にんげん]が選[えら]ぶべきものは必[かなら]ずしも同[おな]じではない」と私[わたし]に漏[も]らした。その言葉[ことば]が胸[むね]に残[のこ]っている。"
    ],
    translation: [
      "Last week, the ethics committee of the municipal hospital was convened. The agenda was whether to approve a gene therapy proposed by a married couple.",
      "The couple's son suffers from a severe hereditary muscle disease. The proposal was not only to correct the causative gene but also, incidentally, to enhance his cognitive abilities.",
      "Professor Fujimoto, who chairs the committee, supports the treatment itself but opposes the enhancement. 'Curing an illness and improving a human being are problems of entirely different dimensions,' he said.",
      "Chen, a young molecular biologist, countered. 'If we possess the technology but refuse to use it, we risk falling into mere ethical negligence,' he argued.",
      "As one of the committee members, I absorbed both opinions while carefully weighing my own judgment. If we approve enhancement, we could invite a society in which only the wealthy benefit.",
      "On the other hand, refusing treatment and inflicting pain on the child is also unacceptable for parents. I felt driven into a corner by this binary choice.",
      "In the end, the committee approved only the gene correction for therapeutic purposes, on certain conditions. As for enhancement, it was frozen until national guidelines are issued, a compromise we settled upon.",
      "After the meeting, Professor Fujimoto confided to me, 'What technology makes possible and what human beings should choose are not necessarily the same.' Those words remain in my heart."
    ],
    vocab: [
      { word: "倫理委員会", reading: "りんりいいんかい", meaning: "ethics committee" },
      { word: "召集", reading: "しょうしゅう", meaning: "convening" },
      { word: "遺伝子治療", reading: "いでんじちりょう", meaning: "gene therapy" },
      { word: "是非", reading: "ぜひ", meaning: "right and wrong" },
      { word: "筋疾患", reading: "きんしっかん", meaning: "muscle disease" },
      { word: "認知能力", reading: "にんちのうりょく", meaning: "cognitive ability" },
      { word: "強化", reading: "きょうか", meaning: "enhancement" },
      { word: "委員長", reading: "いいんちょう", meaning: "chairperson" },
      { word: "分子生物学", reading: "ぶんしせいぶつがく", meaning: "molecular biology" },
      { word: "怠慢", reading: "たいまん", meaning: "negligence" },
      { word: "富裕層", reading: "ふゆうそう", meaning: "wealthy class" },
      { word: "拒否", reading: "きょひ", meaning: "refusal" },
      { word: "指針", reading: "しせん", meaning: "guideline" },
      { word: "凍結", reading: "とうけつ", meaning: "freeze" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-73 — A post-apocalyptic survival (終末世界での生存)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-73",
    title: "廃墟[はいきょ]の街[まち]で燃[も]える火[ひ]",
    titleReading: "はいきょのまちでもえるひ",
    level: "N2",
    summary: "Five years after a great catastrophe, a small party of survivors leaves a ruined city in search of uncontaminated water despite rumors of hostile neighbors.",
    estMinutes: 6,
    tags: ["apocalypse", "survival", "ruins"],
    body: [
      "大変[たいへん]な災害[さいがい]が起[お]きてから、もう五年[ごねん]が経[た]った。私[わたし]たちは崩[くず]れたビルの地下[ちか]を隠[かく]れ家[が]として、日々[ひび]を凌[しの]いでいる。",
      "食料[しょくりょう]は瓦礫[がれき]の下[した]から見[み]つける缶詰[かんづめ]が主[おも]で、水[みず]は雨水[あまみず]を濾過[ろか]して使[つか]っている。安全[あんぜん]と呼[よ]べるものは何[なに]一[ひと]つないが、それでも私[わたし]たちは生[い]きている。",
      "先週[せんしゅう]、最寄[もよ]りの井戸[いど]の水[みず]が濁[にご]り始[はじ]めた。長[なが]い間[あいだ]使[つか]い続[つづ]けてきた水源[すいげん]が、ついに限界[げんかい]を迎[むか]えたらしい。",
      "リーダーの律[りつ]は、北[きた]の山[やま]の方[ほう]へ新[あたら]しい水源[すいげん]を探[さが]しに行[い]こうと提案[ていあん]した。しかし、その方向[ほうこう]には他[た]の生存者[せいぞんしゃ]グループの縄張[なわば]りがあるという噂[うわさ]があった。",
      "私[わたし]は反対[はんたい]した。あえて危険[きけん]を冒[おか]す必要[ひつよう]はない、と主張[しゅちょう]した。律[りつ]は静[しず]かに首[くび]を振[ふ]った。「このままでは、私[わたし]たち全員[ぜんいん]が干上[ひあ]がるおそれがある」と言[い]った。",
      "結局[けっきょく]、五人[ごにん]の小[ちい]さな隊[たい]が編成[へんせい]され、私[わたし]もその一員[いちいん]に選[えら]ばれた。出発[しゅっぱつ]前夜[ぜんや]、私[わたし]たちは焚火[たきび]を囲[かこ]んで互[たが]いの無事[ぶじ]を祈[いの]った。",
      "翌朝[よくあさ]、私[わたし]たちは廃墟[はいきょ]の間[あいだ]を抜[ぬ]けて北[きた]へ向[む]かった。道中[どうちゅう]、崩落[ほうらく]した道路[どうろ]や錆[さ]びた車[くるま]の残骸[ざんがい]が、かつてこの街[まち]が正常[せいじょう]だった時代[じだい]を思[おも]い出[だ]させた。",
      "どれほど先[さき]が険[けわ]しくとも、私[わたし]たちは進[すす]むしかない。希望[きぼう]を持[も]たずには、とても生[い]き抜[ぬ]けるとは思[おも]えないからだ。"
    ],
    translation: [
      "It has been five years since the great catastrophe occurred. We have made the basement of a collapsed building our hideout, scraping by day after day.",
      "Our food is mainly canned goods found beneath the rubble, and we filter rainwater for drinking. There is nothing we can call safe, yet we are alive.",
      "Last week, the water in the nearest well began to grow cloudy. It seems the water source we had relied on for so long has finally reached its limit.",
      "Ritsu, our leader, proposed going north toward the mountains to search for a new water source. But there were rumors that another group of survivors held territory in that direction.",
      "I opposed it, arguing there was no need to deliberately court danger. Ritsu quietly shook his head. 'At this rate, we risk all of us drying up,' he said.",
      "In the end, a small party of five was formed, and I was chosen as one of them. On the night before departure, we sat around a campfire and prayed for one another's safety.",
      "The next morning, we threaded our way through the ruins and headed north. Along the way, the collapsed roads and rusted car wreckage reminded me of the time when this city was once normal.",
      "However steep the path ahead, we have no choice but to press on, for without hope I cannot imagine surviving."
    ],
    vocab: [
      { word: "廃墟", reading: "はいきょ", meaning: "ruins" },
      { word: "瓦礫", reading: "がれき", meaning: "rubble" },
      { word: "隠れ家", reading: "かくれが", meaning: "hideout" },
      { word: "凌ぐ", reading: "しのぐ", meaning: "to endure" },
      { word: "缶詰", reading: "かんづめ", meaning: "canned goods" },
      { word: "濾過", reading: "ろか", meaning: "filtration" },
      { word: "濁る", reading: "にごる", meaning: "to become cloudy" },
      { word: "水源", reading: "すいげん", meaning: "water source" },
      { word: "縄張り", reading: "なわばり", meaning: "territory" },
      { word: "噂", reading: "うわさ", meaning: "rumor" },
      { word: "干上がる", reading: "ひあがる", meaning: "to dry up" },
      { word: "編成", reading: "へんせい", meaning: "formation" },
      { word: "残骸", reading: "ざんがい", meaning: "wreckage" },
      { word: "険しい", reading: "けわしい", meaning: "steep" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-74 — A historical archive discovery (歴史アーカイブの発見)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-74",
    title: "古[ふる]い書庫[しょこ]が語[かた]る真実[しんじつ]",
    titleReading: "ふるいしょこがかたるしんじつ",
    level: "N2",
    summary: "A young archivist discovers sealed documents that contradict the official account of a regional famine, forcing her director to decide whether to publish.",
    estMinutes: 7,
    tags: ["history", "archive", "truth"],
    body: [
      "市立[しりつ]図書館[としょかん]の地下[ちか]書庫[しょこ]で、封[ふう]印[いん]された箱[はこ]が見[み]つかったのは、先月[せんげつ]のことである。私[わたし]は整理[せいり]の途中[とちゅう]で、偶然[ぐうぜん]その箱[はこ]を手[て]にした。",
      "箱[はこ]の中[なか]には、大正[たいしょう]時代[じだい]末[まつ]の地方[ちほう]役人[やくにん]の日記[にっき]や書簡[しょかん]が、手紙[てがみ]の束[たば]ほども入[はい]っていた。どの文書[ぶんしょ]も、当時[とうじ]の深刻[しんこく]な飢饉[ききん]について言及[げんきゅう]していた。",
      "私[わたし]が驚[おどろ]いたのは、公式[こうしき]記録[きろく]とは全[まった]く異[こと]なる数字[すうじ]が記[しる]されていた点[てん]である。死亡[しぼう]者[しゃ]数[すう]は、教科書[きょうかしょ]に載[の]る数[すう]の三倍[さんばい]に達[たっ]していた。",
      "上司[じょうし]の柏木[かしわぎ]館長[かんちょう]に報告[ほうこく]すると、彼[かれ]はすぐに眉間[みけん]に皺[しわ]を寄[よ]せた。「この文書[ぶんしょ]を公[おおやけ]にすれば、郷土[きょうど]史[し]の通説[つうせつ]が覆[くつがえ]る。慎重[しんちょう]に扱[あつか]わねばならない」と彼[かれ]は言[い]った。",
      "私[わたし]は反発[はんぱつ]した。歴史[れきし]が真実[しんじつ]から遠[とお]ざかることを、黙[だま]って見過[みす]ごすわけにはいかなかった。たとえ地域[ちいき]の評判[ひょうばん]に傷[きず]がつこうとも、事実[じじつ]は残[のこ]されるべきだ。",
      "柏木[かしわぎ]は私[わたし]の熱意[ねつい]に少[すこ]し軟化[なんか]した様子[ようす]であった。「君[きみ]の言[い]うことももっともだ。ただし、文書[ぶんしょ]の鑑定[かんてい]を経[へ]てからでなければ、公表[こうひょう]は認[みと]められない」と答[こた]えた。",
      "その後[のち]三週間[さんしゅうかん]、私[わたし]は専門[せんもん]家[か]の協力[きょうりょく]を得[え]て文書[ぶんしょ]の鑑定[かんてい]を進[すす]めた。結果[けっか]、日記[にっき]の筆跡[ひっせき]や紙[かみ]の材質[ざいしつ]から、本物[ほんもの]であると確認[かくにん]された。",
      "来月[らいげつ]、この文書[ぶんしょ]は市民[しみん]に向[む]けて公開[こうかい]される予定[よてい]だ。私[わたし]は今[いま]、小[ちい]さな書庫[しょこ]が大[おお]きな真実[しんじつ]を担[にな]った瞬間[しゅんかん]に立[た]ち会[あ]ったことを誇[ほこ]りに思[おも]っている。"
    ],
    translation: [
      "Last month, a sealed box was discovered in the basement archive of the municipal library. While sorting, I happened to take it into my hands.",
      "Inside the box, packed in bundles like stacks of letters, were the diaries and correspondence of a local official from the late Taisho period. Every document referred to the severe famine of that era.",
      "What startled me was that the figures recorded were entirely different from the official records. The number of deaths had reached three times what appears in textbooks.",
      "When I reported it to my supervisor, Director Kashiwagi, he immediately frowned. 'If these documents are made public, the established view of our local history will be overturned. We must handle them carefully,' he said.",
      "I pushed back. I could not silently watch history drift away from the truth. Even if it damages the region's reputation, the facts should be preserved.",
      "Kashiwagi seemed somewhat softened by my enthusiasm. 'What you say is reasonable. However, publication cannot be approved unless the documents are authenticated,' he replied.",
      "Over the next three weeks, with the help of specialists, I proceeded with the authentication of the documents. In the end, the handwriting and the paper material confirmed they were genuine.",
      "Next month, these documents are scheduled to be made public to citizens. I am proud to have witnessed the moment when a small archive carried a great truth."
    ],
    vocab: [
      { word: "書庫", reading: "しょこ", meaning: "archive" },
      { word: "封印", reading: "ふういん", meaning: "seal" },
      { word: "書簡", reading: "しょかん", meaning: "correspondence" },
      { word: "飢饉", reading: "ききん", meaning: "famine" },
      { word: "公式記録", reading: "こうしききろく", meaning: "official record" },
      { word: "通説", reading: "つうせつ", meaning: "established theory" },
      { word: "覆る", reading: "くつがえる", meaning: "to overturn" },
      { word: "見過ごす", reading: "みすごす", meaning: "to overlook" },
      { word: "評判", reading: "ひょうばん", meaning: "reputation" },
      { word: "鑑定", reading: "かんてい", meaning: "authentication" },
      { word: "筆跡", reading: "ひっせき", meaning: "handwriting" },
      { word: "材質", reading: "ざいしつ", meaning: "material" },
      { word: "公開", reading: "こうかい", meaning: "publication" },
      { word: "担う", reading: "になう", meaning: "to bear" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-75 — A biohazard outbreak (バイオハザード発生)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-75",
    title: "不可視[ふかし]の脅威[きょうい]が街[まち]を覆[おお]う",
    titleReading: "ふかしのきょういがまちをおおう",
    level: "N2",
    summary: "When an unknown pathogen spreads through a port city, a public health officer races to contain both the outbreak and the panic multiplying alongside it.",
    estMinutes: 7,
    tags: ["biohazard", "outbreak", "public-health"],
    body: [
      "港町[みなとまち]で未知[みち]の感染症[かんせんしょう]が報告[ほうこく]されたのは、先週[せんしゅう]火曜日[かようび]の夜[よる]であった。最初[さいしょ]は漁師[りょうし]の一人[ひとり]が咳[せき]と高熱[こうねつ]を訴[うった]えたに過[す]ぎなかった。",
      "三日[みっか]も経[た]たぬうちに、患者[かんじゃ]は二十人[にじゅうにん]を超[こ]えた。いずれも港[みなと]近[ちか]くの市場[いちば]を利用[りよう]していた人々[ひとびと]であった。私[わたし]は保健所[ほけんじょ]の責任者[せきにんしゃ]として、即座[そくざ]に対応[たいおう]に追[お]われた。",
      "病魔[びょうま]の正体[しょうたい]は不明[ふめい]であった。どの既存[きぞん]のウイルスとも一致[いっち]しない遺伝子[いでんし]配列[はいれつ]が検出[けんしゅつ]され、研究機関[けんきゅうきかん]も戸惑[とまど]いを隠[かく]せなかった。",
      "市役所[しやくしょ]は緊急[きんきゅう]会議[かいぎ]を開[ひら]き、市場[いちば]の即時[そくじ]閉鎖[へいさ]を決定[けってい]した。しかし、閉鎖[へいさ]の知[し]らせが広[ひろ]まると同時[どうじ]に、市民[しみん]の間[あいだ]で恐怖[きょうふ]が連鎖[れんさ]し始[はじ]めた。",
      "噂[うわさ]は瞬[またた]く間[ま]に広[ひろ]まった。「水道[すいどう]に毒[どく]が混[ま]じっている」「病院[びょういん]が隠[かく]している」など、根拠[こんきょ]のない話[はなし]が人[ひと]から人[ひと]へと飛[と]び交[か]った。",
      "私[わたし]は毎日[まいにち]、記者[きしゃ]会見[かいけん]で正確[せいかく]な情報[じょうほう]を提供[ていきょう]した。透明性[とうめいせい]を保[たも]たなければ、市民[しみん]の信頼[しんらい]を失[うしな]うおそれがあったからだ。",
      "幸[さいわ]いにも、五日目[いつかめ]に国内[こくない]の研究機関[けんきゅうきかん]が抗体[こうたい]を特定[とくてい]した。血清[けっせい]療法[りょうほう]が間[ま]に合[あ]ったことで、新[あたら]たな患者[かんじゃ]は激減[げきげん]した。",
      "今回[こんかい]の件[けん]で痛感[つうかん]したのは、未知[みち]の脅威[きょうい]に対[たい]しては、情報[じょうほう]こそが最良[さいりょう]の予防薬[よぼうやく]であるということだ。隠[かく]すことの危険[きけん]を、私[わたし]たちは決[けっ]して忘[わす]れてはならない。"
    ],
    translation: [
      "An unknown infectious disease was reported in the port town on Tuesday night last week. At first it was no more than a single fisherman complaining of a cough and high fever.",
      "Before three days had passed, the number of patients exceeded twenty. All of them had used the market near the harbor. As the official in charge at the public health center, I was immediately overwhelmed with the response.",
      "The identity of the disease was unknown. A gene sequence that matched none of the existing viruses was detected, and even the research institutes could not hide their confusion.",
      "The city hall held an emergency meeting and decided to close the market immediately. Yet as news of the closure spread, fear began to chain-react among the citizens at the same time.",
      "Rumors spread in a flash. Groundless talk — that poison had been mixed into the water supply, that hospitals were hiding something — flew from person to person.",
      "Every day I held press conferences to provide accurate information. If we did not maintain transparency, we risked losing the citizens' trust.",
      "Fortunately, on the fifth day a domestic research institute identified an antibody. Because serum therapy arrived in time, the number of new patients dropped sharply.",
      "What I keenly felt from this case is that, against unknown threats, information itself is the best preventive medicine. We must never forget the danger of concealment."
    ],
    vocab: [
      { word: "不可視", reading: "ふかし", meaning: "invisible" },
      { word: "脅威", reading: "きょうい", meaning: "threat" },
      { word: "感染症", reading: "かんせんしょう", meaning: "infectious disease" },
      { word: "保健所", reading: "ほけんじょ", meaning: "public health center" },
      { word: "配列", reading: "はいれつ", meaning: "sequence" },
      { word: "検出", reading: "けんしゅつ", meaning: "detection" },
      { word: "戸惑う", reading: "とまどう", meaning: "to be bewildered" },
      { word: "閉鎖", reading: "へいさ", meaning: "closure" },
      { word: "連鎖", reading: "れんさ", meaning: "chain reaction" },
      { word: "根拠", reading: "こんきょ", meaning: "basis" },
      { word: "透明性", reading: "とうめいせい", meaning: "transparency" },
      { word: "抗体", reading: "こうたい", meaning: "antibody" },
      { word: "血清", reading: "けっせい", meaning: "serum" },
      { word: "激減", reading: "げきげん", meaning: "sharp decline" },
      { word: "予防薬", reading: "よぼうやく", meaning: "preventive medicine" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-76 — A philosophical retreat (哲学的隠遁)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-76",
    title: "静寂[せいじゃく]を求[もと]めて山[やま]に籠[こも]る",
    titleReading: "せいじゃくをもとめてやまにこもる",
    level: "N2",
    summary: "A burned-out corporate employee joins a silent ten-day retreat at a mountain temple and confronts the emptiness of her relentless pursuit of status.",
    estMinutes: 6,
    tags: ["philosophy", "retreat", "mindfulness"],
    body: [
      "四十歳[よんじゅっさい]を目前[もくぜん]にして、私[わたし]は都会[とかい]の企業[きぎょう]を退職[たいしょく]した。疲労[ひろう]が蓄積[ちくせき]し、毎朝[まいあさ]目[め]が覚[さ]めるのが苦痛[くつう]になっていたからである。",
      "友人[ゆうじん]の紹介[しょうかい]で、山[やま]の中[なか]にある古[ふる]い寺院[じいん]で行[おこな]われる静寂[せいじゃく]の合宿[がっしゅく]に参加[さんか]することにした。期間[きかん]は十日間[とおかかん]、私語[しご]と電子機器[でんしきき]が一切[いっさい]禁[きん]じられていた。",
      "初日[しょにち]は、ただ座[すわ]って呼吸[こきゅう]に意識[いしき]を向[む]けるだけの作業[さぎょう]に、逆[ぎゃく]に焦[あせ]りを感[かん]じた。頭[あたま]の中[なか]で仕事[しごと]の未済[みさい]案件[あんけん]が次[つぎ]から次[つぎ]へと浮[う]かんでは消[き]えた。",
      "三日目[みっかめ]の深夜[しんや]、私[わたし]はついに耐[た]えきれなくなり、裏庭[うらにわ]に出[で]て冷[つめ]たい空気[くうき]に触[ふ]れた。満天[まんてん]の星[ほし]を見上[みあ]げた瞬間[しゅんかん]、私[わたし]の中[なか]で何[なに]かが緩[ゆる]んだ。",
      "住職[じゅうしょく]の澪[みお]は、翌朝[よくあさ]の説法[せっぽう]で次[つぎ]のように語[かた]った。「何[なに]かを得[え]ようと焦[あせ]るほど、手[て]の中[なか]からこぼれ落[お]ちるものがある。持[も]たないことこそ、持[も]ち続[つづ]ける道[みち]である。」",
      "その言葉[ことば]を聞[き]いた時[とき]、私[わたし]は自分[じぶん]がこれまで何[なに]を失[うしな]ってきたかに気[き]づかされた。家族[かぞく]の笑顔[えがお]、季節[きせつ]の移[うつ]り変[か]わり、そして自[みずか]らの健康[けんこう]までも、仕事[しごと]の陰[かげ]に埋[うず]もれていた。",
      "十日目[とおかめ]の朝[あさ]、私[わたし]は山[やま]を下[お]りた。都会[とかい]の喧騒[けんそう]に戻[もど]ったものの、以前[いぜん]のように音[おと]に呑[の]み込[こ]まれることはなかった。",
      "今[いま]でも時折[ときおり]、あの夜[よる]の星空[ほしぞら]を思[おも]い出[だ]す。持[も]たずに生[い]きるという選択[せんたく]が、私[わたし]にとって残[のこ]された人生[じんせい]の指針[しせん]になっている。"
    ],
    translation: [
      "Approaching forty, I resigned from my urban corporation. Fatigue had accumulated to the point where waking each morning had become painful.",
      "Through a friend's introduction, I decided to join a silent retreat held at an old temple in the mountains. The period was ten days, and private conversation and electronic devices were entirely forbidden.",
      "On the first day, the simple act of just sitting and turning awareness to my breathing ironically made me feel impatient. In my head, unfinished work tasks surfaced and vanished one after another.",
      "Late on the third night, I could bear it no longer and stepped into the backyard to feel the cold air. The instant I looked up at the star-filled sky, something inside me loosened.",
      "At the next morning's sermon, the abbot, Mio, spoke as follows: 'The more anxiously you try to gain something, the more slips through your fingers. To hold nothing at all is the very way to keep holding on.'",
      "Hearing those words, I was made to realize what I had been losing all along: my family's smiles, the changing of the seasons, and even my own health, all buried beneath the shadow of work.",
      "On the morning of the tenth day, I descended the mountain. Although I returned to the bustle of the city, I was no longer swallowed by the noise as I had been before.",
      "Even now, from time to time, I recall the starry sky of that night. The choice to live without holding on has become the guiding principle for the rest of my life."
    ],
    vocab: [
      { word: "静寂", reading: "せいじゃく", meaning: "silence" },
      { word: "退職", reading: "たいしょく", meaning: "resignation" },
      { word: "蓄積", reading: "ちくせき", meaning: "accumulation" },
      { word: "寺院", reading: "じいん", meaning: "temple" },
      { word: "合宿", reading: "がっしゅく", meaning: "retreat" },
      { word: "私語", reading: "しご", meaning: "private conversation" },
      { word: "焦り", reading: "あせり", meaning: "impatience" },
      { word: "満天", reading: "まんてん", meaning: "sky full (of stars)" },
      { word: "住職", reading: "じゅうしょく", meaning: "abbot" },
      { word: "説法", reading: "せっぽう", meaning: "sermon" },
      { word: "移り変わり", reading: "うつりかわり", meaning: "changing" },
      { word: "喧騒", reading: "けんそう", meaning: "bustle" },
      { word: "呑み込む", reading: "のみこむ", meaning: "to swallow up" },
      { word: "指針", reading: "しせん", meaning: "guiding principle" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-77 — A diplomatic immunity case (外交特権の事例)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-77",
    title: "外交特権[がいこうとっけん]という盾[たて]",
    titleReading: "がいこうとっけんというたて",
    level: "N2",
    summary: "A detective investigating a fatal hit-and-run finds his prime suspect shielded by diplomatic immunity, exposing the gap between law and diplomacy.",
    estMinutes: 7,
    tags: ["law", "diplomacy", "justice"],
    body: [
      "先月[せんげつ]の深夜[しんや]、都心[としん]の交差点[こうさてん]で高級[こうきゅう]車[しゃ]によるひき逃[に]げ事件[じけん]が発生[はっせい]した。被害者[ひがいしゃ]は歩行[ほこう]中[ちゅう]の女性[じょせい]で、病院[びょういん]に運[はこ]ばれたものの、間[ま]もなく死亡[しぼう]が確認[かくにん]された。",
      "私[わたし]は捜査[そうさ]一課[いっか]の刑事[けいじ]として、この事件[じけん]を担当[たんとう]した。目撃[もくげき]者[しゃ]の証言[しょうげん]と防犯[ぼうはん]カメラから、車[くるま]の持[も]ち主[ぬし]は某国[ぼうこく]大使館[たいしかん]の外交官[がいこうかん]であることが判明[はんめい]した。",
      "外交官[がいこうかん]を任意[にんい]同行[どうこう]しようとしたところ、大使館[たいしかん]側[がわ]は直[ただ]ちに拒絶[きょぜつ]した。理由[りゆう]は外交特権[がいこうとっけん]による刑事[けいじ]裁判[さいばん]権[けん]の免除[めんじょ]であった。",
      "私[わたし]は抗議[こうぎ]した。人[ひと]の命[いのち]を奪[うば]った行為[こうい]に対[たい]して、特権[とっけん]を盾[たて]に逃[のが]れるのは許[ゆる]されないことであった。しかし、外務省[がいむしょう]からは「国際[こくさい]関係[かんけい]を損[そこな]うおそれがある」と慎重[しんちょう]な姿勢[しせい]が示[しめ]された。",
      "結局[けっきょく]、被疑者[ひぎしゃ]は起訴[きそ]されることなく、本国[ほんこく]へ帰国[きこく]した。大使館[たいしかん]は「遺族[いぞく]に哀悼[あいとう]の意[い]を表[あらわ]す」との声明[せいめい]を発表[はっぴょう]したが、それに過[す]ぎない公式[こうしき]な儀礼[ぎれい]であった。",
      "遺族[いぞく]の母親[ははおや]は私[わたし]の前[まえ]で涙[なみだ]を流[なが]した。「私[わたし]の娘[むすめ]の命[いのち]は、特権[とっけん]より軽[かる]いのですか。」私[わたし]は答[こた]える言葉[ことば]を持[も]たなかった。",
      "この事件[じけん]を機[き]に、国内[こくない]で外交特権[がいこうとっけん]の見直[みなお]しを求[もと]める声[こえ]が高[たか]まった。政府[せいふ]は条約[じょうやく]改正[かいせい]に踏[ふ]み切[き]るか否[いな]か、今[いま]も協議[きょうぎ]が続[つづ]いている。",
      "法[ほう]の下[した]の平等[びょうどう]という原則[げんそく]が、国際[こくさい]的[てき]な配慮[はいりょ]の前[まえ]でどれほど脆弱[ぜいじゃく]であるか、私[わたし]は身[み]をもって知[し]った。司法[しほう]の扉[とびら]が開[ひら]かれる日[ひ]を、私[わたし]は待[ま]ち続[つづ]けている。"
    ],
    translation: [
      "Late at night last month, a hit-and-run by a luxury car occurred at an intersection in the city center. The victim, a woman who was walking, was taken to a hospital but her death was confirmed shortly after.",
      "As a detective in the first investigation division, I was assigned to this case. From eyewitness testimony and security cameras, it became clear that the owner of the car was a diplomat at the embassy of a certain nation.",
      "When I attempted to bring the diplomat in for voluntary questioning, the embassy side immediately refused. The reason was the exemption from criminal jurisdiction under diplomatic immunity.",
      "I protested. To shield oneself with privilege and escape an act that took a human life was unacceptable. However, the Ministry of Foreign Affairs indicated a cautious stance, saying there was a risk of damaging international relations.",
      "In the end, the suspect was not indicted and returned to his home country. The embassy issued a statement expressing 'condolences to the bereaved family,' but it was no more than a formal ritual.",
      "The victim's mother shed tears before me. 'Is my daughter's life lighter than privilege?' I had no words to answer.",
      "With this case as a turning point, voices calling for a review of diplomatic immunity grew louder within the country. The government is still deliberating whether to undertake treaty revision.",
      "I learned firsthand how fragile the principle of equality under the law is in the face of international consideration. I continue to wait for the day the door of justice opens."
    ],
    vocab: [
      { word: "外交特権", reading: "がいこうとっけん", meaning: "diplomatic privilege" },
      { word: "盾", reading: "たて", meaning: "shield" },
      { word: "ひき逃げ", reading: "ひきにげ", meaning: "hit-and-run" },
      { word: "目撃者", reading: "もくげきしゃ", meaning: "eyewitness" },
      { word: "防犯", reading: "ぼうはん", meaning: "crime prevention" },
      { word: "拒絶", reading: "きょぜつ", meaning: "refusal" },
      { word: "免除", reading: "めんじょ", meaning: "exemption" },
      { word: "損なう", reading: "そこなう", meaning: "to damage" },
      { word: "起訴", reading: "きそ", meaning: "indictment" },
      { word: "遺族", reading: "いぞく", meaning: "bereaved family" },
      { word: "哀悼", reading: "あいとう", meaning: "mourning" },
      { word: "儀礼", reading: "ぎれい", meaning: "ritual" },
      { word: "見直し", reading: "みなおし", meaning: "review" },
      { word: "脆弱", reading: "ぜいじゃく", meaning: "fragile" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-78 — A digital currency revolution (デジタル通貨革命)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-78",
    title: "紙幣[しへい]が消[き]える日[ひ]",
    titleReading: "しへいがきえるひ",
    level: "N2",
    summary: "A central bank economist explains to a skeptical public how a new sovereign digital currency will replace cash and reshape everyday transactions.",
    estMinutes: 7,
    tags: ["economics", "technology", "currency"],
    body: [
      "来月[らいげつ]から、我[わ]が国[くに]で新[あたら]しい主権[しゅけん]デジタル通貨[つうか]の本格[ほんかく]導入[どうにゅう]が始[はじ]まる。私[わたし]は中央銀行[ちゅうおうぎんこう]の経済学者[けいざいがくしゃ]として、この移行[いこう]の設計[せっけい]に三年[さんねん]ほど携[たずさ]わってきた。",
      "通貨[つうか]はこれまで、政府[せいふ]の信用[しんよう]を背景[はいけい]に紙幣[しへい]として発行[はっこう]されてきた。しかし、現金[げんきん]の流通[りゅうつう]コストや偽造[ぎぞう]リスクは年々[ねんねん]増大[ぞうだい]しており、もはや限界[げんかい]に達[たっ]しつつある。",
      "新通貨[しんつうか]は、個人[こじん]のスマートフォン上[じょう]で即時[そくじ]に送金[そうきん]できる仕組[しく]みである。取引[とりひき]履歴[りれき]は分散[ぶんさん]型[がた]台帳[だいちょう]に記録[きろく]され、透明[とうめい]性[せい]が飛躍的[ひやくてき]に向上[こうじょう]する。",
      "高齢[こうれい]者[しゃ]からは「スマートフォンの操作[そうさ]に不慣[ふな]れだ」という声[こえ]が相次[あいつ]いだ。私[わたし]は各地[かくち]で説明会[せつめいかい]を開[ひら]き、対面[たいめん]窓口[まどぐち]を残[のこ]す約束[やくそく]をするなど、不安[ふあん]の緩和[かんわ]に努[つと]めた。",
      "他方[たほう]、プライバシー保護[ほご]の観点[かんてん]からは、政府[せいふ]が個人[こじん]の取引[とりひき]を監視[かんし]し兼[か]ねないという懸念[けねん]が呈[てい]された。私[わたし]は暗号[あんごう]技術[ぎじゅつ]を用[もち]いて匿名[とくめい]性[せい]を担保[たんぽ]する仕組[しく]みを導入[どうにゅう]した。",
      "導入[どうにゅう]初日[しょにち]、都内[とない]の商店[しょうてん]では新通貨[しんつうか]での支払[しはら]いが次第[しだい]に目立[めだ]ち始[はじ]めた。ある商店[しょうてん]の店主[てんしゅ]は「現金[げんきん]を数[かぞ]える手間[てま]が省[はぶ]けた」と笑顔[えがお]を見[み]せた。",
      "もっとも、過渡[かと]期[き]には予期[よき]せぬシステム障害[しょうがい]も起[お]こり得[え]る。私[わたし]たちは二十四時間[にじゅうよじかん]体制[たいせい]で監視[かんし]を続[つづ]け、不具合[ふぐあい]が生[しょう]じ次第[しだい]、即座[そくざ]に修正[しゅうせい]を行[おこな]う。",
      "紙幣[しへい]が完全[かんぜん]に消[き]える日[ひ]は、おそらく次[つぎ]の世代[せだい]のことになるだろう。とは言[い]え、貨幣[かへい]の歴史[れきし]が新[あたら]しいページを開[ひら]いたことは疑[うたが]いようのない事実[じじつ]である。"
    ],
    translation: [
      "Beginning next month, full-scale introduction of a new sovereign digital currency will start in our country. As an economist at the central bank, I have been involved in designing this transition for about three years.",
      "Until now, currency has been issued as banknotes backed by government credit. However, the cost of circulating cash and the risk of counterfeiting have grown year by year, and we are now reaching the limit.",
      "The new currency is a system in which individuals can send money instantly on their smartphones. Transaction records are stored on a distributed ledger, dramatically improving transparency.",
      "From elderly citizens, voices saying 'I am not accustomed to operating a smartphone' came one after another. I held explanatory meetings in various places, promised to keep face-to-face counters, and worked to ease their anxieties.",
      "On the other hand, from the standpoint of privacy protection, the concern was voiced that the government might monitor individuals' transactions. I introduced a mechanism using cryptographic technology to guarantee anonymity.",
      "On the first day of introduction, payments with the new currency gradually became conspicuous at shops in the capital. The owner of one shop showed a smile, saying, 'It saves me the trouble of counting cash.'",
      "Of course, during the transition period, unforeseen system failures can occur. We continue to monitor around the clock, and the moment a glitch arises we fix it immediately.",
      "The day banknotes disappear completely will likely come a generation ahead. Even so, that the history of money has opened a new page is an undeniable fact."
    ],
    vocab: [
      { word: "紙幣", reading: "しへい", meaning: "banknote" },
      { word: "主権", reading: "しゅけん", meaning: "sovereignty" },
      { word: "導入", reading: "どうにゅう", meaning: "introduction" },
      { word: "携わる", reading: "たずさわる", meaning: "to be involved" },
      { word: "信用", reading: "しんよう", meaning: "credit" },
      { word: "偽造", reading: "ぎぞう", meaning: "forgery" },
      { word: "分散型台帳", reading: "ぶんさんがただいちょう", meaning: "distributed ledger" },
      { word: "飛躍的", reading: "ひやくてき", meaning: "dramatic" },
      { word: "緩和", reading: "かんわ", meaning: "alleviation" },
      { word: "懸念", reading: "けねん", meaning: "concern" },
      { word: "担保", reading: "たんぽ", meaning: "guarantee" },
      { word: "過渡期", reading: "かとき", meaning: "transition period" },
      { word: "障害", reading: "しょうがい", meaning: "failure" },
      { word: "貨幣", reading: "かへい", meaning: "currency" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-79 — A memory erasure clinic (記憶消去クリニック)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-79",
    title: "記憶[きおく]を消[け]す診療所[しんりょうじょ]",
    titleReading: "きおくをけすしんりょうじょ",
    level: "N2",
    summary: "A neurotechnician at a memory erasure clinic begins to question the ethics of his work after a client asks him to remove every memory of her deceased child.",
    estMinutes: 6,
    tags: ["memory", "ethics", "neuroscience"],
    body: [
      "私[わたし]は都内[とない]の裏通[うらどお]りにある、記憶[きおく]消去[しょうきょ]を専業[せんぎょう]とする診療所[しんりょうじょ]に勤[つと]めている。技術[ぎじゅつ]的[てき]には、特定[とくてい]の記憶[きおく]だけを標的[ひょうてき]として切[き]り離[はな]すことができる。",
      "客[きゃく]の大半[たいはん]は、失恋[しつれん]や事故[じこ]のトラウマに苦[くる]しむ人[ひと]たちである。私[わたし]はこれまで、彼[かれ]ら彼女[かのじょ]らの痛[いた]みを和[やわ]らげる手伝[てつだ]いをしてきたと信[しん]じてきた。",
      "先週[せんしゅう]、一人[ひとり]の女性[じょせい]が訪[たず]ねてきた。彼女[かのじょ]は、亡[な]くなった幼児[ようじ]の記憶[きおく]を全[すべ]て消[け]してほしいと願[ねが]った。「あの子[こ]を思[おも]い出[だ]すたびに、胸[むね]が裂[さ]けそうだ」と彼女[かのじょ]は言[い]った。",
      "私[わたし]は通常[つうじょう]の手順[てじゅん]どおり、彼女[かのじょ]の承諾[しょうだく]書[しょ]を確認[かくにん]し、処置[しょち]の準備[じゅんび]を進[すす]めた。しかし、機械[きかい]の電源[でんげん]を入[い]れようとした瞬間[しゅんかん]、私[わたし]の手[て]が止[と]まった。",
      "記憶[きおく]を消[け]すことは、確[たし]かに彼女[かのじょ]を楽[らく]にするかもしれない。しかし同時[どうじ]に、彼女[かのじょ]が子供[こども]を愛[あい]したという事実[じじつ]そのものまで消[け]し去[さ]ることに他[ほか]ならなかった。",
      "私[わたし]は機械[きかい]の前[まえ]で、暫[ざん]し思[おも]い悩[なや]んだ。結局[けっきょく]、彼女[かのじょ]に「もう少[すこ]し考[かんが]えてみませんか」と告[つ]げ、今日[きょう]の処置[しょち]を保留[ほりゅう]した。",
      "彼女[かのじょ]は涙[なみだ]を浮[う]かべたまま頷[うなず]き、帰[かえ]っていった。私[わたし]は診療所[しんりょうじょ]の窓[まど]から、彼女[かのじょ]の後[うしろ]姿[すがた]が通[とお]りに消[き]えるのを見送[みおく]った。",
      "技術[ぎじゅつ]が可能[かのう]にするからといって、それを選[えら]ぶべきだとは限[かぎ]らない。私[わたし]は今夜[こんや]、自[みずか]らの仕事[しごと]の意味[いみ]を問[と]い続[つづ]けずにはいられない。"
    ],
    translation: [
      "I work at a clinic on a back street of the capital that specializes in memory erasure. Technically, it is possible to isolate only specific memories and remove them.",
      "Most of the clients are people suffering from the trauma of broken relationships or accidents. Until now I have believed that I was helping to ease their pain.",
      "Last week, a woman came to visit. She wished to have all memories of her deceased toddler erased. 'Every time I recall that child, my heart feels as though it will tear apart,' she said.",
      "Following the usual procedure, I confirmed her consent form and proceeded to prepare the treatment. But the moment I went to switch on the machine, my hand stopped.",
      "Erasing the memory would certainly ease her. Yet at the same time, it was nothing other than eliminating the very fact that she had loved her child.",
      "I agonized briefly before the machine. In the end, I told her, 'Wouldn't you consider it a little longer?' and put today's treatment on hold.",
      "She nodded with tears in her eyes and went home. From the clinic window I saw off her retreating figure as it disappeared into the street.",
      "Just because technology makes something possible does not mean we should choose it. Tonight, I cannot help but keep questioning the meaning of my work."
    ],
    vocab: [
      { word: "記憶", reading: "きおく", meaning: "memory" },
      { word: "消去", reading: "しょうきょ", meaning: "erasure" },
      { word: "診療所", reading: "しんりょうじょ", meaning: "clinic" },
      { word: "専業", reading: "せんぎょう", meaning: "specialty" },
      { word: "標的", reading: "ひょうてき", meaning: "target" },
      { word: "承諾書", reading: "しょうだくしょ", meaning: "consent form" },
      { word: "処置", reading: "しょち", meaning: "treatment" },
      { word: "暫し", reading: "ざんし", meaning: "briefly" },
      { word: "思い悩む", reading: "おもいなやむ", meaning: "to agonize" },
      { word: "保留", reading: "ほりゅう", meaning: "hold" },
      { word: "後ろ姿", reading: "うしろすがた", meaning: "retreating figure" },
      { word: "見送る", reading: "みおくる", meaning: "to see off" },
      { word: "問う", reading: "とう", meaning: "to question" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-80 — An intergenerational conflict (世代間対立)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-80",
    title: "世代[せだい]の壁[かべ]が揺[ゆ]れる",
    titleReading: "せだいのかべがゆれる",
    level: "N2",
    summary: "A family-run printing business faces collapse when the son proposes a digital pivot that the father denounces as a betrayal of craft tradition.",
    estMinutes: 7,
    tags: ["family", "business", "tradition"],
    body: [
      "我[わ]が家[や]は三代[さんだい]にわたり、町[まち]の小[ちい]さな印刷[いんさつ]工房[こうぼう]を営[いとな]んできた。父[ちち]は活版[かっぱん]印刷[いんさつ]の職人[しょくにん]として、一文字[いちもじ]一文字[いちもじ]を組[く]むことに誇[ほこ]りを持[も]ってきた。",
      "私[わたし]は大学[だいがく]で情報[じょうほう]工学[こうがく]を学[まな]び、家業[かぎょう]を継[つ]ぐつもりで帰[かえ]ってきた。しかし、私[わたし]の提案[ていあん]は、伝統的[でんとうてき]な活版[かっぱん]からデジタル印刷[いんさつ]への全面[ぜんめん]移行[いこう]であった。",
      "父[ちち]は激怒[げきど]した。「手作業[てさぎょう]の温[ぬく]もりを捨[す]てて、機械[きかい]に任[まか]せるなど、職人[しょくにん]の風上[かざかみ]にも置[お]けない」と彼[かれ]は私[わたし]を叱[しか]りつけた。",
      "私[わたし]は反発[はんぱつ]した。時代[じだい]が変[か]われば、技術[ぎじゅつ]も変[か]わらざるを得[え]ない。顧客[こきゃく]は速[すみ]やかで低[てい]価格[かかく]な印刷[いんさつ]を求[もと]めており、旧態依然[きゅうたいいぜん]では店[みせ]がつぶれかねない。",
      "母[はは]は二人[ふたり]の間[あいだ]に挟[はさ]まれ、毎日[まいにち]ため息[いき]をついていた。「お父[とう]さんの誇[ほこ]りも分[わ]かる。けれど、店[みせ]が残[のこ]らなければ、誇[ほこ]りも意味[いみ]を持[も]たない」と彼女[かのじょ]は言[い]った。",
      "結局[けっきょく]、父[ちち]は私[わたし]の提案[ていあん]を条件[じょうけん]付[づ]きで認[みと]めた。古[ふる]い活版[かっぱん]設備[せつび]は一室[いっしつ]に保存[ほぞん]し、注文[ちゅうもん]があれば特別[とくべつ]に受[う]け付[つ]ける、という妥協[だきょう]であった。",
      "移行[いこう]後[ご]半年[はんとし]で、売上[うりあげ]は二割[にわり]ほど回復[かいふく]した。父[ちち]はまだ不満[ふまん]そうだが、若[わか]い従業員[じゅうぎょういん]が増[ふ]え、工房[こうぼう]に活気[かっき]が戻[もど]りつつある。",
      "世代[せだい]の違[ちが]いは、簡単[かんたん]に埋[う]められるものではない。しかし、対立[たいりつ]を重[かさ]ねた先[さき]にこそ、新[あたら]しい伝統[でんとう]が生[う]まれると私[わたし]は信[しん]じている。"
    ],
    translation: [
      "Our family has run a small printing workshop in the town for three generations. As a craftsman of letterpress printing, my father has taken pride in setting type character by character.",
      "I studied information engineering at university and returned intending to take over the family business. However, my proposal was a full transition from traditional letterpress to digital printing.",
      "My father was furious. 'To discard the warmth of handwork and leave it to machines is beneath a craftsman's dignity,' he scolded me.",
      "I rebelled. When the times change, techniques must change too. Customers demand fast and inexpensive printing, and clinging to the old ways could ruin the shop.",
      "Caught between us, my mother sighed every day. 'I understand your father's pride. But if the shop does not survive, that pride has no meaning,' she said.",
      "In the end, my father accepted my proposal on one condition. We would preserve the old letterpress equipment in one room and accept special orders when they came in, a compromise we reached.",
      "Half a year after the transition, sales recovered by about twenty percent. My father still seems dissatisfied, but the number of young employees is growing, and liveliness is gradually returning to the workshop.",
      "The difference between generations is not something easily bridged. Yet I believe it is precisely beyond repeated clashes that new traditions are born."
    ],
    vocab: [
      { word: "世代", reading: "せだい", meaning: "generation" },
      { word: "壁", reading: "かべ", meaning: "wall" },
      { word: "印刷工房", reading: "いんさつこうぼう", meaning: "printing workshop" },
      { word: "活版印刷", reading: "かっぱんいんさつ", meaning: "letterpress printing" },
      { word: "職人", reading: "しょくにん", meaning: "craftsman" },
      { word: "情報工学", reading: "じょうほうこうがく", meaning: "information engineering" },
      { word: "家業", reading: "かぎょう", meaning: "family business" },
      { word: "移行", reading: "いこう", meaning: "transition" },
      { word: "激怒", reading: "げきど", meaning: "fury" },
      { word: "旧態依然", reading: "きゅうたいいぜん", meaning: "stuck in old ways" },
      { word: "妥協", reading: "だきょう", meaning: "compromise" },
      { word: "従業員", reading: "じゅうぎょういん", meaning: "employee" },
      { word: "活気", reading: "かっき", meaning: "liveliness" },
      { word: "対立", reading: "たいりつ", meaning: "conflict" }
    ]
  }
];
