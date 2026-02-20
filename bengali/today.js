function getLessonOfDay() {
  return GRAMMAR_LESSONS.find(l => {
    const p = getLessonProgress(l);
    return p.pct < 100;
  }) || null;
}


function passageWordCount(text) {
  return (text.match(/[ঀ-৿A-Za-z]+/g) || []).length;
}


export { getLessonOfDay, passageWordCount };
