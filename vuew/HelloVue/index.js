var app = new Vue({
    el: '#app',
    data:{
        message:'Hello Vue!'
    }
})

var app2 = new Vue({
    el:'#app2',
    data:{
        message:"页面加载于" + new Date().toLocaleString()
    }
})  

var app3 = new Vue({
    el:'#app3',
    data:{
        seen:true
    }
})

var app4 = new Vue({
    el:'#app4',
    data:{
        todos:[
            {text:'学习js'},
            {text:'学习vue'},
            {text:'整个项目'}
        ]
    }
})

var app5 = new Vue({
    el:'#app5',
    data:{
        message:"Hello vue.js!"
    },
    methods: {
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el:'#app6',
    data:{
        message:'hello boy'
    }
}
)

Vue.component('todo-item', {
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

var app7 =new Vue({
    el:'#app7',
    data:{
        groceryList:[
            {id: 0 ,text:'蔬菜'},
            {id: 1 ,text:'奶酪'},
            {id: 2 ,text:'whatever others want to eat'}
        ]
    }
})

//侦听属性
var vm = new Vue({
    el:'#demo',
    data:{
        firstName:'Foo',
        lastName:'Bar',
        
    },
    computed: {
        fullName: {
          // getter
          get: function () {
            return this.firstName + ' ' + this.lastName
          },
          // setter
          set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        }
      }
})

//侦听器 
var watchExampleVM = new Vue({
    el:'#watch-example',
    data:{
        question:'',
        answer:'I cannot give you an answer until you ask a question!'
    },
    watch:{
        question:function(newQuestion,oldQuestion){
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created:function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer,500)
    },
    methods:{
        getAnswer:function(){
            if(this.question.indexOf('?') === -1){
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
            .then(function(response){
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function(error){
                vm.answer = 'Error! Could not reach the API.' + error
            })
        }
    }
})


