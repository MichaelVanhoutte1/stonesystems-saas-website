import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export default function MissedCallTextBackPage() {
  const benefits = [
    {
      title: 'Stand out from your competition',
      description:
        'Every contractor misses phone calls, but few promptly get back to potential customers. Stand out from the competition with an instant, customized message sent on your behalf, acknowledging the missed call and redirecting them to submit a quote form via your website.',
    },
    {
      title: 'No More Lost Leads',
      description:
        "When customers need a project done, they want immediate contact. If their call goes unanswered, they'll move on to the next contractor. We'll try to start a conversation with them instantly to prevent that. There's no reason you should lose leads to missed phone calls.",
    },
    {
      title: 'Be available 24/7',
      description: `Our system is online 24/7, ensuring you never miss an opportunity. Even if you miss a call after hours, we'll promptly respond to all potential leads. This way, you can rest easy knowing that every inquiry is being addressed, keeping your business running smoothly around the clock.`,
    },
  ];

  const statistics = [
    {
      stat: '85%',
      description: 'of customers appreciate getting a text back after missing a call.',
    },
    {
      stat: '72%',
      description:
        'more customers respond to texts instead of voicemails.',
    },
    {
      stat: '69%',
      description: 'of businesses gain more customers with missed call text back.',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string }]}
        title="Missed Call Text Back"
        title2="What is missed call text back?"
        videoSrc="https://www.youtube.com/embed/9bZkp7q19f0"
      />
    </>
  );
}