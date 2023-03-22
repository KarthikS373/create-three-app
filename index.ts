#!/usr/bin/env node

import chalk from "chalk"

import { checkNewPackageUpdates } from "./src/utils"

const { blue } = chalk

console.log(
  blue(`    
        ████████╗██╗░░██╗██████╗░███████╗███████╗  ░░░░░██╗░██████╗
        ╚══██╔══╝██║░░██║██╔══██╗██╔════╝██╔════╝  ░░░░░██║██╔════╝
        ░░░██║░░░███████║██████╔╝█████╗░░█████╗░░  ░░░░░██║╚█████╗░
        ░░░██║░░░██╔══██║██╔══██╗██╔══╝░░██╔══╝░░  ██╗░░██║░╚═══██╗
        ░░░██║░░░██║░░██║██║░░██║███████╗███████╗  ╚█████╔╝██████╔  ╝
        ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚══════╝  ░╚════╝░╚═════╝░
                                 create-three-app
`)
)

console.log("Welcome to the create-three-app wizard 🔮")

const main = async () => {
  checkNewPackageUpdates()
  try {
    console.log("🚀")
  } catch (e) {
    console.log(e)
  }
}

main()
