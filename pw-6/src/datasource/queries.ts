export const task1Query = ''
    + 'SELECT u.id AS user_id, u.name, u.avatar_url AS avatar, cn.photo_url AS channel_photo, '
    + '    cn.description AS channel_description, cn.created_at AS channel_creation_date '
    + 'FROM users AS u '
    + 'INNER JOIN channels AS cn '
    + '    ON cn.user_id = u.id '
    + 'ORDER BY cn.created_at';

export const task2Query = ''
    + 'SELECT v.title, COUNT(*) AS likes_count '
    + 'FROM videos AS v '
    + 'INNER JOIN likes AS l '
    + '   ON l.video_id = v.id '
    + 'WHERE l.positive = true '
    + 'GROUP BY v.title '
    + 'ORDER BY COUNT(*) DESC '
    + 'LIMIT 5';

export const task3Query = ''
    + 'SELECT v.id AS video_id, v.title AS video_title, v.preview_url AS video_preview, v.duration AS video_duration, '
    + '   v.published_at AS video_publish_date, u.name '
    + 'FROM videos AS v '
    + 'INNER JOIN channels AS c '
    + '   ON v.channel_id = c.id '
    + 'INNER JOIN subscriptions AS s '
    + '   ON c.id = s.channel_id '
    + 'INNER JOIN users AS u '
    + '   ON s.user_id = u.id '
    + 'WHERE u.name = \'Stephanie Bulger\' '
    + 'ORDER BY v.published_at';

export const task4Query = ''
    + 'SELECT c.description, c.photo_url AS channel_photo, c.created_at AS creation_date,'
    + '   COUNT(*) AS subscribers_count '
    + 'FROM channels AS c '
    + 'INNER JOIN subscriptions AS s '
    + '   ON c.id = s.channel_id '
    + 'WHERE c.id = \'79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76\' '
    + 'GROUP BY c.id';

export const task5Query = ''
    + 'SELECT v.title, COUNT(*) AS likes_count '
    + 'FROM videos AS v '
    + 'INNER JOIN likes AS l '
    + '   ON v.id = l.video_id '
    + 'WHERE l.created_at >= \'2021-09-01\' '
    + 'GROUP BY v.title '
    + 'HAVING COUNT('
    + '   CASE'
    + '     WHEN l.positive = true THEN 1'
    + '   END) > 4 '
    + 'ORDER BY COUNT(*) DESC '
    + 'LIMIT 10';

export const task6Query = ''
    + 'SELECT u.name AS user_name, u.avatar_url AS user_avatar, c.photo_url AS channel_photo, '
    + '   c.description AS channel_description, s.level AS subscription_level, '
    + '   s.subscribed_at AS subscription_date '
    + 'FROM subscriptions AS s '
    + 'INNER JOIN channels AS c ON c.id = s.channel_id '
    + 'INNER JOIN users AS u ON u.id = s.user_id '
    + 'WHERE u.id IN ('
    + '   SELECT ch.user_id '
    + '   FROM users AS us '
    + '   INNER JOIN subscriptions AS sc '
    + '       ON sc.user_id = us.id '
    + '   INNER JOIN channels AS ch '
    + '       ON ch.id = sc.channel_id '
    + '   WHERE us.name = \'Ennis Haestier\' '
    + ') '
    + 'ORDER BY '
    + '   CASE s.level '
    + '       WHEN \'vip\' THEN 5 '
    + '       WHEN \'follower\' THEN 4 '
    + '       WHEN \'fan\' THEN 3 '
    + '       WHEN \'standard\' THEN 2 '
    + '       ELSE 1 '
    + '   END DESC, '
    + '   s.subscribed_at DESC;';
