zp
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/zp.svg)](https://npmjs.org/package/zp)
[![Downloads/week](https://img.shields.io/npm/dw/zp.svg)](https://npmjs.org/package/zp)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g zp
$ zp COMMAND
running command...
$ zp (--version)
zp/0.0.0 darwin-arm64 node-v23.6.0
$ zp --help [COMMAND]
USAGE
  $ zp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`zp hello PERSON`](#zp-hello-person)
* [`zp hello world`](#zp-hello-world)
* [`zp help [COMMAND]`](#zp-help-command)
* [`zp plugins`](#zp-plugins)
* [`zp plugins add PLUGIN`](#zp-plugins-add-plugin)
* [`zp plugins:inspect PLUGIN...`](#zp-pluginsinspect-plugin)
* [`zp plugins install PLUGIN`](#zp-plugins-install-plugin)
* [`zp plugins link PATH`](#zp-plugins-link-path)
* [`zp plugins remove [PLUGIN]`](#zp-plugins-remove-plugin)
* [`zp plugins reset`](#zp-plugins-reset)
* [`zp plugins uninstall [PLUGIN]`](#zp-plugins-uninstall-plugin)
* [`zp plugins unlink [PLUGIN]`](#zp-plugins-unlink-plugin)
* [`zp plugins update`](#zp-plugins-update)

## `zp hello PERSON`

Say hello

```
USAGE
  $ zp hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ zp hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/Desktop/zp/blob/v0.0.0/src/commands/hello/index.ts)_

## `zp hello world`

Say hello world

```
USAGE
  $ zp hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ zp hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/Desktop/zp/blob/v0.0.0/src/commands/hello/world.ts)_

## `zp help [COMMAND]`

Display help for zp.

```
USAGE
  $ zp help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for zp.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.21/src/commands/help.ts)_

## `zp plugins`

List installed plugins.

```
USAGE
  $ zp plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ zp plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.26/src/commands/plugins/index.ts)_

## `zp plugins add PLUGIN`

Installs a plugin into zp.

```
USAGE
  $ zp plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zp.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZP_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZP_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zp plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zp plugins add myplugin

  Install a plugin from a github url.

    $ zp plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zp plugins add someuser/someplugin
```

## `zp plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ zp plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ zp plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.26/src/commands/plugins/inspect.ts)_

## `zp plugins install PLUGIN`

Installs a plugin into zp.

```
USAGE
  $ zp plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zp.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZP_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZP_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zp plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zp plugins install myplugin

  Install a plugin from a github url.

    $ zp plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zp plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.26/src/commands/plugins/install.ts)_

## `zp plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ zp plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ zp plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.26/src/commands/plugins/link.ts)_

## `zp plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zp plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zp plugins unlink
  $ zp plugins remove

EXAMPLES
  $ zp plugins remove myplugin
```

## `zp plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ zp plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.26/src/commands/plugins/reset.ts)_

## `zp plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zp plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zp plugins unlink
  $ zp plugins remove

EXAMPLES
  $ zp plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.26/src/commands/plugins/uninstall.ts)_

## `zp plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zp plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zp plugins unlink
  $ zp plugins remove

EXAMPLES
  $ zp plugins unlink myplugin
```

## `zp plugins update`

Update installed plugins.

```
USAGE
  $ zp plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.26/src/commands/plugins/update.ts)_
<!-- commandsstop -->
