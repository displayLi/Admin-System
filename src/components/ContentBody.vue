<template>
  <div class="container datas">
    <alerts v-if="alerts" v-bind:message="alerts"></alerts>
    <h2 class="page-header">用户管理系统</h2>
    <input type="text" class="form-control" placeholder="搜索用户" v-model="search"><br>  
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>详情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="key in filterData(inputData,search)">
          <td>{{key.name}}</td>
          <td>{{key.phone}}</td>
          <td>{{key.email}}</td>
          <td class="btn btn-default">
            <router-link v-bind:to="'/Info/' + key.id">查看</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Alert from "./Alert"
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      alerts: null,
      inputData: [],
      search:''
    }
  },
  created() {
    axios.get('/users')
      .then(result => {
        this.inputData = result.data;
      })
  },
  components: {
    "alerts": Alert
  },
  methods: {
    datas() {
      if (this.$route.query.alert) {
        this.alerts = this.$route.query.alert;
      }
    },
    filterData(data,value){
      return data.filter(result =>{
        return (result.name || result.phone || result.email).match(value);
      })
    }
  },
  updated() {
    this.datas();
  },
}

</script>
<style scoped>
.btn a {
  text-rendering: none;
  color: #000;
}

.btn a:hover,
.btn a:focus {
  text-decoration: none;
}

</style>
