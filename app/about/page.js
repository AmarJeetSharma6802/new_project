import Image from 'next/image';

export const metadata = {
  title: 'About Us - My Company Name', 
  description: 'Learn more about us, our values, and what we do.',
  openGraph: {
    title: 'About Us - Your Company Name',
    description: 'Explore who we are and how we are dedicated to delivering the best products and services.',
    // url: 'https://example.com/about',
    siteName: 'Your Company Name',
    images: [
      {
        // url: 'https://example.com/images/about-us-banner.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Your Company Name',
    description: 'Discover the values and mission of our company.',
    // images: ['https://example.com/images/about-us-banner.jpg'],
  },
};

function page() {
  return (
    <div style={{ position: "relative", width: "100%", height: "695px" }}> 
<Image 
  src="https://ebroker.wrteam.me/images/slider/1739445180.4529.jpg"
  alt="Company Logo"
  style={{objectFit: "cover"}}
/>
    </div>
  )
}

export default page