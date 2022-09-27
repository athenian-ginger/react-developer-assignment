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

export const testData: Film[] = [
  {
    title: "Pulp Fiction",
    episode_id: 1,
    release_date: "1994",
    opening_crawl:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
  },
  {
    title: "Inception",
    episode_id: 2,
    release_date: "2010",
    opening_crawl:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    director: "Christopher Nolan",
  },
];
