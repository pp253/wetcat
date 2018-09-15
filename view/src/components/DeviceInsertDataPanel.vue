<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1>新增資料</h1>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-subheader>裝置基本資訊</v-subheader>
              <v-text-field v-model="deviceId"
                            label="裝置ID"
                            required></v-text-field>
              <v-subheader>資料</v-subheader>
              <v-layout wrap>
                <template v-for="(data, index) in dataList">
                  <v-flex xs12
                          sm6
                          :key="index + '-key'">
                    <v-text-field v-model="dataList[index].key"
                                  label="鍵名"></v-text-field>
                  </v-flex>
                  <v-flex xs12
                          sm6
                          :key="index + '-value'">
                    <v-text-field v-model="dataList[index].value"
                                  label="鍵值"></v-text-field>
                  </v-flex>
                </template>
              </v-layout>
              <v-btn @click="addData"
                     block>新增資料欄位</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn :disabled="!valid"
                   @click="submit">新增資料</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../api'
export default {
  name: 'DeviceInsertDataPanel',
  data () {
    return {
      valid: false,

      deviceId: '',
      dataList: []
    }
  },
  methods:{
    submit() {
      let obj = {}
      this.dataList.every(v => obj[v.key] = v.value)
      api.device.insertData(this.deviceId, obj)
    },
    addData(){
      this.dataList.push({key: '', value: ''})
    },
    removeData(index) {
      this.dataList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
</style>
