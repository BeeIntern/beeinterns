clear
rm -rf repo2&&\
(
git clone repo repo2
cd repo2&&\
echo 'console.log("hello Beeline!")'>programm.js&&\
git add .&&\
git commit -m 'version 4'&&\
git push origin master:test || true&&\
git pull origin test&&\
git log&&\
ls
)