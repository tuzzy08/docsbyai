'use client';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function PdfViewer({ url }: { url: string }) {
	return (
		<div className='w-full bg-white'>
			<Document file={url}>
				<Page pageNumber={1}></Page>
			</Document>
		</div>
	);
}
