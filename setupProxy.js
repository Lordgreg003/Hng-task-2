// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       //   target: "http://localhost:3000",
//       //   target: "https://api.timbu.cloud",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "", // Remove /api prefix when forwarding
//       },
//       onProxyReq: (proxyReq, req, res) => {
//         // Add custom headers
//         proxyReq.setHeader(
//           "Access-Control-Allow-Origin"
//           //   "http://localhost:3000"
//           //   "http://localhost:3000"
//         );
//         proxyReq.setHeader("Access-Control-Allow-Credentials", "true");
//       },
//     })
//   );
// };
