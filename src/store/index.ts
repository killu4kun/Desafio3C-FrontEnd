import axios from 'axios';

import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export interface PokemonProps {
  name: string;
  url?: string;
}

export const fetchPokemons = createAsyncThunk<PokemonProps[]>(
  'pokemons/fetchPokemons',
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    return response.data.results;
  }
);

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [] as PokemonProps[],
    loading: false,
  },
  reducers: {
    favoritePokemon: (state, action: PayloadAction<PokemonProps>) => {
      state.pokemons.push(action.payload);
    },
    removeFavoritePokemon: (state, action) => {
      state.pokemons.splice(action.payload, 1);
    },
  },
  extraReducers: {
    [String(fetchPokemons.pending)]: (state) => {
      state.loading = true;
    },
    [String(fetchPokemons.fulfilled)]: (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
    },
    [String(fetchPokemons.rejected)]: (state) => {
      state.loading = false;
    },
  },
});

export const { favoritePokemon, removeFavoritePokemon } = pokemonsSlice.actions;

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
