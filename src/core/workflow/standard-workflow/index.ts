import { existsSync } from "fs"
import open from "open"
import path from "path"
import prompts from "prompts"

import context from "../../context"
import { validateProjectName } from "../../helpers/validate-project-name"

const standardWorkflow = async () => {
  let step = 0
  const quit = false
  let projectPath = ""

  while (!quit) {
    let exit = 0
    switch (step) {
      case 0:
        try {
          projectPath = ""
          if (typeof projectPath === "string") {
            projectPath = projectPath.trim()
          }
          context.name = ""
          while (!context.name?.length) {
            if (exit >= 2) {
              //   kill()
            }
            exit++
            const projectPath = await prompts({
              type: "text",
              name: "projectPath",
              message: "Project name",
              initial: "my-create-web3-dapp",
              validate: (value: string) => validateProjectName(value),
            }).then((data) => data.projectPath.trim())
            if (projectPath) {
              context.path = path.resolve(projectPath)
              context.name = path.basename(context.path)

              //   setRoot(context.path)
            }
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
