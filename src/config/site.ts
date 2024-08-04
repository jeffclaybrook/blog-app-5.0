type SiteProps = {
 name: string
 description: string
 url: string
 ogImage: string
 links: {
  github: string
  portfolio: string
  linkedin: string
  youtube: string
 }
}

export const siteConfig: SiteProps = {
 name: "Jeff's Blog",
 description: "A blog created using NextJS 14, Prisma, PostgresSQL, and Shadcn-ui",
 url: "",
 ogImage: "",
 links: {
  github: "https://github.com/jeffclaybrook",
  portfolio: "https://jeffclaybrook.com/",
  linkedin: "https://linkedin.com/in/jeff-claybrook",
  youtube: "https://youtube.com/@jeffreyclaybrook"
 }
}