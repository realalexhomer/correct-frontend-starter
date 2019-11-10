## correct-frontend-starter

## Thanks to [Vipke's react-webpack-typescript starter](https://github.com/vikpe/react-webpack-typescript-starter) for providing the initial basis for this!

I've looked around at a lot of starter kits. As far as I know this is the only **correct** one.

Highlights:

- Uses Babel instead of Typescript to compile code. This is much better. Typechecking is done with
  [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#readme)
- **100% correct** eslint setup and editorconfig setup
- Instructions on how to get auto fix working with VSCode. Automatically sorts imports
- Material ui and material ui styles (this is basically JSS)
- Jest setup with example test
- Ability to gloriously import modules from '/src'
- Tree shaking
- Suggested directory structure in `src/app`
- HMR
- Client side rendered

## Installation

1. Clone/download repo

2. `yarn install`

# VSCODE Setup Instructions

In VS Code, Ctrl + Shift + X (Cmd + Shift + X for Mac)

Search "EditorConfig for VS Code" and install

Search "ESLint for VS Code" and install

Search "sort-imports" and install

In `Settings.json` add:

```
"eslint.validate": [

"javascript",

"javascriptreact",

{"language": "typescript", "autoFix": true },

{"language": "typescriptreact", "autoFix": true }

],

"editor.formatOnSave": true,

"sort-imports.on-save": true

```

## Usage

**Development**

`yarn run start-dev`

- Build app continuously (HMR enabled)

- App served @ `http://localhost:8080`

**Production**

`yarn run start-prod`

- Build app once (HMR disabled) to `/dist/`

- App served @ `http://localhost:3000`

---

**All commands**

| Command | Description |

| --------------------- | ----------------------------------------------------------------------------- |

| `yarn run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080` |

| `yarn run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000` |

| `yarn run build` | Build app to `/dist/` |

| `yarn run test` | Run tests |

| `yarn run lint` | Run Typescript linter |

| `yarn run lint --fix` | Run Typescript linter and fix issues |

| `yarn run start` | (alias of `yarn run start-dev`) |

| `typecheck-prod` | Fails when types are incorrect; necessary for CI |

Technologies used:
Babel 7, Typescript, React, JSS, Webpack, Jest, Eslint, VSCode
