// future: like a lazy promise api request/readfile
// it already has an IO
const makeHtml = function(post) { return "<div>"+post.title+"</div>"};
const page_f = map(makeHTML, http.get('/posts/2')); // map over eventual result

// futures may fail so they hay IO and maybe
// Impure at the end:
page_f.fork(function(error) {throw(error)},
            function(page){ $("#container").html(page)});

//  Other:
const makeHtml = function(title) { return "<div>"+title+"</div>"};
const createPage = map(makeHTML, get('title')); 
const page_f = compose(map(createPage), http.get('/posts/2'));

// Impure part
page_f.fork(function(error) {throw(error)},
            function(page){ $("#container").html(page)});