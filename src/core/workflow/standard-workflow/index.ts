import { existsSync } from "fs"
import open from "open"
import path from "path"
import prompts from "prompts"

const standardWorkflow = async () => {
  let step = 0
  const quit = false
  let projectPath = ""

  while (!quit) {
    const exit = 0
    switch (step) {
      case 0:
        try {
          projectPath = ""
          if (typeof projectPath === "string") {
            projectPath = projectPath.trim()
          }
        } catch (e) {
          console.log(e)
        }
        step++
        break
    }
  }
}

export default standardWorkflow
