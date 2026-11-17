import type { ReadingPassage } from "@/lib/types";

// N5 reading passages set A.
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana and punctuation have no brackets.
// titleReading is full kana with NO brackets.

export const readingN5A: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n5-01 — 私の町 (My town)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-01",
    title: "私[わたし]の町[まち]",
    titleReading: "わたしのまち",
    level: "N5",
    summary: "The narrator describes living in a quiet small town with kind neighbors and favorite shops.",
    estMinutes: 3,
    tags: ["slice of life", "town", "neighborhood"],
    body: [
      "私[わたし]は小[ちい]さい町[まち]に住[す]んでいます。町[まち]は静[しず]かで、きれいです。近[ちか]くに公園[こうえん]があります。毎朝[まいあさ]、公園[こうえん]を散歩[さんぽ]します。",
      "町[まち]に小[ちい]さい店[みせ]がたくさんあります。パン屋[や]と本屋[ほんや]が好[す]きです。パン屋[や]のパンはとても美味[おい]しいです。日曜日[にちようび]に本屋[ほんや]へ行[い]きます。",
      "人[ひと]は親切[しんせつ]です。隣[となり]の人[ひと]はいつも「おはよう」と言[い]います。私[わたし]はこの町[まち]が大好[だいす]きです。ずっと住[す]みたいです。"
    ],
    translation: [
      "I live in a small town. The town is quiet and beautiful. There is a park nearby. Every morning, I walk in the park.",
      "There are many small shops in the town. I like the bakery and the bookstore. The bakery's bread is very delicious. On Sunday I go to the bookstore.",
      "The people are kind. The neighbors always say 'Good morning.' I love this town. I want to live here forever."
    ],
    questions: [
      {
        q: "Where does the narrator live?",
        choices: ["In a big city", "In a small town", "In Tokyo", "Near a school"],
        answerIndex: 1,
        explanation: "The narrator lives in a small town (小さい町に住んでいます)."
      },
      {
        q: "What does the narrator do every morning?",
        choices: ["Goes to the bakery", "Walks in the park", "Reads books", "Goes to school"],
        answerIndex: 1,
        explanation: "Every morning the narrator walks in the park (毎朝、公園を散歩します)."
      },
      {
        q: "When does the narrator go to the bookstore?",
        choices: ["On Monday", "On Saturday", "On Sunday", "Every day"],
        answerIndex: 2,
        explanation: "The narrator goes to the bookstore on Sunday (日曜日に本屋へ行きます)."
      },
      {
        q: "What do the neighbors always do?",
        choices: ["They are quiet", "They say good morning", "They are busy", "They are not kind"],
        answerIndex: 1,
        explanation: "The neighbors always say good morning (隣の人はいつも「おはよう」と言います)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-02 — 学校の一日 (A day at school)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-02",
    title: "学校[がっこう]の一日[いちにち]",
    titleReading: "がっこうのいちにち",
    level: "N5",
    summary: "A student describes a typical school day from the morning commute to evening homework.",
    estMinutes: 4,
    tags: ["school", "daily life", "study"],
    body: [
      "私[わたし]は毎日[まいにち]学校[がっこう]へ行[い]きます。学校[がっこう]は家[いえ]から遠[とお]いです。電車[でんしゃ]で三十分[さんじゅっぷん]かかります。朝[あさ]は少[すこ]し忙[いそが]しいです。",
      "学校[がっこう]で日本[にほん]語[ご]を勉強[べんきょう]します。先生[せんせい]はとても元気[げんき]です。クラスの友達[ともだち]と一[いっ]緒[しょ]に話[はな]します。難[むずか]しいですが、楽[たの]しいです。",
      "昼[ひる]に食堂[しょくどう]でご飯[はん]を食[た]べます。私[わたし]はカレーが好[す]きです。友達[ともだち]もカレーが好[す]きです。一[いっ]緒[しょ]に食[た]べて、笑[わら]います。",
      "午後[ごご]の授業[じゅぎょう]は三時[さんじ]に終[お]わります。その後[ご]、図書館[としょかん]で本[ほん]を読[よ]みます。家[いえ]に帰[かえ]って、宿題[しゅくだい]をします。今日[きょう]もいい一日[いちにち]でした。"
    ],
    translation: [
      "I go to school every day. School is far from home. It takes thirty minutes by train. Mornings are a little busy.",
      "At school I study Japanese. The teacher is very energetic. I talk together with my classmates. It is difficult but fun.",
      "At noon I eat lunch in the cafeteria. I like curry. My friends also like curry. We eat together and laugh.",
      "Afternoon classes end at three o'clock. After that, I read a book in the library. I return home and do homework. Today was another good day."
    ],
    questions: [
      {
        q: "How does the narrator get to school?",
        choices: ["By bus", "By train", "By bike", "On foot"],
        answerIndex: 1,
        explanation: "The narrator goes to school by train (電車で行きます)."
      },
      {
        q: "What does the narrator study at school?",
        choices: ["English", "Math", "Japanese", "History"],
        answerIndex: 2,
        explanation: "They study Japanese at school (学校で日本語を勉強します)."
      },
      {
        q: "What does the narrator eat for lunch?",
        choices: ["Bread", "Curry", "Sushi", "Ramen"],
        answerIndex: 1,
        explanation: "The narrator likes and eats curry for lunch (カレーが好きです)."
      },
      {
        q: "When do afternoon classes end?",
        choices: ["At two o'clock", "At three o'clock", "At four o'clock", "At five o'clock"],
        answerIndex: 1,
        explanation: "Afternoon classes end at three o'clock (午後の授業は三時に終わります)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-03 — 日本の食べ物 (Japanese food)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-03",
    title: "日本[にほん]の食[た]べ物[もの]",
    titleReading: "にほんのたべもの",
    level: "N5",
    summary: "An introduction to Japanese food: famous dishes, breakfast, okonomiyaki with friends, and healthy ingredients.",
    estMinutes: 4,
    tags: ["food", "culture", "cooking"],
    body: [
      "日本[にほん]の食[た]べ物[もの]はとても有名[ゆうめい]です。寿司[すし]と天[てん]ぷらがとても有名[ゆうめい]です。私[わたし]は寿司[すし]が大好[だいす]きです。毎週[まいしゅう]、寿司[すし]を食[た]べます。",
      "日本[にほん]の朝[あさ]ご飯[はん]は特別[とくべつ]です。ご飯[はん]と魚[さかな]と味噌汁[みそしる]を食[た]べます。お茶[ちゃ]を飲[の]みます。とても元気[げんき]になります。",
      "友達[ともだち]の家[いえ]で、お好[この]み焼[や]きを作[つく]りました。野菜[やさい]と肉[にく]を入[い]れます。自分[じぶん]で焼[や]いて、食[た]べます。楽[たの]しくて、美味[おい]しかったです。",
      "日本[にほん]の食[た]べ物[もの]は体[からだ]にいいです。野菜[やさい]がたくさんあります。私[わたし]は日本[にほん]の食[た]べ物[もの]が好[す]きです。これからも食[た]べたいです。"
    ],
    translation: [
      "Japanese food is very famous. Sushi and tempura are very famous. I love sushi. I eat sushi every week.",
      "Japanese breakfast is special. I eat rice, fish, and miso soup. I drink tea. I become very energetic.",
      "At my friend's house, we made okonomiyaki. We put in vegetables and meat. We grill it ourselves and eat. It was fun and delicious.",
      "Japanese food is good for the body. There are many vegetables. I like Japanese food. I want to keep eating it from now on too."
    ],
    questions: [
      {
        q: "Which two Japanese foods does the narrator mention as famous?",
        choices: ["Sushi and ramen", "Sushi and tempura", "Tempura and curry", "Rice and fish"],
        answerIndex: 1,
        explanation: "The passage says sushi and tempura are very famous (寿司と天ぷらがとても有名です)."
      },
      {
        q: "What does the narrator drink with Japanese breakfast?",
        choices: ["Coffee", "Miso soup", "Tea", "Water"],
        answerIndex: 2,
        explanation: "The narrator drinks tea (お茶を飲みます)."
      },
      {
        q: "What did they make at the friend's house?",
        choices: ["Sushi", "Curry", "Okonomiyaki", "Tempura"],
        answerIndex: 2,
        explanation: "They made okonomiyaki at the friend's house (お好み焼きを作りました)."
      },
      {
        q: "Why is Japanese food good, according to the passage?",
        choices: ["It is cheap", "It is good for the body with many vegetables", "It is fast to make", "It is very sweet"],
        answerIndex: 1,
        explanation: "Japanese food is good for the body and has many vegetables (体にいいです。野菜がたくさんあります)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-04 — 私の家族 (My family)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-04",
    title: "私[わたし]の家族[かぞく]",
    titleReading: "わたしのかぞく",
    level: "N5",
    summary: "The narrator introduces a family of five with a working father, teacher mother, and busy siblings.",
    estMinutes: 3,
    tags: ["family", "daily life", "people"],
    body: [
      "私[わたし]の家族[かぞく]は五人[ごにん]です。父[ちち]と母[はは]と兄[あに]と姉[あね]と私[わたし]です。父[ちち]は会社[かいしゃ]で働[はたら]きます。母[はは]は学校[がっこう]の先生[せんせい]です。",
      "兄[あに]は大[おお]きい大学[だいがく]の学生[がくせい]です。東京[とうきょう]に住[す]んでいます。週末[しゅうまつ]に家[いえ]に帰[かえ]ります。姉[あね]は病院[びょういん]で働[はたら]きます。とても忙[いそが]しいです。",
      "私[わたし]はまだ学生[がくせい]です。毎日[まいにち]学校[がっこう]へ行[い]きます。週末[しゅうまつ]は家[いえ]で家族[かぞく]と一[いっ]緒[しょ]にいます。お母[かあ]さんの料理[りょうり]が大好[だいす]きです。",
      "家族[かぞく]はとても仲良[なかよ]しです。誕生日[たんじょうび]にプレゼントをあげます。大[おお]きい家[いえ]で、毎晩[まいばん]一[いっ]緒[しょ]にご飯[はん]を食[た]べます。私[わたし]は家族[かぞく]が大好[だいす]きです。"
    ],
    translation: [
      "My family is five people: father, mother, older brother, older sister, and me. Father works at a company. Mother is a school teacher.",
      "My older brother is a student at a big university. He lives in Tokyo. He comes home on weekends. My older sister works at a hospital. She is very busy.",
      "I am still a student. I go to school every day. On weekends I am at home together with my family. I love my mother's cooking.",
      "My family is very close. We give presents on birthdays. In our big house, we eat together every night. I love my family."
    ],
    questions: [
      {
        q: "How many people are in the narrator's family?",
        choices: ["Three", "Four", "Five", "Six"],
        answerIndex: 2,
        explanation: "The family has five people (家族は五人です)."
      },
      {
        q: "Where does the older brother live?",
        choices: ["In Osaka", "In Tokyo", "In Kyoto", "In a small town"],
        answerIndex: 1,
        explanation: "The older brother lives in Tokyo (東京に住んでいます)."
      },
      {
        q: "Where does the older sister work?",
        choices: ["At a school", "At a hospital", "At a company", "At a shop"],
        answerIndex: 1,
        explanation: "The sister works at a hospital (姉は病院で働きます)."
      },
      {
        q: "What does the family do every night?",
        choices: ["Watch TV", "Eat together", "Go out", "Study"],
        answerIndex: 1,
        explanation: "The family eats together every night (毎晩一緒にご飯を食べます)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-05 — 四つの季節 (The four seasons)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-05",
    title: "四[よっ]つの季節[きせつ]",
    titleReading: "よっつのきせつ",
    level: "N5",
    summary: "A tour through Japan's four seasons and the activities that make each one special.",
    estMinutes: 5,
    tags: ["seasons", "nature", "weather"],
    body: [
      "日本[にほん]には四[よっ]つの季節[きせつ]があります。春[はる]と夏[なつ]と秋[あき]と冬[ふゆ]です。季節[きせつ]ごとに、天気[てんき]が変[か]わります。私[わたし]は全部[ぜんぶ]好[す]きです。",
      "春[はる]は桜[さくら]がきれいです。花見[はなみ]に行[い]きます。暖[あたた]かくなります。新[あたら]しい学期[がっき]が始[はじ]まります。みんな元気[げんき]です。",
      "夏[なつ]はとても暑[あつ]いです。海[うみ]で泳[およ]ぎます。花火[はなび]を見[み]に行[い]きます。冷[つめ]たいアイスを食[た]べます。長[なが]い休[やす]みがあります。",
      "秋[あき]は涼[すず]しいです。紅葉[もみじ]がとてもきれいです。山[やま]へ行[い]って、写真[しゃしん]を撮[と]ります。果物[くだもの]が美味[おい]しい季節[きせつ]です。",
      "冬[ふゆ]は寒[さむ]いです。雪[ゆき]が降[ふ]ります。家[いえ]で温[あたた]かい鍋[なべ]を食[た]べます。クリスマスとお正月[しょうがつ]があります。家族[かぞく]と過[す]ごす時間[じかん]が好[す]きです。"
    ],
    translation: [
      "Japan has four seasons: spring, summer, autumn, and winter. The weather changes with each season. I like all of them.",
      "In spring, cherry blossoms are beautiful. I go to flower viewing. It gets warm. A new school term begins. Everyone is energetic.",
      "Summer is very hot. I swim in the sea. I go to see fireworks. I eat cold ice cream. There is a long vacation.",
      "Autumn is cool. The autumn leaves are very beautiful. I go to the mountains and take photos. It is a season when fruit is delicious.",
      "Winter is cold. Snow falls. At home I eat warm hot pot. There is Christmas and New Year. I like the time spent with my family."
    ],
    questions: [
      {
        q: "How many seasons are there in Japan?",
        choices: ["Two", "Three", "Four", "Five"],
        answerIndex: 2,
        explanation: "Japan has four seasons (四つの季節があります)."
      },
      {
        q: "What is beautiful in spring?",
        choices: ["Fireworks", "Cherry blossoms", "Autumn leaves", "Snow"],
        answerIndex: 1,
        explanation: "Cherry blossoms are beautiful in spring (春は桜がきれいです)."
      },
      {
        q: "What does the narrator do in autumn?",
        choices: ["Swims in the sea", "Goes to the mountains to take photos", "Eats hot pot", "Views cherry blossoms"],
        answerIndex: 1,
        explanation: "In autumn they go to the mountains and take photos (山へ行って、写真を撮ります)."
      },
      {
        q: "What is special about winter, according to the passage?",
        choices: ["It is very hot", "Snow falls and there is Christmas and New Year", "There are cherry blossoms", "There is a long school vacation"],
        answerIndex: 1,
        explanation: "In winter snow falls, and there is Christmas and New Year (雪が降ります…クリスマスとお正月があります)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-06 — 電車の旅 (A train ride)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-06",
    title: "電車[でんしゃ]の旅[たび]",
    titleReading: "でんしゃのたび",
    level: "N5",
    summary: "A train trip to Kyoto with a friend, complete with bento, scenery, and temple sightseeing.",
    estMinutes: 4,
    tags: ["travel", "train", "sightseeing"],
    body: [
      "先週[せんしゅう]、電車[でんしゃ]で京都[きょうと]へ行[い]きました。朝[あさ]六時[ろくじ]に駅[えき]で会[あ]いました。友達[ともだち]と二人[ふたり]で行[い]きました。切符[きっぷ]を買[か]って、電車[でんしゃ]に乗[の]りました。",
      "電車[でんしゃ]はとてもきれいでした。窓[まど]の外[そと]の景色[けしき]がきれいでした。山[やま]と川[かわ]が見[み]えました。私[わたし]は本[ほん]を読[よ]みました。友達[ともだち]は音楽[おんがく]を聞[き]きました。",
      "電車[でんしゃ]の中[なか]で、お弁当[べんとう]を食[た]べました。お茶[ちゃ]を飲[の]みました。駅[えき]で買[か]ったお菓子[かし]も美味[おい]しかったです。時間[じかん]が早[はや]く過[す]ぎました。",
      "京都[きょうと]に着[つ]いて、お寺[てら]を見[み]ました。とても古[ふる]くて、きれいでした。写真[しゃしん]をたくさん撮[と]りました。電車[でんしゃ]の旅[たび]は楽[たの]しかったです。また行[い]きたいです。"
    ],
    translation: [
      "Last week, I went to Kyoto by train. We met at the station at six in the morning. My friend and I went together, the two of us. We bought tickets and boarded the train.",
      "The train was very clean. The scenery outside the window was beautiful. I could see mountains and rivers. I read a book. My friend listened to music.",
      "On the train, we ate a bento. We drank tea. The sweets we bought at the station were also delicious. Time passed quickly.",
      "We arrived in Kyoto and saw a temple. It was very old and beautiful. We took many photos. The train trip was fun. I want to go again."
    ],
    questions: [
      {
        q: "Where did the narrator go by train?",
        choices: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
        answerIndex: 2,
        explanation: "They went to Kyoto (京都へ行きました)."
      },
      {
        q: "What did the friend do on the train?",
        choices: ["Read a book", "Listened to music", "Slept", "Ate sweets"],
        answerIndex: 1,
        explanation: "The friend listened to music (友達は音楽を聞きました)."
      },
      {
        q: "What did they eat on the train?",
        choices: ["Sushi", "Ramen", "A bento", "Curry"],
        answerIndex: 2,
        explanation: "They ate a bento on the train (お弁当を食べました)."
      },
      {
        q: "What did they see in Kyoto?",
        choices: ["A castle", "A temple", "A museum", "A park"],
        answerIndex: 1,
        explanation: "They saw a temple (お寺を見ました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-07 — 市場で買い物 (Shopping at the market)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-07",
    title: "市場[いちば]で買[か]い物[もの]",
    titleReading: "いちばでかいもの",
    level: "N5",
    summary: "A Saturday morning shopping trip to the market with the narrator's mother, buying fish, flowers, and bread.",
    estMinutes: 4,
    tags: ["shopping", "market", "food"],
    body: [
      "土曜日[どようび]の朝[あさ]、市場[いちば]へ行[い]きました。市場[いちば]は大[おお]きくて、人[ひと]がたくさんいました。野菜[やさい]と果物[くだもの]が安[やす]かったです。色[いろ]がきれいで、新[あたら]しかったです。",
      "お母[かあ]さんと一[いっ]緒[しょ]に魚[さかな]を買[か]いました。新[あたら]しい魚[さかな]がたくさんありました。大[おお]きい魚[さかな]は千円[せんえん]でした。お母[かあ]さんは値段[ねだん]を聞[き]きました。",
      "次[つぎ]に、花屋[はなや]で花[はな]を買[か]いました。赤[あか]いバラを三本[さんぼん]買[か]いました。一本[いっぽん]百円[ひゃくえん]でした。家[いえ]に飾[かざ]ります。お母[かあ]さんはとても嬉[うれ]しそうでした。",
      "最後[さいご]に、パン屋[や]でパンを買[か]いました。新[あたら]しいパンがたくさんありました。家[いえ]に帰[かえ]って、お茶[ちゃ]と一[いっ]緒[しょ]に食[た]べました。市場[いちば]で買[か]い物[もの]するのが好[す]きです。"
    ],
    translation: [
      "On Saturday morning, I went to the market. The market was big and there were many people. Vegetables and fruit were cheap. The colors were beautiful and they were fresh.",
      "Together with my mother, I bought fish. There was a lot of fresh fish. A big fish was one thousand yen. My mother asked about the price.",
      "Next, we bought flowers at the flower shop. We bought three red roses. One was one hundred yen. We will decorate the house. My mother looked very happy.",
      "Finally, we bought bread at the bakery. There were many fresh breads. We returned home and ate together with tea. I like shopping at the market."
    ],
    questions: [
      {
        q: "When did the narrator go to the market?",
        choices: ["Sunday morning", "Saturday morning", "Friday evening", "Monday afternoon"],
        answerIndex: 1,
        explanation: "They went on Saturday morning (土曜日の朝、市場へ行きました)."
      },
      {
        q: "What did they buy at the flower shop?",
        choices: ["White tulips", "Red roses", "Yellow sunflowers", "Pink carnations"],
        answerIndex: 1,
        explanation: "They bought three red roses (赤いバラを三本買いました)."
      },
      {
        q: "How much was a big fish?",
        choices: ["One hundred yen", "Five hundred yen", "One thousand yen", "Two thousand yen"],
        answerIndex: 2,
        explanation: "A big fish was one thousand yen (大きい魚は千円でした)."
      },
      {
        q: "What did they do at the end?",
        choices: ["Bought bread", "Went home directly", "Bought vegetables again", "Ate at a restaurant"],
        answerIndex: 0,
        explanation: "They bought bread at the bakery at the end (最後にパン屋でパンを買いました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-08 — 私の日本語のクラス (My Japanese class)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-08",
    title: "私[わたし]の日本[にほん]語[ご]のクラス",
    titleReading: "わたしのにほんごのクラス",
    level: "N5",
    summary: "The narrator's twice-weekly evening Japanese class with international classmates and a kind teacher.",
    estMinutes: 3,
    tags: ["language", "class", "friends"],
    body: [
      "私[わたし]は毎週[まいしゅう]火曜日[かようび]と木曜日[もくようび]に日本[にほん]語[ご]を勉強[べんきょう]します。クラスは夜[よる]七時[しちじ]から九時[くじ]までです。先生[せんせい]は田中[たなか]先生[せんせい]です。とても親切[しんせつ]です。",
      "クラスには十人[じゅうにん]の学生[がくせい]がいます。みんないろいろな国[くに]から来[き]ました。アメリカやフランスや中国[ちゅうごく]の人[ひと]がいます。私[わたし]たちは日本[にほん]語[ご]だけで話[はな]します。",
      "授業[じゅぎょう]は難[むずか]しいですが、楽[たの]しいです。漢字[かんじ]と文法[ぶんぽう]を勉強[べんきょう]します。田中[たなか]先生[せんせい]はゆっくり話[はな]します。分[わ]からない時[とき]、先生[せんせい]が教[おし]えます。",
      "授業[じゅぎょう]の後[あと]、みんなで近[ちか]くのカフェへ行[い]きます。日本[にほん]のことについて話[はな]します。新[あたら]しい友達[ともだち]がたくさんできました。来年[らいねん]も日本[にほん]語[ご]を勉強[べんきょう]したいです。"
    ],
    translation: [
      "I study Japanese every Tuesday and Thursday. The class is from 7 PM to 9 PM. The teacher is Mr./Ms. Tanaka. They are very kind.",
      "There are ten students in the class. Everyone comes from various countries. There are people from America, France, and China. We talk only in Japanese.",
      "The class is difficult but fun. We study kanji and grammar. Mr./Ms. Tanaka speaks slowly. When I do not understand, the teacher teaches me.",
      "After class, we all go to a nearby cafe. We talk about things related to Japan. I made many new friends. I want to study Japanese next year too."
    ],
    questions: [
      {
        q: "When does the narrator study Japanese?",
        choices: ["Monday and Wednesday", "Tuesday and Thursday", "Friday and Saturday", "Sunday only"],
        answerIndex: 1,
        explanation: "They study on Tuesday and Thursday (火曜日と木曜日に日本語を勉強します)."
      },
      {
        q: "How many students are in the class?",
        choices: ["Eight", "Nine", "Ten", "Eleven"],
        answerIndex: 2,
        explanation: "There are ten students (十人の学生がいます)."
      },
      {
        q: "What does the teacher do when someone does not understand?",
        choices: ["Gets angry", "Teaches them", "Ignores them", "Speaks faster"],
        answerIndex: 1,
        explanation: "The teacher teaches them when they do not understand (分からない時、先生が教えます)."
      },
      {
        q: "What do they do after class?",
        choices: ["Go home directly", "Go to a nearby cafe", "Study more at school", "Go to the library"],
        answerIndex: 1,
        explanation: "They go to a nearby cafe after class (授業の後、みんなで近くのカフェへ行きます)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-09 — 夏のお祭り (A festival in summer)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-09",
    title: "夏[なつ]のお祭[まつ]り",
    titleReading: "なつのおまつり",
    level: "N5",
    summary: "A summer night festival with food stalls, music, dancing, and a colorful fireworks display.",
    estMinutes: 4,
    tags: ["festival", "summer", "culture"],
    body: [
      "先週[せんしゅう]の週末[しゅうまつ]、夏[なつ]のお祭[まつ]りに行[い]きました。夜[よる]七時[しちじ]に始[はじ]まりました。そこは人[ひと]でいっぱいでした。お店[みせ]がたくさんありました。",
      "友達[ともだち]と一[いっ]緒[しょ]に行[い]きました。みんなきれいな服[ふく]を着[き]ていました。女[おんな]の人[ひと]も男[おとこ]の人[ひと]も、楽[たの]しそうでした。写真[しゃしん]をたくさん撮[と]りました。",
      "お店[みせ]で、たこ焼[や]きと焼[や]き鳥[とり]を買[か]いました。冷[つめ]たいジュースも飲[の]みました。音楽[おんがく]が大[おお]きな音[おと]で流[なが]れていました。みんな歌[うた]ったり踊[おど]ったりしました。",
      "夜[よる]九時[くじ]に、大[おお]きい花火[はなび]が上[あ]がりました。色[いろ]とりどりの花火[はなび]が夜[よる]の空[そら]をきれいにしました。みんな「わあ」と言[い]いました。来年[らいねん]も行[い]きたいです。"
    ],
    translation: [
      "Last weekend, I went to a summer festival. It started at 7 PM. The place was full of people. There were many shops.",
      "I went together with friends. Everyone was wearing beautiful clothes. Both women and men looked like they were having fun. We took many photos.",
      "At the shops, we bought takoyaki and yakitori. We also drank cold juice. Music played with a big sound. Everyone sang and danced.",
      "At 9 PM, big fireworks went up. Colorful fireworks made the night sky beautiful. Everyone said 'Wow!' I want to go again next year."
    ],
    questions: [
      {
        q: "When did the festival start?",
        choices: ["At 6 PM", "At 7 PM", "At 8 PM", "At 9 PM"],
        answerIndex: 1,
        explanation: "The festival started at 7 PM (夜七時に始まりました)."
      },
      {
        q: "Who did the narrator go with?",
        choices: ["Alone", "With family", "With friends", "With the teacher"],
        answerIndex: 2,
        explanation: "The narrator went together with friends (友達と一緒に行きました)."
      },
      {
        q: "What did they buy at the shops?",
        choices: ["Sushi and tempura", "Takoyaki and yakitori", "Ramen and gyoza", "Bread and cake"],
        answerIndex: 1,
        explanation: "They bought takoyaki and yakitori (たこ焼きと焼き鳥を買いました)."
      },
      {
        q: "What happened at 9 PM?",
        choices: ["The festival ended", "Big fireworks went up", "It started raining", "The music stopped"],
        answerIndex: 1,
        explanation: "Big fireworks went up at 9 PM (夜九時に大きい花火が上がりました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n5-10 — 私のペット (My pet)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n5-10",
    title: "私[わたし]のペット",
    titleReading: "わたしのペット",
    level: "N5",
    summary: "Life with a small brown dog named Pochi, from daily walks to a hospital visit and recovery.",
    estMinutes: 3,
    tags: ["pet", "animals", "daily life"],
    body: [
      "私[わたし]の家[いえ]には、犬[いぬ]が一匹[いっぴき]います。名前[なまえ]はポチです。三年前[さんねんまえ]に、友達[ともだち]からもらいました。とても小[ちい]さくて、可愛[かわい]かったです。",
      "ポチは茶色[ちゃいろ]で、耳[みみ]が大[おお]きいです。毎日[まいにち]散歩[さんぽ]に行[い]きます。公園[こうえん]で走[はし]ったり、ボールで遊[あそ]んだりします。他[ほか]の犬[いぬ]と一[いっ]緒[しょ]に遊[あそ]ぶのが好[す]きです。",
      "夜[よる]はポチと一[いっ]緒[しょ]に寝[ね]ます。ポチは静[しず]かで、いい子[こ]です。時々[ときどき]私[わたし]のそばに来[き]ます。私[わたし]はとても嬉[うれ]しいです。家族[かぞく]みたいです。",
      "先月[せんげつ]、ポチは病院[びょういん]に行[い]きました。少[すこ]し病気[びょうき]でした。今[いま]はもう元気[げんき]です。私[わたし]は毎日[まいにち]ポチにご飯[はん]をあげます。ずっと一[いっ]緒[しょ]にいたいです。"
    ],
    translation: [
      "At my house, there is one dog. The name is Pochi. Three years ago, I received him from a friend. He was very small and cute.",
      "Pochi is brown and has big ears. Every day we go for a walk. At the park he runs and plays with a ball. He likes playing together with other dogs.",
      "At night, I sleep together with Pochi. Pochi is quiet and a good boy. Sometimes he comes near me. I am very happy. He is like family.",
      "Last month, Pochi went to the hospital. He was a little sick. Now he is already well. I feed Pochi every day. I want to be together forever."
    ],
    questions: [
      {
        q: "What kind of pet does the narrator have?",
        choices: ["A cat", "A dog", "A bird", "A fish"],
        answerIndex: 1,
        explanation: "They have a dog (犬が一匹います)."
      },
      {
        q: "What color is Pochi?",
        choices: ["White", "Black", "Brown", "Yellow"],
        answerIndex: 2,
        explanation: "Pochi is brown (茶色です)."
      },
      {
        q: "What happened to Pochi last month?",
        choices: ["He went to the hospital", "He ran away", "He had a birthday", "He got a new friend"],
        answerIndex: 0,
        explanation: "Pochi went to the hospital last month (先月、ポチは病院に行きました)."
      },
      {
        q: "What does the narrator do for Pochi every day?",
        choices: ["Takes him to the park only", "Feeds him", "Takes him to the hospital", "Buys him clothes"],
        answerIndex: 1,
        explanation: "The narrator feeds Pochi every day (毎日ポチにご飯をあげます)."
      }
    ]
  }
];
