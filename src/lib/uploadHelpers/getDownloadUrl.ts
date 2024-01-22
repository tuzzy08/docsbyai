'use server';

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { auth } from '@clerk/nextjs';
import { S3 } from '@/lib/cloudflare_r2';

export async function getDownloadUrl(key: string) {
	// Check if the user is authorized
	const { userId } = auth();
	if (!userId) throw new Error('UNAUTHORIZED');
	// Get signedurl
	const signedUrl = await getSignedUrl(
		S3,
		new GetObjectCommand({
			Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
			Key: key,
		}),
		{ expiresIn: 3600 }
	);
	return { signedUrl };
}
