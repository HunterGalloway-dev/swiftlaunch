export const convertNumberToCurrency = (num: number) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);

  return formatted;
};
