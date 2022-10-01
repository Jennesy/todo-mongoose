# Todo List

![screenshot](https://user-images.githubusercontent.com/68381960/186360099-ce12f269-d7e0-4f23-92fc-34151dfb3dd0.png)
這是一個 Todo List 網頁（[前往網站](https://dry-refuge-14323.herokuapp.com/)）

## Features/功能

- 使用者可以使用 email 或 facebook 建立個人帳號
- 使用者可以新增、儲存、編輯、刪除 todo 項目
- 使用者可以查看 todo 項目的完整內容

## Environment Setup/環境建置

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Mongoose](https://mongoosejs.com/)
- [Passport (passport-local/passport-facebook)](https://www.passportjs.org/docs/)
- [Nodemon](https://www.npmjs.com/package/nodemon) -for development only

## Installation/專案安裝

### Clone

```
git clone https://github.com/Jennesy/todo-sequelize
cd todo-sequelize
npm install
```

### Run/執行專案

```
npm run start
```

若成功啟動伺服器你會看到：

```
Express server is running on http://localhost:3000
```

可以至 http://localhost:3000 查看本地網站

### Develop mode/專案開發模式

開啟此模式時，當你修改程式並存檔完畢，無須重啟伺服器，可以重新整理 http://localhost:3000 即可查看編輯效果。

```
npm run dev
```

若成功你會看到：

```
Express server is running on http://localhost:3000
```

可以至 http://localhost:3000 查看專案目前功能
