import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useEffect } from 'react';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const [ref, inView] = useInView();

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (
      inView &&
      hasMorePosts &&
      !loadPostsLoading &&
      window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300
    ) {
      dispatch({
        type: LOAD_POSTS_REQUEST,
      });
    }
  }, [inView, hasMorePosts, loadPostsLoading, mainPosts]);

  // useEffect(() => {
  //   function onScroll() {
  //     if (
  //       window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300 &&
  //       hasMorePosts &&
  //       !loadPostsLoading
  //     ) {
  //       dispatch({
  //         type: LOAD_POSTS_REQUEST,
  //       });
  //     }
  //   }

  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, [hasMorePosts, loadPostsLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div ref={hasMorePosts && !loadPostsLoading ? ref : undefined} style={{ height: 10 }} />
    </AppLayout>
  );
};

export default Home;
