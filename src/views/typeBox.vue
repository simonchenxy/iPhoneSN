<template>
  <div class="content">
    <div class="header item">
      <form>
        <input id="content" type="text" name="sn" v-model="snText" :placeholder='placeText'>
        <button class="search" type="button" value="查询" @click="search">查询</button>
        <div class="wrong-number">{{wrongText}}</div>
      </form>
    </div>

    <show-box :showItem="dataList" v-show="isShow"></show-box>

  </div>
</template>

<script>
  import showBox from '../components/show-box'

  export default{
    name:'typeBox',
    data(){
      return {
        isShow:false,
        snText:'',
        placeText:'请输入您要查询的序列号码',
        wrongText:'此序列号无效。请检查该序列号，然后再试。',
        dataList:{
          'factoryText':'',
          'yearText':'',
          'monthText':'',
          'colorText':''
        },
        data:{}
      }
    },
    created(){
      this.getData()
    },
    methods:{
      search(){
        this.isShow=true;
        let sn = this.snText.toUpperCase();
        let [f,y,m] = [sn.substring(0,1),sn.substring(3,4),sn.substring(4,5)];
        console.log(f);
        console.log(this.data.factory.f);
        this.dataList.factoryText=this.data.factory.f;
//        this.dataList.yearText=y
//        this.dataList.monthText=m

      },
      getData(){
        this.$http.get('../../static/file.json').then((data)=>{
          this.data=data.data
        }).catch(()=>{
          throw new Error('Missing the data from json file')
        })
      }

    },
    computed:{

    },
    components:{
      showBox
    }
  }
</script>

<style scoped>
  .content{
    width: 400px;
    height: auto;
    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -200px;
  }
  .item{
    box-shadow: 0px 5px 20px 0px #C3C3C3;
    border-radius: 5px;
    padding: 4px;
  }
  .header form{
    position: relative;
  }
  .header form>div{
    position: absolute;
    bottom: -24px;
    left: 12px;
    font-size: 12px;
    color: red;
    display: none;
  }
  .header form input[type="text"]{
    width: 343px;
    height: 50px;
    border-radius: 3px 0 0 3px;
    border: 1px solid #CACACA;
    font-size: 24px;
    font-weight: normal;
    padding-left: 10px;
    outline: none;
    text-transform: uppercase;
  }

  .header form button{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    border-radius: 0 3px 3px 0;
    background: none;
    border: 1px solid #CACACA;
    outline: none;
  }
  .header form label{
    color: #999;
    cursor: text;
    font-size: 24px;
    position: absolute;
    top: 14px;
    left: 10px;
    z-index: 2;
  }
</style>
