'use client';

import React, { useState } from 'react';

export default function PointManage({ userName }: { userName: string }) {
  const [withdrawAccount, setWithdrawAccount] = useState<string>('');
  const [withdrawAmount, setWithdrawAmount] = useState<number>(5000);
  const [currentPoints, setCurrentPoints] = useState<number>(12500);
  const [message, setMessage] = useState<string>('');

  function handleWithdraw() {
    if (withdrawAmount <= 0) {
      setMessage('출금 금액은 0보다 커야 합니다.');
      return;
    }
    if (withdrawAmount > currentPoints) {
      setMessage('잔여 포인트가 부족합니다.');
      return;
    }
    setCurrentPoints((p) => p - withdrawAmount);
    setMessage(`출금 요청이 접수되었습니다. 출금액: ${withdrawAmount.toLocaleString()}원`);
  }

  return (
    <div className="max-w-screen-md w-full bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">포인트 관리</h2>
      <p className="text-sm text-gray-600 mb-4">
        현재 포인트: <span className="font-medium text-gray-800">{currentPoints.toLocaleString()}원</span>
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">출금 계좌번호</label>
          <input
            value={withdrawAccount}
            onChange={(e) => setWithdrawAccount(e.target.value)}
            placeholder="은행명 및 계좌번호 입력"
            className="w-full border rounded-md p-2 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">출금 금액</label>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(Number(e.target.value))}
            className="w-full border rounded-md p-2 bg-gray-50"
          />
        </div>

        <div className="text-sm text-gray-600">
          잔여 포인트: <span className="font-medium text-gray-800">{currentPoints.toLocaleString()}원</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleWithdraw}
            className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            출금 요청
          </button>
          <button
            onClick={() => {
              setWithdrawAmount(0);
              setWithdrawAccount('');
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
