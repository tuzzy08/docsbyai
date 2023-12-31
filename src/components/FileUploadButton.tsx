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
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { UploadIcon } from '@radix-ui/react-icons';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';
import { handleUpload } from '@/lib/uploadHelpers';

export default function FileUploadButton() {
	const [hasPickedFile, setHasPickedFile] = useState<boolean>(false);
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [progress, setProgress] = useState<number>(0);
	// React DropZone config
	const onDrop = useCallback((acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		setUploadedFile(file);
		setHasPickedFile(true);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
	});
	return (
		<Dialog>
			<DialogTrigger asChild>
				{/* <button className='btn btn-sm'>upload</button> */}
				<Button variant='destructive'>
					<UploadIcon className='mr-2 h-6 w-6' /> upload
				</Button>
			</DialogTrigger>
			<DialogContent
				className='sm:max-w-md'
				onInteractOutside={(e) => e.preventDefault()}
			>
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

							{uploadedFile ? (
								<span className='text-slate-400 text-[9px] mt-6'>
									{`${uploadedFile.name}`}
								</span>
							) : null}
							{isUploading ? (
								<Progress value={progress} className='w-[60%] mt-7 h-1' />
							) : null}
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
					<button
						onClick={async () => {
							// setIsUploading(true);
							setHasPickedFile(false);
							await handleUpload(uploadedFile, setProgress, setIsUploading);
							setUploadedFile(null);
							setIsUploading(false);
						}}
						className='btn btn-sm btn-primary self-end'
						disabled={!hasPickedFile}
					>
						upload
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
