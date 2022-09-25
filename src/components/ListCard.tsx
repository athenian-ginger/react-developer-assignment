import { Card, createStyles, SimpleGrid } from "@mantine/core";
import { Film } from "../data/data";

const useStyles = createStyles((theme, selectedFilm: Film | null) => ({
  card: {
    margin: `${theme.spacing.md}px 0`,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.colors.gray[1],
    },
  },
  selectedCard: {
    backgroundColor: selectedFilm ? theme.colors.blue[6] : "unset",
    color: selectedFilm ? "white" : "unset",
    "&:hover": {
      backgroundColor: theme.colors.blue[7],
    },
  },
}));

interface IListCard {
  selectedFilm: Film | null;
  film: Film;
}

const ListCard = ({ selectedFilm, film }: IListCard) => {
  const { classes, cx } = useStyles(selectedFilm);

  return (
    <Card
      withBorder
      className={cx(classes.card, {
        [classes.selectedCard]: selectedFilm?.episode_id === film.episode_id,
      })}
    >
      <SimpleGrid cols={3}>
        <div>{`EPISODE ${film.episode_id}`}</div>
        <div>{film.title}</div>
        <div>{film.release_date}</div>
      </SimpleGrid>
    </Card>
  );
};

export default ListCard;
