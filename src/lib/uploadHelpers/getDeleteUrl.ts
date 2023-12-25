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
