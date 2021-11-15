export interface BitInfiniteScrollPaginationProps {
  isLoading: boolean
  total: number
  totalInResponse: number
  page: number
  loadMoreHandler: (page: number) => void
  children: React.ReactNode
}