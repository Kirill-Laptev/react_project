const { default: profileReducer, addPost, deletePost } = require("./profileReducer");

let state = {
  postsData: [
    { id: 1, message: "Hello, how are you ?", likeCounts: "15" },
    { id: 2, message: "It's my first post", likeCounts: "20" },
    { id: 3, message: "Where i'am ?", likeCounts: "3" },
    { id: 4, message: "Some post", likeCounts: "10" },
  ],
};

test('message of new post should be correct', () => {

	// test data
  let action = addPost('Hello')

  // action 
  let newState = profileReducer(state, action)

  // expection
  expect(newState.postsData.length).toBe(5);
  expect(newState.postsData[4].message).toBe('Hello');
});


test('new post should be added', () => {

	// test data
  let action = addPost('Hello')


  // action 
  let newState = profileReducer(state, action)

  // expection
  expect(newState.postsData[4].message).toBe('Hello')
});


test('after deleting length of messages hould be decrement', () => {

	// test data
  let action = deletePost(1)


  // action 
  let newState = profileReducer(state, action)

  // expection
  expect(newState.postsData.length).toBe(3)
});