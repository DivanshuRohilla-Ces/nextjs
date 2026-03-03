import Userlist from "@/components/userList";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/users", { cache: "no-store" });
  const data = await res.json();
  console.log(data.users);
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <h1>Users list</h1>

          <Userlist users={data.users} />
      </div>
    </div>
  );
}
