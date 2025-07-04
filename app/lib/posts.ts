import path from "path";

import { getMDXData } from "app/lib/utils";

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content-blog"));
}
