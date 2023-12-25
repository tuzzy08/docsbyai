export async function getUploadUrl(filename: string) {
	// Generate pre-signed URL
	const response = await fetch('/api/uploads/getUploadUrl', {
		method: 'POST',
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ filename }),
	});
	const { signedUrl } = await response.json();
	return signedUrl;
}
