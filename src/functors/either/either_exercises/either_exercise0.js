import R from "ramda";
import Either from "folktale/result";
import { map } from "../either";

const sampleJson = {
    post: { title: "Blog title", text: "fp rules"},
    comments : [
      { id: 1, text: "you're right"}, 
      { id: 2, text: "now you're hardcore"} 
    ] 
};

const hasComments = function(post) {
  return post.comments && post.comments.length > 0 ? Either.Ok(post.comments) : Either.Error("No comments");
};

const count = function (comments) {
    return comments.length;
}

// Create a function called countComments that get a json and counts its comments
const countComments = R.compose(
  map(count),
  hasComments
);

export { hasComments, count, countComments, sampleJson };