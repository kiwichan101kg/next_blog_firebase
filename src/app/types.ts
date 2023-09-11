export type SessionType = {
  expires: string;
  user: { id: string; email: string; name: string; image: string };
};

export type UserInfo = {
  user_id: string;
  user_name: string;
  profile_image_url?: string;
  profile_background_image_url?: string;
  profile_text?: string;
  followers: string[];
  followings: string[];
};
