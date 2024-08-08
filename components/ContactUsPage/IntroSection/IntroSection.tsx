'use client';

import { Container, SimpleGrid, Text, Title, Image } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Want to book a time to talk?</Title>
        <Container className={classes.calendarSection} size="lg">
          <SimpleGrid cols={2}>
            <iframe
              src="https://api.ezclick.io/widget/booking/kxxPjpAlijjYxioZsRkX"
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="C74WoFNbfESXPtLVtmx8_1721647765202"
            />
            <Image src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png" className={classes.image} />
          </SimpleGrid>
          <script src="https://api.ezclick.io/js/form_embed.js" type="text/javascript"></script>
        </Container>
      </Container>
    </div>
  );
}