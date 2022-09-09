//import data from '../../data.json';
import PropTypes from 'prop-types';

//const statistics = data;
//console.log(statistics);

//список зарендерити через map
//title – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка <h2>.

export const Statistics = ({ title = " ", statsLabel, statsPercentage }) => {
  return (
	<section className="statistic">
		<h2 className="title">{title}</h2>

  <ul className="stat-list">
    <li className="item">
				<span className="label">{statsLabel}</span>
      <span className="percentage">{statsPercentage}</span>
    </li>
    <li className="item">
      <span className="label">{statsLabel}</span>
      <span className="percentage">{statsPercentage}</span>
    </li>
    <li className="item">
      <span className="label">{statsLabel}</span>
      <span className="percentage">{statsPercentage}</span>
    </li>
    <li className="item">
      <span className="label">{statsLabel}</span>
      <span className="percentage">{statsPercentage}</span>
    </li>
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