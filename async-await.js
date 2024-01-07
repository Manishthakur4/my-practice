// Phase 1

// console.log('person1 : Show Ticket');
// console.log("person2 : Show Ticket");

// const promiseWifeBringingTicks = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve('Ticket');
//     },3000)
// });

// const getPopcorn =  promiseWifeBringingTicks.then((t) =>{
//     console.log('wife : i have the tics');
//     console.log(`husband : we should go in`);
//     console.log('wife : no i am hungry');
//     return new Promise((resolve , reject) => {
//         resolve(`${t} popcorn`)
//     });
// });

// const getButter =  getPopcorn.then((t) =>{
//     console.log('husband : i got some popcorn');
//     console.log(`husband : we should go in`);
//     console.log('wife : I need some butter on my popcorn');
//     return new Promise((resolve , reject) => {
//         resolve(`${t} popcorn`)
//     });
// });

// getButter.then((t) => console.log(t));

// console.log('person4 : Show Ticket');
// console.log("person5 : Show Ticket");


// Phase 1
// console.log('person1 : Show Ticket');
// console.log("person2 : Show Ticket");

// const preMovie = async () => {
//     const promiseWifeBringingTicks = new Promise((resolve , reject) =>{
//         setTimeout(() => resolve('ticket') , 3000);
//     });

//     const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));

//     const addButter = new Promise((resolve, reject)=> resolve(`butter`));

//     let ticket = await promiseWifeBringingTicks;
//     console.log(`wife : i have the ${ticket}`);
//     console.log(`husband : we should go in`);
//     console.log('wife : no i am hungry');

//     let popcorn = await getPopcorn;

//     console.log(`husband : i got some ${popcorn}`);
//     console.log('husband : we should go in');
//     console.log('wife : I need some butter on my popcorn');

//     let butter = await addButter;

//     console.log(`husband : i got some ${butter} on popcorn`);
//     console.log('husband : anything else darling?');
//     console.log('wife : lets go we are getting late');
//     console.log('husband : thank you for the remainder *grins*');

//     return ticket;
// }

// preMovie().then((t) => console.log(`person4 : Show ${t}`));

// console.log('person4 : Show Ticket');
// console.log("person5 : Show Ticket");


// Phase 3
console.log('person1: Show Ticket');
console.log('person2: Show Ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const addButter = new Promise((resolve, reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve, reject) => resolve('Cold Drink'));


    let ticket = await promiseWifeBringingTicks;
    console.log(`wife: I have the ${ticket}`);
    console.log('husband: We should go in');
    console.log('wife: No, I am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: We should go in');
    console.log('wife: I need some butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: I got some ${butter} on popcorn`);
    console.log('husband: Anything else darling?');
    console.log('wife: Let\'s go, we are getting late');
    console.log('husband: Thank you for the reminder *grins*');

    let coldDrink = await getColdDrinks;

    console.log(`husband: I got some ${coldDrink}`);
    console.log('husband: Anything else?');
    console.log('wife: No its okay for now ');
    console.log('husband: Can w ego now?');

    return ticket;
}


preMovie().then((t) => console.log(`person4 : Show ${t}`));

console.log('person4: Show Ticket');
console.log('person5: Show Ticket');

const posts = [];
let lastActivityTime = null;

// Function to simulate creating a post
async function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

// Function to simulate updating the last user activity time
async function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date().toLocaleString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Function to simulate deleting the last post
async function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}



// Using async/await for the sequence
async function main() {
    try {
        await createPost({ title: 'Post 1' });
        await createPost({ title: 'Post 2' });
        await createPost({ title: 'Post 3' });

        const updatedTime = await updateLastUserActivityTime();
        console.log(`Last Activity Time: ${updatedTime}`);
        console.log('All Posts:', posts);

        const deletedPost = await deletePost();
        console.log(`Deleted Post: ${deletedPost.title}`);
        console.log('Remaining Posts:', posts);

    } catch (error) {
        console.error(error);
    }
}

// Call the main function
main();

