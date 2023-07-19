<template lang="">
    <div class="card-items">
      <div class="card-item done" v-for="(item, index) in getDoneTasks" :key="index">
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
    data: () => ({
      salom: []
    }),
  
    computed: {
      ...mapState(useDataStore, ["getDoneTasks"]),
    },
  };
  </script>
  <style lang="scss">
  .card {
    &-item {
      position: relative;
      padding: 12px 17px 12px;
      background: #9fe3e8;
      margin-bottom: 20px;
      &.done {
        background-color: #F4A4A9;
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