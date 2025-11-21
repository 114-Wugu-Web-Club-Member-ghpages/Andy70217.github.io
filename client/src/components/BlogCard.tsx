import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  readTime: string;
  publishedAt: string;
  slug: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  category,
  imageUrl,
  readTime,
  publishedAt,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} data-testid={`link-post-${id}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 transition-transform duration-200 hover:-translate-y-1 h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            data-testid={`img-post-${id}`}
          />
        </div>
        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" data-testid={`badge-category-${id}`}>
              {category}
            </Badge>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 line-clamp-2" data-testid={`text-title-${id}`}>
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3" data-testid={`text-excerpt-${id}`}>
              {excerpt}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span data-testid={`text-date-${id}`}>{publishedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span data-testid={`text-readtime-${id}`}>{readTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
