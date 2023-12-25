export async function deleteFile(key: string, signedUrl: string) {
	const response = await fetch(signedUrl, {
		method: 'DELETE',
		body: key,
	});
	return response;
}
