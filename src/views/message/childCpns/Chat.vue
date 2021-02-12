<template>
  <div id="Chat">
    <ChatObj/>
    <ChatContent/>
  </div>
</template>

<script>
import ChatObj from './ChatObj'
import ChatContent from './ChatContent'

export default {
  name: "Chat",
  components:{
    ChatObj,
    ChatContent
  }
}
</script>

<style scoped>
  #Chat{
    margin-top: 10px;
    height: 660px;
    display: flex;
  }
</style>