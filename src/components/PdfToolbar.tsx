import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function PdfToolbar() {
	return (
		<div className='flex justify-center items-center border-b gap-1'>
			<div className='flex items-center gap-2'>
				<Input className='w-10 h-7' />
				<span className='text-zinc-700 text-sm'>350</span>
			</div>

			<div className='flex items-center'>
				<Button className='p-1' variant='ghost' aria-label='Next Page Button'>
					<ChevronDown className='h-7 w-7' />
				</Button>
				<Button
					className='p-1'
					variant='ghost'
					aria-label='Previous Page Button'
				>
					<ChevronUp className='h-7 w-7' />
				</Button>
			</div>
		</div>
	);
}
