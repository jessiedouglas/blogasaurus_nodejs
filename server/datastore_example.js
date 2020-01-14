const {Datastore} = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = new Datastore();

// Datastore types
const BLOG_POST = 'blog_post';

exports.insertBlogPost = async (blogPost) => {
  const savedPost = await datastore.save({
    key: datastore.key(BLOG_POST),
    data: blogPost,
  });
  return savedPost;
};

exports.getAllBlogPosts = async () => {
  const query = datastore.createQuery(BLOG_POST);
  const allPosts = await datastore.runQuery(query);
  return allPosts;
};
