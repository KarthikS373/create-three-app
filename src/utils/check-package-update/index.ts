import chalk from "chalk"
import { execSync } from "child_process"

const script = "npm outdated --location=global"

const checkNewPackageUpdates = async () => {
  try {
    console.log("\n⏳ Checking for new updates...")
    execSync(script)
  } catch (error: any) {
    if (error.stdout.toString().includes("create-three-app")) {
      console.log(
        chalk.red(
          "\nThe version of create-three-app installed is outdated.\nRun npx create-three-app@latest to always use the latest version. Ignore this message if already used."
        )
      )
    }
  }
}

export default checkNewPackageUpdates
