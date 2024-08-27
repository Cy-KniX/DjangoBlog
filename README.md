# Django課題

## ブログ投稿サイト
### 概要
ブログ投稿できるサイトを作成する  
・ユーザ登録、ログイン機能  
・ブログの作成と編集、削除  
・コメント機能(後期になる可能性あり)  
・検索機能(後期になる可能性あり)

## 現在の制作状況
モデルの完成、APIエンドポイントの作成まで
フロントの画面は未着手
残りの作業はissuesに記述  
https://github.com/Cy-KniX/DjangoBlog  

Djangoの起動
```
python manage.py runserver
```

**ユーザ登録**  
http://127.0.0.1:8000/api/register/

**トークンの取得**  
ユーザ登録に使用した値を使う  
http://127.0.0.1:8000/api/token/

**トークンの再発行**  
トークン取得時に返されるrefreshの値をbodyに含める  
http://127.0.0.1:8000/api/token/refresh/

**GET,POST,PUT,DELETEはテスト済み**  
http://127.0.0.1:8000/api/posts/

