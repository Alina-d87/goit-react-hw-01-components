import PropTypes from 'prop-types';

export const DataTransaction = ({ items }) => {
	return (
		items.map(({ id, type, amount, currency }) =>
			<tbody>
				<tr key={id} className="tableString">
	<td>{type}</td>
	<td>{amount}</td>
	<td>{currency}</td>
</tr>
			 </tbody>
)
  )
}

DataTransaction.prototypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })
}