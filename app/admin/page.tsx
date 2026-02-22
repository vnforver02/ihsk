export default function AdminPage() {
  return (
    <div style={{ padding: 24 }}>
      <h2>后台管理</h2>
      <a
        href={`${process.env.NEXT_PUBLIC_PB_URL}/_/`}
        target="_blank"
        rel="noreferrer"
        style={{ fontSize: 18 }}
      >
        打开 PocketBase 管理后台
      </a>
    </div>
  );
}