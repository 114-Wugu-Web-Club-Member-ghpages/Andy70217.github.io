import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Post } from "@shared/schema";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");

  const { data: post, isLoading } = useQuery<Post>({
    queryKey: [`/api/posts/${params?.slug}`],
    enabled: !!params?.slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 flex items-center justify-center">
          <div className="text-center text-muted-foreground">載入中...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
            <Link href="/blog" data-testid="link-back-to-blog">
              <Button>返回文章列表</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <article>
          <div className="relative h-[400px] overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
              data-testid="img-post-hero"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
            <div className="mb-8">
              <Link href="/blog" data-testid="link-back">
                <Button variant="ghost" size="sm" className="gap-2 mb-6">
                  <ArrowLeft className="w-4 h-4" />
                  返回文章列表
                </Button>
              </Link>

              <Badge variant="secondary" className="mb-4" data-testid="badge-category">
                {post.category}
              </Badge>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" data-testid="text-title">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span data-testid="text-date">
                    {format(new Date(post.publishedAt), "yyyy 年 MM 月 dd 日", { locale: zhTW })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span data-testid="text-readtime">{post.readTime}</span>
                </div>
              </div>
            </div>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-16"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
              data-testid="text-content"
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
