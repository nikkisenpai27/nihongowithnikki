import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 N3-level short stories (chunk C), ids sx-n3-21..sx-n3-30.
// Topics: a silent night, a bold confession, a late-night call, a stranger's
// kindness, a forgotten umbrella, a winter walk, a new beginning, a difficult
// goodbye, a shared meal, a sudden storm.

export const storiesN3C: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n3-21 — 静かな夜 (A silent night)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-21",
    title: "静[しず]かな夜[よる]",
    titleReading: "しずかなよる",
    level: "N3",
    summary: "A quiet snowy night in the city gives a busy worker a rare moment of reflection, tea, and memories.",
    estMinutes: 5,
    tags: ["night", "quiet", "reflection", "winter"],
    body: [
      "今夜[こんや]はとても静[しず]かです。窓[まど]の外[そと]では、雪[ゆき]が音[おと]もなく降[ふ]っています。都会[とかい]に住[す]んでいると、こんな静[しず]かな夜[よる]は珍[めずら]しいです。",
      "部屋[へや]には私[わたし]だけです。テレビもつけず、ただ小[ちい]さなランプの光[ひかり]の中[なか]で本[ほん]を読[よ]んでいました。ページをめくる音[おと]だけが、部屋[へや]に響[ひび]いていました。",
      "ふと窓[まど]を見[み]ると、街[まち]の灯[あか]りが雪[ゆき]にぼやけて見[み]えました。遠[とお]くで電車[でんしゃ]が通[とお]り過[す]ぎる音[おと]がして、また静[しず]けさが戻[もど]ってきました。",
      "お湯[ゆ]を沸[わ]かして、白[しろ]いお茶[ちゃ]をいれました。カップを両[りょう]手[て]で持[も]つと、温[あたた]かさが少[すこ]しずつ心[こころ]に伝[つた]わってきます。",
      "こんな夜[よる]は、普段[ふだん]忘[わす]れていることを思[おも]い出[だ]します。故郷[こきょう]の家族[かぞく]のこと、学生時代[がくせいじだい]の友人[ゆうじん]のこと。忙[いそが]しい毎日[まいにち]の中[なか]で、振[ふ]り返[かえ]る時間[じかん]が必要[ひつよう]だったことに気[き]づきました。",
      "時計[とけい]を見[み]ると、もう夜[よる]の十一[じゅういち]時[じ]を過[す]ぎていました。明日[あした]も早[はや]く起[お]きなければならないのに、この静[しず]けさから抜[ぬ]け出[だ]すのがもったいないと思[おも]いました。",
      "雪[ゆき]はまだ降[ふ]っています。私[わたし]は本[ほん]を閉[と]じ、灯[あか]りを消[け]しました。静[しず]かな夜[よる]に包[つつ]まれたまま、ゆっくりと眠[ねむ]りにつくことにしました。"
    ],
    translation: [
      "Tonight is very quiet. Outside the window, snow is falling silently. Living in the city, such a quiet night is rare.",
      "I am alone in the room. Without turning on the TV, I was just reading a book in the light of a small lamp. Only the sound of turning pages echoed in the room.",
      "When I happened to look at the window, the city lights looked blurred through the snow. The sound of a train passing in the distance came and went, and the quiet returned.",
      "I boiled water and brewed white tea. Holding the cup with both hands, the warmth slowly spread to my heart.",
      "On nights like this, I remember things I usually forget. My family back home, my friends from my student days. I realized I needed time to look back amid my busy days.",
      "Looking at the clock, it was already past eleven at night. Although I had to wake up early tomorrow too, I felt it would be a waste to leave this quiet behind.",
      "The snow is still falling. I closed my book and turned off the light. Wrapped in the quiet night, I decided to fall asleep slowly."
    ],
    vocab: [
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "雪", reading: "ゆき", meaning: "snow" },
      { word: "響く", reading: "ひびく", meaning: "to echo, to resound" },
      { word: "灯り", reading: "あかり", meaning: "light, lamp" },
      { word: "戻る", reading: "もどる", meaning: "to return" },
      { word: "沸かす", reading: "わかす", meaning: "to boil (water)" },
      { word: "故郷", reading: "こきょう", meaning: "hometown" },
      { word: "振り返る", reading: "ふりかえる", meaning: "to look back" },
      { word: "必要", reading: "ひつよう", meaning: "necessary, need" },
      { word: "眠りにつく", reading: "ねむりにつく", meaning: "to fall asleep" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-22 — 思い切って告白した (A bold confession)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-22",
    title: "思[おも]い切[き]って告[こく]白[はく]した",
    titleReading: "おもいきってこくはくした",
    level: "N3",
    summary: "A young man finally confesses his four-year feelings to a club mate on a rainy evening before graduation.",
    estMinutes: 5,
    tags: ["romance", "confession", "courage", "university"],
    body: [
      "私[わたし]は大学[だいがく]の頃[ころ]から、同[おな]じサークルのユカさんのことがずっと好[す]きでした。でも、恥[は]ずかしくて、なかなか気持[きも]ちを伝[つた]えられないままでした。",
      "卒業[そつぎょう]が近[ちか]くなり、このまま言[い]わずに終[お]わってしまうのかと思[おも]うと、どうしても悔[くや]しかったです。「言[い]わなければ、ずっと後悔[こうかい]するかもしれない」と自分[じぶん]に言[い]い聞[き]かせました。",
      "ある雨[あめ]の夕方[ゆうがた]、二人[ふたり]で駅[えき]まで歩[ある]いている時[とき]に、ついに決意[けつい]しました。声[こえ]が震[ふる]えそうになりましたが、深[ふか]く息[いき]を吸[す]って、言葉[ことば]を絞[しぼ]り出[だ]しました。",
      "「ユカさん、実[じつ]は四年[よねん]間[かん]ずっと好[す]きでした」と伝[つた]えた瞬間[しゅんかん]、ユカさんは驚[おどろ]いた顔[かお]をして、少[すこ]し沈黙[ちんもく]してしまいました。私[わたし]は心臓[しんぞう]が止[と]まるかと思[おも]いました。",
      "そして、ユカさんは恥[は]ずかしそうに微笑[ほほえ]みながら、「私[わたし]も同[おな]じ気持[きも]ちだったよ」と言[い]ってくれました。その一言[ひとこと]で、私[わたし]の四年[よねん]間[かん]の迷[まよ]いが全部[ぜんぶ]消[き]えました。",
      "雨[あめ]はまだ降[ふ]っていましたが、二人[ふたり]の間[あいだ]には温[あたた]かい空気[くうき]が流[なが]れていました。傘[かさ]を一[ひと]つにして、少[すこ]しはにかみながら駅[えき]まで歩[ある]きました。",
      "思[おも]い切[き]って告[こく]白[はく]して本当[ほんとう]によかったです。あの時[とき]勇気[ゆうき]を出[だ]したおかげで、今[いま]もユカさんと一緒[いっしょ]にいます。"
    ],
    translation: [
      "Since my university days, I had always liked Yuka, who was in the same club. But I was too shy and couldn't express my feelings for a long time.",
      "As graduation approached, the thought of ending things without saying it filled me with regret. I told myself, \"If I don't say it, I might regret it forever.\"",
      "One rainy evening, as we walked to the station together, I finally made up my mind. My voice almost trembled, but I took a deep breath and squeezed out the words.",
      "The moment I said, \"Yuka, actually I've liked you for the past four years,\" she looked surprised and fell silent for a moment. I thought my heart would stop.",
      "Then, with a shy smile, Yuka said, \"I felt the same way.\" With that single sentence, all my four years of hesitation vanished.",
      "The rain was still falling, but a warm air flowed between us. We shared one umbrella and walked to the station, a little shy.",
      "I'm really glad I went ahead and confessed. Because I had courage at that time, I'm still together with Yuka now."
    ],
    vocab: [
      { word: "思い切って", reading: "おもいきって", meaning: "taking a bold step, going ahead" },
      { word: "告白", reading: "こくはく", meaning: "confession (of love)" },
      { word: "恥ずかしい", reading: "はずかしい", meaning: "shy, embarrassed" },
      { word: "伝える", reading: "つたえる", meaning: "to convey, to tell" },
      { word: "卒業", reading: "そつぎょう", meaning: "graduation" },
      { word: "後悔", reading: "こうかい", meaning: "regret" },
      { word: "決意", reading: "けつい", meaning: "resolution, decision" },
      { word: "震える", reading: "ふるえる", meaning: "to tremble" },
      { word: "驚く", reading: "おどろく", meaning: "to be surprised" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "微笑む", reading: "ほほえむ", meaning: "to smile softly" },
      { word: "勇気", reading: "ゆうき", meaning: "courage" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-23 — 深夜の電話 (A late-night call)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-23",
    title: "深[ふか]夜[や]の電話[でんわ]",
    titleReading: "ふかやのでんわ",
    level: "N3",
    summary: "A late-night phone call from home sends a daughter rushing to the hospital and teaches her the value of family.",
    estMinutes: 6,
    tags: ["family", "emergency", "hospital", "night"],
    body: [
      "夜[よる]の二[に]時[じ]ごろ、突然[とつぜん]携帯[けいたい]が鳴[な]りました。画面[がめん]には母[はは]の名前[なまえ]が表示[ひょうじ]されていました。こんな時間[じかん]に電話[でんわ]がかかってくるなんて、普通[ふつう]ではありません。",
      "不安[ふあん]で胸[むね]が締[し]め付[つ]けられながら、電話[でんわ]に出[で]ました。「もしもし、どうしたの」と聞[き]くと、母[はは]の声[こえ]は少[すこ]し震[ふる]えていました。",
      "母[はは]は「お父[とう]さんが急[きゅう]に具合[ぐあい]が悪[わる]くなって、救急[きゅうきゅう]車[しゃ]で病院[びょういん]に運[はこ]ばれたの」と話[はな]してくれました。私[わたし]はしばらく言葉[ことば]が出[で]ませんでした。",
      "すぐに車[くるま]を飛[と]ばして病院[びょういん]に向[む]かいました。夜[よる]の高速[こうそく]道路[どうろ]は空[す]いていて、ただヘッドライトの光[ひかり]が暗[くら]い中[なか]を伸[の]びていました。",
      "病院[びょういん]に着[つ]くと、父[ちち]は意識[いしき]を取[と]り戻[もど]していました。医者[いしゃ]によると、過労[かろう]が原因[げんいん]で倒[たお]れたらしいとのことでした。命[いのち]に別条[べつじょう]はないと聞[き]いて、私[わたし]はほっとしました。",
      "母[はは]は待合[まちあい]室[しつ]の椅子[いす]で、疲[つか]れた顔[かお]をして座[すわ]っていました。「もう大丈夫[だいじょうぶ]だよ」と声[こえ]をかけると、母[はは]は泣[な]きそうな顔[かお]で頷[うなず]きました。",
      "あの深夜[しんや]の電話[でんわ]の恐怖[きょうふ]は今[いま]でも忘[わす]れられません。でも、家族[かぞく]が無事[ぶじ]でいてくれることがどれほど有難[ありがた]いことか、改[あらた]めて感[かん]じました。"
    ],
    translation: [
      "Around two in the morning, my phone suddenly rang. My mother's name was displayed on the screen. A call at such an hour is far from normal.",
      "With anxiety gripping my chest, I answered. When I asked, \"Hello, what's wrong?\" my mother's voice was slightly trembling.",
      "My mother told me, \"Your father suddenly felt unwell and was taken to the hospital by ambulance.\" For a moment, no words came out of me.",
      "I immediately rushed to the hospital by car. The highway at night was empty, and only the headlights stretched through the darkness.",
      "When I arrived at the hospital, my father had regained consciousness. According to the doctor, he had collapsed from overwork. Hearing that his life was not in danger, I felt relieved.",
      "My mother was sitting in a chair in the waiting room with a tired face. When I said, \"It's okay now,\" she nodded with a face on the verge of tears.",
      "I still can't forget the fear of that late-night call. But I felt once again how grateful it is that my family is safe."
    ],
    vocab: [
      { word: "深夜", reading: "しんや", meaning: "late at night" },
      { word: "鳴る", reading: "なる", meaning: "to ring" },
      { word: "表示", reading: "ひょうじ", meaning: "display" },
      { word: "不安", reading: "ふあん", meaning: "anxiety, unease" },
      { word: "救急車", reading: "きゅうきゅうしゃ", meaning: "ambulance" },
      { word: "運ぶ", reading: "はこぶ", meaning: "to transport, to carry" },
      { word: "飛ばす", reading: "とばす", meaning: "to speed (a car)" },
      { word: "意識", reading: "いしき", meaning: "consciousness" },
      { word: "取り戻す", reading: "とりもどす", meaning: "to regain" },
      { word: "過労", reading: "かろう", meaning: "overwork" },
      { word: "命", reading: "いのち", meaning: "life" },
      { word: "有難い", reading: "ありがたい", meaning: "grateful, welcome" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-24 — 見知らぬ人の優しさ (A stranger's kindness)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-24",
    title: "見知[みし]らぬ人[ひと]の優[やさ]しさ",
    titleReading: "みしらぬひとのやさしさ",
    level: "N3",
    summary: "Lost in an unfamiliar town with a dead phone, a traveler is guided to the station by a kind old baker.",
    estMinutes: 5,
    tags: ["travel", "kindness", "stranger", "gratitude"],
    body: [
      "旅行[りょこう]で訪[おとず]れた見知[みし]らぬ町[まち]で、私[わたし]は道[みち]に迷[まよ]ってしまいました。スマートフォンの地図[ちず]も電池[でんち]が切[き]れて使[つか]えなくなっていました。",
      "あたりを見回[みまわ]すと、小[ちい]さなパン屋[や]がありました。勇気[ゆうき]を出[だ]して、中[なか]にいたおばあさんに「すみません、駅[えき]までどう行[い]けばいいですか」と尋[たず]ねました。",
      "おばあさんはとても丁寧[ていねい]に教[おし]えてくれました。でも、道[みち]が複雑[ふくざつ]で、私[わたし]にはよく分[わ]かりませんでした。困[こま]っていると、彼女[かのじょ]は「一緒[いっしょ]に行[い]きましょうか」と言[い]ってくれました。",
      "おばあさんは店[みせ]を少[すこ]し休んで、私[わたし]を駅[えき]まで案内[あんない]してくれました。歩[ある]きながら、彼女[かのじょ]はこの町[まち]の歴史[れきし]や昔[むかし]話[ばなし]を楽[たの]しそうに話[はな]してくれました。",
      "駅[えき]に着[つ]いた時[とき]、私[わたし]は「本当[ほんとう]にありがとうごさいました」と何[なん]度[ど]もお礼[れい]を言[い]いました。おばあさんは「いいのよ、またいつでもいらっしゃい」と笑顔[えがお]で答[こた]えました。",
      "別[わか]れ際[ぎわ]に、おばあさんはパンを二[ふた]つくれました。「道中[どうちゅう]のおやつに」という小[ちい]さな心[こころ]遣[づか]いが、胸[むね]に染[し]みました。",
      "見知[みし]らぬ人[ひと]の優[やさ]しさに出会[であ]うと、人間[にんげん]は悪[わる]くないと思[おも]えます。私[わたし]も誰[だれ]かに優[やさ]しくできる人[ひと]になろうと決[き]めました。"
    ],
    translation: [
      "In an unfamiliar town I visited on a trip, I got lost. The map on my smartphone had run out of battery and was unusable.",
      "Looking around, I found a small bakery. I gathered my courage and asked the old woman inside, \"Excuse me, how can I get to the station?\"",
      "The old woman explained very carefully. But the route was complicated, and I couldn't quite understand. When she saw I was troubled, she said, \"Shall I go with you?\"",
      "She took a short break from the shop and guided me to the station. As we walked, she happily told me about the history of this town and old tales.",
      "When we arrived at the station, I thanked her many times, saying, \"Thank you so much.\" With a smile, she replied, \"It's nothing, please come again anytime.\"",
      "As we parted, she gave me two pieces of bread. The small thoughtfulness of \"for a snack along the way\" touched my heart.",
      "When you encounter the kindness of a stranger, you feel that humans aren't so bad. I decided to become a person who can be kind to someone too."
    ],
    vocab: [
      { word: "見知らぬ", reading: "みしらぬ", meaning: "unfamiliar, unknown" },
      { word: "迷う", reading: "まよう", meaning: "to get lost" },
      { word: "尋ねる", reading: "たずねる", meaning: "to ask" },
      { word: "丁寧", reading: "ていねい", meaning: "polite, careful" },
      { word: "複雑", reading: "ふくざつ", meaning: "complicated" },
      { word: "案内", reading: "あんない", meaning: "guidance" },
      { word: "歴史", reading: "れきし", meaning: "history" },
      { word: "笑顔", reading: "えがお", meaning: "smile" },
      { word: "別れ際", reading: "わかれぎわ", meaning: "moment of parting" },
      { word: "心遣い", reading: "こころづかい", meaning: "thoughtfulness" },
      { word: "染みる", reading: "しめる", meaning: "to sink in, to touch" },
      { word: "優しさ", reading: "やさしさ", meaning: "kindness" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-25 — 忘れられた傘 (A forgotten umbrella)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-25",
    title: "忘[わす]れられた傘[かさ]",
    titleReading: "わすれられたかさ",
    level: "N3",
    summary: "A precious umbrella left on a train is found a week later, teaching a small lesson in habits and gratitude.",
    estMinutes: 4,
    tags: ["lost-item", "umbrella", "station", "gratitude"],
    body: [
      "雨季[うき]のある日[ひ]、私[わたし]は電車[でんしゃ]に傘[かさ]を忘[わす]れてしまいました。改札[かいさつ]を出[で]て初[はじ]めて気[き]づきましたが、もう列車[れっしゃ]は動[うご]き出[だ]していました。",
      "その傘[かさ]は、母[はは]が私[わたし]のために買[か]ってくれた大切[たいせつ]なものでした。青[あお]色[いろ]で、取[と]っ手[て]に小[ちい]さな花[はな]の模様[もよう]が入[はい]っていました。",
      "翌日[よくじつ]、駅[えき]の忘[わす]れ物[もの]係[がかり]に聞[き]いてみましたが、見[み]つかりませんでした。「もう誰[だれ]かが持[も]って行[い]ってしまったかもしれない」と思[おも]うと、泣[な]きそうになりました。",
      "一[いっ]週[しゅう]間[かん]ほど経[た]った後[あと]、駅[えき]員[いん]から電話[でんわ]がありました。「お客[きゃく]さまの傘[かさ]が見[み]つかりました」という連絡[れんらく]でした。私[わたし]は飛[と]び上[あ]がるほど嬉[うれ]しかったです。",
      "駅[えき]に行[い]くと、確[たし]かに私[わたし]の青[あお]い傘[かさ]がありました。係[かかり]の人[ひと]は「整理[せいり]していたら、座席[ざせき]の間[あいだ]から出[で]てきました」と笑[わら]って話[はな]してくれました。",
      "傘[かさ]を手[て]にした時[とき]、ただ嬉[うれ]しいだけではなく、見知[みし]らぬ誰[だれ]かがこの傘[かさ]を大切[たいせつ]に保管[ほかん]してくれていたことに感謝[かんしゃ]しました。",
      "それ以[い]来[らい]、私[わたし]は電車[でんしゃ]を降[お]りる前[まえ]に必[かなら]ず足[あし]元[もと]を確認[かくにん]するようにしました。小[ちい]さな習慣[しゅうかん]を変[か]えるきっかけになった傘[かさ]でした。"
    ],
    translation: [
      "One day during the rainy season, I left my umbrella on the train. I realized it only after exiting the gate, but the train had already started moving.",
      "That umbrella was a precious one my mother had bought for me. It was blue, with a small flower pattern on the handle.",
      "The next day, I asked the station's lost-and-found staff, but it wasn't found. Thinking, \"Maybe someone has already taken it,\" I almost cried.",
      "About a week later, I got a call from a station employee. The message was, \"We found your umbrella.\" I was so happy I could jump.",
      "When I went to the station, my blue umbrella was indeed there. The clerk laughed and said, \"When we were organizing, it came out from between the seats.\"",
      "Holding the umbrella in my hands, I wasn't just happy; I was grateful to some stranger who had carefully kept this umbrella.",
      "Since then, I always check around my feet before getting off the train. It was an umbrella that became the trigger to change a small habit."
    ],
    vocab: [
      { word: "傘", reading: "かさ", meaning: "umbrella" },
      { word: "忘れる", reading: "わすれる", meaning: "to forget" },
      { word: "改札", reading: "かいさつ", meaning: "ticket gate" },
      { word: "取っ手", reading: "とって", meaning: "handle" },
      { word: "模様", reading: "もよう", meaning: "pattern, design" },
      { word: "翌日", reading: "よくじつ", meaning: "next day" },
      { word: "忘れ物係", reading: "わすれものがかり", meaning: "lost-and-found staff" },
      { word: "飛び上がる", reading: "とびあがる", meaning: "to jump up" },
      { word: "保管", reading: "ほかん", meaning: "keeping, storage" },
      { word: "感謝", reading: "かんしゃ", meaning: "gratitude" },
      { word: "足元", reading: "あしもと", meaning: "around one's feet" },
      { word: "確認", reading: "かくにん", meaning: "confirmation, checking" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-26 — 冬の散歩 (A winter walk)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-26",
    title: "冬[ふゆ]の散歩[さんぽ]",
    titleReading: "ふゆのさんぽ",
    level: "N3",
    summary: "A cold winter walk through a bare park brings quiet beauty, a small chat with an old man, and a change of heart about winter.",
    estMinutes: 4,
    tags: ["winter", "walk", "park", "nature"],
    body: [
      "寒[さむ]い日[ひ]でしたが、私[わたし]はマフラーを巻[ま]いて近[ちか]くの公園[こうえん]を散歩[さんぽ]することにしました。冬[ふゆ]の空[そら]は澄[す]んでいて、空気[くうき]が冷[つめ]たくて気持[きも]ちよかったです。",
      "公園[こうえん]の木々[きぎ]は葉[は]を落[お]としていましたが、その枝[えだ]のシルエットが美[うつく]しくて、写真[しゃしん]を撮[と]りたくなりました。冬[ふゆ]にも冬[ふゆ]の良[よ]さがあると思[おも]いました。",
      "池[いけ]には薄[うす]い氷[こおり]が張[は]っていました。鴨[かも]が数[すう]羽[わ]、氷[こおり]の上[うえ]に立[た]ってじっとしていました。寒[さむ]さに強[つよ]い生[い]き物[もの]たちの姿[すがた]に、なぜか感心[かんしん]しました。",
      "ベンチに座[すわ]ると、近[ちか]くで犬[いぬ]を散歩[さんぽ]させているおじいさんが「寒[さむ]いのに元気[げんき]ですね」と話[はな]しかけてきました。私[わたし]たちは少[すこ]しだけ天気[てんき]の話[はなし]をしました。",
      "おじいさんは「冬[ふゆ]の散歩[さんぽ]は風邪[かぜ]を引[ひ]きにくいけれど、歩[ある]きすぎてはいけないよ」と教[おし]えてくれました。長[なが]い間[あいだ]生[い]きてきた人[ひと]の言葉[ことば]には、重[おも]みがありました。",
      "家[いえ]に帰[かえ]る頃[ころ]には、体[からだ]がぽかぽかと温[あたた]まっていました。冷[つめ]たい空気[くうき]の中[なか]を歩[ある]くことは、心[こころ]までリフレッシュしてくれるようです。",
      "冬[ふゆ]は寒[さむ]くて好[す]きではないと思[おも]っていましたが、この散歩[さんぽ]のおかげで少[すこ]しだけ冬[ふゆ]が好[す]きになりました。"
    ],
    translation: [
      "It was a cold day, but I decided to wrap a scarf and take a walk in a nearby park. The winter sky was clear, and the cold air felt refreshing.",
      "The trees in the park had lost their leaves, but the silhouette of their branches was beautiful, and I wanted to take photos. I thought that winter has its own good points.",
      "A thin layer of ice had formed on the pond. Several ducks stood motionless on the ice. For some reason, I admired the creatures that are strong against the cold.",
      "When I sat on a bench, an old man walking his dog nearby spoke to me, saying, \"You're energetic despite the cold.\" We talked a little about the weather.",
      "The old man told me, \"A winter walk makes it less likely to catch a cold, but you shouldn't walk too much.\" Words from someone who has lived long carried weight.",
      "By the time I got home, my body was comfortably warm. Walking in the cold air seems to refresh even the mind.",
      "I had thought I didn't like winter because it's cold, but thanks to this walk, I came to like winter a little."
    ],
    vocab: [
      { word: "散歩", reading: "さんぽ", meaning: "walk, stroll" },
      { word: "巻く", reading: "まく", meaning: "to wrap" },
      { word: "澄む", reading: "すむ", meaning: "to be clear (sky/water)" },
      { word: "枝", reading: "えだ", meaning: "branch" },
      { word: "氷", reading: "こおり", meaning: "ice" },
      { word: "張る", reading: "はる", meaning: "to form (a layer), to stretch" },
      { word: "鴨", reading: "かも", meaning: "duck" },
      { word: "感心", reading: "かんしん", meaning: "admiration" },
      { word: "風邪を引く", reading: "かぜをひく", meaning: "to catch a cold" },
      { word: "重み", reading: "おもみ", meaning: "weight, significance" },
      { word: "リフレッシュ", reading: "リフレッシュ", meaning: "refresh (oneself)" },
      { word: "温まる", reading: "あたたまる", meaning: "to warm up" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-27 — 新しい始まり (A new beginning)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-27",
    title: "新[あたら]しい始[はじ]まり",
    titleReading: "あたらしいはじまり",
    level: "N3",
    summary: "A thirty-something changes jobs in April, braves the first day, and grows with the help of a kind boss and colleague.",
    estMinutes: 5,
    tags: ["job", "new-start", "growth", "courage"],
    body: [
      "四月[しがつ]、私[わたし]は新[あたら]しい職場[しょくば]に転職[てんしょく]しました。三十歳[さんじゅっさい]を過[す]ぎてからの再[さい]出発[しゅっぱつ]は、不安[ふあん]と期待[きたい]が混[ま]じり合[あ]っていました。",
      "初出社[しょっしゅっしゃ]の日[ひ]、緊張[きんちょう]で胸[むね]がいっぱいでした。誰[だれ]も知[し]らない社員[しゃいん]たちの中[なか]に入[はい]っていくのは、勇気[ゆうき]が要[い]ることでした。",
      "上司[じょうし]の山田[やまだ]さんは「何[なに]でも聞[き]いていいよ」と優[やさ]しく言[い]ってくれました。同期[どうき]の佐藤[さとう]さんも、昼[ひる]ご飯[はん]に一緒[いっしょ]に行[い]ってくれました。",
      "最初[さいしょ]は仕事[しごと]の用語[ようご]が分[わ]からず、毎日[まいにち]メモを取[と]るのがやっとでした。でも、少[すこ]しずつ覚[おぼ]えていくうちに、自信[じしん]が持[も]てるようになりました。",
      "三[さん]か月[げつ]が経[た]った頃[ころ]、山田[やまだ]さんから「初[はじ]めての頃[ころ]に比[くら]べて、ずいぶん成長[せいちょう]したね」と褒[ほ]められました。私[わたし]は嬉[うれ]しくて、もっと頑張[がんば]ろうと思[おも]いました。",
      "転職[てんしょく]を決[き]めた時[とき]は迷[まよ]いました。でも、新[あたら]しい環境[かんきょう]に飛[と]び込[こ]んだおかげで、自分[じぶん]の可能[かのう]性[せい]が広[ひろ]がった気[き]がします。",
      "新[あたら]しい始[はじ]まりは誰[だれ]にでも怖[こわ]いものです。でも、その一歩[いっぽ]を踏[ふ]み出[だ]すことでしか見[み]えない景色[けしき]があることを、私[わたし]は学[まな]びました。"
    ],
    translation: [
      "In April, I changed jobs to a new workplace. Starting over after turning thirty was a mix of anxiety and anticipation.",
      "On my first day at work, my chest was full of tension. Stepping into a group of employees I didn't know required courage.",
      "My boss, Mr. Yamada, kindly told me, \"You can ask me anything.\" A colleague who joined at the same time, Mr. Sato, also went to lunch with me.",
      "At first, I didn't understand the work jargon, and just taking notes was all I could manage. But as I gradually learned, I started to feel confident.",
      "Around three months later, Mr. Yamada praised me, saying, \"You've grown a lot compared to when you started.\" I was happy and felt like working even harder.",
      "When I decided to change jobs, I hesitated. But thanks to jumping into a new environment, I feel my possibilities have expanded.",
      "A new beginning is scary for anyone. But I learned that there are views you can only see by taking that first step."
    ],
    vocab: [
      { word: "転職", reading: "てんしょく", meaning: "job change" },
      { word: "再出発", reading: "さいしゅっぱつ", meaning: "fresh start" },
      { word: "混じり合う", reading: "まじりあう", meaning: "to mix together" },
      { word: "緊張", reading: "きんちょう", meaning: "tension, nervousness" },
      { word: "上司", reading: "じょうし", meaning: "boss, superior" },
      { word: "同期", reading: "どうき", meaning: "same-year colleague" },
      { word: "用語", reading: "ようご", meaning: "terminology, jargon" },
      { word: "自信", reading: "じしん", meaning: "confidence" },
      { word: "成長", reading: "せいちょう", meaning: "growth" },
      { word: "飛び込む", reading: "とびこむ", meaning: "to dive into" },
      { word: "踏み出す", reading: "ふみだす", meaning: "to step forward" },
      { word: "可能性", reading: "かのうせい", meaning: "possibility" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-28 — 別れの辛さ (A difficult goodbye)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-28",
    title: "別[わか]れの辛[つら]さ",
    titleReading: "わかれのつらさ",
    level: "N3",
    summary: "After a mother's long illness and quiet passing, her notebook helps a daughter face grief and carry her love forward.",
    estMinutes: 6,
    tags: ["family", "loss", "grief", "memory"],
    body: [
      "母[はは]は長[なが]い間[あいだ]病気[びょうき]と闘[たたか]っていましたが、去年[きょねん]の秋[あき]、静[しず]かに息[いき]を引[ひ]き取[と]りました。別[わか]れがこんなに辛[つら]いものだとは、想像[そうぞう]していませんでした。",
      "葬式[そうしき]の日[ひ]、母[はは]の顔[かお]は穏[おだ]やかでした。痛[いた]みから解放[かいほう]されたようで、少[すこ]しだけ救[すく]われた気持[きも]ちになりました。",
      "母[はは]が遺[のこ]してくれた手帳[てちょう]を見[み]つけました。そこには、毎日[まいにち]の些細[ささい]な出来事[できごと]や、私[わたし]への感[かん]じたことが書[か]いてありました。「今日[きょう]は花[はな]が咲[さ]いて嬉[うれ]しかった」などという短[みじか]い文[ぶん]が並[なら]んでいました。",
      "読[よ]み進[すす]めるうちに、母[はは]が私[わたし]のことをどれほど思[おも]ってくれていたかが分[わ]かりました。胸[むね]が熱[あつ]くなって、涙[なみだ]が止[と]まらなくなりました。",
      "友達[ともだち]が「悲[かな]しむ時間[じかん]も大切[たいせつ]だよ」と慰[なぐさ]めてくれました。確[たし]かに、悲[かな]しみから逃[に]げずに向[む]き合[あ]うことが、乗[の]り越[こ]えるためには必要[ひつよう]なのかもしれません。",
      "母[はは]は「ありがとう」という言葉[ことば]をよく使[つか]う人[ひと]でした。私[わたし]も母[はは]のように、周[まわ]りの人[ひと]に感謝[かんしゃ]を伝[つた]える人[ひと]になろうと思[おも]いました。",
      "別[わか]れは辛[つら]いけれど、母[はは]が残[のこ]してくれた愛情[あいじょう]は、これからも私[わたし]の中[なか]に生[い]き続[つづ]けます。今日[きょう]も静[しず]かに母[はは]を思[おも]い出[だ]しています。"
    ],
    translation: [
      "My mother had been fighting illness for a long time, but last autumn, she quietly passed away. I hadn't imagined that parting could be so painful.",
      "On the day of the funeral, my mother's face was calm. She seemed freed from pain, and I felt a little relieved.",
      "I found a notebook my mother had left behind. In it, she had written about small daily events and her feelings toward me. Short sentences like \"I was happy to see flowers bloom today\" lined up.",
      "As I read on, I realized how much my mother had thought of me. My chest grew hot, and tears wouldn't stop.",
      "A friend comforted me, saying, \"Time to grieve is important too.\" Indeed, facing grief without running away might be necessary to overcome it.",
      "My mother often used the word \"thank you.\" I decided to become a person who expresses gratitude to people around me, just like her.",
      "Parting is painful, but the love my mother left behind will continue to live within me. Today, too, I quietly remember my mother."
    ],
    vocab: [
      { word: "闘う", reading: "たたかう", meaning: "to fight (illness)" },
      { word: "息を引き取る", reading: "いきをひきとる", meaning: "to pass away" },
      { word: "穏やか", reading: "おだやか", meaning: "calm, peaceful" },
      { word: "解放", reading: "かいほう", meaning: "release, liberation" },
      { word: "救われる", reading: "すくわれる", meaning: "to be saved, relieved" },
      { word: "手帳", reading: "てちょう", meaning: "notebook" },
      { word: "些細", reading: "ささい", meaning: "trivial, small" },
      { word: "読み進める", reading: "よみすすめる", meaning: "to read on" },
      { word: "慰める", reading: "なぐさめる", meaning: "to comfort" },
      { word: "向き合う", reading: "むきあう", meaning: "to face, to confront" },
      { word: "乗り越える", reading: "のりこえる", meaning: "to overcome" },
      { word: "愛情", reading: "あいじょう", meaning: "love, affection" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-29 — 共に食べる喜び (A shared meal)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-29",
    title: "共[とも]に食[た]べる喜[よろこ]び",
    titleReading: "ともにたべるよろこび",
    level: "N3",
    summary: "After a year apart, three university friends gather around a hot pot, sharing worries, laughter, and warmth.",
    estMinutes: 5,
    tags: ["friends", "meal", "gathering", "warmth"],
    body: [
      "久[ひさ]しぶりに、大学[だいがく]時代[じだい]の友人[ゆうじん]三人[さんにん]を家[いえ]に招[まね]きました。誰[だれ]も忙[いそが]しかったので、集[あつ]まるのは一年[いちねん]ぶりでした。",
      "私[わたし]は前[まえ]の日[ひ]からメニューを考[かんが]えて、一生懸命[いっしょうけんめい]料理[りょうり]を作[つく]りました。主役[しゅやく]は鍋[なべ]料理[りょうり]で、部屋[へや]中[じゅう]にいい匂[にお]いが広[ひろ]がりました。",
      "友達[ともだち]たちが来[き]て、食[しょく]卓[たく]を囲[かこ]んだ瞬間[しゅんかん]、自然[しぜん]に笑顔[えがお]がこぼれました。「久[ひさ]しぶり」「元気[げんき]だった」という挨拶[あいさつ]の後[あと]、話[はなし]は尽[つ]きませんでした。",
      "鍋[なべ]を食[た]べながら、近[きん]況[きょう]を報告[ほうこく]し合[あ]いました。仕事[しごと]の悩[なや]みや、恋愛[れんあい]の話[はなし]、将来[しょうらい]の夢[ゆめ]など、普段[ふだん]は言[い]えないことも自然[しぜん]に言[い]えました。",
      "「この味[あじ]、お母[かあ]さんのと似[に]ているね」と、友人[ゆうじん]の一人[ひとり]が言[い]ってくれました。私[わたし]は嬉[うれ]しくて、料理[りょうり]を褒[ほ]められたこと以上[いじょう]に、心[こころ]が通[つう]じ合[あ]った気持[きも]ちになりました。",
      "食[た]べ終[お]わった後[あと]、みんなでコーヒーを飲[の]みながら、学生時代[がくせいじだい]の写真[しゃしん]を見[み]ました。「あの時[とき]は若[わか]かったね」と笑[わら]い合[あ]い、温[あたた]かい時間[じかん]が流[なが]れました。",
      "一人[ひとり]で食[た]べる食事[しょくじ]も悪[わる]くありませんが、誰[だれ]かと共[とも]に食[た]べる喜[よろこ]びは格別[かくべつ]です。食[しょく]卓[たく]を通[つう]じて、人[ひと]と人[ひと]の心[こころ]は深[ふか]く結[むす]びつくのだと感[かん]じました。"
    ],
    translation: [
      "For the first time in a while, I invited three friends from my university days to my house. Since everyone was busy, it had been a year since we last gathered.",
      "I planned the menu from the day before and cooked with all my effort. The centerpiece was a hot pot, and a delicious smell spread throughout the room.",
      "The moment my friends arrived and we sat around the table, smiles naturally appeared. After greetings like \"It's been a while\" and \"How have you been?\", the conversation never ran out.",
      "While eating the hot pot, we updated each other on recent news. Work troubles, romance stories, dreams for the future — things we usually couldn't say came out naturally.",
      "One friend said, \"This taste is similar to my mother's.\" I was happy, and beyond being praised for the cooking, I felt our hearts had connected.",
      "After we finished eating, we drank coffee together and looked at photos from our student days. We laughed together, saying, \"We were young back then,\" and a warm time passed.",
      "Eating alone isn't bad, but the joy of sharing a meal with someone is exceptional. I felt that through the dining table, people's hearts are deeply connected."
    ],
    vocab: [
      { word: "招く", reading: "まねく", meaning: "to invite" },
      { word: "主役", reading: "しゅやく", meaning: "main role, centerpiece" },
      { word: "匂い", reading: "におい", meaning: "smell" },
      { word: "食卓", reading: "しょくたく", meaning: "dining table" },
      { word: "囲む", reading: "かこむ", meaning: "to surround, to sit around" },
      { word: "近況", reading: "きんきょう", meaning: "recent news" },
      { word: "報告", reading: "ほうこく", meaning: "report" },
      { word: "尽きる", reading: "つきる", meaning: "to run out, to end" },
      { word: "通じ合う", reading: "つうじあう", meaning: "to understand each other" },
      { word: "格別", reading: "かくべつ", meaning: "exceptional, special" },
      { word: "結びつく", reading: "むすびつく", meaning: "to be connected" },
      { word: "恋愛", reading: "れんあい", meaning: "romance" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n3-30 — 突然の嵐 (A sudden storm)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-30",
    title: "突[とつ]然[ぜん]の嵐[あらし]",
    titleReading: "とつぜんのあらし",
    level: "N3",
    summary: "A sunny seaside trip turns into a sudden storm, but a kind eatery owner's warm tea turns the scare into a fond memory.",
    estMinutes: 4,
    tags: ["storm", "travel", "shelter", "kindness"],
    body: [
      "昨日[きのう]、海[うみ]辺[べ]の町[まち]を旅行[りょこう]していた時[とき]、突然[とつぜん]の嵐[あらし]に見[み]舞[ま]われました。午後[ごご]までは晴[は]れていたのに、夕方[ゆうがた]になると空[そら]が暗[くら]くなりました。",
      "強[つよ]い風[かぜ]が吹[ふ]き始[はじ]め、大粒[おおつぶ]の雨[あめ]が降[ふ]ってきました。私[わたし]は急[いそ]いで近[ちか]くの食堂[しょくどう]に逃[に]げ込[こ]みましたが、服[ふく]はもうびしょ濡[ぬ]れでした。",
      "食堂[しょくどう]の中[なか]では、他[ほか]にも雨[あま]宿[やど]りしている人[ひと]たちがいました。みんな窓[まど]の外[そと]を気[き]にしながら、温[あたた]かい飲[の]み物[もの]を飲[の]んでいました。",
      "店主[てんしゅ]のおばさんは「怖[こわ]かったでしょう」と言[い]って、温[あたた]かいお茶[ちゃ]をくれました。外[そと]の様子[ようす]を気[き]遣[づか]ってくれる言葉[ことば]に、心[こころ]が安[やす]らぎました。",
      "窓[まど]の外[そと]では、木々[きぎ]が激[はげ]しく揺[ゆ]れていました。雷[かみなり]が鳴[な]り響[ひび]くたびに、店内[てんない]の子供[こども]たちは少[すこ]し怖[こわ]がっていました。",
      "一時間[いちじかん]ほどして、嵐[あらし]は次第[しだい]に収[おさ]まっていきました。空[そら]の隙[すき]間[ま]から少[すこ]しずつ光[ひかり]が漏[も]れてきて、町[まち]はまた穏[おだ]やかさを取[と]り戻[もど]しました。",
      "突[とつ]然[ぜん]の嵐[あらし]に驚[おどろ]かされましたが、知[し]らない食堂[しょくどう]で温[あたた]かいもてなしを受[う]けたおかげで、いい思[おも]い出[で]として残[のこ]りました。"
    ],
    translation: [
      "Yesterday, while traveling in a seaside town, we were struck by a sudden storm. Until the afternoon it had been sunny, but by evening the sky grew dark.",
      "Strong winds began to blow, and large drops of rain fell. I hurriedly took refuge in a nearby eatery, but my clothes were already soaked.",
      "Inside the eatery, there were other people sheltering from the rain too. Everyone was watching the window with concern while drinking warm drinks.",
      "The shop owner said, \"You must have been scared,\" and gave me warm tea. Her words, showing concern for the situation outside, brought peace to my heart.",
      "Outside the window, trees were shaking violently. Every time thunder rumbled, the children in the shop were a little scared.",
      "After about an hour, the storm gradually subsided. Light leaked little by little through gaps in the sky, and the town regained its calm.",
      "I was startled by the sudden storm, but thanks to receiving warm hospitality at an unfamiliar eatery, it remained as a good memory."
    ],
    vocab: [
      { word: "嵐", reading: "あらし", meaning: "storm" },
      { word: "見舞う", reading: "みまう", meaning: "to strike, to visit (trouble)" },
      { word: "大粒", reading: "おおつぶ", meaning: "large (raindrops)" },
      { word: "雨宿り", reading: "あまやどり", meaning: "taking shelter from rain" },
      { word: "逃げ込む", reading: "にげこむ", meaning: "to take refuge, to dash into" },
      { word: "びしょ濡れ", reading: "びしょぬれ", meaning: "soaked, drenched" },
      { word: "店主", reading: "てんしゅ", meaning: "shopkeeper" },
      { word: "気遣う", reading: "きづかう", meaning: "to worry about, to be considerate" },
      { word: "安らぐ", reading: "やすらぐ", meaning: "to find peace, to relax" },
      { word: "鳴り響く", reading: "なりひびく", meaning: "to resound, to rumble" },
      { word: "収まる", reading: "おさまる", meaning: "to subside, to settle" },
      { word: "もてなし", reading: "もてなし", meaning: "hospitality" }
    ]
  }
];
