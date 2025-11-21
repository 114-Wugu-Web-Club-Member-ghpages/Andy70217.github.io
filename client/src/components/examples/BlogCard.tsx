import BlogCard from '../BlogCard';
import codingImage from '@assets/generated_images/Coding_workspace_blog_post_b1f6bae7.png';

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <BlogCard
        id="1"
        title="深入理解 React 18 並行渲染"
        excerpt="探索 React 18 的全新並行渲染機制，了解如何利用 Suspense 和 Transitions 提升應用效能。"
        category="程式設計"
        imageUrl={codingImage}
        readTime="5 分鐘"
        publishedAt="2024-01-15"
        slug="react-18-concurrent-rendering"
      />
    </div>
  );
}
