import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/vuttr", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
