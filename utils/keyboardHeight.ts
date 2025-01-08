export const heightPercentage = (height: number) => {
  if (height >= 932) {
    return '75%'
  }
  if (height > 850 && height < 932) {
    return '70%'
  }
}
