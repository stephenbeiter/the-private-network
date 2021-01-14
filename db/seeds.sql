INSERT INTO user (username, email, password, profile_img, created_at, updated_at)
VALUES
  ('User 1', 'user1@email.com', 'password1', 'http://profileimg.com/user1.jpg', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('User 2', 'user2@email.com', 'password2', 'http://profileimg.com/user2.jpg', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('User 3', 'user3@email.com', 'password3', 'http://profileimg.com/user3.jpg', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('User 4', 'user4@email.com', 'password4', 'http://profileimg.com/user4.jpg', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('User 5', 'user5@email.com', 'password5', 'http://profileimg.com/user5.jpg', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

INSERT INTO `group` (groupname, group_admin, group_img, group_color, created_at, updated_at)
VALUES
  ('Group 1', 1, 'http://groupimg.com/group1.jpg', 'blue', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('Group 2', 2, 'http://groupimg.com/group2.jpg', 'green', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('Group 3', 3, 'http://groupimg.com/group3.jpg', 'yellow', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('Group 4', 4, 'http://groupimg.com/group4.jpg', 'orange', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('Group 5', 5, 'http://groupimg.com/group5.jpg', 'red', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
  
INSERT INTO `post` (title, post_url, post_img, user_id, group_id, created_at, updated_at)
VALUES
  ('Post 1', 'http://posts.com/post1', 'http://postimg.com/post1.jpg', 1, 1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('Post 2', 'http://posts.com/post2', 'http://postimg.com/post2.jpg', 2, 2, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('Post 3', 'http://posts.com/post3', 'http://postimg.com/post3.jpg', 3, 3, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('Post 4', 'http://posts.com/post4', 'http://postimg.com/post4.jpg', 4, 4, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('Post 5', 'http://posts.com/post5', 'http://postimg.com/post5.jpg', 5, 5, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

  INSERT INTO `user_groups` (user_id, group_id, created_at, updated_at)
  VALUES
    (1,5, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (2,5, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (3,4, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (4,4, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (5,3, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (1,3, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (2,2, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (3,2, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (4,1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
    (5,1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());