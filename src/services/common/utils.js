export const toMoney = (value, currency = '$') => {
  return `${currency}${value.toFixed(2)}`;
};
