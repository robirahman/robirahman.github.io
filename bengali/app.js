// ════════════════════════════════════════
//  BENGALI ALPHABET DATA
// ════════════════════════════════════════
const VOWELS = [
  { letter:"অ", name:"Ô (Shôro Ô)", romanized:"ô / o", ipa:"/ɔ/", sound:'Like "o" in "hot"', example:"অনেক (ônek) — many/much" },
  { letter:"আ", name:"A (Shôro A)", romanized:"a / aa", ipa:"/a/", sound:'Like "a" in "father"', example:"আম (am) — mango" },
  { letter:"ই", name:"I (Hrôshsho I)", romanized:"i", ipa:"/i/", sound:'Like "ee" in "see" (short)', example:"ইট (iṭ) — brick" },
  { letter:"ঈ", name:"II (Dirgho II)", romanized:"ii / ī", ipa:"/iː/", sound:'Like "ee" in "see" (long)', example:"ঈদ (īd) — Eid" },
  { letter:"উ", name:"U (Hrôshsho U)", romanized:"u", ipa:"/u/", sound:'Like "oo" in "food" (short)', example:"উট (uṭ) — camel" },
  { letter:"ঊ", name:"UU (Dirgho UU)", romanized:"uu / ū", ipa:"/uː/", sound:'Like "oo" in "food" (long)', example:"ঊন (ūn) — minus" },
  { letter:"ঋ", name:"Ri (Ri)", romanized:"ri / ṛ", ipa:"/ri/", sound:'Like "ri" in "rip"', example:"ঋতু (ritu) — season" },
  { letter:"এ", name:"E (E)", romanized:"e / ē", ipa:"/e/", sound:'Like "ay" in "say"', example:"একটা (ekṭa) — one" },
  { letter:"ঐ", name:"OI (OI)", romanized:"oi", ipa:"/oi/", sound:'Like "oy" in "boy"', example:"ঐক্য (oikko) — unity" },
  { letter:"ও", name:"O (O)", romanized:"o / ō", ipa:"/o/", sound:'Like "o" in "go"', example:"ওজন (ojon) — weight" },
  { letter:"ঔ", name:"OU (OU)", romanized:"ou", ipa:"/ou/", sound:'Like "ow" in "cow"', example:"ঔষধ (oushôdh) — medicine" },
];

const CONSONANTS_VELAR = [
  { letter:"ক", name:"Kô", romanized:"k / kô", ipa:"/k/", sound:'Like "k" in "kite"', example:"কলম (kôlôm) — pen" },
  { letter:"খ", name:"Khô", romanized:"kh / khô", ipa:"/kʰ/", sound:'Aspirated "k", like "k" in "kin"', example:"খবর (khôbôr) — news" },
  { letter:"গ", name:"Gô", romanized:"g / gô", ipa:"/ɡ/", sound:'Like "g" in "go"', example:"গরু (goru) — cow" },
  { letter:"ঘ", name:"Ghô", romanized:"gh / ghô", ipa:"/ɡʱ/", sound:'Aspirated "g"', example:"ঘর (ghôr) — house" },
  { letter:"ঙ", name:"Ngô (Umô)", romanized:"ng / ṅ", ipa:"/ŋ/", sound:'Like "ng" in "sing"', example:"বাঙালি (bangali) — Bengali" },
];

const CONSONANTS_PALATAL = [
  { letter:"চ", name:"Chô", romanized:"ch / chô", ipa:"/tʃ/", sound:'Like "ch" in "chat"', example:"চা (cha) — tea" },
  { letter:"ছ", name:"Chhô", romanized:"chh / chhô", ipa:"/tʃʰ/", sound:'Aspirated "ch"', example:"ছবি (chhobi) — picture" },
  { letter:"জ", name:"Jô (Borgiyo Jô)", romanized:"j / jô", ipa:"/dʒ/", sound:'Like "j" in "jam"', example:"জল (jôl) — water" },
  { letter:"ঝ", name:"Jhô", romanized:"jh / jhô", ipa:"/dʒʱ/", sound:'Aspirated "j"', example:"ঝড় (jhôṛ) — storm" },
  { letter:"ঞ", name:"Niyô (Ñô)", romanized:"ny / ñ", ipa:"/ɲ/", sound:'Like "ny" in "canyon"', example:"মিঞা (minya) — mister" },
];

const CONSONANTS_RETROFLEX = [
  { letter:"ট", name:"Ṭô (Murdhonyo Ṭô)", romanized:"ṭ / ṭô", ipa:"/ʈ/", sound:'Retroflex "t" (tongue curled back)', example:"টাকা (ṭaka) — money" },
  { letter:"ঠ", name:"Ṭhô", romanized:"ṭh / ṭhô", ipa:"/ʈʰ/", sound:'Aspirated retroflex "t"', example:"ঠান্ডা (ṭhanḍa) — cold" },
  { letter:"ড", name:"Ḍô", romanized:"ḍ / ḍô", ipa:"/ɖ/", sound:'Retroflex "d" (tongue curled back)', example:"ডাক (ḍak) — mail" },
  { letter:"ঢ", name:"Ḍhô", romanized:"ḍh / ḍhô", ipa:"/ɖʱ/", sound:'Aspirated retroflex "d"', example:"ঢাকা (ḍhaka) — Dhaka" },
  { letter:"ণ", name:"Nô (Murdhonyo Nô)", romanized:"ṇ / ṇô", ipa:"/ɳ/", sound:'Retroflex "n" (tongue curled back)', example:"বাণ (baṇ) — arrow" },
];

const CONSONANTS_DENTAL = [
  { letter:"ত", name:"Tô (Dontyo Tô)", romanized:"t / tô", ipa:"/t̪/", sound:'Dental "t" (tongue touches teeth)', example:"তারা (tara) — they/star" },
  { letter:"থ", name:"Thô", romanized:"th / thô", ipa:"/t̪ʰ/", sound:'Aspirated dental "t"', example:"থালা (thala) — plate" },
  { letter:"দ", name:"Dô (Dontyo Dô)", romanized:"d / dô", ipa:"/d̪/", sound:'Dental "d" (tongue touches teeth)', example:"দিন (din) — day" },
  { letter:"ধ", name:"Dhô", romanized:"dh / dhô", ipa:"/d̪ʱ/", sound:'Aspirated dental "d"', example:"ধান (dhan) — paddy" },
  { letter:"ন", name:"Nô (Dontyo Nô)", romanized:"n / nô", ipa:"/n/", sound:'Like "n" in "no"', example:"নদী (nôdi) — river" },
];

const CONSONANTS_LABIAL = [
  { letter:"প", name:"Pô", romanized:"p / pô", ipa:"/p/", sound:'Like "p" in "spin"', example:"পানি (pani) — water" },
  { letter:"ফ", name:"Phô", romanized:"ph / phô", ipa:"/pʰ/", sound:'Aspirated "p" or "f" sound', example:"ফুল (phul) — flower" },
  { letter:"ব", name:"Bô", romanized:"b / bô", ipa:"/b/", sound:'Like "b" in "bat"', example:"বই (boi) — book" },
  { letter:"ভ", name:"Bhô", romanized:"bh / bhô", ipa:"/bʱ/", sound:'Aspirated "b"', example:"ভাত (bhat) — rice" },
  { letter:"ম", name:"Mô", romanized:"m / mô", ipa:"/m/", sound:'Like "m" in "man"', example:"মা (ma) — mother" },
];

const CONSONANTS_OTHER = [
  { letter:"য", name:"Jô (Antahsthô Jô)", romanized:"j / z", ipa:"/dʒ/ or /z/", sound:'Like "j" or "z" depending on position', example:"যা (ja) — go" },
  { letter:"র", name:"Rô", romanized:"r / rô", ipa:"/r/", sound:'Flapped "r" like Spanish "r"', example:"রং (rông) — color" },
  { letter:"ল", name:"Lô", romanized:"l / lô", ipa:"/l/", sound:'Like "l" in "lamp"', example:"লাল (lal) — red" },
  { letter:"শ", name:"Shô (Talobbo Shô)", romanized:"sh / shô", ipa:"/ʃ/", sound:'Like "sh" in "ship"', example:"শিক্ষা (shikkha) — education" },
  { letter:"ষ", name:"Shô (Murdhonyo Shô)", romanized:"ṣh / ṣhô", ipa:"/ʃ/", sound:'Like "sh" (retroflex, same as শ in modern)', example:"ষাঁড় (shaṛ) — bull" },
  { letter:"স", name:"Sô (Dontyo Sô)", romanized:"s / sô", ipa:"/s/", sound:'Like "s" in "sun"', example:"সূর্য (shurjo) — sun" },
  { letter:"হ", name:"Hô", romanized:"h / hô", ipa:"/h/", sound:'Like "h" in "hat"', example:"হাত (hat) — hand" },
];

const CONSONANTS_SPECIAL = [
  { letter:"ড়", name:"Ṛô (Ḍô-e Shunno)", romanized:"ṛ / ṛô", ipa:"/ɽ/", sound:'Flapped retroflex "r"', example:"পড়া (pôṛa) — to read" },
  { letter:"ঢ়", name:"Ṛhô (Ḍhô-e Shunno)", romanized:"ṛh / ṛhô", ipa:"/ɽʱ/", sound:'Aspirated flapped retroflex', example:"আষাঢ় (ashaṛh) — month name" },
  { letter:"য়", name:"Yô (Ôntohsthô Yô)", romanized:"y / yô", ipa:"/j/", sound:'Like "y" in "yes"', example:"যায় (jay) — goes" },
  { letter:"ৎ", name:"Khônḍô Tô", romanized:"t", ipa:"/t/", sound:'Abrupt "t" (unreleased stop)', example:"হঠাৎ (hothat) — suddenly" },
  { letter:"ং", name:"Anushshar", romanized:"ng / ṃ", ipa:"/ŋ/", sound:'Nasal "ng" at end of syllable', example:"বাংলা (bangla) — Bengali" },
  { letter:"ঃ", name:"Bishôrgô", romanized:"h / ḥ", ipa:"/h/", sound:'Light aspiration / breath', example:"দুঃখ (dukhkhô) — sorrow" },
  { letter:"ঁ", name:"Chôndrobindu", romanized:"~n / n̐", ipa:"/◌̃/", sound:'Nasalizes the preceding vowel', example:"চাঁদ (chãd) — moon" },
];

const ALL_CONSONANTS = [
  ...CONSONANTS_VELAR, ...CONSONANTS_PALATAL, ...CONSONANTS_RETROFLEX,
  ...CONSONANTS_DENTAL, ...CONSONANTS_LABIAL, ...CONSONANTS_OTHER,
  ...CONSONANTS_SPECIAL,
];

const ALL_LETTERS = [
  ...VOWELS.map(v => ({...v, type:'vowel'})),
  ...ALL_CONSONANTS.map(c => ({...c, type:'consonant'})),
];

// ════════════════════════════════════════
//  BENGALI NUMERALS (০–৯)
// ════════════════════════════════════════
const BENGALI_NUMERALS = [
  { letter:'০', name:'শূন্য (Shunno)', romanized:'shunno', ipa:'0', sound:'zero',  example:'০ থেকে শুরু করো। (shunno theke shuru koro — Start from zero.)', type:'numeral', _isNumeral:true },
  { letter:'১', name:'এক (Ek)',         romanized:'ek',     ipa:'1', sound:'one',   example:'১ টাকা। (ek taka — One taka.)', type:'numeral', _isNumeral:true },
  { letter:'২', name:'দুই (Dui)',        romanized:'dui',    ipa:'2', sound:'two',   example:'২ জন আছে। (dui jon ache — There are two people.)', type:'numeral', _isNumeral:true },
  { letter:'৩', name:'তিন (Tin)',        romanized:'tin',    ipa:'3', sound:'three', example:'৩ দিন পরে। (tin dine pore — After three days.)', type:'numeral', _isNumeral:true },
  { letter:'৪', name:'চার (Char)',       romanized:'char',   ipa:'4', sound:'four',  example:'৪ টি বই। (char-ti boi — Four books.)', type:'numeral', _isNumeral:true },
  { letter:'৫', name:'পাঁচ (Panch)',     romanized:'panch',  ipa:'5', sound:'five',  example:'৫ টাকা দাও। (panch taka dao — Give five taka.)', type:'numeral', _isNumeral:true },
  { letter:'৬', name:'ছয় (Chhoy)',      romanized:'chhoy',  ipa:'6', sound:'six',   example:'৬ মাস পরে। (chhoy mash pore — After six months.)', type:'numeral', _isNumeral:true },
  { letter:'৭', name:'সাত (Shat)',       romanized:'shat',   ipa:'7', sound:'seven', example:'৭ দিনে সপ্তাহ। (shat dine shoptaho — Seven days in a week.)', type:'numeral', _isNumeral:true },
  { letter:'৮', name:'আট (Aat)',         romanized:'aat',    ipa:'8', sound:'eight', example:'৮ ঘণ্টা ঘুম। (aat ghonta ghum — Eight hours of sleep.)', type:'numeral', _isNumeral:true },
  { letter:'৯', name:'নয় (Noy)',         romanized:'noy',    ipa:'9', sound:'nine',  example:'৯ নম্বর বাড়ি। (noy nombor bari — House number nine.)', type:'numeral', _isNumeral:true },
];

// ════════════════════════════════════════
//  BENGALI NUMBER NAMES  (named number words)
// ════════════════════════════════════════
// Ones & Teens (0–19), Tens (20–90), Large Numbers
// letter = Bengali word shown on flashcard
// ipa    = numeric value used for quiz prompts & distractors
// sound  = English meaning
const BENGALI_NUMBER_NAMES = [
  // ── Ones & Teens (0–19) ──
  { letter:'শূন্য', name:'শূন্য (shunno) — zero',       romanized:'shunno',      ipa:'0',         sound:'zero',            example:'শূন্য থেকে শুরু করো। — Start from zero.',                   type:'number-name', _isNumberName:true },
  { letter:'এক',   name:'এক (ek) — one',               romanized:'ek',          ipa:'1',         sound:'one',             example:'একটি বই আছে। — There is one book.',                          type:'number-name', _isNumberName:true },
  { letter:'দুই',  name:'দুই (dui) — two',              romanized:'dui',         ipa:'2',         sound:'two',             example:'দুটো আম। — Two mangoes.',                                     type:'number-name', _isNumberName:true },
  { letter:'তিন',  name:'তিন (tin) — three',            romanized:'tin',         ipa:'3',         sound:'three',           example:'তিনটি ফুল। — Three flowers.',                                 type:'number-name', _isNumberName:true },
  { letter:'চার',  name:'চার (char) — four',            romanized:'char',        ipa:'4',         sound:'four',            example:'চারটি চেয়ার। — Four chairs.',                                 type:'number-name', _isNumberName:true },
  { letter:'পাঁচ', name:'পাঁচ (panch) — five',          romanized:'panch',       ipa:'5',         sound:'five',            example:'পাঁচটি টাকা দাও। — Give five taka.',                           type:'number-name', _isNumberName:true },
  { letter:'ছয়',  name:'ছয় (chhoy) — six',            romanized:'chhoy',       ipa:'6',         sound:'six',             example:'ছয় মাস পরে। — After six months.',                             type:'number-name', _isNumberName:true },
  { letter:'সাত',  name:'সাত (shat) — seven',           romanized:'shat',        ipa:'7',         sound:'seven',           example:'সাত দিনে এক সপ্তাহ। — Seven days in a week.',                 type:'number-name', _isNumberName:true },
  { letter:'আট',   name:'আট (aat) — eight',             romanized:'aat',         ipa:'8',         sound:'eight',           example:'আট ঘণ্টা ঘুমাও। — Sleep eight hours.',                        type:'number-name', _isNumberName:true },
  { letter:'নয়',  name:'নয় (noy) — nine',              romanized:'noy',         ipa:'9',         sound:'nine',            example:'নয় নম্বর বাড়ি। — House number nine.',                          type:'number-name', _isNumberName:true },
  { letter:'দশ',   name:'দশ (dosh) — ten',              romanized:'dosh',        ipa:'10',        sound:'ten',             example:'দশটি বই আছে। — There are ten books.',                          type:'number-name', _isNumberName:true },
  { letter:'এগারো',name:'এগারো (egaro) — eleven',        romanized:'egaro',       ipa:'11',        sound:'eleven',          example:'এগারোটি ছেলে। — Eleven boys.',                                type:'number-name', _isNumberName:true },
  { letter:'বারো', name:'বারো (baro) — twelve',          romanized:'baro',        ipa:'12',        sound:'twelve',          example:'বারো মাসে এক বছর। — Twelve months in a year.',                type:'number-name', _isNumberName:true },
  { letter:'তেরো', name:'তেরো (tero) — thirteen',        romanized:'tero',        ipa:'13',        sound:'thirteen',        example:'তেরোটি পাখি। — Thirteen birds.',                              type:'number-name', _isNumberName:true },
  { letter:'চৌদ্দ',name:'চৌদ্দ (chouddo) — fourteen',    romanized:'chouddo',     ipa:'14',        sound:'fourteen',        example:'চৌদ্দটি দিন। — Fourteen days.',                               type:'number-name', _isNumberName:true },
  { letter:'পনেরো',name:'পনেরো (ponero) — fifteen',      romanized:'ponero',      ipa:'15',        sound:'fifteen',         example:'পনেরো মিনিট। — Fifteen minutes.',                             type:'number-name', _isNumberName:true },
  { letter:'ষোলো', name:'ষোলো (sholo) — sixteen',        romanized:'sholo',       ipa:'16',        sound:'sixteen',         example:'ষোলো বছর বয়স। — Sixteen years old.',                          type:'number-name', _isNumberName:true },
  { letter:'সতেরো',name:'সতেরো (shotero) — seventeen',   romanized:'shotero',     ipa:'17',        sound:'seventeen',       example:'সতেরো জন আছে। — There are seventeen people.',                 type:'number-name', _isNumberName:true },
  { letter:'আঠারো',name:'আঠারো (atharo) — eighteen',     romanized:'atharo',      ipa:'18',        sound:'eighteen',        example:'আঠারো বছর। — Eighteen years.',                                type:'number-name', _isNumberName:true },
  { letter:'উনিশ', name:'উনিশ (unish) — nineteen',       romanized:'unish',       ipa:'19',        sound:'nineteen',        example:'উনিশটি গাছ। — Nineteen trees.',                               type:'number-name', _isNumberName:true },
  // ── Tens (20–90) ──
  { letter:'বিশ',  name:'বিশ (bish) — twenty',           romanized:'bish',        ipa:'20',        sound:'twenty',          example:'বিশটি প্রশ্ন। — Twenty questions.',                           type:'number-name', _isNumberName:true },
  { letter:'ত্রিশ',name:'ত্রিশ (trish) — thirty',         romanized:'trish',       ipa:'30',        sound:'thirty',          example:'ত্রিশ মিনিট। — Thirty minutes.',                              type:'number-name', _isNumberName:true },
  { letter:'চল্লিশ',name:'চল্লিশ (chollish) — forty',    romanized:'chollish',    ipa:'40',        sound:'forty',           example:'চল্লিশ কিলোমিটার। — Forty kilometres.',                       type:'number-name', _isNumberName:true },
  { letter:'পঞ্চাশ',name:'পঞ্চাশ (ponchas) — fifty',     romanized:'ponchas',     ipa:'50',        sound:'fifty',           example:'পঞ্চাশ টাকা। — Fifty taka.',                                  type:'number-name', _isNumberName:true },
  { letter:'ষাট',  name:'ষাট (shaṭ) — sixty',            romanized:'shaṭ',        ipa:'60',        sound:'sixty',           example:'ষাট সেকেন্ড। — Sixty seconds.',                               type:'number-name', _isNumberName:true },
  { letter:'সত্তর',name:'সত্তর (shottor) — seventy',      romanized:'shottor',     ipa:'70',        sound:'seventy',         example:'সত্তর বছর বয়স। — Seventy years old.',                         type:'number-name', _isNumberName:true },
  { letter:'আশি',  name:'আশি (ashi) — eighty',           romanized:'ashi',        ipa:'80',        sound:'eighty',          example:'আশি কিলো। — Eighty kilos.',                                   type:'number-name', _isNumberName:true },
  { letter:'নব্বই',name:'নব্বই (nobboi) — ninety',        romanized:'nobboi',      ipa:'90',        sound:'ninety',          example:'নব্বই পার্সেন্ট। — Ninety percent.',                           type:'number-name', _isNumberName:true },
  // ── Large Numbers ──
  { letter:'একশো',     name:'একশো (ekshо) — one hundred',      romanized:'eksho',       ipa:'100',       sound:'one hundred',     example:'একশো টাকা। — One hundred taka.',                               type:'number-name', _isNumberName:true },
  { letter:'এক হাজার', name:'এক হাজার (ek hajar) — one thousand',romanized:'ek hajar',    ipa:'1,000',     sound:'one thousand',    example:'এক হাজার মানুষ। — One thousand people.',                      type:'number-name', _isNumberName:true },
  { letter:'দশ হাজার', name:'দশ হাজার (dosh hajar) — ten thousand',romanized:'dosh hajar', ipa:'10,000',    sound:'ten thousand',    example:'দশ হাজার বর্গ মিটার। — Ten thousand square metres.',          type:'number-name', _isNumberName:true },
  { letter:'এক লাখ',   name:'এক লাখ (ek lakh) — one lakh',      romanized:'ek lakh',     ipa:'1,00,000',  sound:'one lakh',        example:'এক লাখ টাকা। — One lakh taka.',                               type:'number-name', _isNumberName:true },
  { letter:'দশ লাখ',   name:'দশ লাখ (dosh lakh) — ten lakh',    romanized:'dosh lakh',   ipa:'10,00,000', sound:'ten lakh',        example:'দশ লাখ মানুষ। — Ten lakh people.',                            type:'number-name', _isNumberName:true },
];

// ════════════════════════════════════════
//  MATRA COMBOS  (consonant + vowel sign)
// ════════════════════════════════════════
// 5 representative consonants × 9 matras = 45 combinations.
// _isMatraDrill:true causes generateQuiz() to use mc-sound + fib-romanized only.
// `ipa` stores the romanized syllable so mc-sound distractors are other syllables.
const MATRA_COMBOS = [
  // ক (k) + each matra
  { letter:'কা', name:'কা (ka)',   romanized:'ka',   ipa:'ka',   sound:'ক + া', example:'কাজ (kaj — work)',              type:'matra', _isMatraDrill:true },
  { letter:'কি', name:'কি (ki)',   romanized:'ki',   ipa:'ki',   sound:'ক + ি', example:'কিছু (kichhu — something)',     type:'matra', _isMatraDrill:true },
  { letter:'কী', name:'কী (kii)',  romanized:'kii',  ipa:'kii',  sound:'ক + ী', example:'কীভাবে (kibhabe — how)',         type:'matra', _isMatraDrill:true },
  { letter:'কু', name:'কু (ku)',   romanized:'ku',   ipa:'ku',   sound:'ক + ু', example:'কুকুর (kukur — dog)',            type:'matra', _isMatraDrill:true },
  { letter:'কূ', name:'কূ (kuu)',  romanized:'kuu',  ipa:'kuu',  sound:'ক + ূ', example:'কূপ (kup — well)',               type:'matra', _isMatraDrill:true },
  { letter:'কে', name:'কে (ke)',   romanized:'ke',   ipa:'ke',   sound:'ক + ে', example:'কে (ke — who)',                  type:'matra', _isMatraDrill:true },
  { letter:'কৈ', name:'কৈ (koi)',  romanized:'koi',  ipa:'koi',  sound:'ক + ৈ', example:'কৈশোর (koishore — youth)',       type:'matra', _isMatraDrill:true },
  { letter:'কো', name:'কো (ko)',   romanized:'ko',   ipa:'ko',   sound:'ক + ো', example:'কোথায় (kothay — where)',         type:'matra', _isMatraDrill:true },
  { letter:'কৌ', name:'কৌ (kou)',  romanized:'kou',  ipa:'kou',  sound:'ক + ৌ', example:'কৌতূহল (koutuhal — curiosity)',   type:'matra', _isMatraDrill:true },
  // গ (g) + each matra
  { letter:'গা', name:'গা (ga)',   romanized:'ga',   ipa:'ga',   sound:'গ + া', example:'গান (gan — song)',               type:'matra', _isMatraDrill:true },
  { letter:'গি', name:'গি (gi)',   romanized:'gi',   ipa:'gi',   sound:'গ + ি', example:'গিটার (gitar — guitar)',         type:'matra', _isMatraDrill:true },
  { letter:'গী', name:'গী (gii)',  romanized:'gii',  ipa:'gii',  sound:'গ + ী', example:'গীত (git — song/hymn)',           type:'matra', _isMatraDrill:true },
  { letter:'গু', name:'গু (gu)',   romanized:'gu',   ipa:'gu',   sound:'গ + ু', example:'গুরু (guru — teacher)',           type:'matra', _isMatraDrill:true },
  { letter:'গূ', name:'গূ (guu)',  romanized:'guu',  ipa:'guu',  sound:'গ + ূ', example:'গূঢ় (gurho — mysterious)',       type:'matra', _isMatraDrill:true },
  { letter:'গে', name:'গে (ge)',   romanized:'ge',   ipa:'ge',   sound:'গ + ে', example:'গেছি (gechi — I have gone)',      type:'matra', _isMatraDrill:true },
  { letter:'গৈ', name:'গৈ (goi)',  romanized:'goi',  ipa:'goi',  sound:'গ + ৈ', example:'গৈরিক (goirik — saffron-hued)',  type:'matra', _isMatraDrill:true },
  { letter:'গো', name:'গো (go)',   romanized:'go',   ipa:'go',   sound:'গ + ো', example:'গোলাপ (golap — rose)',            type:'matra', _isMatraDrill:true },
  { letter:'গৌ', name:'গৌ (gou)',  romanized:'gou',  ipa:'gou',  sound:'গ + ৌ', example:'গৌরব (gourab — glory)',           type:'matra', _isMatraDrill:true },
  // চ (ch) + each matra
  { letter:'চা', name:'চা (cha)',  romanized:'cha',  ipa:'cha',  sound:'চ + া', example:'চা (cha — tea)',                 type:'matra', _isMatraDrill:true },
  { letter:'চি', name:'চি (chi)',  romanized:'chi',  ipa:'chi',  sound:'চ + ি', example:'চিঠি (chithi — letter/mail)',    type:'matra', _isMatraDrill:true },
  { letter:'চী', name:'চী (chii)', romanized:'chii', ipa:'chii', sound:'চ + ী', example:'চীন (chin — China)',              type:'matra', _isMatraDrill:true },
  { letter:'চু', name:'চু (chu)',  romanized:'chu',  ipa:'chu',  sound:'চ + ু', example:'চুল (chul — hair)',               type:'matra', _isMatraDrill:true },
  { letter:'চূ', name:'চূ (chuu)', romanized:'chuu', ipa:'chuu', sound:'চ + ূ', example:'চূড়া (chura — peak/summit)',    type:'matra', _isMatraDrill:true },
  { letter:'চে', name:'চে (che)',  romanized:'che',  ipa:'che',  sound:'চ + ে', example:'চেষ্টা (cheshta — effort)',       type:'matra', _isMatraDrill:true },
  { letter:'চৈ', name:'চৈ (choi)', romanized:'choi', ipa:'choi', sound:'চ + ৈ', example:'চৈত্র (choitro — spring month)', type:'matra', _isMatraDrill:true },
  { letter:'চো', name:'চো (cho)',  romanized:'cho',  ipa:'cho',  sound:'চ + ো', example:'চোখ (chokh — eye)',               type:'matra', _isMatraDrill:true },
  { letter:'চৌ', name:'চৌ (chou)', romanized:'chou', ipa:'chou', sound:'চ + ৌ', example:'চৌদ্দ (chouddo — fourteen)',     type:'matra', _isMatraDrill:true },
  // ত (t) + each matra
  { letter:'তা', name:'তা (ta)',   romanized:'ta',   ipa:'ta',   sound:'ত + া', example:'তাই (tai — so/therefore)',        type:'matra', _isMatraDrill:true },
  { letter:'তি', name:'তি (ti)',   romanized:'ti',   ipa:'ti',   sound:'ত + ি', example:'তিনি (tini — he/she, formal)',   type:'matra', _isMatraDrill:true },
  { letter:'তী', name:'তী (tii)',  romanized:'tii',  ipa:'tii',  sound:'ত + ী', example:'তীর (tir — shore/arrow)',         type:'matra', _isMatraDrill:true },
  { letter:'তু', name:'তু (tu)',   romanized:'tu',   ipa:'tu',   sound:'ত + ু', example:'তুমি (tumi — you, informal)',     type:'matra', _isMatraDrill:true },
  { letter:'তূ', name:'তূ (tuu)',  romanized:'tuu',  ipa:'tuu',  sound:'ত + ূ', example:'তূলা (tula — scales/Libra)',      type:'matra', _isMatraDrill:true },
  { letter:'তে', name:'তে (te)',   romanized:'te',   ipa:'te',   sound:'ত + ে', example:'তেল (tel — oil)',                 type:'matra', _isMatraDrill:true },
  { letter:'তৈ', name:'তৈ (toi)',  romanized:'toi',  ipa:'toi',  sound:'ত + ৈ', example:'তৈরি (toiri — ready/made)',       type:'matra', _isMatraDrill:true },
  { letter:'তো', name:'তো (to)',   romanized:'to',   ipa:'to',   sound:'ত + ো', example:'তোমার (tomar — your)',             type:'matra', _isMatraDrill:true },
  { letter:'তৌ', name:'তৌ (tou)',  romanized:'tou',  ipa:'tou',  sound:'ত + ৌ', example:'তৌলিয়া (toulia — towel)',         type:'matra', _isMatraDrill:true },
  // ম (m) + each matra
  { letter:'মা', name:'মা (ma)',   romanized:'ma',   ipa:'ma',   sound:'ম + া', example:'মা (ma — mother)',                type:'matra', _isMatraDrill:true },
  { letter:'মি', name:'মি (mi)',   romanized:'mi',   ipa:'mi',   sound:'ম + ি', example:'মিষ্টি (mishti — sweet)',          type:'matra', _isMatraDrill:true },
  { letter:'মী', name:'মী (mii)',  romanized:'mii',  ipa:'mii',  sound:'ম + ী', example:'মীন (min — fish/Pisces)',          type:'matra', _isMatraDrill:true },
  { letter:'মু', name:'মু (mu)',   romanized:'mu',   ipa:'mu',   sound:'ম + ু', example:'মুখ (mukh — face/mouth)',          type:'matra', _isMatraDrill:true },
  { letter:'মূ', name:'মূ (muu)',  romanized:'muu',  ipa:'muu',  sound:'ম + ূ', example:'মূল (mul — root/main)',            type:'matra', _isMatraDrill:true },
  { letter:'মে', name:'মে (me)',   romanized:'me',   ipa:'me',   sound:'ম + ে', example:'মেয়ে (meye — girl/daughter)',    type:'matra', _isMatraDrill:true },
  { letter:'মৈ', name:'মৈ (moi)',  romanized:'moi',  ipa:'moi',  sound:'ম + ৈ', example:'মৈত্রী (moitri — friendship)',   type:'matra', _isMatraDrill:true },
  { letter:'মো', name:'মো (mo)',   romanized:'mo',   ipa:'mo',   sound:'ম + ো', example:'মোমবাতি (mombati — candle)',      type:'matra', _isMatraDrill:true },
  { letter:'মৌ', name:'মৌ (mou)',  romanized:'mou',  ipa:'mou',  sound:'ম + ৌ', example:'মৌসুম (mousum — season)',         type:'matra', _isMatraDrill:true },
];

// ════════════════════════════════════════
//  CONJUNCT CONSONANTS  (যুক্তবর্ণ)
// ════════════════════════════════════════
const CONJUNCTS = [
  { letter:'ক্ত', name:'Kto (kto)',   romanized:'kto',   ipa:'kt',   sound:'ক + ত combined', example:'রক্ত (rokto — blood)',          type:'conjunct' },
  { letter:'ক্ষ', name:'Ksha (ksha)', romanized:'ksha',  ipa:'kʃ',   sound:'ক + ষ combined', example:'ক্ষমা (kshoma — forgiveness)', type:'conjunct' },
  { letter:'ক্স', name:'Ks (ks)',     romanized:'ks',    ipa:'ks',   sound:'ক + স combined', example:'বক্স (boks — box)',             type:'conjunct' },
  { letter:'গ্ধ', name:'Gdh (gdh)',   romanized:'gdh',   ipa:'gdʱ',  sound:'গ + ধ combined', example:'মুগ্ধ (mugdho — enchanted)',    type:'conjunct' },
  { letter:'গ্ন', name:'Gno (gno)',   romanized:'gno',   ipa:'gn',   sound:'গ + ন combined', example:'মগ্ন (mogno — engrossed)',      type:'conjunct' },
  { letter:'ঙ্ক', name:'Ngko (ngko)', romanized:'ngko',  ipa:'ŋk',   sound:'ঙ + ক combined', example:'অঙ্ক (ongko — mathematics)',    type:'conjunct' },
  { letter:'চ্ছ', name:'Cchho',       romanized:'cchho', ipa:'tʃʰ',  sound:'চ + ছ combined', example:'ইচ্ছা (icchha — desire)',       type:'conjunct' },
  { letter:'জ্ঞ', name:'Gyo (gyo)',   romanized:'gyo',   ipa:'dʒɲ',  sound:'জ + ঞ combined', example:'জ্ঞান (gyan — knowledge)',      type:'conjunct' },
  { letter:'জ্ব', name:'Jbo (jbo)',   romanized:'jbo',   ipa:'dʒb',  sound:'জ + ব combined', example:'জ্বর (jbor — fever)',           type:'conjunct' },
  { letter:'ট্ট', name:'Ṭṭo (ṭṭo)',  romanized:'ṭṭo',   ipa:'ʈʈ',   sound:'ট + ট combined', example:'চট্ট (choṭṭo — quick)',         type:'conjunct' },
  { letter:'ণ্ড', name:'Ṇḍo (ṇḍo)',  romanized:'ṇḍo',   ipa:'ɳɖ',   sound:'ণ + ড combined', example:'পণ্ড (poṇḍo — waste)',          type:'conjunct' },
  { letter:'ত্ত', name:'Tto (tto)',   romanized:'tto',   ipa:'tt̪',   sound:'ত + ত combined', example:'উত্তর (uttor — answer)',        type:'conjunct' },
  { letter:'ত্থ', name:'Ttho (ttho)', romanized:'ttho',  ipa:'t̪t̪ʰ',  sound:'ত + থ combined', example:'সত্থ (shottha — truth)',        type:'conjunct' },
  { letter:'দ্ধ', name:'Ddho (ddho)', romanized:'ddho',  ipa:'d̪d̪ʱ',  sound:'দ + ধ combined', example:'শুদ্ধ (shudddho — pure)',       type:'conjunct' },
  { letter:'দ্ব', name:'Dbo (dbo)',   romanized:'dbo',   ipa:'d̪b',   sound:'দ + ব combined', example:'দ্বার (dbar — door)',           type:'conjunct' },
  { letter:'ন্ত', name:'Nto (nto)',   romanized:'nto',   ipa:'nt̪',   sound:'ন + ত combined', example:'অন্ত (onto — end)',              type:'conjunct' },
  { letter:'ন্দ', name:'Ndo (ndo)',   romanized:'ndo',   ipa:'nd̪',   sound:'ন + দ combined', example:'আনন্দ (anondo — joy)',           type:'conjunct' },
  { letter:'ন্ধ', name:'Ndho (ndho)', romanized:'ndho',  ipa:'nd̪ʱ',  sound:'ন + ধ combined', example:'অন্ধ (ondho — blind)',           type:'conjunct' },
  { letter:'ন্ন', name:'Nno (nno)',   romanized:'nno',   ipa:'nn',   sound:'ন + ন combined', example:'অন্ন (onno — food/rice)',        type:'conjunct' },
  { letter:'ন্ম', name:'Nmo (nmo)',   romanized:'nmo',   ipa:'nm',   sound:'ন + ম combined', example:'জন্ম (jonmo — birth)',           type:'conjunct' },
  { letter:'ব্র', name:'Bro (bro)',   romanized:'bro',   ipa:'br',   sound:'ব + র combined', example:'ব্রত (broto — vow)',             type:'conjunct' },
  { letter:'ভ্র', name:'Bhro (bhro)', romanized:'bhro',  ipa:'bʱr',  sound:'ভ + র combined', example:'ভ্রম (bhrom — mistake)',         type:'conjunct' },
  { letter:'ম্ব', name:'Mbo (mbo)',   romanized:'mbo',   ipa:'mb',   sound:'ম + ব combined', example:'লম্বা (lomba — tall)',           type:'conjunct' },
  { letter:'শ্ব', name:'Shbo (shbo)', romanized:'shbo',  ipa:'ʃb',   sound:'শ + ব combined', example:'বিশ্ব (bishbo — world)',         type:'conjunct' },
  { letter:'শ্র', name:'Shro (shro)', romanized:'shro',  ipa:'ʃr',   sound:'শ + র combined', example:'শ্রম (shrom — labour)',          type:'conjunct' },
  { letter:'ষ্ট', name:'Shṭo (shṭo)', romanized:'shṭo',  ipa:'ʃʈ',   sound:'ষ + ট combined', example:'কষ্ট (koshṭo — hardship)',       type:'conjunct' },
  { letter:'ষ্ণ', name:'Shṇo (shṇo)', romanized:'shṇo',  ipa:'ʃɳ',   sound:'ষ + ণ combined', example:'কৃষ্ণ (krishno — Krishna)',       type:'conjunct' },
  { letter:'স্ত', name:'Sto (sto)',   romanized:'sto',   ipa:'st̪',   sound:'স + ত combined', example:'স্থান (sthan — place)',          type:'conjunct' },
  { letter:'স্থ', name:'Stho (stho)', romanized:'stho',  ipa:'st̪ʰ',  sound:'স + থ combined', example:'স্থাপন (sthapona — establish)',  type:'conjunct' },
  { letter:'স্প', name:'Spo (spo)',   romanized:'spo',   ipa:'sp',   sound:'স + প combined', example:'স্পষ্ট (sposhṭo — clear)',       type:'conjunct' },
  { letter:'হ্ন', name:'Hno (hno)',   romanized:'hno',   ipa:'hn',   sound:'হ + ন combined', example:'চিহ্ন (chihno — sign/mark)',      type:'conjunct' },
  { letter:'ল্ল', name:'Llo (llo)',   romanized:'llo',   ipa:'ll',   sound:'ল + ল combined', example:'উল্লাস (ullas — jubilation)',     type:'conjunct' },
];

// ════════════════════════════════════════
//  STROKE ORDER HINTS
// ════════════════════════════════════════
const STROKE_HINTS = {
  'অ': ['Draw the curved hook from upper-right downward', 'Add the lower horizontal tail curving right'],
  'আ': ['Draw অ first', 'Add a vertical bar extending down on the right'],
  'ই': ['Draw a short vertical stroke', 'Curve the top to the left', 'Add the lower curved tail'],
  'ঈ': ['Draw ই first', 'Add the long extending tail looping right'],
  'উ': ['Draw the top curved hook leftward', 'Continue down with the body curve'],
  'ঊ': ['Draw উ first', 'Add the extra loop at the bottom'],
  'ঋ': ['Draw the upper curve', 'Add the descending stroke with a hook at bottom'],
  'এ': ['Draw the top horizontal bar', 'Curve down and left to form the body'],
  'ঐ': ['Draw এ first', 'Add the upper loop extending right'],
  'ও': ['Draw the upper closed loop', 'Add the lower descending curve'],
  'ঔ': ['Draw ও first', 'Add the rightward extending ear'],
  'ক': ['Vertical stroke downward', 'Arc from top curving right', 'Small hook at bottom-right'],
  'খ': ['Vertical stroke down', 'Add horizontal bar at mid-height', 'Curve upper-right portion'],
  'গ': ['Draw the top curved hook', 'Continue down into the body', 'Add the lower right extension'],
  'ঘ': ['Draw গ shape', 'Add the additional upper-left loop'],
  'ঙ': ['Small circle on top-right', 'Descending stroke with left foot'],
  'চ': ['Draw the upper curve arcing right', 'Connect down into the lower body'],
  'ছ': ['Draw চ first', 'Add the upper loop or hook at top'],
  'জ': ['Vertical bar down', 'Horizontal top bar left', 'Curved lower body rightward'],
  'ঝ': ['Draw জ first', 'Add the extra loop on the right'],
  'ঞ': ['Draw the upper loop', 'Add descending curves and the lower hook'],
  'ট': ['Draw a short curve top-right', 'Connect downward with a right-facing foot'],
  'ঠ': ['Draw ট shape', 'Add the top horizontal bar extending left'],
  'ড': ['Vertical stroke with upper right-facing curve', 'Lower hook extending left'],
  'ঢ': ['Draw ড shape', 'Add the extra upper extension'],
  'ণ': ['Draw the upper loop', 'Vertical stroke down', 'Lower right-facing foot'],
  'ত': ['Horizontal bar at top', 'Two downward strokes forming the base'],
  'থ': ['Draw ত first', 'Add the upper looping extension'],
  'দ': ['Upper arc top-right', 'Downward stroke with left foot curve'],
  'ধ': ['Draw দ shape', 'Add the upper vertical bar on left'],
  'ন': ['Curved body stroke', 'Left descending foot', 'Right upper hook'],
  'প': ['Vertical stroke down', 'Left arch at top', 'Right small foot'],
  'ফ': ['Draw প shape', 'Add the upper loop or cross'],
  'ব': ['Left vertical curve', 'Close the right side', 'Lower arc'],
  'ভ': ['Draw ব shape', 'Add the upper diagonal arm extending right'],
  'ম': ['Left downstroke', 'Right downstroke', 'Connecting arch at top', 'Lower connecting foot'],
  'য': ['Upper loop arc', 'Vertical descent', 'Lower right foot curve'],
  'র': ['Short upper hook right', 'Descending curve to foot'],
  'ল': ['Vertical stroke down', 'Left foot extending', 'Upper right hook'],
  'শ': ['Three vertical strokes', 'Connected by top bar', 'Bottom curve connecting all'],
  'ষ': ['Similar to শ with minor retroflex form differences'],
  'স': ['Top bar left', 'Right curve', 'Bottom left foot'],
  'হ': ['Left descending stroke', 'Right arm curving up', 'Lower connecting base'],
  'ড়': ['Draw ড first', 'Add the nukta dot below'],
  'ঢ়': ['Draw ঢ first', 'Add the nukta dot below'],
  'য়': ['Draw য first', 'Add the nukta dot below'],
  'ৎ': ['Short sharp downstroke', 'Curved base flick to right'],
  'ং': ['Small circle or loop on top', 'Bindu dot'],
  'ঃ': ['Two small dots stacked vertically'],
  'ঁ': ['Small crescent shape with a dot above'],
};

// ════════════════════════════════════════
//  MODULES
// ════════════════════════════════════════
const MODULES = [
  { id:'mixed', title:'Mixed Practice', desc:'Adaptive lessons — new letters introduced as you master earlier ones', icon:'🧠', isMixed: true, color: () => 'var(--accent)' },
  { id:'vowels', title:'Vowels (স্বরবর্ণ)', desc:'11 vowel letters — the foundation', icon:'🔤', letters: VOWELS.map(v=>({...v,type:'vowel'})), color: var_vowel },
  { id:'consonants-1', title:'Consonants I (ক–ঙ)', desc:'Velar stops — k/kh/g/gh/ng', icon:'🅰️', letters: CONSONANTS_VELAR.map(c=>({...c,type:'consonant'})), color: var_consonant },
  { id:'consonants-2', title:'Consonants II (চ–ঞ)', desc:'Palatal stops — ch/chh/j/jh/ny', icon:'🅱️', letters: CONSONANTS_PALATAL.map(c=>({...c,type:'consonant'})), color: var_consonant },
  { id:'consonants-3', title:'Consonants III (ট–ণ)', desc:'Retroflex stops — tongue curled back', icon:'🔡', letters: CONSONANTS_RETROFLEX.map(c=>({...c,type:'consonant'})), color: var_consonant },
  { id:'consonants-4', title:'Consonants IV (ত–ন)', desc:'Dental stops — tongue touches teeth', icon:'📝', letters: CONSONANTS_DENTAL.map(c=>({...c,type:'consonant'})), color: var_consonant },
  { id:'consonants-5', title:'Consonants V (প–ম)', desc:'Labial stops — lips together', icon:'💬', letters: CONSONANTS_LABIAL.map(c=>({...c,type:'consonant'})), color: var_consonant },
  { id:'consonants-6', title:'Consonants VI (য–হ)', desc:'Semivowels, liquids & sibilants', icon:'🔊', letters: CONSONANTS_OTHER.map(c=>({...c,type:'consonant'})), color: var_consonant },
  { id:'special', title:'Special Characters', desc:'Modifiers & extra letters (ড়, ং, ঃ…)', icon:'✨', letters: CONSONANTS_SPECIAL.map(c=>({...c,type:'consonant'})), color: var_special },
  { id:'matra', title:'Matra Drills (া–ৌ)', desc:'45 consonant+vowel-sign combos — see the glyph, type its sound', icon:'🔡', letters: MATRA_COMBOS, color: () => '#4caf6e' },
  { id:'conjuncts', title:'Conjunct Consonants', desc:'যুক্তবর্ণ — 32 compound letter combinations', icon:'🔗', letters: CONJUNCTS, color: () => 'var(--special)' },
  { id:'chart', title:'Full Alphabet Chart', desc:'Review all 50 letters at a glance', icon:'📊', isChart: true },
];

// ════════════════════════════════════════
//  NUMBER MODULES (Numbers tab)
// ════════════════════════════════════════
const NUMBER_MODULES = [
  { id:'numeral-glyphs',    title:'Numeral Glyphs (০–৯)', desc:'The 10 Bengali script digits — ০ through ৯', icon:'🔢', letters: BENGALI_NUMERALS, color: () => 'var(--accent)' },
  { id:'ones-teens',        title:'Ones & Teens (০–১৯)',  desc:'Bengali words for zero through nineteen',    icon:'1️⃣', letters: BENGALI_NUMBER_NAMES.slice(0, 20),  color: () => 'var(--accent)' },
  { id:'tens',              title:'Tens (২০–৯০)',          desc:'Bengali words for twenty through ninety',    icon:'🔟', letters: BENGALI_NUMBER_NAMES.slice(20, 28), color: () => 'var(--accent)' },
  { id:'large-numbers',     title:'Large Numbers',         desc:'Hundreds, thousands, and lakhs',             icon:'💯', letters: BENGALI_NUMBER_NAMES.slice(28),    color: () => 'var(--accent)' },
  { id:'numbers-arithmetic',title:'Number Recognition',   desc:'Read Bengali numerals & number words',        icon:'➕', isArithmetic: true,                          color: () => 'var(--accent)' },
];

// ════════════════════════════════════════
//  MIXED PRACTICE — ADAPTIVE ALGORITHM
// ════════════════════════════════════════
// Letters are introduced in a deliberate curriculum order: common vowels
// first, then the most frequent consonants, spreading across groups so
// the learner sees variety early.  New letters unlock only once the
// current working set is sufficiently familiar.

const MIXED_CURRICULUM = [
  // Wave 1 — first 5: core vowels
  ...['অ','আ','ই','উ','এ'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 2 — first consonants (common, across groups)
  ...['ক','গ','ত','প','ম'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 3 — more vowels + high-frequency consonants
  ...['ও','ঈ','ঊ','ন','র'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 4
  ...['ল','স','হ','ব','দ'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 5
  ...['চ','জ','শ','খ','ট'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 6
  ...['ঐ','ঔ','ঋ','ফ','ভ'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 7
  ...['ঘ','ঙ','ছ','ঝ','ঞ'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 8
  ...['ঠ','ড','ঢ','ণ','থ'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 9
  ...['ধ','য','ষ','ং','ৎ'].map(l => ALL_LETTERS.find(x => x.letter === l)),
  // Wave 10 — remaining special characters
  ...['ড়','ঢ়','য়','ঃ','ঁ'].map(l => ALL_LETTERS.find(x => x.letter === l)),
].filter(Boolean);

const MIXED_WAVE_SIZE = 5;        // letters per wave
const MIXED_INTRO_BATCH = 3;      // new letters shown as flashcards before a quiz
const UNLOCK_THRESHOLD = 2;       // mastery level to count a letter as "familiar"
                                  // (0=unseen, 1=seen, 2=learning, 3=mastered)
const MIXED_QUIZ_SIZE = 8;        // questions per quiz round

/**
 * Determine how many letters the user has unlocked so far.
 * A new wave unlocks when ≥60% of the previous wave's letters are at
 * or above UNLOCK_THRESHOLD.
 */
function getMixedUnlockedCount() {
  let unlocked = MIXED_WAVE_SIZE; // first wave is always available
  while (unlocked < MIXED_CURRICULUM.length) {
    // Check the most recently unlocked wave
    const waveStart = unlocked - MIXED_WAVE_SIZE;
    const wave = MIXED_CURRICULUM.slice(waveStart, unlocked);
    const familiar = wave.filter(l => getMastery(l.letter) >= UNLOCK_THRESHOLD).length;
    if (familiar >= Math.ceil(wave.length * 0.6)) {
      unlocked = Math.min(unlocked + MIXED_WAVE_SIZE, MIXED_CURRICULUM.length);
    } else {
      break;
    }
  }
  return unlocked;
}

/**
 * Build a mixed session.  Returns { teach: [...], quiz: [...] }.
 *  - teach: new (unseen) letters to introduce via flashcards first.
 *  - quiz:  a set to drill, weighted toward lower-mastery letters,
 *           mixing old and new.
 */
function buildMixedSession() {
  const unlocked = getMixedUnlockedCount();
  const pool = MIXED_CURRICULUM.slice(0, unlocked);

  // Find letters not yet seen (mastery 0)
  const unseen = pool.filter(l => getMastery(l.letter) === 0);
  // Pick a small batch to teach
  const teach = unseen.slice(0, MIXED_INTRO_BATCH);

  // For the quiz, rank all unlocked letters by priority:
  //   mastery 1 (just seen)  → highest priority
  //   mastery 2 (learning)   → medium
  //   mastery 0 (about-to-be-taught) → medium-high (they'll see flashcards first)
  //   mastery 3 (mastered)   → lowest, but still include some for maintenance
  const prioritized = [...pool].sort((a, b) => {
    const ma = getMastery(a.letter), mb = getMastery(b.letter);
    // Score: lower = quiz sooner.  Mastered letters get a random
    // bump so they still appear occasionally.
    const sa = ma === 3 ? 3 + Math.random() * 2 : ma === 0 ? 0.5 : ma === 1 ? 0 : 1;
    const sb = mb === 3 ? 3 + Math.random() * 2 : mb === 0 ? 0.5 : mb === 1 ? 0 : 1;
    return sa - sb;
  });

  const quiz = prioritized.slice(0, Math.min(MIXED_QUIZ_SIZE, pool.length));
  return { teach, quiz, unlocked, total: MIXED_CURRICULUM.length };
}

let mixedSession = null;

function startMixedPractice() {
  mixedSession = buildMixedSession();

  if (mixedSession.teach.length > 0) {
    // Show flashcards for new letters first, then auto-start quiz
    currentModule = {
      id: 'mixed',
      title: 'New Letters',
      letters: mixedSession.teach,
      isMixed: true,
    };
    currentCardIndex = 0;
    document.getElementById('learn-title').textContent = 'New Letters';
    document.getElementById('quiz-start-btn').textContent = 'Practice Quiz →';
    document.getElementById('quiz-start-btn').onclick = () => launchMixedQuiz();
    showCard();
    showScreen('learn');
  } else {
    // Nothing new to teach — go straight to quiz
    launchMixedQuiz();
  }
}

function launchMixedQuiz() {
  if (!mixedSession) mixedSession = buildMixedSession();
  currentModule = {
    id: 'mixed',
    title: 'Mixed Practice',
    letters: mixedSession.quiz,
    isMixed: true,
  };
  quizModuleRef = currentModule;
  generateQuiz(currentModule.letters);
  quizIndex = 0;
  quizCorrect = 0;
  _quizStartTime = Date.now();
  document.getElementById('quiz-title').textContent = 'Mixed Practice';
  showScreen('quiz');
  renderQuestion();
  updateStreak();
}

function var_vowel(){ return 'var(--vowel)'; }
function var_consonant(){ return 'var(--consonant)'; }
function var_special(){ return 'var(--special)'; }

// ════════════════════════════════════════
//  PROGRESS / STATE
// ════════════════════════════════════════
let progress = { mastery:{}, xp:0, streak:0, lastDate:null, quizHistory:{} };
let _saveTimer = null;
let currentUser = null;

// ── localStorage helpers ──
const LS_PREFIX = 'bengali_progress_';

function _lsKey(name) {
  return LS_PREFIX + name;
}

function _loadProgressLS(name) {
  try {
    const raw = localStorage.getItem(_lsKey(name));
    if (raw) {
      const data = JSON.parse(raw);
      if (data && data.mastery) return data;
    }
  } catch(e) {}
  return { mastery:{}, xp:0, streak:0, lastDate:null, quizHistory:{} };
}

function _saveProgressLS(name, data) {
  localStorage.setItem(_lsKey(name), JSON.stringify(data));
}

function _deleteProgressLS(name) {
  localStorage.removeItem(_lsKey(name));
}

function _listUsers() {
  const users = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(LS_PREFIX)) {
      const name = key.slice(LS_PREFIX.length);
      try {
        const data = JSON.parse(localStorage.getItem(key));
        users.push({ name, xp: data.xp || 0, streak: data.streak || 0 });
      } catch(e) {
        users.push({ name, xp: 0, streak: 0 });
      }
    }
  }
  return users.sort((a, b) => a.name.localeCompare(b.name));
}

function loadProgress() {
  return _loadProgressLS(currentUser);
}

function saveProgress() {
  // Debounce writes — flush at most every 500ms
  if (_saveTimer) clearTimeout(_saveTimer);
  _saveTimer = setTimeout(_flushSave, 500);
}

function _flushSave() {
  _saveTimer = null;
  if (currentUser) _saveProgressLS(currentUser, progress);
}

function getMastery(letter) {
  return progress.mastery[letter] || 0; // 0=unseen, 1=seen, 2=learning, 3=mastered
}

function getModuleProgress(mod) {
  if (mod.isChart) return null;
  let total = mod.letters.length;
  let mastered = mod.letters.filter(l => getMastery(l.letter) >= 3).length;
  let seen = mod.letters.filter(l => getMastery(l.letter) >= 1).length;
  return { total, mastered, seen, pct: Math.round((mastered / total) * 100) };
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (progress.lastDate === today) return;
  if (progress.lastDate) {
    const last = new Date(progress.lastDate);
    const now = new Date(today);
    const diff = (now - last) / (1000*60*60*24);
    if (diff <= 1) {
      progress.streak++;
    } else {
      progress.streak = 1;
    }
  } else {
    progress.streak = 1;
  }
  progress.lastDate = today;
  saveProgress();
}

function addXP(amount) {
  progress.xp += amount;
  // Track daily XP for activity heatmap
  const today = new Date().toISOString().slice(0, 10);
  if (!progress.practiceLog) progress.practiceLog = {};
  progress.practiceLog[today] = (progress.practiceLog[today] || 0) + amount;
  saveProgress();
  updateNav();
}

function updateNav() {
  document.getElementById('streak-count').textContent = progress.streak;
  document.getElementById('xp-count').textContent = progress.xp;
  // streak bar: fills based on days toward 7-day streak
  const pct = Math.min(100, (progress.streak / 7) * 100);
  document.getElementById('streak-bar-fill').style.width = pct + '%';
  updateProfileMenuHeader();
  updateReviewDueBadge();
}

// ════════════════════════════════════════
//  MODAL DIALOG (replaces native alert/confirm)
// ════════════════════════════════════════
function _showModal(msg, buttons) {
  return new Promise(resolve => {
    const overlay = document.getElementById('app-modal');
    const msgEl = document.getElementById('app-modal-msg');
    const btnsEl = document.getElementById('app-modal-btns');
    if (!overlay) { resolve(buttons[0].value); return; }
    msgEl.textContent = msg;
    btnsEl.innerHTML = '';
    const close = (val) => {
      overlay.style.display = 'none';
      document.removeEventListener('keydown', escHandler);
      resolve(val);
    };
    const escHandler = (e) => { if (e.key === 'Escape') close(false); };
    buttons.forEach(b => {
      const btn = document.createElement('button');
      btn.className = 'app-modal-btn ' + b.cls;
      btn.textContent = b.label;
      btn.onclick = () => close(b.value);
      btnsEl.appendChild(btn);
    });
    document.addEventListener('keydown', escHandler);
    overlay.style.display = 'flex';
    btnsEl.lastChild.focus();
  });
}
function showAlert(msg) {
  return _showModal(msg, [{ label: 'OK', cls: 'app-modal-btn-ok', value: true }]);
}
function showConfirm(msg) {
  return _showModal(msg, [
    { label: 'Cancel', cls: 'app-modal-btn-cancel', value: false },
    { label: 'OK', cls: 'app-modal-btn-ok', value: true }
  ]);
}

// ════════════════════════════════════════
//  SCREEN MANAGEMENT
// ════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'home') renderHome();
  if (id === 'chart') renderChart();
  if (id === 'numbers-home') renderNumbersHome();
  if (id === 'vocab-home') renderVocabHome();
  if (id === 'grammar-home') renderGrammarHome();
  if (id === 'phrases-home') renderPhrasesHome();
  if (id === 'today-screen') renderTodayScreen();
  if (id === 'placement-results') renderPlacementResultsUI();
}

// ════════════════════════════════════════
//  HOME
// ════════════════════════════════════════
function renderHome() {
  const grid = document.getElementById('module-grid');
  grid.innerHTML = '';
  // Placement test card
  // Remove stale PT card first, then re-add if needed
  const oldPt = grid.parentElement.querySelector('.pt-cta-card');
  if (oldPt) oldPt.remove();
  if (shouldShowPlacementCard()) {
    const ptCard = document.createElement('div');
    ptCard.className = 'pt-cta-card';
    ptCard.innerHTML = '<h3>🎯 Take the Placement Test</h3><p>Already know some Bengali? Skip ahead based on your level.</p>';
    ptCard.onclick = () => startPlacementTest();
    grid.parentElement.insertBefore(ptCard, grid);
  }
  MODULES.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'module-card';

    let progressHTML;
    if (mod.isMixed) {
      const unlocked = getMixedUnlockedCount();
      const total = MIXED_CURRICULUM.length;
      const mastered = MIXED_CURRICULUM.filter(l => getMastery(l.letter) >= 3).length;
      const pct = Math.round((mastered / total) * 100);
      const wave = Math.ceil(unlocked / MIXED_WAVE_SIZE);
      const totalWaves = Math.ceil(total / MIXED_WAVE_SIZE);
      progressHTML = `<div class="module-progress"><div class="module-progress-fill" style="width:${pct}%;background:${mod.color()}"></div></div>
        <div class="progress-label">${mastered}/${total} mastered · Wave ${wave}/${totalWaves} unlocked</div>`;
    } else {
      const prog = getModuleProgress(mod);
      progressHTML = prog ?
        `<div class="module-progress"><div class="module-progress-fill" style="width:${prog.pct}%;background:${mod.color()}"></div></div>
         <div class="progress-label">${prog.mastered}/${prog.total} mastered</div>` :
        `<div class="progress-label">Reference</div>`;
    }

    card.innerHTML = `
      <div class="module-icon">${mod.icon}</div>
      <h3>${mod.title}</h3>
      <p>${mod.desc}</p>
      ${progressHTML}
    `;
    card.onclick = () => {
      if (mod.isChart) {
        showScreen('chart');
      } else if (mod.isMixed) {
        startMixedPractice();
      } else {
        startLearn(mod);
      }
    };
    grid.appendChild(card);
  });

  // Listening Practice card (appended after module cards)
  const listenCard = document.createElement('div');
  listenCard.className = 'module-card';
  listenCard.innerHTML = `
    <div class="module-icon">🎧</div>
    <h3>Listening Practice</h3>
    <p>Train your ear — identify letters and words by sound alone.</p>
    <div class="progress-label">Audio-only mode</div>
  `;
  listenCard.onclick = () => showScreen('listening-home');
  grid.appendChild(listenCard);
}

// ════════════════════════════════════════
//  NUMBERS HOME
// ════════════════════════════════════════
function renderNumbersHome() {
  const grid = document.getElementById('numbers-module-grid');
  if (!grid) return;
  grid.innerHTML = '';
  NUMBER_MODULES.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'module-card';
    let progressHTML = '';
    if (!mod.isArithmetic) {
      const prog = getModuleProgress(mod);
      progressHTML = `
        <div class="module-progress"><div class="module-progress-fill" style="width:${prog.pct}%;background:${mod.color()}"></div></div>
        <div class="progress-label">${prog.mastered}/${prog.total} mastered</div>`;
    }
    card.innerHTML = `
      <div class="module-icon">${mod.icon}</div>
      <h3>${mod.title}</h3>
      <p>${mod.desc}</p>
      ${progressHTML}
    `;
    card.onclick = () => mod.isArithmetic ? startArithmeticQuiz() : startLearn(mod);
    grid.appendChild(card);
  });
}

// ════════════════════════════════════════
//  ARITHMETIC QUIZ (Numbers tab)
// ════════════════════════════════════════
let _arithmeticQuestions = [];
let _arithmeticIndex = 0;
let _arithmeticCorrect = 0;
let _arithmeticAnswered = false;

function _bn2ar(s) {
  return parseInt(String(s).replace(/[০-৯]/g, d => '০১২৩৪৫৬৭৮৯'.indexOf(d)), 10);
}

function _arTobn(n) {
  return String(n).split('').map(d => '০১২৩৪৫৬৭৮৯'[parseInt(d)] || d).join('');
}

function startArithmeticQuiz() {
  _arithmeticQuestions = _buildArithmeticQuestions(15);
  _arithmeticIndex = 0;
  _arithmeticCorrect = 0;
  _arithmeticAnswered = false;
  _moduleHomeScreen = 'numbers-home';
  showScreen('quiz');
  document.getElementById('quiz-title').textContent = 'Number Recognition';
  renderArithmeticQuestion();
}

function _buildArithmeticQuestions(n) {
  const pool = [...BENGALI_NUMERALS, ...BENGALI_NUMBER_NAMES.slice(0, 20)];
  const qs = [];
  for (let i = 0; i < n; i++) {
    const item = pool[Math.floor(Math.random() * pool.length)];
    const val = parseInt(item.ipa.replace(/,/g,''), 10);
    if (isNaN(val)) continue;
    const type = Math.random() < 0.5 ? 'glyph-to-num' : 'num-to-glyph';
    if (type === 'glyph-to-num') {
      qs.push({ prompt: 'What number is this?', display: item.letter, correct: String(val), answer: String(val), type: 'arith-fib', _val: val });
    } else {
      // MC: pick 3 distractors from pool
      const distractors = pool.filter(p => p !== item && !isNaN(parseInt(p.ipa.replace(/,/g,''), 10)))
        .sort(() => Math.random() - 0.5).slice(0, 3).map(p => p.letter);
      const options = [item.letter, ...distractors].sort(() => Math.random() - 0.5);
      qs.push({ prompt: 'Select the Bengali for: ' + val, display: String(val), correct: item.letter, options, type: 'arith-mc', _val: val });
    }
  }
  return qs;
}

function renderArithmeticQuestion() {
  if (_arithmeticIndex >= _arithmeticQuestions.length) {
    showArithmeticResults(); return;
  }
  _arithmeticAnswered = false;
  const q = _arithmeticQuestions[_arithmeticIndex];
  document.getElementById('quiz-score').textContent = _arithmeticCorrect + ' / ' + _arithmeticIndex;
  const fill = (_arithmeticIndex / _arithmeticQuestions.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = fill + '%';
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-next-btn').className = 'btn-primary quiz-next-btn';
  document.getElementById('quiz-rating-area').classList.remove('show');
  _pendingRating = null;

  const qa = document.getElementById('quiz-question-area');
  qa.innerHTML = `<div class="quiz-prompt">${q.prompt}</div><div class="quiz-letter">${q.display}</div>`;
  const aa = document.getElementById('quiz-answer-area');
  if (q.type === 'arith-fib') {
    aa.innerHTML = `<div class="fib-area"><input type="number" class="fib-input" id="arith-input" placeholder="Enter number…" style="width:120px;text-align:center"><button class="btn-primary fib-submit" data-action="answer-arith-fib">Check</button></div>`;
    setTimeout(() => document.getElementById('arith-input')?.focus(), 100);
  } else {
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) => `<button class="mc-btn" data-answer="${escapeStr(opt)}" data-action="answer-arith-mc">${opt}<span class="mc-key-hint">[${i+1}]</span></button>`).join('') + '</div>';
    attachQuizKeyHandler('quiz');
  }
}

function answerArithMC(btn, chosen) {
  if (_arithmeticAnswered) return;
  _arithmeticAnswered = true;
  const q = _arithmeticQuestions[_arithmeticIndex];
  const correct = chosen === q.correct;
  document.querySelectorAll('#quiz-answer-area .mc-btn').forEach(b => { b.classList.add('disabled'); if (b.dataset.answer === q.correct) b.classList.add('reveal-correct'); });
  btn.classList.add(correct ? 'correct' : 'wrong');
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.textContent = correct ? '✓ Correct!' : '✗ Correct: ' + q.correct;
  if (correct) { _arithmeticCorrect++; addXP(10); setTimeout(() => { const nb = document.getElementById('quiz-next-btn'); if (nb && nb.classList.contains('show')) nb.click(); }, 700); }
  document.getElementById('quiz-next-btn').className = 'btn-primary quiz-next-btn show';
}

function answerArithFIB() {
  if (_arithmeticAnswered) return;
  const input = document.getElementById('arith-input');
  if (!input || !input.value.trim()) return;
  _arithmeticAnswered = true;
  const q = _arithmeticQuestions[_arithmeticIndex];
  const userVal = parseInt(input.value.trim(), 10);
  const correct = userVal === q._val;
  input.classList.add(correct ? 'correct' : 'wrong');
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.textContent = correct ? '✓ Correct!' : '✗ Correct: ' + q.correct;
  if (correct) { _arithmeticCorrect++; addXP(15); }
  document.getElementById('quiz-next-btn').className = 'btn-primary quiz-next-btn show';
}

function nextArithmeticQuestion() {
  _arithmeticIndex++;
  renderArithmeticQuestion();
}

function showArithmeticResults() {
  const total = _arithmeticQuestions.length;
  const pct = total ? Math.round((_arithmeticCorrect / total) * 100) : 0;
  showScreen('results');
  document.getElementById('results-title').textContent = pct >= 80 ? 'Great job!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
  document.getElementById('results-sub').textContent = 'You scored ' + _arithmeticCorrect + '/' + total;
  setTimeout(() => {
    const offset = 452.4 * (1 - pct / 100);
    document.getElementById('results-ring').style.strokeDashoffset = offset;
    document.getElementById('results-pct').textContent = pct + '%';
  }, 100);
}

// ════════════════════════════════════════
//  LEARN (FLASHCARDS)
// ════════════════════════════════════════
let currentModule = null;
let currentCardIndex = 0;
let _moduleHomeScreen = 'home'; // tracks which home to return to from learn/quiz/results
function goModuleHome() { showScreen(_moduleHomeScreen); }

function startLearn(mod) {
  currentModule = mod;
  currentCardIndex = 0;
  document.getElementById('learn-title').textContent = mod.title;
  // Reset quiz button to default behaviour (may have been overridden by mixed mode)
  const qbtn = document.getElementById('quiz-start-btn');
  qbtn.textContent = 'Start Quiz →';
  qbtn.onclick = () => startQuiz();
  showCard();
  showScreen('learn');
}

// ── Audio ──────────────────────────────────────────────────────────────────
let _audioSlowMode = false;

let _preferredVoiceName = localStorage.getItem('preferredVoice') || '';

function speakBengali(text, rate) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'bn-BD';
  utt.rate = rate !== undefined ? rate : (_audioSlowMode ? 0.5 : 0.85);
  if (_preferredVoiceName) {
    const voice = speechSynthesis.getVoices().find(v => v.name === _preferredVoiceName);
    if (voice) utt.voice = voice;
  }
  speechSynthesis.speak(utt);
}

function setPreferredVoice(name) {
  _preferredVoiceName = name;
  localStorage.setItem('preferredVoice', name);
}

function renderVoiceSelector() {
  const sel = document.getElementById('voice-select');
  if (!sel || !window.speechSynthesis) return;
  const populate = () => {
    const voices = speechSynthesis.getVoices();
    const bn = voices.filter(v => v.lang.startsWith('bn'));
    const list = bn.length ? bn : voices; // fall back to all voices
    sel.innerHTML = '<option value="">System default (Bengali)</option>' +
      list.map(v => `<option value="${v.name.replace(/"/g, '&quot;')}"${v.name === _preferredVoiceName ? ' selected' : ''}>${v.name} (${v.lang})</option>`).join('');
  };
  populate();
  // Chrome loads voices asynchronously
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populate;
  }
}

function toggleSlowAudio(btn) {
  _audioSlowMode = !_audioSlowMode;
  document.querySelectorAll('.slow-audio-btn').forEach(b => {
    b.classList.toggle('active', _audioSlowMode);
    b.title = _audioSlowMode ? 'Slow mode on — click to restore normal speed' : 'Play at half speed';
  });
  const statusEl = document.getElementById('slow-audio-status');
  if (statusEl) statusEl.textContent = _audioSlowMode ? 'On' : 'Off';
  const settingsBtn = document.getElementById('settings-slow-audio-btn');
  if (settingsBtn) settingsBtn.classList.toggle('active', _audioSlowMode);
}

function speakCurrentLetter() {
  const card = currentModule && currentModule.letters && currentModule.letters[currentCardIndex];
  if (card) speakBengali(card.letter);
}

// ════════════════════════════════════════
//  CANVAS WRITING PRACTICE
// ════════════════════════════════════════
let _canvasDrawing = false, _canvasLastX = 0, _canvasLastY = 0;
let _canvasKeyHandler = null;

function _drawCanvasBg(ctx, canvas, letter) {
  ctx.save();
  ctx.font = '280px "Noto Sans Bengali", serif';
  ctx.fillStyle = 'rgba(255,255,255,0.07)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(letter, canvas.width / 2, canvas.height / 2);
  ctx.restore();
}

function openCanvas() {
  const card = currentModule && currentModule.letters && currentModule.letters[currentCardIndex];
  if (!card) return;
  const letter = card.letter;
  document.getElementById('canvas-char-label').textContent = letter;
  const overlay = document.getElementById('canvas-overlay');
  overlay.style.display = 'flex';
  const canvas = document.getElementById('tracing-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  _drawCanvasBg(ctx, canvas, letter);
  _setupCanvasListeners(canvas);

  // Populate stroke hints
  const hintsEl = document.getElementById('stroke-hints');
  if (hintsEl) {
    const tips = STROKE_HINTS[letter] || ['Trace the character shape carefully', 'Follow the natural stroke direction'];
    hintsEl.innerHTML = tips.map((tip, i) =>
      `<div class="stroke-hint-item"><span class="stroke-hint-num">${i + 1}.</span> ${escapeStr(tip)}</div>`
    ).join('');
  }
}

function closeCanvas() {
  document.getElementById('canvas-overlay').style.display = 'none';
  if (_canvasKeyHandler) {
    document.removeEventListener('keydown', _canvasKeyHandler);
    _canvasKeyHandler = null;
  }
}

function clearCanvas() {
  const canvas = document.getElementById('tracing-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const letter = document.getElementById('canvas-char-label').textContent;
  _drawCanvasBg(ctx, canvas, letter);
}

function _setupCanvasListeners(canvas) {
  // Replace canvas node to drop any previous listeners; preserve ID
  const fresh = canvas.cloneNode(true);
  fresh.id = 'tracing-canvas';
  canvas.parentNode.replaceChild(fresh, canvas);
  const c = fresh;
  const ctx = c.getContext('2d');

  // Re-draw background after clone (clone doesn't copy canvas pixels)
  const letter = document.getElementById('canvas-char-label').textContent;
  _drawCanvasBg(ctx, c, letter);

  const getPos = (e) => {
    const r = c.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return [(t.clientX - r.left) * (c.width / r.width),
            (t.clientY - r.top) * (c.height / r.height)];
  };
  const start = (e) => {
    e.preventDefault();
    _canvasDrawing = true;
    [_canvasLastX, _canvasLastY] = getPos(e);
  };
  const draw = (e) => {
    if (!_canvasDrawing) return;
    e.preventDefault();
    const [x, y] = getPos(e);
    ctx.beginPath();
    ctx.moveTo(_canvasLastX, _canvasLastY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'var(--accent)';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();
    [_canvasLastX, _canvasLastY] = [x, y];
  };
  const stop = () => { _canvasDrawing = false; };

  c.addEventListener('mousedown', start);
  c.addEventListener('mousemove', draw);
  c.addEventListener('mouseup', stop);
  c.addEventListener('mouseleave', stop);
  c.addEventListener('touchstart', start, { passive: false });
  c.addEventListener('touchmove', draw, { passive: false });
  c.addEventListener('touchend', stop);

  // Keyboard shortcuts
  if (_canvasKeyHandler) document.removeEventListener('keydown', _canvasKeyHandler);
  _canvasKeyHandler = (e) => {
    if (e.key === 'c' || e.key === 'C' || e.key === 'Delete' || e.key === 'Backspace') {
      clearCanvas();
    } else if (e.key === 'Escape') {
      closeCanvas();
    }
  };
  document.addEventListener('keydown', _canvasKeyHandler);
}

function speakCurrentVocab() {
  const entry = typeof vlWords !== 'undefined' && vlWords[vlIndex];
  if (entry) speakBengali(entry[0]);
}

// Extract the Bengali-script portion of a vocab example string.
// Examples are formatted as "Bengali text। (roman — english)"
// Returns everything before the first " (" delimiter, or the full string.
function _exampleBengali(exampleStr) {
  if (!exampleStr) return '';
  const cut = exampleStr.indexOf(' (');
  return cut > 0 ? exampleStr.slice(0, cut).trim() : exampleStr.trim();
}

// Speak the example sentence for the currently open word modal.
function speakVocabExample() {
  const exEl = document.getElementById('wm-example');
  if (exEl && exEl.textContent) speakBengali(_exampleBengali(exEl.textContent));
}

// Speak the example sentence for the currently shown vocab flashcard.
function speakCurrentVocabExample() {
  const entry = typeof vlWords !== 'undefined' && vlWords[vlIndex];
  if (entry && entry[5]) speakBengali(_exampleBengali(entry[5]));
}

function showCard() {
  const card = currentModule.letters[currentCardIndex];
  const fc = document.getElementById('flashcard');
  fc.classList.remove('flipped');

  document.getElementById('card-letter').textContent = card.letter;
  const badge = document.getElementById('card-badge');
  badge.textContent = card.type.toUpperCase();
  badge.className = 'letter-type-badge badge-' + card.type;

  document.getElementById('card-name').textContent = card.name;
  document.getElementById('card-translit').textContent = 'Romanized: ' + card.romanized;
  document.getElementById('card-sound').textContent = 'Sound: ' + card.ipa + ' — ' + card.sound;
  document.getElementById('card-example').textContent = 'Example: ' + card.example;

  document.getElementById('card-counter').textContent =
    (currentCardIndex + 1) + ' / ' + currentModule.letters.length;

  document.getElementById('prev-btn').style.visibility = currentCardIndex === 0 ? 'hidden' : 'visible';

  // Mark as seen
  if (getMastery(card.letter) === 0) {
    progress.mastery[card.letter] = 1;
    saveProgress();
  }
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  if (currentCardIndex < currentModule.letters.length - 1) {
    currentCardIndex++;
    showCard();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    showCard();
  }
}

// ════════════════════════════════════════
//  QUIZ
// ════════════════════════════════════════
let quizQuestions = [];
let quizIndex = 0;
let quizCorrect = 0;
let quizAnswered = false;
let quizModuleRef = null;
let quizMissed = [];
let _quizStartTime = 0;

// Format elapsed milliseconds as "Xm Ys" or "Xs"
function _formatElapsed(ms) {
  const s = Math.round(ms / 1000);
  if (s < 60) return s + 's';
  return Math.floor(s / 60) + 'm ' + (s % 60) + 's';
}

function startQuiz() {
  quizModuleRef = currentModule;
  generateQuiz(currentModule.letters);
  quizIndex = 0;
  quizCorrect = 0;
  quizMissed = [];
  _quizStartTime = Date.now();
  document.getElementById('quiz-title').textContent = currentModule.title + ' Quiz';
  showScreen('quiz');
  renderQuestion();
  updateStreak();
}

function generateStringPair(pool) {
  const special = new Set(['ৎ', 'ং', 'ঃ', 'ঁ']);
  const usable = pool.filter(l => !special.has(l.letter));
  if (usable.length < 2) return null;
  const len = Math.min(2 + Math.floor(Math.random() * 3), usable.length); // 2–4
  const picked = shuffle(usable).slice(0, len);
  const bengali = picked.map(l => l.letter).join('');
  const roman = picked.map(l => l.romanized.split('/')[0].trim()).join('');
  return { bengali, roman, letters: picked };
}

function generateQuiz(letters, forceMode) {
  _arithmeticQuestions = []; // exit arithmetic mode
  quizQuestions = [];
  const shuffled = [...letters].sort(() => Math.random() - 0.5);

  // Weight by urgency: overdue ratio = elapsed_days / stability (FSRS), or legacy interval ratio
  const urgency = l => {
    const m = getMastery(l.letter);
    if (m === 0) return 500; // never practised — highest priority
    const card = progress.fsrs && progress.fsrs[l.letter];
    if (card && card.s > 0) {
      return _elapsedDays(l.letter) / card.s; // > 1 = overdue
    }
    const seenAgo = (progress.lastSeen && progress.lastSeen[l.letter])
      ? Date.now() - new Date(progress.lastSeen[l.letter]).getTime() : Infinity;
    return seenAgo / REVIEW_INTERVALS_MS[m];
  };
  const weighted = [...shuffled].sort((a, b) => urgency(b) - urgency(a));

  // Take up to 10 questions, mixing question types
  const count = Math.min(10, weighted.length);
  const selected = weighted.slice(0, count);

  const listenMode = forceMode || getListeningMode();

  selected.forEach((item, i) => {
    // Alternate between MC-name, MC-sound, fill-in-blank, and string types
    let types;
    if (item._isMatraDrill) {
      // Matra drills: show the glyph combination, identify or type its romanized sound
      types = ['mc-sound', 'fib-romanized'];
    } else if (item._isNumeral) {
      // Numerals don't form meaningful strings; use only name/value/romanization types
      types = ['mc-name', 'mc-sound', 'fib-name', 'fib-romanized'];
    } else if (item._isNumberName) {
      // Number words: show Bengali word or numeric value; answer in English, Bengali, or romanized
      types = ['mc-name', 'mc-sound', 'fib-name', 'fib-romanized'];
    } else if (listenMode === 'listening') {
      types = ['listening-mc', 'listening-fib'];
    } else if (listenMode === 'mixed') {
      types = ['mc-name', 'mc-sound', 'fib-name', 'fib-romanized', 'listening-mc', 'listening-fib'];
    } else {
      types = ['mc-name', 'mc-sound', 'fib-name', 'fib-romanized', 'read-string', 'spell-string'];
    }
    const qtype = types[i % types.length];

    if (qtype === 'mc-name') {
      // MC: What is the name of this letter/numeral?
      let correct, distractors;
      if (item._isNumberName) {
        // Show Bengali word; ask for English meaning
        correct = item.sound;
        distractors = generateDistractors(item, letters, 'sound');
      } else {
        correct = item.name.split(' ')[0]; // short name (Bengali text)
        distractors = generateDistractors(item, letters, 'name');
      }
      quizQuestions.push({
        type: 'mc',
        letter: item.letter,
        letterType: item.type,
        prompt: item._isNumberName ? 'What does this mean in English?'
              : item._isNumeral ? 'What is the Bengali name of this numeral?'
              : 'What is the name of this letter?',
        correct: correct,
        options: shuffle([correct, ...distractors]),
        fullAnswer: item.name,
        letterObj: item,
      });
    } else if (qtype === 'mc-sound') {
      // MC: What sound / value does this letter make?
      let correct, distractors, displayLetter;
      if (item._isNumberName) {
        // Show numeric value; ask for the Bengali word
        correct = item.letter;
        distractors = generateDistractors(item, letters, 'letter');
        displayLetter = item.ipa;
      } else {
        correct = item.ipa;
        distractors = generateDistractors(item, letters, 'ipa');
        displayLetter = null;
      }
      quizQuestions.push({
        type: 'mc',
        letter: item.letter,
        displayLetter: displayLetter,
        letterType: item.type,
        prompt: item._isNumberName ? `How do you say '${item.ipa}' in Bengali?`
              : item._isMatraDrill ? 'What sound does this combination make?'
              : item._isNumeral ? 'What value does this numeral represent?'
              : 'What sound does this letter make?',
        correct: correct,
        options: shuffle([correct, ...distractors]),
        fullAnswer: item._isNumberName ? item.letter + ' (' + item.romanized + ')'
                  : item._isNumeral ? item.ipa + ' (' + item.sound + ')' : item.ipa + ' — ' + item.sound,
        letterObj: item,
      });
    } else if (qtype === 'fib-name') {
      // FIB: Type the name / Bengali word
      let acceptable, prompt, hint, displayLetter;
      if (item._isNumberName) {
        // Show numeric value; user types Bengali word or romanized form
        displayLetter = item.ipa;
        acceptable = [item.letter, item.romanized].filter(Boolean);
        prompt = `Type the Bengali word for ${item.ipa}:`;
        hint = 'Hint: ' + item.sound;
      } else {
        displayLetter = item.letter;
        acceptable = [
          item.name.split(' ')[0].toLowerCase(),
          item.name.split('(').pop().replace(')','').trim().toLowerCase(),
          item.romanized.split('/')[0].trim().toLowerCase(),
        ].filter(Boolean);
        prompt = item._isNumeral ? 'Type the Bengali name of this numeral:' : 'Type the name of this letter:';
        hint = item._isNumeral ? 'Hint: value ' + item.ipa : 'Hint: ' + item.sound;
      }
      quizQuestions.push({
        type: 'fib',
        letter: item.letter,
        displayLetter: item._isNumberName ? item.ipa : null,
        letterType: item.type,
        prompt,
        acceptable: [...new Set(acceptable)],
        answer: item._isNumberName ? item.letter : item.name,
        hint,
        letterObj: item,
      });
    } else if (qtype === 'fib-romanized') {
      // FIB: Type the romanized form
      const acceptable = item.romanized.split('/').map(s => s.trim().toLowerCase());
      // Also accept without diacritics
      acceptable.forEach(a => {
        acceptable.push(a.replace(/[ṭḍṇṣṛñ]/g, c =>
          ({ṭ:'t',ḍ:'d',ṇ:'n',ṣ:'sh',ṛ:'r',ñ:'ny'}[c]||c)));
      });
      quizQuestions.push({
        type: 'fib',
        letter: item.letter,
        letterType: item.type,
        prompt: item._isNumberName ? 'Type the romanized pronunciation:'
              : item._isMatraDrill ? 'Type the romanized sound for this combination:'
              : item._isNumeral ? 'Type the romanized pronunciation of this numeral:'
              : 'Type the romanized form of this letter:',
        acceptable: [...new Set(acceptable)],
        answer: item.romanized,
        hint: item._isNumberName ? 'Hint: ' + item.sound
            : item._isMatraDrill ? 'Hint: ' + item.sound : 'Hint: ' + item.name,
        letterObj: item,
      });
    } else if (qtype === 'read-string') {
      const str = generateStringPair(letters);
      if (str) {
        const roman = str.roman.toLowerCase();
        const romanNoDiacritics = roman.replace(/[ṭḍṇṣṛñ]/g, c =>
          ({ṭ:'t',ḍ:'d',ṇ:'n',ṣ:'sh',ṛ:'r',ñ:'ny'}[c]||c));
        const acceptable = [...new Set([roman, romanNoDiacritics])];
        quizQuestions.push({
          type: 'fib',
          letter: str.bengali,
          prompt: 'How do you pronounce this?',
          acceptable,
          answer: str.roman,
          hint: '',
          letterObj: null,
          letters: str.letters,
        });
      }
    } else if (qtype === 'spell-string') {
      const str = generateStringPair(letters);
      if (str) {
        const special = new Set(['ৎ', 'ং', 'ঃ', 'ঁ']);
        const distractorPool = letters.filter(l => !special.has(l.letter) && !str.letters.includes(l));
        const distractors = shuffle(distractorPool).slice(0, Math.min(4, distractorPool.length));
        const tiles = shuffle([...str.letters.map(l => l.letter), ...distractors.map(l => l.letter)]);
        quizQuestions.push({
          type: 'spell',
          display: str.roman,
          correct: str.bengali,
          tiles,
          letters: str.letters,
          prompt: 'Spell this in Bengali:',
        });
      }
    } else if (qtype === 'listening-mc') {
      // Play the letter; pick correct romanized form from options
      const correct = item.romanized.split('/')[0].trim();
      const distPool = ALL_LETTERS.filter(l => l.letter !== item.letter)
        .map(l => l.romanized.split('/')[0].trim()).filter(v => v !== correct);
      const distractors = shuffle([...new Set(distPool)]).slice(0, 3);
      quizQuestions.push({
        type: 'listening-mc',
        letter: item.letter,
        letterType: item.type,
        audio: item.letter,
        prompt: 'Which romanization matches what you hear?',
        correct,
        options: shuffle([correct, ...distractors]),
        fullAnswer: item.name,
        letterObj: item,
      });
    } else if (qtype === 'listening-fib') {
      // Play the letter; type its romanized form
      const acceptable = item.romanized.split('/').map(s => s.trim().toLowerCase());
      acceptable.forEach(a => {
        acceptable.push(a.replace(/[ṭḍṇṣṛñ]/g, c =>
          ({ṭ:'t',ḍ:'d',ṇ:'n',ṣ:'sh',ṛ:'r',ñ:'ny'}[c]||c)));
      });
      quizQuestions.push({
        type: 'listening-fib',
        letter: item.letter,
        letterType: item.type,
        audio: item.letter,
        prompt: 'Type the romanized form of what you hear:',
        acceptable: [...new Set(acceptable)],
        answer: item.romanized,
        hint: 'Hint: ' + item.name,
        letterObj: item,
      });
    }
  });
}

function generateDistractors(item, pool, field) {
  const val = field === 'name' ? item.name.split(' ')[0] : item[field];
  const others = pool.filter(l => l.letter !== item.letter)
    .map(l => field === 'name' ? l.name.split(' ')[0] : l[field])
    .filter(v => v !== val);
  // If not enough from module, pull from all letters
  if (others.length < 3) {
    const extras = ALL_LETTERS.filter(l => l.letter !== item.letter)
      .map(l => field === 'name' ? l.name.split(' ')[0] : l[field])
      .filter(v => v !== val && !others.includes(v));
    others.push(...extras);
  }
  return shuffle(others).slice(0, 3);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderQuestion() {
  if (quizIndex >= quizQuestions.length) {
    showResults();
    return;
  }
  quizAnswered = false;
  const q = quizQuestions[quizIndex];

  // Update progress bar & score
  document.getElementById('quiz-progress-fill').style.width =
    ((quizIndex / quizQuestions.length) * 100) + '%';
  document.getElementById('quiz-score').textContent =
    quizCorrect + ' / ' + quizIndex;

  // Render question area
  const qa = document.getElementById('quiz-question-area');
  if (q.type === 'listening-mc' || q.type === 'listening-fib') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="listening-controls">
        <button class="listening-play-btn" data-action="speak" data-text="${escapeStr(q.audio)}" aria-label="Play sound">▶</button>
        <button class="slow-audio-btn${_audioSlowMode ? ' active' : ''}" data-action="toggle-slow-audio" title="${_audioSlowMode ? 'Slow mode on — click to restore normal speed' : 'Play at half speed'}" aria-label="Toggle slow audio">🐢</button>
      </div>
      <div style="font-size:0.8rem;color:var(--muted);margin-top:4px">Tap to replay</div>
    `;
    setTimeout(() => speakBengali(q.audio), 300);
  } else if (q.type === 'spell') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="quiz-letter-roman">${q.display}</div>
    `;
  } else {
    const showLetter = q.displayLetter !== undefined && q.displayLetter !== null ? q.displayLetter : q.letter;
    const speakLetter = q.letterObj ? q.letterObj.letter : q.letter;
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="quiz-letter">${showLetter}</div>
      <button class="card-sound-btn" data-action="speak" data-text="${escapeStr(speakLetter)}" aria-label="Play pronunciation">🔊</button>
    `;
  }

  // Render answer area
  const aa = document.getElementById('quiz-answer-area');
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  document.getElementById('quiz-next-btn').className = 'btn-primary quiz-next-btn';
  document.getElementById('quiz-rating-area').classList.remove('show');
  _pendingRating = null;

  if (q.type === 'mc' || q.type === 'listening-mc') {
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) =>
        `<button class="mc-btn" data-idx="${i}" data-answer="${escapeStr(opt)}" data-action="answer-mc">${opt}<span class="mc-key-hint">[${i+1}]</span></button>`
      ).join('') + '</div>' +
      "<button class=\"idk-btn\" data-action=\"dont-know-quiz\">I don't know</button>";
    attachQuizKeyHandler('quiz');
  } else if (q.type === 'spell') {
    spellTileOrder = [];
    aa.innerHTML = `<div class="word-order-area">
      <div class="answer-area-wo" id="spell-answer-area"></div>
      <div class="word-tiles" id="spell-tile-bank">
        ${q.tiles.map((t, i) => `<div class="word-tile" data-idx="${i}" data-word="${t}" data-action="select-spell">${t}</div>`).join('')}
      </div>
      <button class="btn-primary wo-check-btn" data-action="answer-spell">Check</button>
    </div>
    <button class="idk-btn" data-action="dont-know-quiz">I don't know</button>`;
  } else {
    const hintHtml = q.hint
      ? `<button class="hint-btn" data-action="show-hint">💡 Hint</button><div class="fib-hint" style="display:none">${q.hint}</div>`
      : '';
    const kbdHtml = getFibMode() !== 'latin'
      ? `<button class="bng-kbd-toggle" data-action="show-kbd" data-input="fib-input">বাং ▲</button>` : '';
    aa.innerHTML = `<div class="fib-area">
      <input type="text" class="fib-input" id="fib-input" placeholder="Type your answer…"
        autocomplete="off" autocapitalize="off">
      <button class="btn-primary fib-submit" data-action="answer-fib">Check</button>
      ${hintHtml}${kbdHtml}
    </div>
    <button class="idk-btn" data-action="dont-know-quiz">I don't know</button>`;
    setTimeout(() => document.getElementById('fib-input')?.focus(), 100);
  }
}

function escapeStr(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function answerMC(btn, chosen) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizQuestions[quizIndex];
  const correct = chosen === q.correct;
  document.querySelectorAll('#quiz-answer-area .mc-btn').forEach(b => {
    b.classList.add('disabled');
    if (b.dataset.answer === q.correct) b.classList.add('reveal-correct');
  });
  if (correct) {
    btn.classList.add('correct');
    quizCorrect++;
    addXP(10);
    showFeedback(true, q.fullAnswer || q.correct);
    showRatingButtons(q.letter, 'quiz-rating-area', 'quiz-next-btn');
  } else {
    btn.classList.add('wrong');
    showFeedback(false, q.fullAnswer || q.correct);
    _recordMiss(quizMissed, q);
    _trackMistake(q.letter, 'alphabet');
    applyFsrsRating(q.letter, FSRS_AGAIN);
    _trackLastSeen(q.letter);
    saveProgress();
    checkAchievements();
    document.getElementById('quiz-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

let spellTileOrder = [];

function selectSpellTile(tile) {
  if (quizAnswered) return;
  tile.classList.add('used');
  spellTileOrder.push(tile.dataset.word);
  const ansArea = document.getElementById('spell-answer-area');
  const placed = document.createElement('div');
  placed.className = 'word-tile';
  placed.textContent = tile.dataset.word;
  placed.dataset.srcIdx = tile.dataset.idx;
  placed.onclick = function() { removeSpellTile(this); };
  ansArea.appendChild(placed);
}

function removeSpellTile(placed) {
  if (quizAnswered) return;
  const srcIdx = placed.dataset.srcIdx;
  const tiles = document.querySelectorAll('#spell-tile-bank .word-tile');
  tiles.forEach(t => { if (t.dataset.idx === srcIdx) t.classList.remove('used'); });
  placed.remove();
  spellTileOrder = [];
  document.querySelectorAll('#spell-answer-area .word-tile').forEach(t => {
    spellTileOrder.push(t.textContent);
  });
}

function answerSpell() {
  if (quizAnswered) return;
  if (spellTileOrder.length === 0) return;
  quizAnswered = true;
  const q = quizQuestions[quizIndex];
  const userAnswer = spellTileOrder.join('');
  const correct = userAnswer === q.correct;
  const ansArea = document.getElementById('spell-answer-area');
  ansArea.classList.add(correct ? 'correct-wo' : 'wrong-wo');
  document.querySelectorAll('#spell-tile-bank .word-tile').forEach(t => t.style.pointerEvents = 'none');
  document.querySelectorAll('#spell-answer-area .word-tile').forEach(t => t.style.pointerEvents = 'none');
  if (correct) {
    quizCorrect++;
    addXP(15);
    showFeedback(true, q.correct);
    showRatingButtons(q.letters.map(l => l.letter), 'quiz-rating-area', 'quiz-next-btn');
  } else {
    showFeedback(false, q.correct);
    _showInlineAnswer('quiz-answer-area', q.correct);
    _recordMiss(quizMissed, q);
    _trackMistake(q.letter || (q.letters && q.letters[0] && q.letters[0].letter) || '', 'alphabet');
    q.letters.forEach(l => { applyFsrsRating(l.letter, FSRS_AGAIN); _trackLastSeen(l.letter); });
    saveProgress();
    checkAchievements();
    document.getElementById('quiz-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function answerFIB() {
  if (quizAnswered) return;
  const input = document.getElementById('fib-input');
  if (!input) return;
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  quizAnswered = true;
  const q = quizQuestions[quizIndex];
  const normVal = _normRoman(val);
  const correct = q.acceptable.some(a => a === val || _normRoman(a) === normVal);
  if (correct) {
    input.classList.add('correct');
    quizCorrect++;
    addXP(15); // FIB worth more XP
    showFeedback(true, q.answer);
    const fibKeys = q.letters ? q.letters.map(l => l.letter) : [q.letter];
    showRatingButtons(fibKeys, 'quiz-rating-area', 'quiz-next-btn');
  } else {
    input.classList.add('wrong');
    showFeedback(false, q.answer);
    _showInlineAnswer('quiz-answer-area', q.answer);
    _recordMiss(quizMissed, q);
    _trackMistake(q.letter || (q.letters && q.letters[0] && q.letters[0].letter) || '', 'alphabet');
    if (q.letters) {
      q.letters.forEach(l => { applyFsrsRating(l.letter, FSRS_AGAIN); _trackLastSeen(l.letter); });
    } else {
      applyFsrsRating(q.letter, FSRS_AGAIN);
      _trackLastSeen(q.letter);
    }
    saveProgress();
    checkAchievements();
    document.getElementById('quiz-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function reportProblem(quizType) {
  let q, userAnswer;
  if (quizType === 'alphabet') {
    q = quizQuestions[quizIndex];
    const inp = document.getElementById('fib-input');
    userAnswer = inp ? inp.value : '';
  } else if (quizType === 'vocab') {
    q = vqQuestions[vqIndex];
    const inp = document.getElementById('vq-fib-input');
    userAnswer = inp ? inp.value : '';
  } else if (quizType === 'phrases') {
    q = phqQuestions[phqIndex];
    const inp = document.getElementById('phq-fib-input');
    userAnswer = inp ? inp.value : '';
  } else {
    q = gqQuestions[gqIndex];
    const inp = document.getElementById('gq-fib-input');
    userAnswer = inp ? inp.value : '';
  }
  if (!q) return;
  const report = {
    quizType,
    prompt: q.prompt || '',
    bengali: q.letter || q.bengali || '',
    correctAnswer: q.fullAnswer || q.answer || q.correct || '',
    userAnswer,
    timestamp: new Date().toISOString()
  };
  const feedbackIds = { alphabet: 'quiz-feedback', vocab: 'vq-feedback', grammar: 'gq-feedback', phrases: 'phq-feedback' };
  const fbId = feedbackIds[quizType];
  navigator.clipboard.writeText(JSON.stringify(report, null, 2)).then(() => {
    const btn = fbId && document.querySelector('#' + fbId + ' .report-problem-btn');
    if (btn) { btn.textContent = '✓ Copied'; setTimeout(() => { btn.textContent = '⚑ Report'; }, 2000); }
  }).catch(() => showAlert('Could not copy to clipboard.'));
}

function showFeedback(correct, answer) {
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.innerHTML = (correct ? '✓ Correct! ' + escHtml(answer) : '✗ The answer is: ' + escHtml(answer)) +
    ' <button class="report-problem-btn active-quiz-alphabet" data-action="report-problem" data-kind="alphabet" title="Report a problem with this card">⚑ Report</button>';
}

function _recordMiss(arr, q) {
  const bengali = q.letter || q.bengali || null;
  const ans = q.fullAnswer || q.answer || (Array.isArray(q.correct) ? q.correct.join(' ') : q.correct);
  arr.push({ bengali, answer: ans, _q: q });
}

function _trackMistake(key, type) {
  if (!progress.recentMistakes) progress.recentMistakes = [];
  progress.recentMistakes.push({ key, type, ts: Date.now() });
  if (progress.recentMistakes.length > 100)
    progress.recentMistakes.splice(0, progress.recentMistakes.length - 100);
}

// Normalize Bengali romanization diacritics so US keyboard users can omit them.
// Applied to BOTH sides of the comparison, so only the correct plain-ASCII
// equivalent of the expected answer is accepted — not arbitrary wrong letters.
function _normRoman(s) {
  return s.toLowerCase()
    // Diacritic normalizations (long vowels, retroflex consonants, etc.)
    .replace(/[āĀ]/g, 'a')
    .replace(/[ēĒ]/g, 'e')
    .replace(/[īĪ]/g, 'i')
    .replace(/[ōŌ]/g, 'o')
    .replace(/[ūŪ]/g, 'u')
    .replace(/[ṭṬ]/g, 't')
    .replace(/[ḍḌ]/g, 'd')
    .replace(/[ṇṆ]/g, 'n')
    .replace(/[śŚ]/g, 'sh')
    .replace(/[ṣṢ]/g, 'sh')
    .replace(/[ṛṚ]/g, 'r')
    .replace(/ñ/g, 'ny')
    .replace(/ô/g, 'o');
}

function showHint(btn) {
  btn.style.display = 'none';
  const hint = btn.nextElementSibling;
  if (hint && hint.classList.contains('fib-hint')) hint.style.display = '';
}

function _showInlineAnswer(areaId, answer) {
  const aa = document.getElementById(areaId);
  if (!aa || !answer) return;
  const div = document.createElement('div');
  div.className = 'correct-reveal';
  div.textContent = answer;
  aa.appendChild(div);
}

// ────────────────────────────────────────
//  FSRS rating UI helpers
// ────────────────────────────────────────
let _pendingRating = null;
// { keys: string[], ratingAreaId, nextBtnId, extraKeys: [] }
// keys: one or more FSRS keys to apply the rating to (multi-letter for spell questions)
// extraKeys: additional _trackLastSeen keys (e.g. lesson-level key for grammar)

function showRatingButtons(keys, ratingAreaId, nextBtnId, extraKeys) {
  const keyArr = Array.isArray(keys) ? keys : [keys];
  _pendingRating = { keys: keyArr, ratingAreaId, nextBtnId, extraKeys: extraKeys || [] };
  // Preview intervals using the first (or only) key's FSRS state
  const previewKey = keyArr[0];
  const area = document.getElementById(ratingAreaId);
  if (!area) return;
  [FSRS_HARD, FSRS_GOOD, FSRS_EASY].forEach((rating, i) => {
    const days = fsrsPreviewInterval(previewKey, rating);
    const spans = area.querySelectorAll('.rating-interval');
    if (spans[i]) spans[i].textContent = days === 1 ? '1d' : days + 'd';
  });
  area.classList.add('show');
  // Next button stays hidden until rated
  document.getElementById(nextBtnId).className = 'btn-primary quiz-next-btn';
}

function hideRatingButtons() {
  if (!_pendingRating) return;
  const area = document.getElementById(_pendingRating.ratingAreaId);
  if (area) area.classList.remove('show');
}

function onRatingSelected(rating) {
  if (!_pendingRating) return;
  const { keys, nextBtnId, extraKeys } = _pendingRating;
  keys.forEach(key => {
    applyFsrsRating(key, rating);
    _trackLastSeen(key);
  });
  extraKeys.forEach(k => _trackLastSeen(k));
  hideRatingButtons();
  _pendingRating = null;
  saveProgress();
  checkAchievements();
  document.getElementById(nextBtnId).className = 'btn-primary quiz-next-btn show';
}

function dontKnowQuiz() {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizQuestions[quizIndex];
  if (q.type === 'mc' || q.type === 'listening-mc') {
    document.querySelectorAll('#quiz-answer-area .mc-btn').forEach(b => {
      b.classList.add('disabled');
      if (b.dataset.answer === q.correct) b.classList.add('reveal-correct');
    });
    showFeedback(false, q.fullAnswer || q.correct);
  } else if (q.type === 'spell') {
    document.querySelectorAll('#spell-tile-bank .word-tile').forEach(t => t.style.pointerEvents = 'none');
    document.querySelectorAll('#spell-answer-area .word-tile').forEach(t => t.style.pointerEvents = 'none');
    showFeedback(false, q.correct);
    _showInlineAnswer('quiz-answer-area', q.correct);
  } else {
    const input = document.getElementById('fib-input');
    if (input) { input.disabled = true; input.classList.add('wrong'); }
    showFeedback(false, q.answer);
    _showInlineAnswer('quiz-answer-area', q.answer);
  }
  _recordMiss(quizMissed, q);
  _trackMistake(q.letter || (q.letters && q.letters[0] && q.letters[0].letter) || '', 'alphabet');
  if (q.letters) {
    q.letters.forEach(l => { applyFsrsRating(l.letter, FSRS_AGAIN); _trackLastSeen(l.letter); });
  } else {
    applyFsrsRating(q.letter, FSRS_AGAIN);
    _trackLastSeen(q.letter);
  }
  saveProgress();
  checkAchievements();
  document.getElementById('quiz-next-btn').className = 'btn-primary quiz-next-btn show';
}

function nextQuestion() {
  quizIndex++;
  renderQuestion();
}

// ════════════════════════════════════════
//  RESULTS
// ════════════════════════════════════════
function showResults() {
  showScreen('results');
  const total = quizQuestions.length;
  const pct = Math.round((quizCorrect / total) * 100);

  // Animate circle
  setTimeout(() => {
    const circumference = 2 * Math.PI * 72;
    const offset = circumference * (1 - pct / 100);
    document.getElementById('results-ring').style.strokeDashoffset = offset;
  }, 100);
  document.getElementById('results-pct').textContent = pct + '%';

  const titles = pct === 100 ? 'Perfect! 🌟' : pct >= 80 ? 'Great job!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
  document.getElementById('results-title').textContent = titles;
  const qid = quizModuleRef ? quizModuleRef.id : 'quiz';
  const hist = progress.quizHistory || (progress.quizHistory = {});
  const prev = hist[qid] || { best: -1 };
  if (pct > prev.best) { hist[qid] = { best: pct }; saveProgress(); }
  const subParts = [`You scored ${quizCorrect}/${total}`];
  if (_quizStartTime) subParts.push('⏱ ' + _formatElapsed(Date.now() - _quizStartTime));
  if (pct > prev.best && prev.best >= 0) subParts.push('🌟 New best!');
  else if (prev.best >= 0 && prev.best > pct) subParts.push(`Best: ${prev.best}%`);
  if (progress.streak > 1) subParts.push(`🔥 ${progress.streak} day streak`);
  document.getElementById('results-sub').textContent = subParts.join(' · ');

  addXP(5);
  detachQuizKeyHandler();
  updateNav();
  checkAchievements();
  _renderMissedSection(quizMissed, 'results-missed', 'results-retry-missed');
  const contBtn = document.getElementById('results-continue-review');
  if (contBtn) contBtn.style.display = _reviewQueue.length > 0 ? 'inline-block' : 'none';
}

function retryQuiz() {
  if (quizModuleRef && quizModuleRef.isMixed) {
    // Rebuild mixed session with updated mastery data
    startMixedPractice();
  } else if (quizModuleRef) {
    currentModule = quizModuleRef;
    startQuiz();
  }
}

function retryMissedQuiz() {
  if (!quizMissed || quizMissed.length === 0) return;
  const seen = new Set();
  const letterObjs = [];
  quizMissed.forEach(m => {
    const obj = m._q && m._q.letterObj;
    if (obj && !seen.has(obj.letter)) {
      seen.add(obj.letter);
      letterObjs.push(obj);
    }
  });
  if (letterObjs.length === 0) return;
  const mod = { id: 'retry-missed', title: 'Retry Missed', letters: letterObjs, isMixed: false };
  currentModule = mod;
  quizModuleRef = mod;
  generateQuiz(letterObjs);
  quizIndex = 0; quizCorrect = 0; quizMissed = [];
  document.getElementById('quiz-title').textContent = 'Retry Missed';
  showScreen('quiz');
  renderQuestion();
}

// ════════════════════════════════════════
//  ALPHABET CHART
// ════════════════════════════════════════
function renderChart() {
  const content = document.getElementById('chart-content');
  const sections = [
    { title: 'স্বরবর্ণ — Vowels', letters: VOWELS, type: 'vowel' },
    { title: 'ক-বর্গ — Velar', letters: CONSONANTS_VELAR, type: 'consonant' },
    { title: 'চ-বর্গ — Palatal', letters: CONSONANTS_PALATAL, type: 'consonant' },
    { title: 'ট-বর্গ — Retroflex', letters: CONSONANTS_RETROFLEX, type: 'consonant' },
    { title: 'ত-বর্গ — Dental', letters: CONSONANTS_DENTAL, type: 'consonant' },
    { title: 'প-বর্গ — Labial', letters: CONSONANTS_LABIAL, type: 'consonant' },
    { title: 'অন্যান্য — Other', letters: CONSONANTS_OTHER, type: 'consonant' },
    { title: 'বিশেষ — Special', letters: CONSONANTS_SPECIAL, type: 'consonant' },
  ];

  content.innerHTML = sections.map(sec => `
    <div class="chart-section">
      <h3>${sec.title}</h3>
      <div class="chart-grid">
        ${sec.letters.map(l => {
          const m = getMastery(l.letter);
          return `<div class="chart-cell" data-action="show-chart-detail" data-letter="${l.letter}"
            data-name="${l.name}" data-romanized="${l.romanized}" data-ipa="${l.ipa}"
            data-sound="${l.sound}" data-example="${l.example}">
            <div class="mastery-dot mastery-${m}"></div>
            <div class="chart-letter">${l.letter}</div>
            <div class="chart-romanized">${l.romanized.split('/')[0].trim()}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function showChartDetail(el) {
  const d = el.dataset;
  // Toggle detail popup
  const existing = el.querySelector('.chart-detail');
  if (existing) { existing.remove(); return; }
  // Remove any other open details
  document.querySelectorAll('.chart-detail').forEach(e => e.remove());
  const detail = document.createElement('div');
  detail.className = 'chart-detail';
  detail.style.cssText = `position:absolute;left:50%;top:100%;transform:translateX(-50%);
    background:var(--card);border-radius:10px;padding:12px;z-index:10;min-width:200px;
    box-shadow:0 8px 32px rgba(0,0,0,0.5);margin-top:8px;font-size:0.8rem;text-align:left;`;
  const safeL = (d.letter || '').replace(/'/g, "\\'");
  detail.innerHTML = `
    <div style="font-size:1rem;font-weight:600;margin-bottom:4px;">${d.name}</div>
    <div style="color:var(--text-dim)">Romanized: ${d.romanized}</div>
    <div style="color:var(--gold)">Sound: ${d.ipa} — ${d.sound}</div>
    <div style="color:var(--text-dim);margin-top:4px">${d.example}</div>
    <button class="chart-practice-btn" data-action="navigate-letter" data-letter="${safeL}">Practice →</button>
  `;
  el.style.position = 'relative';
  el.appendChild(detail);
  // Close on outside click
  setTimeout(() => {
    const handler = (e) => {
      if (!el.contains(e.target)) { detail.remove(); document.removeEventListener('click', handler); }
    };
    document.addEventListener('click', handler);
  }, 10);
}

// ════════════════════════════════════════
//  TAB SWITCHING
// ════════════════════════════════════════
let currentTab = 'alphabet';
const alphabetScreens = ['home','learn','quiz','results','chart'];
const vocabScreens = ['vocab-home','vocab-browse','vocab-learn','vocab-quiz','vocab-results'];
const grammarScreens = ['grammar-home','grammar-lesson','grammar-quiz','grammar-results'];
const phrasesScreens = ['phrases-home','phrases-situation','phrases-quiz','phrases-results'];

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  if (tab === 'today') {
    showScreen('today-screen');
  } else if (tab === 'alphabet') {
    _moduleHomeScreen = 'home';
    showScreen('home');
  } else if (tab === 'vocabulary') {
    showScreen('vocab-home');
  } else if (tab === 'numbers') {
    _moduleHomeScreen = 'numbers-home';
    showScreen('numbers-home');
  } else if (tab === 'phrases') {
    showScreen('phrases-home');
  } else {
    showScreen('grammar-home');
  }
}

// ════════════════════════════════════════
//  VOCAB PROGRESS
// ════════════════════════════════════════

// Compute the mastery storage key for a word object or plain lemma string.
// Words with a senseId (e.g. তারা/star vs তারা/they) get distinct keys.
function _vocabKey(w) {
  if (typeof w === 'string') return 'v:' + w;
  return 'v:' + w.lemma + (w.senseId ? ':' + w.senseId : '');
}

function getVocabMastery(w) {
  return progress.mastery[_vocabKey(w)] || 0;
}
// ════════════════════════════════════════
//  VOCAB HOME
// ════════════════════════════════════════
function renderVocabHome() {
  // Eagerly load all packs so counts are accurate; re-render once they arrive.
  if (!VOCAB_PACK_LOADED[1] || !VOCAB_PACK_LOADED[2] || !VOCAB_PACK_LOADED[3]) {
    Promise.all([1, 2, 3].map(n => loadVocabPack(n))).then(() => renderVocabHome());
  }
  const grid = document.getElementById('vocab-module-grid');
  grid.innerHTML = '';
  // Remove stale PT card first, then re-add if needed
  const oldPt = grid.parentElement.querySelector('.pt-cta-card');
  if (oldPt) oldPt.remove();
  if (shouldShowPlacementCard()) {
    const ptCard = document.createElement('div');
    ptCard.className = 'pt-cta-card';
    ptCard.innerHTML = '<h3>🎯 Take the Placement Test</h3><p>Already know some Bengali? Skip ahead based on your level.</p>';
    ptCard.onclick = () => startPlacementTest();
    grid.parentElement.insertBefore(ptCard, grid);
  }

  // Mixed Practice card
  const mixCard = document.createElement('div');
  mixCard.className = 'module-card';
  const vmUnlocked = getVocabMixedUnlockedCount();
  const vmTotal = VMIX_CURRICULUM.length;
  const vmMastered = VMIX_CURRICULUM.filter(w => getVocabMastery(w) >= 3).length;
  const vmPct = Math.round((vmMastered / vmTotal) * 100);
  const vmWave = Math.ceil(vmUnlocked / VMIX_WAVE_SIZE);
  const vmTotalWaves = Math.ceil(vmTotal / VMIX_WAVE_SIZE);
  mixCard.innerHTML = `
    <div class="module-icon">🧠</div>
    <h3>Mixed Practice</h3>
    <p>Adaptive lessons — new words introduced as you master earlier ones</p>
    <div class="module-progress"><div class="module-progress-fill" style="width:${vmPct}%;background:var(--accent)"></div></div>
    <div class="progress-label">${vmMastered}/${vmTotal} mastered · Wave ${vmWave}/${vmTotalWaves} unlocked</div>
  `;
  mixCard.onclick = () => startMixedVocabPractice();
  grid.appendChild(mixCard);

  // "All Words" browser card
  const allCard = document.createElement('div');
  allCard.className = 'module-card';
  const totalWords = VOCAB_TOTAL_WORDS;
  const masteredWords = Object.entries(progress.mastery)
    .filter(([k, v]) => k.startsWith('v:') && v >= 3).length;
  const allPct = Math.round((masteredWords / totalWords) * 100);
  allCard.innerHTML = `
    <div class="module-icon">📖</div>
    <h3>Browse All Words</h3>
    <p>Search and browse all ${totalWords} words</p>
    <div class="module-progress"><div class="module-progress-fill" style="width:${allPct}%;background:var(--accent)"></div></div>
    <div class="progress-label">${masteredWords}/${totalWords} mastered</div>
  `;
  allCard.onclick = () => openVocabBrowse(null);
  grid.appendChild(allCard);

  // Category cards
  const cats = Object.keys(VOCAB_CATEGORIES);
  cats.forEach(catId => {
    const cat = VOCAB_CATEGORIES[catId];
    const words = VOCAB_DATA.filter(w => w.category === catId);
    if (words.length === 0) return;
    const mastered = words.filter(w => getVocabMastery(w) >= 3).length;
    const pct = Math.round((mastered / words.length) * 100);

    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <div class="module-icon">${cat.icon}</div>
      <h3>${cat.title}</h3>
      <p>${words.length} words</p>
      <div class="module-progress"><div class="module-progress-fill" style="width:${pct}%;background:${cat.color}"></div></div>
      <div class="progress-label">${mastered}/${words.length} mastered</div>
      <div class="module-card-actions">
        <button class="mc-action-btn" data-action="start-vocab-learn" data-catid="${catId}">📖 Review</button>
        <button class="mc-action-btn mc-action-quiz" data-action="start-vocab-cat-quiz" data-catid="${catId}">▶ Quiz</button>
      </div>
    `;
    card.onclick = () => startVocabLearn(catId);
    grid.appendChild(card);
  });
}

// ════════════════════════════════════════
//  VOCAB MIXED PRACTICE — ADAPTIVE ALGORITHM
// ════════════════════════════════════════
// Words are introduced in waves of VMIX_WAVE_SIZE.  The curriculum
// interleaves categories so the learner sees variety early: pronouns,
// greetings, common verbs, food, numbers, etc.  New waves unlock when
// ≥50 % of the current wave reaches mastery ≥ 2.

const VMIX_WAVE_SIZE  = 10;   // words per wave
const VMIX_INTRO      = 5;    // new words shown as flashcards per session
const VMIX_QUIZ_SIZE  = 10;   // questions per quiz round
const VMIX_UNLOCK_THR = 2;    // mastery needed to count as "familiar"
const VMIX_FREQ_BANDS = [
  { maxRank: 20,   label: '1-20' },
  { maxRank: 70,   label: '21-70' },
  { maxRank: 250,  label: '71-250' },
  { maxRank: 800,  label: '251-800' },
  { maxRank: 2500, label: '801-2500' },
  { maxRank: 9000, label: '2501-9000' },
];

// Build a deliberate curriculum order in two stages:
//  1) partition by frequency band;
//  2) within each band, interleave categories with weighted round-robin.
//
// Extracted as a named function so it can be called again when lazy packs load,
// though in practice packs are pre-sorted so we just append them directly.
function buildCurriculum(words) {
  // Priority order: highest-utility categories first.
  const catOrder = [
    'expressions','pronouns','numbers','verbs','food','family',
    'adjectives','phrases','time','home','body','places',
    'adverbs','nature','emotions','education','animals','professions',
    'grammar','clothing','transport','health','colors','technology',
    'society','abstract'
  ];

  const categoryWeight = {};
  catOrder.forEach((cat, idx) => {
    // Higher-priority categories get a slightly higher turn frequency.
    categoryWeight[cat] = catOrder.length - idx;
  });

  const normalizeWord = (w) => ({
    ...w,
    category: catOrder.includes(w.category) ? w.category : 'abstract',
    freqRank: Number.isFinite(w.freqRank) ? w.freqRank : Number.MAX_SAFE_INTEGER,
  });

  const stableWordSort = (a, b) =>
    (a.freqRank - b.freqRank) ||
    a.lemma.localeCompare(b.lemma, 'bn') ||
    a.english.localeCompare(b.english);

  const weightedRoundRobinBand = (wordsInBand) => {
    const queues = {};
    catOrder.forEach(c => { queues[c] = []; });

    wordsInBand.forEach(w => {
      queues[w.category].push(w);
    });

    // Deterministic ordering within each category queue.
    catOrder.forEach(c => queues[c].sort(stableWordSort));

    const emitted = [];
    const seen = new Set();

    while (true) {
      let emittedThisPass = false;
      for (const c of catOrder) {
        let turns = categoryWeight[c] || 1;
        while (turns > 0 && queues[c].length > 0) {
          const w = queues[c].shift();
          const key = w.lemma + '|' + w.english;
          if (!seen.has(key)) {
            seen.add(key);
            emitted.push(w);
          }
          emittedThisPass = true;
          turns--;
        }
      }
      if (!emittedThisPass) break;
    }

    return emitted;
  };

  const getBandIdxByRank = (rank) => {
    for (let i = 0; i < VMIX_FREQ_BANDS.length; i++) {
      if (rank <= VMIX_FREQ_BANDS[i].maxRank) return i;
    }
    return VMIX_FREQ_BANDS.length - 1;
  };

  const bands = new Map();
  words.map(normalizeWord)
    .sort(stableWordSort)
    .forEach(w => {
      const bandIdx = getBandIdxByRank(w.freqRank);
      if (!bands.has(bandIdx)) bands.set(bandIdx, []);
      bands.get(bandIdx).push(w);
    });

  const curriculum = [];
  for (let i = 0; i < VMIX_FREQ_BANDS.length; i++) {
    if (bands.has(i)) curriculum.push(...weightedRoundRobinBand(bands.get(i)));
  }

  return curriculum;
}

// Pack 0 is always loaded (inlined in vocab.js). Packs 1-3 are fetched lazily.
// VMIX_CURRICULUM is mutable so packs can be appended without resorting.
let VMIX_CURRICULUM = buildCurriculum(VOCAB_DATA);

// ── Lazy pack loading ──────────────────────────────────────────────────────
// Packs are pre-sorted in curriculum order by build_vocab_packs.py, so we
// simply append them to both VOCAB_DATA and VMIX_CURRICULUM as they load.
const VOCAB_PACK_LOADED = [true, false, false, false]; // pack 0 always loaded

async function loadVocabPack(packNum) {
  if (VOCAB_PACK_LOADED[packNum]) return;
  VOCAB_PACK_LOADED[packNum] = true; // mark immediately to prevent concurrent loads
  try {
    const resp = await fetch(`vocab-pack-${packNum}.json`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const words = await resp.json();
    VOCAB_DATA.push(...words);
    VMIX_CURRICULUM.push(...words); // packs are pre-sorted in curriculum order
  } catch (err) {
    VOCAB_PACK_LOADED[packNum] = false; // allow retry on error
    console.warn(`Failed to load vocab-pack-${packNum}.json:`, err);
  }
}

function getVocabMixedUnlockedCount() {
  let unlocked = VMIX_WAVE_SIZE;
  while (unlocked < VMIX_CURRICULUM.length) {
    const waveStart = unlocked - VMIX_WAVE_SIZE;
    const wave = VMIX_CURRICULUM.slice(waveStart, unlocked);
    const familiar = wave.filter(w => getVocabMastery(w) >= VMIX_UNLOCK_THR).length;
    if (familiar >= Math.ceil(wave.length * 0.5)) {
      unlocked = Math.min(unlocked + VMIX_WAVE_SIZE, VMIX_CURRICULUM.length);
    } else {
      break;
    }
  }

  // Prefetch next pack when the user has unlocked >75% of what's currently loaded.
  const loadedSize = VMIX_CURRICULUM.length;
  if (unlocked > loadedSize * 0.75) {
    const nextPack = VOCAB_PACK_LOADED.findIndex(loaded => !loaded);
    if (nextPack !== -1) loadVocabPack(nextPack); // fire-and-forget
  }

  return unlocked;
}

function buildMixedVocabSession() {
  const unlocked = getVocabMixedUnlockedCount();
  const pool = VMIX_CURRICULUM.slice(0, unlocked);

  // Priority queue: words user flagged via "Study this"
  const priorityLemmas = progress.vmixPriority || [];
  const priorityWords = priorityLemmas
    .map(lemma => VOCAB_DATA.find(w => w.lemma === lemma))
    .filter(Boolean);

  // Words the user hasn't seen yet
  const unseen = pool.filter(w => getVocabMastery(w) === 0);
  // Priority words that need teaching come first
  const priorityUnseen = priorityWords.filter(w => getVocabMastery(w) === 0);
  const regularUnseen = unseen.filter(w => !priorityLemmas.includes(w.lemma));
  const teach = [...priorityUnseen, ...regularUnseen].slice(0, VMIX_INTRO);

  // Prioritise low-mastery words for the quiz; priority queue goes first
  const poolWithPriority = [...priorityWords, ...pool.filter(w => !priorityLemmas.includes(w.lemma))];
  const prioritized = [...poolWithPriority].sort((a, b) => {
    const aIsPriority = priorityLemmas.includes(a.lemma);
    const bIsPriority = priorityLemmas.includes(b.lemma);
    if (aIsPriority !== bIsPriority) return aIsPriority ? -1 : 1;
    const ma = getVocabMastery(a), mb = getVocabMastery(b);
    const sa = ma === 3 ? 4 : ma === 2 ? 1 : ma === 0 ? 0.5 : 0;
    const sb = mb === 3 ? 4 : mb === 2 ? 1 : mb === 0 ? 0.5 : 0;
    return (sa - sb)
      || ((a.freqRank || Number.MAX_SAFE_INTEGER) - (b.freqRank || Number.MAX_SAFE_INTEGER))
      || a.lemma.localeCompare(b.lemma, 'bn')
      || a.english.localeCompare(b.english);
  });

  const quiz = prioritized.slice(0, Math.min(VMIX_QUIZ_SIZE, poolWithPriority.length));
  // Remove from priority queue words that have been quizzed (mastery > 0)
  if (priorityLemmas.length > 0) {
    progress.vmixPriority = priorityLemmas.filter(l => getVocabMastery(l) === 0);
    saveProgress();
  }
  return { teach, quiz, unlocked, total: VMIX_CURRICULUM.length };
}

let vmixSession = null;
let vmixIsActive = false;   // track whether we're in mixed-vocab mode

function startMixedVocabPractice() {
  vmixSession = buildMixedVocabSession();
  vmixIsActive = true;

  if (vmixSession.teach.length > 0) {
    // Show flashcards for new words, then quiz
    vlWords = vmixSession.teach;
    vlIndex = 0;
    vlCatId = '__mixed__';
    document.getElementById('vl-title').textContent = 'New Words';
    document.getElementById('vl-counter').textContent = '1 / ' + vlWords.length;
    const qbtn = document.getElementById('vl-quiz-btn');
    qbtn.textContent = 'Practice Quiz →';
    qbtn.onclick = () => launchMixedVocabQuiz();
    showVocabCardAt();
    showScreen('vocab-learn');
  } else {
    launchMixedVocabQuiz();
  }
}

function launchMixedVocabQuiz() {
  if (!vmixSession) vmixSession = buildMixedVocabSession();
  vmixIsActive = true;
  vlWords = vmixSession.quiz;
  vlCatId = '__mixed__';
  vqCatRef = '__mixed__';
  generateVocabQuiz(vmixSession.quiz);
  vqIndex = 0;
  vqCorrect = 0;
  vqMissed = [];
  _quizStartTime = Date.now();
  document.getElementById('vq-title').textContent = 'Mixed Vocab Practice';
  showScreen('vocab-quiz');
  renderVocabQuestion();
  updateStreak();
}

// ════════════════════════════════════════
//  VOCAB BROWSE
// ════════════════════════════════════════
let vbFilter = null;
let vbPage = 0;
const VB_PAGE_SIZE = 30;

function openVocabBrowse(cat) {
  vbFilter = cat;
  vbPage = 0;
  showScreen('vocab-browse');
  document.getElementById('vb-search').value = '';
  renderCatChips();
  renderVocabList();
}

function renderCatChips() {
  const container = document.getElementById('cat-chips');
  const cats = Object.keys(VOCAB_CATEGORIES);
  container.innerHTML = `<div class="cat-chip ${vbFilter === null ? 'active' : ''}" data-action="set-vocab-filter">All</div>` +
    cats.map(catId => {
      const cat = VOCAB_CATEGORIES[catId];
      const count = VOCAB_DATA.filter(w => w.category === catId).length;
      if (count === 0) return '';
      return `<div class="cat-chip ${vbFilter === catId ? 'active' : ''}" data-action="set-vocab-filter" data-catid="${catId}">${cat.icon} ${cat.title} (${count})</div>`;
    }).join('');
}

function setVocabFilter(cat) {
  vbFilter = cat;
  vbPage = 0;
  renderCatChips();
  renderVocabList();
}

function filterVocabList() {
  vbPage = 0;
  renderVocabList();
}

function getFilteredVocab() {
  const search = (document.getElementById('vb-search')?.value || '').toLowerCase().trim();
  return VOCAB_DATA.filter(w => {
    if (vbFilter && w.category !== vbFilter) return false;
    if (search) {
      return w.lemma.includes(search) || w.roman.toLowerCase().includes(search) || w.english.toLowerCase().includes(search);
    }
    return true;
  });
}

function renderVocabList() {
  const filtered = getFilteredVocab();
  const start = vbPage * VB_PAGE_SIZE;
  const page = filtered.slice(start, start + VB_PAGE_SIZE);

  const container = document.getElementById('vocab-list');
  container.innerHTML = page.map(w => {
    const m = getVocabMastery(w);
    return `<div class="vocab-row" data-action="show-vocab-detail" data-lemma="${w.lemma.replace(/'/g,'&apos;')}">
      <div class="vr-bengali">${w.lemma}</div>
      <div class="vr-roman">${w.roman}</div>
      <div class="vr-english">${w.english}</div>
      <div class="vr-mastery mastery-${m}"></div>
    </div>`;
  }).join('');

  if (page.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-dim);padding:40px;">No words found</div>';
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / VB_PAGE_SIZE);
  const pag = document.getElementById('vocab-pagination');
  if (totalPages <= 1) { pag.innerHTML = ''; return; }
  pag.innerHTML = `
    <button class="nav-btn" ${vbPage === 0 ? 'disabled' : ''} data-action="vocab-page-prev">← Prev</button>
    <span style="color:var(--text-dim)">${vbPage + 1} / ${totalPages}</span>
    <button class="nav-btn" ${vbPage >= totalPages - 1 ? 'disabled' : ''} data-action="vocab-page-next">Next →</button>
  `;
}

let _wordModalLemma = null;

function showVocabDetail(bengali) {
  const w = VOCAB_DATA.find(w => w.lemma === bengali);
  if (!w) return;
  _wordModalLemma = w.lemma;
  const cat = VOCAB_CATEGORIES[w.category];
  document.getElementById('wm-bengali').textContent = w.lemma;
  document.getElementById('wm-roman').textContent = w.roman;
  document.getElementById('wm-pos').textContent = w.pos;
  document.getElementById('wm-english').textContent = w.english;
  document.getElementById('wm-cat').textContent = cat ? cat.title : w.category;
  const wmEx = document.getElementById('wm-example');
  if (wmEx) wmEx.textContent = w.example || '';
  const wmExBtn = document.getElementById('wm-example-btn');
  if (wmExBtn) wmExBtn.style.display = w.example ? '' : 'none';
  // Update study button
  const studyBtn = document.getElementById('wm-study-btn');
  if (studyBtn) {
    const inQueue = (progress.vmixPriority || []).includes(w.lemma);
    studyBtn.textContent = inQueue ? '✓ In study queue' : '+ Study this word';
    studyBtn.dataset.lemma = w.lemma;
  }
  document.getElementById('word-modal-card').classList.remove('flipped');
  document.getElementById('word-modal').classList.add('open');
  document.addEventListener('keydown', _wordModalEsc);
}

function studyWordNext(lemma) {
  if (!progress.vmixPriority) progress.vmixPriority = [];
  if (!progress.vmixPriority.includes(lemma)) {
    progress.vmixPriority.unshift(lemma);
    saveProgress();
  }
  const btn = document.getElementById('wm-study-btn');
  if (btn) btn.textContent = '✓ In study queue';
}

// Add-to-study from search overlay without leaving the panel
function searchAddToStudy(lemma, btn) {
  if (!progress.vmixPriority) progress.vmixPriority = [];
  if (!progress.vmixPriority.includes(lemma)) {
    progress.vmixPriority.unshift(lemma);
    saveProgress();
  }
  btn.textContent = '✓ Queued';
  btn.classList.add('added');
  btn.title = 'Already in study queue';
}

function closeWordModal() {
  document.getElementById('word-modal').classList.remove('open');
  document.removeEventListener('keydown', _wordModalEsc);
}

function _wordModalEsc(e) { if (e.key === 'Escape') closeWordModal(); }

function flipWordModal() {
  document.getElementById('word-modal-card').classList.toggle('flipped');
}

// ════════════════════════════════════════
//  VOCAB LEARN (FLASHCARDS)
// ════════════════════════════════════════
let vlWords = [];
let vlIndex = 0;
let vlCatId = null;

function startVocabLearn(catId) {
  vmixIsActive = false;
  vlCatId = catId;
  const cat = VOCAB_CATEGORIES[catId];
  vlWords = VOCAB_DATA.filter(w => w.category === catId);
  vlIndex = 0;
  document.getElementById('vl-title').textContent = cat.title;
  // Reset quiz button to default (may have been overridden by mixed mode)
  const qbtn = document.getElementById('vl-quiz-btn');
  qbtn.textContent = 'Start Quiz →';
  qbtn.onclick = () => startVocabQuiz();
  showVocabCardAt();
  showScreen('vocab-learn');
}

function _startVocabCatQuiz(catId) {
  vmixIsActive = false;
  vlCatId = catId;
  vqCatRef = catId;
  const words = VOCAB_DATA.filter(w => w.category === catId);
  generateVocabQuiz(words);
  vqIndex = 0; vqCorrect = 0; vqMissed = [];
  const cat = VOCAB_CATEGORIES[catId];
  document.getElementById('vq-title').textContent = (cat ? cat.title : catId) + ' Quiz';
  showScreen('vocab-quiz');
  renderVocabQuestion();
  updateStreak();
}

function showVocabCardAt() {
  const w = vlWords[vlIndex];
  document.getElementById('vocab-flashcard').classList.remove('flipped');
  document.getElementById('vc-bengali').textContent = w.lemma;
  document.getElementById('vc-roman').textContent = w.roman;
  document.getElementById('vc-pos').textContent = w.pos;
  document.getElementById('vc-english').textContent = w.english;
  const cat = VOCAB_CATEGORIES[w.category];
  document.getElementById('vc-cat').textContent = cat ? cat.title : w.category;
  const exEl = document.getElementById('vc-example');
  if (exEl) exEl.textContent = w.example || '';
  const exBtn = document.getElementById('vc-example-btn');
  if (exBtn) exBtn.style.display = w.example ? '' : 'none';
  document.getElementById('vl-counter').textContent = (vlIndex + 1) + ' / ' + vlWords.length;
  document.getElementById('vl-prev').style.visibility = vlIndex === 0 ? 'hidden' : 'visible';

  // Mark as seen
  if (getVocabMastery(w) === 0) {
    progress.mastery[_vocabKey(w)] = 1;
    saveProgress();
  }
}

function flipVocabCard() {
  document.getElementById('vocab-flashcard').classList.toggle('flipped');
}
function nextVocabCard() {
  if (vlIndex < vlWords.length - 1) { vlIndex++; showVocabCardAt(); }
}
function prevVocabCard() {
  if (vlIndex > 0) { vlIndex--; showVocabCardAt(); }
}

// ════════════════════════════════════════
//  VOCAB QUIZ
// ════════════════════════════════════════
let vqQuestions = [];
let vqIndex = 0;
let vqCorrect = 0;
let vqAnswered = false;
let vqCatRef = null;
let vqMissed = [];

function startVocabQuiz() {
  vqCatRef = vlCatId;
  const words = vlWords && vlWords.length > 0 ? vlWords : VOCAB_DATA.filter(w => w.category === vlCatId);
  generateVocabQuiz(words);
  vqIndex = 0;
  vqCorrect = 0;
  vqMissed = [];
  _quizStartTime = Date.now();
  const cat = VOCAB_CATEGORIES[vlCatId];
  document.getElementById('vq-title').textContent = (cat ? cat.title : 'Vocab') + ' Quiz';
  showScreen('vocab-quiz');
  renderVocabQuestion();
  updateStreak();
}

function generateVocabQuiz(words, forceMode) {
  vqQuestions = [];
  // Weight by urgency: overdue ratio = elapsed_days / stability (FSRS), or legacy interval ratio
  const urgency = w => {
    const m = getVocabMastery(w);
    if (m === 0) return 500;
    const vk = _vocabKey(w);
    const card = progress.fsrs && progress.fsrs[vk];
    if (card && card.s > 0) {
      return _elapsedDays(vk) / card.s;
    }
    const seenAgo = (progress.lastSeen && progress.lastSeen[vk])
      ? Date.now() - new Date(progress.lastSeen[vk]).getTime() : Infinity;
    return seenAgo / REVIEW_INTERVALS_MS[m];
  };
  const sorted = [...words].sort((a, b) => urgency(b) - urgency(a));
  const count = Math.min(10, sorted.length);
  const selected = sorted.slice(0, count);

  const listenMode = forceMode || getListeningMode();

  selected.forEach((w, i) => {
    let qTypes;
    if (listenMode === 'listening') {
      qTypes = ['listening-mc', 'listening-fib'];
    } else if (listenMode === 'mixed') {
      qTypes = ['mc-en', 'mc-bn', 'fib-en', 'fib-bn', 'listening-mc', 'listening-fib'];
    } else {
      qTypes = ['mc-en', 'mc-bn', 'fib-en', 'fib-bn'];
    }
    const qtype = qTypes[i % qTypes.length];

    if (qtype === 'mc-en') {
      // Show Bengali, pick English meaning
      const correct = w.english;
      const distractors = words.filter(x => x.lemma !== w.lemma).map(x => x.english);
      const allPool = VOCAB_DATA.filter(x => x.lemma !== w.lemma).map(x => x.english);
      const pool = distractors.length >= 3 ? distractors : [...distractors, ...allPool];
      const picks = shuffle([...new Set(pool)].filter(x => x !== correct)).slice(0, 3);
      vqQuestions.push({
        type: 'mc', bengali: w.lemma, roman: w.roman,
        prompt: 'What does this word mean?',
        correct, options: shuffle([correct, ...picks]), word: w,
      });
    } else if (qtype === 'mc-bn') {
      // Show English, pick Bengali — exclude synonyms (same English gloss) from distractors
      const correct = w.lemma;
      const notSynonym = x => x.lemma !== w.lemma && !_englishOverlaps(x.english, w.english);
      const distractors = words.filter(notSynonym).map(x => x.lemma);
      const allPool = VOCAB_DATA.filter(notSynonym).map(x => x.lemma);
      const pool = distractors.length >= 3 ? distractors : [...distractors, ...allPool];
      const picks = shuffle([...new Set(pool)].filter(x => x !== correct)).slice(0, 3);
      vqQuestions.push({
        type: 'mc-reverse', english: w.english,
        prompt: 'Which Bengali word means "' + w.english + '"?',
        correct, options: shuffle([correct, ...picks]), word: w,
      });
    } else if (qtype === 'fib-en') {
      // Show Bengali, type English
      const acceptable = w.english.toLowerCase().split('/').map(s => s.trim());
      // Also accept individual words for multi-word translations
      w.english.toLowerCase().split('/').forEach(s => {
        s.trim().split(' ').forEach(word => { if (word.length > 2) acceptable.push(word); });
      });
      vqQuestions.push({
        type: 'fib', bengali: w.lemma, roman: w.roman,
        prompt: 'Type the English meaning:',
        acceptable: [...new Set(acceptable)],
        answer: w.english, hint: 'Romanized: ' + w.roman, word: w,
      });
    } else if (qtype === 'fib-bn') {
      // Show English, type Bengali (script or romanized depending on fibMode)
      const _fibMode = getFibMode();
      const acceptable = [w.roman.toLowerCase()];
      const prompt = _fibMode === 'bengali' ? 'Type the Bengali word:' :
                     _fibMode === 'mixed'   ? 'Type the Bengali word or romanization:' :
                                             'Type the romanized Bengali:';
      const answer = _fibMode === 'bengali' ? w.lemma :
                     _fibMode === 'mixed'   ? `${w.lemma} (${w.roman})` :
                                             w.roman;
      vqQuestions.push({
        type: 'fib-reverse', english: w.english,
        prompt, acceptable, answer,
        hint: 'Category: ' + (VOCAB_CATEGORIES[w.category]?.title || w.category), word: w,
      });
    } else if (qtype === 'listening-mc') {
      // Play word; pick English meaning
      const correct = w.english;
      const pool = shuffle(VOCAB_DATA.filter(x => x.lemma !== w.lemma).map(x => x.english)
        .filter(v => v !== correct));
      const picks = pool.slice(0, 3);
      vqQuestions.push({
        type: 'listening-mc', audio: w.lemma,
        bengali: w.lemma, roman: w.roman,
        prompt: 'What does this word mean?',
        correct, options: shuffle([correct, ...picks]), word: w,
      });
    } else {
      // listening-fib: play word; type Bengali (script or romanized depending on fibMode)
      const _fibMode = getFibMode();
      const acceptable = [w.roman.toLowerCase()];
      const lfPrompt = _fibMode === 'bengali' ? 'Type the Bengali word you hear:' :
                       _fibMode === 'mixed'   ? 'Type the Bengali word or romanization:' :
                                               'Type the romanized form of what you hear:';
      const lfAnswer = _fibMode === 'bengali' ? w.lemma :
                       _fibMode === 'mixed'   ? `${w.lemma} (${w.roman})` :
                                               w.roman;
      vqQuestions.push({
        type: 'listening-fib', audio: w.lemma,
        bengali: w.lemma, roman: w.roman,
        prompt: lfPrompt, acceptable, answer: lfAnswer,
        hint: 'Hint: ' + w.english, word: w,
      });
    }
  });
}

// Returns true if two English glosses share a primary meaning token (e.g. "water" and "water (formal)").
// Used to filter synonyms from MC distractor pools so a valid synonym never appears as a wrong option.
function _englishOverlaps(a, b) {
  const tok = s => s.toLowerCase().split('/').map(t => t.trim()).filter(Boolean);
  return tok(a).some(t => tok(b).includes(t));
}

function renderVocabQuestion() {
  if (vqIndex >= vqQuestions.length) { showVocabResults(); return; }
  vqAnswered = false;
  const q = vqQuestions[vqIndex];

  document.getElementById('vq-progress-fill').style.width =
    ((vqIndex / vqQuestions.length) * 100) + '%';
  document.getElementById('vq-score').textContent = vqCorrect + ' / ' + vqIndex;

  const qa = document.getElementById('vq-question-area');
  if (q.type === 'listening-mc' || q.type === 'listening-fib') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="listening-controls">
        <button class="listening-play-btn" data-action="speak" data-text="${escapeStr(q.audio)}" aria-label="Play sound">▶</button>
        <button class="slow-audio-btn${_audioSlowMode ? ' active' : ''}" data-action="toggle-slow-audio" title="${_audioSlowMode ? 'Slow mode on — click to restore normal speed' : 'Play at half speed'}" aria-label="Toggle slow audio">🐢</button>
      </div>
      <div style="font-size:0.8rem;color:var(--muted);margin-top:4px">Tap to replay</div>
    `;
    setTimeout(() => speakBengali(q.audio), 300);
  } else if (q.type === 'mc' || q.type === 'fib') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="vq-bengali">${q.bengali}</div>
      <div class="vq-hint">${q.roman}</div>
      <button class="card-sound-btn" data-action="speak" data-text="${escapeStr(q.bengali)}" aria-label="Play pronunciation">🔊</button>
    `;
  } else {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div style="font-size:2.2rem;font-weight:700;margin:16px 0">${q.english}</div>
    `;
  }

  const aa = document.getElementById('vq-answer-area');
  const fb = document.getElementById('vq-feedback');
  fb.className = 'quiz-feedback';
  document.getElementById('vq-next-btn').className = 'btn-primary quiz-next-btn';
  document.getElementById('vq-rating-area').classList.remove('show');
  _pendingRating = null;

  if (q.type === 'mc' || q.type === 'mc-reverse' || q.type === 'listening-mc') {
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) =>
        `<button class="mc-btn" data-answer="${escapeStr(opt)}" data-action="answer-mc-vocab">${opt}<span class="mc-key-hint">[${i+1}]</span></button>`
      ).join('') + '</div>' +
      "<button class=\"idk-btn\" data-action=\"dont-know-vocab\">I don't know</button>";
    attachQuizKeyHandler('vq');
  } else {
    const vqHintHtml = q.hint
      ? `<button class="hint-btn" data-action="show-hint">💡 Hint</button><div class="fib-hint" style="display:none">${q.hint}</div>`
      : '';
    const vqKbdHtml = getFibMode() !== 'latin'
      ? `<button class="bng-kbd-toggle" data-action="show-kbd" data-input="vq-fib-input">বাং ▲</button>` : '';
    aa.innerHTML = `<div class="fib-area">
      <input type="text" class="fib-input" id="vq-fib-input" placeholder="Type your answer…"
        autocomplete="off" autocapitalize="off">
      <button class="btn-primary fib-submit" data-action="answer-vocab-fib">Check</button>
      ${vqHintHtml}${vqKbdHtml}
    </div>
    <button class="idk-btn" data-action="dont-know-vocab">I don't know</button>`;
    setTimeout(() => document.getElementById('vq-fib-input')?.focus(), 100);
  }
}

function answerVocabMC(btn, chosen) {
  if (vqAnswered) return;
  vqAnswered = true;
  const q = vqQuestions[vqIndex];
  const correct = chosen === q.correct;
  document.querySelectorAll('#vq-answer-area .mc-btn').forEach(b => {
    b.classList.add('disabled');
    if (b.dataset.answer === q.correct) b.classList.add('reveal-correct');
  });
  btn.classList.add(correct ? 'correct' : 'wrong');
  if (correct) {
    vqCorrect++; addXP(10);
    showVocabFeedback(true, q.correct, false);
    showRatingButtons(_vocabKey(q.word), 'vq-rating-area', 'vq-next-btn');
  } else {
    _recordMiss(vqMissed, q);
    _trackMistake(_vocabKey(q.word), 'vocab');
    applyFsrsRating(_vocabKey(q.word), FSRS_AGAIN);
    _trackLastSeen(_vocabKey(q.word));
    saveProgress();
    checkAchievements();
    showVocabFeedback(false, q.correct, q.word && q.word.example);
    document.getElementById('vq-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function answerVocabFIB() {
  if (vqAnswered) return;
  const input = document.getElementById('vq-fib-input');
  if (!input) return;
  const rawInput = input.value.trim();
  const val = rawInput.toLowerCase();
  if (!val) return;
  vqAnswered = true;
  const q = vqQuestions[vqIndex];
  const normVal = _normRoman(val);
  const fibMode = getFibMode();
  let correct;
  if (fibMode === 'bengali') {
    correct = (q.word && rawInput === q.word.lemma) ||
              q.acceptable.some(a => _isBengali(a) && a === rawInput);
  } else {
    correct = q.acceptable.some(a => a === val || _normRoman(a) === normVal);
    if (fibMode === 'mixed') {
      correct = correct || (q.word && rawInput === q.word.lemma) ||
                q.acceptable.some(a => _isBengali(a) && a === rawInput);
    }
  }
  input.classList.add(correct ? 'correct' : 'wrong');
  if (correct) {
    vqCorrect++; addXP(15);
    showVocabFeedback(true, q.answer, false);
    showRatingButtons(_vocabKey(q.word), 'vq-rating-area', 'vq-next-btn');
  } else {
    _showInlineAnswer('vq-answer-area', q.answer);
    _recordMiss(vqMissed, q);
    _trackMistake(_vocabKey(q.word), 'vocab');
    applyFsrsRating(_vocabKey(q.word), FSRS_AGAIN);
    _trackLastSeen(_vocabKey(q.word));
    saveProgress();
    checkAchievements();
    showVocabFeedback(false, q.answer, q.word && q.word.example);
    document.getElementById('vq-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function showVocabFeedback(correct, answer, example) {
  const fb = document.getElementById('vq-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  let html = correct ? '✓ Correct! ' + escHtml(answer) : '✗ The answer is: ' + escHtml(answer);
  if (!correct && example) html += '<div class="fb-example">' + escHtml(example) + '</div>';
  html += ' <button class="report-problem-btn active-quiz-vocab" data-action="report-problem" data-kind="vocab" title="Report a problem with this card">⚑ Report</button>';
  fb.innerHTML = html;
}

function dontKnowVocab() {
  if (vqAnswered) return;
  vqAnswered = true;
  const q = vqQuestions[vqIndex];
  if (q.type === 'mc' || q.type === 'mc-reverse' || q.type === 'listening-mc') {
    document.querySelectorAll('#vq-answer-area .mc-btn').forEach(b => {
      b.classList.add('disabled');
      if (b.dataset.answer === q.correct) b.classList.add('reveal-correct');
    });
  } else {
    const input = document.getElementById('vq-fib-input');
    if (input) { input.disabled = true; input.classList.add('wrong'); }
    _showInlineAnswer('vq-answer-area', q.answer || q.correct);
  }
  _recordMiss(vqMissed, q);
  _trackMistake(_vocabKey(q.word), 'vocab');
  applyFsrsRating(_vocabKey(q.word), FSRS_AGAIN);
  _trackLastSeen(_vocabKey(q.word));
  saveProgress();
  checkAchievements();
  showVocabFeedback(false, q.answer || q.correct, q.word && q.word.example);
  document.getElementById('vq-next-btn').className = 'btn-primary quiz-next-btn show';
}

function nextVocabQuestion() {
  vqIndex++;
  renderVocabQuestion();
}

function showVocabResults() {
  showScreen('vocab-results');
  const total = vqQuestions.length;
  const pct = Math.round((vqCorrect / total) * 100);
  setTimeout(() => {
    const offset = 452.4 * (1 - pct / 100);
    document.getElementById('vr-ring').style.strokeDashoffset = offset;
  }, 100);
  document.getElementById('vr-pct').textContent = pct + '%';
  const titles = pct === 100 ? 'Perfect! 🌟' : pct >= 80 ? 'Great job!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
  document.getElementById('vr-title').textContent = titles;
  const vqid = vqCatRef || 'vocab';
  const vhist = progress.quizHistory || (progress.quizHistory = {});
  const vprev = vhist[vqid] || { best: -1 };
  if (pct > vprev.best) { vhist[vqid] = { best: pct }; saveProgress(); }
  const vSubParts = [`You scored ${vqCorrect}/${total}`];
  if (_quizStartTime) vSubParts.push('⏱ ' + _formatElapsed(Date.now() - _quizStartTime));
  if (pct > vprev.best && vprev.best >= 0) vSubParts.push('🌟 New best!');
  else if (vprev.best >= 0 && vprev.best > pct) vSubParts.push(`Best: ${vprev.best}%`);
  if (progress.streak > 1) vSubParts.push(`🔥 ${progress.streak} day streak`);
  document.getElementById('vr-sub').textContent = vSubParts.join(' · ');
  addXP(5);
  detachQuizKeyHandler();
  updateNav();
  checkAchievements();
  _renderMissedSection(vqMissed, 'vr-missed', 'vr-retry-missed');
  const vContBtn = document.getElementById('vr-continue-review');
  if (vContBtn) vContBtn.style.display = _reviewQueue.length > 0 ? 'inline-block' : 'none';
}

function retryVocabQuiz() {
  if (vmixIsActive || vqCatRef === '__mixed__') {
    startMixedVocabPractice();
  } else if (vqCatRef) {
    vlCatId = vqCatRef;
    vlWords = VOCAB_DATA.filter(w => w.category === vlCatId);
    startVocabQuiz();
  }
}

function retryMissedVocab() {
  if (!vqMissed || vqMissed.length === 0) return;
  const seen = new Set();
  const words = [];
  vqMissed.forEach(m => {
    const w = m._q && m._q.word;
    if (w && !seen.has(w.lemma)) {
      seen.add(w.lemma);
      words.push(w);
    }
  });
  if (words.length === 0) return;
  generateVocabQuiz(words);
  vqIndex = 0; vqCorrect = 0; vqMissed = [];
  document.getElementById('vq-title').textContent = 'Retry Missed';
  showScreen('vocab-quiz');
  renderVocabQuestion();
}

// ════════════════════════════════════════
//  GRAMMAR PROGRESS
// ════════════════════════════════════════
function getGrammarMastery(lessonId, questionIdx) {
  return progress.mastery['g:' + lessonId + ':' + questionIdx] || 0;
}
function getLessonProgress(lesson) {
  const total = lesson.quiz.length;
  let mastered = 0, seen = 0;
  for (let i = 0; i < total; i++) {
    const m = getGrammarMastery(lesson.id, i);
    if (m >= 3) mastered++;
    if (m >= 1) seen++;
  }
  return { total, mastered, seen, pct: Math.round((mastered / total) * 100) };
}

// ════════════════════════════════════════
//  GRAMMAR HOME
// ════════════════════════════════════════
function renderGrammarHome() {
  const grid = document.getElementById('grammar-module-grid');
  grid.innerHTML = '';
  // Remove stale PT card first, then re-add if needed
  const oldPt = grid.parentElement.querySelector('.pt-cta-card');
  if (oldPt) oldPt.remove();
  if (shouldShowPlacementCard()) {
    const ptCard = document.createElement('div');
    ptCard.className = 'pt-cta-card';
    ptCard.innerHTML = '<h3>🎯 Take the Placement Test</h3><p>Already know some Bengali? Skip ahead based on your level.</p>';
    ptCard.onclick = () => startPlacementTest();
    grid.parentElement.insertBefore(ptCard, grid);
  }

  // Mixed practice card
  const mixCard = document.createElement('div');
  mixCard.className = 'module-card';
  const unlocked = getGrammarMixedUnlockedCount();
  const totalLessons = GRAMMAR_LESSONS.length;
  const totalQ = GRAMMAR_LESSONS.reduce((s, l) => s + l.quiz.length, 0);
  let masteredQ = 0;
  GRAMMAR_LESSONS.forEach(l => {
    for (let i = 0; i < l.quiz.length; i++) {
      if (getGrammarMastery(l.id, i) >= 3) masteredQ++;
    }
  });
  const mixPct = Math.round((masteredQ / totalQ) * 100);
  mixCard.innerHTML = `
    <div class="module-icon">🧠</div>
    <h3>Mixed Practice</h3>
    <p>Adaptive review across all unlocked grammar lessons</p>
    <div class="module-progress"><div class="module-progress-fill" style="width:${mixPct}%;background:var(--accent)"></div></div>
    <div class="progress-label">${masteredQ}/${totalQ} mastered · ${unlocked}/${totalLessons} lessons unlocked</div>
  `;
  mixCard.onclick = () => startGrammarMixedPractice();
  grid.appendChild(mixCard);

  // Lesson cards
  GRAMMAR_LESSONS.forEach((lesson, idx) => {
    const card = document.createElement('div');
    card.className = 'module-card';
    const prog = getLessonProgress(lesson);
    // Cosmetic lock: show if this is not the first lesson and the previous lesson has 0 mastered
    const prevLesson = idx > 0 ? GRAMMAR_LESSONS[idx - 1] : null;
    const locked = prevLesson && getLessonProgress(prevLesson).mastered === 0;
    card.innerHTML = `
      ${locked ? '<span class="lock-badge">🔒</span>' : ''}
      <div class="module-icon">📖</div>
      <h3>${lesson.number}. ${lesson.title}</h3>
      <p>${lesson.shortDesc}</p>
      <div class="module-progress"><div class="module-progress-fill" style="width:${prog.pct}%;background:var(--accent)"></div></div>
      <div class="progress-label">${prog.mastered}/${prog.total} mastered</div>
    `;
    if (!locked) {
      card.onclick = () => openGrammarLesson(lesson.id);
    } else {
      card.style.cursor = 'not-allowed';
      card.style.opacity = '0.6';
    }
    grid.appendChild(card);
  });
}

// ════════════════════════════════════════
//  GRAMMAR LESSON VIEW
// ════════════════════════════════════════
let currentGrammarLesson = null;

function openGrammarLesson(lessonId) {
  const lesson = GRAMMAR_LESSONS.find(l => l.id === lessonId);
  if (!lesson) return;
  currentGrammarLesson = lesson;

  document.getElementById('gl-title').textContent = lesson.number + '. ' + lesson.title;
  _glCardIdx = 0;
  const content = document.getElementById('gl-content');
  content.innerHTML = `
    <h2>${lesson.title}</h2>
    <div class="grammar-desc">${lesson.shortDesc}</div>
    <div class="grammar-explanation">${lesson.explanation}</div>
    <h3 style="margin-bottom:12px;">Example Cards</h3>
    <div class="gl-card-area">
      <div class="gl-flashcard" id="gl-card" data-action="flip-gl-card">
        <div class="gl-card-face gl-card-front" id="gl-card-front"></div>
        <div class="gl-card-face gl-card-back" id="gl-card-back"></div>
      </div>
      <div class="gl-card-hint" id="gl-card-hint">Tap card to reveal</div>
      <div class="learn-nav" style="margin-top:12px">
        <button class="nav-btn" id="gl-prev-btn" data-action="prev-gl-card">← Prev</button>
        <span id="gl-card-counter" style="font-size:0.85rem;color:var(--text-dim)"></span>
        <button class="nav-btn" id="gl-next-btn" data-action="next-gl-card">Next →</button>
      </div>
    </div>
    <div class="grammar-lesson-actions">
      <button class="btn-primary" data-action="start-grammar-quiz">Start Quiz →</button>
    </div>
  `;
  renderGlCard();
  showScreen('grammar-lesson');
}

// ── Grammar lesson example cards ───────────────────────────────────
let _glCardIdx = 0;

function renderGlCard() {
  if (!currentGrammarLesson) return;
  const examples = currentGrammarLesson.examples;
  const ex = examples[_glCardIdx];
  const card = document.getElementById('gl-card');
  if (!card) return;
  card.classList.remove('flipped');
  document.getElementById('gl-card-front').innerHTML =
    `<div class="ge-bengali">${ex.bengali}</div>`;
  document.getElementById('gl-card-back').innerHTML =
    `<div class="ge-roman">${ex.roman}</div><div class="ge-english">${ex.english}</div>`;
  document.getElementById('gl-card-counter').textContent =
    ((_glCardIdx + 1) + ' / ' + examples.length);
  document.getElementById('gl-card-hint').textContent = 'Tap card to reveal';
  document.getElementById('gl-prev-btn').style.visibility = _glCardIdx === 0 ? 'hidden' : 'visible';
  document.getElementById('gl-next-btn').style.visibility =
    _glCardIdx >= examples.length - 1 ? 'hidden' : 'visible';
}

function flipGlCard() {
  const card = document.getElementById('gl-card');
  if (!card) return;
  card.classList.toggle('flipped');
  const hint = document.getElementById('gl-card-hint');
  if (hint) hint.textContent = card.classList.contains('flipped') ? '' : 'Tap card to reveal';
}

function prevGlCard() {
  if (_glCardIdx > 0) { _glCardIdx--; renderGlCard(); }
}

function nextGlCard() {
  if (!currentGrammarLesson) return;
  if (_glCardIdx < currentGrammarLesson.examples.length - 1) { _glCardIdx++; renderGlCard(); }
}

// ════════════════════════════════════════
//  GRAMMAR QUIZ
// ════════════════════════════════════════
let gqQuestions = [];
let gqIndex = 0;
let gqCorrect = 0;
let gqAnswered = false;
let gqIsMixed = false;
let gqWordOrder = [];  // current word-order answer
let gqMissed = [];

function startGrammarQuiz(options = {}) {
  const hasScopedQuestions = Array.isArray(options.questions) && options.questions.length > 0;
  if (!hasScopedQuestions && !currentGrammarLesson) return;
  gqIsMixed = false;
  gqQuestions = hasScopedQuestions ? [...options.questions] : [...currentGrammarLesson.quiz];
  gqIndex = 0;
  gqCorrect = 0;
  gqMissed = [];
  _quizStartTime = Date.now();
  const defaultTitle = currentGrammarLesson ? currentGrammarLesson.title + ' Quiz' : 'Grammar Quiz';
  document.getElementById('gq-title').textContent = options.title || defaultTitle;
  showScreen('grammar-quiz');
  renderGrammarQuestion();
  updateStreak();
}

function renderGrammarQuestion() {
  if (gqIndex >= gqQuestions.length) {
    showGrammarResults();
    return;
  }
  gqAnswered = false;
  gqWordOrder = [];
  const q = gqQuestions[gqIndex];

  document.getElementById('gq-progress-fill').style.width =
    ((gqIndex / gqQuestions.length) * 100) + '%';
  document.getElementById('gq-score').textContent = gqCorrect + ' / ' + gqIndex;

  const qa = document.getElementById('gq-question-area');
  const aa = document.getElementById('gq-answer-area');
  const fb = document.getElementById('gq-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  document.getElementById('gq-next-btn').className = 'btn-primary quiz-next-btn';
  document.getElementById('gq-rating-area').classList.remove('show');
  _pendingRating = null;

  // Build question area based on type
  if (q.type === 'translate-mc') {
    if (q.bengali) {
      qa.innerHTML = `
        <div class="quiz-prompt">${q.prompt}</div>
        <div class="vq-bengali">${q.bengali}</div>
        ${q.roman ? '<div class="vq-hint">' + q.roman + '</div>' : ''}
      `;
    } else {
      qa.innerHTML = `<div class="quiz-prompt">${q.prompt}</div>`;
    }
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) =>
        `<button class="mc-btn" data-answer="${escapeStr(opt)}" data-action="answer-mc-grammar">${opt}<span class="mc-key-hint">[${i+1}]</span></button>`
      ).join('') + '</div>' +
      "<button class=\"idk-btn\" data-action=\"dont-know-grammar\">I don't know</button>";
    attachQuizKeyHandler('gq');

  } else if (q.type === 'fib') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div style="font-family:'Noto Sans Bengali',sans-serif;font-size:1.5rem;margin:12px 0">${q.sentence}</div>
      ${q.roman ? '<div class="vq-hint">' + q.roman + '</div>' : ''}
      ${q.english ? '<div class="vq-hint">' + q.english + '</div>' : ''}
    `;
    const gqKbdHtml = getFibMode() !== 'latin'
      ? `<button class="bng-kbd-toggle" data-action="show-kbd" data-input="gq-fib-input">বাং ▲</button>` : '';
    aa.innerHTML = `<div class="fib-area">
      <input type="text" class="fib-input" id="gq-fib-input" placeholder="Type your answer…"
        autocomplete="off" autocapitalize="off">
      <button class="btn-primary fib-submit" data-action="answer-grammar-fib">Check</button>
      ${gqKbdHtml}
    </div>
    <button class="idk-btn" data-action="dont-know-grammar">I don't know</button>`;
    setTimeout(() => document.getElementById('gq-fib-input')?.focus(), 100);

  } else if (q.type === 'word-order') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      ${q.english ? '<div class="vq-hint">' + q.english + '</div>' : ''}
    `;
    const shuffled = shuffle([...q.words]);
    aa.innerHTML = `<div class="word-order-area">
      <div class="answer-area-wo" id="gq-answer-wo"></div>
      <div class="word-tiles" id="gq-word-tiles">
        ${shuffled.map((w, i) => `<div class="word-tile" data-idx="${i}" data-word="${w}" data-action="select-word-tile">${w}</div>`).join('')}
      </div>
      <button class="btn-primary wo-check-btn" data-action="check-word-order">Check Order</button>
    </div>
    <button class="idk-btn" data-action="dont-know-grammar">I don't know</button>`;

  } else if (q.type === 'error-spot') {
    qa.innerHTML = `<div class="quiz-prompt">${q.prompt}</div>`;
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) =>
        `<button class="mc-btn" data-answer="${escapeStr(opt)}" data-action="answer-mc-grammar">${opt}<span class="mc-key-hint">[${i+1}]</span></button>`
      ).join('') + '</div>' +
      "<button class=\"idk-btn\" data-action=\"dont-know-grammar\">I don't know</button>";
    attachQuizKeyHandler('gq');
  }
}

function answerGrammarMC(btn, chosen) {
  if (gqAnswered) return;
  gqAnswered = true;
  const q = gqQuestions[gqIndex];
  const correct = chosen === q.correct;
  document.querySelectorAll('#gq-answer-area .mc-btn').forEach(b => {
    b.classList.add('disabled');
    if (b.dataset.answer === q.correct) b.classList.add('reveal-correct');
  });
  btn.classList.add(correct ? 'correct' : 'wrong');
  const lessonId = q._lessonId || currentGrammarLesson.id;
  const qIdx = q._qIdx != null ? q._qIdx : gqIndex;
  const gKey = 'g:' + lessonId + ':' + qIdx;
  if (correct) {
    gqCorrect++; addXP(10);
    showGrammarFeedback(true, q.explanation || q.correct);
    showRatingButtons(gKey, 'gq-rating-area', 'gq-next-btn', ['g:' + lessonId]);
  } else {
    _recordMiss(gqMissed, q);
    _trackMistake(gKey, 'grammar');
    applyFsrsRating(gKey, FSRS_AGAIN);
    _trackLastSeen(gKey);
    _trackLastSeen('g:' + lessonId);
    saveProgress();
    checkAchievements();
    showGrammarFeedback(false, q.explanation || q.correct);
    document.getElementById('gq-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function answerGrammarFIB() {
  if (gqAnswered) return;
  const input = document.getElementById('gq-fib-input');
  if (!input) return;
  const rawInput = input.value.trim();
  const val = rawInput.toLowerCase();
  if (!val) return;
  gqAnswered = true;
  const q = gqQuestions[gqIndex];
  const normVal = _normRoman(val);
  const fibMode = getFibMode();
  // Bengali-only mode: only accept Bengali script matches
  const correct = fibMode === 'bengali'
    ? q.acceptable.some(a => _isBengali(a) && a === rawInput)
    : (q.acceptable.some(a => a.toLowerCase() === val || _normRoman(a) === normVal) ||
       q.acceptable.some(a => a === rawInput));
  input.classList.add(correct ? 'correct' : 'wrong');
  const lessonId = q._lessonId || currentGrammarLesson.id;
  const qIdx = q._qIdx != null ? q._qIdx : gqIndex;
  const gFibKey = 'g:' + lessonId + ':' + qIdx;
  if (correct) {
    gqCorrect++; addXP(15);
    showGrammarFeedback(true, q.answer, false);
    showRatingButtons(gFibKey, 'gq-rating-area', 'gq-next-btn', ['g:' + lessonId]);
  } else {
    _showInlineAnswer('gq-answer-area', q.answer);
    _recordMiss(gqMissed, q);
    _trackMistake(gFibKey, 'grammar');
    applyFsrsRating(gFibKey, FSRS_AGAIN);
    _trackLastSeen(gFibKey);
    _trackLastSeen('g:' + lessonId);
    saveProgress();
    checkAchievements();
    showGrammarFeedback(false, q.answer, q.explanation);
    document.getElementById('gq-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function selectWordTile(tile) {
  if (gqAnswered) return;
  const word = tile.dataset.word;
  tile.classList.add('used');
  gqWordOrder.push(word);
  const ansArea = document.getElementById('gq-answer-wo');
  const placed = document.createElement('div');
  placed.className = 'word-tile';
  placed.textContent = word;
  placed.dataset.srcIdx = tile.dataset.idx;
  placed.onclick = function() { removeWordTile(this); };
  ansArea.appendChild(placed);
}

function removeWordTile(placed) {
  if (gqAnswered) return;
  const srcIdx = placed.dataset.srcIdx;
  const word = placed.textContent;
  // Re-enable source tile
  const tiles = document.querySelectorAll('#gq-word-tiles .word-tile');
  tiles.forEach(t => { if (t.dataset.idx === srcIdx) t.classList.remove('used'); });
  gqWordOrder = gqWordOrder.filter((_, i) => {
    // Remove the first occurrence of this word
    return true;
  });
  // Rebuild gqWordOrder from current answer area
  placed.remove();
  gqWordOrder = [];
  document.querySelectorAll('#gq-answer-wo .word-tile').forEach(t => {
    gqWordOrder.push(t.textContent);
  });
}

function checkWordOrder() {
  if (gqAnswered) return;
  if (gqWordOrder.length === 0) return;
  gqAnswered = true;
  const q = gqQuestions[gqIndex];
  const correct = gqWordOrder.length === q.correct.length &&
    gqWordOrder.every((w, i) => w === q.correct[i]);
  const ansArea = document.getElementById('gq-answer-wo');
  ansArea.classList.add(correct ? 'correct-wo' : 'wrong-wo');
  // Disable remaining tiles
  document.querySelectorAll('#gq-word-tiles .word-tile').forEach(t => t.style.pointerEvents = 'none');
  document.querySelectorAll('#gq-answer-wo .word-tile').forEach(t => t.style.pointerEvents = 'none');
  const lessonId = q._lessonId || currentGrammarLesson.id;
  const qIdx = q._qIdx != null ? q._qIdx : gqIndex;
  const gWoKey = 'g:' + lessonId + ':' + qIdx;
  const woAnswer = q.correct.join(' ') + (q.roman ? ' (' + q.roman + ')' : '');
  if (correct) {
    gqCorrect++; addXP(15);
    showGrammarFeedback(true, woAnswer, false);
    showRatingButtons(gWoKey, 'gq-rating-area', 'gq-next-btn', ['g:' + lessonId]);
  } else {
    _showInlineAnswer('gq-answer-area', woAnswer);
    _recordMiss(gqMissed, q);
    _trackMistake(gWoKey, 'grammar');
    applyFsrsRating(gWoKey, FSRS_AGAIN);
    _trackLastSeen(gWoKey);
    _trackLastSeen('g:' + lessonId);
    saveProgress();
    checkAchievements();
    showGrammarFeedback(false, woAnswer, q.explanation);
    document.getElementById('gq-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function showGrammarFeedback(correct, answer, explanation) {
  const fb = document.getElementById('gq-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  let html = correct ? '✓ Correct! ' + escHtml(answer) : '✗ Correct answer: ' + escHtml(answer);
  if (!correct && explanation && explanation !== answer) html += '<div class="fb-example">' + escHtml(explanation) + '</div>';
  html += ' <button class="report-problem-btn active-quiz-grammar" data-action="report-problem" data-kind="grammar" title="Report a problem with this card">⚑ Report</button>';
  fb.innerHTML = html;
}

function dontKnowGrammar() {
  if (gqAnswered) return;
  gqAnswered = true;
  const q = gqQuestions[gqIndex];
  if (q.type === 'translate-mc' || q.type === 'error-spot') {
    document.querySelectorAll('#gq-answer-area .mc-btn').forEach(b => {
      b.classList.add('disabled');
      if (b.dataset.answer === q.correct) b.classList.add('reveal-correct');
    });
    showGrammarFeedback(false, q.explanation || q.correct);
  } else if (q.type === 'fib') {
    const input = document.getElementById('gq-fib-input');
    if (input) { input.disabled = true; input.classList.add('wrong'); }
    showGrammarFeedback(false, q.answer, q.explanation);
    _showInlineAnswer('gq-answer-area', q.answer);
  } else if (q.type === 'word-order') {
    document.querySelectorAll('#gq-word-tiles .word-tile').forEach(t => t.style.pointerEvents = 'none');
    document.querySelectorAll('#gq-answer-wo .word-tile').forEach(t => t.style.pointerEvents = 'none');
    const woAnswer = q.correct.join(' ') + (q.roman ? ' (' + q.roman + ')' : '');
    showGrammarFeedback(false, woAnswer, q.explanation);
    _showInlineAnswer('gq-answer-area', woAnswer);
  }
  _recordMiss(gqMissed, q);
  const lessonId = q._lessonId || currentGrammarLesson.id;
  const qIdx = q._qIdx != null ? q._qIdx : gqIndex;
  const gDkKey = 'g:' + lessonId + ':' + qIdx;
  _trackMistake(gDkKey, 'grammar');
  applyFsrsRating(gDkKey, FSRS_AGAIN);
  _trackLastSeen(gDkKey);
  _trackLastSeen('g:' + lessonId);
  saveProgress();
  checkAchievements();
  document.getElementById('gq-next-btn').className = 'btn-primary quiz-next-btn show';
}

function nextGrammarQuestion() {
  gqIndex++;
  renderGrammarQuestion();
}

// ════════════════════════════════════════
//  GRAMMAR RESULTS
// ════════════════════════════════════════
function showGrammarResults() {
  showScreen('grammar-results');
  const total = gqQuestions.length;
  const pct = Math.round((gqCorrect / total) * 100);
  setTimeout(() => {
    const offset = 452.4 * (1 - pct / 100);
    document.getElementById('gr-ring').style.strokeDashoffset = offset;
  }, 100);
  document.getElementById('gr-pct').textContent = pct + '%';
  const titles = pct === 100 ? 'Perfect! 🌟' : pct >= 80 ? 'Great job!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
  document.getElementById('gr-title').textContent = titles;
  const gqid = gqIsMixed ? 'grammar-mixed' : (currentGrammarLesson ? currentGrammarLesson.id : 'grammar');
  const ghist = progress.quizHistory || (progress.quizHistory = {});
  const gprev = ghist[gqid] || { best: -1 };
  if (pct > gprev.best) { ghist[gqid] = { best: pct }; saveProgress(); }
  const gSubParts = [`You scored ${gqCorrect}/${total}`];
  if (_quizStartTime) gSubParts.push('⏱ ' + _formatElapsed(Date.now() - _quizStartTime));
  if (pct > gprev.best && gprev.best >= 0) gSubParts.push('🌟 New best!');
  else if (gprev.best >= 0 && gprev.best > pct) gSubParts.push(`Best: ${gprev.best}%`);
  if (progress.streak > 1) gSubParts.push(`🔥 ${progress.streak} day streak`);
  document.getElementById('gr-sub').textContent = gSubParts.join(' · ');
  addXP(5);
  detachQuizKeyHandler();
  updateNav();
  checkAchievements();
  _renderMissedSection(gqMissed, 'gr-missed', 'gr-retry-missed');
  const gContBtn = document.getElementById('gr-continue-review');
  if (gContBtn) gContBtn.style.display = _reviewQueue.length > 0 ? 'inline-block' : 'none';
}

function retryGrammarQuiz() {
  if (gqIsMixed) {
    startGrammarMixedPractice();
  } else if (currentGrammarLesson) {
    startGrammarQuiz();
  }
}

function retryMissedGrammar() {
  if (!gqMissed || gqMissed.length === 0) return;
  const seen = new Set();
  const questions = [];
  gqMissed.forEach(m => {
    if (!m._q) return;
    const key = `${m._q._lessonId}:${m._q._qIdx}`;
    if (!seen.has(key)) {
      seen.add(key);
      questions.push(m._q);
    }
  });
  if (questions.length === 0) return;
  gqQuestions = questions;
  gqIndex = 0; gqCorrect = 0; gqMissed = [];
  document.getElementById('gq-title').textContent = 'Retry Missed';
  showScreen('grammar-quiz');
  renderGrammarQuestion();
}

// ════════════════════════════════════════
//  GRAMMAR MIXED PRACTICE
// ════════════════════════════════════════
function getGrammarMixedUnlockedCount() {
  // Unlock in waves of 3 lessons. A wave unlocks when 60% of questions
  // in the previous wave have mastery >= 2.
  const WAVE = 3;
  let unlocked = WAVE;
  while (unlocked < GRAMMAR_LESSONS.length) {
    const waveStart = unlocked - WAVE;
    const waveLessons = GRAMMAR_LESSONS.slice(waveStart, unlocked);
    let totalQ = 0, familiarQ = 0;
    waveLessons.forEach(l => {
      for (let i = 0; i < l.quiz.length; i++) {
        totalQ++;
        if (getGrammarMastery(l.id, i) >= 2) familiarQ++;
      }
    });
    if (familiarQ >= Math.ceil(totalQ * 0.6)) {
      unlocked = Math.min(unlocked + WAVE, GRAMMAR_LESSONS.length);
    } else {
      break;
    }
  }
  return unlocked;
}

function startGrammarMixedPractice() {
  const unlocked = getGrammarMixedUnlockedCount();
  const pool = GRAMMAR_LESSONS.slice(0, unlocked);

  // Collect all questions with lesson metadata, weighted by mastery
  let allQs = [];
  pool.forEach(lesson => {
    lesson.quiz.forEach((q, i) => {
      const m = getGrammarMastery(lesson.id, i);
      allQs.push({ ...q, _lessonId: lesson.id, _qIdx: i, _mastery: m });
    });
  });

  // Sort by mastery ascending (lowest first) with some randomness for mastered ones
  allQs.sort((a, b) => {
    const sa = a._mastery === 3 ? 3 + Math.random() * 2 : a._mastery === 0 ? 0.5 : a._mastery;
    const sb = b._mastery === 3 ? 3 + Math.random() * 2 : b._mastery === 0 ? 0.5 : b._mastery;
    return sa - sb;
  });

  gqQuestions = allQs.slice(0, 12);
  gqIndex = 0;
  gqCorrect = 0;
  gqMissed = [];
  gqIsMixed = true;
  _quizStartTime = Date.now();
  currentGrammarLesson = currentGrammarLesson || GRAMMAR_LESSONS[0]; // fallback
  document.getElementById('gq-title').textContent = 'Mixed Grammar Practice';
  showScreen('grammar-quiz');
  renderGrammarQuestion();
  updateStreak();
}

// ════════════════════════════════════════
//  PLACEMENT TEST
// ════════════════════════════════════════
let ptQuestions = [];
let ptIndex = 0;
let ptCorrect = 0;
let ptAnswered = false;
let ptWordOrder = [];
let ptDifficulty = 'beginner'; // 'beginner' | 'intermediate' | 'advanced'
let ptLength = 'medium';       // 'short' | 'medium' | 'long'
let ptStageResults = {
  alphabet:   { correct: 0, total: 0, waves: {} },
  vocabulary: { correct: 0, total: 0, waves: {} },
  grammar:    { correct: 0, total: 0, waves: {} },
  phrases:    { correct: 0, total: 0, waves: {} },
};
let ptPendingMastery = {};
let ptTotalExpected = 35; // may be less with early termination

function shouldShowPlacementCard() {
  if (progress.placementTaken) return false;
  const masteryKeys = Object.keys(progress.mastery);
  return masteryKeys.length < 10;
}

function buildPlacementQuestions() {
  const questions = [];

  // ── Config: wave pools and difficulty/length parameters ──
  // Each pool has 10 evenly-spaced sample points across the curriculum.
  const alphaPool   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const vocabPool   = [0, 5, 10, 20, 30, 50, 80, 120, 160, 200];
  const grammarPool = [0, 2, 5, 8, 11, 14, 17, 21, 25, 30];

  // Number of sample waves per stage by test length
  const waveCounts  = { short: 2, medium: 5, long: 6 };
  // Number of phrase situations sampled by test length
  const phraseCounts = { short: 2, medium: 5, long: 12 };
  // Starting offset into the pool by difficulty (skips easy content for advanced learners)
  const diffOffsets = { beginner: 0, intermediate: 2, advanced: 4 };

  const waveN   = waveCounts[ptLength]   || 5;
  const phraseN = phraseCounts[ptLength] || 5;
  const off     = diffOffsets[ptDifficulty] || 0;

  const alphaWaveIndices    = alphaPool.slice(off, off + waveN);
  const vocabWaveIndices    = vocabPool.slice(off, off + waveN);
  const grammarLessonIndices = grammarPool.slice(off, off + waveN);
  const phraseSituations    = PHRASES_WAVE_ORDER.slice(0, phraseN);

  // ── ALPHABET: 2 questions per wave (MC + FIB) ──
  alphaWaveIndices.forEach((waveIdx) => {
    const start = waveIdx * MIXED_WAVE_SIZE;
    const waveLetters = MIXED_CURRICULUM.slice(start, start + MIXED_WAVE_SIZE).filter(Boolean);
    if (waveLetters.length === 0) return;

    // Question 1: MC — name identification
    const l1 = waveLetters[Math.floor(Math.random() * waveLetters.length)];
    const correctName = l1.name.split(' ')[0];
    const distractors = generateDistractors(l1, ALL_LETTERS, 'name');
    questions.push({
      stage: 'alphabet', wave: waveIdx, type: 'mc',
      letter: l1.letter, letterType: l1.type,
      prompt: 'What is the name of this letter?',
      correct: correctName,
      options: shuffle([correctName, ...distractors]),
      fullAnswer: l1.name, letterObj: l1,
    });

    // Question 2: FIB — romanized form
    const l2 = waveLetters[(Math.floor(Math.random() * (waveLetters.length - 1)) + 1) % waveLetters.length];
    const acceptable = l2.romanized.split('/').map(s => s.trim().toLowerCase());
    acceptable.forEach(a => {
      acceptable.push(a.replace(/[ṭḍṇṣṛñ]/g, c =>
        ({ṭ:'t',ḍ:'d',ṇ:'n',ṣ:'sh',ṛ:'r',ñ:'ny'}[c]||c)));
    });
    questions.push({
      stage: 'alphabet', wave: waveIdx, type: 'fib',
      letter: l2.letter, letterType: l2.type,
      prompt: 'Type the romanized form of this letter:',
      acceptable: [...new Set(acceptable)],
      answer: l2.romanized,
      hint: 'Hint: ' + l2.name, letterObj: l2,
    });
  });

  // ── VOCABULARY: 2 questions per wave (MC + FIB) ──
  vocabWaveIndices.forEach((waveIdx) => {
    const start = waveIdx * VMIX_WAVE_SIZE;
    const waveWords = VMIX_CURRICULUM.slice(start, start + VMIX_WAVE_SIZE);
    if (waveWords.length === 0) return;

    // Question 1: MC — Bengali to English
    const w1 = waveWords[Math.floor(Math.random() * waveWords.length)];
    const correctEn = w1.english;
    const vocabDistractors = VOCAB_DATA.filter(x => x.lemma !== w1.lemma).map(x => x.english);
    const picks1 = shuffle([...new Set(vocabDistractors)].filter(x => x !== correctEn)).slice(0, 3);
    questions.push({
      stage: 'vocabulary', wave: waveIdx, type: 'mc',
      bengali: w1.lemma, roman: w1.roman,
      prompt: 'What does this word mean?',
      correct: correctEn,
      options: shuffle([correctEn, ...picks1]),
      word: w1,
    });

    // Question 2: FIB — type English meaning
    const w2 = waveWords[(Math.floor(Math.random() * (waveWords.length - 1)) + 1) % waveWords.length];
    const fibAcceptable = w2.english.toLowerCase().split('/').map(s => s.trim());
    w2.english.toLowerCase().split('/').forEach(s => {
      s.trim().split(' ').forEach(word => { if (word.length > 2) fibAcceptable.push(word); });
    });
    questions.push({
      stage: 'vocabulary', wave: waveIdx, type: 'fib',
      bengali: w2.lemma, roman: w2.roman,
      prompt: 'Type the English meaning:',
      acceptable: [...new Set(fibAcceptable)],
      answer: w2.english, hint: 'Romanized: ' + w2.roman,
      word: w2,
    });
  });

  // ── GRAMMAR: 2 questions per sampled lesson ──
  grammarLessonIndices.forEach((lessonIdx) => {
    const lesson = GRAMMAR_LESSONS[lessonIdx];
    if (!lesson) return;
    const quizPool = [...lesson.quiz];
    const shuffledQ = shuffle(quizPool);

    for (let i = 0; i < 2 && i < shuffledQ.length; i++) {
      const q = { ...shuffledQ[i] };
      q.stage = 'grammar';
      q.wave = lessonIdx;
      q._lessonId = lesson.id;
      q._qIdx = lesson.quiz.indexOf(shuffledQ[i]);
      questions.push(q);
    }
  });

  // ── PHRASES: 1 MC question per sampled situation ──
  phraseSituations.forEach((slug) => {
    const situationPhrases = PHRASES_DATA.filter(p => p.situation === slug);
    if (situationPhrases.length === 0) return;
    const phrase = situationPhrases[Math.floor(Math.random() * situationPhrases.length)];
    const distractorEnglish = PHRASES_DATA
      .filter(p => p.situation !== slug)
      .map(p => p.english)
      .filter((v, i, arr) => arr.indexOf(v) === i && v !== phrase.english);
    const picks = shuffle(distractorEnglish).slice(0, 3);
    questions.push({
      stage: 'phrases',
      wave: PHRASES_WAVE_ORDER.indexOf(slug),
      type: 'translate-mc',
      bengali: phrase.bengali,
      roman: phrase.roman,
      prompt: 'What does this phrase mean?',
      correct: phrase.english,
      options: shuffle([phrase.english, ...picks]),
      _phraseId: phrase.id,
      _situationSlug: slug,
    });
  });

  return questions;
}

function setPtDifficulty(d) {
  ptDifficulty = d;
  ['beginner', 'intermediate', 'advanced'].forEach(x => {
    document.getElementById('pt-diff-' + x)?.classList.toggle('active', x === d);
  });
}

function setPtLength(l) {
  ptLength = l;
  ['short', 'medium', 'long'].forEach(x => {
    document.getElementById('pt-len-' + x)?.classList.toggle('active', x === l);
  });
}

function startPlacementTest() {
  showScreen('placement-intro');
}

async function beginPlacementQuiz() {
  // Load all vocabulary packs before building questions so that the test can
  // sample from the full curriculum (wave indices up to 200 require pack 3).
  const beginBtn = document.getElementById('pt-begin-btn');
  const loadingMsg = document.getElementById('pt-loading-msg');
  if (beginBtn) beginBtn.disabled = true;
  if (loadingMsg) loadingMsg.style.display = '';

  try {
    await Promise.all([loadVocabPack(1), loadVocabPack(2), loadVocabPack(3)]);
  } catch (e) {
    console.warn('Some vocab packs failed to load for placement test:', e);
  }

  if (beginBtn) beginBtn.disabled = false;
  if (loadingMsg) loadingMsg.style.display = 'none';

  ptQuestions = buildPlacementQuestions();
  ptIndex = 0;
  ptCorrect = 0;
  ptAnswered = false;
  ptWordOrder = [];
  ptStageResults = {
    alphabet:   { correct: 0, total: 0, waves: {} },
    vocabulary: { correct: 0, total: 0, waves: {} },
    grammar:    { correct: 0, total: 0, waves: {} },
    phrases:    { correct: 0, total: 0, waves: {} },
  };
  ptPendingMastery = {};
  ptTotalExpected = ptQuestions.length;

  document.getElementById('tab-bar').style.display = 'none';
  showScreen('placement-quiz');
  renderPlacementQuestion();
}

async function confirmQuitPlacement() {
  if (await showConfirm('Quit the placement test? Your progress will be lost.')) {
    document.getElementById('tab-bar').style.display = '';
    switchTab(currentTab);
  }
}

function renderPlacementQuestion() {
  if (ptIndex >= ptQuestions.length) {
    showPlacementResults();
    return;
  }

  // Check early termination before rendering
  const q = ptQuestions[ptIndex];
  if (shouldSkipRemainingStage(q.stage, q.wave)) {
    skipToNextStage();
    return;
  }

  ptAnswered = false;
  ptWordOrder = [];

  // Update UI
  const stageNames = { alphabet: 'Alphabet', vocabulary: 'Vocabulary', grammar: 'Grammar', phrases: 'Phrases' };
  document.getElementById('pt-stage-label').textContent = stageNames[q.stage] || q.stage;
  document.getElementById('pt-progress-fill').style.width =
    ((ptIndex / ptTotalExpected) * 100) + '%';
  document.getElementById('pt-score').textContent = ptCorrect + ' / ' + ptIndex;

  const qa = document.getElementById('pt-question-area');
  const aa = document.getElementById('pt-answer-area');
  const fb = document.getElementById('pt-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  document.getElementById('pt-next-btn').className = 'btn-primary quiz-next-btn';

  renderPlacementQuestionByType(q, qa, aa);
}

function renderPlacementQuestionByType(q, qa, aa) {
  // ── Alphabet questions ──
  if (q.stage === 'alphabet') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="quiz-letter">${q.letter}</div>
      <button class="card-sound-btn" data-action="speak" data-text="${escapeStr(q.letter)}" aria-label="Play pronunciation">🔊</button>
    `;
    if (q.type === 'mc') {
      aa.innerHTML = '<div class="mc-options">' +
        q.options.map(opt =>
          `<button class="mc-btn" data-action="answer-mc-pt" data-answer="${escapeStr(opt)}">${opt}</button>`
        ).join('') + '</div>';
    } else {
      const ptAlphaHint = q.hint
        ? `<button class="hint-btn" data-action="show-hint">💡 Hint</button><div class="fib-hint" style="display:none">${q.hint}</div>`
        : '';
      aa.innerHTML = `<div class="fib-area">
        <input type="text" class="fib-input" id="pt-fib-input" placeholder="Type your answer…"
          autocomplete="off" autocapitalize="off">
        <button class="btn-primary fib-submit" data-action="answer-pt-fib">Check</button>
        ${ptAlphaHint}
      </div>`;
      setTimeout(() => document.getElementById('pt-fib-input')?.focus(), 100);
    }
    return;
  }

  // ── Vocabulary questions ──
  if (q.stage === 'vocabulary') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="vq-bengali">${q.bengali}</div>
      <div class="vq-hint">${q.roman}</div>
      <button class="card-sound-btn" data-action="speak" data-text="${escapeStr(q.bengali)}" aria-label="Play pronunciation">🔊</button>
    `;
    if (q.type === 'mc') {
      aa.innerHTML = '<div class="mc-options">' +
        q.options.map(opt =>
          `<button class="mc-btn" data-action="answer-mc-pt" data-answer="${escapeStr(opt)}">${opt}</button>`
        ).join('') + '</div>';
    } else {
      const ptVocabHint = q.hint
        ? `<button class="hint-btn" data-action="show-hint">💡 Hint</button><div class="fib-hint" style="display:none">${q.hint}</div>`
        : '';
      aa.innerHTML = `<div class="fib-area">
        <input type="text" class="fib-input" id="pt-fib-input" placeholder="Type your answer…"
          autocomplete="off" autocapitalize="off">
        <button class="btn-primary fib-submit" data-action="answer-pt-fib">Check</button>
        ${ptVocabHint}
      </div>`;
      setTimeout(() => document.getElementById('pt-fib-input')?.focus(), 100);
    }
    return;
  }

  // ── Phrases questions ──
  if (q.stage === 'phrases') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="vq-bengali">${q.bengali}</div>
      <div class="vq-hint">${q.roman}</div>
      <button class="card-sound-btn" data-action="speak" data-text="${escapeStr(q.bengali)}" aria-label="Play pronunciation">🔊</button>
    `;
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map(opt =>
        `<button class="mc-btn" data-action="answer-mc-pt" data-answer="${escapeStr(opt)}">${opt}</button>`
      ).join('') + '</div>';
    return;
  }

  // ── Grammar questions ──
  if (q.type === 'translate-mc' || q.type === 'error-spot') {
    if (q.bengali) {
      qa.innerHTML = `
        <div class="quiz-prompt">${q.prompt}</div>
        <div class="vq-bengali">${q.bengali}</div>
        ${q.roman ? '<div class="vq-hint">' + q.roman + '</div>' : ''}
        <button class="card-sound-btn" data-action="speak" data-text="${escapeStr(q.bengali)}" aria-label="Play pronunciation">🔊</button>
      `;
    } else {
      qa.innerHTML = `<div class="quiz-prompt">${q.prompt}</div>`;
    }
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map(opt =>
        `<button class="mc-btn" data-action="answer-mc-pt" data-answer="${escapeStr(opt)}">${opt}</button>`
      ).join('') + '</div>';

  } else if (q.type === 'fib') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div style="font-family:'Noto Sans Bengali',sans-serif;font-size:1.5rem;margin:12px 0">${q.sentence}</div>
      ${q.roman ? '<div class="vq-hint">' + q.roman + '</div>' : ''}
      ${q.english ? '<div class="vq-hint">' + q.english + '</div>' : ''}
    `;
    aa.innerHTML = `<div class="fib-area">
      <input type="text" class="fib-input" id="pt-fib-input" placeholder="Type your answer…"
        autocomplete="off" autocapitalize="off">
      <button class="btn-primary fib-submit" data-action="answer-pt-fib">Check</button>
    </div>`;
    setTimeout(() => document.getElementById('pt-fib-input')?.focus(), 100);

  } else if (q.type === 'word-order') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      ${q.english ? '<div class="vq-hint">' + q.english + '</div>' : ''}
    `;
    const shuffled = shuffle([...q.words]);
    aa.innerHTML = `<div class="word-order-area">
      <div class="answer-area-wo" id="pt-answer-wo"></div>
      <div class="word-tiles" id="pt-word-tiles">
        ${shuffled.map((w, i) => `<div class="word-tile" data-idx="${i}" data-word="${w}" data-action="pt-select-word-tile">${w}</div>`).join('')}
      </div>
      <button class="btn-primary wo-check-btn" data-action="check-pt-word-order">Check Order</button>
    </div>`;
  }
}

function answerPlacementMC(btn, chosen) {
  if (ptAnswered) return;
  ptAnswered = true;
  const q = ptQuestions[ptIndex];
  const correct = chosen === q.correct;
  document.querySelectorAll('#pt-answer-area .mc-btn').forEach(b => {
    b.classList.add('disabled');
    if (b.textContent === q.correct) b.classList.add('reveal-correct');
  });
  btn.classList.add(correct ? 'correct' : 'wrong');
  if (correct) ptCorrect++;
  const fb = document.getElementById('pt-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.textContent = correct
    ? '✓ Correct! ' + (q.fullAnswer || q.explanation || q.correct)
    : '✗ The answer is: ' + (q.fullAnswer || q.explanation || q.correct);
  document.getElementById('pt-next-btn').className = 'btn-primary quiz-next-btn show';
  recordPlacementAnswer(q, correct);
}

function answerPlacementFIB() {
  if (ptAnswered) return;
  const input = document.getElementById('pt-fib-input');
  if (!input) return;
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  ptAnswered = true;
  const q = ptQuestions[ptIndex];
  const normVal = _normRoman(val);
  const correct = q.acceptable.some(a => a.toLowerCase() === val || _normRoman(a) === normVal) ||
                  q.acceptable.some(a => a === input.value.trim());
  input.classList.add(correct ? 'correct' : 'wrong');
  if (correct) ptCorrect++;
  const fb = document.getElementById('pt-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.textContent = correct
    ? '✓ Correct! ' + (q.answer || q.correct)
    : '✗ The answer is: ' + (q.answer || q.correct);
  document.getElementById('pt-next-btn').className = 'btn-primary quiz-next-btn show';
  recordPlacementAnswer(q, correct);
}

function ptSelectWordTile(tile) {
  if (ptAnswered) return;
  tile.classList.add('used');
  ptWordOrder.push(tile.dataset.word);
  const ansArea = document.getElementById('pt-answer-wo');
  const placed = document.createElement('div');
  placed.className = 'word-tile';
  placed.textContent = tile.dataset.word;
  placed.dataset.srcIdx = tile.dataset.idx;
  placed.onclick = function() { ptRemoveWordTile(this); };
  ansArea.appendChild(placed);
}

function ptRemoveWordTile(placed) {
  if (ptAnswered) return;
  const srcIdx = placed.dataset.srcIdx;
  document.querySelectorAll('#pt-word-tiles .word-tile').forEach(t => {
    if (t.dataset.idx === srcIdx) t.classList.remove('used');
  });
  placed.remove();
  ptWordOrder = [];
  document.querySelectorAll('#pt-answer-wo .word-tile').forEach(t => {
    ptWordOrder.push(t.textContent);
  });
}

function checkPlacementWordOrder() {
  if (ptAnswered) return;
  if (ptWordOrder.length === 0) return;
  ptAnswered = true;
  const q = ptQuestions[ptIndex];
  const correct = ptWordOrder.length === q.correct.length &&
    ptWordOrder.every((w, i) => w === q.correct[i]);
  const ansArea = document.getElementById('pt-answer-wo');
  ansArea.classList.add(correct ? 'correct-wo' : 'wrong-wo');
  document.querySelectorAll('#pt-word-tiles .word-tile').forEach(t => t.style.pointerEvents = 'none');
  document.querySelectorAll('#pt-answer-wo .word-tile').forEach(t => t.style.pointerEvents = 'none');
  if (correct) ptCorrect++;
  const fb = document.getElementById('pt-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.textContent = correct
    ? '✓ Correct! ' + q.correct.join(' ')
    : '✗ Correct order: ' + q.correct.join(' ');
  document.getElementById('pt-next-btn').className = 'btn-primary quiz-next-btn show';
  recordPlacementAnswer(q, correct);
}

function recordPlacementAnswer(q, correct) {
  const sr = ptStageResults[q.stage];
  sr.total++;
  if (correct) sr.correct++;
  if (!sr.waves[q.wave]) sr.waves[q.wave] = { correct: 0, total: 0 };
  sr.waves[q.wave].total++;
  if (correct) sr.waves[q.wave].correct++;
}

function shouldSkipRemainingStage(stage, currentWave) {
  const sr = ptStageResults[stage];
  // Find the wave just before this one in our question set
  const stageQuestions = ptQuestions.filter(q => q.stage === stage);
  const waves = [...new Set(stageQuestions.map(q => q.wave))].sort((a, b) => a - b);
  const currentWavePos = waves.indexOf(currentWave);
  if (currentWavePos <= 0) return false; // first wave, can't skip

  const prevWave = waves[currentWavePos - 1];
  const prevResult = sr.waves[prevWave];
  if (prevResult && prevResult.total >= 2 && prevResult.correct === 0) {
    return true; // 0/2 on previous wave => skip remaining
  }
  return false;
}

function skipToNextStage() {
  const currentStage = ptQuestions[ptIndex].stage;
  // Skip all remaining questions in this stage
  while (ptIndex < ptQuestions.length && ptQuestions[ptIndex].stage === currentStage) {
    ptIndex++;
  }
  renderPlacementQuestion();
}

function nextPlacementQuestion() {
  ptIndex++;
  renderPlacementQuestion();
}

function showPlacementResults() {
  document.getElementById('tab-bar').style.display = '';
  computePlacementMastery();
  showScreen('placement-results');
  renderPlacementResultsUI();
}

function computePlacementMastery() {
  ptPendingMastery = {};

  // ── Alphabet ──
  const alphaWaves = Object.keys(ptStageResults.alphabet.waves).map(Number).sort((a, b) => a - b);
  let alphaHighWater = -1;
  for (const w of alphaWaves) {
    if (ptStageResults.alphabet.waves[w].correct >= 1) {
      alphaHighWater = w;
    }
  }
  if (alphaHighWater >= 0) {
    // Set mastery for all letters in waves up to and including high water mark
    const endIdx = (alphaHighWater + 1) * MIXED_WAVE_SIZE;
    for (let i = 0; i < endIdx && i < MIXED_CURRICULUM.length; i++) {
      const l = MIXED_CURRICULUM[i];
      if (!l) continue;
      const waveIdx = Math.floor(i / MIXED_WAVE_SIZE);
      const waveResult = ptStageResults.alphabet.waves[waveIdx];
      // Mastered (3) if their wave was tested and got 2/2, learning (2) otherwise
      const level = (waveResult && waveResult.correct === 2) ? 3 : 2;
      ptPendingMastery[l.letter] = Math.max(level, getMastery(l.letter));
    }
  }

  // ── Vocabulary ──
  const vocabWaves = Object.keys(ptStageResults.vocabulary.waves).map(Number).sort((a, b) => a - b);
  let vocabHighWater = -1;
  for (const w of vocabWaves) {
    if (ptStageResults.vocabulary.waves[w].correct >= 1) {
      vocabHighWater = w;
    }
  }
  if (vocabHighWater >= 0) {
    const endIdx = (vocabHighWater + 1) * VMIX_WAVE_SIZE;
    for (let i = 0; i < endIdx && i < VMIX_CURRICULUM.length; i++) {
      const w = VMIX_CURRICULUM[i];
      if (!w) continue;
      const waveIdx = Math.floor(i / VMIX_WAVE_SIZE);
      const waveResult = ptStageResults.vocabulary.waves[waveIdx];
      const level = (waveResult && waveResult.correct === 2) ? 3 : 2;
      ptPendingMastery[_vocabKey(w)] = Math.max(level, getVocabMastery(w));
    }
  }

  // ── Grammar ──
  const grammarWaves = Object.keys(ptStageResults.grammar.waves).map(Number).sort((a, b) => a - b);
  let grammarHighWater = -1;
  for (const w of grammarWaves) {
    if (ptStageResults.grammar.waves[w].correct >= 1) {
      grammarHighWater = w;
    }
  }
  if (grammarHighWater >= 0) {
    // Set mastery for all questions in lessons up to high water mark
    for (let li = 0; li <= grammarHighWater && li < GRAMMAR_LESSONS.length; li++) {
      const lesson = GRAMMAR_LESSONS[li];
      const waveResult = ptStageResults.grammar.waves[li];
      const level = (waveResult && waveResult.correct === 2) ? 3 : 2;
      for (let qi = 0; qi < lesson.quiz.length; qi++) {
        const key = 'g:' + lesson.id + ':' + qi;
        ptPendingMastery[key] = Math.max(level, getGrammarMastery(lesson.id, qi));
      }
    }
  }

  // ── Phrases ──
  // Each situation is tested with 1 question. For each situation answered correctly,
  // set all phrases in that situation to mastery 2 (seen/learning).
  Object.entries(ptStageResults.phrases.waves).forEach(([waveIdxStr, result]) => {
    if (result.correct >= 1) {
      const slug = PHRASES_WAVE_ORDER[parseInt(waveIdxStr)];
      if (!slug) return;
      PHRASES_DATA.filter(p => p.situation === slug).forEach(p => {
        const key = 'ph:' + p.id;
        ptPendingMastery[key] = Math.max(2, getPhraseMastery(p.id));
      });
    }
  });
}

function renderPlacementResultsUI() {
  const grid = document.getElementById('pt-results-grid');
  const circumference = 2 * Math.PI * 40;

  const stages = [
    { key: 'alphabet', label: 'Alphabet', icon: '🔤' },
    { key: 'vocabulary', label: 'Vocabulary', icon: '📖' },
    { key: 'grammar', label: 'Grammar', icon: '📝' },
    { key: 'phrases', label: 'Phrases', icon: '💬' },
  ];

  grid.innerHTML = stages.map(s => {
    const sr = ptStageResults[s.key];
    const pct = sr.total > 0 ? Math.round((sr.correct / sr.total) * 100) : 0;
    const offset = circumference * (1 - pct / 100);
    const waveCount = Object.keys(sr.waves).length;
    const passedWaves = Object.values(sr.waves).filter(w => w.correct >= 1).length;
    return `<div class="placement-module-result">
      <h4>${s.icon} ${s.label}</h4>
      <div class="pm-ring">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <circle class="bg-ring" cx="50" cy="50" r="40"/>
          <circle class="fg-ring" cx="50" cy="50" r="40"
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
            style="transition-delay:0.3s"/>
        </svg>
        <div class="pm-pct">${pct}%</div>
      </div>
      <div class="pm-detail">${sr.correct}/${sr.total} correct</div>
      <div class="pm-detail">${passedWaves}/${waveCount} levels passed</div>
    </div>`;
  }).join('');

  // Summary text
  const totalCorrect = Object.values(ptStageResults).reduce((sum, sr) => sum + sr.correct, 0);
  const totalAnswered = Object.values(ptStageResults).reduce((sum, sr) => sum + sr.total, 0);
  const pendingCount = Object.keys(ptPendingMastery).length;
  document.getElementById('pt-results-summary').textContent =
    `You answered ${totalCorrect}/${totalAnswered} correctly. ${pendingCount} items will be updated.`;
}

function applyPlacementResults() {
  if (!progress.fsrs) progress.fsrs = {};
  const sMap = { 1: 1, 2: 3, 3: 7, 4: 21 };
  // Bulk-write pending mastery and seed FSRS stability from placed level
  for (const [key, level] of Object.entries(ptPendingMastery)) {
    progress.mastery[key] = level;
    if (!progress.fsrs[key]) {
      progress.fsrs[key] = { s: sMap[level] || 1, d: 5, reps: level, lapses: 0 };
    }
  }
  progress.placementTaken = true;
  saveProgress();
  updateNav();

  // Show retake button
  document.getElementById('pt-retake-btn').style.display = '';

  switchTab('alphabet');
}

function discardPlacementResults() {
  progress.placementTaken = true;
  saveProgress();
  document.getElementById('tab-bar').style.display = '';
  switchTab('alphabet');
}

function updatePlacementRetakeButton() {
  const btn = document.getElementById('pt-retake-btn');
  if (progress.placementTaken) {
    btn.style.display = '';
  } else {
    btn.style.display = 'none';
  }
}

// ════════════════════════════════════════
//  PROFILE MANAGEMENT
// ════════════════════════════════════════
function showProfileScreen(forceShowPicker) {
  // Hide main app
  document.getElementById('main-nav').style.display = 'none';
  document.getElementById('tab-bar').style.display = 'none';
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  // Show profile screen
  document.getElementById('profile-screen').classList.add('active');
  renderProfileList(forceShowPicker);
}

function renderProfileList(forceShowPicker) {
  const users = _listUsers();

  const list = document.getElementById('profile-list');
  const inputWrap = document.getElementById('profile-input-wrap');

  // If no profiles at all, show create-first input (with no cancel)
  if (users.length === 0 && !forceShowPicker) {
    list.innerHTML = '';
    inputWrap.classList.add('active');
    document.getElementById('profile-cancel-btn').style.display = 'none';
    document.getElementById('profile-name-input').focus();
    document.querySelector('.profile-subtitle').textContent = 'Create your first profile';
    return;
  }

  // On first launch with exactly 1 profile, auto-select (skip picker)
  if (users.length === 1 && !forceShowPicker) {
    selectProfile(users[0].name);
    return;
  }

  // Show profile cards
  document.querySelector('.profile-subtitle').textContent = users.length > 0
    ? 'Choose your profile' : 'Create your first profile';
  inputWrap.classList.remove('active');
  list.innerHTML = '';

  for (const u of users) {
    const card = document.createElement('div');
    card.className = 'profile-card';
    const safeName = escapeHTML(u.name);
    const safeNameJs = u.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    card.innerHTML = `
      <div class="pc-select" data-action="select-profile" data-name="${safeNameJs}">
        <div class="pc-name">${safeName}</div>
        <div class="pc-stats">⭐ ${u.xp} XP &nbsp; 🔥 ${u.streak}</div>
      </div>
      <div class="pc-actions">
        <button class="pc-action-btn" data-action="rename-profile" data-name="${safeNameJs}" title="Rename profile">✏️</button>
        <button class="pc-action-btn" data-action="export-profile" data-name="${safeNameJs}" title="Download progress as JSON">⬇</button>
        <button class="pc-action-btn" data-action="copy-profile" data-name="${safeNameJs}" title="Copy progress to clipboard">📋</button>
        <button class="pc-action-btn pc-action-delete" data-action="delete-profile" data-name="${safeNameJs}" title="Delete profile">🗑</button>
      </div>
    `;
    list.appendChild(card);
  }

  // Add "New Profile" card
  const add = document.createElement('div');
  add.className = 'profile-add';
  add.onclick = showNewProfileInput;
  add.innerHTML = '<div class="pa-icon">+</div><div class="pa-label">New Profile</div>';
  list.appendChild(add);
}

function escapeHTML(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function showNewProfileInput() {
  document.getElementById('profile-input-wrap').classList.add('active');
  document.getElementById('profile-cancel-btn').style.display = '';
  document.getElementById('profile-name-input').value = '';
  document.getElementById('profile-name-input').focus();
}

function cancelNewProfile() {
  document.getElementById('profile-input-wrap').classList.remove('active');
}

async function renameProfile(oldName) {
  const newName = prompt('Rename profile "' + oldName + '" to:');
  if (!newName || !newName.trim()) return;
  const clean = newName.trim();
  if (!/^[\p{L}\p{N}\s\-]+$/u.test(clean)) { showAlert('Invalid name.'); return; }
  if (clean === oldName) return;
  if (_listUsers().some(u => u.name === clean)) { showAlert('A profile with that name already exists.'); return; }
  const oldKey = _lsKey(oldName);
  const data = localStorage.getItem(oldKey);
  if (!data) return;
  localStorage.setItem(_lsKey(clean), data);
  localStorage.removeItem(oldKey);
  if (currentUser === oldName) currentUser = clean;
  renderProfileList(true);
}

function createProfile() {
  const input = document.getElementById('profile-name-input');
  const name = input.value.trim();
  if (!name) { input.focus(); return; }
  if (!/^[\p{L}\p{N}\s\-]+$/u.test(name)) {
    showAlert('Name can only contain letters, numbers, spaces, and hyphens.');
    return;
  }
  currentUser = name;
  progress = { mastery:{}, xp:0, streak:0, lastDate:null, quizHistory:{} };
  saveProgress();
  enterApp();
}

function selectProfile(name) {
  currentUser = name;
  progress = loadProgress();
  enterApp();
}

function enterApp() {
  // Hide profile screen, show app
  document.getElementById('profile-screen').classList.remove('active');
  document.getElementById('main-nav').style.display = '';
  document.getElementById('tab-bar').style.display = '';
  migrateProgress();
  updateNav();
  updatePlacementRetakeButton();
  switchTab('alphabet');
  // Show onboarding for first-time users
  if (!progress.seenOnboarding) {
    document.getElementById('onboarding-modal').style.display = 'flex';
  }
}

function dismissOnboarding() {
  document.getElementById('onboarding-modal').style.display = 'none';
  progress.seenOnboarding = true;
  saveProgress();
}

function toggleConjTable() {
  const wrap = document.getElementById('conj-table-wrap');
  const btn  = document.getElementById('conj-toggle-btn');
  if (!wrap || !btn) return;
  const open = !wrap.hidden;
  wrap.hidden = open;
  btn.setAttribute('aria-expanded', String(!open));
}

function toggleReadingSection(btn, targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const open = el.classList.toggle('open');
  btn.textContent = open
    ? btn.textContent.replace('▼', '▲').replace('Show', 'Hide')
    : btn.textContent.replace('▲', '▼').replace('Hide', 'Show');
}

function openSettingsPanel() {
  updateProfileMenuHeader();
  _updateFibModeChips();
  _updateListenModeChips();
  _updateThemeSwatches();
  renderVoiceSelector();
  const statusEl = document.getElementById('slow-audio-status');
  if (statusEl) statusEl.textContent = _audioSlowMode ? 'On' : 'Off';
  const settingsBtn = document.getElementById('settings-slow-audio-btn');
  if (settingsBtn) settingsBtn.classList.toggle('active', _audioSlowMode);
  document.getElementById('settings-overlay').classList.add('open');
  document.addEventListener('keydown', _settingsEsc);
}
function closeSettingsPanel() {
  document.getElementById('settings-overlay').classList.remove('open');
  document.removeEventListener('keydown', _settingsEsc);
}
function _settingsEsc(e) { if (e.key === 'Escape') closeSettingsPanel(); }

function openHelpPanel() {
  document.getElementById('help-overlay').classList.add('open');
  document.addEventListener('keydown', _helpEsc);
}
function closeHelpPanel() {
  document.getElementById('help-overlay').classList.remove('open');
  document.removeEventListener('keydown', _helpEsc);
}
function _helpEsc(e) { if (e.key === 'Escape') closeHelpPanel(); }

// ── Debug: Unlock All & Mark Mastered ───────────────────────────────
async function unlockAllContent(btn) {
  if (!await showConfirm('This will mark all 50 letters and all 4,399+ words as fully mastered. This cannot be undone.\n\nContinue?')) return;
  btn.disabled = true;
  btn.textContent = 'Loading packs…';
  await Promise.all([1, 2, 3].map(n => loadVocabPack(n)));
  for (const w of VMIX_CURRICULUM) progress.mastery[_vocabKey(w)] = 3;
  for (const item of MIXED_CURRICULUM) progress.mastery[item.letter] = 3;
  saveProgress();
  closeSettingsPanel();
  renderHome();
  renderVocabHome();
}

// ── FIB Input Mode ──────────────────────────────────────────────────
function getFibMode() { return localStorage.getItem('bengali_fib_mode') || 'latin'; }
function setFibMode(mode) {
  localStorage.setItem('bengali_fib_mode', mode);
  _updateFibModeChips();
  if (mode === 'latin') { document.getElementById('bng-kbd').classList.remove('open'); }
}
function _updateFibModeChips() {
  const mode = getFibMode();
  ['latin','mixed','bengali'].forEach(m => {
    const el = document.getElementById('fibmode-' + m);
    if (el) el.classList.toggle('active', m === mode);
  });
}

// ── Listening Mode ─────────────────────────────────────────────────
function getListeningMode() { return localStorage.getItem('bengali_listening_mode') || 'text'; }
function setListeningMode(mode) {
  localStorage.setItem('bengali_listening_mode', mode);
  _updateListenModeChips();
}
function _updateListenModeChips() {
  const mode = getListeningMode();
  ['text','mixed','listening'].forEach(m => {
    const el = document.getElementById('listenmode-' + m);
    if (el) el.classList.toggle('active', m === mode);
  });
}

// ── Cultural theme palette ───────────────────────────────────────────────────
function setThemePalette(name) {
  document.documentElement.dataset.palette = (name === 'sundarbans') ? '' : name;
  localStorage.setItem('bengali_palette', name);
  _updateThemeSwatches();
}
function _updateThemeSwatches() {
  const current = localStorage.getItem('bengali_palette') || 'sundarbans';
  document.querySelectorAll('.theme-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.palette === current);
  });
}

function startLetterListening() {
  const seen = ALL_LETTERS.filter(l => getMastery(l.letter) > 0);
  const letters = seen.length >= 4 ? seen : ALL_LETTERS.slice(0, 11);
  const mod = { id: 'listening-letters', title: '🎧 Letter Sounds', letters, isMixed: false };
  currentModule = mod; quizModuleRef = mod;
  generateQuiz(letters, 'listening');
  quizIndex = 0; quizCorrect = 0; quizMissed = [];
  document.getElementById('quiz-title').textContent = '🎧 Letter Sounds';
  showScreen('quiz'); renderQuestion();
}
function startVocabListening() {
  const seen = VOCAB_DATA.filter(w => getVocabMastery(w) > 0);
  const words = seen.length >= 4 ? seen : VOCAB_DATA.slice(0, 20);
  generateVocabQuiz(words, 'listening');
  vqIndex = 0; vqCorrect = 0; vqMissed = [];
  document.getElementById('vq-title').textContent = '🎧 Vocabulary';
  showScreen('vocab-quiz'); renderVocabQuestion();
}

// ── Bengali Soft Keyboard ───────────────────────────────────────────
let _activeFibInputId = null;
function _isBengali(s) { return /[\u0980-\u09FF]/.test(s); }

function toggleBengaliKbd() {
  document.getElementById('bng-kbd').classList.toggle('open');
}
function showBengaliKbd(inputId) {
  _activeFibInputId = inputId;
  if (getFibMode() !== 'latin') document.getElementById('bng-kbd').classList.add('open');
}
function hideBengaliKbd() {
  document.getElementById('bng-kbd').classList.remove('open');
}
function appendBengaliChar(char) {
  const input = document.getElementById(_activeFibInputId);
  if (!input) return;
  if (char === '⌫') {
    input.value = input.value.slice(0, -1);
  } else if (char === '⎵') {
    input.value += ' ';
  } else if (char === '✕') {
    input.value = '';
  } else {
    input.value += char;
  }
  input.focus();
}

function switchProfile() {
  // Flush pending save, then show profile picker
  if (_saveTimer) { clearTimeout(_saveTimer); _flushSave(); }
  currentUser = null;
  progress = { mastery:{}, xp:0, streak:0, lastDate:null, quizHistory:{} };
  closeSettingsPanel();
  showProfileScreen(true);
}

async function deleteCurrentProfile() {
  closeSettingsPanel();
  if (!await showConfirm('Delete profile "' + currentUser + '"? All progress will be lost.')) return;
  if (_saveTimer) { clearTimeout(_saveTimer); _saveTimer = null; }
  _deleteProgressLS(currentUser);
  currentUser = null;
  progress = { mastery:{}, xp:0, streak:0, lastDate:null, quizHistory:{} };
  showProfileScreen(true);
}

// Per-profile export/delete from the profile picker screen
function exportProfileData(name) {
  const data = _loadProgressLS(name) || {};
  const envelope = { exportedBy: name, exportedAt: new Date().toISOString(), version: 1, progress: data };
  const blob = new Blob([JSON.stringify(envelope, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'bengali-progress-' + name.replace(/\s+/g, '-') + '-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function copyProfileDataToClipboard(name) {
  const data = _loadProgressLS(name) || {};
  const envelope = { exportedBy: name, exportedAt: new Date().toISOString(), version: 1, progress: data };
  const json = JSON.stringify(envelope, null, 2);
  navigator.clipboard.writeText(json).then(() => {
    showAlert('Progress for "' + name + '" copied to clipboard.');
  }).catch(() => showAlert('Could not copy to clipboard.'));
}

async function deleteProfile(name) {
  if (!await showConfirm('Delete profile "' + name + '"? All progress will be lost.')) return;
  _deleteProgressLS(name);
  if (name === currentUser) {
    if (_saveTimer) { clearTimeout(_saveTimer); _saveTimer = null; }
    currentUser = null;
    progress = { mastery:{}, xp:0, streak:0, lastDate:null, quizHistory:{} };
  }
  renderProfileList(true);
}

// ════════════════════════════════════════
//  EXPORT / IMPORT
// ════════════════════════════════════════
async function exportProgress() {
  closeSettingsPanel();
  if (_saveTimer) { clearTimeout(_saveTimer); _flushSave(); }
  const filter = await _showModal('Export Progress — select which data to include:', [
    { label: 'All Data',       cls: 'app-modal-btn-ok',     value: 'all' },
    { label: 'Alphabet',       cls: 'app-modal-btn-cancel', value: 'alphabet' },
    { label: 'Vocabulary',     cls: 'app-modal-btn-cancel', value: 'vocab' },
    { label: 'Grammar',        cls: 'app-modal-btn-cancel', value: 'grammar' },
    { label: 'Phrases',        cls: 'app-modal-btn-cancel', value: 'phrases' },
  ]);
  if (!filter) return;
  _doExportProgress(filter);
}

function _doExportProgress(filter) {
  const allLetterKeys = new Set(ALL_LETTERS.map(l => l.letter));
  let mastery = progress.mastery;
  if (filter === 'alphabet') {
    mastery = Object.fromEntries(Object.entries(progress.mastery).filter(([k]) => allLetterKeys.has(k)));
  } else if (filter === 'vocab') {
    mastery = Object.fromEntries(Object.entries(progress.mastery).filter(([k]) => k.startsWith('v:')));
  } else if (filter === 'grammar') {
    mastery = Object.fromEntries(Object.entries(progress.mastery).filter(([k]) => k.startsWith('g:')));
  } else if (filter === 'phrases') {
    mastery = Object.fromEntries(Object.entries(progress.mastery).filter(([k]) => k.startsWith('ph:')));
  }
  const filteredProgress = filter === 'all' ? progress : { ...progress, mastery };
  const data = {
    exportedBy: currentUser,
    exportedAt: new Date().toISOString(),
    version: 1,
    filter,
    progress: filteredProgress,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const dateSuffix = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = 'bengali-progress-' + currentUser.replace(/\s+/g, '-') + '-' + filter + '-' + dateSuffix + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importProgress() {
  closeSettingsPanel();
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        // Accept either a raw progress object or an exported envelope
        const data = parsed.version === 1 && parsed.progress ? parsed.progress : parsed;
        if (!data || typeof data.mastery !== 'object') {
          showAlert('Invalid progress file.');
          return;
        }
        if (!await showConfirm('Import this progress data? It will overwrite your current progress for "' + currentUser + '".')) return;
        progress = data;
        _flushSave();
        updateNav();
        renderHome();
        showAlert('Progress imported successfully!');
      } catch(err) {
        showAlert('Could not read file: ' + err.message);
      }
    };
    reader.readAsText(file);
  };
  document.body.appendChild(input);
  input.click();
  document.body.removeChild(input);
}

// Handle Enter key in profile name input
document.getElementById('profile-name-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') createProfile();
});

// ════════════════════════════════════════
//  PROFILE MENU HELPERS
// ════════════════════════════════════════
function updateProfileMenuHeader() {
  const el = document.getElementById('pmh-name');
  const st = document.getElementById('pmh-stats');
  if (el) el.textContent = currentUser || '';
  if (st) st.innerHTML = `<span>⭐ ${progress.xp} XP</span><span>🔥 ${progress.streak}</span><span>🏅 ${(progress.achievements||[]).length}</span>`;
}

// ════════════════════════════════════════
//  PROGRESS ADJUSTMENT PANEL
// ════════════════════════════════════════
let _progOpenSections = new Set(['alphabet']); // alphabet expanded by default
let _progOpenGroups   = new Set();

function openProgressPanel() {
  renderProgressPanel();
  closeSettingsPanel();
  document.getElementById('progress-overlay').classList.add('open');
  document.addEventListener('keydown', _progressEsc);
}
function closeProgressPanel() {
  document.getElementById('progress-overlay').classList.remove('open');
  document.removeEventListener('keydown', _progressEsc);
}
function _progressEsc(e) { if (e.key === 'Escape') closeProgressPanel(); }

function toggleProgSection(id) {
  _progOpenSections.has(id) ? _progOpenSections.delete(id) : _progOpenSections.add(id);
  renderProgressPanel();
}
function toggleProgGroup(id) {
  _progOpenGroups.has(id) ? _progOpenGroups.delete(id) : _progOpenGroups.add(id);
  renderProgressPanel();
}

function cycleLetterMastery(letter) {
  const cur = getMastery(letter);
  progress.mastery[letter] = (cur + 1) % 5;
  saveProgress();
  renderProgressPanel();
}
function cycleVocabChipMastery(bengali) {
  const cur = getVocabMastery(bengali);
  progress.mastery[_vocabKey(bengali)] = (cur + 1) % 5;
  saveProgress();
  renderProgressPanel();
}
function setGrammarLessonLevel(lessonId, level) {
  const lesson = GRAMMAR_LESSONS.find(l => l.id === lessonId);
  if (!lesson) return;
  lesson.quiz.forEach((_, i) => { progress.mastery['g:' + lessonId + ':' + i] = level; });
  saveProgress();
  renderProgressPanel();
}
function resetPhrasesSituation(slug) {
  PHRASES_DATA.filter(p => p.situation === slug).forEach(p => {
    delete progress.mastery['ph:' + p.id];
  });
  saveProgress();
  renderProgressPanel();
}

function renderProgressPanel() {
  document.getElementById('progress-body').innerHTML =
    _buildAlphabetSection() + _buildVocabSection() + _buildGrammarSection() + _buildPhrasesSection();
}

function _buildAlphabetSection() {
  const allLetters = ALL_LETTERS;
  const totalAll = allLetters.length;
  const masteredAll = allLetters.filter(l => getMastery(l.letter) >= 3).length;
  const isOpen = _progOpenSections.has('alphabet');
  const arrowCls = isOpen ? 'open' : '';

  let html = `<div class="prog-section">
    <div class="prog-section-hdr" data-action="toggle-prog-section" data-section="alphabet">
      <span class="prog-section-icon">🔤</span>
      <span class="prog-section-label">Alphabet</span>
      <span class="prog-section-summary">${masteredAll}/${totalAll} mastered</span>
      <span class="prog-section-arrow ${arrowCls}">▼</span>
    </div>`;

  if (isOpen) {
    MODULES.forEach(mod => {
      if (mod.isChart || mod.isMixed || !mod.letters) return;
      const letters = mod.letters;
      const masteredCount = letters.filter(l => getMastery(l.letter) >= 3).length;
      const total = letters.length;
      const pct = total > 0 ? Math.round((masteredCount / total) * 100) : 0;
      const grpOpen = _progOpenGroups.has(mod.id);
      const grpArrowCls = grpOpen ? 'open' : '';

      html += `<div class="prog-group">
        <div class="prog-group-hdr" data-action="toggle-prog-group" data-group="${mod.id}">
          <span class="prog-group-label">${mod.title}</span>
          <div class="prog-group-bar"><div class="prog-group-bar-fill" style="width:${pct}%"></div></div>
          <span class="prog-group-count">${masteredCount}/${total}</span>
          <span class="prog-group-arrow ${grpArrowCls}">▼</span>
        </div>`;

      if (grpOpen) {
        html += `<div class="prog-chips">`;
        letters.forEach(l => {
          const lvl = getMastery(l.letter);
          const safeL = l.letter.replace(/'/g, "\\'");
          html += `<div class="prog-chip" data-level="${lvl}" data-action="cycle-letter-mastery" data-letter="${safeL}" title="${l.roman || ''}">${l.letter}</div>`;
        });
        html += `</div>`;
      }
      html += `</div>`;
    });
  }
  html += `</div>`;
  return html;
}

function _buildVocabSection() {
  const cats = [...new Set(VOCAB_DATA.map(w => w.category))];
  const totalVocab = VOCAB_TOTAL_WORDS;
  const masteredVocab = Object.entries(progress.mastery).filter(([k, v]) => k.startsWith('v:') && v >= 3).length;
  const isOpen = _progOpenSections.has('vocab');
  const arrowCls = isOpen ? 'open' : '';

  let html = `<div class="prog-section">
    <div class="prog-section-hdr" data-action="toggle-prog-section" data-section="vocab">
      <span class="prog-section-icon">📖</span>
      <span class="prog-section-label">Vocabulary</span>
      <span class="prog-section-summary">${masteredVocab}/${totalVocab} mastered</span>
      <span class="prog-section-arrow ${arrowCls}">▼</span>
    </div>`;

  if (isOpen) {
    cats.forEach(cat => {
      const words = VOCAB_DATA.filter(w => w.category === cat);
      const masteredCount = words.filter(w => getVocabMastery(w) >= 3).length;
      const total = words.length;
      const pct = total > 0 ? Math.round((masteredCount / total) * 100) : 0;
      const grpId = 'vocab:' + cat;
      const grpOpen = _progOpenGroups.has(grpId);
      const grpArrowCls = grpOpen ? 'open' : '';

      html += `<div class="prog-group">
        <div class="prog-group-hdr" data-action="toggle-prog-group" data-group="${grpId}">
          <span class="prog-group-label">${cat}</span>
          <div class="prog-group-bar"><div class="prog-group-bar-fill" style="width:${pct}%"></div></div>
          <span class="prog-group-count">${masteredCount}/${total}</span>
          <span class="prog-group-arrow ${grpArrowCls}">▼</span>
        </div>`;

      if (grpOpen) {
        html += `<div class="prog-chips">`;
        words.forEach(w => {
          const lvl = getVocabMastery(w);
          const safeB = w.lemma.replace(/'/g, "\\'");
          const eng = (w.english || '').replace(/"/g, '&quot;');
          html += `<div class="prog-chip" data-level="${lvl}" data-action="cycle-vocab-mastery" data-lemma="${safeB}" title="${eng}">${w.lemma}</div>`;
        });
        html += `</div>`;
      }
      html += `</div>`;
    });
  }
  html += `</div>`;
  return html;
}

function _buildGrammarSection() {
  const totalLessons = GRAMMAR_LESSONS.length;
  const masteredLessons = GRAMMAR_LESSONS.filter(l => getLessonProgress(l).pct === 100).length;
  const isOpen = _progOpenSections.has('grammar');
  const arrowCls = isOpen ? 'open' : '';

  let html = `<div class="prog-section">
    <div class="prog-section-hdr" data-action="toggle-prog-section" data-section="grammar">
      <span class="prog-section-icon">📝</span>
      <span class="prog-section-label">Grammar</span>
      <span class="prog-section-summary">${masteredLessons}/${totalLessons} complete</span>
      <span class="prog-section-arrow ${arrowCls}">▼</span>
    </div>`;

  if (isOpen) {
    GRAMMAR_LESSONS.forEach(lesson => {
      const lp = getLessonProgress(lesson);
      const safeId = lesson.id.replace(/'/g, "\\'");
      html += `<div class="prog-grammar-row">
        <span class="prog-grammar-num">${lesson.number}</span>
        <div class="prog-grammar-info">
          <div class="prog-grammar-title">${lesson.title}</div>
          <div class="prog-grammar-desc">${lesson.shortDesc || ''}</div>
        </div>
        <div class="prog-grammar-bar"><div class="prog-grammar-bar-fill" style="width:${lp.pct}%"></div></div>
        <div class="prog-grammar-btns">
          <button class="prog-grammar-btn" data-action="set-lesson-level" data-id="${safeId}" data-level="0">Reset</button>
          <button class="prog-grammar-btn done" data-action="set-lesson-level" data-id="${safeId}" data-level="3">Done ✓</button>
        </div>
      </div>`;
    });
  }
  html += `</div>`;
  return html;
}

function _buildPhrasesSection() {
  const totalPhrases = PHRASES_DATA.length;
  const masteredPhrases = PHRASES_DATA.filter(p => getPhraseMastery(p.id) >= 3).length;
  const isOpen = _progOpenSections.has('phrases');
  const arrowCls = isOpen ? 'open' : '';

  let html = `<div class="prog-section">
    <div class="prog-section-hdr" data-action="toggle-prog-section" data-section="phrases">
      <span class="prog-section-icon">💬</span>
      <span class="prog-section-label">Phrases</span>
      <span class="prog-section-summary">${masteredPhrases}/${totalPhrases} mastered</span>
      <span class="prog-section-arrow ${arrowCls}">▼</span>
    </div>`;

  if (isOpen) {
    PHRASES_WAVE_ORDER.forEach(slug => {
      const sit = PHRASES_SITUATIONS.find(s => s.slug === slug);
      if (!sit) return;
      const phrases = PHRASES_DATA.filter(p => p.situation === slug);
      const mastered = phrases.filter(p => getPhraseMastery(p.id) >= 3).length;
      const pct = phrases.length ? Math.round((mastered / phrases.length) * 100) : 0;
      html += `<div class="prog-grammar-row">
        <div class="prog-grammar-info">
          <div class="prog-grammar-title">${sit.title}</div>
          <div class="prog-grammar-desc">${mastered}/${phrases.length} mastered</div>
        </div>
        <div class="prog-grammar-bar"><div class="prog-grammar-bar-fill" style="width:${pct}%"></div></div>
        <div class="prog-grammar-btns">
          <button class="prog-grammar-btn" data-action="reset-phrases-situation" data-slug="${slug}">Reset</button>
        </div>
      </div>`;
    });
  }
  html += `</div>`;
  return html;
}

// ════════════════════════════════════════
//  LIGHT MODE TOGGLE
// ════════════════════════════════════════
function toggleTheme() {
  const isLight = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = isLight ? '' : 'light';
  document.getElementById('nav-theme-btn').textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('bengali_theme', isLight ? 'dark' : 'light');
}
(function initTheme() {
  const saved = localStorage.getItem('bengali_theme');
  if (saved === 'light') {
    document.documentElement.dataset.theme = 'light';
    const btn = document.getElementById('nav-theme-btn');
    if (btn) btn.textContent = '🌙';
  }
  const palette = localStorage.getItem('bengali_palette');
  if (palette && palette !== 'sundarbans') {
    document.documentElement.dataset.palette = palette;
  }
})();

// ════════════════════════════════════════
//  MASTERY LEGEND TOGGLE
// ════════════════════════════════════════
function toggleMasteryLegend() {
  const leg = document.getElementById('mastery-legend');
  if (leg) leg.style.display = leg.style.display === 'none' ? '' : 'none';
}

// ════════════════════════════════════════
//  PROGRESS OBJECT MIGRATION
// (called after loading progress from localStorage)
// ════════════════════════════════════════
function migrateProgress() {
  if (!progress.achievements) progress.achievements = [];
  if (!progress.practiceLog) progress.practiceLog = {};
  if (!progress.lastSeen) progress.lastSeen = {};
  if (!progress.fsrs) {
    progress.fsrs = {};
    // Seed FSRS data from existing integer mastery so scheduling is continuous
    const sMap = { 1: 1, 2: 3, 3: 7, 4: 21 };
    Object.entries(progress.mastery || {}).forEach(([key, level]) => {
      if (level >= 1) {
        progress.fsrs[key] = { s: sMap[level] || 1, d: 5, reps: level, lapses: 0 };
      }
    });
  }
}

// ════════════════════════════════════════
//  ACHIEVEMENTS
// ════════════════════════════════════════
const ACHIEVEMENTS = [
  { id: 'first-quiz',       icon: '🎯', label: 'First Quiz',         test: () => true },
  { id: 'vowel-master',     icon: '🔤', label: 'Vowel Master',       test: () => VOWELS.every(v => getMastery(v.letter) >= 3) },
  { id: 'alphabet-complete',icon: '📚', label: 'Full Alphabet',      test: () => ALL_LETTERS.every(l => getMastery(l.letter) >= 3) },
  { id: 'century',          icon: '⭐', label: 'Century',            test: () => progress.xp >= 100 },
  { id: 'word-collector',   icon: '📖', label: 'Word Collector',     test: () => VOCAB_DATA.filter(w => getVocabMastery(w) >= 3).length >= 50 },
  { id: 'vocab-champion',   icon: '🏆', label: 'Vocab Champion',     test: () => VOCAB_DATA.filter(w => getVocabMastery(w) >= 3).length >= 500 },
  { id: 'grammar-start',    icon: '📝', label: 'Grammar Beginner',   test: () => GRAMMAR_LESSONS.some(l => getLessonProgress(l).pct === 100) },
  { id: 'grammar-graduate', icon: '🎓', label: 'Grammar Graduate',   test: () => GRAMMAR_LESSONS.every(l => getLessonProgress(l).pct === 100) },
  { id: 'streak-3',         icon: '🔥', label: 'On a Roll',          test: () => progress.streak >= 3 },
  { id: 'streak-7',         icon: '💪', label: 'Week Warrior',       test: () => progress.streak >= 7 },
];

let _achToastTimer = null;
function checkAchievements() {
  const earned = progress.achievements || [];
  ACHIEVEMENTS.forEach(ach => {
    if (earned.includes(ach.id)) return;
    if (ach.test()) {
      earned.push(ach.id);
      progress.achievements = earned;
      _flushSave();
      showAchievementToast(ach);
    }
  });
}

function showAchievementToast(ach) {
  const toast = document.getElementById('achievement-toast');
  if (!toast) return;
  document.getElementById('ach-toast-icon').textContent = ach.icon;
  document.getElementById('ach-toast-name').textContent = ach.label;
  toast.classList.add('show');
  if (_achToastTimer) clearTimeout(_achToastTimer);
  _achToastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ════════════════════════════════════════
//  STATISTICS PANEL
// ════════════════════════════════════════
function openStatsPanel() {
  closeSettingsPanel();
  renderStatsPanel();
  document.getElementById('stats-overlay').classList.add('open');
  document.addEventListener('keydown', _statsEsc);
}
function closeStatsPanel() {
  document.getElementById('stats-overlay').classList.remove('open');
  document.removeEventListener('keydown', _statsEsc);
}
function _statsEsc(e) { if (e.key === 'Escape') closeStatsPanel(); }

function renderStatsPanel() {
  const totalLetters = ALL_LETTERS.length;
  const masteredLetters = ALL_LETTERS.filter(l => getMastery(l.letter) >= 3).length;
  const totalVocab = VOCAB_TOTAL_WORDS;
  const masteredVocab = Object.entries(progress.mastery).filter(([k, v]) => k.startsWith('v:') && v >= 3).length;
  const totalLessons = GRAMMAR_LESSONS.length;
  const masteredLessons = GRAMMAR_LESSONS.filter(l => getLessonProgress(l).pct === 100).length;

  // Summary
  let html = `<div class="stats-summary">
    <div class="stat-card"><div class="stat-card-val">${progress.xp}</div><div class="stat-card-lbl">Total XP</div></div>
    <div class="stat-card"><div class="stat-card-val">${progress.streak}</div><div class="stat-card-lbl">Day Streak</div></div>
    <div class="stat-card"><div class="stat-card-val">${masteredLetters}/${totalLetters}</div><div class="stat-card-lbl">Letters</div></div>
    <div class="stat-card"><div class="stat-card-val">${masteredVocab}/${totalVocab}</div><div class="stat-card-lbl">Words</div></div>
    <div class="stat-card"><div class="stat-card-val">${masteredLessons}/${totalLessons}</div><div class="stat-card-lbl">Lessons</div></div>
    <div class="stat-card"><div class="stat-card-val">${(progress.achievements||[]).length}</div><div class="stat-card-lbl">Badges</div></div>
  </div>`;

  // Activity heatmap
  html += `<div class="stats-section-title">Activity — Past 13 Weeks</div>`;
  html += _buildHeatmap();

  // Mastery breakdown bars
  const letterPct = Math.round((masteredLetters / totalLetters) * 100);
  const vocabPct = Math.round((masteredVocab / totalVocab) * 100);
  const grammarPct = Math.round((masteredLessons / totalLessons) * 100);
  const totalPhrases = PHRASES_DATA.length;
  const masteredPhrases = PHRASES_DATA.filter(p => getPhraseMastery(p.id) >= 3).length;
  const phrasesPct = totalPhrases ? Math.round((masteredPhrases / totalPhrases) * 100) : 0;
  const totalConjuncts = CONJUNCTS.length;
  const masteredConjuncts = CONJUNCTS.filter(c => getMastery(c.letter) >= 3).length;
  const conjunctsPct = totalConjuncts ? Math.round((masteredConjuncts / totalConjuncts) * 100) : 0;
  html += `<div class="stats-section-title" style="margin-top:20px">Mastery Breakdown</div>
  <div class="mastery-bar-row"><span class="mastery-bar-lbl">🔤 Alphabet</span><div class="mastery-bar-track"><div class="mastery-bar-fill" style="width:${letterPct}%"></div></div><span class="mastery-bar-pct">${letterPct}%</span></div>
  <div class="mastery-bar-row"><span class="mastery-bar-lbl">🔗 Conjuncts</span><div class="mastery-bar-track"><div class="mastery-bar-fill" style="width:${conjunctsPct}%"></div></div><span class="mastery-bar-pct">${conjunctsPct}%</span></div>
  <div class="mastery-bar-row"><span class="mastery-bar-lbl">📖 Vocabulary</span><div class="mastery-bar-track"><div class="mastery-bar-fill" style="width:${vocabPct}%"></div></div><span class="mastery-bar-pct">${vocabPct}%</span></div>
  <div class="mastery-bar-row"><span class="mastery-bar-lbl">📝 Grammar</span><div class="mastery-bar-track"><div class="mastery-bar-fill" style="width:${grammarPct}%"></div></div><span class="mastery-bar-pct">${grammarPct}%</span></div>
  <div class="mastery-bar-row"><span class="mastery-bar-lbl">💬 Phrases</span><div class="mastery-bar-track"><div class="mastery-bar-fill" style="width:${phrasesPct}%"></div></div><span class="mastery-bar-pct">${phrasesPct}%</span></div>`;

  // Strongest/weakest vocab category
  const cats = [...new Set(VOCAB_DATA.map(w => w.category))];
  let bestCat = null, worstCat = null, bestPct = -1, worstPct = 101;
  cats.forEach(cat => {
    const words = VOCAB_DATA.filter(w => w.category === cat);
    if (words.length < 3) return;
    const pct = Math.round((words.filter(w => getVocabMastery(w) >= 3).length / words.length) * 100);
    if (pct > bestPct) { bestPct = pct; bestCat = cat; }
    if (pct < worstPct) { worstPct = pct; worstCat = cat; }
  });
  if (bestCat && worstCat) {
    html += `<div class="stats-section-title" style="margin-top:20px">Vocabulary Insights</div>
    <div class="cat-insight">
      <div class="cat-insight-card"><div class="cat-insight-tag">💪 Strongest</div><div class="cat-insight-name">${bestCat}</div><div class="cat-insight-pct">${bestPct}% mastered</div></div>
      <div class="cat-insight-card"><div class="cat-insight-tag">📚 Needs Work</div><div class="cat-insight-name">${worstCat}</div><div class="cat-insight-pct">${worstPct}% mastered</div></div>
    </div>`;
  }

  // Per-letter alphabet grid
  html += `<div class="stats-section-title" style="margin-top:20px">Letters Detail</div>
  <div class="stats-letter-grid">`;
  ALL_LETTERS.forEach(l => {
    const lvl = getMastery(l.letter);
    html += `<div class="ml-chip lvl${lvl}" title="${l.name} — level ${lvl}">${l.letter}</div>`;
  });
  html += `</div>`;

  // Per-category vocab rows
  html += `<div class="stats-section-title" style="margin-top:20px">Vocabulary by Category</div>
  <div class="stats-cat-list">`;
  Object.entries(VOCAB_CATEGORIES).forEach(([key, cat]) => {
    const words = VOCAB_DATA.filter(w => w.category === key);
    if (!words.length) return;
    const mastered = words.filter(w => getVocabMastery(w) >= 3).length;
    const pct = Math.round((mastered / words.length) * 100);
    html += `<div class="stats-cat-row">
      <span class="stats-cat-icon">${cat.icon}</span>
      <span class="stats-cat-name">${cat.title}</span>
      <div class="mastery-bar-track" style="flex:1"><div class="mastery-bar-fill" style="width:${pct}%"></div></div>
      <span class="stats-cat-frac">${mastered}/${words.length}</span>
    </div>`;
  });
  html += `</div>`;

  // Per-lesson grammar rows
  html += `<div class="stats-section-title" style="margin-top:20px">Grammar Lessons</div>
  <div class="stats-cat-list">`;
  GRAMMAR_LESSONS.forEach(lesson => {
    const total = lesson.quiz.length;
    const mastered = lesson.quiz.filter((_, i) => getGrammarMastery(lesson.id, i) >= 2).length;
    const pct = total ? Math.round((mastered / total) * 100) : 0;
    html += `<div class="stats-cat-row">
      <span class="stats-cat-icon">📝</span>
      <span class="stats-cat-name">${lesson.number}. ${lesson.title}</span>
      <div class="mastery-bar-track" style="flex:1"><div class="mastery-bar-fill" style="width:${pct}%"></div></div>
      <span class="stats-cat-frac">${mastered}/${total}</span>
    </div>`;
  });
  html += `</div>`;

  // Achievements grid
  html += `<div class="stats-section-title" style="margin-top:20px">Achievements</div>
  <div class="ach-grid">`;
  ACHIEVEMENTS.forEach(ach => {
    const earned = (progress.achievements||[]).includes(ach.id);
    html += `<div class="ach-card${earned ? ' earned' : ''}">
      <div class="ach-card-icon">${ach.icon}</div>
      <div class="ach-card-name">${ach.label}</div>
    </div>`;
  });
  html += `</div>`;

  document.getElementById('stats-body').innerHTML = html;
}

function _buildHeatmap() {
  const log = progress.practiceLog || {};
  const today = new Date();
  // Build 91 days (13 weeks) ending today
  const days = [];
  for (let i = 90; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  // Find max XP for scaling
  const maxXP = Math.max(1, ...days.map(d => log[d] || 0));

  // Month labels: determine which columns start a new month
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let monthHtml = '<div class="heatmap-months" style="gap:0;margin-bottom:4px;">';
  let lastMonth = -1;
  for (let col = 0; col < 13; col++) {
    const dayIdx = col * 7;
    if (dayIdx < days.length) {
      const m = new Date(days[dayIdx]).getMonth();
      if (m !== lastMonth) {
        monthHtml += `<span style="width:${(13-col)*15}px;flex-shrink:0">${monthNames[m]}</span>`;
        lastMonth = m;
      }
    }
  }
  monthHtml += '</div>';

  let gridHtml = '<div class="heatmap-grid">';
  days.forEach(date => {
    const xp = log[date] || 0;
    let level = 0;
    if (xp > 0) level = xp >= 25 ? 3 : xp >= 10 ? 2 : 1;
    const today10 = today.toISOString().slice(0,10);
    const outline = date === today10 ? ' style="outline:1.5px solid var(--accent);outline-offset:1px"' : '';
    gridHtml += `<div class="heatmap-cell" data-level="${level}" title="${date}: ${xp} XP"${outline}></div>`;
  });
  gridHtml += '</div>';

  return `<div class="heatmap-wrap">${monthHtml}${gridHtml}</div>`;
}

// ════════════════════════════════════════
//  TODAY SCREEN
function getLessonOfDay() {
  return GRAMMAR_LESSONS.find(l => {
    const p = getLessonProgress(l);
    return p.pct < 100;
  }) || null;
}

// ════════════════════════════════════════
function renderTodayScreen() {
  const body = document.getElementById('today-body');
  if (!body) return;

  const due = getDueItems();
  const dueCount = due.letters.length + due.vocab.length + due.grammar.length + due.phrases.length;

  // Next unseen vocab words
  const unlocked = getVocabMixedUnlockedCount();
  const pool = VMIX_CURRICULUM.slice(0, unlocked);
  const newWords = pool.filter(w => getVocabMastery(w) === 0).slice(0, 5);

  // Next grammar lesson user hasn't mastered
  const nextGrammar = GRAMMAR_LESSONS.find(l => {
    const prog = getLessonProgress(l);
    return prog.seen < prog.total || prog.mastered < prog.total;
  });

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  let html = `<div class="today-date">${today}</div>`;

  // ── Lesson of the Day ──
  const lessonOfDay = getLessonOfDay();
  if (lessonOfDay) {
    const firstExample = lessonOfDay.examples && lessonOfDay.examples[0];
    html += `<div class="today-lesson-card">
      <div class="tlc-badge">📚 Lesson of the Day</div>
      <div class="tlc-title">Lesson ${lessonOfDay.number}: ${escHtml(lessonOfDay.title)}</div>
      ${firstExample ? `<div class="tlc-example"><span class="tlc-bn">${escHtml(firstExample.bengali)}</span><span class="tlc-en">${escHtml(firstExample.english)}</span></div>` : ''}
      <button class="btn-primary today-action-btn" data-action="open-grammar-lesson" data-id="${lessonOfDay.id}">Start Lesson →</button>
    </div>`;
  }

  // ── Reviews ──
  if (dueCount > 0) {
    html += `<div class="today-review-alert">
      <div class="tra-left">
        <div class="tra-icon">🔔</div>
        <div>
          <div class="tra-count">${dueCount} <span style="font-size:1rem;font-weight:600">due</span></div>
          <div class="tra-label">item${dueCount !== 1 ? 's' : ''} ready for review</div>
        </div>
      </div>
      <button class="btn-primary" data-action="review-and-alphabet" style="white-space:nowrap">Start Review →</button>
    </div>`;
  }
  html += `<div class="today-section">
    <div class="today-section-hdr">
      <span class="today-section-icon">🔔</span>
      <div>
        <div class="today-section-title">Due for Review</div>
        <div class="today-section-sub">${dueCount > 0 ? dueCount + ' item' + (dueCount !== 1 ? 's' : '') + ' ready to review' : 'All caught up! Nothing due right now.'}</div>
      </div>
    </div>
    ${dueCount > 0 ? `<button class="btn-primary today-action-btn" data-action="review-and-alphabet">Start Review →</button>` : '<div class="today-done-badge">✓ Done</div>'}
  </div>`;

  // ── New vocab ──
  html += `<div class="today-section">
    <div class="today-section-hdr">
      <span class="today-section-icon">📖</span>
      <div>
        <div class="today-section-title">New Vocabulary</div>
        <div class="today-section-sub">${newWords.length > 0 ? newWords.length + ' new word' + (newWords.length !== 1 ? 's' : '') + ' in your queue' : 'No new words queued — keep practicing!'}</div>
      </div>
    </div>`;
  if (newWords.length > 0) {
    html += '<div class="today-word-list">' + newWords.map(w =>
      `<div class="today-word-chip"><span class="today-word-bn">${escHtml(w.lemma)}</span><span class="today-word-en">${escHtml(w.english)}</span></div>`
    ).join('') + '</div>';
    html += `<button class="btn-secondary today-action-btn" data-action="vocab-practice">Study These →</button>`;
  } else {
    html += '<div class="today-done-badge">✓ All unlocked words seen</div>';
  }
  html += '</div>';

  // ── Grammar ──
  html += `<div class="today-section">
    <div class="today-section-hdr">
      <span class="today-section-icon">📚</span>
      <div>
        <div class="today-section-title">Grammar</div>
        <div class="today-section-sub">${nextGrammar ? 'Lesson ' + nextGrammar.number + ': ' + escHtml(nextGrammar.title) : 'All lessons complete!'}</div>
      </div>
    </div>
    ${nextGrammar ? `<button class="btn-secondary today-action-btn" data-action="open-grammar-lesson" data-id="${nextGrammar.id}">Open Lesson →</button>` : '<div class="today-done-badge">✓ Done</div>'}
  </div>`;

  // ── Phrases ──
  const unlockedSituations = PHRASES_WAVE_ORDER.slice(0, getPhrasesUnlockedSituationCount());
  const phrasesPool = PHRASES_DATA.filter(p => unlockedSituations.includes(p.situation));
  const phrasesToReview = phrasesPool.filter(p => getPhraseMastery(p.id) === 0).slice(0, 5);
  html += `<div class="today-section">
    <div class="today-section-hdr">
      <span class="today-section-icon">💬</span>
      <div>
        <div class="today-section-title">Phrases</div>
        <div class="today-section-sub">${phrasesToReview.length > 0 ? phrasesToReview.length + ' new phrase' + (phrasesToReview.length !== 1 ? 's' : '') + ' to learn' : 'Keep practicing!'}</div>
      </div>
    </div>
    <button class="btn-secondary today-action-btn" data-action="switch-tab" data-tab="phrases">Go to Phrases →</button>
  </div>`;

  // ── Mistake Review ──
  const mistakeCount = (progress.recentMistakes || []).length;
  if (mistakeCount > 0) {
    html += `<div class="today-section">
      <div class="today-section-hdr">
        <span class="today-section-icon">🔁</span>
        <div>
          <div class="today-section-title">Mistake Review</div>
          <div class="today-section-sub">${mistakeCount} recent mistake${mistakeCount !== 1 ? 's' : ''} to revisit</div>
        </div>
      </div>
      <button class="btn-secondary today-action-btn" data-action="start-mistake-review">Review →</button>
    </div>`;
  }

  // ── Streak / XP summary ──
  const xpToday = (progress.practiceLog || {})[new Date().toISOString().slice(0,10)] || 0;
  html += `<div class="today-xp-bar">
    <span class="today-xp-label">Today's XP</span>
    <span class="today-xp-val">${xpToday} XP</span>
    <span class="today-streak">🔥 ${progress.streak || 0} day streak</span>
  </div>`;

  body.innerHTML = html;
}

function startMistakeReview() {
  const mistakes = (progress.recentMistakes || []).slice(-50);
  if (mistakes.length === 0) { showAlert('No mistakes to review yet!'); return; }

  // Deduplicate by {type,key}, keeping most recent
  const seen = new Set();
  const unique = [];
  for (let i = mistakes.length - 1; i >= 0; i--) {
    const m = mistakes[i];
    const dedupeKey = (m.type || 'alphabet') + '|' + m.key;
    if (!seen.has(dedupeKey)) {
      seen.add(dedupeKey);
      unique.push({ key: m.key, type: m.type || 'alphabet' });
    }
  }

  // Group by type and enqueue each resolvable group
  const byType = unique.reduce((acc, m) => {
    if (!acc[m.type]) acc[m.type] = [];
    acc[m.type].push(m.key);
    return acc;
  }, {});

  const queue = [];

  const alphaLetters = (byType.alphabet || [])
    .map(k => ALL_LETTERS.find(l => l.letter === k))
    .filter(Boolean);
  if (alphaLetters.length > 0) queue.push({ type: 'letters', data: alphaLetters, fromMistakes: true });

  const vocabKeys = new Set(byType.vocab || []);
  const vocabWords = VMIX_CURRICULUM.filter(w => vocabKeys.has(_vocabKey(w)));
  if (vocabWords.length > 0) queue.push({ type: 'vocab', data: vocabWords, fromMistakes: true });

  const grammarQuestions = [];
  (byType.grammar || []).forEach(key => {
    const m = /^g:([^:]+):(\d+)$/.exec(key);
    if (!m) return;
    const lessonId = m[1], qIdx = +m[2];
    const lesson = GRAMMAR_LESSONS.find(l => l.id === lessonId);
    if (!lesson || !lesson.quiz[qIdx]) return;
    grammarQuestions.push({ ...lesson.quiz[qIdx], _lessonId: lesson.id, _qIdx: qIdx });
  });
  if (grammarQuestions.length > 0) {
    queue.push({ type: 'grammar', questions: grammarQuestions, title: '🔁 Mistake Review — Grammar', fromMistakes: true });
  }

  const phraseIds = new Set((byType.phrases || []).map(k => k.replace(/^ph:/, '')));
  const phrases = PHRASES_DATA.filter(p => phraseIds.has(p.id));
  if (phrases.length > 0) {
    queue.push({ type: 'phrases', phrases, title: '🔁 Mistake Review — Phrases', fromMistakes: true });
  }

  if (queue.length === 0) {
    showAlert('No resolvable recent mistakes to review right now.');
    return;
  }

  _reviewQueue = queue;
  _runNextReviewItem();
}

// ════════════════════════════════════════
//  SPACED REPETITION REVIEW
// ════════════════════════════════════════
const REVIEW_INTERVALS_MS = {
  0: 0,                    // unseen: always due
  1: 1 * 24*60*60*1000,    // seen: after 1 day
  2: 3 * 24*60*60*1000,    // learning: after 3 days
  3: 7 * 24*60*60*1000,    // mastered: after 7 days
  4: 30 * 24*60*60*1000,   // well-known: after 30 days
};
const MAX_REVIEW_LETTERS = 10;
const MAX_REVIEW_VOCAB = 10;
const MAX_REVIEW_GRAMMAR = 3;
const MAX_REVIEW_PHRASES = 3;

// ════════════════════════════════════════
//  FSRS-4.5 SPACED REPETITION
// ════════════════════════════════════════
// Default weight vector (FSRS-4.5 open-source defaults)
const FSRS_W = [0.4072,1.1829,3.1262,15.4722,7.2102,0.5316,1.0651,0.0589,
                1.5330,0.1544,1.0070,1.9395,0.1100,0.2900,2.2700,0.0700,2.9898,0.5100,0.4300];
const FSRS_AGAIN = 1, FSRS_HARD = 2, FSRS_GOOD = 3, FSRS_EASY = 4;

// Initial stability (days) after first exposure, indexed by rating 1-4
function fsrsInitS(rating) { return FSRS_W[rating - 1]; }

// Initial difficulty (1-10) after first exposure, indexed by rating
function fsrsInitD(rating) {
  return Math.max(1, Math.min(10, FSRS_W[4] - Math.exp(FSRS_W[5] * (rating - 1)) + 1));
}

// Estimated probability of recall after elapsedDays given stability s
function fsrsR(s, elapsedDays) {
  return Math.pow(1 + elapsedDays / (9 * s), -1);
}

// New stability after a successful recall (rating 2-4)
function fsrsSAfterRecall(d, s, r, rating) {
  const hardPenalty = rating === FSRS_HARD ? FSRS_W[15] : 1;
  const easyBonus   = rating === FSRS_EASY ? FSRS_W[16] : 1;
  return s * (Math.exp(FSRS_W[8]) * (11 - d) *
    Math.pow(s, -FSRS_W[9]) * (Math.exp(FSRS_W[10] * (1 - r)) - 1) *
    hardPenalty * easyBonus) + 1;
}

// New stability after forgetting (rating 1 / Again)
function fsrsSAfterForgetting(d, s, r) {
  return FSRS_W[11] * Math.pow(d, -FSRS_W[12]) *
    (Math.pow(s + 1, FSRS_W[13]) - 1) * Math.exp(FSRS_W[14] * (1 - r));
}

// Updated difficulty after a review
function fsrsNextD(d, rating) {
  const d3 = fsrsInitD(FSRS_GOOD);
  const dp = d - FSRS_W[6] * (rating - 3);
  return Math.max(1, Math.min(10, FSRS_W[7] * d3 + (1 - FSRS_W[7]) * dp));
}

// Derive integer mastery 0-4 from FSRS stability (for curriculum/display)
function masteryFromFsrs(s) {
  if (!s || s < 0.5) return 1;
  if (s < 7)  return 2;
  if (s < 21) return 3;
  return 4;
}

// Preview the resulting interval in days for a given rating without committing
function fsrsPreviewInterval(key, rating) {
  const card = progress.fsrs && progress.fsrs[key];
  let previewS;
  if (!card || card.reps === 0) {
    previewS = fsrsInitS(rating);
  } else {
    const ls = progress.lastSeen && progress.lastSeen[key]
      ? new Date(progress.lastSeen[key]).getTime() : Date.now();
    const elapsedDays = Math.max(0, (Date.now() - ls) / 86400000);
    const r = fsrsR(card.s, elapsedDays);
    previewS = fsrsSAfterRecall(card.d, card.s, r, rating);
  }
  return Math.max(1, Math.round(Math.max(0.1, previewS)));
}

// Apply a rating to a card's FSRS state and update progress.mastery
function applyFsrsRating(key, rating) {
  if (!progress.fsrs) progress.fsrs = {};
  const card = progress.fsrs[key] || { s: 0, d: 5, reps: 0, lapses: 0 };
  const lastMs = progress.lastSeen && progress.lastSeen[key]
    ? new Date(progress.lastSeen[key]).getTime() : Date.now();
  const elapsedDays = Math.max(0, (Date.now() - lastMs) / 86400000);
  let newS, newD;
  if (card.reps === 0) {
    newS = fsrsInitS(rating);
    newD = fsrsInitD(rating);
  } else if (rating === FSRS_AGAIN) {
    const r = fsrsR(card.s, elapsedDays);
    newS = Math.max(0.1, fsrsSAfterForgetting(card.d, card.s, r));
    newD = fsrsNextD(card.d, rating);
    card.lapses = (card.lapses || 0) + 1;
  } else {
    const r = fsrsR(card.s, elapsedDays);
    newS = Math.max(0.1, fsrsSAfterRecall(card.d, card.s, r, rating));
    newD = fsrsNextD(card.d, rating);
  }
  card.s = newS;
  card.d = newD;
  card.reps = (card.reps || 0) + 1;
  progress.fsrs[key] = card;
  // Keep integer mastery in sync for curriculum/achievement code
  if (rating === FSRS_AGAIN) {
    progress.mastery[key] = Math.max(1, (progress.mastery[key] || 1) - 1);
  } else {
    progress.mastery[key] = masteryFromFsrs(newS);
  }
}

// Returns elapsed days since key was last seen, or Infinity if never
function _elapsedDays(key) {
  const ls = progress.lastSeen && progress.lastSeen[key];
  if (!ls) return Infinity;
  return (Date.now() - new Date(ls).getTime()) / 86400000;
}

// True if the card identified by key is due for review using FSRS,
// falling back to the old interval map when no FSRS data exists yet.
function _fsrsIsDue(key, fallbackMastery) {
  const card = progress.fsrs && progress.fsrs[key];
  if (!card) {
    if (!fallbackMastery || fallbackMastery === 0) return false;
    const ls = progress.lastSeen && progress.lastSeen[key]
      ? new Date(progress.lastSeen[key]).getTime() : 0;
    return Date.now() - ls >= REVIEW_INTERVALS_MS[fallbackMastery];
  }
  return _elapsedDays(key) >= card.s; // both in days
}

function getDueItems() {
  const due = { letters: [], vocab: [], grammar: [], phrases: [] };
  // Script items (letters, conjuncts, matra drills, numerals, number names)
  const reviewPools = [
    { items: ALL_LETTERS, category: 'letter' },
    { items: CONJUNCTS, category: 'conjunct' },
    { items: MATRA_COMBOS, category: 'matra' },
    { items: BENGALI_NUMERALS, category: 'numeral' },
    { items: BENGALI_NUMBER_NAMES, category: 'number-name' },
  ];
  const scriptItems = [];
  reviewPools.forEach(({ items, category }) => {
    items.forEach(item => {
      if (!item || !item.letter) return;
      scriptItems.push({
        ...item,
        letter: item.letter,
        type: item.type || category,
        reviewCategory: category,
      });
    });
  });
  const dedupedScriptItems = Array.from(
    scriptItems.reduce((map, item) => {
      if (!map.has(item.letter)) map.set(item.letter, item);
      return map;
    }, new Map()).values()
  );
  dedupedScriptItems.forEach(item => {
    const key = item.letter;
    if (getMastery(key) === 0) return; // never seen
    if (_fsrsIsDue(key, getMastery(key))) due.letters.push(item);
  });
  // Vocab
  VOCAB_DATA.forEach(w => {
    const key = _vocabKey(w);
    if (getVocabMastery(w) === 0) return;
    if (_fsrsIsDue(key, getVocabMastery(w))) due.vocab.push(w);
  });
  // Grammar — lesson is due when average FSRS stability across its questions is overdue
  GRAMMAR_LESSONS.forEach(lesson => {
    const prog = getLessonProgress(lesson);
    if (prog.seen === 0) return;
    // Compute average stability across all questions in the lesson
    let totalS = 0, n = 0;
    lesson.quiz.forEach((_, i) => {
      const qKey = 'g:' + lesson.id + ':' + i;
      const card = progress.fsrs && progress.fsrs[qKey];
      if (card) { totalS += card.s; n++; }
    });
    const lessonKey = 'g:' + lesson.id;
    if (n === 0) {
      // No FSRS data yet — fall back to old mastery-based check
      const rawSum = lesson.quiz.reduce((s, _, i) => s + getGrammarMastery(lesson.id, i), 0);
      const avgMastery = Math.min(4, Math.max(1, Math.round(rawSum / lesson.quiz.length)));
      const ls = progress.lastSeen && progress.lastSeen[lessonKey]
        ? new Date(progress.lastSeen[lessonKey]).getTime() : 0;
      if (Date.now() - ls >= REVIEW_INTERVALS_MS[avgMastery]) due.grammar.push(lesson);
    } else {
      if (_elapsedDays(lessonKey) >= totalS / n) due.grammar.push(lesson);
    }
  });
  // Phrases — situation is due when average FSRS stability across its phrases is overdue
  PHRASES_WAVE_ORDER.forEach(slug => {
    const phrases = PHRASES_DATA.filter(p => p.situation === slug);
    const seenPhrases = phrases.filter(p => getPhraseMastery(p.id) > 0);
    if (seenPhrases.length === 0) return;
    const sitKey = 'ph-sit:' + slug;
    let totalS = 0, n = 0;
    seenPhrases.forEach(p => {
      const card = progress.fsrs && progress.fsrs['ph:' + p.id];
      if (card) { totalS += card.s; n++; }
    });
    if (n === 0) {
      // Fall back to old mastery-based check
      const avgMastery = Math.round(seenPhrases.reduce((s, p) => s + getPhraseMastery(p.id), 0) / seenPhrases.length);
      const ls = progress.lastSeen && progress.lastSeen[sitKey]
        ? new Date(progress.lastSeen[sitKey]).getTime() : 0;
      if (Date.now() - ls >= REVIEW_INTERVALS_MS[Math.max(1, Math.min(4, avgMastery))]) {
        const sit = PHRASES_SITUATIONS.find(s => s.slug === slug);
        if (sit) due.phrases.push(sit);
      }
    } else {
      if (_elapsedDays(sitKey) >= totalS / n) {
        const sit = PHRASES_SITUATIONS.find(s => s.slug === slug);
        if (sit) due.phrases.push(sit);
      }
    }
  });
  return due;
}

function updateReviewDueBadge() {
  if (!currentUser) return; // not logged in yet
  const due = getDueItems();
  const count = due.letters.length + due.vocab.length + due.grammar.length + due.phrases.length;
  const btn = document.getElementById('review-due-btn');
  const cntEl = document.getElementById('review-due-count');
  if (!btn) return;
  if (count > 0) {
    btn.style.display = '';
    if (cntEl) cntEl.textContent = count;
  } else {
    btn.style.display = 'none';
  }
  // Update tab badge on Today button
  const tabBadge = document.getElementById('today-tab-badge');
  if (tabBadge) {
    tabBadge.style.display = count > 0 ? 'flex' : 'none';
    tabBadge.textContent = count > 9 ? '9+' : count;
  }
}

let _reviewQueue = [];

function _grammarOverdueDays(lesson) {
  const lessonKey = 'g:' + lesson.id;
  let totalS = 0;
  let n = 0;
  lesson.quiz.forEach((_, i) => {
    const qKey = 'g:' + lesson.id + ':' + i;
    const card = progress.fsrs && progress.fsrs[qKey];
    if (card) {
      totalS += card.s;
      n++;
    }
  });

  let targetDays;
  if (n === 0) {
    const rawSum = lesson.quiz.reduce((sum, _, i) => sum + getGrammarMastery(lesson.id, i), 0);
    const avgMastery = Math.min(4, Math.max(1, Math.round(rawSum / lesson.quiz.length)));
    targetDays = REVIEW_INTERVALS_MS[avgMastery] / 86400000;
  } else {
    targetDays = totalS / n;
  }

  return _elapsedDays(lessonKey) - targetDays;
}

function _phraseSituationOverdueDays(slug) {
  const phrases = PHRASES_DATA.filter(p => p.situation === slug);
  const seenPhrases = phrases.filter(p => getPhraseMastery(p.id) > 0);
  const sitKey = 'ph-sit:' + slug;
  let totalS = 0;
  let n = 0;
  seenPhrases.forEach(p => {
    const card = progress.fsrs && progress.fsrs['ph:' + p.id];
    if (card) {
      totalS += card.s;
      n++;
    }
  });

  let targetDays;
  if (n === 0) {
    const avgMastery = Math.round(seenPhrases.reduce((sum, p) => sum + getPhraseMastery(p.id), 0) / seenPhrases.length);
    const clampedMastery = Math.max(1, Math.min(4, avgMastery));
    targetDays = REVIEW_INTERVALS_MS[clampedMastery] / 86400000;
  } else {
    targetDays = totalS / n;
  }

  return _elapsedDays(sitKey) - targetDays;
}

function startReviewSession() {
  const due = getDueItems();
  _reviewQueue = [];
  if (due.letters.length > 0) _reviewQueue.push({ type: 'letters', data: due.letters.slice(0, MAX_REVIEW_LETTERS) });
  if (due.vocab.length > 0) _reviewQueue.push({ type: 'vocab', data: due.vocab.slice(0, MAX_REVIEW_VOCAB) });

  const grammarToReview = due.grammar
    .slice()
    .sort((a, b) => _grammarOverdueDays(b) - _grammarOverdueDays(a))
    .slice(0, MAX_REVIEW_GRAMMAR);
  grammarToReview.forEach(lesson => _reviewQueue.push({ type: 'grammar', lesson }));

  const phrasesToReview = due.phrases
    .slice()
    .sort((a, b) => _phraseSituationOverdueDays(b.slug) - _phraseSituationOverdueDays(a.slug))
    .slice(0, MAX_REVIEW_PHRASES);
  phrasesToReview.forEach(situation => _reviewQueue.push({ type: 'phrases', situation }));

  _runNextReviewItem();
}

function _runNextReviewItem() {
  if (_reviewQueue.length === 0) {
    showScreen('home');
    return;
  }
  const item = _reviewQueue.shift();
  if (item.type === 'letters') {
    const isMistake = !!item.fromMistakes;
    const sessionTitle = isMistake ? 'Mistake Review' : 'Review Session';
    const mod = { id: isMistake ? 'mistake-review' : 'review', title: sessionTitle, letters: item.data, isMixed: true };
    currentModule = mod;
    quizModuleRef = mod;
    generateQuiz(item.data);
    quizIndex = 0; quizCorrect = 0; quizMissed = [];
    document.getElementById('quiz-title').textContent = isMistake ? '🔁 Mistake Review' : '🔔 Review Session';
    showScreen('quiz');
    renderQuestion();
  } else if (item.type === 'vocab') {
    generateVocabQuiz(item.data);
    vqIndex = 0; vqCorrect = 0; vqMissed = [];
    document.getElementById('vq-title').textContent = item.fromMistakes ? '🔁 Mistake Review — Vocab' : '🔔 Review Session';
    showScreen('vocab-quiz');
    renderVocabQuestion();
  } else if (item.type === 'grammar') {
    if (item.lesson) currentGrammarLesson = item.lesson;
    startGrammarQuiz({ questions: item.questions, title: item.title });
  } else if (item.type === 'phrases') {
    if (item.situation) currentPhrasesSituation = item.situation.slug;
    startPhrasesQuiz({ phrases: item.phrases, title: item.title });
  }
}

// Track lastSeen for review system
function _trackLastSeen(key) {
  if (!progress.lastSeen) progress.lastSeen = {};
  progress.lastSeen[key] = new Date().toISOString();
}

// ════════════════════════════════════════
//  MISSED QUESTIONS RENDER
// ════════════════════════════════════════
function _renderMissedSection(missedArr, containerId, retryBtnId) {
  const retryBtn = document.getElementById(retryBtnId);
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!missedArr || missedArr.length === 0) {
    el.innerHTML = '';
    if (retryBtn) retryBtn.style.display = 'none';
    return;
  }
  if (retryBtn) retryBtn.style.display = 'inline-block';
  el.innerHTML = '<div class="missed-section"><div class="missed-title">Review these</div>' +
    missedArr.map(m => `
      <div class="missed-item">
        ${m.bengali ? `<span class="missed-bengali">${m.bengali}</span>
        <button class="missed-sound-btn" data-action="speak" data-text="${escapeStr(m.bengali)}" aria-label="Play pronunciation">🔊</button>` : ''}
        <span class="missed-answer">${m.answer}</span>
      </div>
    `).join('') + '</div>';
}

// ════════════════════════════════════════
//  QUIZ KEYBOARD SHORTCUTS
// ════════════════════════════════════════
let _quizKeyHandler = null;

function attachQuizKeyHandler(screenPrefix) {
  detachQuizKeyHandler();
  _quizKeyHandler = function(e) {
    // Number keys 1-4: select MC option
    if (['1','2','3','4'].includes(e.key)) {
      const idx = parseInt(e.key) - 1;
      const btns = document.querySelectorAll(`#${screenPrefix}-answer-area .mc-btn:not(.disabled)`);
      if (btns[idx]) btns[idx].click();
      return;
    }
    // 0: I don't know
    if (e.key === '0') {
      const idkBtn = document.querySelector(`#${screenPrefix}-answer-area .idk-btn`);
      if (idkBtn) idkBtn.click();
      return;
    }
    // Enter: advance after answered, or check word order
    if (e.key === 'Enter') {
      // If next button is visible, click it
      const nextBtn = document.getElementById(`${screenPrefix}-next-btn`);
      if (nextBtn && nextBtn.classList.contains('show')) { nextBtn.click(); return; }
      // If a check button is visible (word order / spell), click it
      const checkBtn = document.querySelector(`#${screenPrefix}-answer-area .wo-check-btn`);
      if (checkBtn) { checkBtn.click(); return; }
    }
  };
  document.addEventListener('keydown', _quizKeyHandler);
}

function detachQuizKeyHandler() {
  if (_quizKeyHandler) {
    document.removeEventListener('keydown', _quizKeyHandler);
    _quizKeyHandler = null;
  }
}

// Add key hints to MC buttons after rendering
function addMCKeyHints(containerSelector) {
  const btns = document.querySelectorAll(containerSelector + ' .mc-btn');
  btns.forEach((btn, i) => {
    if (i >= 4) return;
    if (!btn.querySelector('.mc-key-hint')) {
      const hint = document.createElement('span');
      hint.className = 'mc-key-hint';
      hint.textContent = `[${i+1}]`;
      btn.appendChild(hint);
    }
  });
}

// ════════════════════════════════════════
//  CHART → FLASHCARD
// ════════════════════════════════════════
function navigateToLetter(letterChar) {
  // Close any open chart detail popup
  document.querySelectorAll('.chart-detail').forEach(e => e.remove());
  const mod = MODULES.find(m => !m.isMixed && !m.isChart && m.letters &&
    m.letters.some(l => l.letter === letterChar));
  if (!mod) return;
  switchTab('alphabet');
  startLearn(mod);
  const idx = mod.letters.findIndex(l => l.letter === letterChar);
  if (idx >= 0) { currentCardIndex = idx; showCard(); }
}

// ════════════════════════════════════════
//  INIT
// ════════════════════════════════════════
showProfileScreen();

// ── Global Search ──────────────────────────────────────────
let _searchTimer = null;
function scheduleSearch() {
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(() => {
    runSearch(document.getElementById('search-input').value.trim());
  }, 180);
}

function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(() => document.getElementById('search-input').focus(), 50);
  document.addEventListener('keydown', _searchEsc);
}
function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  document.removeEventListener('keydown', _searchEsc);
}
function _searchEsc(e) { if (e.key === 'Escape') closeSearch(); }

const MAX_LETTERS = 6, MAX_VOCAB = 8, MAX_GRAMMAR = 5;

function runSearch(q) {
  const box = document.getElementById('search-results');
  if (!q) {
    box.innerHTML = '<p class="search-prompt">Search across letters, vocabulary, and grammar lessons.</p>';
    return;
  }
  const ql = q.toLowerCase();

  // 1. Letters — match Bengali character, name, or romanized
  const letterHits = ALL_LETTERS.filter(l =>
    l.letter.includes(q) ||
    l.name.toLowerCase().includes(ql) ||
    l.romanized.toLowerCase().includes(ql)
  );

  // 2. Vocabulary — match Bengali, romanized, or English
  const vocabHits = VOCAB_DATA.filter(w =>
    w.lemma.includes(q) ||
    w.roman.toLowerCase().includes(ql) ||
    w.english.toLowerCase().includes(ql)
  );

  // 3. Grammar lessons — match title or shortDesc
  const grammarHits = GRAMMAR_LESSONS.filter(l =>
    l.title.toLowerCase().includes(ql) ||
    l.shortDesc.toLowerCase().includes(ql)
  );

  if (!letterHits.length && !vocabHits.length && !grammarHits.length) {
    box.innerHTML = `<p class="search-empty">No results for "<strong>${escHtml(q)}</strong>".</p>`;
    return;
  }

  let html = '';

  if (letterHits.length) {
    html += `<div class="search-group">
      <div class="search-group-title">Letters</div>`;
    letterHits.slice(0, MAX_LETTERS).forEach(l => {
      html += `<div class="search-result-item" data-action="open-letter-result" data-letter="${escapeStr(l.letter)}">
        <span class="sri-bengali">${escHtml(l.letter)}</span>
        <span class="sri-detail">${escHtml(l.name)} · ${escHtml(l.romanized)}</span>
        <span class="sri-tag">${l.type}</span>
      </div>`;
    });
    html += '</div><div class="search-divider"></div>';
  }

  if (vocabHits.length) {
    html += `<div class="search-group">
      <div class="search-group-title">Vocabulary</div>`;
    vocabHits.slice(0, MAX_VOCAB).forEach(w => {
      const inQueue = (progress.vmixPriority || []).includes(w.lemma);
      const safeLemma = escHtml(JSON.stringify(w.lemma));
      html += `<div class="search-result-item" data-action="show-vocab-detail-search" data-lemma="${safeLemma}">
        <span class="sri-bengali">${escHtml(w.lemma)}</span>
        <span class="sri-detail">${escHtml(w.roman)} · ${escHtml(w.english)}</span>
        <span class="sri-tag">${escHtml(w.pos)}</span>
        <button class="sri-add-btn${inQueue ? ' added' : ''}" data-action="search-add-to-study" data-lemma="${safeLemma}" title="${inQueue ? 'Already in study queue' : 'Add to study queue'}">${inQueue ? '✓ Queued' : '+ Study'}</button>
      </div>`;
    });
    if (vocabHits.length > MAX_VOCAB) {
      html += `<div class="search-more" data-action="open-vocab-browse-search" data-query="${escapeStr(q)}">See all ${vocabHits.length} vocabulary results →</div>`;
    }
    html += '</div><div class="search-divider"></div>';
  }

  if (grammarHits.length) {
    html += `<div class="search-group">
      <div class="search-group-title">Grammar</div>`;
    grammarHits.slice(0, MAX_GRAMMAR).forEach(l => {
      html += `<div class="search-result-item" data-action="open-grammar-result" data-id="${escapeStr(l.id)}">
        <span class="sri-detail"><strong>${l.number}. ${escHtml(l.title)}</strong> — ${escHtml(l.shortDesc)}</span>
      </div>`;
    });
    html += '</div>';
  }

  box.innerHTML = html;
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function openLetterResult(letterChar) {
  const mod = MODULES.find(m => !m.isMixed && !m.isChart && m.letters &&
    m.letters.some(l => l.letter === letterChar));
  if (!mod) return;
  switchTab('alphabet');
  startLearn(mod);
  const idx = mod.letters.findIndex(l => l.letter === letterChar);
  if (idx >= 0) { currentCardIndex = idx; showCard(); }
}

function openGrammarResult(lessonId) {
  closeSearch();
  switchTab('grammar');
  openGrammarLesson(lessonId);
}

function openVocabBrowseSearch(query) {
  closeSearch();
  switchTab('vocabulary');
  openVocabBrowse(null);
  const inp = document.getElementById('vb-search');
  if (inp) { inp.value = query; renderVocabList(); }
}

// ════════════════════════════════════════
//  PHRASES — MASTERY & PROGRESS
// ════════════════════════════════════════

function getPhraseMastery(phraseId) {
  return progress.mastery['ph:' + phraseId] || 0;
}

function getSituationProgress(slug) {
  const phrases = PHRASES_DATA.filter(p => p.situation === slug);
  const total = phrases.length;
  let mastered = 0, seen = 0;
  phrases.forEach(p => {
    const m = getPhraseMastery(p.id);
    if (m >= 3) mastered++;
    if (m >= 1) seen++;
  });
  return { total, mastered, seen, pct: Math.round((mastered / total) * 100) };
}

function getPhrasesUnlockedSituationCount() {
  // A situation unlocks when 60% of the previous situation's phrases reach mastery >= 2.
  let unlocked = 1;
  while (unlocked < PHRASES_WAVE_ORDER.length) {
    const prevSlug = PHRASES_WAVE_ORDER[unlocked - 1];
    const prevPhrases = PHRASES_DATA.filter(p => p.situation === prevSlug);
    const familiarCount = prevPhrases.filter(p => getPhraseMastery(p.id) >= 2).length;
    if (familiarCount >= Math.ceil(prevPhrases.length * 0.6)) {
      unlocked++;
    } else {
      break;
    }
  }
  return unlocked;
}

// ════════════════════════════════════════
//  PHRASES HOME
// ════════════════════════════════════════

function renderPhrasesHome() {
  const grid = document.getElementById('phrases-module-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const unlockedCount = getPhrasesUnlockedSituationCount();
  const totalPhrases = PHRASES_DATA.length;
  let masteredPhrases = 0;
  PHRASES_DATA.forEach(p => { if (getPhraseMastery(p.id) >= 3) masteredPhrases++; });
  const mixPct = Math.round((masteredPhrases / totalPhrases) * 100);

  // Mixed practice card
  const mixCard = document.createElement('div');
  mixCard.className = 'module-card';
  mixCard.innerHTML = `
    <div class="module-icon">🗣️</div>
    <h3>Mixed Practice</h3>
    <p>Adaptive review across all unlocked situations</p>
    <div class="module-progress"><div class="module-progress-fill" style="width:${mixPct}%;background:var(--accent)"></div></div>
    <div class="progress-label">${masteredPhrases}/${totalPhrases} mastered · ${unlockedCount}/${PHRASES_WAVE_ORDER.length} situations unlocked</div>
  `;
  mixCard.onclick = () => startPhrasesMixedPractice();
  grid.appendChild(mixCard);

  // Situation cards
  PHRASES_WAVE_ORDER.forEach((slug, idx) => {
    const sit = PHRASES_SITUATIONS.find(s => s.slug === slug);
    if (!sit) return;
    const card = document.createElement('div');
    card.className = 'module-card';
    const prog = getSituationProgress(slug);
    const locked = idx >= unlockedCount;
    card.innerHTML = `
      ${locked ? '<span class="lock-badge">🔒</span>' : ''}
      <div class="module-icon">${sit.icon}</div>
      <h3>${sit.title}</h3>
      <p>${sit.desc}</p>
      <div class="module-progress"><div class="module-progress-fill" style="width:${prog.pct}%;background:var(--accent)"></div></div>
      <div class="progress-label">${prog.mastered}/${prog.total} mastered</div>
    `;
    if (!locked) card.onclick = () => openPhrasesSituation(slug);
    grid.appendChild(card);
  });
}

// ════════════════════════════════════════
//  PHRASES SITUATION VIEW (flashcards)
// ════════════════════════════════════════

let currentPhrasesSituation = null;
let _psCardIdx = 0;

function openPhrasesSituation(slug) {
  const sit = PHRASES_SITUATIONS.find(s => s.slug === slug);
  if (!sit) return;
  currentPhrasesSituation = slug;
  _psCardIdx = 0;

  document.getElementById('ps-title').textContent = sit.title;
  const phrases = PHRASES_DATA.filter(p => p.situation === slug);
  const content = document.getElementById('ps-content');
  content.innerHTML = `
    <h2>${sit.title}</h2>
    <div class="grammar-desc">${sit.desc}</div>
    <h3 style="margin-bottom:12px;">Phrase Cards</h3>
    <div class="gl-card-area">
      <div class="gl-flashcard" id="ps-card" data-action="flip-ps-card">
        <div class="gl-card-face gl-card-front" id="ps-card-front"></div>
        <div class="gl-card-face gl-card-back" id="ps-card-back"></div>
      </div>
      <div class="gl-card-hint" id="ps-card-hint">Tap card to reveal</div>
      <div class="learn-nav" style="margin-top:12px">
        <button class="nav-btn" id="ps-prev-btn" data-action="prev-ps-card">← Prev</button>
        <span id="ps-card-counter" style="font-size:0.85rem;color:var(--text-dim)"></span>
        <button class="nav-btn" id="ps-next-btn" data-action="next-ps-card">Next →</button>
      </div>
    </div>
    <div class="grammar-lesson-actions">
      <button class="btn-primary" data-action="start-phrases-quiz">Start Quiz →</button>
    </div>
  `;
  renderPsCard();
  showScreen('phrases-situation');
}

function renderPsCard() {
  const slug = currentPhrasesSituation;
  if (!slug) return;
  const phrases = PHRASES_DATA.filter(p => p.situation === slug);
  const phrase = phrases[_psCardIdx];
  if (!phrase) return;
  const card = document.getElementById('ps-card');
  if (!card) return;
  card.classList.remove('flipped');
  document.getElementById('ps-card-front').innerHTML =
    `<div class="ge-bengali">${phrase.bengali}</div>`;
  let backHtml = `<div class="ge-roman">${phrase.roman}</div><div class="ge-english">${phrase.english}</div>`;
  if (phrase.notes) backHtml += `<div class="ge-notes">${phrase.notes}</div>`;
  if (phrase.reply) backHtml += `<div class="ge-notes" style="margin-top:10px;border-top:1px solid rgba(255,255,255,0.1);padding-top:8px"><em>Natural reply:</em> ${phrase.reply.bengali} — ${phrase.reply.english}</div>`;
  document.getElementById('ps-card-back').innerHTML = backHtml;
  document.getElementById('ps-card-counter').textContent =
    (_psCardIdx + 1) + ' / ' + phrases.length;
  document.getElementById('ps-card-hint').textContent = 'Tap card to reveal';
  document.getElementById('ps-prev-btn').style.visibility = _psCardIdx === 0 ? 'hidden' : 'visible';
  document.getElementById('ps-next-btn').style.visibility =
    _psCardIdx >= phrases.length - 1 ? 'hidden' : 'visible';
}

function flipPsCard() {
  const card = document.getElementById('ps-card');
  if (!card) return;
  card.classList.toggle('flipped');
  const hint = document.getElementById('ps-card-hint');
  if (hint) hint.textContent = card.classList.contains('flipped') ? '' : 'Tap card to reveal';
}

function prevPsCard() {
  if (_psCardIdx > 0) { _psCardIdx--; renderPsCard(); }
}

function nextPsCard() {
  const phrases = PHRASES_DATA.filter(p => p.situation === currentPhrasesSituation);
  if (_psCardIdx < phrases.length - 1) { _psCardIdx++; renderPsCard(); }
}

// ════════════════════════════════════════
//  PHRASES QUIZ
// ════════════════════════════════════════

let phqQuestions = [];
let phqIndex = 0;
let phqCorrect = 0;
let phqAnswered = false;
let phqIsMixed = false;
let phqMissed = [];
let phqCurrentSituationSlug = null;

function buildPhrasesQuizQuestions(phrases) {
  const questions = [];

  phrases.forEach(p => {
    const m = getPhraseMastery(p.id);
    // Build a pool of distractor phrases (anything except this phrase)
    const distractorPool = shuffle(PHRASES_DATA.filter(x => x.id !== p.id));

    // Determine which question types are appropriate for this phrase's mastery level
    const types = ['phrases-mc'];
    if (m >= 1) types.push('phrases-mc-reverse');
    if (m >= 1) types.push('phrases-listening');
    // FIB only for short phrases (≤4 roman words) — avoids asking users to type full sentences
    if (m >= 2 && p.roman.split(' ').length <= 4) types.push('phrases-fib');
    if (p.reply) types.push('phrases-dialogue');

    // Pick 1–2 question types per phrase, weighted toward unseen/low-mastery
    const shuffledTypes = shuffle([...types]);
    const numQ = m >= 2 ? 2 : 1;

    shuffledTypes.slice(0, numQ).forEach(type => {
      if (type === 'phrases-mc') {
        const picks = distractorPool.slice(0, 3).map(x => x.english);
        questions.push({
          type: 'phrases-mc',
          prompt: 'What does this phrase mean?',
          bengali: p.bengali,
          roman: p.roman,
          correct: p.english,
          options: shuffle([p.english, ...picks]),
          _phraseId: p.id,
        });

      } else if (type === 'phrases-mc-reverse') {
        const picks = distractorPool.slice(0, 3).map(x => x.bengali);
        questions.push({
          type: 'phrases-mc-reverse',
          prompt: 'How do you say this in Bengali?',
          english: p.english,
          correct: p.bengali,
          options: shuffle([p.bengali, ...picks]),
          _phraseId: p.id,
        });

      } else if (type === 'phrases-listening') {
        const picks = distractorPool.slice(0, 3).map(x => x.english);
        questions.push({
          type: 'phrases-listening',
          prompt: 'Listen and choose the correct meaning:',
          audio: p.bengali,
          correct: p.english,
          options: shuffle([p.english, ...picks]),
          _phraseId: p.id,
        });

      } else if (type === 'phrases-fib') {
        questions.push({
          type: 'phrases-fib',
          prompt: 'Type the romanization for:',
          english: p.english,
          acceptable: [p.roman],
          answer: p.roman,
          bengali: p.bengali,
          _phraseId: p.id,
        });

      } else if (type === 'phrases-dialogue') {
        const picks = distractorPool.slice(0, 3).map(x => x.bengali);
        questions.push({
          type: 'phrases-dialogue',
          prompt: 'Choose the natural reply:',
          speaker: p.bengali,
          speakerEnglish: p.english,
          correct: p.reply.bengali,
          correctEnglish: p.reply.english,
          options: shuffle([p.reply.bengali, ...picks]),
          _phraseId: p.id,
        });
      }
    });
  });

  return shuffle(questions);
}

function startPhrasesQuiz(options = {}) {
  const hasScopedPhrases = Array.isArray(options.phrases) && options.phrases.length > 0;
  const slug = options.slug || currentPhrasesSituation;
  if (!hasScopedPhrases && !slug) return;
  phqIsMixed = false;
  phqCurrentSituationSlug = hasScopedPhrases ? null : slug;
  const sit = PHRASES_SITUATIONS.find(s => s.slug === slug);
  const phrases = hasScopedPhrases ? options.phrases : PHRASES_DATA.filter(p => p.situation === slug);
  phqQuestions = buildPhrasesQuizQuestions(phrases).slice(0, 12);
  phqIndex = 0;
  phqCorrect = 0;
  phqMissed = [];
  _quizStartTime = Date.now();
  const defaultTitle = (sit ? sit.title : 'Phrases') + ' Quiz';
  document.getElementById('phq-title').textContent = options.title || defaultTitle;
  showScreen('phrases-quiz');
  renderPhrasesQuestion();
  updateStreak();
}

function startPhrasesMixedPractice() {
  const unlockedCount = getPhrasesUnlockedSituationCount();
  const unlockedSlugs = PHRASES_WAVE_ORDER.slice(0, unlockedCount);
  const pool = PHRASES_DATA.filter(p => unlockedSlugs.includes(p.situation));

  // Sort by mastery ascending so unseen/weak phrases appear first, with randomness for mastered
  const withMastery = pool.map(p => ({ ...p, _mastery: getPhraseMastery(p.id) }));
  withMastery.sort((a, b) => {
    const sa = a._mastery === 3 ? 3 + Math.random() * 2 : a._mastery === 0 ? 0.5 : a._mastery;
    const sb = b._mastery === 3 ? 3 + Math.random() * 2 : b._mastery === 0 ? 0.5 : b._mastery;
    return sa - sb;
  });

  const selected = withMastery.slice(0, 15);
  phqQuestions = buildPhrasesQuizQuestions(selected).slice(0, 15);
  phqIndex = 0;
  phqCorrect = 0;
  phqMissed = [];
  phqIsMixed = true;
  phqCurrentSituationSlug = null;
  _quizStartTime = Date.now();
  document.getElementById('phq-title').textContent = 'Mixed Phrases Practice';
  showScreen('phrases-quiz');
  renderPhrasesQuestion();
  updateStreak();
}

function renderPhrasesQuestion() {
  if (phqIndex >= phqQuestions.length) {
    showPhrasesResults();
    return;
  }
  phqAnswered = false;
  const q = phqQuestions[phqIndex];

  document.getElementById('phq-progress-fill').style.width =
    ((phqIndex / phqQuestions.length) * 100) + '%';
  document.getElementById('phq-score').textContent = phqCorrect + ' / ' + phqIndex;

  const qa = document.getElementById('phq-question-area');
  const aa = document.getElementById('phq-answer-area');
  const fb = document.getElementById('phq-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  document.getElementById('phq-next-btn').className = 'btn-primary quiz-next-btn';
  document.getElementById('phq-rating-area').classList.remove('show');
  _pendingRating = null;

  if (q.type === 'phrases-mc') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="vq-bengali">${q.bengali}</div>
      <div class="vq-hint">${escHtml(q.roman)}</div>
    `;
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) =>
        `<button class="mc-btn" data-answer="${escapeStr(opt)}" data-action="answer-mc-phrases">${escHtml(opt)}<span class="mc-key-hint">[${i+1}]</span></button>`
      ).join('') + '</div>' +
      "<button class=\"idk-btn\" data-action=\"dont-know-phrases\">I don't know</button>";
    attachQuizKeyHandler('phq');

  } else if (q.type === 'phrases-mc-reverse') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="vq-hint">${escHtml(q.english)}</div>
    `;
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) =>
        `<button class="mc-btn" data-answer="${escapeStr(opt)}" data-action="answer-mc-phrases">${opt}<span class="mc-key-hint">[${i+1}]</span></button>`
      ).join('') + '</div>' +
      "<button class=\"idk-btn\" data-action=\"dont-know-phrases\">I don't know</button>";
    attachQuizKeyHandler('phq');

  } else if (q.type === 'phrases-listening') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <button class="listening-play-btn" data-action="speak" data-text="${escapeStr(q.audio)}" aria-label="Play phrase">▶ Play</button>
    `;
    setTimeout(() => speakBengali(q.audio, 0.85), 300);
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) =>
        `<button class="mc-btn" data-answer="${escapeStr(opt)}" data-action="answer-mc-phrases">${escHtml(opt)}<span class="mc-key-hint">[${i+1}]</span></button>`
      ).join('') + '</div>' +
      "<button class=\"idk-btn\" data-action=\"dont-know-phrases\">I don't know</button>";
    attachQuizKeyHandler('phq');

  } else if (q.type === 'phrases-fib') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="vq-hint">${escHtml(q.english)}</div>
    `;
    aa.innerHTML = `<div class="fib-area">
      <input type="text" class="fib-input" id="phq-fib-input" placeholder="Type romanization…"
        autocomplete="off" autocapitalize="off">
      <button class="btn-primary fib-submit" data-action="answer-phrases-fib">Check</button>
    </div>
    <button class="idk-btn" data-action="dont-know-phrases">I don't know</button>`;
    setTimeout(() => document.getElementById('phq-fib-input')?.focus(), 100);

  } else if (q.type === 'phrases-dialogue') {
    qa.innerHTML = `
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="vq-bengali">${q.speaker}</div>
      <div class="vq-hint">"${escHtml(q.speakerEnglish)}"</div>
    `;
    aa.innerHTML = '<div class="mc-options">' +
      q.options.map((opt, i) =>
        `<button class="mc-btn" data-answer="${escapeStr(opt)}" data-action="answer-mc-phrases">${opt}<span class="mc-key-hint">[${i+1}]</span></button>`
      ).join('') + '</div>' +
      "<button class=\"idk-btn\" data-action=\"dont-know-phrases\">I don't know</button>";
    attachQuizKeyHandler('phq');
  }
}

function answerPhrasesMC(btn, chosen) {
  if (phqAnswered) return;
  phqAnswered = true;
  const q = phqQuestions[phqIndex];
  const correct = chosen === q.correct;
  document.querySelectorAll('#phq-answer-area .mc-btn').forEach(b => {
    b.classList.add('disabled');
    if (b.dataset.answer === q.correct) b.classList.add('reveal-correct');
  });
  btn.classList.add(correct ? 'correct' : 'wrong');
  let fbAnswer = q.correct;
  if (q.type === 'phrases-dialogue') fbAnswer = q.correct + ' — ' + q.correctEnglish;
  if (correct) {
    phqCorrect++;
    addXP(10);
    showPhrasesFeedback(true, fbAnswer);
    showRatingButtons('ph:' + q._phraseId, 'phq-rating-area', 'phq-next-btn');
  } else {
    _recordMiss(phqMissed, q);
    _trackMistake('ph:' + q._phraseId, 'phrases');
    applyFsrsRating('ph:' + q._phraseId, FSRS_AGAIN);
    _trackLastSeen('ph:' + q._phraseId);
    saveProgress();
    checkAchievements();
    showPhrasesFeedback(false, fbAnswer);
    document.getElementById('phq-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function answerPhrasesFIB() {
  if (phqAnswered) return;
  const input = document.getElementById('phq-fib-input');
  if (!input) return;
  const rawInput = input.value.trim();
  const val = rawInput.toLowerCase();
  if (!val) return;
  phqAnswered = true;
  const q = phqQuestions[phqIndex];
  const normVal = _normRoman(val);
  const correct = q.acceptable.some(a => a.toLowerCase() === val || _normRoman(a) === normVal);
  input.classList.add(correct ? 'correct' : 'wrong');
  if (correct) {
    phqCorrect++;
    addXP(15);
    showPhrasesFeedback(true, q.bengali + ' (' + q.answer + ')');
    showRatingButtons('ph:' + q._phraseId, 'phq-rating-area', 'phq-next-btn');
  } else {
    _showInlineAnswer('phq-answer-area', q.answer);
    _recordMiss(phqMissed, q);
    _trackMistake('ph:' + q._phraseId, 'phrases');
    applyFsrsRating('ph:' + q._phraseId, FSRS_AGAIN);
    _trackLastSeen('ph:' + q._phraseId);
    saveProgress();
    checkAchievements();
    showPhrasesFeedback(false, q.bengali + ' (' + q.answer + ')');
    document.getElementById('phq-next-btn').className = 'btn-primary quiz-next-btn show';
  }
}

function dontKnowPhrases() {
  if (phqAnswered) return;
  phqAnswered = true;
  const q = phqQuestions[phqIndex];
  if (q.type === 'phrases-fib') {
    const input = document.getElementById('phq-fib-input');
    if (input) { input.disabled = true; input.classList.add('wrong'); }
    _showInlineAnswer('phq-answer-area', q.answer);
    showPhrasesFeedback(false, q.bengali + ' (' + q.answer + ')');
  } else {
    document.querySelectorAll('#phq-answer-area .mc-btn').forEach(b => {
      b.classList.add('disabled');
      if (b.dataset.answer === q.correct) b.classList.add('reveal-correct');
    });
    let fbAnswer = q.correct;
    if (q.type === 'phrases-dialogue') fbAnswer = q.correct + ' — ' + q.correctEnglish;
    showPhrasesFeedback(false, fbAnswer);
  }
  _recordMiss(phqMissed, q);
  _trackMistake('ph:' + q._phraseId, 'phrases');
  applyFsrsRating('ph:' + q._phraseId, FSRS_AGAIN);
  _trackLastSeen('ph:' + q._phraseId);
  saveProgress();
  checkAchievements();
  document.getElementById('phq-next-btn').className = 'btn-primary quiz-next-btn show';
}

function showPhrasesFeedback(correct, answer, notes) {
  const fb = document.getElementById('phq-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  let html = correct ? '✓ Correct! ' + escHtml(answer) : '✗ Correct answer: ' + escHtml(answer);
  if (!correct && notes) html += '<div class="fb-example">' + escHtml(notes) + '</div>';
  html += ' <button class="report-problem-btn active-quiz-phrases" data-action="report-problem" data-kind="phrases" title="Report a problem with this card">⚑ Report</button>';
  fb.innerHTML = html;
}

function nextPhrasesQuestion() {
  phqIndex++;
  renderPhrasesQuestion();
}

// ════════════════════════════════════════
//  PHRASES RESULTS
// ════════════════════════════════════════

function showPhrasesResults() {
  showScreen('phrases-results');
  const total = phqQuestions.length;
  const pct = Math.round((phqCorrect / total) * 100);
  setTimeout(() => {
    const offset = 452.4 * (1 - pct / 100);
    document.getElementById('phr-ring').style.strokeDashoffset = offset;
  }, 100);
  document.getElementById('phr-pct').textContent = pct + '%';
  const title = pct === 100 ? 'Perfect! 🌟' : pct >= 80 ? 'Great job!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
  document.getElementById('phr-title').textContent = title;
  const phid = phqIsMixed ? 'phrases-mixed' : (phqCurrentSituationSlug || 'phrases');
  const phist = progress.quizHistory || (progress.quizHistory = {});
  const phprev = phist[phid] || { best: -1 };
  if (pct > phprev.best) { phist[phid] = { best: pct }; saveProgress(); }
  const subParts = [`You scored ${phqCorrect}/${total}`];
  if (_quizStartTime) subParts.push('⏱ ' + _formatElapsed(Date.now() - _quizStartTime));
  if (pct > phprev.best && phprev.best >= 0) subParts.push('🌟 New best!');
  else if (phprev.best >= 0 && phprev.best > pct) subParts.push(`Best: ${phprev.best}%`);
  if (progress.streak > 1) subParts.push(`🔥 ${progress.streak} day streak`);
  document.getElementById('phr-sub').textContent = subParts.join(' · ');
  addXP(5);
  detachQuizKeyHandler();
  updateNav();
  checkAchievements();
  _renderMissedSection(phqMissed, 'phr-missed', 'phr-retry-missed');
  const contBtn = document.getElementById('phr-continue-review');
  if (contBtn) contBtn.style.display = _reviewQueue.length > 0 ? 'inline-block' : 'none';
}

function retryPhrasesQuiz() {
  if (phqIsMixed) {
    startPhrasesMixedPractice();
  } else if (phqCurrentSituationSlug) {
    currentPhrasesSituation = phqCurrentSituationSlug;
    startPhrasesQuiz();
  }
}

function retryMissedPhrases() {
  if (!phqMissed || phqMissed.length === 0) return;
  const seen = new Set();
  const phraseIds = [];
  phqMissed.forEach(m => {
    if (m._q && m._q._phraseId && !seen.has(m._q._phraseId)) {
      seen.add(m._q._phraseId);
      phraseIds.push(m._q._phraseId);
    }
  });
  if (phraseIds.length === 0) return;
  const phrases = PHRASES_DATA.filter(p => phraseIds.includes(p.id));
  phqQuestions = buildPhrasesQuizQuestions(phrases);
  phqIndex = 0; phqCorrect = 0; phqMissed = [];
  document.getElementById('phq-title').textContent = 'Retry Missed';
  showScreen('phrases-quiz');
  renderPhrasesQuestion();
}

// Register service worker for offline/PWA support
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}


// ============================================================
// Delegated click listener — handles all data-action elements
// ============================================================
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.closest('[data-action]')) e.preventDefault();
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const a = el.dataset;
  switch (a.action) {
    // Navigation
    case 'switch-tab': switchTab(a.tab); break;
    case 'show-screen': showScreen(a.screen); break;
    case 'go-module-home': goModuleHome(); break;
    case 'dismiss-error': switchTab(currentTab); break;
    // Alphabet quiz
    case 'answer-mc': answerMC(el, a.answer); break;
    case 'dont-know-quiz': dontKnowQuiz(); break;
    case 'rate-answer': onRatingSelected(+a.rating); break;
    case 'select-spell': selectSpellTile(el); break;
    case 'answer-spell': answerSpell(); break;
    case 'answer-fib': answerFIB(); break;
    case 'answer-arith-mc': answerArithMC(el, a.answer); break;
    case 'answer-arith-fib': answerArithFIB(); break;
    case 'next-question': if (_arithmeticQuestions.length > 0 && _arithmeticAnswered) { nextArithmeticQuestion(); } else { nextQuestion(); } break;
    case 'retry-quiz': retryQuiz(); break;
    case 'retry-missed-quiz': retryMissedQuiz(); break;
    case 'start-quiz': startQuiz(); break;
    // Card navigation
    case 'flip-card': flipCard(); break;
    case 'prev-card': prevCard(); break;
    case 'next-card': nextCard(); break;
    case 'speak-current-letter': speakCurrentLetter(); break;
    case 'open-canvas': openCanvas(); break;
    case 'close-canvas': closeCanvas(); break;
    case 'clear-canvas': clearCanvas(); break;
    case 'navigate-letter': navigateToLetter(a.letter); break;
    case 'show-chart-detail': showChartDetail(el); break;
    // Vocab
    case 'flip-vocab-card': flipVocabCard(); break;
    case 'prev-vocab-card': prevVocabCard(); break;
    case 'next-vocab-card': nextVocabCard(); break;
    case 'speak-current-vocab': speakCurrentVocab(); break;
    case 'speak-current-vocab-example': speakCurrentVocabExample(); break;
    case 'start-vocab-quiz': startVocabQuiz(); break;
    case 'answer-mc-vocab': answerVocabMC(el, a.answer); break;
    case 'dont-know-vocab': dontKnowVocab(); break;
    case 'answer-vocab-fib': answerVocabFIB(); break;
    case 'next-vocab-question': nextVocabQuestion(); break;
    case 'retry-vocab-quiz': retryVocabQuiz(); break;
    case 'retry-missed-vocab': retryMissedVocab(); break;
    case 'set-vocab-filter': setVocabFilter(a.catid || null); break;
    case 'show-vocab-detail': showVocabDetail(a.lemma); break;
    case 'show-vocab-detail-search': closeSearch(); showVocabDetail(JSON.parse(a.lemma)); break;
    case 'vocab-page-prev': vbPage--; renderVocabList(); break;
    case 'vocab-page-next': vbPage++; renderVocabList(); break;
    case 'start-vocab-learn': e.stopPropagation(); startVocabLearn(a.catid); break;
    case 'start-vocab-cat-quiz': e.stopPropagation(); _startVocabCatQuiz(a.catid); break;
    // Grammar
    case 'flip-gl-card': flipGlCard(); break;
    case 'prev-gl-card': prevGlCard(); break;
    case 'next-gl-card': nextGlCard(); break;
    case 'start-grammar-quiz': startGrammarQuiz(); break;
    case 'answer-mc-grammar': answerGrammarMC(el, a.answer); break;
    case 'dont-know-grammar': dontKnowGrammar(); break;
    case 'answer-grammar-fib': answerGrammarFIB(); break;
    case 'select-word-tile': selectWordTile(el); break;
    case 'check-word-order': checkWordOrder(); break;
    case 'next-grammar-question': nextGrammarQuestion(); break;
    case 'retry-grammar-quiz': retryGrammarQuiz(); break;
    case 'retry-missed-grammar': retryMissedGrammar(); break;
    case 'toggle-conj-table': toggleConjTable(); break;
    // Phrases
    case 'flip-ps-card': flipPsCard(); break;
    case 'prev-ps-card': prevPsCard(); break;
    case 'next-ps-card': nextPsCard(); break;
    case 'start-phrases-quiz': startPhrasesQuiz(); break;
    case 'answer-mc-phrases': answerPhrasesMC(el, a.answer); break;
    case 'dont-know-phrases': dontKnowPhrases(); break;
    case 'answer-phrases-fib': answerPhrasesFIB(); break;
    case 'next-phrases-question': nextPhrasesQuestion(); break;
    case 'retry-phrases-quiz': retryPhrasesQuiz(); break;
    case 'retry-missed-phrases': retryMissedPhrases(); break;
    // Placement test
    case 'answer-mc-pt': answerPlacementMC(el, a.answer); break;
    case 'answer-pt-fib': answerPlacementFIB(); break;
    case 'pt-select-word-tile': ptSelectWordTile(el); break;
    case 'check-pt-word-order': checkPlacementWordOrder(); break;
    case 'begin-placement-quiz': beginPlacementQuiz(); break;
    case 'apply-placement': applyPlacementResults(); break;
    case 'discard-placement': discardPlacementResults(); break;
    case 'quit-placement': confirmQuitPlacement(); break;
    case 'next-pt-question': nextPlacementQuestion(); break;
    case 'start-placement-test': startPlacementTest(); break;
    case 'settings-start-placement': closeSettingsPanel(); startPlacementTest(); break;
    case 'progress-start-placement': closeProgressPanel(); startPlacementTest(); break;
    case 'set-pt-difficulty': setPtDifficulty(a.diff); break;
    case 'set-pt-len': setPtLength(a.len); break;
    // Today tab
    case 'review-and-alphabet': startReviewSession(); switchTab('alphabet'); break;
    case 'vocab-practice': switchTab('vocabulary'); startMixedVocabPractice(); break;
    case 'open-grammar-lesson': switchTab('grammar'); openGrammarLesson(a.id); break;
    case 'start-mistake-review': startMistakeReview(); break;
    case 'run-next-review': _runNextReviewItem(); break;
    // Settings / UI
    case 'open-settings': openSettingsPanel(); break;
    case 'close-settings': closeSettingsPanel(); break;
    case 'open-progress': openProgressPanel(); break;
    case 'open-stats': openStatsPanel(); break;
    case 'open-help': openHelpPanel(); break;
    case 'close-help': closeHelpPanel(); break;
    case 'toggle-theme': toggleTheme(); break;
    case 'open-search': openSearch(); break;
    case 'set-fib-mode': setFibMode(a.mode); break;
    case 'set-listening-mode': setListeningMode(a.mode); break;
    case 'set-theme': setThemePalette(a.palette || a.theme); break;
    case 'switch-profile': switchProfile(); break;
    case 'import-progress': importProgress(); break;
    case 'export-progress': exportProgress(); break;
    case 'delete-current-profile': deleteCurrentProfile(); break;
    case 'unlock-all': unlockAllContent(el); break;
    case 'toggle-mastery-legend': toggleMasteryLegend(); break;
    case 'close-progress': closeProgressPanel(); break;
    case 'close-stats': closeStatsPanel(); break;
    case 'start-review-session': startReviewSession(); break;
    case 'create-profile': createProfile(); break;
    case 'cancel-new-profile': cancelNewProfile(); break;
    // Audio
    case 'speak': speakBengali(a.text, a.rate ? +a.rate : undefined); break;
    case 'toggle-slow-audio': toggleSlowAudio(el); break;
    case 'show-hint': showHint(el); break;
    case 'show-kbd': showBengaliKbd(a.input); break;
    case 'report-problem': reportProblem(a.kind); break;
    // Progress panel
    case 'toggle-prog-section': toggleProgSection(a.section); break;
    case 'toggle-prog-group': toggleProgGroup(a.group); break;
    case 'cycle-letter-mastery': cycleLetterMastery(a.letter); break;
    case 'cycle-vocab-mastery': cycleVocabChipMastery(a.lemma); break;
    case 'set-lesson-level': setGrammarLessonLevel(a.id, +a.level); break;
    case 'reset-phrases-situation': resetPhrasesSituation(a.slug); break;
    // Profiles
    case 'select-profile': selectProfile(a.name); break;
    case 'rename-profile': renameProfile(a.name); break;
    case 'export-profile': exportProfileData(a.name); break;
    case 'copy-profile': copyProfileDataToClipboard(a.name); break;
    case 'delete-profile': deleteProfile(a.name); break;
    // Search
    case 'open-letter-result': openLetterResult(a.letter); closeSearch(); break;
    case 'search-add-to-study': e.stopPropagation(); searchAddToStudy(JSON.parse(a.lemma), el); break;
    case 'open-vocab-browse-search': openVocabBrowseSearch(a.query); break;
    case 'open-grammar-result': openGrammarResult(a.id); break;
    case 'close-search': closeSearch(); break;
    // Word modal
    case 'close-word-modal': closeWordModal(); break;
    case 'flip-word-modal': flipWordModal(); break;
    case 'speak-wm-bengali': speakBengali(document.getElementById('wm-bengali').textContent); break;
    case 'speak-vocab-example': speakVocabExample(); break;
    case 'study-word-next': studyWordNext(el.dataset.lemma); break;
    // Listening
    case 'start-letter-listening': startLetterListening(); break;
    case 'start-vocab-listening': startVocabListening(); break;
    // Onboarding
    case 'dismiss-onboarding': dismissOnboarding(); break;
    // Bengali keyboard
    case 'toggle-bng-kbd': toggleBengaliKbd(); break;
    case 'append-char': appendBengaliChar(a.char); break;
  }
});

// Delegated Enter-key handler for all fill-in-blank quiz inputs
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter') return;
  const id = document.activeElement && document.activeElement.id;
  if (!id) return;
  if (id === 'fib-input') answerFIB();
  else if (id === 'vq-fib-input') answerVocabFIB();
  else if (id === 'gq-fib-input') answerGrammarFIB();
  else if (id === 'pt-fib-input') answerPlacementFIB();
  else if (id === 'phq-fib-input') answerPhrasesFIB();
});

// Overlay backdrop close (fires only when clicking the backdrop itself, not children)
document.addEventListener('DOMContentLoaded', function() {
  var overlayMap = {
    'settings-overlay': function() { closeSettingsPanel(); },
    'help-overlay': function() { closeHelpPanel(); },
    'canvas-overlay': function() { closeCanvas(); },
    'onboarding-modal': function() { dismissOnboarding(); },
    'word-modal': function() { closeWordModal(); },
    'search-overlay': function() { closeSearch(); },
    'stats-overlay': function() { closeStatsPanel(); },
    'progress-overlay': function() { closeProgressPanel(); }
  };
  Object.keys(overlayMap).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', function(e) { if (e.target === el) overlayMap[id](); });
  });
});
