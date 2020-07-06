<template>
  <div class="computed">
    <!-- 计算属性无法检测到数组的变化 -->
    <!-- {{allData}} -->
    {{name1}}
    <div v-if="name1">姓名: {{name1.name}}</div>
    <div v-if="name1">年级: {{name1.age}}</div>
  </div>
</template>

<script>
let attendanceData = [
  {
    name: "张三",
    age: 13
  },
  {
    name: "李四",
    age: 15
  },
  {
    name: "王五",
    age: 18
  }
];
export default {
  data() {
    return {
      num: 0,
      arr: [1],
      allData: []
    };
  },
  computed: {
    newNum: function() {
      return this.num * 100;
    },
    newArr: function() {
      return this.arr;
    },
    name1: function() {
      // return this.allData[0]
      const aaa = this.allData.filter((item) => {
        return item.name === '张三'
      })
      console.log(aaa)
      return aaa[0]
    }
  },
  watch: {
    allData: {
      handler: function() {
        // console.log('watch', this.allData);
      },
      deep: true
    }
  },
  created() {
    this.findAllData();
  },
  mounted() {
    // setInterval(() => {
    //   this.num ++
    // }, 1000)
    // setInterval(() => {
    //   this.arr.push(Math.random());
    // }, 1000);
    setInterval(() => {
      this.allData.map(item => {
        // console.log(item)
        item.age = this.random(1, 100);
        // console.log(item)
        return item;
      });
    }, 3000);
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    findAllData() {
      // this.$set(this.allData, 0 ,false)
      this.allData = attendanceData;
    }
  }
};
</script>