import { deleteFile } from '@/lib/uploadHelpers';

export async function handleDelete(key: string) {
	if (!key) return;
	try {
		const res = await deleteFile(key);
	} catch (error) {
		console.error(error);
	}
}
