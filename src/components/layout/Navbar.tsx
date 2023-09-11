import Link from 'next/link';
import Search from './Search';
import { ModeToggle } from '../themes/mode-toggle';
import { Separator } from '../ui/separator';
import { Github } from 'lucide-react';
import { buttonVariants } from '../ui/button';

export default function Navbar() {
	return (
		<>
			<header className='sticky top-0 z-50 backdrop-filter backdrop-blur-lg'>
				<nav className='flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 max-w-6xl mx-auto text-primary'>
					<h1 className='text-2xl sm:text-3xl text-center whitespace-nowrap'>
						<Link href='/'>
							<span className='font-bold'>Next</span>
							<span className='font-semibold'>Pix</span> Gallery
						</Link>
					</h1>
					<div className='flex'>
						<Search className='mr-2' />
						<Link
							href='https://github.com/mohamed-lifa7/NextPix-Gallery.git'
							target='_blank'
							rel='noreferrer'>
							<div
								className={buttonVariants({
									size: 'sm',
									variant: 'ghost',
								})}>
								<Github className='h-5 w-5' />
								<span className='sr-only'>GitHub</span>
							</div>
						</Link>
						<ModeToggle />
					</div>
				</nav>
			</header>
			<Separator className='mb-6' />
		</>
	);
}
