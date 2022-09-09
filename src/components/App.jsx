import { Profile } from "components/Profile/Profile.jsx";
import user from "..//user.json";
import { Statistics } from "components/Statistics/Statistics.jsx";
import data from '..//data.json';
import { FriendList } from "./FriendList";
import friends from "..//friends.json";

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
    <section>
        <Statistics title="Upload stats" stats={data.title} />
        <Statistics statsLabel={data.label}
          statsPercentage={data.percentage} />
      </section>
      <ul>
       <FriendList friends={friends} />;
      </ul>
    </div>
  );
};


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