import { fetchImages } from '@/lib/fetchImages';
import type { ImagesResults } from '@/models/Images';
import ImageContainer from './imageContainer';
import addBlurredDataUrls from '@/lib/getBase64';
import getPrevNextPages from '@/lib/getPrevNextPages';
import Footer from '../layout/Footer';

type Props = {
	topic?: string | undefined;
	page?: string | undefined;
};
const Gallery = async ({ topic = 'curated', page }: Props) => {
	let url;
	if (topic === 'curated' && page) {
		// browsing beyond home
		url = `https://api.pexels.com/v1/curated?page=${page}`;
	} else if (topic === 'curated') {
		// home
		url = 'https://api.pexels.com/v1/curated';
	} else if (!page) {
		// 1st page of search results
		url = `https://api.pexels.com/v1/search?query=${topic}`;
	} else {
		// search result beyond 1st page
		url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
	}
	const images: ImagesResults | undefined = await fetchImages(url);
	if (!images || images.per_page === 0) {
		return (
			<div className='w-full text-center'>
				<h2 className='m-4 text-2xl font-bold'>Not Found</h2>
				<p>No images found</p>
			</div>
		);
	}

	const photosWithBlur = await addBlurredDataUrls(images);

	const { prevPage, nextPage } = getPrevNextPages(images);

	const footerProps = { topic, page, nextPage, prevPage };

	return (
		<>
			<section className='px-1 my-3 grid grid-cols-gallery auto-rows-[10px]'>
				{photosWithBlur.map((photo) => (
					<ImageContainer
						key={photo.id}
						photo={photo}
					/>
				))}
			</section>
			<Footer {...footerProps} />
		</>
	);
};

export default Gallery;
