// Bonus Challenge – React Preparation
const posts = [
  { id:1, title:"React Basics", likes:120, comments:30 },
  { id:2, title:"JavaScript Arrays", likes:80, comments:15 },
  { id:3, title:"CSS Flexbox", likes:150, comments:45 }
];
// •	Tasks:
// 81.	Print all post titles.
posts.forEach(post=>console.log(post.title));
// 82.	Find the most liked post.
const mostLikedPost = posts.reduce((max,curr)=> curr.likes>max.likes? curr:max, posts[0]);
console.log(mostLikedPost);
// 83.	Find the least liked post.
const leastLikedPost = posts.reduce((min,curr)=> curr.likes<min.likes? curr:min, posts[0]);
console.log(leastLikedPost);
// 84.	Calculate total likes.
const totalLikes = posts.reduce((acc,curr)=> acc+curr.likes,0);
console.log(totalLikes);
// 85.	Calculate average comments.
const totalComments = posts.reduce((acc,curr)=> acc+curr.comments,0);
const averageComments = totalComments/posts.length;
console.log(averageComments);
// 86.	Add a popularity property.
const postsWithPopularity = posts.map(post=>({
    ...post,
    popularity: post.likes>100? "High":"Low"
}));
console.log(postsWithPopularity);
// 87.	Find the post with id = 2.
const postWithId2 = posts.find(post=> post.id===2);
console.log(postWithId2);
// 88.	Add a new post using the spread operator.
const newPost = {id:4, title:"Node.js Basics", likes:90, comments:20};
const updatedPosts = [...posts,newPost];
console.log(updatedPosts);
// 89.	Destructure title and likes.
const {title:firstPostTitle, likes:firstPostLikes} = posts[0];
console.log(firstPostTitle, firstPostLikes);
// 90.	Sort posts by likes in descending order (Bonus: use sort()).
const sortedPosts = posts.sort((a,b)=> b.likes - a.likes);
console.log(sortedPosts);
