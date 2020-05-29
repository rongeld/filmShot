import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, selectPostsFetching } from 'redux/post/post-selector';
import { fetchPostsStart } from 'redux/post/post-actions';
import Post from 'components/post/Post';
import Loading from 'components/loading-component/Loading';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const isFetching = useSelector(selectPostsFetching);

  const fetchAllPosts = useCallback(() => dispatch(fetchPostsStart()), [
    dispatch
  ]);
  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);

  return isFetching ? (
    <Loading />
  ) : (
    posts && posts.map(post => <Post key={post._id} {...post} />)
  );
};

export default Posts;
