import { Dispatch, SetStateAction } from 'react';
import { createId } from '@paralleldrive/cuid2';
import { savePdfToDb, uploadFile } from '@/lib/uploadHelpers';
import { vectorizeDoc } from './vectorizeDoc';

export async function handleUpload(
	file: File | null,
	setProgress: Dispatch<SetStateAction<number>>,
	setIsUploading: Dispatch<SetStateAction<boolean>>
) {
	if (!file) return;
	try {
		// Upload file
		setIsUploading(true);
		const id = createId();
		const response = await uploadFile({ file, id, setProgress });

		console.log(response);
		if (response.status === 200) {
			const result = await savePdfToDb({
				id,
				title: file.name,
				size: file.size,
			});

			console.log(result);
			setProgress(0);
			await vectorizeDoc(id);
			return result;
		}
	} catch (error) {
		console.error(error);
	}
}
