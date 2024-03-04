import { useMemo } from "react";
import { quotesAdapter } from "./quotesEntityAdapter";
import { quotesApiSlice } from "./quotesApiSlice";
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { QuoteEntity } from "./quoteTypes";

const initialState = quotesAdapter.getInitialState()

export function useSelectAllQuotes(numberOfQuotes: number) {
  const select = useMemo(() => {
    const selectQuotesCacheEntry = quotesApiSlice.endpoints.getQuotes?.select(numberOfQuotes)
    return {
      selectAll: createSelector(
        (state: RootState) => selectQuotesCacheEntry(state)?.data ?? initialState,
        (cacheData: QuoteEntity) => quotesAdapter.getSelectors().selectAll(cacheData),
      ),
      selectById: (id: number) => createSelector(
        (state: RootState) => selectQuotesCacheEntry(state)?.data ?? initialState,
        (cacheData: QuoteEntity) => quotesAdapter.getSelectors().selectById(cacheData, id)
      ),
    }
  }, [numberOfQuotes]);
  return select
};