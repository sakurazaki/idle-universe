(function(){var e={755:function(e,t,s){"use strict";s.d(t,{l:function(){return Tt}});var o=s(242),r=s(396);function n(e,t,s,o,n,i){const a=(0,r.up)("Header"),c=(0,r.up)("OozeStage");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a,{game:e.game},null,8,["game"]),(0,r.Wm)(c,{game:e.game},null,8,["game"])],64)}class i{constructor({name:e,description:t,color:s="white",disabled:o=!1,ishtml:r=!1,execute:n=null}){this.name=e,this.description=t,this.color=s,this.disabled=o,this.ishtml=r,this._execute=n}execute(){this._execute&&this._execute()}}const a={SATIETY:"Satiety",PROTEIN:"Protein",DNA:"DNA",RNA:"RNA",FOOD:"Food",WOOD:"Wood",STONE:"Stone",MEAT:"Meat",WISP:"Wisp",SOULS:"Souls",CEMENT:"Cement",IRON:"Iron",STEEL:"Steel",TITANIUM:"Titanium",ORICHALCUM:"Orichalcum"},c={BASE:"base",MINOR:"minor",MAJOR:"major",INHERITABLE:"inheritable",UNLOCKABLE:"unlockable",INJECTABLE:"injectable",MODIFIABLE:"modifiable",REMOVABLE:"removable",UPGRADEABLE:"upgradeable"};class l{constructor({id:e,name:t,description:s,effects:o,special:r,types:n,power:i}){this.id=e,this.identifier=t.replaceAll(" ","_").toLowerCase(),this.name=t,this.description=s,this.effects=o,this.special=r,this.types=n,this.power=i}apply(e){console.log("Gene.apply() was called but was not implemented in child class.")}remove(e){console.log("Gene.remove() was called but was not implemented in child class.")}info(){return`[${this.id}]Gene: ${this.name}`}}class p extends l{constructor(){super({id:0,name:"Protocell",description:"An exciting new adventure into evolution.",special:"Allows you to explore different paths.",types:[c.BASE],power:0})}}class u extends l{constructor(){super({id:0,name:"Phagocyte",description:"Devouring organic matter is the path to survival.",special:"Your first step into the animal kingdom.",types:[c.BASE],power:0})}apply(e){e.actions["explore"]["actions"].push(new i({name:"Hunt cells",description:"Hunt cells and absorb their matter for nutrition.",color:"red",execute:()=>{Tt.game.resources[a.SATIETY].value+=2*e.population,e.cells_killed+=1}}),new i({name:"Eat plants",description:"Find plant based matter around you and consume it.",color:"green",execute:()=>{Tt.game.resources[a.SATIETY].value+=2*e.population,e.plants_eaten+=1}}))}}class d extends l{constructor(){super({id:0,name:"Photocyte",description:"The light provides all the nutrients you need.",effects:[{description:"Passively generate 1 satiety per cell.",color:"green"}],special:"Your first step into the plant kingdom.",types:[c.BASE],power:0})}apply(e){Tt.game.resources[a.SATIETY].add_rps({source:"Photocyte",value:()=>1*e.population}),e.actions["explore"]["actions"].push(new i({name:"Hunt cells",description:"Hunt cells and absorb their matter for nutrition.",color:"red",execute:()=>{Tt.game.resources[a.SATIETY].value+=2*e.population,e.cells_killed+=1}}))}}class h extends l{constructor(){super({id:0,name:"Chemocyte",description:"Absorbing chemicals in your body strenghtens your molecules.",special:"Your first step into the abyss kingdom.",types:[c.BASE],power:0})}apply(e){e.actions["explore"]["actions"].push(new i({name:"Vaporize chemicals",description:"Vaporize chemical nutrients from volcanic sources.",color:"red",execute:()=>{Tt.game.resources[a.SATIETY].value+=2*e.population,e.vaporized+=1}}),new i({name:"Dissolve chemicals",description:"Find and dissolve chemicals found deep in sea vents.",color:"blue",execute:()=>{Tt.game.resources[a.SATIETY].value+=2*e.population,e.dissolved+=1}}))}}class g extends l{constructor(){super({id:0,name:"Herbivore",description:"You prefer to eat vegetables and won't eat meat.",special:"Your species won't hunt for food.",types:[c.BASE],power:-1})}}class m extends l{constructor(){super({id:0,name:"Carnivore",description:"You prefer to eat meat and won't eat vegetables.",special:"Your species won't engage in agriculture for food.",types:[c.BASE],power:-1})}}class _ extends l{constructor(){super({id:0,name:"Omnivore",description:"You enjoy every source of meal equally.",special:"Your species will engage in agriculture and hunt for food.",types:[c.BASE],power:1})}}class v{constructor(){this.genes=new Map,this.genes.set("protocell",new p),this.genes.set("phagocytosis",new u),this.genes.set("photosynthesis",new d),this.genes.set("chemosynthesis",new h),this.genes.set("herbivore",new g),this.genes.set("carnivore",new m),this.genes.set("omnivore",new _)}get(e){return this.genes.get(e)}print(){console.log(this.genes)}}const f=new v;var b=s(482);const w=s(566),y=w.keys().reduce(((e,t)=>(e[t]=w(t),e)),{}),x={OOZE:"ooze",HUMANOID:"humanoid",BEAST:"beast",FISH:"fish",AVIAN:"avian",DEMONIC:"demonic",ABERRATION:"aberration",INCORPOREAL:"incorporeal"};class k{constructor(e,t,s,o,r,n,i){(0,b.Z)(this,"color","ffffff"),this.id=e,this.identifier=t.replaceAll(" ","_").toLowerCase(),this.name=t,this.genes=s,this.type=o,this.home=r,this.primary_sources=n,this.color=i}get icon(){const e=`./races/${this.identifier}.svg`;return`<img src="${y[e]}" class="race-icon" />`}}class E extends k{constructor(){super(0,"Micro Ooze",[],x.OOZE,"",[a.PROTEIN,a.DNA,a.RNA],"ffffff")}}class O extends k{constructor(){super(1,"Human",[f.get("omnivore")],x.HUMANOID,"Earth",[a.FOOD,a.WOOD,a.STONE],"36a3cd")}}class T extends k{constructor(){super(2,"Elf",[f.get("herbivore")],x.HUMANOID,"Lanthalas",[a.FOOD,a.WISP,a.STONE],"36a3cd")}}class S extends k{constructor(){super(3,"Orc",[f.get("carnivore")],x.HUMANOID,"Mag'roth",[a.MEAT,a.WOOD,a.STONE],"36a3cd")}}class A{constructor(){this.races=new Map,this.races.set("micro_ooze",new E),this.races.set("human",new O),this.races.set("elf",new T),this.races.set("orc",new S)}get(e){return this.races.get(e)}print(){console.log(this.races)}}const D=new A;class H{constructor(e,t){this.name=e,this.races=t,this.population=1,this.actions=[],this.buildings=[]}}class I extends H{constructor(){super("Earth",["human","elf","orc"])}}class M{constructor(){this.planets=new Map,this.planets.set("earth",I)}get(e){return new(this.planets.get(e))}print(){console.log(this.planets)}}const N=new M;class Y{constructor(e){this.name=e}}class C extends Y{constructor(){super("Standard")}}class P{constructor(){this.universes=new Map,this.universes.set("standard",new C)}get(e){return this.universes.get(e)}print(){console.log(this.universes)}}const R=new P;class z{constructor(){this.races=D,this.genes=f,this.planets=N,this.universes=R}}const L=new z;class j extends i{constructor(){super({name:"Awake",description:"Start being cognitive of the world around you.",color:"blue"})}execute(){Tt.game.stage.step+=1}}class B extends i{constructor(){super({name:"Eat Cells",description:"Seek and eat other cells around you.",color:"red"})}execute(){Tt.game.stage.cells_eaten+=1}}class $ extends i{constructor(){super({name:"Absorb Light",description:"Learn how to turn light into nutrients.",color:"green"})}execute(){Tt.game.stage.light_absorbed+=1}}class U extends i{constructor(){super({name:"Metabolize  Chemicals",description:"Turn carbon-based chemicals into organic matter.",color:"blue"})}execute(){Tt.game.stage.chemical_oxidated+=1}}class F extends i{constructor(){const e=Tt.game.stage;let t="";const s=e.cells_eaten<e.light_absorbed||e.cells_eaten<e.chemical_oxidated;t=s?"\n\t\t\tYour species hasn't tasted the blood of enough living organisms<br />\n\t\t\tso you're not fit for the life of organic matter consumption.<br />\n\t\t\t<br />\n\t\t\t<span class=\"evolution-fork-disabled\">Evolutionary fork disabled</span>":'\n\t\t\tEvolve into species that will consume organic matter<br/>as main form of sustenance.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-info">This is a <u>major</u> evolutionary fork</span>',super({name:"Phagocytosis",description:t,color:"red",disabled:s,ishtml:!0})}execute(){Tt.game.stage.kingdom_fork_evolution(se.PHAGOCYTOSIS)}}class W extends i{constructor(){const e=Tt.game.stage;let t="";const s=e.light_absorbed<e.cells_eaten||e.light_absorbed<e.chemical_oxidated;t=s?"\n\t\t\tYour species hasn't paid enough attention to the light<br />\n\t\t\tand won't be able to extract nutrients from it.<br />\n\t\t\t<br />\n\t\t\t<span class=\"evolution-fork-disabled\">Evolutionary fork disabled</span>":'\n\t\t\tEvolve into species that will use sources of natural light as main form of sustenance.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-info">This is a <u>major</u> evolutionary fork</span>',super({name:"Photosynthesis",description:t,color:"green",disabled:s,ishtml:!0})}execute(){Tt.game.stage.kingdom_fork_evolution(se.PHOTOSYNTHESIS)}}class q extends i{constructor(){const e=Tt.game.stage;let t="";const s=e.chemical_oxidated<e.cells_eaten||e.chemical_oxidated<e.light_absorbed;t=s?'\n\t\t\tYour species hasn\'t oxidize enough organic matter from chemicals<br />\n\t\t\tand hasnt developed the ability to get nutrients from it.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-disabled">Evolutionary fork disabled</span>':'\n\t\t\tEvolve into species that will use sources of oxide chemicals as main form of sustenance.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-info">This is a <u>major</u> evolutionary fork</span>',super({name:"Chemosynthesis",description:t,color:"blue",disabled:s,ishtml:!0})}execute(){Tt.game.stage.kingdom_fork_evolution(se.CHEMOSYNTHESIS)}}class Z extends i{constructor(){let e="";e=Tt.game.stage.proto_killed>0?'\n\t\t\tYour species has tasted the blood of other living organisms<br />\n\t\t\tso you\'re not fit for the herbivore life style.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-disabled">Evolutionary fork disabled</span>':'\n\t\t\tEvolve into species that live only off the land.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-info">This is an evolutionary fork</span>',super({name:"Hervibore",description:e,color:"green",disabled:Tt.game.stage.proto_killed>0,ishtml:!0})}execute(){Tt.game.stage.food_evolve("herbivore")}}class G extends i{constructor(){let e="";e=Tt.game.stage.plants_eaten>0?'\n\t\t\tYour species has delighted in the commodities from plant matter<br />\n\t\t\tand refuses to eat only meat to survive.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-disabled">Evolutionary fork disabled</span>':'\n\t\t\tEvolve into species that will only hunt to eat.<br />\n\t\t\t<br />\n\t\t\t<span class="evolution-fork-info">This is an evolutionary fork</span>',super({name:"Carnivore",description:e,color:"red",disabled:Tt.game.stage.plants_eaten>0,ishtml:!0})}execute(){Tt.game.stage.food_evolve("carnivore")}}class K extends i{constructor(){let e='\n\t\tEvolve into species that will eat anything to survive.<br />\n\t\t<br />\n\t\t<span class="evolution-fork-info">This is an evolutionary fork</span>';super({name:"Omnivore",description:e,color:"grad-gr",ishtml:!0})}execute(){Tt.game.stage.food_evolve("omnivore")}}class V{constructor({name:e,display:t=!0,value:s=0,has_rps:o=!0,rps:r=null,dps:n=null,storage:i=null,extra_storage:a=null}){this.name=e,this.identifier=e.replaceAll(" ","_").toLowerCase(),this.display=t,this._value=s,this._rps=[],r&&(this._rps=r),this.has_rps=o,this._dps=[],n&&(this._dps=n),this.mult=1,this._storage=()=>0,i&&(this._storage=i),this._extra_storage=[],a&&(this._extra_storage=a)}update(){this.value+=(this.rps*this.mult-this.dps)/10}get value(){return this._value}set value(e){this._value=e,this._value<0&&(this._value=0),this._value>this.all_storage&&(this._value=this.all_storage)}get rps(){return this._rps.reduce(((e,t)=>e+t.value()),0)}get rps_sources(){return this._rps}add_rps(e){console.log("adding source".source),this._rps.push(e)}remove_rps(e){this._rps=this._rps.filter((t=>t.source!=e.source))}get dps(){return this._dps.reduce(((e,t)=>e+t.value()),0)}get dps_sources(){return this._dps}add_dps(e){this._dps.push(e)}remove_dps(e){this._dps=this._dps.filter((t=>t.source!=e.source))}get all_storage(){return this.storage+this.extra_storage}get storage(){return this._storage()}get extra_storage(){return this._extra_storage.reduce(((e,t)=>e+t.value()),0)}get storage_sources(){return this._extra_storage}add_storage(e){this._extra_storage.push(e)}remove_storage(e){this._extra_storage=this._extra_storage.filter((t=>t.source!=e.source))}}class J extends V{constructor(){super({name:"Satiety",value:50*Tt.game.stage.population,storage:()=>50*Tt.game.stage.population})}}class Q extends V{constructor(){super({name:"DNA",storage:()=>5*Tt.game.stage.population})}}class X extends V{constructor(){super({name:"RNA",has_rps:!1,storage:()=>20*Tt.game.stage.population})}}class ee extends V{constructor(){super({name:"Protein",has_rps:!1})}}const te={KINGDOM:"kingdom",FOOD:"food"},se={PHAGOCYTOSIS:"phagocytosis",PHOTOSYNTHESIS:"photosynthesis",CHEMOSYNTHESIS:"chemosynthesis"};class oe{constructor(){this.name="Protoplasm",this.stage=te.KINGDOM,this._step=0,this.show_progress=!1,this.progress={},this.actions={explore:{name:"Explore",description:"A small cell living in a microscopic world.<br />Your first steps into an adventure of evolution begin.",actions:[new j]}},this.population=0,this._population_death_rate=0,this._cells_eaten=0,this._light_absorbed=0,this._chemical_oxidated=0,this._evo_1_progress=50,this.cells_killed=0,this.plants_eaten=0,this.vaporized=0,this.dissolved=0,this.evo_2_progress=1200}update(){}get step(){return this._step}set step(e){this._step=e,1==this._step?this._setup_step_1():2==this._step&&this._setup_step_2()}get cells_eaten(){return this._cells_eaten}set cells_eaten(e){this._cells_eaten=e,this._cells_eaten+this._light_absorbed+this._chemical_oxidated>=this._evo_1_progress&&this._setup_step_1_2()}get light_absorbed(){return this._light_absorbed}set light_absorbed(e){this._light_absorbed=e,this._cells_eaten+this._light_absorbed+this._chemical_oxidated>=this._evo_1_progress&&this._setup_step_1_2()}get chemical_oxidated(){return this._chemical_oxidated}set chemical_oxidated(e){this._chemical_oxidated=e,this._cells_eaten+this._light_absorbed+this._chemical_oxidated>=this._evo_1_progress&&this._setup_step_1_2()}_setup_step_1(){const e=this;Tt.game.race.genes.push(L.genes.get("protocell")),e.actions={explore:{name:"Explore",description:"You feel the urge to get new cells in your body.",actions:[new B,new $,new U]}},e.progress={total:e._evo_1_progress,bars:[{color:"red",cb:function(){return 2*e.cells_eaten}},{color:"green",cb:function(){return 2*e.light_absorbed}},{color:"blue",cb:function(){return 2*e.chemical_oxidated}}],progress:{complete:function(){return e.cells_eaten+e.light_absorbed+e.chemical_oxidated>=e._evo_1_progress},cb:function(){const t=(e.cells_eaten+e.light_absorbed+e.chemical_oxidated)/e._evo_1_progress*100;return Math.min(t,100)}}},e.show_progress=!0}_setup_step_1_2(){const e=this;e.actions={evolve:{name:"Evolve",description:"You can feel a change within your nucleus.<br />A new path is opening...",actions:[new F,new W,new q]}}}kingdom_fork_evolution(e){const t=this;switch(Tt.game.race.genes.pop(),e){case se.PHAGOCYTOSIS:Tt.game.race.genes.push(L.genes.get(e));break;case se.PHOTOSYNTHESIS:Tt.game.race.genes.push(L.genes.get(e));break;case se.CHEMOSYNTHESIS:Tt.game.race.genes.push(L.genes.get(e));break;default:break}t.show_progress=!1,t.progress=null,delete t.actions["evolve"],this.step+=1}_setup_step_2(){const e=this;this.population=1,e.actions={explore:{name:"Explore",description:"The world has expanded around you. Take a long look and discover new fundaments of life.",actions:[]},evolve:{name:"Evolve",description:"Using the power of genetics start improving yourself and expanding your species.",actions:[]}};const t=new J;t.add_dps({source:"population",value:()=>this.population}),Tt.game.resources[a.SATIETY]=t;const s=new Q;s.add_rps({source:"population",value:()=>this.population}),Tt.game.resources[a.DNA]=s,Tt.game.resources[a.RNA]=new X,Tt.game.resources[a.PROTEIN]=new ee,Tt.game.race.genes.forEach((e=>{e.apply(this)}))}_prepare_food_evolution(){this.actions["evolve"]={name:"Evolve in the food chain",actions:[new Z,new G,new K]}}food_evolve(e){Tt.game.race.genes.push(L.genes.get(e)),delete this.actions["evolve"]}}class re{constructor(){this._update_cycle=null,this.universe=L.universes.get("standard"),this.planet=L.planets.get("earth"),this.race=L.races.get("micro_ooze"),this.resources={},this.stage=new oe}init(){this._update_cycle=setInterval((()=>{this.update()}),100)}update(){this.stage.update(),Object.entries(this.resources).forEach((e=>{e[1].update()}))}}let ne;const ie=function(){return ne||(ne=new re),ne};var ae=s(139);const ce={id:"header",class:"header"},le={class:"universe-header"},pe=["innerHTML"],ue={class:"planet-name"},de=(0,r._)("i",{class:"bi bi-globe"},null,-1),he={class:"universe-name"},ge=(0,r._)("i",{class:"bi bi-box"},null,-1),me=(0,r._)("div",{class:"progress-header"}," Progress ",-1),_e=(0,r._)("div",{class:"settings-header"},[(0,r._)("a",{href:"https://github.com/sakurazaki/idle-universe",target:"_blank"},"Github"),(0,r.Uk)(" | "),(0,r._)("a",{href:"https://discord.gg/R2FsdNn29A",target:"_blank"},"Discord")],-1);function ve(e,t,s,o,n,i){return(0,r.wg)(),(0,r.iD)("header",ce,[(0,r._)("div",le,[(0,r._)("div",{class:"race-name",style:(0,ae.j5)({color:s.game.race.color}),innerHTML:s.game.race.icon+" "+s.game.race.name},null,12,pe),(0,r._)("div",ue,[de,(0,r.Uk)(" "+(0,ae.zw)(s.game.planet.name),1)]),(0,r._)("div",he,[ge,(0,r.Uk)(" "+(0,ae.zw)(s.game.universe.name),1)])]),me,_e])}var fe={name:"Header",props:["game"]},be=s(89);const we=(0,be.Z)(fe,[["render",ve]]);var ye=we;const xe={id:"oozestage",class:"oozestage"},ke={id:"evolution-stats",class:"evolution"},Ee={id:"actions",class:"actions"},Oe={id:"info",class:"info"};function Te(e,t,s,o,n,i){const a=(0,r.up)("Evolution"),c=(0,r.up)("EvolutionBar"),l=(0,r.up)("Actions"),p=(0,r.up)("Resources");return(0,r.wg)(),(0,r.iD)("div",xe,[(0,r._)("div",ke,[(0,r.Wm)(a,{race:s.game.race},null,8,["race"])]),(0,r._)("div",Ee,[s.game.stage.show_progress?((0,r.wg)(),(0,r.j4)(c,{key:0,stage:s.game.stage},null,8,["stage"])):(0,r.kq)("",!0),(0,r.Wm)(l,{stage:s.game.stage},null,8,["stage"])]),(0,r._)("div",Oe,[(0,r.Wm)(p,{game:s.game},null,8,["game"])])])}const Se=e=>((0,r.dD)("data-v-66b63bbc"),e=e(),(0,r.Cn)(),e),Ae={id:"evolution-species",class:"evolution-species"},De=Se((()=>(0,r._)("div",{class:"header"},"Evolution status",-1))),He={class:"evolution-list"},Ie={class:"name"},Me={class:"types"},Ne={class:"description"},Ye={key:0,class:"effects"};function Ce(e,t,s,o,n,i){return(0,r.wg)(),(0,r.iD)("div",Ae,[De,(0,r._)("div",He,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.race.genes,(e=>((0,r.wg)(),(0,r.iD)("div",{class:(0,ae.C_)(["gene",e.types]),key:e.identifier},[(0,r._)("div",Ie,(0,ae.zw)(e.name),1),(0,r._)("div",Me,(0,ae.zw)(e.types.map((e=>e&&e[0].toUpperCase()+e.slice(1))).join(", ")),1),(0,r._)("div",Ne,(0,ae.zw)(e.description),1),e.effects?((0,r.wg)(),(0,r.iD)("div",Ye,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.effects,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,ae.C_)(["effect",e.color]),key:t},(0,ae.zw)(e.description),3)))),128))])):(0,r.kq)("",!0),e.special?((0,r.wg)(),(0,r.iD)("div",{key:1,class:(0,ae.C_)(["special",{neutral:0==e.power,good:e.power>0&&e.power<=6,blessing:e.power>6,bad:e.power<0&&e.power>=-6,curse:e.power<-6}])},(0,ae.zw)(e.special),3)):(0,r.kq)("",!0)],2)))),128))])])}var Pe={name:"Evolution",props:["race"]};const Re=(0,be.Z)(Pe,[["render",Ce],["__scopeId","data-v-66b63bbc"]]);var ze=Re;const Le={class:"evolution-bar"},je={class:"progress-bar"};function Be(e,t,s,o,n,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",Le,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.stage.progress.bars,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,ae.C_)(["bar",e.color]),key:t,style:(0,ae.j5)({width:i.getBarWidth(t)+"%"})},null,6)))),128))]),(0,r._)("div",je,[(0,r._)("div",{class:(0,ae.C_)(["bar blue",{complete:s.stage.progress.progress.complete()}]),style:(0,ae.j5)({width:s.stage.progress.progress.cb()+"%"})},null,6)])],64)}var $e={name:"EvolutionBar",props:["stage"],methods:{getBarWidth(e){return this.stage.progress.bars[e].cb()}}};const Ue=(0,be.Z)($e,[["render",Be],["__scopeId","data-v-01761f30"]]);var Fe=Ue;const We={class:"action-list"},qe={class:"title"},Ze=["innerHTML"],Ge={class:"action-group"},Ke=["onClick","onMouseover"];function Ve(e,t,s,o,n,i){const a=(0,r.up)("Popper");return(0,r.wg)(),(0,r.iD)("div",We,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.stage.actions,((e,s)=>((0,r.wg)(),(0,r.iD)("div",{class:"group",key:s},[(0,r._)("div",qe,(0,ae.zw)(e.name),1),e.description?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"description",innerHTML:e.description},null,8,Ze)):(0,r.kq)("",!0),(0,r._)("div",Ge,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.actions,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,ae.C_)(["action",[e.disabled?"disabled":e.color]]),key:`action-${s}_${o}`},[(0,r._)("button",{type:"button",ref:`action-${s}_${o}`,class:"action-button",onClick:t=>i.onClick(e),onMouseover:t=>i.showPopper(e,s,o),onMouseleave:t[0]||(t[0]=e=>i.hidePopper())},(0,ae.zw)(e.name),41,Ke)],2)))),128))])])))),128)),n.popperRef?((0,r.wg)(),(0,r.j4)(a,{key:0,refEl:e.$refs[n.popperRef],desc:n.popperDesc,ishtml:n.popperHTML},null,8,["refEl","desc","ishtml"])):(0,r.kq)("",!0)])}var Je={name:"Actions",props:["stage"],data(){return{popperShow:!1,popperDesc:"",popperRef:null,popperHTML:!1}},methods:{showPopper(e,t,s){this.popperDesc=e.description,this.popperRef=`action-${t}_${s}`,this.popperHTML=e.ishtml},hidePopper(){this.popperDesc="",this.popperRef=null,this.popperHTML=!1},onClick(e){e.disabled||e.execute()}},updated(){this.$nextTick((function(){this.$refs[this.popperRef]||(this.popperRef=null)}))}};const Qe=(0,be.Z)(Je,[["render",Ve],["__scopeId","data-v-a6c01d24"]]);var Xe=Qe;const et=e=>((0,r.dD)("data-v-0f95fcd8"),e=e(),(0,r.Cn)(),e),tt={key:0,class:"resources"},st=et((()=>(0,r._)("div",{class:"title"},"Resources",-1))),ot={class:"name"},rt={class:"value"},nt={key:0,class:"storage"},it={key:1,class:"no-storage"},at={key:2,class:"rps"},ct={key:3,class:"no-rps"};function lt(e,t,s,o,n,i){return s.game.resources?((0,r.wg)(),(0,r.iD)("div",tt,[st,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.game.resources,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"resource",key:e.identifier},[(0,r._)("div",ot,(0,ae.zw)(e.name),1),(0,r._)("div",rt,(0,ae.zw)(i.numberToFixated(e.value)),1),0!=e.all_storage?((0,r.wg)(),(0,r.iD)("div",nt,(0,ae.zw)(e.all_storage),1)):(0,r.kq)("",!0),0==e.all_storage?((0,r.wg)(),(0,r.iD)("div",it)):(0,r.kq)("",!0),e.has_rps?((0,r.wg)(),(0,r.iD)("div",at,(0,ae.zw)(e.rps-e.dps),1)):(0,r.kq)("",!0),e.has_rps?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",ct," "))])))),128))])):(0,r.kq)("",!0)}var pt={name:"Resources",props:["game"],data(){return{popperShow:!1,popperDesc:"",popperRef:null,popperHTML:!1}},methods:{showPopper(e,t,s){this.popperDesc=e.description,this.popperRef=`action-${t}_${s}`,this.popperHTML=e.ishtml},hidePopper(){this.popperDesc="",this.popperRef=null,this.popperHTML=!1},numberToFixated(e){return e=Math.floor(e)+"",e<1e3?e:e<1e4?e.charAt(0)+","+e.substring(1):(e/1e3).toFixed(e%1e3!=0)+"k"}}};const ut=(0,be.Z)(pt,[["render",lt],["__scopeId","data-v-0f95fcd8"]]);var dt=ut,ht={name:"OozeStage",props:["game"],components:{Evolution:ze,EvolutionBar:Fe,Actions:Xe,Resources:dt}};const gt=(0,be.Z)(ht,[["render",Te]]);var mt=gt,_t={name:"App",components:{Header:ye,OozeStage:mt},data:function(){return{game:ie()}},mounted(){this.game.init()}};const vt=(0,be.Z)(_t,[["render",n]]);var ft=vt;const bt=["innerHTML"];function wt(e,t,s,o,n,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[s.ishtml?((0,r.wg)(),(0,r.iD)("div",{key:0,ref:"dropdown",id:"tooltip",role:"tooltip",class:"popover-custom",innerHTML:s.desc},null,8,bt)):(0,r.kq)("",!0),s.ishtml?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:1,ref:"dropdown",id:"tooltip",role:"tooltip",class:"popover-custom"},(0,ae.zw)(s.desc),513))],64)}var yt=s(129),xt={name:"PopperTooltip",props:["open","refEl","desc","offset","ishtml"],data(){return{tooltip:null}},mounted(){this.$nextTick((function(){this.tooltip=new yt.Z(this.refEl,this.$refs["dropdown"],{placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,this.offset]}}]}),this.tooltip.update()}))}};const kt=(0,be.Z)(xt,[["render",wt],["__scopeId","data-v-c35a570c"]]);var Et=kt;s(652);const Ot=(0,o.ri)(ft);Ot.component("Popper",Et);const Tt=Ot.mount("#app")},566:function(e,t,s){var o={"./races/elf.svg":818,"./races/human.svg":163,"./races/micro_ooze.svg":25,"./races/orc.svg":660};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=n,e.exports=r,r.id=566},818:function(e,t,s){"use strict";e.exports=s.p+"img/elf.ef7b5539..svg"},163:function(e,t,s){"use strict";e.exports=s.p+"img/human.84a9035c..svg"},25:function(e,t,s){"use strict";e.exports=s.p+"img/micro_ooze.9f83c372..svg"},660:function(e,t,s){"use strict";e.exports=s.p+"img/orc.a4c4d17a..svg"}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,o,r,n){if(!o){var i=1/0;for(p=0;p<e.length;p++){o=e[p][0],r=e[p][1],n=e[p][2];for(var a=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(s.O).every((function(e){return s.O[e](o[c])}))?o.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(p--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[o,r,n]}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/idle-universe/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,i=o[0],a=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(c)var p=c(s)}for(t&&t(o);l<i.length;l++)n=i[l],s.o(e,n)&&e[n]&&e[n][0](),e[i[l]]=0;return s.O(p)},o=self["webpackChunkidleuniverse"]=self["webpackChunkidleuniverse"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(755)}));o=s.O(o)})();
//# sourceMappingURL=app.aabbe553.js.map