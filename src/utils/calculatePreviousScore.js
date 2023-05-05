const calculatePreviousScore = (score) => {
  if (score === 500) return 0
  if (score === 125000) return 64000
  else return score / 2
}

export default calculatePreviousScore
