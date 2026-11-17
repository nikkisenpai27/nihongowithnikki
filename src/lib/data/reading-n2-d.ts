import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N2-level reading passages with comprehension questions.

export const readingN2D: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n2-31 — The future of Japanese agriculture
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-31",
    title: "日本[にほん]農業[のうぎょう]の未来[みらい]を考[かんが]える",
    titleReading: "にほんのうぎょうのみらいをかんがえる",
    level: "N2",
    summary: "An analysis of Japanese agriculture's structural crisis — aging farmers, abandoned farmland, trade liberalization, smart agriculture, corporate entry, organic and export strategies, and the need to integrate tradition with innovation.",
    estMinutes: 11,
    tags: ["agriculture", "policy", "smart farming", "trade liberalization", "food security"],
    body: [
      "日本[にほん]の農業[のうぎょう]は今[いま]、深刻[しんこく]な危機[きき]に直面[ちょくめん]している。農業[のうぎょう]人口[じんこう]は年[ねん]々[ねん]減少[げんしょう]を続[つづ]け、平均[へいきん]年齢[ねんれい]はすでに六十[ろくじゅう]歳[さい]を超[こ]えている。後継[こうけい]者[しゃ]がいないため、耕作[こうさく]放棄[ほうき]地[ち]が全国[ぜんこく]で拡大[かくだい]する一方[いっぽう]だ。かつて村[むら]社会[しゃかい]を支[ささ]えた農業[のうぎょう]という営[いとな]みが、今[いま]や消[しょう]滅[めつ]の危機[きき]に瀕[ひん]していると言[い]っても過言[かごん]ではない。これまでの農業[のうぎょう]政策[せいさく]が見直[みなお]しを余儀[よぎ]なくされている所以[ゆえん]である。",
      "問題[もんだい]の根[ね]は深[ふか]い。日本[にほん]の農地[のうち]は零細[れいさい]で分[ぶん]散[さん]しており、規模[きぼ]の利益[りえき]が働[はたら]きにくい。機械[きかい]化[か]を進[すす]めようにも、狭[せま]い畑[はたけ]では大型[おおがた]機械[きかい]が使[つか]えない。そのため、生産[せいさん]コスト[こすと]が米[べい]国[こく]や豪[ごう]州[しゅう]と比[くら]べて割高[わりだか]にならざるを得[え]ない。加[くわ]えて、農産[のうさん]物[ぶつ]の価格[かかく]が長年[ながねん]据[す]え置[お]かれた結果[けっか]、農家[のうか]の収入[しゅうにゅう]は低[てい]水準[すいじゅん]に固定[こてい]化[か]してしまった。若[わか]い世代[せだい]が農業[のうぎょう]を選[えら]ばないのも無理[むり]はないと言[い]えるだろう。",
      "こうした状況[じょうきょう]に追[お]い打[う]ちをかけるように、貿易[ぼうえき]自由化[じゆうか]の波[なみ]が押[お]し寄[よ]せている。環[かん]太平洋[たいへいよう]連携[れんけい]協定[きょうてい]などにより、関税[かんぜい]が段階[だんかい]的[てき]に引[ひ]き下[さ]げられ、外国[がいこく]産[さん]農産[のうさん]物[ぶつ]が国内[こくない]市場[しじょう]に流入[りゅうにゅう]しつつある。国内[こくない]の農家[のうか]は品質[ひんしつ]で勝負[しょうぶ]するしかないが、価格[かかく]競争[きょうそう]力[りょく]の差[さ]は埋[う]めがたい。農業[のうぎょう]保護[ほご]の名[めい]目[もく]のもとに現状[げんじょう]を維持[いじ]し続[つづ]けることは、もはや通用[つうよう]しなくなっている。",
      "逆[ぎゃく]に、危機[きき]を好機[こうき]と捉[とら]える動[うご]きも出[で]てきた。スマート[すまーと]農業[のうぎょう]である。ドローン[どろーん]による農薬[のうやく]散布[さんぷ]、自動[じどう]走行[そうこう]トラクター[とらくたー]、センサー[せんさー]で土壌[どじょう]の水分[すいぶん]を管理[かんり]するシステム[しすてむ]など、技術[ぎじゅつ]革新[かくしん]が進[すす]んでいる。高齢[こうれい]な農家[のうか]でも負担[ふたん]を減[へ]らして作業[さぎょう]を続[つづ]けられる仕組[しく]みである。技術[ぎじゅつ]が人[ひと]の不足[ぶそく]を補[おぎな]う構図[こうず]は、他[た]の産業[さんぎょう]にも通[つう]じるものがある。",
      "さらに、法人[ほうじん]参入[さんにゅう]が進[すす]み、農業[のうぎょう]が企業[きぎょう]的[てき]な経営[けいえい]へと変[か]わりつつある。新[あたら]しく農業[のうぎょう]に挑[いど]む若[わか]い人[ひと]たちも現[あらわ]れた。彼[かれ]らは農産[のうさん]物[ぶつ]の直売[ちょくばい]だけでなく、ネット[ねっと]通販[つうはん]や体験[たいけん]農園[のうえん]など、多様[たよう]な事業[じぎょう]を展開[てんかい]する。従来[じゅうらい]の農業[のうぎょう]像[ぞう]を覆[くつがえ]す動[うご]きである。ただ、大規模[だいきぼ]化[か]が地方[ちほう]の雇用[こよう]や生態[せいたい]系[けい]に与[あた]える影響[えいきょう]も慎重[しんちょう]に検討[けんとう]されるべきである。",
      "一方[いっぽう]で、有機[ゆうき]農業[のうぎょう]や特産[とくさん]品[ひん]の輸出[ゆしゅつ]戦略[せんりゃく]も注目[ちゅうもく]を集[あつ]めている。国内[こくない]消費[しょうひ]が頭[あたま]打[う]ちとなる中[なか]、海外[かいがい]の富裕[ふゆう]層[そう]に向[む]けた高[たか]級[きゅう]和牛[わぎゅう]や果物[くだもの]は強[つよ]い競争[きょうそう]力[りょく]を持[も]つ。環境[かんきょう]に優[やさ]しい農業[のうぎょう]は、持続[じぞく]可能[かのう]な社会[しゃかい]の構築[こうちく]にも資[し]する。農業[のうぎょう]は単[たん]なる産業[さんぎょう]ではなく、文化[ぶんか]と自然[しぜん]を繋[つな]ぐ営[いとな]みでもあるのだ。",
      "未来[みらい]の日本[にほん]農業[のうぎょう]が歩[ある]むべき道[みち]は、伝統[でんとう]と革新[かくしん]の統合[とうごう]にある。技術[ぎじゅつ]に頼[たよ]る一方[いっぽう]で、土地[とち]と人[ひと]の結[むす]びつきを粗[そ]末[まつ]にしてはならない。食[しょく]糧[りょう]自給[じきゅう]率[りつ]の確保[かくほ]という視点[してん]からも、農業[のうぎょう]を戦略[せんりゃく]的[てき]に支[ささ]える体制[たいせい]が欠[か]かせない。変化[へんか]を恐[おそ]れることなく、しかし焦[あせ]らずに、着実[ちゃくじつ]に新[あたら]しい農業[のうぎょう]のかたちを築[きず]いていくことが求[もと]められている。"
    ],
    translation: [
      "Japanese agriculture now faces a serious crisis. The agricultural population continues to decline year by year, and the average age has already exceeded sixty. With no successors, abandoned farmland keeps expanding across the country. To say that farming, the livelihood that once sustained village society, is now on the brink of extinction is no exaggeration. This is precisely why agricultural policy is being forced to undergo review.",
      "The roots of the problem run deep. Japan's farmland is fragmented and small, so economies of scale do not work well. Even if one tries to mechanize, large machinery cannot be used in narrow fields. As a result, production costs are inevitably higher than those in the United States or Australia. In addition, with agricultural prices kept unchanged for many years, farmers' incomes have been locked at a low level. It is no wonder that younger generations do not choose farming.",
      "Adding insult to injury, the wave of trade liberalization is washing ashore. Under agreements such as the Trans-Pacific Partnership, tariffs are being lowered in stages, and foreign agricultural products are flowing into the domestic market. Domestic farmers have no choice but to compete on quality, but the gap in price competitiveness is hard to close. Maintaining the status quo under the pretext of agricultural protection no longer holds.",
      "Conversely, moves are emerging to view the crisis as an opportunity. That is smart agriculture. Technological innovations are advancing, including pesticide spraying by drones, autonomous tractors, and systems that manage soil moisture with sensors. These are arrangements that allow even elderly farmers to continue working with reduced burden. The pattern of technology compensating for labor shortages resonates with other industries as well.",
      "Furthermore, corporate entry is progressing, and agriculture is shifting toward enterprise-style management. Young people taking on farming anew have also appeared. They undertake not only direct sales of produce but also diverse businesses such as online shopping and experiential farms. This is a movement overturning the conventional image of agriculture. However, the impact of scale expansion on local employment and ecosystems should also be carefully examined.",
      "On the other hand, organic farming and export strategies for specialty products are also attracting attention. As domestic consumption plateaus, premium wagyu beef and fruit aimed at wealthy overseas consumers hold strong competitiveness. Environmentally friendly farming also contributes to building a sustainable society. Agriculture is not merely an industry; it is also an activity that connects culture and nature.",
      "The path that the future of Japanese agriculture should take lies in integrating tradition and innovation. While relying on technology, we must not treat the bond between land and people lightly. From the standpoint of securing the food self-sufficiency ratio as well, a system to strategically support agriculture is indispensable. Without fearing change, but without rushing, we are called upon to steadily build a new form of agriculture."
    ],
    questions: [
      {
        q: "According to the passage, what is the main cause of the crisis in Japanese agriculture?",
        choices: ["Aging farmers and lack of successors", "Too many young people entering farming", "Excess farmland being created", "Government subsidies being too generous"],
        answerIndex: 0,
        explanation: "The passage states that the agricultural population is declining year by year, the average age has exceeded sixty, and with no successors, abandoned farmland is expanding."
      },
      {
        q: "Why can't Japanese farmers lower their production costs easily?",
        choices: ["Farmland is fragmented and small, making mechanization difficult", "They use too many workers", "They refuse to use modern machinery", "They sell produce at too high prices"],
        answerIndex: 0,
        explanation: "The text explains that Japan's farmland is 零細で分散 (small and fragmented), so 大型機械が使えない (large machinery cannot be used), making costs inevitably higher."
      },
      {
        q: "According to the passage, what is the effect of trade liberalization?",
        choices: ["It helps Japanese farmers export more easily", "It forces tariffs down, letting foreign produce flow into the domestic market", "It has no real impact on Japanese farms", "It raises the price of Japanese produce"],
        answerIndex: 1,
        explanation: "The passage states that under agreements such as the TPP, 関税が段階的に引き下げられ、外国産農産物が国内市場に流入しつつある (tariffs are being lowered and foreign produce is flowing in)."
      },
      {
        q: "What does the passage identify as smart agriculture's main benefit?",
        choices: ["It reduces the burden on elderly farmers, allowing them to keep working", "It increases the number of young farmers", "It eliminates the need for farmland", "It replaces all human labor with robots"],
        answerIndex: 0,
        explanation: "The text states that with drones, autonomous tractors, and sensors, 高齢な農家でも負担を減らして作業を続けられる (even elderly farmers can continue working with reduced burden)."
      },
      {
        q: "What does the author argue about the future of Japanese agriculture?",
        choices: ["It should preserve all traditions unchanged", "It should rely only on technology and abandon tradition", "It should integrate tradition with innovation without rushing", "It should focus exclusively on exports"],
        answerIndex: 2,
        explanation: "The final paragraph states that 未来の日本農業が歩むべき道は、伝統と革新の統合にある (the path lies in integrating tradition and innovation), and calls for change without rushing (焦らずに)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-32 — A story about a social media scandal
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-32",
    title: "拡散[かくさん]される罪[つみ]",
    titleReading: "かくさんされるつみ",
    level: "N2",
    summary: "A young influencer named Hana posts a careless remark while drunk, triggering an online firestorm. Sponsors pull out, her apology is ridiculed, and she must rebuild her life from a small cooking class, illustrating the weight of words in the digital age.",
    estMinutes: 9,
    tags: ["social media", "scandal", "online mob", "public shaming", "redemption"],
    body: [
      "花[はな]は二十[にじゅう]代[だい]前半[ぜんはん]のインフルエンサー[いんふるえんさー]だった。日常[にちじょう]の料理[りょうり]や旅行[りょこう]の写真[しゃしん]を投稿[とうこう]するだけの気[き]軽[がる]な存在[そんざい]だったが、その親[した]しみやすい人柄[ひとがら]が受[う]け、フォロワー[ふぉろわー]は百[ひゃく]万[まん]人[にん]を超[こ]えていた。彼女[かのじょ]の投稿[とうこう]は若[わか]い女性[じょせい]のライフスタイル[らいふすたいる]の規範[きはん]とさえ言[い]われていた。しかし、その華[はな]やかな日常[にちじょう]の裏[うら]で、彼女[かのじょ]はプレッシャー[ぷれっしゃー]に耐[た]えきれずにいた。",
      "ある夜[よる]、花[はな]は酒[さけ]に酔[よ]った勢[いきお]いで、嫌[いや]がる同[どう]業者[ぎょうしゃ]を皮肉[ひにく]るような投稿[とうこう]をしてしまった。一[ひと]度[ど]投稿[とうこう]すれば二[ふた]度[ど]と消[け]せないとは分[わ]かっていながら、彼女[かのじょ]は送信[そうしん]ボタン[ぼたん]を押[お]してしまったのである。わずか数秒[すうびょう]の判断[はんだん]ミス[みす]が、彼女[かのじょ]の人生[じんせい]を根[ね]底[てい]から覆[くつがえ]すことになるとは、その時[とき]の彼女[かのじょ]は想像[そうぞう]すらしていなかった。",
      "投稿[とうこう]は瞬[またた]く間[ま]に拡散[かくさん]された。翌朝[よくあさ]にはすでにトレンド[とれんど]に入[はい]り、怒[いか]りの声[こえ]が殺到[さっとう]した。企業[きぎょう]側[がわ]は次[つぎ]々[つぎ]とスポンサー[すぽんさー]契約[けいやく]を打[う]ち切[き]り、テレビ[てれび]の出演[しゅつえん]も取[と]り消[け]された。花[はな]のフォロワー[ふぉろわー]は一日[いちにち]で二十[にじゅう]万[まん]人[にん]減[へ]った。見[み]えない群衆[ぐんしゅう]の裁判[さいばん]は、冷酷[れいひつ]なほど迅速[じんそく]だった。ネット[ねっと]という広場[ひろば]は、一[ひと]方[ぽう]的[てき]な断罪[だんざい]の場[ば]と化[か]した。",
      "三[みっ]日[か]後[ご]、花[はな]は記者[きしゃ]会見[かいけん]を開[ひら]いた。涙[なみだ]を流[なが]しながら謝罪[しゃざい]する彼女[かのじょ]の姿[すがた]は、しかし同情[どうじょう]を引[ひ]くどころか、かえって非難[ひなん]を募[つの]らせる結果[けっか]となった。涙[なみだ]は演技[えんぎ]だ、謝罪[しゃざい]は義務[ぎむ]的[てき]だ、と人々[ひとびと]は書[か]き込[こ]んだ。一度[いちど]失[うしな]った信頼[しんらい]を回復[かいふく]することの困難[こんなん]さを、彼女[かのじょ]は身[み]をもって知[し]ることになった。",
      "この事件[じけん]は、ネット[ねっと]時代[じだい]の群衆[ぐんしゅう]心理[しんり]の恐[おそ]ろしさを浮[う]き彫[ぼ]りにした。画面[がめん]の向[む]こうにいる人[ひと]が本当[ほんとう]の人[ひと]であることを忘[わす]れ、人々[ひとびと]は正義[せいぎ]の名[な]のもとに攻撃[こうげき]を繰[く]り返[かえ]す。一[ひと]つの過[あやま]ちに対[たい]して、はるかに大[おお]きな罰[ばつ]が与[あた]えられることも珍[めずら]しくない。公開[こうかい]の場[ば]であることを忘[わす]れた言[こと]葉[ば]は、刃[やいば]となって人[ひと]を傷[きず]つける。",
      "その後[ご]、花[はな]は活動[かつどう]を休止[きゅうし]し、静[しず]かに自己[じこ]を振[ふ]り返[かえ]る日[ひ]々[び]を送[おく]った。半年[はんとし]後[ご]、彼女[かのじょ]は小[ちい]さな地域[ちいき]の料理[りょうり]教室[きょうしつ]から再[さい]出発[しゅっぱつ]した。注目[ちゅうもく]されることではなく、人[ひと]の役[やく]に立[た]つことを第一[だいいち]に考[かんが]えるようになったという。過[あやま]ちから学[まな]ぶ姿勢[しせい]は、少[すく]なくない人々[ひとびと]の心[こころ]を動[うご]かした。",
      "デジタル[でじたる]の時代[じだい]において、言[こと]葉[ば]は一度[いちど]放[はな]たれれば二[ふた]度[ど]と戻[もど]らない。その重[おも]みを自覚[じかく]することなく、安易[あんい]に投稿[とうこう]を繰[く]り返[かえ]す社会[しゃかい]は、いつか誰[だれ]もが傷[きず]つけ合[あ]う場[ば]に変[か]わってしまう。花[はな]の物語[ものがたり]は、一[ひと]つの警告[けいこく]として私[わたし]たちに投[な]げかけられている。拡散[かくさん]されるのは情報[じょうほう]だけではなく、罪[つみ]そのものなのである。"
    ],
    translation: [
      "Hana was an influencer in her early twenties. She had been a casual presence who simply posted photos of her everyday cooking and travels, but her approachable personality resonated, and her followers topped one million. Her posts were even said to set the standard for the lifestyle of young women. Behind her glamorous daily life, however, she could no longer withstand the pressure.",
      "One night, emboldened by drink, Hana made a post that cynically mocked an unwilling fellow influencer. Knowing full well that once posted it could never be erased, she pressed the send button. At that moment, she did not even imagine that a few seconds' mistake in judgment would overturn her life from its foundations.",
      "The post spread in an instant. By the next morning it had already entered the trends, and voices of anger flooded in. Companies terminated their sponsorship contracts one after another, and her television appearances were cancelled. Hana lost two hundred thousand followers in a single day. The trial by an invisible crowd was as swift as it was ruthless. The plaza of the internet had turned into a place of one-sided condemnation.",
      "Three days later, Hana held a press conference. The sight of her tearfully apologizing, however, rather than drawing sympathy, ended up intensifying criticism. People wrote that the tears were an act, that the apology was obligatory. She learned firsthand the difficulty of recovering trust once lost.",
      "This incident revealed the horror of crowd psychology in the internet age. Forgetting that the person on the other side of the screen is a real human being, people repeat attacks in the name of justice. It is not uncommon for a single mistake to be punished far out of proportion. Words, when one forgets that they are in a public space, become blades that wound people.",
      "Afterwards, Hana suspended her activities and spent quiet days reflecting on herself. Six months later, she started over from a small local cooking class. She is said to have begun prioritizing being of use to others over being noticed. Her attitude of learning from her mistakes moved no small number of people.",
      "In the digital age, once words are released they cannot return. A society that repeatedly posts without being conscious of their weight will one day turn into a place where everyone wounds one another. Hana's story is thrown at us as a warning. What spreads is not only information, but guilt itself."
    ],
    questions: [
      {
        q: "What was Hana's life like before the scandal?",
        choices: ["She was an obscure chef with few followers", "She was a popular influencer with over a million followers", "She was a television producer for a major network", "She was an anonymous blogger with a small audience"],
        answerIndex: 1,
        explanation: "The passage states that フォロワーは百万人を超えていた (her followers topped one million) and that her posts were said to set the lifestyle standard for young women."
      },
      {
        q: "What triggered the scandal?",
        choices: ["She refused to apologize publicly", "She leaked private data of her fans", "She posted a cynical remark about a fellow influencer while drunk", "She plagiarized another influencer's content"],
        answerIndex: 2,
        explanation: "The text says 酒に酔った勢いで、嫌がる同業者を皮肉るような投稿をしてしまった (emboldened by drink, she made a post cynically mocking an unwilling fellow influencer)."
      },
      {
        q: "How did the public react to her apology press conference?",
        choices: ["They were deeply moved and forgave her immediately", "Her tears drew sympathy from fans", "Her apology intensified criticism and was seen as performative", "The press conference was cancelled"],
        answerIndex: 2,
        explanation: "The passage notes that 涙を流しながら謝罪する彼女の姿は、同情を引くどころか、かえって非難を募らせる結果となった (her tearful apology, rather than drawing sympathy, ended up intensifying criticism)."
      },
      {
        q: "According to the passage, what does the incident reveal about the internet age?",
        choices: ["Online words are easily forgotten", "Crowd psychology can punish mistakes out of proportion", "Influencers are immune to criticism", "Social media is a safe space for everyone"],
        answerIndex: 1,
        explanation: "The passage states that 一つの過ちに対して、はるかに大きな罰が与えられることも珍しくない (it is not uncommon for a single mistake to be punished far out of proportion)."
      },
      {
        q: "How did Hana restart after her suspension?",
        choices: ["She returned immediately as a major influencer", "She began from a small local cooking class, prioritizing helping others", "She moved abroad to escape media attention", "She filed a lawsuit against the platforms"],
        answerIndex: 1,
        explanation: "The text says 半年後、彼女は小さな地域の料理教室から再出発した (six months later, she restarted from a small local cooking class) and prioritized 人の役に立つこと (being useful to others)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-33 — The Japanese art market
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-33",
    title: "日本[にほん]のアート[あーと]市場[しじょう]",
    titleReading: "にほんのあーとしじょう",
    level: "N2",
    summary: "An overview of why Japan's art market lags behind New York, London, and Hong Kong — historical roots, tax and inheritance issues, recent changes with new collectors, international rediscovery of Japanese contemporary artists, and the challenges of forgeries and a weak secondary market.",
    estMinutes: 10,
    tags: ["art market", "ukiyo-e", "contemporary art", "auctions", "soft power"],
    body: [
      "美[び]術[じゅつ]市場[しじょう]という言葉[ことば]を聞[き]くと、人々[ひとびと]はニューヨーク[にゅーよーく]やロンドン[ろんどん]、あるいは香港[ほんこん]を思[おも]い浮[う]かべるのが普通[ふつう]である。日本[にほん]は浮世絵[うきよえ]や日本画[にほんが]という独自[どくじ]の伝統[でんとう]を誇[ほこ]りながらも、現代[げんだい]美術[びじゅつ]の市場[しじょう]規模[きぼ]では欧米[おうべい]やアジア[あじあ]の都市[とし]に大[おお]きく遅[おく]れをとってきた。日本[にほん]の美術[びじゅつ]品[ひん]の取引[とりひき]額[がく]は世界[せかい]全体[ぜんたい]の数[すう]パーセント[ぱーせんと]に過[す]ぎず、アジア[あじあ]の中心[ちゅうしん]地[ち]としての地位[ちい]も香港[ほんこん]に奪[うば]われている。この格差[かくさ]はどこから来[く]るのだろうか。",
      "歴史[れきし]を振[ふ]り返[かえ]れば、日本[にほん]は決[けっ]して美術[びじゅつ]に縁[えん]の薄[うす]い国[くに]ではなかった。江戸[えど]期[き]の浮世絵[うきよえ]は印象[いんしょう]派[は]に大[おお]きな影響[えいきょう]を与[あた]え、戦後[せんご]には具体[ぐたい]美術[びじゅつ]協会[きょうかい]や物[もの]派[は]といった前衛[ぜんえい]運動[うんどう]が世界[せかい]の批評[ひひょう]家[か]から注目[ちゅうもく]された。しかし、国内[こくない]ではこれらの運動[うんどう]が資本[しほん]の流[なが]れと結[むす]びつくことが少[すく]なく、批評[ひひょう]的[てき]な評価[ひょうか]の割[わり]に市場[しじょう]的[てき]な評価[ひょうか]が追[お]いつかないという構造[こうぞう]的[てき]な問題[もんだい]を抱[かか]えてきた。美[び]は金[きん]に換[か]わる、という欧米[おうべい]型[がた]の考[かんが]え方[かた]が日本[にほん]では根[ね]付[つ]きにくかったのである。",
      "日本[にほん]の市場[しじょう]が発展[はってん]しなかった理由[りゆう]は多[おお]岐[き]にわたる。まず、税制[ぜいせい]の問題[もんだい]がある。美術[びじゅつ]品[ひん]の売却[ばいきゃく]に対[たい]する税[ぜい]負担[ふたん]が重[おも]く、相続[そうぞく]時[じ]の評価[ひょうか]も厳[きび]しい。そのため、資産[しさん]としての美術[びじゅつ]品[ひん]は敬遠[けいえん]されがちだった。次[つぎ]に、畳[たたみ]の上[うえ]で鑑賞[かんしょう]するという古[ふる]い習慣[しゅうかん]も、公共[こうきょう]空間[くうかん]で展示[てんじ]し取引[とりひき]する文化[ぶんか]を弱[よわ]めた。さらに、他[た]産業[さんぎょう]からの投資[とうし]家[か]参入[さんにゅう]も限[かぎ]られていた。結果[けっか]として、市場[しじょう]を支[ささ]える生態[せいたい]系[けい]そのものが未発達[みはったつ]だったのである。",
      "近年[きんねん]、その風景[ふうけい]に変化[へんか]が見[み]え始[はじ]めた。新[あたら]しい世代[せだい]の収集[しゅうしゅう]家[か]たちが登場[とうじょう]し、若[わか]いギャラリー[ぎゃらりー]が東京[とうきょう]や京都[きょうと]に増[ふ]えている。オンライン[おんらいん]オークション[おーくしょん]の普及[ふきゅう]も参入[さんにゅう]の敷居[しきい]を下[さ]げた。成功[せいこう]した起業家[きぎょうか]や外資[がいし]系[けい]企業[きぎょう]の出身[しゅっしん]者[しゃ]が、資産[しさん]分散[ぶんさん]の一[ひと]環[かん]として美術[びじゅつ]品[ひん]を買[か]い始[はじ]めたのである。彼[かれ]らは美[び]術[じゅつ]史[し]的[てき]な権威[けんい]よりも、自分[じぶん]の直感[ちょっかん]を信[しん]じて選[えら]ぶ傾向[けいこう]がある。",
      "国際[こくさい]的[てき]にも、日本[にほん]の現代[げんだい]美術[びじゅつ]が再[さい]評価[ひょうか]されつつある。草間[くさま]彌生[やよい]や奈良[なら]美[み]智[とも]、村上[むらかみ]隆[たかし]といった作家[さっか]は海外[かいがい]で高[たか]い評価[ひょうか]を得[え]ている。彼[かれ]らの作品[さくひん]はオークション[おーくしょん]で数[すう]億[おく]円[えん]で取引[とりひき]されることもある。日本[にほん]国内[こくない]では無[む]名[めい]だった時代[じだい]が長[なが]かったことを思[おも]えば、皮肉[ひにく]な逆転[ぎゃくてん]と言[い]わざるを得[え]ない。国内[こくない]市場[しじょう]が彼[かれ]らを追[お]い掛[か]ける形[かたち]となっている。",
      "ただ、課題[かだい]も少[すく]なくない。最[もっと]も深刻[しんこく]なのは、贋作[がんさく]問題[もんだい]と二次[にじ]市場[しじょう]の弱[よわ]さである。真作[しんさく]かどうかを証明[しょうめい]する仕組[しく]みが不十分[ふじゅうぶん]で、買[か]い手[て]が安心[あんしん]できない。一次[いちじ]市場[しじょう]であるギャラリー[ぎゃらりー]での購入[こうにゅう]は盛[さか]んになっても、転売[てんばい]で価値[かち]が確立[かくりつ]する二次[にじ]市場[しじょう]が薄[うす]いため、投資[とうし]対象[たいしょう]としての魅力[みりょく]が半減[はんげん]する。市場[しじょう]の信頼[しんらい]を支[ささ]える基盤[きばん]の構築[こうちく]が急務[きゅうむ]である。",
      "これからの日本[にほん]アート[あーと]市場[しじょう]が伸[の]びるためには、軟[なん]弱[じゃく]な土台[どだい]を固[かた]め直[なお]す必要[ひつよう]がある。税[ぜい]制度[せいど]の見直[みなお]し、鑑定[かんてい]機関[きかん]の育成[いくせい]、若[わか]いキュレーター[きゅれーたー]と批評[ひひょう]家[か]の支援[しえん]が不可欠[ふかつけつ]である。美[び]術[じゅつ]は文化[ぶんか]の輸出[ゆしゅつ]でもある。日本[にほん]がアジア[あじあ]のアート[あーと]の中心[ちゅうしん]となるか、それとも周辺[しゅうへん]にとどまるかは、今[いま]の選択[せんたく]にかかっている。"
    ],
    translation: [
      "When people hear the phrase art market, they normally think of New York, London, or Hong Kong. Although Japan boasts distinctive traditions like ukiyo-e and nihonga, in terms of the scale of its contemporary art market it has lagged far behind Western and Asian cities. The value of Japanese art transactions is only a few percent of the global total, and even its status as an Asian hub has been taken by Hong Kong. Where does this gap come from?",
      "Looking back at history, Japan was by no means a country with thin ties to art. Ukiyo-e of the Edo period greatly influenced the Impressionists, and after the war avant-garde movements such as the Gutai Art Association and Mono-ha drew attention from critics worldwide. Domestically, however, these movements rarely linked up with flows of capital, and Japan has long suffered a structural problem: market valuation has not caught up with critical appreciation. The Western-style idea that beauty converts into money never took root easily in Japan.",
      "The reasons the Japanese market did not develop are multifaceted. First, there is the tax issue. The tax burden on the sale of artworks is heavy, and inheritance valuations are strict. As a result, artworks as assets tended to be avoided. Second, the old custom of appreciating works on tatami weakened a culture of displaying and trading them in public spaces. Moreover, entry by investors from other industries was limited. As a result, the very ecosystem needed to sustain a market remained underdeveloped.",
      "In recent years, changes have begun to appear in this landscape. A new generation of collectors has emerged, and young galleries have multiplied in Tokyo and Kyoto. The spread of online auctions has also lowered the barrier to entry. Successful entrepreneurs and people from foreign-affiliated firms have started buying artworks as part of asset diversification. They tend to trust their own intuition over art-historical authority when choosing.",
      "Internationally too, Japanese contemporary art is being reassessed. Artists such as Yayoi Kusama, Yoshitomo Nara, and Takashi Murakami have earned high acclaim abroad. Their works are sometimes traded at auction for hundreds of millions of yen. Considering the long years they spent unknown in Japan, one is forced to call it an ironic reversal. The domestic market has ended up chasing them.",
      "However, the challenges are not few. The most serious is the forgery problem and the weakness of the secondary market. The system for verifying authenticity is insufficient, leaving buyers uneasy. Even if purchases at galleries (the primary market) thrive, the thinness of the secondary market, where value is established through resale, halves the appeal of artworks as investment vehicles. Building the foundation that supports market trust is an urgent task.",
      "For the Japanese art market to grow in the years ahead, the weak foundation must be rebuilt. Reviewing the tax system, nurturing authentication bodies, and supporting young curators and critics are indispensable. Art is also an export of culture. Whether Japan becomes the center of Asian art or remains on its periphery depends on the choices made now."
    ],
    questions: [
      {
        q: "According to the passage, how does Japan's art market compare with New York or Hong Kong?",
        choices: ["It is much larger than those cities", "It is roughly the same size", "It lags far behind in market scale", "It has overtaken Hong Kong recently"],
        answerIndex: 2,
        explanation: "The passage states that 現代美術の市場規模では欧米やアジアの都市に大きく遅れをとってきた (Japan has lagged far behind Western and Asian cities in contemporary art market scale)."
      },
      {
        q: "What structural problem has Japan historically faced regarding art?",
        choices: ["Market valuation has not caught up with critical appreciation", "Too many collectors but no critics", "Artworks are not allowed to be sold publicly", "There are no traditional art forms"],
        answerIndex: 0,
        explanation: "The text says 批評的な評価の割に市場的な評価が追いつかないという構造的な問題 (a structural problem where market valuation does not catch up with critical appreciation)."
      },
      {
        q: "Which of the following is identified as a reason for the underdeveloped Japanese art market?",
        choices: ["Heavy tax burdens and strict inheritance valuations", "Too many foreign investors flooding the market", "Too few artists being produced", "Excessive government subsidies"],
        answerIndex: 0,
        explanation: "The passage lists 美術品の売却に対する税負担が重く、相続時の評価も厳しい (heavy tax burden on sales and strict inheritance valuations) as a reason."
      },
      {
        q: "According to the passage, what is one of the most serious current challenges?",
        choices: ["Forgery problems and a weak secondary market", "Too many online auctions", "Tax rates being too low", "Too many foreign galleries in Tokyo"],
        answerIndex: 0,
        explanation: "The text states 最も深刻なのは、贋作問題と二次市場の弱さである (the most serious is the forgery problem and the weakness of the secondary market)."
      },
      {
        q: "What does the author conclude about the future of the Japanese art market?",
        choices: ["It will inevitably dominate Asia", "Its fate depends on present choices to rebuild foundations", "It should give up on contemporary art entirely", "It should rely solely on foreign artists"],
        answerIndex: 1,
        explanation: "The final paragraph states that whether Japan becomes the center of Asian art or stays on its periphery depends on 今の選択にかかっている (the choices made now)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-34 — A story about a refugee's journey
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-34",
    title: "逃[のが]れる旅路[たびじ]",
    titleReading: "のがれるたびじ",
    level: "N2",
    summary: "The story of Karim, a young man who flees his Mediterranean hometown during civil war, survives a near-capsizing on a smuggling boat, endures a detention camp, comes to Japan, struggles with isolation and language, and finally finds hope through a Japanese class and a community garden.",
    estMinutes: 10,
    tags: ["refugee", "asylum", "war", "displacement", "community"],
    body: [
      "カリム[かりむ]は地中海[ちちゅうかい]に面[めん]した小[ちい]さな町[まち]で生[お]い立[た]ち、父[ちち]の果樹園[かじゅえん]を手伝[てつだ]いながら穏[おだ]やかな日[ひ]々[び]を送[おく]っていた。オリーブ[おりーぶ]の収穫[しゅうかく]が終[お]わる秋[あき]には、親族[しんぞく]が集[あつ]まって宴[うたげ]が開[ひら]かれた。彼[かれ]は将来[しょうらい]、農業[のうぎょう]大学[だいがく]に進[すす]んで果樹[かじゅ]栽培[さいばい]を学[まな]ぶつもりだった。それが彼[かれ]のささやかな夢[ゆめ]だった。しかし、その静[しず]けさは、突然[とつぜん]の銃声[じゅうせい]によって打[う]ち砕[くだか]れた。",
      "内戦[ないせん]が勃発[ぼっぱつ]したのは、彼[かれ]が十八[じゅうはち]歳[さい]の春[はる]だった。市街地[しがいち]には砲撃[ほうげき]が降[ふ]り注[そそ]ぎ、隣[となり]の家[いえ]が焼[や]け落[お]ちた。父[ちち]はカリム[かりむ]にこう告[つ]げた。ここに残[のこ]れば、お前[まえ]は戦場[せんじょう]に引[ひ]きずり出[だ]されるか、殺[ころ]されるかのどちらかだ。逃[のが]れろ。生[い]き抜[ぬ]け。その言葉[ことば]を胸[むね]に、彼[かれ]は夜[よる]の闇[やみ]に紛[まぎ]れて家[いえ]を後にした。振[ふ]り返[かえ]ることは一度[いちど]もなかった。",
      "旅[たび]は過酷[かこく]を極[きわ]めた。国境[こっきょう]を越[こ]える密輸[みつゆ]船[せん]に乗[の]った時[とき]、彼[かれ]は七十[ななじゅう]人[にん]の難民[なんみん]とともに、手[て]のひら一枚[いちまい]の空間[くうかん]に押[お]し込[こ]まれた。波[なみ]が荒[あら]くなるたびに、誰[だれ]かが嘔吐[おうと]し、泣[な]き声[ごえ]が響[ひび]いた。三日[みっか]目[め]の夜[よる]、船[ふね]は転覆[てんぷく]しかけ、カリム[かりむ]は冷[つめ]たい海[うみ]の中[なか]で死[し]を覚悟[かくご]した。奇跡[きせき]的[てき]に救助[きゅうじょ]された時[とき]、彼[かれ]は自分[じぶん]がまだ生[い]きていることを信[しん]じられなかった。",
      "仮[かり]の収容[しゅうよう]キャンプ[きゃんぷ]に入[はい]った彼[かれ]を待[ま]っていたのは、不自由[ふじゆう]な日々[ひび]だった。書類[しょるい]手続[てつづ]きはいつ終[お]わるか分[わ]からず、希望[きぼう]を持[も]つことすら禁[きん]じられているようだった。彼[かれ]と同[おな]じ境遇[きょうぐう]の若者[わかもの]たちは、将来[しょうらい]を語[かた]り合[あ]うことを避[さ]けるようになった。語[かた]れば、かえって絶望[ぜつぼう]が深[ふか]まるからだ。それでも、カリム[かりむ]はただ耐[た]え抜[ぬ]くことだけを心[こころ]に誓[ちか]った。",
      "二年[にねん]後[ご]、彼[かれ]は日本[にほん]への庇護[ひご]を認[みと]められ、東京[とうきょう]郊外[こうがい]の公寓[こうしゅく]に移[うつ]り住[す]んだ。しかし、新しい生活[せいかつ]は想像[そうぞう]以上[いじょう]に厳[きび]しかった。日本[にほん]語[ご]が分[わ]からず、スーパー[すーぱー]での買[か]い物[もの]すら難関[なんかん]だった。肌[はだ]の色[いろ]が違[ちが]うというだけで、近所[きんじょ]の目[め]は冷[つめ]たかった。彼[かれ]は自分[じぶん]がこの社会[しゃかい]のどこにも居場所[いばしょ]を持[も]たない人間[にんげん]になったような気[き]がしてならなかった。",
      "転機[てんき]が訪[おとず]れたのは、地域[ちいき]の日本[にほん]語[ご]教室[きょうしつ]に通[かよ]い始[はじ]めてからだった。ボランティア[ぼらんてぃあ]の教師[きょうし]たちは、彼[かれ]の言葉[ことば]を待[ま]ってくれた。少[すこ]しずつ話[はな]せるようになると、彼[かれ]は自分[じぶん]の故郷[こきょう]の果樹園[かじゅえん]のことを語[かた]り始めた。それを聞[き]いた日本人[にほんじん]の友人[ゆうじん]が、近[ちか]くの市民[しみん]農園[のうえん]を紹介[しょうかい]してくれた。土[つち]に触[ふ]れる瞬間[しゅんかん]、彼[かれ]の目[め]に涙[なみだ]が浮[う]かんだ。自分[じぶん]はまだ生[い]きている、と実感[じっかん]したのである。",
      "今[いま]、カリム[かりむ]は市民[しみん]農園[のうえん]で野菜[やさい]を育[そだ]てながら、週末[しゅうまつ]には難民[なんみん]支援[しえん]のイベント[いべんと]に参加[さんか]している。彼[かれ]の語[かた]る言葉[ことば]には、かつての絶望[ぜつぼう]の代[か]わりに静[しず]かな決意[けつい]がある。過去[かこ]を忘[わす]れることはできない。しかし、未来[みらい]を諦[あきら]めることもしない。彼[かれ]は今[いま]、逃[のが]れる先[さき]にではなく、立[た]ち止[ど]まり、根[ね]を張[は]る場所[ばしょ]を探[さが]している。それが、彼[かれ]の新[あたら]しい旅[たび]の始[はじ]まりだった。"
    ],
    translation: [
      "Karim had grown up in a small town facing the Mediterranean, leading a quiet life helping with his father's orchard. When the olive harvest ended in autumn, relatives would gather for a feast. He had planned to go on to an agricultural college to study fruit cultivation. That was his modest dream. But that tranquility was shattered by a sudden gunshot.",
      "The civil war broke out in the spring when he was eighteen. Shells rained on the city, and the house next door burned and collapsed. His father told him: if you stay here, you will either be dragged to the battlefield or killed. Flee. Survive. With those words in his heart, he left the house in the darkness of night. He never once looked back.",
      "The journey was extreme. When he boarded a smuggling boat to cross the border, he was packed with seventy refugees into a space the size of a single palm. Whenever the waves grew rough, someone vomited, and crying voices echoed. On the third night, the boat nearly capsized, and in the cold sea Karim prepared himself for death. When he was miraculously rescued, he could not believe that he was still alive.",
      "What awaited him in the temporary detention camp were days of confinement. The paperwork showed no sign of ending, and even hope felt forbidden. Young people in the same situation as him came to avoid talking about the future. To speak of it only deepened the despair. Still, Karim vowed to himself only to endure.",
      "Two years later, he was granted protection to come to Japan and moved into an apartment in the Tokyo suburbs. Yet the new life was harsher than he had imagined. Without Japanese, even shopping at the supermarket was a hurdle. Just because his skin was a different color, the neighbors' gazes were cold. He could not help feeling he had become a person with no place anywhere in this society.",
      "The turning point came when he started attending a local Japanese-language class. The volunteer teachers waited for his words. As he gradually became able to speak, he began to talk about the orchard in his homeland. A Japanese friend who heard this introduced him to a nearby community garden. The moment he touched the soil, tears came to his eyes. He felt, I am still alive.",
      "Now, Karim grows vegetables in the community garden and takes part in refugee support events on weekends. His words carry a quiet resolve in place of the former despair. He cannot forget the past. But he does not give up on the future. He is now not fleeing onward, but searching for a place to stop and put down roots. That was the beginning of his new journey."
    ],
    questions: [
      {
        q: "What was Karim's life like before the war?",
        choices: ["He was a soldier in the army", "He helped his father's orchard and planned to study agriculture", "He was a fisherman on the Mediterranean", "He was a university student in the city"],
        answerIndex: 1,
        explanation: "The passage says he helped his father's orchard (父の果樹園を手伝いながら) and planned to attend agricultural college (農業大学に進んで果樹栽培を学ぶつもりだった)."
      },
      {
        q: "Why did Karim's father tell him to flee?",
        choices: ["Because staying meant being drafted to the battlefield or killed", "Because he wanted Karim to study abroad", "Because Karim had committed a crime", "Because the family was too poor to support him"],
        answerIndex: 0,
        explanation: "The father told him that if he stayed, he would either be dragged to the battlefield or killed (戦場に引きずり出されるか、殺されるかのどちらか)."
      },
      {
        q: "What happened on the third night of the boat journey?",
        choices: ["The boat safely reached its destination", "The boat nearly capsized and Karim prepared to die", "The passengers were arrested by border police", "Karim decided to return home"],
        answerIndex: 1,
        explanation: "The text states 三日目の夜、船は転覆しかけ、カリムは冷たい海の中で死を覚悟した (on the third night the boat nearly capsized, and Karim prepared for death in the cold sea)."
      },
      {
        q: "What was Karim's experience in Japan initially like?",
        choices: ["He was warmly welcomed by everyone", "He faced language barriers and cold treatment from neighbors", "He immediately found work as a farmer", "He was given a free house by the government"],
        answerIndex: 1,
        explanation: "The passage notes 日本語が分からず (without Japanese), スーパーでの買い物すら難関 (even shopping was a hurdle), and 近所の目は冷たかった (the neighbors' gazes were cold)."
      },
      {
        q: "What was the turning point that helped Karim find hope again?",
        choices: ["Winning a scholarship to a Japanese university", "Attending a Japanese class and being introduced to a community garden", "Returning to his homeland temporarily", "Becoming a Japanese citizen quickly"],
        answerIndex: 1,
        explanation: "The text says the turning point came when he started attending a local Japanese class, and a friend introduced him to a nearby community garden where touching the soil brought tears to his eyes."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-35 — The ethics of AI
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-35",
    title: "人工[じんこう]知能[ちのう]の倫理[りんり]学[がく]",
    titleReading: "じんこうちのうのりんりがく",
    level: "N2",
    summary: "A survey of the major ethical challenges posed by artificial intelligence — bias and discrimination, autonomous weapons, privacy and surveillance, creativity and copyright, responsibility and accountability — and a call for international governance and broad public participation.",
    estMinutes: 11,
    tags: ["AI ethics", "bias", "autonomous weapons", "privacy", "governance"],
    body: [
      "近年[きんねん]、人工[じんこう]知能[ちのう]は目[め]覚[ざ]ましい進歩[しんぽ]を遂[と]げた。画像[がぞう]生成[せいせい]、言語[げんご]翻訳[ほんやく]、医療[いりょう]診断[しんだん]など、かつて人間[にんげん]にしかできないと考[かんが]えられていた領域[りょういき]にまで進出[しんしゅつ]している。技術[ぎじゅつ]の恩恵[おんけい]は計[はか]り知[し]れない。その一方[いっぽう]で、私[わたし]たちは新[あたら]しい種類[しゅるい]の倫理[りんり]的[てき]問[と]いに直面[ちょくめん]している。技術[ぎじゅつ]が進む[すすむ]スピード[すぴーど]に、人間[にんげん]の思考[しこう]が追[お]いついていないのである。",
      "第一[だいいち]の問題[もんだい]は、AIの偏向[へんこう]と差別[さべつ]である。学習[がくしゅう]データ[でーた]に偏[かたよ]りがあれば、AIもまた偏[かたよ]った判断[はんだん]を下[くだ]す。実際[じっさい]、ある採用[さいよう]AIは過去[かこ]のデータ[でーた]を元[もと]に女性[じょせい]を不利[ふり]に評価[ひょうか]し、顔[かお]認識[にんしき]システム[しすてむ]は特定[とくてい]の人種[じんしゅ]の誤認[ごにん]率[りつ]が高[たか]いことが判明[はんめい]した。AIは中立的[ちゅうりつてき]だという神話[しんわ]は、もはや崩[くず]れ去[さ]った。データ[でーた]そのものが社会[しゃかい]の偏見[へんけん]を映[うつ]す鏡[かがみ]である以上[いじょう]、出力[しゅつりょく]が公平[こうへい]になるわけではない。",
      "第二[だいに]に、軍事[ぐんじ]利用[りよう]の問題[もんだい]がある。自律[じりつ]型[がた]致死[ちし]兵器[へいき]システム[しすてむ]、いわゆるキラー[きらー]ロボット[ろぼっと]の開発[かいはつ]が現実[げんじつ]味[み]を帯[お]びている。人間[にんげん]の判断[はんだん]を介[かい]さずに攻撃[こうげき]を決定[けってい]する機械[きかい]が実用[じつよう]化[か]されれば、戦争[せんそう]の倫理[りんり]的[てき]限度[げんど]は大き[おおき]く後退[こうたい]するだろう。誤[あやま]って民間人[みんかんじん]を殺傷[さっしょう]した場合[ばあい]、誰[だれ]がその責任[せきにん]を負[お]うのか。機械[きかい]に命[いのち]の決定[けってい]を委[ゆだ]ねること自体[じたい]が、人間[にんげん]の尊厳[そんげん]に関[かん]わる問題[もんだい]である。",
      "第三[だいさん]に、プライバシー[ぷらいばしー]と監視[かんし]の問題[もんだい]がある。顔[かお]認識[にんしき]技術[ぎじゅつ]は治安[ちあん]維持[いじ]に役立[やくだ]つ反面[はんめん]、個[こ]人[じん]の行動[こうどう]を常時[じょうじ]追跡[ついせき]する手段[しゅだん]にもなり得[え]る。権威[けんい]主義[しゅぎ]的[てき]な国家[こっか]では、反体制[はんたいせい]派[は]の監視[かんし]に使[つか]われているという報告[ほうこく]も絶[た]えない。私[わたし]たちは便利[べんり]さと引[ひ]き換[か]えに、どれだけの自由[じゆう]を手放[てばな]そうとしているのか。その代償[だいしょう]を冷静[れいせい]に見直[みなお]す時[とき]に来[き]ている。",
      "第四[だいよん]に、創造[そうぞう]性[せい]と著作[ちょさく]権[けん]の問題[もんだい]がある。AIが生成[せいせい]した画像[がぞう]や文章[ぶんしょう]の権利[けんり]は誰[だれ]に帰属[きぞく]するのか。学習[がくしゅう]元[もと]の作家[さっか]の権利[けんり]はどう保護[ほご]されるのか。これらの問[と]いに対[たい]する明確[めいかく]な答[こた]えはまだない。AIが人間[にんげん]の創造[そうぞう]性[せい]を脅[おびや]かすのか、それとも新[あたら]しい表現[ひょうげん]の領域[りょういき]を開[ひら]くのかも、議論[ぎろん]が続[つづ]いている。技術[ぎじゅつ]と文化[ぶんか]の関係[かんけい]を根本[こんぽん]から問[と]い直[なお]す時[とき]に来[き]ている。",
      "第五[だいご]に、責任[せきにん]の所在[しょざい]の問題[もんだい]がある。自動[じどう]運転[うんてん]車[しゃ]が事故[じこ]を起[お]こした時[とき]、製造[せいぞう]者[しゃ]、所有[しょゆう]者[しゃ]、AI開発[かいはつ]者[しゃ]の誰[だれ]が責任[せきにん]を負[お]うのか。法[ほう]体系[たいけい]は未[いま]だに人間[にんげん]を前提[ぜんてい]としており、機械[きかい]の意思[いし]決定[けってい]を想定[そうてい]していない。責任[せきにん]の空白[くうはく]は社会[しゃかい]の信頼[しんらい]を損[そこ]なう。新[あたら]しい法[ほう]的[てき]枠組[わくぐ]みを急[いそ]いで整備[せいび]する必要[ひつよう]がある。",
      "AIの倫理[りんり]は、技術[ぎじゅつ]者[しゃ]だけの問題[もんだい]ではない。哲学者[てつがくしゃ]、法律家[ほうりつか]、市民[しみん]が共[とも]に参加[さんか]すべき公共[こうきょう]の議論[ぎろん]である。国際[こくさい]的[てき]なガイドライン[がいどらいん]の構築[こうちく]も急務[きゅうむ]である。技術[ぎじゅつ]は人間[にんげん]の幸福[こうふく]のためにあるべきであって、人間[にんげん]が技術[ぎじゅつ]のためにあるのではない。この基本[きほん]原則[げんそく]を忘[わす]れない限[かぎ]り、私[わたし]たちはAIという強力[きょうりょく]な道具[どうぐ]を正[ただ]しい方向[ほうこう]に導[みちび]くことができるはずである。"
    ],
    translation: [
      "In recent years, artificial intelligence has made remarkable progress. It has expanded into domains once thought only humans could handle, such as image generation, language translation, and medical diagnosis. The benefits of the technology are immeasurable. At the same time, we face a new kind of ethical question. The speed of technological advance is outstripping human thought.",
      "The first problem is AI bias and discrimination. If the training data is biased, the AI likewise makes biased judgments. In fact, a hiring AI evaluating women unfavorably based on past data, and facial recognition systems showing higher misidentification rates for certain races, have come to light. The myth that AI is neutral has already collapsed. Since the data itself is a mirror reflecting society's prejudices, the output cannot be fair.",
      "Second is the issue of military use. The development of lethal autonomous weapons systems, so-called killer robots, is becoming realistic. If machines that decide on attacks without human judgment are deployed, the ethical limits of war will retreat substantially. If civilians are mistakenly killed, who bears the responsibility? Entrusting machines with decisions over life and death is itself an issue concerning human dignity.",
      "Third is the problem of privacy and surveillance. Facial recognition technology helps maintain public order, but on the other hand it can also become a means to constantly track individual behavior. Reports that authoritarian states use it to monitor dissidents are unceasing. How much freedom are we willing to give up in exchange for convenience? The time has come to calmly re-examine the cost.",
      "Fourth is the question of creativity and copyright. To whom do the rights to images or texts generated by AI belong? How are the rights of the writers whose works were used for training protected? There is still no clear answer to these questions. Whether AI threatens human creativity or opens a new domain of expression is also under debate. The time has come to fundamentally re-examine the relationship between technology and culture.",
      "Fifth is the question of where responsibility lies. When an autonomous vehicle causes an accident, who bears the responsibility: the manufacturer, the owner, or the AI developer? The legal system still assumes humans and does not envisage machine decision-making. A vacuum of responsibility undermines social trust. There is an urgent need to build a new legal framework.",
      "AI ethics is not a problem for engineers alone. It is a public discussion in which philosophers, lawyers, and citizens should participate together. Constructing international guidelines is also an urgent task. Technology should exist for human happiness, not humans for technology. As long as we do not forget this basic principle, we should be able to steer the powerful tool of AI in the right direction."
    ],
    questions: [
      {
        q: "What is the first ethical problem the passage identifies with AI?",
        choices: ["Cost of development", "Bias and discrimination in AI judgments", "Lack of computing power", "Difficulty in marketing AI products"],
        answerIndex: 1,
        explanation: "The passage's 第一の問題 is AIの偏向と差別 (AI bias and discrimination), citing hiring AI and facial recognition systems as examples."
      },
      {
        q: "According to the passage, why does AI produce biased judgments?",
        choices: ["Because AI is programmed to be biased", "Because the training data reflects society's prejudices", "Because machines intentionally choose to discriminate", "Because AI is not yet advanced enough"],
        answerIndex: 1,
        explanation: "The text states データそのものが社会の偏見を映す鏡である以上、出力が公平になるわけではない (since the data itself is a mirror of society's prejudices, the output cannot be fair)."
      },
      {
        q: "What does the passage say about lethal autonomous weapons?",
        choices: ["They have already replaced all human soldiers", "Their development is becoming realistic and raises the question of accountability", "They are forbidden by international law universally", "They are completely safe for civilians"],
        answerIndex: 1,
        explanation: "The passage states that キラーロボットの開発が現実味を帯びている (development of killer robots is becoming realistic) and asks 誰がその責任を負うのか (who bears the responsibility)."
      },
      {
        q: "Which of the following is identified as the fifth ethical problem in the passage?",
        choices: ["Where responsibility lies in cases like autonomous vehicle accidents", "The high price of AI software", "The lack of engineers", "The slow speed of AI development"],
        answerIndex: 0,
        explanation: "The 第五 problem is 責任の所在の問題 (the question of where responsibility lies), illustrated by the autonomous vehicle accident example."
      },
      {
        q: "What does the author conclude about AI ethics?",
        choices: ["It is solely the responsibility of engineers", "It is a public discussion requiring broad participation and international guidelines", "It is impossible to regulate and should be left alone", "It should be left entirely to corporations"],
        answerIndex: 1,
        explanation: "The final paragraph states that AI ethics is a 哲学者、法律家、市民が共に参加すべき公共の議論 (public discussion requiring philosophers, lawyers, and citizens), and that 国際的なガイドラインの構築も急務 (international guidelines are urgent)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-36 — Japanese war memorials and reconciliation
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-36",
    title: "戦争[せんそう]の記憶[きおく]と和解[わかい]",
    titleReading: "せんそうのきおくとわかい",
    level: "N2",
    summary: "An examination of how Japan's war memorials — Hiroshima's Peace Park, Yasukuni Shrine, Okinawa's Himeyuri Museum — convey different memories, the controversies with neighboring countries, textbook disputes, and the path toward reconciliation through shared memory and dialogue.",
    estMinutes: 12,
    tags: ["war memory", "Yasukuni", "Hiroshima", "Okinawa", "reconciliation"],
    body: [
      "戦争[せんそう]の記憶[きおく]をどう伝[つた]えるかは、どの国[くに]にとっても容易[ようい]な問題[もんだい]ではない。日本[にほん]においては、その複雑[ふくざつ]さが戦没[せんぼつ]者[しゃ]記念[きねん]施設[しせつ]の多様[たよう]さに表[あらわ]れている。広島[ひろしま]の原爆[げんばく]ドーム[どーむ]、東京[とうきょう]の靖国[やすくに]神社[じんじゃ]、沖縄[おきなわ]のひめゆり[ひめゆり]平和[へいわ]祈念[きねん]資料館[しりょうかん]は、それぞれ異[こと]なる記憶[きおく]の筋書[すじが]きを伝[つた]えている。これらの場[ば]は、死者[ししゃ]を悼[いた]む場[ば]であると同時[どうじ]に、歴史[れきし]を解釈[かいしゃく]する場[ば]でもある。記憶[きおく]と和解[わかい]の間[あいだ]で、日本[にほん]は今[いま]も揺[ゆ]れ動[うご]いている。",
      "広島[ひろしま]平和[へいわ]記念[きねん]公園[こうえん]は、被爆[ひばく]者[しゃ]の視点[してん]から核[かく]兵器[へいき]の非人間性[ひにんげんせい]を訴[うった]える場[ば]である。原爆[げんばく]ドーム[どーむ]の残骸[ざんがい]は、言葉[ことば]を超[こ]えた説得力[せっとくりょく]を持[も]つ。毎年[まいとし]の慰霊[いれい]祭[さい]には多[おお]くの外国[がいこく]人[じん]が訪[おとず]れ、平和[へいわ]宣言[せんげん]が読[よ]み上[あ]げられる。ここでの記憶[きおく]は、加害[かがい]の側[がわ]よりも被害[ひがい]の側[がわ]に重点[じゅうてん]が置[お]かれている。それが日本[にほん]の戦後[せんご]平和[へいわ]主義[しゅぎ]の核[かく]となっている。",
      "一方[いっぽう]、靖国[やすくに]神社[じんじゃ]は論争[ろんそう]の的[まと]となり続[つづ]けてきた。戦没[せんぼつ]者[しゃ]を慰霊[いれい]する本来[ほんらい]の目的[もくてき]に加[くわ]え、A級[えーきゅう]戦犯[せんぱん]が合祀[ごうし]されていることが、近[ちか]隣[りん]諸国[しょこく]の反発[はんぱつ]を招[まね]いている。首相[しゅしょう]の公式[こうしき]参拝[さんぱい]が行[おこな]われるたびに、外交[がいこう]問題[もんだい]に発展[はってん]する。日本[にほん]国内[こくない]でも、政教[せいきょう]分離[ぶんり]の観点[かんてん]から参拝[さんぱい]に反対[はんたい]する声[こえ]は少[すく]なくない。一国[いっこく]内[ない]の悼[いた]みが国際[こくさい]的[てき]な対立[たいりつ]を生[う]むという構造[こうぞう]は、戦後[せんご]八十年[はちじゅうねん]を経[へ]てもなお解[かい]決[けつ]されていない。",
      "沖縄[おきなわ]の記憶[きおく]は、また別[べつ]の相貌[そうぼう]を持[も]つ。戦[たたか]いの舞台[ぶたい]となったこの島[しま]では、一般[いっぱん]市民[しみん]が巻[まき]き込[こ]まれた地上戦[ちじょうせん]の悲惨[ひさん]さが語[かた]り継[つ]がれている。ひめゆり[ひめゆり]学徒[がくと]の悲劇[ひげき]は、特[とく]に若[わか]い世代[せだい]に衝撃[しょうげき]を与[あた]え続[つづ]けてきた。日本[にほん]軍[ぐん]による住民[じゅうみん]スパイ[すぱい]容疑[ようぎ]の冤罪[えんざい]事件[じけん]や、集団[しゅうだん]自決[じけつ]の強要[きょうよう]なども記憶[きおく]の一部[いちぶ]である。ここでは、日本[にほん]は単[たん]なる被害者[ひがいしゃ]ではなく、加害者[かがいしゃ]でもある。",
      "韓国[かんこく]や中国[ちゅうごく]との和解[わかい]は、幾度[いくど]も試[こころ]みられ、その都度[つど]挫折[ざせつ]してきた。政府[せいふ]レベルの謝罪[しゃざい]と賠償[ばいしょう]は一定[いってい]の進展[しんてん]を見[み]せたものの、歴史[れきし]教科書[きょうかしょ]の記述[きじゅつ]や首相[しゅしょう]の発言[はつげん]が都度[つど]火種[ひばな]となってきた。過去[かこ]の植民地[しょくみんち]支配[しはい]や侵略[しんりゃく]に対[たい]する認識[にんしき]のズレは、今[いま]も癒[い]えていない。双方[そうほう]が感情[かんじょう]を越[こ]えた対話[たいわ]を続[つづ]けることが、和解[わかい]への唯一[ゆいいつ]の道[みち]である。",
      "歴史[れきし]教科書[きょうかしょ]をめぐる論争[ろんそう]も、記憶[きおく]の政治[せいじ]化[か]を象徴[しょうちょう]している。検定[けんてい]制度[せいど]の下[もと]で、政府[せいふ]が記述[きじゅつ]に介入[かいにゅう]する例[れい]が度々[たびたび]問題[もんだい]となる。一方[いっぽう]で、過度[かど]な自虐[じぎゃく]的[てき]な記述[きじゅつ]を避[さ]けるべきだという意見[いけん]もある。歴史[れきし]教育[きょういく]は、愛国[あいこく]心[しん]と客観[きゃっかん]的[てき]認識[にんしき]の間[あいだ]で揺[ゆ]れ動[うご]いている。次世代[じせだい]に何[なに]をどう伝[つた]えるかは、国[くに]の未来[みらい]を形[かた]作[づく]る重大[じゅうだい]な営[いとな]みである。",
      "真の和解[わかい]は、記憶[きおく]の共有[きょうゆう]から始[はじ]まる。自分[じぶん]の痛み[いたみ]だけを強調[きょうちょう]するのではなく、相手[あいて]の痛み[いたみ]にも耳[みみ]を傾[かたむ]ける姿勢[しせい]が必要[ひつよう]である。靖国[やすくに]問題[もんだい]一[ひと]つにしても、単[たん]なる参拝[さんぱい]の可否[かひ]ではなく、アジア[あじあ]全体[ぜんたい]の記憶[きおく]の地形[ちけい]の中[なか]で考[かんが]えるべき課題[かだい]である。過去[かこ]から目[め]を逸[そ]らさず、未来[みらい]へ向[む]けて共[とも]に歩[ある]く。その謙虚[けんきょ]な姿勢[しせい]こそが、日本[にほん]が世界[せかい]から信頼[しんらい]される道[みち]である。"
    ],
    translation: [
      "How to convey the memory of war is no easy matter for any country. In Japan, that complexity appears in the diversity of its war memorial facilities. Hiroshima's Atomic Bomb Dome, Tokyo's Yasukuni Shrine, and Okinawa's Himeyuri Peace Museum each convey a different narrative of memory. These places mourn the dead while simultaneously interpreting history. Between memory and reconciliation, Japan is still wavering.",
      "Hiroshima Peace Memorial Park appeals, from the perspective of the hibakusha, against the inhumanity of nuclear weapons. The ruins of the Atomic Bomb Dome carry a persuasive power that transcends words. Every year many foreigners visit the memorial ceremony, and a peace declaration is read aloud. The memory here places more emphasis on the side of the victim than on the side of the perpetrator. That has become the core of Japan's postwar pacifism.",
      "Yasukuni Shrine, on the other hand, has continued to be the focus of controversy. In addition to its original purpose of consoling the war dead, the enshrinement of Class A war criminals invites backlash from neighboring countries. Every time the prime minister makes an official visit, it develops into a diplomatic issue. Even within Japan, voices opposing the visits from the standpoint of separation of religion and state are not few. The structure in which mourning within a single country gives rise to international conflict remains unresolved even eighty years after the war.",
      "Okinawa's memory has yet another aspect. On this island that became a battlefield, the misery of the ground battle in which ordinary citizens were caught has been handed down. The tragedy of the Himeyuri students in particular has continued to shock younger generations. The wrongful execution of residents on suspicion of spying by the Japanese military, and the coercion of mass suicides, are also part of the memory. Here, Japan is not merely a victim but also a perpetrator.",
      "Reconciliation with South Korea and China has been attempted many times, and has met setbacks each time. While government-level apologies and compensation have made some progress, descriptions in history textbooks and statements by prime ministers have repeatedly served as sparks. The gap in recognition of past colonial rule and aggression has not yet healed. For both sides to continue dialogue beyond emotion is the only path to reconciliation.",
      "Controversies over history textbooks also symbolize the politicization of memory. Under the screening system, cases of government intervention in descriptions have repeatedly become issues. On the other hand, there is also the view that overly self-deprecating descriptions should be avoided. History education wavers between patriotism and objective recognition. What to convey to the next generation and how is a serious undertaking that shapes the country's future.",
      "True reconciliation begins with the sharing of memory. Rather than emphasizing only one's own pain, an attitude of listening to the other's pain is necessary. Even the Yasukuni issue alone is not a simple matter of whether visits are permissible; it is a task that should be considered within the topography of memory across Asia as a whole. Without taking one's eyes off the past, to walk together toward the future. That humble attitude is the path by which Japan will be trusted by the world."
    ],
    questions: [
      {
        q: "According to the passage, what does the diversity of Japanese war memorials reveal?",
        choices: ["Japan has too many memorials", "The complexity of conveying war memory", "That all memorials convey the same message", "That Japan no longer remembers the war"],
        answerIndex: 1,
        explanation: "The passage states that その複雑さが戦没者記念施設の多様さに表れている (that complexity appears in the diversity of memorial facilities), each conveying a different narrative of memory."
      },
      {
        q: "What is the focus of memory at Hiroshima Peace Memorial Park?",
        choices: ["Japan's military victories", "The perspective of victims and the inhumanity of nuclear weapons", "The justification for the war", "The need for stronger armed forces"],
        answerIndex: 1,
        explanation: "The text says Hiroshima appeals 被爆者の視点から核兵器の非人間性を訴える (from the hibakusha's perspective, against the inhumanity of nuclear weapons), emphasizing the side of the victim."
      },
      {
        q: "Why does Yasukuni Shrine cause controversy with neighboring countries?",
        choices: ["Because it is too small for visitors", "Because Class A war criminals are enshrined there", "Because it charges high entrance fees", "Because it bans foreigners"],
        answerIndex: 1,
        explanation: "The passage states that A級戦犯が合祀されていること (Class A war criminals being enshrined there) invites backlash from neighboring countries."
      },
      {
        q: "What does the passage say about Okinawa's memory of the war?",
        choices: ["Okinawa was not affected by the war", "It shows that Japan was also a perpetrator, not merely a victim", "It only focuses on American soldiers", "It has been completely forgotten"],
        answerIndex: 1,
        explanation: "The passage states that in Okinawa, 日本は単なる被害者ではなく、加害者でもある (Japan is not merely a victim but also a perpetrator), citing spy suspicions and coerced mass suicides."
      },
      {
        q: "What does the author conclude is necessary for true reconciliation?",
        choices: ["Sharing memory by listening to each other's pain", "Avoiding any discussion of history", "Building more memorials in Japan", "Apologizing once and moving on"],
        answerIndex: 0,
        explanation: "The final paragraph states that 真の和解は、記憶の共有から始まる (true reconciliation begins with shared memory) and that listening to the other's pain (相手の痛みにも耳を傾ける) is necessary."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-37 — A story about a scientist's breakthrough
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-37",
    title: "研究者[けんきゅうしゃ]の光[ひかり]",
    titleReading: "けんきゅうしゃのひかり",
    level: "N2",
    summary: "The story of Dr. Yuki Sato, a neuroscientist who spent ten years pursuing an unconventional hypothesis about protein misfolding, enduring failures and isolation, until a single experiment vindicates her — illustrating that science advances through persistence as much as through genius.",
    estMinutes: 10,
    tags: ["science", "research", "perseverance", "neuroscience", "discovery"],
    body: [
      "佐藤[さとう]由紀[ゆき]博士[はかせ]は、ある難病[なんびょう]の原因[げんいん]究明[きゅうめい]に半[はん]生[せい]を捧[ささ]げた神経[しんけい]科学[かがく]者[しゃ]である。三十[さんじゅう]代[だい]で独立[どくりつ]した研究室[けんきゅうしつ]を構[かま]えた時[とき]、彼女[かのじょ]は一[ひと]つの仮説[かせつ]を立[た]てた。特定[とくてい]のタンパク質[たんぱくしつ]の異常[いじょう]折[おり]り畳[たた]みが、神経[しんけい]細胞[さいぼう]の死[し]を引[ひ]き起[お]こすのではないか、という仮説[かせつ]であった。当時[とうじ]、その考[かんが]えは学界[がっかい]の主流[しゅりゅう]からは外[はず]れており、多[おお]くの専門家[せんもんか]が懐疑[かいぎ]的[てき]な目[め]を向[む]けていた。それでも彼女[かのじょ]は、自分[じぶん]の直感[ちょっかん]を信[しん]じて研究[けんきゅう]を続[つづ]けることを選[えら]んだ。",
      "最初[さいしょ]の五年[ごねん]間[かん]、成果[せいか]は殆[ほとん]ど現[あらわ]れなかった。実験[じっけん]は何[なん]度[ど]も失敗[しっぱい]し、データ[でーた]はばらばらに散[ち]らばった。研究費[けんきゅうひ]は次第[しだい]に減[へ]り、優秀[ゆうしゅう]な学生[がくせい]は彼女[かのじょ]の研究室[けんきゅうしつ]を避[さ]けるようになった。学会[がっかい]での発表[はっぴょう]には冷[つめ]たい質問[しつもん]が飛[と]び、彼女[かのじょ]の仮説[かせつ]を夢想[むそう]的[てき]と笑[わら]う声[こえ]も聞[き]かれた。彼女[かのじょ]自身[じしん]、何[なん]度[ど]も諦[あきら]めようと思[おも]った。それでも、毎朝[まいあさ]ラボ[らぼ]に入[はい]る彼女[かのじょ]の足[あし]取[ど]りだけは、止[と]まることはなかった。",
      "家庭[かてい]の犠牲[ぎせい]も大[おお]きかった。夫[おっと]は理解[りかい]を示[しめ]したものの、子[こ]供[ども]の運動会[うんどうかい]や卒業式[そつぎょうしき]に姿[すがた]を見[み]せないことが続[つづ]いた。同[どう]年代[ねんだい]の友人[ゆうじん]たちが旅行[りょこう]や趣味[しゅみ]を楽[たの]しむ中[なか]、彼女[かのじょ]の生活[せいかつ]は実験[じっけん]と論文[ろんぶん]の繰[く]り返[かえ]しであった。孤独[こどく]と疲労[ひろう]が彼女[かのじょ]を襲[おそ]った夜[よる]もあった。しかし、彼女[かのじょ]は研究[けんきゅう]以外[いがい]に自分[じぶん]の居場所[いばしょ]を見出[みいだ]せない人間[にんげん]でもあった。",
      "転機[てんき]は十[じゅう]年[ねん]目[め]の冬[ふゆ]に訪[おとず]れた。ある試薬[しやく]を加[くわ]えた瞬間[しゅんかん]、顕微鏡[けんびきょう]の下[もと]で予想[よそう]外[がい]の反応[はんのう]が起[お]きた。異常[いじょう]折[おり]り畳[たた]みを起[お]こしたタンパク質[たんぱくしつ]が、急[きゅう]に正常[せいじょう]な構造[こうぞう]に戻[もど]り始[はじ]めたのである。彼女[かのじょ]は息[いき]を呑[の]んだ。震[ふる]える手[て]で何[なん]度[ど]も実験[じっけん]を繰[く]り返[かえ]した。結果[けっか]は同[おな]じだった。十[じゅう]年[ねん]の暗闇[くらやみ]の中[なか]で、ようやく一筋[ひとすじ]の光[ひかり]が差[さ]し込[こ]んだ瞬間[しゅんかん]であった。",
      "発見[はっけん]を論文[ろんぶん]にまとめ、国際[こくさい]誌[し]に投稿[とうこう]したところ、激[はげ]しい査読[さどう]の末[すえ]に掲載[けいさい]が決[き]まった。世界中[せかいじゅう]の研究室[けんきゅうしつ]から追試[ついし]の結果[けっか]が寄[よ]せられ、彼女[かのじょ]の仮説[かせつ]は正[ただ]しいことが確認[かくにん]された。かつて彼女[かのじょ]を懐疑[かいぎ]的[てき]に見[み]ていた専門家[せんもんか]たちからも、続[つづ]々[つづ]と称賛[さんさん]の言葉[ことば]が届[とど]いた。彼女[かのじょ]は静[しず]かに涙[なみだ]を流[なが]した。それは喜[よろこ]びの涙[なみだ]であると同時[どうじ]に、長[なが]い孤独[こどく]をようやく終[お]わらせることのできた安堵[あんど]の涙[なみだ]でもあった。",
      "受賞[じゅしょう]や名誉[めいよ]が次[つぎ]々[つぎ]と彼女[かのじょ]を訪[おとず]れた。しかし、彼女[かのじょ]は脚光[きゃっこう]を浴[あ]びることに慣[な]れていなかった。マスコミ[ますこみ]の取材[しゅざい]には応[おう]じたものの、本心[ほんしん]では早[はや]くラボ[らぼ]に戻[もど]りたかった。名誉[めいよ]は嬉[うれ]しいが、それ以上[いじょう]に次[つぎ]の問[と]いが気[き]になって仕方[しかた]がない。患者[かんじゃ]の治療[ちりょう]に繋[つな]げるには、まだ幾[いく]つもの壁[かべ]を越[こ]えなければならない。彼女[かのじょ]の目[め]は、すでに次[つぎ]の山[やま]を見据[みす]えていた。",
      "科学[かがく]とは、光[ひかり]を求[もと]めて暗闇[くらやみ]を歩[ある]く営[いとな]みである。失敗[しっぱい]の数[かず]だけ知識[ちしき]は蓄[たくわ]えられ、疑問[ぎもん]の数[かず]だけ真実[しんじつ]に近[ちか]づく。佐藤[さとう]博士[はかせ]の物語[ものがたり]は、天才[てんさい]の閃[ひらめ]きを描[えが]くものではない。むしろ、諦[あきら]めない人間[にんげん]が、長[なが]い時間[じかん]をかけて一[ひと]つの真実[しんじつ]を掘[ほ]り起[お]こす過程[かてい]を描[えが]くものである。その歩[ある]みは遅[おそ]くとも、確[たし]かな光[ひかり]を未来[みらい]に残[のこ]していく。科学[かがく]の真価[しんか]は、そこにこそある。"
    ],
    translation: [
      "Dr. Yuki Sato is a neuroscientist who devoted half her life to elucidating the cause of an intractable disease. When she set up her own laboratory in her thirties, she advanced a hypothesis: that abnormal folding of a specific protein might trigger the death of nerve cells. At the time, the idea lay outside the academic mainstream, and many specialists looked at her with skepticism. Even so, she chose to trust her intuition and continue her research.",
      "For the first five years, results barely appeared. Experiments failed again and again, and data scattered chaotically. Research funding gradually declined, and talented students began avoiding her laboratory. Cold questions flew at her conference presentations, and voices were heard laughing off her hypothesis as dreamy. She herself thought of giving up many times. Even so, her footsteps entering the lab every morning never stopped.",
      "The sacrifices at home were also large. Her husband showed understanding, but she repeatedly failed to appear at her children's sports days and graduation ceremonies. While friends of her generation enjoyed travel and hobbies, her life was a repetition of experiments and papers. There were nights when loneliness and fatigue assailed her. But she was also a person who could find her place nowhere other than in research.",
      "The turning point came in the winter of the tenth year. The instant she added a certain reagent, an unexpected reaction occurred under the microscope. The abnormally folded protein suddenly began to return to its normal structure. She held her breath. With trembling hands, she repeated the experiment again and again. The result was the same. It was the moment when, after ten years of darkness, a single ray of light finally broke through.",
      "She compiled the discovery into a paper and submitted it to an international journal; after rigorous peer review, publication was decided. Results of replication studies arrived from laboratories around the world, and her hypothesis was confirmed as correct. Words of praise arrived one after another even from specialists who had once viewed her with skepticism. She wept quietly. They were tears of joy, and at the same time tears of relief that the long solitude could finally end.",
      "Awards and honors visited her one after another. She was not accustomed, however, to being in the spotlight. Although she responded to media interviews, in her heart she wanted to return to the lab sooner. The honors pleased her, but beyond that she was bothered by the next question. To connect the work to patient treatment, several more walls had to be crossed. Her eyes were already fixed on the next mountain.",
      "Science is the endeavor of walking through darkness in search of light. Knowledge accumulates with each failure, and one approaches truth with each question. Dr. Sato's story does not depict the flash of a genius. Rather, it depicts the process by which a person who does not give up uncovers a single truth over a long time. The pace may be slow, but it leaves a certain light for the future. The true value of science lies precisely there."
    ],
    questions: [
      {
        q: "What hypothesis did Dr. Sato advance?",
        choices: ["That a virus caused the disease", "That abnormal folding of a specific protein caused nerve cell death", "That environmental pollution was the cause", "That the disease was genetic and incurable"],
        answerIndex: 1,
        explanation: "The passage states her hypothesis was that 特定のタンパク質の異常折り畳みが、神経細胞の死を引き起こす (abnormal folding of a specific protein triggers nerve cell death)."
      },
      {
        q: "How did the academic community initially react to her hypothesis?",
        choices: ["It was widely accepted immediately", "It was viewed with skepticism as outside the mainstream", "It was banned from being published", "It received a major prize right away"],
        answerIndex: 1,
        explanation: "The text says 当時、その考えは学界の主流からは外れており、多くの専門家が懐疑的な目を向けていた (the idea lay outside the academic mainstream, and many specialists looked with skepticism)."
      },
      {
        q: "What happened in the winter of the tenth year?",
        choices: ["She decided to give up research", "A reagent caused the abnormally folded protein to return to its normal structure", "She lost her research funding entirely", "She published a best-selling book"],
        answerIndex: 1,
        explanation: "The passage describes how ある試薬を加えた瞬間 (the instant she added a certain reagent), the abnormally folded protein 急に正常な構造に戻り始めた (suddenly began returning to its normal structure)."
      },
      {
        q: "How did Dr. Sato react to the awards and honors she received?",
        choices: ["She retired immediately", "She was pleased but already focused on the next question", "She refused all awards", "She left science to become a politician"],
        answerIndex: 1,
        explanation: "The passage says 名誉は嬉しいが、それ以上に次の問いが気になって仕方がない (the honors pleased her, but the next question bothered her more), and her eyes were already on 次の山 (the next mountain)."
      },
      {
        q: "What does the author say is the true value of science?",
        choices: ["Quick discoveries by geniuses", "The slow, persistent pursuit of truth that leaves light for the future", "Earning large research grants", "Winning as many awards as possible"],
        answerIndex: 1,
        explanation: "The final paragraph states that 科学の真価は、そこにこそある (the true value of science lies precisely there), referring to the slow, persistent pursuit of truth that leaves light for the future."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-38 — The decline of print media
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-38",
    title: "紙[かみ]の終[お]わりと始[はじ]まり",
    titleReading: "かみのおわりとはじまり",
    level: "N2",
    summary: "An analysis of the collapse of print media circulation in Japan — the digital shift, free content, loss of advertising revenue, the threat to investigative journalism and local papers, paywall experiments, and the redefinition of print's role alongside digital journalism.",
    estMinutes: 9,
    tags: ["print media", "newspapers", "digital shift", "journalism", "local news"],
    body: [
      "朝[あさ]起[お]きると新聞[しんぶん]を取[と]る家庭[かてい]は、今[いま]や珍[めずら]しくなった。日本[にほん]の新聞[しんぶん]の発行[はっこう]部数[ぶすう]は、最盛期[さいせいき]の半[はん]分[ぶん]以[い]下[か]に落[お]ち込[こ]んでいる。雑誌[ざっし]の休刊[きゅうかん]も後[あと]を絶[た]たず、書店[しょてん]は街[まち]から消[き]えつつある。かつて情報[じょうほう]の源泉[げんせん]だった紙[かみ]の媒体[ばいたい]は、今[いま]、急[きゅう]速[そく]にその役割[やくわり]を終[お]えようとしている。それは単[たん]なる産業[さんぎょう]の衰退[すいたい]ではなく、社会[しゃかい]の情報[じょうほう]構造[こうぞう]そのものの変容[へんよう]を意味[いみ]している。",
      "背景[はいけい]には、デジタル[でじたる]技術[ぎじゅつ]の浸透[しんとう]がある。スマートフォン[すまーとふぉん]一[ひと]つで、誰[だれ]もがいつでも無料[むりょう]でニュース[にゅーす]にアクセス[あくせす]できる。情報[じょうほう]の洪水[こうずい]の中[なか]で、人々[ひとびと]はもはや一[ひと]つの媒体[ばいたい]に多額[たがく]を払[はら]う理由[りゆう]を見出[みいだ]せない。広告[こうこく]収入[しゅうにゅう]もネット[ねっと]系[けい]プラットフォーム[ぷらっとふぉーむ]に奪[うば]われ、旧来[きゅうらい]型[がた]の媒体[ばいたい]は経営[けいえい]の柱[はしら]を失[うしな]った。無料[むりょう]で読[よ]めるニュース[にゅーす]が当[あた]り前[まえ]になった時[とき]、有料[ゆうりょう]の紙[かみ]が生[い]き残[のこ]る余地[よち]は狭[せば]まらざるを得[え]ない。",
      "しかし、その衰退[すいたい]がもたらす損失[そんしつ]は計[はか]り知[し]れない。最[もっと]も懸念[けねん]されるのは、調査[ちょうさ]報道[ほうどう]の消失[しょうしつ]である。時間[じかん]と費用[ひよう]をかけて取材[しゅざい]し、権力[けんりょく]を監視[かんし]する機能[きのう]は、民主[みんしゅ]主義[しゅぎ]の根幹[こんかん]である。その機能[きのう]が縮小[しゅくしょう]すれば、権力[けんりょく]の暴走[ぼうそう]を止[と]める者[もの]はいなくなる。速報[そくほう]の情報[じょうほう]は増[ふ]えたが、深[ふか]く掘[ほ]り下[さ]げる報道[ほうどう]は減[へ]っている。見[み]かけ上[じょう]の情報[じょうほう]過多[かた]が、実質[じっしつ]的な情報[じょうほう]飢餓[きが]を生[う]んでいる。",
      "地方[ちほう]紙[し]の危機[きき]は、さらに深刻[しんこく]である。全国[ぜんこく]紙[し]がカバー[かばー]しない地域[ちいき]の情報[じょうほう]は、地元[じもと]紙[し]に頼[たよ]るしかない。しかし、地元[じもと]紙[し]の廃刊[はいかん]が進[すす]めば、地域[ちいき]の住民[じゅうみん]は自分[じぶん]たちに関[かん]わる問題[もんだい]を知[し]る手段[しゅだん]を失[うしな]う。自治体[じちたい]の不祥事[ふしょうじ]、選挙[せんきょ]の候補者[こうほしゃ]の言動[げんどう]、地域[ちいき]の産業[さんぎょう]の動向[どうこう]など、民主[みんしゅ]主義[しゅぎ]の基盤[きばん]となる情報[じょうほう]が見[み]えなくなるのである。地方[ちほう]の消滅[しょうめつ]が騒[さわ]がれる中[なか]、情報[じょうほう]の面[めん]からも地方[ちほう]は疲弊[ひへい]しつつある。",
      "一方[いっぽう]で、新[あたら]しい試[こころ]みも生[う]まれている。デジタル[でじたる]購読[こうどく]の有料[ゆうりょう]化[か]、いわゆるペイウォール[ぺいうぉーる]の導入[どうにゅう]がその代表[だいひょう]である。質[しつ]の高[たか]い報道[ほうどう]には対価[たいか]を払[はら]う、という考[かんが]え方が徐[じょじょ]々に浸透[しんとう]しつつある。また、独立[どくりつ]系[けい]メディア[めでぃあ]や非営利[ひえいり]ジャーナリズム[じゃーなりずむ]も成長[せいちょう]している。読者[どくしゃ]からの寄付[きふ]や会費[かいひ]で運営[うんえい]されるこれらの媒体[ばいたい]は、広告[こうこく]収入[しゅうにゅう]に依存[いぞん]しない新[あたら]しい持続[じぞく]モデル[もでる]を提示[ていじ]している。",
      "課題[かだい]は、速[すみ]やかさと深[ふか]さの両立[りょうりつ]である。ネット[ねっと]は速[すみ]やかだが、しばしば浅[あさ]い。紙[かみ]は遅[おそ]いが、深[ふか]い。両者[りょうしゃ]が互[たが]いの弱点[じゃくてん]を補[おぎな]い合[あ]う関係[かんけい]を築[きず]くことができれば、次世代[じせだい]のジャーナリズム[じゃーなりずむ]はより強[つよ]靭[じん]なものになるだろう。記者[きしゃ]の育成[いくせい]、編集[へんしゅう]の質[しつ]、読者[どくしゃ]との対話[たいわ]など、見直[みなお]すべき点[てん]は多[おお]い。技術[ぎじゅつ]に振[ふ]り回[まわ]されることなく、本質[ほんしつ]を見極[みきわ]める姿勢[しせい]が求[もと]められる。",
      "紙[かみ]が終[お]わる、とは言[い]い切[き]れない。むしろ、紙[かみ]の役割[やくわり]が再定義[さいていぎ]されようとしている。速報[そくほう]はデジタル[でじたる]に譲[ゆず]り、深掘[ほほ]りや長文[ちょうぶん]の調査[ちょうさ]報道[ほうどう]は紙[かみ]や電子[でんし]書籍[しょせき]で、という棲[す]み分[わ]けである。重要[じゅうよう]なのは、媒体[ばいたい]の形[かたち]ではなく、ジャーナリズム[じゃーなりずむ]の精神[せいしん]を守[まも]り抜[ぬ]くことである。真実[しんじつ]を追[お]い求[もと]め、権力[けんりょく]を問[と]い続[つづ]けるその営[いとな]みこそが、民主[みんしゅ]主義[しゅぎ]を支[ささ]える土台[どだい]である。紙[かみ]の終[お]わりは、ジャーナリズム[じゃーなりずむ]の新[あたら]しい始[はじ]まりでもある。"
    ],
    translation: [
      "Households that take a newspaper in the morning have now become rare. The circulation of Japanese newspapers has fallen to less than half its peak. Magazine closures are unceasing, and bookstores are disappearing from the streets. Print media, once the source of information, are now rapidly ending their role. This is not merely industrial decline; it means a transformation of the very information structure of society.",
      "Behind it lies the penetration of digital technology. With a single smartphone, anyone can access news for free at any time. Amid a flood of information, people can no longer find a reason to pay large sums to a single medium. Advertising revenue has also been taken by net-based platforms, and old-style media have lost the pillar of their business. When free news became the norm, the room for paid print to survive inevitably narrowed.",
      "Yet the loss brought by this decline is immeasurable. The most worrying is the disappearance of investigative journalism. The function of spending time and money on reporting and monitoring power is the foundation of democracy. If that function shrinks, no one will remain to stop the runaway of power. Breaking news has increased, but in-depth reporting has decreased. An apparent glut of information is producing a substantive information famine.",
      "The crisis of local newspapers is even more serious. Information about regions not covered by national papers can only be relied on from local papers. But if local papers fold, residents lose the means to know about issues concerning them. Scandals in local government, the words and deeds of election candidates, and the trends of local industry: the information that forms the basis of democracy becomes invisible. While the disappearance of the regions is being discussed, the regions are also withering from the side of information.",
      "On the other hand, new initiatives are emerging. The introduction of paid digital subscriptions, the so-called paywall, is representative. The idea that quality reporting should be paid for is gradually taking root. In addition, independent media and non-profit journalism are growing. These outlets, financed by reader donations and membership fees, present a new sustainable model that does not depend on advertising revenue.",
      "The challenge is the compatibility of speed and depth. The net is fast but often shallow. Print is slow but deep. If the two can build a relationship that compensates for each other's weaknesses, next-generation journalism will become more robust. There are many points to review, such as training reporters, editorial quality, and dialogue with readers. Rather than being tossed about by technology, an attitude of discerning the essence is required.",
      "One cannot definitively say print is ending. Rather, the role of print is being redefined. Breaking news is yielded to digital, while in-depth reporting and long-form investigative journalism are kept in print or e-books: a division of habitats. What matters is not the form of the medium, but preserving the spirit of journalism. The endeavor of pursuing truth and continuing to question power is the foundation that sustains democracy. The end of print is also a new beginning for journalism."
    ],
    questions: [
      {
        q: "According to the passage, what does the decline of print media signify?",
        choices: ["Merely an industrial decline", "A transformation of society's information structure", "That people no longer need any information", "That digital media will soon disappear too"],
        answerIndex: 1,
        explanation: "The passage states that それは単なる産業の衰退ではなく、社会の情報構造そのものの変容を意味している (it is not merely industrial decline, but a transformation of society's information structure itself)."
      },
      {
        q: "What is identified as the most worrying loss from the decline?",
        choices: ["The disappearance of investigative journalism", "The reduction in advertising jobs", "The lack of entertainment magazines", "The closing of physical bookstores only"],
        answerIndex: 0,
        explanation: "The text states 最も懸念されるのは、調査報道の消失である (the most worrying is the disappearance of investigative journalism), which monitors power."
      },
      {
        q: "Why is the crisis of local newspapers especially serious?",
        choices: ["Because national papers cover everything", "Because residents lose access to information about their own region", "Because local papers are too expensive", "Because there are no elections in the regions"],
        answerIndex: 1,
        explanation: "The passage says that if local papers fold, 地域の住民は自分たちに関わる問題を知る手段を失う (residents lose the means to know about issues concerning their own region)."
      },
      {
        q: "What new initiatives does the passage mention as a possible model?",
        choices: ["Government-run media only", "Paywalls, independent media, and non-profit journalism", "Banning all free news sites", "Returning exclusively to print"],
        answerIndex: 1,
        explanation: "The passage mentions ペイウォールの導入 (introduction of paywalls), 独立系メディア (independent media), and 非営利ジャーナリズム (non-profit journalism) as new models."
      },
      {
        q: "What does the author conclude about the future of journalism?",
        choices: ["Print will entirely disappear", "The spirit of journalism matters more than the medium; print's end is a new beginning", "Digital media will replace all journalism permanently", "Journalism should focus only on speed"],
        answerIndex: 1,
        explanation: "The final paragraph states that what matters is not the form of the medium but ジャーナリズムの精神を守り抜くこと (preserving the spirit of journalism), and that 紙の終わりは、ジャーナリズムの新しい始まりでもある (the end of print is also a new beginning for journalism)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-39 — A story about a community's fight against pollution
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-39",
    title: "汚[よご]された川[かわ]と人々[ひとびと]",
    titleReading: "よごされたかわとひとびと",
    level: "N2",
    summary: "The story of Seiryu-cho, a small town whose beloved river is poisoned by an upstream chemical factory. A retired teacher, university researchers, and ordinary citizens build a movement, gather scientific evidence, and win a five-year class-action lawsuit — showing the power and persistence of civic engagement.",
    estMinutes: 11,
    tags: ["pollution", "citizen movement", "lawsuit", "environment", "democracy"],
    body: [
      "山[やま]深[ふか]い谷[たに]に挟[はさ]まれた小[ちい]さな町[まち]、清流[せいりゅう]町[ちょう]は、その名[な]の通[とお]り美[うつく]しい川[かわ]で知[し]られていた。住民[じゅうみん]は川[かわ]の水[みず]で田[た]を灌[かん]がい、子[こ]供[ども]たちは夏[なつ]には川[かわ]で泳[およ]いだ。鮎[あゆ]や鯉[こい]が豊[ゆた]かに獲[と]れ、川[かわ]は人々[ひとびと]の生活[せいかつ]と文化[ぶんか]の中心[ちゅうしん]だった。誰[だれ]もがこの川[かわ]が永遠[えいえん]に清[きよ]らかで続[つづ]くと信[しん]じていた。その信[しん]じ込[こ]みが、皮肉[ひにく]にも悲劇[ひげき]を遅[おく]らせてしまった。",
      "最初[さいしょ]の異変[いへん]は、子[こ]供[ども]たちの間[あいだ]で起[お]きた。川[かわ]で遊[あそ]んだ翌日[よくじつ]に皮膚[ひふ]の発疹[はっしん]を訴[うった]える子[こ]が増[ふ]えた。間[ま]もなく、川[かわ]の魚[さかな]が腹[はら]を上[うえ]にして浮[う]かび始[はじ]めた。初期[しょき]には住民[じゅうみん]も原因[げんいん]が分[わ]からず、自然[しぜん]の気[き]まぐれだと考[かんが]えた者[もの]もいた。しかし、異変[いへん]は拡大[かくだい]する一方[いっぽう]で、ついに町[まち]の医師[いし]が異常[いじょう]を訴[うった]え出[で]た。私[わたし]たちの川[かわ]が、殺[ころ]されようとしている。その時[とき]、住民[じゅうみん]の不安[ふあん]は確信[かくしん]に変[か]わった。",
      "調査[ちょうさ]を進[すす]めるうち、疑[うたが]いの目[め]は上流[じょうりゅう]に新設[しんせつ]された化学[かがく]工場[こうじょう]に向[む]いた。町[まち]を振[ふる]興[こう]するために誘致[ゆうち]された工場[こうじょう]は、町[まち]に雇用[こよう]をもたらしていたが、排水[はいすい]の処理[しょり]設備[せつび]が不十分[ふじゅうぶん]だった。住民[じゅうみん]の代表[だいひょう]が工場[こうじょう]に抗議[こうぎ]すると、工場[こうじょう]側[がわ]は基準[きじゅん]を満[み]たしていると繰[く]り返[かえ]すのみだった。町[まち]の役場[やくば]も、税[ぜい]収[しゅう]を失[うしな]うことを恐[おそ]れて、住民[じゅうみん]の訴[うった]えに鈍[にぶ]感[かん]だった。",
      "絶望[ぜつぼう]しかけたその時[とき]、一人[ひとり]の退職[たいしょく]教師[きょうし]が立[た]ち上[あ]がった。彼[かれ]は近隣[きんえん]の大学[だいがく]の研究者[けんきゅうしゃ]に相談[そうだん]し、川[かわ]の水[みず]の独立[どくりつ]した検査[けんさ]を提案[ていあん]した。最初[さいしょ]は少[すく]なかった支援[しえん]者[しゃ]も、説明会[せつめいかい]を重[かさ]ねるごとに増[ふ]えていった。主婦[しゅふ]たちが署名[しょめい]を集[あつ]め、漁師[りょうし]たちがボランティア[ぼらんてぃあ]で水[みず]質[しつ]調査[ちょうさ]に加[くわ]わった。無関心[むかんしん]だった人々[ひとびと]が、徐[じょじょ]々に連帯[れんたい]を形成[けいせい]していったのである。",
      "大学[だいがく]の検査[けんさ]結果[けっか]は、住民[じゅうみん]の不安[ふあん]を裏付[うらづ]けるものだった。川[かわ]から、規制[きせい]値[ち]を大幅[おおはば]に超[こ]える有害[ゆうがい]物質[ぶっしつ]が検出[けんしゅつ]された。工場[こうじょう]側[がわ]は依然[いぜん]として否定[ひてい]したが、データ[でーた]は冷酷[れいひつ]な事実[じじつ]を語[かた]っていた。住民[じゅうみん]は弁護士[べんごし]と協議[きょうぎ]の末[すえ]、工場[こうじょう]と行政[ぎょうせい]を相手取[あいてど]り、集団[しゅうだん]訴訟[そしょう]を起[お]こすことを決[き]めた。一[ひと]庶民[しょみん]が巨大[きょだい]企業[きぎょう]に挑[いど]む、一[ひと]見[けん]無謀[むぼう]な戦[たたか]いの始[はじ]まりであった。",
      "裁判[さいばん]は五年[ごねん]にわたった。工場[こうじょう]側[がわ]は著名[ちょめい]な弁護士[べんごし]を雇[やと]い、専門[せんもん]的[てき]な反論[はんろん]を展開[てんかい]した。しかし、住民[じゅうみん]側[がわ]は粘[ねば]り強[づよ]く証拠[しょうこ]を積[つ]み上[あ]げた。退職[たいしょく]教師[きょうし]の証言[しょうげん]、大学[だいがく]研究者[けんきゅうしゃ]の鑑定[かんてい]、当時[とうじ]の工場[こうじょう]従業[じゅうぎょう]員[いん]の内部[ないぶ]告発[こくはつ]など、決定的[けっていてき]な証拠[しょうこ]が次々[つぎつぎ]と提示[ていじ]された。ついに裁判[さいばん]所[しょ]は、工場[こうじょう]に排水[はいすい]規制[きせい]違反[いはん]と損害[そんがい]賠償[ばいしょう]を命[めい]じる判決[はんけつ]を下[くだ]した。町[まち]を挙[あ]げて歓喜[かんき]の声[こえ]が上がった。",
      "この事件[じけん]は、平凡[へいぼん]な市民[しみん]が団結[だんけつ]すれば、巨大[きょだい]な権力[けんりょく]にも勝[か]てることを示した。一方[いっぽう]で、勝利[しょうり]は終点[しゅうてん]ではなく始[はじ]まりでもあった。川[かわ]が完全[かんぜん]に浄化[じょうか]されるまでには、さらに十[じゅう]年[ねん]を要[よう]した。監視[かんし]の目[め]を緩[ゆる]めれば、再[ふたた]び汚染[おせん]は起[お]こる。民主[みんしゅ]主義[しゅぎ]の根幹[こんかん]は、市民[しみん]が自[みずか]ら関[かん]与[よ]し続[つづ]けることにある。清流[せいりゅう]町[ちょう]の物語[ものがたり]は、その小[ちい]さな真理[しんり]を私[わたし]たちに伝[つた]えている。"
    ],
    translation: [
      "The small town of Seiryu-cho, nestled in a deep valley between mountains, was known, as its name suggests, for its beautiful river. Residents irrigated their fields with the river water, and children swam in it in summer. Sweetfish and carp were caught abundantly, and the river was the center of people's lives and culture. Everyone believed this river would remain clear forever. That conviction, ironically, delayed the tragedy.",
      "The first anomaly occurred among the children. The day after playing in the river, more and more children complained of skin rashes. Soon, fish in the river began floating belly-up. At first, residents did not know the cause; some thought it a whim of nature. But the anomalies kept expanding, and finally the town's doctor raised the alarm. Our river is being killed. At that moment, the residents' unease turned into conviction.",
      "As the investigation proceeded, suspicion turned to a chemical factory newly built upstream. The factory, invited to revitalize the town, brought employment but had inadequate wastewater treatment facilities. When residents' representatives protested to the factory, the factory side merely repeated that it met the standards. The town hall, fearing the loss of tax revenue, was also insensitive to the residents' complaints.",
      "Just when they were about to despair, a retired teacher stood up. He consulted researchers at a nearby university and proposed an independent test of the river water. Supporters, few at first, grew with each explanatory meeting. Housewives gathered signatures, fishermen volunteered to join water-quality surveys. People who had been indifferent gradually formed solidarity.",
      "The university's test results confirmed the residents' fears. From the river, harmful substances exceeding regulatory limits by a wide margin were detected. The factory side continued to deny it, but the data spoke of cold facts. After consultation with lawyers, residents decided to file a class-action lawsuit against both the factory and the administration. It was the beginning of a seemingly reckless fight: ordinary citizens challenging a giant corporation.",
      "The trial lasted five years. The factory side hired prominent lawyers and advanced technical rebuttals. But the residents' side patiently accumulated evidence. The retired teacher's testimony, the university researchers' expert opinions, and the internal whistle-blowing of a former factory employee were decisive pieces of evidence presented one after another. Finally, the court ruled that the factory had violated wastewater regulations and ordered it to pay damages. Voices of joy rose throughout the town.",
      "This incident showed that when ordinary citizens unite, they can prevail over great power. On the other hand, the victory was not the end but also a beginning. It took another ten years for the river to be fully purified. If vigilance is relaxed, pollution will occur again. The foundation of democracy lies in citizens' own continued involvement. The story of Seiryu-cho conveys that small truth to us."
    ],
    questions: [
      {
        q: "What was Seiryu-cho known for?",
        choices: ["Its chemical industry", "Its beautiful clear river", "Its large university", "Its famous lawyer"],
        answerIndex: 1,
        explanation: "The passage states that 清流町は、その名の通り美しい川で知られていた (Seiryu-cho was known, as its name suggests, for its beautiful river)."
      },
      {
        q: "What were the first signs of the pollution?",
        choices: ["Children developed skin rashes and fish floated dead", "The river suddenly dried up", "The town hall caught fire", "Tourists stopped visiting"],
        answerIndex: 0,
        explanation: "The text says that 川で遊んだ翌日に皮膚の発疹を訴える子が増えた (more children complained of skin rashes after playing in the river) and 川の魚が腹を上にして浮かび始めた (fish began floating belly-up)."
      },
      {
        q: "Who initially stood up to investigate the cause?",
        choices: ["The factory owner himself", "A retired teacher who consulted university researchers", "The town mayor", "A famous national politician"],
        answerIndex: 1,
        explanation: "The passage states that 一人の退職教師が立ち上がった (a retired teacher stood up) and consulted 近隣の大学の研究者 (researchers at a nearby university)."
      },
      {
        q: "What was the court's final ruling?",
        choices: ["The residents lost the case", "The factory was ordered to comply with wastewater regulations and pay damages", "The factory was praised for its environmental efforts", "The lawsuit was dismissed without a ruling"],
        answerIndex: 1,
        explanation: "The passage states that 裁判所は、工場に排水規制違反と損害賠償を命じる判決を下した (the court ordered the factory to comply with wastewater regulations and pay damages)."
      },
      {
        q: "What lesson does the author draw from the Seiryu-cho story?",
        choices: ["That citizens must remain involved and vigilant; victory is not the end", "That pollution is unavoidable", "That only the government can solve environmental problems", "That small towns cannot defeat large corporations"],
        answerIndex: 0,
        explanation: "The final paragraph states that 勝利は終点ではなく始まりでもあった (victory was not the end but also a beginning) and that 監視の目を緩めれば、再び汚染は起こる (if vigilance is relaxed, pollution will occur again)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-40 — The Japanese concept of ikigai
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-40",
    title: "生[い]きがいという思想[しそう]",
    titleReading: "いきがいというしそう",
    level: "N2",
    summary: "An exploration of the Japanese concept of ikigai — its origin, the four-pillars framework, its link to Okinawan longevity, its Western popularization, the limitations of simplified interpretations, and the idea that ikigai is found in small daily joys rather than grand goals.",
    estMinutes: 9,
    tags: ["ikigai", "philosophy", "longevity", "wellbeing", "culture"],
    body: [
      "生[い]きがいという言葉[ことば]は、近年[きんねん]世界[せかい]中[じゅう]で注目[ちゅうもく]を集[あつ]めるようになった。直訳[ちょくやく]は難[むずか]しいが、生[い]きる価値[かち]や生[い]きる張[は]り合[あ]いといった意味[いみ]を持[も]つ。日本[にほん]の日常[にちじょう]語[ご]であったこの言葉[ことば]は、欧米[おうべい]のセルフヘルプ[せるふへるぷ]文化[ぶんか]の中[なか]で再解釈[さいかいしゃく]され、広[ひろ]まった。しかし、その本来[ほんらい]の意味[いみ]は、欧米[おうべい]流[りゅう]の自己[じこ]実現[じつげん]の枠組[わくぐ]みの中[なか]に収[おさ]まるものではない。日本[にほん]の文脈[ぶんめき]で生[う]まれたこの概念[がいねん]を、改[あらた]めて見直[みなお]してみたい。",
      "よく知[し]られる四[よ]つの円[えん]の図[ず]は、好[す]きなこと、得意[とくい]なこと、社会[しゃかい]が求[もと]めること、報酬[ほうしゅう]を得[え]られること、の四要素[よようそ]の交点[こうてん]として生[い]きがいを描[えが]く。この枠組[わくぐ]みは分[わ]かりやすく、海外[かいがい]で人気[にんき]を博[はく]した。しかし、本来[ほんらい]の生[い]きがいは、必[かなら]ずしも経済[けいざい]的[てき]な報酬[ほうしゅう]と結[むす]びついているわけではない。むしろ、何[なに]に対[たい]しても報酬[ほうしゅう]を求[もと]める考[かんが]え方[かた]は、生[い]きがいの精神[せいしん]から遠[とお]ざかるものでもある。",
      "沖縄[おきなわ]は世界[せかい]有数[ゆうすう]の長寿[ちょうじゅ]地域[ちいき]として知[し]られている。研究者[けんきゅうしゃ]はその理由[りゆう]の一[ひと]つとして、生[い]きがいを持[も]つ生活[せいかつ]を挙[あ]げる。朝[あさ]起[お]きて庭[にわ]の手入[てい]れをする、近所[きんじょ]の老人[ろうじん]会[かい]に出席[しゅっせき]する、孫[まご]の成長[せいちょう]を見守[みまも]る、といった日々[ひび]の小[ちい]さな営[いとな]みが、高齢者[こうれいしゃ]に生[い]きる理由[りゆう]を与[あた]え続[つづ]けている。生物学的[せいぶつがくてき]にも、目的[もくてき]意識[いしき]の維持[いじ]は健康[けんこう]に好[こう]影響[えいきょう]を及[およ]ぼすとされる。",
      "海外[かいがい]で生[い]きがいが受[う]け入[い]れられた理由[りゆう]は、現代[げんだい]社会[しゃかい]の空[くう]虚[きょ]さへの反動[はんどう]であろう。キャリア[きゃりあ]の成功[せいこう]だけでは埋[う]められない心[こころ]の隙間[すきま]を、人々[ひとびと]は埋[う]めようとしてきた。生[い]きがいという言葉[ことば]は、効率[こうりつ]や成果[せいか]では測[はか]れない価値[かち]の存在[そんざい]を認[みと]めさせるものとして機能[きのう]した。その点[てん]で、この日本[にほん]の概念[がいねん]は、現代[げんだい]の精神的[せいしんてき]な渇望[かつぼう]に応[こた]えたと言[い]える。",
      "ただし、簡略化[かんりゃくか]された解釈[かいしゃく]には注意[ちゅうい]が必要[ひつよう]である。生[い]きがいは、成功[せいこう]の技術[ぎじゅつ]でも、幸福[こうふく]の処方[しょほう]箋[せん]でもない。一[ひと]つの職業[しょくぎょう]や趣味[しゅみ]に固定[こてい]されるものでもない。それは、人[ひと]と人[ひと]、人[ひと]と自然[しぜん]、人[ひと]と自己[じこ]の関係[かんけい]の中[なか]で、徐[じょじょ]々に醸成[じょうせい]される感覚[かんかく]である。道具[どうぐ]のように手[て]に入れるものではなく、土[つち]から芽[め]が出[で]るように育[そだ]つものである。その曖昧[あいまい]さこそが、生[い]きがいの本質[ほんしつ]である。",
      "現代[げんだい]の日本[にほん]において、生[い]きがいを見失[みうしな]う人[ひと]が増[ふ]えている。長[なが]時間[じかん]労働[ろうどう]は人[ひと]から余裕[よゆう]を奪[うば]い、地域[ちいき]の繋[つな]がりは希薄[きはく]化[か]した。若[わか]い世代[せだい]は雇用[こよう]の不安定[ふあんてい]さの中[なか]で、未来[みらい]像[ぞう]を描[えが]けずにいる。かつては地域[ちいき]や家族[かぞく]の中[なか]で自然[しぜん]に与[あた]えられていた生[い]きがいが、今[いま]は個[こ]人[じん]が自[みずか]ら見[み]つけ出[だ]さなければならない。その難[むずか]しさが、現代人[げんだいじん]の孤独[こどく]を深[ふか]めている。",
      "生[い]きがいは、必[かなら]ずしも大[おお]きな目標[もくひょう]である必要[ひつよう]はない。朝[あさ]のコーヒー[こーひー]を淹[い]れる時間[じかん]、近所[きんじょ]の猫[ねこ]に挨拶[あいさつ]する習慣[しゅうかん]、仕事[しごと]の後[ご]に聴[き]く一曲[いっきょく]の音楽[おんがく]。そうした小[ちい]さな喜[よろこ]びの積[つ]み重[かさ]ねが、全体[ぜんたい]として生[い]きる意味[いみ]を形[かた]作[づく]る。生[い]きがいを見[み]つけるのではなく、日々[ひび]の中[なか]に気[き]づくものだとすれば、その考[かんが]え方[かた]は、現代人[げんだいじん]にとっての救[すく]いになるかもしれない。"
    ],
    translation: [
      "The word ikigai has come to attract attention around the world in recent years. It is difficult to translate directly, but it carries meanings such as value in living or zest for life. Once an everyday Japanese word, it was reinterpreted within Western self-help culture and spread. However, its original meaning does not fit within the Western framework of self-realization. I would like to re-examine this concept, born in the Japanese context.",
      "The well-known diagram of four circles depicts ikigai as the intersection of four elements: what you love, what you are good at, what society needs, and what you can be paid for. This framework is easy to understand and won popularity abroad. However, ikigai in its original form is not necessarily tied to economic reward. Rather, the attitude of seeking reward for everything also distances one from the spirit of ikigai.",
      "Okinawa is known as one of the world's leading longevity regions. Researchers cite an ikigai-filled life as one reason. Small daily activities — getting up in the morning to tend the garden, attending the neighborhood senior association meetings, watching over grandchildren's growth — continue to give the elderly reasons to live. Biologically too, maintaining a sense of purpose is said to have a positive effect on health.",
      "The reason ikigai was accepted abroad is probably a reaction to the emptiness of modern society. People have tried to fill the gap in the heart that career success alone cannot fill. The word ikigai functioned to make people recognize values that cannot be measured by efficiency or outcomes. In that sense, this Japanese concept answered a spiritual longing of the modern age.",
      "However, caution is needed with simplified interpretations. Ikigai is neither a technique for success nor a prescription for happiness. Nor is it fixed to a single occupation or hobby. It is a feeling gradually brewed within relationships between person and person, person and nature, person and self. It is not something to be acquired like a tool, but something that grows like a sprout from the soil. That ambiguity is precisely the essence of ikigai.",
      "In modern Japan, the number of people losing sight of ikigai is increasing. Long working hours rob people of leeway, and community ties have thinned. Amid employment instability, the younger generation cannot picture a future image. Ikigai, once given naturally within the community and family, must now be found by individuals themselves. That difficulty deepens the loneliness of modern people.",
      "Ikigai need not be a grand goal. The time spent brewing morning coffee, the habit of greeting the neighborhood cat, a single piece of music listened to after work. The accumulation of such small joys forms, as a whole, the meaning of living. Rather than finding ikigai, if we consider it something to notice within daily life, that way of thinking may be a salvation for modern people."
    ],
    questions: [
      {
        q: "According to the passage, what does the word ikigai mean?",
        choices: ["\"Value in living\" or \"zest for life\"", "\"Success in business\"", "\"Long life\"", "\"Mindfulness meditation\""],
        answerIndex: 0,
        explanation: "The passage states that 生きる価値や生きる張り合いといった意味を持つ (it carries meanings such as value in living or zest for life)."
      },
      {
        q: "What does the four-circles framework of ikigai include?",
        choices: ["What you love, what you are good at, what society needs, what you can be paid for", "Money, fame, power, status", "Family, work, hobby, friends", "Health, wealth, wisdom, longevity"],
        answerIndex: 0,
        explanation: "The passage describes the four elements as 好きなこと、得意なこと、社会が求めること、報酬を得られること (what you love, what you are good at, what society needs, what you can be paid for)."
      },
      {
        q: "According to the passage, what is one reason researchers cite for Okinawan longevity?",
        choices: ["An ikigai-filled life", "A specific diet only", "High income levels", "Living in cities"],
        answerIndex: 0,
        explanation: "The text states that 研究者はその理由の一つとして、生きがいを持つ生活を挙げる (researchers cite an ikigai-filled life as one reason)."
      },
      {
        q: "What does the passage warn about regarding simplified interpretations of ikigai?",
        choices: ["That they should be adopted universally", "That ikigai is not a technique for success or a prescription for happiness", "That ikigai must be tied to economic reward", "That ikigai only applies to the elderly"],
        answerIndex: 1,
        explanation: "The passage warns that 生きがいは、成功の技術でも、幸福の処方箋でもない (ikigai is neither a technique for success nor a prescription for happiness)."
      },
      {
        q: "What does the author suggest ikigai is in the final paragraph?",
        choices: ["A grand goal one must achieve", "Something to notice in small daily joys", "A career change", "A religious practice"],
        answerIndex: 1,
        explanation: "The final paragraph states that small joys like morning coffee or greeting a cat form the meaning of living, and that 生きがいを見つけるのではなく、日々の中に気づくもの (rather than finding ikigai, it is something to notice within daily life)."
      }
    ]
  }
];
