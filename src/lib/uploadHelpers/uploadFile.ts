import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
type args = {
	file: File;
	id: string;
	setProgress: Dispatch<SetStateAction<number>>;
};

export async function uploadFile({ file, id, setProgress }: args) {
	let data = new FormData();
	data.append('file', file);
	const signedUrl = await getUploadUrl(id);
	const response = await axios.put(signedUrl, data, {
		onUploadProgress({ loaded, total }) {
			//@ts-ignore
			let percent = Math.floor((loaded * 100) / total);
			console.log(percent);
			setProgress(percent);
		},
		headers: {},
	});

	// const response = await fetch(signedUrl, {
	// 	method: 'PUT',
	// 	body: file,
	// });
	return response;
}

export async function getUploadUrl(key: string) {
	// Generate pre-signed URL
	const response = await fetch('/api/uploads/getUploadUrl', {
		method: 'POST',
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ key }),
	});
	const { signedUrl } = await response.json();
	return signedUrl;
}
