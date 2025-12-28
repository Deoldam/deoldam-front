import React from 'react';
import PurchaseCard from './PurchaseCard';

type Props = {
  userName: string;
};

const DUMMY: Array<{ id: number; title: string; date: string; price: string; status: string }> = [
  { id: 1, title: '빈티지 의자', date: '2025-12-01', price: '₩45,000', status: '배송완료' },
  { id: 2, title: '레트로 스피커', date: '2025-11-21', price: '₩120,000', status: '결제완료' },
  { id: 3, title: '수공예 램프', date: '2025-10-05', price: '₩32,500', status: '취소' },
];

export default function PurchasesList({ userName }: Props) {
  return (
    <div className="space-y-6">
      {/* skeleton area */}
      <div className="flex flex-col gap-3">
        <div className="h-4 bg-gray-100 rounded w-1/3 animate-pulse"></div>
        <div className="h-3 bg-gray-100 rounded w-2/3 animate-pulse"></div>
      </div>

      <div className="grid gap-4">
        {DUMMY.map((item) => (
          <PurchaseCard key={item.id} item={item} />
        ))}
      </div>

      <div className="text-center text-sm text-gray-500">더보기 버튼은 추후 API 연동 시 추가 예정</div>
      <div className="text-xs text-gray-400">조회 사용자: {userName}</div>
    </div>
  );
}
