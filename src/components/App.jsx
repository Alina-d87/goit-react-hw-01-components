import { Profile } from "components/Profile.jsx";
import user from "..//user.json";

export const App = () => {
  return (
    <div>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
};

//username — ім'я користувача
//tag — тег в соціальній мережі без @
//location — місто і країна
//avatar — посилання на зображення
//stats — об'єкт з інформацією про активності


// <div
//      style={{
//        height: '100vh',
//        display: 'flex',
//        justifyContent: 'center',
//        alignItems: 'center',
//        fontSize: 40,
//        color: '#010101'
//      }}
//    >
//      React homework template
//    </div>