import path from "path";

import { getMDXData } from "app/lib/utils";

export function getProjectPosts() {
  return getMDXData(path.join(process.cwd(), "content-projects"));
}
