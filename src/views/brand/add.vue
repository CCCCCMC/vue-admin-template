<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="品牌名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="品牌图片">
        <!-- 上传图片组件 action为接收上传的后端地址 -->
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8080/brand/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          name="img"
        >
          <img v-if="form.image" :src="form.image" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="品牌字母">
        <el-input v-model="form.letter"></el-input>
      </el-form-item>

      

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//import {getCategories,getCategoriesByParentId} from '@/api/category'
import {addBrand,getBrandById} from '@/api/brand'
export default {
  data() {
    return {
      form:{
        name:"",
        letter:"",
        image: "",
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
      getBrandById(id).then(res=>{
        this.form = res.data.brand;
      })
    }
  },
  methods: {
    // 表单提交调用的方法
    onSubmit() {
      // form中存储了所有的用户填写的信息，包括图片地址
      console.log(this.form);
      // 将信息传送到后端，存储到数据库
      addBrand(this.form).then(res=>{
        this.$message({
          message: '添加成功',
          type: 'success'
        });
      })
      //跳转到品牌列表
      this.$router.push({ path:'/brand/list' })
    },
    // 图片上传成功调用的方法
    handleAvatarSuccess(res) {
      // res为后端返回的图片地址，将地址设置给imageUrl用于显示
      this.form.image = "http://localhost:8080/" + res;
    },
    // 图片上传之前调用的方法
    beforeAvatarUpload() {},
    
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>