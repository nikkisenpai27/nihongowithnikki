import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N3-level reading passages with comprehension questions.
// Topics (chunk C): the Japanese tea ceremony, a story about immigration,
// the aging society, a high school sports festival, the role of AI in
// education, a story about friendship across cultures, Japanese pop music
// culture, a hometown revitalization project, the philosophy of minimalism,
// a story about natural disasters and resilience.

export const readingN3C: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n3-21 — The Japanese tea ceremony
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-21",
    title: "茶道[さどう]という文化[ぶんか]",
    titleReading: "さどうというぶんか",
    level: "N3",
    summary: "An introduction to the Japanese tea ceremony, its history, the spirit of wabi-sabi and wa-kei-sei-jaku, and the challenge of passing it on to younger generations.",
    estMinutes: 7,
    tags: ["culture", "tea ceremony", "tradition", "philosophy"],
    body: [
      "茶道[さどう]は、日本[にほん]の伝統[でんとう]文化[ぶんか]の一[ひと]つで、お茶[ちゃ]を点[た]てて客[きゃく]に振[ふ]る舞[ま]う作法[さほう]のことです。単[たん]に飲[の]み物[もの]を楽[たの]しむだけでなく、心[こころ]の交流[こうりゅう]や精神性[せいしんせい]を重[おも]んじる点[てん]が特徴[とくちょう]です。海外[かいがい]では「tea ceremony」と呼[よ]ばれ、日本[にほん]文化[ぶんか]の象徴[しょうちょう]として広[ひろ]く知[し]られています。",
      "茶道[さどう]の歴史[れきし]は古[ふる]く、室町[むろまち]時代[じだい]に禅[ぜん]の影響[えいきょう]を受[う]けて形成[けいせい]されました。千利休[せんのりきゅう]という人物[じんぶつ]が「わび茶[ちゃ]」と呼[よ]ばれる精神[せいしん]を確立[かくりつ]し、現在[げんざい]の茶道[さどう]の基礎[きそ]を作[つく]ったとされています。彼[かれ]は、豪華[ごうか]さよりも簡素[かんそ]さを尊[とうと]び、心[こころ]の豊[ゆた]かさを求[もと]めました。",
      "茶道[さどう]の根底[こんてい]には「和敬清寂[わけいせいじゃく]」という四[よ]つの精神[せいしん]があります。「和[わ]」はお互[たが]いに仲良[なかよ]くすること、「敬[けい]」は相手[あいて]を尊重[そんちょう]すること、「清[せい]」は身[み]も心[こころ]も清[きよ]らかにすること、「寂[じゃく]」は静[しず]かで落[お]ち着[つ]いた心[こころ]を持[も]つことを意味[いみ]します。これらは現代[げんだい]の生活[せいかつ]でも大切[たいせつ]な価値[かち]だと考[かんが]える人[ひと]が多[おお]いです。",
      "実際[じっさい]の茶会[ちゃかい]では、亭主[ていしゅ]と客[きゃく]が決[き]まった作法[さほう]に従[したが]って動[うご]きます。客[きゃく]は茶室[ちゃしつ]に入[はい]る前[まえ]に手[て]を洗[あら]い、亭主[ていしゅ]の点[た]てたお茶[ちゃ]を丁寧[ていねい]に受[う]け取[と]ります。一[ひと]口[くち]飲[の]んだ後[あと]には感謝[かんしゃ]の言葉[ことば]を述[の]べるなど、一連[いちれん]の行動[こうどう]に意味[いみ]が込[こ]められています。所作[しょさ]の一[ひと]つ一[ひと]つに気配[きくば]りが表現[ひょうげん]されているのです。",
      "しかし、現代[げんだい]では茶道[さどう]を学[まな]ぶ若者[わかもの]が減[へ]っています。道具[どうぐ]や着物[きもの]に費用[ひよう]がかかることや、形式[けいしき]が厳[きび]しいことなどが理由[りゆう]として挙[あ]げられます。一方[いっぽう]で、海外[かいがい]では日本[にほん]文化[ぶんか]への関心[かんしん]が高[たか]まり、茶道[さどう]を学[まな]ぶ外国人[がいこくじん]が増[ふ]えています。",
      "茶道[さどう]は、ただの儀式[ぎしき]ではなく、人[ひと]と人[ひと]の心[こころ]を結[むす]ぶ文化[ぶんか]です。時代[じだい]が変[か]わっても、その精神[せいしん]は色[いろ]あせることがないでしょう。私[わたし]たちは今[いま]一度[いちど]、茶道[さどう]が教[おし]える「今[いま]を生[い]きる」姿勢[しせい]を見直[みなお]す必要[ひつよう]があるのかもしれません。"
    ],
    translation: [
      "Tea ceremony is one of Japan's traditional cultures, referring to the etiquette of preparing tea and serving it to guests. Its characteristic is that it values not only enjoying a beverage but also spiritual exchange and spirituality. It is called \"tea ceremony\" overseas and is widely known as a symbol of Japanese culture.",
      "The history of tea ceremony is old; it was formed under the influence of Zen during the Muromachi period. A person named Sen no Rikyu established a spirit called \"wabi-cha\" and is said to have created the foundation of present tea ceremony. He valued simplicity over gorgeousness and sought richness of the mind.",
      "At the root of tea ceremony are four spirits called \"wa, kei, sei, jaku.\" \"Wa\" means to get along with each other, \"kei\" to respect the other person, \"sei\" to purify both body and mind, and \"jaku\" to have a calm and composed mind. Many people think these are important values in modern life as well.",
      "At an actual tea gathering, the host and guests move according to fixed etiquette. The guests wash their hands before entering the tea room and carefully receive the tea prepared by the host. After taking one sip, they express words of gratitude, and each action in the series carries meaning. Consideration is expressed in every single movement.",
      "However, in modern times, the number of young people learning tea ceremony is decreasing. The cost of tools and kimono and the strict formality are cited as reasons. On the other hand, interest in Japanese culture is rising overseas, and the number of foreigners learning tea ceremony is increasing.",
      "Tea ceremony is not just a ritual but a culture that connects the hearts of people. Even as times change, its spirit will likely not fade. We may need to reconsider once again the attitude of \"living in the present\" that tea ceremony teaches."
    ],
    questions: [
      {
        q: "茶道[さどう]の特徴[とくちょう]として本文[ほんぶん]で述[の]べられているのは何[なん]ですか。",
        choices: ["お茶を飲むだけの文化であること", "心の交流や精神性を重んじること", "海外では全く知られていないこと", "豪華さを最も大切にすること"],
        answerIndex: 1,
        explanation: "第一段で「心の交流や精神性を重んじる点が特徴」と述べられています。"
      },
      {
        q: "千利休[せんのりきゅう]が確立[かくりつ]した精神[せいしん]は何[なん]と呼[よ]ばれていますか。",
        choices: ["わび茶", "武家茶", "宮廷茶", "現代茶"],
        answerIndex: 0,
        explanation: "第二段で「千利休という人物が『わび茶』と呼ばれる精神を確立した」と書かれています。"
      },
      {
        q: "「和敬清寂[わけいせいじゃく]」の「清[せい]」は何[なん]を意味[いみ]しますか。",
        choices: ["お互いに仲良くすること", "相手を尊重すること", "身も心も清らかにすること", "静かで落ち着いた心を持つこと"],
        answerIndex: 2,
        explanation: "第三段で「『清』は身も心も清らかにすること」と説明されています。"
      },
      {
        q: "現代[げんだい]の茶道[さどう]について、本文[ほんぶん]と合[あ]っているのはどれですか。",
        choices: ["若者の間で学ぶ人が増えている", "費用や形式の厳しさが理由で若者が減っている", "海外では学ぶ人が減っている", "完全に廃れた文化となっている"],
        answerIndex: 1,
        explanation: "第五段で「道具や着物に費用がかかる」「形式が厳しい」ことなどが理由で若者が減っていると書かれています。"
      },
      {
        q: "筆者[ひっしゃ]は茶道[さどう]の精神[せいしん]をどう見[み]ていますか。",
        choices: ["時代遅れになったと考えている", "今の生活には関係ないとしている", "時代が変わっても色あせないと考えている", "若者に無理に教えるべきだとしている"],
        answerIndex: 2,
        explanation: "最終段で「時代が変わっても、その精神は色あせることがないでしょう」と述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-22 — A story about immigration
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-22",
    title: "新[あたら]しい国[くに]で生[い]きる",
    titleReading: "あたらしいくにでいきる",
    level: "N3",
    summary: "The story of Maria, who moves from Brazil to Japan as a teenager, struggles with language and loneliness, and gradually finds her place through cooking and friendship.",
    estMinutes: 8,
    tags: ["story", "immigration", "culture", "identity"],
    body: [
      "マリアは十八[じゅうはち]歳[さい]の時[とき]、ブラジルから日本[にほん]へ引[ひ]っ越[こ]しました。父[ちち]の仕事[しごと]の関係[かんけい]で、家族[かぞく]全員[ぜんいん]で新[あたら]しい生活[せいかつ]を始[はじ]めることになったのです。初[はじ]めての日本[にほん]でしたが、彼女[かのじょ]は期待[きたい]よりも不安[ふあん]の方[ほう]が大[おお]きかったと話[はな]しています。言葉[ことば]も文化[ぶんか]も違[ちが]う国[くに]で、自分[じぶん]はうまくやっていけるのでしょうか。",
      "学校[がっこう]に通[かよ]い始[はじ]めたマリアを最[もっと]も困[こま]らせたのは、日本語[にほんご]でした。授業[じゅぎょう]の内容[ないよう]はほとんど分[わ]からず、クラスメイトとの会話[かいわ]も途中[とちゅう]で止[と]まってしまうことがよくありました。何[なに]かを言[い]おうとしても、言葉[ことば]が出[で]てこないもどかしさに、毎日[まいにち]泣[な]きそうになったと言[い]います。教科書[きょうかしょ]の漢字[かんじ]を見[み]るたびに、自分[じぶん]の無力[むりょく]さを感[かん]じました。",
      "三[さん]か月[げつ]が過[す]ぎても、マリアは友達[ともだち]ができないまま孤独[こどく]な日々[ひび]を送[おく]っていました。休[やす]み時間[じかん]は一人[ひとり]で教室[きょうしつ]の隅[すみ]に座[すわ]り、ブラジルにいた時[とき]の友人[ゆうじん]たちに手紙[てがみ]を書[か]くのが唯一[ゆいいつ]の慰[なぐさ]めでした。「なぜ日本[にほん]になど来[き]たのだろう」と思[おも]う夜[よる]もありました。家族[かぞく]の前[まえ]では平気[へいき]な顔[かお]をしていましたが、心[こころ]の中[なか]はいつも揺[ゆ]れていました。",
      "転機[てんき]が訪[おとず]れたのは、秋[あき]の文化祭[ぶんかさい]の時[とき]でした。マリアは料理[りょうり]が得意[とくい]だったため、クラスの出店[しゅってん]でブラジルの料理[りょうり]を提供[ていきょう]することになりました。彼女[かのじょ]が作[つく]ったフェジョアーダを食[た]べたクラスメイトたちは「おいしい」と笑顔[えがお]を見[み]せ、初[はじ]めて自然[しぜん]に会話[かいわ]が生[う]まれました。その日[ひ]から、少[すこ]しずつ人々[ひとびと]が彼女[かのじょ]に声[こえ]をかけるようになりました。",
      "次第[しだい]に日本語[にほんご]も上達[じょうたつ]し、マリアは学校[がっこう]の生活[せいかつ]に慣[な]れていきました。困[こま]った時[とき]には周[まわ]りの人[ひと]が助[たす]けてくれることに気[き]づき、「人[ひと]の優[やさ]しさは国[くに]が違[ちが]っても変[か]わらない」と感[かん]じるようになりました。彼女[かのじょ]は今[いま]、日本[にほん]語[ご]の勉強[べんきょう]を続[つづ]けながら、将来[しょうらい]は通訳[つうやく]になりたいと夢[ゆめ]を描[えが]いています。",
      "マリアは言[い]います。「移民[いみん]としての生活[せいかつ]は楽[らく]ではないけれど、新[あたら]しい自分[じぶん]を見[み]つけることができた」と。二[ふた]つの文化[ぶんか]の間[あいだ]で生[い]きることは時[とき]に苦[くる]しいが、その経験[けいけん]こそが彼女[かのじょ]の強[つよ]さになっているのです。これからも彼女[かのじょ]の物語[ものがたり]は続[つづ]いていきます。"
    ],
    translation: [
      "When Maria was eighteen, she moved from Brazil to Japan. Due to her father's work, the whole family started a new life. It was her first time in Japan, but she says her anxiety was greater than her expectations. Would she be able to manage in a country with a different language and culture?",
      "What troubled Maria most when she started attending school was Japanese. She could barely understand the lessons, and conversations with classmates often stopped midway. She says she almost cried every day from the frustration of wanting to say something but no words coming out. Every time she saw the kanji in her textbooks, she felt her own helplessness.",
      "Even after three months passed, Maria spent lonely days without making any friends. During breaks she sat alone in the corner of the classroom, and writing letters to her friends from when she was in Brazil was her only comfort. There were nights when she thought, \"Why did I ever come to Japan?\" She put on a brave face in front of her family, but inside she was always wavering.",
      "The turning point came during the autumn culture festival. Because Maria was good at cooking, she ended up serving Brazilian dishes at her class's stall. Her classmates who ate the feijoada she made showed smiles and said \"delicious,\" and for the first time a natural conversation arose. From that day, people gradually started calling out to her.",
      "As her Japanese gradually improved, Maria grew used to school life. She noticed that people around her helped her when she was in trouble, and she came to feel that \"people's kindness does not change even when the country is different.\" She now continues studying Japanese while dreaming of becoming an interpreter in the future.",
      "Maria says, \"Life as an immigrant is not easy, but I was able to find a new self.\" Living between two cultures is sometimes painful, but that very experience has become her strength. Her story continues from here as well."
    ],
    questions: [
      {
        q: "マリアが日本[にほん]へ引[ひ]っ越[こ]した理由[りゆう]は何[なん]ですか。",
        choices: ["自分が留学したかったから", "父の仕事の関係", "ブラジルの学校が気に入らなかったから", "日本の親戚をたずねるため"],
        answerIndex: 1,
        explanation: "第一段で「父の仕事の関係で、家族全員で新しい生活を始めることになった」と書かれています。"
      },
      {
        q: "マリアが最[もっと]も困[こま]らせたものは何[なん]でしたか。",
        choices: ["日本の食べ物", "学校の規則", "日本語", "気候"],
        answerIndex: 2,
        explanation: "第二段で「マリアを最も困らせたのは、日本語でした」と述べられています。"
      },
      {
        q: "転機[てんき]が訪[おとず]れたきっかけは何[なん]ですか。",
        choices: ["文化祭でブラジル料理を出したこと", "成績が良くなったこと", "先生に褒められたこと", "ブラジルに帰省したこと"],
        answerIndex: 0,
        explanation: "第四段で文化祭でブラジル料理を提供したことが転機になったと書かれています。"
      },
      {
        q: "マリアが将来[しょうらい]なりたいと夢見[ゆめみ]ている職業[しょくぎょう]は何[なん]ですか。",
        choices: ["料理人", "教師", "通訳", "医者"],
        answerIndex: 2,
        explanation: "第五段で「将来は通訳になりたいと夢を描いている」と書かれています。"
      },
      {
        q: "本文[ほんぶん]の内容[ないよう]と合[あ]っているのはどれですか。",
        choices: ["マリアは最初から日本での生活を楽しんでいた", "マリアは人の優しさが国によって違うと感じた", "マリアは二つの文化の間で生きる経験を自分の強さにしている", "マリアは最後まで友達ができなかった"],
        answerIndex: 2,
        explanation: "最終段で「二つの文化の間で生きることは時に苦しいが、その経験こそが彼女の強さになっている」と書かれています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-23 — The aging society
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-23",
    title: "少子高齢化[しょうしこうれいか]社会[しゃかい]の課題[かだい]",
    titleReading: "しょうしこうれいかしゃかいのかだい",
    level: "N3",
    summary: "An overview of Japan's declining birthrate and aging population, labor shortages, pension strain, the caregiving crisis, and efforts toward solutions.",
    estMinutes: 8,
    tags: ["society", "demographics", "aging", "policy"],
    body: [
      "日本[にほん]は今[いま]、世界[せかい]でも最[もっと]も高齢化[こうれいか]が進[すす]んだ国[くに]の一[ひと]つです。総[そう]人口[じんこう]に占[し]める六十五[ろくじゅうご]歳[さい]以上[いじょう]の人[ひと]の割合[わりあい]は三[さん]割[わり]を超[こ]え、今後[こんご]も増[ふ]え続[つづ]けると予測[よそく]されています。一方[いっぽう]で、出生率[しゅっしょうりつ]は低[ひく]いまま推移[すいい]しており、若者[わかもの]の数[かず]が減[へ]り続[つづ]けています。この「少子高齢化」は日本[にほん]社会[しゃかい]にとって最[もっと]も深刻[しんこく]な課題[かだい]の一[ひと]つです。",
      "高齢化[こうれいか]が進[すす]む中[なか]で、労働力[ろうどうりょく]不足[ぶそく]が大[おお]きな問題[もんだい]となっています。働[はたら]き手[て]となる若者[わかもの]が減[へ]るため、企業[きぎょう]は人手[ひとで]不足[ぶそく]に悩[なや]んでいます。サービス業[ぎょう]や建設[けんせつ]業[ぎょう]などでは深刻[しんこく]で、店[みせ]が閉[し]まったり、工事[こうじ]が遅[おく]れたりするケースが増[ふ]えています。外国人[がいこくじん]労働者[ろうどうしゃ]の受[う]け入[い]れが進[すす]む一方[いっぽう]で、働[はたら]き方[かた]の見直[みなお]しも求[もと]められています。",
      "年金[ねんきん]制度[せいど]の維持[いじ]も困難[こんなん]な状況[じょうきょう]にあります。現役[げんえき]世代[せだい]が減[へ]る一方[いっぽう]で年金[ねんきん]受給[じゅきょう]者[しゃ]が増[ふ]えるため、制度[せいど]を支[ささ]える負担[ふたん]が重[おも]くなっています。政府[せいふ]は受[う]け取[と]り開始[かいし]年齢[ねんれい]の引き上[あ]げなどを検討[けんとう]していますが、現役[げんえき]世代[せだい]の不安[ふあん]を招[まね]くとして批判[ひはん]もあります。どの世代[せだい]が納得[なっとく]できる形[かたち]をどう作[つく]るかが問[と]われています。",
      "介護[かいご]の負担[ふたん]も深刻[しんこく]な問題[もんだい]です。要介護[ようかいご]高齢者[こうれいしゃ]が増[ふ]える中[なか]で、介護[かいご]職[しょく]の人手[ひとで]が足[た]りません。家族[かぞく]が介護[かいご]を担[に]うケースも多[おお]く、働[はたら]きながら介護[かいご]をする「介護[かいご]離職[りしょく]」が社会[しゃかい]問題[もんだい]となっています。介護[かいご]サービスを利用[りよう]しようとしても、待機[たいき]している人[ひと]が多[おお]く、すぐに使[つか]えない現状[げんじょう]があります。",
      "解決[かいけつ]に向[む]けて、いくつかの取[と]り組[く]みが進[すす]んでいます。女性[じょせい]や高齢者[こうれいしゃ]の就労[しゅうろう]を支[ささ]える制度[せいど]の拡充[かくじゅう]、外国人[がいこくじん]労働者[ろうどうしゃ]の受[う]け入[い]れ拡大[かくだい]、そしてAIやロボットを活用[かつよう]した効率化[こうりつか]などです。特[とく]に介護[かいご]現場[げんば]では、見守[みまも]りロボットや記録[きろく]の自動化[じどうか]などが導入[どうにゅう]され始[はじ]めています。",
      "しかし、技術[ぎじゅつ]や制度[せいど]だけでは解決[かいけつ]できません。地域[ちいき]の人[ひと]と人[ひと]のつながりや、助[たす]け合[あ]いの精神[せいしん]をどう再構築[さいこうちく]するかが大切[たいせつ]です。少子高齢化[しょうしこうれいか]は特定[とくてい]の世代[せだい]だけの問題[もんだい]ではなく、社会[しゃかい]全体[ぜんたい]で考[かんが]えていく必要[ひつよう]があるのです。"
    ],
    translation: [
      "Japan is now one of the most aging countries in the world. The proportion of people aged 65 and over in the total population exceeds 30 percent and is predicted to keep increasing. On the other hand, the birthrate remains low, and the number of young people continues to decline. This \"declining birthrate and aging population\" is one of the most serious challenges for Japanese society.",
      "As aging progresses, a labor shortage has become a major problem. Because the number of young people who can work decreases, companies suffer from staff shortages. It is especially serious in the service and construction industries, with more cases of shops closing and construction being delayed. While the acceptance of foreign workers progresses, work styles also need to be reconsidered.",
      "Maintaining the pension system is also in a difficult situation. As the number of pension recipients increases while the working-age generation shrinks, the burden of supporting the system grows heavier. The government is considering raising the age at which people start receiving pensions, but there is also criticism that this invites anxiety among the working generation. The question is how to create a form acceptable to all generations.",
      "The burden of caregiving is also a serious problem. As the number of elderly requiring care increases, there are not enough care workers. Many families take on caregiving, and \"caregiving quitting\" — leaving work to provide care — has become a social issue. Even when people try to use caregiving services, many are on waiting lists and cannot use them immediately.",
      "Toward a solution, several initiatives are progressing: expanding systems to support women's and elderly people's employment, expanding the acceptance of foreign workers, and improving efficiency using AI and robots. In caregiving settings especially, monitoring robots and automation of records have begun to be introduced.",
      "However, technology and systems alone cannot solve it. How to reconstruct human connections and the spirit of mutual aid within communities is important. Declining birthrate and aging population is not a problem of a specific generation only; society as a whole needs to think about it."
    ],
    questions: [
      {
        q: "日本[にほん]の現状[げんじょう]について本文[ほんぶん]が述[の]べているのは何[なん]ですか。",
        choices: ["65歳以上の割合が3割を超えている", "出生率が上がり続けている", "若者の数が増えている", "総人口が急速に増えている"],
        answerIndex: 0,
        explanation: "第一段で「65歳以上の人の割合は3割を超え」と書かれています。"
      },
      {
        q: "労働力[ろうどうりょく]不足[ぶそく]の影響[えいきょう]として挙[あ]げられているのは何[なん]ですか。",
        choices: ["給料が上がること", "店が閉まったり工事が遅れたりすること", "外国人労働者が減ること", "若者が起業しやすくなること"],
        answerIndex: 1,
        explanation: "第二段でサービス業や建設業で「店が閉まったり、工事が遅れたりするケースが増えている」と述べられています。"
      },
      {
        q: "「介護[かいご]離職[りしょく]」とは何[なん]ですか。",
        choices: ["介護の仕事を辞めること", "働きながら介護をすることで仕事を辞めること", "介護施設が閉まること", "介護士が足りないこと"],
        answerIndex: 1,
        explanation: "第四段で「働きながら介護をする」ことで仕事を辞めることと説明されています。"
      },
      {
        q: "解決策[かいけつさく]として挙[あ]げられていないものはどれですか。",
        choices: ["女性や高齢者の就労を支える制度の拡充", "外国人労働者の受け入れ拡大", "若者の就労禁止", "AIやロボットの活用"],
        answerIndex: 2,
        explanation: "第五段で挙げられているのは制度拡充、外国人労働者拡大、AI/ロボット活用で、若者の就労禁止はありません。"
      },
      {
        q: "筆者[ひっしゃ]は少子高齢化[しょうしこうれいか]をどういう問題[もんだい]と捉[とら]えていますか。",
        choices: ["特定の世代だけの問題", "技術だけで解決できる問題", "社会全体で考えるべき問題", "もう解決済みの問題"],
        answerIndex: 2,
        explanation: "最終段で「特定の世代だけの問題ではなく、社会全体で考えていく必要がある」と述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-24 — A high school sports festival
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-24",
    title: "高校[こうこう]の体育祭[たいいくさい]",
    titleReading: "こうこうのたいいくさい",
    level: "N3",
    summary: "A look at a Japanese high school sports festival, from preparation to the day of the event, and what students gain from the experience of class competition.",
    estMinutes: 6,
    tags: ["school", "sports", "youth", "community"],
    body: [
      "日本[にほん]の高校[こうこう]では、毎年[まいとし]秋[あき]になると体育祭[たいいくさい]が行[おこな]われます。クラス対抗[たいこう]でさまざまな競技[きょうぎ]を行[おこな]い、点数[てんすう]を競[きそ]い合[あ]うのが一般[いっぱん]的[てき]です。生徒[せいと]たちは数[すう]か月[げつ]前[まえ]から準備[じゅんび]を始[はじ]め、役割[やくわり]を分担[ぶんたん]して当日[とうじつ]に備[そな]えます。体育祭[たいいくさい]は高校生活[こうこうせいかつ]の大切[たいせつ]な行事[ぎょうじ]の一[ひと]つです。",
      "準備[じゅんび]は大変[たいへん]ですが、生徒[せいと]たちにとっては楽[たの]しい時間[じかん]でもあります。応援[おうえん]団[だん]はダンスや掛[か]け声[ごえ]を考[かんが]え、衣装[いしょう]や道具[どうぐ]を手作[てづく]りします。競技[きょうぎ]に出[で]る生徒[せいと]は放課[ほうか]に練習[れんしゅう]を重[かさ]ね、クラス全員[ぜんいん]で勝[か]つための工夫[くふう]を話[はな]し合[あ]います。少[すこ]し疲[つか]れても、みんなの顔[かお]には笑顔[えがお]が浮[う]かんでいます。",
      "当日[とうじつ]の朝[あさ]、校庭[こうてい]には色[いろ]とりどりの旗[はた]が立[た]てられ、生徒[せいと]たちはクラスごとに整列[せいれつ]します。開会式[かいかいしき]の後[あと]、最初[さいしょ]の競技[きょうぎ]が始[はじ]まります。百[ひゃく]メートル走[そう]やリレーなど、個人[こじん]の能力[のうりょく]が試[ため]される種目[しゅもく]から、組体操[くたいそう]や綱引[つなひ]きなど、チームワークが求[もと]められる種目[しゅもく]まで多彩[たさい]です。",
      "生徒[せいと]たちが最[もっと]も盛[も]り上[あ]がるのは、クラス対抗[たいこう]リレーです。各[かく]クラスの代表[だいひょう]がバトンを繋[つな]ぎ、全員[ぜんいん]で応援[おうえん]します。最後[さいご]の走者[そうしゃ]がゴールする瞬間[しゅんかん]は、歓声[かんせい]と涙[なみだ]が交[まじ]り合[あ]います。勝[か]ったクラスは抱[いだ]き合[あ]って喜[よろこ]び、負[ま]けたクラスも悔[くや]しさをバネに次[つぎ]の年[とし]へ向[む]かいます。",
      "体育祭[たいいくさい]は単[たん]なる運動[うんどう]会[かい]ではありません。クラスの団結[だんけつ]力[りょく]を高[たか]め、生徒[せいと]同士[どうし]の絆[きずな]を深[ふか]める大切[たいせつ]な機会[きかい]です。普段[ふだん]勉強[べんきょう]に集中[しゅうちゅう]している生徒[せいと]が、別[べつ]の面[めん]で活躍[かつやく]できるのも魅力[みりょく]です。終[お]わった後[あと]の達成感[たっせいかん]は、高校[こうこう]時代[じだい]の忘[わす]れられない思[おも]い出[で]になるでしょう。"
    ],
    translation: [
      "In Japanese high schools, sports festivals are held every year in autumn. Classes compete against each other in various events and compete for points. Students begin preparing several months in advance, dividing roles to get ready for the day. The sports festival is one of the important events of high school life.",
      "Preparation is hard work, but it is also an enjoyable time for students. The cheering squad invents dances and chants and makes costumes and tools by hand. Students who participate in events practice after school and discuss strategies to win together as a class. Even if they are a little tired, smiles appear on everyone's faces.",
      "On the morning of the day, colorful flags are raised in the schoolyard, and students line up by class. After the opening ceremony, the first event begins. There are many kinds of events, from those that test individual ability, such as the 100-meter dash and relay, to those that require teamwork, such as group gymnastics and tug of war.",
      "What excites students the most is the class relay. Representatives of each class pass the baton, and everyone cheers together. The moment the final runner crosses the finish line, cheers and tears mingle. The winning class hugs each other in joy, and the losing class turns frustration into a springboard for the next year.",
      "The sports festival is not just a sports meet. It is an important opportunity that strengthens class cohesion and deepens bonds between students. Another appeal is that students who usually focus on studying can shine in another area. The sense of accomplishment afterward will become an unforgettable memory of their high school days."
    ],
    questions: [
      {
        q: "体育祭[たいいくさい]はいつ行[おこな]われるのが一般[いっぱん]的[てき]ですか。",
        choices: ["春", "夏", "秋", "冬"],
        answerIndex: 2,
        explanation: "第一段で「秋になると体育祭が行われる」と書かれています。"
      },
      {
        q: "生徒[せいと]たちは準備[じゅんび]でどのようなことをしますか。",
        choices: ["応援団がダンスや掛け声を考える", "試験勉強をする", "校外学習に行く", "新しい制服を買う"],
        answerIndex: 0,
        explanation: "第二段で「応援団はダンスや掛け声を考え、衣装や道具を手作りする」と書かれています。"
      },
      {
        q: "クラス対抗[たいこう]リレーで最後[さいご]の走者[そうしゃ]がゴールした時[とき]の様子[ようす]はどうですか。",
        choices: ["静かになる", "歓声と涙が交じり合う", "誰も反応しない", "先生だけが喜ぶ"],
        answerIndex: 1,
        explanation: "第四段で「最後の走者がゴールする瞬間は、歓声と涙が交じり合う」と書かれています。"
      },
      {
        q: "体育祭[たいいくさい]の意義[いぎ]として本文[ほんぶん]が挙[あ]げているのは何[なん]ですか。",
        choices: ["勉強の成績が上がること", "クラスの団結力を高めること", "体育の成績だけが良くなること", "生徒が学校を休むこと"],
        answerIndex: 1,
        explanation: "第五段で「クラスの団結力を高め、生徒同士の絆を深める大切な機会」と述べられています。"
      },
      {
        q: "本文[ほんぶん]の内容[ないよう]と合[あ]っているのはどれですか。",
        choices: ["体育祭は勉強に集中している生徒には無関係である", "体育祭は高校生活の大切な行事の一つである", "体育祭は準備が不要である", "体育祭は春に行われるのが一般的である"],
        answerIndex: 1,
        explanation: "第一段で「体育祭は高校生活の大切な行事の一つ」と書かれています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-25 — The role of AI in education
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-25",
    title: "教育[きょういく]におけるAIの役割[やくわり]",
    titleReading: "きょういくにおけるえーあいのやくわり",
    level: "N3",
    summary: "An examination of how AI is being used in education, its benefits for personalized learning, why teachers will not be replaced, and concerns about dependence, fairness, and privacy.",
    estMinutes: 9,
    tags: ["technology", "education", "AI", "ethics"],
    body: [
      "近年[きんねん]、人工知能[じんこうちのう]、つまりAIが教育[きょういく]の現場[げんば]に導入[どうにゅう]され始[はじ]めています。生徒[せいと]一人[ひとり]一人[ひとり]の理解度[りかいど]や学習[がくしゅう]ペースに合[あ]わせた指導[しどう]が可能[かのう]になるなど、AIは教育[きょういく]に大[おお]きな変化[へんか]をもたらしています。一方[いっぽう]で、AIへの過度[かど]な依存[いぞん]に対[たい]する懸念[けねん]も少[すく]なくありません。",
      "AIの最大[さいだい]の強[つよ]みは、個別[こべつ]最適[さいてき]化[か]された学習[がくしゅう]を提供[ていきょう]できることです。従来[じゅうらい]の授業[じゅぎょう]では、先生[せんせい]が一[ひと]つのクラス全員[ぜんいん]に同[おな]じ内容[ないよう]を教[おし]えるのが基本[きほん]でした。しかし、AIを使[つか]えば、生徒[せいと]がつまずいた箇所[かしょ]を自動的[じどうてき]に検出[けんしゅつ]し、必要[ひつよう]な問題[もんだい]だけを提示[ていじ]することができます。これにより、効率[こうりつ]的[てき]な学習[がくしゅう]が可能[かのう]になります。",
      "ただし、AIが教師[きょうし]に取[と]って代[か]わるわけではありません。知識[ちしき]を伝[つた]えるだけでなく、生徒[せいと]の感情[かんじょう]に寄[よ]り添[そ]い、励[はげ]ますことのできる人間[にんげん]の役割[やくわり]は、AIには果[は]たせません。むしろ、AIが定型的[ていけいてき]な作業[さぎょう]を担[に]なうことで、教師[きょうし]はより本質[ほんしつ]的[てき]な指導[しどう]に集中[しゅうちゅう]できるようになる、と考[かんが]える専門家[せんもんか]もいます。",
      "懸念[けねん]も少[すく]なくありません。第一[だいいち]に、生徒[せいと]が答[こた]えをすぐにAIに求[もと]めるようになり、自[みずか]ら考[かんが]える力[ちから]が弱[よわ]まる恐[おそ]れがあります。第二[だいに]に、デジタル機器[きき]やインターネット環境[かんきょう]に恵[めぐ]まれない家庭[かてい]の生徒[せいと]との格差[かくさ]が広[ひろ]がる「情報[じょうほう]格差[かくさ]」の問題[もんだい]もあります。技術[ぎじゅつ]が進[すす]むほど、公平[こうへい]性[せい]の確保[かくほ]が大切[たいせつ]になります。",
      "また、個人情報[こじんじょうほう]や学習[がくしゅう]データの取[と]り扱[あつか]いにも注意[ちゅうい]が必要[ひつよう]です。生徒[せいと]の学習[がくしゅう]記録[きろく]は大量[たいりょう]に蓄積[ちくせき]されるため、誰[だれ]が、どのように管理[かんり]するのかを明確[めいかく]にしなければなりません。子[こ]どもたちのプライバシーを守[まも]りつつ、AIを活用[かつよう]する仕組[しく]み作[づく]りが求[もと]められています。",
      "教育[きょういく]におけるAIの役割[やくわり]は、これからますます大[おお]きくなるでしょう。しかし、最終[さいしゅう]的[てき]に大切[たいせつ]なのは、人間[にんげん]とAIがどう協働[きょうどう]するかです。技術[ぎじゅつ]を上手[じょうず]に使[つか]いこなしながらも、人間[にんげん]らしさを大切[たいせつ]にする教育[きょういく]のあり方[かた]を考[かんが]え続[つづ]ける必要[ひつよう]があるのです。"
    ],
    translation: [
      "In recent years, artificial intelligence, or AI, has begun to be introduced in educational settings. AI brings major changes to education, such as making instruction tailored to each student's level of understanding and learning pace possible. On the other hand, there are also many concerns about over-dependence on AI.",
      "The greatest strength of AI is that it can provide personalized learning. In conventional classes, the basic approach was for a teacher to teach the same content to an entire class. However, using AI, it can automatically detect where a student stumbled and present only the necessary problems. This enables efficient learning.",
      "However, AI will not replace teachers. The role of humans — who not only transmit knowledge but also empathize with students' feelings and encourage them — cannot be fulfilled by AI. Rather, some experts think that as AI takes on routine tasks, teachers will be able to focus on more essential instruction.",
      "There are also many concerns. First, there is a fear that students may quickly seek answers from AI, weakening their ability to think for themselves. Second, there is the problem of the \"information gap\" widening for students from households without access to digital devices or internet environments. The more technology advances, the more important it becomes to ensure fairness.",
      "In addition, careful handling of personal information and learning data is necessary. Because large amounts of learning records are accumulated, it must be made clear who manages them and how. While protecting children's privacy, a system for utilizing AI must be built.",
      "The role of AI in education will likely grow even larger from here. However, what matters ultimately is how humans and AI collaborate. There is a need to keep thinking about what kind of education makes good use of technology while valuing human qualities."
    ],
    questions: [
      {
        q: "AIの最大[さいだい]の強[つよ]みは何[なん]ですか。",
        choices: ["先生に代わって感情を伝えること", "個別最適化された学習を提供すること", "完全にテストを廃止すること", "子どもたちのプライバシーを守ること"],
        answerIndex: 1,
        explanation: "第二段で「AIの最大の強みは、個別最適化された学習を提供できること」と書かれています。"
      },
      {
        q: "本文[ほんぶん]によると、AIが教師[きょうし]に取[と]って代[か]わることはなぜないのですか。",
        choices: ["AIは知識を伝えられないから", "AIは高すぎるから", "生徒の感情に寄り添い、励ます役割はAIに果たせないから", "AIは授業に使えないから"],
        answerIndex: 2,
        explanation: "第三段で「生徒の感情に寄り添い、励ますことのできる人間の役割は、AIには果たせない」と述べられています。"
      },
      {
        q: "AIの利用[りよう]に対[たい]する懸念[けねん]として挙[あ]げられていないのはどれですか。",
        choices: ["自分で考える力が弱まる恐れ", "情報格差の拡大", "個人情報の取り扱い", "先生の給料が上がらないこと"],
        answerIndex: 3,
        explanation: "第四・五段で挙げられているのは考える力の低下、情報格差、個人情報で、給料問題はありません。"
      },
      {
        q: "情報[じょうほう]格差[かくさ]について、本文[ほんぶん]はどう述[の]べていますか。",
        choices: ["デジタル機器に恵まれない家庭の生徒との格差が広がる", "AIを使うと格差がなくなる", "格差は問題ではない", "都市部だけの問題である"],
        answerIndex: 0,
        explanation: "第四段で「デジタル機器やインターネット環境に恵まれない家庭の生徒との格差が広がる」と書かれています。"
      },
      {
        q: "筆者[ひっしゃ]が最終[さいしゅう]的[てき]に大切[たいせつ]だとしているのは何[なん]ですか。",
        choices: ["AIを完全に教育から排除すること", "人間とAIがどう協働するかを考えること", "すべての授業をAIに任せること", "技術を一切使わない教育に戻すこと"],
        answerIndex: 1,
        explanation: "最終段で「最終的に大切なのは、人間とAIがどう協働するか」と述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-26 — A story about friendship across cultures
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-26",
    title: "文化[ぶんか]の壁[かべ]を越[こ]える友情[ゆうじょう]",
    titleReading: "ぶんかのかべをこえるゆうじょう",
    level: "N3",
    summary: "The story of Yuki, a Japanese high school student, and Anna, an exchange student from Germany, who overcome cultural misunderstandings to build a lasting friendship.",
    estMinutes: 7,
    tags: ["story", "friendship", "culture", "communication"],
    body: [
      "ユキは高校[こうこう]二年[にねん]生[せい]の時[とき]、ドイツから来[き]た留学生[りゅうがくせい]アンナと同[おな]じクラスになりました。初[はじ]めて会[あ]った日[ひ]、アンナは元気[げんき]に「こんにちは」と日本語[にほんご]で挨拶[あいさつ]してくれました。しかし、その後[ご]の会話[かいわ]はうまく続[つづ]かず、二人[ふたり]の間[あいだ]には目[め]に見[み]えない壁[かべ]があるように感[かん]じられました。ユキは、「本当[ほんとう]に友達[ともだち]になれるのだろうか」と不安[ふあん]でした。",
      "しばらくして、ユキはある出来事[できごと]で戸惑[とまど]いました。アンナがユキの意見[いけん]に対[たい]して「それは違[ちが]うと思[おも]う」と率直[そっちょく]に言[い]ったのです。日本[にほん]では相手[あいて]を傷[きず]つけないように婉曲[えんきょく]に言[い]うのが普通[ふつう]ですが、ドイツでは自分[じぶん]の意見[いけん]をはっきり伝[つた]えることが誠実[せいじつ]さの表[あらわ]れだとアンナは考[かんが]えていました。文化[ぶんか]の違[ちが]いが、誤解[ごかい]を生[しょう]じたのです。",
      "誤解[ごかい]が解[と]けたのは、アンナがユキに手紙[てがみ]を書[か]いた時[とき]でした。「正直[しょうじき]に言[い]ったのは、あなたを信[しん]じているから。傷[きず]つけるつもりはなかった」という言葉[ことば]を読[よ]んで、ユキはアンナの気持[きも]ちに気[き]づきました。ユキも自分[じぶん]の感[かん]じたことを正直[しょうじき]に伝[つた]え、二人[ふたり]は互[たが]いの文化[ぶんか]の違[ちが]いについて語[かた]り合[あ]い始[はじ]めました。",
      "それから、二人[ふたり]は一緒[いっしょ]にさまざまなことを経験[けいけん]しました。ユキはアンナに日本[にほん]の料理[りょうり]や祭[まつ]りを紹介[しょうかい]し、アンナはユキにドイツの文化[ぶんか]や言葉[ことば]を教[おし]えました。言葉[ことば]が通[つう]じない時[とき]は、ジェスチャーや笑顔[えがお]で補[おぎな]い合[あ]いました。失敗[しっぱい]して笑[わら]い合[あ]ううちに、二人[ふたり]の絆[きずな]は深[ふか]まっていきました。",
      "アンナが日本[にほん]に滞在[たいざい]していた一年[いちねん]は、あっという間に過[す]ぎました。帰国[きこく]の日[ひ]、二人[ふたり]は空港[くうこう]で涙[なみだ]を流[なが]しながら「また会[あ]おう」と約束[やくそく]しました。ユキは「アンナのおかげで、違[ちが]う文化[ぶんか]の人[ひと]と理解[りかい]し合[あ]うことの大切[たいせつ]さを学[まな]んだ」と言[い]います。",
      "今[いま]も二人[ふたり]はオンラインで連絡[れんらく]を取[と]り合[あ]い、互[たが]いの近況[きんきょう]を報告[ほうこく]し合[あ]っています。文化[ぶんか]の壁[かべ]を越[こ]えた友情[ゆうじょう]は、距離[きょり]があっても色[いろ]あせることがありません。ユキにとって、アンナとの出会[であ]いは人生[じんせい]で最[もっと]も大切[たいせつ]な出来事[できごと]の一[ひと]つになったのです。"
    ],
    translation: [
      "When Yuki was a second-year high school student, she was put in the same class as Anna, an exchange student from Germany. On the day they first met, Anna greeted her cheerfully in Japanese, \"Hello.\" However, the conversation that followed did not go smoothly, and it felt as if there was an invisible wall between them. Yuki was anxious, wondering whether they could really become friends.",
      "Some time later, Yuki was bewildered by an incident. Anna had said frankly to Yuki's opinion, \"I think that's wrong.\" In Japan, it is common to say things euphemistically so as not to hurt the other person, but in Germany, Anna thought that expressing one's opinion clearly was a sign of sincerity. The cultural difference gave rise to a misunderstanding.",
      "The misunderstanding was resolved when Anna wrote a letter to Yuki. Reading the words, \"I said it honestly because I trust you. I never meant to hurt you,\" Yuki realized how Anna felt. Yuki also expressed her feelings honestly, and the two began to talk about the differences in their cultures.",
      "From then on, the two experienced various things together. Yuki introduced Japanese cuisine and festivals to Anna, and Anna taught Yuki about German culture and language. When they could not communicate in words, they supplemented with gestures and smiles. As they failed and laughed together, their bond deepened.",
      "The one year Anna stayed in Japan passed in a flash. On the day she returned home, the two cried at the airport and promised, \"Let's meet again.\" Yuki says, \"Thanks to Anna, I learned the importance of understanding people from different cultures.\"",
      "Even now, the two keep in touch online and report on each other's recent situations. Friendship that crosses the wall of culture does not fade even with distance. For Yuki, meeting Anna became one of the most important events in her life."
    ],
    questions: [
      {
        q: "ユキが最初[さいしょ]にアンナに対[たい]して感[かん]じたのは何[なん]ですか。",
        choices: ["すぐに友達になれるという期待", "目に見えない壁があるような不安", "アンナが嫌いだという気持ち", "アンナが下手だという軽蔑"],
        answerIndex: 1,
        explanation: "第一段で「二人の間には目に見えない壁があるように感じられ」「本当に友達になれるのだろうかと不安でした」と書かれています。"
      },
      {
        q: "アンナがユキの意見[いけん]に対[たい]して「違[ちが]う」と率直[そっちょく]に言[い]ったのはなぜですか。",
        choices: ["ユキを傷つけたかったから", "ドイツでは自分の意見をはっきり伝えることが誠実さの表れだから", "日本語が下手だったから", "ユキを試したかったから"],
        answerIndex: 1,
        explanation: "第二段でドイツでは自分の意見をはっきり伝えることが誠実さの表れだと考えると説明されています。"
      },
      {
        q: "誤解[ごかい]が解[と]けたきっかけは何[なん]ですか。",
        choices: ["先生が間に入ったこと", "アンナが手紙を書いたこと", "ユキがドイツへ行ったこと", "クラス替えがあったこと"],
        answerIndex: 1,
        explanation: "第三段で「アンナがユキに手紙を書いた時」に誤解が解けたと書かれています。"
      },
      {
        q: "二人[ふたり]が言葉[ことば]が通[つう]じない時[とき]に使[つか]った方法[ほうほう]は何[なん]ですか。",
        choices: ["通訳を雇うこと", "ジェスチャーや笑顔で補い合うこと", "諦めて話さないこと", "筆談だけですること"],
        answerIndex: 1,
        explanation: "第四段で「言葉が通じない時は、ジェスチャーや笑顔で補い合った」と書かれています。"
      },
      {
        q: "本文[ほんぶん]の内容[ないよう]と合[あ]っているのはどれですか。",
        choices: ["アンナとの出会いはユキにとって大切な出来事になった", "二人は帰国後連絡を取るのをやめた", "文化の違いが友情を壊した", "アンナは日本語を全く学ばなかった"],
        answerIndex: 0,
        explanation: "最終段で「アンナとの出会いは人生で最も大切な出来事の一つになった」と述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-27 — Japanese pop music culture
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-27",
    title: "日本[にほん]のポップ音楽[おんがく]文化[ぶんか]",
    titleReading: "にほんのぽっぷおんがくぶんか",
    level: "N3",
    summary: "An overview of J-pop's evolution, the role of idol culture and anime songs, how streaming and social media are changing music consumption, and the challenges facing artists and venues.",
    estMinutes: 7,
    tags: ["music", "culture", "entertainment", "technology"],
    body: [
      "日本[にほん]のポップ音楽[おんがく]、いわゆる「Jポップ」は、日本[にほん]の大[おお]衆[しゅう]文化[ぶんか]を代表[だいひょう]する存在[そんざい]です。1990年代[ねんだい]以降[いこう]、独自[どくじ]の進化[しんか]を遂[と]げ、現在[げんざい]では多種多様[たしゅたよう]なジャンルが存在[そんざい]します。若者[わかもの]だけではなく、幅広[はばひろ]い世代[せだい]の人々[ひとびと]に親[した]しまれています。",
      "Jポップの特徴[とくちょう]の一[ひと]つは、アイドル文化[ぶんか]の存在[そんざい]です。アイドルは歌[うた]やダンスだけでなく、バラエティ番組[ばんぐみ]やSNSなど幅広[はばひろ]い媒体[ばいたい]で活躍[かつやく]します。ファンは応援[おうえん]するだけでなく、アイドルの成長[せいちょう]を見守[みまも]ることに楽[たの]しみを見出[みいだ]します。グループのメンバーが定期的[ていきてき]に入[い]れ替[か]わる仕組[しく]みも、長[なが]期間[きかん]にわたる人気[にんき]を支[ささ]えています。",
      "また、アニメソングも重要[じゅうよう]な位置[いち]を占[し]めています。日本[にほん]のアニメは海外[かいがい]でも人気[にんき]が高[たか]く、主題歌[しゅだいか]も世界[せかい]中[ちゅう]で聞[き]かれています。特[とく]に近年[きんねん]は、アニメと連動[れんどう]した楽曲[がっきょく]が海外[かいがい]のチャートで上位[じょうい]にランクインするケースも増[ふ]え、日本[にほん]の音楽[おんがく]産業[さんぎょう]の新[あたら]しい展開[てんかい]を示しています。",
      "インターネットの普及[ふきゅう]は、音楽[おんがく]の消費[しょうひ]の仕方[かた]を大[おお]きく変[か]えました。CDを買[か]う人が減[へ]る一方[いっぽう]で、ストリーミングサービスを利用[りよう]する人が増[ふ]えています。さらに、SNSで短[みじか]い動画[どうが]と共[とも]に楽曲[がっきょく]が拡散[かくさん]されることで、未知[みち]のアーティストが急[きゅう]に人気[にんき]を集[あつ]めることもあります。",
      "一方[いっぽう]で、課題[かだい]もあります。デジタル化[か]が進[すす]む中[なか]で、ライブハウスやCDショップなど、実店舗[じってんぽ]の存続[そんぞく]が危[あや]ぶまれています。また、アーティストの収入[しゅうにゅう]構造[こうぞう]が変[か]わり、ストリーミングだけでは生活[せいかつ]が成[な]り立[た]たない若手[わかて]も少[すく]なくありません。",
      "日本[にほん]のポップ音楽[おんがく]文化[ぶんか]は、時代[じだい]と共[とも]に形[かたち]を変[か]えながら、人々[ひとびと]の心[こころ]を動[うご]かし続[つづ]けています。技術[ぎじゅつ]の変化[へんか]に柔軟[じゅうなん]に対応[たいおう]しつつ、音楽[おんがく]が持[も]つ人[ひと]と人[ひと]を結[むす]ぶ力[ちから]を大切[たいせつ]にしていくことが、これからのJポップには求[もと]められるでしょう。"
    ],
    translation: [
      "Japanese pop music, the so-called \"J-pop,\" is a presence that represents Japanese popular culture. Since the 1990s, it has evolved in its own way, and now there are many diverse genres. It is loved not only by young people but by people of a wide range of generations.",
      "One characteristic of J-pop is the existence of idol culture. Idols are active not only in singing and dancing but also across a wide range of media, such as variety shows and social media. Fans not only cheer for them but also find joy in watching the idols grow. The system in which group members are periodically replaced also supports popularity over long periods.",
      "Anime songs also occupy an important position. Japanese anime is highly popular overseas, and theme songs are listened to all over the world. Especially in recent years, there are more cases where songs linked to anime rank high on overseas charts, showing a new development in the Japanese music industry.",
      "The spread of the Internet has greatly changed how music is consumed. While the number of people buying CDs decreases, more people use streaming services. Furthermore, as songs are spread along with short videos on social media, unknown artists may suddenly gain popularity.",
      "On the other hand, there are challenges. As digitization advances, the survival of physical venues such as live houses and CD shops is in jeopardy. Also, the income structure of artists has changed, and there are many newcomers for whom streaming alone is not enough to make a living.",
      "Japanese pop music culture continues to move people's hearts while changing its form with the times. While flexibly responding to changes in technology, valuing the power of music to connect people will likely be required of J-pop from here on."
    ],
    questions: [
      {
        q: "Jポップが独自[どくじ]の進化[しんか]を遂[と]げ始[はじ]めたのはいつ頃[ころ]からですか。",
        choices: ["1960年代以降", "1990年代以降", "2010年代以降", "2020年代以降"],
        answerIndex: 1,
        explanation: "第一段で「1990年代以降、独自の進化を遂げた」と書かれています。"
      },
      {
        q: "アイドル文化[ぶんか]の特徴[とくちょう]として挙[あ]げられているのは何[なん]ですか。",
        choices: ["歌とダンスだけで活動すること", "グループのメンバーが定期的に入れ替わること", "海外では活動しないこと", "必ずアニメの主題歌を歌うこと"],
        answerIndex: 1,
        explanation: "第二段で「グループのメンバーが定期的に入れ替わる仕組み」が人気を支えていると書かれています。"
      },
      {
        q: "アニメソングについて本文[ほんぶん]が述[の]べているのは何[なん]ですか。",
        choices: ["国内でしか聞かれない", "海外のチャートで上位にランクインすることがある", "Jポップとは関係ない", "最近は人気が下がっている"],
        answerIndex: 1,
        explanation: "第三段で「アニメと連動した楽曲が海外のチャートで上位にランクインするケースも増えた」と述べられています。"
      },
      {
        q: "インターネット普及[ふきゅう]の影響[えいきょう]として挙[あ]げられているのは何[なん]ですか。",
        choices: ["CDを買う人が増えた", "ストリーミングを利用する人が増えた", "アーティストが減った", "アニメが作られなくなった"],
        answerIndex: 1,
        explanation: "第四段で「ストリーミングサービスを利用する人が増えている」と書かれています。"
      },
      {
        q: "課題[かだい]として挙[あ]げられていないものはどれですか。",
        choices: ["ライブハウスの存続が危ぶまれること", "若手アーティストの収入問題", "ストリーミングだけでは生活が成り立たないこと", "アニメの制作本数が減ること"],
        answerIndex: 3,
        explanation: "第五段で挙げられているのは実店舗の存続と若手の収入問題で、アニメ制作本数の減少はありません。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-28 — A hometown revitalization project
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-28",
    title: "ふるさと再生[さいせい]の物語[ものがたり]",
    titleReading: "ふるさとさいせいのものがたり",
    level: "N3",
    summary: "The story of Daiki, who leaves Tokyo to return to his declining hometown, develops local specialty products and experiential tourism, and slowly brings the town back to life.",
    estMinutes: 8,
    tags: ["community", "revitalization", "rural", "story"],
    body: [
      "山奥[やまおく]にある小[ちい]さな町[まち]、緑川[みどりかわ]町[まち]は、かつては林業[りんぎょう]で栄[さか]えていました。しかし、林業[りんぎょう]の衰退[すいたい]と若者[わかもの]の都市[とし]流出[りゅうしゅつ]により、人口[じんこう]は最盛期[さいせいき]の半分[はんぶん]以下[いか]になっていました。空[あ]き家[や]が増[ふ]え、商店[しょうてん]は次々[つぎつぎ]に閉[し]まり、町[まち]全体[ぜんたい]に活気[かっき]が失[うしな]われていました。",
      "その町[まち]に、東京[とうきょう]で会社員[かいしゃいん]をしていた大輝[だいき]が帰[かえ]ってきました。父[ちち]が病気[びょうき]になったことを機[き]に、故郷[こきょう]を立[た]て直[なお]したいという考[かんが]えが強[つよ]くなったのです。最初[さいしょ]は周[まわ]りの人[ひと]から「若[わか]いのに、もったいない」と言[い]われました。しかし大輝[だいき]は、「この町[まち]の良[よ]さをもう一度[いちど]見直[みなお]したい」と語[かた]りました。",
      "大輝[だいき]が最初[さいしょ]に取[と]り組[く]んだのは、特産品[とくさんひん]を使[つか]った商品[しょうひん]の開発[かいはつ]でした。地元[じもと]の米[こめ]を使[つか]ったお酒[さけ]や、山[やま]の木[き]で作[つく]った工芸品[こうげいひん]など、町[まち]の資源[しげん]を活用[かつよう]した商品[しょうひん]を次々[つぎつぎ]に生[う]み出[だ]しました。そして、インターネットを通[つう]じて全国[ぜんこく]に販売[はんばい]する仕組[しく]みを作[つく]りました。",
      "最初[さいしょ]は懐疑的[かいぎてき]だった地元[じもと]の人々[ひとびと]も、売[う]れ行[ゆ]きが伸[の]びるにつれて少[すこ]しずつ協力[きょうりょく]的[てき]になっていきました。特[とく]に、若者[わかもの]が町[まち]に戻[もど]り、新[あたら]しいアイデアを提案[ていあん]するようになったことが大[おお]きな変化[へんか]でした。休耕[きゅうこう]田[でん]でイベントを開[ひら]いたり、古[ふる]い民家[みんか]を改修[かいしゅう]してカフェにしたりと、町[まち]には少[すこ]しずつ活気[かっき]が戻[もど]ってきました。",
      "観光[かんこう]面[めん]でも成果[せいか]が出[で]ました。緑川[みどりかわ]町[まち]の自然[しぜん]と文化[ぶんか]を体験[たいけん]するツアーを企画[きかく]したところ、都市部[としぶ]からの人々[ひとびと]が訪[おとず]れるようになりました。体験[たいけん]型[がた]の観光[かんこう]は、単[たん]に見[み]るだけの旅行[りょこう]とは違[ちが]い、訪[おとず]れる人[ひと]と町[まち]の人[ひと]の双方[そうほう]に喜[よろこ]びをもたらしました。",
      "もちろん、課題[かだい]はまだ残[のこ]っています。少子高齢化[しょうしこうれいか]は続[つづ]いており、完全[かんぜん]な再生[さいせい]には時間[じかん]がかかるでしょう。しかし大輝[だいき]は、「小[ちい]さな一歩[いっぽ]を積[つ]み重[かさ]ねることが大切[たいせつ]だ」と言[い]います。緑川[みどりかわ]町[まち]の挑戦[ちょうせん]は、日本[にほん]中[じゅう]の地方[ちほう]都市[とし]にとって一[ひと]つの希望[きぼう]となっています。"
    ],
    translation: [
      "Midorigawa Town, a small town in the mountains, once flourished with forestry. However, due to the decline of forestry and the outflow of young people to cities, the population fell to less than half of its peak. Vacant houses increased, shops closed one after another, and the town as a whole lost its vitality.",
      "To that town returned Daiki, who had been a company employee in Tokyo. When his father fell ill, the desire to rebuild his hometown grew stronger. At first, people around him said, \"You're young; what a waste.\" However, Daiki said, \"I want to look once again at the good qualities of this town.\"",
      "The first thing Daiki worked on was developing products using specialty goods. He created one after another products that utilized the town's resources, such as sake made from local rice and crafts made from wood of the mountains. Then he built a system to sell them nationwide via the Internet.",
      "The local people, who were skeptical at first, gradually became cooperative as sales grew. In particular, it was a big change that young people returned to the town and began proposing new ideas. As events were held in fallow fields and old folk houses were renovated into cafes, the town gradually regained its vitality.",
      "Results also appeared in tourism. When a tour to experience Midorigawa Town's nature and culture was planned, people from urban areas began to visit. Experiential tourism, unlike travel that is only about seeing, brought joy both to the visitors and to the people of the town.",
      "Of course, challenges still remain. Declining birthrate and aging population continues, and complete revitalization will take time. However, Daiki says, \"Accumulating small steps is important.\" Midorigawa Town's challenge has become a hope for regional cities across Japan."
    ],
    questions: [
      {
        q: "緑川[みどりかわ]町[まち]が衰退[すいたい]した理由[りゆう]として挙[あ]げられているのは何[なん]ですか。",
        choices: ["林業の衰退と若者の都市流出", "大きな地震があったこと", "工場が閉鎖したこと", "観光客が多すぎたこと"],
        answerIndex: 0,
        explanation: "第一段で「林業の衰退と若者の都市流出により、人口は最盛期の半分以下になった」と書かれています。"
      },
      {
        q: "大輝[だいき]が町[まち]に帰[かえ]ってきた理由[りゆう]は何[なん]ですか。",
        choices: ["東京での仕事をクビになったから", "父が病気になったことを機に故郷を立て直したいと思ったから", "母に呼び戻されたから", "東京の生活に疲れたから"],
        answerIndex: 1,
        explanation: "第二段で「父が病気になったことを機に、故郷を立て直したいという考えが強くなった」と書かれています。"
      },
      {
        q: "大輝[だいき]が最初[さいしょ]に取[と]り組[く]んだことは何[なん]ですか。",
        choices: ["新しい工場の建設", "特産品を使った商品の開発", "大型ショッピングモールの誘致", "空き家の取り壊し"],
        answerIndex: 1,
        explanation: "第三段で「特産品を使った商品の開発」が最初の取り組みだったと書かれています。"
      },
      {
        q: "若者[わかもの]が町[まち]に戻[もど]った後[あと]の変化[へんか]として挙[あ]げられているのは何[なん]ですか。",
        choices: ["古い民家を改修してカフェにした", "大型マンションを建てた", "新しい空港を作った", "工業団地を作った"],
        answerIndex: 0,
        explanation: "第四段で「古い民家を改修してカフェにしたり」という変化が挙げられています。"
      },
      {
        q: "本文[ほんぶん]によると、緑川[みどりかわ]町[まち]の挑戦[ちょうせん]は何[なん]となっていますか。",
        choices: ["他の町の参考にならない", "日本中の地方都市にとって一つの希望", "失敗の典型例", "短期間で終わった計画"],
        answerIndex: 1,
        explanation: "最終段で「緑川町の挑戦は、日本中の地方都市にとって一つの希望となっている」と書かれています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-29 — The philosophy of minimalism
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-29",
    title: "ミニマリズムという生[い]き方[かた]",
    titleReading: "みにまりずむといういきかた",
    level: "N3",
    summary: "An introduction to minimalism as a way of life, its distinction from mere decluttering, its practical and psychological benefits, and the limits of taking it to extremes.",
    estMinutes: 7,
    tags: ["lifestyle", "philosophy", "minimalism", "wellbeing"],
    body: [
      "近年[きんねん]、「ミニマリズム」という言葉[ことば]をよく耳[みみ]にするようになりました。ミニマリズムとは、モノを最小限[さいしょうげん]に減[へ]らし、生活[せいかつ]をシンプルにする生[い]き方[かた]のことです。必要[ひつよう]なものだけを残[のこ]すことで、心[こころ]にも余白[よはく]が生[しょう]まれるという考[かんが]え方が、多[おお]くの人々[ひとびと]に受[う]け入[い]れられつつあります。",
      "ミニマリズムは単[たん]なる片付[かたづ]けとは違[ちが]います。モノを持[も]たないこと自体[じたい]が目的[もくてき]ではなく、自分[じぶん]にとって本当[ほんとう]に大切[たいせつ]なものを見極[みきわ]めるための手段[しゅだん]なのです。「持[も]つこと」よりも「使[つか]うこと」に価値[かち]を置き、一[ひと]つ一[ひと]つのモノと向[む]き合[あ]うことを重[おも]んじます。",
      "実用的[じつようてき]なメリットも大[おお]きいです。モノが少[すく]なければ、掃除[そうじ]や整理[せいり]の手間[てま]が減[へ]ります。探[さが]し物[もの]をする時間[じかん]も減[へ]り、日々[ひび]の生活[せいかつ]が効率[こうりつ]的[てき]になります。また、無駄[むだ]な買[か]い物[もの]をしなくなるため、お金[かね]の節約[せつやく]にもつながります。",
      "心理[しんり]的[てき]な効果[こうか]も指摘[してき]されています。モノに囲[かこ]まれていると、無意識[むいしき]のうちにストレスを感[かん]じると言[い]われています。スペースがすっきりしていると、心[こころ]も落[お]ち着[つ]き、集中[しゅうちゅう]力[りょく]が向上[こうじょう]するという声[こえ]も少[すく]なくありません。環境[かんきょう]への負荷[ふか]が減[へ]るという点[てん]でも、ミニマリズムは意義[いぎ]のある生[い]き方[かた]と言[い]えます。",
      "ただし、ミニマリズムは誰[だれ]にでも合[あ]うわけではありません。家族[かぞく]が多[おお]い場合[ばあい]や、仕事[しごと]で多[おお]くの道具[どうぐ]を必要[ひつよう]とする人[ひと]にとっては、実践[じっせん]が難[むずか]しいこともあります。また、「何[なに]も持[も]たないことが善[よ]い」と極端[きょくだん]に走[はし]りすぎると、かえって生活[せいかつ]の質[しつ]が落[お]ちることもあります。",
      "大切[たいせつ]なのは、自分[じぶん]にとっての「適量[てきりょう]」を見[み]つけることです。ミニマリズムの本来[ほんらい]の精神[せいしん]は、モノとの関係[かんけい]を見直[みなお]し、本当[ほんとう]に価値[かち]のあるものに時間[じかん]と心[こころ]を注[そそ]ぐことにあります。流行[りゅうこう]として捉[とら]えるのではなく、自分[じぶん]の生[い]き方[かた]に合[あ]わせて取[と]り入[い]れることが大切[たいせつ]でしょう。"
    ],
    translation: [
      "In recent years, we have come to hear the word \"minimalism\" often. Minimalism is a way of life that reduces things to a minimum and makes life simple. The idea that leaving only what is necessary creates blank space in the mind is gradually being accepted by many people.",
      "Minimalism is not just decluttering. Not having things is not the goal itself; it is a means to identify what is truly important to oneself. It places value on \"using\" rather than \"owning\" and emphasizes engaging with each thing one by one.",
      "The practical benefits are also great. With fewer things, the effort of cleaning and organizing decreases. Time spent looking for things also decreases, and daily life becomes more efficient. Moreover, since people stop making unnecessary purchases, it also leads to saving money.",
      "Psychological effects have also been pointed out. It is said that being surrounded by things causes unconscious stress. There are also many voices saying that when space is tidy, the mind calms down and concentration improves. In terms of reducing the burden on the environment, minimalism can be said to be a meaningful way of life.",
      "However, minimalism does not suit everyone. For those with large families or those who need many tools for work, it can be difficult to practice. Also, if one goes to the extreme of thinking that \"having nothing is good,\" the quality of life may rather decline.",
      "What is important is to find one's own \"appropriate amount.\" The original spirit of minimalism lies in reviewing one's relationship with things and pouring time and heart into what is truly valuable. Rather than treating it as a trend, it is important to incorporate it according to one's own way of life."
    ],
    questions: [
      {
        q: "ミニマリズムとは何[なん]ですか。",
        choices: ["モノをできるだけ集める生き方", "モノを最小限に減らし、生活をシンプルにする生き方", "高価なものだけを買う生き方", "新しいものを常に求める生き方"],
        answerIndex: 1,
        explanation: "第一段で「モノを最小限に減らし、生活をシンプルにする生き方」と定義されています。"
      },
      {
        q: "ミニマリズムと単[たん]なる片付[かたづ]けの違[ちが]いは何[なん]ですか。",
        choices: ["モノを持たないこと自体が目的である", "自分にとって本当に大切なものを見極めるための手段である", "高価なものを捨てることである", "他人のものも捨てることである"],
        answerIndex: 1,
        explanation: "第二段で「モノを持たないこと自体が目的ではなく、自分にとって本当に大切なものを見極めるための手段」と述べられています。"
      },
      {
        q: "実用的[じつようてき]なメリットとして挙[あ]げられていないのはどれですか。",
        choices: ["掃除や整理の手間が減る", "探し物の時間が減る", "お金の節約になる", "所有するモノの価値が上がる"],
        answerIndex: 3,
        explanation: "第三段で挙げられているのは手間の軽減、時間の節約、お金の節約で、所有物の価値上昇はありません。"
      },
      {
        q: "心理[しんり]的[てき]な効果[こうか]として本文[ほんぶん]が挙[あ]げているのは何[なん]ですか。",
        choices: ["モノに囲まれていると安心する", "スペースがすっきりしていると心が落ち着き、集中力が向上する", "何も持たないと寂しくなる", "モノが多い方が創造力が高まる"],
        answerIndex: 1,
        explanation: "第四段で「スペースがすっきりしていると、心も落ち着き、集中力が向上する」と書かれています。"
      },
      {
        q: "筆者[ひっしゃ]が大切[たいせつ]だとしているのは何[なん]ですか。",
        choices: ["何も持たないこと", "自分にとっての「適量」を見つけること", "流行に従ってすべて捨てること", "高価なものを買うこと"],
        answerIndex: 1,
        explanation: "最終段で「自分にとっての『適量』を見つけることが大切」と述べられています。"
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-30 — A story about natural disasters and resilience
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-30",
    title: "災害[さいがい]から立[た]ち上[あ]がる町[まち]",
    titleReading: "さいがいからたちあがるまち",
    level: "N3",
    summary: "The story of Hamada, a port town struck by a huge earthquake and tsunami, and its long path of recovery supported by nationwide volunteers, community solidarity, and the determination to pass on lessons to the next generation.",
    estMinutes: 9,
    tags: ["story", "disaster", "resilience", "community"],
    body: [
      "三月[さんがつ]の寒[さむ]い夜[よる]、海沿[うみぞ]いの港町[みなとまち]、浜田[はまだ]町[まち]を巨大[きょだい]な地震[じしん]が襲[おそ]いました。揺[ゆ]れが収[おさ]まらないうちに津波[つなみ]が押[お]し寄[よ]せ、町[まち]の中心[ちゅうしん]部[ぶ]は水[みず]に沈[しず]みました。多[おお]くの家[いえ]が流[なが]され、人々[ひとびと]は高[たか]い場所[ばしょ]へ逃[に]げるのが精一杯[せいいっぱい]でした。その夜[よる]、町[まち]の灯[あか]りは一[ひと]つも残[のこ]っていませんでした。",
      "翌朝[よくあさ]、人々[ひとびと]が避難[ひなん]所[しょ]で目[め]を覚[さ]ますと、そこには見慣[みな]れた町[まち]の姿[すがた]はありませんでした。泥[どろ]と瓦礫[がれき]が積[つ]み上[あ]がり、残[のこ]った建物[たてもの]も傾[かたむ]いていました。しかし、誰[だれ]も悲[かな]しみに沈[しず]んでばかりはいられませんでした。生[い]き残[のこ]った人々[ひとびと]はお互[たが]いに声[こえ]をかけ合[あ]い、けが人[にん]の救助[きゅうじょ]や行方不明[ゆくえふめい]者[しゃ]の捜索[そうさく]を始[はじ]めました。",
      "全国[ぜんこく]から支援[しえん]が届[とど]き始[はじ]めたのは、被災[ひさい]から二[ふた]日[ふつか]後[ご]のことでした。ボランティアが続々[ぞくぞく]と集[あつ]まり、物資[ぶっし]を配[くば]り、仮設[かせつ]住宅[じゅうたく]の建設[けんせつ]が進[すす]められました。温[あたた]かい食事[しょくじ]を差[さ]し入[い]れてくれる人[ひと]、子[こ]どもたちを預[あず]かってくれる人[ひと]、人々[ひとびと]の善意[ぜんい]が町[まち]を支[ささ]えました。被災者[ひさいしゃ]たちは、「この支[ささ]えがなければ、立[た]ち上[あ]がることはできなかっただろう」と振[ふ]り返[かえ]ります。",
      "復興[ふっこう]への道[みち]は長[なが]く、困難[こんなん]なものでした。土地[とち]を高[たか]くする工事[こうじ]、新[あたら]しい住宅[じゅうたく]の建設[けんせつ]、生活[せいかつ]基盤[きばん]の復旧[ふっきゅう]。計画[けいかく]が進[すす]むにつれて、住民[じゅうみん]の間[あいだ]で意見[いけん]の食[く]い違[ちが]いも生[しょう]じました。しかし、話[はな]し合[あ]いを重[かさ]ねることで、町[まち]全体[ぜんたい]の合意[ごうい]形成[けいせい]が図[はか]られ、少[すこ]しずつ新[あたら]しい町[まち]の形[かたち]が見[み]えてきました。",
      "五年[ごねん]が経[た]ち、浜田[はまだ]町[まち]は新[あたら]しい姿[すがた]を取[と]り戻[もど]しつつあります。高[たか]い堤防[ていぼう]が海[うみ]を囲[かこ]み、避難[ひなん]ルートも整備[せいび]されました。復興[ふっこう]公営[こうえい]住宅[じゅうたく]には、家族[かぞく]連[づ]れの世代[せだい]も入[はい]り、町[まち]に少[すこ]しずつ子[こ]どもたちの声[こえ]が戻[もど]ってきました。",
      "しかし、人々[ひとびと]は決[けっ]してあの日[ひ]を忘[わす]れてはいません。毎年[まいとし]三月[さんがつ]、町[まち]は慰霊[いれい]祭[さい]を開[ひら]き、亡[な]くなった人々[ひとびと]を悼[いた]みます。子[こ]どもたちにも、災害[さいがい]の教訓[きょうくん]を伝[つた]えるための学習[がくしゅう]会[かい]が続[つづ]けられています。「次[つぎ]の世代[せだい]に命[いのち]を守[まも]る知恵[ちえ]を渡[わた]すこと」が、生[い]き残[のこ]った人々[ひとびと]の使命[しめい]となっています。",
      "災害[さいがい]は、人[ひと]の力[ちから]では止[と]められません。しかし、その後[ご]の町[まち]の復興[ふっこう]は人[ひと]の力[ちから]で支[ささ]えられます。浜田[はまだ]町[まち]の物語[ものがたり]は、自然[しぜん]の猛威[もうい]の前[まえ]でも、人間[にんげん]の強[つよ]さと絆[きずな]が希望[きぼう]を生[う]み出[だ]すことを示しています。"
    ],
    translation: [
      "On a cold March night, a huge earthquake struck Hamada, a port town along the sea. Before the shaking subsided, a tsunami rushed in, and the center of the town sank under water. Many houses were swept away, and people were hard pressed just to flee to high ground. That night, not a single light remained in the town.",
      "The next morning, when people awoke at evacuation centers, the familiar town was gone. Mud and debris piled up, and even the remaining buildings were tilted. However, no one could stay sunk in grief. The survivors called out to one another and began rescuing the injured and searching for the missing.",
      "Support from across the country began to arrive two days after the disaster. Volunteers gathered one after another, distributed supplies, and the construction of temporary housing was advanced. People who brought warm meals, people who took in children — the goodwill of many people supported the town. The victims look back and say, \"Without this support, we could not have gotten back on our feet.\"",
      "The path to recovery was long and difficult. Construction work to raise the land, building new housing, restoring the foundations of life. As plans progressed, disagreements arose among residents. However, through repeated discussions, consensus-building for the whole town was pursued, and the shape of a new town gradually came into view.",
      "Five years have passed, and Hamada is regaining a new form. High seawalls surround the sea, and evacuation routes have been prepared. Families with children have also moved into the recovery public housing, and the voices of children are gradually returning to the town.",
      "However, people never forget that day. Every March, the town holds a memorial ceremony to mourn those who died. Study sessions continue to be held to convey the lessons of the disaster to children. \"Passing on the wisdom to protect lives to the next generation\" has become the mission of the survivors.",
      "Disasters cannot be stopped by human power. However, the recovery of the town afterward is supported by human power. The story of Hamada shows that even before the fury of nature, human strength and bonds create hope."
    ],
    questions: [
      {
        q: "浜田[はまだ]町[まち]を襲[おそ]ったのは何[なん]ですか。",
        choices: ["台風", "巨大な地震と津波", "大火事", "大雪"],
        answerIndex: 1,
        explanation: "第一段で「巨大な地震が襲った」「津波が押し寄せた」と書かれています。"
      },
      {
        q: "翌朝[よくあさ]、人々[ひとびと]は何[なに]を始[はじ]めましたか。",
        choices: ["町を捨てて去ること", "けが人の救助や行方不明者の捜索", "新しい家を建てること", "海外へ移住すること"],
        answerIndex: 1,
        explanation: "第二段で「けが人の救助や行方不明者の捜索を始めた」と書かれています。"
      },
      {
        q: "全国[ぜんこく]から支援[しえん]が届[とど]き始[はじ]めたのはいつですか。",
        choices: ["被災当日", "被災から2日後", "被災から1か月後", "被災から1年後"],
        answerIndex: 1,
        explanation: "第三段で「被災から二日後のことだった」と書かれています。"
      },
      {
        q: "五年[ごねん]後[ご]の浜田[はまだ]町[まち]について本文[ほんぶん]が述[の]べているのは何[なん]ですか。",
        choices: ["完全に元の姿に戻った", "高い堤防が海を囲み、子どもの声が戻りつつある", "誰も住まない廃墟となった", "海沿いに家を建て直した"],
        answerIndex: 1,
        explanation: "第五段で「高い堤防が海を囲み」「町に少しずつ子どもたちの声が戻ってきた」と書かれています。"
      },
      {
        q: "生[い]き残[のこ]った人々[ひとびと]の使命[しめい]とされているのは何[なん]ですか。",
        choices: ["町を離れること", "次の世代に命を守る知恵を渡すこと", "海を埋め立てること", "災害の記録を隠すこと"],
        answerIndex: 1,
        explanation: "第六段で「次の世代に命を守る知恵を渡すこと」が使命となっていると書かれています。"
      }
    ]
  }
];
