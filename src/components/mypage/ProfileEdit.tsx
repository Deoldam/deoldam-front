'use client';

import React, { useState } from 'react';

export default function ProfileEdit({ userName }: { userName: string }) {
  const [nickname, setNickname] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleSave() {
    // 더미 로직: 유효성 간단히 검사
    if (!nickname || !name || !email) {
      setMessage('필수 항목을 모두 입력해주세요.');
      return;
    }
    setMessage('회원정보가 저장되었습니다. (데모)');
  }

  return (
    <div className="max-w-screen-md w-full bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">회원정보 수정</h2>
      <p className="text-sm text-gray-600 mb-4">기본 정보를 수정할 수 있습니다. (데모)</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">닉네임</label>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full border rounded-md p-2 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">이름</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md p-2 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">이메일</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md p-2 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md p-2 bg-gray-50"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            저장
          </button>
          <button
            onClick={() => {
              setNickname('');
              setName('');
              setEmail('');
              setPassword('');
              setMessage('');
            }}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            초기화
          </button>
        </div>

        {message && <div className="text-sm text-green-600">{message}</div>}
      </div>
    </div>
  );
}
