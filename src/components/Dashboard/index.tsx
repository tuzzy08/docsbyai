'use client';
import FileUploadButton from '../FileUploadButton';

export function Dashboard() {
	return (
		<>
			<header className='bg-white shadow-sm'>
				<div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
					<div className='mx-auto flex flex-row justify-between'>
						<h1 className='text-lg font-semibold leading-6 text-gray-900'>
							My Documents
						</h1>
						<FileUploadButton />
					</div>
				</div>
			</header>
			<main>
				<div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
					{/* Your content */}
				</div>
			</main>
		</>
	);
}
