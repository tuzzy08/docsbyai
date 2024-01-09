import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Container } from './Container';
import AlexanderHipp from '@/images/headshots/alexander-hipp.png';
import Christina from '@/images/headshots/christina.png';
import Christina2 from '@/images/headshots/christina-2.png';
import ClayElliot from '@/images/headshots/clay-elliot.png';
import ClayElliot2 from '@/images/headshots/clay-elliot-2.png';
import Linkedin from '@/images/headshots/linkedin.png';
import RyanHoffman from '@/images/headshots/ryan-hoffman.png';

export function Hero() {
	const router = useRouter();
	return (
		<section className='pb-16 px-4 sm:px-6 pt-20 text-center lg:pt-24 bg-indigo-50'>
			<h1 className='mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'>
				Talk to your{' '}
				<span className='relative whitespace-nowrap text-blue-600'>
					<svg
						aria-hidden='true'
						viewBox='0 0 418 42'
						className='absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70'
						preserveAspectRatio='none'
					>
						<path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
					</svg>
					<span className='relative'>PDF</span>
				</span>{' '}
				documents.
			</h1>
			<p className='text-justify mx-auto mt-6 max-w-3xl text-lg tracking-tight text-slate-700'>
				Get insight from your documents without having to read through. Research
				papers, Legal or Financial reports.{' '}
				<span className='relative whitespace-nowrap text-blue-600 underline decoration-2 decoration-blue-600'>
					docsbyAI
				</span>{' '}
				lets you get the exact information you need when you need it.
			</p>
			<div className='mt-10 flex justify-center gap-x-6'>
				<Button onClick={() => router.push('/register')} color='blue'>
					Get started now
				</Button>
				<Button variant='outline'>
					<svg
						aria-hidden='true'
						className='h-3 w-3 flex-none fill-blue-600 group-active:fill-current'
					>
						<path d='m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z' />
					</svg>
					<span className='ml-3'>Watch demo</span>
				</Button>
			</div>
			<div className='mt-2 sm:mt-6 lg:mt-10'>
				<p className='font-display text-base text-slate-900'>
					Trusted by plenty of happy users.
				</p>
				<ul role='list' className='mt-3 flex items-center justify-center'>
					<li className='flex'>
						<Image
							className='rounded-full inline-block object-cover z-50 h-9 w-9 ring-2 ring-blue-600'
							src={ClayElliot2}
							alt='ClayElliot2'
							unoptimized
						/>
						<Image
							className='rounded-full inline-block object-cover z-40 h-9 w-9 ring-2 ring-blue-600'
							src={AlexanderHipp}
							alt='AlexanderHipp'
							unoptimized
						/>
						<Image
							className='rounded-full inline-block object-cover z-30 h-9 w-9 ring-2 ring-blue-600'
							src={Christina2}
							alt='Christina2'
							unoptimized
						/>
						<Image
							className='rounded-full inline-block object-cover z-20 h-9 w-9 ring-2 ring-blue-600'
							src={Christina}
							alt='Christina'
							unoptimized
						/>
						<Image
							className='rounded-full inline-block object-cover z-10 h-9 w-9 ring-2 ring-blue-600'
							src={RyanHoffman}
							alt='RyanHoffman'
							unoptimized
						/>
						<Image
							className='rounded-full inline-block object-cover z-0 h-9 w-9 ring-2 ring-blue-600'
							src={ClayElliot}
							alt='ClayElliot'
							unoptimized
						/>
						<Image
							className='rounded-full inline-block object-cover z-0 h-9 w-9 ring-2 ring-blue-600'
							src={Linkedin}
							alt='Linkedin'
							unoptimized
						/>
					</li>
				</ul>
			</div>
		</section>
	);
}
