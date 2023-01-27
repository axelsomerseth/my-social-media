enum PaymentTypes {
  creditCard,
  payPal,
  bitcoin,
}
type PaymentMethod = {
  type: PaymentTypes;
  description: string;
};

export { PaymentMethod, PaymentTypes };
