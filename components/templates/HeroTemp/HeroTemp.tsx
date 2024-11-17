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
  subHeading?: string;
  tag?: string;
};

export type HeroTempProps = {
  className?: string;
  query?: string;
  placeholder: HeroPlaceholderType;
  showTag?: boolean;
  showSubHeading?: boolean;
  showSearchForm?: boolean;
};

const HeroTemp: React.FC<HeroTempProps> = ({
  className,
  placeholder,
  query,
  showTag = false,
  showSubHeading = false,
  showSearchForm,
}) => {
  return (
    <HeroWrapper className={`${className || ''}`}>
      {showTag && <Tag>{placeholder.tag}</Tag>}

      <Heading>{placeholder.heading}</Heading>

      {showSubHeading && <SubHeading>{placeholder.subHeading}</SubHeading>}

      {showSearchForm && <SearchForm query={query} />}
    </HeroWrapper>
  );
};

export default HeroTemp;
