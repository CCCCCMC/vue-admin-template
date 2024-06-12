<template>
  <div>

    <div class="app-container">
      <el-table :data="tableDataForAccountsPayable" style="width: 100%">
        <el-table-column label="ID" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column label="供应商名称" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.supplierName }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="数量" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.amount }}</span>
          </template>
        </el-table-column>

        <el-table-column label="预计日期" width="260">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.dueDate }}</span>
          </template>
        </el-table-column>

        <el-table-column label="状态" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 点击按钮时，将id传入方法 -->
            <el-button size="mini" @click="handleEdit(scope.row.id)"
            >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
            >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="button-container">
        <el-pagination
          @current-change="changePage"
          v-if="isShow"
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
        >
        </el-pagination>

        <el-button type="primary" size="mini" plain @click="handleAdd">添加</el-button>
      </div>
      <div class="line-break"></div> <!-- 插入换行 -->
      <el-table :data="tableDataForAccountsReceivable" style="width: 100%">
        <el-table-column label="ID" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column label="供应商名称" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.supplierName }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="数量" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.amount }}</span>
          </template>
        </el-table-column>

        <el-table-column label="预计日期" width="260">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.dueDate }}</span>
          </template>
        </el-table-column>

        <el-table-column label="状态" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 点击按钮时，将id传入方法 -->
            <el-button size="mini" @click="handleEdit(scope.row.id)"
            >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
            >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="button-container">
        <el-pagination
          @current-change="changePage"
          v-if="isShow"
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
        >
        </el-pagination>

        <el-button type="primary" size="mini" plain @click="handleAdd">添加</el-button>
      </div>
    </div>
  </div>
</template>




<script>
import {getAccountsPayables, editAccountsPayable, DeleteAccountsPayableById, getAccountsPayableSupplierAndAmount} from "@/api/FM/AccountsPayable.js"
import {getAccountsReceivable,editAccountsReceivable,DeleteAccountsReceivableById,getAccountsReceivableSupplierAndAmount} from "@/api/FM/AccountsReceivable.js"
import * as echarts from 'echarts';
export default {
  data() {
    return {
      total: 1,
      pageSize:1,
      // 默认不显示分页
      isShow: false,
      tableDataForAccountsPayable: [],
      tableDataForAccountsReceivable: [],
      tableForAccountsPayableSupplierAndAmount: [],
      tableForAccountsReceivableSupplierAndAmount: []
    };
  },
  created: function () {
    getAccountsPayables().then((response) => {
      this.tableDataForAccountsPayable = response.data.items.records;
      console.log("table",JSON.stringify(this.tableDataForAccountsPayable));
      // 总记录数
      this.total = response.data.items.total;
      // 每页显示的条数
      this.pageSize = response.data.items.size;
      // 网络请求成功后，显示分页
      this.isShow = true;
    });
    getAccountsReceivable().then((response) => {
      this.tableDataForAccountsReceivable = response.data.items.records;
      // 总记录数
      this.total = response.data.items.total;
      // 每页显示的条数
      this.pageSize = response.data.items.size;
      // 网络请求成功后，显示分页
      this.isShow = true;
    });
    getAccountsPayableSupplierAndAmount().then((response) => {
      this.tableForAccountsPayableSupplierAndAmount = response.data.items;
      this.initPieForPayable(this.tableForAccountsPayableSupplierAndAmount);
      // 总记录数
      //console.log("response.data.items",JSON.stringify(response.data.items));
      //console.log("tableForAccountsPayableSupplierAndAmount1",JSON.stringify(this.tableForAccountsPayableSupplierAndAmount));
    })
    getAccountsReceivableSupplierAndAmount().then((response) => {
      this.tableForAccountsReceivableSupplierAndAmount = response.data.items;
      this.initPieForReceivable(this.tableForAccountsReceivableSupplierAndAmount);
    })
  },
  methods: {
    handleEdit(id) {
      console.log(id);
      //跳转到添加页面，同时传递品牌id，方便在添加页面查询品牌信息，并显示
      this.$router.push("/accounts-payable/edit/" + id);
    },
    handleDelete(id) {
      console.log(id);
      DeleteAccountsPayableById(id);
      window.location.reload();
      // 删除
    },
    handleAdd() {
      //跳转到添加页面，同时传递品牌id，方便在添加页面查询品牌信息，并显示
      this.$router.push("/accounts-payable/add/");
    },
    changePage(pageNum) {
      getAccountsPayables(pageNum).then((response) => {
        this.tableData = response.data.items.records;
      });
    },
    initPieForPayable(tableForAccountsPayableSupplierAndAmount){
      if (tableForAccountsPayableSupplierAndAmount && tableForAccountsPayableSupplierAndAmount.length > 0) {
        var chartDom = document.getElementById('pieForPayable');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: '代付账款',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              padAngle: 5,
              itemStyle: {
                borderRadius: 10
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 10,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: tableForAccountsPayableSupplierAndAmount
            }
          ]
        };

        option && myChart.setOption(option);
      } else {
        console.log('tableForAccountsPayableSupplierAndAmount is empty or undefined.');
      }
    },
    initPieForReceivable(tableForAccountsReceivableSupplierAndAmount){
      var chartDom = document.getElementById('pieForReceivable');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '应收账款',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 10
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 10,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: tableForAccountsReceivableSupplierAndAmount
          }
        ]
      };

      option && myChart.setOption(option);
    }
  },

};
</script>

<style>
.button-container {
  display: flex; /* 使用 Flex 布局 */
  justify-content: flex-start; /* 将两个按钮放置在容器两端 */
  align-items: center; /* 垂直居中对齐 */
  margin-top: 20px; /* 根据需要设置上边距 */
}
.container {
  width: 70%;
  display: flex;
  justify-content: space-between;
}

.chart-container {
  width: 48%; /* 控制图表容器的宽度，留出一些间距 */
}

.chart {
  width: 100%;
  height: 400px;
}
</style>

