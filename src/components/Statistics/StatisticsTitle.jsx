import PropTypes from 'prop-types';

export const StatisticsTitle = ({ title = "Upload stats" }) => {
	const isTitle = true;
	return (<h2 className="title">{isTitle && title}</h2>)
}

StatisticsTitle.prototype = {
	title: PropTypes.string.isRequired,
}