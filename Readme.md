# This is my nextjs testing arena

- This project is no longer using workspaces(i.e., yarn workspaces or npm workspaces) coz they do not work well right now.

Adding a github submodule

```bash
git submodule add "github_url" directory_path
```

## How to **fix** submodule shit..?

Problem: If you accidentally did a `git add .` in any of your github repo where you had some nested repository, then git automatically adds that repository as a submodule to your
existing (parent repository) and then you don't get a live link in your github repo page.

**How to FIX**

Simply move your nested git repo elsewhere and do a commit to clean it for a while, and then move back the nestedGitRepo back to where it was and add it in proper way, followed by
git commit. It looks like that:

```bash
mv someNestedGitRepo ../
git add . && git commit -m "Remove submodule."
# Now, move back the nestedGitRepo back to current repo and add it in proper way!
mv ../someNestedRepo .
git submodule add "github_url" directory_path
# Now, you get to commit, and its done!
git add . && git commit -m Fix submodule.
```

### Sources for git submodules

- git submodules: https://www.catalyst.net.nz/blog/git-submodule-misunderstood-beast-or-remorseless-slavering-monster
