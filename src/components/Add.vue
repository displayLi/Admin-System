<template>
  <div id="we" class="container">
    <h2 class="page-header">添加用户</h2>
    <div class="bs-example container" data-example-id="basic-forms">
      <form class="well">
        <div class="form-group">
          <h4>用户信息</h4>
          <label>姓名</label>
          <input type="email" class="form-control" placeholder="username" v-model="datas.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="datas.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="email" class="form-control" placeholder="Email" v-model="datas.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="Education" v-model="datas.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="email" class="form-control" placeholder="school" v-model="datas.school">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="Occ" v-model="datas.occ">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" style="resize:vertical;" placeholder="在此输入您的个人简介..." v-model="datas.people"></textarea>
        </div>
        <button type="submit" @click="addData()" class="btn btn-default">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'We',
  data() {
    return {
      datas: {

      }
    }
  },
  methods: {
    addData() {
      if (!this.datas.name || !this.datas.phone || !this.datas.email) {} else {
        axios.post('/users', this.datas)
          .then(result => {
            this.$router.push({ path: "/", query: { alert: "用户信息添加成功" } });
          })
      }
    }
  }
}

</script>
<style scoped>
#we {
  margin-top: 80px;
}

</style>
