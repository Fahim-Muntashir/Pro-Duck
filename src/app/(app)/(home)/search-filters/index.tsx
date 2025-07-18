import { Categories } from "./categories";
import { SearchInput } from "./search-input";

interface Props {
  data: any;
}

export const SearchFilters = ({ data }: Props) => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput></SearchInput>
      <Categories data={data}></Categories>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
};
