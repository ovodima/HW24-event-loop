const postUrl = "https://jsonplaceholder.typicode.com/posts/";
const commentUrl = "https://jsonplaceholder.typicode.com/posts/";


const postInfo = document.querySelector(".post-info");
const commentInfo = document.querySelector(".comment-container");


async function getDataDB(url) {
  try {
    let respons = await fetch(url);

    if (respons.ok) {
      return respons.json();
    }
  } catch (error) {
    console.log(new Error(error));
  }
}

async function getCommentDB(url, id) {
  try {
    let respons = await fetch(`${url + id}/comments`);

    if (respons.ok) {
      return respons.json();
    }
  } catch (error) {
    console.log(new Error(error));
  }
}

class Post {
  constructor() {}

  async getPosts() {
    let postsArr = await getDataDB(postUrl);

    for (const iterator of postsArr) {
      let list = "";
      if (!iterator) {
        return;
      } else {
        list += `<li data-id=${iterator.userId}><h2 data-id=${iterator.id}>${iterator.title}</h2> ${iterator.body}</li>`;
      }
      postInfo.innerHTML = list;
    }
  }

  async getComment(id) {
    let commentArr = await getCommentDB(commentUrl, id);

    commentArr.map((element) => {
      if (!element) {
        return;
      } else {
        commentInfo.innerHTML += `<li data-id=${element.id}>
                            <h3>${element.body}</h3>
                            <p>${element.name}</p>
                            <p>${element.email}</p>
                        </li>`;
      }
    });
  }

  render(id) {
    this.getPosts();
    this.getComment(id);
  }
}

const post = new Post();
post.render(1);
///////////////////////

console.log(1);
 
setTimeout(function () {
    console.log(2);
}, 100);
 
setTimeout(function () {
    console.log(3);
}, 0);
 
new Promise(function (resolve) {

  setTimeout(() => resolve(), 0)
}).then(() => {
    console.log(4);
});
 
console.log(5);
