<!--
  * @module: /Personal/Reimbursement
  * @Author: zhangzf
  * @Description: 我的考勤中的日历样式考勤图表
-->
<template>
  <div class="date-chart">
    <!-- 日历样式考勤图表挂载的div -->
    <div id="data" style="width:100%;height:100%" />
  </div>
</template>

<script>
import echarts from "echarts";
// 日期图表
var dateList = [
  ["2019-12-1", "出勤"],
  ["2019-12-2", "出勤"],
  ["2019-12-3", "出勤"],
  ["2019-12-4", "出勤"],
  ["2019-12-5", "出勤"],
  ["2019-12-6", "出勤"],
  ["2019-12-7", "出勤"],
  ["2019-12-8", "出勤"],
  ["2019-12-9", "出勤"],
  ["2019-12-10", "出勤"],
  ["2019-12-11", "出勤"],
  ["2019-12-12", "出勤"],
  ["2019-12-13", "出勤"],
  ["2019-12-14", "出勤"],
  ["2019-12-15", "出勤"],
  ["2019-12-16", "出勤"],
  ["2019-12-17", "出勤"],
  ["2019-12-18", "出勤"],
  ["2019-12-19", "出勤"],
  ["2019-12-19", "出勤"],
  ["2019-12-20", "出勤"],
  ["2019-12-21", "出勤"],
  ["2019-12-22", "出勤"],
  ["2019-12-23", "出勤"],
  ["2019-12-24", "出勤"],
  ["2019-12-25", "出勤"],
  ["2019-12-26", "出勤"],
  ["2019-12-27", "出勤"],
  ["2019-12-28", "出勤"],
  ["2019-12-29", "出勤"],
  ["2019-12-30", "出勤"],
  ["2019-12-31", "出勤"]
];
let recordData = [
  {
    workShift: "08:30",
    workPlace: "美居客01",
    closingTime: "17:30",
    closingPlace: "美居客01"
  },
  {
    workShift: "08:30",
    workPlace: "美居客02",
    closingTime: "17:30",
    closingPlace: "美居客02"
  },
  {
    workShift: "08:30",
    workPlace: "美居客03",
    closingTime: "17:30",
    closingPlace: "美居客03"
  },
  {
    workShift: "08:30",
    workPlace: "美居客04",
    closingTime: "17:30",
    closingPlace: "美居客04"
  },
  {
    workShift: "08:30",
    workPlace: "美居客05",
    closingTime: "17:30",
    closingPlace: "美居客05"
  },
  {
    workShift: "08:30",
    workPlace: "美居客06",
    closingTime: "17:30",
    closingPlace: "美居客06"
  },
  {
    workShift: "08:30",
    workPlace: "美居客07",
    closingTime: "17:30",
    closingPlace: "美居客07"
  },
  {
    workShift: "08:30",
    workPlace: "美居客08",
    closingTime: "17:30",
    closingPlace: "美居客08"
  },
  {
    workShift: "08:30",
    workPlace: "美居客09",
    closingTime: "17:30",
    closingPlace: "美居客09"
  },
  {
    workShift: "08:30",
    workPlace: "美居客10",
    closingTime: "17:30",
    closingPlace: "美居客10"
  },
  {
    workShift: "08:30",
    workPlace: "美居客11",
    closingTime: "17:30",
    closingPlace: "美居客11"
  },
  {
    workShift: "08:30",
    workPlace: "美居客12",
    closingTime: "17:30",
    closingPlace: "美居客12"
  },
  {
    workShift: "08:30",
    workPlace: "美居客13",
    closingTime: "17:30",
    closingPlace: "美居客13"
  },
  {
    workShift: "08:30",
    workPlace: "美居客14",
    closingTime: "17:30",
    closingPlace: "美居客14"
  },
  {
    workShift: "08:30",
    workPlace: "美居客15",
    closingTime: "17:30",
    closingPlace: "美居客15"
  },
  {
    workShift: "08:30",
    workPlace: "美居客16",
    closingTime: "17:30",
    closingPlace: "美居客16"
  },
  {
    workShift: "08:30",
    workPlace: "美居客17",
    closingTime: "17:30",
    closingPlace: "美居客17"
  },
  {
    workShift: "08:30",
    workPlace: "美居客18",
    closingTime: "17:30",
    closingPlace: "美居客18"
  },
  {
    workShift: "08:30",
    workPlace: "美居客19",
    closingTime: "17:30",
    closingPlace: "美居客19"
  },
  {
    workShift: "08:30",
    workPlace: "美居客19",
    closingTime: "17:30",
    closingPlace: "美居客19"
  },
  {
    workShift: "08:30",
    workPlace: "美居客20",
    closingTime: "17:30",
    closingPlace: "美居客20"
  },
  {
    workShift: "08:30",
    workPlace: "美居客21",
    closingTime: "17:30",
    closingPlace: "美居客21"
  },
  {
    workShift: "08:30",
    workPlace: "美居客22",
    closingTime: "17:30",
    closingPlace: "美居客22"
  },
  {
    workShift: "08:30",
    workPlace: "美居客23",
    closingTime: "17:30",
    closingPlace: "美居客23"
  },
  {
    workShift: "08:30",
    workPlace: "美居客24",
    closingTime: "17:30",
    closingPlace: "美居客24"
  },
  {
    workShift: "08:30",
    workPlace: "美居客25",
    closingTime: "17:30",
    closingPlace: "美居客25"
  },
  {
    workShift: "08:30",
    workPlace: "美居客26",
    closingTime: "17:30",
    closingPlace: "美居客26"
  },
  {
    workShift: "08:30",
    workPlace: "美居客27",
    closingTime: "17:30",
    closingPlace: "美居客27"
  },
  {
    workShift: "08:30",
    workPlace: "美居客28",
    closingTime: "17:30",
    closingPlace: "美居客28"
  },
  {
    workShift: "08:30",
    workPlace: "美居客29",
    closingTime: "17:30",
    closingPlace: "美居客29"
  },
  {
    workShift: "08:30",
    workPlace: "美居客30",
    closingTime: "17:30",
    closingPlace: "美居客30"
  },
  {
    workShift: "08:30",
    workPlace: "美居客31",
    closingTime: "17:30",
    closingPlace: "美居客31"
  }
];

var heatmapData = [];
// console.log(dateList)
var lunarData = [];
for (var i = 0; i < dateList.length; i++) {
  heatmapData.push([dateList[i][0], Math.random() * 300]);
  lunarData.push([dateList[i][0], 1, dateList[i][1], dateList[i][2]]);
  // console.log('heatmapData', heatmapData)
  // console.log('lunarData', lunarData)
}
export default {
  // name: 'dateChart',
  data() {
    return {};
  },

  mounted() {
    this.drawChart();
  },

  methods: {
    drawChart() {
      const dataChart = echarts.init(document.getElementById("data"));
      const option = {
        tooltip: {
          formatter: function(params) {
            // console.log('========', recordData)
            // return "降雨量: " + params.value[1];
            return `
              上班时间：${recordData[params.dataIndex].workShift} <br/>
              上班地点：${recordData[params.dataIndex].workPlace} <br/>
              下班时间：${recordData[params.dataIndex].closingTime} <br/>
              下班地点：${recordData[params.dataIndex].closingPlace}
            `
          }
        },

        visualMap: {
          show: false,
          min: 0,
          max: 300,
          calculable: true,
          seriesIndex: [2],
          orient: "horizontal",
          left: "center",
          bottom: 20,
          inRange: {
            color: ["#e0ffff"],
            opacity: 0.3
          },
          controller: {
            inRange: {
              opacity: 0.3
            }
          }
        },

        calendar: [
          {
            left: "center",
            // top: "middle",
            cellSize: [70, 70],
            yearLabel: { show: true },
            orient: "vertical",
            dayLabel: {
              firstDay: 1,
              nameMap: "cn"
            },
            monthLabel: {
              show: true,
              nameMap: "cn"
            },
            range: "2019-12"
          }
        ],

        series: [
          {
            type: "scatter",
            coordinateSystem: "calendar",
            symbolSize: 1,
            label: {
              show: true,
              formatter: function(params) {
                // console.log(params);
                var d = echarts.number.parseDate(params.value[0]);
                return d.getDate() + "\n\n" + params.value[2] + "\n\n";
              },
              color: "#000"
            },
            data: lunarData
          },
          {
            type: "scatter",
            coordinateSystem: "calendar",
            symbolSize: 1,
            label: {
              show: true,
              formatter: function(params) {
                return "\n\n\n" + (params.value[3] || "");
              },
              fontSize: 14,
              fontWeight: 700,
              color: "#a00"
            },
            data: lunarData
          },
          {
            name: "降雨量11111",
            type: "heatmap",
            coordinateSystem: "calendar",
            data: heatmapData
          }
        ]
      };
      dataChart.setOption(option);
    }
  }
};
</script>

<style scoped>
.date-chart {
  width: 100%;
  height: 100%;
}
</style>
