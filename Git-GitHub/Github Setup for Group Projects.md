

# How to setup for a group project using Github



### Introduction

Knowing how to use Git and Github as a group correctly is essential to completing a project successfully. Below is a step by step guide on a workflow example. 

In this workflow, team members do not fork and clone. Instead, each member clone the main branch of the Github repo and work with their local dev and feature branch. 

Github repo's main branch is used only for production. Team member will use the dev branch (also known as staging branch) to test the application.



### Step 1: Create an Organization and Repository

- One person  in the group creates an organization.

- Invite all members and make everyone "owners"

- Create a repo ([follow this step](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github) )

  

### Step 1B: Create application boilerplate as a group

- The owner of the repo clone the repo, and create a boilerplate repo

- push & merge into the organization's master branch

  

### Step 2: Imitialize Main & Dev Branches 

- Go to branch settings and set up restrictions to require at least 1 review before merging into Dev or Main branches

  

### Step 3: Each Member Clones Repo

```
git clone [https-url] [folder-name]
cd [folder-name]
```



### Step 4: Create a New Feature branch

- It's best practice to create a new branch for what you are working for and name the branch clearly. For example, 'alex/navbar'

  ```
  git checkout -b [your-name/new-feature]
  ```



### Step 5: Make updates and commit to your branch often locally

- It's best practice to be descriptive in your commit comment. 
- Commit early and often!

```
git commit -m 'your commit comment here'
```



### Step 5B: Merge updates from Dev Github branch 

On your local computer:

1. Switch to the dev branch

   ```
   git checkout dev
   ```

2. Pull any current updates from dev (on Github)

   ```
   git pull origin dev
   ```

3. Switch back to your "feature branch"

   ```
   git checkout [your-name/new-feature]
   ```

4. Merge in the changes

   ```
   git merge dev
   ```

5. Resolve any conflicts 



### Step 6: Submit a Pull Request

Push the branch to your remote repo (origin)

```
git push origin [your-name/new-feature]
```



### Step 7: Submit a Pull Request

1. On your Github account, navigate to the branch you just pushed
2. Click on the "Pull Request" button
3. Add a descriptive notes about what this Pull Request is for
4. Submit the request



### Step 8: Review Pull Request

1. The Admin or other group members review the changes.
2. If everything looks good, reviewer can click on the Merge button. It will be merged into the dev branch of the repo.



### Step 9: Merge to Main when ready for Production

When everything in the dev branch is working as expected, create a Pull Request to merge everything to the Main branch!

Repeat Step 7 & 8 to complete the Merge from Dev branch to Main brach. 



### Notes:

When working on a group project, it is best to credit everyone in every commit. Below is how you can add multiple users to a simgle commit. 

```
// How to add multiple users to a single commit

git commit -m "type descriptive commit message here *don't close the quotation here*
>
>
Co-authored-by: name1 <email1@gmail.com>
Co-authored-by: name2 <email2@gmail.com>
Co-authored-by: name3 <email3@gmail.com>"
```

