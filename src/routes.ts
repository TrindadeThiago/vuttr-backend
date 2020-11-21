import { Router } from "express";

import ToolController from "./app/controllers/ToolController";

const routes = Router();

routes.get("/tools", ToolController.index);
routes.post("/tools", ToolController.store);
routes.put("/tools/:_id", ToolController.update);
routes.delete("/tools/:_id", ToolController.delete);

export default routes;
