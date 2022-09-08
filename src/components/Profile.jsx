import user from "..//user.json";
import PropTypes from 'prop-types';
import { BiAt } from "react-icons/bi"
import {Tag} from "components/ProfileTag.jsx"


export const Profile = (props) => {
	//const {username, tag, location, avatar, stats} = props;
	return (<div className="profile">
			<div className="description">
				<img
					src={user.avatar}
					alt={user.username}
					className="avatar"
				/>
				<p className="name">{user.username}</p>
				<Tag tag={user.tag} icon={BiAt} />
				<p className="location">{user.location}</p>
			</div>

			<ul className="stats">
				<li>
					<span className="label">Followers</span>
					<span className="quantity"> {user.stats.followers}</span>
				</li>
				<li>
					<span className="label">Views</span>
					<span className="quantity"> {user.stats.views}</span>
				</li>
				<li>
					<span className="label">Likes</span>
					<span className="quantity"> {user.stats.likes}</span>
				</li>
			</ul>
		</div>
	);
};

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.objectOf(PropTypes.number),
}