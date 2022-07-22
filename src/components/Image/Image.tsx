import { FC } from 'react';

import classes from './Image.module.scss';

import mobileJPG from '../../assets/images/image-product-mobile.jpg';
import mobileWEBP from '../../assets/images/image-product-mobile.webp';
import desktopJPG from '../../assets/images/image-product-desktop.jpg';
import desktopWEBP from '../../assets/images/image-product-desktop.webp';

export const Image: FC = () => (
	<picture className={classes.picture}>
		<source
			media="(min-width: 1201px)"
			srcSet={desktopWEBP}
			type="image/webp"
		/>
		<source
			media="(min-width: 1201px)"
			srcSet={desktopJPG}
			type="image/jpeg"
		/>
		<source srcSet={mobileWEBP} type="image/webp" />
		<source srcSet={mobileJPG} type="image/jpeg" />
		<img src={mobileJPG} width="686" height="480" alt="Perfume Chanel" />
	</picture>
);
