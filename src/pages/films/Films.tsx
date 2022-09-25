import FilmsList from "./FilmsList";
import FilmsHeader from "./FilmsHeader";
import FilmsDetails from "./FilmsDetails";
import { Grid } from "@mantine/core";

const Films = () => {
  return (
    <>
      <FilmsHeader />
      <Grid align="center" px="xs" m={0}>
        <Grid.Col lg={6} md={12}>
          <FilmsList />
        </Grid.Col>
        <Grid.Col lg={6} md={12}>
          <FilmsDetails />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Films;
