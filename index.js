const app = require("./src/server");
const { PORT } = require("./src/env")


app.listen(PORT, () => {
    console.log(`listening port ${PORT}`)
});
