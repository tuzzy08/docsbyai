import { UserButton } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dashboard',
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-full'>
			<Header />
			{children}
		</div>
	);
}
