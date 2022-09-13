import PropTypes from 'prop-types';
import { TransactionTable } from "./TransactionHistory.styled"
import { TransactionHead } from "./TransactionHistory.styled"
import { StringTransaction } from "./TransactionHistory.styled"
import { DataTable } from "./TransactionHistory.styled"
import {HeadTable} from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <tr>
          <HeadTable>Type</HeadTable>
          <HeadTable>Amount</HeadTable>
          <HeadTable>Currency</HeadTable>
        </tr>
      </TransactionHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) =>
          <StringTransaction key={id}>
            <DataTable key={type}>{type}</DataTable>
            <DataTable key={amount}>{amount}</DataTable>
            <DataTable key={currency}>{currency}</DataTable>
          </StringTransaction>
        )}
        </tbody>
      </TransactionTable>)
}
  
TransactionHistory.prototypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })
}