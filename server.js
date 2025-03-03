const serveHandler = require('serve-handler');
const http = require('http');

const server = http.createServer((req, res) => {
  return serveHandler(req, res, {
    public: './' // Root katalogdan fayllarni xizmat qilish
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlamoqda`);
});