// 1 - iniciar projeto
// console.log("Hello Express + TS");

// 2 - init express
import express, { NextFunction, Request, Response } from "express";

const app = express();

// 3 - rota com POST
app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

app.get("/", (req, res) => {
  return res.send("Hello Express!");
});

// 3 - rota com POST
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Produto cadastrado!");
});

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  if (req.method === "POST") {
    return res.send("Inseriu algo!");
  } else if (req.method === "GET") {
    return res.send("Leu algo!");
  }
});

// 5 - interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces!");
});

// 6 - enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 19.99,
    inStock: true,
  });
});

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const product = {
    id: 1,
    name: "Boné",
    price: 40.49,
  };

  return res.json(product);
});

// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} do produto ${productId}!`);
});

// 9 - router handle
app.get("/api/user/:id", getUser);

function getUser(req: Request, res: Response) {
  console.log(`Resgatando usuário com id: ${req.params.id}`);

  return res.send("O usuário foi encontrado!");
}

// 10 - middleware
function someMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir!");
    next();
  } else {
    console.log("Não pode seguir");
  }
}

app.get(
  "/api/user/:id/access",
  someMiddleware,
  (req: Request, res: Response, next: NextFunction) => {
    return res.json({ msg: "Bem-vindo a área administrativa!" });
  }
);

// 12 - req res generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: "string" }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

// 13 - tratando erros
app.get("/api/error", (req: Request, res: Response) => {
  try {
    throw new Error("Algo deu errado!");
  } catch (e: any) {
    res.statusCode = 500;

    res.status(500).json({ msg: e.message });
  }
});

app.listen(3000, () => {
  console.log("Aplicação TS + Express funcionando!");
});
