new Vue({
	el:'#app',
	data:{
		arrayMusic:[],
	},
	methods:{

	},

	mounted() {
		let self=this
		axios.get(' https://flynn.boolean.careers/exercises/api/array/music')
              .then(function(element) {
               self.arrayMusic.push(element.data.response)      
              });
       
      }
})//finevue