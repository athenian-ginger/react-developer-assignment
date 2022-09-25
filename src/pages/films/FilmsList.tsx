import { List } from "@mantine/core";
import { useEffect } from "react";
import ListCard from "../../components/ListCard";
import ListSkeleton from "../../components/ListSkeleton";
import { Status } from "../../data/data";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFilms, selectFilm } from "./filmsSlice";

const FilmsList = () => {
  const { editedFilms, status, selectedFilm } = useAppSelector(
    (state) => state.films
  );

  const dispatch = useAppDispatch();

  const handleClick = (episodeId: number) => dispatch(selectFilm(episodeId));

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <main>
      {status === Status.loading ? (
        <ListSkeleton />
      ) : (
        <List listStyleType="none">
          {editedFilms.map((film) => (
            <List.Item
              key={film.episode_id}
              onClick={() => handleClick(film.episode_id)}
            >
              <ListCard selectedFilm={selectedFilm} film={film} />
            </List.Item>
          ))}
        </List>
      )}
    </main>
  );
};

export default FilmsList;
