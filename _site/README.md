# Personal Website (GitHub Pages + Jekyll)

## 💻 Local Development (Windows)

### 1. Install Ruby

* Download from: https://rubyinstaller.org/
* Install **Ruby + Devkit**
* Make sure to check:

  * ✔ Add Ruby to PATH
* At the end, select:

  ```
  3 (MSYS2 toolchain)
  ```

---

### 2. Install Jekyll

Open Command Prompt or PowerShell:

```
gem install bundler jekyll
```

---

### 3. Set up dependencies (one-time)

In your project folder:

```
bundle init
```

Create a file named `Gemfile` with:

```
source "https://rubygems.org"

gem "jekyll"
gem "webrick"
```

Then run:

```
bundle install
```

---

### 4. Run the site locally

```
bundle exec jekyll serve
```

Open your browser at:

```
http://127.0.0.1:4000
```

---

### 5. Workflow

```
Edit files → refresh browser → see changes instantly
```

---

### ⚠️ Common issues

**webrick error**

```
bundle add webrick
```

**Port already in use**

```
bundle exec jekyll serve --port 4001
```

---

## ✏️ Editing Content

### Add a blog post

Create a file in `_posts/`:

```
YYYY-MM-DD-title.md
```

---

### Add a project

Edit:

```
_data/projects.yml
```

Copy an existing entry and modify fields.

---

### Add an image

Place images in:

```
assets/images/
```

Use in markdown:

```
![Alt text](/assets/images/file.png)
```

---

### Edit pages

* `index.md` → homepage
* `personal.md`
* `professional.md`

---

## 🎨 Customize Style

Edit:

```
assets/css/style.css
```

Key things to tweak:

* colors
* fonts
* spacing

---

## ➕ Add a new page

1. Create `newpage.md`
2. Add it to navigation in `_includes/header.html`

---

## 🧮 Math Support

Use LaTeX:

```
$$ math here $$
```

---

## 🌐 Custom Domain (optional)

1. Buy a domain
2. Add a `CNAME` file in repo
3. Configure DNS with your provider

---

## 🧠 Notes

* Changes pushed to GitHub will automatically update your live site
* Local preview is the best way to test before pushing
