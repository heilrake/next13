import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error("Unable to fetch posts");

  return response.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h2 className="font-black">Blog page</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link className="underline text-sky-400" href={`/blog/${post.id}`}>
              {post.title}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
