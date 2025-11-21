import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "電子郵件",
      content: "buding1230@apps.ntpc.edu.tw",
      action: "mailto:buding1230@apps.ntpc.edu.tw",
    },
    {
      icon: MapPin,
      title: "位置",
      content: "台灣 新北市",
      action: null,
    },
    {
      icon: Clock,
      title: "回覆時間",
      content: "通常在 24-48 小時內回覆",
      action: null,
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("buding1230@apps.ntpc.edu.tw");
    console.log("Email copied to clipboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                聯繫我
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                有任何問題或合作機會？歡迎與我聯繫
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">傳送訊息</h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">聯繫資訊</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-md bg-primary/10">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {info.content}
                          </p>
                          {info.action && (
                            <a href={info.action} className="mt-2 inline-block">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-0 h-auto"
                                data-testid="button-email-action"
                              >
                                發送郵件
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}

                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="font-semibold mb-2">快速複製郵件地址</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      點擊下方按鈕複製我的電子郵件地址
                    </p>
                    <Button
                      onClick={handleCopyEmail}
                      className="w-full"
                      data-testid="button-copy-email"
                    >
                      複製郵件地址
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
