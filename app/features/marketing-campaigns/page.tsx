import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export default function MarketingCampaignsPage() {
  const benefits = [
    {
      title: 'Contractor Lead Revival',
      description:
        "Give us a list of at least 150 of your past customers and or lead you haven't been able to close. We will run a campaign to get them through the door again.",
    },
    {
      title: 'Contractor 5-Star Review Injector',
      description:
        "Provide us with a list of at least 150 past customers. We’ll launch a review campaign offering a $50 gift card or something similar to encourage them to leave feedback and come back.",
    },
    {
      title: 'Contractor Holiday Promos',
      description: `Share a list of at least 150 past customers or leads, and we’ll run a holiday promo campaign to bring them back. We’ll offer special discounts or incentives to rekindle their interest and boost your seasonal sales.`,
    },
    {
      title: 'Contractor Customer Nurture',
      description: `Give us a list of at least 150 past clients or leads, and we’ll run a customer nurture campaign to re-engage them. We’ll send personalized follow-ups and offers to keep your services top-of-mind and encourage repeat business.`,
    },
  ];

  const statistics = [
    {
      stat: '98%',
      description: 'of text messages are read within 3 minutes',
    },
    {
      stat: '30%',
      description: 'of SMS marketing campaigns result in immediate sales.',
    },
    {
      stat: '62%',
      description: 'of consumers say they are likely to engage with SMS promotions.',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string }]}
        title="Marketing Campaigns"
        title2="Why do I need marketing campaigns?"
        videoSrc="https://www.youtube.com/embed/9bZkp7q19f0"
      />
    </>
  );
}
