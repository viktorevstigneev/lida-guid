import React, { Fragment } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';

import './style.css';

const Main = ({ profile, loadProfileData, match }) => (
	<Fragment>
		<Header />

		<div className="contact">
			<h2 className="contact__title">Оставьте отзыв</h2>
			<form className="contact__form" action="https://formspree.io/f/mlezrkng" method="POST">
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
			</form>
		</div>

		<Footer />
	</Fragment>
);

export default Main;
