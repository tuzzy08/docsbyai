import { SignIn, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Page() {
	try {
		const user = await currentUser();
		if (user) redirect('/dashboard');
	} catch (error) {
		console.error(error);
	}
	return (
		<div className='w-full mt-24 flex justify-center'>
			<div className='flex flex-col items-center gap-2'>
				<SignIn />
			</div>
		</div>
	);
}
