import { Film, SortBy } from "../data/data";

export function sortFilmsByTerm(
  films: Film[],
  sortTerm: SortBy | null
): Film[] {
  switch (sortTerm) {
    case SortBy.episode:
      return films.sort((filmA, filmB) => filmA.episode_id - filmB.episode_id);
    case SortBy.year:
      return films.sort((filmA, filmB) =>
        filmB.release_date.localeCompare(filmA.release_date)
      );
    default:
      return films.sort((filmA, filmB) =>
        filmA.release_date.localeCompare(filmB.release_date)
      );
  }
}
