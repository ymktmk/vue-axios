<template>
      <div class="hello">
            <!-- 表示 -->
            <h1>my profile</h1>
            <label for="">name</label><p>{{ name }}</p>
            <label for="">email</label><p>{{ email }}</p>
            
            <form v-on:submit.prevent="logout">
                  <input type="submit" value="ログアウト">
            </form>
      </div>
</template>

<script>
import axios from 'axios'

export default {
      data: function () {
            return {
                  name : "",
                  email: "",
            }
      },
      mounted: function() {
            
            // ログイン状態確認
            console.log(this.$store.getters.isLogin)
      
            axios.get('/api/user',{
                  headers: {
                        'Content-Type': 'application/json'
                  }
            }).then((res) => {
                  console.log(res.data)
                  this.name = res.data["name"]
                  this.email = res.data["email"]
            })
      },
      methods: {
            logout() {
                  // this.$store.dispatch("setStateAction", true)
                  // or
                  // this.$store.commit("setState", true)
                  // console.log(this.$store.getters.isLogin)
                  axios.get('/api/logout',{
                        headers: {
                              'Content-Type': 'application/json'
                        }
                  }).then((res) => {
                        // falseでログアウト状態にする
                        console.log(res.data)
                        this.$store.commit("setState", false)
                        this.$router.push("/login");
                  })
            },
      }
      
}
</script>