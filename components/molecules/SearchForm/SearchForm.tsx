import React from 'react';
import Form from 'next/form';

import { Search } from 'lucide-react';

import { Button, ResetSearchFormButton } from '@project/components/atoms';

export type SearchFormProps = {
  className?: string;
  query?: string;
};

const SearchForm: React.FC<SearchFormProps> = ({ className, query }) => {
  return (
    <Form
      className={`search-form ${className || ''}`}
      action="/"
      scroll={false}
    >
      <input
        className="search-input"
        name="query"
        defaultValue={query}
        placeholder="Search Startups ..."
      />

      {query && <ResetSearchFormButton query={query} />}

      <Button
        className="rounded-full"
        type="submit"
        size="icon"
        name="search-button"
      >
        <Search className="size-5" />
      </Button>
    </Form>
  );
};

export default SearchForm;
