'use client';
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PdfToolbar } from '@/components/PdfToolbar';
import { useResizeDetector } from 'react-resize-detector';
import SimpleBar from 'simplebar-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { getDownloadUrl } from '@/lib/uploadHelpers/getDownloadUrl';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function PdfViewer({ docId }: { docId: string }) {
	useEffect(() => {
		async function getUrl(docId: string) {
			const { signedUrl } = await getDownloadUrl(docId);
			setDocUrl(signedUrl);
		}
		getUrl(docId);
	}, [docId]);
	const [docUrl, setDocUrl] = useState('');
	const [totalPages, setTotalPages] = useState<number>();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [scale, setScale] = useState(1);
	const [rotate, setRotate] = useState(0);
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
				scale={scale}
				rotate={rotate}
				setScale={setScale}
				setRotate={setRotate}
				url={docUrl}
			/>
			<SimpleBar>
				<div ref={ref}>
					<Document file={docUrl} onLoadSuccess={onLoadSuccess}>
						<Page
							pageNumber={currentPage}
							width={width}
							scale={scale}
							rotate={rotate}
						/>
					</Document>
				</div>
			</SimpleBar>
		</div>
	);
}
