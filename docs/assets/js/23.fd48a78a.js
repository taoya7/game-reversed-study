(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{423:function(n,e,t){"use strict";t.r(e);var a=t(45),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"输入设备-鼠标-键盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入设备-鼠标-键盘"}},[n._v("#")]),n._v(" "),t("a",{attrs:{href:"https://wiki.cheatengine.org/index.php?title=Lua#Input_devices",target:"_blank",rel:"noopener noreferrer"}},[n._v("输入设备"),t("OutboundLink")],1),n._v(",鼠标，键盘")]),n._v(" "),t("p",[n._v("点击指定区域，等待按下空格键结束：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('-- x,y = getMousePos\nsetMousePos(1597 ,629 )\n\nwhile true do\n  mouse_event(MOUSEEVENTF_LEFTDOWN)\n  sleep(300)\n  mouse_event(MOUSEEVENTF_LEFTUP)\n  if isKeyPressed(VK_SPACE) then\n   print("end.")\n   break\n  end\nend\n')])])]),t("p",[n._v("在游戏窗口区域点击:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("{$lua}\nif syntaxcheck then return end\n\n[ENABLE]\n\nlocal rect = getTargetWindowRect()\nif not rect then return end\n\n-- 添加offset避免点到游戏边框\nlocal offset = 100\n\n-- 每隔200毫秒执行一次\nptimer = setInterval(function()\n\n  -- 是否选中游戏\n  if not targetWindowIsTop() then return end\n\n  -- 当前鼠标位置\n  local x,y = getMousePos()\n\n  -- 在游戏区域内\n  if x > rect.left + offset and x < rect.right - offset and\n     y > rect.top + offset and y < rect.bottom - offset then\n\n     -- 鼠标左键按下\n     mouse_event(MOUSEEVENTF_LEFTDOWN)\n     sleep(20)\n\n     -- 鼠标左键抬起\n     mouse_event(MOUSEEVENTF_LEFTUP)\n  end\nend, 200)\n\n[DISABLE]\nclearInterval(ptimer)\n")])])]),t("h2",{attrs:{id:"移动鼠标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动鼠标"}},[n._v("#")]),n._v(" 移动鼠标")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("{$lua}\nif syntaxcheck then return end\n\n[ENABLE]\n-- 圆中心\nlocal cx = 568\nlocal cy = 821\n\n-- 半径\nlocal r = 100\n\nlocal a = 0;\nptimer = setInterval(function()\n\n  -- - 顺时针\n  -- + 逆时针\n  a = a < 360 and a - 0.1 or 0\n\n  local x = r * math.sin(a)\n  local y = r * math.cos(a)\n  setMousePos(cx+x,cy+y)\n\nend, 1000 / 60)\n\n[DISABLE]\nclearInterval(ptimer)\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);