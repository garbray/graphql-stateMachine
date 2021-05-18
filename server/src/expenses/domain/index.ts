import buildMakeExpense from './expense';
import idGenerator  from "../../shared/id";

export const makeExpense = buildMakeExpense(idGenerator);

export default makeExpense;
