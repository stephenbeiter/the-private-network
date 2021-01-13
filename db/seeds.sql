INSERT INTO user (username, email, password, profile_img)
VALUES
  ('User 1', 'user1@email.com', 'password1', 'http://profileimg.com/user1.jpg'),
  ('User 2', 'user2@email.com', 'password2', 'http://profileimg.com/user2.jpg'),
  ('User 3', 'user3@email.com', 'password3', 'http://profileimg.com/user3.jpg'),
  ('User 4', 'user4@email.com', 'password4', 'http://profileimg.com/user4.jpg'),
  ('User 5', 'user5@email.com', 'password5', 'http://profileimg.com/user5.jpg');

INSERT INTO group (groupname, group_admin, group_img, group_color)
VALUES
  ('Group 1', 1, 'http://groupimg.com/group1.jpg', 'blue'),
  ('Group 2', 2, 'http://groupimg.com/group2.jpg', 'green'),
  ('Group 3', 3, 'http://groupimg.com/group3.jpg', 'yellow'),
  ('Group 4', 4, 'http://groupimg.com/group4.jpg', 'orange'),
  ('Group 5', 5, 'http://groupimg.com/group5.jpg', 'red');

INSERT INTO post (title, post_url, post_img, user_id, group_id)
VALUES
  ('Post 1', 'http://posts.com/post1', 'http://postimg.com/post1.jpg', 1, 1),
  ('Post 2', 'http://posts.com/post2', 'http://postimg.com/post2.jpg', 2, 2),
  ('Post 3', 'http://posts.com/post3', 'http://postimg.com/post3.jpg', 3, 3),
  ('Post 4', 'http://posts.com/post4', 'http://postimg.com/post4.jpg', 4, 4),
  ('Post 5', 'http://posts.com/post5', 'http://postimg.com/post5.jpg', 5, 5);