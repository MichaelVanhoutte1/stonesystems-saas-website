'use client';

import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './CallUsSection.module.css';
import { IconClockHour1, IconMapPin, IconPhone } from '@tabler/icons-react';

export function CallUsSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.inner}>
        <Title className={classes.mainTitle}>Or Contact Us Here…</Title>
        <Text className={classes.description} ta="center" mt="md">
          We've helped hundreds of contractors grow their business online, let us help you too.
        </Text>
        <SimpleGrid cols={3}>
          <div className={classes.contactBox}>
            <ThemeIcon size={50} radius="xl" color="var(--yellow)">
              <IconPhone width={40} height={40} />
            </ThemeIcon>
            <Text className={classes.description} ta="center" mt="md">
              (800) 555-5555
            </Text>
          </div>
          <div className={classes.contactBox}>
            <ThemeIcon size={50} radius="xl" color="var(--yellow)">
              <IconClockHour1 width={40} height={40} />
            </ThemeIcon>{' '}
            <Text className={classes.description} ta="center" mt="md">
              Mon-Fri: 8AM – 6PM
            </Text>
          </div>
          <div className={classes.contactBox}>
            <ThemeIcon size={50} radius="xl" color="var(--yellow)">
              <IconMapPin width={40} height={40} />
            </ThemeIcon>{' '}
            <Text className={classes.description} ta="center" mt="md">
              Serving Contractors Nationwide
            </Text>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}