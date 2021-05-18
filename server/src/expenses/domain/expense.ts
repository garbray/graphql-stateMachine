import { IdGenerator } from "../../shared/id";

export interface Expense {
  id: string;
  type: string;
  amount: number;
  urgency: string;
}

function buildMakeExpense(idGenerator: IdGenerator) {
  return function makeExpense({ type, amount, urgency }: Partial<Expense>) {
    if (!type) {
      throw "Expense must have a type";
    }
    if (!amount) {
      throw "Expense must have an amount";
    }
    if (!urgency) {
      throw "Expense must have an urgency";
    }
    const id = idGenerator.makeId();

    const getAmount = () => amount;
    const getType = () => type;
    const getUrgency = () => urgency;

    return {
      getId: () => id,
      getAmount,
      getType,
      getUrgency,
    };
  };
}

export default buildMakeExpense;
