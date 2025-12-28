import PurchasesList from '@/components/mypage/PurchasesList';

export default async function PurchasesPage({
  params,
}: {
  params: Promise<{ userName?: string }> | { userName?: string };
}) {
  const resolved = await params;
  const userName = resolved?.userName;

  if (!userName) {
    console.warn(
      'params.userName is undefined. 확인: 폴더명이 `src/app/[userName]/purchases/page.tsx`인지, 요청 URL에 userName 세그먼트가 있는지.',
    );
  } else {
    console.log('userName:', userName);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 mt-24">
      <section className="w-full max-w-screen-lg">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">{userName ?? '게스트'}님의 구매 이력</h1>
        <p className="text-sm text-gray-600 mb-6">최근 구매 내역을 표시합니다.</p>
        <PurchasesList userName={userName ?? ''} />
      </section>
    </main>
  );
}
