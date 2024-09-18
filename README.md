# Website with PaperMod

This README provides step-by-step instructions for creating a website using Hugo with the PaperMod theme and deploying it on GitHub. Follow the outlined steps to set up your website.

## Prerequisites
Before you begin, make sure you have the following:

- GitHub account
- Git installed on your local machine

## First install
1. Create two repositories on GitHub: `himblog` and `himloul.github.io`.
2. Clone both repositories locally using the following commands:

```bash
git clone https://github.com/himloul/himblog.git
git clone https://github.com/himloul/himloul.github.io.git
```

1. Clone the Hugo theme (PaperMod) into the `themes` directory of the `himblog` repository:

```bash
cd blog
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

## Step 3: Check Website Locally
1. Start the Hugo server to check your website locally:
```bash
cd blog
hugo server -D
```

## Step 4: Add a New Blog Post
1. Create a new blog post using the following command:

```bash
hugo new --kind post posts/first_post.md
```

## Step 5: Set Up Submodule for Rendered Website Content
1. Remove the cache from the `blog` folder:

```bash
cd blog
git rm -r --cached blog
```

2. Create a submodule to store the rendered website content:

```bash
rm -rf public
git submodule add -b main https://github.com/himloul/himloul.github.io.git public
```

## Step 6: Generate Static Website
1. Generate the static website, which will be created in the `public` directory:
```bash
hugo -t PaperMod
```

## Step 7: Update and Deploy Website
1. Commit and push the changes in the `public` folder:
```bash
cd public
git add .
git commit -m "Initial commit"
git push origin main
```
2. Commit and push the changes in the `himblog` repository:
```bash
cd ../..
git add .
git commit -m "Update content"
git push
```

## Step 8: View Locally
1. View the locally generated website from the `public` directory by running a local server:
```bash
python -m http.server
```
2. Open your web browser and go to http://localhost:8000/ to see the website.

Now you have successfully created a website using Hugo with the PaperMod theme and deployed it on GitHub.

## Notes

- The Katex syntax is not rendered by default, so to do so, use this solution [here](https://github.com/adityatelange/hugo-PaperMod/issues/236#issuecomment-778936434): 

add this snippet to the `layouts/partials/extend_head.html`:

```html
{{ if or .Params.math .Site.Params.math }}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" integrity="sha384-43gviWU0YVjaDtb/GhzOouOXtZMP/7XUzwPTstBeZFe/+rCMvRwr4yROQP43s0Xk" crossorigin="anonymous"></script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
          // customised options
          // • auto-render specific keys, e.g.:
          delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false},
              {left: '\\(', right: '\\)', display: false},
              {left: '\\[', right: '\\]', display: true}
          ],
          // • rendering keys, e.g.:
          throwOnError : false
        });
    });
</script>
{{ end }}
```