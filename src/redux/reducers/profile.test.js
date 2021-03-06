import profileReducer, {
    actionCreatorAddPost,
    actionCreatorDeletePost
} from './profile';

let state = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 0 },
        { id: 2, message: 'It`s my first post', likesCount: 20 },
    ],
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = actionCreatorAddPost('It-inkubator');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. check expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = actionCreatorAddPost('It-inkubator');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('It-inkubator');
});

it('length of posts should be decremented after deleting', () => {
    let action = actionCreatorDeletePost(2);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});

it('length of posts shouldn`t be decremented after deleting if id is incorrect', () => {
    let action = actionCreatorDeletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});