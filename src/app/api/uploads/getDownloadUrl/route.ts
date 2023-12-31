import { NextResponse } from 'next/server';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { auth } from '@clerk/nextjs';
import { TRPCError } from '@trpc/server';
import { S3 } from '@/lib/cloudflare_r2';

export async function POST(request: Request) {
	// Check if the user is authorized
	const { userId } = auth();
	if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED' });
	// Get filename from request body
	const body = await request.json();
	// Get signed url from cloudflare R2
	const signedUrl = await getSignedUrl(
		S3,
		new GetObjectCommand({
			Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
			Key: body.key,
		}),
		{ expiresIn: 3600 }
	);
	return NextResponse.json({ signedUrl });
}
