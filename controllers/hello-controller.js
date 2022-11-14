const HelloController = (app) => {
  app.get("/hello", (req, res) => {
    res.send("hello world");
  });

  app.get("/goodbye", (req, res) => {
    res.send("life is good");
  });

  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  });
};

export default HelloController;
