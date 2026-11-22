# GitHub Pages Deployment

## Automatic Deployment
1. Push your code to GitHub (main or master branch)
2. The GitHub Actions workflow will automatically build and deploy
3. Go to Settings → Pages → Source: GitHub Actions

## Manual Build for GitHub Pages
```bash
# Set your repo name as the base path
export NEXT_PUBLIC_BASE_PATH=/your-repo-name
bun run build
# The static files will be in ./out/
```

## Important Notes
- The `NEXT_PUBLIC_BASE_PATH` environment variable must be set to your repo name
- Example: if your repo is `github.com/username/my-japanese-app`, set `NEXT_PUBLIC_BASE_PATH=/my-japanese-app`
- For custom domains (username.github.io), leave `NEXT_PUBLIC_BASE_PATH` empty
- The `.nojekyll` file prevents GitHub from ignoring the `_next` folder
