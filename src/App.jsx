
import { useState, useEffect } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-teal-500 flex items-center justify-center p-4">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* 主内容 */}
      <div className={`relative z-10 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo/图标 */}
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>

        {/* 标题 */}
            <svg className="w-12 h-12 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          欢迎来到
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white/90 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          我们的应用
        </h2>

        {/* 副标题 */}
        <p className="text-lg text-white/70 max-w-md mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          探索无限可能，开启您的精彩旅程。我们致力于为您提供最佳体验。
        </p>

        {/* 按钮组 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            开始使用
          </button>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300">
            了解更多
          </button>
          <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">

        {/* 底部提示 */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-white/50 text-sm">
            由 React + Vite + Tailwind CSS 驱动
          </p>
        </div>
      </div>
    </div>
  );
}
