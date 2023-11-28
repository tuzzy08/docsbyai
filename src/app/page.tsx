import { CallToAction } from '@/components/Landing/CallToAction';
import { Faqs } from '@/components/Landing/Faqs';
import { Footer } from '@/components/Landing/Footer';
import { Header } from '@/components/Landing/Header';
import { Hero } from '@/components/Landing/Hero';
import { Pricing } from '@/components/Landing/Pricing';
import { PrimaryFeatures } from '@/components/Landing/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/Landing/SecondaryFeatures';
import { Testimonials } from '@/components/Landing/Testimonials';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<PrimaryFeatures />
				<SecondaryFeatures />
				<CallToAction />
				<Testimonials />
				<Pricing />
				<Faqs />
			</main>
			<Footer />
		</>
	);
}
