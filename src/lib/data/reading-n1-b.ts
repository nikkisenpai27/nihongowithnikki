import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N1-level reading passages with comprehension questions (ids r-n1-11..r-n1-20).

export const readingN1B: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n1-11 — Japanese calligraphy: the lineage of brush and ink
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-11",
    title: "書[しょ]道[どう]の系譜[けいふ]：墨[すみ]と筆[ふで]が紡[つむ]ぐ日本[にほん]精神[せいしん]史[し]",
    titleReading: "しょどうのけいふすみとふでがつむぐにほんせいしんし",
    level: "N1",
    summary: "A historical and philosophical survey of Japanese calligraphy — from its sixth-century arrival as Buddhist sutra copying, through the Heian invention of kana and the wayer style, the medieval Zen practice of bokuseki, the Edo terakoya diffusion, the Meiji brush-versus-pen crisis, the postwar avant-garde turn, and finally the meaning of brush writing in a digitized age.",
    estMinutes: 12,
    tags: ["calligraphy", "art history", "wayer style", "bokuseki", "terakoya", "Heian period", "Zen"],
    body: [
      "書[しょ]道[どう]という芸術[げいじゅつ]は、単[たん]なる文字[もじ]の書[か]き方[かた]の技術[ぎじゅつ]ではなく、書[か]く主体[しゅたい]の精神[せいしん]状態[じょうたい]が墨跡[ぼくせき]として定着[ていちゃく]する過程[かてい]そのものを意味[いみ]する。日本[にほん]において書[しょ]道[どう]が受容[じゅよう]されたのは、六[ろく]世紀[せいき]から七[なな]世紀[せいき]にかけて、大陸[たいりく]の先進[せんしん]文化[ぶんか]が朝鮮[ちょうせん]半島[はんとう]を経由[けいゆ]して流入[りゅうにゅう]した時代[じだい]であった。仏[ぶつ]教[きょう]の経典[きょうてん]を筆写[ひっしゃ]する行為[こうい]は、信仰[しんこう]の実践[じっせん]であると同時[どうじ]に、漢[かん]字[じ]という外来[がいらい]表意[ひょうい]文字[もじ]体系[たいけい]を体得[たいとく]する学習[がくしゅう]過程[かてい]でもあった。かくして、筆[ふで]と墨[すみ]と紙[かみ]の結合[けつごう]は、宗教[しゅうきょう]的[てき]実践[じっせん]、文字[もじ]文化[ぶんか]の伝播[でんぱ]、そして美[び]的[てき]感性[かんせい]の涵養[かんよう]という三重[さんじゅう]の機能[きのう]を担[にな]うこととなった。",
      "平安[へいあん]時代[じだい]に至[いた]って、日本[にほん]固有[こゆう]の仮名[かな]文字[もじ]が発明[はつめい]されたことは、書[しょ]道[どう]史[し]において画期[かっき]的[てき]な出来事[できごと]であった。万[まん]葉[よう]仮名[がな]として知[し]られる漢[かん]字[じ]の借音[しゃくおん]表記[ひょうき]は、長[なが]期[き]にわたる模索[もさく]の末[すえ]、漢[かん]字[じ]の草体[そうたい]を極度[きょくど]に簡略[かんりゃく]化[か]した平[ひら]仮名[がな]へと純化[じゅんか]した。ここにおいて初[はじ]めて、日本[にほん]語[ご]の音韻[おんいん]構造[こうぞう]に合致[がっち]する文字[もじ]体系[たいけい]が誕生[たんじょう]したのである。平安[へいあん]中期[ちゅうき]の小野[おの]道風[みちかぜ]、藤原[ふじわら]佐理[すけまさ]、藤原[ふじわら]行成[ゆきなり]ら「三[さん]跡[せき]」と称[しょう]される能書[のうしょ]たちが確立[かくりつ]した和様[わよう]の書[しょ]風[ふう]は、中国[ちゅうごく]の唐[とう]代[だい]書[しょ]道[どう]の厳格[げんかく]な法度[はっと]に対[たい]し、柔軟[じゅうなん]かつ抒情[じゅじょう]的[てき]な線[せん]の動[うご]きを特質[とくしつ]とした。換言[かんげん]すれば、外来[がいらい]の形式[けいしき]を消化[しょうか]し、固有[こゆう]の感性[かんせい]へと転化[てんか]するという日本[にほん]文化[ぶんか]受容[じゅよう]の典型[てんけい]的[てき]パターン[ぱたーん]が、書[しょ]道[どう]の領域[りょういき]においても貫徹[かんてつ]されたと言[い]える。",
      "鎌倉[かまくら]から室町[むろまち]にかけての中世[ちゅうせい]は、禅[ぜん]宗[しゅう]の伝来[でんらい]とともに、墨跡[ぼくせき]という新[あたら]しい書[しょ]の範疇[はんちゅう]が出現[しゅつげん]した時代[じだい]であった。禅[ぜん]僧[そう]が師[し]から弟子[でし]へと印可[いんか]状[じょう]として授[さず]けた頂相[ちんそう]の賛[さん]や偈頌[げじゅ]は、悟[さと]りの境界[きょうかい]を直接的[ちょくせつてき]に表現[ひょうげん]する手段[しゅだん]として重[おも]んじられた。夢窓[むそう]疎石[そせき]や一休[いっきゅう]宗純[そうじゅん]の筆[ふで]跡[せき]に見[み]られる峻烈[しゅんれつ]な線[せん]は、装飾[そうしょく]的[てき]な美[び]を排[はい]し、ただ内在[ないざい]する精神[せいしん]の強度[きょうど]を示[しめ]すことのみを目的[もくてき]としていた。ここにおいて、書[しょ]は鑑賞[かんしょう]対象[たいしょう]であると同時[どうじ]に、宗教[しゅうきょう]的[てき]な証[しょう]明[めい]として機能[きのう]することとなった。かかる墨跡[ぼくせき]の受容[じゅよう]は、書[しょ]が外形[がいけい]の模倣[もほう]を超越[ちょうえつ]し、書[か]く人[ひと]の内面[ないめん]をそのまま映[うつ]し出[だ]す鏡[かがみ]となったことを意味[いみ]する。",
      "江戸[えど]時代[じだい]に入[はい]ると、寺子屋[てらこや]という民間[みんかん]教育[きょういく]機関[きかん]の普及[ふきゅう]に伴[ともな]い、書[しょ]道[どう]は貴族[きぞく]や僧侶[そうりょ]の特権[とっけん]から庶民[しょみん]の素養[そよう]へと位置[いち]を移[うつ]した。往々[おうおう]にして、手[て]習[ならい]と称[しょう]された書[しょ]の稽古[けいこ]は、単[たん]なる実用[じつよう]技能[ぎのう]の習得[しゅうとく]にとどまらず、礼儀[れいぎ]作法[さほう]や人格[じんかく]陶冶[とうや]の手段[しゅだん]と見[み]なされていた。御[お]家[いえ]流[りゅう]と呼[よ]ばれる江戸[えど]幕府[ばくふ]公認[こうにん]の書[しょ]風[ふう]が全国[ぜんこく]の寺子屋[てらこや]で教授[きょうじゅ]された結果[けっか]、書[か]き手[て]の個性[こせい]はある程度[ていど]規格[きかく]化[か]される側面[そくめん]があった。しかしながら、その反面[はんめん]、識字[しきじ]率[りつ]の向上[こうじょう]を通[つう]じて書[しょ]文化[ぶんか]の基盤[きばん]を飛躍的[ひやくてき]に拡大[かくだい]した功績[こうせき]は否定[ひてい]し得[え]ない。",
      "明治[めいじ]維新[いしん]後[ご]の近代[きんだい]化[か]は、書[しょ]道[どう]に深刻[しんこく]な危機[きき]をもたらした。毛筆[もうひつ]に代[か]わるペン[ぺん]や鉛筆[えんぴつ]の普及[ふきゅう]、さらにはタイプライター[たいぷらいたー]の導入[どうにゅう]により、実用[じつよう]文書[ぶんしょ]の筆記[ひっき]手段[しゅだん]としての筆[ふで]の優位[ゆうい]は急速[きゅうそく]に失[うしな]われた。加[くわ]えて、明治[めいじ]政府[せいふ]が推進[すいしん]した学制[がくせい]改革[かいかく]において、書[しょ]道[どう]は国語[こくご]科[か]の付属[ふぞく]的[てき]領域[りょういき]へと位置[いち]づけられ、その自律[じりつ]的[てき]価値[かち]は看過[かんか]される傾向[けいこう]にあった。比田[ひだ]井[い]天来[てんらい]や日比[ひび]野[の]五雲[ごうん]らが提唱[ていしょう]した近代[きんだい]書[しょ]道[どう]運動[うんどう]は、こうした危機[きき]意識[いしき]のもと、書[しょ]を純粋[じゅんすい]な造形[ぞうけい]芸術[げいじゅつ]として再定義[さいていぎ]することを企図[きと]したものである。彼[かれ]らとて、西洋[せいよう]美術[びじゅつ]の範疇[はんちゅう]に書[しょ]を位置[いち]づけ直[なお]すことによって、その存立[そんりつ]根拠[こんきょ]を新[あたら]たに獲得[かくとく]しようとしたのであった。",
      "第二[だいに]次[じ]大戦[たいせん]後[ご]、書[しょ]道[どう]は展覧[てんらん]会[かい]制度[せいど]との結合[けつごう]を通[つう]じて、現代[げんだい]美術[びじゅつ]の隣接[りんせつ]領域[りょういき]へと進出[しんしゅつ]した。前衛[ぜんえい]書[しょ]と称[しょう]される運動[うんどう]は、文字[もじ]の可読[かどく]性[せい]を解体[かいたい]し、墨[すみ]の線[せん]そのものの自律[じりつ]的[てき]表現[ひょうげん]を追求[ついきゅう]した。しかしながら、このような前衛[ぜんえい]的[てき]実験[じっけん]がもたらしたのは、書[しょ]道[どう]の芸術[げいじゅつ]化[か]の成功[せいこう]であると同時[どうじ]に、伝統[でんとう]的[てき]な古典[こてん]臨書[りんしょ]の意義[いぎ]を問[と]い直[なお]すという難題[なんだい]であった。文字[もじ]を捨[す]てることで書[しょ]を純化[じゅんか]するという企図[きと]は、皮肉[ひにく]にも、文字[もじ]こそが書[しょ]道[どう]を書[しょ]道[どう]たらしめている本質[ほんしつ]的[てき]要件[ようけん]であったことを露呈[ろてい]したのである。",
      "デジタル[でじたる]化[か]が進行[しんこう]する現代[げんだい]において、筆[ふで]と墨[すみ]による書[しょ]の行為[こうい]は、もはや日常[にちじょう]的[てき]な実用[じつよう]から完全[かんぜん]に乖離[かいり]した。しかしながら、それゆえにこそ、書[しょ]道[どう]は身体[しんたい]を媒介[ばいかい]した精神[せいしん]の定着[ていちゃく]という本来[ほんらい]の機能[きのう]を回復[かいふく]する契機[けいき]を得[え]たとも言[い]える。画面[がめん]上[じょう]で指[ゆび]先[さき]を滑[すべ]らせる操作[そうさ]には、墨[すみ]の含[ふく]み、筆[ふで]の圧力[あつりょく]、紙[かみ]の滲[にじ]みといった物質[ぶっしつ]的[てき]な抵抗[ていこう]が欠如[けつじょ]している。書[しょ]道[どう]が将来[しょうらい]にわたり存続[そんぞく]し得[う]るとすれば、それは、効率[こうりつ]を超越[ちょうえつ]した身体[しんたい]的[てき]経験[けいけん]の価値[かち]が、逆[ぎゃく]に問[と]い直[なお]される時代[じだい]においてのみであろう。"
    ],
    translation: [
      "The art of calligraphy is not merely a technique for writing characters; it denotes the very process by which the mental state of the writing subject becomes fixed as an ink trace. Calligraphy was received in Japan during the sixth and seventh centuries, when the advanced culture of the continent flowed in via the Korean peninsula. The act of copying Buddhist sutras was at once a religious practice and a process of mastering the kanji logographic system, an imported script. Thus the union of brush, ink, and paper came to bear the threefold function of religious practice, dissemination of written culture, and cultivation of aesthetic sensibility.",
      "The invention of Japan's native kana script in the Heian period was an epoch-making event in the history of calligraphy. The manyogana system — kanji used for their phonetic value — was, after a long period of experimentation, purified into hiragana, an extreme simplification of the cursive form of kanji. Here, for the first time, a writing system matching the phonological structure of the Japanese language was born. The wayo style of calligraphy established by master calligraphers of the mid-Heian period known as the Three Brush Traces — Ono no Michikaze, Fujiwara no Sukemasa, and Fujiwara no Yukinari — was characterized by flexible and lyrical line movements, in contrast to the strict rules of Tang dynasty Chinese calligraphy. In other words, the typical pattern of Japanese cultural reception — digesting foreign forms and transforming them into native sensibility — was carried through in the domain of calligraphy as well.",
      "The medieval period from Kamakura to Muromachi, with the introduction of Zen Buddhism, saw the emergence of a new category of writing known as bokuseki, or ink traces. The inscriptions and verse gathas that Zen monks bestowed from master to disciple as certificates of enlightenment were prized as direct expressions of the state of awakening. The severe lines seen in the brushwork of Muso Soseki and Ikkyu Sojun excluded ornamental beauty and aimed solely at manifesting the intensity of inner spirit. Here calligraphy came to function simultaneously as an object of appreciation and as a religious proof. The reception of bokuseki meant that calligraphy had transcended the imitation of outer forms and become a mirror that directly reflected the inner life of the writer.",
      "In the Edo period, with the spread of terakoya — private elementary schools — calligraphy shifted from the privilege of aristocrats and monks to the accomplishment of commoners. The practice of writing called tenarai was often regarded not merely as the acquisition of practical skill but as a means of cultivating etiquette and character. The oie-ryu style, officially recognized by the Edo shogunate, was taught at terakoya throughout the country, and as a result the individuality of the writer was standardized to some extent. On the other hand, however, the achievement of dramatically expanding the foundation of writing culture through the rise in literacy cannot be denied.",
      "Modernization after the Meiji Restoration brought a serious crisis to calligraphy. With the spread of pens and pencils replacing the brush, and the introduction of the typewriter, the brush's dominance as a means of writing practical documents was rapidly lost. Moreover, in the educational reforms promoted by the Meiji government, calligraphy was positioned as a subordinate area within the national language curriculum, and its autonomous value tended to be overlooked. The modern calligraphy movement advocated by Hidai Tenrai and Hibino Goun was, under this sense of crisis, an attempt to redefine calligraphy as a pure plastic art. They sought, by repositioning calligraphy within the framework of Western fine arts, to newly acquire the grounds for its existence.",
      "After the Second World War, calligraphy entered the adjacent domain of modern art through its incorporation into the exhibition system. The movement known as avant-garde calligraphy dismantled the legibility of characters and pursued the autonomous expression of the ink line itself. However, what this avant-garde experiment brought about was, at once, the success of the artistic transformation of calligraphy and the difficult problem of re-examining the significance of traditional classical rinsho — copying masterpieces. The attempt to purify calligraphy by abandoning characters ironically revealed that characters were the essential condition that makes calligraphy calligraphy.",
      "In the present age of advancing digitization, the act of writing with brush and ink has become completely detached from everyday practical use. However, precisely for that reason, one may say that calligraphy has regained the opportunity to recover its original function — the fixation of spirit mediated by the body. The operation of sliding a fingertip across a screen lacks the material resistances of ink absorption, brush pressure, and the bleeding of paper. If calligraphy is to survive into the future, it will be only in an age that, conversely, re-questions the value of bodily experience that transcends efficiency."
    ],
    questions: [
      {
        q: "According to the first paragraph, what threefold function did the union of brush, ink, and paper bear when calligraphy arrived in Japan?",
        choices: ["Military, economic, and political functions", "Religious practice, dissemination of written culture, and cultivation of aesthetic sensibility", "Trade, governance, and entertainment", "Sculpture, painting, and architecture"],
        answerIndex: 1,
        explanation: "The passage states 筆と墨と紙の結合は、宗教的実践、文字文化の伝播、そして美的感性の涵養という三重の機能を担うこととなった — the union of brush, ink, and paper bore the threefold function of religious practice, dissemination of written culture, and cultivation of aesthetic sensibility."
      },
      {
        q: "What does the passage describe as the epoch-making event of the Heian period in the history of calligraphy?",
        choices: ["The introduction of Zen Buddhism", "The invention of the native kana script", "The establishment of terakoya schools", "The arrival of the typewriter"],
        answerIndex: 1,
        explanation: "The passage states 日本固有の仮名文字が発明されたことは、書道史において画期的な出来事であった — the invention of the native kana script was an epoch-making event in the history of calligraphy."
      },
      {
        q: "What did the avant-garde attempt to purify calligraphy by abandoning characters ironically reveal?",
        choices: ["That characters had become obsolete in modern art", "That characters were the essential condition that makes calligraphy calligraphy", "That avant-garde calligraphy was superior to classical rinsho", "That calligraphy should be replaced by abstract painting"],
        answerIndex: 1,
        explanation: "The passage states 文字を捨てることで書を純化するという企図は、皮肉にも、文字こそが書道を書道たらしめている本質的要件であったことを露呈した — the attempt ironically revealed that characters were the essential condition that makes calligraphy calligraphy."
      },
      {
        q: "Which N1 grammar point appears in the phrase 「存続し得るとすれば」?",
        choices: ["〜に違いない", "〜とすれば (if it is the case that)", "〜にすぎない", "〜とはいえ"],
        answerIndex: 1,
        explanation: "The phrase 存続し得るとすれば uses 〜とすれば to mean 'if it is the case that it can survive', a conditional hypothesis at the N1 level."
      },
      {
        q: "What does the author conclude about the future survival of calligraphy in a digitized age?",
        choices: ["It will survive only if it becomes fully digital", "It will survive only in an age that re-questions the value of bodily experience transcending efficiency", "It will inevitably disappear with the spread of smartphones", "It will survive only if standardized across all schools"],
        answerIndex: 1,
        explanation: "The final paragraph concludes that if calligraphy is to survive, it will be only in an age that conversely re-questions the value of bodily experience that transcends efficiency (効率を超越した身体的経験の価値が、逆に問い直される時代においてのみ)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-12 — The phenomenology of time
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-12",
    title: "時[とき]の現象[げんしょう]学[がく]：過去[かこ]はどこに存在[そんざい]するのか",
    titleReading: "ときのげんしょうがくかこはどこにそんざいするのか",
    level: "N1",
    summary: "A philosophical inquiry into the nature of time — beginning with Augustine's paradox of time, proceeding through Husserl's phenomenology of internal time consciousness (retention and protention), Bergson's critique of spatialized time, Heidegger's being-toward-death, the block universe of modern physics, Ricoeur's narrative time, and concluding with the contemporary compression of temporal experience under digitization.",
    estMinutes: 14,
    tags: ["philosophy of time", "phenomenology", "Husserl", "Bergson", "Heidegger", "Augustine", "Ricoeur"],
    body: [
      "「時[とき]とは何[なに]か。誰[だれ]も問[と]わなければ私[わたし]は知[し]っている。しかし問[と]われた者[もの]に説明[せつめい]しようとすると、私[わたし]は知[し]らない。」このアウグスティヌス[あうぐすてぃぬす]の有名[ゆうめい]な問[とい]いは、時間[じかん]という概念[がいねん]が内包[ないほう]する根源[こんげん]的[てき]な悖論[ばいろん]を鋭[するど]く突[つ]いている。過去[かこ]はもはや存在[そんざい]しないもの、現在[げんざい]は瞬時[しゅんじ]に消滅[しょうめつ]するもの、未来[みらい]はまだ存在[そんざい]しないものとすれば、時間[じかん]なるものが実体[じったい]として存在[そんざい]する余地[よち]はどこにも残[のこ]されていないように見[み]える。それにもかかわらず、我々[われわれ]は明[あき]らかに時間[じかん]を経験[けいけん]している。この矛盾[むじゅん]をいかに解[と]くかが、時間[じかん]哲学[てつがく]の出発[しゅっぱつ]点[てん]である。",
      "フッサール[ふっさーる]は『時間[じかん]意識[いしき]の現象[げんしょう]学[がく]』において、意識[いしき]の内部[ないぶ]に時間[じかん]の構造[こうぞう]を見出[みいだ]そうと試[こころ]みた。彼[かれ]によれば、現在[げんざい]の知覚[ちかく]は、それ自体[じたい]で完結[かんけつ]した点[てん]ではなく、直前[ちょくぜん]の知覚[ちかく]を保持[ほじ]する把持[はじ]と、直後[ちょくご]の知覚[ちかく]を予期[よき]する予持[よじ]という二[ふた]つの地平[ちへい]を伴[ともな]う構造[こうぞう]を持[も]つ。つまり、我々[われわれ]がある旋律[せんりつ]を聴[き]くとき、個々[ここ]の音[おと]が次[つぎ]々[つぎ]と消[き]え去[さ]るにもかかわらず、楽曲[がっきょく]としての統一[とういつ]が感[かん]じられるのは、把持[はじ]が過去[かこ]の音[おと]を「今[いま]の延長[えんちょう]」として意識[いしき]の内[うち]に留[とど]め置[お]いているからである。時間[じかん]は意識[いしき]の外部[がいぶ]に存在[そんざい]するのではなく、意識[いしき]そのものの構造[こうぞう]として開[ひら]かれている、というのがフッサール[ふっさーる]の洞察[どうさつ]であった。",
      "これに対[たい]し、ベルクソン[べるくそん]は、科学[かがく]が時間[じかん]を空間[くうかん]的[てき]に測定[そくてい]可能[かのう]なものへと還元[かんげん]してきたことを批判[ひはん]した。彼[かれ]によれば、本来[ほんらい]の時間[じかん]は、質[しつ]的[てき]な異質[いしつ]性[せい]が連続[れんぞく]的[てき]に流[なが]れる持続[じぞく]であり、時計[とけい]の針[はり]が刻[きざ]む均等[きんとう]な瞬間[しゅんかん]の継起[けいき]とは異[こと]なる。例[たと]えば、喜[よろこ]びや悲傷[ひしょう]を経験[けいけん]する時間[じかん]の長[なが]さは、物理[ぶつり]的[てき]な持続[じぞく]時間[じかん]とは比例[ひれい]しない。ベルクソン[べるくそん]が主張[しゅちょう]したのは、意識[いしき]の時間[じかん]を空間[くうかん]化[か]して測定[そくてい]するという近代[きんだい]科学[かがく]の習慣[しゅうかん]が、本来[ほんらい]の持続[じぞく]を見失[みうしな]わせてきたという点[てん]である。",
      "ハイデガー[はいでがー]は『存在[そんざい]と時間[じかん]』において、時間[じかん]を主観[しゅかん]の意識[いしき]の問題[もんだい]ではなく、存在[そんざい]そのものの構造[こうぞう]として捉[とら]え直[なお]した。彼[かれ]によれば、人間[にんげん]（現存在[げんそんざい]）の存在[そんざい]は、常[つね]に自[みずか]らの死[し]に向[む]かって投[な]げ出[だ]された有限[ゆうげん]な存在[そんざい]であり、そのかぎりで時間[じかん]的[てき]である。重要[じゅうよう]なのは、未来[みらい]が過去[かこ]を媒介[ばいかい]して現在[げんざい]を構成[こうせい]するという時間[じかん]の構造[こうぞう]（時間[じかん]性[せい]）が、人間[にんげん]の存在[そんざい]理解[りかい]を根本[こんぽん]から規定[きてい]しているという点[てん]である。換言[かんげん]すれば、ハイデガー[はいでがー]にとって、時間[じかん]は意識[いしき]の中[なか]にあらかじめあるものではなく、死[し]を自覚[じかく]した存在[そんざい]が自[みずか]らを未来[みらい]へ向[む]けて投企[とうき]することによって開[ひら]かれる地平[ちへい]であった。",
      "一方[いっぽう]、現代[げんだい]物理学[ぶつりがく]は時間[じかん]に関[かん]して我々[われわれ]の直観[ちょっかん]と異[こと]なる像[ぞう]を提示[ていじ]する。アインシュタイン[あいんしゅたいん]の相対[そうたい]性[せい]理論[りろん]は、時間[じかん]が空間[くうかん]から独立[どくりつ]した絶対[ぜったい]的[てき]な尺度[しゃくど]ではないことを示[しめ]した。さらに、ブロック[ぶろっく]宇宙[うちゅう]論[ろん]と呼[よ]ばれる立場[たちば]によれば、過去[かこ]、現在[げんざい]、未来[みらい]の区別[くべつ]は客観[きゃっかん]的[てき]には存在[そんざい]せず、すべての瞬間[しゅんかん]が四[よん]次元[じげん]時空[じくう]のなかに等価[とうか]に並存[へいそん]している。この立場[たちば]に従[したが]えば、「現在[げんざい]」が流[なが]れるという感覚[かんかく]は、意識[いしき]を持[も]った観測[かんそく]者[しゃ]に固有[こゆう]の錯覚[さっかく]に過[す]ぎないことになる。物理学[ぶつりがく]の時間[じかん]と現象[げんしょう]学[がく]的[てき]な時間[じかん]とのこの乖離[かいり]は、科学[かがく]と哲学[てつがく]の対話[たいわ]を要請[ようせい]する難問[なんもん]として今日[こんにち]も残[のこ]されている。",
      "時間[じかん]はまた、記憶[きおく]と不可分[ふかぶん]の関係[かんけい]にある。リクール[りくーる]が主張[しゅちょう]したように、時間[じかん]の経験[けいけん]は物語[ものがたり]の構築[こうちく]を通[つう]じて初[はじ]めて意味[いみ]を与[あた]えられる。個[こ]人[じん]の同一性[どういつせい]も、自[みずか]らの過去[かこ]を一定[いってい]の物語[ものがたり]として語[かた]り直[なお]す作業[さぎょう]のうちに維持[いじ]される。ここにおいて、時間[じかん]は単[たん]なる連続[れんぞく]的[てき]な継起[けいき]ではなく、意味[いみ]の網[あみ]の目[め]として編[あ]まれた構造[こうぞう]として現[あらわ]れる。我々[われわれ]は過去[かこ]を客観的[きゃっかんてき]に再現[さいげん]するのではなく、現在[げんざい]の立場[たちば]から過去[かこ]を再解釈[さいかいしゃく]することによって、自[みずか]らの時間[じかん]的[てき]存在[そんざい]を構成[こうせい]し直[なお]しているのである。",
      "デジタル[でじたる]化[か]が加速[かそく]する現代[げんだい]において、時間[じかん]の経験[けいけん]はかつてないほど圧縮[あっしゅく]されている。通知[つうち]が即時[そくじ]に届[とど]き、情報[じょうほう]が瞬時[しゅんじ]に更新[こうしん]される環境[かんきょう]は、もはや持続[じぞく]ではなく断片[だんぺん]化[か]された瞬間[しゅんかん]の継起[けいき]を我々[われわれ]に強[し]いている。このような時間[じかん]の稀薄[きはく]化[か]に対[たい]し、現象[げんしょう]学[がく]が提起[ていき]した「把持[はじ]」と「予持[よじ]」の構造[こうぞう]を再[ふたた]び問[と]い直[なお]すことは、もはや哲学[てつがく]的[てき]な趣味[しゅみ]の問題[もんだい]ではなく、人間[にんげん]的[てき]経験[けいけん]の質[しつ]を維持[いじ]するための現実[げんじつ]的[てき]な課題[かだい]である。我々[われわれ]は時間[じかん]を消費[しょうひ]する前[まえ]に、時間[じかん]とは何[なに]かを再[ふたた]び考[かんが]える必要[ひつよう]に迫[せま]られているのである。"
    ],
    translation: [
      "\"What then is time? If no one asks me, I know; if I wish to explain it to one who asks, I do not know.\" This famous question of Augustine sharply exposes the fundamental paradox latent in the concept of time. If the past no longer exists, the present vanishes in an instant, and the future does not yet exist, there appears to be no room for time to exist as a substance. Nevertheless, we clearly experience time. How to resolve this contradiction is the starting point of the philosophy of time.",
      "In his Phenomenology of Internal Time Consciousness, Husserl sought to discover the structure of time within consciousness. According to him, the perception of the present is not a self-contained point but a structure accompanied by two horizons: retention, which holds the immediately preceding perception, and protention, which anticipates the perception to follow. That is to say, when we listen to a melody, although each individual note vanishes in succession, we still feel the unity of the piece because retention holds the past note as an extension of the now within consciousness. Time does not exist outside consciousness but is opened as the very structure of consciousness itself — that was Husserl's insight.",
      "Bergson, by contrast, criticized science for having reduced time to something spatially measurable. According to him, genuine time is a duree — a duration in which qualitatively heterogeneous moments flow continuously — distinct from the succession of equal instants that the hands of a clock mark out. The length of time in which we experience joy or grief, for instance, does not stand in proportion to its physical duration. Bergson argued that the habit of modern science of spatializing and measuring the time of consciousness has caused us to lose sight of genuine duration.",
      "In Being and Time, Heidegger reconceived time not as a problem of subjective consciousness but as the structure of being itself. According to him, human existence (Dasein) is always a finite being thrown toward its own death, and insofar as it is so, it is temporal. What is crucial is that the structure of time — in which the future mediates the past to constitute the present — fundamentally determines how human beings understand being. In other words, for Heidegger, time was not something pre-given within consciousness but a horizon opened by a being aware of death that projects itself toward the future.",
      "Modern physics, on the other hand, presents an image of time that diverges from our intuition. Einstein's theory of relativity showed that time is not an absolute measure independent of space. Furthermore, according to the position known as the block universe theory, the distinction between past, present, and future does not exist objectively; all instants coexist equivalently within four-dimensional spacetime. According to this view, the feeling that the present flows would be nothing but an illusion peculiar to a conscious observer. This divergence between the time of physics and the time of phenomenology remains today as a difficult problem that demands dialogue between science and philosophy.",
      "Time is also inseparable from memory. As Ricoeur argued, the experience of time is given meaning only through the construction of narrative. Personal identity, too, is maintained in the work of re-narrating one's past as a coherent story. Here time appears not as a mere continuous succession but as a structure woven as a network of meaning. We do not reproduce the past objectively but, from the standpoint of the present, reinterpret the past and thereby reconstruct our temporal being.",
      "In the present age of accelerating digitization, the experience of time has been compressed as never before. The environment in which notifications arrive instantly and information is updated in real time imposes on us not duration but the succession of fragmented instants. Faced with this dilution of time, to re-question the structure of retention and protention that phenomenology proposed is no longer a matter of philosophical taste but a practical task for maintaining the quality of human experience. Before we consume time, we are compelled to consider anew what time is."
    ],
    questions: [
      {
        q: "What paradox does Augustine's question expose according to the passage?",
        choices: ["That time is identical to space", "That although time appears to have no substantial existence, we clearly experience it", "That only the present is truly real", "That time can never be measured"],
        answerIndex: 1,
        explanation: "The passage explains that if the past no longer exists, the present vanishes in an instant, and the future does not yet exist, time appears to have no room for substantial existence — yet we clearly experience time. This is the paradox."
      },
      {
        q: "According to Husserl, why does a melody feel unified even though individual notes vanish in succession?",
        choices: ["Because each note is recorded objectively on paper", "Because retention holds the past note as an extension of the now within consciousness", "Because the future is predetermined by God", "Because time is merely an illusion"],
        answerIndex: 1,
        explanation: "The passage states that retention (把持) holds the past note as 'an extension of the now' (今の延長) within consciousness, which is why a melody feels unified despite the vanishing of individual notes."
      },
      {
        q: "In what respect does Heidegger's conception of time fundamentally differ from Husserl's?",
        choices: ["Heidegger treats time as the structure of being itself, not merely of subjective consciousness", "Heidegger denies that human existence has any temporal structure", "Heidegger equates time with clock measurement", "Heidegger regards time as purely spatial"],
        answerIndex: 0,
        explanation: "Heidegger reconceived time not as a problem of subjective consciousness but as the structure of being itself (存在そのものの構造), rooted in being-toward-death — distinguishing him from Husserl's consciousness-based account."
      },
      {
        q: "What does the block universe theory imply about the feeling that the present flows?",
        choices: ["That the present is the only real time", "That the feeling of the present flowing is an illusion peculiar to a conscious observer", "That the present is determined entirely by the past", "That the present has no duration whatsoever"],
        answerIndex: 1,
        explanation: "The block universe theory holds that past, present, and future coexist equivalently in four-dimensional spacetime, so the feeling that the present flows is nothing but an illusion peculiar to a conscious observer."
      },
      {
        q: "What does the author identify as a contemporary problem of digital time?",
        choices: ["That time has become slower and more contemplative", "That time has been compressed into fragmented instants, diluting the experience of duration", "That memory has been improved by digital storage", "That physics and philosophy have finally reached agreement"],
        answerIndex: 1,
        explanation: "The final paragraph states that digitization compresses temporal experience into fragmented instants (断片化された瞬間の継起), causing a dilution (稀薄化) of time and requiring us to re-question the structure of retention and protention."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-13 — The geopolitics of East Asia
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-13",
    title: "東[ひがし]アジア[あじあ]地政[ちせい]学[がく]：海[うみ]と陸[りく]の境界[きょうかい]で揺[ゆ]れる群島[ぐんとう]",
    titleReading: "ひがしあじあちせいがくうみとりくのきょうかいでゆれるぐんとう",
    level: "N1",
    summary: "A geopolitical analysis of East Asia through the classic Mackinder–Mahan framework of land power versus sea power — examining Japan's maritime orientation, Korea's role as a peninsula buffer, China's continental and maritime ambitions, Taiwan's strategic position, the postwar US-Japan alliance structure, and the persistent tension between maritime and continental logics shaping the region.",
    estMinutes: 13,
    tags: ["geopolitics", "East Asia", "Mackinder", "Mahan", "sea power", "US-Japan alliance", "Taiwan"],
    body: [
      "地政[ちせい]学[がく]という学問分野[がくもんぶんや]は、しばしば帝国主義[ていこくしゅぎ]的[てき]な政策[せいさく]の正当化[せいとうか]に利用[りよう]されたという歴史的[れきしてき]な経緯[けいい]から、戦後[せんご]の日本[にほん]においては長[なが]く忌避[きひ]されてきた。しかしながら、国家[こっか]の安全保障[あんぜんほしょう]や外交[がいこう]戦略[せんりゃく]を考[かんが]える上[うえ]で、地理的[ちりてき]条件[じょうけん]が規定[きてい]する構造的[こうぞうてき]な制約[せいやく]を無視[むし]することは不可能[ふかのう]である。一九[いっきゅう]世紀[せいき]末[まつ]にマッキンダー[まっきんだー]が提唱[ていしょう]した「心臓[しんぞう]地帯[ちたい]」論[ろん]は、ユーラシア[ゆーらしあ]大陸[たいりく]の中央[ちゅうおう]部[ぶ]を支配[しはい]する勢力[せいりょく]が世界[せかい]島[とう]を制[せい]し、ひいては全世界[ぜんせかい]を支配[しはい]するという命題[めいだい]を提示[ていじ]した。この陸[りく]の論理[ろんり]に対抗[たいこう]するかたちで、マハン[まはん]は海洋[かいよう]勢力[せいりょく]の優位[ゆうい]を説[と]き、貿易[ぼうえき]路[ろ]と海軍[かいぐん]力[りょく]が覇権[はけん]を決[き]するという理論[りろん]を展開[てんかい]した。",
      "東[ひがし]アジア[あじあ]は、まさにこの陸[りく]と海[うみ]の境界[きょうかい]に位置[いち]する地域[ちいき]であり、そのことがこの地域[ちいき]の政治[せいじ]的[てき]不安定[ふあんてい]性[せい]の根源[こんげん]的[てき]な要因[よういん]となっている。中国[ちゅうごく]は広大[こうだい]な大陸[たいりく]を背負[せお]いながら同時[どうじ]に太平洋[たいへいよう]へと進出[しんしゅつ]しようとする両義[りょうぎ]的[てき]な国家[こっか]であり、その戦略[せんりゃく]的[てき]アイデンティティ[あいでんてぃてぃ]は未[いま]だ陸[りく]と海[うみ]の間[あいだ]で揺[ゆ]れ動[うご]いている。日本[にほん]は四[よっ]つの主要[しゅよう]な島[しま]から成[な]る群島[ぐんとう]国家[こっか]として、一貫[いっかん]して海洋[かいよう]的[てき]な方向[ほうこう]性[せい]を有[ゆう]してきた。韓国[かんこく]と北朝鮮[きたちょうせん]は朝鮮[ちょうせん]半島[はんとう]という、大陸[たいりく]勢力[せいりょく]と海洋[かいよう]勢力[せいりょく]が衝突[しょうとつ]する緩衝[かんしょう]地帯[ちたい]に位置[いち]し、その地政的[ちせいてき]条件[じょうけん]が両国[りょうこく]の運命[うんめい]を規定[きてい]し続[つづ]けている。",
      "日本[にほん]の地政的[ちせいてき]立場[たちば]は、海洋[かいよう]国家[こっか]としての特性[とくせい]によって特徴[とくちょう]づけられる。島国[しまぐに]という地理的[ちりてき]条件[じょうけん]は、外敵[がいてき]の侵略[しんりゃく]に対[たい]する天然[てんねん]の障壁[しょうへき]を与[あた]えた反面[はんめん]、海[うみ]を通[つう]じた貿易[ぼうえき]への依存[いぞん]を不可避[ふかひ]にした。幕末[ばくまつ]から明治[めいじ]にかけて、日本[にほん]は西洋[せいよう]列強[れっきょう]の海洋[かいよう]勢力[せいりょく]の脅威[きょうい]に晒[さら]されつつ、自[みずか]らも近代[きんだい]海軍[かいぐん]を建設[けんせつ]することで海洋[かいよう]国家[こっか]としての地位[ちい]を確立[かくりつ]した。しかしながら、この海洋[かいよう]的[てき]な拡張[かくちょう]が帝国主義[ていこくしゅぎ]的[てき]な侵略[しんりゃく]戦争[せんそう]へと転化[てんか]した結果[けっか]、第二次[だいにじ]世界大戦[せかいたいせん]における敗北[はいぼく]という悲惨[ひさん]な結末[けつまつ]を招[まね]いた。戦後[せんご]の日本[にほん]は、平和[へいわ]憲法[けんぽう]と日米[にちべい]同盟[どうめい]という二[ふた]つの柱[はしら]によって、海洋[かいよう]国家[こっか]としての立場[たちば]を質的[しつてき]に異[こと]なるものへと再編[さいへん]することとなった。",
      "朝鮮[ちょうせん]半島[はんとう]は、東[ひがし]アジア[あじあ]の地政的[ちせいてき]構造[こうぞう]において特異[とくい]な重要性[じゅうようせい]を持[も]つ。それは大陸[たいりく]から海洋[かいよう]へと突[つ]き出[で]た地形[ちけい]が、物理的[ぶつりてき]にも戦略的[せんりゃくてき]にも両者[りょうしゃ]の衝突[しょうとつ]点[てん]をなすからである。歴史的[れきしてき]に、半島[はんとう]は蒙古[もうこ]の襲来[しゅうらい]、豊臣[とよとみ]秀吉[ひでよし]の朝鮮[ちょうせん]出兵[しゅっぺい]、日清[にっしん]戦争[せんそう]、そして朝鮮[ちょうせん]戦争[せんそう]という幾度[いくど]も紛争[ふんそう]の舞台[ぶたい]となってきた。冷戦[れいせん]後[ご]も半島[はんとう]の分断[ぶんだん]は継続[けいぞく]し、北朝鮮[きたちょうせん]の核[かく]開発[かいはつ]問題[もんだい]は地域[ちいき]の安全保障[あんぜんほしょう]環境[かんきょう]に深刻[しんこく]な不安[ふあん]を注入[ちゅうにゅう]し続[つづ]けている。半島[はんとう]の統一[とういつ]が実現[じつげん]した場合[ばあい]、それが陸[りく]の勢力[せいりょく]に組み込[こ]まれるか海[うみ]の勢力[せいりょく]と結合[けつごう]するかによって、東[ひがし]アジア[あじあ]全体[ぜんたい]の力[ちから]の均衡[きんこう]は根本的[こんぽんてき]に変容[へんよう]するであろう。",
      "中華[ちゅうか]人民共和国[じんみんきょうわこく]の台頭[たいとう]は、東[ひがし]アジア[あじあ]の地政的[ちせいてき]構造[こうぞう]を根本[こんぽん]から変[か]えつつある。中国[ちゅうごく]は経済[けいざい]的[てき]な成長[せいちょう]に支[ささ]えられ、海軍[かいぐん]力[りょく]を急速[きゅうそく]に拡大[かくだい]するとともに、南[みなみ]シナ[しな]海[かい]や東[ひがし]シナ[しな]海[かい]における海洋[かいよう]進出[しんしゅつ]を強化[きょうか]している。人工[じんこう]島[とう]の建設[けんせつ]と軍事[ぐんじ]拠点[きょてん]の設置[せっち]は、マハン[まはん]の海洋[かいよう]勢力[せいりょく]論[ろん]を忠実[ちゅうじつ]に実践[じっせん]しているかのようである。一方[いっぽう]で、一帯[いったい]一路[いちろ]構想[こうそう]は、陸[りく]路[ろ]を通[つう]じたユーラシア[ゆーらしあ]大陸[たいりく]の統合[とうごう]を図[はか]るものであり、中国[ちゅうごく]が陸[りく]と海[うみ]の双方[そうほう]の勢力[せいりょく]を同時[どうじ]に追求[ついきゅう]しようとする野心的[やしんてき]な戦略[せんりゃく]を示[しめ]している。",
      "台湾[たいわん]問題[もんだい]は、この陸海[りくかい]の対立[たいりつ]が最[もっとも]も鋭[するど]く結晶[けっしょう]した地点[てんてん]である。台湾[たいわん]は地理的[ちりてき]に第一[だいいち]島[とう]連鎖[れんさ]の中枢[ちゅうすう]に位置[いち]し、中国[ちゅうごく]の海洋[かいよう]進出[しんしゅつ]を制[せい]する戦略的[せんりゃくてき]な要衝[ようしょう]である。中華[ちゅうか]人民共和国[じんみんきょうわこく]は台湾[たいわん]を「不可分[ふかぶん]の領土[りょうど]」と主張[しゅちょう]し、必要[ひつよう]とあらば武力[ぶりょく]による統一[とういつ]も辞[じ]さないという立場[たちば]を堅持[けんじ]している。他方[たほう]、台湾[たいわん]の民主的[みんしゅてき]な政治[せいじ]体制[たいせい]と経済[けいざい]的[てき]な繁栄[はんえい]は、海洋[かいよう]勢力[せいりょく]を率[ひき]いるアメリカ[あめりか]にとって看過[かんか]し得[え]ない利益[りえき]を意味[いみ]する。台湾[たいわん]海峡[かいきょう]で生[しょう]じる緊張[きんちょう]は、単[たん]なる領土[りょうど]問題[もんだい]ではなく、陸[りく]の覇権[はけん]と海[うみ]の覇権[はけん]が衝突[しょうとつ]する地政的[ちせいてき]な断層[だんそう]の現[げん]れである。",
      "冷戦[れいせん]後[ご]の東[ひがし]アジア[あじあ]秩序[ちつじょ]は、アメリカ[あめりか]の軍事[ぐんじ]的[てき]優位[ゆうい]と日米[にちべい]同盟[どうめい]を軸[じく]として維持[いじ]されてきたが、中国[ちゅうごく]の台頭[たいとう]と北朝鮮[きたちょうせん]の核[かく]問題[もんだい]によってその安定[あんてい]性[せい]は著[いちじる]しく損[そこな]なわれている。日本[にほん]は平和[へいわ]憲法[けんぽう]の枠組[わくぐ]みの中[なか]で自衛[じえい]的[てき]な防衛[ぼうえい]力[りょく]を維持[いじ]しつつ、日米[にちべい]同盟[どうめい]を基軸[きじく]とした抑止[よくし]体制[たいせい]に依存[いぞん]している。しかしながら、アメリカ[あめりか]の相対的[そうたいてき]な衰退[すいたい]と内政[ないせい]の不安定[ふあんてい]化[か]が進行[しんこう]する中[なか]で、日本[にほん]が自[みずか]の安全保障[あんぜんほしょう]をどのように構築[こうちく]するかは、喫緊[きっきん]の課題[かだい]となっている。地政学[ちせいがく]が教[おし]えるのは、理想[りそう]主義[しゅぎ]的[てき]な外交[がいこう]論[ろん]だけでは国家[こっか]の生存[せいぞん]を担保[たんぽ]し得[え]ないという冷徹[れいてつ]な事実[じじつ]である。"
    ],
    translation: [
      "The discipline of geopolitics was long shunned in postwar Japan, owing to the historical circumstance that it had often been used to justify imperialist policies. Nevertheless, in considering a state's national security and diplomatic strategy, it is impossible to ignore the structural constraints that geographical conditions impose. The heartland theory propounded by Mackinder at the end of the nineteenth century advanced the proposition that the power controlling the central region of the Eurasian continent would command the world island (Eurasia), and thereby dominate the entire world. In opposition to this logic of the land, Mahan expounded the superiority of maritime power, developing a theory that trade routes and naval strength decide hegemony.",
      "East Asia is precisely a region situated at the boundary between land and sea, and this constitutes the fundamental cause of the political instability of the region. China is an ambivalent state that bears the vast continent on its back while simultaneously seeking to advance into the Pacific; its strategic identity still wavers between land and sea. Japan, an archipelagic state composed of four main islands, has consistently possessed a maritime orientation. The Korean Peninsula, on which South and North Korea are situated, lies in a buffer zone where continental and maritime powers collide, and that geopolitical condition has continued to determine the fate of both states.",
      "Japan's geopolitical position is characterized by its nature as a maritime state. The geographical condition of being an island country provided a natural barrier against foreign invasion, while on the other hand making dependence on maritime trade unavoidable. From the late Edo period through the Meiji era, Japan, while exposed to the threat of Western maritime powers, established its position as a maritime state by constructing a modern navy. However, when this maritime expansion turned into imperialist wars of aggression, it invited the tragic conclusion of defeat in the Second World War. Postwar Japan rearranged its position as a maritime state into something qualitatively different, through the two pillars of the peace constitution and the US-Japan alliance.",
      "The Korean Peninsula possesses exceptional importance in the geopolitical structure of East Asia. This is because its topography, jutting from the continent into the ocean, constitutes both physically and strategically a point of collision between the two. Historically, the peninsula has repeatedly served as the stage for conflict — the Mongol invasions, Toyotomi Hideyoshi's Korean campaigns, the Sino-Japanese War, and the Korean War. Even after the Cold War the division of the peninsula continues, and the issue of North Korea's nuclear development has continued to inject grave anxiety into the region's security environment. Should the peninsula be unified, the entire balance of power in East Asia would fundamentally transform depending on whether it were absorbed into the continental power or joined with the maritime one.",
      "The rise of the People's Republic of China is fundamentally altering the geopolitical structure of East Asia. Backed by economic growth, China is rapidly expanding its naval power while strengthening its maritime advance into the South China Sea and the East China Sea. The construction of artificial islands and installation of military bases appear to faithfully implement Mahan's theory of sea power. Meanwhile, the Belt and Road Initiative aims at the integration of the Eurasian continent through land routes, revealing China's ambitious strategy of pursuing both land and sea power simultaneously.",
      "The Taiwan question is the point at which this land-sea antagonism has most sharply crystallized. Taiwan is geographically situated at the hub of the first island chain, a strategic strongpoint that controls China's maritime advance. The People's Republic of China asserts that Taiwan is an inseparable territory and maintains the position that it would not eschew unification by force if necessary. On the other hand, Taiwan's democratic political system and economic prosperity represent interests that the United States, leading the maritime powers, cannot overlook. The tensions arising in the Taiwan Strait are not a mere territorial issue but a manifestation of the geopolitical fault line where continental and maritime hegemonies collide.",
      "The post-Cold War order in East Asia has been maintained with American military superiority and the US-Japan alliance as its axis, but its stability has been markedly impaired by the rise of China and the North Korean nuclear issue. Japan maintains a self-defensive military force within the framework of the peace constitution while depending on a deterrence structure centered on the US-Japan alliance. However, with the relative decline of the United States and the progressing destabilization of its domestic politics proceeding, how Japan constructs its own security has become a pressing task. What geopolitics teaches is the cold fact that idealistic diplomacy alone cannot guarantee the survival of a state."
    ],
    questions: [
      {
        q: "What does the passage identify as the fundamental cause of political instability in East Asia?",
        choices: ["The region's religious diversity", "The region's position at the boundary between land power and sea power", "The region's lack of natural resources", "The region's tropical climate"],
        answerIndex: 1,
        explanation: "The passage states that East Asia is precisely a region situated at the boundary between land and sea, which constitutes the fundamental cause of the region's political instability (まさにこの陸と海の境界に位置する地域であり、そのことがこの地域の政治的不安定性の根源的な要因となっている)."
      },
      {
        q: "According to the passage, how did Japan's maritime expansion culminate in the Second World War?",
        choices: ["It led to peaceful trade relations with all neighbors", "It transformed into imperialist wars of aggression, ending in defeat", "It resulted in the immediate establishment of democracy", "It produced a unified East Asian federation"],
        answerIndex: 1,
        explanation: "The passage states that Japan's maritime expansion turned into imperialist wars of aggression and invited the tragic conclusion of defeat in the Second World War (この海洋的な拡張が帝国主義的な侵略戦争へと転化した結果、第二次世界大戦における敗北という悲惨な結末を招いた)."
      },
      {
        q: "Why does the passage describe the Taiwan Strait tensions as a 'geopolitical fault line' rather than a mere territorial issue?",
        choices: ["Because Taiwan has no economic significance", "Because it is where continental and maritime hegemonies collide", "Because the dispute predates all other East Asian conflicts", "Because Taiwan is geographically part of the Japanese archipelago"],
        answerIndex: 1,
        explanation: "The passage describes Taiwan as a strategic hub of the first island chain and the tensions there as a manifestation of the geopolitical fault line where continental and maritime hegemonies collide (陸の覇権と海の覇権が衝突する地政的な断層の現れ)."
      },
      {
        q: "What does the Belt and Road Initiative reveal about China's strategy, according to the passage?",
        choices: ["That China has abandoned maritime ambitions entirely", "That China pursues both land and sea power simultaneously", "That China intends to withdraw from Eurasia", "That China seeks only cultural exchange"],
        answerIndex: 1,
        explanation: "The passage states that the Belt and Road Initiative reveals China's ambitious strategy of pursuing both land and sea power simultaneously (中国が陸と海の双方の勢力を同時に追求しようとする野心的な戦略)."
      },
      {
        q: "What cold fact does geopolitics teach, as stated in the final paragraph?",
        choices: ["That geography determines cultural superiority", "That idealistic diplomacy alone cannot guarantee a state's survival", "That military power is unnecessary in the modern era", "That economic growth ensures peace"],
        answerIndex: 1,
        explanation: "The final paragraph states that geopolitics teaches the cold fact that idealistic diplomacy alone cannot guarantee the survival of a state (地政学が教えるのは、理想主義的な外交論だけでは国家の生存を担保し得ないという冷徹な事実)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-14 — Educational standardization
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-14",
    title: "教育[きょういく]の規格[きかく]化[か]：画一[かいつ]化[か]がもたらす功罪[こうざい]",
    titleReading: "きょういくのきかくかかいつかがもたらすこうざい",
    level: "N1",
    summary: "A critical examination of educational standardization — tracing the rise of standardized testing from the Meiji school system through postwar reforms, international PISA comparisons, the failure of yutori education, the tension between equity and excellence, the erosion of teacher autonomy, and the difficulty of cultivating individuality within a system designed for measurable uniformity.",
    estMinutes: 11,
    tags: ["education", "standardization", "PISA", "yutori education", "equity", "Meiji education"],
    body: [
      "近代[きんだい]国家[こっか]が学校[がっこう]制度[せいど]を整備[せいび]した最大[さいだい]の目的[もくてき]は、国民[こくみん]全体[ぜんたい]に一定[いってい]水準[すいじゅん]以上[いじょう]の知識[ちしき]と技能[ぎのう]を付与[ふよ]することであった。明治[めいじ]期[き]の学制[がくせい]発布[はっぷ]以降[いこう]、日本[にほん]の教育[きょういく]は中央[ちゅうおう]集権的[しゅうけんてき]な管理[かんり]のもと、画一的[かいつてき]なカリキュラム[かりきゅらむ]と標準化[ひょうじゅんか]された評価[ひょうか]制度[せいど]を骨格[こっかく]として発展[はってん]してきた。かかる制度[せいど]は、短期間[たんきかん]に高[たか]い識字[しきじ]率[りつ]と工業[こうぎょう]労働[ろうどう]力[りょく]を形成[けいせい]するという点[てん]において目覚[めざ]ましい成果[せいか]を上[あ]げた。しかしながら、その反面[はんめん]、個性[こせい]の伸張[しんちょう]や多様[たよう]な才能[さいのう]の育成[いくせい]という観点[かんてん]からは、構造的[こうぞうてき]な限界[げんかい]を内包[ないほう]していた。",
      "標準化[ひょうじゅんか]された教育[きょういく]が不可避[ふかひ]に伴[ともな]う問題[もんだい]は、「平均[へいきん]的[てき]な児童[じどう]」という実在[じつざい]しない対象[たいしょう]を念頭[ねんとう]に置[お]くことで、その平均[へいきん]から外[はず]れた子[こ]供[ども]たちを周辺[しゅうへん]へと追[お]いやるという構造[こうぞう]である。均一[きんいつ]な授業[じゅぎょう]進度[しんど]と画一的[かいつてき]な到達[とうたつ]目標[もくひょう]は、平均[へいきん]的[てき]な能力[のうりょく]を持[も]つ児童[じどう]には適合[てきごう]するが、際立[すぐ]たれた才能[さいのう]を持[も]つ者[もの]にも、学習[がくしゅう]困難[こんなん]を抱[かか]える者[もの]にも、同時[どうじ]に不適合[ふてきごう]をもたらす。ここにおいて、「公平[こうへい]さ」という理念[りねん]が皮肉[ひにく]にも個別[こべつ]の不利益[ふりえき]を正当化[せいとうか]する論理[ろんり]へと転化[てんか]する危険[きけん]が生[しょう]じる。",
      "国際[こくさい]学力[がくりょく]調査[ちょうさ]であるPISA[ぴさ]が二〇〇〇[にせん]年[ねん]に開始[かいし]されて以降[いこう]、日本[にほん]の教育[きょういく]政策[せいさく]は国際[こくさい]的[てき]な学力[がくりょく]ランキング[らんきんぐ]という新[あたら]しい基準[きじゅん]に晒[さら]され続[つづ]けている。二〇〇三[にせんさん]年[ねん]の調査[ちょうさ]で日本[にほん]の順位[じゅんい]が急落[きゅうらく]したことは、いわゆる「ゆとり教育[きょういく]」に対[たい]する批判[ひはん]を激化[げきか]させ、学習[がくしゅう]内容[ないよう]の削減[さくげん]から逆[ぎゃく]に授業[じゅぎょう]時間[じかん]の増加[ぞうか]へと政策[せいさく]の舵[かじ]を切[き]らせる契機[けいき]となった。しかしながら、このような政策[せいさく]転換[てんかん]が教育[きょういく]の質[しつ]を本質的[ほんしつてき]に改善[かいぜん]し得[う]たかについては、疑問[ぎもん]が残[のこ]る。なぜなら、ランキング[らんきんぐ]への過度[かど]な執着[しゅうちゃく]は、本来[ほんらい]の教育[きょういく]目的[もくてき]を見失[みうしな]わせるからである。",
      "教育[きょういく]の標準化[ひょうじゅんか]を正当化[せいとうか]する論拠[ろんきょ]として、社会[しゃかい]的[てき]な公平[こうへい]性[せい]の確保[かくほ]がしばしば挙[あ]げられる。すなわち、全国[ぜんこく]どこ[どこ]で誰[だれ]が学[まな]んでも同等[どうとう]の教育[きょういく]を受[う]けられるという保障[ほしょう]は、地域[ちいき]間[かん]や階層[かいそう]間[かん]の格差[かくさ]を是正[ぜせい]するうえで不可欠[ふかけつ]である、という主張[しゅちょう]である。この主張[しゅちょう]自体[じたい]には妥当[だとう]性[せい]がある。しかしながら、公平[こうへい]性[せい]の名[な]のもとに教員[きょういん]の裁量[さいりょう]を奪[うば]い、現場[げんば]の実情[じつじょう]に即[そく]さない管理[かんり]的[てき]統制[とうせい]を強化[きょうか]することは、教育[きょういく]の現場[げんば]を疲弊[ひへい]させる逆効果[ぎゃくこうか]を招[まね]きかねない。教科書[きょうかしょ]の検定[けんてい]制度[せいど]や指導[しどう]要領[ようりょう]の厳格[げんかく]化[か]は、その典型[てんけい]的[てき]な例[れい]である。",
      "画一[かいつ]化[か]がもたらす最大[さいだい]の功罪[こうざい]は、教育[きょういく]の本来[ほんらい]の目的[もくてき]である「人間[にんげん]形成[けいせい]」が、測定[そくてい]可能[かのう]な「学力[がくりょく]」へと還元[かんげん]されてしまうという点[てん]にある。読解[どっかい]力[りょく]、数学[すうがく]的[てき]リテラシー[りてらしー]、科学[かがく]的[てき]素養[そよう]といった指標[しひょう]は、教育[きょういく]成果[せいか]の一部[いちぶ]を捉[とら]えるには有効[ゆうこう]であるが、道徳[どうとく]的[てき]判断[はんだん]力[りょく]、審美[しんび]的[てき]感性[かんせい]、他者[たしゃ]への共感[きょうかん]力[りょく]といった、人間[にんげん]形成[けいせい]においてより重要[じゅうよう]な資質[ししつ]を測[はか]ることはできない。測定[そくてい]可能[かのう]なものだけが価値[かち]を持[も]つかのような錯覚[さっかく]が、教育[きょういく]現場[げんば]に蔓延[まんえん]するとき、本来[ほんらい]豊[ゆた]かであるべき教育[きょういく]経験[けいけん]は貧困[ひんこん]化[か]せざるを得[え]ない。",
      "明治[めいじ]期[き]の教育[きょういく]哲学[てつがく]者[しゃ]であった井上[いのうえ]円了[えんりょう]は、教育[きょういく]の目的[もくてき]を単[たん]なる知識[ちしき]の注入[ちゅうにゅう]ではなく、独立[どくりつ]した人格[じんかく]の形成[けいせい]に見出[みいだ]した。しかしながら、近代[きんだい]日本[にほん]の教育[きょういく]制度[せいど]は、国家[こっか]の工業[こうぎょう]化[か]と軍事[ぐんじ]化[か]を支[ささ]える人材[じんざい]養成[ようせい]という要請[ようせい]に引[ひ]きずられ、この理念[りねん]を十全[じゅうぜん]に実現[じつげん]し得[え]なかった。戦後[せんご]の教育[きょういく]改革[かいかく]も、アメリカ[あめりか]の占領[せんりょう]政策[せいさく]という制約[せいやく]のもとで構築[こうちく]されたため、独自[どくじ]の教育[きょういく]哲学[てつがく]に基[もと]づく制度[せいど]設計[せっけい]とは言[い]い難[がた]い側面[そくめん]があった。今日[こんにち]に至[いた]るまで、日本[にほん]の教育[きょういく]制度[せいど]は理念[りねん]と現実[げんじつ]の乖離[かいり]を抱[かか]え続[つづ]けている。",
      "画一[かいつ]化[か]の桎梏[しっこく]から脱却[だっきゃく]する一[ひと]つの方向[ほうこう]は、教員[きょういん]の専門[せんもん]的[てき]自律[じりつ]性[せい]を回復[かいふく]し、現場[げんば]の裁量[さいりょう]を拡大[かくだい]することである。フィンランド[ふぃんらんど]の教育[きょういく]制度[せいど]が詳細[しょうさい]な指導[しどう]要領[ようりょう]を廃止[はいし]したにもかかわらず国際[こくさい]的[てき]に高[たか]い評価[ひょうか]を得[え]ているのは、教員[きょういん]の資質[ししつ]と裁量[さいりょう]を信頼[しんらい]する制度[せいど]設計[せっけい]の成否[せいひ]を示[しめ]している。もとより、一律[いちりつ]の解決策[かいけつさく]が存在[そんざい]しないことにも留意[りゅうい]すべきである。標準[ひょうじゅん]を完全[かんぜん]に放棄[ほうき]することは、別[べつ]の形[かたち]の不平等[ふびょうどう]を招[まね]きかねない。重要[じゅうよう]なのは、標準[ひょうじゅん]と多様[たよう]性[せい]、効率[こうりつ]と個性[こせい]という相反[あいはん]する要請[ようせい]の間[あいだ]で、動的[どうてき]な均衡[きんこう]を保[たも]ち続[つづ]けるという終[つ]わりのない営[いとな]みに、教育[きょういく]という実践[じっせん]が耐[た]え忍[しの]び得[う]るか否[いな]かにかかっている。"
    ],
    translation: [
      "The greatest purpose for which the modern state established the school system was to confer on the entire population a level of knowledge and skill above a certain standard. Since the promulgation of the school system in the Meiji period, Japanese education has developed under centralized administration, with a uniform curriculum and a standardized evaluation system as its skeleton. Such a system achieved remarkable results in forming, within a short period, a high literacy rate and an industrial labor force. However, from the perspective of fostering individuality and cultivating diverse talents, it inherently contained structural limitations.",
      "A problem that standardized education inevitably accompanies is a structure whereby positing a non-existent 'average child' as the assumed target pushes children who deviate from that average to the periphery. Uniform instructional pace and standardized attainment targets suit children of average ability, but simultaneously produce mismatch both for those with outstanding talent and for those with learning difficulties. Herein arises the danger that the very ideal of fairness ironically transforms into a logic that legitimates individual disadvantage.",
      "Since the international scholastic survey PISA was launched in 2000, Japanese education policy has continued to be exposed to a new standard — the international scholastic ranking. The sharp drop in Japan's ranking in the 2003 survey intensified criticism of the so-called yutori education and served as the occasion to shift policy from reducing learning content to, conversely, increasing instructional hours. However, doubt remains as to whether such a policy reversal could essentially improve the quality of education. This is because excessive attachment to rankings causes one to lose sight of the original purpose of education.",
      "As a ground for justifying educational standardization, the securing of social equity is often cited. That is, the claim that the assurance of receiving equivalent education regardless of where or who one learns from is indispensable for correcting disparities between regions and between classes. This claim itself has validity. However, depriving teachers of discretion in the name of equity and strengthening managerial control that is not adapted to conditions on the ground risks inviting the adverse effect of exhausting the educational field. The textbook authorization system and the tightening of course of study guidelines are typical examples.",
      "The greatest sin of uniformity lies in the fact that the original purpose of education — the formation of the human being — is reduced to measurable academic ability. Indicators such as reading comprehension, mathematical literacy, and scientific素养 are effective for capturing a part of educational outcomes, but they cannot measure the qualities more important in human formation, such as moral judgment, aesthetic sensibility, and the capacity for empathy with others. When the illusion that only what is measurable has value spreads through the educational field, the educational experience that ought to be rich cannot help but be impoverished.",
      "Inoue Enryo, an educational philosopher of the Meiji period, located the purpose of education not in the mere injection of knowledge but in the formation of an independent personality. However, the modern Japanese education system, dragged by the demand for training personnel to support the industrialization and militarization of the state, could not fully realize this ideal. Postwar educational reform, too, was constructed under the constraints of the American occupation policy, so it is hard to call it a system design based on an original educational philosophy. Even today, the Japanese education system continues to harbor a divergence between ideal and reality.",
      "One direction for escaping the fetters of uniformity is to restore the professional autonomy of teachers and expand discretion in the field. The fact that the Finnish education system, despite abolishing detailed course guidelines, has continued to receive high international evaluation indicates the success or failure of a system design that trusts the quality and discretion of teachers. Of course, one should also note that no uniform solution exists. Completely abandoning standards risks inviting a different form of inequality. What matters is whether the practice of education can endure the endless endeavor of continuously maintaining a dynamic equilibrium between conflicting demands — standard and diversity, efficiency and individuality."
    ],
    questions: [
      {
        q: "What was the greatest purpose for which the modern state established the school system, according to the passage?",
        choices: ["To preserve traditional crafts", "To confer on the entire population knowledge and skill above a certain standard", "To train aristocrats for governance", "To promote religious instruction"],
        answerIndex: 1,
        explanation: "The passage states that the modern state established the school system in order to confer on the entire population a level of knowledge and skill above a certain standard (国民全体に一定水準以上の知識と技能を付与すること)."
      },
      {
        q: "What structural problem does standardized education inevitably cause?",
        choices: ["It produces too many gifted students", "It posits an 'average child' and pushes those who deviate to the periphery", "It eliminates all regional disparities automatically", "It makes teacher training unnecessary"],
        answerIndex: 1,
        explanation: "The passage states that standardized education posits a non-existent 'average child' as the assumed target and pushes children who deviate from that average to the periphery (「平均的な児童」という実在しない対象を念頭に置くことで、その平均から外れた子供たちを周辺へと追いやる)."
      },
      {
        q: "Why does the author say that the reversal from yutori education to more instructional hours may not have essentially improved education?",
        choices: ["Because instructional hours are irrelevant to learning", "Because excessive attachment to rankings causes one to lose sight of the original purpose of education", "Because PISA is an unreliable survey", "Because Japan's ranking was already the highest"],
        answerIndex: 1,
        explanation: "The passage states that excessive attachment to rankings (ランキングへの過度な執着) causes one to lose sight of the original purpose of education, so the policy reversal may not have essentially improved educational quality."
      },
      {
        q: "What does the passage identify as the greatest sin of educational uniformity?",
        choices: ["It produces too many specialists", "The formation of the human being is reduced to measurable academic ability", "It makes teachers too powerful", "It eliminates the need for textbooks"],
        answerIndex: 1,
        explanation: "The passage states that the greatest sin of uniformity is that the original purpose of education — human formation — is reduced to measurable academic ability (教育の本来の目的である「人間形成」が、測定可能な「学力」へと還元されてしまう)."
      },
      {
        q: "Which N1 grammar point appears in the phrase 「貧困化せざるを得ない」?",
        choices: ["〜に違いない", "〜ざるを得ない (cannot help but)", "〜にすぎない", "〜ずにはおかない"],
        answerIndex: 1,
        explanation: "The phrase 貧困化せざるを得ない uses 〜ざるを得ない to mean 'cannot help but become impoverished', a N1 grammar point expressing unavoidable outcome."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-15 — The hard problem of consciousness
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-15",
    title: "意識[いしき]の困難[こんなん]問題[もんだい]：脳[のう]科学[かがく]は主観[しゅかん]を説明[せつめい]できるか",
    titleReading: "いしきのこんなんもんだいのうかがくはしゅかんをせつめいできるか",
    level: "N1",
    summary: "An examination of the hard problem of consciousness as posed by David Chalmers — distinguishing the easy problems of cognitive function from the question of why subjective experience exists at all, surveying integrated information theory, global workspace theory, the history of the mind-body problem from Descartes forward, and the limits of reductive neuroscience in explaining qualia.",
    estMinutes: 13,
    tags: ["neuroscience", "consciousness", "Chalmers", "qualia", "hard problem", "philosophy of mind", "IIT"],
    body: [
      "意識[いしき]の問題[もんだい]は、哲学[てつがく]および認知[にんち]科学[かがく]において最[もっとも]も深遠[しんえん]な謎[なぞ]の一[ひと]つである。チャルマーズ[ちゃるまーず]は一九[いっきゅう]九五[きゅうご]年[ねん]の著書[ちょしょ]において、意識[いしき]に関[かん]する問題[もんだい]を「容易[ようい]な問題[もんだい]」と「困難[こんなん]な問題[もんだい]」に明確[めいかく]に区分[くぶん]した。容易[ようい]な問題[もんだい]とは、知覚[ちかく]、注意[ちゅうい]、記憶[きおく]、言語[げんご]報告[ほうこく]などの認知[にんち]機能[きのう]がどのように働[はたら]くかを説明[せつめい]することであり、原理[げんり]的[てき]には神経[しんけい]科学[かがく]の方法[ほうほう]論[ろん]によって解明[かいめい]可能[かのう]である。これに対[たい]し、困難[こんなん]な問題[もんだい]とは、「なぜこれらの認知[にんち]過程[かてい]に主観[しゅかん]的[てき]な経験[けいけん]が伴[ともな]われるのか」という問[と]いである。私[わたし]が赤[あか]いりんごを見[み]るとき、なぜ単[たん]なる波長[はちょう]の処理[しょり]ではなく「赤[あか]さ」の質[しつ]的[てき]な感覚[かんかく]が生[しょう]じるのか。これがクオリア[くおりあ]と呼[よ]ばれる主観[しゅかん]的[てき]体験[たいけん]の謎[なぞ]である。",
      "クオリア[くおりあ]の問題[もんだい]は、物理[ぶつり]的[てき]な還元[かんげん]主義[しゅぎ]に対[たい]する根本的[こんぽんてき]な挑戦[ちょうせん]を意味[いみ]する。仮[かり]に脳[のう]の全[すべ]ての神経[しんけい]細胞[さいぼう]の活動[かつどう]と結合[けつごう]が完全[かんぜん]に解明[かいめい]されたとしても、「なぜその物理[ぶつり]的[てき]な過程[かてい]が特定[とくてい]の主観[しゅかん]的[てき]体験[たいけん]を生[しょう]じさせるのか」という問[と]いは残[のこ]る。換言[かんげん]すれば、客観[きゃっかん]的[てき]な物理[ぶつり]記述[きじゅつ]と主観[しゅかん]的[てき]な体験[たいけん]との間[あいだ]には、説明[せつめい]の断絶[だんぜつ]が横[よこ]たわっている。この断絶[だんぜつ]は、物理[ぶつり]主義[しゅぎ]が宇宙[うちゅう]のすべてを物理[ぶつり]的[てき]な言葉[ことば]で記述[きじゅつ]できるという主張[しゅちょう]を根底[こんてい]から揺[ゆ]さぶるものである。",
      "デカルト[でかると]の心身[しんしん]二元[にげん]論[ろん]は、精神[せいしん]と物質[ぶっしつ]を異種[いしゅ]の実体[じったい]として設定[せってい]したが、この立場[たちば]は「精神[せいしん]と物質[ぶっしつ]がどのように相互作用[そうごうさよう]するのか」という問題[もんだい]を解決[かいけつ]できずにいる。近代[きんだい]の脳[のう]科学[かがく]は、二元[にげん]論[ろん]を排[はい]し、心[こころ]を脳[のう]の物理[ぶつり]的[てき]な活動[かつどう]から発生[はっせい]するものとして説明[せつめい]しようと試[こころ]みてきた。しかしながら、かかる還元[かんげん]的[てき]な説明[せつめい]がクオリア[くおりあ]の主観[しゅかん]的[てき]な質[しつ]を完全[かんぜん]に捕捉[ほそく]し得[う]るかについては、哲学者[てつがくしゃ]の間[あいだ]で激[はげ]しい論争[ろんそう]が続[つづ]いている。",
      "トノーニ[とのーに]が提唱[ていしょう]した統合[とうごう]情報[じょうほう]理論[りろん]は、意識[いしき]を情報[じょうほう]統合[とうごう]の度合[どあい]いであるとして数式[すうしき]的[てき]に定量化[ていりょうか]しようとする野心的[やしんてき]な試[こころ]みである。同[どう]理論[りろん]によれば、ある系[けい]が持[も]つ意識[いしき]の量[りょう]は、その系[けい]がどれほど多数[たすう]の状態[じょうたい]を区別[くべつ]可能[かのう]であり、かつそれらがどれほど統合[とうごう]されているかによって決定[けってい]される。しかしながら、この理論[りろん]は「情報[じょうほう]統合[とうごう]がなぜ主観[しゅかん]的[てき]体験[たいけん]を伴[ともな]うのか」という根本[こんぽん]的[てき]な問[と]いに対[たい]する答[こた]えを与[あた]えていないという批判[ひはん]を免[まぬか]れない。理論[りろん]が精緻[せいち]化[か]されればされるほど、その原点[げんてん]にある「存在[そんざい]の謎[なぞ]」がより鋭[するど]く浮[う]き彫[ぼ]りにされるという逆説[ぎゃくせつ]すら見[み]られる。",
      "もう一[ひと]つの有力[ゆうりょく]な仮説[かせつ]であるグローバル[ぐろーばる]ワークスペース[わーくすぺーす]理論[りろん]は、意識[いしき]を脳[のう]の複数[ふくすう]の領域[りょういき]間[かん]で情報[じょうほう]が共有[きょうゆう]される「作業場[さぎょうば]」として捉[とら]える。この理論[りろん]は、意識[いしき]が生[しょう]じるメカニズムを神経[しんけい]科学[かがく]的[てき]に説明[せつめい]する点[てん]で優[すぐ]れているが、やはり「なぜ情報[じょうほう]の共有[きょうゆう]が主観[しゅかん]的[てき]体験[たいけん]となるのか」という問[と]いには答[こた]えられない。重要[じゅうよう]なのは、これらの理論[りろん]が「容易[ようい]な問題[もんだい]」の解決[かいけつ]に貢献[こうけん]し得[う]るとしても、「困難[こんなん]な問題[もんだい]」の解決[かいけつ]には決定的[けっていてき]に不足[ふそく]しているという点[てん]である。",
      "量子[りょうし]力学[りきがく]との関連[かんれん]で意識[いしき]を論[ろん]じる試[こころ]みもある。ペンローズ[ぺんろーず]とハメロフ[はめろふ]は、脳[のう]内[ない]の微小[びしょう]管[かん]における量子[りょうし]過程[かてい]が意識[いしき]の源泉[げんせん]であると主張[しゅちょう]した。しかしながら、この仮説[かせつ]は実験[じっけん]的[てき]な証拠[しょうこ]に乏[とぼ]しく、主流[しゅりゅう]の神経[しんけい]科学[かがく]の枠組[わくぐ]みでは受容[じゅよう]されていない。それでも、量子[りょうし]論[ろん]的[てき]なアプローチ[あぷろーち]が根強[ねづよ]い支持[しじ]を集[あつ]め続[つづ]けるのは、古典[こてん]物理学[ぶつりがく]の枠組[わくぐ]みでは意識[いしき]の謎[なぞ]を解[と]けないという挫折[ざせつ]感[かん]が、科学者[かがくしゃ]の間[あいだ]に潜在[せんざい]しているからであろう。",
      "意識[いしき]の困難[こんなん]問題[もんだい]は、科学[かがく]そのものの限界[げんかい]を問[と]い直[なお]す契機[けいき]を与[あた]える。科学[かがく]は第三者[だいさんしゃ]的[てき]な客観[きゃっかん]記述[きじゅつ]において卓越[たくえつ]しているが、意識[いしき]の本質[ほんしつ]は第一者[だいいちしゃ]的[てき]な主観[しゅかん]体験[たいけん]にある。もしかすると、意識[いしき]を完全[かんぜん]に理解[りかい]するためには、科学[かがく]の方法論[ほうほうろん]そのものを拡張[かくちょう]するか、あるいは意識[いしき]を記述[きじゅつ]するための全[まった]く新[あたら]しい概念[がいねん]体系[たいけい]を構築[こうちく]することが必要[ひつよう]かもしれない。いずれにせよ、意識[いしき]の謎[なぞ]は人間[にんげん]の知性[ちせい]にとって最後[さいご]の砦[とりで]の一[ひと]つであり続[つづ]けるであろう。脳[のう]科学[かがく]がどれほど進歩[しんぽ]しようとも、「なぜ私[わたし]は私[わたし]として経験[けいけん]するのか」という根源的[こんげんてき]な問[と]いは、未来[みらい]の科学者[かがくしゃ]にも引[ひ]き継[つ]がれるべき遺産[いさん]として残[のこ]されている。"
    ],
    translation: [
      "The problem of consciousness is one of the most profound mysteries in philosophy and cognitive science. In his 1995 book, Chalmers clearly distinguished the problems concerning consciousness into the easy problems and the hard problem. The easy problems are those of explaining how cognitive functions such as perception, attention, memory, and linguistic report work, and are in principle solvable through the methodology of neuroscience. In contrast, the hard problem is the question of why subjective experience accompanies these cognitive processes. When I see a red apple, why does a qualitative sensation of redness arise rather than mere processing of wavelengths? This is the mystery of subjective experience called qualia.",
      "The problem of qualia constitutes a fundamental challenge to physical reductionism. Even if all the activities and connections of the brain's neurons were fully elucidated, the question of why that physical process gives rise to a particular subjective experience would remain. In other words, between objective physical description and subjective experience, there lies an explanatory gap. This gap fundamentally shakes the claim of physicalism that everything in the universe can be described in physical terms.",
      "Descartes's mind-body dualism posited mind and matter as substances of different kinds, but this position has been unable to solve the problem of how mind and matter interact. Modern neuroscience has excluded dualism and sought to explain the mind as something arising from the physical activity of the brain. However, intense debate continues among philosophers as to whether such reductive explanation can fully capture the subjective quality of qualia.",
      "The integrated information theory advocated by Tononi is an ambitious attempt to quantify consciousness mathematically, treating it as the degree of information integration. According to this theory, the quantity of consciousness a system possesses is determined by how many states the system can distinguish and how integrated those states are. However, the theory cannot escape the criticism that it does not answer the fundamental question of why information integration is accompanied by subjective experience. One even observes the paradox that the more refined the theory becomes, the more sharply the mystery of existence at its origin is brought into relief.",
      "Another influential hypothesis, the global workspace theory, treats consciousness as a 'workspace' in which information is shared among multiple regions of the brain. This theory excels in explaining neuroscientifically the mechanism by which consciousness arises, but again it cannot answer the question of why information sharing becomes subjective experience. What is important is that even if these theories can contribute to solving the easy problems, they are decisively insufficient for solving the hard problem.",
      "There are also attempts to discuss consciousness in relation to quantum mechanics. Penrose and Hameroff argued that quantum processes in microtubules within the brain are the source of consciousness. However, this hypothesis lacks experimental evidence and has not been accepted within the mainstream neuroscientific framework. Still, the fact that quantum-theoretical approaches continue to gather persistent support is presumably because a sense of frustration — that the mystery of consciousness cannot be solved within the framework of classical physics — lies latent among scientists.",
      "The hard problem of consciousness provides an occasion to re-question the limits of science itself. Science excels in third-person objective description, but the essence of consciousness lies in first-person subjective experience. Perhaps, in order to fully understand consciousness, it may be necessary to extend the methodology of science itself, or to construct an entirely new conceptual system for describing consciousness. In any case, the mystery of consciousness will continue to be one of the last strongholds for human intellect. However much neuroscience may advance, the fundamental question of why I experience as myself is left as an inheritance to be passed on to future scientists."
    ],
    questions: [
      {
        q: "How does Chalmers distinguish the easy problems from the hard problem of consciousness?",
        choices: ["The easy problems concern cognitive functions like perception and memory; the hard problem concerns why subjective experience accompanies cognitive processes", "The easy problems are about the brain; the hard problem is about the body", "The easy problems concern animals; the hard problem concerns humans", "The easy problems are philosophical; the hard problem is religious"],
        answerIndex: 0,
        explanation: "The passage states that the easy problems concern cognitive functions such as perception, attention, memory, and linguistic report, while the hard problem is the question of why subjective experience accompanies these cognitive processes (なぜこれらの認知過程に主観的な経験が伴われるのか)."
      },
      {
        q: "What does the problem of qualia fundamentally challenge, according to the passage?",
        choices: ["Quantum mechanics", "Physical reductionism / physicalism", "Religious doctrine", "Mathematical logic"],
        answerIndex: 1,
        explanation: "The passage states that the problem of qualia constitutes a fundamental challenge to physical reductionism (物理的な還元主義に対する根本的な挑戦を意味する) and shakes the claim of physicalism."
      },
      {
        q: "Why does the integrated information theory still face criticism despite its ambition?",
        choices: ["Because it ignores the brain entirely", "Because it does not answer why information integration is accompanied by subjective experience", "Because it relies on religious texts", "Because it cannot measure anything"],
        answerIndex: 1,
        explanation: "The passage states that the theory cannot escape the criticism that it does not answer the fundamental question of why information integration is accompanied by subjective experience (情報統合がなぜ主観的体験を伴うのかという根本的な問いに対する答えを与えていない)."
      },
      {
        q: "What paradox does the passage observe about theories of consciousness?",
        choices: ["That more refinement makes theories less useful", "That the more refined the theory becomes, the more sharply the mystery of existence at its origin is brought into relief", "That all theories converge on dualism", "That scientific progress has eliminated the mystery entirely"],
        answerIndex: 1,
        explanation: "The passage observes the paradox that the more refined the theory becomes, the more sharply the mystery of existence at its origin is brought into relief (理論が精緻化されればされるほど、その原点にある「存在の謎」がより鋭く浮き彫りにされるという逆説)."
      },
      {
        q: "What does the author conclude about the future of the consciousness problem?",
        choices: ["That neuroscience will solve it within a decade", "That the fundamental question of why I experience as myself remains as an inheritance for future scientists", "That consciousness is an illusion that will be dismissed", "That quantum mechanics has already solved it"],
        answerIndex: 1,
        explanation: "The final paragraph concludes that however much neuroscience advances, the fundamental question of why I experience as myself (なぜ私は私として経験するのか) remains as an inheritance to be passed on to future scientists."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-16 — Environmental ethics
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-16",
    title: "環境[かんきょう]倫理[りんり]学[がく]：人類[じんるい]中心[ちゅうしん]主義[しゅぎ]を超[こ]えて",
    titleReading: "かんきょうりんりがくじんるいちゅうしんしゅぎをこえて",
    level: "N1",
    summary: "A survey of environmental ethics that moves beyond anthropocentrism — tracing Leopold's land ethic, Arne Naess's deep ecology, Peter Singer's animal liberation, the problem of obligations to future generations, climate justice, and the Japanese concept of satoyama as a model for relational coexistence between humans and nature.",
    estMinutes: 12,
    tags: ["environmental ethics", "anthropocentrism", "deep ecology", "Leopold", "Singer", "satoyama", "climate justice"],
    body: [
      "環境[かんきょう]倫理[りんり]学[がく]という分野[ぶんや]が独立[どくりつ]した哲学[てつがく]的[てき]探究[たんきゅう]として確立[かくりつ]されたのは、一九[いっきゅう]七〇[ななじゅう]年代[ねんだい]以降[いこう]のことである。その背景[はいけい]には、産業[さんぎょう]化[か]の進展[しんてん]に伴[ともな]う環境[かんきょう]破壊[はかい]の激化[げきか]、公害[こうがい]問題[もんだい]の顕在化[けんざいか]、そして生態[せいたい]系[けい]の有限[ゆうげん]性[せい]に対[たい]する認識[にんしき]の深[ふか]まりがあった。従来[じゅうらい]の倫理[りんり]学[がく]が人間[にんげん]対[たい]人間[にんげん]の関係[かんけい]を対象[たいしょう]としてきたのに対[たい]し、環境[かんきょう]倫理[りんり]学[がく]は人間[にんげん]と自然[しぜん]との関係[かんけい]を新[あたら]たな倫理[りんり]的[てき]問[と]いとして提起[ていき]した。この問[と]いの核心[かくしん]は、「自然[しぜん]は人間[にんげん]のために存在[そんざい]するのか、それとも独自[どくじ]の価値[かち]を持[も]つのか」という点[てん]にある。",
      "人類[じんるい]中心[ちゅうしん]主義[しゅぎ]とは、人間[にんげん]の利益[りえき]のみが固有[こゆう]の価値[かち]を持[も]ち、自然[しぜん]は人間[にんげん]の利用[りよう]に供[そな]える手段[しゅだん]に過[す]ぎないという立場[たちば]である。かかる立場[たちば]は、近代[きんだい]西洋[せいよう]哲学[てつがく]に深[ふか]く根[ね]ざしており、とりわけベーコン[べーこん]の自然[しぜん]征服[せいふく]の理念[りねん]やデカルト[でかると]の主客[しゅかく]二元[にげん]論[ろん]にその典型[てんけい]を見[み]ることができる。しかしながら、この立場[たちば]が無制限[むせいげん]の資源[しげん]搾取[さくしゅ]と生態[せいたい]系[けい]破壊[はかい]を正当化[せいとうか]してきたという歴史[れきし]的事実[じじつ]は、今日[こんにち]深刻[しんこく]な反省[はんせい]の対象[たいしょう]となっている。",
      "レオポルド[れおぽーるど]は「土地[とち]倫理[りんり]」という概念[がいねん]を提示[ていじ]し、倫理[りんり]的[てき]共同[きょうどう]体[たい]の範囲[はんい]を人間[にんげん]のみならず土[つち]、水[みず]、植物[しょくぶつ]、動物[どうぶつ]にまで拡張[かくちょう]することを提唱[ていしょう]した。彼[かれ]によれば、ある行為[こうい]が生態[せいたい]系[けい]の完全[かんぜん]性[せい]、安定[あんてい]性[せい]、美[び]を保[たも]つ傾向[けいこう]にあるとき正[ただ]しく、反対[はんたい]のとき誤[あやま]りである、という基準[きじゅん]が倫理[りんり]的[てき]判断[はんだん]の規範[きはん]となるべきである。この立場[たちば]は、人間[にんげん]を生態[せいたい]系[けい]の一員[いちいん]として位置[いち]づけ直[なお]すことで、従来[じゅうらい]の主客[しゅかく]の位置[いち]を逆転[ぎゃくてん]させるものであった。",
      "ノルウェー[のるうぇー]の哲学者[てつがくしゃ]ネス[ねす]が提唱[ていしょう]した「深層[しんそう]生態[せいたい]学[がく]」は、人類[じんるい]中心[ちゅうしん]主義[しゅぎ]をより根本[こんぽん]から批判[ひはん]する立場[たちば]である。彼[かれ]は、あらゆる生命[せいめい]が固有[こゆう]の価値[かち]を持[も]つという「生態[せいたい]的[てき]平等[びょうどう]主義[しゅぎ]」を主張[しゅちょう]し、人間[にんげん]の生存[せいぞん]と必需[ひつじゅ]品[ひん]の充足[じゅうそく]を超[こ]える生物[せいぶつ]の搾取[さくしゅ]を否定[ひてい]した。深層[しんそう]生態[せいたい]学[がく]の立場[たちば]からすれば、環境[かんきょう]問題[もんだい]の根本[こんぽん]原因[げんいん]は単[たん]なる技術[ぎじゅつ]的[てき]な誤謬[ごびゅう]ではなく、人間[にんげん]が自然[しぜん]の上[うえ]に立[た]つ支配[しはい]者[しゃ]であるという根源的[こんげんてき]な錯覚[さっかく]にある。換言[かんげん]すれば、問題[もんだい]は認識[にんしき]論[ろん]的[てき]というよりも存在[そんざい]論[ろん]的[てき]な次元[じげん]に根[ね]ざしているのである。",
      "動物[どうぶつ]の権利[けんり]を擁護[ようご]する立場[たちば]からは、シンガー[しんがー]が「種差別[しゅさべつ]」という概念[がいねん]を提唱[ていしょう]した。彼[かれ]は、ある存在[そんざい]が人間[にんげん]であるという理由[りゆう]だけで特別[とくべつ]な道徳[どうとく]的[てき]配慮[はいりょ]を与[あた]えることは、人種[じんしゅ]差別[さべつ]や性別[せいべつ]差別[さべつ]と同様[どうよう]に不当[ふとう]な差別[さべつ]であると論[ろん]じた。重要[じゅうよう]なのは、利益[りえき]を感覚[かんかく]する能力[のうりょく]であり、生物学的[せいぶつがくてき]な種属[しゅぞく]ではない、というのがシンガー[しんがー]の主張[しゅちょう]の核心[かくしん]であった。しかしながら、この立場[たちば]に対[たい]しては、「人間[にんげん]の特別[とくべつ]な義務[ぎむ]を無視[むし]している」「実際[じっさい]的[てき]な政策[せいさく]への転化[てんか]が困難[こんなん]である」といった批判[ひはん]も寄[よ]せられている。",
      "未来[みらい]世代[せだい]に対[たい]する倫理[りんり]的[てき]義務[ぎむ]は、環境[かんきょう]倫理[りんり]学[がく]における特異[とくい]な難問[なんもん]である。現在[げんざい]生存[せいぞん]していない未来[みらい]の人々[ひとびと]に対[たい]して、現在[げんざい]の世代[せだい]はどのような義務[ぎむ]を負[お]うのか。気候[きこう]変動[へんどう]が将来[しょうらい]数[すう]世代[せだい]にわたる深刻[しんこく]な影響[えいきょう]をもたらすことが判明[はんめい]している以上[いじょう]、この問[と]いを回避[かいひ]することは許[ゆる]されない。しかしながら、将来[しょうらい]の不確実[ふかくじつ]性[せい]の下[もと]で現在[げんざい]の利益[りえき]をどれほど犠牲[ぎせい]にするかを決定[けってい]することは、単[たん]なる計算[けいさん]の問題[もんだい]ではなく、根本的[こんぽんてき]な価値[かち]判断[はんだん]を要[よう]する。",
      "日本[にほん]の里山[さとやま]という概念[がいねん]は、人間[にんげん]と自然[しぜん]の持続[じぞく]可能[かのう]な共生[きょうせい]を示[しめ]す興味深[きょうみぶか]い事例[じれい]を提供[ていきょう]する。里山[さとやま]は、人間[にんげん]が森林[しんりん]や草原[そうげん]を適度[てきど]に利用[りよう]することで維持[いじ]されてきた二次[にじ]的自然[しぜん]であり、人間[にんげん]の介入[かいにゅう]がかえって生物[せいぶつ]多様性[たようせい]を高[たか]めるという逆説[ぎゃくせつ]を示[しめ]している。ここには、自然[しぜん]を「保全[ほぜん]」するか「利用[りよう]」するかという二項[にこう]対立[たいりつ]を超[こ]えて、関係性[かんけいせい]のうちに環境[かんきょう]倫理[りんり]を見出[みいだ]すという日本[にほん]独自[どくじ]の可能性[かのうせい]が潜[ひそ]んでいる。環境[かんきょう]倫理[りんり]の未来[みらい]は、かかる関係論的[かんけいろんてき]な視座[しざ]を普遍的[ふへんてき]な原理[げんり]へと高[たか]めることができるか否[いな]かにかかっていると言[い]えよう。"
    ],
    translation: [
      "It was only from the 1970s onward that environmental ethics was established as an independent philosophical inquiry. In its background lay the intensifying environmental destruction accompanying industrial development, the emergence of pollution problems, and the deepening recognition of the finitude of ecosystems. While traditional ethics had taken as its object relations between human beings, environmental ethics posed the relation between humans and nature as a new ethical question. At the core of this question lies the point: does nature exist for the sake of humans, or does it possess value of its own?",
      "Anthropocentrism is the position that only human interests possess intrinsic value, and that nature is nothing but a means provided for human use. This position is deeply rooted in modern Western philosophy, and its typical form can be seen especially in Bacon's ideal of conquering nature and Descartes's subject-object dualism. However, the historical fact that this position has legitimated unlimited resource extraction and ecosystem destruction is today the object of serious reflection.",
      "Leopold presented the concept of the land ethic and advocated expanding the scope of the ethical community to include not only humans but soil, water, plants, and animals. According to him, the criterion that should become the norm of ethical judgment is that an act is right when it tends to preserve the integrity, stability, and beauty of the ecosystem, and wrong when it tends otherwise. This position reversed the traditional positions of subject and object by repositioning humans as members of the ecosystem.",
      "The deep ecology advocated by the Norwegian philosopher Naess is a position that more fundamentally criticizes anthropocentrism. He asserted ecological egalitarianism — that all life possesses intrinsic value — and denied the exploitation of organisms beyond what is necessary for human survival and the satisfaction of basic needs. From the standpoint of deep ecology, the fundamental cause of environmental problems lies not in mere technical error but in the fundamental illusion that humans stand above nature as rulers. In other words, the problem is rooted not in the epistemological but in the ontological dimension.",
      "From the standpoint of defending animal rights, Singer proposed the concept of speciesism. He argued that giving special moral consideration to a being merely because it is human is unjust discrimination, analogous to racism or sexism. The core of Singer's claim was that what matters is the capacity to sense interests, not biological species membership. However, this position too has been criticized for ignoring the special obligations of humans and for the difficulty of translating it into actual policy.",
      "The ethical obligation to future generations is a peculiar难题 in environmental ethics. What obligation does the present generation bear toward people of the future who are not now living? Given that climate change is known to bring grave consequences across several future generations, this question cannot be evaded. However, deciding how much present benefit to sacrifice under future uncertainty is not a mere matter of calculation but requires a fundamental value judgment.",
      "The Japanese concept of satoyama offers an interesting case illustrating sustainable coexistence between humans and nature. Satoyama is a secondary nature maintained through humans' moderate use of forests and grasslands, and it exhibits the paradox that human intervention can rather enhance biodiversity. Herein lies a possibility distinctive to Japan — finding environmental ethics within relationality, beyond the binary opposition of whether to preserve or to use nature. One may say that the future of environmental ethics hinges on whether such a relational perspective can be elevated into a universal principle."
    ],
    questions: [
      {
        q: "What is at the core of the question posed by environmental ethics, as stated in the first paragraph?",
        choices: ["Whether humans can conquer nature through technology", "Whether nature exists for the sake of humans or possesses intrinsic value of its own", "Whether animals can reason", "Whether pollution can be eliminated entirely"],
        answerIndex: 1,
        explanation: "The passage states that the core of the question posed by environmental ethics is whether nature exists for the sake of humans or possesses value of its own (自然は人間のために存在するのか、それとも独自の価値を持つのか)."
      },
      {
        q: "According to Leopold's land ethic, what is the criterion for ethical judgment?",
        choices: ["Whether an act maximizes human profit", "Whether an act tends to preserve the integrity, stability, and beauty of the ecosystem", "Whether an act is permitted by law", "Whether an act conforms to religious doctrine"],
        answerIndex: 1,
        explanation: "The passage states that for Leopold, an act is right when it tends to preserve the integrity, stability, and beauty of the ecosystem, and wrong when it tends otherwise (生態系の完全性、安定性、美を保つ傾向にあるとき正しく、反対のとき誤りである)."
      },
      {
        q: "How does the passage characterize the difference between deep ecology's critique and a mere technical critique of environmental problems?",
        choices: ["Deep ecology focuses only on technology", "Deep ecology locates the problem in the ontological dimension, not merely the epistemological", "Deep ecology denies all human activity", "Deep ecology prioritizes economics over philosophy"],
        answerIndex: 1,
        explanation: "The passage states that for deep ecology, the fundamental cause of environmental problems lies in the ontological dimension — the illusion that humans stand above nature as rulers — not in mere technical (epistemological) error (問題は認識論的というよりも存在論的な次元に根ざしている)."
      },
      {
        q: "What does Singer's concept of speciesism argue, according to the passage?",
        choices: ["That humans have no obligations to animals", "That giving special moral consideration to a being merely because it is human is unjust discrimination, analogous to racism or sexism", "That all species are biologically equal", "That only mammals deserve moral consideration"],
        answerIndex: 1,
        explanation: "The passage states that Singer argued giving special moral consideration to a being merely because it is human is unjust discrimination, analogous to racism or sexism (人種差別や性別差別と同様に不当な差別であると論じた)."
      },
      {
        q: "What paradox does the Japanese concept of satoyama illustrate, according to the passage?",
        choices: ["That complete preservation always maximizes biodiversity", "That human intervention can rather enhance biodiversity in a secondary nature", "That agriculture inevitably destroys ecosystems", "That technology has no role in conservation"],
        answerIndex: 1,
        explanation: "The passage states that satoyama is a secondary nature maintained through humans' moderate use of forests and grasslands, exhibiting the paradox that human intervention can rather enhance biodiversity (人間の介入がかえって生物多様性を高めるという逆説)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-17 — History of Japanese cinema
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-17",
    title: "日本[にほん]映画[えいが]史[し]：独自[どくじ]の映像[えいぞう]言語[げんご]を紡[つむ]いだ系譜[けいふ]",
    titleReading: "にほんえいがしどくじのえいぞうげんごをつむいだけいふ",
    level: "N1",
    summary: "A history of Japanese cinema from its 1890s inception through the pure film movement, the golden age of Ozu, Mizoguchi, and Kurosawa, the studio system, the new wave of Oshima and Imamura, the rise of anime, and the contemporary international ascendancy of Japanese animation — with attention to the distinctive screen aesthetic of frontality and the benshi tradition.",
    estMinutes: 12,
    tags: ["Japanese cinema", "Ozu", "Kurosawa", "Mizoguchi", "New Wave", "anime", "benshi"],
    body: [
      "映画[えいが]という芸術[げいじゅつ]は、十九[じゅうきゅう]世紀[せいき]末[まつ]に西洋[せいよう]から日本[にほん]に伝来[でんらい]した当時[とうじ]、新奇[しんき]な見世物[みせもの]として受容[じゅよう]された。一八九六[せんはっぴゃくきゅうじゅうろく]年[ねん]に神戸[こうべ]で最初[さいしょ]の上映[じょうえい]が行[おこな]われ、翌年[よくねん]には早[はや]くも国産[こくさん]映画[えいが]の撮影[さつえい]が開始[かいし]された。初期[しょき]の日本[にほん]映画[えいが]は、歌舞伎[かぶき]や新派[しんぱ]芝居[しばい]の枠組[わくぐ]みに依存[いぞん]しており、独自[どくじ]の映像[えいぞう]言語[げんご]の獲得[かくとく]には至[いた]っていなかった。しかしながら、この時期[じき]に確立[かくりつ]された活動弁士[かつどうべんし]（弁士[べんし]）の制度[せいど]は、日本[にほん]映画[えいが]史[し]における特異[とくい]な現象[げんしょう]であった。弁士[べんし]とは、無声[むせい]映画[えいが]の上映[じょうえい]に伴[ともな]って物語[ものがたり]を語[かた]る語[かた]り手[て]であり、その存在[そんざい]は日本[にほん]の映画[えいが]受容[じゅよう]の独自性[どくじせい]を象徴[しょうちょう]している。",
      "一九[いっきゅう]一〇[いちじゅう]年代[ねんだい]以降[いこう]、純映画劇運動[じゅんえいがげきうんどう]と呼[よ]される改革[かいかく]運動[うんどう]が興[お]こり、日本[にほん]映画[えいが]は歌舞伎[かぶき]の影響[えいきょう]から脱却[だっきゃく]し、独自[どくじ]の映像[えいぞう]文法[ぶんぽう]の確立[かくりつ]を目指[めざ]した。小山[こやま]内薰[ないくん]や帰山[きやま]教雄[きょうゆう]らが提唱[ていしょう]したこの運動[うんどう]は、舞台[ぶたい]的[てき]な演出[えんしゅつ]を排[はい]し、フィルム[ふぃるむ]の特性[とくせい]に即[そく]した表現[ひょうげん]を追求[ついきゅう]した。一方[いっぽう]、同時[どうじ]期[き]に確立[かくりつ]された女優[じょゆう]の登用[とうよう]は、それまで女役[おんなやく]を男優[だんゆう]が演[えん]じていた習慣[しゅうかん]を打破[だは]するものであった。かくして、日本[にほん]映画[えいが]は近代[きんだい]的[てき]な映画[えいが]芸術[げいじゅつ]としての第一歩[だいいっぽ]を踏[ふ]み出[だ]したのである。",
      "一九[いっきゅう]五〇[ごじゅう]年代[ねんだい]は日本[にほん]映画[えいが]の黄金[おうごん]時代[じだい]と呼[よ]ばれる。小津[おづ]安二郎[やすじろう]は「畳[たたみ]の目[め]」と呼[よ]ばれるローアングル[ろーあんぐる]の固定[こてい]撮影[さつえい]によって、日本[にほん]の家族[かぞく]の解体[かいたい]を静謐[せいひつ]な画面[がめん]のうちに捉[とら]えた。溝口[みぞぐち]健二[けんじ]はワンシーン[わんしーん]ワンカット[わんかっと]の長回[ながまわ]しによって、時空[じくう]を連続的[れんぞくてき]に描[えが]き出[だ]す独自[どくじ]の美学[びがく]を確立[かくりつ]した。黒沢[くろさわ]明[あきら]は『羅生門[らしょうもん]』『七人の侍[しちにんのさむらい]』において動的[どうてき]な映像[えいぞう]と国際的[こくさいてき]な主題[しゅだい]を結合[けつごう]し、日本[にほん]映画[えいが]を世界[せかい]の檜舞台[ひぶたい]へと押[お]し上[あ]げた。この三人[さんにん]の巨匠[きょしょう]が示[しめ]した映像[えいぞう]言語[げんご]の多様性[たようせい]は、日本[にほん]映画[えいが]が単[たん]なる西洋[せいよう]の模倣[もほう]ではないことを証明[しょうめい]した。",
      "黄金[おうごん]時代[じだい]を支[ささ]えたのは、松竹[しょうちく]、東宝[とうほう]、大映[だいえい]、東映[とうえい]、日活[にっかつ]という五[いつ]つの主要[しゅよう]スタジオ[すたじお]による製作[せいさく]体制[たいせい]であった。各[かく]スタジオ[すたじお]は固有[こゆう]のジャンル[じゃんる]と俳優[はいゆう]陣[じん]を抱[かか]え、垂直[すいちょく]的[てき]な統合[とうごう]によって製作[せいさく]から配給[はいきゅう]までを一貫[いっかん]して支配[しはい]していた。かかる体制[たいせい]は、安定[あんてい]した製作[せいさく]環境[かんきょう]を保証[ほしょう]した反面[はんめん]、新[あたら]しい才能[さいのう]の参入[さんにゅう]を阻害[そがい]する閉鎖[へいさ]的[てき]な側面[そくめん]も持[も]っていた。一九[いっきゅう]六〇[ろくじゅう]年代[ねんだい]に入[はい]り、テレビ[てれび]の普及[ふきゅう]による観客[かんきゃく]の減少[げんしょう]が顕著[けんちょ]になると、スタジオ[すたじお]体制[たいせい]は深刻[しんこく]な危機[きき]に直面[ちょくめん]することとなった。",
      "この危機[きき]の只中[ただなか]から生[しょう]まれたのが、日本[にほん]ニューウェーブ[にゅーうぇーぶ]と呼[よ]れる運動[うんどう]であった。大島[おおしま]渚[なぎさ]、今村[いまむら]昌平[しょうへい]、篠田[しのだ]正浩[まさひろ]らは、スタジオ[すたじお]体制[たいせい]の外[ほか]で政治[せいじ]的[てき]、性的[せいてき]、社会的[しゃかいてき]タブー[たぶー]に挑[いど]む映像[えいぞう]表現[ひょうげん]を展開[てんかい]した。大島[おおしま]の『青春[せいしゅん]残酷[ざんこく]物語[ものがたり]』や『絞首[こうしゅ]刑[けい]』は、従来[じゅうらい]の日本[にほん]映画[えいが]が回避[かいひ]し続[つづ]けてきた主題[しゅだい]に正面[しょうめん]から向[む]き合[あ]った。しかしながら、ニューウェーブ[にゅーうぇーぶ]の冒険[ぼうけん]は商業[しょうぎょう]的[てき]な成功[せいこう]には結[むす]びつかず、日本[にほん]映画[えいが]産業[さんぎょう]全体[ぜんたい]の衰退[すいたい]を食[く]い止[と]めるまでには至[いた]らなかった。",
      "一九[いっきゅう]八〇[はちじゅう]年代[ねんだい]以降[いこう]、日本[にほん]映画[えいが]の最[もっとも]も顕著[けんちょ]な発展[はってん]は、アニメーション[あにめーしょん]分野[ぶんや]において現[あらわ]れた。宮崎[みやざき]駿[はやお]の『風[かぜ]の谷[たに]のナウシカ[なうしか]』から『千[せん]と千尋[ちひろ]の神隠[かみかく]し』に至[いた]る作品[さくひん]群[ぐん]は、独自[どくじ]の映像[えいぞう]美学[びがく]と普遍的[ふへんてき]な主題[しゅだい]によって、世界中[せかいじゅう]の観客[かんきゃく]を魅了[みりょう]した。押井[おしい]守[まもる]、庵野[いやの]秀明[ひであき]らも、哲学[てつがく]的[てき]な深[ふか]みを持[も]つ作品[さくひん]によって、アニメ[あにめ]を単[たん]なる子供[こども]向[む]けの娯楽[ごらく]から高度[こうど]な映像[えいぞう]芸術[げいじゅつ]へと押[お]し上[あ]げた。かくして、実写[じっさ]映画[えいが]の国際的[こくさいてき]な地位[ちい]低下[ていか]とは対照的[たいしょうてき]に、日本[にほん]のアニメーション[あにめーしょん]は世界的[せかいてき]な影響力[えいきょうりょく]を持[も]つ文化[ぶんか]産業[さんぎょう]へと成長[せいちょう]した。",
      "現代[げんだい]の日本[にほん]映画[えいが]は、実写[じっさ]とアニメーション[あにめーしょん]の双方[そうほう]において、多様[たよう]化[か]と分散[ぶんさん]の時代[じだい]を迎[むか]えている。是枝[これえだ]裕和[ひろかず]や濱口[はまぐち]竜介[りゅうすけ]らの国際的[こくさいてき]評価[ひょうか]は、日本[にほん]の実写[じっさ]映画[えいが]がなお創造[そうぞう]的[てき]な活力[かつりょく]を保持[ほじ]していることを示[しめ]している。しかしながら、同時[どうじ]に、配給[はいきゅう]体制[たいせい]の変容[へんよう]、観客[かんきゃく]の高齢[こうれい]化[か]、制作[せいさく]費[ひ]の縮小[しゅくしょう]といった構造的[こうぞうてき]な課題[かだい]にも直面[ちょくめん]している。日本[にほん]映画[えいが]が将来[しょうらい]にわたり独自[どくじ]の映像[えいぞう]言語[げんご]を紡[つむ]ぎ続[つづ]けることができるか否[いな]かは、次[じ]世代[せだい]の映像[えいぞう]作家[さっか]が、伝統[でんとう]と革新[かくしん]の間[あいだ]にいかなる均衡[きんこう]を見出[みいだ]し得[う]るかにかかっているであろう。"
    ],
    translation: [
      "When the art of cinema was transmitted from the West to Japan at the end of the nineteenth century, it was received as a novel spectacle. The first screening took place in Kobe in 1896, and by the following year the filming of domestic cinema had already begun. Early Japanese cinema depended on the framework of kabuki and shinpa theater, and had not yet attained its own cinematic language. However, the system of katsudo benshi (benshi) established in this period was a peculiar phenomenon in the history of Japanese cinema. The benshi was a narrator who told the story accompanying the screening of silent films, and the existence of such a figure symbolizes the distinctiveness of Japan's reception of cinema.",
      "From the 1910s onward, a reform movement called the Pure Film Movement arose, and Japanese cinema aimed to escape the influence of kabuki and establish its own cinematic grammar. This movement, advocated by Inoue Kamo and Kiyama Shigeyasu, excluded theatrical staging and pursued expression adapted to the properties of film. Meanwhile, the introduction of actresses established in the same period broke the custom in which male actors had played female roles. Thus Japanese cinema took its first step as a modern cinematic art.",
      "The 1950s are called the golden age of Japanese cinema. Ozu Yasujiro, with the low-angle fixed shooting called 'tatami-level perspective,' captured the dissolution of the Japanese family within tranquil images. Mizoguchi Kenji established a distinctive aesthetics that depicted space-time continuously through long takes of one scene one cut. Kurosawa Akira, in Rashomon and Seven Samurai, combined dynamic imagery with international themes, lifting Japanese cinema onto the world stage. The diversity of cinematic language demonstrated by these three masters proved that Japanese cinema was no mere imitation of the West.",
      "Supporting the golden age was the production system of the five major studios — Shochiku, Toho, Daiei, Toei, and Nikkatsu. Each studio harbored its own genres and rosters of actors, and through vertical integration controlled everything from production to distribution. While this system guaranteed a stable production environment, it also possessed a closed aspect that hindered the entry of new talent. Entering the 1960s, as the decline of audiences due to the spread of television became pronounced, the studio system confronted a serious crisis.",
      "What emerged from the very midst of this crisis was the movement called the Japanese New Wave. Oshima Nagisa, Imamura Shohei, and Shinoda Masahiro developed cinematic expression that challenged political, sexual, and social taboos outside the studio system. Oshima's Cruel Story of Youth and Death by Hanging confronted head-on themes that Japanese cinema had continued to evade. However, the adventures of the New Wave did not lead to commercial success, and they did not suffice to halt the decline of the Japanese film industry as a whole.",
      "From the 1980s onward, the most conspicuous development of Japanese cinema appeared in the field of animation. The works of Miyazaki Hayao, from Nausicaa of the Valley of the Wind to Spirited Away, captivated audiences throughout the world with their distinctive cinematic aesthetics and universal themes. Oshii Mamoru and Anno Hideaki also elevated anime from mere entertainment for children into a highly sophisticated cinematic art through works of philosophical depth. Thus, in contrast to the decline of the international standing of live-action cinema, Japanese animation grew into a cultural industry with global influence.",
      "Contemporary Japanese cinema has entered an era of diversification and dispersion in both live-action and animation. The international acclaim of Koreeda Hirokazu and Hamaguchi Ryusuke indicates that Japanese live-action cinema still retains creative vitality. At the same time, however, it confronts structural challenges such as the transformation of the distribution system, the aging of audiences, and the shrinking of production budgets. Whether Japanese cinema can continue to spin its distinctive cinematic language into the future depends on what equilibrium the next generation of filmmakers can find between tradition and innovation."
    ],
    questions: [
      {
        q: "What does the existence of the benshi symbolize in the history of Japanese cinema?",
        choices: ["Japan's resistance to cinema", "The distinctiveness of Japan's reception of cinema", "The backwardness of Japanese technology", "The dominance of kabuki over film"],
        answerIndex: 1,
        explanation: "The passage states that the benshi, a narrator who told the story accompanying silent film screenings, symbolizes the distinctiveness of Japan's reception of cinema (その存在は日本の映画受容の独自性を象徴している)."
      },
      {
        q: "What did the Pure Film Movement aim to achieve?",
        choices: ["To strengthen the influence of kabuki on cinema", "To escape the influence of kabuki and establish a distinctive cinematic grammar", "To eliminate actors entirely", "To return to the benshi tradition"],
        answerIndex: 1,
        explanation: "The passage states that the Pure Film Movement aimed for Japanese cinema to escape the influence of kabuki and establish its own cinematic grammar (歌舞伎の影響から脱却し、独自の映像文法の確立を目指した)."
      },
      {
        q: "What distinctive technique is associated with Ozu Yasujiro, according to the passage?",
        choices: ["One scene one cut long takes", "The low-angle fixed shooting called the tatami-level perspective", "Rapid montage editing", "Handheld camera movement"],
        answerIndex: 1,
        explanation: "The passage associates Ozu with the low-angle fixed shooting called the tatami-level perspective (畳の目と呼ばれるローアングルの固定撮影) used to capture the dissolution of the Japanese family."
      },
      {
        q: "What structural challenges does contemporary Japanese cinema face, according to the passage?",
        choices: ["The disappearance of all studios and the end of anime", "The transformation of the distribution system, aging of audiences, and shrinking of production budgets", "The complete dominance of Hollywood", "The abandonment of all traditional genres"],
        answerIndex: 1,
        explanation: "The passage states that contemporary Japanese cinema confronts structural challenges such as the transformation of the distribution system, the aging of audiences, and the shrinking of production budgets (配給体制の変容、観客の高齢化、制作費の縮小といった構造的な課題)."
      },
      {
        q: "What does the author conclude will determine whether Japanese cinema can continue to spin its distinctive cinematic language?",
        choices: ["Government subsidies alone", "What equilibrium the next generation of filmmakers can find between tradition and innovation", "Hollywood's approval", "The number of theaters nationwide"],
        answerIndex: 1,
        explanation: "The final paragraph concludes that whether Japanese cinema can continue to spin its distinctive cinematic language depends on what equilibrium the next generation of filmmakers can find between tradition and innovation (伝統と革新の間にいかなる均衡を見出し得るかにかかっている)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-18 — Japan's lost decades
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-18",
    title: "失[うしな]われた二[に]十[じゅう]年[ねん]：長期[ちょうき]停滞[ていたい]の構造[こうぞう]的[てき]要因[よういん]",
    titleReading: "うしなわれたにじゅうねんちょうきていたいのこうぞうてきよういん",
    level: "N1",
    summary: "An economic analysis of Japan's lost decades after the 1990 bubble collapse — examining Richard Koo's balance sheet recession theory, demographic decline, deflation spiral, repeated policy failures, the emergence of the lost generation of irregular workers, and the structural limitations of Abenomics in overcoming entrenched stagnation.",
    estMinutes: 13,
    tags: ["economics", "lost decades", "balance sheet recession", "deflation", "Abenomics", "demographic decline", "Richard Koo"],
    body: [
      "一九[いっきゅう]九〇[きゅうじゅう]年[ねん]初頭[しょとう]にバブル経済[けいざい]が崩壊[ほうかい]して以降[いこう]、日本[にほん]経済[けいざい]は長期[ちょうき]にわたる停滞[ていたい]に陥[おちい]った。この時期[じき]はしばしば「失[うしな]われた二[に]十[じゅう]年[ねん]」と呼[よ]ばれ、日本[にほん]がかつて誇[ほこ]った高度[こうど]経済[けいざい]成長[せいちょう]の遺産[いさん]を急速[きゅうそく]に浪費[ろうひ]していった期間[きかん]であった。株価[かぶか]と地価[ちか]の暴落[ぼうらく]は、企業[きぎょう]と家計[かけい]のバランスシート[ばらんすすーと]に深刻[しんこく]な傷跡[きずあと]を残[のこ]し、その後[ご]の経済[けいざい]行動[こうどう]を根本[こんぽん]から変容[へんよう]させることとなった。かかる長期[ちょうき]停滞[ていたい]の原因[げんいん]を理解[りかい]することは、単[たん]なる過去[かこ]の回顧[かいこ]ではなく、将来[しょうらい]の経済[けいざい]政策[せいさく]の教訓[きょうくん]として不可欠[ふかけつ]である。",
      "経済[けいざい]学者[がくしゃ]のリチャード[りちゃーど]・クー[くー]は、日本[にほん]の長期[ちょうき]停滞[ていたい]を「バランスシート[ばらんすすーと]不況[ふきょう]」という概念[がいねん]で説明[せつめい]した。彼[かれ]によれば、バブル崩壊[ほうかい]後[ご]、企業[きぎょう]と家計[かけい]は資産[しさん]価値[かち]の毀損[きそん]によって債務[さいむ]過剰[かじょう]状態[じょうたい]に陥[おちい]り、利潤[りじゅん]の最大化[さいだいか]ではなく債務[さいむ]の最小化[さいしょうか]を行動[こうどう]原理[げんり]とするようになった。つまり、企業[きぎょう]は低金利[ていきんり]にもかかわらず借入[かりいれ]を行[おこな]わず、逆[ぎゃく]に借金[しゃっきん]の返済[へんさい]に専念[せんねん]した。かかる経済[けいざい]主体[しゅたい]の行動[こうどう]は、伝統的[でんとうてき]な金融[きんゆう]政策[せいさく]の効果[こうか]を著[いちじる]しく減殺[げんさつ]することとなった。金利[きんり]をいくら下[さ]げても借入[かりいれ]が増[ふ]えなければ、貨幣[かへい]供給[きょうきゅう]は拡大[かくだい]しないからである。",
      "長期[ちょうき]停滞[ていたい]を深化[しんか]させた第二[だいに]の要因[よういん]は、デフレ[でふれ]定着[ていちゃく]である。物価[ぶっか]の持続的[じぞくてき]な下落[げらく]は、実質[じっしつ]債務[さいむ]負担[ふたん]を増加[ぞうか]させ、消費[しょうひ]と投資[とうし]を先送[さきおく]りするインセンティブ[いんせんてぃぶ]を生[しょう]じさせた。消費者[しょうひしゃ]は「明日[あした]の方[ほう]が安[やす]く買[か]える」と予期[よき]して消費[しょうひ]を延期[えんき]し、企業[きぎょう]は売上[うりあげ]の減少[げんしょう]を見越[みこ]して投資[とうし]を控[ひか]える。かかる予期[よき]が自己[じこ]実現的[じつげんてき]に強化[きょうか]されることで、デフレ[でふれ]・不況[ふきょう]の悪循環[あくじゅんかん]が形成[けいせい]された。日本[にほん]銀行[ぎんこう]が物価[ぶっか]安定[あんてい]目標[もくひょう]の設定[せってい]に消極的[しょうきょくてき]であったことも、デフレ[でふれ]期待[きたい]の収束[しゅうそく]を遅[おく]らせる一因[いちいん]となった。",
      "第三[だいさん]の要因[よういん]は、人口[じんこう]動態[どうたい]の変化[へんか]である。日本[にほん]は世界[せかい]で最[もっとも]も早[はや]く少子[しょうし]高齢化[こうれいか]に直面[ちょくめん]した国[くに]であり、生産[せいさん]年齢[ねんれい]人口[じんこう]の減少[げんしょう]は潜在[せんざい]成長率[せいちょうりつ]の低下[ていか]を不可避[ふかひ]にした。人口[じんこう]減少[げんしょう]は、国内[こくない]市場[しじょう]の縮小[しゅくしょう]、住宅[じゅうたく]需要[じゅよう]の減少[げんしょう]、社会保障[しゃかいほしょう]費[ひ]の増大[ぞうだい]という多[おお]くの経済[けいざい]的[てき]課題[かだい]を同時[どうじ]にもたらした。とりわけ社会保障[しゃかいほしょう]制度[せいど]の維持[いじ]は、現役[げんえき]世代[せだい]の負担[ふたん]を増大[ぞうだい]させ、消費[しょうひ]と投資[とうし]を抑制[よくせい]する要因[よういん]となった。かかる人口[じんこう]的[てき]制約[せいやく]の下[もと]では、マクロ経済[けいざい]政策[せいさく]のみで停滞[ていたい]を克服[こくふく]することは不可能[ふかのう]に近[ちか]い。",
      "一九[いっきゅう]九〇[きゅうじゅう]年代[ねんだい]後半[こうはん]以降[いこう]、日本[にほん]の若者[わかもの]世代[せだい]は「就職[しゅうしょく]氷河期[ひょうがき]」という過酷[かこく]な労働[ろうどう]市場[しじょう]環境[かんきょう]に晒[さら]された。企業[きぎょう]は正規[せいき]雇用[こよう]の抑制[よくせい]に転[てん]じ、非正規[ひせいき]雇用[こよう]の比率[ひりつ]を急増[きゅうぞう]させた。この時期[じき]に安定[あんてい]した職業[しょくぎょう]を獲得[かくとく]できなかった世代[せだい]は、後[のち]に「ロスジェネ世代[せだい]（失[うしな]われた世代[せだい]）」と呼[よ]ばれることとなる。一度[いちど]非正規[ひせいき]雇用[こよう]に組[く]み込[こ]まれた者[もの]は、その後[ご]も正規[せいき]雇用[こよう]へ移行[いこう]することが困難[こんなん]であり、生涯[しょうがい]所得[しょとく]の減少[げんしょう]と社会保障[しゃかいほしょう]の不十分[ふじゅうぶん]さという二重[にじゅう]の苦難[くなん]に直面[ちょくめん]した。かかる状況[じょうきょう]は、単[たん]なる経済[けいざい]的[てき]問題[もんだい]を超[こ]えて、社会[しゃかい]的[てき]階層[かいそう]の固定[こてい]化[か]という深刻[しんこく]な事態[じたい]を招[まね]いた。",
      "二〇一二[にせんじゅうに]年[ねん]に発足[ほっそく]した第二次[だいにじ]安倍[あべ]政権[せいけん]は、「アベノミクス[あべのみくす]」と称[しょう]する経済[けいざい]政策[せいさく]を打[う]ち出[だ]し、三[さん]本[ぼん]の矢[や]——大規模[だいきぼ]な金融[きんゆう]緩和[かんわ]、機動的[きどうてき]な財政[ざいせい]出動[しゅつどう]、そして構造[こうぞう]改革[かいかく]——によって停滞[ていたい]脱却[だっきゃく]を図[はか]った。黒田[くろだ]東彦[はるひこ]日銀[にちぎん]総裁[そうさい]の下[もと]で実施[じっし]された異次元[いじげん]の金融[きんゆう]緩和[かんわ]は、円[えん]安[やす]と株高[かぶだか]をもたらしたものの、実体[じったい]経済[けいざい]への波及[はけい]効果[こうか]は限定的[げんていてき]であった。賃金[ちんぎん]上昇[じょうしょう]が物価[ぶっか]上昇[じょうしょう]に追[お]いつかず、実質[じっしつ]賃金[ちんぎん]は低迷[ていめい]し続[つづ]けた。構造[こうぞう]改革[かいかく]も、既得[きとく]権益[けんえき]の抵抗[ていこう]に阻[はば]まれ、本来[ほんらい]の目的[もくてき]を十全[じゅうぜん]に達成[たっせい]するには至[いた]らなかった。",
      "失[うしな]われた二[に]十[じゅう]年[ねん]の最大[さいだい]の教訓[きょうくん]は、経済[けいざい]政策[せいさく]が現実[げんじつ]の構造[こうぞう]的[てき]条件[じょうけん]を無視[むし]して教科書[きょうかしょ]的[てき]な処方箋[しょほうせん]に依存[いぞん]したとき、いかに無力[むりょく]になり得[う]るかという点[てん]にある。バランスシート[ばらんすすーと]の修復[しゅうふく]、デフレ[でふれ]期待[きたい]の転換[てんかん]、人口[じんこう]動態[どうたい]への対応[たいおう]、そして雇用[こよう]構造[こうぞう]の改革[かいかく]という多[おお]くの課題[かだい]は、単[たん]一[いつ]の政策[せいさく]手段[しゅだん]では解決[かいけつ]し得[え]ない。これらは相互[そうご]に絡[から]み合[あ]う構造[こうぞう]的[てき]問題[もんだい]であり、長期[ちょうき]的[てき]な視野[しや]と一貫[いっかん]性[せい]を持[も]った政策[せいさく]設計[せっけい]を要請[ようせい]する。日本[にほん]の経験[けいけん]は、他[た]国[くに]にとって示唆[しさ]に富[と]む反面教師[はんめんきょうし]として、今後[こんご]も参照[さんしょう]され続[つづ]けるであろう。"
    ],
    translation: [
      "After the bubble economy collapsed in the early 1990s, the Japanese economy fell into a prolonged stagnation. This period is often called the 'lost decades,' during which Japan rapidly squandered the legacy of the high economic growth it had once boasted. The crash of stock and land prices left deep scars on the balance sheets of firms and households, fundamentally transforming subsequent economic behavior. Understanding the causes of such prolonged stagnation is not a mere retrospective of the past but is indispensable as a lesson for future economic policy.",
      "The economist Richard Koo explained Japan's prolonged stagnation with the concept of the balance sheet recession. According to him, after the bubble collapsed, firms and households, owing to the impairment of asset values, fell into a state of debt excess, and shifted their principle of action from profit maximization to debt minimization. That is, firms, despite low interest rates, did not borrow and instead devoted themselves to repaying debt. Such behavior of economic agents markedly reduced the efficacy of traditional monetary policy. For no matter how much interest rates were lowered, if borrowing did not increase, the money supply would not expand.",
      "The second factor that deepened the prolonged stagnation was the entrenchment of deflation. The sustained decline of prices increased the real debt burden and created an incentive to postpone consumption and investment. Consumers, expecting to buy more cheaply tomorrow, deferred consumption, and firms, anticipating declining sales, restrained investment. As such expectations were reinforced in a self-fulfilling manner, a vicious circle of deflation and recession was formed. The Bank of Japan's reluctance to set an explicit price stability target was also a factor that delayed the convergence of deflationary expectations.",
      "The third factor is the change in demographics. Japan was the country earliest in the world to confront a declining birthrate and aging population, and the decline of the working-age population made a fall in the potential growth rate unavoidable. Population decline simultaneously brought many economic challenges, including the contraction of the domestic market, the decline in housing demand, and the increase in social security expenditure. The maintenance of the social security system in particular increased the burden on the working generation and became a factor suppressing consumption and investment. Under such demographic constraints, overcoming stagnation through macroeconomic policy alone was nearly impossible.",
      "From the late 1990s onward, the younger generation of Japan was exposed to a harsh labor market environment called the employment ice age. Firms shifted to restraining regular employment and sharply increased the ratio of non-regular employment. The generation that could not obtain stable employment in this period came to be called the lost generation. Those who were once incorporated into non-regular employment found it difficult to transition to regular employment afterward, and they faced the dual hardship of declining lifetime income and insufficient social security. Such a situation, beyond a mere economic problem, invited the grave state of the solidification of social stratification.",
      "The second Abe cabinet, established in 2012, launched an economic policy dubbed Abenomics and sought to escape stagnation through three arrows — massive monetary easing, agile fiscal stimulus, and structural reform. The unconventional monetary easing implemented under Bank of Japan Governor Kuroda Haruhiko brought about a weaker yen and higher stock prices, but its spillover effects on the real economy were limited. Wage increases did not keep up with price increases, and real wages continued to stagnate. Structural reform, too, obstructed by the resistance of vested interests, failed to fully achieve its original purpose.",
      "The greatest lesson of the lost decades is how powerless economic policy can become when it ignores the real structural conditions and depends on textbook prescriptions. The many challenges — the repair of balance sheets, the reversal of deflationary expectations, the response to demographic change, and the reform of the employment structure — cannot be solved by a single policy instrument. They are mutually intertwined structural problems, requiring policy design with a long-term perspective and consistency. Japan's experience will continue to be referenced as an instructive cautionary tale for other countries."
    ],
    questions: [
      {
        q: "According to Richard Koo's balance sheet recession theory, what did firms do despite low interest rates after the bubble collapsed?",
        choices: ["Aggressively borrowed to expand operations", "Did not borrow and instead devoted themselves to repaying debt", "Invested heavily in new technology", "Increased dividends to shareholders"],
        answerIndex: 1,
        explanation: "The passage states that firms, despite low interest rates, did not borrow and instead devoted themselves to repaying debt (企業は低金利にもかかわらず借入を行わず、逆に借金の返済に専念した), shifting their principle from profit maximization to debt minimization."
      },
      {
        q: "How does the passage describe the self-reinforcing mechanism of deflation?",
        choices: ["Consumers buy more when prices fall", "Consumers defer consumption expecting lower prices tomorrow, and firms restrain investment anticipating declining sales, forming a vicious circle", "Deflation automatically resolves itself within a year", "The Bank of Japan welcomed deflation as a sign of stability"],
        answerIndex: 1,
        explanation: "The passage describes how consumers defer consumption expecting lower prices tomorrow, and firms restrain investment anticipating declining sales; such expectations reinforce themselves self-fulfillingly, forming a vicious circle of deflation and recession."
      },
      {
        q: "What demographic factor does the passage identify as constraining Japan's growth?",
        choices: ["A rapidly growing youth population", "The decline of the working-age population due to declining birthrate and aging, lowering the potential growth rate", "Massive immigration", "An increasing birth rate that strains resources"],
        answerIndex: 1,
        explanation: "The passage identifies the decline of the working-age population due to declining birthrate and aging (少子高齢化) as making a fall in the potential growth rate unavoidable, lowering it as a structural constraint."
      },
      {
        q: "What does the passage identify as a limitation of Abenomics?",
        choices: ["It caused excessive inflation", "Wage increases did not keep up with price increases, and real wages continued to stagnate", "It eliminated all non-regular employment", "It caused the yen to appreciate excessively"],
        answerIndex: 1,
        explanation: "The passage states that despite the unconventional monetary easing bringing about a weaker yen and higher stock prices, the spillover effects on the real economy were limited; wage increases did not keep up with price increases, and real wages continued to stagnate (賃金上昇が物価上昇に追いつかず、実質賃金は低迷し続けた)."
      },
      {
        q: "What is the greatest lesson of the lost decades, according to the passage?",
        choices: ["That textbook prescriptions always work", "That economic policy becomes powerless when it ignores real structural conditions and depends on textbook prescriptions", "That monetary policy alone can solve any stagnation", "That demographic change is irrelevant to economic policy"],
        answerIndex: 1,
        explanation: "The final paragraph states that the greatest lesson of the lost decades is how powerless economic policy can become when it ignores real structural conditions and depends on textbook prescriptions (経済政策が現実の構造的条件を無視して教科書的な処方箋に依存したとき、いかに無力になり得るか)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-19 — Sociology of hikikomori
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-19",
    title: "ひきこもりの社会学[しゃかいがく]：関係[かんけい]性[せい]貧困[ひんこん]が生[う]み出[だ]した沈黙[ちんもく]",
    titleReading: "ひきこものしゃかいがくかんけいせいひんこんがうみだしたちんもく",
    level: "N1",
    summary: "A sociological analysis of hikikomori — drawing on Saito Tamaki's clinical work, examining family dynamics, school refusal as precursor, the role of employment precarity, the paradox of hyperconnectivity producing deeper isolation, the emergence of the 8050 problem of aging hikikomori, and relational poverty as the structural root rather than individual pathology.",
    estMinutes: 12,
    tags: ["hikikomori", "sociology", "Saito Tamaki", "relational poverty", "8050 problem", "school refusal", "Japan"],
    body: [
      "ひきこもりという現象[げんしょう]は、一九[いっきゅう]九〇[きゅうじゅう]年代[ねんだい]後半[こうはん]以降[いこう]、日本[にほん]社会[しゃかい]において深刻[しんこく]な社会[しゃかい]問題[もんだい]として認識[にんしき]されるようになった。精神[せいしん]科[か]医[い]の斎藤[さいとう]環[たまき]は、その先駆的[せんくてき]な研究[けんきゅう]において、ひきこもりを単[たん]なる精神[せいしん]疾患[しっかん]ではなく、思春期[ししゅんき]から青年期[せいねんき]にかけての社会[しゃかい]的[てき]引[い]きこもりを特徴[とくちょう]とする現象[げんしょう]として定義[ていぎ]した。彼[かれ]の推計[すいけい]によれば、日本[にほん]には数十万[すうじゅうまん]人[にん]規模[きぼ]のひきこもりが存在[そんざい]するが、その実態[じったい]は隠蔽[いんぺい]されやすく、正確[せいかく]な把握[あく]は困難[こんなん]である。かかる現象[げんしょう]を個[こ]人[じん]の病理[びょうり]に還元[かんげん]する見方[みかた]は、問題[もんだい]の本質[ほんしつ]を見失[みうしな]わせる危険[きけん]をはらんでいる。",
      "ひきこもりの背景[はいけい]には、家族[かぞく]関係[かんけい]の歪[ゆが]みがしばしば指摘[してき]される。過干渉[かかんしょう]の親[おや]と、それに反抗[はんこう]できずに撤退[てったい]する子[こ]供[ども]というパターン[ぱたーん]は、典型的[てんけいてき]な事例[じれい]の一[ひと]つである。親[おや]の期待[きたい]に対[たい]する過剰[かじょう]な同調圧力[どうちょうあつりょく]が、子[こ]供[ども]に「自己[じこ]の欲求[よっきゅう]を表出[ひょうしゅつ]することの恐怖[きょうふ]」を植[う]え付[つ]ける。かかる恐怖[きょうふ]は、次第[しだい]に学校[がっこう]や職場[しょくば]という社会[しゃかい]的[てき]空間[くうかん]全般[ぜんぱん]へと拡張[かくちょう]され、最終的[さいしゅうてき]に自室[じしつ]という聖域[せいいき]への撤退[てったい]を招[まね]く。しかしながら、家族[かぞく]の病理[びょうり]のみに原因[げんいん]を帰[き]することは、社会[しゃかい]構造[こうぞう]的[てき]な要因[よういん]を看過[かんか]するという過[あやま]ちを犯[おか]すことになる。",
      "ひきこもりに至[いた]る前段[ぜんだん]としての不登校[ふとうこう]現象[げんしょう]は、一九[いっきゅう]八〇[はちじゅう]年代[ねんだい]以降[いこう]、増加[ぞうか]傾向[けいこう]を示[しめ]してきた。いじめ、学業[がくぎょう]不振[ふしん]、教員[きょういん]との関係[かんけい]性[せい]の破綻[はたん]など、多様[たよう]な契機[けいき]が指摘[してき]されるが、その根底[こんてい]には「学校[がっこう]という空間[くうかん]に自己[じこ]の存在[そんざい]を肯定[こうてい]される場所[ばしょ]を見出[みいだ]せない」という共通[きょうつう]の体験[たいけん]がある。学校[がっこう]が同調圧力[どうちょうあつりょく]の強[つよ]い空間[くうかん]であるほど、そこから外[はず]れた子[こ]供[ども]の孤立[こりつ]は深[ふか]まる。かかる孤立[こりつ]は、単[たん]なる一時的[いじてき]な不適応[ふてきおう]ではなく、その後[ご]の社会[しゃかい]的[てき]参加[さんか]全般[ぜんぱん]に対[たい]する回避[かいひ]パターン[ぱたーん]を形成[けいせい]する可能性[かのうせい]が高[たか]い。",
      "一九[いっきゅう]九〇[きゅうじゅう]年代[ねんだい]以降[いこう]の雇用[こよう]環境[かんきょう]の悪化[あっか]は、ひきこもり問題[もんだい]をさらに深刻化[しんこくか]させた。新規[しんき]学卒[がくそつ]者[しゃ]に対[たい]する正規[せいき]雇用[こよう]の門戸[もんこ]が狭[せば]まる一方[いっぽう]で、非正規[ひせいき]雇用[こよう]という不安定[ふあんてい]な就業[しゅうぎょう]形態[けいたい]が一般化[いっぱんか]した。一度[いちど]就職[しゅうしょく]活動[かつどう]に挫折[ざせつ]した青年[せいねん]は、その後[ご]の再挑戦[さいちょうせん]の意欲[いよく]を喪失[そうしつ]し、労働[ろうどう]市場[しじょう]からの撤退[てったい]を選択[せんたく]するケースが増加[ぞうか]した。かかる現象[げんしょう]は、経済[けいざい]的[てき]な構造[こうぞう]変化[へんか]が個[こ]人[じん]の心理[しんり]的[てき]な撤退[てったい]を誘発[ゆうはつ]するという、マクロとミクロの連鎖[れんさ]を示[しめ]している。ひきこもりを単[たん]なる個[こ]人[じん]の怠惰[たいだ]として非難[ひなん]する立場[たちば]は、この連鎖[れんさ]の構造[こうぞう]を無視[むし]するものである。",
      "インターネット[いんたーねっと]の普及[ふきゅう]は、ひきこもり現象[げんしょう]に新[あたら]たな側面[そくめん]を付与[ふよ]した。一見[いっけん]すると、ネット[ねっと]は孤立[こりつ]した個人[こじん]を外部[がいぶ]世界[せかい]と結[むす]ぶ窓[まど]として機能[きのう]し得[う]る。しかしながら、現実[げんじつ]には、ネット[ねっと]上[じょう]の関係[かんけい]性[せい]はしばしば既存[きぞん]の対人[たいじん]関係[かんけい]を代替[だいたい]するにとどまり、むしろ現実[げんじつ]の社会[しゃかい]的[てき]スキル[すきる]の習得[しゅうとく]を阻害[そがい]する逆効果[ぎゃくこうか]を招[まね]く。換言[かんげん]すれば、便利[べんり]な仮想[かそう]空間[くうかん]が、面倒[めんどう]な現実[げんじつ]空間[くうかん]への再[ふたた]びの出[で]をより困難[こんなん]にするという逆説[ぎゃくせつ]が生[しょう]じたのである。かかる状況[じょうきょう]は、「関係[かんけい]性[せい]の貧困[ひんこん]」という概念[がいねん]によって特徴[とくちょう]づけられる。",
      "二〇[にじゅう]一〇[いちじゅう]年代[ねんだい]以降[いこう]、新[あたら]たな深刻[しんこく]な問題[もんだい]として「八〇五〇[はちまるごーまる]問題[もんだい]」が浮上[ふじょう]した。これは、八十[はちじゅう]代[だい]の親[おや]と五十[ごじゅう]代[だい]のひきこもりの子[こ]供[ども]という、高齢化[こうれいか]した親[おや]と長期[ちょうき]ひきこもりの子[こ]供[ども]の世帯[せたい]を指[さ]す。親[おや]の老衰[ろうすい]と死亡[しぼう]によって、子[こ]供[ども]の生活[せいかつ]基盤[きばん]が崩壊[ほうかい]し、突然[とつぜん]の社会[しゃかい]的[てき]孤立[こりつ]と生活[せいかつ]困窮[こんきゅう]に直面[ちょくめん]するケースが急増[きゅうぞう]している。この問題[もんだい]は、ひきこもりが単[たん]なる青年期[せいねんき]の一時的[いじてき]な現象[げんしょう]ではなく、生涯[しょうがい]にわたる構造的[こうぞうてき]な問題[もんだい]となり得[う]ることを浮[う]き彫[ぼ]りにした。家族[かぞく]という私[わたくし]的[てき]な空間[くうかん]に問題[もんだい]を押[お]し込[こ]めるという日本[にほん]社会[しゃかい]の対応[たいおう]の限界[げんかい]が、ここに露呈[ろてい]されたのである。",
      "ひきこもり問題[もんだい]の解決[かいけつ]に向[む]けては、「関係[かんけい]性[せい]の貧困[ひんこん]」という構造[こうぞう]的[てき]認識[にんしき]に立[た]った対応[たいおう]が不可欠[ふかけつ]である。個[こ]人[じん]の病理[びょうり]を治療[ちりょう]するという医療[いりょう]的[てき]アプローチ[あぷろーち]だけでは、問題[もんだい]の根本[こんぽん]的[てき]な解決[かいけつ]には至[いた]らない。地域[ちいき]共同体[きょうどうたい]の再構築[さいこうちく]、若者[わかもの]の就労[しゅうろう]支援[しえん]制度[せいど]の拡充[かくじゅう]、家族[かぞく]への適切[てきせつ]な支援[しえん]ネットワーク[ねっとわーく]の提供[ていきょう]など、多層的[たそうてき]な社会[しゃかい]的[てき]介入[かいにゅう]が必要[ひつよう]とされる。ひきこもりは、個[こ]人[じん]の異常[いじょう]ではなく、社会[しゃかい]の関係[かんけい]性[せい]の空洞化[くうどうか]という病[やまい]の兆候[ちょうこう]として、日本[にほん]社会[しゃかい]全体[ぜんたい]が向[む]き合[あ]うべき課題[かだい]なのである。"
    ],
    translation: [
      "The phenomenon of hikikomori has come to be recognized as a serious social problem in Japanese society from the late 1990s onward. In his pioneering research, the psychiatrist Saito Tamaki defined hikikomori not as a mere mental illness but as a phenomenon characterized by social withdrawal during the period from adolescence to young adulthood. According to his estimates, hikikomori exist in Japan on the scale of hundreds of thousands, but their actual conditions tend to be concealed and accurate grasp is difficult. A view that reduces this phenomenon to individual pathology harbors the danger of losing sight of the essence of the problem.",
      "In the background of hikikomori, the distortion of family relations is often pointed out. The pattern of an over-interfering parent and a child who cannot rebel and withdraws is one typical case. Excessive peer pressure to conform to parental expectations instills in the child a fear of expressing their own desires. Such fear gradually expands to social spaces in general, such as school and workplace, and ultimately invites withdrawal into the sanctuary of one's own room. However, attributing the cause only to family pathology commits the error of overlooking social structural factors.",
      "School refusal, as a precursor to hikikomori, has shown an increasing tendency since the 1980s. Various triggers are pointed out — bullying, poor academic performance, the breakdown of relations with teachers — but at their base lies the common experience of being unable to find a place in the school space where one's existence is affirmed. The stronger the conformist pressure of the school, the deeper the isolation of children who deviate from it. Such isolation is not a mere temporary maladaptation but is highly likely to form a pattern of avoidance toward participation in society in general thereafter.",
      "The worsening employment environment since the 1990s further aggravated the hikikomori problem. While the gates of regular employment for new graduates narrowed, the unstable form of employment known as non-regular employment became generalized. Young people who once failed in job hunting lost the motivation to try again, and cases of choosing to withdraw from the labor market increased. Such a phenomenon indicates the chain between macro and micro — that economic structural change induces psychological withdrawal in individuals. The position that criticizes hikikomori as mere individual laziness ignores the structure of this chain.",
      "The spread of the internet gave a new aspect to the hikikomori phenomenon. At first glance, the net can function as a window connecting an isolated individual to the outside world. However, in reality, online relationships often merely substitute for existing interpersonal relationships and rather invite the adverse effect of hindering the acquisition of real social skills. In other words, the paradox arose that a convenient virtual space made re-entry into the troublesome real space more difficult. Such a situation is characterized by the concept of relational poverty.",
      "From the 2010s onward, the 8050 problem has emerged as a new grave problem. This refers to households of parents in their eighties and hikikomori children in their fifties — aged parents and long-term hikikomori children. With the aging and death of parents, cases where the child's foundation of life collapses and they suddenly face social isolation and destitution are rapidly increasing. This problem revealed that hikikomori can become not a mere temporary phenomenon of youth but a lifelong structural problem. The limits of Japanese society's response of confining the problem to the private space of the family were exposed here.",
      "Toward solving the hikikomori problem, responses based on the structural recognition of relational poverty are indispensable. A medical approach that treats individual pathology alone will not lead to a fundamental solution. Multi-layered social interventions are required — the reconstruction of local communities, the expansion of youth employment support systems, the provision of appropriate support networks for families. Hikikomori is not an individual abnormality but a sign of the disease of the hollowing-out of social relationality, a challenge that Japanese society as a whole must face."
    ],
    questions: [
      {
        q: "How does Saito Tamaki define hikikomori, according to the passage?",
        choices: ["As a mere mental illness", "As a phenomenon characterized by social withdrawal during the period from adolescence to young adulthood", "As a form of juvenile delinquency", "As a temporary lifestyle choice"],
        answerIndex: 1,
        explanation: "The passage states that Saito Tamaki defined hikikomori not as a mere mental illness but as a phenomenon characterized by social withdrawal during the period from adolescence to young adulthood (思春期から青年期にかけての社会的引きこもりを特徴とする現象)."
      },
      {
        q: "What common experience does the passage identify at the base of school refusal as a precursor to hikikomori?",
        choices: ["A desire for more academic challenge", "The inability to find a place in the school space where one's existence is affirmed", "A preference for home cooking", "A rejection of all social interaction"],
        answerIndex: 1,
        explanation: "The passage states that at the base of school refusal lies the common experience of being unable to find a place in the school space where one's existence is affirmed (学校という空間に自己の存在を肯定される場所を見出せないという共通の体験)."
      },
      {
        q: "What paradox does the passage identify regarding the internet and hikikomori?",
        choices: ["That the internet has no effect on hikikomori", "That a convenient virtual space made re-entry into the troublesome real space more difficult", "That the internet always cures hikikomori", " That internet use is unrelated to social skills"],
        answerIndex: 1,
        explanation: "The passage states that online relationships often substitute for interpersonal relationships and hinder the acquisition of real social skills; the paradox arose that a convenient virtual space made re-entry into the troublesome real space more difficult (便利な仮想空間が、面倒な現実空間への再びの出をより困難にするという逆説)."
      },
      {
        q: "What does the 8050 problem reveal about hikikomori, according to the passage?",
        choices: ["That hikikomori is only a phenomenon of elementary school children", "That hikikomori can become not a temporary phenomenon of youth but a lifelong structural problem", "That hikikomori is caused by the internet", "That hikikomori is easily cured by medication"],
        answerIndex: 1,
        explanation: "The passage states that the 8050 problem revealed that hikikomori can become not a mere temporary phenomenon of youth but a lifelong structural problem (ひきこもりが単なる青年期の一時的な現象ではなく、生涯にわたる構造的な問題となり得ることを浮き彫りにした)."
      },
      {
        q: "What does the passage conclude is indispensable for solving the hikikomori problem?",
        choices: ["Purely medical treatment of individual pathology", "Responses based on the structural recognition of relational poverty, including multi-layered social interventions", "Compulsory institutionalization", "Restricting internet access"],
        answerIndex: 1,
        explanation: "The final paragraph concludes that responses based on the structural recognition of relational poverty are indispensable, requiring multi-layered social interventions such as the reconstruction of local communities, expansion of youth employment support systems, and provision of family support networks (関係性の貧困という構造的認識に立った対応が不可欠)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n1-20 — Philosophy of science: truth or usefulness?
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n1-20",
    title: "科学[かがく]哲学[てつがく]：真理[しんり]か有用[ゆうよう]性[せい]か",
    titleReading: "かがくてつがくしんりかゆうようせいか",
    level: "N1",
    summary: "A survey of the philosophy of science from logical positivism through Popper's falsifiability, Kuhn's paradigms and scientific revolutions, Lakatos's research programmes, Feyerabend's epistemological anarchism, Bayesian approaches, and the contemporary replication crisis — asking whether science aims at truth or pragmatic usefulness.",
    estMinutes: 13,
    tags: ["philosophy of science", "Popper", "Kuhn", "Lakatos", "Feyerabend", "falsifiability", "paradigm", "replication crisis"],
    body: [
      "科学[かがく]哲学[てつがく]の核心[かくしん]にある問[と]いは、「科学[かがく]は真理[しんり]に接近[せっきん]するのか、それとも単[たん]なる有用[ゆうよう]な道具[どうぐ]に過[す]ぎないのか」という点[てん]にある。この問[と]いは、一九[いっきゅう]世紀[せいき]以来[いらい]、科学[かがく]の権威[けんい]が社会[しゃかい]のあらゆる領域[りょういき]に浸透[しんとう]するにつれ[つれ]、ますます重要性[じゅうようせい]を増[ま]してきた。一九[いっきゅう]二〇[にじゅう]年代[ねんだい]のウィーン[うぃーん]学団[がくだん]による論理[ろんり]実証[じっしょう]主義[しゅぎ]は、科学[かがく]的[てき]な言明[げんめい]を経験[けいけん]的[てき]な検証[けんしょう]可能性[かのうせい]によって画定[かくてい]しようと試[こころ]みた。彼[かれ]らによれば、形而上[けいじじょう]学[がく]的[てき]な言明[げんめい]は検証[けんしょう]不可能[ふかのう]であるがゆえに無意味[むいみ]であり、科学[かがく]の課題[かだい]は感覚[かんかく]経験[けいけん]に基[もと]づく命題[めいだい]の体系化[たいけいか]であった。しかしながら、この立場[たちば]は自[みずか]らの命題[めいだい]の自己[じこ]言及[げんきゅう]的[てき]な矛盾[むじゅん]に直面[ちょくめん]することとなった。",
      "ポパー[ぽぱー]は、論理[ろんり]実証[じっしょう]主義[しゅぎ]の「検証[けんしょう]可能性[かのうせい]」の代[か]わりに「反証[はんしょう]可能性[かのうせい]」を科学[かがく]の划境[かっきょう]基準[きじゅん]として提唱[ていしょう]した。彼[かれ]によれば、いかなる数[かず]の肯定的[こうていてき]な事例[じれい]を集[あつ]めても、一[ひと]つの否定的[ひていてき]な事例[じれい]によって普遍的[ふへんてき]な法則[ほうそく]は反証[はんしょう]される。科学[かがく]的[てき]な理論[りろん]とは、潜在的[せんざいてき]な反証[はんしょう]に対[たい]して開[ひら]かれた仮説[かせつ]であり、反証[はんしょう]を許[ゆる]さない閉鎖[へいさ]的[てき]な体系[たいけい]は科学[かがく]の範疇[はんちゅう]から排除[はいじょ]される。かかる基準[きじゅん]は、占星術[せんせいじゅつ]や精神[せいしん]分析[ぶんせき]などの疑似[ぎじ]科学[かがく]を科学[かがく]から区別[くべつ]する試[こころ]みとして優[すぐ]れた理論[りろん]的[てき]魅力[みりょく]を持[も]っていた。しかしながら、実際[じっさい]の科学[かがく]史[し]は、ポパー[ぽぱー]の規範[きはん]に反[はん]して進行[しんこう]してきたという批判[ひはん]を免[まぬか]れない。",
      "クーン[くーん]は『科学[かがく]革命[かくめい]の構造[こうぞう]』において、科学[かがく]の発展[はってん]を「常態[じょうたい]科学[かがく]」と「科学[かがく]革命[かくめい]」という二[ふた]つの相[そう]からなる過程[かてい]として描[えが]き出[だ]した。常態[じょうたい]科学[かがく]とは、支配的[しはいてき]なパラダイム[ぱらだいむ]の枠内[わくない]で行[おこな]われるパズル[ぱずる]解[かい]きの活動[かつどう]であり、科学者[かがくしゃ]は通常[つうじょう]、既存[きぞん]の理論[りろん]の枠組[わくぐ]みを疑[うたが]うことなく、その適用[てきよう]範囲[はんい]の拡張[かくちょう]に専心[せんしん]する。しかしながら、パラダイム[ぱらだいむ]内[ない]で解決[かいけつ]不能[ふのう]な異常[いじょう]が蓄積[ちくせき]すると、科学[かがく]革命[かくめい]が生[しょう]じ、古[ふる]いパラダイム[ぱらだいむ]は新[あたら]しいパラダイム[ぱらだいむ]に取[と]って代[か]わられる。クーン[くーん]の議論[ぎろん]が衝撃的[しょうげきてき]であったのは、異[こと]なるパラダイム[ぱらだいむ]間[かん]の「通約不能[つうやくふのう]性[せい]」を主張[しゅちょう]した点[てん]である。つまり、パラダイム[ぱらだいむ]が異[こと]なれば、同一[どういつ]の事実[じじつ]も異[こと]なる風[ふう]に見[み]えるため、客観的[きゃっかんてき]な基準[きじゅん]による理論[りろん]選択[せんたく]は不可能[ふかのう]に近[ちか]い。",
      "ラカトシュ[らかとしゅ]は、ポパー[ぽぱー]とクーン[くーん]の不十分[ふじゅうぶん]さを克服[こくふく]するため、「研究[けんきゅう]プログラム[ぷろぐらむ]」という概念[がいねん]を導入[どうにゅう]した。研究[けんきゅう]プログラム[ぷろぐらむ]は、「硬[かた]い核[かく]」と呼[よ]ばれる中核的[ちゅうかくてき]な仮説[かせつ]と、「保護帯[ほごたい]」と呼[よ]ばれる周辺的[しゅうへんてき]な仮説[かせつ]群[ぐん]から構成[こうせい]される。異常[いじょう]が生[しょう]じた場合[ばあい]、科学者[かがくしゃ]は硬[かた]い核[かく]を放棄[ほうき]せず、保護帯[ほごたい]を修正[しゅうせい]することでプログラム[ぷろぐらむ]を擁護[ようご]する。ラカトシュ[らかとしゅ]によれば、ある研究[けんきゅう]プログラム[ぷろぐらむ]が新[あたら]しい事実[じじつ]を予測[よそく]し続[つづ]ける限[かぎ]り「進歩的[しんぽてき]」であり、逆[ぎゃく]に事後[じご]的[てき]な説明[せつめい]に終[お]わるだけなら「退化的[たいかてき]」であると判定[はんてい]された。かかる基準[きじゅん]は、規範的[きはんてき]ではあるが、実際[じっさい]の科学者[かがくしゃ]の実践[じっせん]を精緻[せいち]に反映[はんえい]するものとして評価[ひょうか]されている。",
      "ファイヤアーベント[ふぁいやあーべんと]は、科学[かがく]哲学[てつがく]における全[すべ]ての方法論的[ほうほうろんてき]な規則[きそく]を拒否[きょひ]する「認識論的[にんしきろんてき]なアナキズム[あきずむ]」を主張[しゅちょう]した。彼[かれ]の有名[ゆうめい]なスローガン「何[なに]でもあり（anything goes）」は、科学[かがく]の方法[ほうほう]を一[ひと]つの枠[わく]に押[お]し込[こ]める試[こころ]みそのものを批判[ひはん]するものであった。ファイヤアーベント[ふぁいやあーべんと]によれば、科学[かがく]史[し]における偉大[いだい]な発見[はっけん]は、しばしば既存[きぞん]の方法論的[ほうほうろんてき]規範[きはん]に違反[いはん]することによって達成[たっせい]された。ガリレイ[がりれい]が地動説[ちどうせつ]を提唱[ていしょう]した際[さい]も、当時[とうじ]の経験[けいけん]的[てき]な証拠[しょうこ]は地動説[ちどうせつ]よりも天動説[てんどうせつ]を支持[しじ]していたのである。ファイヤアーベント[ふぁいやあーべんと]の極端[きょくたん]な立場[たちば]は多[おお]くの批判[ひはん]を浴[あ]びたが、科学[かがく]の方法[ほうほう]の多様性[たようせい]を強調[きょうちょう]した点[てん]では一定[いってい]の意義[いぎ]を認[みと]められている。",
      "現代[げんだい]の科学[かがく]哲学[てつがく]において、ベイズ[べいず]主義[しゅぎ]という立場[たちば]が影響力[えいきょうりょく]を拡大[かくだい]している。ベイズ[べいず]主義[しゅぎ]は、科学[かがく]的[てき]推論[すいろん]を確率[かくりつ]の更新[こうしん]というプロセス[ぷろせす]として捉[とら]え、理論[りろん]の確[たし]からしさを主観的[しゅかんてき]な確率[かくりつ]として定量化[ていりょうか]する。かかるアプローチ[あぷろーち]は、医学[いがく]や人工[じんこう]知能[ちのう]などの応用[おうよう]分野[ぶんや]で実践的[じっせんてき]な成果[せいか]を上[あ]げている。しかしながら、ベイズ[べいず]主義[しゅぎ]もまた、事前[じぜん]確率[かくりつ]の設定[せってい]という主観的[しゅかんてき]な要素[ようそ]に依存[いぞん]するという根本的[こんぽんてき]な問題[もんだい]を免[まぬか]れない。科学[かがく]的[てき]推論[すいろん]を純粋[じゅんすい]な客観性[きゃっかんせい]へと還元[かんげん]するという近代[きんだい]的[てき]な希望[きぼう]は、ここにおいても挫折[ざせつ]を余儀[よぎ]なくされている。",
      "近年[きんねん]、心理学[しんりがく]や医学[いがく]などの分野[ぶんや]で「再現[さいげん]性[せい]の危機[きき]」と呼[よ]ばれる深刻[しんこく]な問題[もんだい]が表面化[ひょうめんか]した。かつて確立[かくりつ]されたと見[み]なされた研究[けんきゅう]成果[せいか]が、他[た]の研究[けんきゅう]者[しゃ]による追試[ついし]によって再現[さいげん]できない事例[じれい]が相次[あいつ]いだのである。この危機[きき]は、科学[かがく]が真理[しんり]の探究[たんきゅう]であるという規範的[きはんてき]な理念[りねん]に対[たい]する根本的[こんぽんてき]な疑念[ぎねん]を生[しょう]じさせた。科学[かがく]は真理[しんり]を発見[はっけん]する営[いとな]みではなく、ある時代[じだい]の社会[しゃかい]的[てき]・制度[せいど]的[てき]条件[じょうけん]のもとで妥当[だとう]と見[み]なされた「有用[ゆうよう]な物語[ものがたり]」を構築[こうちく]する営[いとな]みに過[す]ぎないのかもしれない。科学[かがく]哲学[てつがく]の最初[さいしょ]の問[と]い——真理[しんり]か有用[ゆうよう]性[せい]か——は、かくして現代[げんだい]において最[もっとも]も鋭[するど]く問[と]い直[なお]されているのである。"
    ],
    translation: [
      "At the core of the philosophy of science lies the question: does science approach truth, or is it nothing but a useful tool? This question has become increasingly important since the nineteenth century as the authority of science has permeated every domain of society. The logical positivism of the Vienna Circle in the 1920s attempted to demarcate scientific statements by their verifiability through experience. According to them, metaphysical statements were meaningless because they could not be verified, and the task of science was the systematization of propositions based on sensory experience. However, this position confronted the self-referential contradiction of its own propositions.",
      "Popper proposed falsifiability instead of the logical positivists' verifiability as the demarcation criterion of science. According to him, however many positive examples one may gather, a universal law can be falsified by a single negative instance. A scientific theory is a hypothesis open to potential falsification, and a closed system that admits no falsification is excluded from the category of science. This criterion possessed great theoretical appeal as an attempt to distinguish pseudosciences such as astrology and psychoanalysis from science. However, it could not escape the criticism that the actual history of science has proceeded in defiance of Popper's norms.",
      "In The Structure of Scientific Revolutions, Kuhn depicted the development of science as a process consisting of two phases — normal science and scientific revolution. Normal science is the puzzle-solving activity carried out within the framework of a dominant paradigm; scientists usually, without doubting the framework of existing theory, devote themselves to extending its range of application. However, when unresolvable anomalies accumulate within the paradigm, a scientific revolution occurs, and the old paradigm is replaced by a new one. What was shocking in Kuhn's argument was his assertion of the incommensurability between different paradigms. That is, if paradigms differ, the same facts are seen differently, so theory choice by objective criteria is nearly impossible.",
      "Lakatos introduced the concept of research programmes in order to overcome the insufficiency of Popper and Kuhn. A research programme consists of a hard core — central hypotheses — and a protective belt of peripheral hypotheses. When anomalies arise, scientists do not abandon the hard core but rather modify the protective belt to defend the programme. According to Lakatos, a research programme is progressive as long as it continues to predict new facts, and degenerative if it does no more than provide post hoc explanations. This criterion, though normative, is evaluated as reflecting the actual practice of scientists in a refined manner.",
      "Feyerabend advocated epistemological anarchism, rejecting all methodological rules in the philosophy of science. His famous slogan 'anything goes' was a critique of the very attempt to confine the method of science to a single framework. According to Feyerabend, great discoveries in the history of science were often achieved by violating existing methodological norms. When Galileo advocated heliocentrism, the empirical evidence of the time supported geocentrism more than heliocentrism. Feyerabend's extreme position drew much criticism, but it is recognized as having a certain significance in its emphasis on the diversity of scientific methods.",
      "In contemporary philosophy of science, the position called Bayesianism has been expanding its influence. Bayesianism treats scientific inference as a process of updating probabilities, quantifying the plausibility of a theory as a subjective probability. This approach has produced practical results in applied fields such as medicine and artificial intelligence. However, Bayesianism cannot escape the fundamental problem of depending on the subjective element of setting prior probabilities. The modern hope of reducing scientific inference to pure objectivity is thereby again compelled to suffer frustration.",
      "In recent years, a serious problem called the replication crisis has surfaced in fields such as psychology and medicine. Cases have successively emerged in which research results once considered established cannot be reproduced in follow-up studies by other researchers. This crisis has given rise to a fundamental suspicion regarding the normative ideal that science is the pursuit of truth. Perhaps science is not the endeavor of discovering truth, but nothing more than the construction of useful narratives deemed valid under the social and institutional conditions of a given era. The first question of the philosophy of science — truth or usefulness — is thus being re-questioned most sharply in the present age."
    ],
    questions: [
      {
        q: "What did the logical positivists of the Vienna Circle use as the demarcation criterion for scientific statements?",
        choices: ["Falsifiability", "Verifiability through experience", "Subjective probability", "Paradigm consensus"],
        answerIndex: 1,
        explanation: "The passage states that the logical positivists attempted to demarcate scientific statements by their verifiability through experience (経験的な検証可能性によって画定しようと試みた), and that metaphysical statements were meaningless because they could not be verified."
      },
      {
        q: "What does Popper propose as the demarcation criterion of science?",
        choices: ["Verifiability", "Falsifiability — a scientific theory must be open to potential falsification", "Consensus among scientists", "Practical usefulness"],
        answerIndex: 1,
        explanation: "The passage states that Popper proposed falsifiability instead of verifiability as the demarcation criterion of science (反証可能性を科学の划境基準として提唱した), holding that a scientific theory is a hypothesis open to potential falsification."
      },
      {
        q: "What is the shocking assertion in Kuhn's argument, according to the passage?",
        choices: ["That scientific revolutions never occur", "The incommensurability between different paradigms, making objective theory choice nearly impossible", "That normal science is identical to revolutionary science", "That paradigms never change"],
        answerIndex: 1,
        explanation: "The passage states that the shocking aspect of Kuhn's argument was his assertion of the incommensurability between different paradigms (異なるパラダイム間の通約不能性を主張した), so that theory choice by objective criteria is nearly impossible."
      },
      {
        q: "How does Lakatos distinguish a progressive research programme from a degenerative one?",
        choices: ["A progressive programme abandons its hard core frequently", "A progressive programme continues to predict new facts, while a degenerative one offers only post hoc explanations", "A progressive programme rejects the protective belt", "A degenerative programme produces more predictions than a progressive one"],
        answerIndex: 1,
        explanation: "The passage states that according to Lakatos, a research programme is progressive as long as it continues to predict new facts, and degenerative if it does no more than provide post hoc explanations (新しい事実を予測し続ける限り「進歩的」であり、逆に事後的な説明に終わるだけなら「退化的」である)."
      },
      {
        q: "What does the replication crisis fundamentally call into question, according to the passage?",
        choices: ["That science is the pursuit of truth", "That science uses statistics", "That paradigms exist", "That Bayes' theorem is correct"],
        answerIndex: 0,
        explanation: "The final paragraph states that the replication crisis has given rise to a fundamental suspicion regarding the normative ideal that science is the pursuit of truth (科学が真理の探究であるという規範的な理念に対する根本的な疑念), re-questioning whether science is truth or mere usefulness."
      }
    ]
  }
];
