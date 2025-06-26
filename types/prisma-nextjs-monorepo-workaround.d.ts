declare module "@prisma/nextjs-monorepo-workaround-plugin" {
  import type { Configuration } from "webpack";

  export class PrismaPlugin {
    constructor(options?: any);
    apply(compiler: any): void;
  }
}
