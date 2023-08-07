<script setup lang="ts">
import { get } from './api/Api.js';
import { onMounted,reactive } from 'vue';
import { showToast } from '@nutui/nutui';
interface FormData {  
  type: string;  
  label: string;  
  value: string | number;  
  options?: [{ text: string; value: number }];  
}  
// formData模拟请求回来的值
const formData:FormData[] = reactive([
 {"type":"text","label":"姓名","value":"吴仁慈"},
 {"type":"tel","label":"手机号","value":"134****7543"},
 {"type":"email","label":"邮箱","value":"#$%#$%#$156165"},
 {"type":"company","label":"公司",'value':"舍佛勒"},
 {"type":"singleSelect","label":"","options":[{"text":"行业","value":0},{"text":"工业4.0","value":1},{"text":"航天航空","value":2}],"value":0},
 {"type":"position","label":"","options":[{"text":"职位","value":0},{"text":"fontEnd","value":1},{"text":"end","value":2}],"value":0}
])

onMounted(async ()=>{
 //在这里请求到接口的值
//  const response = await get('/forms/{id}')
}
)
//弹出框  msg对应弹出的文字
const textToast = (msg:string) => {
  showToast.text(msg)
}
//判断表单是否填写成功
const formIsFlag:(()=>boolean) = ()=>{
   return !!(formData[0].value && formData[1].value && formData[2].value && formData[3].value && formData[4]?.value != 0 && formData[5]?.value!=0)
}
//点击提交触发点击事件
const submit = ()=>{
  //判断一下表单是否填写成功
   if(formIsFlag()){
    //填写完成了
    textToast('提交成功')
   }else{
    //没填写完成
    textToast('请填写完成后提交')
   }
}
</script>

<template>
  <div id="app">
  <!-- 头部导航 -->
    <nut-navbar title="信息填写" style="font-weight: 550;margin: 0;">
    <template #left>
      <div style="padding-top: 5px">
        <svg t="1691416194282" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="1660" width="20" height="20">
          <path
            d="M662.613333 278.613333a32 32 0 0 0-42.816-47.445333l-2.432 2.197333-256 256a32 32 0 0 0-2.197333 42.837334l2.197333 2.432 256 256a32 32 0 0 0 47.466667-42.837334l-2.197333-2.432L429.226667 512l233.386666-233.386667z"
            fill="#323847" p-id="1661"></path>
        </svg>
      </div>
    </template>
  </nut-navbar>
  <div class="content">
      <div style="padding-bottom: 10px;">
         请完善您的信息，我们将通过邮箱为您发送下载地址。
      </div>
      <div v-for="(i) in formData">
        <p v-if="i.label != ''">{{ i.label }}</p>
        <nut-input placeholder="请输入文本" v-model="i.value" v-if="i.label != ''"/>
        <nut-menu v-if="i.label == ''">
    <nut-menu-item v-model="i.value" :options="i.options" />
  </nut-menu>
      </div>

  </div>
  <!-- 底部提交 -->
  <div class="bottom">
    <nut-button shape="square" type="primary" style="position: absolute;right: 13px;top: 10px;" @click="submit()">确认提交</nut-button>
  </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.content {
  padding: 20px;
  background: #e9e8e8;
  height: calc(100vh - 144px);
  overflow: scroll;
}
.content p {
  background: #fff;
  padding: 25px 0 0 25px;
  color: #acabab;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
}
#app >>> .nut-navbar {
   margin: 0!important;
}
.bottom >>> .nut-button--primary {
  background: green!important;
}
.content >>> .input-text {
  font-size: 20px;
}
.content >>> .nut-menu__item {
  padding-left: 16px;
  font-size: 20px!important;
  flex: none!important;
}
.content >>> .nut-menu__title {
  height: 93px;
  color: #acabab;
}
.content >>> .nut-menu__title-icon {
  position: absolute;
  right: 20px;
}
</style>
