import React, { Dispatch, SetStateAction } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function PdfToolbar({
	numberOfPages,
	currentPage,
	setCurrentPage,
}: {
	numberOfPages: number | undefined;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
	return (
		<div className='flex justify-center items-center border-b gap-1'>
			<div className='flex items-center gap-2'>
				<Input className='w-10 h-7' value={currentPage} />
				<span className='text-zinc-700 text-sm'>{numberOfPages ?? null}</span>
			</div>

			<div className='flex items-center'>
				<Button
					className='p-1'
					variant='ghost'
					aria-label='Next Page Button'
					onClick={() => {
						if (currentPage === numberOfPages) return;
						setCurrentPage((prev) => prev + 1);
					}}
				>
					<ChevronDown className='h-7 w-7' />
				</Button>
				<Button
					className='p-1'
					variant='ghost'
					aria-label='Previous Page Button'
					onClick={() => {
						if (currentPage === 1) return;
						setCurrentPage((prev) => prev - 1);
					}}
				>
					<ChevronUp className='h-7 w-7' />
				</Button>
			</div>
		</div>
	);
}
