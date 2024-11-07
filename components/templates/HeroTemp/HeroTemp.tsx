import React from 'react';

import { Heading, HeroWrapper, SubHeading } from '@project/components/atoms';
import { SearchForm } from '@project/components/molecules';

export type HeroPlaceholderType = {
  heading: string;
  subHeading: string;
};

export type HeroTempProps = {
  className?: string;
  query?: string;
  placeholder: HeroPlaceholderType;
};

const HeroTemp: React.FC<HeroTempProps> = ({
  className,
  placeholder,
  query,
}) => {
  return (
    <HeroWrapper className={`${className || ''}`}>
      <Heading>{placeholder.heading}</Heading>
      <SubHeading>{placeholder.subHeading}</SubHeading>
      <SearchForm query={query} />
    </HeroWrapper>
  );
};

export default HeroTemp;
