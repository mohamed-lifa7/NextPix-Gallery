import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/themes/theme-provider';
import { Roboto } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import { siteConfig } from '@/lib/site';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.title.default,
		template: siteConfig.title.template,
	},
	metadataBase: siteConfig.metadataBase,
	description: siteConfig.description,
	keywords: [...siteConfig.keywords],
	openGraph: {
		title: siteConfig.title.default,
		description: siteConfig.description,
		url: siteConfig.metadataBase,
		siteName: siteConfig.title.default,
		locale: 'en-DZ',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: siteConfig.title.default,
		card: 'summary_large_image',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={roboto.className}>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					<Navbar />
					<main className='max-w-6xl mx-auto'>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
