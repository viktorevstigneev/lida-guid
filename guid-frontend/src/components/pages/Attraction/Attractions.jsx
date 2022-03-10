import React, { Fragment } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import d_1 from '../../../img/d_1.jpeg';
import d_2 from '../../../img/d_2.jpeg';
import d_3 from '../../../img/d_3.jpeg';
import d_4 from '../../../img/d_4.jpeg';
import d_5 from '../../../img/d_5.jpeg';
import d_6 from '../../../img/d_6.jpeg';
import d_7 from '../../../img/d_7.jpeg';

const Attraction = () => {
	const imageUrls = [
		{
			name: 'Костел Воздвижения Святого Креста',
			url: d_1,
		},
		{
			name: 'Cкульптура банщика Васи',
			url: d_2,
		},
		{
			name: 'Cолнечные часы',
			url: d_3,
		},
		{
			name: 'Собор',
			url: d_4,
		},
		{
			name: 'Бронзовый герб города',
			url: d_5,
		},
		,
		{
			name: 'Скульптура Командировочный',
			url: d_6,
		},
		{
			name: 'Камень в честь основания дня города',
			url: d_7,
		},
	];
	return (
		<Fragment>
			<Header />
			<div className="attraction">
				{imageUrls.map((item) => (
					<div className="attraction__card">
						<img className="attraction__image" src={item.url} height="400" width="400" />
						<p className="attraction__name">{item.name}</p>
					</div>
				))}
			</div>
			<Footer />
		</Fragment>
	);
};

export default Attraction;
