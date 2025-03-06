export const formatedDate = (date: string) => {
  const datePart = date.split("T")[0].split("-");

  const newDate = `${datePart[2]}/${datePart[1]}/${datePart[0]}`;

  return newDate;
};
