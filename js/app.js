Vue.component('table-component', {
        template: '<p class="table">This is a table</p>'
    })

Vue.component('weather-title', {
    template: '<p class="api">The weather in Portland, OR is currently: </p>'
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

    var weathertitle = new Vue({
        el: '#weather-title'
    })

    var api = new Vue({
        el: '#api',
        data: {
            showWeather: []
        },
        created: function() {
            this.fetchWeather();
        },
        methods: {
            fetchWeather: function() {
                this.$http.get('http://api.openweathermap.org/data/2.5/forecast?id=5746545&APPID=742bde82c919119ade40d7d9879ca90e')
                .then(response => {
                    this.showWeather = response.data.list[0].weather[0].description + ' with a temperature of ' + (response.data.list[0].main.temp * (9/5) - 459.67).toFixed(2) + ' degrees Fahrenheit';
                    console.log(response);
                })
                .error((err) => console.log(err))
            }
        }
    })
}