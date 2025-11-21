import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import type { Post } from "@shared/schema";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

export default function Home() {
  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                精選文章
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                探索最新的技術趨勢與深度分析
              </p>
            </div>
            
            {isLoading ? (
              <div className="text-center text-muted-foreground">載入中...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(0, 3).map((post) => (
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
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">關於我</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              我是一名對科技充滿熱情的學生，專注於程式設計、人工智慧和網路安全等領域。
              透過這個部落格，我希望分享我的學習心得與技術見解，與更多志同道合的朋友交流。
            </p>
            <p className="text-sm text-muted-foreground">
              歡迎透過電子郵件與我聯繫：
              <a
                href="mailto:buding1230@apps.ntpc.edu.tw"
                className="text-primary hover:underline ml-1"
                data-testid="link-about-email"
              >
                buding1230@apps.ntpc.edu.tw
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
