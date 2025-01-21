export function addAndHighlightChoice(regex, story, respondentChoice) {
   return story.replace(
        regex,
        (match) =>
            respondentChoice
      )
}