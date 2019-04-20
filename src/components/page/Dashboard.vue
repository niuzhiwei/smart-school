<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">

      </el-col>
      <el-col :span="24">
        <el-row
          :gutter="16"
          class="mgb20"
        >
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1231</div>
                  <div>学生总数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-1">
                <i class="el-icon-warning grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">2</div>
                  <div>未上传照片数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-1">
                <i class="el-icon-info grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">345</div>
                  <div>教职工数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <i class="el-icon-star-on grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">123</div>
                  <div>访客数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <i class="el-icon-circle-close grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>黑名单数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <i class="el-icon-success grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">345</div>
                  <div>今日已出宿舍数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <i class="el-icon-sort grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>今日已归宿舍数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <i class="el-icon-time grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>进入未归宿舍数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">12</div>
                  <div>五日未出宿舍人员</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart
            ref="bar"
            class="schart"
            canvasId="bar"
            :data="data"
            type="bar"
            :options="options"
          ></schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <ve-line
            :title="chartTitle"
            :data="chartData"
            :settings="chartSettings"
          ></ve-line>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from "vue-schart";
import bus from "../common/bus";
import "echarts/lib/component/title";
export default {
  name: "dashboard",
  data() {
    this.chartSettings = {
      stack: { 用户: ["进入人数", "出去人数"] },
      area: true
    };
    this.chartTitle = {
      text: "通行时段统计"
    };
    return {
      name: localStorage.getItem("ms_username"),
      todoList: [
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要写100行代码加几个bug吧",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: true
        },
        {
          title: "今天要写100行代码加几个bug吧",
          status: true
        }
      ],
      data: [
        {
          name: "学生",
          value: 1083
        },
        {
          name: "访客",
          value: 941
        },
        {
          name: "教职工",
          value: 1139
        },
        {
          name: "黑名单",
          value: 816
        },
        {
          name: "陌生人",
          value: 327
        },
        {
          name: "VIP",
          value: 228
        },
        {
          name: "其他",
          value: 1065
        }
      ],
      chartData: {
        columns: ["日期", "进入人数", "出去人数"],
        rows: [
          { 日期: "0", 进入人数: 234, 出去人数: 23 },
          { 日期: "2", 进入人数: 3530, 出去人数: 56 },
          { 日期: "4", 进入人数: 787, 出去人数: 45 },
          { 日期: "6", 进入人数: 234, 出去人数: 1423 },
          { 日期: "8", 进入人数: 3792, 出去人数: 3492 },
          { 日期: "10", 进入人数: 4, 出去人数: 4293 },
          { 日期: "12", 进入人数: 4593, 出去人数: 23 },
          { 日期: "14", 进入人数: 565, 出去人数: 45 },
          { 日期: "16", 进入人数: 45, 出去人数: 635 },
          { 日期: "18", 进入人数: 45, 出去人数: 424 },
          { 日期: "20", 进入人数: 567, 出去人数: 12 },
          { 日期: "22", 进入人数: 567, 出去人数: 56 },
          { 日期: "24", 进入人数: 45, 出去人数: 7 }
        ]
      },
      options: {
        title: "通行人群统计",
        showValue: true,
        fillColor: "rgb(45, 140, 240)",
        bottomPadding: 30,
        topPadding: 30
      },
      options2: {
        title: "进行时段统计",
        fillColor: "#FC6FA1",
        axisColor: "#008ACD",
        contentColor: "#EEEEEE",
        bgColor: "#F5F8FD",
        bottomPadding: 30,
        topPadding: 30
      }
    };
  },
  components: {
    Schart
  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    }
  },
  created() {
    this.handleListener();
    // this.changeDate();
  },
  activated() {
    this.handleListener();
  },
  deactivated() {
    window.removeEventListener("resize", this.renderChart);
    bus.$off("collapse", this.handleBus);
  },
  methods: {
    // changeDate() {
    //   const now = new Date().getTime();
    //   this.data.forEach((item, index) => {
    //     const date = new Date(now - (6 - index) * 86400000);
    //     item.name = `${date.getFullYear()}/${date.getMonth() +
    //       1}/${date.getDate()}`;
    //   });
    // },
    handleListener() {
      bus.$on("collapse", this.handleBus);
      // 调用renderChart方法对图表进行重新渲染
      window.addEventListener("resize", this.renderChart);
    },
    handleBus(msg) {
      setTimeout(() => {
        this.renderChart();
      }, 300);
    },
    renderChart() {
      this.$refs.bar.renderChart();
    }
  }
};
</script>


<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
</style>
