import { downloadFile } from '@/lib/uploadHelpers/downloadFile';
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
	const { signedUrl } = await downloadFile(docId);
	return (
		<div className='flex flex-wrap w-full mb-2 mt-5'>
			<div className='md:w-2/4 w-full'>
				<PdfViewer url={signedUrl} />
			</div>
			<div className='md:w-2/4 w-full md:mt-0 mt-4'>
				<ChatComponent />
			</div>
		</div>
	);
}
