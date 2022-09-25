import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film, SortBy, Status, URL } from "../../data/data";
import { sortFilmsByTerm } from "../../utils/sort";

interface FilmsState {
  status: Status;
  fetchedFilms: Film[];
  editedFilms: Film[];
  searchTerm: string;
  sortTerm: SortBy | null;
  selectedFilm: Film | null;
}

const initialState: FilmsState = {
  status: Status.loading,
  fetchedFilms: [],
  editedFilms: [],
  searchTerm: "",
  sortTerm: null,
  selectedFilm: null,
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    searchFilms(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      const filteredFilms = state.fetchedFilms.filter((film) =>
        film.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.editedFilms = sortFilmsByTerm(filteredFilms, state.sortTerm);
    },
    sortFilms(state, action: PayloadAction<SortBy | null>) {
      state.sortTerm = action.payload;
      state.editedFilms = sortFilmsByTerm(state.editedFilms, action.payload);
    },
    selectFilm(state, action: PayloadAction<number>) {
      if (state.selectedFilm?.episode_id === action.payload) {
        state.selectedFilm = null;
        return;
      }
      state.selectedFilm =
        state.editedFilms.find((film) => film.episode_id === action.payload) ??
        null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.status = Status.loaded;
      state.fetchedFilms = action.payload;
      state.editedFilms = action.payload;
    });
  },
});

export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await fetch(URL).then((data) => data.json());
  return response.results as Film[];
});

export const { searchFilms, sortFilms, selectFilm } = filmsSlice.actions;

export default filmsSlice.reducer;
