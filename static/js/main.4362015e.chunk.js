(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{45:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),o=n.n(r),s=(n(45),n(2)),i=n(10),l=n(11),p=n(13),u=n(12),d=n(6),j=n(21),b=(n(50),n(1)),h=function(e){var t=Object(a.useState)(!0),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(b.jsxs)("div",{className:"card card_".concat(e.type),children:[!c&&Object(b.jsxs)("div",{onClick:function(){r(!c)},className:"backside sideTrue",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{children:["HP:",e.hp]}),Object(b.jsx)("progress",{max:"100",value:e.hp})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{children:["Attack:",e.attack]}),Object(b.jsx)("progress",{max:"100",value:e.attack})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{children:["Defense:",e.defense]}),Object(b.jsx)("progress",{max:"100",value:e.defense})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{children:["Special Attack:",e.specialAttack]}),Object(b.jsx)("progress",{max:"100",value:e.specialAttack})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{children:["Special Defense:",e.specialDefense]}),Object(b.jsx)("progress",{max:"100",value:e.specialDefense})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{children:["Speed:",e.speed]}),Object(b.jsx)("progress",{max:"100",value:e.speed})]})]}),c&&Object(b.jsxs)("div",{onClick:function(){r(!c)},className:"front_side",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"pokemon_id",children:["index: ",e.id]}),Object(b.jsx)("img",{className:"photo",src:e.photo,alt:e.name})]}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{className:"name",children:e.name}),Object(b.jsxs)("div",{className:"hp",children:["HEALTH: ",e.hp]})]}),Object(b.jsxs)("div",{className:"stats",children:[Object(b.jsxs)("div",{className:"stats_item",children:[" ",e.weight," kg",Object(b.jsx)("span",{className:"tag tag_".concat(e.type),children:"Weight"})]}),Object(b.jsxs)("div",{className:"stats_item center_item",children:[" ",e.type," ",Object(b.jsx)("span",{className:"tag tag_".concat(e.type),children:"Type"})]}),Object(b.jsxs)("div",{className:"stats_item",children:[e.height," m",Object(b.jsx)("span",{className:"tag tag_".concat(e.type),children:"Height"})]})]})]})]})},O=(n(52),n(4)),m=n.n(O),f=n(8),k=n(24),v=n(37),x=n.n(v).a.create({baseURL:"https://pokeapi.co/api/v2/"}),y=function(e,t){return x.get("pokemon?limit=".concat(t,"&offset=").concat(e)).then((function(e){return e}))},g=function(e){return x.get("pokemon/".concat(e)).then((function(e){return e}))},_=function(){return x.get("type").then((function(e){return e}))},F=function(e){return x.get("type/".concat(e)).then((function(e){return e}))},P={pokemonListData:[],pokemon:[],searchHistory:[],typesData:[],activeFilter:[],errorBySearch:!1,isShowPaginator:!0,isLoading:!1},w={setPokemon:function(e){return{type:"SET_POKEMON",payload:e}},toggleShowPaginator:function(e){return{type:"TOGGLE_SHOW_PAGINATOR",payload:e}},toggleLoading:function(e){return{type:"TOGGLE_LOADING",payload:e}},setActiveFilter:function(e){return{type:"SET_ACTIVE_FILTER",payload:e}},delActiveFilter:function(e){return{type:"DEL_ACTIVE_FILTER",payload:e}},errorSearch:function(e){return{type:"ERROR_SEARCH",payload:e}},setPokemonTypeData:function(e){return{type:"SET_POKEMON_TYPE_DATA",payload:e}},setPokemonInfo:function(e){return{type:"SET_POKEMON_INFO",payload:e}},resetPokemonInfo:function(){return{type:"RESET_POKEMON_INFO"}},setFindPokemon:function(e){return{type:"SET_FIND_POKEMON",payload:e}},deleteFindPokemon:function(){return{type:"DELETE_FIND_POKEMON"}}},E=function(e,t){return function(){var n=Object(f.a)(m.a.mark((function n(a){var c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y(e,t);case 2:c=n.sent,a(w.setPokemon(c.data.results)),a(w.toggleShowPaginator(!0));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:a=t.sent,n(w.setPokemonInfo(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POKEMON":return Object(s.a)(Object(s.a)({},e),{},{pokemonListData:t.payload});case"SET_POKEMON_TYPE_DATA":return Object(s.a)(Object(s.a)({},e),{},{typesData:t.payload});case"TOGGLE_LOADING":return Object(s.a)(Object(s.a)({},e),{},{isLoading:t.payload});case"TOGGLE_SHOW_PAGINATOR":return Object(s.a)(Object(s.a)({},e),{},{isShowPaginator:t.payload});case"RESET_POKEMON_INFO":return Object(s.a)(Object(s.a)({},e),{},{pokemon:[]});case"SET_POKEMON_INFO":return e.pokemon.map((function(e){return e.id})).includes(t.payload.id)?e:Object(s.a)(Object(s.a)({},e),{},{pokemon:[].concat(Object(k.a)(e.pokemon),[t.payload])});case"SET_FIND_POKEMON":return e.searchHistory.map((function(e){return e.id})).includes(t.payload.id)?e:Object(s.a)(Object(s.a)({},e),{},{searchHistory:[].concat(Object(k.a)(e.searchHistory),[t.payload])});case"DELETE_FIND_POKEMON":return Object(s.a)(Object(s.a)({},e),{},{searchHistory:[]});case"ERROR_SEARCH":return Object(s.a)(Object(s.a)({},e),{},{errorBySearch:t.payload});case"SET_ACTIVE_FILTER":return Object(s.a)(Object(s.a)({},e),{},{activeFilter:[].concat(Object(k.a)(e.activeFilter),[{type:t.payload}])});case"DEL_ACTIVE_FILTER":return Object(s.a)(Object(s.a)({},e),{},{activeFilter:e.activeFilter.filter((function(e){return e.type!==t.payload}))});default:return e}},N=(n(73),function(e){var t=e.cardQuantity,n=e.viewCards10,a=e.viewCards20,c=e.viewCards50,r=e.viewCards100,o=e.onCardQuantity,s=e.onMorePokemon;return Object(b.jsxs)("div",{className:"paginator",children:[Object(b.jsx)("span",{className:t===n?"active_value paginator_value":"paginator_value",onClick:function(){o(n)},children:n}),Object(b.jsx)("span",{className:t===a?"active_value paginator_value":"paginator_value",onClick:function(){o(a)},children:a}),Object(b.jsx)("div",{className:"btn_more",children:Object(b.jsxs)("button",{onClick:function(){s(t)},children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),"More"]})}),Object(b.jsx)("span",{className:t===c?"active_value paginator_value":"paginator_value",onClick:function(){o(c)},children:c}),Object(b.jsx)("span",{className:t===r?"active_value paginator_value":"paginator_value",onClick:function(){o(r)},children:r})]})}),T=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onCardQuantity=function(e){a.setState({cardQuantity:e})},a.onMorePokemon=function(e){var t=a.props.pokemonInfo.length;a.props.requestPokemon(t,e).then((function(){a.props.pokemonList.forEach((function(e){return a.props.getPokemonData(e.name)}))}))},a.state={viewCards10:10,viewCards20:20,viewCards50:50,viewCards100:100,cardQuantity:20},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)(N,Object(s.a)(Object(s.a)({},this.props),{},{viewCards20:this.state.viewCards20,viewCards50:this.state.viewCards50,viewCards100:this.state.viewCards100,cardQuantity:this.state.cardQuantity,viewCards10:this.state.viewCards10,onMorePokemon:this.onMorePokemon,onCardQuantity:this.onCardQuantity}))}}]),n}(c.a.Component),L=Object(d.b)((function(e){return{pokemonList:e.pokedex.pokemonListData,pokemonInfo:e.pokedex.pokemon}}),{requestPokemon:E,getPokemonData:S})(T),D=function(e){var t=e.pokemonInfo,n=e.isShowPaginator,a=e.searchHistory,c=e.onDeleteFindPokemon;t.sort((function(e,t){return e.id-t.id}));var r=function(e){return e.map((function(e){return Object(b.jsx)(h,{id:e.id,hp:e.stats[0].base_stat,height:e.height,weight:e.weight,type:e.types[0].type.name,name:e.name,photo:null==e.sprites.other.dream_world.front_default?e.sprites.front_default:e.sprites.other.dream_world.front_default,attack:e.stats[1].base_stat,defense:e.stats[2].base_stat,specialAttack:e.stats[3].base_stat,specialDefense:e.stats[4].base_stat,speed:e.stats[5].base_stat},e.id)}))};return Object(b.jsxs)("div",{children:[a.length>0&&Object(b.jsxs)("div",{className:"found_border",children:[Object(b.jsx)("h1",{children:"Found Pokemon:"}),Object(b.jsx)("div",{className:"container",children:r(a)}),Object(b.jsx)("button",{className:"btn_close_searchHistory",onClick:function(){c()},children:" close"})]}),Object(b.jsx)("div",{className:"container",children:r(t)}),n&&Object(b.jsx)(L,{})]})},A=(n(74),function(){return Object(b.jsx)("div",{className:"size",children:Object(b.jsx)("div",{className:"loader",children:Object(b.jsxs)("svg",{version:"1.1",id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 330 331.7",enableBackground:"new 0 0 330 331.7",xmlSpace:"preserve",children:[Object(b.jsx)("circle",{id:"center",fill:"#FFFFFF",cx:"165",cy:"165.9",r:"36.5"}),Object(b.jsxs)("g",{id:"bottom",children:[Object(b.jsx)("path",{id:"bottom1",fill:"#FFFFFF",d:"M165,267.6c-28.7,0-54.6-11.9-73.1-31L76.2,252c22.5,23.2,53.9,37.6,88.8,37.6\r c30.5,0,58.4-11,80-29.3l-14.6-16.5C212.7,258.6,189.9,267.6,165,267.6z"}),Object(b.jsx)("path",{id:"bottom2",fill:"#FFFFFF",d:"M288.1,178.4l-22.1,0c-3.2,26.1-16.4,49.2-35.6,65.3l14.6,16.5\r C268.7,240.1,284.8,211.2,288.1,178.4z"}),Object(b.jsx)("path",{id:"bottom3",fill:"#FFFFFF",d:"M244.8,178.4C244.8,178.4,244.8,178.4,244.8,178.4l-21.8,0c-3.8,18.8-16.6,33.7-33.7,41.4l0,0\r l8.8,19.6c-9.4,4.3-19.8,6.8-30.8,7.1l0.5,21c50.6-1.4,92-39.8,98.1-89.1L244.8,178.4z"}),Object(b.jsx)("path",{id:"bottom4",fill:"#FFFFFF",d:"M198.2,239.5l-8.8-19.6c-7.4,3.4-15.7,5.2-24.4,5.2c-28.4,0-52.1-20-57.9-46.6l-21.8,0l-0.1,0\r l-21.1,0c0,0.1,0,0.1,0,0.2l-0.1-0.2l-22.1,0.1c2.9,28.5,15.4,54.1,34.3,73.5l15.7-15.4l-0.1-0.2c18.5,19.2,44.5,31.1,73.2,31.1\r c0.9,0,1.9,0,2.8,0l-0.5-21C178.4,246.2,188.8,243.7,198.2,239.5z"})]}),Object(b.jsxs)("g",{id:"top",children:[Object(b.jsx)("path",{id:"top3",fill:"#FFFFFF",d:"M288.1,153.2c-2.2-22.1-10.3-42.5-22.7-59.7l-17.9,12.9l-17,12.3c0.1,0.2,0.2,0.3,0.3,0.5\r c-14.6-20.6-38.7-34-65.8-34c-40.3,0-73.7,29.5-79.8,68.1l21.9,0c5.8-26.7,29.5-46.6,57.9-46.6c28.4,0,52.1,20,57.9,46.6\r L288.1,153.2z"}),Object(b.jsx)("path",{id:"top2",fill:"#FFFFFF",d:"M165,64.1c-39.2,0-73.3,22.2-90.2,54.7c0,0,0,0,0,0l-19.5-10.2c-7.1,13.6-11.7,28.6-13.3,44.6\r l22.1,0v0l21.2,0c6-38.6,39.5-68.1,79.8-68.1c7.9,0,15.6,1.2,22.8,3.3l5.9-20.2C184.6,65.6,175,64.1,165,64.1z"}),Object(b.jsx)("path",{id:"top1",fill:"#FFFFFF",d:"M193.7,68.2l-5.9,20.2c17.4,5.1,32.4,15.9,42.7,30.3l17-12.3l17.9-12.9\r c-15.9-22-38.8-38.6-65.5-46.4c-11.1-3.3-22.8-5-34.9-5c-47.7,0-89.1,27-109.7,66.6l19.5,10.2c17-32.5,51-54.7,90.2-54.7\r C175,64.1,184.6,65.6,193.7,68.2"})]})]})})})}),I=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onDeleteFindPokemon=function(){e.props.deleteFindPokemon(),e.props.errorSearch(!1)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.requestPokemon(0,20).then((function(){e.props.pokemonList.forEach((function(t){return e.props.getPokemonData(t.name)}))}))}},{key:"render",value:function(){return this.props.isLoading?Object(b.jsx)(A,{}):Object(b.jsx)(D,Object(s.a)(Object(s.a)({},this.props),{},{onDeleteFindPokemon:this.onDeleteFindPokemon}))}}]),n}(c.a.Component),M=Object(d.b)((function(e){return{pokemonInfo:e.pokedex.pokemon,pokemonList:e.pokedex.pokemonListData,searchHistory:e.pokedex.searchHistory,isShowPaginator:e.pokedex.isShowPaginator,isLoading:e.pokedex.isLoading}}),{requestPokemon:E,getPokemonData:S,deleteFindPokemon:w.deleteFindPokemon,errorSearch:w.errorSearch})(I),R=n(23),B=(n(76),function(e){return Object(b.jsx)(R.c,{initialValues:{term:""},onSubmit:function(t,n){var a=n.setSubmitting,c=t.term.toLowerCase();e.onSearchPokemon(c),a(!1)},children:function(t){var n=t.isSubmitting;return Object(b.jsxs)(R.b,{children:[e.errorBySearch&&Object(b.jsx)("div",{style:{padding:"15px 10px",color:"red"},children:"Pokemon is not found"}),Object(b.jsx)(R.a,{className:e.errorBySearch?"error_name":null,type:"text",name:"term",placeholder:"\ud83d\udd0d"}),Object(b.jsx)("button",{className:"btn_find",type:"submit",disabled:n,children:"Find"})]})}})}),H=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onSearchPokemon=function(t){""!==t&&e.props.findPokemon(t)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)(B,Object(s.a)(Object(s.a)({},this.props),{},{onSearchPokemon:this.onSearchPokemon}))}}]),n}(c.a.Component),G=Object(d.b)((function(e){return{errorBySearch:e.pokedex.errorBySearch}}),{findPokemon:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e);case 3:a=t.sent,n(w.setFindPokemon(a.data)),n(w.errorSearch(!1)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(w.errorSearch(!0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(H),K=n(22),Q=(n(77),n(78),function(e){var t=e.setCheckType,n=e.delCheckType,c=e.name,r=Object(a.useState)(!1),o=Object(j.a)(r,2),s=o[0],i=o[1];return Object(b.jsxs)("div",{className:"checkboxContainer",children:[Object(b.jsx)("input",{type:"checkbox",id:"cb-"+c,className:"checkboxType",checked:s,onChange:function(){i(!s),s?n(c):t(c)}}),Object(b.jsx)("label",{htmlFor:"cb-"+c,children:c})]})}),z=function(e){var t=e.isLoading,n=e.activeBtn,a=e.typesData,c=e.setCheckType,r=e.delCheckType,o=e.onShowAllPokemon,s=e.onShowPokemon,i=e.activeFilter,l=a.map((function(e){return Object(b.jsx)(Q,{name:e.name,setCheckType:c,delCheckType:r},e.name)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"types_block",children:l}),Object(b.jsxs)("div",{className:"types_block_find",children:[n&&Object(b.jsx)("button",{className:"btn_find_type",disabled:t,onClick:function(){o()},children:"ALL TYPES"}),Object(b.jsx)("button",{className:"btn_find_type",disabled:0===i.length,onClick:function(){s()},children:"FIND"})]})]})},q=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).isActiveBtn=function(e){a.setState({activeBtn:e})},a.onShowPokemon=Object(f.a)(m.a.mark((function e(){var t,n,c,r,o,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.toggleLoading(!0),a.props.resetPokemonInfo(),t=Object(K.a)(a.props.activeFilter),e.prev=3,t.s();case 5:if((n=t.n()).done){e.next=28;break}return c=n.value,e.next=9,a.props.getPokemonWithTypes(c.type);case 9:r=Object(K.a)(a.props.pokemonList),e.prev=10,r.s();case 12:if((o=r.n()).done){e.next=18;break}return s=o.value,e.next=16,a.props.getPokemonData(s.pokemon.name);case 16:e.next=12;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),r.e(e.t0);case 23:return e.prev=23,r.f(),e.finish(23);case 26:e.next=5;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(3),t.e(e.t1);case 33:return e.prev=33,t.f(),e.finish(33);case 36:a.isActiveBtn(!0),a.props.toggleLoading(!1);case 38:case"end":return e.stop()}}),e,null,[[3,30,33,36],[10,20,23,26]])}))),a.onShowAllPokemon=Object(f.a)(m.a.mark((function e(){var t,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.toggleLoading(!0),a.props.resetPokemonInfo(),e.next=4,a.props.requestPokemon(0,20);case 4:t=Object(K.a)(a.props.pokemonList),e.prev=5,t.s();case 7:if((n=t.n()).done){e.next=13;break}return c=n.value,e.next=11,a.props.getPokemonData(c.name);case 11:e.next=7;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),t.e(e.t0);case 18:return e.prev=18,t.f(),e.finish(18);case 21:a.isActiveBtn(!1),a.props.toggleLoading(!1);case 23:case"end":return e.stop()}}),e,null,[[5,15,18,21]])}))),a.setCheckType=function(e){a.props.setActiveFilter(e)},a.delCheckType=function(e){a.props.delActiveFilter(e)},a.state={activeBtn:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getTypes()}},{key:"render",value:function(){return Object(b.jsx)(z,Object(s.a)(Object(s.a)({},this.props),{},{activeBtn:this.state.activeBtn,onShowAllPokemon:this.onShowAllPokemon,onShowPokemon:this.onShowPokemon,setCheckType:this.setCheckType,delCheckType:this.delCheckType}))}}]),n}(c.a.Component),V=Object(d.b)((function(e){return{typesData:e.pokedex.typesData,pokemonList:e.pokedex.pokemonListData,activeFilter:e.pokedex.activeFilter,isLoading:e.pokedex.isLoading}}),{getTypes:function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,t(w.setPokemonTypeData(n.data.results));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getPokemonWithTypes:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:a=t.sent,n(w.setPokemon(a.data.pokemon)),n(w.toggleShowPaginator(!1)),0===a.data.pokemon.length&&alert("no pokemon with type "+a.data.name);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestPokemon:E,getPokemonData:S,setActiveFilter:w.setActiveFilter,delActiveFilter:w.delActiveFilter,resetPokemonInfo:w.resetPokemonInfo,toggleLoading:w.toggleLoading})(q);var W=function(){return Object(a.useEffect)((function(){document.title="pokedex"}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(G,{}),Object(b.jsx)(V,{}),Object(b.jsx)(M,{})]})},X=n(17),Y=n(40),J=Object(X.b)({pokedex:C}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.c,Z=Object(X.d)(J,U(Object(X.a)(Y.a)));window.__store__=Z;var $=Z;o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d.a,{store:$,children:Object(b.jsx)(W,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.4362015e.chunk.js.map