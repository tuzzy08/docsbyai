import {
	getUploadUrl,
	onUploadComplete,
	uploadFile,
} from '@/lib/uploadHelpers';

export async function handleUpload(file: File | null) {
	if (!file) return;
	try {
		const signedUrl = await getUploadUrl(file.name);
		console.log(signedUrl);
		// Upload file
		const response = await uploadFile(file, signedUrl);
		console.log(response);
		if (response.status === 200) {
			const result = await onUploadComplete({
				title: file.name,
				size: file.size,
			});

			console.log(result);
			return result;
		}
	} catch (error) {
		console.error(error);
	}
}
