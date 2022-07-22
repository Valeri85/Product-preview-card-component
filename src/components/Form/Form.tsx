import { FC } from 'react';

import classes from './Form.module.scss';
import cartIcon from '../../assets/images/icon-cart.svg';

export const Form: FC = () => (
	<form className={classes.form} onSubmit={event => event.preventDefault()}>
		<button>
			<img src={cartIcon} alt="" aria-hidden />
			Add to Cart
		</button>
	</form>
);
