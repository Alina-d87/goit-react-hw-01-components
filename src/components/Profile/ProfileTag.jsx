import PropTypes from 'prop-types';
import { UserInfo } from "./Profile.styled"

export const Tag = ({ icon: Icon, tag }) => {
	return (
		<UserInfo>
			<Icon />{tag}
		</UserInfo>)
}

Tag.prototype = {
	icon: PropTypes.element.isRequired,
	tag: PropTypes.string.isRequired,
}
