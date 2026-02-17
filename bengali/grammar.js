// Bengali Grammar — 20 structured lessons
// Format matches vocab.js pattern for consistency
const GRAMMAR_LESSONS = [
  // ═══════════════════════════════════════
  //  LESSON 1: Sentence Structure (SOV)
  // ═══════════════════════════════════════
  {
    id: 'sov-structure',
    number: 1,
    title: 'Sentence Structure (SOV)',
    shortDesc: 'Bengali is Subject-Object-Verb',
    explanation: `Bengali follows a Subject-Object-Verb (SOV) word order, unlike English which uses Subject-Verb-Object (SVO). This means the verb always comes at the end of the sentence.

For example, where English says "I eat rice," Bengali says "আমি ভাত খাই" (ami bhat khai) — literally "I rice eat."

This SOV pattern is consistent across statements, questions, and commands. Getting comfortable with this order is the single most important step in forming Bengali sentences. Even when sentences get longer with adjectives or adverbs, the verb stays at the end.`,
    examples: [
      { bengali: 'আমি ভাত খাই', roman: 'ami bhat khai', english: 'I eat rice (I + rice + eat)' },
      { bengali: 'সে বই পড়ে', roman: 'she boi pore', english: 'He/she reads a book (he + book + reads)' },
      { bengali: 'আমরা চা পান করি', roman: 'amra cha pan kori', english: 'We drink tea (we + tea + drink)' },
      { bengali: 'তুমি স্কুলে যাও', roman: 'tumi skule jao', english: 'You go to school (you + school-to + go)' },
      { bengali: 'মা খাবার রান্না করেন', roman: 'ma khabar ranna koren', english: 'Mother cooks food (mother + food + cook-does)' },
      { bengali: 'বাবা কাজ করেন', roman: 'baba kaj koren', english: 'Father works (father + work + does)' },
    ],
    quiz: [
      { type: 'word-order', prompt: 'Arrange the words to say "I eat rice"', words: ['খাই', 'আমি', 'ভাত'], correct: ['আমি', 'ভাত', 'খাই'], english: 'I eat rice', roman: 'ami bhat khai' },
      { type: 'word-order', prompt: 'Arrange: "She reads a book"', words: ['পড়ে', 'বই', 'সে'], correct: ['সে', 'বই', 'পড়ে'], english: 'She reads a book', roman: 'she boi pore' },
      { type: 'translate-mc', prompt: 'What does this mean?', bengali: 'আমরা চা পান করি', roman: 'amra cha pan kori', correct: 'We drink tea', options: ['We drink tea', 'Tea drinks us', 'We make tea', 'They drink tea'] },
      { type: 'translate-mc', prompt: 'What does this mean?', bengali: 'তুমি স্কুলে যাও', roman: 'tumi skule jao', correct: 'You go to school', options: ['You go to school', 'School goes to you', 'I go to school', 'You come from school'] },
      { type: 'error-spot', prompt: 'Which sentence correctly says "Father works"?', options: ['বাবা করেন কাজ', 'কাজ বাবা করেন', 'বাবা কাজ করেন', 'করেন বাবা কাজ'], correct: 'বাবা কাজ করেন', explanation: 'SOV order: Subject (বাবা) + Object (কাজ) + Verb (করেন)' },
      { type: 'translate-mc', prompt: 'How do you say "I read a book" in Bengali word order?', bengali: '', roman: '', correct: 'Subject + Object + Verb', options: ['Subject + Object + Verb', 'Subject + Verb + Object', 'Verb + Subject + Object', 'Object + Subject + Verb'] },
      { type: 'word-order', prompt: 'Arrange: "Mother cooks food"', words: ['করেন', 'মা', 'রান্না', 'খাবার'], correct: ['মা', 'খাবার', 'রান্না', 'করেন'], english: 'Mother cooks food', roman: 'ma khabar ranna koren' },
      { type: 'fib', prompt: 'Fill in the blank', sentence: 'আমি ভাত ___', roman: 'ami bhat ___', english: 'I ___ rice (eat)', acceptable: ['খাই', 'khai'], answer: 'খাই' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 2: Pronouns & Formality
  // ═══════════════════════════════════════
  {
    id: 'pronouns-formality',
    number: 2,
    title: 'Pronouns & Formality',
    shortDesc: 'তুই / তুমি / আপনি — three levels of "you"',
    explanation: `Bengali has three levels of formality for the second person ("you"), and this affects verb conjugation throughout the language.

তুই (tui) is very informal — used with close friends, younger siblings, or children. তুমি (tumi) is the standard informal — used with friends, peers, and people you're comfortable with. আপনি (apni) is formal/respectful — used with elders, strangers, teachers, and in professional settings.

Third person also has two levels: সে (she) is informal for "he/she," while তিনি (tini) is the respectful form. Using the wrong level can be seen as rude or overly distant, so choosing correctly is important in Bengali culture.`,
    examples: [
      { bengali: 'তুই কোথায় যাস?', roman: 'tui kothay jas?', english: 'Where are you going? (very informal)' },
      { bengali: 'তুমি কোথায় যাও?', roman: 'tumi kothay jao?', english: 'Where are you going? (informal)' },
      { bengali: 'আপনি কোথায় যান?', roman: 'apni kothay jan?', english: 'Where are you going? (formal)' },
      { bengali: 'সে ঘরে আছে', roman: 'she ghore achhe', english: 'He/she is at home (informal)' },
      { bengali: 'তিনি ঘরে আছেন', roman: 'tini ghore achhen', english: 'He/she is at home (formal)' },
      { bengali: 'তোরা কী করিস?', roman: 'tora ki koris?', english: 'What are you all doing? (very informal)' },
      { bengali: 'আপনারা কী করেন?', roman: 'apnara ki koren?', english: 'What are you all doing? (formal)' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'Which pronoun would you use with your teacher?', bengali: 'আপনি', roman: 'apni', correct: 'আপনি (formal you)', options: ['আপনি (formal you)', 'তুমি (informal you)', 'তুই (very informal you)', 'সে (he/she)'] },
      { type: 'translate-mc', prompt: 'What does তুই mean?', bengali: 'তুই', roman: 'tui', correct: 'You (very informal)', options: ['You (very informal)', 'You (formal)', 'He/she', 'They'] },
      { type: 'error-spot', prompt: 'Which is correct for speaking to a stranger?', options: ['তুই কেমন আছিস?', 'তুমি কেমন আছ?', 'আপনি কেমন আছেন?', 'তোরা কেমন আছিস?'], correct: 'আপনি কেমন আছেন?', explanation: 'আপনি is the formal form, appropriate for strangers.' },
      { type: 'fib', prompt: 'Complete with the formal "he/she"', sentence: '___ ঘরে আছেন', roman: '___ ghore achhen', english: 'He/she is at home (formal)', acceptable: ['তিনি', 'tini'], answer: 'তিনি' },
      { type: 'translate-mc', prompt: 'সে is used for:', bengali: 'সে', roman: 'she', correct: 'He/she (informal)', options: ['He/she (informal)', 'He/she (formal)', 'You (informal)', 'They'] },
      { type: 'translate-mc', prompt: 'What does "আপনারা কী করেন?" mean?', bengali: 'আপনারা কী করেন?', roman: 'apnara ki koren?', correct: 'What are you all doing? (formal)', options: ['What are you all doing? (formal)', 'What are they doing?', 'What is he doing?', 'What are you doing? (informal)'] },
      { type: 'error-spot', prompt: 'Which sentence uses তুমি level correctly?', options: ['তুমি কোথায় যান?', 'তুমি কোথায় যাও?', 'তুমি কোথায় যাস?', 'তুমি কোথায় যায়?'], correct: 'তুমি কোথায় যাও?', explanation: 'তুমি takes যাও — যান is for আপনি, যাস is for তুই.' },
      { type: 'fib', prompt: 'Fill in: "___ কোথায় যাও?" (you, informal)', sentence: '___ কোথায় যাও?', roman: '___ kothay jao?', english: 'Where are you going? (informal)', acceptable: ['তুমি', 'tumi'], answer: 'তুমি' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 3: Present Simple Tense
  // ═══════════════════════════════════════
  {
    id: 'present-simple',
    number: 3,
    title: 'Present Simple Tense',
    shortDesc: 'Everyday actions and habits',
    explanation: `The present simple tense in Bengali describes habitual actions, general truths, and regular activities. The verb ending changes based on the subject's formality level.

Common patterns: আমি verb-ই (ami verb-i), তুমি verb-ও (tumi verb-o), আপনি/তিনি verb-এন (apni/tini verb-en), সে verb-এ (she verb-e).

For example, the root "করা" (kora — to do): আমি করি (ami kori), তুমি করো (tumi koro), সে করে (she kore), আপনি করেন (apni koren). This conjugation pattern applies to most regular verbs.`,
    examples: [
      { bengali: 'আমি কাজ করি', roman: 'ami kaj kori', english: 'I work / I do work' },
      { bengali: 'তুমি গান গাও', roman: 'tumi gan gao', english: 'You sing songs' },
      { bengali: 'সে স্কুলে যায়', roman: 'she skule jay', english: 'He/she goes to school' },
      { bengali: 'আপনি কী করেন?', roman: 'apni ki koren?', english: 'What do you do? (formal)' },
      { bengali: 'আমরা বাংলা শিখি', roman: 'amra bangla shikhi', english: 'We learn Bengali' },
      { bengali: 'তারা খেলে', roman: 'tara khele', english: 'They play' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does "আমি কাজ করি" mean?', bengali: 'আমি কাজ করি', roman: 'ami kaj kori', correct: 'I work', options: ['I work', 'I worked', 'I will work', 'You work'] },
      { type: 'fib', prompt: 'Complete: "তুমি গান ___" (you sing)', sentence: 'তুমি গান ___', roman: 'tumi gan ___', english: 'You sing songs', acceptable: ['গাও', 'gao'], answer: 'গাও' },
      { type: 'translate-mc', prompt: 'What does "সে স্কুলে যায়" mean?', bengali: 'সে স্কুলে যায়', roman: 'she skule jay', correct: 'He/she goes to school', options: ['He/she goes to school', 'He/she went to school', 'I go to school', 'They go to school'] },
      { type: 'error-spot', prompt: 'Which is correct for "We learn Bengali"?', options: ['আমরা বাংলা শিখি', 'আমরা বাংলা শিখো', 'আমরা বাংলা শিখেন', 'আমরা বাংলা শিখে'], correct: 'আমরা বাংলা শিখি', explanation: 'আমরা takes the -ই (-i) ending like আমি.' },
      { type: 'word-order', prompt: 'Arrange: "You (formal) do what?"', words: ['করেন?', 'আপনি', 'কী'], correct: ['আপনি', 'কী', 'করেন?'], english: 'What do you do?', roman: 'apni ki koren?' },
      { type: 'fib', prompt: 'Complete: "আপনি কী ___?" (do, formal)', sentence: 'আপনি কী ___?', roman: 'apni ki ___?', english: 'What do you do? (formal)', acceptable: ['করেন', 'koren'], answer: 'করেন' },
      { type: 'translate-mc', prompt: '"তারা খেলে" means:', bengali: 'তারা খেলে', roman: 'tara khele', correct: 'They play', options: ['They play', 'They played', 'We play', 'He plays'] },
      { type: 'word-order', prompt: 'Arrange: "I do work"', words: ['করি', 'কাজ', 'আমি'], correct: ['আমি', 'কাজ', 'করি'], english: 'I work', roman: 'ami kaj kori' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 4: Possessives
  // ═══════════════════════════════════════
  {
    id: 'possessives',
    number: 4,
    title: 'Possessives',
    shortDesc: 'আমার, তোমার — my, your, etc.',
    explanation: `Possessives in Bengali are formed by adding -র (-r) or -এর (-er) to pronouns. They come before the noun they modify, just like in English.

আমি → আমার (amar — my), তুমি → তোমার (tomar — your), সে → তার (tar — his/her), আপনি → আপনার (apnar — your, formal), আমরা → আমাদের (amader — our), তারা → তাদের (tader — their).

Possessives always come before the thing being possessed: আমার বই (amar boi — my book), তোমার নাম (tomar nam — your name).`,
    examples: [
      { bengali: 'আমার নাম রহিম', roman: 'amar nam Rahim', english: 'My name is Rahim' },
      { bengali: 'তোমার বই কোথায়?', roman: 'tomar boi kothay?', english: 'Where is your book?' },
      { bengali: 'তার বাড়ি ঢাকায়', roman: 'tar bari Dhakay', english: 'His/her house is in Dhaka' },
      { bengali: 'আপনার কী দরকার?', roman: 'apnar ki dorkar?', english: 'What do you need? (formal)' },
      { bengali: 'আমাদের দেশ সুন্দর', roman: 'amader desh sundor', english: 'Our country is beautiful' },
      { bengali: 'তাদের ছেলে পড়ে', roman: 'tader chhele pore', english: 'Their son studies' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does "আমার" mean?', bengali: 'আমার', roman: 'amar', correct: 'My', options: ['My', 'Your', 'His', 'Our'] },
      { type: 'fib', prompt: 'Complete: "___ নাম কী?" (your, informal)', sentence: '___ নাম কী?', roman: '___ nam ki?', english: 'What is your name?', acceptable: ['তোমার', 'tomar'], answer: 'তোমার' },
      { type: 'translate-mc', prompt: 'What does "তাদের ছেলে পড়ে" mean?', bengali: 'তাদের ছেলে পড়ে', roman: 'tader chhele pore', correct: 'Their son studies', options: ['Their son studies', 'Our son studies', 'His son studies', 'Your son studies'] },
      { type: 'error-spot', prompt: 'Which correctly says "Our country is beautiful"?', options: ['আমার দেশ সুন্দর', 'আমাদের দেশ সুন্দর', 'তাদের দেশ সুন্দর', 'আমরা দেশ সুন্দর'], correct: 'আমাদের দেশ সুন্দর', explanation: 'আমাদের means "our" — আমার means "my".' },
      { type: 'word-order', prompt: 'Arrange: "My name is Rahim"', words: ['রহিম', 'নাম', 'আমার'], correct: ['আমার', 'নাম', 'রহিম'], english: 'My name is Rahim', roman: 'amar nam Rahim' },
      { type: 'fib', prompt: 'Complete: "___ বাড়ি ঢাকায়" (his/her)', sentence: '___ বাড়ি ঢাকায়', roman: '___ bari Dhakay', english: 'His/her house is in Dhaka', acceptable: ['তার', 'tar'], answer: 'তার' },
      { type: 'translate-mc', prompt: '"আপনার" is the possessive form of:', bengali: 'আপনার', roman: 'apnar', correct: 'আপনি (formal you)', options: ['আপনি (formal you)', 'তুমি (informal you)', 'আমি (I)', 'তিনি (he/she formal)'] },
      { type: 'word-order', prompt: 'Arrange: "Where is your book?"', words: ['কোথায়?', 'তোমার', 'বই'], correct: ['তোমার', 'বই', 'কোথায়?'], english: 'Where is your book?', roman: 'tomar boi kothay?' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 5: Nouns & Plurals
  // ═══════════════════════════════════════
  {
    id: 'nouns-plurals',
    number: 5,
    title: 'Nouns & Plurals',
    shortDesc: 'Plural markers -রা and -গুলো',
    explanation: `Bengali has two main plural suffixes. -রা (-ra) is used for people and animate beings: ছেলেরা (chhelera — boys), মেয়েরা (meyera — girls), তারা (tara — they).

-গুলো (-gulo) or -গুলি (-guli) is used for things and inanimate objects: বইগুলো (boigulo — the books), গাছগুলো (gachhgulo — the trees). -গুলো is more colloquial, -গুলি is more literary.

Note that Bengali nouns don't always need a plural marker — context often makes the meaning clear. "বই" can mean "book" or "books" depending on context.`,
    examples: [
      { bengali: 'ছেলেরা খেলে', roman: 'chhelera khele', english: 'The boys play' },
      { bengali: 'মেয়েরা পড়ে', roman: 'meyera pore', english: 'The girls study' },
      { bengali: 'বইগুলো ভালো', roman: 'boigulo bhalo', english: 'The books are good' },
      { bengali: 'গাছগুলো বড়', roman: 'gachhgulo boro', english: 'The trees are big' },
      { bengali: 'লোকেরা আসছে', roman: 'lokera aschhe', english: 'The people are coming' },
      { bengali: 'ফুলগুলো সুন্দর', roman: 'phulgulo sundor', english: 'The flowers are beautiful' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'Which suffix makes people plural?', bengali: '-রা', roman: '-ra', correct: '-রা (-ra)', options: ['-রা (-ra)', '-গুলো (-gulo)', '-টা (-ta)', '-এর (-er)'] },
      { type: 'fib', prompt: 'Make "ছেলে" (boy) plural', sentence: 'ছেলে___ খেলে', roman: 'chhele___ khele', english: 'The boys play', acceptable: ['রা', 'ra'], answer: 'রা' },
      { type: 'translate-mc', prompt: 'What does "বইগুলো ভালো" mean?', bengali: 'বইগুলো ভালো', roman: 'boigulo bhalo', correct: 'The books are good', options: ['The books are good', 'The book is good', 'A good book', 'Books are bad'] },
      { type: 'error-spot', prompt: 'Which correctly says "The flowers are beautiful"?', options: ['ফুলরা সুন্দর', 'ফুলগুলো সুন্দর', 'ফুলেরা সুন্দর', 'ফুলটা সুন্দর'], correct: 'ফুলগুলো সুন্দর', explanation: 'Flowers are inanimate, so use -গুলো, not -রা.' },
      { type: 'fib', prompt: 'Make "গাছ" (tree) plural', sentence: 'গাছ___ বড়', roman: 'gachh___ boro', english: 'The trees are big', acceptable: ['গুলো', 'gulo'], answer: 'গুলো' },
      { type: 'translate-mc', prompt: '"লোকেরা আসছে" means:', bengali: 'লোকেরা আসছে', roman: 'lokera aschhe', correct: 'The people are coming', options: ['The people are coming', 'The person is coming', 'People left', 'A person came'] },
      { type: 'word-order', prompt: 'Arrange: "The girls study"', words: ['পড়ে', 'মেয়েরা'], correct: ['মেয়েরা', 'পড়ে'], english: 'The girls study', roman: 'meyera pore' },
      { type: 'error-spot', prompt: 'Which is grammatically correct?', options: ['বইরা ভালো', 'বইগুলো ভালো', 'বইদের ভালো', 'বইটি ভালো'], correct: 'বইগুলো ভালো', explanation: 'Books are inanimate — use -গুলো for plural. (বইটি means "the book" singular.)' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 6: Adjectives
  // ═══════════════════════════════════════
  {
    id: 'adjectives',
    number: 6,
    title: 'Adjectives',
    shortDesc: 'Describing people and things',
    explanation: `In Bengali, adjectives come before the noun they describe — the same order as English. Unlike many European languages, Bengali adjectives don't change form based on gender or number.

ভালো (bhalo — good), খারাপ (kharap — bad), বড় (boro — big), ছোটো (chhoto — small), সুন্দর (sundor — beautiful), লম্বা (lomba — tall/long), নতুন (notun — new), পুরোনো (purono — old).

Adjectives can also be used as predicates: "বইটা ভালো" (boita bhalo — The book is good). There is no separate "to be" verb needed in simple present-tense descriptions.`,
    examples: [
      { bengali: 'ভালো ছেলে', roman: 'bhalo chhele', english: 'good boy' },
      { bengali: 'বড় বাড়ি', roman: 'boro bari', english: 'big house' },
      { bengali: 'সুন্দর ফুল', roman: 'sundor phul', english: 'beautiful flower' },
      { bengali: 'নতুন বই', roman: 'notun boi', english: 'new book' },
      { bengali: 'বইটা ভালো', roman: 'boita bhalo', english: 'The book is good' },
      { bengali: 'ঘরটা ছোটো', roman: 'ghôrta chhoto', english: 'The room is small' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does "সুন্দর ফুল" mean?', bengali: 'সুন্দর ফুল', roman: 'sundor phul', correct: 'Beautiful flower', options: ['Beautiful flower', 'Big flower', 'Red flower', 'Small flower'] },
      { type: 'word-order', prompt: 'Arrange: "big house"', words: ['বাড়ি', 'বড়'], correct: ['বড়', 'বাড়ি'], english: 'big house', roman: 'boro bari' },
      { type: 'fib', prompt: 'Complete: "___ ছেলে" (good)', sentence: '___ ছেলে', roman: '___ chhele', english: 'good boy', acceptable: ['ভালো', 'bhalo'], answer: 'ভালো' },
      { type: 'translate-mc', prompt: '"বইটা ভালো" means:', bengali: 'বইটা ভালো', roman: 'boita bhalo', correct: 'The book is good', options: ['The book is good', 'A good book', 'Good books', 'The book was good'] },
      { type: 'error-spot', prompt: 'Which correctly says "new book"?', options: ['বই নতুন', 'নতুন বই', 'নতুনটা বই', 'বইটা নতুনের'], correct: 'নতুন বই', explanation: 'Adjectives come before nouns: নতুন বই.' },
      { type: 'word-order', prompt: 'Arrange: "The room is small"', words: ['ছোটো', 'ঘরটা'], correct: ['ঘরটা', 'ছোটো'], english: 'The room is small', roman: 'ghôrta chhoto' },
      { type: 'translate-mc', prompt: 'What is "লম্বা" in English?', bengali: 'লম্বা', roman: 'lomba', correct: 'Tall / long', options: ['Tall / long', 'Short', 'Wide', 'Heavy'] },
      { type: 'fib', prompt: 'Complete: "ঘরটা ___" (small)', sentence: 'ঘরটা ___', roman: 'ghôrta ___', english: 'The room is small', acceptable: ['ছোটো', 'chhoto', 'ছোট'], answer: 'ছোটো' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 7: Negation
  // ═══════════════════════════════════════
  {
    id: 'negation',
    number: 7,
    title: 'Negation',
    shortDesc: 'না, নি, নেই, নয় — saying "no" and "not"',
    explanation: `Bengali has several negation words, each used in different contexts:

না (na) — general "no" or negates present/future verbs: আমি যাই না (ami jai na — I don't go). It comes after the verb.

নি (ni) — negates past tense: আমি যাইনি (ami jaini — I didn't go). It attaches to the verb.

নেই (nei) — means "there is not" or "don't have": আমার টাকা নেই (amar taka nei — I don't have money).

নয় (noy) — negates nouns/adjectives ("is not"): এটা ভালো নয় (eta bhalo noy — This is not good).`,
    examples: [
      { bengali: 'আমি যাই না', roman: 'ami jai na', english: "I don't go" },
      { bengali: 'সে আসেনি', roman: 'she asheni', english: "He/she didn't come" },
      { bengali: 'আমার টাকা নেই', roman: 'amar taka nei', english: "I don't have money" },
      { bengali: 'এটা ভালো নয়', roman: 'eta bhalo noy', english: 'This is not good' },
      { bengali: 'সে বাড়িতে নেই', roman: 'she barite nei', english: 'He/she is not at home' },
      { bengali: 'আমি জানি না', roman: 'ami jani na', english: "I don't know" },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does "আমি যাই না" mean?', bengali: 'আমি যাই না', roman: 'ami jai na', correct: "I don't go", options: ["I don't go", "I didn't go", 'I will go', "I can't go"] },
      { type: 'translate-mc', prompt: 'Which word means "there is not"?', bengali: 'নেই', roman: 'nei', correct: 'নেই (nei)', options: ['নেই (nei)', 'না (na)', 'নি (ni)', 'নয় (noy)'] },
      { type: 'fib', prompt: 'Complete: "আমি জানি ___" (don\'t)', sentence: 'আমি জানি ___', roman: 'ami jani ___', english: "I don't know", acceptable: ['না', 'na'], answer: 'না' },
      { type: 'error-spot', prompt: 'Which correctly says "He didn\'t come"?', options: ['সে আসে না', 'সে আসেনি', 'সে আসে নেই', 'সে আসে নয়'], correct: 'সে আসেনি', explanation: 'Past negation uses নি attached to the verb.' },
      { type: 'translate-mc', prompt: '"আমার টাকা নেই" means:', bengali: 'আমার টাকা নেই', roman: 'amar taka nei', correct: "I don't have money", options: ["I don't have money", 'I had money', 'I have money', 'I need money'] },
      { type: 'fib', prompt: 'Complete: "এটা ভালো ___" (is not)', sentence: 'এটা ভালো ___', roman: 'eta bhalo ___', english: 'This is not good', acceptable: ['নয়', 'noy'], answer: 'নয়' },
      { type: 'word-order', prompt: 'Arrange: "I don\'t go"', words: ['না', 'আমি', 'যাই'], correct: ['আমি', 'যাই', 'না'], english: "I don't go", roman: 'ami jai na' },
      { type: 'translate-mc', prompt: 'নি is used to negate:', bengali: 'নি', roman: 'ni', correct: 'Past tense', options: ['Past tense', 'Present tense', 'Future tense', 'Nouns'] },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 8: Asking Questions
  // ═══════════════════════════════════════
  {
    id: 'questions',
    number: 8,
    title: 'Asking Questions',
    shortDesc: 'কী, কে, কোথায়, কেন, কখন, কিভাবে',
    explanation: `Bengali question words typically come right before the verb. Yes/no questions use কি (ki) as a question particle or just rising intonation.

Key question words: কী (ki — what), কে (ke — who), কোথায় (kothay — where), কেন (keno — why), কখন (kokhon — when), কিভাবে (kibhabe — how), কোনটা (konta — which one), কত (koto — how much/many).

Yes/no questions: "তুমি যাবে?" (tumi jabe? — Will you go?) or "তুমি কি যাবে?" (tumi ki jabe? — Will you go?). Note: কী (with ী) means "what," while কি (with ি) is the yes/no question particle.`,
    examples: [
      { bengali: 'তুমি কী খাও?', roman: 'tumi ki khao?', english: 'What do you eat?' },
      { bengali: 'কে আসছে?', roman: 'ke aschhe?', english: 'Who is coming?' },
      { bengali: 'তুমি কোথায় যাও?', roman: 'tumi kothay jao?', english: 'Where do you go?' },
      { bengali: 'সে কেন যায়?', roman: 'she keno jay?', english: 'Why does he/she go?' },
      { bengali: 'তুমি কি বাঙালি?', roman: 'tumi ki bangali?', english: 'Are you Bengali?' },
      { bengali: 'এটার দাম কত?', roman: 'etar dam koto?', english: 'How much does this cost?' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does কোথায় mean?', bengali: 'কোথায়', roman: 'kothay', correct: 'Where', options: ['Where', 'When', 'Why', 'How'] },
      { type: 'fib', prompt: 'Complete: "___ আসছে?" (who)', sentence: '___ আসছে?', roman: '___ aschhe?', english: 'Who is coming?', acceptable: ['কে', 'ke'], answer: 'কে' },
      { type: 'translate-mc', prompt: '"তুমি কী খাও?" means:', bengali: 'তুমি কী খাও?', roman: 'tumi ki khao?', correct: 'What do you eat?', options: ['What do you eat?', 'Do you eat?', 'Why do you eat?', 'When do you eat?'] },
      { type: 'word-order', prompt: 'Arrange: "Where do you go?"', words: ['যাও?', 'কোথায়', 'তুমি'], correct: ['তুমি', 'কোথায়', 'যাও?'], english: 'Where do you go?', roman: 'tumi kothay jao?' },
      { type: 'error-spot', prompt: 'Which correctly asks "Why does he go?"?', options: ['সে কী যায়?', 'সে কেন যায়?', 'সে কোথায় যায়?', 'সে কে যায়?'], correct: 'সে কেন যায়?', explanation: 'কেন means "why."' },
      { type: 'translate-mc', prompt: 'কত means:', bengali: 'কত', roman: 'koto', correct: 'How much / how many', options: ['How much / how many', 'What', 'Which', 'Where'] },
      { type: 'fib', prompt: 'Complete: "সে ___ যায়?" (why)', sentence: 'সে ___ যায়?', roman: 'she ___ jay?', english: 'Why does he/she go?', acceptable: ['কেন', 'keno'], answer: 'কেন' },
      { type: 'translate-mc', prompt: '"তুমি কি বাঙালি?" means:', bengali: 'তুমি কি বাঙালি?', roman: 'tumi ki bangali?', correct: 'Are you Bengali?', options: ['Are you Bengali?', 'What is Bengali?', 'Who is Bengali?', 'You are Bengali'] },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 9: Past Simple Tense
  // ═══════════════════════════════════════
  {
    id: 'past-simple',
    number: 9,
    title: 'Past Simple Tense',
    shortDesc: 'Completed actions in the past',
    explanation: `The past simple tense in Bengali describes completed actions. The verb endings change by person and formality.

Key endings: আমি verb-লাম (ami verb-lam), তুমি verb-লে (tumi verb-le), সে verb-লো (she verb-lo), আপনি/তিনি verb-লেন (apni/tini verb-len).

For "করা" (to do): আমি করলাম (ami korlam — I did), তুমি করলে (tumi korle — you did), সে করলো (she korlo — he/she did), আপনি করলেন (apni korlen — you did, formal).

Some verbs have irregular past forms: যাওয়া → গেলাম (gelam — I went), খাওয়া → খেলাম (khelam — I ate), আসা → এলাম (elam — I came).`,
    examples: [
      { bengali: 'আমি গেলাম', roman: 'ami gelam', english: 'I went' },
      { bengali: 'তুমি খেলে', roman: 'tumi khele', english: 'You ate' },
      { bengali: 'সে এলো', roman: 'she elo', english: 'He/she came' },
      { bengali: 'আপনি কী করলেন?', roman: 'apni ki korlen?', english: 'What did you do? (formal)' },
      { bengali: 'আমরা দেখলাম', roman: 'amra dekhlam', english: 'We saw' },
      { bengali: 'তারা বললো', roman: 'tara bollo', english: 'They said' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does "আমি গেলাম" mean?', bengali: 'আমি গেলাম', roman: 'ami gelam', correct: 'I went', options: ['I went', 'I go', 'I will go', 'I am going'] },
      { type: 'fib', prompt: 'Complete: "সে ___" (came)', sentence: 'সে ___', roman: 'she ___', english: 'He/she came', acceptable: ['এলো', 'elo'], answer: 'এলো' },
      { type: 'error-spot', prompt: 'Which correctly says "We saw"?', options: ['আমরা দেখি', 'আমরা দেখলাম', 'আমরা দেখলে', 'আমরা দেখলো'], correct: 'আমরা দেখলাম', explanation: 'আমরা takes -লাম (-lam) in past tense.' },
      { type: 'translate-mc', prompt: '"তারা বললো" means:', bengali: 'তারা বললো', roman: 'tara bollo', correct: 'They said', options: ['They said', 'They say', 'They will say', 'He said'] },
      { type: 'word-order', prompt: 'Arrange: "What did you do? (formal)"', words: ['করলেন?', 'কী', 'আপনি'], correct: ['আপনি', 'কী', 'করলেন?'], english: 'What did you do?', roman: 'apni ki korlen?' },
      { type: 'fib', prompt: 'Complete: "আমি ___" (went)', sentence: 'আমি ___', roman: 'ami ___', english: 'I went', acceptable: ['গেলাম', 'gelam'], answer: 'গেলাম' },
      { type: 'translate-mc', prompt: 'The past tense ending for আমি is:', bengali: '-লাম', roman: '-lam', correct: '-লাম (-lam)', options: ['-লাম (-lam)', '-লে (-le)', '-লো (-lo)', '-লেন (-len)'] },
      { type: 'word-order', prompt: 'Arrange: "You ate"', words: ['খেলে', 'তুমি'], correct: ['তুমি', 'খেলে'], english: 'You ate', roman: 'tumi khele' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 10: Future Tense
  // ═══════════════════════════════════════
  {
    id: 'future-tense',
    number: 10,
    title: 'Future Tense',
    shortDesc: 'Talking about what will happen',
    explanation: `The future tense in Bengali uses the suffix -ব (-bo) as its base, changing by person:

আমি verb-বো (ami verb-bo), তুমি verb-বে (tumi verb-be), সে verb-বে (she verb-be), আপনি/তিনি verb-বেন (apni/tini verb-ben).

For "করা" (to do): আমি করবো (ami korbo — I will do), তুমি করবে (tumi korbe — you will do), সে করবে (she korbe — he/she will do), আপনি করবেন (apni korben — you will do, formal).

The future tense is also commonly used for polite requests and intentions.`,
    examples: [
      { bengali: 'আমি যাবো', roman: 'ami jabo', english: 'I will go' },
      { bengali: 'তুমি কী করবে?', roman: 'tumi ki korbe?', english: 'What will you do?' },
      { bengali: 'সে আসবে', roman: 'she ashbe', english: 'He/she will come' },
      { bengali: 'আপনি কখন আসবেন?', roman: 'apni kokhon ashben?', english: 'When will you come? (formal)' },
      { bengali: 'আমরা খাবো', roman: 'amra khabo', english: 'We will eat' },
      { bengali: 'তারা পড়বে', roman: 'tara porbe', english: 'They will study' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does "আমি যাবো" mean?', bengali: 'আমি যাবো', roman: 'ami jabo', correct: 'I will go', options: ['I will go', 'I went', 'I go', 'I am going'] },
      { type: 'fib', prompt: 'Complete: "সে ___" (will come)', sentence: 'সে ___', roman: 'she ___', english: 'He/she will come', acceptable: ['আসবে', 'ashbe'], answer: 'আসবে' },
      { type: 'word-order', prompt: 'Arrange: "When will you come? (formal)"', words: ['আসবেন?', 'কখন', 'আপনি'], correct: ['আপনি', 'কখন', 'আসবেন?'], english: 'When will you come?', roman: 'apni kokhon ashben?' },
      { type: 'error-spot', prompt: 'Which correctly says "We will eat"?', options: ['আমরা খাবে', 'আমরা খাবো', 'আমরা খাবেন', 'আমরা খাবেস'], correct: 'আমরা খাবো', explanation: 'আমরা takes -বো (-bo) like আমি in future tense.' },
      { type: 'translate-mc', prompt: '"তারা পড়বে" means:', bengali: 'তারা পড়বে', roman: 'tara porbe', correct: 'They will study', options: ['They will study', 'They studied', 'They study', 'We will study'] },
      { type: 'fib', prompt: 'Complete: "তুমি কী ___?" (will do)', sentence: 'তুমি কী ___?', roman: 'tumi ki ___?', english: 'What will you do?', acceptable: ['করবে', 'korbe'], answer: 'করবে' },
      { type: 'translate-mc', prompt: 'The future ending for আপনি is:', bengali: '-বেন', roman: '-ben', correct: '-বেন (-ben)', options: ['-বেন (-ben)', '-বে (-be)', '-বো (-bo)', '-বেস (-bes)'] },
      { type: 'word-order', prompt: 'Arrange: "I will go"', words: ['যাবো', 'আমি'], correct: ['আমি', 'যাবো'], english: 'I will go', roman: 'ami jabo' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 11: Continuous Tenses
  // ═══════════════════════════════════════
  {
    id: 'continuous-tenses',
    number: 11,
    title: 'Continuous Tenses',
    shortDesc: 'Actions happening right now',
    explanation: `The present continuous tense describes actions happening right now. It is formed with the verb stem + ছ (-chh-) + person ending.

আমি করছি (ami korchhi — I am doing), তুমি করছো (tumi korchho — you are doing), সে করছে (she korchhe — he/she is doing), আপনি করছেন (apni korchhen — you are doing, formal).

The past continuous uses ছিল (chhilo): আমি করছিলাম (ami korchhilam — I was doing). This describes an ongoing action in the past.

The continuous tenses are very common in everyday Bengali conversation.`,
    examples: [
      { bengali: 'আমি খাচ্ছি', roman: 'ami khachhi', english: 'I am eating' },
      { bengali: 'তুমি কী করছো?', roman: 'tumi ki korchho?', english: 'What are you doing?' },
      { bengali: 'সে ঘুমাচ্ছে', roman: 'she ghumachhe', english: 'He/she is sleeping' },
      { bengali: 'বৃষ্টি হচ্ছে', roman: 'brishti hochhe', english: 'It is raining' },
      { bengali: 'আমি পড়ছিলাম', roman: 'ami porchhilam', english: 'I was reading' },
      { bengali: 'তারা আসছে', roman: 'tara aschhe', english: 'They are coming' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does "আমি খাচ্ছি" mean?', bengali: 'আমি খাচ্ছি', roman: 'ami khachhi', correct: 'I am eating', options: ['I am eating', 'I ate', 'I will eat', 'I eat'] },
      { type: 'fib', prompt: 'Complete: "তুমি কী ___?" (are doing)', sentence: 'তুমি কী ___?', roman: 'tumi ki ___?', english: 'What are you doing?', acceptable: ['করছো', 'korchho'], answer: 'করছো' },
      { type: 'translate-mc', prompt: '"বৃষ্টি হচ্ছে" means:', bengali: 'বৃষ্টি হচ্ছে', roman: 'brishti hochhe', correct: 'It is raining', options: ['It is raining', 'It rained', 'It will rain', 'Rain stopped'] },
      { type: 'error-spot', prompt: 'Which correctly says "He is sleeping"?', options: ['সে ঘুমায়', 'সে ঘুমাচ্ছে', 'সে ঘুমাচ্ছি', 'সে ঘুমাছে'], correct: 'সে ঘুমাচ্ছে', explanation: 'সে takes -চ্ছে (-chhe) in present continuous.' },
      { type: 'translate-mc', prompt: '"আমি পড়ছিলাম" means:', bengali: 'আমি পড়ছিলাম', roman: 'ami porchhilam', correct: 'I was reading', options: ['I was reading', 'I am reading', 'I will read', 'I read'] },
      { type: 'word-order', prompt: 'Arrange: "They are coming"', words: ['আসছে', 'তারা'], correct: ['তারা', 'আসছে'], english: 'They are coming', roman: 'tara aschhe' },
      { type: 'fib', prompt: 'Complete: "সে ___" (is sleeping)', sentence: 'সে ___', roman: 'she ___', english: 'He/she is sleeping', acceptable: ['ঘুমাচ্ছে', 'ghumachhe'], answer: 'ঘুমাচ্ছে' },
      { type: 'translate-mc', prompt: 'The continuous marker in Bengali is:', bengali: '-ছ-', roman: '-chh-', correct: '-ছ- (-chh-)', options: ['-ছ- (-chh-)', '-ল- (-l-)', '-ব- (-b-)', '-ত- (-t-)'] },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 12: Imperative Mood
  // ═══════════════════════════════════════
  {
    id: 'imperative',
    number: 12,
    title: 'Imperative Mood',
    shortDesc: 'Commands, requests, and instructions',
    explanation: `The imperative mood is used for commands, requests, and instructions. Bengali has three levels matching the pronoun formality:

তুই level (very informal): verb stem alone — যা (ja — go!), কর (kor — do!).
তুমি level (standard): verb stem + ও (-o) — যাও (jao — go), করো (koro — do).
আপনি level (polite): verb stem + উন (-un) or এন (-en) — যান (jan — please go), করুন (korun — please do).

The আপনি form doubles as a polite request. Adding "দয়া করে" (doya kore — please) before any imperative makes it more polite.`,
    examples: [
      { bengali: 'এখানে আসো', roman: 'ekhane esho', english: 'Come here (informal)' },
      { bengali: 'দয়া করে বসুন', roman: 'doya kore boshun', english: 'Please sit down (formal)' },
      { bengali: 'চুপ কর!', roman: 'chup kor!', english: 'Be quiet! (very informal)' },
      { bengali: 'দরজা বন্ধ করো', roman: 'dorja bondho koro', english: 'Close the door (informal)' },
      { bengali: 'একটু অপেক্ষা করুন', roman: 'ektu opekkha korun', english: 'Please wait a moment (formal)' },
      { bengali: 'এটা দেখো', roman: 'eta dekho', english: 'Look at this (informal)' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: '"দয়া করে বসুন" means:', bengali: 'দয়া করে বসুন', roman: 'doya kore boshun', correct: 'Please sit down', options: ['Please sit down', 'Sit down!', 'Are you sitting?', 'I am sitting'] },
      { type: 'error-spot', prompt: 'Which is the polite (আপনি) way to say "Please wait"?', options: ['অপেক্ষা কর', 'অপেক্ষা করো', 'অপেক্ষা করুন', 'অপেক্ষা করবে'], correct: 'অপেক্ষা করুন', explanation: 'করুন is the আপনি-level imperative.' },
      { type: 'fib', prompt: 'Complete: "দরজা বন্ধ ___" (close, informal)', sentence: 'দরজা বন্ধ ___', roman: 'dorja bondho ___', english: 'Close the door', acceptable: ['করো', 'koro'], answer: 'করো' },
      { type: 'translate-mc', prompt: '"চুপ কর!" is at which formality level?', bengali: 'চুপ কর!', roman: 'chup kor!', correct: 'তুই (very informal)', options: ['তুই (very informal)', 'তুমি (informal)', 'আপনি (formal)', 'তিনি (formal 3rd person)'] },
      { type: 'word-order', prompt: 'Arrange: "Please sit down (formal)"', words: ['বসুন', 'করে', 'দয়া'], correct: ['দয়া', 'করে', 'বসুন'], english: 'Please sit down', roman: 'doya kore boshun' },
      { type: 'translate-mc', prompt: '"এটা দেখো" means:', bengali: 'এটা দেখো', roman: 'eta dekho', correct: 'Look at this', options: ['Look at this', 'I see this', 'This is visible', 'Can you see?'] },
      { type: 'fib', prompt: '"দয়া করে" means:', sentence: 'দয়া করে ___', roman: 'doya kore ___', english: 'Please ___ (wait, formal)', acceptable: ['অপেক্ষা করুন', 'opekkha korun'], answer: 'অপেক্ষা করুন' },
      { type: 'error-spot', prompt: 'Which correctly says "Come here" at তুমি level?', options: ['এখানে আয়', 'এখানে আসো', 'এখানে আসুন', 'এখানে আসছে'], correct: 'এখানে আসো', explanation: 'আসো is the তুমি imperative. আয় is তুই, আসুন is আপনি.' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 13: Postpositions
  // ═══════════════════════════════════════
  {
    id: 'postpositions',
    number: 13,
    title: 'Postpositions',
    shortDesc: 'Bengali equivalents of prepositions',
    explanation: `Where English uses prepositions (in, on, to, from) before the noun, Bengali uses postpositions that come after the noun.

Common postpositions: -তে/-এ (-te/-e — in/at/to): বাড়িতে (barite — at home), -র উপরে (-r upore — on top of), -র নিচে (-r niche — under/below), -র সামনে (-r shamne — in front of), -র পাশে (-r pashe — beside), -থেকে (-theke — from), -র জন্য (-r jonno — for), -র সাথে (-r shathe — with).

These postpositions often attach to the noun or follow the possessive form of the noun.`,
    examples: [
      { bengali: 'আমি বাড়িতে আছি', roman: 'ami barite achhi', english: 'I am at home' },
      { bengali: 'বইটা টেবিলের উপরে', roman: 'boita tebiler upore', english: 'The book is on the table' },
      { bengali: 'সে স্কুল থেকে এলো', roman: 'she skul theke elo', english: 'He/she came from school' },
      { bengali: 'আমার জন্য', roman: 'amar jonno', english: 'For me' },
      { bengali: 'তোমার সাথে যাবো', roman: 'tomar shathe jabo', english: 'I will go with you' },
      { bengali: 'গাছের নিচে বসো', roman: 'gachher niche bosho', english: 'Sit under the tree' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does "বাড়িতে" mean?', bengali: 'বাড়িতে', roman: 'barite', correct: 'At home', options: ['At home', 'From home', 'To the home', 'Near home'] },
      { type: 'fib', prompt: 'Complete: "বইটা টেবিলের ___" (on top of)', sentence: 'বইটা টেবিলের ___', roman: 'boita tebiler ___', english: 'The book is on the table', acceptable: ['উপরে', 'upore'], answer: 'উপরে' },
      { type: 'translate-mc', prompt: '"থেকে" means:', bengali: 'থেকে', roman: 'theke', correct: 'From', options: ['From', 'To', 'In', 'With'] },
      { type: 'word-order', prompt: 'Arrange: "I am at home"', words: ['আছি', 'আমি', 'বাড়িতে'], correct: ['আমি', 'বাড়িতে', 'আছি'], english: 'I am at home', roman: 'ami barite achhi' },
      { type: 'error-spot', prompt: 'Which correctly says "Sit under the tree"?', options: ['নিচে গাছের বসো', 'গাছের নিচে বসো', 'নিচে বসো গাছের', 'বসো গাছের নিচে'], correct: 'গাছের নিচে বসো', explanation: 'The postposition নিচে follows the possessive গাছের.' },
      { type: 'translate-mc', prompt: '"তোমার সাথে" means:', bengali: 'তোমার সাথে', roman: 'tomar shathe', correct: 'With you', options: ['With you', 'For you', 'To you', 'From you'] },
      { type: 'fib', prompt: 'Complete: "সে স্কুল ___ এলো" (from)', sentence: 'সে স্কুল ___ এলো', roman: 'she skul ___ elo', english: 'He came from school', acceptable: ['থেকে', 'theke'], answer: 'থেকে' },
      { type: 'translate-mc', prompt: '"আমার জন্য" means:', bengali: 'আমার জন্য', roman: 'amar jonno', correct: 'For me', options: ['For me', 'With me', 'About me', 'By me'] },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 14: Classifiers & Counters
  // ═══════════════════════════════════════
  {
    id: 'classifiers',
    number: 14,
    title: 'Classifiers & Counters',
    shortDesc: 'টা/টি, জন, খানা — counting words',
    explanation: `Bengali requires classifiers (counter words) between numbers and nouns, similar to Chinese or Japanese. You cannot say "two books" directly — you need "দুইটা বই" (duita boi — two-CL book).

Common classifiers: টা/টি (ta/ti — general objects, টি is more formal), জন (jon — people), খানা (khana — flat objects, pieces), গাছা (gachha — stick-like things).

টা and টি also function as definite articles: বইটা (boita — the book), মেয়েটি (meyeti — the girl). একটা (ekta) means "one" or "a/an": একটা বই (ekta boi — a book).`,
    examples: [
      { bengali: 'একটা বই', roman: 'ekta boi', english: 'A book / one book' },
      { bengali: 'দুইজন ছেলে', roman: 'duijon chhele', english: 'Two boys' },
      { bengali: 'তিনটা আম', roman: 'tinta am', english: 'Three mangoes' },
      { bengali: 'বইটা দাও', roman: 'boita dao', english: 'Give (me) the book' },
      { bengali: 'মেয়েটি সুন্দর', roman: 'meyeti sundor', english: 'The girl is beautiful' },
      { bengali: 'চারজন লোক এলো', roman: 'charjon lok elo', english: 'Four people came' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'Which classifier is used for people?', bengali: 'জন', roman: 'jon', correct: 'জন (jon)', options: ['জন (jon)', 'টা (ta)', 'খানা (khana)', 'গাছা (gachha)'] },
      { type: 'fib', prompt: 'Complete: "দুই___ ছেলে" (two boys)', sentence: 'দুই___ ছেলে', roman: 'dui___ chhele', english: 'Two boys', acceptable: ['জন', 'jon'], answer: 'জন' },
      { type: 'translate-mc', prompt: '"একটা বই" means:', bengali: 'একটা বই', roman: 'ekta boi', correct: 'A book / one book', options: ['A book / one book', 'The books', 'Many books', 'Some books'] },
      { type: 'error-spot', prompt: 'Which correctly says "three mangoes"?', options: ['তিন আম', 'তিনটা আম', 'তিনজন আম', 'আমটা তিন'], correct: 'তিনটা আম', explanation: 'Mangoes are objects — use টা, not জন (which is for people).' },
      { type: 'translate-mc', prompt: '"বইটা" means:', bengali: 'বইটা', roman: 'boita', correct: 'The book (specific)', options: ['The book (specific)', 'A book', 'Books', 'Some book'] },
      { type: 'word-order', prompt: 'Arrange: "Four people came"', words: ['এলো', 'লোক', 'চারজন'], correct: ['চারজন', 'লোক', 'এলো'], english: 'Four people came', roman: 'charjon lok elo' },
      { type: 'fib', prompt: 'Complete: "তিন___ আম" (three mangoes)', sentence: 'তিন___ আম', roman: 'tin___ am', english: 'Three mangoes', acceptable: ['টা', 'ta'], answer: 'টা' },
      { type: 'translate-mc', prompt: 'টি is:', bengali: 'টি', roman: 'ti', correct: 'A more formal version of টা', options: ['A more formal version of টা', 'Used only for people', 'A plural marker', 'A verb ending'] },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 15: Vowel Marks (কার)
  // ═══════════════════════════════════════
  {
    id: 'vowel-marks',
    number: 15,
    title: 'Vowel Marks (কার)',
    shortDesc: 'How vowels attach to consonants',
    explanation: `When a vowel follows a consonant in Bengali, it is written as a vowel mark (কার — kar) attached to the consonant, not as a separate letter.

Each vowel has a corresponding mark: আ-কার (া), ই-কার (ি), ঈ-কার (ী), উ-কার (ু), ঊ-কার (ূ), ঋ-কার (ৃ), এ-কার (ে), ঐ-কার (ৈ), ও-কার (ো), ঔ-কার (ৌ).

For example: ক + আ-কার = কা (ka), ক + ই-কার = কি (ki), ক + উ-কার = কু (ku). The inherent vowel অ (ô) has no mark — a consonant alone carries it: ক = kô.`,
    examples: [
      { bengali: 'কা = ক + া', roman: 'ka = k + aa-kar', english: 'ka (k + আ-কার)' },
      { bengali: 'কি = ক + ি', roman: 'ki = k + i-kar', english: 'ki (k + ই-কার)' },
      { bengali: 'কু = ক + ু', roman: 'ku = k + u-kar', english: 'ku (k + উ-কার)' },
      { bengali: 'কে = ক + ে', roman: 'ke = k + e-kar', english: 'ke (k + এ-কার)' },
      { bengali: 'কো = ক + ো', roman: 'ko = k + o-kar', english: 'ko (k + ও-কার)' },
      { bengali: 'কৌ = ক + ৌ', roman: 'kou = k + ou-kar', english: 'kou (k + ঔ-কার)' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What is া called?', bengali: 'া', roman: 'aa-kar', correct: 'আ-কার (aa-kar)', options: ['আ-কার (aa-kar)', 'ই-কার (i-kar)', 'উ-কার (u-kar)', 'এ-কার (e-kar)'] },
      { type: 'fib', prompt: 'ক + ি = ?', sentence: 'ক + ি = ___', roman: 'k + i-kar = ___', english: 'ki', acceptable: ['কি', 'ki'], answer: 'কি' },
      { type: 'translate-mc', prompt: 'Which vowel mark is ু?', bengali: 'ু', roman: 'u-kar', correct: 'উ-কার (u-kar)', options: ['উ-কার (u-kar)', 'ঊ-কার (uu-kar)', 'ঋ-কার (ri-kar)', 'ই-কার (i-kar)'] },
      { type: 'error-spot', prompt: 'Which correctly represents "ko"?', options: ['কু', 'কো', 'কৌ', 'কা'], correct: 'কো', explanation: 'কো = ক + ো (ও-কার). কু is "ku", কৌ is "kou", কা is "ka".' },
      { type: 'translate-mc', prompt: 'A consonant with no vowel mark carries which sound?', bengali: 'ক', roman: 'kô', correct: 'The inherent vowel অ (ô)', options: ['The inherent vowel অ (ô)', 'No vowel sound', 'The vowel আ (a)', 'The vowel এ (e)'] },
      { type: 'fib', prompt: 'ক + া = ?', sentence: 'ক + া = ___', roman: 'k + aa-kar = ___', english: 'ka', acceptable: ['কা', 'ka'], answer: 'কা' },
      { type: 'translate-mc', prompt: 'Which is ে (e-kar) applied to ক?', bengali: 'কে', roman: 'ke', correct: 'কে', options: ['কে', 'কি', 'কা', 'কো'] },
      { type: 'fib', prompt: 'ক + ু = ?', sentence: 'ক + ু = ___', roman: 'k + u-kar = ___', english: 'ku', acceptable: ['কু', 'ku'], answer: 'কু' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 16: Conjunct Consonants
  // ═══════════════════════════════════════
  {
    id: 'conjunct-consonants',
    number: 16,
    title: 'Conjunct Consonants (যুক্তবর্ণ)',
    shortDesc: 'When consonants combine together',
    explanation: `When two or more consonants appear together without a vowel between them, they form conjunct consonants (যুক্তবর্ণ — juktoborno). Bengali has hundreds of these combinations.

The হসন্ত (hosonto — ্) is the mark that removes the inherent vowel, allowing consonants to combine: ক + ্ + ত = ক্ত (kto).

Common conjuncts: ক্ত (kto) as in শক্ত (shokto — hard), ন্ত (nto) as in অন্ত (onto — end), ক্ষ (kkho) as in রক্ষা (rokkha — protection), জ্ঞ (ggo) as in জ্ঞান (ggan — knowledge).

Learning to recognize common conjuncts is essential for reading Bengali fluently.`,
    examples: [
      { bengali: 'ক্ত — শক্ত', roman: 'kto — shokto', english: 'hard / strong' },
      { bengali: 'ন্ত — অন্ত', roman: 'nto — onto', english: 'end' },
      { bengali: 'ক্ষ — রক্ষা', roman: 'kkho — rokkha', english: 'protection' },
      { bengali: 'স্ত — মস্ত', roman: 'sto — mosto', english: 'great / huge' },
      { bengali: 'ন্দ — আনন্দ', roman: 'ndo — anondo', english: 'joy / happiness' },
      { bengali: 'ঙ্গ — বাংলা', roman: 'ngo — bangla', english: 'Bengali' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does যুক্তবর্ণ mean?', bengali: 'যুক্তবর্ণ', roman: 'juktoborno', correct: 'Conjunct consonants', options: ['Conjunct consonants', 'Vowel marks', 'Plural markers', 'Verb endings'] },
      { type: 'translate-mc', prompt: '"শক্ত" means:', bengali: 'শক্ত', roman: 'shokto', correct: 'Hard / strong', options: ['Hard / strong', 'Soft / weak', 'Big / large', 'Small / little'] },
      { type: 'fib', prompt: 'ক + ্ + ত = ?', sentence: 'ক + ্ + ত = ___', roman: 'k + hosonto + t = ___', english: 'conjunct kto', acceptable: ['ক্ত', 'kto'], answer: 'ক্ত' },
      { type: 'error-spot', prompt: 'Which word contains the conjunct ন্দ?', options: ['আনন্দ', 'শক্ত', 'রক্ষা', 'মস্ত'], correct: 'আনন্দ', explanation: 'আনন্দ (anondo — joy) contains ন্দ.' },
      { type: 'translate-mc', prompt: '"আনন্দ" means:', bengali: 'আনন্দ', roman: 'anondo', correct: 'Joy / happiness', options: ['Joy / happiness', 'Sadness', 'Anger', 'Fear'] },
      { type: 'translate-mc', prompt: 'The হসন্ত (্) mark does what?', bengali: '্', roman: 'hosonto', correct: 'Removes the inherent vowel', options: ['Removes the inherent vowel', 'Adds a vowel', 'Makes a consonant nasal', 'Doubles a consonant'] },
      { type: 'fib', prompt: '"রক্ষা" contains which conjunct?', sentence: 'রক্ষা contains ___', roman: 'rokkha contains ___', english: 'kkho conjunct', acceptable: ['ক্ষ', 'kkho'], answer: 'ক্ষ' },
      { type: 'translate-mc', prompt: '"মস্ত" means:', bengali: 'মস্ত', roman: 'mosto', correct: 'Great / huge', options: ['Great / huge', 'Small / tiny', 'Equal / same', 'Gentle / soft'] },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 17: Compound Verbs
  // ═══════════════════════════════════════
  {
    id: 'compound-verbs',
    number: 17,
    title: 'Compound Verbs',
    shortDesc: 'Two verbs working together',
    explanation: `Compound verbs are extremely common in Bengali. They consist of a main verb (in its stem form) + a helper verb that adds nuance like completion, benefit, direction, or intensity.

Common helper verbs: ফেলা (phela — completeness/finality): খেয়ে ফেলো (kheye phelo — eat it up), নেওয়া (neowa — for self-benefit): শিখে নাও (shikhe nao — learn it for yourself), দেওয়া (deowa — for others): করে দাও (kore dao — do it for someone), যাওয়া (jaowa — away/gradual change): চলে যাও (chole jao — go away).

The main verb takes the -এ/-ে (-e) form (conjunctive participle) before the helper verb.`,
    examples: [
      { bengali: 'খেয়ে ফেলো', roman: 'kheye phelo', english: 'Eat it up (completely)' },
      { bengali: 'শিখে নাও', roman: 'shikhe nao', english: 'Learn it (for yourself)' },
      { bengali: 'করে দাও', roman: 'kore dao', english: 'Do it (for someone)' },
      { bengali: 'চলে যাও', roman: 'chole jao', english: 'Go away' },
      { bengali: 'পড়ে ফেলেছি', roman: 'pore phelechhi', english: 'I have read it (completely)' },
      { bengali: 'বলে দাও', roman: 'bole dao', english: 'Tell (someone, as a favor)' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: '"খেয়ে ফেলো" means:', bengali: 'খেয়ে ফেলো', roman: 'kheye phelo', correct: 'Eat it up (completely)', options: ['Eat it up (completely)', 'Start eating', 'Stop eating', 'Keep eating'] },
      { type: 'translate-mc', prompt: 'ফেলা as a helper verb adds the sense of:', bengali: 'ফেলা', roman: 'phela', correct: 'Completeness / finality', options: ['Completeness / finality', 'Self-benefit', 'Helping others', 'Gradual change'] },
      { type: 'fib', prompt: 'Complete: "শিখে ___" (learn for yourself)', sentence: 'শিখে ___', roman: 'shikhe ___', english: 'Learn it (for yourself)', acceptable: ['নাও', 'nao'], answer: 'নাও' },
      { type: 'error-spot', prompt: 'Which means "do it for someone"?', options: ['করে নাও', 'করে দাও', 'করে ফেলো', 'করে যাও'], correct: 'করে দাও', explanation: 'দেওয়া (দাও) as helper means doing something for someone else.' },
      { type: 'translate-mc', prompt: '"চলে যাও" means:', bengali: 'চলে যাও', roman: 'chole jao', correct: 'Go away', options: ['Go away', 'Come here', 'Stay here', 'Sit down'] },
      { type: 'word-order', prompt: 'Arrange: "Tell someone (as a favor)"', words: ['দাও', 'বলে'], correct: ['বলে', 'দাও'], english: 'Tell (someone)', roman: 'bole dao' },
      { type: 'translate-mc', prompt: 'নেওয়া as a helper verb means:', bengali: 'নেওয়া', roman: 'neowa', correct: 'For self-benefit', options: ['For self-benefit', 'For others', 'Completion', 'Movement away'] },
      { type: 'fib', prompt: 'Complete: "করে ___" (do for someone)', sentence: 'করে ___', roman: 'kore ___', english: 'Do it (for someone)', acceptable: ['দাও', 'dao'], answer: 'দাও' },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 18: Conditional Sentences
  // ═══════════════════════════════════════
  {
    id: 'conditionals',
    number: 18,
    title: 'Conditional Sentences',
    shortDesc: 'যদি...তাহলে — if...then',
    explanation: `Conditional sentences in Bengali use যদি (jodi — if) and তাহলে (tahole — then). The verb in the "if" clause usually takes a special conditional form.

Basic pattern: যদি + condition, তাহলে + result.

যদি তুমি যাও, তাহলে আমিও যাবো (jodi tumi jao, tahole amio jabo — If you go, then I will go too).

The conditional verb form often uses the present tense in the "if" clause even for future conditions. তাহলে can be omitted when the meaning is clear. যদি can also come mid-sentence.`,
    examples: [
      { bengali: 'যদি বৃষ্টি হয়, তাহলে আমি যাবো না', roman: 'jodi brishti hoy, tahole ami jabo na', english: "If it rains, I won't go" },
      { bengali: 'যদি তুমি চাও, আমি আসবো', roman: 'jodi tumi chao, ami ashbo', english: 'If you want, I will come' },
      { bengali: 'যদি পারো, একটু সাহায্য করো', roman: 'jodi paro, ektu shahajjo koro', english: 'If you can, help a little' },
      { bengali: 'যদি সে আসে, আমি খুশি হবো', roman: 'jodi she ashe, ami khushi hobo', english: 'If he/she comes, I will be happy' },
      { bengali: 'পড়লে পাশ করবে', roman: 'porle pash korbe', english: 'If you study, you will pass' },
      { bengali: 'যদি দেরি হয়, ফোন করো', roman: 'jodi deri hoy, phone koro', english: 'If it gets late, call me' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What does যদি mean?', bengali: 'যদি', roman: 'jodi', correct: 'If', options: ['If', 'Then', 'But', 'Because'] },
      { type: 'fib', prompt: 'Complete: "___ বৃষ্টি হয়, তাহলে আমি যাবো না"', sentence: '___ বৃষ্টি হয়, তাহলে আমি যাবো না', roman: '___ brishti hoy, tahole ami jabo na', english: "If it rains, I won't go", acceptable: ['যদি', 'jodi'], answer: 'যদি' },
      { type: 'translate-mc', prompt: 'তাহলে means:', bengali: 'তাহলে', roman: 'tahole', correct: 'Then (in that case)', options: ['Then (in that case)', 'If', 'But', 'Or'] },
      { type: 'word-order', prompt: 'Arrange: "If you want, I will come"', words: ['আমি', 'আসবো', 'চাও,', 'তুমি', 'যদি'], correct: ['যদি', 'তুমি', 'চাও,', 'আমি', 'আসবো'], english: 'If you want, I will come', roman: 'jodi tumi chao, ami ashbo' },
      { type: 'error-spot', prompt: 'Which correctly says "If you study, you will pass"?', options: ['যদি পড়ে, পাশ করবে', 'যদি পড়ো, পাশ করবে', 'যদি পড়বে, পাশ করবে', 'যদি পড়লাম, পাশ করবে'], correct: 'যদি পড়ো, পাশ করবে', explanation: 'The "if" clause uses present tense (পড়ো) for future conditions.' },
      { type: 'translate-mc', prompt: '"যদি সে আসে, আমি খুশি হবো" means:', bengali: 'যদি সে আসে, আমি খুশি হবো', roman: 'jodi she ashe, ami khushi hobo', correct: 'If he comes, I will be happy', options: ['If he comes, I will be happy', 'When he came, I was happy', 'He came and I am happy', 'He will come and be happy'] },
      { type: 'fib', prompt: 'Complete: "যদি দেরি হয়, ফোন ___" (call me)', sentence: 'যদি দেরি হয়, ফোন ___', roman: 'jodi deri hoy, phone ___', english: 'If it gets late, call', acceptable: ['করো', 'koro'], answer: 'করো' },
      { type: 'translate-mc', prompt: 'Can তাহলে be omitted?', bengali: '', roman: '', correct: 'Yes, when meaning is clear', options: ['Yes, when meaning is clear', 'No, never', 'Only in formal speech', 'Only in questions'] },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 19: Relative Clauses
  // ═══════════════════════════════════════
  {
    id: 'relative-clauses',
    number: 19,
    title: 'Relative Clauses',
    shortDesc: 'যে...সে — the one who...',
    explanation: `Bengali relative clauses use correlative pairs — a relative word in the first clause and a matching demonstrative in the second clause.

Key pairs: যে...সে (je...she — the one who...that one), যা...তা (ja...ta — what...that), যেখানে...সেখানে (jekhane...sekhane — where...there), যখন...তখন (jokhon...tokhon — when...then).

যে ছেলে পড়ে, সে পাশ করে (je chhele pore, she pash kore — The boy who studies, he passes). The relative clause comes first, unlike in English where it follows the noun.`,
    examples: [
      { bengali: 'যে পড়ে, সে পাশ করে', roman: 'je pore, she pash kore', english: 'He who studies, passes' },
      { bengali: 'যা চাও, তা নাও', roman: 'ja chao, ta nao', english: 'Take what you want' },
      { bengali: 'যেখানে যাবে, সেখানে যাবো', roman: 'jekhane jabe, sekhane jabo', english: 'Where you go, I will go' },
      { bengali: 'যখন আসবে, তখন বলো', roman: 'jokhon ashbe, tokhon bolo', english: 'When you come, tell me then' },
      { bengali: 'যে মেয়েটি গান গায়, সে আমার বোন', roman: 'je meyeti gan gay, she amar bon', english: 'The girl who sings is my sister' },
      { bengali: 'যত চাও, তত নাও', roman: 'joto chao, toto nao', english: 'Take as much as you want' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'What is the correlative pair for "who...that one"?', bengali: 'যে...সে', roman: 'je...she', correct: 'যে...সে', options: ['যে...সে', 'যা...তা', 'যখন...তখন', 'যেখানে...সেখানে'] },
      { type: 'fib', prompt: 'Complete: "যে পড়ে, ___ পাশ করে"', sentence: 'যে পড়ে, ___ পাশ করে', roman: 'je pore, ___ pash kore', english: 'He who studies, passes', acceptable: ['সে', 'she'], answer: 'সে' },
      { type: 'translate-mc', prompt: '"যা চাও, তা নাও" means:', bengali: 'যা চাও, তা নাও', roman: 'ja chao, ta nao', correct: 'Take what you want', options: ['Take what you want', 'Give what you have', 'What do you want?', 'I want that'] },
      { type: 'error-spot', prompt: 'Which correctly uses যেখানে...সেখানে?', options: ['যেখানে যাবে, তখন যাবো', 'যেখানে যাবে, সেখানে যাবো', 'যখন যাবে, সেখানে যাবো', 'যেখানে যাবে, তা যাবো'], correct: 'যেখানে যাবে, সেখানে যাবো', explanation: 'যেখানে (where) pairs with সেখানে (there).' },
      { type: 'word-order', prompt: 'Arrange: "When you come, tell me then"', words: ['বলো', 'তখন', 'আসবে,', 'যখন'], correct: ['যখন', 'আসবে,', 'তখন', 'বলো'], english: 'When you come, tell me then', roman: 'jokhon ashbe, tokhon bolo' },
      { type: 'translate-mc', prompt: 'যত...তত means:', bengali: 'যত...তত', roman: 'joto...toto', correct: 'As much...that much', options: ['As much...that much', 'Who...that one', 'Where...there', 'When...then'] },
      { type: 'fib', prompt: 'Complete: "___চাও, তা নাও" (what)', sentence: '___ চাও, তা নাও', roman: '___ chao, ta nao', english: 'Take what you want', acceptable: ['যা', 'ja'], answer: 'যা' },
      { type: 'translate-mc', prompt: '"যে মেয়েটি গান গায়, সে আমার বোন" means:', bengali: 'যে মেয়েটি গান গায়, সে আমার বোন', roman: 'je meyeti gan gay, she amar bon', correct: 'The girl who sings is my sister', options: ['The girl who sings is my sister', 'My sister sings songs', 'That girl is singing', 'I want the girl to sing'] },
    ]
  },

  // ═══════════════════════════════════════
  //  LESSON 20: Honorific System & Politeness
  // ═══════════════════════════════════════
  {
    id: 'honorifics',
    number: 20,
    title: 'Honorific System & Politeness',
    shortDesc: 'Navigating respect in Bengali culture',
    explanation: `Bengali has a rich honorific system that goes beyond just তুই/তুমি/আপনি. Proper use of honorifics is crucial in Bengali social interactions.

Kinship terms are used as honorifics even for non-relatives: দাদা/দিদি (dada/didi — elder brother/sister) for slightly older strangers, কাকা/কাকি (kaka/kaki — uncle/aunt) for much older people.

Adding -বাবু (-babu) or -সাহেব (-shaheb) after a name shows respect. Using তিনি instead of সে elevates the person's status in conversation.

Polite expressions: দয়া করে (doya kore — please), মাফ করবেন (maph korben — forgive me/excuse me), ধন্যবাদ (dhonnobad — thank you), আসসালামু আলাইকুম (assalamu alaikum — peace greeting).`,
    examples: [
      { bengali: 'দাদা, একটু সাহায্য করবেন?', roman: 'dada, ektu shahajjo korben?', english: 'Brother, could you help a little?' },
      { bengali: 'মাফ করবেন, একটু বলবেন?', roman: 'maph korben, ektu bolben?', english: 'Excuse me, could you tell me?' },
      { bengali: 'তিনি অনেক ভালো মানুষ', roman: 'tini onek bhalo manush', english: 'He/she is a very good person (respectful)' },
      { bengali: 'জ্বি, আমি বুঝেছি', roman: 'jee, ami bujhechhi', english: 'Yes (respectful), I understood' },
      { bengali: 'আসসালামু আলাইকুম', roman: 'assalamu alaikum', english: 'Peace be upon you (Muslim greeting)' },
      { bengali: 'নমস্কার', roman: 'nomoshkar', english: 'Hello (Hindu/formal greeting)' },
    ],
    quiz: [
      { type: 'translate-mc', prompt: 'When speaking to an older stranger, you might call them:', bengali: 'দাদা / দিদি', roman: 'dada / didi', correct: 'দাদা (brother) or দিদি (sister)', options: ['দাদা (brother) or দিদি (sister)', 'তুই (informal you)', 'ভাই (younger brother)', 'বন্ধু (friend)'] },
      { type: 'translate-mc', prompt: '"মাফ করবেন" means:', bengali: 'মাফ করবেন', roman: 'maph korben', correct: 'Excuse me / forgive me', options: ['Excuse me / forgive me', 'Thank you', 'Hello', 'Goodbye'] },
      { type: 'fib', prompt: 'Complete: "দাদা, একটু সাহায্য ___?" (could you help, formal)', sentence: 'দাদা, একটু সাহায্য ___?', roman: 'dada, ektu shahajjo ___?', english: 'Brother, could you help?', acceptable: ['করবেন', 'korben'], answer: 'করবেন' },
      { type: 'error-spot', prompt: 'Which is the most polite way to ask for directions?', options: ['এই, কোথায় যেতে হবে বলো', 'মাফ করবেন, একটু বলবেন রাস্তাটা কোথায়?', 'তুই বল, রাস্তা কোনটা?', 'শোন, রাস্তা দেখা'], correct: 'মাফ করবেন, একটু বলবেন রাস্তাটা কোথায়?', explanation: 'Using মাফ করবেন and আপনি-level verb (বলবেন) is the most polite.' },
      { type: 'translate-mc', prompt: '"জ্বি" is:', bengali: 'জ্বি', roman: 'jee', correct: 'A respectful way to say "yes"', options: ['A respectful way to say "yes"', 'A way to say "no"', 'A greeting', 'A farewell'] },
      { type: 'translate-mc', prompt: '"নমস্কার" is used as:', bengali: 'নমস্কার', roman: 'nomoshkar', correct: 'A formal/Hindu greeting', options: ['A formal/Hindu greeting', 'A farewell only', 'A Muslim greeting', 'An informal greeting'] },
      { type: 'fib', prompt: 'The respectful third person pronoun is:', sentence: '___ অনেক ভালো মানুষ', roman: '___ onek bhalo manush', english: 'He/she is a very good person', acceptable: ['তিনি', 'tini'], answer: 'তিনি' },
      { type: 'word-order', prompt: 'Arrange: "Excuse me, could you tell me?"', words: ['বলবেন?', 'একটু', 'করবেন,', 'মাফ'], correct: ['মাফ', 'করবেন,', 'একটু', 'বলবেন?'], english: 'Excuse me, could you tell me?', roman: 'maph korben, ektu bolben?' },
    ]
  },
];
