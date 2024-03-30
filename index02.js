// Create a <nav> element
const navStyles = document.createElement('style');
navStyles.textContent = `
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
} 


nav{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 1000;
}

nav .left .logo img{
    width: 40px;
    margin: 5px 0;
    cursor: pointer;
}

nav .left{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
}

nav .left .search_bar{
    width: 250px;
    height: 40px;
    background: #efefef;
    border-radius: 30px;
    padding: 0 10px;
    margin-left: 10px;
    position: relative;
    left: 15px;
}

nav .left .search_bar i{
    line-height: 40px;
    font-size: 19px;
    color: #919191;
    margin-right: 5px;
}

nav .left .search_bar input{
    background: transparent;
    outline: none;
    border: 0;
    font-size: 16px;
    width: 200px;
}

nav .center{
    position: relative;
    right: 45px;
}

nav .center i{
    margin: 0 45px 0 45px;
    font-size: 22px;
}

nav .center i:hover{
    color: #45abff;
    cursor: pointer;
}

nav .right{
    display: flex;
    align-items: center;
    margin-right: 10px;
}

nav .right i{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #efefef;
    line-height: 35px;
    padding-left: 8px;
    font-size: 18px;
    margin-left: 8px;
    cursor: pointer;
}

nav .right img{
    width: 35px;
    height: 35px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin-left: 8px;
    line-height: 45px;
    cursor: pointer;
}



/*-----------------main---------------*/


.main .left:hover::-webkit-scrollbar-thumb{
    background: #cccccc;
} 
.main{
    display:flex;
}
 .main .left .img{
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
}

.main .left .img:hover{
    background: #e3e3e3;
} 

 .main .left .img img{
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin: 8px 15px 8px 0;
} 

 .main .left hr{
    width: 100%;
    height: 1px;
    border: 0;
    background: #cccccc;
    margin: 10px 0;
} 

 .main .left h2{
    font-size: 18px;
    color: #919191;
    margin: 5px 0;
} 

 .main .left .edit{
    color: #45abff;
    font-size: 15px;
    float: right;
    position: relative;
    bottom: 23px;
    cursor: pointer;
    opacity: 0;
}

.main .left:hover .edit{
    opacity: 1;
} 

 .main .left .shortcuts{

    align-items: center;
    transition: 0.2s;
} 

.main .left .shortcuts:hover{
    background: #e3e3e3;
    cursor: pointer;
}

.main .left .shortcuts img{
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    margin: 8px 15px 8px 0;
} 


.main .center{
    width: 50%;
    height: auto;
    padding: 20px 20px 0 20px;
    background: #f5f5f5;
    margin-left: 25%;
}

.main .center::-webkit-scrollbar{
    width: 0;
}

.main .center .top_box{
    width: 100%;
    height: 260px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    
}

.main .center .top_box .my_story_card{
    width: 135px;
    height: 250px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 1px 8px rgba(0,0,0,0.2);
    border-radius: 10px;
    cursor: pointer;
    
}

.main .center .top_box .my_story_card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.main .center .top_box .my_story_card .story_upload{
    width: 100%;
    height: 60px;
    background: #fff;
    position: relative;
    bottom: 50px;
    cursor: pointer;
    
}

.main .center .top_box .my_story_card .story_upload img{
    width: 30px;
    height: 30px;
    display: flex;
    margin: 0 auto;
    position: relative;
    bottom: 15px;
    border-radius: 50%;
}

.main .center .top_box .my_story_card .story_upload .story_tag{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 10px;
    font-weight: bold;
    font-size: 14px;
}

.main .center .top_box .story_card{
    width: 135px;
    height: 250px;
    overflow: hidden;
    margin: 7px;
    box-shadow: 0 1px 8px rgba(0,0,0,0.2);
    border-radius: 10px;
    cursor: pointer;
}

.main .center .top_box .story_card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.main .center .top_box .story_card .story_profile{
    position: relative;
    bottom: 240px;
    margin-left: 10px;
}

.main .center .top_box .story_card .story_profile img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #45abff;
}

.main .center .top_box .story_card .story_profile .cricle{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #27cc37;
    border: 2px solid #fff;
    position: relative;
    bottom: 15px;
    left: 25px;
}

.main .center .top_box .story_card .story_name{
    position: relative;
    bottom: 100px;
    padding: 0 10px;
}

.main .center .top_box .story_card .story_name .name{
    font-weight: bold;
    color: #fff;
    font-size: 14px;
}

.main .center .my_post{
    width: 100%;
    height: auto;
    background: #fff;
    padding: 10px 15px;
    border-radius: 7px;
    box-shadow: 0 1px 8px rgba(0,0,0,0.2);
    margin: 10px 0;
}

.main .center .my_post img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

.main .center .my_post .post_top{
    display: flex;
    align-items: center;
}

.main .center .my_post .post_top input{
    width: 90%;
    padding: 10px;
    margin-left: 20px;
    border: 0;
    outline: none;
    background: #efefef;
    border-radius: 30px;
    font-size: 17px;
}

.main .center .my_post .post_top input:hover{
    background: #e3e3e3;
    cursor: pointer;
}

.main .center .my_post hr{
    width: 100%;
    height: 1px;
    background: #cccccc;
    border: 0;
    margin: 10px 0;
}

.main .center .my_post .post_bottom{
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 5px auto;
}

.main .center .my_post .post_bottom .post_icon{
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 7px 40px;
    cursor: pointer;
}

.main .center .my_post .post_bottom .post_icon:hover{
    background: #efefef;
    border-radius: 8px;
}

.main .center .my_post .post_bottom .post_icon i.red{
    font-size: 23px;
    color: red;
    margin-right: 8px;
}

.main .center .my_post .post_bottom .post_icon i.green{
    font-size: 23px;
    color: #27cc37;
    margin-right: 8px;
}

.main .center .my_post .post_bottom .post_icon i.yellow{
    font-size: 23px;
    color: #f7b928;
    margin-right: 8px;
}

.main .center .room{
    width: 100%;
    height: auto;
    background: #fff;
    box-shadow: 0 1px 8px rgba(0,0,0,0.2);
    padding: 10px 15px;
    border-radius: 7px;
    display: flex;
    align-items: center;
}

.main .center .room .room_image{
    display: flex;
    align-items: center;
    border: 1px solid #45abff;
    padding: 10px;
    border-radius: 30px;
    width: 150px;
    margin-right: 5px;
}

.main .center .room .room_image:hover{
    background: #efefef;
    cursor: pointer;
}

.main .center .room .room_image img{
    width: 25px;
    margin-right: 8px;
}

.main .center .room .room_image .room_tag{
    color: #45abff;
}

.main .center .room .room_profile img{
    width: 45px;
    height: 45px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin: 0 8px;
    border: 3px solid #45abff;
}

.main .center .friends_post{
    margin: 10px 0;
    width: 100%;
    height: auto;
    background: #fff;
    padding: 10px 15px;
    border-radius: 7px;
    box-shadow: 0 1px 8px rgba(0,0,0,0.2);
}

.main .center .friends_post .friend_post_top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}

.main .center .friends_post .friend_post_top .img_and_name{
    display: flex;
    align-items: center;
}

.main .center .friends_post .friend_post_top .img_and_name img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-right: 8px;
    cursor: pointer;
}

.main .center .friends_post .friend_post_top .img_and_name .friends_name .friends_name{
    font-weight: bold;
    cursor: pointer;
}

.main .center .friends_post .friend_post_top .img_and_name .friends_name .friends_name:hover{
    text-decoration: underline;
}

.main .center .friends_post .friend_post_top .img_and_name .friends_name .time{
    font-size: 14px;
    color: #919191;
    margin: 3px 0;
}

.main .center .friends_post .friend_post_top .img_and_name .friends_name .time i{
    font-size: 10px;
    margin-left: 5px;
}

.main .center .friends_post .friend_post_top .menu{
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.main .center .friends_post .friend_post_top .menu:hover{
    background: #efefef;
    cursor: pointer;
}

.main .center .friends_post .friend_post_top .menu i{
    line-height: 35px;
    margin-left: 8px;
    font-size: 18px;
}

.main .center .friends_post img{
    width: 100%;
    height: 450px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
}

.main .center .friends_post .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
}

.main .center .friends_post .info .emoji_img{
    display: flex;
}

.main .center .friends_post .info .emoji_img img{
    width: 20px;
    height: 20px;
}

.main .center .friends_post .info .emoji_img p{
    margin-left: 10px;
    font-size: 16px;
    color: #919191;
}

.main .center .friends_post .info .comment{
    display: flex;
    align-items: center;
}

.main .center .friends_post .info .comment p{
    padding: 0 12px;
    font-size: 15px;
    color: #919191;
}

.main .center .friends_post hr{
    width: 100%;
    height: 1px;
    background: #cccccc;
    border: 0;
    margin: 10px 0;
}

.main .center .friends_post .like{
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main .center .friends_post .like .like_icon{
    display: flex;
    align-items: center;
}

.main .center .friends_post .like .like_icon i{
    font-size: 20px;
    margin-right: 8px;
    color: #919191;
}

.main .center .friends_post .like .like_icon i.activi{
    color: #45abff;
}

.main .center .friends_post .comment_warpper{
    display: flex;
    align-items: center;
}

.main .center .friends_post .comment_warpper img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-right: 15px;
}

.main .center .friends_post .comment_warpper .circle{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #27cc37;
    border: 2px solid #fff;
    position: relative;
    top: 15px;
    right: 25px;
}

.main .center .friends_post .comment_warpper .comment_search{
    width: 95%;
    padding: 5px 15px;
    background: #efefef;
    border-radius: 30px;
}

.main .center .friends_post .comment_warpper .comment_search input{
    width: 85%;
    height: 30px;
    background: none;
    border: none;
    outline: none;
}

.main .center .friends_post .comment_warpper .comment_search i{
    padding: 0 5px;
    color: #919191;
}

.main .center .loard{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 50px 0;
}

.main .center .loard button{
    background: none;
    padding: 5px 20px;
    border: 1px solid #919191;
    color: #919191;
    border-radius: 5px;
    cursor: pointer;
}

.main .center .end{
    font-size: 15px;
    text-align: center;
    color: #919191;
    margin: 10px 0;
}

.main .center .end span{
    margin-left: 8px;
    color: #45abff;
}

.main .center .end span i{
    margin-right: 8px;
}




/*-----------------right------------------*/

.main .right{
    width: 25%;
    height: 92vh;
    overflow: hidden;
    overflow-y: scroll;
    background: #f5f5f5;
    padding: 20px 10px 5px 6px;
    position: fixed;
    right: 0;
}

.main .right::-webkit-scrollbar{
    width: 7px;
}

.main .right::-webkit-scrollbar-thumb{
    border-radius: 20px;
    background: #f5f5f5;
}

.main .right:hover::-webkit-scrollbar-thumb{
    background: #cccccc;
}

.main .right .first_warpper .page{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main .right .first_warpper .page h2{
    font-size: 18px;
    color: #919191;
    margin: 5px 0;
}

.main .right .first_warpper .page .menu{
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.main .right .first_warpper .page .menu:hover{
    background: #efefef;
    cursor: pointer;
}

.main .right .first_warpper .page .menu i{
    line-height: 35px;
    margin-left: 8px;
    font-size: 18px;
}

.main .right .first_warpper .page_img{
    display: flex;
    align-items: center;
}

.main .right .first_warpper .page_img img{
    width: 35px;
    height: 35px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin: 8px 15px 8px 0;
    cursor: pointer;
}

.main .right .first_warpper .page_icon{
    display: flex;
    align-items: center;
}

.main .right .first_warpper .page_icon i{
    color: #919191;
    font-size: 20px;
    margin: 8px 15px 8px 0;
}

.main .right hr{
    width: 100%;
    height: 1px;
    border: 0;
    background: #cccccc;
    margin: 10px auto;
}

.main .right .second_warpper h2{
    font-size: 18px;
    color: #919191;
    margin: 5px 0;
}

.main .right .second_warpper .img_and_tag{
    display: flex;
    align-items: center;
}

.main .right .second_warpper .img_and_tag img{
    width: 40px;
    margin: 8px 15px 8px 0;
}

.main .right .second_warpper .img_and_tag p{
    line-height: 22px;
}

.main .right .second_warpper .img_and_tag p span{
    font-weight: bold;
}

.main .right .third_warpper .contact_tag{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main .right .third_warpper .contact_tag h2{
    font-size: 18px;
    color: #919191;
    margin: 5px 0;
}

.main .right .third_warpper .contact_tag .contact_icon i{
    margin: 0 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    line-height: 35px;
    padding-left: 10px;
}

.main .right .third_warpper .contact_tag .contact_icon i:hover{
    background: #efefef;
    cursor: pointer;
}

.main .right .third_warpper .contact{
    display: flex;
    align-items: center;
}

.main .right .third_warpper .contact img{
    width: 35px;
    height: 35px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin: 8px 15px 8px 0;
    border: 3px solid #45abff;
    cursor: pointer;
}




`;



    const nav = document.createElement('nav');
    


    
    // Create the left section
    const leftDiv = document.createElement('div');
    leftDiv.className = 'left';
  
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    const logoImg = document.createElement('img');
    logoImg.src = 'fb-logo.png';
    logoDiv.appendChild(logoImg);
    leftDiv.appendChild(logoDiv);
    
    const searchDiv = document.createElement('div');
    searchDiv.className = 'search_bar';
    searchDiv.innerHTML = `
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search EBook">
    `;
    leftDiv.appendChild(searchDiv);
    
    nav.appendChild(leftDiv);
    
    // Create the center section
    const centerDiv = document.createElement('div');
    centerDiv.className = 'center';
    const centerIcons = ['fa-house', 'fa-tv', 'fa-store', 'fa-users'];
    for (const icon of centerIcons) {
        const iconElement = document.createElement('i');
        iconElement.className = `fa-solid ${icon}`;
        centerDiv.appendChild(iconElement);
    }
    nav.appendChild(centerDiv);
    
    // Create the right section
    const rightDiv = document.createElement('div');
    rightDiv.className = 'right';
    const rightIcons = ['fa-list-ul', 'fa-facebook-messenger', 'fa-bell', 'fa-moon'];
    for (const icon of rightIcons) {
        const iconElement = document.createElement('i');
        iconElement.className = `fa-solid ${icon}`;
        rightDiv.appendChild(iconElement);
    }
    const profileImg = document.createElement('img');
    profileImg.src = 'b5.jpg';
    rightDiv.appendChild(profileImg);
    nav.appendChild(rightDiv);
    
    // Append the <nav> to the body
    document.body.appendChild(nav);
// document.head.appendChild(navStyles);







// An array of image sources
const imageSources = [
  "avatar3.jpg",
  "group.png",
  "wall-clock.png",
  "bookmark.png",
  "video.png",
  "snake_6457700.png",
  "wall-clock.png"
  
];


const paragraphTexts = [
    "Hend Raafat",
    "Frinds.",
    "Memorise",
    "Saved",
    "Video",
    "Markerplace",
    "Feeds"
    // Add more paragraph texts here
  ];
  
// Create the main container div with class "main"
const mainDiv = document.createElement("div");
mainDiv.classList.add("main");
// mainDiv.style.background= 'red';
mainDiv.style.marginTop='60px';
mainDiv.style.height='92vh';
mainDiv.style.display='flex';
// Create the left container div with class "left"
const leftDivv = document.createElement("div");
leftDivv.classList.add("left");
leftDivv.style.paddingTop='70px';
leftDivv.style.width='25%';

// leftDivv.style.background='lightgray';
leftDivv.style.height='92vh';
leftDivv.style.overflow='hidden';
leftDivv.style.overflowY='scroll';
leftDivv.style.padding='20px 6px 5px 10px';
leftDivv.style.position='fixed';
leftDiv.style.webkitScrollbarWidth = "7px";
leftDiv.style.webkitScrollbarThumbBorderRadius = "20px";
// Create divs with class "img" inside the left container div
for (let i = 0; i < 7; i++) {
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img");

  const img = document.createElement("img");
  img.src=imageSources[i]; // Cycle through image sources

  const p = document.createElement("p");
  p.textContent = paragraphTexts[i % paragraphTexts.length]; 

  imgDiv.appendChild(img);
  imgDiv.appendChild(p);

  leftDivv.appendChild(imgDiv);
}




const hr = document.createElement("hr");
const h2 = document.createElement("h2");
h2.textContent = "Your short cut";
const pMain = document.createElement("p");
pMain.textContent = "";
 mainDiv.appendChild(leftDivv);

 
const shortcutsDiv = document.createElement("div");
shortcutsDiv.classList.add("shortcuts");
shortcutsDiv.style.width = '100%';


const imageSources7 = ["1.png", "2.png", "3.png", "image1.jpg", "image3.jpg", "bbbb.jpg"];
const pSources7 = ["hala store", "gege", "ahmed sayed", "fayrouza", "lola store", "happiness"];
for (let i = 0; i < 6; i++) {
    const shortcutDiv = document.createElement("div");
    shortcutDiv.classList.add("shortcut");
    shortcutDiv.style.display='flex';
    shortcutDiv.style.margin='17px';
    const img = document.createElement("img");
    img.src = imageSources7[i]; 

    const p = document.createElement("p");
    p.textContent =  pSources7[i];

    shortcutDiv.appendChild(img);
    shortcutDiv.appendChild(p);

    shortcutsDiv.appendChild(shortcutDiv);
}

leftDivv.appendChild(hr);
leftDivv.appendChild(h2);
leftDivv.appendChild(pMain);
leftDivv.appendChild(shortcutsDiv);
mainDiv.appendChild(leftDivv);


//  center
const centerDivv = document.createElement("div");
centerDivv.classList.add("center");

const topBoxDiv = document.createElement('div');
topBoxDiv.className = 'top_box';


const myStoryCardDiv = document.createElement('div');
myStoryCardDiv.className = 'my_story_card';

const img1 = document.createElement('img');
img1.src = 'b5.jpg';

const storyUploadDiv = document.createElement('div');
storyUploadDiv.className = 'story_upload';

const uploadImg = document.createElement('img');
uploadImg.src = 'add.png';

const uploadP = document.createElement('p');
uploadP.className = 'story_tag';
uploadP.textContent = 'Create story';

storyUploadDiv.appendChild(uploadImg);
storyUploadDiv.appendChild(uploadP);

myStoryCardDiv.appendChild(img1);
myStoryCardDiv.appendChild(storyUploadDiv);

topBoxDiv.appendChild(myStoryCardDiv);

// Create the second story card
const storyCardDiv = document.createElement('div');
storyCardDiv.className = 'story_card';

const img2 = document.createElement('img');
img2.src = 'login.jpeg';



const storyProfileDiv = document.createElement('div');
storyProfileDiv.className = 'story_profile';

const profileImgg = document.createElement('img');
profileImgg.src = '1.png';

const circleDiv = document.createElement('div');
circleDiv.className = 'circle';

storyProfileDiv.appendChild(profileImgg);
storyProfileDiv.appendChild(circleDiv);

const storyNameDiv = document.createElement('div');
storyNameDiv.className = 'story_name';

const nameP = document.createElement('p');
nameP.className = 'name';
nameP.textContent = 'fayrouza';

storyNameDiv.appendChild(nameP);

storyCardDiv.appendChild(img2);
storyCardDiv.appendChild(storyProfileDiv);
storyCardDiv.appendChild(storyNameDiv);




// Create the second story card
const storyCardDiv2 = document.createElement('div');
storyCardDiv2.className = 'story_card';

const img22 = document.createElement('img');
img22.src = 'login.jpeg';



const storyProfileDiv2 = document.createElement('div');
storyProfileDiv2.className = 'story_profile';

const profileImgg2 = document.createElement('img');
profileImgg2.src = 'login.jpeg';

const circleDivv = document.createElement('div');
circleDivv.className = 'circle';

storyProfileDiv2.appendChild(profileImgg2);
storyProfileDiv2.appendChild(circleDivv);

const storyNameDivv = document.createElement('div');
storyNameDivv.className = 'story_name';

const namePp = document.createElement('p');
namePp.className = 'name';
namePp.textContent = 'hend Disanayaka';

storyNameDivv.appendChild(namePp);

storyCardDiv2.appendChild(img22);
storyCardDiv2.appendChild(storyProfileDiv2);
storyCardDiv2.appendChild(storyNameDivv);



const storyCardDiv3 = document.createElement('div');
storyCardDiv3.className = 'story_card';
storyCardDiv3.style.backgroundImage = 'url(image2.jpg)';
const img223 = document.createElement('img');
img22.src = 'bbbb.jpg';


const storyProfileDiv23 = document.createElement('div');
storyProfileDiv23.className = 'story_profile';

const profileImgg23 = document.createElement('img');
profileImgg23.src = 'bbbb.jpg';

const circleDivv3 = document.createElement('div');
circleDivv3.className = 'circle';

storyProfileDiv23.appendChild(profileImgg23);
storyProfileDiv23.appendChild(circleDivv3);

const storyNameDivv2 = document.createElement('div');
storyNameDivv2.className = 'story_name';

const namePp3 = document.createElement('p');
namePp3.className = 'name';
namePp3.textContent = '✨Cute Laptop Bags from #SHEIN Inbox us for orders and queries. ✈️ Delivery within 4-6 weeks. Taking pre order, no cancellation';

storyNameDivv2.appendChild(namePp3);

storyCardDiv3.appendChild(img223);
storyCardDiv3.appendChild(storyProfileDiv23);
storyCardDiv3.appendChild(storyNameDivv2);








// Append both story cards to the body element
centerDivv.appendChild(topBoxDiv);
mainDiv.appendChild(centerDivv);

topBoxDiv.appendChild(storyCardDiv);
topBoxDiv.appendChild(storyCardDiv2);
topBoxDiv.appendChild(storyCardDiv3);
topBoxDiv.appendChild(storyCardDiv3);

document.body.appendChild(mainDiv);
document.head.appendChild(navStyles);





// right
// Create the main container div
const containerDiv = document.createElement('div');
containerDiv.classList.add('right');


const firstWrapperDiv = document.createElement('div');
firstWrapperDiv.classList.add('first_warpper');

const pageDiv = document.createElement('div');
pageDiv.classList.add('page');

const h2Element = document.createElement('h2');
h2Element.textContent = 'Your Pages and profiles';
pageDiv.appendChild(h2Element);

const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');

const menuIcon = document.createElement('i');
menuIcon.classList.add('fa-solid', 'fa-ellipsis');
menuDiv.appendChild(menuIcon);

pageDiv.appendChild(menuDiv);

firstWrapperDiv.appendChild(pageDiv);

// Create the page_img div
const pageImgDiv = document.createElement('div');
pageImgDiv.classList.add('page_img');

// Create the image element for the page image
const pageImg = document.createElement('img');
pageImg.src = 'a4.png';
pageImgDiv.appendChild(pageImg);

// Create the p element for the page description
const pageDesc = document.createElement('p');
pageDesc.textContent = 'Web Designer';
pageImgDiv.appendChild(pageDesc);

firstWrapperDiv.appendChild(pageImgDiv);

const pageIconDiv1 = document.createElement('div');
pageIconDiv1.classList.add('page_icon');
const pageIcon1 = document.createElement('i');
pageIcon1.classList.add('fa-regular', 'fa-bell');
const pageIconText1 = document.createElement('p');
pageIconText1.textContent = '20 Notifications';
pageIconDiv1.appendChild(pageIcon1);
pageIconDiv1.appendChild(pageIconText1);

firstWrapperDiv.appendChild(pageIconDiv1);

const pageIconDiv2 = document.createElement('div');
pageIconDiv2.classList.add('page_icon');
const pageIcon2 = document.createElement('i');
pageIcon2.classList.add('fa-solid', 'fa-bullhorn');
const pageIconText2 = document.createElement('p');
pageIconText2.textContent = 'Create promotion';
pageIconDiv2.appendChild(pageIcon2);
pageIconDiv2.appendChild(pageIconText2);

firstWrapperDiv.appendChild(pageIconDiv2);

containerDiv.appendChild(firstWrapperDiv);

// Create the hr element
const hrElement1 = document.createElement('hr');
containerDiv.appendChild(hrElement1);

// Create the second wrapper div
const secondWrapperDiv = document.createElement('div');
secondWrapperDiv.classList.add('second_warpper');

// Create the h2 element for "Birthdays"
const h2Element2 = document.createElement('h2');
h2Element2.textContent = 'Birthdays';
secondWrapperDiv.appendChild(h2Element2);

// Create the img_and_tag div
const imgAndTagDiv = document.createElement('div');
imgAndTagDiv.classList.add('img_and_tag');


const giftImg = document.createElement('img');
giftImg.src = 'login.jpeg';
imgAndTagDiv.appendChild(giftImg);

const birthdayMsg = document.createElement('p');
birthdayMsg.innerHTML = '<span>Hanan </span>and<span> 2 others </span>have birthdays today';
imgAndTagDiv.appendChild(birthdayMsg);

secondWrapperDiv.appendChild(imgAndTagDiv);

containerDiv.appendChild(secondWrapperDiv);


const hrElement2 = document.createElement('hr');
containerDiv.appendChild(hrElement2);

const thirdWrapperDiv = document.createElement('div');
thirdWrapperDiv.classList.add('third_warpper');


const contactTagDiv = document.createElement('div');
contactTagDiv.classList.add('contact_tag');

const h2Element3 = document.createElement('h2');
h2Element3.textContent = 'Contacts';
contactTagDiv.appendChild(h2Element3);

// Create the contact_icon div
const contactIconDiv = document.createElement('div');
contactIconDiv.classList.add('contact_icon');


const contactIcon1 = document.createElement('i');
contactIcon1.classList.add('fa-solid', 'fa-video');
const contactIcon2 = document.createElement('i');
contactIcon2.classList.add('fa-solid', 'fa-magnifying-glass');
const contactIcon3 = document.createElement('i');
contactIcon3.classList.add('fa-solid', 'fa-ellipsis');
contactIconDiv.appendChild(contactIcon1);
contactIconDiv.appendChild(contactIcon2);
contactIconDiv.appendChild(contactIcon3);

contactTagDiv.appendChild(contactIconDiv);

thirdWrapperDiv.appendChild(contactTagDiv);

containerDiv.appendChild(thirdWrapperDiv);


mainDiv.appendChild(containerDiv);









// Create the main container div
var myPostDiv = document.createElement('div');
myPostDiv.classList.add('my_post');

// Create the post_top div
var postTopDiv = document.createElement('div');
postTopDiv.classList.add('post_top');

// Create the profile image element
var profileImg5= document.createElement('img');
profileImg5.src = 'login.jpeg';

// Create the input element
var inputText = document.createElement('input');
inputText.type = 'text';
inputText.placeholder = "What's on your mind, hend?";

// Append the profile image and input elements to the post_top div
postTopDiv.appendChild(profileImg5);
postTopDiv.appendChild(inputText);

// Append the post_top div to the main container div
myPostDiv.appendChild(postTopDiv);

// Create the hr element
var hrElement = document.createElement('hr');

// Append the hr element to the main container div
myPostDiv.appendChild(hrElement);

// Create the post_bottom div
var postBottomDiv = document.createElement('div');
postBottomDiv.classList.add('post_bottom');

// Create the first post_icon div
var postIconDiv1 = document.createElement('div');
postIconDiv1.classList.add('post_icon');

// Create the icon element for live video
var liveVideoIcon = document.createElement('i');
liveVideoIcon.classList.add('fa-solid', 'fa-video', 'red');

// Create the text element for live video
var liveVideoText = document.createElement('p');
liveVideoText.textContent = 'Live video';

// Append the live video icon and text elements to the first post_icon div
postIconDiv1.appendChild(liveVideoIcon);
postIconDiv1.appendChild(liveVideoText);

// Append the first post_icon div to the post_bottom div
postBottomDiv.appendChild(postIconDiv1);



// Create the second post_icon div
var postIconDiv2 = document.createElement('div');
postIconDiv2.classList.add('post_icon');

// Create the icon element for photo/video
var photoVideoIcon = document.createElement('i');
photoVideoIcon.classList.add('fa-solid', 'fa-images', 'green');

// Create the text element for photo/video
var photoVideoText = document.createElement('p');
photoVideoText.textContent = 'Photo/video';

// Append the photo/video icon and text elements to the second post_icon div
postIconDiv2.appendChild(photoVideoIcon);
postIconDiv2.appendChild(photoVideoText);

// Append the second post_icon div to the post_bottom div
postBottomDiv.appendChild(postIconDiv2);

// Create the third post_icon div
var postIconDiv3 = document.createElement('div');
postIconDiv3.classList.add('post_icon');

// Create the icon element for feeling/activity
var feelingActivityIcon = document.createElement('i');
feelingActivityIcon.classList.add('fa-regular', 'fa-face-grin', 'yellow');

// Create the text element for feeling/activity
var feelingActivityText = document.createElement('p');
feelingActivityText.textContent = 'Feeling/activity';

// Append the feeling/activity icon and text elements to the third post_icon div
postIconDiv3.appendChild(feelingActivityIcon);
postIconDiv3.appendChild(feelingActivityText);

// Append the third post_icon div to the post_bottom div
postBottomDiv.appendChild(postIconDiv3);

// Append the post_bottom div to the main container div
myPostDiv.appendChild(postBottomDiv);

// Append the main container div to the document body
centerDivv.appendChild(myPostDiv);







// Create the room div
var roomDiv = document.createElement('div');
roomDiv.classList.add('room');

// Create the room_image div
var roomImageDiv = document.createElement('div');
roomImageDiv.classList.add('room_image');

// Create the room image element
var roomImage = document.createElement('img');
roomImage.src = 'plus.png';

// Create the room tag element
var roomTag = document.createElement('p');
roomTag.classList.add('room_tag');
roomTag.textContent = 'Create room';

// Append the room image and room tag elements to the room_image div
roomImageDiv.appendChild(roomImage);
roomImageDiv.appendChild(roomTag);

// Append the room_image div to the room div
roomDiv.appendChild(roomImageDiv);

// Create the room_profile div
var roomProfileDiv = document.createElement('div');
roomProfileDiv.classList.add('room_profile');

// Create and append the profile images to the room_profile div
var profileImages = [
  'b5.jpg',
  'bbbb.jpg',
  'post2.jpg',
  '1.png',
  '2.png',
  'avatar.png',
  'image3.jpg',
  'image2.jpg'
];

profileImages.forEach(function(imageSrc) {
  var profileImage = document.createElement('img');
  profileImage.src = imageSrc;
  roomProfileDiv.appendChild(profileImage);
});

// Append the room_profile div to the room div
roomDiv.appendChild(roomProfileDiv);

// Append the room div to the document body
centerDivv.appendChild(roomDiv);


// Create the friends_post div
var friendsPostDiv = document.createElement('div');
friendsPostDiv.classList.add('friends_post');

// Create the friend_post_top div
var friendPostTopDiv = document.createElement('div');
friendPostTopDiv.classList.add('friend_post_top');

// Create the img_and_name div
var imgAndNameDiv = document.createElement('div');
imgAndNameDiv.classList.add('img_and_name');

// Create the friend's image element
var friendImage = document.createElement('img');
friendImage.src = 'post1.jpg';

// Create the friends_name div
var friendsNameDiv = document.createElement('div');
friendsNameDiv.classList.add('friends_name');

// Create the friend's name element
var friendsName = document.createElement('p');
friendsName.classList.add('friends_name');
friendsName.textContent = 'Ahmed';
//


// Create the like div
var likeDiv = document.createElement('div');
likeDiv.classList.add('like');
likeDiv.style.display='flex';

// Create the like_icon div for the "Like" button
var likeIconDiv1 = document.createElement('div');
likeIconDiv1.classList.add('like_icon');
likeIconDiv1.style.marginRight='70px';
// Create the "Like" icon element
var likeIcon1 = document.createElement('i');
likeIcon1.classList.add('fa-solid', 'fa-thumbs-up', 'activi');

// Create the "Like" text element
var likeText1 = document.createElement('p');
likeText1.textContent = 'Like';
likeText1.style.marginRight='70px';
// Append the "Like" icon and text elements to the like_icon div
likeIconDiv1.appendChild(likeIcon1);
likeIconDiv1.appendChild(likeText1);

// Create the like_icon div for the "Comments" button
var likeIconDiv2 = document.createElement('div');
likeIconDiv2.classList.add('like_icon');
likeIconDiv2.style.marginRight='300px';
// Create the "Comments" icon element
var likeIcon2 = document.createElement('i');
likeIcon2.classList.add('fa-solid', 'fa-message');

// Create the "Comments" text element
var likeText2 = document.createElement('p');
likeText2.textContent = 'Comments';

// Append the "Comments" icon and text elements to the like_icon div
likeIconDiv2.appendChild(likeIcon2);
likeIconDiv2.appendChild(likeText2);

// Create the like_icon div for the "Share" button
var likeIconDiv3 = document.createElement('div');
likeIconDiv3.classList.add('like_icon');

// Create the "Share" icon element
var likeIcon3 = document.createElement('i');
likeIcon3.classList.add('fa-solid', 'fa-share');

// Create the "Share" text element
var likeText3 = document.createElement('p');
likeText3.textContent = 'Share';

// Append the "Share" icon and text elements to the like_icon div
likeIconDiv3.appendChild(likeIcon3);
likeIconDiv3.appendChild(likeText3);

// Append the like_icon divs to the like div
likeDiv.appendChild(likeIconDiv1);
likeDiv.appendChild(likeIconDiv2);
likeDiv.appendChild(likeIconDiv3);


// Create the hr element
var hrElement = document.createElement('hr');

// Append the hr element to the document body
centerDivv.appendChild(hrElement);


// Create the comment_warpper div
var commentWrapperDiv = document.createElement('div');
commentWrapperDiv.classList.add('comment_warpper');

// Create the profile image element
var profileImage = document.createElement('img');
profileImage.src = 'avatar2.png';
profileImage.style.width='25px';
// Create the circle div
var circleDiv5 = document.createElement('div');
circleDiv5.classList.add('circle');

// Create the comment_search div
var commentSearchDiv = document.createElement('div');
commentSearchDiv.classList.add('comment_search');
commentSearchDiv.style.width='79%';
commentSearchDiv.style.padding='7px';
commentSearchDiv.style.marginLeft='0px';
// Create the input element for writing a comment
var commentInput = document.createElement('input');
commentInput.type = 'text';
commentInput.placeholder = 'Write a comment';

// Create the smiley face icon element
var smileyIcon = document.createElement('i');
smileyIcon.classList.add('fa-regular', 'fa-face-smile');

// Create the camera icon element
var cameraIcon = document.createElement('i');
cameraIcon.classList.add('fa-solid', 'fa-camera');

// Create the sticky note icon element
var stickyNoteIcon = document.createElement('i');
stickyNoteIcon.classList.add('fa-regular', 'fa-note-sticky');

//
// Create the time element
var time = document.createElement('p');
time.classList.add('time');
time.innerHTML = '16h.<i class="fa-solid fa-user-group"></i>';

// Append the friend's name and time elements to the friends_name div
friendsNameDiv.appendChild(friendsName);
friendsNameDiv.appendChild(time);

// Append the friend's image and friends_name div to the img_and_name div
imgAndNameDiv.appendChild(friendImage);
imgAndNameDiv.appendChild(friendsNameDiv);

// Create the menu div
var menuDiv2 = document.createElement('div');
menuDiv.classList.add('menu');

// Create the menu icon element
var menuIcon2 = document.createElement('i');
menuIcon.classList.add('fa-solid', 'fa-ellipsis');

// Append the menu icon element to the menu div
menuDiv.appendChild(menuIcon);

// Append the img_and_name div and menu div to the friend_post_top div
friendPostTopDiv.appendChild(imgAndNameDiv);
friendPostTopDiv.appendChild(menuDiv);

// Append the friend_post_top div to the friends_post div
friendsPostDiv.appendChild(friendPostTopDiv);

// Create the post image element
var postImage = document.createElement('img');
postImage.src = 'post1.jpg';

// Append the post image element to the friends_post div
friendsPostDiv.appendChild(postImage);

// Create the info div
var infoDiv = document.createElement('div');
infoDiv.classList.add('info');

// Create the emoji_img div
var emojiImgDiv = document.createElement('div');
emojiImgDiv.classList.add('emoji_img');

// Create and append the emoji images to the emoji_img div
var emojiImages = [
  'thumb-up.png',
  'laughing.png',
  'heart (1).png'
];

emojiImages.forEach(function(imageSrc) {
  var emojiImage = document.createElement('img');
  emojiImage.src = imageSrc;
  emojiImgDiv.appendChild(emojiImage);
});

// Create the likes paragraph element
var likesParagraph = document.createElement('p');
likesParagraph.innerHTML = 'You, Charith Disanayaka and 25K others';

// Append the emoji_img div and likes paragraph to the info div
infoDiv.appendChild(emojiImgDiv);
infoDiv.appendChild(likesParagraph);

// Create the comment div
var commentDiv = document.createElement('div');
commentDiv.classList.add('comment');

// Create the comments and shares paragraphs
var commentsParagraph = document.createElement('p');
commentsParagraph.textContent = '421 Comments';

var sharesParagraph = document.createElement('p');
sharesParagraph.textContent = '1.3K Shares';

// Append the comments and shares paragraphs to the comment div
commentDiv.appendChild(commentsParagraph);
commentDiv.appendChild(sharesParagraph);

// Create the friend_post_top div
var friendPostTopDiv = document.createElement('div');
friendPostTopDiv.classList.add('friend_post_top');

// Create the img_and_name div
var imgAndNameDiv = document.createElement('div');
imgAndNameDiv.classList.add('img_and_name');

// Create the friend's image element
var friendImage = document.createElement('img');
friendImage.src = 'post2.jpg';
friendImage.style.marginTop='100px';
// Create the friends_name div
var friendsNameDiv = document.createElement('div');
friendsNameDiv.classList.add('friends_name');

// Create the friend's name element
var friendsName = document.createElement('p');
friendsName.classList.add('friends_name');
friendsName.textContent = ' Hanan';

// Create the time element
var time = document.createElement('p');
time.classList.add('time');
time.innerHTML = '16h.<i class="fa-solid fa-user-group"></i>';

// Append the friend's name and time elements to the friends_name div
friendsNameDiv.appendChild(likeDiv);

friendsNameDiv.appendChild(commentWrapperDiv);
friendsNameDiv.appendChild(friendsName);
friendsNameDiv.appendChild(time);

// Append the friend's image and friends_name div to the img_and_name div
imgAndNameDiv.appendChild(friendImage);

imgAndNameDiv.appendChild(friendsNameDiv);


// Create the menu div
var menuDiv2 = document.createElement('div');
menuDiv.classList.add('menu');

// Create the menu icon element
var menuIcon2 = document.createElement('i');
menuIcon.classList.add('fa-solid', 'fa-ellipsis');

// Append the menu icon element to the menu div
menuDiv.appendChild(menuIcon);

// Append the img_and_name div and menu div to the friend_post_top div
friendPostTopDiv.appendChild(imgAndNameDiv);
friendPostTopDiv.appendChild(menuDiv);

// Append the friend_post_top div to the friends_post div
friendsPostDiv.appendChild(friendPostTopDiv);

// Create the post image element
var postImage = document.createElement('img');
postImage.src = 'post2.jpg';

// Append the post image element to the friends_post div
friendsPostDiv.appendChild(postImage);

// Create the info div
var infoDiv = document.createElement('div');
infoDiv.classList.add('info');

// Create the emoji_img div
var emojiImgDiv = document.createElement('div');
emojiImgDiv.classList.add('emoji_img');

// Create and append the emoji images to the emoji_img div
var emojiImages = [
  'image/like.png',
  'image/haha.png',
  'image/heart.png'
];

emojiImages.forEach(function(imageSrc) {
  var emojiImage = document.createElement('img');
  emojiImage.src = imageSrc;
  emojiImgDiv.appendChild(emojiImage);
});

// Create the likes paragraph element
var likesParagraph = document.createElement('p');
likesParagraph.innerHTML = 'You, Charith Disanayaka and 25K others';

// Append the emoji_img div and likes paragraph to the info div
infoDiv.appendChild(emojiImgDiv);
infoDiv.appendChild(likesParagraph);

// Create the comment div
var commentDiv = document.createElement('div');
commentDiv.classList.add('comment');

// Create the comments and shares paragraphs
var commentsParagraph = document.createElement('p');
commentsParagraph.textContent = '421 Comments';

var sharesParagraph = document.createElement('p');
sharesParagraph.textContent = '1.3K Shares';

// Append the comments and shares paragraphs to the comment div
commentDiv.appendChild(commentsParagraph);
commentDiv.appendChild(sharesParagraph);

// Append the info div and comment div to the friends_post div
friendsPostDiv.appendChild(infoDiv);
friendsPostDiv.appendChild(commentDiv);

// Create the hr element
var hrElement = document.createElement('hr');

// Append the hr element to the friends_post div
friendsPostDiv.appendChild(hrElement);

// Append the friends_post div to the document body
centerDivv.appendChild(friendsPostDiv);





commentSearchDiv.appendChild(commentInput);
commentSearchDiv.appendChild(smileyIcon);
commentSearchDiv.appendChild(cameraIcon);
commentSearchDiv.appendChild(stickyNoteIcon);


commentWrapperDiv.appendChild(profileImage);
commentWrapperDiv.appendChild(circleDiv);
commentWrapperDiv.appendChild(commentSearchDiv);

