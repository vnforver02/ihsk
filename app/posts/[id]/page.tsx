export default async function PostDetail({ params }: { params: { id: string } }) {
  const PB = process.env.NEXT_PUBLIC_PB_URL!;
  const res = await fetch(
    `${PB}/api/collections/posts/records/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return <div>内容不存在</div>;

  const post = await res.json();

  return (
    <div style={{ padding: 24 }}>
      <h1>{post.title}</h1>
      <div style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
        {post.content}
      </div>
    </div>
  );
}