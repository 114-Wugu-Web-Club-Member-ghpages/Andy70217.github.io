import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import type { Post } from "@shared/schema";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const { data: allPosts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allPosts.map((post) => post.category)));
    return ["全部", ...uniqueCategories];
  }, [allPosts]);

  const filteredPosts = useMemo(
    () =>
      selectedCategory === "全部"
        ? allPosts
        : allPosts.filter((post) => post.category === selectedCategory),
    [allPosts, selectedCategory]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                文章列表
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                探索科技世界的深度見解
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-category-${category}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {isLoading ? (
              <div className="text-center text-muted-foreground">載入中...</div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center text-muted-foreground">暫無文章</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    category={post.category}
                    imageUrl={post.imageUrl}
                    readTime={post.readTime}
                    publishedAt={format(new Date(post.publishedAt), "yyyy-MM-dd", { locale: zhTW })}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
