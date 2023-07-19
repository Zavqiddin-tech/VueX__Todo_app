<template>
  <div class="add-task">
    <div>
      <input type="text" v-model="task.title" placeholder="sarlavha" />
    </div>
    <div>
      <input type="text" v-model="task.text" placeholder="matn" />
    </div>
    <div>
      <input type="date" v-model="task.date" />
    </div>
    <div>
      <select v-model="task.group">
        <option value="A.Shaxriyor">A.Shaxriyor</option>
        <option value="B.Jalol">B.Jalol</option>
      </select>
    </div>
    <button @click="add()">submit</button>
  </div>

  <div class="container">
    <h1>Todolist</h1>
    <nav class="nav">
      <router-link to="/">Barchasi</router-link>
      <router-link to="/done">Bajarilgan</router-link>
      <router-link to="/undone">Bajarilmagan</router-link>
    </nav>
    <div class="todo-app">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "./store/data";

export default {
  data: () => ({
    task: {},
  }),

  computed: {
    ...mapState(useDataStore, ["getTasks"]),
  },

  methods: {
    ...mapActions(useDataStore, ["setTasks", "delTasks"]),
    add() {
      if (this.task.title && this.task.text && this.task.date && this.task.group) {
        this.task.id = crypto.randomUUID();
        this.setTasks(this.task);
        this.task = {};
      } else {
        alert('Barcha maydonlarni to`ldiring ❗❗❗')
      }
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 500px;
  padding: 30px;
  border: 1px solid #000;
  margin: auto;
  font-family: sans-serif;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
}
.add {
  &-task {
    max-width: 500px;
    margin: 50px auto;
  }
}
a {
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  a {
    color: #000;
    font-size: 17px;
    &:focus {
      color: #3d9ef2;
    }
  }
}
</style>
