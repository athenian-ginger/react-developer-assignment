import { Center, Group, Text, Title } from "@mantine/core";
import { useAppSelector } from "../../store/hooks";

const FilmsDetails = () => {
  const selectedFilm = useAppSelector((state) => state.films.selectedFilm);

  return (
    <aside>
      <Center>
        {selectedFilm ? (
          <Group>
            <Title py="xs">{selectedFilm.title}</Title>
            <Text py="xs">{selectedFilm.opening_crawl}</Text>
            <Text py="xs">Directed by: {selectedFilm.director}</Text>
          </Group>
        ) : (
          <Text weight="bold">No movie selected</Text>
        )}
      </Center>
    </aside>
  );
};

export default FilmsDetails;
