<template>
  <div id="NoticeCard">
    <div class="notice_header">
      <div class="notice_box_left">
        <img src="@/assets/img/notice.svg" alt="" class="notice_img">
        <span class="notice_text">系统通知</span>
      </div>
    </div>
    <span class="more">更多</span>
  </div>
</template>

<script>

  export default {
    name: "NoticeCard",
    component: {

    }
  }
</script>

<style scoped>
  #NoticeCard{
    background: #fff;
    padding: 5px;
    height: 90px;
    position: relative;
  }

  .notice_header{
    padding: 5px;
    height: 60px;
    border-bottom: 1px solid #ccc;
  }

  .notice_box_left{
    position: relative;
    height: 40px;
    padding: 5px 20px;
  }

  .notice_img{
    width: 30px;
    height: 30px;
  }

  .notice_text{
    position:absolute;
    font-size: 16px;
    font-weight: bold;
    top: 14px;
    left: 60px;
  }

  .more{
    color: blueviolet;
    cursor: pointer;
    position: absolute;
    bottom: 2px;
    right: 30px;
  }

  .more:hover{
    border-bottom: 1px solid blueviolet;
  }
</style>