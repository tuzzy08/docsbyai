import { downloadFile } from '@/lib/uploadHelpers/downloadFile';
import { PdfViewer } from '@/components/PdfViewer';

export default async function DocumentPage({
	params,
}: {
	params: {
		docId: string;
	};
}) {
	const { docId } = params;
	const { signedUrl, response } = await downloadFile(docId);
	console.log(response);
	return (
		<div>
			<PdfViewer url={signedUrl} />
		</div>
	);
}
