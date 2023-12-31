'use server';

export async function deleteFile(key: string) {
	const signedUrl = await getDeleteUrl(key);
	const response = await fetch(signedUrl, {
		method: 'DELETE',
		body: key,
	});
	return response;
}

export async function getDeleteUrl(key: string) {
	// Generate pre-signed URL
	const response = await fetch('/api/uploads/getDeleteUrl', {
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
