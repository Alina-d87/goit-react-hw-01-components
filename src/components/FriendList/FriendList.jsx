import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (friends.map(({ avatar, name, isOnline, id }) => 
    <li key={id} className="item">
      <span className="status">{ isOnline }</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
</li>
  ))
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
