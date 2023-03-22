import { existsSync } from "fs"
import path from "path"

import containsInvalidCharacters from "../../../utils/general/contain-invalid-characters"
import context from "../../context"

export const validateProjectName = (projectPath: string) => {
  const tempPath = projectPath.trim()
  context.path = path.resolve(tempPath)
  const dirExists: boolean = existsSync(context.path)
  if (!tempPath.length) {
    return "Invalid directory name length: name can't be empty"
  }
  if (dirExists) {
    return "Directory already exists: a directory with this name already exists, please use a different name"
  }
  if (projectPath.length >= 214) {
    return "Invalid directory name length: name must contain less than 214 characters"
  }
  if (containsInvalidCharacters(projectPath)) {
    return "Invalid directory name: name must only include URL-friendly characters"
  }

  return true
}
