import React from 'react';

import {
  Heading,
  HeroWrapper,
  SubHeading,
  Tag,
} from '@project/components/atoms';
import { SearchForm } from '@project/components/molecules';

export type HeroPlaceholderType = {
  heading: string;
  subHeading: string;
  tag?: string;
};

export type HeroTempProps = {
  className?: string;
  query?: string;
  placeholder: HeroPlaceholderType;
  showTag?: boolean;
  showSearchForm?: boolean;
};

const HeroTemp: React.FC<HeroTempProps> = ({
  className,
  placeholder,
  query,
  showTag = false,
  showSearchForm,
}) => {
  return (
    <HeroWrapper className={`${className || ''}`}>
      {showTag && <Tag>{placeholder.tag}</Tag>}
      <Heading>{placeholder.heading}</Heading>
      <SubHeading>{placeholder.subHeading}</SubHeading>
      {showSearchForm && <SearchForm query={query} />}
    </HeroWrapper>
  );
};

export default HeroTemp;
