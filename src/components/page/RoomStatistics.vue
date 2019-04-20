<!--  -->
<template>
  <div>
    <el-row :gutter="20">

      <el-col :span="24">
        <div class="floor">
          <div class="floor-name"> 1F</div>
        </div>
        <el-row
          :gutter="16"
          class="mgb20"
        >
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <span class="grid-con-icon">101</span>

                <div class="grid-cont-right">
                  <div class="grid-num">6/6</div>
                  <div>人员到齐</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div
                @click="showDetail"
                class="grid-content grid-con-1"
              >

                <span class="grid-con-icon">102</span>
                <div
                  v-if="changeDetail"
                  class="grid-cont-right"
                >
                  <div class="grid-num">5/6</div>
                  <div>未到齐</div>
                </div>
                <div
                  v-else
                  class="roomdetail"
                >
                  <div><span class="studentname">张三</span>
                    <el-tag type="success">在寝</el-tag>
                  </div>
                  <div><span class="studentname">李四</span>
                    <el-tag type="danger">未归</el-tag>
                  </div>
                  <div><span class="studentname">王五</span>
                    <el-tag type="success">在寝</el-tag>
                  </div>
                  <div><span class="studentname">张三</span>
                    <el-tag type="success">在寝</el-tag>
                  </div>
                  <div><span class="studentname">李四</span>
                    <el-tag type="success">在寝</el-tag>
                  </div>
                  <div><span class="studentname">王五</span>
                    <el-tag type="success">在寝</el-tag>
                  </div>
                </div>
              </div>

            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-3">
                <span class="grid-con-icon">103</span>

                <div class="grid-cont-right">
                  <div class="grid-num">0/6</div>
                  <div>全部未到</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-4">
                <span class="grid-con-icon">104</span>

                <div class="grid-cont-right">
                  <div class="grid-num">0/6</div>
                  <div>未入住</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <span class="grid-con-icon">105</span>

                <div class="grid-cont-right">
                  <div class="grid-num">6/6</div>
                  <div>未入住</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-1">
                <span class="grid-con-icon">106</span>

                <div class="grid-cont-right">
                  <div class="grid-num">2/6</div>
                  <div>未到齐</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <span class="grid-con-icon">107</span>

                <div class="grid-cont-right">
                  <div class="grid-num">6/6</div>
                  <div>人员到齐</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <span class="grid-con-icon">108</span>

                <div class="grid-cont-right">
                  <div class="grid-num">6/6</div>
                  <div>人员到齐</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <span class="grid-con-icon">109</span>

                <div class="grid-cont-right">
                  <div class="grid-num">6/6</div>
                  <div>人员到齐</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <span class="grid-con-icon">110</span>

                <div class="grid-cont-right">
                  <div class="grid-num">6/6</div>
                  <div>人员到齐</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-1">
                <span class="grid-con-icon">111</span>

                <div class="grid-cont-right">
                  <div class="grid-num">0/6</div>
                  <div>未到齐</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-card
              shadow="hover"
              :body-style="{padding: '0px'}"
            >
              <div class="grid-content grid-con-2">
                <span class="grid-con-icon">112</span>

                <div class="grid-cont-right">
                  <div class="grid-num">6/6</div>
                  <div>人员到齐</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

  </div>
</template>


<script>
export default {
  data() {
    return {
      changeDetail: false,
      value2: false
    };
  },
  methods: {
    showDetail() {
      this.changeDetail = !this.changeDetail;
    }
  }
};
</script>
<style scoped>
.floor {
  width: 100px;
  height: 300px;
  float: left;
  line-height: 300px;
  text-align: center;
  background-color: rgb(218, 237, 246);
}
.floor-name {
  font-size: 30px;
  color: rgb(68, 136, 195);
}
.studentname {
  color: gray;
  margin-right: 4px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  margin-bottom: 8px;
}
.grid-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
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
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: orange;
}

.grid-con-1 .grid-num {
  color: orange;
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}
.grid-con-4 .grid-con-icon {
  background: gray;
}

.grid-con-4 .grid-num {
  color: gray;
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