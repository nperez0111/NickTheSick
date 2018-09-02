<template>
    <v-layout column justify-center align-center class="indigo darken-3">
        <full-height class="fullwidth page-1" parallax src="images/trianglify.svg">
            <v-layout column justify-center align-center class="px-2 my-5">
                <h1 :class="{'text-xs-center':true, 'display-5':$vuetify.breakpoint.xlAndUp, 'display-4':$vuetify.breakpoint.mdAndUp,'display-3':$vuetify.breakpoint.smOnly, 'display-2':$vuetify.breakpoint.xsOnly}">I'm <span class="black--text">Nicholas Perez</span>.</h1>
                <h2 class="title text-xs-center mt-3">To create something that makes people wonder how they ever lived without it, is my goal.</h2>
            </v-layout>
            <v-layout column :justify-space-around="$vuetify.breakpoint.mdAndDown" :justify-space-between="$vuetify.breakpoint.lgAndUp" align-center>
                <div class="text-editor-wrap supa-shadow">
                    <div ref="typerStrings" style="display:none">
                        <p> a Full Stack Web Developer</p>
                        <p> a Software Engineer</p>
                        <p> a Software Developer</p>
                        <p> an Application Developer</p>
                        <p> an UI/UX Designer</p>
                    </div>
                    <div class="title-bar">
                        <span class="black--text">Nick The Sick's Website — bash — 120x20</span>
                    </div>
                    <div class="text-body green--text">
                        <p><span class="white--text">$</span> echo "<span class="white--text">$WELCOME_MESSAGE</span>"</p>
                        <p class="white--text">Welcome to my website!</p>
                        <p><span class="white--text">$</span> whoami</p>
                        <span class="white--text">I am </span><span ref="typer" class="white--text"></span>
                    </div>
                </div>
            </v-layout>
        </full-height>
        <v-card :class="{'mx-5':$vuetify.breakpoint.smAndUp, 'pull-up':$vuetify.breakpoint.smAndUp, 'pa-1':$vuetify.breakpoint.smAndUp, grey:true, 'lighten-3':true, 'supa-shadow':true}" ref="page-2">
            <v-card class="layout justify-center align-center py-2 white card-popout-title">
                <h1 class="display-2 mx-5 text-xs-center">Who are you?</h1>
            </v-card>
            <v-layout class="fullwidth wrap pb-5">
                <v-layout :class="{sm12:true, md5:true,xl6:true, flex:true, fullwidth:true, 'justify-center':true, 'align-center':true, 'py-5':$vuetify.breakpoint.mdAndUp,'py-2':$vuetify.breakpoint.mdAndDown}">
                    <div :class="{avatar:true, 'my-5':$vuetify.breakpoint.mdAndUp,'my-2':$vuetify.breakpoint.mdAndDown}">
                        <img src="https://image.shutterstock.com/mosaic_250/0/0/518740741.jpg" class="elevation-3 profile-img raise-hover">
                    </div>
                </v-layout>
                <v-layout class="sm12 md7 xl5 flex fullwidth justify-center align-center py-5 px-4 column">
                    <p :class="{headline:$vuetify.breakpoint.mdAndUp,'body-2':$vuetify.breakpoint.smAndDown,bump:true,'text-xs-center':true,'text-md-left':true}">I am a software developer who is passionate about using technology to make people's lives easier. I specialize in front end web apps and websites, but don't let that pigeonhole me as <i>only</i> a web developer. My dream is that one day someone will show me a product raving about how useful it is to them and to be able to reply "I made that".</p>
                    <p :class="{headline:$vuetify.breakpoint.mdAndUp,'body-2':$vuetify.breakpoint.smAndDown,bump:true,'text-xs-center':true,'text-md-left':true}">I am a person who wholeheartedly enjoys creating software, I love the idea that I can make something which simply did not exist and could not have existed without me. I have a knack for learning new techniques and have great pride in my work so I try to deliver the best that I can. I grew up in Miami where there was not much of a "Tech" scene, so I moved to San Francisco to hopefully be able to be a part of the creation of great software. </p>
                </v-layout>
            </v-layout>
        </v-card>
        <v-layout class="fullwidth indigo darken-3 justify-center align-start flat white--text mb-5" wrap>
            <v-layout class="xs12 flex fullwidth justify-center align-center py-5">
                <h1 class="display-2 mx-5 text-xs-center">Recent Projects</h1>
            </v-layout>
            <v-layout class="md6 lg4 xl3 flex fullwidth justify-center align-center column pt-1 pb-5 px-2" v-for="item in projects" :key="item.image">
                <a :href="item.viewerLink||item.projectLink" class="raise-hover"><img :src="item.image" :alt="item.title + ' user interface image'" :class="{fullwidth:true, 'elevation-1':item.shadow}"></a>
                <h2 class="mt-1 mb-1 headline text-xs-center" v-text="item.title"></h2>
                <h3 class="text-xs-center subheading mb-3 px-2" v-text="item.description"></h3>
                <v-btn :href="item.projectLink" v-if="item.projectLink" color="primary" class="raise-hover">
                    Show Me the Code
                    <v-icon right>launch</v-icon>
                </v-btn>
                <v-btn :href="item.viewerLink" v-else color="primary" class="raise-hover">
                    Go see the Website
                    <v-icon right>launch</v-icon>
                </v-btn>
            </v-layout>
        </v-layout>
        <v-card :class="{'mx-4':$vuetify.breakpoint.smAndUp, 'mt-5':true, 'pt-1':true, 'mb-4':true, grey:true, 'lighten-2':true, fullwidth:$vuetify.breakpoint.xs,'supa-shadow':true,'contact-form':true}">
            <v-card class="layout fullwidth justify-center align-center py-2 white card-popout-title">
                <h1 class="display-2 mx-5 text-xs-center">Contact Me</h1>
            </v-card>
            <v-layout class="pb-5" wrap>
                <v-layout :class="{xs12:true, md7:true, 'justify-center':true, 'align-center':true, flex:true, fullwidth:true, 'px-5':$vuetify.breakpoint.smAndUp,'px-2':$vuetify.breakpoint.xsAndUp, 'mb-5':true}" wrap>
                    <v-form v-model="form.valid" class="xs11 flex" ref="form" lazy-validation>
                        <v-text-field label="Name" v-model="form.name" required :rules="[v => !!v || 'Name is required']" class="my-2"></v-text-field>
                        <v-text-field label="E-mail" v-model="form.email" :rules="form.emailRules" required class="my-2"></v-text-field>
                        <v-text-field label="Message" v-model="form.message" textarea required :rules="[v => !!v || 'Message is required']"></v-text-field>
                        <v-layout>
                            <v-spacer></v-spacer>
                            <v-btn color="primary white--text" @click="sendMessage" :loading="sendingMessage" :disabled="sendingMessage" class="raise-hover">Send Message
                                <v-icon right color="green lighten-2">send</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-form>
                </v-layout>
                <v-layout :class="{xs12:true, md5:true, 'justify-center':true, 'align-center':true, flex:true, column:true, 'pt-1':true, 'pb-5':true, 'mb-3':true, 'px-5':$vuetify.breakpoint.smAndUp,hotLinks:true}">
                    <v-layout class="flex md6 fullwidth">
                        <v-card class="flex md6 layout column justify-center align-center ma-2 text-xs-center fullwidth raise-hover lighten-hover grey darken-4 white--text" href="tel:3052828358" hover ripple>
                            <v-card-media class="flex xs12 mt-3">
                                <v-icon class="icon-phone-squared display-3 white--text"></v-icon>
                            </v-card-media>
                            <v-card-text>
                                <h2>Phone</h2>
                                <p>(305)-282-8358</p>
                            </v-card-text>
                        </v-card>
                        <v-card class="flex md6 layout column justify-center align-center ma-2 text-xs-center fullwidth raise-hover lighten-hover grey darken-4 white--text" href="mailto:nperez0111@gmail.com" hover ripple>
                            <v-card-media class="flex xs12 mt-3">
                                <v-icon class="icon-mail-squared display-3 white--text"></v-icon>
                            </v-card-media>
                            <v-card-text>
                                <h2>Email</h2>
                                <p>nperez0111@gmail.com</p>
                            </v-card-text>
                        </v-card>
                    </v-layout>
                    <v-layout class="flex md6 fullwidth">
                        <v-card class="flex md6 layout column justify-center align-center ma-2 text-xs-center fullwidth raise-hover lighten-hover grey darken-4 white--text" href="https://github.com/nperez0111" hover ripple>
                            <v-card-media class="flex xs12 mt-3">
                                <v-icon class="icon-github-squared display-3 white--text"></v-icon>
                            </v-card-media>
                            <v-card-text>
                                <h2>Github</h2>
                                <p>@nperez0111</p>
                            </v-card-text>
                        </v-card>
                        <v-card class="flex md6 layout column justify-center align-center ma-2 text-xs-center fullwidth raise-hover lighten-hover grey darken-4 white--text" href="https://www.linkedin.com/in/nicholas-perez-215262124" hover ripple>
                            <v-card-media class="flex xs12 mt-3">
                                <v-icon class="icon-linkedin-squared display-3 white--text"></v-icon>
                            </v-card-media>
                            <v-card-text>
                                <h2>Linkedin</h2>
                                <p>Click here</p>
                            </v-card-text>
                        </v-card>
                    </v-layout>
                </v-layout>
                <v-layout class="xs12 justify-center align-center headline">
                    Made by:&nbsp;<span class="blue--text">Nick the Sick</span>
                </v-layout>
            </v-layout>
        </v-card>
    </v-layout>
</template>
<script>
import FullHeight from '@/components/Full-Height'

import Typer from 'typed.js'
export default {
    data() {
            return {
                sendingMessage: false,
                form: {
                    valid: false,
                    message: '',
                    name: '',
                    email: '',
                    emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                    ],
                    status: 'writing'
                },
                typerInstance: null,
                projects: [{
                    image: 'images/cerebra.png',
                    title: 'Cerebra',
                    description: `Cerebra is a cloud-based SaaS that manages your organization's devices remotely.`,
                    viewerLink: 'https://cerebra.co/'
                }, {
                    image: 'images/pianoserver.png',
                    title: 'Pianoserver',
                    description: 'Full integration of Pandora into your computer with notifications, shortcuts and a web interface.',
                    projectLink: 'https://github.com/nperez0111/pianoserver',
                    viewerLink: 'https://pianoserver.nickthesick.com/'
                }, {
                    image: 'images/sas.png',
                    title: 'School For Advanced Studies Course Selecter',
                    description: 'A web app to help students pick their courses in a fast and efficient way compared to the previously atrocious system of cross-referencing multiple documents.',
                    projectLink: 'https://github.com/nperez0111/sas',
                    viewerLink: 'https://sas.nickthesick.comsas'
                }, {
                    image: 'images/dresscoderules.png',
                    title: 'DressCodeRules - Hydra',
                    description: 'An internal tool for DressCodeRules.com to aggregate product feeds to then be inserted into the WordPress site in a consistent format.',
                    projectLink: 'https://bitbucket.org/dresscoderules/hydra/overview'
                }, {
                    image: 'images/howwide.png',
                    title: 'How Wide Is It?',
                    description: 'Did you know that monitors are measured diagonally? This tool lets you see the real width and height of them.',
                    projectLink: 'https://github.com/nperez0111/howWideIsIt',
                    viewerLink: 'https://howwide.nickthesick.com'
                }, {
                    image: 'images/lightsource.png',
                    title: 'LightSource SF Mounting Calculator',
                    description: 'This is an internal tool for LightSource SF, a printing company, to accurately price prints for their customers.',
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
            setTimeout(() => {
                window.scrollTo(0, 1)
                window.scrollTo(0, 0)
            }, 300)
        },
        beforeDestroy() {
            this.typerInstance.destroy()
        },
        components: {
            FullHeight
        },
        methods: {
            sendMessage() {
                if (this.$refs.form.validate()) {
                    this.sendingMessage = true
                    const {
                        name,
                        email,
                        message
                    } = this.form
                    console.log(window.location.hostname, {
                        name,
                        message,
                        email
                    })
                    fetch(window.location.origin + '/mail.php', {
                        method: 'post',
                        body: JSON.stringify({
                            name,
                            email,
                            message
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((resp) => {
                        console.log(resp.text())
                        this.sendingMessage = false
                        this.form.status = 'success'
                    }).catch(() => {
                        this.sendingMessage = false
                        this.form.status = 'failed'
                    })
                }

            }
        }
}
</script>
<style lang="scss">
.page-1 {
    background-image: url('../static/images/trianglify.svg');
    background-size: cover;
}

.supa-shadow {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 20px 70px;
}

.text-editor-wrap {
    display: block;
    margin: auto;
    width: 90%;
    max-width: 840px;
    margin: 15px 0;
    border-radius: 10px;
    clear: both;
    overflow: hidden;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    .text-body {
        min-height: 500px;
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
    .typed-cursor {
        opacity: 1;
        font-weight: 100;
        -webkit-animation: blink 0.7s infinite;
        -moz-animation: blink 0.7s infinite;
        -ms-animation: blink 0.7s infinite;
        -o-animation: blink 0.7s infinite;
        animation: blink 0.7s infinite;
    }
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
    border: 2px solid #FFF;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus input:-webkit-autofill,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #FFF !important;
}

.bump {
    font-size: 125% !important;
}

.raise-hover,
.lower-hover {
    transition: all 0.5s;
}

.raise-hover:hover {
    transform: translateY(-8px);
}

.lower-hover:hover {
    transform: translateY(6px);
}

.lighten-hover:hover {
    background-color: #283593 !important;
}

.pull-up {
    position: relative;
    top: -40px;
}

.parallax__content {
    padding: 0 !important;
}

.contact-form {
    min-width: 80%;
    .hotLinks .card__text {
        padding: 10px 0 !important;
    }
}

.card-popout-title {
    position: relative;
    max-width: 75%;
    min-width: 250px;
    top: -40px;
    z-index: 1;
    margin: 0 auto;
}
</style>
