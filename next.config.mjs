// next.config.mjs
const nextConfig = {
    reactStrictMode: true, // or any other configurations you need
    env: {
      NEXT_PUBLIC_MAIN_API_DOMAIN: "https://khas-dayan.app.erxes.io/gateway",
      NEXT_PUBLIC_ERXES_APP_TOKEN:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6Imhhc3VkYXluIiwiY3JlYXRlZEF0IjoiMjAyNC0xMC0xNVQwNjo1MDozOC45OTNaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDI0LTExLTE0VDA5OjM5OjQyLjIyNloiLCJub0V4cGlyZSI6ZmFsc2UsImFsbG93QWxsUGVybWlzc2lvbiI6dHJ1ZSwiX2lkIjoiMmpOWnd4d1FCOGg0N1BISGc5RFNzIiwiX192IjowfSwiaWF0IjoxNzI4OTg1MjAwLCJleHAiOjM0NjA1NjIzODJ9.M8uHEeUYuIlbTqoOA1Dt3vFrZoLvdNT1DCd_YdRpm08",
    },
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**'
        }
      ]
    }
  }
  
  export default nextConfig;
  