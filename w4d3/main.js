const createWeatherWidget = (temp) => {
  const $div = $("<div>")
  const $h2 = $("<h2>")
  const $h3 = $("<h3>")

  $h2.text(`It is currently ${temp}°C in Ajax, ON`)
  $h3.text(`No wind speed and direction for annoying cyclists`)


  $div.append($h2)
  $div.append($h3)
  return $div
}

const addWeatherWidget = (temp) => {
  const widget = createWeatherWidget(temp)
  $("body header").append(widget)
}

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  return `rgb(${r},${g},${b})`
}
// Easy to hack, no input sanitization
// Hard to add event handlers
const createPost = postObj => {
  const html = `        
  <article id="${postObj.id}">
    <h1>#${postObj.id} - ${postObj.title}</h1>
    <p>${postObj.body}</p>
    <p class="author">By user id #${postObj.userId}</p>
  </article>
  `

  return html
}

// Longer but safer + event handlers are easy to add
const createPostButBetter = postObj => {
  const { id, title, body, userId } = postObj

  const $article = $("<article>")
  const $h1 = $("<h1>")
  const $body = $("<p>")
  const $author = $("<p>")

  $h1.text(`#${id} - ${title}`)
  $body.text(body)
  $author.text(`By user id #${userId}`)

  $author.addClass("author")

  $article.append($h1)
  $article.append($body)
  $article.append($author)

  $article.on("click", event => {
    setTimeout(() => {
      $(event.currentTarget).css("background-color", generateRandomColor())
    }, 1000)
  })

  return $article
}

// Add a post to the page
const addPostToPage = (postObj) => {
  const post = createPostButBetter(postObj)
  // const post = createPost(postObj)
  $("main").append(post)
}

// Add a list of posts to the page
const addABunchOfPostsToPage = (postArr) => {
  for (const postObj of postArr) {
    const post = createPostButBetter(postObj)
    $("main").append(post)

    // $(`article#${postObj.id}`).on("click", event => {
    //   setTimeout(() => {
    //     $(event.currentTarget).css("background-color", generateRandomColor())
    //   }, 1000)
    // })
  }


}


$(document).ready(() => {
  const API = "09fd719b4b698ec0260e424f83378e3d"

  $.ajax({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=AJAX,CA&appid=${API}`
  })
    .then(res => {
      const temp = Math.round(res.main.temp - 273.15)

      addWeatherWidget(temp)
    })






  $("article").on("click", event => {
    $(event.currentTarget).css("background-color", generateRandomColor())
  })

  // addABunchOfPostsToPage(somePosts)
  // addPostToPage(somePosts[0])

  $("button#load").on("click", () => {
    // addABunchOfPostsToPage(somePosts)

    $.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res)
      addABunchOfPostsToPage(res)
    })
    // $.ajax({
    //   method: "GET",
    //   url: "https://jsonplaceholder.typicode.com/posts"
    // }).then(res => {
    //   console.log(res)
    //   addABunchOfPostsToPage(res)
    // })
  })


  $("form").on("submit", event => {
    event.preventDefault()

    const title = $("form input[name='title']").val()
    const body = $("form input[name='body']").val()
    const userId = $("form input[name='userId']").val()
    const objForVals = { title, body, userId }

    const serializedString = $(event.currentTarget).serialize()

    // const newFormData = new FormData(event.currentTarget)
    // newFormData.append("date-created", "2023-07-19")

    // $.ajax({
    //   method: "POST",
    //   url: "https://jsonplaceholder.typicode.com/posts",
    //   data: serializedString
    // }).then(res => {
    //   console.log(res)
    //   addPostToPage(res)
    // })

    const url = "https://jsonplaceholder.typicode.com/posts"
    const data = serializedString

    $.post(url, data).then(res => {
      console.log(res)
      addPostToPage(res)
    })
  })



  // Callbacks
  // Hates with passion: x
  // Fine, they're annoying a little: xx
  // Indifference towards them: 

})
