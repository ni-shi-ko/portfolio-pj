<template>
     <footer>
        <div class="container">
            <div id="footer-contebts">
                <ul>
                    <a href="#">
                        <li>カスタマーサポート</li>
                    </a>
                    <a href="#">
                        <li>お問い合わせ</li>
                    </a>
                    <a href="#">
                        <li>利用規約</li>
                    </a>
                    <a href="#">
                        <li>個人情報保護方針</li>
                    </a>
                    <a href="#">
                        <li>企業サイト</li>
                    </a>
                </ul>
            </div>
        </div>
    </footer> 
</template>

<style>
footer {
    background-color: black;
    padding: 1.5% 0;
}
footer a {
  text-decoration: none;
}
footer ul {
  display: flex;
  justify-content: space-around;
}
footer li {
  list-style: none;
  color: #fff;
}
</style>