'use client';

import { Container, Title, Button, Text, Flex, Modal } from '@mantine/core';
import Image from 'next/image';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import dynamic from 'next/dynamic';
import classes from './Feature2.module.css';
import PhoneImage from '@/public/animations/5_STAR_FUNNEL.gif';

const VideoPopup = dynamic(() =>
  import('@/components/Popups/VideoPopup/VideoPopup').then((mod) => mod.VideoPopup)
);

const features = [
  {
    title: '5-Star Reviews Only',
    description:
      'You can’t make everyone happy, but our magic funnel sure can. Five stars, every time.',
  },
  {
    title: 'Automatic Follow-Up Reminders',
    description:
      "\"Sure I'll leave you a review\", but the truth is people forget. We’ll 'gently' reminder them for a few weeks until they remember.",
  },
  {
    title: 'Ask For Reviews In One Click',
    description:
      "As promised, we keep it simple. If you're confused, we're fired and extremely embarrassed.",
  },
  {
    title: 'Stop worrying about bad reviews',
    description:
      'Unsure if you should ask for a review? We’ll take the guesswork out by guiding your customer to leave a 5-star review!',
  },
];

export function Feature2() {
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
    <Container size="xl">
      <div className={classes.inner}><Image alt="website animation" src={PhoneImage} className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>5-Star Magic Funnel</Title>
          <Text className={classes.description} mt="md">
            "Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' remind
            them for a few weeks until they remember.
          </Text>
          <Flex mt="lg" direction="column">
            {items}
          </Flex>
          <Button onClick={open} size="xl" bg="var(--yellow)" className={classes.control}>
            See 30 Second Demo
          </Button>
          <Modal
            closeButtonProps={{
              size: 'xl',
            }}
            opened={opened}
            onClose={close}
            size="xl"
          >
            <VideoPopup videoSrc="/videos/Adam.mov" title='5 Star Magic Funnel' />
          </Modal>
        </div>
        
      </div>
    </Container>
    </div>
  );
}
