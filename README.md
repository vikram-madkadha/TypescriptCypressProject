Preconditions:
1. You have your code locally.
2. You have a personal git hub account.

Create repository on GitHub:
- Go to your GitHub account (https://github.com)
- Click the "+" icon on the top-right → Select "New repository”
- Give your repo a name, choose public or private, and do not initialize with a README (since you already have code locally).
- Click "Create repository”
  Open Terminal or Command Prompt: 
- Navigate to your project folder: cd path/to/your/project
- Initialize Git in Your Project (if not already): git init
- Add Your Remote GitHub Repo: Copy the HTTPS/SSH URL from the GitHub repo page, then run: git remote add origin https://github.com/yourusername/your-repo-name.git
- Run to verify the same: git remote -v
- Add and commit your code: (i) git add . (ii)git commit -m "Initial commit"
- If you are pushing the code for the first time, run: git branch -M main
- Then run: git push -u origin main
- Check on GitHub for the pushed code


