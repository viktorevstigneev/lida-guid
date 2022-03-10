import React, { useEffect, useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';

import './style.css';
import { API_URL } from '../../../constants';

const Editor = (props) => {
	console.log('props: ', props);

	const hadleTextPaste = (evt) => {
		console.log('evt: ', evt.target.value);
	};
	const [point, setPoints] = useState();

	const getPoints = async () => {
		const responseData = await axios({
			method: 'GET',
			url: `${API_URL}/team`,
			withCredentials: true,
		});
		setPoints(responseData && responseData?.data);
	};

	useEffect(() => {
		getPoints();
	}, []);

	console.log('point: ', point);

	const handleDeletePlace = async (evt) => {
		const id = evt.target.getAttribute('data-id');

		await axios({
			method: 'DELETE',
			url: `${API_URL}/team/${id}`,
			data: evt.target.getAttribute('data-id'),
			withCredentials: true,
		});

		location.reload();
	};

	return (
		<Fragment>
			<Header />
			<h1 className="editor__title">Здесь вы можете добавить новое местоположение в виртуальную прогулку</h1>
			<form
				className="editor"
				method="POST"
				onSubmit={async (evt) => {
					evt.preventDefault();
					const formData = Object.fromEntries(new FormData(evt.target));
					console.log('formData: ', formData);
					const responseData = await axios({
						method: 'POST',
						url: `${API_URL}/team`,
						data: formData,
						withCredentials: true,
					});
					console.log('responseData: ', responseData);
				}}
			>
				<input className="editor__name" type="text" placeholder="Введите название местоположения" name="name" />
				<textarea
					className="editor__textarea"
					placeholder="Вставьте фрагмент кода из гугл карт"
					name="stringCode"
					onPaste={hadleTextPaste}
				></textarea>
				<button type="submit">Добавить мостеположение</button>
			</form>

			<div className="editor__spot">
				{point &&
					point.map((place) => (
						<div className="editor__place">
							{place.name}{' '}
							<span className="delete_place" data-id={place._id} onClick={handleDeletePlace}>
								&times;
							</span>
						</div>
					))}
			</div>

			<Footer />
		</Fragment>
	);
};

Editor.propTypes = {};

Editor.defaultProps = {};

export default Editor;
