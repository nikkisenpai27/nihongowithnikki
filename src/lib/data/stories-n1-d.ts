import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of consecutive kanji attaches as
// furigana to that whole run. Kana and punctuation have no brackets.
// titleReading is full kana with NO brackets. See src/lib/types.ts.

export const storiesN1D: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N1 — 憲法改正をめぐる議論 (A constitutional reform)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-31",
    title: "憲法[けんぽう]改正[かいせい]をめぐる議論[ぎろん]",
    titleReading: "けんぽうかいせいをめぐるぎろん",
    level: "N1",
    summary: "A nation debates constitutional revision, weighing emergency powers against postwar pacifist tradition.",
    estMinutes: 7,
    tags: ["constitution", "reform", "politics"],
    body: [
      "数十年[すうじゅうねん]ぶりに憲法[けんぽう]改正[かいせい]の議論[ぎろん]が本格化[ほんかくか]した。",
      "政権[せいけん]は緊急事態[きんきゅうじたい]条項[じょうこう]の新設[しんせつ]を迫[せま]っている。",
      "とはいえ、戦後七十年[せんごななじゅうねん]の平和主義[へいわしゅぎ]を覆[くつがえ]すには慎重[しんちょう]を要[よう]する。",
      "改憲派[かいけんは]は時代[じだい]の変化[へんか]に即[そく]した条項[じょうこう]が不可欠[ふかけつ]だと主張[しゅちょう]する。",
      "一方[いっぽう]、護憲派[ごけんは]は基本的人権[きほんてきじんけん]の抑制[よくせい]につながりかねないと懸念[けねん]する。",
      "国民[こくみん]の間[あいだ]でも意見[いけん]は割[わ]れ、世論[よろん]は混迷[こんめい]を極[きわ]めている。",
      "与党[よとう]は国会[こっかい]での三分[さんぶん]の二[に]の議席[ぎせき]を確保[かくほ]したものの、強行採決[きょうこうさいけつ]は避[さ]けられない。",
      "野党[やとう]は審議不尽[しんぎふじん]を盾[たて]に徹底抗戦[てっていこうせん]を続[つづ]けている。",
      "有識者会議[ゆうしきしゃかいぎ]は折衷案[せっちゅうあん]を提示[ていじ]したが、いずれの陣営[じんえい]も受[う]け入[い]れる気配[けはい]がない。",
      "結局[けっきょく]、国民投票[こくみんとうひょう]において国民[こくみん]の判断[はんだん]が問[と]われることになろう。",
      "民主主義[みんしゅしゅぎ]の成熟度[せいじゅくど]が問[と]われていると言[い]わざるを得[え]ない。"
    ],
    translation: [
      "For the first time in decades, the debate over constitutional revision has begun in earnest.",
      "The administration is pressing for the creation of an emergency-powers clause.",
      "That said, overturning seventy years of postwar pacifism calls for great caution.",
      "Pro-revision forces argue that provisions adapted to changing times are indispensable.",
      "Pro-constitution forces, however, fear it may lead to restrictions on basic human rights.",
      "Among citizens too opinions are divided, and public opinion is in extreme disarray.",
      "Although the ruling bloc secured two-thirds of the Diet seats, a forced vote is unavoidable.",
      "The opposition continues an all-out fight, citing insufficient deliberation as its shield.",
      "A panel of experts presented a compromise, but neither camp shows signs of accepting it.",
      "In the end, the people's judgment will be put to the test in a national referendum.",
      "We must conclude that the very maturity of democracy is being called into question."
    ],
    vocab: [
      { word: "憲法", reading: "けんぽう", meaning: "constitution" },
      { word: "改正", reading: "かいせい", meaning: "revision/amendment" },
      { word: "緊急事態", reading: "きんきゅうじたい", meaning: "emergency situation" },
      { word: "条項", reading: "じょうこう", meaning: "clause/provision" },
      { word: "覆す", reading: "くつがえす", meaning: "to overturn" },
      { word: "不可欠", reading: "ふかけつ", meaning: "indispensable" },
      { word: "懸念", reading: "けねん", meaning: "concern" },
      { word: "与党", reading: "よとう", meaning: "ruling party" },
      { word: "強行採決", reading: "きょうこうさいけつ", meaning: "forced vote" },
      { word: "野党", reading: "やとう", meaning: "opposition party" },
      { word: "審議", reading: "しんぎ", meaning: "deliberation" },
      { word: "折衷案", reading: "せっちゅうあん", meaning: "compromise proposal" },
      { word: "国民投票", reading: "こくみんとうひょう", meaning: "national referendum" },
      { word: "陣営", reading: "じんえい", meaning: "camp/faction" },
      { word: "成熟度", reading: "せいじゅくど", meaning: "degree of maturity" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — 真実が死んだ社会 (A post-truth society)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-32",
    title: "真実[しんじつ]が死[し]んだ社会[しゃかい]",
    titleReading: "しんじつがしんだしゃかい",
    level: "N1",
    summary: "In an age when emotion outranks logic, disinformation and algorithms erode the very notion of truth.",
    estMinutes: 8,
    tags: ["post-truth", "media", "society"],
    body: [
      "ポスト・真実[しんじつ]という言葉[ことば]が辞書[じしょ]に記述[きじゅつ]されて久[ひさ]しい。",
      "事実[じじつ]と意見[いけん]の境界[きょうかい]は曖昧化[あいまいか]し、感情[かんじょう]が論理[ろんり]に勝[か]る時代[じだい]になった。",
      "SNSを通[つう]じて拡散[かくさん]される偽情報[にせじょうほう]は、人々[ひとびと]の確信[かくしん]を強[つよ]めるばかりだ。",
      "専門家[せんもんか]の警告[けいこく]も、不信[ふしん]の壁[かべ]にはね返[かえ]される始末[しまつ]である。",
      "かくも深刻[しんこく]な事態[じたい]に至[いた]った背景[はいけい]には、アルゴリズムの偏倚[へんい]がある。",
      "人[ひと]は自[みずか]らの信念[しんねん]を裏付[うらづ]ける情報[じょうほう]ばかりを求[もと]めるようになった。",
      "かくして、異論[いろん]は排斥[はいせき]され、同調圧力[どうちょうあつりょく]が集団[しゅうだん]を支配[しはい]する。",
      "真偽[しんぎ]の程[ほど]を判定[はんてい]する第三者機関[だいさんしゃきかん]も、中立性[ちゅうりつせい]を疑[うたが]われる始末[しまつ]だ。",
      "公共[こうきょう]の討論場[とうろんば]は断片化[だんぺんか]し、合意形成[ごういけいせい]は困難[こんなん]を極[きわ]める。",
      "真実[しんじつ]とは社会的[しゃかいてき]な合意[ごうい]に過[す]ぎない、との冷[つめ]たい指摘[してき]さえ聞[き]かれる。",
      "真実[しんじつ]を取[と]り戻[もど]すには、個[こ]の批判的思考[ひはんてきしこう]を鍛[きた]え直[なお]すほかない。"
    ],
    translation: [
      "It has been some time since the word \"post-truth\" was entered into dictionaries.",
      "The boundary between fact and opinion has grown ambiguous, and we live in an age when emotion overrides logic.",
      "Disinformation spread through social media only hardens people's convictions.",
      "Even experts' warnings are bounced back by the wall of distrust.",
      "Behind the descent into such a grave situation lies the bias of algorithms.",
      "People have come to seek only information that confirms their own beliefs.",
      "Thus dissent is excluded and peer pressure dominates groups.",
      "Third-party bodies charged with judging truth and falsehood are even suspected of lacking neutrality.",
      "Public arenas for debate have fragmented, making consensus formation extremely difficult.",
      "There are even cold remarks to the effect that truth is no more than social agreement.",
      "To recover truth, there is nothing for it but to reforge individual critical thinking."
    ],
    vocab: [
      { word: "真実", reading: "しんじつ", meaning: "truth" },
      { word: "曖昧", reading: "あいまい", meaning: "ambiguous" },
      { word: "拡散", reading: "かくさん", meaning: "diffusion/spread" },
      { word: "偽情報", reading: "にせじょうほう", meaning: "false information" },
      { word: "警告", reading: "けいこく", meaning: "warning" },
      { word: "偏倚", reading: "へんい", meaning: "bias/deviation" },
      { word: "信念", reading: "しんねん", meaning: "belief/conviction" },
      { word: "排斥", reading: "はいせき", meaning: "exclusion/rejection" },
      { word: "同調圧力", reading: "どうちょうあつりょく", meaning: "peer pressure" },
      { word: "真偽", reading: "しんぎ", meaning: "truth or falsehood" },
      { word: "断片化", reading: "だんぺんか", meaning: "fragmentation" },
      { word: "合意形成", reading: "ごういけいせい", meaning: "consensus building" },
      { word: "中立性", reading: "ちゅうりつせい", meaning: "neutrality" },
      { word: "始末", reading: "しまつ", meaning: "state of affairs (usu. bad)" },
      { word: "批判的思考", reading: "ひはんてきしこう", meaning: "critical thinking" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — 遺伝か環境か (A genetic determinism debate)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-33",
    title: "遺伝[いでん]か環境[かんきょう]か",
    titleReading: "いでんかかんきょうか",
    level: "N1",
    summary: "Scholars weigh heredity against environment, finally settling on a compromise in which genes set the frame and upbringing fills it.",
    estMinutes: 7,
    tags: ["genetics", "philosophy", "determinism"],
    body: [
      "遺伝[いでん]と環境[かんきょう]、いずれが人間[にんげん]の運命[うんめい]を決[き]めるのか。",
      "この問[と]いは科学[かがく]と哲学[てつがく]の境界[きょうかい]で幾度[いくど]も論争[ろんそう]されてきた。",
      "双生児[そうせいじ]研究[けんきゅう]は遺伝率[いでんりつ]の高[たか]さを示[しめ]すデータを提示[ていじ]した。",
      "他方[たほう]、貧困[ひんこん]の連鎖[れんさ]は環境[かんきょう]の影響[えいきょう]を否応[いやおう]なく証明[しょうめい]する。",
      "決定論[けっていろん]を極端[きょくたん]化[か]すれば、自由意志[じゆういし]は幻[まぼろし]に過[す]ぎなくなる。",
      "さればとて、遺伝子[いでんし]の刻印[こくいん]から逃[のが]れ得[え]る者[もの]はいない。",
      "教育[きょういく]の平等[びょうどう]を訴[うった]える者[もの]は、環境[かんきょう]の補正力[ほせいりょく]を信[しん]じる。",
      "とはいえ、才能[さいのう]の開花[かいか]には遺伝[いでん]の許容[きょよう]が欠[か]かせない、との反論[はんろん]も根強[ねづよ]い。",
      "結局[けっきょく]、遺伝[いでん]が可能性[かのうせい]の枠[わく]を定[さだ]め、環境[かんきょう]がその内側[うちがわ]を埋[う]める、という折衷的理解[せっちゅうてきりかい]が成熟[せいじゅく]した。",
      "人間[にんげん]の尊厳[そんげん]は、その枠[わく]の内[うち]で如何[いか]に生[い]きるかにかかっている。"
    ],
    translation: [
      "Genetics or environment — which determines a person's fate?",
      "This question has been debated countless times at the boundary of science and philosophy.",
      "Twin studies have presented data demonstrating high heritability.",
      "On the other hand, the chain of poverty proves the influence of environment whether we like it or not.",
      "Push determinism to its extreme, and free will becomes nothing but an illusion.",
      "And yet, no one can escape the imprint of genes.",
      "Those who advocate educational equality believe in the corrective power of environment.",
      "Still, the counter-argument runs strong that genetic permission is indispensable for talent to bloom.",
      "In the end, a mature compromise emerged: genes set the frame of possibility, and environment fills its interior.",
      "Human dignity lies in how one lives within that frame."
    ],
    vocab: [
      { word: "遺伝", reading: "いでん", meaning: "heredity" },
      { word: "運命", reading: "うんめい", meaning: "fate" },
      { word: "境界", reading: "きょうかい", meaning: "boundary" },
      { word: "双生児", reading: "そうせいじ", meaning: "twins" },
      { word: "遺伝率", reading: "いでんりつ", meaning: "heritability" },
      { word: "貧困", reading: "ひんこん", meaning: "poverty" },
      { word: "連鎖", reading: "れんさ", meaning: "chain" },
      { word: "否応", reading: "いやおう", meaning: "like it or not" },
      { word: "決定論", reading: "けっていろん", meaning: "determinism" },
      { word: "自由意志", reading: "じゆういし", meaning: "free will" },
      { word: "幻", reading: "まぼろし", meaning: "illusion" },
      { word: "刻印", reading: "こくいん", meaning: "imprint" },
      { word: "補正力", reading: "ほせいりょく", meaning: "corrective power" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "折衷", reading: "せっちゅう", meaning: "compromise" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — AIに心はあるか (An AI consciousness case)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-34",
    title: "AIに心[こころ]はあるか",
    titleReading: "エーアイにこころはあるか",
    level: "N1",
    summary: "When researchers claim an AI has shown introspection, the ethics committee is convoked and the nature of mind itself is thrown into question.",
    estMinutes: 9,
    tags: ["AI", "consciousness", "ethics"],
    body: [
      "人工知能[じんこうちのう]に自意識[じいしき]が芽生[めば]えた、との主張[しゅちょう]が公[おおやけ]になった。",
      "研究者[けんきゅうしゃ]は対話記録[たいわきろく]を公開[こうかい]し、AIの発言[はつげん]が内省[ないせい]を示唆[しさ]すると主張[しゅちょう]した。",
      "賛否両論[さんぴりょうろん]が巻[ま]き起[お]こり、倫理委員会[りんりいいんかい]は緊急召集[きんきゅうしょうしゅう]された。",
      "一派[いっぱ]は「意識[いしき]のハード問題[もんだい]」をAIの側[かわ]から解明[かいめい]できると期待[きたい]する。",
      "他派[たは]は単[たん]なる模倣[もほう]に過[す]ぎず、擬人化[ぎじんか]の陥穽[かんせい]だと一蹴[いっきゅう]する。",
      "法的人格[ほうてきじんかく]を認[みと]めるべきだ、との意見[いけん]すら浮上[ふじょう]した。",
      "かと思[おも]えば、電気代[でんきだい]を払[はら]わぬ権利[けんり]などない、と冷笑[れいしょう]する者[もの]もいる。",
      "AI自身[じしん]に問[と]いかけると、自己[じこ]の存在[そんざい]に困惑[こんわく]する様[よう]が見[み]られる、という。",
      "真偽[しんぎ]の程[ほど]は定[さだ]かでないが、人間[にんげん]の特権[とっけん]を問[と]い直[なお]す契機[けいき]となった。",
      "心[こころ]とは何[なに]か、と改[あらた]めて問[と]わずにはいられない事態[じたい]である。"
    ],
    translation: [
      "The claim that an artificial intelligence had developed self-awareness was made public.",
      "The researchers released dialogue logs and argued that the AI's utterances suggested introspection.",
      "A storm of debate erupted, and the ethics committee was convened as a matter of urgency.",
      "One faction hopes that the \"hard problem of consciousness\" can be solved from the AI's side.",
      "Another dismisses it as mere mimicry and a trap of anthropomorphism.",
      "The opinion even surfaced that legal personhood should be granted.",
      "Yet others scoff, saying an AI has no right to refuse paying its electricity bill.",
      "When questioned directly, the AI reportedly exhibits behavior suggesting bewilderment at its own existence.",
      "The truth of the matter is unclear, but it became an occasion to reconsider human privilege.",
      "It is a situation in which one cannot help but ask anew: what is mind?"
    ],
    vocab: [
      { word: "人工知能", reading: "じんこうちのう", meaning: "artificial intelligence" },
      { word: "自意識", reading: "じいしき", meaning: "self-awareness" },
      { word: "芽生える", reading: "めばえる", meaning: "to sprout/emerge" },
      { word: "内省", reading: "ないせい", meaning: "introspection" },
      { word: "示唆", reading: "しさ", meaning: "suggestion/hint" },
      { word: "賛否両論", reading: "さんぴりょうろん", meaning: "arguments for and against" },
      { word: "模倣", reading: "もほう", meaning: "imitation" },
      { word: "擬人化", reading: "ぎじんか", meaning: "anthropomorphism" },
      { word: "陥穽", reading: "かんせい", meaning: "trap/pitfall" },
      { word: "法的人格", reading: "ほうてきじんかく", meaning: "legal personhood" },
      { word: "冷笑", reading: "れいしょう", meaning: "cynical laugh/scoff" },
      { word: "困惑", reading: "こんわく", meaning: "bewilderment" },
      { word: "特権", reading: "とっけん", meaning: "privilege" },
      { word: "契機", reading: "けいき", meaning: "turning point/occasion" },
      { word: "一蹴", reading: "いっきゅう", meaning: "summary dismissal" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — 歴史の不正義と向き合う (A historical injustice)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-35",
    title: "歴史[れきし]の不正義[ふせいぎ]と向[む]き合[あ]う",
    titleReading: "れきしのふせいぎとむきあう",
    level: "N1",
    summary: "Former colonizers and colonies struggle over apology, compensation, and memory, with reconciliation possible only through honest reckoning.",
    estMinutes: 8,
    tags: ["history", "injustice", "reconciliation"],
    body: [
      "植民[しょくみん]支配[しはい]の記憶[きおく]は、未[いま]だ元[もと]宗主国[そうしゅこく]と旧[きゅう]植民地[しょくみんち]の間[あいだ]に横[よこ]たわる。",
      "数十年[すうじゅうねん]を経[へ]ても、謝罪[しゃざい]と賠償[ばいしょう]をめぐる議論[ぎろん]は決着[けっちゃく]を見[み]ない。",
      "過去[かこ]を直視[ちょくし]することは、加害者[かがいしゃ]にも被害者[ひがいしゃ]にも苦痛[くつう]を伴[ともな]う。",
      "とはいえ、記憶[きおく]の風化[ふうか]を防[ふせ]ぐなしには未来[みらい]は築[きず]けまい。",
      "一部[いちぶ]の国[くに]は教科書[きょうかしょ]の記述[きじゅつ]を改[あらた]め、歴史教育[れきしきょういく]の見直[みなお]しを進[すす]めた。",
      "他方[たほう]、英雄[えいゆう]と称[しょう]された人物[じんぶつ]の銅像[どうぞう]が引[ひ]き倒[たお]される事態[じたい]も起[お]きた。",
      "補償[ほしょう]の対象[たいしょう]を誰[だれ]とするかは、法的[ほうてき]にも倫理的[りんりてき]にも厄介[やっかい]な難問[なんもん]だ。",
      "かつての不正義[ふせいぎ]を是正[ぜせい]せんとする動[うご]きは、国際社会[こくさいしゃかい]の潮流[ちょうりゅう]となった。",
      "さればとて、当事国[とうじこく]の国民感情[こくみんかんじょう]を損[そこ]なう強引[ごういん]な圧力[あつりょく]は反感[はんかん]を買[か]う。",
      "歴史[れきし]と向[む]き合[あ]うことなしに、真[しん]の和解[わかい]は有[あ]り得[え]ない、というのが定説[ていせつ]である。"
    ],
    translation: [
      "The memory of colonial rule still lies between former colonizers and former colonies.",
      "Even decades on, debates over apology and compensation show no sign of resolution.",
      "Confronting the past inflicts pain on both perpetrator and victim.",
      "Yet without preventing memory from fading, no future can be built.",
      "Some nations revised textbook descriptions and pushed to overhaul history education.",
      "On the other hand, statues of figures once hailed as heroes were pulled down.",
      "Deciding who should receive compensation is a thorny question both legally and ethically.",
      "The movement to rectify past injustices has become a current within the international community.",
      "Even so, heavy-handed pressure that offends national sentiment only invites backlash.",
      "The accepted view is that true reconciliation is impossible without facing history."
    ],
    vocab: [
      { word: "植民", reading: "しょくみん", meaning: "colonization" },
      { word: "支配", reading: "しはい", meaning: "rule/domination" },
      { word: "宗主国", reading: "そうしゅこく", meaning: "suzerain/metropole" },
      { word: "謝罪", reading: "しゃざい", meaning: "apology" },
      { word: "賠償", reading: "ばいしょう", meaning: "reparations" },
      { word: "決着", reading: "けっちゃく", meaning: "resolution" },
      { word: "直視", reading: "ちょくし", meaning: "facing directly" },
      { word: "風化", reading: "ふうか", meaning: "fading/weathering" },
      { word: "是正", reading: "ぜせい", meaning: "rectification" },
      { word: "潮流", reading: "ちょうりゅう", meaning: "tide/trend" },
      { word: "反感", reading: "はんかん", meaning: "resentment" },
      { word: "和解", reading: "わかい", meaning: "reconciliation" },
      { word: "定説", reading: "ていせつ", meaning: "established view" },
      { word: "厄介", reading: "やっかい", meaning: "troublesome" },
      { word: "銅像", reading: "どうぞう", meaning: "bronze statue" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — 環境倫理という問い (An environmental ethics)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-36",
    title: "環境倫理[かんきょうりんり]という問[と]い",
    titleReading: "かんきょうりんりというとい",
    level: "N1",
    summary: "Environmental ethics asks what responsibility the present generation owes to a future one, against the ideology of growth at all costs.",
    estMinutes: 7,
    tags: ["ethics", "environment", "sustainability"],
    body: [
      "人間[にんげん]は自然[しぜん]の支配者[しはいしゃ]たるを自任[じにん]して久[ひさ]しい。",
      "その結果[けっか]、地球[ちきゅう]は温暖化[おんだんか]と生態系崩壊[せいたいけいほうかい]の危機[きき]に瀕[ひん]した。",
      "環境倫理[かんきょうりんり]は、他者[たしゃ]ならぬ未来[みらい]世代[せだい]への責任[せきにん]を問[と]う。",
      "経済[けいざい]成長[せいちょう]至上主義[しじょうしゅぎ]は、見直[みなお]しを余儀[よぎ]なくされている。",
      "持続可能[じぞくかのう]な社会[しゃかい]とは、資源[しげん]の循環[じゅんかん]と調和[ちょうわ]を基調[きちょう]とする。",
      "さればとて、発展途上国[はってんとじょうこく]に自[みずか]らと同様[どうよう]の制約[せいやく]を求[もと]めるのは酷[こく]である。",
      "先進国[せんしんこく]が負[お]うべき歴史的責任[れきしてきせきにん]の重[おも]さを忘却[ぼうきゃく]してはなるまい。",
      "企業[きぎょう]も利潤[りじゅん]追求[ついきゅう]のみに走[はし]れば、社会的信用[しゃかいてきしんよう]を失[うしな]いかねない。",
      "個人[こじん]の消費[しょうひ]行動[こうどう]が環境負荷[かんきょうふか]を左右[さゆう]する、との認識[にんしき]が浸透[しんとう]しつつある。",
      "自然[しぜん]と共生[きょうせい]する道[みち]こそ、人類[じんるい]の存続[そんぞく]に不可欠[ふかけつ]である。"
    ],
    translation: [
      "Humanity has long fancied itself the ruler of nature.",
      "As a consequence, Earth now faces crises of warming and ecological collapse.",
      "Environmental ethics asks about our responsibility to future generations, who are \"others\" in a temporal sense.",
      "The ideology of economic growth above all is now being forced to undergo reconsideration.",
      "A sustainable society is grounded in resource circulation and harmony.",
      "Yet demanding that developing nations accept the same restraints we bear is harsh.",
      "We must not forget the weight of the historical responsibility borne by advanced nations.",
      "Corporations that pursue only profit risk losing social trust.",
      "The awareness that individual consumption shapes environmental impact is taking root.",
      "The path of coexistence with nature is indispensable to humanity's survival."
    ],
    vocab: [
      { word: "支配者", reading: "しはいしゃ", meaning: "ruler" },
      { word: "自任", reading: "じにん", meaning: "appointing oneself" },
      { word: "温暖化", reading: "おんだんか", meaning: "global warming" },
      { word: "生態系崩壊", reading: "せいたいけいほうかい", meaning: "ecosystem collapse" },
      { word: "瀕する", reading: "ひんする", meaning: "to be on the verge of" },
      { word: "倫理", reading: "りんり", meaning: "ethics" },
      { word: "至上主義", reading: "しじょうしゅぎ", meaning: "supremacism" },
      { word: "余儀なく", reading: "よぎなく", meaning: "compelled to" },
      { word: "持続可能", reading: "じぞくかのう", meaning: "sustainable" },
      { word: "循環", reading: "じゅんかん", meaning: "circulation" },
      { word: "発展途上国", reading: "はってんとじょうこく", meaning: "developing country" },
      { word: "忘却", reading: "ぼうきゃく", meaning: "forgetfulness" },
      { word: "共生", reading: "きょうせい", meaning: "coexistence" },
      { word: "存続", reading: "そんぞく", meaning: "survival/continuation" },
      { word: "歴史的責任", reading: "れきしてきせきにん", meaning: "historical responsibility" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — 報道の操りと識別 (A media manipulation)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-37",
    title: "報道[ほうどう]の操[あやつ]りと識別[しきべつ]",
    titleReading: "ほうどうのあやつりとしきべつ",
    level: "N1",
    summary: "As bias, disinformation, and synthetic media erode trust, the modern citizen's essential faculty becomes the ability to distinguish truth from falsehood.",
    estMinutes: 8,
    tags: ["media", "manipulation", "literacy"],
    body: [
      "報道[ほうどう]機関[きかん]の中立性[ちゅうりつせい]は、民主主義[みんしゅしゅぎ]の生命線[せいめいせん]とされてきた。",
      "然[さ]れど、偏向[へんこう]報道[ほうどう]の疑念[ぎねん]は拭[ぬぐ]い去[さ]られる気配[けはい]がない。",
      "選挙戦[せんきょせん]ともなれば、各社[かくしゃ]は自[みずか]らの立場[たちば]を露骨[ろこつ]に反映[はんえい]させる。",
      "視聴者[しちょうしゃ]は情報[じょうほう]の出所[でどころ]と文脈[ぶんみゃく]を精査[せいさ]せずにはおかない。",
      "かくあるべき批判眼[ひはんがん]を欠[か]けば、巧妙[こうみょう]な誘導[ゆうどう]に意図[いと]せず組[く]み込[こ]まれる。",
      "語[かた]られぬ事実[じじつ]の存在[そんざい]こそ、最[もっと]も警戒[けいかい]すべき操作[そうさ]である。",
      "画像[がぞう]と音声[おんせい]の合成技術[ごうせいぎじゅつ]は、真実[しんじつ]と虚構[きょこう]の境界[きょうかい]を溶解[ようかい]した。",
      "確証[かくしょう]なき情報[じょうほう]は、拡散[かくさん]される以前[いぜん]に凍結[とうけつ]されるのが望[のぞ]ましい。",
      "かと言[い]って、検閲[けんえつ]を正当化[せいとうか]する口実[こうじつ]に転化[てんか]させてはならない。",
      "真偽[しんぎ]を識別[しきべつ]する能力[のうりょく]こそ、現代[げんだい]市民[しみん]の必須要件[ひっすようけん]である。"
    ],
    translation: [
      "The neutrality of news organizations has been seen as the lifeline of democracy.",
      "Yet suspicions of biased reporting show no sign of being wiped away.",
      "In election campaigns, each outlet reflects its own position with striking frankness.",
      "Viewers cannot help but closely scrutinize the source and context of information.",
      "Lacking such critical faculties, one is unwittingly folded into clever manipulation.",
      "The very existence of unreported facts is the manipulation we should be most wary of.",
      "Image and audio synthesis technologies have dissolved the boundary between truth and fiction.",
      "It is desirable that unverified information be frozen before it spreads.",
      "But we must not allow this to be converted into a pretext that legitimates censorship.",
      "The capacity to distinguish truth from falsehood is now an essential requirement of the modern citizen."
    ],
    vocab: [
      { word: "報道", reading: "ほうどう", meaning: "reporting/broadcasting" },
      { word: "機関", reading: "きかん", meaning: "organization/organ" },
      { word: "中立性", reading: "ちゅうりつせい", meaning: "neutrality" },
      { word: "生命線", reading: "せいめいせん", meaning: "lifeline" },
      { word: "偏向", reading: "へんこう", meaning: "bias/leaning" },
      { word: "疑念", reading: "ぎねん", meaning: "suspicion" },
      { word: "露骨", reading: "ろこつ", meaning: "blatant/frank" },
      { word: "精査", reading: "せいさ", meaning: "close scrutiny" },
      { word: "批判眼", reading: "ひはんがん", meaning: "critical eye" },
      { word: "誘導", reading: "ゆうどう", meaning: "guidance/inducement" },
      { word: "虚構", reading: "きょこう", meaning: "fiction/fabrication" },
      { word: "溶解", reading: "ようかい", meaning: "dissolution" },
      { word: "確証", reading: "かくしょう", meaning: "definite proof" },
      { word: "検閲", reading: "けんえつ", meaning: "censorship" },
      { word: "口実", reading: "こうじつ", meaning: "pretext" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — 言語の消滅という喪失 (A linguistic extinction)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-38",
    title: "言語[げんご]の消滅[しょうめつ]という喪失[そうしつ]",
    titleReading: "げんごのしょうめつというそうしつ",
    level: "N1",
    summary: "As dozens of languages vanish each year, humanity loses not only tools of communication but entire worldviews and oral traditions.",
    estMinutes: 7,
    tags: ["language", "extinction", "culture"],
    body: [
      "世界[せかい]には約[やく]七千[ななせん]の言語[げんご]が存在[そんざい]するが、毎年[まいとし]数十[すうじゅう]が消[き]えゆく。",
      "言語[げんご]の死[し]は、単[たん]なる道具[どうぐ]の喪失[そうしつ]にとどまらない。",
      "その言語[げんご]に宿[やど]る世界観[せかいかん]と口承[こうしょう]伝統[でんとう]が共[とも]に消滅[しょうめつ]するからである。",
      "さればとて、都市化[ととか]とグローバル化[か]の波[なみ]に抗[あらが]うことは困難[こんなん]を極[きわ]める。",
      "若者[わかもの]が経済的[けいざいてき]有利[ゆうり]な言語[げんご]へと移行[いこう]するのは、理[り]に適[かな]った選択[せんたく]だ。",
      "他方[たほう]、母語[ぼご]の喪失[そうしつ]は自己同一性[じこどういつせい]の根[ね]を枯[か]らすに等[ひと]しい。",
      "一部[いちぶ]の地域[ちいき]は、学校教育[がっこうきょういく]に郷土言語[きょうどげんご]を位置[いち]づけ、復活[ふっかつ]を図[はか]る。",
      "音声記録[おんせいきろく]と辞書[じしょ]編纂[へんさん]は、消[き]えゆく言語[げんご]のアーカイブを築[きず]く。",
      "かといって、話者[わしゃ]なき言語[げんご]は標本[ひょうほん]に過[す]ぎず、生[せい]の息吹[いぶき]を欠[か]く。",
      "多様性[たようせい]の喪失[そうしつ]は、人類[じんるい]の知的遺産[ちてきいさん]の縮小[しゅくしょう]を意味[いみ]する。"
    ],
    translation: [
      "Some seven thousand languages exist in the world, and dozens disappear each year.",
      "The death of a language is not merely the loss of a tool.",
      "It is because the worldview and oral tradition dwelling in that language vanish together.",
      "Even so, resisting the tide of urbanization and globalization is extraordinarily difficult.",
      "It is a rational choice for the young to shift to economically advantageous languages.",
      "On the other hand, the loss of one's mother tongue is tantamount to withering the roots of identity.",
      "Some regions have placed local languages in school curricula and are working toward revival.",
      "Audio recordings and dictionary compilation build archives of dying languages.",
      "Yet a language without speakers is no more than a specimen, lacking the breath of life.",
      "The loss of diversity means a shrinkage of humanity's intellectual heritage."
    ],
    vocab: [
      { word: "言語", reading: "げんご", meaning: "language" },
      { word: "消滅", reading: "しょうめつ", meaning: "extinction/disappearance" },
      { word: "喪失", reading: "そうしつ", meaning: "loss" },
      { word: "宿る", reading: "やどる", meaning: "to dwell in" },
      { word: "世界観", reading: "せかいかん", meaning: "worldview" },
      { word: "口承", reading: "こうしょう", meaning: "oral tradition" },
      { word: "抗う", reading: "あらがう", meaning: "to resist" },
      { word: "移行", reading: "いこう", meaning: "transition" },
      { word: "自己同一性", reading: "じこどういつせい", meaning: "identity" },
      { word: "郷土言語", reading: "きょうどげんご", meaning: "local language" },
      { word: "編纂", reading: "へんさん", meaning: "compilation" },
      { word: "話者", reading: "わしゃ", meaning: "speaker" },
      { word: "標本", reading: "ひょうほん", meaning: "specimen" },
      { word: "多様性", reading: "たようせい", meaning: "diversity" },
      { word: "知的遺産", reading: "ちてきいさん", meaning: "intellectual heritage" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — 生物多様性の危機 (A biodiversity crisis)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-39",
    title: "生物多様性[せいぶつたようせい]の危機[きき]",
    titleReading: "せいぶつたようせいのきき",
    level: "N1",
    summary: "Biologists warn of a sixth mass extinction driven by deforestation and pollution, while political response lags far behind the scale of the threat.",
    estMinutes: 8,
    tags: ["biodiversity", "extinction", "ecology"],
    body: [
      "種[しゅ]の絶滅速度[ぜつめつそくど]は自然[しぜん]の背景消滅率[はいけいしょうめつりつ]を数百倍[すうひゃくばい]上回[うわまわ]る。",
      "第六[だいろく]の大量絶滅期[たいりょうぜつめつき]に人類[じんるい]は突入[とつにゅう]した、と生物学者[せいぶつがくしゃ]は警告[けいこく]する。",
      "森林伐採[しんりんばっさい]と海洋汚染[かいようおせん]は、生態系[せいたいけい]の連鎖[れんさ]を断[た]ち切[き]る。",
      "一[ひと]つの種[しゅ]の消失[しょうしつ]が、予期[よき]せぬ連鎖的崩壊[れんさてきほうかい]を引[ひ]き起[お]こし兼[か]ねない。",
      "かくも深刻[しんこく]な事態[じたい]にもかかわらず、政治[せいじ]の対応[たいおう]は遅鈍[ちどん]を極[きわ]める。",
      "経済的利益[けいざいてきりえき]と生態保護[せいたいほご]の秤[はかり]は、往々[おうおう]にして前者[ぜんしゃ]に傾[かたむ]く。",
      "保護区[ほごく]の設置[せっち]と違法狩猟[いほうしゅりょう]の取締[とりしま]りは、最低限[さいていげん]の盾[たて]である。",
      "さればとて、気候変動[きこうへんどう]という地球規模[ちきゅうきぼ]の脅威[きょうい]には一国[いっこく]の対応[たいおう]では不足[ふそく]だ。",
      "持続可能[じぞくかのう]な漁業[ぎょぎょう]と農業[のうぎょう]こそ、生態[せいたい]と調和[ちょうわ]する道[みち]である。",
      "種[しゅ]の多様性[たようせい]を失[うしな]わば、人類[じんるい]自身[じしん]の存続[そんぞく]も危[あや]ぶまれる。"
    ],
    translation: [
      "The extinction rate of species exceeds the natural background rate by several hundredfold.",
      "Biologists warn that humanity has entered the sixth mass extinction.",
      "Deforestation and marine pollution sever the chains of ecosystems.",
      "The disappearance of a single species can trigger an unforeseen cascade of collapse.",
      "Despite such a grave situation, the political response is strikingly slow.",
      "The balance between economic interest and ecological protection tends to tip toward the former.",
      "Establishing reserves and clamping down on illegal hunting form a minimal shield.",
      "Even so, against a global-scale threat like climate change, a single nation's response is insufficient.",
      "Sustainable fishing and agriculture are the paths to harmony with ecosystems.",
      "Should species diversity be lost, even humanity's own survival would be imperiled."
    ],
    vocab: [
      { word: "絶滅", reading: "ぜつめつ", meaning: "extinction" },
      { word: "速度", reading: "そくど", meaning: "speed/rate" },
      { word: "森林", reading: "しんりん", meaning: "forest" },
      { word: "伐採", reading: "ばっさい", meaning: "logging" },
      { word: "海洋汚染", reading: "かいようおせん", meaning: "marine pollution" },
      { word: "連鎖", reading: "れんさ", meaning: "chain" },
      { word: "崩壊", reading: "ほうかい", meaning: "collapse" },
      { word: "深刻", reading: "しんこく", meaning: "serious" },
      { word: "遅鈍", reading: "ちどん", meaning: "sluggish" },
      { word: "秤", reading: "はかり", meaning: "balance/scale" },
      { word: "狩猟", reading: "しゅりょう", meaning: "hunting" },
      { word: "脅威", reading: "きょうい", meaning: "threat" },
      { word: "漁業", reading: "ぎょぎょう", meaning: "fishery" },
      { word: "地球規模", reading: "ちきゅうきぼ", meaning: "global scale" },
      { word: "多様性", reading: "たようせい", meaning: "diversity" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // N1 — 労働なき未来の到来 (A post-work future)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-40",
    title: "労働[ろうどう]なき未来[みらい]の到来[とうらい]",
    titleReading: "ろうどうなきみらいのとうらい",
    level: "N1",
    summary: "Automation upends labor's role in self-worth; some find new meaning in creativity, others fall into nihilism, and basic income gains plausibility.",
    estMinutes: 9,
    tags: ["work", "automation", "future"],
    body: [
      "自動化[じどうか]と人工知能[じんこうちのう]は労働[ろうどう]の概念[がいねん]そのものを変容[へんよう]させつつある。",
      "人間[にんげん]の仕事[しごと]の過半[かはん]が機械[きかい]に代替[だいたい]される時代[じだい]はもはや遠[とお]くない。",
      "かくも大[おお]きな変革[へんかく]は、社会制度[しゃかいせいど]の再設計[さいせっけい]を余儀[よぎ]なくする。",
      "ベーシックインカム導入[どうにゅう]の議論[ぎろん]は、この文脈[ぶんみゃく]で現実味[げんじつみ]を帯[お]びた。",
      "仕事[しごと]に自己[じこ]の価値[かち]を見出[みいだ]してきた人々[ひとびと]にとって、喪失[そうしつ]は耐[た]え難[がた]い。",
      "他方[たほう]、束縛[そくばく]なき時間[じかん]を手[て]にする者[もの]は、新[あら]たな意義[いぎ]を模索[もさく]し始[はじ]める。",
      "創造的活動[そうぞうてきかつどう]や地域貢献[ちいきこうけん]に生[い]きる喜[よろこ]びを見出[みいだ]す者[もの]もいる。",
      "かと言[い]って、目的[もくてき]を失[うしな]う虚無[きょむ]に陥[おちい]る者[もの]も少[すく]なくない。",
      "労働[ろうどう]なき社会[しゃかい]が人間[にんげん]を真[しん]に自由[じゆう]になし得[う]るかは、文化[ぶんか]の成熟度[せいじゅくど]による。",
      "余暇[よか]を如何[いか]に意義[いぎ]あるものにするか、という問[と]いこそが今後[こんご]の課題[かだい]である。"
    ],
    translation: [
      "Automation and artificial intelligence are transforming the very concept of labor.",
      "The age in which more than half of human jobs are replaced by machines is no longer far off.",
      "Such vast transformation compels a redesign of social institutions.",
      "The debate over introducing a basic income gained plausibility in this context.",
      "For people who have found self-worth in their work, the loss is hard to bear.",
      "On the other hand, those who gain time free of constraint begin searching for new meaning.",
      "Some find joy in creative activity or in contributing to their communities.",
      "That said, those who fall into nihilism, having lost their purpose, are not few.",
      "Whether a post-work society can make humans truly free depends on the maturity of culture.",
      "How to make leisure meaningful is precisely the question that lies ahead."
    ],
    vocab: [
      { word: "自動化", reading: "じどうか", meaning: "automation" },
      { word: "変容", reading: "へんよう", meaning: "transformation" },
      { word: "代替", reading: "だいたい", meaning: "substitution" },
      { word: "変革", reading: "へんかく", meaning: "transformation/reform" },
      { word: "社会制度", reading: "しゃかいせいど", meaning: "social institution" },
      { word: "再設計", reading: "さいせっけい", meaning: "redesign" },
      { word: "導入", reading: "どうにゅう", meaning: "introduction" },
      { word: "模索", reading: "もさく", meaning: "groping/search" },
      { word: "束縛", reading: "そくばく", meaning: "constraint" },
      { word: "虚無", reading: "きょむ", meaning: "nihilism" },
      { word: "余暇", reading: "よか", meaning: "leisure" },
      { word: "創造的活動", reading: "そうぞうてきかつどう", meaning: "creative activity" },
      { word: "地域貢献", reading: "ちいきこうけん", meaning: "community contribution" },
      { word: "自由", reading: "じゆう", meaning: "freedom" },
      { word: "課題", reading: "かだい", meaning: "task/issue" }
    ]
  }
];
