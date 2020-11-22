import { Request, Response } from "express";

import Tool from "../models/Tools";

class ToolConstroller {
    async index(request: Request, response: Response) {
        const { tag } = request.query;

        let params = {};

        if (tag) {
            params = {
                tags: { $regex: tag, $options: "i" },
            };
        }

        const tools = await Tool.find(params).select("-__v -createdAt");

        return response.status(200).json(tools);
    }

    async store(request: Request, response: Response) {
        const toolExist = await Tool.findOne({ title: request.body.title });

        if (toolExist) {
            return response
                .status(400)
                .json({ message: "Tool already exist." });
        }

        const tool = await Tool.create(request.body);

        return response.status(201).json(tool);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;

        const tool = await Tool.findByIdAndUpdate(id, request.body);

        if (!tool) {
            return response
                .status(400)
                .json({ message: "This tool does not exist" });
        }

        return response.status(200).json(tool);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const tool = await Tool.findByIdAndDelete(id);

        if (!tool) {
            return response
                .status(400)
                .json({ message: "This tool does not exist" });
        }

        return response.status(204).send();
    }
}

export default new ToolConstroller();
