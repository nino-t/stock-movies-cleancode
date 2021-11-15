interface Result {
  title: string
  clickHandler: () => void
}

export interface BitAutocompleteSearchingProps {
  results: Result[]
}