import { getDeleteUrl, deleteFile } from '@/lib/uploadHelpers';

export async function handleDelete(key: string) {
	if (!key) return;
	try {
		const signedUrl = await getDeleteUrl(key);
		console.log(signedUrl);
		const res = await deleteFile(key, signedUrl);
	} catch (error) {
		console.error(error);
	}
}
