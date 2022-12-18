export async function login(user, password) {
  console.log(user);
  console.log(password);
  const res = await fetch("http://localhost:8080/login/", {
    headers: {
      user: user,
      password: password,
    },
  });

  if (res.ok) {
    const document = await res.json();
    return document.token;
  } else {
    console.log("no autorizado");
    return null;
  }
}
