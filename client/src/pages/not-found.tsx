import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">頁面未找到</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          抱歉，您訪問的頁面不存在。請檢查網址是否正確，或返回首頁。
        </p>
        <Link href="/" data-testid="link-home">
          <Button size="lg" className="gap-2">
            <Home className="w-4 h-4" />
            返回首頁
          </Button>
        </Link>
      </div>
    </div>
  );
}
