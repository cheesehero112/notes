# How to Make a Github repo from your computer

1. make a new folder in an easy to locate place in your computer

2. Folder name must be the same as your github repo name

3. Open terminal in your computer, and cd into your folder

4. In Github.com, create a folder with the same name as your computer folder

5. On Github, there will be a command that you need to use to push the local files from your computer. It will look like this.

   ```
   echo "# notes" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin git@github.com:cheesehero112/notes.git
   git push -u origin main
   ```

6. Open terminal on your computer and follow above steps

7. Copy the commands in the blue square on GitHub

8. Open terminal and paste the commands



To upload updates:

1. git add - pick a file you want to push, or type git add. to push everything
2. git commit -m "much better version!"
3. git push -u origin main

