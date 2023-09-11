
export type SiteConfig = {
    metadataBase: URL;
    title: {
      default: string;
      template: string;
    };
    keywords:string[],
    description: string;
    openGraph: {
      title: string;
      description: string;
      url: string;
      siteName: string;
      locale: string;
      type: string;
    };
    robots: {
      index: boolean;
      follow: boolean;
      googleBot: {
        index: boolean;
        follow: boolean;
        'max-video-preview': number;
        'max-image-preview': string;
        'max-snippet': number;
      };
    };
    twitter: {
      title: string;
      card: string;
    };
    verification?: {
      google?: string;
      yandex?: string;
    };
  }


export const siteConfig : SiteConfig = {
    metadataBase: new URL("https://nextpix.vercel.app"),
    title: {
      default: "NextPix Gallery - Explore Stunning Images",
      template: "%s | NextPix Gallery",
    },
    description:
      "An image gallery project created with Next.js and , showcasing photos from the Pexels API",
    openGraph: {
      title: "NextPix Gallery - Explore Stunning Images",
      description:
        "An image gallery project created with Next.js and , showcasing photos from the Pexels API",
      url: "https://nextpix.vercel.app",
      siteName: "NextPix Gallery",
      locale: "en-DZ", // Adjust the locale as needed
      type: "website",
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
      title: "NextPix Gallery - Explore Stunning Images",
      card: "summary_large_image",
    },
    keywords:[ 
        "Gallery",
        "Image Gallery",
        "Photography",
        "Visuals",
        "Art",
        "Next.js",
        "Shadcn UI",
        "Pexels API",
        "Photo Collection",
        "Picture Showcase",
        "Creative Images",
        "Digital Art",
        "Online Gallery",
        "Picture Gallery",
        "Photo Display",
        "Web Gallery",
        "Stunning Photos",
        "Photo Exploration",
        "Visual Arts",
        "Image Showcase",]
  };
