import { createStyles, Grid, Select, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { ChangeEvent } from "react";
import { SortBy, Status } from "../../data/data";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { searchFilms, sortFilms } from "./filmsSlice";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.gray[1],
    padding: theme.spacing.md,
  },
}));

const FilmsHeader = () => {
  const { classes } = useStyles();

  const isDisabled =
    useAppSelector((state) => state.films.status) === Status.loading;

  const { searchTerm, sortTerm } = useAppSelector((state) => state.films);

  const dispatch = useAppDispatch();

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(searchFilms(e.target.value));

  const sortHandler = (e: SortBy | null) => dispatch(sortFilms(e));

  return (
    <header className={classes.header}>
      <Grid>
        <Grid.Col lg={2} md={12}>
          <Select
            disabled={isDisabled}
            clearable
            label="Sort films"
            placeholder="Sort by..."
            data={[SortBy.episode, SortBy.year]}
            onChange={sortHandler}
            value={sortTerm}
          />
        </Grid.Col>
        <Grid.Col lg={10} md={12}>
          <TextInput
            disabled={isDisabled}
            icon={<IconSearch />}
            label="Search films"
            placeholder="Type to search..."
            onChange={searchHandler}
            value={searchTerm}
          />
        </Grid.Col>
      </Grid>
    </header>
  );
};

export default FilmsHeader;
