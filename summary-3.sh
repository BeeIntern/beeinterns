clear
(cd repo&&\
git branch test&&\
git status&&\
echo 'console.log("hello interns2!")'>programm.js&&\
git add .&&\
git commit -m 'version 3'&&\
git log&&\
git checkout test&&\
echo 'console.log("happy new yahr!")'>programm.js&&\
git add .&&\
git commit -m 'version new yahr'&&\
git log&&\
git checkout master&&\
git merge test || true&&\
echo 'console.log("happy new yahr interns2!")'>programm.js&&\
git add .&&\
git commit -m 'fix merge conflicts'&&\
git log --graph&&\
ls
)