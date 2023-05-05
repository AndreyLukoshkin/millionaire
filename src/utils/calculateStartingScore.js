const calculateStartingScore = (score) => {
  if (score === 0) return 500
  if (score === 64000) return 125000
  return score * 2
}

export default calculateStartingScore
