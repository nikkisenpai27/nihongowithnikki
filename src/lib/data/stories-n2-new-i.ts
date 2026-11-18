import type { StoryData } from "@/lib/types";

// N2 short stories set I (new batch).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole run. Kana, katakana, digits, and
// punctuation have no brackets. titleReading is full kana with NO brackets.
// N2 grammar targets: 〜に違いない, 〜限り, 〜次第, 〜に過ぎない, 〜かねない,
// 〜つつある, 〜上で, 〜際, 〜にかけては, 〜わけにはいかない, 〜おそれがある,
// 〜にもかかわらず, 〜に比べ, 〜においては, 〜にとって, 〜どころか, etc.
// Topics: whistleblower, renewable energy, language preservation, medical
// ethics trial, space colonization, cultural appropriation, democratic
// reform, neuroscience discovery, urban planning, post-truth media.

export const storiesN2NewI: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n2n-81 — A whistleblower's story (内部告発者の物語)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-81",
    title: "沈黙[ちんもく]を破[やぶ]った男[おとこ]",
    titleReading: "ちんもくをやぶったおとこ",
    level: "N2",
    summary: "A mid-level engineer exposes falsified safety tests at a major automaker and lives through the relentless pressure that follows his decision to speak out.",
    estMinutes: 7,
    tags: ["whistleblower", "ethics", "corporate"],
    body: [
      "山中[やまなか]は大手[おおて]自動車[じどうしゃ]メーカーの試験[しけん]部門[ぶもん]に勤[つと]める技術者[ぎじゅつしゃ]であった。十年[じゅうねん]間[かん]、彼[かれ]は衝突[しょうとつ]試験[しけん]のデータ[でーた]を扱[あつか]い、上司[じょうし]の信頼[しんらい]を勝[か]ち得[え]ていた。",
      "ある夜[よる]、残業[ざんぎょう]中[ちゅう]に気[き]がついた。新型[しんがた]車[くるま]の制動[せいどう]距離[きょり]の数値[すうち]が、本来[ほんらい]の記録[きろく]より三割[さんわり]も良[よ]く書[か]き換[か]えられていたのである。",
      "彼[かれ]は直[ただ]ちに部長[ぶちょう]に報告[ほうこく]したが、返[かえ]ってきた言葉[ことば]は「公表[こうひょう]すれば会社[かいしゃ]が傾[かたむ]く」という冷[つめ]たい警告[けいこく]であった。山中[やまなか]は一瞬[いっしゅん]、声[こえ]を失[うしな]った。",
      "数日[すうじつ]後[ご]、彼[かれ]は内部告発[ないぶこくはつ]窓口[まどぐち]に連絡[れんらく]を取[と]った。しかし回答[かいとう]は「確認中[かくにんちゅう]」の繰[く]り返[かえ]しであり、彼[かれ]の不安[ふあん]を拭[ぬぐ]うには至[いた]らなかった。",
      "ついに彼[かれ]は、外部[がいぶ]の調査[ちょうさ]記者[きしゃ]に証拠[しょうこ]を渡[わた]す決意[けつい]をした。家族[かぞく]に累[るい]が及[およ]ぶおそれがある以上[いじょう]、すべてを失[うしな]う覚悟[かくご]で動[うご]かねばならなかった。",
      "記事[きじ]が掲載[けいさい]された翌日[よくじつ]、会社[かいしゃ]は記者会見[きしゃかいけん]を開[ひら]き、事実[じじつ]関係[かんけい]の調査[ちょうさ]を始[はじ]めると発表[はっぴょう]した。山中[やまなか]は即時[そくじ]出勤停止[しゅっきんていし]を命[めい]ぜられた。",
      "同僚[どうりょう]の目[め]は冷[つめ]たくなった。かつての友人[ゆうじん]でさえ彼[かれ]を避[さ]けるようにった。彼[かれ]は孤独[こどく]と戦[たたか]いながら、それでも自分[じぶん]の選択[せんたく]は正[ただ]しかったと信[しん]じ続[つづ]けた。",
      "半年[はんとし]後[ご]、第三者[だいさんしゃ]委員会[いいんかい]はデータ[でーた]改ざん[かいざん]を公式[こうしき]に認定[にんてい]した。山中[やまなか]は報復[ほうふく]禁止[きんし]法[ほう]の下[もと]で復職[ふっしょく]を果[は]たしたが、その表情[ひょうじょう]に安[やす]らぎはなかった。",
      "彼[かれ]が最後[さいご]に語[かた]った言葉[ことば]は、「正義[せいぎ]を行[おこな]う者[もの]が孤独[こどく]にならずに済[す]む社会[しゃかい]であってほしい」という静[しず]かな願[ねが]いであった。その一言[ひとこと]に、私[わたし]は深[ふか]く胸[むね]を打[う]たれた。"
    ],
    translation: [
      "Yamanaka was an engineer in the testing division of a major automaker. For ten years he handled crash test data and had earned the trust of his superiors.",
      "One night, while working overtime, he noticed something. The numerical values for the new model's braking distance had been rewritten to look thirty percent better than the actual records.",
      "He reported it immediately to his department head, but the reply he received was a cold warning: 'If this is made public, the company will collapse.' For an instant, Yamanaka lost his voice.",
      "A few days later, he contacted the internal whistleblowing hotline. But the response was a repeated 'under review,' which did nothing to dispel his unease.",
      "Finally, he resolved to hand the evidence to an investigative reporter. Given the risk that his family could be dragged in, he had to act prepared to lose everything.",
      "The day after the article was published, the company held a press conference and announced it would begin investigating the facts. Yamanaka was ordered suspended from work immediately.",
      "His colleagues grew cold toward him. Even former friends began to avoid him. Battling loneliness, he nonetheless continued to believe his choice had been right.",
      "Six months later, a third-party committee officially confirmed the data falsification. Yamanaka returned to his post under whistleblower protection laws, yet his face showed no peace.",
      "The last words he spoke were a quiet hope: 'I want a society where those who do justice do not end up alone.' That single line struck me deeply."
    ],
    vocab: [
      { word: "内部告発", reading: "ないぶこくはつ", meaning: "internal whistleblowing" },
      { word: "技術者", reading: "ぎじゅつしゃ", meaning: "engineer" },
      { word: "試験", reading: "しけん", meaning: "test; experiment" },
      { word: "衝突", reading: "しょうとつ", meaning: "collision" },
      { word: "制動距離", reading: "せいどうきょり", meaning: "braking distance" },
      { word: "書き換える", reading: "かきかえる", meaning: "to rewrite" },
      { word: "警告", reading: "けいこく", meaning: "warning" },
      { word: "窓口", reading: "まどぐち", meaning: "contact desk" },
      { word: "証拠", reading: "しょうこ", meaning: "evidence" },
      { word: "覚悟", reading: "かくご", meaning: "preparedness" },
      { word: "掲載", reading: "けいさい", meaning: "publication" },
      { word: "報復", reading: "ほうふく", meaning: "retaliation" },
      { word: "復職", reading: "ふっしょく", meaning: "return to work" },
      { word: "正義", reading: "せいぎ", meaning: "justice" },
      { word: "改ざん", reading: "かいざん", meaning: "falsification" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-82 — A renewable energy project (再エネ事業)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-82",
    title: "荒地[あれち]に立[た]つ風車[ふうしゃ]",
    titleReading: "あれちにたつふうしゃ",
    level: "N2",
    summary: "A small fishing town on the northern coast turns to offshore wind power, weathering resistance from fisheries and skepticism from investors.",
    estMinutes: 6,
    tags: ["energy", "environment", "community"],
    body: [
      "北海道[ほっかいどう]の東端[とうたん]に位置[いち]する港町[みなとまち]苦[にが]目町[めまち]は、人口[じんこう]が三十年[さんじゅうねん]で半減[はんげん]し、漁業[ぎょぎょう]だけでは暮[く]らしを支[ささ]えられなくなっていた。",
      "町長[ちょうちょう]の矢島[やじま]は、沖合[おきあい]の強[つよ]い季節風[きせつふう]に目[め]をつけ、洋上[ようじょう]風力[ふうりょく]発電[はつでん]の導入[どうにゅう]を提案[ていあん]した。それは町[まち]にとって百年[ひゃくねん]に一度[いちど]の賭[か]けであった。",
      "しかし、漁業[ぎょぎょう]協同[きょうどう]組合[くみあい]は即座[そくざ]に反対[はんたい]した。風車[ふうしゃ]の騒音[そうおん]で魚[さかな]が逃[に]げるおそれがあるというのが、その主[おも]な理由[りゆう]であった。",
      "矢島[やじま]は妥協[だきょう]を重[かさ]ねた。風車[ふうしゃ]の配置[はいち]を漁場[ぎょじょう]から十[じゅう]キロ以遠[いえん]に移[うつ]し、漁業[ぎょぎょう]関係者[かんけいしゃ]に利益[りえき]の一部[いちぶ]を還元[かんげん]する仕組[しく]みを設[もう]けた。",
      "資金[しきん]集[あつ]めも困難[こんなん]を極[きわ]めた。大手[おおて]金融[きんゆう]機関[きかん]は「過疎[かそ]地[ち]のプロジェクト[ぷろじぇくと]に投資[とうし]しても回収[かいしゅう]は望[のぞ]めない」と冷[つめ]たい態度[たいど]を取[と]り続[つづ]けた。",
      "最終的[さいしゅうてき]に、町[まち]は地元[じもと]の信用[しんよう]金庫[きんこ]と欧州[おうしゅう]の再エネ[さいえね]専門[せんもん]ファンド[ふぁんど]から資金[しきん]を調達[ちょうたつ]した。着工[ちゃっこう]は計画[けいかく]より二年[にねん]遅[おく]れたが、矢島[やじま]は決[けっ]して諦[あきら]めなかった。",
      "完成後[かんせいご]、十二基[じゅうにき]の風車[ふうしゃ]が沖合[おきあい]に並[なら]んだ。発電量[はつでんりょう]は町[まち]全体[ぜんたい]の消費[しょうひ]を上回[うわまわ]り、余剰[よじょう]電力[でんりょく]は近隣[きんりん]都市[とし]に売電[ばいでん]された。",
      "漁業[ぎょぎょう]への悪影響[あくえいきょう]は懸念[けねん]ほどには現[あらわ]れなかった。むしろ、風車[ふうしゃ]周辺[しゅうへん]の礁[いそ]が人工[じんこう]魚礁[ぎょしょう]として機能[きのう]し、魚群[ぎょぐん]が集[あつ]まるようになったという報告[ほうこく]も届[とど]いている。",
      "矢島[やじま]は取材[しゅざい]に対[たい]し、「過疎[かそ]の解決[かいけつ]に魔法[まほう]はない。あるのは、地域[ちいき]が自分[じぶん]たちで決[き]める勇気[ゆうき]だけだ」と語[かた]った。その言葉[ことば]に、町[まち]の再生[さいせい]は始[はじ]まっていた。"
    ],
    translation: [
      "Nigame, a fishing town on the eastern tip of Hokkaido, had seen its population halve in thirty years, and fishing alone could no longer sustain people's livelihoods.",
      "The mayor, Yajima, took note of the strong seasonal winds offshore and proposed introducing offshore wind power generation. For the town, it was a once-in-a-century gamble.",
      "However, the fisheries cooperative immediately opposed it. Their main reason was the concern that wind turbine noise might drive fish away.",
      "Yajima made a series of compromises. He moved the turbine layout at least ten kilometers away from the fishing grounds and created a mechanism to return a portion of profits to those involved in fishing.",
      "Fundraising was extremely difficult. Major financial institutions continued to take a cold stance, saying 'investing in a depopulated project offers no prospect of recovery.'",
      "Ultimately, the town secured funding from a local credit union and a European renewable-energy fund. Construction began two years behind schedule, but Yajima never gave up.",
      "After completion, twelve turbines stood in a row offshore. The power generated exceeded the town's total consumption, and surplus electricity was sold to neighboring cities.",
      "The feared negative impact on fishing did not materialize as much as expected. Reports even came in that the reefs around the turbines functioned as artificial fish reefs and began attracting schools of fish.",
      "Speaking to reporters, Yajima said, 'There is no magic solution to depopulation. There is only the courage of a community to decide for itself.' In those words, the town's rebirth had begun."
    ],
    vocab: [
      { word: "洋上風力", reading: "ようじょうふうりょく", meaning: "offshore wind power" },
      { word: "発電", reading: "はつでん", meaning: "power generation" },
      { word: "導入", reading: "どうにゅう", meaning: "introduction" },
      { word: "協同組合", reading: "きょうどうくみあい", meaning: "cooperative" },
      { word: "騒音", reading: "そうおん", meaning: "noise" },
      { word: "還元", reading: "かんげん", meaning: "return (of profits)" },
      { word: "調達", reading: "ちょうたつ", meaning: "procurement" },
      { word: "着工", reading: "ちゃっこう", meaning: "start of construction" },
      { word: "売電", reading: "ばいでん", meaning: "sale of electricity" },
      { word: "魚礁", reading: "ぎょしょう", meaning: "fishing reef" },
      { word: "過疎", reading: "かそ", meaning: "depopulation" },
      { word: "余剰", reading: "よじょう", meaning: "surplus" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-83 — A language preservation (言語保存の試み)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-83",
    title: "消[き]えゆく言葉[ことば]を継[つ]ぐ",
    titleReading: "きえゆくことばをつぐ",
    level: "N2",
    summary: "A linguist races to record a critically endangered dialect spoken by only a handful of elders on an isolated island in the Seto Inland Sea.",
    estMinutes: 6,
    tags: ["language", "dialect", "culture"],
    body: [
      "瀬戸内海[せとないかい]の孤島[ことう]で、わずか十一人[じゅういちにん]の高齢者[こうれいしゃ]しか話者[わしゃ]が残[のこ]っていない方言[ほうげん]があった。言語学者[げんごがくしゃ]の桐生[きりゅう]は、その言葉[ことば]を記録[きろく]するために島[しま]へ移[うつ]り住[す]んだ。",
      "方言[ほうげん]には、標準語[ひょうじゅんご]にない独特[どくとく]の助詞[じょし]や、漁業[ぎょぎょう]に根[ね]ざした語彙[ごい]が多[おお]く残[のこ]っていた。例[たと]えば「潮[しお]の匂[にお]いを嗅[か]ぐ」ことを、島[しま]では一[ひと]つの動詞[どうし]で表[あらわ]す。",
      "桐生[きりゅう]は当初[とうしょ]、老人[ろうじん]たちの警戒[けいかい]に遭[あ]った。「自分[じぶん]たちの言葉[ことば]を録音[ろくおん]して何[なに]になる」と、何[なん]度[ど]も問[と]い詰[つ]められた。",
      "彼女[かのじょ]は焦[あせ]らなかった。毎朝[まいあさ]港[みなと]で魚[さかな]をさばく手伝[てつだ]いをし、祭[まつり]の準備[じゅんび]にも参加[さんか]した。三[みっ]か月[かげつ]後[ご]、最[もっと]も年長[ねんちょう]の老婆[ろうば]が、ついに口[くち]を開[ひら]いた。",
      "録音[ろくおん]は慎重[しんちょう]に進[すす]められた。方言[ほうげん]特有[とくゆう]の音素[おんそ]は、標準[ひょうじゅん]の機材[きざい]では正確[せいかく]に拾[ひろ]えないことがあり、桐生[きりゅう]は特殊[とくしゅ]なマイク[まいく]を導入[どうにゅう]した。",
      "記録[きろく]を進[すす]めるうちに、彼女[かのじょ]は言葉[ことば]そのものだけでなく、言葉[ことば]が運[はこ]ぶ記憶[きおく]に引[ひ]かれていった。ある漁師[りょうし]の語[かた]る海難[かいなん]体験[たいけん]は、島[しま]の歴史[れきし]そのものだった。",
      "しかし、記録[きろく]が半ば[なかば]に達[たっ]した頃[ころ]、最後[さいご]の流暢[りゅうちょう]な話者[わしゃ]の一人[ひとり]が病[や]み倒[たお]れた。桐生[きりゅう]は病院[びょういん]へ通[かよ]い、点滴[てんてき]の横[よこ]で声[こえ]を録[ろく]り続[つづ]けた。",
      "島[しま]を出[で]る日[ひ]、彼女[かのじょ]は十[じゅう]時間[じかん]分[ぶん]の録音[ろくおん]と三千語[さんぜんご]の辞書[じしょ]原稿[げんこう]を携[たずさ]えていた。それは生[い]きた言語[げんご]としては死[し]にゆくが、記録[きろく]としては永遠[えいえん]に残[のこ]るものだった。",
      "桐生[きりゅう]は最後[さいご]に、「言葉[ことば]を救[すく]うというのは、話者[わしゃ]の命[いのち]に耳[みみ]を傾[かたむ]けることだ」と記[しる]した。その一文[いちぶん]が、このプロジェクト[ぷろじぇくと]の意義[いぎ]を物語[ものがた]っていた。"
    ],
    translation: [
      "On an isolated island in the Seto Inland Sea, a dialect spoken by only eleven elderly people remained. The linguist Kiryu moved to the island to record that language.",
      "The dialect contained many particles not found in standard Japanese and vocabulary rooted in fishing. For example, the act of 'smelling the tide' was expressed on the island with a single verb.",
      "Initially, Kiryu met with wariness from the old people. 'What's the point of recording our language?' she was pressed again and again.",
      "She did not rush. Every morning she helped gut fish at the port and joined in preparing for festivals. Three months later, the eldest old woman finally opened up.",
      "The recording proceeded carefully. The dialect's distinctive phonemes sometimes could not be captured accurately with standard equipment, so Kiryu introduced a specialized microphone.",
      "As the recording progressed, she was drawn not only to the language itself but to the memories it carried. A fisherman's account of a maritime disaster was, in fact, the island's history.",
      "However, when the record had reached its halfway point, one of the last fluent speakers fell ill. Kiryu visited the hospital and continued recording beside the IV drip.",
      "On the day she left the island, she carried ten hours of recordings and a draft dictionary of three thousand words. As a living language it was dying, yet as a record it would remain forever.",
      "Finally, Kiryu wrote, 'To save a language is to listen to the lives of its speakers.' That single sentence told the story of the project's significance."
    ],
    vocab: [
      { word: "方言", reading: "ほうげん", meaning: "dialect" },
      { word: "孤島", reading: "ことう", meaning: "isolated island" },
      { word: "話者", reading: "わしゃ", meaning: "speaker" },
      { word: "助詞", reading: "じょし", meaning: "particle" },
      { word: "語彙", reading: "ごい", meaning: "vocabulary" },
      { word: "警戒", reading: "けいかい", meaning: "wariness" },
      { word: "音素", reading: "おんそ", meaning: "phoneme" },
      { word: "海難", reading: "かいなん", meaning: "maritime disaster" },
      { word: "流暢", reading: "りゅうちょう", meaning: "fluent" },
      { word: "点滴", reading: "てんてき", meaning: "IV drip" },
      { word: "原稿", reading: "げんこう", meaning: "draft; manuscript" },
      { word: "傾ける", reading: "かたむける", meaning: "to lend (an ear)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-84 — A medical ethics trial (医療倫理の裁判)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-84",
    title: "延命[えんめい]治療[ちりょう]の境界[きょうかい]",
    titleReading: "えんめいちりょうのきょうかい",
    level: "N2",
    summary: "A doctor is tried for withdrawing life support from a terminally ill patient at the family's request, reigniting a national debate on end-of-life decisions.",
    estMinutes: 7,
    tags: ["medicine", "ethics", "trial"],
    body: [
      "外科医[げかい]の蓮見[はすみ]は、末期[まっき]がんの患者[かんじゃ]の人工呼吸器[じんこうこきゅうき]を外[はず]した廉[かど]で、殺人[さつじん]容疑[ようぎ]で起訴[きそ]された。患者[かんじゃ]は八十代[はちじゅうだい]の女性[じょせい]で、予後[よご]は絶望的[ぜつぼうてき]であった。",
      "問題[もんだい]となったのは、患者[かんじゃ]が意識[いしき]を失[うしな]う前[まえ]に書[か]いたとされる「延命[えんめい]措置[そち]の拒否[きょひ]」文書[ぶんしょ]であった。文書[ぶんしょ]の日付[ひづけ]に疑義[ぎぎ]が持[も]たれ、検察[けんさつ]は有効性[ゆうこうせい]を争[あらそ]った。",
      "家族[かぞく]は三人[さんにん]の娘[むすめ]であった。長女[ちゅじょ]は蓮見[はすみ]の判断[はんだん]を支持[しじ]したが、次女[じじょ]と三女[さんじょ]は「母[はは]はまだ死[し]にたくなかったはずだ」と主張[しゅちょう]して告発[こくはつ]に踏[ふ]み切[き]った。",
      "公判[こうはん]では、専門家[せんもんか]の鑑定[かんてい]意見[いけん]が割[わ]れた。一人[ひとり]は「医学的[いがくてき]に見[み]れば尊厳死[そんげんし]の範疇[はんちゅう]だ」と述[の]べ、もう一人[ひとり]は「患者[かんじゃ]の意思[いし]の確認[かくにん]が不十分[ふじゅうぶん]だった」と指摘[してき]した。",
      "蓮見[はすみ]は法廷[ほうてい]で静[しず]かに語[かた]った。「私は医師[いし]として、患者[かんじゃ]の苦痛[くつう]を和[やわ]らげる義務[ぎむ]がある。延命[えんめい]とは、命[いのち]を長[なが]らえることではなく、苦[くる]しみを長[なが]らえることになりかねない」",
      "検察[けんさつ]は、蓮見[はすみ]が家族[かぞく]の同意[どうい]を文書[ぶんしょ]ではなく口頭[こうとう]で得[え]た点[てん]を重[おも]く見[み]た。制度上[せいどじょう]、文書[ぶんしょ]による確認[かくにん]が必須[ひっす]である以上[いじょう]、手続[てつづ]き違反[いはん]は免[まぬが]れないという立場[たちば]であった。",
      "陪審[ばいしん]裁判[さいばん]であったため、六人[ろくにん]の裁判員[さいばんいん]が判断[はんだん]を担[にな]った。彼[かれ]らは数日[すうじつ]間[かん]の審議[しんぎ]を経[へ]て、情状[じょうじょう]を酌量[しゃくりょう]しつつも有罪[ゆうざい]を評決[ひょうけつ]した。",
      "判決[はんけつ]は執行[しっこう]猶予[ゆうよ]付[つ]きの三年[さんねん]であった。蓮見[はすみ]は医師[いし]免許[めんきょ]を一時[いちじ]停止[ていし]され、社会[しゃかい]全体[ぜんたい]に尊厳死[そんげんし]法制[ほうせい]の不在[ふざい]という問[と]いが投[な]げかけられた。",
      "彼[かれ]は控訴[こうそ]せず、その後[ご]、緩和[かんわ]ケア[けあ]病棟[びょうとう]に転[てん]科[か]した。彼[かれ]の選択[せんたく]が正[ただ]しかったかは今[いま]も議論[ぎろん]されているが、少[すく]なくとも法廷[ほうてい]の言葉[ことば]は、私[わたし]たちに考[かんが]えさせるものを残[のこ]した。"
    ],
    translation: [
      "The surgeon Hasumi was indicted for homicide for removing a ventilator from a terminally ill cancer patient. The patient was a woman in her eighties with a hopeless prognosis.",
      "The issue was a document rejecting life-sustaining treatment, said to have been written by the patient before losing consciousness. The date of the document was questioned, and the prosecution disputed its validity.",
      "The family consisted of three daughters. The eldest supported Hasumi's decision, but the second and third daughters insisted that 'our mother would not have wanted to die yet' and decided to file a criminal complaint.",
      "In the trial, expert testimony was divided. One stated, 'Medically, this falls within the category of death with dignity,' while another pointed out that 'the patient's intent was insufficiently confirmed.'",
      "Hasumi spoke quietly in court: 'As a physician, I have a duty to ease the patient's pain. Prolonging life is not extending life but prolonging suffering.'",
      "The prosecution placed weight on the fact that Hasumi had obtained family consent orally rather than in writing. Since written confirmation is required by regulation, they took the position that a procedural violation could not be avoided.",
      "Because it was a jury trial, six lay judges bore the judgment. After several days of deliberation, they found him guilty while weighing extenuating circumstances.",
      "The sentence was three years suspended. Hasumi's medical license was temporarily suspended, and the absence of a death-with-dignity statute was posed as a question to society at large.",
      "He did not appeal and later transferred to a palliative care ward. Whether his choice was right remains debated, but at the very least, the words spoken in court left us something to think about."
    ],
    vocab: [
      { word: "延命治療", reading: "えんめいちりょう", meaning: "life-sustaining treatment" },
      { word: "人工呼吸器", reading: "じんこうこきゅうき", meaning: "ventilator" },
      { word: "末期", reading: "まっき", meaning: "terminal stage" },
      { word: "容疑", reading: "ようぎ", meaning: "suspicion" },
      { word: "起訴", reading: "きそ", meaning: "indictment" },
      { word: "予後", reading: "よご", meaning: "prognosis" },
      { word: "拒否", reading: "きょひ", meaning: "refusal" },
      { word: "鑑定", reading: "かんてい", meaning: "expert evaluation" },
      { word: "尊厳死", reading: "そんげんし", meaning: "death with dignity" },
      { word: "口頭", reading: "こうとう", meaning: "oral" },
      { word: "酌量", reading: "しゃくりょう", meaning: "consideration (of circumstances)" },
      { word: "執行猶予", reading: "しっこうゆうよ", meaning: "suspended sentence" },
      { word: "緩和ケア", reading: "かんわけあ", meaning: "palliative care" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-85 — A space colonization debate (宇宙植民論争)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-85",
    title: "星[ほし]を新[あたら]しい故郷[ふるさと]に",
    titleReading: "ほしをあたらしいふるさとに",
    level: "N2",
    summary: "An international panel debates whether humanity should pursue Mars colonization, weighing techno-optimism against ecological and ethical objections.",
    estMinutes: 7,
    tags: ["space", "ethics", "futures"],
    body: [
      "国連[こくれん]の未来[みらい]フォーラム[ふぉーらむ]で、火星[かせい]入植[にゅうしょく]をめぐる公開[こうかい]討論[とうろん]が行[おこな]われた。賛成派[さんせいは]は民間[みんかん]宇宙[うちゅう]企業[きぎょう]の代表[だいひょう]、反対派[はんたいは]は環境[かんきょう]哲学者[てつがくしゃ]が率[ひき]いた。",
      "賛成派[さんせいは]は「人類[じんるい]の存続[そんぞく]を賭[か]けた保険[ほけん]が必要[ひつよう]だ」と主張[しゅちょう]した。地球[ちきゅう]が気候[きこう]変動[へんどう]や小惑星[しょうわくせい]衝突[しょうとつ]で居住[きょじゅう]不能[ふのう]になるおそれは、ゼロではないという前提[ぜんてい]であった。",
      "反対派[はんたいは]は「地球[ちきゅう]の修復[しゅうふく]を放棄[ほうき]しての逃避[とうひ]であってはならない」と切り返[きりかえ]した。宇宙[うちゅう]への脱出[だっしゅつ]に巨額[きょがく]を投[とう]じるより、砂漠[さばく]化[か]の阻止[そし]に使[つか]うべきだという主張[しゅちょう]であった。",
      "議論[ぎろん]は技術的[ぎじゅつてき]な領域[りょういき]にも及[およ]んだ。有人[ゆうじん]飛行[ひこう]の放射線[ほうしゃせん]被曝[ひばく]、閉鎖[へいさ]環境[かんきょう]の心理[しんり]的[てき]負荷[ふか]、遺伝子[いでんし]の多様性[たようせい]維持[いじ]など、解決[かいけつ]の見通[みとお]しが立[た]たない課題[かだい]が挙[あ]げられた。",
      "ある生物学者[せいぶつがくしゃ]は「他[ほか]の天体[てんたい]に微生物[びせいぶつ]が存在[そんざい]する場合[ばあい]、汚染[おせん]は倫理的[りんりてき]に許[ゆる]されるのか」と問[と]いかけた。会場[かいじょう]は一瞬[いっしゅん]、静[しず]まり返[かえ]った。",
      "賛成派[さんせいは]の代表[だいひょう]は、これに対[たい]して「倫理[りんり]委員会[いいんかい]を設置[せっち]し、事前[じぜん]調査[ちょうさ]を徹底[てってい]する」と答[こた]えた。しかし、その言葉[ことば]が納得[なっとく]を得[え]るには、具体性[ぐたいてきせい]が不足[ふそく]していた。",
      "人権[じんけん]弁護士[べんごし]は「植民[しょくみん]という言葉[ことば]が持[も]つ歴史[れきし]の重[おも]みを忘[わす]れてはならない」と指摘[してき]した。火星[かせい]社会[しゃかい]が階層[かいそう]化[か]され、地球[ちきゅう]の貧困層[ひんこんそう]が排除[はいじょ]されるおそれを強調[きょうちょう]した。",
      "最終的[さいしゅうてき]に、討論[とうろん]は結論[けつろん]を出[だ]さずに終[お]わった。司会[しかい]は「次[つぎ]の世代[せだい]に問[と]いを渡[わた]すこと自体[じたい]が、私[わたし]たちの責務[せきむ]である」と締[し]めくくった。",
      "私は画面[がめん]の前[まえ]で考[かんが]えた。星[ほし]へ行[い]くことと、地球[ちきゅう]に残[のこ]ること。その二[ふた]つは対立[たいりつ]するのではなく、ともに問[と]われるべき問[と]いに違いない。"
    ],
    translation: [
      "At the UN Future Forum, a public debate on Mars colonization took place. The pro side was represented by a private space company executive; the anti side was led by an environmental philosopher.",
      "The pro side argued, 'An insurance policy for the survival of humanity is necessary.' The premise was that the risk of Earth becoming uninhabitable due to climate change or asteroid impact is not zero.",
      "The anti side shot back: 'It must not be an escape that abandons the restoration of Earth.' They argued that the enormous sums spent on a space escape should instead be used to halt desertification.",
      "The discussion extended into technical territory. Crewed-flight radiation exposure, the psychological load of closed environments, and the maintenance of genetic diversity were raised as problems with no clear solution.",
      "One biologist asked, 'If microorganisms exist on other celestial bodies, is contamination ethically permissible?' The hall fell silent for an instant.",
      "In response, the pro representative replied, 'We will establish an ethics committee and thoroughly conduct preliminary surveys.' Yet those words lacked the specificity needed to win agreement.",
      "A human-rights lawyer pointed out, 'We must not forget the historical weight carried by the word colonization.' She stressed the risk that a Martian society could become stratified and that the Earth's poor could be excluded.",
      "Ultimately, the debate ended without a conclusion. The moderator closed by saying, 'Passing the question on to the next generation is itself our responsibility.'",
      "I considered this in front of the screen. Going to the stars and remaining on Earth. Those two are not opposed but must surely be questions asked together."
    ],
    vocab: [
      { word: "入植", reading: "にゅうしょく", meaning: "colonization; settlement" },
      { word: "存続", reading: "そんぞく", meaning: "continued existence" },
      { word: "小惑星", reading: "しょうわくせい", meaning: "asteroid" },
      { word: "修復", reading: "しゅうふく", meaning: "restoration" },
      { word: "逃避", reading: "とうひ", meaning: "escape; evasion" },
      { word: "被曝", reading: "ひばく", meaning: "exposure (to radiation)" },
      { word: "閉鎖", reading: "へいさ", meaning: "closed; closure" },
      { word: "微生物", reading: "びせいぶつ", meaning: "microorganism" },
      { word: "階層", reading: "かいそう", meaning: "stratum" },
      { word: "貧困層", reading: "ひんこんそう", meaning: "the poor" },
      { word: "排除", reading: "はいじょ", meaning: "exclusion" },
      { word: "責務", reading: "せきむ", meaning: "duty; responsibility" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-86 — A cultural appropriation controversy (文化盗用問題)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-86",
    title: "模倣[もほう]か敬意[けいい]か",
    titleReading: "もほうかけいいか",
    level: "N2",
    summary: "A luxury fashion house faces backlash after incorporating sacred Indigenous patterns into its runway collection, sparking a global debate over borrowing and exploitation.",
    estMinutes: 6,
    tags: ["culture", "fashion", "controversy"],
    body: [
      "パリ[ぱり]の高級[こうきゅう]ブランド[ぶらんど]が、先住民[せんじゅうみん]の聖なる[せいなる]文様[もんよう]を刺繍[ししゅう]したドレス[どれす]を発表[はっぴょう]した。その文様[もんよう]は、部族[ぶぞく]の成年[せいねん]儀式[ぎしき]以外[いがい]には身[み]につけてはならないとされるものであった。",
      "SNS[えすえぬえす]上[じょう]で直[ただ]ちに非難[ひなん]が殺到[さっとう]した。部族[ぶぞく]の長老[ちょうろう]は、「私[わたし]たちの信仰[しんこう]を装飾[そうしょく]に使[つか]うことは、魂[たましい]の略奪[りゃくだつ]だ」と声明[せいめい]を出[だ]した。",
      "ブランド[ぶらんど]側[がわ]は当初[とうしょ]、デザイン[でざいん]の「敬意[けいい]に基[もと]づくオマージュ[おまーじゅ]」であると反論[はんろん]した。しかし、その説明[せつめい]がかえって火[ひ]に油[あぶら]を注[そそ]ぐ結果[けっか]となった。",
      "問題[もんだい]の核心[かくしん]は、利益[りえき]の還元[かんげん]が全[まった]くなかった点[てん]であった。ドレス[どれす]は一本[いっぽん]が数百万[すうひゃくまん]円[えん]で販売[はんばい]されたが、文様[もんよう]の本来[ほんらい]の保持者[ほじしゃ]には一円[いちえん]も渡[わた]らなかった。",
      "文化人類学者[ぶんかじんるいがくしゃ]は、「文化[ぶんか]の交流[こうりゅう]自体[じたい]は悪[わる]ではない。問題[もんだい]は、非対称[ひたいしょう]な力関係[ちからかんけい]の下[もと]で行[おこな]われるかどうかだ」と指摘[してき]した。その指摘[してき]は、議論[ぎろん]の焦点[しょうてん]を鋭[するど]く絞[しぼ]った。",
      "抗議[こうぎ]の声[こえ]は世界各地[せかいかくち]に広[ひろ]がり、類似[るいじ]の事例[じれい]が次々[つぎつぎ]と告発[こくはつ]された。ある博物館[はくぶつかん]は展示[てんじ]から先住民[せんじゅうみん]の遺物[いぶつ]を一時[いちじ]撤去[てっきょ]するに至[いた]った。",
      "ブランド[ぶらんど]は最終的[さいしゅうてき]に謝罪[しゃざい]し、当該[とうがい]商品[しょうひん]の回収[かいしゅう]と、先住民[せんじゅうみん]芸術[げいじゅつ]基金[ききん]への寄付[きふ]を発表[はっぴょう]した。しかし、その対応[たいおう]が遅[おそ]すぎたという批判[ひはん]は消[き]えなかった。",
      "一連[いちれん]の騒動[そうどう]を通[とお]じて、模倣[もほう]と敬意[けいい]の境界[きょうかい]を画[かく]することの難[むずか]しさが浮[う]き彫[ぼ]りになった。許諾[きょだく]を得[え]るだけでは不十分[ふじゅうぶん]で、文脈[ぶんみゃく]を理解[りかい]することが求[もと]められる。",
      "私[わたし]はこの出来事[できごと]から学[まな]んだ。異[こと]なる文化[ぶんか]に触[ふ]れることは豊[ゆた]かさの源[みなもと]であるが、その豊[ゆた]かさを搾取[さくしゅ]に変[か]えない注意深[ちゅういぶか]さが、私[わたし]たちには不可欠[ふかけつ]なのだ。"
    ],
    translation: [
      "A Parisian luxury brand released a dress embroidered with a sacred Indigenous pattern. The pattern was something that, by tradition, was not to be worn except during the tribe's coming-of-age ceremony.",
      "Criticism flooded social media immediately. A tribal elder issued a statement: 'Using our faith as decoration is theft of the soul.'",
      "Initially, the brand countered that the design was 'a homage based on respect.' However, that explanation ended up adding fuel to the fire.",
      "The core of the issue was that no profits had been returned. The dress sold for several million yen apiece, but not a single yen reached the original custodians of the pattern.",
      "A cultural anthropologist pointed out: 'Cultural exchange itself is not bad. The problem is whether it occurs under an asymmetrical power relationship.' That remark sharply sharpened the focus of the debate.",
      "Voices of protest spread worldwide, and similar cases were exposed one after another. One museum temporarily removed Indigenous artifacts from display.",
      "Ultimately the brand apologized, announced a recall of the items in question, and pledged a donation to an Indigenous arts fund. However, the criticism that its response came too late did not disappear.",
      "Through this series of events, the difficulty of drawing the boundary between imitation and respect was thrown into relief. Merely obtaining permission is insufficient; understanding the context is required.",
      "I learned from this incident. Engaging with different cultures is a source of richness, yet the care not to turn that richness into exploitation is indispensable for us."
    ],
    vocab: [
      { word: "模倣", reading: "もほう", meaning: "imitation" },
      { word: "先住民", reading: "せんじゅうみん", meaning: "Indigenous people" },
      { word: "文様", reading: "もんよう", meaning: "pattern" },
      { word: "刺繍", reading: "ししゅう", meaning: "embroidery" },
      { word: "儀式", reading: "ぎしき", meaning: "ceremony" },
      { word: "略奪", reading: "りゃくだつ", meaning: "plunder" },
      { word: "還元", reading: "かんげん", meaning: "return (of profits)" },
      { word: "非対称", reading: "ひたいしょう", meaning: "asymmetry" },
      { word: "撤去", reading: "てっきょ", meaning: "removal" },
      { word: "許諾", reading: "きょだく", meaning: "permission" },
      { word: "搾取", reading: "さくしゅ", meaning: "exploitation" },
      { word: "不可欠", reading: "ふかけつ", meaning: "indispensable" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-87 — A democratic reform (民主的改革)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-87",
    title: "投票[とうひょう]年齢[ねんれい]を下[お]ろせ",
    titleReading: "とうひょうねんれいをおろせ",
    level: "N2",
    summary: "A youth-led movement campaigns to lower the voting age to sixteen, confronting apathy, party resistance, and the structural inertia of an aging democracy.",
    estMinutes: 6,
    tags: ["politics", "reform", "youth"],
    body: [
      "高校[こうこう]生[せい]の結城[ゆうき]は、選挙[せんきょ]権[けん]年齢[ねんれい]を十八[じゅうはち]歳[さい]から十六[じゅうろく]歳[さい]に引[ひ]き下[さ]げる請願[せいがん]を都議会[とぎかい]に提出[ていしゅつ]した。彼[かれ]の背後[はいご]には、全国[ぜんこく]二万[にまん]人[にん]の署名[しょめい]があった。",
      "請願[せいがん]の理由[りゆう]は明確[めいかく]であった。少子[しょうし]高齢化[こうれいか]が進[すす]む中[なか]、若者[わかもの]の政策[せいさく]への影響力[えいきょうりょく]は年々[ねんねん]低下[ていか]しており、年金[ねんきん]や税金[ぜいきん]の負担[ふたん]ばかりが未来[みらい]に先送[さきおく]りされていた。",
      "都議会[とぎかい]の保守系[ほしゅけい]議員[ぎいん]は「十六[じゅうろく]歳[さい]には政治[せいじ]的[てき]判断[はんだん]力[りょく]が不足[ふそく]している」と反対[はんたい]した。その発言[はつげん]に、結城[ゆうき]は静[しず]かに、しかし力強[ちからづよ]く反論[はんろん]した。",
      "「私[わたし]たちはすでに十八[じゅうはち]歳[さい]で選挙[せんきょ]に参加[さんか]します。その二年前[にねんまえ]に政治[せいじ]を学[まな]ぶことが、なぜ危険[きけん]なのでしょうか」と彼[かれ]は問[と]いかけた。会場[かいじょう]の若者[わかもの]から拍手[はくしゅ]が起[お]きた。",
      "一方[いっぽう]で、賛成[さんせい]派[は]の内部[ないぶ]にも揺[ゆ]れがあった。一部[いちぶ]の活動家[かつどうか]は「地方[ちほう]自治[じち]から入[はい]るべきで、国政[こくせい]の改革[かいかく]は時期[じき]尚早[しょうそう]だ」と慎重[しんちょう]な立場[たちば]を取[と]った。",
      "結城[ゆうき]は妥協[だきょう]を拒[こば]まなかった。彼[かれ]は、「若者[わかもの]を一部[いちぶ]の地域[ちいき]に限定[げんてい]することは、平等[びょうどう]の原則[げんそく]に反[はん]する」と主張[しゅちょう]し、全国[ぜんこく]一律[いちりつ]の制度[せいど]改正[かいせい]を求[もと]め続[つづ]けた。",
      "請願[せいがん]は最終的[さいしゅうてき]に否決[ひけつ]された。しかし、討論[とうろん]の記録[きろく]は広[ひろ]く拡散[かくさん]され、翌年[よくねん]の国政[こくせい]選挙[せんきょ]では若者[わかもの]の投票[とうひょう]率[りつ]が過去[かこ]最高[さいこう]を記録[きろく]した。",
      "結城[ゆうき]は受験[じゅけん]勉強[べんきょう]と運動[うんどう]を両立[りょうりつ]させながら、次[つぎ]の段階[だんかい]として政党[せいとう]との対話[たいわ]を始[はじ]めた。彼[かれ]の言葉[ことば]は、政治[せいじ]への無関心[むかんしん]を変[か]える力[ちから]を持[も]ち始[はじ]めていた。",
      "民主主義[みんしゅしゅぎ]は完成[かんせい]された制度[せいど]ではなく、絶[た]えず問[と]い直[なお]される過程[かてい]である。結城[ゆうき]の行動[こうどう]は、そのことを私[わたし]たちに痛感[つうかん]させた。"
    ],
    translation: [
      "Yuki, a high school student, submitted a petition to the metropolitan assembly to lower the voting age from eighteen to sixteen. Behind him were twenty thousand signatures from across the country.",
      "The reason for the petition was clear. As low birthrates and population aging progressed, young people's influence on policy was declining year by year, while the burdens of pensions and taxes were merely being postponed to the future.",
      "Conservative assembly members opposed it, saying, 'Sixteen-year-olds lack political judgment.' In response, Yuki rebutted quietly but forcefully.",
      "'We already participate in elections at eighteen. Why would learning about politics two years earlier be dangerous?' he asked. Applause rose from the young people in the hall.",
      "On the other hand, there was wavering even within the pro side. Some activists took a cautious stance, saying, 'We should begin with local autonomy; reform of national politics is premature.'",
      "Yuki refused to compromise. He argued, 'Limiting young people to some regions runs counter to the principle of equality,' and he continued to demand a uniform national institutional revision.",
      "The petition was ultimately voted down. However, the record of the debate spread widely, and the youth turnout in the following year's national election reached a record high.",
      "Balancing exam preparation with activism, Yuki began dialogue with political parties as the next stage. His words had begun to carry the power to change political apathy.",
      "Democracy is not a finished system but a process of constantly being questioned. Yuki's actions made us keenly aware of that fact."
    ],
    vocab: [
      { word: "選挙権", reading: "せんきょけん", meaning: "suffrage; right to vote" },
      { word: "請願", reading: "せいがん", meaning: "petition" },
      { word: "少子高齢化", reading: "しょうしこうれいか", meaning: "declining birthrate and aging" },
      { word: "先送り", reading: "さきおくり", meaning: "postponement" },
      { word: "議員", reading: "ぎいん", meaning: "assembly member" },
      { word: "自治", reading: "じち", meaning: "autonomy" },
      { word: "尚早", reading: "しょうそう", meaning: "premature" },
      { word: "一律", reading: "いちりつ", meaning: "uniform" },
      { word: "否決", reading: "ひけつ", meaning: "rejection (of a motion)" },
      { word: "投票率", reading: "とうひょうりつ", meaning: "voter turnout" },
      { word: "両立", reading: "りょうりつ", meaning: "compatibility" },
      { word: "無関心", reading: "むかんしん", meaning: "apathy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-88 — A neuroscience discovery (脳科学の発見)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-88",
    title: "記憶[きおく]の形[かたち]",
    titleReading: "きおくのかたち",
    level: "N2",
    summary: "A research team identifies a single cluster of neurons whose coordinated firing encodes a specific episodic memory, reshaping the field's understanding of recall.",
    estMinutes: 7,
    tags: ["science", "neuroscience", "memory"],
    body: [
      "東京[とうきょう]の脳科学[のうかがく]研究所[けんきゅうじょ]で、記憶[きおく]の物理的[ぶつりてき]基盤[きばん]を突[つ]き止める発見[はっけん]が発表[はっぴょう]された。論文[ろんぶん]は国際[こくさい]誌[し]の表紙[ひょうし]を飾[かざ]った。",
      "主任[しゅにん]研究員[けんきゅういん]の鳥居[とりい]は、マウス[まうす]の海馬[かいば]にある特定[とくてい]の細胞[さいぼう]集団[しゅうだん]が、一[ひと]つの情景[じょうけい]記憶[きおく]を担[にな]うことを証明[しょうめい]した。彼女[かのじょ]はこれを「記憶[きおく]細胞[さいぼう]群[ぐん]」と名付け[なづけ]た。",
      "実験[じっけん]では、光[ひかり]を用[もち]いて特定[とくてい]の細胞[さいぼう]だけを活性化[かっせいか]する技術[ぎじゅつ]が使[つか]われた。その群[ぐん]を光[ひかり]で刺激[しげき]すると、動物[どうぶつ]は経験[けいけん]していない場所[ばしょ]で足[あし]を止[と]め、見[み]たことのない物体[ぶったい]を探[さが]し始[はじ]めた。",
      "これまで記憶[きおく]は脳[のう]全体[ぜんたい]に分散[ぶんさん]していると考[かんが]えられてきた。鳥居[とりい]の発見[はっけん]は、その前提[ぜんてい]を一部[いちぶ]覆[くつがえ]すものであり、研究者[けんきゅうしゃ]の間[あいだ]に衝撃[しょうげき]を与[あた]えた。",
      "発見[はっけん]の意義[いぎ]は、記憶[きおく]喪失[そうしつ]の治療[ちりょう]にも及[およ]んだ。細胞[さいぼう]群[ぐん]が損傷[そんしょう]していても、電気[でんき]刺激[しげき]で別[べつ]の群[ぐん]に記憶[きおく]を「再割[さいわ]り当[あ]て」する可能性[かのうせい]が示唆[しさ]された。",
      "しかし、倫理的[りんりてき]な懸念[けねん]も即座[そくざ]に浮上[ふじょう]した。「記憶[きおく]を操作[そうさ]できるなら、過去[かこ]を書[か]き換[か]えることができる」という問[と]いである。鳥居[とりい]はこの点[てん]を重[おも]く受[う]け止[と]めた。",
      "彼女[かのじょ]は記者[きしゃ]会見[かいけん]で、「技術[ぎじゅつ]は中立[ちゅうりつ]であっても、使[つか]い方[かた]はそうではない。私[わたし]たちは応用[おうよう]の限界[げんかい]を自[みずか]ら設[もう]ける必要[ひつよう]がある」と語[かた]った。",
      "研究[けんきゅう]チーム[ちーむ]は現在[げんざい]、応用[おうよう]よりも基礎[きそ]理解[りかい]を優先[ゆうせん]する方針[ほうしん]をとっている。記憶[きおく]のメカニズム[めかにずむ]が完全[かんぜん]に解明[かいめい]されるには、まだ十年[じゅうねん]以上[いじょう]かかる見通[みとお]しだ。",
      "私は論文[ろんぶん]を読[よ]み終[お]えて、自分[じぶん]の記憶[きおく]さえも細胞[さいぼう]の群[ぐん]に過[す]ぎないという事実[じじつ]に、奇妙[きみょう]な畏敬[いけい]を覚[おぼ]えた。"
    ],
    translation: [
      "At a neuroscience institute in Tokyo, a discovery identifying the physical basis of memory was announced. The paper graced the cover of an international journal.",
      "Lead researcher Torii proved that a specific cluster of cells in the mouse hippocampus carries a single episodic memory. She named them a 'memory cell ensemble.'",
      "The experiment used a technique that activates only specific cells with light. When that cluster was optically stimulated, the animal stopped in a place it had never experienced and began searching for an object it had never seen.",
      "Until now, memory had been thought to be distributed across the entire brain. Torii's discovery partially overturned that premise and sent shockwaves among researchers.",
      "The significance of the discovery extended to the treatment of memory loss. Even when the cell ensemble is damaged, the possibility of 're-allocating' the memory to another ensemble through electrical stimulation was suggested.",
      "However, ethical concerns immediately surfaced as well. It was the question: 'If memory can be manipulated, the past can be rewritten.' Torii took this point seriously.",
      "At a press conference she said, 'Even if the technology is neutral, the way it is used is not. We ourselves need to set limits on its application.'",
      "The team currently prioritizes basic understanding over application. It is estimated that more than ten years will be needed before the mechanism of memory is fully elucidated.",
      "Finishing the paper, I felt a strange reverence for the fact that even my own memory is no more than a cluster of cells."
    ],
    vocab: [
      { word: "海馬", reading: "かいば", meaning: "hippocampus" },
      { word: "細胞", reading: "さいぼう", meaning: "cell" },
      { word: "集団", reading: "しゅうだん", meaning: "cluster; group" },
      { word: "活性化", reading: "かっせいか", meaning: "activation" },
      { word: "刺激", reading: "しげき", meaning: "stimulation" },
      { word: "分散", reading: "ぶんさん", meaning: "distribution" },
      { word: "覆す", reading: "くつがえす", meaning: "to overturn" },
      { word: "示唆", reading: "しさ", meaning: "suggestion; implication" },
      { word: "懸念", reading: "けねん", meaning: "concern" },
      { word: "中立", reading: "ちゅうりつ", meaning: "neutral" },
      { word: "解明", reading: "かいめい", meaning: "elucidation" },
      { word: "畏敬", reading: "いけい", meaning: "awe; reverence" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-89 — An urban planning revolution (都市計画の革命)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-89",
    title: "車[くるま]を捨[す]てた街[まち]",
    titleReading: "くるまをすてたまち",
    level: "N2",
    summary: "A mid-sized European city reorganizes itself around pedestrians, transit, and green corridors, provoking fierce resistance before becoming an international model.",
    estMinutes: 6,
    tags: ["urban", "transport", "environment"],
    body: [
      "オランダ[おらんだ]の中[ちゅう]規模[きぼ]都市[とし]フローネン[ふろーねん]は、二〇年[にじゅうねん]にわたる計画[けいかく]で市内[しない]の車[くるま]依存[いぞん]を九割[きゅうわり]減[へ]らした。その過程[かてい]は「都市[とし]革命[かくめい]」と呼[よ]ばれた。",
      "改革[かいかく]の中心[ちゅうしん]は、リーネ[りーね]市長[しちょう]であった。彼女[かのじょ]は就任[しゅうにん]直後[ちょくご]、都心[としん]の主要[しゅよう]道路[どうろ]を歩行者[ほこうしゃ]専用[せんよう]化[か]する条例[じょうれい]を発[はっ]布[ぷ]した。反発[はんぱつ]は即座[そくざ]に起[お]きた。",
      "商店[しょうてん]主[しゅ]たちは「客[きゃく]が来[こ]なくなる」と抗議[こうぎ]した。しかしリーネ[りーね]は、「歩[ある]く人[ひと]は車[くるま]より長[なが]く店[みせ]の前[まえ]に留[とど]まる」と説[と]き続[つづ]け、同時[どうじ]に無料[むりょう]の電動[でんどう]カート[かーと]を導入[どうにゅう]した。",
      "公共交通[こうきょうこうつう]も抜[ぬ]本的[ほんてき]に見直[みなお]された。路面[ろめん]電車[でんしゃ]の路線[ろせん]が倍[ばい]に拡張[かくちょう]され、運行[うんこう]間隔[かんかく]は五分[ごふん]以内[いない]に短縮[たんしゅく]された。料金[りょうきん]は一律[いちりつ]一[いっ]ユーロ[ゆーろ]に統一[とういつ]された。",
      "最大[さいだい]の争点[そうてん]は、住民[じゅうみん]駐車場[ちゅうしゃじょう]の撤去[てっきょ]であった。市[し]は代替[だいたい]として、市境[しざかい]に大規模[だいきぼ]な駐車場[ちゅうしゃじょう]を建設[けんせつ]し、そこから中心部[ちゅうしんぶ]へ無料[むりょう]シャトル[しゃとる]を運行[うんこう]した。",
      "五年[ごねん]後[ご]、空気[くうき]は変[か]わっていた。微細[びさい]粉塵[ふんじん]の濃度[のうど]は半減[はんげん]し、子[こ]どもの通学[つうがく]路[ろ]の事故[じこ]は三分[さんぶん]の一[いち]になった。商店[しょうてん]の売上[うりあげ]は逆[ぎゃく]に二割[にわり]伸[の]びた。",
      "緑化[りょっか]も進[すす]んだ。旧[きゅう]駐車場[ちゅうしゃじょう]の半分[はんぶん]は公園[こうえん]に変[か]わり、住民[じゅうみん]が野菜[やさい]を育[そだ]てる共同[きょうどう]畑[はたけ]も設[もう]けられた。地域[ちいき]の交流[こうりゅう]は飛躍的[ひやくてき]に増[ふ]えた。",
      "国際的[こくさいてき]な注目[ちゅうもく]を集[あつ]め、現在[げんざい]は百[ひゃく]以上[いじょう]の都市[とし]がフローネン[ふろーねん]を視察[しさつ]に訪[おとず]れている。リーネ[りーね]は「真似[まね]する必要[ひつよう]はない。各[かく]都市[とし]が自分[じぶん]の答[こた]えを出せ[だせ]ばいい」と語[かた]る。",
      "私[わたし]は報道[ほうどう]を見[み]て、街[まち]を作[つく]るという選択[せんたく]が、人[ひと]の暮[く]らしを根本[こんぽん]から変[か]える力[ちから]を持[も]つことを改[あらた]めて認[みと]めた。"
    ],
    translation: [
      "The mid-sized Dutch city of Vronen reduced its car dependency by ninety percent over a twenty-year plan. The process was called an 'urban revolution.'",
      "At the center of the reform was Mayor Lien. Shortly after taking office she issued an ordinance converting major downtown roads to pedestrian-only use. Resistance arose immediately.",
      "Shopkeepers protested, saying, 'Customers will stop coming.' But Lien continued to argue that 'people on foot linger longer in front of shops than cars do,' and simultaneously introduced free electric carts.",
      "Public transportation was also fundamentally reviewed. Tram routes were doubled in length, and service intervals were shortened to within five minutes. Fares were unified at a flat rate of one euro.",
      "The biggest point of contention was the removal of residential parking lots. As an alternative, the city built large parking facilities at the city limits and ran free shuttles from there to the center.",
      "Five years later, the air had changed. The concentration of fine particulates was halved, and accidents on children's routes to school fell to a third. Shop revenues, conversely, grew by twenty percent.",
      "Greenification also progressed. Half of former parking lots became parks, and communal fields where residents grow vegetables were established. Community interaction increased dramatically.",
      "Attracting international attention, more than one hundred cities now visit Vronen for inspection. Lien says, 'There's no need to imitate. Each city should find its own answer.'",
      "Watching the coverage, I reaffirmed that the choice of how a city is built has the power to change people's lives fundamentally."
    ],
    vocab: [
      { word: "依存", reading: "いぞん", meaning: "dependence" },
      { word: "条例", reading: "じょうれい", meaning: "ordinance" },
      { word: "歩行者", reading: "ほこうしゃ", meaning: "pedestrian" },
      { word: "専用", reading: "せんよう", meaning: "exclusive use" },
      { word: "路面電車", reading: "ろめんでんしゃ", meaning: "tram" },
      { word: "短縮", reading: "たんしゅく", meaning: "shortening" },
      { word: "争点", reading: "そうてん", meaning: "point of contention" },
      { word: "代替", reading: "だいたい", meaning: "substitute" },
      { word: "粉塵", reading: "ふんじん", meaning: "dust; particulates" },
      { word: "視察", reading: "しさつ", meaning: "inspection" },
      { word: "緑化", reading: "りょっか", meaning: "greenification" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-90 — A post-truth media landscape (ポスト真実のメディア)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-90",
    title: "事実[じじつ]の市場[しじょう]",
    titleReading: "じじつのしじょう",
    level: "N2",
    summary: "A fact-checking editor at a struggling news outlet confronts an algorithm-driven ecosystem where sensational falsehoods outpace careful verification.",
    estMinutes: 7,
    tags: ["media", "disinformation", "society"],
    body: [
      "新聞[しんぶん]記者[きしゃ]の倫子[りんこ]は、ある朝[あさ]、自社[じしゃ]のファクトチェック[ふぁくとちぇっく]部門[ぶもん]が閉鎖[へいさ]されることを告[つ]げられた。理由[りゆう]は「採算[さいさん]が取[と]れない」という社[しゃ]内[ない]判断[はんだん]であった。",
      "彼女[かのじょ]のチーム[ちーむ]はこれまで五年間[ごねんかん]、拡散[かくさん]される偽情報[ぎじょうほう]を検証[けんしょう]し続[つづ]けてきた。その成果[せいか]は数字[すうじ]に現[あらわ]れにくく、経営[けいえい]陣[じん]には伝[つた]わりにくかった。",
      "同じ日[ひ]、別[べつ]のプラットフォーム[ぷらっとふぉーむ]では、彼女[かのじょ]が三日前[みっかまえ]に否定[ひてい]したデマ[でま]が、数百[すうひゃく]万[まん]回[かい]拡散[かくさん]されていた。アルゴリズム[あるごりずむ]は、真実[しんじつ]より興味[きょうみ]を優先[ゆうせん]する。",
      "倫子[りんこ]は独立[どくりつ]し、寄付[きふ]を基盤[きばん]とする新[あたら]しい検証[けんしょう]サイト[さいと]を立[た]ち上[あ]げた。資金[しきん]は乏[とぼ]しかったが、少数[しょうすう]の精鋭[せいえい]と技術者[ぎじゅつしゃ]が集[あつ]まった。",
      "最初[さいしょ]の仕事[しごと]は、ある大規模[だいきぼ]停電[ていでん]に関する陰謀論[いんぼうろん]の検証[けんしょう]であった。拡散[かくん]された動画[どうが]は巧妙[こうみょう]に編集[へんしゅう]され、専門家[せんもんか]でなければ見抜[みぬ]けない精度[せいど]であった。",
      "彼女[かのじょ]たちは三[みっ]日[か]かけて一次[いちじ]資料[しりょう]を洗[あら]い、元[もと]の映像[えいぞう]の差違[さいい]を可視化[かしか]した。記事[きじ]は公開[こうかい]されたが、訂正[ていせい]を届[とど]ける速度[そくど]は、嘘[うそ]の拡散[かくさん]には遠[とお]く及[およ]ばなかった。",
      "倫子[りんこ]は気[き]づいた。「速[はや]さ」で勝[か]つことは不可能[ふかのう]だ。彼女[かのじょ]たちは、信頼[しんらい]できる「遅[おそ]い情報[じょうほう]」の価値[かち]を少[すこ]しずつ育[はぐ]くむ方針[ほうしん]に切[き]り替[か]えた。",
      "読者[どくしゃ]の中[なか]には、毎日[まいにち]数分[すうふん]を彼女[かのじょ]のサイト[さいと]に費[つい]やす人[ひと]が増[ふ]え始[はじ]めた。深呼吸[しんこきゅう]する時間[じかん]のような価値[かち]が、少[すく]なくとも一部[いちぶ]の人[ひと]には伝[つた]わった。",
      "倫子[りんこ]はある講演[こうえん]で語[かた]った。「真実[しんじつ]は市場[しじょう]の商品[しょうひん]ではない。しかし、市場[しじょう]から完全[かんぜん]に消[き]えることのない商品[しょうひん]でもある。私[わたし]たちは、その光[ひかり]を点[つ]け続[つづ]けるしかない」"
    ],
    translation: [
      "One morning, newspaper reporter Rinko was told that her company's fact-checking division would be closed. The reason was an internal judgment that 'it is not profitable.'",
      "Her team had spent five years verifying disinformation as it spread. The results were difficult to show in numbers, and hard to convey to the management.",
      "That same day, on a different platform, a rumor she had debunked three days earlier was being spread millions of times. The algorithm prioritizes interest over truth.",
      "Rinko went independent and launched a new verification site funded by donations. Money was scarce, but a small group of elites and engineers gathered.",
      "The first job was to verify a conspiracy theory about a major blackout. The circulating video had been edited so cleverly that only an expert could detect it.",
      "They spent three days sifting through primary sources and visualized the discrepancies with the original footage. The article was published, but the speed at which the correction reached people fell far short of the spread of the lie.",
      "Rinko realized that winning on 'speed' was impossible. She shifted her policy to slowly nurturing the value of reliable 'slow information.'",
      "Among readers, those who spent a few minutes each day on her site began to increase. A value akin to a moment to take a deep breath reached, at least, some people.",
      "At one lecture, Rinko said, 'Truth is not a commodity in the marketplace. Yet it is also a commodity that never completely disappears from the marketplace. All we can do is keep its light lit.'"
    ],
    vocab: [
      { word: "ファクトチェック", reading: "ふぁくとちぇっく", meaning: "fact-checking" },
      { word: "閉鎖", reading: "へいさ", meaning: "closure" },
      { word: "採算", reading: "さいさん", meaning: "profitability" },
      { word: "偽情報", reading: "ぎじょうほう", meaning: "false information" },
      { word: "検証", reading: "けんしょう", meaning: "verification" },
      { word: "陰謀論", reading: "いんぼうろん", meaning: "conspiracy theory" },
      { word: "編集", reading: "へんしゅう", meaning: "editing" },
      { word: "一次資料", reading: "いちじしりょう", meaning: "primary source" },
      { word: "訂正", reading: "ていせい", meaning: "correction" },
      { word: "可視化", reading: "かしか", meaning: "visualization" },
      { word: "精鋭", reading: "せいえい", meaning: "elite" },
      { word: "寄付", reading: "きふ", meaning: "donation" }
    ]
  }
];
