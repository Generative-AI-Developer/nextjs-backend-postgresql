import Main from "./Main";
async function getData() {
  const fetchData = await fetch(
    "http://localhost:3000/api/crud-operation",
    // This object used for page refresh in Next js
    {
      next: {
        tags: ["refresh"], // I used refresh it can be any text.
      },
    }
  );
  const res = await fetchData.json();
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <main className="flex flex-col min-h-screen items-center p-24 ">
        <h1>PostgreSQL with Drizzle Query</h1>
        <Main data={data} />
      </main>
    </>
  );
}
