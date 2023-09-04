export const convertTime = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString().split(',')[1];

  const hour = formattedDate.slice(0, 3);
  const minute = formattedDate.substring(4, 6);

  const isAM = Number(hour) < 12;

  const twelveHourTime = isAM
    ? `${hour}:${minute} ${'AM'}`
    : `${Number(hour) - 12}:${minute} ${'PM'}`;

  return twelveHourTime;
};