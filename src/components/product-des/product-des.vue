<template>
  <div class="product-des">
    <div>
      <span>
        <b v-if="flag == 1">距活动开始的时间</b>
        <b v-else-if="flag == 2">距活动结束的时间</b>
        <b v-else-if="flag == 3">活动结束</b>
        :{{t}}
      </span>
    </div>
    <div>
      <button v-if="flag == 1">距活动开始的时间</button>
      <button v-else-if="flag == 2">距活动结束的时间</button>
      <button v-else-if="flag == 3">活动结束</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getDisc} from 'api/api.recommend'
  export default {
    data() {
      return {
        t: '',
        flag: 0,
        watchFlag:''
      }
    },
    created() {
      this._getDisc();
    },
    methods: {
      _getDisc() {
        getDisc().then(res => {
          if (res.succeed) {
            this.countDown(res.data.startTime,res.data.currentTime,res.data.endTime)
          }
        })
      },
      countDown(date, currentTime, endTiem) {
        var _this = this;
        var setTime = new Date(date).getTime();// 距活动开始的时间
//        var systemsCurrentTime = new Date(currentTime).getTime();// 系统当前时间
        var systemsCurrentTime = currentTime;// 系统当前时间
        var systemsEndTime = new Date(endTiem).getTime();// 距活动结束的时间
        var timer = null;
        if ((setTime - systemsCurrentTime) > 0) {
          // 活动未开始
          core(_this, 1);
          _this.flag = 1;
        } else if ((systemsEndTime - systemsCurrentTime) > 0) {
          // 活动未结束
          core(_this, 2);
          _this.flag = 2;
        } else {
          // 结束
          _this.flag = 3;
          clearTimeout(timer);
        }
        function core(_this, flag) {
          var nowTime = new Date().getTime(),
            times,
            leftTime = 0,
            d = 0, h = 0, m = 0, s = 0;
          if (flag == 1) {
            times = setTime;
            leftTime = Math.ceil(( setTime - nowTime) / 1000);
          } else {
            times = systemsEndTime;
            leftTime = Math.ceil(( systemsEndTime - nowTime) / 1000);
          }
          if (nowTime <=times) {
            //按位非运算符，简单的理解就是改变运算数的符号并减去1,这里的意思去掉小数位
            d = ~~(leftTime / 86400);
            h = ~~(leftTime % 86400 / 3600);
            m = ~~(leftTime % 86400 % 3600 / 60);
            s = ~~(leftTime % 86400 % 3600 % 60);
            timer = setTimeout(() => {
              core(_this, flag)
            }, 1e3);
          } else {
            if (flag == 1) {
              // 活动开始
              _this.watchFlag = 1;
              console.log('活动开始')
            } else if (flag == 2) {
              // 活动开始
              _this.watchFlag = 2;
              console.log('活动快结束')
            } else {
              // 活动结束
              _this.watchFlag = 3;
              console.log('活动结束')
            }
            clearTimeout(timer);
            timer = null;
          }
          _this.t = '天' + d + ' 时' + h + ' 分' + m + ' 秒' + s;

        }
      }

    },
    watch:{
      watchFlag: function(val) {
        if(val == 1){
          this._getDisc();
        }else if(val ==2 ){
          this.flag =3;
        }
      }
    }
  }
</script>

<style lang="scss">
  .product-des {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
    background: #222;
  }

  button {
    background: #7e8c8d;
  }
</style>
