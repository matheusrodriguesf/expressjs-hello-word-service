
const app = require('./app');

const port = 3000;
app.listen(port, () => {
    console.log(`Examplo de app escutando em http://localhost:${port}`);
});
