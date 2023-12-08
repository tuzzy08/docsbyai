'use client';

import { trpc } from '@/app/_trpc/client';
import Skeleton from 'react-loading-skeleton';
import { Trash2, FileEdit } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

type Document = {
	id: String;
	title: String;
	uploadDate: String;
	size: Number;
};

export function DocumentList() {
	const { data: docs, isLoading } = trpc.getDocs.useQuery();
	const [currentlyDeleting, setCurrentlyDeleting] = useState<string | null>(
		null
	);

	const utils = trpc.useContext();
	const { mutate: deleteDoc } = trpc.deleteDocs.useMutation({
		onSuccess: () => {
			utils.getDocs.invalidate();
		},
		onMutate({ id }) {
			setCurrentlyDeleting(id);
		},
		onSettled() {
			setCurrentlyDeleting(null);
		},
	});

	return (
		<div className='flex flex-col '>
			{isLoading ? (
				<Skeleton count={3} height={25} className='space-y-3' />
			) : docs && docs?.length < 1 ? (
				<div> No documents to show. Upload a document!</div>
			) : (
				<div className='flex flex-col space-y-4 divide-y'>
					{docs?.map((doc) => (
						<div
							key={doc.id}
							className='flex justify-between items-center pt-2'
						>
							<div className='flex flex-col justify-center'>
								<span>{doc.title}</span>
								<span className='self-start text-slate-400 text-xs'>{`uploaded ${format(
									new Date(doc.uploadDate),
									'd MMM yy'
								)}`}</span>
							</div>
							<span className='flex justify-center gap-1'>
								<button className='inline-flex items-center px-2 py-1 gap-x-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 bg-slate-400 hover:bg-slate-300 text-white text-sm font-medium rounded-md'>
									<FileEdit size={16} color='white' />
								</button>
								<button
									onClick={() => deleteDoc({ id: doc.id })}
									className='inline-flex items-center px-2 py-1 gap-x-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md'
								>
									<Trash2 size={16} color='white' />
								</button>
							</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
}