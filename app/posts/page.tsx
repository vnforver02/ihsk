export default async function PostsPage() {
  const PB = process.env.NEXT_PUBLIC_PB_URL!;
  const res = await fetch(
    `${PB}/api/collections/posts/records?perPage=50&sort=-created`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <div style={{ padding: 24 }}>
      <h2>内容列表</h2>
      <ul>
        {data.items?.map((it: any) => (
          <li key={it.id}>
            <a href={`/posts/${it.id}`}>
              {it.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}