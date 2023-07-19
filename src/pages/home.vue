<template lang="">
  <div class="card-items">
    <div :class="`card-item ${getTasks[index].toggle ? 'red' : ''}`" 
        v-for="(item, index) in getTasks" :key="index"
        >
      <div class="icons">
        <button 
        :class="`${getTasks[index].toggle ? 'd-none' : ''}`"
        @click="addDone(index, item.id)"
        >✔️</button>
        <button @click="delDone(item.id)">❌</button>
      </div>
        <div class="card-title">{{item.title}}</div>
      <div class="card-text">{{item.text}}</div>
      <div class="card-bottom">
        <div class="card-date">{{item.date}}</div>
        <div class="card-group">{{item.group}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../store/data";

export default {
  

  computed: {
    ...mapState(useDataStore, ["getTasks", 'getDoneTasks', 'getRed']),
  },
  methods: {
    ...mapActions(useDataStore, ['setDoneTasks', 'delDoneTasks']),
    addDone(index, id) {
        this.setDoneTasks(index, id)
    },
    delDone(id) {
        this.delDoneTasks(id)
    }
  }
};
</script>
<style lang="scss">
.card {
  &-item {
    position: relative;
    padding: 12px 17px 12px;
    background: #9fe3e8;
    margin-bottom: 20px;
    &.red {
      background-color: #F4A4A9;
    }
    .icons {
    position: absolute;
    right: 17px;
    display: flex;
    gap: 10px;
    button {
        background: none;
        border: none;
        cursor: pointer;
        transition: 0.25s;
        &:hover {
            transform: scale(1.2);
            box-shadow: 0px 0px 5px;
        }
        &:active {
            transform: scale(0.8);
        }
        &.d-none {
            display: none;
        }
    }
  }
  }
  &-title,
  &-date,
  &-group {
    font-size: 18px;
    font-weight: 700;
  }
  &-text {
    padding: 12px 0px;
    font-size: 13px;
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
  }
  
  
}
</style>
