'use client';

import { useCallback, useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { z } from 'zod';
import { trpc } from '@/app/_trpc/client';
import { Button } from '@/components/ui/button';
import { UploadIcon } from '@radix-ui/react-icons';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';

export default function FileUploadButton() {
	const [uploadedFile, setUploadedFile] = useState<File>();
	// const utils = trpc.useContext();

	const onDrop = useCallback((acceptedFiles: File[]) => {
		console.log(acceptedFiles[0]);
		const file = acceptedFiles[0];
		setUploadedFile(file);
	}, []);

	async function handleUpload(filename: string) {
		if (!uploadedFile) return;
		const response = await fetch('/api/upload', {
			method: 'POST',
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ filename }),
		});
		const { signedUrl } = await response.json();
		console.log(signedUrl);
		// Upload file
		const res = await fetch(signedUrl, {
			method: 'PUT',
			body: uploadedFile,
		});
		console.log(res);
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
	});

	// if (uploadedFile) {
	// 	const { data: uploadURL } = trpc.getUploadUrl.useQuery({
	// 		filename: `${uploadedFile?.name}`,
	// 	});
	// 	console.log(uploadURL);
	// 	utils.getUploadUrl.invalidate({ filename: `${uploadedFile?.name}` });
	// }

	return (
		<Dialog>
			<DialogTrigger asChild>
				{/* <button className='btn btn-sm'>upload</button> */}
				<Button variant='destructive'>
					<UploadIcon className='mr-2 h-6 w-6' /> upload
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<div
						className='border h-64 mt-4   border-gray-300 rounded-md'
						{...getRootProps()}
					>
						<div className='flex flex-col justify-center items-center mt-16'>
							<UploadCloud size={64} />
							<p className='text-sm'>
								Drag &amp; drop some files here, or click to select files
							</p>
						</div>
						<input {...getInputProps()} />
					</div>
				</DialogHeader>
				<div className='flex items-center space-x-2'>
					<div className='grid flex-1 gap-2'></div>
					{/* <Button type='submit' size='sm' className='px-3'>
						<span className='sr-only'>Copy</span>
						<CopyIcon className='h-4 w-4' />
					</Button> */}
				</div>
				<DialogFooter className='sm:justify-start'>
					<DialogClose asChild>
						<button className='btn btn-sm'>close</button>
					</DialogClose>
					{uploadedFile ? (
						<button
							onClick={() => handleUpload(uploadedFile.name)}
							className='btn btn-sm btn-primary self-end'
						>
							upload
						</button>
					) : null}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
