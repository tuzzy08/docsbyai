import { SignUp, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Page() {
	const user = await currentUser();
	if (user) redirect('/dashboard');
	return (
		<div className='w-full mt-24 flex justify-center'>
			<div className='flex flex-col items-center gap-2'>
				<SignUp />
			</div>
		</div>
	);
}
