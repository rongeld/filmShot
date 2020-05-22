import React from 'react';
import Post from 'components/post/Post';

const pst = new Array(5).fill('test');

console.log(pst);

const Posts = () => pst.map((post, indx) => <Post key={indx} />);

export default Posts;
