import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Updated FAQ content for Sam4You

const faqs = [
  {
    question: "What kind of businesses can benefit from Sam4You?",
    answer:
      "Whether you’re a startup, small business, or an established brand, our solutions are designed to help you scale, automate workflows, and grow faster with digital innovation and AI-powered strategies.",
  },
  {
    question: "How do your AI-powered tools help my business?",
    answer:
      "Our AI automation tools save you time, reduce costs, and deliver smarter insights. From customer engagement to marketing campaigns, AI helps your business stay ahead of the competition 24/7.",
  },
  {
    question: "Do you offer custom solutions or ready-made packages?",
    answer:
      "Every business is unique, so we create tailor-made strategies and digital solutions to match your goals. We also provide flexible packages if you’re looking for faster deployment.",
  },
  {
    question: "How soon can I see results?",
    answer:
      "Some clients start seeing improvements within weeks, while long-term strategies bring sustainable growth in 2–6 months. During consultation, we’ll give you a realistic roadmap for results.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely! We provide complete support including updates, performance optimization, security monitoring, and digital marketing assistance — so you can focus on growth while we handle the rest.",
  },
  {
    question: "Can you improve my existing website or marketing?",
    answer:
      "Yes. We specialize in redesigning websites, fixing performance issues, and optimizing SEO & marketing campaigns to help you reach a wider audience and maximize ROI.",
  },
  {
    question: "How do I get started with Sam4You?",
    answer:
      "Simply contact us or book a free consultation. We’ll understand your business goals and provide a step-by-step roadmap to help you achieve them.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear answers to help you understand how we can grow your business
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
