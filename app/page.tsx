import Hero from '@/components/Hero';

import Logo from '@/public/example_logo.svg';
import Placeholder from '@/public/placeholder.jpg';

const HeroText = {
	logo: Logo,
	title: 'Hello World',
	description: 'This is a description',
	buttonText: 'Click me',
	buttonLink: '/about',
	featureImage: Placeholder
};

export default function Home() {
	return (
		<main>
			<Hero
				title={HeroText.title}
				description={HeroText.description}
				buttonText={HeroText.buttonText}
				buttonLink={HeroText.buttonLink}
				featureImage={HeroText.featureImage}
				logo={HeroText.logo}
			/>
		</main>
	);
}
