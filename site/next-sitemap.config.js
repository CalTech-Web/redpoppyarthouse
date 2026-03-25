/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.redpoppyarthouse.org",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
