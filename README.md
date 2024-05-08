# Next.js でサーバコンポーネントをまたいでクライアントコンポーネントで状態を共有したい


## 1. 手順

```
gh repo clone domodomodomo/my-next
cd my-next
npm install
npm run dev
```

## 2. 背景

以下の記事を見て勉強させていただいたが React の初心者で詰まってしまったので再現するリポジトリを作った。

* [React Server ComponentでもContextで状態を共有する](https://future-architect.github.io/articles/20231214a/)


## 3. 要点

クライアント - サーバ - クライアント でサンドイッチにする。

```ts:page.tsx
import { ContextProvider } from "@/app/Context"
import ClientA from "@/app/ClientA"
import ClientB from "@/app/ClientB"
export default function Home() {
  return (
    <ContextProvider>
      {process.env.PWD}
      <ClientA />
      <ClientB />
    </ContextProvider>
  )
}

```


## 4. いじったファイル

```
$ tree app 
app
├── ClientA.tsx
├── ClientB.tsx
├── Context.tsx
└── page.tsx
$
```



