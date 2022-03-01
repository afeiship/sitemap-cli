## sitemap-cli
> Generate sitemap with nodejs.

## installation
```shell
git clone git@github.com:afeiship/sitemap-cli.git
cd sitemap-cli
npm link
```

## usage
```shell
# 1. first you should have a urls.txt
# 2. cd workdir
cd ~/workdir
# 3. use cli
smc urls.txt -l 45000
```

```shell
$ smc -h
Generate sitemap with nodejs.

USAGE
  $ sitemap-cli [FILENAME]

OPTIONS
  -h, --help         show CLI help
  -l, --limit=limit  The limit of single file sitemap size.
  -v, --version      show CLI version
  --domain=domain    (required) The domain of the sitemapindex.
```
