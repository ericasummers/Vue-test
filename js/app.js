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
                this.$http.get('http://api.openweathermap.org/data/2.5/forecast?id=5746545&APPID=' + '742bde82c919119ade40d7d9879ca90e')
                .then(response => {
                    this.showWeather = response.data.list[0].weather[0].description + ' with a temperature of ' + (response.data.list[0].main.temp * (9/5) - 459.67).toFixed(2) + ' degrees Fahrenheit';
                    // console.log(response);
                })
                // .error((err) => console.log(err))
            }
        }
    })

    var gitlab = new Vue({
        el: '#gitlab',
        data: {
            groupIDs: [],
            projectIDs: [],
            projectNames: [],
            showMerges: []
        },
        created: function() {
            this.fetchGroups();
        },
        methods: {
            fetchGroups: function() {
                for (var j = 1; j < 4; j++) {
                    this.$http.get(('https://git.soliddigital.com/api/v3/groups?per_page=100&page=' + j), {
                    headers: {'PRIVATE-TOKEN': 'JqDaT9zbaZyWNKXjsB2L'}
                    })
                    .then(response => {
                        for (var i = 0; i < response.data.length; i++) {
                            this.groupIDs.push(response.data[i].id);
                        }
                        console.log(this.groupIDs);
                        return this.groupIDs;
                    })

                    .then(groups => {
                        for (var j = 0; j < groups.length; j++) {
                            this.$http.get('https://git.soliddigital.com/api/v3/groups/' + groups[j] + '/projects?per_page=100', {
                                headers: {'PRIVATE-TOKEN': 'JqDaT9zbaZyWNKXjsB2L'}
                            })
                            .then(response => {
                                for (var i = 0; i < response.data.length; i++) {
                                    this.projectNames.push(response.data[i].name);
                                }
                                console.log(this.projectNames);
                            })
                        }
                    })
                    // .then(mergerequests) etc
                }
            }

        }
    })
}