import React, { Fragment } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

const Route = () => (
	<Fragment>
		<Header />
		<div className="route">
			<p className="route__text">
				Стартовать рекомендуем от Лидского замка (ул. Замковая, 1) – как-никак визитка города – который в 1323 году
				построил великий князь Гедимин. История замка до XIX века тебя совсем не удивит – ему периодически доставалось
				от набегов крестоносцев, крымских татар, армий Московского княжества, шведов. К концу этого периода он был
				совсем не в лучшем состоянии. Но в 1892-м все стало совсем плохо. Тогда Лида горела, и многие здания в центре
				пострадали. Чтобы восстановить город, местные власти решили продавать кирпичи и камни от Лидского замка. Об этом
				узнали в Императорской археологической комиссии – и памятник решили восстановить.
			</p>
			<div className="route__zamok"></div>
			<p className="route__text">
				Сейчас замок находится под охраной государства. Две башни уже отреставрировали. Туда можно попасть с экскурсией
				или без нее. Входной билет стоит € 2, услуги гида – еще € 3. Из интересного круглый год – пыточный зал в
				подвалах и выставка доспехов под самой крышей. Зимой замок часто оцепляют дети – катаются с горки. А летом –
				молодежь: там проводят рыцарские и фаер-фесты, дискотеки и лазерные шоу.
			</p>
			<div className="route__zamok--2"></div>;
			<p className="route__text">
				Сразу за замком – памятник Гедимину. Установили его, кстати, осенью два года назад, а официально открыли во
				время фестиваля Lidbeer. «В Лиду наконец вернулся ее хозяин», – сказали тогда. А сейчас – подтверждаем – он все
				еще на своем месте.
			</p>
			<div className="route__gedemin"></div>
			<p className="route__text">
				Немного дальше – Фарный костел Воздвижения Святого Креста (ул. Замковая, 2) в стиле позднего барокко. Его
				построили в 1770 году, и с того времени он практически не изменился: все та же трехнефная базилика (правда, уже
				без башен), все тот же прямоугольный алтарь, все те же фрески и скульптуры. И, кстати, здесь хранится икона
				Божьей Матери, которую в XIV веке в Беларусь привезли францисканцы.
			</p>
			<div className="route__kostel"></div>
			<p className="route__text">
				Слева от костела – два памятника. Первый – массивный камень, который установили в честь основания города –
				впечатляет, но не удивляет. Второй – интереснее – памятник Франциску Скорине, который стал первым памятником,
				установленным в независимой Беларуси. Кстати, на обратной стороне есть «пасхалка» – там скульптор изобразил
				самого себя. Знакомься – это Валерий Янушкевич.
			</p>
			<div className="route__scorina"></div>
			<p className="route__text">
				Если пойдешь прямо по Советской (продолжение улицы Замковой), придешь к местному Центру ремесел и традиционной
				культуры (ул. Советская, 12). Там работает постоянная экспозиция с народными костюмами, ткацкими станками,
				глиняной посудой и соломенными украшениями, есть театр «Батлейка» и лавка с сувенирами.
			</p>
			<div className="route__tvor"></div>
			<p className="route__text">
				По дороге в галерею или из нее точно будешь проходить Лидский пивзавод (ул. Мицкевича, 32) – и здесь обязательно
				выдели время на экскурсию. В компании с гидом пройдешься по территории завода, открытым цехам, производственным
				помещениям и исторической улице Пивной, узнаешь все о пиве и научишься правильно его дегустировать. Если пойдешь
				на завод один(-а), придется отдать € 7,5 – € 11, в группе – € 2 – € 6. Регистрироваться лучше заранее
			</p>
			<div className="route__zavod"></div>
			<p className="route__text">
				Конечная точка твоего маршрута – «Курган Славы» (ул. Ленинская), в парке рядом с которым можно гулять, наверное,
				бесконечно. Там есть дорожки для велосипедистов, скейтеров и роллеров, есть тропинки для пешеходов и мостики. На
				лавочках часто тусят ребята с гитарами. Рядом – речка. Одним словом – хорошо.
			</p>
			<div className="route__kurgan"></div>
		</div>
		<Footer />
	</Fragment>
);
export default Route;