declare interface Project {
  id: string
  name: string
  path: string
  description?: string
  stack: "vanilla" // Upcoming: "react" | "vue" | "angular" | "svelte" | "gatsby" | "next" | "nuxt"
  language: "javascript" // Upcoming: "typescript"
  physics: "cannon" // Upcoming: "p2" | "box2d" | "matter" | "ammo" | "oimo" | "planck" | "impact" | "rex"
  apiKeys: APIKeys
  isTemplate: boolean
  template: number
  modules: string[] | null
}
