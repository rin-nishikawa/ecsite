//=============================================================================
// src/main.js
//
// 役割
// - アプリケーションの初期化
//   Vue.jsのインスタンスを作成し、アプリケーション全体を管理する土台を構築します
// - 主要な依存コンポーネントの登録
//   App.vue: アプリケーションのルートコンポーネントを登録します
//   ルーティング機能（Vue Router）: ページ遷移を管理するため、ルーターを登録します
//   UIフレームワーク（Element Plus）: アプリケーション全体でUIコンポーネントを利用できるように登録します
// - アプリケーションのマウント
//   DOMの#app要素にアプリケーションをマウントし、ブラウザ上でアプリが動作するようにします
// 
// 目的
// - アプリケーションの基盤を提供
//   このプログラムはVue.jsアプリケーションのスタート地点であり、依存する機能を統合しながら、
//   アプリの全体的な挙動を管理します
// - コードのモジュール化と再利用性の向上
//   外部モジュール（App.vue、router、ElementPlus）を分離してインポートすることで、
//   コードの分割を容易にし、メンテナンス性を向上させます
// - アプリケーションにルーティング機能を統合
//   Vue Routerを使用することで、URLの変更に基づいたページ遷移を実現します
// - UIの統一性を提供
//   Element Plusを利用して、デザインの統一性を持たせた洗練されたUIを簡単に構築できるようにします
//=============================================================================

//Vue.jsアプリケーションを作成するためのcreateApp関数をインポート
import { createApp } from 'vue';

//アプリケーションのルートコンポーネントをインポート
import App from './App.vue';

//ルーティング設定を定義したモジュールをインポート
import router from './router';

// UIフレームワーク（ElementPlus）をインポート
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // スタイルをインポート

//Vue.jsのインスタンスを作成し、アプリケーション全体の管理を開始
const app = createApp(App);
app.use(ElementPlus);   // ElementPlus を登録
app.use(router);        // アプリにルーターを登録

//DOMのapp要素にアプリケーションをマウントし、ブラウザでアプリが動作するようにします
app.mount('#app');
