export async function uploadFile(file: File, signedUrl: string) {
	const response = await fetch(signedUrl, {
		method: 'PUT',
		body: file,
	});
	return response;
}
