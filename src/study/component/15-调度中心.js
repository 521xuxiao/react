

export let bus = {
    list: [],

    // 订阅者，用于接收消息
    subscribe: function (callback) {
        this.list.push(callback);
    },

    // 发布者，用于发送消息
    publish: function (text) {
        this.list.forEach(callback => {
            callback && callback(text);
        })
    }
}
