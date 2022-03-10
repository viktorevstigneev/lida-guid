import React, { Fragment } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

const Attraction = () => (
	<Fragment>
		<Header />
		<div className="video__head">
			<p className="video__description">
				Лида точно понравится тем, кто устал от «городов по кругу». Здесь без проблем можно составить маршрут на
				несколько километров вперед с достопримечательностями, парками и заведениями. Стартовать рекомендуем от Лидского
				замка (ул. Замковая, 1) – как-никак визитка города – который в 1323 году построил великий князь Гедимин. История
				замка до XIX века тебя совсем не удивит – ему периодически доставалось от набегов крестоносцев, крымских татар,
				армий Московского княжества, шведов. К концу этого периода он был совсем не в лучшем состоянии. Но в 1892-м все
				стало совсем плохо. Тогда Лида горела, и многие здания в центре пострадали. Чтобы восстановить город, местные
				власти решили продавать кирпичи и камни от Лидского замка. Об этом узнали в Императорской археологической
				комиссии – и памятник решили восстановить.
			</p>
		</div>
		<div className="video__top">
			<h2 className="video__title video__title--color">Введение в жизнь города Лида</h2>
			<iframe
				width="100%"
				height="534"
				src="https://www.youtube.com/embed/-mD5ul9e4-A"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
		<div className="video__top">
			<h2 className="video__title video__title--color">Все о кургане бессмертия</h2>
			<iframe
				width="100%"
				height="534"
				src="https://www.youtube.com/embed/Hmn3hXWdohg"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
		<div className="video__top">
			<h2 className="video__title video__title--color">Костел в Лиде</h2>
			<iframe
				width="100%"
				height="534"
				src="https://www.youtube.com/embed/GilxuQnGPro"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
		<div className="video__top">
			<h2 className="video__title video__title--color">Лида в Истории</h2>
			<iframe
				width="100%"
				height="605"
				src="https://www.youtube.com/embed/0QlaFMKCM28"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
		<div className="video__top">
			<h2 className="video__title video__title--color">День города Лида 1993</h2>
			<iframe
				width="100%"
				height="605"
				src="https://www.youtube.com/embed/k0lZZMT9UWw"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			;
		</div>
		;
		<Footer />
	</Fragment>
);

export default Attraction;
