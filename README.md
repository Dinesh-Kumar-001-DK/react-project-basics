# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

cd C:/Users/dinesh/OneDrive/Desktop/reactjs/my-react-app
git status
git add .
git commit -m "My update"
git push

fresh

FULL FLOW: Fresh Project → GitHub (ONE GO)
Step 0: Go to your project folder
cd C:/Users/dinesh/OneDrive/Desktop/reactjs/my-new-project

Step 1: Initialize Git (if not done yet)
git init

Step 2: Add all files
git add .

Step 3: Commit files
git commit -m "Initial commit"

Step 4: Create branch main (modern default)
git branch -M main

Step 5: Link GitHub repo

Create a new repo on GitHub (e.g., my-new-project)

Copy HTTPS URL

Then in terminal:

git remote add origin https://github.com/YourUsername/my-new-project.git

⚠️ If error says remote origin already exists:

git remote remove origin
git remote add origin https://github.com/YourUsername/my-new-project.git

Step 6: Push to GitHub
git push -u origin main

🎉 Now your fresh project is live on GitHub

🔁 Daily Updates (for the same repo)
git add .
git commit -m "Describe update"
git push

💡 Super easy memory trick:
Initialize → Add → Commit → Link → Push

First time: Steps 1–6

Daily update: just Add → Commit → Push

2️⃣ If you want files to stop showing “U” because they are tracked

The “U” = Untracked file (not yet added to Git).

To fix:

git add .

Then:

git commit -m "Add all files"

✅ Effect:

“U” disappears

Git marks them as tracked

Symbols like “M” (Modified) will appear for future changes
