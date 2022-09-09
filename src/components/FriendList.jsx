export const FriendList = ({ friends }) => {
  return (
<li className="item">
  <span className="status"></span>
  <img className="avatar" src="" alt="User avatar" width="48" />
  <p className="name"></p>
</li>
  )
}


// робимо map для друзiв

//avatar - посилання на аватар
//name - ім'я друга
//isOnline - буль, що сигналізує про стан друга: в мережі або ні.*/

// friends – масив об'єктів друзів.

//import friends from "path/to/friends.json";

/*<FriendList friends={friends} />;*/