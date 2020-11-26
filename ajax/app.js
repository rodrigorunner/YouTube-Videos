const http = new HttpLibrary;

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Objeto de dados
const data = {
    title: 'Customer Post',
    body: 'This is a customer post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/6', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/58', function(err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});












