'use client';

import { useEffect, useState } from 'react';
import { healthCheck } from '@/lib/api';

export default function HomePage() {
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await healthCheck();
        setHealthStatus(data);
      } catch (error) {
        console.error('Health check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Logs */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">전체 로그</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">12,845</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">
            <span className="font-medium">+12%</span> 지난주 대비
          </p>
        </div>

        {/* Critical Alerts */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">긴급 알림</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">23</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-red-600 mt-2">
            <span className="font-medium">+3</span> 최근 1시간
          </p>
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">활성 사용자</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">142</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-medium">95%</span> 정상 상태
          </p>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">시스템 상태</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">99.9%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">
            <span className="font-medium">정상</span> 운영 중
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">최근 활동</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              {
                type: 'danger',
                title: '비정상 로그인 시도 감지',
                time: '2분 전',
                ip: '192.168.1.105',
              },
              {
                type: 'warning',
                title: '다수 접속 시도',
                time: '15분 전',
                ip: '10.0.0.50',
              },
              {
                type: 'success',
                title: '시스템 업데이트 완료',
                time: '1시간 전',
                ip: '-',
              },
              {
                type: 'info',
                title: '정기 백업 실행',
                time: '3시간 전',
                ip: '-',
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'danger'
                      ? 'bg-red-500'
                      : activity.type === 'warning'
                      ? 'bg-yellow-500'
                      : activity.type === 'success'
                      ? 'bg-green-500'
                      : 'bg-blue-500'
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {activity.time} {activity.ip !== '-' && `• IP: ${activity.ip}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backend Connection Status */}
      {loading ? (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-700">백엔드 연결 확인 중...</p>
        </div>
      ) : healthStatus ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-700 font-medium">
            백엔드 연결 성공: {healthStatus.app_name} v{healthStatus.version}
          </p>
        </div>
      ) : (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-700 font-medium">
            백엔드 연결 실패. 서버 상태를 확인해주세요.
          </p>
        </div>
      )}
    </div>
  );
}
