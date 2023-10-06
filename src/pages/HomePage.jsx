import CreatePostButton from "../features/post/CreatePostButton";
import PostList from "../features/post/PostList";

export default function HomePage() {
  return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
      <CreatePostButton />
      <PostList />
    </div>
  );
}
