import{f as a,h as c,j as d,n as s,l as i,ar as l,aj as m,_ as u}from"./nav-52e3246d.js";const f=["innerHTML"],p=["textContent"],v=a({__name:"NoteViewer",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1}},emits:["click"],setup(e){const n=e;return c(d),(o,t)=>e.noteHtml?(s(),i("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=r=>o.$emit("click")),innerHTML:e.noteHtml},null,10,f)):(s(),i("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=r=>o.$emit("click")),textContent:m(e.note)},null,10,p))}}),C=u(v,[["__file","/Users/enrico/Camunda/projects/032-slidev/slidev/node_modules/@slidev/client/internals/NoteViewer.vue"]]);export{C as N};
