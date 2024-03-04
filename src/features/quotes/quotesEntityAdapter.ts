import { createEntityAdapter } from "@reduxjs/toolkit";
import type { Quote } from "./quoteTypes";

export const quotesAdapter = createEntityAdapter<Quote>()

export const quotesInitialState = quotesAdapter.getInitialState()