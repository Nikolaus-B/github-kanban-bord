function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "k";
  } else {
    return num.toString();
  }
}

export default formatNumber;
