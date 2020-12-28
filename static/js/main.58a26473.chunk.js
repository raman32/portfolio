(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(3),s=a.n(i),n=a(10),r=a.n(n),l=(a(16),a(9)),o=a.p+"static/media/background.f60ccd85.jpeg",p=a.p+"static/media/opengl.e43cd8e4.png",d=a.p+"static/media/cuda.6453660d.png",j=a.p+"static/media/csshtml.14c3065e.svg",m=a.p+"static/media/mps.da40459f.png",b=a.p+"static/media/mps-dem.cea5a555.png",h=a.p+"static/media/mujo.4d5c9839.png",u=a.p+"static/media/laptime.cd568155.png",x=a.p+"static/media/kaaphal.d90a5c8d.png",f=a.p+"static/media/kaaphalapp.b3a67f90.png",A=a.p+"static/media/myphoto.cb27612e.jpg",O=a.p+"static/media/mypic.1cb969b0.jpg",g=a.p+"static/media/resume_raman.14b76808.pdf",v=a(4),N=a(2),w=a(6);a(22);var C=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),a=Object(i.useRef)(null),s=Object(i.useRef)(null),n=Object(i.useRef)(null),r=Object(i.useState)(!1),C=Object(l.a)(r,2),y=C[0],k=C[1],U=Object(i.useState)(0),K=Object(l.a)(U,2),I=K[0],S=K[1];Object(i.useEffect)((function(){var e=setInterval((function(){S((function(e){return e<4?e+1:0}))}),8e3);return function(){clearInterval(e)}}),[]),Object(i.useEffect)((function(){function t(){k(!1),window.scrollY>window.innerHeight?e.current.style.color="#000":e.current.style.color="#fff"}return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]);var T=function(e){switch(e){case 0:return m;case 1:return h;case 2:return u;case 3:return x;case 4:return f;case 5:return b;default:return m}},D=function(e){switch(e){case 0:return"MPS (Moving Particle semi-implicit Solver (CFD) program ";case 1:return"3D Visualization tool for For CFD simulation (MUJO)";case 2:return"Laptime Calculator";case 3:return"Kaaphal";case 4:return"Kaaphal Mobile App";case 5:return"SPH-DEM solver (current)";default:return"MPS (Moving Particle semi-implicit Solver (CFD) program "}};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{ref:e,className:"App-header",onClick:function(){k(!y)},children:Object(c.jsx)(v.a,{icon:N.d})}),Object(c.jsx)("aside",{className:"App-gototop",onClick:function(){return window.scroll(0,0)},children:Object(c.jsx)(v.a,{icon:N.c})}),Object(c.jsx)("nav",{className:"App-navigator",style:{zIndex:y?10:-1},onClick:function(){k(!1)},children:Object(c.jsxs)("div",{className:"App-navigator-container",children:[Object(c.jsx)("a",{href:"#main",children:Object(c.jsxs)("div",{className:"App-navigator-component",children:[Object(c.jsx)(v.a,{icon:N.g})," Home"]})}),Object(c.jsx)("a",{href:"#projects",children:Object(c.jsxs)("div",{className:"App-navigator-component",children:[Object(c.jsx)(v.a,{icon:N.h})," Projects"]})}),Object(c.jsx)("a",{href:"#expertise",children:Object(c.jsxs)("div",{className:"App-navigator-component",children:[Object(c.jsx)(v.a,{icon:N.e}),"  My Expertise"]})}),Object(c.jsx)("a",{href:"#aboutme",children:Object(c.jsxs)("div",{className:"App-navigator-component",children:[Object(c.jsx)(v.a,{icon:N.i}),"  About Me"]})}),Object(c.jsx)("a",{href:"#contactme",children:Object(c.jsxs)("div",{className:"App-navigator-component",children:[Object(c.jsx)(v.a,{icon:N.a}),"   Contact Me"]})})]})}),Object(c.jsxs)("main",{id:"main",className:"App-main",children:[Object(c.jsxs)("div",{className:"App-intro",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:A,className:"App-myphoto",alt:"My"})}),Object(c.jsxs)("div",{className:"App-intro-textcontainer",children:[Object(c.jsx)("div",{className:"App-hi",children:"Hi!"}),Object(c.jsx)("div",{className:"App-myname",children:"I am Raman Ghimire."}),Object(c.jsx)("div",{className:"App-mybio",children:"A Software Developer especializing in developing software for simulations and visualization along with NVIDA CUDA programming. Aditioanlly I make Web Apps and Mobile Apps in React and React-Native."}),Object(c.jsx)("a",{href:g,download:!0,children:Object(c.jsx)("div",{className:"App-cv",children:"Download CV"})})]})]}),Object(c.jsx)("img",{src:o,className:"App-background",alt:"background"}),Object(c.jsx)("div",{className:"App-scrolldown",children:Object(c.jsx)(v.a,{icon:N.b,onClick:function(){return console.log(t.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}))}})})]}),Object(c.jsxs)("section",{ref:t,id:"projects",className:"App-projects",children:[Object(c.jsx)("h1",{children:"My Projects"}),Object(c.jsxs)("div",{className:"App-showcase-container",children:[Object(c.jsx)("div",{className:"App-showcase-image-container",children:Object(c.jsx)("img",{src:T(I),className:"App-showcase-image",alt:"Simulation of Car in Wind"})}),Object(c.jsxs)("div",{className:"App-showcase-text",children:[Object(c.jsx)("h3",{className:"App-showcase-title",children:D(I)}),Object(c.jsx)("div",{className:"App-showcase-subtitle",children:function(e){switch(e){case 0:return"A Compuational Fluid Dynamic Solver Based on Langrangian Approach to solve Navier Stokes (Fluid Momentum Equation) \n Uses Nvidia GPU (CUDA) for parallel processing. \n On Nvidia gtx 980 (2048 cuda cores) supports 1 million particles. \n Program was developed in c++ \n Supports Various Turbulence model and fourier law for heat transfer ";case 1:return"3D visualization software made for animation of the result of CFD and laptime. Can render 3D(stl) show section view, show particles countor plots, rotate, etc. This is a team project, I was resposible for particle rendering and stl rendering along with translation and rotation. The projects was written in C++ and used OpenGL library for 3D rendering and computing";case 2:return"Laptime Calculator is a Program for racers and race engineers to virtually test and compare aerodynamics performance of the racing vehicle and fine tune the parts such as (spoiler, wings, skirts, etc). This program is written is C++ for calculation and C# for GUI.";case 3:return"Kaaphal is an Information Website. The Site is Build using PHP and Vanilla js for web apps. It has 3rd party login system and a complete ecosystem for Mock test for National Civil Examtion of Nepal";case 4:return"Kaaphal Mobile Application Aims to Bring Kaaphal.com to mobile platforms. It also has all the features in website. The Application is made using React-Native.";case 5:return"SPH-DEM solver aims to couple SPH method (fluid) and DEM method (solid), and aims to simulated Fluid Solid Interaction, ultimately simulating Erosion, landslides, Glaciers, avanlanches and much more. This is a research project that is under development. It is being written in C++ with CUDA to implement parallel computing. ";default:return""}}(I)})]})]}),Object(c.jsxs)("div",{className:"App-projects-container",children:[Object(c.jsxs)("div",{className:"App-projects-components",onClick:function(){return S(0)},children:[Object(c.jsx)("div",{className:"App-projects-image-container",children:Object(c.jsx)("img",{src:T(0),className:"App-projects-image",alt:"Simulation of Car in Wind"})}),Object(c.jsx)("div",{className:"App-projects-text",children:D(0)})]}),Object(c.jsxs)("div",{className:"App-projects-components",onClick:function(){return S(1)},children:[Object(c.jsx)("div",{className:"App-projects-image-container",children:Object(c.jsx)("img",{src:T(1),className:"App-projects-image",alt:"3d Software for Simulation Visualization"})}),Object(c.jsx)("div",{className:"App-projects-text",children:D(1)})]}),Object(c.jsxs)("div",{className:"App-projects-components",onClick:function(){return S(2)},children:[Object(c.jsx)("div",{className:"App-projects-image-container",children:Object(c.jsx)("img",{src:T(2),className:"App-projects-image",alt:"Discrete Element Method"})}),Object(c.jsx)("div",{className:"App-projects-text",children:D(2)})]}),Object(c.jsxs)("div",{className:"App-projects-components",onClick:function(){return S(3)},children:[Object(c.jsx)("div",{className:"App-projects-image-container",children:Object(c.jsx)("img",{src:T(3),className:"App-projects-image",alt:"Laptime Calulator Desktop Application for Racing"})}),Object(c.jsx)("div",{className:"App-projects-text",children:D(3)})]}),Object(c.jsxs)("div",{className:"App-projects-components",onClick:function(){return S(4)},children:[Object(c.jsx)("div",{className:"App-projects-image-container",children:Object(c.jsx)("img",{src:T(4),className:"App-projects-image",alt:"Kaaphal Website"})}),Object(c.jsx)("div",{className:"App-projects-text",children:D(4)})]}),Object(c.jsxs)("div",{className:"App-projects-components",onClick:function(){return S(5)},children:[Object(c.jsx)("div",{className:"App-projects-image-container",children:Object(c.jsx)("img",{src:T(5),className:"App-projects-image",alt:"Kaaphal App"})}),Object(c.jsx)("div",{className:"App-projects-text",children:D(5)})]})]}),Object(c.jsx)("div",{className:"App-scrolldown",children:Object(c.jsx)(v.a,{icon:N.b,onClick:function(){return console.log(a.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}))}})})]}),Object(c.jsxs)("section",{ref:a,id:"expertise",className:"App-expertise",children:[Object(c.jsx)("h1",{children:"My Expertise"}),Object(c.jsxs)("div",{className:"App-expertise-container",children:[Object(c.jsx)("div",{className:"App-expertise-components",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",style:{height:"100px",width:"100px"},className:"App-expertise-image",alt:"background"})}),Object(c.jsx)("div",{className:"App-expertise-components",children:Object(c.jsx)("img",{src:p,style:{height:"100px",width:"200px"},className:"App-expertise-image",alt:"background"})}),Object(c.jsx)("div",{className:"App-expertise-components",children:Object(c.jsx)("img",{src:d,style:{height:"100px",width:"100px"},className:"App-expertise-image",alt:"background"})}),Object(c.jsx)("div",{className:"App-expertise-components",children:Object(c.jsx)("img",{src:j,style:{height:"100px",width:"150px"},className:"App-expertise-image",alt:"background"})}),Object(c.jsx)("div",{className:"App-expertise-components",children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA51BMVEX////loijxvybs7e4TExMFBwgAAADjmgDkoCjttSfuuSbs8fbywSbloCLs7/LwvBD66bvlnxbns1b44KqztLTq07DpyqDxvRn0zVnOzs7knQ/z9PT214LloB3wvSby1Kx7e3tMTEzuxYP237umpqboqSj9+Oz458rtwXnpsUv669PorUHxzp3wypL9+O3zyUrr5djruWT78uDnqTPr4Mv77cfnuGr10m/768D348Hc3Nzp0av33Zzq2bv88tPzxTj32Yz0zFRubm6dnZ1ra2smJiaPkJA3NzdTU1PsrwDr4tL21HnuuzVh2sv2AAALRElEQVR4nO2dfWPTOBKH1WapCbGTJqVNCQ2FlEJKm76/QUvpLsveHdz3/zxnx3Eie2aksS3JKefff2yXKA9y5SejkSNEnTp16tSpU6eOgbx+laQR/fEVmarfaOG8WkvyMvrjGpmq32jhvFp7FmdG+AeRmnB5UxPWhMufLOGzFNZvuJY25Elc++ftPH9V/UYLJ0MovkiIa2+rfW9mkiUM/8NvhggI04jvK31zRgIJxXsZ8aXqLz+JIITiu4z4dJV7FoxQvJURv1T35owEJRR//0aIOGEasVHVmzMSglC8WyA+e7o+E4UiFD8kxB+vq3lzRfPlpZR/KELxY6Goa+8qeaOF8z1VnXhGEQrZUJ8W4vs5lZyY8F/v5vn3O+lzxtrfVb/rPFERpn6U+iD1lPxNSfgHkZpwqVIT1oTLn/T9kFvV/171286R1w00UzPDfzT/cZ06derUqVOnTp06/88ZeMuXgVHCg2Bl2RIcGCU8W0LCM6OEo2HVQCDDkVHCo27VQCDdXaOEu7894d6gaiCQwZ5Rwk9LSPjJKOG5VzUQiHdulPB4CQmPjRKKJSQ0CyiM3Q+fl4n8QkPDhIeGpOZ580WJ7C9eKDg0TNgzpW3NVb94pNcJeoYJjWlb018tHF+6TA1Lm0FtM0XYPTJMaEzbyhC+kQnNSptBbStB6L+QCA1LmxAfWYTBQJv/dHjBCJsy4UfDhCxtC3qb2uyts3KLTLXflMYyLG1CfOAQDketti4t5oAnmjn0PhgmZGlbd6tN7/Dm3Ojd7kPEfZnQNCBL2wZ35gh3NISmpU2IC4bUDL6aI7yHa40vEQYXxgk52ja4NEe4gRBKQxmXNiHGjMvUOzVHuK4mHI6NE04YUuO1tIBswiuEUFaaiXFCjrbtGyR8gIRWpY2lbcGhQcIPkNCqtLG0LTgzSCgAoV1pE+KT/pYfKo1dQmksz2wtMQqj2sZRGj4hENO0tBmutEXRE3KUhk8IxbRpVdqE0P8ecpSGTwjFVJY2s9ujcfTaxlEaPiEQU8vSxtE2jtLwCYG2WZY2Ia612uYxAPmEQNssSxunnthl3CzKEMqfncxLG0PbggtI2G6BcMcD2mZZ2hjaFvQAYfvneDQaXffCXETxPG9aier7J9s3O48bG+u3Dw8f8HrEuYrQgrQJ8VlHOLyGhHfeMEwwS/R/JdXEfhiptIZQZgjTtcTPFgi128CItLW3wKWN10s7D3pCWdoMbwDH0WobIm0tuDwRhFdwQF9BaL7SFkVHiEhbC3YaEYTrcLyTLKFlaWMQQmlrwW4xgnADjpfVNru1xCg6bUOkrQX/DkF4D8fLaJt1adN37yHS1oLzjhP2f8HxMtrmyxvAZrv2kui0zQP3+0aDTbgNx8tITUrarq0Q6rQNVtrap1zC1W96QpsbwHE02oZIW/sS3kMJwj4cL6Nt1qUtJFTf8oMDSLjJJuzA8TLaZrnSFkUjpkilrX0Hp50i1GmbfWnTahtP2khCnbbZlzbtJilP2vIQ+iShHWnTSU2XJW0koU7bHEibjnCwyZE2klCrbfalTYh98HZThCxpIwm12mZf2nTdezxpI++HO3C8lLY5kDbdoQuetJGEOm1L1RLNHrVYRK1tPGkje6K+7YDcyFepA2nTde/B7VFM2uiurz5M6uc2u/aSKMUU2R7FpK1wX5sDLdVoG1ZLRKStKKHdrr0kSm1DpK2FXdZFCR1Im6Z7r3sECbGlyQSh8a69JMp6IiZt2HZVYULLG8BxVISYtGGKUHSlcSFt6u49rJbYHXRBuB200e4GRWi+ay+JStu8n4CwvYVkgx/ZS1O1RNNHLRZRbQNjG8BYB22O4WRrs74BHEfVvcfpaYuSYzi5AdOJtGm0zTxh6ip1IW1KbWP1tOUklD8BO5E2pbYh0laaUKpiuJE2ZffecGyeULpz2u7aS6Lo3htOzBPKC40TaVPWE1lde/kIjzvEHNqqJUahCRFpK0uYquq7kTYh6LWU1bWXj/CBIrQnbaptYFbXXj7ClNK4qCVGobWN1bVXglAayqK0qbSNK205CDcIQitde0kmJOHQPCEpbTa69pKQ2oZ17ZUlrEDaFNrGlrYchPLWkyNpU2gbW9pyEFYgbQptC6WNGf5gpLTZqiVGIattwWGPmW00J+ptfEeVtiiktgXcNJH9iX4facVIHXxysQGsIWSH6GuDQ5HSZuOoxSKcs7JFCJGWqNsqpM3EI05QQt3+qDNp4xy6KEaoaU10Jm0mHuKCEz7CoShps3LUYpHyjzhBCbFek5sqpE2lbXCHAv+VxQmRfqE/CUKr0kYfugiu4Q4FvsuBE6pb9V107SWhtoG7W+CZH+j+KEWo7ttzswEch6q2cfe4KUKdtEkvYLPSFoUgxJpLkdZLkhD5tyS11C4gSchrEM5BSEqbbUJC27Am7698Qh8OdFWNtNGHLpCeL6wjCifs/wkHStcS5avFMiHVvQf79tCuNoLwBg5ESpudoxaLUNrG7L0kCJHWy0dK2uxtAMehtA3rn2XfD5dI2mhtw9pp0FUJJUSkTa4lOqu0qQi5LVE44S0c6Jt0kTolpLUNEqJ7ACjh8kgb3b2HaRu6B4ASLpG0kfVE7CD3lsfra9NV2pxKG61tSAPt6eTCG2TnMUvY6XS2kaW0MmkjD10QD1Q43RwPvdRnYZmw3+mc3CO/gyLzqC+X0kZr2wDfuAgpf271vMGccv7EgU7Hf0TW0Fkqkza6nogdt5hBhpSXR4ezCzYijB6mcLOuXDIoabN21GKRHNqWnsrG19FKeME2p794+KUppYKuvSRU956+VSH6tbw7++8jUpOB+SW3z7rp2ktCiimn3YT/gNZKNoDj5BBTNMxhKpO2XNpWhlD+7ORU2nJpWxnCCrr2kpD1RKhtJQjprj2rG8Bx+NpWgrCSrr0kxP2Q21HDG6SSrr0k1DYwsyuKNwjZtWfvqMUipLa1Wm3Gcsob5L6aDeA45Cap19u6DCnLE94++qkTwG6lTfXI5KDrDcebDTWl5tUfNk4yB55cHbVYRL0NPBx4h5NLxQWreOXj9V/YlyI4ljbOs/e6A+/s7pSYSuplr+6/ZSdvFsfSxvymi/CCXRl9bSBTib3k+cY2/o0W4IZvtWsvCeORyTFkeMEiaw94vdsdn5i8hFB6UQfSxvymi8VUdsebqQs29VrIuqKeQ+u1xGly9rZl1p7FvxS+rsC4ljbOI5PhVC7Wnvg1rh6pdUVN6ELainbvJWuPZl1BrlK3tcQohbv3pmvPTp89eTNC+RVcSBvvmy5oymYeuiyh5a69JPShC05yn8d3dtRikXLde7kJnUtb2S8oy03oXNoYj0w2Seina4kupK3sN+fmIfR9v5na67J61GKRPNpWnNBf9V80w1th6rtHXVTaolgnDOnehJOX/mbVKaEbQMuE4aX5IqRbAXgrto9aLFLq0IWSMJ6853Dy4jiSNv0jk4sRhnO3Or00CbwVZ9JW8tAFToiuKyCOpK3koQtISK4rkNBFLTFKKW3LEMa3PN3kzeJI2kJCjzhLkZNQs65kEww8N9IW5nxX7h8pRBjO3RvNupKii6oEe06KNPN8xBqemIS8dWWeqNJz5MbXMjneu/ZyX7BNn7uuTDOt1jm7OLF8OjrINZXP99nrSlz12K1k8jL5PBryp5I7eSHd/sTuEadcOd89K7z2wISXpvN1hZOia08m1a0rnBzvjfOvPenJ644qXVc4ybv2zOmm64qLnRcTybX2RAnpLiZuijDGwl97lnVd4YSx9oSTd7C86wonqrUn6mwYLdEtr3jitSfI0D2ldYWTz6P9xVQ+xXWFk9naE64r4z1Hdc8K8nHSe9rrSp06depg+R/2NoU0DmTHPAAAAABJRU5ErkJggg==",style:{height:"100px",width:"100px"},className:"App-expertise-image",alt:"background"})}),Object(c.jsx)("div",{className:"App-expertise-components",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",style:{height:"100px",width:"100px"},className:"App-expertise-image",alt:"background"})}),Object(c.jsx)("div",{className:"App-expertise-components",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",style:{height:"100px",width:"100px"},className:"App-expertise-image",alt:"background"})})]}),Object(c.jsx)("div",{className:"App-scrolldown",children:Object(c.jsx)(v.a,{icon:N.b,onClick:function(){return console.log(s.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}))}})})]}),Object(c.jsxs)("section",{ref:s,id:"aboutme",className:"App-about",children:[Object(c.jsx)("h1",{children:"About Me"}),Object(c.jsx)("div",{className:"App-about-pic-container",children:Object(c.jsx)("img",{src:O,className:"App-about-pic",alt:"Me drinking water"})}),Object(c.jsxs)("div",{className:"App-about-intro",style:{backgroundImage:{mypic:O}},children:["Hello! everyone I am Raman Ghimire. I am from Nepal. ",Object(c.jsx)("br",{}),"I have Graduated from Pulchowk Engineering Campus, Institute of Engineering, Tribhuvan University.",Object(c.jsx)("br",{}),"And I am currently Working as a Software developer.",Object(c.jsx)("br",{}),"I play guitar and like to listen to  Rock Song ",Object(c.jsx)("br",{}),"Programming is a passion for me. ",Object(c.jsx)("br",{})]}),Object(c.jsx)("div",{className:"App-scrolldown",children:Object(c.jsx)(v.a,{icon:N.b,onClick:function(){return console.log(n.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}))}})})]}),Object(c.jsxs)("section",{ref:n,id:"contactme",className:"App-contact",children:[Object(c.jsx)("h1",{children:"Contact Me"}),Object(c.jsx)("div",{className:"App-about-intro",style:{backgroundImage:{mypic:O}},children:"You can reach me anytime through any of the Following Platform."}),Object(c.jsxs)("div",{className:"App-contact-icon-container",children:[Object(c.jsx)(v.a,{className:"App-contact-icon",icon:N.f,onClick:function(){window.open("mailto:rg.raman.ghimire@gmail.com")}}),Object(c.jsx)(v.a,{className:"App-contact-icon",icon:w.a,onClick:function(){window.open("https://www.facebook.com/raman.ghimire.14/","_blank")}}),Object(c.jsx)(v.a,{className:"App-contact-icon",icon:w.b,onClick:function(){window.open("https://www.linkedin.com/in/raman-ghimire-806967147/","_blank")}})]})]}),Object(c.jsxs)("footer",{className:"App-footer",children:[Object(c.jsx)("div",{children:"All Right Reservered."}),Object(c.jsx)("div",{children:"Raman Ghimire"}),Object(c.jsx)("div",{children:"Contact: rg.raman.ghimire@gmail.com"})]})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),i(e),s(e),n(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),y()}},[[23,1,2]]]);
//# sourceMappingURL=main.58a26473.chunk.js.map