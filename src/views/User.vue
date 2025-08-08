<script setup>
import { getUserData } from '@/api/requests'
import { onMounted, reactive, ref } from 'vue';

let tableData = ref([]);
const getUser =async ()=>{
  await getUserData(config).then(res=>{
    tableData.value = res.data.data.list.map(item=>{
      return{
        ...item,
        sexLabel : item.sex === 1 ? '男':'女'
      }
    })
  })
}
onMounted(()=>{
  getUser()
})
const tableLabel = reactive([
  {
    prop:'name',
    label:'姓名'
  },
  {
    prop:'age',
    label:'年龄'
  },
  {
    prop:'sexLabel',
    label:'性别'
  },
  {
    prop:'birthday',
    label:'出生日期',
    width:200
  },
  {
    prop:'address',
    label:'地址',
    width:400
  },
])
const formInline = reactive({
  keyword:''
})
const config = reactive({
  name:''
})
const handleSearch = ()=>{
  config.name = formInline.keyword;
  getUser()
}

const dialogVisible =ref(false)
const action = ref('add')
const formUser = reactive({})
const handleCancel = () => {
  dialogVisible.value = false
}
const addButton = () => {
  dialogVisible.value = true
}
const editUser = () => {
  dialogVisible.value = true
  action.value = 'edit'
}
</script>

<template>
    <div class="user-header">
        <el-button type="primary" @click="addButton">新增</el-button>
        <el-form :inline="true" :model="formInline">
            <el-form-item label="请输入">
                <el-input v-model="formInline.keyword" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSearch">搜索</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div class="table">
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column 
              v-for="item in tableLabel" 
              :key="item.prop" 
              :prop="item.prop"
              :label="item.label"
              :width="item.width ? item.width : 100" />

            <el-table-column fixed="right" label="操作" min-width="120">
              <template #default>
                  <el-button type="primary" size="small" @click="editUser">编辑</el-button>
                  <el-button type="danger" size="small">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next" 
          :total="1000">
        </el-pagination>
    </div>

    <el-dialog
      v-model="dialogVisible"
      :title="action == 'add' ? '新增用户' : '编辑用户'"
      width="35%"
      :before-close="handleClose"
    >

      <el-form :inline="false"  :model="formUser" :rules="rules" ref="userForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formUser.name" placeholder="请输入姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="formUser.age" placeholder="请输入年龄" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item class="select-clearn" label="性别" prop="sex">
              <el-select  v-model="formUser.sex" placeholder="请选择">
                <el-option label="男" value="1" />
                <el-option label="女" value="0" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生日期" prop="birth">
              <el-date-picker
                v-model="formUser.birth"
                type="date"
                placeholder="请输入"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item
            label="地址"
            prop="addr"
          >
            <el-input v-model="formUser.addr" placeholder="请输入地址" />
          </el-form-item>
        </el-row>
        <el-row style="justify-content: flex-end">
          <el-form-item>
            <el-button type="primary" @click="handleCancel">取消</el-button>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-dialog>
</template>

<style scoped lang="less">
.user-header{
    display: flex;
    justify-content: space-between;
}
</style>