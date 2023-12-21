import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { auth, currentUser } from '@clerk/nextjs';
import { S3 } from '@/lib/cloudflare_r2';

export async function POST(request: Request) {
	const body = await request.json();
	const signedUrl = await getSignedUrl(
		S3,
		new PutObjectCommand({
			Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
			Key: body.filename,
		}),
		{ expiresIn: 3600 }
	);
	return NextResponse.json({ signedUrl });
}
