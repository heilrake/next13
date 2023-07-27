// Components
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";

export const metaData = {
  title: Blog,
};

export default async function Blog() {
  return (
    <>
      <h2 className="font-black">Blog page</h2>
      <PostSearch />
      <Posts />
    </>
  );
}
