(function(){var e={560:function(e,t,s){"use strict";s.d(t,{l:function(){return nt}});var o=s(242),r=s(396);function n(e,t,s,o,n,i){const a=(0,r.up)("Header"),c=(0,r.up)("OozeStage");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a,{game:e.game},null,8,["game"]),(0,r.Wm)(c,{game:e.game},null,8,["game"])],64)}const i={BASE:"base",MINOR:"minor",MAJOR:"major",INHERITABLE:"inheritable",UNLOCKABLE:"unlockable",INJECTABLE:"injectable",MODIFIABLE:"modifiable",REMOVABLE:"removable",UPGRADEABLE:"upgradeable"};class a{constructor(e,t,s,o,r,n){this.id=e,this.identifier=t.replaceAll(" ","_").toLowerCase(),this.name=t,this.description=s,this.effect=o,this.types=r,this.power=n}apply(e){console.log(e)}remove(e){console.log(e)}info(){return`[${this.id}]Gene: ${this.name}`}}class c extends a{constructor(){super(0,"Protoplasm","An exciting new adventure into evolution.","Allows you to explore different paths.",[i.BASE],0)}}class l extends a{constructor(){super(1,"Phagocyte","Devouring others is the path to survival.","Your first step into the animal kingdom.",[i.BASE],0)}}class u extends a{constructor(){super(2,"Photocyte","The light provides all the food you need.","Your first step into the plant kingdom.",[i.BASE],0)}}class p extends a{constructor(){super(3,"Chemocyte","Absorbing chemicals in your body strenghtens your molecules.","Your first step into the abyss kingdom.",[i.BASE],0)}}class d extends a{constructor(){super(4,"Herbivore","You prefer to eat vegetables and won't eat meat.","Your species won't hunt for food.",[i.BASE],-1)}}class h extends a{constructor(){super(5,"Carnivore","You prefer to eat meat and won't eat vegetables.","Your species won't engage in agriculture for food.",[i.BASE],-1)}}class g extends a{constructor(){super(6,"Omnivore","You enjoy every source of meal equally.","Your species will engage in agriculture and hunt for food.",[i.BASE],1)}}class _{constructor(){this.genes=new Map,this.genes.set("protocell",new c),this.genes.set("phagocyte",new l),this.genes.set("photocyte",new u),this.genes.set("chemocyte",new p),this.genes.set("herbivore",new d),this.genes.set("carnivore",new h),this.genes.set("omnivore",new g)}get(e){return this.genes.get(e)}print(){console.log(this.genes)}}const v=new _;var m=s(482);const f=s(566),b=f.keys().reduce(((e,t)=>(e[t]=f(t),e)),{}),w={PROTEIN:"Protein",DNA:"DNA",RNA:"RNA",FOOD:"Food",WOOD:"Wood",STONE:"Stone",MEAT:"Meat",WISP:"Wisp",SOULS:"Souls",CEMENT:"Cement",IRON:"Iron",STEEL:"Steel",TITANIUM:"Titanium",ORICHALCUM:"Orichalcum"},y={OOZE:"ooze",HUMANOID:"humanoid",BEAST:"beast",FISH:"fish",AVIAN:"avian",DEMONIC:"demonic",ABERRATION:"aberration",INCORPOREAL:"incorporeal"};class O{constructor(e,t,s,o,r,n,i){(0,m.Z)(this,"color","ffffff"),this.id=e,this.identifier=t.replaceAll(" ","_").toLowerCase(),this.name=t,this.genes=s,this.type=o,this.home=r,this.primary_sources=n,this.color=i}get icon(){const e=`./races/${this.identifier}.svg`;return`<img src="${b[e]}" class="race-icon" />`}}class x extends O{constructor(){super(0,"Micro Ooze",[],y.OOZE,"",[w.PROTEIN,w.DNA,w.RNA],"ffffff")}}class E extends O{constructor(){super(1,"Human",[v.get("omnivore")],y.HUMANOID,"Earth",[w.FOOD,w.WOOD,w.STONE],"36a3cd")}}class k extends O{constructor(){super(2,"Elf",[v.get("herbivore")],y.HUMANOID,"Lanthalas",[w.FOOD,w.WISP,w.STONE],"36a3cd")}}class A extends O{constructor(){super(3,"Orc",[v.get("carnivore")],y.HUMANOID,"Mag'roth",[w.MEAT,w.WOOD,w.STONE],"36a3cd")}}class D{constructor(){this.races=new Map,this.races.set("micro_ooze",new x),this.races.set("human",new E),this.races.set("elf",new k),this.races.set("orc",new A)}get(e){return this.races.get(e)}print(){console.log(this.races)}}const M=new D;class T{constructor(e,t){this.name=e,this.races=t,this.population=1,this.actions=[],this.buildings=[]}}class S extends T{constructor(){super("Earth",["human","elf","orc"])}}class H{constructor(){this.planets=new Map,this.planets.set("earth",S)}get(e){return new(this.planets.get(e))}print(){console.log(this.planets)}}const N=new H;class C{constructor(e){this.name=e}}class I extends C{constructor(){super("Standard")}}class L{constructor(){this.universes=new Map,this.universes.set("standard",new I)}get(e){return this.universes.get(e)}print(){console.log(this.universes)}}const P=new L;class R{constructor(){this.races=M,this.genes=v,this.planets=N,this.universes=P}}const z=new R;class Y{constructor(e,t=!0){this.name=e,this.display=t,this.identifier=e.replaceAll(" ","_").toLowerCase(),this.value=0,this.amount=0,this.rps=0,this.storage=0,this.extra_storage=0}}class B{constructor({name:e,description:t,color:s="white",disabled:o=!1,ishtml:r=!1}){this.name=e,this.description=t,this.color=s,this.disabled=o,this.ishtml=r}execute(){}}class j extends B{constructor(){super({name:"Awake",description:"Start being cognitive of the world around you.",color:"blue"})}execute(){nt.game.stage.step+=1}}class U extends B{constructor(){super({name:"Eat Cells",description:"Seek and eat other cells around you.",color:"red"})}execute(){nt.game.stage.cells_eaten+=1}}class $ extends B{constructor(){super({name:"Absorb Light",description:"Learn how to turn light into nutrients.",color:"green"})}execute(){nt.game.stage.light_absorbed+=1}}class F extends B{constructor(){super({name:"Oxidate Chemicals",description:"Turn carbon-based chemicals into organic matter.",color:"blue"})}execute(){nt.game.stage.chemical_oxidated+=1}}class W extends B{constructor(){super({name:"Eat Plants",description:"Find plant based matter around you and consume it.",color:"green"})}execute(){nt.game.stage.plants_eaten+=1}}class Z extends B{constructor(){super({name:"Hunt organisms",description:"Hunt other living organisms and cosume their corpses.",color:"red"})}execute(){nt.game.stage.proto_killed+=1}}class K extends B{constructor(){let e="";e=nt.game.stage.proto_killed>0?'\n\t\t\tYour species has tasted the blood of other living organisms<br />\n\t\t\tso you\'re not fit for the herbivore life style.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-disabled">Evolutionary fork disabled</span>':'\n\t\t\tEvolve into species that live only off the land.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-info">This is an evolutionary fork</span>',super({name:"Hervibore",description:e,color:"green",disabled:nt.game.stage.proto_killed>0,ishtml:!0})}execute(){nt.game.stage.food_evolve("herbivore")}}class q extends B{constructor(){let e="";e=nt.game.stage.plants_eaten>0?'\n\t\t\tYour species has delighted in the commodities from plant matter<br />\n\t\t\tand refuses to eat only meat to survive.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-disabled">Evolutionary fork disabled</span>':'\n\t\t\tEvolve into species that will only hunt to eat.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-info">This is an evolutionary fork</span>',super({name:"Carnivore",description:e,color:"red",disabled:nt.game.stage.plants_eaten>0,ishtml:!0})}execute(){nt.game.stage.food_evolve("carnivore")}}class G extends B{constructor(){let e='\n\t\tEvolve into species that will eat anything to survive.<br />\n\t\t<br />\n\t\t<span class="evolution-fork-info">This is an evolutionary fork</span>';super({name:"Omnivore",description:e,color:"grad-gr",ishtml:!0})}execute(){nt.game.stage.food_evolve("omnivore")}}const J={KINGDOM:"kingdom",FOOD:"food"};class V{constructor(){this.name="Protoplasm",this.stage=J.KINGDOM,this._step=0,this.show_progress=!1,this.progress={},this.actions={explore:{name:"Explore",description:"A small cell living in a microscopic world.<br />Your first steps into an adventure of evolution begin.",actions:[new j]}},this._cells_eaten=0,this._light_absorbed=0,this._chemical_oxidated=0,this._evo_1_progress=50,this._plants_eaten=0,this._proto_killed=0}get step(){return this._step}set step(e){this._step=e,1==this._step&&this._setup_step_1()}get cells_eaten(){return this._cells_eaten}set cells_eaten(e){this._cells_eaten=e,this._cells_eaten+this._light_absorbed+this._chemical_oxidated>=this._evo_1_progress&&this._setup_step_1_2()}get light_absorbed(){return this._light_absorbed}set light_absorbed(e){this._light_absorbed=e,this._cells_eaten+this._light_absorbed+this._chemical_oxidated>=this._evo_1_progress&&this._setup_step_1_2()}get chemical_oxidated(){return this._chemical_oxidated}set chemical_oxidated(e){this._chemical_oxidated=e,this._cells_eaten+this._light_absorbed+this._chemical_oxidated>=this._evo_1_progress&&this._setup_step_1_2()}get plants_eaten(){return this._plants_eaten}set plants_eaten(e){this._plants_eaten=e,this._plants_eaten+this._proto_killed>=this._evo_1_progress&&this._prepare_food_evolution()}get proto_killed(){return this._proto_killed}set proto_killed(e){this._proto_killed=e,this._plants_eaten+this._proto_killed>=this._evo_1_progress&&this._prepare_food_evolution()}_setup_step_1(){nt.game.race.genes.push(z.genes.get("protocell")),this.actions={explore:{name:"Explore",description:"You feel the urge to get new cells in your body.",actions:[new U,new $,new F]}},this.progress={total:this._evo_1_progress,bars:[{color:"red",cb:function(){return console.log("hi"),2*this._cells_eaten}},{color:"green",cb:function(){return 2*this._light_absorbed}},{color:"blue",cb:function(){return 2*this._chemical_oxidated}}],progress:{complete:function(){return this._cells_eaten+this._light_absorbed+this._chemical_oxidated>=this._evo_1_progress},cb:function(){const e=(this._cells_eaten+this._light_absorbed+this._chemical_oxidated)/this._evo_1_progress*100;return Math.min(e,100)}}},this.show_progress=!0}_setup_step_1_2(){}_prepare_kingdom_evolution(){this.actions["grow"]={name:"Grow",actions:[new W,new Z]}}_prepare_food_evolution(){this.actions["evolve"]={name:"Evolve in the food chain",actions:[new K,new q,new G]}}food_evolve(e){nt.game.race.genes.push(z.genes.get(e)),delete this.actions["evolve"]}}class Q{constructor(){this.universe=z.universes.get("standard"),this.planet=z.planets.get("earth"),this.race=z.races.get("micro_ooze"),this.resources={},this.race.primary_sources.forEach((e=>{this.resources[e]=new Y(e)})),this.stage=new V}}let X;const ee=function(){return X||(X=new Q),X};var te=s(139);const se={id:"header",class:"header"},oe={class:"universe-header"},re=["innerHTML"],ne={class:"planet-name"},ie=(0,r._)("i",{class:"bi bi-globe"},null,-1),ae={class:"universe-name"},ce=(0,r._)("i",{class:"bi bi-box"},null,-1),le=(0,r._)("div",{class:"progress-header"}," Progress ",-1),ue=(0,r._)("div",{class:"settings-header"},[(0,r._)("a",{href:"https://github.com/sakurazaki/idle-universe"},"Github"),(0,r.Uk)(" | "),(0,r._)("a",{href:"https://discord.gg/R2FsdNn29A"},"Discord")],-1);function pe(e,t,s,o,n,i){return(0,r.wg)(),(0,r.iD)("header",se,[(0,r._)("div",oe,[(0,r._)("div",{class:"race-name",style:(0,te.j5)({color:s.game.race.color}),innerHTML:s.game.race.icon+" "+s.game.race.name},null,12,re),(0,r._)("div",ne,[ie,(0,r.Uk)(" "+(0,te.zw)(s.game.planet.name),1)]),(0,r._)("div",ae,[ce,(0,r.Uk)(" "+(0,te.zw)(s.game.universe.name),1)])]),le,ue])}var de={name:"Header",props:["game"]},he=s(89);const ge=(0,he.Z)(de,[["render",pe]]);var _e=ge;const ve={id:"oozestage",class:"oozestage"},me={id:"evolution-stats",class:"evolution"},fe={id:"actions",class:"actions"},be=(0,r._)("div",{id:"info",class:"info"},null,-1);function we(e,t,s,o,n,i){const a=(0,r.up)("Evolution"),c=(0,r.up)("EvolutionBar"),l=(0,r.up)("Actions");return(0,r.wg)(),(0,r.iD)("div",ve,[(0,r._)("div",me,[(0,r.Wm)(a,{race:s.game.race},null,8,["race"])]),(0,r._)("div",fe,[s.game.stage.show_progress?((0,r.wg)(),(0,r.j4)(c,{key:0,progress:s.game.stage.progress},null,8,["progress"])):(0,r.kq)("",!0),(0,r.Wm)(l,{stage:s.game.stage},null,8,["stage"])]),be])}const ye={id:"evolution-species",class:"evolution-species"},Oe=(0,r._)("div",{class:"header"},"Evolution status",-1),xe={class:"evolution-list"},Ee={class:"name"},ke={class:"types"},Ae={class:"description"};function De(e,t,s,o,n,i){return(0,r.wg)(),(0,r.iD)("div",ye,[Oe,(0,r._)("div",xe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.race.genes,(e=>((0,r.wg)(),(0,r.iD)("div",{class:(0,te.C_)(["gene",e.types]),key:e.identifier},[(0,r._)("div",Ee,(0,te.zw)(e.name),1),(0,r._)("div",ke,(0,te.zw)(e.types.map((e=>e&&e[0].toUpperCase()+e.slice(1))).join(", ")),1),(0,r._)("div",Ae,(0,te.zw)(e.description),1),(0,r._)("div",{class:(0,te.C_)(["effect",{neutral:0==e.power,good:e.power>0&&e.power<=6,blessing:e.power>6,bad:e.power<0&&e.power>=-6,curse:e.power<-6}])},(0,te.zw)(e.effect),3)],2)))),128))])])}var Me={name:"Evolution",props:["race"]};const Te=(0,he.Z)(Me,[["render",De]]);var Se=Te;const He={class:"evolution-bar"},Ne={class:"progress-bar"};function Ce(e,t,s,o,n,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",He,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.progress.bars,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,te.C_)(["bar",e.color]),key:t,style:(0,te.j5)({width:e.cb()+"%"})},null,6)))),128))]),(0,r._)("div",Ne,[(0,r._)("div",{class:(0,te.C_)(["bar blue",{complete:s.progress.progress.complete()}]),style:(0,te.j5)({width:s.progress.progress.cb()+"%"})},null,6)])],64)}var Ie={name:"EvolutionBar",props:["progress"]};const Le=(0,he.Z)(Ie,[["render",Ce],["__scopeId","data-v-0ca59558"]]);var Pe=Le;const Re={class:"action-list"},ze={class:"title"},Ye=["innerHTML"],Be={class:"action-group"},je=["onClick","onMouseover"];function Ue(e,t,s,o,n,i){const a=(0,r.up)("Popper");return(0,r.wg)(),(0,r.iD)("div",Re,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.stage.actions,((e,s)=>((0,r.wg)(),(0,r.iD)("div",{class:"group",key:s},[(0,r._)("div",ze,(0,te.zw)(e.name),1),e.description?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"description",innerHTML:e.description},null,8,Ye)):(0,r.kq)("",!0),(0,r._)("div",Be,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.actions,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,te.C_)(["action",[e.disabled?"disabled":e.color]]),key:`action-${s}_${o}`},[(0,r._)("button",{type:"button",ref:`action-${s}_${o}`,class:"action-button",onClick:t=>i.onClick(e),onMouseover:t=>i.showPopper(e,s,o),onMouseleave:t[0]||(t[0]=e=>i.hidePopper())},(0,te.zw)(e.name),41,je)],2)))),128))])])))),128)),n.popperRef?((0,r.wg)(),(0,r.j4)(a,{key:0,refEl:e.$refs[n.popperRef],desc:n.popperDesc,ishtml:n.popperHTML},null,8,["refEl","desc","ishtml"])):(0,r.kq)("",!0)])}var $e={name:"Actions",props:["stage"],data(){return{popperShow:!1,popperDesc:"",popperRef:null,popperHTML:!1}},methods:{showPopper(e,t,s){this.popperDesc=e.description,this.popperRef=`action-${t}_${s}`,this.popperHTML=e.ishtml},hidePopper(){this.popperDesc="",this.popperRef=null,this.popperHTML=!1},onClick(e){e.disabled||e.execute()}}};const Fe=(0,he.Z)($e,[["render",Ue],["__scopeId","data-v-309600d1"]]);var We=Fe,Ze={name:"OozeStage",props:["game"],components:{Evolution:Se,EvolutionBar:Pe,Actions:We}};const Ke=(0,he.Z)(Ze,[["render",we]]);var qe=Ke,Ge={name:"App",components:{Header:_e,OozeStage:qe},data:function(){return{game:ee()}}};const Je=(0,he.Z)(Ge,[["render",n]]);var Ve=Je;const Qe=["innerHTML"];function Xe(e,t,s,o,n,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[s.ishtml?((0,r.wg)(),(0,r.iD)("div",{key:0,ref:"dropdown",id:"tooltip",role:"tooltip",class:"popover-custom",innerHTML:s.desc},null,8,Qe)):(0,r.kq)("",!0),s.ishtml?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:1,ref:"dropdown",id:"tooltip",role:"tooltip",class:"popover-custom"},(0,te.zw)(s.desc),513))],64)}var et=s(129),tt={name:"PopperTooltip",props:["open","refEl","desc","offset","ishtml"],data(){return{tooltip:null}},mounted(){this.$nextTick((function(){this.tooltip=new et.Z(this.refEl,this.$refs["dropdown"],{placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,this.offset]}}]}),this.tooltip.update()}))}};const st=(0,he.Z)(tt,[["render",Xe],["__scopeId","data-v-c35a570c"]]);var ot=st;s(652);const rt=(0,o.ri)(Ve);rt.component("Popper",ot);const nt=rt.mount("#app")},566:function(e,t,s){var o={"./races/elf.svg":818,"./races/human.svg":163,"./races/micro_ooze.svg":25,"./races/orc.svg":660};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=n,e.exports=r,r.id=566},818:function(e,t,s){"use strict";e.exports=s.p+"img/elf.ef7b5539..svg"},163:function(e,t,s){"use strict";e.exports=s.p+"img/human.84a9035c..svg"},25:function(e,t,s){"use strict";e.exports=s.p+"img/micro_ooze.9f83c372..svg"},660:function(e,t,s){"use strict";e.exports=s.p+"img/orc.a4c4d17a..svg"}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,o,r,n){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],n=e[u][2];for(var a=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(s.O).every((function(e){return s.O[e](o[c])}))?o.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,r,n]}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/idle-universe/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,i=o[0],a=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(c)var u=c(s)}for(t&&t(o);l<i.length;l++)n=i[l],s.o(e,n)&&e[n]&&e[n][0](),e[i[l]]=0;return s.O(u)},o=self["webpackChunkidleuniverse"]=self["webpackChunkidleuniverse"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(560)}));o=s.O(o)})();
//# sourceMappingURL=app.d9125228.js.map