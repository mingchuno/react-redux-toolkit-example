import type { EntityState } from "@reduxjs/toolkit"

export interface Quote {
  id: number
  quote: string
  author: string
}

export interface QuotesApiResponse {
  quotes: Quote[]
  total: number
  skip: number
  limit: number
}

export type QuoteEntity = EntityState<Quote, number>