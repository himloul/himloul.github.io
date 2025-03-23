# Variables
BLOG_REPO := himblog
WEBSITE_REPO := himloul.github.io
THEME_REPO := https://github.com/adityatelange/hugo-PaperMod
THEME_NAME := PaperMod
PUBLIC_DIR := public
BLOG_DIR := blog

# Default target
all: deploy

# Initialize repositories
init:
	@echo "Initializing repositories..."
	git clone https://github.com/himloul/$(BLOG_REPO).git
	git clone https://github.com/himloul/$(WEBSITE_REPO).git
	cd $(BLOG_DIR) && git clone $(THEME_REPO) themes/$(THEME_NAME) --depth=1

# Check website locally
check:
	@echo "Checking website locally..."
	cd $(BLOG_DIR) && hugo server -D

# Add a new blog post
new_post:
	@echo "Creating a new blog post..."
	cd $(BLOG_DIR) && hugo new --kind post posts/$(POST_NAME).md

# Set up submodule for rendered website content
submodule:
	@echo "Setting up submodule..."
	cd $(BLOG_DIR) && git rm -r --cached blog
	rm -rf $(BLOG_DIR)/$(PUBLIC_DIR)
	cd $(BLOG_DIR) && git submodule add -b main https://github.com/himloul/$(WEBSITE_REPO).git $(PUBLIC_DIR)

# Generate static website
generate:
	@echo "Generating static website..."
	cd $(BLOG_DIR) && hugo -t $(THEME_NAME)

# Update and deploy website
deploy: generate submodule
	@echo "Updating and deploying website..."
	cd $(BLOG_DIR)/$(PUBLIC_DIR)
	git add .
	git commit -m "Update website"
	git push origin main
	cd ../..
	git add .
	git commit -m "Update content"
	git push

# View locally
view: generate
	@echo "Viewing locally..."
	cd $(BLOG_DIR)/$(PUBLIC_DIR)
	python -m http.server
	@echo "Open your web browser and go to http://localhost:8000/ to see the website."

# Clean: remove all files in public directory
clean:
	@echo "Cleaning public directory"
	rm -rf $(BLOG_DIR)/$(PUBLIC_DIR)/*

.PHONY: all init check new_post submodule generate deploy view clean
