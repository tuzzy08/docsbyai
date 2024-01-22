import { PdfViewer } from '@/components/PdfViewer';
import { ChatComponent } from '@/components/ChatComponent';

export default async function DocumentPage({
	params,
}: {
	params: {
		docId: string;
	};
}) {
	const { docId } = params;

	return (
		<div className='flex flex-wrap w-full mb-2 mt-5'>
			<div className='md:w-2/4 w-full'>
				<PdfViewer docId={docId} />
			</div>
			<div className='md:w-2/4 w-full md:mt-0 mt-4'>
				<ChatComponent />
			</div>
		</div>
	);
}
