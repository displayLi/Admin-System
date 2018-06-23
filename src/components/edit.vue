<template>
  <div id="edit" class="container">
    <h2 class="page-header">编辑信息</h2>
    <div class="bs-example container" data-example-id="basic-forms">
      <form class="well">
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="username" v-model="datas.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="tel" class="form-control" placeholder="phone" v-model="datas.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="Email" v-model="datas.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="Education" v-model="datas.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="school" v-model="datas.school">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="Occ" v-model="datas.occ">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" style="resize:vertical;" placeholder="在此输入您的个人简介..." v-model="datas.people"></textarea>
        </div>
        <button type="submit" @click.prevent="editData()" class="btn btn-default">确认</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'edit',
  data() {
    return {
      datas: {},
      id: this.$route.params.id,
    }
  },
  methods: {
    editData() {
      axios.put(`/users/${this.id}`, this.datas)
        .then(result => {
          this.$router.push({ path: '/', query: { alert: "用户信息编辑成功" } })
        })
    }
  },
  created() {
    axios.get(`/users/${this.id}`)
      .then(result => {
        this.datas = result.data;
      })
  }
}

</script>
<style scoped>
#we {
  margin-top: 80px;
}

</style>
