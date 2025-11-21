import ContactForm from '../ContactForm';
import { Toaster } from "@/components/ui/toaster";

export default function ContactFormExample() {
  return (
    <div className="p-8 max-w-2xl">
      <ContactForm />
      <Toaster />
    </div>
  );
}
