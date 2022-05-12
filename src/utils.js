export const formatPopulation = (amount) =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
