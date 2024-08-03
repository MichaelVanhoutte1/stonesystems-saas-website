'use client';

import { Container, Text, SimpleGrid, Image, ActionIcon, Group, rem } from '@mantine/core';

import classes from './AboutUsSection.module.css';
import { IconBrandFacebook, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

export function AboutUsSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid className={classes.grid} cols={2}>
          <div>
            <Text className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, fugit officia ipsam
              deserunt iure voluptas aperiam obcaecati dolores reprehenderit nulla porro minima eos
              quas dignissimos voluptatum harum, distinctio reiciendis perferendis. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Suscipit distinctio quisquam
              perspiciatis odit, laudantium enim atque neque consequatur. Commodi fugiat soluta
              recusandae consectetur magni nulla natus corrupti nisi dolore eveniet?
            </Text>
            <Group
              gap={0}
              className={classes.social}
              mt={'1rem'}
              justify="flex-start"
              wrap="nowrap"
            >
              <ActionIcon size="xl" mr={10} color="var(--blue)" variant="subtle">
                <IconBrandFacebook style={{ width: rem(60), height: rem(60) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="xl" mx={10} color="var(--blue)" variant="subtle">
                <IconBrandYoutube style={{ width: rem(60), height: rem(60) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="xl" mx={10} color="var(--blue)" variant="subtle">
                <IconBrandInstagram style={{ width: rem(60), height: rem(60) }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
          <Image
            src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
            alt="About Us"
            className={classes.image}
          />
        </SimpleGrid>
      </Container>
    </div>
  );
}
