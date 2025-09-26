# Submodule Setup Instructions

This guide provides instructions for setting up and troubleshooting the `public` submodule in this repository.

## Fresh Setup

After cloning the repository for the first time, you need to initialize and update the submodule. Run the following command from the root of the repository:

```bash
git submodule update --init --recursive
```

This will clone the submodule repository and check out the correct version.

## Troubleshooting: Fixing a Broken Submodule

If you are experiencing issues with the `public` submodule, such as errors about a missing git repository or incorrect paths, you can perform a hard reset of the submodule.

**Warning:** The following commands will permanently delete any local changes in the `public` directory.

1.  **De-initialize the submodule:** This removes the submodule's registration from your local git configuration.
    ```bash
    git submodule deinit -f public
    ```

2.  **Remove the submodule directory:** This deletes the submodule's files from your working tree.
    ```bash
    rm -rf public
    ```

3.  **Remove the submodule's git repository:** This deletes the cached submodule repository from your `.git` directory.
    ```bash
    rm -rf .git/modules/public
    ```

4.  **Clean your working directory:** This removes any other untracked files that might be causing issues.
    ```bash
    git clean -fd
    ```

5.  **Re-initialize and update the submodule:** This will start fresh, cloning the submodule and checking out the correct version.
    ```bash
    git submodule update --init --recursive
    ```

After running these commands, your submodule should be in a clean and correct state.

## Note:

Once building the website, the `.git` dotfile inside the `/public` folder will be deleted, so recreate it (manually unfortunately, we will figure out how to solve this) and paste this text inside it.

```txt
gitdir: ../.git/modules/public
```



Then you can push to GitHub


