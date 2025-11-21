import { Link } from "wouter";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">關於</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              探索科技世界的前沿知識，分享程式設計、人工智慧、網路安全等領域的深度見解。
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">快速連結</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" data-testid="link-footer-home">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">首頁</span>
              </Link>
              <Link href="/blog" data-testid="link-footer-blog">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">文章</span>
              </Link>
              <Link href="/contact" data-testid="link-footer-contact">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">聯繫</span>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">聯繫方式</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:buding1230@apps.ntpc.edu.tw"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>buding1230@apps.ntpc.edu.tw</span>
              </a>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="p-2 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-footer-github"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-footer-linkedin"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tech Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
