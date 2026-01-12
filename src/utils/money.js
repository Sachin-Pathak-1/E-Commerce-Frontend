export function FormatMoney(amaoutCents) {
   return `$${(amaoutCents / 100).toFixed(2)}`;
}