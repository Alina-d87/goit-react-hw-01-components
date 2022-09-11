import PropTypes from 'prop-types';
import { FaCircle } from "react-icons/fa"
import { Friends } from "./FriendList.styled"
import { OneFriends } from "./FriendList.styled"
import { StatusFriend } from "./FriendList.styled"
import { OnlineFriend } from "./FriendOnline"
import { AvatarFriend  } from "./FriendList.styled"
import { NameFriend } from "./FriendList.styled"


export const FriendList = ({ friends }) => {
  return (<Friends>
    {friends.map(({ avatar, name, isOnline, id, icon }) =>
      <OneFriends key={id}>
        <StatusFriend><OnlineFriend icon={FaCircle} isOnline={isOnline} /></StatusFriend>
        <AvatarFriend  src={avatar} alt="User avatar" width="48" />
        <NameFriend>{name}</NameFriend>
      </OneFriends>)}
  </Friends>)
}

FriendList.prototypes = {
  friends: PropTypes.arrayOf({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })
}

//isOnline - буль, що сигналізує про стан друга: в мережі або ні.*/
