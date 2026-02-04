export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <p>&copy; 2024 방화벽 로그 모니터. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary-600 transition">
            문서
          </a>
          <a href="#" className="hover:text-primary-600 transition">
            지원
          </a>
          <a href="#" className="hover:text-primary-600 transition">
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
}
