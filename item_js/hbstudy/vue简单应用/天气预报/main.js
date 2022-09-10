
var app = new Vue({
    el: '#app',
    data: {
        weatherList: [],
        city: '',
    },
    methods: {
        searchWeather: function () {
            // console.log(this.city)
            var that = this
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
                .then(function (response) {
                    console.log(response);
                    that.weatherList = response.data.data.forecast
                })
                .catch(function (err) {
                })
        },
        changeCity: function (city) {
            this.city = city;
            this.searchWeather();
        }
    }
})