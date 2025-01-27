module.exports = {
  async rewrites() {
      return [
          {
              source: "/api/:path*", // Frontend çağrısı
              destination: "https://admin.afg-react-web.com.tr/:path*", // Backend (HTTP)
          },
      ];
  },
};