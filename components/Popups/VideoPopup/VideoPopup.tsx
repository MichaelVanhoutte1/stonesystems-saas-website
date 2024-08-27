'use client';

import { Container, Title } from '@mantine/core';
import classes from './VideoPopup.module.css';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';

export function VideoPopup({ videoSrc, title, videoThumbnail  }: { videoSrc: string, title: string, videoThumbnail: string}) {
  return (
      <Container className={classes.popup} size="xl">
        <Title className={classes.title} order={1}>{title}</Title>
        <Title className={classes.title2} order={1}>30 Second Demo</Title>
        <LazyLoadVideo poster={videoThumbnail} alt={title} src={videoSrc} type="video/mp4" width="100%" height="auto" />
      </Container>
  );
}
