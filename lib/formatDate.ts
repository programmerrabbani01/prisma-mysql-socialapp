// export const formatDate = (dateStr: string) => {
//   const date = new Date(dateStr);
//   const formatted = new Intl.DateTimeFormat("id-ID", {
//     dateStyle: "medium",
//     timeStyle: "short",
//   });
//   return formatted.format(date);
// };

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formatted = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formatted.format(date);
};
