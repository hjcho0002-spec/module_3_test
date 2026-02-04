import './globals.css';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: '방화벽 로그 모니터',
  description: '방화벽 로그 모니터링 웹 어드민',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="flex h-screen bg-gray-50">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
