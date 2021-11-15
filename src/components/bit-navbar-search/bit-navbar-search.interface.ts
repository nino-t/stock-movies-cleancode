import React from 'react';

export interface BitNavbarSearchProps {
  ref: React.Ref<HTMLFormElement>
  value: string
  placeholder: string
  handleSearch: (keyword: string) => void,
  autoCompleteComponent?: React.ReactNode
  autoCompleteHandler?: (keyword: string) => void
}