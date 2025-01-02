export function addAndHightlightChoice(regex, story, respondentChoice) {
   return story.replace(
        regex,
        (match) =>
            respondentChoice
      )
}