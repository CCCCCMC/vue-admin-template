<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="ID" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="名称" width="280">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>首字母: {{ scope.row.letter }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="contactPerson" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.contactPerson }}</span>
        </template>
      </el-table-column>


      <el-table-column label="contactEmail" width="280">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.contactEmail }}</span>
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
import { getSuppliers, editBrand } from "@/api/SCM/Supplier.js";

export default {
  data() {
    return {
      total: 1,
      pageSize:1,
      // 默认不显示分页
      isShow: false,
      tableData: [],
    };
  },
  created: function () {
    getSuppliers().then((response) => {
      this.tableData = response.data.items.records;
      // 总记录数
      this.total = response.data.items.total;
      // 每页显示的条数
      this.pageSize = response.data.items.size;
      // 网络请求成功后，显示分页
      this.isShow = true;
      console.log("table data:", this.tableData);
    });
  },
  methods: {
    changePage(pageNum) {
      getSuppliers(pageNum).then((response) => {
        this.tableData = response.data.items.records;
    });
    },
  },
};
</script>
