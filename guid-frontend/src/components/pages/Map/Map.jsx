import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const Attraction = (props) => {
	const [mapId, setMapId] = useState();

	const [point, setPoints] = useState();

	const getPoints = async () => {
		const responseData = await axios({
			method: 'GET',
			url: `${API_URL}/team`,
			withCredentials: true,
		});
		setPoints(responseData && responseData?.data);
		setMapId(responseData?.data[0]?._id)
	};

	useEffect(() => {
		getPoints();
	}, []);

	console.log('point: ', point);

	const hadleSideButtonClick = (evt) => {
		setMapId(evt.target.getAttribute('data-id'))
	}

	const rendeSideButtons = () =>
		point &&
		point.map((place) => (
			<div data-id={place._id} className="side__button" onClick={hadleSideButtonClick}>
				{place.name}
			</div>
		));

	const renderAllPoints = () =>
		point &&
		point.filter((item)=> item._id == mapId).map((place) => {
			const splited = place.stringCode.split(' ')[1].split('"')[1];

			return <iframe src={`${splited}`} width="100%" height="750" allowFullScreen="" loading="lazy"></iframe>;
		});

	return (
		<Fragment>
			<Header />
			<div className="side">
				<div className="side__content">{rendeSideButtons()}</div>
			</div>
			{renderAllPoints()}
			<Footer />
		</Fragment>
	);
};

export default Attraction;
