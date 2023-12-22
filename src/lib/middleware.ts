'use server';

import { auth } from '@clerk/nextjs';
import { prisma as db } from '@/lib/prisma';

export async function onUploadComplete({
	title,
	size,
}: {
	title: string;
	size: number;
}) {
	const { userId } = auth();
	if (!userId) {
		throw new Error('You must be signed in to upload a document');
	}
	if (!title || !size) return;
	try {
		return await db.docs.create({
			data: {
				title,
				size,
				owner_id: userId,
			},
		});
	} catch (err) {
		console.log(err);
	}
}
