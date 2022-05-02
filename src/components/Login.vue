<template>
      <div>
            <router-link to="/register">新規登録</router-link>
            <form v-on:submit.prevent="login">
                  <h1>ログイン</h1>
                  <label for="">email</label><input type="text" ref="email"><br><br>
                  <label for="">password</label><input type="text" ref="password"><br><br>
                  <input type="submit" value="追加">
            </form>
      </div>
</template>

<script>
import axios from 'axios'

export default {
      mounted: function() {
            // ログイン状態確認
            console.log(this.$store.getters.isLogin)
      },
      methods: {
            login() {
                  axios.post('/api/login',{
                        headers: {
                              'Content-Type': 'application/json'
                        },
                        email: this.$refs.email,
                        password: this.$refs.password,
                  }).then((res) => {
                        // ログイン状態にする
                        console.log(res.data)
                        this.$store.commit("setState", true)
                  })
            }
      }
      
}
</script>