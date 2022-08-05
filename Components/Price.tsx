import React from "react";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatPrice(price: number) {
  if (price === undefined) {
    return null;
  }
  const formattedPrice = formatter.format(price);
  const [dollars, cents] = formattedPrice.split('.');

  return <span>{dollars}.<sup>{cents}</sup></span>
}

export default function Price(props: any) {
  const product = (props as any).product;

  let saleprice = product.ec_promo_price;
  let regularprice = product.ec_price;
  let displayPrice = regularprice;
  let withPromo = '';

  if (saleprice === undefined) {
    displayPrice = formatPrice(regularprice);
  }
  else if (saleprice !== undefined && saleprice < regularprice) {
    displayPrice = formatPrice(regularprice);
  }
  else if (saleprice !== undefined && saleprice > regularprice) {
    displayPrice = formatPrice(regularprice);
    withPromo = "save $" + (regularprice - saleprice);
  }
  else {
    displayPrice = formatPrice(saleprice);
  }

  return <div className="widget-price">
    <span className="display-price">
      {displayPrice}
    </span>
    <span className="display-promo">
      {withPromo}
    </span>
  </div>

}

