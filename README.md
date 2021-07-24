# GEIKOTEN 2021 プレサイト

https://geikousai-ncu.com/2021/pre

### セットアップ

```
$ npm i
$ npm run dev
```

### ビルド

```
$ npm run build
```

##### サブディレクトリ「/sub」にエクスポート

```
$ echo NEXT_PUBLIC_BASE_PATH=/sub > .env.production.local
$ npm run build
```
