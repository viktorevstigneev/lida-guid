import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './style.css';
import { API_URL } from '../../../store/constants';

const Header = ({ loadProfileData, profile, match }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	const authorizedRoute = () => (
		<>
			<li className="header__item">
				<Link
					to={`/auth}`}
					className="header__link"
					onClick={async () => {
						await axios.post(`${API_URL}/logout`, { withCredentials: true });
					}}
				>
					Log out
				</Link>
			</li>
			<li>
				<Link to={`/profile/${user?._id}`} className="header__link">
					Profile
				</Link>
			</li>
			<li className="header__item">
				<Link to={`/team/${user?.team}`} className="header__link">
					Team
				</Link>
			</li>
		</>
	);

	return (
		<Fragment>
			<div className="header">
				<p className="header__logo">Виртуальный Гид</p>
				<nav className="header__havbar">
					<ul className="header__menu">
						{/* {user ? (
							authorizedRoute()
						) : (
							<li className="header__item">
								<Link to={`/auth}`} className="header__link">
									Sign In
								</Link>
							</li>
						)} */}
						<a href="/main" className="header__link">
							Главная
						</a>
						<a href="/attractions"  className="header__link">
							Достопримечательности
						</a>
						<a href="/route" className="header__link">
							Маршрут
						</a>
						<a href="/video" className="header__link">
							Видео
						</a>
						<a href="/map" className="header__link">
							Виртуальная Прогулка
						</a>
						<a href="/contact" className="header__link">
							Контакты
						</a>
						<a href="/edit" className="header__link">
							Редактор
						</a>
					</ul>
				</nav>
			</div>
		</Fragment>
	);
};

export default Header;
