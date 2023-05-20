
var search_btn = document.getElementById("search-bar");
search_btn.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        fitchAPI();
    }
});

function fitchAPI() {
  var username= document.querySelector("#search-bar").value;
  //var username = "obadaajouly"
  const URL = `https://api.github.com/users/${username}`;
  fetch(URL, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json()) //Converting the response to a JSON object
    .then((data) => {
      document.title = data.login
      document.getElementById("repositories-badge").innerHTML = `${data.public_repos}`;
      const root = document.querySelector("#user-details-ctn");
      root.innerHTML = `
      <div class="user-details-ctn">
      <div class="user-details">
        <div class="user-avatar-ctn">
          <img src="${data.avatar_url}" alt="big-rounded-user-avatar" id="avatar-big" />
          <span class="user-avatar-badge">
            <span role="img" aria-label="focusing-icon">
              <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill="white" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1 1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1 1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.014.019a2.066 2.066 0 0 1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.331 3.331 0 0 1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0 1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z"></path></svg>
            </span>
          </span>
        </div>
        <div class="user-details__name">
          <h1 id="user-full-name">${data.login}</h1>
          <button class="edit-profile-btn">Edit profile</button>
        </div>
        <div class="user-details__bio" id="bio"></div>
      </div>
    </div>
    <div class="sub-nav__small-screen" id="sub-nav__small-screen">
      <ul>
        <li class="active">
          <svg
            class="octicon octicon-book UnderlineNav-octicon hide-sm"
            height="16"
            viewbox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
          <path fill="white" d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
          </svg>
          Overview
        </li>
        <li>
          <svg
            class="octicon octicon-repo UnderlineNav-octicon hide-sm"
            height="16"
            viewbox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
          <path fill="white" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          Repositories
          <span class="badge">31</span>
        </li>
        <li>
          <svg
            class="octicon octicon-project UnderlineNav-octicon hide-sm"
            height="16"
            viewbox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
          <path fill="white" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
          </svg>
          Projects
          <span class="badge">1</span>
        </li>
        <li>
          <svg
            class="octicon octicon-package UnderlineNav-octicon hide-sm"
            height="16"
            viewbox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
          <path fill="white" d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
          </svg>
          Compare
        </li>
      </ul>
    </div>
                       `;
    const repo_url = `https://api.github.com/users/${username}/repos`
    fetch (repo_url, {}).then((repo_response) => repo_response.json()) //Converting the response to a JSON object
    .then((repositories) => {
      var repos_ctn = document.getElementById("repos-cards-ctn");
      var repos_ctn_header = document.getElementById("repos-ctn-header");
      // var repos_ctn_header =document.createElement("div");
      // var popular_repos = document.createElement("div");
      // var populartext = document.createElement("p");
      // var t = document.createTextNode("Popular repositories");
      // populartext.appendChild(t);
      // popular_repos.appendChild(populartext);
      // repos_ctn_header.appendChild(popular_repos);

      repos_ctn_header.innerHTML = `
                              <div><p>Popular repositories</p></div>
                              <div><p>customize your pins</p></div>
                          `;

      let repos = []
      for (let i = 0;i<6;i++){
        repos[i] = repositories[i];
      }
      repos_ctn.innerHTML="";
      repos.forEach((repo) => {
        var language = repo.language
        var color = ""
        if (repo.language == null){
          language = ""
          color = "display: none;"
        }
        else if (repo.language == "HTML"){
          language = "HTML"
          color = "background-color: #E34C26;"
        }
        else if (repo.language == "CSS"){
          language = "CSS"
          color = "background-color: #563D7C;"
        }
        else if (repo.language == "JavaScript"){
          language = "JavaScript"
          color = "background-color: #F1E05A;"
        }

        console.log(repo.language)
        repos_ctn.innerHTML += `
                              <div class="repo">
                                <div class="repo-info">
                                  <a class="repo-info-name" href="">${repo.name}</a>
                                  <span class="repo-info-fork">
                                    forked from AyhamZaid/HTML-Tasks
                                  </span>
                                  <span></span>
                                  <div class="repo-info-language">
                                    <div class="repo-info-language-color" style = "${color}"></div>
                                    <span class="repo-info-language-name">${language}</span>
                                  </div>
                                </div>
                                <div class="repo-status">
                                  public
                                </div>
                              </div>
                           `;
      })
    })

    })
    .catch((error) => console.error(error));
}

{/* <div class="repos-ctn-header">
                              <div><p>Popular repositories</p></div>
                              <div><p>customize your pins</p></div>
                            </div> */}

