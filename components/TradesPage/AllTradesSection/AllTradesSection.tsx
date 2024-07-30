'use client';

import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, useMantineTheme, Container, Image, SimpleGrid } from '@mantine/core';
import classes from './AllTradesSection.module.css';

interface CardProps {
  tradeName: string;
}

function Card({ tradeName }: CardProps) {
  return (
    <div className={classes.allTrades}>
      {' '}
      <Image
        width={30}
        height={30}
        src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61cf37d203a8ee012aadcd94_no_gray.png"
        alt="No"
      />
      <Text className={classes.tradeName}>{tradeName}</Text>
    </div>
  );
}

const data = [
  {
    tradeName: 'Additions & Remodeling',
  },
  {
    tradeName: 'Air Conditioning    ',
  },
  {
    tradeName: 'Appliances',
  },
  {
    tradeName: 'Appraiser',
  },
  {
    tradeName: 'Architects & Engineers    ',
  },
  {
    tradeName: 'Art & Mirror Mounting ',
  },
  {
    tradeName: 'Audio/Visual & Computers',
  },
  {
    tradeName: 'Awnings',
  },
  {
    tradeName: 'Brick & Stone    ',
  },
  {
    tradeName: 'Cabinets    ',
  },
  {
    tradeName: 'Carpenters',
  },
  {
    tradeName: 'Carpet & Upholstery Cleaning    ',
  },
  {
    tradeName: 'Ceilings',
  },
  {
    tradeName: 'Central Vacuum    ',
  },
  {
    tradeName: 'Cleaning & Maid Services    ',
  },
  {
    tradeName: 'Commercial Contractors',
  },
  {
    tradeName: 'Concrete',
  },
  {
    tradeName: 'Construction',
  },
  {
    tradeName: 'Countertops',
  },
  {
    tradeName: 'Decks',
  },
  {
    tradeName: 'Demolition Service    ',
  },
  {
    tradeName: 'Designers & Decorators    ',
  },
  {
    tradeName: 'Disability Services    ',
  },
  {
    tradeName: 'Disaster Recovery Services    ',
  },
  {
    tradeName: 'Docks',
  },
  {
    tradeName: 'Doors  ',
  },
  {
    tradeName: 'Drywall & Plaster',
  },
  {
    tradeName: 'Electrical',
  },
  {
    tradeName: 'Excavation   ',
  },
  {
    tradeName: 'Fans',
  },
  {
    tradeName: 'Fences',
  },
  {
    tradeName: 'Fireplace & Wood Stoves    ',
  },
  {
    tradeName: 'Sports Equipment Assembly    ',
  },
  {
    tradeName: 'Flooring & Carpet    ',
  },
  {
    tradeName: 'Foundations',
  },
  {
    tradeName: 'Fountains & Ponds    ',
  },
  {
    tradeName: 'Furniture Assembly    ',
  },
  {
    tradeName: 'Furniture Repair & Refinish    ',
  },
  {
    tradeName: 'Garage & Garage Doors    ',
  },
  {
    tradeName: 'General Contractors',
  },
  {
    tradeName: 'Glass & Mirrors    ',
  },
  {
    tradeName: 'Gutters',
  },
  {
    tradeName: 'Handyman Services',
  },
  {
    tradeName: 'Heating & Furnace Systems',
  },
  {
    tradeName: 'Home Inspection    ',
  },
  {
    tradeName: 'Home Maintenance    ',
  },
  {
    tradeName: 'Home Services   ',
  },
  {
    tradeName: 'Hot Tubs, Spas & Saunas   ',
  },
  {
    tradeName: 'Household Help',
  },
  {
    tradeName: 'HVAC    ',
  },
  {
    tradeName: 'Insulation',
  },
  {
    tradeName: 'Landscaping',
  },
  {
    tradeName: 'Lawn & Garden Care    ',
  },
  {
    tradeName: 'Lifting & Moving Heavy Items',
  },
  {
    tradeName: 'Locksmith',
  },
  {
    tradeName: 'Metal Fabrication',
  },
  {
    tradeName: 'Mold & Asbestos Services  ',
  },
  {
    tradeName: 'Moving  ',
  },
  {
    tradeName: 'New Home Builders',
  },
  {
    tradeName: 'Organizers    ',
  },
  {
    tradeName: 'Outdoor Playgrounds',
  },
  {
    tradeName: 'Packing & Unpacking Services   ',
  },
  {
    tradeName: 'Painting  ',
  },
  {
    tradeName: 'Paving',
  },
  {
    tradeName: 'Permit Services',
  },
  {
    tradeName: 'Pest Control',
  },
  {
    tradeName: 'Plumbing',
  },
  {
    tradeName: 'Powdercoating',
  },
  {
    tradeName: 'Remodeling',
  },
  {
    tradeName: 'Roofing  ',
  },
  {
    tradeName: 'Sandblasting Service  ',
  },
  {
    tradeName: 'Septic Tanks & Wells  ',
  },
  {
    tradeName: 'Sheds & Enclosures',
  },
  {
    tradeName: 'Siding ',
  },
  {
    tradeName: 'Sign Making Service',
  },
  {
    tradeName: 'Skylights',
  },
  {
    tradeName: 'Snow Removal Service',
  },
  {
    tradeName: 'Solar',
  },
  {
    tradeName: 'Stained Glass',
  },
  {
    tradeName: 'Swimming Pools    ',
  },
  {
    tradeName: 'Tennis or Game Court   ',
  },
  {
    tradeName: 'Tile  ',
  },
  {
    tradeName: 'Tree Service',
  },
  {
    tradeName: 'Wall Coverings   ',
  },
  {
    tradeName: 'Waste Material Removal  ',
  },
  {
    tradeName: 'Water Treatment System  ',
  },
  {
    tradeName: 'Waterproofing   ',
  },
  {
    tradeName: 'Window Coverings',
  },
  {
    tradeName: 'Windows   ',
  },
  {
    tradeName: 'Yard & Garden Work',
  },
];

export function AllTradesSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => <Card {...item} />);

  return (
    <>
      <Title className={classes.mainTitle}>All Trades by Category</Title>
      <Container size="lg">
        <SimpleGrid cols={4}>{slides}</SimpleGrid>
      </Container>
    </>
  );
}
