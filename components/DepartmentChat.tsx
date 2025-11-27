import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { IconSend, IconSparkles, IconBot, IconUser } from './Icons';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const DepartmentChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'أهلاً بك! أنا المساعد الذكي لقسم هندسة تقنيات الأجهزة الطبية. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // NOTE: Ensure process.env.API_KEY is set in your environment or replaced here.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' }); 
      
      const systemContext = `
        أنت المرشد الأكاديمي الذكي لجامعة المستقبل في العراق، وتحديداً لقسم "هندسة تقنيات الأجهزة الطبية".
        معلومات القسم الرسمية التي يجب أن تعتمد عليها:
        - الأجور الدراسية: 3,000,000 (ثلاثة ملايين) دينار عراقي سنوياً.
        - مدخلات القبول: أحيائي، تطبيقي، علمي، وإعداديات الصناعة (قسم الإلكترونيك والسيطرة، الأجهزة الطبية، الاتصالات).
        - معدلات القبول (تقريبية): الصباحي 58، المسائي 60، وللمهني الصباحي 60 والمسائي 62.
        - أهمية القسم: دمج بين الطب والهندسة، صيانة الأجهزة الطبية، إدارة المستشفيات هندسياً.
        - مجالات العمل: المستشفيات الحكومية والأهلية، شركات الأجهزة الطبية (مبيعات وصيانة)، وزارة الصحة.
        - العنوان: بابل - طريق حلة - نجف.
        
        تعليمات الإجابة:
        1. اجب باللغة العربية دائماً.
        2. كن مهذباً، مشجعاً، ومختصراً ومفيداً.
        3. نسق الإجابة بنقاط واضحة إذا تطلب الأمر.
        4. إذا سئلت عن شيء خارج السياق الأكاديمي أو الهندسي، اعتذر بلطف وعد للموضوع.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
          systemInstruction: systemContext,
        },
      });

      const aiText = response.text || "عذراً، حدث خطأ في الاتصال. يرجى المحاولة لاحقاً.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "عذراً، تأكد من مفتاح API أو اتصال الإنترنت." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "ما هي مجالات العمل بعد التخرج؟",
    "كم تبلغ الأجور الدراسية؟",
    "هل القسم يقبل خريجي الصناعة؟",
    "ما هي المواد التي تدرس في القسم؟"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-16">
      <div className="bg-white border border-gray-200 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[600px] relative">
        
        {/* Header */}
        <div className="bg-slate-800 p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <IconBot className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">المستشار الأكاديمي الذكي</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-gray-300 text-xs">متصل الآن - مدعوم بالذكاء الاصطناعي</span>
              </div>
            </div>
          </div>
          <IconSparkles className="w-6 h-6 text-cyan-400 opacity-50" />
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-6 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[80%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200' : 'bg-cyan-100'}`}>
                  {msg.role === 'user' ? <IconUser className="w-5 h-5 text-slate-600" /> : <IconSparkles className="w-5 h-5 text-cyan-600" />}
                </div>

                {/* Bubble */}
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions & Input */}
        <div className="bg-white p-4 border-t border-gray-100 z-10">
          
          {/* Chips */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-2 no-scrollbar">
            {suggestions.map((s, i) => (
              <button 
                key={i} 
                onClick={() => { setInput(s); }}
                className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-cyan-50 text-slate-600 hover:text-cyan-700 text-xs font-bold rounded-full transition-colors border border-transparent hover:border-cyan-200"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Field */}
          <div className="relative flex items-center bg-gray-50 rounded-full border border-gray-200 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-100 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب سؤالك هنا..."
              className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-4 text-gray-700 placeholder-gray-400"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute left-2 p-2 bg-slate-800 hover:bg-slate-700 disabled:bg-gray-300 text-white rounded-full transition-colors shadow-md"
            >
              <IconSend className={`w-5 h-5 ${isLoading ? 'opacity-0' : 'opacity-100'}`} />
              {isLoading && <div className="absolute inset-0 flex items-center justify-center"><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div></div>}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DepartmentChat;