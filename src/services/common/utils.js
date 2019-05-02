import moment from 'moment';

export const toMoney = (value, currency = '$') => {
  return `${currency}${value.toFixed(2)}`;
};

export const toDateTime = value => {
  return moment(value).format(`MMM D, h:m A`);
};
