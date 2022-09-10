
var player = new Vue({
    el: '#player',
    data: {
        query: '',

        musicList: [],
        //歌曲播放   API出现了问题 不能用了 所以没法播放了
        musicUrl: '',
        //歌曲评论
        hotComments: [],
        MvUrl: '',
        //遮罩层的显示状态:
        isShow: false,
        //mv地址
        mvUrl: '',
    },
    methods: {
        searchMusic: function () {
            var that = this;//为了传递参数
            axios.get('https://cvm.tencentcloudapi.com/?Action=' + this.query)
                .then(function (response) {
                    console.log(response)
                    that.musicList = response.data.result.songs;
                })
                .catch(function (err) { })
        },
        playMusic: function (musicId) {
            //   console.log(musicId);
            var that = this;
            // 获取歌曲地址
            axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
                function (response) {
                    console.log(response);
                    // console.log(response.data.data[0].url);
                    that.musicUrl = response.data.data[0].url;
                    console.log(that.musicUrl);
                },
                function (err) { }
            );
            that.musicUrl = "http://music.163.com/song/media/outer/url?id=" + musicId + ".mp3";
            //歌曲评论获取
            axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + musicId)
                .then(function (response) {
                    that.hotComments = response.data.hotComments;
                })

                .catch(function (param) { })

        },
        //播放MV
        playMv: function (mvid) {
            var that = this;
            axios.get('https://autumnfish.cn/mv/url?id=' + mvid)
                .then(function (response) {
                    // console.log(response)
                    //console.log(response.data.data.url);
                    that.isShow = true;
                    that.mvUrl = response.data.data.url;
                })
                .catch(function (err) { })
        },
        //隐藏mv
        hide: function () {
            this.isShow = false;
            this.mvUrl = '';
        }

    }
})