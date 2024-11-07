import React from 'react';

import { Heading, HeroWrapper, SubHeading } from '@project/components/atoms';

export type HeroPlaceholderType = {
  heading: string;
  subHeading: string;
};

export type HeroTempProps = {
  className?: string;
  placeholder: HeroPlaceholderType;
};

const HeroTemp: React.FC<HeroTempProps> = ({ className, placeholder }) => {
  return (
    <HeroWrapper className={`${className || ''}`}>
      <Heading>{placeholder.heading}</Heading>
      <SubHeading>{placeholder.subHeading}</SubHeading>
    </HeroWrapper>
  );
};

export default HeroTemp;
