clear
(cd repo&&\
find .git/objects -type f&&\
git cat-file --batch-check --batch-all-objects&&\
git cat-file -t 1e06bbe16ed626f52096177b3b7bc64b8ced417d	
git cat-file -p 1e06bbe16ed626f52096177b3b7bc64b8ced417d	
ls -a)