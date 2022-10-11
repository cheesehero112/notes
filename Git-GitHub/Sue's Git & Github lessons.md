# Sue's Git & Github lessons:

## Lesson 1: 

The following is the first of about 10 or 12 git/GitHub lessons that I’ve been going through with Michael over the past week or so — hoping they’ll be helpful for you also! I’ll send one lesson at a time, and you can let me know when you’re ready for the next. They should be relatively quick and painless — I’m guessing you can do each one in about 20-30 minutes (perhaps less). So maybe shoot for getting through one a day or something, and you’ll have the hang of this in no time! 

A couple FYI’s:

First of all, this series of lessons isn’t intended to be a deep-dive! There are SOOOO many git commands, the vast majority of which I’ve never needed to use, and learning more than the basic ones right now is unnecessary. At this point all you really need is an overall understanding of what git and GitHub are, and to know around 10 or 15 commands. After that, as you move on in bootcamp and your career, you’ll be able to look up what you need!

Second, there are lots of different ways to do almost anything in git, lots of options to customize the commands, etc., but for now the goal is just to learn A way to do various basic tasks! Down the line you can research other ways of doing things, tailor the commands as you wish, etc. I say this primarily because if you search around, you’ll find plenty of opinions (mostly on StackOverflow!) about “oh no you shouldn’t do it that way, this way is better!“, and that’s totally valid — but for now, let’s just learn ONE way! Then you can take that and run with it and decide what you think is best! Not terribly interested right now in arguing those finer points…let’s just get some basic commands down first.

OK, on to the first lesson! ![:blush:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f60a.png) Today’s task is one that I know you’ve done before, and that is to clone a repository on GitHub. I created a small React app and pushed it to a repo on my GitHub account (SAnschutz) and called it”practice-git”. I just added you as a collaborator on the project — you may need to check your email and see if you got an invitation from me (via GitHub) to be a collaborator, and you might need to accept the invitation. (Or it might add you automatically, I’m not sure!)Once you’ve accepted the invitation if necessary and located the repo on GitHub, clone it to your local machine. In case you need a reminder about the steps to clone a repo:First, find the green button that says “Code” and click that. That’ll open a little pop-up window — on that window, to the right of the line that looks like code and says something like “git@github.com:SAnschutz/practice-git.git”, you’ll see the international sign for “copy this” — two little offset squares. 

Click on that, and it should give you a little thought-bubble that declares “Copied!“. (Don’t worry about HTTPS or SSH or any of that — for this it really doesn’t matter. Just use whatever it defaults to.)Now open VS Code, open the terminal, and cd into whatever directory you want to store this silly little project in. 

Then, still in the terminal, type in: `git clone ` and then paste in the copied think from GitHub. So at this point the command in the terminal should look something like this:
`**git clone git@github.com:SAnschutz/practice-git.git**`Then hit enter and let it do its thing! After it’s done, change into the directory you just created by typing:  `cd practice-git` Then type `npm install` That may be a new step for you? 

**Basically typing `npm install `installs all the dependencies (aka packages) that a project requires.** You’ll type `npm install` a million times during your career! Perhaps a million times in the first year. LOL Don’t worry right now about what the various dependencies are— you’ll explore those later. For now just hit enter, and let your computer download whatever it needs to. 

**When that’s done, type `npm start`. That should cause our app to open in the browser** — if it doesn’t, let me know and we’ll troubleshoot! (Or try troubleshooting on your own — you’ve gotten good at that over the past however-many months! ![:grin:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f601.png))

An apology: Right now the text will say “Hi Michael” but please don’t be offended. ![:woozy_face:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f974.png) Shortly I’ll change that so that it’ll be inclusive of you and whoever else decides to go through this tutorial! I don’t want to change it right at this very moment, because of where I am with Michael in this tutorial, but I’ll get to it soon!OK, that’s step one — nothing really about git yet (except, I suppose, `git clone`, but that’s not new to you!) But it’s enough to get set up the project we’re going to be working with . Let me know when you’ve gotten that far, and we’ll move on to the next lesson!



**Quesion:** 

Webpage did open successfully, but I got a bunch of npm warning for ‘deprecated’. Is this something I need to worry about? (screenshot attached).

![Screen Shot 2022-09-06 at 10.27.56 AM](/Users/chihiroshibayama/Downloads/Screen Shot 2022-09-06 at 10.27.56 AM.png)



**Answer:** 

As for the deprecated warnings, no, you don't need to worry about those. Those warnings pertain to some npm packages (aka dependencies -- are you familiar with either of those terms?) that are required to run this app. FYI, I set up this project using Create-React-App just a week or so ago, so it was CRA that opted to require all those packages...and if those packages are still good enough for CRA, they're good enough for us! LOL For most projects, you'll probably get similar warnings frequently because npm packages get updated constantly, so staying up to date with them is one big game of whack-a-mole. Just as a little side lesson, a lot of npm packages are written as open-source packages, meaning that the code is completely available on GitHub and anyone (including you and me!) can contribute to their codebase. A lot of developers (including me) work on open source projects just as an unpaid side-gigs. They see a need and create a package (or application or whatever) to fill that need, or perhaps they're using some open-source npm package in their own project and notice a bug, so they volunteer their time to step in and fix it. Even some of the really popular packages...you'd be surprised! (Create-React-App itself is an open-source project! As are FreeCodeCamp, VSCode, Mozilla, etc.) While there is some work that's related to open source projects that's paid, it's often in large part just your fellow software engineers contributing their time and knowledge, out of the goodness of their hearts. At some point those maintainers/contributors may have reasons that they're unable to continue with a project, or perhaps the need for the package decreases (because newer packages have come in to address the need, etc.). So the term "deprecated" just means the project is no longer being maintained or updated, but normally the package still exists and is still very much useable. So it's actually quite common to use npm packages that are technically deprecated in your projects. If a project using those packages is around for a long time (many years), eventually they'll probably need to address those deprecated packages, find newer solutions for whatever purposes those packages had. But for something like this, and for most projects, not a problem.



## Lesson 2: 

Second lesson: two commands which you’ll use constantly. (Well, I do, anyway!)

First, if you haven’t already, open the practice-git project in VSCode, and once you've got that open, open the terminal. (I’m guessing you’ve already been doing that a lot and don’t need instructions, but if that’s not the case, let me know!)

**First command for today:** `git status`  

If you type that into your VSCode terminal now (assuming you’re in the practice-git directory) and hit enter, you should get a message that says “nothing to commit, working tree clean”. And some other stuff that we’ll get to later. Awesome. That’s tells you that there haven’t been any changes to any of the files since the last commit. Since you’ve just cloned this repo from GitHub and haven’t yet made any changes, it makes sense that there’s nothing to commit!Now, we’re going to go into the file system a bit and make a few changes. Sounds like you've already made your way to the “src” folder, into the “Components” folder, and have opened “Hello.js”.  If it's not currently open, go ahead and open that Hello.js file.Now go ahead and make a change to that file. Anything. Doesn’t have to be brilliant — I’m not going to see it anyway at this point. Just make a change, then do command-s to save the file.Now go down to your terminal and type `git status` again. This time you should get a message that says something like:

Changes not staged for commit:
 (use “git add <file>...” to update what will be committed)
 (use “git restore <file>...” to discard changes in working directory)
    modified: src/Components/Hello.js

We’re not going to add or commit yet — we’ll get to that. (Patience…I know you’ve committed and pushed code before, but for now don’t commit anything or push anything, please!)

**The second command we’re learning today is this**: `git restore``git restore` is what you use when you realize you've made changes that you don’t want and just need to get back to the way the code was before you started screwing around with it! `git restore `restores a file or files back to the state they were in as of the last commit. You can use `git restore` in two ways: to restore a single file, or to restore all files changed since your latest commit. To restore one file, you add the file name after git restore, something like this: `git restore src/Components/Hello.js` To restore ALL the files you’ve worked on, you can use the period shorthand by typing this:`git restore .` (that’s git restore followed by a space and then a period — that syntax will become very familiar to you with git!) Of course, in this case, since you’ve only made changes to one file, those two commands will accomplish exactly the same thing. But go ahead — change things in multiple files, whether you understand the code in that file or not. You can’t screw it up, because there’s a copy of this project stored on GitHub, so as long as you don’t commit or push anything, you can do anything you want on your own computer and I’ll never know.

So those are our two commands for today: `git status` and `git restore`  Just spend a few minutes making changes, then typing `git status` to see what message you get, then use `git restore` (either for a single file or for all files) to restore it back to the way it was, then type `git status` again to see that all the files have been restored.Two git commands down…really not that many more to come!



## Lesson 3: 

##### First of all, let’s start with just a few words about the **difference between git and GitHub.** 

They’re similar, and very much intertwined, but still two different things:

**Git is a piece of software.** 

It lives on your computer, and its main purpose is to store your code in a way that allows you to get back to any previous version of your code that you might need. Git therefore is what you’ll hear referred to as a “version control system”. So if you make some changes to your code and commit them, then make more changes to your code and commit…but somewhere along the line discover that you’ve TOTALLY screwed everything up, no sweat…you can always get back to any of the previous versions that you saved (aka committed). 

So git really gives you a lot of freedom to experiment and know that everything’s totally fine! If you get way off-track and can’t find your way back, you just restore to a previous commit and you’re good to try again!

**GitHub, on the other hand, is a service**. 

GitHub exists to allow you to upload into the cloud any info you’ve stored locally in git. Not only is GitHub therefore a bit of a backup system, but more importantly it’s a way for you to be able to share your code with other people, so that they can collaborate on your project, make changes to your code, etc….all while still having that perk of being able to get back to a previous version anytime you want or need to! **In a nutshell: Git is local to your machine, GitHub is in the cloud.** Git is personal to you, GitHub can be shared with others.

**One of the big features of git (and GitHub) is what we call** **branches**. If you’re the only person working on your code, working on branches is not so important. But for this example, let’s imagine that our little Hello app is a million dollar project, and you and I and 283 other people are working on it simultaneously, trying desperately to meet a client’s deadline. Imagine that I decide to make a big change to the Hello.js file on my local machine, and at the same time Carl in Ohio decides to change that same file to something completely different on his machine, and neither of us even realize the other person is working on that file and making changes! Whose changes win out??? 

**The solution to this issue is that we always keep one version of our code as a sort of “bible” version, and we NEVER TOUCH THAT VERSION DIRECTLY!** Instead, when you and I and Carl make our changes, we make COPIES of the “bible” version of the code, and we each work on our own individual copy. And somewhere down the line, only after we’ve all had a chance to look at each other’s changes and come to a decision about which of those changes we’re going to add to the bible version…only then do we alter the bible version! (I guess the constitution might have been a better analogy, with amendments to the constitution…but whatever…I’ve gone this far, we’re sticking with “bible”. LOL) 

All of these copies — the original one, the copy you’re working on, the copy I’m working on, the copy Carl is working on— are called branches. The “bible” branch is generally (by GitHub default) named the **“main” branch**. (A bit of history — until very recently…like 3 or 4 years ago…that “bible” version was always called the “master branch”. But for reasons I’m sure you’re aware of, eventually the master branch went the way of the master bedroom and any other master references in the American English language, and now GitHub by default names it the “main branch”. But in code bases more than a few years old, you might well still see a master branch.) 

Of course, that main branch could just as well be called the george branch or the taffy branch or anything you want…the name doesn’t matter, other than convention. Everyone just needs to know which branch is the “don’t touch this branch” branch. 

So…back to our practice-git project. If you haven’t recently, please do a `git restore . `to return all the files to their original state. Now, type in `git branch` and hit enter. `git branch` will return a list of all the branches that currently reside on your local machine, which right now of course is a grand total of one! You’ll also notice a little asterisk next to the word “main” — that asterisk tells you what branch you’re currently working on. 

**Now let’s create a second branch.** To do that, we type the words “git checkout” followed by a “-b” flag (in git, anytime you see a dash before a letter or word, we call that a flag…dunno why, but you’ll hear that word a lot). And we’ll follow all that with the name you want to give this new branch. Let’s call our new branch “practice”. So, the full command to type in is `git checkout -b practice` The -b flag tells git to CREATE a new branch called “practice”, and “checkout” tells git to move us over into that new branch so we can start working on it. 

After you’ve done that, if you type `git branch` again, you should get a list two items long, with an asterisk next to the practice branch, telling us that that’s the branch we’re currently working on. 

One very important thing to realize — **when you create a new branch, you’re creating a copy of the CURRENT BRANCH YOU’RE WORKING ON WHEN YOU TYPE THAT COMMAND!** So, let’s say you’ve worked for half a day on this “practice” branch and made some commits, then decide you want to try something else on a whole new branch. If you’re on the “practice” branch and type in “git checkout -b new_branch_name”, you’ll be making a copy of the PRACTICE branch, with all the new commits you’ve made, NOT the main “bible” branch. Which might or might not be what you want! Further down the line there actually are uses for that, but at the moment (and most times), we probably want to be branching off the MAIN branch, so we start with a clean copy of the “bible” branch. 

**So, how do we change back to the main branch?**  By using the command `git checkout main` Notice that this time we DON’T use the -b flag, because we don’t want git to CREATE a branch called main — the main branch already exists. We simply want to check out that “main” branch. (No worries — if you forget and inadvertently put in the -b flag, git will throw an error, so you won’t override an already-existing branch.) 

So, for today your task is to practice listing the current branches (`git branch`) creating new branches (`git checkout -b new-branch-name`) and switching between branches (`git checkout branch-you-want-to-switch-to`) Go ahead, create as many branches as you want — there’s no limit (not that I’ve ever met anyway!! I’m pretty sure it’s infinite!) And when you get so many branches you just can’t stand it anymore, **the command to delete a branch is** `git branch -d branch-name` Note that for the delete command to work, you have to NOT be in the branch you’re trying to delete! So before you delete, first do `git branch` to confirm which branch you’re currently in, then if necessary `git checkout some_other_branch` to get yourself into any branch other than the one you want to delete, then `git branch -d branch_you_want_to_delete`

**A small detail you might be wondering about: branch naming conventions.** You can name a branch anything, but generally you’ll want the names to be descriptive, sort of in the spirit of variable names. You certainly CAN name a branch “22A326b”, but no one but you will know what that branch is for (and a year from now when you come back to a project, even you won’t remember what that branch is for!) So it’s far better to name a branch “create-signup-form” or something that describes what issue you’re addressing on that branch. 

The words in a branch name are generally written in lowercase with either hyphens between them (kabob-case) or underscores (snake_case). And eventually you’ll probably add descriptors (like “wip” for work in progress or “bug” for a bug fix, etc.) But those smaller details (like wip and bug) are generally conventions that vary from company to company, so don’t stress about that for now. 

OK, that’s today’s lesson. Do a lot of creating branches and moving around between them to see what happens! One side note — if you make changes to files, and then change between branches without committing (and I’d still prefer you don’t commit anything yet), you might notice some behavior that you wouldn’t necessarily expect. Please don’t worry about that for now — soon we’re going to start delving into the ins-and-outs of committing and things will start to become clearer. You can certainly make changes to any files you want, play around, you won’t hurt anything, but for now also probably good to make use of `git restore .` from time to time if you cause yourself any confusion. One lesson at a time…



## Lesson 4: (commiting part 1)

Next lesson!  We’re finally going to commit something! (Chihiro: since I know you’ve been doing commits for awhile, this lesson may be stuff you already know, but I’m going to send it anyway as I wrote it out for Michael, just in case there’s stuff in here you haven’t come across before. If it’s all old-hat for you, then it’ll just be a really easy lesson! ![:grin:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f601.png))

As you probably know, **a commit is basically you saying to git “yeah, I like the state these files are in right now, I’m ready to commit this version of my project to memory”.** Or even just “I don’t really like the state these files are in right now, but it’s time to get off the computer and eat dinner, and Hideaki said I’m supposed to commit my work at the end of each night, so let’s just do it.”

First, if you made any changes to the main branch (perhaps before we had our little chat about main being the “bible” branch and not modifying it directly) go ahead and restore it to its original glory by doing a `git checkout main` and `git restore .` You can leave or delete any other branches you’ve created — doesn’t matter, well be creating a new branch for this lesson anyway, and the others won’t bother us!

Now let’s create and checkout a new branch — I’m going to call my new branch “commit-something”, but you can call it whatever you want. After you do that, just for good measure, run a quick `git branch` to confirm you’re working on the branch you just created.

Now go to the Hello.js file and change something. Doesn’t matter what -- add onto the message, erase part of what’s there, whatever. Then save the changes you made. At this point, as you know, if you run `git status`, you’ll see a list of files that have been changed, under a message that says “Changes not staged for commit:”

**Git organizes files that have been changed but not yet committed into a few different categories: staged, unstaged, and untracked.** We’ll look at the differences between unstaged and untracked at some point, but for now all you really need to know is that when you run the commit command, the ONLY files that git will save during that commit are the files you’ve added to what’s referred to as the “staging area”.

At the moment, we haven’t moved any of our files into the staging area, so if we tried to run a commit right now, git would tell us that there are no files staged to commit. In order to move any unstaged or untracked files to the staging area, we use the command “git add” followed by either the name of the file you want to stage, or, to move ALL unstaged and untracked files to the staging area, you can use the period shorthand (similar to what we did with the restore command earlier). So, **either something like `git add src/Components/Hello.js` or `git add .`** Go ahead and give that a try, and then run `git status` again to see what’s happened. Hopefully that red, unstaged file will now be green and amongst the list of “Changes to be committed:“.

A bit of a side tangent: I’d say most of the time **you’ll find yourself wanting to to add all the unstaged and untracked files to the staging area, but occasionally there are files you DON’T want to add to git (and more importantly do NOT want to upload to GitHub.)**  

Probably the most common file you will NOT want to add is something called an **.env file**. I won’t go into depth here, but basically an **.env file is where you store any secret keys for your program**. For example, if you want to access Google’s Maps API so you can display cool maps with location markers, you can totally do that, but Google’s going to want you to pay for the privilege of using their Maps API. So in return for your credit card number, Google gives you what’s known as an API key, which your program uses to access Google’s data. (You may or may not have done something like that before in Andrew’s JS class?) 

**What you NEVER want to do is push that API key to GitHub!** There are bad actors out there who build automated programs (called scrapers) that will go through GitHub and other similar services, just looking for the person who slipped up and made their API key public on GitHub, at which point they’ll steal it and use it as their own, and you can wind up trying to fight an enormous bill. So don’t be that person. (There are plenty of not-as-valuable API’s that give away keys for free, and those of course are no big deal — if someone else uses your key the worst you might get is kicked off the service if the “bad actor” abuses the service in some way -- but even so, just make a point of remembering to NEVER push API keys to GitHub!!) 

**Instead, you store those API keys in an .env file and you never commit/push that file to GitHub.** Anyway, that’s about as far as I’ll go on this tangent for now — Andrew can teach you more about it in his React course. ![:slightly_smiling_face:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f642.png) And there are ways to set up procedures to make it hard for you to accidentally commit things you shouldn’t (something called a .gitignore file, for example, which you might already know about). But you get the point, I think — especially when you’re creating a new code base or if you’re working on one you don’t know well, it’s worth actually pausing for half a second to think before you confidently reach for `git add .`

If you DO happen to add a file to the staging area that you don’t want to commit, at this point you’re still not “committed” ![:slightly_smiling_face:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f642.png) Just follow the instructions on the screen, which will tell you **to use “git restore --staged <file>...’” to discard changes in working directory.** **So for us that would be either `git restore --staged src/Components/Hello.js` or `git restore --staged .`**  Also helpful to know: if you need to make changes to a file that you’ve already moved into the staging area, you actually don’t have to unstage it first — **just the act of opening up a file, making some changes and saving the file will automatically move that file out of the staging area.**

**SOMETHING TO NOTICE:** It might have occurred to you that this restore command looks mighty familiar — it’s the command we used earlier to erase all the changes we made to a file! Which is very different than just wanting to move the file out of the staging area! That --staged flag is important! So think about whether you are trying to remove a file from the staging area (and therefore need to use git restore with the --staged flag) or whether you want to scrap all your changes in that file (in which case, no --staged flag). (And I just did a little experiment -- it appears at least there is a safe-guard...thanks, git...if you try to run git restore on a staged file, it won’t let you do it -- you’d have to unstage the file first in order to do a big blanket git restore on the contents of the file. So that’s comforting. But still, **important to realize the difference between `git restore  `and `git restore --staged`**

**SECOND NOTE:** Another syntax think I’m sure you’ve already noticed is that flags that are one letter are preceded by one dash, while full word flags are preceded by two dashes. No idea why, but it’s true. Maybe at some point Andrew or Hideaki had you run a command to check what version of node you you’re using on your machine? **The command for that would be `node --version` or its shortcut `node -v` — those two commands do the exact same thing.** But if using a single-letter flag, one dash, if the flag is a word, two dashes.

That’s Part I of committing files. Go ahead and practice moving files from unstaged/untracked into the staging area with some version of `git add`, and moving them back out with `git restore --staged` And when you’re up for it, we’ll move on to Part II, where we’ll actually commit these files!



## Lesson 5: (commiting part 2)

If you currently don’t have any files in the staging area, go ahead and make some changes to at least one file (or several if you want). Then use some version of `git add` to add the file or files to the staging area.

Now that we have at least one file in the staging area, we’re going to actually do a commit! ![:tada:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f389.png) 

**To commit, you type the command “git commit” followed by an “-m” flag, and then a title (aka message) in quotes.** The -m flag, FYI, is just the easiest way to enter a message with the commit. Adding a message is actually not optional, so if you leave out that step, git will prompt you to enter a message later, which will accomplish the same thing but require more steps. So just use -m and save yourself the trouble later. The quotes around the message can be either single or double. 

Naming-wise, again you want to write a message that’s descriptive, but this time it can be just plain English, with spaces between the words and whatever capitalization you do or don’t prefer. So the whole command might look something like ` git commit -m "fix email input for signup form"`  Again, whatever company you work for will likely have commit message conventions to follow. But for now, write whatever you want.

Now hit enter, and hopefully you’ll get some confirmation about changes made and such. If you run a `git status` now, you should be back to “nothing to commit, working tree clean”. If you do get an error message, check for typos, and also to make sure you used either single or double quotes, and not one of each. (WHYYYYY do I make that same stupid mistake so often????)

Since this part is pretty short, I’m going to introduce you to a couple other fun and useful commands. Before we do that, go ahead and make some changes, to any files, really — doesn’t even matter if you change files that you don’t understand and wind up with code on this branch doesn’t run — we’ve still got that main branch, it’s all good. Just practice changing files, adding them to the staging area, and doing a few commits. Once you have at least several commits on your commit-something branch (so we have something to work with for the next little bit) move on to the next paragraph.

**Now that we know we have a few commits on this branch, we’re going to take a look at the commit history.** 

To do that you simply type the command `git log` and hit enter. 

In response to that command, you’ll get a history of all the commits you’ve made so far on this branch (and two that I made while setting up this project), listed from newest to oldest. If the list is longer than your terminal space (which I kinda hope is the case), press either Enter or the space bar to continue going down the list. When you get to the end of the list, you’ll get a message that says (END). You’d think you’d just hit enter to accept that, and it would exit the git log and go back to a plain terminal prompt, right? You’d think. But you’d be wrong. 

**Just to be annoying, you have to hit `q` (q as in “quit”) to get out of this command.** Embarrassing the number of times I’ve had to google that. (Chihiro: FYI, this view is the same “pager” view that you get with your setup for `git branch` (unless you’ve changed it since we last chatted about that!). In this case, `git log` will very often return a list that is too long for one screen in the terminal, so having the pager view is quite useful. Not so much with `git branch`, IMHO (because generally if you have so many branches you actually need multiple pages to view them all, you probably need to be cleaning house by deleting some of them! LOL. But anyway, this is the same thing...press enter or space bar to proceed through the screens, and `q` to quit out of the view when you’re done.)

**Another useful twist on the `git log` command is the `git log --oneline` command.** Useful because the info you get with a plain `git log` is almost TMI, especially if you have a lot of commits! It requires too much hitting the space bar or enter, too much sorting through the info to find what you need, too much scrolling to compare commits. So go ahead and try both those commands a few times: `git log` and `git log --oneline`

I think one last command for this lesson — after you’ve made at least one commit (probably you already have several on this branch), go back to any file and make some changes, save them, but don’t stage them yet (and, obviously don’t commit them yet). Then try typing in `git diff` 

**Git diff will show you line-by-line the differences in any UNSTAGED files since your most recent commit (won’t work once you stage the files, unless you unstage them first).** And it comes in really sometimes! Yes, you could just do a `git status` and see the names of what FILES you’ve changed since the last commit, but with **`git diff` you’ll get to see line by line what’s changed WITHIN those files**. 

There are a million different options you can use with git diff. As you might expect, doing `git diff src/Components/Hello.js` will show you the differences since the last commit just in that one file. And there are ways to compare your current code with a commit further back (not the latest one) or across branches (between main and commit-someting). But you’ll look options up when the time comes — no need to memorize, just good to know it’s possible, can look up the syntax when you need it.



**In fact, of the commands we’ve covered so far, the ones I’d memorize are:**
`git status`
`git branch`
`git checkout`
`git checkout -b new-branch-name`
`git add`
`git commit -m "message to add to commit"`



The others you can look up if you need them, or in the case of something like restore, git will tell you the syntax right in your terminal when it thinks you might need it! 

Over the coming lessons, there will be maybe another 5-10 commands you’ll want to memorize (I think closer to 5, but I’m hedging my bet ![:grin:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f601.png)) The other commands fall in the “just need to know this is possible, will look it up they syntax when i need it” category, at least for now!

OK, that’s today’s lesson — let me know if any questions, and when you’re ready for the next one!!



## Lesson 6: (reseting history)

OK, next lesson — a short one. Now that you’ve made a few commits and you know how to view your commit history with `git log`, we’re going to very briefly play around with that history a little. 

Perhaps a little against my better judgement…LOL…because believe it or not, you won’t find yourself doing the stuff in this lesson a lot! But I think you’ll enjoy at least having an overall big-picture understanding of it, if only to fill in a few question marks that are probably floating around in your head. So just go through this lesson enough to kinda understand the big picture, and rest easy knowing that that’s sufficient to be able to look up the details and syntax when the time comes. 

Also, there are 50 different ways to do these things, all with pros and cons, which we’re not going to go into right now, so if you read on stackoverflow where someone else would never do it this way or the other way and surely any idiot would know you must do it a particular way…well, just leave it alone for now. 

Big picture…you can choose your “right” way later, if and when you need to.

To start off, do a `git log --oneline` on your commit-something branch to get a list of all your commits. Hopefully there are several by now — if not, make a few. 

The oldest two commits will have the message “Initialize project using Create React App” and “init commit”. Those two steps represent the incredibly brilliant ![:zany_face:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f92a.png) work I did to create this app initially, before you cloned it on GitHub. 

Beyond that you will have your own commits with their own messages.Let’s say we were diligently working on this branch, thought everything was going great, and then somewhere along the line we realized we screwed up big-time, and our greatest wish now is just to erase some number of really embarrassing commits we made, forget they ever happened, and get things back to some previous stage so we can try again!! 

And actually, I’m saying “we”, but in reality this is more a solo act — you’d only ever do this on your own branch, hopefully before ever pushing it to GitHub, and (almost) NEVER on any code that anyone else might have begun collaborating on! 

**Basically once you’ve pushed it to GitHub, just leave it alone and do new commits as necessary** (unless specifically instructed otherwise, which I guess was the case at one of Hideaki’s first jobs, but I think is probably fairly unusual). 

**But while the commit-something branch is still just on your local machine, what you do with it is your business. What happens on your machine stays on your machine**…or something like that.

**The command to rewrite history (or one of the many commands which people will fight over to feel superior) is `git reset` followed by a commit number.** I’m sure you’ve noticed that when you run the command `git log`, for each commit you’ve made there’ll be the word “commit” followed by a very long number (or I guess not really a number…an alphanumeric id of some sort). 

If you do `git log --oneline`, you’ll instead see a much shorter commit id, about 7 characters long. And if you compare the two, you’ll notice that those first 7 characters are identical to the first 7 characters of the longer version of the commit id. 

**For git resetting, either of those two ids will work, so take your pick.** I generally deal with the short version, because why deal with 40 characters when 7 will suffice. But you do you. 

So let’s locate the commit id for the commit titled “init commit”, and highlight and copy that to your clipboard. For me, the short version of that commit’s id is 17ac687 (and since I did that commit before you cloned the repo, I believe it’ll be the same number on your local machine too!) 

Now go ahead and type the command `git reset 17ac687` (or substitute in the number on your machine if necessary) and press enter. 

Now if you do a `git log --oneline` you should be back to just two commits — “Initialize project using Create React App” and “init commit”. As if none of the other commits ever happened. Cool, huh? ![:slightly_smiling_face:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f642.png) And if you now do a `git status` you’ll notice that the files with changes that were just undone by doing that git reset have been moved into the list of unstaged files. At this point, you could add some of those files back into staging, discard what you don’t want, make additional changes to any of the files before re-staging and re-committing them…whatever you want to do.

So that’s how you rewrite history! There’s a lot more to get into, including the concept of resetting the “HEAD”, which we’re not going to get into right now. It’s enough to just understand a little about how reverting to a previous commit works, and why git is referred to as a “version control system”.



## Lesson 7: (pushing to Github)

OK, next lesson — we’re going to actually push some changes to GitHub!

At this point it’s worth pausing for a brief moment to **remember the difference between working locally (git) and working remotely (GitHub)**. 

So far, the only time we’ve involved GitHub in this tutorial is when you cloned the repository that I created on GitHub (our remote repo) onto your local machine (creating your own local repo). All the rest of the work you’ve been doing has been with git on your local machine, and GitHub hasn’t known or cared about anything you’ve done since that day you popped by and cloned the repo. Now it’s time to let GitHub know about all that work you’ve been doing, to re-establish the connection between your local repo (git) and the remote repo (GitHub).

Let’s create a new local branch for this lesson. And this time you and I are going to create separate branches, as if we were both making changes independently on this project. You’ll make your changes on your branch, and I’ll make my changes on my branch, and eventually we’ll show each other our branches and changes, so we can decide to keep all, some, or none.

So go ahead, create and checkout a new branch, naming it whatever you want. I don’t wanna know. Or you can tell me, but I won’t care because I’m going to be working on my own branch named whatever I want! ![:grin:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f601@2x.png)

Once you’ve created that new branch — and, just to be safe, done a `git branch` to make sure you’re working on that new branch -- go ahead and make at least one change…or many changes, your choice!

Once you’ve done that, go ahead and stage any changed files and do a commit. Now when you run git status you should see the message “nothing to commit, working tree clean”. Awesome. 

Now we want to push all the code on our new branch up to GitHub. The command to do that is `git push`. Go ahead, try it. Type `git push` and press enter.

I’m guessing you got an error message starting with “fatal”. (Never a fun thing to read.) “fatal: The current branch your-branch-name has no upstream branch”.

What that message is telling you is that git doesn’t know where you want to push all this code. 

Let’s head over to the browser and go to GitHub, to see what our practice-git repository looks like there. Once you locate and click on the practice-git repository, look down on about the third line and find where it says something like “3 branches” (or however many there are by the time you do this! It’s on the same line as the green “Code” button but further left…second from the left, to be exact) . 

Click on those words “3 branches” and you’ll see a list of all the branches that exist on this repo. The first branch you’ll see is the “main” branch -- obviously we don’t want to push our changes to that branch (per our conversation earlier about having a “bible” branch that you never directly change.)  

After that you might see some other branches with names you don’t recognize, looking like they belong to other people, and we probably shouldn’t be messing around with other people’s work by pushing changes to their branches! So somehow we need to create a new branch in the GitHub repository, where we can push our current changes, without affecting that main “bible” branch or any branches that belong to other people!

Back in your terminal, below that “fatal” message, you should see the message “To push the current branch and set the remote as upstream, use:  `git push --set-upstream origin your-branch-name` ”

The “git push” part of that command is self explanatory…we’re instructing git to push this code up to GitHub.

The next part of the command is “--set-upstream”. 

**Set-upstream tells git that we want to create a link between our local branch and a branch on our remote repository.** If we did a plain `git push`, without any --set-upstream or origin or any of that, we’d be assuming that git already knows what branch of our remote we want this code pushed to. However, since we’re currently pushing code from a branch that we just created, there’s currently no existing link between our new local branch and any remote branch. Set-upstream tells git/GitHub that we’re intending to create that link now.

**The next word “origin” simply refers to your remote repository.** Why didn’t they just call it “remote” instead of “origin”? I dunno. Seems like that would have been less confusing. But I’m sure they had their reasons. Your remote repository (aka our GitHub practice-git repository) will hereby be referred to as “origin”. I suppose you could think of it as “the origin of this code”, since the practice-git repo on Github is where you “origin-ally” cloned this app from. Or that might be too cute. ![:zany_face:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f92a@2x.png) Whatever — use whatever mental trick you need to, just remember that “origin” equals “remote”. (An annoying side-note to tuck away for later, because nothing in life or git can ever be simple: we’re talking here about “origin” as a standalone word, which equals “remote”. If you see something like origin/main, with the slash, looking more like a file path, that’s different…but let’s not worry about that for now. For now I’m talking about the standalone word “origin”. origin = remote )

And finally, after that (standalone word) “origin”, there’s the name of a remote branch that you want to link to your current local branch. If a remote branch by the name you indicate here already exists in your GitHub repo, a link will be created between your local branch and that already-existing remote branch. If a remote branch by that name doesn’t yet exist (which is normally the case), a remote branch by that name will automatically be created on GitHub when you run this command. In terms of choosing a name for that remote branch, your local branch and your remote branch don’t HAVE to be named the same thing, but just for the sake of clarity and your sanity, they generally are. (Don’t make things more complicated than they already are — it’s bound to come back to bite you! ![:zany_face:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f92a@2x.png))

So, go ahead and copy that command (or type it out) `git push --set-upstream origin your-branch-name` (obviously changing “your-branch-name” to whatever the name of your new branch is) and press enter. Git and GitHub will do their communicating, and after all’s said and done, you should wind up with a message that says something like: Branch ‘your-branch-name’ set up to track remote branch ‘your-branch-name’ from ‘origin’. Git’s technical communication skills could use some work, but we get the point.

Now let’s head back over to the browser, to the practice-git repo in your GitHub account, and take a look at that branch list again. (Might need to refresh the page if you were already on the page with the branch list).  Voilá…a new branch! ![:blush:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f60a@2x.png)![:+1:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f44d@2x.png)  And if you click on your-branch-name, you’ll see that all the files from the branch in your local repo now also exist in the corresponding branch on your remote repo! SUCCESS! You’ve created a local branch, then created a remote branch with a link to your local branch and pushed all the code from your local branch onto the newly-linked remote branch! That’s a lot!



##### Before we go, just a couple important FYIs:

- FYI #1, you only have to set-upstream ONCE in the lifespan of a branch. Once it’s set, it’s set! From now on, if you make new commits on that same local branch and want to push them to the already-linked upstream remote branch, you only need to use the command `git push` No need to keep re-setting the upstream with each git push! At whatever point you create a NEW branch, you’ll have to --set-upstream again for that new branch. But for any branch for which you’ve already set the upstream, you’re good to go — just `git push` from now on.

- FYI #2, the “shorthand version” of `git push --set-upstream origin your-branch-name` is `git push -u origin your-branch-name` And that’s the version you will see much more frequently on places like StackOverflow. That `-u` flag is the exact same thing as the more verbose `--set-upstream` flag. And since typing `--set-upstream` eventually gets a little annoying, people tend to use the shorthand version a lot. Use whichever one you prefer -- just wanted you to recognize the shorthand version when you see it and know that those two commands accomplish the exact same thing.

Feel free to practice this with as many new branches as you want. I can go in and eventually delete some or archive them or whatever, so don’t worry about “polluting the space” on GitHub. In fact, it’s quite common to have a lot of “dead” branches on GitHub that people started working on and abandoned. It’s totally fine, and this --set-upstream concept is one you’ll use a lot, so it’s worth making sure you’re comfortable with it.

Note: before you finish up this lesson, in preparation for the next one, please have at least one branch pushed to GitHub with changes that don’t break the application — as in, make sure on that branch that when you run `npm start` the application still runs in the browser. LOL But you can add any text you want, or make changes to the CSS anywhere in the app, or even add a new component if you want! ![:grin:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f601@2x.png)![:+1:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f44d@2x.png) As long as the app still runs, it’s all good. 

For any other branches you push while practicing, it doesn’t matter, and for the record, in real-world situations, it’s completely acceptable to push code that doesn’t run! (Perhaps you’d do that if you wanted to show your code to someone else to get input on an issue that you haven’t been able to resolve, etc. Totally fine.)

OK, enough for this lesson. Let me know if any questions, and let me know when you’re ready for the next one!



## Lesson 8: (pull request)

Great job on the last lesson — I do see your new branch in the practice-git repo. ![:tada:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f389.png)![:clap:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f44f.png) ![:slightly_smiling_face:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f642.png) And I swear we’re ALMOST done! ![:grin:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f601.png) There’s really only one more concept I want to introduce you to, before we say “enough git for now!”  So this next bit today is going to be a super-quick mini lesson. In fact, you’ll really just need to read through this lesson to get the concept (it’s easy), and do one small task that will take mere minutes.

At this point in our collaboration on this mock-project, you and I have both been making changes on our own separate branches, on our local machines, and we’ve both pushed those individual branches up to the GitHub repository. None of our branches know about each other yet, and the main branch (aka bible branch) is still untouched.

What happens next is that we’d each create something on our own branch(es), called a “pull request”. (You may also hear the term “merge request” — same thing.) 

**A pull request is a request to have the code you’ve written on your own branch(es) reviewed, and, if approved, pulled into the main branch and merged, at which point the code you’ve written would officially become part of the project.** Woo-hoo! So let’s give that a try.

1. First, go to your GitHub page and find the practice-git repository. Then, as you did before, click on the word “branches” to see the list of all existing branches on the project. Under the section labeled “Your branches”, you should see any branch(es) that you’ve created. And for each branch, over on the right hand side you’ll see a button that says “New Pull Request”.

2. Choose which branch you’d like to have reviewed to be merged into the main 		branch. Then go ahead and click the “New Pull Request” button for that branch.

3. Now you’ll be directed to a form to fill out. The first line of the form will be a title, which by default will probably be pre-filled in with whatever you wrote as the message for your latest commit. That may be good enough, but feel free to take this opportunity to change it to something even better — perhaps something a little more descriptive if necessary. Something like “Re-styling the buttons on the sign-up page” could be good, or...well, really anything that you think would be helpful for the person reviewing this pull request.

4. Under that is a box that says “leave a comment”. You can leave that box empty if you want, but you’re also welcome to write anything you’d like to communicate to the person who will reviewing your code. Perhaps you’d like to mention parts of the code you have questions about, etc. Feel free to write as much as you need to! If you want to be fancy, you could write your comments in markdown (hint: if you can’t remember markdown syntax, check out the buttons over on the right hand side above the “leave a comment” box!) Or you can even use some basic html tags -- try putting something in an <h1> tag, for example. But it’s also fine to just use plain text!

5. When you’re finished filling out the form, push “Create pull request”. Done! ![:white_check_mark:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/2705.png)



By the way, it’s perfectly fine to create a pull request on a branch that you’re completely aware is not ready to be merged. It’s still valuable to create a pull request, since doing so actually provides some tools to the person reviewing your code, enabling them to be able to compare your branch to the main branch in some helpful ways. And it’s their job not to approve it until they think it’s ready to go, so no worries about that. 

Often, if it’s a branch I know is not actually ready to be merged, I’d start the title of my pull request with “WIP” (which stands for “work in progress”) just to be clear that I realize the branch still needs work before it’s ready to be merged. The company you’re working for will likely have procedures they want you to follow for pull requests, so you’ll just follow those when the time comes. And FYI, you can also continue to push commits to a branch that you’ve already created a pull request on, without having to cancel that pull request first. Or it IS easy enough to cancel a pull request if you feel that’s more appropriate (perhaps if, after the maintainers review it, you realize you want to go in a completely different direction and start over by creating a new branch). But it’s also fine and perfectly normal to just leave the pull request intact, while still continuing work on the branch. Again, you’ll follow whatever protocols your company requires.

OK, that’s it for now — just do a quick pull request (aka merge request) when you have a chance, and we’ll get on to the next (and I think ALMOST final) concept!