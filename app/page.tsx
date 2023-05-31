// Component Imports
import Hero from '@/components/Hero';
import ThreeCol from '@/components/ThreeCol';
import Logos from '@/components/Logos';

// Image Imports
import Logo from '@/public/example_logo.svg';
import Placeholder from '@/public/placeholder.jpg';

// Content for Hero Section
const HeroText = {
	logo: Logo,
	title: 'The Subscription Based Service of the Future.',
	description:
		'This is an example description for the Next.js template by @brijr and @youngbloodcyb.',
	buttonText: 'Get Stated',
	buttonLink: '#',
	featureImage: Placeholder
};

// Content for Three Column Section
const ThreeColumnText = {
	iconOne: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
				clipRule="evenodd"
			/>
		</svg>
	),
	titleOne: 'Example Title One',
	descriptionOne: 'Lorem Ipsum Dollar Sit Amet, this is an example.',
	iconTwo: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
				clipRule="evenodd"
			/>
		</svg>
	),
	titleTwo: 'Example Title Two',
	descriptionTwo: 'Lorem Ipsum Dollar Sit Amet, this is an example.',
	iconThree: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
				clipRule="evenodd"
			/>
		</svg>
	),
	titleThree: 'Example Title Three',
	descriptionThree: 'Lorem Ipsum Dollar Sit Amet, this is an example.'
};

// Component Exports
export default function Home() {
	return (
		<main className="flex flex-col gap-8 my-8">
			<Hero
				title={HeroText.title}
				description={HeroText.description}
				buttonText={HeroText.buttonText}
				buttonLink={HeroText.buttonLink}
				featureImage={HeroText.featureImage}
				logo={HeroText.logo}
			/>

			<ThreeCol
				iconOne={ThreeColumnText.iconOne}
				titleOne={ThreeColumnText.titleOne}
				descriptionOne={ThreeColumnText.descriptionOne}
				iconTwo={ThreeColumnText.iconTwo}
				titleTwo={ThreeColumnText.titleTwo}
				descriptionTwo={ThreeColumnText.descriptionTwo}
				iconThree={ThreeColumnText.iconThree}
				titleThree={ThreeColumnText.titleThree}
				descriptionThree={ThreeColumnText.descriptionThree}
			/>

			<Logos>
				{Logo}
				{Logo}
				{Logo}
				{Logo}
				{Logo}
			</Logos>
		</main>
	);
}
