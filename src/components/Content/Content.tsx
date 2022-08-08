import { FC } from 'react';

import { Form } from '../Form/Form';

import classes from './Content.module.scss';

export const Content: FC = () => (
	<div className={classes.contentWrapper}>
		<h2>perfume</h2>
		<h1 id="mainTitle">Gabrielle Essence Eau De Parfum</h1>
		<p>
			A floral, solar and voluptuous interpretation composed by Olivier
			Polge, Perfumer-Creator for the House of CHANEL.
		</p>
		<div className={classes.priceGroup}>
			<ins>&#36;149.99</ins>
			<del>&#36;169.99</del>
		</div>
		<Form />
	</div>
);
