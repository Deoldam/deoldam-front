import React from 'react';

type Item = {
  id: number;
  title: string;
  date: string;
  price: string;
  status: string;
};

export default function PurchaseCard({ item }: { item: Item }) {
  return (
    <div className="w-full bg-white border rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
          <p className="text-sm text-gray-500 mt-1">구매일: {item.date}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-800">{item.price}</p>
          <p className="text-sm text-gray-500 mt-1">상태: {item.status}</p>
        </div>
      </div>
    </div>
  );
}
