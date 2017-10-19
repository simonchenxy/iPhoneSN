<template>
  <div class="content">
    <div class="header item">
      <form>
        <input id="content" type="text" name="sn" v-model="snText" :placeholder='placeText' />
        <button class="search" type="button" value="查询" @click="search()">查询</button>
        <div class="wrong-number" v-if="wrongItem">{{wrongText}}</div>
        <div class="wrong-number" v-if="emptyItem">{{emptyText}}</div>
      </form>
    </div>

    <show-box :showItem="dataList" v-if="isShow"></show-box>

  </div>
</template>

<script>
  import showBox from '../components/show-box'
  import dataFile from '../assets/file.json'

  export default{
    name:'typeBox',
    data(){
      return {
        isShow:false,
        wrongItem:false,
        emptyItem:false,
        snText:'',
        placeText:'请输入您要查询的序列号码',
        emptyText:'请输入正确的序列号！',
        wrongText:'此序列号无效。请检查该序列号，然后再试。',
        dataList:{
          'factoryText':'',
          'yearText':'',
          'monthText':'',
          'dateText':''
        }
      }
    },
    created(){

    },
    methods:{
      search(){
        if (this.snText === ''){
          this.emptyItem = true;
          this.wrongItem = false;
          this.isShow=false;
        }else if (this.snText.length < 12) {
          this.emptyItem = false;
          this.wrongItem = true;
          this.isShow=false;
        }else {
          this.emptyItem = false;
          this.wrongItem = false;
          this.isShow=true;
          let sn = this.snText.toUpperCase();
          let [f,y,m] = [sn.substring(0,1),sn.substring(3,4),sn.substring(4,5)];

          this.dataList.factoryText=dataFile.factory[f];
          this.dataList.yearText=dataFile.yearF[y]?dataFile.yearF[y]:dataFile.yearL[y];
          this.dataList.monthText=dataFile.yearF[y]?dataFile.month[m]:dataFile.month[m]+27;
        }

      }

    },
    computed:{

    },
    components:{
      showBox
    }
  }
</script>
