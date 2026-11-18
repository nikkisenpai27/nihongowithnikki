import type { StoryData } from "@/lib/types";

// N2 short stories set C (new batch).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole run. Kana, katakana, digits, and
// punctuation have no brackets. titleReading is full kana with NO brackets.
// N2 grammar targets: 〜どころか, 〜に違いない, 〜限り, 〜次第, 〜に過ぎない,
// 〜かねない, 〜つつある, 〜上で, 〜際, 〜わけにはいかない, 〜おそれがある,
// 〜にもかかわらず, 〜に比べ, 〜においては, 〜にとって, 〜他ならない,
// 〜を余儀なくされる, 〜ずにはいられない, 〜まい, 〜つつ, 〜ばかりだ, etc.

export const storiesN2NewC: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n2n-21 — A prison visit (刑務所の面会)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-21",
    title: "塀[へい]の向[む]こう側[がわ]の家族[かぞく]",
    titleReading: "へいのむこうがわのかぞく",
    level: "N2",
    summary: "A younger sibling visits an imprisoned brother for the first time in ten years and confronts guilt, regret, and the limits of familial loyalty.",
    estMinutes: 7,
    tags: ["family", "crime", "redemption"],
    body: [
      "先週[せんしゅう]の日曜日[にちようび]、私[わたし]は十年[じゅうねん]ぶりに塀[へい]の向[む]こうにいる兄[あに]を訪[たず]ねた。刑務所[けいむしょ]の面会室[めんかいしつ]は、ガラス一枚[いちまい]隔[へだ]てただけの、あまりにも無機質[むきしつ]な空間[くうかん]だった。",
      "受付[うけつけ]を済[す]ませた上[うえ]で、指定[してい]された席[せき]に着[つ]くと、髪[かみ]の白[しろ]くなった兄[あに]がゆっくりと歩[ある]いてきた。十年[じゅうねん]という月日[つきひ]は、彼[かれ]の顔[かお]に深[ふか]い刻[きざ]み目[め]を残[のこ]していた。",
      "受話器[じゅわき]を取[と]った瞬間[しゅんかん]、私[わたし]は言葉[ことば]が出[で]てこなかった。安易[あんい]な励[はげ]ましの言葉[ことば]をかけるわけにはいかない、そんな躊躇[ちゅうちょ]が胸[むね]を占[し]めていたのだ。",
      "兄[あに]は弱々[よわよわ]しい笑[え]みを浮[う]かべたどころか、むしろ静[しず]かに「すまなかった」と告[つ]げた。その声[こえ]には、十年分[じゅうねんぶん]の後悔[こうかい]がにじんでいるに違[ちが]いない。",
      "話[はなし]を聞[き]く限[かぎ]り、獄中[ごくちゅう]で彼[かれ]は読書[どくしょ]に没頭[ぼっとう]し、少[すこ]しずつ自分自身[じぶんじしん]と向[む]き合[あ]いつつあるという。かつての傲慢[ごうまん]さは、影[かげ]を潜[ひそ]めていた。",
      "私[わたし]が帰[かえ]る際[さい]、兄[あに]は窓越[まどご]しに「次[つぎ]は必[かなら]ずまともな姿[すがた]で」と口[くち]にした。その約束[やくそく]が果[は]たされるか否[いな]かは、彼自身[かれじしん]の決意[けつい]次第[しだい]だ。",
      "駅[えき]へ向[む]かうバスの中[なか]、私[わたし]は考[かんが]えてしまった。罪[つみ]を犯[おか]すのは個人[こじん]でも、その背景[はいけい]には社会[しゃかい]の歪[ひず]みも無視[むし]できないのではないかと。",
      "とはいえ、被害者[ひがいしゃ]の方々[かたがた]の痛[いた]みに比[くら]べれば、私[わたし]の感傷[かんしょう]などたかが知[し]れている。身内[みうち]として、今後[こんご]も支[ささ]え続[つづ]ける覚悟[かくご]でいるしかない。"
    ],
    translation: [
      "Last Sunday, for the first time in ten years, I visited my brother beyond the prison walls. The visiting room was an overly sterile space separated by a single pane of glass.",
      "After completing reception, when I took my designated seat, my brother with graying hair walked slowly toward me. Ten years had left deep scars on his face.",
      "The moment I picked up the receiver, no words came out. I could not bring myself to offer easy encouragement; that hesitation filled my heart.",
      "Far from a feeble smile, he quietly told me, \"I'm sorry.\" His voice no doubt carried ten years of regret.",
      "As far as I could tell from his talk, in prison he had immersed himself in reading and was gradually confronting himself. His former arrogance had receded.",
      "As I was leaving, he said through the glass, \"Next time, I promise to stand before you as a proper man.\" Whether that promise will be kept depends entirely on his own resolve.",
      "On the bus to the station, I found myself thinking: even if an individual commits a crime, can we ignore the distortions of society behind it?",
      "That said, compared to the pain of the victims, my sentiment is trifling. As a family member, all I can do is stay resolved to keep supporting him."
    ],
    vocab: [
      { word: "刑務所", reading: "けいむしょ", meaning: "prison" },
      { word: "面会", reading: "めんかい", meaning: "visitation" },
      { word: "無機質", reading: "むきしつ", meaning: "inorganic; sterile" },
      { word: "受話器", reading: "じゅわき", meaning: "telephone receiver" },
      { word: "躊躇", reading: "ちゅうちょ", meaning: "hesitation" },
      { word: "後悔", reading: "こうかい", meaning: "regret" },
      { word: "獄中", reading: "ごくちゅう", meaning: "in prison" },
      { word: "没頭", reading: "ぼっとう", meaning: "immersion; devotion" },
      { word: "傲慢", reading: "ごうまん", meaning: "arrogance" },
      { word: "窓越し", reading: "まどごし", meaning: "through the window" },
      { word: "覚悟", reading: "かくご", meaning: "resolve; readiness" },
      { word: "感傷", reading: "かんしょう", meaning: "sentiment" },
      { word: "隔てる", reading: "へだてる", meaning: "to separate" },
      { word: "歪", reading: "ひずみ", meaning: "distortion" },
      { word: "決意", reading: "けつい", meaning: "determination" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-22 — A scientific expedition (南極の氷床探検)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-22",
    title: "氷原[ひょうげん]に眠[ねむ]る答[こた]え",
    titleReading: "ひょうげんにねむるこたえ",
    level: "N2",
    summary: "A polar expedition leader extracts two-thousand-year-old air from an Antarctic ice sheet and uncovers data that could rewrite climate models.",
    estMinutes: 7,
    tags: ["science", "expedition", "climate"],
    body: [
      "南極[なんきょく]氷原[ひょうげん]の果[はて]で、私[わたし]たちの探検隊[たんけんたい]は氷床[ひょうしょう]の深層[しんそう]から二千年前[にせんねんまえ]の空気[くうき]を抽出[ちゅうしゅつ]しようとしていた。気温[きおん]マイナス四十度[よんじゅうど]の中[なか]、機材[きざい]の一部[いちぶ]が凍結[とうけつ]し、計画[けいかく]は早[はや]くも暗礁[あんしょう]に乗[の]り上[あ]げかけた。",
      "リーダーである私[わたし]は、全員[ぜんいん]の安全[あんぜん]を確保[かくほ]した上[うえ]でなければ、これ以上[いじょう]の掘削[くっさく]を進[すす]めるわけにはいかなかった。いくら成果[せいか]が期待[きたい]できるとはいえ、隊員[たいいん]の命[いのち]に代[か]えられるものはないからだ。",
      "凍結[とうけつ]した配管[はいかん]を修復[しゅうふく]する際[さい]、隊員[たいいん]の一人[ひとり]が静[しず]かに「ここに来[き]たのは、後世[こうせい]のために記録[きろく]を残[のこ]すためだ」と口[くち]にした。その言葉[ことば]を聞[き]いた瞬間[しゅんかん]、疲[つか]れが嘘[うそ]のように引[ひ]いていった。",
      "五日目[いつかめ]の夜[よる]、ついに氷床[ひょうしょう]コアから気泡[きほう]が含[ふく]まれた試料[しりょう]が採取[さいしゅ]された。顕微鏡[けんびきょう]をのぞき込[こ]んだ同僚[どうりょう]の目[め]は、子供[こども]のように輝[かがや]いていた。これこそが科学者[かがくしゃ]にとって至上[しじょう]の瞬間[しゅんかん]に違[ちが]いない。",
      "だが、解析[かいせき]の過程[かてい]で思[おも]いがけないデータが浮[う]かび上[あ]がった。二千年前[にせんねんまえ]の大気中[たいきちゅう]のメタン濃度[のうど]は、従来[じゅうらい]の推定[すいてい]をはるかに上回[うわまわ]る数値[すうち]を示[しめ]していたのだ。",
      "この発見[はっけん]を公表[こうひょう]すれば、気候変動[きこうへんどう]のモデルそのものが書[か]き換[か]えられかねない。一方[いっぽう]で、拙速[せっそく]な発表[はっぴょう]は誤解[ごかい]を招[まね]く恐[おそ]れがある。私[わたし]たちは慎重[しんちょう]に検証[けんしょう]を重[かさ]ねることにした。",
      "基地[きち]に戻[もど]る直前[ちょくぜん]、吹雪[ふぶき]が視界[しかい]を奪[うば]い、帰路[きろ]が閉[と]ざされかけた。無線[むせん]で本部[ほんぶ]と連絡[れんらく]を取[と]り合[あ]う間[あいだ]、隊員[たいいん]たちは互[たが]いに励[はげ]まし合[あ]い、極限状態[きょくげんじょうたい]の中[なか]で人間[にんげん]の脆[もろ]さと強[つよ]さを同時[どうじ]に思[おも]い知[し]らされた。",
      "最終的[さいしゅうてき]に氷床[ひょうしょう]の下[した]から、地球[ちきゅう]が過去[かこ]に経験[けいけん]した気候[きこう]の秘密[ひみつ]が少[すこ]しずつ明[あき]らかになりつつある。この先[さき]、世界[せかい]の人々[ひとびと]の運命[うんめい]を左右[さゆう]するかもしれないデータを前[まえ]にして、科学者[かがくしゃ]としての責任[せきにん]の重[おも]さを痛感[つうかん]せずにはいられない。"
    ],
    translation: [
      "At the edge of the Antarctic ice plain, our expedition team was attempting to extract two-thousand-year-old air from deep within the ice sheet. At minus forty degrees, part of the equipment froze, and the plan nearly ran aground early on.",
      "As leader, I could not proceed with further drilling unless everyone's safety was secured. However much results could be expected, no achievement could replace the lives of the team.",
      "While repairing the frozen pipes, one team member quietly said, \"We came here to leave a record for future generations.\" The moment I heard those words, my fatigue vanished as if it had been a lie.",
      "On the fifth night, we finally extracted a sample containing air bubbles from the ice core. The eyes of the colleague peering into the microscope gleamed like a child's. This must surely be the supreme moment for a scientist.",
      "However, an unexpected datum emerged during analysis. The methane concentration in the atmosphere of two thousand years ago showed a figure far exceeding conventional estimates.",
      "Publishing this finding could well force a rewrite of the climate change model itself. On the other hand, a hasty announcement could invite misunderstanding. We decided to repeat our verification carefully.",
      "Just before returning to base, a blizzard robbed us of visibility and our return route was nearly cut off. While keeping in radio contact with headquarters, the team members encouraged one another, and in that extreme state I was made to feel both the fragility and the strength of human beings at once.",
      "Ultimately, from beneath the ice sheet, the secret of the climate the Earth experienced in the past is gradually coming to light. Facing data that may shape the fate of people around the world, I cannot help but feel acutely the weight of a scientist's responsibility."
    ],
    vocab: [
      { word: "探検隊", reading: "たんけんたい", meaning: "expedition team" },
      { word: "氷床", reading: "ひょうしょう", meaning: "ice sheet" },
      { word: "抽出", reading: "ちゅうしゅつ", meaning: "extraction" },
      { word: "凍結", reading: "とうけつ", meaning: "freezing" },
      { word: "掘削", reading: "くっさく", meaning: "excavation; drilling" },
      { word: "隊員", reading: "たいいん", meaning: "team member" },
      { word: "顕微鏡", reading: "けんびきょう", meaning: "microscope" },
      { word: "試料", reading: "しりょう", meaning: "sample; specimen" },
      { word: "採取", reading: "さいしゅ", meaning: "collection; sampling" },
      { word: "気泡", reading: "きほう", meaning: "air bubble" },
      { word: "濃度", reading: "のうど", meaning: "concentration" },
      { word: "推定", reading: "すいてい", meaning: "estimation" },
      { word: "拙速", reading: "せっそく", meaning: "hasty; rash" },
      { word: "検証", reading: "けんしょう", meaning: "verification" },
      { word: "痛感", reading: "つうかん", meaning: "keen realization" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-23 — A labor strike (労働ストライキ)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-23",
    title: "棒[ぼう]の下[した]で燃[も]える怒[いか]り",
    titleReading: "ぼうのしたでもえるいかり",
    level: "N2",
    summary: "Factory workers walk out after wage talks collapse, and a young union member witnesses the cost and the fragile gains of a seven-day strike.",
    estMinutes: 7,
    tags: ["labor", "society", "conflict"],
    body: [
      "夜明[よあ]け前[まえ]、工場[こうじょう]の正門[せいもん]前[まえ]にピケを張[は]った労働者[ろうどうしゃ]たちの列[れつ]が、冷[つめ]たい朝靄[あさもや]の中[なか]に浮[う]かび上[あ]がっていた。昨夜[さくや]の団交[だんこう]の決裂[けつれつ]を受[う]け、組合[くみあい]は満場一致[まんじょういっち]でストライキに突入[とつにゅう]することを決[き]めた。",
      "経営側[けいえいがわ]は賃上[ちんあ]げ要求[ようきゅう]を「莫大[ばくだい]な負担[ふたん]に過[す]ぎない」と一蹴[いっきゅう]した。だが組合側[くみあいがわ]からすれば、インフレに伴[ともな]って実質賃金[じっしつちんぎん]は六年[ろくねん]連続[れんぞく]で下[さ]がり続[つづ]けているのだ。もはや黙[だま]っているわけにはいかない状況[じょうきょう]だった。",
      "ピケの列[れつ]に立[た]つのは、若手[わかて]だけでなく、三十年[さんじゅうねん]働[はたら]いたベテランたちもいた。彼[かれ]らの顔[かお]には、怒[いか]りと同時[どうじ]に、会社[かいしゃ]への失望[しつぼう]がにじんでいた。長年[ながねん]築[きず]いてきた信頼関係[しんらいかんけい]が、一晩[ひとばん]で崩[くず]れ去[さ]ったも同然[どうぜん]だった。",
      "第三日[だいさんにち]、会社側[かいしゃがわ]はついに警察[けいさつ]を呼[よ]び、ピケの解除[かいじょ]を求[もと]めてきた。これに対[たい]し組合[くみあい]は、「暴力[ぼうりょく]を振[ふ]るうつもりは毛頭[もうとう]ないが、正当[せいとう]な要求[ようきゅう]を撤回[てっかい]するつもりもない」との声明[せいめい]を発表[はっぴょう]した。対立[たいりつ]はますます深[ふか]まるばかりだ。",
      "世論[せろん]も二分[にぶん]された。一部[いちぶ]のメディアは「身勝手[みがって]な要求[ようきゅう]だ」と非難[ひなん]する一方[いっぽう]で、SNSでは労働者[ろうどうしゃ]への同情[どうじょう]が広[ひろ]がりつつあった。ストライキという手段[しゅだん]が、社会[しゃかい]に与[あた]える影響[えいきょう]の大[おお]きさを改[あらた]めて痛感[つうかん]させられた。",
      "第七日[だいなのか]に、ついに経営陣[けいえいじん]が譲歩[じょうほ]に転[てん]じた。賃上[ちんあ]げの水準[すいじゅん]こそ当初[とうしょ]の要求[ようきゅう]には及[およ]ばないものの、年俸制[ねんぽうせい]の見直[みなお]しや、一部[いちぶ]の非正規雇用[ひせいきこよう]の正規化[せいきか]など、複数[ふくすう]の譲歩案[じょうほあん]が提示[ていじ]されたのである。",
      "仮調印式[かりちょういんしき]が行[おこな]われたその夜[よる]、組合[くみあい]の分会長[ぶんかいちょう]は「勝[か]ったわけではない。ただ、諦[あきら]めなかったことだけは事実[じじつ]だ」と語[かた]った。その言葉[ことば]には、汗[あせ]と涙[なみだ]の染[し]み付[つ]いた重[おも]みがあった。",
      "工場[こうじょう]の煙突[えんとつ]から再[ふたた]び煙[けむり]が上[あ]がり始[はじ]めた翌日[よくじつ]、私[わたし]はピケが張[は]られていた場所[ばしょ]を通[とお]り抜[ぬ]けた。地面[じめん]には踏[ふ]み荒[あ]らされた跡[あと]が残[のこ]っていた。労使[ろうし]の対立[たいりつ]は表向[おもてむ]き収[おさ]まったものの、深[ふか]い傷跡[きずあと]が癒[いや]えるには、まだ時間[じかん]がかかりそうだ。"
    ],
    translation: [
      "Before dawn, the line of workers who had formed a picket in front of the factory gate emerged in the cold morning mist. Following the breakdown of last night's collective bargaining, the union decided by unanimous vote to go on strike.",
      "The management side dismissed the wage hike demand as \"nothing more than an enormous burden.\" But from the union's perspective, real wages had been falling for six straight years with inflation. It was a situation where they could no longer stay silent.",
      "Standing in the picket line were not only younger workers but also veterans who had worked for thirty years. On their faces, alongside anger, disappointment with the company was visible. The relationship of trust built over many years had, in effect, crumbled in a single night.",
      "On the third day, the company finally called the police and demanded the picket be lifted. In response, the union issued a statement: \"We have absolutely no intention of using violence, but we have no intention of withdrawing our legitimate demands either.\" The conflict only deepened.",
      "Public opinion was also split. While some media criticized the demand as \"selfish,\" sympathy for the workers was spreading on social media. I was once again made to feel acutely how great an impact the weapon of a strike has on society.",
      "On the seventh day, the management finally shifted to concession. Although the wage hike fell short of the original demand, several concessions were presented, including a review of the annual salary system and the regularization of some non-regular workers.",
      "The night the provisional agreement was signed, the union branch president said, \"It's not that we won. It's simply a fact that we didn't give up.\" Those words carried the weight of sweat and tears.",
      "The day after smoke began rising again from the factory chimney, I passed through the place where the picket had stood. The ground still bore the trampled marks. Although the labor-management conflict had subsided on the surface, the deep scars seemed likely to take more time to heal."
    ],
    vocab: [
      { word: "労働者", reading: "ろうどうしゃ", meaning: "worker" },
      { word: "団交", reading: "だんこう", meaning: "collective bargaining" },
      { word: "決裂", reading: "けつれつ", meaning: "breakdown; rupture" },
      { word: "賃上げ", reading: "ちんあげ", meaning: "wage hike" },
      { word: "莫大", reading: "ばくだい", meaning: "enormous" },
      { word: "一蹴", reading: "いっきゅう", meaning: "flat refusal" },
      { word: "実質賃金", reading: "じっしつちんぎん", meaning: "real wage" },
      { word: "撤回", reading: "てっかい", meaning: "withdrawal (of demand)" },
      { word: "譲歩", reading: "じょうほ", meaning: "concession" },
      { word: "仮調印式", reading: "かりちょういんしき", meaning: "provisional signing ceremony" },
      { word: "同情", reading: "どうじょう", meaning: "sympathy" },
      { word: "非正規雇用", reading: "ひせいきこよう", meaning: "non-regular employment" },
      { word: "煙突", reading: "えんとつ", meaning: "chimney" },
      { word: "傷跡", reading: "きずあと", meaning: "scar" },
      { word: "労使", reading: "ろうし", meaning: "labor and management" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-24 — A cultural revolution (文化革命)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-24",
    title: "旧[きゅう]を壊[こわ]し、新[あたら]しきを謳[うた]う",
    titleReading: "きゅうをこわしあたらしきをうたう",
    level: "N2",
    summary: "A revolutionary council opens literacy to all citizens, but must choose between burning the old heritage and reclaiming it for the people.",
    estMinutes: 7,
    tags: ["history", "politics", "culture"],
    body: [
      "旧暦[きゅうれき]の元日[がんじつ]、王都[おうと]の広場[ひろば]に集[あつ]まった民衆[みんしゅう]は、火[ひ]に包[つつ]まれた巨大[きょだい]な木像[もくぞう]を取[と]り囲[かこ]んでいた。これは単[たん]なる祭礼[さいれい]ではなく、千年[せんねん]続[つづ]いた旧体制[きゅうたいせい]を葬[ほうむ]るための儀式[ぎしき]だった。",
      "革命[かくめい]評議会[ひょうぎかい]は、貴族[きぞく]が独占[どくせん]してきた文字[もじ]と知識[ちしき]を、全市民[ぜんしみん]に開放[かいほう]する宣言[せんげん]を発[はっ]した。長年[ながねん]、民衆[みんしゅう]は暗愚[あんぐ]のまま支配[しはい]されることを余儀[よぎ]なくされてきたが、その鎖[くさり]は今[いま]まさに断[たた]れようとしていた。",
      "評議会[ひょうぎかい]の若[わか]き書記長[しょきちょう]は、演壇[えんだん]に立[た]ち、声[こえ]を張[は]り上[あ]げた。「知[し]る権利[けんり]は、貴族[きぞく]の特権[とっけん]に過[す]ぎない。これより全市民[ぜんしみん]に学[まな]びの場[ば]を、言論[げんろん]の場[ば]を返[かえ]す」。その声[こえ]は広場[ひろば]の隅々[すみずみ]まで届[とど]いた。",
      "一方[いっぽう]で、急進的[きゅうしんてき]な若者[わかもの]たちは、旧文化[きゅうぶんか]の遺産[いさん]までも焼[や]き払[はら]おうとした。図書館[としょかん]に残[のこ]された古文書[こぶんしょ]が次々[つぎつぎ]と燃[も]やされる中[なか]、一人[ひとり]の老学者[ろうがくしゃ]が「過去[かこ]を憎[にく]むことは、未来[みらい]を殺[ころ]すことに他[ほか]ならない」と叫[さけ]んだ。",
      "その声[こえ]に、焚[た]き火[び]の前[まえ]で踊[おど]っていた若者[わかもの]たちは一瞬[いっしゅん]足[あし]を止[と]めた。書記長[しょきちょう]はすぐに老学者[ろうがくしゃ]を演壇[えんだん]に招[まね]き、公開[こうかい]討論[とうろん]を提案[ていあん]した。革命[かくめい]が暴力[ぼうりょく]に堕[お]ちることを、彼自身[かれじしん]も恐[おそ]れていたのだ。",
      "公開[こうかい]討論[とうろん]は三日三晩[みっかみばん]続[つづ]いた。老学者[ろうがくしゃ]は「文字[もじ]を奪[うば]った者[もの]を憎[にく]むのは当然[とうぜん]だが、文字[もじ]そのものまで憎[にく]むのは本末転倒[ほんまつてんとう]だ」と説[と]いた。次第[しだい]に、火[ひ]の勢[いきお]いは収[おさ]まり、議論[ぎろん]の熱[ねつ]がそれに取[と]って代[か]わっていった。",
      "最終日[さいしゅうにち]に、評議会[ひょうぎかい]は「旧文化[きゅうぶんか]の遺産[いさん]は、新[あら]たな市民[しみん]の手[て]によって読[よ]み解[と]かれるべき保護[ほご]対象[たいしょう]となる」との綱領[こうりょう]を採択[さいたく]した。貴族[きぞく]の特権[とっけん]としての文化[ぶんか]ではなく、市民[しみん]の文化[ぶんか]として生[う]まれ変[か]わる道[みち]が選[えら]ばれたのである。",
      "夜[よる]が明[あ]け、広場[ひろば]には朝靄[あさもや]の代[か]わりに、新[あたら]しい言語[げんご]を学[まな]ぶ民衆[みんしゅう]の朗読声[ろうどくせい]が響[ひび]いていた。革命[かくめい]は暴力[ぼうりょく]によらず、知[ち]の共有[きょうゆう]によって成[な]し遂[と]げられつつある。破壊[はかい]と創造[そうぞう]が同時[どうじ]に手渡[てわた]す、稀有[けう]な夜明[よあ]けだった。"
    ],
    translation: [
      "On New Year's Day of the old calendar, the people gathered in the royal capital's square surrounded a giant wooden statue enveloped in flames. This was no mere festival but a rite to bury the old order that had lasted a thousand years.",
      "The Revolutionary Council issued a declaration releasing the letters and knowledge that the nobility had monopolized to all citizens. For years the people had been compelled to remain ignorant and be ruled, but those chains were now about to be severed.",
      "The young secretary-general of the council stood on the rostrum and raised his voice. \"The right to know is no more than a privilege of the nobility. From this moment, we restore to all citizens a place to learn and a place to speak.\" His voice reached every corner of the square.",
      "Meanwhile, radical youths tried to burn down even the heritage of the old culture. As ancient documents left in the library were burned one after another, an old scholar cried out, \"To hate the past is nothing other than to kill the future.\"",
      "At that voice, the youths dancing before the bonfire halted their steps for an instant. The secretary-general immediately invited the old scholar onto the rostrum and proposed a public debate. He himself feared that the revolution would descend into violence.",
      "The public debate lasted three days and three nights. The old scholar argued, \"It is natural to hate those who stole letters from you, but to hate the letters themselves is to put the cart before the horse.\" Gradually, the force of the flames subsided, and the heat of debate took its place.",
      "On the final day, the council adopted a platform: \"The heritage of the old culture shall become a protected subject to be decoded by the hands of the new citizens.\" The path was chosen in which culture would be reborn not as a privilege of the nobility but as the culture of the citizens.",
      "Dawn broke, and in place of the morning mist, the sound of the people reading aloud as they learned a new language echoed across the square. The revolution was being accomplished not by violence but through the sharing of knowledge. It was a rare dawn that destruction and creation handed over at once."
    ],
    vocab: [
      { word: "旧暦", reading: "きゅうれき", meaning: "old calendar" },
      { word: "祭礼", reading: "さいれい", meaning: "festival rite" },
      { word: "旧体制", reading: "きゅうたいせい", meaning: "old regime" },
      { word: "評議会", reading: "ひょうぎかい", meaning: "council" },
      { word: "独占", reading: "どくせん", meaning: "monopoly" },
      { word: "暗愚", reading: "あんぐ", meaning: "ignorance; foolishness" },
      { word: "余儀なくされる", reading: "よぎなくされる", meaning: "to be compelled" },
      { word: "書記長", reading: "しょきちょう", meaning: "secretary-general" },
      { word: "演壇", reading: "えんだん", meaning: "rostrum" },
      { word: "特権", reading: "とっけん", meaning: "privilege" },
      { word: "遺産", reading: "いさん", meaning: "heritage" },
      { word: "本末転倒", reading: "ほんまつてんとう", meaning: "putting the cart before the horse" },
      { word: "綱領", reading: "こうりょう", meaning: "platform; principles" },
      { word: "採択", reading: "さいたく", meaning: "adoption" },
      { word: "破壊", reading: "はかい", meaning: "destruction" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-25 — A medical trial (治験と不正)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-25",
    title: "白衣[はくい]の裏[うら]に潜[ひそ]む嘘[うそ]",
    titleReading: "はくいのうらにひそむうそ",
    level: "N2",
    summary: "A principal investigator discovers dangerous side effects in a flagship cancer drug trial and must choose between her career and patients' lives.",
    estMinutes: 7,
    tags: ["medical", "ethics", "whistleblowing"],
    body: [
      "大手製薬会社[おおてせいやくがいしゃ]の治験責任者[ちけんせきにんしゃ]である私[わたし]は、画期的[かっきてき]な抗[こう]がん剤[ざい]の最終段階[さいしゅうだんかい]試験[しけん]に携[たずさ]わっていた。期待[きたい]を一身[いっしん]に集[あつ]めたこの新薬[しんやく]は、理論上[りろんじょう]、既存[きぞん]の治療薬[ちりょうやく]の効果[こうか]を三倍[さんばい]に引[ひ]き上[あ]げるはずだった。",
      "被験者[ひけんしゃ]は百二十名[ひゃくにじゅうめい]。そのうち半数[はんすう]には新薬[しんやく]、残[のこ]り半数[はんすう]には従来薬[じゅうらいやく]が割[わ]り当[あ]てられた。二重[にじゅう]盲検法[もうけんほう]という厳密[げんみつ]な手続[てつづ]きのもと、誰[だれ]もが公正[こうせい]な結果[けっか]を期待[きたい]していた。",
      "しかし、中間解析[ちゅうかんかいせき]のデータに目[め]を通[とお]した際[さい]、私[わたし]は息[いき]を呑[の]んだ。新薬群[しんやくぐん]のうち三名[さんめい]に、重度[じゅうど]の心不全[しんふぜん]兆候[ちょうこう]が確認[かくにん]されたのだ。これは到底[とうてい]、偶然[ぐうぜん]では説明[せつめい]しきれない数字[すうじ]だった。",
      "私[わたし]は直[ただ]ちに上層部[じょうそうぶ]に報告[ほうこく]したが、返[かえ]ってきたのは「解析[かいせき]を続行[つづこう]せよ。三名[さんめい]の副作用[ふくさよう]は、別要因[べつよういん]によるものに過[す]ぎない」という冷[つめ]たい指示[しじ]だった。巨額[きょがく]の投資[とうし]を回収[かいしゅう]したいがために、彼[かれ]らはデータを曲[ま]げようとしているに違[ちが]いない。",
      "ここで黙認[もくにん]すれば、私[わたし]は共犯[きょうはん]になる。かといって、内部告発[ないぶこくはつ]はキャリアの終焉[しゅうえん]を意味[いみ]する。葛藤[かっとう]の末[すえ]、私[わたし]は「患者[かんじゃ]の命[いのち]を犠牲[ぎせい]にするわけにはいかない」と心[こころ]に決[き]めた。",
      "翌日[よくじつ]、私[わたし]は匿名[とくめい]で規制当局[きせいとうきょく]に書簡[しょかん]を送[おく]った。同時[どうじ]に、解析[かいせき]の生[なま]データを暗号化[あんごうか]して保存[ほぞん]した。もし会社[かいしゃ]がデータを改竄[かいざん]したとしても、原本[げんぽん]が手元[てもと]に残[のこ]る限[かぎ]り、真実[しんじつ]は覆[くつがえ]せない。",
      "三週間後[さんしゅうかんご]、規制当局[きせいとうきょく]の抜[ぬ]き打[う]ち検査[けんさ]が入[はい]った。会社側[かいしゃがわ]は慌[あわ]ててデータを修正[しゅうせい]しようとしたが、私[わたし]が保存[ほぞん]した原本[げんぽん]との照合[しょうごう]により、改竄[かいざん]の事実[じじつ]が白日[はくじつ]の下[もと]に晒[さら]された。",
      "新薬[しんやく]の承認[しょうにん]は取[と]り下[さ]げられ、経営陣[けいえいじん]は責任[せきにん]を追及[ついきゅう]された。私自身[わたしじしん]も社内[しゃない]での居場所[いばしょ]を失[うしな]ったが、後悔[こうかい]はない。白衣[はくい]を着[き]る者[もの]にとって、最優先[さいゆうせん]すべきは企業[きぎょう]の利益[りえき]ではなく、患者[かんじゃ]の命[いのち]に他[ほか]ならない。"
    ],
    translation: [
      "As the principal investigator for a major pharmaceutical company, I was involved in the final-stage trial of a groundbreaking anti-cancer drug. This new drug, on which all hopes rested, was supposed in theory to triple the efficacy of existing treatments.",
      "There were one hundred and twenty subjects. Half were assigned the new drug, the remaining half the conventional one. Under the strict procedure of a double-blind method, everyone expected a fair result.",
      "However, when I reviewed the interim analysis data, I caught my breath. In the new-drug group, three patients had shown signs of severe heart failure. This was a figure that could by no means be explained as mere coincidence.",
      "I immediately reported to upper management, but the reply was a cold instruction: \"Continue the analysis. The side effects in the three are nothing more than due to other factors.\" Driven by the desire to recoup enormous investments, they must be trying to bend the data.",
      "If I stayed silent here, I would become an accomplice. On the other hand, whistleblowing would mean the end of my career. After agonizing, I resolved in my heart that I could not allow patients' lives to be sacrificed.",
      "The next day, I sent a letter anonymously to the regulatory authority. At the same time, I encrypted and saved the raw data. Even if the company altered the data, as long as the original remained in my hands, the truth could not be overturned.",
      "Three weeks later, the regulatory authority conducted an unannounced inspection. The company hastily tried to correct the data, but cross-checking against the original I had saved exposed the fact of tampering in broad daylight.",
      "Approval of the new drug was withdrawn, and the management was held responsible. I myself lost my place within the company, but I have no regrets. For those who wear the white coat, the top priority is not corporate profit but the lives of patients."
    ],
    vocab: [
      { word: "治験", reading: "ちけん", meaning: "clinical trial" },
      { word: "抗がん剤", reading: "こうがんざい", meaning: "anti-cancer drug" },
      { word: "被験者", reading: "ひけんしゃ", meaning: "trial subject" },
      { word: "二重盲検法", reading: "にじゅうもうけんほう", meaning: "double-blind method" },
      { word: "中間解析", reading: "ちゅうかんかいせき", meaning: "interim analysis" },
      { word: "心不全", reading: "しんふぜん", meaning: "heart failure" },
      { word: "兆候", reading: "ちょうこう", meaning: "sign; omen" },
      { word: "副作用", reading: "ふくさよう", meaning: "side effect" },
      { word: "巨額", reading: "きょがく", meaning: "huge sum" },
      { word: "黙認", reading: "もくにん", meaning: "tacit consent" },
      { word: "終焉", reading: "しゅうえん", meaning: "demise; end" },
      { word: "葛藤", reading: "かっとう", meaning: "conflict; agony" },
      { word: "改竄", reading: "かいざん", meaning: "tampering; falsification" },
      { word: "抜き打ち検査", reading: "ぬきうちけんさ", meaning: "surprise inspection" },
      { word: "照合", reading: "しょうごう", meaning: "cross-checking" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-26 — A diplomatic crisis (外交危機)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-26",
    title: "峠[とうげ]に立[た]つ大使[たいし]",
    titleReading: "とうげにたつたいし",
    level: "N2",
    summary: "An ambassador caught between a hardline home government and an aggrieved host nation engineers a joint maritime survey to defuse war.",
    estMinutes: 7,
    tags: ["diplomacy", "politics", "conflict"],
    body: [
      "二国間[にこくかん]関係[かんけい]は、領海[りょうかい]を巡[めぐ]る偶発的[ぐうはつてき]な衝突事件[しょうとつじけん]をきっかけに、一晩[ひとばん]にして氷点下[ひょうてんか]に落[お]ち込[こ]んだ。両国[りょうこく]の大使[たいし]が相次[あいつ]いで召還[しょうかん]され、戦争[せんそう]の噂[うわさ]まで囁[ささや]かれ始[はじ]めた。",
      "駐在国[ちゅうざいこく]の首都[しゅと]に残[のこ]された私[わたし]は、現地[げんち]の外相[がいしょう]と極秘裏[ごくひり]に面会[めんかい]を重[かさ]ねていた。表向[おもてむ]きは観光目的[かんこうもくてき]の外出[がいしゅつ]という体裁[ていさい]を取[と]りつつ、夜[よる]ごと密談[みつだん]の場[ば]に通[かよ]った。",
      "外相[がいしょう]は私[わたし]に「双方[そうほう]に譲歩[じょうほ]がなければ、軍事的[ぐんじてき]衝突[しょうとつ]は避[さけ]られない」と迫[せま]った。一方[いっぽう]、本国[ほんこく]からの訓令[くんれい]は「一歩[いっぽ]も引[ひ]くな」という硬直的[こうちょくてき]なものだった。私[わたし]は板挟[いたばさ]みの中[なか]で、選択肢[せんたくし]を模索[もさく]し続[つづ]けた。",
      "窮余[きゅうよ]の策[さく]として、私[わたし]は「共同[きょうどう]海洋[かいよう]調査[ちょうさ]」を提案[ていあん]した。領海[りょうかい]の境界[きょうかい]付近[ふきん]で、双方[そうほう]の学者[がくしゃ]が合同[ごうどう]で観測[かんそく]を行[おこな]うという案[あん]だ。主権[しゅけん]の帰属[きぞく]には触[ふ]れないまま、実質的[じっしつてき]な協調[きょうちょう]を示[しめ]せる。",
      "本国[ほんこく]は猛烈[もうれつ]に反発[はんぱつ]したが、私[わたし]は「これは妥協[だきょう]ではなく、知恵[ちえ]ある第三[だいさん]の道[みち]だ」と説得[せっとく]した。首相[しゅしょう]直属[しょぞく]の補佐官[ほさかん]に直談判[じかだんぱん]した結果[けっか]、ついに条件付[じょうけんづ]きで承認[しょうにん]を取[と]り付[つ]けた。",
      "共同[きょうどう]調査[ちょうさ]の初日[しょにち]、両国[りょうこく]の調査船[ちょうさせん]が指定海域[していかいいき]で並[なら]んだ。現場[げんば]の指揮官[しきかん]たちは互[たが]いに敬礼[けいれい]を交[か]わし、厳粛[げんしゅく]な面持[おもも]ちで作業[さぎょう]を始[はじ]めた。海面[かいめん]は穏[おだ]やかで、一晩前[ひとばんまえ]までの緊張[きんちょう]が嘘[うそ]のように思[おも]えた。",
      "この共同[きょうどう]作業[さぎょう]を通[つう]じて、双方[そうほう]の将校[しょうこう]の間[あいだ]に個人的[こじんてき]な信頼[しんらい]が芽生[めば]え始[はじ]めた。夕食[ゆうしょく]を共[とも]にし、家族[かぞく]の写真[しゃしん]を見[み]せ合[あ]ううちに、相手[あいて]が「敵[てき]」ではなく、同[おな]じ海[うみ]に生[い]きる人間[にんげん]に見[み]えてきた。",
      "三[さん]ヶ月[かげつ]後[ご]、両国首脳[りょうこくしゅのう]は国連[こくれん]の舞台[ぶたい]で会談[かいだん]を行[おこな]い、恒久的[こうきゅうてき]な協力枠組[きょうりょくわくぐ]みの構築[こうちく]で合意[ごうい]した。戦争[せんそう]の火種[ひだね]は、静[しず]かな外交[がいこう]の粘[ねば]りによって消[け]し去[さ]られた。峠[とうげ]を越[こ]えたその日[ひ]、私[わたし]は大使[たいし]としての任務[にんむ]を全[まっと]うしたと胸[むね]に刻[きざ]んだ。"
    ],
    translation: [
      "Bilateral relations plunged to below freezing overnight, triggered by an accidental collision incident over territorial waters. The ambassadors of both countries were recalled one after another, and rumors of war even began to be whispered.",
      "I, left behind in the capital of the host nation, was repeatedly meeting in utmost secrecy with the local foreign minister. Maintaining the appearance of sightseeing outings, I went night after night to venues for secret talks.",
      "The foreign minister pressed me, \"Without concessions from both sides, military conflict cannot be avoided.\" On the other hand, the instructions from my home government were the rigid stance of \"Not one step back.\" Caught between them, I kept searching for options.",
      "As a last resort, I proposed a \"joint maritime survey.\" Scholars from both sides would conduct observations together near the boundary of the territorial waters. Without touching on the attribution of sovereignty, it could demonstrate substantive cooperation.",
      "My home government objected vehemently, but I persuaded them, \"This is not a compromise but a wise third path.\" After direct negotiations with an aide directly under the prime minister, I finally obtained conditional approval.",
      "On the first day of the joint survey, the survey vessels of both countries lined up in the designated waters. The on-site commanders exchanged salutes and began operations with solemn faces. The sea was calm, and the tension of just the night before seemed like a lie.",
      "Through this joint work, personal trust began to sprout between the officers of both sides. As they shared dinner and showed each other photos of their families, the other party came to look not as an \"enemy\" but as a human being living on the same sea.",
      "Three months later, the leaders of both countries held talks on the United Nations stage and agreed to build a permanent framework of cooperation. The seeds of war were extinguished by the perseverance of quiet diplomacy. On that day when we crossed the pass, I engraved in my heart that I had fulfilled my duty as an ambassador."
    ],
    vocab: [
      { word: "領海", reading: "りょうかい", meaning: "territorial waters" },
      { word: "偶発的", reading: "ぐうはつてき", meaning: "accidental" },
      { word: "召還", reading: "しょうかん", meaning: "recall (of diplomat)" },
      { word: "駐在国", reading: "ちゅうざいこく", meaning: "host country" },
      { word: "外相", reading: "がいしょう", meaning: "foreign minister" },
      { word: "極秘裏", reading: "ごくひり", meaning: "in utmost secrecy" },
      { word: "訓令", reading: "くんれい", meaning: "instructions (from home government)" },
      { word: "硬直的", reading: "こうちょくてき", meaning: "rigid; inflexible" },
      { word: "板挟み", reading: "いたばさみ", meaning: "caught between two sides" },
      { word: "窮余", reading: "きゅうよ", meaning: "desperation; dead end" },
      { word: "主権", reading: "しゅけん", meaning: "sovereignty" },
      { word: "帰属", reading: "きぞく", meaning: "attribution" },
      { word: "敬礼", reading: "けいれい", meaning: "salute" },
      { word: "指揮官", reading: "しきかん", meaning: "commander" },
      { word: "協力枠組み", reading: "きょうりょくわくぐみ", meaning: "cooperation framework" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-27 — An artistic rivalry (芸術的ライバル)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-27",
    title: "筆[ふで]先[さき]の嫉妬[しっと]",
    titleReading: "ふでさきのしっと",
    level: "N2",
    summary: "Two genius disciples under a master painter compete for a final legacy, until a planted review reveals that jealousy wounds the one who wields it.",
    estMinutes: 7,
    tags: ["art", "rivalry", "redemption"],
    body: [
      "画壇[がだん]の重鎮[じゅうちん]である師[し]のもとには、二人[ふたり]の天才弟子[てんさいでし]がいた。一人[ひとり]は私[わたし]、もう一人[ひとり]は同[おな]じ年[とし]の中島[なかじま]だった。我々[われわれ]は互[たが]いに刺激[しげき]し合[あ]いながらも、内心[ないしん]では熾烈[しれつ]な競争心[きょうそうしん]を燃[も]やしていた。",
      "師[し]は常[つね]に「描[えが]くとは、自己[じこ]と対話[たいわ]することだ」と説[と]いていた。だが、私[わたし]と中島[なかじま]の関心[かんしん]は、絵[え]そのものよりも、互[たが]いの評価[ひょうか]に向[む]いていた。師[し]の目[め]を盗[ぬす]んでは、相手[あいて]の作品[さくひん]を冷[ひえ]やかに批評[ひひょう]し合[あ]う日々[ひび]だった。",
      "転機[てんき]が訪[おとず]れたのは、師[し]が入院[にゅういん]し、最後[さいご]の作品[さくひん]を弟子[でし]のうち誰[だれ]に託[たく]すか迷[まよ]っているという噂[うわさ]が流[なが]れた時[とき]だった。私[わたし]は焦[あせ]った。中島[なかじま]に託[たく]されれば、画壇[がだん]での序列[じょれつ]は確定[かくてい]してしまう。",
      "私[わたし]は、評論家[ひょうろんか]の佐野[さの]に近[ちか]づき、中島[なかじま]の作品[さくひん]に「技術[ぎじゅつ]はあるが、魂[たましい]が薄[うす]い」との批評[ひひょう]を書[か]いてもらうよう仕向[しむ]けた。佐野[さの]の記事[きじ]は業界誌[ぎょうかいし]に掲載[けいさい]され、中島[なかじま]は傷[きず]ついた様子[ようす]で筆[ふで]を絶[た]った。",
      "しかし、その勝利[しょうり]は虚[むな]しかった。中島[なかじま]の沈黙[ちんもく]と共[とも]に、私[わたし]の筆[ふで]からも次第[しだい]に力[ちから]が抜[ぬ]けていったのだ。師[し]の病室[びょうしつ]を訪[たず]ねた折[おり]、師[し]は私[わたし]の手[て]を見[み]つめ、「お前[まえ]は、嫉妬[しっと]に勝[か]ったのではない。負[ま]けたのだ」と静[しず]かに告[つ]げた。",
      "その言葉[ことば]は、私[わたし]の胸[むね]に矢[や]のように刺[さ]さった。中島[なかじま]を貶[おとし]めたのではなく、自分自身[じぶんじしん]の才能[さいのう]を殺[ころ]していたのは他[ほか]ならぬ私自身[わたしじしん]だったのだ。",
      "私[わたし]は佐野[さの]のもとを訪[たず]ね、過去[かこ]の記事[きじ]の撤回[てっかい]を懇願[こんがん]した。同時[どうじ]に、筆[ふで]を絶[た]っていた中島[なかじま]のもとへ足繁[あしげ]く通[かよ]い始[はじ]めた。最初[さいしょ]は拒絶[きょぜつ]されたが、三度目[さんどめ]の訪問[ほうもん]で、中島[なかじま]は静[しず]かに筆[ふで]を執[と]り、未完成[みかんせい]のキャンバスを指[さ]した。",
      "「この絵[え]を、二人[ふたり]で完成[かんせい]させよう」。中島[なかじま]の言葉[ことば]に、私[わたし]は涙[なみだ]が止[と]まらなかった。筆先[ふでさき]の嫉妬[しっと]は、互[たが]いの魂[たましい]を削[けず]り合[あ]うだけの刃[やいば]だった。競[きそ]うべきは他者[たしゃ]ではなく、自分自身[じぶんじしん]の中[なか]に眠[ねむ]る理想[りそう]だったのだ。"
    ],
    translation: [
      "Under the master, a leading figure of the art world, there were two genius disciples. One was me, the other was Nakajima, the same age. We stimulated each other, but inwardly we burned with fierce rivalry.",
      "The master always taught, \"To paint is to converse with oneself.\" But Nakajima's and my attention was directed not at painting itself but at each other's reputation. We stole the master's eyes and coldly criticized each other's work day after day.",
      "The turning point came when the master was hospitalized, and a rumor circulated that he was hesitating over which disciple to entrust his final work to. I panicked. If it went to Nakajima, the hierarchy in the art world would be set.",
      "I approached the critic Sano and induced him to write a review of Nakajima's work: \"He has technique, but his soul is thin.\" Sano's article was published in an industry magazine, and Nakajima, apparently wounded, set down his brush.",
      "But the victory was hollow. With Nakajima's silence, the power gradually drained from my brush as well. When I visited the master in his sickroom, he gazed at my hands and quietly said, \"You did not triumph over jealousy. You were defeated by it.\"",
      "Those words pierced my chest like an arrow. I had not demeaned Nakajima; the one killing my own talent was none other than myself.",
      "I went to Sano and begged him to retract the past article. At the same time, I began visiting Nakajima, who had stopped painting, again and again. At first I was refused, but on my third visit, Nakajima quietly took up his brush and pointed to an unfinished canvas.",
      "\"Let us finish this painting, the two of us.\" At Nakajima's words, my tears would not stop. The jealousy at the tip of the brush had been a blade that only chipped away at each other's souls. What we should have competed with was not the other, but the ideal sleeping within ourselves."
    ],
    vocab: [
      { word: "画壇", reading: "がだん", meaning: "art world" },
      { word: "重鎮", reading: "じゅうちん", meaning: "leading figure" },
      { word: "弟子", reading: "でし", meaning: "disciple" },
      { word: "熾烈", reading: "しれつ", meaning: "fierce; intense" },
      { word: "競争心", reading: "きょうそうしん", meaning: "competitive spirit" },
      { word: "関心", reading: "かんしん", meaning: "interest" },
      { word: "評論家", reading: "ひょうろんか", meaning: "critic" },
      { word: "業界誌", reading: "ぎょうかいし", meaning: "trade journal" },
      { word: "掲載", reading: "けいさい", meaning: "publication" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "嫉妬", reading: "しっと", meaning: "jealousy" },
      { word: "懇願", reading: "こんがん", meaning: "entreaty" },
      { word: "拒絶", reading: "きょぜつ", meaning: "refusal" },
      { word: "筆先", reading: "ふでさき", meaning: "tip of the brush" },
      { word: "刃", reading: "やいば", meaning: "blade" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-28 — A family inheritance (家族の遺産相続)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-28",
    title: "父[ちち]が残[のこ]した借金[しゃっきん]",
    titleReading: "ちちがのこしたしゃっきん",
    level: "N2",
    summary: "Three siblings cleaning their late father's study uncover an enormous debt, and discover that it secretly funded their own education.",
    estMinutes: 6,
    tags: ["family", "inheritance", "secrets"],
    body: [
      "父[ちち]の突然[とつぜん]の死後[しご]、私[わたし]たちは彼[かれ]の書斎[しょさい]を整理[せいり]するため実家[じっか]に戻[もど]った。机[つくえ]の引[ひ]き出[だ]しから出[で]てきたのは、遺言状[ゆいごんじょう]ではなく、驚[おどろ]くべき額[がく]の借金[しゃっきん]の明細書[めいさいしょ]だった。",
      "金額[きんがく]は二億円[におくえん]にも上[のぼ]っていた。長年[ながねん]、堅実[けんじつ]な公務員[こうむいん]として暮[く]らしてきた父[ちち]が、なぜこんな借金[しゃっきん]を背負[せお]っていたのか。私[わたし]の頭[あたま]の中[なか]には、困惑[こんわく]と怒[いか]りが同時[どうじ]に渦巻[うずま]いていた。",
      "三人[さんにん]の兄弟[きょうだい]はすぐに集[あつ]まり、対応[たいおう]を協議[きょうぎ]した。長男[ちょうなん]は「相続放棄[そうぞくほうき]」を主張[しゅちょう]し、次女[じじょ]は「不動産[ふどうさん]を売[う]ってでも返済[へんさい]すべきだ」と譲[ゆず]らなかった。末[すえ]っ子[こ]の私[わたし]は、二人[ふたり]の間[あいだ]で板挟[いたばさ]みとなった。",
      "話[はな]し合[あ]いは深夜[しんや]に及[およ]んだ。極限[きょくげん]まで高[たか]まった感情[かんじょう]の中[なか]で、長男[ちょうなん]がふと漏[も]らした。「実[じつ]は、父[ちち]が最後[さいご]に会[あ]いに来[き]いと言[い]ったのは、俺[おれ]じゃなく、お前[まえ]だったんだ」。その言葉[ことば]に、部屋[へや]は一瞬[いっしゅん]にして静[しず]まり返[かえ]った。",
      "私[わたし]は父[ちち]の机[つくえ]の奥[おく]から、一通[いっつう]の手紙[てがみ]を見[み]つけた。それは私[わたし]に宛[あ]てた遺書[いしょ]で、「借金[しゃっきん]はすべて、知人[ちじん]の事業[じぎょう]の連帯[れんたい]保証人[ほしょうにん]になった結果[けっか]だ」と記[しる]されていた。父[ちち]は最後[さいご]まで、家族[かぞく]に迷惑[めいわく]をかけるまいと黙[だま]っていたのだ。",
      "父[ちち]は、知人[ちじん]の事業[じぎょう]失敗[しっぱい]の責任[せきにん]まで引[ひ]き受[う]け、無言[むごん]で背負[せお]い続[つづ]けていた。その優[やさ]しさと不器用[ぶきよう]さに、私[わたし]は声[こえ]も出[で]なかった。明細書[めいさいしょ]の中[なか]に、見覚[みおぼ]えのない社名[しゃめい]と共[とも]に「教育費[きょういくひ]」と書[か]れた項目[こうもく]を見[み]つけたのは、その時[とき]だった。",
      "教育費[きょういくひ]の項目[こうもく]の金額[きんがく]は、私[わたし]が大学[だいがく]に入学[にゅうがく]した年[とし]とぴったり一致[いっち]していた。父[ちち]は私[わたし]の学費[がくひ]を借金[しゃっきん]してでも工面[くめん]していたのだ。兄弟[きょうだい]はそれぞれ、自分[じぶん]の入学年[にゅうがくねん]に同[おな]じ記録[きろく]を見[み]つけ、誰[だれ]もが涙[なみだ]を流[なが]した。",
      "最終的[さいしゅうてき]に、三人[さんにん]は借金[しゃっきん]を分割[ぶんかつ]して引[ひ]き継[つ]ぐことにした。父[ちち]の借金[しゃっきん]は、私[わたし]たちにとって単[たん]なる負債[ふさい]ではなく、家族[かぞく]を想[おも]う愛[あい]の形[かたち]だった。償[つぐな]いは長[なが]くかかるだろうが、三人[さんにん]の絆[きずな]は、かえって強[つよ]くなった。"
    ],
    translation: [
      "After our father's sudden death, we returned to our family home to tidy his study. What came out of the desk drawer was not a will, but a statement of debt for an astonishing amount.",
      "The sum came to two hundred million yen. Father, who had lived as a steady civil servant for years — why had he carried such debt? In my head, bewilderment and anger swirled at once.",
      "The three siblings gathered immediately and discussed how to respond. The eldest brother insisted on \"renouncing the inheritance,\" while the second sister refused to yield, saying \"we must repay even if it means selling the real estate.\" I, the youngest, was caught between them.",
      "The discussion dragged on into the night. Amid emotions raised to the limit, the eldest brother happened to let slip, \"Actually, the one Father asked to come see him at the end was not me, but you.\" At those words, the room fell silent in an instant.",
      "From the back of Father's desk I found a single letter. It was a last testament addressed to me, stating, \"All the debt is the result of becoming a joint guarantor for an acquaintance's business.\" Father had stayed silent to the very end so as not to trouble his family.",
      "Father had taken on even the responsibility for his acquaintance's failed business and continued to bear it in silence. At that gentleness and clumsiness, I was speechless. It was then that I noticed, in the statement, an entry labeled \"Education expenses\" alongside an unfamiliar company name.",
      "The amount of the education expenses item exactly matched the year I had entered university. Father had managed to pay my tuition even by borrowing money. The siblings each found the same record for their own year of enrollment, and everyone shed tears.",
      "In the end, the three of us decided to split the debt and take it on. Father's debt was, for us, not mere liability but the form of love that thought of family. Repayment will take long, but the bond among the three of us grew stronger instead."
    ],
    vocab: [
      { word: "書斎", reading: "しょさい", meaning: "study (room)" },
      { word: "遺言状", reading: "ゆいごんじょう", meaning: "will" },
      { word: "借金", reading: "しゃっきん", meaning: "debt" },
      { word: "明細書", reading: "めいさいしょ", meaning: "statement; detailed account" },
      { word: "堅実", reading: "けんじつ", meaning: "steady; reliable" },
      { word: "公務員", reading: "こうむいん", meaning: "civil servant" },
      { word: "困惑", reading: "こんわく", meaning: "bewilderment" },
      { word: "相続放棄", reading: "そうぞくほうき", meaning: "renunciation of inheritance" },
      { word: "不動産", reading: "ふどうさん", meaning: "real estate" },
      { word: "返済", reading: "へんさい", meaning: "repayment" },
      { word: "連帯保証人", reading: "れんたいほしょうにん", meaning: "joint guarantor" },
      { word: "工面", reading: "くめん", meaning: "managing (money)" },
      { word: "負債", reading: "ふさい", meaning: "liability" },
      { word: "償い", reading: "つぐない", meaning: "atonement" },
      { word: "絆", reading: "きずな", meaning: "bond" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-29 — A technological dystopia (技術的ディストピア)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-29",
    title: "監視[かんし]される街[まち]",
    titleReading: "かんしされるまち",
    level: "N2",
    summary: "In an AI-ruled city where every citizen is scored, a surveillance operator defies the system to save an old man and ultimately to flee the city herself.",
    estMinutes: 7,
    tags: ["dystopia", "technology", "freedom"],
    body: [
      "2045年[ねん]、街[まち]の至[いた]る所[ところ]にAIカメラが張[は]り巡[めぐ]らされていた。歩行者[ほこうしゃ]一人一人[ひとりひとり]の顔[かお]、歩[ある]き方[かた]、さらには表情[ひょうじょう]までが即座[そくざ]に識別[しきべつ]され、点数化[てんすうか]される。市民[しみん]は「安全[あんぜん]指数[しすう]」という見[み]えない鎖[くさり]に縛[しば]られていた。",
      "私[わたし]は中央[ちゅうおう]監視局[かんしきょく]のオペレーターとして働[はたら]いていた。与[あた]えられた権限[けんげん]は広[ひろ]く、市民[しみん]の行動[こうどう]履歴[りれき]に自由[じゆう]にアクセスできた。当初[とうしょ]は「治安[ちあん]のため」と信[しん]じていたが、次第[しだい]に疑問[ぎもん]が芽生[めば]え始[はじ]めた。",
      "ある夜[よる]、リストの隅[すみ]に一人[ひとり]の老人[ろうじん]が現[あらわ]れた。安全[あんぜん]指数[しすう]が低下[ていか]し続[つづ]けているという警告[けいこく]が出[で]たが、彼[かれ]の行動[こうどう]には特段[とくだん]の問題[もんだい]は見当[みあ]たらなかった。私[わたし]は指示[しじ]通[どお]りに彼[かれ]を「再教育[さいきょういく]センター」へ送[おく]ろうとしたが、何[なに]かが引[ひ]っかかった。",
      "私[わたし]はこっそり彼[かれ]を尾行[びこう]した。老人[ろうじん]は公園[こうえん]のベンチに座[すわ]り、星空[ほしぞら]を見上[みあ]げていた。その表情[ひょうじょう]は監視[かんし]カメラのデータが示[しめ]す「危険[きけん]」の兆候[ちょうこう]とはかけ離[はな]れていた。ただ穏[おだ]やかに、穏[おだ]やかに時[とき]を過[す]ごしていたのだ。",
      "翌日[よくじつ]、システムは私[わたし]に「対象[たいしょう]の再教育[さいきょういく]を実行[じっこう]せよ」と命令[めいれい]した。命令[めいれい]に背[そむ]けば、私自身[わたしじしん]の指数[しすう]も低下[ていか]し、同[おな]じ運命[うんめい]を辿[たど]ることになる。私[わたし]は一晩中[ひとばんじゅう]悩[なや]んだ末[すえ]、ある行動[こうどう]に出[で]た。",
      "私[わたし]はその夜[よる]、中央[ちゅうおう]サーバーに侵入[しんにゅう]し、老人[ろうじん]の記録[きろく]だけを削除[さくじょ]した。同時[どうじ]に、彼[かれ]に「監視[かんし]網[もう]の死角[しかく]」になるルートを伝[つた]える暗号[あんごう]メッセージを送[おく]った。実行[じっこう]の手[て]は震[ふる]えていたが、後戻[あともど]りはできなかった。",
      "三日後[みっかご]、中央[ちゅうおう]監視局[かんしきょく]は大規模[だいきぼ]な内部[ないぶ]監査[かんさ]に踏[ふ]み切[き]った。私[わたし]の不正[ふせい]アクセスは早期[そうき]に発覚[はっかく]する恐[おそ]れがあった。私[わたし]は追[お]い詰[つ]められながらも、最後[さいご]の手段[しゅだん]に打[う]って出[で]た。老人[ろうじん]と一緒[いっしょ]に、監視[かんし]網[もう]の外[そと]へ抜[ぬ]け出[で]す計画[けいかく]だった。",
      "脱出[だっしゅつ]の夜[よる]、街[まち]の境界[きょうかい]ゲートを前[まえ]にした私[わたし]は、老人[ろうじん]に「外[そと]の世界[せかい]はまだ生[い]きているか」と問[と]うた。老人[ろうじん]は静[しず]かに頷[うなず]き、「監視[かんし]されぬ場所[ばしょ]には、必[かなら]ず人[ひと]の温[ぬく]もりが残[のこ]るものだ」と答[こた]えた。AIの支配[しはい]する街[まち]の灯[あか]りが背後[はいご]で遠[とお]ざかりつつある。"
    ],
    translation: [
      "In 2045, AI cameras were installed everywhere in the city. Every pedestrian's face, gait, and even expression were instantly identified and scored. Citizens were bound by an invisible chain called the \"safety index.\"",
      "I worked as an operator at the central surveillance bureau. My authority was broad, and I could freely access the action history of citizens. At first I believed it was \"for the sake of public order,\" but gradually doubts began to sprout.",
      "One night, an old man appeared in a corner of the list. A warning came up that his safety index was steadily declining, but I could find no particular problem in his behavior. I tried to send him to a \"re-education center\" as instructed, but something nagged at me.",
      "I secretly tailed him. The old man sat on a bench in the park, gazing at the starry sky. His expression was far removed from the \"danger\" signs the surveillance camera data indicated. He was simply spending time, peacefully, peacefully.",
      "The next day, the system ordered me to \"execute the subject's re-education.\" If I defied the order, my own index would also fall, and I would follow the same fate. After agonizing all night, I took a certain action.",
      "That night, I broke into the central server and deleted only the old man's record. At the same time, I sent him an encrypted message informing him of a route that would make him a \"blind spot\" of the surveillance net. My hands trembled as I carried it out, but there was no turning back.",
      "Three days later, the central surveillance bureau launched a large-scale internal audit. My unauthorized access was likely to be discovered early. Cornered, I played my last card. It was a plan to slip out of the surveillance net together with the old man.",
      "On the night of the escape, standing before the city's boundary gate, I asked the old man, \"Is the world outside still alive?\" The old man nodded quietly and replied, \"In places not watched, human warmth always remains.\" The lights of the AI-ruled city recede behind us."
    ],
    vocab: [
      { word: "監視", reading: "かんし", meaning: "surveillance" },
      { word: "歩行者", reading: "ほこうしゃ", meaning: "pedestrian" },
      { word: "識別", reading: "しきべつ", meaning: "identification" },
      { word: "権限", reading: "けんげん", meaning: "authority" },
      { word: "治安", reading: "ちあん", meaning: "public order" },
      { word: "警告", reading: "けいこく", meaning: "warning" },
      { word: "兆候", reading: "ちょうこう", meaning: "sign" },
      { word: "尾行", reading: "びこう", meaning: "tailing" },
      { word: "発覚", reading: "はっかく", meaning: "discovery; exposure" },
      { word: "監査", reading: "かんさ", meaning: "audit" },
      { word: "脱出", reading: "だっしゅつ", meaning: "escape" },
      { word: "境界", reading: "きょうかい", meaning: "boundary" },
      { word: "支配", reading: "しはい", meaning: "rule; control" },
      { word: "背後", reading: "はいご", meaning: "behind" },
      { word: "温もり", reading: "ぬくもり", meaning: "warmth" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-30 — An educational reform (教育改革)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-30",
    title: "塾[じゅく]のない明日[あす]",
    titleReading: "じゅくのないあす",
    level: "N2",
    summary: "When the government bans cram-school supplementary lessons, a junior high teacher rebuilds her classroom around questioning rather than memorization.",
    estMinutes: 7,
    tags: ["education", "society", "reform"],
    body: [
      "文部科学省[もんぶかがくしょう]の新[あたら]しい通達[つうたつ]は、全国[ぜんこく]の塾[じゅく]と予備校[よびこう]に衝撃[しょうげき]を与[あた]えた。「学習指導要領[がくしゅうしどうようりょう]の範囲[はんい]を超[こ]える補習授業[ほしゅくじゅぎょう]の提供[ていきょう]は、原則[げんそく]として禁止[きんし]する」という内容[ないよう]だった。",
      "通達[つうたつ]の裏[うら]には、過酷[かこく]な受験競争[じゅけんきょうそう]が生[う]む子供[こども]たちの心身[しんしん]の疲弊[ひへい]があった。政府[せいふ]は、三十年[さんじゅうねん]にわたる塾[じゅく]依存[いぞん]の教育[きょういく]から脱却[だっきゃく]する決意[けつい]を固[かた]めていたのだ。",
      "私[わたし]は地方都市[ちほうとし]の中学校[ちゅうがっこう]で教鞭[きょうべん]を執[と]っていた。通達[つうたつ]が発表[はっぴょう]された日[ひ]、保護者[ほごしゃ]たちからの問[と]い合[あ]わせが殺到[さっとう]した。「うちの子[こ]はどうやって高校[こうこう]に受[う]かるのか」「塾[じゅく]なしで大学[だいがく]に行[い]けるのか」という不安[ふあん]に満[み]ちた声[こえ]ばかりだった。",
      "私[わたし]は夜[よる]遅[おそ]くまで悩[なや]んだ末[すえ]、教室[きょうしつ]のあり方[かた]そのものを変[か]える決心[けっしん]をした。子[こ]どもたちに「答[こた]えを覚[おぼ]える」のではなく、「問[とい]を立[た]てる」力[ちから]を育[そだ]てる授業[じゅぎょう]を作[つく]ろうと思[おも]い立[た]ったのだ。",
      "初[はじ]めは生徒[せいと]たちも戸惑[とまど]った。「先生[せんせい]、答[こた]えがない問題[もんだい]なんて、どう解[と]くんですか」と訴[うた]える生徒[せいと]もいた。しかし私[わたし]は、課題[かだい]を与[あた]えるだけで正解[せいかい]を示[しめ]さず、グループで議論[ぎろん]させる手法[しゅほう]を続[つづ]けた。",
      "三[さん]ヶ月[かげつ]が経[た]つ頃[ころ]、変化[へんか]が見[み]え始[はじ]めた。生徒[せいと]たちは自[みずか]ら進[すす]んで本[ほん]を調[しら]べ、多様[たよう]な見解[けんかい]を比較[ひかく]し始[はじ]めた。かつての受動的[じゅどうてき]な姿勢[しせい]から、自[みずか]ら問[と]いを立[た]てる姿勢[しせい]へと、確実[かくじつ]に変[か]わりつつあった。",
      "年度末[ねんどまつ]、保護者会[ほごしゃかい]で私[わたし]は生徒[せいと]たちの変化[へんか]を報告[ほうこく]した。「答[こた]えを与[あた]える教育[きょういく]から、問[と]いを立[た]てる教育[きょういく]へ。変化[へんか]には時間[じかん]がかかりますが、確実[かくじつ]に芽[め]は育[そだ]っています」。最初[さいしょ]は懐疑的[かいぎてき]だった保護者[ほごしゃ]たちからも、次第[しだい]に拍手[はくしゅ]が湧[わ]き上[あ]がった。",
      "塾[じゅく]のない明日[あす]は、決[けっ]して平坦[へいたん]な道[みち]ではない。しかし子[こ]どもたちの瞳[ひとみ]に宿[やど]る知的[ちてき]好奇心[こうきしん]を守[まも]るためには、大人[おとな]が恐[おそ]れずに歩[ほ]を進[すす]めるしかない。教育[きょういく]改革[かいかく]の真[しん]の成果[せいか]は、十年[じゅうねん]、二十年[にじゅうねん]後[ご]に花開[はなひら]くものだと、私[わたし]は信[しん]じている。"
    ],
    translation: [
      "The new notification from the Ministry of Education, Culture, Sports, Science and Technology sent shockwaves through cram schools and prep schools across the country. It read: \"Providing supplementary lessons that exceed the scope of the curriculum guidelines is, in principle, prohibited.\"",
      "Behind the notification lay the physical and mental exhaustion of children produced by fierce exam competition. The government had firmly resolved to break away from the cram-school-dependent education that had lasted thirty years.",
      "I taught at a junior high school in a regional city. On the day the notification was issued, inquiries from parents poured in. They were voices full of anxiety: \"How will my child pass high school?\" \"Can my child go to college without cram schools?\"",
      "After agonizing late into the night, I resolved to change the very nature of the classroom. I conceived the idea of lessons that would cultivate in children not the ability to \"memorize answers\" but to \"frame questions.\"",
      "At first the students were bewildered. Some students protested, \"Teacher, how do we solve a problem with no answer?\" But I continued a method of giving tasks without showing the correct answer and having groups discuss them.",
      "Around three months later, change began to appear. Students started voluntarily looking things up in books and comparing diverse views. From their former passive posture, they were steadily changing to one of framing their own questions.",
      "At the end of the school year, I reported the students' changes at a parent meeting. \"From education that gives answers to education that frames questions. Change takes time, but a bud is surely growing.\" From the parents, initially skeptical, applause gradually rose.",
      "A tomorrow without cram schools is by no means a smooth path. But to protect the intellectual curiosity dwelling in children's eyes, adults have no choice but to advance without fear. The true fruit of educational reform, I believe, will bloom in ten or twenty years."
    ],
    vocab: [
      { word: "文部科学省", reading: "もんぶかがくしょう", meaning: "MEXT; Ministry of Education" },
      { word: "通達", reading: "つうたつ", meaning: "notification; directive" },
      { word: "予備校", reading: "よびこう", meaning: "prep school" },
      { word: "衝撃", reading: "しょうげき", meaning: "shock" },
      { word: "学習指導要領", reading: "がくしゅうしどうようりょう", meaning: "curriculum guidelines" },
      { word: "補習授業", reading: "ほしゅくじゅぎょう", meaning: "supplementary lesson" },
      { word: "過酷", reading: "かこく", meaning: "harsh" },
      { word: "受験競争", reading: "じゅけんきょうそう", meaning: "exam competition" },
      { word: "疲弊", reading: "ひへい", meaning: "exhaustion" },
      { word: "脱却", reading: "だっきゃく", meaning: "breaking away" },
      { word: "教鞭", reading: "きょうべん", meaning: "teaching (rod)" },
      { word: "保護者", reading: "ほごしゃ", meaning: "parent; guardian" },
      { word: "戸惑う", reading: "とまどう", meaning: "to be bewildered" },
      { word: "受動的", reading: "じゅどうてき", meaning: "passive" },
      { word: "知的好奇心", reading: "ちてきこうきしん", meaning: "intellectual curiosity" }
    ]
  }
];
