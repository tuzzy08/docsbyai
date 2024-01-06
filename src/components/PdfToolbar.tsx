import React, { Dispatch, SetStateAction } from 'react';
import {
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ChevronUp,
	ZoomIn,
	ZoomOut,
	Fullscreen,
	RotateCw,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { FullScreenMode } from './FullScreenMode';

export function PdfToolbar({
	url,
	numberOfPages,
	currentPage,
	scale,
	rotate,
	setScale,
	setCurrentPage,
	setRotate,
}: {
	url: string;
	numberOfPages: number | undefined;
	currentPage: number;
	scale: number;
	rotate: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	setScale: Dispatch<SetStateAction<number>>;
	setRotate: Dispatch<SetStateAction<number>>;
}) {
	const schema = z.object({
		pageNum: z
			.string()
			.refine(
				(pageNo) => Number(pageNo) > 1 && Number(pageNo) <= numberOfPages!
			),
	});

	type SchemaType = z.infer<typeof schema>;

	const handlePageSubmit = ({ pageNum }: SchemaType) => {
		setCurrentPage(Number(pageNum));
		// setValue('pageNum', String(pageNum));
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<SchemaType>({
		defaultValues: {
			pageNum: '1',
		},
		resolver: zodResolver(schema),
	});

	return (
		<div className='flex justify-center items-center border-b gap-3'>
			<div className='flex items-center gap-2'>
				<Input
					className='w-10 h-7'
					value={currentPage}
					{...register('pageNum')}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSubmit(handlePageSubmit)();
						}
					}}
				/>
				<span className='text-zinc-700 text-sm'>{numberOfPages ?? null}</span>
			</div>

			<div className='flex items-center'>
				<Button
					className='p-1'
					variant='ghost'
					aria-label='Previous Page Button'
					onClick={() => {
						if (currentPage === 1) return;
						setCurrentPage((prev) => prev - 1);
					}}
				>
					<ChevronLeft className='h-5 w-5' />
				</Button>
				<Button
					className='p-1'
					variant='ghost'
					aria-label='Next Page Button'
					onClick={() => {
						if (currentPage === numberOfPages) return;
						setCurrentPage((prev) => prev + 1);
					}}
				>
					<ChevronRight className='h-5 w-5' />
				</Button>
			</div>
			<div className='flex gap-7'>
				<div className='flex items-center'>
					<Button
						variant='ghost'
						className='p-1'
						aria-label='zoom out'
						onClick={() => {
							if (scale > 1) {
								setScale((prevScale) => prevScale - 0.5);
							}
						}}
					>
						<ZoomOut className='h-5 w-5' />
					</Button>
					<Button
						variant='ghost'
						className='p-1'
						aria-label='zoom in'
						onClick={() => {
							if (scale < 2.5) {
								setScale((prevScale) => prevScale + 0.5);
							}
						}}
					>
						<ZoomIn className='h-5 w-5' />
					</Button>
				</div>
				<div className='flex items-center gap-2'>
					<Button
						variant='ghost'
						className='p-1'
						aria-label='rotate'
						onClick={() => {
							setRotate((prevRotation) => prevRotation + 90);
						}}
					>
						<RotateCw className='h-5 w-5' color='#000000' />
					</Button>
					<FullScreenMode url={url} />
				</div>
			</div>
		</div>
	);
}
