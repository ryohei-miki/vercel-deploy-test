export default async function Hello() {
  const fetchHello = async () => {
    const response = await fetch(`${process.env.API_URL}/api/hello`);
    const data = await response;
    console.log(data);
  };
  await fetchHello();
  return <div>Hello</div>;
}
