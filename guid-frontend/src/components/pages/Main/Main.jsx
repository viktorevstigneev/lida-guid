import React, { useEffect, useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactFlashlight } from 'react-flashlight';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import zam1 from '../../../img/zam-1.jpeg'
import zam2 from '../../../img/zam-2.jpeg';
import zam3 from '../../../img/zam-3.jpeg';
import zam4 from '../../../img/zam-4.jpeg';
import zam5 from '../../../img/zam-5.jpeg';
import zam6 from '../../../img/zam-6.jpeg';
import zam7 from '../../../img/zam-7.jpeg';


import './style.css';

import { API_URL } from '../../../constants';

const Main = ({ profile, loadProfileData, match }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		loadProfileData(match.params.id);
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};

		getCurrentUser();
	}, [match.params.id]);

	const slideImages = [
		{
			url: zam1,
			caption: 'Slide 1',
		},
		{
			url: zam2,
			caption: 'Slide 2',
		},
		{
			url: zam3,
			caption: 'Slide 3',
		},
		{
			url: zam4,
			caption: 'Slide 4',
		},
		{
			url: zam5,
			caption: 'Slide 5',
		},
		{
			url: zam6,
			caption: 'Slide 6',
		},
		{
			url: zam7,
			caption: 'Slide 7',
		},
	];

	return (
		<Fragment>
			<Header />
			<div className="main">
				<div className="head">
					<div className="head__content">
						<h1 className="head__title">Виртуальный гид</h1>
						<a className="head__link" href="">
							узнать больше
						</a>
					</div>
				</div>
				<div className="introduction">
					<h2 className="intoduction__title">Добро пожаловать на сервис виртуального гида по городу Лида</h2>
					<p className="itroduction__text">
						Все привыкли ассоциировать Лиду лишь с замком, пивом и музыкальным фестивалем – а зря. Город намного
						интереснее, чем может показаться на первый взгляд. Здесь вместо Ленина у всех на виду красуется памятник
						Гедимину. Здесь классные места сосредоточены не только в центре. Здесь часто проводят разные фестивали (и,
						надеемся, снова начнут проводить после пандемии). В общем, в Лиде точно можно отдохнуть культурно, активно и
						весело. А с нас – долгожданный гайд по этому интересному месту с историей. Забирай и готовься к путешествию
						– будем открывать Лиду заново!
					</p>
					{/* <ReactFlashlight>
						<div className="introduction__light"></div>
						</ReactFlashlight> */}
					<Slide>
						{slideImages.map((slideImage, index) => (
							<div className="each-slide" key={index}>
								<div style={{ backgroundImage: `url(${slideImage.url})`, height: "670px" }}>
								</div>
							</div>
						))}
					</Slide>
				</div>
			</div>

			{/* <div className="contact">
				<h2 className="contact__title">Контакты</h2>
				<form
					className="contact__form"
					action="post"
					onSubmit={async (evt) => {
						evt.preventDefault();
						const formData = Object.fromEntries(new FormData(evt.target));

						const responseData = await axios({
							method: 'post',
							url: 'http://localhost:3000/send',
							data: formData,
						});

						console.log('responseData: ', responseData);
						if (responseData.status === 200) {
							alert('Сообщение успешно отправленно');
						}
					}}
				>
					<input type="text" required="true" className="contact__input" placeholder="Name" name="name" />
					<input type="email" required="true" className="contact__input" placeholder="Email" name="email" />
					<textarea
						className="contact__text"
						required="true"
						name="message"
						id=""
						cols="30"
						rows="10"
						placeholder="Message"
					></textarea>
					<button className="contact__button" type="submit">
						Отправить
					</button>
					<div className="contact__image"></div>
				</form>
			</div> */}

			<Footer />
		</Fragment>
	);
};

Main.propTypes = {
	profile: PropTypes.object,
	honors: PropTypes.object,
	loadProfileData: PropTypes.func,
	loadHonorsData: PropTypes.func,
	match: PropTypes.object,
};

Main.defaultProps = {
	profile: {},
	honors: {},
	loadProfileData: () => {},
	loadHonorsData: () => {},
	match: {},
};

export default Main;
