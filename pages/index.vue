<template>
    <v-layout column justify-center align-center>
        <Full-Height class="blue fullwidth" src="/trianglify.svg">
            <v-layout column justify-center align-center class="my-4">
                <h1 :class="{'text-xs-center':true, 'display-3':true, 'my-1':true}">I'm <span class="black--text">Nicholas Perez</span>.</h1>
                <h1 :class="{'text-xs-center':true, 'display-2':$vuetify.breakpoint.lgAndUp, 'display-3':$vuetify.breakpoint.xlAndUp,'display-1':$vuetify.breakpoint.mdAndDown,'mb-2':true}">I'm a full stack web developer.</h1>
                <h2 class="title text-xs-center">To create something that makes people wonder how they ever lived without it, is my goal.</h2>
            </v-layout>
            <v-layout column justify-space-between align-center>
                <div class="text-editor-wrap">
                    <div ref="typerStrings" style="display:none">
                        <p> a Full Stack Web Developer</p>
                        <p> a Software Engineer</p>
                        <p> a Software Developer</p>
                        <p> an Application Developer</p>
                        <p> an UI/UX Designer</p>
                    </div>
                    <div class="title-bar">
                        <span class="black--text">Nick The Sick' Website — bash — 120x20</span>
                    </div>
                    <div class="text-body green--text">
                        <p><span class="white--text">$</span> echo "<span class="white--text">$WELCOME_MESSAGE</span>"</p>
                        <p class="white--text">Welcome to my website!</p>
                        <p><span class="white--text">$</span> whoami</p>
                        <span class="white--text">I am </span><span ref="typer" class="white--text"></span>
                    </div>
                </div>
                <v-btn icon flat fab :class="{'ma-4':$vuetify.breakpoint.mdAndUp,'mb-3':$vuetify.breakpoint.smAndDown}" @click="$vuetify.goTo($refs['page-2'])">
                    <v-icon class="display-3">keyboard_arrow_down</v-icon>
                </v-btn>
            </v-layout>
        </Full-Height>
        <v-layout class="fullwidth blue darken-3 wrap py-5" ref="page-2">
            <v-layout class="xs12 flex fullwidth justify-center align-center pt-3 pb-5">
                <h1 class="display-2 mx-5 text-xs-center">I am Nick the Sick A.K.A Nicholas Perez</h1>
            </v-layout>
            <v-layout class="sm12 md5 flex fullwidth justify-center align-center py-5">
                <div class="avatar my-5">
                    <img src="https://image.shutterstock.com/mosaic_250/0/0/518740741.jpg" class="elevation-3 profile-img">
                </div>
            </v-layout>
            <v-layout class="sm12 md7 flex fullwidth justify-center align-center py-5 px-5">
                <p class="headline">I am a software developer who is passionate about technology and making new things. I specialize in front end web apps and websites, my genuine passion is that I want to make software to help make people’s lives easier. I have a dream wherein one day someone will show me either a product telling me how useful it is to them and to be able to say to them “I made that”.</br>
                    I have several years experience in making websites and web apps and it is where I am most comfortable (although I am capable in other fields such as scripts and servers).</p>
            </v-layout>
        </v-layout>
        <v-layout class="fullwidth indigo darken-3 justify-center align-center" wrap>
            <v-layout class="xs12 flex fullwidth justify-center align-center py-5">
                <h1 class="display-2 mx-5 text-xs-center">Recent Projects</h1>
            </v-layout>
            <v-layout class="md6 lg4 xl3 flex fullwidth justify-center align-center column pt-1 pb-5 px-5" v-for="item in projects" :key="item.image">
                <a :href="item.viewerLink||item.projectLink"><img :src="item.image" :alt="item.title + ' user interface image'" :class="{fullwidth:true, 'elevation-1':item.shadow}"></a>
                <h2 class="mt-1 mb-1 headline text-xs-center" v-text="item.title"></h2>
                <h3 class="text-xs-center subheading mb-3" v-text="item.description"></h3>
                <v-btn :href="item.projectLink" v-if="item.projectLink" color="primary">
                    Go see the Project
                    <v-icon right>launch</v-icon>
                </v-btn>
                <v-btn :href="item.viewerLink" v-else color="primary">
                    Go see the Website
                    <v-icon right>launch</v-icon>
                </v-btn>
            </v-layout>
        </v-layout>
        <v-layout class="fullwidth">
            <v-layout class="md5 flex fullwidth green justify-center align-center">The Legend</v-layout>
            <v-layout class="md7 flex fullwidth purple justify-center align-center">B</v-layout>
        </v-layout>
    </v-layout>
</template>
<script>
import FullHeight from '@/components/Full-Height'

import Typer from 'typed.js'
export default {
    data() {
            return {
                typerInstance: null,
                projects: [{
                    image: '/pianoserver.png',
                    title: 'Pianoserver',
                    description: 'Full integration of Pandora into your computer with notifications, shortcuts and a Web Interface.',
                    projectLink: 'https://github.com/nperez0111/pianoserver',
                    viewerLink: 'https://pianoserver.nickthesick.com/'
                }, {
                    image: '/sas.png',
                    title: 'School For Advanced Studies Course Selecter',
                    description: 'This web app helps students pick their courses in a fast and efficient way compared to the previously atrocious system of cross-referencing multiple documents.',
                    projectLink: 'https://github.com/nperez0111/sas',
                    viewerLink: 'https://sas.nickthesick.comsas'
                }, {
                    image: '/dresscoderules.png',
                    title: 'DressCodeRules - Hydra',
                    description: 'An internal use tool for DressCodeRules.com to aggregate product feeds to then be inserted into the WordPress site in a consistent format.',
                    projectLink: 'https://bitbucket.org/dresscoderules/hydra/overview',
                    viewerLink: 'http://imports.dresscoderules.com:333/hydra/#/'
                }, {
                    image: '/howwide.png',
                    title: 'How Wide Is It?',
                    description: 'Ever wondered the real dimensions of your monitor? Monitors are measured diagonally and this tool lets you see the real width and height of them.',
                    projectLink: 'https://github.com/nperez0111/howWideIsIt',
                    viewerLink: 'https://howwide.nickthesick.com'
                }, {
                    image: '/lightsource.png',
                    title: 'LightSource SF Mounting Calculator',
                    description: 'This is an internal use tool for LightSource Sf, a printing company, to be able to accurately price their prints.',
                    viewerLink: 'http://calc.lightsourcesf.com/'
                }]
            }
        },
        mounted() {
            this.typerInstance = new Typer(this.$refs.typer, {
                stringsElement: this.$refs.typerStrings,
                smartBackspace: true,
                loop: true,
                showCursor: true,
                typeSpeed: 40,
                backDelay: 2000,
            })
        },
        beforeDestroy() {
            this.typerInstance.destroy()
        },
        components: {
            "Full-Height": FullHeight
        }
}
</script>
<style>
.title-bar {
    padding: 5px 0;
    font-family: "Lucida Grande", sans-serif;
    font-size: 0.75em;
    text-align: center;
    text-shadow: rgba(255, 255, 255, 0.8) 0px 1px 0px;
    background-color: #f8f8f8;
    background-image: -webkit-linear-gradient(top, #e8e8e8, #bcbbbc);
    background-image: -moz-linear-gradient(top, #e8e8e8, #bcbbbc);
    background-image: linear-gradient(top, #e8e8e8, #bcbbbc);
    box-shadow: inset rgba(255, 255, 255, 0.7) 0px 1px 1px;
    border-bottom: #6a6a6a 1px solid;
}

.text-body {
    height: 400px;
    background-color: rgba(0, 0, 0, 0.85);
    padding: 20px;
    color: #f0f0f0;
    text-shadow: #000 0px 1px 0px;
    font-family: "Consolas", "Courier New", "Courier";
    font-size: 1.45em;
    line-height: 1.40em;
    font-weight: 500;
    text-align: left;
    overflow: hidden;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
}

.text-editor-wrap {
    display: block;
    margin: auto;
    width: 90%;
    max-width: 800px;
    margin: 15px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 20px 70px;
    clear: both;
    overflow: hidden;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
}

.typed-cursor {
    opacity: 1;
    font-weight: 100;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    -ms-animation: blink 0.7s infinite;
    -o-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-webkit-keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-moz-keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-ms-keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-o-keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.fullwidth {
    width: 100%;
}

img.profile-img {
    max-width: 325px;
    width: 100%;
}
</style>
