import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import OilBanner from '../../images/oil-banner.jpg';
import BodyOilBanner from "../../images/Body-Oil-Banner.jpg";
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
					title: "oils",
					imageUrl: OilBanner,
					id: 1,
					linkUrl: "shop/oils",
				},
				{
					title: "scrubs",
					imageUrl: ScrubBanner,
					id: 2,
					linkUrl: "shop/scrubs",
				},
				{
					title: "flours",
					imageUrl: FlourBanner,
					id: 3,
					linkUrl: "shop/flours",
				},
				{
					title: "other",
					imageUrl: OtherBanner,
					size: "large",
					id: 4,
					linkUrl: "shop/other",
				},
				{
					title: "all",
					imageUrl: BodyOilBanner,
					size: "large",
					id: 5,
					linkUrl: "Shop/all",
				},
			],
		};
	}

	displayMenuItem = () => {
		return this.state.sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} { ...otherSectionProps } />
		));
	};

	render() {
		return <div className="directory-menu">{this.displayMenuItem()}</div>;
	}
}

export default Directory;