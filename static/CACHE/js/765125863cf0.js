function saveKeyToStorage(login_type,token){if(typeof(Storage)!=="undefined"){localStorage.setItem("network",login_type);localStorage.setItem("token",token);}else{alert('No local storage');}}
function saveUserToStorage(acc_id,name,fname,lname,email,img_url){localStorage.setItem('acc_id',acc_id);localStorage.setItem('name',name);localStorage.setItem('fname',fname);localStorage.setItem('lname',lname);localStorage.setItem('email',email);localStorage.setItem('img_url',img_url);}
function loadUserData(){var name=localStorage.getItem('name');var img_url=localStorage.getItem('img_url');$('.user-image').attr('src',img_url);$('.greeting').text('Hello, '+name);}
function getXP(){var xp=localStorage.getItem("xp");var level=localStorage.getItem("level");}/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
(function(){var root=(typeof exports==='undefined'?window:exports);var config={retinaImageSuffix:'@2x',check_mime_type:true,force_original_dimensions:true};function Retina(){}
root.Retina=Retina;Retina.configure=function(options){if(options===null){options={};}
for(var prop in options){if(options.hasOwnProperty(prop)){config[prop]=options[prop];}}};Retina.init=function(context){if(context===null){context=root;}
var existing_onload=context.onload||function(){};context.onload=function(){var images=document.getElementsByTagName('img'),retinaImages=[],i,image;for(i=0;i<images.length;i+=1){image=images[i];if(!!!image.getAttributeNode('data-no-retina')){retinaImages.push(new RetinaImage(image));}}
existing_onload();};};Retina.isRetina=function(){var mediaQuery='(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';if(root.devicePixelRatio>1){return true;}
if(root.matchMedia&&root.matchMedia(mediaQuery).matches){return true;}
return false;};var regexMatch=/\.\w+$/;function suffixReplace(match){return config.retinaImageSuffix+match;}
function RetinaImagePath(path,at_2x_path){this.path=path||'';if(typeof at_2x_path!=='undefined'&&at_2x_path!==null){this.at_2x_path=at_2x_path;this.perform_check=false;}else{if(undefined!==document.createElement){var locationObject=document.createElement('a');locationObject.href=this.path;locationObject.pathname=locationObject.pathname.replace(regexMatch,suffixReplace);this.at_2x_path=locationObject.href;}else{var parts=this.path.split('?');parts[0]=parts[0].replace(regexMatch,suffixReplace);this.at_2x_path=parts.join('?');}
this.perform_check=true;}}
root.RetinaImagePath=RetinaImagePath;RetinaImagePath.confirmed_paths=[];RetinaImagePath.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match('//'+document.domain));};RetinaImagePath.prototype.check_2x_variant=function(callback){var http,that=this;if(this.is_external()){return callback(false);}else if(!this.perform_check&&typeof this.at_2x_path!=='undefined'&&this.at_2x_path!==null){return callback(true);}else if(this.at_2x_path in RetinaImagePath.confirmed_paths){return callback(true);}else{http=new XMLHttpRequest();http.open('HEAD',this.at_2x_path);http.onreadystatechange=function(){if(http.readyState!==4){return callback(false);}
if(http.status>=200&&http.status<=399){if(config.check_mime_type){var type=http.getResponseHeader('Content-Type');if(type===null||!type.match(/^image/i)){return callback(false);}}
RetinaImagePath.confirmed_paths.push(that.at_2x_path);return callback(true);}else{return callback(false);}};http.send();}};function RetinaImage(el){this.el=el;this.path=new RetinaImagePath(this.el.getAttribute('src'),this.el.getAttribute('data-at2x'));var that=this;this.path.check_2x_variant(function(hasVariant){if(hasVariant){that.swap();}});}
root.RetinaImage=RetinaImage;RetinaImage.prototype.swap=function(path){if(typeof path==='undefined'){path=this.path.at_2x_path;}
var that=this;function load(){if(!that.el.complete){setTimeout(load,5);}else{if(config.force_original_dimensions){that.el.setAttribute('width',that.el.offsetWidth);that.el.setAttribute('height',that.el.offsetHeight);}
that.el.setAttribute('src',path);}}
load();};if(Retina.isRetina()){Retina.init(root);}})();