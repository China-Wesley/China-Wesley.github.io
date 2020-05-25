<template>
  <div id="app">
    <!-- <el-icon name="eleme"></el-icon>
    <el-icon name="loading"></el-icon>
    <i class="el-icon-edit"></i>
    <el-row>
      <el-col :span="10">qwe</el-col>
    </el-row>-->

    <el-row type="flex" justify="space-between">
      <el-col :span="3">
        <div class="green">asd</div>
      </el-col>
      <el-col :span="3">
        <div class="red">asd</div>
      </el-col>
    </el-row>
    <i class="el-icon-moon"></i>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.green {
  background: green;
}

.red {
  background: red;
}
</style>
