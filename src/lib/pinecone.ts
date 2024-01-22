import { Pinecone } from '@pinecone-database/pinecone';

export function getPineconeClient() {
	return new Pinecone({
		apiKey: process.env.PINECONE_API_KEY!,
	});
}
