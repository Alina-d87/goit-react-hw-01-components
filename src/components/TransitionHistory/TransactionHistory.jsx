import PropTypes from 'prop-types';
import {DataTransaction} from "./DataTransaction.jsx"

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
      </tr>
      </thead>
        <DataTransaction items={items} />
      </table>)
}
  
