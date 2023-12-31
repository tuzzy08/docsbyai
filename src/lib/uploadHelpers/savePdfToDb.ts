'use server';

import { auth } from '@clerk/nextjs';
import { prisma as db } from '@/lib/prisma';

export async function savePdfToDb({
	id,
	title,
	size,
}: {
	id: string;
	title: string;
	size: number;
}) {
	const { userId } = auth();
	if (!userId) {
		throw new Error('You must be signed in to upload a document');
	}
	if (!title || !size) throw new Error('Invalid title and/or Size');
	try {
		return await db.docs.create({
			data: {
				id,
				title,
				size,
				owner_id: userId,
			},
		});
	} catch (err) {
		console.log(err);
	}
}
