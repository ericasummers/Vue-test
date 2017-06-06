Vue.component('table-component', {
        template: '<p class="table">This is a table</p>'
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
}