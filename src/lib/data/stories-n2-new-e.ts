import type { StoryData } from "@/lib/types";

// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole run. Adjacent compounds may be
// split by brackets (e.g. 出版[しゅっぱん]社[しゃ]). Kana, katakana, digits,
// and punctuation have no brackets. titleReading is full kana with NO brackets.
// N2 grammar targets: 〜にもかかわらず, 〜からこそ, 〜限り, 〜次第, 〜上で,
// 〜に先立って, 〜際, 〜おそれがある, 〜かねない, 〜つつある, 〜わけにはいかない,
// 〜に過ぎない, 〜にかけては, 〜において, 〜にとって, 〜どころか, 〜に違いない, etc.

export const storiesN2NewE: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n2n-41 — A literary prize (文学賞に輝く)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-41",
    title: "新人[しんじん]作家[さっか]が文学[ぶんがく]賞[しょう]に輝[かがや]く",
    titleReading: "しんじんさっかがぶんがくしょうにかがやく",
    level: "N2",
    summary: "A debut novelist recalls the five-year struggle of writing in obscurity and the moment a prestigious literary prize validated the work that no publisher had answered.",
    estMinutes: 6,
    tags: ["literature", "award", "career"],
    body: [
      "昨夜[さくや]、五年[ごねん]にわたって執筆[しっぴつ]を続[つづ]けた小説[しょうせつ]が、国内[こくない]で最[もっと]も権威[けんい]ある文学[ぶんがく]賞[しょう]を受賞[じゅしょう]した。",
      "壇上[だんじょう]に立[た]った私[わたし]は、胸[むね]が張[は]り裂[さ]けそうになるほどの喜[よろこ]びを感[かん]じていた。",
      "審査[しんさ]委員[いいん]からは、緻密[ちみつ]な心理[しんり]描写[びょうしゃ]と独創[どくそう]的[てき]な文体[ぶんたい]が高[たか]く評価[ひょうか]されたという。",
      "もっとも、この栄誉[えいよ]に浴[よく]するまでには、幾度[いくど]となく挫折[ざせつ]を味[あじ]わった。",
      "出版[しゅっぱん]社[しゃ]に原稿[げんこう]を送[おく]っても返事[へんじ]がない日々[ひび]が続[つづ]き、一度[いちど]は筆[ふで]を折[お]ろうとしたことすらあった。",
      "それにもかかわらず、恩師[おんし]の「自分[じぶん]の言葉[ことば]を信[しん]じ抜[ぬ]け」という一言[ひとこと]が、私[わたし]を支[ささ]え続[つづ]けてくれた。",
      "受賞[じゅしょう]インタビューで、私[わたし]は「物語[ものがたり]を書[か]くこと以外[いがい]に、自分[じぶん]の存在[そんざい]を証明[しょうめい]する手段[しゅだん]が見[み]つからなかった」と答[こた]えた。",
      "報奨金[ほうしょうきん]は故郷[こきょう]の図書館[としょかん]へ寄付[きふ]する予定[よてい]だ。次[つぎ]の作品[さくひん]も、地[ち]に足[あし]のついた執筆[しっぴつ]を心[こころ]がけたい。"
    ],
    translation: [
      "Last night, the novel I had spent five years writing won the most prestigious literary prize in the country.",
      "Standing on the stage, I felt joy so intense that my chest seemed about to burst.",
      "The judging committee reportedly praised the meticulous psychological description and the highly original prose style.",
      "Needless to say, before I could bask in this honor, I had tasted setback any number of times.",
      "Days went on with no reply from publishers after I sent my manuscripts, and I even once considered putting down my pen for good.",
      "Despite all that, my mentor's single phrase, \"Believe in your own words to the very end,\" kept supporting me.",
      "In the award interview, I answered, \"I could find no means other than writing stories to prove my existence.\"",
      "I plan to donate the prize money to a library in my hometown. For my next work, I intend to keep my writing grounded."
    ],
    vocab: [
      { word: "文学賞", reading: "ぶんがくしょう", meaning: "literary prize" },
      { word: "受賞", reading: "じゅしょう", meaning: "winning a prize" },
      { word: "執筆", reading: "しっぴつ", meaning: "writing (a work)" },
      { word: "権威", reading: "けんい", meaning: "authority; prestige" },
      { word: "審査", reading: "しんさ", meaning: "judging; screening" },
      { word: "緻密", reading: "ちみつ", meaning: "meticulous" },
      { word: "挫折", reading: "ざせつ", meaning: "setback; frustration" },
      { word: "栄誉", reading: "えいよ", meaning: "honor" },
      { word: "恩師", reading: "おんし", meaning: "former teacher; mentor" },
      { word: "報奨金", reading: "ほうしょうきん", meaning: "prize money" },
      { word: "寄付", reading: "きふ", meaning: "donation" },
      { word: "一言", reading: "ひとこと", meaning: "a single word" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-42 — A museum heist (博物館の盗難)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-42",
    title: "博物館[はくぶつかん]の盗難[とうなん]",
    titleReading: "はくぶつかんのとうなん",
    level: "N2",
    summary: "A national-treasure-class painting vanishes from a heavily guarded museum overnight, and the investigation exposes not only the thief but a vulnerability in the security system.",
    estMinutes: 7,
    tags: ["crime", "museum", "mystery"],
    body: [
      "深夜[しんや]、厳重[げんじゅう]な警備[けいび]体制[たいせい]を敷[し]いていたはずの博物館[はくぶつかん]から、国宝[こくほう]級[きゅう]の絵画[かいが]が消[き]えた。",
      "警報[けいほう]装置[そうち]は作動[さどう]しておらず、監視[かんし]カメラの映像[えいぞう]も午前[ごぜん]二時[にじ]ちょうどに途絶[とぜつ]していた。",
      "警察[けいさつ]はプロの犯行[はんこう]とみなし、国内[こくない]外[がい]の窃盗[せっとう]団[だん]に関[かん]するデータを洗[あら]い直[なお]し始[はじ]めた。",
      "館長[かんちょう]は記者[きしゃ]団[だん]の前[まえ]で、涙[なみだ]を浮[う]かべながら「文化[ぶんか]遺産[いさん]は金銭[きんせん]に換[か]えがたい」と訴[うった]えた。",
      "三日後[みっかご]、隣国[りんごく]の税関[ぜいかん]で、絵画[かいが]を梱包[こんぽう]した男[おとこ]が身柄[みがら]を拘束[こうそく]された。",
      "取調[とりしら]べに対[たい]し、男[おとこ]は「依頼[いらい]を受[う]けただけだ」と弁明[べんめい]したが、背後[はいご]の黒幕[くろまく]まではたどり着[つ]けなかった。",
      "絵画[かいが]は無事[ぶじ]に発見[はっけん]されたものの、セキュリティの脆弱性[ぜいじゃくせい]が浮[う]き彫[ぼ]りになった。",
      "今後[こんご]は人員[じんいん]の増強[ぞうきょう]に加[くわ]え、最新[さいしん]の生体[せいたい]認証[にんしょう]システムを導入[どうにゅう]することで合意[ごうい]された。"
    ],
    translation: [
      "In the middle of the night, a national-treasure-class painting vanished from a museum that was supposed to have strict security arrangements in place.",
      "The alarm system had not activated, and the surveillance camera footage cut off exactly at two a.m.",
      "The police considered it a professional job and began reexamining data on theft rings at home and abroad.",
      "Before the press corps, the museum director, with tears in his eyes, pleaded, \"Cultural heritage cannot be replaced with money.\"",
      "Three days later, customs in a neighboring country detained a man who had packaged the painting.",
      "During interrogation, the man claimed, \"I only received the request,\" but the investigation could not reach the mastermind behind the scenes.",
      "Although the painting was safely discovered, the vulnerability of the security was brought into sharp relief.",
      "Going forward, it was agreed to strengthen staffing and also introduce the latest biometric authentication system."
    ],
    vocab: [
      { word: "博物館", reading: "はくぶつかん", meaning: "museum" },
      { word: "盗難", reading: "とうなん", meaning: "theft" },
      { word: "警備", reading: "けいび", meaning: "security" },
      { word: "国宝", reading: "こくほう", meaning: "national treasure" },
      { word: "警報", reading: "けいほう", meaning: "alarm" },
      { word: "窃盗", reading: "せっとう", meaning: "theft" },
      { word: "拘束", reading: "こうそく", meaning: "detention" },
      { word: "弁明", reading: "べんめい", meaning: "excuse; explanation" },
      { word: "脆弱性", reading: "ぜいじゃくせい", meaning: "vulnerability" },
      { word: "認証", reading: "にんしょう", meaning: "authentication" },
      { word: "導入", reading: "どうにゅう", meaning: "introduction" },
      { word: "増強", reading: "ぞうきょう", meaning: "reinforcement" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-43 — A public health campaign (健康キャンペーン)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-43",
    title: "街[まち]を変[か]える健康[けんこう]キャンペーン",
    titleReading: "まちをかえるけんこうきゃんぺーん",
    level: "N2",
    summary: "A city launches a large-scale campaign to curb smoking and improve diets, weathering backlash from smokers while gradually reducing obesity through school cooking classes.",
    estMinutes: 6,
    tags: ["health", "campaign", "society"],
    body: [
      "市役所[しやくしょ]は今月[こんげつ]から、生活[せいかつ]習慣[しゅうかん]病[びょう]の予防[よぼう]を掲[かか]げた大規模[だいきぼ]な健康[けんこう]キャンペーンを始[はじ]めた。",
      "目標[もくひょう]は、五年[ごねん]以内[いない]に市民[しみん]の喫煙率[きつえんりつ]を五[ご]パーセント減[へ]らすことだ。",
      "公園[こうえん]や駅前[えきまえ]には、禁煙[きんえん]を促[うなが]すポスターが所狭[ところせま]いほど貼[は]られた。",
      "もっとも、習慣[しゅうかん]を改[あらた]めるのは容易[ようい]ではなく、喫煙者[きつえんしゃ]からは反発[はんぱつ]も出[で]た。",
      "それでも、受動[じゅどう]喫煙[きつえん]の被害[ひがい]を防[ふせ]ぐためには、強[つよ]い措置[そち]もやむを得[え]ないと専門[せんもん]家[か]は指摘[してき]する。",
      "子[こ]どもたちが参加[さんか]する料理[りょうり]教室[きょうしつ]も好評[こうひょう]で、野菜[やさい]を食[た]べる習慣[しゅうかん]が家庭[かてい]に広[ひろ]がっている。",
      "一年[いちねん]後[ご]の追跡[ついせき]調査[ちょうさ]では、市内[しない]の肥満[ひまん]率[りつ]がわずかながら改善[かいぜん]されたことが判明[はんめい]した。",
      "成功[せいこう]の鍵[かぎ]は、住民[じゅうみん]一人[ひとり]一人[ひとり]の意識[いしき]改革[かいかく]にあったと言[い]えよう。"
    ],
    translation: [
      "From this month, the city hall has launched a large-scale health campaign aimed at preventing lifestyle-related diseases.",
      "The goal is to reduce the smoking rate of citizens by five percent within five years.",
      "Posters urging smoking cessation were plastered so densely in parks and in front of stations that there was scarcely any space left.",
      "However, changing habits is not easy, and there was also backlash from smokers.",
      "Even so, experts point out that strong measures are unavoidable in order to prevent the harm of secondhand smoke.",
      "Cooking classes in which children participate are also popular, and the habit of eating vegetables is spreading to households.",
      "A follow-up survey one year later revealed that the obesity rate in the city had improved, albeit only slightly.",
      "It can be said that the key to success lay in the awareness reform of each and every resident."
    ],
    vocab: [
      { word: "予防", reading: "よぼう", meaning: "prevention" },
      { word: "大規模", reading: "だいきぼ", meaning: "large-scale" },
      { word: "喫煙率", reading: "きつえんりつ", meaning: "smoking rate" },
      { word: "禁煙", reading: "きんえん", meaning: "no smoking; smoking cessation" },
      { word: "受動", reading: "じゅどう", meaning: "passive" },
      { word: "被害", reading: "ひがい", meaning: "damage; harm" },
      { word: "措置", reading: "そち", meaning: "measure" },
      { word: "肥満", reading: "ひまん", meaning: "obesity" },
      { word: "改善", reading: "かいぜん", meaning: "improvement" },
      { word: "追跡", reading: "ついせき", meaning: "follow-up; tracking" },
      { word: "改革", reading: "かいかく", meaning: "reform" },
      { word: "容易", reading: "ようい", meaning: "easy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-44 — A trade war (貿易戦争)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-44",
    title: "貿易[ぼうえき]戦争[せんそう]の波[なみ]",
    titleReading: "ぼうえきせんそうのなみ",
    level: "N2",
    summary: "A tariff war between two economic superpowers ripples through global industries, crushing farm exports and small manufacturers while leaders stall at the negotiating table.",
    estMinutes: 7,
    tags: ["economy", "trade", "geopolitics"],
    body: [
      "二大[にだい]経済[けいざい]大国[たいこく]間[かん]の関税[かんぜい]合戦[がっせん]が激化[げきか]する中[なか]、世界[せかい]中[じゅう]の産業[さんぎょう]が影響[えいきょう]を受[う]けている。",
      "報復[ほうふく]的[てき]関税[かんぜい]が発動[はつどう]された結果[けっか]、農産物[のうさんぶつ]の輸出[ゆしゅつ]量[りょう]は前年[ぜんねん]比[ひ]三割[さんわり]も減少[げんしょう]した。",
      "国内[こくない]の製造業[せいぞうぎょう]も、部品[ぶひん]調達[ちょうたつ]コストの高騰[こうとう]に悩[なや]まされ、利益[りえき]率[りつ]が悪化[あっか]する企業[きぎょう]が相次[あいつ]いだ。",
      "両国[りょうこく]の首脳[しゅのう]会談[かいだん]は幾度[いくど]となく開催[かいさい]されたが、合意[ごうい]に至[いた]るには至[いた]らなかった。",
      "一部[いちぶ]の経済[けいざい]学者[がくしゃ]は、関税[かんぜい]を武器[ぶき]にする戦略[せんりゃく]は長期[ちょうき]的[てき]にみて双方[そうほう]に損害[そんがい]を与[あた]えると警告[けいこく]した。",
      "実際[じっさい]、中小[ちゅうしょう]企業[きぎょう]の倒産[とうさん]件数[けんすう]は過去[かこ]最悪[さいあく]を記録[きろく]し、雇用[こよう]失[しつ]の危機[きき]が叫[さけ]ばれている。",
      "代替[だいたい]市場[しじょう]を開拓[かいたく]しようとする動[うご]きも出[で]たものの、新[あたら]しい販路[はんろ]の構築[こうちく]には時間[じかん]がかかる。",
      "国際[こくさい]社会[しゃかい]の仲裁[ちゅうさい]を期待[きたい]する声[こえ]も高[たか]まっているが、解決[かいけつ]の糸口[いとぐち]はまだ見[み]えない。"
    ],
    translation: [
      "As the tariff war between two economic superpowers intensifies, industries all over the world are being affected.",
      "As a result of retaliatory tariffs being invoked, agricultural export volumes dropped by as much as thirty percent year-on-year.",
      "Domestic manufacturing was also plagued by soaring parts procurement costs, and companies whose profit margins deteriorated followed one after another.",
      "Summit talks between the two countries were held any number of times, but they did not succeed in reaching an agreement.",
      "Some economists warned that the strategy of using tariffs as a weapon would, in the long run, inflict damage on both sides.",
      "In fact, the number of bankruptcies among small and medium enterprises hit a record worst, and a crisis of job losses is being cried out.",
      "Moves also emerged to develop alternative markets, but building new sales channels takes time.",
      "Voices expecting international arbitration are also growing, but the clue to a resolution is still nowhere in sight."
    ],
    vocab: [
      { word: "貿易", reading: "ぼうえき", meaning: "trade" },
      { word: "関税", reading: "かんぜい", meaning: "tariff" },
      { word: "報復", reading: "ほうふく", meaning: "retaliation" },
      { word: "輸出", reading: "ゆしゅつ", meaning: "export" },
      { word: "調達", reading: "ちょうたつ", meaning: "procurement" },
      { word: "高騰", reading: "こうとう", meaning: "soaring" },
      { word: "首脳", reading: "しゅのう", meaning: "leader" },
      { word: "倒産", reading: "とうさん", meaning: "bankruptcy" },
      { word: "雇用", reading: "こよう", meaning: "employment" },
      { word: "開拓", reading: "かいたく", meaning: "opening up; development" },
      { word: "販路", reading: "はんろ", meaning: "sales channel" },
      { word: "仲裁", reading: "ちゅうさい", meaning: "arbitration" },
      { word: "警告", reading: "けいこく", meaning: "warning" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-45 — A refugee camp (難民キャンプ)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-45",
    title: "国境[こっきょう]の難民[なんみん]キャンプ",
    titleReading: "こっきょうのなんみんきゃんぷ",
    level: "N2",
    summary: "A border-town camp struggles to shelter ten thousand war refugees as water, medicine, and patience run thin, while a volunteer's painting class offers children a small outlet for their trauma.",
    estMinutes: 7,
    tags: ["refugee", "humanitarian", "displacement"],
    body: [
      "国境[こっきょう]の町[まち]に設[もう]けられた難民[なんみん]キャンプには、戦火[せんか]を逃[のが]れた一万人[いちまんにん]を超[こ]える人々[ひとびと]が押[お]し寄[よ]せている。",
      "テントは数[かず]にして五百[ごひゃく]、それでも収容[しゅうよう]能力[のうりょく]の限界[げんかい]をはるかに超[こ]えている。",
      "水[みず]と食料[しょくりょう]の供給[きょうきゅう]は限[かぎ]られており、乳児[にゅうじ]や高齢[こうれい]者[しゃ]の中[なか]には衰弱[すいじゃく]する人[ひと]も出[で]始[はじ]めた。",
      "国際[こくさい]支援[しえん]団体[だんたい]が医療[いりょう]チームを派遣[はけん]したものの、薬品[やくひん]の在庫[ざいこ]も底[そこ]をつきかけている。",
      "子[こ]どもたちは学校[がっこう]に行[い]けないばかりか、心[こころ]に深[ふか]い傷[きず]を負[お]っているケースも多[おお]いという。",
      "ボランティアの女性[じょせい]が開[ひら]いた絵画[かいが]教室[きょうしつ]では、戦争[せんそう]の光景[こうけい]を描[えが]く子[こ]どもの姿[すがた]に胸[むね]が痛[いた]んだ。",
      "隣国[りんごく]政府[せいふ]は受入[うけいれ]の拡大[かくだい]に消極[しょうきょく]的[てき]で、キャンプの長期化[ちょうきか]は避[さ]けられない情勢[じょうせい]だ。",
      "それでも、難民[なんみん]たちの間[あいだ]には助[たす]け合[あ]いの精神[せいしん]が根付[ねづ]いており、わずかな希望[きぼう]を分[わ]かち合[あ]っている。"
    ],
    translation: [
      "A refugee camp set up in a border town is being flooded by more than ten thousand people who fled the flames of war.",
      "The tents number five hundred, and yet even that is far beyond the camp's capacity.",
      "Water and food supplies are limited, and among infants and the elderly, some have begun to weaken.",
      "International aid organizations dispatched medical teams, but the stock of medicine is also on the verge of running out.",
      "Children cannot go to school; what is more, there are said to be many cases in which they bear deep scars in their hearts.",
      "In a painting class opened by a female volunteer, the sight of children drawing scenes of war pained my heart.",
      "The neighboring government is reluctant to expand acceptance, and the prolongation of the camp is an unavoidable situation.",
      "Even so, the spirit of mutual aid has taken root among the refugees, and they share what little hope they have."
    ],
    vocab: [
      { word: "難民", reading: "なんみん", meaning: "refugee" },
      { word: "戦火", reading: "せんか", meaning: "flames of war" },
      { word: "収容", reading: "しゅうよう", meaning: "accommodation" },
      { word: "供給", reading: "きょうきゅう", meaning: "supply" },
      { word: "衰弱", reading: "すいじゃく", meaning: "weakening" },
      { word: "派遣", reading: "はけん", meaning: "dispatch" },
      { word: "在庫", reading: "ざいこ", meaning: "stock" },
      { word: "消極", reading: "しょうきょく", meaning: "passive; reluctant" },
      { word: "拡大", reading: "かくだい", meaning: "expansion" },
      { word: "長期化", reading: "ちょうきか", meaning: "prolongation" },
      { word: "精神", reading: "せいしん", meaning: "spirit" },
      { word: "根付", reading: "ねづ", meaning: "taking root" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-46 — A scientific fraud (科学界を揺るがす不正)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-46",
    title: "科学[かがく]界[かい]を揺[ゆる]がす不正[ふせい]",
    titleReading: "かがくかいをゆるがすふせい",
    level: "N2",
    summary: "A celebrated professor is exposed for fabricating experiment images, forcing the university to retract every paper and igniting a debate over mandatory third-party verification in research.",
    estMinutes: 6,
    tags: ["science", "ethics", "scandal"],
    body: [
      "一流[いちりゅう]大学[だいがく]の教授[きょうじゅ]が、研究[けんきゅう]データを捏造[ねつぞう]していた疑[うたが]いで告発[こくはつ]された。",
      "論文[ろんぶん]に掲載[けいさい]された実験[じっけん]結果[けっか]は、他[ほか]の研究[けんきゅう]室[しつ]では再現[さいげん]されないという指摘[してき]が相次[あいつ]いだ。",
      "当初[とうしょ]、教授[きょうじゅ]は「手続[てつづ]き上[じょう]のミスだ」と主張[しゅちょう]していたが、調査[ちょうさ]委員[いいん]会[かい]の追及[ついきゅう]に耐[た]えきれなかった。",
      "解析[かいせき]の結果[けっか]、画像[がぞう]が意図[いと]的[てき]に改[かい]ざんされ、都合[つごう]の悪[わる]いデータが削除[さくじょ]されていたことが判明[はんめい]した。",
      "大学[だいがく]は直[ただ]ちに教授[きょうじゅ]を停職[ていしょく]処分[しょぶん]とし、過去[かこ]の論文[ろんぶん]すべてを撤回[てっかい]する手続[てつづ]きに入[はい]った。",
      "共同[きょうどう]研究者[けんきゅうしゃ]たちも巻[ま]き込[こ]まれ、中[なか]には博士[はかせ]号[ごう]を返上[へんじょう]する者[もの]も出[で]た。",
      "信頼[しんらい]回復[かいふく]には長年[ながねん]かかるとの声[こえ]もあり、科学[かがく]界[かい]全体[ぜんたい]への信頼[しんらい]低下[ていか]も懸念[けねん]されている。",
      "今後[こんご]は第三者[だいさんしゃ]機関[きかん]による検証[けんしょう]を義務[ぎむ]付[づ]けるなど、研究[けんきゅう]倫理[りんり]の強化[きょうか]が急務[きゅうむ]となっている。"
    ],
    translation: [
      "A professor at a top-tier university was denounced on suspicion of having fabricated research data.",
      "It was pointed out in succession that the experimental results published in the paper could not be reproduced in other laboratories.",
      "At first, the professor claimed it was \"a procedural error,\" but he could not withstand the investigation committee's pursuit.",
      "As a result of the analysis, it became clear that the images had been intentionally altered, and that inconvenient data had been deleted.",
      "The university immediately suspended the professor and began procedures to retract all of his past papers.",
      "Co-researchers were also dragged in, and some even returned their doctoral degrees.",
      "There were also voices saying that restoring trust would take many years, and a decline in trust in the entire scientific community was also a concern.",
      "Going forward, making verification by a third-party organization mandatory, among other measures, has become an urgent task in strengthening research ethics."
    ],
    vocab: [
      { word: "捏造", reading: "ねつぞう", meaning: "fabrication" },
      { word: "告発", reading: "こくはつ", meaning: "accusation; whistleblowing" },
      { word: "論文", reading: "ろんぶん", meaning: "academic paper" },
      { word: "掲載", reading: "けいさい", meaning: "publication" },
      { word: "再現", reading: "さいげん", meaning: "reproduction" },
      { word: "削除", reading: "さくじょ", meaning: "deletion" },
      { word: "停職", reading: "ていしょく", meaning: "suspension" },
      { word: "撤回", reading: "てっかい", meaning: "retraction" },
      { word: "返上", reading: "へんじょう", meaning: "returning (a title)" },
      { word: "倫理", reading: "りんり", meaning: "ethics" },
      { word: "検証", reading: "けんしょう", meaning: "verification" },
      { word: "義務", reading: "ぎむ", meaning: "obligation" },
      { word: "急務", reading: "きゅうむ", meaning: "urgent task" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-47 — A celebrity trial (人気俳優の公判)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-47",
    title: "人気[にんき]俳優[はいゆう]の公判[こうはん]",
    titleReading: "にんきはいゆうのこうはん",
    level: "N2",
    summary: "A beloved actor stands trial for drug possession, and as prosecutors demand prison time while fans split over leniency, the verdict looms over the entire entertainment industry.",
    estMinutes: 6,
    tags: ["celebrity", "trial", "law"],
    body: [
      "国民[こくみん]的[てき]人気[にんき]を誇[ほこ]る俳優[はいゆう]が、薬物[やくぶつ]所持[しょじ]の罪[つみ]で起訴[きそ]され、初公判[はつこうはん]が開[ひら]かれた。",
      "法廷[ほうてい]には報道[ほうどう]陣[じん]がひしめき、傍聴[ぼうちょう]席[せき]を求[もと]める長[なが]い列[れつ]が建物[たてもの]の外[そと]まで伸[の]びていた。",
      "被告[ひこく]は罪[つみ]を認[みと]め、「多[おお]くの応援[おうえん]してくれた人[ひと]を裏切[うらぎ]った」と声[こえ]を震[ふる]わせた。",
      "検察[けんさつ]は「社会[しゃかい]的[てき]影響[えいきょう]の大[おお]きさを考慮[こうりょ]すれば、実刑[じっけい]もやむを得[え]ない」と主張[しゅちょう]した。",
      "一方[いっぽう]、弁護[べんご]士[し]は「更生[こうせい]の意欲[いよく]が顕著[けんちょ]に見[み]られる」と訴[うった]え、執行[しっこう]猶予[ゆうよ]を求刑[きゅうけい]した。",
      "裁判[さいばん]長[ちょう]は「被告[ひこく]の反省[はんせい]の度合[どあい]と社会[しゃかい]復帰[ふっき]の可能性[かのうせい]を総合[そうごう]的[てき]に判断[はんだん]する」と述[の]べた。",
      "ファンたちの間[あいだ]では「厳[きび]しすぎる」「甘[あま]すぎる」と意見[いけん]が割[わ]れ、SNS上[じょう]で激[はげ]しい議論[ぎろん]が交[か]わされた。",
      "最終[さいしゅう]判決[はんけつ]は来月[らいげつ]に言[い]い渡[わた]される予定[よてい]だが、芸能[げいのう]界[かい]全体[ぜんたい]に与[あた]える波及[はきゅう]効果[こうか]は計[はか]り知[し]れない。"
    ],
    translation: [
      "An actor who boasts national popularity was indicted for the crime of drug possession, and the first public trial was held.",
      "The press corps crowded the courtroom, and a long line of people seeking to attend as observers stretched outside the building.",
      "The defendant admitted the crime and, with a trembling voice, said, \"I betrayed the many people who supported me.\"",
      "The prosecution argued, \"Considering the magnitude of the social impact, an actual prison sentence is unavoidable as well.\"",
      "On the other hand, the defense pleaded, \"A clear will to rehabilitate is evident,\" and demanded a suspended sentence.",
      "The presiding judge stated, \"I will make a comprehensive judgment on the degree of the defendant's remorse and the possibility of social reintegration.\"",
      "Among fans, opinions were divided between \"too strict\" and \"too lenient,\" and fierce debate was exchanged on social media.",
      "The final verdict will be handed down next month, but the ripple effect on the entertainment world as a whole is immeasurable."
    ],
    vocab: [
      { word: "公判", reading: "こうはん", meaning: "public trial" },
      { word: "起訴", reading: "きそ", meaning: "indictment" },
      { word: "薬物", reading: "やくぶつ", meaning: "drugs" },
      { word: "所持", reading: "しょじ", meaning: "possession" },
      { word: "傍聴", reading: "ぼうちょう", meaning: "observation of a trial" },
      { word: "被告", reading: "ひこく", meaning: "defendant" },
      { word: "検察", reading: "けんさつ", meaning: "prosecution" },
      { word: "実刑", reading: "じっけい", meaning: "actual prison sentence" },
      { word: "執行猶予", reading: "しっこうゆうよ", meaning: "suspended sentence" },
      { word: "求刑", reading: "きゅうけい", meaning: "sentencing demand" },
      { word: "更生", reading: "こうせい", meaning: "rehabilitation" },
      { word: "反省", reading: "はんせい", meaning: "remorse" },
      { word: "判決", reading: "はんけつ", meaning: "verdict" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-48 — A volcanic eruption (火山の噴火)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-48",
    title: "火山[かざん]の噴火[ふんか]",
    titleReading: "かざんのふんか",
    level: "N2",
    summary: "A Pacific-coast volcano erupts for the first time in 120 years, blanketing towns in ash; an early advisory spares lives, but melon fields are ruined and volunteers race to clear roofs.",
    estMinutes: 7,
    tags: ["disaster", "volcano", "nature"],
    body: [
      "太平洋[たいへいよう]沿岸[えんがん]の火山[かざん]が百二十年[ひゃくにじゅうねん]ぶりに大[おお]噴火[ふんか]を起[お]こした。",
      "噴煙[ふんえん]は高度[こうど]一万[いちまん]メートルに達[たっ]し、周辺[しゅうへん]の町[まち]は火山[かざん]灰[ばい]で灰色[はいいろ]に覆[おお]われた。",
      "幸[さいわ]いにも直前[ちょくぜん]の避難[ひなん]勧告[かんこく]が出[で]ていたため、人[じん]的[てき]被害[ひがい]は軽微[けいい]にとどまった。",
      "それにもかかわらず、農作物[のうさくもつ]への被害[ひがい]は深刻[しんこく]で、特産[とくさん]のメロン畑[ばたけ]が壊滅[かいめつ]的[てき]な打撃[だげき]を受[う]けた。",
      "気象[きしょう]庁[ちょう]は火口[かこう]周辺[しゅうへん]三[さん]キロ以内[いない]への立入[たちいり]禁止[きんし]を継続[けいぞく]し、二次[にじ]災害[さいがい]に警報[けいほう]を発[はっ]した。",
      "ボランティアたちは屋根[やね]に積[つ]もった灰[はい]の除去[じょきょ]に奔走[ほんそう]し、高齢[こうれい]者[しゃ]の避難[ひなん]所[しょ]への搬送[はんそう]も手伝[てつだ]った。",
      "科学者[かがくしゃ]たちはマグマの活動[かつどう]を監視[かんし]し続[つづ]け、次[つぎ]の噴火[ふんか]の時期[じき]と規模[きぼ]の予測[よそく]に努[つと]めている。",
      "自然[しぜん]の猛威[もうい]を前[まえ]にして、人間[にんげん]の力[ちから]の及[およ]ばなさを痛感[つうかん]すると同時[どうじ]に、助[たす]け合[あ]うことの尊[とうと]さを改[あらた]めて実感[じっかん]した。"
    ],
    translation: [
      "A volcano on the Pacific coast erupted massively for the first time in 120 years.",
      "The plume reached an altitude of ten thousand meters, and the surrounding towns were covered in gray volcanic ash.",
      "Fortunately, because an evacuation advisory had been issued just before, human casualties remained minor.",
      "Nevertheless, damage to crops was severe, and the fields of melons, a local specialty, suffered a devastating blow.",
      "The Meteorological Agency continued to prohibit entry within three kilometers of the crater, and issued a warning for secondary disasters.",
      "Volunteers rushed to remove the ash that had accumulated on roofs, and also helped transport the elderly to evacuation shelters.",
      "Scientists continue to monitor the magma's activity, striving to predict the timing and scale of the next eruption.",
      "In the face of nature's fury, while deeply feeling the limits of human power, I also realized anew the preciousness of helping one another."
    ],
    vocab: [
      { word: "火山", reading: "かざん", meaning: "volcano" },
      { word: "噴火", reading: "ふんか", meaning: "eruption" },
      { word: "沿岸", reading: "えんがん", meaning: "coast" },
      { word: "噴煙", reading: "ふんえん", meaning: "volcanic plume" },
      { word: "高度", reading: "こうど", meaning: "altitude" },
      { word: "直前", reading: "ちょくぜん", meaning: "just before" },
      { word: "軽微", reading: "けいい", meaning: "minor" },
      { word: "農作物", reading: "のうさくもつ", meaning: "crops" },
      { word: "壊滅的", reading: "かいめつてき", meaning: "devastating" },
      { word: "火口", reading: "かこう", meaning: "crater" },
      { word: "警報", reading: "けいほう", meaning: "warning" },
      { word: "猛威", reading: "もうい", meaning: "fury; ravages" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-49 — A cyber attack (都市を麻痺させたサイバー攻撃)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-49",
    title: "都市[とし]を麻痺[まひ]させたサイバー攻撃[こうげき]",
    titleReading: "としをまひさせたさいばーこうげき",
    level: "N2",
    summary: "A coordinated ransomware attack cripples a metropolis on a Monday morning, cutting power to a hundred thousand homes and freezing hospital records as police chase the mastermind across borders.",
    estMinutes: 7,
    tags: ["cyber", "technology", "crime"],
    body: [
      "大都市[だいとし]の行政[ぎょうせい]システムに大規模[だいきぼ]なサイバー攻撃[こうげき]が加[くわ]えられ、公共[こうきょう]サービスが麻痺[まひ]状態[じょうたい]に陥[おちい]った。",
      "攻撃[こうげき]は月曜[げつよう]の朝[あさ]、通勤[つうきん]ラッシュの最中[さいちゅう]に始[はじ]まった。",
      "電力[でんりょく]会社[がいしゃ]の制御[せいぎょ]システムが乗[の]っ取[と]られ、十万[じゅうまん]戸[こ]以上[いじょう]が停電[ていでん]した。",
      "病院[びょういん]では電子[でんし]カルテにアクセスできなくなり、手術[しゅじゅつ]の延期[えんき]が相次[あいつ]いだ。",
      "警察[けいさつ]のサイバー犯罪[はんざい]対策[たいさく]班[はん]と海外[かいがい]の専門[せんもん]機関[きかん]が協力[きょうりょく]し、犯行[はんこう]グループの追跡[ついせき]を開始[かいし]した。",
      "身代金[みしろきん]を要求[ようきゅう]するメッセージが画面[がめん]に表示[ひょうじ]され、暗号[あんごう]化[か]されたデータの復元[ふくげん]は極[きわ]めて困難[こんなん]とみられた。",
      "五[ご]日[か]後[ご]、システムは部分[ぶぶん]的[てき]に復旧[ふっきゅう]したものの、情報[じょうほう]漏洩[ろうえい]の規模[きぼ]は依然[いぜん]として不明[ふめい]だ。",
      "政府[せいふ]は国[こく]を挙[あ]げて対応[たいおう]する方針[ほうしん]を示[しめ]し、重要[じゅうよう]インフラの保護[ほご]に万全[ばんぜん]を期[き]すとした。"
    ],
    translation: [
      "A large-scale cyber attack was launched against the administrative systems of a major city, and public services fell into a state of paralysis.",
      "The attack began on a Monday morning, in the middle of the commuter rush hour.",
      "The control system of the power company was hijacked, and more than one hundred thousand households lost power.",
      "At hospitals, electronic medical records became inaccessible, and surgeries were postponed one after another.",
      "The police cybercrime unit and overseas specialized agencies cooperated and began tracking the criminal group.",
      "A message demanding ransom was displayed on screens, and restoring the encrypted data appeared extremely difficult.",
      "Five days later, the systems were partially restored, but the scale of the information leak remained unknown.",
      "The government showed a policy of responding with all the nation's might, and resolved to ensure full protection of critical infrastructure."
    ],
    vocab: [
      { word: "攻撃", reading: "こうげき", meaning: "attack" },
      { word: "麻痺", reading: "まひ", meaning: "paralysis" },
      { word: "制御", reading: "せいぎょ", meaning: "control" },
      { word: "停電", reading: "ていでん", meaning: "power outage" },
      { word: "犯罪", reading: "はんざい", meaning: "crime" },
      { word: "対策", reading: "たいさく", meaning: "countermeasure" },
      { word: "追跡", reading: "ついせき", meaning: "tracking" },
      { word: "身代金", reading: "みしろきん", meaning: "ransom" },
      { word: "暗号化", reading: "あんごうか", meaning: "encryption" },
      { word: "復元", reading: "ふくげん", meaning: "restoration" },
      { word: "復旧", reading: "ふっきゅう", meaning: "recovery" },
      { word: "漏洩", reading: "ろうえい", meaning: "leak" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-50 — A retirement community (第二の人生を送る町)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-50",
    title: "第二[だいに]の人生[じんせい]を送[おく]る町[まち]",
    titleReading: "だいにのじんせいをおくるまち",
    level: "N2",
    summary: "A mountain town reinvents itself as a retirement community where seniors share meals and mutual aid, but the staff strain under the growing nursing needs of residents with dementia.",
    estMinutes: 6,
    tags: ["aging", "community", "lifestyle"],
    body: [
      "山間[さんかん]部[ぶ]に位置[いち]する小[ちい]さな町[まち]は、定年[ていねん]退職[たいしょく]者[しゃ]向[む]けの共同[きょうどう]住宅[じゅうたく]を整備[せいび]し、新[あたら]しいコミュニティを形成[けいせい]した。",
      "移住[いじゅう]してきた高齢[こうれい]者[しゃ]たちは、互[たが]いに助[たす]け合[あ]いながら穏[おだ]やかな日々[ひび]を過[す]ごしている。",
      "共用[きょうよう]の食堂[しょくどう]では毎朝[まいあさ]季節[きせつ]の野菜[やさい]を使[つか]った朝食[ちょうしょく]が出[で]され、食事[しょくじ]を通[つう]じて交流[こうりゅう]が深[ふか]まる。",
      "医療[いりょう]センターも近[ちか]くにあり、急病[きゅうびょう]の際[さい]にも迅速[じんそく]な対応[たいおう]が可能[かのう]な体制[たいせい]が整[ととの]えられている。",
      "もっとも、若[わか]い世代[せだい]との接点[せってん]が少[すく]ない点[てん]は課題[かだい]で、地域[ちいき]の小学校[しょうがっこう]と交流[こうりゅう]事業[じぎょう]を始[はじ]めた。",
      "子[こ]どもたちと触[ふ]れ合[あ]う中[なか]で、入居[にゅうきょ]者[しゃ]たちは生[い]き生[い]きとした表情[ひょうじょう]を取[と]り戻[もど]すようになった。",
      "一方[いっぽう]で、認知[にんち]症[しょう]の進行[しんこう]に伴[ともな]う看護[かんご]の負担[ふたん]も増[ま]しており、専門[せんもん]スタッフの増員[ぞういん]が求[もと]められている。",
      "それでも、住民[じゅうみん]たちは「人生[じんせい]の秋[あき]をこの町[まち]で迎[むか]えられたことに感謝[かんしゃ]している」と口[くち]を揃[そろ]える。"
    ],
    translation: [
      "A small town located in a mountainous area built shared housing for retirees and formed a new community.",
      "The elderly who relocated there live peaceful days while helping one another.",
      "At the shared dining hall, breakfast made with seasonal vegetables is served every morning, and through meals, mutual exchange deepens.",
      "A medical center is also nearby, and a system enabling rapid response in case of sudden illness has been put in place.",
      "However, the lack of contact with younger generations is an issue, so an exchange program with the local elementary school was started.",
      "Through interacting with the children, the residents began to recover lively expressions.",
      "On the other hand, the nursing burden accompanying the progression of dementia is also growing, and an increase in specialized staff is being sought.",
      "Even so, the residents all say in unison, \"We are grateful to have been able to welcome the autumn of our lives in this town.\""
    ],
    vocab: [
      { word: "定年", reading: "ていねん", meaning: "retirement age" },
      { word: "退職", reading: "たいしょく", meaning: "retirement" },
      { word: "移住", reading: "いじゅう", meaning: "relocation" },
      { word: "共用", reading: "きょうよう", meaning: "shared use" },
      { word: "食堂", reading: "しょくどう", meaning: "dining hall" },
      { word: "急病", reading: "きゅうびょう", meaning: "sudden illness" },
      { word: "接点", reading: "せってん", meaning: "contact point" },
      { word: "入居", reading: "にゅうきょ", meaning: "moving in" },
      { word: "認知症", reading: "にんちしょう", meaning: "dementia" },
      { word: "看護", reading: "かんご", meaning: "nursing" },
      { word: "増員", reading: "ぞういん", meaning: "increase in staff" },
      { word: "感謝", reading: "かんしゃ", meaning: "gratitude" }
    ]
  }
];
