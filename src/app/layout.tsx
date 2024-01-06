import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter, Lexend } from 'next/font/google';
import clsx from 'clsx';
import { ClerkProvider } from '@clerk/nextjs';
import { Providers, PostHogPageview } from '@/components/Providers';
import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'simplebar-react/dist/simplebar.min.css';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lexend',
});

export const metadata: Metadata = {
	title: 'DocsByAI',
	description: 'Get insights from your documents',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={clsx(
				'h-full scroll-smooth bg-white antialiased',
				inter.variable,
				lexend.variable
			)}
		>
			<Suspense>
				<PostHogPageview />
			</Suspense>
			<ClerkProvider>
				<Providers>
					<body className={inter.className}>{children}</body>
				</Providers>
			</ClerkProvider>
		</html>
	);
}
