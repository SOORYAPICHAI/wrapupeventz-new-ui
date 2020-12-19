module.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=f.getDataByKey("novi-plugin-rd-facebook");return e.ui.editor[0].title=t.editor.title,e.ui.editor[0].tooltip=t.editor.tooltip,e.ui.editor[0].header[1]=p.createElement("span",null,t.editor.header),e}var r=n(1),a=o(r),u=n(4),l=o(u),s=n(5),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),p=novi.react.React,f=novi.language,d={name:"novi-plugin-rd-facebook",title:"Novi RD Facebook",description:"Novi RD Facebook description",version:"1.0.2",dependencies:{plugin:"1.0.0",novi:"0.8.6"},defaults:{querySelector:".facebook"},ui:{editor:[a.default],settings:p.createElement(l.default,null)},excerpt:c.validFacebook,onLanguageChange:i};novi.plugins.register(d)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=t[0];n.id===n.initId&&n.access===n.initAccess&&n.type===n.initType||(novi.element.setAttribute(n.element,"data-fb-id",n.id),novi.element.setAttribute(n.element,"data-fb-page-type",n.type),novi.element.setAttribute(n.element,"data-fb-access",n.access),novi.page.forceUpdate())}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=o(r),u=n(3),l=o(u),s=novi.react.React,c=novi.ui.icons,p=novi.language.getDataByKey("novi-plugin-rd-facebook"),f={trigger:s.createElement(a.default,null),tooltip:p.editor.tooltip,header:[c.ICON_FACEBOOK,s.createElement("span",null,p.editor.header)],body:[s.createElement(l.default,null)],closeIcon:"submit",title:p.editor.title,onSubmit:i,width:360,height:240};t.default=f},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=novi.ui.icon,u=novi.ui.icons,l=novi.react.Component,s=novi.react.React,c=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),r(t,[{key:"render",value:function(){return s.createElement(a,null,u.ICON_FACEBOOK)}}]),t}(l);t.default=c},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=novi.ui.radioGroup,u=novi.ui.input,l=novi.react.Component,s=novi.react.React,c=novi.language,p=function(e){function t(e){n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=novi.element.getAttribute(e.element,"data-fb-id")||null,a=novi.element.getAttribute(e.element,"data-fb-page-type")||null,u=novi.element.getAttribute(e.element,"data-fb-access")||null;return i.state={type:a,initType:a,id:r,initId:r,access:u,initAccess:u,element:e.element},i._handleAccessChange=i._handleAccessChange.bind(i),i._handleNameChange=i._handleNameChange.bind(i),i._renderInputName=i._renderInputName.bind(i),i._renderAccesInput=i._renderAccesInput.bind(i),i._handleRadioButtonClick=i._handleRadioButtonClick.bind(i),i.messages=c.getDataByKey("novi-plugin-rd-facebook"),i}return i(t,e),r(t,[{key:"render",value:function(){return s.createElement("div",{className:"facebook-plugin-wrap",style:{padding:"0 12px",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",color:"#6E778A"}},s.createElement("p",{className:"novi-label",style:{marginTop:"0"}},this.messages.editor.body.pageType),s.createElement(a,{options:["page","group"],value:this.state.type,onChange:this._handleRadioButtonClick}),this._renderAccesInput(),this._renderInputName())}},{key:"_handleRadioButtonClick",value:function(e){this.setState({type:e})}},{key:"_renderInputName",value:function(){return s.createElement("div",null,s.createElement("p",{className:"novi-label",style:{marginTop:15}},"group"===this.state.type?this.messages.editor.body.group:this.messages.editor.body.page),s.createElement(u,{onChange:this._handleNameChange,value:this.state.id}))}},{key:"_renderAccesInput",value:function(){return s.createElement("div",null,s.createElement("p",{className:"novi-label",style:{marginTop:15}},this.messages.editor.body.accessToken),s.createElement(u,{onChange:this._handleAccessChange,value:this.state.access}))}},{key:"_handleAccessChange",value:function(e){this.setState({access:e.target.value})}},{key:"_handleNameChange",value:function(e){this.setState({id:e.target.value})}}]),t}(l);t.default=p},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=novi.react.React,u=novi.react.Component,l=novi.ui.input,s=novi.ui.button,c=novi.language,p=function(e){function t(e){n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.state={settings:e.settings},i.saveSettings=i.saveSettings.bind(i),i.onChange=i.onChange.bind(i),i.messages=c.getDataByKey("novi-plugin-rd-facebook"),i}return i(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",{style:{letterSpacing:"0,0462em"}},"RD Facebook Plugin"),a.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},this.messages.settings.inputPlaceholder),a.createElement(l,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),a.createElement("div",{style:{marginTop:30}},a.createElement(s,{type:"primary",messages:{textContent:this.messages.settings.submitButton},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-rd-facebook",this.state.settings)}}]),t}(u);t.default=p},function(e,t){"use strict";function n(e){return!!e&&!o(e)}function o(e){return!novi.element.getAttribute(e,"data-fb-id")&&!novi.element.getAttribute(e,"data-fb-access")}Object.defineProperty(t,"__esModule",{value:!0}),t.validFacebook=n}]);