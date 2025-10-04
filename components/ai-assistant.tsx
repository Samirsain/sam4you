"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Sam, your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes("service") || input.includes("price") || input.includes("cost")) {
      return "We offer web development, SEO, AI tools, and digital marketing services. For pricing details, please use the 'Send a Mail' or 'Send a Message' buttons in our contact section. We'll provide you with a customized quote based on your requirements."
    }
    
    if (input.includes("contact") || input.includes("reach") || input.includes("phone")) {
      return "You can contact us through:\n• Email: Use the 'Send a Mail' button\n• WhatsApp: Use the 'Send a Message' button\n• Contact form: Fill out the form on our website\nWe typically respond within 24 hours."
    }
    
    if (input.includes("website") || input.includes("development") || input.includes("web")) {
      return "We specialize in creating modern, responsive websites with:\n• Custom design and development\n• SEO optimization\n• Mobile-first approach\n• Fast loading times\n• E-commerce integration\nWould you like to discuss your project requirements?"
    }
    
    if (input.includes("seo") || input.includes("search") || input.includes("ranking")) {
      return "Our SEO services include:\n• Keyword research and analysis\n• On-page and technical SEO\n• Content optimization\n• Link building strategies\n• Local SEO for businesses\n• Monthly reporting and analytics"
    }
    
    if (input.includes("ai") || input.includes("tools") || input.includes("automation")) {
      return "We offer various AI tools and automation services:\n• Content generation tools\n• SEO analysis tools\n• Social media automation\n• Email marketing automation\n• Custom AI solutions\nVisit our AI Tools page to explore our free tools."
    }
    
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! Welcome to Sam4You. I'm Sam, your AI assistant. I'm here to help you with information about our services, pricing, or any questions you might have. What would you like to know?"
    }
    
    if (input.includes("thank") || input.includes("thanks")) {
      return "You're welcome! I'm Sam, and I'm here to help. Is there anything else I can assist you with today?"
    }
    
    return "I understand you're asking about: " + userInput + ". I'm Sam, and I'm here to help! For detailed information about our services, pricing, or to discuss your specific requirements, please use the 'Send a Mail' or 'Send a Message' buttons in our contact section. Our team will provide you with personalized assistance."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700"
        size="lg"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 h-[calc(100vh-8rem)] sm:h-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3 border-b px-3 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xs sm:text-sm font-medium">Sam - AI Assistant</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-5 w-5 sm:h-6 sm:w-6 p-0"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 ${
                    message.isUser
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  <div className="flex items-start gap-1.5 sm:gap-2">
                    {!message.isUser && (
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                    )}
                    {message.isUser && (
                      <User className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="p-2 sm:p-4 border-t">
            <div className="flex gap-1.5 sm:gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-xs sm:text-sm"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="px-2 sm:px-3 h-8 sm:h-9"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
