import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Tech_hero_background_cff6b9dc.png";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            探索科技的無限可能
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed">
            身為學生，我致力於分享程式設計、人工智慧、網路安全等領域的深度見解，與您一同探索科技世界的前沿知識。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/blog" data-testid="link-hero-blog">
              <Button size="lg" className="gap-2 min-w-[160px]">
                閱讀文章
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact" data-testid="link-hero-contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 min-w-[160px] backdrop-blur-md bg-background/20"
              >
                <Mail className="w-4 h-4" />
                聯繫我
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
