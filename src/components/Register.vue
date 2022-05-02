<template>
      <div>
            <router-link to="/login">ログイン</router-link>

            <form v-on:submit.prevent="register">
                  <h1>新規登録</h1>
                  <label for="">name</label><input type="text" ref="name"><br><br>
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
            register:  function () {
                  axios.post('/api/register',{
                        headers: {
                              'Content-Type': 'application/json'
                        },
                        name: this.$refs.name.value,
                        email: this.$refs.email.value,
                        password: this.$refs.password.value,
                  }).then((res) => {
                        // ログイン状態にする
                        console.log(res.data)
                        this.$store.commit("setState", true)
                        this.$router.push("/todo");
                  }).catch((err) => {
                        console.log(err)
                  });
            },
      }
      
}
</script>