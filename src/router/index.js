import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/pages/Category'
import Article from '@/pages/Article'
import User from '@/pages/User'
import Test from '@/pages/Test'
import Input from '@/components/Input'
import CalendarSelf from '@/pages/CalendarSelf'
import ErpOne from '@/pages/ErpOne'
import ErpTwo from '@/pages/ErpTwo'
import ErpThree from '@/pages/ErpThree'
import ErpFour from '@/pages/ErpFour'
import TimeLine from '@/pages/TimeLine'
import Charts from '@/pages/charts'
import Chacao from '@/pages/chacao/chacao'
import ChacaoChild from '@/pages/chacao/chacaoChild'
import FileUpload from '@/pages/fileUpload'
import DownloadPDF from '@/pages/downloadPDF'
import DownloadPDFShow from '@/pages/downloadPDFShow'
import FileUploadImg from '@/pages/fileUploadImg'
import FileUploadOne from '@/pages/FileUploadOne'
import Inputs from '@/pages/input'
import CalendarEcharts from '@/pages/Calendar-echarts'
import Computed from '@/pages/Computed'
import CalendarChartsOne from '@/pages/Calendar-chartsOne'
import RegionalLinkage from '@/pages/RegionalLinkage'
import RichText from '@/pages/RichText'
import TableChangesColumnColor from '@/pages/TableChangesColumnColor'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      component: Test
    },
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/input',
      component: Input
    },
    {
      path: '/calendarSelf',
      component: CalendarSelf
    },{
      path: '/erpOne',
      component: ErpOne
    },
    {
      path: '/erpTwo',
      component: ErpTwo
    },
    {
      path: '/erpThree',
      component: ErpThree
    },
    {
      path: '/erpFour',
      component: ErpFour
    },
    {
      path: '/timeLine',
      component: TimeLine
    },
    {
      path: '/charts',
      component: Charts
    },
    {
      path: '/chacao',
      component: Chacao
    },
    {
      path: '/chacao',
      component: Chacao
    },{
      path: '/chacaoChild',
      component: ChacaoChild
    },
    {
      path: '/fileUpload',
      component: FileUpload    
    },
    {
      path: '/downloadPDF',
      component: DownloadPDF
    },
    {
      path: '/downloadPDFShow',
      component: DownloadPDFShow
    },
    {
      path: '/fileUploadImg',
      component: FileUploadImg
    },
    {
      path: '/fileUploadOne',
      component: FileUploadOne
    },
    {
      path: '/inputs',
      component: Inputs
    },
    {
      path: '/calendarEcharts',
      component: CalendarEcharts
    },
    {
      path: '/computed',
      component: Computed
    },
    {
      path: '/calendarChartsOne',
      component: CalendarChartsOne
    },
    {
      path: '/regionalLinkage',
      component: RegionalLinkage
    },
    {
      path: '/richText',
      component: RichText
    },
    {
      path: '/tableChangesColumnColor',
      component: TableChangesColumnColor
    }
  ]
})









