
export function removeCommas(value: string | number, allowPlusSign = false) {
  if (typeof value !== "string") value = value.toString();
  const regex = allowPlusSign ? /[^\d.+]/g : /[^\d.]/g;
  return value.replace(regex, "").replace(/,/g, "");
}


export function addCommas(num: string | number, decimalPlaces = 0) {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  const n = typeof num === "string" ? parseFloat(num) : num;
  if (isNaN(n)) return num.toString();
  return n.toFixed(decimalPlaces).replace(regex, ",");
}


export function formatCurrency(value: string | number, currency = "TZS") {
  const formattedValue = addCommas(value, 0);
  return `${currency} ${formattedValue}`;
}
