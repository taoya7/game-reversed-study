(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{394:function(e,a,t){e.exports=t.p+"assets/img/2020-06-01-11-48-24.ce3c07e5.png"},395:function(e,a,t){e.exports=t.p+"assets/img/2020-06-01-18-09-36.3b12b9ee.png"},396:function(e,a,t){e.exports=t.p+"assets/img/2020-06-01-22-50-57.51e01b15.png"},397:function(e,a,t){e.exports=t.p+"assets/img/2020-06-01-22-53-36.1103ceca.png"},398:function(e,a,t){e.exports=t.p+"assets/img/2020-06-06-12-39-51.497f9c8e.png"},399:function(e,a,t){e.exports=t.p+"assets/img/2020-06-06-12-41-55.0faac83e.png"},430:function(e,a,t){"use strict";t.r(a);var x=t(45),n=Object(x.a)({},(function(){var e=this,a=e.$createElement,x=e._self._c||a;return x("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[x("p",[e._v("正向代码:")]),e._v(" "),x("div",{staticClass:"language- extra-class"},[x("pre",{pre:!0,attrs:{class:"language-text"}},[x("code",[e._v("int addNum(int x)\n{\n    return x + 1;\n}\n\nint xxxx = 0;\nvoid MainWindow::on_pushButton_5_clicked()\n{\n    xxxx = addNum(xxxx);\n}\n")])])]),x("p",[e._v("逆向代码：")]),e._v(" "),x("p",[x("img",{attrs:{src:t(394),alt:""}})]),e._v(" "),x("p",[e._v("使用了call 进入函数，在函数的第一个指令，添加断点，然后运行程序")]),e._v(" "),x("p",[e._v("因为call会将函数的返回地址压入堆栈，可以在右下角的堆栈看到，当前是哪里在调用这个函数，使用"),x("code",[e._v("ctrl+g")]),e._v("跳到"),x("code",[e._v("xxx.exe+1eda")])]),e._v(" "),x("h2",{attrs:{id:"选中当前函数"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#选中当前函数"}},[e._v("#")]),e._v(" 选中当前函数")]),e._v(" "),x("p",[e._v("在当前指令上右键，选择当前函数，ce会把指令全部高亮")]),e._v(" "),x("h2",{attrs:{id:"查看函数参数"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#查看函数参数"}},[e._v("#")]),e._v(" 查看函数参数")]),e._v(" "),x("p",[e._v("正向:")]),e._v(" "),x("div",{staticClass:"language- extra-class"},[x("pre",{pre:!0,attrs:{class:"language-text"}},[x("code",[e._v("int add(int a, int b, int c) {\n    return a + b + c;\n}\n\nint aaa = 0;\n\nvoid MainWindow::on_pushButton_3_clicked()\n{\n    aaa = add(aaa, 1 ,2);\n}\n")])])]),x("p",[e._v("逆向：")]),e._v(" "),x("div",{staticClass:"language- extra-class"},[x("pre",{pre:!0,attrs:{class:"language-text"}},[x("code",[e._v("...\n\nxxx.exe+1D7F - 55                    - push ebp  //函数开始\nxxx.exe+1D80 - 89 E5                 - mov ebp,esp\nxxx.exe+1D82 - 8B 55 08              - mov edx,[ebp+08] // arg1 => [esp]\nxxx.exe+1D85 - 8B 45 0C              - mov eax,[ebp+0C] // arg2 => [esp+04]\nxxx.exe+1D88 - 01 C2                 - add edx,eax // edx= arg1+arg2\nxxx.exe+1D8A - 8B 45 10              - mov eax,[ebp+10] // arg3 => [esp+08]\nxxx.exe+1D8D - 01 D0                 - add eax,edx // edx= edx+arg3\nxxx.exe+1D8F - 5D                    - pop ebp\nxxx.exe+1D90 - C3                    - ret  //函数返回\n\n...\n\n\n// 复制当前值到eax寄存器中\nxxx.exe+1D9B - A1 38C04000           - mov eax,[xxx.exe+C038]\n\n// 传参过程\nxxx.exe+1DA0 - C7 44 24 08 02000000  - mov [esp+08],00000002  // 传入第三个参数\nxxx.exe+1DA8 - C7 44 24 04 01000000  - mov [esp+04],00000001  // 传入第二个参数\nxxx.exe+1DB0 - 89 04 24              - mov [esp],eax //  传入第一个参数\n\n// 调用函数\nxxx.exe+1DB3 - E8 C7FFFFFF           - call xxx.exe+1D7F // 堆栈中将压入 xxx.exe+1DB8\n\n// 将返回值写入xxx.exe+C038\nxxx.exe+1DB8 - A3 38C04000           - mov [xxx.exe+C038],eax\n")])])]),x("p",[e._v("在ce内存查看其中可以看到，一些参数的分析")]),e._v(" "),x("p",[x("img",{attrs:{src:t(395),alt:""}})]),e._v(" "),x("h2",{attrs:{id:"ce调用函数"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#ce调用函数"}},[e._v("#")]),e._v(" ce调用函数")]),e._v(" "),x("ol",[x("li",[x("p",[e._v("先找到你要调用的函数，和函数需要的参数\n"),x("img",{attrs:{src:t(396),alt:""}})])]),e._v(" "),x("li",[x("p",[x("code",[e._v("ctrl+a")]),e._v("编写要写入的函数")])])]),e._v(" "),x("div",{staticClass:"language- extra-class"},[x("pre",{pre:!0,attrs:{class:"language-text"}},[x("code",[e._v("// 00A20000在接下来的分配内存得到的\n00A20000:\n push 1 ; type\n push 0 ; row\n mov ecx,[PlantsVsZombies.exe+3794F8]\n mov eax, [ecx+868]\n call 004236D0\n retn 8\n")])])]),x("ol",{attrs:{start:"3"}},[x("li",[x("code",[e._v("ctrl+alt+m")]),e._v("分配内存，将分配内存的地址，写入上面的代码中")])]),e._v(" "),x("p",[x("img",{attrs:{src:t(397),alt:""}})]),e._v(" "),x("ol",{attrs:{start:"4"}},[x("li",[e._v("在内存查看器中，选中函数的第一行")]),e._v(" "),x("li",[x("code",[e._v("ctrl+alt+t")]),e._v("创建线程，成功后就会调用此函数，失败游戏可能会崩溃")])]),e._v(" "),x("h2",{attrs:{id:"使用ce的-在此中断并跟踪功能"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#使用ce的-在此中断并跟踪功能"}},[e._v("#")]),e._v(" 使用CE的，在此中断并跟踪功能")]),e._v(" "),x("p",[e._v("在指令上，右键，在此中断并跟踪功能")]),e._v(" "),x("p",[x("img",{attrs:{src:t(398),alt:""}})]),e._v(" "),x("p",[e._v("在下次执行到这条指令时：")]),e._v(" "),x("p",[x("img",{attrs:{src:t(399),alt:""}})]),e._v(" "),x("p",[e._v("每一层就是一次函数调用，双击会在反汇编窗口跳转")])])}),[],!1,null,null,null);a.default=n.exports}}]);