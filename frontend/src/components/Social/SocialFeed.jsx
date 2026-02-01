import PostCard from './PostCard';

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      title: 'Software Engineer at TechCorp',
      avatar: 'https://via.placeholder.com/40',
    },
    content: 'Excited to share my latest project! 🚀 Working on a new social media platform that connects developers worldwide. #Tech #Innovation',
    timestamp: '2h ago',
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      title: 'Product Manager at StartupXYZ',
      avatar: 'https://via.placeholder.com/40',
    },
    content: 'Just finished a great workshop on agile methodologies. The key takeaway: communication is everything! What are your thoughts on agile?',
    timestamp: '4h ago',
    likes: 28,
    comments: 12,
  },
  {
    id: 3,
    user: {
      name: 'Alex Johnson',
      title: 'UX Designer at DesignStudio',
      avatar: 'https://via.placeholder.com/40',
    },
    content: 'New design trends for 2024: minimalism, accessibility, and user-centric approaches. How are you incorporating these in your projects?',
    timestamp: '6h ago',
    likes: 67,
    comments: 15,
  },
];

export default function SocialFeed() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <header className="py-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Social Feed
          </h2>
        </header>

        <div className="py-6 space-y-6">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
