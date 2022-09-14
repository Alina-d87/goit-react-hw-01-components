import PropTypes from 'prop-types';
import { HeadStatistic } from "./Statistics.styled"

export const StatisticsTitle = ({ title = "Upload stats" }) => {
	const isTitle = true;
	return (
		<HeadStatistic>
			{isTitle && title}
		</HeadStatistic>)
}

StatisticsTitle.prototype = {
	title: PropTypes.string.isRequired,
}