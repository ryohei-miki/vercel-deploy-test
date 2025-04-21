"use server"

export const TestFetch = async () => {
  const res = await fetch(
    `${process.env.API_URL ?? 'http://localhost:3000'}/api/hello`,
  )

  if (!res.ok) {
    throw new Error(`failed, status ${res.status}`)
  }

  /** @type {{ message: string; name: string }} */
  const data = await res.json()

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.message}</div>
    </div>
  );
};
