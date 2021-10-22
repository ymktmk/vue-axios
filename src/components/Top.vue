<template>
  <div class="hello">
    <h1>Todo App</h1>
    <p>フロントエンドVue.js、バックエンドGoで構成しています</p><br>

    <h2>タスク一覧</h2>

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>content</th>
        </tr>
      </thead>
      <tbody v-for="todo in todos" :key="todo.id">
        <tr>
          <td>{{ todo.id }}</td>
          <td>{{ todo.content }}</td>
          <button v-on:click="deleteTodo(todo)">削除</button>
        </tr>
      </tbody>
    </table>

    <br><br>
    <form v-on:submit.prevent="createTodo">
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
      mounted: function() {
        axios.get('/api/todos/',{
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.todos = res.data || []
        })
      },
      methods: {
        deleteTodo: function(todo) {
          axios.delete('/api/todos/' + todo.id)
          .then((res) => {
            // リダイレクトする
            this.$router.go({path: this.$router.currentRoute.path, force: true})
            // var index = this.todos.indexOf(todo)
            // this.todos.splice(index, 1)
            console.log(res.data)
          })
        },
        createTodo() {
          axios.post('/api/todos/',{
            headers: {
              'Content-Type': 'application/json'
            },
            content: this.$refs.content.value
          }).then((res) => {
            this.$refs.content.value = ''
            // リダイレクトする
            this.$router.go({path: this.$router.currentRoute.path, force: true})
            // 配列に挿入
            // this.todos.push(res.data)
            console.log(res.data)
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

table {
  text-align: center;
  margin: auto;
}

h1 {
  color: #42b983;
}

h2 {
  color: #42b983;
}

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
