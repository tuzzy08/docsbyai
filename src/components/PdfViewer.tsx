'use client';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { PdfToolbar } from '@/components/PdfToolbar';
import { useResizeDetector } from 'react-resize-detector';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function PdfViewer({ url }: { url: string }) {
	const [totalPages, setTotalPages] = useState<number>();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { width, height, ref } = useResizeDetector();

	const onLoadSuccess = ({ numPages }: { numPages: number }) => {
		setTotalPages(numPages);
	};
	return (
		<div className='flex flex-col bg-white border'>
			<PdfToolbar
				numberOfPages={totalPages}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
			<div ref={ref}>
				<Document file={url} onLoadSuccess={onLoadSuccess}>
					<Page pageNumber={currentPage} width={width} />
				</Document>
			</div>
		</div>
	);
}
