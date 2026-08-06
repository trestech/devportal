<div class="pull-right"><img src="https://github.com/inertia186/doctres/raw/main/logo.png" /></div>

# Tres Developer Portal

The following API documents provide details on how to interact with the Tres Application database API.

This portal is developer focused.  If you are looking for help using Tres as an end user, see: https://trestechnologieshelp.zendesk.com/

## Develop

#### [Visual Studio Code](https://code.visualstudio.com/Download)

1. Open a new Visual Studio Code window.
2. Click on the Source Control side-tab.
3. Clone Repository: `git@ssh.dev.azure.com:v3/tresTechnologies/CBO/doctres`
4. Click on menu item: Terminal -> Run Task... `rake: run`
5. Open: http://localhost:4000/ 

Install the following extensions:

* [Jekyll Run](https://marketplace.visualstudio.com/items?itemName=Dedsec727.jekyll-run)
* [Jekyll Syntax Support](https://marketplace.visualstudio.com/items?itemName=ginfuru.ginfuru-vscode-jekyll-syntax)
* [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
* [VSCode Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Rubywingrunr21.vscode-ruby)

#### Command-line

The Tres Portal was built with [Jekyll](http://jekyllrb.com/) version 4.2.2, but should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ git clone https://github.com/inertia186/doctres.git
$ cd doctres
$ rbenv shell 3.1.6
$ bundle install
~~~

In case of installation problems, make sure you have a ruby development environment installed. If not, install it with:

```bash
sudo apt-get install ruby-dev
```

Run `rake` commands through Bundler to ensure you're using the right versions (the bundle now explicitly includes `rake`):

~~~bash
$ bundle exec rake run 
~~~

You can now test locally at
~~~bash
http://localhost:4000
~~~

#### Refreshing imported API markdown

The API markdown in `_api/` is imported from the AppServer documentation folders.

This repo now also carries a small `Makefile` + `Tresmaticfile` companion so local maintainer refreshes follow the same `.tresmatic/target.py` pattern used by `tresmatic` siblings, while the existing `Rakefile` remains the implementation surface.

Create a `.env` file with the base manual-markdown path:

~~~bash
MARKDOWN_PATH=/Users/anthony/Projects/tres/tres-app-server/AppServer/HttpServer/Documentation/Markdown/
~~~

Then use one of these happy-path commands:

~~~bash
# preferred maintainer import entrypoint: consume local staged markdown
$ make tresmatic

# refresh local .tresmatic staging directly when needed
$ make tresmatic-stage

# import manual markdown from MARKDOWN_PATH
$ make import

# import generated markdown from MARKDOWN_PATH/Generated/
$ make import-generated

# import generated markdown first, then manual markdown
$ make import-all
~~~

The current `make tresmatic` path is the durable local maintainer entrypoint for this repo: it reads only the local staged artifact under `.tresmatic/staging/tres-app-server/AppServer/HttpServer/Documentation/Markdown/` and runs the existing Ruby import workflow against that local path. Upstream preparation belongs to the `tresmatic` ecosystem: root `make tresmatic` in `../tresmatic` can materialize `devportal/.tresmatic/` by running this repo's local target tooling, and `make tresmatic-stage` remains available here when you want to refresh the staged artifact directly. The control surface is now `Makefile`/`Tresmaticfile`/`.tresmatic/target.py`; the durable import implementation still lives in Ruby. The `.tresmatic/` workdir is local/generated and stays out of git.

The underlying Rake commands still work directly if you need them:

~~~bash
$ bundle exec rake import
$ bundle exec rake import:generated
$ bundle exec rake import:all
~~~

You can still override the path explicitly when needed:

~~~bash
$ bundle exec rake import[/full/path/to/Documentation/Markdown/]
~~~

Optionally, when running `jekyll` commands through Bundler, append `--host x.x.x.x` with the external IP address of the server to be able to connect remotely:
~~~bash
$ bundle exec jekyll serve --host x.x.x.x
~~~
~~~bash
http://x.x.x.x:4000
~~~

## Rake Tasks

This application uses `rake` (Ruby's make command) to execute maintenance tasks.  You can see the complete list of tasks by typing:

```bash
$ bundle exec rake -vT
```

See: [Tutorial: Publish a Jekyll site to Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/publish-jekyll)
