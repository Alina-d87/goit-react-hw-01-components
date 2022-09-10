import { Profile } from "components/Profile/Profile.jsx";
import user from "..//user.json";
import { Statistics } from "components/Statistics/Statistics.jsx";
import data from '..//data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from "..//friends.json";
import {TransactionHistory} from "./TransitionHistory/TransactionHistory"
import transactions from "..//transactions.json";

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
        <Statistics stats={data} />
      </section>
      <ul>
       <FriendList friends={friends} />
      </ul>
        <TransactionHistory items={transactions} />
    </div>
  );
};
