<template>
  <div class="singer">
    <mt-index-list>
      <mt-index-section :index="item.title" v-for="(item,i) in dataList" :key="i">
        <div v-for="list in item.items" :key="list.id" style="margin-bottom: 10px" @click="goBack()">
          <img width="60" class="avicon" height="60" v-lazy="list.avicon" alt="">
          <mt-cell :title="list.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSingerList} from 'api/api.singerLis'
  import {ERR_OK} from 'api/api.config'
  export default {
    data() {
      return {
        dataList: [],
      }
    },
    created() {
      this._getSingerList();
    },
    methods: {
      goBack() {
        this.$router.push('/singer/100')
      },
      _getSingerList() {
        getSingerList().then(res => {
          if (res.code === ERR_OK) {
            this.dataList = this._filter(res.data.list);
          }
        })
      },
      _filter(v){
        let result = {
          hot: {
            title: '热',
            items: []
          }

        }
        v && v.map((item, i) => {
          // 前十条为热门
          if (i < 10) {
            result.hot.items.push({
              id: item.Fsinger_mid,
              name: item.Fsinger_name,
              avicon: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`,
              pid: item.Fsinger_id,
              index: item.Findex
            })
          }
          const k = result[item.Findex];
          //是否是a-z
          if (/^[A-Za-z]+$/.test(item.Findex)) {
            // 判断k是否存在,
            if (!k) {
              result[item.Findex] = {
                title: item.Findex,
                items: []
              }
            }
            result[item.Findex].items.push({
              id: item.Fsinger_mid,
              name: item.Fsinger_name,
              avicon: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`,
              pid: item.Fsinger_id,
              index: item.Findex
            })
          }
        });
        //对象转数组方便排序
        let list = [];
        let hot = [];
        for (let key in result) {
          if (key != 'hot') {
            list.push(result[key])
          } else {
            hot.push(result[key]);
          }
        }
        list.sort((a, b) => {
          //返回字符串第一个字符的 Unicode 编码比对
          return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        })
        return hot.concat(list);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../public/css/variable.scss";

  .mint-cell {
    vertical-align: middle;
    display: inline-block;
    background-color: $color-background;
  }

  .mint-indexsection-index {
    margin: 10px 0;
    background-color: $color-highlight-background;
    padding: 10px 0 10px 10px;
  }

  .mint-indexlist-content {
    margin-right: 0px !important;
  }

  .mint-indexlist-navlist {
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50px;
    color: rgba(255, 255, 255, 0.5);
  }

  .mint-indexlist-nav {
    background: rgba(0, 0, 0, 0);
    border-left: 0px;
  }

  .avicon {
    margin-left: 10px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .mint-cell:last-child {
    background-image: -webkit-linear-gradient(top, $color-background, $color-background 50%, transparent 50%);
    background-image: linear-gradient(180deg, $color-background, $color-background 50%, transparent 50%);
  }

  .mint-cell-wrapper {

    background-image: -webkit-linear-gradient(top, $color-background, $color-background 50%, transparent 50%);
    background-image: linear-gradient(180deg, $color-background, $color-background 50%, transparent 50%);
  }

  .mint-indexlist-content {
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
  }
</style>
