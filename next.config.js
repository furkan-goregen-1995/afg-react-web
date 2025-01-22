module.exports = {
  async rewrites() {
      return [
          {
              source: "/api/:path*", // Frontend çağrısı
              destination: "http://manager.afg-react-web.com.tr/:path*", // Backend (HTTP)
          },
      ];
  },
};