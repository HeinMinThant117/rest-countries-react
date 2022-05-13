export const formatPopulation = (amount) =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const addCommas = (items) => {
  let sentence = "";
  for (let i = 0; i < items.length; i++) {
    sentence += items[i];
    if (i !== items.length - 1) {
      sentence += ", ";
    }
  }

  return sentence;
};
