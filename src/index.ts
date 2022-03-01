import { Command, flags } from "@oclif/command";
import fs from "fs";
import sitemap from "@jswork/sitemap";

class SitemapCli extends Command {
  static description = "Generate sitemap with nodejs.";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    limit: flags.string({
      char: "l",
      description: "The limit of single file sitemap size.",
    }),
    domain: flags.string({
      description: "The domain of the sitemapindex.",
      required: true,
    }),
  };

  static args = [{ name: "filename" }];

  async run() {
    const { args, flags } = this.parse(SitemapCli);
    const filename = args.filename || "urls.txt";
    const urls = fs.readFileSync(filename, "utf8").split("\n");

    sitemap(urls, { limit: flags.limit || 45000, domain: flags.domain });
    this.log("😎 sitemap generated.");
  }
}

export = SitemapCli;
