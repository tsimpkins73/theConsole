(this.webpackJsonptheConsole=this.webpackJsonptheConsole||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},28:function(e,t,n){e.exports=n(45)},33:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),o=n.n(c),i=n(22),s=n.n(i),l=n(23),u=n(1),m=n(2),h=n(4),d=n(3),p=n(5),f=n(7),E=n(12),b=(n(33),n(16),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.lpArticle;return o.a.createElement("section",{id:"lpArticle"},o.a.createElement("h1",null,"Our Latest Post"),o.a.createElement("div",{id:"lpArticleImageContainer"},o.a.createElement("img",{id:"lpArticleImage",alt:"Headline Image for "+e.headline,src:e.image})),o.a.createElement("div",{id:"articleText"},o.a.createElement("h3",{id:"articleText"},e.headline),o.a.createElement("p",{id:"articleText"},e.summary)))}}]),t}(o.a.Component)),v=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.lpArticle;return o.a.createElement("section",{className:"LandingContainer"},o.a.createElement("div",null,o.a.createElement("h1",{className:"lpHeaderText"},"theConsole"),o.a.createElement("p",null,"theConsole is a collection of Web Development focused articles and resources. We compile these article from a number of sources across the web in an easy to navigate format."),o.a.createElement("div",null,o.a.createElement(f.b,{to:"/sign-up"},o.a.createElement("button",{className:"lpButton"},"Sign Up")),o.a.createElement(f.b,{to:"/login"},o.a.createElement("button",{className:"lpButton"},"Login"))),o.a.createElement("div",{className:"lpArticle-container"},e?o.a.createElement(b,{lpArticle:e}):null)))}}]),t}(o.a.Component),g=(n(38),n(26)),j=n.n(g),A=n(6),O=n.n(A),y={saveAuthToken:function(e){window.localStorage.setItem(O.a.TOKEN_KEY,e)},getAuthToken:function(){return window.localStorage.getItem(O.a.TOKEN_KEY)},clearAuthToken:function(){window.localStorage.removeItem(O.a.TOKEN_KEY)},hasAuthToken:function(){return!!y.getAuthToken()},makeBasicAuthToken:function(e,t){return window.btoa("".concat(e,":").concat(t))},parseJwt:function(e){return j()(e)},readJwtToken:function(){return y.parseJwt(y.getAuthToken())},_getMsUntilExpiry:function(e){return 1e3*e.exp-Date.now()},queueCallbackBeforeExpiry:function(e){var t=y._getMsUntilExpiry(y.readJwtToken());r=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry:function(){clearTimeout(r)}},C=y,S=null,k=["mousedown","mousemove","keypress","scroll","touchstart"],I={setIdleCallback:function(e){S=e},resetIdleTimer:function(e){clearTimeout(a),a=setTimeout(S,3e5)},regiserIdleTimerResets:function(){k.forEach((function(e){return document.addEventListener(e,I.resetIdleTimer,!0)}))},unRegisterIdleResets:function(){clearTimeout(a),k.forEach((function(e){return document.removeEventListener(e,I.resetIdleTimer,!0)}))}},B=I,T={postUser:function(e){return fetch("".concat(A.API_BASE_URL,"/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postLogin:function(e){var t=e.username,n=e.password;return fetch("".concat(A.API_BASE_URL,"/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:n})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return C.saveAuthToken(e.authToken),B.regiserIdleTimerResets(),C.queueCallbackBeforeExpiry((function(){T.postRefreshToken()})),e}))},postRefreshToken:function(){return fetch("".concat(A.API_BASE_URL,"/auth/refresh"),{method:"POST",headers:{authorization:"Bearer ".concat(C.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return C.saveAuthToken(e.authToken),C.queueCallbackBeforeExpiry((function(){T.postRefreshToken()})),e})).catch((function(e){console.log("refresh token request error"),console.error(e)}))}},_=T,U=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.handleSubmitJwtAuth=function(e){e.preventDefault(),n.setState({error:null});var t=e.target,r=t.username,a=t.password;_.postLogin({username:r.value,password:a.value}).then((function(e){r.value="",a.value="",n.props.onLoginSuccess(e.username),n.props.history.push("/dashboard")})).catch((function(e){n.setState({error:e.error})}))},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"LandingContainer"},o.a.createElement("div",{className:"LoginForm"},o.a.createElement("div",{className:"loginFormHeader"},o.a.createElement("h1",{className:"lpHeaderText"}," Welcome, Please Sign In! "),o.a.createElement("p",null," Guests, please login with Username: GenBlanc and Password: Password34!")),o.a.createElement("form",{onSubmit:this.handleSubmitJwtAuth,className:"RegistrationForm"},o.a.createElement("div",{className:"formLine"},o.a.createElement("label",{htmlFor:"username"}," Username "),o.a.createElement("input",{type:"text",name:"username"})),o.a.createElement("div",{className:"formLine"},o.a.createElement("label",{htmlFor:"password"}," Password "),o.a.createElement("input",{type:"password",name:"password"}),o.a.createElement("br",null)),o.a.createElement("div",{className:"signupButtons"},o.a.createElement("button",{className:"lpButton"},"Submit"),o.a.createElement(f.b,{to:"/sign-up"},o.a.createElement("button",{className:"lpButton"},"Sign Up")),o.a.createElement("div",null,this.state.error)))))}}]),t}(o.a.Component),N=(n(41),function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.name,a=t.username,c=t.password;n.setState({error:null}),_.postUser({username:a.value,password:c.value,name:r.value}).then((function(e){r.value="",a.value="",c.value="",n.props.onRegistrationSuccess(),n.props.history.push("/dashboard")})).catch((function(e){n.setState({error:e.error})}))},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.handleSubmit;return o.a.createElement("section",{className:"LandingContainer"},o.a.createElement("div",{className:"SignUpForm"},o.a.createElement("h1",{className:"lpHeaderText"},"Please Sign Up to Join theConsole"),o.a.createElement("form",{className:"RegistrationForm",onSubmit:e},o.a.createElement("div",{className:"formLine"}," ",o.a.createElement("label",{htmlFor:"Name"},"Name"),o.a.createElement("input",{type:"text",name:"name"})),o.a.createElement("div",{className:"formLine"}," ",o.a.createElement("label",{htmlFor:"Username"},"Email"),o.a.createElement("input",{type:"email",name:"username"})),o.a.createElement("div",{className:"formLine"}," ",o.a.createElement("label",{htmlFor:"Password"},"Password"),o.a.createElement("input",{type:"password",name:"password"})),o.a.createElement("p",{id:"passwordDesc"},"Password must be at least 8 characters, and must contain one upper case, lower case, number and special character"),o.a.createElement("div",{className:"signupButtons"}," ",o.a.createElement("button",{className:"lpButton",type:"submit"},"Submit"),o.a.createElement(f.b,{to:"/login"},o.a.createElement("button",{className:"lpButton"},"Login")))),o.a.createElement("div",null,this.state.error)))}}]),t}(o.a.Component));N.defaultProps={onRegistrationSuccess:function(){}};n(17);var w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleSubmit=function(e){n.props.handleSearchForm(e),n.props.history.push("/dashboard")},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"searchDiv"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",className:"input",name:"searchTerm",placeholder:"Search..."}),o.a.createElement("button",{type:"submit"},"Search")))}}]),t}(o.a.Component),P=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.favoriteID,n=this.props.headline;return o.a.createElement(f.b,{to:"/dashboard/article/"+t,onClick:function(){e.props.handleArticleButton(t)}},o.a.createElement("h3",null,n))}}]),t}(o.a.Component),L=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.articles.filter((function(e){return e.favorite})),t=this.props.handleArticleButton;return o.a.createElement("div",{id:"categoriesDiv"},o.a.createElement("h1",{id:"sidebarHeadline"},"Favorites"),e.map((function(e){return o.a.createElement(P,{favoriteID:e.id,handleArticleButton:t,headline:e.headline})})))}}]),t}(o.a.Component),x=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.category;return o.a.createElement(f.b,{to:"/dashboard/"+e.id},o.a.createElement("h3",null,e.name))}}]),t}(o.a.Component),R=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.categories;return o.a.createElement("div",{id:"categoriesDiv"},o.a.createElement("h1",{id:"sidebarHeadline"},"Categories"),e.map((function(e){return o.a.createElement(x,{category:e})})))}}]),t}(o.a.Component);R.defaultProps={categories:[]};var F=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.articles,t=this.props.categories,n=this.props.handleSearchForm;return o.a.createElement("section",{id:"sidebar"},o.a.createElement(w,Object.assign({},this.props,{articles:e,handleSearchForm:n})),o.a.createElement(L,{articles:e,handleArticleButton:this.props.handleArticleButton}),o.a.createElement(R,{categories:t}))}}]),t}(o.a.Component),D=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.article;this.props.handleArticleButton;return o.a.createElement("section",{id:"article"},o.a.createElement("div",{id:"previewImageContainer"},o.a.createElement("img",{id:"previewImage",alt:"Headline Image for "+t.headline,src:t.image})),o.a.createElement("div",{id:"articleText"},o.a.createElement("h3",{id:"articleText"},t.headline),o.a.createElement("p",{id:"articleText"},t.summary),o.a.createElement(f.b,{to:"/dashboard/article/"+(t.article_id||t.id)},o.a.createElement("button",{onClick:function(){e.props.handleArticleButton(t.article_id||t.id)}},"View Full Article"))))}}]),t}(o.a.Component),J=(n(42),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={articles:[],categoryId:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"fetchData",value:function(e){var t=this;fetch("".concat(A.API_BASE_URL,"/articles/category/").concat(e)).then((function(e){return e.json()})).then((function(n){t.setState({articles:n,categoryId:e})}))}},{key:"fetchSearchArticles",value:function(e){var t=this.props.articles.filter((function(t){return t.text.indexOf(e)>=0}));this.setState({articles:t}),this.props.history.push("/dashboard")}},{key:"componentDidMount",value:function(){this.props.categoryId?this.fetchData(this.props.categoryId):this.setState({articles:this.props.articles})}},{key:"componentWillReceiveProps",value:function(e){e.categoryId!==this.props.categoryId&&this.fetchData(e.categoryId),e.articles!==this.props.articles&&this.setState({articles:e.articles}),this.props.searchterm!==e.searchterm&&this.fetchSearchArticles(e.searchterm)}},{key:"isEmpty",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"render",value:function(){var e=this.state.articles,t=this.props.handleArticleButton;return this.isEmpty(e)?o.a.createElement("section",{id:"ArticleList"},o.a.createElement("h1",{id:"noArticlesAnnouncement"},"There are no articles for this category"),";"):o.a.createElement("section",{id:"ArticleList"},e.map((function(e){return o.a.createElement(D,{handleArticleButton:t,article:e})})))}}]),t}(o.a.Component)),H=n(27),K={getArticles:function(){return fetch("".concat(A.API_BASE_URL,"/articles"),{headers:{}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getArticle:function(e){return fetch("".concat(A.API_BASE_URL,"/articles/").concat(e),{headers:{authorization:"bearer ".concat(C.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getArticleComments:function(e){return fetch("".concat(A.API_BASE_URL,"/articles/").concat(e,"/comments"),{headers:{authorization:"bearer ".concat(C.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postComment:function(e,t,n){return fetch("".concat(A.API_BASE_URL,"/comments"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(C.getAuthToken())},body:JSON.stringify({article_id:e,text:t,user_id:n})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteComment:function(e){return fetch("".concat(A.API_BASE_URL,"/comments/").concat(e),{method:"DELETE",headers:{"content-type":"application/json",authorization:"bearer ".concat(C.getAuthToken())},body:JSON.stringify({commentId:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},V=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).setValues=function(){var e=n.props.users;if(e){var t=e.find((function(e){return e.id===n.props.comment.user_id})),r=n.props.comment.user_id;if(n.props.currentUser){var a=n.props.currentUser.id;n.setState({user:t}),n.setState({userId:r}),n.setState({currentUserId:a})}else{n.setState({user:t}),n.setState({userId:r}),n.setState({currentUserId:{}})}}},n.state={user:{},userId:{},currentUserId:{}},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setValues()}},{key:"componentWillReceiveProps",value:function(){this.setValues()}},{key:"render",value:function(){var e=this,t=this.props.users.find((function(t){return t.id===e.props.comment.user_id}))||{},n=this.state.userId,r=this.state.currentUserId,a=this.props.comment,c=this.props.deleteComment;return console.warn(this.props.users),n===r?o.a.createElement("div",{id:"commentContainer"},o.a.createElement("div",{id:"articleComment"},o.a.createElement("div",{className:"commentContent"},o.a.createElement("div",{className:"commenterName"},o.a.createElement("h1",{className:"commentOwner"},t.name)),o.a.createElement("div",{className:"commentText"},o.a.createElement("p",null,a.text))),o.a.createElement("div",{className:"deleteComment"},o.a.createElement("button",{className:"deleteCommentButton",onClick:function(){c(a.id)}},"X")))):o.a.createElement("div",{id:"commentContainer"},o.a.createElement("div",{id:"articleComment"},o.a.createElement("div",{className:"commentContent"},o.a.createElement("div",{className:"commenterName"},o.a.createElement("h1",{className:"commentOwner"},t.name)),o.a.createElement("div",{className:"commentText"},o.a.createElement("p",null,a.text))),o.a.createElement("div",{className:"deleteComment"})))}}]),t}(o.a.Component),M=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.articleComments,t=this.props.users,n=this.props.currentUser,r=this.props.deleteComment;return o.a.createElement("div",{id:"articleComments"},e.map((function(e){return o.a.createElement(V,{comment:e,users:t,currentUser:n,deleteComment:r})})))}}]),t}(o.a.Component);M.defaultProps={articleComments:[]};var W=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).newComment=function(e){e.preventDefault();var t=e.currentTarget.addComment.value,r=n.props.articleId,a=n.props.currentUser.id,c={article_id:r,text:t},o=document.getElementById("addCommentText");K.postComment(r,t,a).then(n.props.addComment(c)).catch(n.context.setError),o.value=""},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"newComment"},o.a.createElement("form",{onSubmit:this.newComment},o.a.createElement("label",{htmlFor:"AddComment"},"Add Comment"),o.a.createElement("input",{id:"addCommentText",name:"addComment",type:"text",placeholder:" "}),o.a.createElement("button",null,"Submit Comment")))}}]),t}(o.a.Component),z=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).addComment=function(e){var t=[].concat(Object(H.a)(n.state.articleComments),[e]);n.setState({articleComments:t}),setTimeout((function(){document.getElementById("articleComments").scrollIntoView({block:"end"})}),500)},n.getComments=function(e){fetch("".concat(A.API_BASE_URL,"/comments/").concat(e)).then((function(e){return e.json()})).then((function(e){n.setState({articleComments:e})}))},n.removeCommentFromState=function(e){var t=n.state.articleComments.filter((function(t){return t.id!==e}));n.setState({articleComments:t})},n.deleteComment=function(e){K.deleteComment(e).then(n.removeCommentFromState(e)).catch(n.context.setError)},n.state={articleComments:[],articles:[],currentArticle:[],user:{}},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){if(this.props.articleId){var e=this.props.currentArticle,t=this.props.user;this.setState({user:t}),this.setState({currentArticle:e}),this.getComments(this.props.articleId)}else this.setState({articleComments:[]})}},{key:"componentWillReceiveProps",value:function(e){if(e.articleId!==this.props.articleId){var t=e.currentArticle;this.setState({currentArticle:t}),this.getComments(e.articleId)}}},{key:"render",value:function(){var e=this,t=this.state.user,n=this.state.currentArticle;return this.state.currentArticle.id||(n=this.props.article||{}),o.a.createElement("div",{id:"article-full-container"},o.a.createElement("section",{id:"article-Full"},o.a.createElement("div",{id:"articleImage"},o.a.createElement("img",{id:"previewImage",alt:"Headline Image for "+n.headline,src:n.image})),o.a.createElement("div",{id:"articleText"},o.a.createElement("h3",{id:"articleText"},n.headline),o.a.createElement("p",{id:"articleText"},n.text)),o.a.createElement("div",{id:"articleButtons"},o.a.createElement("button",{onClick:this.props.handleFavoriteButton},"Favorite"),o.a.createElement(f.b,{to:"/dashboard/article/"+n.id+"/comment"},o.a.createElement("button",null,"Add Comment"))),o.a.createElement(E.a,{exact:!0,path:"/dashboard/article/".concat(n.id,"/comment"),render:function(){return o.a.createElement(W,{addComment:e.addComment,article:e.props.article,articleId:e.props.article.id,getComments:e.getComments,user:t})}}),o.a.createElement(M,{articleId:this.props.articleId,users:this.props.users,articleComments:this.state.articleComments,currentUser:this.props.currentUser,deleteComment:this.deleteComment})))}}]),t}(o.a.Component),q=(n(43),function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleLogoutClick=function(){C.clearAuthToken(),n.props.clearUser()},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{id:"dashboardContainer"},o.a.createElement("section",{id:"Header"},o.a.createElement("h1",{id:"headerTitle"},"theConsole")),o.a.createElement("section",{id:"navbar"},o.a.createElement(f.b,{id:"navLink",onClick:this.handleLogoutClick,to:"/"},"Logout"),o.a.createElement(f.b,{id:"navLink",to:"/dashboard"},"Home")),o.a.createElement("section",{id:"contenContainer"},o.a.createElement(E.a,{exact:!0,path:"/dashboard",render:function(t){return o.a.createElement(J,{handleArticleButton:e.props.handleArticleButton,articles:e.props.articles,searchterm:e.props.searchterm,history:e.props.history})}}),o.a.createElement(E.a,{path:"/dashboard/article/:id",render:function(t){var n=t.match.params.id,r=e.props.articles,a=r.find((function(e){return e.id==n}));return o.a.createElement(z,{currentArticle:e.props.currentArticle,users:e.props.users,articles:r,article:a,articleId:n,setComment:e.props.setComment,currentUser:e.props.currentUser,handleArticleButton:e.props.handleArticleButton,handleFavoriteButton:function(){e.props.handleFavoriteButton(a)}})}}),o.a.createElement(E.a,{exact:!0,path:"/dashboard/:categoryId",render:function(t){return o.a.createElement(J,{handleArticleButton:e.props.handleArticleButton,categoryId:t.match.params.categoryId})}}),o.a.createElement(E.a,{exact:!0,path:"/dashboard/search/:searchterm",render:function(t){return o.a.createElement(J,{handleArticleButton:e.props.handleArticleButton,searchterm:t.match.params.searchterm})}}),o.a.createElement(F,Object.assign({},this.props,{handleArticleButton:this.props.handleArticleButton,articles:this.props.articles,handleSearchForm:this.props.handleSearchForm,categories:this.props.categories}))))}}]),t}(o.a.Component)),Y=function(e){function t(e,n){var r;return Object(u.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e,n))).clearUser=function(){r.setState({currentUser:{}}),localStorage.user="null"},r.handleFavoriteButton=function(e){e.favorite=!e.favorite,r.setState({articles:r.state.articles})},r.handleArticleButton=function(e){var t=e,n=r.state.articles.find((function(e){return e.id==t}));r.setState({currentArticle:n})},r.handleSearchForm=function(e){e.preventDefault();var t=e.currentTarget.searchTerm.value;r.setState({searchterm:t})},r.onLoginSuccess=function(e){fetch("".concat(A.API_BASE_URL,"/users/").concat(e)).then((function(e){return e.json()})).then((function(e){r.setState({currentUser:e}),localStorage.user=JSON.stringify(e)}))},r.getArticlesByCategory=function(e){var t=r.state.categories.find((function(t){return t.name===e})).id;fetch("".concat(A.API_BASE_URL,"/articles/category/").concat(t)).then((function(e){return e.json()})).then((function(e){r.setState({categoryArticles:e})}))},r.state=Object(l.a)({articles:[],categories:[],currentArticle:[],lpArticle:{},categoryArticles:[],searchterm:"",searchArticles:[],currentUser:{},users:[]},"currentArticle",{}),r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getArticles",value:function(){var e=this;fetch("".concat(A.API_BASE_URL,"/articles")).then((function(e){return e.json()})).then((function(t){e.setState({articles:t})}))}},{key:"getCategories",value:function(){var e=this;fetch("".concat(A.API_BASE_URL,"/categories")).then((function(e){return e.json()})).then((function(t){e.setState({categories:t})}))}},{key:"getUsers",value:function(){var e=this;fetch("".concat(A.API_BASE_URL,"/users")).then((function(e){return e.json()})).then((function(t){e.setState({users:t})}))}},{key:"componentDidMount",value:function(){if(this.getArticles(),this.getCategories(),this.getUsers(),localStorage.user){var e=JSON.parse(localStorage.user);this.setState({currentUser:e})}}},{key:"render",value:function(){var e=this,t=this.state.articles[0];return o.a.createElement("main",{className:"App"},o.a.createElement(f.a,null,o.a.createElement(E.a,{exact:!0,path:"/",render:function(){return o.a.createElement(v,{lpArticle:t})}}),o.a.createElement(E.a,{path:"/login",render:function(t){return o.a.createElement(U,Object.assign({onLoginSuccess:e.onLoginSuccess},t))}}),o.a.createElement(E.a,{path:"/sign-up",component:N}),o.a.createElement(E.a,{path:"/dashboard",render:function(t){return o.a.createElement(q,Object.assign({},t,{handleArticleButton:e.handleArticleButton,users:e.state.users,articles:e.state.articles,setComment:e.setComment,searchterm:e.state.searchterm,currentUser:e.state.currentUser,categories:e.state.categories,handleSearchForm:e.handleSearchForm,handleFavoriteButton:e.handleFavoriteButton,clearUser:e.clearUser,currentArticle:e.state.currentArticle}))}})))}}]),t}(o.a.Component);n(44);s.a.render(o.a.createElement(Y,null),document.getElementById("root"))},6:function(e,t){e.exports={PORT:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_BASE_URL:"http://localhost:8000"}).PORT,NODE_ENV:"production",API_BASE_URL:"http://localhost:8000",DB_URL:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_BASE_URL:"http://localhost:8000"}).DB_URL,TOKEN_KEY:"theConsole-auth-token"}}},[[28,1,2]]]);
//# sourceMappingURL=main.c22d1cc0.chunk.js.map