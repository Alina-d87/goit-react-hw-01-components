import PropTypes from 'prop-types';
import { StatisticsTitle } from "./StatisticsTitle"

//список зарендерити через map
//title – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка <h2>.

export const Statistics = ({title, stats}) => {
  return (
	<section className="statistic">
		  <StatisticsTitle title={title} />
		  <ul className="stat-list">
      {stats.map(({id, label, percentage}) =>
		  <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage"> {percentage}</span>
		  </li>)}
			  </ul>
</section>)
}

Statistics.prototype = {
	stats: PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired
	})
}