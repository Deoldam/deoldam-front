'use client';

import { useParams } from 'next/navigation';

export default function tardeDetailPage() {
  const params = useParams<{ tradeId: string }>();
  console.log(params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 mt-24">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">상품 설명 페이지</h1>
        <p className="mt-4 text-lg text-gray-600">상품 상세 거래 페이지입니다.</p>
        <p className="mt-4 text-lg text-gray-600">상품 번호: {params.tradeId}</p>
        <div className="mt-8">
          <a href="/" className="rounded-xl border px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
            메인 페이지로 이동
          </a>
        </div>
      </section>

      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
      >
        <div className="flex items-center justify-center w-24 h-48 bg-neutral-200 rounded-base sm:w-3xl sm:h-96">
          <svg
            className="w-11 h-11 text-fg-disabled"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
        </div>
        <div className="w-full">
          <div className="h-6 bg-neutral-200 rounded-full w-96 mb-12"></div>
          <div className="h-2 bg-neutral-200 rounded-full max-w-[480px] mb-4"></div>
          <div className="h-2 bg-neutral-200 rounded-full mb-4"></div>
          <div className="h-2 bg-neutral-200 rounded-full max-w-[440px] mb-12"></div>
          <div className="h-2 bg-neutral-200 rounded-full max-w-[460px] mb-4"></div>
          <div className="h-2 bg-neutral-200 rounded-full max-w-[360px] mb-12"></div>
          <div className="h-2 bg-neutral-200 rounded-full mb-4"></div>
          <div className="h-2 bg-neutral-200 rounded-full max-w-[440px] mb-24"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="mt-12 space-y-8 animate-pulse md:space-y-0 md:space-x-48 rtl:space-x-reverse md:flex md:items-cente">
        <div className="m-64"></div>
        <div role="status" className="max-w-sm p-4 border border-gray-300 rounded-xl shadow-xs animate-pulse md:p-6">
          <div className="h-2.5 bg-neutral-200 rounded-full w-32 mb-4"></div>
          <div className="w-48 h-2 mb-10 bg-neutral-200 rounded-full"></div>
          <div className="flex items-baseline mt-4">
            <div className="w-24  bg-neutral-200 rounded-t-full h-72"></div>
            <div className="w-24  h-56 ms-6 bg-neutral-200 rounded-t-full"></div>
            <div className="w-24  bg-neutral-200 rounded-t-full h-72 ms-6"></div>
            <div className="w-24  h-64 ms-6 bg-neutral-200 rounded-t-full"></div>
            <div className="w-24  bg-neutral-200 rounded-t-full h-80 ms-6"></div>
            <div className="w-24  bg-neutral-200 rounded-t-full h-72 ms-6"></div>
            <div className="w-24  bg-neutral-200 rounded-t-full h-80 ms-6"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </main>
  );
}
