<template>
    <v-parallax :src="src" :height="height" v-if="parallax">
        <v-layout v-resize="onResize" :class="mainClass">
            <slot></slot>
        </v-layout>
    </v-parallax>
    <v-layout v-resize="onResize" :style="style" :class="mainClass" v-else>
        <slot></slot>
    </v-layout>
</template>
<script>
let mainToolBarHeight = 64
export default {
    data() {
            this.$toolbar.onchange(cur => {
                this.toolbarActive = cur
            })
            let windowHeight = 900
            if (process.browser) {
                windowHeight = window.innerHeight
            }
            return {
                windowSize: {
                    x: 0,
                    y: windowHeight
                },
                classes: [],
                toolbarActive: this.$toolbar.active
            }
        },
        mounted() {
            this.classes = Object.keys(this.$attrs || {}).map(key => {
                const value = this.$attrs[key]
                return ((typeof value === 'string') || value) ? key : false
            }).filter(Boolean)
            this.onResize = this.onResize.bind(this)
            this.onResize()
            window.addEventListener('resize', this.onResize)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResize)
        },
        computed: {
            style() {
                return {
                    height: this.full ? this.height / this.divisor + 'px' : 'auto'
                }
            },
            mainClass() {
                const defaultLayoutClasses = 'column justify-center',
                    layoutClasses = this.classes.join(' ') || defaultLayoutClasses
                return layoutClasses
            },
            height() {
                return this.windowSize.y - (this.toolbarActive ? mainToolBarHeight : 0)
            }
        },
        props: {
            parallax: {
                type: Boolean,
                default: false
            },
            src: String,
            full: {
                type: Boolean,
                default: true
            },
            divisor: {
                type: Number,
                default: 1
            }
        },
        methods: {
            onResize() {
                if (this.$vuetify.breakpoint.mdAndDown) {
                    mainToolBarHeight = 48
                } else {
                    mainToolBarHeight = 64
                }
                this.windowSize = {
                    x: window.innerWidth,
                    y: window.innerHeight
                }
            }
        }
}
</script>
