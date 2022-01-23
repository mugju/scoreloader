# scoreloader
Scoreloader is Score SNS, you can share your own score and find score with Code or Keyword
<br>
<h1>ScoreLoader은 어떤 사이트 인가요??</h1>

<ul>
  <li>서로의 자작곡 혹은 무 저작권 악보를 instagram 형식으로 공유할 수 있는 사이트입니다.</li>
</ul>

<h1>어떤 기능이 있나요?</h1>

<ul>
  <li>본인의 악보를 사진형식으로 upload가능하며 업로더는 본인의 악보를 어필할수 있는 태그를 붙일수 있습니다.</li>
  <li>tesseract OCR기능을 통해서 악보내의 작곡가정보, 주요 가사등을 텍스트화 시켜 자동 태그화 시킵니다.</li>
  <li>다른 이용자들은 업로더가 미처 신경쓰지 못한 태그일지라도 자동태그기능을 통해 검색할 수 있습니다.</li>
  <li>다른 SNS 서비스로도 로그인이 가능합니다.</li>
  <li>본인의 업로드 내용들을 json형식으로 제공하는 rest를 따르는 scoreloader api를 제공합니다.</li>
</ul>

<h1>기능</h1>

<p>
  
  <img src="https://user-images.githubusercontent.com/25499386/150689073-5e66376a-39e9-4573-9a4f-704dd963cad2.png" width="800px">

  
  <img src="https://user-images.githubusercontent.com/25499386/150689093-5313ec7f-bfb5-4406-924b-23c3a4f82c9d.png" width="800px">


  
  <h3>upload</h3>
   <img src="https://user-images.githubusercontent.com/25499386/150689136-835c2b5a-e79a-48bb-8daa-68838774173c.png" width="800px">


 <h3>tag search</h3>


<img src="https://user-images.githubusercontent.com/25499386/150689218-8b35aeec-11d9-4820-a38c-4b698141acde.png" width="800px">
<h1>개발상의 이슈</h1>

<ul>
  <li>tesseract의 경우 이미지 인식률이 높은 편이나, 글씨 표준체가 아닌 다른 글씨체의 경우 인식률이 떨어지는 이슈발생.</li>
  <li>위의 이유로 node.js상에서 다른 OCR엔진을 찾고 학습시켜야할 필요성 존재</li>
</ul>
