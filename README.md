# My Personal Website

This is a simple HTML + CSS website hosted on GitHub Pages.

## Folder Structure
```
my-website/
│
├── index.html          # Landing page
├── professional.html   # Professional accomplishments page
├── personal.html       # Personal interests page
├── style.css           # Styling for the site
├── navbar.js           # Shared navigation bar
├── images/             # Folder for images
└── README.md           # This file
```

## How to Add a New Page
1. Create a new HTML file in the root folder, e.g., `newpage.html`.
2. Add this at the top inside `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   <script src="navbar.js" defer></script>
   ```
3. Add your content inside `<body>` in a container:
   ```html
   <div class="container">
       <h1>My New Page</h1>
       <p>Page content here...</p>
   </div>
   ```
4. Open `navbar.js` and add your new page to the list:
   ```javascript
   <li><a href="newpage.html">New Page</a></li>
   ```
5. Save, commit, and push to GitHub. The new page will appear in the navigation bar automatically.
