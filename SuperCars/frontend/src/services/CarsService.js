export async function CarsService(token) {
  const res = await fetch("http://localhost:8080/cars", {
    headers: {
      token: token,
    },
  });
  const documents = await res.json();
  return documents;
}
