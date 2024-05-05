export const getLightness = (arr: number[], i: number) => {
  const lower = Math.floor(arr.length / 2) - 1
  const upper = Math.floor(arr.length / 2) + 1

  if (i === lower) return i * 10 + 5
  if (i === upper) return (i - 1) * 10 + 5

  if (i === Math.floor(arr.length / 2)) return i * 10

  return i > Math.floor(arr.length / 2) ? (i - 1) * 10 : (i + 1) * 10
}
