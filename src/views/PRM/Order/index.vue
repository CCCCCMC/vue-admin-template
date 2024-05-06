<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="item in tableData" :key="item.id" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { getProductionTimeline } from '@/api/PRM/productionTimeline'

export default {
  data() {
    return {
      tableData: [],
    };
  },
  created: function () {
    getProductionTimeline().then((response) => {
      this.tableData = response.data.items;
      console.log("table data:", this.tableData);
    });
  }
}
</script>
