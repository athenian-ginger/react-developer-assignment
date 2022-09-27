import { Skeleton } from "@mantine/core";

const ListSkeleton = () => {
  return (
    <div data-testid="skeleton">
      <Skeleton height={60} my="md" />
      <Skeleton height={60} my="md" />
      <Skeleton height={60} my="md" />
      <Skeleton height={60} my="md" />
      <Skeleton height={60} my="md" />
      <Skeleton height={60} my="md" />
    </div>
  );
};

export default ListSkeleton;
