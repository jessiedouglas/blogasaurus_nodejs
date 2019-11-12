const {Datastore} = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = new Datastore();

// Datastore types
const BLOG_POST = 'blog_post';

const exports.insertBlogPost = (blogPost) => {
  const savedPostPromise = datastore.save({
    key: datastore.key(BLOG_POST),
    data: blogPost,
  });
  return savedPostPromise;
};

const exports.getAllBlogPosts = () => {
  const query = datastore.createQuery(BLOG_POST);
  const allPostsPromise = datastore.runQuery(query);
  return allPostsPromise;
};
