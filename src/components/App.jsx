import { Profile } from "components/Profile/Profile.jsx";
import user from "../Data/user.json";
import { Statistics } from "components/Statistics/Statistics.jsx";
import data from '../Data/data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from "../Data/friends.json";
import {TransactionHistory} from "./TransitionHistory/TransactionHistory"
import transactions from "../Data/transactions.json";
import { Container } from "../components/App.styled"

export const App = () => {
  return (
    <Container>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
<Statistics stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
      </Container>
  );
};
