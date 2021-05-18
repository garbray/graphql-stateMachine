import faker from "faker";
import makeExpense from "./";
import { Expense } from "./expense";

type Override = Partial<Expense>;

const mockExpense = (override?: Override): Expense => {
  const expense: Expense = {
    id: "1",
    type: "test",
    amount: faker.datatype.number(100),
    urgency: "urgency",
  };
  return {
    ...expense,
    ...override,
  };
};

const generateExpense = (data?: Override) => {
  const mock = mockExpense(data);
  const expense = makeExpense(mock);
  return expense;
};

describe("expense", () => {
  it("must have an expense type", () => {
    const expense = mockExpense({ type: undefined });
    expect(() => {
      makeExpense(expense);
    }).toThrow("Expense must have a type");
  });

  it("must have an expense amount", () => {
    const expense = mockExpense({ amount: undefined });
    expect(() => {
      makeExpense(expense);
    }).toThrow("Expense must have an amount");
  });

  it("must have an expense urgency", () => {
    const expense = mockExpense({ urgency: undefined });
    expect(() => {
      makeExpense(expense);
    }).toThrow("Expense must have an urgency");
  });

  it("must contain an uid", () => {
    const expense = generateExpense();
    expect(expense.getId()).toBeDefined();
  });

  it("uid must be unique every time", () => {
    const mock = mockExpense();
    const expenseA = makeExpense(mock);
    const expenseB = makeExpense(mock);
    const uidA = expenseA.getId();
    const uidB = expenseB.getId();
    expect(uidA).not.toEqual(uidB);
  });

  it('can get the type of expense', () => {
    const expense = generateExpense({ type: 'payment' });
    expect(expense.getType()).toEqual('payment');
  })

  it('can get the amount on a new expense', () => {
    const expense = generateExpense({ amount: 100 });
    expect(expense.getAmount()).toEqual(100);
  })

  it('can get the urgency of the expense', () => {
    const expense = generateExpense({ urgency: 'high' });
    expect(expense.getUrgency()).toEqual('high');
  })
});
