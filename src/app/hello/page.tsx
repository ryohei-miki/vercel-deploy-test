export default async function Hello() {
  try {
    const fetchHello = async () => {
      const response = await fetch(`${process.env.API_URL}/api/hello`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);

    };
    await fetchHello();
  } catch (error) {
    console.error(error);
  }
  return <div>Hello</div>;
}
