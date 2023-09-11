import Link from 'next/link';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
	topic: string;
	page: string | undefined;
	prevPage: string | null;
	nextPage: string | null;
};

export default function Footer({ topic, page, prevPage, nextPage }: Props) {
	if (!prevPage && !nextPage) return;

	const pageNums: number[] = [];
	if (prevPage && nextPage) {
		for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
			pageNums.push(i);
		}
	}

	const nextPageArea = nextPage ? (
		<Link
			href={`/results/${topic}/${nextPage}`}
			className={!prevPage ? 'mx-auto' : 'flex items-center'}>
			<Button
				variant='link'
				className={`${prevPage ? 'hidden' : ''}`}>
				{!prevPage ? 'more' : null}{' '}
			</Button>
			<Button
				size='icon'
				className='ml-2'
				variant='outline'>
				<ChevronRight className='h-4 w-4' />
			</Button>
		</Link>
	) : null;

	const prevPageArea = prevPage ? (
		<>
			<Link
				href={`/results/${topic}/${prevPage}`}
				className={!nextPage ? 'flex items-center mx-auto' : ''}>
				<Button
					size='icon'
					className='mr-2'
					variant='outline'>
					<ChevronLeft className='h-4 w-4' />
				</Button>
				<Button
					variant='link'
					className={`${nextPage ? 'hidden' : 'mx-2'}`}>
					<span className='block h-4 w-4'>
						{!nextPage ? 'back' : null}
					</span>
				</Button>
			</Link>

			{pageNums.map((num, i) =>
				page && num === parseInt(page) ? (
					<Button
						key={i}
						variant='outline'
						disabled
						className='mx-1'
						size='icon'>
						<span className='block h-4 w-8'>{num}</span>
					</Button>
				) : (
					<Button
						asChild
						key={i}
						className='mx-1'
						variant='outline'>
						<Link href={`/results/${topic}/${num}`}>{num}</Link>
					</Button>
				),
			)}
		</>
	) : null;

	return (
		<footer className='flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto'>
			{prevPageArea}
			{nextPageArea}
		</footer>
	);
}
