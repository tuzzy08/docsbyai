'use server';

import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { getPineconeClient } from '../pinecone';
import { getDownloadUrl } from '.';

export async function vectorizeDoc(docId: string) {
	if (!docId) return;
	const { signedUrl } = await getDownloadUrl(docId);
	const response = await fetch(signedUrl);
	const file = await response.blob();
	const loader = new PDFLoader(file);
	const docs = await loader.load();

	const pinecone = getPineconeClient();
	const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);
	const embeddings = new OpenAIEmbeddings({
		openAIApiKey: process.env.OPENAI_API_KEY,
	});
	await PineconeStore.fromDocuments(docs, embeddings, {
		pineconeIndex,
		maxConcurrency: 5,
		namespace: docId,
	});
}
