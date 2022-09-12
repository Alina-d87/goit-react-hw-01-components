import PropTypes from 'prop-types';
import { StatusFriend, GreenFriend, RedFriend } from "./FriendList.styled"

export const OnlineFriend = ({ icon: Icon, isOnline }) => {
	return (
		<StatusFriend>
			{isOnline ? <GreenFriend><Icon /></GreenFriend> : <RedFriend><Icon /></RedFriend>} 
		</StatusFriend>
	)
}

OnlineFriend.prototype = {
	icon: PropTypes.element.isRequired,
isOnline: PropTypes.bool.isRequired,
}
