'use client';

import { Container, Title, Button, Text, Flex, Modal } from '@mantine/core';
import Image from 'next/image';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import dynamic from 'next/dynamic';
import classes from './Feature4.module.css';
import PhoneImage from '@/public/images/phone-left.png';

const VideoPopup = dynamic(() => import('@/components/Popups/VideoPopup/VideoPopup').then(mod => mod.VideoPopup));

const features = [
  {
    title: 'Done For You',
    description:
      'Again... let’s keep it simple. Activate our pre-built marketing campaigns with just one click.',
  },
  {
    title: 'Referral Campaigns',
    description:
      "We know it and you know it... You do good work, and your customers love you. Let's remind them to tell their friends.",
  },
  {
    title: 'Return Customer Campaigns',
    description:
      "Having loyal customers is key to a succesful business. We'll make sure your customers feel cared for with special offers.",
  },
  {
    title: 'Marketing Campaigns At Your Fingertips',
    description:
      "Just click a button and we'll take care of the rest. No need to hire a marketing team.",
  },
];

export function Feature4() {
  const [opened, { close, open }] = useDisclosure(false);
  const items = features.map((feature, index) => (
    <div key={feature.title}>
      <Flex>
        <IconRosetteDiscountCheckFilled color="var(--yellow)" />
        <Text className={classes.featureTitle}>{feature.title}</Text>
      </Flex>
      <Text className={classes.featureDescription}>{feature.description}</Text>
    </div>
  ));

  return (
    <div className={classes.outer}>
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>One-Click Marketing Campaigns</Title>
          <Text className={classes.description} mt="md">
          You know it, and we know it… Referrals and repeat customers are the best. Let’s get you both!
          </Text>
          <Flex mt="lg" direction="column">
            {items}
          </Flex>
          <Button onClick={open} size="xl" bg="var(--yellow)" className={classes.control}>
            See 30 Second Demo
          </Button>
          <Modal opened={opened} onClose={close} size="xl">
          <VideoPopup videoSrc="/videos/Adam.mov" />
          </Modal>
        </div>
        <Image  alt="website animation" src={PhoneImage} className={classes.image} />
      </div>
    </Container>
    </div>
  );
}
