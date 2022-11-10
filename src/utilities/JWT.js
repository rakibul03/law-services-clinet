export const jwtToke = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch("https://services-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("access_token", data.token);
    });
};
