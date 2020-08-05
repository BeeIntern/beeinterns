https://git-scm.com/book/ru/v2
https://learngitbranching.js.org/

#1st part- Basics

1.1 Introduction to Git Commits

git commit; git commit

1.2 Branching in Git

git branch bugFix; git checkout bugFix

1.3 Merging in Git

git checkout -b bugFix; git commit; git checkout master; git commit; git merge bugFix

1.4  Rebase Introduction

git checkout -b bugFix; git commit; git checkout master; git commit; git checkout bugFix; git rebase master

2.1 Detach yo’ HEAD

git checkout C4

2.2 Relative Refs (^)

git checkout C4^

2.3 Relative Refs #2 (~)

git branch -f master C6; git branch -f bugFix C0; git checkout C1

2.4 Reversing Changes in Git

git reset local~1; git checkout pushed; git revert pushed

3.1 Cherry-pick Intro

git cherry-pick C3 C4 C7

3.2 Interactive Rebase Intro

git rebase -i master~4 --aboveAll  3 5 4

4.1 Grabbing Just 1 Commit

git checkout master; git cherry-pick C4

4.2 Juggling Commits

git rebase -i caption~2 --aboveAll
git commit --amend
git rebase -i caption~2 --aboveAll
git branch -f master caption

4.3 Juggling Commits #2

git checkout master; git cherry-pick C2; git commit --amend; git cherry-pick C3

4.4 Git Tags

git tag v0 C1; git tag v1 C2; git checkout C2

4.5 Git Describe

git commit

5.1 Rebasing over 9000 times

git rebase master bugFix; git rebase bugFix side; git rebase side another; git rebase another master

5.2 Multiple Parents

git branch bugWork master~^2~

5.3 Branch Spaghetti

git checkout one; git cherry-pick C4 C3 C2; git checkout two; git cherry-pick C5 C4 C3 C2; git branch -f three C2



2nd part = Repositories

1.1 Clone Intro

git clone

1.2 Remote Branches

git commit; git checkout o/master; git commit

1.3 Git Fetchin’

git fetch

1.4 Git Pullin’

git pull

1.5 Fakeing Teamwork

git clone; git fakeTeamwork master 2 ; git commit ; git pull

1.6 Git Pushin’

git clone; git commit; git commit; git push

1.7 Diverged History

git clone; git fakeTeamwork; git commit; git pull —rebase; git push

1.8 git reset --hard o/master; git checkout -b feature c2; git push origin feature
2.1 Push Master!

git fetch; git rebase o/master side1; git rebase side1 side2; git rebase side2 side3; git rebase side3 master; git push

2.2 Mering with remotes

git checkout master; git pull; git merge side1; git merge side2; git merge side3; git push

2.3 Remoting Tracking

git checkout -b side o/master; git commit; git pull --rebase; git push

2.4 Git push arguments

git push origin master; git push origin foo

2.5 Git push arguments — Expanded!

git push origin master~1:foo; git push origin foo:master

2.6 Fetch arguments

git fetch origin master~1:foo; git fetch origin foo:master; git checkout foo; git merge master

2.7 Source of nothing

git push origin :foo; git fetch origin :bar

2.8 Pull arguments

git pull origin bar:foo; git pull origin master:side


*******

#https://learngitbranching.js.org/?locale=ru_RU

Введение
Хорошо подобранное введение в основные команды git



1: Знакомство с Git Commit
2: Ветвление в Git
3: Слияния веток в Git
4: Введение в rebase

git commit

Ветвление 

создание новой ветки
git branch newImage

Переключение. переход на ветку и коммит в новой ветке
git checkout newImage; git commit


## "Слияния веток в Git"?

слияние веток
мердж ветки bugFix в ветку master
git merge bugFix

смерджим ветку master в ветку bugFix
git checkout bugFix; git merge master

==============
Чтобы пройти этот уровень, сделай следующее:

Создай новую ветку под названием bugFix
*git branch bugFix
Переключись на новую ветку bugFix командой git checkout bugFix
Сделай один коммит
*git checkout bugFix; git commit
Вернись на ветку master при помощи git checkout
Сделай ещё один коммит
*git checkout master; git commit
Слей ветку bugFix с веткой master при помощи git merge
*git merge bugFix


Если что-то пошло не так - можешь подглядеть в эту шпаргалку командой "objective"!*

6-step solution
git branch bugFix; git checkout bugFix; git commit; git checkout master; git commit; git merge bugFix

5-step
git checkout -b bugFix; git commit; git checkout master; git commit; git merge bugFix


==============
Git Rebase
Второй способ объединения изменений в ветках - это rebasing. При ребейзе Git по сути копирует набор коммитов и переносит их в другое место.

Несмотря на то, что это звучит достаточно непонятно, преимущество rebase в том, что c его помощью можно делать чистые и красивые линейные последовательности коммитов. История коммитов будет чище, если вы применяете rebase.

Посмотрим, как это работает...


Чтобы пройти этот уровень, сделай следующее:

Переключись на ветку bugFix
Сделай коммит
Вернись на master и сделай коммит ещё раз
Переключись на bugFix и сделай rebase на master
Удачи!
git checkout -b bugFix; git commit; git checkout master; git commit; git checkout bugFix; git rebase master

==============
==============
==============
Едем дальше
Следующая порция абсолютной git-крутотенюшки. Проголодались?

1: Теряем голову, или detached HEAD


2: Относительные ссылки (^)

3: Относительные ссылки №2

4: Отмена изменений в Git

HEAD
В первую очередь, поговорим о "HEAD". HEAD - это символическое имя текущего выбранного коммита — это, по сути, тот коммит, над которым мы в данным момент работаем.

HEAD всегда указывает на последний коммит из вашего локального дерева. Большинство команд Git, изменяющих рабочее дерево, начнут с изменения HEAD.

Обычно HEAD указывает на имя ветки (например, bugFix). Когда вы делаете коммит, статус ветки bugFix меняется и это изменение видно через HEAD.

Detaching HEAD
Отделение (detaching) HEAD означает лишь присвоение его не ветке, а конкретному коммиту. Посмотрим, что было до отделения:

HEAD -> master -> C1


А вот что получилось теперь

HEAD -> C1

=
Чтобы пройти уровень, давай отделим HEAD от ветки bugFix и присвоим его последнему коммиту в этой же ветке.

Укажи коммит при помощи его идентификатора (hash). Hash для каждого коммита указан в кружке на схеме.
git checkout C4



==============

Для начала рассмотрим оператор каретки (^). Когда мы добавляем его к имени ссылки, Git воспринимает это как указание найти родителя указанного коммита.

Так что master^ означает "первый родитель ветки master".

master^^ означает прародитель (родитель родителя) master

Давайте переключимся на коммит Выше master
git checkout master^

Опачки! Готово. Сильно проще, чем поиск и указание хеша.

=
Можно также использовать HEAD как относительную ссылку. Попробуем пройти несколько раз назад по дереву коммитов
git checkout C3; git checkout HEAD^; git checkout HEAD^; git checkout HEAD^;git checkout HEAD^;

Изи! Мы можем путешествовать во времени при помощи HEAD^
=

Чтобы пройти этот уровень, переместись на первого родителя ветки bugFix. Это отделит HEAD от ветки.

Конечно, можно указать хеш, но надо попробовать использовать относительные ссылки!

git checkout bugFix^

=

Оператор "~"
Предположим, нужно переместиться на много шагов назад по дереву. Было бы неудобно печатать ^ несколько раз (или несколько десятков раз), так что Git поддерживает также оператор тильда (~).

К тильде (опционально) можно добавить количество родительских коммитов, через которые нужно пройти. Посмотрим, как это работает.

Укажем после ~ число коммитов, через которые надо пройти.


Оп! Очевидно, относительные ссылки прекрасны.

git checkout HEAD~4

=
Перемещение ветки (branch forcing)
Теперь мы разбираемся в относительных ссылках, так что можно реально использовать их для дела.

Одна из наиболее распространённых целей, для которых используются относительные ссылки - это перемещение веток. Можно напрямую прикрепить ветку к коммиту при помощи опции -f. Например, команда:

git branch -f master HEAD~3

Переместит (принудительно) ветку master на три родителя назад от HEAD.


 Git демо
Посмотрим, как работает эта команда
git branch -f master HEAD~3

Вуаля! Относительная ссылка дала нам возможность просто сослаться на C1, а branch forcing (-f) позволил быстро переместить указатель ветки на этот коммит.

=
Мы рассмотрели относительные ссылки и branch forcing вкупе, так что теперь пришло время пройти следующий уровень.

Чтобы пройти этот уровень, передвинь HEAD, master и bugFix так, как показано на визуализации.


git branch -f bugFix c0; git branch -f master c6; 

git branch -f bugFix HEAD~3; git branch -f master c6; git checkout c1

=======
Отмена изменений в Git
Есть много путей для отмены изменений в Git. Так же как и коммит, отмена изменений в Git возможна и на низком уровне (добавление в коммит отдельных файлов и наборов строк), и на высоком (как изменения реально отменяются). Сейчас сфокусируемся на высокоуровневой части.

Есть два основных способа отмены изменений в Git: первый - это git reset, а второй - git revert. Попробуем оба на следующем шаге.

=
Git Reset
git reset отменяет изменения, перенося ссылку на ветку назад, на более старый коммит. Это своего рода "переписывание истории"; git reset перенесёт ветку назад, как будто некоторых коммитов вовсе и не было.

Посмотрим, как это работает:
git reset HEAD~1

Неплохо! Git просто перенёс ссылку на master обратно на коммит C1. Теперь наш локальный репозиторий в состоянии, как будто C2 никогда не существовал.

Git Revert
Reset отлично работает на локальных ветках, в локальных репозиториях. Но этот метод переписывания истории не сработает на удалённых ветках, которые используют другие пользователи.

Чтобы отменить изменения и поделиться отменёнными изменениями с остальными, надо использовать git revert. Посмотрим, как это работает


git revert HEAD


=
Чтобы пройти этот уровень, отмени два последних коммита и в local, и в pushed

Помни, что pushed - это remote ветка, а local - это локальная ветка. Это поможет выбрать способ отмены изменений.

git reset c1; git checkout pushed; git revert pushed
=======



Git Cherry-pick
Первая из таких команд - это git cherry-pick. Она выглядит вот так:

git cherry-pick <Commit1> <Commit2> <...>
Это очень простой и прямолинейный способ сказать, что ты хочешь копировать несколько коммитов на место, где сейчас находишься (HEAD). Мы обожаем cherry-pick за то, что в нём очень мало магии и его очень просто понять и применять.

Посмотрим на демонстрацию.


Вот репозиторий, где есть некие изменения в ветке side, которые мы хотим применить и в ветку master. Мы можем сделать это при помощи команды rebase, которую мы уже прошли, но давай посмотрим, как cherry-pick справится с этой задачей.
git cherry-pick c2 c4

Вуаля! Мы хотели перенести коммиты C2 и C4, Git дал нам их там, где они нужны. Всё просто!


Чтобы пройти этот уровень, просто скопируй изменения из этих трёх веток в мастер. Чтобы понять, какие коммиты копировать, посмотри на визуализацию уровня.



Чтобы пройти этот уровень, просто скопируй изменения из этих трёх веток в мастер. Чтобы понять, какие коммиты копировать, посмотри на визуализацию уровня.

git cherry-pick c3 c4 c7

========

Всё, что нужно для интерактивного rebase - это опция -i

Если добавить эту опцию, Git откроет интерфейс просмотра того, какие коммиты готовы к копированию на цель rebase (target). Также показываются хеши коммитов и комментарии к ним, так что можно легко понять что к чему.

Для "реального" Git, этот интерфейс означает просто открытие файла в редакторе типа vim. Для этой обучалки, я сделал небольшое диалоговое окно, которое по сути делает то же, что и редактор.

=
После нажатия на эту кнопку появится окно интерактивного rebase. Переставь несколько коммитов (или удали кое-какие) и посмотри, что получится в итоге!

git rebase -i HEAD~4

Бах! Git скопировал коммиты в точности так, как было указано через интерфейс!
=
Чтобы пройти этот уровень, переставь коммиты при помощи интерактивного rebase в таком порядке, как указано на визуализации. На всякий случай, помни, что всегда можно исправить ошибку, вызвав команду undo или reset.
git rebase -i c3 c5 c4




========


Вот ситуация, которая часто случается при разработке: мы пытаемся отследить ошибку, но она не очень очевидна. Для того, чтобы достичь успеха на этом поприще, мы используем несколько команд для отладки и вывода

Каждая отладочная команда (команды) вывода находится в своём коммите. В итоге мы нашли ошибку, исправили её и порадовались!

Но проблема в том, что мы хотим добавить в master только исправление ошибки из ветки bugFix. Если мы воспользуемся простым fast-forward, то в master попадут также отладочные команды. Должен быть другой способ...

=
В этом уровне тебе решать, какую команду использовать, но чтобы закончить уровень, убедись, что в мастер попал коммит, на который ссылается bugFix

git rebase -i c4
git pick-cherry c4;

git branch -f bugFix c1


git checkout master; git cherry-pick c4


=
Преодолеть эти трудности можно следующим образом:

Переставить коммит так, чтобы нужный находился наверху при помощи git rebase -i
Внести изменения при помощи commit --amend
Переставить всё обратно при помощи git rebase -i
И наконец, переместить master на изменённую часть дерева, чтобы закончить уровень.
Это задание можно выполнить несколькими способами (и, гляжу, ты посматриваешь на cherry-picking), но сейчас сосредоточься на вышеописанном методе.

Обрати внимание на итоговое состояние в этом уровне – так как мы дважды перемещаем коммиты, оба они получат по апострофу. Ещё один апостроф добавляется, когда мы делаем commit --amend.

Важно, чтобы совпадало не только дерево коммитов, но и количество апострофов.
git rebase -i HEAD~2 C3,C2
git commit --amend
git rebase -i HEAD~2 C2'',C3'
git rebase caption master



git checkout master; git cherry-pick C2; git commit --amend; git cherry-pick C3

$ git checkout master
$ git cherry-pick C2
$ git commit --amend
$ git cherry-pick caption



$ git rebase -i master
$ git commit --amend
$ git rebase -i master
$ git branch -f master caption
==


Итак, в этом уровне нужно достичь того же эффекта, но без использования rebase -i. Остальное – по усмотрению.

Важно, чтобы совпадало не только дерево коммитов, но и количество апострофов.

git checkout master; git cherry-pick C2; git commit --amend; git cherry-pick C3

========
Теги
В прошлых уроках мы усвоили, что ветки просто двигать туда-сюда и они часто ссылаются на разные коммиты как на изменения данных в ветке. Ветки просто изменить, они часто временны и постоянно меняют своё состояние.

В таком случае, где взять постоянную ссылку на момент в истории изменений? Для таких вещей, как релиз, большие слияния нужно нечто более постоянное, чем ветка.

=
Такое средство имеется. Git предоставляет нам теги, чья основная задача – ссылаться постоянно на конкретный коммит.

Важно, что после создания они никогда не сменят своего положения, так что можно с лёгкостью сделать checkout конкретного момента в истории изменений

Посмотрим на это на практике.

=
Создадим тег на C1, который будет нашей версией 1


Готово! Всё просто. Мы назвали тег v1 и заставили его ссылаться на C1 явным образом. Если конкретный коммит не указан, гит пометит тегом HEAD

git tag v1 c1

=

Чтобы пройти этот уровень, просто создай теги так, как показано на визуализации, и потом перейди на тег v1. Обрати внимание, что ты перейдёшь в состояние detached HEAD, так как нельзя сделать коммит прямо в тег v1.

В следующем уровне мы попробуем более интересные способы применения тегов.
=
git tag v1 c2; git tag v0 c1; git checkout c2 

========

Git Describe
Теги являются прекрасными ориентирами в истории изменений, поэтому в git есть команда, которая показывает, как далеко текущее состоянии от ближайшего тега. И эта команда называется git describe

Git describe помогает сориентироваться после отката на много коммитов по истории изменений. Такое может случиться, когда вы сделали git bisect или если вы недавно вернулись из отпуска =)


=

 Git демо
Посмотрим на простой пример. Для дерева, показанного ниже:


Команда git describe master выведет:

v1_2_gC2

Тогда как git describe side выведет:

v2_1_gC4
git tag v2 c3


=

Это, в общем-то, всё, что можно сказать про git describe. Попробуй выполнить команду на нескольких коммитах.

Как только наиграешься, просто сделай один коммит, и уровень будет пройден.


git checkout bugFix; git commit

git describe c6; git commit


========


Rebase на нескольких ветках
У нас тут куча веток! Было бы круто перенести все изменения из них в мастер.

Но начальство усложняет нашу задачу тем, что желает видеть все коммиты по порядку. Так что коммит С7' должен идти после коммита С6' и так далее.

Если что-то пойдёт не так – не надо стесняться использовать reset, чтобы начать всё с чистого листа. Постарайся сделать как можно меньше манипуляций!

=


git rebase master bugFix
git rebase bugFix side
git rebase side another
git rebase another master


=

Определение родителей
Так же как тильда (~), каретка (^) принимает номер после себя.

Но в отличие от количества коммитов, на которые нужно откатиться назад (как делает ~), номер после ^ определяет, на какого из родителей мерджа надо перейти. Учитывая, что мерджевый коммит имеет двух родителей, просто указать ^ нельзя.

Git по умолчанию перейдёт на "первого" родителя коммита, но указание номера после ^ изменяет это поведение.

Посмотрим, как это работает.

=Вот мерджевый коммит. Если мы перейдём на master^ без номера, то попадём на первого родителя.

(На нашей визуализации первый родитель находится прямо над коммитом)


git checkout master^
git checkout master^2

дификаторы ^ и ~ сильно помогают перемещаться по дереву коммитов:



git checkout HEAD~; git checkout HEAD~2;git checkout HEAD~2

Более того, эти модификаторы можно применять вместе. Например, так:
git checkout HEAD~^2~2
Сделаем то же самое, что перед этим, только в одну команду.

На практике
Чтобы пройти этот уровень, создай ветку в указанном месте.

Очевидно, что (в данном случае) будет проще указать коммит напрямую, но для того, чтобы закрепить пройденное, используй модификаторы, о которых мы говорили выше.

git branch bugWork c2

===


Спутанные ветки
УОУ! В этом уровне придётся попотеть!

У нас тут по несколько коммитов в ветках one, two и three. Не важно почему, но нам надо видоизменить эти три ветки при помощи более поздних коммитов из ветки master.

Ветка one нуждается в изменении порядка и удалении C5. two требует полного перемешивания, а three хочет получить только один коммит

Как пройти этот уровень – решать тебе, а как найдёшь решение – сравни его с нашим при помощи show solution.


git checkout one
git cherry-pick C4 C3 C2
git checkout two
git cherry-pick C5 C4 C3 C2
git branch -f three C2

show solution
https://github.com/saivittalb/learn-git-branching-solutions/blob/master/MainCategorySolutions


show solution
reset 
undo





https://docs.google.com/spreadsheets/d/1WXh5zUdQRNoduXMby--A6P_hevbZdGOuLYxz41W5e_Y/edit#gid=0
https://github.com/s-tarasov/beeinterns-git-team/blob/master/%D0%A0%D0%BE%D0%BB%D0%B8/%D0%A2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D1%89%D0%B8%D0%BA.txt
https://docs.google.com/presentation/d/1xSj_ENk7KGqyY_r6Aat75yqJvlw_O-KOVVXjC8BAXi8/edit#slide=id.p6
https://docs.google.com/presentation/d/11bmlHDcSZTmK2pqlsfykcysgA47G79IKMDwlnHy7lVA/edit#slide=id.p1

sourcetree - отличное приложение для визуализации веток git
gitflow

gitlab если свой процесс поднять 
bitbucket


