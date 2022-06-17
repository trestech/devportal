<div class="pull-right"><img src="https://github.com/inertia186/doctres/raw/main/logo.png" /></div>

# Tres Technologies API Portal

The following API documents provide details on how to interact with the Tres Application database API.

## Develop

The Tres Portal was built with [Jekyll](http://jekyllrb.com/) version 4.2.2, but should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

In case of installation problems, make sure you have a ruby development environment installed. If not, install it with:

```bash
sudo apt-get install ruby-dev
```

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

You can now test locally at
~~~bash
http://localhost:4000
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
