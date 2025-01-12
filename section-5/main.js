let user = {
    name: 'Crystal',
    age: 50,
    email: 'crystal@gmail.com',
    location: 'Berlin',
    blogs: [
        {

            title: 'How to make money learning to code',
            likes: 30,
        },
        {

            title: 'Introduction to web3 development',
            likes: 20,
        }
    ],
    login() {
        console.log('the user logged in');
    },
    logOut() {
        console.log('the user logged in');
    },
    logBlogs: function () {
        console.log('this user have written the following blog posts');
        this.blogs.forEach(blog => {
            console.log('->', blog);
        });
        // console.log(this.blogs);
    }
};

user.login();
user.logOut();
user.logBlogs();
console.log(user);