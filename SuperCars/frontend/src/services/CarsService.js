export async function CarsService(token) {
  const res = await fetch("http://localhost:8080/cars", {
    headers: {
      token: token,
    },
  });
  const documents = await res.json();
  return documents;
}

export async function DeleteCarService(placa) {
  const res = await fetch("http://localhost:8080/cars/" + placa, {
    method: "DELETE",
  });

  return res;
}
