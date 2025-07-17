import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";
import configPromise from "@/payload.config";
import { getPayload } from "payload";

interface Props {
  children?: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    // @ts-ignore
    collection: "categories",
    depth: 1, //populate sub categories
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    // @ts-ignore
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      ...doc,
      subcategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
