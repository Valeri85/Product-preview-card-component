import { FC } from 'react';

import { Card } from './components/UI/Card/Card';
import { Image } from './components/Image/Image';
import { Content } from './components/Content/Content';
import { Footer } from './components/Layout/Footer/Footer';

export const App: FC = () => (
	<>
		<main>
			<Card>
				<Image />
				<Content />
			</Card>
		</main>
		<Footer />
	</>
);
