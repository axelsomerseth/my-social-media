import { User as U } from "./user";
import { PaymentMethod as PM } from "./paymentMethods";

type Account = {
  user: U;
  paymentMethod: PM;
};

export default Account;
