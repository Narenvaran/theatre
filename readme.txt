languages used

Angular CLI: 9.1.0
Node: 10.16.0

Ivy Workspace: 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.901.0
@angular-devkit/core         9.1.0
@angular-devkit/schematics   9.1.0
@schematics/angular          9.1.0
@schematics/update           0.901.0
rxjs                         6.5.4


bootstrap@4.4.1

Git Commands

A.) Git command to clone repository into local

git clone -b <<BRANCH>> <<REPOSITORY_URL>>
git clone -b master https://github.com/Narenvaran/theatre.git

B.) To save the file from local:-

1.navigate to the working folder with the following command
"cd <<WORKING_FOLDER>>"

2.Initialize git with the following command
"git init"

3.To get the status of files in that folder(whether commited or not),use following command
"git status"

4.To add all the files and folders inside the current directory,use following command
"git add ."

5.To remove a specific folder which is added (ex: node_modules folder),use following command
"git rm --cached -r node_modules"

6.To remove a specific folder automatically,create a file called ".gitignore" in the folder "web-server"
   add the folder or file names inside the ".gitignore" file to remove it automatically.

7.Enter "git add." to include the newly created ".gitignore" file.

8.To commit all the files under the web-server folder,use following command
git commit -a -m "<<comment>>" .

9.To commit to the git hub repository, use the following command "git push -u origin master".




Deploying a project

Deployment Setup in local

1.Installing Firebase
->Install firebase client from https://firebase.google.com/docs/cli#install-cli-windows

2.Go to any command propmpt and install firebase tools with the following command (global setup)
npm install -g firebase-tools

3.Check whether it is insatlled properly with the following command 
firebase --help


Things to do online
1.Go to firebase site https://firebase.google.com/

2.Click go to console button

3.Create a project


Things to do in the local
1.Ready the environment variables

2.ng build --prod

3.Go into your project

-> firebase login
-> firebase init

Then give Y to the question asked to be proceed
Select only the hosting option as we are hosting only
Select the project that is created online for this local project to link

?What do you want to use as your public directory? dist/event-creation-proj   // where this is folder inside the dist folder created  in your project while ng build --prod
? Configure as a single-page app (rewrite all urls to /index.html)? Y 
? File dist/event-creation-proj/index.html already exists. Overwrite? N

->firebase deploy

Project Console: https://console.firebase.google.com/project/event-creation-proj/overview
Hosting URL: https://event-creation-proj.firebaseapp.com

Hosting Url is the url to access the application