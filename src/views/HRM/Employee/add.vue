<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="成员名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="所属部门">
        <el-input v-model="form.department"></el-input>
      </el-form-item>

      <el-form-item label="职位">
        <el-input v-model="form.position"></el-input>
      </el-form-item>

      <el-form-item label="薪资">
        <el-input v-model="form.salary"></el-input>
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

import {addEmployee,getEmployeeById} from '@/api/HRM/employee'
export default {
  data() {
    return {
      form:{
        name:"",
        department:"",
        position: "",
        salary: "",
        //categoryId:"",
      },
      props: {
        lazy: true,
        lazyLoad: this.lazyLoad,
      },
    };
  },
  // 页面被加载时会调用此方法 (如果直接点击添加品牌，也会调用此方法)
  created(){
    //取出从列表页面传递过来的品牌id
    if(this.$route.params.id){
      const id = this.$route.params.id
      // 根据id请求品牌信息
      getEmployeeById(id).then(res=>{
        this.form = res.data.employee;
      })
    }
  },
  methods: {
    // 表单提交调用的方法
    onSubmit() {
      // form中存储了所有的用户填写的信息，包括图片地址
      console.log(this.form);
      // 将信息传送到后端，存储到数据库
      addEmployee(this.form).then(res=>{
        this.$message({
          message: '添加成功',
          type: 'success'
        });
      })
      //跳转到品牌列表
      this.$router.push({ path:'/HRM/list' })
    },

      /*
      elementui官方示例代码
      setTimeout(() => {
        const nodes = Array.from({ length: level + 1 }).map((item) => ({
          value: 1,
          label: `选项1`,
          leaf: level >= 2,
        }));
        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
        resolve(nodes);
      }, 1000);
      */

  },
};
</script>

<style>
.button-container {
  display: flex; /* 使用 Flex 布局 */
  justify-content: space-between; /* 将两个按钮放置在容器两端 */
  align-items: center; /* 垂直居中对齐 */
  margin-top: 20px; /* 根据需要设置上边距 */
}
</style>

