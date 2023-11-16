import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { UploadIcon } from '@radix-ui/react-icons';

export default function FileUploadButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				{/* <button className='btn btn-sm'>upload</button> */}
				<Button variant='destructive'>
					<UploadIcon className='mr-2 h-6 w-6' /> upload
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<DialogDescription>
						Anyone who has this link will be able to view this.
					</DialogDescription>
				</DialogHeader>
				<div className='flex items-center space-x-2'>
					<div className='grid flex-1 gap-2'></div>
					{/* <Button type='submit' size='sm' className='px-3'>
						<span className='sr-only'>Copy</span>
						<CopyIcon className='h-4 w-4' />
					</Button> */}
				</div>
				<DialogFooter className='sm:justify-start'>
					<DialogClose asChild>
						<button className='btn btn-sm'>close</button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
