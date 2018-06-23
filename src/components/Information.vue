<template>
  <div id="Information" class="container">
    <div class="btn btn-default" @click="returns">
      << 返回</div>
        <h2 class="page-header">用户信息</h2>
        <ul class="list-group">
          <li class="list-group-item"><i class="glyphicon glyphicon-user"></i>&nbsp;&nbsp;&nbsp;{{customer.name}}</li>
          <li class="list-group-item"><i class="glyphicon glyphicon-earphone"></i>&nbsp;&nbsp;&nbsp;{{customer.phone}}</li>
          <li class="list-group-item"><i class="glyphicon glyphicon-envelope"></i>&nbsp;&nbsp;&nbsp;{{customer.email}}</li>
          <li class="list-group-item"><i class="glyphicon glyphicon-education"></i>&nbsp;&nbsp;&nbsp;{{customer.education}}</li>
          <li class="list-group-item"><i class="glyphicon glyphicon-home"></i>&nbsp;&nbsp;&nbsp;{{customer.school}}</li>
          <li class="list-group-item"><i class="glyphicon glyphicon-folder-open"></i>&nbsp;&nbsp;&nbsp;{{customer.occ}}</li>
          <li class="list-group-item"><i class="glyphicon glyphicon-pencil"></i>
            <br>{{customer.people}}</li>
        </ul>
        <div class="add-delete-btn">
          <span class="btn btn-primary"><router-link :to="'/Edit/'+id">编辑</router-link></span>
          <span @click='deletes' class="btn btn-danger">删除</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Information",
  data() {
    return {
      customer: "",
      id: this.$route.params.id,
    }
  },
  created() {
    axios.get('/users/' + this.id)
      .then(result => {
        this.customer = result.data;
      })
  },
  methods: {
    returns() {
      this.$router.push({ path: '/' });
    },
    deletes() {
      axios.delete('/users/' + this.id)
        .then(result => {
          this.$router.push({ path: "/", query: { alert: '用户删除成功' } });
        })
    }
  }
}

</script>
<style scoped>
#Information {
  margin: 60px auto;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #fff;
  text-decoration: none;
}

a:focus {
  color: #fff;
  text-decoration: none;
}

</style>
