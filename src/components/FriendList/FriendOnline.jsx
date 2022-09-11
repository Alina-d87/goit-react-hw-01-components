import PropTypes from 'prop-types';
import { StatusFriend } from "./FriendList.styled"

export const OnlineFriend = ({ icon: Icon, isOnline }) => {
	return (
		<StatusFriend>
			<Icon />{isOnline} 
		</StatusFriend>
	)
}

OnlineFriend.prototype = {
	icon: PropTypes.element.isRequired,
isOnline: PropTypes.bool.isRequired,
}
