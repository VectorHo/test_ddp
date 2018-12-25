<template>
  <div class="index">
    <div>
      <img class="icon" :src="img" />
    </div>
    <div class="title">
      Optimus Mobile
    </div>
    <van-button class="begin" type="primary">开始旅程</van-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      img: require('../assets/icon.png')
    }
  },
  methods: {}
}
</script>

<style lang="stylus">
.index
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
  height: 240px;
  width: 70%;
  .icon
    width: 100px;
    height: 100px;
  .begin
    margin-top: 10px;
.title
  font-size: 22px;
  color: cadetblue;
</style>
