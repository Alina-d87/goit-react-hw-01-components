import PropTypes from 'prop-types';
import { FaCircle } from "react-icons/fa"
import { OnlineFriend } from "./FriendOnline"
import { BlockFriends } from "./FriendList.styled"
import { Friends } from "./FriendList.styled"
import { Friend } from "./FriendList.styled"
import { StatusFriend } from "./FriendList.styled"
import { AvatarFriend  } from "./FriendList.styled"
import { NameFriend } from "./FriendList.styled"


export const FriendList = ({ friends }) => {
  return (<BlockFriends>
    <Friends>
    {friends.map(({ avatar, name, isOnline, id, icon }) =>
      <Friend key={id}>
        <StatusFriend>
          <OnlineFriend icon={FaCircle} isOnline={isOnline} />
        </StatusFriend>
        <AvatarFriend  src={avatar} alt="User avatar" width="48" />
        <NameFriend>{name}</NameFriend>
      </Friend>)}
    </Friends>
    </BlockFriends>)
}

FriendList.prototypes = {
  friends: PropTypes.arrayOf({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })
}
