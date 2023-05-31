import Hero from '@/components/Hero';

import Logo from '@/public/example_logo.svg';
import Placeholder from '@/public/placeholder.jpg';

const HeroText = {
	logo: Logo,
	title: 'Subscription Based Service of the Future',
	description:
		'This is an example description for the Next.js template by @brijr and @youngbloodcyb.',
	buttonText: 'Get Stated',
	buttonLink: '#start',
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
