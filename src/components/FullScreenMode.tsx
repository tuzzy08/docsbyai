import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Fullscreen } from 'lucide-react';
import SimpleBar from 'simplebar-react';
import { useResizeDetector } from 'react-resize-detector';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

export function FullScreenMode({ url }: { url: string }) {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>();
	const { width, height, ref } = useResizeDetector();
	const onLoadSuccess = ({ numPages }: { numPages: number }) => {
		setTotalPages(numPages);
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='ghost' className='p-1' aria-label='full screen'>
					<Fullscreen className='h-5 w-5' />
				</Button>
			</DialogTrigger>
			<DialogContent className='max-w-7xl w-full'>
				<SimpleBar autoHide={false} className='max-h-[calc(100vh-10rem)] mt-6'>
					<div ref={ref}>
						<Document file={url} onLoadSuccess={onLoadSuccess}>
							{Array.from(new Array(totalPages), (el, index) => (
								<Page
									key={`page_${index + 1}`}
									pageNumber={index + 1}
									width={width}
								/>
							))}
						</Document>
					</div>
				</SimpleBar>
			</DialogContent>
		</Dialog>
	);
}
