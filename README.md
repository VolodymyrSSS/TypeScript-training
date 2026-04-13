# TypeScript Training Projects

This repository contains small TypeScript console/browser projects (`basic1`, `basic2`, `comments`) for practicing compilation, running, and cleaning workflows.

---

## 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/TypeScript-training.git
cd TypeScript-training
npm install
```

### 1.1.2. Initialize a new Project Folder

If you want to start a new project in a new folder:
create a new folder withe a project name. Than go into that folder and
Inside that folder, make sure you have a package.json entry. If not, create one:

cd newProjectName

```bash
npm init -y
```

After, add TypeScript and ts-node if they’re not already installed at the root:

```bash
npm install typescript ts-node --save-dev
```

Since you already might have them in the root, this step may be redundant — but it’s safe.

---

## 2. Running the Projects

Run directly with ts-node (no build step)

```bash
npm run start --workspace=basic1
```

# Compile TypeScript and run the compiled JavaScript

```bash
npm run build:run --workspace=basic1
```

Expected output will be printed in the terminal. You can replace basic1 with basic2 or comments to run those projects.

```bash
npm run build --workspace=basic1
```

This generates JavaScript files in the folder. Open the corresponding file in your browser. The compiled JS will be loaded via a script tag, for example:

<script src="build/main.js"></script>

Repeat the same steps for basic2 or comments if they have browser entry points.

## Cleaning Previous Results

```bash
npm run clean --workspace=basic1
```

This deletes the build/ folder for that project. After cleaning, re-run:

```bash
npm run build:run --workspace=basic
```

Now only the latest code from src/main.ts will be executed. You can also run

```bash
npm run clean --workspace=basic2
```

or (npm run clean --workspace=comments for the other projects).

Notes

- Use start for quick testing with ts-node.
- Use build:run for testing compiled JavaScript.
- Run clean before build:run if you want to avoid stale logs from previous builds.
- For browser projects, open the HTML file after building to see results in the browser.
- Replace basic1 with basic2 or comments in commands to work with those projects.
