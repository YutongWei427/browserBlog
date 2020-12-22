import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.js'
import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'
import aPages from '../pages/index.js'
import aItems from '../items/index.js'

class Page {
  constructor() {
    this.sName = 'Yutong Wei'
    this.sUrlToEmailer = 'https://limitless-woodland-68108.herokuapp.com/'
    const sBase = document.location.pathname
    if (sBase[sBase.length - 1] == '/') {
      this.sBase = sBase.substr(0, sBase.length - 1)
    } else {
      const sFile = '/' + document.location.pathname.split('/').pop()
      this.sBase = sBase.substr(0, sBase.length - sFile.length)
    }
  }
  getImageSrc(sImage) {
    if (sImage.match(/\:\/\//)) {
      return sImage
    } else {
      return this.sBase + sImage
    }
  }
  render() {
    console.log('render called on page')
  }
}

class Items extends Page {
  constructor(oItems) {
    super()
    this.oItems = oItems
    this.nCurrentItem = 0
    $('article#items').click((evt) => {
      evt.preventDefault()
      const nItem = evt.target.id[4]
      if (nItem) {
        this.nCurrentItem = evt.target.id[4]
        $('article#current').html('')
        $('section#itemsInner').html('')
        this.render()
      }
    })
  }
  render() {
    // $.get(
    //   `${this.sBase}/items/${this.oItems[this.nCurrentItem].fname}`,
    //   (sMarkdown) => {
    //     $('article#current').append(`
    //             <div class="markdownItem">${marked(sMarkdown)}</div>
    //         `)
    //   }
    // )
    // for (let n = 0; n < this.oItems.length; n++) {
    //   if (n != this.nCurrentItem) {
    //     $('section#itemsInner').append
    //   }
    // }
  }
}

class Section extends Page {
  constructor(oOptions) {
    super()
    this.oOptions = oOptions
  }
  render() {
    $.get(`${this.sBase}/pages/${this.oOptions.fname}`, (sMarkdown) => {
      $(`#${this.oOptions.title}`).prepend(`
                <div class="markDownPage">${marked(sMarkdown)}</div>
            `)
      //   if (this.oOptions.specialImage) {
      //     $(`#${this.oOptions.title}`).prepend(`
      //             <div class="pageImage"><img src="${this.getImageSrc(
      //               this.oOptions.specialImage
      //             )}" alt="${this.oOptions.title}"/></div>
      //             `)
      //   }
    })
  }
}

class Article extends Page {
  render() {
    for (let n = 0; n < aPages.length; n++) {
      $('article#pages').append(`<section id="${aPages[n].title}"></section>`)
      new Section(aPages[n]).render()
    }
  }
}

class Footer extends Page {
  render() {
    const yToday = new Date().getFullYear()
    $('footer').html(`&copy; ${yToday} ${this.sName}`)
  }
}

class Contact extends Page {
  render() {
    $('#Contact').append(`
        <form action="${this.sUrlToEmailer}" method="POST">
        <div class="form-group">
        <div class ="abc">
        <label><span class="leftWidth">Name: </span><input name="name" placeholder="name" class="form-control" required /></label>
            </div>
            <div class="form-group">
            <div class="abc">
                <!-- Add required to make the user enter something. Add type="email" to make it have an @ symbol-->
                <label><span class="leftWidth">Email:</span><input name="email" placeholder="email" type="email" class="form-control"
                        required /></label>
            </div>
            <div class="form-group">
            <div class="abc">
                <label><span class="leftWidth">Message:</span><textarea name="message" placeholder="type your message here" class="form-control"
                        required></textarea></label>
                        </div>
            <div class ="abcd">
            <button type="submit" style="background-color:lightyellow">Send Message</button>
            </div>
            </form>    
        `)
  }
}

class Nav extends Page {
  render() {
    let sMenu = ''
    for (let n = 0; n < aPages.length; n++) {
      const sMenuItem = aPages[n].title
      if (sMenuItem != 'index') {
        sMenu += `<li id="${sMenuItem}Click"><a href="#${sMenuItem}">${sMenuItem}</a></li>`
      }
    }

    $('nav').html(`
        <div class="navbar navbar-inverse navbar-static-top" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a id="navbar-brand" class="navbar-brand" href="#">Portfolio of ${this.sName}</a>
            </div>
            <div class="navbar-collapse collapse">
          </button>
                <span class="inlines"><input type="email" class="form-control inputVal" id="exampleInputEmail2" placeholder="jane.doe@example.com">
           <a href="#" class="btn btn-primary active Search" role="button">Search</a></span>
                <ul class="nav navbar-nav navbar-right">
                    ${sMenu}
                </ul>
            </div>
        </div>
        `)
  }
}
class ViewProject extends Page {
  render() {
    $('#ViewProject').html(`
        <div class="container">
            <a href="#" class="btn btn-primary back" role="button">back</a>
            <div class="viewProjectText">这里是text</div>
        </div>
        `)
  }
}

let listArray = [
  {
    title: 'Self-introduction',
    start: 'Personal introduction, family members, etc.',
    img: './img/IMG_6854(20200930-023227).jpg',
    text:
      'My name is YutongWei, I am 21 years old and I am a sophomore in UX major. I switched from BTM major to UX major because I think the economy is not very suitable for me. The picture shows my sister and I. We grew up together and have a good relationship. She also studied in Canada like me, but she was in Victoria University, BC. Victoria is a beautiful place, I often visit her. We come from the northeast region of China, which is a place with a cold climate. Like Toronto, it will snow heavily. My family members as well as my parents, my grandma and grandfather, we will often travel together.',
  },
  {
    title: 'Travel debris',
    start: 'Specific memories about my trip.',
    img: './img/748F61FFF5A17E8A710050C9FC597BC3.png',
    text:
      'This picture was taken in Vancouver last year. At that time, my family and I went to visit my sister, and then we went to this park, The Butchart Gardens. I remember that the tickets were not very cheap, but I can’t remember the specific numbers. Up. We played here for a long time and then went home after dark. This is a very precious memory for me. It is difficult for family members to get together after adulthood. Every group opportunity or trip makes me remember deeply. This year, because of the epidemic, the school was forced to implement an online lesson mechanism, so I can go back to school in China. Now I stay with my family every day. I feel very happy and cherish my life.',
  },
  {
    title: 'Leisure time',
    start: 'My leisure time allocation and story.',
    img: './img/119B1D4A36B3636060792418296F6193.png',
    text:
      'In my free time, I will choose to play games, and games occupy a part of my life. So I spent my living expenses on a computer with a high configuration, and bought a good keyboard and mouse, in order for me to have a better experience. The games I often play are shooting games, such as PUBG on the steam platform, and I also play many other shooting games. I have a lot of friends who play games together. Games can bring me fun but I don’t want to play alone. These friends have met through different games. Some of them and I have become good friends. Now we are not only communicating about games. I usually talk about the unhappiness in life, and exchange learning. I will manage my time well, and I will not keep playing games to affect my normal life. And I also hope that friends in life can also join my game, I think it will be more interesting.',
  },
]
let inputValue = ''
class Portfolio extends Page {
  constructor() {
    super()
    this.header = new Page()
    this.nav = new Nav()
    this.items = new Items(aItems)
    this.article = new Article()
    this.footer = new Footer()
    this.contact = new Contact()
    this.ViewProject = new ViewProject()
  }
  render() {
    this.header.render()
    this.nav.render()
    this.items.render()
    this.article.render()
    this.footer.render()
    this.contact.render()
    this.ViewProject.render()
  }
}

$(document).ready(() => {
  new Portfolio().render()
  $('.right-button').click((evt) => {
    evt.preventDefault()
    $('section#itemsInner').animate(
      {
        scrollLeft: '+=200px',
      },
      'fast'
    )
  })

  filterFunction(listArray)

  $('.left-button').click((evt) => {
    evt.preventDefault()
    $('section#itemsInner').animate(
      {
        scrollLeft: '-=200px',
      },
      'fast'
    )
  })

  $('.inputVal').keyup(function (e) {
    // console.log(e.target.value)
    inputValue = e.target.value
  })

  $('.Search').click(function () {
    console.log(inputValue)
    let arrays = listArray.filter((v, i) => v.title.includes(inputValue))
    filterFunction(arrays)
  })

  $('#ContactClick').click(() => {
    $('#About').css('display', 'none')
    $('#ViewProject').css('display', 'none')
    $('#items').css('display', 'none')
    $('#current').css('display', 'none')
    $('#Contact').css('display', 'block')
  })
  $('#AboutClick').click(() => {
    $('#About').css('display', 'block')
    $('#items').css('display', 'none')
    $('#ViewProject').css('display', 'none')
    $('#current').css('display', 'none')
    $('#Contact').css('display', 'none')
  })

  $('#navbar-brand').click(() => {
    $('#About').css('display', 'none')
    $('#ViewProject').css('display', 'none')
    $('#items').css('display', 'block')
    $('#current').css('display', 'block')
    $('#Contact').css('display', 'none')
  })
  $('#Contact').css('display', 'none')
  $('#ViewProject').css('display', 'none')
  $('#About').css('display', 'none')
  console.log(345)
  $('.jumpBtn').click(function () {
    $('.jumpBtn').map((i, v) => {
      if (this == v) {
        console.log(v, i)
        $('#About').css('display', 'none')
        $('#ViewProject').css('display', 'block')
        $('#items').css('display', 'none')
        $('#current').css('display', 'none')
        $('#Contact').css('display', 'none')
        $('.viewProjectText').html(listArray[i].text)
      }
    })
  })
  $('.back').click(function () {
    $('#About').css('display', 'none')
    $('#ViewProject').css('display', 'none')
    $('#items').css('display', 'block')
    $('#current').css('display', 'block')
    $('#Contact').css('display', 'none')
  })
})

function filterFunction(listArray) {
  let str = ''

  listArray.forEach((v, i) => {
    str += ` <div class="itemList">
                    <dl>
                    <dt><img src="${v.img}" alt="" /></dt>
                        <dd>
                            <h2>${v.title}</h2>
                            <p class="listP">${v.start}</p>
                            <button
                            type="button"
                            class="btn btn-primary jumpBtn test"
                            onclick=""
                            >
                            View Project
                            </button>
                        </dd>
                    </dl>
                </div>`
  })

  $('.inners').html(str)
}
