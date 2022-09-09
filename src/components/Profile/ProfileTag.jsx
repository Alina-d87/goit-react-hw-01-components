import PropTypes from 'prop-types';

export const Tag = ({ icon: Icon, tag }) => {
	return (
			<p className="tag">
		<Icon /> {tag}
			</p>)
}

Tag.prototype = {
	icon: PropTypes.element.isRequired,
	tag: PropTypes.string.isRequired,
}