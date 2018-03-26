import Vue from 'vue'

const ToolbarPlugin = {
    active: false,
    subs: [],
    install(vue, opts) {
        vue.prototype.$toolbar = this
    },
    onchange(cb) {
        this.subs.push(cb)
    },
    toggle() {
        this.active = !this.active
        this.notifySubscribers()
    },
    notifySubscribers() {
        this.subs.forEach(cb => {
            cb(this.active)
        })
    }
}

Vue.use(ToolbarPlugin)