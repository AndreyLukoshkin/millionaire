const animateAnswerWithSetTimeout = (
  setIsCorrectAnswer,
  setIsBtnPressedChangeClassName
) => {
  let interval = 0
  setTimeout(function start() {
    setIsBtnPressedChangeClassName(
      (IsBtnPressedChangeClassName) => !IsBtnPressedChangeClassName
    )
    interval++
    if (interval === 8) setIsCorrectAnswer(true)
    if (interval < 9) setTimeout(start, 150)
  }, 150)
}

export default animateAnswerWithSetTimeout
