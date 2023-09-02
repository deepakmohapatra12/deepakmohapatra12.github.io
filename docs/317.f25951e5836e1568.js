"use strict";(self.webpackChunkfree_version=self.webpackChunkfree_version||[]).push([[317],{2317:(O,d,i)=>{i.r(d),i.d(d,{default:()=>f});var p=i(6814),g=i(3695),c=i(6903),u=i(5054),l=i.n(u),t=i(5879),h=i(6223),r=i(1420);const v=["growthChart"],m=["bajajchart"];function _(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",45)(2,"span",15),t._uU(3,"$108"),t._UZ(4,"i",16),t.qZA(),t.TgZ(5,"p",17),t._uU(6,"Customer Tracked"),t.qZA()(),t.TgZ(7,"div",45),t._UZ(8,"div",46),t.qZA()())}function Z(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",45)(2,"span",15),t._uU(3,"$961"),t._UZ(4,"i",47),t.qZA(),t.TgZ(5,"p",17),t._uU(6,"C/W Last Year"),t.qZA()(),t.TgZ(7,"div",45),t._UZ(8,"div",48),t.qZA()())}function b(o,n){if(1&o&&(t.TgZ(0,"li",49)(1,"div",50)(2,"div",6)(3,"h5",51),t._uU(4),t.qZA(),t.TgZ(5,"small",52),t._uU(6),t.qZA()(),t.TgZ(7,"div",9)(8,"h4",51),t._uU(9),t.TgZ(10,"span"),t._UZ(11,"i"),t.qZA()()()()()),2&o){const a=n.$implicit;t.xp6(4),t.Oqu(a.name),t.xp6(2),t.Oqu(a.profit),t.xp6(3),t.hij(" ",a.invest,""),t.xp6(1),t.Gre("ms-2 align-top avtar avtar-xxs ",a.bgColor,""),t.xp6(1),t.MT6("",a.icon," ",a.color,"")}}const f=(()=>{class o{constructor(){this.colorChart=["#673ab7"],this.ListGroup=[{name:"Financial Survey",profit:"10% Positive",invest:"$1839.00",bgColor:"bg-light-success",icon:"ti ti-chevron-up",color:"text-success"},{name:"Educational Survey",profit:"20% Positive",invest:"$100.00",bgColor:"bg-light-danger",icon:"ti ti-chevron-down",color:"text-danger"},{name:"Brass & Bezel",profit:"70% Positive",invest:"$200.00",bgColor:"bg-light-success",icon:"ti ti-chevron-up",color:"text-success"},{name:"Logistics",profit:"30% Positive",invest:"$189.00",bgColor:"bg-light-danger",icon:"ti ti-chevron-down",color:"text-danger"},{name:"External",profit:"30% Posotive",invest:"$210.00",bgColor:"bg-light-success",icon:"ti ti-chevron-up",color:"text-success"}],this.monthOptions={chart:{type:"line",height:90,sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#FFF"],stroke:{curve:"smooth",width:3},series:[{name:"series1",data:[45,66,41,89,25,44,9,54]}],yaxis:{min:5,max:95},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(a){return"Total Earning"}}},marker:{show:!1}}},this.yearOptions={chart:{type:"line",height:90,sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#FFF"],stroke:{curve:"smooth",width:3},series:[{name:"series1",data:[35,44,9,54,45,66,41,69]}],yaxis:{min:5,max:95},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(a){return"Total Earning"}}},marker:{show:!1}}},this.chartOptions={series:[{name:"Customer Satisfaction",data:[35,125,35,35,35,80,35,20,35,45,15,75]},{name:"Survey Response",data:[35,15,15,35,65,40,80,25,15,85,25,75]},{name:"People Tracked",data:[35,145,35,35,20,105,100,10,65,45,30,10]},{name:"Feedback",data:[0,0,75,0,0,115,0,0,0,0,150,0]}],dataLabels:{enabled:!1},chart:{type:"bar",height:480,stacked:!0,toolbar:{show:!0}},colors:["#90caf9","#1e88e5","#673ab7","#ede7f6"],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,columnWidth:"50%"}},xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},grid:{strokeDashArray:4},tooltip:{theme:"dark"}},this.chartOptions1={chart:{type:"area",height:95,stacked:!0,sparkline:{enabled:!0}},colors:["#673ab7"],stroke:{curve:"smooth",width:1},series:[{data:[0,15,10,50,30,40,25]}]}}ngOnInit(){setTimeout(()=>{this.monthChart=new(l())(document.querySelector("#tab-chart-1"),this.monthOptions),this.monthChart.render()},500)}onNavChange(a){1===a.nextId&&setTimeout(()=>{this.monthChart=new(l())(document.querySelector("#tab-chart-1"),this.monthOptions),this.monthChart.render()},200),2===a.nextId&&setTimeout(()=>{this.yearChart=new(l())(document.querySelector("#tab-chart-2"),this.yearOptions),this.yearChart.render()},200)}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],viewQuery:function(a,e){if(1&a&&(t.Gf(v,5),t.Gf(m,5)),2&a){let s;t.iGM(s=t.CRH())&&(e.growthChart=s.first),t.iGM(s=t.CRH())&&(e.bajajchart=s.first)}},standalone:!0,features:[t.jDz],decls:113,vars:20,consts:[[1,"row"],[1,"col-xl-4","col-md-6"],[1,"card","bg-secondary-dark","dashnum-card","text-white","overflow-hidden"],[1,"round","small"],[1,"round","big"],[1,"card-body"],[1,"col"],[1,"avtar"],[1,"text-white","ti","ti-credit-card"],[1,"col-auto"],["ngbDropdown","",1,"btn-group"],["type","button","data-bs-toggle","dropdown","ngbDropdownToggle","",1,"avtar","bg-secondary","dropdown-toggle","arrow-none"],[1,"ti","ti-dots"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-end"],["type","button",1,"dropdown-item"],[1,"text-white","d-block","fs-1","fw-bold","my-2"],[1,"ti","ti-arrow-up-right-circle","opacity-50"],[1,"mb-0","opacity-50"],[1,"card","bg-primary-dark","dashnum-card","text-white","overflow-hidden"],["ngbNav","",1,"nav-tabs","nav-pills",3,"navChange"],["nav","ngbNav"],[1,"nav-item",3,"ngbNavItem"],["ngbNavLink","",1,"nav-link","text-white"],["ngbNavContent",""],[3,"ngbNavOutlet"],[1,"col-xl-8","col-md-12"],[1,"card"],[1,"row","mb-3","align-items-center"],[1,"form-select"],["selected",""],["id","growthChart"],[3,"series","chart","dataLabels","plotOptions","responsive","xaxis","colors","grid","tooltip"],[1,"col-xl-4","col-md-12"],[1,"rounded","bg-light-secondary","overflow-hidden","mb-3"],[1,"px-3","pt-3"],[1,"row","mb-1","align-items-start"],[1,"text-secondary","mb-0"],[1,"text-muted"],["id","bajajchart"],[3,"series","chart","dataLabels","plotOptions","responsive","colors","stroke"],[1,"list-group","list-group-flush"],["class","list-group-item px-0",4,"ngFor","ngForOf"],[1,"text-center"],["href","javascripr:",1,"b-b-primary","text-primary"],[1,"ti","ti-chevron-right"],[1,"col-6"],["id","tab-chart-1"],[1,"ti","ti-arrow-down-right-circle","opacity-50"],["id","tab-chart-2"],[1,"list-group-item","px-0"],[1,"row","align-items-start"],[1,"mb-0"],[1,"text-success"]],template:function(a,e){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"span",3)(4,"span",4),t.TgZ(5,"div",5)(6,"div",0)(7,"div",6)(8,"div",7),t._UZ(9,"i",8),t.qZA()(),t.TgZ(10,"div",9)(11,"div",10)(12,"a",11),t._UZ(13,"i",12),t.qZA(),t.TgZ(14,"ul",13)(15,"li")(16,"button",14),t._uU(17,"Import Card"),t.qZA()(),t.TgZ(18,"li")(19,"button",14),t._uU(20,"Export"),t.qZA()()()()()(),t.TgZ(21,"span",15),t._uU(22,"1350 "),t._UZ(23,"i",16),t.qZA(),t.TgZ(24,"p",17),t._uU(25,"Current Survey Responses"),t.qZA()()()(),t.TgZ(26,"div",1)(27,"div",2),t._UZ(28,"span",3)(29,"span",4),t.TgZ(30,"div",5)(31,"div",0)(32,"div",6)(33,"div",7),t._UZ(34,"i",8),t.qZA()(),t.TgZ(35,"div",9)(36,"div",10)(37,"a",11),t._UZ(38,"i",12),t.qZA(),t.TgZ(39,"ul",13)(40,"li")(41,"button",14),t._uU(42,"Import Card"),t.qZA()(),t.TgZ(43,"li")(44,"button",14),t._uU(45,"Export"),t.qZA()()()()()(),t.TgZ(46,"span",15),t._uU(47,"1350 "),t._UZ(48,"i",16),t.qZA(),t.TgZ(49,"p",17),t._uU(50,"Current Survey Satisfactions"),t.qZA()()()(),t.TgZ(51,"div",1)(52,"div",18),t._UZ(53,"span",3)(54,"span",4),t.TgZ(55,"div",5)(56,"div",0)(57,"div",6)(58,"div",7),t._UZ(59,"i",8),t.qZA()(),t.TgZ(60,"div",9)(61,"ul",19,20),t.NdJ("navChange",function(T){return e.onNavChange(T)}),t.TgZ(63,"li",21)(64,"a",22),t._uU(65,"Month"),t.qZA(),t.YNc(66,_,9,0,"ng-template",23),t.qZA(),t.TgZ(67,"li",21)(68,"a",22),t._uU(69,"Year"),t.qZA(),t.YNc(70,Z,9,0,"ng-template",23),t.qZA()()()(),t._UZ(71,"div",24),t.qZA()()(),t.TgZ(72,"div",25)(73,"div",26)(74,"div",5)(75,"div",27)(76,"div",6)(77,"small"),t._uU(78,"Overview"),t.qZA()(),t.TgZ(79,"div",9)(80,"select",28)(81,"option"),t._uU(82,"Today"),t.qZA(),t.TgZ(83,"option",29),t._uU(84,"This Month"),t.qZA(),t.TgZ(85,"option"),t._uU(86,"This Year"),t.qZA()()()(),t.TgZ(87,"div",30),t._UZ(88,"apx-chart",31),t.qZA()()()(),t.TgZ(89,"div",32)(90,"div",26)(91,"div",5)(92,"div",27)(93,"div",6)(94,"h4"),t._uU(95,"Active Surveys"),t.qZA()(),t._UZ(96,"div",9),t.qZA(),t.TgZ(97,"div",33)(98,"div",34)(99,"div",35)(100,"div",6)(101,"h5",36),t._uU(102,"Assesment Survey"),t.qZA(),t.TgZ(103,"small",37),t._uU(104,"70% Positive"),t.qZA()()()(),t.TgZ(105,"div",38),t._UZ(106,"apx-chart",39),t.qZA()(),t.TgZ(107,"ul",40),t.YNc(108,b,12,10,"li",41),t.qZA(),t.TgZ(109,"div",42)(110,"a",43),t._uU(111,"View all "),t._UZ(112,"i",44),t.qZA()()()()()()),2&a){const s=t.MAs(62);t.xp6(63),t.Q6J("ngbNavItem",1),t.xp6(4),t.Q6J("ngbNavItem",2),t.xp6(4),t.Q6J("ngbNavOutlet",s),t.xp6(17),t.Q6J("series",e.chartOptions.series)("chart",e.chartOptions.chart)("dataLabels",e.chartOptions.dataLabels)("plotOptions",e.chartOptions.plotOptions)("responsive",e.chartOptions.responsive)("xaxis",e.chartOptions.xaxis)("colors",e.chartOptions.colors)("grid",e.chartOptions.grid)("tooltip",e.chartOptions.tooltip),t.xp6(18),t.Q6J("series",e.chartOptions1.series)("chart",e.chartOptions1.chart)("dataLabels",e.chartOptions1.dataLabels)("plotOptions",e.chartOptions1.plotOptions)("responsive",e.chartOptions1.responsive)("colors",e.chartOptions1.colors)("stroke",e.chartOptions1.stroke),t.xp6(2),t.Q6J("ngForOf",e.ListGroup)}},dependencies:[p.ez,p.sg,g.m,h.YN,h.Kr,r.jt,r.iD,r.Vi,r.uN,r.Pz,r.nv,r.Is,r.Vx,r.tO,r.Dy,c.X,c.x],styles:[".nav-tabs[_ngcontent-%COMP%]{border-bottom:none!important}.avtar[_ngcontent-%COMP%]:not([class*=bg-]){background:rgba(0,0,0,.15)}"]}),o})()}}]);