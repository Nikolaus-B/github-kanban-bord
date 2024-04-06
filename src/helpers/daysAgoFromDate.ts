function daysAgoFromDate(date: string): string {
  const currentDate = new Date();
  const inputDate = new Date(date);

  const differenceInMs = currentDate.getTime() - inputDate.getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24;

  const daysAgo = Math.floor(differenceInMs / oneDayInMs);

  if (daysAgo === 0) {
    return "today";
  } else if (daysAgo === 1) {
    return "yesterday";
  } else {
    return `${daysAgo} days ago`;
  }
}

export default daysAgoFromDate;
