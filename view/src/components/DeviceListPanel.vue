<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1>裝置列表</h1>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push('/device/create')">創建新裝置</v-btn>
            <v-btn @click="$router.push('/device/insertData')">新增資料</v-btn>
            <v-btn @click="load">重新整理</v-btn>
          </v-card-actions>
          <v-list two-line>
            <template v-for="(device, index) in devicesList">
              <v-list-tile :key="index">
                <v-list-tile-content>
                  <v-list-tile-title>{{device.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{device._id}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider v-if="index < devicesList.length - 1"
                         :key="index + '-devider'"></v-divider>
            </template>
          </v-list>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../api'
export default {
  name: 'DeviceListPanel',
  data () {
    return {
      devicesList: []
    }
  },
  methods:{
    load() {
      api.device.list()
        .then(data => {
          this.devicesList = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.load()
  }
}
</script>

<style scoped>
</style>
