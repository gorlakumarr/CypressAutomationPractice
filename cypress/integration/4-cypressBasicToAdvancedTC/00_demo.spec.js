// ///<reference types="Cypress"/>

// describe("My First Test Suite", function () {

//     it("My First Test Case", function () {

//         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
//         cy.get('.search-keyword').type('ca')
//         cy.wait(2000)
//         cy.get('.products').as('productLocator')
//         cy.get('@productLocator').find('.product').should('have.length', 4)

//         cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click().then(function () {
//             console.log("Clicked")
//         })

//         cy.get('@productLocator').find('.product').each(($el, index, $list) => {
//             const textVeg = $el.find('h4.product-name').text()
//             if (textVeg.includes('Cashews')) {
//                 cy.wrap($el).find('button').click()
//             }
//         })

//         cy.get('.brand').should('have.text', 'GREENKART')

//         const logo = cy.get('.brand').then(function (logoelement) {
//             cy.log(logoelement.text())
//         })

//         cy.get('.search-keyword').dblclick()
//         cy.get('button').dblclick('bottom')
//         cy.get('button').dblclick(30, 10)
//         cy.get('button').dblclick({ force: true })
//         cy.get('button').dblclick('topRight', { force: true })
//         cy.get('button').dblclick({ multiple: false })

//         cy.get('a').debug().should('have.attr', 'href')
//         cy.get('.ls-btn').click({ force: true }).debug()

//         cy.get('ul>li').each(() => {

//         }) // Iterate through each 'li'
//         cy.getCookies().each(() => {

//         }) // Iterate through each cookie

//         cy.get('ul>li').each(($el, index, $list) => {
//             // $el is a wrapped jQuery element
//             if ($el.someMethod() === 'something') {
//                 // wrap this element so we can
//                 // use cypress commands on it
//                 cy.wrap($el).click()
//             } else {
//                 // do something else
//             }
//         })


//         cy.contains('ul').end()

//         cy.contains('User: Cheryl')
//             .click()
//             .end() // yield null
//             .contains('User: Charles')
//             .click() // contains looks for content in document now

//         //  Alternatively, you can always start a new chain of commands off of cy.
//         cy.contains('User: Cheryl').click()
//         cy.contains('User: Charles').click()

//         //             < ul >
//         //   <li>tabby</li>
//         //   <li>siamese</li>
//         //   <li>persian</li>
//         //   <li>sphynx</li>
//         //   <li>burmese</li>
//         // </ul >
//         cy.get('li').eq(-2).should('contain', 'sphynx') // true


//         cy.exec('npm run build')

//         Cypress.config('execTimeout', 30000)
//         Cypress.config('execTimeout') // => 30000


//         cy.get('td').filter('.users') // Yield all el's with class '.users'

//         //         <ul>
//         //   <li>Home</li>
//         //   <li class="active">About</li>
//         //   <li>Services</li>
//         //   <li>Pricing</li>
//         //   <li>Contact</li>
//         // </ul>
//         // yields <li>About</li>
//         cy.get('ul').find('>li').filter('.active')

//         //         <ul>
//         //   <li>Home</li>
//         //   <li>Services</li>
//         //   <li>Advanced Services</li>
//         //   <li>Pricing</li>
//         //   <li>Contact</li>
//         // </ul>
//         // Let's find both list items that contain the work "Services"
//         cy.get('li').filter(':contains("Services")').should('have.length', 2)

//         //             < div data - testid="testattr" >
//         //                 <span>Hello&nbsp;world</span>
//         // </div >
//         cy.get('[data-testid=testattr]').filter(':contains("Hello\u00a0world")')



//         cy.get('.article').find('footer') // Yield 'footer' within '.article'
//         // Get li's within parent
//         // <ul id="parent">
//         //   <li class="first"></li>
//         //   <li class="second"></li>
//         // </ul>
//         // // yields [<li class="first"></li>, <li class="second"></li>]
//         cy.get('#parent').find('li')


//         cy.get('nav a').first() // Yield first link in nav
//         //         Get the first list item in a list
//         // <ul>
//         //   <li class="one">Knick knack on my thumb</li>
//         //   <li class="two">Knick knack on my shoe</li>
//         //   <li class="three">Knick knack on my knee</li>
//         //   <li class="four">Knick knack on my door</li>
//         // </ul>
//         // // yields <li class="one">Knick knack on my thumb</li>
//         cy.get('li').first()


//         cy.fixture(filePath)
//         cy.fixture(filePath, encoding)
//         cy.fixture(filePath, options)
//         cy.fixture(filePath, encoding, options)

//         cy.fixture('users').as('usersJson') // load data from users.json
//         cy.fixture('logo.png').then((logo) => {
//             // load data from logo.png
//         })




//         cy.get('input').first().focus() // Focus on the first input
//         cy.get('[type="input"]').focus()
//         // yields the <textarea> for further chaining
//         cy.get('textarea').focus().type('Nice Product!').blur()

//         cy.focused()
//         cy.focused(options)
//         cy.focused() // Yields the element currently in focus


//         cy.get(selector)
//         cy.get(alias)
//         cy.get(selector, options)
//         cy.get(alias, options)



//         cy.getCookies()
//         cy.getCookies(options)


//         cy.go(direction)
//         cy.go(direction, options)

//         cy.go('back')
//         cy.go('forward')

//         cy.go(-1)
//         cy.go(1)

//         cy.hash() // Get the url hash


//         cy.get('.menu-item').trigger('mouseover')
//         cy.get('.popover').should('be.visible')
//         cy.get('.hidden').invoke('show').click()



//         cy.invoke(functionName)
//         cy.invoke(options, functionName)
//         cy.invoke(functionName, args)
//         cy.invoke(options, functionName, args)

//         cy.wrap({ animate: fn }).invoke('animate') // Invoke the 'animate' function
//         cy.get('.modal').invoke('show') // Invoke the jQuery 'show' function



//         cy.its(propertyName)
//         cy.its(propertyName, options)

//         cy.wrap({ width: '50' }).its('width') // Get the 'width' property
//         cy.window().its('sessionStorage')
//         cy.wrap({ age: 52 }).its('age').should('equals', 52) // true
//         cy.wrap(['Wai Yan', 'Yu']).its(1).should('eq', 'Yu') // true
//         cy.get('ul li') // this yields us a jquery object
//             .its('length') // calls 'length' property returning that value
//             .should('be.greater', 2) // ensure the length is greater than 2
//         cy.title().its('length').should('eq', 24)
//         cy.window().its('evilProp').should('not.exist')

//         cy.last()
//         cy.last(options)
//         cy.get('nav a').last() // Yield last link in nav


//         cy.location()
//         cy.location(key)
//         cy.location(options)
//         cy.location(key, options)

//         cy.location() // Get location object
//         cy.location('host') // Get the host of the location object
//         cy.location('port') // Get the port of the location object

//         cy.visit('http://localhost:8000/app/index.html?q=dan#/users/123/edit')

//         cy.location().should((loc) => {
//             expect(loc.hash).to.eq('#/users/123/edit')
//             expect(loc.host).to.eq('localhost:8000')
//             expect(loc.hostname).to.eq('localhost')
//             expect(loc.href).to.eq(
//                 'http://localhost:8000/app/index.html?q=dan#/users/123/edit'
//             )
//             expect(loc.origin).to.eq('http://localhost:8000')
//             expect(loc.pathname).to.eq('/app/index.html')
//             expect(loc.port).to.eq('8000')
//             expect(loc.protocol).to.eq('http:')
//             expect(loc.search).to.eq('?q=dan')
//             expect(loc.toString()).to.eq(
//                 'http://localhost:8000/app/index.html?q=brian#/users/123/edit'
//             )
//         })

//         cy.get('#search').type('niklas{enter}')
//         cy.location().should((loc) => {
//             expect(loc.search).to.eq('?search=niklas')
//             expect(loc.pathname).to.eq('/users')
//         })


//         cy.log(message)
//         cy.log(message, args)
//         cy.log('created new user')
//         cy.log('events triggered', events)


//         cy.next()
//         cy.next(selector)
//         cy.next(options)
//         cy.next(selector, options)

//         cy.get('nav a:first').next() // Yield next link in nav
//         //             < ul >
//         //   <li>apples</li>
//         //   <li class="second">oranges</li>
//         //   <li>bananas</li>
//         // </ul >
//         // yields <li>bananas</li>
//         cy.get('.second').next()


//         //         <input list="fruit" />
//         // <datalist id="fruit">
//         //   <option>Apple</option>
//         //   <option>Banana</option>
//         //   <option>Cantaloupe</option>
//         // </datalist>
//         cy.get('#fruit option')
//             .first()
//             .should('have.text', 'Apple')
//             .next()
//             .should('have.text', 'Banana')
//             .next()
//             .should('have.text', 'Cantaloupe')


//         cy.nextAll()
//         cy.nextAll(selector)
//         cy.nextAll(options)
//         cy.nextAll(selector, options)

//         cy.get('.active').nextAll() // Yield all links next to `.active`
//         //         <ul>
//         //   <li>apples</li>
//         //   <li class="second">oranges</li>
//         //   <li>bananas</li>
//         //   <li>pineapples</li>
//         //   <li>grapes</li>
//         // </ul>
//         // yields [<li>bananas</li>, <li>pineapples</li>, <li>grapes</li>]
//         cy.get('.second').nextAll()


//         cy.nextUntil(selector)
//         cy.nextUntil(selector, filter)
//         cy.nextUntil(selector, filter, options)
//         cy.nextUntil(element)
//         cy.nextUntil(element, filter)
//         cy.nextUntil(element, filter, options)

//         cy.get('div').nextUntil('.warning') // Yield siblings after 'div' until '.warning'


//         //         <ul>
//         //   <li id="fruits" class="header">Fruits</li>
//         //   <li>apples</li>
//         //   <li>oranges</li>
//         //   <li>bananas</li>
//         //   <li id="veggies" class="header">Vegetables</li>
//         //   <li>cucumbers</li>
//         //   <li>carrots</li>
//         //   <li>corn</li>
//         //   <li id="nuts" class="header">Nuts</li>
//         //   <li>walnuts</li>
//         //   <li>cashews</li>
//         //   <li>almonds</li>
//         // </ul>
//         //returns [<li>cucumbers</li>, <li>carrots</li>, <li>corn</li>]
//         cy.get('#veggies').nextUntil('#nuts')

//         cy.not(selector)
//         cy.not(selector, options)

//         cy.get('input').not('.required')

//         //         Yield the elements that do not have class active
//         // <ul>
//         //   <li>Home</li>
//         //   <li class="active">About</li>
//         //   <li>Services</li>
//         //   <li>Pricing</li>
//         //   <li>Contact</li>
//         // </ul>
//         cy.get('ul>li').not('.active').should('have.length', 4) // true


//         cy.parent()
//         cy.parent(selector)
//         cy.parent(options)
//         cy.parent(selector, options)

//         cy.get('header').parent() // Yield parent el of `header`


//         cy.get('aside').parents() // Yield parents of aside

//         // Get the parents of the active li
//         // <ul class="main-nav">
//         //   <li>Overview</li>
//         //   <li>
//         //     Getting started
//         //     <ul class="sub-nav">
//         //       <li>Install</li>
//         //       <li class="active">Build</li>
//         //       <li>Test</li>
//         //     </ul>
//         //   </li>
//         // </ul>
//         // // yields [.sub-nav, li, .main-nav]
//         cy.get('li.active').parents()



//             .parentsUntil(selector)
//             .parentsUntil(selector, filter)
//             .parentsUntil(selector, filter, options)
//             .parentsUntil(element)
//             .parentsUntil(element, filter)
//             .parentsUntil(element, filter, options)

//         cy.get('p').parentsUntil('.article')



//         cy.pause().getCookie('app') // Pause at the beginning of commands
//         cy.get('nav').pause() // Pause after the 'get' commands yield


//             .prev()
//             .prev(selector)
//             .prev(options)
//             .prev(selector, options)
//         cy.get('tr.highlight').prev() // Yield previous 'tr'


//         cy.readFile(filePath)
//         cy.readFile(filePath, encoding)
//         cy.readFile(filePath, options)
//         cy.readFile(filePath, encoding, options)

//         cy.reload()
//         cy.reload(forceReload)
//         cy.reload(options)
//         cy.reload(forceReload, options)

//         // Reload the page without using the cache
//         cy.visit('http://localhost:3000/admin')
//         cy.reload(true)


//         cy.get('button#checkout').scrollIntoView().should('be.visible')
//         cy.get('.next-page').scrollIntoView({ easing: 'linear' })
//         cy.get('footer').scrollIntoView({ duration: 2000 })
//         cy.get('#nav').scrollIntoView({ offset: { top: 150, left: 0 } })

//         cy.scrollTo(0, 500) // Scroll the window 500px down
//         cy.get('.sidebar').scrollTo('bottom') // Scroll 'sidebar' to its bottom
//         cy.get('').scrollTo('bottomRight')


//         cy.get('select').select('user-1') // Select the 'user-1' option

//         //         <select>
//         //   <option value="456">apples</option>
//         //   <option value="457">oranges</option>
//         //   <option value="458">bananas</option>
//         // </select>
//         // yields <option value="456">apples</option>
//         cy.get('select').select('apples').should('have.value', '456')

//         cy.get('select')
//             .select(['apples', 'bananas'])
//             .invoke('val')
//             .should('deep.equal', ['456', '458'])

//         cy.get('select')
//             .select('banana', { force: true })
//             .invoke('val')
//             .should('eq', 'banana')


//         //             < div class="shadow-host" >
//         //   #shadow - root
//         //                 < button class="my-button" > Click me</button >
//         // </div >
//         //             // yields [#shadow-root (open)]
//         cy.get('.shadow-host').shadow().find('.my-button').click()


//         cy.get('.error').should('be.empty') // Assert that '.error' is empty
//         cy.contains('Login').should('be.visible') // Assert that el is visible
//         cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar') // Assert the 'foo' property equals 'bar'


//         // <ul>
//         //   <li>Home</li>
//         //   <li>Contact</li>
//         //   <li class="active">Services</li>
//         //   <li>Price</li>
//         // </ul>
//         // yields all other li's in list
//         cy.get('.active').siblings()

//         cy.getCookies().spread(() => {

//         }) // Yield all cookies

//         cy.get('form').submit() // Submit a form


//         cy.title() // Yields the documents title as a string

//             .trigger(eventName)
//             .trigger(eventName, position)
//             .trigger(eventName, options)
//             .trigger(eventName, x, y)
//             .trigger(eventName, position, options)
//             .trigger(eventName, x, y, options)

//         cy.get('a').trigger('mousedown') // Trigger mousedown event on link

//         cy.get('[type="checkbox"]').uncheck() // Unchecks checkbox element

//         cy.url() // Yields the current URL as a string

//         cy.viewport(width, height)
//         cy.viewport(preset, orientation)
//         cy.viewport(width, height, options)
//         cy.viewport(preset, orientation, options)

//         cy.window()


//         cy.wrap({ name: 'Jane Lane' })

//         cy.get('form').within(($form) => {
//             // ... more commands

//             cy.wrap($form).should('have.class', 'form-container')
//         })

//         cy.writeFile(filePath, contents)
//         cy.writeFile(filePath, contents, encoding)
//         cy.writeFile(filePath, contents, options)
//         cy.writeFile(filePath, contents, encoding, options)

//         cy.log("My First Test Case executed")
//     })
// })