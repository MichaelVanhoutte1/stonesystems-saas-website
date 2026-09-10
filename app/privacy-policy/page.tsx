import { Metadata } from 'next';
import { PrivacyPage } from '@/components/PrivacyPage/PrivacyPage';

export const metadata: Metadata = {
  title: 'Stone Systems - Privacy Policy',
  description:
    'Privacy Policy for Stone Systems websites, services, and mobile app describing data collection, sharing, cookies, consumer rights, and how to submit privacy requests.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPage />
    </>
  );
}
