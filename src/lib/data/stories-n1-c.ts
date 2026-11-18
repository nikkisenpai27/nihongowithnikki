import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a contiguous run of kanji attaches as
// furigana to that run. Adjacent kanji compounds carry one furigana
// (e.g. 量子[りょうし]); kanji split by okurigana get separate furigana
// (e.g. 振[ふ]る舞[ま]い). 々 is outside the kanji range and is left bare,
// so words like 人々 are written 人[ひと]々. See src/lib/types.ts & furigana.tsx.
// 10 N1 stories: sx-n1-21 .. sx-n1-30.

export const storiesN1C: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n1-21 — A quantum mystery
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-21",
    title: "観測[かんそく]の代償[だいしょう]",
    titleReading: "かんそくのだいしょう",
    level: "N1",
    summary: "A renowned quantum physicist, obsessed with proving that observation can rewrite reality, activates a forbidden apparatus and vanishes, leaving behind only a notebook and equations premised on a watched universe.",
    estMinutes: 8,
    tags: ["quantum", "physics", "mystery"],
    body: [
      "量子[りょうし]物理学[ぶつりがく]の権威[けんい]である佐伯[さえき]教授[きょうじゅ]は、十年[じゅうねん]にわたる研究[けんきゅう]の末[すえ]、一[ひと]つの禁忌[きんき]に触[ふ]れてしまった。",
      "彼[かれ]が提唱[ていしょう]した「観測[かんそく]干渉[かんしょう]理論[りろん]」は、微視的[びしてき]な粒子[りゅうし]の振[ふ]る舞[ま]いを決定[けってい]づけるのみならず、巨視的[きょしてき]な現実[げんじつ]をも書[か]き換[か]える可能性[かのうせい]を示唆[しさ]していた。",
      "学会[がっかい]の批判[ひはん]をものともせず、彼[かれ]は孤立[こりつ]した実験室[じっけんしつ]で禁断[きんだん]の装置[そうち]を起動[きどう]させずにはおかなかった。",
      "装置[そうち]が唸[うな]りを上[あ]げた瞬間[しゅんかん]、空間[くうかん]が歪[ゆが]み、目[め]の前[まえ]で二[ふた]つの現実[げんじつ]が重[かさ]なり合[あ]った。",
      "一[ひと]つは彼[かれ]が既[すで]に知[し]る世界[せかい]、もう一[ひと]つは彼[かれ]が決[けっ]して到[いた]り着[つ]くことのなかった平行[へいこう]世界[せかい]である。",
      "佐伯[さえき]は慄[おのの]いた。自[みずか]らの観測[かんそく]が、あるかもしれなかった現実[げんじつ]を殺[ころ]し、ただ一[ひと]つの可能性[かのうせい]を強[し]いるのだと。",
      "「神[かみ]の領域[りょういき]を侵[おか]した」との非難[ひなん]が学会[がっかい]から殺到[さっとう]し、彼[かれ]の名声[めいせい]は地[ち]に落[お]ちた。",
      "されど、彼[かれ]の目[め]には恐怖[きょうふ]と同時[どうじ]に、科学的[かがくてき]好奇心[こうきしん]の光[ひかり]が宿[やど]っていた。",
      "真理[しんり]を知[し]る者[もの]が背負[せお]う孤独[こどく]は、彼[かれ]をして深夜[しんや]の実験室[じっけんしつ]に留[とど]まらしめた。",
      "最終的[さいしゅうてき]に彼[かれ]は記[しる]した。「観測[かんそく]とは選択[せんたく]にほかならない。そして選択[せんたく]とは、他[ほか]の可能性[かのうせい]の葬儀[そうぎ]にほかならない」",
      "翌朝[よくちょう]、実験室[じっけんしつ]の扉[とびら]は内側[うちがわ]から鍵[かぎ]がかけられ、佐伯[さえき]の姿[すがた]はどこにもなかった。",
      "残[のこ]されたのは、一[ひと]つのノートと、宇宙[うちゅう]が誰[だれ]かに見[み]られていることを前提[ぜんてい]とする数式[すうしき]のみであった。"
    ],
    translation: [
      "Professor Saeki, an authority on quantum physics, touched upon a forbidden area after ten years of research.",
      "His 'Observation Interference Theory' suggested that it not only determines the behavior of microscopic particles but also holds the possibility of rewriting macroscopic reality.",
      "Undaunted by the academic society's criticism, he could not refrain from activating the forbidden device in an isolated laboratory.",
      "The moment the device hummed, space warped, and two realities overlapped before his eyes.",
      "One was the world he already knew, the other a parallel world he would never have reached.",
      "Saeki trembled. His own observation killed the reality that might have been, and forced only a single possibility.",
      "Accusations of 'invading the domain of God' poured in from the academic society, and his reputation fell to the ground.",
      "Nevertheless, in his eyes, alongside the fear, the light of scientific curiosity still dwelt.",
      "The loneliness borne by one who knows the truth kept him in the laboratory late into the night.",
      "Finally he wrote, 'Observation is nothing other than choice. And choice is nothing other than the funeral of other possibilities.'",
      "The next morning, the laboratory door was locked from within, and Saeki was nowhere to be found.",
      "What remained was a single notebook, and equations premised on the assumption that the universe is being watched by someone."
    ],
    vocab: [
      { word: "量子", reading: "りょうし", meaning: "quantum" },
      { word: "観測", reading: "かんそく", meaning: "observation" },
      { word: "干渉", reading: "かんしょう", meaning: "interference" },
      { word: "示唆", reading: "しさ", meaning: "suggestion; implication" },
      { word: "禁忌", reading: "きんき", meaning: "taboo" },
      { word: "起動", reading: "きどう", meaning: "activation" },
      { word: "歪む", reading: "ゆがむ", meaning: "to warp" },
      { word: "平行", reading: "へいこう", meaning: "parallel" },
      { word: "慄く", reading: "おののく", meaning: "to tremble" },
      { word: "侵す", reading: "おかす", meaning: "to invade" },
      { word: "領域", reading: "りょういき", meaning: "domain" },
      { word: "宿る", reading: "やどる", meaning: "to dwell" },
      { word: "前提", reading: "ぜんてい", meaning: "premise" },
      { word: "数式", reading: "すうしき", meaning: "equation" },
      { word: "名声", reading: "めいせい", meaning: "reputation" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-22 — A literary criticism
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-22",
    title: "沈黙[ちんもく]の修辞学[しゅうじがく]",
    titleReading: "ちんもくのしゅうじがく",
    level: "N1",
    summary: "A deceased author's final work consists entirely of blank pages; a young literary critic argues this silence is itself a rhetoric, but her thesis splits the academy and risks turning a sacred silence into a tourist spectacle.",
    estMinutes: 9,
    tags: ["literature", "criticism", "silence"],
    body: [
      "亡[な]くなった作家[さっか]・神崎[かんざき]の遺作[いさく]『空白[くうはく]の書[しょ]』は、全[すべ]てのページが白紙[はくし]という異例[いれい]の構成[こうせい]で世[よ]に出[で]た。",
      "批評界[ひひょうかい]は当惑[とうわく]に暮[く]れ、販売部数[はんばいぶすう]の伸[の]び悩[なや]みを冷笑[れいしょう]する声[こえ]すら漏[も]れた。",
      "されど、文芸[ぶんげい]評論家[ひょうろんか]の島木[しまき]は、この沈黙[ちんもく]にこそ神崎[かんざき]文学[ぶんがく]の真髄[しんずい]が潜[ひそ]むと直感[ちょっかん]した。",
      "彼女[かのじょ]に言[い]わせれば、文字[もじ]の不在[ふざい]は単[たん]なる欠落[けつらく]ではなく、読者[どくしゃ]に想像[そうぞう]を強[し]いる積極的[せっきょくてき]な修辞[しゅうじ]であった。",
      "神崎[かんざき]の過去[かこ]の作品[さくひん]を精読[せいどく]するにつけ、彼[かれ]が徐[じょ]々に語[かた]ることを手放[てばな]してきた軌跡[きせき]が浮[う]かび上[あ]がる。",
      "晩年[ばんねん]の彼[かれ]は、言語[げんご]の限界[げんかい]に苛立[いらだ]ち、沈黙[ちんもく]をもって真理[しんり]を表現[ひょうげん]しようと試[こころ]みた節[ぶし]がある。",
      "島木[しまき]の論文[ろんぶん]は、空白[くうはく]を「語[かた]り得[う]ぬものの哲学[てつがく]」と再定義[さいていぎ]し、学界[がっかい]に波紋[はもん]を呼[よ]んだ。",
      "一派[いっぱ]の論客[ろんきゃく]はこれを過剰[かじょう]解釈[かいしゃく]と断[だん]じ、作品[さくひん]の価値[かち]を不当[ふとう]に引[ひ]き上[あ]げる偏向[へんこう]だと非難[ひなん]した。",
      "しかし島木[しまき]は怯[ひる]むことなく、沈黙[ちんもく]に耐[た]え得[う]る読者[どくしゃ]のみが真[しん]の文学的[ぶんがくてき]体験[たいけん]に到達[とうたつ]し得[う]ると主張[しゅちょう]した。",
      "彼女[かのじょ]の論考[ろんこう]が世[よ]に問[と]うたのは、一[ひと]つの仮説[かせつ]に過[す]ぎなかったかもしれない。",
      "それにもかかわらず、空白[くうはく]のページが読者[どくしゃ]の胸[むね]に広[ひろ]げた余白[よはく]の深[ふか]さは、言葉[ことば]をもってしては計[はか]り知[し]れない。",
      "神崎[かんざき]は最後[さいご]まで語[かた]らぬことで、語[かた]り得[う]る限[かぎ]りの人[ひと]を凌[しの]ごうとしたのである。"
    ],
    translation: [
      "The posthumous work of the deceased author Kanzaki, 'The Book of Blankness,' was published with the unprecedented structure of all pages being blank.",
      "The criticism world was thrown into bewilderment, and voices even leaked that sneered at the sluggish sales.",
      "Nevertheless, the literary critic Shimaki intuited that in this silence lurked the true essence of Kanzaki's literature.",
      "In her view, the absence of letters was not a mere deficiency but an active rhetoric that forced imagination upon the reader.",
      "The more closely she read Kanzaki's past works, the clearer the trajectory emerged of how he had gradually relinquished speaking.",
      "There are signs that in his later years he was irritated by the limits of language and attempted to express truth through silence.",
      "Shimaki's thesis redefined blankness as 'the philosophy of the ineffable' and sent ripples through the academic world.",
      "A faction of polemicists dismissed it as overinterpretation and denounced it as a bias that unduly inflated the work's value.",
      "Yet Shimaki did not flinch, arguing that only readers who could endure silence were capable of reaching a genuine literary experience.",
      "What her essay posed to the world may have been no more than a hypothesis.",
      "Nevertheless, the depth of the margin that the blank pages spread across the reader's heart is immeasurable by words.",
      "Kanzaki, to the very end, by refusing to speak, attempted to surpass all those who could only speak to a certain limit."
    ],
    vocab: [
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "遺作", reading: "いさく", meaning: "posthumous work" },
      { word: "空白", reading: "くうはく", meaning: "blankness" },
      { word: "当惑", reading: "とうわく", meaning: "bewilderment" },
      { word: "真髄", reading: "しんずい", meaning: "true essence" },
      { word: "直感", reading: "ちょっかん", meaning: "intuition" },
      { word: "精読", reading: "せいどく", meaning: "close reading" },
      { word: "軌跡", reading: "きせき", meaning: "trajectory" },
      { word: "苛立つ", reading: "いらだつ", meaning: "to be irritated" },
      { word: "波紋", reading: "はもん", meaning: "ripples" },
      { word: "過剰", reading: "かじょう", meaning: "excessive" },
      { word: "偏向", reading: "へんこう", meaning: "bias" },
      { word: "論考", reading: "ろんこう", meaning: "essay; treatise" },
      { word: "余白", reading: "よはく", meaning: "margin" },
      { word: "凌ぐ", reading: "しのぐ", meaning: "to surpass" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-23 — A diplomatic failure
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-23",
    title: "途絶[とだ]えた協定[きょうてい]",
    titleReading: "とだえたきょうてい",
    level: "N1",
    summary: "A veteran diplomat, on the eve of retirement, mishandles a final concession and publicly wounds the counterpart's face, collapsing a two-decade treaty and consigning bilateral trust to decades of rebuilding.",
    estMinutes: 7,
    tags: ["diplomacy", "failure", "negotiation"],
    body: [
      "駐在大使[ちゅうざいたいし]として二十年[にじゅうねん]を費[つい]やすした外務[がいむ]官僚[かんりょう]・林[はやし]は、自身[じしん]の引退[いんたい]を間近[まぢか]に控[ひか]えた最後[さいご]の任務[にんむ]に臨[のぞ]んでいた。",
      "二国間[にこくかん]の自由貿易[じゆうぼうえき]協定[きょうてい]は十数年[じゅうすうねん]の交渉[こうしょう]を経[へ]て最終[さいしゅう]段階[だんかい]にあり、あと一歩[いっぽ]で合意[ごうい]に至[いた]るはずであった。",
      "林[はやし]は相手[あいて]国[こく]の首席[しゅせき]代表[だいひょう]と旧知[きゅうち]の仲[ちゅう]であり、互[たが]いの文化[ぶんか]にも通[つう]じていたため、成否[せいひ]の鍵[かぎ]は彼[かれ]の手腕[しゅわん]にかかっていた。",
      "されど、調印[ちょういん]前夜[ぜんや]、林[はやし]は一[ひと]つの判断[はんだん]ミスを犯[おか]した。相手[あいて]側[がわ]が絶対[ぜったい]に譲[ゆず]れないと表明[ひょうめい]していた項目[こうもく]を、最後[さいご]の譲歩[じょうほ]として要求[ようきゅう]してしまったのである。",
      "これは単[たん]なる戦術的[せんじゅつてき]な駆[く]け引[ひ]きの失敗[しっぱい]にとどまらず、相手[あいて]側[がわ]の面子[めんつ]を公[おおやけ]に傷[きず]つける結果[けっか]を招[まね]いた。",
      "翌朝[よくちょう]、相手[あいて]国[こく]の代表[だいひょう]団[だん]は交渉[こうしょう]の打[う]ち切[き]りを宣言[せんげん]し、協定[きょうてい]は二十年[にじゅうねん]の努力[どりょく]を水[みず]の泡[あわ]として帰[き]した。",
      "林[はやし]の上司[じょうし]は激怒[げきど]し、彼[かれ]を更迭[こうてつ]するとともに、外務省[がいむしょう]の権威[けんい]回復[かいふく]に奔走[ほんそう]した。",
      "失敗[しっぱい]の原因[げんいん]は、林[はやし]が自[みずか]らの手腕[しゅわん]に過信[かしん]し、相手[あいて]側[がわ]の底[そこ]意[い]を見[み]誤[あやま]ったことにあった。",
      "彼[かれ]は引退[いんたい]後[ご]、後[のち]に回想[かいそう]録[ろく]を著[あらわ]し、あの夜[よる]の過[あやま]ちが国[くに]と国[くに]の未来[みらい]をどれほど閉[と]ざしたかを綴[つづ]った。",
      "「外交[がいこう]は人心[じんしん]の芸術[げいじゅつ]である」と彼[かれ]は記[しる]した。技量[ぎりょう]のみで通[つう]じると思[おも]うことこそが、最大[さいだい]の傲慢[ごうまん]であった。",
      "二国間[にこくかん]の信頼[しんらい]は再[ふたた]び構築[こうちく]に数十年[すうじゅうねん]を要[よう]するだろう、と識者[しきしゃ]は悲観的[ひかんてき]に予測[よそく]している。",
      "林[はやし]は今[いま]、国[くに]の片隅[かたすみ]で、失[うしな]われた可能性[かのうせい]の重[おも]みに一人[ひとり]耐[た]え忍[しの]んでいる。"
    ],
    translation: [
      "Hayashi, a Foreign Ministry bureaucrat who had spent twenty years as ambassador, was about to face his final mission just before retirement.",
      "The free-trade agreement between the two nations, after more than ten years of negotiation, was in its final stage, and agreement was supposed to be only one step away.",
      "Hayashi and the counterpart nation's chief representative were old acquaintances, and he was well-versed in both cultures, so the key to success or failure rested on his skill.",
      "However, on the eve of signing, Hayashi committed a misjudgment: he demanded, as a final concession, an item the other side had declared absolutely non-negotiable.",
      "This was not merely a tactical bargaining failure but invited the consequence of publicly wounding the other side's face.",
      "The next morning, the counterpart's delegation declared the negotiations terminated, and the agreement reduced twenty years of effort to bubbles on water.",
      "Hayashi's superior, furious, dismissed him and scrambled to restore the authority of the Foreign Ministry.",
      "The cause of failure lay in Hayashi's overconfidence in his own skill and his misreading of the other side's true intent.",
      "After retirement, he later authored a memoir and described how the mistake of that night had closed off the future of both nations.",
      "'Diplomacy is the art of human hearts,' he wrote. To believe one can get by on technique alone was the height of arrogance.",
      "Pessimistic observers predict that the trust between the two nations will require decades to rebuild.",
      "Hayashi now, in a corner of the country, alone endures the weight of lost possibility."
    ],
    vocab: [
      { word: "途絶える", reading: "とだえる", meaning: "to be severed" },
      { word: "協定", reading: "きょうてい", meaning: "agreement" },
      { word: "駐在", reading: "ちゅうざい", meaning: "residency (as ambassador)" },
      { word: "費やす", reading: "ついやす", meaning: "to spend" },
      { word: "駆け引き", reading: "かけひき", meaning: "bargaining" },
      { word: "更迭", reading: "こうてつ", meaning: "dismissal" },
      { word: "奔走", reading: "ほんそう", meaning: "running about (to achieve)" },
      { word: "過信", reading: "かしん", meaning: "overconfidence" },
      { word: "見誤る", reading: "みあやまる", meaning: "to misjudge" },
      { word: "回想", reading: "かいそう", meaning: "recollection" },
      { word: "傲慢", reading: "ごうまん", meaning: "arrogance" },
      { word: "構築", reading: "こうちく", meaning: "construction" },
      { word: "識者", reading: "しきしゃ", meaning: "informed person" },
      { word: "悲観的", reading: "ひかんてき", meaning: "pessimistic" },
      { word: "耐え忍ぶ", reading: "たえしのぶ", meaning: "to endure" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-24 — A medical ethics case
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-24",
    title: "延命[えんめい]の代償[だいしょう]",
    titleReading: "えんめいのだいしょう",
    level: "N1",
    summary: "A pediatrician tending a brain-dead twelve-year-old must navigate the parents' irreconcilable wishes and his own oath, gradually realizing that prolonging life is not always the same as salvation.",
    estMinutes: 8,
    tags: ["bioethics", "medicine", "end-of-life"],
    body: [
      "脳死[のうし]状態[じょうたい]の患者[かんじゃ]を前[まえ]に、小児科[しょうにか]医[い]の桐生[きりゅう]は長[なが]い沈黙[ちんもく]を保[たも]っていた。",
      "十二歳[じゅうにさい]の少年[しょうねん]は事故[じこ]により回復[かいふく]の見込[みこ]みなく、機械[きかい]に生命[せいめい]を維持[いじ]されていた。",
      "母[はは]親[おや]は延命[えんめい]治療[ちりょう]の継続[けいぞく]を求[もと]め、父[ちち]親[おや]は治療[ちりょう]の停止[ていし]を主張[しゅちょう]するという、家族[かぞく]の意見[いけん]は真[ま]二[ふた]つに割[わ]れていた。",
      "法的[ほうてき]には、治療[ちりょう]の停止[ていし]を決[き]める権限[けんげん]は法定[ほうてい]代理人[だいりにん]にあるが、両親[りょうしん]の合意[ごうい]が形成[けいせい]されない限[かぎ]り、医師[いし]は動[うご]けない。",
      "桐生[きりゅう]は倫理[りんり]委員会[いいんかい]に諮[はか]ったが、答[こた]えは「判断[はんだん]を保留[ほりゅう]せよ」という曖昧[あいまい]なものであった。",
      "一方[いっぽう]、病状[びょうじょう]は悪化[あっか]の一途[いっと]を辿[たど]り、機械[きかい]に依存[いぞん]する日[ひ]々が少年[しょうねん]の体[からだ]を痩[や]せ細[ほそ]らせていた。",
      "桐生[きりゅう]は自[みずか]らの内心[ないしん]と向[む]き合[あ]った。彼[かれ]は延命[えんめい]を是[ぜ]とするのか、それとも安[あん]らかな死[し]を是[ぜ]とするのか。",
      "医師[いし]たる者[もの]、生命[せいめい]を救[すく]うことを誓[ちか]いとした以上[いじょう]、その逆[ぎゃく]を行[い]く判断[はんだん]を下[くだ]すことは、彼[かれ]にとって耐[た]え難[がた]い重圧[じゅうあつ]であった。",
      "しかし、彼[かれ]は次第[しだい]に気[き]づき始[はじ]めた。延命[えんめい]とは必[かなら]ずしも救済[きゅうさい]であるとは限[かぎ]らず、単[たん]に時間[じかん]を引[ひ]き延[の]ばすだけの行為[こうい]に過[す]ぎない場合[ばあい]もあるということに。",
      "三[みっ]ヶ月[かげつ]後[ご]、両親[りょうしん]はついに合意[ごうい]に達[たっ]し、機械[きかい]の電源[でんげん]が切[き]られた。",
      "少年[しょうねん]の最期[さいご]は静[しず]かであり、桐生[きりゅう]はその小[ちい]さな手[て]を握[にぎ]り続[つづ]けた。",
      "彼[かれ]はこの経験[けいけん]を通[つう]じて、医療[いりょう]倫理[りんり]とは正解[せいかい]を求[もと]める学問[がくもん]ではなく、問[と]い続[つづ]ける営[いとな]みであると悟[さと]ったのである。"
    ],
    translation: [
      "Before the brain-dead patient, the pediatrician Kiryu kept a long silence.",
      "The twelve-year-old boy had no prospect of recovery from an accident, and his life was sustained by machines.",
      "The mother demanded continuation of life-prolonging treatment while the father advocated cessation, and the family's opinion was split in two.",
      "Legally, the authority to decide on stopping treatment lies with the legal guardian, but without consensus between the parents, the doctor cannot act.",
      "Kiryu consulted the ethics committee, but the answer was ambiguous: suspend judgment.",
      "Meanwhile, the condition went from bad to worse, and days dependent on machines made the boy's body waste away.",
      "Kiryu confronted his own inner self. Did he affirm prolonging life, or did he affirm a peaceful death?",
      "As a physician, having sworn to save lives, making a judgment that ran counter to that was an unbearable pressure for him.",
      "However, he gradually began to realize that prolonging life was not necessarily salvation, and could be no more than an act that merely stretched out time.",
      "Three months later, the parents finally reached agreement, and the machines were turned off.",
      "The boy's last moments were quiet, and Kiryu kept holding that small hand.",
      "Through this experience, he came to realize that medical ethics is not a discipline that seeks correct answers but an endeavor of continual questioning."
    ],
    vocab: [
      { word: "脳死", reading: "のうし", meaning: "brain death" },
      { word: "延命", reading: "えんめい", meaning: "life prolongation" },
      { word: "代償", reading: "だいしょう", meaning: "price; compensation" },
      { word: "見込み", reading: "みこみ", meaning: "prospect" },
      { word: "維持", reading: "いじ", meaning: "maintenance" },
      { word: "法定", reading: "ほうてい", meaning: "statutory" },
      { word: "代理人", reading: "だいりにん", meaning: "representative" },
      { word: "諮る", reading: "はかる", meaning: "to consult" },
      { word: "曖昧", reading: "あいまい", meaning: "ambiguous" },
      { word: "依存", reading: "いぞん", meaning: "dependence" },
      { word: "重圧", reading: "じゅうあつ", meaning: "heavy pressure" },
      { word: "救済", reading: "きゅうさい", meaning: "salvation" },
      { word: "最期", reading: "さいご", meaning: "one's last moments" },
      { word: "営み", reading: "いとなみ", meaning: "endeavor" },
      { word: "悟る", reading: "さとる", meaning: "to realize" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-25 — A technological dependency
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-25",
    title: "回線[かいせん]のない日[ひ]",
    titleReading: "かいせんのないひ",
    level: "N1",
    summary: "When Tokyo loses every communication network without warning, the city discovers how thoroughly it has outsourced survival to machines, and how quickly the lessons of a digital blackout are forgotten once the screens light up again.",
    estMinutes: 7,
    tags: ["technology", "society", "dependency"],
    body: [
      "近[ちか]い未来[みらい]、東京[とうきょう]は突如[とつじょ]として全[すべ]ての通信[つうしん]網[もう]を喪失[そうしつ]した。",
      "原因[げんいん]は特定[とくてい]されないまま、市民[しみん]はスマートフォンが使[つか]えず、決済[けっさい]システムも停止[ていし]し、電車[でんしゃ]も動[うご]かない都市[とし]に放[ほう]り出[だ]された。",
      "当初[とうしょ]、人[ひと]々は冗談[じょうだん]めかして「デジタル断食[だんじき]」と呼[よ]んだが、数日[すうにち]が経[た]つにつれ、社会[しゃかい]の機能[きのう]停止[ていし]は笑[わら]い事[ごと]で済[す]まされなくなった。",
      "食料[しょくりょう]品[ひん]の供給[きょうきゅう]は滞[とどこお]り、冷蔵庫[れいぞうこ]の中[なか]の生鮮[せいせん]食品[しょくひん]は腐敗[ふはい]し始[はじ]めた。",
      "高齢[こうれい]者[しゃ]の見守[みまも]りシステムも機能[きのう]せず、独[どく]り暮[ぐ]らしの老人[ろうじん]の孤立[こりつ]が深刻[しんこく]化[か]した。",
      "人[ひと]々は、便利[べんり]さを追求[ついきゅう]するあまり、自[みずか]らの生存[せいぞん]を機械[きかい]に委[ゆだ]ねていた事実[じじつ]を、痛感[つうかん]せずにはいられなかった。",
      "若者[わかもの]たちは紙[かみ]の地図[ちず]を見[み]ても方角[ほうがく]がわからず、計算機[けいさんき]の助[たす]けなしには簡単[かんたん]な算術[さんじゅつ]すら怪[あや]しい有様[ありさま]であった。",
      "一方[いっぽう]、地方[ちほう]の農村[のうそん]地帯[ちたい]では、もとよりデジタルへの依存[いぞん]が薄[うす]く、人[ひと]々は助[たす]け合[あ]いながら比較的[ひかくてき]平穏[へいおん]な日[ひ]々を送[おく]っていた。",
      "一週間後[いっしゅうかんご]、通信[つうしん]は一部[いちぶ]復旧[ふっきゅう]したが、人[ひと]々の心[こころ]に残[のこ]った傷跡[きずあと]は容易[ようい]に癒[い]えなかった。",
      "政府[せいふ]は復旧[ふっきゅう]と並行[へいこう]して、デジタル依存[いぞん]を見直[みなお]す政策[せいさく]を立案[りつあん]したものの、その実効性[じっこうせい]には疑問[ぎもん]が残[のこ]った。",
      "一部[いちぶ]の哲学[てつがく]者[しゃ]は、この事件[じけん]を「技術[ぎじゅつ]への叛逆[はんぎゃく]」と名付[なづ]け、人類[じんるい]が再[ふたた]び手[て]を動[うご]かすことの意義[いぎ]を説[と]いた。",
      "されど、通信[つうしん]が戻[もど]った途端[とたん]、人[ひと]々は再[ふたた]び画面[がめん]に見入[みい]り、あの一週間[いっしゅうかん]の教訓[きょうくん]を忘却[ぼうきゃく]の彼方[かなた]へと追[お]いやったのである。"
    ],
    translation: [
      "In the near future, Tokyo suddenly lost all communication networks.",
      "The cause undetermined, citizens were thrown into a city where smartphones were unusable, payment systems halted, and trains did not move.",
      "At first, people jokingly called it a 'digital fast,' but as days passed, the cessation of social functions could no longer be dismissed as a laughing matter.",
      "Food supply stalled, and fresh produce in refrigerators began to rot.",
      "Monitoring systems for the elderly failed, and the isolation of elderly people living alone became acute.",
      "People could not help but acutely feel the fact that, in pursuit of convenience, they had entrusted their own survival to machines.",
      "Young people, even looking at paper maps, could not tell directions, and without the help of calculators, even simple arithmetic was doubtful.",
      "Meanwhile, in rural districts, dependence on digital was originally slight, and people helped one another while leading relatively peaceful days.",
      "A week later, communications were partially restored, but the scars left in people's hearts did not heal easily.",
      "The government, alongside restoration, drafted policies to review digital dependence, but doubts remained about their effectiveness.",
      "Some philosophers named the incident 'a rebellion against technology' and expounded the significance of humanity once again moving their hands.",
      "Nevertheless, the moment communications returned, people again gazed at their screens, and pushed the lessons of that week to the far side of oblivion."
    ],
    vocab: [
      { word: "回線", reading: "かいせん", meaning: "connection; line" },
      { word: "喪失", reading: "そうしつ", meaning: "loss" },
      { word: "決済", reading: "けっさい", meaning: "payment" },
      { word: "滞る", reading: "とどこおる", meaning: "to stall" },
      { word: "腐敗", reading: "ふはい", meaning: "decay" },
      { word: "見守り", reading: "みまもり", meaning: "watching over" },
      { word: "生存", reading: "せいぞん", meaning: "survival" },
      { word: "委ねる", reading: "ゆだねる", meaning: "to entrust" },
      { word: "算術", reading: "さんじゅつ", meaning: "arithmetic" },
      { word: "有様", reading: "ありさま", meaning: "state of affairs" },
      { word: "復旧", reading: "ふっきゅう", meaning: "restoration" },
      { word: "立案", reading: "りつあん", meaning: "drafting (a plan)" },
      { word: "実効性", reading: "じっこうせい", meaning: "effectiveness" },
      { word: "叛逆", reading: "はんぎゃく", meaning: "rebellion" },
      { word: "忘却", reading: "ぼうきゃく", meaning: "oblivion" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-26 — A cultural memory
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-26",
    title: "忘[わす]れられた祭[まつり]",
    titleReading: "わすれられたまつり",
    level: "N1",
    summary: "In a depopulated mountain village where the three-century Star-Welcoming Festival has gone silent, a young archivist's attempt to revive it becomes, paradoxically, a reburial of the very culture he meant to save.",
    estMinutes: 8,
    tags: ["culture", "memory", "ritual"],
    body: [
      "山間[さんかん]の寒村[かんそん]で三百[さんびゃく]年[ねん]続[つづ]いた「星[ほし]迎[むか]えの祭[まつり]」は、過疎[かそ]化[か]と後継[こうけい]者[しゃ]不足[ぶそく]によりついに途絶[とだ]えていた。",
      "最後[さいご]の語[かた]り部[べ]であった老婆[ろうば]が他界[たかい]して以来[いらい]、祭[まつり]の由来[ゆらい]や所作[しょさ]を知[し]る者[もの]は村[むら]に一人[ひとり]もいなくなったのである。",
      "その折[おり]、東京[とうきょう]の古文書[こもんじょ]研究[けんきゅう]者[しゃ]である青年[せいねん]・悠[ゆう]が、村[むら]の資料[しりょう]を整理[せいり]するためにやって来[き]た。",
      "彼[かれ]は祭[まつり]の記録[きろく]を発掘[はっくつ]するうち、この儀式[ぎしき]がかつて飢饉[ききん]を生[い]き抜[ぬ]くための感謝[かんしゃ]と祈願[きがん]であったことを突[つ]き止[と]めた。",
      "悠[ゆう]は村[むら]の老人[ろうじん]たちに祭[まつり]の復活[ふっかつ]を提案[ていあん]したが、当初[とうしょ]の反応[はんのう]は冷淡[れいたい]であった。",
      "「観光[かんこう]客[きゃく]用[よう]の余興[よきょう]にされるくらいなら、このまま眠[ねむ]らせておけ」というのが、老人[ろうじん]たちの偽[いつわ]らざる本音[ほんね]であった。",
      "悠[ゆう]は焦[あせ]らず、少[すこ]しずつ村[むら]に溶[と]け込[こ]み、老人[ろうじん]たちと酒[さけ]を酌[く]み交[か]わすうちに、彼[かれ]らの記憶[きおく]の奥[おく]底[そこ]に祭[まつり]の断片[だんぺん]が残[のこ]っているのを感[かん]じ取[と]った。",
      "数[すう]か月[げつ]を経[へ]て、老人[ろうじん]たちはしぶしぶながら、かつての衣装[いしょう]を納屋[なや]から引[ひ]き出[だ]し、祭[まつり]の再現[さいげん]に協力[きょうりょく]し始[はじ]めた。",
      "されど、再現[さいげん]された祭[まつり]は、かつての信仰[しんこう]の念[ねん]を欠[か]いた、形[かたち]だけのものになってしまった。",
      "観光[かんこう]協会[きょうかい]が介入[かいにゅう]し、祭[まつり]を村[むら]のPRに利用[りよう]しようとしたことで、神聖[しんせい]さは商業的[しょうぎょうてき]な色彩[しきさい]に塗[ぬ]り替[か]えられた。",
      "悠[ゆう]は自[みずか]らのやったことが、文化[ぶんか]の保存[ほぞん]ではなく、別[べつ]の形[かたち]での埋葬[まいそう]であったかもしれないと自問[じもん]した。",
      "それでも、星[ほし]の下[もと]で踊[おど]る老人[ろうじん]たちの顔[かお]には、一瞬[いっしゅん]、かつての祭[まつり]の光[ひかり]が宿[やど]ったように見[み]えたのである。"
    ],
    translation: [
      "The 'Star-Welcoming Festival,' which had continued for three hundred years in a mountain village, had finally ceased due to depopulation and lack of successors.",
      "Since the old woman who had been the last storyteller passed away, there was no one in the village who knew the festival's origin or its gestures.",
      "At that time, a young man named Yu, an old-documents researcher from Tokyo, came to organize the village's materials.",
      "While excavating records of the festival, he determined that this ritual had once been gratitude and prayer for surviving famine.",
      "Yu proposed reviving the festival to the village elders, but the initial response was cold.",
      "'If it is to be turned into an amusement for tourists, let it sleep as it is' was the elders' unfeigned true feeling.",
      "Yu, without hurrying, gradually blended into the village, and as he drank with the elders, he sensed that fragments of the festival remained deep in their memories.",
      "After several months, the elders reluctantly pulled out the old costumes from the barn and began to cooperate in recreating the festival.",
      "However, the recreated festival had lost the sense of faith it once had and become a mere form.",
      "The tourism association intervened and tried to use the festival for PR of the village, so the sacredness was repainted with commercial hues.",
      "Yu asked himself whether what he had done was not the preservation of culture but perhaps its burial in another form.",
      "Even so, under the stars, in the faces of the elders dancing, for an instant, the light of the former festival seemed to dwell."
    ],
    vocab: [
      { word: "山間", reading: "さんかん", meaning: "mountain area" },
      { word: "寒村", reading: "かんそん", meaning: "poor village" },
      { word: "過疎化", reading: "かそか", meaning: "depopulation" },
      { word: "後継者", reading: "こうけいしゃ", meaning: "successor" },
      { word: "語り部", reading: "かたりべ", meaning: "storyteller" },
      { word: "他界", reading: "たかい", meaning: "passing away" },
      { word: "古文書", reading: "こもんじょ", meaning: "old documents" },
      { word: "発掘", reading: "はっくつ", meaning: "excavation" },
      { word: "飢饉", reading: "ききん", meaning: "famine" },
      { word: "突き止める", reading: "つきとめる", meaning: "to determine" },
      { word: "余興", reading: "よきょう", meaning: "amusement" },
      { word: "偽らざる", reading: "いつわらざる", meaning: "unfeigned" },
      { word: "断片", reading: "だんぺん", meaning: "fragment" },
      { word: "納屋", reading: "なや", meaning: "barn" },
      { word: "埋葬", reading: "まいそう", meaning: "burial" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-27 — A philosophical retreat
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-27",
    title: "静寂[せいじゃく]の山荘[さんそう]",
    titleReading: "せいじゃくのさんそう",
    level: "N1",
    summary: "A philosopher who has lost faith in language retreats to a mountain hermitage; the silence amplifies his inner voices, and he finally lays down his pen, leaving behind only the injunction to be rather than to speak.",
    estMinutes: 9,
    tags: ["philosophy", "solitude", "silence"],
    body: [
      "哲学[てつがく]者[しゃ]の蓮[れん]司[じ]は、喧噪[けんそう]を逃[のが]れるべく、信州[しんしゅう]の山中[さんちゅう]に古[ふる]い山荘[さんそう]を構[かま]えた。",
      "彼[かれ]は数十年[すうじゅうねん]にわたり大学[だいがく]で哲学[てつがく]を講[こう]じてきたが、次第[しだい]に言語[げんご]という媒質[ばいしつ]に疑問[ぎもん]を抱[いだ]くようになった。",
      "「言葉[ことば]は真理[しんり]を伝[つた]えるのか、それとも真理[しんり]を隠[かく]すのか」という問[とい]が、彼[かれ]の学究[がっきゅう]生活[せいかつ]の最後[さいご]を飾[かざ]った。",
      "山荘[さんそう]には電気[でんき]も水道[すいどう]もなく、彼[かれ]は薪[まき]を割[わ]り、水[みず]を汲[く]み、自[みずか]らの手[て]で日[ひ]々の糧[かて]を用意[ようい]した。",
      "静寂[せいじゃく]は最初[さいしょ]、彼[かれ]にとって解放[かいほう]であった。しかしその静寂[せいじゃく]はやがて、彼[かれ]の内[うち]なる声[こえ]を増幅[ぞうふく]し始[はじ]めた。",
      "彼[かれ]は孤独[こどく]の中[なか]で、過去[かこ]の著作[ちょさく]を読[よ]み返[かえ]し、自[みずか]らの論考[ろんこう]の空論[くうろん]ぶりに慄[おのの]いた。",
      "山中[さんちゅう]の四季[しき]は彼[かれ]に、書物[しょもつ]では決[けっ]して学[まな]べない哲学[てつがく]を教[おし]えた。即[そく]ち、自然[しぜん]は語[かた]らず、ただ在[あ]る、という事実[じじつ]である。",
      "訪[おとず]れる者[もの]は稀[まれ]で、時折[ときおり]の登山[とざん]者[しゃ]が言葉[ことば]を交[か]わすのみであった。",
      "三年後[さんねんご]、蓮[れん]司[じ]はついに筆[ふで]を折[お]った。彼[かれ]の最後[さいご]のノートには、ただ一[ひと]言[こと]、「語[かた]らず、在[あ]れ」と記[しる]されていた。",
      "その山荘[さんそう]は後[のち]に、弟子[でし]たちによって保存[ほぞん]され、哲学[てつがく]を志[こころざ]す者[もの]の巡礼[じゅんれい]の地[ち]となった。",
      "されど、蓮[れん]司[じ]がそこで何[なに]を得[え]たのか、誰[だれ]にも知[し]る由[よし]はない。真理[しんり]は沈黙[ちんもく]の中[なか]にのみ在[あ]る、と彼[かれ]は信[しん]じていた。",
      "哲学[てつがく]とは、語[かた]り得[う]るものについて語[かた]る営[いとな]みではなく、語[かた]り得[う]ぬものに沈黙[ちんもく]をもって向[む]き合[あ]う営[いとな]みであろう、と後世[こうせい]の評論家[ひょうろんか]は記[しる]した。"
    ],
    translation: [
      "The philosopher Renji built an old mountain villa in the Shinshu mountains to escape the noise.",
      "He had lectured on philosophy at a university for decades, but gradually came to harbor doubts about the medium called language.",
      "The question 'Does language convey truth, or does it hide truth?' adorned the end of his scholarly life.",
      "The villa had neither electricity nor running water; he chopped wood, drew water, and prepared his daily sustenance with his own hands.",
      "The silence was at first a liberation for him. But that silence eventually began to amplify his inner voices.",
      "In solitude, he reread his past writings and trembled at the empty theorizing of his essays.",
      "The four seasons of the mountains taught him a philosophy no book could ever teach: namely, that nature does not speak, it merely is.",
      "Visitors were rare, with occasional climbers exchanging words being the only ones.",
      "Three years later, Renji finally quit writing. In his last notebook was written only one phrase: do not speak; be.",
      "The villa was later preserved by his disciples and became a pilgrimage site for those aspiring to philosophy.",
      "However, what Renji gained there, no one has any way of knowing. He believed truth exists only in silence.",
      "Philosophy is not the endeavor of speaking about what can be spoken, but the endeavor of confronting what cannot be spoken with silence, later critics wrote."
    ],
    vocab: [
      { word: "静寂", reading: "せいじゃく", meaning: "silence" },
      { word: "山荘", reading: "さんそう", meaning: "mountain villa" },
      { word: "喧噪", reading: "けんそう", meaning: "noise" },
      { word: "媒質", reading: "ばいしつ", meaning: "medium" },
      { word: "学究", reading: "がっきゅう", meaning: "scholarly" },
      { word: "解放", reading: "かいほう", meaning: "liberation" },
      { word: "増幅", reading: "ぞうふく", meaning: "amplification" },
      { word: "空論", reading: "くうろん", meaning: "empty theory" },
      { word: "薪", reading: "まき", meaning: "firewood" },
      { word: "糧", reading: "かて", meaning: "sustenance" },
      { word: "書物", reading: "しょもつ", meaning: "books" },
      { word: "巡礼", reading: "じゅんれい", meaning: "pilgrimage" },
      { word: "由", reading: "よし", meaning: "way of knowing" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "後世", reading: "こうせい", meaning: "later ages" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-28 — A scientific fraud
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-28",
    title: "捏造[ねつぞう]された真理[しんり]",
    titleReading: "ねつぞうされたしんり",
    level: "N1",
    summary: "A celebrated pharmacologist's claim of an Alzheimer's breakthrough collapses when a former student uncovers doctored images, forcing a choice between loyalty to her mentor and the integrity of science.",
    estMinutes: 8,
    tags: ["science", "fraud", "ethics"],
    body: [
      "薬学[やくがく]者[しゃ]の黒田[くろだ]は、アルツハイマー病[びょう]の画期的[かっきてき]な治療薬[ちりょうやく]を開発[かいはつ]したと発表[はっぴょう]し、世[よ]の称賛[しょうさん]を浴[あ]びた。",
      "彼[かれ]の論文[ろんぶん]は一流誌[いちりゅうし]に掲載[けいさい]され、研究[けんきゅう]助成[じょせい]金[きん]は殺到[さっとう]、多[おお]くの製薬会社[せいやくがいしゃ]が彼[かれ]と提携[ていけい]を求[もと]めた。",
      "されど、かつての教[おし]え子[こ]であった女性[じょせい]研究[けんきゅう]者[しゃ]・明日香[あすか]は、論文[ろんぶん]のデータに違和感[いわかん]を覚[おぼ]えた。",
      "黒田[くろだ]の実験[じっけん]結果[けっか]は他[ほか]の研究[けんきゅう]室[しつ]では再現[さいげん]されず、彼女[かのじょ]は元[もと]データの開示[かいじ]を求[もと]めた。",
      "黒田[くろだ]はこれを拒[こば]み、「再現[さいげん]不能[ふのう]は技術的[ぎじゅつてき]な問題[もんだい]だ」と主張[しゅちょう]したが、その態度[たいど]は明日香[あすか]の疑念[ぎねん]を深[ふか]めるばかりであった。",
      "明日香[あすか]は独自[どくじ]に調査[ちょうさ]を進[すす]め、黒田[くろだ]が画像[がぞう]データを意図的[いとてき]に改竄[かいざん]していた証拠[しょうこ]を掴[つか]んだ。",
      "彼女[かのじょ]は迷[まよ]った。師[し]を告発[こくはつ]することは、自[みずか]らのキャリアを危[あぶ]なめる行為[こうい]にほかならなかったからである。",
      "しかし、科学[かがく]の誠実[せいじつ]さをないがしろにすることは、彼女[かのじょ]の良心[りょうしん]が許[ゆる]すところではなかった。",
      "彼女[かのじょ]は告発[こくはつ]を決意[けつい]し、学会[がっかい]の倫理[りんり]委員会[いいんかい]に証拠[しょうこ]を提出[ていしゅつ]した。",
      "調査[ちょうさ]の結果[けっか]、黒田[くろだ]の捏造[ねつぞう]は確定[かくてい]し、彼[かれ]の論文[ろんぶん]は撤回[てっかい]され、大学[だいがく]を免職[めんしょく]された。",
      "黒田[くろだ]は会見[かいけん]で、「成果[せいか]が出[で]ない焦[あせ]りが、過[あやま]ちを犯[おか]させた」と語[かた]り、深[ふか]く頭[あたま]を下[さ]げた。",
      "一方[いっぽう]、明日香[あすか]は、真実[しんじつ]を選[えら]んだ代償[だいしょう]として、学界[がっかい]での孤立[こりつ]に耐[た]えねばならなかった。"
    ],
    translation: [
      "The pharmacologist Kuroda announced that he had developed a groundbreaking treatment for Alzheimer's disease, and was showered with the world's praise.",
      "His paper was published in a top journal, research grants poured in, and many pharmaceutical companies sought partnership with him.",
      "However, a female researcher Asuka, once his student, felt something off about the data in the paper.",
      "Kuroda's experimental results were not reproduced in other laboratories, and she demanded disclosure of the raw data.",
      "Kuroda refused, claiming 'the inability to reproduce is a technical issue,' but his attitude only deepened Asuka's suspicion.",
      "Asuka proceeded with her own investigation and seized evidence that Kuroda had intentionally altered image data.",
      "She hesitated. Accusing her mentor was nothing other than an act that would jeopardize her own career.",
      "However, to trifle with the integrity of science was something her conscience would not allow.",
      "She decided to make the accusation and submitted the evidence to the society's ethics committee.",
      "As a result of the investigation, Kuroda's fabrication was confirmed, his paper was retracted, and he was dismissed from the university.",
      "At a press conference, Kuroda said, 'The impatience over not getting results led me to commit the mistake,' and bowed deeply.",
      "Meanwhile, Asuka had to endure isolation in the academic world as the price of choosing the truth."
    ],
    vocab: [
      { word: "捏造", reading: "ねつぞう", meaning: "fabrication" },
      { word: "画期的", reading: "かっきてき", meaning: "groundbreaking" },
      { word: "称賛", reading: "しょうさん", meaning: "praise" },
      { word: "掲載", reading: "けいさい", meaning: "publication" },
      { word: "違和感", reading: "いわかん", meaning: "sense of incongruity" },
      { word: "開示", reading: "かいじ", meaning: "disclosure" },
      { word: "改竄", reading: "かいざん", meaning: "alteration" },
      { word: "告発", reading: "こくはつ", meaning: "accusation" },
      { word: "誠実", reading: "せいじつ", meaning: "sincerity" },
      { word: "撤回", reading: "てっかい", meaning: "retraction" },
      { word: "免職", reading: "めんしょく", meaning: "dismissal" },
      { word: "焦り", reading: "あせり", meaning: "impatience" },
      { word: "代償", reading: "だいしょう", meaning: "price" },
      { word: "再現", reading: "さいげん", meaning: "reproduction" },
      { word: "証拠", reading: "しょうこ", meaning: "evidence" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-29 — A political philosophy
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-29",
    title: "理想[りそう]国家[こっか]の影[かげ]",
    titleReading: "りそうこっかのかげ",
    level: "N1",
    summary: "A political philosopher who spent his life designing the perfect state watches his theory level diversity and exile heretics, and in his final book renounces the idealism that blinded him to actual human beings.",
    estMinutes: 9,
    tags: ["politics", "philosophy", "ideology"],
    body: [
      "政治[せいじ]哲学[てつがく]者[しゃ]・西郷[さいごう]は、生涯[しょうがい]をかけて「完全[かんぜん]な国家[こっか]」の理念[りねん]を追究[ついきゅう]した。",
      "彼[かれ]の著書[ちょしょ]『理想[りそう]国家[こっか]の構想[こうそう]』は、各人[かくにん]が義務[ぎむ]を果[は]たし、調和[ちょうわ]の取[と]れた社会[しゃかい]を描[えが]き、多[おお]くの読者[どくしゃ]を魅了[みりょう]した。",
      "されど、その理念[りねん]を実現[じつげん]するためには、個人[こじん]の自由[じゆう]をある程度[ていど]制限[せいげん]せざるを得[え]ないという矛盾[むじゅん]が内包[ないほう]されていた。",
      "西郷[さいごう]はこの矛盾[むじゅん]に気[き]づきながらも、調和[ちょうわ]の価値[かち]が個人[こじん]の自由[じゆう]に勝[まさ]ることを信[しん]じて疑[うたが]わなかった。",
      "彼[かれ]の思想[しそう]は一部[いちぶ]の政治[せいじ]家[か]に影響[えいきょう]を与[あた]え、実際[じっさい]の政策[せいさく]に反映[はんえい]されることとなった。",
      "しかしながら、理念[りねん]を現実[げんじつ]に適用[てきよう]した結果[けっか]、個人[こじん]の多様性[たようせい]は押[お]し並[なら]べられ、異端[いたん]は社会[しゃかい]から排除[はいじょ]されていった。",
      "西郷[さいごう]は晩年[ばんねん]、自[みずか]らの理論[りろん]がもたらした結果[けっか]に直面[ちょくめん]し、深[ふか]い後悔[こうかい]の念[ねん]に苛[さいな]まれた。",
      "「理想[りそう]を追[お]うあまり、現実[げんじつ]の人間[にんげん]を見失[みうしな]った」と彼[かれ]は日記[にっき]に書[か]き残[のこ]した。",
      "政治[せいじ]哲学[てつがく]は書斎[しょさい]の中[なか]で完結[かんけつ]するものではなく、生身[なまみ]の人間[にんげん]の不条理[ふじょうり]と向[む]き合[あ]うべきであったのである。",
      "彼[かれ]の最終[さいしゅう]著書[ちょしょ]は、自[みずか]らの理論[りろん]の限界[げんかい]を率直[そっちょく]に認[みと]め、理想[りそう]と現実[げんじつ]のバランスを問[と]い直[なお]す内容[ないよう]であった。",
      "この転回[てんかい]は学界[がっかい]に衝撃[しょうげき]を与[あた]え、彼[かれ]を理想主義[りそうしゅぎ]者[しゃ]から現実主義[げんじつしゅぎ]者[しゃ]へと再評価[さいひょうか]させる契機[けいき]となった。",
      "理想[りそう]国家[こっか]の影[かげ]に潜[ひそ]むのは、人間[にんげん]の不完全[ふかんぜん]さを受容[じゅよう]する謙虚[けんきょ]さにほかならない、と西郷[さいごう]は最後[さいご]に悟[さと]ったのである。"
    ],
    translation: [
      "The political philosopher Saigo spent his life pursuing the ideal of the perfect state.",
      "His book 'A Vision of the Ideal State,' which depicted a harmonious society in which each person fulfills their duties, fascinated many readers.",
      "However, to realize that ideal, the contradiction was implicit that individual freedom would have to be limited to some extent.",
      "While aware of this contradiction, Saigo firmly believed that the value of harmony outweighed individual freedom.",
      "His thought influenced some politicians and came to be reflected in actual policies.",
      "However, as a result of applying the ideal to reality, individual diversity was leveled, and heretics were gradually excluded from society.",
      "In his later years, faced with the results brought by his theory, Saigo was tormented by deep regret.",
      "'In pursuing the ideal, I lost sight of actual human beings,' he left written in his diary.",
      "Political philosophy is not something that is completed within a study; it should have confronted the absurdity of flesh-and-blood human beings.",
      "His final book candidly acknowledged the limits of his theory and reconsidered the balance between ideal and reality.",
      "This turn sent shock through the academic world and became an opportunity to reevaluate him from an idealist to a realist.",
      "What lurks in the shadow of the ideal state is nothing but the humility to accept human imperfection, Saigo finally realized."
    ],
    vocab: [
      { word: "理想", reading: "りそう", meaning: "ideal" },
      { word: "国家", reading: "こっか", meaning: "state" },
      { word: "追究", reading: "ついきゅう", meaning: "pursuit" },
      { word: "調和", reading: "ちょうわ", meaning: "harmony" },
      { word: "内包", reading: "ないほう", meaning: "inclusion" },
      { word: "多様性", reading: "たようせい", meaning: "diversity" },
      { word: "押し並べる", reading: "おしならべる", meaning: "to level" },
      { word: "異端", reading: "いたん", meaning: "heresy" },
      { word: "排除", reading: "はいじょ", meaning: "exclusion" },
      { word: "苛まれる", reading: "さいなまれる", meaning: "to be tormented" },
      { word: "書斎", reading: "しょさい", meaning: "study" },
      { word: "完結", reading: "かんけつ", meaning: "completion" },
      { word: "不条理", reading: "ふじょうり", meaning: "absurdity" },
      { word: "転回", reading: "てんかい", meaning: "turn" },
      { word: "謙虚", reading: "けんきょ", meaning: "humility" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-30 — An existential crisis
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-30",
    title: "鏡[かがみ]の中[なか]の他者[たしゃ]",
    titleReading: "かがみのなかのたしゃ",
    level: "N1",
    summary: "An actor who has lived so many roles he no longer knows his own face flees to a mountain villa; after three years of confronting himself, he returns to the stage no longer to inhabit others' lives but to live them as his own narrative.",
    estMinutes: 7,
    tags: ["existential", "identity", "self"],
    body: [
      "俳優[はいゆう]の涼[りょう]介[すけ]は、二十[にじゅう]年[ねん]にわたり多[おお]くの役柄[やくがら]を演[えん]じ続[つづ]けてきたが、次第[しだい]に自[みずか]らが誰[だれ]であるか分[わ]からなくなっていた。",
      "彼[かれ]は他人[たにん]の人生[じんせい]を生[い]きることに長[なが]けたあまり、自[みずか]らの人生[じんせい]を生[い]きることを忘[わす]れてしまったのである。",
      "朝[あさ]、鏡[かがみ]に向[む]かうたび、彼[かれ]は鏡[かがみ]の中[なか]に見知[みし]らぬ他人[たにん]の顔[かお]を見出[みだ]すようになった。",
      "彼[かれ]は自[みずか]らの存在[そんざい]の空虚[くうきょ]さに気[き]づき、その気[き]づきが彼[かれ]を恐怖[きょうふ]の底[そこ]へと突[つ]き落[お]とした。",
      "妻[つま]も友人[ゆうじん]も、彼[かれ]の「顔[かお]」しか知[し]らず、その奥[おく]にある「私[わたし]」を知[し]る者[もの]はいなかった。",
      "涼[りょう]介[すけ]は舞台[ぶたい]を降[お]りることを決意[けつい]したが、役[やく]を脱[ぬ]ぎ捨[す]てた後[のち]の彼[かれ]には、もはや何[なに]も残[のこ]っていなかった。",
      "彼[かれ]は孤独[こどく]な旅[たび]に出[で]た。人[ひと]のいない山荘[さんそう]で、彼[かれ]は自[みずか]と向[む]き合[あ]うことだけを目的[もくてき]として日[ひ]々を過[す]ごした。",
      "されど、自[みずか]と向[む]き合[あ]うことは、最[もっと]も困難[こんなん]な営[いとな]みであった。彼[かれ]は何[なん]度[ど]も逃[に]げ出[だ]したくなった。",
      "三年後[さんねんご]、涼[りょう]介[すけ]は一[ひと]つの発見[はっけん]に到達[とうたつ]した。「私[わたし]」とは、固定[こてい]された実体[じったい]ではなく、流動[るどう]する物語[ものがたり]の総和[そうわ]であるということ。",
      "彼[かれ]は鏡[かがみ]を再[ふたた]び見[み]た。今[こん]度[ど]は見知[みし]らぬ他人[たにん]ではなく、自分[じぶん]自身[じしん]の目[め]が彼[かれ]を見[み]つめ返[かえ]していた。",
      "彼[かれ]は再[ふたた]び舞台[ぶたい]に立[た]った。今[こん]度[ど]は他人[たにん]の人生[じんせい]を生[い]きるのではなく、自[みずか]の物語[ものがたり]として他者[たしゃ]の物語[ものがたり]を生[い]きるために。",
      "鏡[かがみ]の中[なか]の他者[たしゃ]はもはや他者[たしゃ]ではなく、彼[かれ]の物語[ものがたり]の一部[いちぶ]であったのである。"
    ],
    translation: [
      "The actor Ryosuke had continued to play many roles for twenty years, but gradually he came to no longer know who he himself was.",
      "So adept was he at living others' lives that he had forgotten to live his own life.",
      "Every morning when facing the mirror, he came to find the face of an unfamiliar stranger in the mirror.",
      "He realized the emptiness of his own existence, and that realization thrust him to the bottom of fear.",
      "Neither his wife nor his friends knew anything but his face; no one knew the 'me' beneath it.",
      "Ryosuke decided to leave the stage, but after shedding his role, nothing remained for him anymore.",
      "He set out on a solitary journey. In an unpeopled mountain villa, he spent his days with the sole aim of confronting himself.",
      "However, confronting oneself was the most difficult endeavor. He wanted to flee countless times.",
      "Three years later, Ryosuke reached one discovery: the 'I' is not a fixed entity but the sum of flowing narratives.",
      "He looked in the mirror again. This time it was not an unfamiliar stranger; his own eyes stared back at him.",
      "He stood on the stage once more. This time not to live others' lives, but to live others' narratives as his own.",
      "The other in the mirror was no longer an other; it was part of his narrative."
    ],
    vocab: [
      { word: "俳優", reading: "はいゆう", meaning: "actor" },
      { word: "役柄", reading: "やくがら", meaning: "role" },
      { word: "見知らぬ", reading: "みしらぬ", meaning: "unfamiliar" },
      { word: "空虚", reading: "くうきょ", meaning: "empty" },
      { word: "突き落とす", reading: "つきおとす", meaning: "to thrust down" },
      { word: "実体", reading: "じったい", meaning: "entity" },
      { word: "脱ぎ捨てる", reading: "ぬぎすてる", meaning: "to shed" },
      { word: "流動", reading: "るどう", meaning: "flow" },
      { word: "総和", reading: "そうわ", meaning: "sum" },
      { word: "固定", reading: "こてい", meaning: "fixed" },
      { word: "困難", reading: "こんなん", meaning: "difficult" },
      { word: "到達", reading: "とうたつ", meaning: "reaching" },
      { word: "物語", reading: "ものがたり", meaning: "narrative" },
      { word: "見つめ返す", reading: "みつめかえす", meaning: "to stare back" },
      { word: "孤独", reading: "こどく", meaning: "solitude" }
    ]
  }
];
