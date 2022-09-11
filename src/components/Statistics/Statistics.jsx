import PropTypes from 'prop-types';
import { StatisticsTitle } from "./StatisticsTitle"
import { StatisticsSection } from "./Statistics.styled"
import { ListStatistics } from "./Statistics.styled"
import { StaticsLabel } from "./Statistics.styled"
import { StaticsPercentage } from "./Statistics.styled"
import {ItemStatics} from "./Statistics.styled"

export const Statistics = ({title, stats}) => {
  return (
	<StatisticsSection>
		  <StatisticsTitle title={title} />
		  <ListStatistics>
      {stats.map(({id, label, percentage}) =>
		  <ItemStatics key={id}>
            <StaticsLabel>{label}</StaticsLabel>
            <StaticsPercentage>{percentage}%</StaticsPercentage>
		  </ItemStatics>)}
			  </ListStatistics>
</StatisticsSection>)
}

Statistics.prototype = {
	stats: PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired
	})
}