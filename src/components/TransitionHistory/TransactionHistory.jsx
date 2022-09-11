import PropTypes from 'prop-types';
import { TransactionTable } from "./TransactionHistory.styled"
import { TransactionHead } from "./TransactionHistory.styled"
import { StringTransaction } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHead>
      {items.map(({ id, type, amount, currency }) =>
        <tbody>
          <StringTransaction key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </StringTransaction>
        </tbody>)}
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