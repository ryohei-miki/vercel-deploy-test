export default async function Hello() {
  try {
    const fetchHello = async () => {
      const response = await fetch(
        `${process.env.BASE_API_URL}/forecast?q=Tokyo&APPID=${process.env.API_KEY}&units=metric&lang=ja`
      );
      console.log(response);
    };
    await fetchHello();
  } catch (error) {
    console.error(error);
  }
  return <div>Hello</div>;
}
