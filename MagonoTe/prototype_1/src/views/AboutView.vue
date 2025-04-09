<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <!-- ログインID入力 (5文字以内、重複チェック付き) -->
      <v-text-field
        label="ログインID"
        v-model="loginId"
        :rules="loginIdRules"
        maxlength="5"
        required
      ></v-text-field>

      <!-- ログインPW入力 (8文字以上) -->
      <v-text-field
        label="パスワード"
        v-model="password"
        :rules="passwordRules"
        type="password"
        required
      ></v-text-field>

      <!-- 氏名入力 (姓と名) -->
      <v-text-field
        label="姓"
        v-model="firstName"
        :rules="[v => !!v || '姓は必須です']"
        required
      ></v-text-field>
      <v-text-field
        label="名"
        v-model="lastName"
        :rules="[v => !!v || '名は必須です']"
        required
      ></v-text-field>

      <v-btn color="primary" @click="registerUser">登録</v-btn>
    </v-form>
  </v-container>
</template>


<script lang="ts" setup>

import { ref } from 'vue';
import { useStore } from 'vuex';
import localStorageCmp from '@/composables/localStorageCmp';

// ストアとlocalStorageの設定
const store = useStore();
const { getUsers, saveUsers } = localStorageCmp('users');

// 入力用のリアクティブ変数
const loginId = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const valid = ref(false);

// 入力バリデーションルール
const loginIdRules = [
  (v: string) => !!v || 'ログインIDは必須です',
  (v: string) => v.length <= 5 || 'ログインIDは5文字以内です',
  (v: string) => !isDuplicateLoginId(v) || 'このログインIDは既に使用されています'
];
const passwordRules = [
  (v: string) => !!v || 'パスワードは必須です',
  (v: string) => v.length >= 8 || 'パスワードは8文字以上です'
];

// ユーザーIDの重複チェック（storeとlocalStorageの両方から確認）
function isDuplicateLoginId(id: string): boolean {
  const usersFromStore = store.state.users as any[];
  const usersFromLocal = getUsers() as any[];
  return (
    usersFromStore.some(user => user.loginId === id) ||
    usersFromLocal.some(user => user.loginId === id)
  );
}

// 登録処理
function registerUser() {
  // フォームのバリデーション（ここでは簡易チェック）
  if (!loginId.value || !password.value || !firstName.value || !lastName.value) {
    alert('すべての項目を入力してください');
    return;
  }
  // 新規ユーザーオブジェクト作成
  const newUser = {
    loginId: loginId.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value
  };
  
  // ストアにユーザーを追加
  store.commit('addUser', newUser);
  
  // localStorage にも保存（storeの状態を利用）
  saveUsers(store.state.users);
  
  alert('新規登録が完了しました');
  
  // 入力フィールドの初期化
  loginId.value = '';
  password.value = '';
  firstName.value = '';
  lastName.value = '';
}

</script>
