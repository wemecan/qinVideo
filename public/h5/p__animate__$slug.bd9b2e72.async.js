(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{IIFU:function(e,n,t){"use strict";t.r(n);t("R9oj");var a=t("ECub"),i=t("mrSG"),o=t("q1tI"),r=t.n(o),s=t("MuoO"),l=(t("pC0b"),t("GzdX")),c=t("fFZ8"),m=t.n(c),d=(t("Znn+"),t("ZTPi")),p=t("vOnD"),f=t("LLXN"),u=t("wd/R"),g=t.n(u),h=t("TSYQ"),b=t.n(h),x=t("mNhR"),v=t("XEok"),y=t("yDSA"),E=t("8KYf"),w=t("7rZP"),k=t("l61h");function j(){var e=m()(["\n  .head {\n    width: 100%;\n    height: 160px;\n    position: relative;\n    padding: 55px 15px 15px 15px;\n    margin-bottom: 25px;\n\n    .bg-cover {\n      width: 100%;\n      height: 160px;\n      left: 0;\n      top: 0;\n      position: absolute;\n      overflow: hidden;\n\n      .bg {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        filter: blur(15px);\n        transform: scale(1.2);\n        background-size: cover;\n        background-position: center;\n        z-index: -1;\n\n        &:after {\n          content: '';\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n          top: 0;\n          background-color: rgba(0, 0, 0, 0.3);\n        }\n      }\n    }\n\n    .info {\n      height: 120px;\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n\n      .cover {\n        background-size: cover;\n        border: 3px solid #fff;\n        border-radius: 5px;\n        background-position: center;\n        width: 90px;\n        height: 120px;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n      }\n\n      .main {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        height: 95px;\n        width: calc(100% - 105px);\n\n        .left {\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n          align-items: flex-start;\n          color: white;\n          height: 100%;\n\n          span:nth-child(1) {\n            font-size: 16px;\n            font-weight: bold;\n          }\n\n          span:nth-child(2),\n          span:nth-child(3) {\n            font-size: 13px;\n          }\n        }\n\n        .star {\n          display: flex;\n          flex-direction: column;\n          justify-content: space-around;\n          align-items: center;\n          color: white;\n          font-size: 12px;\n          height: 100%;\n\n          .rate {\n            color: #ffa726;\n            font-size: 24px;\n          }\n        }\n      }\n    }\n  }\n\n  .information {\n    padding: 0 15px;\n\n    .introduce {\n      font-weight: 200;\n      font-size: 13px;\n      overflow: hidden;\n      line-height: 20px;\n      margin-bottom: 10px;\n      text-align: justify;\n    }\n\n    .button {\n      width: 100%;\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-end;\n\n      section {\n        width: calc((100% - 30px) / 2);\n      }\n\n      div {\n        min-width: calc((100% - 30px) / 2);\n        height: 46px;\n        padding: 0 25px;\n        color: #fff;\n        font-size: 1.1rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        font-weight: 300;\n        border-radius: 5px;\n\n        &:hover {\n          opacity: 0.8;\n        }\n\n        i {\n          font-size: 1.5em;\n          margin-right: 10px;\n        }\n      }\n\n      .like {\n        background-color: #f36392;\n\n        &.active i {\n          color: #ffa726;\n        }\n      }\n\n      .download {\n        margin-left: 30px;\n        background-color: rgb(24, 144, 255);\n      }\n    }\n  }\n\n  .content.container {\n    margin: 15px 0;\n    border-top: solid 6px #ebebeb;\n\n    .sec {\n      display: none;\n\n      &.active {\n        display: block;\n      }\n    }\n  }\n"]);return j=function(){return e},e}var N=d["a"].TabPane,M=p["a"].div(j()),O=e=>{window.open(e)},z=(e,n)=>{return e.like.filter(e=>e.slug===n).length>0},D=e=>{var n=e.info,t=e.userAction,a=e.user,i=Object(o["useContext"])(v["a"]),s=Object(o["useMemo"])(()=>i,[i]);return r.a.createElement(M,{color:s},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"bg-cover"},r.a.createElement("div",{className:"bg",style:{backgroundImage:"url(".concat(n.cover.vertical,")")}})),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"cover",style:{backgroundImage:"url(".concat(n.cover.vertical,")")}}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"left"},r.a.createElement("span",null,n.title),r.a.createElement("span",null,n.information.eposideCount," ",Object(f["formatMessage"])({id:"animate.info.eposideCount"})," ",Object(f["formatMessage"])({id:n.information.isUpdate?"animate.info.isUpdate.true":"animate.info.isUpdate.false"})),r.a.createElement("span",null,g()(n.information.firstPlay).format("YYYY-MM-DD")," ",Object(f["formatMessage"])({id:"animate.info.firstPlay"}))),r.a.createElement("div",{className:"star"},r.a.createElement("span",{className:"rate"},n.information.rateStar),r.a.createElement(l["a"],{disabled:!0,allowHalf:!0,defaultValue:n.information.rateStar/2,style:{fontSize:"10px"}}),r.a.createElement("span",null,n.information.rateCount,Object(f["formatMessage"])({id:"animate.info.rate.count"})))))),r.a.createElement("div",{className:"information"},r.a.createElement("div",{className:"introduce"},r.a.createElement("span",null,n.information.introduce)),r.a.createElement("div",{className:"button"},r.a.createElement(k["a"],null,r.a.createElement("div",{className:b()("like",{active:z(a,n.slug)}),onClick:t},r.a.createElement(x["a"],{type:"icon-yizhuifan"}),r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.btn.like"})))),n.play.downTitle&&r.a.createElement("div",{className:"download",onClick:()=>{O(n.play.downLink)}},r.a.createElement(x["a"],{type:"icon-ic_cloud_download_"}),r.a.createElement("span",null,n.play.downTitle)))),r.a.createElement("div",{className:"content container"},r.a.createElement(d["a"],{defaultActiveKey:"1"},r.a.createElement(N,{tab:Object(f["formatMessage"])({id:"animate.tabs.eposide"}),key:"1"},r.a.createElement(y["b"],{eposide:n.season,cover:n.cover.vertical,slug:n.slug})),r.a.createElement(N,{tab:"".concat(Object(f["formatMessage"])({id:"animate.tabs.comment"}),"(").concat(n.count.comment,")"),key:"2"},r.a.createElement(E["a"],{type:"animate",belong:n.slug,target:"P00"})),r.a.createElement(N,{tab:Object(f["formatMessage"])({id:"animate.tabs.relative"}),key:"3"},r.a.createElement(w["a"],{type:"animate",title:n.title})))))},C=D,I=t("Y8ry"),Y=t("Dp36"),A=class extends o["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,n=this.props.dispatch;n({type:"animate/getInfo",payload:{params:{slug:e}}})}),this.userAction=(()=>{var e=this.state.slug,n=this.props.dispatch;Y["a"].postUserAction({data:{type:"animate",kind:"like",slug:e}}).then(e=>{e&&n({type:"user/refreshInfo",payload:{}})})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,n){return e.match.params.slug!==n.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,n){n.slug!==this.state.slug&&this.initData()}render(){var e=this.props,n=e.user.info.animate,t=e.animate.info,i=e.loading;return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(I["a"],null):t.slug?r.a.createElement(C,{info:t,userAction:this.userAction,user:n}):r.a.createElement(a["a"],{description:r.a.createElement("span",null,Object(f["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};A=i["a"]([Object(s["connect"])(e=>{var n=e.user,t=e.animate,a=e.loading;return{user:n,animate:t,loading:a.effects["animate/getInfo"]}})],A);n["default"]=A}}]);