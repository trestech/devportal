SHELL := /bin/sh

STAGED_MARKDOWN_PATH ?= ./.tresmatic/staging/tres-app-server/AppServer/HttpServer/Documentation/Markdown/

.DEFAULT_GOAL := help

.PHONY: help tresmatic tresmatic-stage run build import import-generated import-all

help:
	@printf "Common targets:\n"
	@printf "  tresmatic        - Import API markdown from local ./.tresmatic staging\n"
	@printf "  tresmatic-stage  - Refresh local ./.tresmatic staging via repo-local target tooling\n"
	@printf "  import           - Import manual API markdown via bundle exec rake import\n"
	@printf "  import-generated - Import generated API markdown via bundle exec rake import:generated\n"
	@printf "  import-all       - Import generated markdown, then manual markdown\n"
	@printf "  run              - Run the site locally\n"
	@printf "  build            - Build the site for release\n"

tresmatic:
	@test -f "$(STAGED_MARKDOWN_PATH)Version.md" || (echo "missing staged markdown under $(STAGED_MARKDOWN_PATH). Run 'make tresmatic-stage' here or 'make tresmatic' in ../tresmatic first." && exit 1)
	@LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 MARKDOWN_PATH="$(STAGED_MARKDOWN_PATH)" bundle exec rake import:all

tresmatic-stage:
	@python3 ./.tresmatic/target.py

import:
	@bundle exec rake import

import-generated:
	@bundle exec rake import:generated

import-all:
	@bundle exec rake import:all

run:
	@bundle exec rake run

build:
	@bundle exec rake build
