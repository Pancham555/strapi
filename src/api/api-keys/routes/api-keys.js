module.exports = {
  routes: [
    {
      method: "POST",
      path: "/api-keys",
      handler: "api-keys.exposeApiKeys",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
