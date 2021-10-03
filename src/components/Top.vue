<template>
  <div class="hello">
    <h1>Todo App</h1>
    <p>フロントエンドVue.js、バックエンドGoで構成しています</p>

    <h1>タスク一覧</h1>
    <div v-for="todo in todos" :key="todo.Id">
      <p>id: {{ todo.Id }} todo: {{ todo.Content }}</p>
    </div>

    <form v-on:submit.prevent="submit">
      <!-- content -->
      <p>Todoを記入してください</p>
      <input type="text" ref="content"><br><br>
      <input type="submit" value="追加">
    </form>
    
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      data: function () {
          return {
            todos: [],
            content: ''
          }
      },
      created: function() {
        this.getTodos()
      },
      methods: {
        getTodos: function() {
          axios.get('http://localhost:9000/api/todos/',{
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            this.todos = res.data
          })
        },
        submit() {
          console.log(this.$refs.content.value)
          const params = new URLSearchParams();
          params.append('content', this.$refs.content.value);
          axios.post('http://localhost:9000/api/todos/',{
            headers: {
              'Content-Type': 'application/json'
            },
          }).then((res) => {
            alert(JSON.stringify(res.data))
          }).catch(err => {
            if(err.response) {
              console.log("error")
            }
          });
        }
      }
      
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
