import mongoose from "mongoose";

mongoose.connect("mongodb://vuttr_db:27017/vuttr", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
