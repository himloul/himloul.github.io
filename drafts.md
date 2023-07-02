# Create a website using Hugo + PaperMod
And deploy it in GitHub

First, create two repositories in GitHub, I choose the names: himblog, and himloul.github.io
Then Clone the two repos locally


Clone the blog repo, where the content of the Hugo website is stored
```bash
git clone https://github.com/himloul/himblog.git
```

Add the Hugo theme: PaperMod
```bash
cd blog
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

Check the website
```
hugo server -D
```

Add a new post
```bash
# Create new blog post
hugo new --kind post posts/first_post.md
```

Clone the prod repo
```bash
git clone https://github.com/himloul/himloul.github.io.git
```

Create a `README.md` file in the prod repo
```bash
# Move to himloul.github.io
cd ../../himloul.github.io
git checkout -b main # Switched to a new branch 'main'
touch README.md # create readme file
git status
# Update the repo
git add .
git commit -m "Adding Readme"
git push origin main
```

Add a submodule, where we will store the rendered website content

```bash
cd ../himblog
git rm -r --cached blog # Remove the cache from the blog folder

### UPDATE PUBLIC FOLDER ###
cd blog
# Create a submodule
rm -rf public
git submodule add -b main https://github.com/himloul/himloul.github.io.git public
# hugo server -D
```

if you did a mistake with the submodule in `Public` folder, and you want to rest
```bash
# rm -rf libs/OAuth/public
# git submodule update
rm -rf public
git submodule add -b main https://github.com/himloul/himloul.github.io.git public
```

Now we can generate ou static website, and it will be created in the `public` directory,
Update the public folder
```bash
hugo -t PaperMod
```

```bash
cd public
# git remote -v # The origin is pointing to himloul.github.io (prodr repo)
# git status
git add .
git commit -m "init commit"
git push origin main

cd ../..
git add .
git commit -m "Update content"
git push
```

View locally the generated website from the `public` directory
```bash
python -m http.server
```
and go to http://localhost:8000/