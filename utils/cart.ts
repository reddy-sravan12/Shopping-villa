export const getTheFinalPrice = (
  price: number,
  discount: number,
  isFixed: boolean
) => {
  let finalPrice;

  if (isFixed) {
    // If the discount is fixed, subtract the discount amount from the price
    finalPrice = price - discount;
  } else {
    // If the discount is a percentage, calculate the discount and subtract it from the price
    finalPrice = price - price * (discount / 100);
  }

  // Ensure that the final price is not negative
  if (finalPrice < 0) {
    finalPrice = 0;
  }

  return Math.ceil(finalPrice);
};
