import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import OilBanner from '../../images/oil-banner.jpg';
import BodyOilBanner from "../../images/body-oil-banner.jpg";
import ScrubBanner from '../../images/scrub-banner.jpg';
import FlourBanner from '../../images/flour-banner.jpg';
import OtherBanner from '../../images/other-banner.jpg';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "Oils",
					imageUrl: OilBanner,
					id: 1,
				},
				{
					title: "Scrubs",
					imageUrl: ScrubBanner,
					id: 2,
				},
				{
					title: "Flours",
					imageUrl: FlourBanner,
					id: 3,
				},
				{
					title: "Other",
					imageUrl: OtherBanner,
					size: "large",
					id: 4,
				},
				{
					title: "All",
					imageUrl: BodyOilBanner,
					size: "large",
					id: 5,
				},
			],
		};
	}

	displayMenuItem = () => {
		return this.state.sections.map(({ title, imageUrl, id, size }) => (
			<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
		));
	};

	render() {
		return <div className="directory-menu">{this.displayMenuItem()}</div>;
	}
}

export default Directory;