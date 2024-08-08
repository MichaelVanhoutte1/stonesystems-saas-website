import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export default function FunctionalWebsitePage() {
  const benefits = [
    {
      title: 'Actually Get Found Online',
      description:
        "We ensure all our websites are properly indexed to appear on Google. We also follow all of Google's best practices for SEO. Before building, we add the right keywords, meta tags, H1 and H2 headers, and make sure everything is optimized for page speed. We also offer blog posts to help with your content creation.",
    },
    {
      title: 'Showcase Your Best Reviews',
      description:
        "An online reputation is arguably the most important part of any business. We ensure your company puts its best foot forward by showcasing your top reviews on every page of your website. We'll keep your reviews updated and ensure they are all responded to promptly.",
    },
    {
      title: 'Mobile Friendly',
      description: `87% of customers search for local businesses on their mobile devices. Ensuring your website loads and functions properly on mobile is our top priority. Our mobile optimizations include clear call-to-actions, hyperlinked phone numbers, and quick load speeds.`,
    },
    {
      title: 'Instantly Starts SMS Conversations',
      description: `We aim to create SMS conversations with potential customers, eliminating the need for email back-and-forths for quotes. Each of our websites includes functional quote forms and a chat widget that instantly starts a text conversation with customers. They’ll receive instant confirmation messages when they reach out, and by capturing their phone number, we ensure you can contact them directly, even if they leave your website.`,
    },
  ];

  const statistics = [
    {
      stat: '75%',
      description: "of people judge a company's credibility based on their website",
    },
    {
      stat: '78%',
      description: 'of small business owners say a website has boosted their growth.',
    },
    {
      stat: '67%',
      description: 'of users trust websites with a seamless experience, boosting sales.',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string }]}
        title="Functional Website"
        title2="What is the functional website?"
        videoSrc="https://www.youtube.com/embed/9bZkp7q19f0"
      />
    </>
  );
}