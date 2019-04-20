<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 人员管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-button
          type="primary"
          icon="delete"
          class="handle-del mr10"
          @click="delAll"
        >新增人员</el-button>
        <el-button
          type="primary"
          icon="delete"
          class="handle-del mr10"
          @click="delAll"
        >批量删除</el-button>
        <el-button
          type="primary"
          icon="delete"
          class="handle-del mr10"
          @click="delAll"
        >批量新增</el-button>

        <el-input
          v-model="select_word"
          placeholder="查找人员"
          class="handle-input mr10"
        ></el-input>
        <el-button
          type="primary"
          icon="search"
          @click="search"
        >搜索</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        class="table"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="40"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="num"
          label="序号"
          sortable
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="studentID"
          label="学号"
          sortable
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="idnumber"
          label="身份证"
          sortable
          width="100"
        >
        </el-table-column>
        <el-table-column
          label="照片"
          sortable
          width="110"
        >
          <template slot-scope="scope">

            <img
              width="100"
              :src="scope.row.photo"
              alt="照片"
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="college"
          label="学院"
          sortable
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="department"
          label="系"
          sortable
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="class"
          label="班级"
          sortable
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="dormitory"
          label="宿舍楼"
          sortable
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="roodid"
          label="宿舍号"
          sortable
          width="110"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="100"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog
      title="编辑"
      :visible.sync="editVisible"
      width="30%"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="50px"
      >
        <el-form-item label="日期">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            value-format="yyyy-MM-dd"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>

      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="saveEdit"
        >确 定</el-button>
      </span>
    </el-dialog>

    <!-- 删除提示框 -->
    <el-dialog
      title="提示"
      :visible.sync="delVisible"
      width="300px"
      center
    >
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="deleteRow"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "basetable",
  data() {
    return {
      url: "./person.json",
      tableData: [],
      cur_page: 1,
      multipleSelection: [],
      select_cate: "",
      select_word: "",
      del_list: [],
      is_search: false,
      editVisible: false,
      delVisible: false,
      form: {
        name: "",
        date: "",
        address: ""
      },
      idx: -1
    };
  },
  created() {
    this.getData();
  },
  computed: {
    data() {
      if (this.tableData.length !== 0) {
        return this.tableData.filter(d => {
          let is_del = false;
          for (let i = 0; i < this.del_list.length; i++) {
            if (d.name === this.del_list[i].name) {
              is_del = true;
              break;
            }
          }
          if (!is_del) {
            if (
              d.address.indexOf(this.select_cate) > -1 &&
              (d.name.indexOf(this.select_word) > -1 ||
                d.address.indexOf(this.select_word) > -1)
            ) {
              return d;
            }
          }
        });
      }
    }
  },
  methods: {
    // 分页导航
    // handleCurrentChange(val) {
    //   this.cur_page = val;
    //   this.getData();
    // },
    // 获取 easy-mock 的模拟数据
    getData() {
      // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
      // if (process.env.NODE_ENV === "development") {
      //   this.url = "/ms/table/list";
      // }
      axios.post("/api/person").then(res => {
        this.tableData = res.data.list;
      });
    },
    search() {
      this.is_search = true;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleEdit(index, row) {
      this.idx = index;
      const item = this.tableData[index];
      this.form = {
        name: item.name,
        date: item.date,
        address: item.address
      };
      this.editVisible = true;
    },
    handleDelete(index, row) {
      this.idx = index;
      this.delVisible = true;
    },
    delAll() {
      const length = this.multipleSelection.length;
      let str = "";
      this.del_list = this.del_list.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + " ";
      }
      this.$message.error("删除了" + str);
      this.multipleSelection = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 保存编辑
    saveEdit() {
      this.$set(this.tableData, this.idx, this.form);
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
    },
    // 确定删除
    deleteRow() {
      this.tableData.splice(this.idx, 1);
      this.$message.success("删除成功");
      this.delVisible = false;
    }
  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
</style>