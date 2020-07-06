import axios from 'axios';
import qs from 'qs'

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://192.168.50.50:10000'
// axios.defaults.baseURL = 'http://47.107.71.18:8888'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((config)=>{
	if(config.method == 'post'){
		config.data = qs.stringify(config.data,{arrayFormat:'repeat'});
	}
	return config;
})

/*
	在请求每次回来的时候先判断回应信息中是否包含了未登录信息
	如果包含，直接跳转到登录页面，
	否则正常进行
*/
// axios.interceptors.response.use((response)=>{
// 	if(response&& response.data.status == 500 && response.data.message=='尚未登录，请登录!'){
// 		window.vm.currentComponent = 'Login';
// 	}
// 	return response;
// });

//axios本版本不支持jsonp 自己拓展一个
// let url = '192.168.0.1'
// axios.jsonp = (url) => {
// 	if(!url){
// 			console.error('Axios.JSONP 至少需要一个url参数!')
// 			return;
// 	}
// 	return new Promise((resolve,reject) => {
// 			window.jsonCallBack =(result) => {
// 					resolve(result)
// 			}
// 			var JSONP=document.createElement("script");
// 			JSONP.type="text/javascript";
// 			JSONP.src=`${url}&callback=jsonCallBack`;
// 			document.getElementsByTagName("head")[0].appendChild(JSONP);
// 			setTimeout(() => {
// 					document.getElementsByTagName("head")[0].removeChild(JSONP)
// 			},500)
// 	})
// }

export default axios;