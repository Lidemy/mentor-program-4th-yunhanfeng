## 跟你朋友介紹 Git

GIT是用來做版本控制的工具(程式)。可以用資料夾的邏輯觀念思索版本控制，像是把所有跟某專案相關的檔案放進一個資料夾，然後每次有改動就是複製整個資料夾到第二版、第三版，以此類推。而資料夾外的檔案則可以當作母版，為可以不用加入版本控制的檔案。而這些版數的名稱通常是亂數，這樣可以避免重複。

接下來介紹一些基礎的git指令。

1. git init: start version control on a folder
2. git status: check git status
3. git add: decide which file to add in git version control
4. git rm --cached: remove file from version control
5. git commit: commit the new version (finalize this version)
6. git log: see the history of git commit
7. git commit -am "string": add message to the commit

版本控制的推拉，為整個版本的改動，正式進入協作的過程，這個過程通常會搭配Github進行操作。Github即為Git + hub，為存放版本控制的地方。我們可以透過以下兩個指令，讓我們本機端的改動和遠端Github互動，分別為Push / Pull，優化整個協作流程。

1. Push: 將commit後的改動推到遠端的master branch
2. Pull: 將遠端的改動拉到本機端

以上就是基礎的Git介紹。