
# Faculty Website (Jekyll-based)

This is a simple professional website for a faculty member in Mechanical Engineering, built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.

## 📁 Contents

- `index.md` — Home page
- `research.md` — Research and publications
- `interests.md` — Personal interests
- `_layouts/default.html` — Layout template
- `assets/style.css` — Custom styles
- `_config.yml` — Jekyll configuration

## 🚀 Local Preview Instructions (Windows, PowerShell)

### 1. Install Ruby with DevKit
- Download the latest Ruby+Devkit from: https://rubyinstaller.org/downloads/
- Run the installer.
- After install, when prompted, run `ridk install` and select option `3`.

### 2. Install Jekyll and Bundler
In PowerShell (run as Administrator):
```powershell
gem install jekyll bundler
```

### 3. Navigate to the Website Folder
```powershell
cd "C:\Path\To\repo"
```

### 4. Build and Serve the Site Locally
```powershell
bundle init
Add-Content Gemfile 'gem "jekyll"'
bundle install
bundle exec jekyll serve
```

Then open your browser to: http://localhost:4000

## 🌐 Deploying to GitHub Pages

1. Push your site files to a GitHub repository.
2. In the repo, go to **Settings > Pages**.
3. Choose the `main` branch and root (`/`) folder.
4. Your site will be published at `https://yourusername.github.io/`

---

© 2025 Brian Mercer. All rights reserved.
