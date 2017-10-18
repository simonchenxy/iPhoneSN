<template>
  <div class="showbox item">
    <table border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="40%">型号</td>
        <td width="60%">
          <span class="model"></span>
        </td>
      </tr>
      <tr>
        <td>生产工厂</td>
        <td>
          <span class="factory">{{showItem.factoryText}}</span>
        </td>
      </tr>
      <tr>
        <td>生产日期</td>
        <td>
          <span class="year">{{showItem.yearText}}</span>第<span class="month">{{showItem.monthText}}周</span>
        </td>
      </tr>
      <tr>
        <td>日期</td>
        <td>
          <span class="color">{{showItem.dateText}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props:['showItem']
  }
</script>
