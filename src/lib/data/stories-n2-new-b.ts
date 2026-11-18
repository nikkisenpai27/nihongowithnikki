import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of consecutive kanji attaches as
// furigana to that whole run. Kana and punctuation have no brackets.
// titleReading is full kana with NO brackets. See src/lib/types.ts.

export const storiesN2NewB: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N2 — 新人候補の決意 (A political campaign)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-11",
    title: "新人[しんじん]候補[こうほ]の決意[けつい]",
    titleReading: "しんじんこうほのけつい",
    level: "N2",
    summary: "A first-time city council candidate reflects on the grueling final weeks of an election campaign and what the experience taught about democracy.",
    estMinutes: 6,
    tags: ["politics", "election", "society"],
    body: [
      "街角[まちかど]に立[た]って、マイクを握[にぎ]りしめる。私[わたし]は今回[こんかい]の市議会[しぎかい]選挙[せんきょ]に立候補[りっこうほ]した新人[しんじん]候補[こうほ]の一人[ひとり]だ。",
      "投票日[とうひょうび]まで残[のこ]すところ二週間[にしゅうかん]となった今[いま]、支持[しじ]を集[あつ]めるために毎日[まいにち]朝[あさ]から夜[よる]まで歩[ある]き続[つづ]けている。",
      "演説[えんぜつ]の最中[さいちゅう]、冷[つめ]たい雨[あめ]が降[ふ]ってきたにもかかわらず、集[あつ]まってくれた人々[ひとびと]の熱意[ねつい]に胸[むね]を打[う]たれた。",
      "対立[たいりつ]候補[こうほ]からの批判[ひはん]は予想[よそう]以上[いじょう]に激[はげ]しく、マニフェストの矛盾[むじゅん]を指摘[してき]されるたびに、答[こた]えに窮[きゅう]することもあった。",
      "しかしながら、応援[おうえん]してくれるボランティアたちの存在[そんざい]があるからこそ、挫[くじ]けそうになっても立[た]ち上[あ]がることができる。",
      "メディアの報道[ほうどう]において私[わたし]の主張[しゅちょう]が正確[せいかく]に伝[つた]わっているかどうか、常[つね]に気[き]を配[くば]らなければならない。",
      "選挙[せんきょ]という舞台[ぶたい]は、政策[せいさく]の優[すぐ]れた者[もの]が必[かなら]ずしも勝[か]つとは限[かぎ]らない厳[きび]しい世界[せかい]だ。それでも、諦[あきら]めるわけにはいかない。",
      "結果[けっか]がどうあれ、今回[こんかい]の選挙戦[せんきょせん]を通[つう]じて私[わたし]は多[おお]くの市民[しみん]の声[こえ]を直接[ちょくせつ]聞[き]くことができた。その事実[じじつ]は、金[きん]銭[せん]に代[か]えがたい財産[ざいさん]となった。"
    ],
    translation: [
      "I stand at the street corner, gripping the microphone. I am one of the new candidates running in this city council election.",
      "With only two weeks left until voting day, I keep walking from morning to night every day to gather support.",
      "During my speech, cold rain began to fall; despite that, I was moved by the enthusiasm of the people who had gathered.",
      "The criticism from my opponent was harsher than expected, and each time the contradictions in my manifesto were pointed out, there were times I was at a loss for an answer.",
      "Nevertheless, precisely because I have the support of volunteers, I can get back up even when I am about to give up.",
      "I must always be attentive to whether my arguments are accurately conveyed in media coverage.",
      "The stage of elections is a harsh world where the one with the best policies does not necessarily win. Even so, I cannot afford to give up.",
      "Whatever the result may be, through this campaign I was able to hear the voices of many citizens directly. That fact has become a treasure no money can replace."
    ],
    vocab: [
      { word: "選挙", reading: "せんきょ", meaning: "election" },
      { word: "市議会", reading: "しぎかい", meaning: "city council" },
      { word: "立候補", reading: "りっこうほ", meaning: "running as a candidate" },
      { word: "演説", reading: "えんぜつ", meaning: "speech; address" },
      { word: "対立", reading: "たいりつ", meaning: "rivalry; opposition" },
      { word: "批判", reading: "ひはん", meaning: "criticism" },
      { word: "矛盾", reading: "むじゅん", meaning: "contradiction" },
      { word: "応援", reading: "おうえん", meaning: "support; cheering" },
      { word: "報道", reading: "ほうどう", meaning: "news coverage" },
      { word: "主張", reading: "しゅちょう", meaning: "assertion; claim" },
      { word: "政策", reading: "せいさく", meaning: "policy" },
      { word: "市民", reading: "しみん", meaning: "citizen" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 難民の旅路 (A refugee's journey)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-12",
    title: "難民[なんみん]の旅路[たびじ]",
    titleReading: "なんみんのたびじ",
    level: "N2",
    summary: "A refugee recounts the perilous journey from a war-torn homeland to a neighboring country and the long wait for asylum.",
    estMinutes: 7,
    tags: ["refugee", "war", "displacement"],
    body: [
      "国境[こっきょう]を越[こ]えたその夜[よる]、私[わたし]は持[も]たせられた小[ちい]さな鞄[かばん]一[ひと]つだけを頼[たよ]りに、暗[くら]い山道[やまみち]を歩[ある]いていた。",
      "故郷[こきょう]を離[はな]れざるを得[え]なかった理由[りゆう]は、戦火[せんか]が拡大[かくだい]し続[つづ]ける中[なか]で、家族[かぞく]の命[いのち]を守[まも]るためだった。",
      "隣国[りんごく]にたどり着[つ]いたものの、仮[かり]の住[す]まいに提供[ていきょう]されたのは、寒[さむ]さを凌[しの]ぐことすら難[むずか]しい粗末[そまつ]なテントだった。",
      "言葉[ことば]が通[つう]じないばかりか、難民[なんみん]という肩書[かたが]き一[ひと]つで、地元[じもと]の人々[ひとびと]から目[め]を背[そむ]けられることもしばしばだった。",
      "それでも、共[とも]に避難[ひなん]してきた仲間[なかま]たちがいればこそ、絶望[ぜつぼう]の淵[ふち]から踏[ふ]みとどまることができた。",
      "半年[はんとし]後[ご]、国連[こくれん]の支援[しえん]団体[だんたい]の手[て]を借[か]りて、正式[せいしき]な庇護[ひご]申請[しんせい]を提出[ていしゅつ]することになった。審査[しんさ]には数年[すうねん]かかるおそれがあるという。",
      "待機[たいき]生活[せいかつ]が長期化[ちょうきか]するにつれて、希望[きぼう]を見出[みいだ]せない日々[ひび]も増[ふ]えていったが、子[こ]どもたちの笑顔[えがお]を見[み]るたびに、立[た]ち上[あ]がる力[ちから]が湧[わ]いてきた。",
      "いつの日[ひ]か、故郷[こきょう]の空[そら]の下[もと]で再[ふたた]び穏[おだ]やかな暮[く]らしを送[おく]れる日[ひ]が来[く]ることを信[しん]じて、今日[きょう]も前[まえ]を向[む]いて歩[ある]き続[つづ]けている。"
    ],
    translation: [
      "The night I crossed the border, I was walking a dark mountain path relying only on the single small bag I had been given.",
      "The reason I had no choice but to leave my homeland was that, as the war expanded, I had to protect my family's lives.",
      "Even after reaching the neighboring country, the temporary shelter I was given was a shabby tent that was hard to even fend off the cold in.",
      "Not only did the language not communicate, but merely carrying the title of refugee, I was often looked away from by the local people.",
      "Even so, precisely because I had companions who had evacuated with me, I could hold back from the edge of despair.",
      "Half a year later, with the help of a UN aid organization, I submitted a formal asylum application. The review may take several years, they said.",
      "As the waiting life grew longer, the days when I could find no hope increased, but each time I saw my children's smiles, the strength to rise welled up in me.",
      "Believing that someday a day will come when I can live peacefully again under the sky of my homeland, I keep walking forward today as well."
    ],
    vocab: [
      { word: "国境", reading: "こっきょう", meaning: "border" },
      { word: "故郷", reading: "こきょう", meaning: "hometown" },
      { word: "戦火", reading: "せんか", meaning: "flames of war" },
      { word: "避難", reading: "ひなん", meaning: "evacuation" },
      { word: "隣国", reading: "りんごく", meaning: "neighboring country" },
      { word: "難民", reading: "なんみん", meaning: "refugee" },
      { word: "絶望", reading: "ぜつぼう", meaning: "despair" },
      { word: "支援", reading: "しえん", meaning: "support; aid" },
      { word: "庇護", reading: "ひご", meaning: "asylum; protection" },
      { word: "申請", reading: "しんせい", meaning: "application" },
      { word: "審査", reading: "しんさ", meaning: "screening; review" },
      { word: "待機", reading: "たいき", meaning: "standing by; waiting" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 台風の夜に (A natural disaster)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-13",
    title: "台風[たいふう]の夜[よる]に",
    titleReading: "たいふうのよるに",
    level: "N2",
    summary: "A family survives a devastating typhoon that floods their home, and discovers the strength of community in the aftermath.",
    estMinutes: 6,
    tags: ["disaster", "typhoon", "community"],
    body: [
      "あの夜[よる]、気象[きしょう]庁[ちょう]から発表[はっぴょう]された避難[ひなん]指示[しじ]は、私[わたし]たち家族[かぞく]にとって予想[よそう]だにしない出来事[できごと]の始[はじ]まりだった。",
      "突然[とつぜん]の停電[ていでん]に見舞[みま]われ、あたりは漆黒[しっこく]の闇[やみ]に包[つつ]まれた。強風[きょうふう]が窓[まど]ガラスを激[はげ]しく叩[たた]く音[おと]が、壁[かべ]一面[いちめん]に響[ひび]き渡[わた]っていた。",
      "父[ちち]は冷静[れいせい]を装[よそお]っていたものの、その震[ふる]える手[て]からは、隠[かく]しきれない不安[ふあん]が読[よ]み取[と]れた。",
      "浸水[しんすい]が進[すす]むにつれて、一階[いっかい]にあった家財[かざい]道具[どうぐ]は次第[しだい]に泥水[どろみず]の中[なか]に沈[しず]んでいった。",
      "私[わたし]たちは二階[にかい]へと避難[ひなん]したものの、水位[すいい]が上[あ]がるおそれがある限[かぎ]り、安心[あんしん]できる状況[じょうきょう]ではなかった。",
      "近所[きんじょ]の高齢[こうれい]の女性[じょせい]が一人[ひとり]で避難[ひなん]できずにいるという知[し]らせを聞[き]き、私[わたし]は躊躇[ちゅうちょ]することなく外[そと]へ飛[と]び出[だ]した。",
      "翌朝[よくあさ]、暴風[ぼうふう]が去[さ]った後[ご]の街[まち]は、目[め]を覆[おお]いたくなるような惨状[さんじょう]を呈[てい]していた。それでも、人々[ひとびと]は言葉[ことば]を交[か]わさずとも、互[たが]いに支[ささ]え合[あ]っていた。",
      "今回[こんかい]の災害[さいがい]を経[へ]て、自然[しぜん]の猛威[もうい]の前[まえ]では人間[にんげん]の力[ちから]など無[む]に等[ひと]しいと痛感[つうかん]した。それと同時[どうじ]に、困難[こんなん]な時[とき]にこそ、人[ひと]と人[ひと]の繋[つな]がりが如何[いか]に重要[じゅうよう]であるかを学[まな]んだ。"
    ],
    translation: [
      "That night, the evacuation order issued by the meteorological agency was the beginning of an event my family had not even anticipated.",
      "We were struck by a sudden power outage, and the surroundings were wrapped in pitch-black darkness. The sound of strong wind violently beating the window glass echoed all over the walls.",
      "Although my father feigned calmness, from his trembling hands I could read the anxiety he could not fully hide.",
      "As the flooding progressed, the furniture and belongings on the first floor gradually sank into muddy water.",
      "We evacuated to the second floor, but as long as there was a risk of the water level rising, it was not a situation we could feel at ease with.",
      "Hearing that an elderly neighbor woman could not evacuate alone, I dashed outside without hesitation.",
      "The next morning, the town after the storm had passed presented a devastation that made me want to cover my eyes. Even so, the people were supporting each other even without exchanging words.",
      "Through this disaster, I keenly felt that in the face of nature's fury, human power is virtually nothing. At the same time, I learned how important human connections are precisely in difficult times."
    ],
    vocab: [
      { word: "避難", reading: "ひなん", meaning: "evacuation" },
      { word: "気象", reading: "きしょう", meaning: "weather; meteorology" },
      { word: "停電", reading: "ていでん", meaning: "power outage" },
      { word: "強風", reading: "きょうふう", meaning: "strong wind" },
      { word: "浸水", reading: "しんすい", meaning: "flooding" },
      { word: "水位", reading: "すいい", meaning: "water level" },
      { word: "高齢", reading: "こうれい", meaning: "elderly" },
      { word: "暴風", reading: "ぼうふう", meaning: "storm" },
      { word: "惨状", reading: "さんじょう", meaning: "devastation" },
      { word: "災害", reading: "さいがい", meaning: "disaster" },
      { word: "猛威", reading: "もうい", meaning: "fury; fierce force" },
      { word: "痛感", reading: "つうかん", meaning: "keenly feeling" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 心の声に耳を澄ませて (A mental health journey)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-14",
    title: "心[こころ]の声[こえ]に耳[みみ]を澄[す]ませて",
    titleReading: "こころのこえにみみをすませて",
    level: "N2",
    summary: "A young office worker describes the spiral into adjustment disorder and the slow, uneven path of recovery through therapy and self-acceptance.",
    estMinutes: 7,
    tags: ["mental health", "recovery", "self-care"],
    body: [
      "長年[ながねん]働[はたら]き詰[づ]めの生活[せいかつ]を続[つづ]けてきた結果[けっか]、気[き]がつけば、朝[あさ]起[お]きることすら苦痛[くつう]に感[かん]じるようになっていた。",
      "最初[さいしょ]は単[たん]なる疲労[ひろう]のせいだと思[おも]い込[こ]んでいたが、次第[しだい]に仕事[しごと]に集中[しゅうちゅう]できなくなり、些細[ささい]なことで涙[なみだ]が止[と]まらなくなった。",
      "心療[しんりょう]内科[ないか]を受診[じゅしん]するのには、相当[そうとう]の勇気[ゆうき]が必要[ひつよう]だった。精神的[せいしんてき]な問題[もんだい]を抱[かか]えることを、どこかで認[みと]めたくなかったからだ。",
      "医師[いし]から「適応障害[てきおうしょうがい]」という診断[しんだん]名[めい]を告[つ]げられた瞬間[しゅんかん]、むしろ安堵[あんど]した自分[じぶん]に驚[おどろ]いた。名前[なまえ]がつくことで、ようやく向[む]き合[あ]うべき相手[あいて]が見[み]えた気[き]がしたのだ。",
      "薬物[やくぶつ]療法[りょうほう]に加[くわ]え、認知[にんち]行動[こうどう]療法[りょうほう]を取[と]り入[い]れることによって、少[すこ]しずつ自分[じぶん]の考[かんが]え方[かた]の癖[くせ]に気[き]づくようになった。",
      "回復[かいふく]への道[みち]のりは決[けっ]して平坦[へいたん]なものではなく、良[よ]くなったかと思[おも]えば再[ふたた]び落[お]ち込[こ]む、という波[なみ]の連続[れんぞく]だった。",
      "周[まわ]りの人々[ひとびと]が当[あ]たり前[まえ]のように過[す]ごす日常[にちじょう]が、私[わたし]には至難[いたなん]の業[わざ]に思[おも]えることもあった。それでも、焦[あせ]らずに自分[じぶん]のペースで進[すす]むことが、結果的[けっかてき]には近道[ちかみち]だったと気[き]がついた。",
      "今[いま]でも完全[かんぜん]に克服[こくふく]できたわけではないが、かつての私[わたし]よりは、少[すこ]しだけ自分[じぶん]に優[やさ]しくなれたと思[おも]う。心[こころ]の傷[きず]は目[め]に見[み]えないだけに、人[ひと]それぞれに異[こと]なる重[おも]さがあることを、この経験[けいけん]を通[とお]して身[み]をもって学[まな]んだ。"
    ],
    translation: [
      "As a result of continuing to live a life of constant overwork for years, before I realized it, even getting up in the morning had become painful.",
      "At first I had convinced myself it was simply fatigue, but gradually I could no longer concentrate on work and would burst into tears over trivial things.",
      "It took considerable courage to visit a psychosomatic clinic. Somewhere in me, I had not wanted to admit I was struggling with a mental issue.",
      "The moment the doctor told me the diagnosis 'adjustment disorder', I was surprised to find myself rather relieved. By having a name, I felt I had finally found an opponent to face.",
      "In addition to medication, by incorporating cognitive behavioral therapy, I gradually came to notice the habits in my own way of thinking.",
      "The path to recovery was by no means smooth, but a series of waves — I would seem better, then fall into a slump again.",
      "There were times when the daily life people around me took for granted felt like an almost impossible feat for me. Even so, I realized that progressing at my own pace without rushing turned out, in the end, to be the shortcut.",
      "Even now I have not completely overcome it, but I think I am a little kinder to myself than I used to be. Because wounds of the heart are invisible, each person carries a different weight to them; through this experience I learned that firsthand."
    ],
    vocab: [
      { word: "疲労", reading: "ひろう", meaning: "fatigue" },
      { word: "苦痛", reading: "くつう", meaning: "pain; suffering" },
      { word: "心療内科", reading: "しんりょうないか", meaning: "psychosomatic clinic" },
      { word: "受診", reading: "じゅしん", meaning: "medical consultation" },
      { word: "診断", reading: "しんだん", meaning: "diagnosis" },
      { word: "適応障害", reading: "てきおうしょうがい", meaning: "adjustment disorder" },
      { word: "薬物療法", reading: "やくぶつりょうほう", meaning: "medication therapy" },
      { word: "認知行動療法", reading: "にんちこうどうりょうほう", meaning: "cognitive behavioral therapy" },
      { word: "回復", reading: "かいふく", meaning: "recovery" },
      { word: "日常", reading: "にちじょう", meaning: "daily life" },
      { word: "克服", reading: "こくふく", meaning: "overcoming" },
      { word: "経験", reading: "けいけん", meaning: "experience" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 芸術と検閲の境界 (An artistic controversy)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-15",
    title: "芸術[げいじゅつ]と検閲[けんえつ]の境界[きょうかい]",
    titleReading: "げいじゅつとけんえつのきょうかい",
    level: "N2",
    summary: "A municipal art exhibition sparks a fierce debate between advocates of free expression and groups demanding the removal of a provocative war-themed installation.",
    estMinutes: 7,
    tags: ["art", "censorship", "controversy"],
    body: [
      "市立[しりつ]美術館[びじゅつかん]で開[ひら]かれた現代[げんだい]美術[びじゅつ]展[てん]は、開幕[かいまく]前[まえ]から議論[ぎろん]を呼[よ]んでいた。",
      "出品[しゅっぴん]される作品[さくひん]の中[なか]に、戦争[せんそう]の悲惨[ひさん]さを生々[なまなま]しく表現[ひょうげん]したインスタレーションが含[ふく]まれていたためだ。",
      "保守的[ほしゅてき]な意見[いけん]を持[も]つ市民[しみん]団体[だんたい]は、子[こ]どもに見[み]せるには不適切[ふてきせつ]だとして、展示[てんじ]の中止[ちゅうし]を求[もと]めた。",
      "一方[いっぽう]で、表現[ひょうげん]の自由[じゆう]を重視[じゅうし]する芸術家[げいじゅつか]たちからは、検閲[けんえつ]に等[ひと]しい行為[こうい]だと反発[はんぱつ]の声[こえ]が上[あ]がった。",
      "館長[かんちょう]は記者[きしゃ]会見[かいけん]において、「公共[こうきょう]の場[ば]における展示[てんじ]である以上[いじょう]、多様[たよう]な価値観[かちかん]に配慮[はいりょ]する必要[ひつよう]がある」と述[の]べた。",
      "この発言[はつげん]は、かえって芸術界[げいじゅつかい]の怒[いか]りを買[か]う結果[けっか]となり、国内外[こくないがい]から批判[ひはん]が殺到[さっとう]することになった。",
      "議論[ぎろん]が白熱[はくねつ]する中[なか]、ある批評家[ひひょうか]は「表現[ひょうげん]の自由[じゆう]と、公共[こうきょう]の倫理[りんり]感覚[かんかく]とが衝突[しょうとつ]した典型的[てんけいてき]な事例[じれい]だ」と指摘[してき]した。",
      "最終的[さいしゅうてき]に作品[さくひん]は展示[てんじ]され続[つづ]けられたものの、入場者[にゅうじょうしゃ]には年齢[ねんれい]制限[せいげん]が設[もう]けられることとなった。この結末[けつまつ]に誰[だれ]もが満足[まんぞく]したわけではないが、対立[たいりつ]する意見[いけん]の間[あいだ]で模索[もさく]を続[つづ]けることの難[むずか]しさを浮[う]き彫[ぼ]りにした出来事[できごと]だった。"
    ],
    translation: [
      "The contemporary art exhibition held at the municipal art museum had been stirring debate even before it opened.",
      "It was because among the works on display was an installation that vividly expressed the horror of war.",
      "A conservative citizens' group, arguing it was inappropriate to show to children, demanded the exhibition be canceled.",
      "On the other hand, from artists who valued freedom of expression, voices of opposition arose, calling the move tantamount to censorship.",
      "At a press conference, the director stated, 'As long as it is an exhibition in a public space, there is a need to take diverse values into consideration.'",
      "This statement had the result of instead provoking the ire of the art world, and criticism poured in from home and abroad.",
      "As the debate grew heated, one critic pointed out, 'It is a typical case in which freedom of expression and the public's ethical sense have collided.'",
      "In the end, although the work continued to be exhibited, an age restriction was set for visitors. Not everyone was satisfied with this outcome, but it was an event that highlighted the difficulty of continuing to grope for a path between opposing opinions."
    ],
    vocab: [
      { word: "美術館", reading: "びじゅつかん", meaning: "art museum" },
      { word: "現代美術", reading: "げんだいびじゅつ", meaning: "contemporary art" },
      { word: "展示", reading: "てんじ", meaning: "exhibit; display" },
      { word: "作品", reading: "さくひん", meaning: "work (of art)" },
      { word: "不適切", reading: "ふてきせつ", meaning: "inappropriate" },
      { word: "検閲", reading: "けんえつ", meaning: "censorship" },
      { word: "表現の自由", reading: "ひょうげんのじゆう", meaning: "freedom of expression" },
      { word: "配慮", reading: "はいりょ", meaning: "consideration" },
      { word: "批評家", reading: "ひひょうか", meaning: "critic" },
      { word: "衝突", reading: "しょうとつ", meaning: "collision; conflict" },
      { word: "模索", reading: "もさく", meaning: "groping; searching" },
      { word: "議論", reading: "ぎろん", meaning: "debate; discussion" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 古い町並みを守る (Historical preservation)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-16",
    title: "古[ふる]い町並[まちな]みを守[まも]る",
    titleReading: "ふるいまちなみをまもる",
    level: "N2",
    summary: "A town with Edo-period machiya townhouses debates preservation versus redevelopment, and finds a compromise in adaptive reuse.",
    estMinutes: 6,
    tags: ["history", "preservation", "community"],
    body: [
      "江戸[えど]時代[じだい]から続[つづ]くこの町[まち]には、現在[げんざい]も往時[おうじ]の面影[おもかげ]を残[のこ]す町屋[まちや]が数多[かずおお]く立[た]ち並[なら]んでいる。",
      "近年[きんねん]になり、人口[じんこう]減少[げんしょう]と過疎化[かそか]が進[すす]む中[なか]で、これらの歴史的[れきしてき]建築[けんちく]を後世[こうせい]に伝[つた]えるべきかどうか、町[まち]を挙[あ]げての議論[ぎろん]が続[つづ]いている。",
      "保存派[ほぞんは]は、文化[ぶんか]遺産[いさん]を失[うしな]うことは、町[まち]のアイデンティティを失[うしな]うことに他[ほか]ならないと主張[しゅちょう]している。",
      "反対[はんたい]に、維持[いじ]管理[かんり]には莫大[ばくだい]な費用[ひよう]がかさむ上[うえ]、高齢化[こうれいか]が進[すす]む住民[じゅうみん]にとっては負担[ふたん]が重[おも]すぎるという意見[いけん]も根強[ねづよ]く存在[そんざい]する。",
      "市役所[しやくしょ]は専門家[せんもんか]を招[まね]いて調査[ちょうさ]を行[おこな]った結果[けっか]、観光資源[かんこうしげん]として活用[かつよう]しつつ保存[ほぞん]する方針[ほうしん]を打[う]ち出[だ]した。",
      "古[ふる]い建物[たてもの]を改修[かいしゅう]するにあたっては、外観[がいかん]を損[そこ]なわないよう、厳[きび]しい基準[きじゅん]が設[もう]けられた。",
      "若[わか]い世代[せだい]の移住者[いじゅうしゃ]も増[ふ]え、古[ふる]い町屋[まちや]をカフェや工房[こうぼう]に改装[かいそう]して新[あたら]しい息吹[いぶき]を取[と]り入[い]れる動[うご]きが活発[かっぱつ]になっている。",
      "過去[かこ]と現在[げんざい]が共存[きょうぞん]するこの町[まち]の風景[ふうけい]は、歴史[れきし]をただ保存[ほぞん]するだけでなく、現代[げんだい]の生活[せいかつ]の中[なか]に息吹[いぶき]かせるという新[あたら]しい可能性[かのうせい]を示[しめ]している。"
    ],
    translation: [
      "This town, which has continued since the Edo period, still has many machiya townhouses standing in rows that retain the appearance of bygone days.",
      "In recent years, as population decline and depopulation progress, the town has been engaged in debate about whether to pass these historic buildings on to later generations.",
      "The preservationists argue that losing our cultural heritage is nothing other than losing the town's identity.",
      "On the other hand, the opinion also persists strongly that maintenance costs a huge amount and, on top of that, the burden is too heavy for residents who are aging.",
      "As a result of the city office inviting experts to conduct a survey, it announced a policy of preserving the buildings while utilizing them as a tourism resource.",
      "In renovating the old buildings, strict standards were set so as not to damage the exterior.",
      "Young migrants have also increased, and the movement to convert old machiya into cafés and workshops, breathing new life into them, has grown active.",
      "The scenery of this town where past and present coexist shows a new possibility of not merely preserving history, but letting it breathe within modern life."
    ],
    vocab: [
      { word: "町並み", reading: "まちなみ", meaning: "townscape" },
      { word: "江戸時代", reading: "えどじだい", meaning: "Edo period" },
      { word: "面影", reading: "おもかげ", meaning: "trace; remnant" },
      { word: "町屋", reading: "まちや", meaning: "traditional townhouse" },
      { word: "過疎化", reading: "かそか", meaning: "depopulation" },
      { word: "文化遺産", reading: "ぶんかいさん", meaning: "cultural heritage" },
      { word: "維持管理", reading: "いじかんり", meaning: "maintenance and management" },
      { word: "観光資源", reading: "かんこうしげん", meaning: "tourism resource" },
      { word: "改修", reading: "かいしゅう", meaning: "renovation" },
      { word: "移住者", reading: "いじゅうしゃ", meaning: "migrant" },
      { word: "共存", reading: "きょうぞん", meaning: "coexistence" },
      { word: "可能性", reading: "かのうせい", meaning: "possibility" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 拡散される怒り (A social media backlash)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-17",
    title: "拡散[かくさん]される怒[いか]り",
    titleReading: "かくさんされるいかり",
    level: "N2",
    summary: "The owner of a small online accessory shop posts a single promotional photo and watches a misinterpreted background trigger a viral backlash.",
    estMinutes: 6,
    tags: ["social media", "backlash", "internet"],
    body: [
      "ある日[ひ]、私[わたし]が運営[うんえい]する小[ちい]さなアクセサリー店[てん]の公式[こうしき]アカウントに、一本[いっぽん]の投稿[とうこう]をしたところ、思[おも]いもよらぬ事態[じたい]に発展[はってん]した。",
      "新[あたら]しい商品[しょうひん]の宣伝[せんでん]を兼[か]ねて、一枚[いちまい]の写真[しゃしん]を添[そ]えて投稿[とうこう]したところ、その写真[しゃしん]に写[うつ]り込[こ]んでいた背景[はいけい]が、ある人物[じんぶつ]を意図的[いとてき]に嘲笑[ちょうしょう]しているように解釈[かいしゃく]されたのだ。",
      "最初[さいしょ]は数人[すうにん]の批判[ひはん]コメントだったが、それが拡散[かくさん]されるや否[いな]や、瞬[またた]く間[ま]に炎上[えんじょう]へと発展[はってん]した。",
      "謝罪文[しゃざいぶん]を公表[こうひょう]してはみたものの、一度[いちど]拡散[かくさん]された情報[じょうほう]を回収[かいしゅう]することは不可能[ふかのう]に近[ちか]い。",
      "匿名[とくめい]のアカウントからは罵倒[ばとう]の言葉[ことば]が殺到[さっとう]し、中[なか]には私[わたし]の個人的[こじんてき]な情報[じょうほう]を暴[あば]こうとする嫌[いや]がらせも含[ふく]まれていた。",
      "どれだけ説明[せつめい]しても、もはや私[わたし]の意図[いと]など関係[かんけい]ないと言[い]わんばかりに、人々[ひとびと]は自分[じぶん]の怒[いか]りをぶつけ続[つづ]けた。",
      "実店舗[じつてんぽ]にも嫌[いや]がらせの電話[でんわ]がかかるようになり、家族[かぞく]まで巻[ま]き込[こ]まれてしまう事態[じたい]に、私[わたし]は深[ふか]く落胆[らくたん]した。",
      "数週間[すうしゅうかん]後[ご]、炎上[えんじょう]は徐々[じょじょ]に収束[しゅうそく]していったものの、その間[かん]に失[うしな]った信用[しんよう]と平穏[へいおん]は、容易[ようい]には取[と]り戻[もど]せそうにない。一[ひと]つの投稿[とうこう]がいかに大[おお]きな影響[えいきょう]を及[およ]ぼし得[う]るかを、身[み]をもって痛感[つうかん]した出来事[できごと]だった。"
    ],
    translation: [
      "One day, when I made a single post on the official account of the small accessory shop I run, it developed into an unforeseen situation.",
      "I posted a photo attached to promote a new product, but the background visible in that photo was interpreted as deliberately mocking a certain person.",
      "It began with a few critical comments, but the moment they spread, it instantly escalated into a firestorm.",
      "Although I published an apology, recovering information once spread is nearly impossible.",
      "Insults poured in from anonymous accounts, and among them was harassment that tried to expose my personal information.",
      "No matter how much I explained, people continued to vent their anger as if to say my intent no longer mattered.",
      "Harassing phone calls began coming to the physical store as well, and when my family got dragged in, I fell into deep discouragement.",
      "Several weeks later, the firestorm gradually subsided, but the trust and peace I had lost in the meantime seem unlikely to be easily recovered. It was an event in which I keenly felt firsthand how much influence a single post can have."
    ],
    vocab: [
      { word: "投稿", reading: "とうこう", meaning: "post (social media)" },
      { word: "宣伝", reading: "せんでん", meaning: "promotion" },
      { word: "炎上", reading: "えんじょう", meaning: "online firestorm" },
      { word: "拡散", reading: "かくさん", meaning: "spread; diffusion" },
      { word: "謝罪", reading: "しゃざい", meaning: "apology" },
      { word: "匿名", reading: "とくめい", meaning: "anonymity" },
      { word: "罵倒", reading: "ばとう", meaning: "abuse; insult" },
      { word: "嫌がらせ", reading: "いやがらせ", meaning: "harassment" },
      { word: "収束", reading: "しゅうそく", meaning: "settling down" },
      { word: "信用", reading: "しんよう", meaning: "trust" },
      { word: "平穏", reading: "へいおん", meaning: "peace; calm" },
      { word: "痛感", reading: "つうかん", meaning: "keenly feeling" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 戦地の記憶 (A military memoir)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-18",
    title: "戦地[せんち]の記憶[きおく]",
    titleReading: "せんちのきおく",
    level: "N2",
    summary: "An aging veteran recounts his youthful idealism, the horrors he witnessed on the battlefield, and the lifelong burden of memory he now feels compelled to pass on.",
    estMinutes: 8,
    tags: ["memoir", "war", "memory"],
    body: [
      "私[わたし]は二十歳[はたち]の時[とき]、志願[しがん]して軍[ぐん]に入[はい]った。当時[とうじ]の私[わたし]は、国[くに]のためという大義[たいぎ]名分[めいぶん]に胸[むね]を熱[あつ]くしていた。",
      "初[はじ]めての戦地[せんち]に送[おく]られる際[さい]、家族[かぞく]は無言[むごん]で見送[みおく]ってくれた。母[はは]の目[め]に浮[う]かんでいた涙[なみだ]の意味[いみ]を、当時[とうじ]の私[わたし]は深[ふか]く考[かんが]えようとはしなかった。",
      "戦場[せんじょう]で目[め]にしたのは、映画[えいが]や小説[しょうせつ]で描[えが]かれるような英雄的[えいゆうてき]な光景[こうけい]ではなく、泥[どろ]と血[ち]と恐怖[きょうふ]に満[み]ちた惨状[さんじょう]だった。",
      "味方[みかた]とて、いつ敵[てき]になるか分[わ]からない緊張感[きんちょうかん]の中[なか]、私[わたし]たちは互[たが]いに猜疑心[さいぎしん]を抱[いだ]きながら日々[ひび]を過[す]ごした。",
      "ある作戦中[さくせんちゅう]、目[め]の前[まえ]で仲間[なかま]が倒[たお]れた瞬間[しゅんかん]、私[わたし]は何[なに]もできずにただ立[た]ち尽[つ]くしていた。その無力感[むりょくかん]は、今[いま]も心[こころ]の奥底[おくそこ]に焼[や]き付[つ]いている。",
      "帰国後[きこくご]、私[わたし]は軍[ぐん]を離[はな]れたものの、戦地[せんち]で見[み]た光景[こうけい]は悪夢[あくむ]となって夜[よる]ごと私[わたし]を襲[おそ]った。",
      "社会[しゃかい]に復帰[ふっき]しようと試[こころ]みても、戦争[せんそう]を経験[けいけん]していない人々[ひとびと]と心[こころ]を通[つう]わせることは、想像[そうぞう]以上[いじょう]に困難[こんなん]だった。",
      "今[いま]になって思[おも]うのは、戦争[せんそう]というものが、勝[か]つか負[ま]けるかに関[かん]わらず、すべての人々[ひとびと]の心[こころ]に取[と]り返[かえ]しのつかない傷[きず]を残[のこ]すという事実[じじつ]だ。次世代[じせだい]にこの記憶[きおく]を伝[つた]え続[つづ]けることこそが、私[わたし]に残[のこ]された唯一[ゆいいつ]の使命[しめい]だと感[かん]じている。"
    ],
    translation: [
      "At the age of twenty, I volunteered and entered the military. At the time, my heart burned with the righteous cause of serving my country.",
      "When I was first sent to the battlefield, my family saw me off in silence. I did not try to think deeply about the meaning of the tears in my mother's eyes.",
      "What I saw on the battlefield was not the heroic sight depicted in films or novels, but a scene of horror filled with mud, blood, and fear.",
      "Even among allies, in a tension where we never knew when someone would become an enemy, we lived our days harboring suspicion of one another.",
      "During one operation, the moment a comrade fell before my eyes, I could do nothing but stand rooted to the spot. That sense of powerlessness is still seared into the depths of my heart.",
      "After returning home, I left the military, but the scenes I had seen at the front became nightmares that attacked me every night.",
      "Even when I tried to reintegrate into society, communicating heart to heart with people who had not experienced war was harder than I had imagined.",
      "Now that I think about it, the fact is that war, regardless of winning or losing, leaves irreparable scars on everyone's heart. I feel that continuing to pass this memory on to the next generation is the only mission left to me."
    ],
    vocab: [
      { word: "志願", reading: "しがん", meaning: "volunteering" },
      { word: "大義名分", reading: "たいぎめいぶん", meaning: "righteous cause" },
      { word: "戦地", reading: "せんち", meaning: "battlefield" },
      { word: "戦場", reading: "せんじょう", meaning: "battlefield" },
      { word: "惨状", reading: "さんじょう", meaning: "devastation" },
      { word: "猜疑心", reading: "さいぎしん", meaning: "suspicion" },
      { word: "作戦", reading: "さくせん", meaning: "operation" },
      { word: "無力感", reading: "むりょくかん", meaning: "sense of powerlessness" },
      { word: "帰国", reading: "きこく", meaning: "return home" },
      { word: "復帰", reading: "ふっき", meaning: "reintegration" },
      { word: "次世代", reading: "じせだい", meaning: "next generation" },
      { word: "使命", reading: "しめい", meaning: "mission" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 変わりゆく街 (Neighborhood gentrification)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-19",
    title: "変[か]わりゆく街[まち]",
    titleReading: "かわりゆくまち",
    level: "N2",
    summary: "A lifelong resident of an old downtown neighborhood reflects on how rapid redevelopment has brought new life but eroded the community's identity.",
    estMinutes: 6,
    tags: ["gentrification", "urban", "community"],
    body: [
      "私[わたし]が子[こ]ども時代[じだい]を過[す]ごしたこの町[まち]は、長年[ながねん]、下町[したまち]の情緒[じょうちょ]を残[のこ]す穏[おだ]やかな場所[ばしょ]だった。",
      "ところが、ここ数年[すうねん]、駅前[えきまえ]の再開発[さいかいはつ]が進[すす]むにつれて、次々[つぎつぎ]と高層[こうそう]マンションが建[た]ち並[なら]び始[はじ]めた。",
      "古[ふる]くからある商店[しょうてん]は家賃[やちん]の値上[ねあ]がりに耐[た]えきれず、次々[つぎつぎ]と閉店[へいてん]に追[お]い込[こ]まれていった。",
      "代[か]わってオープンしたのは、洗練[せんれん]されたカフェや高級[こうきゅう]な雑貨店[ざっかてん]ばかりで、どこか他所[よそ]の土地[とち]に来[き]たかのような錯覚[さっかく]を覚[おぼ]えた。",
      "新[あたら]しい住民[じゅうみん]は増[ふ]えたものの、昔[むかし]からの住民[じゅうみん]とは生活[せいかつ]のリズムも価値観[かちかん]も異[こと]なり、自然[しぜん]に距離[きょり]が生[しょう]じていた。",
      "町内会[ちょうないかい]の寄[よ]り合[あ]いに参加[さんか]する若者[わかもの]は少[すく]なく、高齢化[こうれいか]が進[すす]む一方[いっぽう]で、地域[ちいき]の絆[きずな]は希薄[きはく]になりつつある。",
      "皮肉[ひにく]なことに、街[まち]が活気[かっき]を取[と]り戻[もど]す一方[いっぽう]で、私[わたし]たちが愛[あい]していた「故郷[こきょう]」の雰囲気[ふんいき]は、確[たし]かに失[うしな]われていっている。",
      "変化[へんか]を拒[こば]むことには限界[げんかい]がある。それでも、古[ふる]い良[よ]さと新[あたら]しい利便性[りべんせい]とが共存[きょうぞん]できる街[まち]の形[かたち]を、模索[もさく]し続[つづ]ける必要[ひつよう]があると思[おも]う。"
    ],
    translation: [
      "The town where I spent my childhood was, for many years, a calm place that retained the atmosphere of an old downtown.",
      "However, these past few years, as redevelopment around the station has progressed, high-rise apartment buildings have begun to stand one after another.",
      "Long-standing shops, unable to bear rising rents, were driven one after another into closing.",
      "What opened instead were only sophisticated cafés and expensive general stores, and I felt the illusion of having come to some other place.",
      "Although new residents increased, they differed from the longtime residents in both the rhythm of life and values, and distance naturally arose.",
      "Few young people participate in neighborhood association meetings, and as aging advances, the bonds of the community are growing thin.",
      "Ironically, while the town regains vitality, the atmosphere of the 'hometown' we loved is unmistakably being lost.",
      "There are limits to rejecting change. Even so, I think we need to keep searching for a form of town in which old charm and new convenience can coexist."
    ],
    vocab: [
      { word: "下町", reading: "したまち", meaning: "old downtown" },
      { word: "情緒", reading: "じょうちょ", meaning: "atmosphere; sentiment" },
      { word: "再開発", reading: "さいかいはつ", meaning: "redevelopment" },
      { word: "高層", reading: "こうそう", meaning: "high-rise" },
      { word: "商店", reading: "しょうてん", meaning: "shop; store" },
      { word: "家賃", reading: "やちん", meaning: "rent" },
      { word: "閉店", reading: "へいてん", meaning: "closing a shop" },
      { word: "雑貨店", reading: "ざっかてん", meaning: "general store" },
      { word: "洗練", reading: "せんれん", meaning: "sophistication" },
      { word: "錯覚", reading: "さっかく", meaning: "illusion" },
      { word: "町内会", reading: "ちょうないかい", meaning: "neighborhood association" },
      { word: "希薄", reading: "きはく", meaning: "thin; diluted" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N2 — 地球の未来のために (A climate activist)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-20",
    title: "地球[ちきゅう]の未来[みらい]のために",
    titleReading: "ちきゅうのみらいのために",
    level: "N2",
    summary: "A high school student turned climate activist describes the awakening sparked by a documentary, the frustration of being unheard by politicians, and the resolve to keep fighting.",
    estMinutes: 7,
    tags: ["climate", "activism", "youth"],
    body: [
      "私[わたし]が気候変動[きこうへんどう]の問題[もんだい]に本格的[ほんかくてき]に取[と]り組[く]むようになったのは、高校時代[こうこうじだい]に見[み]た一本[いっぽん]のドキュメンタリーがきっかけだった。",
      "映像[えいぞう]の中[なか]で崩[くず]れゆく氷河[ひょうが]と、海[うみ]に沈[しず]みつつある島国[しまぐに]の光景[こうけい]は、私[わたし]の心[こころ]に強[つよ]い衝撃[しょうげき]を与[あた]えた。",
      "当初[とうしょ]は学校[がっこう]の環境部[かんきょうぶ]で活動[かつどう]していたものの、校内[こうない]での清掃活動[せいそうかつどう]だけでは、迫[せま]りくる危機[きき]に対[たい]してあまりにも不十分[ふじゅうぶん]だと感[かん]じるようになった。",
      "そこで私[わたし]は、同世代[どうせだい]の若者[わかもの]たちと共[とも]に、市[し]の気候対策[きこうたいさく]を求[もと]める署名活動[しょめいかつどう]を始[はじ]めた。",
      "当初[とうしょ]は冷[つめ]ややかな視線[しせん]を向[む]ける人々[ひとびと]も多[おお]かったが、私[わたし]たちが真剣[しんけん]に取[と]り組[く]んでいる姿[すがた]を見[み]るにつけ、次第[しだい]に賛同[さんどう]する声[こえ]も増[ふ]えていった。",
      "ある政党[せいとう]の代表[だいひょう]と対話[たいわ]する機会[きかい]にも恵[めぐ]まれたが、政策[せいさく]の具体性[ぐたいせい]を問[と]うと、思[おも]いのほか曖昧[あいまい]な答[こた]えしか返[かえ]ってこなかった。",
      "若者[わかもの]の声[こえ]が政策[せいさく]に反映[はんえい]されない現状[げんじょう]に、私[わたし]たちは失望[しつぼう]を覚[おぼ]えつつも、決[けっ]して諦[あきら]めるつもりはない。",
      "なぜなら、気候変動[きこうへんどう]という課題[かだい]は、世代[せだい]を超[こ]えて取[と]り組[く]まなければ、将来[しょうらい]の地球[ちきゅう]が取[と]り返[かえ]しのつかない状態[じょうたい]に陥[おちい]るおそれがあるからだ。私[わたし]たちの声[こえ]が、ほんの少[すこ]しでも未来[みらい]を変[か]える力[ちから]になることを信[しん]じて、活動[かつどう]を続[つづ]けていく。"
    ],
    translation: [
      "It was a documentary I saw in high school that prompted me to seriously engage with the issue of climate change.",
      "In the footage, the sight of glaciers crumbling and island nations sinking into the sea gave my heart a strong shock.",
      "Initially I was active in the school environment club, but I came to feel that cleanup activities within the school were far too insufficient against the looming crisis.",
      "So, together with young people of my generation, I began a signature campaign demanding climate measures from the city.",
      "At first many people cast cold glances at us, but as they saw how earnestly we engaged, voices of support gradually increased.",
      "We were also fortunate enough to have an opportunity to dialogue with the head of a certain political party, but when we pressed for concreteness in policy, only vague answers came back, surprisingly.",
      "Although we feel disappointment at the current state in which young people's voices are not reflected in policy, we have no intention of giving up.",
      "That is because the issue of climate change, if not tackled across generations, risks plunging the future Earth into an irreparable state. Believing that our voices can become, even slightly, a power to change the future, we will keep on with our activism."
    ],
    vocab: [
      { word: "気候変動", reading: "きこうへんどう", meaning: "climate change" },
      { word: "氷河", reading: "ひょうが", meaning: "glacier" },
      { word: "島国", reading: "しまぐに", meaning: "island nation" },
      { word: "衝撃", reading: "しょうげき", meaning: "shock" },
      { word: "危機", reading: "きき", meaning: "crisis" },
      { word: "不十分", reading: "ふじゅうぶん", meaning: "insufficient" },
      { word: "署名活動", reading: "しょめいかつどう", meaning: "signature campaign" },
      { word: "賛同", reading: "さんどう", meaning: "agreement; support" },
      { word: "政党", reading: "せいとう", meaning: "political party" },
      { word: "対話", reading: "たいわ", meaning: "dialogue" },
      { word: "反映", reading: "はんえい", meaning: "reflection" },
      { word: "失望", reading: "しつぼう", meaning: "disappointment" }
    ]
  }
];
