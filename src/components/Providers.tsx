'use client';

import { PropsWithChildren, useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '@/app/_trpc/client';
import { httpBatchLink } from '@trpc/react-query';

//  Init Posthog Analytics
if (typeof window !== 'undefined') {
	posthog.init(`${process.env.NEXT_PUBLIC_POSTHOG_KEY}`, {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
		capture_pageview: false, // Disable automatic pageview capture, as we capture manually
	});
}

export function PostHogPageview(): JSX.Element {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (pathname) {
			let url = window.origin + pathname;
			if (searchParams && searchParams.toString()) {
				url = url + `?${searchParams.toString()}`;
			}
			posthog.capture('$pageview', {
				$current_url: url,
			});
		}
	}, [pathname, searchParams]);

	return <></>;
}

export function Providers({ children }: PropsWithChildren) {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: 'http://localhost:3000/api/trpc',
				}),
			],
		})
	);
	return (
		<PostHogProvider client={posthog}>
			<trpc.Provider client={trpcClient} queryClient={queryClient}>
				{/* This exposes react query client so it can be used independently of trpc */}
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</trpc.Provider>
		</PostHogProvider>
	);
}
