import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type PostProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata(props: PostProps): Promise<Metadata> {
  const { params } = props;
  const post = await getData(params.id);
  return {
    title: post.title,
  };
}

export default async function Post(props: PostProps) {
  const { params } = props;

  const post = await getData(params.id);

  return (
    <div>
      <h2 className="font-black">Blog page{params.id}</h2>
      <p>Text: {post.body}</p>
    </div>
  );
}
