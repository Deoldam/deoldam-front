'use client';

import React, { useState } from 'react';

type Account = { id: string; bank: string; number: string };

export default function PointDeposit({ userName }: { userName: string }) {
  const [currentPoints, setCurrentPoints] = useState<number>(12500);
  const [selectedAccount, setSelectedAccount] = useState<string>('1');
  const [amount, setAmount] = useState<number>(10000);
  const [message, setMessage] = useState<string>('');

  const ACCOUNTS: Account[] = [
    { id: '1', bank: '국민은행', number: '123-456-7890' },
    { id: '2', bank: '신한은행', number: '987-654-3210' },
    { id: '3', bank: '카카오뱅크', number: '010-2222-3333' },
  ];

  function handleDeposit() {
    // 더미 로직: 포인트 충전 처리
    setCurrentPoints((p) => p + amount);
    setMessage(`포인트 ${amount.toLocaleString()}원이 충전되었습니다.`);
  }

  return (
    <div className="max-w-screen-md w-full bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">포인트 등록</h2>
      <p className="text-sm text-gray-600 mb-4">
        현재 포인트: <span className="font-medium text-gray-800">{currentPoints.toLocaleString()}원</span>
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">충전할 계좌 선택</label>
          <select
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            className="w-full border rounded-md p-2 bg-gray-50"
          >
            {ACCOUNTS.map((a) => (
              <option key={a.id} value={a.id}>{`${a.bank} · ${a.number}`}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">충전 금액</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border rounded-md p-2 bg-gray-50"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDeposit}
            className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            충전하기
          </button>
          <button
            onClick={() => {
              setAmount(10000);
              setMessage('');
            }}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            초기화
          </button>
        </div>

        {message && <div className="text-sm text-green-600">{message}</div>}

        <div className="text-xs text-gray-500">※ 더미 데이터</div>
      </div>
    </div>
  );
}
