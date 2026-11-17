#!/usr/bin/env python3
# Generate kanji-n3-a.ts
data = [
    ("兄", ["ケイ","キョウ"], ["あに"], 5, "儿", "legs", 2, 300, ["口","儿"], ["older brother"]),
    ("妹", ["マイ"], ["いもうと"], 7, "女", "woman", 3, 303, ["女","未"], ["younger sister"]),
    ("漢", ["カン"], [], 14, "氵", "water", 6, 307, ["氵","廿","口","夫"], ["China","Chinese character"]),
    ("経", ["ケイ","キョウ"], ["へ.る"], 11, "糸", "silk", 4, 310, ["糸","又","土"], ["sutra","pass through","experience"]),
    ("確", ["カク"], ["たし.か"], 15, "石", "stone", 6, 314, ["石","寉"], ["certain","firm","assurance"]),
    ("題", ["ダイ"], [], 18, "頁", "page", 5, 317, ["日","疋","頁"], ["topic","subject"]),
    ("両", ["リョウ"], [], 6, "一", "one", 5, 321, ["一","冂","入"], ["both","two"]),
    ("例", ["レイ"], [], 8, "亻", "person", 5, 324, ["亻","歹","刂"], ["example","instance"]),
    ("料", ["リョウ"], [], 10, "斗", "dipper", 5, 328, ["米","斗"], ["fee","materials","charge"]),
    ("暖", ["ダン"], ["あたた.か"], 13, "日", "sun", 4, 331, ["日","爰"], ["warm"]),
    ("横", ["オウ"], ["よこ"], 15, "木", "tree", 6, 335, ["木","黄"], ["side","horizontal"]),
    ("様", ["サマ"], ["よう"], 14, "木", "tree", 6, 338, ["木","羊","水"], ["manner","way","formal"]),
    ("用", ["ヨウ"], ["もち.いる"], 5, "用", "use", 4, 341, ["用"], ["use","business"]),
    ("夕", ["セキ"], ["ゆう"], 3, "夕", "evening", 3, 345, ["夕"], ["evening"]),
    ("由", ["ユ","ユイ"], ["よし"], 5, "田", "field", 6, 348, ["田"], ["reason","cause","from"]),
    ("郵", ["ユウ"], [], 8, "阝", "village", 6, 352, ["由","阝"], ["mail","postal"]),
    ("優", ["ユウ"], ["やさ.しい"], 17, "亻", "person", 8, 355, ["亻","憂"], ["excel","gentle","superior"]),
    ("遠", ["エン"], ["とお.い"], 13, "辶", "walk", 6, 359, ["辶","袁"], ["far","distant"]),
    ("病", ["ビョウ"], ["や.む"], 10, "疒", "sickness", 5, 362, ["疒","丙"], ["sickness","illness"]),
    ("研", ["ケン"], ["と.ぐ"], 9, "石", "stone", 6, 366, ["石","幵"], ["sharpen","polish","study"]),
    ("教", ["キョウ"], ["おし.える"], 11, "攵", "strike", 4, 369, ["老","子","攵"], ["teach","instruction"]),
    ("近", ["キン"], ["ちか.い"], 7, "辶", "walk", 3, 372, ["斤","辶"], ["near","close"]),
    ("区", ["ク"], [], 4, "匚", "box", 5, 376, ["匚","乂"], ["ward","district","section"]),
    ("印", ["イン"], ["しるし"], 6, "卩", "seal", 6, 379, ["丿","一","卩"], ["stamp","seal","mark"]),
    ("圧", ["アツ"], ["お.す"], 5, "土", "earth", 6, 383, ["厂","土"], ["pressure","push"]),
    ("液", ["エキ"], [], 11, "氵", "water", 6, 386, ["氵","夜"], ["liquid","fluid"]),
    ("演", ["エン"], [], 14, "氵", "water", 6, 390, ["氵","寅"], ["performance","act"]),
    ("応", ["オウ"], [], 7, "心", "heart", 6, 393, ["广","心"], ["respond","answer","apply"]),
    ("厚", ["コウ"], ["あつ.い"], 9, "厂", "cliff", 6, 397, ["厂","日","子"], ["thick","deep"]),
    ("貨", ["カ"], [], 11, "貝", "shell", 6, 400, ["貝","化"], ["freight","goods","money"]),
    ("株", ["カブ"], [], 10, "木", "tree", 6, 403, ["木","朱"], ["shares","stock","stump"]),
    ("角", ["カク"], ["かど","つの"], 7, "角", "horn", 3, 407, ["角"], ["angle","corner","horn"]),
    ("革", ["カク"], ["あらた.める"], 9, "革", "leather", 6, 410, ["革"], ["leather","reform"]),
    ("覚", ["カク"], ["おぼ.える","さ.める"], 9, "見", "see", 6, 414, ["⺍","冖","見"], ["memorize","awaken","sense"]),
    ("較", ["カク"], ["くら.べる"], 13, "車", "cart", 6, 417, ["車","交"], ["compare","contrast"]),
    ("関", ["カン"], ["せき.る"], 14, "門", "gate", 6, 421, ["門","关"], ["barrier","relation","connect"]),
    ("管", ["カン"], [], 14, "竹", "bamboo", 6, 424, ["竹","官"], ["pipe","tube","control"]),
    ("観", ["カン"], [], 18, "見", "see", 6, 428, ["雚","見"], ["view","watch","observe"]),
    ("期", ["キ","ゴ"], [], 12, "月", "moon", 4, 431, ["其","月"], ["period","term","expect"]),
    ("機", ["キ"], [], 16, "木", "tree", 5, 435, ["木","幾"], ["machine","opportunity","mechanism"]),
    ("器", ["キ"], ["うつわ"], 15, "口", "mouth", 6, 438, ["口","犬"], ["utensil","implement","vessel"]),
    ("危", ["キ"], ["あぶ.ない","あや.うい"], 6, "卩", "seal", 4, 441, ["厂","卩"], ["danger","fear"]),
    ("既", ["キ"], [], 9, "皀", "white", 6, 445, ["白","无"], ["already","previously"]),
    ("議", ["ギ"], [], 20, "言", "word", 6, 448, ["言","義"], ["deliberation","discussion"]),
    ("客", ["キャク","カク"], [], 9, "宀", "roof", 4, 452, ["宀","各"], ["guest","customer"]),
    ("求", ["キュウ"], ["もと.める"], 7, "水", "water", 4, 455, ["求"], ["request","seek","want"]),
    ("球", ["キュウ"], ["たま"], 11, "王", "jewel", 4, 459, ["王","求"], ["ball","globe"]),
    ("極", ["キョク"], ["きわ.める","きわ.み"], 12, "木", "tree", 6, 462, ["木","亟"], ["extreme","pole","limit"]),
    ("継", ["ケイ"], ["つ.ぐ"], 13, "糸", "silk", 6, 466, ["糸","隺"], ["inherit","continue"]),
    ("鏡", ["キョウ"], ["かがみ"], 19, "金", "metal", 6, 469, ["金","竟"], ["mirror","reflection"]),
    ("鯨", ["ゲイ"], ["くじら"], 19, "魚", "fish", 6, 472, ["魚","京"], ["whale"]),
    ("禁", ["キン"], [], 13, "示", "show", 6, 476, ["林","示"], ["prohibition","ban"]),
    ("境", ["キョウ","ケイ"], ["さかい"], 14, "土", "earth", 6, 479, ["土","竟"], ["boundary","condition","area"]),
    ("警", ["ケイ"], [], 19, "言", "word", 6, 483, ["敬","言"], ["police","warning","admonition"]),
    ("軽", ["ケイ"], ["かる.い","かろ.い"], 12, "車", "cart", 6, 486, ["車","圣"], ["light","easy"]),
    ("系", ["ケイ"], [], 7, "糸", "silk", 6, 490, ["糸"], ["system","lineage","group"]),
    ("検", ["ケン"], [], 12, "木", "tree", 6, 493, ["木","倹"], ["examination","investigate"]),
    ("権", ["ケン","ゴン"], [], 15, "木", "tree", 6, 497, ["木","雚"], ["authority","rights","power"]),
    ("厳", ["ゲン"], ["おごそ.か"], 17, "厂", "cliff", 6, 500, ["厂","敢"], ["strict","stern","solemn"]),
    ("減", ["ゲン"], ["へ.る","へ.らす"], 12, "氵", "water", 6, 503, ["氵","咸"], ["decrease","reduce"]),
    ("現", ["ゲン"], ["あらわ.れる","あらわ.す"], 11, "王", "jewel", 6, 507, ["王","見"], ["present","appear","existing"]),
    ("個", ["コ"], [], 10, "亻", "person", 6, 510, ["亻","固"], ["individual","piece"]),
    ("庫", ["コ","ク"], [], 10, "广", "building", 6, 514, ["广","車"], ["warehouse","storehouse"]),
    ("湖", ["コ"], ["みずうみ"], 12, "氵", "water", 4, 517, ["氵","古","月"], ["lake"]),
    ("固", ["コ"], ["かた.める","かた.い"], 8, "囗", "enclosure", 5, 521, ["囗","古"], ["hard","solid","firm"]),
    ("苦", ["ク"], ["にが.い","くる.しい"], 8, "艹", "grass", 4, 524, ["艹","古"], ["bitter","suffer","hardship"]),
    ("混", ["コン"], ["ま.じる","こ.む"], 11, "氵", "water", 6, 528, ["氵","昆"], ["mix","confuse"]),
    ("在", ["ザイ"], ["あ.る"], 6, "土", "earth", 4, 531, ["土"], ["exist","be located"]),
    ("細", ["サイ"], ["ほそ.い","こま.かい"], 11, "糸", "silk", 3, 535, ["糸","田"], ["thin","fine","detailed"]),
    ("裁", ["サイ"], ["た.つ","さば.く"], 13, "衣", "clothes", 6, 538, ["戈","衣"], ["judge","cut","tailor"]),
    ("参", ["サン"], ["まい.る"], 8, "厶", "private", 6, 541, ["厶","大","彡"], ["participate","visit","three"]),
    ("散", ["サン"], ["ち.る","ち.らす"], 12, "攵", "strike", 4, 545, ["廿","月","攵"], ["scatter","disperse","lazy"]),
    ("産", ["サン"], ["う.む","う.まれる"], 11, "生", "life", 4, 548, ["立","生"], ["product","birth","produce"]),
    ("視", ["シ"], [], 11, "見", "see", 6, 552, ["示","見"], ["look","inspect","view"]),
    ("死", ["シ"], ["し.ぬ"], 6, "歹", "death", 3, 555, ["歹","匕"], ["death","die"]),
    ("治", ["チ","ジ"], ["おさ.める","なお.る"], 8, "氵", "water", 4, 559, ["氵","台"], ["govern","cure","heal"]),
    ("式", ["シキ"], [], 6, "弋", "spear", 4, 562, ["工","弋"], ["style","ceremony","formula"]),
    ("室", ["シツ"], [], 9, "宀", "roof", 3, 566, ["宀","至"], ["room","chamber"]),
    ("者", ["シャ"], [], 8, "老", "old", 3, 569, ["耂","日"], ["person","someone"]),
    ("弱", ["ジャク"], ["よわ.い","よわ.る"], 10, "弓", "bow", 4, 572, ["弓","冫"], ["weak","feeble"]),
    ("守", ["シュ"], ["まも.る"], 6, "宀", "roof", 3, 576, ["宀","寸"], ["protect","guard"]),
    ("種", ["シュ"], ["たね"], 14, "禾", "grain", 4, 579, ["禾","重"], ["kind","sort","seed"]),
    ("宿", ["シュク"], ["やど","やど.る"], 11, "宀", "roof", 4, 583, ["宀","亻","百"], ["lodge","inn","dwelling"]),
    ("職", ["ショク"], [], 18, "耳", "ear", 6, 586, ["耳","戠"], ["job","occupation","duty"]),
    ("頂", ["チョウ"], ["いただ.く"], 14, "頁", "page", 6, 590, ["丁","頁"], ["top","peak","receive"]),
    ("成", ["セイ","ジョウ"], ["な.る"], 6, "戈", "spear", 4, 593, ["戊","丁"], ["become","success","form"]),
    ("省", ["セイ","ショウ"], ["はぶ.く"], 9, "目", "eye", 6, 597, ["少","目"], ["ministry","omit","reflect"]),
    ("城", ["ジョウ"], ["しろ"], 9, "土", "earth", 4, 600, ["土","成"], ["castle"]),
    ("詳", ["ショウ"], ["くわ.しい"], 13, "言", "word", 6, 603, ["言","羊"], ["detailed","detail"]),
    ("賞", ["ショウ"], [], 15, "貝", "shell", 6, 607, ["尚","貝"], ["prize","reward","commend"]),
    ("仲", ["チュウ"], ["なか"], 6, "亻", "person", 4, 610, ["亻","中"], ["go-between","relationship"]),
    ("調", ["チョウ"], ["しら.べる","と.う"], 15, "言", "word", 5, 614, ["言","周"], ["investigate","tune","key"]),
    ("聴", ["チョウ"], ["き.く"], 17, "耳", "ear", 6, 617, ["耳","心"], ["listen","hear"]),
    ("賃", ["チン"], [], 13, "貝", "shell", 6, 621, ["任","貝"], ["rent","hire","fee"]),
    ("低", ["テイ"], ["ひく.い"], 7, "亻", "person", 4, 624, ["亻","氐"], ["low","low-ranked"]),
    ("底", ["テイ"], ["そこ"], 8, "广", "building", 6, 628, ["广","氐"], ["bottom","sole"]),
    ("停", ["テイ"], [], 11, "亻", "person", 6, 631, ["亻","亭"], ["stop","halt","park"]),
    ("提", ["テイ"], [], 12, "扌", "hand", 5, 635, ["扌","是"], ["propose","present","carry"]),
    ("帝", ["テイ"], [], 9, "巾", "cloth", 6, 638, ["亠","冖","巾"], ["emperor"]),
    ("展", ["テン"], [], 10, "尸", "corpse", 6, 641, ["尸","衣"], ["exhibit","unfold","display"]),
    ("党", ["トウ"], [], 10, "儿", "legs", 6, 645, ["⺍","冖","兄"], ["party","faction"]),
    ("塔", ["トウ"], [], 12, "土", "earth", 6, 648, ["土","艹","合"], ["tower","pagoda"]),
    ("倒", ["トウ"], ["たお.れる","たお.す"], 10, "亻", "person", 6, 652, ["亻","至","刂"], ["fall","overturn","pour"]),
    ("島", ["トウ"], ["しま"], 10, "山", "mountain", 4, 655, ["鳥","山"], ["island"]),
    ("徒", ["ト"], [], 10, "彳", "step", 6, 659, ["彳","走"], ["on foot","follower","in vain"]),
    ("届", ["トウ"], ["とど.く","とど.ける"], 8, "尸", "corpse", 4, 662, ["尸","由"], ["deliver","reach"]),
    ("復", ["フク"], [], 12, "彳", "step", 6, 666, ["彳","复"], ["restore","return","again"]),
    ("腹", ["フク"], ["はら"], 13, "月", "flesh", 6, 669, ["月","复"], ["belly","abdomen"]),
    ("設", ["セツ"], [], 11, "言", "word", 6, 672, ["言","殳"], ["establish","set up","design"]),
    ("説", ["セツ","ゼイ"], [], 14, "言", "word", 6, 676, ["言","兑"], ["opinion","explanation","theory"]),
    ("築", ["チク"], [], 16, "竹", "bamboo", 6, 679, ["竹","筑"], ["build","construct"]),
    ("突", ["トツ"], ["つ.く"], 8, "穴", "hole", 6, 683, ["穴","大"], ["thrust","poke","sudden"]),
    ("燃", ["ネン"], ["も.える","も.やす"], 16, "火", "fire", 6, 686, ["火","然"], ["burn","ignite","kindle"]),
    ("農", ["ノウ"], [], 13, "辰", "dragon", 6, 690, ["曲","辰"], ["agriculture","farming"]),
    ("納", ["ノウ","ナッ"], ["おさ.める"], 10, "糸", "silk", 6, 693, ["糸","内"], ["pay","supply","accept"]),
    ("軟", ["ナン"], ["やわ.らか"], 11, "車", "cart", 6, 697, ["車","欠"], ["soft","mild"]),
    ("破", ["ハ"], ["やぶ.る","やぶ.れる"], 10, "石", "stone", 6, 700, ["石","皮"], ["tear","break","defeat"]),
]

assert len(data) == 117, f"Expected 117, got {len(data)}"
chars = [d[0] for d in data]
assert len(chars) == len(set(chars)), "Dup chars!"

def qlist(lst):
    if not lst:
        return "[]"
    return "[" + ", ".join(f'"{x}"' for x in lst) + "]"

lines = []
lines.append('import type { KanjiData } from "@/lib/types";')
lines.append('')
lines.append('// JLPT N3 kanji dataset (chunk A) for Nihongo with Nikki')
lines.append('// 117 standard JLPT N3 kanji, ids n3-01..n3-117.')
lines.append('// Compact format: vocab and examples left empty for this chunk.')
lines.append('')
lines.append('export const kanjiN3A: KanjiData[] = [')

for i, (char, onyomi, kunyomi, strokes, radical, radMean, grade, freq, parts, meaning) in enumerate(data, start=1):
    kid = f"n3-{i:02d}"
    lines.append('  // ' + kid + " — " + char)
    lines.append('  {')
    lines.append(f'    id: "{kid}",')
    lines.append(f'    char: "{char}",')
    lines.append('    level: "N3",')
    lines.append(f'    meaning: {qlist(meaning)},')
    lines.append(f'    onyomi: {qlist(onyomi)},')
    lines.append(f'    kunyomi: {qlist(kunyomi)},')
    lines.append(f'    strokes: {strokes},')
    lines.append(f'    radical: "{radical}",')
    lines.append(f'    radicalMeaning: "{radMean}",')
    lines.append(f'    grade: {grade},')
    lines.append(f'    freq: {freq},')
    lines.append(f'    parts: {qlist(parts)},')
    lines.append('    vocab: [],')
    lines.append('    examples: [],')
    lines.append('  },')

lines.append('];')
lines.append('')

content = "\n".join(lines)
out = "/home/z/my-project/src/lib/data/kanji-n3-a.ts"
with open(out, "w", encoding="utf-8") as f:
    f.write(content)
print("Wrote", out, "entries:", len(data), "unique:", len(set(chars)))
