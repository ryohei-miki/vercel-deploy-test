export default async function Hello() {
  const fetchHello = async () => {
    const response = await fetch('http://localhost:3001/api/hello');
    const data = await response;
    console.log(data);
  };
  await fetchHello();
  return <div>Hello</div>;
}
