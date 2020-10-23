const formatter = Intl.NumberFormat('pt-pt', {
  style: 'currency',
  currency: 'EUR',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
