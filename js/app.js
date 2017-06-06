Vue.component('table-component', {
        template: '<p class="table">This is a table</p>'
    })

Vue.component('api-component', {
    template: '<p class="api">The weather is: </p>'
})

window.onload = function() {
    var header = new Vue({
        el: '#header',
        data: {
            message: 'Vue Works!'
        }
    })

    var paragraph = new Vue({
        el: '#paragraph',
        data: {
            message: 'Vue has paragraphs'
        }
    })

    var piece = new Vue({
        el: '#table'
    })

    var api = new Vue({
        el: '#api',
        data: {
            result: []
        },
        created: function() {
            this.showWeather();
        },
        methods: {
            showWeather: function() {
                this.$http.get('http://api.openweathermap.org/data/2.5/forecast?id=5746545&APPID=742bde82c919119ade40d7d9879ca90e')
                .then(function(response) {
                    this.result = response.bodyText.list;
                    console.log(response);
                    console.log(response.bodyText.list);
                })
                .error((err) => console.log(err))
            }
        }
    })
}