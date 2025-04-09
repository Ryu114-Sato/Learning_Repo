# Git

## [クイックスタート](https://docs.github.com/ja/github-cli/github-cli/quickstart#github-cli-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)

### [※リポジトリの保護](https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository)

1. リポジトリ作成

- [参考 URL](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

  1.  コマンドで作成

      - gh repo create [<name>] [flags]

      - リポジトリを対話的に作成するには、gh repo create 引数なしで使用します。
      - [参考](https://cli.github.com/manual/gh_repo_create)

  2.  WEB UI から作成
      -

2. Clone 　 Repository

- echo "# Magonote_App" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/Ryu114-Sato/Magonote_App.git
- git push -u origin main

- git clone https://github.com/Ryu114-Sato/skills-introduction-to-github.git
- git add filename

- git commit -m " comment "

- git push

## リポジトリの状態確認

- $ git status
  _未ステージング、ステージング、コミットなどの状態を表示する。_

- $ git branch
  _ローカルのブランチのみ_

- $ git branch -a
  _origin のブランチも含めて表示する場合_

- $ git checkout feature/<ブランチ名>
  _作業対象のブランチに切り替える_

- $ git branch -a
  - origin のブランチも含めて表示する場合

## 作業ブランチ作成：

- $ git checkout develop # ブランチ作成元(develop)をチェックアウト
- $ git fetch # origin の最新状態を取得する
- $ git pull # origin/develop をローカルに反映(fast forward マージになるはず)
- $ git branch feature/<ブランチ名> # ブランチ作成
- $ git checkout feature/<ブランチ名> # 作成したブランチを作業対象にする

## ローカルブランチ削除

- $ git checkout develop # 削除対象から他のブランチに移動
- $ git branch -D feature/<branch 名>

## 未ステージング、ステージング、コミットなどの状態を表示する。

- $ git status

## コミット履歴を見る

- $ git log

## origin のコミット状態を取得する。

- $ git fetch

## リポジトリに登録されていないファイルを削除する

- $ git clean -df

# 未ステージング状態(add していない)で使用するコマンド

## ステージングする

- $ git add --all

## 最新コミットとの差分を表示する

- $ git diff

## 作業環境を最新コミットの状態にリセットしたい(ローカルの作業を無かった事にする）

- $ git reset HEAD --hard

## ファイル単位で最新コミットの状態にリセットしたい

- $ git checkout filename

## 作業中状態を一時保存する

- $ git stash # 作業中の状態を保存
- $ git checkout feature/<他のブランチ>
  (何か作業)
- $ git checkout feature/<元のブランチ>
- $ git stash pop # 保存した状態を取得

# ステージング済み(git add した状態)で使用するコマンド

## コミット

- $ git commit -m "コミットコメント"

- $ git commit -amend # 継ぎ足しコミット

## add したファイルをリセットして最新コミットと同じ状態に戻す

- $ git checkout HEAD filename

## ステージ内容と最新コミット(HEAD)の差分を見る

- # コンソールに表示する
- $ git diff --cached

# コミット済み状態で使用するコマンド

## クローン元の変更内容をローカルにマージする。

- $ git pull

## コミット済みファイル名変更

- $ git mv oldname newname

## ローカルで最新のコミットを無かったことにする

- $ git reset HEAD^ # HEAD を１つ前に移動するだけ。ワークのファイルは変化しない。

# origin のブランチにプッシュする

- $ git push

## プッシュ済みのコミットを改変した場合(--amend や rebase を使用した場合)

- $ git push -f
  - origin を上書き

# GitHub 連携

## GitHub のリポジトリをローカルにクローンする

- GitHub のリポジトリを開き、「Clone or download」ボタンを押した先の URL をコピーし、以下コマンドを実行する。

- $ git clone <url>

## コミットを issue に紐づける

- $ git commit -m "#7 コミットコメント"
  - issue 番号をコミットコメントに含める。

## コミットと同時に issue をクローズする

- $ git commit -m "close #7 コミットコメント" - 'close'をコミットコメントに含める。

# 作業フロー例

## ブランチへのコミット

- $ git checkout feature/<ブランチ名> # ブランチ切り替え

## <ファイルの編集作業>

- $ git status
  - ワークのファイルを確認する
- $ git add --all
  - 変更・追加・削除を行ったファイルをステージングする
- $ git status
  - ステージング状態を確認する
- $ git commit -m "#7 コミットコメント" # コミットする。
  - コミットコメントに issue 番号を含めると("#番号")issue に紐づけてくれる
  - コミットと同時に issue をクローズする時は、"close #7 コミットコメント"と記述する。
- $ git push
  - origin の feature/<ブランチ名>に反映

## [参考 URL](https://qiita.com/forest1/items/adf683c4cc2f8cdd6a24#%E6%9C%AA%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%81%AA%E3%81%A9%E3%81%AE%E7%8A%B6%E6%85%8B%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B)
