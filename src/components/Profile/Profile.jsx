import PropTypes from 'prop-types';
import { BiAt } from "react-icons/bi";
import { Tag } from "components/Profile/ProfileTag.jsx";
import { ProfileCard } from "./Profile.styled"
import { Avatar } from "./Profile.styled"
import { UserName } from "./Profile.styled"
import { UserInfo } from "./Profile.styled"
import { ElementInvo } from "./Profile.styled"
import { ActivInfo } from "./Profile.styled"
import { ActivLabel } from "./Profile.styled"
import { ActiveQuantity} from "./Profile.styled"

export const Profile = ({username, tag, location, avatar, stats}) => {
	return (<ProfileCard>
		<div className="description">
				<Avatar
					src={avatar}
					alt={username}
				/>
				<UserName>{username}</UserName>
				<Tag tag={tag} icon={BiAt} />
				<UserInfo>{location}</UserInfo>
			</div>

			<ActivInfo>
				<ElementInvo>
					<ActivLabel>Followers</ActivLabel>
					<ActiveQuantity>{stats.followers}</ActiveQuantity>
				</ElementInvo>
				<ElementInvo>
					<ActivLabel>Views</ActivLabel>
					<ActiveQuantity>{stats.views}</ActiveQuantity>
				</ElementInvo>
				<ElementInvo>
					<ActivLabel>Likes</ActivLabel>
					<ActiveQuantity>{stats.likes}</ActiveQuantity>
				</ElementInvo>
			</ActivInfo>
		</ProfileCard>
	);
};

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.objectOf(PropTypes.number),
}