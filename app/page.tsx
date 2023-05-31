import Hero from '@/components/Hero';

import Logo from '@/public/example_logo.svg';
import Placeholder from '@/public/placeholder.jpg';

const HeroText = {
	logo: Logo,
	title: 'The Subscription Based Service of the Future.',
	description:
		'This is an example description for the Next.js template by @brijr and @youngbloodcyb.',
	buttonText: 'Get Stated',
	buttonLink: '#',
	featureImage: Placeholder
};

const ThreeColumnText = {
	iconOne: '',
	titleOne: 'Example Title One',
	descriptionOne: 'Lorem Ipsum Dollar Sit Amet, this is an example.',
	iconTwo: '',
	titleTwo: 'Example Title Two',
	descriptionTwo: 'Lorem Ipsum Dollar Sit Amet, this is an example.',
	iconThree: '',
	titleThree: 'Example Title Three',
	descriptionThree: 'Lorem Ipsum Dollar Sit Amet, this is an example.'
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
