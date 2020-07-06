<template>
  <div class="timeLine">
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: 'xxx 确认收款2000元，金额备注：xxxxxxxxxx',
          timestamp: '2018-04-13'
        }, {
          content: 'xxx 申请开票1000元，金额备注：xxxxxxxxxxx',
          timestamp: '2018-04-11'
        }]
      };
    }
  };
</script>