(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{418:function(e,t,n){"use strict";n.r(t);var a=n(45),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"监听指定按键被按下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#监听指定按键被按下"}},[e._v("#")]),e._v(" 监听指定按键被按下")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual-key-codes"),n("OutboundLink")],1)])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{$lua}\n\n-- 语法检查时跳过\nif syntaxcheck then return end\n\n[ENABLE]\nDoneState = false\n\nlocal htimer = createTimer(getMainForm())\nhtimer.Interval = 300\nhtimer.OnTimer =  function(timer)\n  if DoneState == true then return htimer.destroy() end\n\n  if isKeyPressed(0x41) then\n    showMessage('A')\n  end\nend\n \n[DISABLE]\nDoneState = true\n")])])]),n("h2",{attrs:{id:"注册ctrl-a的合键"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册ctrl-a的合键"}},[e._v("#")]),e._v(" 注册ctrl+a的合键")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{$lua}\nif syntaxcheck then return end\n\n[ENABLE]\nlocal function funa()\n  showMessage('ctrl + A')\nend\n\nhk = createHotkey(funa, VK_CONTROL, 0x41)\n\n[DISABLE]\nhk.destroy()\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);