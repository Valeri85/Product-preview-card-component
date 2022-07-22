import { FC } from 'react';

import { CardProps } from './Card.model';
import classes from './Card.module.scss';

export const Card: FC<CardProps> = props => (
	<section className={classes.card} aria-labelledby="mainTitle">
		{props.children}
	</section>
);
