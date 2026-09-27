export function getNumericTime(date:string) {
  let time: string = "";
  if (date !== undefined) {
    time = new Date(date?.replace(" ", "T")).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }
  return time;
}
export function getNamedTime(date: string) {
  if (!date) {
    return {
      weekday: "",
      month: "",
      day: "",
    };
  }

  const formattedDate = new Date(date);

  return {
    weekday: formattedDate.toLocaleDateString("en-US", {
      weekday: "short",
    }),

    month: formattedDate.toLocaleDateString("en-US", {
      month: "short",
    }),

    day: formattedDate.toLocaleDateString("en-US", {
      day: "numeric",
    }),
  };
}