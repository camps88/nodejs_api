# nodejs_api
Code for API in NodeJS

--Commands 1 time:
git init
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
git remote add origin https://github.com/YOUR_USERNAME/YOUR_FORK.git
git remote -v

--Commands adding changes to upstream
git pull upstream master (actualiza Local desde UPSTREAM)
git merge upstream/master (actualiza Local desde UPSTREAM sin perder cambios)
git fetch upstream (actualiza ORIGIN desde UPSTREAM)
git add nombrefichero
git commit -m comentario
git checkout master
git push origin master (actualiza ORIGIN desde Local)
git push upstream master (actualiza UPSTREAM desde Local)
