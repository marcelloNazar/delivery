import Route from "@ioc:Adonis/Core/Route";

// Login para os 3 tippos de user
Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout");

Route.post("/cliente/cadastro", "ClientesController.store");

Route.get("/cidades", "CidadesController.index");
Route.get(
  "/cidades/:id/estabelecimentos",
  "CidadesController.Estabelecimentos"
);

Route.group(() => {
  Route.get("auth/me", "AuthController.me");

  Route.resource("/enderecos", "EnderecosController").only([
    "store",
    "index",
    "update",
    "destroy",
  ]);

  Route.put("/cliente", "ClientesController.update");
}).middleware("auth");

Route.get("/", async () => {
  return {
    hortifruti: "prático",
  };
});
