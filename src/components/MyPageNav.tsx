import React from 'react';

export default function MyPageNav({ userName }: { userName: string }) {
  const base = `/${userName}`;
  return (
    <nav className="flex flex-col sm:flex-row gap-3 sm:items-center">
      <a
        href={`${base}/purchases`}
        className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
      >
        나의 구매 이력
      </a>
      <a
        href={`${base}/points/deposit`}
        className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
      >
        포인트 등록
      </a>
      <a
        href={`${base}/points/manage`}
        className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
      >
        포인트 관리
      </a>
      <a
        href={`${base}/profile/edit`}
        className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
      >
        회원정보 수정
      </a>
    </nav>
  );
}
