<template>
 <div id="app">
   <router-view />
 </div>
</template>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

body {
  line-height:1;
  width: 100%;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
  display:block;
}

nav ul {
  list-style:none;
}

blockquote, q {
  quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content:'';
  content:none;
}

a {
  margin:0;
  padding:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

/* change colours to suit your needs */
ins {
  background-color:#ff9;
  color:#000;
  text-decoration:none;
}

/* change colours to suit your needs */
mark {
  background-color:#ff9;
  color:#000;
  font-style:italic;
  font-weight:bold;
}

del {
  text-decoration: line-through;
}

abbr[title], dfn[title] {
  border-bottom:1px dotted;
  cursor:help;
}

table {
  border-collapse:collapse;
  border-spacing:0;
}

/* change border colour to suit your needs */
hr {
  display:block;
  height:1px;
  border:0;
  border-top:1px solid #cccccc;
  margin:1em 0;
  padding:0;
}

input, select {
  vertical-align:middle;
}
.store-title {
    margin-left: 2%;
    margin-bottom: 3%;
    margin-top: 3%;
}
.new {
    font-size: 25px;
    text-decoration: none;
    color: black;
}
.move-list {
    margin-left: 2%;
    color: black;
    text-decoration: none;
}
.move-list:hover {
    transform: scale(1.2);
    font-weight: bold;
}
.title {
  text-align: center;
  font-size: 30px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: normal;
  margin: 3% 0;
  text-decoration: none;
  color: #000;
}

.border {
  border-bottom: 1px solid #000000;
  margin: 1% auto;
  width: 40%;
}
.brand-name {
  font-family: 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', '游明朝','Yu Mincho', '游明朝体', 'YuMincho','ＭＳ Ｐ明朝', 'MS PMincho', serif;
}
</style>



