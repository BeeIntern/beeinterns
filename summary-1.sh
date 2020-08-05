clear
rm -rf repo&&\
(mkDir repo&&\
cd repo&&\
echo 'console.log("hello world!")'>programm.js&&\
node programm.js
git init&&\
git status&&\
git add .&&\
git status&&\
git commit --m 'init'&&\
git status&&\
git log&&\
echo 'console.log("hello interns!")'>programm.js&&\
node programm.js
git status&&\ 
git add .&&\
git status&&\
git commit --m 'change hello message'&&\
git log&&\
git blame programm.js&&\
ls -a)