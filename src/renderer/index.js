// Initial welcome page. Delete the following line to remove it.
//'use strict';const styles=document.createElement('style');styles.innerText=`@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);.empty{display:flex;flex-direction:column;justify-content:center;height:100vh;position:relative}.footer{bottom:0;font-size:13px;left:50%;opacity:.9;position:absolute;transform:translateX(-50%);width:100%}`;const vueScript=document.createElement('script');vueScript.setAttribute('type','text/javascript'),vueScript.setAttribute('src','https://unpkg.com/vue'),vueScript.onload=init,document.head.appendChild(vueScript),document.head.appendChild(styles);function init(){Vue.config.devtools=false,Vue.config.productionTip=false,new Vue({data:{versions:{electron:process.versions.electron,electronWebpack:require('electron-webpack/package.json').version}},methods:{open(b){require('electron').shell.openExternal(b)}},template:`<div><div class=empty><p class="empty-title h5">Welcome to your new project!<p class=empty-subtitle>Get qwdqwd now and take advantage of the great documentation at hand.<div class=empty-action><button @click="open('https://webpack.electron.build')"class="btn btn-primary">Documentation</button> <button @click="open('https://electron.atom.io/docs/')"class="btn btn-primary">Electron</button><br><ul class=breadcrumb><li class=breadcrumb-item>electron-webpack v{{ versions.electronWebpack }}</li><li class=breadcrumb-item>electron v{{ versions.electron }}</li></ul></div><p class=footer>This intitial landing page can be easily removed from <code>src/renderer/index.js</code>.</p></div></div>`}).$mount('#app')}
// alert("What are you doing?");
/*window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }));*/

// window.loadURL('file://' + __dirname + '/index.html');

// document.write('<html><head> <title>TITLE HERE</title></head><body>This is the body</body></html>');

'use strict';const styles=document.createElement('style');styles.innerText=`@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);.empty{display:flex;flex-direction:column;justify-content:center;height:100vh;position:relative}.footer{bottom:0;font-size:13px;left:50%;opacity:.9;position:absolute;transform:translateX(-50%);width:100%}`;const vueScript=document.createElement('script');vueScript.setAttribute('type','text/javascript'),vueScript.setAttribute('src','https://unpkg.com/vue'),document.head.appendChild(vueScript),document.head.appendChild(styles);
document.write('<!DOCTYPE html><html><head> <meta charset="utf-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title>Text To Speech Application</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" type="text/css" media="screen" href="main.css" /> <script src="main.js"></script> <link rel="stylesheet" type="text/css" media="screen" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" /> <link rel="stylesheet" type="text/css" media="screen" href="dist/css/main.css" /> <script src=\'https://code.responsivevoice.org/responsivevoice.js\'></script></head><body style="background-color:orange"> <div class="row"> <div class="container"> <br/> <h3 id="appheading" class="text-uppercase text-center text-success" >Text To Speech Conversion Application</h3> <div class="row"> <div class="col-md-6" style="border-right:1px solid #000"> <h4 class="text-center">TEXT</h4> <div class="container"> <div class="form-group"> <label for="Text To Convert">Text To Convert</label> <textarea id="textspeech" class="form-control" rows="10" cols="4" placeholder="Enter Text You Wish To Convert To Speech "></textarea> </div> <div class="form-group"> </div> </div> </div> <div class="col-md-6"> <h4 class="text-center">TEXT VOICING</h4> <div class="container" > <div class="form-group"> <div class="well well-lg"> Audio Interpretation </div> </div> <div class="form-group"> <input onclick=\'(document.getElementById("textspeech").value="")\' type="button" name="translate" class="btn btn-warning" value="Clear Text"> <br/><br/> <input onclick=\'responsiveVoice.speak(document.getElementById("textspeech").value);\' type="button" name="translate" class="btn btn-primary" value="Convert/Translate 🔊 Play"> </div> </div> </div> </div> </div> </div> <script src="dist/js/bootstrap.min.js"></script> <script src="dist/js/main.js"></script></body></html>');