import type { StoryData } from "@/lib/types";

// N2 short stories set A (new batch).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole run. Kana, katakana, digits, and
// punctuation have no brackets. titleReading is full kana with NO brackets.
// N2 grammar targets: 〜どころか, 〜に違いない, 〜限り, 〜次第, 〜に過ぎない,
// 〜かねない, 〜つつある, 〜上で, 〜際, 〜にかけては, 〜わけにはいかない,
// 〜おそれがある, 〜にもかかわらず, 〜に比べ, 〜においては, 〜にとって, etc.

export const storiesN2NewA: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n2n-01 — A corporate scandal (企業スキャンダル)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-01",
    title: "倒[たお]れかけた企業[きぎょう]",
    titleReading: "たおれかけたきぎょう",
    level: "N2",
    summary: "A veteran journalist uncovers an accounting cover-up that has pushed a major electronics manufacturer to the brink of collapse.",
    estMinutes: 7,
    tags: ["business", "ethics", "scandal"],
    body: [
      "先月[せんげつ]、大手[おおて]電機[でんき]メーカーの不正会計[ふせいかいけい]が発覚[はっかく]した。三十年[さんじゅうねん]にわたる経営[けいえい]の裏[うら]で、巨額[きょがく]の損失[そんしつ]が隠[かく]され続[つづ]けられていたのだ。",
      "記者[きしゃ]である私[わたし]は、内部告発[ないぶこくはつ]をきっかけにこの件[けん]を追[お]い始[はじ]めた。当初[とうしょ]は社長[しゃちょう]側[がわ]が全面否定[ぜんめんひてい]するどころか、むしろ私[わたし]の取材[しゅざい]自体[じたい]を妨害[ぼうがい]してきた。",
      "しかし、関係者[かんけいしゃ]の証言[しょうげん]を重[かさ]ねるうちに、偽[にせ]の報告書[ほうこくしょ]が組織的[そしきてき]に作成[さくせい]されていた事実[じじつ]が浮[う]かび上[あ]がった。これが単[たん]なるミスにすぎないと主張[しゅちょう]する向[む]きもあったが、証拠[しょうこ]はそれを許[ゆる]さなかった。",
      "調査[ちょうさ]を進[すす]めるにつれて、損失[そんしつ]の規模[きぼ]は当初[とうしょ]の予想[よそう]をはるかに超[こ]えていることが判明[はんめい]した。会計部門[かいけいぶもん]だけの問題[もんだい]ではなく、経営陣[けいえいじん]が意図的[いとてき]に関与[かんよ]していた疑[うたが]いが濃[こ]い。",
      "公表[こうひょう]次第[しだい]、株価[かぶか]は暴落[ぼうらく]し、取引先[とりひきさき]の撤退[てったい]が相次[あいつ]いだ。信用[しんよう]という資産[しさん]は、長年[ながねん]かけて築[きず]いたものの、一度[いちど]失[うしな]えば取[と]り戻[もど]すのは容易[ようい]ではない。",
      "私[わたし]が恐[おそ]れるのは、この件[けん]が日本[にほん]の製造業[せいぞうぎょう]全体[ぜんたい]への信頼[しんらい]に傷[きず]をつける恐[おそ]れがあるという点[てん]だ。優秀[ゆうしゅう]な現場[げんば]の技術者[ぎじゅつしゃ]まで巻[ま]き込[こ]まれかねない。",
      "とはいえ、責任[せきにん]ある立場[たちば]にある者[もの]が適切[てきせつ]に説明[せつめい]し、再発[さいはつ]防止[ぼうし]策[さく]を示[しめ]さない限[かぎ]り、社会[しゃかい]は納得[なっとく]しないだろう。透明性[とうめいせい]なくして企業[きぎょう]の存続[そんぞく]はあり得[え]ない。",
      "最終的[さいしゅうてき]に社長[しゃちょう]は辞任[じにん]に追[お]い込[こ]まれ、第三者[だいさんしゃ]委員会[いいんかい]が設置[せっち]されることになった。改革[かいかく]が形[かたち]になるかどうかは、これからの経営陣[けいえいじん]の覚悟[かくご]次第[しだい]である。"
    ],
    translation: [
      "Last month, fraudulent accounting at a major electronics maker came to light. Behind thirty years of management, enormous losses had been kept concealed.",
      "As a journalist, I began pursuing this case after an internal whistleblower came forward. Far from outright denial, the president's side actually obstructed my reporting itself.",
      "However, as I piled up testimony from those involved, the fact that forged reports had been systematically produced came to light. Some insisted it was nothing more than a mere mistake, but the evidence did not permit that.",
      "As the investigation progressed, the scale of the losses turned out to far exceed initial expectations. It was not a problem confined to the accounting division; suspicion of intentional involvement by management ran deep.",
      "As soon as it was disclosed, share prices crashed and business partners withdrew one after another. Trust, although an asset built up over many years, is not easily recovered once lost.",
      "What I fear is that this case could damage trust in the entire Japanese manufacturing industry. Even outstanding engineers on the front line could end up being dragged in.",
      "That said, unless those in positions of responsibility explain matters properly and present measures to prevent recurrence, society will not be convinced. Without transparency, no company can continue to exist.",
      "Ultimately the president was driven to resign, and a third-party committee was established. Whether reform will take shape depends entirely on the resolve of the new management team."
    ],
    vocab: [
      { word: "企業", reading: "きぎょう", meaning: "company; enterprise" },
      { word: "不正会計", reading: "ふせいかいけい", meaning: "fraudulent accounting" },
      { word: "発覚", reading: "はっかく", meaning: "coming to light" },
      { word: "巨額", reading: "きょがく", meaning: "huge sum" },
      { word: "内部告発", reading: "ないぶこくはつ", meaning: "whistleblowing" },
      { word: "妨害", reading: "ぼうがい", meaning: "obstruction" },
      { word: "証言", reading: "しょうげん", meaning: "testimony" },
      { word: "証拠", reading: "しょうこ", meaning: "evidence" },
      { word: "暴落", reading: "ぼうらく", meaning: "crash (of prices)" },
      { word: "撤退", reading: "てったい", meaning: "withdrawal" },
      { word: "意図的", reading: "いとてき", meaning: "intentional" },
      { word: "関与", reading: "かんよ", meaning: "involvement" },
      { word: "委員会", reading: "いいんかい", meaning: "committee" },
      { word: "覚悟", reading: "かくご", meaning: "resolve; readiness" },
      { word: "透明性", reading: "とうめいせい", meaning: "transparency" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-02 — A startup pitch (スタートアップのピッチ)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-02",
    title: "夢[ゆめ]を託[たく]した八分間[はちふんかん]",
    titleReading: "ゆめをたくしたはちふんかん",
    level: "N2",
    summary: "A young founder pitches an AI-driven agricultural platform to a panel of skeptical investors in just eight minutes.",
    estMinutes: 6,
    tags: ["business", "technology", "presentation"],
    body: [
      "先週[せんしゅう]、東京[とうきょう]で開[ひら]れたスタートアップコンテストに参加[さんか]した。私[わたし]たちのチームは、AIを活用[かつよう]した農業[のうぎょう]支援[しえん]プラットフォームを発表[はっぴょう]することになった。",
      "発表[はっぴょう]時間[じかん]はわずか八分[はちふん]。与[あた]えられたスロット次第[しだい]で質疑[しつぎ]応答[おうとう]の余裕[よいゆう]も変[か]わるため、私[わたし]は原稿[げんこう]を何度[なんど]も絞[しぼ]り込[こ]んだ。",
      "当日[とうじつ]、照明[しょうめい]の下[もと]に立[た]つと、審査員[しんさいん]の視線[しせん]が一斉[いっせい]に注[そそ]がれた。緊張[きんちょう]するどころか、不思議[ふしぎ]と頭[あたま]が冴[さ]えた。",
      "私[わたし]はまず、農家[のうか]の高齢化[こうれいか]と後継者[こうけいしゃ]不足[ぶそく]という課題[かだい]を提示[ていじ]した。これを放置[ほうち]すれば、十年後[じゅうねんご]に国内[こくない]の食糧自給率[しょくりょうじきゅうりつ]は危機的[ききてき]な水準[すいじゅん]に落[お]ちる恐[おそ]れがある。",
      "続[つづ]けて、当社[とうしゃ]の解決策[かいけつさく]を披露[ひろう]した。衛星画像[えいせいがぞう]と気象[きしょう]データを統合[とうごう]し、最適[さいてき]な播種時期[はしゅじき]を予測[よそく]する仕組[しく]みだ。競合[きょうごう]に比[くら]べ、精度[せいど]においては他[ほか]の追従[ついじゅう]を許[ゆる]さない自負[じふ]がある。",
      "ピッチの終[お]わりに、私[わたし]は資金調達[しきんちょうたつ]の目標[もくひょう]を明示[めいじ]した。三年後[さんねんご]には黒字化[くろじか]を見込[みこ]める計画[けいかく]である以上[いじょう]、投資家[とうしか]にとっても低[てい]リスクのはずだ。",
      "質疑[しつぎ]応答[おうとう]では、利益[りえき]モデルへの鋭[するど]い指摘[してき]が飛[と]んできた。正直[しょうじき]、即答[そくとう]に苦[く]しむ場面[ばめん]もあったが、誠実[せいじつ]に課題[かだい]を認[みと]めた上[うえ]で補足[ほそく]した。",
      "結果[けっか]発表[はっぴょう]の瞬間[しゅんかん]、私[わたし]たちの名[な]が呼[よ]ばれた。支援金[しえんきん]を得[え]られたのはもちろんのこと、大手[おおて]メーカーから共同開発[きょうどうかいはつ]の打診[だしん]も届[とど]いた。",
      "この経験[けいけん]を通[つう]じて、私[わたし]は一[ひと]つ確信[かくしん]した。準備[じゅんび]に力[ちから]を注[そそ]いだ分[ぶん]だけ、本番[ほんばん]の舞台上[ぶたいじょう]で自信[じしん]に変[か]わるということだ。"
    ],
    translation: [
      "Last week I took part in a startup contest held in Tokyo. Our team was to present an AI-driven agricultural support platform.",
      "The presentation time was a mere eight minutes. Depending on the slot given, the leeway for Q&A also changes, so I tightened the script over and over.",
      "On the day, standing under the lights, the judges' gazes all fell on me at once. Far from being nervous, my mind was, oddly, sharper than ever.",
      "I began by presenting the issues of an aging farmer population and a shortage of successors. Left unaddressed, in ten years the domestic food self-sufficiency rate could fall to a critical level.",
      "Next I unveiled our solution. The system integrates satellite imagery and weather data to predict the optimal sowing period. I am confident that, in accuracy, we permit no rival to catch up.",
      "At the end of the pitch, I made our fundraising target explicit. Since the plan projects profitability in three years, it should be low-risk for investors as well.",
      "In Q&A, sharp points about the profit model came flying in. To be honest, there were moments I struggled to answer on the spot, but I acknowledged the issues honestly and then added detail.",
      "At the moment of the results, our name was called. Not only did we secure the grant, but a major manufacturer also reached out with an offer of joint development.",
      "Through this experience, I gained one conviction: the more effort you pour into preparation, the more it turns into confidence on stage."
    ],
    vocab: [
      { word: "参加", reading: "さんか", meaning: "participation" },
      { word: "活用", reading: "かつよう", meaning: "practical use" },
      { word: "農業", reading: "のうぎょう", meaning: "agriculture" },
      { word: "照明", reading: "しょうめい", meaning: "lighting" },
      { word: "審査員", reading: "しんさいん", meaning: "judge; examiner" },
      { word: "高齢化", reading: "こうれいか", meaning: "aging of population" },
      { word: "後継者", reading: "こうけいしゃ", meaning: "successor" },
      { word: "衛星画像", reading: "えいせいがぞう", meaning: "satellite imagery" },
      { word: "競合", reading: "きょうごう", meaning: "competitor" },
      { word: "資金調達", reading: "しきんちょうたつ", meaning: "fundraising" },
      { word: "黒字化", reading: "くろじか", meaning: "becoming profitable" },
      { word: "即答", reading: "そくとう", meaning: "immediate reply" },
      { word: "打診", reading: "だしん", meaning: "offer; sounding out" },
      { word: "確信", reading: "かくしん", meaning: "conviction" },
      { word: "本番", reading: "ほんばん", meaning: "the actual performance" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-03 — A diplomatic dinner (外交晩餐会)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-03",
    title: "晩餐[ばんさん]の向[む]こう側[がわ]",
    titleReading: "ばんさんのむこうがわ",
    level: "N2",
    summary: "A young diplomat hosts a high-stakes dinner that quietly reshapes trade negotiations between two nations.",
    estMinutes: 7,
    tags: ["politics", "negotiation", "culture"],
    body: [
      "先週[せんしゅう]、二[ふた]つの国[くに]の関係[かんけい]改善[かいぜん]を念頭[ねんとう]に置[お]いた外交[がいこう]晩餐[ばんさん]が催[もよお]された。私[わたし]は外務省[がいむしょう]の中堅職員[ちゅうけんしょくいん]として、テーブルの進行[しんこう]を任[まか]された。",
      "両国[りょうこく]の首席代表[しゅせきだいひょう]が同席[どうせき]する晩餐[ばんさん]は、公式会談[こうしきかいだん]に比[くら]べれば形式[けいしき]ばらないものの、その一言[ひとこと]が国交[こっこう]を動[うご]かすだけに緊張[きんちょう]は極[きわ]まっていた。",
      "前菜[ぜんさい]が出[で]るや否[いな]や、相手方[あいてがた]の代表[だいひょう]は農産物[のうさんぶつ]の関税[かんぜい]について切[き]り出[だ]した。食卓[しょくたく]で経済[けいざい]問題[もんだい]を協議[きょうぎ]するのは本来[ほんらい]避[さ]けるべきものであるにもかかわらず、彼[かれ]はあえてそこを破[やぶ]った。",
      "私[わたし]の上司[じょうし]は、穏便[おんびん]に、しかし毅然[きぜん]と応答[おうとう]した。立場[たちば]を譲[ゆず]るどころか、相互利益[そうごりえき]の観点[かんてん]から提案[ていあん]を再構築[さいこうちく]するよう促[うなが]したのだ。",
      "私[わたし]の役割[やくわり]は、会話[かいわ]の隙間[すきま]を埋[う]めつつ、双方[そうほう]の顔色[かおいろ]を読[よ]み取[と]ることにあった。少[すこ]しでも場[ば]の空気[くうき]が悪化[あっか]する気配[けはい]がすれば、速[すみ]やかに話題[わだい]を転換[てんかん]するつもりだった。",
      "主菜[しゅさい]が運[はこ]ばれる頃[ころ]には、関税[かんぜい]の話題[わだい]は自然[しぜん]と投資協定[とうしきょうてい]へと移[うつ]っていた。ディナーという場[ば]が、硬直[こうちょく]した交渉[こうしょう]を柔[やわ]らげる役割[やくわり]を果[は]たしたと言[い]える。",
      "終了後[しゅうりょうご]、両国[りょうこく]は共同声明[きょうどうせいめい]の骨子[こっし]について合意[ごうい]に至[いた]った。合意[ごうい]に至[いた]るまでのプロセスは、当日[とうじつ]の進行[しんこう]次第[しだい]でどうにでもなったはずだ。",
      "帰[かえ]り道[みち]、上司[じょうし]は私[わたし]にこう言[い]った。「言葉[ことば]を選[えら]ぶということは、同時[どうじ]に沈黙[ちんもく]を選[えら]ぶということだ」と。その一言[ひとこと]が胸[むね]に残[のこ]った。"
    ],
    translation: [
      "Last week, a diplomatic dinner was held with the improvement of relations between two countries in mind. As a mid-career official of the foreign ministry, I was entrusted with running the table.",
      "A dinner at which the chief representatives of both nations sit together, while less formal than official talks, was nonetheless tense to the utmost, for a single word can move diplomatic relations.",
      "As soon as the appetizer was served, the counterpart's representative raised the topic of agricultural tariffs. Discussing economic issues at the dining table is something one should normally avoid, and yet he deliberately broke that convention.",
      "My superior responded gently yet resolutely. Far from yielding his position, he urged the other side to reconstruct the proposal from the perspective of mutual benefit.",
      "My role was to fill the gaps in conversation while reading the expressions of both sides. I was ready to change the topic promptly at the slightest sign that the mood might sour.",
      "By the time the main course was brought out, the topic of tariffs had naturally shifted to an investment agreement. One could say the dinner setting served to soften the rigid negotiation.",
      "After it ended, the two nations reached agreement on the outline of a joint statement. The process leading to that agreement could have gone any way, depending on how the day unfolded.",
      "On the way back, my superior told me this: \"To choose words is also to choose silence.\" That one line stayed with me."
    ],
    vocab: [
      { word: "外交", reading: "がいこう", meaning: "diplomacy" },
      { word: "晩餐", reading: "ばんさん", meaning: "dinner; banquet" },
      { word: "外務省", reading: "がいむしょう", meaning: "foreign ministry" },
      { word: "首席", reading: "しゅせき", meaning: "chief" },
      { word: "同席", reading: "どうせき", meaning: "sitting together" },
      { word: "関税", reading: "かんぜい", meaning: "tariff" },
      { word: "農産物", reading: "のうさんぶつ", meaning: "agricultural products" },
      { word: "穏便", reading: "おんびん", meaning: "tactful" },
      { word: "毅然", reading: "きぜん", meaning: "resolute" },
      { word: "相互利益", reading: "そうごりえき", meaning: "mutual benefit" },
      { word: "硬直", reading: "こうちょく", meaning: "rigidity; standoff" },
      { word: "共同声明", reading: "きょうどうせいめい", meaning: "joint statement" },
      { word: "骨子", reading: "こっし", meaning: "outline; framework" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-04 — A scientific breakthrough (科学的ブレイクスルー)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-04",
    title: "凍[こお]った細胞[さいぼう]が目[め]を覚[さ]ます時[とき]",
    titleReading: "こおったさいぼうがめをさますとき",
    level: "N2",
    summary: "A research team resurrects dormant cells from permafrost, opening a new chapter in regenerative medicine.",
    estMinutes: 7,
    tags: ["science", "research", "ethics"],
    body: [
      "北部[ほくぶ]の永久凍土[えいきゅうとうど]から採取[さいしゅ]した古[ふる]い細胞[さいぼう]が、私[わたし]たちの研究室[けんきゅうしつ]で再[ふたた]び活動[かつどう]を始[はじ]めた。三十年[さんじゅうねん]の眠[ねむ]りから覚[さ]めたその標本[ひょうほん]は、再生医療[さいせいいりょう]に新[あたら]しい道[みち]を開[ひら]く可能性[かのうせい]を秘[ひめ]めていた。",
      "当初[とうしょ]、同僚[どうりょう]たちは結果[けっか]を信[しん]じかねていた。凍結保存[とうけつほぞん]された組織[そしき]がここまで完全[かんぜん]に復元[ふくげん]するなど、前例[ぜんれい]がないからだ。",
      "私[わたし]は何[なん]度[ど]も再現実験[さいげんじっけん]を重[かさ]ねた上[うえ]で、論文[ろんぶん]の執筆[しっぴつ]に取[と]りかかった。慎重[しんちょう]を期[き]すあまり発表[はっぴょう]が遅[おく]れる恐[おそ]れはあったものの、確証[かくしょう]なしに公表[こうひょう]するわけにはいかなかった。",
      "査読[さどく]の過程[かてい]で、海外[かいがい]の専門家[せんもんか]から厳[きび]しい指摘[してき]が寄[よ]せられた。彼[かれ]らの指摘[してき]にかけては鋭[するど]さが際立[きわだ]ち、一時[いちじ]は却下[きゃっか]の危機[きき]に瀕[ひん]した。",
      "しかし、追加実験[ついかじっけん]を重[かさ]ねた結果[けっか]、再現性[さいげんせい]が確認[かくにん]され、論文[ろんぶん]は掲載[けいさい]が認[みと]められた。誤[あやま]りを認[みと]めるどころか、批判[ひはん]を受[う]け入[い]れて研究[けんきゅう]を深[ふか]めたことが結果的[けっかてき]にプラスに働[はたら]いた。",
      "発表[はっぴょう]後[ご]、製薬会社[せいやくかいしゃ]から問[と]い合[あ]わせが相次[あいつ]いだ。基礎研究[きそけんきゅう]が応用[おうよう]に結[むす]びつくまでには時間[じかん]がかかるに違[ちが]いないが、第一歩[だいいっぽ]を踏[ふ]み出[だ]した喜[よろこ]びは格別[かくべつ]だった。",
      "一方[いっぽう]で、倫理的議論[りんりてきぎろん]も同時[どうじ]に進[すす]まなければならない。細胞[さいぼう]を人工的[じんこうてき]に復元[ふくげん]することの是非[ぜひ]は、科学者[かがくしゃ]の判断[はんだん]だけで決[き]められる問題[もんだい]ではない。",
      "私[わたし]たちは今後[こんご]、社会[しゃかい]との対話[たいわ]を続[つづ]ける限[かぎ]り、この技術[ぎじゅつ]を責任[せきにん]持[も]って発展[はってん]させていきたい。科学[かがく]の進歩[しんぽ]が人類[じんるい]の幸福[こうふく]に直結[ちょっけつ]するよう、歩[ある]みを止[と]めないつもりだ。"
    ],
    translation: [
      "Old cells taken from northern permafrost began to move again in our laboratory. The specimen, having woken from thirty years of sleep, held the potential to open a new path in regenerative medicine.",
      "At first, my colleagues could not bring themselves to believe the results. There was no precedent for tissue preserved by freezing being restored so completely.",
      "I ran reproduction experiments over and over before starting to write the paper. While there was a risk the announcement might be delayed because I was overly cautious, I could not publish it without firm proof.",
      "In peer review, sharp criticisms came from overseas experts. Their criticism was outstandingly pointed, and at one point the paper was on the verge of rejection.",
      "However, after running additional experiments, reproducibility was confirmed, and the paper was accepted for publication. Rather than dismissing errors, accepting criticism and deepening the research ultimately worked in our favor.",
      "After publication, inquiries came one after another from pharmaceutical companies. While it surely takes time for basic research to translate into applications, the joy of having taken the first step was exceptional.",
      "On the other hand, ethical debate must proceed at the same time. Whether it is right to artificially restore cells is not an issue scientists alone can decide.",
      "Going forward, as long as we continue dialogue with society, we want to develop this technology responsibly. We intend never to stop our steps, so that scientific progress connects directly to the happiness of humanity."
    ],
    vocab: [
      { word: "永久凍土", reading: "えいきゅうとうど", meaning: "permafrost" },
      { word: "採取", reading: "さいしゅ", meaning: "collection; sampling" },
      { word: "細胞", reading: "さいぼう", meaning: "cell" },
      { word: "標本", reading: "ひょうほん", meaning: "specimen" },
      { word: "再生医療", reading: "さいせいいりょう", meaning: "regenerative medicine" },
      { word: "凍結保存", reading: "とうけつほぞん", meaning: "cryopreservation" },
      { word: "復元", reading: "ふくげん", meaning: "restoration" },
      { word: "査読", reading: "さどく", meaning: "peer review" },
      { word: "再現性", reading: "さいげんせい", meaning: "reproducibility" },
      { word: "掲載", reading: "けいさい", meaning: "publication" },
      { word: "製薬会社", reading: "せいやくかいしゃ", meaning: "pharmaceutical company" },
      { word: "倫理的議論", reading: "りんりてきぎろん", meaning: "ethical debate" },
      { word: "是非", reading: "ぜひ", meaning: "right and wrong" },
      { word: "直結", reading: "ちょっけつ", meaning: "direct connection" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-05 — A legal battle (法廷闘争)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-05",
    title: "法廷[ほうてい]の向[む]こうに見[み]えた真実[しんじつ]",
    titleReading: "ほうていのむこうにみえたしんじつ",
    level: "N2",
    summary: "A defense attorney takes on a wrongful-conviction appeal and uncovers evidence long buried by the prosecution.",
    estMinutes: 7,
    tags: ["law", "justice", "investigation"],
    body: [
      "五年前[ごねんまえ]、私[わたし]は無実[むじつ]の罪[つみ]で服役[ふくえき]していた男性[だんせい]の弁護[べんご]を引[ひ]き受[う]けた。再審請求[さいしんせいきゅう]という、日本[にほん]の司法[しほう]において極[きわ]めて困難[こんなん]な道[みち]に踏[ふ]み込[こ]むことになった。",
      "最初[さいしょ]は同僚[どうりょう]からも止[と]められた。証拠不十分[しょうこふじゅうぶん]で再審[さいしん]が認[みと]められる見込[みこ]みはほぼない、というのが業界[ぎょうかい]の常識[じょうしき]だったからだ。",
      "それでも私[わたし]は、彼[かれ]の無実[むじつ]を信[しん]じる限[かぎ]り、戦[たたか]い続[つづ]けるつもりだった。たとえ敗[やぶ]れたとしても、やらなかったことへの後悔[こうかい]の方[ほう]が残[のこ]ると信[しん]じていたからだ。",
      "三年[さんねん]にわたる調査[ちょうさ]の末[すえ]、私[わたし]は検察側[けんさつがわ]が開示[かいじ]していなかった証拠書類[しょうこしょるい]を発見[はっけん]した。本来[ほんらい]弁護側[べんごがわ]に渡[わた]されるべきものであるにもかかわらず、意図的[いとてき]に伏[ふ]せられていた疑[うたが]いが強[つよ]い。",
      "裁判所[さいばんしょ]に新証拠[しんしょうこ]を提出[ていしゅつ]した際[さい]、相手方[あいてがた]は即座[そくざ]に反論[はんろん]を試[こころ]みた。しかし、文書[ぶんしょ]の筆跡鑑定[ひっせきかんてい]結果[けっか]にかけては、彼[かれ]らの主張[しゅちょう]は成[な]り立[た]たなかった。",
      "法廷[ほうてい]で目[め]の当[あ]たりにしたのは、一[ひと]つのシステムが個人[こじん]を押[お]しつぶす力[ちから]を持[も]つという現実[げんじつ]だった。それと同時[どうじ]に、正[ただ]しい情報[じょうほう]を示[しめ]せば司法[しほう]も動[うご]くという希望[きぼう]も見[み]えた。",
      "判決[はんけつ]言[い]い渡[わた]しの日[ひ]、裁判長[さいばんちょう]は再審[さいしん]の開始[かいし]を決定[けってい]した。私[わたし]の手[て]が震[ふる]えたのは、緊張[きんちょう]のせいというわけではなく、長年[ながねん]の重荷[おもに]が外[はず]れたからに違[ちが]いない。",
      "この事件[じけん]を通[つう]じて私[わたし]は、法[ほう]とは制度[せいど]である以上[いじょう]、運用[うんよう]する人間[にんげん]の良心[りょうしん]なしには機能[きのう]しないことを学[まな]んだ。司法[しほう]への信頼[しんらい]を回復[かいふく]するためには、一人[ひとり]の市民[しみん]もあきらめないことが不可欠[ふかけつ]だ。"
    ],
    translation: [
      "Five years ago, I took on the defense of a man who had been serving time for a crime he did not commit. I was stepping into the path of a retrial petition, which is extremely difficult in Japan's judicial system.",
      "At first, even colleagues tried to stop me. The industry common sense was that, with insufficient evidence, the chances of a retrial being granted were virtually nil.",
      "Even so, as long as I believed in his innocence, I intended to keep fighting. Even if I lost, I believed I would regret not having tried even more.",
      "At the end of three years of investigation, I discovered evidentiary documents that the prosecution had not disclosed. They were items that should normally have been handed over to the defense, and there was strong suspicion they had been deliberately concealed.",
      "When I submitted the new evidence to the court, the other side immediately attempted rebuttal. However, when it came to the results of handwriting analysis on the documents, their argument did not hold.",
      "What I witnessed in court was the reality that a single system has the power to crush an individual. At the same time, I also saw the hope that, presented with correct information, the judiciary can move.",
      "On the day the verdict was handed down, the chief judge decided to open the retrial. My hands trembled not because of nervousness, but because the long-held burden must have lifted.",
      "Through this case I learned that, since the law is a system, it does not function without the conscience of the humans who operate it. For trust in the judiciary to be restored, it is essential that not a single citizen gives up."
    ],
    vocab: [
      { word: "無実", reading: "むじつ", meaning: "innocence" },
      { word: "服役", reading: "ふくえき", meaning: "serving a sentence" },
      { word: "再審請求", reading: "さいしんせいきゅう", meaning: "retrial petition" },
      { word: "司法", reading: "しほう", meaning: "judiciary" },
      { word: "証拠不十分", reading: "しょうこふじゅうぶん", meaning: "insufficient evidence" },
      { word: "検察側", reading: "けんさつがわ", meaning: "prosecution side" },
      { word: "開示", reading: "かいじ", meaning: "disclosure" },
      { word: "弁護側", reading: "べんごがわ", meaning: "defense side" },
      { word: "筆跡鑑定", reading: "ひっせきかんてい", meaning: "handwriting analysis" },
      { word: "裁判長", reading: "さいばんちょう", meaning: "chief judge" },
      { word: "判決", reading: "はんけつ", meaning: "verdict" },
      { word: "良心", reading: "りょうしん", meaning: "conscience" },
      { word: "回復", reading: "かいふく", meaning: "restoration" },
      { word: "不可欠", reading: "ふかけつ", meaning: "indispensable" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-06 — A cultural exchange (文化交流)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-06",
    title: "境界[きょうかい]を越[こ]える手紙[てがみ]",
    titleReading: "きょうかいをこえるてがみ",
    level: "N2",
    summary: "A correspondence program linking Tokyo and Istanbul students turns a single letter into a bridge across cultures.",
    estMinutes: 6,
    tags: ["education", "culture", "communication"],
    body: [
      "三[さん]ヶ月[かげつ]前[まえ]、私[わたし]は東京[とうきょう]の中学校[ちゅうがっこう]で国際交流[こくさいこうりゅう]クラスを担当[たんとう]し始[はじ]めた。相手[あいて]はトルコ・イスタンブールの学校[がっこう]で、生徒同士[せいとどうし]が手紙[てがみ]を交換[こうかん]する仕組[しく]みだ。",
      "当初[とうしょ]、生徒[せいと]たちは言葉[ことば]の壁[かべ]に直面[ちょくめん]した。翻訳[ほんやく]アプリに頼[たよ]るあまり、感情[かんじょう]まで機械的[きかいてき]になってしまう生徒[せいと]もいた。",
      "私[わたし]は彼[かれ]らに、相手[あいて]の文化[ぶんか]を理解[りかい]しようとする姿勢[しせい]こそが大切[たいせつ]だと説[と]いた。文法[ぶんぽう]が完璧[かんぺき]であるどころか、むしろ不器用[ぶきよう]な表現[ひょうげん]の方[ほう]が心[こころ]が伝[つた]わることもある。",
      "三通[さんつう]目[め]の手紙[てがみ]を交[か]わした頃[ころ]から、生徒同士[せいとどうし]の距離[きょり]は縮[ちぢ]まっていった。日本[にほん]の祭[まつ]りの写真[しゃしん]に、相手方[あいてがた]は熱心[ねっしん]な質問[しつもん]を返[かえ]してくれた。",
      "中[なか]には、親[おや]の仕事[しごと]で海外[かいがい]に住[す]んだ経験[けいけん]を持[も]つ生徒[せいと]もおり、彼[かれ]を通[つう]じて班全体[はんぜんたい]の視野[しや]が広[ひろ]がった。文化交流[ぶんかこうりゅう]は、知識[ちしき]を与[あた]えるにとどまらず、他者[たしゃ]への想像力[そうぞうりょく]を養[やしな]うものだ。",
      "最終授業[さいしゅうじゅぎょう]で、私[わたし]は生徒[せいと]たちに振[ふ]り返[かえ]ってもらった。ある生徒[せいと]は、「違[ちが]いを認[みと]めるということは、同時[どうじ]に自分[じぶん]を認[みと]めるということだと分[わ]かった」と語[かた]った。",
      "別[べつ]の生徒[せいと]は、「相手[あいて]の目線[めせん]で考[かんが]える力[ちから]が身[み]についた」と振[ふ]り返[かえ]った。変化[へんか]を自覚[じかく]している限[かぎ]り、この経験[けいけん]は将来[しょうらい]も彼[かれ]らの中[なか]で生[い]き続[つづ]けるはずだ。",
      "教育現場[きょういくげんば]に立[た]つ者[もの]として、私[わたし]は再[ふたた]び実感[じっかん]した。教室[きょうしつ]の壁[かべ]を越[こ]えるのは情報[じょうほう]ではなく、他者[たしゃ]を想[おも]う人間[にんげん]の意志[いし]である。"
    ],
    translation: [
      "Three months ago, I started leading an international exchange class at a junior high school in Tokyo. The partner is a school in Istanbul, Turkey, and the students exchange letters with each other.",
      "At first, the students faced a language barrier. Some relied so heavily on translation apps that even their emotions became mechanical.",
      "I told them that the attitude of trying to understand the other's culture is what truly matters. Far from requiring perfect grammar, sometimes clumsy expressions convey the heart more clearly.",
      "From around the time they exchanged the third letter, the distance between students shrank. To photos of a Japanese festival, the other side returned enthusiastic questions.",
      "Among them was a student who had lived abroad due to a parent's work, and through him the whole group's horizons broadened. Cultural exchange does not stop at imparting knowledge; it cultivates imagination toward others.",
      "In the final class, I had the students reflect. One student said, \"I realized that acknowledging differences is also acknowledging oneself.\"",
      "Another reflected, \"I gained the ability to think from the other person's perspective.\" As long as they are aware of the change, this experience should continue to live within them in the future.",
      "As someone standing at the front lines of education, I realized once again: what crosses the classroom walls is not information, but the will of humans who care for others."
    ],
    vocab: [
      { word: "国際交流", reading: "こくさいこうりゅう", meaning: "international exchange" },
      { word: "中学校", reading: "ちゅうがっこう", meaning: "junior high school" },
      { word: "生徒同士", reading: "せいとどうし", meaning: "students with each other" },
      { word: "直面", reading: "ちょくめん", meaning: "facing; confrontation" },
      { word: "翻訳", reading: "ほんやく", meaning: "translation" },
      { word: "機械的", reading: "きかいてき", meaning: "mechanical" },
      { word: "姿勢", reading: "しせい", meaning: "attitude; posture" },
      { word: "完璧", reading: "かんぺき", meaning: "perfect" },
      { word: "不器用", reading: "ぶきよう", meaning: "clumsy" },
      { word: "想像力", reading: "そうぞうりょく", meaning: "imagination" },
      { word: "自覚", reading: "じかく", meaning: "self-awareness" },
      { word: "目線", reading: "めせん", meaning: "perspective; eye level" },
      { word: "教育現場", reading: "きょういくげんば", meaning: "education front lines" },
      { word: "他者", reading: "たしゃ", meaning: "others" },
      { word: "意志", reading: "いし", meaning: "will" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-07 — A medical dilemma (医療のジレンマ)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-07",
    title: "命[いのち]を量[はか]る夜[よる]",
    titleReading: "いのちをはかるよる",
    level: "N2",
    summary: "A hospital ethics committee confronts an impossible choice when a donor organ becomes available for two critically ill patients.",
    estMinutes: 7,
    tags: ["medicine", "ethics", "decision"],
    body: [
      "深夜[しんや]、私[わたし]の勤[つと]める大病院[だいびょういん]に一[ひと]つの臓器[ぞうき]が届[とど]いた。心臓移植[しんぞういしょく]を待[ま]つ患者[かんじゃ]は二人[ふたり]いたが、提供[ていきょう]できるのは一人[ひとり]だけだった。",
      "私[わたし]は倫理委員会[りんりいいんかい]の一員[いちいん]として、一刻[いっこく]を争[あらそ]う決断[けつだん]に加[くわ]わることになった。医学的条件[いがくてきじょうけん]が同等[どうとう]である以上[いじょう]、最終的[さいしゅうてき]な判断[はんだん]は委員会[いいんかい]に委[ゆだ]ねられた。",
      "一人[ひとり]は三十代[さんじゅうだい]の母親[ははおや]で、幼[おさな]い子[こ]が二人[ふたり]いる。もう一人[ひとり]は七十歳[ななじゅっさい]の元教師[もときょうし]で、地域[ちいき]のために長年[ながねん]尽[つく]してきた方[かた]だ。",
      "年齢[ねんれい]だけで決[き]めるわけにはいかない。一方[いっぽう]で、若[わか]い患者[かんじゃ]の社会的復帰[しゃかいてきふっき]の見込[みこ]みが高[たか]いという事実[じじつ]も、無視[むし]するわけにはいかなかった。",
      "議論[ぎろん]は白熱[はくねつ]した。ある委員[いいん]は、「生[い]きられる年数[ねんすう]を基準[きじゅん]にすべきだ」と主張[しゅちょう]した。生命[せいめい]を数字[すうじ]で量[はか]ることには抵抗[ていこう]を感[かん]じるものの、客観的[きゃっかんてき]な指標[しひょう]なしには公平[こうへい]さを担保[たんぽ]できないという意見[いけん]もあった。",
      "最終的[さいしゅうてき]に、私[わたし]たちは「医学的緊急度[いがくてききんきゅうど]」を第一基準[だいいちきじゅん]とし、社会的立場[しゃかいてきたちば]は考慮外[こうりょがい]とすることで合意[ごうい]した。基準[きじゅん]を設[もう]けた上[うえ]で判断[はんだん]した以上[いじょう]、結果[けっか]に対[たい]して責任[せきにん]を分[わ]かち合[あ]う覚悟[かくご]だ。",
      "翌朝[よくあさ]、手術[しゅじゅつ]は成功[せいこう]した。しかし、選[えら]ばれなかった患者[かんじゃ]の家族[かぞく]に向[む]き合[あ]う責任[せきにん]からは逃[に]げられない。彼[かれ]らの悲[かな]しみを思[おも]うと、胸[むね]が締[し]め付[つ]けられる。",
      "この経験[けいけん]を経[へ]て、私[わたし]は医療[いりょう]の現場[げんば]における倫理教育[りんりきょういく]の重要性[じゅうようせい]を痛感[つうかん]した。技術[ぎじゅつ]が進[すす]む一方[いっぽう]で、命[いのち]を扱[あつか]う人間[にんげん]の心[こころ]の修練[しゅうれん]が追[お]いつかないのではないか。技術[ぎじゅつ]のみに頼[たよ]る医療[いりょう]は、人間[にんげん]の尊厳[そんげん]を損[そこ]なう恐[おそ]れがある。"
    ],
    translation: [
      "Late at night, a single organ arrived at the large hospital where I work. Two patients were waiting for a heart transplant, but only one could receive it.",
      "As a member of the ethics committee, I became part of a decision that fought over every moment. Since the medical conditions were equivalent, the final judgment was entrusted to the committee.",
      "One was a mother in her thirties with two young children. The other was a seventy-year-old former teacher who had long served the community.",
      "One cannot decide by age alone. On the other hand, the fact that the younger patient had a higher prospect of social reintegration was also something we could not ignore.",
      "The debate grew heated. One committee member argued, \"We should set the number of years one can live as the standard.\" While I felt resistance to measuring life in numbers, there was also the opinion that without objective indicators, fairness could not be guaranteed.",
      "Ultimately, we agreed to make \"medical urgency\" the first criterion and to leave social standing outside consideration. Since we made the decision after setting criteria, we are prepared to share responsibility for the outcome.",
      "The next morning, the surgery succeeded. But we cannot escape the responsibility of facing the family of the patient who was not chosen. Thinking of their grief, my chest tightens.",
      "After this experience, I keenly felt the importance of ethics education in medical settings. While technology advances, the training of the human heart that handles life may not be keeping up. Medicine that relies only on technology risks undermining human dignity."
    ],
    vocab: [
      { word: "深夜", reading: "しんや", meaning: "late at night" },
      { word: "大病院", reading: "だいびょういん", meaning: "large hospital" },
      { word: "臓器", reading: "ぞうき", meaning: "organ" },
      { word: "心臓移植", reading: "しんぞういしょく", meaning: "heart transplant" },
      { word: "倫理委員会", reading: "りんりいいんかい", meaning: "ethics committee" },
      { word: "決断", reading: "けつだん", meaning: "decision" },
      { word: "同等", reading: "どうとう", meaning: "equivalent" },
      { word: "年齢", reading: "ねんれい", meaning: "age" },
      { word: "社会的復帰", reading: "しゃかいてきふっき", meaning: "social reintegration" },
      { word: "客観的", reading: "きゃっかんてき", meaning: "objective" },
      { word: "指標", reading: "しひょう", meaning: "indicator" },
      { word: "考慮外", reading: "こうりょがい", meaning: "outside consideration" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "修練", reading: "しゅうれん", meaning: "training; discipline" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-08 — An environmental crisis (環境危機)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-08",
    title: "干上[ひあ]がった湖[みずうみ]",
    titleReading: "ひあがったみずうみ",
    level: "N2",
    summary: "A lakeside town battles drought, salt storms, and internal divisions as an ecological collapse accelerates.",
    estMinutes: 6,
    tags: ["environment", "community", "crisis"],
    body: [
      "十年前[じゅうねんまえ]、この町[まち]の中央[ちゅうおう]に広[ひろ]がっていた湖[みずうみ]は、今[いま]や干上[ひあ]がっている。気候変動[きこうへんどう]の影響[えいきょう]に加[くわ]え、上流[じょうりゅう]の過剰[かじょう]な取水[しゅすい]が水位[すいい]を決定的[けっていてき]に下[さ]げた。",
      "湖[みずうみ]が縮[ちぢ]むにつれて、周辺[しゅうへん]の農地[のうち]では塩害[えんがい]が深刻化[しんこくか]した。かつて米[こめ]を作[つく]っていた農家[のうか]は、今[いま]では塩[しお]の混[ま]じった土[つち]に絶望[ぜつぼう]するばかりだ。",
      "住民[じゅうみん]の間[あいだ]でも意見[いけん]が割[わ]れた。上流[じょうりゅう]の都市[とし]に抗議[こうぎ]すべきだという声[こえ]がある一方[いっぽう]で、行政[ぎょうせい]に頼[たよ]るばかりでは解決[かいけつ]しないと主張[しゅちょう]する若者[わかもの]もいた。",
      "私[わたし]は市民団体[しみんだんたい]の代表[だいひょう]として、両者[りょうしゃ]の橋渡[はしわた]しを務[つと]めることになった。対立[たいりつ]を放置[ほうち]すれば、町[まち]全体[ぜんたい]が崩壊[ほうかい]しかねない状況[じょうきょう]だった。",
      "最初[さいしょ]の会議[かいぎ]で、若者[わかもの]グループは水源林[すいげんりん]の再生計画[さいせいけいかく]を提案[ていあん]した。林業[りんぎょう]の経験者[けいけんしゃ]が少[すく]ない中[なか]、手探[てさぐ]りの出発[しゅっぱつ]だったが、彼[かれ]らの熱意[ねつい]に押[お]される形[かたち]で住民[じゅうみん]が集[あつ]まり始[はじ]めた。",
      "三年[さんねん]かけて植[う]えた苗木[なえぎ]が根[ね]を下[お]ろし始[はじ]めた頃[ころ]、変化[へんか]は少[すこ]しずつ実[みの]り始[はじ]めた。専門家[せんもんか]によれば、完全[かんぜん]な回復[かいふく]には数十年[すうじゅうねん]かかるに違[ちが]いないが、住民[じゅうみん]の意識[いしき]そのものが変[か]わりつつある。",
      "国[くに]の支援[しえん]が届[とど]いたのは、私[わたし]たちが自[みずか]ら動[うご]き始[はじ]めた後[のち]のことだった。待[ま]っているだけでは何[なに]も変[か]わらないという事実[じじつ]を、私[わたし]は改[あらた]めて学[まな]んだ。",
      "今[いま]でも湖[みずうみ]の水[みず]は戻[もど]っていない。それでも、住民[じゅうみん]が一[ひと]つになる限[かぎ]り、この土地[とち]に未来[みらい]は残[のこ]されていると信[しん]じている。"
    ],
    translation: [
      "Ten years ago, the lake that spread through the center of this town has now dried up. In addition to the impact of climate change, excessive water intake upstream has decisively lowered the water level.",
      "As the lake shrank, salt damage worsened on the surrounding farmland. Farmers who once grew rice now only despair at soil mixed with salt.",
      "Even among residents, opinions were divided. While some voices called for protesting the upstream city, young people argued that relying solely on the administration would not solve anything.",
      "As the representative of a civic group, I took on the role of bridging the two sides. It was a situation where, if the conflict was left unaddressed, the entire town could collapse.",
      "At the first meeting, the youth group proposed a plan to regenerate the headwater forests. With few experienced foresters, it was a tentative start, but in the form of being moved by their enthusiasm, residents began to gather.",
      "By the time the saplings planted over three years began to take root, change began to bear fruit little by little. According to experts, full recovery must surely take decades, but the residents' very awareness is in the process of changing.",
      "National support arrived only after we began moving on our own. I learned anew the fact that waiting alone changes nothing.",
      "Even now the lake's water has not returned. Even so, as long as residents unite, I believe a future remains for this land."
    ],
    vocab: [
      { word: "干上がる", reading: "ひあがる", meaning: "to dry up" },
      { word: "気候変動", reading: "きこうへんどう", meaning: "climate change" },
      { word: "上流", reading: "じょうりゅう", meaning: "upstream" },
      { word: "取水", reading: "しゅすい", meaning: "water intake" },
      { word: "水位", reading: "すいい", meaning: "water level" },
      { word: "塩害", reading: "えんがい", meaning: "salt damage" },
      { word: "農地", reading: "のうち", meaning: "farmland" },
      { word: "市民団体", reading: "しみんだんたい", meaning: "civic group" },
      { word: "橋渡し", reading: "はしわたし", meaning: "bridging; mediation" },
      { word: "崩壊", reading: "ほうかい", meaning: "collapse" },
      { word: "水源林", reading: "すいげんりん", meaning: "headwater forest" },
      { word: "経験者", reading: "けいけんしゃ", meaning: "person with experience" },
      { word: "苗木", reading: "なえぎ", meaning: "sapling" },
      { word: "熱意", reading: "ねつい", meaning: "enthusiasm" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-09 — A financial fraud (金融詐欺)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-09",
    title: "紙[かみ]の富[とみ]が崩[くず]れた日[ひ]",
    titleReading: "かみのとみがくずれたひ",
    level: "N2",
    summary: "A bank auditor discovers a Ponzi scheme hidden behind a charismatic fund manager and races to expose it before more victims are swallowed.",
    estMinutes: 7,
    tags: ["finance", "crime", "whistleblowing"],
    body: [
      "先月[せんげつ]、私[わたし]の勤[つと]める銀行[ぎんこう]の監査部門[かんさぶもん]に、一本[いっぽん]の内部通報[ないぶつうほう]が届[とど]いた。人気[にんき]ファンドマネージャーが運用[うんよう]する投資信託[とうししんたく]に、異常[いじょう]な資金[しきん]の動[うご]きがあるという通報[つうほう]だった。",
      "通報[つうほう]の内容[ないよう]はあまりに唐突[とうとつ]で、当初[とうしょ]は誰[だれ]も本気[ほんき]にしなかった。彼[かれ]のファンドはここ数年[すうねん]安定[あんてい]した利回[りまわ]りを維持[いじ]しており、顧客[こきゃく]からの信頼[しんらい]も厚[あつ]かったからだ。",
      "それでも私[わたし]は、規則[きそく]に基[もと]づき調査[ちょうさ]を開始[かいし]した。書類[しょるい]を一[ひと]つ一[ひと]つ検証[けんしょう]するうちに、資金[しきん]が新[あたら]しい投資家[とうしか]から古[ふる]い投資家[とうしか]へと流[なが]されている構造[こうぞう]が見[み]えてきた。典型的[てんけいてき]なポンジ・スキームに違[ちが]いない。",
      "彼[かれ]は巧[たく]みな話術[わじゅつ]で顧客[こきゃく]を魅了[みりょう]していた。投資経験[とうしけいけん]のない高齢者[こうれいしゃ]まで巻[ま]き込[こ]まれていたことを思[おも]うと、背筋[せすじ]が寒[さむ]くなる。",
      "証拠[しょうこ]が固[かた]まり次第[しだい]、私[わたし]は経営陣[けいえいじん]に報告[ほうこく]した。ところが、上層部[じょうそうぶ]は公表[こうひょう]をためらった。銀行[ぎんこう]の信用[しんよう]に関[かか]わるという理由[りゆう]だ。それでも、隠[かく]し続[つづ]ければ被害[ひがい]は拡大[かくだい]する一方[いっぽう]だ。",
      "私[わたし]は最終的[さいしゅうてき]に金融庁[きんゆうちょう]に直接[ちょくせつ]通報[つうほう]する道[みち]を選[えら]んだ。内部[ないぶ]の不祥事[ふしょうじ]を告発[こくはつ]する行為[こうい]が、キャリアを絶[た]つリスクになり得[え]ることは分[わ]かっていた。",
      "数日[すうじつ]後[ご]、警察[けいさつ]の捜査[そうさ]が入[はい]り、彼[かれ]は詐欺容疑[さぎようぎ]で逮捕[たいほ]された。被害総額[ひがいそうがく]は数百億円[すうひゃくおくえん]に上[のぼ]ることが判明[はんめい]した。",
      "この事件[じけん]を通[つう]じて、私[わたし]は一[ひと]つの教訓[きょうくん]を得[え]た。組織[そしき]の論理[ろんり]に従[したが]うことと、正義[せいぎ]を貫[つらぬ]くことは、必[かなら]ずしも同[おな]じではないということだ。正義[せいぎ]のために立[た]ち上[あ]がれる人間[にんげん]でなければ、制度[せいど]は機能[きのう]しない。"
    ],
    translation: [
      "Last month, a single internal report arrived at the audit division of the bank where I work. The report said there were abnormal fund movements in an investment trust managed by a popular fund manager.",
      "The content of the report was so abrupt that at first no one took it seriously. His fund had maintained stable yields in recent years, and trust from clients was deep.",
      "Even so, I began an investigation in accordance with the rules. As I verified the documents one by one, the structure became visible: funds were flowing from new investors to old investors. It must be a classic Ponzi scheme.",
      "He had captivated clients with masterful speaking technique. Thinking that even elderly people with no investment experience had been drawn in, my spine runs cold.",
      "As soon as the evidence was firm, I reported to management. However, the upper echelons hesitated to disclose it, on the grounds that it concerned the bank's trust. Still, if it continued to be concealed, the damage would only expand.",
      "I ultimately chose the path of reporting directly to the Financial Services Agency. I knew that the act of whistleblowing an internal scandal could end my career.",
      "Days later, the police investigation came in, and he was arrested on suspicion of fraud. The total damage turned out to reach hundreds of billions of yen.",
      "Through this case, I gained one lesson. Following the logic of an organization and pursuing justice are not necessarily the same. Without humans willing to stand up for justice, the system does not function."
    ],
    vocab: [
      { word: "監査部門", reading: "かんさぶもん", meaning: "audit division" },
      { word: "内部通報", reading: "ないぶつうほう", meaning: "internal report" },
      { word: "投資信託", reading: "とうししんたく", meaning: "investment trust" },
      { word: "異常", reading: "いじょう", meaning: "abnormal" },
      { word: "利回り", reading: "りまわり", meaning: "yield" },
      { word: "検証", reading: "けんしょう", meaning: "verification" },
      { word: "投資家", reading: "とうしか", meaning: "investor" },
      { word: "話術", reading: "わじゅつ", meaning: "speaking technique" },
      { word: "高齢者", reading: "こうれいしゃ", meaning: "elderly person" },
      { word: "上層部", reading: "じょうそうぶ", meaning: "upper echelons" },
      { word: "金融庁", reading: "きんゆうちょう", meaning: "Financial Services Agency" },
      { word: "詐欺容疑", reading: "さぎようぎ", meaning: "suspicion of fraud" },
      { word: "被害総額", reading: "ひがいそうがく", meaning: "total damage" },
      { word: "教訓", reading: "きょうくん", meaning: "lesson" },
      { word: "貫く", reading: "つらぬく", meaning: "to pursue through; pierce" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-10 — A technological revolution (技術革命)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-10",
    title: "言葉[ことば]を紡[つむ]ぐ機械[きかい]",
    titleReading: "ことばをつむぐきかい",
    level: "N2",
    summary: "A machine-translation startup races to launch a model that handles minority dialects, only to face questions about cultural erasure.",
    estMinutes: 7,
    tags: ["technology", "culture", "startup"],
    body: [
      "五年前[ごねんまえ]、私[わたし]はAI翻訳[ほんやく]のスタートアップを創業[そうぎょう]した。目標[もくひょう]は、少数言語[しょうすうげんご]まで含[ふく]めた高精度[こうせいど]な翻訳[ほんやく]モデルを世[よ]に出[で]すことだった。",
      "当初[とうしょ]、資金不足[しきんぶそく]に悩[なや]まされた。大手[おおて]IT企業[きぎょう]に対抗[たいこう]できる見込[みこ]みなどない、と周[まわ]りから忠告[ちゅうこく]されるどころか、見向[みむ]きもされなかった。",
      "それでも私[わたし]たちは、大企業[だいきぎょう]が見落[みおと]としている現場[げんば]の言語[げんご]データに目[め]を向[む]けた。フィリピンの山地[さんち]で話[はな]される方言[ほうげん]を録音[ろくおん]し、地元[じもと]の協力者[きょうりょくしゃ]と共[とも]に文字化[もじか]を進[すす]めた。",
      "三年[さんねん]かけて集[あつ]めたデータを基[もと]に、私[わたし]たちは独自[どくじ]のモデルを訓練[くんれん]した。一般的[いっぱんてき]な翻訳[ほんやく]AIに比[くら]べ、少数言語[しょうすうげんご]の精度[せいど]においては他[ほか]の追従[ついじゅう]を許[ゆる]さない自信[じしん]があった。",
      "しかし、ローンチの直前[ちょくぜん]、倫理学者[りんりがくしゃ]から予想外[よそうがい]の批判[ひはん]が届[とど]いた。AIが方言[ほうげん]を「標準語[ひょうじゅんご]」に翻訳[ほんやく]することは、文化[ぶんか]の多様性[たようせい]を奪[うば]う行為[こうい]に他[ほか]ならない、と。",
      "私[わたし]は反発[はんぱつ]を覚[おぼ]えつつも、彼[かれ]らの指摘[してき]を無視[むし]するわけにはいかなかった。技術[ぎじゅつ]の進歩[しんぽ]が文化[ぶんか]を破壊[はかい]する恐[おそ]れがあるという指摘[してき]は、的[まと]を射[い]ていた。",
      "最終的[さいしゅうてき]に、私[わたし]たちは方針[ほうしん]を転換[てんかん]した。方言[ほうげん]を消[け]すのではなく、方言[ほうげん]と標準語[ひょうじゅんご]を双方向[そうほうこう]で橋渡[はしわた]しする仕組[しく]みに変[か]えたのだ。",
      "現在[げんざい]、このプラットフォームは八[はち]つの少数言語[しょうすうげんご]をサポートし、話者[わしゃ]たちの誇[ほこ]りとなっている。技術[ぎじゅつ]が人間[にんげん]を従[したが]わせるのでなく、人間[にんげん]の声[こえ]を技術[ぎじゅつ]が支[ささ]える形[かたち]こそ、私[わたし]が目指[めざ]す未来[みらい]だ。"
    ],
    translation: [
      "Five years ago, I founded an AI translation startup. The goal was to release a high-precision translation model that included minority languages.",
      "At first, we were plagued by funding shortages. Far from being warned that we had no chance of competing with major IT companies, we were not even given a glance.",
      "Even so, we turned our attention to the on-the-ground language data that big companies overlooked. We recorded dialects spoken in the mountainous regions of the Philippines and proceeded to transcribe them with local collaborators.",
      "Using the data collected over three years, we trained our own model. Compared to general translation AIs, we had confidence that, in accuracy for minority languages, we permitted no rival to catch up.",
      "However, just before launch, unexpected criticism arrived from an ethicist. The act of AI translating dialects into \"standard language\" was nothing other than robbing cultural diversity, they said.",
      "While I felt resistance, I could not ignore their criticism. The point that technological advancement could destroy culture was right on target.",
      "Ultimately, we changed our direction. Rather than erasing dialects, we changed to a system that bridges dialect and standard language bidirectionally.",
      "Currently, this platform supports eight minority languages and is the pride of the speakers. The form in which technology does not subjugate humans but supports the voices of humans is exactly the future I aim for."
    ],
    vocab: [
      { word: "創業", reading: "そうぎょう", meaning: "founding a business" },
      { word: "少数言語", reading: "しょうすうげんご", meaning: "minority language" },
      { word: "高精度", reading: "こうせいど", meaning: "high precision" },
      { word: "資金不足", reading: "しきんぶそく", meaning: "funding shortage" },
      { word: "対抗", reading: "たいこう", meaning: "competing; opposition" },
      { word: "忠告", reading: "ちゅうこく", meaning: "advice; warning" },
      { word: "大企業", reading: "だいきぎょう", meaning: "large company" },
      { word: "協力者", reading: "きょうりょくしゃ", meaning: "collaborator" },
      { word: "文字化", reading: "もじか", meaning: "transcription into text" },
      { word: "倫理学者", reading: "りんりがくしゃ", meaning: "ethicist" },
      { word: "予想外", reading: "よそうがい", meaning: "unexpected" },
      { word: "標準語", reading: "ひょうじゅんご", meaning: "standard language" },
      { word: "多様性", reading: "たようせい", meaning: "diversity" },
      { word: "双方向", reading: "そうほうこう", meaning: "bidirectional" },
      { word: "誇り", reading: "ほこり", meaning: "pride" }
    ]
  }
];
