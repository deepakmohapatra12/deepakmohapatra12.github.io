"use strict";(self.webpackChunkfree_version=self.webpackChunkfree_version||[]).push([[176],{2176:(i,l,t)=>{t.r(l),t.d(l,{default:()=>E});var m=t(6814),v=t(3695),u=t(2247),c=t(689),r=t(5879);const p={showLogicTab:!1,showJSONEditorTab:!0},E=(()=>{class o{ngOnInit(){const e=new u.SurveyCreatorModel(p);e.saveSurveyFunc=(n,a)=>{a(n,!0),this.saveSurveyJson("https://your-web-service.com/",e.JSON,n,a)},this.surveyCreatorModel=e}saveSurveyJson(e,n,a,d){console.log(n);const s=new XMLHttpRequest;s.open("POST",e),s.setRequestHeader("Content-Type","application/json;charset=UTF-8"),s.addEventListener("load",()=>{d(a,!0)}),s.addEventListener("error",()=>{d(a,!1)}),s.send(JSON.stringify(n))}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-add-survey"]],standalone:!0,features:[r.jDz],decls:4,vars:1,consts:[[1,"row"],[1,"col-sm-12"],["id","surveyCreator"],[3,"model"]],template:function(e,n){1&e&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2),r._UZ(3,"survey-creator",3),r.qZA()()()),2&e&&(r.xp6(3),r.Q6J("model",n.surveyCreatorModel))},dependencies:[m.ez,v.m,c.O3,c.zK],styles:["#surveyCreator{height:100vh}.svc-creator .svc-full-container .svc-creator__banner{background-color:#fff}\n"],encapsulation:2}),o})()}}]);