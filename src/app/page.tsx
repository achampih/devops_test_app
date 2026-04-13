type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  /* const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error(" process.env.NEXT_PUBLIC_API_URL, nihct gesetzt");
  } */

  //const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Daten");
  }
  const users: User[] = await res.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex  w-full max-w-3xl flex-col items-center justify-between gap-4 py-32 px-16 bg-white sm:items-start">
        <h1 className="text-2xl font-bold ">Mein Users</h1>
        <p>
          Umgebung: <strong>{process.env.NODE_ENV}</strong>
        </p>

        <ul className="flex items-start flex-col gap-2">
          {users.map((u) => (
            <li key={u.id} className="text-xl  text-slate-600">
              {u.id}. {u.name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
