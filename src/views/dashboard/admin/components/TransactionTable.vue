<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="编号" min-width="100">
      <template slot-scope="scope">
        {{ scope.row.id }}
      </template>
    </el-table-column>
    <el-table-column label="名称" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.name }}
      </template>
    </el-table-column>
    <el-table-column label="负责人" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.contactPerson }}
      </template>
    </el-table-column>
    <el-table-column label="联系邮箱" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.contactEmail }}
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import { getSupplierForDashboard } from '@/api/SCM/Supplier'

export default {
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getSupplierForDashboard().then(response => {
        this.list = response.data.items.records.slice(0, 8)
      })
    }
  }
}
</script>
