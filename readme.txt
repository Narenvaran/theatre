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