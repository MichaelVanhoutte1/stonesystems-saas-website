'use client';

import { Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <>
      <Title className={classes.mainTitle}>StoneSystems Partners</Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        We build meaningful partnerships with companies that bring exceptional value to our mutual
        customers.
      </Text>
    </>
  );
}
