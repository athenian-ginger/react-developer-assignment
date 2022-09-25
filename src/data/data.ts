export const URL = "https://swapi.dev/api/films/";

export interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  opening_crawl: string;
  director: string;
}

export enum Status {
  loading,
  loaded,
}

export enum SortBy {
  episode = "Episode",
  year = "Year",
}
