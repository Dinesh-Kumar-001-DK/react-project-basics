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