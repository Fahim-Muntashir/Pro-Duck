import configPromise from "@/payload.config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    // @ts-ignore
    collection: "categories",
    depth: 1, //populate sub categories
    where: {
      parent: {
        exists: false,
      },
    },
  });

  console.log(data);

  return <div className="flex flex-col gap-y-4">\</div>;
}
