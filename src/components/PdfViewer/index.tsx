'use client';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { PdfToolbar } from '@/components/PdfToolbar';
import { useResizeDetector } from 'react-resize-detector';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function PdfViewer({ url }: { url: string }) {
	const { width, height, ref } = useResizeDetector();
	return (
		<div className='flex flex-col bg-white border'>
			<PdfToolbar />
			<div ref={ref}>
				<Document file={url}>
					<Page pageNumber={1} width={width}></Page>
				</Document>
			</div>
		</div>
	);
}
