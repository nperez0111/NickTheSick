<template>
    <v-app dark>
        <v-navigation-drawer v-if="false" v-model="drawer" fixed app>
            <v-list>
                <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed app v-if="toolbar">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title" @click="$router.push('/')"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <nuxt />
        </v-content>
    </v-app>
</template>
<script>
export default {
    data() {
        this.$toolbar.onchange(cur => {
            this.toolbar = cur
        })
        return {
            drawer: false,
            toolbar: this.$toolbar.active,
            items: [{
                icon: 'apps',
                title: 'Home',
                to: '/'
            }, {
                icon: 'perm_identity',
                title: 'About Nick',
                to: '/about'
            }],
            title: 'Nick the Sick'
        }
    }
}
</script>
