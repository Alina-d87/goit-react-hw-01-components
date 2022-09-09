//import user from "../../user.json";
import PropTypes from 'prop-types';
import { BiAt } from "react-icons/bi";
import { Tag } from "components/Profile/ProfileTag.jsx";

//const profileUser = user;
//console.log(profileUser);

export const Profile = ({username, tag, location, avatar, stats}) => {
	//const {username, tag, location, avatar, stats} = props;
	return (<div className="profile">
			<div className="description">
				<img
					src={avatar}
					alt={username}
					className="avatar"
				/>
				<p className="name">{username}</p>
				<Tag tag={tag} icon={BiAt} />
				<p className="location">{location}</p>
			</div>

			<ul className="stats">
				<li>
					<span className="label">Followers</span>
					<span className="quantity"> {stats.followers}</span>
				</li>
				<li>
					<span className="label">Views</span>
					<span className="quantity"> {stats.views}</span>
				</li>
				<li>
					<span className="label">Likes</span>
					<span className="quantity"> {stats.likes}</span>
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