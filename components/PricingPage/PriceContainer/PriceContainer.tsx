'use client';

import {
  Accordion,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { MutableRefObject, createRef, useRef, useState } from 'react';
import Switch from 'react-switch';
import classes from './PriceContainer.module.css';

export const PriceContainer = () => {
  const theme = useMantineTheme();
  const [monthly, setMonthly] = useState(true);
  const [openBasic, setOpenBasic] = useState<string | null>(null);
  const [openAdvanced, setOpenAdvanced] = useState<string | null>(null);
  const [openSupreme, setOpenSupreme] = useState<string | null>(null);

  const toggleAccordion = (plan: 'basic' | 'advanced' | 'supreme', value: string) => {
    if (plan === 'basic') {
      setOpenBasic((prev) => (prev === value ? null : value));
    } else if (plan === 'advanced') {
      setOpenAdvanced((prev) => (prev === value ? null : value));
    } else if (plan === 'supreme') {
      setOpenSupreme((prev) => (prev === value ? null : value));
    }
  };

  const handleChange = () => {
    setMonthly(!monthly);
  };

  type RefObjectMap = {
    [key: string]: MutableRefObject<HTMLDivElement | null>;
  };

  const basicRefs: RefObjectMap = {
    website: createRef<HTMLDivElement>(),
    mctb: createRef<HTMLDivElement>(),
    hosting: createRef<HTMLDivElement>(),
    inbox: createRef<HTMLDivElement>(),
    repmanage: createRef<HTMLDivElement>(),
    updates: createRef<HTMLDivElement>(),
  };

  const advancedRefs: RefObjectMap = {
    websiteseo: createRef<HTMLDivElement>(),
    leadconf: createRef<HTMLDivElement>(),
    reviews: createRef<HTMLDivElement>(),
    marketing: createRef<HTMLDivElement>(),
    chat: createRef<HTMLDivElement>(),
    blogs: createRef<HTMLDivElement>(),
  };

  const supremeRefs: RefObjectMap = {
    gmb: createRef<HTMLDivElement>(),
    shotgun: createRef<HTMLDivElement>(),
    qr: createRef<HTMLDivElement>(),
    info: createRef<HTMLDivElement>(),
    voicesearch: createRef<HTMLDivElement>(),
  };

  const openAccordionItem = (plan: any, item: any) => {
    if (plan === 'basic') {
      setOpenBasic(item);
      basicRefs[item]?.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (plan === 'advanced') {
      setOpenAdvanced(item);
      advancedRefs[item]?.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (plan === 'supreme') {
      setOpenSupreme(item);
      supremeRefs[item]?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={classes.outer}>
        <Container className={classes.main} size={'lg'}>
          <Stack>
            {/** header section */}
            <Flex direction="column" gap={10} align="center" justify="start">
              <Title className={classes.mainTitle} order={1}>
                Our Pricing
              </Title>
              <Paper className={classes.headerBox}>
                <Text mr={'md'} fz={'md'}>
                  Monthly
                </Text>
                <Switch
                  checked={!monthly}
                  onChange={handleChange}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  width={45}
                  height={25}
                  onColor={'#E8A743'}
                  offColor={'#E8A743'}
                  handleDiameter={18}
                />
                <Text ml={'md'} fz={'md'}>
                  Annually
                </Text>
              </Paper>
            </Flex>
            {/** cards section */}
            <Group>
              <Flex
                align={'center'}
                direction={{ base: 'column', sm: 'row' }}
                color={'hsl(232, 13%, 33%)'}
                gap={{ base: '1.5rem', sm: 0 }}
              >
                <Paper shadow={'md'} className={classes.cardBox1}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Flex>
                      <Text fw={900} fz={'xl'}>
                        Contractor Basic
                      </Text>
                      {!monthly && <Text className={classes.discount}>17% off</Text>}
                    </Flex>
                    <Title order={2} className={classes.moneyTitle}>
                      {monthly ? '$197/mo' : '$165/mo'}
                    </Title>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('basic', 'website')}
                      >
                        Functional Website
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('basic', 'mctb')}
                      >
                        Missed Call Text Back
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('basic', 'hosting')}
                      >
                        Web Hosting & Security
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('basic', 'inbox')}
                      >
                        All In One Inbox
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('basic', 'updates')}
                      >
                        Website Updates
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('basic', 'repmanage')}
                      >
                        Reputation Management
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                    </Stack>
                    <Button bg={'var(--yellow)'} w="100%">
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
                <Paper shadow={'md'} className={classes.cardBox2}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Flex>
                      <Text fw={900} fz={'xl'}>
                        Contractor Advanced
                      </Text>
                      {!monthly && <Text className={classes.discount}>17% off</Text>}
                    </Flex>
                    <Title order={2} className={classes.moneyTitle}>
                      {monthly ? '$297/mo' : '$249/mo'}
                    </Title>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Everything in Contractor Basic
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('advanced', 'websiteseo')}
                      >
                        Full Website SEO Optimizations
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('advanced', 'leadconf')}
                      >
                        Automated SMS Lead Follow Up
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('advanced', 'reviews')}
                      >
                        5-Star Magic Funnel
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('advanced', 'marketing')}
                      >
                        Marketing Campaigns
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('advanced', 'chat')}
                      >
                        Live Website Chat
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('advanced', 'blogs')}
                      >
                        Blog Posts
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                    </Stack>
                    <Button c={'var(--blue)'} bg={'var(--white)'} w="100%">
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
                <Paper shadow={'md'} className={classes.cardBox3}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Flex>
                      <Text fw={900} fz={'xl'}>
                        Contractor Supreme
                      </Text>
                      {!monthly && <Text className={classes.discount}>17% off</Text>}
                    </Flex>
                    <Title order={2} className={classes.moneyTitle}>
                      {monthly ? '$397/mo' : '$333/mo'}
                    </Title>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Everything in Contractor Advanced
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('supreme', 'gmb')}
                      >
                        GMB Posts
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('supreme', 'shotgun')}
                      >
                        Shotgun SEO
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('supreme', 'voicesearch')}
                      >
                        Voice Search
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('supreme', 'info')}
                      >
                        Business Info Sync
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text
                        ta={'center'}
                        fz={'sm'}
                        fw={600}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('supreme', 'qr')}
                      >
                        Custom QR Codes
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                    </Stack>
                    <Button bg={'var(--yellow)'} w="100%">
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
              </Flex>
            </Group>
          </Stack>
        </Container>
      </div>
      <div className={classes.outer2}>
        <Container className={classes.container} size={'lg'}>
          <SimpleGrid cols={3} className={classes.header}>
            <Text className={classes.planTitle}>Contractor Basic </Text>
            <Text className={classes.planTitle}>Contractor Advanced </Text>
            <Text className={classes.planTitle}>Contractor Supreme </Text>
          </SimpleGrid>
          <SimpleGrid cols={3} className={classes.content}>
            <Accordion value={openBasic} onChange={() => setOpenBasic} variant="separated">
              <Accordion.Item value="website" ref={basicRefs.website}>
                <Accordion.Control onClick={() => toggleAccordion('basic', 'website')}>
                  Functional Website
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    No customer wants to go back and forth over email… Get a website that turns
                    leads into text conversations
                  </Text>
                  <List>
                    <List.Item>
                      Website chat that creates text conversations and instant sms confirmations
                      sent to your leads on autopilot
                    </List.Item>
                    <List.Item>
                      Quote forms with automated text confirmations to your phone and your customers
                      phone creating a SMS conversation with your lead
                    </List.Item>
                    <List.Item>Hyperlinked phone numbers </List.Item>
                    <List.Item>
                      Website fully optimized to create text conversations. Everything gets sent to
                      you over text, never email.
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="mctb" ref={basicRefs.mctb}>
                <Accordion.Control onClick={() => toggleAccordion('basic', 'mctb')}>
                  Missed Call Text Back
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    It’s not rocket science… getting back to customers right away is going to make
                    you more money.
                  </Text>
                  <List>
                    <List.Item>
                      Responding within an hour makes you 7 times more likely to qualify a lead
                    </List.Item>
                    <List.Item>
                      67% of customers will go to a competitor if they don’t receive a quick
                      response to their missed call
                    </List.Item>
                    <List.Item>
                      67% of customers will go to a competitor if they don’t receive a quick
                      response to their missed call
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="hosting" ref={basicRefs.hosting}>
                <Accordion.Control onClick={() => toggleAccordion('basic', 'hosting')}>
                  Web Hosting & Security
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Don’t be an idiot… you don’t want your website to be slow, and definitely don’t
                    want it to get hacked.
                  </Text>
                  <List>
                    <List.Item>SSL certificate </List.Item>
                    <List.Item>Superhosting </List.Item>
                    <List.Item>Indexed for google SEO & Pagespeed </List.Item>
                    <List.Item>99.95% SLA </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="inbox" ref={basicRefs.inbox}>
                <Accordion.Control onClick={() => toggleAccordion('basic', 'inbox')}>
                  All In One Inbox
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    No offense mr contractor… most of you guys are notorious for not getting back to
                    people. Let’s not make it more difficult for you.
                  </Text>
                  <List>
                    <List.Item>
                      Use our 4 in 1 inbox to respond to all your messages in one place. (Instagram,
                      Facebook, Email & SMS)
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="repmanage" ref={basicRefs.repmanage}>
                <Accordion.Control onClick={() => toggleAccordion('basic', 'repmanage')}>
                  Reputation Management
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Are you going to see what other contractors have to say about stone systems
                    before you decide to work with us?? - yes you are and you can bet that it’s the
                    same for your business
                  </Text>
                  <List>
                    <List.Item>97% of people read a review before they choose a business</List.Item>
                    <List.Item>72% of people use google reviews to find a business</List.Item>
                    <List.Item>We’ll show & update your best reviews on your website</List.Item>
                    <List.Item>We’ll keep negative reviews off your website </List.Item>
                    <List.Item>We’ll respond to all your google reviews for you</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="updates" ref={basicRefs.updates}>
                <Accordion.Control onClick={() => toggleAccordion('basic', 'updates')}>
                  Automatic Website Updates
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    You don’t wanna be doing your own website maintenance… For the love of god just
                    send us the pictures and let us take care of it.
                  </Text>
                  <List>
                    <List.Item>Unlimited content updates </List.Item>
                    <List.Item>Monthly website maintenance </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Accordion value={openAdvanced} onChange={() => setOpenAdvanced} variant="separated">
              <Accordion.Item value="everything1">
                <Accordion.Control>Everything From Contractor Basic</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Contractor Advanced also includes everything from Contractor Basic
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="websiteseo" ref={advancedRefs.websiteseo}>
                <Accordion.Control onClick={() => toggleAccordion('advanced', 'websiteseo')}>
                  Full Website SEO Optimizations
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Okay, let’s see how much we can confuse you… Some nerdy tech mumbo jumbo with a
                    bunch of buzzwords but it’s actually super important.
                  </Text>
                  <List>
                    <List.Item>Keyword research </List.Item>
                    <List.Item>Optimizing all content for keywords </List.Item>
                    <List.Item>Adding alt tags & json schema </List.Item>
                    <List.Item>Optimizing images & pagespeed </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="leadconf" ref={advancedRefs.leadconf}>
                <Accordion.Control onClick={() => toggleAccordion('advanced', 'leadconf')}>
                  Automated SMS Lead Follow Up
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Once again, it’s not rocket science… it’s going to make you more money and make
                    you look more professiona
                  </Text>
                  <List>
                    <List.Item>Instant SMS confirmations sent to all website leads.</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="reviews" ref={advancedRefs.reviews}>
                <Accordion.Control onClick={() => toggleAccordion('advanced', 'reviews')}>
                  5-Star Magic Funnel
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Okay… It’s not magic but it comes pretty close, and it’s automated
                  </Text>
                  <List>
                    <List.Item>
                      We’ll prevent any bad reviews from being published on any of your public pages
                    </List.Item>
                    <List.Item>
                      Automatically follow up with customers until they leave you a review (we
                      promise not to harass them with more than 4 reminders)
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="marketing" ref={advancedRefs.marketing}>
                <Accordion.Control onClick={() => toggleAccordion('advanced', 'marketing')}>
                  Marketing Campaigns
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    You know it, and we know it… The best customers are referrals and return
                    customers. Let’s get you both
                  </Text>
                  <List>
                    <List.Item>
                      “sounds complicated...” We set it all up and all you have to do is click a
                      button. If you can’t do that we might have a problem
                    </List.Item>
                    <List.Item>
                      We'll design marketing campaigns to automatically send discount offers to your
                      past customers and request referrals at the same time
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="chat" ref={advancedRefs.chat}>
                <Accordion.Control onClick={() => toggleAccordion('advanced', 'chat')}>
                  Live Website Chat
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Don’t leave your leads hanging… Let them text you directly from your website and
                    get back them them instantly on autopilot
                  </Text>
                  <List>
                    <List.Item>Turn a website lead into a text conversation </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="blogs" ref={advancedRefs.blogs}>
                <Accordion.Control onClick={() => toggleAccordion('advanced', 'blogs')}>
                  Blog Posts
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Let’s be honest, nobody reads these… They’re good for SEO though and make you
                    rank higher on google
                  </Text>
                  <List>
                    <List.Item>
                      We create meaningful blog posts on your website to give visitors something to
                      read
                    </List.Item>
                    <List.Item>
                      Blog posts are packed with keywords and fully SEO optimized to make you rank
                      higher on google
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Accordion value={openSupreme} onChange={() => setOpenSupreme} variant="separated">
              <Accordion.Item value="everything2">
                <Accordion.Control>Everything From Contractor Advanced</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Contractor Supreme also includes everything from Contractor Basic and Contractor
                    Advanced
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="gmb" ref={supremeRefs.gmb}>
                <Accordion.Control onClick={() => toggleAccordion('supreme', 'gmb')}>
                  GMB Posts
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    You can never do too much marketing… We’ll keep your Google page active so
                    people don’t ignore you
                  </Text>
                  <List>
                    <List.Item>
                      We create meaningful GMB posts on your google page to give incentives to click
                      on your page
                    </List.Item>
                    <List.Item>
                      GMB posts are packed with keywords and fully SEO optimized to make you rank
                      higher on google
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="shotgun" ref={supremeRefs.shotgun}>
                <Accordion.Control onClick={() => toggleAccordion('supreme', 'shotgun')}>
                  Shotgun SEO
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    No customer wants to go back and forth over email… Get a website that turns
                    leads into text conversations
                  </Text>
                  <List>
                    <List.Item>
                      Website chat that creates text conversations and instant sms confirmations
                      sent to your leads on autopilot
                    </List.Item>
                    <List.Item>
                      Quote forms with automated text confirmations to your phone and your customers
                      phone creating a SMS conversation with your lead
                    </List.Item>
                    <List.Item>Hyperlinked phone numbers </List.Item>
                    <List.Item>
                      Website fully optimized to create text conversations. Everything gets sent to
                      you over text, never email.
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="voicesearch" ref={supremeRefs.voicesearch}>
                <Accordion.Control onClick={() => toggleAccordion('supreme', 'voicesearch')}>
                  Voicesearch (Siri + Alexa)
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    No customer wants to go back and forth over email… Get a website that turns
                    leads into text conversations
                  </Text>
                  <List>
                    <List.Item>
                      Website chat that creates text conversations and instant sms confirmations
                      sent to your leads on autopilot
                    </List.Item>
                    <List.Item>
                      Quote forms with automated text confirmations to your phone and your customers
                      phone creating a SMS conversation with your lead
                    </List.Item>
                    <List.Item>Hyperlinked phone numbers </List.Item>
                    <List.Item>
                      Website fully optimized to create text conversations. Everything gets sent to
                      you over text, never email.
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="info" ref={supremeRefs.info}>
                <Accordion.Control onClick={() => toggleAccordion('supreme', 'info')}>
                  Business Info Synchronization
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    No customer wants to go back and forth over email… Get a website that turns
                    leads into text conversations
                  </Text>
                  <List>
                    <List.Item>
                      Website chat that creates text conversations and instant sms confirmations
                      sent to your leads on autopilot
                    </List.Item>
                    <List.Item>
                      Quote forms with automated text confirmations to your phone and your customers
                      phone creating a SMS conversation with your lead
                    </List.Item>
                    <List.Item>Hyperlinked phone numbers </List.Item>
                    <List.Item>
                      Website fully optimized to create text conversations. Everything gets sent to
                      you over text, never email.
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="qr" ref={supremeRefs.qr}>
                <Accordion.Control onClick={() => toggleAccordion('supreme', 'qr')}>
                  Custom QR Codes
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    No customer wants to go back and forth over email… Get a website that turns
                    leads into text conversations
                  </Text>
                  <List>
                    <List.Item>
                      Website chat that creates text conversations and instant sms confirmations
                      sent to your leads on autopilot
                    </List.Item>
                    <List.Item>
                      Quote forms with automated text confirmations to your phone and your customers
                      phone creating a SMS conversation with your lead
                    </List.Item>
                    <List.Item>Hyperlinked phone numbers </List.Item>
                    <List.Item>
                      Website fully optimized to create text conversations. Everything gets sent to
                      you over text, never email.
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};
