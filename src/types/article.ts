export type Article = {
  _id: string;
  title: string;
  text: string;
  image?: string;
  video?: string;
  postedBy?: string;
  scheduledAt?: string;
};
